import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s5";
const P = ["merge-intervals"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "mi-is-overlapping",
    slug: "intervals-overlap",
    title: "Do Two Intervals Overlap?",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Each interval is `[start, end]`. Return `true` if the two intervals share at least one point (touching endpoints count as overlapping).",
    examples: [
      { input: "[1,3], [2,4]", output: "true" },
      { input: "[1,2], [3,4]", output: "false" },
      { input: "[1,4], [4,5]", output: "true" },
    ],
    constraints: ["start <= end for both intervals"],
    functionName: "isOverlapping",
    starter: {
      js: "function isOverlapping(a, b) {\n  // True if the intervals share a point.\n}\n",
      ts: "function isOverlapping(a: number[], b: number[]): boolean {\n  // True if the intervals share a point.\n  return false;\n}\n",
    },
    visible: [
      { args: [[1, 3], [2, 4]], expected: true },
      { args: [[1, 2], [3, 4]], expected: false },
      { args: [[1, 4], [4, 5]], expected: true },
    ],
    hidden: [
      { args: [[1, 1], [1, 1]], expected: true },
      { args: [[0, 5], [1, 2]], expected: true },
      { args: [[5, 6], [1, 2]], expected: false },
      { args: [[1, 2], [2, 3]], expected: true },
      { args: [[1, 10], [11, 12]], expected: false },
      { args: [[-5, 0], [0, 5]], expected: true },
    ],
    hints: [
      "It's easier to describe when they *don't* overlap: one ends before the other starts.",
      "They overlap exactly when a.start <= b.end and b.start <= a.end.",
      "Order doesn't matter — the condition is symmetric.",
    ],
    solutions: [
      {
        label: "Direct condition",
        approach: "Each interval must begin no later than the other ends.",
        js: "function isOverlapping(a, b) {\n  return a[0] <= b[1] && b[0] <= a[1];\n}\n",
        ts: "function isOverlapping(a: number[], b: number[]): boolean {\n  return a[0] <= b[1] && b[0] <= a[1];\n}\n",
        commentedCode: {
          js: "function isOverlapping(a, b) {\n  // Both starts must fall on or before the other interval's end.\n  // The inclusive comparisons make intervals that touch at an endpoint overlap.\n  return a[0] <= b[1] && b[0] <= a[1];\n}\n",
          ts: "function isOverlapping(a: number[], b: number[]): boolean {\n  // Both starts must fall on or before the other interval's end.\n  // The inclusive comparisons make intervals that touch at an endpoint overlap.\n  return a[0] <= b[1] && b[0] <= a[1];\n}\n",
        },
        time: "O(1)",
        space: "O(1)",
      },
      {
        label: "Negate the disjoint case",
        approach: "They fail to overlap only when one lies entirely before the other.",
        js: "function isOverlapping(a, b) {\n  const disjoint = a[1] < b[0] || b[1] < a[0];\n  return !disjoint;\n}\n",
        ts: "function isOverlapping(a: number[], b: number[]): boolean {\n  const disjoint = a[1] < b[0] || b[1] < a[0];\n  return !disjoint;\n}\n",
        commentedCode: {
          js: "function isOverlapping(a, b) {\n  // The intervals are disjoint only if either one ends before the other starts.\n  // Strict comparisons mean touching endpoints are not considered disjoint.\n  const disjoint = a[1] < b[0] || b[1] < a[0];\n  // Negating the only disjoint cases leaves every kind of overlap.\n  return !disjoint;\n}\n",
          ts: "function isOverlapping(a: number[], b: number[]): boolean {\n  // The intervals are disjoint only if either one ends before the other starts.\n  // Strict comparisons mean touching endpoints are not considered disjoint.\n  const disjoint = a[1] < b[0] || b[1] < a[0];\n  // Negating the only disjoint cases leaves every kind of overlap.\n  return !disjoint;\n}\n",
        },
        time: "O(1)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mi-count-overlapping",
    slug: "count-intervals-containing",
    title: "Intervals Containing a Point",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Return how many of the given intervals contain `point` (inclusive of both endpoints).",
    examples: [
      { input: "[[1,3],[2,5],[6,7]], 2", output: "2" },
      { input: "[[1,3]], 5", output: "0" },
      { input: "[], 1", output: "0" },
    ],
    constraints: ["0 <= intervals.length <= 10000"],
    functionName: "countContaining",
    starter: {
      js: "function countContaining(intervals, point) {\n  // How many intervals contain the point.\n}\n",
      ts: "function countContaining(intervals: number[][], point: number): number {\n  // How many intervals contain the point.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 3], [2, 5], [6, 7]], 2], expected: 2 },
      { args: [[[1, 3]], 5], expected: 0 },
      { args: [[], 1], expected: 0 },
    ],
    hidden: [
      { args: [[[1, 3], [2, 5], [6, 7]], 6], expected: 1 },
      { args: [[[1, 3], [2, 5], [6, 7]], 3], expected: 2 },
      { args: [[[0, 10]], 0], expected: 1 },
      { args: [[[0, 10]], 10], expected: 1 },
      { args: [[[1, 2], [2, 3], [3, 4]], 2], expected: 2 },
      { args: [[[1, 2], [3, 4]], 5], expected: 0 },
    ],
    hints: [
      "An interval contains the point when start <= point <= end.",
      "Count the intervals satisfying that test.",
      "return intervals.filter(([s, e]) => s <= point && point <= e).length.",
    ],
    solutions: [
      {
        label: "Filter and count",
        approach: "Test each interval against the point.",
        js: "function countContaining(intervals, point) {\n  return intervals.filter(([s, e]) => s <= point && point <= e).length;\n}\n",
        ts: "function countContaining(intervals: number[][], point: number): number {\n  return intervals.filter(([s, e]) => s <= point && point <= e).length;\n}\n",
        commentedCode: {
          js: "function countContaining(intervals, point) {\n  // Keep exactly the intervals whose inclusive bounds surround the point.\n  // The filtered array's length is the number of containing intervals.\n  return intervals.filter(([s, e]) => s <= point && point <= e).length;\n}\n",
          ts: "function countContaining(intervals: number[][], point: number): number {\n  // Keep exactly the intervals whose inclusive bounds surround the point.\n  // The filtered array's length is the number of containing intervals.\n  return intervals.filter(([s, e]) => s <= point && point <= e).length;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Accumulate",
        approach: "Tally matches in a loop.",
        js: "function countContaining(intervals, point) {\n  let count = 0;\n  for (const [s, e] of intervals) if (s <= point && point <= e) count++;\n  return count;\n}\n",
        ts: "function countContaining(intervals: number[][], point: number): number {\n  let count = 0;\n  for (const [s, e] of intervals) if (s <= point && point <= e) count++;\n  return count;\n}\n",
        commentedCode: {
          js: "function countContaining(intervals, point) {\n  // Accumulate the number of intervals that contain the point.\n  let count = 0;\n  // Examine each interval's start and end.\n  for (const [s, e] of intervals)\n    // Inclusive comparisons count a point on either endpoint.\n    if (s <= point && point <= e) count++;\n  // Return the completed tally.\n  return count;\n}\n",
          ts: "function countContaining(intervals: number[][], point: number): number {\n  // Accumulate the number of intervals that contain the point.\n  let count = 0;\n  // Examine each interval's start and end.\n  for (const [s, e] of intervals)\n    // Inclusive comparisons count a point on either endpoint.\n    if (s <= point && point <= e) count++;\n  // Return the completed tally.\n  return count;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mi-merge",
    slug: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Merge all overlapping intervals (touching endpoints merge too) and return the result sorted by start.",
    examples: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" },
      { input: "[[1,4],[4,5]]", output: "[[1,5]]" },
      { input: "[]", output: "[]" },
    ],
    constraints: ["0 <= intervals.length <= 10000", "intervals may arrive in any order"],
    functionName: "mergeIntervals",
    starter: {
      js: "function mergeIntervals(intervals) {\n  // Merge overlapping intervals, sorted by start.\n}\n",
      ts: "function mergeIntervals(intervals: number[][]): number[][] {\n  // Merge overlapping intervals, sorted by start.\n  return [];\n}\n",
    },
    visible: [
      { args: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
      { args: [[[1, 4], [4, 5]]], expected: [[1, 5]] },
      { args: [[]], expected: [] },
    ],
    hidden: [
      { args: [[[1, 4], [0, 4]]], expected: [[0, 4]] },
      { args: [[[1, 4], [2, 3]]], expected: [[1, 4]] },
      { args: [[[1, 4], [5, 6]]], expected: [[1, 4], [5, 6]] },
      { args: [[[2, 3], [1, 2]]], expected: [[1, 3]] },
      { args: [[[1, 10], [2, 3], [4, 5], [6, 7]]], expected: [[1, 10]] },
      { args: [[[6, 7], [1, 3], [2, 4]]], expected: [[1, 4], [6, 7]] },
    ],
    hints: [
      "Sort by start first — then overlapping intervals are always adjacent.",
      "Walk the sorted list keeping a 'current' interval you may extend.",
      "If next.start <= current.end, extend current.end to max(current.end, next.end).",
    ],
    solutions: [
      {
        label: "Sort then sweep",
        approach: "Sort by start and extend or emit as you go.",
        js: "function mergeIntervals(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged;\n}\n",
        ts: "function mergeIntervals(intervals: number[][]): number[][] {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged;\n}\n",
        commentedCode: {
          js: "function mergeIntervals(intervals) {\n  // Copy and sort by start so every possible overlap becomes adjacent.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Build new intervals instead of mutating the caller's arrays.\n  const merged = [];\n  // Process intervals from the earliest start to the latest.\n  for (const [start, end] of sorted) {\n    // Only the most recently merged interval can overlap this one.\n    const last = merged[merged.length - 1];\n    // Touching or overlapping intervals belong to the same covered run.\n    if (last && start <= last[1])\n      // Extend the run only as far as the farther endpoint.\n      last[1] = Math.max(last[1], end);\n    else\n      // A gap starts a new independent covered run.\n      merged.push([start, end]);\n  }\n  // The sweep produced disjoint intervals in sorted order.\n  return merged;\n}\n",
          ts: "function mergeIntervals(intervals: number[][]): number[][] {\n  // Copy and sort by start so every possible overlap becomes adjacent.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Build new intervals instead of mutating the caller's arrays.\n  const merged: number[][] = [];\n  // Process intervals from the earliest start to the latest.\n  for (const [start, end] of sorted) {\n    // Only the most recently merged interval can overlap this one.\n    const last = merged[merged.length - 1];\n    // Touching or overlapping intervals belong to the same covered run.\n    if (last && start <= last[1])\n      // Extend the run only as far as the farther endpoint.\n      last[1] = Math.max(last[1], end);\n    else\n      // A gap starts a new independent covered run.\n      merged.push([start, end]);\n  }\n  // The sweep produced disjoint intervals in sorted order.\n  return merged;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Repeated pairwise merge",
        approach: "Keep merging any overlapping pair until nothing changes.",
        js: "function mergeIntervals(intervals) {\n  const result = intervals.map((iv) => [iv[0], iv[1]]);\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (let i = 0; i < result.length && !changed; i++) {\n      for (let j = i + 1; j < result.length; j++) {\n        const a = result[i], b = result[j];\n        if (a[0] <= b[1] && b[0] <= a[1]) {\n          a[0] = Math.min(a[0], b[0]);\n          a[1] = Math.max(a[1], b[1]);\n          result.splice(j, 1);\n          changed = true;\n          break;\n        }\n      }\n    }\n  }\n  return result.sort((a, b) => a[0] - b[0]);\n}\n",
        ts: "function mergeIntervals(intervals: number[][]): number[][] {\n  const result = intervals.map((iv) => [iv[0], iv[1]]);\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (let i = 0; i < result.length && !changed; i++) {\n      for (let j = i + 1; j < result.length; j++) {\n        const a = result[i], b = result[j];\n        if (a[0] <= b[1] && b[0] <= a[1]) {\n          a[0] = Math.min(a[0], b[0]);\n          a[1] = Math.max(a[1], b[1]);\n          result.splice(j, 1);\n          changed = true;\n          break;\n        }\n      }\n    }\n  }\n  return result.sort((a, b) => a[0] - b[0]);\n}\n",
        commentedCode: {
          js: "function mergeIntervals(intervals) {\n  // Clone every interval because merging will rewrite endpoints.\n  const result = intervals.map((iv) => [iv[0], iv[1]]);\n  // Enter the loop once, then repeat whenever a pair is merged.\n  let changed = true;\n  while (changed) {\n    // Assume this pass is stable until an overlap proves otherwise.\n    changed = false;\n    // Choose the first interval; stop the pass after one successful merge.\n    for (let i = 0; i < result.length && !changed; i++) {\n      // Compare it with every interval that follows it.\n      for (let j = i + 1; j < result.length; j++) {\n        const a = result[i], b = result[j];\n        // Inclusive bounds detect overlap, including touching endpoints.\n        if (a[0] <= b[1] && b[0] <= a[1]) {\n          // Replace a with the union of both intervals.\n          a[0] = Math.min(a[0], b[0]);\n          a[1] = Math.max(a[1], b[1]);\n          // Remove b now that its range has been absorbed into a.\n          result.splice(j, 1);\n          // Another pass is needed because the wider a may reach a new interval.\n          changed = true;\n          break;\n        }\n      }\n    }\n  }\n  // Normalize the stable, disjoint result into start order.\n  return result.sort((a, b) => a[0] - b[0]);\n}\n",
          ts: "function mergeIntervals(intervals: number[][]): number[][] {\n  // Clone every interval because merging will rewrite endpoints.\n  const result = intervals.map((iv) => [iv[0], iv[1]]);\n  // Enter the loop once, then repeat whenever a pair is merged.\n  let changed = true;\n  while (changed) {\n    // Assume this pass is stable until an overlap proves otherwise.\n    changed = false;\n    // Choose the first interval; stop the pass after one successful merge.\n    for (let i = 0; i < result.length && !changed; i++) {\n      // Compare it with every interval that follows it.\n      for (let j = i + 1; j < result.length; j++) {\n        const a = result[i], b = result[j];\n        // Inclusive bounds detect overlap, including touching endpoints.\n        if (a[0] <= b[1] && b[0] <= a[1]) {\n          // Replace a with the union of both intervals.\n          a[0] = Math.min(a[0], b[0]);\n          a[1] = Math.max(a[1], b[1]);\n          // Remove b now that its range has been absorbed into a.\n          result.splice(j, 1);\n          // Another pass is needed because the wider a may reach a new interval.\n          changed = true;\n          break;\n        }\n      }\n    }\n  }\n  // Normalize the stable, disjoint result into start order.\n  return result.sort((a, b) => a[0] - b[0]);\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "mi-insert",
    slug: "insert-interval",
    title: "Insert an Interval",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given intervals sorted by start and not overlapping, insert `newInterval` and merge anything it touches. Return the result sorted by start.",
    examples: [
      { input: "[[1,3],[6,9]], [2,5]", output: "[[1,5],[6,9]]" },
      { input: "[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]", output: "[[1,2],[3,10],[12,16]]" },
      { input: "[], [5,7]", output: "[[5,7]]" },
    ],
    constraints: ["input intervals are sorted and disjoint"],
    functionName: "insertInterval",
    starter: {
      js: "function insertInterval(intervals, newInterval) {\n  // Insert and merge.\n}\n",
      ts: "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  // Insert and merge.\n  return [];\n}\n",
    },
    visible: [
      { args: [[[1, 3], [6, 9]], [2, 5]], expected: [[1, 5], [6, 9]] },
      { args: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]], expected: [[1, 2], [3, 10], [12, 16]] },
      { args: [[], [5, 7]], expected: [[5, 7]] },
    ],
    hidden: [
      { args: [[[1, 5]], [2, 3]], expected: [[1, 5]] },
      { args: [[[1, 5]], [6, 8]], expected: [[1, 5], [6, 8]] },
      { args: [[[1, 5]], [0, 0]], expected: [[0, 0], [1, 5]] },
      { args: [[[3, 5], [8, 10]], [1, 2]], expected: [[1, 2], [3, 5], [8, 10]] },
      { args: [[[1, 2], [5, 6]], [3, 4]], expected: [[1, 2], [3, 4], [5, 6]] },
      { args: [[[1, 3]], [3, 5]], expected: [[1, 5]] },
    ],
    hints: [
      "The simplest correct approach: append the new interval, then merge everything.",
      "For a single pass, emit intervals ending before it, absorb overlaps, then emit the rest.",
      "Touching endpoints merge, so use <= when comparing.",
    ],
    solutions: [
      {
        label: "Append then merge",
        approach: "Reuse the merge routine after adding the new interval.",
        js: "function insertInterval(intervals, newInterval) {\n  const all = [...intervals.map((iv) => [iv[0], iv[1]]), [newInterval[0], newInterval[1]]];\n  all.sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  for (const [start, end] of all) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged;\n}\n",
        ts: "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  const all = [...intervals.map((iv) => [iv[0], iv[1]]), [newInterval[0], newInterval[1]]];\n  all.sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  for (const [start, end] of all) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged;\n}\n",
        commentedCode: {
          js: "function insertInterval(intervals, newInterval) {\n  // Clone the existing intervals and append a clone of the new one.\n  const all = [...intervals.map((iv) => [iv[0], iv[1]]), [newInterval[0], newInterval[1]]];\n  // Sorting restores the order needed for a merge sweep.\n  all.sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  // Fold each sorted interval into the union built so far.\n  for (const [start, end] of all) {\n    const last = merged[merged.length - 1];\n    // Extend the last run when this interval overlaps or touches it.\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    // Otherwise preserve it as the start of a separate run.\n    else merged.push([start, end]);\n  }\n  // The inserted interval is now in place and all overlaps are merged.\n  return merged;\n}\n",
          ts: "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  // Clone the existing intervals and append a clone of the new one.\n  const all = [...intervals.map((iv) => [iv[0], iv[1]]), [newInterval[0], newInterval[1]]];\n  // Sorting restores the order needed for a merge sweep.\n  all.sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  // Fold each sorted interval into the union built so far.\n  for (const [start, end] of all) {\n    const last = merged[merged.length - 1];\n    // Extend the last run when this interval overlaps or touches it.\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    // Otherwise preserve it as the start of a separate run.\n    else merged.push([start, end]);\n  }\n  // The inserted interval is now in place and all overlaps are merged.\n  return merged;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Single pass in three phases",
        approach: "Emit the intervals before, absorb the overlapping run, emit the rest.",
        js: "function insertInterval(intervals, newInterval) {\n  const out = [];\n  let [start, end] = newInterval;\n  let i = 0;\n  while (i < intervals.length && intervals[i][1] < start) out.push([intervals[i][0], intervals[i][1]]), i++;\n  while (i < intervals.length && intervals[i][0] <= end) {\n    start = Math.min(start, intervals[i][0]);\n    end = Math.max(end, intervals[i][1]);\n    i++;\n  }\n  out.push([start, end]);\n  while (i < intervals.length) out.push([intervals[i][0], intervals[i][1]]), i++;\n  return out;\n}\n",
        ts: "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  const out: number[][] = [];\n  let start = newInterval[0], end = newInterval[1];\n  let i = 0;\n  while (i < intervals.length && intervals[i][1] < start) { out.push([intervals[i][0], intervals[i][1]]); i++; }\n  while (i < intervals.length && intervals[i][0] <= end) {\n    start = Math.min(start, intervals[i][0]);\n    end = Math.max(end, intervals[i][1]);\n    i++;\n  }\n  out.push([start, end]);\n  while (i < intervals.length) { out.push([intervals[i][0], intervals[i][1]]); i++; }\n  return out;\n}\n",
        commentedCode: {
          js: "function insertInterval(intervals, newInterval) {\n  // Collect the sorted, disjoint output without changing either input.\n  const out = [];\n  // These bounds expand as the new interval absorbs overlaps.\n  let [start, end] = newInterval;\n  let i = 0;\n  // Phase 1: copy every interval that ends before the new one begins.\n  while (i < intervals.length && intervals[i][1] < start)\n    out.push([intervals[i][0], intervals[i][1]]), i++;\n  // Phase 2: absorb every interval that starts before the merged end.\n  while (i < intervals.length && intervals[i][0] <= end) {\n    start = Math.min(start, intervals[i][0]);\n    end = Math.max(end, intervals[i][1]);\n    i++;\n  }\n  // Emit the new interval after its entire overlapping run is combined.\n  out.push([start, end]);\n  // Phase 3: copy the intervals that lie strictly after the merged interval.\n  while (i < intervals.length)\n    out.push([intervals[i][0], intervals[i][1]]), i++;\n  return out;\n}\n",
          ts: "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  // Collect the sorted, disjoint output without changing either input.\n  const out: number[][] = [];\n  // These bounds expand as the new interval absorbs overlaps.\n  let start = newInterval[0], end = newInterval[1];\n  let i = 0;\n  // Phase 1: copy every interval that ends before the new one begins.\n  while (i < intervals.length && intervals[i][1] < start) {\n    out.push([intervals[i][0], intervals[i][1]]);\n    i++;\n  }\n  // Phase 2: absorb every interval that starts before the merged end.\n  while (i < intervals.length && intervals[i][0] <= end) {\n    start = Math.min(start, intervals[i][0]);\n    end = Math.max(end, intervals[i][1]);\n    i++;\n  }\n  // Emit the new interval after its entire overlapping run is combined.\n  out.push([start, end]);\n  // Phase 3: copy the intervals that lie strictly after the merged interval.\n  while (i < intervals.length) {\n    out.push([intervals[i][0], intervals[i][1]]);\n    i++;\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "mi-can-attend",
    slug: "can-attend-all",
    title: "Can Attend All Meetings?",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each interval is a meeting `[start, end]`. Return `true` if one person could attend them all — no two meetings overlap. A meeting ending exactly when another starts is fine.",
    examples: [
      { input: "[[0,30],[5,10],[15,20]]", output: "false" },
      { input: "[[7,10],[2,4]]", output: "true" },
      { input: "[]", output: "true" },
    ],
    constraints: ["0 <= intervals.length <= 10000"],
    functionName: "canAttendAll",
    starter: {
      js: "function canAttendAll(intervals) {\n  // True if no two meetings overlap.\n}\n",
      ts: "function canAttendAll(intervals: number[][]): boolean {\n  // True if no two meetings overlap.\n  return false;\n}\n",
    },
    visible: [
      { args: [[[0, 30], [5, 10], [15, 20]]], expected: false },
      { args: [[[7, 10], [2, 4]]], expected: true },
      { args: [[]], expected: true },
    ],
    hidden: [
      { args: [[[1, 2]]], expected: true },
      { args: [[[1, 2], [2, 3]]], expected: true },
      { args: [[[1, 3], [2, 4]]], expected: false },
      { args: [[[1, 5], [6, 8], [9, 10]]], expected: true },
      { args: [[[5, 8], [6, 8]]], expected: false },
      { args: [[[1, 10], [2, 3]]], expected: false },
    ],
    hints: [
      "Sort by start time; then only neighbours can conflict.",
      "A conflict is when the next meeting starts strictly before the current one ends.",
      "if (sorted[i][0] < sorted[i-1][1]) return false.",
    ],
    solutions: [
      {
        label: "Sort and compare neighbours",
        approach: "After sorting, one overlapping pair must be adjacent.",
        js: "function canAttendAll(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] < sorted[i - 1][1]) return false;\n  }\n  return true;\n}\n",
        ts: "function canAttendAll(intervals: number[][]): boolean {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] < sorted[i - 1][1]) return false;\n  }\n  return true;\n}\n",
        commentedCode: {
          js: "function canAttendAll(intervals) {\n  // Sort a copy by start time so any conflict appears between neighbours.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Compare each meeting with the meeting immediately before it.\n  for (let i = 1; i < sorted.length; i++) {\n    // Starting before the previous end creates an overlap.\n    // Equality is allowed because that room can be handed off immediately.\n    if (sorted[i][0] < sorted[i - 1][1]) return false;\n  }\n  // No adjacent pair conflicts, so one person can attend every meeting.\n  return true;\n}\n",
          ts: "function canAttendAll(intervals: number[][]): boolean {\n  // Sort a copy by start time so any conflict appears between neighbours.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Compare each meeting with the meeting immediately before it.\n  for (let i = 1; i < sorted.length; i++) {\n    // Starting before the previous end creates an overlap.\n    // Equality is allowed because that room can be handed off immediately.\n    if (sorted[i][0] < sorted[i - 1][1]) return false;\n  }\n  // No adjacent pair conflicts, so one person can attend every meeting.\n  return true;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Check every pair",
        approach: "Test all pairs directly for a strict overlap.",
        js: "function canAttendAll(intervals) {\n  for (let i = 0; i < intervals.length; i++) {\n    for (let j = i + 1; j < intervals.length; j++) {\n      const a = intervals[i], b = intervals[j];\n      if (a[0] < b[1] && b[0] < a[1]) return false;\n    }\n  }\n  return true;\n}\n",
        ts: "function canAttendAll(intervals: number[][]): boolean {\n  for (let i = 0; i < intervals.length; i++) {\n    for (let j = i + 1; j < intervals.length; j++) {\n      const a = intervals[i], b = intervals[j];\n      if (a[0] < b[1] && b[0] < a[1]) return false;\n    }\n  }\n  return true;\n}\n",
        commentedCode: {
          js: "function canAttendAll(intervals) {\n  // Choose each meeting as the first member of a possible conflict.\n  for (let i = 0; i < intervals.length; i++) {\n    // Pair it only with later meetings so every pair is checked once.\n    for (let j = i + 1; j < intervals.length; j++) {\n      const a = intervals[i], b = intervals[j];\n      // Both strict inequalities must hold for the meetings to share time.\n      // Strictness allows one meeting to start exactly when another ends.\n      if (a[0] < b[1] && b[0] < a[1]) return false;\n    }\n  }\n  // Every pair is disjoint or merely touches at an endpoint.\n  return true;\n}\n",
          ts: "function canAttendAll(intervals: number[][]): boolean {\n  // Choose each meeting as the first member of a possible conflict.\n  for (let i = 0; i < intervals.length; i++) {\n    // Pair it only with later meetings so every pair is checked once.\n    for (let j = i + 1; j < intervals.length; j++) {\n      const a = intervals[i], b = intervals[j];\n      // Both strict inequalities must hold for the meetings to share time.\n      // Strictness allows one meeting to start exactly when another ends.\n      if (a[0] < b[1] && b[0] < a[1]) return false;\n    }\n  }\n  // Every pair is disjoint or merely touches at an endpoint.\n  return true;\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mi-min-rooms",
    slug: "min-meeting-rooms",
    title: "Minimum Meeting Rooms",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Each interval is a meeting `[start, end]`. Return the fewest rooms needed so no two meetings share a room at the same time. A meeting ending exactly when another starts can reuse the room.",
    examples: [
      { input: "[[0,30],[5,10],[15,20]]", output: "2" },
      { input: "[[7,10],[2,4]]", output: "1" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= intervals.length <= 10000"],
    functionName: "minMeetingRooms",
    starter: {
      js: "function minMeetingRooms(intervals) {\n  // Fewest rooms needed.\n}\n",
      ts: "function minMeetingRooms(intervals: number[][]): number {\n  // Fewest rooms needed.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[0, 30], [5, 10], [15, 20]]], expected: 2 },
      { args: [[[7, 10], [2, 4]]], expected: 1 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[[1, 2]]], expected: 1 },
      { args: [[[1, 2], [2, 3]]], expected: 1 },
      { args: [[[1, 3], [2, 4]]], expected: 2 },
      { args: [[[1, 10], [2, 3], [3, 4]]], expected: 2 },
      { args: [[[1, 5], [2, 6], [3, 7]]], expected: 3 },
      { args: [[[1, 2], [3, 4], [5, 6]]], expected: 1 },
    ],
    hints: [
      "The answer is the largest number of meetings running at the same instant.",
      "Sort all start times and all end times separately, then sweep with two pointers.",
      "Each start before the next end needs a new room; each end frees one.",
    ],
    solutions: [
      {
        label: "Sweep starts against ends",
        approach: "Walk sorted starts and ends together, tracking concurrent meetings.",
        js: "function minMeetingRooms(intervals) {\n  const starts = intervals.map((iv) => iv[0]).sort((a, b) => a - b);\n  const ends = intervals.map((iv) => iv[1]).sort((a, b) => a - b);\n  let rooms = 0, best = 0, e = 0;\n  for (let s = 0; s < starts.length; s++) {\n    while (e < ends.length && ends[e] <= starts[s]) { rooms--; e++; }\n    rooms++;\n    best = Math.max(best, rooms);\n  }\n  return best;\n}\n",
        ts: "function minMeetingRooms(intervals: number[][]): number {\n  const starts = intervals.map((iv) => iv[0]).sort((a, b) => a - b);\n  const ends = intervals.map((iv) => iv[1]).sort((a, b) => a - b);\n  let rooms = 0, best = 0, e = 0;\n  for (let s = 0; s < starts.length; s++) {\n    while (e < ends.length && ends[e] <= starts[s]) { rooms--; e++; }\n    rooms++;\n    best = Math.max(best, rooms);\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function minMeetingRooms(intervals) {\n  // Sort starts independently to process meetings in arrival order.\n  const starts = intervals.map((iv) => iv[0]).sort((a, b) => a - b);\n  // Sort ends independently to know which occupied room becomes free next.\n  const ends = intervals.map((iv) => iv[1]).sort((a, b) => a - b);\n  // Track rooms in use, the peak usage, and the next unprocessed end.\n  let rooms = 0, best = 0, e = 0;\n  // Schedule each meeting at its sorted start time.\n  for (let s = 0; s < starts.length; s++) {\n    // Free every room whose meeting has ended by this start time.\n    while (e < ends.length && ends[e] <= starts[s]) {\n      rooms--;\n      e++;\n    }\n    // The starting meeting now occupies one room.\n    rooms++;\n    // The maximum simultaneous occupancy is the required room count.\n    best = Math.max(best, rooms);\n  }\n  return best;\n}\n",
          ts: "function minMeetingRooms(intervals: number[][]): number {\n  // Sort starts independently to process meetings in arrival order.\n  const starts = intervals.map((iv) => iv[0]).sort((a, b) => a - b);\n  // Sort ends independently to know which occupied room becomes free next.\n  const ends = intervals.map((iv) => iv[1]).sort((a, b) => a - b);\n  // Track rooms in use, the peak usage, and the next unprocessed end.\n  let rooms = 0, best = 0, e = 0;\n  // Schedule each meeting at its sorted start time.\n  for (let s = 0; s < starts.length; s++) {\n    // Free every room whose meeting has ended by this start time.\n    while (e < ends.length && ends[e] <= starts[s]) {\n      rooms--;\n      e++;\n    }\n    // The starting meeting now occupies one room.\n    rooms++;\n    // The maximum simultaneous occupancy is the required room count.\n    best = Math.max(best, rooms);\n  }\n  return best;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Event sweep",
        approach: "Turn each meeting into +1 / -1 events and take the running maximum.",
        js: "function minMeetingRooms(intervals) {\n  const events = [];\n  for (const [s, e] of intervals) { events.push([s, 1]); events.push([e, -1]); }\n  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  let cur = 0, best = 0;\n  for (const [, delta] of events) {\n    cur += delta;\n    best = Math.max(best, cur);\n  }\n  return best;\n}\n",
        ts: "function minMeetingRooms(intervals: number[][]): number {\n  const events: number[][] = [];\n  for (const [s, e] of intervals) { events.push([s, 1]); events.push([e, -1]); }\n  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  let cur = 0, best = 0;\n  for (const ev of events) {\n    cur += ev[1];\n    best = Math.max(best, cur);\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function minMeetingRooms(intervals) {\n  // Represent each start as +1 room and each end as -1 room.\n  const events = [];\n  for (const [s, e] of intervals) {\n    events.push([s, 1]);\n    events.push([e, -1]);\n  }\n  // Sweep chronologically; at a tie, process -1 before +1 so a room is reused.\n  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  // Track the current and maximum number of active meetings.\n  let cur = 0, best = 0;\n  for (const [, delta] of events) {\n    // Apply this start or end event to the active count.\n    cur += delta;\n    best = Math.max(best, cur);\n  }\n  // Peak concurrency equals the minimum number of rooms.\n  return best;\n}\n",
          ts: "function minMeetingRooms(intervals: number[][]): number {\n  // Represent each start as +1 room and each end as -1 room.\n  const events: number[][] = [];\n  for (const [s, e] of intervals) {\n    events.push([s, 1]);\n    events.push([e, -1]);\n  }\n  // Sweep chronologically; at a tie, process -1 before +1 so a room is reused.\n  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  // Track the current and maximum number of active meetings.\n  let cur = 0, best = 0;\n  for (const ev of events) {\n    // Apply this start or end event to the active count.\n    cur += ev[1];\n    best = Math.max(best, cur);\n  }\n  // Peak concurrency equals the minimum number of rooms.\n  return best;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "mi-intersection",
    slug: "interval-intersection",
    title: "Interval List Intersections",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Both lists are sorted and internally disjoint. Return every interval where the two lists overlap, sorted by start.",
    examples: [
      { input: "[[0,2],[5,10]], [[1,5],[8,12]]", output: "[[1,2],[5,5],[8,10]]" },
      { input: "[[1,3]], []", output: "[]" },
      { input: "[], []", output: "[]" },
    ],
    constraints: ["both lists are sorted and disjoint"],
    functionName: "intervalIntersection",
    starter: {
      js: "function intervalIntersection(a, b) {\n  // Overlapping pieces of the two lists.\n}\n",
      ts: "function intervalIntersection(a: number[][], b: number[][]): number[][] {\n  // Overlapping pieces of the two lists.\n  return [];\n}\n",
    },
    visible: [
      { args: [[[0, 2], [5, 10]], [[1, 5], [8, 12]]], expected: [[1, 2], [5, 5], [8, 10]] },
      { args: [[[1, 3]], []], expected: [] },
      { args: [[], []], expected: [] },
    ],
    hidden: [
      { args: [[[1, 5]], [[2, 3]]], expected: [[2, 3]] },
      { args: [[[1, 2]], [[3, 4]]], expected: [] },
      { args: [[[1, 10]], [[2, 3], [5, 6]]], expected: [[2, 3], [5, 6]] },
      { args: [[[1, 3], [5, 7]], [[2, 6]]], expected: [[2, 3], [5, 6]] },
      { args: [[[0, 0]], [[0, 0]]], expected: [[0, 0]] },
      { args: [[[1, 2], [3, 4]], [[2, 3]]], expected: [[2, 2], [3, 3]] },
    ],
    hints: [
      "The overlap of two intervals is [max(starts), min(ends)] — valid only if start <= end.",
      "Advance the pointer whose interval ends first.",
      "Both lists are sorted, so a single two-pointer sweep suffices.",
    ],
    solutions: [
      {
        label: "Two pointers",
        approach: "Compare fronts, emit the overlap, and advance the earlier-ending side.",
        js: "function intervalIntersection(a, b) {\n  const out = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) {\n    const start = Math.max(a[i][0], b[j][0]);\n    const end = Math.min(a[i][1], b[j][1]);\n    if (start <= end) out.push([start, end]);\n    if (a[i][1] < b[j][1]) i++; else j++;\n  }\n  return out;\n}\n",
        ts: "function intervalIntersection(a: number[][], b: number[][]): number[][] {\n  const out: number[][] = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) {\n    const start = Math.max(a[i][0], b[j][0]);\n    const end = Math.min(a[i][1], b[j][1]);\n    if (start <= end) out.push([start, end]);\n    if (a[i][1] < b[j][1]) i++; else j++;\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function intervalIntersection(a, b) {\n  // Store intersections in the order the two sorted lists produce them.\n  const out = [];\n  // Point at the next unprocessed interval in each list.\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) {\n    // An overlap can begin only after both intervals have begun.\n    const start = Math.max(a[i][0], b[j][0]);\n    // It must end as soon as either interval ends.\n    const end = Math.min(a[i][1], b[j][1]);\n    // Inclusive validity preserves intersections at a single endpoint.\n    if (start <= end) out.push([start, end]);\n    // The earlier-ending interval cannot overlap anything else at the other front.\n    if (a[i][1] < b[j][1]) i++; else j++;\n  }\n  return out;\n}\n",
          ts: "function intervalIntersection(a: number[][], b: number[][]): number[][] {\n  // Store intersections in the order the two sorted lists produce them.\n  const out: number[][] = [];\n  // Point at the next unprocessed interval in each list.\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) {\n    // An overlap can begin only after both intervals have begun.\n    const start = Math.max(a[i][0], b[j][0]);\n    // It must end as soon as either interval ends.\n    const end = Math.min(a[i][1], b[j][1]);\n    // Inclusive validity preserves intersections at a single endpoint.\n    if (start <= end) out.push([start, end]);\n    // The earlier-ending interval cannot overlap anything else at the other front.\n    if (a[i][1] < b[j][1]) i++; else j++;\n  }\n  return out;\n}\n",
        },
        time: "O(n + m)",
        space: "O(n + m)",
      },
      {
        label: "Check every pair",
        approach: "Test each pair of intervals and keep the valid overlaps.",
        js: "function intervalIntersection(a, b) {\n  const out = [];\n  for (const x of a) {\n    for (const y of b) {\n      const start = Math.max(x[0], y[0]);\n      const end = Math.min(x[1], y[1]);\n      if (start <= end) out.push([start, end]);\n    }\n  }\n  return out.sort((p, q) => p[0] - q[0]);\n}\n",
        ts: "function intervalIntersection(a: number[][], b: number[][]): number[][] {\n  const out: number[][] = [];\n  for (const x of a) {\n    for (const y of b) {\n      const start = Math.max(x[0], y[0]);\n      const end = Math.min(x[1], y[1]);\n      if (start <= end) out.push([start, end]);\n    }\n  }\n  return out.sort((p, q) => p[0] - q[0]);\n}\n",
        commentedCode: {
          js: "function intervalIntersection(a, b) {\n  const out = [];\n  // Choose every interval from the first list.\n  for (const x of a) {\n    // Compare it with every interval from the second list.\n    for (const y of b) {\n      // The later start and earlier end bound their shared portion.\n      const start = Math.max(x[0], y[0]);\n      const end = Math.min(x[1], y[1]);\n      // Keep the shared portion when it has nonnegative width.\n      if (start <= end) out.push([start, end]);\n    }\n  }\n  // Pairwise enumeration needs a final sort to normalize output order.\n  return out.sort((p, q) => p[0] - q[0]);\n}\n",
          ts: "function intervalIntersection(a: number[][], b: number[][]): number[][] {\n  const out: number[][] = [];\n  // Choose every interval from the first list.\n  for (const x of a) {\n    // Compare it with every interval from the second list.\n    for (const y of b) {\n      // The later start and earlier end bound their shared portion.\n      const start = Math.max(x[0], y[0]);\n      const end = Math.min(x[1], y[1]);\n      // Keep the shared portion when it has nonnegative width.\n      if (start <= end) out.push([start, end]);\n    }\n  }\n  // Pairwise enumeration needs a final sort to normalize output order.\n  return out.sort((p, q) => p[0] - q[0]);\n}\n",
        },
        time: "O(n·m)",
        space: "O(n + m)",
      },
    ],
  },
  {
    id: "mi-total-length",
    slug: "total-covered-length",
    title: "Total Covered Length",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the total length covered by the union of the intervals, where the length of `[a, b]` is `b - a`. Overlapping parts count once.",
    examples: [
      { input: "[[1,3],[2,6]]", output: "5" },
      { input: "[[1,2],[3,4]]", output: "2" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= intervals.length <= 10000"],
    functionName: "totalCovered",
    starter: {
      js: "function totalCovered(intervals) {\n  // Length of the union.\n}\n",
      ts: "function totalCovered(intervals: number[][]): number {\n  // Length of the union.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 3], [2, 6]]], expected: 5 },
      { args: [[[1, 2], [3, 4]]], expected: 2 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[[1, 1]]], expected: 0 },
      { args: [[[0, 10]]], expected: 10 },
      { args: [[[1, 3], [5, 7]]], expected: 4 },
      { args: [[[1, 10], [2, 3]]], expected: 9 },
      { args: [[[1, 2], [2, 3]]], expected: 2 },
      { args: [[[5, 6], [1, 2], [2, 4]]], expected: 4 },
    ],
    hints: [
      "Merge the intervals first so nothing is double counted.",
      "Then simply add up (end - start) for each merged interval.",
      "Touching intervals merge into one longer piece.",
    ],
    solutions: [
      {
        label: "Merge then sum",
        approach: "Collapse overlaps, then total the lengths.",
        js: "function totalCovered(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged.reduce((sum, [s, e]) => sum + (e - s), 0);\n}\n",
        ts: "function totalCovered(intervals: number[][]): number {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged.reduce((sum, iv) => sum + (iv[1] - iv[0]), 0);\n}\n",
        commentedCode: {
          js: "function totalCovered(intervals) {\n  // Sort a copy so overlapping portions can be collapsed in one sweep.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  for (const [start, end] of sorted) {\n    // Only the last covered run can overlap the current interval.\n    const last = merged[merged.length - 1];\n    // Combine touching or overlapping coverage without double counting it.\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    // A separated interval starts another covered run.\n    else merged.push([start, end]);\n  }\n  // Disjoint runs can now be summed as end minus start.\n  return merged.reduce((sum, [s, e]) => sum + (e - s), 0);\n}\n",
          ts: "function totalCovered(intervals: number[][]): number {\n  // Sort a copy so overlapping portions can be collapsed in one sweep.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  for (const [start, end] of sorted) {\n    // Only the last covered run can overlap the current interval.\n    const last = merged[merged.length - 1];\n    // Combine touching or overlapping coverage without double counting it.\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    // A separated interval starts another covered run.\n    else merged.push([start, end]);\n  }\n  // Disjoint runs can now be summed as end minus start.\n  return merged.reduce((sum, iv) => sum + (iv[1] - iv[0]), 0);\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Track the covered frontier",
        approach: "Sweep sorted intervals, adding only the part beyond what's already covered.",
        js: "function totalCovered(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  let total = 0, frontier = -Infinity;\n  for (const [s, e] of sorted) {\n    const start = Math.max(s, frontier);\n    if (e > start) { total += e - start; frontier = e; }\n    else frontier = Math.max(frontier, e);\n  }\n  return total;\n}\n",
        ts: "function totalCovered(intervals: number[][]): number {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  let total = 0, frontier = -Infinity;\n  for (const [s, e] of sorted) {\n    const start = Math.max(s, frontier);\n    if (e > start) { total += e - start; frontier = e; }\n    else frontier = Math.max(frontier, e);\n  }\n  return total;\n}\n",
        commentedCode: {
          js: "function totalCovered(intervals) {\n  // Process coverage from the earliest start to the latest.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Frontier is the furthest point already counted.\n  let total = 0, frontier = -Infinity;\n  for (const [s, e] of sorted) {\n    // Skip any prefix of this interval that was covered earlier.\n    const start = Math.max(s, frontier);\n    if (e > start) {\n      // Only the portion beyond the frontier adds new length.\n      total += e - start;\n      frontier = e;\n    } else\n      // A contained interval adds nothing but may preserve the furthest reach.\n      frontier = Math.max(frontier, e);\n  }\n  return total;\n}\n",
          ts: "function totalCovered(intervals: number[][]): number {\n  // Process coverage from the earliest start to the latest.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Frontier is the furthest point already counted.\n  let total = 0, frontier = -Infinity;\n  for (const [s, e] of sorted) {\n    // Skip any prefix of this interval that was covered earlier.\n    const start = Math.max(s, frontier);\n    if (e > start) {\n      // Only the portion beyond the frontier adds new length.\n      total += e - start;\n      frontier = e;\n    } else\n      // A contained interval adds nothing but may preserve the furthest reach.\n      frontier = Math.max(frontier, e);\n  }\n  return total;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "mi-remove-covered",
    slug: "remove-covered-intervals",
    title: "Remove Covered Intervals",
    difficulty: "medium",
    patternIds: P,
    statement:
      "An interval `[a,b]` is covered by `[c,d]` when `c <= a` and `b <= d`. Remove every interval covered by another and return how many remain. Identical duplicates cover each other, so only one survives.",
    examples: [
      { input: "[[1,4],[3,6],[2,8]]", output: "2" },
      { input: "[[1,4],[2,3]]", output: "1" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= intervals.length <= 10000"],
    functionName: "removeCovered",
    starter: {
      js: "function removeCovered(intervals) {\n  // How many intervals survive.\n}\n",
      ts: "function removeCovered(intervals: number[][]): number {\n  // How many intervals survive.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 4], [3, 6], [2, 8]]], expected: 2 },
      { args: [[[1, 4], [2, 3]]], expected: 1 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[[1, 2]]], expected: 1 },
      { args: [[[1, 2], [1, 2]]], expected: 1 },
      { args: [[[1, 4], [2, 3], [3, 4]]], expected: 1 },
      { args: [[[1, 2], [3, 4]]], expected: 2 },
      { args: [[[0, 10], [5, 12]]], expected: 2 },
      { args: [[[1, 5], [2, 3], [4, 5]]], expected: 1 },
    ],
    hints: [
      "Sort by start ascending, breaking ties by **end descending** so the widest comes first.",
      "Then an interval survives only if its end exceeds the largest end seen so far.",
      "Track maxEnd as you sweep.",
    ],
    solutions: [
      {
        label: "Sort then track the furthest end",
        approach: "With the widest interval first, only a longer reach survives.",
        js: "function removeCovered(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || b[1] - a[1]);\n  let count = 0, maxEnd = -Infinity;\n  for (const [, end] of sorted) {\n    if (end > maxEnd) { count++; maxEnd = end; }\n  }\n  return count;\n}\n",
        ts: "function removeCovered(intervals: number[][]): number {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || b[1] - a[1]);\n  let count = 0, maxEnd = -Infinity;\n  for (const iv of sorted) {\n    if (iv[1] > maxEnd) { count++; maxEnd = iv[1]; }\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function removeCovered(intervals) {\n  // Sort by start ascending and put the widest equal-start interval first.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || b[1] - a[1]);\n  // maxEnd is the furthest endpoint reached by an earlier interval.\n  let count = 0, maxEnd = -Infinity;\n  for (const [, end] of sorted) {\n    // A farther end is not covered; equal or shorter ends are covered.\n    if (end > maxEnd) {\n      count++;\n      maxEnd = end;\n    }\n  }\n  return count;\n}\n",
          ts: "function removeCovered(intervals: number[][]): number {\n  // Sort by start ascending and put the widest equal-start interval first.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || b[1] - a[1]);\n  // maxEnd is the furthest endpoint reached by an earlier interval.\n  let count = 0, maxEnd = -Infinity;\n  for (const iv of sorted) {\n    // A farther end is not covered; equal or shorter ends are covered.\n    if (iv[1] > maxEnd) {\n      count++;\n      maxEnd = iv[1];\n    }\n  }\n  return count;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Check each against the rest",
        approach: "Count intervals not covered by any other (keeping one of each duplicate).",
        js: "function removeCovered(intervals) {\n  let count = 0;\n  for (let i = 0; i < intervals.length; i++) {\n    const [a, b] = intervals[i];\n    let covered = false;\n    for (let j = 0; j < intervals.length; j++) {\n      if (i === j) continue;\n      const [c, d] = intervals[j];\n      const sameInterval = c === a && d === b;\n      if (c <= a && b <= d && (!sameInterval || j < i)) { covered = true; break; }\n    }\n    if (!covered) count++;\n  }\n  return count;\n}\n",
        ts: "function removeCovered(intervals: number[][]): number {\n  let count = 0;\n  for (let i = 0; i < intervals.length; i++) {\n    const a = intervals[i][0], b = intervals[i][1];\n    let covered = false;\n    for (let j = 0; j < intervals.length; j++) {\n      if (i === j) continue;\n      const c = intervals[j][0], d = intervals[j][1];\n      const sameInterval = c === a && d === b;\n      if (c <= a && b <= d && (!sameInterval || j < i)) { covered = true; break; }\n    }\n    if (!covered) count++;\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function removeCovered(intervals) {\n  let count = 0;\n  // Decide independently whether each interval should survive.\n  for (let i = 0; i < intervals.length; i++) {\n    const [a, b] = intervals[i];\n    let covered = false;\n    // Search every other interval for one that contains [a, b].\n    for (let j = 0; j < intervals.length; j++) {\n      // An interval is not compared with itself.\n      if (i === j) continue;\n      const [c, d] = intervals[j];\n      const sameInterval = c === a && d === b;\n      // Equal duplicates use index order so exactly the first copy survives.\n      if (c <= a && b <= d && (!sameInterval || j < i)) {\n        covered = true;\n        break;\n      }\n    }\n    // Count this interval only when no other interval covers it.\n    if (!covered) count++;\n  }\n  return count;\n}\n",
          ts: "function removeCovered(intervals: number[][]): number {\n  let count = 0;\n  // Decide independently whether each interval should survive.\n  for (let i = 0; i < intervals.length; i++) {\n    const a = intervals[i][0], b = intervals[i][1];\n    let covered = false;\n    // Search every other interval for one that contains [a, b].\n    for (let j = 0; j < intervals.length; j++) {\n      // An interval is not compared with itself.\n      if (i === j) continue;\n      const c = intervals[j][0], d = intervals[j][1];\n      const sameInterval = c === a && d === b;\n      // Equal duplicates use index order so exactly the first copy survives.\n      if (c <= a && b <= d && (!sameInterval || j < i)) {\n        covered = true;\n        break;\n      }\n    }\n    // Count this interval only when no other interval covers it.\n    if (!covered) count++;\n  }\n  return count;\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mi-gaps",
    slug: "interval-gaps",
    title: "Gaps Between Intervals",
    difficulty: "medium",
    patternIds: P,
    statement:
      "After merging any overlaps, return the empty stretches between consecutive covered ranges as intervals, sorted by start. Touching ranges leave no gap.",
    examples: [
      { input: "[[1,3],[6,9]]", output: "[[3,6]]" },
      { input: "[[1,3],[3,5]]", output: "[]" },
      { input: "[]", output: "[]" },
    ],
    constraints: ["0 <= intervals.length <= 10000"],
    functionName: "intervalGaps",
    starter: {
      js: "function intervalGaps(intervals) {\n  // Empty stretches between merged intervals.\n}\n",
      ts: "function intervalGaps(intervals: number[][]): number[][] {\n  // Empty stretches between merged intervals.\n  return [];\n}\n",
    },
    visible: [
      { args: [[[1, 3], [6, 9]]], expected: [[3, 6]] },
      { args: [[[1, 3], [3, 5]]], expected: [] },
      { args: [[]], expected: [] },
    ],
    hidden: [
      { args: [[[1, 2]]], expected: [] },
      { args: [[[1, 2], [4, 5], [7, 8]]], expected: [[2, 4], [5, 7]] },
      { args: [[[1, 10], [2, 3]]], expected: [] },
      { args: [[[1, 2], [3, 4]]], expected: [[2, 3]] },
      { args: [[[5, 6], [1, 2]]], expected: [[2, 5]] },
      { args: [[[0, 1], [1, 2], [2, 3]]], expected: [] },
    ],
    hints: [
      "Merge first — overlapping intervals never leave a gap between them.",
      "Then each gap runs from one merged interval's end to the next one's start.",
      "Only emit a gap when the next start is strictly greater than the previous end.",
    ],
    solutions: [
      {
        label: "Merge then read the gaps",
        approach: "Collapse overlaps, then walk the merged list pairwise.",
        js: "function intervalGaps(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  const gaps = [];\n  for (let i = 1; i < merged.length; i++) {\n    if (merged[i][0] > merged[i - 1][1]) gaps.push([merged[i - 1][1], merged[i][0]]);\n  }\n  return gaps;\n}\n",
        ts: "function intervalGaps(intervals: number[][]): number[][] {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  const gaps: number[][] = [];\n  for (let i = 1; i < merged.length; i++) {\n    if (merged[i][0] > merged[i - 1][1]) gaps.push([merged[i - 1][1], merged[i][0]]);\n  }\n  return gaps;\n}\n",
        commentedCode: {
          js: "function intervalGaps(intervals) {\n  // Sort a copy so connected coverage appears consecutively.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  // First collapse all touching and overlapping ranges.\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  const gaps = [];\n  // Each empty stretch lies between two consecutive merged ranges.\n  for (let i = 1; i < merged.length; i++) {\n    // A strict jump leaves a gap from the previous end to the next start.\n    if (merged[i][0] > merged[i - 1][1])\n      gaps.push([merged[i - 1][1], merged[i][0]]);\n  }\n  return gaps;\n}\n",
          ts: "function intervalGaps(intervals: number[][]): number[][] {\n  // Sort a copy so connected coverage appears consecutively.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  // First collapse all touching and overlapping ranges.\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  const gaps: number[][] = [];\n  // Each empty stretch lies between two consecutive merged ranges.\n  for (let i = 1; i < merged.length; i++) {\n    // A strict jump leaves a gap from the previous end to the next start.\n    if (merged[i][0] > merged[i - 1][1])\n      gaps.push([merged[i - 1][1], merged[i][0]]);\n  }\n  return gaps;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Sweep with a frontier",
        approach: "Track the furthest covered point and emit a gap when the next start jumps past it.",
        js: "function intervalGaps(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const gaps = [];\n  let frontier = null;\n  for (const [s, e] of sorted) {\n    if (frontier !== null && s > frontier) gaps.push([frontier, s]);\n    frontier = frontier === null ? e : Math.max(frontier, e);\n  }\n  return gaps;\n}\n",
        ts: "function intervalGaps(intervals: number[][]): number[][] {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const gaps: number[][] = [];\n  let frontier: number | null = null;\n  for (const [s, e] of sorted) {\n    if (frontier !== null && s > frontier) gaps.push([frontier, s]);\n    frontier = frontier === null ? e : Math.max(frontier, e);\n  }\n  return gaps;\n}\n",
        commentedCode: {
          js: "function intervalGaps(intervals) {\n  // Sort a copy so coverage can be tracked from left to right.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const gaps = [];\n  // Frontier is the furthest covered endpoint, or null before the first interval.\n  let frontier = null;\n  for (const [s, e] of sorted) {\n    // A start beyond existing coverage exposes an empty stretch.\n    if (frontier !== null && s > frontier) gaps.push([frontier, s]);\n    // Extend coverage; contained intervals cannot move the frontier backward.\n    frontier = frontier === null ? e : Math.max(frontier, e);\n  }\n  return gaps;\n}\n",
          ts: "function intervalGaps(intervals: number[][]): number[][] {\n  // Sort a copy so coverage can be tracked from left to right.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const gaps: number[][] = [];\n  // Frontier is the furthest covered endpoint, or null before the first interval.\n  let frontier: number | null = null;\n  for (const [s, e] of sorted) {\n    // A start beyond existing coverage exposes an empty stretch.\n    if (frontier !== null && s > frontier) gaps.push([frontier, s]);\n    // Extend coverage; contained intervals cannot move the frontier backward.\n    frontier = frontier === null ? e : Math.max(frontier, e);\n  }\n  return gaps;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
];

export const mergeIntervalsProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const mergeIntervalsMcqs: QuizQuestion[] = [
  {
    id: "s5-mi-sort",
    kind: "mcq",
    prompt: "The first step in almost every interval problem is to:",
    options: [
      "sort the intervals by start time",
      "reverse the list",
      "hash the endpoints",
      "binary search for the median",
    ],
    answerIndex: 0,
    explanation: "Sorting by start makes overlapping intervals adjacent, which is what the sweep relies on.",
  },
  {
    id: "s5-mi-time",
    kind: "mcq",
    prompt: "Merging n intervals costs O(n) for the sweep — what dominates the overall running time?",
    options: ["O(n) — nothing else matters", "O(n log n) from the sort", "O(n²)", "O(log n)"],
    answerIndex: 1,
    explanation: "The sort dominates, giving O(n log n) overall.",
  },
];

export const mergeIntervalsModule: Module = {
  id: "m-pat-merge-intervals",
  stageId: S,
  title: "Merge Intervals",
  kind: "patternModule",
  summary: "Sort by start, then sweep — merging, inserting, scheduling, and counting overlaps.",
  lessonSections: [
    {
      heading: "Sort, then sweep",
      body: `Nearly every interval problem starts the same way: **sort by start time**. Once sorted, anything that overlaps is *adjacent*, so a single left-to-right pass can merge, count, or detect conflicts.

\`\`\`js
function merge(intervals) {
  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const out = [];
  for (const [start, end] of sorted) {
    const last = out[out.length - 1];
    if (last && start <= last[1]) last[1] = Math.max(last[1], end); // extend
    else out.push([start, end]);                                    // new run
  }
  return out;
}
console.log(merge([[1,3],[2,6],[8,10]])); // [[1,6],[8,10]]
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for this pattern when the input is a set of ranges — times, bookings, segments — and the question involves:

- **merging** overlaps or **inserting** a new range,
- **conflicts**: "can one person attend all meetings?",
- **capacity**: the maximum number of ranges active at once (meeting rooms),
- **intersections** of two range lists, **total covered** length, or the **gaps** between ranges.

For capacity questions, the trick is different: split each interval into a **+1 start event and a −1 end event**, sort the events, and take the running maximum.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Overlap test
const overlaps = (a: number[], b: number[]) => a[0] <= b[1] && b[0] <= a[1];

// Max concurrent (meeting rooms) via two sorted arrays
const starts = intervals.map((i) => i[0]).sort((x, y) => x - y);
const ends   = intervals.map((i) => i[1]).sort((x, y) => x - y);
let rooms = 0, best = 0, e = 0;
for (let s = 0; s < starts.length; s++) {
  while (e < ends.length && ends[e] <= starts[s]) { rooms--; e++; }
  rooms++; best = Math.max(best, rooms);
}
\`\`\`

**Pitfalls:** decide whether **touching** endpoints count as overlapping — merging usually says yes (\`<=\`), scheduling usually says no (\`<\`) — and be consistent; sorting by **end** instead of start quietly breaks the merge sweep; when removing covered intervals you must sort by start ascending **and end descending**; mutating the caller's arrays instead of copying. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "mi-merge",
  drillProblemIds: [
    "mi-is-overlapping",
    "mi-count-overlapping",
    "mi-merge",
    "mi-insert",
    "mi-can-attend",
    "mi-min-rooms",
  ],
  testPoolProblemIds: ["mi-intersection", "mi-total-length", "mi-remove-covered", "mi-gaps"],
  complexityQuestionIds: ["s5-mi-sort", "s5-mi-time"],
  badgeId: "badge-pat-merge-intervals",
  prerequisiteModuleIds: [],
};
