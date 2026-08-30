import { describe, expect, it } from "vitest";
import {
  decideTier,
  drawMcqs,
  drawProblems,
  formatDuration,
  retakeStatus,
  scoreTest,
  shuffle,
} from "./testEngine";
import type {
  CodeByLanguage,
  Difficulty,
  Problem,
  QuizQuestion,
  TestConfig,
  TestSession,
  UserProgress,
} from "@/types";

const CODE: CodeByLanguage = { js: "// js", ts: "// ts" };

function mkProblem(id: string, difficulty: Difficulty): Problem {
  return {
    id,
    slug: id,
    title: id,
    difficulty,
    stageId: "dsa-s1",
    patternIds: [],
    trackTags: [],
    statement: "Test problem.",
    examples: [],
    constraints: [],
    starterCode: CODE,
    functionName: "solve",
    judgeType: "returnValue",
    visibleTests: [],
    hiddenTests: [],
    hints: ["nudge", "approach", "pseudocode"],
    solutions: [
      { label: "Brute force", approach: "...", code: CODE, timeComplexity: "O(n)", spaceComplexity: "O(1)" },
    ],
    xp: 10,
  };
}

function mkMcq(id: string): QuizQuestion {
  return {
    id,
    kind: "mcq",
    prompt: "Prompt?",
    options: ["a", "b"],
    answerIndex: 0,
    explanation: "Because.",
  };
}

const DRAW_RULES = { easy: 1, medium: 2, hard: 1 };

describe("shuffle", () => {
  it("returns every original element exactly once, without mutating the input", () => {
    const input = [1, 2, 3, 4, 5];
    const copy = [...input];
    const out = shuffle(input);
    expect(input).toEqual(copy); // not mutated
    expect(out).toHaveLength(input.length);
    expect([...out].sort()).toEqual([...input].sort());
  });

  it("handles empty and single-element arrays", () => {
    expect(shuffle([])).toEqual([]);
    expect(shuffle([1])).toEqual([1]);
  });
});

describe("drawProblems", () => {
  it("honours the per-difficulty draw rules when the pool has enough of each", () => {
    const pool = [
      ...Array.from({ length: 5 }, (_, i) => mkProblem(`e${i}`, "easy")),
      ...Array.from({ length: 5 }, (_, i) => mkProblem(`m${i}`, "medium")),
      ...Array.from({ length: 5 }, (_, i) => mkProblem(`h${i}`, "hard")),
    ];
    const drawn = drawProblems(pool, DRAW_RULES);
    expect(drawn).toHaveLength(4); // 1 easy + 2 medium + 1 hard

    const byDiff = Object.fromEntries(pool.map((p) => [p.id, p.difficulty]));
    const counts = { easy: 0, medium: 0, hard: 0 };
    for (const id of drawn) counts[byDiff[id] as Difficulty]++;
    expect(counts).toEqual(DRAW_RULES);
  });

  it("tops up from leftovers when a difficulty is short, still hitting the target count", () => {
    // No hard problems at all in the pool.
    const pool = [
      ...Array.from({ length: 3 }, (_, i) => mkProblem(`e${i}`, "easy")),
      ...Array.from({ length: 3 }, (_, i) => mkProblem(`m${i}`, "medium")),
    ];
    const drawn = drawProblems(pool, DRAW_RULES);
    // Target is still 4 even though no hard problem exists to fill that slot.
    expect(drawn).toHaveLength(4);
    // No duplicates.
    expect(new Set(drawn).size).toBe(drawn.length);
  });

  it("never draws more than the pool actually has", () => {
    const pool = [mkProblem("only-one", "easy")];
    const drawn = drawProblems(pool, DRAW_RULES);
    expect(drawn).toEqual(["only-one"]);
  });

  it("orders the drawn ids easy -> hard", () => {
    const pool = [
      ...Array.from({ length: 5 }, (_, i) => mkProblem(`e${i}`, "easy")),
      ...Array.from({ length: 5 }, (_, i) => mkProblem(`m${i}`, "medium")),
      ...Array.from({ length: 5 }, (_, i) => mkProblem(`h${i}`, "hard")),
    ];
    const drawn = drawProblems(pool, DRAW_RULES);
    const byDiff = Object.fromEntries(pool.map((p) => [p.id, p.difficulty]));
    const order: Record<Difficulty, number> = { easy: 0, medium: 1, hard: 2 };
    const ranks = drawn.map((id) => order[byDiff[id] as Difficulty]);
    expect(ranks).toEqual([...ranks].sort((a, b) => a - b));
  });
});

describe("drawMcqs", () => {
  it("caps the draw at the pool size", () => {
    const pool = [mkMcq("q1"), mkMcq("q2")];
    expect(drawMcqs(pool, 5)).toHaveLength(2);
  });

  it("draws the requested count when the pool is large enough", () => {
    const pool = Array.from({ length: 10 }, (_, i) => mkMcq(`q${i}`));
    expect(drawMcqs(pool, 3)).toHaveLength(3);
  });
});

describe("scoreTest", () => {
  it("weights problems at 90% and mcqs at 10% when both are present", () => {
    // All problems solved, no mcqs correct.
    expect(scoreTest(4, 4, 0, 2)).toBe(90);
    // All problems solved, all mcqs correct.
    expect(scoreTest(4, 4, 2, 2)).toBe(100);
  });

  it("weights problems at 100% when there are no mcqs", () => {
    expect(scoreTest(4, 4, 0, 0)).toBe(100);
    expect(scoreTest(2, 4, 0, 0)).toBe(50);
  });

  it("weights mcqs at 100% when there are no problems", () => {
    expect(scoreTest(0, 0, 2, 2)).toBe(100);
  });

  it("returns 0 when there is nothing to score", () => {
    expect(scoreTest(0, 0, 0, 0)).toBe(0);
  });
});

describe("decideTier", () => {
  const parMs = 30 * 60_000;

  it("awards platinum only for a perfect score, under par, with no hints", () => {
    expect(decideTier(100, parMs - 1, parMs, 0)).toBe("platinum");
  });

  it("downgrades a perfect score to gold if hints were used", () => {
    expect(decideTier(100, parMs - 1, parMs, 1)).toBe("gold");
  });

  it("downgrades a perfect score to gold if it ran over par time", () => {
    expect(decideTier(100, parMs + 1, parMs, 0)).toBe("gold");
  });

  it("falls through to the ordinary tier thresholds otherwise", () => {
    expect(decideTier(80, parMs - 1, parMs, 0)).toBe("silver");
    expect(decideTier(50, parMs - 1, parMs, 0)).toBeNull();
  });
});

describe("retakeStatus", () => {
  const config: TestConfig = {
    moduleId: "m-1",
    drawRules: DRAW_RULES,
    timeLimitMinutes: 50,
    parTimeMinutes: 35,
    complexityMcqCount: 2,
  };

  function mkSession(moduleId: string, finishedAt: string): TestSession {
    return {
      id: `${moduleId}-${finishedAt}`,
      moduleId,
      config,
      drawnProblemIds: [],
      complexityQuestionIds: [],
      startedAt: finishedAt,
      finishedAt,
      timeLimitMs: 50 * 60_000,
      problemResults: [],
      mcqCorrect: 0,
    };
  }

  function mkProgress(testHistory: TestSession[]): UserProgress {
    return {
      xp: 0,
      rank: "Novice",
      streak: { current: 0, best: 0 },
      lessonCompletions: {},
      buildLabCompletions: {},
      problemStats: {},
      badges: [],
      testHistory,
      reviewQueue: [],
      activity: {},
      settings: {
        preferredLanguage: "js",
        editorFontSize: 14,
        backupReminderDays: 7,
        reduceMotion: false,
      },
      schemaVersion: 1,
    };
  }

  it("allows a first attempt with no history", () => {
    const status = retakeStatus(mkProgress([]), "m-1", 12);
    expect(status.allowed).toBe(true);
    expect(status.remainingMs).toBe(0);
  });

  it("blocks a retake still inside the cooldown window", () => {
    const justNow = new Date().toISOString();
    const status = retakeStatus(mkProgress([mkSession("m-1", justNow)]), "m-1", 12);
    expect(status.allowed).toBe(false);
    expect(status.remainingMs).toBeGreaterThan(0);
  });

  it("allows a retake once the cooldown has fully elapsed", () => {
    const longAgo = new Date(Date.now() - 13 * 3_600_000).toISOString();
    const status = retakeStatus(mkProgress([mkSession("m-1", longAgo)]), "m-1", 12);
    expect(status.allowed).toBe(true);
  });

  it("only considers history for the requested module", () => {
    const justNow = new Date().toISOString();
    const status = retakeStatus(mkProgress([mkSession("m-other", justNow)]), "m-1", 12);
    expect(status.allowed).toBe(true);
  });
});

describe("formatDuration", () => {
  it("formats sub-hour durations as M:SS", () => {
    expect(formatDuration(5_000)).toBe("0:05");
    expect(formatDuration(65_000)).toBe("1:05");
  });

  it("formats durations of an hour or more as Hh Mm", () => {
    expect(formatDuration(3_600_000)).toBe("1h 0m");
    expect(formatDuration(3_600_000 + 90_000)).toBe("1h 1m");
  });

  it("clamps negative durations to zero", () => {
    expect(formatDuration(-500)).toBe("0:00");
  });
});
