import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["dp-knapsack"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "d2-subset-sum",
    slug: "subset-sum-exists",
    title: "Subset Sum Exists",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Return `true` if some subset of the values adds up exactly to `target`. The empty subset sums to 0.",
    examples: [
      { input: "[1,2,3], 5", output: "true" },
      { input: "[1,2,3], 7", output: "false" },
      { input: "[], 0", output: "true" },
    ],
    constraints: ["0 <= nums.length <= 200", "values are non-negative", "0 <= target <= 10000"],
    functionName: "subsetSumExists",
    starter: {
      js: "function subsetSumExists(nums, target) {\n  // True if a subset sums to target.\n}\n",
      ts: "function subsetSumExists(nums: number[], target: number): boolean {\n  // True if a subset sums to target.\n  return false;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3], 5], expected: true },
      { args: [[1, 2, 3], 7], expected: false },
      { args: [[], 0], expected: true },
    ],
    hidden: [
      { args: [[], 5], expected: false },
      { args: [[5], 5], expected: true },
      { args: [[1, 2, 3], 0], expected: true },
      { args: [[2, 4], 7], expected: false },
      { args: [[3, 34, 4, 12, 5, 2], 9], expected: true },
      { args: [[1, 1, 1], 2], expected: true },
    ],
    hints: [
      "For each item you either include it in the sum or you don't — that's 0/1 knapsack feasibility.",
      "State: can the first i items make sum s? dp[s] = dp[s] or dp[s - nums[i]].",
      "Iterate the sum downward when using a 1-D table so each item is used once.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Include or exclude each item, caching on (index, remaining).",
        js: "function subsetSumExists(nums, target) {\n  const memo = new Map();\n  const go = (i, rem) => {\n    if (rem === 0) return true;\n    if (i >= nums.length || rem < 0) return false;\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key);\n    const v = go(i + 1, rem - nums[i]) || go(i + 1, rem);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, target);\n}\n",
        ts: "function subsetSumExists(nums: number[], target: number): boolean {\n  const memo = new Map<string, boolean>();\n  const go = (i: number, rem: number): boolean => {\n    if (rem === 0) return true;\n    if (i >= nums.length || rem < 0) return false;\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key) as boolean;\n    const v = go(i + 1, rem - nums[i]) || go(i + 1, rem);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, target);\n}\n",
        commentedCode: {
          js: "function subsetSumExists(nums, target) {\n  // Cache whether each (item index, remaining sum) state can succeed.\n  const memo = new Map();\n  const go = (i, rem) => {\n    // Reaching zero means the chosen values form the requested sum.\n    if (rem === 0) return true;\n    // No items remain, or this non-negative input has already overshot the target.\n    if (i >= nums.length || rem < 0) return false;\n    // The answer depends only on where we are and how much is still needed.\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key);\n    // Either include nums[i] once, or exclude it and move past it.\n    const v = go(i + 1, rem - nums[i]) || go(i + 1, rem);\n    // Save the combined include/exclude result before returning it.\n    memo.set(key, v);\n    return v;\n  };\n  // Begin before the first item with the full target still remaining.\n  return go(0, target);\n}\n",
          ts: "function subsetSumExists(nums: number[], target: number): boolean {\n  // Cache whether each (item index, remaining sum) state can succeed.\n  const memo = new Map<string, boolean>();\n  const go = (i: number, rem: number): boolean => {\n    // Reaching zero means the chosen values form the requested sum.\n    if (rem === 0) return true;\n    // No items remain, or this non-negative input has already overshot the target.\n    if (i >= nums.length || rem < 0) return false;\n    // The answer depends only on where we are and how much is still needed.\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key) as boolean;\n    // Either include nums[i] once, or exclude it and move past it.\n    const v = go(i + 1, rem - nums[i]) || go(i + 1, rem);\n    // Save the combined include/exclude result before returning it.\n    memo.set(key, v);\n    return v;\n  };\n  // Begin before the first item with the full target still remaining.\n  return go(0, target);\n}\n",
        },
        time: "O(n·target)",
        space: "O(n·target)",
      },
      {
        label: "1-D tabulation",
        approach: "Track reachable sums in a boolean table, iterating sums downward.",
        js: "function subsetSumExists(nums, target) {\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const v of nums) {\n    for (let s = target; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  return dp[target];\n}\n",
        ts: "function subsetSumExists(nums: number[], target: number): boolean {\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const v of nums) {\n    for (let s = target; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  return dp[target];\n}\n",
        commentedCode: {
          js: "function subsetSumExists(nums, target) {\n  // dp[s] says whether processed values can form sum s.\n  const dp = new Array(target + 1).fill(false);\n  // The empty subset is the one way to form sum zero.\n  dp[0] = true;\n  for (const v of nums) {\n    // Walk downward so states written for v cannot reuse v in this same pass.\n    for (let s = target; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  // The target is achievable exactly when its reachability state was marked.\n  return dp[target];\n}\n",
          ts: "function subsetSumExists(nums: number[], target: number): boolean {\n  // dp[s] says whether processed values can form sum s.\n  const dp = new Array(target + 1).fill(false);\n  // The empty subset is the one way to form sum zero.\n  dp[0] = true;\n  for (const v of nums) {\n    // Walk downward so states written for v cannot reuse v in this same pass.\n    for (let s = target; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  // The target is achievable exactly when its reachability state was marked.\n  return dp[target];\n}\n",
        },
        time: "O(n·target)",
        space: "O(target)",
      },
    ],
  },
  {
    id: "d2-can-partition",
    slug: "partition-equal-subset",
    title: "Partition Equal Subset Sum",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return `true` if the values can be split into two subsets with equal sums.",
    examples: [
      { input: "[1,5,11,5]", output: "true" },
      { input: "[1,2,3,5]", output: "false" },
      { input: "[]", output: "true" },
    ],
    constraints: ["0 <= nums.length <= 200", "values are non-negative"],
    functionName: "canPartition",
    starter: {
      js: "function canPartition(nums) {\n  // True if two equal-sum subsets exist.\n}\n",
      ts: "function canPartition(nums: number[]): boolean {\n  // True if two equal-sum subsets exist.\n  return false;\n}\n",
    },
    visible: [
      { args: [[1, 5, 11, 5]], expected: true },
      { args: [[1, 2, 3, 5]], expected: false },
      { args: [[]], expected: true },
    ],
    hidden: [
      { args: [[1, 1]], expected: true },
      { args: [[2, 2]], expected: true },
      { args: [[1, 2, 5]], expected: false },
      { args: [[3, 3, 3, 4, 5]], expected: true },
      { args: [[1, 2, 3, 4]], expected: true },
      { args: [[100, 100]], expected: true },
    ],
    hints: [
      "Equal halves means each subset sums to total / 2.",
      "If the total is odd, it's impossible.",
      "Otherwise it's a subset-sum feasibility check for total/2.",
    ],
    solutions: [
      {
        label: "Reduce to subset sum",
        approach: "Target is half the total; reuse the 0/1 reachability DP.",
        js: "function canPartition(nums) {\n  const total = nums.reduce((s, v) => s + v, 0);\n  if (total % 2 !== 0) return false;\n  const target = total / 2;\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const v of nums) {\n    for (let s = target; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  return dp[target];\n}\n",
        ts: "function canPartition(nums: number[]): boolean {\n  const total = nums.reduce((s, v) => s + v, 0);\n  if (total % 2 !== 0) return false;\n  const target = total / 2;\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const v of nums) {\n    for (let s = target; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  return dp[target];\n}\n",
        commentedCode: {
          js: "function canPartition(nums) {\n  // Equal subsets must each hold exactly half of the total sum.\n  const total = nums.reduce((s, v) => s + v, 0);\n  // An odd total cannot be divided into two integer sums.\n  if (total % 2 !== 0) return false;\n  const target = total / 2;\n  // dp[s] records whether one subset can make sum s.\n  const dp = new Array(target + 1).fill(false);\n  // Choosing nothing always makes zero.\n  dp[0] = true;\n  for (const v of nums) {\n    // Descend to ensure this 0/1 item contributes at most once.\n    for (let s = target; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  // A subset totaling half leaves the other half for the remaining values.\n  return dp[target];\n}\n",
          ts: "function canPartition(nums: number[]): boolean {\n  // Equal subsets must each hold exactly half of the total sum.\n  const total = nums.reduce((s, v) => s + v, 0);\n  // An odd total cannot be divided into two integer sums.\n  if (total % 2 !== 0) return false;\n  const target = total / 2;\n  // dp[s] records whether one subset can make sum s.\n  const dp = new Array(target + 1).fill(false);\n  // Choosing nothing always makes zero.\n  dp[0] = true;\n  for (const v of nums) {\n    // Descend to ensure this 0/1 item contributes at most once.\n    for (let s = target; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  // A subset totaling half leaves the other half for the remaining values.\n  return dp[target];\n}\n",
        },
        time: "O(n·sum)",
        space: "O(sum)",
      },
      {
        label: "Memoized recursion",
        approach: "Try to build exactly half with include/exclude choices.",
        js: "function canPartition(nums) {\n  const total = nums.reduce((s, v) => s + v, 0);\n  if (total % 2 !== 0) return false;\n  const memo = new Map();\n  const go = (i, rem) => {\n    if (rem === 0) return true;\n    if (i >= nums.length || rem < 0) return false;\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key);\n    const v = go(i + 1, rem - nums[i]) || go(i + 1, rem);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, total / 2);\n}\n",
        ts: "function canPartition(nums: number[]): boolean {\n  const total = nums.reduce((s, v) => s + v, 0);\n  if (total % 2 !== 0) return false;\n  const memo = new Map<string, boolean>();\n  const go = (i: number, rem: number): boolean => {\n    if (rem === 0) return true;\n    if (i >= nums.length || rem < 0) return false;\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key) as boolean;\n    const v = go(i + 1, rem - nums[i]) || go(i + 1, rem);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, total / 2);\n}\n",
        commentedCode: {
          js: "function canPartition(nums) {\n  // A valid partition needs one chosen subset to equal half the total.\n  const total = nums.reduce((s, v) => s + v, 0);\n  // No equal integer partition exists when the total is odd.\n  if (total % 2 !== 0) return false;\n  // Memoize each include/exclude state by index and remaining half-sum.\n  const memo = new Map();\n  const go = (i, rem) => {\n    // Filling the half-sum proves that the complementary values form the other half.\n    if (rem === 0) return true;\n    // This branch fails after exhausting all items or overshooting below zero.\n    if (i >= nums.length || rem < 0) return false;\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key);\n    // Use this value once or skip it, accepting either successful branch.\n    const v = go(i + 1, rem - nums[i]) || go(i + 1, rem);\n    memo.set(key, v);\n    return v;\n  };\n  // Search for a subset whose sum is exactly one half.\n  return go(0, total / 2);\n}\n",
          ts: "function canPartition(nums: number[]): boolean {\n  // A valid partition needs one chosen subset to equal half the total.\n  const total = nums.reduce((s, v) => s + v, 0);\n  // No equal integer partition exists when the total is odd.\n  if (total % 2 !== 0) return false;\n  // Memoize each include/exclude state by index and remaining half-sum.\n  const memo = new Map<string, boolean>();\n  const go = (i: number, rem: number): boolean => {\n    // Filling the half-sum proves that the complementary values form the other half.\n    if (rem === 0) return true;\n    // This branch fails after exhausting all items or overshooting below zero.\n    if (i >= nums.length || rem < 0) return false;\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key) as boolean;\n    // Use this value once or skip it, accepting either successful branch.\n    const v = go(i + 1, rem - nums[i]) || go(i + 1, rem);\n    memo.set(key, v);\n    return v;\n  };\n  // Search for a subset whose sum is exactly one half.\n  return go(0, total / 2);\n}\n",
        },
        time: "O(n·sum)",
        space: "O(n·sum)",
      },
    ],
  },
  {
    id: "d2-knapsack-01",
    slug: "knapsack-01",
    title: "0/1 Knapsack",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given item `weights` and `values` of the same length and a `capacity`, return the maximum total value of items that fit, using each item at most once.",
    examples: [
      { input: "[1,3,4,5], [1,4,5,7], 7", output: "9" },
      { input: "[], [], 10", output: "0" },
      { input: "[5], [10], 4", output: "0" },
    ],
    constraints: ["weights.length === values.length", "0 <= capacity <= 10000"],
    functionName: "knapsack01",
    starter: {
      js: "function knapsack01(weights, values, capacity) {\n  // Max value with each item used at most once.\n}\n",
      ts: "function knapsack01(weights: number[], values: number[], capacity: number): number {\n  // Max value with each item used at most once.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 3, 4, 5], [1, 4, 5, 7], 7], expected: 9 },
      { args: [[], [], 10], expected: 0 },
      { args: [[5], [10], 4], expected: 0 },
    ],
    hidden: [
      { args: [[1, 2, 3], [6, 10, 12], 5], expected: 22 },
      { args: [[2, 3], [3, 4], 1], expected: 0 },
      { args: [[1, 1, 1], [1, 1, 1], 2], expected: 2 },
      { args: [[4, 5, 1], [1, 2, 3], 5], expected: 4 },
      { args: [[3], [10], 3], expected: 10 },
      { args: [[1, 2, 3], [10, 15, 40], 6], expected: 65 },
    ],
    hints: [
      "For each item you either take it (if it fits) or skip it.",
      "dp[cap] = max value using capacity cap; process items one at a time.",
      "In the 1-D version iterate capacity downward so each item is used once.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Cache the best value from (item index, remaining capacity).",
        js: "function knapsack01(weights, values, capacity) {\n  const memo = new Map();\n  const go = (i, cap) => {\n    if (i >= weights.length || cap <= 0) return 0;\n    const key = i + ':' + cap;\n    if (memo.has(key)) return memo.get(key);\n    let best = go(i + 1, cap);\n    if (weights[i] <= cap) best = Math.max(best, values[i] + go(i + 1, cap - weights[i]));\n    memo.set(key, best);\n    return best;\n  };\n  return go(0, capacity);\n}\n",
        ts: "function knapsack01(weights: number[], values: number[], capacity: number): number {\n  const memo = new Map<string, number>();\n  const go = (i: number, cap: number): number => {\n    if (i >= weights.length || cap <= 0) return 0;\n    const key = i + ':' + cap;\n    if (memo.has(key)) return memo.get(key) as number;\n    let best = go(i + 1, cap);\n    if (weights[i] <= cap) best = Math.max(best, values[i] + go(i + 1, cap - weights[i]));\n    memo.set(key, best);\n    return best;\n  };\n  return go(0, capacity);\n}\n",
        commentedCode: {
          js: "function knapsack01(weights, values, capacity) {\n  // Cache the best value for each (next item, remaining capacity) state.\n  const memo = new Map();\n  const go = (i, cap) => {\n    // No item or capacity remains, so this branch adds no more value.\n    if (i >= weights.length || cap <= 0) return 0;\n    const key = i + ':' + cap;\n    if (memo.has(key)) return memo.get(key);\n    // First consider skipping item i entirely.\n    let best = go(i + 1, cap);\n    // If it fits, compare skipping with taking its value and moving past it.\n    if (weights[i] <= cap) best = Math.max(best, values[i] + go(i + 1, cap - weights[i]));\n    // Store the optimal result shared by all callers of this state.\n    memo.set(key, best);\n    return best;\n  };\n  // Start at the first item with all capacity available.\n  return go(0, capacity);\n}\n",
          ts: "function knapsack01(weights: number[], values: number[], capacity: number): number {\n  // Cache the best value for each (next item, remaining capacity) state.\n  const memo = new Map<string, number>();\n  const go = (i: number, cap: number): number => {\n    // No item or capacity remains, so this branch adds no more value.\n    if (i >= weights.length || cap <= 0) return 0;\n    const key = i + ':' + cap;\n    if (memo.has(key)) return memo.get(key) as number;\n    // First consider skipping item i entirely.\n    let best = go(i + 1, cap);\n    // If it fits, compare skipping with taking its value and moving past it.\n    if (weights[i] <= cap) best = Math.max(best, values[i] + go(i + 1, cap - weights[i]));\n    // Store the optimal result shared by all callers of this state.\n    memo.set(key, best);\n    return best;\n  };\n  // Start at the first item with all capacity available.\n  return go(0, capacity);\n}\n",
        },
        time: "O(n·capacity)",
        space: "O(n·capacity)",
      },
      {
        label: "1-D tabulation",
        approach: "Roll a capacity table, iterating capacity high-to-low per item.",
        js: "function knapsack01(weights, values, capacity) {\n  const dp = new Array(capacity + 1).fill(0);\n  for (let i = 0; i < weights.length; i++) {\n    for (let cap = capacity; cap >= weights[i]; cap--) {\n      dp[cap] = Math.max(dp[cap], values[i] + dp[cap - weights[i]]);\n    }\n  }\n  return dp[capacity];\n}\n",
        ts: "function knapsack01(weights: number[], values: number[], capacity: number): number {\n  const dp = new Array(capacity + 1).fill(0);\n  for (let i = 0; i < weights.length; i++) {\n    for (let cap = capacity; cap >= weights[i]; cap--) {\n      dp[cap] = Math.max(dp[cap], values[i] + dp[cap - weights[i]]);\n    }\n  }\n  return dp[capacity];\n}\n",
        commentedCode: {
          js: "function knapsack01(weights, values, capacity) {\n  // dp[cap] is the greatest value achievable within cap using processed items.\n  const dp = new Array(capacity + 1).fill(0);\n  for (let i = 0; i < weights.length; i++) {\n    // Descend so dp[cap - weight] still represents choices made before item i.\n    for (let cap = capacity; cap >= weights[i]; cap--) {\n      // Choose the better of skipping item i or taking it exactly once.\n      dp[cap] = Math.max(dp[cap], values[i] + dp[cap - weights[i]]);\n    }\n  }\n  // The full-capacity state contains the best feasible total value.\n  return dp[capacity];\n}\n",
          ts: "function knapsack01(weights: number[], values: number[], capacity: number): number {\n  // dp[cap] is the greatest value achievable within cap using processed items.\n  const dp = new Array(capacity + 1).fill(0);\n  for (let i = 0; i < weights.length; i++) {\n    // Descend so dp[cap - weight] still represents choices made before item i.\n    for (let cap = capacity; cap >= weights[i]; cap--) {\n      // Choose the better of skipping item i or taking it exactly once.\n      dp[cap] = Math.max(dp[cap], values[i] + dp[cap - weights[i]]);\n    }\n  }\n  // The full-capacity state contains the best feasible total value.\n  return dp[capacity];\n}\n",
        },
        time: "O(n·capacity)",
        space: "O(capacity)",
      },
    ],
  },
  {
    id: "d2-coin-change-min",
    slug: "coin-change-min",
    title: "Coin Change (Fewest Coins)",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given coin denominations (usable any number of times) and an `amount`, return the fewest coins that sum to it, or -1 if it can't be made.",
    examples: [
      { input: "[1,2,5], 11", output: "3" },
      { input: "[2], 3", output: "-1" },
      { input: "[], 0", output: "0" },
    ],
    constraints: ["0 <= amount <= 10000", "coins are positive"],
    functionName: "coinChangeMin",
    starter: {
      js: "function coinChangeMin(coins, amount) {\n  // Fewest coins summing to amount, or -1.\n}\n",
      ts: "function coinChangeMin(coins: number[], amount: number): number {\n  // Fewest coins summing to amount, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 2, 5], 11], expected: 3 },
      { args: [[2], 3], expected: -1 },
      { args: [[], 0], expected: 0 },
    ],
    hidden: [
      { args: [[1], 0], expected: 0 },
      { args: [[1], 5], expected: 5 },
      { args: [[2, 5], 11], expected: 4 },
      { args: [[1, 2, 5], 100], expected: 20 },
      { args: [[3, 7], 5], expected: -1 },
      { args: [[1, 5, 10, 25], 30], expected: 2 },
    ],
    hints: [
      "This is unbounded knapsack minimising count instead of maximising value.",
      "dp[a] = 1 + min over coins c of dp[a - c].",
      "Seed dp[0] = 0 and use Infinity for unreachable amounts.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Fewest coins for each remaining amount, cached.",
        js: "function coinChangeMin(coins, amount) {\n  const memo = new Map();\n  const go = (rem) => {\n    if (rem === 0) return 0;\n    if (rem < 0) return Infinity;\n    if (memo.has(rem)) return memo.get(rem);\n    let best = Infinity;\n    for (const c of coins) best = Math.min(best, 1 + go(rem - c));\n    memo.set(rem, best);\n    return best;\n  };\n  const res = go(amount);\n  return res === Infinity ? -1 : res;\n}\n",
        ts: "function coinChangeMin(coins: number[], amount: number): number {\n  const memo = new Map<number, number>();\n  const go = (rem: number): number => {\n    if (rem === 0) return 0;\n    if (rem < 0) return Infinity;\n    if (memo.has(rem)) return memo.get(rem) as number;\n    let best = Infinity;\n    for (const c of coins) best = Math.min(best, 1 + go(rem - c));\n    memo.set(rem, best);\n    return best;\n  };\n  const res = go(amount);\n  return res === Infinity ? -1 : res;\n}\n",
        commentedCode: {
          js: "function coinChangeMin(coins, amount) {\n  // Cache the minimum coin count for each remaining amount.\n  const memo = new Map();\n  const go = (rem) => {\n    // No more value is needed, so this branch uses zero additional coins.\n    if (rem === 0) return 0;\n    // Overshooting cannot form the amount; Infinity keeps this branch out of a minimum.\n    if (rem < 0) return Infinity;\n    if (memo.has(rem)) return memo.get(rem);\n    // Start unreachable, then try choosing each denomination as the next coin.\n    let best = Infinity;\n    for (const c of coins) best = Math.min(best, 1 + go(rem - c));\n    // Reuse this answer whenever recursion reaches the same remainder.\n    memo.set(rem, best);\n    return best;\n  };\n  // Solve the original amount using the same recurrence.\n  const res = go(amount);\n  // Convert the internal unreachable sentinel to the required -1 result.\n  return res === Infinity ? -1 : res;\n}\n",
          ts: "function coinChangeMin(coins: number[], amount: number): number {\n  // Cache the minimum coin count for each remaining amount.\n  const memo = new Map<number, number>();\n  const go = (rem: number): number => {\n    // No more value is needed, so this branch uses zero additional coins.\n    if (rem === 0) return 0;\n    // Overshooting cannot form the amount; Infinity keeps this branch out of a minimum.\n    if (rem < 0) return Infinity;\n    if (memo.has(rem)) return memo.get(rem) as number;\n    // Start unreachable, then try choosing each denomination as the next coin.\n    let best = Infinity;\n    for (const c of coins) best = Math.min(best, 1 + go(rem - c));\n    // Reuse this answer whenever recursion reaches the same remainder.\n    memo.set(rem, best);\n    return best;\n  };\n  // Solve the original amount using the same recurrence.\n  const res = go(amount);\n  // Convert the internal unreachable sentinel to the required -1 result.\n  return res === Infinity ? -1 : res;\n}\n",
        },
        time: "O(amount·coins)",
        space: "O(amount)",
      },
      {
        label: "Tabulation",
        approach: "Fill dp[0..amount] with the fewest coins for each amount.",
        js: "function coinChangeMin(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\n",
        ts: "function coinChangeMin(coins: number[], amount: number): number {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\n",
        commentedCode: {
          js: "function coinChangeMin(coins, amount) {\n  // dp[a] stores the fewest coins known for amount a; Infinity means unreachable.\n  const dp = new Array(amount + 1).fill(Infinity);\n  // Making zero requires no coins and seeds all reachable transitions.\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    // If c fits, append it to the best construction of a - c.\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  // Report -1 only when no denomination sequence reached the requested amount.\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\n",
          ts: "function coinChangeMin(coins: number[], amount: number): number {\n  // dp[a] stores the fewest coins known for amount a; Infinity means unreachable.\n  const dp = new Array(amount + 1).fill(Infinity);\n  // Making zero requires no coins and seeds all reachable transitions.\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    // If c fits, append it to the best construction of a - c.\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  // Report -1 only when no denomination sequence reached the requested amount.\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\n",
        },
        time: "O(amount·coins)",
        space: "O(amount)",
      },
    ],
  },
  {
    id: "d2-coin-change-ways",
    slug: "coin-change-ways",
    title: "Coin Change (Count Ways)",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given coin denominations (usable any number of times) and an `amount`, return how many distinct combinations sum to it. Combinations differing only in order count once. Amount 0 has one combination (the empty one).",
    examples: [
      { input: "[1,2,5], 5", output: "4" },
      { input: "[2], 3", output: "0" },
      { input: "[], 0", output: "1" },
    ],
    constraints: ["0 <= amount <= 10000", "coins are distinct positive integers"],
    functionName: "coinChangeWays",
    starter: {
      js: "function coinChangeWays(coins, amount) {\n  // Number of combinations summing to amount.\n}\n",
      ts: "function coinChangeWays(coins: number[], amount: number): number {\n  // Number of combinations summing to amount.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 5], 5], expected: 4 },
      { args: [[2], 3], expected: 0 },
      { args: [[], 0], expected: 1 },
    ],
    hidden: [
      { args: [[1], 0], expected: 1 },
      { args: [[1], 5], expected: 1 },
      { args: [[2, 5, 10], 10], expected: 3 },
      { args: [[1, 2], 3], expected: 2 },
      { args: [[1, 2, 3], 4], expected: 4 },
      { args: [[5], 5], expected: 1 },
    ],
    hints: [
      "To count combinations (not orderings), fix the coin order: process one coin fully before the next.",
      "dp[a] += dp[a - coin] with the coin loop on the outside.",
      "Seed dp[0] = 1.",
    ],
    solutions: [
      {
        label: "Tabulation (coin outer loop)",
        approach: "Adding coins one denomination at a time counts each combination once.",
        js: "function coinChangeWays(coins, amount) {\n  const dp = new Array(amount + 1).fill(0);\n  dp[0] = 1;\n  for (const c of coins) {\n    for (let a = c; a <= amount; a++) dp[a] += dp[a - c];\n  }\n  return dp[amount];\n}\n",
        ts: "function coinChangeWays(coins: number[], amount: number): number {\n  const dp = new Array(amount + 1).fill(0);\n  dp[0] = 1;\n  for (const c of coins) {\n    for (let a = c; a <= amount; a++) dp[a] += dp[a - c];\n  }\n  return dp[amount];\n}\n",
        commentedCode: {
          js: "function coinChangeWays(coins, amount) {\n  // dp[a] counts combinations for a using only denominations processed so far.\n  const dp = new Array(amount + 1).fill(0);\n  // The empty selection is one valid combination for amount zero.\n  dp[0] = 1;\n  // Processing each denomination outside prevents different orders from being recounted.\n  for (const c of coins) {\n    // Sweep upward so the current coin may be used repeatedly.\n    for (let a = c; a <= amount; a++) dp[a] += dp[a - c];\n  }\n  // Every counted construction of amount uses a canonical denomination order.\n  return dp[amount];\n}\n",
          ts: "function coinChangeWays(coins: number[], amount: number): number {\n  // dp[a] counts combinations for a using only denominations processed so far.\n  const dp = new Array(amount + 1).fill(0);\n  // The empty selection is one valid combination for amount zero.\n  dp[0] = 1;\n  // Processing each denomination outside prevents different orders from being recounted.\n  for (const c of coins) {\n    // Sweep upward so the current coin may be used repeatedly.\n    for (let a = c; a <= amount; a++) dp[a] += dp[a - c];\n  }\n  // Every counted construction of amount uses a canonical denomination order.\n  return dp[amount];\n}\n",
        },
        time: "O(amount·coins)",
        space: "O(amount)",
      },
      {
        label: "Memoized recursion",
        approach: "Recurse on (coin index, remaining) to avoid counting reorderings.",
        js: "function coinChangeWays(coins, amount) {\n  const memo = new Map();\n  const go = (i, rem) => {\n    if (rem === 0) return 1;\n    if (rem < 0 || i >= coins.length) return 0;\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key);\n    const v = go(i, rem - coins[i]) + go(i + 1, rem);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, amount);\n}\n",
        ts: "function coinChangeWays(coins: number[], amount: number): number {\n  const memo = new Map<string, number>();\n  const go = (i: number, rem: number): number => {\n    if (rem === 0) return 1;\n    if (rem < 0 || i >= coins.length) return 0;\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key) as number;\n    const v = go(i, rem - coins[i]) + go(i + 1, rem);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, amount);\n}\n",
        commentedCode: {
          js: "function coinChangeWays(coins, amount) {\n  // Cache the number of combinations for each (denomination index, remainder).\n  const memo = new Map();\n  const go = (i, rem) => {\n    // Finishing the amount contributes one complete combination.\n    if (rem === 0) return 1;\n    // Overshooting or running out of denominations contributes no combination.\n    if (rem < 0 || i >= coins.length) return 0;\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key);\n    // Reuse coin i, or permanently skip it; fixed indices avoid counting reorderings.\n    const v = go(i, rem - coins[i]) + go(i + 1, rem);\n    // Store the sum of both disjoint choice families.\n    memo.set(key, v);\n    return v;\n  };\n  // Begin with every denomination available and the full amount remaining.\n  return go(0, amount);\n}\n",
          ts: "function coinChangeWays(coins: number[], amount: number): number {\n  // Cache the number of combinations for each (denomination index, remainder).\n  const memo = new Map<string, number>();\n  const go = (i: number, rem: number): number => {\n    // Finishing the amount contributes one complete combination.\n    if (rem === 0) return 1;\n    // Overshooting or running out of denominations contributes no combination.\n    if (rem < 0 || i >= coins.length) return 0;\n    const key = i + ':' + rem;\n    if (memo.has(key)) return memo.get(key) as number;\n    // Reuse coin i, or permanently skip it; fixed indices avoid counting reorderings.\n    const v = go(i, rem - coins[i]) + go(i + 1, rem);\n    // Store the sum of both disjoint choice families.\n    memo.set(key, v);\n    return v;\n  };\n  // Begin with every denomination available and the full amount remaining.\n  return go(0, amount);\n}\n",
        },
        time: "O(amount·coins)",
        space: "O(amount·coins)",
      },
    ],
  },
  {
    id: "d2-target-sum",
    slug: "target-sum-ways",
    title: "Target Sum",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Assign a `+` or `-` sign to each value so the signed total equals `target`. Return how many assignments achieve it.",
    examples: [
      { input: "[1,1,1,1,1], 3", output: "5" },
      { input: "[1], 1", output: "1" },
      { input: "[1], 2", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 20", "values are non-negative"],
    functionName: "targetSumWays",
    starter: {
      js: "function targetSumWays(nums, target) {\n  // Count +/- assignments reaching target.\n}\n",
      ts: "function targetSumWays(nums: number[], target: number): number {\n  // Count +/- assignments reaching target.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 1, 1, 1, 1], 3], expected: 5 },
      { args: [[1], 1], expected: 1 },
      { args: [[1], 2], expected: 0 },
    ],
    hidden: [
      { args: [[], 0], expected: 1 },
      { args: [[1, 0], 1], expected: 2 },
      { args: [[1, 1], 0], expected: 2 },
      { args: [[1, 2, 1], 0], expected: 2 },
      { args: [[0, 0, 0], 0], expected: 8 },
      { args: [[100], 100], expected: 1 },
    ],
    hints: [
      "At each index you branch into adding or subtracting the value.",
      "Cache on (index, running sum) so shared states aren't recomputed.",
      "Or transform to a subset-sum count: the positives must total (sum + target) / 2.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Branch on the sign of each value, caching (index, runningSum).",
        js: "function targetSumWays(nums, target) {\n  const memo = new Map();\n  const go = (i, sum) => {\n    if (i === nums.length) return sum === target ? 1 : 0;\n    const key = i + ':' + sum;\n    if (memo.has(key)) return memo.get(key);\n    const v = go(i + 1, sum + nums[i]) + go(i + 1, sum - nums[i]);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function targetSumWays(nums: number[], target: number): number {\n  const memo = new Map<string, number>();\n  const go = (i: number, sum: number): number => {\n    if (i === nums.length) return sum === target ? 1 : 0;\n    const key = i + ':' + sum;\n    if (memo.has(key)) return memo.get(key) as number;\n    const v = go(i + 1, sum + nums[i]) + go(i + 1, sum - nums[i]);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        commentedCode: {
          js: "function targetSumWays(nums, target) {\n  // Cache how many completions exist from each (index, running sum).\n  const memo = new Map();\n  const go = (i, sum) => {\n    // After assigning every sign, count this assignment only if it hits target.\n    if (i === nums.length) return sum === target ? 1 : 0;\n    const key = i + ':' + sum;\n    if (memo.has(key)) return memo.get(key);\n    // Assign either + or - to nums[i]; the two branches are distinct assignments.\n    const v = go(i + 1, sum + nums[i]) + go(i + 1, sum - nums[i]);\n    // Save their total for any repeated state.\n    memo.set(key, v);\n    return v;\n  };\n  // Start before assigning signs with a running total of zero.\n  return go(0, 0);\n}\n",
          ts: "function targetSumWays(nums: number[], target: number): number {\n  // Cache how many completions exist from each (index, running sum).\n  const memo = new Map<string, number>();\n  const go = (i: number, sum: number): number => {\n    // After assigning every sign, count this assignment only if it hits target.\n    if (i === nums.length) return sum === target ? 1 : 0;\n    const key = i + ':' + sum;\n    if (memo.has(key)) return memo.get(key) as number;\n    // Assign either + or - to nums[i]; the two branches are distinct assignments.\n    const v = go(i + 1, sum + nums[i]) + go(i + 1, sum - nums[i]);\n    // Save their total for any repeated state.\n    memo.set(key, v);\n    return v;\n  };\n  // Start before assigning signs with a running total of zero.\n  return go(0, 0);\n}\n",
        },
        time: "O(n·sumRange)",
        space: "O(n·sumRange)",
      },
      {
        label: "Subset-sum transform",
        approach: "Positives must sum to (total + target)/2 — count those subsets.",
        js: "function targetSumWays(nums, target) {\n  const total = nums.reduce((s, v) => s + v, 0);\n  if (Math.abs(target) > total || (total + target) % 2 !== 0) return 0;\n  const need = (total + target) / 2;\n  const dp = new Array(need + 1).fill(0);\n  dp[0] = 1;\n  for (const v of nums) {\n    for (let s = need; s >= v; s--) dp[s] += dp[s - v];\n  }\n  return dp[need];\n}\n",
        ts: "function targetSumWays(nums: number[], target: number): number {\n  const total = nums.reduce((s, v) => s + v, 0);\n  if (Math.abs(target) > total || (total + target) % 2 !== 0) return 0;\n  const need = (total + target) / 2;\n  const dp = new Array(need + 1).fill(0);\n  dp[0] = 1;\n  for (const v of nums) {\n    for (let s = need; s >= v; s--) dp[s] += dp[s - v];\n  }\n  return dp[need];\n}\n",
        commentedCode: {
          js: "function targetSumWays(nums, target) {\n  // If P is the positive subset, then 2 * sum(P) - total must equal target.\n  const total = nums.reduce((s, v) => s + v, 0);\n  // The target must be within range, and total + target must split evenly.\n  if (Math.abs(target) > total || (total + target) % 2 !== 0) return 0;\n  // Therefore the values assigned '+' must sum to this transformed target.\n  const need = (total + target) / 2;\n  // dp[s] counts subsets of processed values whose sum is s.\n  const dp = new Array(need + 1).fill(0);\n  // The empty subset is one way to make zero, including before processing zeros.\n  dp[0] = 1;\n  for (const v of nums) {\n    // Descend so each index is selected at most once; zero correctly doubles counts.\n    for (let s = need; s >= v; s--) dp[s] += dp[s - v];\n  }\n  // Each subset reaching need corresponds to one complete sign assignment.\n  return dp[need];\n}\n",
          ts: "function targetSumWays(nums: number[], target: number): number {\n  // If P is the positive subset, then 2 * sum(P) - total must equal target.\n  const total = nums.reduce((s, v) => s + v, 0);\n  // The target must be within range, and total + target must split evenly.\n  if (Math.abs(target) > total || (total + target) % 2 !== 0) return 0;\n  // Therefore the values assigned '+' must sum to this transformed target.\n  const need = (total + target) / 2;\n  // dp[s] counts subsets of processed values whose sum is s.\n  const dp = new Array(need + 1).fill(0);\n  // The empty subset is one way to make zero, including before processing zeros.\n  dp[0] = 1;\n  for (const v of nums) {\n    // Descend so each index is selected at most once; zero correctly doubles counts.\n    for (let s = need; s >= v; s--) dp[s] += dp[s - v];\n  }\n  // Each subset reaching need corresponds to one complete sign assignment.\n  return dp[need];\n}\n",
        },
        time: "O(n·sum)",
        space: "O(sum)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "d2-min-subset-diff",
    slug: "min-subset-sum-diff",
    title: "Minimum Subset Sum Difference",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Split the values into two subsets and return the smallest possible absolute difference between their sums.",
    examples: [
      { input: "[1,2,3,9]", output: "3" },
      { input: "[1,2,3,4,5]", output: "1" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= nums.length <= 200", "values are non-negative"],
    functionName: "minSubsetSumDiff",
    starter: {
      js: "function minSubsetSumDiff(nums) {\n  // Smallest achievable |sumA - sumB|.\n}\n",
      ts: "function minSubsetSumDiff(nums: number[]): number {\n  // Smallest achievable |sumA - sumB|.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 9]], expected: 3 },
      { args: [[1, 2, 3, 4, 5]], expected: 1 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[2, 2]], expected: 0 },
      { args: [[1, 2]], expected: 1 },
      { args: [[8, 8, 8]], expected: 8 },
      { args: [[1, 6, 11, 5]], expected: 1 },
      { args: [[5]], expected: 5 },
      { args: [[10, 20, 15, 5, 25]], expected: 5 },
    ],
    hints: [
      "Find which subset sums up to half are achievable.",
      "Take the achievable sum closest to total/2 — call it s; the difference is total - 2s.",
      "Reachable sums come straight from the subset-sum table.",
    ],
    solutions: [
      {
        label: "Subset-sum reachability",
        approach: "Mark all reachable subset sums, then pick the one nearest half.",
        js: "function minSubsetSumDiff(nums) {\n  const total = nums.reduce((s, v) => s + v, 0);\n  const half = Math.floor(total / 2);\n  const dp = new Array(half + 1).fill(false);\n  dp[0] = true;\n  for (const v of nums) {\n    for (let s = half; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  for (let s = half; s >= 0; s--) if (dp[s]) return total - 2 * s;\n  return total;\n}\n",
        ts: "function minSubsetSumDiff(nums: number[]): number {\n  const total = nums.reduce((s, v) => s + v, 0);\n  const half = Math.floor(total / 2);\n  const dp = new Array(half + 1).fill(false);\n  dp[0] = true;\n  for (const v of nums) {\n    for (let s = half; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  for (let s = half; s >= 0; s--) if (dp[s]) return total - 2 * s;\n  return total;\n}\n",
        commentedCode: {
          js: "function minSubsetSumDiff(nums) {\n  // If one subset sums to s, the other sums to total - s.\n  const total = nums.reduce((s, v) => s + v, 0);\n  // Only sums through half matter because the two subsets are interchangeable.\n  const half = Math.floor(total / 2);\n  // dp[s] marks whether a subset of processed values can make s.\n  const dp = new Array(half + 1).fill(false);\n  // The empty subset always reaches zero.\n  dp[0] = true;\n  for (const v of nums) {\n    // Descend so each value is used at most once in this subset.\n    for (let s = half; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  // The largest reachable s up to half minimizes total - 2s.\n  for (let s = half; s >= 0; s--) if (dp[s]) return total - 2 * s;\n  // This fallback is unreachable because dp[0] is always true.\n  return total;\n}\n",
          ts: "function minSubsetSumDiff(nums: number[]): number {\n  // If one subset sums to s, the other sums to total - s.\n  const total = nums.reduce((s, v) => s + v, 0);\n  // Only sums through half matter because the two subsets are interchangeable.\n  const half = Math.floor(total / 2);\n  // dp[s] marks whether a subset of processed values can make s.\n  const dp = new Array(half + 1).fill(false);\n  // The empty subset always reaches zero.\n  dp[0] = true;\n  for (const v of nums) {\n    // Descend so each value is used at most once in this subset.\n    for (let s = half; s >= v; s--) if (dp[s - v]) dp[s] = true;\n  }\n  // The largest reachable s up to half minimizes total - 2s.\n  for (let s = half; s >= 0; s--) if (dp[s]) return total - 2 * s;\n  // This fallback is unreachable because dp[0] is always true.\n  return total;\n}\n",
        },
        time: "O(n·sum)",
        space: "O(sum)",
      },
      {
        label: "Memoized closest half",
        approach: "Recurse over include/exclude, tracking the sum closest to half.",
        js: "function minSubsetSumDiff(nums) {\n  const total = nums.reduce((s, v) => s + v, 0);\n  const memo = new Map();\n  const go = (i, s) => {\n    if (i === nums.length) return Math.abs(total - 2 * s);\n    const key = i + ':' + s;\n    if (memo.has(key)) return memo.get(key);\n    const v = Math.min(go(i + 1, s + nums[i]), go(i + 1, s));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function minSubsetSumDiff(nums: number[]): number {\n  const total = nums.reduce((s, v) => s + v, 0);\n  const memo = new Map<string, number>();\n  const go = (i: number, s: number): number => {\n    if (i === nums.length) return Math.abs(total - 2 * s);\n    const key = i + ':' + s;\n    if (memo.has(key)) return memo.get(key) as number;\n    const v = Math.min(go(i + 1, s + nums[i]), go(i + 1, s));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        commentedCode: {
          js: "function minSubsetSumDiff(nums) {\n  // Choosing a subset sum s determines the other sum as total - s.\n  const total = nums.reduce((s, v) => s + v, 0);\n  // Cache the smallest final difference from each (index, chosen sum).\n  const memo = new Map();\n  const go = (i, s) => {\n    // Once all values are assigned, compare s with its complement total - s.\n    if (i === nums.length) return Math.abs(total - 2 * s);\n    const key = i + ':' + s;\n    if (memo.has(key)) return memo.get(key);\n    // Put nums[i] in the tracked subset or leave it in the complementary subset.\n    const v = Math.min(go(i + 1, s + nums[i]), go(i + 1, s));\n    // Keep the better difference from the two assignments.\n    memo.set(key, v);\n    return v;\n  };\n  // Begin with no values assigned to the tracked subset.\n  return go(0, 0);\n}\n",
          ts: "function minSubsetSumDiff(nums: number[]): number {\n  // Choosing a subset sum s determines the other sum as total - s.\n  const total = nums.reduce((s, v) => s + v, 0);\n  // Cache the smallest final difference from each (index, chosen sum).\n  const memo = new Map<string, number>();\n  const go = (i: number, s: number): number => {\n    // Once all values are assigned, compare s with its complement total - s.\n    if (i === nums.length) return Math.abs(total - 2 * s);\n    const key = i + ':' + s;\n    if (memo.has(key)) return memo.get(key) as number;\n    // Put nums[i] in the tracked subset or leave it in the complementary subset.\n    const v = Math.min(go(i + 1, s + nums[i]), go(i + 1, s));\n    // Keep the better difference from the two assignments.\n    memo.set(key, v);\n    return v;\n  };\n  // Begin with no values assigned to the tracked subset.\n  return go(0, 0);\n}\n",
        },
        time: "O(n·sum)",
        space: "O(n·sum)",
      },
    ],
  },
  {
    id: "d2-unbounded-knapsack",
    slug: "unbounded-knapsack",
    title: "Unbounded Knapsack",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given item `weights` and `values` and a `capacity`, return the maximum total value that fits when each item may be used **any number of times**.",
    examples: [
      { input: "[2,3], [5,8], 7", output: "18" },
      { input: "[], [], 5", output: "0" },
      { input: "[3], [10], 2", output: "0" },
    ],
    constraints: ["weights.length === values.length", "0 <= capacity <= 10000"],
    functionName: "unboundedKnapsack",
    starter: {
      js: "function unboundedKnapsack(weights, values, capacity) {\n  // Max value with unlimited copies of each item.\n}\n",
      ts: "function unboundedKnapsack(weights: number[], values: number[], capacity: number): number {\n  // Max value with unlimited copies of each item.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 3], [5, 8], 7], expected: 18 },
      { args: [[], [], 5], expected: 0 },
      { args: [[3], [10], 2], expected: 0 },
    ],
    hidden: [
      { args: [[1], [1], 5], expected: 5 },
      { args: [[2], [3], 5], expected: 6 },
      { args: [[1, 2], [1, 5], 4], expected: 10 },
      { args: [[3, 4], [7, 9], 10], expected: 23 },
      { args: [[5], [100], 4], expected: 0 },
      { args: [[1, 2, 3], [1, 1, 1], 6], expected: 6 },
    ],
    hints: [
      "Like 0/1 knapsack, but an item can be reused — so iterate capacity upward.",
      "dp[cap] = max over items of values[i] + dp[cap - weights[i]].",
      "The upward loop lets the same item contribute again within one pass.",
    ],
    solutions: [
      {
        label: "Tabulation (capacity upward)",
        approach: "Because copies are unlimited, sweep capacity low-to-high.",
        js: "function unboundedKnapsack(weights, values, capacity) {\n  const dp = new Array(capacity + 1).fill(0);\n  for (let cap = 1; cap <= capacity; cap++) {\n    for (let i = 0; i < weights.length; i++) {\n      if (weights[i] <= cap) dp[cap] = Math.max(dp[cap], values[i] + dp[cap - weights[i]]);\n    }\n  }\n  return dp[capacity];\n}\n",
        ts: "function unboundedKnapsack(weights: number[], values: number[], capacity: number): number {\n  const dp = new Array(capacity + 1).fill(0);\n  for (let cap = 1; cap <= capacity; cap++) {\n    for (let i = 0; i < weights.length; i++) {\n      if (weights[i] <= cap) dp[cap] = Math.max(dp[cap], values[i] + dp[cap - weights[i]]);\n    }\n  }\n  return dp[capacity];\n}\n",
        commentedCode: {
          js: "function unboundedKnapsack(weights, values, capacity) {\n  // dp[cap] is the greatest value achievable within that capacity.\n  const dp = new Array(capacity + 1).fill(0);\n  // Build low capacities first so a transition may reuse an item's earlier result.\n  for (let cap = 1; cap <= capacity; cap++) {\n    for (let i = 0; i < weights.length; i++) {\n      // If item i fits, append one copy to the best solution for the remainder.\n      if (weights[i] <= cap) dp[cap] = Math.max(dp[cap], values[i] + dp[cap - weights[i]]);\n    }\n  }\n  // The state for the full capacity is the unrestricted optimum.\n  return dp[capacity];\n}\n",
          ts: "function unboundedKnapsack(weights: number[], values: number[], capacity: number): number {\n  // dp[cap] is the greatest value achievable within that capacity.\n  const dp = new Array(capacity + 1).fill(0);\n  // Build low capacities first so a transition may reuse an item's earlier result.\n  for (let cap = 1; cap <= capacity; cap++) {\n    for (let i = 0; i < weights.length; i++) {\n      // If item i fits, append one copy to the best solution for the remainder.\n      if (weights[i] <= cap) dp[cap] = Math.max(dp[cap], values[i] + dp[cap - weights[i]]);\n    }\n  }\n  // The state for the full capacity is the unrestricted optimum.\n  return dp[capacity];\n}\n",
        },
        time: "O(n·capacity)",
        space: "O(capacity)",
      },
      {
        label: "Memoized recursion",
        approach: "From each capacity, try adding one more of any item.",
        js: "function unboundedKnapsack(weights, values, capacity) {\n  const memo = new Map();\n  const go = (cap) => {\n    if (cap <= 0) return 0;\n    if (memo.has(cap)) return memo.get(cap);\n    let best = 0;\n    for (let i = 0; i < weights.length; i++) {\n      if (weights[i] <= cap) best = Math.max(best, values[i] + go(cap - weights[i]));\n    }\n    memo.set(cap, best);\n    return best;\n  };\n  return go(capacity);\n}\n",
        ts: "function unboundedKnapsack(weights: number[], values: number[], capacity: number): number {\n  const memo = new Map<number, number>();\n  const go = (cap: number): number => {\n    if (cap <= 0) return 0;\n    if (memo.has(cap)) return memo.get(cap) as number;\n    let best = 0;\n    for (let i = 0; i < weights.length; i++) {\n      if (weights[i] <= cap) best = Math.max(best, values[i] + go(cap - weights[i]));\n    }\n    memo.set(cap, best);\n    return best;\n  };\n  return go(capacity);\n}\n",
        commentedCode: {
          js: "function unboundedKnapsack(weights, values, capacity) {\n  // Capacity alone identifies a state because every item remains reusable.\n  const memo = new Map();\n  const go = (cap) => {\n    // No positive capacity remains, so no additional value can fit.\n    if (cap <= 0) return 0;\n    if (memo.has(cap)) return memo.get(cap);\n    // Leaving capacity unused is valid, so the baseline value is zero.\n    let best = 0;\n    for (let i = 0; i < weights.length; i++) {\n      // Add one fitting copy, then solve the smaller capacity with all items again.\n      if (weights[i] <= cap) best = Math.max(best, values[i] + go(cap - weights[i]));\n    }\n    // Cache the best choice among every possible next item.\n    memo.set(cap, best);\n    return best;\n  };\n  // Solve with the entire requested capacity available.\n  return go(capacity);\n}\n",
          ts: "function unboundedKnapsack(weights: number[], values: number[], capacity: number): number {\n  // Capacity alone identifies a state because every item remains reusable.\n  const memo = new Map<number, number>();\n  const go = (cap: number): number => {\n    // No positive capacity remains, so no additional value can fit.\n    if (cap <= 0) return 0;\n    if (memo.has(cap)) return memo.get(cap) as number;\n    // Leaving capacity unused is valid, so the baseline value is zero.\n    let best = 0;\n    for (let i = 0; i < weights.length; i++) {\n      // Add one fitting copy, then solve the smaller capacity with all items again.\n      if (weights[i] <= cap) best = Math.max(best, values[i] + go(cap - weights[i]));\n    }\n    // Cache the best choice among every possible next item.\n    memo.set(cap, best);\n    return best;\n  };\n  // Solve with the entire requested capacity available.\n  return go(capacity);\n}\n",
        },
        time: "O(n·capacity)",
        space: "O(capacity)",
      },
    ],
  },
  {
    id: "d2-rod-cutting",
    slug: "rod-cutting",
    title: "Rod Cutting",
    difficulty: "medium",
    patternIds: P,
    statement:
      "`prices[i]` is the price of a rod piece of length `i + 1`. Given a rod of length equal to `prices.length`, return the maximum revenue from cutting it into pieces (any cuts, any counts).",
    examples: [
      { input: "[1,5,8,9]", output: "10" },
      { input: "[]", output: "0" },
      { input: "[3]", output: "3" },
    ],
    constraints: ["0 <= prices.length <= 1000", "prices are non-negative"],
    functionName: "rodCutting",
    starter: {
      js: "function rodCutting(prices) {\n  // Max revenue cutting a rod of length prices.length.\n}\n",
      ts: "function rodCutting(prices: number[]): number {\n  // Max revenue cutting a rod of length prices.length.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 5, 8, 9]], expected: 10 },
      { args: [[]], expected: 0 },
      { args: [[3]], expected: 3 },
    ],
    hidden: [
      { args: [[2]], expected: 2 },
      { args: [[1, 1, 1]], expected: 3 },
      { args: [[5, 1, 1]], expected: 15 },
      { args: [[1, 5, 8, 9, 10, 17, 17, 20]], expected: 22 },
      { args: [[3, 5]], expected: 6 },
      { args: [[2, 5, 7, 8]], expected: 10 },
    ],
    hints: [
      "A rod of length n can be cut into a first piece of length 1..n plus the best of the rest — that's unbounded knapsack.",
      "dp[len] = max over cut of prices[cut-1] + dp[len - cut].",
      "Sweep lengths upward.",
    ],
    solutions: [
      {
        label: "Tabulation",
        approach: "Best revenue for each rod length, trying every first-cut length.",
        js: "function rodCutting(prices) {\n  const n = prices.length;\n  const dp = new Array(n + 1).fill(0);\n  for (let len = 1; len <= n; len++) {\n    for (let cut = 1; cut <= len; cut++) dp[len] = Math.max(dp[len], prices[cut - 1] + dp[len - cut]);\n  }\n  return dp[n];\n}\n",
        ts: "function rodCutting(prices: number[]): number {\n  const n = prices.length;\n  const dp = new Array(n + 1).fill(0);\n  for (let len = 1; len <= n; len++) {\n    for (let cut = 1; cut <= len; cut++) dp[len] = Math.max(dp[len], prices[cut - 1] + dp[len - cut]);\n  }\n  return dp[n];\n}\n",
        commentedCode: {
          js: "function rodCutting(prices) {\n  // prices supplies one price for every possible piece length 1 through n.\n  const n = prices.length;\n  // dp[len] stores the maximum revenue for a rod of exactly len.\n  const dp = new Array(n + 1).fill(0);\n  for (let len = 1; len <= n; len++) {\n    // Choose the first piece, then append the already-optimal remaining rod.\n    for (let cut = 1; cut <= len; cut++) dp[len] = Math.max(dp[len], prices[cut - 1] + dp[len - cut]);\n  }\n  // Return the optimal decomposition of the original rod length.\n  return dp[n];\n}\n",
          ts: "function rodCutting(prices: number[]): number {\n  // prices supplies one price for every possible piece length 1 through n.\n  const n = prices.length;\n  // dp[len] stores the maximum revenue for a rod of exactly len.\n  const dp = new Array(n + 1).fill(0);\n  for (let len = 1; len <= n; len++) {\n    // Choose the first piece, then append the already-optimal remaining rod.\n    for (let cut = 1; cut <= len; cut++) dp[len] = Math.max(dp[len], prices[cut - 1] + dp[len - cut]);\n  }\n  // Return the optimal decomposition of the original rod length.\n  return dp[n];\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
      {
        label: "Memoized recursion",
        approach: "Recurse on the remaining rod length, trying each first cut.",
        js: "function rodCutting(prices) {\n  const n = prices.length;\n  const memo = new Map();\n  const go = (len) => {\n    if (len === 0) return 0;\n    if (memo.has(len)) return memo.get(len);\n    let best = 0;\n    for (let cut = 1; cut <= len; cut++) best = Math.max(best, prices[cut - 1] + go(len - cut));\n    memo.set(len, best);\n    return best;\n  };\n  return go(n);\n}\n",
        ts: "function rodCutting(prices: number[]): number {\n  const n = prices.length;\n  const memo = new Map<number, number>();\n  const go = (len: number): number => {\n    if (len === 0) return 0;\n    if (memo.has(len)) return memo.get(len) as number;\n    let best = 0;\n    for (let cut = 1; cut <= len; cut++) best = Math.max(best, prices[cut - 1] + go(len - cut));\n    memo.set(len, best);\n    return best;\n  };\n  return go(n);\n}\n",
        commentedCode: {
          js: "function rodCutting(prices) {\n  // The rod length equals the number of available piece-length prices.\n  const n = prices.length;\n  // Cache the best revenue for each remaining rod length.\n  const memo = new Map();\n  const go = (len) => {\n    // An empty remainder contributes no further revenue.\n    if (len === 0) return 0;\n    if (memo.has(len)) return memo.get(len);\n    // Try every possible first piece length.\n    let best = 0;\n    for (let cut = 1; cut <= len; cut++) best = Math.max(best, prices[cut - 1] + go(len - cut));\n    // Store the best first cut plus optimal remainder.\n    memo.set(len, best);\n    return best;\n  };\n  // Compute maximum revenue for the complete rod.\n  return go(n);\n}\n",
          ts: "function rodCutting(prices: number[]): number {\n  // The rod length equals the number of available piece-length prices.\n  const n = prices.length;\n  // Cache the best revenue for each remaining rod length.\n  const memo = new Map<number, number>();\n  const go = (len: number): number => {\n    // An empty remainder contributes no further revenue.\n    if (len === 0) return 0;\n    if (memo.has(len)) return memo.get(len) as number;\n    // Try every possible first piece length.\n    let best = 0;\n    for (let cut = 1; cut <= len; cut++) best = Math.max(best, prices[cut - 1] + go(len - cut));\n    // Store the best first cut plus optimal remainder.\n    memo.set(len, best);\n    return best;\n  };\n  // Compute maximum revenue for the complete rod.\n  return go(n);\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d2-perfect-squares",
    slug: "perfect-squares",
    title: "Perfect Squares",
    difficulty: "medium",
    patternIds: P,
    statement: "Return the fewest perfect squares (1, 4, 9, 16, …) that sum to `n`.",
    examples: [
      { input: "12", output: "3" },
      { input: "13", output: "2" },
      { input: "0", output: "0" },
    ],
    constraints: ["0 <= n <= 10000"],
    functionName: "perfectSquaresMin",
    starter: {
      js: "function perfectSquaresMin(n) {\n  // Fewest perfect squares summing to n.\n}\n",
      ts: "function perfectSquaresMin(n: number): number {\n  // Fewest perfect squares summing to n.\n  return 0;\n}\n",
    },
    visible: [
      { args: [12], expected: 3 },
      { args: [13], expected: 2 },
      { args: [0], expected: 0 },
    ],
    hidden: [
      { args: [1], expected: 1 },
      { args: [2], expected: 2 },
      { args: [3], expected: 3 },
      { args: [4], expected: 1 },
      { args: [7], expected: 4 },
      { args: [25], expected: 1 },
    ],
    hints: [
      "It's coin change where the 'coins' are the square numbers up to n.",
      "dp[a] = 1 + min over squares s ≤ a of dp[a - s].",
      "Seed dp[0] = 0.",
    ],
    solutions: [
      {
        label: "Tabulation",
        approach: "Fewest squares for each value from 0 to n.",
        js: "function perfectSquaresMin(n) {\n  const dp = new Array(n + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= n; a++) {\n    for (let s = 1; s * s <= a; s++) dp[a] = Math.min(dp[a], dp[a - s * s] + 1);\n  }\n  return dp[n];\n}\n",
        ts: "function perfectSquaresMin(n: number): number {\n  const dp = new Array(n + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= n; a++) {\n    for (let s = 1; s * s <= a; s++) dp[a] = Math.min(dp[a], dp[a - s * s] + 1);\n  }\n  return dp[n];\n}\n",
        commentedCode: {
          js: "function perfectSquaresMin(n) {\n  // dp[a] is the fewest square numbers needed to total a.\n  const dp = new Array(n + 1).fill(Infinity);\n  // Zero is formed by choosing no squares.\n  dp[0] = 0;\n  for (let a = 1; a <= n; a++) {\n    // Try each square no larger than a as the final summand.\n    for (let s = 1; s * s <= a; s++) dp[a] = Math.min(dp[a], dp[a - s * s] + 1);\n  }\n  // Earlier states guarantee a finite optimum because 1 is a square.\n  return dp[n];\n}\n",
          ts: "function perfectSquaresMin(n: number): number {\n  // dp[a] is the fewest square numbers needed to total a.\n  const dp = new Array(n + 1).fill(Infinity);\n  // Zero is formed by choosing no squares.\n  dp[0] = 0;\n  for (let a = 1; a <= n; a++) {\n    // Try each square no larger than a as the final summand.\n    for (let s = 1; s * s <= a; s++) dp[a] = Math.min(dp[a], dp[a - s * s] + 1);\n  }\n  // Earlier states guarantee a finite optimum because 1 is a square.\n  return dp[n];\n}\n",
        },
        time: "O(n·√n)",
        space: "O(n)",
      },
      {
        label: "Memoized recursion",
        approach: "Subtract each square and recurse on the remainder.",
        js: "function perfectSquaresMin(n) {\n  const memo = new Map();\n  const go = (rem) => {\n    if (rem === 0) return 0;\n    if (memo.has(rem)) return memo.get(rem);\n    let best = Infinity;\n    for (let s = 1; s * s <= rem; s++) best = Math.min(best, 1 + go(rem - s * s));\n    memo.set(rem, best);\n    return best;\n  };\n  return go(n);\n}\n",
        ts: "function perfectSquaresMin(n: number): number {\n  const memo = new Map<number, number>();\n  const go = (rem: number): number => {\n    if (rem === 0) return 0;\n    if (memo.has(rem)) return memo.get(rem) as number;\n    let best = Infinity;\n    for (let s = 1; s * s <= rem; s++) best = Math.min(best, 1 + go(rem - s * s));\n    memo.set(rem, best);\n    return best;\n  };\n  return go(n);\n}\n",
        commentedCode: {
          js: "function perfectSquaresMin(n) {\n  // Cache the minimum number of squares for each remaining value.\n  const memo = new Map();\n  const go = (rem) => {\n    // Exactly filling the total needs no additional square.\n    if (rem === 0) return 0;\n    if (memo.has(rem)) return memo.get(rem);\n    // Try every valid square as the next summand.\n    let best = Infinity;\n    for (let s = 1; s * s <= rem; s++) best = Math.min(best, 1 + go(rem - s * s));\n    // Remember the shortest decomposition of this remainder.\n    memo.set(rem, best);\n    return best;\n  };\n  // Decompose the original value.\n  return go(n);\n}\n",
          ts: "function perfectSquaresMin(n: number): number {\n  // Cache the minimum number of squares for each remaining value.\n  const memo = new Map<number, number>();\n  const go = (rem: number): number => {\n    // Exactly filling the total needs no additional square.\n    if (rem === 0) return 0;\n    if (memo.has(rem)) return memo.get(rem) as number;\n    // Try every valid square as the next summand.\n    let best = Infinity;\n    for (let s = 1; s * s <= rem; s++) best = Math.min(best, 1 + go(rem - s * s));\n    // Remember the shortest decomposition of this remainder.\n    memo.set(rem, best);\n    return best;\n  };\n  // Decompose the original value.\n  return go(n);\n}\n",
        },
        time: "O(n·√n)",
        space: "O(n)",
      },
    ],
  },
];

export const dp2Problems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const dp2Mcqs: QuizQuestion[] = [
  {
    id: "s6-d2-01-order",
    kind: "mcq",
    prompt: "In the 1-D 0/1 knapsack table, you iterate capacity from high to low so that:",
    options: [
      "the array stays sorted",
      "each item is used at most once per capacity",
      "it runs faster",
      "negative weights are handled",
    ],
    answerIndex: 1,
    explanation: "Going downward prevents an item's own updated entry from being reused within the same pass.",
  },
  {
    id: "s6-d2-unbounded-order",
    kind: "mcq",
    prompt: "For *unbounded* knapsack (unlimited copies), you instead iterate capacity from low to high because:",
    options: [
      "it prevents any reuse",
      "it deliberately allows an item to be reused within the same pass",
      "the answer would otherwise be negative",
      "it saves memory",
    ],
    answerIndex: 1,
    explanation: "Sweeping upward lets dp[cap - weight] already include the same item, enabling reuse.",
  },
];

export const dp2Module: Module = {
  id: "m-pat-dp-knapsack",
  stageId: S,
  title: "Dynamic Programming II — Knapsack",
  kind: "patternModule",
  summary: "Choosing items under a capacity: 0/1 vs unbounded, feasibility, counting, and minimisation.",
  lessonSections: [
    {
      heading: "Take it or leave it",
      body: `The knapsack family asks which items to choose to optimise a total under a budget. The core state is *"the best achievable using the first i items and capacity c"*. The single most important distinction is how many times each item may be used:

- **0/1 knapsack** — each item at most once. In the 1-D table, iterate capacity **downward**.
- **Unbounded knapsack** — unlimited copies. Iterate capacity **upward** so an item can contribute again in the same pass.

\`\`\`js
// 0/1: each weight/value used once
function knap01(w, v, cap) {
  const dp = new Array(cap + 1).fill(0);
  for (let i = 0; i < w.length; i++)
    for (let c = cap; c >= w[i]; c--)          // downward!
      dp[c] = Math.max(dp[c], v[i] + dp[c - w[i]]);
  return dp[cap];
}
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for a knapsack DP when items combine under a numeric budget:

- **feasibility** — "can a subset reach this sum?" (subset sum, equal partition),
- **optimisation** — "max value within capacity" (0/1 and unbounded knapsack, rod cutting),
- **counting** — "how many ways to make this amount?" (coin change ways, target sum),
- **minimisation** — "fewest coins / squares" (coin change min, perfect squares),
- balancing two groups (minimum subset-sum difference).`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Counting combinations (order-independent): coin loop OUTSIDE
const dp = new Array(amount + 1).fill(0);
dp[0] = 1;
for (const c of coins) for (let a = c; a <= amount; a++) dp[a] += dp[a - c];

// Counting orderings (permutations): amount loop outside, coin inside
\`\`\`

**Pitfalls:** the loop **order** is the whole game — downward for 0/1, upward for unbounded, and coin-outside vs amount-outside decides combinations vs permutations; seed \`dp[0]\` correctly (\`true\`/\`1\`/\`0\` depending on feasibility/count/min); and watch for impossible amounts (\`Infinity\` → return -1). Each drill ships a memoized *and* a tabulated solution. Work them easy to hard.`,
    },
  ],
  guidedExampleProblemId: "d2-subset-sum",
  drillProblemIds: [
    "d2-subset-sum",
    "d2-can-partition",
    "d2-knapsack-01",
    "d2-coin-change-min",
    "d2-coin-change-ways",
    "d2-target-sum",
  ],
  testPoolProblemIds: [
    "d2-min-subset-diff",
    "d2-unbounded-knapsack",
    "d2-rod-cutting",
    "d2-perfect-squares",
  ],
  complexityQuestionIds: ["s6-d2-01-order", "s6-d2-unbounded-order"],
  badgeId: "badge-pat-dp-knapsack",
  prerequisiteModuleIds: ["m-pat-dp-1d"],
};
