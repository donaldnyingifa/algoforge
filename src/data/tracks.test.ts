import { describe, expect, it } from "vitest";
// Side effect: populates the curriculum registry (problems/modules/case
// studies) that tracks.ts is built from. Every test below exercises the real,
// currently-authored content rather than a synthetic fixture, since tracks.ts
// is tightly coupled to the real pattern ids.
import "@/data/registerContent";
import { getProblem } from "@/data/curriculum";
import { allTracks, dailyProblemIdForDate, getTrack, trackSolvedCount } from "./tracks";

describe("allTracks", () => {
  it("returns exactly the four expected tracks", () => {
    const ids = allTracks().map((t) => t.id);
    expect(ids).toEqual(["blind75", "ordered75", "extended150", "daily"]);
  });

  it("gives every category in blind75 and extended150 at least one real problem", () => {
    // Regression guard: a pattern-id typo/mismatch between tracks.ts and the
    // content files would silently produce an empty category rather than an
    // error (groupsFromSpecs filters empty groups out) — this test fails loudly
    // instead.
    const blind75 = getTrack("blind75")!;
    const extended150 = getTrack("extended150")!;
    for (const group of blind75.groups) {
      expect(group.problemIds.length, `category "${group.label}" is empty`).toBeGreaterThan(0);
    }
    // Extended 150 must carry at least as many categories as Blind 75 (it's
    // Blind 75 plus more, never fewer).
    expect(extended150.groups.length).toBeGreaterThanOrEqual(blind75.groups.length);
  });

  it("every problem id in every track resolves to a real, registered problem", () => {
    for (const track of allTracks()) {
      for (const id of track.problemIds) {
        expect(getProblem(id), `track "${track.id}" references unknown problem "${id}"`).toBeDefined();
      }
    }
  });

  it("has no duplicate problem ids within a single track's flat list", () => {
    for (const track of allTracks()) {
      expect(new Set(track.problemIds).size).toBe(track.problemIds.length);
    }
  });

  it("resequences the same problem set for ordered75 as blind75 (same pool, different order/grouping)", () => {
    const blind75 = getTrack("blind75")!;
    const ordered75 = getTrack("ordered75")!;
    expect(new Set(ordered75.problemIds)).toEqual(new Set(blind75.problemIds));
  });

  it("extended150 is a superset of blind75", () => {
    const blind75 = getTrack("blind75")!;
    const extended150 = getTrack("extended150")!;
    for (const id of blind75.problemIds) {
      expect(extended150.problemIds).toContain(id);
    }
  });

  it("builds the track table once and caches it (repeated calls return equal results)", () => {
    const first = allTracks();
    const second = allTracks();
    expect(second).toEqual(first);
  });
});

describe("dailyProblemIdForDate", () => {
  it("is deterministic for the same date", () => {
    const a = dailyProblemIdForDate("2026-08-30");
    const b = dailyProblemIdForDate("2026-08-30");
    expect(a).toBe(b);
    expect(a).toBeDefined();
  });

  it("returns a problem id that is actually in the daily pool", () => {
    const daily = getTrack("daily")!;
    const id = dailyProblemIdForDate("2026-01-01");
    expect(id).toBeDefined();
    expect(daily.problemIds).toContain(id);
  });

  it("varies across at least some dates (not a constant pick)", () => {
    const picks = new Set(
      Array.from({ length: 30 }, (_, i) => dailyProblemIdForDate(`2026-01-${String(i + 1).padStart(2, "0")}`)),
    );
    expect(picks.size).toBeGreaterThan(1);
  });
});

describe("trackSolvedCount", () => {
  it("counts only the problems the predicate marks solved", () => {
    const track = getTrack("blind75")!;
    const solved = new Set(track.problemIds.slice(0, 3));
    const count = trackSolvedCount(track, (id) => solved.has(id));
    expect(count).toBe(Math.min(3, track.problemIds.length));
  });

  it("returns 0 when nothing is solved", () => {
    const track = getTrack("blind75")!;
    expect(trackSolvedCount(track, () => false)).toBe(0);
  });
});
