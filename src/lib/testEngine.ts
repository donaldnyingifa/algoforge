import type {
  BadgeTier,
  Difficulty,
  Problem,
  QuizQuestion,
  TestConfig,
  UserProgress,
} from "@/types";
import { DEFAULT_TEST, tierForScore } from "./constants";

/** Fisher–Yates shuffle (returns a new array). */
export function shuffle<T>(items: readonly T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = out[i]!;
    const b = out[j]!;
    out[i] = b;
    out[j] = a;
  }
  return out;
}

/** Build the standard test config for a module. */
export function buildTestConfig(moduleId: string): TestConfig {
  return {
    moduleId,
    drawRules: { ...DEFAULT_TEST.drawRules },
    timeLimitMinutes: DEFAULT_TEST.timeLimitMinutes,
    parTimeMinutes: DEFAULT_TEST.parTimeMinutes,
    complexityMcqCount: DEFAULT_TEST.complexityMcqCount,
  };
}

/**
 * Draw problems from a pool honouring the per-difficulty rules, then top up
 * from whatever remains if a difficulty is short (so a pool without, say, a
 * hard problem still yields a full-length test). Returns problem ids.
 */
export function drawProblems(pool: Problem[], rules: TestConfig["drawRules"]): string[] {
  const byDiff: Record<Difficulty, Problem[]> = { easy: [], medium: [], hard: [] };
  for (const p of pool) byDiff[p.difficulty].push(p);

  const picked: Problem[] = [];
  const pickedIds = new Set<string>();
  (["easy", "medium", "hard"] as Difficulty[]).forEach((d) => {
    const want = rules[d];
    const available = shuffle(byDiff[d]);
    for (let i = 0; i < want && i < available.length; i++) {
      const p = available[i]!;
      picked.push(p);
      pickedIds.add(p.id);
    }
  });

  const target = rules.easy + rules.medium + rules.hard;
  if (picked.length < target) {
    const leftovers = shuffle(pool.filter((p) => !pickedIds.has(p.id)));
    for (const p of leftovers) {
      if (picked.length >= target) break;
      picked.push(p);
      pickedIds.add(p.id);
    }
  }

  // Present easy → hard for a gentle ramp.
  const order: Record<Difficulty, number> = { easy: 0, medium: 1, hard: 2 };
  picked.sort((a, b) => order[a.difficulty] - order[b.difficulty]);
  return picked.map((p) => p.id);
}

/** Draw `count` complexity MCQs at random. Returns question ids. */
export function drawMcqs(pool: QuizQuestion[], count: number): string[] {
  return shuffle(pool)
    .slice(0, Math.min(count, pool.length))
    .map((q) => q.id);
}

/**
 * Score a test: problems are worth 90% and complexity MCQs 10% (or 100% of
 * whichever category is present). Returns an integer percentage 0–100.
 */
export function scoreTest(
  problemsSolved: number,
  problemCount: number,
  mcqCorrect: number,
  mcqCount: number,
): number {
  const problemWeight = problemCount > 0 ? (mcqCount > 0 ? 90 : 100) : 0;
  const mcqWeight = mcqCount > 0 ? (problemCount > 0 ? 10 : 100) : 0;
  const pScore = problemCount > 0 ? (problemsSolved / problemCount) * problemWeight : 0;
  const mScore = mcqCount > 0 ? (mcqCorrect / mcqCount) * mcqWeight : 0;
  return Math.round(pScore + mScore);
}

/**
 * Decide the badge tier. Bronze≥60, Silver≥75, Gold≥90; Platinum requires a
 * perfect 100% achieved within par time with zero hints (hints are locked
 * during a test, so hintsUsed is normally 0).
 */
export function decideTier(
  scorePercent: number,
  elapsedMs: number,
  parMs: number,
  hintsUsed: number,
): BadgeTier | null {
  const base = tierForScore(scorePercent);
  if (base === "platinum" && (hintsUsed > 0 || elapsedMs > parMs)) {
    return "gold";
  }
  return base;
}

export interface RetakeStatus {
  allowed: boolean;
  remainingMs: number;
  lastFinishedAt?: string;
}

/** Whether the module's test can be retaken given the 12h cooldown. */
export function retakeStatus(
  progress: UserProgress,
  moduleId: string,
  cooldownHours: number = DEFAULT_TEST.retakeCooldownHours,
): RetakeStatus {
  const finished = progress.testHistory
    .filter((s) => s.moduleId === moduleId && s.finishedAt)
    .map((s) => new Date(s.finishedAt as string).getTime())
    .filter((t) => !Number.isNaN(t));
  if (finished.length === 0) return { allowed: true, remainingMs: 0 };
  const last = Math.max(...finished);
  const remainingMs = cooldownHours * 3_600_000 - (Date.now() - last);
  return {
    allowed: remainingMs <= 0,
    remainingMs: Math.max(0, remainingMs),
    lastFinishedAt: new Date(last).toISOString(),
  };
}

/** Format a millisecond duration as H:MM or M:SS for the UI. */
export function formatDuration(ms: number): string {
  const totalSec = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}:${String(s).padStart(2, "0")}`;
}
