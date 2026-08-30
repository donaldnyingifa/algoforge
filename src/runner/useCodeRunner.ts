import { useCallback, useRef, useState } from "react";
import { runInWorker } from "./runnerManager";
import { runPythonInWorker } from "./pyodideRunnerManager";
import type { PythonRunRequest, RunOutcome, RunRequest } from "./types";

export type RunPhase = "running" | "loading";

/**
 * React glue around the runner. Tracks the running flag and the latest outcome,
 * and ignores stale results if a newer run starts before an older one settles.
 *
 * Dispatches to one of two backends depending on `req.language`: the existing
 * disposable-per-run worker for JS/TS, or the persistent Pyodide worker for
 * Python (see pyodideRunnerManager.ts for why Python needs a different
 * lifecycle). Either way the caller gets the same `RunOutcome` shape back —
 * callers like RunnableSnippet don't need to know which one ran.
 */
export function useCodeRunner() {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<RunPhase>("running");
  const [outcome, setOutcome] = useState<RunOutcome | null>(null);
  const runToken = useRef(0);

  const run = useCallback(async (req: RunRequest | PythonRunRequest, timeoutMs?: number) => {
    const token = ++runToken.current;
    setRunning(true);
    setPhase("running");

    const result =
      req.language === "py"
        ? await runPythonInWorker(req.code, {
            timeoutMs,
            onPhase: (p) => {
              if (token === runToken.current) setPhase(p);
            },
          })
        : await runInWorker(req, timeoutMs);

    if (token === runToken.current) {
      setOutcome(result);
      setRunning(false);
    }
    return result;
  }, []);

  const reset = useCallback(() => {
    runToken.current++;
    setOutcome(null);
    setRunning(false);
    setPhase("running");
  }, []);

  return { running, phase, outcome, run, reset };
}
