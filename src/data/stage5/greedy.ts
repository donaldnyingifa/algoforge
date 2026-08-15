import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s5";
const P = ["greedy"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "gr-max-coins",
    slug: "max-coins-value",
    title: "Fewest Coins Given",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Using unlimited coins of value 1, 5, 10, and 25, return the fewest coins that sum to `amount`.",
    examples: [
      { input: "30", output: "2" },
      { input: "0", output: "0" },
      { input: "6", output: "2" },
    ],
    constraints: ["0 <= amount <= 1000000"],
    functionName: "fewestCoins",
    starter: {
      js: "function fewestCoins(amount) {\n  // Fewest 1/5/10/25 coins summing to amount.\n}\n",
      ts: "function fewestCoins(amount: number): number {\n  // Fewest 1/5/10/25 coins summing to amount.\n  return 0;\n}\n",
    },
    visible: [
      { args: [30], expected: 2 },
      { args: [0], expected: 0 },
      { args: [6], expected: 2 },
    ],
    hidden: [
      { args: [25], expected: 1 },
      { args: [11], expected: 2 },
      { args: [99], expected: 9 },
      { args: [40], expected: 3 },
      { args: [1], expected: 1 },
      { args: [63], expected: 6 },
    ],
    hints: [
      "Because these denominations are 'canonical', taking the biggest coin that fits is always optimal.",
      "Use as many 25s as possible, then 10s, then 5s, then 1s.",
      "Add up how many of each you used.",
    ],
    solutions: [
      {
        label: "Take the largest coin first",
        approach: "Greedily spend the biggest denomination that still fits.",
        js: "function fewestCoins(amount) {\n  let count = 0;\n  for (const coin of [25, 10, 5, 1]) {\n    count += Math.floor(amount / coin);\n    amount %= coin;\n  }\n  return count;\n}\n",
        ts: "function fewestCoins(amount: number): number {\n  let count = 0;\n  for (const coin of [25, 10, 5, 1]) {\n    count += Math.floor(amount / coin);\n    amount %= coin;\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function fewestCoins(amount) {\n  // Accumulate the number of coins selected across all denominations.\n  let count = 0;\n  // Try canonical US coins from largest to smallest so every choice is locally optimal.\n  for (const coin of [25, 10, 5, 1]) {\n    // Take every whole coin of this denomination that fits in the remaining amount.\n    count += Math.floor(amount / coin);\n    // Carry only the unpaid remainder to the next, smaller denomination.\n    amount %= coin;\n  }\n  // The denomination 1 guarantees that the full amount was represented.\n  return count;\n}\n",
          ts: "function fewestCoins(amount: number): number {\n  // Accumulate the number of coins selected across all denominations.\n  let count = 0;\n  // Try canonical US coins from largest to smallest so every choice is locally optimal.\n  for (const coin of [25, 10, 5, 1]) {\n    // Take every whole coin of this denomination that fits in the remaining amount.\n    count += Math.floor(amount / coin);\n    // Carry only the unpaid remainder to the next, smaller denomination.\n    amount %= coin;\n  }\n  // The denomination 1 guarantees that the full amount was represented.\n  return count;\n}\n",
        },
        time: "O(1)",
        space: "O(1)",
      },
      {
        label: "Dynamic programming (general)",
        approach: "Build the fewest-coins table bottom-up — works for any denominations.",
        js: "function fewestCoins(amount) {\n  const coins = [1, 5, 10, 25];\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  return dp[amount];\n}\n",
        ts: "function fewestCoins(amount: number): number {\n  const coins = [1, 5, 10, 25];\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  return dp[amount];\n}\n",
        commentedCode: {
          js: "function fewestCoins(amount) {\n  // These denominations can be changed; the dynamic program remains correct.\n  const coins = [1, 5, 10, 25];\n  // dp[a] stores the fewest coins known for forming amount a.\n  const dp = new Array(amount + 1).fill(Infinity);\n  // Forming zero requires no coins and anchors all later transitions.\n  dp[0] = 0;\n  // Solve every smaller amount before the larger amounts that depend on it.\n  for (let a = 1; a <= amount; a++) {\n    // Append each coin that fits, keeping the best predecessor plus that coin.\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  // The final table entry is the optimum for the requested amount.\n  return dp[amount];\n}\n",
          ts: "function fewestCoins(amount: number): number {\n  // These denominations can be changed; the dynamic program remains correct.\n  const coins = [1, 5, 10, 25];\n  // dp[a] stores the fewest coins known for forming amount a.\n  const dp = new Array(amount + 1).fill(Infinity);\n  // Forming zero requires no coins and anchors all later transitions.\n  dp[0] = 0;\n  // Solve every smaller amount before the larger amounts that depend on it.\n  for (let a = 1; a <= amount; a++) {\n    // Append each coin that fits, keeping the best predecessor plus that coin.\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  // The final table entry is the optimum for the requested amount.\n  return dp[amount];\n}\n",
        },
        time: "O(amount)",
        space: "O(amount)",
      },
    ],
  },
  {
    id: "gr-max-units",
    slug: "max-units-truck",
    title: "Maximum Units on a Truck",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Each box is `[count, unitsPerBox]`. A truck holds at most `capacity` boxes. Return the most units you can load by choosing boxes freely.",
    examples: [
      { input: "[[1,3],[2,2],[3,1]], 4", output: "8" },
      { input: "[[5,10]], 2", output: "20" },
      { input: "[], 5", output: "0" },
    ],
    constraints: ["0 <= capacity", "counts and units are non-negative"],
    functionName: "maxUnits",
    starter: {
      js: "function maxUnits(boxes, capacity) {\n  // Most units within the box capacity.\n}\n",
      ts: "function maxUnits(boxes: number[][], capacity: number): number {\n  // Most units within the box capacity.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 3], [2, 2], [3, 1]], 4], expected: 8 },
      { args: [[[5, 10]], 2], expected: 20 },
      { args: [[], 5], expected: 0 },
    ],
    hidden: [
      { args: [[[1, 3], [2, 2], [3, 1]], 0], expected: 0 },
      { args: [[[2, 5], [3, 8], [1, 4]], 4], expected: 29 },
      { args: [[[1, 1]], 10], expected: 1 },
      { args: [[[4, 2], [4, 3]], 5], expected: 14 },
      { args: [[[10, 1]], 3], expected: 3 },
      { args: [[[2, 2], [2, 2]], 3], expected: 6 },
    ],
    hints: [
      "Load the boxes with the most units per box first.",
      "Sort boxes by units descending, then take from each until the truck is full.",
      "Only part of a box type may fit at the end.",
    ],
    solutions: [
      {
        label: "Sort by units, take greedily",
        approach: "Fill with the richest boxes first until capacity runs out.",
        js: "function maxUnits(boxes, capacity) {\n  const sorted = [...boxes].sort((a, b) => b[1] - a[1]);\n  let units = 0, room = capacity;\n  for (const [count, per] of sorted) {\n    if (room <= 0) break;\n    const take = Math.min(count, room);\n    units += take * per;\n    room -= take;\n  }\n  return units;\n}\n",
        ts: "function maxUnits(boxes: number[][], capacity: number): number {\n  const sorted = [...boxes].sort((a, b) => b[1] - a[1]);\n  let units = 0, room = capacity;\n  for (const [count, per] of sorted) {\n    if (room <= 0) break;\n    const take = Math.min(count, room);\n    units += take * per;\n    room -= take;\n  }\n  return units;\n}\n",
        commentedCode: {
          js: "function maxUnits(boxes, capacity) {\n  // Work on a copy ordered by value per box, richest type first.\n  const sorted = [...boxes].sort((a, b) => b[1] - a[1]);\n  // Track both the collected units and the truck's unfilled box slots.\n  let units = 0, room = capacity;\n  for (const [count, per] of sorted) {\n    // No later box type can be loaded once every slot is occupied.\n    if (room <= 0) break;\n    // Load this type up to its supply or the remaining capacity.\n    const take = Math.min(count, room);\n    // Each selected box contributes its units-per-box value.\n    units += take * per;\n    // Remove the selected boxes from the truck's available slots.\n    room -= take;\n  }\n  return units;\n}\n",
          ts: "function maxUnits(boxes: number[][], capacity: number): number {\n  // Work on a copy ordered by value per box, richest type first.\n  const sorted = [...boxes].sort((a, b) => b[1] - a[1]);\n  // Track both the collected units and the truck's unfilled box slots.\n  let units = 0, room = capacity;\n  for (const [count, per] of sorted) {\n    // No later box type can be loaded once every slot is occupied.\n    if (room <= 0) break;\n    // Load this type up to its supply or the remaining capacity.\n    const take = Math.min(count, room);\n    // Each selected box contributes its units-per-box value.\n    units += take * per;\n    // Remove the selected boxes from the truck's available slots.\n    room -= take;\n  }\n  return units;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Expand then take the top",
        approach: "List each box's unit value, sort descending, and sum the first `capacity`.",
        js: "function maxUnits(boxes, capacity) {\n  const all = [];\n  for (const [count, per] of boxes) for (let i = 0; i < count; i++) all.push(per);\n  all.sort((a, b) => b - a);\n  let units = 0;\n  for (let i = 0; i < capacity && i < all.length; i++) units += all[i];\n  return units;\n}\n",
        ts: "function maxUnits(boxes: number[][], capacity: number): number {\n  const all: number[] = [];\n  for (const [count, per] of boxes) for (let i = 0; i < count; i++) all.push(per);\n  all.sort((a, b) => b - a);\n  let units = 0;\n  for (let i = 0; i < capacity && i < all.length; i++) units += all[i];\n  return units;\n}\n",
        commentedCode: {
          js: "function maxUnits(boxes, capacity) {\n  // Expand each box type into the unit value of every individual box.\n  const all = [];\n  for (const [count, per] of boxes) for (let i = 0; i < count; i++) all.push(per);\n  // Put the most valuable individual boxes at the front.\n  all.sort((a, b) => b - a);\n  let units = 0;\n  // Sum as many top values as the truck can hold and the supply provides.\n  for (let i = 0; i < capacity && i < all.length; i++) units += all[i];\n  return units;\n}\n",
          ts: "function maxUnits(boxes: number[][], capacity: number): number {\n  // Expand each box type into the unit value of every individual box.\n  const all: number[] = [];\n  for (const [count, per] of boxes) for (let i = 0; i < count; i++) all.push(per);\n  // Put the most valuable individual boxes at the front.\n  all.sort((a, b) => b - a);\n  let units = 0;\n  // Sum as many top values as the truck can hold and the supply provides.\n  for (let i = 0; i < capacity && i < all.length; i++) units += all[i];\n  return units;\n}\n",
        },
        time: "O(m log m)",
        space: "O(m)",
      },
    ],
  },
  {
    id: "gr-jump-game",
    slug: "jump-game-reachable",
    title: "Jump Game",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each value is the maximum jump length from that position. Starting at index 0, return `true` if you can reach the last index.",
    examples: [
      { input: "[2,3,1,1,4]", output: "true" },
      { input: "[3,2,1,0,4]", output: "false" },
      { input: "[0]", output: "true" },
    ],
    constraints: ["1 <= nums.length <= 10000", "values are non-negative"],
    functionName: "canJump",
    starter: {
      js: "function canJump(nums) {\n  // True if the last index is reachable.\n}\n",
      ts: "function canJump(nums: number[]): boolean {\n  // True if the last index is reachable.\n  return false;\n}\n",
    },
    visible: [
      { args: [[2, 3, 1, 1, 4]], expected: true },
      { args: [[3, 2, 1, 0, 4]], expected: false },
      { args: [[0]], expected: true },
    ],
    hidden: [
      { args: [[1, 0]], expected: true },
      { args: [[0, 1]], expected: false },
      { args: [[2, 0, 0]], expected: true },
      { args: [[1, 1, 1, 0]], expected: true },
      { args: [[5, 0, 0, 0, 0]], expected: true },
      { args: [[1, 2, 0, 0, 4]], expected: false },
    ],
    hints: [
      "Track the furthest index you can currently reach.",
      "If you ever stand beyond that reach, you're stuck.",
      "Otherwise extend the reach by i + nums[i] as you scan.",
    ],
    solutions: [
      {
        label: "Track the furthest reach",
        approach: "Sweep left to right, extending the maximum reachable index.",
        js: "function canJump(nums) {\n  let reach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > reach) return false;\n    reach = Math.max(reach, i + nums[i]);\n  }\n  return true;\n}\n",
        ts: "function canJump(nums: number[]): boolean {\n  let reach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > reach) return false;\n    reach = Math.max(reach, i + nums[i]);\n  }\n  return true;\n}\n",
        commentedCode: {
          js: "function canJump(nums) {\n  // reach is the furthest index attainable from every position scanned so far.\n  let reach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // If this index lies past reach, no earlier jump can get us here.\n    if (i > reach) return false;\n    // From a reachable index, extend the frontier with its longest jump.\n    reach = Math.max(reach, i + nums[i]);\n  }\n  // Every scanned index was reachable, including the final one.\n  return true;\n}\n",
          ts: "function canJump(nums: number[]): boolean {\n  // reach is the furthest index attainable from every position scanned so far.\n  let reach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // If this index lies past reach, no earlier jump can get us here.\n    if (i > reach) return false;\n    // From a reachable index, extend the frontier with its longest jump.\n    reach = Math.max(reach, i + nums[i]);\n  }\n  // Every scanned index was reachable, including the final one.\n  return true;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Work backwards to a goal",
        approach: "Move the goal left whenever a position can reach it.",
        js: "function canJump(nums) {\n  let goal = nums.length - 1;\n  for (let i = nums.length - 2; i >= 0; i--) {\n    if (i + nums[i] >= goal) goal = i;\n  }\n  return goal === 0;\n}\n",
        ts: "function canJump(nums: number[]): boolean {\n  let goal = nums.length - 1;\n  for (let i = nums.length - 2; i >= 0; i--) {\n    if (i + nums[i] >= goal) goal = i;\n  }\n  return goal === 0;\n}\n",
        commentedCode: {
          js: "function canJump(nums) {\n  // The last index is the first position that must be reachable.\n  let goal = nums.length - 1;\n  // Search backward for progressively earlier positions that can reach the goal.\n  for (let i = nums.length - 2; i >= 0; i--) {\n    // This position becomes the new goal when one jump reaches the old goal.\n    if (i + nums[i] >= goal) goal = i;\n  }\n  // Index zero can reach the end exactly when the goal moved all the way back.\n  return goal === 0;\n}\n",
          ts: "function canJump(nums: number[]): boolean {\n  // The last index is the first position that must be reachable.\n  let goal = nums.length - 1;\n  // Search backward for progressively earlier positions that can reach the goal.\n  for (let i = nums.length - 2; i >= 0; i--) {\n    // This position becomes the new goal when one jump reaches the old goal.\n    if (i + nums[i] >= goal) goal = i;\n  }\n  // Index zero can reach the end exactly when the goal moved all the way back.\n  return goal === 0;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "gr-min-jumps",
    slug: "min-jumps",
    title: "Minimum Jumps",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each value is the maximum jump length from that position. Return the fewest jumps needed to reach the last index (assume it is always reachable). A single-element list needs 0 jumps.",
    examples: [
      { input: "[2,3,1,1,4]", output: "2" },
      { input: "[1,1,1,1]", output: "3" },
      { input: "[0]", output: "0" },
    ],
    constraints: ["1 <= nums.length <= 10000", "the end is always reachable"],
    functionName: "minJumps",
    starter: {
      js: "function minJumps(nums) {\n  // Fewest jumps to the last index.\n}\n",
      ts: "function minJumps(nums: number[]): number {\n  // Fewest jumps to the last index.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 3, 1, 1, 4]], expected: 2 },
      { args: [[1, 1, 1, 1]], expected: 3 },
      { args: [[0]], expected: 0 },
    ],
    hidden: [
      { args: [[1, 2]], expected: 1 },
      { args: [[2, 1]], expected: 1 },
      { args: [[3, 1, 1, 1]], expected: 1 },
      { args: [[1, 1, 1, 1, 1]], expected: 4 },
      { args: [[5, 1, 1, 1, 1]], expected: 1 },
      { args: [[2, 3, 0, 1, 4]], expected: 2 },
    ],
    hints: [
      "Think in 'levels': the set of indices reachable with exactly j jumps.",
      "Extend the current level's boundary to the furthest index it can reach.",
      "When you pass the current boundary, you've spent one more jump.",
    ],
    solutions: [
      {
        label: "Greedy level expansion",
        approach: "Count a jump each time you exhaust the current reachable window.",
        js: "function minJumps(nums) {\n  let jumps = 0, curEnd = 0, farthest = 0;\n  for (let i = 0; i < nums.length - 1; i++) {\n    farthest = Math.max(farthest, i + nums[i]);\n    if (i === curEnd) { jumps++; curEnd = farthest; }\n  }\n  return jumps;\n}\n",
        ts: "function minJumps(nums: number[]): number {\n  let jumps = 0, curEnd = 0, farthest = 0;\n  for (let i = 0; i < nums.length - 1; i++) {\n    farthest = Math.max(farthest, i + nums[i]);\n    if (i === curEnd) { jumps++; curEnd = farthest; }\n  }\n  return jumps;\n}\n",
        commentedCode: {
          js: "function minJumps(nums) {\n  // curEnd bounds the current jump layer; farthest builds the next layer.\n  let jumps = 0, curEnd = 0, farthest = 0;\n  // The last index never needs to launch another jump.\n  for (let i = 0; i < nums.length - 1; i++) {\n    // Include every destination reachable from this position in the next layer.\n    farthest = Math.max(farthest, i + nums[i]);\n    // Finishing the current layer commits one jump and opens the next layer.\n    if (i === curEnd) { jumps++; curEnd = farthest; }\n  }\n  return jumps;\n}\n",
          ts: "function minJumps(nums: number[]): number {\n  // curEnd bounds the current jump layer; farthest builds the next layer.\n  let jumps = 0, curEnd = 0, farthest = 0;\n  // The last index never needs to launch another jump.\n  for (let i = 0; i < nums.length - 1; i++) {\n    // Include every destination reachable from this position in the next layer.\n    farthest = Math.max(farthest, i + nums[i]);\n    // Finishing the current layer commits one jump and opens the next layer.\n    if (i === curEnd) { jumps++; curEnd = farthest; }\n  }\n  return jumps;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Shortest-path table",
        approach: "Relax reachable positions left to right, keeping the fewest jumps to each.",
        js: "function minJumps(nums) {\n  const n = nums.length;\n  const dp = new Array(n).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 1; j <= nums[i] && i + j < n; j++) {\n      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);\n    }\n  }\n  return dp[n - 1];\n}\n",
        ts: "function minJumps(nums: number[]): number {\n  const n = nums.length;\n  const dp = new Array(n).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 1; j <= nums[i] && i + j < n; j++) {\n      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);\n    }\n  }\n  return dp[n - 1];\n}\n",
        commentedCode: {
          js: "function minJumps(nums) {\n  const n = nums.length;\n  // dp[i] is the fewest jumps needed to land on index i.\n  const dp = new Array(n).fill(Infinity);\n  // We begin on index zero without spending a jump.\n  dp[0] = 0;\n  // Relax every forward landing reachable from each source index.\n  for (let i = 0; i < n; i++) {\n    for (let j = 1; j <= nums[i] && i + j < n; j++) {\n      // Reaching i + j from i costs exactly one additional jump.\n      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);\n    }\n  }\n  return dp[n - 1];\n}\n",
          ts: "function minJumps(nums: number[]): number {\n  const n = nums.length;\n  // dp[i] is the fewest jumps needed to land on index i.\n  const dp = new Array(n).fill(Infinity);\n  // We begin on index zero without spending a jump.\n  dp[0] = 0;\n  // Relax every forward landing reachable from each source index.\n  for (let i = 0; i < n; i++) {\n    for (let j = 1; j <= nums[i] && i + j < n; j++) {\n      // Reaching i + j from i costs exactly one additional jump.\n      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);\n    }\n  }\n  return dp[n - 1];\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "gr-non-overlapping",
    slug: "non-overlapping-intervals",
    title: "Remove to Make Non-Overlapping",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each interval is `[start, end]`. Return the fewest intervals you must remove so that none of the remaining ones overlap. Intervals that only touch at an endpoint do not overlap.",
    examples: [
      { input: "[[1,2],[2,3],[3,4],[1,3]]", output: "1" },
      { input: "[[1,2],[1,2],[1,2]]", output: "2" },
      { input: "[[1,2],[2,3]]", output: "0" },
    ],
    constraints: ["0 <= intervals.length <= 10000"],
    functionName: "eraseOverlapCount",
    starter: {
      js: "function eraseOverlapCount(intervals) {\n  // Fewest removals to leave no overlaps.\n}\n",
      ts: "function eraseOverlapCount(intervals: number[][]): number {\n  // Fewest removals to leave no overlaps.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 2], [2, 3], [3, 4], [1, 3]]], expected: 1 },
      { args: [[[1, 2], [1, 2], [1, 2]]], expected: 2 },
      { args: [[[1, 2], [2, 3]]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[[1, 2]]], expected: 0 },
      { args: [[[1, 10], [2, 3], [3, 4]]], expected: 1 },
      { args: [[[1, 100], [11, 22], [1, 11], [2, 12]]], expected: 2 },
      { args: [[[1, 2], [3, 4], [5, 6]]], expected: 0 },
      { args: [[[0, 2], [1, 3], [2, 4], [3, 5]]], expected: 2 },
    ],
    hints: [
      "Keep as many intervals as possible — then removals are the rest.",
      "Sort by end time and always keep the interval that finishes earliest.",
      "Discard any interval that starts before the last kept one ends.",
    ],
    solutions: [
      {
        label: "Sort by end, keep earliest finishers",
        approach: "Greedily retain non-overlapping intervals; removals are what's left.",
        js: "function eraseOverlapCount(intervals) {\n  if (intervals.length === 0) return 0;\n  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);\n  let kept = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] >= end) { kept++; end = sorted[i][1]; }\n  }\n  return intervals.length - kept;\n}\n",
        ts: "function eraseOverlapCount(intervals: number[][]): number {\n  if (intervals.length === 0) return 0;\n  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);\n  let kept = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] >= end) { kept++; end = sorted[i][1]; }\n  }\n  return intervals.length - kept;\n}\n",
        commentedCode: {
          js: "function eraseOverlapCount(intervals) {\n  // An empty schedule already has no conflicts.\n  if (intervals.length === 0) return 0;\n  // Finishing earliest leaves the most room for every later interval.\n  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);\n  // Keep the first interval and remember when the accepted schedule ends.\n  let kept = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // A touching or later start is compatible, so accept it and advance the end.\n    if (sorted[i][0] >= end) { kept++; end = sorted[i][1]; }\n  }\n  // Every interval not accepted by the maximum-size schedule must be removed.\n  return intervals.length - kept;\n}\n",
          ts: "function eraseOverlapCount(intervals: number[][]): number {\n  // An empty schedule already has no conflicts.\n  if (intervals.length === 0) return 0;\n  // Finishing earliest leaves the most room for every later interval.\n  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);\n  // Keep the first interval and remember when the accepted schedule ends.\n  let kept = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // A touching or later start is compatible, so accept it and advance the end.\n    if (sorted[i][0] >= end) { kept++; end = sorted[i][1]; }\n  }\n  // Every interval not accepted by the maximum-size schedule must be removed.\n  return intervals.length - kept;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Sort by start, drop the longer conflict",
        approach: "On overlap, remove the interval that ends later.",
        js: "function eraseOverlapCount(intervals) {\n  if (intervals.length === 0) return 0;\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  let removed = 0, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] < end) { removed++; end = Math.min(end, sorted[i][1]); }\n    else end = sorted[i][1];\n  }\n  return removed;\n}\n",
        ts: "function eraseOverlapCount(intervals: number[][]): number {\n  if (intervals.length === 0) return 0;\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  let removed = 0, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] < end) { removed++; end = Math.min(end, sorted[i][1]); }\n    else end = sorted[i][1];\n  }\n  return removed;\n}\n",
        commentedCode: {
          js: "function eraseOverlapCount(intervals) {\n  // No interval means there is nothing to remove.\n  if (intervals.length === 0) return 0;\n  // Start order lets each interval be compared with the surviving prior end.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Treat the first interval as the current survivor.\n  let removed = 0, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // On conflict, remove one and retain the earlier end for maximum future room.\n    if (sorted[i][0] < end) { removed++; end = Math.min(end, sorted[i][1]); }\n    // Without a conflict, the current interval becomes the new survivor.\n    else end = sorted[i][1];\n  }\n  return removed;\n}\n",
          ts: "function eraseOverlapCount(intervals: number[][]): number {\n  // No interval means there is nothing to remove.\n  if (intervals.length === 0) return 0;\n  // Start order lets each interval be compared with the surviving prior end.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Treat the first interval as the current survivor.\n  let removed = 0, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // On conflict, remove one and retain the earlier end for maximum future room.\n    if (sorted[i][0] < end) { removed++; end = Math.min(end, sorted[i][1]); }\n    // Without a conflict, the current interval becomes the new survivor.\n    else end = sorted[i][1];\n  }\n  return removed;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "gr-gas-station",
    slug: "gas-station",
    title: "Gas Station",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Around a circular route, `gas[i]` is the fuel at station `i` and `cost[i]` is the fuel needed to reach the next station. Starting empty, return the index to begin from to complete the loop, or -1 if impossible. If several starts work, return the smallest index.",
    examples: [
      { input: "[1,2,3,4,5], [3,4,5,1,2]", output: "3" },
      { input: "[2,3,4], [3,4,3]", output: "-1" },
      { input: "[5], [4]", output: "0" },
    ],
    constraints: ["gas and cost have the same length", "1 <= length <= 10000"],
    functionName: "gasStation",
    starter: {
      js: "function gasStation(gas, cost) {\n  // Starting index to complete the loop, or -1.\n}\n",
      ts: "function gasStation(gas: number[], cost: number[]): number {\n  // Starting index to complete the loop, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2]], expected: 3 },
      { args: [[2, 3, 4], [3, 4, 3]], expected: -1 },
      { args: [[5], [4]], expected: 0 },
    ],
    hidden: [
      { args: [[1], [2]], expected: -1 },
      { args: [[2, 2], [1, 1]], expected: 0 },
      { args: [[3, 1, 1], [1, 2, 2]], expected: 0 },
      { args: [[1, 2, 3], [3, 2, 1]], expected: 1 },
      { args: [[4, 5, 2, 6, 5, 3], [3, 2, 7, 3, 2, 9]], expected: -1 },
      { args: [[5, 1, 2, 3, 4], [4, 4, 1, 5, 1]], expected: 4 },
    ],
    hints: [
      "If the total gas is less than the total cost, no start can work.",
      "Track the running tank from a candidate start; if it goes negative, that whole stretch fails.",
      "When the tank dips below zero, the next station becomes the new candidate start.",
    ],
    solutions: [
      {
        label: "Single greedy pass",
        approach: "Reset the start whenever the running tank goes negative.",
        js: "function gasStation(gas, cost) {\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    const diff = gas[i] - cost[i];\n    total += diff;\n    tank += diff;\n    if (tank < 0) { start = i + 1; tank = 0; }\n  }\n  return total >= 0 ? start : -1;\n}\n",
        ts: "function gasStation(gas: number[], cost: number[]): number {\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    const diff = gas[i] - cost[i];\n    total += diff;\n    tank += diff;\n    if (tank < 0) { start = i + 1; tank = 0; }\n  }\n  return total >= 0 ? start : -1;\n}\n",
        commentedCode: {
          js: "function gasStation(gas, cost) {\n  // total checks global feasibility; tank checks the current candidate start.\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    // This station's net fuel is what remains after driving to the next one.\n    const diff = gas[i] - cost[i];\n    // Accumulate the route-wide surplus or deficit.\n    total += diff;\n    // Also extend the fuel balance of the current candidate journey.\n    tank += diff;\n    // A negative tank proves this candidate and every intervening start fail here.\n    if (tank < 0) { start = i + 1; tank = 0; }\n  }\n  // A nonnegative total makes the final candidate viable; otherwise none exists.\n  return total >= 0 ? start : -1;\n}\n",
          ts: "function gasStation(gas: number[], cost: number[]): number {\n  // total checks global feasibility; tank checks the current candidate start.\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    // This station's net fuel is what remains after driving to the next one.\n    const diff = gas[i] - cost[i];\n    // Accumulate the route-wide surplus or deficit.\n    total += diff;\n    // Also extend the fuel balance of the current candidate journey.\n    tank += diff;\n    // A negative tank proves this candidate and every intervening start fail here.\n    if (tank < 0) { start = i + 1; tank = 0; }\n  }\n  // A nonnegative total makes the final candidate viable; otherwise none exists.\n  return total >= 0 ? start : -1;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Try each start",
        approach: "Simulate the full loop from every station until one succeeds.",
        js: "function gasStation(gas, cost) {\n  const n = gas.length;\n  for (let start = 0; start < n; start++) {\n    let tank = 0, ok = true;\n    for (let step = 0; step < n; step++) {\n      const i = (start + step) % n;\n      tank += gas[i] - cost[i];\n      if (tank < 0) { ok = false; break; }\n    }\n    if (ok) return start;\n  }\n  return -1;\n}\n",
        ts: "function gasStation(gas: number[], cost: number[]): number {\n  const n = gas.length;\n  for (let start = 0; start < n; start++) {\n    let tank = 0, ok = true;\n    for (let step = 0; step < n; step++) {\n      const i = (start + step) % n;\n      tank += gas[i] - cost[i];\n      if (tank < 0) { ok = false; break; }\n    }\n    if (ok) return start;\n  }\n  return -1;\n}\n",
        commentedCode: {
          js: "function gasStation(gas, cost) {\n  const n = gas.length;\n  // Test candidate starts in ascending order to return the smallest valid index.\n  for (let start = 0; start < n; start++) {\n    // Each simulation begins empty and remains viable until fuel goes negative.\n    let tank = 0, ok = true;\n    for (let step = 0; step < n; step++) {\n      // Wrap the linear offset around the circular route.\n      const i = (start + step) % n;\n      // Collect at this station, then pay the cost of reaching the next.\n      tank += gas[i] - cost[i];\n      // Running out of fuel invalidates this candidate immediately.\n      if (tank < 0) { ok = false; break; }\n    }\n    // Surviving all n legs completes the full loop.\n    if (ok) return start;\n  }\n  // Every possible starting station failed.\n  return -1;\n}\n",
          ts: "function gasStation(gas: number[], cost: number[]): number {\n  const n = gas.length;\n  // Test candidate starts in ascending order to return the smallest valid index.\n  for (let start = 0; start < n; start++) {\n    // Each simulation begins empty and remains viable until fuel goes negative.\n    let tank = 0, ok = true;\n    for (let step = 0; step < n; step++) {\n      // Wrap the linear offset around the circular route.\n      const i = (start + step) % n;\n      // Collect at this station, then pay the cost of reaching the next.\n      tank += gas[i] - cost[i];\n      // Running out of fuel invalidates this candidate immediately.\n      if (tank < 0) { ok = false; break; }\n    }\n    // Surviving all n legs completes the full loop.\n    if (ok) return start;\n  }\n  // Every possible starting station failed.\n  return -1;\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "gr-assign-cookies",
    slug: "assign-cookies",
    title: "Assign Cookies",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Each child has a greed value in `greed`; each cookie has a size in `sizes`. A child is content with any cookie whose size is at least their greed, and each cookie serves one child. Return the greatest number of content children.",
    examples: [
      { input: "[1,2,3], [1,1]", output: "1" },
      { input: "[1,2], [1,2,3]", output: "2" },
      { input: "[], [1]", output: "0" },
    ],
    constraints: ["0 <= lengths <= 10000"],
    functionName: "assignCookies",
    starter: {
      js: "function assignCookies(greed, sizes) {\n  // Most children who can be satisfied.\n}\n",
      ts: "function assignCookies(greed: number[], sizes: number[]): number {\n  // Most children who can be satisfied.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3], [1, 1]], expected: 1 },
      { args: [[1, 2], [1, 2, 3]], expected: 2 },
      { args: [[], [1]], expected: 0 },
    ],
    hidden: [
      { args: [[1], []], expected: 0 },
      { args: [[1, 1], [1, 1]], expected: 2 },
      { args: [[2, 3], [1, 1]], expected: 0 },
      { args: [[1, 2, 3], [3]], expected: 1 },
      { args: [[5, 10, 25], [10, 5, 25, 5]], expected: 3 },
      { args: [[1], [2]], expected: 1 },
    ],
    hints: [
      "Sort both lists so you can match the least greedy child with the smallest cookie that fits.",
      "Walk two pointers: advance the cookie pointer always, the child pointer on a match.",
      "Skip cookies too small for the current child.",
    ],
    solutions: [
      {
        label: "Sort and two pointers",
        approach: "Give each child the smallest sufficient cookie.",
        js: "function assignCookies(greed, sizes) {\n  const g = [...greed].sort((a, b) => a - b);\n  const s = [...sizes].sort((a, b) => a - b);\n  let child = 0, cookie = 0;\n  while (child < g.length && cookie < s.length) {\n    if (s[cookie] >= g[child]) child++;\n    cookie++;\n  }\n  return child;\n}\n",
        ts: "function assignCookies(greed: number[], sizes: number[]): number {\n  const g = [...greed].sort((a, b) => a - b);\n  const s = [...sizes].sort((a, b) => a - b);\n  let child = 0, cookie = 0;\n  while (child < g.length && cookie < s.length) {\n    if (s[cookie] >= g[child]) child++;\n    cookie++;\n  }\n  return child;\n}\n",
        commentedCode: {
          js: "function assignCookies(greed, sizes) {\n  // Order children from least to most demanding without mutating the input.\n  const g = [...greed].sort((a, b) => a - b);\n  // Order cookies so each child can receive the smallest sufficient one.\n  const s = [...sizes].sort((a, b) => a - b);\n  // child also counts successful assignments; cookie scans every available size.\n  let child = 0, cookie = 0;\n  while (child < g.length && cookie < s.length) {\n    // A sufficient cookie satisfies this child, so move to the next child.\n    if (s[cookie] >= g[child]) child++;\n    // Whether used or too small, this cookie cannot help a later iteration.\n    cookie++;\n  }\n  return child;\n}\n",
          ts: "function assignCookies(greed: number[], sizes: number[]): number {\n  // Order children from least to most demanding without mutating the input.\n  const g = [...greed].sort((a, b) => a - b);\n  // Order cookies so each child can receive the smallest sufficient one.\n  const s = [...sizes].sort((a, b) => a - b);\n  // child also counts successful assignments; cookie scans every available size.\n  let child = 0, cookie = 0;\n  while (child < g.length && cookie < s.length) {\n    // A sufficient cookie satisfies this child, so move to the next child.\n    if (s[cookie] >= g[child]) child++;\n    // Whether used or too small, this cookie cannot help a later iteration.\n    cookie++;\n  }\n  return child;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Largest cookie to greediest child",
        approach: "Match from the top: hand the biggest cookie to the greediest child it satisfies.",
        js: "function assignCookies(greed, sizes) {\n  const g = [...greed].sort((a, b) => b - a);\n  const s = [...sizes].sort((a, b) => b - a);\n  let count = 0, cookie = 0;\n  for (let child = 0; child < g.length; child++) {\n    if (cookie < s.length && s[cookie] >= g[child]) { count++; cookie++; }\n  }\n  return count;\n}\n",
        ts: "function assignCookies(greed: number[], sizes: number[]): number {\n  const g = [...greed].sort((a, b) => b - a);\n  const s = [...sizes].sort((a, b) => b - a);\n  let count = 0, cookie = 0;\n  for (let child = 0; child < g.length; child++) {\n    if (cookie < s.length && s[cookie] >= g[child]) { count++; cookie++; }\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function assignCookies(greed, sizes) {\n  // Consider the greediest children first.\n  const g = [...greed].sort((a, b) => b - a);\n  // Keep the largest unused cookie at the current cookie index.\n  const s = [...sizes].sort((a, b) => b - a);\n  let count = 0, cookie = 0;\n  for (let child = 0; child < g.length; child++) {\n    // Use the largest remaining cookie only when it can satisfy this child.\n    if (cookie < s.length && s[cookie] >= g[child]) { count++; cookie++; }\n  }\n  // Children skipped by the loop could not use the current or any smaller cookie.\n  return count;\n}\n",
          ts: "function assignCookies(greed: number[], sizes: number[]): number {\n  // Consider the greediest children first.\n  const g = [...greed].sort((a, b) => b - a);\n  // Keep the largest unused cookie at the current cookie index.\n  const s = [...sizes].sort((a, b) => b - a);\n  let count = 0, cookie = 0;\n  for (let child = 0; child < g.length; child++) {\n    // Use the largest remaining cookie only when it can satisfy this child.\n    if (cookie < s.length && s[cookie] >= g[child]) { count++; cookie++; }\n  }\n  // Children skipped by the loop could not use the current or any smaller cookie.\n  return count;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "gr-max-profit",
    slug: "max-profit-multi",
    title: "Best Time to Buy and Sell",
    difficulty: "medium",
    patternIds: P,
    statement:
      "`prices[i]` is a stock's price on day `i`. You may buy and sell any number of times (but hold at most one share at a time). Return the maximum total profit.",
    examples: [
      { input: "[7,1,5,3,6,4]", output: "7" },
      { input: "[1,2,3,4,5]", output: "4" },
      { input: "[7,6,4,3,1]", output: "0" },
    ],
    constraints: ["0 <= prices.length <= 10000"],
    functionName: "maxProfit",
    starter: {
      js: "function maxProfit(prices) {\n  // Max total profit with unlimited transactions.\n}\n",
      ts: "function maxProfit(prices: number[]): number {\n  // Max total profit with unlimited transactions.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[7, 1, 5, 3, 6, 4]], expected: 7 },
      { args: [[1, 2, 3, 4, 5]], expected: 4 },
      { args: [[7, 6, 4, 3, 1]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[5]], expected: 0 },
      { args: [[1, 5]], expected: 4 },
      { args: [[5, 1]], expected: 0 },
      { args: [[1, 2, 1, 2, 1, 2]], expected: 3 },
      { args: [[3, 3, 3]], expected: 0 },
    ],
    hints: [
      "You can capture every upward step by buying before it and selling after.",
      "Add up all the positive day-to-day differences.",
      "Downward steps contribute nothing.",
    ],
    solutions: [
      {
        label: "Sum the upswings",
        approach: "Add each positive consecutive difference.",
        js: "function maxProfit(prices) {\n  let profit = 0;\n  for (let i = 1; i < prices.length; i++) {\n    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];\n  }\n  return profit;\n}\n",
        ts: "function maxProfit(prices: number[]): number {\n  let profit = 0;\n  for (let i = 1; i < prices.length; i++) {\n    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];\n  }\n  return profit;\n}\n",
        commentedCode: {
          js: "function maxProfit(prices) {\n  // Accumulate profit from every independently profitable daily move.\n  let profit = 0;\n  for (let i = 1; i < prices.length; i++) {\n    // Buying yesterday and selling today captures this positive step.\n    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];\n  }\n  // Adjacent upswings telescope to the same profit as holding through a rise.\n  return profit;\n}\n",
          ts: "function maxProfit(prices: number[]): number {\n  // Accumulate profit from every independently profitable daily move.\n  let profit = 0;\n  for (let i = 1; i < prices.length; i++) {\n    // Buying yesterday and selling today captures this positive step.\n    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];\n  }\n  // Adjacent upswings telescope to the same profit as holding through a rise.\n  return profit;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Ride each rising run",
        approach: "Buy at each local minimum and sell at the following local maximum.",
        js: "function maxProfit(prices) {\n  let profit = 0, i = 0;\n  const n = prices.length;\n  while (i < n - 1) {\n    while (i < n - 1 && prices[i + 1] <= prices[i]) i++;\n    const buy = prices[i];\n    while (i < n - 1 && prices[i + 1] >= prices[i]) i++;\n    profit += prices[i] - buy;\n  }\n  return profit;\n}\n",
        ts: "function maxProfit(prices: number[]): number {\n  let profit = 0, i = 0;\n  const n = prices.length;\n  while (i < n - 1) {\n    while (i < n - 1 && prices[i + 1] <= prices[i]) i++;\n    const buy = prices[i];\n    while (i < n - 1 && prices[i + 1] >= prices[i]) i++;\n    profit += prices[i] - buy;\n  }\n  return profit;\n}\n",
        commentedCode: {
          js: "function maxProfit(prices) {\n  // i walks across alternating falling and rising runs.\n  let profit = 0, i = 0;\n  const n = prices.length;\n  while (i < n - 1) {\n    // Skip non-increasing days to stop at the next local minimum.\n    while (i < n - 1 && prices[i + 1] <= prices[i]) i++;\n    // Buy at the bottom of this rising opportunity.\n    const buy = prices[i];\n    // Follow the non-decreasing run to its local maximum.\n    while (i < n - 1 && prices[i + 1] >= prices[i]) i++;\n    // Sell at the run's peak and add this transaction's gain.\n    profit += prices[i] - buy;\n  }\n  return profit;\n}\n",
          ts: "function maxProfit(prices: number[]): number {\n  // i walks across alternating falling and rising runs.\n  let profit = 0, i = 0;\n  const n = prices.length;\n  while (i < n - 1) {\n    // Skip non-increasing days to stop at the next local minimum.\n    while (i < n - 1 && prices[i + 1] <= prices[i]) i++;\n    // Buy at the bottom of this rising opportunity.\n    const buy = prices[i];\n    // Follow the non-decreasing run to its local maximum.\n    while (i < n - 1 && prices[i + 1] >= prices[i]) i++;\n    // Sell at the run's peak and add this transaction's gain.\n    profit += prices[i] - buy;\n  }\n  return profit;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "gr-min-arrows",
    slug: "min-arrows",
    title: "Minimum Arrows to Burst Balloons",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each balloon spans `[start, end]` on a wall. An arrow shot at position `x` bursts every balloon whose span includes `x` (endpoints included). Return the fewest arrows that burst them all.",
    examples: [
      { input: "[[10,16],[2,8],[1,6],[7,12]]", output: "2" },
      { input: "[[1,2],[3,4],[5,6],[7,8]]", output: "4" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= balloons.length <= 10000"],
    functionName: "minArrows",
    starter: {
      js: "function minArrows(balloons) {\n  // Fewest arrows to burst every balloon.\n}\n",
      ts: "function minArrows(balloons: number[][]): number {\n  // Fewest arrows to burst every balloon.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[10, 16], [2, 8], [1, 6], [7, 12]]], expected: 2 },
      { args: [[[1, 2], [3, 4], [5, 6], [7, 8]]], expected: 4 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[[1, 2]]], expected: 1 },
      { args: [[[1, 2], [2, 3]]], expected: 1 },
      { args: [[[1, 10], [2, 3], [4, 5]]], expected: 2 },
      { args: [[[1, 6], [2, 8], [7, 12], [10, 16]]], expected: 2 },
      { args: [[[1, 2], [1, 2], [1, 2]]], expected: 1 },
      { args: [[[1, 100], [50, 60], [70, 80]]], expected: 2 },
    ],
    hints: [
      "Sort by end position and fire an arrow at the first balloon's end.",
      "That arrow bursts every balloon that starts before it.",
      "Only fire a new arrow when a balloon starts beyond the last arrow's position.",
    ],
    solutions: [
      {
        label: "Sort by end, shoot greedily",
        approach: "Each arrow covers the current end; add one when a balloon starts past it.",
        js: "function minArrows(balloons) {\n  if (balloons.length === 0) return 0;\n  const sorted = [...balloons].sort((a, b) => a[1] - b[1]);\n  let arrows = 1, pos = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] > pos) { arrows++; pos = sorted[i][1]; }\n  }\n  return arrows;\n}\n",
        ts: "function minArrows(balloons: number[][]): number {\n  if (balloons.length === 0) return 0;\n  const sorted = [...balloons].sort((a, b) => a[1] - b[1]);\n  let arrows = 1, pos = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] > pos) { arrows++; pos = sorted[i][1]; }\n  }\n  return arrows;\n}\n",
        commentedCode: {
          js: "function minArrows(balloons) {\n  // No balloons require no arrows.\n  if (balloons.length === 0) return 0;\n  // The earliest end is the safest arrow position for preserving later overlap.\n  const sorted = [...balloons].sort((a, b) => a[1] - b[1]);\n  // Shoot the first arrow at the end of the earliest-ending balloon.\n  let arrows = 1, pos = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // Only a balloon beginning beyond that position escapes the current arrow.\n    if (sorted[i][0] > pos) { arrows++; pos = sorted[i][1]; }\n  }\n  return arrows;\n}\n",
          ts: "function minArrows(balloons: number[][]): number {\n  // No balloons require no arrows.\n  if (balloons.length === 0) return 0;\n  // The earliest end is the safest arrow position for preserving later overlap.\n  const sorted = [...balloons].sort((a, b) => a[1] - b[1]);\n  // Shoot the first arrow at the end of the earliest-ending balloon.\n  let arrows = 1, pos = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // Only a balloon beginning beyond that position escapes the current arrow.\n    if (sorted[i][0] > pos) { arrows++; pos = sorted[i][1]; }\n  }\n  return arrows;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Sort by start, track the tightest end",
        approach: "Shrink the overlap window; a balloon starting past it needs a new arrow.",
        js: "function minArrows(balloons) {\n  if (balloons.length === 0) return 0;\n  const sorted = [...balloons].sort((a, b) => a[0] - b[0]);\n  let arrows = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] > end) { arrows++; end = sorted[i][1]; }\n    else end = Math.min(end, sorted[i][1]);\n  }\n  return arrows;\n}\n",
        ts: "function minArrows(balloons: number[][]): number {\n  if (balloons.length === 0) return 0;\n  const sorted = [...balloons].sort((a, b) => a[0] - b[0]);\n  let arrows = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] > end) { arrows++; end = sorted[i][1]; }\n    else end = Math.min(end, sorted[i][1]);\n  }\n  return arrows;\n}\n",
        commentedCode: {
          js: "function minArrows(balloons) {\n  // An empty input has no overlap groups to cover.\n  if (balloons.length === 0) return 0;\n  // Start order lets us build each consecutive overlap group.\n  const sorted = [...balloons].sort((a, b) => a[0] - b[0]);\n  // end is the right edge shared by every balloon in the current group.\n  let arrows = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // A start beyond the shared edge opens a disjoint group needing another arrow.\n    if (sorted[i][0] > end) { arrows++; end = sorted[i][1]; }\n    // Otherwise narrow the shared window so one arrow still covers the group.\n    else end = Math.min(end, sorted[i][1]);\n  }\n  return arrows;\n}\n",
          ts: "function minArrows(balloons: number[][]): number {\n  // An empty input has no overlap groups to cover.\n  if (balloons.length === 0) return 0;\n  // Start order lets us build each consecutive overlap group.\n  const sorted = [...balloons].sort((a, b) => a[0] - b[0]);\n  // end is the right edge shared by every balloon in the current group.\n  let arrows = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // A start beyond the shared edge opens a disjoint group needing another arrow.\n    if (sorted[i][0] > end) { arrows++; end = sorted[i][1]; }\n    // Otherwise narrow the shared window so one arrow still covers the group.\n    else end = Math.min(end, sorted[i][1]);\n  }\n  return arrows;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "gr-partition-labels",
    slug: "partition-labels",
    title: "Partition Labels",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Split the string into as many pieces as possible so that each letter appears in at most one piece. Return the length of each piece, left to right.",
    examples: [
      { input: '"ababcbacadefegdehijhklij"', output: "[9,7,8]" },
      { input: '"abc"', output: "[1,1,1]" },
      { input: '""', output: "[]" },
    ],
    constraints: ["0 <= s.length <= 10000", "lowercase letters only"],
    functionName: "partitionLabels",
    starter: {
      js: "function partitionLabels(s) {\n  // Sizes of the maximal single-letter-ownership pieces.\n}\n",
      ts: "function partitionLabels(s: string): number[] {\n  // Sizes of the maximal single-letter-ownership pieces.\n  return [];\n}\n",
    },
    visible: [
      { args: ["ababcbacadefegdehijhklij"], expected: [9, 7, 8] },
      { args: ["abc"], expected: [1, 1, 1] },
      { args: [""], expected: [] },
    ],
    hidden: [
      { args: ["a"], expected: [1] },
      { args: ["aa"], expected: [2] },
      { args: ["aba"], expected: [3] },
      { args: ["abcabc"], expected: [6] },
      { args: ["eccbbbbdec"], expected: [10] },
      { args: ["abccbadd"], expected: [6, 2] },
    ],
    hints: [
      "Record the last index at which each letter appears.",
      "Extend the current piece's end to the furthest last-index of any letter seen so far.",
      "Close the piece when your scan position reaches that end.",
    ],
    solutions: [
      {
        label: "Track the furthest last index",
        approach: "Grow a piece until every letter in it is fully contained.",
        js: "function partitionLabels(s) {\n  const last = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  const out = [];\n  let start = 0, end = 0;\n  for (let i = 0; i < s.length; i++) {\n    end = Math.max(end, last[s[i]]);\n    if (i === end) { out.push(end - start + 1); start = i + 1; }\n  }\n  return out;\n}\n",
        ts: "function partitionLabels(s: string): number[] {\n  const last: Record<string, number> = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  const out: number[] = [];\n  let start = 0, end = 0;\n  for (let i = 0; i < s.length; i++) {\n    end = Math.max(end, last[s[i]]);\n    if (i === end) { out.push(end - start + 1); start = i + 1; }\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function partitionLabels(s) {\n  // Record where every character appears for the final time.\n  const last = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  const out = [];\n  // [start, end] is the partition currently being grown.\n  let start = 0, end = 0;\n  for (let i = 0; i < s.length; i++) {\n    // This character forces the partition to include its final occurrence.\n    end = Math.max(end, last[s[i]]);\n    // Reaching end means every character seen in this partition is contained.\n    if (i === end) { out.push(end - start + 1); start = i + 1; }\n  }\n  return out;\n}\n",
          ts: "function partitionLabels(s: string): number[] {\n  // Record where every character appears for the final time.\n  const last: Record<string, number> = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  const out: number[] = [];\n  // [start, end] is the partition currently being grown.\n  let start = 0, end = 0;\n  for (let i = 0; i < s.length; i++) {\n    // This character forces the partition to include its final occurrence.\n    end = Math.max(end, last[s[i]]);\n    // Reaching end means every character seen in this partition is contained.\n    if (i === end) { out.push(end - start + 1); start = i + 1; }\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Merge letter ranges",
        approach: "Treat each letter's [first, last] as an interval and merge overlaps.",
        js: "function partitionLabels(s) {\n  const first = {}, last = {};\n  for (let i = 0; i < s.length; i++) {\n    if (first[s[i]] === undefined) first[s[i]] = i;\n    last[s[i]] = i;\n  }\n  const ranges = Object.keys(first).map((c) => [first[c], last[c]]).sort((a, b) => a[0] - b[0]);\n  const out = [];\n  let start = -1, end = -1;\n  for (const [lo, hi] of ranges) {\n    if (start === -1) { start = lo; end = hi; }\n    else if (lo <= end) end = Math.max(end, hi);\n    else { out.push(end - start + 1); start = lo; end = hi; }\n  }\n  if (start !== -1) out.push(end - start + 1);\n  return out;\n}\n",
        ts: "function partitionLabels(s: string): number[] {\n  const first: Record<string, number> = {}, last: Record<string, number> = {};\n  for (let i = 0; i < s.length; i++) {\n    if (first[s[i]] === undefined) first[s[i]] = i;\n    last[s[i]] = i;\n  }\n  const ranges = Object.keys(first).map((c) => [first[c], last[c]]).sort((a, b) => a[0] - b[0]);\n  const out: number[] = [];\n  let start = -1, end = -1;\n  for (const [lo, hi] of ranges) {\n    if (start === -1) { start = lo; end = hi; }\n    else if (lo <= end) end = Math.max(end, hi);\n    else { out.push(end - start + 1); start = lo; end = hi; }\n  }\n  if (start !== -1) out.push(end - start + 1);\n  return out;\n}\n",
        commentedCode: {
          js: "function partitionLabels(s) {\n  // Build the full occurrence interval [first, last] for each character.\n  const first = {}, last = {};\n  for (let i = 0; i < s.length; i++) {\n    // Set the first occurrence once, while replacing the last on every visit.\n    if (first[s[i]] === undefined) first[s[i]] = i;\n    last[s[i]] = i;\n  }\n  // Sort character intervals in the order their characters first appear.\n  const ranges = Object.keys(first).map((c) => [first[c], last[c]]).sort((a, b) => a[0] - b[0]);\n  const out = [];\n  // -1 marks that no merged partition has started yet.\n  let start = -1, end = -1;\n  for (const [lo, hi] of ranges) {\n    // Seed the first partition from the first character interval.\n    if (start === -1) { start = lo; end = hi; }\n    // Overlapping character ranges must belong to one partition.\n    else if (lo <= end) end = Math.max(end, hi);\n    // A gap closes the prior partition and starts the next one.\n    else { out.push(end - start + 1); start = lo; end = hi; }\n  }\n  // Close the final partition when the input contained at least one character.\n  if (start !== -1) out.push(end - start + 1);\n  return out;\n}\n",
          ts: "function partitionLabels(s: string): number[] {\n  // Build the full occurrence interval [first, last] for each character.\n  const first: Record<string, number> = {}, last: Record<string, number> = {};\n  for (let i = 0; i < s.length; i++) {\n    // Set the first occurrence once, while replacing the last on every visit.\n    if (first[s[i]] === undefined) first[s[i]] = i;\n    last[s[i]] = i;\n  }\n  // Sort character intervals in the order their characters first appear.\n  const ranges = Object.keys(first).map((c) => [first[c], last[c]]).sort((a, b) => a[0] - b[0]);\n  const out: number[] = [];\n  // -1 marks that no merged partition has started yet.\n  let start = -1, end = -1;\n  for (const [lo, hi] of ranges) {\n    // Seed the first partition from the first character interval.\n    if (start === -1) { start = lo; end = hi; }\n    // Overlapping character ranges must belong to one partition.\n    else if (lo <= end) end = Math.max(end, hi);\n    // A gap closes the prior partition and starts the next one.\n    else { out.push(end - start + 1); start = lo; end = hi; }\n  }\n  // Close the final partition when the input contained at least one character.\n  if (start !== -1) out.push(end - start + 1);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
];

export const greedyProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const greedyMcqs: QuizQuestion[] = [
  {
    id: "s5-gr-idea",
    kind: "mcq",
    prompt: "A greedy algorithm builds a solution by:",
    options: [
      "trying every possibility and keeping the best",
      "making the locally best choice at each step and never reconsidering",
      "caching overlapping subproblems",
      "dividing the input in half repeatedly",
    ],
    answerIndex: 1,
    explanation: "Greedy commits to the best immediate choice and moves on — no backtracking.",
  },
  {
    id: "s5-gr-caveat",
    kind: "mcq",
    prompt: "The main risk with a greedy approach is that:",
    options: [
      "it always uses too much memory",
      "the locally best choice may not lead to a globally optimal answer",
      "it cannot handle sorted input",
      "it is always slower than brute force",
    ],
    answerIndex: 1,
    explanation: "Greedy is only correct when local optimum guarantees global optimum — which needs proof.",
  },
];

export const greedyModule: Module = {
  id: "m-pat-greedy",
  stageId: S,
  title: "Greedy",
  kind: "patternModule",
  summary: "Make the locally best choice at each step — fast and simple, when it's provably optimal.",
  lessonSections: [
    {
      heading: "Commit to the best next move",
      body: `A **greedy** algorithm builds its answer one step at a time, always taking the choice that looks best *right now* and never undoing it. When that works it's wonderfully simple and fast — often just a sort followed by a single pass.

\`\`\`js
// Jump Game: can we reach the end?
function canJump(nums) {
  let reach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reach) return false;          // stuck before this index
    reach = Math.max(reach, i + nums[i]); // extend the furthest reach
  }
  return true;
}
console.log(canJump([2, 3, 1, 1, 4])); // true
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Greedy tends to fit when:

- you can **sort** the input and then sweep once (intervals, cookies, arrows),
- an **exchange argument** shows a locally best pick never hurts (earliest-finishing interval, largest coin),
- the problem asks for a **maximum / minimum count** and choices don't interact in tricky ways,
- you're taking the "best available" repeatedly — which pairs naturally with a **heap** (that's the Top-K / Two-Heaps overlap).

The catch: greedy is only *correct* when the local optimum guarantees the global one. If a choice can back you into a corner, you likely need dynamic programming instead — which is exactly why several drills here also show a DP alternative.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Interval scheduling: keep the most intervals (sort by end)
sorted = intervals.sort((a, b) => a[1] - b[1]);
let kept = 0, end = -Infinity;
for (const [s, e] of sorted) {
  if (s >= end) { kept++; end = e; } // take the earliest finisher that fits
}
\`\`\`

**Pitfalls:** the biggest one is assuming greedy works without justifying it — coin change is greedy for {1,5,10,25} but *not* for arbitrary coins (hence the DP fallback shown in the drill); sorting by the **wrong key** (interval problems usually sort by **end**, not start); and off-by-one on whether touching endpoints "overlap". Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "gr-max-coins",
  drillProblemIds: [
    "gr-max-coins",
    "gr-max-units",
    "gr-jump-game",
    "gr-min-jumps",
    "gr-non-overlapping",
    "gr-gas-station",
  ],
  testPoolProblemIds: [
    "gr-assign-cookies",
    "gr-max-profit",
    "gr-min-arrows",
    "gr-partition-labels",
  ],
  complexityQuestionIds: ["s5-gr-idea", "s5-gr-caveat"],
  badgeId: "badge-pat-greedy",
  prerequisiteModuleIds: [],
};
