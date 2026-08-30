import { describe, expect, it } from "vitest";
import {
  nextRank,
  rankForXp,
  streakMultiplier,
  tierBonus,
  tierForScore,
  tierRank,
} from "./constants";

describe("rankForXp", () => {
  it("starts at Novice", () => {
    expect(rankForXp(0)).toBe("Novice");
    expect(rankForXp(499)).toBe("Novice");
  });

  it("promotes exactly at each threshold", () => {
    expect(rankForXp(500)).toBe("Apprentice");
    expect(rankForXp(1500)).toBe("Practitioner");
    expect(rankForXp(3500)).toBe("Specialist");
    expect(rankForXp(7000)).toBe("Expert");
    expect(rankForXp(12000)).toBe("Master");
  });

  it("stays at Master beyond the top threshold", () => {
    expect(rankForXp(1_000_000)).toBe("Master");
  });
});

describe("nextRank", () => {
  it("returns the next threshold above the current xp", () => {
    expect(nextRank(0)).toEqual({ rank: "Apprentice", minXp: 500 });
    expect(nextRank(499)).toEqual({ rank: "Apprentice", minXp: 500 });
    expect(nextRank(500)).toEqual({ rank: "Practitioner", minXp: 1500 });
  });

  it("returns null once past the last rank", () => {
    expect(nextRank(12000)).toBeNull();
    expect(nextRank(999_999)).toBeNull();
  });
});

describe("tierForScore", () => {
  it("maps scores to the highest tier they qualify for", () => {
    expect(tierForScore(100)).toBe("platinum");
    expect(tierForScore(99)).toBe("gold");
    expect(tierForScore(90)).toBe("gold");
    expect(tierForScore(89)).toBe("silver");
    expect(tierForScore(75)).toBe("silver");
    expect(tierForScore(74)).toBe("bronze");
    expect(tierForScore(60)).toBe("bronze");
  });

  it("returns null below the bronze threshold", () => {
    expect(tierForScore(59)).toBeNull();
    expect(tierForScore(0)).toBeNull();
  });
});

describe("tierRank / tierBonus", () => {
  it("ranks tiers in ascending order", () => {
    expect(tierRank("bronze")).toBeLessThan(tierRank("silver"));
    expect(tierRank("silver")).toBeLessThan(tierRank("gold"));
    expect(tierRank("gold")).toBeLessThan(tierRank("platinum"));
  });

  it("treats null/undefined as rank 0 and bonus 0 (no prior badge)", () => {
    expect(tierRank(null)).toBe(0);
    expect(tierRank(undefined)).toBe(0);
    expect(tierBonus(null)).toBe(0);
    expect(tierBonus(undefined)).toBe(0);
  });

  it("gives platinum the largest bonus", () => {
    expect(tierBonus("platinum")).toBeGreaterThan(tierBonus("gold"));
    expect(tierBonus("gold")).toBeGreaterThan(tierBonus("silver"));
    expect(tierBonus("silver")).toBeGreaterThan(tierBonus("bronze"));
  });
});

describe("streakMultiplier", () => {
  it("starts at the minimum on day one", () => {
    expect(streakMultiplier(1)).toBeCloseTo(1.1);
  });

  it("treats zero/negative streaks the same as day one", () => {
    expect(streakMultiplier(0)).toBeCloseTo(1.1);
    expect(streakMultiplier(-5)).toBeCloseTo(1.1);
  });

  it("increases per consecutive day", () => {
    expect(streakMultiplier(2)).toBeCloseTo(1.15);
    expect(streakMultiplier(3)).toBeCloseTo(1.2);
  });

  it("clamps at the maximum for long streaks", () => {
    expect(streakMultiplier(100)).toBeCloseTo(1.5);
    expect(streakMultiplier(1000)).toBeCloseTo(1.5);
  });
});
