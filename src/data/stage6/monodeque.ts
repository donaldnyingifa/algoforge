import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["mono-deque"];

/*
 * A monotonic deque holds indices whose values are kept in increasing or
 * decreasing order, so the extreme of a sliding window sits at the front. Each
 * index is pushed and popped once, giving amortized O(n). Drills pair the deque
 * solution with a brute-force or O(n·k) baseline.
 */

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "md-window-max",
    slug: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an array and a window size `k`, return an array of the maximum of each contiguous window of size `k` (left to right).",
    examples: [
      { input: "[1,3,-1,-3,5,3,6,7], 3", output: "[3,3,5,5,6,7]" },
      { input: "[1], 1", output: "[1]" },
      { input: "[9,8,7,6], 2", output: "[9,8,7]" },
    ],
    constraints: ["1 <= k <= nums.length <= 100000"],
    functionName: "slidingWindowMax",
    starter: {
      js: "function slidingWindowMax(nums, k) {\n  // Max of each window of size k.\n}\n",
      ts: "function slidingWindowMax(nums: number[], k: number): number[] {\n  // Max of each window of size k.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
      { args: [[1], 1], expected: [1] },
      { args: [[9, 8, 7, 6], 2], expected: [9, 8, 7] },
    ],
    hidden: [
      { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3, 4, 5] },
      { args: [[4, 4, 4, 4], 2], expected: [4, 4, 4] },
      { args: [[2, 1, 3, 4, 6, 3, 8, 9, 10, 12, 56], 4], expected: [4, 6, 6, 8, 9, 10, 12, 56] },
      { args: [[5, 3, 4], 3], expected: [5] },
      { args: [[-7, -8, -9], 2], expected: [-7, -8] },
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
    ],
    hints: [
      "Keep a deque of indices whose values are strictly decreasing.",
      "Before pushing i, pop smaller-or-equal values from the back; drop the front if it leaves the window.",
      "The front index always holds the current window's maximum.",
    ],
    solutions: [
      {
        label: "Monotonic deque (decreasing)",
        approach: "Maintain candidate maxima in a decreasing deque of indices.",
        js: "function slidingWindowMax(nums, k) {\n  const res = [], dq = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) res.push(nums[dq[0]]);\n  }\n  return res;\n}\n",
        ts: "function slidingWindowMax(nums: number[], k: number): number[] {\n  const res: number[] = [], dq: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) res.push(nums[dq[0]]);\n  }\n  return res;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Brute force per window",
        approach: "Scan each window of size k for its maximum.",
        js: "function slidingWindowMax(nums, k) {\n  const res = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    let m = nums[i];\n    for (let j = i + 1; j < i + k; j++) m = Math.max(m, nums[j]);\n    res.push(m);\n  }\n  return res;\n}\n",
        ts: "function slidingWindowMax(nums: number[], k: number): number[] {\n  const res: number[] = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    let m = nums[i];\n    for (let j = i + 1; j < i + k; j++) m = Math.max(m, nums[j]);\n    res.push(m);\n  }\n  return res;\n}\n",
        time: "O(n·k)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "md-window-min",
    slug: "sliding-window-minimum",
    title: "Sliding Window Minimum",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an array and a window size `k`, return an array of the minimum of each contiguous window of size `k`.",
    examples: [
      { input: "[1,3,-1,-3,5,3,6,7], 3", output: "[-1,-3,-3,-3,3,3]" },
      { input: "[1], 1", output: "[1]" },
      { input: "[9,8,7,6], 2", output: "[8,7,6]" },
    ],
    constraints: ["1 <= k <= nums.length <= 100000"],
    functionName: "slidingWindowMin",
    starter: {
      js: "function slidingWindowMin(nums, k) {\n  // Min of each window of size k.\n}\n",
      ts: "function slidingWindowMin(nums: number[], k: number): number[] {\n  // Min of each window of size k.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [-1, -3, -3, -3, 3, 3] },
      { args: [[1], 1], expected: [1] },
      { args: [[9, 8, 7, 6], 2], expected: [8, 7, 6] },
    ],
    hidden: [
      { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3, 4, 5] },
      { args: [[4, 4, 4, 4], 2], expected: [4, 4, 4] },
      { args: [[2, 1, 3, 4, 6, 3, 8, 9, 10, 12, 56], 4], expected: [1, 1, 3, 3, 3, 3, 8, 9] },
      { args: [[5, 3, 4], 3], expected: [3] },
      { args: [[-7, -8, -9], 2], expected: [-8, -9] },
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [-1, -3, -3, -3, 3, 3] },
    ],
    hints: [
      "Mirror the maximum version but keep the deque increasing.",
      "Pop larger-or-equal values from the back before pushing i.",
      "The front holds the window minimum.",
    ],
    solutions: [
      {
        label: "Monotonic deque (increasing)",
        approach: "Keep candidate minima in an increasing deque of indices.",
        js: "function slidingWindowMin(nums, k) {\n  const res = [], dq = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] >= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) res.push(nums[dq[0]]);\n  }\n  return res;\n}\n",
        ts: "function slidingWindowMin(nums: number[], k: number): number[] {\n  const res: number[] = [], dq: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] >= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) res.push(nums[dq[0]]);\n  }\n  return res;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Brute force per window",
        approach: "Scan each window of size k for its minimum.",
        js: "function slidingWindowMin(nums, k) {\n  const res = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    let m = nums[i];\n    for (let j = i + 1; j < i + k; j++) m = Math.min(m, nums[j]);\n    res.push(m);\n  }\n  return res;\n}\n",
        ts: "function slidingWindowMin(nums: number[], k: number): number[] {\n  const res: number[] = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    let m = nums[i];\n    for (let j = i + 1; j < i + k; j++) m = Math.min(m, nums[j]);\n    res.push(m);\n  }\n  return res;\n}\n",
        time: "O(n·k)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "md-sum-window-maxes",
    slug: "sum-of-window-maximums",
    title: "Sum of Window Maximums",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an array and a window size `k`, return the sum of the maximums of every contiguous window of size `k`.",
    examples: [
      { input: "[1,3,-1,-3,5,3,6,7], 3", output: "29" },
      { input: "[1,2,3], 1", output: "6" },
      { input: "[5,5], 2", output: "5" },
    ],
    constraints: ["1 <= k <= nums.length <= 100000"],
    functionName: "sumWindowMaxes",
    starter: {
      js: "function sumWindowMaxes(nums, k) {\n  // Sum of the max of each window of size k.\n}\n",
      ts: "function sumWindowMaxes(nums: number[], k: number): number {\n  // Sum of the max of each window of size k.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: 29 },
      { args: [[1, 2, 3], 1], expected: 6 },
      { args: [[5, 5], 2], expected: 5 },
    ],
    hidden: [
      { args: [[1, 2, 3, 4], 2], expected: 9 },
      { args: [[10, 1, 10, 1], 2], expected: 30 },
      { args: [[4, 3, 2, 1], 4], expected: 4 },
      { args: [[1, 1, 1], 2], expected: 2 },
      { args: [[7], 1], expected: 7 },
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: 29 },
    ],
    hints: [
      "Compute each window's maximum with a decreasing deque.",
      "Accumulate the front value once per full window.",
      "This is the sliding-window-maximum drill with a running total.",
    ],
    solutions: [
      {
        label: "Monotonic deque + running sum",
        approach: "Add the front (window max) to a total as each window completes.",
        js: "function sumWindowMaxes(nums, k) {\n  const dq = [];\n  let total = 0;\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) total += nums[dq[0]];\n  }\n  return total;\n}\n",
        ts: "function sumWindowMaxes(nums: number[], k: number): number {\n  const dq: number[] = [];\n  let total = 0;\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) total += nums[dq[0]];\n  }\n  return total;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Brute force",
        approach: "Sum the maximum of each window scanned directly.",
        js: "function sumWindowMaxes(nums, k) {\n  let total = 0;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let m = nums[i];\n    for (let j = i + 1; j < i + k; j++) m = Math.max(m, nums[j]);\n    total += m;\n  }\n  return total;\n}\n",
        ts: "function sumWindowMaxes(nums: number[], k: number): number {\n  let total = 0;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let m = nums[i];\n    for (let j = i + 1; j < i + k; j++) m = Math.max(m, nums[j]);\n    total += m;\n  }\n  return total;\n}\n",
        time: "O(n·k)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "md-first-negative",
    slug: "first-negative-each-window",
    title: "First Negative in Each Window",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an array and a window size `k`, return an array where each entry is the first negative number in the corresponding window of size `k`, or 0 if that window has no negative number.",
    examples: [
      { input: "[12,-1,-7,8,-15,30,16,28], 3", output: "[-1,-1,-7,-15,-15,0]" },
      { input: "[1,2,3], 2", output: "[0,0]" },
      { input: "[-1,-2,-3], 2", output: "[-1,-2]" },
    ],
    constraints: ["1 <= k <= nums.length <= 100000"],
    functionName: "firstNegativeWindow",
    starter: {
      js: "function firstNegativeWindow(nums, k) {\n  // First negative in each window, or 0.\n}\n",
      ts: "function firstNegativeWindow(nums: number[], k: number): number[] {\n  // First negative in each window, or 0.\n  return [];\n}\n",
    },
    visible: [
      { args: [[12, -1, -7, 8, -15, 30, 16, 28], 3], expected: [-1, -1, -7, -15, -15, 0] },
      { args: [[1, 2, 3], 2], expected: [0, 0] },
      { args: [[-1, -2, -3], 2], expected: [-1, -2] },
    ],
    hidden: [
      { args: [[5], 1], expected: [0] },
      { args: [[1, -1, 2, -2, 3, -3], 2], expected: [-1, -1, -2, -2, -3] },
      { args: [[4, 5, 6, 7], 3], expected: [0, 0] },
      { args: [[-8, 2, 3, -6, 10], 2], expected: [-8, 0, -6, -6] },
      { args: [[-1], 1], expected: [-1] },
      { args: [[12, -1, -7, 8, -15, 30, 16, 28], 3], expected: [-1, -1, -7, -15, -15, 0] },
    ],
    hints: [
      "Keep a deque of the indices of negative numbers only.",
      "Drop front indices once they leave the window.",
      "The front is the first negative; if the deque is empty, emit 0.",
    ],
    solutions: [
      {
        label: "Deque of negative indices",
        approach: "Queue negatives; the front (in-window) is the first negative.",
        js: "function firstNegativeWindow(nums, k) {\n  const res = [], dq = [];\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] < 0) dq.push(i);\n    while (dq.length && dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) res.push(dq.length ? nums[dq[0]] : 0);\n  }\n  return res;\n}\n",
        ts: "function firstNegativeWindow(nums: number[], k: number): number[] {\n  const res: number[] = [], dq: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] < 0) dq.push(i);\n    while (dq.length && dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) res.push(dq.length ? nums[dq[0]] : 0);\n  }\n  return res;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Brute force",
        approach: "Scan each window for its first negative value.",
        js: "function firstNegativeWindow(nums, k) {\n  const res = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    let found = 0;\n    for (let j = i; j < i + k; j++) if (nums[j] < 0) { found = nums[j]; break; }\n    res.push(found);\n  }\n  return res;\n}\n",
        ts: "function firstNegativeWindow(nums: number[], k: number): number[] {\n  const res: number[] = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    let found = 0;\n    for (let j = i; j < i + k; j++) if (nums[j] < 0) { found = nums[j]; break; }\n    res.push(found);\n  }\n  return res;\n}\n",
        time: "O(n·k)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "md-longest-bounded-diff",
    slug: "longest-subarray-bounded-diff",
    title: "Longest Subarray with Bounded Difference",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given an array and a `limit`, return the length of the longest contiguous subarray such that the difference between its maximum and minimum is at most `limit`.",
    examples: [
      { input: "[8,2,4,7], 4", output: "2" },
      { input: "[10,1,2,4,7,2], 5", output: "4" },
      { input: "[4,2,2,2,4,4,2,2], 0", output: "3" },
    ],
    constraints: ["1 <= nums.length <= 100000", "0 <= limit"],
    functionName: "longestBoundedSubarray",
    starter: {
      js: "function longestBoundedSubarray(nums, limit) {\n  // Longest subarray with max - min <= limit.\n}\n",
      ts: "function longestBoundedSubarray(nums: number[], limit: number): number {\n  // Longest subarray with max - min <= limit.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[8, 2, 4, 7], 4], expected: 2 },
      { args: [[10, 1, 2, 4, 7, 2], 5], expected: 4 },
      { args: [[4, 2, 2, 2, 4, 4, 2, 2], 0], expected: 3 },
    ],
    hidden: [
      { args: [[1], 5], expected: 1 },
      { args: [[1, 5, 6, 7, 8, 10, 6, 5, 6], 4], expected: 5 },
      { args: [[2, 2, 2, 2], 0], expected: 4 },
      { args: [[1, 2, 3, 4, 5], 0], expected: 1 },
      { args: [[5, 4, 2, 4], 2], expected: 3 },
      { args: [[8, 2, 4, 7], 4], expected: 2 },
    ],
    hints: [
      "Slide a window, keeping a max-deque and a min-deque over it.",
      "When front-max minus front-min exceeds the limit, shrink from the left.",
      "Track the largest valid window width seen.",
    ],
    solutions: [
      {
        label: "Two deques + sliding window",
        approach: "Maintain window max and min; shrink left when the spread is too big.",
        js: "function longestBoundedSubarray(nums, limit) {\n  const maxd = [], mind = [];\n  let l = 0, best = 0;\n  for (let r = 0; r < nums.length; r++) {\n    while (maxd.length && nums[maxd[maxd.length - 1]] <= nums[r]) maxd.pop();\n    maxd.push(r);\n    while (mind.length && nums[mind[mind.length - 1]] >= nums[r]) mind.pop();\n    mind.push(r);\n    while (nums[maxd[0]] - nums[mind[0]] > limit) {\n      l++;\n      if (maxd[0] < l) maxd.shift();\n      if (mind[0] < l) mind.shift();\n    }\n    best = Math.max(best, r - l + 1);\n  }\n  return best;\n}\n",
        ts: "function longestBoundedSubarray(nums: number[], limit: number): number {\n  const maxd: number[] = [], mind: number[] = [];\n  let l = 0, best = 0;\n  for (let r = 0; r < nums.length; r++) {\n    while (maxd.length && nums[maxd[maxd.length - 1]] <= nums[r]) maxd.pop();\n    maxd.push(r);\n    while (mind.length && nums[mind[mind.length - 1]] >= nums[r]) mind.pop();\n    mind.push(r);\n    while (nums[maxd[0]] - nums[mind[0]] > limit) {\n      l++;\n      if (maxd[0] < l) maxd.shift();\n      if (mind[0] < l) mind.shift();\n    }\n    best = Math.max(best, r - l + 1);\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force windows",
        approach: "Expand from each start until the spread exceeds the limit.",
        js: "function longestBoundedSubarray(nums, limit) {\n  let best = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let mn = nums[i], mx = nums[i];\n    for (let j = i; j < nums.length; j++) {\n      mn = Math.min(mn, nums[j]); mx = Math.max(mx, nums[j]);\n      if (mx - mn > limit) break;\n      best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
        ts: "function longestBoundedSubarray(nums: number[], limit: number): number {\n  let best = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let mn = nums[i], mx = nums[i];\n    for (let j = i; j < nums.length; j++) {\n      mn = Math.min(mn, nums[j]); mx = Math.max(mx, nums[j]);\n      if (mx - mn > limit) break;\n      best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "md-shortest-subarray-k",
    slug: "shortest-subarray-at-least-k",
    title: "Shortest Subarray with Sum at Least K",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given an array (values may be negative) and a target `k`, return the length of the shortest non-empty contiguous subarray whose sum is at least `k`. Return -1 if none exists.",
    examples: [
      { input: "[1], 1", output: "1" },
      { input: "[1,2], 4", output: "-1" },
      { input: "[2,-1,2], 3", output: "3" },
    ],
    constraints: ["1 <= nums.length <= 100000"],
    functionName: "shortestSubarrayAtLeastK",
    starter: {
      js: "function shortestSubarrayAtLeastK(nums, k) {\n  // Length of the shortest subarray with sum >= k, or -1.\n}\n",
      ts: "function shortestSubarrayAtLeastK(nums: number[], k: number): number {\n  // Length of the shortest subarray with sum >= k, or -1.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1], 1], expected: 1 },
      { args: [[1, 2], 4], expected: -1 },
      { args: [[2, -1, 2], 3], expected: 3 },
    ],
    hidden: [
      { args: [[84, -37, 32, 40, 95], 167], expected: 3 },
      { args: [[1, 2, 3, 4, 5], 11], expected: 3 },
      { args: [[-1, 2], 1], expected: 1 },
      { args: [[5], 5], expected: 1 },
      { args: [[2, -1, 2, -1, 2], 3], expected: 3 },
      { args: [[1], 2], expected: -1 },
    ],
    hints: [
      "Work on prefix sums; a subarray sum is a difference of two prefixes.",
      "Keep an increasing deque of prefix indices.",
      "Pop the front while it forms a valid (≥ k) window, and pop the back while it isn't smaller.",
    ],
    solutions: [
      {
        label: "Monotonic deque on prefix sums",
        approach: "Increasing deque of prefixes; shrink from the front once a window hits k.",
        js: "function shortestSubarrayAtLeastK(nums, k) {\n  const n = nums.length;\n  const pre = new Array(n + 1).fill(0);\n  for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i];\n  const dq = [];\n  let best = n + 1;\n  for (let i = 0; i <= n; i++) {\n    while (dq.length && pre[i] - pre[dq[0]] >= k) best = Math.min(best, i - dq.shift());\n    while (dq.length && pre[dq[dq.length - 1]] >= pre[i]) dq.pop();\n    dq.push(i);\n  }\n  return best === n + 1 ? -1 : best;\n}\n",
        ts: "function shortestSubarrayAtLeastK(nums: number[], k: number): number {\n  const n = nums.length;\n  const pre = new Array(n + 1).fill(0);\n  for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i];\n  const dq: number[] = [];\n  let best = n + 1;\n  for (let i = 0; i <= n; i++) {\n    while (dq.length && pre[i] - pre[dq[0]] >= k) best = Math.min(best, i - (dq.shift() as number));\n    while (dq.length && pre[dq[dq.length - 1]] >= pre[i]) dq.pop();\n    dq.push(i);\n  }\n  return best === n + 1 ? -1 : best;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force prefix scan",
        approach: "Check every subarray sum — an O(n²) baseline.",
        js: "function shortestSubarrayAtLeastK(nums, k) {\n  const n = nums.length;\n  let best = n + 1;\n  for (let i = 0; i < n; i++) {\n    let sum = 0;\n    for (let j = i; j < n; j++) {\n      sum += nums[j];\n      if (sum >= k) { best = Math.min(best, j - i + 1); break; }\n    }\n  }\n  return best === n + 1 ? -1 : best;\n}\n",
        ts: "function shortestSubarrayAtLeastK(nums: number[], k: number): number {\n  const n = nums.length;\n  let best = n + 1;\n  for (let i = 0; i < n; i++) {\n    let sum = 0;\n    for (let j = i; j < n; j++) {\n      sum += nums[j];\n      if (sum >= k) { best = Math.min(best, j - i + 1); break; }\n    }\n  }\n  return best === n + 1 ? -1 : best;\n}\n",
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "md-sum-window-mins",
    slug: "sum-of-window-minimums",
    title: "Sum of Window Minimums",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an array and a window size `k`, return the sum of the minimums of every contiguous window of size `k`.",
    examples: [
      { input: "[1,3,-1,-3,5,3,6,7], 3", output: "-4" },
      { input: "[1,2,3], 1", output: "6" },
      { input: "[5,5], 2", output: "5" },
    ],
    constraints: ["1 <= k <= nums.length <= 100000"],
    functionName: "sumWindowMins",
    starter: {
      js: "function sumWindowMins(nums, k) {\n  // Sum of the min of each window of size k.\n}\n",
      ts: "function sumWindowMins(nums: number[], k: number): number {\n  // Sum of the min of each window of size k.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: -4 },
      { args: [[1, 2, 3], 1], expected: 6 },
      { args: [[5, 5], 2], expected: 5 },
    ],
    hidden: [
      { args: [[1, 2, 3, 4], 2], expected: 6 },
      { args: [[10, 1, 10, 1], 2], expected: 3 },
      { args: [[4, 3, 2, 1], 4], expected: 1 },
      { args: [[9, 9, 9], 2], expected: 18 },
      { args: [[7], 1], expected: 7 },
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: -4 },
    ],
    hints: [
      "Use an increasing deque to get each window minimum.",
      "Add the front value once per full window.",
      "It's the sliding-window-minimum drill with a running total.",
    ],
    solutions: [
      {
        label: "Monotonic deque + running sum",
        approach: "Add the front (window min) to a total as each window completes.",
        js: "function sumWindowMins(nums, k) {\n  const dq = [];\n  let total = 0;\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] >= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) total += nums[dq[0]];\n  }\n  return total;\n}\n",
        ts: "function sumWindowMins(nums: number[], k: number): number {\n  const dq: number[] = [];\n  let total = 0;\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] >= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) total += nums[dq[0]];\n  }\n  return total;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Brute force",
        approach: "Sum the minimum of each window scanned directly.",
        js: "function sumWindowMins(nums, k) {\n  let total = 0;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let m = nums[i];\n    for (let j = i + 1; j < i + k; j++) m = Math.min(m, nums[j]);\n    total += m;\n  }\n  return total;\n}\n",
        ts: "function sumWindowMins(nums: number[], k: number): number {\n  let total = 0;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let m = nums[i];\n    for (let j = i + 1; j < i + k; j++) m = Math.min(m, nums[j]);\n    total += m;\n  }\n  return total;\n}\n",
        time: "O(n·k)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "md-max-of-window-mins",
    slug: "max-of-window-minimums",
    title: "Maximum of Window Minimums",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an array and a window size `k`, return the largest value among the minimums of all contiguous windows of size `k`.",
    examples: [
      { input: "[1,3,-1,-3,5,3,6,7], 3", output: "3" },
      { input: "[1,2,3,4,5], 2", output: "4" },
      { input: "[5,5,5], 2", output: "5" },
    ],
    constraints: ["1 <= k <= nums.length <= 100000"],
    functionName: "maxOfWindowMins",
    starter: {
      js: "function maxOfWindowMins(nums, k) {\n  // Largest window-minimum over all windows of size k.\n}\n",
      ts: "function maxOfWindowMins(nums: number[], k: number): number {\n  // Largest window-minimum over all windows of size k.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: 3 },
      { args: [[1, 2, 3, 4, 5], 2], expected: 4 },
      { args: [[5, 5, 5], 2], expected: 5 },
    ],
    hidden: [
      { args: [[1], 1], expected: 1 },
      { args: [[3, 1, 3, 1, 3], 2], expected: 1 },
      { args: [[9, 8, 7, 6, 5], 3], expected: 7 },
      { args: [[2, 2, 2, 2], 2], expected: 2 },
      { args: [[-1, -2, -3], 2], expected: -2 },
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: 3 },
    ],
    hints: [
      "Get each window minimum with an increasing deque.",
      "Take the maximum of those front values.",
      "It's sliding-window-minimum followed by a max reduction.",
    ],
    solutions: [
      {
        label: "Monotonic deque + max reduction",
        approach: "Track window minima, keeping the largest one seen.",
        js: "function maxOfWindowMins(nums, k) {\n  const dq = [];\n  let best = -Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] >= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) best = Math.max(best, nums[dq[0]]);\n  }\n  return best;\n}\n",
        ts: "function maxOfWindowMins(nums: number[], k: number): number {\n  const dq: number[] = [];\n  let best = -Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] >= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) best = Math.max(best, nums[dq[0]]);\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Brute force",
        approach: "Compute each window minimum directly and keep the largest.",
        js: "function maxOfWindowMins(nums, k) {\n  let best = -Infinity;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let m = nums[i];\n    for (let j = i + 1; j < i + k; j++) m = Math.min(m, nums[j]);\n    best = Math.max(best, m);\n  }\n  return best;\n}\n",
        ts: "function maxOfWindowMins(nums: number[], k: number): number {\n  let best = -Infinity;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let m = nums[i];\n    for (let j = i + 1; j < i + k; j++) m = Math.min(m, nums[j]);\n    best = Math.max(best, m);\n  }\n  return best;\n}\n",
        time: "O(n·k)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "md-jump-game-vi",
    slug: "jump-game-vi",
    title: "Jump Game VI",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Starting at index 0, you may jump forward 1..k indices at a time and collect that index's value. Return the maximum total score when you reach the last index.",
    examples: [
      { input: "[1,-1,-2,4,-7,3], 2", output: "7" },
      { input: "[10,-5,-2,4,0,3], 3", output: "17" },
      { input: "[1,-5,-20,4,-1,3,-6,-3], 2", output: "0" },
    ],
    constraints: ["1 <= nums.length <= 100000", "1 <= k <= nums.length"],
    functionName: "jumpGameVI",
    starter: {
      js: "function jumpGameVI(nums, k) {\n  // Max score reaching the last index with jumps of 1..k.\n}\n",
      ts: "function jumpGameVI(nums: number[], k: number): number {\n  // Max score reaching the last index with jumps of 1..k.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, -1, -2, 4, -7, 3], 2], expected: 7 },
      { args: [[10, -5, -2, 4, 0, 3], 3], expected: 17 },
      { args: [[1, -5, -20, 4, -1, 3, -6, -3], 2], expected: 0 },
    ],
    hidden: [
      { args: [[5], 1], expected: 5 },
      { args: [[1, 2, 3], 1], expected: 6 },
      { args: [[100, -1, -100, -1, 100], 2], expected: 198 },
      { args: [[1, -1, -2, 4, -7, 3], 1], expected: -2 },
      { args: [[0, 0, 0], 2], expected: 0 },
      { args: [[1, -1, -2, 4, -7, 3], 2], expected: 7 },
    ],
    hints: [
      "dp[i] = nums[i] + max(dp[i-k..i-1]); it's a sliding-window maximum over dp.",
      "A decreasing deque of indices gives the best previous dp in O(1).",
      "Drop deque front indices that fall out of reach (further than k back).",
    ],
    solutions: [
      {
        label: "DP + monotonic deque",
        approach: "The best reachable dp is the front of a decreasing deque over dp values.",
        js: "function jumpGameVI(nums, k) {\n  const n = nums.length;\n  const dp = new Array(n).fill(0);\n  dp[0] = nums[0];\n  const dq = [0];\n  for (let i = 1; i < n; i++) {\n    while (dq.length && dq[0] < i - k) dq.shift();\n    dp[i] = dp[dq[0]] + nums[i];\n    while (dq.length && dp[dq[dq.length - 1]] <= dp[i]) dq.pop();\n    dq.push(i);\n  }\n  return dp[n - 1];\n}\n",
        ts: "function jumpGameVI(nums: number[], k: number): number {\n  const n = nums.length;\n  const dp = new Array(n).fill(0);\n  dp[0] = nums[0];\n  const dq = [0];\n  for (let i = 1; i < n; i++) {\n    while (dq.length && dq[0] < i - k) dq.shift();\n    dp[i] = dp[dq[0]] + nums[i];\n    while (dq.length && dp[dq[dq.length - 1]] <= dp[i]) dq.pop();\n    dq.push(i);\n  }\n  return dp[n - 1];\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "O(n·k) DP",
        approach: "Scan the previous k dp values for each index.",
        js: "function jumpGameVI(nums, k) {\n  const n = nums.length;\n  const dp = new Array(n).fill(-Infinity);\n  dp[0] = nums[0];\n  for (let i = 1; i < n; i++) {\n    let best = -Infinity;\n    for (let j = Math.max(0, i - k); j < i; j++) best = Math.max(best, dp[j]);\n    dp[i] = best + nums[i];\n  }\n  return dp[n - 1];\n}\n",
        ts: "function jumpGameVI(nums: number[], k: number): number {\n  const n = nums.length;\n  const dp = new Array(n).fill(-Infinity);\n  dp[0] = nums[0];\n  for (let i = 1; i < n; i++) {\n    let best = -Infinity;\n    for (let j = Math.max(0, i - k); j < i; j++) best = Math.max(best, dp[j]);\n    dp[i] = best + nums[i];\n  }\n  return dp[n - 1];\n}\n",
        time: "O(n·k)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "md-constrained-subset-sum",
    slug: "constrained-subset-sum",
    title: "Constrained Subsequence Sum",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return the maximum sum of a non-empty subsequence of the array such that any two chosen elements are at most `k` indices apart in the original array.",
    examples: [
      { input: "[10,2,-10,5,20], 2", output: "37" },
      { input: "[-1,-2,-3], 1", output: "-1" },
      { input: "[10,-2,-10,-5,20], 2", output: "23" },
    ],
    constraints: ["1 <= nums.length <= 100000", "1 <= k <= nums.length"],
    functionName: "constrainedSubsetSum",
    starter: {
      js: "function constrainedSubsetSum(nums, k) {\n  // Max subsequence sum with chosen indices at most k apart.\n}\n",
      ts: "function constrainedSubsetSum(nums: number[], k: number): number {\n  // Max subsequence sum with chosen indices at most k apart.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[10, 2, -10, 5, 20], 2], expected: 37 },
      { args: [[-1, -2, -3], 1], expected: -1 },
      { args: [[10, -2, -10, -5, 20], 2], expected: 23 },
    ],
    hidden: [
      { args: [[5], 1], expected: 5 },
      { args: [[-5266, 4019, 917, -4711, -5527, -6944], 3], expected: 4936 },
      { args: [[1, -1, 1, -1, 1], 1], expected: 1 },
      { args: [[3, 2, 1], 1], expected: 6 },
      { args: [[-1, -2, -3, -4], 2], expected: -1 },
      { args: [[10, 2, -10, 5, 20], 2], expected: 37 },
    ],
    hints: [
      "dp[i] = nums[i] + max(0, best dp in the previous k positions).",
      "A decreasing deque gives that windowed maximum in O(1).",
      "Take max(0, …) so a negative prefix is dropped rather than dragging you down.",
    ],
    solutions: [
      {
        label: "DP + monotonic deque",
        approach: "Windowed-max dp with a decreasing deque, clamping negatives to 0.",
        js: "function constrainedSubsetSum(nums, k) {\n  const n = nums.length;\n  const dp = new Array(n).fill(0);\n  const dq = [];\n  let best = -Infinity;\n  for (let i = 0; i < n; i++) {\n    while (dq.length && dq[0] < i - k) dq.shift();\n    const prev = dq.length ? Math.max(0, dp[dq[0]]) : 0;\n    dp[i] = prev + nums[i];\n    best = Math.max(best, dp[i]);\n    while (dq.length && dp[dq[dq.length - 1]] <= dp[i]) dq.pop();\n    dq.push(i);\n  }\n  return best;\n}\n",
        ts: "function constrainedSubsetSum(nums: number[], k: number): number {\n  const n = nums.length;\n  const dp = new Array(n).fill(0);\n  const dq: number[] = [];\n  let best = -Infinity;\n  for (let i = 0; i < n; i++) {\n    while (dq.length && dq[0] < i - k) dq.shift();\n    const prev = dq.length ? Math.max(0, dp[dq[0]]) : 0;\n    dp[i] = prev + nums[i];\n    best = Math.max(best, dp[i]);\n    while (dq.length && dp[dq[dq.length - 1]] <= dp[i]) dq.pop();\n    dq.push(i);\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "O(n·k) DP",
        approach: "Scan the previous k dp values, clamping negatives to 0.",
        js: "function constrainedSubsetSum(nums, k) {\n  const n = nums.length;\n  const dp = new Array(n).fill(0);\n  let best = -Infinity;\n  for (let i = 0; i < n; i++) {\n    let prev = 0;\n    for (let j = Math.max(0, i - k); j < i; j++) prev = Math.max(prev, dp[j]);\n    dp[i] = prev + nums[i];\n    best = Math.max(best, dp[i]);\n  }\n  return best;\n}\n",
        ts: "function constrainedSubsetSum(nums: number[], k: number): number {\n  const n = nums.length;\n  const dp = new Array(n).fill(0);\n  let best = -Infinity;\n  for (let i = 0; i < n; i++) {\n    let prev = 0;\n    for (let j = Math.max(0, i - k); j < i; j++) prev = Math.max(prev, dp[j]);\n    dp[i] = prev + nums[i];\n    best = Math.max(best, dp[i]);\n  }\n  return best;\n}\n",
        time: "O(n·k)",
        space: "O(n)",
      },
    ],
  },
];

export const monoDequeProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const monoDequeMcqs: QuizQuestion[] = [
  {
    id: "s6-md-front",
    kind: "mcq",
    prompt: "For sliding-window maximum, the deque keeps indices whose values are:",
    options: [
      "increasing, with the min at the front",
      "decreasing, with the max at the front",
      "in insertion order",
      "sorted by index only",
    ],
    answerIndex: 1,
    explanation:
      "Popping smaller-or-equal values from the back keeps values decreasing, so the front is always the window's maximum.",
  },
  {
    id: "s6-md-amortized",
    kind: "mcq",
    prompt: "Sliding-window max/min with a monotonic deque runs in:",
    options: [
      "O(n·k)",
      "O(n log n)",
      "O(n) — each index is pushed and popped at most once",
      "O(n²)",
    ],
    answerIndex: 2,
    explanation:
      "Every index enters and leaves the deque a single time, so the total work is linear despite the inner while-loops.",
  },
];

export const monoDequeModule: Module = {
  id: "m-pat-mono-deque",
  stageId: S,
  title: "Monotonic Deque",
  kind: "patternModule",
  summary:
    "A double-ended queue kept in sorted order to read a sliding window's extreme in O(1) — window max/min and the DPs that build on them.",
  lessonSections: [
    {
      heading: "A window's extreme in O(1)",
      body: `A **monotonic deque** stores **indices** whose values are kept increasing or decreasing. Because the order is maintained, the extreme value of the current window is always at the **front**. The classic use is sliding-window maximum:

\`\`\`js
const dq = [];                 // indices, values decreasing
for (let i = 0; i < nums.length; i++) {
  while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop(); // back: drop smaller
  dq.push(i);
  if (dq[0] <= i - k) dq.shift();      // front: drop out-of-window
  if (i >= k - 1) result.push(nums[dq[0]]); // front is the window max
}
\`\`\`

Each index is pushed once and popped once, so the whole scan is **O(n)** even though there's an inner while-loop. Keep the deque **increasing** instead and the front gives the window **minimum**.`,
    },
    {
      heading: "Beyond plain windows",
      body: `The same structure powers several DPs where a transition depends on the **best value in a recent window**:

- **Jump Game VI** — \`dp[i] = nums[i] + max(dp[i-k..i-1])\`; the max is a sliding-window maximum over \`dp\`.
- **Constrained subsequence sum** — \`dp[i] = nums[i] + max(0, best dp in the last k)\`.
- **Shortest subarray with sum ≥ k** — run a monotonic deque over **prefix sums** to handle negative numbers (plain two-pointers won't).
- **Longest bounded-difference subarray** — keep a max-deque *and* a min-deque and shrink the window when their spread exceeds the limit.

The pattern: whenever a value depends on the extreme over a moving range, reach for a monotonic deque instead of rescanning.`,
    },
    {
      heading: "Recognition cues & pitfalls",
      body: `**Cues:** "each window of size k," "max/min in a sliding range," or a DP whose transition looks back over the last \`k\` entries. If a two-pointer window can't handle negatives (sums that don't grow monotonically), a deque over prefix sums often can.

**Pitfalls:** storing values instead of **indices** (you need indices to expire the front); using \`<\` vs \`<=\` inconsistently when popping the back; forgetting to drop the front once it leaves the window; and, in the DP variants, reading the deque's front **before** expiring stale indices. Note \`Array.prototype.shift()\` is O(n) in the worst case — fine for these sizes, but a real deque (head pointer or linked list) keeps it truly linear. Every drill ships a deque solution and a brute-force/O(n·k) baseline — compare them and work easy to hard.`,
    },
  ],
  guidedExampleProblemId: "md-window-max",
  drillProblemIds: [
    "md-window-max",
    "md-window-min",
    "md-sum-window-maxes",
    "md-first-negative",
    "md-longest-bounded-diff",
    "md-shortest-subarray-k",
  ],
  testPoolProblemIds: [
    "md-sum-window-mins",
    "md-max-of-window-mins",
    "md-jump-game-vi",
    "md-constrained-subset-sum",
  ],
  complexityQuestionIds: ["s6-md-front", "s6-md-amortized"],
  badgeId: "badge-pat-mono-deque",
  prerequisiteModuleIds: ["m-pat-trie"],
};
