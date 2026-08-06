import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["dp-state"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "d5-stock-1",
    slug: "best-time-stock-single",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Given daily prices, you may buy once and later sell once. Return the maximum profit, or 0 if no profitable trade exists.",
    examples: [
      { input: "[7,1,5,3,6,4]", output: "5" },
      { input: "[7,6,4,3,1]", output: "0" },
      { input: "[1,2]", output: "1" },
    ],
    constraints: ["0 <= prices.length <= 100000"],
    functionName: "maxProfit1",
    starter: {
      js: "function maxProfit1(prices) {\n  // Max profit from one buy then one sell.\n}\n",
      ts: "function maxProfit1(prices: number[]): number {\n  // Max profit from one buy then one sell.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[7, 1, 5, 3, 6, 4]], expected: 5 },
      { args: [[7, 6, 4, 3, 1]], expected: 0 },
      { args: [[1, 2]], expected: 1 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[5]], expected: 0 },
      { args: [[2, 4, 1]], expected: 2 },
      { args: [[3, 2, 6, 5, 0, 3]], expected: 4 },
      { args: [[1, 2, 3, 4, 5]], expected: 4 },
      { args: [[2, 1, 2, 1, 0, 1, 2]], expected: 2 },
    ],
    hints: [
      "The state is whether you currently hold the stock.",
      "Track the lowest price seen so far and the best profit if you sold today.",
      "profit = max(profit, price - minSoFar).",
    ],
    solutions: [
      {
        label: "State machine (two variables)",
        approach: "Carry the best 'holding' and 'sold' values as you sweep.",
        js: "function maxProfit1(prices) {\n  let hold = -Infinity, sold = 0;\n  for (const p of prices) {\n    hold = Math.max(hold, -p);\n    sold = Math.max(sold, hold + p);\n  }\n  return sold;\n}\n",
        ts: "function maxProfit1(prices: number[]): number {\n  let hold = -Infinity, sold = 0;\n  for (const p of prices) {\n    hold = Math.max(hold, -p);\n    sold = Math.max(sold, hold + p);\n  }\n  return sold;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Memoized recursion",
        approach: "Recurse over day and holding-state, caching each combination.",
        js: "function maxProfit1(prices) {\n  const n = prices.length;\n  const memo = new Map();\n  const go = (i, holding) => {\n    if (i >= n) return 0;\n    const key = i * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1), prices[i]);\n    else v = Math.max(go(i + 1, 0), -prices[i] + go(i + 1, 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function maxProfit1(prices: number[]): number {\n  const n = prices.length;\n  const memo = new Map<number, number>();\n  const go = (i: number, holding: number): number => {\n    if (i >= n) return 0;\n    const key = i * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1), prices[i]);\n    else v = Math.max(go(i + 1, 0), -prices[i] + go(i + 1, 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d5-stock-2",
    slug: "best-time-stock-unlimited",
    title: "Best Time to Buy and Sell Stock II",
    difficulty: "medium",
    patternIds: P,
    statement:
      "You may buy and sell as many times as you like (but hold at most one share at a time). Return the maximum total profit.",
    examples: [
      { input: "[7,1,5,3,6,4]", output: "7" },
      { input: "[1,2,3,4,5]", output: "4" },
      { input: "[7,6,4,3,1]", output: "0" },
    ],
    constraints: ["0 <= prices.length <= 100000"],
    functionName: "maxProfit2",
    starter: {
      js: "function maxProfit2(prices) {\n  // Max profit with unlimited transactions.\n}\n",
      ts: "function maxProfit2(prices: number[]): number {\n  // Max profit with unlimited transactions.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[7, 1, 5, 3, 6, 4]], expected: 7 },
      { args: [[1, 2, 3, 4, 5]], expected: 4 },
      { args: [[7, 6, 4, 3, 1]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[1]], expected: 0 },
      { args: [[1, 2, 1, 2, 1, 2]], expected: 3 },
      { args: [[6, 1, 3, 2, 4, 7]], expected: 7 },
      { args: [[2, 1]], expected: 0 },
      { args: [[3, 3, 3]], expected: 0 },
    ],
    hints: [
      "With unlimited trades you can grab every upward step.",
      "Sum max(0, price[i] - price[i-1]) over all days.",
      "Equivalently, a hold/free state machine that can re-enter freely.",
    ],
    solutions: [
      {
        label: "Sum positive deltas",
        approach: "Every rise between consecutive days is pure profit.",
        js: "function maxProfit2(prices) {\n  let total = 0;\n  for (let i = 1; i < prices.length; i++)\n    if (prices[i] > prices[i - 1]) total += prices[i] - prices[i - 1];\n  return total;\n}\n",
        ts: "function maxProfit2(prices: number[]): number {\n  let total = 0;\n  for (let i = 1; i < prices.length; i++)\n    if (prices[i] > prices[i - 1]) total += prices[i] - prices[i - 1];\n  return total;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Memoized state machine",
        approach: "Recurse over day and holding-state, buying/selling freely.",
        js: "function maxProfit2(prices) {\n  const n = prices.length;\n  const memo = new Map();\n  const go = (i, holding) => {\n    if (i >= n) return 0;\n    const key = i * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1), prices[i] + go(i + 1, 0));\n    else v = Math.max(go(i + 1, 0), -prices[i] + go(i + 1, 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function maxProfit2(prices: number[]): number {\n  const n = prices.length;\n  const memo = new Map<number, number>();\n  const go = (i: number, holding: number): number => {\n    if (i >= n) return 0;\n    const key = i * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1), prices[i] + go(i + 1, 0));\n    else v = Math.max(go(i + 1, 0), -prices[i] + go(i + 1, 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d5-stock-cooldown",
    slug: "best-time-stock-cooldown",
    title: "Best Time to Buy and Sell Stock with Cooldown",
    difficulty: "medium",
    patternIds: P,
    statement:
      "You may make unlimited transactions, but after selling you must rest one day before buying again. Return the maximum profit.",
    examples: [
      { input: "[1,2,3,0,2]", output: "3" },
      { input: "[1]", output: "0" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= prices.length <= 5000"],
    functionName: "maxProfitCooldown",
    starter: {
      js: "function maxProfitCooldown(prices) {\n  // Max profit with a one-day cooldown after selling.\n}\n",
      ts: "function maxProfitCooldown(prices: number[]): number {\n  // Max profit with a one-day cooldown after selling.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 0, 2]], expected: 3 },
      { args: [[1]], expected: 0 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[2, 1]], expected: 0 },
      { args: [[1, 2]], expected: 1 },
      { args: [[1, 2, 4]], expected: 3 },
      { args: [[6, 1, 3, 2, 4, 7]], expected: 6 },
      { args: [[1, 2, 3, 0, 0, 3, 1, 2]], expected: 5 },
      { args: [[3, 3, 3]], expected: 0 },
    ],
    hints: [
      "Three states per day: holding, just-sold (cooldown), and free to buy.",
      "hold = max(hold, free - price); sold = hold + price; free = max(free, sold).",
      "In the recursion, selling jumps two days forward to enforce the rest.",
    ],
    solutions: [
      {
        label: "Three-state machine",
        approach: "Track holding, sold-today, and free profits and roll them forward.",
        js: "function maxProfitCooldown(prices) {\n  if (prices.length === 0) return 0;\n  let hold = -Infinity, sold = 0, free = 0;\n  for (const p of prices) {\n    const ph = hold, ps = sold, pf = free;\n    hold = Math.max(ph, pf - p);\n    sold = ph + p;\n    free = Math.max(pf, ps);\n  }\n  return Math.max(sold, free);\n}\n",
        ts: "function maxProfitCooldown(prices: number[]): number {\n  if (prices.length === 0) return 0;\n  let hold = -Infinity, sold = 0, free = 0;\n  for (const p of prices) {\n    const ph = hold, ps = sold, pf = free;\n    hold = Math.max(ph, pf - p);\n    sold = ph + p;\n    free = Math.max(pf, ps);\n  }\n  return Math.max(sold, free);\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Memoized recursion",
        approach: "Buying skips one day, selling skips two to honor the cooldown.",
        js: "function maxProfitCooldown(prices) {\n  const n = prices.length;\n  const memo = new Map();\n  const go = (i, holding) => {\n    if (i >= n) return 0;\n    const key = i * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1), prices[i] + go(i + 2, 0));\n    else v = Math.max(go(i + 1, 0), -prices[i] + go(i + 1, 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function maxProfitCooldown(prices: number[]): number {\n  const n = prices.length;\n  const memo = new Map<number, number>();\n  const go = (i: number, holding: number): number => {\n    if (i >= n) return 0;\n    const key = i * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1), prices[i] + go(i + 2, 0));\n    else v = Math.max(go(i + 1, 0), -prices[i] + go(i + 1, 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d5-stock-fee",
    slug: "best-time-stock-fee",
    title: "Best Time to Buy and Sell Stock with Transaction Fee",
    difficulty: "medium",
    patternIds: P,
    statement:
      "You may make unlimited transactions, but each completed sale charges a fixed fee. Return the maximum profit.",
    examples: [
      { input: "[1,3,2,8,4,9], 2", output: "8" },
      { input: "[1,3,7,5,10,3], 3", output: "6" },
      { input: "[1,1,1], 1", output: "0" },
    ],
    constraints: ["0 <= prices.length <= 100000", "0 <= fee"],
    functionName: "maxProfitFee",
    starter: {
      js: "function maxProfitFee(prices, fee) {\n  // Max profit charging a fee per sale.\n}\n",
      ts: "function maxProfitFee(prices: number[], fee: number): number {\n  // Max profit charging a fee per sale.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 3, 2, 8, 4, 9], 2], expected: 8 },
      { args: [[1, 3, 7, 5, 10, 3], 3], expected: 6 },
      { args: [[1, 1, 1], 1], expected: 0 },
    ],
    hidden: [
      { args: [[], 2], expected: 0 },
      { args: [[5], 1], expected: 0 },
      { args: [[1, 5], 2], expected: 2 },
      { args: [[9, 1, 9], 1], expected: 7 },
      { args: [[1, 4, 2, 8], 2], expected: 5 },
      { args: [[3, 3, 3], 1], expected: 0 },
    ],
    hints: [
      "Same hold/cash state machine as unlimited trades, minus a fee on each sale.",
      "hold = max(hold, cash - price); cash = max(cash, hold + price - fee).",
      "Charge the fee once, on the sell transition.",
    ],
    solutions: [
      {
        label: "Hold/cash state machine",
        approach: "Deduct the fee when moving from holding back to cash.",
        js: "function maxProfitFee(prices, fee) {\n  let hold = -Infinity, cash = 0;\n  for (const p of prices) {\n    const ph = hold;\n    hold = Math.max(ph, cash - p);\n    cash = Math.max(cash, ph + p - fee);\n  }\n  return cash;\n}\n",
        ts: "function maxProfitFee(prices: number[], fee: number): number {\n  let hold = -Infinity, cash = 0;\n  for (const p of prices) {\n    const ph = hold;\n    hold = Math.max(ph, cash - p);\n    cash = Math.max(cash, ph + p - fee);\n  }\n  return cash;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Memoized recursion",
        approach: "Recurse over day and holding-state, subtracting the fee on sale.",
        js: "function maxProfitFee(prices, fee) {\n  const n = prices.length;\n  const memo = new Map();\n  const go = (i, holding) => {\n    if (i >= n) return 0;\n    const key = i * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1), prices[i] - fee + go(i + 1, 0));\n    else v = Math.max(go(i + 1, 0), -prices[i] + go(i + 1, 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function maxProfitFee(prices: number[], fee: number): number {\n  const n = prices.length;\n  const memo = new Map<number, number>();\n  const go = (i: number, holding: number): number => {\n    if (i >= n) return 0;\n    const key = i * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1), prices[i] - fee + go(i + 1, 0));\n    else v = Math.max(go(i + 1, 0), -prices[i] + go(i + 1, 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d5-paint-house",
    slug: "paint-house",
    title: "Paint House",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each row of the cost matrix gives the cost to paint a house red, blue, or green. No two adjacent houses may share a color. Return the minimum total cost.",
    examples: [
      { input: "[[17,2,17],[16,16,5],[14,3,19]]", output: "10" },
      { input: "[[7,6,2]]", output: "2" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= houses <= 100", "each row has exactly 3 costs"],
    functionName: "paintHouse",
    starter: {
      js: "function paintHouse(costs) {\n  // Min cost, no two adjacent houses share a color.\n}\n",
      ts: "function paintHouse(costs: number[][]): number {\n  // Min cost, no two adjacent houses share a color.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[17, 2, 17], [16, 16, 5], [14, 3, 19]]], expected: 10 },
      { args: [[[7, 6, 2]]], expected: 2 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[[1, 2, 3], [1, 2, 3]]], expected: 3 },
      { args: [[[5, 8, 6], [19, 14, 13], [7, 5, 12], [14, 15, 17], [3, 20, 10]]], expected: 43 },
      { args: [[[1, 1, 1], [1, 1, 1]]], expected: 2 },
      { args: [[[3, 5, 3], [6, 17, 6], [7, 13, 18], [9, 10, 18]]], expected: 26 },
      { args: [[[2, 3, 4], [5, 6, 1]]], expected: 3 },
      { args: [[[7, 6, 2]]], expected: 2 },
    ],
    hints: [
      "The state is the color chosen for the previous house.",
      "Painting house i color c costs cost[i][c] + min of the other two colors from house i-1.",
      "Only the three running totals from the previous row are needed.",
    ],
    solutions: [
      {
        label: "Rolling three totals",
        approach: "Carry the cheapest cost to reach each color at the previous house.",
        js: "function paintHouse(costs) {\n  if (costs.length === 0) return 0;\n  let a = costs[0][0], b = costs[0][1], c = costs[0][2];\n  for (let i = 1; i < costs.length; i++) {\n    const na = costs[i][0] + Math.min(b, c);\n    const nb = costs[i][1] + Math.min(a, c);\n    const nc = costs[i][2] + Math.min(a, b);\n    a = na; b = nb; c = nc;\n  }\n  return Math.min(a, b, c);\n}\n",
        ts: "function paintHouse(costs: number[][]): number {\n  if (costs.length === 0) return 0;\n  let a = costs[0][0], b = costs[0][1], c = costs[0][2];\n  for (let i = 1; i < costs.length; i++) {\n    const na = costs[i][0] + Math.min(b, c);\n    const nb = costs[i][1] + Math.min(a, c);\n    const nc = costs[i][2] + Math.min(a, b);\n    a = na; b = nb; c = nc;\n  }\n  return Math.min(a, b, c);\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Memoized recursion",
        approach: "Choose a color differing from the previous house, cached by (house, prev).",
        js: "function paintHouse(costs) {\n  const n = costs.length;\n  if (n === 0) return 0;\n  const memo = new Map();\n  const go = (i, prev) => {\n    if (i === n) return 0;\n    const key = i * 4 + prev;\n    if (memo.has(key)) return memo.get(key);\n    let best = Infinity;\n    for (let c = 0; c < 3; c++)\n      if (c !== prev) best = Math.min(best, costs[i][c] + go(i + 1, c));\n    memo.set(key, best);\n    return best;\n  };\n  return go(0, 3);\n}\n",
        ts: "function paintHouse(costs: number[][]): number {\n  const n = costs.length;\n  if (n === 0) return 0;\n  const memo = new Map<number, number>();\n  const go = (i: number, prev: number): number => {\n    if (i === n) return 0;\n    const key = i * 4 + prev;\n    if (memo.has(key)) return memo.get(key);\n    let best = Infinity;\n    for (let c = 0; c < 3; c++)\n      if (c !== prev) best = Math.min(best, costs[i][c] + go(i + 1, c));\n    memo.set(key, best);\n    return best;\n  };\n  return go(0, 3);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d5-stock-k",
    slug: "best-time-stock-k",
    title: "Best Time to Buy and Sell Stock IV",
    difficulty: "hard",
    patternIds: P,
    statement:
      "You may complete at most `k` transactions (each a buy then a later sell, holding one share at a time). Return the maximum profit.",
    examples: [
      { input: "2, [2,4,1]", output: "2" },
      { input: "2, [3,2,6,5,0,3]", output: "7" },
      { input: "2, [1,2,3,4,5]", output: "4" },
    ],
    constraints: ["0 <= k <= 100", "0 <= prices.length <= 1000"],
    functionName: "maxProfitK",
    starter: {
      js: "function maxProfitK(k, prices) {\n  // Max profit with at most k transactions.\n}\n",
      ts: "function maxProfitK(k: number, prices: number[]): number {\n  // Max profit with at most k transactions.\n  return 0;\n}\n",
    },
    visible: [
      { args: [2, [2, 4, 1]], expected: 2 },
      { args: [2, [3, 2, 6, 5, 0, 3]], expected: 7 },
      { args: [2, [1, 2, 3, 4, 5]], expected: 4 },
    ],
    hidden: [
      { args: [0, [1, 2]], expected: 0 },
      { args: [2, []], expected: 0 },
      { args: [1, [7, 1, 5, 3, 6, 4]], expected: 5 },
      { args: [3, [1, 2, 3, 4, 5, 6]], expected: 5 },
      { args: [2, [6, 1, 3, 2, 4, 7]], expected: 7 },
      { args: [2, [3, 3, 5, 0, 0, 3, 1, 4]], expected: 6 },
    ],
    hints: [
      "Extend the hold/cash machine with a transaction counter.",
      "For each price, update buy[j] and sell[j] for j from 1..k.",
      "buy[j] = max(buy[j], sell[j-1] - price); sell[j] = max(sell[j], buy[j] + price).",
    ],
    solutions: [
      {
        label: "k-layer state machine",
        approach: "Maintain best buy/sell profit for each transaction count.",
        js: "function maxProfitK(k, prices) {\n  const n = prices.length;\n  if (n === 0 || k === 0) return 0;\n  const buy = new Array(k + 1).fill(-Infinity);\n  const sell = new Array(k + 1).fill(0);\n  for (const p of prices) {\n    for (let j = 1; j <= k; j++) {\n      buy[j] = Math.max(buy[j], sell[j - 1] - p);\n      sell[j] = Math.max(sell[j], buy[j] + p);\n    }\n  }\n  return sell[k];\n}\n",
        ts: "function maxProfitK(k: number, prices: number[]): number {\n  const n = prices.length;\n  if (n === 0 || k === 0) return 0;\n  const buy = new Array(k + 1).fill(-Infinity);\n  const sell = new Array(k + 1).fill(0);\n  for (const p of prices) {\n    for (let j = 1; j <= k; j++) {\n      buy[j] = Math.max(buy[j], sell[j - 1] - p);\n      sell[j] = Math.max(sell[j], buy[j] + p);\n    }\n  }\n  return sell[k];\n}\n",
        time: "O(n·k)",
        space: "O(k)",
      },
      {
        label: "Memoized recursion",
        approach: "Recurse over day, holding-state, and transactions left; sell decrements.",
        js: "function maxProfitK(k, prices) {\n  const n = prices.length;\n  const memo = new Map();\n  const go = (i, holding, left) => {\n    if (i >= n || left === 0) return 0;\n    const key = (i * (k + 1) + left) * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1, left), prices[i] + go(i + 1, 0, left - 1));\n    else v = Math.max(go(i + 1, 0, left), -prices[i] + go(i + 1, 1, left));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0, k);\n}\n",
        ts: "function maxProfitK(k: number, prices: number[]): number {\n  const n = prices.length;\n  const memo = new Map<number, number>();\n  const go = (i: number, holding: number, left: number): number => {\n    if (i >= n || left === 0) return 0;\n    const key = (i * (k + 1) + left) * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1, left), prices[i] + go(i + 1, 0, left - 1));\n    else v = Math.max(go(i + 1, 0, left), -prices[i] + go(i + 1, 1, left));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0, k);\n}\n",
        time: "O(n·k)",
        space: "O(n·k)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "d5-stock-3",
    slug: "best-time-stock-two-transactions",
    title: "Best Time to Buy and Sell Stock III",
    difficulty: "hard",
    patternIds: P,
    statement:
      "You may complete at most two transactions. Return the maximum profit (hold at most one share at a time).",
    examples: [
      { input: "[3,3,5,0,0,3,1,4]", output: "6" },
      { input: "[1,2,3,4,5]", output: "4" },
      { input: "[7,6,4,3,1]", output: "0" },
    ],
    constraints: ["0 <= prices.length <= 100000"],
    functionName: "maxProfit3",
    starter: {
      js: "function maxProfit3(prices) {\n  // Max profit with at most two transactions.\n}\n",
      ts: "function maxProfit3(prices: number[]): number {\n  // Max profit with at most two transactions.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[3, 3, 5, 0, 0, 3, 1, 4]], expected: 6 },
      { args: [[1, 2, 3, 4, 5]], expected: 4 },
      { args: [[7, 6, 4, 3, 1]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[1]], expected: 0 },
      { args: [[1, 2, 4, 2, 5, 7, 2, 4, 9, 0]], expected: 13 },
      { args: [[2, 1, 4]], expected: 3 },
      { args: [[6, 1, 3, 2, 4, 7]], expected: 7 },
      { args: [[3, 2, 6, 5, 0, 3]], expected: 7 },
    ],
    hints: [
      "This is the at-most-k problem with k fixed to 2.",
      "Track buy1, sell1, buy2, sell2 across the sweep.",
      "buy2 builds on sell1's profit, so update in order.",
    ],
    solutions: [
      {
        label: "Four-variable state machine",
        approach: "Best profit after the first buy/sell and the second buy/sell.",
        js: "function maxProfit3(prices) {\n  let buy1 = -Infinity, sell1 = 0, buy2 = -Infinity, sell2 = 0;\n  for (const p of prices) {\n    buy1 = Math.max(buy1, -p);\n    sell1 = Math.max(sell1, buy1 + p);\n    buy2 = Math.max(buy2, sell1 - p);\n    sell2 = Math.max(sell2, buy2 + p);\n  }\n  return sell2;\n}\n",
        ts: "function maxProfit3(prices: number[]): number {\n  let buy1 = -Infinity, sell1 = 0, buy2 = -Infinity, sell2 = 0;\n  for (const p of prices) {\n    buy1 = Math.max(buy1, -p);\n    sell1 = Math.max(sell1, buy1 + p);\n    buy2 = Math.max(buy2, sell1 - p);\n    sell2 = Math.max(sell2, buy2 + p);\n  }\n  return sell2;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Memoized recursion",
        approach: "The k-transaction recursion with k = 2.",
        js: "function maxProfit3(prices) {\n  const n = prices.length, k = 2;\n  const memo = new Map();\n  const go = (i, holding, left) => {\n    if (i >= n || left === 0) return 0;\n    const key = (i * (k + 1) + left) * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1, left), prices[i] + go(i + 1, 0, left - 1));\n    else v = Math.max(go(i + 1, 0, left), -prices[i] + go(i + 1, 1, left));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0, k);\n}\n",
        ts: "function maxProfit3(prices: number[]): number {\n  const n = prices.length, k = 2;\n  const memo = new Map<number, number>();\n  const go = (i: number, holding: number, left: number): number => {\n    if (i >= n || left === 0) return 0;\n    const key = (i * (k + 1) + left) * 2 + holding;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (holding) v = Math.max(go(i + 1, 1, left), prices[i] + go(i + 1, 0, left - 1));\n    else v = Math.max(go(i + 1, 0, left), -prices[i] + go(i + 1, 1, left));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0, k);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d5-matrix-chain",
    slug: "matrix-chain-multiplication",
    title: "Matrix Chain Multiplication",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given dimensions where matrix `i` is `dims[i]` × `dims[i+1]`, return the minimum number of scalar multiplications needed to multiply the whole chain (choosing the parenthesization).",
    examples: [
      { input: "[40,20,30,10,30]", output: "26000" },
      { input: "[10,20,30]", output: "6000" },
      { input: "[10,20]", output: "0" },
    ],
    constraints: ["2 <= dims.length <= 100"],
    functionName: "matrixChainOrder",
    starter: {
      js: "function matrixChainOrder(dims) {\n  // Min scalar multiplications for the chain.\n}\n",
      ts: "function matrixChainOrder(dims: number[]): number {\n  // Min scalar multiplications for the chain.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[40, 20, 30, 10, 30]], expected: 26000 },
      { args: [[10, 20, 30]], expected: 6000 },
      { args: [[10, 20]], expected: 0 },
    ],
    hidden: [
      { args: [[10, 20, 30, 40, 30]], expected: 30000 },
      { args: [[1, 2, 3, 4]], expected: 18 },
      { args: [[2, 3, 6, 4, 5]], expected: 124 },
      { args: [[4, 10, 3, 12, 20, 7]], expected: 1344 },
      { args: [[5, 4, 6, 2, 7]], expected: 158 },
      { args: [[10, 20, 30, 40, 30]], expected: 30000 },
    ],
    hints: [
      "This is interval DP: split the chain at some matrix k.",
      "cost(i,j) = min over k of cost(i,k) + cost(k+1,j) + dims[i]·dims[k+1]·dims[j+1].",
      "Fill by increasing chain length so the sub-chains are ready.",
    ],
    solutions: [
      {
        label: "Interval memoization",
        approach: "Recurse on matrix ranges, trying every split point, cached.",
        js: "function matrixChainOrder(dims) {\n  const n = dims.length - 1;\n  if (n <= 1) return 0;\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i === j) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let best = Infinity;\n    for (let k = i; k < j; k++)\n      best = Math.min(best, go(i, k) + go(k + 1, j) + dims[i] * dims[k + 1] * dims[j + 1]);\n    memo.set(key, best);\n    return best;\n  };\n  return go(0, n - 1);\n}\n",
        ts: "function matrixChainOrder(dims: number[]): number {\n  const n = dims.length - 1;\n  if (n <= 1) return 0;\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i === j) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let best = Infinity;\n    for (let k = i; k < j; k++)\n      best = Math.min(best, go(i, k) + go(k + 1, j) + dims[i] * dims[k + 1] * dims[j + 1]);\n    memo.set(key, best);\n    return best;\n  };\n  return go(0, n - 1);\n}\n",
        time: "O(n³)",
        space: "O(n²)",
      },
      {
        label: "Interval tabulation",
        approach: "Fill dp[i][j] by increasing chain length.",
        js: "function matrixChainOrder(dims) {\n  const n = dims.length - 1;\n  if (n <= 1) return 0;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(0));\n  for (let len = 2; len <= n; len++)\n    for (let i = 0; i + len - 1 < n; i++) {\n      const j = i + len - 1;\n      dp[i][j] = Infinity;\n      for (let k = i; k < j; k++)\n        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1]);\n    }\n  return dp[0][n - 1];\n}\n",
        ts: "function matrixChainOrder(dims: number[]): number {\n  const n = dims.length - 1;\n  if (n <= 1) return 0;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(0));\n  for (let len = 2; len <= n; len++)\n    for (let i = 0; i + len - 1 < n; i++) {\n      const j = i + len - 1;\n      dp[i][j] = Infinity;\n      for (let k = i; k < j; k++)\n        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1]);\n    }\n  return dp[0][n - 1];\n}\n",
        time: "O(n³)",
        space: "O(n²)",
      },
    ],
  },
  {
    id: "d5-burst-balloons",
    slug: "burst-balloons",
    title: "Burst Balloons",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Bursting balloon `i` earns `left · nums[i] · right`, where left/right are the still-unburst neighbours (treat out-of-range as 1). Return the maximum coins from bursting all balloons.",
    examples: [
      { input: "[3,1,5,8]", output: "167" },
      { input: "[1,5]", output: "10" },
      { input: "[7]", output: "7" },
    ],
    constraints: ["0 <= nums.length <= 300"],
    functionName: "burstBalloons",
    starter: {
      js: "function burstBalloons(nums) {\n  // Max coins from bursting all balloons.\n}\n",
      ts: "function burstBalloons(nums: number[]): number {\n  // Max coins from bursting all balloons.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[3, 1, 5, 8]], expected: 167 },
      { args: [[1, 5]], expected: 10 },
      { args: [[7]], expected: 7 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[1, 2, 3]], expected: 12 },
      { args: [[9, 76, 64, 21]], expected: 116718 },
      { args: [[3, 7]], expected: 28 },
      { args: [[2, 4, 3, 5, 1]], expected: 120 },
      { args: [[1, 5]], expected: 10 },
    ],
    hints: [
      "Think of the LAST balloon to burst in a range — its neighbours are the range's borders.",
      "Pad with 1s: dp[i][j] over the open interval, splitting on the last-burst k.",
      "dp[i][j] = max over k of dp[i][k] + dp[k][j] + b[i]·b[k]·b[j].",
    ],
    solutions: [
      {
        label: "Interval memoization (last to burst)",
        approach: "Pick which balloon bursts last in each padded interval.",
        js: "function burstBalloons(nums) {\n  const b = [1, ...nums, 1];\n  const n = b.length;\n  const memo = new Map();\n  const go = (i, j) => {\n    if (j - i < 2) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let best = 0;\n    for (let k = i + 1; k < j; k++)\n      best = Math.max(best, go(i, k) + go(k, j) + b[i] * b[k] * b[j]);\n    memo.set(key, best);\n    return best;\n  };\n  return go(0, n - 1);\n}\n",
        ts: "function burstBalloons(nums: number[]): number {\n  const b = [1, ...nums, 1];\n  const n = b.length;\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (j - i < 2) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let best = 0;\n    for (let k = i + 1; k < j; k++)\n      best = Math.max(best, go(i, k) + go(k, j) + b[i] * b[k] * b[j]);\n    memo.set(key, best);\n    return best;\n  };\n  return go(0, n - 1);\n}\n",
        time: "O(n³)",
        space: "O(n²)",
      },
      {
        label: "Interval tabulation",
        approach: "Fill dp over intervals of increasing length on the padded array.",
        js: "function burstBalloons(nums) {\n  const b = [1, ...nums, 1];\n  const n = b.length;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(0));\n  for (let len = 2; len < n; len++)\n    for (let i = 0; i + len < n; i++) {\n      const j = i + len;\n      for (let k = i + 1; k < j; k++)\n        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + b[i] * b[k] * b[j]);\n    }\n  return dp[0][n - 1];\n}\n",
        ts: "function burstBalloons(nums: number[]): number {\n  const b = [1, ...nums, 1];\n  const n = b.length;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(0));\n  for (let len = 2; len < n; len++)\n    for (let i = 0; i + len < n; i++) {\n      const j = i + len;\n      for (let k = i + 1; k < j; k++)\n        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + b[i] * b[k] * b[j]);\n    }\n  return dp[0][n - 1];\n}\n",
        time: "O(n³)",
        space: "O(n²)",
      },
    ],
  },
  {
    id: "d5-min-score-triangulation",
    slug: "min-score-triangulation",
    title: "Minimum Score Triangulation of Polygon",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given the vertex values of a convex polygon in order, a triangulation's score is the sum, over its triangles, of the product of the three vertex values. Return the minimum possible total score.",
    examples: [
      { input: "[1,2,3]", output: "6" },
      { input: "[3,7,4,5]", output: "144" },
      { input: "[1,3,1,4,1,5]", output: "13" },
    ],
    constraints: ["3 <= values.length <= 50"],
    functionName: "minScoreTriangulation",
    starter: {
      js: "function minScoreTriangulation(values) {\n  // Min total score over all triangulations.\n}\n",
      ts: "function minScoreTriangulation(values: number[]): number {\n  // Min total score over all triangulations.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: 6 },
      { args: [[3, 7, 4, 5]], expected: 144 },
      { args: [[1, 3, 1, 4, 1, 5]], expected: 13 },
    ],
    hidden: [
      { args: [[1, 1, 1, 1]], expected: 2 },
      { args: [[2, 3, 4, 5]], expected: 64 },
      { args: [[10, 20, 30]], expected: 6000 },
      { args: [[1, 2, 3, 4]], expected: 18 },
      { args: [[6, 3, 7, 4, 2]], expected: 134 },
      { args: [[3, 7, 4, 5]], expected: 144 },
    ],
    hints: [
      "For a range, fix the edge (i, j) and choose the third vertex k inside it.",
      "dp[i][j] = min over k of dp[i][k] + dp[k][j] + values[i]·values[k]·values[j].",
      "Ranges shorter than two edges contribute 0; fill by increasing width.",
    ],
    solutions: [
      {
        label: "Interval memoization",
        approach: "Pick the apex vertex k for each edge (i, j), cached by interval.",
        js: "function minScoreTriangulation(values) {\n  const n = values.length;\n  const memo = new Map();\n  const go = (i, j) => {\n    if (j - i < 2) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let best = Infinity;\n    for (let k = i + 1; k < j; k++)\n      best = Math.min(best, go(i, k) + go(k, j) + values[i] * values[k] * values[j]);\n    memo.set(key, best);\n    return best;\n  };\n  return go(0, n - 1);\n}\n",
        ts: "function minScoreTriangulation(values: number[]): number {\n  const n = values.length;\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (j - i < 2) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let best = Infinity;\n    for (let k = i + 1; k < j; k++)\n      best = Math.min(best, go(i, k) + go(k, j) + values[i] * values[k] * values[j]);\n    memo.set(key, best);\n    return best;\n  };\n  return go(0, n - 1);\n}\n",
        time: "O(n³)",
        space: "O(n²)",
      },
      {
        label: "Interval tabulation",
        approach: "Fill dp over widening intervals, choosing the best apex.",
        js: "function minScoreTriangulation(values) {\n  const n = values.length;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(0));\n  for (let len = 2; len < n; len++)\n    for (let i = 0; i + len < n; i++) {\n      const j = i + len;\n      dp[i][j] = Infinity;\n      for (let k = i + 1; k < j; k++)\n        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]);\n    }\n  return dp[0][n - 1];\n}\n",
        ts: "function minScoreTriangulation(values: number[]): number {\n  const n = values.length;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(0));\n  for (let len = 2; len < n; len++)\n    for (let i = 0; i + len < n; i++) {\n      const j = i + len;\n      dp[i][j] = Infinity;\n      for (let k = i + 1; k < j; k++)\n        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]);\n    }\n  return dp[0][n - 1];\n}\n",
        time: "O(n³)",
        space: "O(n²)",
      },
    ],
  },
];

export const dp5Problems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const dp5Mcqs: QuizQuestion[] = [
  {
    id: "s6-d5-state",
    kind: "mcq",
    prompt: "Buy/sell problems with rules like cooldown or a fee are cleanest to model as:",
    options: [
      "a greedy scan with no state",
      "a finite state machine tracking the best profit in each state per day",
      "a sorting problem",
      "an interval DP over price ranges",
    ],
    answerIndex: 1,
    explanation:
      "Holding, sold, and free are states; the transitions between them encode buying, selling, and any cooldown or fee.",
  },
  {
    id: "s6-d5-interval",
    kind: "mcq",
    prompt: "Interval DP (matrix chain, burst balloons, triangulation) must fill subproblems:",
    options: [
      "in order of increasing interval length, choosing a split point",
      "strictly left to right by index",
      "in random order",
      "only for intervals of length 1",
    ],
    answerIndex: 0,
    explanation:
      "A range's answer combines two shorter ranges around a chosen split k, so all shorter intervals must be solved first.",
  },
];

export const dp5Module: Module = {
  id: "m-pat-dp-state",
  stageId: S,
  title: "Dynamic Programming V — State Machines & Intervals",
  kind: "patternModule",
  summary:
    "DP where the state is a mode you're in (holding/sold/free) or a range you're solving — buy/sell machines and interval DP.",
  lessonSections: [
    {
      heading: "When the state is a mode",
      body: `Some problems are best seen as a **finite state machine**: on each day you are in one of a few states, and the transitions between them carry the rules. The buy-and-sell family is the classic example — states are *holding a share*, *just sold* (cooldown), and *free to buy* — and each variant (one transaction, unlimited, cooldown, fee, at most k) is the same machine with a tweak.

\`\`\`js
// Unlimited trades with a per-sale fee
function withFee(prices, fee) {
  let hold = -Infinity, cash = 0;
  for (const p of prices) {
    const prevHold = hold;
    hold = Math.max(hold, cash - p);       // buy or keep holding
    cash = Math.max(cash, prevHold + p - fee); // sell (pay the fee) or stay
  }
  return cash;
}
\`\`\`

The three stages still apply: write the recursion over \`(day, state)\`, memoize it, then collapse to a few rolling variables.`,
    },
    {
      heading: "When the state is a range",
      body: `**Interval DP** is the other shape in this module: the state is a sub-range \`[i, j]\` and you solve it by choosing a **split point** or a **last element to process**. Matrix chain multiplication, burst balloons, and polygon triangulation all fit — the trick in burst balloons is to think about the balloon burst **last** in a range, because then its neighbours are exactly the range borders.

\`\`\`ts
// Interval DP skeleton
for (let len = 2; len <= n; len++)
  for (let i = 0; i + len - 1 < n; i++) {
    const j = i + len - 1;
    for (let k = i; k < j; k++)
      dp[i][j] = best(dp[i][j], dp[i][k] + dp[k + 1][j] + costOfSplit(i, k, j));
  }
\`\`\`

Fill by **increasing interval length** so both halves are ready.`,
    },
    {
      heading: "Recognition cues & pitfalls",
      body: `**State-machine cues:** a sequence of days/steps with a small set of modes and rules for switching (buy/sell, on/off, paint colors that can't repeat).

**Interval cues:** "combine a range by splitting it," costs that depend on the range borders, or "the last thing you remove" framing.

**Pitfalls:** ordering the state updates wrong (buy2 must see the updated sell1); forgetting the transaction fee is charged **once**; in interval DP, iterating indices instead of **lengths**, so an inner range isn't ready; and off-by-one in the padded arrays (burst balloons adds a 1 on each end). Every drill ships two solutions — a compact machine/tabulation and a memoized recursion. Work them easy to hard.`,
    },
  ],
  guidedExampleProblemId: "d5-stock-1",
  drillProblemIds: [
    "d5-stock-1",
    "d5-stock-2",
    "d5-stock-cooldown",
    "d5-stock-fee",
    "d5-paint-house",
    "d5-stock-k",
  ],
  testPoolProblemIds: [
    "d5-stock-3",
    "d5-matrix-chain",
    "d5-burst-balloons",
    "d5-min-score-triangulation",
  ],
  complexityQuestionIds: ["s6-d5-state", "s6-d5-interval"],
  badgeId: "badge-pat-dp-state",
  prerequisiteModuleIds: ["m-pat-dp-string"],
};
