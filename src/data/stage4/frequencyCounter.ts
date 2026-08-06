import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s4";
const P = ["frequency-counter"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "fc-char-frequency",
    slug: "character-frequency",
    title: "Character Frequency",
    difficulty: "easy",
    patternIds: P,
    statement: "Return an object mapping each character in the string to how many times it appears.",
    examples: [
      { input: '"aab"', output: "{ a: 2, b: 1 }" },
      { input: '""', output: "{}" },
      { input: '"x"', output: "{ x: 1 }" },
    ],
    constraints: ["0 <= s.length <= 10000"],
    functionName: "charFrequency",
    starter: {
      js: "function charFrequency(s) {\n  // Map each character to its count.\n}\n",
      ts: "function charFrequency(s: string): Record<string, number> {\n  // Map each character to its count.\n  return {};\n}\n",
    },
    visible: [
      { args: ["aab"], expected: { a: 2, b: 1 } },
      { args: [""], expected: {} },
      { args: ["x"], expected: { x: 1 } },
    ],
    hidden: [
      { args: ["aaa"], expected: { a: 3 } },
      { args: ["abc"], expected: { a: 1, b: 1, c: 1 } },
      { args: ["aA"], expected: { a: 1, A: 1 } },
      { args: ["  "], expected: { " ": 2 } },
      { args: ["112"], expected: { "1": 2, "2": 1 } },
      { args: ["zz"], expected: { z: 2 } },
    ],
    hints: [
      "Every distinct character needs its own running tally.",
      "Use a plain object keyed by the character, defaulting missing keys to 0.",
      "for (const c of s) counts[c] = (counts[c] || 0) + 1.",
    ],
    solutions: [
      {
        label: "Tally into an object",
        approach: "Increment a per-character counter while scanning.",
        js: "function charFrequency(s) {\n  const counts = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  return counts;\n}\n",
        ts: "function charFrequency(s: string): Record<string, number> {\n  const counts: Record<string, number> = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  return counts;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Reduce",
        approach: "Fold the characters into a counts object.",
        js: "function charFrequency(s) {\n  return s.split('').reduce((acc, c) => { acc[c] = (acc[c] || 0) + 1; return acc; }, {});\n}\n",
        ts: "function charFrequency(s: string): Record<string, number> {\n  return s.split('').reduce<Record<string, number>>((acc, c) => { acc[c] = (acc[c] || 0) + 1; return acc; }, {});\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
    ],
  },
  {
    id: "fc-first-unique-number",
    slug: "first-unique-number",
    title: "First Unique Number",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Return the first value that appears exactly once in the list, or -1 if every value repeats.",
    examples: [
      { input: "[2,3,2,4]", output: "3" },
      { input: "[1,1]", output: "-1" },
      { input: "[5]", output: "5" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "firstUniqueNumber",
    starter: {
      js: "function firstUniqueNumber(nums) {\n  // First value with a count of exactly 1, or -1.\n}\n",
      ts: "function firstUniqueNumber(nums: number[]): number {\n  // First value with a count of exactly 1, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[2, 3, 2, 4]], expected: 3 },
      { args: [[1, 1]], expected: -1 },
      { args: [[5]], expected: 5 },
    ],
    hidden: [
      { args: [[]], expected: -1 },
      { args: [[1, 2, 3]], expected: 1 },
      { args: [[1, 1, 2, 2, 3]], expected: 3 },
      { args: [[4, 4, 4]], expected: -1 },
      { args: [[0, 1, 0]], expected: 1 },
      { args: [[7, 8, 7, 9, 8]], expected: 9 },
    ],
    hints: [
      "You can't know a value is unique until you've counted the whole list.",
      "First pass: build counts. Second pass: return the first value whose count is 1.",
      "Two passes keep the original order intact.",
    ],
    solutions: [
      {
        label: "Count then scan",
        approach: "Tally first, then find the earliest value counted once.",
        js: "function firstUniqueNumber(nums) {\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  for (const n of nums) if (counts.get(n) === 1) return n;\n  return -1;\n}\n",
        ts: "function firstUniqueNumber(nums: number[]): number {\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  for (const n of nums) if (counts.get(n) === 1) return n;\n  return -1;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "indexOf === lastIndexOf",
        approach: "A value is unique when its first and last positions match.",
        js: "function firstUniqueNumber(nums) {\n  for (const n of nums) if (nums.indexOf(n) === nums.lastIndexOf(n)) return n;\n  return -1;\n}\n",
        ts: "function firstUniqueNumber(nums: number[]): number {\n  for (const n of nums) if (nums.indexOf(n) === nums.lastIndexOf(n)) return n;\n  return -1;\n}\n",
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "fc-can-construct",
    slug: "can-construct",
    title: "Can Construct",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return `true` if `note` can be built using the letters of `magazine`, where each letter of the magazine may be used at most once.",
    examples: [
      { input: '"a", "b"', output: "false" },
      { input: '"aa", "aab"', output: "true" },
      { input: '"", "x"', output: "true" },
    ],
    constraints: ["0 <= lengths <= 10000"],
    functionName: "canConstruct",
    starter: {
      js: "function canConstruct(note, magazine) {\n  // True if note can be built from magazine letters.\n}\n",
      ts: "function canConstruct(note: string, magazine: string): boolean {\n  // True if note can be built from magazine letters.\n  return false;\n}\n",
    },
    visible: [
      { args: ["a", "b"], expected: false },
      { args: ["aa", "aab"], expected: true },
      { args: ["", "x"], expected: true },
    ],
    hidden: [
      { args: ["", ""], expected: true },
      { args: ["a", "a"], expected: true },
      { args: ["aa", "ab"], expected: false },
      { args: ["abc", "cba"], expected: true },
      { args: ["aabb", "ab"], expected: false },
      { args: ["xyz", "xxyyzz"], expected: true },
    ],
    hints: [
      "Count what the magazine offers, then spend those letters on the note.",
      "If a needed letter is missing or exhausted, the answer is false.",
      "Build counts of magazine; for each char of note decrement and check it stays >= 0.",
    ],
    solutions: [
      {
        label: "Count and spend",
        approach: "Tally the magazine, then decrement per note character.",
        js: "function canConstruct(note, magazine) {\n  const have = {};\n  for (const c of magazine) have[c] = (have[c] || 0) + 1;\n  for (const c of note) {\n    if (!have[c]) return false;\n    have[c]--;\n  }\n  return true;\n}\n",
        ts: "function canConstruct(note: string, magazine: string): boolean {\n  const have: Record<string, number> = {};\n  for (const c of magazine) have[c] = (have[c] || 0) + 1;\n  for (const c of note) {\n    if (!have[c]) return false;\n    have[c]--;\n  }\n  return true;\n}\n",
        time: "O(n + m)",
        space: "O(k)",
      },
      {
        label: "Compare counts",
        approach: "Every note letter's count must not exceed the magazine's.",
        js: "function canConstruct(note, magazine) {\n  const count = (s) => { const m = {}; for (const c of s) m[c] = (m[c] || 0) + 1; return m; };\n  const need = count(note), have = count(magazine);\n  for (const c in need) if ((have[c] || 0) < need[c]) return false;\n  return true;\n}\n",
        ts: "function canConstruct(note: string, magazine: string): boolean {\n  const count = (s: string) => { const m: Record<string, number> = {}; for (const c of s) m[c] = (m[c] || 0) + 1; return m; };\n  const need = count(note), have = count(magazine);\n  for (const c in need) if ((have[c] || 0) < need[c]) return false;\n  return true;\n}\n",
        time: "O(n + m)",
        space: "O(k)",
      },
    ],
  },
  {
    id: "fc-find-difference",
    slug: "find-the-added-value",
    title: "Find the Added Value",
    difficulty: "medium",
    patternIds: P,
    statement:
      "List `b` contains every value of list `a` (shuffled) plus exactly one extra value. Return the extra value.",
    examples: [
      { input: "[1,2,3], [1,3,2,4]", output: "4" },
      { input: "[], [5]", output: "5" },
      { input: "[1], [1,1]", output: "1" },
    ],
    constraints: ["b.length === a.length + 1"],
    functionName: "findDifference",
    starter: {
      js: "function findDifference(a, b) {\n  // The one extra value in b.\n}\n",
      ts: "function findDifference(a: number[], b: number[]): number {\n  // The one extra value in b.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3], [1, 3, 2, 4]], expected: 4 },
      { args: [[], [5]], expected: 5 },
      { args: [[1], [1, 1]], expected: 1 },
    ],
    hidden: [
      { args: [[1, 1], [1, 1, 2]], expected: 2 },
      { args: [[2, 2], [2, 2, 2]], expected: 2 },
      { args: [[0], [0, 5]], expected: 5 },
      { args: [[3, 4], [4, 3, 9]], expected: 9 },
      { args: [[], [0]], expected: 0 },
      { args: [[7, 7, 7], [7, 7, 7, 8]], expected: 8 },
    ],
    hints: [
      "Count what's in a, then walk b spending those counts.",
      "The first value in b with no count left is the extra one.",
      "Or simply subtract the sums: sum(b) - sum(a).",
    ],
    solutions: [
      {
        label: "Frequency difference",
        approach: "Spend a's counts against b; the leftover is the extra.",
        js: "function findDifference(a, b) {\n  const counts = new Map();\n  for (const v of a) counts.set(v, (counts.get(v) || 0) + 1);\n  for (const v of b) {\n    const c = counts.get(v) || 0;\n    if (c === 0) return v;\n    counts.set(v, c - 1);\n  }\n  return -1;\n}\n",
        ts: "function findDifference(a: number[], b: number[]): number {\n  const counts = new Map<number, number>();\n  for (const v of a) counts.set(v, (counts.get(v) || 0) + 1);\n  for (const v of b) {\n    const c = counts.get(v) || 0;\n    if (c === 0) return v;\n    counts.set(v, c - 1);\n  }\n  return -1;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Sum difference",
        approach: "The extra value is exactly sum(b) − sum(a).",
        js: "function findDifference(a, b) {\n  const sum = (arr) => arr.reduce((s, v) => s + v, 0);\n  return sum(b) - sum(a);\n}\n",
        ts: "function findDifference(a: number[], b: number[]): number {\n  const sum = (arr: number[]) => arr.reduce((s, v) => s + v, 0);\n  return sum(b) - sum(a);\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "fc-top-k-frequent",
    slug: "top-k-frequent",
    title: "Top K Frequent",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the `k` most frequently occurring values, sorted ascending. When counts tie, prefer the smaller value.",
    examples: [
      { input: "[1,1,1,2,2,3], 2", output: "[1,2]" },
      { input: "[1], 1", output: "[1]" },
      { input: "[1,2], 2", output: "[1,2]" },
    ],
    constraints: ["1 <= k <= number of distinct values"],
    functionName: "topKFrequent",
    starter: {
      js: "function topKFrequent(nums, k) {\n  // k most frequent values, returned sorted ascending.\n}\n",
      ts: "function topKFrequent(nums: number[], k: number): number[] {\n  // k most frequent values, returned sorted ascending.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 1, 1, 2, 2, 3], 2], expected: [1, 2] },
      { args: [[1], 1], expected: [1] },
      { args: [[1, 2], 2], expected: [1, 2] },
    ],
    hidden: [
      { args: [[1, 1, 2, 2, 3], 2], expected: [1, 2] },
      { args: [[4, 4, 4, 5, 5, 6], 1], expected: [4] },
      { args: [[1, 2, 3], 3], expected: [1, 2, 3] },
      { args: [[5, 5, 4, 4, 3], 2], expected: [4, 5] },
      { args: [[9], 1], expected: [9] },
      { args: [[1, 1, 2], 1], expected: [1] },
    ],
    hints: [
      "Count occurrences, then rank the distinct values by count.",
      "Sort entries by count descending, breaking ties by the smaller value.",
      "Take the first k, then sort those values ascending for the result.",
    ],
    solutions: [
      {
        label: "Count then sort",
        approach: "Rank by count (ties to the smaller value), take k, sort ascending.",
        js: "function topKFrequent(nums, k) {\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  const entries = [...counts.entries()];\n  entries.sort((a, b) => b[1] - a[1] || a[0] - b[0]);\n  return entries.slice(0, k).map((e) => e[0]).sort((a, b) => a - b);\n}\n",
        ts: "function topKFrequent(nums: number[], k: number): number[] {\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  const entries = [...counts.entries()];\n  entries.sort((a, b) => b[1] - a[1] || a[0] - b[0]);\n  return entries.slice(0, k).map((e) => e[0]).sort((a, b) => a - b);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Bucket by count",
        approach: "Group values by frequency, then read buckets from the highest count down.",
        js: "function topKFrequent(nums, k) {\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  const buckets = [];\n  for (const [v, c] of counts) { (buckets[c] = buckets[c] || []).push(v); }\n  const out = [];\n  for (let c = buckets.length - 1; c >= 0 && out.length < k; c--) {\n    if (!buckets[c]) continue;\n    for (const v of buckets[c].sort((a, b) => a - b)) {\n      if (out.length < k) out.push(v);\n    }\n  }\n  return out.sort((a, b) => a - b);\n}\n",
        ts: "function topKFrequent(nums: number[], k: number): number[] {\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  const buckets: number[][] = [];\n  for (const [v, c] of counts) { (buckets[c] = buckets[c] || []).push(v); }\n  const out: number[] = [];\n  for (let c = buckets.length - 1; c >= 0 && out.length < k; c--) {\n    if (!buckets[c]) continue;\n    for (const v of buckets[c].sort((a, b) => a - b)) {\n      if (out.length < k) out.push(v);\n    }\n  }\n  return out.sort((a, b) => a - b);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fc-four-sum-count",
    slug: "four-sum-count",
    title: "Four Sum Count",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given four lists, return how many tuples `(i, j, k, l)` satisfy `a[i] + b[j] + c[k] + d[l] === 0`.",
    examples: [
      { input: "[1,2], [-2,-1], [-1,2], [0,2]", output: "2" },
      { input: "[0], [0], [0], [0]", output: "1" },
      { input: "[], [], [], []", output: "0" },
    ],
    constraints: ["all four lists have the same length", "0 <= length <= 500"],
    functionName: "fourSumCount",
    starter: {
      js: "function fourSumCount(a, b, c, d) {\n  // Count tuples summing to zero.\n}\n",
      ts: "function fourSumCount(a: number[], b: number[], c: number[], d: number[]): number {\n  // Count tuples summing to zero.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2], [-2, -1], [-1, 2], [0, 2]], expected: 2 },
      { args: [[0], [0], [0], [0]], expected: 1 },
      { args: [[], [], [], []], expected: 0 },
    ],
    hidden: [
      { args: [[1], [-1], [0], [0]], expected: 1 },
      { args: [[1, 1], [-1, -1], [0], [0]], expected: 4 },
      { args: [[2], [3], [-4], [-1]], expected: 1 },
      { args: [[1], [1], [1], [1]], expected: 0 },
      { args: [[0, 0], [0, 0], [0, 0], [0, 0]], expected: 16 },
      { args: [[1, -1], [1, -1], [1, -1], [1, -1]], expected: 6 },
    ],
    hints: [
      "Checking all four loops is O(n⁴) — split the problem in half.",
      "Count every sum of a pair from the first two lists in a map.",
      "For each pair from the last two lists, add the count of the negated sum.",
    ],
    solutions: [
      {
        label: "Meet in the middle with a hash map",
        approach: "Tally a+b sums, then look up −(c+d) for each pair.",
        js: "function fourSumCount(a, b, c, d) {\n  const sums = new Map();\n  for (const x of a) for (const y of b) {\n    const s = x + y;\n    sums.set(s, (sums.get(s) || 0) + 1);\n  }\n  let count = 0;\n  for (const x of c) for (const y of d) count += sums.get(-(x + y)) || 0;\n  return count;\n}\n",
        ts: "function fourSumCount(a: number[], b: number[], c: number[], d: number[]): number {\n  const sums = new Map<number, number>();\n  for (const x of a) for (const y of b) {\n    const s = x + y;\n    sums.set(s, (sums.get(s) || 0) + 1);\n  }\n  let count = 0;\n  for (const x of c) for (const y of d) count += sums.get(-(x + y)) || 0;\n  return count;\n}\n",
        time: "O(n²)",
        space: "O(n²)",
      },
      {
        label: "Brute force",
        approach: "Try every combination of one value from each list.",
        js: "function fourSumCount(a, b, c, d) {\n  let count = 0;\n  for (const w of a) for (const x of b) for (const y of c) for (const z of d) {\n    if (w + x + y + z === 0) count++;\n  }\n  return count;\n}\n",
        ts: "function fourSumCount(a: number[], b: number[], c: number[], d: number[]): number {\n  let count = 0;\n  for (const w of a) for (const x of b) for (const y of c) for (const z of d) {\n    if (w + x + y + z === 0) count++;\n  }\n  return count;\n}\n",
        time: "O(n⁴)",
        space: "O(1)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "fc-count-distinct",
    slug: "count-distinct",
    title: "Count Distinct Values",
    difficulty: "easy",
    patternIds: P,
    statement: "Return how many distinct values the list contains.",
    examples: [
      { input: "[1,2,2,3]", output: "3" },
      { input: "[]", output: "0" },
      { input: "[5]", output: "1" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "countDistinct",
    starter: {
      js: "function countDistinct(nums) {\n  // Number of distinct values.\n}\n",
      ts: "function countDistinct(nums: number[]): number {\n  // Number of distinct values.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 2, 3]], expected: 3 },
      { args: [[]], expected: 0 },
      { args: [[5]], expected: 1 },
    ],
    hidden: [
      { args: [[1, 1, 1]], expected: 1 },
      { args: [[1, 2, 3]], expected: 3 },
      { args: [[0, -1, 0]], expected: 2 },
      { args: [[7]], expected: 1 },
      { args: [[2, 2, 3, 3, 4]], expected: 3 },
      { args: [[9, 9]], expected: 1 },
    ],
    hints: [
      "A set automatically drops duplicates.",
      "The set's size is the answer.",
      "return new Set(nums).size.",
    ],
    solutions: [
      {
        label: "Set size",
        approach: "Build a set and read its size.",
        js: "function countDistinct(nums) {\n  return new Set(nums).size;\n}\n",
        ts: "function countDistinct(nums: number[]): number {\n  return new Set(nums).size;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Count map keys",
        approach: "Tally values and count the keys.",
        js: "function countDistinct(nums) {\n  const seen = {};\n  let count = 0;\n  for (const n of nums) if (!seen[n]) { seen[n] = true; count++; }\n  return count;\n}\n",
        ts: "function countDistinct(nums: number[]): number {\n  const seen: Record<number, boolean> = {};\n  let count = 0;\n  for (const n of nums) if (!seen[n]) { seen[n] = true; count++; }\n  return count;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fc-sum-unique",
    slug: "sum-of-unique",
    title: "Sum of Unique Values",
    difficulty: "easy",
    patternIds: P,
    statement: "Return the sum of the values that appear exactly once in the list.",
    examples: [
      { input: "[1,2,2,3]", output: "4" },
      { input: "[]", output: "0" },
      { input: "[1,1]", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "sumOfUnique",
    starter: {
      js: "function sumOfUnique(nums) {\n  // Sum values whose count is exactly 1.\n}\n",
      ts: "function sumOfUnique(nums: number[]): number {\n  // Sum values whose count is exactly 1.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 2, 3]], expected: 4 },
      { args: [[]], expected: 0 },
      { args: [[1, 1]], expected: 0 },
    ],
    hidden: [
      { args: [[1, 2, 3]], expected: 6 },
      { args: [[5, 5, 5]], expected: 0 },
      { args: [[0, 1]], expected: 1 },
      { args: [[-1, -1, 2]], expected: 2 },
      { args: [[4]], expected: 4 },
      { args: [[1, 1, 2, 2, 3]], expected: 3 },
    ],
    hints: [
      "Count first, then add up only the values counted once.",
      "Iterate the count map, not the original list, to avoid double counting.",
      "for ([v, c] of counts) if (c === 1) total += v.",
    ],
    solutions: [
      {
        label: "Count then sum",
        approach: "Add values whose tally is exactly one.",
        js: "function sumOfUnique(nums) {\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  let total = 0;\n  for (const [v, c] of counts) if (c === 1) total += v;\n  return total;\n}\n",
        ts: "function sumOfUnique(nums: number[]): number {\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  let total = 0;\n  for (const [v, c] of counts) if (c === 1) total += v;\n  return total;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Filter uniques",
        approach: "Keep values whose first and last index match, then sum.",
        js: "function sumOfUnique(nums) {\n  return nums.filter((v) => nums.indexOf(v) === nums.lastIndexOf(v)).reduce((s, v) => s + v, 0);\n}\n",
        ts: "function sumOfUnique(nums: number[]): number {\n  return nums.filter((v) => nums.indexOf(v) === nums.lastIndexOf(v)).reduce((s, v) => s + v, 0);\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fc-longest-palindrome",
    slug: "longest-palindrome-length",
    title: "Longest Palindrome Length",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Using the characters of the string (each at most as many times as it appears), return the length of the longest palindrome you could build. Case matters.",
    examples: [
      { input: '"abccccdd"', output: "7" },
      { input: '"a"', output: "1" },
      { input: '""', output: "0" },
    ],
    constraints: ["0 <= s.length <= 10000"],
    functionName: "longestPalindromeLength",
    starter: {
      js: "function longestPalindromeLength(s) {\n  // Longest palindrome buildable from these characters.\n}\n",
      ts: "function longestPalindromeLength(s: string): number {\n  // Longest palindrome buildable from these characters.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["abccccdd"], expected: 7 },
      { args: ["a"], expected: 1 },
      { args: [""], expected: 0 },
    ],
    hidden: [
      { args: ["bb"], expected: 2 },
      { args: ["abc"], expected: 1 },
      { args: ["aaabb"], expected: 5 },
      { args: ["Aa"], expected: 1 },
      { args: ["aabbcc"], expected: 6 },
      { args: ["abcdef"], expected: 1 },
    ],
    hints: [
      "Characters pair up around the centre — only even counts fully contribute.",
      "Add the largest even number ≤ each count; then add 1 if any count was odd (a centre).",
      "len += c - (c % 2); if any c is odd, len += 1.",
    ],
    solutions: [
      {
        label: "Pair up counts",
        approach: "Use even portions of every count, plus one odd character as the centre.",
        js: "function longestPalindromeLength(s) {\n  const counts = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  let len = 0, hasOdd = false;\n  for (const k in counts) {\n    const v = counts[k];\n    len += v - (v % 2);\n    if (v % 2 === 1) hasOdd = true;\n  }\n  return len + (hasOdd ? 1 : 0);\n}\n",
        ts: "function longestPalindromeLength(s: string): number {\n  const counts: Record<string, number> = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  let len = 0, hasOdd = false;\n  for (const k in counts) {\n    const v = counts[k];\n    len += v - (v % 2);\n    if (v % 2 === 1) hasOdd = true;\n  }\n  return len + (hasOdd ? 1 : 0);\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Count odd characters",
        approach: "The answer is the length minus (odd-count characters − 1), when any exist.",
        js: "function longestPalindromeLength(s) {\n  const counts = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  let odds = 0;\n  for (const k in counts) if (counts[k] % 2 === 1) odds++;\n  return odds > 0 ? s.length - odds + 1 : s.length;\n}\n",
        ts: "function longestPalindromeLength(s: string): number {\n  const counts: Record<string, number> = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  let odds = 0;\n  for (const k in counts) if (counts[k] % 2 === 1) odds++;\n  return odds > 0 ? s.length - odds + 1 : s.length;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
    ],
  },
  {
    id: "fc-is-isomorphic",
    slug: "isomorphic-strings",
    title: "Isomorphic Strings",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return `true` if the characters of `s` can be consistently replaced to produce `t` — each character maps to exactly one other, and no two characters map to the same one.",
    examples: [
      { input: '"egg", "add"', output: "true" },
      { input: '"foo", "bar"', output: "false" },
      { input: '"", ""', output: "true" },
    ],
    constraints: ["0 <= lengths <= 10000"],
    functionName: "isIsomorphic",
    starter: {
      js: "function isIsomorphic(s, t) {\n  // True if a consistent one-to-one character mapping exists.\n}\n",
      ts: "function isIsomorphic(s: string, t: string): boolean {\n  // True if a consistent one-to-one character mapping exists.\n  return false;\n}\n",
    },
    visible: [
      { args: ["egg", "add"], expected: true },
      { args: ["foo", "bar"], expected: false },
      { args: ["", ""], expected: true },
    ],
    hidden: [
      { args: ["paper", "title"], expected: true },
      { args: ["ab", "aa"], expected: false },
      { args: ["a", "b"], expected: true },
      { args: ["abc", "xyz"], expected: true },
      { args: ["aab", "xxy"], expected: true },
      { args: ["badc", "baba"], expected: false },
    ],
    hints: [
      "Track the mapping in both directions to keep it one-to-one.",
      "If a character already maps somewhere else — or the target is already taken — it fails.",
      "Two maps: s→t and t→s, checked at every position.",
    ],
    solutions: [
      {
        label: "Two-way mapping",
        approach: "Maintain forward and reverse maps and verify consistency.",
        js: "function isIsomorphic(s, t) {\n  if (s.length !== t.length) return false;\n  const fwd = {}, rev = {};\n  for (let i = 0; i < s.length; i++) {\n    const a = s[i], b = t[i];\n    if (fwd[a] === undefined && rev[b] === undefined) { fwd[a] = b; rev[b] = a; }\n    else if (fwd[a] !== b || rev[b] !== a) return false;\n  }\n  return true;\n}\n",
        ts: "function isIsomorphic(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n  const fwd: Record<string, string> = {}, rev: Record<string, string> = {};\n  for (let i = 0; i < s.length; i++) {\n    const a = s[i], b = t[i];\n    if (fwd[a] === undefined && rev[b] === undefined) { fwd[a] = b; rev[b] = a; }\n    else if (fwd[a] !== b || rev[b] !== a) return false;\n  }\n  return true;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Compare first-index patterns",
        approach: "Two strings are isomorphic when their first-occurrence patterns match.",
        js: "function isIsomorphic(s, t) {\n  if (s.length !== t.length) return false;\n  const pattern = (str) => [...str].map((c) => str.indexOf(c)).join(',');\n  return pattern(s) === pattern(t);\n}\n",
        ts: "function isIsomorphic(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n  const pattern = (str: string) => [...str].map((c) => str.indexOf(c)).join(',');\n  return pattern(s) === pattern(t);\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
];

export const frequencyCounterProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const frequencyCounterMcqs: QuizQuestion[] = [
  {
    id: "s4-fc-time",
    kind: "mcq",
    prompt: "Counting how often each value occurs in a list of n items with a hash map takes:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "One pass with O(1) average updates per item gives linear time.",
  },
  {
    id: "s4-fc-space",
    kind: "mcq",
    prompt: "A frequency map over a fixed alphabet (say the 26 lowercase letters) uses:",
    options: ["O(1) extra space", "O(n) extra space", "O(log n) extra space", "O(n²) extra space"],
    answerIndex: 0,
    explanation: "The map size is bounded by the alphabet, not by the input length.",
  },
];

export const frequencyCounterModule: Module = {
  id: "m-pat-frequency-counter",
  stageId: S,
  title: "Frequency Counter & Hash Patterns",
  kind: "patternModule",
  summary: "Tally things in a map to replace nested loops with a single pass.",
  lessonSections: [
    {
      heading: "Count first, decide later",
      body: `The frequency-counter pattern builds a map from value → count in one pass, then answers questions from that map. It's the standard way to turn an **O(n²)** comparison of two collections into **O(n)**.

\`\`\`js
function counts(list) {
  const m = {};
  for (const x of list) m[x] = (m[x] || 0) + 1;
  return m;
}
console.log(counts(['a', 'b', 'a'])); // { a: 2, b: 1 }
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for a frequency counter / hash map when the problem mentions:

- **anagrams**, permutations, or "same characters",
- "appears once / most often / k most frequent",
- comparing two collections for **contents** rather than order,
- "have I seen this before?" — a **set** is a counter with counts of 1,
- pairing values against a **complement** (two-sum style lookups).`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Build counts
const counts = new Map<number, number>();
for (const x of nums) counts.set(x, (counts.get(x) ?? 0) + 1);

// Spend counts against a second collection
for (const x of other) {
  const c = counts.get(x) ?? 0;
  if (c === 0) return false;      // not available
  counts.set(x, c - 1);
}
\`\`\`

**Pitfalls:** using \`if (counts[x])\` treats a count of 0 like "missing" — usually fine, but be deliberate; object keys are strings, so numeric keys get coerced (use a \`Map\` when that matters); iterate the **count map** rather than the original list when summing per-value results, or you'll double count. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "fc-char-frequency",
  drillProblemIds: [
    "fc-char-frequency",
    "fc-first-unique-number",
    "fc-can-construct",
    "fc-find-difference",
    "fc-top-k-frequent",
    "fc-four-sum-count",
  ],
  testPoolProblemIds: [
    "fc-count-distinct",
    "fc-sum-unique",
    "fc-longest-palindrome",
    "fc-is-isomorphic",
  ],
  complexityQuestionIds: ["s4-fc-time", "s4-fc-space"],
  badgeId: "badge-pat-frequency-counter",
  prerequisiteModuleIds: [],
};
