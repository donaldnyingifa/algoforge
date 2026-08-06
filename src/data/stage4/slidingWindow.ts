import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s4";
const P = ["sliding-window"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "sw-max-sum-k",
    slug: "max-sum-window",
    title: "Max Sum of Size K",
    difficulty: "easy",
    patternIds: P,
    statement: "Return the maximum sum of any contiguous window of exactly `k` elements.",
    examples: [
      { input: "[2,1,5,1,3,2], 3", output: "9" },
      { input: "[1], 1", output: "1" },
      { input: "[5,5,5], 2", output: "10" },
    ],
    constraints: ["1 <= k <= nums.length <= 10000"],
    functionName: "maxSumSubarrayK",
    starter: {
      js: "function maxSumSubarrayK(nums, k) {\n  // Max sum of a window of size k.\n}\n",
      ts: "function maxSumSubarrayK(nums: number[], k: number): number {\n  // Max sum of a window of size k.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 1, 5, 1, 3, 2], 3], expected: 9 },
      { args: [[1], 1], expected: 1 },
      { args: [[5, 5, 5], 2], expected: 10 },
    ],
    hidden: [
      { args: [[1, 2, 3, 4], 2], expected: 7 },
      { args: [[-1, -2, -3], 1], expected: -1 },
      { args: [[4, 3, 2, 1], 3], expected: 9 },
      { args: [[2, 2, 2], 3], expected: 6 },
      { args: [[1, 1, 1, 1, 1], 2], expected: 2 },
      { args: [[10, -10, 10], 2], expected: 0 },
    ],
    hints: [
      "Compute the first window's sum, then slide: add the new element, drop the old one.",
      "Each slide is O(1) — no need to re-sum the whole window.",
      "sum += nums[i] - nums[i - k]; track the maximum.",
    ],
    solutions: [
      {
        label: "Slide the window",
        approach: "Maintain the window sum in O(1) per step.",
        js: "function maxSumSubarrayK(nums, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  let best = sum;\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    if (sum > best) best = sum;\n  }\n  return best;\n}\n",
        ts: "function maxSumSubarrayK(nums: number[], k: number): number {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  let best = sum;\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    if (sum > best) best = sum;\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Recompute each window",
        approach: "Sum every window from scratch — simpler but slower.",
        js: "function maxSumSubarrayK(nums, k) {\n  let best = -Infinity;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < i + k; j++) sum += nums[j];\n    if (sum > best) best = sum;\n  }\n  return best;\n}\n",
        ts: "function maxSumSubarrayK(nums: number[], k: number): number {\n  let best = -Infinity;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < i + k; j++) sum += nums[j];\n    if (sum > best) best = sum;\n  }\n  return best;\n}\n",
        time: "O(n·k)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "sw-min-sum-k",
    slug: "min-sum-window",
    title: "Min Sum of Size K",
    difficulty: "easy",
    patternIds: P,
    statement: "Return the minimum sum of any contiguous window of exactly `k` elements.",
    examples: [
      { input: "[2,1,5,1,3,2], 3", output: "6" },
      { input: "[1], 1", output: "1" },
      { input: "[5,5,5], 2", output: "10" },
    ],
    constraints: ["1 <= k <= nums.length <= 10000"],
    functionName: "minSumSubarrayK",
    starter: {
      js: "function minSumSubarrayK(nums, k) {\n  // Min sum of a window of size k.\n}\n",
      ts: "function minSumSubarrayK(nums: number[], k: number): number {\n  // Min sum of a window of size k.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 1, 5, 1, 3, 2], 3], expected: 6 },
      { args: [[1], 1], expected: 1 },
      { args: [[5, 5, 5], 2], expected: 10 },
    ],
    hidden: [
      { args: [[1, 2, 3, 4], 2], expected: 3 },
      { args: [[-1, -2, -3], 2], expected: -5 },
      { args: [[4, 3, 2, 1], 3], expected: 6 },
      { args: [[2, 2, 2], 3], expected: 6 },
      { args: [[3, 1, 4, 1, 5], 2], expected: 4 },
      { args: [[10, -10, 10], 2], expected: 0 },
    ],
    hints: [
      "Same slide as the max version, but track the minimum.",
      "Add the incoming element, drop the outgoing one each step.",
      "sum += nums[i] - nums[i - k]; keep the smallest sum seen.",
    ],
    solutions: [
      {
        label: "Slide the window",
        approach: "Maintain the running window sum and track its minimum.",
        js: "function minSumSubarrayK(nums, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  let best = sum;\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    if (sum < best) best = sum;\n  }\n  return best;\n}\n",
        ts: "function minSumSubarrayK(nums: number[], k: number): number {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  let best = sum;\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    if (sum < best) best = sum;\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Recompute each window",
        approach: "Sum every window directly.",
        js: "function minSumSubarrayK(nums, k) {\n  let best = Infinity;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < i + k; j++) sum += nums[j];\n    if (sum < best) best = sum;\n  }\n  return best;\n}\n",
        ts: "function minSumSubarrayK(nums: number[], k: number): number {\n  let best = Infinity;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < i + k; j++) sum += nums[j];\n    if (sum < best) best = sum;\n  }\n  return best;\n}\n",
        time: "O(n·k)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "sw-longest-unique",
    slug: "longest-unique-substring",
    title: "Longest Substring Without Repeats",
    difficulty: "medium",
    patternIds: P,
    statement: "Return the length of the longest substring that contains no repeated character.",
    examples: [
      { input: '"abcabcbb"', output: "3" },
      { input: '"bbbbb"', output: "1" },
      { input: '""', output: "0" },
    ],
    constraints: ["0 <= s.length <= 10000"],
    functionName: "longestUnique",
    starter: {
      js: "function longestUnique(s) {\n  // Length of the longest repeat-free substring.\n}\n",
      ts: "function longestUnique(s: string): number {\n  // Length of the longest repeat-free substring.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["abcabcbb"], expected: 3 },
      { args: ["bbbbb"], expected: 1 },
      { args: [""], expected: 0 },
    ],
    hidden: [
      { args: ["pwwkew"], expected: 3 },
      { args: ["a"], expected: 1 },
      { args: ["au"], expected: 2 },
      { args: ["dvdf"], expected: 3 },
      { args: ["abba"], expected: 2 },
      { args: ["tmmzuxt"], expected: 5 },
    ],
    hints: [
      "Grow a window to the right; when a repeat appears, jump the left edge past the earlier copy.",
      "Track the last index of each character to know where to move the left edge.",
      "if (last[c] >= start) start = last[c] + 1; last[c] = i; update best.",
    ],
    solutions: [
      {
        label: "Sliding window + last index",
        approach: "Move the window's start past any repeated character.",
        js: "function longestUnique(s) {\n  const last = {};\n  let start = 0, best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const c = s[i];\n    if (last[c] !== undefined && last[c] >= start) start = last[c] + 1;\n    last[c] = i;\n    best = Math.max(best, i - start + 1);\n  }\n  return best;\n}\n",
        ts: "function longestUnique(s: string): number {\n  const last: Record<string, number> = {};\n  let start = 0, best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const c = s[i];\n    if (last[c] !== undefined && last[c] >= start) start = last[c] + 1;\n    last[c] = i;\n    best = Math.max(best, i - start + 1);\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Set window shrink",
        approach: "Shrink the window from the left until the new char is unique.",
        js: "function longestUnique(s) {\n  const set = new Set();\n  let left = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (set.has(s[right])) { set.delete(s[left]); left++; }\n    set.add(s[right]);\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
        ts: "function longestUnique(s: string): number {\n  const set = new Set<string>();\n  let left = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (set.has(s[right])) { set.delete(s[left]); left++; }\n    set.add(s[right]);\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "sw-min-subarray-len",
    slug: "min-subarray-len",
    title: "Minimum Size Subarray Sum",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given positive numbers and a `target`, return the length of the shortest contiguous subarray whose sum is at least `target`, or 0 if none exists.",
    examples: [
      { input: "7, [2,3,1,2,4,3]", output: "2" },
      { input: "4, [1,4,4]", output: "1" },
      { input: "11, [1,1,1,1,1,1,1,1]", output: "0" },
    ],
    constraints: ["all values are positive", "0 <= nums.length <= 10000"],
    functionName: "minSubarrayLen",
    starter: {
      js: "function minSubarrayLen(target, nums) {\n  // Shortest subarray with sum >= target, or 0.\n}\n",
      ts: "function minSubarrayLen(target: number, nums: number[]): number {\n  // Shortest subarray with sum >= target, or 0.\n  return 0;\n}\n",
    },
    visible: [
      { args: [7, [2, 3, 1, 2, 4, 3]], expected: 2 },
      { args: [4, [1, 4, 4]], expected: 1 },
      { args: [11, [1, 1, 1, 1, 1, 1, 1, 1]], expected: 0 },
    ],
    hidden: [
      { args: [3, [1, 1, 1]], expected: 3 },
      { args: [100, [1, 2, 3]], expected: 0 },
      { args: [6, [10]], expected: 1 },
      { args: [5, [2, 3, 1, 1, 1]], expected: 2 },
      { args: [15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]], expected: 2 },
      { args: [1, [1]], expected: 1 },
    ],
    hints: [
      "Expand the window to reach the target, then shrink it from the left while it still qualifies.",
      "Each element enters and leaves the window at most once — O(n).",
      "while (sum >= target) { best = min(best, len); sum -= nums[left]; left++; }",
    ],
    solutions: [
      {
        label: "Shrinking window",
        approach: "Grow to hit the target, then contract to minimise the length.",
        js: "function minSubarrayLen(target, nums) {\n  let left = 0, sum = 0, best = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      best = Math.min(best, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n",
        ts: "function minSubarrayLen(target: number, nums: number[]): number {\n  let left = 0, sum = 0, best = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      best = Math.min(best, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Brute force",
        approach: "Try every start, extending until the sum qualifies.",
        js: "function minSubarrayLen(target, nums) {\n  let best = Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      if (sum >= target) { best = Math.min(best, j - i + 1); break; }\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n",
        ts: "function minSubarrayLen(target: number, nums: number[]): number {\n  let best = Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      if (sum >= target) { best = Math.min(best, j - i + 1); break; }\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n",
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "sw-longest-ones-k",
    slug: "max-consecutive-ones-k",
    title: "Max Consecutive Ones (K Flips)",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a binary list, return the length of the longest run of 1s you can get by flipping at most `k` zeros.",
    examples: [
      { input: "[1,1,1,0,0,0,1,1,1,1,0], 2", output: "6" },
      { input: "[0], 1", output: "1" },
      { input: "[1,1], 0", output: "2" },
    ],
    constraints: ["each value is 0 or 1", "0 <= nums.length <= 10000"],
    functionName: "longestOnes",
    starter: {
      js: "function longestOnes(bits, k) {\n  // Longest run of 1s after flipping <= k zeros.\n}\n",
      ts: "function longestOnes(bits: number[], k: number): number {\n  // Longest run of 1s after flipping <= k zeros.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2], expected: 6 },
      { args: [[0], 1], expected: 1 },
      { args: [[1, 1], 0], expected: 2 },
    ],
    hidden: [
      { args: [[], 2], expected: 0 },
      { args: [[0, 0], 0], expected: 0 },
      { args: [[1, 1, 1], 0], expected: 3 },
      { args: [[1, 0, 1], 1], expected: 3 },
      { args: [[1, 0, 0, 1], 1], expected: 2 },
      { args: [[1, 1, 0, 1, 1], 1], expected: 5 },
    ],
    hints: [
      "Keep a window with at most k zeros; expand right, and shrink left when there are too many zeros.",
      "Count zeros in the window; while count > k, move left past a zero.",
      "The answer is the largest window width you ever hold.",
    ],
    solutions: [
      {
        label: "Sliding window on zeros",
        approach: "Allow at most k zeros in the window; shrink when exceeded.",
        js: "function longestOnes(bits, k) {\n  let left = 0, zeros = 0, best = 0;\n  for (let right = 0; right < bits.length; right++) {\n    if (bits[right] === 0) zeros++;\n    while (zeros > k) { if (bits[left] === 0) zeros--; left++; }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
        ts: "function longestOnes(bits: number[], k: number): number {\n  let left = 0, zeros = 0, best = 0;\n  for (let right = 0; right < bits.length; right++) {\n    if (bits[right] === 0) zeros++;\n    while (zeros > k) { if (bits[left] === 0) zeros--; left++; }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Brute force",
        approach: "Try each start, extending while zeros used stays within k.",
        js: "function longestOnes(bits, k) {\n  let best = 0;\n  for (let i = 0; i < bits.length; i++) {\n    let zeros = 0;\n    for (let j = i; j < bits.length; j++) {\n      if (bits[j] === 0) zeros++;\n      if (zeros > k) break;\n      best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
        ts: "function longestOnes(bits: number[], k: number): number {\n  let best = 0;\n  for (let i = 0; i < bits.length; i++) {\n    let zeros = 0;\n    for (let j = i; j < bits.length; j++) {\n      if (bits[j] === 0) zeros++;\n      if (zeros > k) break;\n      best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "sw-longest-k-distinct",
    slug: "longest-k-distinct",
    title: "Longest Substring with K Distinct",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return the length of the longest substring containing at most `k` distinct characters.",
    examples: [
      { input: '"eceba", 2', output: "3" },
      { input: '"aa", 1', output: "2" },
      { input: '"abc", 0', output: "0" },
    ],
    constraints: ["0 <= s.length <= 10000", "0 <= k"],
    functionName: "longestKDistinct",
    starter: {
      js: "function longestKDistinct(s, k) {\n  // Longest substring with <= k distinct chars.\n}\n",
      ts: "function longestKDistinct(s: string, k: number): number {\n  // Longest substring with <= k distinct chars.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["eceba", 2], expected: 3 },
      { args: ["aa", 1], expected: 2 },
      { args: ["abc", 0], expected: 0 },
    ],
    hidden: [
      { args: ["", 2], expected: 0 },
      { args: ["a", 1], expected: 1 },
      { args: ["abaccc", 2], expected: 4 },
      { args: ["aabbcc", 1], expected: 2 },
      { args: ["aaaa", 2], expected: 4 },
      { args: ["wxyz", 2], expected: 2 },
    ],
    hints: [
      "Keep a count map of characters in the window; the number of keys is the distinct count.",
      "When distinct exceeds k, shrink from the left, removing a character when its count hits 0.",
      "Track the widest window that stays within k distinct characters.",
    ],
    solutions: [
      {
        label: "Sliding window + count map",
        approach: "Shrink the window whenever it holds more than k distinct characters.",
        js: "function longestKDistinct(s, k) {\n  if (k === 0) return 0;\n  const count = {};\n  let left = 0, distinct = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    if (!count[c]) distinct++;\n    count[c] = (count[c] || 0) + 1;\n    while (distinct > k) {\n      const l = s[left];\n      count[l]--;\n      if (count[l] === 0) distinct--;\n      left++;\n    }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
        ts: "function longestKDistinct(s: string, k: number): number {\n  if (k === 0) return 0;\n  const count: Record<string, number> = {};\n  let left = 0, distinct = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    if (!count[c]) distinct++;\n    count[c] = (count[c] || 0) + 1;\n    while (distinct > k) {\n      const l = s[left];\n      count[l]--;\n      if (count[l] === 0) distinct--;\n      left++;\n    }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Brute force",
        approach: "Try each start, extending while the distinct count stays within k.",
        js: "function longestKDistinct(s, k) {\n  let best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const seen = new Set();\n    for (let j = i; j < s.length; j++) {\n      seen.add(s[j]);\n      if (seen.size > k) break;\n      best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
        ts: "function longestKDistinct(s: string, k: number): number {\n  let best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const seen = new Set<string>();\n    for (let j = i; j < s.length; j++) {\n      seen.add(s[j]);\n      if (seen.size > k) break;\n      best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "sw-window-sums",
    slug: "window-sums",
    title: "Window Sums",
    difficulty: "easy",
    patternIds: P,
    statement: "Return the sum of each contiguous window of size `k`, left to right.",
    examples: [
      { input: "[1,2,3,4], 2", output: "[3,5,7]" },
      { input: "[5], 1", output: "[5]" },
      { input: "[1,2,3], 3", output: "[6]" },
    ],
    constraints: ["1 <= k <= nums.length <= 10000"],
    functionName: "windowSums",
    starter: {
      js: "function windowSums(nums, k) {\n  // Sum of each size-k window.\n}\n",
      ts: "function windowSums(nums: number[], k: number): number[] {\n  // Sum of each size-k window.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4], 2], expected: [3, 5, 7] },
      { args: [[5], 1], expected: [5] },
      { args: [[1, 2, 3], 3], expected: [6] },
    ],
    hidden: [
      { args: [[1, 1, 1, 1], 2], expected: [2, 2, 2] },
      { args: [[2, 4, 6], 2], expected: [6, 10] },
      { args: [[-1, -2, -3], 1], expected: [-1, -2, -3] },
      { args: [[1, 2, 3, 4, 5], 5], expected: [15] },
      { args: [[0, 0, 0], 2], expected: [0, 0] },
      { args: [[3, 1, 4, 1], 3], expected: [8, 6] },
    ],
    hints: [
      "Compute the first window, then slide adjusting by one in and one out.",
      "Push the running sum after each slide.",
      "sum += nums[i] - nums[i - k]; out.push(sum).",
    ],
    solutions: [
      {
        label: "Slide and record",
        approach: "Maintain the running window sum, pushing each value.",
        js: "function windowSums(nums, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  const out = [sum];\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    out.push(sum);\n  }\n  return out;\n}\n",
        ts: "function windowSums(nums: number[], k: number): number[] {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  const out = [sum];\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    out.push(sum);\n  }\n  return out;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Slice each window",
        approach: "Sum each window slice directly.",
        js: "function windowSums(nums, k) {\n  const out = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    out.push(nums.slice(i, i + k).reduce((a, b) => a + b, 0));\n  }\n  return out;\n}\n",
        ts: "function windowSums(nums: number[], k: number): number[] {\n  const out: number[] = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    out.push(nums.slice(i, i + k).reduce((a, b) => a + b, 0));\n  }\n  return out;\n}\n",
        time: "O(n·k)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "sw-count-anagrams",
    slug: "count-anagram-windows",
    title: "Count Anagram Windows",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return how many substrings of `s` are anagrams of `p` (same length, same character counts).",
    examples: [
      { input: '"cbaebabacd", "abc"', output: "2" },
      { input: '"abab", "ab"', output: "3" },
      { input: '"", "a"', output: "0" },
    ],
    constraints: ["0 <= s.length, p.length <= 10000"],
    functionName: "countAnagramWindows",
    starter: {
      js: "function countAnagramWindows(s, p) {\n  // Count substrings of s that are anagrams of p.\n}\n",
      ts: "function countAnagramWindows(s: string, p: string): number {\n  // Count substrings of s that are anagrams of p.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["cbaebabacd", "abc"], expected: 2 },
      { args: ["abab", "ab"], expected: 3 },
      { args: ["", "a"], expected: 0 },
    ],
    hidden: [
      { args: ["aa", "aa"], expected: 1 },
      { args: ["aaa", "aa"], expected: 2 },
      { args: ["abc", "xyz"], expected: 0 },
      { args: ["aabb", "ab"], expected: 1 },
      { args: ["hello", "ol"], expected: 1 },
      { args: ["abab", "ba"], expected: 3 },
    ],
    hints: [
      "Slide a window the size of p across s, keeping character counts.",
      "The window is an anagram of p exactly when their counts match.",
      "Add the new char, remove the char leaving the window, then compare counts.",
    ],
    solutions: [
      {
        label: "Sliding count window",
        approach: "Maintain the window's character counts and compare to p's.",
        js: "function countAnagramWindows(s, p) {\n  const L = p.length;\n  if (L === 0 || L > s.length) return 0;\n  const need = {}, win = {};\n  for (const c of p) need[c] = (need[c] || 0) + 1;\n  const match = () => {\n    for (const c in need) if ((win[c] || 0) !== need[c]) return false;\n    for (const c in win) if ((need[c] || 0) !== win[c]) return false;\n    return true;\n  };\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    win[s[i]] = (win[s[i]] || 0) + 1;\n    if (i >= L) { const o = s[i - L]; win[o]--; if (win[o] === 0) delete win[o]; }\n    if (i >= L - 1 && match()) count++;\n  }\n  return count;\n}\n",
        ts: "function countAnagramWindows(s: string, p: string): number {\n  const L = p.length;\n  if (L === 0 || L > s.length) return 0;\n  const need: Record<string, number> = {}, win: Record<string, number> = {};\n  for (const c of p) need[c] = (need[c] || 0) + 1;\n  const match = () => {\n    for (const c in need) if ((win[c] || 0) !== need[c]) return false;\n    for (const c in win) if ((need[c] || 0) !== win[c]) return false;\n    return true;\n  };\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    win[s[i]] = (win[s[i]] || 0) + 1;\n    if (i >= L) { const o = s[i - L]; win[o]--; if (win[o] === 0) delete win[o]; }\n    if (i >= L - 1 && match()) count++;\n  }\n  return count;\n}\n",
        time: "O(n·Σ)",
        space: "O(Σ)",
      },
      {
        label: "Check each window by sorting",
        approach: "Sort each window and p, comparing the canonical forms.",
        js: "function countAnagramWindows(s, p) {\n  const L = p.length;\n  if (L === 0 || L > s.length) return 0;\n  const key = (str) => str.split('').sort().join('');\n  const target = key(p);\n  let count = 0;\n  for (let i = 0; i + L <= s.length; i++) {\n    if (key(s.slice(i, i + L)) === target) count++;\n  }\n  return count;\n}\n",
        ts: "function countAnagramWindows(s: string, p: string): number {\n  const L = p.length;\n  if (L === 0 || L > s.length) return 0;\n  const key = (str: string) => str.split('').sort().join('');\n  const target = key(p);\n  let count = 0;\n  for (let i = 0; i + L <= s.length; i++) {\n    if (key(s.slice(i, i + L)) === target) count++;\n  }\n  return count;\n}\n",
        time: "O(n·L log L)",
        space: "O(L)",
      },
    ],
  },
  {
    id: "sw-char-replacement",
    slug: "longest-repeating-replacement",
    title: "Longest Repeating Replacement",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the length of the longest substring of `s` that can be made all one character by replacing at most `k` characters.",
    examples: [
      { input: '"ABAB", 2', output: "4" },
      { input: '"AABABBA", 1', output: "4" },
      { input: '"", 0', output: "0" },
    ],
    constraints: ["0 <= s.length <= 10000", "0 <= k"],
    functionName: "characterReplacement",
    starter: {
      js: "function characterReplacement(s, k) {\n  // Longest same-char run after <= k replacements.\n}\n",
      ts: "function characterReplacement(s: string, k: number): number {\n  // Longest same-char run after <= k replacements.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["ABAB", 2], expected: 4 },
      { args: ["AABABBA", 1], expected: 4 },
      { args: ["", 0], expected: 0 },
    ],
    hidden: [
      { args: ["A", 0], expected: 1 },
      { args: ["AAAA", 0], expected: 4 },
      { args: ["ABCDE", 1], expected: 2 },
      { args: ["AABA", 0], expected: 2 },
      { args: ["BBBB", 2], expected: 4 },
      { args: ["ABBB", 1], expected: 4 },
    ],
    hints: [
      "A window is valid if (its length − count of its most frequent char) ≤ k replacements.",
      "Track the max frequency of any character in the window as you expand.",
      "while (windowLen - maxFreq > k) shrink from the left.",
    ],
    solutions: [
      {
        label: "Sliding window on max frequency",
        approach: "Keep the window valid: fillers needed = length − most common char count.",
        js: "function characterReplacement(s, k) {\n  const count = {};\n  let left = 0, maxFreq = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    count[c] = (count[c] || 0) + 1;\n    maxFreq = Math.max(maxFreq, count[c]);\n    while ((right - left + 1) - maxFreq > k) { count[s[left]]--; left++; }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
        ts: "function characterReplacement(s: string, k: number): number {\n  const count: Record<string, number> = {};\n  let left = 0, maxFreq = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    count[c] = (count[c] || 0) + 1;\n    maxFreq = Math.max(maxFreq, count[c]);\n    while ((right - left + 1) - maxFreq > k) { count[s[left]]--; left++; }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(Σ)",
      },
      {
        label: "Brute force",
        approach: "For each window, check whether ≤ k replacements suffice.",
        js: "function characterReplacement(s, k) {\n  let best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const count = {};\n    let maxFreq = 0;\n    for (let j = i; j < s.length; j++) {\n      count[s[j]] = (count[s[j]] || 0) + 1;\n      maxFreq = Math.max(maxFreq, count[s[j]]);\n      if ((j - i + 1) - maxFreq <= k) best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
        ts: "function characterReplacement(s: string, k: number): number {\n  let best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const count: Record<string, number> = {};\n    let maxFreq = 0;\n    for (let j = i; j < s.length; j++) {\n      count[s[j]] = (count[s[j]] || 0) + 1;\n      maxFreq = Math.max(maxFreq, count[s[j]]);\n      if ((j - i + 1) - maxFreq <= k) best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
        time: "O(n²)",
        space: "O(Σ)",
      },
    ],
  },
  {
    id: "sw-product-less-than-k",
    slug: "subarray-product-less-than-k",
    title: "Subarray Product Less Than K",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given positive integers, return the number of contiguous subarrays whose product is strictly less than `k`.",
    examples: [
      { input: "[10,5,2,6], 100", output: "8" },
      { input: "[1,2,3], 0", output: "0" },
      { input: "[1,1,1], 2", output: "6" },
    ],
    constraints: ["all values are positive integers", "0 <= nums.length <= 10000"],
    functionName: "numSubarrayProductLessThanK",
    starter: {
      js: "function numSubarrayProductLessThanK(nums, k) {\n  // Count subarrays with product < k.\n}\n",
      ts: "function numSubarrayProductLessThanK(nums: number[], k: number): number {\n  // Count subarrays with product < k.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[10, 5, 2, 6], 100], expected: 8 },
      { args: [[1, 2, 3], 0], expected: 0 },
      { args: [[1, 1, 1], 2], expected: 6 },
    ],
    hidden: [
      { args: [[], 5], expected: 0 },
      { args: [[2], 3], expected: 1 },
      { args: [[2], 1], expected: 0 },
      { args: [[1, 2, 3], 7], expected: 6 },
      { args: [[10, 10], 5], expected: 0 },
      { args: [[1, 2, 3, 4], 10], expected: 7 },
    ],
    hints: [
      "Shrink the window from the left whenever the product reaches k.",
      "Every new right endpoint adds (right - left + 1) valid subarrays ending there.",
      "If k <= 1 the answer is 0, since positive products are at least 1.",
    ],
    solutions: [
      {
        label: "Shrinking product window",
        approach: "Keep the window product below k; count subarrays ending at each right.",
        js: "function numSubarrayProductLessThanK(nums, k) {\n  if (k <= 1) return 0;\n  let prod = 1, left = 0, count = 0;\n  for (let right = 0; right < nums.length; right++) {\n    prod *= nums[right];\n    while (prod >= k) { prod /= nums[left]; left++; }\n    count += right - left + 1;\n  }\n  return count;\n}\n",
        ts: "function numSubarrayProductLessThanK(nums: number[], k: number): number {\n  if (k <= 1) return 0;\n  let prod = 1, left = 0, count = 0;\n  for (let right = 0; right < nums.length; right++) {\n    prod *= nums[right];\n    while (prod >= k) { prod /= nums[left]; left++; }\n    count += right - left + 1;\n  }\n  return count;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Brute force",
        approach: "Extend each start while the product stays below k.",
        js: "function numSubarrayProductLessThanK(nums, k) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let prod = 1;\n    for (let j = i; j < nums.length; j++) {\n      prod *= nums[j];\n      if (prod >= k) break;\n      count++;\n    }\n  }\n  return count;\n}\n",
        ts: "function numSubarrayProductLessThanK(nums: number[], k: number): number {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let prod = 1;\n    for (let j = i; j < nums.length; j++) {\n      prod *= nums[j];\n      if (prod >= k) break;\n      count++;\n    }\n  }\n  return count;\n}\n",
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
];

export const slidingWindowProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const slidingWindowMcqs: QuizQuestion[] = [
  {
    id: "s4-sw-time",
    kind: "mcq",
    prompt: "A sliding window that expands and contracts across an array visits each element a constant number of times, so it runs in:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "Both window edges only move forward, giving a linear total.",
  },
  {
    id: "s4-sw-fixed",
    kind: "mcq",
    prompt: "Re-summing each fixed-size window from scratch is O(n·k); sliding the window instead makes each step:",
    options: ["O(1)", "O(log k)", "O(k)", "O(n)"],
    answerIndex: 0,
    explanation: "Add the entering element and subtract the leaving one — constant work per slide.",
  },
];

export const slidingWindowModule: Module = {
  id: "m-pat-sliding-window",
  stageId: S,
  title: "Sliding Window",
  kind: "patternModule",
  summary: "A moving sub-range over a sequence — fixed or variable width — that avoids recomputation.",
  lessonSections: [
    {
      heading: "A window that moves",
      body: `The sliding-window pattern maintains a contiguous sub-range and updates it incrementally as it moves, instead of recomputing from scratch. For a **fixed** width, add the entering element and subtract the leaving one — O(1) per step.

\`\`\`js
// Max sum of any window of size 3
function maxSum3(nums) {
  let sum = nums[0] + nums[1] + nums[2], best = sum;
  for (let i = 3; i < nums.length; i++) {
    sum += nums[i] - nums[i - 3];
    best = Math.max(best, sum);
  }
  return best;
}
console.log(maxSum3([2, 1, 5, 1, 3, 2])); // 9
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for a sliding window when the problem asks for:

- the best/shortest/longest **contiguous** subarray or substring,
- something about a **fixed-size** window (sums, averages, maxima),
- a **variable** window constrained by a rule ("at most k distinct", "sum ≥ target", "≤ k replacements"),
- counting substrings/subarrays that satisfy a monotone condition.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Variable window: grow right, shrink left while invalid
let left = 0;
for (let right = 0; right < arr.length; right++) {
  add(arr[right]);
  while (!valid()) { remove(arr[left]); left++; }
  best = Math.max(best, right - left + 1);
}
\`\`\`

**Pitfalls:** forgetting to shrink (window never contracts); mishandling the exact moment a window becomes valid vs. invalid; off-by-one on \`right - left + 1\`. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "sw-max-sum-k",
  drillProblemIds: [
    "sw-max-sum-k",
    "sw-min-sum-k",
    "sw-longest-unique",
    "sw-min-subarray-len",
    "sw-longest-ones-k",
    "sw-longest-k-distinct",
  ],
  testPoolProblemIds: [
    "sw-window-sums",
    "sw-count-anagrams",
    "sw-char-replacement",
    "sw-product-less-than-k",
  ],
  complexityQuestionIds: ["s4-sw-time", "s4-sw-fixed"],
  badgeId: "badge-pat-sliding-window",
  prerequisiteModuleIds: ["m-pat-prefix-sum"],
};
