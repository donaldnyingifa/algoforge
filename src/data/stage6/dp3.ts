import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["dp-grid"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "d3-unique-paths",
    slug: "unique-paths",
    title: "Unique Paths",
    difficulty: "easy",
    patternIds: P,
    statement:
      "A robot sits at the top-left of an `m` × `n` grid and may move only right or down. Return how many distinct paths reach the bottom-right corner.",
    examples: [
      { input: "3, 7", output: "28" },
      { input: "3, 2", output: "3" },
      { input: "1, 1", output: "1" },
    ],
    constraints: ["1 <= m, n <= 30"],
    functionName: "uniquePaths",
    starter: {
      js: "function uniquePaths(m, n) {\n  // Count right/down paths.\n}\n",
      ts: "function uniquePaths(m: number, n: number): number {\n  // Count right/down paths.\n  return 0;\n}\n",
    },
    visible: [
      { args: [3, 7], expected: 28 },
      { args: [3, 2], expected: 3 },
      { args: [1, 1], expected: 1 },
    ],
    hidden: [
      { args: [2, 2], expected: 2 },
      { args: [3, 3], expected: 6 },
      { args: [1, 10], expected: 1 },
      { args: [10, 1], expected: 1 },
      { args: [4, 4], expected: 20 },
      { args: [2, 3], expected: 3 },
    ],
    hints: [
      "To reach a cell you came from the one above or the one to its left.",
      "paths(i,j) = paths(i-1,j) + paths(i,j-1); the top row and left column are all 1.",
      "One rolling row of length n is enough space.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Count paths from each cell to the goal, cached by cell.",
        js: "function uniquePaths(m, n) {\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i === m - 1 && j === n - 1) return 1;\n    if (i >= m || j >= n) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = go(i + 1, j) + go(i, j + 1);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function uniquePaths(m: number, n: number): number {\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i === m - 1 && j === n - 1) return 1;\n    if (i >= m || j >= n) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = go(i + 1, j) + go(i, j + 1);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Rolling row",
        approach: "Each row's counts are prefix sums of the row above.",
        js: "function uniquePaths(m, n) {\n  const dp = new Array(n).fill(1);\n  for (let i = 1; i < m; i++)\n    for (let j = 1; j < n; j++) dp[j] += dp[j - 1];\n  return dp[n - 1];\n}\n",
        ts: "function uniquePaths(m: number, n: number): number {\n  const dp = new Array(n).fill(1);\n  for (let i = 1; i < m; i++)\n    for (let j = 1; j < n; j++) dp[j] += dp[j - 1];\n  return dp[n - 1];\n}\n",
        time: "O(m·n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d3-min-path-sum",
    slug: "minimum-path-sum",
    title: "Minimum Path Sum",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a grid of non-negative numbers, move only right or down from the top-left to the bottom-right. Return the minimum sum of values along a path.",
    examples: [
      { input: "[[1,3,1],[1,5,1],[4,2,1]]", output: "7" },
      { input: "[[1,2,3],[4,5,6]]", output: "12" },
      { input: "[[5]]", output: "5" },
    ],
    constraints: ["1 <= rows, cols <= 200", "values are non-negative"],
    functionName: "minPathSum",
    starter: {
      js: "function minPathSum(grid) {\n  // Min right/down path sum.\n}\n",
      ts: "function minPathSum(grid: number[][]): number {\n  // Min right/down path sum.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 3, 1], [1, 5, 1], [4, 2, 1]]], expected: 7 },
      { args: [[[1, 2, 3], [4, 5, 6]]], expected: 12 },
      { args: [[[5]]], expected: 5 },
    ],
    hidden: [
      { args: [[[1, 2], [1, 1]]], expected: 3 },
      { args: [[[1]]], expected: 1 },
      { args: [[[1, 2, 5], [3, 2, 1]]], expected: 6 },
      { args: [[[9, 1, 4], [8, 1, 3], [6, 1, 2]]], expected: 14 },
      { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 21 },
      { args: [[[0, 0], [0, 0]]], expected: 0 },
    ],
    hints: [
      "The cheapest way into a cell arrives from above or from the left.",
      "dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]).",
      "You can overwrite a single row as you sweep top to bottom.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Cheapest path from each cell to the goal, cached by cell.",
        js: "function minPathSum(grid) {\n  const m = grid.length, n = grid[0].length;\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i === m - 1 && j === n - 1) return grid[i][j];\n    if (i >= m || j >= n) return Infinity;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = grid[i][j] + Math.min(go(i + 1, j), go(i, j + 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function minPathSum(grid: number[][]): number {\n  const m = grid.length, n = grid[0].length;\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i === m - 1 && j === n - 1) return grid[i][j];\n    if (i >= m || j >= n) return Infinity;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = grid[i][j] + Math.min(go(i + 1, j), go(i, j + 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Rolling row",
        approach: "Sweep top to bottom, keeping one row of best-so-far sums.",
        js: "function minPathSum(grid) {\n  const m = grid.length, n = grid[0].length;\n  const dp = grid[0].slice();\n  for (let j = 1; j < n; j++) dp[j] += dp[j - 1];\n  for (let i = 1; i < m; i++) {\n    dp[0] += grid[i][0];\n    for (let j = 1; j < n; j++) dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);\n  }\n  return dp[n - 1];\n}\n",
        ts: "function minPathSum(grid: number[][]): number {\n  const m = grid.length, n = grid[0].length;\n  const dp = grid[0].slice();\n  for (let j = 1; j < n; j++) dp[j] += dp[j - 1];\n  for (let i = 1; i < m; i++) {\n    dp[0] += grid[i][0];\n    for (let j = 1; j < n; j++) dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);\n  }\n  return dp[n - 1];\n}\n",
        time: "O(m·n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d3-unique-paths-obstacles",
    slug: "unique-paths-with-obstacles",
    title: "Unique Paths with Obstacles",
    difficulty: "medium",
    patternIds: P,
    statement:
      "A grid uses 0 for a free cell and 1 for an obstacle. Moving only right or down from the top-left, return how many paths reach the bottom-right. A blocked start or goal yields 0.",
    examples: [
      { input: "[[0,0,0],[0,1,0],[0,0,0]]", output: "2" },
      { input: "[[0,1],[0,0]]", output: "1" },
      { input: "[[1]]", output: "0" },
    ],
    constraints: ["1 <= rows, cols <= 100", "cells are 0 or 1"],
    functionName: "uniquePathsWithObstacles",
    starter: {
      js: "function uniquePathsWithObstacles(grid) {\n  // Count right/down paths avoiding 1s.\n}\n",
      ts: "function uniquePathsWithObstacles(grid: number[][]): number {\n  // Count right/down paths avoiding 1s.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]], expected: 2 },
      { args: [[[0, 1], [0, 0]]], expected: 1 },
      { args: [[[1]]], expected: 0 },
    ],
    hidden: [
      { args: [[[0]]], expected: 1 },
      { args: [[[0, 0], [0, 0]]], expected: 2 },
      { args: [[[0, 0], [1, 0]]], expected: 1 },
      { args: [[[0, 1, 0], [0, 0, 0]]], expected: 1 },
      { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 6 },
      { args: [[[0, 0], [0, 1]]], expected: 0 },
    ],
    hints: [
      "An obstacle cell contributes zero paths.",
      "dp[i][j] = 0 if blocked, else dp[i-1][j] + dp[i][j-1].",
      "Seed dp[0][0] = 1 only when the start is free.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Paths from each free cell to the goal, cached by cell.",
        js: "function uniquePathsWithObstacles(grid) {\n  const m = grid.length, n = grid[0].length;\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i >= m || j >= n || grid[i][j] === 1) return 0;\n    if (i === m - 1 && j === n - 1) return 1;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = go(i + 1, j) + go(i, j + 1);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function uniquePathsWithObstacles(grid: number[][]): number {\n  const m = grid.length, n = grid[0].length;\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i >= m || j >= n || grid[i][j] === 1) return 0;\n    if (i === m - 1 && j === n - 1) return 1;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = go(i + 1, j) + go(i, j + 1);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Rolling row",
        approach: "Zero out obstacle cells while accumulating a single row.",
        js: "function uniquePathsWithObstacles(grid) {\n  const m = grid.length, n = grid[0].length;\n  if (grid[0][0] === 1) return 0;\n  const dp = new Array(n).fill(0);\n  dp[0] = 1;\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) {\n      if (grid[i][j] === 1) dp[j] = 0;\n      else if (j > 0) dp[j] += dp[j - 1];\n    }\n  return dp[n - 1];\n}\n",
        ts: "function uniquePathsWithObstacles(grid: number[][]): number {\n  const m = grid.length, n = grid[0].length;\n  if (grid[0][0] === 1) return 0;\n  const dp = new Array(n).fill(0);\n  dp[0] = 1;\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) {\n      if (grid[i][j] === 1) dp[j] = 0;\n      else if (j > 0) dp[j] += dp[j - 1];\n    }\n  return dp[n - 1];\n}\n",
        time: "O(m·n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d3-triangle-min-path",
    slug: "triangle-min-path",
    title: "Triangle Minimum Path",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a triangle as rows of numbers (row `i` has `i+1` entries), start at the top and step to an adjacent entry (index `j` or `j+1`) in the next row. Return the minimum top-to-bottom path sum.",
    examples: [
      { input: "[[2],[3,4],[6,5,7],[4,1,8,3]]", output: "11" },
      { input: "[[-10]]", output: "-10" },
      { input: "[[1],[2,3]]", output: "3" },
    ],
    constraints: ["1 <= rows <= 200"],
    functionName: "triangleMinPath",
    starter: {
      js: "function triangleMinPath(triangle) {\n  // Min top-to-bottom path sum.\n}\n",
      ts: "function triangleMinPath(triangle: number[][]): number {\n  // Min top-to-bottom path sum.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]], expected: 11 },
      { args: [[[-10]]], expected: -10 },
      { args: [[[1], [2, 3]]], expected: 3 },
    ],
    hidden: [
      { args: [[[1], [2, 3], [4, 5, 6]]], expected: 7 },
      { args: [[[5]]], expected: 5 },
      { args: [[[2], [3, 4]]], expected: 5 },
      { args: [[[1], [1, 1], [1, 1, 1]]], expected: 3 },
      { args: [[[-1], [2, 3], [1, -1, -3]]], expected: -1 },
      { args: [[[8], [6, 2], [1, 9, 3]]], expected: 13 },
    ],
    hints: [
      "From an entry you may only drop to the same index or the next one below.",
      "Work bottom-up: dp[j] = triangle[i][j] + min(dp[j], dp[j+1]).",
      "The last row seeds dp; collapse upward to dp[0].",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Best path from each entry downward, cached by position.",
        js: "function triangleMinPath(triangle) {\n  const n = triangle.length;\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i === n - 1) return triangle[i][j];\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = triangle[i][j] + Math.min(go(i + 1, j), go(i + 1, j + 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function triangleMinPath(triangle: number[][]): number {\n  const n = triangle.length;\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i === n - 1) return triangle[i][j];\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = triangle[i][j] + Math.min(go(i + 1, j), go(i + 1, j + 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        time: "O(n²)",
        space: "O(n²)",
      },
      {
        label: "Bottom-up tabulation",
        approach: "Collapse the triangle one row at a time into a single array.",
        js: "function triangleMinPath(triangle) {\n  const dp = triangle[triangle.length - 1].slice();\n  for (let i = triangle.length - 2; i >= 0; i--)\n    for (let j = 0; j <= i; j++)\n      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);\n  return dp[0];\n}\n",
        ts: "function triangleMinPath(triangle: number[][]): number {\n  const dp = triangle[triangle.length - 1].slice();\n  for (let i = triangle.length - 2; i >= 0; i--)\n    for (let j = 0; j <= i; j++)\n      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);\n  return dp[0];\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d3-maximal-square",
    slug: "maximal-square",
    title: "Maximal Square",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given a binary matrix of 0s and 1s, return the area of the largest square whose cells are all 1.",
    examples: [
      { input: "[[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]", output: "4" },
      { input: "[[0,1],[1,0]]", output: "1" },
      { input: "[[0]]", output: "0" },
    ],
    constraints: ["1 <= rows, cols <= 300", "cells are 0 or 1"],
    functionName: "maximalSquare",
    starter: {
      js: "function maximalSquare(matrix) {\n  // Area of the largest all-1 square.\n}\n",
      ts: "function maximalSquare(matrix: number[][]): number {\n  // Area of the largest all-1 square.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]]], expected: 4 },
      { args: [[[0, 1], [1, 0]]], expected: 1 },
      { args: [[[0]]], expected: 0 },
    ],
    hidden: [
      { args: [[[1]]], expected: 1 },
      { args: [[[1, 1], [1, 1]]], expected: 4 },
      { args: [[[0, 0], [0, 0]]], expected: 0 },
      { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 9 },
      { args: [[[1, 0], [1, 1]]], expected: 1 },
      { args: [[[1, 1, 1], [1, 1, 0]]], expected: 4 },
    ],
    hints: [
      "A square ending at a cell is limited by its top, left, and top-left neighbours.",
      "dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 when the cell is 1.",
      "Track the largest side; the answer is side².",
    ],
    solutions: [
      {
        label: "Memoized (side ending at cell)",
        approach: "Largest square with bottom-right at each cell, cached.",
        js: "function maximalSquare(matrix) {\n  const m = matrix.length, n = matrix[0].length;\n  const memo = new Map();\n  let best = 0;\n  const side = (i, j) => {\n    if (i < 0 || j < 0) return 0;\n    if (matrix[i][j] === 0) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = Math.min(side(i - 1, j), side(i, j - 1), side(i - 1, j - 1)) + 1;\n    memo.set(key, v);\n    return v;\n  };\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) best = Math.max(best, side(i, j));\n  return best * best;\n}\n",
        ts: "function maximalSquare(matrix: number[][]): number {\n  const m = matrix.length, n = matrix[0].length;\n  const memo = new Map<number, number>();\n  let best = 0;\n  const side = (i: number, j: number): number => {\n    if (i < 0 || j < 0) return 0;\n    if (matrix[i][j] === 0) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = Math.min(side(i - 1, j), side(i, j - 1), side(i - 1, j - 1)) + 1;\n    memo.set(key, v);\n    return v;\n  };\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) best = Math.max(best, side(i, j));\n  return best * best;\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Tabulation (padded grid)",
        approach: "Fill a padded DP table so edges need no special cases.",
        js: "function maximalSquare(matrix) {\n  const m = matrix.length, n = matrix[0].length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  let best = 0;\n  for (let i = 1; i <= m; i++)\n    for (let j = 1; j <= n; j++)\n      if (matrix[i - 1][j - 1] === 1) {\n        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;\n        best = Math.max(best, dp[i][j]);\n      }\n  return best * best;\n}\n",
        ts: "function maximalSquare(matrix: number[][]): number {\n  const m = matrix.length, n = matrix[0].length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  let best = 0;\n  for (let i = 1; i <= m; i++)\n    for (let j = 1; j <= n; j++)\n      if (matrix[i - 1][j - 1] === 1) {\n        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;\n        best = Math.max(best, dp[i][j]);\n      }\n  return best * best;\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
    ],
  },
  {
    id: "d3-min-falling-path",
    slug: "min-falling-path-sum",
    title: "Minimum Falling Path Sum",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given an `n` × `n` matrix, a falling path starts anywhere in the top row and each step moves to the cell directly below or diagonally below-left/right. Return the minimum falling path sum.",
    examples: [
      { input: "[[2,1,3],[6,5,4],[7,8,9]]", output: "13" },
      { input: "[[-19,57],[-40,-5]]", output: "-59" },
      { input: "[[5]]", output: "5" },
    ],
    constraints: ["1 <= n <= 100"],
    functionName: "minFallingPath",
    starter: {
      js: "function minFallingPath(matrix) {\n  // Min top-to-bottom falling path sum.\n}\n",
      ts: "function minFallingPath(matrix: number[][]): number {\n  // Min top-to-bottom falling path sum.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[2, 1, 3], [6, 5, 4], [7, 8, 9]]], expected: 13 },
      { args: [[[-19, 57], [-40, -5]]], expected: -59 },
      { args: [[[5]]], expected: 5 },
    ],
    hidden: [
      { args: [[[1, 2], [3, 4]]], expected: 4 },
      { args: [[[1]]], expected: 1 },
      { args: [[[2, 1, 3], [6, 5, 4], [7, 8, 9]]], expected: 13 },
      { args: [[[100, -42, 55], [3, 4, 5], [6, 7, 8]]], expected: -33 },
      { args: [[[7]]], expected: 7 },
      { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 3 },
    ],
    hints: [
      "Into a cell you may fall from directly above or a diagonal above.",
      "dp[i][j] = matrix[i][j] + min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1]).",
      "The answer is the smallest value in the final row.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Best falling path from each top-row cell downward, cached.",
        js: "function minFallingPath(matrix) {\n  const n = matrix.length;\n  const memo = new Map();\n  const go = (i, j) => {\n    if (j < 0 || j >= n) return Infinity;\n    if (i === n - 1) return matrix[i][j];\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = matrix[i][j] + Math.min(go(i + 1, j - 1), go(i + 1, j), go(i + 1, j + 1));\n    memo.set(key, v);\n    return v;\n  };\n  let best = Infinity;\n  for (let j = 0; j < n; j++) best = Math.min(best, go(0, j));\n  return best;\n}\n",
        ts: "function minFallingPath(matrix: number[][]): number {\n  const n = matrix.length;\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (j < 0 || j >= n) return Infinity;\n    if (i === n - 1) return matrix[i][j];\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = matrix[i][j] + Math.min(go(i + 1, j - 1), go(i + 1, j), go(i + 1, j + 1));\n    memo.set(key, v);\n    return v;\n  };\n  let best = Infinity;\n  for (let j = 0; j < n; j++) best = Math.min(best, go(0, j));\n  return best;\n}\n",
        time: "O(n²)",
        space: "O(n²)",
      },
      {
        label: "Rolling row",
        approach: "Carry the best sum reaching each column of the previous row.",
        js: "function minFallingPath(matrix) {\n  const n = matrix.length;\n  let prev = matrix[0].slice();\n  for (let i = 1; i < n; i++) {\n    const cur = new Array(n);\n    for (let j = 0; j < n; j++) {\n      let best = prev[j];\n      if (j > 0) best = Math.min(best, prev[j - 1]);\n      if (j < n - 1) best = Math.min(best, prev[j + 1]);\n      cur[j] = matrix[i][j] + best;\n    }\n    prev = cur;\n  }\n  return Math.min(...prev);\n}\n",
        ts: "function minFallingPath(matrix: number[][]): number {\n  const n = matrix.length;\n  let prev = matrix[0].slice();\n  for (let i = 1; i < n; i++) {\n    const cur = new Array(n);\n    for (let j = 0; j < n; j++) {\n      let best = prev[j];\n      if (j > 0) best = Math.min(best, prev[j - 1]);\n      if (j < n - 1) best = Math.min(best, prev[j + 1]);\n      cur[j] = matrix[i][j] + best;\n    }\n    prev = cur;\n  }\n  return Math.min(...prev);\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "d3-max-path-sum-grid",
    slug: "maximum-path-sum-grid",
    title: "Maximum Path Sum in a Grid",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Moving only right or down from the top-left to the bottom-right of a grid, return the maximum sum of values collected along the path.",
    examples: [
      { input: "[[1,3,1],[1,5,1],[4,2,1]]", output: "12" },
      { input: "[[1,2],[3,4]]", output: "8" },
      { input: "[[5]]", output: "5" },
    ],
    constraints: ["1 <= rows, cols <= 200"],
    functionName: "maxPathSumGrid",
    starter: {
      js: "function maxPathSumGrid(grid) {\n  // Max right/down path sum.\n}\n",
      ts: "function maxPathSumGrid(grid: number[][]): number {\n  // Max right/down path sum.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 3, 1], [1, 5, 1], [4, 2, 1]]], expected: 12 },
      { args: [[[1, 2], [3, 4]]], expected: 8 },
      { args: [[[5]]], expected: 5 },
    ],
    hidden: [
      { args: [[[1]]], expected: 1 },
      { args: [[[1, 2, 3]]], expected: 6 },
      { args: [[[1], [2], [3]]], expected: 6 },
      { args: [[[1, 2, 3], [4, 5, 6]]], expected: 16 },
      { args: [[[0, 0], [0, 0]]], expected: 0 },
      { args: [[[1, 10, 1], [1, 1, 1], [1, 10, 1]]], expected: 23 },
    ],
    hints: [
      "Mirror the minimum-path-sum recurrence but maximize.",
      "dp[i][j] = grid[i][j] + max(dp[i-1][j], dp[i][j-1]).",
      "A single rolling row suffices.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Richest path from each cell to the goal, cached by cell.",
        js: "function maxPathSumGrid(grid) {\n  const m = grid.length, n = grid[0].length;\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i === m - 1 && j === n - 1) return grid[i][j];\n    if (i >= m || j >= n) return -Infinity;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = grid[i][j] + Math.max(go(i + 1, j), go(i, j + 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function maxPathSumGrid(grid: number[][]): number {\n  const m = grid.length, n = grid[0].length;\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i === m - 1 && j === n - 1) return grid[i][j];\n    if (i >= m || j >= n) return -Infinity;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = grid[i][j] + Math.max(go(i + 1, j), go(i, j + 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Rolling row",
        approach: "Accumulate the best sum reaching each column, row by row.",
        js: "function maxPathSumGrid(grid) {\n  const m = grid.length, n = grid[0].length;\n  const dp = grid[0].slice();\n  for (let j = 1; j < n; j++) dp[j] += dp[j - 1];\n  for (let i = 1; i < m; i++) {\n    dp[0] += grid[i][0];\n    for (let j = 1; j < n; j++) dp[j] = grid[i][j] + Math.max(dp[j], dp[j - 1]);\n  }\n  return dp[n - 1];\n}\n",
        ts: "function maxPathSumGrid(grid: number[][]): number {\n  const m = grid.length, n = grid[0].length;\n  const dp = grid[0].slice();\n  for (let j = 1; j < n; j++) dp[j] += dp[j - 1];\n  for (let i = 1; i < m; i++) {\n    dp[0] += grid[i][0];\n    for (let j = 1; j < n; j++) dp[j] = grid[i][j] + Math.max(dp[j], dp[j - 1]);\n  }\n  return dp[n - 1];\n}\n",
        time: "O(m·n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d3-count-square-submatrices",
    slug: "count-square-submatrices",
    title: "Count Square Submatrices of Ones",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a binary matrix, return how many square submatrices have all cells equal to 1 (counting every size).",
    examples: [
      { input: "[[0,1,1,1],[1,1,1,1],[0,1,1,1]]", output: "15" },
      { input: "[[1,0,1],[1,1,0],[1,1,0]]", output: "7" },
      { input: "[[0]]", output: "0" },
    ],
    constraints: ["1 <= rows, cols <= 300", "cells are 0 or 1"],
    functionName: "countSquares",
    starter: {
      js: "function countSquares(matrix) {\n  // Count all all-1 square submatrices.\n}\n",
      ts: "function countSquares(matrix: number[][]): number {\n  // Count all all-1 square submatrices.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]]], expected: 15 },
      { args: [[[1, 0, 1], [1, 1, 0], [1, 1, 0]]], expected: 7 },
      { args: [[[0]]], expected: 0 },
    ],
    hidden: [
      { args: [[[1]]], expected: 1 },
      { args: [[[1, 1], [1, 1]]], expected: 5 },
      { args: [[[0, 0], [0, 0]]], expected: 0 },
      { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 14 },
      { args: [[[1, 0], [0, 1]]], expected: 2 },
      { args: [[[1, 1, 1]]], expected: 3 },
    ],
    hints: [
      "The maximal-square DP value at a cell is also the number of squares ending there.",
      "dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 when the cell is 1.",
      "Sum every dp[i][j] rather than tracking a maximum.",
    ],
    solutions: [
      {
        label: "Tabulation (sum the DP)",
        approach: "Each dp value counts the squares whose bottom-right is that cell.",
        js: "function countSquares(matrix) {\n  const m = matrix.length, n = matrix[0].length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  let total = 0;\n  for (let i = 1; i <= m; i++)\n    for (let j = 1; j <= n; j++)\n      if (matrix[i - 1][j - 1] === 1) {\n        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;\n        total += dp[i][j];\n      }\n  return total;\n}\n",
        ts: "function countSquares(matrix: number[][]): number {\n  const m = matrix.length, n = matrix[0].length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  let total = 0;\n  for (let i = 1; i <= m; i++)\n    for (let j = 1; j <= n; j++)\n      if (matrix[i - 1][j - 1] === 1) {\n        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;\n        total += dp[i][j];\n      }\n  return total;\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Memoized side function",
        approach: "Compute the square side ending at each cell and add them up.",
        js: "function countSquares(matrix) {\n  const m = matrix.length, n = matrix[0].length;\n  const memo = new Map();\n  let total = 0;\n  const side = (i, j) => {\n    if (i < 0 || j < 0) return 0;\n    if (matrix[i][j] === 0) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = Math.min(side(i - 1, j), side(i, j - 1), side(i - 1, j - 1)) + 1;\n    memo.set(key, v);\n    return v;\n  };\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) total += side(i, j);\n  return total;\n}\n",
        ts: "function countSquares(matrix: number[][]): number {\n  const m = matrix.length, n = matrix[0].length;\n  const memo = new Map<number, number>();\n  let total = 0;\n  const side = (i: number, j: number): number => {\n    if (i < 0 || j < 0) return 0;\n    if (matrix[i][j] === 0) return 0;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = Math.min(side(i - 1, j), side(i, j - 1), side(i - 1, j - 1)) + 1;\n    memo.set(key, v);\n    return v;\n  };\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) total += side(i, j);\n  return total;\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
    ],
  },
  {
    id: "d3-dungeon-game",
    slug: "dungeon-game",
    title: "Dungeon Game",
    difficulty: "hard",
    patternIds: P,
    statement:
      "A knight starts top-left and must reach the bottom-right, moving only right or down. Each cell adds its (possibly negative) value to his health, which must never drop to 0 or below. Return the minimum starting health.",
    examples: [
      { input: "[[-2,-3,3],[-5,-10,1],[10,30,-5]]", output: "7" },
      { input: "[[0]]", output: "1" },
      { input: "[[100]]", output: "1" },
    ],
    constraints: ["1 <= rows, cols <= 200"],
    functionName: "calculateMinimumHP",
    starter: {
      js: "function calculateMinimumHP(dungeon) {\n  // Min starting health to survive to the goal.\n}\n",
      ts: "function calculateMinimumHP(dungeon: number[][]): number {\n  // Min starting health to survive to the goal.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]], expected: 7 },
      { args: [[[0]]], expected: 1 },
      { args: [[[100]]], expected: 1 },
    ],
    hidden: [
      { args: [[[-3]]], expected: 4 },
      { args: [[[1, -3, 3], [0, -2, 0], [-3, -3, -3]]], expected: 3 },
      { args: [[[0, 0], [0, 0]]], expected: 1 },
      { args: [[[-5]]], expected: 6 },
      { args: [[[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]], expected: 7 },
      { args: [[[2, 3], [1, 4]]], expected: 1 },
    ],
    hints: [
      "Work backwards from the goal: what health must you have entering each cell?",
      "need(i,j) = max(1, min(down, right) - dungeon[i][j]).",
      "Pad the row and column past the goal with health 1 (Infinity elsewhere).",
    ],
    solutions: [
      {
        label: "Backward tabulation",
        approach: "Fill required health from the goal back to the start.",
        js: "function calculateMinimumHP(dungeon) {\n  const m = dungeon.length, n = dungeon[0].length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(Infinity));\n  dp[m][n - 1] = 1; dp[m - 1][n] = 1;\n  for (let i = m - 1; i >= 0; i--)\n    for (let j = n - 1; j >= 0; j--) {\n      const need = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];\n      dp[i][j] = Math.max(1, need);\n    }\n  return dp[0][0];\n}\n",
        ts: "function calculateMinimumHP(dungeon: number[][]): number {\n  const m = dungeon.length, n = dungeon[0].length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(Infinity));\n  dp[m][n - 1] = 1; dp[m - 1][n] = 1;\n  for (let i = m - 1; i >= 0; i--)\n    for (let j = n - 1; j >= 0; j--) {\n      const need = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];\n      dp[i][j] = Math.max(1, need);\n    }\n  return dp[0][0];\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Memoized backward recursion",
        approach: "Required health entering a cell, cached, computed from below/right.",
        js: "function calculateMinimumHP(dungeon) {\n  const m = dungeon.length, n = dungeon[0].length;\n  const memo = new Map();\n  const need = (i, j) => {\n    if (i >= m || j >= n) return Infinity;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let ahead = Math.min(need(i + 1, j), need(i, j + 1));\n    if (i === m - 1 && j === n - 1) ahead = 1;\n    const v = Math.max(1, ahead - dungeon[i][j]);\n    memo.set(key, v);\n    return v;\n  };\n  return need(0, 0);\n}\n",
        ts: "function calculateMinimumHP(dungeon: number[][]): number {\n  const m = dungeon.length, n = dungeon[0].length;\n  const memo = new Map<number, number>();\n  const need = (i: number, j: number): number => {\n    if (i >= m || j >= n) return Infinity;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let ahead = Math.min(need(i + 1, j), need(i, j + 1));\n    if (i === m - 1 && j === n - 1) ahead = 1;\n    const v = Math.max(1, ahead - dungeon[i][j]);\n    memo.set(key, v);\n    return v;\n  };\n  return need(0, 0);\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
    ],
  },
  {
    id: "d3-longest-increasing-path",
    slug: "longest-increasing-path-matrix",
    title: "Longest Increasing Path in a Matrix",
    difficulty: "hard",
    patternIds: P,
    statement:
      "From any cell you may move up, down, left, or right to a strictly greater value. Return the length of the longest strictly increasing path in the matrix.",
    examples: [
      { input: "[[9,9,4],[6,6,8],[2,1,1]]", output: "4" },
      { input: "[[3,4,5],[3,2,6],[2,2,1]]", output: "4" },
      { input: "[[1]]", output: "1" },
    ],
    constraints: ["1 <= rows, cols <= 200"],
    functionName: "longestIncreasingPath",
    starter: {
      js: "function longestIncreasingPath(matrix) {\n  // Length of the longest strictly increasing 4-directional path.\n}\n",
      ts: "function longestIncreasingPath(matrix: number[][]): number {\n  // Length of the longest strictly increasing 4-directional path.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[9, 9, 4], [6, 6, 8], [2, 1, 1]]], expected: 4 },
      { args: [[[3, 4, 5], [3, 2, 6], [2, 2, 1]]], expected: 4 },
      { args: [[[1]]], expected: 1 },
    ],
    hidden: [
      { args: [[[1, 2], [3, 4]]], expected: 3 },
      { args: [[[1]]], expected: 1 },
      { args: [[[1, 2, 3, 4, 5]]], expected: 5 },
      { args: [[[5, 4, 3, 2, 1]]], expected: 5 },
      { args: [[[1, 1], [1, 1]]], expected: 1 },
      { args: [[[0, 1, 2, 3], [7, 6, 5, 4]]], expected: 8 },
    ],
    hints: [
      "The longest path from a cell depends only on paths from strictly larger neighbours.",
      "Memoize the best length starting at each cell — no visited set is needed because moves strictly increase.",
      "Alternatively, process cells from smallest to largest value.",
    ],
    solutions: [
      {
        label: "Memoized DFS",
        approach: "Longest increasing path starting at each cell, cached.",
        js: "function longestIncreasingPath(matrix) {\n  const m = matrix.length, n = matrix[0].length;\n  const memo = new Map();\n  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  const dfs = (i, j) => {\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let best = 1;\n    for (const [di, dj] of dirs) {\n      const ni = i + di, nj = j + dj;\n      if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] > matrix[i][j])\n        best = Math.max(best, 1 + dfs(ni, nj));\n    }\n    memo.set(key, best);\n    return best;\n  };\n  let ans = 0;\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) ans = Math.max(ans, dfs(i, j));\n  return ans;\n}\n",
        ts: "function longestIncreasingPath(matrix: number[][]): number {\n  const m = matrix.length, n = matrix[0].length;\n  const memo = new Map<number, number>();\n  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  const dfs = (i: number, j: number): number => {\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let best = 1;\n    for (const [di, dj] of dirs) {\n      const ni = i + di, nj = j + dj;\n      if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] > matrix[i][j])\n        best = Math.max(best, 1 + dfs(ni, nj));\n    }\n    memo.set(key, best);\n    return best;\n  };\n  let ans = 0;\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) ans = Math.max(ans, dfs(i, j));\n  return ans;\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Process cells ascending",
        approach: "Sort cells by value; each extends its smaller neighbours' best.",
        js: "function longestIncreasingPath(matrix) {\n  const m = matrix.length, n = matrix[0].length;\n  const cells = [];\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) cells.push([matrix[i][j], i, j]);\n  cells.sort((a, b) => a[0] - b[0]);\n  const dp = Array.from({ length: m }, () => new Array(n).fill(1));\n  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  let ans = 1;\n  for (const [val, i, j] of cells) {\n    for (const [di, dj] of dirs) {\n      const ni = i + di, nj = j + dj;\n      if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] < val)\n        dp[i][j] = Math.max(dp[i][j], dp[ni][nj] + 1);\n    }\n    ans = Math.max(ans, dp[i][j]);\n  }\n  return ans;\n}\n",
        ts: "function longestIncreasingPath(matrix: number[][]): number {\n  const m = matrix.length, n = matrix[0].length;\n  const cells: number[][] = [];\n  for (let i = 0; i < m; i++)\n    for (let j = 0; j < n; j++) cells.push([matrix[i][j], i, j]);\n  cells.sort((a, b) => a[0] - b[0]);\n  const dp = Array.from({ length: m }, () => new Array(n).fill(1));\n  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  let ans = 1;\n  for (const [val, i, j] of cells) {\n    for (const [di, dj] of dirs) {\n      const ni = i + di, nj = j + dj;\n      if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] < val)\n        dp[i][j] = Math.max(dp[i][j], dp[ni][nj] + 1);\n    }\n    ans = Math.max(ans, dp[i][j]);\n  }\n  return ans;\n}\n",
        time: "O(m·n·log(m·n))",
        space: "O(m·n)",
      },
    ],
  },
];

export const dp3Problems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const dp3Mcqs: QuizQuestion[] = [
  {
    id: "s6-d3-order",
    kind: "mcq",
    prompt:
      "In a grid DP where dp[i][j] depends on dp[i-1][j] and dp[i][j-1], a correct fill order is:",
    options: [
      "any order at all",
      "top-to-bottom, left-to-right (so both dependencies are ready)",
      "bottom-to-top, right-to-left only",
      "column by column from the right edge",
    ],
    answerIndex: 1,
    explanation:
      "Each cell needs the cell above and to its left already computed, which a top-left-to-bottom-right sweep guarantees.",
  },
  {
    id: "s6-d3-space",
    kind: "mcq",
    prompt: "A grid DP whose row depends only on the row directly above it can run in:",
    options: [
      "O(rows·cols) space, never less",
      "O(cols) space using one rolling row",
      "O(1) space with two scalars",
      "O(rows²) space",
    ],
    answerIndex: 1,
    explanation:
      "Keeping just the previous row (or overwriting a single row in place) cuts the table down to one row.",
  },
];

export const dp3Module: Module = {
  id: "m-pat-dp-grid",
  stageId: S,
  title: "Dynamic Programming III — Grids",
  kind: "patternModule",
  summary:
    "Two-dimensional DP over matrices — paths, squares, and reachability, still following memoize → tabulate → shrink the table.",
  lessonSections: [
    {
      heading: "From a line to a grid",
      body: `1-D DP walked along a line of choices. Grid DP does the same over a **matrix**: the answer at cell \`(i, j)\` is built from a few neighbouring cells — usually the one **above** and the one to the **left**, sometimes the diagonal too.

The same three stages apply. Write the natural recursion \`go(i, j)\` and **memoize** it by cell, then **tabulate** a 2-D table in a top-left → bottom-right sweep, then notice most grid DPs read only the **previous row**, so you can **shrink to one rolling row**.

\`\`\`js
// Minimum path sum, space-optimized to a single row
function minPathSum(grid) {
  const n = grid[0].length;
  const dp = grid[0].slice();
  for (let j = 1; j < n; j++) dp[j] += dp[j - 1];
  for (let i = 1; i < grid.length; i++) {
    dp[0] += grid[i][0];
    for (let j = 1; j < n; j++) dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
  }
  return dp[n - 1];
}
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for grid DP when the problem is literally a matrix and you move in fixed directions, or when two sequences form a table (the string DPs in the next module):

- counting or optimizing **right/down paths** (unique paths, min/max path sum, obstacles),
- squares or reachability in a **binary matrix** (maximal square, count squares),
- **falling paths** and dungeon-style backward DP,
- longest increasing path (memoized DFS on a grid).

The tell: a value at \`(i, j)\` defined from a constant set of neighbours.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Memoize a grid recursion
const memo = new Map<number, number>();
function go(i: number, j: number): number {
  if (isBase(i, j)) return baseValue;
  const key = i * cols + j;            // encode the cell as one number
  if (memo.has(key)) return memo.get(key)!;
  const v = combine(go(i + 1, j), go(i, j + 1));
  memo.set(key, v);
  return v;
}
\`\`\`

**Pitfalls:** flipping \`m\` (rows) and \`n\` (cols); off-by-one when you **pad** the table with a guard row/column; forgetting that some problems (dungeon game) must be solved **backwards** from the goal; and, when space-optimizing, overwriting a cell you still need — process each row carefully. Every drill ships a memoized *and* a tabulated/rolling-row solution. Work them easy to hard.`,
    },
  ],
  guidedExampleProblemId: "d3-unique-paths",
  drillProblemIds: [
    "d3-unique-paths",
    "d3-min-path-sum",
    "d3-unique-paths-obstacles",
    "d3-triangle-min-path",
    "d3-maximal-square",
    "d3-min-falling-path",
  ],
  testPoolProblemIds: [
    "d3-max-path-sum-grid",
    "d3-count-square-submatrices",
    "d3-dungeon-game",
    "d3-longest-increasing-path",
  ],
  complexityQuestionIds: ["s6-d3-order", "s6-d3-space"],
  badgeId: "badge-pat-dp-grid",
  prerequisiteModuleIds: ["m-pat-dp-1d"],
};
