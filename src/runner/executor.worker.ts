/// <reference lib="webworker" />
import { transpileTs, parsePosition } from "./transpile";
import { deepEqual, effectiveFlags, preview } from "./judge";
import type {
  ConsoleLine,
  RunOutcome,
  RunRequest,
  TestResult,
} from "./types";

const ctx = self as unknown as DedicatedWorkerGlobalScope;

/** Remove module `export` keywords so code evaluates via `new Function`. */
function stripExports(code: string): string {
  return code
    .replace(/\bexport\s+default\s+/g, "")
    .replace(/\bexport\s+(?=(async\s+)?(function|class|const|let|var)\b)/g, "");
}

function cloneArgs(args: unknown[]): unknown[] {
  try {
    return structuredClone(args) as unknown[];
  } catch {
    return JSON.parse(JSON.stringify(args)) as unknown[];
  }
}

ctx.onmessage = (event: MessageEvent<RunRequest>) => {
  const req = event.data;
  const started = performance.now();
  const consoleLines: ConsoleLine[] = [];

  const record = (level: ConsoleLine["level"]) => (...parts: unknown[]) => {
    const text = parts
      .map((p) => (typeof p === "string" ? p : preview(p)))
      .join(" ");
    consoleLines.push({ level, text });
  };
  const sandboxConsole = {
    log: record("log"),
    warn: record("warn"),
    error: record("error"),
    info: record("log"),
    debug: record("log"),
  };

  // 1. Transpile (TS -> JS). Syntax errors become friendly compile errors.
  let source: string;
  try {
    source = req.language === "ts" ? transpileTs(req.code) : req.code;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const outcome: RunOutcome = {
      status: "compileError",
      console: consoleLines,
      results: [],
      error: { message, ...parsePosition(message) },
      totalRuntimeMs: performance.now() - started,
    };
    ctx.postMessage(outcome);
    return;
  }
  source = stripExports(source);

  // 2a. Scratch mode: just execute and capture console.
  if (req.mode === "scratch") {
    try {
      const factory = new Function("console", `"use strict";\n${source}\n`);
      factory(sandboxConsole);
      ctx.postMessage({
        status: "ok",
        console: consoleLines,
        results: [],
        totalRuntimeMs: performance.now() - started,
      } satisfies RunOutcome);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      ctx.postMessage({
        status: "runtimeError",
        console: consoleLines,
        results: [],
        error: { message },
        totalRuntimeMs: performance.now() - started,
      } satisfies RunOutcome);
    }
    return;
  }

  // 2c. Build-lab mode: run the learner's implementation against an assertion
  // harness that shares scope and reports via injected assert / expect.
  if (req.mode === "buildLab") {
    let harnessSrc: string;
    try {
      harnessSrc = req.language === "ts" ? transpileTs(req.harness ?? "") : req.harness ?? "";
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      ctx.postMessage({
        status: "compileError",
        console: consoleLines,
        results: [],
        error: { message, ...parsePosition(message) },
        totalRuntimeMs: performance.now() - started,
      } satisfies RunOutcome);
      return;
    }

    const labResults: TestResult[] = [];
    const assert = (name: string, condition: unknown) => {
      labResults.push({
        label: name,
        passed: Boolean(condition),
        runtimeMs: 0,
        expected: "truthy",
        received: preview(condition),
      });
    };
    const expect = (name: string, received: unknown, expected: unknown) => {
      labResults.push({
        label: name,
        passed: deepEqual(received, expected),
        runtimeMs: 0,
        expected: preview(expected),
        received: preview(received),
      });
    };

    try {
      const factory = new Function(
        "console",
        "assert",
        "expect",
        `"use strict";\n${source}\n${harnessSrc}`,
      );
      factory(sandboxConsole, assert, expect);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      ctx.postMessage({
        status: "runtimeError",
        console: consoleLines,
        results: labResults,
        error: { message },
        totalRuntimeMs: performance.now() - started,
      } satisfies RunOutcome);
      return;
    }

    ctx.postMessage({
      status: "ok",
      console: consoleLines,
      results: labResults,
      totalRuntimeMs: performance.now() - started,
    } satisfies RunOutcome);
    return;
  }

  // 2b. Tests mode: resolve the named function, then judge each case.
  const fnName = req.functionName ?? "";
  let fn: unknown;
  try {
    const factory = new Function(
      "console",
      `"use strict";\n${source}\n;return (typeof ${fnName} !== "undefined") ? ${fnName} : undefined;`,
    );
    fn = factory(sandboxConsole);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    ctx.postMessage({
      status: "compileError",
      console: consoleLines,
      results: [],
      error: { message, ...parsePosition(message) },
      totalRuntimeMs: performance.now() - started,
    } satisfies RunOutcome);
    return;
  }

  if (typeof fn !== "function") {
    ctx.postMessage({
      status: "runtimeError",
      console: consoleLines,
      results: [],
      error: {
        message: `Could not find a function named "${fnName}". Make sure it is declared at the top level.`,
      },
      totalRuntimeMs: performance.now() - started,
    } satisfies RunOutcome);
    return;
  }

  const callable = fn as (...a: unknown[]) => unknown;
  const flagsFor = (i: number) => effectiveFlags(req.judgeType, req.tests?.[i]?.comparator);
  const results: TestResult[] = [];
  const tests = req.tests ?? [];

  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    if (!test) continue;
    const args = cloneArgs(test.args);
    const label = test.label ?? `Case ${i + 1}`;
    const t0 = performance.now();
    let received: unknown;
    let error: string | undefined;
    try {
      const returned = callable(...args);
      received = req.judgeType === "mutateArgument" ? args[0] : returned;
    } catch (err) {
      error = err instanceof Error ? err.message : String(err);
    }
    const runtimeMs = performance.now() - t0;
    const passed = !error && deepEqual(received, test.expected, flagsFor(i));
    results.push({
      label,
      passed,
      runtimeMs,
      expected: preview(test.expected),
      received: error ? "—" : preview(received),
      error,
    });
  }

  ctx.postMessage({
    status: "ok",
    console: consoleLines,
    results,
    totalRuntimeMs: performance.now() - started,
  } satisfies RunOutcome);
};
