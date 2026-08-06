import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "./factory";

const S = "dsa-s1";

/** Held-out checkpoint pool — never appears as a drill. */
const poolDrafts: ProblemDraft[] = [
  {
    id: "fc-range-sum",
    slug: "range-sum",
    title: "Range Sum",
    difficulty: "easy",
    statement: "Return the sum of every integer from `a` to `b`, inclusive (with `a <= b`).",
    examples: [
      { input: "1, 5", output: "15" },
      { input: "3, 3", output: "3" },
      { input: "0, 4", output: "10" },
    ],
    constraints: ["0 <= a <= b <= 100000"],
    functionName: "rangeSum",
    starter: {
      js: "function rangeSum(a, b) {\n  // Sum a + (a+1) + ... + b.\n}\n",
      ts: "function rangeSum(a: number, b: number): number {\n  // Sum a + (a+1) + ... + b.\n  return 0;\n}\n",
    },
    visible: [
      { args: [1, 5], expected: 15 },
      { args: [3, 3], expected: 3 },
      { args: [0, 4], expected: 10 },
    ],
    hidden: [
      { args: [1, 1], expected: 1 },
      { args: [10, 12], expected: 33 },
      { args: [0, 0], expected: 0 },
      { args: [5, 10], expected: 45 },
      { args: [1, 100], expected: 5050 },
      { args: [2, 4], expected: 9 },
    ],
    hints: [
      "This is the sum of a contiguous run of integers.",
      "Either loop from a to b, or subtract two triangular numbers.",
      "sum = 0; for (let i = a; i <= b; i++) sum += i; return sum.",
    ],
    solutions: [
      {
        label: "Loop",
        approach: "Add every integer in the range.",
        js: "function rangeSum(a, b) {\n  let sum = 0;\n  for (let i = a; i <= b; i++) sum += i;\n  return sum;\n}\n",
        ts: "function rangeSum(a: number, b: number): number {\n  let sum = 0;\n  for (let i = a; i <= b; i++) sum += i;\n  return sum;\n}\n",
        time: "O(b - a)",
        space: "O(1)",
      },
      {
        label: "Triangular difference",
        approach: "Sum 0..b minus sum 0..a-1 using the closed form.",
        js: "function rangeSum(a, b) {\n  const tri = (x) => (x * (x + 1)) / 2;\n  return tri(b) - tri(a - 1);\n}\n",
        ts: "function rangeSum(a: number, b: number): number {\n  const tri = (x: number) => (x * (x + 1)) / 2;\n  return tri(b) - tri(a - 1);\n}\n",
        time: "O(1)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "fc-count-greater",
    slug: "count-greater",
    title: "Count Greater Than",
    difficulty: "easy",
    statement: "Return how many values in the list are strictly greater than `x`.",
    examples: [
      { input: "[1,5,3], 2", output: "2" },
      { input: "[], 0", output: "0" },
      { input: "[1,2,3], 5", output: "0" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "countGreater",
    starter: {
      js: "function countGreater(values, x) {\n  // Count values strictly greater than x.\n}\n",
      ts: "function countGreater(values: number[], x: number): number {\n  // Count values strictly greater than x.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 5, 3], 2], expected: 2 },
      { args: [[], 0], expected: 0 },
      { args: [[1, 2, 3], 5], expected: 0 },
    ],
    hidden: [
      { args: [[5, 5, 5], 5], expected: 0 },
      { args: [[5, 6, 7], 5], expected: 2 },
      { args: [[-1, 0, 1], 0], expected: 1 },
      { args: [[10], 3], expected: 1 },
      { args: [[1, 2, 3, 4], 0], expected: 4 },
      { args: [[3, 3, 4], 3], expected: 1 },
    ],
    hints: [
      "Strictly greater means `>`, not `>=`.",
      "Scan once and increment a counter when the value exceeds x.",
      "return values.filter((v) => v > x).length.",
    ],
    solutions: [
      {
        label: "Count in a loop",
        approach: "Increment for each value above x.",
        js: "function countGreater(values, x) {\n  let count = 0;\n  for (const v of values) if (v > x) count++;\n  return count;\n}\n",
        ts: "function countGreater(values: number[], x: number): number {\n  let count = 0;\n  for (const v of values) if (v > x) count++;\n  return count;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Filter length",
        approach: "Filter to the qualifying values and read the length.",
        js: "function countGreater(values, x) {\n  return values.filter((v) => v > x).length;\n}\n",
        ts: "function countGreater(values: number[], x: number): number {\n  return values.filter((v) => v > x).length;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fc-second-largest",
    slug: "second-largest",
    title: "Second Largest",
    difficulty: "medium",
    statement:
      "Return the second largest **distinct** value in the list, or -1 if there is no such value.",
    examples: [
      { input: "[3,1,2]", output: "2" },
      { input: "[5,5]", output: "-1", explanation: "Only one distinct value." },
      { input: "[10,9]", output: "9" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "secondLargest",
    starter: {
      js: "function secondLargest(values) {\n  // Return the 2nd largest distinct value, or -1.\n}\n",
      ts: "function secondLargest(values: number[]): number {\n  // Return the 2nd largest distinct value, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[3, 1, 2]], expected: 2 },
      { args: [[5, 5]], expected: -1 },
      { args: [[10, 9]], expected: 9 },
    ],
    hidden: [
      { args: [[]], expected: -1 },
      { args: [[7]], expected: -1 },
      { args: [[4, 4, 5, 5]], expected: 4 },
      { args: [[1, 2, 3, 4]], expected: 3 },
      { args: [[-1, -2, -3]], expected: -2 },
      { args: [[100, 50, 100]], expected: 50 },
    ],
    hints: [
      "Duplicates of the maximum should not count as the runner-up.",
      "Track the largest and second-largest distinct values in one pass, or dedupe then sort.",
      "Keep `first` and `second`; update carefully so equal-to-first values are skipped.",
    ],
    solutions: [
      {
        label: "Dedupe and sort",
        approach: "Remove duplicates, sort descending, read the second element.",
        js: "function secondLargest(values) {\n  const distinct = [...new Set(values)].sort((a, b) => b - a);\n  return distinct.length >= 2 ? distinct[1] : -1;\n}\n",
        ts: "function secondLargest(values: number[]): number {\n  const distinct = [...new Set(values)].sort((a, b) => b - a);\n  return distinct.length >= 2 ? distinct[1] : -1;\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Two trackers",
        approach: "Maintain the top two distinct values while scanning.",
        js: "function secondLargest(values) {\n  let first = -Infinity;\n  let second = -Infinity;\n  for (const v of values) {\n    if (v > first) {\n      second = first;\n      first = v;\n    } else if (v < first && v > second) {\n      second = v;\n    }\n  }\n  return second === -Infinity ? -1 : second;\n}\n",
        ts: "function secondLargest(values: number[]): number {\n  let first = -Infinity;\n  let second = -Infinity;\n  for (const v of values) {\n    if (v > first) {\n      second = first;\n      first = v;\n    } else if (v < first && v > second) {\n      second = v;\n    }\n  }\n  return second === -Infinity ? -1 : second;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "fc-is-palindrome",
    slug: "is-palindrome",
    title: "Is It a Palindrome?",
    difficulty: "medium",
    statement:
      "Return `true` if the text reads the same forwards and backwards, comparing characters exactly (case matters). The empty string is a palindrome.",
    examples: [
      { input: '"racecar"', output: "true" },
      { input: '"hello"', output: "false" },
      { input: '""', output: "true" },
    ],
    constraints: ["0 <= text.length <= 10000"],
    functionName: "isPalindrome",
    starter: {
      js: "function isPalindrome(text) {\n  // Return true if text reads the same both ways.\n}\n",
      ts: "function isPalindrome(text: string): boolean {\n  // Return true if text reads the same both ways.\n  return false;\n}\n",
    },
    visible: [
      { args: ["racecar"], expected: true },
      { args: ["hello"], expected: false },
      { args: [""], expected: true },
    ],
    hidden: [
      { args: ["a"], expected: true },
      { args: ["ab"], expected: false },
      { args: ["abba"], expected: true },
      { args: ["Aba"], expected: false },
      { args: ["12321"], expected: true },
      { args: ["1231"], expected: false },
    ],
    hints: [
      "Compare the first character with the last, then work inward.",
      "Use two indices moving toward each other; any mismatch means not a palindrome.",
      "let i=0, j=len-1; while (i<j) { if (text[i]!==text[j]) return false; i++; j--; } return true.",
    ],
    solutions: [
      {
        label: "Two pointers",
        approach: "Walk inward from both ends comparing characters.",
        js: "function isPalindrome(text) {\n  let i = 0;\n  let j = text.length - 1;\n  while (i < j) {\n    if (text[i] !== text[j]) return false;\n    i++;\n    j--;\n  }\n  return true;\n}\n",
        ts: "function isPalindrome(text: string): boolean {\n  let i = 0;\n  let j = text.length - 1;\n  while (i < j) {\n    if (text[i] !== text[j]) return false;\n    i++;\n    j--;\n  }\n  return true;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Reverse and compare",
        approach: "Build the reverse and check string equality.",
        js: "function isPalindrome(text) {\n  return text === text.split('').reverse().join('');\n}\n",
        ts: "function isPalindrome(text: string): boolean {\n  return text === text.split('').reverse().join('');\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fc-rotate-left",
    slug: "rotate-left",
    title: "Rotate Left",
    difficulty: "medium",
    statement:
      "Return the list rotated left by `k` positions. `k` may be larger than the list length. An empty list stays empty.",
    examples: [
      { input: "[1,2,3,4,5], 2", output: "[3,4,5,1,2]" },
      { input: "[1,2,3], 0", output: "[1,2,3]" },
      { input: "[1,2,3], 3", output: "[1,2,3]", explanation: "A full rotation returns the original." },
    ],
    constraints: ["0 <= values.length <= 10000", "0 <= k <= 1000000"],
    functionName: "rotateLeft",
    starter: {
      js: "function rotateLeft(values, k) {\n  // Rotate the array left by k positions.\n}\n",
      ts: "function rotateLeft(values: number[], k: number): number[] {\n  // Rotate the array left by k positions.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5], 2], expected: [3, 4, 5, 1, 2] },
      { args: [[1, 2, 3], 0], expected: [1, 2, 3] },
      { args: [[1, 2, 3], 3], expected: [1, 2, 3] },
    ],
    hidden: [
      { args: [[], 2], expected: [] },
      { args: [[1], 5], expected: [1] },
      { args: [[1, 2], 3], expected: [2, 1] },
      { args: [[1, 2, 3, 4], 1], expected: [2, 3, 4, 1] },
      { args: [[1, 2, 3, 4], 4], expected: [1, 2, 3, 4] },
      { args: [[1, 2, 3, 4, 5], 7], expected: [3, 4, 5, 1, 2] },
    ],
    hints: [
      "Rotating by the length brings you back to the start — so only `k % length` matters.",
      "Take the slice from the effective offset and append the front slice behind it.",
      "const s = k % n; return values.slice(s).concat(values.slice(0, s)).",
    ],
    solutions: [
      {
        label: "Slice and concat",
        approach: "Reduce k modulo the length, then splice the two halves.",
        js: "function rotateLeft(values, k) {\n  const n = values.length;\n  if (n === 0) return [];\n  const s = k % n;\n  return values.slice(s).concat(values.slice(0, s));\n}\n",
        ts: "function rotateLeft(values: number[], k: number): number[] {\n  const n = values.length;\n  if (n === 0) return [];\n  const s = k % n;\n  return values.slice(s).concat(values.slice(0, s));\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Shift one at a time",
        approach: "Move the front element to the back, k mod n times.",
        js: "function rotateLeft(values, k) {\n  const n = values.length;\n  if (n === 0) return [];\n  const out = [...values];\n  const steps = k % n;\n  for (let i = 0; i < steps; i++) out.push(out.shift());\n  return out;\n}\n",
        ts: "function rotateLeft(values: number[], k: number): number[] {\n  const n = values.length;\n  if (n === 0) return [];\n  const out = [...values];\n  const steps = k % n;\n  for (let i = 0; i < steps; i++) out.push(out.shift() as number);\n  return out;\n}\n",
        time: "O(n·k)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fc-running-total",
    slug: "running-total",
    title: "Running Total",
    difficulty: "medium",
    statement:
      "Return a new list where each position holds the sum of all values up to and including that position (a prefix-sum).",
    examples: [
      { input: "[1,2,3]", output: "[1,3,6]" },
      { input: "[]", output: "[]" },
      { input: "[5]", output: "[5]" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "runningTotal",
    starter: {
      js: "function runningTotal(values) {\n  // Return the prefix sums of values.\n}\n",
      ts: "function runningTotal(values: number[]): number[] {\n  // Return the prefix sums of values.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [1, 3, 6] },
      { args: [[]], expected: [] },
      { args: [[5]], expected: [5] },
    ],
    hidden: [
      { args: [[1, 1, 1]], expected: [1, 2, 3] },
      { args: [[2, -2, 2]], expected: [2, 0, 2] },
      { args: [[0, 0, 0]], expected: [0, 0, 0] },
      { args: [[10]], expected: [10] },
      { args: [[-1, -1]], expected: [-1, -2] },
      { args: [[3, 4, 5]], expected: [3, 7, 12] },
    ],
    hints: [
      "Each output value is the previous output value plus the current input.",
      "Keep a running sum and push it after adding each element.",
      "let sum = 0; for v: sum += v; out.push(sum);",
    ],
    solutions: [
      {
        label: "Running sum",
        approach: "Accumulate and emit the total at each step.",
        js: "function runningTotal(values) {\n  const out = [];\n  let sum = 0;\n  for (const v of values) {\n    sum += v;\n    out.push(sum);\n  }\n  return out;\n}\n",
        ts: "function runningTotal(values: number[]): number[] {\n  const out: number[] = [];\n  let sum = 0;\n  for (const v of values) {\n    sum += v;\n    out.push(sum);\n  }\n  return out;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Map with carry",
        approach: "Carry the accumulated sum across a map.",
        js: "function runningTotal(values) {\n  let sum = 0;\n  return values.map((v) => (sum += v));\n}\n",
        ts: "function runningTotal(values: number[]): number[] {\n  let sum = 0;\n  return values.map((v) => (sum += v));\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
];

export const foundationsPool: Problem[] = poolDrafts.map((d) => mkProblem(S, d));

/** Complexity MCQs drawn into the Foundations checkpoint test. */
export const foundationsComplexityQuestions: QuizQuestion[] = [
  {
    id: "cx-single-scan",
    kind: "mcq",
    prompt: "You add up every element of an array with a single loop. What is the time complexity?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "You touch each of the n elements exactly once, so the work grows linearly with n.",
  },
  {
    id: "cx-nested-loops",
    kind: "mcq",
    prompt: "Two loops, each running from 0 to n and one nested inside the other. What is the time complexity?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
    answerIndex: 2,
    explanation: "For each of the n outer iterations you do n inner iterations: n × n = n².",
  },
  {
    id: "cx-binary-search",
    kind: "mcq",
    prompt: "Binary search on a sorted array halves the search space each step. Its time complexity is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answerIndex: 1,
    explanation: "Halving repeatedly means about log₂(n) steps before the range is empty.",
  },
  {
    id: "cx-hashset-dupes",
    kind: "mcq",
    prompt: "Detecting duplicates by inserting into a hash set and checking membership runs in what average time?",
    options: ["O(1)", "O(n)", "O(n²)", "O(2ⁿ)"],
    answerIndex: 1,
    explanation: "Each of n insert/lookup operations is O(1) on average, giving O(n) overall.",
  },
  {
    id: "cx-closed-form-space",
    kind: "mcq",
    prompt: "Computing 1 + 2 + … + n with the formula n(n+1)/2 uses how much extra space?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 0,
    explanation: "It stores a fixed number of values regardless of n, so constant space.",
  },
];

export const foundationsCheckpointModule: Module = {
  id: "m-foundations-checkpoint",
  stageId: S,
  title: "Foundations Checkpoint",
  kind: "challengeTrack",
  summary:
    "Prove you've got the fundamentals: a held-out set of six problems plus complexity questions. Earns the Foundations badge.",
  lessonSections: [],
  drillProblemIds: [],
  testPoolProblemIds: poolDrafts.map((d) => d.id),
  complexityQuestionIds: [
    "cx-single-scan",
    "cx-nested-loops",
    "cx-binary-search",
    "cx-hashset-dupes",
    "cx-closed-form-space",
  ],
  badgeId: "badge-foundations",
  prerequisiteModuleIds: [
    "m-foundations-thinking",
    "m-foundations-bigo",
    "m-foundations-js",
    "m-foundations-ts",
    "m-foundations-math",
  ],
};
