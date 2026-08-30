import { describe, expect, it } from "vitest";
import { createInitialProgress, normalizeProgress } from "./progressStore";
import { SCHEMA_VERSION } from "@/lib/constants";

describe("createInitialProgress", () => {
  it("produces a fresh, empty progress object at the current schema version", () => {
    const p = createInitialProgress();
    expect(p.xp).toBe(0);
    expect(p.rank).toBe("Novice");
    expect(p.streak).toEqual({ current: 0, best: 0 });
    expect(p.badges).toEqual([]);
    expect(p.testHistory).toEqual([]);
    expect(p.reviewQueue).toEqual([]);
    expect(p.schemaVersion).toBe(SCHEMA_VERSION);
  });
});

describe("normalizeProgress", () => {
  it("falls back to a fresh progress object for null/undefined/non-object input", () => {
    expect(normalizeProgress(null)).toEqual(createInitialProgress());
    expect(normalizeProgress(undefined)).toEqual(createInitialProgress());
    expect(normalizeProgress("not an object")).toEqual(createInitialProgress());
    expect(normalizeProgress(42)).toEqual(createInitialProgress());
  });

  it("coerces malformed array/record fields to safe empty defaults instead of crashing", () => {
    const raw = {
      xp: "not a number",
      badges: "not an array",
      testHistory: null,
      reviewQueue: 5,
      lessonCompletions: null,
      streak: null,
    };
    const normalized = normalizeProgress(raw);
    expect(normalized.xp).toBe(0);
    expect(normalized.badges).toEqual([]);
    expect(normalized.testHistory).toEqual([]);
    expect(normalized.reviewQueue).toEqual([]);
    expect(normalized.lessonCompletions).toEqual({});
    expect(normalized.streak).toEqual({ current: 0, best: 0 });
  });

  it("preserves valid fields from a well-formed (e.g. older) progress blob", () => {
    const raw = {
      xp: 1200,
      lessonCompletions: { "m-1": "2026-01-01T00:00:00.000Z" },
      badges: [{ moduleId: "m-1", badgeId: "b-1", tier: "gold", score: 92, earnedAt: "2026-01-01T00:00:00.000Z" }],
      streak: { current: 4, best: 10, lastActiveDate: "2026-01-01" },
    };
    const normalized = normalizeProgress(raw);
    expect(normalized.xp).toBe(1200);
    expect(normalized.lessonCompletions).toEqual(raw.lessonCompletions);
    expect(normalized.badges).toEqual(raw.badges);
    expect(normalized.streak).toEqual(raw.streak);
  });

  it("always recomputes rank from xp rather than trusting a stored rank", () => {
    const normalized = normalizeProgress({ xp: 5000, rank: "Novice" });
    expect(normalized.rank).toBe("Specialist");
  });

  it("stamps the current schema version regardless of what was stored", () => {
    const normalized = normalizeProgress({ schemaVersion: 1 });
    expect(normalized.schemaVersion).toBe(SCHEMA_VERSION);
  });

  it("is idempotent: normalizing an already-normalized object returns an equal object", () => {
    const once = normalizeProgress({ xp: 800 });
    const twice = normalizeProgress(once);
    expect(twice).toEqual(once);
  });
});
