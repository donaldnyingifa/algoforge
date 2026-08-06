import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Language, Problem, QuizQuestion, TestSession } from "@/types";
import { PageHeader, Card, EmptyState, DifficultyBadge } from "@/components/ui";
import { CodeEditor } from "@/components/CodeEditor";
import { useCodeRunner } from "@/runner/useCodeRunner";
import { useProgressStore } from "@/store/progressStore";
import {
  getModule,
  getProblem,
  complexityQuestions as complexityMap,
} from "@/data/curriculum";
import {
  buildTestConfig,
  drawProblems,
  drawMcqs,
  scoreTest,
  decideTier,
  retakeStatus,
  formatDuration,
} from "@/lib/testEngine";
import { cn } from "@/lib/cn";

type Phase = "config" | "running" | "results";

function isMcqCorrect(q: QuizQuestion, selected: number[]): boolean {
  const key = new Set(
    q.kind === "multiSelect" ? q.answerIndices ?? [] : q.answerIndex != null ? [q.answerIndex] : [],
  );
  return selected.length === key.size && selected.every((i) => key.has(i));
}

export function Test() {
  const { moduleId = "" } = useParams();
  const module = getModule(moduleId);
  const progress = useProgressStore((s) => s.progress);
  const submitTest = useProgressStore((s) => s.submitTest);

  const pool = useMemo(
    () =>
      (module?.testPoolProblemIds ?? [])
        .map((id) => getProblem(id))
        .filter((p): p is Problem => Boolean(p)),
    [module],
  );
  const mcqPool = useMemo(() => {
    const ids = module?.complexityQuestionIds ?? [];
    const own = ids.map((id) => complexityMap[id]).filter((q): q is QuizQuestion => Boolean(q));
    return own.length > 0 ? own : Object.values(complexityMap);
  }, [module]);
  const config = useMemo(() => buildTestConfig(moduleId), [moduleId]);

  const [phase, setPhase] = useState<Phase>("config");
  const [drawnProblemIds, setDrawnProblemIds] = useState<string[]>([]);
  const [drawnMcqIds, setDrawnMcqIds] = useState<string[]>([]);
  const [solved, setSolved] = useState<Set<string>>(new Set());
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number[]>>({});
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [result, setResult] = useState<{
    session: TestSession;
    isNewBest: boolean;
    xpAwarded: number;
  } | null>(null);

  const timeLimitMs = config.timeLimitMinutes * 60_000;
  const parMs = config.parTimeMinutes * 60_000;
  const remainingMs = Math.max(0, timeLimitMs - (now - startTime));

  const retake = retakeStatus(progress, moduleId);
  const bestBadge = progress.badges.find((b) => b.moduleId === moduleId);

  const finalize = useCallback(() => {
    const elapsed = Math.min(timeLimitMs, Date.now() - startTime);
    const problemsSolved = drawnProblemIds.filter((id) => solved.has(id)).length;
    const mcqCorrect = drawnMcqIds.filter((qid) => {
      const q = complexityMap[qid];
      return q ? isMcqCorrect(q, mcqAnswers[qid] ?? []) : false;
    }).length;
    const score = scoreTest(problemsSolved, drawnProblemIds.length, mcqCorrect, drawnMcqIds.length);
    const tier = decideTier(score, elapsed, parMs, 0);
    const session: TestSession = {
      id: `t-${Date.now()}`,
      moduleId,
      config,
      drawnProblemIds,
      complexityQuestionIds: drawnMcqIds,
      startedAt: new Date(startTime).toISOString(),
      finishedAt: new Date().toISOString(),
      timeLimitMs,
      problemResults: drawnProblemIds.map((id) => ({
        problemId: id,
        solved: solved.has(id),
        timeSpentMs: 0,
      })),
      mcqCorrect,
      scorePercent: score,
      awardedTier: tier ?? undefined,
    };
    const outcome = submitTest(session, module?.badgeId);
    setResult({ session, ...outcome });
    setPhase("results");
  }, [
    timeLimitMs,
    startTime,
    drawnProblemIds,
    drawnMcqIds,
    solved,
    mcqAnswers,
    parMs,
    moduleId,
    config,
    submitTest,
    module,
  ]);

  // Keep a ref to the latest finalize so the timer never calls a stale version.
  const finalizeRef = useRef(finalize);
  finalizeRef.current = finalize;

  // Countdown tick + autosubmit.
  useEffect(() => {
    if (phase !== "running") return;
    const timer = setInterval(() => {
      const t = Date.now();
      setNow(t);
      if (t - startTime >= timeLimitMs) {
        clearInterval(timer);
        finalizeRef.current();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, startTime, timeLimitMs]);

  const startTest = () => {
    setDrawnProblemIds(drawProblems(pool, config.drawRules));
    setDrawnMcqIds(drawMcqs(mcqPool, config.complexityMcqCount));
    setSolved(new Set());
    setMcqAnswers({});
    const t = Date.now();
    setStartTime(t);
    setNow(t);
    setResult(null);
    setPhase("running");
  };

  if (!module) {
    return (
      <div>
        <PageHeader title="Test not found" subtitle="This module has no test." />
        <Link to="/learn" className="text-sm font-medium text-forge-500 hover:underline">
          ← Back to Learn
        </Link>
      </div>
    );
  }
  if (pool.length === 0) {
    return (
      <div>
        <PageHeader title={module.title} subtitle="No test pool is registered for this module yet." />
        <EmptyState title="Nothing to test." />
      </div>
    );
  }

  const problemTarget = Math.min(
    pool.length,
    config.drawRules.easy + config.drawRules.medium + config.drawRules.hard,
  );
  const mcqTarget = Math.min(mcqPool.length, config.complexityMcqCount);

  return (
    <div>
      <Link to={`/checkpoint/${moduleId}`} className="text-sm font-medium text-forge-500 hover:underline">
        ← {module.title}
      </Link>

      {phase === "config" && (
        <ConfigScreen
          title={module.title}
          problemTarget={problemTarget}
          poolSize={pool.length}
          mcqTarget={mcqTarget}
          config={config}
          bestTier={bestBadge?.tier}
          retakeAllowed={retake.allowed}
          retakeRemainingMs={retake.remainingMs}
          onStart={startTest}
        />
      )}

      {phase === "running" && (
        <RunningScreen
          problems={drawnProblemIds.map((id) => getProblem(id)!).filter(Boolean)}
          mcqs={drawnMcqIds.map((id) => complexityMap[id]!).filter(Boolean)}
          remainingMs={remainingMs}
          solvedCount={drawnProblemIds.filter((id) => solved.has(id)).length}
          answeredCount={Object.keys(mcqAnswers).length}
          mcqAnswers={mcqAnswers}
          onSolve={(id) => setSolved((prev) => new Set(prev).add(id))}
          onAnswer={(qid, sel) => setMcqAnswers((prev) => ({ ...prev, [qid]: sel }))}
          onSubmit={finalize}
        />
      )}

      {phase === "results" && result && (
        <ResultsScreen
          result={result}
          onRetake={startTest}
          retakeAllowed={retakeStatus(progress, moduleId).allowed}
          retakeRemainingMs={retakeStatus(progress, moduleId).remainingMs}
          moduleId={moduleId}
        />
      )}
    </div>
  );
}

/* ----------------------------- Config ----------------------------- */

function ConfigScreen({
  title,
  problemTarget,
  poolSize,
  mcqTarget,
  config,
  bestTier,
  retakeAllowed,
  retakeRemainingMs,
  onStart,
}: {
  title: string;
  problemTarget: number;
  poolSize: number;
  mcqTarget: number;
  config: ReturnType<typeof buildTestConfig>;
  bestTier?: string;
  retakeAllowed: boolean;
  retakeRemainingMs: number;
  onStart: () => void;
}) {
  return (
    <div>
      <PageHeader title={`${title} — Timed Test`} subtitle="Hints are disabled. Auto-submits at time up." />
      <Card className="mb-4">
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>
            <b>{problemTarget}</b> problems drawn at random from a pool of {poolSize}.
          </li>
          <li>
            <b>{mcqTarget}</b> complexity multiple-choice questions (worth 10% of the score).
          </li>
          <li>
            Time limit <b>{config.timeLimitMinutes} min</b> · par time{" "}
            <b>{config.parTimeMinutes} min</b> (needed for Platinum).
          </li>
          <li>
            Tiers: Bronze ≥60% · Silver ≥75% · Gold ≥90% · Platinum = 100% within par, hint-free.
          </li>
          {bestTier && (
            <li className="capitalize text-forge-500">Your best so far: {bestTier}.</li>
          )}
        </ul>
      </Card>

      {retakeAllowed ? (
        <button
          type="button"
          onClick={onStart}
          className="rounded-lg bg-forge-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forge-600"
        >
          Start test →
        </button>
      ) : (
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200">
          Retake available in <b>{formatDuration(retakeRemainingMs)}</b> (12-hour cooldown). Your
          best tier is kept.
        </div>
      )}
    </div>
  );
}

/* ----------------------------- Running ----------------------------- */

function RunningScreen({
  problems,
  mcqs,
  remainingMs,
  solvedCount,
  answeredCount,
  mcqAnswers,
  onSolve,
  onAnswer,
  onSubmit,
}: {
  problems: Problem[];
  mcqs: QuizQuestion[];
  remainingMs: number;
  solvedCount: number;
  answeredCount: number;
  mcqAnswers: Record<string, number[]>;
  onSolve: (id: string) => void;
  onAnswer: (qid: string, sel: number[]) => void;
  onSubmit: () => void;
}) {
  const low = remainingMs < 60_000;
  return (
    <div>
      <div className="sticky top-0 z-10 -mx-6 mb-4 flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-6 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          Solved {solvedCount}/{problems.length} · Answered {answeredCount}/{mcqs.length}
        </div>
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "font-mono text-lg font-bold tabular-nums",
              low ? "text-red-500" : "text-slate-700 dark:text-slate-200",
            )}
          >
            {formatDuration(remainingMs)}
          </span>
          <button
            type="button"
            onClick={onSubmit}
            className="rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600"
          >
            Submit test
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {problems.map((p, i) => (
          <TestProblemCard key={p.id} index={i + 1} problem={p} onSolve={() => onSolve(p.id)} />
        ))}
        {mcqs.map((q, i) => (
          <TestMcqCard
            key={q.id}
            index={problems.length + i + 1}
            question={q}
            selected={mcqAnswers[q.id] ?? []}
            onChange={(sel) => onAnswer(q.id, sel)}
          />
        ))}
      </div>
    </div>
  );
}

function TestProblemCard({
  index,
  problem,
  onSolve,
}: {
  index: number;
  problem: Problem;
  onSolve: () => void;
}) {
  const preferred = useProgressStore((s) => s.progress.settings.preferredLanguage);
  const [language, setLanguage] = useState<Language>(preferred);
  const [code, setCode] = useState(problem.starterCode[preferred]);
  const [solved, setSolved] = useState(false);
  const [verdict, setVerdict] = useState<string | null>(null);
  const { running, run } = useCodeRunner();

  const switchLang = (l: Language) => {
    if (l === language) return;
    setLanguage(l);
    setCode(problem.starterCode[l]);
  };

  const submit = async () => {
    const all = [...problem.visibleTests, ...problem.hiddenTests];
    const res = await run({
      code,
      language,
      mode: "tests",
      functionName: problem.functionName,
      judgeType: problem.judgeType,
      tests: all,
    });
    const passed = res.results.filter((r) => r.passed).length;
    if (res.status === "ok" && passed === all.length && all.length > 0) {
      setSolved(true);
      setVerdict("All tests passed ✓");
      onSolve();
    } else if (res.status === "timeout") {
      setVerdict("Time limit exceeded.");
    } else if (res.status === "compileError" || res.status === "runtimeError") {
      setVerdict(res.error?.message ?? "Error");
    } else {
      setVerdict(`${passed}/${all.length} tests passed`);
    }
  };

  return (
    <Card className={cn(solved && "border-emerald-400 dark:border-emerald-800")}>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-medium text-slate-400">Q{index}</span>
        <span className="font-semibold">{problem.title}</span>
        <DifficultyBadge difficulty={problem.difficulty} />
        {solved && <span className="text-xs font-semibold text-emerald-500">solved</span>}
        <div className="ml-auto flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
          {(["js", "ts"] as Language[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => switchLang(l)}
              className={cn(
                "px-2.5 py-1 text-xs font-semibold uppercase",
                language === l
                  ? "bg-forge-500 text-white"
                  : "bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-300",
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <details className="mb-2">
        <summary className="cursor-pointer text-sm text-forge-500">Show prompt</summary>
        <p className="mt-1 whitespace-pre-wrap text-sm text-slate-600 dark:text-slate-300">
          {problem.statement}
        </p>
      </details>
      <div className="h-56 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
        <CodeEditor value={code} onChange={setCode} language={language} fontSize={13} />
      </div>
      <div className="mt-2 flex items-center gap-3">
        <button
          type="button"
          onClick={() => void submit()}
          disabled={running}
          className="rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600 disabled:opacity-60"
        >
          {running ? "Running…" : "Submit answer"}
        </button>
        {verdict && (
          <span
            className={cn(
              "text-sm",
              solved ? "text-emerald-500" : "text-slate-500 dark:text-slate-400",
            )}
          >
            {verdict}
          </span>
        )}
      </div>
    </Card>
  );
}

function TestMcqCard({
  index,
  question,
  selected,
  onChange,
}: {
  index: number;
  question: QuizQuestion;
  selected: number[];
  onChange: (sel: number[]) => void;
}) {
  const isMulti = question.kind === "multiSelect";
  const options = question.options ?? [];
  const toggle = (i: number) => {
    if (isMulti) {
      onChange(selected.includes(i) ? selected.filter((x) => x !== i) : [...selected, i]);
    } else {
      onChange([i]);
    }
  };
  return (
    <Card>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-medium text-slate-400">Q{index}</span>
        <span className="font-semibold">Complexity</span>
      </div>
      <p className="mb-3 text-sm text-slate-700 dark:text-slate-200">{question.prompt}</p>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <button
            key={i}
            type="button"
            onClick={() => toggle(i)}
            className={cn(
              "flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition",
              selected.includes(i)
                ? "border-forge-400 bg-forge-50 dark:border-forge-700 dark:bg-forge-900/20"
                : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/50",
            )}
          >
            <span
              className={cn(
                "flex h-4 w-4 items-center justify-center border text-[10px]",
                isMulti ? "rounded" : "rounded-full",
                selected.includes(i) ? "border-forge-500 bg-forge-500 text-white" : "border-slate-400",
              )}
            >
              {selected.includes(i) ? "✓" : ""}
            </span>
            <span className="font-mono">{opt}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}

/* ----------------------------- Results ----------------------------- */

const TIER_STYLE: Record<string, string> = {
  bronze: "bg-amber-700",
  silver: "bg-slate-400",
  gold: "bg-yellow-500",
  platinum: "bg-cyan-400",
};

function ResultsScreen({
  result,
  onRetake,
  retakeAllowed,
  retakeRemainingMs,
  moduleId,
}: {
  result: { session: TestSession; isNewBest: boolean; xpAwarded: number };
  onRetake: () => void;
  retakeAllowed: boolean;
  retakeRemainingMs: number;
  moduleId: string;
}) {
  const { session, isNewBest, xpAwarded } = result;
  const solvedCount = session.problemResults.filter((r) => r.solved).length;
  const tier = session.awardedTier;

  return (
    <div>
      <PageHeader title="Test complete" subtitle="Your best tier is always kept." />
      <Card className="mb-4 text-center">
        <div className="text-5xl font-bold">{session.scorePercent}%</div>
        <div className="mt-3">
          {tier ? (
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold capitalize text-white",
                TIER_STYLE[tier] ?? "bg-slate-500",
              )}
            >
              ★ {tier} badge
            </span>
          ) : (
            <span className="text-sm text-slate-500 dark:text-slate-400">
              No badge yet — reach 60% for Bronze.
            </span>
          )}
        </div>
        {isNewBest && tier && (
          <p className="mt-2 text-sm font-medium text-emerald-500">
            New best! +{xpAwarded} XP
          </p>
        )}
        {!isNewBest && tier && (
          <p className="mt-2 text-sm text-slate-400">
            Didn't beat your previous best — no additional XP.
          </p>
        )}
      </Card>

      <Card className="mb-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <div className="text-slate-400">Problems solved</div>
            <div className="text-lg font-semibold">
              {solvedCount}/{session.problemResults.length}
            </div>
          </div>
          <div>
            <div className="text-slate-400">Complexity MCQs</div>
            <div className="text-lg font-semibold">
              {session.mcqCorrect}/{session.complexityQuestionIds.length}
            </div>
          </div>
        </div>
      </Card>

      <div className="flex items-center gap-3">
        {retakeAllowed ? (
          <button
            type="button"
            onClick={onRetake}
            className="rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-600"
          >
            Retake (fresh draw)
          </button>
        ) : (
          <span className="text-sm text-slate-400">
            Retake in {formatDuration(retakeRemainingMs)}.
          </span>
        )}
        <Link
          to={`/checkpoint/${moduleId}`}
          className="text-sm font-medium text-forge-500 hover:underline"
        >
          Back to checkpoint
        </Link>
        <Link to="/badges" className="text-sm font-medium text-forge-500 hover:underline">
          Badge gallery
        </Link>
      </div>
    </div>
  );
}
