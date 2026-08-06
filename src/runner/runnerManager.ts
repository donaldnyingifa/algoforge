import { CODE_TIMEOUT_MS } from "@/lib/constants";
import type { RunOutcome, RunRequest } from "./types";

/**
 * Run a request in a fresh, disposable Web Worker and race it against a hard
 * timeout. If the worker doesn't answer in time (e.g. an infinite loop), it is
 * terminated and reported as a time-limit exceeded — the only safe way to kill
 * runaway user code, since a stuck worker can't post back.
 */
export function runInWorker(
  req: RunRequest,
  timeoutMs: number = CODE_TIMEOUT_MS,
): Promise<RunOutcome> {
  return new Promise((resolve) => {
    const worker = new Worker(new URL("./executor.worker.ts", import.meta.url), {
      type: "module",
    });

    let settled = false;
    const finish = (outcome: RunOutcome) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      worker.terminate();
      resolve(outcome);
    };

    const timer = setTimeout(() => {
      finish({
        status: "timeout",
        console: [],
        results: [],
        error: { message: "Time limit exceeded — possible infinite loop." },
        totalRuntimeMs: timeoutMs,
      });
    }, timeoutMs);

    worker.onmessage = (e: MessageEvent<RunOutcome>) => finish(e.data);
    worker.onerror = (e: ErrorEvent) => {
      e.preventDefault();
      finish({
        status: "runtimeError",
        console: [],
        results: [],
        error: { message: e.message || "Worker crashed while executing your code." },
        totalRuntimeMs: 0,
      });
    };

    worker.postMessage(req);
  });
}
