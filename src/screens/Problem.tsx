import { useCallback, useEffect, useRef, useState } from "react";
import type { editor as MonacoEditor } from "monaco-editor";
import { Link, useParams } from "@/lib/router";
import type { Language, Problem as ProblemType } from "@/types";
import { PageHeader, Card, DifficultyBadge } from "@/components/ui";
import { MarkdownView } from "@/components/MarkdownView";
import { CodeEditor } from "@/components/CodeEditor";
import { ResultsPanel } from "@/components/ResultsPanel";
import { SignInGate } from "@/components/SignInGate";
import { useCodeRunner } from "@/runner/useCodeRunner";
import { getProblemBySlug } from "@/data/curriculum";
import { useProgressStore } from "@/store/progressStore";
import { loadDraft, saveDraft, clearDraft } from "@/store/draftStore";
import { cn } from "@/lib/cn";
import { isProblemFree } from "@/lib/access";
import { buildFallbackWalkthrough } from "@/lib/walkthrough";

export function Problem() {
  const { slug = "" } = useParams();
  const problem = getProblemBySlug(slug);

  if (!problem) {
    return (
      <div>
        <PageHeader title="Problem not found" subtitle="This problem doesn't exist." />
        <Link to="/learn" className="text-sm font-medium text-forge-500 hover:underline">
          ← Back to Learn
        </Link>
      </div>
    );
  }
  return (
    <SignInGate
      allow={isProblemFree(problem.id)}
      title={problem.title}
      subtitle="Sign in to unlock this problem."
    >
      {/* Key by id so all editor/hint/solution state resets between problems. */}
      <ProblemWorkspace key={problem.id} problem={problem} />
    </SignInGate>
  );
}

function ProblemWorkspace({ problem }: { problem: ProblemType }) {
  const preferred = useProgressStore((s) => s.progress.settings.preferredLanguage);
  const status = useProgressStore(
    (s) => s.progress.problemStats[problem.id]?.status ?? "unattempted",
  );
  const logAttempt = useProgressStore((s) => s.logAttempt);
  const solveProblem = useProgressStore((s) => s.solveProblem);
  const addHintUsed = useProgressStore((s) => s.addHintUsed);

  const [language, setLanguage] = useState<Language>(preferred);
  const [code, setCode] = useState<string>(problem.starterCode[preferred]);
  const [revealedHints, setRevealedHints] = useState(0);
  const [gaveUp, setGaveUp] = useState(false);
  const { running, outcome, run } = useCodeRunner();

  const loadedRef = useRef(false);
  const checkpointRef = useRef<number>(Date.now());
  const editorRef = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null);

  const solved = status === "solved";
  const solutionsUnlocked = solved || gaveUp;
  const walkthrough = problem.walkthrough?.length
    ? problem.walkthrough
    : buildFallbackWalkthrough(problem);

  // Load the saved draft for this problem+language (falls back to starter).
  useEffect(() => {
    let active = true;
    loadedRef.current = false;
    void loadDraft(problem.id, language).then((draft) => {
      if (!active) return;
      setCode(draft ?? problem.starterCode[language]);
      loadedRef.current = true;
    });
    return () => {
      active = false;
    };
  }, [problem.id, language, problem.starterCode]);

  // Debounced autosave.
  useEffect(() => {
    if (!loadedRef.current) return;
    const t = setTimeout(() => void saveDraft(problem.id, language, code), 400);
    return () => clearTimeout(t);
  }, [code, language, problem.id]);

  const takeElapsed = useCallback(() => {
    const now = Date.now();
    const delta = now - checkpointRef.current;
    checkpointRef.current = now;
    return delta;
  }, []);

  const switchLanguage = (next: Language) => {
    if (next === language) return;
    void saveDraft(problem.id, language, code);
    setLanguage(next);
  };

  const doRun = useCallback(async () => {
    logAttempt(problem.id, takeElapsed());
    await run({
      code,
      language,
      mode: "tests",
      functionName: problem.functionName,
      judgeType: problem.judgeType,
      tests: problem.visibleTests,
    });
  }, [run, code, language, problem, logAttempt, takeElapsed]);

  const doSubmit = useCallback(async () => {
    const elapsed = takeElapsed();
    const allTests = [...problem.visibleTests, ...problem.hiddenTests];
    const res = await run({
      code,
      language,
      mode: "tests",
      functionName: problem.functionName,
      judgeType: problem.judgeType,
      tests: allTests,
    });
    const didSolve =
      res.status === "ok" &&
      res.results.length > 0 &&
      res.results.every((r) => r.passed);
    if (didSolve) solveProblem(problem.id, elapsed, problem.xp);
    else logAttempt(problem.id, elapsed);
  }, [run, code, language, problem, solveProblem, logAttempt, takeElapsed]);

  // Cmd/Ctrl+Enter = Run, Cmd/Ctrl+Shift+Enter = Submit.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        if (e.shiftKey) void doSubmit();
        else void doRun();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [doRun, doSubmit]);

  const revealNextHint = () => {
    if (revealedHints >= problem.hints.length) return;
    addHintUsed(problem.id);
    setRevealedHints((n) => n + 1);
  };

  const resetToStarter = () => {
    setCode(problem.starterCode[language]);
    void clearDraft(problem.id, language);
  };

  const focusEditor = () => {
    editorRef.current?.focus();
  };

  return (
    <div>
      <Link to="/learn" className="text-sm font-medium text-forge-500 hover:underline">
        ← Learn
      </Link>
      <div className="mb-4 mt-1 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold tracking-tight">{problem.title}</h1>
        <DifficultyBadge difficulty={problem.difficulty} />
        <span className="text-xs text-slate-400">+{problem.xp} XP</span>
        {solved && (
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
            ✓ Solved
          </span>
        )}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Left: prompt, hints, solutions */}
        <div className="space-y-5">
          <Card>
            <MarkdownView source={problem.statement} />

            <h3 className="mb-2 mt-5 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Examples
            </h3>
            <div className="space-y-3">
              {problem.examples.map((ex, i) => (
                <div key={i} className="rounded-lg bg-slate-50 p-3 font-mono text-xs dark:bg-slate-800/60">
                  <div>
                    <span className="text-slate-400">input: </span>
                    {ex.input}
                  </div>
                  <div>
                    <span className="text-slate-400">output: </span>
                    {ex.output}
                  </div>
                  {ex.explanation && (
                    <div className="mt-1 font-sans text-slate-500 dark:text-slate-400">
                      {ex.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h3 className="mb-2 mt-5 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Constraints
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {problem.constraints.map((c, i) => (
                <li key={i} className="font-mono text-xs">
                  {c}
                </li>
              ))}
            </ul>
          </Card>

          <HintsDrawer
            total={problem.hints.length}
            revealed={revealedHints}
            hints={problem.hints}
            onReveal={revealNextHint}
          />

          {walkthrough.length > 0 && (
            <WalkthroughCard
              steps={walkthrough}
              unlocked={revealedHints === problem.hints.length}
              onTryIt={focusEditor}
              resetKey={problem.id}
            />
          )}

          <SolutionsCard
            problem={problem}
            unlocked={solutionsUnlocked}
            onGiveUp={() => setGaveUp(true)}
          />
        </div>

        {/* Right: editor + results */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div
              className="flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
              role="group"
              aria-label="Editor language"
            >
              {(["js", "ts"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => switchLanguage(lang)}
                  aria-pressed={language === lang}
                  className={cn(
                    "px-3 py-1 text-xs font-semibold uppercase transition",
                    language === lang
                      ? "bg-forge-500 text-white"
                      : "bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={resetToStarter}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Reset to starter
            </button>
          </div>

          <div className="h-[340px] overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
            <CodeEditor
              value={code}
              onChange={setCode}
              language={language}
              onMount={(editor) => {
                editorRef.current = editor;
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => void doRun()}
              disabled={running}
              className="rounded-lg border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {running ? "Running…" : "Run"}
            </button>
            <button
              type="button"
              onClick={() => void doSubmit()}
              disabled={running}
              className="rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600 disabled:opacity-60"
            >
              Submit
            </button>
            <span className="text-xs text-slate-400">
              Run checks {problem.visibleTests.length} visible · Submit adds{" "}
              {problem.hiddenTests.length} hidden
            </span>
          </div>

          <div className="h-[280px]">
            <ResultsPanel outcome={outcome} running={running} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HintsDrawer({
  total,
  revealed,
  hints,
  onReveal,
}: {
  total: number;
  revealed: number;
  hints: readonly string[];
  onReveal: () => void;
}) {
  const labels = ["Nudge", "Approach", "Pseudocode"];
  return (
    <Card>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Hints</h3>
        <span className="text-xs text-slate-400">
          {revealed}/{total} revealed
        </span>
      </div>
      <div className="space-y-2">
        {hints.slice(0, revealed).map((h, i) => (
          <div key={i} className="rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-800/60">
            <span className="mr-2 text-[11px] font-semibold uppercase text-forge-500">
              {labels[i] ?? `Hint ${i + 1}`}
            </span>
            {h}
          </div>
        ))}
      </div>
      {revealed < total && (
        <button
          type="button"
          onClick={onReveal}
          className="mt-3 text-sm font-medium text-forge-500 hover:underline"
        >
          Reveal {revealed === 0 ? "a hint" : "the next hint"} →
        </button>
      )}
    </Card>
  );
}

function WalkthroughCard({
  steps,
  unlocked,
  onTryIt,
  resetKey,
}: {
  steps: NonNullable<ProblemType["walkthrough"]>;
  unlocked: boolean;
  onTryIt: () => void;
  resetKey: string;
}) {
  const [revealedSteps, setRevealedSteps] = useState(1);
  const focusTryAfterRevealRef = useRef(false);
  const tryButtonRef = useRef<HTMLButtonElement | null>(null);

  // Route changes reuse this component, so a new problem must begin at step one.
  useEffect(() => {
    setRevealedSteps(1);
    focusTryAfterRevealRef.current = false;
  }, [resetKey]);

  useEffect(() => {
    if (!focusTryAfterRevealRef.current || revealedSteps < steps.length) return;
    focusTryAfterRevealRef.current = false;
    tryButtonRef.current?.focus();
  }, [revealedSteps, steps.length]);

  const revealNextStep = () => {
    const nextCount = Math.min(revealedSteps + 1, steps.length);
    focusTryAfterRevealRef.current = nextCount === steps.length;
    setRevealedSteps(nextCount);
  };

  return (
    <Card>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            How to solve it
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            A code-free implementation guide.
          </p>
        </div>
        {unlocked && (
          <span className="text-xs text-slate-400" aria-live="polite" aria-atomic="true">
            {Math.min(revealedSteps, steps.length)}/{steps.length} steps
          </span>
        )}
      </div>

      {!unlocked ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40">
          Reveal all hints to unlock the step-by-step guide. It explains the approach without
          showing solution code.
        </div>
      ) : (
        <div className="space-y-3">
          {steps.slice(0, revealedSteps).map((step, index) => (
            <div
              key={`${index}-${step.title}`}
              className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/60"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-forge-100 text-[11px] font-bold text-forge-600 dark:bg-forge-950/60 dark:text-forge-300">
                  {index + 1}
                </span>
                <h4 className="text-sm font-semibold">{step.title}</h4>
              </div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                <MarkdownView source={step.body} />
              </div>
            </div>
          ))}
          {revealedSteps < steps.length ? (
            <button
              type="button"
              onClick={revealNextStep}
              className="text-sm font-medium text-forge-500 hover:underline"
            >
              Reveal the next step →
            </button>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-forge-200 bg-forge-50 p-3 dark:border-forge-900/70 dark:bg-forge-950/30">
              <p className="text-sm text-forge-800 dark:text-forge-200">
                You have the plan — try implementing it before revealing a solution.
              </p>
              <button
                ref={tryButtonRef}
                type="button"
                onClick={onTryIt}
                className="shrink-0 text-sm font-semibold text-forge-600 hover:underline dark:text-forge-300"
              >
                Try it in the editor →
              </button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

function SolutionsCard({
  problem,
  unlocked,
  onGiveUp,
}: {
  problem: ProblemType;
  unlocked: boolean;
  onGiveUp: () => void;
}) {
  const [lang, setLang] = useState<Language>("js");
  const [codeStyle, setCodeStyle] = useState<"standard" | "commented">("standard");

  return (
    <Card>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
        Solutions
      </h3>
      {!unlocked ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40">
          <p>Solutions unlock once you solve the problem.</p>
          <button
            type="button"
            onClick={onGiveUp}
            className="mt-2 text-xs font-medium text-slate-400 underline underline-offset-2 hover:text-slate-600 dark:hover:text-slate-200"
          >
            Give up and reveal solutions
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div
              className="flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
              role="group"
              aria-label="Solution language"
            >
              {(["js", "ts"] as Language[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={cn(
                    "px-3 py-1 text-xs font-semibold uppercase transition",
                    lang === l
                      ? "bg-forge-500 text-white"
                      : "bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
            <div
              className="flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
              role="group"
              aria-label="Solution code detail"
            >
              <button
                type="button"
                onClick={() => setCodeStyle("standard")}
                aria-pressed={codeStyle === "standard"}
                className={cn(
                  "px-3 py-1 text-xs font-semibold transition",
                  codeStyle === "standard"
                    ? "bg-forge-500 text-white"
                    : "bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
                )}
              >
                Code
              </button>
              <button
                type="button"
                onClick={() => setCodeStyle("commented")}
                aria-pressed={codeStyle === "commented"}
                className={cn(
                  "px-3 py-1 text-xs font-semibold transition",
                  codeStyle === "commented"
                    ? "bg-forge-500 text-white"
                    : "bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
                )}
              >
                Fully commented
              </button>
            </div>
          </div>
          {problem.solutions.map((sol, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">{sol.label}</span>
                <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  time {sol.timeComplexity}
                </span>
                <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  space {sol.spaceComplexity}
                </span>
                {codeStyle === "commented" && (
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 text-[11px] font-medium",
                      sol.commentedCode
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
                    )}
                  >
                    {sol.commentedCode ? "Detailed annotation" : "Guided annotation"}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{sol.approach}</p>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-3 font-mono text-[13px] leading-relaxed text-slate-100">
                <code>
                  {codeStyle === "commented"
                    ? sol.commentedCode?.[lang] ?? annotateCode(sol.code[lang], sol.approach)
                    : sol.code[lang]}
                </code>
              </pre>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

/** Provide a readable fallback while bespoke line-by-line annotations are authored. */
function annotateCode(code: string, approach: string): string {
  const annotated = code
    .split("\n")
    .map((line) => {
      const statement = line.trim();
      if (!statement || statement.startsWith("//") || statement === "}" || statement === "});") {
        return line;
      }
      const indent = line.slice(0, line.length - line.trimStart().length);
      let note = "Perform the next operation required by this approach.";
      if (/^function\b/.test(statement)) note = "Define the function that implements this approach.";
      else if (/^(const|let|var)\b/.test(statement)) note = "Initialize state that will be updated as the algorithm runs.";
      else if (/^(for|while)\b/.test(statement)) note = "Repeat this step for each remaining candidate or input value.";
      else if (/^if\b/.test(statement)) note = "Check whether this case changes the algorithm's next action.";
      else if (/^return\b/.test(statement)) note = "Return the final value computed by the approach.";
      else if (/\+\+|--|\+=|-=|\*=|\/=/.test(statement)) note = "Update the running state for the next iteration.";
      return `${indent}// ${note}\n${line}`;
    })
    .join("\n");
  return `// Approach: ${approach}\n// This guided version explains the role of each implementation step.\n\n${annotated}`;
}
