import type { ComparatorFlags, JudgeType, Json, Language } from "@/types";

/**
 * The set of languages a *runnable snippet* (RunnableSnippet / CodeEditor /
 * MarkdownView's fenced-code renderer) can be in. Deliberately its own type,
 * not reused from either `Language` (src/types/index.ts) or the literal
 * `"py"` on `PythonRunRequest` below:
 *  - `Language` (js | ts) is for problem-solving surfaces (`CodeByLanguage`,
 *    `preferredLanguage`, Settings'/Problem's language pickers) that have no
 *    Python content behind them and must stay exactly two-valued.
 *  - `PythonRunRequest.language` stays the literal `"py"` so `req.language`
 *    can discriminate `RunRequest | PythonRunRequest` in useCodeRunner.ts;
 *    widening it to this type would break that narrowing.
 * `RunnableLanguage` is the one place both worlds meet: whatever a snippet's
 * UI is allowed to display and let the learner run.
 */
export type RunnableLanguage = "js" | "ts" | "py";

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

/**
 * A Python run — kept as its own type rather than folded into `RunRequest`.
 * Python is only wired up for the Languages course's runnable lesson
 * snippets (see pyodideRunnerManager.ts and the AlgoForge project's
 * python-course-plan.md), never for DSA problems or Build Labs, so it never
 * needs `functionName` / `tests` / `harness` — and keeping it a separate
 * type means "py" can't accidentally leak into `Language`, which is used
 * for problem-solving surfaces (CodeByLanguage, preferredLanguage) that have
 * no Python content behind them.
 */
export interface PythonRunRequest {
  code: string;
  language: "py";
  mode: "scratch";
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
