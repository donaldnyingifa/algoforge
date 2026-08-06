import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";
import { MIN_HEAP_SOURCE, MAX_HEAP_SOURCE } from "@/data/shared/heap";

const S = "dsa-s5";
const P = ["top-k-elements"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "tk-k-largest",
    slug: "k-largest",
    title: "K Largest Values",
    difficulty: "easy",
    patternIds: P,
    statement: "Return the `k` largest values, sorted ascending. Duplicates count separately.",
    examples: [
      { input: "[3,1,5,12,2,11], 3", output: "[5,11,12]" },
      { input: "[1], 1", output: "[1]" },
      { input: "[5,5], 2", output: "[5,5]" },
    ],
    constraints: ["0 <= k <= nums.length <= 10000"],
    functionName: "kLargest",
    starter: {
      js: "function kLargest(nums, k) {\n  // The k largest values, sorted ascending.\n}\n",
      ts: "function kLargest(nums: number[], k: number): number[] {\n  // The k largest values, sorted ascending.\n  return [];\n}\n",
    },
    visible: [
      { args: [[3, 1, 5, 12, 2, 11], 3], expected: [5, 11, 12] },
      { args: [[1], 1], expected: [1] },
      { args: [[5, 5], 2], expected: [5, 5] },
    ],
    hidden: [
      { args: [[1, 2, 3], 0], expected: [] },
      { args: [[1, 2, 3], 3], expected: [1, 2, 3] },
      { args: [[-1, -2, -3], 2], expected: [-2, -1] },
      { args: [[4, 4, 4], 2], expected: [4, 4] },
      { args: [[10, 9, 8, 7], 2], expected: [9, 10] },
      { args: [[2], 1], expected: [2] },
    ],
    hints: [
      "Sorting descending puts the k largest at the front.",
      "A size-k min-heap keeps only the biggest k while you scan.",
      "Whatever approach you use, sort the final k ascending before returning.",
    ],
    solutions: [
      {
        label: "Sort and slice",
        approach: "Sort descending, take k, then order ascending for the result.",
        js: "function kLargest(nums, k) {\n  return [...nums].sort((a, b) => b - a).slice(0, k).sort((a, b) => a - b);\n}\n",
        ts: "function kLargest(nums: number[], k: number): number[] {\n  return [...nums].sort((a, b) => b - a).slice(0, k).sort((a, b) => a - b);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Size-k min-heap",
        approach: "Keep only the k largest seen so far; the heap's root is the smallest of them.",
        js: `${MIN_HEAP_SOURCE}\nfunction kLargest(nums, k) {\n  if (k <= 0) return [];\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction kLargest(nums: number[], k: number): number[] {\n  if (k <= 0) return [];\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
        time: "O(n log k)",
        space: "O(k)",
      },
    ],
  },
  {
    id: "tk-kth-smallest",
    slug: "kth-smallest",
    title: "Kth Smallest Value",
    difficulty: "easy",
    patternIds: P,
    statement: "Return the k-th smallest value (1-indexed, counting duplicates).",
    examples: [
      { input: "[7,10,4,3,20,15], 3", output: "7" },
      { input: "[1], 1", output: "1" },
      { input: "[2,2,2], 2", output: "2" },
    ],
    constraints: ["1 <= k <= nums.length <= 10000"],
    functionName: "kthSmallest",
    starter: {
      js: "function kthSmallest(nums, k) {\n  // The k-th smallest value.\n}\n",
      ts: "function kthSmallest(nums: number[], k: number): number {\n  // The k-th smallest value.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[7, 10, 4, 3, 20, 15], 3], expected: 7 },
      { args: [[1], 1], expected: 1 },
      { args: [[2, 2, 2], 2], expected: 2 },
    ],
    hidden: [
      { args: [[1, 2], 1], expected: 1 },
      { args: [[1, 2], 2], expected: 2 },
      { args: [[5, 4, 3, 2, 1], 5], expected: 5 },
      { args: [[-1, -2], 1], expected: -2 },
      { args: [[3, 3, 4], 3], expected: 4 },
      { args: [[9], 1], expected: 9 },
    ],
    hints: [
      "Sorting ascending puts the answer at index k-1.",
      "A size-k max-heap keeps the k smallest; its root is then the k-th smallest.",
      "Duplicates each occupy their own rank.",
    ],
    solutions: [
      {
        label: "Sort and index",
        approach: "Sort ascending and read position k-1.",
        js: "function kthSmallest(nums, k) {\n  return [...nums].sort((a, b) => a - b)[k - 1];\n}\n",
        ts: "function kthSmallest(nums: number[], k: number): number {\n  return [...nums].sort((a, b) => a - b)[k - 1];\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Size-k max-heap",
        approach: "Retain the k smallest values; the heap root is the answer.",
        js: `${MAX_HEAP_SOURCE}\nfunction kthSmallest(nums, k) {\n  const h = new MaxHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
        ts: `${MAX_HEAP_SOURCE}\nfunction kthSmallest(nums: number[], k: number): number {\n  const h = new MaxHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
        time: "O(n log k)",
        space: "O(k)",
      },
    ],
  },
  {
    id: "tk-k-closest-to-zero",
    slug: "k-closest-to-zero",
    title: "K Closest to Zero",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the `k` values nearest to zero, sorted ascending. When two values are equally close (like -4 and 4), prefer the smaller one.",
    examples: [
      { input: "[-3,1,2,-1], 2", output: "[-1,1]" },
      { input: "[5,-2,3], 2", output: "[-2,3]" },
      { input: "[1], 1", output: "[1]" },
    ],
    constraints: ["0 <= k <= nums.length <= 10000"],
    functionName: "kClosestToZero",
    starter: {
      js: "function kClosestToZero(nums, k) {\n  // The k values nearest zero, sorted ascending.\n}\n",
      ts: "function kClosestToZero(nums: number[], k: number): number[] {\n  // The k values nearest zero, sorted ascending.\n  return [];\n}\n",
    },
    visible: [
      { args: [[-3, 1, 2, -1], 2], expected: [-1, 1] },
      { args: [[5, -2, 3], 2], expected: [-2, 3] },
      { args: [[1], 1], expected: [1] },
    ],
    hidden: [
      { args: [[1, 2, 3], 0], expected: [] },
      { args: [[0, 1, -1], 1], expected: [0] },
      { args: [[4, -4], 1], expected: [-4] },
      { args: [[1, 2, 3], 3], expected: [1, 2, 3] },
      { args: [[-5, -1, 2], 2], expected: [-1, 2] },
      { args: [[3, 3], 2], expected: [3, 3] },
    ],
    hints: [
      "Distance from zero is just the absolute value.",
      "Rank by |v|, breaking ties toward the smaller value so the answer is deterministic.",
      "Take the first k, then sort them ascending for the result.",
    ],
    solutions: [
      {
        label: "Sort by distance",
        approach: "Order by absolute value (ties to the smaller value), take k, then sort.",
        js: "function kClosestToZero(nums, k) {\n  return [...nums]\n    .sort((a, b) => Math.abs(a) - Math.abs(b) || a - b)\n    .slice(0, k)\n    .sort((a, b) => a - b);\n}\n",
        ts: "function kClosestToZero(nums: number[], k: number): number[] {\n  return [...nums]\n    .sort((a, b) => Math.abs(a) - Math.abs(b) || a - b)\n    .slice(0, k)\n    .sort((a, b) => a - b);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Select then order",
        approach: "Repeatedly pick the nearest remaining value, then sort the picks.",
        js: "function kClosestToZero(nums, k) {\n  const rest = [...nums];\n  const picked = [];\n  for (let i = 0; i < k && rest.length; i++) {\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      const closer = Math.abs(rest[j]) < Math.abs(rest[best]);\n      const tie = Math.abs(rest[j]) === Math.abs(rest[best]) && rest[j] < rest[best];\n      if (closer || tie) best = j;\n    }\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  return picked.sort((a, b) => a - b);\n}\n",
        ts: "function kClosestToZero(nums: number[], k: number): number[] {\n  const rest = [...nums];\n  const picked: number[] = [];\n  for (let i = 0; i < k && rest.length; i++) {\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      const closer = Math.abs(rest[j]) < Math.abs(rest[best]);\n      const tie = Math.abs(rest[j]) === Math.abs(rest[best]) && rest[j] < rest[best];\n      if (closer || tie) best = j;\n    }\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  return picked.sort((a, b) => a - b);\n}\n",
        time: "O(n·k)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tk-kth-largest-distinct",
    slug: "kth-largest-distinct",
    title: "Kth Largest Distinct",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the k-th largest **distinct** value, or -1 if the list has fewer than `k` distinct values.",
    examples: [
      { input: "[3,2,3,1,2,4,5,5,6], 3", output: "4" },
      { input: "[1,1], 1", output: "1" },
      { input: "[1,1], 2", output: "-1" },
    ],
    constraints: ["0 <= nums.length <= 10000", "k >= 1"],
    functionName: "kthLargestDistinct",
    starter: {
      js: "function kthLargestDistinct(nums, k) {\n  // k-th largest distinct value, or -1.\n}\n",
      ts: "function kthLargestDistinct(nums: number[], k: number): number {\n  // k-th largest distinct value, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 3], expected: 4 },
      { args: [[1, 1], 1], expected: 1 },
      { args: [[1, 1], 2], expected: -1 },
    ],
    hidden: [
      { args: [[], 1], expected: -1 },
      { args: [[5], 1], expected: 5 },
      { args: [[5, 5, 5], 1], expected: 5 },
      { args: [[1, 2, 3], 2], expected: 2 },
      { args: [[1, 2, 3], 4], expected: -1 },
      { args: [[9, 8, 9, 8, 7], 3], expected: 7 },
    ],
    hints: [
      "Collapse duplicates first — a Set does it in one step.",
      "Sort the distinct values descending and index k-1.",
      "Guard the case where there simply aren't k distinct values.",
    ],
    solutions: [
      {
        label: "Dedupe then sort",
        approach: "Distinct values sorted descending; read position k-1.",
        js: "function kthLargestDistinct(nums, k) {\n  const distinct = [...new Set(nums)].sort((a, b) => b - a);\n  return distinct.length >= k ? distinct[k - 1] : -1;\n}\n",
        ts: "function kthLargestDistinct(nums: number[], k: number): number {\n  const distinct = [...new Set(nums)].sort((a, b) => b - a);\n  return distinct.length >= k ? distinct[k - 1] : -1;\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Size-k min-heap of distinct values",
        approach: "Feed only unseen values into a size-k min-heap.",
        js: `${MIN_HEAP_SOURCE}\nfunction kthLargestDistinct(nums, k) {\n  const seen = new Set();\n  const h = new MinHeap();\n  for (const v of nums) {\n    if (seen.has(v)) continue;\n    seen.add(v);\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.size() === k ? h.peek() : -1;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction kthLargestDistinct(nums: number[], k: number): number {\n  const seen = new Set<number>();\n  const h = new MinHeap();\n  for (const v of nums) {\n    if (seen.has(v)) continue;\n    seen.add(v);\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.size() === k ? h.peek() : -1;\n}\n`,
        time: "O(n log k)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tk-connect-sticks",
    slug: "connect-sticks",
    title: "Minimum Cost to Connect Sticks",
    difficulty: "medium",
    patternIds: P,
    statement:
      "You may connect two sticks at a cost equal to their combined length, producing one longer stick. Return the minimum total cost to combine every stick into one.",
    examples: [
      { input: "[2,4,3]", output: "14" },
      { input: "[1,8,3,5]", output: "30" },
      { input: "[5]", output: "0" },
    ],
    constraints: ["0 <= sticks.length <= 10000", "lengths are positive"],
    functionName: "connectSticks",
    starter: {
      js: "function connectSticks(sticks) {\n  // Minimum total cost to connect all sticks.\n}\n",
      ts: "function connectSticks(sticks: number[]): number {\n  // Minimum total cost to connect all sticks.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 4, 3]], expected: 14 },
      { args: [[1, 8, 3, 5]], expected: 30 },
      { args: [[5]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[1]], expected: 0 },
      { args: [[1, 1]], expected: 2 },
      { args: [[1, 2, 3]], expected: 9 },
      { args: [[2, 2, 2, 2]], expected: 16 },
      { args: [[1, 2, 5, 10, 35, 89]], expected: 224 },
    ],
    hints: [
      "Combining the two shortest sticks first keeps the expensive totals from being re-added.",
      "That means you repeatedly need the two smallest — a min-heap.",
      "Push the combined stick back and repeat until one remains.",
    ],
    solutions: [
      {
        label: "Min-heap greedy",
        approach: "Always merge the two shortest sticks, pushing the result back.",
        js: `${MIN_HEAP_SOURCE}\nfunction connectSticks(sticks) {\n  if (sticks.length <= 1) return 0;\n  const h = new MinHeap();\n  for (const s of sticks) h.push(s);\n  let cost = 0;\n  while (h.size() > 1) {\n    const combined = h.pop() + h.pop();\n    cost += combined;\n    h.push(combined);\n  }\n  return cost;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction connectSticks(sticks: number[]): number {\n  if (sticks.length <= 1) return 0;\n  const h = new MinHeap();\n  for (const s of sticks) h.push(s);\n  let cost = 0;\n  while (h.size() > 1) {\n    const combined = h.pop() + h.pop();\n    cost += combined;\n    h.push(combined);\n  }\n  return cost;\n}\n`,
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Re-sort each round",
        approach: "Sort, take the two smallest, insert the sum, repeat.",
        js: "function connectSticks(sticks) {\n  const rest = [...sticks];\n  let cost = 0;\n  while (rest.length > 1) {\n    rest.sort((a, b) => a - b);\n    const combined = rest.shift() + rest.shift();\n    cost += combined;\n    rest.push(combined);\n  }\n  return cost;\n}\n",
        ts: "function connectSticks(sticks: number[]): number {\n  const rest = [...sticks];\n  let cost = 0;\n  while (rest.length > 1) {\n    rest.sort((a, b) => a - b);\n    const combined = (rest.shift() as number) + (rest.shift() as number);\n    cost += combined;\n    rest.push(combined);\n  }\n  return cost;\n}\n",
        time: "O(n² log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tk-max-score-k-ops",
    slug: "max-score-k-operations",
    title: "Maximum Score in K Operations",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Perform exactly `k` operations. Each operation takes the largest remaining value `v`, adds `v` to your score, and replaces it with `floor(v / 3)`. Return the final score (0 if the list is empty).",
    examples: [
      { input: "[10,10,10,10,10], 5", output: "50" },
      { input: "[1,10,3,3,3], 3", output: "16" },
      { input: "[1], 1", output: "1" },
    ],
    constraints: ["0 <= k <= 10000", "values are non-negative"],
    functionName: "maxScoreKOps",
    starter: {
      js: "function maxScoreKOps(nums, k) {\n  // Repeatedly take the largest value; replace it with floor(v/3).\n}\n",
      ts: "function maxScoreKOps(nums: number[], k: number): number {\n  // Repeatedly take the largest value; replace it with floor(v/3).\n  return 0;\n}\n",
    },
    visible: [
      { args: [[10, 10, 10, 10, 10], 5], expected: 50 },
      { args: [[1, 10, 3, 3, 3], 3], expected: 16 },
      { args: [[1], 1], expected: 1 },
    ],
    hidden: [
      { args: [[], 5], expected: 0 },
      { args: [[5], 2], expected: 6 },
      { args: [[9], 2], expected: 12 },
      { args: [[1, 1, 1], 2], expected: 2 },
      { args: [[100], 1], expected: 100 },
      { args: [[3, 3], 2], expected: 6 },
    ],
    hints: [
      "Each operation needs the current maximum — that's a max-heap.",
      "After scoring, push floor(v / 3) back so it can be chosen again later.",
      "Stop early if the heap runs out of values.",
    ],
    solutions: [
      {
        label: "Max-heap",
        approach: "Pop the largest, score it, push back its reduced value.",
        js: `${MAX_HEAP_SOURCE}\nfunction maxScoreKOps(nums, k) {\n  if (nums.length === 0) return 0;\n  const h = new MaxHeap();\n  for (const v of nums) h.push(v);\n  let score = 0;\n  for (let i = 0; i < k; i++) {\n    const v = h.pop();\n    if (v === undefined) break;\n    score += v;\n    h.push(Math.floor(v / 3));\n  }\n  return score;\n}\n`,
        ts: `${MAX_HEAP_SOURCE}\nfunction maxScoreKOps(nums: number[], k: number): number {\n  if (nums.length === 0) return 0;\n  const h = new MaxHeap();\n  for (const v of nums) h.push(v);\n  let score = 0;\n  for (let i = 0; i < k; i++) {\n    const v = h.pop();\n    if (v === undefined) break;\n    score += v;\n    h.push(Math.floor(v / 3));\n  }\n  return score;\n}\n`,
        time: "O((n + k) log n)",
        space: "O(n)",
      },
      {
        label: "Re-sort each operation",
        approach: "Sort descending each round and take the front value.",
        js: "function maxScoreKOps(nums, k) {\n  const rest = [...nums];\n  let score = 0;\n  for (let i = 0; i < k && rest.length; i++) {\n    rest.sort((a, b) => b - a);\n    const v = rest.shift();\n    score += v;\n    rest.push(Math.floor(v / 3));\n  }\n  return score;\n}\n",
        ts: "function maxScoreKOps(nums: number[], k: number): number {\n  const rest = [...nums];\n  let score = 0;\n  for (let i = 0; i < k && rest.length; i++) {\n    rest.sort((a, b) => b - a);\n    const v = rest.shift() as number;\n    score += v;\n    rest.push(Math.floor(v / 3));\n  }\n  return score;\n}\n",
        time: "O(k · n log n)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "tk-k-smallest",
    slug: "k-smallest",
    title: "K Smallest Values",
    difficulty: "easy",
    patternIds: P,
    statement: "Return the `k` smallest values, sorted ascending.",
    examples: [
      { input: "[5,3,1,2,4], 2", output: "[1,2]" },
      { input: "[1], 1", output: "[1]" },
      { input: "[9,8,7], 3", output: "[7,8,9]" },
    ],
    constraints: ["0 <= k <= nums.length <= 10000"],
    functionName: "kSmallest",
    starter: {
      js: "function kSmallest(nums, k) {\n  // The k smallest values, sorted ascending.\n}\n",
      ts: "function kSmallest(nums: number[], k: number): number[] {\n  // The k smallest values, sorted ascending.\n  return [];\n}\n",
    },
    visible: [
      { args: [[5, 3, 1, 2, 4], 2], expected: [1, 2] },
      { args: [[1], 1], expected: [1] },
      { args: [[9, 8, 7], 3], expected: [7, 8, 9] },
    ],
    hidden: [
      { args: [[1, 2, 3], 0], expected: [] },
      { args: [[3, 3, 3], 2], expected: [3, 3] },
      { args: [[-1, -2, 0], 2], expected: [-2, -1] },
      { args: [[10, 1], 1], expected: [1] },
      { args: [[4, 2, 5, 1, 3], 3], expected: [1, 2, 3] },
      { args: [[7], 1], expected: [7] },
    ],
    hints: [
      "Sorting ascending puts the k smallest at the front.",
      "A size-k max-heap keeps the smallest k while scanning.",
      "Return them sorted ascending.",
    ],
    solutions: [
      {
        label: "Sort and slice",
        approach: "Sort ascending and take the first k.",
        js: "function kSmallest(nums, k) {\n  return [...nums].sort((a, b) => a - b).slice(0, k);\n}\n",
        ts: "function kSmallest(nums: number[], k: number): number[] {\n  return [...nums].sort((a, b) => a - b).slice(0, k);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Size-k max-heap",
        approach: "Retain the k smallest, then read them out in order.",
        js: `${MAX_HEAP_SOURCE}\nfunction kSmallest(nums, k) {\n  if (k <= 0) return [];\n  const h = new MaxHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out.reverse();\n}\n`,
        ts: `${MAX_HEAP_SOURCE}\nfunction kSmallest(nums: number[], k: number): number[] {\n  if (k <= 0) return [];\n  const h = new MaxHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out.reverse();\n}\n`,
        time: "O(n log k)",
        space: "O(k)",
      },
    ],
  },
  {
    id: "tk-kth-largest",
    slug: "kth-largest-value",
    title: "Kth Largest Value",
    difficulty: "medium",
    patternIds: P,
    statement: "Return the k-th largest value (1-indexed, counting duplicates).",
    examples: [
      { input: "[3,2,1,5,6,4], 2", output: "5" },
      { input: "[1], 1", output: "1" },
      { input: "[7,7,7], 2", output: "7" },
    ],
    constraints: ["1 <= k <= nums.length <= 10000"],
    functionName: "kthLargestValue",
    starter: {
      js: "function kthLargestValue(nums, k) {\n  // The k-th largest value.\n}\n",
      ts: "function kthLargestValue(nums: number[], k: number): number {\n  // The k-th largest value.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
      { args: [[1], 1], expected: 1 },
      { args: [[7, 7, 7], 2], expected: 7 },
    ],
    hidden: [
      { args: [[1, 2], 1], expected: 2 },
      { args: [[1, 2], 2], expected: 1 },
      { args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4 },
      { args: [[-1, -2, -3], 1], expected: -1 },
      { args: [[5, 5, 4, 4], 3], expected: 4 },
      { args: [[10], 1], expected: 10 },
    ],
    hints: [
      "Sort descending and index k-1.",
      "Or keep a size-k min-heap; its root ends up as the k-th largest.",
      "Duplicates each take a rank of their own.",
    ],
    solutions: [
      {
        label: "Sort descending",
        approach: "Order largest-first and read position k-1.",
        js: "function kthLargestValue(nums, k) {\n  return [...nums].sort((a, b) => b - a)[k - 1];\n}\n",
        ts: "function kthLargestValue(nums: number[], k: number): number {\n  return [...nums].sort((a, b) => b - a)[k - 1];\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Size-k min-heap",
        approach: "Keep only the k largest; the smallest of them is the answer.",
        js: `${MIN_HEAP_SOURCE}\nfunction kthLargestValue(nums, k) {\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction kthLargestValue(nums: number[], k: number): number {\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
        time: "O(n log k)",
        space: "O(k)",
      },
    ],
  },
  {
    id: "tk-sum-k-largest",
    slug: "sum-of-k-largest",
    title: "Sum of the K Largest",
    difficulty: "medium",
    patternIds: P,
    statement: "Return the sum of the `k` largest values (0 when k is 0).",
    examples: [
      { input: "[1,2,3,4], 2", output: "7" },
      { input: "[5], 1", output: "5" },
      { input: "[1,2,3], 0", output: "0" },
    ],
    constraints: ["0 <= k <= nums.length <= 10000"],
    functionName: "sumKLargest",
    starter: {
      js: "function sumKLargest(nums, k) {\n  // Sum of the k largest values.\n}\n",
      ts: "function sumKLargest(nums: number[], k: number): number {\n  // Sum of the k largest values.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4], 2], expected: 7 },
      { args: [[5], 1], expected: 5 },
      { args: [[1, 2, 3], 0], expected: 0 },
    ],
    hidden: [
      { args: [[], 0], expected: 0 },
      { args: [[3, 3, 3], 2], expected: 6 },
      { args: [[-1, -2, -3], 2], expected: -3 },
      { args: [[10, 1, 1], 1], expected: 10 },
      { args: [[1, 2, 3, 4, 5], 5], expected: 15 },
      { args: [[2, 2], 1], expected: 2 },
    ],
    hints: [
      "Take the k largest first, then add them up.",
      "Sorting descending and slicing is the direct route.",
      "Negative values still follow the same rule — largest means closest to positive.",
    ],
    solutions: [
      {
        label: "Sort, slice, sum",
        approach: "Order descending, take k, and total them.",
        js: "function sumKLargest(nums, k) {\n  return [...nums].sort((a, b) => b - a).slice(0, k).reduce((s, v) => s + v, 0);\n}\n",
        ts: "function sumKLargest(nums: number[], k: number): number {\n  return [...nums].sort((a, b) => b - a).slice(0, k).reduce((s, v) => s + v, 0);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Size-k min-heap",
        approach: "Keep the k largest in a heap, then drain and sum.",
        js: `${MIN_HEAP_SOURCE}\nfunction sumKLargest(nums, k) {\n  if (k <= 0) return 0;\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  let sum = 0;\n  while (h.size() > 0) sum += h.pop();\n  return sum;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction sumKLargest(nums: number[], k: number): number {\n  if (k <= 0) return 0;\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  let sum = 0;\n  while (h.size() > 0) sum += h.pop();\n  return sum;\n}\n`,
        time: "O(n log k)",
        space: "O(k)",
      },
    ],
  },
  {
    id: "tk-k-closest-to-target",
    slug: "k-closest-to-target",
    title: "K Closest to a Target",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the `k` values nearest to `target`, sorted ascending. When two values are equally close, prefer the smaller one.",
    examples: [
      { input: "[1,2,3,4,5], 3, 3", output: "[2,3,4]" },
      { input: "[1,10], 1, 5", output: "[1]" },
      { input: "[1,2,3], 0, 10", output: "[]" },
    ],
    constraints: ["0 <= k <= nums.length <= 10000"],
    functionName: "kClosestToTarget",
    starter: {
      js: "function kClosestToTarget(nums, k, target) {\n  // The k values nearest target, sorted ascending.\n}\n",
      ts: "function kClosestToTarget(nums: number[], k: number, target: number): number[] {\n  // The k values nearest target, sorted ascending.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5], 3, 3], expected: [2, 3, 4] },
      { args: [[1, 10], 1, 5], expected: [1] },
      { args: [[1, 2, 3], 0, 10], expected: [] },
    ],
    hidden: [
      { args: [[5], 1, 5], expected: [5] },
      { args: [[1, 3], 1, 2], expected: [1] },
      { args: [[1, 2, 3, 4], 2, 2], expected: [1, 2] },
      { args: [[10, 20, 30], 2, 25], expected: [20, 30] },
      { args: [[1, 2, 3], 3, 2], expected: [1, 2, 3] },
      { args: [[-5, 0, 5], 1, 1], expected: [0] },
    ],
    hints: [
      "Distance is |v - target|.",
      "Rank by distance, breaking ties toward the smaller value.",
      "Take k, then sort ascending for the final answer.",
    ],
    solutions: [
      {
        label: "Sort by distance to target",
        approach: "Order by |v - target| (ties to the smaller value), take k, then sort.",
        js: "function kClosestToTarget(nums, k, target) {\n  return [...nums]\n    .sort((a, b) => Math.abs(a - target) - Math.abs(b - target) || a - b)\n    .slice(0, k)\n    .sort((a, b) => a - b);\n}\n",
        ts: "function kClosestToTarget(nums: number[], k: number, target: number): number[] {\n  return [...nums]\n    .sort((a, b) => Math.abs(a - target) - Math.abs(b - target) || a - b)\n    .slice(0, k)\n    .sort((a, b) => a - b);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Repeated selection",
        approach: "Pick the nearest remaining value k times, then order the picks.",
        js: "function kClosestToTarget(nums, k, target) {\n  const rest = [...nums];\n  const picked = [];\n  for (let i = 0; i < k && rest.length; i++) {\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      const dj = Math.abs(rest[j] - target), db = Math.abs(rest[best] - target);\n      if (dj < db || (dj === db && rest[j] < rest[best])) best = j;\n    }\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  return picked.sort((a, b) => a - b);\n}\n",
        ts: "function kClosestToTarget(nums: number[], k: number, target: number): number[] {\n  const rest = [...nums];\n  const picked: number[] = [];\n  for (let i = 0; i < k && rest.length; i++) {\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      const dj = Math.abs(rest[j] - target), db = Math.abs(rest[best] - target);\n      if (dj < db || (dj === db && rest[j] < rest[best])) best = j;\n    }\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  return picked.sort((a, b) => a - b);\n}\n",
        time: "O(n·k)",
        space: "O(n)",
      },
    ],
  },
];

export const topKProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const topKMcqs: QuizQuestion[] = [
  {
    id: "s5-tk-heap-kind",
    kind: "mcq",
    prompt: "To keep the k *largest* values while scanning n numbers, you maintain:",
    options: [
      "a min-heap of size k",
      "a max-heap of size n",
      "a fully sorted array of size n",
      "a hash map of counts",
    ],
    answerIndex: 0,
    explanation: "The min-heap's root is the weakest of your current top k, so it's the one to evict.",
  },
  {
    id: "s5-tk-time",
    kind: "mcq",
    prompt: "Finding the k largest of n values with a size-k heap costs:",
    options: ["O(n)", "O(n log k)", "O(n log n)", "O(k)"],
    answerIndex: 1,
    explanation: "Each of the n values does at most an O(log k) push/pop on a heap capped at size k.",
  },
];

export const topKModule: Module = {
  id: "m-pat-top-k",
  stageId: S,
  title: "Top K Elements",
  kind: "patternModule",
  summary: "Keep a size-k heap while you scan — the k largest, smallest, or closest in O(n log k).",
  lessonSections: [
    {
      heading: "A heap that never grows past k",
      body: `When you need the **k largest** values, sorting everything is O(n log n) — more work than necessary. Instead keep a **min-heap capped at size k**: push each value, and whenever the heap exceeds k, pop the smallest. What survives is exactly the top k, at **O(n log k)**.

The direction is the part everyone gets backwards: **k largest → min-heap** (so the weakest is at the root and easiest to evict); **k smallest → max-heap**.

\`\`\`js
// k largest with a size-k min-heap (MinHeap from the Stage 2 lab)
const h = new MinHeap();
for (const v of nums) {
  h.push(v);
  if (h.size() > k) h.pop(); // drop the weakest of the current top k
}
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for this pattern when a problem asks for:

- the **k largest / smallest** values, or the **k-th** largest / smallest,
- the **k closest** values to a target (rank by distance instead of value),
- the **k most frequent** items (rank by count),
- repeatedly taking the current extreme — merging the two shortest sticks, or scoring the largest value again and again.

That last family is really *greedy with a priority queue*: the heap hands you the best choice each round.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Repeatedly consume the extreme (greedy with a heap)
const h = new MinHeap();
for (const s of sticks) h.push(s);
let cost = 0;
while (h.size() > 1) {
  const combined = h.pop()! + h.pop()!; // two smallest
  cost += combined;
  h.push(combined);                     // feed the result back in
}
\`\`\`

**Pitfalls:** picking the wrong heap direction (a max-heap can't cheaply evict the weakest of your top k); forgetting that **ties need a rule** — for "k closest", two values can be equally near, so break ties deliberately or the answer isn't well defined; and returning the heap's internal array as if it were sorted — a heap is only ordered at the root, so sort before returning. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "tk-k-largest",
  drillProblemIds: [
    "tk-k-largest",
    "tk-kth-smallest",
    "tk-k-closest-to-zero",
    "tk-kth-largest-distinct",
    "tk-connect-sticks",
    "tk-max-score-k-ops",
  ],
  testPoolProblemIds: [
    "tk-k-smallest",
    "tk-kth-largest",
    "tk-sum-k-largest",
    "tk-k-closest-to-target",
  ],
  complexityQuestionIds: ["s5-tk-heap-kind", "s5-tk-time"],
  badgeId: "badge-pat-top-k",
  prerequisiteModuleIds: [],
};
