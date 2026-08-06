import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  BadgeAward,
  DailyActivity,
  ProblemStat,
  ReviewEntry,
  TestSession,
  UserProgress,
  UserSettings,
} from "@/types";
import {
  rankForXp,
  streakMultiplier,
  tierBonus,
  tierRank,
  REVIEW_INTERVALS_DAYS,
  SCHEMA_VERSION,
} from "@/lib/constants";

const EMPTY_STAT: ProblemStat = {
  status: "unattempted",
  attempts: 0,
  timeSpentMs: 0,
  hintsUsed: 0,
};

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function isoPlusDays(days: number): string {
  return new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);
}

/** Ensure a review entry exists for a problem (first-solve scheduling). */
function withScheduledReview(queue: ReviewEntry[], problemId: string): ReviewEntry[] {
  if (queue.some((e) => e.problemId === problemId)) return queue;
  const firstInterval = REVIEW_INTERVALS_DAYS[0] ?? 3;
  return [...queue, { problemId, dueDate: isoPlusDays(firstInterval), intervalStep: 0 }];
}

export const DEFAULT_SETTINGS: UserSettings = {
  preferredLanguage: "js",
  editorFontSize: 14,
  backupReminderDays: 7,
  reduceMotion: false,
};

export function createInitialProgress(): UserProgress {
  return {
    xp: 0,
    rank: "Novice",
    streak: { current: 0, best: 0 },
    lessonCompletions: {},
    buildLabCompletions: {},
    problemStats: {},
    badges: [],
    testHistory: [],
    reviewQueue: [],
    activity: {},
    settings: { ...DEFAULT_SETTINGS },
    schemaVersion: SCHEMA_VERSION,
  };
}

/**
 * Coerce any (possibly older or imported) progress blob into the current shape,
 * filling missing fields from defaults. Used by both persisted-state migration
 * and JSON import so round-trips never crash on a missing key.
 */
export function normalizeProgress(raw: unknown): UserProgress {
  const base = createInitialProgress();
  if (!raw || typeof raw !== "object") return base;
  const r = raw as Partial<UserProgress>;
  const merged: UserProgress = {
    ...base,
    ...r,
    streak: { ...base.streak, ...(r.streak ?? {}) },
    lessonCompletions: { ...(r.lessonCompletions ?? {}) },
    buildLabCompletions: { ...(r.buildLabCompletions ?? {}) },
    problemStats: { ...(r.problemStats ?? {}) },
    badges: Array.isArray(r.badges) ? r.badges : [],
    testHistory: Array.isArray(r.testHistory) ? r.testHistory : [],
    reviewQueue: Array.isArray(r.reviewQueue) ? r.reviewQueue : [],
    activity: { ...(r.activity ?? {}) },
    settings: { ...base.settings, ...(r.settings ?? {}) },
    xp: typeof r.xp === "number" ? r.xp : 0,
    schemaVersion: SCHEMA_VERSION,
  };
  merged.rank = rankForXp(merged.xp);
  return merged;
}

interface ProgressState {
  progress: UserProgress;
  /** Replace the entire progress object (used by import/restore). */
  replaceProgress: (progress: UserProgress) => void;
  /** Merge a partial patch into settings. */
  updateSettings: (patch: Partial<UserSettings>) => void;
  /** Recompute derived fields (currently: rank from xp). */
  recomputeDerived: () => void;
  /** Wipe all progress back to a fresh state. */
  resetAll: () => void;

  /* ---- Phase 3: attempt & completion tracking ---- */
  /** Record a Run/Submit attempt and add active time. */
  logAttempt: (problemId: string, elapsedMs: number) => void;
  /** Mark a problem solved; awards its XP once, on first solve. */
  solveProblem: (problemId: string, elapsedMs: number, xp: number) => void;
  /** Increment the hint-usage counter for a problem. */
  addHintUsed: (problemId: string) => void;
  /** Mark a lesson/module complete; awards its XP once. */
  completeLesson: (moduleId: string, xp: number) => void;
  /** Mark a build lab's unit suite as fully passed; awards its XP once. */
  completeBuildLab: (labId: string, xp: number) => void;
  /** Stamp the last-backup time (called after a successful export). */
  markBackedUp: () => void;
  /**
   * Record a finished timed test: append it to history, keep the best badge
   * tier for the module, and award the incremental test XP bonus. Returns a
   * small summary for the results screen.
   */
  submitTest: (
    session: TestSession,
    badgeId: string | undefined,
  ) => { isNewBest: boolean; xpAwarded: number };

  /* ---- Phase 13: spaced review & mock interviews ---- */
  /** Add a problem to the review queue (idempotent). */
  scheduleReview: (problemId: string) => void;
  /**
   * Grade a due review. `remembered` advances the interval up the ladder;
   * otherwise it resets to the first interval. No-op if not queued.
   */
  reviewProblem: (problemId: string, remembered: boolean) => void;
  /**
   * Record a finished mock interview: append to history and award XP for the
   * problems solved during the session. Returns the XP awarded.
   */
  recordMockInterview: (session: TestSession, baseXp: number) => { xpAwarded: number };
}

/**
 * Fold a base XP award into progress: bump the daily streak (if it's a new
 * day), apply the streak multiplier, update rank, and record the day's activity.
 */
function applyXp(
  progress: UserProgress,
  baseXp: number,
  delta: { solved?: number; lessons?: number } = {},
): UserProgress {
  const today = todayIso();
  const streak = { ...progress.streak };
  if (streak.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    streak.current = streak.lastActiveDate === yesterday ? streak.current + 1 : 1;
    streak.best = Math.max(streak.best, streak.current);
    streak.lastActiveDate = today;
  }

  const awarded = Math.round(baseXp * streakMultiplier(streak.current));
  const nextXp = progress.xp + awarded;

  const prevDay: DailyActivity = progress.activity[today] ?? { xp: 0, solved: 0, lessons: 0 };
  const day: DailyActivity = {
    xp: prevDay.xp + awarded,
    solved: prevDay.solved + (delta.solved ?? 0),
    lessons: prevDay.lessons + (delta.lessons ?? 0),
  };

  return {
    ...progress,
    xp: nextXp,
    rank: rankForXp(nextXp),
    streak,
    activity: { ...progress.activity, [today]: day },
  };
}

/**
 * The progress store persists to localStorage. Fine-grained mutation actions
 * (award XP, log attempts, complete lessons, award badges) are added in the
 * progress engine in Phase 4; this skeleton establishes the persisted shape.
 */
export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: createInitialProgress(),
      replaceProgress: (progress) => set({ progress }),
      updateSettings: (patch) =>
        set((s) => ({
          progress: {
            ...s.progress,
            settings: { ...s.progress.settings, ...patch },
          },
        })),
      recomputeDerived: () =>
        set((s) => ({
          progress: { ...s.progress, rank: rankForXp(s.progress.xp) },
        })),
      resetAll: () => set({ progress: createInitialProgress() }),

      logAttempt: (problemId, elapsedMs) =>
        set((s) => {
          const prev = s.progress.problemStats[problemId] ?? EMPTY_STAT;
          const stat: ProblemStat = {
            ...prev,
            attempts: prev.attempts + 1,
            timeSpentMs: prev.timeSpentMs + Math.max(0, elapsedMs),
            status: prev.status === "solved" ? "solved" : "attempted",
            lastAttemptedAt: new Date().toISOString(),
          };
          return {
            progress: {
              ...s.progress,
              problemStats: { ...s.progress.problemStats, [problemId]: stat },
            },
          };
        }),

      solveProblem: (problemId, elapsedMs, xp) =>
        set((s) => {
          const prev = s.progress.problemStats[problemId] ?? EMPTY_STAT;
          const alreadySolved = prev.status === "solved";
          const now = new Date().toISOString();
          const stat: ProblemStat = {
            ...prev,
            status: "solved",
            timeSpentMs: prev.timeSpentMs + Math.max(0, elapsedMs),
            firstSolvedAt: prev.firstSolvedAt ?? now,
            lastAttemptedAt: now,
          };
          const base: UserProgress = {
            ...s.progress,
            problemStats: { ...s.progress.problemStats, [problemId]: stat },
          };
          if (alreadySolved) return { progress: base };
          // First solve: award XP and schedule the problem for spaced review.
          const awarded = applyXp(base, xp, { solved: 1 });
          return {
            progress: { ...awarded, reviewQueue: withScheduledReview(awarded.reviewQueue, problemId) },
          };
        }),

      addHintUsed: (problemId) =>
        set((s) => {
          const prev = s.progress.problemStats[problemId] ?? EMPTY_STAT;
          const stat: ProblemStat = { ...prev, hintsUsed: prev.hintsUsed + 1 };
          return {
            progress: {
              ...s.progress,
              problemStats: { ...s.progress.problemStats, [problemId]: stat },
            },
          };
        }),

      completeLesson: (moduleId, xp) =>
        set((s) => {
          if (s.progress.lessonCompletions[moduleId]) return s;
          const base: UserProgress = {
            ...s.progress,
            lessonCompletions: {
              ...s.progress.lessonCompletions,
              [moduleId]: new Date().toISOString(),
            },
          };
          return { progress: applyXp(base, xp, { lessons: 1 }) };
        }),

      completeBuildLab: (labId, xp) =>
        set((s) => {
          if (s.progress.buildLabCompletions[labId]) return s;
          const base: UserProgress = {
            ...s.progress,
            buildLabCompletions: {
              ...s.progress.buildLabCompletions,
              [labId]: new Date().toISOString(),
            },
          };
          return { progress: applyXp(base, xp) };
        }),

      markBackedUp: () =>
        set((s) => ({
          progress: {
            ...s.progress,
            settings: { ...s.progress.settings, lastBackupAt: new Date().toISOString() },
          },
        })),

      submitTest: (session, badgeId) => {
        const progress = get().progress;
        const testHistory = [...progress.testHistory, session];
        let badges = progress.badges;
        let isNewBest = false;
        let bonus = 0;

        const tier = session.awardedTier;
        if (tier && badgeId) {
          const prev = progress.badges.find((b) => b.moduleId === session.moduleId);
          if (tierRank(tier) > tierRank(prev?.tier)) {
            isNewBest = true;
            bonus = tierBonus(tier) - tierBonus(prev?.tier);
            const award: BadgeAward = {
              moduleId: session.moduleId,
              badgeId,
              tier,
              score: session.scorePercent ?? 0,
              earnedAt: session.finishedAt ?? new Date().toISOString(),
            };
            badges = prev
              ? progress.badges.map((b) => (b.moduleId === session.moduleId ? award : b))
              : [...progress.badges, award];
          }
        }

        const before = progress.xp;
        let next: UserProgress = { ...progress, testHistory, badges };
        if (bonus > 0) next = applyXp(next, bonus);
        set({ progress: next });
        return { isNewBest, xpAwarded: next.xp - before };
      },

      scheduleReview: (problemId) =>
        set((s) => ({
          progress: {
            ...s.progress,
            reviewQueue: withScheduledReview(s.progress.reviewQueue, problemId),
          },
        })),

      reviewProblem: (problemId, remembered) =>
        set((s) => {
          const idx = s.progress.reviewQueue.findIndex((e) => e.problemId === problemId);
          if (idx === -1) return s;
          const entry = s.progress.reviewQueue[idx]!;
          const lastStep = REVIEW_INTERVALS_DAYS.length - 1;
          const nextStep = remembered ? Math.min(entry.intervalStep + 1, lastStep) : 0;
          const days = REVIEW_INTERVALS_DAYS[nextStep] ?? REVIEW_INTERVALS_DAYS[0] ?? 3;
          const updated: ReviewEntry = {
            problemId,
            dueDate: isoPlusDays(days),
            intervalStep: nextStep,
          };
          const reviewQueue = [...s.progress.reviewQueue];
          reviewQueue[idx] = updated;
          return { progress: { ...s.progress, reviewQueue } };
        }),

      recordMockInterview: (session, baseXp) => {
        const progress = get().progress;
        const before = progress.xp;
        const withHistory: UserProgress = {
          ...progress,
          testHistory: [...progress.testHistory, session],
        };
        const next = baseXp > 0 ? applyXp(withHistory, baseXp) : withHistory;
        set({ progress: next });
        return { xpAwarded: next.xp - before };
      },
    }),
    {
      name: "algoforge-progress",
      version: SCHEMA_VERSION,
      partialize: (s) => ({ progress: s.progress }),
      migrate: (persisted): { progress: UserProgress } => {
        const p = (persisted as { progress?: unknown })?.progress;
        return { progress: normalizeProgress(p) };
      },
      onRehydrateStorage: () => (state) => {
        // Keep rank consistent with xp on load.
        state?.recomputeDerived();
      },
    },
  ),
);

/** Non-hook accessor for use outside React (e.g. export logic). */
export function getProgressSnapshot(): UserProgress {
  return useProgressStore.getState().progress;
}
