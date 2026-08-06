/**
 * AlgoForge — core data-model types.
 *
 * These types are the single source of truth for content and progress across
 * every phase. They are intentionally strict and complete so that later phases
 * only need to *supply data*, never redefine shapes.
 */

/* ------------------------------------------------------------------ */
/* Shared primitives                                                   */
/* ------------------------------------------------------------------ */

export type Language = "js" | "ts";

export type Difficulty = "easy" | "medium" | "hard";

/** JSON-serializable value — the only thing test cases may carry. */
export type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json };

/** Source code paired for both supported languages. */
export interface CodeByLanguage {
  js: string;
  ts: string;
}

/**
 * How the judge decides correctness for a problem.
 * - returnValue: compare the function's return value to `expected`.
 * - mutateArgument: compare the (mutated) first argument to `expected`.
 * - orderInsensitiveArray: compare as arrays where element order is irrelevant.
 */
export type JudgeType = "returnValue" | "mutateArgument" | "orderInsensitiveArray";

/* ------------------------------------------------------------------ */
/* Problems & test cases                                               */
/* ------------------------------------------------------------------ */

/** Optional per-test comparator overrides layered on top of judgeType. */
export interface ComparatorFlags {
  /** Ignore element order when comparing arrays. */
  orderInsensitive?: boolean;
  /** Treat NaN as equal to NaN (default true in the engine). */
  nanEqualsNan?: boolean;
  /** Absolute tolerance for floating-point numeric comparison. */
  floatTolerance?: number;
}

export interface TestCase {
  /** Arguments passed to the solution function, in order. */
  args: Json[];
  /** Expected result (return value or mutated first arg per JudgeType). */
  expected: Json;
  /** Optional per-case comparator overrides. */
  comparator?: ComparatorFlags;
  /** Optional human label shown in the results panel. */
  label?: string;
}

export interface WorkedExample {
  input: string;
  output: string;
  explanation?: string;
}

/** The three ordered hint tiers: gentle nudge, then approach, then pseudocode. */
export type HintTriple = [nudge: string, approach: string, pseudocode: string];

export interface Solution {
  label: string;
  /** Prose explanation of the approach. */
  approach: string;
  code: CodeByLanguage;
  timeComplexity: string;
  spaceComplexity: string;
}

/** Tag namespaces used to weave one problem into many tracks/pathways. */
export type TrackTag =
  | "blind75"
  | "ordered75"
  | "extended150"
  | "daily"
  | string;

export interface Problem {
  id: string;
  slug: string;
  title: string;
  difficulty: Difficulty;
  stageId: string;
  patternIds: string[];
  trackTags: TrackTag[];
  /** Problem statement in Markdown (original wording only). */
  statement: string;
  examples: WorkedExample[];
  constraints: string[];
  starterCode: CodeByLanguage;
  /** Name of the function the learner must implement/export. */
  functionName: string;
  judgeType: JudgeType;
  visibleTests: TestCase[];
  /** Held-out cases (>= 6) covering edge conditions. */
  hiddenTests: TestCase[];
  hints: HintTriple;
  /** At least two: brute force + optimal. */
  solutions: Solution[];
  xp: number;
}

/* ------------------------------------------------------------------ */
/* Lessons, modules & build labs                                       */
/* ------------------------------------------------------------------ */

export interface LessonSection {
  heading: string;
  /** Markdown body; fenced code blocks may be made runnable by the renderer. */
  body: string;
}

export type ModuleKind =
  | "lesson"
  | "buildLab"
  | "patternModule"
  | "challengeTrack";

/** A unit test suite for a build lab: the learner's code must pass it. */
export interface BuildLab {
  id: string;
  /** Full specification the learner implements (Markdown). */
  spec: string;
  /** Exported symbol(s) the learner must provide (e.g. class name). */
  exportName: string;
  starterCode: CodeByLanguage;
  /**
   * Test harness source (per language). Runs in the code worker against the
   * learner's implementation and reports pass/fail per assertion.
   */
  testHarness: CodeByLanguage;
  /** A known-correct reference implementation used to self-verify the suite. */
  referenceImplementation: CodeByLanguage;
  xp: number;
}

export interface Module {
  id: string;
  stageId: string;
  title: string;
  kind: ModuleKind;
  /** Short summary shown on cards. */
  summary: string;
  lessonSections: LessonSection[];
  /** Problem shown as the guided, walked-through example (optional). */
  guidedExampleProblemId?: string;
  /** Drill problems, strictly ordered easy -> hard. */
  drillProblemIds: string[];
  /** Held-out pool used only by this module's proficiency test. */
  testPoolProblemIds: string[];
  /** Complexity/self-check MCQ ids this module owns (drawn into its test). */
  complexityQuestionIds?: string[];
  /** Build lab, when kind === "buildLab". */
  buildLab?: BuildLab;
  /** Badge awarded by this module's proficiency test. */
  badgeId?: string;
  /** Module ids recommended beforehand (advisory chips, never hard locks). */
  prerequisiteModuleIds: string[];
}

/* ------------------------------------------------------------------ */
/* Stages & curriculum registry                                        */
/* ------------------------------------------------------------------ */

export type CurriculumTrack = "dsa" | "systemDesign";

export interface Stage {
  id: string;
  track: CurriculumTrack;
  /** 1-based ordering within its track. */
  order: number;
  title: string;
  subtitle: string;
  moduleIds: string[];
}

/* ------------------------------------------------------------------ */
/* Quizzes (used by lessons, tests, and case studies)                  */
/* ------------------------------------------------------------------ */

export type QuizKind =
  | "mcq"
  | "multiSelect"
  | "numericTolerance"
  | "ordering"
  | "matching";

export interface MatchPair {
  left: string;
  right: string;
}

export interface QuizQuestion {
  id: string;
  kind: QuizKind;
  /** Prompt in Markdown. */
  prompt: string;
  /** Options for mcq / multiSelect (index-addressable). */
  options?: string[];
  /** Ordered items the learner must arrange (ordering kind). */
  orderingItems?: string[];
  /** Pairs to match (matching kind). */
  matchPairs?: MatchPair[];
  /** Correct option index for mcq. */
  answerIndex?: number;
  /** Correct option indices for multiSelect. */
  answerIndices?: number[];
  /** Target value for numericTolerance. */
  answerValue?: number;
  /** Absolute tolerance for numericTolerance grading. */
  tolerance?: number;
  /** Correct ordering as indices into orderingItems. */
  answerOrder?: number[];
  /** Explanation shown after answering (Markdown). */
  explanation: string;
  /** Optional weight for scoring (defaults to 1). */
  points?: number;
}

/* ------------------------------------------------------------------ */
/* Timed tests & badges                                                */
/* ------------------------------------------------------------------ */

/** Rules for how many problems of each difficulty a test draws. */
export interface TestDrawRules {
  easy: number;
  medium: number;
  hard: number;
}

export interface TestConfig {
  moduleId: string;
  drawRules: TestDrawRules;
  timeLimitMinutes: number;
  parTimeMinutes: number;
  /** Number of complexity MCQs appended (worth 10% of the score). */
  complexityMcqCount: number;
}

export type BadgeTier = "bronze" | "silver" | "gold" | "platinum";

export interface BadgeAward {
  moduleId: string;
  badgeId: string;
  tier: BadgeTier;
  /** Score percentage 0-100 at the time earned. */
  score: number;
  earnedAt: string; // ISO timestamp
}

export interface TestProblemResult {
  problemId: string;
  solved: boolean;
  timeSpentMs: number;
}

export interface TestSession {
  id: string;
  moduleId: string;
  config: TestConfig;
  /** Problem ids drawn for this session. */
  drawnProblemIds: string[];
  /** Complexity MCQs drawn for this session. */
  complexityQuestionIds: string[];
  startedAt: string; // ISO timestamp
  /** Present once submitted. */
  finishedAt?: string;
  /** Live remaining time is derived; this stores the configured limit. */
  timeLimitMs: number;
  problemResults: TestProblemResult[];
  /** Correct-count over complexity MCQs. */
  mcqCorrect: number;
  /** Final score 0-100 (undefined until submitted). */
  scorePercent?: number;
  awardedTier?: BadgeTier;
}

/* ------------------------------------------------------------------ */
/* User progress                                                       */
/* ------------------------------------------------------------------ */

export type ProblemStatus = "unattempted" | "attempted" | "solved";

export interface ProblemStat {
  status: ProblemStatus;
  attempts: number;
  timeSpentMs: number;
  hintsUsed: number;
  firstSolvedAt?: string; // ISO timestamp
  lastAttemptedAt?: string; // ISO timestamp
}

export type Rank =
  | "Novice"
  | "Apprentice"
  | "Practitioner"
  | "Specialist"
  | "Expert"
  | "Master";

export interface StreakState {
  current: number;
  best: number;
  /** ISO date (YYYY-MM-DD) of the last active day. */
  lastActiveDate?: string;
}

export interface UserSettings {
  preferredLanguage: Language;
  /** Editor font size in px. */
  editorFontSize: number;
  /** How often (days) to nudge the user to back up progress. */
  backupReminderDays: number;
  /** ISO date the user last exported/backed up. */
  lastBackupAt?: string;
  /** Reduce animations / high-contrast, etc. (reserved for Phase 18). */
  reduceMotion: boolean;
}

/** One day's rolled-up activity, keyed by ISO date (YYYY-MM-DD). */
export interface DailyActivity {
  xp: number;
  solved: number;
  lessons: number;
}

/** Spaced-repetition review entry (used from Phase 13). */
export interface ReviewEntry {
  problemId: string;
  /** ISO date the problem is next due for review. */
  dueDate: string;
  /** Index into the interval ladder (e.g. 3/7/21 days). */
  intervalStep: number;
}

export interface UserProgress {
  xp: number;
  rank: Rank;
  streak: StreakState;
  /** moduleId -> ISO timestamp completed. */
  lessonCompletions: Record<string, string>;
  /** buildLabId -> ISO timestamp the unit suite first fully passed. */
  buildLabCompletions: Record<string, string>;
  /** problemId -> stats. */
  problemStats: Record<string, ProblemStat>;
  badges: BadgeAward[];
  testHistory: TestSession[];
  reviewQueue: ReviewEntry[];
  /** Per-day rolled-up activity for the dashboard, keyed by ISO date. */
  activity: Record<string, DailyActivity>;
  settings: UserSettings;
  /** Schema version to enable safe migration of persisted state. */
  schemaVersion: number;
}

/* ------------------------------------------------------------------ */
/* System Design case studies                                          */
/* ------------------------------------------------------------------ */

/**
 * A walkthrough section is either narrative Markdown or an inline
 * decision-point quiz embedded in the guided walkthrough.
 */
export type WalkthroughSection =
  | { kind: "prose"; heading: string; body: string }
  | { kind: "decision"; question: QuizQuestion };

export type DesignTemplateSectionId =
  | "requirements"
  | "estimation"
  | "api"
  | "dataModel"
  | "highLevelDesign"
  | "deepDives";

export interface DesignTemplateSection {
  id: DesignTemplateSectionId;
  title: string;
  /** Prompting guidance shown to the learner (Markdown). */
  guidance: string;
}

export interface RubricCriterion {
  id: string;
  name: string;
  description: string;
  /** Fixed 0-4 self-assessment scale. */
  maxScore: 4;
}

export interface CaseStudy {
  id: string;
  title: string;
  difficulty: Difficulty;
  summary: string;
  walkthroughSections: WalkthroughSection[];
  designTemplate: DesignTemplateSection[];
  /** Model answer in Markdown, revealed after the learner submits. */
  modelAnswer: string;
  rubric: RubricCriterion[];
  xp: number;
}

/** Locally-persisted learner design work for a case study. */
export interface DesignSubmission {
  caseStudyId: string;
  /** Template section id -> the learner's written answer. */
  sectionAnswers: Partial<Record<DesignTemplateSectionId, string>>;
  /** Serialized diagram scratchpad data (excalidraw/canvas/text). */
  diagramData: string;
  /** Rubric criterion id -> self-score 0-4. */
  rubricScores: Record<string, number>;
  /** Whether the learner has formally submitted (unlocks the model answer). */
  submitted: boolean;
  updatedAt: string; // ISO timestamp
}
