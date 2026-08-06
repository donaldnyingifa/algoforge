import type { BadgeTier, Rank } from "@/types";

/** XP awarded for each kind of accomplishment. */
export const XP = {
  lesson: 15,
  easy: 10,
  medium: 25,
  hard: 50,
  buildLab: 40,
  estimationDrillSet: 15,
  caseStudy: 60,
  /** Maximum bonus achievable on a module/certification test. */
  testBonusMax: 100,
} as const;

/** Rank thresholds in ascending order. */
export const RANKS: ReadonlyArray<{ rank: Rank; minXp: number }> = [
  { rank: "Novice", minXp: 0 },
  { rank: "Apprentice", minXp: 500 },
  { rank: "Practitioner", minXp: 1500 },
  { rank: "Specialist", minXp: 3500 },
  { rank: "Expert", minXp: 7000 },
  { rank: "Master", minXp: 12000 },
];

/** Daily-streak XP multiplier, clamped between these bounds. */
export const STREAK_MULTIPLIER = {
  min: 1.1,
  max: 1.5,
  /** Added per consecutive active day beyond the first. */
  perDayStep: 0.05,
} as const;

/** Badge tier thresholds as score percentages. */
export const BADGE_THRESHOLDS: ReadonlyArray<{ tier: BadgeTier; minScore: number }> = [
  { tier: "platinum", minScore: 100 },
  { tier: "gold", minScore: 90 },
  { tier: "silver", minScore: 75 },
  { tier: "bronze", minScore: 60 },
];

/** Ordinal rank of a tier (higher is better) — used for best-kept logic. */
export const TIER_RANK: Record<BadgeTier, number> = {
  bronze: 1,
  silver: 2,
  gold: 3,
  platinum: 4,
};

/** Test XP bonus per tier (capped at XP.testBonusMax = 100). */
export const TIER_BONUS: Record<BadgeTier, number> = {
  bronze: 40,
  silver: 60,
  gold: 80,
  platinum: 100,
};

export function tierRank(tier: BadgeTier | null | undefined): number {
  return tier ? TIER_RANK[tier] : 0;
}

export function tierBonus(tier: BadgeTier | null | undefined): number {
  return tier ? TIER_BONUS[tier] : 0;
}

/** Default timed-test draw + timing rules. */
export const DEFAULT_TEST = {
  drawRules: { easy: 1, medium: 2, hard: 1 },
  timeLimitMinutes: 50,
  parTimeMinutes: 35,
  complexityMcqCount: 2,
  /** Cooldown before a retake is allowed. */
  retakeCooldownHours: 12,
} as const;

/** Hard timeout for user code in the execution worker. */
export const CODE_TIMEOUT_MS = 4000;

/** Spaced-repetition review intervals, in days. */
export const REVIEW_INTERVALS_DAYS = [3, 7, 21] as const;

/** Current persisted-state schema version. */
export const SCHEMA_VERSION = 3;

/** Compute the rank for a given XP total. */
export function rankForXp(xp: number): Rank {
  let current: Rank = "Novice";
  for (const tier of RANKS) {
    if (xp >= tier.minXp) current = tier.rank;
  }
  return current;
}

/** Return the next rank threshold above the current XP, if any. */
export function nextRank(xp: number): { rank: Rank; minXp: number } | null {
  for (const tier of RANKS) {
    if (xp < tier.minXp) return tier;
  }
  return null;
}

/** Map a score percentage to the highest badge tier earned (or null). */
export function tierForScore(scorePercent: number): BadgeTier | null {
  for (const t of BADGE_THRESHOLDS) {
    if (scorePercent >= t.minScore) return t.tier;
  }
  return null;
}

/**
 * Daily-streak XP multiplier: 1.1 on day one, +0.05 per consecutive active day,
 * clamped at 1.5. A longer streak makes each XP award worth more.
 */
export function streakMultiplier(currentStreak: number): number {
  const days = Math.max(1, currentStreak);
  const raw = STREAK_MULTIPLIER.min + (days - 1) * STREAK_MULTIPLIER.perDayStep;
  return Math.min(STREAK_MULTIPLIER.max, Math.max(STREAK_MULTIPLIER.min, raw));
}
