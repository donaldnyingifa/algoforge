import type { DailyActivity, Stage, UserProgress } from "@/types";
import { modulesForStage, allProblems } from "@/data/curriculum";

/** Per-stage completion, counting completed lessons and solved drill problems. */
export interface StageCompletion {
  stage: Stage;
  completed: number;
  total: number;
  percent: number;
}

export function stageCompletion(stage: Stage, progress: UserProgress): StageCompletion {
  const mods = modulesForStage(stage.id);
  let total = 0;
  let completed = 0;
  for (const m of mods) {
    // A lesson/module counts as one unit; each drill problem counts as one.
    total += 1;
    if (progress.lessonCompletions[m.id]) completed += 1;
    for (const pid of m.drillProblemIds) {
      total += 1;
      if (progress.problemStats[pid]?.status === "solved") completed += 1;
    }
  }
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { stage, completed, total, percent };
}

/** Weakest patterns: lowest solve-rate among patterns that have been attempted. */
export interface PatternInsight {
  patternId: string;
  attempted: number;
  solved: number;
  solveRate: number;
}

export function weakestPatterns(progress: UserProgress, limit = 3): PatternInsight[] {
  const agg = new Map<string, { attempted: number; solved: number }>();
  for (const problem of allProblems()) {
    const stat = progress.problemStats[problem.id];
    if (!stat || stat.status === "unattempted") continue;
    for (const patternId of problem.patternIds) {
      const entry = agg.get(patternId) ?? { attempted: 0, solved: 0 };
      entry.attempted += 1;
      if (stat.status === "solved") entry.solved += 1;
      agg.set(patternId, entry);
    }
  }
  const insights: PatternInsight[] = [];
  for (const [patternId, { attempted, solved }] of agg) {
    insights.push({ patternId, attempted, solved, solveRate: solved / attempted });
  }
  insights.sort((a, b) => a.solveRate - b.solveRate || b.attempted - a.attempted);
  return insights.slice(0, limit);
}

/** The last `days` days of activity as a dense array (zero-filled), oldest first. */
export interface ActivityPoint extends DailyActivity {
  date: string;
  label: string;
}

export function recentActivity(progress: UserProgress, days = 14): ActivityPoint[] {
  const out: ActivityPoint[] = [];
  const now = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now.getTime() - i * 86_400_000);
    const date = d.toISOString().slice(0, 10);
    const entry = progress.activity[date] ?? { xp: 0, solved: 0, lessons: 0 };
    out.push({
      date,
      label: `${d.getMonth() + 1}/${d.getDate()}`,
      xp: entry.xp,
      solved: entry.solved,
      lessons: entry.lessons,
    });
  }
  return out;
}

/** Total solved problems (used across the dashboard). */
export function solvedCount(progress: UserProgress): number {
  return Object.values(progress.problemStats).filter((p) => p.status === "solved").length;
}
