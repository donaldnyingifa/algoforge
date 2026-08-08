import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { QuizQuestion, TestConfig, TestSession } from "@/types";
import { PageHeader, Card } from "@/components/ui";
import { useProgressStore } from "@/store/progressStore";
import { complexityQuestions as mcqMap } from "@/data/curriculum";
import { drawMcqs, formatDuration } from "@/lib/testEngine";
import { tierForScore } from "@/lib/constants";
import {
  sdExamQuestionIds,
  SD_CERT_MODULE_ID,
  SD_CERT_BADGE_ID,
  SD_CERT_DRAW,
  SD_CERT_MINUTES,
} from "@/data/systemdesign/certification";
import { cn } from "@/lib/cn";

type Phase = "config" | "running" | "results";

function isCorrect(q: QuizQuestion, selected: number | null): boolean {
  return selected != null && q.answerIndex === selected;
}

export function SdCertification() {
  const submitTest = useProgressStore((s) => s.submitTest);
  const badges = useProgressStore((s) => s.progress.badges);
  const bestBadge = badges.find((b) => b.moduleId === SD_CERT_MODULE_ID);

  const pool = useMemo(
    () => sdExamQuestionIds.map((id) => mcqMap[id]).filter((q): q is QuizQuestion => Boolean(q)),
    [],
  );

  const [phase, setPhase] = useState<Phase>("config");
  const [drawn, setDrawn] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [result, setResult] = useState<{ session: TestSession; isNewBest: boolean; xpAwarded: number } | null>(null);

  const timeLimitMs = SD_CERT_MINUTES * 60_000;
  const remainingMs = Math.max(0, timeLimitMs - (now - startTime));

  const finalize = useCallback(() => {
    const correct = drawn.filter((q) => isCorrect(q, answers[q.id] ?? null)).length;
    const score = drawn.length > 0 ? Math.round((correct / drawn.length) * 100) : 0;
    const tier = tierForScore(score);
    const config: TestConfig = {
      moduleId: SD_CERT_MODULE_ID,
      drawRules: { easy: 0, medium: 0, hard: 0 },
      timeLimitMinutes: SD_CERT_MINUTES,
      parTimeMinutes: SD_CERT_MINUTES,
      complexityMcqCount: drawn.length,
    };
    const session: TestSession = {
      id: `sdcert-${Date.now()}`,
      moduleId: SD_CERT_MODULE_ID,
      config,
      drawnProblemIds: [],
      complexityQuestionIds: drawn.map((q) => q.id),
      startedAt: new Date(startTime).toISOString(),
      finishedAt: new Date().toISOString(),
      timeLimitMs,
      problemResults: [],
      mcqCorrect: correct,
      scorePercent: score,
      awardedTier: tier ?? undefined,
    };
    const outcome = submitTest(session, SD_CERT_BADGE_ID);
    setResult({ session, ...outcome });
    setPhase("results");
  }, [drawn, answers, startTime, timeLimitMs, submitTest]);

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
    const ids = drawMcqs(pool, SD_CERT_DRAW);
    setDrawn(ids.map((id) => mcqMap[id]).filter((q): q is QuizQuestion => Boolean(q)));
    setAnswers({});
    const t = Date.now();
    setStartTime(t);
    setNow(t);
    setResult(null);
    setPhase("running");
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div>
      <Link to="/learn" className="text-sm font-medium text-forge-500 hover:underline">
        ← Learn
      </Link>

      {phase === "config" && (
        <div>
          <PageHeader
            title="System Design Certification"
            subtitle={`A ${SD_CERT_DRAW}-question timed exam (${SD_CERT_MINUTES} min) over the System Design foundations. Earn a tiered badge; your best is always kept.`}
          />
          <Card className="mb-4">
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><b>{SD_CERT_DRAW}</b> questions drawn from a pool of {pool.length}.</li>
              <li>Time limit <b>{SD_CERT_MINUTES} min</b> · auto-submits at time up.</li>
              <li>Tiers: Bronze ≥60% · Silver ≥75% · Gold ≥90% · Platinum = 100%.</li>
              {bestBadge && (
                <li className="capitalize text-forge-500">Your best so far: {bestBadge.tier} ({bestBadge.score}%).</li>
              )}
            </ul>
          </Card>
          <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
            Tip: work the Foundations lessons and a case study or two first — nothing is locked, but you'll score higher.
          </p>
          <button
            type="button"
            onClick={start}
            className="rounded-lg bg-forge-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forge-600"
          >
            Start exam →
          </button>
        </div>
      )}

      {phase === "running" && (
        <div>
          <div className="sticky top-0 z-10 -mx-6 mb-4 flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-6 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Answered {answeredCount}/{drawn.length}
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
                Submit exam
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {drawn.map((q, i) => (
              <ExamCard
                key={q.id}
                index={i + 1}
                question={q}
                selected={answers[q.id] ?? null}
                onSelect={(idx) => setAnswers((prev) => ({ ...prev, [q.id]: idx }))}
              />
            ))}
          </div>
        </div>
      )}

      {phase === "results" && result && (
        <CertResults result={result} onRetake={start} />
      )}
    </div>
  );
}

function ExamCard({
  index,
  question,
  selected,
  onSelect,
}: {
  index: number;
  question: QuizQuestion;
  selected: number | null;
  onSelect: (idx: number) => void;
}) {
  return (
    <Card>
      <div className="mb-2 text-sm font-medium text-slate-400">Q{index}</div>
      <p className="mb-3 text-sm text-slate-700 dark:text-slate-200">{question.prompt}</p>
      <div className="space-y-2">
        {(question.options ?? []).map((opt, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            className={cn(
              "flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition",
              selected === i
                ? "border-forge-400 bg-forge-50 dark:border-forge-700 dark:bg-forge-900/20"
                : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/50",
            )}
          >
            <span
              className={cn(
                "flex h-4 w-4 items-center justify-center rounded-full border text-[10px]",
                selected === i ? "border-forge-500 bg-forge-500 text-white" : "border-slate-400",
              )}
            >
              {selected === i ? "✓" : ""}
            </span>
            <span>{opt}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}

const TIER_STYLE: Record<string, string> = {
  bronze: "bg-amber-700",
  silver: "bg-slate-400",
  gold: "bg-yellow-500",
  platinum: "bg-cyan-400",
};

function CertResults({
  result,
  onRetake,
}: {
  result: { session: TestSession; isNewBest: boolean; xpAwarded: number };
  onRetake: () => void;
}) {
  const { session, isNewBest, xpAwarded } = result;
  const tier = session.awardedTier;
  return (
    <div>
      <PageHeader title="Certification exam complete" subtitle="Your best tier is always kept." />
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
              ★ Certified — {tier}
            </span>
          ) : (
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Not certified yet — reach 60% for Bronze.
            </span>
          )}
        </div>
        {isNewBest && tier && <p className="mt-2 text-sm font-medium text-emerald-500">New best! +{xpAwarded} XP</p>}
        {!isNewBest && tier && (
          <p className="mt-2 text-sm text-slate-400">Didn't beat your previous best — no additional XP.</p>
        )}
        <div className="mt-2 text-sm text-slate-400">
          {session.mcqCorrect}/{session.complexityQuestionIds.length} correct
        </div>
      </Card>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onRetake}
          className="rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-600"
        >
          Retake (fresh draw)
        </button>
        <Link to="/badges" className="text-sm font-medium text-forge-500 hover:underline">
          Badge gallery
        </Link>
        <Link to="/cases" className="text-sm font-medium text-forge-500 hover:underline">
          Case studies
        </Link>
      </div>
    </div>
  );
}
