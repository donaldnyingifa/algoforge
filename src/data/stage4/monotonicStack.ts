import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s4";
const P = ["monotonic-stack"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "ms-final-prices",
    slug: "final-prices",
    title: "Final Prices with Discount",
    difficulty: "easy",
    patternIds: P,
    statement:
      "For each price, you get a discount equal to the **next** price that is less than or equal to it (looking rightward). If there is no such price, you pay full. Return the final prices.",
    examples: [
      { input: "[8,4,6,2,3]", output: "[4,2,4,2,3]" },
      { input: "[1,2,3,4,5]", output: "[1,2,3,4,5]" },
      { input: "[10,1,1,6]", output: "[9,0,1,6]" },
    ],
    constraints: ["0 <= prices.length <= 10000"],
    functionName: "finalPrices",
    starter: {
      js: "function finalPrices(prices) {\n  // Subtract the next price <= this one.\n}\n",
      ts: "function finalPrices(prices: number[]): number[] {\n  // Subtract the next price <= this one.\n  return [];\n}\n",
    },
    visible: [
      { args: [[8, 4, 6, 2, 3]], expected: [4, 2, 4, 2, 3] },
      { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
      { args: [[10, 1, 1, 6]], expected: [9, 0, 1, 6] },
    ],
    hidden: [
      { args: [[]], expected: [] },
      { args: [[5]], expected: [5] },
      { args: [[2, 2]], expected: [0, 2] },
      { args: [[3, 1, 2]], expected: [2, 1, 2] },
      { args: [[1, 1, 1]], expected: [0, 0, 1] },
      { args: [[9, 8, 9]], expected: [1, 8, 9] },
    ],
    hints: [
      "For each index you need the next element to its right that is ≤ it.",
      "Keep a stack of indices still waiting for their discount.",
      "When a new price arrives, it resolves every waiting index whose price is ≥ it.",
    ],
    solutions: [
      {
        label: "Monotonic stack",
        approach: "Waiting indices are resolved as soon as a small-enough price appears.",
        js: "function finalPrices(prices) {\n  const out = [...prices];\n  const stack = [];\n  for (let i = 0; i < prices.length; i++) {\n    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {\n      const j = stack.pop();\n      out[j] = prices[j] - prices[i];\n    }\n    stack.push(i);\n  }\n  return out;\n}\n",
        ts: "function finalPrices(prices: number[]): number[] {\n  const out = [...prices];\n  const stack: number[] = [];\n  for (let i = 0; i < prices.length; i++) {\n    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {\n      const j = stack.pop() as number;\n      out[j] = prices[j] - prices[i];\n    }\n    stack.push(i);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function finalPrices(prices) {\n  // Start with full prices; entries change only when a discount is found.\n  const out = [...prices];\n  // Keep indices whose next smaller-or-equal price is still unknown.\n  const stack = [];\n  for (let i = 0; i < prices.length; i++) {\n    // The current price resolves every more-expensive waiting item on top.\n    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {\n      const waitingIndex = stack.pop();\n      // The first qualifying price to the right is the required discount.\n      out[waitingIndex] = prices[waitingIndex] - prices[i];\n    }\n    // This price now waits for its own future discount.\n    stack.push(i);\n  }\n  return out;\n}\n",
          ts: "function finalPrices(prices: number[]): number[] {\n  // Start with full prices; entries change only when a discount is found.\n  const out = [...prices];\n  // Keep indices whose next smaller-or-equal price is still unknown.\n  const stack: number[] = [];\n  for (let i = 0; i < prices.length; i++) {\n    // The current price resolves every more-expensive waiting item on top.\n    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {\n      const waitingIndex = stack.pop() as number;\n      // The first qualifying price to the right is the required discount.\n      out[waitingIndex] = prices[waitingIndex] - prices[i];\n    }\n    // This price now waits for its own future discount.\n    stack.push(i);\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force",
        approach: "Scan rightward for each price.",
        js: "function finalPrices(prices) {\n  const out = [];\n  for (let i = 0; i < prices.length; i++) {\n    let discount = 0;\n    for (let j = i + 1; j < prices.length; j++) {\n      if (prices[j] <= prices[i]) { discount = prices[j]; break; }\n    }\n    out.push(prices[i] - discount);\n  }\n  return out;\n}\n",
        ts: "function finalPrices(prices: number[]): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < prices.length; i++) {\n    let discount = 0;\n    for (let j = i + 1; j < prices.length; j++) {\n      if (prices[j] <= prices[i]) { discount = prices[j]; break; }\n    }\n    out.push(prices[i] - discount);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function finalPrices(prices) {\n  const out = [];\n  // Resolve each price independently by searching to its right.\n  for (let i = 0; i < prices.length; i++) {\n    // A zero discount preserves the full price if no match exists.\n    let discount = 0;\n    for (let j = i + 1; j < prices.length; j++) {\n      // Stop at the first smaller-or-equal price, not merely any such price.\n      if (prices[j] <= prices[i]) {\n        discount = prices[j];\n        break;\n      }\n    }\n    out.push(prices[i] - discount);\n  }\n  return out;\n}\n",
          ts: "function finalPrices(prices: number[]): number[] {\n  const out: number[] = [];\n  // Resolve each price independently by searching to its right.\n  for (let i = 0; i < prices.length; i++) {\n    // A zero discount preserves the full price if no match exists.\n    let discount = 0;\n    for (let j = i + 1; j < prices.length; j++) {\n      // Stop at the first smaller-or-equal price, not merely any such price.\n      if (prices[j] <= prices[i]) {\n        discount = prices[j];\n        break;\n      }\n    }\n    out.push(prices[i] - discount);\n  }\n  return out;\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ms-baseball-score",
    slug: "baseball-score",
    title: "Score Keeper",
    difficulty: "easy",
    patternIds: P,
    statement:
      "You are given a list of operations as strings. A number pushes that score; `\"C\"` cancels the previous score; `\"D\"` pushes double the previous score; `\"+\"` pushes the sum of the previous two scores. Return the total of all recorded scores.",
    examples: [
      { input: '["5","2","C","D","+"]', output: "30" },
      { input: '["1"]', output: "1" },
      { input: "[]", output: "0" },
    ],
    constraints: ["operations are valid when applied"],
    functionName: "baseballScore",
    starter: {
      js: "function baseballScore(ops) {\n  // Apply the operations on a stack; return the total.\n}\n",
      ts: "function baseballScore(ops: string[]): number {\n  // Apply the operations on a stack; return the total.\n  return 0;\n}\n",
    },
    visible: [
      { args: [["5", "2", "C", "D", "+"]], expected: 30 },
      { args: [["1"]], expected: 1 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [["5", "-2", "4", "C", "D", "9", "+", "+"]], expected: 27 },
      { args: [["1", "C"]], expected: 0 },
      { args: [["1", "D"]], expected: 3 },
      { args: [["2", "3", "+"]], expected: 10 },
      { args: [["-1", "-1", "+"]], expected: -4 },
      { args: [["3", "C", "3"]], expected: 3 },
    ],
    hints: [
      "Each operation only touches the most recent scores — that's a stack.",
      "\"C\" pops, \"D\" pushes 2× the top, \"+\" pushes the sum of the top two.",
      "Anything else is a number: push it. Finally sum the stack.",
    ],
    solutions: [
      {
        label: "Stack of scores",
        approach: "Apply each operation to the top of the stack, then total it.",
        js: "function baseballScore(ops) {\n  const stack = [];\n  for (const op of ops) {\n    if (op === 'C') stack.pop();\n    else if (op === 'D') stack.push(stack[stack.length - 1] * 2);\n    else if (op === '+') stack.push(stack[stack.length - 1] + stack[stack.length - 2]);\n    else stack.push(Number(op));\n  }\n  return stack.reduce((s, v) => s + v, 0);\n}\n",
        ts: "function baseballScore(ops: string[]): number {\n  const stack: number[] = [];\n  for (const op of ops) {\n    if (op === 'C') stack.pop();\n    else if (op === 'D') stack.push(stack[stack.length - 1] * 2);\n    else if (op === '+') stack.push(stack[stack.length - 1] + stack[stack.length - 2]);\n    else stack.push(Number(op));\n  }\n  return stack.reduce((s, v) => s + v, 0);\n}\n",
        commentedCode: {
          js: "function baseballScore(ops) {\n  // The stack contains exactly the scores that are still on the record.\n  const stack = [];\n  for (const op of ops) {\n    // Cancel the most recently recorded score.\n    if (op === 'C') stack.pop();\n    // Double the latest valid score and record the result.\n    else if (op === 'D') stack.push(stack[stack.length - 1] * 2);\n    // Add the two latest valid scores and record that sum.\n    else if (op === '+') stack.push(stack[stack.length - 1] + stack[stack.length - 2]);\n    // Numeric text represents a new independent score.\n    else stack.push(Number(op));\n  }\n  // Only uncancelled scores remain, so their sum is the final total.\n  return stack.reduce((sum, score) => sum + score, 0);\n}\n",
          ts: "function baseballScore(ops: string[]): number {\n  // The stack contains exactly the scores that are still on the record.\n  const stack: number[] = [];\n  for (const op of ops) {\n    // Cancel the most recently recorded score.\n    if (op === 'C') stack.pop();\n    // Double the latest valid score and record the result.\n    else if (op === 'D') stack.push(stack[stack.length - 1] * 2);\n    // Add the two latest valid scores and record that sum.\n    else if (op === '+') stack.push(stack[stack.length - 1] + stack[stack.length - 2]);\n    // Numeric text represents a new independent score.\n    else stack.push(Number(op));\n  }\n  // Only uncancelled scores remain, so their sum is the final total.\n  return stack.reduce((sum, score) => sum + score, 0);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Running total",
        approach: "Keep the stack but maintain the sum as you go.",
        js: "function baseballScore(ops) {\n  const stack = [];\n  let total = 0;\n  for (const op of ops) {\n    if (op === 'C') { total -= stack.pop(); }\n    else {\n      let v;\n      if (op === 'D') v = stack[stack.length - 1] * 2;\n      else if (op === '+') v = stack[stack.length - 1] + stack[stack.length - 2];\n      else v = Number(op);\n      stack.push(v);\n      total += v;\n    }\n  }\n  return total;\n}\n",
        ts: "function baseballScore(ops: string[]): number {\n  const stack: number[] = [];\n  let total = 0;\n  for (const op of ops) {\n    if (op === 'C') { total -= stack.pop() as number; }\n    else {\n      let v: number;\n      if (op === 'D') v = stack[stack.length - 1] * 2;\n      else if (op === '+') v = stack[stack.length - 1] + stack[stack.length - 2];\n      else v = Number(op);\n      stack.push(v);\n      total += v;\n    }\n  }\n  return total;\n}\n",
        commentedCode: {
          js: "function baseballScore(ops) {\n  // Keep prior scores for stack-based operations.\n  const stack = [];\n  // Update the total with each operation so no final summation is needed.\n  let total = 0;\n  for (const op of ops) {\n    if (op === 'C') {\n      // Removing a score must also remove its contribution to the total.\n      total -= stack.pop();\n    } else {\n      let score;\n      // Compute the new score from the latest valid stack entries when required.\n      if (op === 'D') score = stack[stack.length - 1] * 2;\n      else if (op === '+') score = stack[stack.length - 1] + stack[stack.length - 2];\n      else score = Number(op);\n      stack.push(score);\n      total += score;\n    }\n  }\n  return total;\n}\n",
          ts: "function baseballScore(ops: string[]): number {\n  // Keep prior scores for stack-based operations.\n  const stack: number[] = [];\n  // Update the total with each operation so no final summation is needed.\n  let total = 0;\n  for (const op of ops) {\n    if (op === 'C') {\n      // Removing a score must also remove its contribution to the total.\n      total -= stack.pop() as number;\n    } else {\n      let score: number;\n      // Compute the new score from the latest valid stack entries when required.\n      if (op === 'D') score = stack[stack.length - 1] * 2;\n      else if (op === '+') score = stack[stack.length - 1] + stack[stack.length - 2];\n      else score = Number(op);\n      stack.push(score);\n      total += score;\n    }\n  }\n  return total;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ms-daily-temperatures",
    slug: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "medium",
    patternIds: P,
    statement:
      "For each day, return how many days you must wait for a strictly warmer temperature, or 0 if it never gets warmer.",
    examples: [
      { input: "[73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" },
      { input: "[30,40,50,60]", output: "[1,1,1,0]" },
      { input: "[30,60,90]", output: "[1,1,0]" },
    ],
    constraints: ["0 <= temps.length <= 10000"],
    functionName: "dailyTemperatures",
    starter: {
      js: "function dailyTemperatures(temps) {\n  // Days until a warmer temperature, else 0.\n}\n",
      ts: "function dailyTemperatures(temps: number[]): number[] {\n  // Days until a warmer temperature, else 0.\n  return [];\n}\n",
    },
    visible: [
      { args: [[73, 74, 75, 71, 69, 72, 76, 73]], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
      { args: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
      { args: [[30, 60, 90]], expected: [1, 1, 0] },
    ],
    hidden: [
      { args: [[]], expected: [] },
      { args: [[50]], expected: [0] },
      { args: [[50, 50]], expected: [0, 0] },
      { args: [[70, 60, 80]], expected: [2, 1, 0] },
      { args: [[1, 2, 3, 4, 5]], expected: [1, 1, 1, 1, 0] },
      { args: [[5, 4, 3, 2, 1]], expected: [0, 0, 0, 0, 0] },
    ],
    hints: [
      "Days still waiting for a warmer day form a decreasing stack of indices.",
      "When today is warmer than the stack top, that day's answer is the index gap.",
      "while (stack.length && temps[top] < temps[i]) { const j = stack.pop(); out[j] = i - j; }",
    ],
    solutions: [
      {
        label: "Monotonic stack",
        approach: "Resolve every waiting day the moment a warmer day arrives.",
        js: "function dailyTemperatures(temps) {\n  const out = new Array(temps.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {\n      const j = stack.pop();\n      out[j] = i - j;\n    }\n    stack.push(i);\n  }\n  return out;\n}\n",
        ts: "function dailyTemperatures(temps: number[]): number[] {\n  const out = new Array(temps.length).fill(0);\n  const stack: number[] = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {\n      const j = stack.pop() as number;\n      out[j] = i - j;\n    }\n    stack.push(i);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function dailyTemperatures(temps) {\n  // Zero is already correct for days that never get warmer.\n  const out = new Array(temps.length).fill(0);\n  // Store indices of unresolved days in decreasing-temperature order.\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    // Today is the first warmer day for each cooler day exposed on top.\n    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {\n      const waitingDay = stack.pop();\n      out[waitingDay] = i - waitingDay;\n    }\n    // Let this day wait for a future strictly warmer temperature.\n    stack.push(i);\n  }\n  return out;\n}\n",
          ts: "function dailyTemperatures(temps: number[]): number[] {\n  // Zero is already correct for days that never get warmer.\n  const out = new Array(temps.length).fill(0);\n  // Store indices of unresolved days in decreasing-temperature order.\n  const stack: number[] = [];\n  for (let i = 0; i < temps.length; i++) {\n    // Today is the first warmer day for each cooler day exposed on top.\n    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {\n      const waitingDay = stack.pop() as number;\n      out[waitingDay] = i - waitingDay;\n    }\n    // Let this day wait for a future strictly warmer temperature.\n    stack.push(i);\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force",
        approach: "Scan forward from each day until it gets warmer.",
        js: "function dailyTemperatures(temps) {\n  const out = [];\n  for (let i = 0; i < temps.length; i++) {\n    let wait = 0;\n    for (let j = i + 1; j < temps.length; j++) {\n      if (temps[j] > temps[i]) { wait = j - i; break; }\n    }\n    out.push(wait);\n  }\n  return out;\n}\n",
        ts: "function dailyTemperatures(temps: number[]): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < temps.length; i++) {\n    let wait = 0;\n    for (let j = i + 1; j < temps.length; j++) {\n      if (temps[j] > temps[i]) { wait = j - i; break; }\n    }\n    out.push(wait);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function dailyTemperatures(temps) {\n  const out = [];\n  // Search separately for each day's next warmer temperature.\n  for (let i = 0; i < temps.length; i++) {\n    // Keep zero when no warmer future day exists.\n    let wait = 0;\n    for (let j = i + 1; j < temps.length; j++) {\n      if (temps[j] > temps[i]) {\n        // The first warmer day gives the shortest required wait.\n        wait = j - i;\n        break;\n      }\n    }\n    out.push(wait);\n  }\n  return out;\n}\n",
          ts: "function dailyTemperatures(temps: number[]): number[] {\n  const out: number[] = [];\n  // Search separately for each day's next warmer temperature.\n  for (let i = 0; i < temps.length; i++) {\n    // Keep zero when no warmer future day exists.\n    let wait = 0;\n    for (let j = i + 1; j < temps.length; j++) {\n      if (temps[j] > temps[i]) {\n        // The first warmer day gives the shortest required wait.\n        wait = j - i;\n        break;\n      }\n    }\n    out.push(wait);\n  }\n  return out;\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ms-next-greater-circular",
    slug: "next-greater-circular",
    title: "Next Greater (Circular)",
    difficulty: "medium",
    patternIds: P,
    statement:
      "For each value, return the next strictly greater value searching rightward and **wrapping around** to the start, or -1 if none exists.",
    examples: [
      { input: "[1,2,1]", output: "[2,-1,2]" },
      { input: "[5,4,3,2,1]", output: "[-1,5,5,5,5]" },
      { input: "[1,1]", output: "[-1,-1]" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "nextGreaterCircular",
    starter: {
      js: "function nextGreaterCircular(nums) {\n  // Next greater value, wrapping around; -1 if none.\n}\n",
      ts: "function nextGreaterCircular(nums: number[]): number[] {\n  // Next greater value, wrapping around; -1 if none.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 1]], expected: [2, -1, 2] },
      { args: [[5, 4, 3, 2, 1]], expected: [-1, 5, 5, 5, 5] },
      { args: [[1, 1]], expected: [-1, -1] },
    ],
    hidden: [
      { args: [[]], expected: [] },
      { args: [[1]], expected: [-1] },
      { args: [[1, 2]], expected: [2, -1] },
      { args: [[3, 8, 4, 1, 2]], expected: [8, -1, 8, 2, 3] },
      { args: [[2, 2, 2]], expected: [-1, -1, -1] },
      { args: [[1, 3, 2]], expected: [3, -1, 3] },
    ],
    hints: [
      "Wrapping is handled by walking the array twice (indices 0..2n-1, using i % n).",
      "Keep the usual decreasing stack of unresolved indices.",
      "Only push indices during the first pass; the second pass just resolves leftovers.",
    ],
    solutions: [
      {
        label: "Monotonic stack over two passes",
        approach: "Traverse 2n indices modulo n so every element sees the wrap-around.",
        js: "function nextGreaterCircular(nums) {\n  const n = nums.length;\n  const out = new Array(n).fill(-1);\n  const stack = [];\n  for (let i = 0; i < 2 * n; i++) {\n    const cur = nums[i % n];\n    while (stack.length && nums[stack[stack.length - 1]] < cur) {\n      out[stack.pop()] = cur;\n    }\n    if (i < n) stack.push(i);\n  }\n  return out;\n}\n",
        ts: "function nextGreaterCircular(nums: number[]): number[] {\n  const n = nums.length;\n  const out = new Array(n).fill(-1);\n  const stack: number[] = [];\n  for (let i = 0; i < 2 * n; i++) {\n    const cur = nums[i % n];\n    while (stack.length && nums[stack[stack.length - 1]] < cur) {\n      out[stack.pop() as number] = cur;\n    }\n    if (i < n) stack.push(i);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function nextGreaterCircular(nums) {\n  const n = nums.length;\n  // Keep -1 for values that have no greater element anywhere in the circle.\n  const out = new Array(n).fill(-1);\n  // Store unresolved original indices in decreasing-value order.\n  const stack = [];\n  // Two passes let each original index inspect values after the wrap-around.\n  for (let i = 0; i < 2 * n; i++) {\n    const currentValue = nums[i % n];\n    // The current value is the first greater value for every smaller stack top.\n    while (stack.length && nums[stack[stack.length - 1]] < currentValue) {\n      out[stack.pop()] = currentValue;\n    }\n    // Push each original index once; pass two only resolves leftovers.\n    if (i < n) stack.push(i);\n  }\n  return out;\n}\n",
          ts: "function nextGreaterCircular(nums: number[]): number[] {\n  const n = nums.length;\n  // Keep -1 for values that have no greater element anywhere in the circle.\n  const out = new Array(n).fill(-1);\n  // Store unresolved original indices in decreasing-value order.\n  const stack: number[] = [];\n  // Two passes let each original index inspect values after the wrap-around.\n  for (let i = 0; i < 2 * n; i++) {\n    const currentValue = nums[i % n];\n    // The current value is the first greater value for every smaller stack top.\n    while (stack.length && nums[stack[stack.length - 1]] < currentValue) {\n      out[stack.pop() as number] = currentValue;\n    }\n    // Push each original index once; pass two only resolves leftovers.\n    if (i < n) stack.push(i);\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force with wrap",
        approach: "For each index, probe the following n-1 positions modulo n.",
        js: "function nextGreaterCircular(nums) {\n  const n = nums.length;\n  const out = [];\n  for (let i = 0; i < n; i++) {\n    let found = -1;\n    for (let step = 1; step < n; step++) {\n      const v = nums[(i + step) % n];\n      if (v > nums[i]) { found = v; break; }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
        ts: "function nextGreaterCircular(nums: number[]): number[] {\n  const n = nums.length;\n  const out: number[] = [];\n  for (let i = 0; i < n; i++) {\n    let found = -1;\n    for (let step = 1; step < n; step++) {\n      const v = nums[(i + step) % n];\n      if (v > nums[i]) { found = v; break; }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function nextGreaterCircular(nums) {\n  const n = nums.length;\n  const out = [];\n  // Find one answer at a time.\n  for (let i = 0; i < n; i++) {\n    // Default to -1 unless a strictly greater value is encountered.\n    let found = -1;\n    // Check at most the other n - 1 positions in circular order.\n    for (let step = 1; step < n; step++) {\n      const candidate = nums[(i + step) % n];\n      if (candidate > nums[i]) {\n        // The first greater candidate is the next greater value.\n        found = candidate;\n        break;\n      }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
          ts: "function nextGreaterCircular(nums: number[]): number[] {\n  const n = nums.length;\n  const out: number[] = [];\n  // Find one answer at a time.\n  for (let i = 0; i < n; i++) {\n    // Default to -1 unless a strictly greater value is encountered.\n    let found = -1;\n    // Check at most the other n - 1 positions in circular order.\n    for (let step = 1; step < n; step++) {\n      const candidate = nums[(i + step) % n];\n      if (candidate > nums[i]) {\n        // The first greater candidate is the next greater value.\n        found = candidate;\n        break;\n      }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ms-asteroid-collision",
    slug: "asteroid-collision",
    title: "Asteroid Collision",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each value is an asteroid: positive moves right, negative moves left, and the magnitude is its size. When a right-mover meets a left-mover, the smaller one explodes; if equal, both explode. Return the asteroids that survive.",
    examples: [
      { input: "[5,10,-5]", output: "[5,10]" },
      { input: "[8,-8]", output: "[]" },
      { input: "[10,2,-5]", output: "[10]" },
    ],
    constraints: ["0 <= asteroids.length <= 10000", "no asteroid has size 0"],
    functionName: "asteroidCollision",
    starter: {
      js: "function asteroidCollision(asteroids) {\n  // Surviving asteroids after all collisions.\n}\n",
      ts: "function asteroidCollision(asteroids: number[]): number[] {\n  // Surviving asteroids after all collisions.\n  return [];\n}\n",
    },
    visible: [
      { args: [[5, 10, -5]], expected: [5, 10] },
      { args: [[8, -8]], expected: [] },
      { args: [[10, 2, -5]], expected: [10] },
    ],
    hidden: [
      { args: [[]], expected: [] },
      { args: [[1]], expected: [1] },
      { args: [[-1]], expected: [-1] },
      { args: [[-2, -1, 1, 2]], expected: [-2, -1, 1, 2] },
      { args: [[1, -2]], expected: [-2] },
      { args: [[2, -1, -2]], expected: [] },
    ],
    hints: [
      "Only a right-mover on the stack can collide with an incoming left-mover.",
      "Pop while the stack top is a smaller right-mover; stop if it's larger; both die if equal.",
      "If nothing on the stack can stop it, the left-mover survives and gets pushed.",
    ],
    solutions: [
      {
        label: "Stack of survivors",
        approach: "Resolve each incoming asteroid against the stack top.",
        js: "function asteroidCollision(asteroids) {\n  const stack = [];\n  for (const a of asteroids) {\n    let alive = true;\n    while (alive && a < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {\n      const top = stack[stack.length - 1];\n      if (top < -a) { stack.pop(); continue; }\n      if (top === -a) stack.pop();\n      alive = false;\n    }\n    if (alive) stack.push(a);\n  }\n  return stack;\n}\n",
        ts: "function asteroidCollision(asteroids: number[]): number[] {\n  const stack: number[] = [];\n  for (const a of asteroids) {\n    let alive = true;\n    while (alive && a < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {\n      const top = stack[stack.length - 1];\n      if (top < -a) { stack.pop(); continue; }\n      if (top === -a) stack.pop();\n      alive = false;\n    }\n    if (alive) stack.push(a);\n  }\n  return stack;\n}\n",
        commentedCode: {
          js: "function asteroidCollision(asteroids) {\n  // The stack contains survivors seen so far, in their original order.\n  const stack = [];\n  for (const asteroid of asteroids) {\n    let alive = true;\n    // A collision is possible only when a right-mover meets this left-mover.\n    while (alive && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {\n      const rightMover = stack[stack.length - 1];\n      if (rightMover < -asteroid) {\n        // The smaller right-mover explodes; keep testing the incoming asteroid.\n        stack.pop();\n        continue;\n      }\n      // Equal sizes destroy the right-mover as well as the incoming asteroid.\n      if (rightMover === -asteroid) stack.pop();\n      // A larger or equal right-mover means the incoming asteroid is gone.\n      alive = false;\n    }\n    // Push asteroids that never collided or survived every collision.\n    if (alive) stack.push(asteroid);\n  }\n  return stack;\n}\n",
          ts: "function asteroidCollision(asteroids: number[]): number[] {\n  // The stack contains survivors seen so far, in their original order.\n  const stack: number[] = [];\n  for (const asteroid of asteroids) {\n    let alive = true;\n    // A collision is possible only when a right-mover meets this left-mover.\n    while (alive && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {\n      const rightMover = stack[stack.length - 1];\n      if (rightMover < -asteroid) {\n        // The smaller right-mover explodes; keep testing the incoming asteroid.\n        stack.pop();\n        continue;\n      }\n      // Equal sizes destroy the right-mover as well as the incoming asteroid.\n      if (rightMover === -asteroid) stack.pop();\n      // A larger or equal right-mover means the incoming asteroid is gone.\n      alive = false;\n    }\n    // Push asteroids that never collided or survived every collision.\n    if (alive) stack.push(asteroid);\n  }\n  return stack;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Repeated scan",
        approach: "Repeatedly remove the first colliding adjacent pair until stable.",
        js: "function asteroidCollision(asteroids) {\n  let list = [...asteroids];\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (let i = 0; i + 1 < list.length; i++) {\n      const a = list[i], b = list[i + 1];\n      if (a > 0 && b < 0) {\n        if (a < -b) list.splice(i, 1);\n        else if (a > -b) list.splice(i + 1, 1);\n        else list.splice(i, 2);\n        changed = true;\n        break;\n      }\n    }\n  }\n  return list;\n}\n",
        ts: "function asteroidCollision(asteroids: number[]): number[] {\n  const list = [...asteroids];\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (let i = 0; i + 1 < list.length; i++) {\n      const a = list[i], b = list[i + 1];\n      if (a > 0 && b < 0) {\n        if (a < -b) list.splice(i, 1);\n        else if (a > -b) list.splice(i + 1, 1);\n        else list.splice(i, 2);\n        changed = true;\n        break;\n      }\n    }\n  }\n  return list;\n}\n",
        commentedCode: {
          js: "function asteroidCollision(asteroids) {\n  // Mutate a copy so the caller's input remains unchanged.\n  let list = [...asteroids];\n  let changed = true;\n  // Repeat because removing one pair can create a new adjacent collision.\n  while (changed) {\n    changed = false;\n    for (let i = 0; i + 1 < list.length; i++) {\n      const left = list[i], right = list[i + 1];\n      // Only this direction pair moves toward one another.\n      if (left > 0 && right < 0) {\n        // Remove the smaller asteroid, or both when their sizes match.\n        if (left < -right) list.splice(i, 1);\n        else if (left > -right) list.splice(i + 1, 1);\n        else list.splice(i, 2);\n        changed = true;\n        // Restart because indices and neighboring pairs have changed.\n        break;\n      }\n    }\n  }\n  return list;\n}\n",
          ts: "function asteroidCollision(asteroids: number[]): number[] {\n  // Mutate a copy so the caller's input remains unchanged.\n  const list = [...asteroids];\n  let changed = true;\n  // Repeat because removing one pair can create a new adjacent collision.\n  while (changed) {\n    changed = false;\n    for (let i = 0; i + 1 < list.length; i++) {\n      const left = list[i], right = list[i + 1];\n      // Only this direction pair moves toward one another.\n      if (left > 0 && right < 0) {\n        // Remove the smaller asteroid, or both when their sizes match.\n        if (left < -right) list.splice(i, 1);\n        else if (left > -right) list.splice(i + 1, 1);\n        else list.splice(i, 2);\n        changed = true;\n        // Restart because indices and neighboring pairs have changed.\n        break;\n      }\n    }\n  }\n  return list;\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ms-largest-rectangle",
    slug: "largest-rectangle-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Each value is the height of a bar of width 1. Return the area of the largest rectangle that fits entirely inside the histogram.",
    examples: [
      { input: "[2,1,5,6,2,3]", output: "10" },
      { input: "[2,4]", output: "4" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= heights.length <= 10000", "heights[i] >= 0"],
    functionName: "largestRectangle",
    starter: {
      js: "function largestRectangle(heights) {\n  // Largest rectangle area in the histogram.\n}\n",
      ts: "function largestRectangle(heights: number[]): number {\n  // Largest rectangle area in the histogram.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 1, 5, 6, 2, 3]], expected: 10 },
      { args: [[2, 4]], expected: 4 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[1]], expected: 1 },
      { args: [[0]], expected: 0 },
      { args: [[1, 1]], expected: 2 },
      { args: [[5, 4, 1, 2]], expected: 8 },
      { args: [[2, 1, 2]], expected: 3 },
      { args: [[3, 3, 3]], expected: 9 },
    ],
    hints: [
      "Each bar's rectangle extends left and right until it meets a shorter bar.",
      "A stack of increasing heights lets you pop a bar exactly when its right edge is found.",
      "Append a sentinel height of 0 so everything is flushed from the stack at the end.",
    ],
    solutions: [
      {
        label: "Monotonic stack with sentinel",
        approach: "Pop a bar when a shorter one arrives; its width spans to that boundary.",
        js: "function largestRectangle(heights) {\n  const h = [...heights, 0];\n  const stack = [];\n  let best = 0;\n  for (let i = 0; i < h.length; i++) {\n    while (stack.length && h[stack[stack.length - 1]] >= h[i]) {\n      const height = h[stack.pop()];\n      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;\n      best = Math.max(best, height * width);\n    }\n    stack.push(i);\n  }\n  return best;\n}\n",
        ts: "function largestRectangle(heights: number[]): number {\n  const h = [...heights, 0];\n  const stack: number[] = [];\n  let best = 0;\n  for (let i = 0; i < h.length; i++) {\n    while (stack.length && h[stack[stack.length - 1]] >= h[i]) {\n      const height = h[stack.pop() as number];\n      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;\n      best = Math.max(best, height * width);\n    }\n    stack.push(i);\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function largestRectangle(heights) {\n  // A trailing zero forces every remaining bar to be evaluated.\n  const extended = [...heights, 0];\n  // Store indices whose heights increase from bottom to top.\n  const stack = [];\n  let best = 0;\n  for (let i = 0; i < extended.length; i++) {\n    // A shorter bar marks the exclusive right boundary for taller bars.\n    while (stack.length && extended[stack[stack.length - 1]] >= extended[i]) {\n      const height = extended[stack.pop()];\n      // The new top is the nearest strictly shorter bar on the left.\n      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;\n      best = Math.max(best, height * width);\n    }\n    // This index may extend until a shorter future bar appears.\n    stack.push(i);\n  }\n  return best;\n}\n",
          ts: "function largestRectangle(heights: number[]): number {\n  // A trailing zero forces every remaining bar to be evaluated.\n  const extended = [...heights, 0];\n  // Store indices whose heights increase from bottom to top.\n  const stack: number[] = [];\n  let best = 0;\n  for (let i = 0; i < extended.length; i++) {\n    // A shorter bar marks the exclusive right boundary for taller bars.\n    while (stack.length && extended[stack[stack.length - 1]] >= extended[i]) {\n      const height = extended[stack.pop() as number];\n      // The new top is the nearest strictly shorter bar on the left.\n      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;\n      best = Math.max(best, height * width);\n    }\n    // This index may extend until a shorter future bar appears.\n    stack.push(i);\n  }\n  return best;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force",
        approach: "Expand every starting bar, tracking the minimum height so far.",
        js: "function largestRectangle(heights) {\n  let best = 0;\n  for (let i = 0; i < heights.length; i++) {\n    let minH = heights[i];\n    for (let j = i; j < heights.length; j++) {\n      minH = Math.min(minH, heights[j]);\n      best = Math.max(best, minH * (j - i + 1));\n    }\n  }\n  return best;\n}\n",
        ts: "function largestRectangle(heights: number[]): number {\n  let best = 0;\n  for (let i = 0; i < heights.length; i++) {\n    let minH = heights[i];\n    for (let j = i; j < heights.length; j++) {\n      minH = Math.min(minH, heights[j]);\n      best = Math.max(best, minH * (j - i + 1));\n    }\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function largestRectangle(heights) {\n  let best = 0;\n  // Treat every index as a possible left edge.\n  for (let left = 0; left < heights.length; left++) {\n    // The shortest bar limits the rectangle's height as it expands.\n    let minHeight = heights[left];\n    for (let right = left; right < heights.length; right++) {\n      minHeight = Math.min(minHeight, heights[right]);\n      const width = right - left + 1;\n      best = Math.max(best, minHeight * width);\n    }\n  }\n  return best;\n}\n",
          ts: "function largestRectangle(heights: number[]): number {\n  let best = 0;\n  // Treat every index as a possible left edge.\n  for (let left = 0; left < heights.length; left++) {\n    // The shortest bar limits the rectangle's height as it expands.\n    let minHeight = heights[left];\n    for (let right = left; right < heights.length; right++) {\n      minHeight = Math.min(minHeight, heights[right]);\n      const width = right - left + 1;\n      best = Math.max(best, minHeight * width);\n    }\n  }\n  return best;\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "ms-previous-smaller",
    slug: "previous-smaller-element",
    title: "Previous Smaller Element",
    difficulty: "medium",
    patternIds: P,
    statement:
      "For each value, return the nearest value to its left that is strictly smaller, or -1 if there is none.",
    examples: [
      { input: "[4,5,2,10,8]", output: "[-1,4,-1,2,2]" },
      { input: "[]", output: "[]" },
      { input: "[1,2,3]", output: "[-1,1,2]" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "previousSmaller",
    starter: {
      js: "function previousSmaller(nums) {\n  // Nearest strictly smaller value to the left, or -1.\n}\n",
      ts: "function previousSmaller(nums: number[]): number[] {\n  // Nearest strictly smaller value to the left, or -1.\n  return [];\n}\n",
    },
    visible: [
      { args: [[4, 5, 2, 10, 8]], expected: [-1, 4, -1, 2, 2] },
      { args: [[]], expected: [] },
      { args: [[1, 2, 3]], expected: [-1, 1, 2] },
    ],
    hidden: [
      { args: [[3, 2, 1]], expected: [-1, -1, -1] },
      { args: [[1]], expected: [-1] },
      { args: [[2, 2]], expected: [-1, -1] },
      { args: [[5, 1, 6, 2]], expected: [-1, -1, 1, 1] },
      { args: [[1, 1, 1]], expected: [-1, -1, -1] },
      { args: [[10, 9, 8, 20]], expected: [-1, -1, -1, 8] },
    ],
    hints: [
      "Keep a stack whose values increase from bottom to top.",
      "Before answering for index i, pop everything ≥ nums[i]; the remaining top is the answer.",
      "Then push nums[i] so it can answer for later elements.",
    ],
    solutions: [
      {
        label: "Monotonic (increasing) stack",
        approach: "Pop values that can never be a previous-smaller answer.",
        js: "function previousSmaller(nums) {\n  const out = [];\n  const stack = [];\n  for (const v of nums) {\n    while (stack.length && stack[stack.length - 1] >= v) stack.pop();\n    out.push(stack.length ? stack[stack.length - 1] : -1);\n    stack.push(v);\n  }\n  return out;\n}\n",
        ts: "function previousSmaller(nums: number[]): number[] {\n  const out: number[] = [];\n  const stack: number[] = [];\n  for (const v of nums) {\n    while (stack.length && stack[stack.length - 1] >= v) stack.pop();\n    out.push(stack.length ? stack[stack.length - 1] : -1);\n    stack.push(v);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function previousSmaller(nums) {\n  const out = [];\n  // Keep useful values in strictly increasing order.\n  const stack = [];\n  for (const value of nums) {\n    // Larger or equal values cannot be this value's smaller predecessor.\n    while (stack.length && stack[stack.length - 1] >= value) stack.pop();\n    // The surviving top is the nearest smaller value because it was seen last.\n    out.push(stack.length ? stack[stack.length - 1] : -1);\n    // This value may become the previous-smaller answer for later values.\n    stack.push(value);\n  }\n  return out;\n}\n",
          ts: "function previousSmaller(nums: number[]): number[] {\n  const out: number[] = [];\n  // Keep useful values in strictly increasing order.\n  const stack: number[] = [];\n  for (const value of nums) {\n    // Larger or equal values cannot be this value's smaller predecessor.\n    while (stack.length && stack[stack.length - 1] >= value) stack.pop();\n    // The surviving top is the nearest smaller value because it was seen last.\n    out.push(stack.length ? stack[stack.length - 1] : -1);\n    // This value may become the previous-smaller answer for later values.\n    stack.push(value);\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force",
        approach: "Scan leftward from each index for the first smaller value.",
        js: "function previousSmaller(nums) {\n  const out = [];\n  for (let i = 0; i < nums.length; i++) {\n    let found = -1;\n    for (let j = i - 1; j >= 0; j--) {\n      if (nums[j] < nums[i]) { found = nums[j]; break; }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
        ts: "function previousSmaller(nums: number[]): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    let found = -1;\n    for (let j = i - 1; j >= 0; j--) {\n      if (nums[j] < nums[i]) { found = nums[j]; break; }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function previousSmaller(nums) {\n  const out = [];\n  // Resolve each position with an independent leftward search.\n  for (let i = 0; i < nums.length; i++) {\n    // Use -1 when nothing smaller exists to the left.\n    let found = -1;\n    for (let j = i - 1; j >= 0; j--) {\n      if (nums[j] < nums[i]) {\n        // Scanning backward makes the first match the nearest one.\n        found = nums[j];\n        break;\n      }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
          ts: "function previousSmaller(nums: number[]): number[] {\n  const out: number[] = [];\n  // Resolve each position with an independent leftward search.\n  for (let i = 0; i < nums.length; i++) {\n    // Use -1 when nothing smaller exists to the left.\n    let found = -1;\n    for (let j = i - 1; j >= 0; j--) {\n      if (nums[j] < nums[i]) {\n        // Scanning backward makes the first match the nearest one.\n        found = nums[j];\n        break;\n      }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ms-simplify-path",
    slug: "simplify-path",
    title: "Simplify Path",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an absolute Unix-style path, return its canonical form: collapse repeated slashes, drop `.`, and let `..` step up one directory (never above the root).",
    examples: [
      { input: '"/a/./b/../c/"', output: '"/a/c"' },
      { input: '"/../"', output: '"/"' },
      { input: '"/home//foo/"', output: '"/home/foo"' },
    ],
    constraints: ["the path always starts with '/'"],
    functionName: "simplifyPath",
    starter: {
      js: "function simplifyPath(path) {\n  // Canonical absolute path.\n}\n",
      ts: "function simplifyPath(path: string): string {\n  // Canonical absolute path.\n  return '/';\n}\n",
    },
    visible: [
      { args: ["/a/./b/../c/"], expected: "/a/c" },
      { args: ["/../"], expected: "/" },
      { args: ["/home//foo/"], expected: "/home/foo" },
    ],
    hidden: [
      { args: ["/"], expected: "/" },
      { args: ["/a"], expected: "/a" },
      { args: ["/a/.."], expected: "/" },
      { args: ["/a/b/c/../.."], expected: "/a" },
      { args: ["/..."], expected: "/..." },
      { args: ["/a//b"], expected: "/a/b" },
    ],
    hints: [
      "Split on '/' — empty pieces come from repeated slashes and can be skipped.",
      "'.' means stay; '..' pops the stack; anything else is a directory name to push.",
      "Join the stack with '/' and prefix a leading '/'.",
    ],
    solutions: [
      {
        label: "Directory stack",
        approach: "Push names, pop on '..', ignore '.' and empty segments.",
        js: "function simplifyPath(path) {\n  const stack = [];\n  for (const part of path.split('/')) {\n    if (part === '' || part === '.') continue;\n    if (part === '..') stack.pop();\n    else stack.push(part);\n  }\n  return '/' + stack.join('/');\n}\n",
        ts: "function simplifyPath(path: string): string {\n  const stack: string[] = [];\n  for (const part of path.split('/')) {\n    if (part === '' || part === '.') continue;\n    if (part === '..') stack.pop();\n    else stack.push(part);\n  }\n  return '/' + stack.join('/');\n}\n",
        commentedCode: {
          js: "function simplifyPath(path) {\n  // The stack represents directories on the canonical route from the root.\n  const stack = [];\n  for (const part of path.split('/')) {\n    // Empty segments come from repeated slashes; '.' stays in place.\n    if (part === '' || part === '.') continue;\n    // '..' removes one directory, while pop on an empty stack stays at root.\n    if (part === '..') stack.pop();\n    // Every other segment is a literal directory name.\n    else stack.push(part);\n  }\n  // Rejoin the retained directories beneath one leading slash.\n  return '/' + stack.join('/');\n}\n",
          ts: "function simplifyPath(path: string): string {\n  // The stack represents directories on the canonical route from the root.\n  const stack: string[] = [];\n  for (const part of path.split('/')) {\n    // Empty segments come from repeated slashes; '.' stays in place.\n    if (part === '' || part === '.') continue;\n    // '..' removes one directory, while pop on an empty stack stays at root.\n    if (part === '..') stack.pop();\n    // Every other segment is a literal directory name.\n    else stack.push(part);\n  }\n  // Rejoin the retained directories beneath one leading slash.\n  return '/' + stack.join('/');\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Filter then fold",
        approach: "Drop empty and '.' segments first, then reduce with '..' handling.",
        js: "function simplifyPath(path) {\n  const parts = path.split('/').filter((p) => p !== '' && p !== '.');\n  const stack = parts.reduce((acc, p) => {\n    if (p === '..') acc.pop(); else acc.push(p);\n    return acc;\n  }, []);\n  return '/' + stack.join('/');\n}\n",
        ts: "function simplifyPath(path: string): string {\n  const parts = path.split('/').filter((p) => p !== '' && p !== '.');\n  const stack = parts.reduce<string[]>((acc, p) => {\n    if (p === '..') acc.pop(); else acc.push(p);\n    return acc;\n  }, []);\n  return '/' + stack.join('/');\n}\n",
        commentedCode: {
          js: "function simplifyPath(path) {\n  // Remove separators with no name and segments that mean stay here.\n  const parts = path.split('/').filter((part) => part !== '' && part !== '.');\n  // Fold the remaining navigation commands into a directory stack.\n  const stack = parts.reduce((directories, part) => {\n    // Moving up removes the latest directory; a name moves down into it.\n    if (part === '..') directories.pop();\n    else directories.push(part);\n    return directories;\n  }, []);\n  return '/' + stack.join('/');\n}\n",
          ts: "function simplifyPath(path: string): string {\n  // Remove separators with no name and segments that mean stay here.\n  const parts = path.split('/').filter((part) => part !== '' && part !== '.');\n  // Fold the remaining navigation commands into a directory stack.\n  const stack = parts.reduce<string[]>((directories, part) => {\n    // Moving up removes the latest directory; a name moves down into it.\n    if (part === '..') directories.pop();\n    else directories.push(part);\n    return directories;\n  }, []);\n  return '/' + stack.join('/');\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ms-decode-string",
    slug: "decode-string",
    title: "Decode String",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Decode a string written with the rule `k[encoded]`, meaning the bracketed part repeats `k` times. Brackets may nest.",
    examples: [
      { input: '"3[a]2[bc]"', output: '"aaabcbc"' },
      { input: '"3[a2[c]]"', output: '"accaccacc"' },
      { input: '"a"', output: '"a"' },
    ],
    constraints: ["the input is always well formed", "counts are positive integers"],
    functionName: "decodeString",
    starter: {
      js: "function decodeString(s) {\n  // Expand k[...] patterns, including nested ones.\n}\n",
      ts: "function decodeString(s: string): string {\n  // Expand k[...] patterns, including nested ones.\n  return '';\n}\n",
    },
    visible: [
      { args: ["3[a]2[bc]"], expected: "aaabcbc" },
      { args: ["3[a2[c]]"], expected: "accaccacc" },
      { args: ["a"], expected: "a" },
    ],
    hidden: [
      { args: [""], expected: "" },
      { args: ["2[a]"], expected: "aa" },
      { args: ["10[a]"], expected: "aaaaaaaaaa" },
      { args: ["2[ab]c"], expected: "ababc" },
      { args: ["1[x]"], expected: "x" },
      { args: ["2[2[b]]"], expected: "bbbb" },
    ],
    hints: [
      "Nesting means you must remember an outer partial result while building an inner one.",
      "Push the current string and repeat count when you meet '['; restore them on ']'.",
      "Digits may be multi-digit — accumulate them before the bracket.",
    ],
    solutions: [
      {
        label: "Two stacks",
        approach: "Stack the pending prefix and count at each '[', then combine at ']'.",
        js: "function decodeString(s) {\n  const counts = [];\n  const parts = [];\n  let cur = '', num = 0;\n  for (const ch of s) {\n    if (ch >= '0' && ch <= '9') num = num * 10 + Number(ch);\n    else if (ch === '[') { counts.push(num); parts.push(cur); num = 0; cur = ''; }\n    else if (ch === ']') { cur = parts.pop() + cur.repeat(counts.pop()); }\n    else cur += ch;\n  }\n  return cur;\n}\n",
        ts: "function decodeString(s: string): string {\n  const counts: number[] = [];\n  const parts: string[] = [];\n  let cur = '', num = 0;\n  for (const ch of s) {\n    if (ch >= '0' && ch <= '9') num = num * 10 + Number(ch);\n    else if (ch === '[') { counts.push(num); parts.push(cur); num = 0; cur = ''; }\n    else if (ch === ']') { cur = (parts.pop() as string) + cur.repeat(counts.pop() as number); }\n    else cur += ch;\n  }\n  return cur;\n}\n",
        commentedCode: {
          js: "function decodeString(s) {\n  // Parallel stacks remember the repeat count and prefix for each nesting level.\n  const counts = [];\n  const prefixes = [];\n  let current = '';\n  let number = 0;\n  for (const char of s) {\n    // Build multi-digit repeat counts one digit at a time.\n    if (char >= '0' && char <= '9') number = number * 10 + Number(char);\n    else if (char === '[') {\n      // Save the outer context before decoding the bracketed substring.\n      counts.push(number);\n      prefixes.push(current);\n      number = 0;\n      current = '';\n    } else if (char === ']') {\n      // Complete this level and attach it to its saved outer prefix.\n      current = prefixes.pop() + current.repeat(counts.pop());\n    } else {\n      // Plain letters belong to the substring at the current nesting level.\n      current += char;\n    }\n  }\n  return current;\n}\n",
          ts: "function decodeString(s: string): string {\n  // Parallel stacks remember the repeat count and prefix for each nesting level.\n  const counts: number[] = [];\n  const prefixes: string[] = [];\n  let current = '';\n  let number = 0;\n  for (const char of s) {\n    // Build multi-digit repeat counts one digit at a time.\n    if (char >= '0' && char <= '9') number = number * 10 + Number(char);\n    else if (char === '[') {\n      // Save the outer context before decoding the bracketed substring.\n      counts.push(number);\n      prefixes.push(current);\n      number = 0;\n      current = '';\n    } else if (char === ']') {\n      // Complete this level and attach it to its saved outer prefix.\n      current = (prefixes.pop() as string) + current.repeat(counts.pop() as number);\n    } else {\n      // Plain letters belong to the substring at the current nesting level.\n      current += char;\n    }\n  }\n  return current;\n}\n",
        },
        time: "O(output length)",
        space: "O(n)",
      },
      {
        label: "Single stack of frames",
        approach: "Keep one stack holding [prefix, count] frames.",
        js: "function decodeString(s) {\n  const stack = [];\n  let cur = '', num = 0;\n  for (const ch of s) {\n    if (ch >= '0' && ch <= '9') num = num * 10 + Number(ch);\n    else if (ch === '[') { stack.push([cur, num]); cur = ''; num = 0; }\n    else if (ch === ']') { const [prefix, k] = stack.pop(); cur = prefix + cur.repeat(k); }\n    else cur += ch;\n  }\n  return cur;\n}\n",
        ts: "function decodeString(s: string): string {\n  const stack: Array<[string, number]> = [];\n  let cur = '', num = 0;\n  for (const ch of s) {\n    if (ch >= '0' && ch <= '9') num = num * 10 + Number(ch);\n    else if (ch === '[') { stack.push([cur, num]); cur = ''; num = 0; }\n    else if (ch === ']') { const [prefix, k] = stack.pop() as [string, number]; cur = prefix + cur.repeat(k); }\n    else cur += ch;\n  }\n  return cur;\n}\n",
        commentedCode: {
          js: "function decodeString(s) {\n  // Each frame stores the prefix and count for one open bracket.\n  const stack = [];\n  let current = '';\n  let number = 0;\n  for (const char of s) {\n    // Accumulate every digit so counts such as 12 are handled correctly.\n    if (char >= '0' && char <= '9') number = number * 10 + Number(char);\n    else if (char === '[') {\n      // Pause the outer string while the nested substring is decoded.\n      stack.push([current, number]);\n      current = '';\n      number = 0;\n    } else if (char === ']') {\n      // Close the latest frame, repeat its inner text, and restore its prefix.\n      const [prefix, repeatCount] = stack.pop();\n      current = prefix + current.repeat(repeatCount);\n    } else {\n      current += char;\n    }\n  }\n  return current;\n}\n",
          ts: "function decodeString(s: string): string {\n  // Each frame stores the prefix and count for one open bracket.\n  const stack: Array<[string, number]> = [];\n  let current = '';\n  let number = 0;\n  for (const char of s) {\n    // Accumulate every digit so counts such as 12 are handled correctly.\n    if (char >= '0' && char <= '9') number = number * 10 + Number(char);\n    else if (char === '[') {\n      // Pause the outer string while the nested substring is decoded.\n      stack.push([current, number]);\n      current = '';\n      number = 0;\n    } else if (char === ']') {\n      // Close the latest frame, repeat its inner text, and restore its prefix.\n      const [prefix, repeatCount] = stack.pop() as [string, number];\n      current = prefix + current.repeat(repeatCount);\n    } else {\n      current += char;\n    }\n  }\n  return current;\n}\n",
        },
        time: "O(output length)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ms-trap-rain",
    slug: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Each value is the height of a bar of width 1. Return how many units of water are trapped between the bars after it rains.",
    examples: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "[4,2,0,3,2,5]", output: "9" },
      { input: "[]", output: "0" },
    ],
    constraints: ["0 <= heights.length <= 10000", "heights[i] >= 0"],
    functionName: "trapRain",
    starter: {
      js: "function trapRain(heights) {\n  // Units of trapped water.\n}\n",
      ts: "function trapRain(heights: number[]): number {\n  // Units of trapped water.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
      { args: [[4, 2, 0, 3, 2, 5]], expected: 9 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[1]], expected: 0 },
      { args: [[1, 2]], expected: 0 },
      { args: [[2, 0, 2]], expected: 2 },
      { args: [[3, 0, 0, 3]], expected: 6 },
      { args: [[5, 4, 1, 2]], expected: 1 },
      { args: [[0, 0, 0]], expected: 0 },
    ],
    hints: [
      "Water above a bar is min(tallest to its left, tallest to its right) − its own height.",
      "Two pointers from the ends let you resolve the smaller side safely.",
      "Alternatively, a decreasing stack fills each basin as its right wall arrives.",
    ],
    solutions: [
      {
        label: "Two pointers",
        approach: "Advance the side with the smaller wall, accumulating trapped water.",
        js: "function trapRain(heights) {\n  let lo = 0, hi = heights.length - 1;\n  let leftMax = 0, rightMax = 0, total = 0;\n  while (lo < hi) {\n    if (heights[lo] < heights[hi]) {\n      leftMax = Math.max(leftMax, heights[lo]);\n      total += leftMax - heights[lo];\n      lo++;\n    } else {\n      rightMax = Math.max(rightMax, heights[hi]);\n      total += rightMax - heights[hi];\n      hi--;\n    }\n  }\n  return total;\n}\n",
        ts: "function trapRain(heights: number[]): number {\n  let lo = 0, hi = heights.length - 1;\n  let leftMax = 0, rightMax = 0, total = 0;\n  while (lo < hi) {\n    if (heights[lo] < heights[hi]) {\n      leftMax = Math.max(leftMax, heights[lo]);\n      total += leftMax - heights[lo];\n      lo++;\n    } else {\n      rightMax = Math.max(rightMax, heights[hi]);\n      total += rightMax - heights[hi];\n      hi--;\n    }\n  }\n  return total;\n}\n",
        commentedCode: {
          js: "function trapRain(heights) {\n  // Begin with one pointer at each boundary of the unprocessed region.\n  let left = 0, right = heights.length - 1;\n  let leftMax = 0, rightMax = 0, total = 0;\n  while (left < right) {\n    // The lower boundary is the side whose water level can be resolved now.\n    if (heights[left] < heights[right]) {\n      leftMax = Math.max(leftMax, heights[left]);\n      // The tallest left wall determines water above this position.\n      total += leftMax - heights[left];\n      left++;\n    } else {\n      rightMax = Math.max(rightMax, heights[right]);\n      // The tallest right wall determines water above this position.\n      total += rightMax - heights[right];\n      right--;\n    }\n  }\n  return total;\n}\n",
          ts: "function trapRain(heights: number[]): number {\n  // Begin with one pointer at each boundary of the unprocessed region.\n  let left = 0, right = heights.length - 1;\n  let leftMax = 0, rightMax = 0, total = 0;\n  while (left < right) {\n    // The lower boundary is the side whose water level can be resolved now.\n    if (heights[left] < heights[right]) {\n      leftMax = Math.max(leftMax, heights[left]);\n      // The tallest left wall determines water above this position.\n      total += leftMax - heights[left];\n      left++;\n    } else {\n      rightMax = Math.max(rightMax, heights[right]);\n      // The tallest right wall determines water above this position.\n      total += rightMax - heights[right];\n      right--;\n    }\n  }\n  return total;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Prefix max arrays",
        approach: "Precompute the tallest bar to each side, then sum the differences.",
        js: "function trapRain(heights) {\n  const n = heights.length;\n  if (n === 0) return 0;\n  const left = new Array(n), right = new Array(n);\n  left[0] = heights[0];\n  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], heights[i]);\n  right[n - 1] = heights[n - 1];\n  for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], heights[i]);\n  let total = 0;\n  for (let i = 0; i < n; i++) total += Math.min(left[i], right[i]) - heights[i];\n  return total;\n}\n",
        ts: "function trapRain(heights: number[]): number {\n  const n = heights.length;\n  if (n === 0) return 0;\n  const left = new Array(n), right = new Array(n);\n  left[0] = heights[0];\n  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], heights[i]);\n  right[n - 1] = heights[n - 1];\n  for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], heights[i]);\n  let total = 0;\n  for (let i = 0; i < n; i++) total += Math.min(left[i], right[i]) - heights[i];\n  return total;\n}\n",
        commentedCode: {
          js: "function trapRain(heights) {\n  const n = heights.length;\n  if (n === 0) return 0;\n  // left[i] and right[i] record the tallest walls at or beyond index i.\n  const left = new Array(n), right = new Array(n);\n  left[0] = heights[0];\n  // Build the tallest wall seen from the left for every position.\n  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], heights[i]);\n  right[n - 1] = heights[n - 1];\n  // Build the corresponding tallest wall seen from the right.\n  for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], heights[i]);\n  let total = 0;\n  for (let i = 0; i < n; i++) {\n    // Water is capped by the shorter boundary and sits above the current bar.\n    total += Math.min(left[i], right[i]) - heights[i];\n  }\n  return total;\n}\n",
          ts: "function trapRain(heights: number[]): number {\n  const n = heights.length;\n  if (n === 0) return 0;\n  // left[i] and right[i] record the tallest walls at or beyond index i.\n  const left = new Array(n), right = new Array(n);\n  left[0] = heights[0];\n  // Build the tallest wall seen from the left for every position.\n  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], heights[i]);\n  right[n - 1] = heights[n - 1];\n  // Build the corresponding tallest wall seen from the right.\n  for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], heights[i]);\n  let total = 0;\n  for (let i = 0; i < n; i++) {\n    // Water is capped by the shorter boundary and sits above the current bar.\n    total += Math.min(left[i], right[i]) - heights[i];\n  }\n  return total;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
];

export const monotonicStackProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const monotonicStackMcqs: QuizQuestion[] = [
  {
    id: "s4-ms-amortized",
    kind: "mcq",
    prompt: "In a monotonic-stack sweep, each element is pushed and popped at most once, so the total time is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "Even though there's an inner while-loop, the total pops are bounded by n.",
  },
  {
    id: "s4-ms-use",
    kind: "mcq",
    prompt: "A monotonic stack is the natural tool for:",
    options: [
      "sorting a list in place",
      "next-greater / previous-smaller element queries",
      "binary search on sorted data",
      "computing a hash of a string",
    ],
    answerIndex: 1,
    explanation: "It keeps candidates ordered so each element's nearest larger/smaller neighbour pops out.",
  },
];

export const monotonicStackModule: Module = {
  id: "m-pat-monotonic-stack",
  stageId: S,
  title: "Stack & Monotonic Stack",
  kind: "patternModule",
  summary: "Last-in-first-out bookkeeping — and the ordered stack that answers 'next greater' in one pass.",
  lessonSections: [
    {
      heading: "The stack as pending work",
      body: `A stack holds items whose fate isn't decided yet. Bracket matching, path simplification, and expression decoding all work because the **most recent** unresolved item is always the one that gets resolved first.

\`\`\`js
// '..' pops the last directory
const stack = [];
for (const part of "/a/b/../c".split('/')) {
  if (part === '' || part === '.') continue;
  if (part === '..') stack.pop(); else stack.push(part);
}
console.log('/' + stack.join('/')); // /a/c
\`\`\``,
    },
    {
      heading: "Monotonic: keep the stack ordered",
      body: `A **monotonic stack** keeps its values sorted (increasing or decreasing). When a new element arrives, you pop everything it "beats" — and each pop resolves that element's answer. Since every index is pushed and popped at most once, the whole sweep is **O(n)** even though there's an inner loop.

\`\`\`js
// Next greater element to the right
function nextGreater(nums) {
  const out = new Array(nums.length).fill(-1);
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) out[stack.pop()] = nums[i];
    stack.push(i);
  }
  return out;
}
console.log(nextGreater([2, 1, 3])); // [3, 3, -1]
\`\`\``,
    },
    {
      heading: "Recognition cues & pitfalls",
      body: `Reach for a stack when you see **nesting, matching, or undo**; reach for a *monotonic* stack when you need, for every element, the **nearest greater/smaller** value to one side — "days until warmer", "next greater", histogram rectangles, trapped rain water.

\`\`\`ts
// Monotonic template (decreasing stack of indices)
const stack: number[] = [];
for (let i = 0; i < arr.length; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    const j = stack.pop()!;   // arr[i] is j's "next greater"
  }
  stack.push(i);
}
\`\`\`

**Pitfalls:** choosing \`<\` vs \`<=\` decides how ties are handled; forgetting the **sentinel** (e.g. a trailing 0) leaves items stuck on the stack; storing values when you actually need **indices** (for widths/distances). Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "ms-final-prices",
  drillProblemIds: [
    "ms-final-prices",
    "ms-baseball-score",
    "ms-daily-temperatures",
    "ms-next-greater-circular",
    "ms-asteroid-collision",
    "ms-largest-rectangle",
  ],
  testPoolProblemIds: [
    "ms-previous-smaller",
    "ms-simplify-path",
    "ms-decode-string",
    "ms-trap-rain",
  ],
  complexityQuestionIds: ["s4-ms-amortized", "s4-ms-use"],
  badgeId: "badge-pat-monotonic-stack",
  prerequisiteModuleIds: [],
};
