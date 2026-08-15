import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s4";
const P = ["prefix-sum"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "ps-running-sum",
    slug: "running-sum",
    title: "Running Sum",
    difficulty: "easy",
    patternIds: P,
    statement: "Return the running (prefix) sum: each position holds the sum of all values up to and including it.",
    examples: [
      { input: "[1,2,3]", output: "[1,3,6]" },
      { input: "[]", output: "[]" },
      { input: "[5]", output: "[5]" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "runningSum",
    starter: {
      js: "function runningSum(nums) {\n  // Prefix sums.\n}\n",
      ts: "function runningSum(nums: number[]): number[] {\n  // Prefix sums.\n  return [];\n}\n",
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
      "Each output is the previous output plus the current value.",
      "Carry a running total and push it after adding each element.",
      "let sum = 0; for v: sum += v; out.push(sum).",
    ],
    walkthrough: [
      { title: "Track what the previous output means", body: "Each output position should equal the sum of the input values through that same position. Keep one running total for that accumulated sum." },
      { title: "Build a separate result", body: "Create an empty output array. As you read each number, add it to the running total and append the **new** total to the output." },
      { title: "Process left to right once", body: "A forward scan ensures that, before each append, the total contains exactly the prefix ending at the current value." },
      { title: "Return the built prefix list", body: "For an empty input, the loop never runs and the initially empty output is already correct." },
    ],
    solutions: [
      {
        label: "Running total",
        approach: "Accumulate and emit the total at each step.",
        js: "function runningSum(nums) {\n  const out = [];\n  let sum = 0;\n  for (const v of nums) { sum += v; out.push(sum); }\n  return out;\n}\n",
        ts: "function runningSum(nums: number[]): number[] {\n  const out: number[] = [];\n  let sum = 0;\n  for (const v of nums) { sum += v; out.push(sum); }\n  return out;\n}\n",
        commentedCode: {
          js: "function runningSum(nums) {\n  // Collect one prefix sum for each input position.\n  const out = [];\n  // No input values have been included yet.\n  let sum = 0;\n\n  // Extend the current prefix one number at a time.\n  for (const v of nums) {\n    // Include the current value in this prefix.\n    sum += v;\n    // Record the sum ending at this position.\n    out.push(sum);\n  }\n\n  // Return every prefix sum in input order.\n  return out;\n}\n",
          ts: "function runningSum(nums: number[]): number[] {\n  // Collect one prefix sum for each input position.\n  const out: number[] = [];\n  // No input values have been included yet.\n  let sum = 0;\n\n  // Extend the current prefix one number at a time.\n  for (const v of nums) {\n    // Include the current value in this prefix.\n    sum += v;\n    // Record the sum ending at this position.\n    out.push(sum);\n  }\n\n  // Return every prefix sum in input order.\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Map with carry",
        approach: "Carry the accumulated sum across a map.",
        js: "function runningSum(nums) {\n  let sum = 0;\n  return nums.map((v) => (sum += v));\n}\n",
        ts: "function runningSum(nums: number[]): number[] {\n  let sum = 0;\n  return nums.map((v) => (sum += v));\n}\n",
        commentedCode: {
          js: "function runningSum(nums) {\n  // Carry the prefix total between map callbacks.\n  let sum = 0;\n  // Update and return the running total for every input value.\n  return nums.map((v) => (sum += v));\n}\n",
          ts: "function runningSum(nums: number[]): number[] {\n  // Carry the prefix total between map callbacks.\n  let sum = 0;\n  // Update and return the running total for every input value.\n  return nums.map((v) => (sum += v));\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ps-range-sum-query",
    slug: "range-sum-query",
    title: "Range Sum Queries",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Given a list and a list of `[l, r]` queries, return the inclusive sum of each subrange. Precompute a prefix-sum array so each query is O(1).",
    examples: [
      { input: "[1,2,3,4], [[0,1],[1,3]]", output: "[3,9]" },
      { input: "[5], [[0,0]]", output: "[5]" },
      { input: "[1,2,3], []", output: "[]" },
    ],
    constraints: ["0 <= nums.length <= 10000", "0 <= l <= r < nums.length"],
    functionName: "rangeSums",
    starter: {
      js: "function rangeSums(nums, queries) {\n  // Inclusive sum for each [l, r].\n}\n",
      ts: "function rangeSums(nums: number[], queries: number[][]): number[] {\n  // Inclusive sum for each [l, r].\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4], [[0, 1], [1, 3]]], expected: [3, 9] },
      { args: [[5], [[0, 0]]], expected: [5] },
      { args: [[1, 2, 3], []], expected: [] },
    ],
    hidden: [
      { args: [[1, 2, 3, 4, 5], [[0, 4]]], expected: [15] },
      { args: [[1, 2, 3], [[0, 0], [2, 2]]], expected: [1, 3] },
      { args: [[2, 4, 6], [[1, 2]]], expected: [10] },
      { args: [[], []], expected: [] },
      { args: [[1, 1, 1, 1], [[0, 3], [1, 2]]], expected: [4, 2] },
      { args: [[-1, -2, -3], [[0, 2]]], expected: [-6] },
    ],
    hints: [
      "Build pre[i] = sum of the first i elements, so pre[0] = 0.",
      "The sum of [l, r] inclusive is pre[r+1] - pre[l].",
      "Precompute once in O(n), then answer every query in O(1).",
    ],
    walkthrough: [
      { title: "Precompute sums before answering", body: "There may be many ranges over the same list. Build one prefix array where `pre[i]` means the sum of the first `i` values, with a leading 0." },
      { title: "Translate an inclusive range", body: "For `[l, r]`, the prefix ending after `r` includes too much only by the sum before `l`. Subtract `pre[l]` from `pre[r + 1]`." },
      { title: "Apply the formula to every query", body: "Map each query to that difference. The precomputation is linear once; each query then uses two array reads and one subtraction." },
      { title: "Check boundary ranges", body: "The leading zero makes `l = 0` work naturally, and using `r + 1` keeps the right endpoint inclusive." },
    ],
    solutions: [
      {
        label: "Prefix array",
        approach: "Precompute cumulative sums, then difference per query.",
        js: "function rangeSums(nums, queries) {\n  const pre = [0];\n  for (let i = 0; i < nums.length; i++) pre.push(pre[i] + nums[i]);\n  return queries.map(([l, r]) => pre[r + 1] - pre[l]);\n}\n",
        ts: "function rangeSums(nums: number[], queries: number[][]): number[] {\n  const pre = [0];\n  for (let i = 0; i < nums.length; i++) pre.push(pre[i] + nums[i]);\n  return queries.map(([l, r]) => pre[r + 1] - pre[l]);\n}\n",
        commentedCode: {
          js: "function rangeSums(nums, queries) {\n  // pre[i] will equal the sum of the first i input values.\n  const pre = [0];\n\n  // Extend the prefix array one input value at a time.\n  for (let i = 0; i < nums.length; i++) {\n    // Add the current value to the sum through the previous position.\n    pre.push(pre[i] + nums[i]);\n  }\n\n  // Convert each inclusive range into the difference of two prefixes.\n  return queries.map(([l, r]) => pre[r + 1] - pre[l]);\n}\n",
          ts: "function rangeSums(nums: number[], queries: number[][]): number[] {\n  // pre[i] will equal the sum of the first i input values.\n  const pre: number[] = [0];\n\n  // Extend the prefix array one input value at a time.\n  for (let i = 0; i < nums.length; i++) {\n    // Add the current value to the sum through the previous position.\n    pre.push(pre[i] + nums[i]);\n  }\n\n  // Convert each inclusive range into the difference of two prefixes.\n  return queries.map(([l, r]) => pre[r + 1] - pre[l]);\n}\n",
        },
        time: "O(n + q)",
        space: "O(n)",
      },
      {
        label: "Sum per query",
        approach: "Sum each subrange directly — simpler but O(n) per query.",
        js: "function rangeSums(nums, queries) {\n  return queries.map(([l, r]) => {\n    let s = 0;\n    for (let i = l; i <= r; i++) s += nums[i];\n    return s;\n  });\n}\n",
        ts: "function rangeSums(nums: number[], queries: number[][]): number[] {\n  return queries.map(([l, r]) => {\n    let s = 0;\n    for (let i = l; i <= r; i++) s += nums[i];\n    return s;\n  });\n}\n",
        commentedCode: {
          js: "function rangeSums(nums, queries) {\n  // Produce one direct sum for every requested range.\n  return queries.map(([l, r]) => {\n    // Start this range with no values included.\n    let s = 0;\n    // Visit each index in the inclusive query range.\n    for (let i = l; i <= r; i++) {\n      // Add this range element to its query total.\n      s += nums[i];\n    }\n    // Return the completed total for this one query.\n    return s;\n  });\n}\n",
          ts: "function rangeSums(nums: number[], queries: number[][]): number[] {\n  // Produce one direct sum for every requested range.\n  return queries.map(([l, r]) => {\n    // Start this range with no values included.\n    let s = 0;\n    // Visit each index in the inclusive query range.\n    for (let i = l; i <= r; i++) {\n      // Add this range element to its query total.\n      s += nums[i];\n    }\n    // Return the completed total for this one query.\n    return s;\n  });\n}\n",
        },
        time: "O(n·q)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "ps-pivot-index",
    slug: "pivot-index",
    title: "Pivot Index",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the leftmost index where the sum of the values to its left equals the sum to its right, or -1. An empty side sums to 0.",
    examples: [
      { input: "[1,7,3,6,5,6]", output: "3" },
      { input: "[1,2,3]", output: "-1" },
      { input: "[2,1,-1]", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "pivotIndex",
    starter: {
      js: "function pivotIndex(nums) {\n  // Leftmost balancing index, or -1.\n}\n",
      ts: "function pivotIndex(nums: number[]): number {\n  // Leftmost balancing index, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 7, 3, 6, 5, 6]], expected: 3 },
      { args: [[1, 2, 3]], expected: -1 },
      { args: [[2, 1, -1]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: -1 },
      { args: [[5]], expected: 0 },
      { args: [[0, 0, 0, 0]], expected: 0 },
      { args: [[-1, -1, 0, 0, -1, -1]], expected: 2 },
      { args: [[1, 2, 3, 4, 3, 2, 1]], expected: 3 },
      { args: [[8, 8]], expected: -1 },
    ],
    hints: [
      "The right sum equals total - left - current, once you know the total.",
      "Sweep left to right maintaining the left sum; compare against the derived right sum.",
      "total = sum(nums); left = 0; for i: if left === total - left - nums[i] return i; left += nums[i].",
    ],
    walkthrough: [
      { title: "Express one side in terms of the whole", body: "At index `i`, the values split into left side, current value, and right side. Once you know the total, the right sum is `total - left - current`." },
      { title: "Calculate the total first", body: "Make one pass to add every number. Then the later scan does not need to repeatedly recompute a suffix sum." },
      { title: "Maintain the left-side invariant", body: "Before checking an index, `left` must mean the sum of values strictly before it. Compare `left` with the derived right sum, then add the current value before moving on." },
      { title: "Return the first balance", body: "Scanning left to right means the first equality is the leftmost pivot. If none match, return `-1`." },
    ],
    solutions: [
      {
        label: "Total minus prefix",
        approach: "Derive the right sum from the total and running left sum.",
        js: "function pivotIndex(nums) {\n  let total = 0;\n  for (const v of nums) total += v;\n  let left = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (left === total - left - nums[i]) return i;\n    left += nums[i];\n  }\n  return -1;\n}\n",
        ts: "function pivotIndex(nums: number[]): number {\n  let total = 0;\n  for (const v of nums) total += v;\n  let left = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (left === total - left - nums[i]) return i;\n    left += nums[i];\n  }\n  return -1;\n}\n",
        commentedCode: {
          js: "function pivotIndex(nums) {\n  // First find the sum of every value in the array.\n  let total = 0;\n  for (const v of nums) {\n    total += v;\n  }\n\n  // Before each check, left is the sum strictly before the current index.\n  let left = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // Remove the left side and current value from total to get the right side.\n    if (left === total - left - nums[i]) {\n      return i;\n    }\n    // Include this value in the left side for the next index.\n    left += nums[i];\n  }\n\n  // No index split the array into equal left and right sums.\n  return -1;\n}\n",
          ts: "function pivotIndex(nums: number[]): number {\n  // First find the sum of every value in the array.\n  let total = 0;\n  for (const v of nums) {\n    total += v;\n  }\n\n  // Before each check, left is the sum strictly before the current index.\n  let left = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // Remove the left side and current value from total to get the right side.\n    if (left === total - left - nums[i]) {\n      return i;\n    }\n    // Include this value in the left side for the next index.\n    left += nums[i];\n  }\n\n  // No index split the array into equal left and right sums.\n  return -1;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Prefix and suffix arrays",
        approach: "Precompute left and right sums, then scan for equality.",
        js: "function pivotIndex(nums) {\n  const n = nums.length;\n  const pre = [0];\n  for (let i = 0; i < n; i++) pre.push(pre[i] + nums[i]);\n  for (let i = 0; i < n; i++) {\n    const left = pre[i];\n    const right = pre[n] - pre[i + 1];\n    if (left === right) return i;\n  }\n  return -1;\n}\n",
        ts: "function pivotIndex(nums: number[]): number {\n  const n = nums.length;\n  const pre = [0];\n  for (let i = 0; i < n; i++) pre.push(pre[i] + nums[i]);\n  for (let i = 0; i < n; i++) {\n    const left = pre[i];\n    const right = pre[n] - pre[i + 1];\n    if (left === right) return i;\n  }\n  return -1;\n}\n",
        commentedCode: {
          js: "function pivotIndex(nums) {\n  // Keep the length to address the final prefix sum.\n  const n = nums.length;\n  // pre[i] is the sum of values before index i.\n  const pre = [0];\n  for (let i = 0; i < n; i++) {\n    // Extend the prefix by the value at this index.\n    pre.push(pre[i] + nums[i]);\n  }\n\n  // Test every possible pivot from left to right.\n  for (let i = 0; i < n; i++) {\n    // Values before i make up the left side.\n    const left = pre[i];\n    // Values after i are the whole sum minus the prefix through i.\n    const right = pre[n] - pre[i + 1];\n    if (left === right) {\n      return i;\n    }\n  }\n\n  // No pivot had equal side sums.\n  return -1;\n}\n",
          ts: "function pivotIndex(nums: number[]): number {\n  // Keep the length to address the final prefix sum.\n  const n = nums.length;\n  // pre[i] is the sum of values before index i.\n  const pre: number[] = [0];\n  for (let i = 0; i < n; i++) {\n    // Extend the prefix by the value at this index.\n    pre.push(pre[i] + nums[i]);\n  }\n\n  // Test every possible pivot from left to right.\n  for (let i = 0; i < n; i++) {\n    // Values before i make up the left side.\n    const left = pre[i];\n    // Values after i are the whole sum minus the prefix through i.\n    const right = pre[n] - pre[i + 1];\n    if (left === right) {\n      return i;\n    }\n  }\n\n  // No pivot had equal side sums.\n  return -1;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ps-min-start-value",
    slug: "min-start-value",
    title: "Minimum Start Value",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the smallest positive integer `start` such that the running total of `start` plus the prefix sums is never less than 1.",
    examples: [
      { input: "[-3,2,-3,4,2]", output: "5" },
      { input: "[1,2]", output: "1" },
      { input: "[1,-2,-3]", output: "5" },
    ],
    constraints: ["1 <= nums.length <= 10000"],
    functionName: "minStartValue",
    starter: {
      js: "function minStartValue(nums) {\n  // Smallest positive start keeping the running total >= 1.\n}\n",
      ts: "function minStartValue(nums: number[]): number {\n  // Smallest positive start keeping the running total >= 1.\n  return 1;\n}\n",
    },
    visible: [
      { args: [[-3, 2, -3, 4, 2]], expected: 5 },
      { args: [[1, 2]], expected: 1 },
      { args: [[1, -2, -3]], expected: 5 },
    ],
    hidden: [
      { args: [[2]], expected: 1 },
      { args: [[-1]], expected: 2 },
      { args: [[0]], expected: 1 },
      { args: [[-5, 5]], expected: 6 },
      { args: [[3, -3, 3, -3]], expected: 1 },
      { args: [[-2, -2, -2]], expected: 7 },
    ],
    hints: [
      "Track the lowest running prefix sum (starting from 0).",
      "You need start + minPrefix >= 1, so start >= 1 - minPrefix.",
      "return Math.max(1, 1 - minPrefix).",
    ],
    solutions: [
      {
        label: "Track the minimum prefix",
        approach: "Find the deepest dip of the prefix sums and offset it to 1.",
        js: "function minStartValue(nums) {\n  let sum = 0, min = 0;\n  for (const v of nums) { sum += v; if (sum < min) min = sum; }\n  return Math.max(1, 1 - min);\n}\n",
        ts: "function minStartValue(nums: number[]): number {\n  let sum = 0, min = 0;\n  for (const v of nums) { sum += v; if (sum < min) min = sum; }\n  return Math.max(1, 1 - min);\n}\n",
        commentedCode: {
          js: "function minStartValue(nums) {\n  // sum is the prefix total after the values processed so far.\n  let sum = 0;\n  // Include the empty prefix, whose sum is zero, as the initial minimum.\n  let min = 0;\n\n  // Find the lowest point reached by any prefix of the array.\n  for (const v of nums) {\n    // Extend the running prefix with the current value.\n    sum += v;\n    // Remember the deepest dip that the starting value must offset.\n    if (sum < min) {\n      min = sum;\n    }\n  }\n\n  // Offset the minimum prefix up to 1, while keeping the start positive.\n  return Math.max(1, 1 - min);\n}\n",
          ts: "function minStartValue(nums: number[]): number {\n  // sum is the prefix total after the values processed so far.\n  let sum = 0;\n  // Include the empty prefix, whose sum is zero, as the initial minimum.\n  let min = 0;\n\n  // Find the lowest point reached by any prefix of the array.\n  for (const v of nums) {\n    // Extend the running prefix with the current value.\n    sum += v;\n    // Remember the deepest dip that the starting value must offset.\n    if (sum < min) {\n      min = sum;\n    }\n  }\n\n  // Offset the minimum prefix up to 1, while keeping the start positive.\n  return Math.max(1, 1 - min);\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Try increasing starts",
        approach: "Test start = 1, 2, … until the running total stays positive.",
        js: "function minStartValue(nums) {\n  for (let start = 1; ; start++) {\n    let sum = start, ok = true;\n    for (const v of nums) { sum += v; if (sum < 1) { ok = false; break; } }\n    if (ok) return start;\n  }\n}\n",
        ts: "function minStartValue(nums: number[]): number {\n  for (let start = 1; ; start++) {\n    let sum = start, ok = true;\n    for (const v of nums) { sum += v; if (sum < 1) { ok = false; break; } }\n    if (ok) return start;\n  }\n}\n",
        commentedCode: {
          js: "function minStartValue(nums) {\n  // Try positive starting values in increasing order so the first success is minimal.\n  for (let start = 1; ; start++) {\n    // Begin this simulation at the candidate value and assume it will work.\n    let sum = start;\n    let ok = true;\n\n    // Apply every array value in order to test every running total.\n    for (const v of nums) {\n      sum += v;\n      // This candidate fails as soon as its running total falls below 1.\n      if (sum < 1) {\n        ok = false;\n        break;\n      }\n    }\n\n    // Increasing order guarantees this successful candidate is the answer.\n    if (ok) {\n      return start;\n    }\n  }\n}\n",
          ts: "function minStartValue(nums: number[]): number {\n  // Try positive starting values in increasing order so the first success is minimal.\n  for (let start = 1; ; start++) {\n    // Begin this simulation at the candidate value and assume it will work.\n    let sum = start;\n    let ok = true;\n\n    // Apply every array value in order to test every running total.\n    for (const v of nums) {\n      sum += v;\n      // This candidate fails as soon as its running total falls below 1.\n      if (sum < 1) {\n        ok = false;\n        break;\n      }\n    }\n\n    // Increasing order guarantees this successful candidate is the answer.\n    if (ok) {\n      return start;\n    }\n  }\n}\n",
        },
        time: "O(n · answer)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "ps-count-subarrays-k",
    slug: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    difficulty: "medium",
    patternIds: P,
    statement: "Return the number of contiguous subarrays whose values sum to exactly `k`.",
    examples: [
      { input: "[1,1,1], 2", output: "2" },
      { input: "[1,2,3], 3", output: "2" },
      { input: "[], 0", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 10000", "count non-empty subarrays"],
    functionName: "countSubarraysSumK",
    starter: {
      js: "function countSubarraysSumK(nums, k) {\n  // Number of subarrays summing to k.\n}\n",
      ts: "function countSubarraysSumK(nums: number[], k: number): number {\n  // Number of subarrays summing to k.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 1, 1], 2], expected: 2 },
      { args: [[1, 2, 3], 3], expected: 2 },
      { args: [[], 0], expected: 0 },
    ],
    hidden: [
      { args: [[1, -1, 0], 0], expected: 3 },
      { args: [[3, 4, 7, 2, -3, 1, 4, 2], 7], expected: 4 },
      { args: [[0, 0, 0], 0], expected: 6 },
      { args: [[1], 1], expected: 1 },
      { args: [[1], 2], expected: 0 },
      { args: [[-1, -1, 1], 0], expected: 1 },
    ],
    hints: [
      "A subarray sum is a difference of two prefix sums: pre[j] - pre[i] = k.",
      "As you scan, count how many earlier prefix sums equal (current prefix - k).",
      "map{0:1}; running += x; count += map[running - k]; map[running]++.",
    ],
    solutions: [
      {
        label: "Prefix sum + hash map",
        approach: "Count earlier prefixes that make the current window sum to k.",
        js: "function countSubarraysSumK(nums, k) {\n  const seen = new Map([[0, 1]]);\n  let running = 0, count = 0;\n  for (const x of nums) {\n    running += x;\n    count += seen.get(running - k) || 0;\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n  return count;\n}\n",
        ts: "function countSubarraysSumK(nums: number[], k: number): number {\n  const seen = new Map<number, number>([[0, 1]]);\n  let running = 0, count = 0;\n  for (const x of nums) {\n    running += x;\n    count += seen.get(running - k) || 0;\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function countSubarraysSumK(nums, k) {\n  // The empty prefix occurs once, allowing a prefix that itself sums to k.\n  const seen = new Map([[0, 1]]);\n  // Track the current prefix sum and the number of matching subarrays.\n  let running = 0;\n  let count = 0;\n\n  for (const x of nums) {\n    // Extend the prefix through the current value.\n    running += x;\n    // If an earlier prefix was running - k, the values after it sum to k.\n    count += seen.get(running - k) || 0;\n    // Store this prefix for subarrays that may end at a later position.\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n\n  // Return the number of non-empty subarrays with the target sum.\n  return count;\n}\n",
          ts: "function countSubarraysSumK(nums: number[], k: number): number {\n  // The empty prefix occurs once, allowing a prefix that itself sums to k.\n  const seen = new Map<number, number>([[0, 1]]);\n  // Track the current prefix sum and the number of matching subarrays.\n  let running = 0;\n  let count = 0;\n\n  for (const x of nums) {\n    // Extend the prefix through the current value.\n    running += x;\n    // If an earlier prefix was running - k, the values after it sum to k.\n    count += seen.get(running - k) || 0;\n    // Store this prefix for subarrays that may end at a later position.\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n\n  // Return the number of non-empty subarrays with the target sum.\n  return count;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force",
        approach: "Sum every subarray directly.",
        js: "function countSubarraysSumK(nums, k) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) { sum += nums[j]; if (sum === k) count++; }\n  }\n  return count;\n}\n",
        ts: "function countSubarraysSumK(nums: number[], k: number): number {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) { sum += nums[j]; if (sum === k) count++; }\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function countSubarraysSumK(nums, k) {\n  // Count every contiguous range whose accumulated value reaches k.\n  let count = 0;\n\n  // Choose each index as the start of a subarray.\n  for (let i = 0; i < nums.length; i++) {\n    // Reset the sum for ranges that begin at i.\n    let sum = 0;\n    // Extend the range one ending position at a time.\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      // The current range nums[i..j] is one valid answer when its sum is k.\n      if (sum === k) {\n        count++;\n      }\n    }\n  }\n\n  return count;\n}\n",
          ts: "function countSubarraysSumK(nums: number[], k: number): number {\n  // Count every contiguous range whose accumulated value reaches k.\n  let count = 0;\n\n  // Choose each index as the start of a subarray.\n  for (let i = 0; i < nums.length; i++) {\n    // Reset the sum for ranges that begin at i.\n    let sum = 0;\n    // Extend the range one ending position at a time.\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      // The current range nums[i..j] is one valid answer when its sum is k.\n      if (sum === k) {\n        count++;\n      }\n    }\n  }\n\n  return count;\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "ps-product-except-self",
    slug: "product-except-self",
    title: "Product Except Self",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return an array where each position holds the product of every other value (no division).",
    examples: [
      { input: "[1,2,3,4]", output: "[24,12,8,6]" },
      { input: "[2,3]", output: "[3,2]" },
      { input: "[0,1]", output: "[1,0]" },
    ],
    constraints: ["1 <= nums.length <= 10000", "answer fits in a safe integer"],
    functionName: "productExceptSelf",
    starter: {
      js: "function productExceptSelf(nums) {\n  // Product of all other elements — no division.\n}\n",
      ts: "function productExceptSelf(nums: number[]): number[] {\n  // Product of all other elements — no division.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
      { args: [[2, 3]], expected: [3, 2] },
      { args: [[0, 1]], expected: [1, 0] },
    ],
    hidden: [
      { args: [[1, 2, 3]], expected: [6, 3, 2] },
      { args: [[0, 0]], expected: [0, 0] },
      { args: [[5]], expected: [1] },
      { args: [[2, 2, 2]], expected: [4, 4, 4] },
      { args: [[-1, 1, 2]], expected: [2, -2, -1] },
      { args: [[3, 0, 2]], expected: [0, 6, 0] },
    ],
    hints: [
      "The answer at i is (product of everything to the left) × (product to the right).",
      "One pass builds left products; a second pass multiplies in the right products.",
      "prefix in a left-to-right pass, then multiply by a running suffix product right-to-left.",
    ],
    solutions: [
      {
        label: "Prefix × suffix",
        approach: "Combine a left-product pass with a right-product pass.",
        js: "function productExceptSelf(nums) {\n  const n = nums.length;\n  const out = new Array(n).fill(1);\n  let left = 1;\n  for (let i = 0; i < n; i++) { out[i] = left; left *= nums[i]; }\n  let right = 1;\n  for (let i = n - 1; i >= 0; i--) { out[i] *= right; right *= nums[i]; }\n  return out;\n}\n",
        ts: "function productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  const out = new Array(n).fill(1);\n  let left = 1;\n  for (let i = 0; i < n; i++) { out[i] = left; left *= nums[i]; }\n  let right = 1;\n  for (let i = n - 1; i >= 0; i--) { out[i] *= right; right *= nums[i]; }\n  return out;\n}\n",
        commentedCode: {
          js: "function productExceptSelf(nums) {\n  const n = nums.length;\n  // out will first hold left-side products, then the completed answers.\n  const out = new Array(n).fill(1);\n\n  // left is the product of all values strictly before index i.\n  let left = 1;\n  for (let i = 0; i < n; i++) {\n    // Save the product to the left of the current position.\n    out[i] = left;\n    // Include nums[i] before moving to the next position.\n    left *= nums[i];\n  }\n\n  // right is the product of all values strictly after index i.\n  let right = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    // Left product times right product excludes exactly nums[i].\n    out[i] *= right;\n    // Include nums[i] before moving one position left.\n    right *= nums[i];\n  }\n\n  return out;\n}\n",
          ts: "function productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  // out will first hold left-side products, then the completed answers.\n  const out: number[] = new Array(n).fill(1);\n\n  // left is the product of all values strictly before index i.\n  let left = 1;\n  for (let i = 0; i < n; i++) {\n    // Save the product to the left of the current position.\n    out[i] = left;\n    // Include nums[i] before moving to the next position.\n    left *= nums[i];\n  }\n\n  // right is the product of all values strictly after index i.\n  let right = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    // Left product times right product excludes exactly nums[i].\n    out[i] *= right;\n    // Include nums[i] before moving one position left.\n    right *= nums[i];\n  }\n\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Two product arrays",
        approach: "Build explicit prefix and suffix product arrays, then multiply.",
        js: "function productExceptSelf(nums) {\n  const n = nums.length;\n  const pre = new Array(n).fill(1);\n  const suf = new Array(n).fill(1);\n  for (let i = 1; i < n; i++) pre[i] = pre[i - 1] * nums[i - 1];\n  for (let i = n - 2; i >= 0; i--) suf[i] = suf[i + 1] * nums[i + 1];\n  return pre.map((v, i) => v * suf[i]);\n}\n",
        ts: "function productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  const pre = new Array(n).fill(1);\n  const suf = new Array(n).fill(1);\n  for (let i = 1; i < n; i++) pre[i] = pre[i - 1] * nums[i - 1];\n  for (let i = n - 2; i >= 0; i--) suf[i] = suf[i + 1] * nums[i + 1];\n  return pre.map((v, i) => v * suf[i]);\n}\n",
        commentedCode: {
          js: "function productExceptSelf(nums) {\n  const n = nums.length;\n  // pre[i] will be the product strictly to the left of i.\n  const pre = new Array(n).fill(1);\n  // suf[i] will be the product strictly to the right of i.\n  const suf = new Array(n).fill(1);\n\n  // Build left products; index 0 keeps the empty-product identity of 1.\n  for (let i = 1; i < n; i++) {\n    pre[i] = pre[i - 1] * nums[i - 1];\n  }\n\n  // Build right products; the final index also keeps the identity of 1.\n  for (let i = n - 2; i >= 0; i--) {\n    suf[i] = suf[i + 1] * nums[i + 1];\n  }\n\n  // Multiplying both sides includes every value except the one at i.\n  return pre.map((leftProduct, i) => leftProduct * suf[i]);\n}\n",
          ts: "function productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  // pre[i] will be the product strictly to the left of i.\n  const pre: number[] = new Array(n).fill(1);\n  // suf[i] will be the product strictly to the right of i.\n  const suf: number[] = new Array(n).fill(1);\n\n  // Build left products; index 0 keeps the empty-product identity of 1.\n  for (let i = 1; i < n; i++) {\n    pre[i] = pre[i - 1] * nums[i - 1];\n  }\n\n  // Build right products; the final index also keeps the identity of 1.\n  for (let i = n - 2; i >= 0; i--) {\n    suf[i] = suf[i + 1] * nums[i + 1];\n  }\n\n  // Multiplying both sides includes every value except the one at i.\n  return pre.map((leftProduct, i) => leftProduct * suf[i]);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "ps-prefix-max",
    slug: "prefix-max",
    title: "Prefix Maximum",
    difficulty: "easy",
    patternIds: P,
    statement: "Return the running maximum: each position holds the largest value seen so far.",
    examples: [
      { input: "[1,3,2,5]", output: "[1,3,3,5]" },
      { input: "[]", output: "[]" },
      { input: "[5]", output: "[5]" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "prefixMax",
    starter: {
      js: "function prefixMax(nums) {\n  // Running maximum.\n}\n",
      ts: "function prefixMax(nums: number[]): number[] {\n  // Running maximum.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 3, 2, 5]], expected: [1, 3, 3, 5] },
      { args: [[]], expected: [] },
      { args: [[5]], expected: [5] },
    ],
    hidden: [
      { args: [[3, 1, 2]], expected: [3, 3, 3] },
      { args: [[-1, -2]], expected: [-1, -1] },
      { args: [[1, 2, 3]], expected: [1, 2, 3] },
      { args: [[0]], expected: [0] },
      { args: [[5, 5, 4]], expected: [5, 5, 5] },
      { args: [[-3, -1, -2]], expected: [-3, -1, -1] },
    ],
    hints: [
      "Keep the best value seen and record it at each step.",
      "best = max(best, current); push best.",
      "Start best at the first element (or handle the empty case).",
    ],
    solutions: [
      {
        label: "Running max",
        approach: "Track and emit the maximum so far.",
        js: "function prefixMax(nums) {\n  const out = [];\n  let best = -Infinity;\n  for (const v of nums) { best = Math.max(best, v); out.push(best); }\n  return out;\n}\n",
        ts: "function prefixMax(nums: number[]): number[] {\n  const out: number[] = [];\n  let best = -Infinity;\n  for (const v of nums) { best = Math.max(best, v); out.push(best); }\n  return out;\n}\n",
        commentedCode: {
          js: "function prefixMax(nums) {\n  // Store the maximum for every prefix in input order.\n  const out = [];\n  // Negative infinity lets the first real value become the first maximum.\n  let best = -Infinity;\n\n  for (const v of nums) {\n    // Keep the larger of the previous prefix maximum and the current value.\n    best = Math.max(best, v);\n    // Record the maximum for the prefix ending at this position.\n    out.push(best);\n  }\n\n  return out;\n}\n",
          ts: "function prefixMax(nums: number[]): number[] {\n  // Store the maximum for every prefix in input order.\n  const out: number[] = [];\n  // Negative infinity lets the first real value become the first maximum.\n  let best = -Infinity;\n\n  for (const v of nums) {\n    // Keep the larger of the previous prefix maximum and the current value.\n    best = Math.max(best, v);\n    // Record the maximum for the prefix ending at this position.\n    out.push(best);\n  }\n\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Map with carry",
        approach: "Carry the max through a map.",
        js: "function prefixMax(nums) {\n  let best = -Infinity;\n  return nums.map((v) => (best = Math.max(best, v)));\n}\n",
        ts: "function prefixMax(nums: number[]): number[] {\n  let best = -Infinity;\n  return nums.map((v) => (best = Math.max(best, v)));\n}\n",
        commentedCode: {
          js: "function prefixMax(nums) {\n  // Carry the greatest value seen between map callbacks.\n  let best = -Infinity;\n\n  // Update the carried maximum and emit it for each prefix.\n  return nums.map((v) => {\n    best = Math.max(best, v);\n    return best;\n  });\n}\n",
          ts: "function prefixMax(nums: number[]): number[] {\n  // Carry the greatest value seen between map callbacks.\n  let best = -Infinity;\n\n  // Update the carried maximum and emit it for each prefix.\n  return nums.map((v) => {\n    best = Math.max(best, v);\n    return best;\n  });\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ps-suffix-sum",
    slug: "suffix-sum",
    title: "Suffix Sum",
    difficulty: "easy",
    patternIds: P,
    statement: "Return an array where each position holds the sum of that value and everything after it.",
    examples: [
      { input: "[1,2,3]", output: "[6,5,3]" },
      { input: "[]", output: "[]" },
      { input: "[5]", output: "[5]" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "suffixSum",
    starter: {
      js: "function suffixSum(nums) {\n  // Sum from each index to the end.\n}\n",
      ts: "function suffixSum(nums: number[]): number[] {\n  // Sum from each index to the end.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [6, 5, 3] },
      { args: [[]], expected: [] },
      { args: [[5]], expected: [5] },
    ],
    hidden: [
      { args: [[1, 1, 1]], expected: [3, 2, 1] },
      { args: [[2, -2, 2]], expected: [2, 0, 2] },
      { args: [[0, 0]], expected: [0, 0] },
      { args: [[10]], expected: [10] },
      { args: [[-1, -1]], expected: [-2, -1] },
      { args: [[3, 4, 5]], expected: [12, 9, 5] },
    ],
    hints: [
      "Build it from the right: each value plus the suffix sum after it.",
      "Walk backward accumulating a running total.",
      "for i from n-1 down to 0: sum += nums[i]; out[i] = sum.",
    ],
    solutions: [
      {
        label: "Accumulate from the right",
        approach: "Sum backward, writing each running total in place.",
        js: "function suffixSum(nums) {\n  const out = new Array(nums.length);\n  let sum = 0;\n  for (let i = nums.length - 1; i >= 0; i--) { sum += nums[i]; out[i] = sum; }\n  return out;\n}\n",
        ts: "function suffixSum(nums: number[]): number[] {\n  const out = new Array(nums.length);\n  let sum = 0;\n  for (let i = nums.length - 1; i >= 0; i--) { sum += nums[i]; out[i] = sum; }\n  return out;\n}\n",
        commentedCode: {
          js: "function suffixSum(nums) {\n  // Allocate one result slot for every input position.\n  const out = new Array(nums.length);\n  // sum will contain the values from the current index through the end.\n  let sum = 0;\n\n  // Moving right to left lets each new value extend the known suffix.\n  for (let i = nums.length - 1; i >= 0; i--) {\n    sum += nums[i];\n    // Store the suffix sum that begins at index i.\n    out[i] = sum;\n  }\n\n  return out;\n}\n",
          ts: "function suffixSum(nums: number[]): number[] {\n  // Allocate one result slot for every input position.\n  const out: number[] = new Array(nums.length);\n  // sum will contain the values from the current index through the end.\n  let sum = 0;\n\n  // Moving right to left lets each new value extend the known suffix.\n  for (let i = nums.length - 1; i >= 0; i--) {\n    sum += nums[i];\n    // Store the suffix sum that begins at index i.\n    out[i] = sum;\n  }\n\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Reverse prefix sum",
        approach: "Reverse, take running sums, reverse back.",
        js: "function suffixSum(nums) {\n  const rev = [...nums].reverse();\n  let sum = 0;\n  const pre = rev.map((v) => (sum += v));\n  return pre.reverse();\n}\n",
        ts: "function suffixSum(nums: number[]): number[] {\n  const rev = [...nums].reverse();\n  let sum = 0;\n  const pre = rev.map((v) => (sum += v));\n  return pre.reverse();\n}\n",
        commentedCode: {
          js: "function suffixSum(nums) {\n  // Reverse a copy so original suffixes become prefixes without mutating nums.\n  const rev = [...nums].reverse();\n  // Carry the running sum through the reversed values.\n  let sum = 0;\n  const pre = rev.map((v) => {\n    // This reversed prefix equals a suffix sum in the original order.\n    sum += v;\n    return sum;\n  });\n\n  // Restore the result positions to the original left-to-right order.\n  return pre.reverse();\n}\n",
          ts: "function suffixSum(nums: number[]): number[] {\n  // Reverse a copy so original suffixes become prefixes without mutating nums.\n  const rev: number[] = [...nums].reverse();\n  // Carry the running sum through the reversed values.\n  let sum = 0;\n  const pre: number[] = rev.map((v) => {\n    // This reversed prefix equals a suffix sum in the original order.\n    sum += v;\n    return sum;\n  });\n\n  // Restore the result positions to the original left-to-right order.\n  return pre.reverse();\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ps-count-subarrays-zero",
    slug: "count-zero-sum-subarrays",
    title: "Zero-Sum Subarrays",
    difficulty: "medium",
    patternIds: P,
    statement: "Return the number of contiguous subarrays whose values sum to 0.",
    examples: [
      { input: "[1,-1,2]", output: "1" },
      { input: "[0,0]", output: "3" },
      { input: "[1,2,3]", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "countZeroSumSubarrays",
    starter: {
      js: "function countZeroSumSubarrays(nums) {\n  // Number of subarrays summing to 0.\n}\n",
      ts: "function countZeroSumSubarrays(nums: number[]): number {\n  // Number of subarrays summing to 0.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, -1, 2]], expected: 1 },
      { args: [[0, 0]], expected: 3 },
      { args: [[1, 2, 3]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[0]], expected: 1 },
      { args: [[3, -3, 3, -3]], expected: 4 },
      { args: [[1, 2, -3]], expected: 1 },
      { args: [[5, -5, 5]], expected: 2 },
      { args: [[1, -1, 1, -1]], expected: 4 },
    ],
    hints: [
      "Two equal prefix sums bracket a zero-sum subarray.",
      "Count how many times each prefix sum repeats.",
      "map{0:1}; running += x; count += map[running]; map[running]++.",
    ],
    solutions: [
      {
        label: "Prefix sum counts",
        approach: "Each repeat of a prefix value adds a zero-sum subarray.",
        js: "function countZeroSumSubarrays(nums) {\n  const seen = new Map([[0, 1]]);\n  let running = 0, count = 0;\n  for (const x of nums) {\n    running += x;\n    count += seen.get(running) || 0;\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n  return count;\n}\n",
        ts: "function countZeroSumSubarrays(nums: number[]): number {\n  const seen = new Map<number, number>([[0, 1]]);\n  let running = 0, count = 0;\n  for (const x of nums) {\n    running += x;\n    count += seen.get(running) || 0;\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function countZeroSumSubarrays(nums) {\n  // Seed the empty prefix so zero-sum ranges starting at index 0 are counted.\n  const seen = new Map([[0, 1]]);\n  let running = 0;\n  let count = 0;\n\n  for (const x of nums) {\n    // Compute the prefix sum through the current position.\n    running += x;\n    // Each identical earlier prefix brackets one zero-sum subarray.\n    count += seen.get(running) || 0;\n    // Make this prefix available to ranges ending later.\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n\n  return count;\n}\n",
          ts: "function countZeroSumSubarrays(nums: number[]): number {\n  // Seed the empty prefix so zero-sum ranges starting at index 0 are counted.\n  const seen = new Map<number, number>([[0, 1]]);\n  let running = 0;\n  let count = 0;\n\n  for (const x of nums) {\n    // Compute the prefix sum through the current position.\n    running += x;\n    // Each identical earlier prefix brackets one zero-sum subarray.\n    count += seen.get(running) || 0;\n    // Make this prefix available to ranges ending later.\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n\n  return count;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force",
        approach: "Check every subarray sum directly.",
        js: "function countZeroSumSubarrays(nums) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) { sum += nums[j]; if (sum === 0) count++; }\n  }\n  return count;\n}\n",
        ts: "function countZeroSumSubarrays(nums: number[]): number {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) { sum += nums[j]; if (sum === 0) count++; }\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function countZeroSumSubarrays(nums) {\n  // Accumulate the number of zero-sum contiguous ranges.\n  let count = 0;\n\n  // Try every possible starting index.\n  for (let i = 0; i < nums.length; i++) {\n    // Reset the total for ranges that begin at i.\n    let sum = 0;\n    // Extend the range through every possible ending index.\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      // The current range nums[i..j] is valid when its total is zero.\n      if (sum === 0) {\n        count++;\n      }\n    }\n  }\n\n  return count;\n}\n",
          ts: "function countZeroSumSubarrays(nums: number[]): number {\n  // Accumulate the number of zero-sum contiguous ranges.\n  let count = 0;\n\n  // Try every possible starting index.\n  for (let i = 0; i < nums.length; i++) {\n    // Reset the total for ranges that begin at i.\n    let sum = 0;\n    // Extend the range through every possible ending index.\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      // The current range nums[i..j] is valid when its total is zero.\n      if (sum === 0) {\n        count++;\n      }\n    }\n  }\n\n  return count;\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "ps-equilibrium-count",
    slug: "equilibrium-count",
    title: "Equilibrium Indices",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return how many indices have equal sums on their left and right (an empty side sums to 0).",
    examples: [
      { input: "[1,7,3,6,5,6]", output: "1" },
      { input: "[1,2,3]", output: "0" },
      { input: "[0,0,0]", output: "3" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "equilibriumCount",
    starter: {
      js: "function equilibriumCount(nums) {\n  // Count balanced indices.\n}\n",
      ts: "function equilibriumCount(nums: number[]): number {\n  // Count balanced indices.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 7, 3, 6, 5, 6]], expected: 1 },
      { args: [[1, 2, 3]], expected: 0 },
      { args: [[0, 0, 0]], expected: 3 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[5]], expected: 1 },
      { args: [[1, 2, 3, 4, 3, 2, 1]], expected: 1 },
      { args: [[2, 1, -1]], expected: 1 },
      { args: [[1, 1, 1]], expected: 1 },
      { args: [[0, 0, 0, 0]], expected: 4 },
    ],
    hints: [
      "This is the pivot-index idea, but count all matches instead of stopping at the first.",
      "Use the total to derive the right sum as total - left - current.",
      "for i: if left === total - left - nums[i] count++; left += nums[i].",
    ],
    solutions: [
      {
        label: "Total minus prefix",
        approach: "Count every index where the derived left and right sums match.",
        js: "function equilibriumCount(nums) {\n  let total = 0;\n  for (const v of nums) total += v;\n  let left = 0, count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (left === total - left - nums[i]) count++;\n    left += nums[i];\n  }\n  return count;\n}\n",
        ts: "function equilibriumCount(nums: number[]): number {\n  let total = 0;\n  for (const v of nums) total += v;\n  let left = 0, count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (left === total - left - nums[i]) count++;\n    left += nums[i];\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function equilibriumCount(nums) {\n  // Find the whole-array sum so each right side can be derived in O(1).\n  let total = 0;\n  for (const v of nums) {\n    total += v;\n  }\n\n  // Before each check, left excludes the value at the current index.\n  let left = 0;\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // Subtract the left side and current value to isolate the right side.\n    const right = total - left - nums[i];\n    if (left === right) {\n      count++;\n    }\n    // Move the current value into the left side for the next index.\n    left += nums[i];\n  }\n\n  return count;\n}\n",
          ts: "function equilibriumCount(nums: number[]): number {\n  // Find the whole-array sum so each right side can be derived in O(1).\n  let total = 0;\n  for (const v of nums) {\n    total += v;\n  }\n\n  // Before each check, left excludes the value at the current index.\n  let left = 0;\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // Subtract the left side and current value to isolate the right side.\n    const right = total - left - nums[i];\n    if (left === right) {\n      count++;\n    }\n    // Move the current value into the left side for the next index.\n    left += nums[i];\n  }\n\n  return count;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Prefix array",
        approach: "Precompute prefix sums and compare each side.",
        js: "function equilibriumCount(nums) {\n  const n = nums.length;\n  const pre = [0];\n  for (let i = 0; i < n; i++) pre.push(pre[i] + nums[i]);\n  let count = 0;\n  for (let i = 0; i < n; i++) if (pre[i] === pre[n] - pre[i + 1]) count++;\n  return count;\n}\n",
        ts: "function equilibriumCount(nums: number[]): number {\n  const n = nums.length;\n  const pre = [0];\n  for (let i = 0; i < n; i++) pre.push(pre[i] + nums[i]);\n  let count = 0;\n  for (let i = 0; i < n; i++) if (pre[i] === pre[n] - pre[i + 1]) count++;\n  return count;\n}\n",
        commentedCode: {
          js: "function equilibriumCount(nums) {\n  const n = nums.length;\n  // pre[i] is the sum of the first i values, so pre[0] is zero.\n  const pre = [0];\n  for (let i = 0; i < n; i++) {\n    // Append the sum through nums[i].\n    pre.push(pre[i] + nums[i]);\n  }\n\n  let count = 0;\n  // Compare the values strictly before and strictly after every index.\n  for (let i = 0; i < n; i++) {\n    const left = pre[i];\n    const right = pre[n] - pre[i + 1];\n    if (left === right) {\n      count++;\n    }\n  }\n\n  return count;\n}\n",
          ts: "function equilibriumCount(nums: number[]): number {\n  const n = nums.length;\n  // pre[i] is the sum of the first i values, so pre[0] is zero.\n  const pre: number[] = [0];\n  for (let i = 0; i < n; i++) {\n    // Append the sum through nums[i].\n    pre.push(pre[i] + nums[i]);\n  }\n\n  let count = 0;\n  // Compare the values strictly before and strictly after every index.\n  for (let i = 0; i < n; i++) {\n    const left = pre[i];\n    const right = pre[n] - pre[i + 1];\n    if (left === right) {\n      count++;\n    }\n  }\n\n  return count;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
];

export const prefixSumProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const prefixSumMcqs: QuizQuestion[] = [
  {
    id: "s4-ps-build",
    kind: "mcq",
    prompt: "Building a prefix-sum array over n elements takes:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answerIndex: 2,
    explanation: "One pass accumulates the running total — linear time.",
  },
  {
    id: "s4-ps-query",
    kind: "mcq",
    prompt: "Once a prefix-sum array is built, answering one range-sum query takes:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 0,
    explanation: "A range sum is a single subtraction pre[r+1] - pre[l].",
  },
];

export const prefixSumModule: Module = {
  id: "m-pat-prefix-sum",
  stageId: S,
  title: "Prefix Sum",
  kind: "patternModule",
  summary: "Precompute cumulative totals so any range sum — or balance point — is answered in O(1).",
  lessonSections: [
    {
      heading: "Precompute once, answer instantly",
      body: `A **prefix-sum** array stores cumulative totals: \`pre[i]\` is the sum of the first \`i\` elements (with \`pre[0] = 0\`). Then the sum of any range \`[l, r]\` is a single subtraction — \`pre[r+1] - pre[l]\` — turning repeated range queries from O(n) each into O(1).

\`\`\`js
const nums = [2, 4, 6, 8];
const pre = [0];
for (let i = 0; i < nums.length; i++) pre.push(pre[i] + nums[i]);
// sum of indices 1..2 = 4 + 6:
console.log(pre[3] - pre[1]); // 10
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for prefix sums when the problem involves:

- **range sums** or averages queried many times,
- **balance / pivot** points (left sum equals right sum),
- counting **subarrays with a target sum** (prefix sum + a hash map of counts),
- running max/min or products (the same idea with a different operator).`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Range-sum template
function buildPrefix(nums: number[]): number[] {
  const pre = [0];
  for (let i = 0; i < nums.length; i++) pre.push(pre[i] + nums[i]);
  return pre; // sum(l..r) = pre[r + 1] - pre[l]
}

// Count subarrays summing to k
function countK(nums: number[], k: number): number {
  const seen = new Map<number, number>([[0, 1]]);
  let running = 0, count = 0;
  for (const x of nums) {
    running += x;
    count += seen.get(running - k) ?? 0;
    seen.set(running, (seen.get(running) ?? 0) + 1);
  }
  return count;
}
\`\`\`

**Pitfalls:** off-by-one on the \`pre[r+1] - pre[l]\` boundary; forgetting to seed the count map with \`{0: 1}\` (which represents the empty prefix). Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "ps-running-sum",
  drillProblemIds: [
    "ps-running-sum",
    "ps-range-sum-query",
    "ps-pivot-index",
    "ps-min-start-value",
    "ps-count-subarrays-k",
    "ps-product-except-self",
  ],
  testPoolProblemIds: [
    "ps-prefix-max",
    "ps-suffix-sum",
    "ps-count-subarrays-zero",
    "ps-equilibrium-count",
  ],
  complexityQuestionIds: ["s4-ps-build", "s4-ps-query"],
  badgeId: "badge-pat-prefix-sum",
  prerequisiteModuleIds: [],
};
