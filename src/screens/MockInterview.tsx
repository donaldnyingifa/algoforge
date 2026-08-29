import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@/lib/router";
import type { Language, Problem, TestSession } from "@/types";
import { PageHeader, Card, DifficultyBadge } from "@/components/ui";
import { CodeEditor } from "@/components/CodeEditor";
import { useCodeRunner } from "@/runner/useCodeRunner";
import { useProgressStore } from "@/store/progressStore";
import { getProblem } from "@/data/curriculum";
import { formatDuration, scoreTest } from "@/lib/testEngine";
import {
  MOCK_PRESETS,
  drawMockProblems,
  mockConfig,
  getMockPreset,
  type MockPreset,
} from "@/lib/mock";
import { cn } from "@/lib/cn";

type Phase = "config" | "running" | "results";

export function MockInterview() {
  const recordMockInterview = useProgressStore((s) => s.recordMockInterview);

  const [phase, setPhase] = useState<Phase>("config");
  const [presetId, setPresetId] = useState<string>(MOCK_PRESETS[1]!.id);
  const [drawnIds, setDrawnIds] = useState<string[]>([]);
  const [solved, setSolved] = useState<Set<string>>(new Set());
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [result, setResult] = useState<{ session: TestSession; xpAwarded: number } | null>(null);

  const preset = getMockPreset(presetId) ?? MOCK_PRESETS[1]!;
  const timeLimitMs = preset.minutes * 60_000;
  const remainingMs = Math.max(0, timeLimitMs - (now - startTime));

  const problems = useMemo(
    () => drawnIds.map((id) => getProblem(id)).filter((p): p is Problem => Boolean(p)),
    [drawnIds],
  );

  const finalize = useCallback(() => {
    const solvedCount = drawnIds.filter((id) => solved.has(id)).length;
    const score = scoreTest(solvedCount, drawnIds.length, 0, 0);
    const baseXp = drawnIds.reduce((sum, id) => {
      const p = getProblem(id);
      return sum + (p && solved.has(id) ? p.xp : 0);
    }, 0);
    const session: TestSession = {
      id: `mock-${Date.now()}`,
      moduleId: `mock-${preset.id}`,
      config: mockConfig(preset),
      drawnProblemIds: drawnIds,
      complexityQuestionIds: [],
      startedAt: new Date(startTime).toISOString(),
      finishedAt: new Date().toISOString(),
      timeLimitMs,
      problemResults: drawnIds.map((id) => ({ problemId: id, solved: solved.has(id), timeSpentMs: 0 })),
      mcqCorrect: 0,
      scorePercent: score,
    };
    const outcome = recordMockInterview(session, baseXp);
    setResult({ session, xpAwarded: outcome.xpAwarded });
    setPhase("results");
  }, [drawnIds, solved, preset, startTime, timeLimitMs, recordMockInterview]);

  const finalizeRef = useRef(finalize);
  finalizeRef.current = finalize;

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

  const start = () => {
    setDrawnIds(drawMockProblems(preset));
    setSolved(new Set());
    const t = Date.now();
    setStartTime(t);
    setNow(t);
    setResult(null);
    setPhase("running");
  };

  return (
    <div>
      <Link to="/learn" className="text-sm font-medium text-forge-500 hover:underline">
        ← Learn
      </Link>

      {phase === "config" && (
        <div>
          <PageHeader
            title="Mock Interview"
            subtitle="A timed, mixed-pattern set drawn from across the whole library. No hints, no MCQs — just you and the clock. Auto-submits at time up."
          />
          <div className="mb-4 grid gap-3 sm:grid-cols-3">
            {MOCK_PRESETS.map((p) => (
              <PresetCard
                key={p.id}
                preset={p}
                selected={p.id === presetId}
                onSelect={() => setPresetId(p.id)}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={start}
            className="rounded-lg bg-forge-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forge-600"
          >
            Start {preset.label} →
          </button>
        </div>
      )}

      {phase === "running" && (
        <div>
          <div className="sticky top-0 z-10 -mx-6 mb-4 flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-6 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Solved {drawnIds.filter((id) => solved.has(id)).length}/{drawnIds.length} · {preset.label}
            </div>
            <div className="flex items-center gap-4">
              <span
                className={cn(
                  "font-mono text-lg font-bold tabular-nums",
                  remainingMs < 120_000 ? "text-red-500" : "text-slate-700 dark:text-slate-200",
                )}
              >
                {formatDuration(remainingMs)}
              </span>
              <button
                type="button"
                onClick={finalize}
                className="rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600"
              >
                Finish
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {problems.map((p, i) => (
              <MockProblemCard
                key={p.id}
                index={i + 1}
                problem={p}
                onSolve={() => setSolved((prev) => new Set(prev).add(p.id))}
              />
            ))}
          </div>
        </div>
      )}

      {phase === "results" && result && (
        <MockResults result={result} onRetry={() => setPhase("config")} />
      )}
    </div>
  );
}

function PresetCard({
  preset,
  selected,
  onSelect,
}: {
  preset: MockPreset;
  selected: boolean;
  onSelect: () => void;
}) {
  const total = preset.drawRules.easy + preset.drawRules.medium + preset.drawRules.hard;
  return (
    <button type="button" onClick={onSelect} className="text-left">
      <Card
        className={cn(
          "h-full transition",
          selected ? "border-forge-400 ring-1 ring-forge-400" : "hover:border-forge-300",
        )}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{preset.label}</h3>
          {selected && <span className="text-[11px] font-medium text-forge-500">selected</span>}
        </div>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{preset.description}</p>
        <div className="mt-2 text-xs text-slate-400">
          {total} problems · {preset.minutes} min
        </div>
      </Card>
    </button>
  );
}

function MockProblemCard({
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
            className={cn("text-sm", solved ? "text-emerald-500" : "text-slate-500 dark:text-slate-400")}
          >
            {verdict}
          </span>
        )}
      </div>
    </Card>
  );
}

function MockResults({
  result,
  onRetry,
}: {
  result: { session: TestSession; xpAwarded: number };
  onRetry: () => void;
}) {
  const { session, xpAwarded } = result;
  const solvedCount = session.problemResults.filter((r) => r.solved).length;
  return (
    <div>
      <PageHeader title="Mock interview complete" subtitle="Timed practice logged to your history." />
      <Card className="mb-4 text-center">
        <div className="text-5xl font-bold">{session.scorePercent}%</div>
        <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {solvedCount}/{session.problemResults.length} problems solved
        </div>
        {xpAwarded > 0 && (
          <p className="mt-2 text-sm font-medium text-emerald-500">+{xpAwarded} XP</p>
        )}
      </Card>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onRetry}
          className="rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-600"
        >
          New mock interview
        </button>
        <Link to="/review" className="text-sm font-medium text-forge-500 hover:underline">
          Spaced review
        </Link>
        <Link to="/dashboard" className="text-sm font-medium text-forge-500 hover:underline">
          Dashboard
        </Link>
      </div>
    </div>
  );
}
