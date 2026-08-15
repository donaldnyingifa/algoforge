import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["dp-1d"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "d1-climb-stairs",
    slug: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "easy",
    patternIds: P,
    statement:
      "You can climb 1 or 2 steps at a time. Return how many distinct ways there are to reach the top of a staircase of `n` steps. `n = 0` has one way (already there).",
    examples: [
      { input: "2", output: "2" },
      { input: "3", output: "3" },
      { input: "0", output: "1" },
    ],
    constraints: ["0 <= n <= 40"],
    functionName: "climbStairs",
    starter: {
      js: "function climbStairs(n) {\n  // Ways to climb using 1 or 2 steps.\n}\n",
      ts: "function climbStairs(n: number): number {\n  // Ways to climb using 1 or 2 steps.\n  return 0;\n}\n",
    },
    visible: [
      { args: [2], expected: 2 },
      { args: [3], expected: 3 },
      { args: [0], expected: 1 },
    ],
    hidden: [
      { args: [1], expected: 1 },
      { args: [4], expected: 5 },
      { args: [5], expected: 8 },
      { args: [10], expected: 89 },
      { args: [20], expected: 10946 },
      { args: [30], expected: 1346269 },
    ],
    hints: [
      "The last move was either a 1-step or a 2-step, so ways(n) = ways(n-1) + ways(n-2).",
      "That overlaps heavily — memoize, or fill a table bottom-up.",
      "You only ever need the previous two values, so O(1) space suffices.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Cache ways(n) so each value is computed once.",
        js: "function climbStairs(n) {\n  const memo = new Map();\n  const go = (k) => {\n    if (k <= 1) return 1;\n    if (memo.has(k)) return memo.get(k);\n    const v = go(k - 1) + go(k - 2);\n    memo.set(k, v);\n    return v;\n  };\n  return go(n);\n}\n",
        ts: "function climbStairs(n: number): number {\n  const memo = new Map<number, number>();\n  const go = (k: number): number => {\n    if (k <= 1) return 1;\n    if (memo.has(k)) return memo.get(k) as number;\n    const v = go(k - 1) + go(k - 2);\n    memo.set(k, v);\n    return v;\n  };\n  return go(n);\n}\n",
        commentedCode: {
          js: "function climbStairs(n) {\n  // Cache the number of ways for each stair count after computing it once.\n  const memo = new Map();\n\n  // Return the number of ways to climb exactly k remaining steps.\n  const go = (k) => {\n    // There is one way to finish zero steps, and one way to finish one step.\n    if (k <= 1) return 1;\n\n    // Reuse a solved subproblem instead of rebuilding its recursion tree.\n    if (memo.has(k)) return memo.get(k);\n\n    // The final move is either one step from k - 1 or two steps from k - 2.\n    const v = go(k - 1) + go(k - 2);\n    // Store the recurrence result for every later call that needs k.\n    memo.set(k, v);\n    return v;\n  };\n\n  // Solve the original staircase.\n  return go(n);\n}\n",
          ts: "function climbStairs(n: number): number {\n  // Cache the number of ways for each stair count after computing it once.\n  const memo = new Map<number, number>();\n\n  // Return the number of ways to climb exactly k remaining steps.\n  const go = (k: number): number => {\n    // There is one way to finish zero steps, and one way to finish one step.\n    if (k <= 1) return 1;\n\n    // Reuse a solved subproblem instead of rebuilding its recursion tree.\n    if (memo.has(k)) return memo.get(k) as number;\n\n    // The final move is either one step from k - 1 or two steps from k - 2.\n    const v = go(k - 1) + go(k - 2);\n    // Store the recurrence result for every later call that needs k.\n    memo.set(k, v);\n    return v;\n  };\n\n  // Solve the original staircase.\n  return go(n);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Tabulation (space-optimized)",
        approach: "Roll two variables forward — the classic O(1)-space DP.",
        js: "function climbStairs(n) {\n  let a = 1, b = 1;\n  for (let i = 2; i <= n; i++) { [a, b] = [b, a + b]; }\n  return b;\n}\n",
        ts: "function climbStairs(n: number): number {\n  let a = 1, b = 1;\n  for (let i = 2; i <= n; i++) { [a, b] = [b, a + b]; }\n  return b;\n}\n",
        commentedCode: {
          js: "function climbStairs(n) {\n  // ways(0) and ways(1) are both 1; keep them as the two rolling states.\n  let a = 1, b = 1;\n\n  // Build each larger staircase from its two immediately smaller staircases.\n  for (let i = 2; i <= n; i++) {\n    // Shift ways(i - 1) left and compute ways(i) with the recurrence.\n    [a, b] = [b, a + b];\n  }\n\n  // b now stores ways(n), including the seeded n = 0 and n = 1 cases.\n  return b;\n}\n",
          ts: "function climbStairs(n: number): number {\n  // ways(0) and ways(1) are both 1; keep them as the two rolling states.\n  let a = 1, b = 1;\n\n  // Build each larger staircase from its two immediately smaller staircases.\n  for (let i = 2; i <= n; i++) {\n    // Shift ways(i - 1) left and compute ways(i) with the recurrence.\n    [a, b] = [b, a + b];\n  }\n\n  // b now stores ways(n), including the seeded n = 0 and n = 1 cases.\n  return b;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "d1-tribonacci",
    slug: "tribonacci",
    title: "Tribonacci Number",
    difficulty: "easy",
    patternIds: P,
    statement:
      "The Tribonacci sequence starts T0 = 0, T1 = 1, T2 = 1, and each later value is the sum of the previous three. Return Tn.",
    examples: [
      { input: "4", output: "4" },
      { input: "0", output: "0" },
      { input: "1", output: "1" },
    ],
    constraints: ["0 <= n <= 37"],
    functionName: "tribonacci",
    starter: {
      js: "function tribonacci(n) {\n  // Tn = Tn-1 + Tn-2 + Tn-3.\n}\n",
      ts: "function tribonacci(n: number): number {\n  // Tn = Tn-1 + Tn-2 + Tn-3.\n  return 0;\n}\n",
    },
    visible: [
      { args: [4], expected: 4 },
      { args: [0], expected: 0 },
      { args: [1], expected: 1 },
    ],
    hidden: [
      { args: [2], expected: 1 },
      { args: [3], expected: 2 },
      { args: [5], expected: 7 },
      { args: [6], expected: 13 },
      { args: [10], expected: 149 },
      { args: [25], expected: 1389537 },
    ],
    hints: [
      "The recurrence sums the previous three terms.",
      "Seed the three base cases, then roll forward.",
      "Only the last three values are ever needed — O(1) space.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Cache each Tn to avoid the exponential re-computation.",
        js: "function tribonacci(n) {\n  const memo = new Map([[0, 0], [1, 1], [2, 1]]);\n  const go = (k) => {\n    if (memo.has(k)) return memo.get(k);\n    const v = go(k - 1) + go(k - 2) + go(k - 3);\n    memo.set(k, v);\n    return v;\n  };\n  return go(n);\n}\n",
        ts: "function tribonacci(n: number): number {\n  const memo = new Map<number, number>([[0, 0], [1, 1], [2, 1]]);\n  const go = (k: number): number => {\n    if (memo.has(k)) return memo.get(k) as number;\n    const v = go(k - 1) + go(k - 2) + go(k - 3);\n    memo.set(k, v);\n    return v;\n  };\n  return go(n);\n}\n",
        commentedCode: {
          js: "function tribonacci(n) {\n  // Seed the three base cases so recursion always has a stopping value.\n  const memo = new Map([[0, 0], [1, 1], [2, 1]]);\n\n  // Compute T(k), reusing every value already placed in the cache.\n  const go = (k) => {\n    // This handles both base cases and previously solved larger indices.\n    if (memo.has(k)) return memo.get(k);\n\n    // Each Tribonacci number is the sum of the previous three numbers.\n    const v = go(k - 1) + go(k - 2) + go(k - 3);\n    memo.set(k, v);\n    return v;\n  };\n\n  return go(n);\n}\n",
          ts: "function tribonacci(n: number): number {\n  // Seed the three base cases so recursion always has a stopping value.\n  const memo = new Map<number, number>([[0, 0], [1, 1], [2, 1]]);\n\n  // Compute T(k), reusing every value already placed in the cache.\n  const go = (k: number): number => {\n    // This handles both base cases and previously solved larger indices.\n    if (memo.has(k)) return memo.get(k) as number;\n\n    // Each Tribonacci number is the sum of the previous three numbers.\n    const v = go(k - 1) + go(k - 2) + go(k - 3);\n    memo.set(k, v);\n    return v;\n  };\n\n  return go(n);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Rolling window",
        approach: "Keep the last three values and slide.",
        js: "function tribonacci(n) {\n  if (n === 0) return 0;\n  if (n <= 2) return 1;\n  let a = 0, b = 1, c = 1;\n  for (let i = 3; i <= n; i++) { [a, b, c] = [b, c, a + b + c]; }\n  return c;\n}\n",
        ts: "function tribonacci(n: number): number {\n  if (n === 0) return 0;\n  if (n <= 2) return 1;\n  let a = 0, b = 1, c = 1;\n  for (let i = 3; i <= n; i++) { [a, b, c] = [b, c, a + b + c]; }\n  return c;\n}\n",
        commentedCode: {
          js: "function tribonacci(n) {\n  // Return T0 before applying the shared T1/T2 base case.\n  if (n === 0) return 0;\n  if (n <= 2) return 1;\n\n  // Keep T(i - 3), T(i - 2), and T(i - 1) in a rolling window.\n  let a = 0, b = 1, c = 1;\n  for (let i = 3; i <= n; i++) {\n    // Shift the window and append T(i) as the sum of its three predecessors.\n    [a, b, c] = [b, c, a + b + c];\n  }\n\n  // The newest window value is Tn.\n  return c;\n}\n",
          ts: "function tribonacci(n: number): number {\n  // Return T0 before applying the shared T1/T2 base case.\n  if (n === 0) return 0;\n  if (n <= 2) return 1;\n\n  // Keep T(i - 3), T(i - 2), and T(i - 1) in a rolling window.\n  let a = 0, b = 1, c = 1;\n  for (let i = 3; i <= n; i++) {\n    // Shift the window and append T(i) as the sum of its three predecessors.\n    [a, b, c] = [b, c, a + b + c];\n  }\n\n  // The newest window value is Tn.\n  return c;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "d1-house-robber",
    slug: "house-robber",
    title: "House Robber",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each value is the money in a house along a street. You cannot rob two adjacent houses. Return the maximum you can take.",
    examples: [
      { input: "[2,7,9,3,1]", output: "12" },
      { input: "[]", output: "0" },
      { input: "[5]", output: "5" },
    ],
    constraints: ["0 <= nums.length <= 10000", "values are non-negative"],
    functionName: "houseRobber",
    starter: {
      js: "function houseRobber(nums) {\n  // Max non-adjacent sum.\n}\n",
      ts: "function houseRobber(nums: number[]): number {\n  // Max non-adjacent sum.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 7, 9, 3, 1]], expected: 12 },
      { args: [[]], expected: 0 },
      { args: [[5]], expected: 5 },
    ],
    hidden: [
      { args: [[1, 2, 3, 1]], expected: 4 },
      { args: [[2, 1, 1, 2]], expected: 4 },
      { args: [[0]], expected: 0 },
      { args: [[1, 2]], expected: 2 },
      { args: [[5, 5, 10, 100, 10, 5]], expected: 110 },
      { args: [[2, 7, 9, 3, 1, 8]], expected: 19 },
    ],
    hints: [
      "At each house you either skip it (keep dp[i-1]) or rob it (dp[i-2] + value).",
      "dp[i] = max(dp[i-1], dp[i-2] + nums[i]).",
      "Only the two previous results matter — O(1) space.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "From each index, choose to rob or skip, caching per index.",
        js: "function houseRobber(nums) {\n  const memo = new Map();\n  const go = (i) => {\n    if (i >= nums.length) return 0;\n    if (memo.has(i)) return memo.get(i);\n    const v = Math.max(go(i + 1), nums[i] + go(i + 2));\n    memo.set(i, v);\n    return v;\n  };\n  return go(0);\n}\n",
        ts: "function houseRobber(nums: number[]): number {\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    if (i >= nums.length) return 0;\n    if (memo.has(i)) return memo.get(i) as number;\n    const v = Math.max(go(i + 1), nums[i] + go(i + 2));\n    memo.set(i, v);\n    return v;\n  };\n  return go(0);\n}\n",
        commentedCode: {
          js: "function houseRobber(nums) {\n  // Cache the best possible total starting at each house index.\n  const memo = new Map();\n\n  const go = (i) => {\n    // Moving beyond the street contributes no additional money.\n    if (i >= nums.length) return 0;\n    if (memo.has(i)) return memo.get(i);\n\n    // Either skip this house, or rob it and force the next house to be skipped.\n    const v = Math.max(go(i + 1), nums[i] + go(i + 2));\n    memo.set(i, v);\n    return v;\n  };\n\n  // Start deciding at the first house.\n  return go(0);\n}\n",
          ts: "function houseRobber(nums: number[]): number {\n  // Cache the best possible total starting at each house index.\n  const memo = new Map<number, number>();\n\n  const go = (i: number): number => {\n    // Moving beyond the street contributes no additional money.\n    if (i >= nums.length) return 0;\n    if (memo.has(i)) return memo.get(i) as number;\n\n    // Either skip this house, or rob it and force the next house to be skipped.\n    const v = Math.max(go(i + 1), nums[i] + go(i + 2));\n    memo.set(i, v);\n    return v;\n  };\n\n  // Start deciding at the first house.\n  return go(0);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Tabulation (two variables)",
        approach: "Track the best with and without the previous house.",
        js: "function houseRobber(nums) {\n  let prev2 = 0, prev1 = 0;\n  for (const v of nums) { const cur = Math.max(prev1, prev2 + v); prev2 = prev1; prev1 = cur; }\n  return prev1;\n}\n",
        ts: "function houseRobber(nums: number[]): number {\n  let prev2 = 0, prev1 = 0;\n  for (const v of nums) { const cur = Math.max(prev1, prev2 + v); prev2 = prev1; prev1 = cur; }\n  return prev1;\n}\n",
        commentedCode: {
          js: "function houseRobber(nums) {\n  // prev2 is the best through two houses back; prev1 is the best so far.\n  let prev2 = 0, prev1 = 0;\n\n  for (const v of nums) {\n    // Skip this house for prev1, or take it by adding v to the non-adjacent prev2.\n    const cur = Math.max(prev1, prev2 + v);\n    // Advance the two DP states to include the current house.\n    prev2 = prev1;\n    prev1 = cur;\n  }\n\n  return prev1;\n}\n",
          ts: "function houseRobber(nums: number[]): number {\n  // prev2 is the best through two houses back; prev1 is the best so far.\n  let prev2 = 0, prev1 = 0;\n\n  for (const v of nums) {\n    // Skip this house for prev1, or take it by adding v to the non-adjacent prev2.\n    const cur = Math.max(prev1, prev2 + v);\n    // Advance the two DP states to include the current house.\n    prev2 = prev1;\n    prev1 = cur;\n  }\n\n  return prev1;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "d1-max-subarray",
    slug: "max-subarray-dp",
    title: "Maximum Subarray",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the largest sum of any contiguous, non-empty subarray.",
    examples: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "[1]", output: "1" },
      { input: "[5,4,-1,7,8]", output: "23" },
    ],
    constraints: ["1 <= nums.length <= 10000"],
    functionName: "maxSubArray",
    starter: {
      js: "function maxSubArray(nums) {\n  // Largest contiguous subarray sum.\n}\n",
      ts: "function maxSubArray(nums: number[]): number {\n  // Largest contiguous subarray sum.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
      { args: [[1]], expected: 1 },
      { args: [[5, 4, -1, 7, 8]], expected: 23 },
    ],
    hidden: [
      { args: [[-1]], expected: -1 },
      { args: [[-2, -1]], expected: -1 },
      { args: [[1, 2, 3]], expected: 6 },
      { args: [[-1, -2, -3]], expected: -1 },
      { args: [[3, -2, 5, -1]], expected: 6 },
      { args: [[-5, 4, -1, 7, 8]], expected: 18 },
    ],
    hints: [
      "The best subarray ending at i either extends the one before or starts fresh at i.",
      "dp[i] = max(nums[i], dp[i-1] + nums[i]); the answer is the max dp[i].",
      "This is Kadane's algorithm — carry just the running best.",
    ],
    solutions: [
      {
        label: "Kadane (tabulation)",
        approach: "Extend or restart the running sum, tracking the maximum.",
        js: "function maxSubArray(nums) {\n  let cur = nums[0], best = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    cur = Math.max(nums[i], cur + nums[i]);\n    best = Math.max(best, cur);\n  }\n  return best;\n}\n",
        ts: "function maxSubArray(nums: number[]): number {\n  let cur = nums[0], best = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    cur = Math.max(nums[i], cur + nums[i]);\n    best = Math.max(best, cur);\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function maxSubArray(nums) {\n  // The first value is both the best sum ending here and the best seen globally.\n  let cur = nums[0], best = nums[0];\n\n  for (let i = 1; i < nums.length; i++) {\n    // Either start a new subarray at i or extend the best subarray ending at i - 1.\n    cur = Math.max(nums[i], cur + nums[i]);\n    // Record the best ending-here value across all processed positions.\n    best = Math.max(best, cur);\n  }\n\n  return best;\n}\n",
          ts: "function maxSubArray(nums: number[]): number {\n  // The first value is both the best sum ending here and the best seen globally.\n  let cur = nums[0], best = nums[0];\n\n  for (let i = 1; i < nums.length; i++) {\n    // Either start a new subarray at i or extend the best subarray ending at i - 1.\n    cur = Math.max(nums[i], cur + nums[i]);\n    // Record the best ending-here value across all processed positions.\n    best = Math.max(best, cur);\n  }\n\n  return best;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Prefix-sum minimum",
        approach: "Best subarray = current prefix minus the smallest earlier prefix.",
        js: "function maxSubArray(nums) {\n  let prefix = 0, minPrefix = 0, best = -Infinity;\n  for (const v of nums) {\n    prefix += v;\n    best = Math.max(best, prefix - minPrefix);\n    minPrefix = Math.min(minPrefix, prefix);\n  }\n  return best;\n}\n",
        ts: "function maxSubArray(nums: number[]): number {\n  let prefix = 0, minPrefix = 0, best = -Infinity;\n  for (const v of nums) {\n    prefix += v;\n    best = Math.max(best, prefix - minPrefix);\n    minPrefix = Math.min(minPrefix, prefix);\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function maxSubArray(nums) {\n  // prefix is the sum through this position; zero is the prefix before the array.\n  let prefix = 0, minPrefix = 0, best = -Infinity;\n\n  for (const v of nums) {\n    // Extend the current prefix through v.\n    prefix += v;\n    // Subtracting the smallest earlier prefix gives the largest subarray ending here.\n    best = Math.max(best, prefix - minPrefix);\n    // Make this prefix available only after using an earlier prefix for the current end.\n    minPrefix = Math.min(minPrefix, prefix);\n  }\n\n  return best;\n}\n",
          ts: "function maxSubArray(nums: number[]): number {\n  // prefix is the sum through this position; zero is the prefix before the array.\n  let prefix = 0, minPrefix = 0, best = -Infinity;\n\n  for (const v of nums) {\n    // Extend the current prefix through v.\n    prefix += v;\n    // Subtracting the smallest earlier prefix gives the largest subarray ending here.\n    best = Math.max(best, prefix - minPrefix);\n    // Make this prefix available only after using an earlier prefix for the current end.\n    minPrefix = Math.min(minPrefix, prefix);\n  }\n\n  return best;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "d1-min-cost-stairs",
    slug: "min-cost-climbing-stairs",
    title: "Min Cost Climbing Stairs",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each value is the cost of stepping on that stair. You may start on stair 0 or 1, and from a stair you climb 1 or 2 steps. Return the minimum cost to go past the last stair.",
    examples: [
      { input: "[10,15,20]", output: "15" },
      { input: "[1,100,1,1,1,100,1,1,100,1]", output: "6" },
      { input: "[0,0]", output: "0" },
    ],
    constraints: ["0 <= cost.length <= 10000", "costs are non-negative"],
    functionName: "minCostClimbingStairs",
    starter: {
      js: "function minCostClimbingStairs(cost) {\n  // Min cost to climb past the top.\n}\n",
      ts: "function minCostClimbingStairs(cost: number[]): number {\n  // Min cost to climb past the top.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[10, 15, 20]], expected: 15 },
      { args: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]], expected: 6 },
      { args: [[0, 0]], expected: 0 },
    ],
    hidden: [
      { args: [[1, 2]], expected: 1 },
      { args: [[10, 15]], expected: 10 },
      { args: [[0, 1, 2, 2]], expected: 2 },
      { args: [[5]], expected: 0 },
      { args: [[1, 1, 1]], expected: 1 },
      { args: [[2, 2, 2, 2]], expected: 4 },
    ],
    hints: [
      "The cost to reach the top from stair i is cost[i] plus the cheaper of the next one or two stairs.",
      "dp[i] = cost[i] + min(dp[i+1], dp[i+2]); the answer is min(dp[0], dp[1]).",
      "Fewer than two stairs cost nothing to pass.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "From each stair, pay its cost plus the cheaper onward path.",
        js: "function minCostClimbingStairs(cost) {\n  const n = cost.length;\n  if (n <= 1) return 0;\n  const memo = new Map();\n  const go = (i) => {\n    if (i >= n) return 0;\n    if (memo.has(i)) return memo.get(i);\n    const v = cost[i] + Math.min(go(i + 1), go(i + 2));\n    memo.set(i, v);\n    return v;\n  };\n  return Math.min(go(0), go(1));\n}\n",
        ts: "function minCostClimbingStairs(cost: number[]): number {\n  const n = cost.length;\n  if (n <= 1) return 0;\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    if (i >= n) return 0;\n    if (memo.has(i)) return memo.get(i) as number;\n    const v = cost[i] + Math.min(go(i + 1), go(i + 2));\n    memo.set(i, v);\n    return v;\n  };\n  return Math.min(go(0), go(1));\n}\n",
        commentedCode: {
          js: "function minCostClimbingStairs(cost) {\n  const n = cost.length;\n  // With fewer than two stairs, either allowed starting position is already past the top.\n  if (n <= 1) return 0;\n\n  // Cache the minimum cost from each stair to the top.\n  const memo = new Map();\n  const go = (i) => {\n    // Landing at or beyond n means the climb is complete with no more cost.\n    if (i >= n) return 0;\n    if (memo.has(i)) return memo.get(i);\n\n    // Pay for stair i, then choose the cheaper one-step or two-step continuation.\n    const v = cost[i] + Math.min(go(i + 1), go(i + 2));\n    memo.set(i, v);\n    return v;\n  };\n\n  // Starting on stair 0 or stair 1 is allowed, so take the cheaper start.\n  return Math.min(go(0), go(1));\n}\n",
          ts: "function minCostClimbingStairs(cost: number[]): number {\n  const n = cost.length;\n  // With fewer than two stairs, either allowed starting position is already past the top.\n  if (n <= 1) return 0;\n\n  // Cache the minimum cost from each stair to the top.\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    // Landing at or beyond n means the climb is complete with no more cost.\n    if (i >= n) return 0;\n    if (memo.has(i)) return memo.get(i) as number;\n\n    // Pay for stair i, then choose the cheaper one-step or two-step continuation.\n    const v = cost[i] + Math.min(go(i + 1), go(i + 2));\n    memo.set(i, v);\n    return v;\n  };\n\n  // Starting on stair 0 or stair 1 is allowed, so take the cheaper start.\n  return Math.min(go(0), go(1));\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Tabulation (two variables)",
        approach: "Roll forward the cost to reach each stair from the start.",
        js: "function minCostClimbingStairs(cost) {\n  let a = 0, b = 0;\n  for (let i = 2; i <= cost.length; i++) {\n    const cur = Math.min(b + cost[i - 1], a + cost[i - 2]);\n    a = b; b = cur;\n  }\n  return b;\n}\n",
        ts: "function minCostClimbingStairs(cost: number[]): number {\n  let a = 0, b = 0;\n  for (let i = 2; i <= cost.length; i++) {\n    const cur = Math.min(b + cost[i - 1], a + cost[i - 2]);\n    a = b; b = cur;\n  }\n  return b;\n}\n",
        commentedCode: {
          js: "function minCostClimbingStairs(cost) {\n  // Reaching either starting position, stair 0 or stair 1, initially costs zero.\n  let a = 0, b = 0;\n\n  // Compute the minimum cost to reach every position from 2 through the top.\n  for (let i = 2; i <= cost.length; i++) {\n    // Arrive from i - 1 and pay there, or from i - 2 and pay there.\n    const cur = Math.min(b + cost[i - 1], a + cost[i - 2]);\n    // Roll the two previous reach-costs forward.\n    a = b;\n    b = cur;\n  }\n\n  // Position cost.length is just past the final stair.\n  return b;\n}\n",
          ts: "function minCostClimbingStairs(cost: number[]): number {\n  // Reaching either starting position, stair 0 or stair 1, initially costs zero.\n  let a = 0, b = 0;\n\n  // Compute the minimum cost to reach every position from 2 through the top.\n  for (let i = 2; i <= cost.length; i++) {\n    // Arrive from i - 1 and pay there, or from i - 2 and pay there.\n    const cur = Math.min(b + cost[i - 1], a + cost[i - 2]);\n    // Roll the two previous reach-costs forward.\n    a = b;\n    b = cur;\n  }\n\n  // Position cost.length is just past the final stair.\n  return b;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "d1-house-robber-circular",
    slug: "house-robber-circular",
    title: "House Robber (Circular)",
    difficulty: "hard",
    patternIds: P,
    statement:
      "The houses are arranged in a circle, so the first and last are adjacent. You cannot rob two adjacent houses. Return the maximum you can take.",
    examples: [
      { input: "[2,3,2]", output: "3" },
      { input: "[1,2,3,1]", output: "4" },
      { input: "[0]", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 10000", "values are non-negative"],
    functionName: "houseRobberCircular",
    starter: {
      js: "function houseRobberCircular(nums) {\n  // Max non-adjacent sum on a circle.\n}\n",
      ts: "function houseRobberCircular(nums: number[]): number {\n  // Max non-adjacent sum on a circle.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 3, 2]], expected: 3 },
      { args: [[1, 2, 3, 1]], expected: 4 },
      { args: [[0]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[5]], expected: 5 },
      { args: [[1, 2]], expected: 2 },
      { args: [[2, 7, 9, 3, 1]], expected: 11 },
      { args: [[1, 2, 3]], expected: 3 },
      { args: [[200, 3, 140, 20, 10]], expected: 340 },
    ],
    hints: [
      "The first and last house can't both be robbed, so split into two lines.",
      "Answer = max(rob houses 0..n-2, rob houses 1..n-1).",
      "Handle the single-house case directly.",
    ],
    solutions: [
      {
        label: "Two linear passes",
        approach: "Run the linear robber excluding either the first or the last house.",
        js: "function houseRobberCircular(nums) {\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n  const rob = (lo, hi) => {\n    let prev2 = 0, prev1 = 0;\n    for (let i = lo; i <= hi; i++) { const cur = Math.max(prev1, prev2 + nums[i]); prev2 = prev1; prev1 = cur; }\n    return prev1;\n  };\n  return Math.max(rob(0, nums.length - 2), rob(1, nums.length - 1));\n}\n",
        ts: "function houseRobberCircular(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n  const rob = (lo: number, hi: number): number => {\n    let prev2 = 0, prev1 = 0;\n    for (let i = lo; i <= hi; i++) { const cur = Math.max(prev1, prev2 + nums[i]); prev2 = prev1; prev1 = cur; }\n    return prev1;\n  };\n  return Math.max(rob(0, nums.length - 2), rob(1, nums.length - 1));\n}\n",
        commentedCode: {
          js: "function houseRobberCircular(nums) {\n  // Handle sizes where splitting the circle into two non-empty ranges is impossible.\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n\n  // Solve ordinary House Robber on the inclusive linear range lo..hi.\n  const rob = (lo, hi) => {\n    let prev2 = 0, prev1 = 0;\n    for (let i = lo; i <= hi; i++) {\n      // Skip house i, or rob it together with the best ending two positions earlier.\n      const cur = Math.max(prev1, prev2 + nums[i]);\n      prev2 = prev1;\n      prev1 = cur;\n    }\n    return prev1;\n  };\n\n  // A legal circular plan excludes either the last house or the first house.\n  return Math.max(rob(0, nums.length - 2), rob(1, nums.length - 1));\n}\n",
          ts: "function houseRobberCircular(nums: number[]): number {\n  // Handle sizes where splitting the circle into two non-empty ranges is impossible.\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n\n  // Solve ordinary House Robber on the inclusive linear range lo..hi.\n  const rob = (lo: number, hi: number): number => {\n    let prev2 = 0, prev1 = 0;\n    for (let i = lo; i <= hi; i++) {\n      // Skip house i, or rob it together with the best ending two positions earlier.\n      const cur = Math.max(prev1, prev2 + nums[i]);\n      prev2 = prev1;\n      prev1 = cur;\n    }\n    return prev1;\n  };\n\n  // A legal circular plan excludes either the last house or the first house.\n  return Math.max(rob(0, nums.length - 2), rob(1, nums.length - 1));\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Memoized on two slices",
        approach: "Memoize the linear subproblem over each of the two ranges.",
        js: "function houseRobberCircular(nums) {\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n  const robRange = (arr) => {\n    const memo = new Map();\n    const go = (i) => {\n      if (i >= arr.length) return 0;\n      if (memo.has(i)) return memo.get(i);\n      const v = Math.max(go(i + 1), arr[i] + go(i + 2));\n      memo.set(i, v);\n      return v;\n    };\n    return go(0);\n  };\n  return Math.max(robRange(nums.slice(0, -1)), robRange(nums.slice(1)));\n}\n",
        ts: "function houseRobberCircular(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n  const robRange = (arr: number[]): number => {\n    const memo = new Map<number, number>();\n    const go = (i: number): number => {\n      if (i >= arr.length) return 0;\n      if (memo.has(i)) return memo.get(i) as number;\n      const v = Math.max(go(i + 1), arr[i] + go(i + 2));\n      memo.set(i, v);\n      return v;\n    };\n    return go(0);\n  };\n  return Math.max(robRange(nums.slice(0, -1)), robRange(nums.slice(1)));\n}\n",
        commentedCode: {
          js: "function houseRobberCircular(nums) {\n  // Handle the empty and single-house circles directly.\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n\n  // Solve one linear slice by memoizing its best total from each index.\n  const robRange = (arr) => {\n    const memo = new Map();\n    const go = (i) => {\n      // No houses remain after the slice ends.\n      if (i >= arr.length) return 0;\n      if (memo.has(i)) return memo.get(i);\n\n      // Compare skipping arr[i] with taking it and skipping its neighbor.\n      const v = Math.max(go(i + 1), arr[i] + go(i + 2));\n      memo.set(i, v);\n      return v;\n    };\n    return go(0);\n  };\n\n  // Exclude the last house in one slice and the first house in the other.\n  return Math.max(robRange(nums.slice(0, -1)), robRange(nums.slice(1)));\n}\n",
          ts: "function houseRobberCircular(nums: number[]): number {\n  // Handle the empty and single-house circles directly.\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n\n  // Solve one linear slice by memoizing its best total from each index.\n  const robRange = (arr: number[]): number => {\n    const memo = new Map<number, number>();\n    const go = (i: number): number => {\n      // No houses remain after the slice ends.\n      if (i >= arr.length) return 0;\n      if (memo.has(i)) return memo.get(i) as number;\n\n      // Compare skipping arr[i] with taking it and skipping its neighbor.\n      const v = Math.max(go(i + 1), arr[i] + go(i + 2));\n      memo.set(i, v);\n      return v;\n    };\n    return go(0);\n  };\n\n  // Exclude the last house in one slice and the first house in the other.\n  return Math.max(robRange(nums.slice(0, -1)), robRange(nums.slice(1)));\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "d1-ways-climb-k",
    slug: "ways-climb-k",
    title: "Climb with K Step Sizes",
    difficulty: "easy",
    patternIds: P,
    statement:
      "You can climb any of 1, 2, …, `k` steps at a time. Return how many distinct ways there are to reach the top of `n` steps. `n = 0` has one way.",
    examples: [
      { input: "3, 2", output: "3" },
      { input: "0, 3", output: "1" },
      { input: "4, 2", output: "5" },
    ],
    constraints: ["0 <= n <= 30", "1 <= k <= 10"],
    functionName: "waysToClimbK",
    starter: {
      js: "function waysToClimbK(n, k) {\n  // Ways to climb n using steps 1..k.\n}\n",
      ts: "function waysToClimbK(n: number, k: number): number {\n  // Ways to climb n using steps 1..k.\n  return 0;\n}\n",
    },
    visible: [
      { args: [3, 2], expected: 3 },
      { args: [0, 3], expected: 1 },
      { args: [4, 2], expected: 5 },
    ],
    hidden: [
      { args: [3, 3], expected: 4 },
      { args: [1, 2], expected: 1 },
      { args: [5, 1], expected: 1 },
      { args: [4, 3], expected: 7 },
      { args: [2, 5], expected: 2 },
      { args: [5, 3], expected: 13 },
    ],
    hints: [
      "The last step was one of 1..k, so sum ways(n - step) over those step sizes.",
      "dp[0] = 1; dp[i] = sum of dp[i - s] for s in 1..k (when i - s >= 0).",
      "Memoize or fill a table bottom-up.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Sum the ways after each possible last step.",
        js: "function waysToClimbK(n, k) {\n  const memo = new Map();\n  const go = (r) => {\n    if (r === 0) return 1;\n    if (r < 0) return 0;\n    if (memo.has(r)) return memo.get(r);\n    let total = 0;\n    for (let s = 1; s <= k; s++) total += go(r - s);\n    memo.set(r, total);\n    return total;\n  };\n  return go(n);\n}\n",
        ts: "function waysToClimbK(n: number, k: number): number {\n  const memo = new Map<number, number>();\n  const go = (r: number): number => {\n    if (r === 0) return 1;\n    if (r < 0) return 0;\n    if (memo.has(r)) return memo.get(r) as number;\n    let total = 0;\n    for (let s = 1; s <= k; s++) total += go(r - s);\n    memo.set(r, total);\n    return total;\n  };\n  return go(n);\n}\n",
        commentedCode: {
          js: "function waysToClimbK(n, k) {\n  // Cache the number of ways to finish each remaining distance.\n  const memo = new Map();\n\n  const go = (r) => {\n    // Reaching exactly zero completes one valid sequence of steps.\n    if (r === 0) return 1;\n    // Overshooting cannot complete a valid sequence.\n    if (r < 0) return 0;\n    if (memo.has(r)) return memo.get(r);\n\n    // Partition all paths by choosing their next step size from 1 through k.\n    let total = 0;\n    for (let s = 1; s <= k; s++) total += go(r - s);\n\n    memo.set(r, total);\n    return total;\n  };\n\n  return go(n);\n}\n",
          ts: "function waysToClimbK(n: number, k: number): number {\n  // Cache the number of ways to finish each remaining distance.\n  const memo = new Map<number, number>();\n\n  const go = (r: number): number => {\n    // Reaching exactly zero completes one valid sequence of steps.\n    if (r === 0) return 1;\n    // Overshooting cannot complete a valid sequence.\n    if (r < 0) return 0;\n    if (memo.has(r)) return memo.get(r) as number;\n\n    // Partition all paths by choosing their next step size from 1 through k.\n    let total = 0;\n    for (let s = 1; s <= k; s++) total += go(r - s);\n\n    memo.set(r, total);\n    return total;\n  };\n\n  return go(n);\n}\n",
        },
        time: "O(n·k)",
        space: "O(n)",
      },
      {
        label: "Tabulation",
        approach: "Build dp from 0 up to n.",
        js: "function waysToClimbK(n, k) {\n  const dp = new Array(n + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 1; i <= n; i++) {\n    for (let s = 1; s <= k && s <= i; s++) dp[i] += dp[i - s];\n  }\n  return dp[n];\n}\n",
        ts: "function waysToClimbK(n: number, k: number): number {\n  const dp = new Array(n + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 1; i <= n; i++) {\n    for (let s = 1; s <= k && s <= i; s++) dp[i] += dp[i - s];\n  }\n  return dp[n];\n}\n",
        commentedCode: {
          js: "function waysToClimbK(n, k) {\n  // dp[i] will count the step sequences whose total distance is exactly i.\n  const dp = new Array(n + 1).fill(0);\n  // The empty sequence is the one way to cover zero steps.\n  dp[0] = 1;\n\n  // Build answers in increasing distance so every smaller dependency is ready.\n  for (let i = 1; i <= n; i++) {\n    // If the last step has size s, the preceding sequence must cover i - s.\n    for (let s = 1; s <= k && s <= i; s++) dp[i] += dp[i - s];\n  }\n\n  return dp[n];\n}\n",
          ts: "function waysToClimbK(n: number, k: number): number {\n  // dp[i] will count the step sequences whose total distance is exactly i.\n  const dp = new Array(n + 1).fill(0);\n  // The empty sequence is the one way to cover zero steps.\n  dp[0] = 1;\n\n  // Build answers in increasing distance so every smaller dependency is ready.\n  for (let i = 1; i <= n; i++) {\n    // If the last step has size s, the preceding sequence must cover i - s.\n    for (let s = 1; s <= k && s <= i; s++) dp[i] += dp[i - s];\n  }\n\n  return dp[n];\n}\n",
        },
        time: "O(n·k)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d1-max-product-subarray",
    slug: "max-product-subarray",
    title: "Maximum Product Subarray",
    difficulty: "medium",
    patternIds: P,
    statement: "Return the largest product of any contiguous, non-empty subarray.",
    examples: [
      { input: "[2,3,-2,4]", output: "6" },
      { input: "[-2,0,-1]", output: "0" },
      { input: "[-2,3,-4]", output: "24" },
    ],
    constraints: ["1 <= nums.length <= 10000"],
    functionName: "maxProductSubarray",
    starter: {
      js: "function maxProductSubarray(nums) {\n  // Largest contiguous product.\n}\n",
      ts: "function maxProductSubarray(nums: number[]): number {\n  // Largest contiguous product.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 3, -2, 4]], expected: 6 },
      { args: [[-2, 0, -1]], expected: 0 },
      { args: [[-2, 3, -4]], expected: 24 },
    ],
    hidden: [
      { args: [[2]], expected: 2 },
      { args: [[-2]], expected: -2 },
      { args: [[0]], expected: 0 },
      { args: [[-1, -1]], expected: 1 },
      { args: [[2, -5, -2, -4, 3]], expected: 24 },
      { args: [[3, -1, 4]], expected: 4 },
    ],
    hints: [
      "A negative flips the sign, so the smallest product so far can become the largest.",
      "Track both the running max and running min ending here.",
      "On each element, recompute max and min from {value, value·prevMax, value·prevMin}.",
    ],
    solutions: [
      {
        label: "Track max and min",
        approach: "Carry both extremes because a negative can swap them.",
        js: "function maxProductSubarray(nums) {\n  let curMax = nums[0], curMin = nums[0], best = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    const v = nums[i];\n    const candidates = [v, v * curMax, v * curMin];\n    curMax = Math.max(...candidates);\n    curMin = Math.min(...candidates);\n    best = Math.max(best, curMax);\n  }\n  return best;\n}\n",
        ts: "function maxProductSubarray(nums: number[]): number {\n  let curMax = nums[0], curMin = nums[0], best = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    const v = nums[i];\n    const candidates = [v, v * curMax, v * curMin];\n    curMax = Math.max(...candidates);\n    curMin = Math.min(...candidates);\n    best = Math.max(best, curMax);\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function maxProductSubarray(nums) {\n  // Track both extreme products ending at the first value, plus the global best.\n  let curMax = nums[0], curMin = nums[0], best = nums[0];\n\n  for (let i = 1; i < nums.length; i++) {\n    const v = nums[i];\n    // Start fresh at v, or extend either prior extreme; a negative can swap min and max.\n    const candidates = [v, v * curMax, v * curMin];\n    // Both assignments use the unchanged candidate list from the previous states.\n    curMax = Math.max(...candidates);\n    curMin = Math.min(...candidates);\n    // Only the maximum ending here can improve the overall answer.\n    best = Math.max(best, curMax);\n  }\n\n  return best;\n}\n",
          ts: "function maxProductSubarray(nums: number[]): number {\n  // Track both extreme products ending at the first value, plus the global best.\n  let curMax = nums[0], curMin = nums[0], best = nums[0];\n\n  for (let i = 1; i < nums.length; i++) {\n    const v = nums[i];\n    // Start fresh at v, or extend either prior extreme; a negative can swap min and max.\n    const candidates = [v, v * curMax, v * curMin];\n    // Both assignments use the unchanged candidate list from the previous states.\n    curMax = Math.max(...candidates);\n    curMin = Math.min(...candidates);\n    // Only the maximum ending here can improve the overall answer.\n    best = Math.max(best, curMax);\n  }\n\n  return best;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Brute force",
        approach: "Multiply out every subarray — an O(n²) baseline.",
        js: "function maxProductSubarray(nums) {\n  let best = -Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    let prod = 1;\n    for (let j = i; j < nums.length; j++) { prod *= nums[j]; best = Math.max(best, prod); }\n  }\n  return best;\n}\n",
        ts: "function maxProductSubarray(nums: number[]): number {\n  let best = -Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    let prod = 1;\n    for (let j = i; j < nums.length; j++) { prod *= nums[j]; best = Math.max(best, prod); }\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function maxProductSubarray(nums) {\n  // Begin below every possible numeric product so the first subarray replaces it.\n  let best = -Infinity;\n\n  // Choose each possible start index.\n  for (let i = 0; i < nums.length; i++) {\n    // Multiplication starts at its identity for this new start.\n    let prod = 1;\n    // Extend the subarray through every possible end index.\n    for (let j = i; j < nums.length; j++) {\n      prod *= nums[j];\n      best = Math.max(best, prod);\n    }\n  }\n\n  return best;\n}\n",
          ts: "function maxProductSubarray(nums: number[]): number {\n  // Begin below every possible numeric product so the first subarray replaces it.\n  let best = -Infinity;\n\n  // Choose each possible start index.\n  for (let i = 0; i < nums.length; i++) {\n    // Multiplication starts at its identity for this new start.\n    let prod = 1;\n    // Extend the subarray through every possible end index.\n    for (let j = i; j < nums.length; j++) {\n      prod *= nums[j];\n      best = Math.max(best, prod);\n    }\n  }\n\n  return best;\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "d1-delete-and-earn",
    slug: "delete-and-earn",
    title: "Delete and Earn",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Picking a value `x` earns `x` times how many times it appears, but then every `x-1` and `x+1` is deleted. Return the maximum total you can earn.",
    examples: [
      { input: "[3,4,2]", output: "6" },
      { input: "[2,2,3,3,3,4]", output: "9" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 10000", "values are positive"],
    functionName: "deleteAndEarn",
    starter: {
      js: "function deleteAndEarn(nums) {\n  // Max earnings under the delete rule.\n}\n",
      ts: "function deleteAndEarn(nums: number[]): number {\n  // Max earnings under the delete rule.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[3, 4, 2]], expected: 6 },
      { args: [[2, 2, 3, 3, 3, 4]], expected: 9 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[1]], expected: 1 },
      { args: [[1, 1, 1]], expected: 3 },
      { args: [[2, 2, 2, 2]], expected: 8 },
      { args: [[1, 2, 3]], expected: 4 },
      { args: [[3, 1]], expected: 4 },
      { args: [[1, 3, 5]], expected: 9 },
    ],
    hints: [
      "Taking value x forbids x-1 and x+1 — that's house robber on the value axis.",
      "Build points[v] = v × count(v), then run the non-adjacent-max over consecutive values.",
      "Iterate values in numeric order so 'adjacent' means differ by 1.",
    ],
    solutions: [
      {
        label: "Reduce to house robber",
        approach: "Convert counts to per-value points and take the max non-adjacent total.",
        js: "function deleteAndEarn(nums) {\n  if (nums.length === 0) return 0;\n  const max = Math.max(...nums);\n  const points = new Array(max + 1).fill(0);\n  for (const v of nums) points[v] += v;\n  let prev2 = 0, prev1 = 0;\n  for (let v = 0; v <= max; v++) { const cur = Math.max(prev1, prev2 + points[v]); prev2 = prev1; prev1 = cur; }\n  return prev1;\n}\n",
        ts: "function deleteAndEarn(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const max = Math.max(...nums);\n  const points = new Array(max + 1).fill(0);\n  for (const v of nums) points[v] += v;\n  let prev2 = 0, prev1 = 0;\n  for (let v = 0; v <= max; v++) { const cur = Math.max(prev1, prev2 + points[v]); prev2 = prev1; prev1 = cur; }\n  return prev1;\n}\n",
        commentedCode: {
          js: "function deleteAndEarn(nums) {\n  // No values means no points to earn.\n  if (nums.length === 0) return 0;\n\n  // Aggregate every occurrence of value v into the points earned by choosing v.\n  const max = Math.max(...nums);\n  const points = new Array(max + 1).fill(0);\n  for (const v of nums) points[v] += v;\n\n  // Treat adjacent numeric values like adjacent houses that cannot both be chosen.\n  let prev2 = 0, prev1 = 0;\n  for (let v = 0; v <= max; v++) {\n    // Skip value v, or take all its points plus the best through v - 2.\n    const cur = Math.max(prev1, prev2 + points[v]);\n    prev2 = prev1;\n    prev1 = cur;\n  }\n\n  return prev1;\n}\n",
          ts: "function deleteAndEarn(nums: number[]): number {\n  // No values means no points to earn.\n  if (nums.length === 0) return 0;\n\n  // Aggregate every occurrence of value v into the points earned by choosing v.\n  const max = Math.max(...nums);\n  const points = new Array(max + 1).fill(0);\n  for (const v of nums) points[v] += v;\n\n  // Treat adjacent numeric values like adjacent houses that cannot both be chosen.\n  let prev2 = 0, prev1 = 0;\n  for (let v = 0; v <= max; v++) {\n    // Skip value v, or take all its points plus the best through v - 2.\n    const cur = Math.max(prev1, prev2 + points[v]);\n    prev2 = prev1;\n    prev1 = cur;\n  }\n\n  return prev1;\n}\n",
        },
        time: "O(n + maxValue)",
        space: "O(maxValue)",
      },
      {
        label: "Memoized over distinct values",
        approach: "Sort distinct values and choose/skip depending on adjacency.",
        js: "function deleteAndEarn(nums) {\n  if (nums.length === 0) return 0;\n  const points = new Map();\n  for (const v of nums) points.set(v, (points.get(v) || 0) + v);\n  const vals = [...points.keys()].sort((a, b) => a - b);\n  const memo = new Map();\n  const go = (i) => {\n    if (i >= vals.length) return 0;\n    if (memo.has(i)) return memo.get(i);\n    const skip = go(i + 1);\n    let next = i + 1;\n    while (next < vals.length && vals[next] === vals[i] + 1) next++;\n    const take = points.get(vals[i]) + go(next);\n    const v = Math.max(skip, take);\n    memo.set(i, v);\n    return v;\n  };\n  return go(0);\n}\n",
        ts: "function deleteAndEarn(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const points = new Map<number, number>();\n  for (const v of nums) points.set(v, (points.get(v) || 0) + v);\n  const vals = [...points.keys()].sort((a, b) => a - b);\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    if (i >= vals.length) return 0;\n    if (memo.has(i)) return memo.get(i) as number;\n    const skip = go(i + 1);\n    let next = i + 1;\n    while (next < vals.length && vals[next] === vals[i] + 1) next++;\n    const take = (points.get(vals[i]) as number) + go(next);\n    const v = Math.max(skip, take);\n    memo.set(i, v);\n    return v;\n  };\n  return go(0);\n}\n",
        commentedCode: {
          js: "function deleteAndEarn(nums) {\n  if (nums.length === 0) return 0;\n\n  // Combine duplicate values into the total reward for choosing that value.\n  const points = new Map();\n  for (const v of nums) points.set(v, (points.get(v) || 0) + v);\n  // Sort distinct values so numeric neighbors appear next to each other.\n  const vals = [...points.keys()].sort((a, b) => a - b);\n\n  // Memoize the best reward using distinct values from index i onward.\n  const memo = new Map();\n  const go = (i) => {\n    if (i >= vals.length) return 0;\n    if (memo.has(i)) return memo.get(i);\n\n    // One choice skips the current distinct value.\n    const skip = go(i + 1);\n    // The take choice must jump over a distinct value exactly one greater.\n    let next = i + 1;\n    while (next < vals.length && vals[next] === vals[i] + 1) next++;\n    const take = points.get(vals[i]) + go(next);\n\n    const v = Math.max(skip, take);\n    memo.set(i, v);\n    return v;\n  };\n\n  return go(0);\n}\n",
          ts: "function deleteAndEarn(nums: number[]): number {\n  if (nums.length === 0) return 0;\n\n  // Combine duplicate values into the total reward for choosing that value.\n  const points = new Map<number, number>();\n  for (const v of nums) points.set(v, (points.get(v) || 0) + v);\n  // Sort distinct values so numeric neighbors appear next to each other.\n  const vals = [...points.keys()].sort((a, b) => a - b);\n\n  // Memoize the best reward using distinct values from index i onward.\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    if (i >= vals.length) return 0;\n    if (memo.has(i)) return memo.get(i) as number;\n\n    // One choice skips the current distinct value.\n    const skip = go(i + 1);\n    // The take choice must jump over a distinct value exactly one greater.\n    let next = i + 1;\n    while (next < vals.length && vals[next] === vals[i] + 1) next++;\n    const take = (points.get(vals[i]) as number) + go(next);\n\n    const v = Math.max(skip, take);\n    memo.set(i, v);\n    return v;\n  };\n\n  return go(0);\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d1-lis-length",
    slug: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return the length of the longest strictly increasing subsequence (the elements need not be contiguous).",
    examples: [
      { input: "[10,9,2,5,3,7,101,18]", output: "4" },
      { input: "[]", output: "0" },
      { input: "[0,1,0,3,2,3]", output: "4" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "lisLength",
    starter: {
      js: "function lisLength(nums) {\n  // Length of the longest strictly increasing subsequence.\n}\n",
      ts: "function lisLength(nums: number[]): number {\n  // Length of the longest strictly increasing subsequence.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
      { args: [[]], expected: 0 },
      { args: [[0, 1, 0, 3, 2, 3]], expected: 4 },
    ],
    hidden: [
      { args: [[7, 7, 7]], expected: 1 },
      { args: [[1, 2, 3, 4]], expected: 4 },
      { args: [[4, 3, 2, 1]], expected: 1 },
      { args: [[1]], expected: 1 },
      { args: [[2, 2, 3]], expected: 2 },
      { args: [[5, 1, 6, 2, 7]], expected: 3 },
    ],
    hints: [
      "dp[i] = longest increasing subsequence ending at i = 1 + max(dp[j]) over earlier j with nums[j] < nums[i].",
      "The answer is the maximum dp[i]. That's O(n²).",
      "A faster O(n log n) approach keeps the smallest possible tail for each length via binary search.",
    ],
    solutions: [
      {
        label: "Tabulation O(n²)",
        approach: "Each element extends the best compatible subsequence before it.",
        js: "function lisLength(nums) {\n  if (nums.length === 0) return 0;\n  const dp = new Array(nums.length).fill(1);\n  let best = 1;\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    best = Math.max(best, dp[i]);\n  }\n  return best;\n}\n",
        ts: "function lisLength(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const dp = new Array(nums.length).fill(1);\n  let best = 1;\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    best = Math.max(best, dp[i]);\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function lisLength(nums) {\n  // The empty array has no increasing subsequence.\n  if (nums.length === 0) return 0;\n\n  // dp[i] starts at 1 for the subsequence containing only nums[i].\n  const dp = new Array(nums.length).fill(1);\n  let best = 1;\n\n  for (let i = 0; i < nums.length; i++) {\n    // Every smaller earlier value can precede nums[i] in a strictly increasing subsequence.\n    for (let j = 0; j < i; j++)\n      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    // The answer may end at any index, not necessarily the final one.\n    best = Math.max(best, dp[i]);\n  }\n\n  return best;\n}\n",
          ts: "function lisLength(nums: number[]): number {\n  // The empty array has no increasing subsequence.\n  if (nums.length === 0) return 0;\n\n  // dp[i] starts at 1 for the subsequence containing only nums[i].\n  const dp = new Array(nums.length).fill(1);\n  let best = 1;\n\n  for (let i = 0; i < nums.length; i++) {\n    // Every smaller earlier value can precede nums[i] in a strictly increasing subsequence.\n    for (let j = 0; j < i; j++)\n      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    // The answer may end at any index, not necessarily the final one.\n    best = Math.max(best, dp[i]);\n  }\n\n  return best;\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
      {
        label: "Patience sorting O(n log n)",
        approach: "Keep the smallest tail for each subsequence length; binary-search each value's slot.",
        js: "function lisLength(nums) {\n  const tails = [];\n  for (const v of nums) {\n    let lo = 0, hi = tails.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (tails[mid] < v) lo = mid + 1; else hi = mid; }\n    tails[lo] = v;\n  }\n  return tails.length;\n}\n",
        ts: "function lisLength(nums: number[]): number {\n  const tails: number[] = [];\n  for (const v of nums) {\n    let lo = 0, hi = tails.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (tails[mid] < v) lo = mid + 1; else hi = mid; }\n    tails[lo] = v;\n  }\n  return tails.length;\n}\n",
        commentedCode: {
          js: "function lisLength(nums) {\n  // tails[length - 1] is the smallest ending value found for that subsequence length.\n  const tails = [];\n\n  for (const v of nums) {\n    // Find the first tail greater than or equal to v.\n    let lo = 0, hi = tails.length;\n    while (lo < hi) {\n      const mid = (lo + hi) >> 1;\n      // A smaller tail can precede v, so v belongs at a longer length.\n      if (tails[mid] < v) lo = mid + 1;\n      else hi = mid;\n    }\n    // Replace a tail with a smaller option, or append when v extends the longest length.\n    tails[lo] = v;\n  }\n\n  // There is one maintained tail for every achievable increasing length.\n  return tails.length;\n}\n",
          ts: "function lisLength(nums: number[]): number {\n  // tails[length - 1] is the smallest ending value found for that subsequence length.\n  const tails: number[] = [];\n\n  for (const v of nums) {\n    // Find the first tail greater than or equal to v.\n    let lo = 0, hi = tails.length;\n    while (lo < hi) {\n      const mid = (lo + hi) >> 1;\n      // A smaller tail can precede v, so v belongs at a longer length.\n      if (tails[mid] < v) lo = mid + 1;\n      else hi = mid;\n    }\n    // Replace a tail with a smaller option, or append when v extends the longest length.\n    tails[lo] = v;\n  }\n\n  // There is one maintained tail for every achievable increasing length.\n  return tails.length;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
];

export const dp1Problems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const dp1Mcqs: QuizQuestion[] = [
  {
    id: "s6-d1-overlap",
    kind: "mcq",
    prompt: "Dynamic programming pays off when a problem has:",
    options: [
      "a single unique path to the answer",
      "overlapping subproblems and optimal substructure",
      "no recursive structure",
      "strictly sorted input",
    ],
    answerIndex: 1,
    explanation: "Reusing answers to repeated subproblems is exactly what turns exponential recursion into polynomial DP.",
  },
  {
    id: "s6-d1-space",
    kind: "mcq",
    prompt: "A 1-D DP whose value depends only on the previous one or two entries can run in:",
    options: ["O(1) extra space", "O(log n) extra space", "O(n) extra space always", "O(n²) extra space"],
    answerIndex: 0,
    explanation: "You can keep just those few rolling variables instead of the whole table.",
  },
];

export const dp1Module: Module = {
  id: "m-pat-dp-1d",
  stageId: S,
  title: "Dynamic Programming I — 1-D Decisions",
  kind: "patternModule",
  summary: "Sequences of choices with overlapping subproblems — the memoization → tabulation → space-optimized arc.",
  lessonSections: [
    {
      heading: "The three stages of a DP",
      body: `Dynamic programming applies when a problem has **overlapping subproblems** (the same smaller question comes up again and again) and **optimal substructure** (the best overall answer is built from best answers to those smaller questions). Almost every DP is written in one of three forms, and it's worth being able to move between them:

1. **Memoized recursion** — write the natural recursion, then cache each result. Easy to derive.
2. **Tabulation** — fill a table bottom-up in dependency order. No recursion, no stack limit.
3. **Space optimization** — when each entry depends only on the last few, drop the table for a couple of variables.

\`\`\`js
// Climbing stairs, all three stages of the same idea:
// memo: ways(n) = ways(n-1) + ways(n-2), cached
// table: dp[i] = dp[i-1] + dp[i-2]
// space-opt: two rolling variables
function climb(n) {
  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}
console.log(climb(5)); // 8
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for 1-D DP when the answer at position *i* depends on a **constant number of earlier positions**:

- "how many ways to…" (climbing stairs, decodings),
- "max/min along a line of choices" (house robber, min cost, max subarray),
- Fibonacci-style recurrences,
- picking non-adjacent elements, or accumulating a running best.

The tell is a recurrence like \`f(i) = combine(f(i-1), f(i-2), …)\` with only a few look-backs.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Memoize any recursion
const memo = new Map<number, number>();
function f(i: number): number {
  if (isBase(i)) return baseValue;
  if (memo.has(i)) return memo.get(i)!;
  const v = /* combine subproblems */;
  memo.set(i, v);
  return v;
}

// Tabulate the same recurrence, then optionally keep only rolling vars
\`\`\`

**Pitfalls:** getting the **base cases** wrong (an empty input, or n = 0 vs 1); iterating the table in the wrong order so a needed entry isn't ready yet; and forgetting that a value like max-subarray must be **non-empty** (start from nums[0], not 0). Every drill below ships a memoized *and* a tabulated/space-optimized solution — compare them. Work them easy to hard.`,
    },
  ],
  guidedExampleProblemId: "d1-climb-stairs",
  drillProblemIds: [
    "d1-climb-stairs",
    "d1-tribonacci",
    "d1-house-robber",
    "d1-max-subarray",
    "d1-min-cost-stairs",
    "d1-house-robber-circular",
  ],
  testPoolProblemIds: [
    "d1-ways-climb-k",
    "d1-max-product-subarray",
    "d1-delete-and-earn",
    "d1-lis-length",
  ],
  complexityQuestionIds: ["s6-d1-overlap", "s6-d1-space"],
  badgeId: "badge-pat-dp-1d",
  prerequisiteModuleIds: [],
};
