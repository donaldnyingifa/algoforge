import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";
import { MIN_HEAP_SOURCE, MAX_HEAP_SOURCE } from "@/data/shared/heap";

const S = "dsa-s5";
const P = ["two-heaps"];

/** Both heap classes, for the balanced max-heap / min-heap median technique. */
const BOTH_HEAPS = `${MAX_HEAP_SOURCE}\n${MIN_HEAP_SOURCE}`;

const MEDIAN_NOTE =
  "The median of an even-length list is the average of its two middle values.";

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "th-median-of-list",
    slug: "median-of-list",
    title: "Median of a List",
    difficulty: "easy",
    patternIds: P,
    statement: `Return the median of the values. ${MEDIAN_NOTE} An empty list has median 0.`,
    examples: [
      { input: "[3,1,2]", output: "2" },
      { input: "[1,2,3,4]", output: "2.5" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "medianOfList",
    starter: {
      js: "function medianOfList(nums) {\n  // Median; average the two middles when even.\n}\n",
      ts: "function medianOfList(nums: number[]): number {\n  // Median; average the two middles when even.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[3, 1, 2]], expected: 2 },
      { args: [[1, 2, 3, 4]], expected: 2.5 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[1]], expected: 1 },
      { args: [[1, 2]], expected: 1.5 },
      { args: [[5, 5]], expected: 5 },
      { args: [[1, 2, 3, 4, 5]], expected: 3 },
      { args: [[-1, 1]], expected: 0 },
      { args: [[2, 2, 2, 2]], expected: 2 },
    ],
    hints: [
      "Sort the values, then look at the middle.",
      "For an even count, average the two central values.",
      "Guard the empty list before indexing.",
    ],
    solutions: [
      {
        label: "Sort and take the middle",
        approach: "Order the values and read the centre.",
        js: "function medianOfList(nums) {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  return a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n}\n",
        ts: "function medianOfList(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  return a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n}\n",
        commentedCode: {
          js: "function medianOfList(nums) {\n  // Handle the empty input before trying to read a middle position.\n  if (nums.length === 0) return 0;\n\n  // Sort a copy so the caller's array stays unchanged and the middle values are ordered.\n  const a = [...nums].sort((x, y) => x - y);\n  // Floor selects the single middle for odd lengths and the upper middle for even lengths.\n  const mid = Math.floor(a.length / 2);\n  // Odd lists use one middle value; even lists average the two central values.\n  return a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n}\n",
          ts: "function medianOfList(nums: number[]): number {\n  // Handle the empty input before trying to read a middle position.\n  if (nums.length === 0) return 0;\n\n  // Sort a copy so the caller's array stays unchanged and the middle values are ordered.\n  const a = [...nums].sort((x, y) => x - y);\n  // Floor selects the single middle for odd lengths and the upper middle for even lengths.\n  const mid = Math.floor(a.length / 2);\n  // Odd lists use one middle value; even lists average the two central values.\n  return a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Two balanced heaps",
        approach: "A max-heap holds the smaller half, a min-heap the larger; the median sits at their tops.",
        js: `${BOTH_HEAPS}\nfunction medianOfList(nums) {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  if (lo.size() === 0) return 0;\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
        ts: `${BOTH_HEAPS}\nfunction medianOfList(nums: number[]): number {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  if (lo.size() === 0) return 0;\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
        commentedCode: {
          js: `${BOTH_HEAPS}\nfunction medianOfList(nums) {\n  // The max-heap exposes the largest value in the lower half.\n  const lo = new MaxHeap();\n  // The min-heap exposes the smallest value in the upper half.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Route each value to the half whose ordering it belongs to.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Rebalance so the lower half has either the same size or one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // No lower-half root means no values were inserted.\n  if (lo.size() === 0) return 0;\n  // An odd count uses lo's root; an even count averages both boundary roots.\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
          ts: `${BOTH_HEAPS}\nfunction medianOfList(nums: number[]): number {\n  // The max-heap exposes the largest value in the lower half.\n  const lo = new MaxHeap();\n  // The min-heap exposes the smallest value in the upper half.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Route each value to the half whose ordering it belongs to.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Rebalance so the lower half has either the same size or one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // No lower-half root means no values were inserted.\n  if (lo.size() === 0) return 0;\n  // An odd count uses lo's root; an even count averages both boundary roots.\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "th-lower-half-max",
    slug: "lower-half-max",
    title: "Largest of the Lower Half",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Sort the values and split them so the lower half holds the first `ceil(n/2)` of them. Return the largest value in that lower half, or -1 if the list is empty.",
    examples: [
      { input: "[3,1,2]", output: "2" },
      { input: "[1,2,3,4]", output: "2" },
      { input: "[]", output: "-1" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "lowerHalfMax",
    starter: {
      js: "function lowerHalfMax(nums) {\n  // Largest value in the lower half.\n}\n",
      ts: "function lowerHalfMax(nums: number[]): number {\n  // Largest value in the lower half.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[3, 1, 2]], expected: 2 },
      { args: [[1, 2, 3, 4]], expected: 2 },
      { args: [[]], expected: -1 },
    ],
    hidden: [
      { args: [[1]], expected: 1 },
      { args: [[5, 5]], expected: 5 },
      { args: [[1, 2, 3, 4, 5]], expected: 3 },
      { args: [[-5, 1]], expected: -5 },
      { args: [[10, 20, 30]], expected: 20 },
      { args: [[4, 3, 2, 1]], expected: 2 },
    ],
    hints: [
      "The lower half has ceil(n/2) values, so its largest sits at index ceil(n/2) - 1.",
      "This is exactly what the max-heap side of the two-heaps technique holds at its root.",
      "Handle the empty list before indexing.",
    ],
    solutions: [
      {
        label: "Sort and index",
        approach: "Read the last position of the lower half.",
        js: "function lowerHalfMax(nums) {\n  if (nums.length === 0) return -1;\n  const a = [...nums].sort((x, y) => x - y);\n  return a[Math.ceil(a.length / 2) - 1];\n}\n",
        ts: "function lowerHalfMax(nums: number[]): number {\n  if (nums.length === 0) return -1;\n  const a = [...nums].sort((x, y) => x - y);\n  return a[Math.ceil(a.length / 2) - 1];\n}\n",
        commentedCode: {
          js: "function lowerHalfMax(nums) {\n  // An empty list has no lower-half maximum.\n  if (nums.length === 0) return -1;\n  // Sorting a copy groups the first ceil(n / 2) values into the lower half.\n  const a = [...nums].sort((x, y) => x - y);\n  // The lower half ends one position before its length.\n  return a[Math.ceil(a.length / 2) - 1];\n}\n",
          ts: "function lowerHalfMax(nums: number[]): number {\n  // An empty list has no lower-half maximum.\n  if (nums.length === 0) return -1;\n  // Sorting a copy groups the first ceil(n / 2) values into the lower half.\n  const a = [...nums].sort((x, y) => x - y);\n  // The lower half ends one position before its length.\n  return a[Math.ceil(a.length / 2) - 1];\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Balanced heaps",
        approach: "Keep the halves balanced; the max-heap's root is the answer.",
        js: `${BOTH_HEAPS}\nfunction lowerHalfMax(nums) {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  return lo.size() === 0 ? -1 : lo.peek();\n}\n`,
        ts: `${BOTH_HEAPS}\nfunction lowerHalfMax(nums: number[]): number {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  return lo.size() === 0 ? -1 : lo.peek();\n}\n`,
        commentedCode: {
          js: `${BOTH_HEAPS}\nfunction lowerHalfMax(nums) {\n  // lo keeps the smaller ceil(n / 2) values and exposes their maximum.\n  const lo = new MaxHeap();\n  // hi keeps the remaining larger values and exposes their minimum.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Compare with lo's boundary to choose the correct ordered half.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Move one root when needed so lo has at most one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // The max-heap root is the largest lower-half value, if one exists.\n  return lo.size() === 0 ? -1 : lo.peek();\n}\n`,
          ts: `${BOTH_HEAPS}\nfunction lowerHalfMax(nums: number[]): number {\n  // lo keeps the smaller ceil(n / 2) values and exposes their maximum.\n  const lo = new MaxHeap();\n  // hi keeps the remaining larger values and exposes their minimum.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Compare with lo's boundary to choose the correct ordered half.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Move one root when needed so lo has at most one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // The max-heap root is the largest lower-half value, if one exists.\n  return lo.size() === 0 ? -1 : lo.peek();\n}\n`,
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "th-running-medians",
    slug: "running-medians",
    title: "Running Medians",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the median after each value is added, in order. ${MEDIAN_NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[1,1.5,2]" },
      { input: "[5]", output: "[5]" },
      { input: "[]", output: "[]" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "runningMedians",
    starter: {
      js: "function runningMedians(nums) {\n  // Median after each insertion.\n}\n",
      ts: "function runningMedians(nums: number[]): number[] {\n  // Median after each insertion.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [1, 1.5, 2] },
      { args: [[5]], expected: [5] },
      { args: [[]], expected: [] },
    ],
    hidden: [
      { args: [[1, 2]], expected: [1, 1.5] },
      { args: [[2, 1]], expected: [2, 1.5] },
      { args: [[1, 2, 3, 4]], expected: [1, 1.5, 2, 2.5] },
      { args: [[3, 1, 2]], expected: [3, 2, 2] },
      { args: [[5, 5, 5]], expected: [5, 5, 5] },
      { args: [[1, 3, 2, 4]], expected: [1, 2, 2, 2.5] },
    ],
    hints: [
      "Re-sorting after every insertion works but repeats a lot of effort.",
      "Keep the smaller half in a max-heap and the larger half in a min-heap.",
      "Rebalance so the sizes differ by at most one, then read the median off the roots.",
    ],
    solutions: [
      {
        label: "Two balanced heaps",
        approach: "Insert into the correct half, rebalance, then read the median in O(1).",
        js: `${BOTH_HEAPS}\nfunction runningMedians(nums) {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  const out = [];\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n    out.push(lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2);\n  }\n  return out;\n}\n`,
        ts: `${BOTH_HEAPS}\nfunction runningMedians(nums: number[]): number[] {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  const out: number[] = [];\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n    out.push(lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2);\n  }\n  return out;\n}\n`,
        commentedCode: {
          js: `${BOTH_HEAPS}\nfunction runningMedians(nums) {\n  // lo holds the smaller half; its maximum is the lower median boundary.\n  const lo = new MaxHeap();\n  // hi holds the larger half; its minimum is the upper median boundary.\n  const hi = new MinHeap();\n  // Record the median after every prefix of the stream.\n  const out = [];\n  for (const v of nums) {\n    // Place the new value on the correct side of the current boundary.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Restore the invariant that lo has the same size as hi or one extra item.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n    // Read one root for odd prefixes, or average both roots for even prefixes.\n    out.push(lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2);\n  }\n  return out;\n}\n`,
          ts: `${BOTH_HEAPS}\nfunction runningMedians(nums: number[]): number[] {\n  // lo holds the smaller half; its maximum is the lower median boundary.\n  const lo = new MaxHeap();\n  // hi holds the larger half; its minimum is the upper median boundary.\n  const hi = new MinHeap();\n  // Record the median after every prefix of the stream.\n  const out: number[] = [];\n  for (const v of nums) {\n    // Place the new value on the correct side of the current boundary.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Restore the invariant that lo has the same size as hi or one extra item.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n    // Read one root for odd prefixes, or average both roots for even prefixes.\n    out.push(lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2);\n  }\n  return out;\n}\n`,
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Insert into a sorted list",
        approach: "Keep the seen values sorted and read the middle each step.",
        js: "function runningMedians(nums) {\n  const sorted = [];\n  const out = [];\n  for (const v of nums) {\n    let lo = 0, hi = sorted.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }\n    sorted.splice(lo, 0, v);\n    const mid = Math.floor(sorted.length / 2);\n    out.push(sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2);\n  }\n  return out;\n}\n",
        ts: "function runningMedians(nums: number[]): number[] {\n  const sorted: number[] = [];\n  const out: number[] = [];\n  for (const v of nums) {\n    let lo = 0, hi = sorted.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }\n    sorted.splice(lo, 0, v);\n    const mid = Math.floor(sorted.length / 2);\n    out.push(sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function runningMedians(nums) {\n  // Keep every value seen so far in ascending order.\n  const sorted = [];\n  // Collect one median for each input prefix.\n  const out = [];\n  for (const v of nums) {\n    // Binary-search for the first position whose value is at least v.\n    let lo = 0, hi = sorted.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }\n    // Insert at that position to preserve sorted order.\n    sorted.splice(lo, 0, v);\n    // Locate the upper middle in the updated prefix.\n    const mid = Math.floor(sorted.length / 2);\n    // Read one middle for odd sizes or average the two middles for even sizes.\n    out.push(sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2);\n  }\n  return out;\n}\n",
          ts: "function runningMedians(nums: number[]): number[] {\n  // Keep every value seen so far in ascending order.\n  const sorted: number[] = [];\n  // Collect one median for each input prefix.\n  const out: number[] = [];\n  for (const v of nums) {\n    // Binary-search for the first position whose value is at least v.\n    let lo = 0, hi = sorted.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }\n    // Insert at that position to preserve sorted order.\n    sorted.splice(lo, 0, v);\n    // Locate the upper middle in the updated prefix.\n    const mid = Math.floor(sorted.length / 2);\n    // Read one middle for odd sizes or average the two middles for even sizes.\n    out.push(sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2);\n  }\n  return out;\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "th-maximize-capital",
    slug: "maximize-capital",
    title: "Maximize Capital",
    difficulty: "medium",
    patternIds: P,
    statement:
      "You start with `initialCapital` and may complete at most `k` projects. Project `i` requires `capitals[i]` on hand and adds `profits[i]` when finished. Always take the most profitable project you can currently afford. Return the final capital.",
    examples: [
      { input: "2, 0, [1,2,3], [0,1,1]", output: "4" },
      { input: "3, 0, [1,2,3], [0,1,2]", output: "6" },
      { input: "1, 0, [1,2,3], [1,1,2]", output: "0" },
    ],
    constraints: ["profits and capitals have the same length", "0 <= k"],
    functionName: "maximizeCapital",
    starter: {
      js: "function maximizeCapital(k, initialCapital, profits, capitals) {\n  // Greedily take the most profitable affordable project, k times.\n}\n",
      ts: "function maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]): number {\n  // Greedily take the most profitable affordable project, k times.\n  return initialCapital;\n}\n",
    },
    visible: [
      { args: [2, 0, [1, 2, 3], [0, 1, 1]], expected: 4 },
      { args: [3, 0, [1, 2, 3], [0, 1, 2]], expected: 6 },
      { args: [1, 0, [1, 2, 3], [1, 1, 2]], expected: 0 },
    ],
    hidden: [
      { args: [0, 5, [1, 2], [0, 0]], expected: 5 },
      { args: [1, 0, [5], [0]], expected: 5 },
      { args: [2, 1, [1, 1], [1, 1]], expected: 3 },
      { args: [5, 0, [1, 2, 3], [0, 1, 2]], expected: 6 },
      { args: [1, 2, [10, 1], [3, 0]], expected: 3 },
      { args: [2, 0, [3], [0]], expected: 3 },
    ],
    hints: [
      "Sort the projects by the capital they require, so you can unlock them in order.",
      "Every time your capital grows, push the newly affordable profits into a max-heap.",
      "Take the heap's largest profit; stop early if nothing is affordable.",
    ],
    solutions: [
      {
        label: "Sort by capital + max-heap of profits",
        approach: "Unlock affordable projects as capital grows and always take the best.",
        js: `${MAX_HEAP_SOURCE}\nfunction maximizeCapital(k, initialCapital, profits, capitals) {\n  const projects = profits.map((p, i) => [capitals[i], p]).sort((a, b) => a[0] - b[0]);\n  const available = new MaxHeap();\n  let capital = initialCapital;\n  let i = 0;\n  for (let round = 0; round < k; round++) {\n    while (i < projects.length && projects[i][0] <= capital) { available.push(projects[i][1]); i++; }\n    if (available.size() === 0) break;\n    capital += available.pop();\n  }\n  return capital;\n}\n`,
        ts: `${MAX_HEAP_SOURCE}\nfunction maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]): number {\n  const projects = profits.map((p, i) => [capitals[i], p]).sort((a, b) => a[0] - b[0]);\n  const available = new MaxHeap();\n  let capital = initialCapital;\n  let i = 0;\n  for (let round = 0; round < k; round++) {\n    while (i < projects.length && projects[i][0] <= capital) { available.push(projects[i][1]); i++; }\n    if (available.size() === 0) break;\n    capital += available.pop();\n  }\n  return capital;\n}\n`,
        commentedCode: {
          js: `${MAX_HEAP_SOURCE}\nfunction maximizeCapital(k, initialCapital, profits, capitals) {\n  // Pair each project's requirement with its profit, then order by requirement.\n  const projects = profits.map((p, i) => [capitals[i], p]).sort((a, b) => a[0] - b[0]);\n  // Store profits from every project the current capital can afford.\n  const available = new MaxHeap();\n  // Track the capital gained across completed projects.\n  let capital = initialCapital;\n  // Point to the first project not yet unlocked by capital.\n  let i = 0;\n  for (let round = 0; round < k; round++) {\n    // Newly affordable projects become candidates for this and later rounds.\n    while (i < projects.length && projects[i][0] <= capital) { available.push(projects[i][1]); i++; }\n    // Stop if no remaining project can currently be started.\n    if (available.size() === 0) break;\n    // Greedily complete the affordable project with the greatest profit.\n    capital += available.pop();\n  }\n  return capital;\n}\n`,
          ts: `${MAX_HEAP_SOURCE}\nfunction maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]): number {\n  // Pair each project's requirement with its profit, then order by requirement.\n  const projects = profits.map((p, i) => [capitals[i], p]).sort((a, b) => a[0] - b[0]);\n  // Store profits from every project the current capital can afford.\n  const available = new MaxHeap();\n  // Track the capital gained across completed projects.\n  let capital = initialCapital;\n  // Point to the first project not yet unlocked by capital.\n  let i = 0;\n  for (let round = 0; round < k; round++) {\n    // Newly affordable projects become candidates for this and later rounds.\n    while (i < projects.length && projects[i][0] <= capital) { available.push(projects[i][1]); i++; }\n    // Stop if no remaining project can currently be started.\n    if (available.size() === 0) break;\n    // Greedily complete the affordable project with the greatest profit.\n    capital += available.pop();\n  }\n  return capital;\n}\n`,
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Scan for the best each round",
        approach: "Each round, look through the untaken projects for the best affordable one.",
        js: "function maximizeCapital(k, initialCapital, profits, capitals) {\n  const taken = new Array(profits.length).fill(false);\n  let capital = initialCapital;\n  for (let round = 0; round < k; round++) {\n    let best = -1;\n    for (let i = 0; i < profits.length; i++) {\n      if (taken[i] || capitals[i] > capital) continue;\n      if (best === -1 || profits[i] > profits[best]) best = i;\n    }\n    if (best === -1) break;\n    taken[best] = true;\n    capital += profits[best];\n  }\n  return capital;\n}\n",
        ts: "function maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]): number {\n  const taken = new Array(profits.length).fill(false);\n  let capital = initialCapital;\n  for (let round = 0; round < k; round++) {\n    let best = -1;\n    for (let i = 0; i < profits.length; i++) {\n      if (taken[i] || capitals[i] > capital) continue;\n      if (best === -1 || profits[i] > profits[best]) best = i;\n    }\n    if (best === -1) break;\n    taken[best] = true;\n    capital += profits[best];\n  }\n  return capital;\n}\n",
        commentedCode: {
          js: "function maximizeCapital(k, initialCapital, profits, capitals) {\n  // Remember completed projects so none can be selected twice.\n  const taken = new Array(profits.length).fill(false);\n  let capital = initialCapital;\n  for (let round = 0; round < k; round++) {\n    // -1 means no affordable untaken project has been found this round.\n    let best = -1;\n    for (let i = 0; i < profits.length; i++) {\n      // Ignore completed projects and projects whose requirement is still too high.\n      if (taken[i] || capitals[i] > capital) continue;\n      // Retain the affordable candidate with the greatest profit.\n      if (best === -1 || profits[i] > profits[best]) best = i;\n    }\n    // Capital cannot grow when no project is affordable, so later rounds cannot help.\n    if (best === -1) break;\n    // Complete the chosen project once and add its profit to available capital.\n    taken[best] = true;\n    capital += profits[best];\n  }\n  return capital;\n}\n",
          ts: "function maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]): number {\n  // Remember completed projects so none can be selected twice.\n  const taken = new Array(profits.length).fill(false);\n  let capital = initialCapital;\n  for (let round = 0; round < k; round++) {\n    // -1 means no affordable untaken project has been found this round.\n    let best = -1;\n    for (let i = 0; i < profits.length; i++) {\n      // Ignore completed projects and projects whose requirement is still too high.\n      if (taken[i] || capitals[i] > capital) continue;\n      // Retain the affordable candidate with the greatest profit.\n      if (best === -1 || profits[i] > profits[best]) best = i;\n    }\n    // Capital cannot grow when no project is affordable, so later rounds cannot help.\n    if (best === -1) break;\n    // Complete the chosen project once and add its profit to available capital.\n    taken[best] = true;\n    capital += profits[best];\n  }\n  return capital;\n}\n",
        },
        time: "O(k·n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "th-sum-distance-to-median",
    slug: "min-moves-to-equal",
    title: "Minimum Moves to Equal",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each move changes one value by 1. Return the fewest moves needed to make every value equal. (The median is the cheapest meeting point.)",
    examples: [
      { input: "[1,2,3]", output: "2" },
      { input: "[1,10,2,9]", output: "16" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "minMovesToEqual",
    starter: {
      js: "function minMovesToEqual(nums) {\n  // Total distance to the median.\n}\n",
      ts: "function minMovesToEqual(nums: number[]): number {\n  // Total distance to the median.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: 2 },
      { args: [[1, 10, 2, 9]], expected: 16 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[1]], expected: 0 },
      { args: [[1, 1]], expected: 0 },
      { args: [[1, 2]], expected: 1 },
      { args: [[1, 2, 3, 4]], expected: 4 },
      { args: [[5, 5, 5]], expected: 0 },
      { args: [[1, 100]], expected: 99 },
    ],
    hints: [
      "Meeting at the median minimises the total distance — averages don't.",
      "Sort, pick a middle value, then total the absolute differences.",
      "For an even count, either middle value gives the same total.",
    ],
    solutions: [
      {
        label: "Sort to the median",
        approach: "Total the absolute distance from every value to the middle one.",
        js: "function minMovesToEqual(nums) {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const median = a[Math.floor(a.length / 2)];\n  let moves = 0;\n  for (const v of a) moves += Math.abs(v - median);\n  return moves;\n}\n",
        ts: "function minMovesToEqual(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const median = a[Math.floor(a.length / 2)];\n  let moves = 0;\n  for (const v of a) moves += Math.abs(v - median);\n  return moves;\n}\n",
        commentedCode: {
          js: "function minMovesToEqual(nums) {\n  // No values require no moves.\n  if (nums.length === 0) return 0;\n  // Sort a copy so a median meeting point can be selected without mutating nums.\n  const a = [...nums].sort((x, y) => x - y);\n  // A median minimizes the sum of absolute distances.\n  const median = a[Math.floor(a.length / 2)];\n  let moves = 0;\n  // Moving each value to the median costs exactly their absolute difference.\n  for (const v of a) moves += Math.abs(v - median);\n  return moves;\n}\n",
          ts: "function minMovesToEqual(nums: number[]): number {\n  // No values require no moves.\n  if (nums.length === 0) return 0;\n  // Sort a copy so a median meeting point can be selected without mutating nums.\n  const a = [...nums].sort((x, y) => x - y);\n  // A median minimizes the sum of absolute distances.\n  const median = a[Math.floor(a.length / 2)];\n  let moves = 0;\n  // Moving each value to the median costs exactly their absolute difference.\n  for (const v of a) moves += Math.abs(v - median);\n  return moves;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Pair the ends",
        approach: "Sorted, the cost is the sum of gaps between mirrored pairs.",
        js: "function minMovesToEqual(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  let moves = 0, i = 0, j = a.length - 1;\n  while (i < j) { moves += a[j] - a[i]; i++; j--; }\n  return moves;\n}\n",
        ts: "function minMovesToEqual(nums: number[]): number {\n  const a = [...nums].sort((x, y) => x - y);\n  let moves = 0, i = 0, j = a.length - 1;\n  while (i < j) { moves += a[j] - a[i]; i++; j--; }\n  return moves;\n}\n",
        commentedCode: {
          js: "function minMovesToEqual(nums) {\n  // Sorting lets us pair equally distant positions around a median.\n  const a = [...nums].sort((x, y) => x - y);\n  // Walk mirrored pairs from the two extremes toward the middle.\n  let moves = 0, i = 0, j = a.length - 1;\n  // Each pair contributes its full gap regardless of which median it meets at.\n  while (i < j) { moves += a[j] - a[i]; i++; j--; }\n  return moves;\n}\n",
          ts: "function minMovesToEqual(nums: number[]): number {\n  // Sorting lets us pair equally distant positions around a median.\n  const a = [...nums].sort((x, y) => x - y);\n  // Walk mirrored pairs from the two extremes toward the middle.\n  let moves = 0, i = 0, j = a.length - 1;\n  // Each pair contributes its full gap regardless of which median it meets at.\n  while (i < j) { moves += a[j] - a[i]; i++; j--; }\n  return moves;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "th-sliding-window-median",
    slug: "sliding-window-median",
    title: "Sliding Window Median",
    difficulty: "hard",
    patternIds: P,
    statement: `Return the median of every contiguous window of size \`k\`, left to right. ${MEDIAN_NOTE}`,
    examples: [
      { input: "[1,3,-1,-3,5,3,6,7], 3", output: "[1,-1,-1,3,5,6]" },
      { input: "[1,2,3,4], 2", output: "[1.5,2.5,3.5]" },
      { input: "[5], 1", output: "[5]" },
    ],
    constraints: ["1 <= k <= nums.length <= 10000"],
    functionName: "slidingWindowMedian",
    starter: {
      js: "function slidingWindowMedian(nums, k) {\n  // Median of each window of size k.\n}\n",
      ts: "function slidingWindowMedian(nums: number[], k: number): number[] {\n  // Median of each window of size k.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [1, -1, -1, 3, 5, 6] },
      { args: [[1, 2, 3, 4], 2], expected: [1.5, 2.5, 3.5] },
      { args: [[5], 1], expected: [5] },
    ],
    hidden: [
      { args: [[1, 2, 3], 1], expected: [1, 2, 3] },
      { args: [[1, 2, 3], 3], expected: [2] },
      { args: [[2, 2, 2], 2], expected: [2, 2] },
      { args: [[1, 4, 2, 3], 2], expected: [2.5, 3, 2.5] },
      { args: [[1], 1], expected: [1] },
      { args: [[4, 3, 2, 1], 4], expected: [2.5] },
    ],
    hints: [
      "Each window's median needs the window's values in order.",
      "Maintaining a sorted window as you slide avoids re-sorting from scratch.",
      "Insert the entering value in its sorted position and remove the leaving one.",
    ],
    solutions: [
      {
        label: "Maintain a sorted window",
        approach: "Binary-insert the entering value and remove the departing one.",
        js: "function slidingWindowMedian(nums, k) {\n  const window = [];\n  const out = [];\n  const insert = (v) => {\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    window.splice(lo, 0, v);\n  };\n  const remove = (v) => {\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    window.splice(lo, 1);\n  };\n  for (let i = 0; i < nums.length; i++) {\n    insert(nums[i]);\n    if (i >= k) remove(nums[i - k]);\n    if (i >= k - 1) {\n      const mid = Math.floor(window.length / 2);\n      out.push(window.length % 2 === 1 ? window[mid] : (window[mid - 1] + window[mid]) / 2);\n    }\n  }\n  return out;\n}\n",
        ts: "function slidingWindowMedian(nums: number[], k: number): number[] {\n  const window: number[] = [];\n  const out: number[] = [];\n  const insert = (v: number) => {\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    window.splice(lo, 0, v);\n  };\n  const remove = (v: number) => {\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    window.splice(lo, 1);\n  };\n  for (let i = 0; i < nums.length; i++) {\n    insert(nums[i]);\n    if (i >= k) remove(nums[i - k]);\n    if (i >= k - 1) {\n      const mid = Math.floor(window.length / 2);\n      out.push(window.length % 2 === 1 ? window[mid] : (window[mid - 1] + window[mid]) / 2);\n    }\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function slidingWindowMedian(nums, k) {\n  // Keep exactly the active window's values in ascending order.\n  const window = [];\n  const out = [];\n  const insert = (v) => {\n    // Find the first position whose value is at least v.\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    // Insert there so the window remains sorted.\n    window.splice(lo, 0, v);\n  };\n  const remove = (v) => {\n    // Find the first occurrence of the departing value.\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    // Delete one copy, which is important when duplicate values exist.\n    window.splice(lo, 1);\n  };\n  for (let i = 0; i < nums.length; i++) {\n    // Add the value entering at the right edge.\n    insert(nums[i]);\n    // Once more than k values have been seen, remove the old left edge.\n    if (i >= k) remove(nums[i - k]);\n    // Emit a median only after the first complete window has formed.\n    if (i >= k - 1) {\n      const mid = Math.floor(window.length / 2);\n      // Use one middle for odd k, or average the two middles for even k.\n      out.push(window.length % 2 === 1 ? window[mid] : (window[mid - 1] + window[mid]) / 2);\n    }\n  }\n  return out;\n}\n",
          ts: "function slidingWindowMedian(nums: number[], k: number): number[] {\n  // Keep exactly the active window's values in ascending order.\n  const window: number[] = [];\n  const out: number[] = [];\n  const insert = (v: number) => {\n    // Find the first position whose value is at least v.\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    // Insert there so the window remains sorted.\n    window.splice(lo, 0, v);\n  };\n  const remove = (v: number) => {\n    // Find the first occurrence of the departing value.\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    // Delete one copy, which is important when duplicate values exist.\n    window.splice(lo, 1);\n  };\n  for (let i = 0; i < nums.length; i++) {\n    // Add the value entering at the right edge.\n    insert(nums[i]);\n    // Once more than k values have been seen, remove the old left edge.\n    if (i >= k) remove(nums[i - k]);\n    // Emit a median only after the first complete window has formed.\n    if (i >= k - 1) {\n      const mid = Math.floor(window.length / 2);\n      // Use one middle for odd k, or average the two middles for even k.\n      out.push(window.length % 2 === 1 ? window[mid] : (window[mid - 1] + window[mid]) / 2);\n    }\n  }\n  return out;\n}\n",
        },
        time: "O(n·k)",
        space: "O(k)",
      },
      {
        label: "Sort each window",
        approach: "Take each window, sort a copy, and read its middle.",
        js: "function slidingWindowMedian(nums, k) {\n  const out = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    const w = nums.slice(i, i + k).sort((a, b) => a - b);\n    const mid = Math.floor(k / 2);\n    out.push(k % 2 === 1 ? w[mid] : (w[mid - 1] + w[mid]) / 2);\n  }\n  return out;\n}\n",
        ts: "function slidingWindowMedian(nums: number[], k: number): number[] {\n  const out: number[] = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    const w = nums.slice(i, i + k).sort((a, b) => a - b);\n    const mid = Math.floor(k / 2);\n    out.push(k % 2 === 1 ? w[mid] : (w[mid - 1] + w[mid]) / 2);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function slidingWindowMedian(nums, k) {\n  const out = [];\n  // Start at every index where a complete k-value window fits.\n  for (let i = 0; i + k <= nums.length; i++) {\n    // Copy and sort this window so its central values are directly accessible.\n    const w = nums.slice(i, i + k).sort((a, b) => a - b);\n    const mid = Math.floor(k / 2);\n    // Use one middle for odd k, or average the two central values for even k.\n    out.push(k % 2 === 1 ? w[mid] : (w[mid - 1] + w[mid]) / 2);\n  }\n  return out;\n}\n",
          ts: "function slidingWindowMedian(nums: number[], k: number): number[] {\n  const out: number[] = [];\n  // Start at every index where a complete k-value window fits.\n  for (let i = 0; i + k <= nums.length; i++) {\n    // Copy and sort this window so its central values are directly accessible.\n    const w = nums.slice(i, i + k).sort((a, b) => a - b);\n    const mid = Math.floor(k / 2);\n    // Use one middle for odd k, or average the two central values for even k.\n    out.push(k % 2 === 1 ? w[mid] : (w[mid - 1] + w[mid]) / 2);\n  }\n  return out;\n}\n",
        },
        time: "O(n·k log k)",
        space: "O(k)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "th-upper-half-min",
    slug: "upper-half-min",
    title: "Smallest of the Upper Half",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Sort the values and split them so the lower half holds the first `ceil(n/2)`. Return the smallest value in the remaining upper half, or -1 if that half is empty.",
    examples: [
      { input: "[1,2,3,4]", output: "3" },
      { input: "[3,1,2]", output: "3" },
      { input: "[]", output: "-1" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "upperHalfMin",
    starter: {
      js: "function upperHalfMin(nums) {\n  // Smallest value in the upper half.\n}\n",
      ts: "function upperHalfMin(nums: number[]): number {\n  // Smallest value in the upper half.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4]], expected: 3 },
      { args: [[3, 1, 2]], expected: 3 },
      { args: [[]], expected: -1 },
    ],
    hidden: [
      { args: [[1]], expected: -1 },
      { args: [[1, 2]], expected: 2 },
      { args: [[5, 5]], expected: 5 },
      { args: [[1, 2, 3, 4, 5]], expected: 4 },
      { args: [[10, 20, 30]], expected: 30 },
      { args: [[4, 3, 2, 1]], expected: 3 },
    ],
    hints: [
      "The upper half starts at index ceil(n/2).",
      "If that index is past the end, the upper half is empty.",
      "This mirrors the min-heap side of the two-heaps technique.",
    ],
    solutions: [
      {
        label: "Sort and index",
        approach: "Read the first position of the upper half.",
        js: "function upperHalfMin(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const start = Math.ceil(a.length / 2);\n  return start < a.length ? a[start] : -1;\n}\n",
        ts: "function upperHalfMin(nums: number[]): number {\n  const a = [...nums].sort((x, y) => x - y);\n  const start = Math.ceil(a.length / 2);\n  return start < a.length ? a[start] : -1;\n}\n",
        commentedCode: {
          js: "function upperHalfMin(nums) {\n  // Sort a copy so the two halves occupy contiguous index ranges.\n  const a = [...nums].sort((x, y) => x - y);\n  // The upper half begins after the first ceil(n / 2) lower values.\n  const start = Math.ceil(a.length / 2);\n  // Return its first (smallest) value, or -1 when that half is empty.\n  return start < a.length ? a[start] : -1;\n}\n",
          ts: "function upperHalfMin(nums: number[]): number {\n  // Sort a copy so the two halves occupy contiguous index ranges.\n  const a = [...nums].sort((x, y) => x - y);\n  // The upper half begins after the first ceil(n / 2) lower values.\n  const start = Math.ceil(a.length / 2);\n  // Return its first (smallest) value, or -1 when that half is empty.\n  return start < a.length ? a[start] : -1;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Balanced heaps",
        approach: "Keep the halves balanced; the min-heap's root is the answer.",
        js: `${BOTH_HEAPS}\nfunction upperHalfMin(nums) {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  return hi.size() === 0 ? -1 : hi.peek();\n}\n`,
        ts: `${BOTH_HEAPS}\nfunction upperHalfMin(nums: number[]): number {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  return hi.size() === 0 ? -1 : hi.peek();\n}\n`,
        commentedCode: {
          js: `${BOTH_HEAPS}\nfunction upperHalfMin(nums) {\n  // lo keeps the first ceil(n / 2) sorted values.\n  const lo = new MaxHeap();\n  // hi keeps the remaining upper-half values and exposes their minimum.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Route the value according to the boundary at lo's maximum.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Rebalance so lo has the same number as hi or one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // The min-heap root is the upper half's smallest value when that half exists.\n  return hi.size() === 0 ? -1 : hi.peek();\n}\n`,
          ts: `${BOTH_HEAPS}\nfunction upperHalfMin(nums: number[]): number {\n  // lo keeps the first ceil(n / 2) sorted values.\n  const lo = new MaxHeap();\n  // hi keeps the remaining upper-half values and exposes their minimum.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Route the value according to the boundary at lo's maximum.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Rebalance so lo has the same number as hi or one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // The min-heap root is the upper half's smallest value when that half exists.\n  return hi.size() === 0 ? -1 : hi.peek();\n}\n`,
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "th-median-of-two-lists",
    slug: "median-of-two-lists",
    title: "Median of Two Lists",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the median of all values from both lists combined. ${MEDIAN_NOTE} Two empty lists give 0.`,
    examples: [
      { input: "[1,3], [2]", output: "2" },
      { input: "[1,2], [3,4]", output: "2.5" },
      { input: "[], []", output: "0" },
    ],
    constraints: ["0 <= lengths <= 10000"],
    functionName: "medianOfTwoLists",
    starter: {
      js: "function medianOfTwoLists(a, b) {\n  // Median of the combined values.\n}\n",
      ts: "function medianOfTwoLists(a: number[], b: number[]): number {\n  // Median of the combined values.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 3], [2]], expected: 2 },
      { args: [[1, 2], [3, 4]], expected: 2.5 },
      { args: [[], []], expected: 0 },
    ],
    hidden: [
      { args: [[1], []], expected: 1 },
      { args: [[], [5]], expected: 5 },
      { args: [[1, 2], []], expected: 1.5 },
      { args: [[1, 1], [1, 1]], expected: 1 },
      { args: [[1, 5], [2, 6]], expected: 3.5 },
      { args: [[0], [0]], expected: 0 },
    ],
    hints: [
      "Combine both lists, then it's an ordinary median question.",
      "Sort the combined values and read the middle.",
      "Remember the even-length averaging rule.",
    ],
    solutions: [
      {
        label: "Combine and sort",
        approach: "Concatenate, sort, and take the median.",
        js: "function medianOfTwoLists(a, b) {\n  const all = [...a, ...b].sort((x, y) => x - y);\n  if (all.length === 0) return 0;\n  const mid = Math.floor(all.length / 2);\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
        ts: "function medianOfTwoLists(a: number[], b: number[]): number {\n  const all = [...a, ...b].sort((x, y) => x - y);\n  if (all.length === 0) return 0;\n  const mid = Math.floor(all.length / 2);\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
        commentedCode: {
          js: "function medianOfTwoLists(a, b) {\n  // Combine both inputs and sort their values as one population.\n  const all = [...a, ...b].sort((x, y) => x - y);\n  // Two empty inputs have the defined median 0.\n  if (all.length === 0) return 0;\n  // Floor locates the only middle or the upper of two middles.\n  const mid = Math.floor(all.length / 2);\n  // Odd counts use one value; even counts average adjacent middle values.\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
          ts: "function medianOfTwoLists(a: number[], b: number[]): number {\n  // Combine both inputs and sort their values as one population.\n  const all = [...a, ...b].sort((x, y) => x - y);\n  // Two empty inputs have the defined median 0.\n  if (all.length === 0) return 0;\n  // Floor locates the only middle or the upper of two middles.\n  const mid = Math.floor(all.length / 2);\n  // Odd counts use one value; even counts average adjacent middle values.\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Two balanced heaps",
        approach: "Feed both lists through the balanced-halves technique.",
        js: `${BOTH_HEAPS}\nfunction medianOfTwoLists(a, b) {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of [...a, ...b]) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  if (lo.size() === 0) return 0;\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
        ts: `${BOTH_HEAPS}\nfunction medianOfTwoLists(a: number[], b: number[]): number {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of [...a, ...b]) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  if (lo.size() === 0) return 0;\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
        commentedCode: {
          js: `${BOTH_HEAPS}\nfunction medianOfTwoLists(a, b) {\n  // lo exposes the greatest value in the combined lower half.\n  const lo = new MaxHeap();\n  // hi exposes the smallest value in the combined upper half.\n  const hi = new MinHeap();\n  // Feed values from both inputs through the same balanced-halves process.\n  for (const v of [...a, ...b]) {\n    // Place the value on the side selected by lo's current boundary.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Keep lo equal in size to hi or larger by exactly one.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // No lo root means both source lists were empty.\n  if (lo.size() === 0) return 0;\n  // Read lo for an odd total, or average both roots for an even total.\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
          ts: `${BOTH_HEAPS}\nfunction medianOfTwoLists(a: number[], b: number[]): number {\n  // lo exposes the greatest value in the combined lower half.\n  const lo = new MaxHeap();\n  // hi exposes the smallest value in the combined upper half.\n  const hi = new MinHeap();\n  // Feed values from both inputs through the same balanced-halves process.\n  for (const v of [...a, ...b]) {\n    // Place the value on the side selected by lo's current boundary.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Keep lo equal in size to hi or larger by exactly one.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // No lo root means both source lists were empty.\n  if (lo.size() === 0) return 0;\n  // Read lo for an odd total, or average both roots for an even total.\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "th-count-below-median",
    slug: "count-below-median",
    title: "Values Below the Median",
    difficulty: "medium",
    patternIds: P,
    statement: `Return how many values are strictly less than the median. ${MEDIAN_NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "1" },
      { input: "[1,2,3,4]", output: "2" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "countBelowMedian",
    starter: {
      js: "function countBelowMedian(nums) {\n  // How many values are strictly below the median.\n}\n",
      ts: "function countBelowMedian(nums: number[]): number {\n  // How many values are strictly below the median.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: 1 },
      { args: [[1, 2, 3, 4]], expected: 2 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[1]], expected: 0 },
      { args: [[1, 1]], expected: 0 },
      { args: [[5, 5, 5]], expected: 0 },
      { args: [[1, 2, 3, 4, 5]], expected: 2 },
      { args: [[1, 10]], expected: 1 },
      { args: [[2, 2, 3, 3]], expected: 2 },
    ],
    hints: [
      "Compute the median first — including the even-length average.",
      "Then count values strictly less than it.",
      "Ties with the median are not counted.",
    ],
    solutions: [
      {
        label: "Median then count",
        approach: "Find the median, then filter values below it.",
        js: "function countBelowMedian(nums) {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  return a.filter((v) => v < median).length;\n}\n",
        ts: "function countBelowMedian(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  return a.filter((v) => v < median).length;\n}\n",
        commentedCode: {
          js: "function countBelowMedian(nums) {\n  // Empty input has neither a median nor values below one.\n  if (nums.length === 0) return 0;\n  // Sort a copy to expose the central value or values.\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  // Apply the required odd/even median rule.\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  // Count only strict comparisons; values equal to the median do not qualify.\n  return a.filter((v) => v < median).length;\n}\n",
          ts: "function countBelowMedian(nums: number[]): number {\n  // Empty input has neither a median nor values below one.\n  if (nums.length === 0) return 0;\n  // Sort a copy to expose the central value or values.\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  // Apply the required odd/even median rule.\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  // Count only strict comparisons; values equal to the median do not qualify.\n  return a.filter((v) => v < median).length;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Count in a loop",
        approach: "Same median, tallied with an explicit loop.",
        js: "function countBelowMedian(nums) {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  let count = 0;\n  for (const v of a) if (v < median) count++;\n  return count;\n}\n",
        ts: "function countBelowMedian(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  let count = 0;\n  for (const v of a) if (v < median) count++;\n  return count;\n}\n",
        commentedCode: {
          js: "function countBelowMedian(nums) {\n  // Empty input contributes no values to the count.\n  if (nums.length === 0) return 0;\n  // Sort a copy so the middle positions define the median.\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  // Odd lengths use one middle; even lengths average two middles.\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  let count = 0;\n  // Tally each value that lies strictly below the computed median.\n  for (const v of a) if (v < median) count++;\n  return count;\n}\n",
          ts: "function countBelowMedian(nums: number[]): number {\n  // Empty input contributes no values to the count.\n  if (nums.length === 0) return 0;\n  // Sort a copy so the middle positions define the median.\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  // Odd lengths use one middle; even lengths average two middles.\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  let count = 0;\n  // Tally each value that lies strictly below the computed median.\n  for (const v of a) if (v < median) count++;\n  return count;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "th-half-sum-difference",
    slug: "half-sum-difference",
    title: "Difference Between the Halves",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Sort the values and split them so the lower half holds the first `ceil(n/2)`. Return the absolute difference between the sum of the upper half and the sum of the lower half.",
    examples: [
      { input: "[1,2,3,4]", output: "4" },
      { input: "[1,2,3]", output: "0" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "halfSumDifference",
    starter: {
      js: "function halfSumDifference(nums) {\n  // |sum(upper half) - sum(lower half)|.\n}\n",
      ts: "function halfSumDifference(nums: number[]): number {\n  // |sum(upper half) - sum(lower half)|.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4]], expected: 4 },
      { args: [[1, 2, 3]], expected: 0 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[1]], expected: 1 },
      { args: [[1, 1]], expected: 0 },
      { args: [[1, 2]], expected: 1 },
      { args: [[5, 5, 5, 5]], expected: 0 },
      { args: [[1, 2, 3, 4, 5]], expected: 3 },
      { args: [[10, 20]], expected: 10 },
    ],
    hints: [
      "Sort first, then split at index ceil(n/2).",
      "Sum each side and take the absolute difference.",
      "An odd count puts the extra value in the lower half.",
    ],
    solutions: [
      {
        label: "Sort and sum each side",
        approach: "Split at ceil(n/2) and compare the two totals.",
        js: "function halfSumDifference(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const split = Math.ceil(a.length / 2);\n  const sum = (arr) => arr.reduce((s, v) => s + v, 0);\n  return Math.abs(sum(a.slice(split)) - sum(a.slice(0, split)));\n}\n",
        ts: "function halfSumDifference(nums: number[]): number {\n  const a = [...nums].sort((x, y) => x - y);\n  const split = Math.ceil(a.length / 2);\n  const sum = (arr: number[]) => arr.reduce((s, v) => s + v, 0);\n  return Math.abs(sum(a.slice(split)) - sum(a.slice(0, split)));\n}\n",
        commentedCode: {
          js: "function halfSumDifference(nums) {\n  // Sort a copy so the lower and upper halves are contiguous.\n  const a = [...nums].sort((x, y) => x - y);\n  // Give the lower half the extra value when the length is odd.\n  const split = Math.ceil(a.length / 2);\n  // Reduce any selected half to its total.\n  const sum = (arr) => arr.reduce((s, v) => s + v, 0);\n  // Compare the upper total with the lower total without regard to sign.\n  return Math.abs(sum(a.slice(split)) - sum(a.slice(0, split)));\n}\n",
          ts: "function halfSumDifference(nums: number[]): number {\n  // Sort a copy so the lower and upper halves are contiguous.\n  const a = [...nums].sort((x, y) => x - y);\n  // Give the lower half the extra value when the length is odd.\n  const split = Math.ceil(a.length / 2);\n  // Reduce any selected half to its total.\n  const sum = (arr: number[]) => arr.reduce((s, v) => s + v, 0);\n  // Compare the upper total with the lower total without regard to sign.\n  return Math.abs(sum(a.slice(split)) - sum(a.slice(0, split)));\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Single pass after sorting",
        approach: "Accumulate each side while walking the sorted values.",
        js: "function halfSumDifference(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const split = Math.ceil(a.length / 2);\n  let lower = 0, upper = 0;\n  for (let i = 0; i < a.length; i++) {\n    if (i < split) lower += a[i]; else upper += a[i];\n  }\n  return Math.abs(upper - lower);\n}\n",
        ts: "function halfSumDifference(nums: number[]): number {\n  const a = [...nums].sort((x, y) => x - y);\n  const split = Math.ceil(a.length / 2);\n  let lower = 0, upper = 0;\n  for (let i = 0; i < a.length; i++) {\n    if (i < split) lower += a[i]; else upper += a[i];\n  }\n  return Math.abs(upper - lower);\n}\n",
        commentedCode: {
          js: "function halfSumDifference(nums) {\n  // Sorting makes every lower-half value precede every upper-half value.\n  const a = [...nums].sort((x, y) => x - y);\n  // The lower half receives ceil(n / 2) values.\n  const split = Math.ceil(a.length / 2);\n  let lower = 0, upper = 0;\n  // Accumulate each sorted value into the total for its side of the split.\n  for (let i = 0; i < a.length; i++) {\n    if (i < split) lower += a[i]; else upper += a[i];\n  }\n  // Return the magnitude of the difference between the two totals.\n  return Math.abs(upper - lower);\n}\n",
          ts: "function halfSumDifference(nums: number[]): number {\n  // Sorting makes every lower-half value precede every upper-half value.\n  const a = [...nums].sort((x, y) => x - y);\n  // The lower half receives ceil(n / 2) values.\n  const split = Math.ceil(a.length / 2);\n  let lower = 0, upper = 0;\n  // Accumulate each sorted value into the total for its side of the split.\n  for (let i = 0; i < a.length; i++) {\n    if (i < split) lower += a[i]; else upper += a[i];\n  }\n  // Return the magnitude of the difference between the two totals.\n  return Math.abs(upper - lower);\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
];

export const twoHeapsProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const twoHeapsMcqs: QuizQuestion[] = [
  {
    id: "s5-th-halves",
    kind: "mcq",
    prompt: "The two-heaps median technique maintains:",
    options: [
      "two min-heaps",
      "two max-heaps",
      "a max-heap for the smaller half and a min-heap for the larger half",
      "a heap plus a hash map",
    ],
    answerIndex: 2,
    explanation: "That way both middle values sit at the two roots, ready to read.",
  },
  {
    id: "s5-th-median-time",
    kind: "mcq",
    prompt: "With the two heaps kept balanced, reading the current median costs:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answerIndex: 0,
    explanation: "The median is at the root of one heap, or the average of both roots.",
  },
];

export const twoHeapsModule: Module = {
  id: "m-pat-two-heaps",
  stageId: S,
  title: "Two Heaps",
  kind: "patternModule",
  summary: "Split the data into a smaller half and a larger half — medians and greedy scheduling in O(log n) per step.",
  lessonSections: [
    {
      heading: "Two halves, two roots",
      body: `To know the **median** you don't need the whole list sorted — you only need the middle. Keep the smaller half in a **max-heap** (its root is the biggest of the small values) and the larger half in a **min-heap** (its root is the smallest of the large values). Keep the sizes within one of each other and the median is always sitting at one or both roots — **O(1)** to read, **O(log n)** to insert.

\`\`\`js
// insert, then rebalance
if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);
if (lo.size() > hi.size() + 1) hi.push(lo.pop());
else if (hi.size() > lo.size()) lo.push(hi.pop());

// median
const median = lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for two heaps when you need:

- the **median** of a growing stream, or of a sliding window,
- to keep track of the **middle** of a dataset while it changes,
- to split values into a cheaper half and a costlier half,
- **greedy scheduling** where one heap holds "not yet available" items ordered by when they unlock, and the other holds "available now" ordered by value — the maximise-capital drill below is exactly this shape.

The related insight: when you must move values to a common point, the **median** minimises total distance (the mean minimises squared distance).`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Greedy with an unlock queue + a value heap
projects.sort((a, b) => a.cost - b.cost);   // ordered by when they unlock
const available = new MaxHeap();            // best value among unlocked
let i = 0;
for (let round = 0; round < k; round++) {
  while (i < projects.length && projects[i].cost <= capital) available.push(projects[i++].profit);
  if (available.size() === 0) break;        // nothing affordable — stop
  capital += available.pop()!;
}
\`\`\`

**Pitfalls:** letting the heaps drift out of balance (rebalance after **every** insert, not occasionally); getting the direction backwards — the *smaller* half needs a **max**-heap; forgetting the even-length median is an **average**, not a middle element; and not handling the empty case before peeking at a root. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "th-median-of-list",
  drillProblemIds: [
    "th-median-of-list",
    "th-lower-half-max",
    "th-running-medians",
    "th-maximize-capital",
    "th-sum-distance-to-median",
    "th-sliding-window-median",
  ],
  testPoolProblemIds: [
    "th-upper-half-min",
    "th-median-of-two-lists",
    "th-count-below-median",
    "th-half-sum-difference",
  ],
  complexityQuestionIds: ["s5-th-halves", "s5-th-median-time"],
  badgeId: "badge-pat-two-heaps",
  prerequisiteModuleIds: ["m-pat-top-k"],
};
