// Deliberately a plain, hand-written static file — NOT compiled by Turbopack.
//
// `new Worker(new URL("./foo.ts", import.meta.url), { type: "module" })` is
// how every other worker in this app is built (see src/runner/executor.worker.ts
// and Monaco's ts.worker.js), but Turbopack compiles that form into a small
// bootstrap shim that loads the real code via `importScripts()` — which only
// exists in *classic* workers. That's invisible to plain JS/TS execution, but
// Pyodide explicitly detects it and refuses to initialize inside what looks
// like a classic worker (some of its own module code needs real ES-module
// semantics a classic/importScripts-loaded script can't provide). A literal
// path to a public/ asset — `new Worker("/pyodide-worker.js", {type:"module"})`
// — is just a static file as far as Next.js is concerned, so the browser
// builds a genuine, unshimmed module worker directly from it.
//
// See the AlgoForge project's `claude/python-course-plan.md` for the full
// story (the spike that found this) and src/runner/pyodideRunnerManager.ts
// for how this worker is kept alive and reused across runs.
//
// Scope: this only ever needs to support the Languages course's "scratch
// mode" snippets (print output, no return value, no test harness) — Python
// is not wired into DSA problems or Build Labs. See the plan doc.

let pyodideReadyPromise = null;

function getPyodide() {
  if (!pyodideReadyPromise) {
    pyodideReadyPromise = import("/pyodide/pyodide.mjs").then((mod) =>
      mod.loadPyodide({ indexURL: "/pyodide/" }),
    );
  }
  return pyodideReadyPromise;
}

self.onmessage = async (event) => {
  const { id, code } = event.data;
  const started = performance.now();
  const consoleLines = [];
  const record = (level) => (msg) => consoleLines.push({ level, text: msg });

  try {
    const pyodide = await getPyodide();
    pyodide.setStdout({ batched: record("log") });
    pyodide.setStderr({ batched: record("error") });

    // Resolves any imports in the snippet against Pyodide's bundled stdlib
    // (fast, no network for the modules this course's lessons actually use).
    // A third-party import not vendored locally falls through to Pyodide's
    // default package CDN and fails cleanly if that's unreachable, rather
    // than hanging — see the plan doc's note on out-of-scope imports.
    await pyodide.loadPackagesFromImports(code);
    await pyodide.runPythonAsync(code);

    self.postMessage({
      id,
      status: "ok",
      console: consoleLines,
      results: [],
      totalRuntimeMs: performance.now() - started,
    });
  } catch (err) {
    // Python has no separate "compile" phase the way the JS/TS path's Sucrase
    // transpile does — a syntax error and a runtime exception both surface
    // here, at execution time, as the same PythonError. Reported uniformly
    // as "runtimeError" rather than splitting out a "compileError" bucket
    // that wouldn't map to anything real on the Python side.
    //
    // err.message on a PythonError is the FULL Python traceback — file
    // paths inside the Pyodide runtime, the call stack, all of it. Useful in
    // a terminal, but far too noisy for the one-line error banner
    // RunnableSnippet/ResultsPanel render. A Python traceback always ends
    // with the real "ExceptionType: message" summary as its last non-blank
    // line (true for a SyntaxError exactly as for any runtime exception —
    // verified against real Pyodide output for several error types), so
    // that's what gets surfaced — matching how concise JS/TS runtime errors
    // already read.
    const raw = err && err.message ? String(err.message) : String(err);
    const summary = raw
      .split("\n")
      .reverse()
      .find((line) => line.trim() !== "") ?? raw;

    self.postMessage({
      id,
      status: "runtimeError",
      console: consoleLines,
      results: [],
      error: { message: summary },
      totalRuntimeMs: performance.now() - started,
    });
  }
};
