import { CODE_TIMEOUT_MS, PYTHON_COLD_TIMEOUT_MS } from "@/lib/constants";
import type { RunOutcome } from "./types";

/**
 * Python execution needs a persistent worker, unlike runnerManager.ts's
 * disposable-per-run one. Loading Pyodide costs ~2s (measured against this
 * app's actual production build — see the AlgoForge project's
 * python-course-plan.md), so paying that cost on every "Run" click would
 * make Python feel broken next to instant JS/TS. This module creates ONE
 * worker lazily, keeps it warm across runs, and only tears it down when a
 * run times out — the one case where termination is unavoidable, since a
 * hung Python call can't be cancelled from outside. The run after a timeout
 * pays the reload cost again; that tradeoff is intentional (see the plan
 * doc) rather than building a pool of pre-warmed workers to avoid it.
 *
 * The worker itself is `/public/pyodide-worker.js`, a plain static file
 * referenced by a literal path rather than `new URL(..., import.meta.url)`
 * — see that file's own comment for why (Turbopack wraps the latter form in
 * a shim Pyodide's own environment check refuses to run inside).
 */

interface PendingRun {
  resolve: (outcome: RunOutcome) => void;
  timer: ReturnType<typeof setTimeout>;
}

let worker: Worker | null = null;
let nextRequestId = 0;
const pending = new Map<number, PendingRun>();

function crashAllPending(message: string) {
  for (const [id, entry] of pending) {
    clearTimeout(entry.timer);
    entry.resolve({
      status: "runtimeError",
      console: [],
      results: [],
      error: { message },
      totalRuntimeMs: 0,
    });
    pending.delete(id);
  }
}

function getWorker(): Worker {
  if (worker) return worker;

  const w = new Worker("/pyodide-worker.js", { type: "module" });
  w.onmessage = (e: MessageEvent<{ id: number } & RunOutcome>) => {
    const { id, ...outcome } = e.data;
    const entry = pending.get(id);
    if (!entry) return; // already timed out and resolved
    pending.delete(id);
    clearTimeout(entry.timer);
    entry.resolve(outcome);
  };
  w.onerror = (e: ErrorEvent) => {
    e.preventDefault();
    // A crash invalidates every in-flight request — there's no per-request
    // state left to resolve them individually against.
    crashAllPending(e.message || "Python runtime crashed.");
    worker = null; // next run starts a fresh worker (and a fresh Pyodide load)
  };
  worker = w;
  return w;
}

/** True once a worker has been created — i.e. the *next* run will be warm. */
export function isPythonWorkerWarm(): boolean {
  return worker !== null;
}

export function runPythonInWorker(
  code: string,
  opts?: {
    timeoutMs?: number;
    /** Fired synchronously before the run starts, so the UI can show a
     *  distinct "loading the Python runtime…" state for a cold start
     *  instead of the normal "Running…" label. */
    onPhase?: (phase: "loading" | "running") => void;
  },
): Promise<RunOutcome> {
  const isFirstLoad = worker === null;
  opts?.onPhase?.(isFirstLoad ? "loading" : "running");
  const timeoutMs = opts?.timeoutMs ?? (isFirstLoad ? PYTHON_COLD_TIMEOUT_MS : CODE_TIMEOUT_MS);

  return new Promise((resolve) => {
    const w = getWorker();
    const id = ++nextRequestId;

    const timer = setTimeout(() => {
      pending.delete(id);
      // Python can't be cancelled mid-execution; the worker is unusable now.
      w.terminate();
      if (worker === w) worker = null;
      resolve({
        status: "timeout",
        console: [],
        results: [],
        error: { message: "Time limit exceeded — possible infinite loop." },
        totalRuntimeMs: timeoutMs,
      });
    }, timeoutMs);

    pending.set(id, { resolve, timer });
    w.postMessage({ id, code });
  });
}
