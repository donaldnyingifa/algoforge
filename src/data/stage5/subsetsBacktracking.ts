import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s5";
const P = ["subsets-backtracking"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "sb-count-valid-parens",
    slug: "count-valid-parentheses",
    title: "Count Valid Parentheses",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Return how many different valid strings you can build from `n` pairs of parentheses. `n = 0` has exactly one arrangement (the empty string).",
    examples: [
      { input: "3", output: "5" },
      { input: "1", output: "1" },
      { input: "0", output: "1" },
    ],
    constraints: ["0 <= n <= 12"],
    functionName: "countValidParens",
    starter: {
      js: "function countValidParens(n) {\n  // How many valid arrangements of n pairs.\n}\n",
      ts: "function countValidParens(n: number): number {\n  // How many valid arrangements of n pairs.\n  return 0;\n}\n",
    },
    visible: [
      { args: [3], expected: 5 },
      { args: [1], expected: 1 },
      { args: [0], expected: 1 },
    ],
    hidden: [
      { args: [2], expected: 2 },
      { args: [4], expected: 14 },
      { args: [5], expected: 42 },
      { args: [6], expected: 132 },
      { args: [7], expected: 429 },
      { args: [8], expected: 1430 },
    ],
    hints: [
      "Build the string left to right, tracking how many '(' and ')' you've placed.",
      "You may add '(' while fewer than n are placed, and ')' only while it wouldn't outnumber '('.",
      "Count a completed string when both counters reach n.",
    ],
    solutions: [
      {
        label: "Backtracking with two counters",
        approach: "Explore each legal next character and count complete strings.",
        js: "function countValidParens(n) {\n  let count = 0;\n  const go = (open, close) => {\n    if (open === n && close === n) { count++; return; }\n    if (open < n) go(open + 1, close);\n    if (close < open) go(open, close + 1);\n  };\n  go(0, 0);\n  return count;\n}\n",
        ts: "function countValidParens(n: number): number {\n  let count = 0;\n  const go = (open: number, close: number) => {\n    if (open === n && close === n) { count++; return; }\n    if (open < n) go(open + 1, close);\n    if (close < open) go(open, close + 1);\n  };\n  go(0, 0);\n  return count;\n}\n",
        time: "O(Catalan(n))",
        space: "O(n)",
      },
      {
        label: "Catalan numbers",
        approach: "The answer is the n-th Catalan number, built up iteratively.",
        js: "function countValidParens(n) {\n  const c = new Array(n + 1).fill(0);\n  c[0] = 1;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 0; j < i; j++) c[i] += c[j] * c[i - 1 - j];\n  }\n  return c[n];\n}\n",
        ts: "function countValidParens(n: number): number {\n  const c = new Array(n + 1).fill(0);\n  c[0] = 1;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 0; j < i; j++) c[i] += c[j] * c[i - 1 - j];\n  }\n  return c[n];\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "sb-count-paths-grid",
    slug: "count-grid-paths",
    title: "Count Grid Paths",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Starting at the top-left of a `rows` × `cols` grid and moving only right or down, return how many distinct paths reach the bottom-right. An empty grid has 0 paths.",
    examples: [
      { input: "2, 2", output: "2" },
      { input: "3, 3", output: "6" },
      { input: "1, 5", output: "1" },
    ],
    constraints: ["0 <= rows, cols <= 15"],
    functionName: "countPathsGrid",
    starter: {
      js: "function countPathsGrid(rows, cols) {\n  // Paths moving only right or down.\n}\n",
      ts: "function countPathsGrid(rows: number, cols: number): number {\n  // Paths moving only right or down.\n  return 0;\n}\n",
    },
    visible: [
      { args: [2, 2], expected: 2 },
      { args: [3, 3], expected: 6 },
      { args: [1, 5], expected: 1 },
    ],
    hidden: [
      { args: [1, 1], expected: 1 },
      { args: [0, 3], expected: 0 },
      { args: [3, 0], expected: 0 },
      { args: [2, 3], expected: 3 },
      { args: [4, 4], expected: 20 },
      { args: [3, 7], expected: 28 },
    ],
    hints: [
      "From any cell you may branch two ways: down or right.",
      "Reaching the bottom-right counts as one path; stepping off the grid counts as none.",
      "Caching results per cell turns the exponential search into a linear one.",
    ],
    solutions: [
      {
        label: "Backtracking with memoisation",
        approach: "Branch right and down, caching each cell's path count.",
        js: "function countPathsGrid(rows, cols) {\n  if (rows <= 0 || cols <= 0) return 0;\n  const memo = new Map();\n  const go = (r, c) => {\n    if (r === rows - 1 && c === cols - 1) return 1;\n    if (r >= rows || c >= cols) return 0;\n    const key = r * cols + c;\n    if (memo.has(key)) return memo.get(key);\n    const total = go(r + 1, c) + go(r, c + 1);\n    memo.set(key, total);\n    return total;\n  };\n  return go(0, 0);\n}\n",
        ts: "function countPathsGrid(rows: number, cols: number): number {\n  if (rows <= 0 || cols <= 0) return 0;\n  const memo = new Map<number, number>();\n  const go = (r: number, c: number): number => {\n    if (r === rows - 1 && c === cols - 1) return 1;\n    if (r >= rows || c >= cols) return 0;\n    const key = r * cols + c;\n    if (memo.has(key)) return memo.get(key) as number;\n    const total = go(r + 1, c) + go(r, c + 1);\n    memo.set(key, total);\n    return total;\n  };\n  return go(0, 0);\n}\n",
        time: "O(rows·cols)",
        space: "O(rows·cols)",
      },
      {
        label: "Build a table",
        approach: "Each cell's count is the sum of the cell above and the cell to the left.",
        js: "function countPathsGrid(rows, cols) {\n  if (rows <= 0 || cols <= 0) return 0;\n  const grid = Array.from({ length: rows }, () => new Array(cols).fill(1));\n  for (let r = 1; r < rows; r++) {\n    for (let c = 1; c < cols; c++) grid[r][c] = grid[r - 1][c] + grid[r][c - 1];\n  }\n  return grid[rows - 1][cols - 1];\n}\n",
        ts: "function countPathsGrid(rows: number, cols: number): number {\n  if (rows <= 0 || cols <= 0) return 0;\n  const grid = Array.from({ length: rows }, () => new Array(cols).fill(1));\n  for (let r = 1; r < rows; r++) {\n    for (let c = 1; c < cols; c++) grid[r][c] = grid[r - 1][c] + grid[r][c - 1];\n  }\n  return grid[rows - 1][cols - 1];\n}\n",
        time: "O(rows·cols)",
        space: "O(rows·cols)",
      },
    ],
  },
  {
    id: "sb-subsets-with-duplicates",
    slug: "subsets-with-duplicates",
    title: "Subsets with Duplicates",
    difficulty: "medium",
    patternIds: P,
    statement:
      "The list may contain repeated values. Return every **distinct** subset, each written in ascending order, with the list of subsets ordered by size and then lexicographically.",
    examples: [
      { input: "[1,2,2]", output: "[[],[1],[2],[1,2],[2,2],[1,2,2]]" },
      { input: "[1]", output: "[[],[1]]" },
      { input: "[]", output: "[[]]" },
    ],
    constraints: ["0 <= nums.length <= 12"],
    functionName: "subsetsWithDup",
    starter: {
      js: "function subsetsWithDup(nums) {\n  // Distinct subsets, ordered by size then lexicographically.\n}\n",
      ts: "function subsetsWithDup(nums: number[]): number[][] {\n  // Distinct subsets, ordered by size then lexicographically.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 2]], expected: [[], [1], [2], [1, 2], [2, 2], [1, 2, 2]] },
      { args: [[1]], expected: [[], [1]] },
      { args: [[]], expected: [[]] },
    ],
    hidden: [
      { args: [[1, 1]], expected: [[], [1], [1, 1]] },
      { args: [[2, 2, 2]], expected: [[], [2], [2, 2], [2, 2, 2]] },
      { args: [[1, 2]], expected: [[], [1], [2], [1, 2]] },
      { args: [[1, 1, 2]], expected: [[], [1], [2], [1, 1], [1, 2], [1, 1, 2]] },
      { args: [[5]], expected: [[], [5]] },
      { args: [[3, 3]], expected: [[], [3], [3, 3]] },
    ],
    hints: [
      "Sort first so equal values sit next to each other.",
      "At each level, skip a value identical to the previous one you already tried there.",
      "Sort the finished list by length, then lexicographically.",
    ],
    solutions: [
      {
        label: "Backtracking, skipping repeats",
        approach: "Sort, then avoid choosing the same value twice at one decision level.",
        js: "function subsetsWithDup(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const res = [];\n  const bt = (start, cur) => {\n    res.push([...cur]);\n    for (let i = start; i < a.length; i++) {\n      if (i > start && a[i] === a[i - 1]) continue;\n      cur.push(a[i]);\n      bt(i + 1, cur);\n      cur.pop();\n    }\n  };\n  bt(0, []);\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n",
        ts: "function subsetsWithDup(nums: number[]): number[][] {\n  const a = [...nums].sort((x, y) => x - y);\n  const res: number[][] = [];\n  const bt = (start: number, cur: number[]) => {\n    res.push([...cur]);\n    for (let i = start; i < a.length; i++) {\n      if (i > start && a[i] === a[i - 1]) continue;\n      cur.push(a[i]);\n      bt(i + 1, cur);\n      cur.pop();\n    }\n  };\n  bt(0, []);\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n",
        time: "O(n · 2ⁿ)",
        space: "O(n · 2ⁿ)",
      },
      {
        label: "Enumerate bitmasks and dedupe",
        approach: "Generate every subset by bitmask, then remove duplicates by key.",
        js: "function subsetsWithDup(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const seen = new Map();\n  for (let mask = 0; mask < (1 << a.length); mask++) {\n    const subset = [];\n    for (let i = 0; i < a.length; i++) if (mask & (1 << i)) subset.push(a[i]);\n    seen.set(subset.join(','), subset);\n  }\n  const res = [...seen.values()];\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n",
        ts: "function subsetsWithDup(nums: number[]): number[][] {\n  const a = [...nums].sort((x, y) => x - y);\n  const seen = new Map<string, number[]>();\n  for (let mask = 0; mask < (1 << a.length); mask++) {\n    const subset: number[] = [];\n    for (let i = 0; i < a.length; i++) if (mask & (1 << i)) subset.push(a[i]);\n    seen.set(subset.join(','), subset);\n  }\n  const res = [...seen.values()];\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n",
        time: "O(n · 2ⁿ)",
        space: "O(n · 2ⁿ)",
      },
    ],
  },
  {
    id: "sb-combination-sum-count",
    slug: "combination-sum-count",
    title: "Combination Sum Count",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given distinct positive `candidates` that may each be used any number of times, return how many distinct combinations add up to `target`. Combinations that differ only in order count once. A target of 0 has exactly one combination (the empty one).",
    examples: [
      { input: "[2,3,6,7], 7", output: "2" },
      { input: "[2,3,5], 8", output: "3" },
      { input: "[2], 1", output: "0" },
    ],
    constraints: ["candidates are distinct positive integers", "0 <= target <= 40"],
    functionName: "combinationSumCount",
    starter: {
      js: "function combinationSumCount(candidates, target) {\n  // Distinct combinations (reuse allowed) summing to target.\n}\n",
      ts: "function combinationSumCount(candidates: number[], target: number): number {\n  // Distinct combinations (reuse allowed) summing to target.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 3, 6, 7], 7], expected: 2 },
      { args: [[2, 3, 5], 8], expected: 3 },
      { args: [[2], 1], expected: 0 },
    ],
    hidden: [
      { args: [[1], 3], expected: 1 },
      { args: [[1, 2], 3], expected: 2 },
      { args: [[2, 4], 7], expected: 0 },
      { args: [[3], 9], expected: 1 },
      { args: [[2, 3], 6], expected: 2 },
      { args: [[5], 0], expected: 1 },
    ],
    hints: [
      "To avoid counting reorderings, never step backwards through the candidate list.",
      "Recurse with the same index to allow reuse, or a larger index to move on.",
      "Reaching exactly 0 is one combination; going below 0 is a dead end.",
    ],
    solutions: [
      {
        label: "Backtracking with a start index",
        approach: "Only ever reuse the current candidate or move forward, so order never repeats.",
        js: "function combinationSumCount(candidates, target) {\n  let count = 0;\n  const go = (start, remaining) => {\n    if (remaining === 0) { count++; return; }\n    if (remaining < 0) return;\n    for (let i = start; i < candidates.length; i++) go(i, remaining - candidates[i]);\n  };\n  go(0, target);\n  return count;\n}\n",
        ts: "function combinationSumCount(candidates: number[], target: number): number {\n  let count = 0;\n  const go = (start: number, remaining: number) => {\n    if (remaining === 0) { count++; return; }\n    if (remaining < 0) return;\n    for (let i = start; i < candidates.length; i++) go(i, remaining - candidates[i]);\n  };\n  go(0, target);\n  return count;\n}\n",
        time: "exponential in target",
        space: "O(target)",
      },
      {
        label: "Count by table",
        approach: "Process candidates one at a time so each combination is counted once.",
        js: "function combinationSumCount(candidates, target) {\n  const ways = new Array(target + 1).fill(0);\n  ways[0] = 1;\n  for (const c of candidates) {\n    for (let sum = c; sum <= target; sum++) ways[sum] += ways[sum - c];\n  }\n  return ways[target];\n}\n",
        ts: "function combinationSumCount(candidates: number[], target: number): number {\n  const ways = new Array(target + 1).fill(0);\n  ways[0] = 1;\n  for (const c of candidates) {\n    for (let sum = c; sum <= target; sum++) ways[sum] += ways[sum - c];\n  }\n  return ways[target];\n}\n",
        time: "O(candidates · target)",
        space: "O(target)",
      },
    ],
  },
  {
    id: "sb-palindrome-partitions",
    slug: "palindrome-partition-count",
    title: "Palindrome Partition Count",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return how many ways the string can be cut into pieces where every piece is a palindrome. The empty string has exactly one such partition.",
    examples: [
      { input: '"aab"', output: "2" },
      { input: '"a"', output: "1" },
      { input: '""', output: "1" },
    ],
    constraints: ["0 <= s.length <= 16"],
    functionName: "palindromePartitionsCount",
    starter: {
      js: "function palindromePartitionsCount(s) {\n  // Ways to cut s into palindromic pieces.\n}\n",
      ts: "function palindromePartitionsCount(s: string): number {\n  // Ways to cut s into palindromic pieces.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["aab"], expected: 2 },
      { args: ["a"], expected: 1 },
      { args: [""], expected: 1 },
    ],
    hidden: [
      { args: ["aa"], expected: 2 },
      { args: ["abc"], expected: 1 },
      { args: ["aba"], expected: 2 },
      { args: ["aaa"], expected: 4 },
      { args: ["ab"], expected: 1 },
      { args: ["abba"], expected: 3 },
    ],
    hints: [
      "Try every possible first piece; keep the ones that are palindromes.",
      "For each valid first piece, recurse on the remainder of the string.",
      "Reaching the end of the string is one complete partition.",
    ],
    solutions: [
      {
        label: "Backtracking over cut points",
        approach: "Take every palindromic prefix and recurse on what's left.",
        js: "function palindromePartitionsCount(s) {\n  const n = s.length;\n  const isPal = (a, b) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  const memo = new Map();\n  const go = (i) => {\n    if (i === n) return 1;\n    if (memo.has(i)) return memo.get(i);\n    let total = 0;\n    for (let j = i; j < n; j++) if (isPal(i, j)) total += go(j + 1);\n    memo.set(i, total);\n    return total;\n  };\n  return go(0);\n}\n",
        ts: "function palindromePartitionsCount(s: string): number {\n  const n = s.length;\n  const isPal = (a: number, b: number) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    if (i === n) return 1;\n    if (memo.has(i)) return memo.get(i) as number;\n    let total = 0;\n    for (let j = i; j < n; j++) if (isPal(i, j)) total += go(j + 1);\n    memo.set(i, total);\n    return total;\n  };\n  return go(0);\n}\n",
        time: "O(n³)",
        space: "O(n)",
      },
      {
        label: "Count from the right",
        approach: "Fill a table where each entry counts partitions of the suffix starting there.",
        js: "function palindromePartitionsCount(s) {\n  const n = s.length;\n  const isPal = (a, b) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  const ways = new Array(n + 1).fill(0);\n  ways[n] = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    for (let j = i; j < n; j++) if (isPal(i, j)) ways[i] += ways[j + 1];\n  }\n  return ways[0];\n}\n",
        ts: "function palindromePartitionsCount(s: string): number {\n  const n = s.length;\n  const isPal = (a: number, b: number) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  const ways = new Array(n + 1).fill(0);\n  ways[n] = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    for (let j = i; j < n; j++) if (isPal(i, j)) ways[i] += ways[j + 1];\n  }\n  return ways[0];\n}\n",
        time: "O(n³)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "sb-n-queens-count",
    slug: "n-queens-count",
    title: "N-Queens Count",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return how many ways `n` queens can be placed on an `n` × `n` board so that no two share a row, column, or diagonal. `n = 0` counts as one (empty) arrangement.",
    examples: [
      { input: "4", output: "2" },
      { input: "1", output: "1" },
      { input: "2", output: "0" },
    ],
    constraints: ["0 <= n <= 9"],
    functionName: "nQueensCount",
    starter: {
      js: "function nQueensCount(n) {\n  // Number of valid n-queens placements.\n}\n",
      ts: "function nQueensCount(n: number): number {\n  // Number of valid n-queens placements.\n  return 0;\n}\n",
    },
    visible: [
      { args: [4], expected: 2 },
      { args: [1], expected: 1 },
      { args: [2], expected: 0 },
    ],
    hidden: [
      { args: [0], expected: 1 },
      { args: [3], expected: 0 },
      { args: [5], expected: 10 },
      { args: [6], expected: 4 },
      { args: [7], expected: 40 },
      { args: [8], expected: 92 },
    ],
    hints: [
      "Place exactly one queen per row, so you only choose a column for each row.",
      "Track used columns and both diagonals — `row - col` and `row + col` identify them.",
      "Undo each placement before trying the next column: choose, explore, un-choose.",
    ],
    solutions: [
      {
        label: "Backtracking row by row",
        approach: "Try each column in the current row, pruning conflicts with sets.",
        js: "function nQueensCount(n) {\n  if (n === 0) return 1;\n  let count = 0;\n  const cols = new Set(), diag = new Set(), anti = new Set();\n  const go = (r) => {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (cols.has(c) || diag.has(r - c) || anti.has(r + c)) continue;\n      cols.add(c); diag.add(r - c); anti.add(r + c);\n      go(r + 1);\n      cols.delete(c); diag.delete(r - c); anti.delete(r + c);\n    }\n  };\n  go(0);\n  return count;\n}\n",
        ts: "function nQueensCount(n: number): number {\n  if (n === 0) return 1;\n  let count = 0;\n  const cols = new Set<number>(), diag = new Set<number>(), anti = new Set<number>();\n  const go = (r: number) => {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (cols.has(c) || diag.has(r - c) || anti.has(r + c)) continue;\n      cols.add(c); diag.add(r - c); anti.add(r + c);\n      go(r + 1);\n      cols.delete(c); diag.delete(r - c); anti.delete(r + c);\n    }\n  };\n  go(0);\n  return count;\n}\n",
        time: "O(n!) with pruning",
        space: "O(n)",
      },
      {
        label: "Track placements in an array",
        approach: "Keep the chosen column per row and validate against earlier rows.",
        js: "function nQueensCount(n) {\n  if (n === 0) return 1;\n  const placed = [];\n  let count = 0;\n  const safe = (r, c) => placed.every((pc, pr) => pc !== c && Math.abs(pc - c) !== Math.abs(pr - r));\n  const go = (r) => {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (!safe(r, c)) continue;\n      placed.push(c);\n      go(r + 1);\n      placed.pop();\n    }\n  };\n  go(0);\n  return count;\n}\n",
        ts: "function nQueensCount(n: number): number {\n  if (n === 0) return 1;\n  const placed: number[] = [];\n  let count = 0;\n  const safe = (r: number, c: number) => placed.every((pc, pr) => pc !== c && Math.abs(pc - c) !== Math.abs(pr - r));\n  const go = (r: number) => {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (!safe(r, c)) continue;\n      placed.push(c);\n      go(r + 1);\n      placed.pop();\n    }\n  };\n  go(0);\n  return count;\n}\n",
        time: "O(n! · n)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "sb-permutations-distinct-count",
    slug: "distinct-permutation-count",
    title: "Distinct Permutation Count",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return how many **distinct** orderings the values have. Repeated values make some orderings identical. An empty list has one ordering.",
    examples: [
      { input: "[1,1,2]", output: "3" },
      { input: "[1,2,3]", output: "6" },
      { input: "[]", output: "1" },
    ],
    constraints: ["0 <= nums.length <= 8"],
    functionName: "permutationsDistinctCount",
    starter: {
      js: "function permutationsDistinctCount(nums) {\n  // Number of distinct orderings.\n}\n",
      ts: "function permutationsDistinctCount(nums: number[]): number {\n  // Number of distinct orderings.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 1, 2]], expected: 3 },
      { args: [[1, 2, 3]], expected: 6 },
      { args: [[]], expected: 1 },
    ],
    hidden: [
      { args: [[1]], expected: 1 },
      { args: [[1, 1]], expected: 1 },
      { args: [[1, 2]], expected: 2 },
      { args: [[1, 1, 1]], expected: 1 },
      { args: [[1, 1, 2, 2]], expected: 6 },
      { args: [[1, 2, 3, 4]], expected: 24 },
    ],
    hints: [
      "Without repeats the answer is n!.",
      "Each value repeated c times over-counts by a factor of c!.",
      "So divide n! by the factorial of every repeat count.",
    ],
    solutions: [
      {
        label: "Factorial with repeat correction",
        approach: "n! divided by the factorial of each value's multiplicity.",
        js: "function permutationsDistinctCount(nums) {\n  const counts = new Map();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  const fact = (k) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; };\n  let result = fact(nums.length);\n  for (const c of counts.values()) result /= fact(c);\n  return result;\n}\n",
        ts: "function permutationsDistinctCount(nums: number[]): number {\n  const counts = new Map<number, number>();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  const fact = (k: number) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; };\n  let result = fact(nums.length);\n  for (const c of counts.values()) result /= fact(c);\n  return result;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Backtracking, skipping repeats",
        approach: "Generate orderings but never reuse the same value at one position.",
        js: "function permutationsDistinctCount(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const used = new Array(a.length).fill(false);\n  let count = 0;\n  const go = (depth) => {\n    if (depth === a.length) { count++; return; }\n    for (let i = 0; i < a.length; i++) {\n      if (used[i]) continue;\n      if (i > 0 && a[i] === a[i - 1] && !used[i - 1]) continue;\n      used[i] = true;\n      go(depth + 1);\n      used[i] = false;\n    }\n  };\n  go(0);\n  return count;\n}\n",
        ts: "function permutationsDistinctCount(nums: number[]): number {\n  const a = [...nums].sort((x, y) => x - y);\n  const used = new Array(a.length).fill(false);\n  let count = 0;\n  const go = (depth: number) => {\n    if (depth === a.length) { count++; return; }\n    for (let i = 0; i < a.length; i++) {\n      if (used[i]) continue;\n      if (i > 0 && a[i] === a[i - 1] && !used[i - 1]) continue;\n      used[i] = true;\n      go(depth + 1);\n      used[i] = false;\n    }\n  };\n  go(0);\n  return count;\n}\n",
        time: "O(n · n!)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "sb-letter-combinations",
    slug: "letter-combinations",
    title: "Phone Letter Combinations",
    difficulty: "medium",
    patternIds: P,
    statement:
      "On a phone keypad 2–9 map to letters (2:abc, 3:def, 4:ghi, 5:jkl, 6:mno, 7:pqrs, 8:tuv, 9:wxyz). Return every letter combination the digit string could spell, sorted lexicographically. An empty input gives an empty list.",
    examples: [
      { input: '"23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' },
      { input: '"2"', output: '["a","b","c"]' },
      { input: '""', output: "[]" },
    ],
    constraints: ["digits contains only characters 2-9", "0 <= digits.length <= 4"],
    functionName: "letterCombinations",
    starter: {
      js: "function letterCombinations(digits) {\n  // Every letter combination, sorted.\n}\n",
      ts: "function letterCombinations(digits: string): string[] {\n  // Every letter combination, sorted.\n  return [];\n}\n",
    },
    visible: [
      { args: ["23"], expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] },
      { args: ["2"], expected: ["a", "b", "c"] },
      { args: [""], expected: [] },
    ],
    hidden: [
      { args: ["9"], expected: ["w", "x", "y", "z"] },
      { args: ["7"], expected: ["p", "q", "r", "s"] },
      { args: ["22"], expected: ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"] },
      { args: ["34"], expected: ["dg", "dh", "di", "eg", "eh", "ei", "fg", "fh", "fi"] },
      { args: ["5"], expected: ["j", "k", "l"] },
      {
        args: ["89"],
        expected: ["tw", "tx", "ty", "tz", "uw", "ux", "uy", "uz", "vw", "vx", "vy", "vz"],
      },
    ],
    hints: [
      "Build the string one digit at a time, branching over that digit's letters.",
      "Recording a combination when you've consumed every digit.",
      "Iterating each digit's letters in order produces lexicographic output naturally.",
    ],
    solutions: [
      {
        label: "Backtracking over digits",
        approach: "Append one letter per digit, recording completed strings.",
        js: "function letterCombinations(digits) {\n  if (digits.length === 0) return [];\n  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  const out = [];\n  const go = (i, cur) => {\n    if (i === digits.length) { out.push(cur); return; }\n    for (const ch of map[digits[i]]) go(i + 1, cur + ch);\n  };\n  go(0, '');\n  return out;\n}\n",
        ts: "function letterCombinations(digits: string): string[] {\n  if (digits.length === 0) return [];\n  const map: Record<string, string> = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  const out: string[] = [];\n  const go = (i: number, cur: string) => {\n    if (i === digits.length) { out.push(cur); return; }\n    for (const ch of map[digits[i]]) go(i + 1, cur + ch);\n  };\n  go(0, '');\n  return out;\n}\n",
        time: "O(4ⁿ)",
        space: "O(4ⁿ)",
      },
      {
        label: "Iterative expansion",
        approach: "Grow the set of prefixes one digit at a time.",
        js: "function letterCombinations(digits) {\n  if (digits.length === 0) return [];\n  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  let out = [''];\n  for (const d of digits) {\n    const next = [];\n    for (const prefix of out) for (const ch of map[d]) next.push(prefix + ch);\n    out = next;\n  }\n  return out.sort();\n}\n",
        ts: "function letterCombinations(digits: string): string[] {\n  if (digits.length === 0) return [];\n  const map: Record<string, string> = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  let out: string[] = [''];\n  for (const d of digits) {\n    const next: string[] = [];\n    for (const prefix of out) for (const ch of map[d]) next.push(prefix + ch);\n    out = next;\n  }\n  return out.sort();\n}\n",
        time: "O(4ⁿ)",
        space: "O(4ⁿ)",
      },
    ],
  },
  {
    id: "sb-count-subsets-size-k",
    slug: "count-subsets-of-size-k",
    title: "Count Subsets of Size K",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return how many subsets of exactly `k` items can be chosen from `n` distinct items. If `k` exceeds `n`, the answer is 0.",
    examples: [
      { input: "5, 2", output: "10" },
      { input: "4, 0", output: "1" },
      { input: "3, 5", output: "0" },
    ],
    constraints: ["0 <= n <= 20", "0 <= k"],
    functionName: "countSubsetsOfSizeK",
    starter: {
      js: "function countSubsetsOfSizeK(n, k) {\n  // Number of k-item subsets of n items.\n}\n",
      ts: "function countSubsetsOfSizeK(n: number, k: number): number {\n  // Number of k-item subsets of n items.\n  return 0;\n}\n",
    },
    visible: [
      { args: [5, 2], expected: 10 },
      { args: [4, 0], expected: 1 },
      { args: [3, 5], expected: 0 },
    ],
    hidden: [
      { args: [0, 0], expected: 1 },
      { args: [1, 1], expected: 1 },
      { args: [6, 3], expected: 20 },
      { args: [10, 5], expected: 252 },
      { args: [5, 5], expected: 1 },
      { args: [5, 6], expected: 0 },
    ],
    hints: [
      "For each item you either take it or skip it — but only count paths that pick exactly k.",
      "That recursion is C(n,k) = C(n-1,k-1) + C(n-1,k).",
      "Base cases: k = 0 gives 1, and k > n gives 0.",
    ],
    solutions: [
      {
        label: "Choose-or-skip recursion",
        approach: "Count the take/skip branches that end with exactly k chosen.",
        js: "function countSubsetsOfSizeK(n, k) {\n  if (k > n) return 0;\n  const memo = new Map();\n  const go = (remaining, need) => {\n    if (need === 0) return 1;\n    if (remaining < need) return 0;\n    const key = remaining * 100 + need;\n    if (memo.has(key)) return memo.get(key);\n    const total = go(remaining - 1, need - 1) + go(remaining - 1, need);\n    memo.set(key, total);\n    return total;\n  };\n  return go(n, k);\n}\n",
        ts: "function countSubsetsOfSizeK(n: number, k: number): number {\n  if (k > n) return 0;\n  const memo = new Map<number, number>();\n  const go = (remaining: number, need: number): number => {\n    if (need === 0) return 1;\n    if (remaining < need) return 0;\n    const key = remaining * 100 + need;\n    if (memo.has(key)) return memo.get(key) as number;\n    const total = go(remaining - 1, need - 1) + go(remaining - 1, need);\n    memo.set(key, total);\n    return total;\n  };\n  return go(n, k);\n}\n",
        time: "O(n·k)",
        space: "O(n·k)",
      },
      {
        label: "Multiplicative formula",
        approach: "Build C(n,k) by multiplying and dividing term by term.",
        js: "function countSubsetsOfSizeK(n, k) {\n  if (k > n) return 0;\n  let result = 1;\n  for (let i = 1; i <= k; i++) result = (result * (n - k + i)) / i;\n  return Math.round(result);\n}\n",
        ts: "function countSubsetsOfSizeK(n: number, k: number): number {\n  if (k > n) return 0;\n  let result = 1;\n  for (let i = 1; i <= k; i++) result = (result * (n - k + i)) / i;\n  return Math.round(result);\n}\n",
        time: "O(k)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "sb-count-decodings",
    slug: "count-decodings",
    title: "Count Decodings",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Letters map to numbers as A=1 … Z=26. Given a digit string, return how many ways it can be decoded into letters. A piece may not have a leading zero, so `\"06\"` decodes no ways. The empty string decodes exactly one way.",
    examples: [
      { input: '"12"', output: "2" },
      { input: '"226"', output: "3" },
      { input: '"0"', output: "0" },
    ],
    constraints: ["the string contains only digits", "0 <= s.length <= 16"],
    functionName: "countDecodings",
    starter: {
      js: "function countDecodings(s) {\n  // Ways to decode the digit string.\n}\n",
      ts: "function countDecodings(s: string): number {\n  // Ways to decode the digit string.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["12"], expected: 2 },
      { args: ["226"], expected: 3 },
      { args: ["0"], expected: 0 },
    ],
    hidden: [
      { args: [""], expected: 1 },
      { args: ["1"], expected: 1 },
      { args: ["10"], expected: 1 },
      { args: ["27"], expected: 1 },
      { args: ["06"], expected: 0 },
      { args: ["11106"], expected: 2 },
    ],
    hints: [
      "At each position you may take one digit, or two digits when they form 10–26.",
      "A piece starting with '0' is invalid, so that branch contributes nothing.",
      "Caching by position turns the exponential branching into a linear scan.",
    ],
    solutions: [
      {
        label: "Backtracking with memoisation",
        approach: "Branch on one-digit and two-digit pieces, caching each position.",
        js: "function countDecodings(s) {\n  const n = s.length;\n  const memo = new Map();\n  const go = (i) => {\n    if (i === n) return 1;\n    if (s[i] === '0') return 0;\n    if (memo.has(i)) return memo.get(i);\n    let total = go(i + 1);\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) total += go(i + 2);\n    memo.set(i, total);\n    return total;\n  };\n  return go(0);\n}\n",
        ts: "function countDecodings(s: string): number {\n  const n = s.length;\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    if (i === n) return 1;\n    if (s[i] === '0') return 0;\n    if (memo.has(i)) return memo.get(i) as number;\n    let total = go(i + 1);\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) total += go(i + 2);\n    memo.set(i, total);\n    return total;\n  };\n  return go(0);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Table from the right",
        approach: "Each position's count follows from the next one or two positions.",
        js: "function countDecodings(s) {\n  const n = s.length;\n  const ways = new Array(n + 1).fill(0);\n  ways[n] = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    if (s[i] === '0') { ways[i] = 0; continue; }\n    ways[i] = ways[i + 1];\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) ways[i] += ways[i + 2];\n  }\n  return ways[0];\n}\n",
        ts: "function countDecodings(s: string): number {\n  const n = s.length;\n  const ways = new Array(n + 1).fill(0);\n  ways[n] = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    if (s[i] === '0') { ways[i] = 0; continue; }\n    ways[i] = ways[i + 1];\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) ways[i] += ways[i + 2];\n  }\n  return ways[0];\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
];

export const subsetsBacktrackingProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const subsetsBacktrackingMcqs: QuizQuestion[] = [
  {
    id: "s5-sb-subsets",
    kind: "mcq",
    prompt: "How many subsets does a set of n distinct items have?",
    options: ["n", "n²", "2ⁿ", "n!"],
    answerIndex: 2,
    explanation: "Each item is independently in or out, giving 2 × 2 × … = 2ⁿ.",
  },
  {
    id: "s5-sb-prune",
    kind: "mcq",
    prompt: "Backtracking beats plain brute force mainly because it:",
    options: [
      "sorts the input first",
      "abandons branches that cannot lead to a valid solution",
      "replaces recursion with a loop",
      "caches every result in a hash map",
    ],
    answerIndex: 1,
    explanation: "Pruning dead branches early is what keeps the exponential search practical.",
  },
];

export const subsetsBacktrackingModule: Module = {
  id: "m-pat-subsets-backtracking",
  stageId: S,
  title: "Subsets & Backtracking",
  kind: "patternModule",
  summary: "Choose, explore, un-choose — systematic search over subsets, arrangements, and partitions.",
  lessonSections: [
    {
      heading: "Choose, explore, un-choose",
      body: `Backtracking walks a decision tree. At each node you **choose** an option, **explore** what follows, then **un-choose** so the next option starts from a clean slate. That third step is what people forget.

\`\`\`js
function subsets(nums) {
  const res = [];
  const bt = (start, cur) => {
    res.push([...cur]);              // every node is itself an answer here
    for (let i = start; i < nums.length; i++) {
      cur.push(nums[i]);             // choose
      bt(i + 1, cur);                // explore
      cur.pop();                     // un-choose
    }
  };
  bt(0, []);
  return res;
}
console.log(subsets([1, 2, 3]).length); // 8 = 2³
\`\`\`

Push a **copy** (\`[...cur]\`) — pushing \`cur\` itself stores a reference that later mutations will corrupt.`,
    },
    {
      heading: "Recognition cues",
      body: `Reach for backtracking when a problem asks you to **generate** or **count** arrangements:

- all **subsets**, **combinations**, or **permutations** (with or without duplicates),
- **partitions** of a string or list (palindrome cuts, decodings),
- **constraint puzzles** — N-queens, sudoku, word search,
- "how many ways…" questions where the choices form a tree.

The shape is exponential — 2ⁿ subsets, n! permutations — so **pruning** is what makes it usable. Cut a branch the moment it can't succeed (a sum already past the target, a queen already attacked).`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Skip duplicates at the same decision level (input must be sorted)
for (let i = start; i < a.length; i++) {
  if (i > start && a[i] === a[i - 1]) continue;  // same value already tried here
  cur.push(a[i]);
  bt(i + 1, cur);
  cur.pop();
}

// Combinations without reordering: never step backwards
for (let i = start; i < candidates.length; i++) go(i, remaining - candidates[i]);
\`\`\`

**Pitfalls:** forgetting to un-choose (state leaks into sibling branches); storing a reference instead of a copy; using \`i > 0\` instead of \`i > start\` in the duplicate skip, which wrongly drops valid picks; and letting the *order* of generated results vary — when a problem's natural output order is ambiguous, **sort canonically** before returning so the answer is well defined. Several drills below are phrased as **counts** for exactly that reason. Work them easy to hard.`,
    },
  ],
  guidedExampleProblemId: "sb-count-valid-parens",
  drillProblemIds: [
    "sb-count-valid-parens",
    "sb-count-paths-grid",
    "sb-subsets-with-duplicates",
    "sb-combination-sum-count",
    "sb-palindrome-partitions",
    "sb-n-queens-count",
  ],
  testPoolProblemIds: [
    "sb-permutations-distinct-count",
    "sb-letter-combinations",
    "sb-count-subsets-size-k",
    "sb-count-decodings",
  ],
  complexityQuestionIds: ["s5-sb-subsets", "s5-sb-prune"],
  badgeId: "badge-pat-subsets-backtracking",
  prerequisiteModuleIds: [],
};
