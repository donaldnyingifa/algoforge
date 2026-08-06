import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";
import { MIN_HEAP_SOURCE, MAX_HEAP_SOURCE } from "@/data/shared/heap";

const S = "dsa-s5";
const P = ["k-way-merge"];

const LISTS_NOTE = "Each inner list is already sorted ascending.";

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "km-merge-two",
    slug: "k-way-merge-two",
    title: "Merge Two Sorted Lists",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Merge two ascending lists into one ascending list. This is the base case every k-way merge is built from.",
    examples: [
      { input: "[1,3], [2,4]", output: "[1,2,3,4]" },
      { input: "[], [1]", output: "[1]" },
      { input: "[1,2], []", output: "[1,2]" },
    ],
    constraints: ["both inputs are sorted ascending"],
    functionName: "mergeTwoLists",
    starter: {
      js: "function mergeTwoLists(a, b) {\n  // Merge two sorted lists.\n}\n",
      ts: "function mergeTwoLists(a: number[], b: number[]): number[] {\n  // Merge two sorted lists.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 3], [2, 4]], expected: [1, 2, 3, 4] },
      { args: [[], [1]], expected: [1] },
      { args: [[1, 2], []], expected: [1, 2] },
    ],
    hidden: [
      { args: [[], []], expected: [] },
      { args: [[1, 1], [1]], expected: [1, 1, 1] },
      { args: [[1, 5], [2, 3, 4]], expected: [1, 2, 3, 4, 5] },
      { args: [[-1, 0], [-2, 3]], expected: [-2, -1, 0, 3] },
      { args: [[5], [5]], expected: [5, 5] },
      { args: [[1, 2, 3], [0]], expected: [0, 1, 2, 3] },
    ],
    hints: [
      "Keep one pointer per list and always take the smaller head.",
      "When one list runs out, append the remainder of the other.",
      "This two-way merge generalises to k lists by choosing the smallest of k heads.",
    ],
    solutions: [
      {
        label: "Two-pointer merge",
        approach: "Repeatedly take the smaller of the two current heads.",
        js: "function mergeTwoLists(a, b) {\n  const out = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
        ts: "function mergeTwoLists(a: number[], b: number[]): number[] {\n  const out: number[] = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
        time: "O(n + m)",
        space: "O(n + m)",
      },
      {
        label: "Min-heap of all values",
        approach: "Push everything into a min-heap and drain it in order.",
        js: `${MIN_HEAP_SOURCE}\nfunction mergeTwoLists(a, b) {\n  const h = new MinHeap();\n  for (const v of a) h.push(v);\n  for (const v of b) h.push(v);\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction mergeTwoLists(a: number[], b: number[]): number[] {\n  const h = new MinHeap();\n  for (const v of a) h.push(v);\n  for (const v of b) h.push(v);\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
        time: "O((n+m) log (n+m))",
        space: "O(n + m)",
      },
    ],
  },
  {
    id: "km-smallest-across",
    slug: "smallest-across-lists",
    title: "Smallest Across the Lists",
    difficulty: "easy",
    patternIds: P,
    statement: `Return the smallest value found in any of the lists, or -1 if every list is empty.\n\n${LISTS_NOTE}`,
    examples: [
      { input: "[[1,4],[2,3],[5]]", output: "1" },
      { input: "[[],[]]", output: "-1" },
      { input: "[[7]]", output: "7" },
    ],
    constraints: ["0 <= number of lists <= 1000"],
    functionName: "smallestAcross",
    starter: {
      js: "function smallestAcross(lists) {\n  // Smallest value across all lists, or -1.\n}\n",
      ts: "function smallestAcross(lists: number[][]): number {\n  // Smallest value across all lists, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[[1, 4], [2, 3], [5]]], expected: 1 },
      { args: [[[], []]], expected: -1 },
      { args: [[[7]]], expected: 7 },
    ],
    hidden: [
      { args: [[]], expected: -1 },
      { args: [[[]]], expected: -1 },
      { args: [[[3], [1], [2]]], expected: 1 },
      { args: [[[0], [5]]], expected: 0 },
      { args: [[[10, 20], [5, 15]]], expected: 5 },
      { args: [[[2, 2], [2]]], expected: 2 },
    ],
    hints: [
      "Because each list is sorted, its smallest value is its first element.",
      "So you only need to compare the heads of the lists.",
      "Skip empty lists entirely.",
    ],
    solutions: [
      {
        label: "Compare the heads",
        approach: "Take the minimum of each non-empty list's first value.",
        js: "function smallestAcross(lists) {\n  let best = Infinity;\n  for (const list of lists) {\n    if (list.length > 0 && list[0] < best) best = list[0];\n  }\n  return best === Infinity ? -1 : best;\n}\n",
        ts: "function smallestAcross(lists: number[][]): number {\n  let best = Infinity;\n  for (const list of lists) {\n    if (list.length > 0 && list[0] < best) best = list[0];\n  }\n  return best === Infinity ? -1 : best;\n}\n",
        time: "O(k)",
        space: "O(1)",
      },
      {
        label: "Flatten and take the minimum",
        approach: "Combine every value and take the smallest.",
        js: "function smallestAcross(lists) {\n  const all = [].concat(...lists);\n  return all.length === 0 ? -1 : Math.min(...all);\n}\n",
        ts: "function smallestAcross(lists: number[][]): number {\n  const all = ([] as number[]).concat(...lists);\n  return all.length === 0 ? -1 : Math.min(...all);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "km-merge-k-lists",
    slug: "merge-k-sorted-lists",
    title: "Merge K Sorted Lists",
    difficulty: "medium",
    patternIds: P,
    statement: `Merge every list into a single ascending list.\n\n${LISTS_NOTE}`,
    examples: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
      { input: "[]", output: "[]" },
      { input: "[[]]", output: "[]" },
    ],
    constraints: ["0 <= number of lists <= 1000"],
    functionName: "mergeKLists",
    starter: {
      js: "function mergeKLists(lists) {\n  // Merge all sorted lists into one.\n}\n",
      ts: "function mergeKLists(lists: number[][]): number[] {\n  // Merge all sorted lists into one.\n  return [];\n}\n",
    },
    visible: [
      { args: [[[1, 4, 5], [1, 3, 4], [2, 6]]], expected: [1, 1, 2, 3, 4, 4, 5, 6] },
      { args: [[]], expected: [] },
      { args: [[[]]], expected: [] },
    ],
    hidden: [
      { args: [[[1], [2], [3]]], expected: [1, 2, 3] },
      { args: [[[3], [2], [1]]], expected: [1, 2, 3] },
      { args: [[[1, 2], [1, 2]]], expected: [1, 1, 2, 2] },
      { args: [[[], [1]]], expected: [1] },
      { args: [[[5, 10], [1], [7]]], expected: [1, 5, 7, 10] },
      { args: [[[1, 1, 1]]], expected: [1, 1, 1] },
    ],
    hints: [
      "The smallest unmerged value is always at the head of one of the lists.",
      "A min-heap gives you that smallest head in O(log k) instead of scanning all k.",
      "Keep one pointer per list and advance whichever list you just consumed from.",
    ],
    solutions: [
      {
        label: "Min-heap drain",
        approach: "Push every value into a min-heap, then pop them out in order.",
        js: `${MIN_HEAP_SOURCE}\nfunction mergeKLists(lists) {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction mergeKLists(lists: number[][]): number[] {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "K pointers",
        approach: "Track a pointer per list and repeatedly take the smallest head.",
        js: "function mergeKLists(lists) {\n  const idx = new Array(lists.length).fill(0);\n  const out = [];\n  for (;;) {\n    let best = -1;\n    for (let i = 0; i < lists.length; i++) {\n      if (idx[i] >= lists[i].length) continue;\n      if (best === -1 || lists[i][idx[i]] < lists[best][idx[best]]) best = i;\n    }\n    if (best === -1) break;\n    out.push(lists[best][idx[best]]);\n    idx[best]++;\n  }\n  return out;\n}\n",
        ts: "function mergeKLists(lists: number[][]): number[] {\n  const idx = new Array(lists.length).fill(0);\n  const out: number[] = [];\n  for (;;) {\n    let best = -1;\n    for (let i = 0; i < lists.length; i++) {\n      if (idx[i] >= lists[i].length) continue;\n      if (best === -1 || lists[i][idx[i]] < lists[best][idx[best]]) best = i;\n    }\n    if (best === -1) break;\n    out.push(lists[best][idx[best]]);\n    idx[best]++;\n  }\n  return out;\n}\n",
        time: "O(n·k)",
        space: "O(k)",
      },
    ],
  },
  {
    id: "km-kth-smallest-in-lists",
    slug: "kth-smallest-across-lists",
    title: "Kth Smallest Across Lists",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the k-th smallest value across all the lists (1-indexed, counting duplicates).\n\n${LISTS_NOTE}`,
    examples: [
      { input: "[[2,6,8],[3,6,7],[1,3,4]], 5", output: "4" },
      { input: "[[1]], 1", output: "1" },
      { input: "[[1,2],[3]], 3", output: "3" },
    ],
    constraints: ["1 <= k <= total number of values"],
    functionName: "kthSmallestInLists",
    starter: {
      js: "function kthSmallestInLists(lists, k) {\n  // The k-th smallest value overall.\n}\n",
      ts: "function kthSmallestInLists(lists: number[][], k: number): number {\n  // The k-th smallest value overall.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[2, 6, 8], [3, 6, 7], [1, 3, 4]], 5], expected: 4 },
      { args: [[[1]], 1], expected: 1 },
      { args: [[[1, 2], [3]], 3], expected: 3 },
    ],
    hidden: [
      { args: [[[1, 2, 3]], 2], expected: 2 },
      { args: [[[5], [1], [3]], 2], expected: 3 },
      { args: [[[1, 1], [1]], 3], expected: 1 },
      { args: [[[10, 20], [15]], 1], expected: 10 },
      { args: [[[1, 2], [3, 4]], 4], expected: 4 },
      { args: [[[7]], 1], expected: 7 },
    ],
    hints: [
      "You don't need the full merge — just the first k values of it.",
      "Pop the smallest k times from a min-heap of the values.",
      "Duplicates each take their own rank.",
    ],
    solutions: [
      {
        label: "Min-heap, pop k times",
        approach: "Only the first k merged values matter.",
        js: `${MIN_HEAP_SOURCE}\nfunction kthSmallestInLists(lists, k) {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction kthSmallestInLists(lists: number[][], k: number): number {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Flatten and sort",
        approach: "Combine every value, sort, and index k-1.",
        js: "function kthSmallestInLists(lists, k) {\n  const all = [].concat(...lists).sort((a, b) => a - b);\n  return all[k - 1];\n}\n",
        ts: "function kthSmallestInLists(lists: number[][], k: number): number {\n  const all = ([] as number[]).concat(...lists).sort((a, b) => a - b);\n  return all[k - 1];\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "km-kth-smallest-matrix",
    slug: "kth-smallest-in-matrix",
    title: "Kth Smallest in a Sorted Matrix",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Every row of the matrix is sorted ascending. Treat the rows as k sorted lists and return the k-th smallest value overall (1-indexed, counting duplicates).",
    examples: [
      { input: "[[1,5,9],[10,11,13],[12,13,15]], 8", output: "13" },
      { input: "[[1]], 1", output: "1" },
      { input: "[[1,2],[1,3]], 2", output: "1" },
    ],
    constraints: ["1 <= k <= total number of values"],
    functionName: "kthSmallestInMatrix",
    starter: {
      js: "function kthSmallestInMatrix(matrix, k) {\n  // The k-th smallest value in the matrix.\n}\n",
      ts: "function kthSmallestInMatrix(matrix: number[][], k: number): number {\n  // The k-th smallest value in the matrix.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8], expected: 13 },
      { args: [[[1]], 1], expected: 1 },
      { args: [[[1, 2], [1, 3]], 2], expected: 1 },
    ],
    hidden: [
      { args: [[[1, 2], [3, 4]], 3], expected: 3 },
      { args: [[[1, 2], [3, 4]], 4], expected: 4 },
      { args: [[[-5]], 1], expected: -5 },
      { args: [[[1, 3], [2, 4]], 2], expected: 2 },
      { args: [[[1, 1], [1, 1]], 4], expected: 1 },
      { args: [[[2, 6], [3, 7]], 3], expected: 6 },
    ],
    hints: [
      "Each row is a sorted list — this is the k-way merge in disguise.",
      "Merge conceptually and stop after k values.",
      "A min-heap seeded with the row heads works, as does flattening and sorting.",
    ],
    solutions: [
      {
        label: "Min-heap, pop k times",
        approach: "Treat the rows as lists and take the k smallest merged values.",
        js: `${MIN_HEAP_SOURCE}\nfunction kthSmallestInMatrix(matrix, k) {\n  const h = new MinHeap();\n  for (const row of matrix) for (const v of row) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction kthSmallestInMatrix(matrix: number[][], k: number): number {\n  const h = new MinHeap();\n  for (const row of matrix) for (const v of row) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Flatten and sort",
        approach: "Collect every cell, sort, and index k-1.",
        js: "function kthSmallestInMatrix(matrix, k) {\n  const all = [].concat(...matrix).sort((a, b) => a - b);\n  return all[k - 1];\n}\n",
        ts: "function kthSmallestInMatrix(matrix: number[][], k: number): number {\n  const all = ([] as number[]).concat(...matrix).sort((a, b) => a - b);\n  return all[k - 1];\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "km-smallest-range",
    slug: "smallest-range-covering-lists",
    title: "Smallest Range Covering All Lists",
    difficulty: "hard",
    patternIds: P,
    statement: `Find the smallest range \`[start, end]\` that contains at least one value from **every** list. If several ranges tie on width, return the one with the smaller start. Return \`[]\` when there are no values at all.\n\n${LISTS_NOTE}`,
    examples: [
      { input: "[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]", output: "[20,24]" },
      { input: "[[1],[2],[3]]", output: "[1,3]" },
      { input: "[[1,2,3]]", output: "[1,1]" },
    ],
    constraints: ["every list has at least one value"],
    functionName: "smallestRange",
    starter: {
      js: "function smallestRange(lists) {\n  // Narrowest [start, end] hitting every list.\n}\n",
      ts: "function smallestRange(lists: number[][]): number[] {\n  // Narrowest [start, end] hitting every list.\n  return [];\n}\n",
    },
    visible: [
      { args: [[[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]], expected: [20, 24] },
      { args: [[[1], [2], [3]]], expected: [1, 3] },
      { args: [[[1, 2, 3]]], expected: [1, 1] },
    ],
    hidden: [
      { args: [[[5]]], expected: [5, 5] },
      { args: [[[1, 2], [2, 3]]], expected: [2, 2] },
      { args: [[[1], [1]]], expected: [1, 1] },
      { args: [[[1, 3], [2]]], expected: [1, 2] },
      { args: [[[1, 5], [4, 6]]], expected: [4, 5] },
      { args: [[[10], [20], [30]]], expected: [10, 30] },
    ],
    hints: [
      "Tag every value with the list it came from, then sort all of them together.",
      "Slide a window over that sorted sequence until it covers every list id.",
      "Shrink from the left while the window still covers everything, recording the best.",
    ],
    solutions: [
      {
        label: "Tag, sort, slide a window",
        approach: "A sliding window over all tagged values that must cover every list id.",
        js: "function smallestRange(lists) {\n  const items = [];\n  lists.forEach((list, i) => list.forEach((v) => items.push([v, i])));\n  if (items.length === 0) return [];\n  items.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  const need = lists.length;\n  const count = new Map();\n  let have = 0, left = 0;\n  let bestStart = items[0][0], bestEnd = items[items.length - 1][0];\n  for (let right = 0; right < items.length; right++) {\n    const li = items[right][1];\n    count.set(li, (count.get(li) || 0) + 1);\n    if (count.get(li) === 1) have++;\n    while (have === need) {\n      const start = items[left][0], end = items[right][0];\n      if (end - start < bestEnd - bestStart || (end - start === bestEnd - bestStart && start < bestStart)) {\n        bestStart = start; bestEnd = end;\n      }\n      const lo = items[left][1];\n      count.set(lo, count.get(lo) - 1);\n      if (count.get(lo) === 0) have--;\n      left++;\n    }\n  }\n  return [bestStart, bestEnd];\n}\n",
        ts: "function smallestRange(lists: number[][]): number[] {\n  const items: number[][] = [];\n  lists.forEach((list, i) => list.forEach((v) => items.push([v, i])));\n  if (items.length === 0) return [];\n  items.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  const need = lists.length;\n  const count = new Map<number, number>();\n  let have = 0, left = 0;\n  let bestStart = items[0][0], bestEnd = items[items.length - 1][0];\n  for (let right = 0; right < items.length; right++) {\n    const li = items[right][1];\n    count.set(li, (count.get(li) || 0) + 1);\n    if (count.get(li) === 1) have++;\n    while (have === need) {\n      const start = items[left][0], end = items[right][0];\n      if (end - start < bestEnd - bestStart || (end - start === bestEnd - bestStart && start < bestStart)) {\n        bestStart = start; bestEnd = end;\n      }\n      const lo = items[left][1];\n      count.set(lo, (count.get(lo) as number) - 1);\n      if (count.get(lo) === 0) have--;\n      left++;\n    }\n  }\n  return [bestStart, bestEnd];\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Try each start",
        approach: "For every tagged value, extend rightward until all lists are covered.",
        js: "function smallestRange(lists) {\n  const all = [];\n  lists.forEach((l, i) => l.forEach((v) => all.push([v, i])));\n  if (all.length === 0) return [];\n  all.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  const need = lists.length;\n  let best = null;\n  for (let i = 0; i < all.length; i++) {\n    const seen = new Set();\n    for (let j = i; j < all.length; j++) {\n      seen.add(all[j][1]);\n      if (seen.size === need) {\n        const start = all[i][0], end = all[j][0];\n        if (!best || end - start < best[1] - best[0]) best = [start, end];\n        break;\n      }\n    }\n  }\n  return best ? best : [];\n}\n",
        ts: "function smallestRange(lists: number[][]): number[] {\n  const all: number[][] = [];\n  lists.forEach((l, i) => l.forEach((v) => all.push([v, i])));\n  if (all.length === 0) return [];\n  all.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  const need = lists.length;\n  let best: number[] | null = null;\n  for (let i = 0; i < all.length; i++) {\n    const seen = new Set<number>();\n    for (let j = i; j < all.length; j++) {\n      seen.add(all[j][1]);\n      if (seen.size === need) {\n        const start = all[i][0], end = all[j][0];\n        if (!best || end - start < best[1] - best[0]) best = [start, end];\n        break;\n      }\n    }\n  }\n  return best ? best : [];\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "km-largest-across",
    slug: "largest-across-lists",
    title: "Largest Across the Lists",
    difficulty: "easy",
    patternIds: P,
    statement: `Return the largest value found in any of the lists, or -1 if every list is empty.\n\n${LISTS_NOTE}`,
    examples: [
      { input: "[[1,4],[2,3],[5]]", output: "5" },
      { input: "[[],[]]", output: "-1" },
      { input: "[[7]]", output: "7" },
    ],
    constraints: ["0 <= number of lists <= 1000"],
    functionName: "largestAcross",
    starter: {
      js: "function largestAcross(lists) {\n  // Largest value across all lists, or -1.\n}\n",
      ts: "function largestAcross(lists: number[][]): number {\n  // Largest value across all lists, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[[1, 4], [2, 3], [5]]], expected: 5 },
      { args: [[[], []]], expected: -1 },
      { args: [[[7]]], expected: 7 },
    ],
    hidden: [
      { args: [[]], expected: -1 },
      { args: [[[]]], expected: -1 },
      { args: [[[3], [1], [2]]], expected: 3 },
      { args: [[[0], [5]]], expected: 5 },
      { args: [[[10, 20], [5, 15]]], expected: 20 },
      { args: [[[2, 2], [2]]], expected: 2 },
    ],
    hints: [
      "Each list is sorted, so its largest value is its last element.",
      "Compare only those tails.",
      "Skip empty lists.",
    ],
    solutions: [
      {
        label: "Compare the tails",
        approach: "Take the maximum of each non-empty list's last value.",
        js: "function largestAcross(lists) {\n  let best = -Infinity;\n  for (const list of lists) {\n    if (list.length > 0 && list[list.length - 1] > best) best = list[list.length - 1];\n  }\n  return best === -Infinity ? -1 : best;\n}\n",
        ts: "function largestAcross(lists: number[][]): number {\n  let best = -Infinity;\n  for (const list of lists) {\n    if (list.length > 0 && list[list.length - 1] > best) best = list[list.length - 1];\n  }\n  return best === -Infinity ? -1 : best;\n}\n",
        time: "O(k)",
        space: "O(1)",
      },
      {
        label: "Flatten and take the maximum",
        approach: "Combine every value and take the largest.",
        js: "function largestAcross(lists) {\n  const all = [].concat(...lists);\n  return all.length === 0 ? -1 : Math.max(...all);\n}\n",
        ts: "function largestAcross(lists: number[][]): number {\n  const all = ([] as number[]).concat(...lists);\n  return all.length === 0 ? -1 : Math.max(...all);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "km-merge-and-dedupe",
    slug: "merge-and-dedupe",
    title: "Merge and Deduplicate",
    difficulty: "medium",
    patternIds: P,
    statement: `Merge every list into one ascending list containing each distinct value exactly once.\n\n${LISTS_NOTE}`,
    examples: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", output: "[1,2,3,4,5,6]" },
      { input: "[]", output: "[]" },
      { input: "[[1,1],[1]]", output: "[1]" },
    ],
    constraints: ["0 <= number of lists <= 1000"],
    functionName: "mergeAndDedupe",
    starter: {
      js: "function mergeAndDedupe(lists) {\n  // Sorted, distinct values from all lists.\n}\n",
      ts: "function mergeAndDedupe(lists: number[][]): number[] {\n  // Sorted, distinct values from all lists.\n  return [];\n}\n",
    },
    visible: [
      { args: [[[1, 4, 5], [1, 3, 4], [2, 6]]], expected: [1, 2, 3, 4, 5, 6] },
      { args: [[]], expected: [] },
      { args: [[[1, 1], [1]]], expected: [1] },
    ],
    hidden: [
      { args: [[[]]], expected: [] },
      { args: [[[1], [2], [3]]], expected: [1, 2, 3] },
      { args: [[[3, 3], [3]]], expected: [3] },
      { args: [[[1, 2], [2, 3]]], expected: [1, 2, 3] },
      { args: [[[5], [1], [5]]], expected: [1, 5] },
      { args: [[[0, 0, 0]]], expected: [0] },
    ],
    hints: [
      "Merge first, then drop repeats — or use a set and sort at the end.",
      "During a merge, skip a value equal to the one you just emitted.",
      "A Set removes duplicates in one step.",
    ],
    solutions: [
      {
        label: "Set then sort",
        approach: "Collect distinct values and order them.",
        js: "function mergeAndDedupe(lists) {\n  const set = new Set();\n  for (const list of lists) for (const v of list) set.add(v);\n  return [...set].sort((a, b) => a - b);\n}\n",
        ts: "function mergeAndDedupe(lists: number[][]): number[] {\n  const set = new Set<number>();\n  for (const list of lists) for (const v of list) set.add(v);\n  return [...set].sort((a, b) => a - b);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Heap drain, skipping repeats",
        approach: "Pop values in order and skip any equal to the previous one.",
        js: `${MIN_HEAP_SOURCE}\nfunction mergeAndDedupe(lists) {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  const out = [];\n  while (h.size() > 0) {\n    const v = h.pop();\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n  return out;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction mergeAndDedupe(lists: number[][]): number[] {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  const out: number[] = [];\n  while (h.size() > 0) {\n    const v = h.pop();\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n  return out;\n}\n`,
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "km-median-of-lists",
    slug: "median-across-lists",
    title: "Median Across the Lists",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the median of all values across the lists. For an even total, average the two middle values. With no values at all, return 0.\n\n${LISTS_NOTE}`,
    examples: [
      { input: "[[1,3],[2]]", output: "2" },
      { input: "[[1,2],[3,4]]", output: "2.5" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= number of lists <= 1000"],
    functionName: "medianAcrossLists",
    starter: {
      js: "function medianAcrossLists(lists) {\n  // Median of every value across the lists.\n}\n",
      ts: "function medianAcrossLists(lists: number[][]): number {\n  // Median of every value across the lists.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 3], [2]]], expected: 2 },
      { args: [[[1, 2], [3, 4]]], expected: 2.5 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[[]]], expected: 0 },
      { args: [[[1]]], expected: 1 },
      { args: [[[1], [2]]], expected: 1.5 },
      { args: [[[1, 1], [1, 1]]], expected: 1 },
      { args: [[[1, 5], [2, 6]]], expected: 3.5 },
      { args: [[[0], [0]]], expected: 0 },
    ],
    hints: [
      "Merge the lists conceptually, then it's an ordinary median.",
      "You only need the middle one or two values of the merged sequence.",
      "Handle the no-values case before indexing.",
    ],
    solutions: [
      {
        label: "Flatten, sort, take the middle",
        approach: "Combine the values and read the centre.",
        js: "function medianAcrossLists(lists) {\n  const all = [].concat(...lists).sort((a, b) => a - b);\n  if (all.length === 0) return 0;\n  const mid = Math.floor(all.length / 2);\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
        ts: "function medianAcrossLists(lists: number[][]): number {\n  const all = ([] as number[]).concat(...lists).sort((a, b) => a - b);\n  if (all.length === 0) return 0;\n  const mid = Math.floor(all.length / 2);\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Heap up to the middle",
        approach: "Pop merged values until you reach the middle position(s).",
        js: `${MIN_HEAP_SOURCE}\nfunction medianAcrossLists(lists) {\n  const h = new MinHeap();\n  let total = 0;\n  for (const list of lists) for (const v of list) { h.push(v); total++; }\n  if (total === 0) return 0;\n  const mid = Math.floor(total / 2);\n  let prev = 0, cur = 0;\n  for (let i = 0; i <= mid; i++) { prev = cur; cur = h.pop(); }\n  return total % 2 === 1 ? cur : (prev + cur) / 2;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction medianAcrossLists(lists: number[][]): number {\n  const h = new MinHeap();\n  let total = 0;\n  for (const list of lists) for (const v of list) { h.push(v); total++; }\n  if (total === 0) return 0;\n  const mid = Math.floor(total / 2);\n  let prev = 0, cur = 0;\n  for (let i = 0; i <= mid; i++) { prev = cur; cur = h.pop(); }\n  return total % 2 === 1 ? cur : (prev + cur) / 2;\n}\n`,
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "km-kth-largest-in-lists",
    slug: "kth-largest-across-lists",
    title: "Kth Largest Across Lists",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the k-th largest value across all the lists (1-indexed, counting duplicates).\n\n${LISTS_NOTE}`,
    examples: [
      { input: "[[2,6,8],[3,6,7],[1,3,4]], 3", output: "6" },
      { input: "[[1]], 1", output: "1" },
      { input: "[[1,2],[3]], 1", output: "3" },
    ],
    constraints: ["1 <= k <= total number of values"],
    functionName: "kthLargestInLists",
    starter: {
      js: "function kthLargestInLists(lists, k) {\n  // The k-th largest value overall.\n}\n",
      ts: "function kthLargestInLists(lists: number[][], k: number): number {\n  // The k-th largest value overall.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[2, 6, 8], [3, 6, 7], [1, 3, 4]], 3], expected: 6 },
      { args: [[[1]], 1], expected: 1 },
      { args: [[[1, 2], [3]], 1], expected: 3 },
    ],
    hidden: [
      { args: [[[1, 2, 3]], 2], expected: 2 },
      { args: [[[5], [1], [3]], 2], expected: 3 },
      { args: [[[1, 1], [1]], 3], expected: 1 },
      { args: [[[10, 20], [15]], 1], expected: 20 },
      { args: [[[1, 2], [3, 4]], 4], expected: 1 },
      { args: [[[7]], 1], expected: 7 },
    ],
    hints: [
      "It's the same merge, walked from the largest end.",
      "A max-heap popped k times gives the answer.",
      "Or sort everything descending and index k-1.",
    ],
    solutions: [
      {
        label: "Max-heap, pop k times",
        approach: "Take the k largest merged values.",
        js: `${MAX_HEAP_SOURCE}\nfunction kthLargestInLists(lists, k) {\n  const h = new MaxHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
        ts: `${MAX_HEAP_SOURCE}\nfunction kthLargestInLists(lists: number[][], k: number): number {\n  const h = new MaxHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Flatten and sort descending",
        approach: "Combine every value, sort largest-first, and index k-1.",
        js: "function kthLargestInLists(lists, k) {\n  const all = [].concat(...lists).sort((a, b) => b - a);\n  return all[k - 1];\n}\n",
        ts: "function kthLargestInLists(lists: number[][], k: number): number {\n  const all = ([] as number[]).concat(...lists).sort((a, b) => b - a);\n  return all[k - 1];\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
];

export const kWayMergeProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const kWayMergeMcqs: QuizQuestion[] = [
  {
    id: "s5-km-heapsize",
    kind: "mcq",
    prompt: "In the classic k-way merge, the min-heap holds:",
    options: [
      "every element (size n)",
      "one candidate from each list (size k)",
      "only the single smallest element",
      "nothing — a heap isn't used",
    ],
    answerIndex: 1,
    explanation: "You only ever need the current head of each list; the heap picks the smallest of those k.",
  },
  {
    id: "s5-km-time",
    kind: "mcq",
    prompt: "Merging k sorted lists holding n values in total, using a size-k min-heap, costs:",
    options: ["O(n)", "O(n log k)", "O(n log n)", "O(k)"],
    answerIndex: 1,
    explanation: "Each of the n values is pushed and popped once from a heap capped at size k.",
  },
];

export const kWayMergeModule: Module = {
  id: "m-pat-k-way-merge",
  stageId: S,
  title: "K-Way Merge",
  kind: "patternModule",
  summary: "Merge k sorted sequences by always taking the smallest available head — with a heap, O(n log k).",
  lessonSections: [
    {
      heading: "Always take the smallest head",
      body: `Merging two sorted lists is easy: compare the two heads, take the smaller. With **k** lists the idea is identical — the next value of the merged output is always the smallest of the k current heads. Scanning all k heads each time costs O(n·k); a **min-heap** of those k candidates brings it down to **O(n log k)**.

\`\`\`js
// Two-way merge — the shape a k-way merge generalises
let i = 0, j = 0, out = [];
while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);
while (i < a.length) out.push(a[i++]);
while (j < b.length) out.push(b[j++]);
\`\`\`

The key insight is that you never need more than **one candidate per list** in the heap at a time.`,
    },
    {
      heading: "Recognition cues",
      body: `Reach for a k-way merge when you see:

- **several sorted** inputs that must become one sorted output,
- the **k-th smallest / largest** across multiple sorted lists,
- a matrix whose **rows are each sorted** — those rows are just k lists,
- the **median** of several sorted sequences,
- the **smallest range** that touches every list — same merge, but tracking which list each value came from.

If the inputs weren't sorted, you'd just concatenate and sort; the sortedness is what makes the merge cheap.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// K pointers (heap-free version of the same idea)
const idx = new Array(lists.length).fill(0);
for (;;) {
  let best = -1;
  for (let i = 0; i < lists.length; i++) {
    if (idx[i] >= lists[i].length) continue;          // exhausted
    if (best === -1 || lists[i][idx[i]] < lists[best][idx[best]]) best = i;
  }
  if (best === -1) break;                              // all exhausted
  out.push(lists[best][idx[best]]);
  idx[best]++;                                         // only advance the list you consumed
}
\`\`\`

**Pitfalls:** advancing every pointer instead of only the list you took from; forgetting **empty lists** (they must be skipped, not indexed); losing track of *which list* a heap value came from when the problem needs that (tag the values); and stopping the merge early when one list empties rather than when they all do. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "km-merge-two",
  drillProblemIds: [
    "km-merge-two",
    "km-smallest-across",
    "km-merge-k-lists",
    "km-kth-smallest-in-lists",
    "km-kth-smallest-matrix",
    "km-smallest-range",
  ],
  testPoolProblemIds: [
    "km-largest-across",
    "km-merge-and-dedupe",
    "km-median-of-lists",
    "km-kth-largest-in-lists",
  ],
  complexityQuestionIds: ["s5-km-heapsize", "s5-km-time"],
  badgeId: "badge-pat-k-way-merge",
  prerequisiteModuleIds: ["m-pat-top-k"],
};
