import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["union-find"];

/*
 * Graph convention: `n` nodes labeled 0..n-1 and an UNDIRECTED edge list where
 * each edge [u, v] connects u and v. (Where a problem takes an adjacency matrix
 * or an edge list of another shape, the statement says so.)
 */

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "uf-count-components",
    slug: "count-connected-components",
    title: "Number of Connected Components",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Given `n` nodes labeled 0..n-1 and a list of undirected edges, return the number of connected components.",
    examples: [
      { input: "5, [[0,1],[1,2],[3,4]]", output: "2" },
      { input: "5, []", output: "5" },
      { input: "1, []", output: "1" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "countComponents",
    starter: {
      js: "function countComponents(n, edges) {\n  // Number of connected components.\n}\n",
      ts: "function countComponents(n: number, edges: number[][]): number {\n  // Number of connected components.\n  return 0;\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
      { args: [5, []], expected: 5 },
      { args: [1, []], expected: 1 },
    ],
    hidden: [
      { args: [4, [[0, 1], [2, 3]]], expected: 2 },
      { args: [6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]], expected: 1 },
      { args: [3, [[0, 1], [1, 2], [0, 2]]], expected: 1 },
      { args: [4, [[0, 1], [0, 2], [0, 3]]], expected: 1 },
      { args: [2, [[0, 1]]], expected: 1 },
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
    ],
    hints: [
      "Start with n components; each successful union merges two into one.",
      "Union-find with path compression makes each merge near-constant time.",
      "Alternatively, flood-fill each unvisited node with BFS/DFS.",
    ],
    solutions: [
      {
        label: "Union-Find",
        approach: "Union every edge; the surviving root count is the answer.",
        js: "function countComponents(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru !== rv) { parent[ru] = rv; count--; }\n  }\n  return count;\n}\n",
        ts: "function countComponents(n: number, edges: number[][]): number {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru !== rv) { parent[ru] = rv; count--; }\n  }\n  return count;\n}\n",
        time: "O((n + e)·α(n))",
        space: "O(n)",
      },
      {
        label: "BFS flood fill",
        approach: "Count how many BFS sweeps it takes to visit every node.",
        js: "function countComponents(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    count++;\n    const q = [i]; seen[i] = true;\n    while (q.length) { const u = q.pop(); for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n  }\n  return count;\n}\n",
        ts: "function countComponents(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    count++;\n    const q = [i]; seen[i] = true;\n    while (q.length) { const u = q.pop(); for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n  }\n  return count;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "uf-are-connected",
    slug: "are-nodes-connected",
    title: "Are Two Nodes Connected",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given `n` nodes, an undirected edge list, and two nodes `a` and `b`, return whether they are in the same connected component. A node is always connected to itself.",
    examples: [
      { input: "5, [[0,1],[1,2],[3,4]], 0, 2", output: "true" },
      { input: "5, [[0,1],[1,2],[3,4]], 0, 3", output: "false" },
      { input: "4, [], 0, 0", output: "true" },
    ],
    constraints: ["1 <= n <= 2000", "0 <= a, b < n"],
    functionName: "areConnected",
    starter: {
      js: "function areConnected(n, edges, a, b) {\n  // True if a and b are in the same component.\n}\n",
      ts: "function areConnected(n: number, edges: number[][], a: number, b: number): boolean {\n  // True if a and b are in the same component.\n  return false;\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [1, 2], [3, 4]], 0, 2], expected: true },
      { args: [5, [[0, 1], [1, 2], [3, 4]], 0, 3], expected: false },
      { args: [4, [], 0, 0], expected: true },
    ],
    hidden: [
      { args: [4, [[0, 1], [2, 3]], 1, 3], expected: false },
      { args: [3, [[0, 1], [1, 2]], 0, 2], expected: true },
      { args: [6, [[0, 5]], 0, 5], expected: true },
      { args: [2, [[0, 1]], 1, 0], expected: true },
      { args: [4, [[0, 1], [0, 2]], 1, 2], expected: true },
      { args: [5, [[0, 1], [1, 2], [3, 4]], 0, 3], expected: false },
    ],
    hints: [
      "Union all edges, then compare the roots of a and b.",
      "Path compression keeps repeated finds fast.",
      "A BFS/DFS from a that looks for b also works.",
    ],
    solutions: [
      {
        label: "Union-Find",
        approach: "Build the DSU, then check find(a) === find(b).",
        js: "function areConnected(n, edges, a, b) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  for (const [u, v] of edges) { const ru = find(u), rv = find(v); if (ru !== rv) parent[ru] = rv; }\n  return find(a) === find(b);\n}\n",
        ts: "function areConnected(n: number, edges: number[][], a: number, b: number): boolean {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  for (const [u, v] of edges) { const ru = find(u), rv = find(v); if (ru !== rv) parent[ru] = rv; }\n  return find(a) === find(b);\n}\n",
        time: "O((n + e)·α(n))",
        space: "O(n)",
      },
      {
        label: "BFS reachability",
        approach: "Search outward from a and see whether b is reached.",
        js: "function areConnected(n, edges, a, b) {\n  if (a === b) return true;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  const q = [a]; seen[a] = true;\n  while (q.length) {\n    const u = q.pop();\n    for (const w of adj[u]) { if (w === b) return true; if (!seen[w]) { seen[w] = true; q.push(w); } }\n  }\n  return false;\n}\n",
        ts: "function areConnected(n: number, edges: number[][], a: number, b: number): boolean {\n  if (a === b) return true;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  const q = [a]; seen[a] = true;\n  while (q.length) {\n    const u = q.pop();\n    for (const w of adj[u]) { if (w === b) return true; if (!seen[w]) { seen[w] = true; q.push(w); } }\n  }\n  return false;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "uf-has-cycle",
    slug: "undirected-cycle",
    title: "Detect a Cycle in an Undirected Graph",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given `n` nodes and an undirected edge list, return whether the graph contains a cycle (a duplicate edge between the same pair also forms a cycle).",
    examples: [
      { input: "3, [[0,1],[1,2],[0,2]]", output: "true" },
      { input: "3, [[0,1],[1,2]]", output: "false" },
      { input: "1, []", output: "false" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "hasUndirectedCycle",
    starter: {
      js: "function hasUndirectedCycle(n, edges) {\n  // True if the undirected graph has a cycle.\n}\n",
      ts: "function hasUndirectedCycle(n: number, edges: number[][]): boolean {\n  // True if the undirected graph has a cycle.\n  return false;\n}\n",
    },
    visible: [
      { args: [3, [[0, 1], [1, 2], [0, 2]]], expected: true },
      { args: [3, [[0, 1], [1, 2]]], expected: false },
      { args: [1, []], expected: false },
    ],
    hidden: [
      { args: [4, [[0, 1], [2, 3]]], expected: false },
      { args: [4, [[0, 1], [1, 2], [2, 3], [3, 0]]], expected: true },
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: false },
      { args: [2, [[0, 1], [0, 1]]], expected: true },
      { args: [4, [[0, 1], [1, 2], [2, 0]]], expected: true },
      { args: [3, [[0, 1], [1, 2]]], expected: false },
    ],
    hints: [
      "In union-find, an edge whose endpoints already share a root closes a cycle.",
      "So the first union that returns 'already joined' means a cycle exists.",
      "Equivalently, a cycle exists iff edges > n − components.",
    ],
    solutions: [
      {
        label: "Union-Find",
        approach: "A union that finds both ends already merged reveals a cycle.",
        js: "function hasUndirectedCycle(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) return true;\n    parent[ru] = rv;\n  }\n  return false;\n}\n",
        ts: "function hasUndirectedCycle(n: number, edges: number[][]): boolean {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) return true;\n    parent[ru] = rv;\n  }\n  return false;\n}\n",
        time: "O((n + e)·α(n))",
        space: "O(n)",
      },
      {
        label: "Edge count vs. spanning forest",
        approach: "A forest has n − components edges; any extra edge is a cycle.",
        js: "function hasUndirectedCycle(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let comps = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    comps++;\n    const q = [i]; seen[i] = true;\n    while (q.length) { const u = q.pop(); for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n  }\n  return edges.length > n - comps;\n}\n",
        ts: "function hasUndirectedCycle(n: number, edges: number[][]): boolean {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let comps = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    comps++;\n    const q = [i]; seen[i] = true;\n    while (q.length) { const u = q.pop(); for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n  }\n  return edges.length > n - comps;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "uf-largest-component",
    slug: "largest-component-size",
    title: "Largest Component Size",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given `n` nodes and an undirected edge list, return the number of nodes in the largest connected component.",
    examples: [
      { input: "5, [[0,1],[1,2],[3,4]]", output: "3" },
      { input: "5, []", output: "1" },
      { input: "1, []", output: "1" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "largestComponent",
    starter: {
      js: "function largestComponent(n, edges) {\n  // Size of the largest connected component.\n}\n",
      ts: "function largestComponent(n: number, edges: number[][]): number {\n  // Size of the largest connected component.\n  return 0;\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 3 },
      { args: [5, []], expected: 1 },
      { args: [1, []], expected: 1 },
    ],
    hidden: [
      { args: [6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]], expected: 6 },
      { args: [4, [[0, 1], [2, 3]]], expected: 2 },
      { args: [3, [[0, 1], [1, 2], [0, 2]]], expected: 3 },
      { args: [4, [[0, 1], [0, 2], [0, 3]]], expected: 4 },
      { args: [2, [[0, 1]]], expected: 2 },
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 3 },
    ],
    hints: [
      "Track a size array alongside the parent array and union by size.",
      "After unioning, the largest size seen is the answer.",
      "Or tally the root of every node and take the biggest bucket.",
    ],
    solutions: [
      {
        label: "Union by size",
        approach: "Merge roots, adding sizes, and track the maximum.",
        js: "function largestComponent(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const size = new Array(n).fill(1);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let best = 1;\n  for (const [u, v] of edges) {\n    let ru = find(u), rv = find(v);\n    if (ru === rv) continue;\n    if (size[ru] < size[rv]) { const t = ru; ru = rv; rv = t; }\n    parent[rv] = ru; size[ru] += size[rv];\n    best = Math.max(best, size[ru]);\n  }\n  return best;\n}\n",
        ts: "function largestComponent(n: number, edges: number[][]): number {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const size = new Array(n).fill(1);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let best = 1;\n  for (const [u, v] of edges) {\n    let ru = find(u), rv = find(v);\n    if (ru === rv) continue;\n    if (size[ru] < size[rv]) { const t = ru; ru = rv; rv = t; }\n    parent[rv] = ru; size[ru] += size[rv];\n    best = Math.max(best, size[ru]);\n  }\n  return best;\n}\n",
        time: "O((n + e)·α(n))",
        space: "O(n)",
      },
      {
        label: "BFS component sizes",
        approach: "Measure each flood-filled component and keep the largest.",
        js: "function largestComponent(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let best = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    let size = 0;\n    const q = [i]; seen[i] = true;\n    while (q.length) { const u = q.pop(); size++; for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n    best = Math.max(best, size);\n  }\n  return best;\n}\n",
        ts: "function largestComponent(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let best = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    let size = 0;\n    const q = [i]; seen[i] = true;\n    while (q.length) { const u = q.pop(); size++; for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n    best = Math.max(best, size);\n  }\n  return best;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "uf-redundant-connection",
    slug: "redundant-connection",
    title: "Redundant Connection",
    difficulty: "medium",
    patternIds: P,
    statement:
      "You start with a tree of `n` nodes (labeled 0..n-1) and one extra undirected edge was added, creating exactly one cycle. Given the edges in order, return the edge that can be removed so the result is a tree — if several qualify, return the one appearing last in the input.",
    examples: [
      { input: "[[0,1],[0,2],[1,2]]", output: "[1,2]" },
      { input: "[[0,1],[1,2],[2,3],[3,0]]", output: "[3,0]" },
      { input: "[[0,1],[1,2],[0,2],[2,3]]", output: "[0,2]" },
    ],
    constraints: ["3 <= edges.length <= 1000", "exactly one extra edge"],
    functionName: "redundantConnection",
    starter: {
      js: "function redundantConnection(edges) {\n  // The last edge that closes the single cycle.\n}\n",
      ts: "function redundantConnection(edges: number[][]): number[] {\n  // The last edge that closes the single cycle.\n  return [];\n}\n",
    },
    visible: [
      { args: [[[0, 1], [0, 2], [1, 2]]], expected: [1, 2] },
      { args: [[[0, 1], [1, 2], [2, 3], [3, 0]]], expected: [3, 0] },
      { args: [[[0, 1], [1, 2], [0, 2], [2, 3]]], expected: [0, 2] },
    ],
    hidden: [
      { args: [[[1, 2], [1, 3], [2, 3]]], expected: [2, 3] },
      { args: [[[0, 1], [2, 3], [1, 2], [0, 3]]], expected: [0, 3] },
      { args: [[[0, 1], [0, 2], [0, 3], [1, 2]]], expected: [1, 2] },
      { args: [[[3, 4], [1, 2], [2, 3], [4, 1]]], expected: [4, 1] },
      { args: [[[0, 1], [1, 2], [2, 0]]], expected: [2, 0] },
      { args: [[[0, 1], [0, 2], [1, 2]]], expected: [1, 2] },
    ],
    hints: [
      "Add edges one by one; the first edge joining two already-connected nodes is the answer.",
      "Because there's exactly one extra edge, that first conflict is also the last-listed removable edge.",
      "Size the DSU to the largest label seen.",
    ],
    solutions: [
      {
        label: "Union-Find",
        approach: "Return the first edge whose endpoints are already connected.",
        js: "function redundantConnection(edges) {\n  let n = 0;\n  for (const [u, v] of edges) n = Math.max(n, u, v);\n  const parent = Array.from({ length: n + 1 }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) return [u, v];\n    parent[ru] = rv;\n  }\n  return [];\n}\n",
        ts: "function redundantConnection(edges: number[][]): number[] {\n  let n = 0;\n  for (const [u, v] of edges) n = Math.max(n, u, v);\n  const parent = Array.from({ length: n + 1 }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) return [u, v];\n    parent[ru] = rv;\n  }\n  return [];\n}\n",
        time: "O(n·α(n))",
        space: "O(n)",
      },
      {
        label: "Incremental BFS reachability",
        approach: "Before adding an edge, BFS the current graph; if the ends already connect, it's redundant.",
        js: "function redundantConnection(edges) {\n  let n = 0;\n  for (const [u, v] of edges) n = Math.max(n, u, v);\n  const adj = Array.from({ length: n + 1 }, () => []);\n  const reach = (a, b) => {\n    if (a === b) return true;\n    const seen = new Set([a]); const q = [a];\n    while (q.length) { const x = q.pop(); for (const y of adj[x]) { if (y === b) return true; if (!seen.has(y)) { seen.add(y); q.push(y); } } }\n    return false;\n  };\n  for (const [u, v] of edges) {\n    if (reach(u, v)) return [u, v];\n    adj[u].push(v); adj[v].push(u);\n  }\n  return [];\n}\n",
        ts: "function redundantConnection(edges: number[][]): number[] {\n  let n = 0;\n  for (const [u, v] of edges) n = Math.max(n, u, v);\n  const adj = Array.from({ length: n + 1 }, () => []);\n  const reach = (a: number, b: number): boolean => {\n    if (a === b) return true;\n    const seen = new Set([a]); const q = [a];\n    while (q.length) { const x = q.pop(); for (const y of adj[x]) { if (y === b) return true; if (!seen.has(y)) { seen.add(y); q.push(y); } } }\n    return false;\n  };\n  for (const [u, v] of edges) {\n    if (reach(u, v)) return [u, v];\n    adj[u].push(v); adj[v].push(u);\n  }\n  return [];\n}\n",
        time: "O(e·(n + e))",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "uf-make-connected",
    slug: "make-network-connected",
    title: "Make Network Connected",
    difficulty: "hard",
    patternIds: P,
    statement:
      "You have `n` computers (0..n-1) and undirected cables. You may unplug any cable and reuse it to connect two disconnected computers. Return the minimum number of moves to connect all computers, or -1 if there aren't enough cables.",
    examples: [
      { input: "4, [[0,1],[0,2],[1,2]]", output: "1" },
      { input: "6, [[0,1],[0,2],[0,3],[1,2],[1,3]]", output: "2" },
      { input: "6, [[0,1],[0,2],[0,3],[1,2]]", output: "-1" },
    ],
    constraints: ["1 <= n <= 100000"],
    functionName: "makeConnected",
    starter: {
      js: "function makeConnected(n, edges) {\n  // Min cable moves to connect all, or -1.\n}\n",
      ts: "function makeConnected(n: number, edges: number[][]): number {\n  // Min cable moves to connect all, or -1.\n  return 0;\n}\n",
    },
    visible: [
      { args: [4, [[0, 1], [0, 2], [1, 2]]], expected: 1 },
      { args: [6, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]]], expected: 2 },
      { args: [6, [[0, 1], [0, 2], [0, 3], [1, 2]]], expected: -1 },
    ],
    hidden: [
      { args: [3, [[0, 1]]], expected: -1 },
      { args: [4, []], expected: -1 },
      { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 0 },
      { args: [3, [[0, 1], [1, 2], [0, 2]]], expected: 0 },
      { args: [2, [[0, 1]]], expected: 0 },
      { args: [4, [[0, 1], [0, 2], [1, 2]]], expected: 1 },
    ],
    hints: [
      "Connecting n nodes needs at least n − 1 cables; fewer means -1.",
      "Every redundant (cycle-closing) cable can be moved to bridge a component.",
      "The answer is simply components − 1 when enough cables exist.",
    ],
    solutions: [
      {
        label: "Union-Find (components − 1)",
        approach: "With ≥ n−1 cables, moves needed equal the number of gaps between components.",
        js: "function makeConnected(n, edges) {\n  if (edges.length < n - 1) return -1;\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  for (const [u, v] of edges) { const ru = find(u), rv = find(v); if (ru !== rv) { parent[ru] = rv; count--; } }\n  return count - 1;\n}\n",
        ts: "function makeConnected(n: number, edges: number[][]): number {\n  if (edges.length < n - 1) return -1;\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  for (const [u, v] of edges) { const ru = find(u), rv = find(v); if (ru !== rv) { parent[ru] = rv; count--; } }\n  return count - 1;\n}\n",
        time: "O((n + e)·α(n))",
        space: "O(n)",
      },
      {
        label: "BFS components − 1",
        approach: "Count components by flood fill; connecting them costs one move each.",
        js: "function makeConnected(n, edges) {\n  if (edges.length < n - 1) return -1;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let comps = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    comps++;\n    const q = [i]; seen[i] = true;\n    while (q.length) { const u = q.pop(); for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n  }\n  return comps - 1;\n}\n",
        ts: "function makeConnected(n: number, edges: number[][]): number {\n  if (edges.length < n - 1) return -1;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let comps = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    comps++;\n    const q = [i]; seen[i] = true;\n    while (q.length) { const u = q.pop(); for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n  }\n  return comps - 1;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "uf-num-provinces",
    slug: "number-of-provinces",
    title: "Number of Provinces",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an `n` × `n` symmetric matrix where `isConnected[i][j] = 1` means cities `i` and `j` are directly connected, return the number of provinces (groups of directly or indirectly connected cities).",
    examples: [
      { input: "[[1,1,0],[1,1,0],[0,0,1]]", output: "2" },
      { input: "[[1,0,0],[0,1,0],[0,0,1]]", output: "3" },
      { input: "[[1,1,1],[1,1,1],[1,1,1]]", output: "1" },
    ],
    constraints: ["1 <= n <= 200", "matrix is symmetric with 1s on the diagonal"],
    functionName: "numProvinces",
    starter: {
      js: "function numProvinces(isConnected) {\n  // Number of provinces from the adjacency matrix.\n}\n",
      ts: "function numProvinces(isConnected: number[][]): number {\n  // Number of provinces from the adjacency matrix.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[1, 1, 0], [1, 1, 0], [0, 0, 1]]], expected: 2 },
      { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]], expected: 3 },
      { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 1 },
    ],
    hidden: [
      { args: [[[1]]], expected: 1 },
      { args: [[[1, 0], [0, 1]]], expected: 2 },
      { args: [[[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]]], expected: 2 },
      { args: [[[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]], expected: 2 },
      { args: [[[1, 1], [1, 1]]], expected: 1 },
      { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]], expected: 3 },
    ],
    hints: [
      "Union city i with city j whenever isConnected[i][j] is 1.",
      "Only the upper triangle needs scanning since the matrix is symmetric.",
      "Count the distinct roots, or flood-fill the matrix.",
    ],
    solutions: [
      {
        label: "Union-Find over the matrix",
        approach: "Union connected pairs; the leftover root count is the province total.",
        js: "function numProvinces(isConnected) {\n  const n = isConnected.length;\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  for (let i = 0; i < n; i++)\n    for (let j = i + 1; j < n; j++)\n      if (isConnected[i][j] === 1) { const ri = find(i), rj = find(j); if (ri !== rj) { parent[ri] = rj; count--; } }\n  return count;\n}\n",
        ts: "function numProvinces(isConnected: number[][]): number {\n  const n = isConnected.length;\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  for (let i = 0; i < n; i++)\n    for (let j = i + 1; j < n; j++)\n      if (isConnected[i][j] === 1) { const ri = find(i), rj = find(j); if (ri !== rj) { parent[ri] = rj; count--; } }\n  return count;\n}\n",
        time: "O(n²·α(n))",
        space: "O(n)",
      },
      {
        label: "DFS flood fill",
        approach: "Depth-first mark each province, counting how many starts it takes.",
        js: "function numProvinces(isConnected) {\n  const n = isConnected.length;\n  const seen = new Array(n).fill(false);\n  const dfs = (u) => { seen[u] = true; for (let v = 0; v < n; v++) if (isConnected[u][v] === 1 && !seen[v]) dfs(v); };\n  let count = 0;\n  for (let i = 0; i < n; i++) if (!seen[i]) { count++; dfs(i); }\n  return count;\n}\n",
        ts: "function numProvinces(isConnected: number[][]): number {\n  const n = isConnected.length;\n  const seen = new Array(n).fill(false);\n  const dfs = (u: number): void => { seen[u] = true; for (let v = 0; v < n; v++) if (isConnected[u][v] === 1 && !seen[v]) dfs(v); };\n  let count = 0;\n  for (let i = 0; i < n; i++) if (!seen[i]) { count++; dfs(i); }\n  return count;\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "uf-count-connected-pairs",
    slug: "count-connected-pairs",
    title: "Count Connected Pairs",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given `n` nodes and an undirected edge list, return the number of unordered pairs `(a, b)` with `a < b` that lie in the same connected component.",
    examples: [
      { input: "5, [[0,1],[1,2],[3,4]]", output: "4" },
      { input: "4, []", output: "0" },
      { input: "1, []", output: "0" },
    ],
    constraints: ["1 <= n <= 100000"],
    functionName: "countConnectedPairs",
    starter: {
      js: "function countConnectedPairs(n, edges) {\n  // Number of connected node pairs.\n}\n",
      ts: "function countConnectedPairs(n: number, edges: number[][]): number {\n  // Number of connected node pairs.\n  return 0;\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 4 },
      { args: [4, []], expected: 0 },
      { args: [1, []], expected: 0 },
    ],
    hidden: [
      { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: 6 },
      { args: [3, [[0, 1], [1, 2], [0, 2]]], expected: 3 },
      { args: [6, [[0, 1], [2, 3], [4, 5]]], expected: 3 },
      { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 10 },
      { args: [2, [[0, 1]]], expected: 1 },
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 4 },
    ],
    hints: [
      "Within a component of size s there are s·(s−1)/2 connected pairs.",
      "Union everything, tally the size of each component, then sum the pair counts.",
      "Use union by size so each root already knows its component's size.",
    ],
    solutions: [
      {
        label: "Union-Find + pair counts",
        approach: "Sum s·(s−1)/2 over the component sizes.",
        js: "function countConnectedPairs(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const size = new Array(n).fill(1);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  for (const [u, v] of edges) {\n    let ru = find(u), rv = find(v);\n    if (ru === rv) continue;\n    if (size[ru] < size[rv]) { const t = ru; ru = rv; rv = t; }\n    parent[rv] = ru; size[ru] += size[rv];\n  }\n  let total = 0;\n  for (let i = 0; i < n; i++) if (find(i) === i) total += size[i] * (size[i] - 1) / 2;\n  return total;\n}\n",
        ts: "function countConnectedPairs(n: number, edges: number[][]): number {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const size = new Array(n).fill(1);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  for (const [u, v] of edges) {\n    let ru = find(u), rv = find(v);\n    if (ru === rv) continue;\n    if (size[ru] < size[rv]) { const t = ru; ru = rv; rv = t; }\n    parent[rv] = ru; size[ru] += size[rv];\n  }\n  let total = 0;\n  for (let i = 0; i < n; i++) if (find(i) === i) total += size[i] * (size[i] - 1) / 2;\n  return total;\n}\n",
        time: "O((n + e)·α(n))",
        space: "O(n)",
      },
      {
        label: "BFS component sizes",
        approach: "Flood fill each component and add s·(s−1)/2.",
        js: "function countConnectedPairs(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let total = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    let s = 0;\n    const q = [i]; seen[i] = true;\n    while (q.length) { const u = q.pop(); s++; for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n    total += s * (s - 1) / 2;\n  }\n  return total;\n}\n",
        ts: "function countConnectedPairs(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let total = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    let s = 0;\n    const q = [i]; seen[i] = true;\n    while (q.length) { const u = q.pop(); s++; for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n    total += s * (s - 1) / 2;\n  }\n  return total;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "uf-valid-tree",
    slug: "graph-valid-tree",
    title: "Graph Valid Tree",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given `n` nodes and an undirected edge list, return whether the graph forms a valid tree: it must be fully connected and contain no cycle.",
    examples: [
      { input: "5, [[0,1],[0,2],[0,3],[1,4]]", output: "true" },
      { input: "5, [[0,1],[1,2],[2,3],[1,3],[1,4]]", output: "false" },
      { input: "4, [[0,1],[2,3]]", output: "false" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "validTree",
    starter: {
      js: "function validTree(n, edges) {\n  // True if the graph is a single acyclic connected tree.\n}\n",
      ts: "function validTree(n: number, edges: number[][]): boolean {\n  // True if the graph is a single acyclic connected tree.\n  return false;\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [0, 2], [0, 3], [1, 4]]], expected: true },
      { args: [5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]], expected: false },
      { args: [4, [[0, 1], [2, 3]]], expected: false },
    ],
    hidden: [
      { args: [1, []], expected: true },
      { args: [2, [[0, 1]]], expected: true },
      { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: false },
      { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: true },
      { args: [3, [[0, 1]]], expected: false },
      { args: [4, [[0, 1], [2, 3]]], expected: false },
    ],
    hints: [
      "A tree on n nodes has exactly n − 1 edges — check that first.",
      "With n − 1 edges, the graph is a tree iff unioning never finds a cycle.",
      "Equivalently: n − 1 edges and a single component.",
    ],
    solutions: [
      {
        label: "Union-Find",
        approach: "Require n − 1 edges and no cycle-closing union.",
        js: "function validTree(n, edges) {\n  if (edges.length !== n - 1) return false;\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) return false;\n    parent[ru] = rv; count--;\n  }\n  return count === 1;\n}\n",
        ts: "function validTree(n: number, edges: number[][]): boolean {\n  if (edges.length !== n - 1) return false;\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) return false;\n    parent[ru] = rv; count--;\n  }\n  return count === 1;\n}\n",
        time: "O((n + e)·α(n))",
        space: "O(n)",
      },
      {
        label: "Edge count + BFS connectivity",
        approach: "Exactly n − 1 edges and one connected component means a tree.",
        js: "function validTree(n, edges) {\n  if (edges.length !== n - 1) return false;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  const q = [0]; seen[0] = true; let visited = 1;\n  while (q.length) { const u = q.pop(); for (const w of adj[u]) if (!seen[w]) { seen[w] = true; visited++; q.push(w); } }\n  return visited === n;\n}\n",
        ts: "function validTree(n: number, edges: number[][]): boolean {\n  if (edges.length !== n - 1) return false;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  const q = [0]; seen[0] = true; let visited = 1;\n  while (q.length) { const u = q.pop(); for (const w of adj[u]) if (!seen[w]) { seen[w] = true; visited++; q.push(w); } }\n  return visited === n;\n}\n",
        time: "O(n + e)",
        space: "O(n + e)",
      },
    ],
  },
  {
    id: "uf-count-redundant",
    slug: "count-redundant-edges",
    title: "Count Redundant Edges",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given `n` nodes and an undirected edge list (which may contain cycles and multi-edges), return how many edges are redundant — that is, how many could be removed without changing which nodes are connected.",
    examples: [
      { input: "3, [[0,1],[1,2],[0,2]]", output: "1" },
      { input: "3, [[0,1],[1,2]]", output: "0" },
      { input: "4, [[0,1],[1,2],[2,3],[3,0]]", output: "1" },
    ],
    constraints: ["1 <= n <= 2000"],
    functionName: "countRedundantEdges",
    starter: {
      js: "function countRedundantEdges(n, edges) {\n  // Number of edges that close a cycle.\n}\n",
      ts: "function countRedundantEdges(n: number, edges: number[][]): number {\n  // Number of edges that close a cycle.\n  return 0;\n}\n",
    },
    visible: [
      { args: [3, [[0, 1], [1, 2], [0, 2]]], expected: 1 },
      { args: [3, [[0, 1], [1, 2]]], expected: 0 },
      { args: [4, [[0, 1], [1, 2], [2, 3], [3, 0]]], expected: 1 },
    ],
    hidden: [
      { args: [1, []], expected: 0 },
      { args: [5, [[0, 1], [1, 2], [0, 2], [3, 4]]], expected: 1 },
      { args: [4, [[0, 1], [2, 3]]], expected: 0 },
      { args: [2, [[0, 1], [0, 1]]], expected: 1 },
      { args: [6, [[0, 1], [1, 2], [2, 0], [3, 4], [4, 5], [5, 3]]], expected: 2 },
      { args: [3, [[0, 1], [1, 2]]], expected: 0 },
    ],
    hints: [
      "An edge is redundant exactly when its endpoints are already connected.",
      "Count how many unions fail because both ends share a root.",
      "Equivalently: edges − (n − components).",
    ],
    solutions: [
      {
        label: "Union-Find",
        approach: "Tally the unions that find both endpoints already merged.",
        js: "function countRedundantEdges(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let extra = 0;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) extra++;\n    else parent[ru] = rv;\n  }\n  return extra;\n}\n",
        ts: "function countRedundantEdges(n: number, edges: number[][]): number {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let extra = 0;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) extra++;\n    else parent[ru] = rv;\n  }\n  return extra;\n}\n",
        time: "O((n + e)·α(n))",
        space: "O(n)",
      },
      {
        label: "Edges minus spanning forest",
        approach: "A spanning forest uses n − components edges; the rest are redundant.",
        js: "function countRedundantEdges(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let comps = n;\n  for (const [u, v] of edges) { const ru = find(u), rv = find(v); if (ru !== rv) { parent[ru] = rv; comps--; } }\n  return edges.length - (n - comps);\n}\n",
        ts: "function countRedundantEdges(n: number, edges: number[][]): number {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let comps = n;\n  for (const [u, v] of edges) { const ru = find(u), rv = find(v); if (ru !== rv) { parent[ru] = rv; comps--; } }\n  return edges.length - (n - comps);\n}\n",
        time: "O((n + e)·α(n))",
        space: "O(n)",
      },
    ],
  },
];

export const unionFindProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const unionFindMcqs: QuizQuestion[] = [
  {
    id: "s6-uf-amortized",
    kind: "mcq",
    prompt: "With path compression and union by size/rank, each union-find operation costs (amortized):",
    options: [
      "O(log n)",
      "nearly O(1) — the inverse-Ackermann α(n)",
      "O(n)",
      "O(√n)",
    ],
    answerIndex: 1,
    explanation:
      "The two heuristics together give an inverse-Ackermann amortized bound, which is effectively constant.",
  },
  {
    id: "s6-uf-cycle",
    kind: "mcq",
    prompt: "While building a graph edge by edge, a union whose two endpoints already share a root means:",
    options: [
      "the graph is disconnected",
      "that edge closes a cycle",
      "the node labels are invalid",
      "the graph is bipartite",
    ],
    answerIndex: 1,
    explanation:
      "If both endpoints are already in the same set, adding the edge creates a redundant path — a cycle.",
  },
];

export const unionFindModule: Module = {
  id: "m-pat-union-find",
  stageId: S,
  title: "Union-Find (Disjoint Set Union)",
  kind: "patternModule",
  summary:
    "Maintaining a partition under merges — connectivity, cycle detection, and component sizes in near-constant time per operation.",
  lessonSections: [
    {
      heading: "The disjoint-set structure",
      body: `**Union-Find** (or Disjoint Set Union, DSU) maintains a collection of elements split into disjoint sets and supports two operations: **find(x)** returns a canonical representative of x's set, and **union(a, b)** merges the two sets. It's the go-to tool for dynamic connectivity — "are these connected?", "how many groups?", "does adding this edge make a cycle?".

\`\`\`js
const parent = Array.from({ length: n }, (_, i) => i);
function find(x) {                 // with path compression
  while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
  return x;
}
function union(a, b) {
  const ra = find(a), rb = find(b);
  if (ra === rb) return false;     // already together → this edge is a cycle
  parent[ra] = rb;
  return true;
}
\`\`\`

Two heuristics make it fast: **path compression** (flatten the tree during find) and **union by size/rank** (attach the smaller tree under the larger). Together, every operation is amortized **α(n)** — inverse Ackermann, effectively constant.`,
    },
    {
      heading: "What it buys you",
      body: `Once you can merge sets cheaply, a lot of problems collapse to bookkeeping:

- **Connectivity / components** — union every edge, then count distinct roots or query two roots.
- **Cycle detection (undirected)** — an edge whose endpoints already share a root closes a cycle. This powers *redundant connection* and Kruskal's MST.
- **Component sizes** — keep a \`size[root]\` array to answer "largest component" or "count connected pairs" instantly.
- **Counting merges** — the number of successful unions is \`n − components\`; the rest of the edges are redundant.

Many of these can also be solved with BFS/DFS flood fill — the drills pair a DSU solution with a traversal one so you can see both.`,
    },
    {
      heading: "Recognition cues & pitfalls",
      body: `**Cues:** "connected," "groups/provinces/islands," "merge," "same set," "redundant edge," or an offline sequence of unions. If the graph only grows (edges get added, never removed), DSU is almost always the cleanest tool.

**Pitfalls:** forgetting path compression or union-by-size and getting \`O(n)\` finds; sizing the parent array wrong (size it to the largest label + 1 when nodes are implied by the edges); and treating DSU as if it supported deletion — plain DSU only **merges**, it can't split a set. For directed-cycle detection use DFS colors or Kahn (previous module), **not** undirected DSU. Every drill ships a union-find solution and a traversal alternative — compare them, and work easy to hard.`,
    },
  ],
  guidedExampleProblemId: "uf-count-components",
  drillProblemIds: [
    "uf-count-components",
    "uf-are-connected",
    "uf-has-cycle",
    "uf-largest-component",
    "uf-redundant-connection",
    "uf-make-connected",
  ],
  testPoolProblemIds: [
    "uf-num-provinces",
    "uf-count-connected-pairs",
    "uf-valid-tree",
    "uf-count-redundant",
  ],
  complexityQuestionIds: ["s6-uf-amortized", "s6-uf-cycle"],
  badgeId: "badge-pat-union-find",
  prerequisiteModuleIds: ["m-pat-toposort"],
};
