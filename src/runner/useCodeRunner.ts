import { useCallback, useRef, useState } from "react";
import { runInWorker } from "./runnerManager";
import type { RunOutcome, RunRequest } from "./types";

/**
 * React glue around the runner. Tracks the running flag and the latest outcome,
 * and ignores stale results if a newer run starts before an older one settles.
 */
export function useCodeRunner() {
  const [running, setRunning] = useState(false);
  const [outcome, setOutcome] = useState<RunOutcome | null>(null);
  const runToken = useRef(0);

  const run = useCallback(async (req: RunRequest, timeoutMs?: number) => {
    const token = ++runToken.current;
    setRunning(true);
    const result = await runInWorker(req, timeoutMs);
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
  }, []);

  return { running, outcome, run, reset };
}
