import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s5";
const P = ["graph-traversal"];

const GRAPH_NOTE =
  "The graph is undirected with nodes `0..n-1`, given as a list of `[u, v]` edges.";
const GRID_NOTE = "The grid is a rectangular array of rows.";

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "gt-reachable-count",
    slug: "count-reachable",
    title: "Count Reachable Nodes",
    difficulty: "easy",
    patternIds: P,
    statement: `Return how many nodes are reachable from \`start\`, counting \`start\` itself.\n\n${GRAPH_NOTE}`,
    examples: [
      { input: "5, [[0,1],[1,2],[3,4]], 0", output: "3" },
      { input: "3, [], 0", output: "1" },
      { input: "1, [], 0", output: "1" },
    ],
    constraints: ["1 <= n <= 10000", "0 <= edges.length <= 20000"],
    functionName: "countReachable",
    starter: {
      js: "function countReachable(n, edges, start) {\n  // Nodes reachable from start, including start.\n}\n",
      ts: "function countReachable(n: number, edges: number[][], start: number): number {\n  // Nodes reachable from start, including start.\n  return 0;\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [1, 2], [3, 4]], 0], expected: 3 },
      { args: [3, [], 0], expected: 1 },
      { args: [1, [], 0], expected: 1 },
    ],
    hidden: [
      { args: [4, [[0, 1], [2, 3]], 2], expected: 2 },
      { args: [4, [[0, 1], [1, 2], [2, 3]], 0], expected: 4 },
      { args: [6, [[0, 1], [2, 3], [4, 5]], 4], expected: 2 },
      { args: [2, [[0, 1]], 1], expected: 2 },
      { args: [5, [], 3], expected: 1 },
      { args: [3, [[0, 1], [1, 2], [0, 2]], 1], expected: 3 },
    ],
    hints: [
      "Build an adjacency list first, then explore outward from `start`.",
      "Mark nodes visited so you never count one twice.",
      "The answer is the size of the visited set once the traversal finishes.",
    ],
    solutions: [
      {
        label: "BFS with a visited set",
        approach: "Expand outward from start, counting newly visited nodes.",
        js: "function countReachable(n, edges, start) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  const queue = [start];\n  let count = 1;\n  while (queue.length) {\n    const cur = queue.shift();\n    for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; count++; queue.push(nb); }\n  }\n  return count;\n}\n",
        ts: "function countReachable(n: number, edges: number[][], start: number): number {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  const queue: number[] = [start];\n  let count = 1;\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; count++; queue.push(nb); }\n  }\n  return count;\n}\n",
        time: "O(V + E)",
        space: "O(V + E)",
      },
      {
        label: "Iterative DFS",
        approach: "Same traversal driven by a stack.",
        js: "function countReachable(n, edges, start) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Set([start]);\n  const stack = [start];\n  while (stack.length) {\n    const cur = stack.pop();\n    for (const nb of adj[cur]) if (!seen.has(nb)) { seen.add(nb); stack.push(nb); }\n  }\n  return seen.size;\n}\n",
        ts: "function countReachable(n: number, edges: number[][], start: number): number {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Set([start]);\n  const stack: number[] = [start];\n  while (stack.length) {\n    const cur = stack.pop() as number;\n    for (const nb of adj[cur]) if (!seen.has(nb)) { seen.add(nb); stack.push(nb); }\n  }\n  return seen.size;\n}\n",
        time: "O(V + E)",
        space: "O(V + E)",
      },
    ],
  },
  {
    id: "gt-reachable-list",
    slug: "reachable-nodes",
    title: "List Reachable Nodes",
    difficulty: "easy",
    patternIds: P,
    statement: `Return the node ids reachable from \`start\` (including \`start\`), sorted ascending.\n\n${GRAPH_NOTE}`,
    examples: [
      { input: "5, [[0,1],[1,2],[3,4]], 0", output: "[0,1,2]" },
      { input: "3, [], 1", output: "[1]" },
      { input: "2, [[0,1]], 0", output: "[0,1]" },
    ],
    constraints: ["1 <= n <= 10000"],
    functionName: "reachableNodes",
    starter: {
      js: "function reachableNodes(n, edges, start) {\n  // Sorted list of reachable node ids.\n}\n",
      ts: "function reachableNodes(n: number, edges: number[][], start: number): number[] {\n  // Sorted list of reachable node ids.\n  return [];\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [1, 2], [3, 4]], 0], expected: [0, 1, 2] },
      { args: [3, [], 1], expected: [1] },
      { args: [2, [[0, 1]], 0], expected: [0, 1] },
    ],
    hidden: [
      { args: [4, [[0, 1], [2, 3]], 2], expected: [2, 3] },
      { args: [4, [[0, 1], [1, 2], [2, 3]], 0], expected: [0, 1, 2, 3] },
      { args: [6, [[0, 1], [2, 3], [4, 5]], 5], expected: [4, 5] },
      { args: [1, [], 0], expected: [0] },
      { args: [5, [], 3], expected: [3] },
      { args: [3, [[0, 2]], 2], expected: [0, 2] },
    ],
    hints: [
      "Traverse as usual, collecting the visited nodes.",
      "Sort the collected ids before returning so the output is deterministic.",
      "return [...seen].sort((a, b) => a - b).",
    ],
    solutions: [
      {
        label: "BFS then sort",
        approach: "Collect visited nodes, then order them.",
        js: "function reachableNodes(n, edges, start) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Set([start]);\n  const queue = [start];\n  while (queue.length) {\n    const cur = queue.shift();\n    for (const nb of adj[cur]) if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }\n  }\n  return [...seen].sort((a, b) => a - b);\n}\n",
        ts: "function reachableNodes(n: number, edges: number[][], start: number): number[] {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Set([start]);\n  const queue: number[] = [start];\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    for (const nb of adj[cur]) if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }\n  }\n  return [...seen].sort((a, b) => a - b);\n}\n",
        time: "O(V + E)",
        space: "O(V + E)",
      },
      {
        label: "Recursive DFS",
        approach: "Mark nodes recursively, then read the visited flags in order.",
        js: "function reachableNodes(n, edges, start) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  const dfs = (cur) => {\n    if (seen[cur]) return;\n    seen[cur] = true;\n    for (const nb of adj[cur]) dfs(nb);\n  };\n  dfs(start);\n  const out = [];\n  for (let i = 0; i < n; i++) if (seen[i]) out.push(i);\n  return out;\n}\n",
        ts: "function reachableNodes(n: number, edges: number[][], start: number): number[] {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  const dfs = (cur: number) => {\n    if (seen[cur]) return;\n    seen[cur] = true;\n    for (const nb of adj[cur]) dfs(nb);\n  };\n  dfs(start);\n  const out: number[] = [];\n  for (let i = 0; i < n; i++) if (seen[i]) out.push(i);\n  return out;\n}\n",
        time: "O(V + E)",
        space: "O(V + E)",
      },
    ],
  },
  {
    id: "gt-num-islands",
    slug: "number-of-islands",
    title: "Number of Islands",
    difficulty: "medium",
    patternIds: P,
    statement: `A grid holds 1 for land and 0 for water. Return how many islands there are — groups of 1s connected horizontally or vertically.\n\n${GRID_NOTE}`,
    examples: [
      { input: "[[1,1,0],[0,1,0],[0,0,1]]", output: "2" },
      { input: "[[0,0],[0,0]]", output: "0" },
      { input: "[[1]]", output: "1" },
    ],
    constraints: ["0 <= rows, cols <= 200", "each cell is 0 or 1"],
    functionName: "numIslands",
    starter: {
      js: "function numIslands(grid) {\n  // Count 4-directionally connected groups of 1s.\n}\n",
      ts: "function numIslands(grid: number[][]): number {\n  // Count 4-directionally connected groups of 1s.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 1, 0], [0, 1, 0], [0, 0, 1]]], expected: 2 },
      { args: [[[0, 0], [0, 0]]], expected: 0 },
      { args: [[[1]]], expected: 1 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[[1, 1], [1, 1]]], expected: 1 },
      { args: [[[1, 0], [0, 1]]], expected: 2 },
      { args: [[[0]]], expected: 0 },
      { args: [[[1, 0, 1], [0, 0, 0], [1, 0, 1]]], expected: 4 },
      { args: [[[1, 1, 1], [1, 1, 1]]], expected: 1 },
    ],
    hints: [
      "Scan every cell; when you meet an unvisited 1, that's a new island.",
      "Flood-fill from that cell to mark the whole island visited.",
      "Only up/down/left/right count — diagonals do not connect.",
    ],
    solutions: [
      {
        label: "DFS flood fill",
        approach: "Each unvisited land cell launches a flood fill and adds one island.",
        js: "function numIslands(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const seen = new Set();\n  const dfs = (r, c) => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols) return;\n    const key = r * cols + c;\n    if (grid[r][c] !== 1 || seen.has(key)) return;\n    seen.add(key);\n    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);\n  };\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 1 && !seen.has(r * cols + c)) { count++; dfs(r, c); }\n    }\n  }\n  return count;\n}\n",
        ts: "function numIslands(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const seen = new Set<number>();\n  const dfs = (r: number, c: number) => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols) return;\n    const key = r * cols + c;\n    if (grid[r][c] !== 1 || seen.has(key)) return;\n    seen.add(key);\n    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);\n  };\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 1 && !seen.has(r * cols + c)) { count++; dfs(r, c); }\n    }\n  }\n  return count;\n}\n",
        time: "O(r·c)",
        space: "O(r·c)",
      },
      {
        label: "BFS flood fill",
        approach: "Sink each island with a queue instead of recursion.",
        js: "function numIslands(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] !== 1) continue;\n      count++;\n      const queue = [[r, c]];\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift();\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n    }\n  }\n  return count;\n}\n",
        ts: "function numIslands(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] !== 1) continue;\n      count++;\n      const queue: number[][] = [[r, c]];\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift() as number[];\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n    }\n  }\n  return count;\n}\n",
        time: "O(r·c)",
        space: "O(r·c)",
      },
    ],
  },
  {
    id: "gt-max-island-area",
    slug: "max-island-area",
    title: "Largest Island",
    difficulty: "medium",
    patternIds: P,
    statement: `A grid holds 1 for land and 0 for water. Return the number of cells in the largest island, or 0 if there is no land.\n\n${GRID_NOTE}`,
    examples: [
      { input: "[[1,1,0],[0,1,0],[0,0,1]]", output: "3" },
      { input: "[[0,0]]", output: "0" },
      { input: "[[1]]", output: "1" },
    ],
    constraints: ["0 <= rows, cols <= 200"],
    functionName: "maxIslandArea",
    starter: {
      js: "function maxIslandArea(grid) {\n  // Size of the biggest connected group of 1s.\n}\n",
      ts: "function maxIslandArea(grid: number[][]): number {\n  // Size of the biggest connected group of 1s.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 1, 0], [0, 1, 0], [0, 0, 1]]], expected: 3 },
      { args: [[[0, 0]]], expected: 0 },
      { args: [[[1]]], expected: 1 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[[1, 1], [1, 1]]], expected: 4 },
      { args: [[[1, 0], [0, 1]]], expected: 1 },
      { args: [[[1, 0, 1], [0, 0, 0], [1, 1, 1]]], expected: 3 },
      { args: [[[0]]], expected: 0 },
      { args: [[[1, 1, 1], [0, 1, 0]]], expected: 4 },
    ],
    hints: [
      "Flood fill as usual, but have the fill return how many cells it covered.",
      "Track the largest area seen across all fills.",
      "area(r,c) = 1 + area of each of the four neighbours.",
    ],
    solutions: [
      {
        label: "DFS returning the area",
        approach: "Each flood fill reports its size; keep the maximum.",
        js: "function maxIslandArea(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  const dfs = (r, c) => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || g[r][c] !== 1) return 0;\n    g[r][c] = 0;\n    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);\n  };\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) best = Math.max(best, dfs(r, c));\n  }\n  return best;\n}\n",
        ts: "function maxIslandArea(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  const dfs = (r: number, c: number): number => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || g[r][c] !== 1) return 0;\n    g[r][c] = 0;\n    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);\n  };\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) best = Math.max(best, dfs(r, c));\n  }\n  return best;\n}\n",
        time: "O(r·c)",
        space: "O(r·c)",
      },
      {
        label: "BFS counting cells",
        approach: "Queue-driven fill that counts the cells it sinks.",
        js: "function maxIslandArea(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] !== 1) continue;\n      let area = 0;\n      const queue = [[r, c]];\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift();\n        area++;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n      best = Math.max(best, area);\n    }\n  }\n  return best;\n}\n",
        ts: "function maxIslandArea(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] !== 1) continue;\n      let area = 0;\n      const queue: number[][] = [[r, c]];\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift() as number[];\n        area++;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n      best = Math.max(best, area);\n    }\n  }\n  return best;\n}\n",
        time: "O(r·c)",
        space: "O(r·c)",
      },
    ],
  },
  {
    id: "gt-bipartite",
    slug: "is-bipartite",
    title: "Is the Graph Bipartite?",
    difficulty: "medium",
    patternIds: P,
    statement: `Return \`true\` if the nodes can be split into two groups so that every edge joins nodes from different groups.\n\n${GRAPH_NOTE}`,
    examples: [
      { input: "4, [[0,1],[1,2],[2,3],[3,0]]", output: "true" },
      { input: "3, [[0,1],[1,2],[2,0]]", output: "false" },
      { input: "3, []", output: "true" },
    ],
    constraints: ["1 <= n <= 10000", "the graph may be disconnected"],
    functionName: "isBipartite",
    starter: {
      js: "function isBipartite(n, edges) {\n  // True if the graph can be 2-coloured.\n}\n",
      ts: "function isBipartite(n: number, edges: number[][]): boolean {\n  // True if the graph can be 2-coloured.\n  return false;\n}\n",
    },
    visible: [
      { args: [4, [[0, 1], [1, 2], [2, 3], [3, 0]]], expected: true },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: false },
      { args: [3, []], expected: true },
    ],
    hidden: [
      { args: [1, []], expected: true },
      { args: [2, [[0, 1]]], expected: true },
      { args: [5, [[0, 1], [2, 3]]], expected: true },
      { args: [4, [[0, 1], [1, 2], [2, 0]]], expected: false },
      { args: [2, [[0, 1], [0, 1]]], expected: true },
      { args: [6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]]], expected: true },
    ],
    hints: [
      "Colour a node, then colour all its neighbours the opposite colour.",
      "A conflict — a neighbour already holding the same colour — means it isn't bipartite.",
      "Restart the colouring for every uncoloured node so disconnected parts are covered.",
    ],
    solutions: [
      {
        label: "BFS two-colouring",
        approach: "Alternate colours across edges and watch for a clash.",
        js: "function isBipartite(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const color = new Array(n).fill(0);\n  for (let s = 0; s < n; s++) {\n    if (color[s] !== 0) continue;\n    color[s] = 1;\n    const queue = [s];\n    while (queue.length) {\n      const cur = queue.shift();\n      for (const nb of adj[cur]) {\n        if (color[nb] === 0) { color[nb] = -color[cur]; queue.push(nb); }\n        else if (color[nb] === color[cur]) return false;\n      }\n    }\n  }\n  return true;\n}\n",
        ts: "function isBipartite(n: number, edges: number[][]): boolean {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const color = new Array(n).fill(0);\n  for (let s = 0; s < n; s++) {\n    if (color[s] !== 0) continue;\n    color[s] = 1;\n    const queue: number[] = [s];\n    while (queue.length) {\n      const cur = queue.shift() as number;\n      for (const nb of adj[cur]) {\n        if (color[nb] === 0) { color[nb] = -color[cur]; queue.push(nb); }\n        else if (color[nb] === color[cur]) return false;\n      }\n    }\n  }\n  return true;\n}\n",
        time: "O(V + E)",
        space: "O(V + E)",
      },
      {
        label: "DFS two-colouring",
        approach: "The same idea driven by recursion.",
        js: "function isBipartite(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const color = new Array(n).fill(0);\n  const paint = (cur, c) => {\n    color[cur] = c;\n    for (const nb of adj[cur]) {\n      if (color[nb] === 0) { if (!paint(nb, -c)) return false; }\n      else if (color[nb] === c) return false;\n    }\n    return true;\n  };\n  for (let s = 0; s < n; s++) if (color[s] === 0 && !paint(s, 1)) return false;\n  return true;\n}\n",
        ts: "function isBipartite(n: number, edges: number[][]): boolean {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const color = new Array(n).fill(0);\n  const paint = (cur: number, c: number): boolean => {\n    color[cur] = c;\n    for (const nb of adj[cur]) {\n      if (color[nb] === 0) { if (!paint(nb, -c)) return false; }\n      else if (color[nb] === c) return false;\n    }\n    return true;\n  };\n  for (let s = 0; s < n; s++) if (color[s] === 0 && !paint(s, 1)) return false;\n  return true;\n}\n",
        time: "O(V + E)",
        space: "O(V + E)",
      },
    ],
  },
  {
    id: "gt-rotting-oranges",
    slug: "rotting-oranges",
    title: "Rotting Oranges",
    difficulty: "hard",
    patternIds: P,
    statement: `A grid holds 0 (empty), 1 (fresh orange) or 2 (rotten orange). Every minute, a rotten orange rots each fresh orange directly beside it. Return how many minutes until no fresh orange remains, or -1 if that never happens.\n\n${GRID_NOTE}`,
    examples: [
      { input: "[[2,1,1],[1,1,0],[0,1,1]]", output: "4" },
      { input: "[[2,1,1],[0,1,1],[1,0,1]]", output: "-1" },
      { input: "[[0,2]]", output: "0" },
    ],
    constraints: ["0 <= rows, cols <= 200", "each cell is 0, 1 or 2"],
    functionName: "rotOranges",
    starter: {
      js: "function rotOranges(grid) {\n  // Minutes until nothing fresh remains, or -1.\n}\n",
      ts: "function rotOranges(grid: number[][]): number {\n  // Minutes until nothing fresh remains, or -1.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[2, 1, 1], [1, 1, 0], [0, 1, 1]]], expected: 4 },
      { args: [[[2, 1, 1], [0, 1, 1], [1, 0, 1]]], expected: -1 },
      { args: [[[0, 2]]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[[0]]], expected: 0 },
      { args: [[[1]]], expected: -1 },
      { args: [[[2]]], expected: 0 },
      { args: [[[2, 1], [1, 1]]], expected: 2 },
      { args: [[[2, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 4 },
    ],
    hints: [
      "Every already-rotten orange starts spreading at the same time — that's a multi-source BFS.",
      "Seed the queue with all rotten cells, then expand one minute per level.",
      "If fresh oranges remain when the queue empties, return -1.",
    ],
    solutions: [
      {
        label: "Multi-source BFS",
        approach: "Start from every rotten cell at once and count level expansions.",
        js: "function rotOranges(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let fresh = 0;\n  let queue = [];\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] === 1) fresh++;\n      else if (g[r][c] === 2) queue.push([r, c]);\n    }\n  }\n  if (fresh === 0) return 0;\n  let minutes = 0;\n  while (queue.length && fresh > 0) {\n    const next = [];\n    for (const [r, c] of queue) {\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n          g[nr][nc] = 2;\n          fresh--;\n          next.push([nr, nc]);\n        }\n      }\n    }\n    queue = next;\n    if (queue.length) minutes++;\n  }\n  return fresh === 0 ? minutes : -1;\n}\n",
        ts: "function rotOranges(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let fresh = 0;\n  let queue: number[][] = [];\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] === 1) fresh++;\n      else if (g[r][c] === 2) queue.push([r, c]);\n    }\n  }\n  if (fresh === 0) return 0;\n  let minutes = 0;\n  while (queue.length && fresh > 0) {\n    const next: number[][] = [];\n    for (const [r, c] of queue) {\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n          g[nr][nc] = 2;\n          fresh--;\n          next.push([nr, nc]);\n        }\n      }\n    }\n    queue = next;\n    if (queue.length) minutes++;\n  }\n  return fresh === 0 ? minutes : -1;\n}\n",
        time: "O(r·c)",
        space: "O(r·c)",
      },
      {
        label: "Repeated sweeps",
        approach: "Rot one ring per pass over the grid until nothing changes.",
        js: "function rotOranges(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  const countFresh = () => {\n    let f = 0;\n    for (const row of g) for (const v of row) if (v === 1) f++;\n    return f;\n  };\n  let minutes = 0;\n  while (countFresh() > 0) {\n    const toRot = [];\n    for (let r = 0; r < rows; r++) {\n      for (let c = 0; c < cols; c++) {\n        if (g[r][c] !== 2) continue;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = r + dr, nc = c + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) toRot.push([nr, nc]);\n        }\n      }\n    }\n    if (toRot.length === 0) return -1;\n    for (const [r, c] of toRot) g[r][c] = 2;\n    minutes++;\n  }\n  return minutes;\n}\n",
        ts: "function rotOranges(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  const countFresh = () => {\n    let f = 0;\n    for (const row of g) for (const v of row) if (v === 1) f++;\n    return f;\n  };\n  let minutes = 0;\n  while (countFresh() > 0) {\n    const toRot: number[][] = [];\n    for (let r = 0; r < rows; r++) {\n      for (let c = 0; c < cols; c++) {\n        if (g[r][c] !== 2) continue;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = r + dr, nc = c + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) toRot.push([nr, nc]);\n        }\n      }\n    }\n    if (toRot.length === 0) return -1;\n    for (const [r, c] of toRot) g[r][c] = 2;\n    minutes++;\n  }\n  return minutes;\n}\n",
        time: "O((r·c)²)",
        space: "O(r·c)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "gt-island-perimeter",
    slug: "island-perimeter",
    title: "Island Perimeter",
    difficulty: "medium",
    patternIds: P,
    statement: `A grid holds 1 for land and 0 for water. Return the total perimeter of the land — every land edge that touches water or the grid border.\n\n${GRID_NOTE}`,
    examples: [
      { input: "[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]", output: "16" },
      { input: "[[1]]", output: "4" },
      { input: "[[0,0]]", output: "0" },
    ],
    constraints: ["0 <= rows, cols <= 200"],
    functionName: "islandPerimeter",
    starter: {
      js: "function islandPerimeter(grid) {\n  // Total perimeter of all land cells.\n}\n",
      ts: "function islandPerimeter(grid: number[][]): number {\n  // Total perimeter of all land cells.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]], expected: 16 },
      { args: [[[1]]], expected: 4 },
      { args: [[[0, 0]]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[[1, 1]]], expected: 6 },
      { args: [[[1, 1], [1, 1]]], expected: 8 },
      { args: [[[1, 0], [0, 1]]], expected: 8 },
      { args: [[[1, 1, 1]]], expected: 8 },
      { args: [[[0]]], expected: 0 },
    ],
    hints: [
      "Each land cell alone contributes 4 sides.",
      "Every shared edge between two land cells removes 2 from the total.",
      "perimeter = 4·(land cells) − 2·(adjacent land pairs).",
    ],
    solutions: [
      {
        label: "Count cells and shared edges",
        approach: "Four sides per cell, minus two for every neighbouring pair.",
        js: "function islandPerimeter(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let land = 0, pairs = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== 1) continue;\n      land++;\n      if (r + 1 < rows && grid[r + 1][c] === 1) pairs++;\n      if (c + 1 < cols && grid[r][c + 1] === 1) pairs++;\n    }\n  }\n  return 4 * land - 2 * pairs;\n}\n",
        ts: "function islandPerimeter(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let land = 0, pairs = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== 1) continue;\n      land++;\n      if (r + 1 < rows && grid[r + 1][c] === 1) pairs++;\n      if (c + 1 < cols && grid[r][c + 1] === 1) pairs++;\n    }\n  }\n  return 4 * land - 2 * pairs;\n}\n",
        time: "O(r·c)",
        space: "O(1)",
      },
      {
        label: "Count exposed sides",
        approach: "For each land cell, add one for every neighbour that is water or off-grid.",
        js: "function islandPerimeter(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let total = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== 1) continue;\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] === 0) total++;\n      }\n    }\n  }\n  return total;\n}\n",
        ts: "function islandPerimeter(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let total = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== 1) continue;\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] === 0) total++;\n      }\n    }\n  }\n  return total;\n}\n",
        time: "O(r·c)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "gt-flood-fill",
    slug: "flood-fill",
    title: "Flood Fill",
    difficulty: "medium",
    patternIds: P,
    statement: `Starting at cell \`(sr, sc)\`, repaint every 4-directionally connected cell that shares the starting colour with \`newColor\`, and return the resulting grid.\n\n${GRID_NOTE}`,
    examples: [
      { input: "[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2", output: "[[2,2,2],[2,2,0],[2,0,1]]" },
      { input: "[[0,0],[0,0]], 0, 0, 0", output: "[[0,0],[0,0]]" },
      { input: "[[1]], 0, 0, 2", output: "[[2]]" },
    ],
    constraints: ["the start cell is inside the grid"],
    functionName: "floodFill",
    starter: {
      js: "function floodFill(grid, sr, sc, newColor) {\n  // Repaint the connected same-colour region.\n}\n",
      ts: "function floodFill(grid: number[][], sr: number, sc: number, newColor: number): number[][] {\n  // Repaint the connected same-colour region.\n  return grid;\n}\n",
    },
    visible: [
      { args: [[[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2], expected: [[2, 2, 2], [2, 2, 0], [2, 0, 1]] },
      { args: [[[0, 0], [0, 0]], 0, 0, 0], expected: [[0, 0], [0, 0]] },
      { args: [[[1]], 0, 0, 2], expected: [[2]] },
    ],
    hidden: [
      { args: [[[1, 0], [0, 1]], 0, 0, 3], expected: [[3, 0], [0, 1]] },
      { args: [[[1, 1], [1, 1]], 0, 0, 5], expected: [[5, 5], [5, 5]] },
      { args: [[[0, 1], [1, 0]], 1, 1, 7], expected: [[0, 1], [1, 7]] },
      { args: [[[2, 2], [2, 2]], 0, 0, 2], expected: [[2, 2], [2, 2]] },
      { args: [[[1, 2], [2, 1]], 0, 1, 9], expected: [[1, 9], [2, 1]] },
      { args: [[[3]], 0, 0, 3], expected: [[3]] },
    ],
    hints: [
      "Remember the starting colour before you overwrite it.",
      "If the new colour equals the old one, there is nothing to do — otherwise you loop forever.",
      "Recurse into the four neighbours that still hold the original colour.",
    ],
    solutions: [
      {
        label: "DFS repaint",
        approach: "Flood outward from the start, guarding against a no-op repaint.",
        js: "function floodFill(grid, sr, sc, newColor) {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  const start = grid[sr][sc];\n  if (start === newColor) return grid;\n  const fill = (r, c) => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== start) return;\n    grid[r][c] = newColor;\n    fill(r + 1, c); fill(r - 1, c); fill(r, c + 1); fill(r, c - 1);\n  };\n  fill(sr, sc);\n  return grid;\n}\n",
        ts: "function floodFill(grid: number[][], sr: number, sc: number, newColor: number): number[][] {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  const start = grid[sr][sc];\n  if (start === newColor) return grid;\n  const fill = (r: number, c: number) => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== start) return;\n    grid[r][c] = newColor;\n    fill(r + 1, c); fill(r - 1, c); fill(r, c + 1); fill(r, c - 1);\n  };\n  fill(sr, sc);\n  return grid;\n}\n",
        time: "O(r·c)",
        space: "O(r·c)",
      },
      {
        label: "BFS repaint",
        approach: "Queue-driven repaint with the same guard.",
        js: "function floodFill(grid, sr, sc, newColor) {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  const start = grid[sr][sc];\n  if (start === newColor) return grid;\n  const queue = [[sr, sc]];\n  grid[sr][sc] = newColor;\n  while (queue.length) {\n    const [r, c] = queue.shift();\n    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === start) {\n        grid[nr][nc] = newColor;\n        queue.push([nr, nc]);\n      }\n    }\n  }\n  return grid;\n}\n",
        ts: "function floodFill(grid: number[][], sr: number, sc: number, newColor: number): number[][] {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  const start = grid[sr][sc];\n  if (start === newColor) return grid;\n  const queue: number[][] = [[sr, sc]];\n  grid[sr][sc] = newColor;\n  while (queue.length) {\n    const [r, c] = queue.shift() as number[];\n    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === start) {\n        grid[nr][nc] = newColor;\n        queue.push([nr, nc]);\n      }\n    }\n  }\n  return grid;\n}\n",
        time: "O(r·c)",
        space: "O(r·c)",
      },
    ],
  },
  {
    id: "gt-nodes-at-distance",
    slug: "nodes-at-distance",
    title: "Nodes at Distance K",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the nodes that are exactly \`k\` edges away from \`start\`, sorted ascending.\n\n${GRAPH_NOTE}`,
    examples: [
      { input: "5, [[0,1],[1,2],[2,3],[3,4]], 0, 2", output: "[2]" },
      { input: "3, [], 0, 0", output: "[0]" },
      { input: "4, [[0,1],[0,2],[0,3]], 0, 1", output: "[1,2,3]" },
    ],
    constraints: ["1 <= n <= 10000", "0 <= k"],
    functionName: "nodesAtDistance",
    starter: {
      js: "function nodesAtDistance(n, edges, start, k) {\n  // Nodes exactly k edges from start, sorted.\n}\n",
      ts: "function nodesAtDistance(n: number, edges: number[][], start: number, k: number): number[] {\n  // Nodes exactly k edges from start, sorted.\n  return [];\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 2], expected: [2] },
      { args: [3, [], 0, 0], expected: [0] },
      { args: [4, [[0, 1], [0, 2], [0, 3]], 0, 1], expected: [1, 2, 3] },
    ],
    hidden: [
      { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 0], expected: [0] },
      { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 4], expected: [4] },
      { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 5], expected: [] },
      { args: [4, [[0, 1], [2, 3]], 0, 1], expected: [1] },
      { args: [4, [[0, 1], [2, 3]], 0, 2], expected: [] },
      { args: [6, [[0, 1], [0, 2], [1, 3], [2, 4], [4, 5]], 0, 2], expected: [3, 4] },
    ],
    hints: [
      "BFS records the shortest distance to each node as it expands.",
      "Collect the nodes whose recorded distance equals k.",
      "Unreachable nodes should never be included.",
    ],
    solutions: [
      {
        label: "BFS distances",
        approach: "Record each node's first-reached depth and filter for k.",
        js: "function nodesAtDistance(n, edges, start, k) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const dist = new Array(n).fill(-1);\n  dist[start] = 0;\n  const queue = [start];\n  while (queue.length) {\n    const cur = queue.shift();\n    for (const nb of adj[cur]) if (dist[nb] === -1) { dist[nb] = dist[cur] + 1; queue.push(nb); }\n  }\n  const out = [];\n  for (let i = 0; i < n; i++) if (dist[i] === k) out.push(i);\n  return out;\n}\n",
        ts: "function nodesAtDistance(n: number, edges: number[][], start: number, k: number): number[] {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const dist = new Array(n).fill(-1);\n  dist[start] = 0;\n  const queue: number[] = [start];\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    for (const nb of adj[cur]) if (dist[nb] === -1) { dist[nb] = dist[cur] + 1; queue.push(nb); }\n  }\n  const out: number[] = [];\n  for (let i = 0; i < n; i++) if (dist[i] === k) out.push(i);\n  return out;\n}\n",
        time: "O(V + E)",
        space: "O(V + E)",
      },
      {
        label: "Expand k levels",
        approach: "Advance the frontier exactly k times and return what's left.",
        js: "function nodesAtDistance(n, edges, start, k) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  let level = [start];\n  for (let step = 0; step < k; step++) {\n    const next = [];\n    for (const cur of level) {\n      for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; next.push(nb); }\n    }\n    level = next;\n  }\n  return level.sort((a, b) => a - b);\n}\n",
        ts: "function nodesAtDistance(n: number, edges: number[][], start: number, k: number): number[] {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  let level: number[] = [start];\n  for (let step = 0; step < k; step++) {\n    const next: number[] = [];\n    for (const cur of level) {\n      for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; next.push(nb); }\n    }\n    level = next;\n  }\n  return level.sort((a, b) => a - b);\n}\n",
        time: "O(V + E)",
        space: "O(V + E)",
      },
    ],
  },
  {
    id: "gt-is-tree",
    slug: "graph-is-tree",
    title: "Is It a Tree?",
    difficulty: "medium",
    patternIds: P,
    statement: `Return \`true\` if the graph is a valid tree — every node connected, with no cycles.\n\n${GRAPH_NOTE}`,
    examples: [
      { input: "5, [[0,1],[0,2],[0,3],[1,4]]", output: "true" },
      { input: "5, [[0,1],[1,2],[2,3],[1,3],[1,4]]", output: "false" },
      { input: "1, []", output: "true" },
    ],
    constraints: ["1 <= n <= 10000"],
    functionName: "isTree",
    starter: {
      js: "function isTree(n, edges) {\n  // True if the graph is connected and acyclic.\n}\n",
      ts: "function isTree(n: number, edges: number[][]): boolean {\n  // True if the graph is connected and acyclic.\n  return false;\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [0, 2], [0, 3], [1, 4]]], expected: true },
      { args: [5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]], expected: false },
      { args: [1, []], expected: true },
    ],
    hidden: [
      { args: [2, [[0, 1]]], expected: true },
      { args: [2, []], expected: false },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: false },
      { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: true },
      { args: [4, [[0, 1], [2, 3]]], expected: false },
      { args: [3, [[0, 1]]], expected: false },
    ],
    hints: [
      "A tree on n nodes always has exactly n-1 edges — check that first.",
      "With n-1 edges, 'connected' and 'acyclic' become the same condition.",
      "So: edges.length === n - 1 AND every node reachable from node 0.",
    ],
    solutions: [
      {
        label: "Edge count plus connectivity",
        approach: "n-1 edges and a single connected component means a tree.",
        js: "function isTree(n, edges) {\n  if (edges.length !== n - 1) return false;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[0] = true;\n  const stack = [0];\n  let count = 1;\n  while (stack.length) {\n    const cur = stack.pop();\n    for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; count++; stack.push(nb); }\n  }\n  return count === n;\n}\n",
        ts: "function isTree(n: number, edges: number[][]): boolean {\n  if (edges.length !== n - 1) return false;\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[0] = true;\n  const stack: number[] = [0];\n  let count = 1;\n  while (stack.length) {\n    const cur = stack.pop() as number;\n    for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; count++; stack.push(nb); }\n  }\n  return count === n;\n}\n",
        time: "O(V + E)",
        space: "O(V + E)",
      },
      {
        label: "Union-Find",
        approach: "Reject an edge joining two already-connected nodes, then check one component.",
        js: "function isTree(n, edges) {\n  if (edges.length !== n - 1) return false;\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let components = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) return false;\n    parent[ru] = rv;\n    components--;\n  }\n  return components === 1;\n}\n",
        ts: "function isTree(n: number, edges: number[][]): boolean {\n  if (edges.length !== n - 1) return false;\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let components = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) return false;\n    parent[ru] = rv;\n    components--;\n  }\n  return components === 1;\n}\n",
        time: "O((V + E) α)",
        space: "O(V)",
      },
    ],
  },
];

export const graphTraversalProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const graphTraversalMcqs: QuizQuestion[] = [
  {
    id: "s5-gt-time",
    kind: "mcq",
    prompt: "A BFS or DFS over a graph with V nodes and E edges runs in:",
    options: ["O(V)", "O(V + E)", "O(V · E)", "O(V²)"],
    answerIndex: 1,
    explanation: "Each node is visited once and each edge examined a constant number of times.",
  },
  {
    id: "s5-gt-shortest",
    kind: "mcq",
    prompt: "In an *unweighted* graph, which traversal finds shortest paths from a source?",
    options: ["DFS", "BFS", "either one works", "neither"],
    answerIndex: 1,
    explanation: "BFS expands by distance, so the first time it reaches a node is via a shortest path.",
  },
];

export const graphTraversalModule: Module = {
  id: "m-pat-graph-traversal",
  stageId: S,
  title: "Graph DFS & BFS",
  kind: "patternModule",
  summary: "Explore nodes and grids — connectivity, islands, colouring, and shortest hops in O(V+E).",
  lessonSections: [
    {
      heading: "Two ways to explore",
      body: `Both traversals visit every reachable node once, in **O(V+E)** — they differ only in the order.

- **DFS** (stack or recursion) plunges as deep as it can before backtracking. Natural for connectivity, components, cycles, and flood fill.
- **BFS** (queue) fans out level by level. It is the one that finds **shortest paths in an unweighted graph**.

The essential guard is a **visited** marker; without it, any cycle loops forever.

\`\`\`js
function bfs(n, edges, start) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }
  const seen = new Array(n).fill(false);
  seen[start] = true;
  const queue = [start], order = [];
  while (queue.length) {
    const cur = queue.shift();
    order.push(cur);
    for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; queue.push(nb); }
  }
  return order;
}
console.log(bfs(4, [[0,1],[1,2],[0,3]], 0)); // [0, 1, 3, 2]
\`\`\``,
    },
    {
      heading: "Grids are graphs too",
      body: `A matrix is just a graph where each cell connects to its four neighbours. That single idea powers **islands**, **flood fill**, **perimeter**, and **rotting oranges** — the only change is how you enumerate neighbours.

When *many* sources spread at once (every rotten orange, every gate), seed the queue with **all** of them and BFS outward: a **multi-source BFS** gives every cell its distance to the nearest source in one pass.

**Recognition cues:** connected components / islands, reachability, shortest hops, 2-colouring or "can this be split in two", cycle detection, or spreading/infection over a grid.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Grid flood fill
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
function fill(r: number, c: number) {
  if (r < 0 || c < 0 || r >= rows || c >= cols) return;
  if (grid[r][c] !== target) return;   // also the visited guard
  grid[r][c] = replacement;
  for (const [dr, dc] of dirs) fill(r + dr, c + dc);
}

// Multi-source BFS: push every source before the loop starts
let level = allSources, minutes = 0;
while (level.length) { /* expand one ring, then minutes++ */ }
\`\`\`

**Pitfalls:** forgetting the visited check (infinite loops on cycles); marking a node visited when you *dequeue* rather than when you *enqueue*, which lets duplicates pile up; restarting the traversal for **every** component when the graph may be disconnected; in flood fill, repainting with the colour that's already there — guard it or you'll recurse forever. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "gt-reachable-count",
  drillProblemIds: [
    "gt-reachable-count",
    "gt-reachable-list",
    "gt-num-islands",
    "gt-max-island-area",
    "gt-bipartite",
    "gt-rotting-oranges",
  ],
  testPoolProblemIds: [
    "gt-island-perimeter",
    "gt-flood-fill",
    "gt-nodes-at-distance",
    "gt-is-tree",
  ],
  complexityQuestionIds: ["s5-gt-time", "s5-gt-shortest"],
  badgeId: "badge-pat-graph-traversal",
  prerequisiteModuleIds: ["m-pat-tree-bfs"],
};
