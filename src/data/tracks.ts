/**
 * Challenge Tracks — curated, ordered collections built ENTIRELY from the
 * existing tagged problem registry (no new problem statements). A single
 * problem can belong to several tracks; solving it anywhere (its normal
 * /problem/:slug page) updates progress, which every track reflects.
 *
 * Selection is fully deterministic: within a category we take a pattern's
 * problems sorted by (difficulty, slug) and slice a fixed count, so the same
 * tracks are produced on every load and stay valid as long as the content
 * exists. Tracks are built lazily and memoized, so this module can be imported
 * before `registerContent()` has populated the curriculum.
 */

import type { Difficulty, Problem } from "@/types";
import { allProblems, getProblem } from "./curriculum";

export type TrackId = "blind75" | "ordered75" | "extended150" | "daily";

export type TrackKind = "categorized" | "sequenced" | "daily";

export interface TrackGroup {
  /** Category name (Blind 75) or "Week N" label (Ordered 75). */
  label: string;
  problemIds: string[];
}

export interface Track {
  id: TrackId;
  title: string;
  blurb: string;
  kind: TrackKind;
  /** Ordered, de-duplicated flat list of every problem in the track. */
  problemIds: string[];
  /** Grouped view (categories / weeks). Empty for the daily track. */
  groups: TrackGroup[];
  /** Planned size (for progress denominators). */
  target: number;
}

const DIFF_RANK: Record<Difficulty, number> = { easy: 0, medium: 1, hard: 2 };

/** Problems carrying a given pattern id, deterministically ordered. */
function patternPool(patternId: string): Problem[] {
  return allProblems()
    .filter((p) => p.patternIds.includes(patternId))
    .sort((a, b) => DIFF_RANK[a.difficulty] - DIFF_RANK[b.difficulty] || (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
}

/** Take the first `count` problem ids from a pattern's ordered pool. */
function pick(patternId: string, count: number): string[] {
  return patternPool(patternId).slice(0, count).map((p) => p.id);
}

/** A named category drawing `count` problems from one pattern. */
interface CategorySpec {
  label: string;
  pattern: string;
  count: number;
}

/**
 * The 15 core interview categories (5 problems each = 75). These form Blind 75
 * and Ordered 75; Extended 150 adds the remaining patterns on top.
 */
const CORE_CATEGORIES: CategorySpec[] = [
  { label: "Arrays & Hashing", pattern: "frequency-counter", count: 5 },
  { label: "Two Pointers", pattern: "two-pointers", count: 5 },
  { label: "Sliding Window", pattern: "sliding-window", count: 5 },
  { label: "Stack", pattern: "monotonic-stack", count: 5 },
  { label: "Binary Search", pattern: "modified-binary-search", count: 5 },
  { label: "Linked List", pattern: "linked-list-reversal", count: 5 },
  { label: "Trees (DFS)", pattern: "tree-dfs", count: 5 },
  { label: "Trees (BFS)", pattern: "tree-bfs", count: 5 },
  { label: "Tries", pattern: "trie", count: 5 },
  { label: "Heap / Top-K", pattern: "top-k-elements", count: 5 },
  { label: "Backtracking", pattern: "subsets-backtracking", count: 5 },
  { label: "Graphs", pattern: "graph-traversal", count: 5 },
  { label: "Intervals", pattern: "merge-intervals", count: 5 },
  { label: "Dynamic Programming", pattern: "dp-1d", count: 5 },
  { label: "Greedy", pattern: "greedy", count: 5 },
];

/** Extra categories layered on to reach Extended 150 (another 75). */
const EXTENDED_EXTRA: CategorySpec[] = [
  { label: "Prefix Sum", pattern: "prefix-sum", count: 5 },
  { label: "Fast & Slow Pointers", pattern: "fast-slow-pointers", count: 5 },
  { label: "Cyclic Sort", pattern: "cyclic-sort", count: 5 },
  { label: "Two Heaps", pattern: "two-heaps", count: 5 },
  { label: "K-Way Merge", pattern: "k-way-merge", count: 5 },
  { label: "DP — Knapsack", pattern: "dp-knapsack", count: 5 },
  { label: "DP — Grids", pattern: "dp-grid", count: 5 },
  { label: "DP — Strings", pattern: "dp-string", count: 5 },
  { label: "DP — State & Intervals", pattern: "dp-state", count: 5 },
  { label: "Topological Sort", pattern: "toposort", count: 5 },
  { label: "Union-Find", pattern: "union-find", count: 5 },
  { label: "Shortest Paths", pattern: "shortest-path", count: 5 },
  { label: "Monotonic Deque", pattern: "mono-deque", count: 5 },
  { label: "Bit Manipulation", pattern: "bit", count: 5 },
  { label: "Advanced Backtracking", pattern: "adv-backtrack", count: 5 },
];

function groupsFromSpecs(specs: CategorySpec[]): TrackGroup[] {
  return specs
    .map((s) => ({ label: s.label, problemIds: pick(s.pattern, s.count) }))
    .filter((g) => g.problemIds.length > 0);
}

function flatten(groups: TrackGroup[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const g of groups) for (const id of g.problemIds) if (!seen.has(id)) { seen.add(id); out.push(id); }
  return out;
}

/** Stage order for sequencing (dsa-s1..s6 -> 1..6). */
function stageOrder(problemId: string): number {
  const p = getProblem(problemId);
  if (!p) return 99;
  const m = /-s(\d+)$/.exec(p.stageId);
  return m && m[1] ? Number(m[1]) : 99;
}

/** Sequence the core 75 by (stage, difficulty, slug) and chunk into weeks. */
function sequencedWeeks(problemIds: string[], perWeek: number): TrackGroup[] {
  const ordered = [...problemIds].sort((a, b) => {
    const pa = getProblem(a);
    const pb = getProblem(b);
    if (!pa || !pb) return 0;
    return (
      stageOrder(a) - stageOrder(b) ||
      DIFF_RANK[pa.difficulty] - DIFF_RANK[pb.difficulty] ||
      (pa.slug < pb.slug ? -1 : pa.slug > pb.slug ? 1 : 0)
    );
  });
  const weeks: TrackGroup[] = [];
  for (let i = 0; i < ordered.length; i += perWeek) {
    weeks.push({ label: `Week ${weeks.length + 1}`, problemIds: ordered.slice(i, i + perWeek) });
  }
  return weeks;
}

let cache: Record<TrackId, Track> | null = null;

function build(): Record<TrackId, Track> {
  if (cache) return cache;

  const coreGroups = groupsFromSpecs(CORE_CATEGORIES);
  const coreFlat = flatten(coreGroups);

  const blind75: Track = {
    id: "blind75",
    title: "Blind 75",
    blurb: "The essential 75, grouped by the interview categories that matter most. A focused foundation.",
    kind: "categorized",
    problemIds: coreFlat,
    groups: coreGroups,
    target: 75,
  };

  const ordered75: Track = {
    id: "ordered75",
    title: "Ordered 75 Plan",
    blurb: "The same 75, resequenced into a week-by-week plan from easier fundamentals toward the harder patterns.",
    kind: "sequenced",
    problemIds: coreFlat,
    groups: sequencedWeeks(coreFlat, 8),
    target: coreFlat.length,
  };

  const extGroups = [...coreGroups, ...groupsFromSpecs(EXTENDED_EXTRA)];
  const extFlat = flatten(extGroups);
  const extended150: Track = {
    id: "extended150",
    title: "Extended 150",
    blurb: "A broader run across every pattern in the curriculum — the Blind 75 plus 75 more for deeper coverage.",
    kind: "categorized",
    problemIds: extFlat,
    groups: extGroups,
    target: 150,
  };

  const daily: Track = {
    id: "daily",
    title: "Daily Challenge",
    blurb: "One deterministic problem each day, drawn from the Extended 150 pool. Come back daily to keep your streak.",
    kind: "daily",
    problemIds: extFlat,
    groups: [],
    target: 0,
  };

  cache = { blind75, ordered75, extended150, daily };
  return cache;
}

export function allTracks(): Track[] {
  const t = build();
  return [t.blind75, t.ordered75, t.extended150, t.daily];
}

export function getTrack(id: string): Track | undefined {
  const t = build();
  return (t as Record<string, Track>)[id];
}

/** Deterministic daily pick from the Extended 150 pool for an ISO date (YYYY-MM-DD). */
export function dailyProblemIdForDate(dateISO: string): string | undefined {
  const pool = build().daily.problemIds;
  if (pool.length === 0) return undefined;
  let h = 2166136261;
  for (let i = 0; i < dateISO.length; i++) {
    h ^= dateISO.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const idx = Math.abs(h) % pool.length;
  return pool[idx];
}

/** Today's ISO date (YYYY-MM-DD) in local time. */
export function todayISO(): string {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

/** Number of a track's problems that satisfy the solved predicate. */
export function trackSolvedCount(track: Track, isSolved: (problemId: string) => boolean): number {
  let n = 0;
  for (const id of track.problemIds) if (isSolved(id)) n++;
  return n;
}
