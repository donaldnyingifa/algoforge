import type { ComparatorFlags, JudgeType, Json, Language } from "@/types";

/** What kind of execution the worker should perform. */
export type RunMode = "scratch" | "tests" | "buildLab";

/** A single case handed to the worker (kept independent of TestCase for reuse). */
export interface RunnerTest {
  args: Json[];
  expected: Json;
  comparator?: ComparatorFlags;
  label?: string;
}

export interface RunRequest {
  code: string;
  language: Language;
  mode: RunMode;
  /** Required in "tests" mode: the function the worker resolves and calls. */
  functionName?: string;
  judgeType?: JudgeType;
  tests?: RunnerTest[];
  /**
   * Required in "buildLab" mode: assertion harness source that runs in the same
   * scope as the learner's code and calls the injected `assert` / `expect`.
   */
  harness?: string;
}

export interface ConsoleLine {
  level: "log" | "warn" | "error";
  text: string;
}

export interface TestResult {
  label: string;
  passed: boolean;
  runtimeMs: number;
  /** Human-readable preview of the expected value. */
  expected: string;
  /** Human-readable preview of what the code produced. */
  received: string;
  /** Set when the case threw. */
  error?: string;
}

export type RunStatus = "ok" | "compileError" | "runtimeError" | "timeout";

export interface RunErrorInfo {
  message: string;
  line?: number;
  column?: number;
}

export interface RunOutcome {
  status: RunStatus;
  console: ConsoleLine[];
  results: TestResult[];
  error?: RunErrorInfo;
  totalRuntimeMs: number;
}
