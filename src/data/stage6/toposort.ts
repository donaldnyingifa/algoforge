import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["toposort"];

/*
 * Graph convention across this module: a directed graph has `n` nodes labeled
 * 0..n-1 and an edge list where each edge [u, v] means "u must come before v"
 * (a directed edge u -> v). Outputs are deterministic: orderings are the
 * lexicographically smallest valid one, and node lists are returned sorted.
 */

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "ts-can-finish",
    slug: "can-finish-courses",
    title: "Course Schedule (Can Finish)",
    difficulty: "medium",
    patternIds: P,
    statement:
      "There are `n` courses labeled 0..n-1 and a list of prerequisite edges where `[u, v]` means course `u` must be taken before course `v`. Return whether all courses can be completed (i.e. the graph has no cycle).",
    examples: [
      { input: "2, [[0,1]]", output: "true" },
      { input: "2, [[0,1],[1,0]]", output: "false" },
      { input: "4, [[0,1],[0,2],[1,3],[2,3]]", output: "true" },
    ],
    constraints: ["1 <= n <= 2000", "edges are directed 'before' relations"],
    functionName: "canFinishCourses",
    starter: {
      js: "function canFinishCourses(n, edges) {\n  // True if the directed graph is acyclic.\n}\n",
      ts: "function canFinishCourses(n: number, edges: number[][]): boolean {\n  // True if the directed graph is acyclic.\n  return false;\n}\n",
    },
    visible: [
      { args: [2, [[0, 1]]], expected: true },
      { args: [2, [[0, 1], [1, 0]]], expected: false },
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: true },
    ],
    hidden: [
      { args: [1, []], expected: true },
      { args: [3, []], expected: true },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: false },
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: true },
      { args: [4, [[1, 0], [2, 0], [3, 1], [3, 2]]], expected: true },
      { args: [2, [[0, 1], [1, 0]]], expected: false },
    ],
    hints: [
      "All courses finish exactly when a topological order exists.",
      "Kahn's algorithm: repeatedly remove a node with in-degree 0; if you remove all n, it's a DAG.",
      "A leftover node means it sits on a cycle.",
    ],
    solutions: [
      {
        label: "Kahn's algorithm (BFS)",
        approach: "Peel off in-degree-0 nodes; success iff every node is peeled.",
        js: "function canFinishCourses(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let seen = 0;\n  while (q.length) {\n    const u = q.pop();\n    seen++;\n    for (const v of adj[u]) if (--indeg[v] === 0) q.push(v);\n  }\n  return seen === n;\n}\n",
        ts: "function canFinishCourses(n: number, edges: number[][]): boolean {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let seen = 0;\n  while (q.length) {\n    const u = q.pop();\n    seen++;\n    for (const v of adj[u]) if (--indeg[v] === 0) q.push(v);\n  }\n  return seen === n;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
      {
        label: "DFS cycle detection",
        approach: "Three-color DFS; a back edge to a gray node is a cycle.",
        js: "function canFinishCourses(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) adj[u].push(v);\n  const color = new Array(n).fill(0);\n  const dfs = (u) => {\n    color[u] = 1;\n    for (const v of adj[u]) {\n      if (color[v] === 1) return false;\n      if (color[v] === 0 && !dfs(v)) return false;\n    }\n    color[u] = 2;\n    return true;\n  };\n  for (let i = 0; i < n; i++) if (color[i] === 0 && !dfs(i)) return false;\n  return true;\n}\n",
        ts: "function canFinishCourses(n: number, edges: number[][]): boolean {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) adj[u].push(v);\n  const color = new Array(n).fill(0);\n  const dfs = (u: number): boolean => {\n    color[u] = 1;\n    for (const v of adj[u]) {\n      if (color[v] === 1) return false;\n      if (color[v] === 0 && !dfs(v)) return false;\n    }\n    color[u] = 2;\n    return true;\n  };\n  for (let i = 0; i < n; i++) if (color[i] === 0 && !dfs(i)) return false;\n  return true;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "ts-topo-order",
    slug: "topological-order",
    title: "Topological Order (Lexicographically Smallest)",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a directed graph on `n` nodes and edges `[u, v]` meaning `u` before `v`, return the lexicographically smallest valid topological ordering. If the graph has a cycle, return an empty array.",
    examples: [
      { input: "4, [[0,1],[0,2],[1,3],[2,3]]", output: "[0,1,2,3]" },
      { input: "2, [[0,1],[1,0]]", output: "[]" },
      { input: "3, []", output: "[0,1,2]" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "topologicalOrder",
    starter: {
      js: "function topologicalOrder(n, edges) {\n  // Lexicographically smallest topological order, or [] on a cycle.\n}\n",
      ts: "function topologicalOrder(n: number, edges: number[][]): number[] {\n  // Lexicographically smallest topological order, or [] on a cycle.\n  return [];\n}\n",
    },
    visible: [
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: [0, 1, 2, 3] },
      { args: [2, [[0, 1], [1, 0]]], expected: [] },
      { args: [3, []], expected: [0, 1, 2] },
    ],
    hidden: [
      { args: [1, []], expected: [0] },
      { args: [4, [[1, 0], [1, 2], [3, 1]]], expected: [3, 1, 0, 2] },
      { args: [5, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]]], expected: [0, 1, 2, 3, 4] },
      { args: [3, [[2, 0], [2, 1]]], expected: [2, 0, 1] },
      { args: [6, [[5, 0], [4, 0], [5, 2], [2, 3], [3, 1], [4, 1]]], expected: [4, 5, 0, 2, 3, 1] },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: [] },
    ],
    hints: [
      "Run Kahn's algorithm but always emit the smallest available in-degree-0 node.",
      "Keep the frontier sorted (or use a min-heap) so ties break to the smaller label.",
      "If you can't emit all n nodes, a cycle remains — return [].",
    ],
    solutions: [
      {
        label: "Kahn with sorted frontier",
        approach: "Insert newly-freed nodes in sorted position; always take the front.",
        js: "function topologicalOrder(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const avail = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) avail.push(i);\n  avail.sort((a, b) => a - b);\n  const insert = (x) => {\n    let lo = 0, hi = avail.length;\n    while (lo < hi) { const m = (lo + hi) >> 1; if (avail[m] < x) lo = m + 1; else hi = m; }\n    avail.splice(lo, 0, x);\n  };\n  const out = [];\n  while (avail.length) {\n    const u = avail.shift();\n    out.push(u);\n    for (const v of adj[u]) if (--indeg[v] === 0) insert(v);\n  }\n  return out.length === n ? out : [];\n}\n",
        ts: "function topologicalOrder(n: number, edges: number[][]): number[] {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const avail: number[] = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) avail.push(i);\n  avail.sort((a, b) => a - b);\n  const insert = (x: number) => {\n    let lo = 0, hi = avail.length;\n    while (lo < hi) { const m = (lo + hi) >> 1; if (avail[m] < x) lo = m + 1; else hi = m; }\n    avail.splice(lo, 0, x);\n  };\n  const out: number[] = [];\n  while (avail.length) {\n    const u = avail.shift() as number;\n    out.push(u);\n    for (const v of adj[u]) if (--indeg[v] === 0) insert(v);\n  }\n  return out.length === n ? out : [];\n}\n",
        time: "O(n² + e)",
        space: "O(n + e)",
      },
      {
        label: "Repeatedly pick the smallest",
        approach: "Each step scans for the smallest in-degree-0 node not yet emitted.",
        js: "function topologicalOrder(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const used = new Array(n).fill(false);\n  const out = [];\n  for (let step = 0; step < n; step++) {\n    let pick = -1;\n    for (let i = 0; i < n; i++) if (!used[i] && indeg[i] === 0) { pick = i; break; }\n    if (pick === -1) return [];\n    used[pick] = true;\n    out.push(pick);\n    for (const v of adj[pick]) indeg[v]--;\n  }\n  return out;\n}\n",
        ts: "function topologicalOrder(n: number, edges: number[][]): number[] {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const used = new Array(n).fill(false);\n  const out: number[] = [];\n  for (let step = 0; step < n; step++) {\n    let pick = -1;\n    for (let i = 0; i < n; i++) if (!used[i] && indeg[i] === 0) { pick = i; break; }\n    if (pick === -1) return [];\n    used[pick] = true;\n    out.push(pick);\n    for (const v of adj[pick]) indeg[v]--;\n  }\n  return out;\n}\n",
        time: "O(n² + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "ts-has-cycle",
    slug: "detect-directed-cycle",
    title: "Detect a Directed Cycle",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a directed graph on `n` nodes and edges `[u, v]` (an edge u -> v), return whether it contains a cycle.",
    examples: [
      { input: "2, [[0,1]]", output: "false" },
      { input: "3, [[0,1],[1,2],[2,0]]", output: "true" },
      { input: "1, [[0,0]]", output: "true" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "hasDirectedCycle",
    starter: {
      js: "function hasDirectedCycle(n, edges) {\n  // True if the directed graph has a cycle.\n}\n",
      ts: "function hasDirectedCycle(n: number, edges: number[][]): boolean {\n  // True if the directed graph has a cycle.\n  return false;\n}\n",
    },
    visible: [
      { args: [2, [[0, 1]]], expected: false },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: true },
      { args: [1, [[0, 0]]], expected: true },
    ],
    hidden: [
      { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: false },
      { args: [3, []], expected: false },
      { args: [2, [[0, 1], [1, 0]]], expected: true },
      { args: [5, [[0, 1], [2, 3], [3, 4], [4, 2]]], expected: true },
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: false },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: true },
    ],
    hints: [
      "A self-loop counts as a cycle.",
      "DFS with three colors: revisiting a node still on the recursion stack (gray) is a cycle.",
      "Equivalently, if Kahn's algorithm can't remove all nodes, a cycle exists.",
    ],
    solutions: [
      {
        label: "Three-color DFS",
        approach: "Gray = on the stack; an edge back to gray proves a cycle.",
        js: "function hasDirectedCycle(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) adj[u].push(v);\n  const color = new Array(n).fill(0);\n  const dfs = (u) => {\n    color[u] = 1;\n    for (const v of adj[u]) {\n      if (color[v] === 1) return true;\n      if (color[v] === 0 && dfs(v)) return true;\n    }\n    color[u] = 2;\n    return false;\n  };\n  for (let i = 0; i < n; i++) if (color[i] === 0 && dfs(i)) return true;\n  return false;\n}\n",
        ts: "function hasDirectedCycle(n: number, edges: number[][]): boolean {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) adj[u].push(v);\n  const color = new Array(n).fill(0);\n  const dfs = (u: number): boolean => {\n    color[u] = 1;\n    for (const v of adj[u]) {\n      if (color[v] === 1) return true;\n      if (color[v] === 0 && dfs(v)) return true;\n    }\n    color[u] = 2;\n    return false;\n  };\n  for (let i = 0; i < n; i++) if (color[i] === 0 && dfs(i)) return true;\n  return false;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
      {
        label: "Kahn leftover check",
        approach: "If topological peeling can't consume all nodes, a cycle remains.",
        js: "function hasDirectedCycle(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let seen = 0;\n  while (q.length) {\n    const u = q.pop();\n    seen++;\n    for (const v of adj[u]) if (--indeg[v] === 0) q.push(v);\n  }\n  return seen !== n;\n}\n",
        ts: "function hasDirectedCycle(n: number, edges: number[][]): boolean {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let seen = 0;\n  while (q.length) {\n    const u = q.pop();\n    seen++;\n    for (const v of adj[u]) if (--indeg[v] === 0) q.push(v);\n  }\n  return seen !== n;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "ts-count-sources",
    slug: "count-source-nodes",
    title: "Count Source Nodes",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a directed graph on `n` nodes and edges `[u, v]` (u -> v), return how many nodes have in-degree 0 (no prerequisites).",
    examples: [
      { input: "4, [[0,1],[0,2],[1,3],[2,3]]", output: "1" },
      { input: "3, []", output: "3" },
      { input: "1, []", output: "1" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "countSourceNodes",
    starter: {
      js: "function countSourceNodes(n, edges) {\n  // Number of in-degree-0 nodes.\n}\n",
      ts: "function countSourceNodes(n: number, edges: number[][]): number {\n  // Number of in-degree-0 nodes.\n  return 0;\n}\n",
    },
    visible: [
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: 1 },
      { args: [3, []], expected: 3 },
      { args: [1, []], expected: 1 },
    ],
    hidden: [
      { args: [4, [[1, 0], [2, 0], [3, 0]]], expected: 3 },
      { args: [5, [[0, 1], [2, 3]]], expected: 3 },
      { args: [2, [[0, 1]]], expected: 1 },
      { args: [6, [[5, 0], [4, 0], [5, 2], [2, 3]]], expected: 3 },
      { args: [3, [[0, 1], [0, 2]]], expected: 1 },
      { args: [3, []], expected: 3 },
    ],
    hints: [
      "Sources are exactly the nodes nothing points to.",
      "Count in-degrees, then tally how many stay 0.",
      "These are the natural starting points for a topological sort.",
    ],
    solutions: [
      {
        label: "In-degree tally",
        approach: "Increment in-degree per edge, then count the zeros.",
        js: "function countSourceNodes(n, edges) {\n  const indeg = new Array(n).fill(0);\n  for (const [, v] of edges) indeg[v]++;\n  let count = 0;\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) count++;\n  return count;\n}\n",
        ts: "function countSourceNodes(n: number, edges: number[][]): number {\n  const indeg = new Array(n).fill(0);\n  for (const [, v] of edges) indeg[v]++;\n  let count = 0;\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) count++;\n  return count;\n}\n",
        time: "O(n + e)",
        space: "O(n)",
      },
      {
        label: "Set of targets",
        approach: "Every node that is never an edge target is a source.",
        js: "function countSourceNodes(n, edges) {\n  const hasParent = new Set();\n  for (const [, v] of edges) hasParent.add(v);\n  let count = 0;\n  for (let i = 0; i < n; i++) if (!hasParent.has(i)) count++;\n  return count;\n}\n",
        ts: "function countSourceNodes(n: number, edges: number[][]): number {\n  const hasParent = new Set<number>();\n  for (const [, v] of edges) hasParent.add(v);\n  let count = 0;\n  for (let i = 0; i < n; i++) if (!hasParent.has(i)) count++;\n  return count;\n}\n",
        time: "O(n + e)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ts-min-semesters",
    slug: "min-semesters",
    title: "Parallel Courses (Minimum Semesters)",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each semester you may take every course whose prerequisites are all already done. Given `n` courses and edges `[u, v]` (u before v), return the minimum number of semesters to finish all courses, or -1 if impossible (a cycle).",
    examples: [
      { input: "4, [[0,1],[0,2],[1,3],[2,3]]", output: "3" },
      { input: "3, [[0,1],[1,2]]", output: "3" },
      { input: "3, []", output: "1" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "minSemesters",
    starter: {
      js: "function minSemesters(n, edges) {\n  // Fewest semesters taking all ready courses each term; -1 if impossible.\n}\n",
      ts: "function minSemesters(n: number, edges: number[][]): number {\n  // Fewest semesters taking all ready courses each term; -1 if impossible.\n  return 0;\n}\n",
    },
    visible: [
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: 3 },
      { args: [3, [[0, 1], [1, 2]]], expected: 3 },
      { args: [3, []], expected: 1 },
    ],
    hidden: [
      { args: [1, []], expected: 1 },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: -1 },
      { args: [5, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]]], expected: 4 },
      { args: [6, [[0, 3], [1, 3], [2, 3], [3, 4], [3, 5]]], expected: 3 },
      { args: [2, [[0, 1]]], expected: 2 },
      { args: [3, []], expected: 1 },
    ],
    hints: [
      "Process the DAG in layers: one semester per Kahn 'wave'.",
      "Start with all in-degree-0 courses, then release their dependents together.",
      "The number of waves equals the longest prerequisite chain.",
    ],
    solutions: [
      {
        label: "Kahn by layers",
        approach: "Each BFS wave of ready courses is one semester.",
        js: "function minSemesters(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  let q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let sem = 0, seen = 0;\n  while (q.length) {\n    sem++;\n    const next = [];\n    for (const u of q) { seen++; for (const v of adj[u]) if (--indeg[v] === 0) next.push(v); }\n    q = next;\n  }\n  return seen === n ? sem : -1;\n}\n",
        ts: "function minSemesters(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  let q: number[] = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let sem = 0, seen = 0;\n  while (q.length) {\n    sem++;\n    const next: number[] = [];\n    for (const u of q) { seen++; for (const v of adj[u]) if (--indeg[v] === 0) next.push(v); }\n    q = next;\n  }\n  return seen === n ? sem : -1;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
      {
        label: "Longest chain via topo DP",
        approach: "Answer is the longest prerequisite chain length (in courses).",
        js: "function minSemesters(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const depth = new Array(n).fill(1);\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let seen = 0, best = 0;\n  while (q.length) {\n    const u = q.pop();\n    seen++;\n    best = Math.max(best, depth[u]);\n    for (const v of adj[u]) { depth[v] = Math.max(depth[v], depth[u] + 1); if (--indeg[v] === 0) q.push(v); }\n  }\n  return seen === n ? best : -1;\n}\n",
        ts: "function minSemesters(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const depth = new Array(n).fill(1);\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let seen = 0, best = 0;\n  while (q.length) {\n    const u = q.pop();\n    seen++;\n    best = Math.max(best, depth[u]);\n    for (const v of adj[u]) { depth[v] = Math.max(depth[v], depth[u] + 1); if (--indeg[v] === 0) q.push(v); }\n  }\n  return seen === n ? best : -1;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "ts-longest-chain",
    slug: "longest-chain-dag",
    title: "Longest Prerequisite Chain",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given a DAG (edges `[u, v]` meaning u before v), return the number of edges on the longest directed path. Return -1 if the graph has a cycle. A single node with no edges has a longest path of 0 edges.",
    examples: [
      { input: "4, [[0,1],[0,2],[1,3],[2,3]]", output: "2" },
      { input: "3, [[0,1],[1,2]]", output: "2" },
      { input: "3, []", output: "0" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "longestChainEdges",
    starter: {
      js: "function longestChainEdges(n, edges) {\n  // Edges on the longest directed path; -1 if cyclic.\n}\n",
      ts: "function longestChainEdges(n: number, edges: number[][]): number {\n  // Edges on the longest directed path; -1 if cyclic.\n  return 0;\n}\n",
    },
    visible: [
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: 2 },
      { args: [3, [[0, 1], [1, 2]]], expected: 2 },
      { args: [3, []], expected: 0 },
    ],
    hidden: [
      { args: [1, []], expected: 0 },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: -1 },
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
      { args: [6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]], expected: 5 },
      { args: [4, [[0, 1], [0, 2], [0, 3]]], expected: 1 },
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: 2 },
    ],
    hints: [
      "Relax edges in topological order: dp[v] = max(dp[v], dp[u] + 1).",
      "dp counts edges, so it starts at 0 for every node.",
      "If topological processing can't reach all nodes, report -1.",
    ],
    solutions: [
      {
        label: "Topological DP (Kahn)",
        approach: "Push the best edge-count forward along the topological order.",
        js: "function longestChainEdges(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const dp = new Array(n).fill(0);\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let seen = 0, best = 0;\n  while (q.length) {\n    const u = q.pop();\n    seen++;\n    best = Math.max(best, dp[u]);\n    for (const v of adj[u]) { dp[v] = Math.max(dp[v], dp[u] + 1); if (--indeg[v] === 0) q.push(v); }\n  }\n  return seen === n ? best : -1;\n}\n",
        ts: "function longestChainEdges(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const dp = new Array(n).fill(0);\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let seen = 0, best = 0;\n  while (q.length) {\n    const u = q.pop();\n    seen++;\n    best = Math.max(best, dp[u]);\n    for (const v of adj[u]) { dp[v] = Math.max(dp[v], dp[u] + 1); if (--indeg[v] === 0) q.push(v); }\n  }\n  return seen === n ? best : -1;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
      {
        label: "Memoized DFS with cycle guard",
        approach: "Longest path from each node, cached; a gray revisit signals a cycle.",
        js: "function longestChainEdges(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) adj[u].push(v);\n  const color = new Array(n).fill(0);\n  const memo = new Array(n).fill(0);\n  let cyclic = false;\n  const dfs = (u) => {\n    color[u] = 1;\n    let best = 0;\n    for (const v of adj[u]) {\n      if (color[v] === 1) { cyclic = true; return 0; }\n      const sub = color[v] === 2 ? memo[v] : dfs(v);\n      if (cyclic) return 0;\n      best = Math.max(best, sub + 1);\n    }\n    color[u] = 2;\n    memo[u] = best;\n    return best;\n  };\n  let ans = 0;\n  for (let i = 0; i < n; i++) {\n    if (color[i] === 0) { const r = dfs(i); if (cyclic) return -1; ans = Math.max(ans, r); }\n    else ans = Math.max(ans, memo[i]);\n  }\n  return ans;\n}\n",
        ts: "function longestChainEdges(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) adj[u].push(v);\n  const color = new Array(n).fill(0);\n  const memo = new Array(n).fill(0);\n  let cyclic = false;\n  const dfs = (u: number): number => {\n    color[u] = 1;\n    let best = 0;\n    for (const v of adj[u]) {\n      if (color[v] === 1) { cyclic = true; return 0; }\n      const sub = color[v] === 2 ? memo[v] : dfs(v);\n      if (cyclic) return 0;\n      best = Math.max(best, sub + 1);\n    }\n    color[u] = 2;\n    memo[u] = best;\n    return best;\n  };\n  let ans = 0;\n  for (let i = 0; i < n; i++) {\n    if (color[i] === 0) { const r = dfs(i); if (cyclic) return -1; ans = Math.max(ans, r); }\n    else ans = Math.max(ans, memo[i]);\n  }\n  return ans;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "ts-is-valid-order",
    slug: "is-valid-topological-order",
    title: "Validate a Topological Order",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a directed graph (edges `[u, v]` meaning u before v) and a proposed ordering of all `n` nodes, return whether the ordering is a valid topological order (every node appears once and every edge points forward).",
    examples: [
      { input: "4, [[0,1],[0,2],[1,3],[2,3]], [0,1,2,3]", output: "true" },
      { input: "3, [[0,1]], [1,0,2]", output: "false" },
      { input: "3, [], [2,1,0]", output: "true" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "isValidTopologicalOrder",
    starter: {
      js: "function isValidTopologicalOrder(n, edges, order) {\n  // True if order is a valid topological ordering.\n}\n",
      ts: "function isValidTopologicalOrder(n: number, edges: number[][], order: number[]): boolean {\n  // True if order is a valid topological ordering.\n  return false;\n}\n",
    },
    visible: [
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]], [0, 1, 2, 3]], expected: true },
      { args: [3, [[0, 1]], [1, 0, 2]], expected: false },
      { args: [3, [], [2, 1, 0]], expected: true },
    ],
    hidden: [
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]], [0, 2, 1, 3]], expected: true },
      { args: [2, [[0, 1]], [0, 1]], expected: true },
      { args: [3, [[0, 1], [1, 2]], [0, 1, 2]], expected: true },
      { args: [3, [[0, 1], [1, 2]], [0, 2, 1]], expected: false },
      { args: [4, [[0, 1]], [0, 1, 2]], expected: false },
      { args: [3, [], [2, 1, 0]], expected: true },
    ],
    hints: [
      "First check the order is a permutation of 0..n-1.",
      "Record each node's position in the order.",
      "Every edge [u, v] must satisfy pos[u] < pos[v].",
    ],
    solutions: [
      {
        label: "Position check",
        approach: "Map each node to its index, then verify every edge points forward.",
        js: "function isValidTopologicalOrder(n, edges, order) {\n  if (order.length !== n) return false;\n  const pos = new Array(n).fill(-1);\n  for (let i = 0; i < n; i++) {\n    const x = order[i];\n    if (x < 0 || x >= n || pos[x] !== -1) return false;\n    pos[x] = i;\n  }\n  for (const [u, v] of edges) if (pos[u] > pos[v]) return false;\n  return true;\n}\n",
        ts: "function isValidTopologicalOrder(n: number, edges: number[][], order: number[]): boolean {\n  if (order.length !== n) return false;\n  const pos = new Array(n).fill(-1);\n  for (let i = 0; i < n; i++) {\n    const x = order[i];\n    if (x < 0 || x >= n || pos[x] !== -1) return false;\n    pos[x] = i;\n  }\n  for (const [u, v] of edges) if (pos[u] > pos[v]) return false;\n  return true;\n}\n",
        time: "O(n + e)",
        space: "O(n)",
      },
      {
        label: "Simulated peeling",
        approach: "Walk the order, releasing each node only if its prerequisites are done.",
        js: "function isValidTopologicalOrder(n, edges, order) {\n  if (order.length !== n) return false;\n  const seen = new Set();\n  const indeg = new Array(n).fill(0);\n  const preds = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { indeg[v]++; preds[v].push(u); }\n  for (const x of order) {\n    if (x < 0 || x >= n || seen.has(x)) return false;\n    for (const p of preds[x]) if (!seen.has(p)) return false;\n    seen.add(x);\n  }\n  return seen.size === n;\n}\n",
        ts: "function isValidTopologicalOrder(n: number, edges: number[][], order: number[]): boolean {\n  if (order.length !== n) return false;\n  const seen = new Set<number>();\n  const indeg = new Array(n).fill(0);\n  const preds = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { indeg[v]++; preds[v].push(u); }\n  for (const x of order) {\n    if (x < 0 || x >= n || seen.has(x)) return false;\n    for (const p of preds[x]) if (!seen.has(p)) return false;\n    seen.add(x);\n  }\n  return seen.size === n;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "ts-eventual-safe-nodes",
    slug: "eventual-safe-nodes",
    title: "Eventual Safe Nodes",
    difficulty: "medium",
    patternIds: P,
    statement:
      "A node is safe if every directed path leaving it eventually reaches a terminal node (one with no outgoing edges) — that is, it can never enter a cycle. Given edges `[u, v]` (u -> v), return the sorted list of all safe nodes.",
    examples: [
      { input: "7, [[0,1],[0,2],[1,3],[1,5],[2,4],[2,5],[3,0],[4,5]]", output: "[2,4,5,6]" },
      { input: "4, [[0,1],[1,2],[2,3]]", output: "[0,1,2,3]" },
      { input: "3, [[0,1],[1,2],[2,0]]", output: "[]" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "eventualSafeNodes",
    starter: {
      js: "function eventualSafeNodes(n, edges) {\n  // Sorted list of nodes that can never enter a cycle.\n}\n",
      ts: "function eventualSafeNodes(n: number, edges: number[][]): number[] {\n  // Sorted list of nodes that can never enter a cycle.\n  return [];\n}\n",
    },
    visible: [
      { args: [7, [[0, 1], [0, 2], [1, 3], [1, 5], [2, 4], [2, 5], [3, 0], [4, 5]]], expected: [2, 4, 5, 6] },
      { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: [0, 1, 2, 3] },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: [] },
    ],
    hidden: [
      { args: [1, []], expected: [0] },
      { args: [3, []], expected: [0, 1, 2] },
      { args: [4, [[0, 1], [1, 2], [2, 1], [0, 3]]], expected: [3] },
      { args: [2, [[0, 1]]], expected: [0, 1] },
      { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: [0, 1, 2, 3, 4] },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: [] },
    ],
    hints: [
      "A node is safe iff all of its successors are safe (terminals are trivially safe).",
      "Three-color DFS: a node is safe once fully explored without touching a gray node.",
      "Or run Kahn on the reversed graph — nodes peeled are exactly the safe ones.",
    ],
    solutions: [
      {
        label: "Three-color DFS",
        approach: "A node is safe if DFS finishes it without reaching a node on the stack.",
        js: "function eventualSafeNodes(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) adj[u].push(v);\n  const color = new Array(n).fill(0);\n  const safe = (u) => {\n    if (color[u] > 0) return color[u] === 2;\n    color[u] = 1;\n    for (const v of adj[u]) if (!safe(v)) return false;\n    color[u] = 2;\n    return true;\n  };\n  const res = [];\n  for (let i = 0; i < n; i++) if (safe(i)) res.push(i);\n  return res;\n}\n",
        ts: "function eventualSafeNodes(n: number, edges: number[][]): number[] {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) adj[u].push(v);\n  const color = new Array(n).fill(0);\n  const safe = (u: number): boolean => {\n    if (color[u] > 0) return color[u] === 2;\n    color[u] = 1;\n    for (const v of adj[u]) if (!safe(v)) return false;\n    color[u] = 2;\n    return true;\n  };\n  const res: number[] = [];\n  for (let i = 0; i < n; i++) if (safe(i)) res.push(i);\n  return res;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
      {
        label: "Kahn on the reversed graph",
        approach: "Peel terminals repeatedly on reversed edges; peeled nodes are safe.",
        js: "function eventualSafeNodes(n, edges) {\n  const radj = Array.from({ length: n }, () => []);\n  const outdeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { radj[v].push(u); outdeg[u]++; }\n  const q = [];\n  for (let i = 0; i < n; i++) if (outdeg[i] === 0) q.push(i);\n  const safe = new Array(n).fill(false);\n  while (q.length) {\n    const u = q.pop();\n    safe[u] = true;\n    for (const p of radj[u]) if (--outdeg[p] === 0) q.push(p);\n  }\n  const res = [];\n  for (let i = 0; i < n; i++) if (safe[i]) res.push(i);\n  return res;\n}\n",
        ts: "function eventualSafeNodes(n: number, edges: number[][]): number[] {\n  const radj = Array.from({ length: n }, () => []);\n  const outdeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { radj[v].push(u); outdeg[u]++; }\n  const q = [];\n  for (let i = 0; i < n; i++) if (outdeg[i] === 0) q.push(i);\n  const safe = new Array(n).fill(false);\n  while (q.length) {\n    const u = q.pop();\n    safe[u] = true;\n    for (const p of radj[u]) if (--outdeg[p] === 0) q.push(p);\n  }\n  const res: number[] = [];\n  for (let i = 0; i < n; i++) if (safe[i]) res.push(i);\n  return res;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "ts-num-topo-orders",
    slug: "count-topological-orders",
    title: "Count Topological Orderings",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given a small directed graph (edges `[u, v]` meaning u before v), return the number of distinct valid topological orderings. Return 0 if the graph has a cycle.",
    examples: [
      { input: "3, []", output: "6" },
      { input: "3, [[0,1],[0,2]]", output: "2" },
      { input: "4, [[0,1],[0,2],[1,3],[2,3]]", output: "2" },
    ],
    constraints: ["1 <= n <= 12"],
    functionName: "countTopologicalOrders",
    starter: {
      js: "function countTopologicalOrders(n, edges) {\n  // Number of distinct topological orderings; 0 if cyclic.\n}\n",
      ts: "function countTopologicalOrders(n: number, edges: number[][]): number {\n  // Number of distinct topological orderings; 0 if cyclic.\n  return 0;\n}\n",
    },
    visible: [
      { args: [3, []], expected: 6 },
      { args: [3, [[0, 1], [0, 2]]], expected: 2 },
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: 2 },
    ],
    hidden: [
      { args: [2, [[0, 1]]], expected: 1 },
      { args: [1, []], expected: 1 },
      { args: [3, [[0, 1], [1, 2]]], expected: 1 },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: 0 },
      { args: [4, [[0, 1], [2, 3]]], expected: 6 },
      { args: [3, [[0, 1], [0, 2]]], expected: 2 },
    ],
    hints: [
      "Backtrack: at each step choose any in-degree-0 node not yet placed.",
      "A bitmask over placed nodes memoizes the count of ways to finish.",
      "A prerequisite is met when all its predecessors are already in the mask.",
    ],
    solutions: [
      {
        label: "Bitmask DP",
        approach: "dp[mask] = orderings that place exactly the nodes in mask.",
        js: "function countTopologicalOrders(n, edges) {\n  const need = new Array(n).fill(0);\n  for (const [u, v] of edges) need[v] |= (1 << u);\n  const full = (1 << n) - 1;\n  const dp = new Array(1 << n).fill(0);\n  dp[0] = 1;\n  for (let mask = 0; mask <= full; mask++) {\n    if (dp[mask] === 0) continue;\n    for (let v = 0; v < n; v++) {\n      if (mask & (1 << v)) continue;\n      if ((need[v] & mask) === need[v]) dp[mask | (1 << v)] += dp[mask];\n    }\n  }\n  return dp[full];\n}\n",
        ts: "function countTopologicalOrders(n: number, edges: number[][]): number {\n  const need = new Array(n).fill(0);\n  for (const [u, v] of edges) need[v] |= (1 << u);\n  const full = (1 << n) - 1;\n  const dp = new Array(1 << n).fill(0);\n  dp[0] = 1;\n  for (let mask = 0; mask <= full; mask++) {\n    if (dp[mask] === 0) continue;\n    for (let v = 0; v < n; v++) {\n      if (mask & (1 << v)) continue;\n      if ((need[v] & mask) === need[v]) dp[mask | (1 << v)] += dp[mask];\n    }\n  }\n  return dp[full];\n}\n",
        time: "O(2ⁿ · n)",
        space: "O(2ⁿ)",
      },
      {
        label: "Backtracking",
        approach: "Recursively place any currently-available node and count leaves.",
        js: "function countTopologicalOrders(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const used = new Array(n).fill(false);\n  let count = 0;\n  const bt = (placed) => {\n    if (placed === n) { count++; return; }\n    for (let i = 0; i < n; i++) {\n      if (!used[i] && indeg[i] === 0) {\n        used[i] = true;\n        for (const v of adj[i]) indeg[v]--;\n        bt(placed + 1);\n        used[i] = false;\n        for (const v of adj[i]) indeg[v]++;\n      }\n    }\n  };\n  bt(0);\n  return count;\n}\n",
        ts: "function countTopologicalOrders(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const used = new Array(n).fill(false);\n  let count = 0;\n  const bt = (placed: number): void => {\n    if (placed === n) { count++; return; }\n    for (let i = 0; i < n; i++) {\n      if (!used[i] && indeg[i] === 0) {\n        used[i] = true;\n        for (const v of adj[i]) indeg[v]--;\n        bt(placed + 1);\n        used[i] = false;\n        for (const v of adj[i]) indeg[v]++;\n      }\n    }\n  };\n  bt(0);\n  return count;\n}\n",
        time: "O(n · n!)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "ts-max-parallel",
    slug: "max-parallel-courses",
    title: "Widest Semester",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Taking every ready course each semester (as in Parallel Courses), return the largest number of courses taken in any single semester. Return -1 if the courses can't all be finished.",
    examples: [
      { input: "4, [[0,1],[0,2],[1,3],[2,3]]", output: "2" },
      { input: "3, []", output: "3" },
      { input: "1, []", output: "1" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "widestSemester",
    starter: {
      js: "function widestSemester(n, edges) {\n  // Largest number of courses in one semester; -1 if impossible.\n}\n",
      ts: "function widestSemester(n: number, edges: number[][]): number {\n  // Largest number of courses in one semester; -1 if impossible.\n  return 0;\n}\n",
    },
    visible: [
      { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: 2 },
      { args: [3, []], expected: 3 },
      { args: [1, []], expected: 1 },
    ],
    hidden: [
      { args: [5, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]]], expected: 2 },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: -1 },
      { args: [6, [[0, 3], [1, 3], [2, 3], [3, 4], [3, 5]]], expected: 3 },
      { args: [2, [[0, 1]]], expected: 1 },
      { args: [4, [[0, 1], [0, 2], [0, 3]]], expected: 3 },
      { args: [3, []], expected: 3 },
    ],
    hints: [
      "Process the DAG in Kahn waves, one wave per semester.",
      "The answer is the size of the largest wave.",
      "If some course never becomes ready, return -1.",
    ],
    solutions: [
      {
        label: "Kahn by layers",
        approach: "Track the maximum frontier size across the BFS waves.",
        js: "function widestSemester(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  let q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let best = 0, seen = 0;\n  while (q.length) {\n    best = Math.max(best, q.length);\n    const next = [];\n    for (const u of q) { seen++; for (const v of adj[u]) if (--indeg[v] === 0) next.push(v); }\n    q = next;\n  }\n  return seen === n ? best : -1;\n}\n",
        ts: "function widestSemester(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  let q: number[] = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let best = 0, seen = 0;\n  while (q.length) {\n    best = Math.max(best, q.length);\n    const next: number[] = [];\n    for (const u of q) { seen++; for (const v of adj[u]) if (--indeg[v] === 0) next.push(v); }\n    q = next;\n  }\n  return seen === n ? best : -1;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
      {
        label: "Level counting",
        approach: "Assign each node its layer, then count nodes per layer.",
        js: "function widestSemester(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const level = new Array(n).fill(0);\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) { level[i] = 1; q.push(i); }\n  let seen = 0;\n  const counts = new Array(n + 1).fill(0);\n  while (q.length) {\n    const u = q.pop();\n    seen++;\n    counts[level[u]]++;\n    for (const v of adj[u]) { level[v] = Math.max(level[v], level[u] + 1); if (--indeg[v] === 0) q.push(v); }\n  }\n  if (seen !== n) return -1;\n  let best = 0;\n  for (const c of counts) best = Math.max(best, c);\n  return best;\n}\n",
        ts: "function widestSemester(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }\n  const level = new Array(n).fill(0);\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) { level[i] = 1; q.push(i); }\n  let seen = 0;\n  const counts = new Array(n + 1).fill(0);\n  while (q.length) {\n    const u = q.pop();\n    seen++;\n    counts[level[u]]++;\n    for (const v of adj[u]) { level[v] = Math.max(level[v], level[u] + 1); if (--indeg[v] === 0) q.push(v); }\n  }\n  if (seen !== n) return -1;\n  let best = 0;\n  for (const c of counts) best = Math.max(best, c);\n  return best;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
];

export const toposortProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const toposortMcqs: QuizQuestion[] = [
  {
    id: "s6-topo-kahn",
    kind: "mcq",
    prompt: "In Kahn's algorithm, a node becomes ready to output when its:",
    options: [
      "out-degree reaches 0",
      "in-degree reaches 0 (all prerequisites emitted)",
      "label is the smallest remaining",
      "neighbours are all visited",
    ],
    answerIndex: 1,
    explanation:
      "Kahn repeatedly emits nodes whose in-degree has dropped to 0, decrementing their successors' in-degrees.",
  },
  {
    id: "s6-topo-cycle",
    kind: "mcq",
    prompt: "If a topological sort cannot place all n nodes, the graph:",
    options: [
      "is disconnected",
      "contains a directed cycle",
      "has too many edges",
      "must be re-sorted from the other end",
    ],
    answerIndex: 1,
    explanation:
      "Leftover nodes all have positive in-degree because they sit on (or depend on) a cycle, so no valid ordering exists.",
  },
];

export const toposortModule: Module = {
  id: "m-pat-toposort",
  stageId: S,
  title: "Topological Sort",
  kind: "patternModule",
  summary:
    "Ordering the nodes of a DAG so every edge points forward — Kahn's in-degree BFS and DFS post-order, plus cycle detection and layering.",
  lessonSections: [
    {
      heading: "Ordering a dependency graph",
      body: `A **topological sort** of a directed acyclic graph (DAG) lists its nodes so that for every edge \`u -> v\`, \`u\` comes before \`v\`. It answers "in what order can I do these tasks given their prerequisites?" — course schedules, build systems, and dependency resolvers all reduce to it. Throughout this module an edge \`[u, v]\` means **u must come before v**.

There are two standard algorithms:

\`\`\`js
// Kahn's algorithm — BFS on in-degrees
function topo(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  const indeg = new Array(n).fill(0);
  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }
  const q = [];
  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);
  const order = [];
  while (q.length) {
    const u = q.shift();
    order.push(u);
    for (const v of adj[u]) if (--indeg[v] === 0) q.push(v);
  }
  return order.length === n ? order : []; // [] means a cycle
}
\`\`\`

The other is a **DFS post-order**: finish all descendants, push the node, then reverse.`,
    },
    {
      heading: "Cycle detection & layering",
      body: `Topological sort and **cycle detection** are two sides of one coin. If Kahn's algorithm can't emit all \`n\` nodes, the leftovers form or depend on a cycle. With DFS, a **three-color** scheme detects it directly: an edge to a node still on the recursion stack (gray) is a back edge, hence a cycle.

Two useful extensions appear in the drills:

- **Layering** — process the DAG in Kahn "waves." The number of waves is the longest prerequisite chain (minimum semesters); the widest wave is the most tasks doable at once.
- **Longest path / DP on a DAG** — relax edges in topological order (\`dp[v] = max(dp[v], dp[u] + 1)\`) to get longest chains or other path optima in linear time.`,
    },
    {
      heading: "Determinism, cues & pitfalls",
      body: `**Cues:** anything phrased as prerequisites, dependencies, ordering, or "can this all be scheduled." Directed edges plus "before/after" language is the giveaway.

**Determinism note:** a DAG usually has many valid orders. When a unique answer is required, this module asks for the **lexicographically smallest** order (always emit the smallest ready node — a sorted frontier or min-heap) and returns node lists **sorted**, so solutions are reproducible.

**Pitfalls:** forgetting to return \`[]\`/\`-1\` on a cycle; using \`array.shift()\` in a hot loop (fine here, but a real min-heap keeps Kahn near-linear when you need lexicographic order); and mixing up edge direction — decide once that \`[u, v]\` means \`u -> v\` and stick to it. Every drill ships a Kahn/BFS solution and a DFS or DP alternative. Work them easy to hard.`,
    },
  ],
  guidedExampleProblemId: "ts-can-finish",
  drillProblemIds: [
    "ts-can-finish",
    "ts-topo-order",
    "ts-has-cycle",
    "ts-count-sources",
    "ts-min-semesters",
    "ts-longest-chain",
  ],
  testPoolProblemIds: [
    "ts-is-valid-order",
    "ts-eventual-safe-nodes",
    "ts-num-topo-orders",
    "ts-max-parallel",
  ],
  complexityQuestionIds: ["s6-topo-kahn", "s6-topo-cycle"],
  badgeId: "badge-pat-toposort",
  prerequisiteModuleIds: ["m-pat-dp-state"],
};
