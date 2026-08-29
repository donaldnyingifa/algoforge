(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/stage6/shortestpath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shortestPathMcqs",
    ()=>shortestPathMcqs,
    "shortestPathModule",
    ()=>shortestPathModule,
    "shortestPathProblems",
    ()=>shortestPathProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/shared/heap.ts [app-client] (ecmascript)");
;
;
const S = "dsa-s6";
const P = [
    "shortest-path"
];
/*
 * Graph convention: `n` nodes 0..n-1 and a WEIGHTED edge list where each edge is
 * [u, v, w] meaning a directed edge u -> v of weight w (unless a problem says the
 * edges are undirected). Dijkstra solutions reuse the shared MinHeap by pushing a
 * single encoded number `dist * BASE + node`, since the heap orders by value.
 */ const H = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]; // prepended to Dijkstra solutions so a heap is available
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "sp-dijkstra-dist",
        slug: "dijkstra-shortest-distance",
        title: "Dijkstra Shortest Distance",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a directed graph on `n` nodes with non-negative weighted edges `[u, v, w]`, return the shortest distance from `src` to `dst`, or -1 if `dst` is unreachable.",
        examples: [
            {
                input: "5, [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], 0, 3",
                output: "4"
            },
            {
                input: "3, [[0,1,1],[1,2,1]], 0, 2",
                output: "2"
            },
            {
                input: "3, [[0,1,1]], 0, 2",
                output: "-1"
            }
        ],
        constraints: [
            "1 <= n <= 10000",
            "0 <= w"
        ],
        functionName: "shortestDistance",
        starter: {
            js: "function shortestDistance(n, edges, src, dst) {\n  // Shortest src->dst distance, or -1.\n}\n",
            ts: "function shortestDistance(n: number, edges: number[][], src: number, dst: number): number {\n  // Shortest src->dst distance, or -1.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            4
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            2,
                            1,
                            2
                        ],
                        [
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            3,
                            5
                        ]
                    ],
                    0,
                    3
                ],
                expected: 4
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: 2
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: -1
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    [],
                    0,
                    0
                ],
                expected: 0
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    0,
                    3
                ],
                expected: 3
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            10
                        ],
                        [
                            0,
                            2,
                            3
                        ],
                        [
                            2,
                            1,
                            4
                        ],
                        [
                            1,
                            3,
                            2
                        ],
                        [
                            2,
                            3,
                            8
                        ]
                    ],
                    0,
                    3
                ],
                expected: 9
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            7
                        ]
                    ],
                    0,
                    1
                ],
                expected: 7
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            2
                        ],
                        [
                            0,
                            2,
                            4
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            4,
                            3
                        ],
                        [
                            1,
                            3,
                            7
                        ],
                        [
                            3,
                            4,
                            1
                        ]
                    ],
                    0,
                    4
                ],
                expected: 6
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: -1
            }
        ],
        hints: [
            "Always expand the currently-closest unfinished node — that's Dijkstra.",
            "A min-heap keyed by distance gives you that node in O(log n).",
            "Skip stale heap entries whose stored distance exceeds the settled one."
        ],
        solutions: [
            {
                label: "Dijkstra with a min-heap",
                approach: "Pop the closest node, relax its edges, push improved distances.",
                js: `${H}
function shortestDistance(n, edges, src, dst) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
    }
  }
  return dist[dst] === Infinity ? -1 : dist[dst];
}
`,
                ts: `${H}
function shortestDistance(n: number, edges: number[][], src: number, dst: number): number {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
    }
  }
  return dist[dst] === Infinity ? -1 : dist[dst];
}
`,
                commentedCode: {
                    js: `${H}
function shortestDistance(n, edges, src, dst) {
  // Store each directed edge beside its starting node for efficient relaxation.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  // dist[u] is the best source-to-u distance discovered so far.
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  // Encode (distance, node) as one number so the shared numeric heap orders by distance.
  const BASE = 1000000;
  const heap = new MinHeap();
  // The source has distance zero, so its encoded key is simply src.
  heap.push(src);
  while (heap.size()) {
    // Always expand the queued state with the smallest tentative distance.
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    // A node may have been queued before a better route was found; discard that stale state.
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      // Relax u -> v only when routing through u strictly improves v's best distance.
      if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
    }
  }
  // Infinity means no directed route from src ever reached dst.
  return dist[dst] === Infinity ? -1 : dist[dst];
}
`,
                    ts: `${H}
function shortestDistance(n: number, edges: number[][], src: number, dst: number): number {
  // Store each directed edge beside its starting node for efficient relaxation.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  // dist[u] is the best source-to-u distance discovered so far.
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  // Encode (distance, node) as one number so the shared numeric heap orders by distance.
  const BASE = 1000000;
  const heap = new MinHeap();
  // The source has distance zero, so its encoded key is simply src.
  heap.push(src);
  while (heap.size()) {
    // Always expand the queued state with the smallest tentative distance.
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    // A node may have been queued before a better route was found; discard that stale state.
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      // Relax u -> v only when routing through u strictly improves v's best distance.
      if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
    }
  }
  // Infinity means no directed route from src ever reached dst.
  return dist[dst] === Infinity ? -1 : dist[dst];
}
`
                },
                time: "O((n + e)·log n)",
                space: "O(n + e)"
            },
            {
                label: "Dijkstra, O(n²) selection",
                approach: "Repeatedly scan for the nearest unsettled node — no heap needed.",
                js: "function shortestDistance(n, edges, src, dst) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  return dist[dst] === Infinity ? -1 : dist[dst];\n}\n",
                ts: "function shortestDistance(n: number, edges: number[][], src: number, dst: number): number {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  return dist[dst] === Infinity ? -1 : dist[dst];\n}\n",
                commentedCode: {
                    js: "function shortestDistance(n, edges, src, dst) {\n  // Group outgoing directed edges by their starting node.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // dist holds tentative shortest distances; done marks distances already settled.\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  // Settle at most one node per iteration.\n  for (let it = 0; it < n; it++) {\n    // Scan for the closest node whose shortest distance is not final yet.\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    // No unsettled reachable node remains, so further iterations cannot help.\n    if (u === -1) break;\n    // Non-negative weights make u's currently-smallest distance final.\n    done[u] = true;\n    // Relax every outgoing edge using the newly settled distance to u.\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  // Translate the unreachable sentinel into the problem's required -1.\n  return dist[dst] === Infinity ? -1 : dist[dst];\n}\n",
                    ts: "function shortestDistance(n: number, edges: number[][], src: number, dst: number): number {\n  // Group outgoing directed edges by their starting node.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // dist holds tentative shortest distances; done marks distances already settled.\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  // Settle at most one node per iteration.\n  for (let it = 0; it < n; it++) {\n    // Scan for the closest node whose shortest distance is not final yet.\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    // No unsettled reachable node remains, so further iterations cannot help.\n    if (u === -1) break;\n    // Non-negative weights make u's currently-smallest distance final.\n    done[u] = true;\n    // Relax every outgoing edge using the newly settled distance to u.\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  // Translate the unreachable sentinel into the problem's required -1.\n  return dist[dst] === Infinity ? -1 : dist[dst];\n}\n"
                },
                time: "O(n² + e)",
                space: "O(n + e)"
            }
        ]
    },
    {
        id: "sp-dijkstra-all",
        slug: "dijkstra-all-distances",
        title: "Dijkstra to All Nodes",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a directed graph on `n` nodes with non-negative weighted edges `[u, v, w]` and a source, return an array of the shortest distances from `src` to every node (use -1 for unreachable nodes).",
        examples: [
            {
                input: "5, [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], 0",
                output: "[0,3,1,4,-1]"
            },
            {
                input: "3, [[0,1,1],[1,2,1]], 0",
                output: "[0,1,2]"
            },
            {
                input: "3, [[0,1,1]], 0",
                output: "[0,1,-1]"
            }
        ],
        constraints: [
            "1 <= n <= 10000",
            "0 <= w"
        ],
        functionName: "dijkstraAll",
        starter: {
            js: "function dijkstraAll(n, edges, src) {\n  // Distances from src to all nodes (-1 if unreachable).\n}\n",
            ts: "function dijkstraAll(n: number, edges: number[][], src: number): number[] {\n  // Distances from src to all nodes (-1 if unreachable).\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            4
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            2,
                            1,
                            2
                        ],
                        [
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            3,
                            5
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    3,
                    1,
                    4,
                    -1
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    1,
                    2
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    1,
                    -1
                ]
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    [],
                    0
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            7
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    7
                ]
            },
            {
                args: [
                    4,
                    [
                        [
                            1,
                            0,
                            2
                        ],
                        [
                            1,
                            2,
                            3
                        ]
                    ],
                    1
                ],
                expected: [
                    2,
                    0,
                    3,
                    -1
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            5
                        ],
                        [
                            0,
                            2,
                            2
                        ],
                        [
                            2,
                            1,
                            1
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    3,
                    2
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    1,
                    2
                ]
            }
        ],
        hints: [
            "Run one Dijkstra from the source and read off the whole distance array.",
            "Replace any remaining Infinity with -1 at the end.",
            "The source's own distance is 0."
        ],
        solutions: [
            {
                label: "Dijkstra with a min-heap",
                approach: "Settle every node once, then map unreachable Infinity to -1.",
                js: `${H}
function dijkstraAll(n, edges, src) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  return dist.map((d) => (d === Infinity ? -1 : d));
}
`,
                ts: `${H}
function dijkstraAll(n: number, edges: number[][], src: number): number[] {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  return dist.map((d) => (d === Infinity ? -1 : d));
}
`,
                commentedCode: {
                    js: `${H}
function dijkstraAll(n, edges, src) {
  // Build the directed adjacency list once so each settled node exposes its edges.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  // Infinity represents a node for which no source path has been discovered.
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  // Pack distance first so numeric heap order matches Dijkstra's priority.
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    // Pop and decode the smallest queued (distance, node) state.
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    // Ignore an obsolete entry left behind after u received a shorter distance.
    if (d > dist[u]) continue;
    // A successful relaxation records and schedules the better route to v.
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  // Preserve every finite shortest distance and expose unreachable nodes as -1.
  return dist.map((d) => (d === Infinity ? -1 : d));
}
`,
                    ts: `${H}
function dijkstraAll(n: number, edges: number[][], src: number): number[] {
  // Build the directed adjacency list once so each settled node exposes its edges.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  // Infinity represents a node for which no source path has been discovered.
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  // Pack distance first so numeric heap order matches Dijkstra's priority.
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    // Pop and decode the smallest queued (distance, node) state.
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    // Ignore an obsolete entry left behind after u received a shorter distance.
    if (d > dist[u]) continue;
    // A successful relaxation records and schedules the better route to v.
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  // Preserve every finite shortest distance and expose unreachable nodes as -1.
  return dist.map((d) => (d === Infinity ? -1 : d));
}
`
                },
                time: "O((n + e)·log n)",
                space: "O(n + e)"
            },
            {
                label: "Dijkstra, O(n²) selection",
                approach: "Nearest-node scan variant returning the full distance vector.",
                js: "function dijkstraAll(n, edges, src) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n",
                ts: "function dijkstraAll(n: number, edges: number[][], src: number): number[] {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n",
                commentedCode: {
                    js: "function dijkstraAll(n, edges, src) {\n  // Keep every directed outgoing edge in its source node's adjacency bucket.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // dist is tentative until its node is selected; done records settled nodes.\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  // Each pass settles the nearest remaining reachable node.\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    // Select the minimum tentative distance by scanning instead of using a heap.\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    // If selection fails, every remaining node is unreachable from src.\n    if (u === -1) break;\n    done[u] = true;\n    // Extend the shortest route to u across each outgoing edge when it improves v.\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  // Convert only the still-unreachable entries to the public -1 sentinel.\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n",
                    ts: "function dijkstraAll(n: number, edges: number[][], src: number): number[] {\n  // Keep every directed outgoing edge in its source node's adjacency bucket.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // dist is tentative until its node is selected; done records settled nodes.\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  // Each pass settles the nearest remaining reachable node.\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    // Select the minimum tentative distance by scanning instead of using a heap.\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    // If selection fails, every remaining node is unreachable from src.\n    if (u === -1) break;\n    done[u] = true;\n    // Extend the shortest route to u across each outgoing edge when it improves v.\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  // Convert only the still-unreachable entries to the public -1 sentinel.\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n"
                },
                time: "O(n² + e)",
                space: "O(n + e)"
            }
        ]
    },
    {
        id: "sp-network-delay",
        slug: "network-delay-time",
        title: "Network Delay Time",
        difficulty: "medium",
        patternIds: P,
        statement: "A signal starts at node `src` and travels along directed weighted edges `[u, v, w]` (w = travel time). Return the time for all `n` nodes to receive the signal, or -1 if some node never does.",
        examples: [
            {
                input: "4, [[0,1,1],[0,2,1],[1,3,1],[2,3,1]], 0",
                output: "2"
            },
            {
                input: "3, [[0,1,1],[1,2,1]], 0",
                output: "2"
            },
            {
                input: "3, [[0,1,1]], 0",
                output: "-1"
            }
        ],
        constraints: [
            "1 <= n <= 10000",
            "0 <= w"
        ],
        functionName: "networkDelayTime",
        starter: {
            js: "function networkDelayTime(n, edges, src) {\n  // Time for all nodes to receive the signal, or -1.\n}\n",
            ts: "function networkDelayTime(n: number, edges: number[][], src: number): number {\n  // Time for all nodes to receive the signal, or -1.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    0
                ],
                expected: 2
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    0
                ],
                expected: 2
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ]
                    ],
                    0
                ],
                expected: -1
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    [],
                    0
                ],
                expected: 0
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            5
                        ]
                    ],
                    0
                ],
                expected: 5
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            2
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            4
                        ]
                    ],
                    0
                ],
                expected: 5
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            3
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            2,
                            1,
                            1
                        ]
                    ],
                    0
                ],
                expected: 2
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ],
                        [
                            3,
                            4,
                            1
                        ]
                    ],
                    0
                ],
                expected: 4
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ]
                    ],
                    0
                ],
                expected: -1
            }
        ],
        hints: [
            "The answer is the largest shortest-path distance from the source.",
            "Run Dijkstra, then take the max over all nodes.",
            "If any node stays at Infinity, return -1."
        ],
        solutions: [
            {
                label: "Dijkstra then take the max",
                approach: "Shortest paths give arrival times; the last arrival is the delay.",
                js: `${H}
function networkDelayTime(n, edges, src) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  let ans = 0;
  for (const d of dist) { if (d === Infinity) return -1; ans = Math.max(ans, d); }
  return ans;
}
`,
                ts: `${H}
function networkDelayTime(n: number, edges: number[][], src: number): number {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  let ans = 0;
  for (const d of dist) { if (d === Infinity) return -1; ans = Math.max(ans, d); }
  return ans;
}
`,
                commentedCode: {
                    js: `${H}
function networkDelayTime(n, edges, src) {
  // Directed travel times become outgoing adjacency entries.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  // Each shortest distance is the earliest time that node can receive the signal.
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  // Encode distance in the high part so MinHeap pops the earliest arrival first.
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    // Skip a queued arrival that was superseded by a faster route to u.
    if (d > dist[u]) continue;
    // Propagate the signal through u whenever it improves a neighbor's arrival time.
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  let ans = 0;
  // The network delay is the last finite arrival; one unreachable node makes it impossible.
  for (const d of dist) { if (d === Infinity) return -1; ans = Math.max(ans, d); }
  return ans;
}
`,
                    ts: `${H}
function networkDelayTime(n: number, edges: number[][], src: number): number {
  // Directed travel times become outgoing adjacency entries.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  // Each shortest distance is the earliest time that node can receive the signal.
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  // Encode distance in the high part so MinHeap pops the earliest arrival first.
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    // Skip a queued arrival that was superseded by a faster route to u.
    if (d > dist[u]) continue;
    // Propagate the signal through u whenever it improves a neighbor's arrival time.
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  let ans = 0;
  // The network delay is the last finite arrival; one unreachable node makes it impossible.
  for (const d of dist) { if (d === Infinity) return -1; ans = Math.max(ans, d); }
  return ans;
}
`
                },
                time: "O((n + e)·log n)",
                space: "O(n + e)"
            },
            {
                label: "Dijkstra, O(n²) selection",
                approach: "Nearest-node scan, then the maximum settled distance.",
                js: "function networkDelayTime(n, edges, src) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  let ans = 0;\n  for (const d of dist) { if (d === Infinity) return -1; ans = Math.max(ans, d); }\n  return ans;\n}\n",
                ts: "function networkDelayTime(n: number, edges: number[][], src: number): number {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  let ans = 0;\n  for (const d of dist) { if (d === Infinity) return -1; ans = Math.max(ans, d); }\n  return ans;\n}\n",
                commentedCode: {
                    js: "function networkDelayTime(n, edges, src) {\n  // Build directed adjacency lists of destinations and travel times.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // dist is each node's earliest known arrival; done means that time is final.\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    // Find the unfinished node that currently receives the signal first.\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    // No finite candidate means the remaining nodes cannot receive the signal.\n    if (u === -1) break;\n    done[u] = true;\n    // Forward from u and retain a neighbor's earliest possible arrival.\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  let ans = 0;\n  // Any Infinity makes full delivery impossible; otherwise take the latest arrival.\n  for (const d of dist) { if (d === Infinity) return -1; ans = Math.max(ans, d); }\n  return ans;\n}\n",
                    ts: "function networkDelayTime(n: number, edges: number[][], src: number): number {\n  // Build directed adjacency lists of destinations and travel times.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // dist is each node's earliest known arrival; done means that time is final.\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    // Find the unfinished node that currently receives the signal first.\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    // No finite candidate means the remaining nodes cannot receive the signal.\n    if (u === -1) break;\n    done[u] = true;\n    // Forward from u and retain a neighbor's earliest possible arrival.\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  let ans = 0;\n  // Any Infinity makes full delivery impossible; otherwise take the latest arrival.\n  for (const d of dist) { if (d === Infinity) return -1; ans = Math.max(ans, d); }\n  return ans;\n}\n"
                },
                time: "O(n² + e)",
                space: "O(n + e)"
            }
        ]
    },
    {
        id: "sp-cheapest-flights",
        slug: "cheapest-flights-k-stops",
        title: "Cheapest Flights Within K Stops",
        difficulty: "hard",
        patternIds: P,
        statement: "Given `n` cities and directed weighted flights `[u, v, price]`, return the cheapest price from `src` to `dst` using at most `K` stops (i.e. at most K+1 flights), or -1 if there is no such route.",
        examples: [
            {
                input: "4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1",
                output: "700"
            },
            {
                input: "3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1",
                output: "200"
            },
            {
                input: "3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0",
                output: "500"
            }
        ],
        constraints: [
            "1 <= n <= 1000",
            "0 <= K < n",
            "0 <= price"
        ],
        functionName: "cheapestFlights",
        starter: {
            js: "function cheapestFlights(n, edges, src, dst, K) {\n  // Cheapest price within K stops, or -1.\n}\n",
            ts: "function cheapestFlights(n: number, edges: number[][], src: number, dst: number, K: number): number {\n  // Cheapest price within K stops, or -1.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            100
                        ],
                        [
                            1,
                            2,
                            100
                        ],
                        [
                            2,
                            0,
                            100
                        ],
                        [
                            1,
                            3,
                            600
                        ],
                        [
                            2,
                            3,
                            200
                        ]
                    ],
                    0,
                    3,
                    1
                ],
                expected: 700
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            100
                        ],
                        [
                            1,
                            2,
                            100
                        ],
                        [
                            0,
                            2,
                            500
                        ]
                    ],
                    0,
                    2,
                    1
                ],
                expected: 200
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            100
                        ],
                        [
                            1,
                            2,
                            100
                        ],
                        [
                            0,
                            2,
                            500
                        ]
                    ],
                    0,
                    2,
                    0
                ],
                expected: 500
            }
        ],
        hidden: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    0,
                    3,
                    3
                ],
                expected: 3
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    0,
                    3,
                    1
                ],
                expected: -1
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            50
                        ]
                    ],
                    0,
                    1,
                    0
                ],
                expected: 50
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            5
                        ],
                        [
                            1,
                            2,
                            5
                        ],
                        [
                            0,
                            2,
                            100
                        ],
                        [
                            2,
                            3,
                            5
                        ],
                        [
                            0,
                            4,
                            3
                        ]
                    ],
                    0,
                    3,
                    2
                ],
                expected: 15
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            2
                        ],
                        [
                            1,
                            2,
                            2
                        ]
                    ],
                    0,
                    2,
                    5
                ],
                expected: 4
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            100
                        ],
                        [
                            1,
                            2,
                            100
                        ],
                        [
                            0,
                            2,
                            500
                        ]
                    ],
                    0,
                    2,
                    1
                ],
                expected: 200
            }
        ],
        hints: [
            "Bound the number of edges: at most K+1 relaxation rounds (Bellman-Ford style).",
            "Each round must relax from the PREVIOUS round's distances — copy the array first.",
            "This edge limit is why plain Dijkstra doesn't directly apply."
        ],
        solutions: [
            {
                label: "Bounded Bellman-Ford",
                approach: "Relax all edges K+1 times over a snapshot of the last round.",
                js: "function cheapestFlights(n, edges, src, dst, K) {\n  let dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  for (let i = 0; i <= K; i++) {\n    const nd = dist.slice();\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < nd[v]) nd[v] = dist[u] + w;\n    dist = nd;\n  }\n  return dist[dst] === Infinity ? -1 : dist[dst];\n}\n",
                ts: "function cheapestFlights(n: number, edges: number[][], src: number, dst: number, K: number): number {\n  let dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  for (let i = 0; i <= K; i++) {\n    const nd = dist.slice();\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < nd[v]) nd[v] = dist[u] + w;\n    dist = nd;\n  }\n  return dist[dst] === Infinity ? -1 : dist[dst];\n}\n",
                commentedCode: {
                    js: "function cheapestFlights(n, edges, src, dst, K) {\n  // dist[v] is the cheapest price using no more flights than prior completed rounds.\n  let dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  // K stops permit at most K + 1 flight edges, hence exactly K + 1 relax rounds.\n  for (let i = 0; i <= K; i++) {\n    // Read from dist and write to a snapshot so one round adds at most one flight.\n    const nd = dist.slice();\n    // Extend only reachable routes, keeping the cheapest price allowed this round.\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < nd[v]) nd[v] = dist[u] + w;\n    // The next round may extend routes that use one additional edge.\n    dist = nd;\n  }\n  // No finite bounded-edge route to dst means the requested trip is impossible.\n  return dist[dst] === Infinity ? -1 : dist[dst];\n}\n",
                    ts: "function cheapestFlights(n: number, edges: number[][], src: number, dst: number, K: number): number {\n  // dist[v] is the cheapest price using no more flights than prior completed rounds.\n  let dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  // K stops permit at most K + 1 flight edges, hence exactly K + 1 relax rounds.\n  for (let i = 0; i <= K; i++) {\n    // Read from dist and write to a snapshot so one round adds at most one flight.\n    const nd = dist.slice();\n    // Extend only reachable routes, keeping the cheapest price allowed this round.\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < nd[v]) nd[v] = dist[u] + w;\n    // The next round may extend routes that use one additional edge.\n    dist = nd;\n  }\n  // No finite bounded-edge route to dst means the requested trip is impossible.\n  return dist[dst] === Infinity ? -1 : dist[dst];\n}\n"
                },
                time: "O(K·e)",
                space: "O(n)"
            },
            {
                label: "Memoized DFS on (node, edges left)",
                approach: "Cheapest cost from a node given a remaining edge budget, cached.",
                js: "function cheapestFlights(n, edges, src, dst, K) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const memo = new Map();\n  const go = (u, budget) => {\n    if (u === dst) return 0;\n    if (budget === 0) return Infinity;\n    const key = u * (K + 2) + budget;\n    if (memo.has(key)) return memo.get(key);\n    let best = Infinity;\n    for (const [v, w] of adj[u]) { const sub = go(v, budget - 1); if (sub !== Infinity) best = Math.min(best, w + sub); }\n    memo.set(key, best);\n    return best;\n  };\n  const r = go(src, K + 1);\n  return r === Infinity ? -1 : r;\n}\n",
                ts: "function cheapestFlights(n: number, edges: number[][], src: number, dst: number, K: number): number {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const memo = new Map<number, number>();\n  const go = (u: number, budget: number): number => {\n    if (u === dst) return 0;\n    if (budget === 0) return Infinity;\n    const key = u * (K + 2) + budget;\n    if (memo.has(key)) return memo.get(key);\n    let best = Infinity;\n    for (const [v, w] of adj[u]) { const sub = go(v, budget - 1); if (sub !== Infinity) best = Math.min(best, w + sub); }\n    memo.set(key, best);\n    return best;\n  };\n  const r = go(src, K + 1);\n  return r === Infinity ? -1 : r;\n}\n",
                commentedCode: {
                    js: "function cheapestFlights(n, edges, src, dst, K) {\n  // Group possible next flights by their departure city.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // Cache each subproblem: cheapest u-to-dst price with this many edges left.\n  const memo = new Map();\n  const go = (u, budget) => {\n    // Reaching the destination needs no further flights or cost.\n    if (u === dst) return 0;\n    // A non-destination cannot continue after consuming the entire edge budget.\n    if (budget === 0) return Infinity;\n    // K + 2 possible budget values make this numeric state key collision-free.\n    const key = u * (K + 2) + budget;\n    if (memo.has(key)) return memo.get(key);\n    let best = Infinity;\n    // Try every first flight, then optimally spend one fewer edge from its endpoint.\n    for (const [v, w] of adj[u]) { const sub = go(v, budget - 1); if (sub !== Infinity) best = Math.min(best, w + sub); }\n    memo.set(key, best);\n    return best;\n  };\n  // At most K stops means the complete route may use K + 1 flight edges.\n  const r = go(src, K + 1);\n  return r === Infinity ? -1 : r;\n}\n",
                    ts: "function cheapestFlights(n: number, edges: number[][], src: number, dst: number, K: number): number {\n  // Group possible next flights by their departure city.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // Cache each subproblem: cheapest u-to-dst price with this many edges left.\n  const memo = new Map<number, number>();\n  const go = (u: number, budget: number): number => {\n    // Reaching the destination needs no further flights or cost.\n    if (u === dst) return 0;\n    // A non-destination cannot continue after consuming the entire edge budget.\n    if (budget === 0) return Infinity;\n    // K + 2 possible budget values make this numeric state key collision-free.\n    const key = u * (K + 2) + budget;\n    if (memo.has(key)) return memo.get(key);\n    let best = Infinity;\n    // Try every first flight, then optimally spend one fewer edge from its endpoint.\n    for (const [v, w] of adj[u]) { const sub = go(v, budget - 1); if (sub !== Infinity) best = Math.min(best, w + sub); }\n    memo.set(key, best);\n    return best;\n  };\n  // At most K stops means the complete route may use K + 1 flight edges.\n  const r = go(src, K + 1);\n  return r === Infinity ? -1 : r;\n}\n"
                },
                time: "O(n·K + K·e)",
                space: "O(n·K)"
            }
        ]
    },
    {
        id: "sp-bellman-ford",
        slug: "bellman-ford-distances",
        title: "Bellman-Ford Shortest Distances",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a directed graph on `n` nodes with weighted edges `[u, v, w]` that may be negative (but with no negative cycle) and a source, return the shortest distance from `src` to every node (use -1 for unreachable).",
        examples: [
            {
                input: "5, [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], 0",
                output: "[0,3,1,4,-1]"
            },
            {
                input: "3, [[0,1,-1],[1,2,-2]], 0",
                output: "[0,-1,-3]"
            },
            {
                input: "3, [[0,1,4],[0,2,5],[1,2,-3]], 0",
                output: "[0,4,1]"
            }
        ],
        constraints: [
            "1 <= n <= 2000",
            "no negative cycle"
        ],
        functionName: "bellmanFord",
        starter: {
            js: "function bellmanFord(n, edges, src) {\n  // Shortest distances allowing negative edges (-1 if unreachable).\n}\n",
            ts: "function bellmanFord(n: number, edges: number[][], src: number): number[] {\n  // Shortest distances allowing negative edges (-1 if unreachable).\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            4
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            2,
                            1,
                            2
                        ],
                        [
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            3,
                            5
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    3,
                    1,
                    4,
                    -1
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            -1
                        ],
                        [
                            1,
                            2,
                            -2
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    -1,
                    -3
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            4
                        ],
                        [
                            0,
                            2,
                            5
                        ],
                        [
                            1,
                            2,
                            -3
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    4,
                    1
                ]
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    [],
                    0
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            -1
                        ],
                        [
                            2,
                            3,
                            2
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    1,
                    0,
                    2
                ]
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            -5
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    -5
                ]
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            2
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    1,
                    3,
                    -1
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            3
                        ],
                        [
                            1,
                            2,
                            -2
                        ],
                        [
                            0,
                            2,
                            5
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    3,
                    1
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            -1
                        ],
                        [
                            1,
                            2,
                            -2
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    -1,
                    -3
                ]
            }
        ],
        hints: [
            "Dijkstra fails with negative edges; relax all edges n − 1 times instead.",
            "Each pass can only lower distances; after n − 1 passes they're final (no negative cycle).",
            "Guard against relaxing from an Infinity distance."
        ],
        solutions: [
            {
                label: "Bellman-Ford (n − 1 passes)",
                approach: "Relax every edge repeatedly until distances stabilize.",
                js: "function bellmanFord(n, edges, src) {\n  const dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  for (let i = 0; i < n - 1; i++)\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n",
                ts: "function bellmanFord(n: number, edges: number[][], src: number): number[] {\n  const dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  for (let i = 0; i < n - 1; i++)\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n",
                commentedCode: {
                    js: "function bellmanFord(n, edges, src) {\n  // Infinity marks nodes not yet reachable from the source; the source costs zero.\n  const dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  // A simple shortest path has at most n - 1 edges, so that many passes suffice.\n  for (let i = 0; i < n - 1; i++)\n    // Relax every directed edge, but never extend the artificial Infinity sentinel.\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  // Negative weights are retained; only truly unreachable Infinity becomes -1.\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n",
                    ts: "function bellmanFord(n: number, edges: number[][], src: number): number[] {\n  // Infinity marks nodes not yet reachable from the source; the source costs zero.\n  const dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  // A simple shortest path has at most n - 1 edges, so that many passes suffice.\n  for (let i = 0; i < n - 1; i++)\n    // Relax every directed edge, but never extend the artificial Infinity sentinel.\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  // Negative weights are retained; only truly unreachable Infinity becomes -1.\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n"
                },
                time: "O(n·e)",
                space: "O(n)"
            },
            {
                label: "SPFA (queue-based)",
                approach: "Only re-relax from nodes whose distance just improved.",
                js: "function bellmanFord(n, edges, src) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  const inQ = new Array(n).fill(false);\n  const q = [src]; inQ[src] = true;\n  while (q.length) {\n    const u = q.shift(); inQ[u] = false;\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; if (!inQ[v]) { inQ[v] = true; q.push(v); } }\n  }\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n",
                ts: "function bellmanFord(n: number, edges: number[][], src: number): number[] {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  const inQ = new Array(n).fill(false);\n  const q = [src]; inQ[src] = true;\n  while (q.length) {\n    const u = q.shift(); inQ[u] = false;\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; if (!inQ[v]) { inQ[v] = true; q.push(v); } }\n  }\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n",
                commentedCode: {
                    js: "function bellmanFord(n, edges, src) {\n  // Store outgoing edges so only nodes whose distance changed need to be revisited.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  // inQ prevents duplicate pending entries without blocking a later re-enqueue.\n  const inQ = new Array(n).fill(false);\n  const q = [src]; inQ[src] = true;\n  while (q.length) {\n    // Removing u makes it eligible to be queued again if a later path improves it.\n    const u = q.shift(); inQ[u] = false;\n    // Only a strict relaxation changes state; schedule v so its improvement propagates.\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; if (!inQ[v]) { inQ[v] = true; q.push(v); } }\n  }\n  // Queue exhaustion means no improvement remains to propagate through the graph.\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n",
                    ts: "function bellmanFord(n: number, edges: number[][], src: number): number[] {\n  // Store outgoing edges so only nodes whose distance changed need to be revisited.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n  // inQ prevents duplicate pending entries without blocking a later re-enqueue.\n  const inQ = new Array(n).fill(false);\n  const q = [src]; inQ[src] = true;\n  while (q.length) {\n    // Removing u makes it eligible to be queued again if a later path improves it.\n    const u = q.shift(); inQ[u] = false;\n    // Only a strict relaxation changes state; schedule v so its improvement propagates.\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; if (!inQ[v]) { inQ[v] = true; q.push(v); } }\n  }\n  // Queue exhaustion means no improvement remains to propagate through the graph.\n  return dist.map((d) => (d === Infinity ? -1 : d));\n}\n"
                },
                time: "O(n·e) worst case",
                space: "O(n + e)"
            }
        ]
    },
    {
        id: "sp-has-neg-cycle",
        slug: "detect-negative-cycle",
        title: "Detect a Negative Cycle",
        difficulty: "hard",
        patternIds: P,
        statement: "Given a directed weighted graph on `n` nodes with edges `[u, v, w]` (weights may be negative), return whether it contains a negative-weight cycle.",
        examples: [
            {
                input: "3, [[0,1,1],[1,2,-1],[2,0,-1]]",
                output: "true"
            },
            {
                input: "3, [[0,1,1],[1,2,2]]",
                output: "false"
            },
            {
                input: "2, [[0,1,-1],[1,0,-1]]",
                output: "true"
            }
        ],
        constraints: [
            "1 <= n <= 2000"
        ],
        functionName: "hasNegativeCycle",
        starter: {
            js: "function hasNegativeCycle(n, edges) {\n  // True if a negative-weight cycle exists.\n}\n",
            ts: "function hasNegativeCycle(n: number, edges: number[][]): boolean {\n  // True if a negative-weight cycle exists.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            -1
                        ],
                        [
                            2,
                            0,
                            -1
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            2
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            -1
                        ],
                        [
                            1,
                            0,
                            -1
                        ]
                    ]
                ],
                expected: true
            }
        ],
        hidden: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            -2
                        ],
                        [
                            1,
                            2,
                            -2
                        ],
                        [
                            2,
                            0,
                            3
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    1,
                    []
                ],
                expected: false
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            -3
                        ],
                        [
                            2,
                            1,
                            1
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            2
                        ],
                        [
                            1,
                            2,
                            3
                        ],
                        [
                            2,
                            0,
                            -4
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            2
                        ]
                    ]
                ],
                expected: false
            }
        ],
        hints: [
            "Seed every node with distance 0 (a virtual source reaching all).",
            "Relax all edges n − 1 times; if a further relaxation still improves something, a negative cycle exists.",
            "Starting from all-zero catches negative cycles in any component."
        ],
        solutions: [
            {
                label: "Bellman-Ford extra pass",
                approach: "After n − 1 passes, any still-improving edge lies on a negative cycle.",
                js: "function hasNegativeCycle(n, edges) {\n  const dist = new Array(n).fill(0);\n  for (let i = 0; i < n - 1; i++)\n    for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) return true;\n  return false;\n}\n",
                ts: "function hasNegativeCycle(n: number, edges: number[][]): boolean {\n  const dist = new Array(n).fill(0);\n  for (let i = 0; i < n - 1; i++)\n    for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) return true;\n  return false;\n}\n",
                commentedCode: {
                    js: "function hasNegativeCycle(n, edges) {\n  // Zero-seeding every node is equivalent to a virtual source reaching all components.\n  const dist = new Array(n).fill(0);\n  // Without a negative cycle, all simple shortest walks stabilize within n - 1 edges.\n  for (let i = 0; i < n - 1; i++)\n    // Each relaxation records a lower-weight walk ending at v.\n    for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  // A further improvement must use a repeated vertex and therefore a negative cycle.\n  for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) return true;\n  return false;\n}\n",
                    ts: "function hasNegativeCycle(n: number, edges: number[][]): boolean {\n  // Zero-seeding every node is equivalent to a virtual source reaching all components.\n  const dist = new Array(n).fill(0);\n  // Without a negative cycle, all simple shortest walks stabilize within n - 1 edges.\n  for (let i = 0; i < n - 1; i++)\n    // Each relaxation records a lower-weight walk ending at v.\n    for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  // A further improvement must use a repeated vertex and therefore a negative cycle.\n  for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) return true;\n  return false;\n}\n"
                },
                time: "O(n·e)",
                space: "O(n)"
            },
            {
                label: "n-th pass change detection",
                approach: "Run n passes; if the last pass still changes a distance, a cycle exists.",
                js: "function hasNegativeCycle(n, edges) {\n  const dist = new Array(n).fill(0);\n  for (let i = 0; i < n; i++) {\n    let changed = false;\n    for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; changed = true; }\n    if (!changed) return false;\n    if (i === n - 1 && changed) return true;\n  }\n  return false;\n}\n",
                ts: "function hasNegativeCycle(n: number, edges: number[][]): boolean {\n  const dist = new Array(n).fill(0);\n  for (let i = 0; i < n; i++) {\n    let changed = false;\n    for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; changed = true; }\n    if (!changed) return false;\n    if (i === n - 1 && changed) return true;\n  }\n  return false;\n}\n",
                commentedCode: {
                    js: "function hasNegativeCycle(n, edges) {\n  // Treat every component as reachable by initializing all virtual-source distances to zero.\n  const dist = new Array(n).fill(0);\n  // Observe whether relaxation continues through the decisive n-th pass.\n  for (let i = 0; i < n; i++) {\n    let changed = false;\n    // Lowering any endpoint means this pass found a cheaper walk to that node.\n    for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; changed = true; }\n    // Early stability proves no edge can lead into a negative cycle.\n    if (!changed) return false;\n    // An improvement after n edges requires repeating a vertex on a negative cycle.\n    if (i === n - 1 && changed) return true;\n  }\n  return false;\n}\n",
                    ts: "function hasNegativeCycle(n: number, edges: number[][]): boolean {\n  // Treat every component as reachable by initializing all virtual-source distances to zero.\n  const dist = new Array(n).fill(0);\n  // Observe whether relaxation continues through the decisive n-th pass.\n  for (let i = 0; i < n; i++) {\n    let changed = false;\n    // Lowering any endpoint means this pass found a cheaper walk to that node.\n    for (const [u, v, w] of edges) if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; changed = true; }\n    // Early stability proves no edge can lead into a negative cycle.\n    if (!changed) return false;\n    // An improvement after n edges requires repeating a vertex on a negative cycle.\n    if (i === n - 1 && changed) return true;\n  }\n  return false;\n}\n"
                },
                time: "O(n·e)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "sp-count-reachable-within",
        slug: "count-reachable-within",
        title: "Count Nodes Reachable Within a Distance",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a directed weighted graph (non-negative edges `[u, v, w]`), a source, and a distance `limit`, return how many nodes (including the source) have shortest distance from `src` at most `limit`.",
        examples: [
            {
                input: "5, [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], 0, 4",
                output: "4"
            },
            {
                input: "3, [[0,1,1],[1,2,1]], 0, 1",
                output: "2"
            },
            {
                input: "3, [[0,1,1]], 0, 5",
                output: "2"
            }
        ],
        constraints: [
            "1 <= n <= 10000",
            "0 <= w",
            "0 <= limit"
        ],
        functionName: "countReachableWithin",
        starter: {
            js: "function countReachableWithin(n, edges, src, limit) {\n  // Count nodes within shortest distance <= limit.\n}\n",
            ts: "function countReachableWithin(n: number, edges: number[][], src: number, limit: number): number {\n  // Count nodes within shortest distance <= limit.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            4
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            2,
                            1,
                            2
                        ],
                        [
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            3,
                            5
                        ]
                    ],
                    0,
                    4
                ],
                expected: 4
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    0,
                    1
                ],
                expected: 2
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ]
                    ],
                    0,
                    5
                ],
                expected: 2
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    [],
                    0,
                    0
                ],
                expected: 1
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: 3
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            7
                        ]
                    ],
                    0,
                    5
                ],
                expected: 1
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            2
                        ],
                        [
                            0,
                            2,
                            3
                        ]
                    ],
                    0,
                    3
                ],
                expected: 3
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ],
                        [
                            3,
                            4,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: 3
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    0,
                    1
                ],
                expected: 2
            }
        ],
        hints: [
            "Compute all shortest distances from the source with Dijkstra.",
            "Then count how many are ≤ limit.",
            "The source itself (distance 0) always counts."
        ],
        solutions: [
            {
                label: "Dijkstra then count",
                approach: "Settle distances with a heap, then tally those within the limit.",
                js: `${H}
function countReachableWithin(n, edges, src, limit) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  let count = 0;
  for (const d of dist) if (d <= limit) count++;
  return count;
}
`,
                ts: `${H}
function countReachableWithin(n: number, edges: number[][], src: number, limit: number): number {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  let count = 0;
  for (const d of dist) if (d <= limit) count++;
  return count;
}
`,
                commentedCode: {
                    js: `${H}
function countReachableWithin(n, edges, src, limit) {
  // Build outgoing adjacency entries for the directed weighted graph.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  // Dijkstra maintains the best discovered source distance for every node.
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  // Packing distance before node lets the numeric MinHeap prioritize distance.
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    // An improved route can leave older, larger entries in the heap; skip them.
    if (d > dist[u]) continue;
    // Record and queue every strictly shorter route through u.
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  let count = 0;
  // Only finite shortest distances no greater than limit qualify; src has distance zero.
  for (const d of dist) if (d <= limit) count++;
  return count;
}
`,
                    ts: `${H}
function countReachableWithin(n: number, edges: number[][], src: number, limit: number): number {
  // Build outgoing adjacency entries for the directed weighted graph.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  // Dijkstra maintains the best discovered source distance for every node.
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  // Packing distance before node lets the numeric MinHeap prioritize distance.
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    // An improved route can leave older, larger entries in the heap; skip them.
    if (d > dist[u]) continue;
    // Record and queue every strictly shorter route through u.
    for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
  }
  let count = 0;
  // Only finite shortest distances no greater than limit qualify; src has distance zero.
  for (const d of dist) if (d <= limit) count++;
  return count;
}
`
                },
                time: "O((n + e)·log n)",
                space: "O(n + e)"
            },
            {
                label: "Dijkstra, O(n²) selection",
                approach: "Nearest-node scan, then count settled distances ≤ limit.",
                js: "function countReachableWithin(n, edges, src, limit) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  let count = 0;\n  for (const d of dist) if (d <= limit) count++;\n  return count;\n}\n",
                ts: "function countReachableWithin(n: number, edges: number[][], src: number, limit: number): number {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  let count = 0;\n  for (const d of dist) if (d <= limit) count++;\n  return count;\n}\n",
                commentedCode: {
                    js: "function countReachableWithin(n, edges, src, limit) {\n  // Keep each directed edge in the bucket for its starting node.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // dist is tentative until selection; done prevents settling a node twice.\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    // Scan all unfinished nodes for the currently smallest source distance.\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    // No finite candidate means every remaining node is unreachable.\n    if (u === -1) break;\n    done[u] = true;\n    // Improve neighbors by extending the final shortest route to u.\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  let count = 0;\n  // The source counts because its distance is zero; Infinity never passes a finite limit.\n  for (const d of dist) if (d <= limit) count++;\n  return count;\n}\n",
                    ts: "function countReachableWithin(n: number, edges: number[][], src: number, limit: number): number {\n  // Keep each directed edge in the bucket for its starting node.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // dist is tentative until selection; done prevents settling a node twice.\n  const dist = new Array(n).fill(Infinity);\n  const done = new Array(n).fill(false);\n  dist[src] = 0;\n  for (let it = 0; it < n; it++) {\n    // Scan all unfinished nodes for the currently smallest source distance.\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    // No finite candidate means every remaining node is unreachable.\n    if (u === -1) break;\n    done[u] = true;\n    // Improve neighbors by extending the final shortest route to u.\n    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  }\n  let count = 0;\n  // The source counts because its distance is zero; Infinity never passes a finite limit.\n  for (const d of dist) if (d <= limit) count++;\n  return count;\n}\n"
                },
                time: "O(n² + e)",
                space: "O(n + e)"
            }
        ]
    },
    {
        id: "sp-count-shortest-paths",
        slug: "count-shortest-paths",
        title: "Count Shortest Paths",
        difficulty: "hard",
        patternIds: P,
        statement: "Given a directed graph with positive weighted edges `[u, v, w]`, return the number of distinct shortest paths from `src` to `dst` (0 if unreachable).",
        examples: [
            {
                input: "4, [[0,1,1],[0,2,1],[1,3,1],[2,3,1]], 0, 3",
                output: "2"
            },
            {
                input: "3, [[0,1,1],[1,2,1]], 0, 2",
                output: "1"
            },
            {
                input: "3, [[0,1,1]], 0, 2",
                output: "0"
            }
        ],
        constraints: [
            "1 <= n <= 2000",
            "1 <= w"
        ],
        functionName: "countShortestPaths",
        starter: {
            js: "function countShortestPaths(n, edges, src, dst) {\n  // Number of distinct shortest src->dst paths.\n}\n",
            ts: "function countShortestPaths(n: number, edges: number[][], src: number, dst: number): number {\n  // Number of distinct shortest src->dst paths.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    0,
                    3
                ],
                expected: 2
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: 1
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    [],
                    0,
                    0
                ],
                expected: 1
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ],
                        [
                            3,
                            4,
                            1
                        ]
                    ],
                    0,
                    4
                ],
                expected: 2
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            0,
                            2,
                            2
                        ],
                        [
                            1,
                            3,
                            2
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    0,
                    3
                ],
                expected: 2
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            3
                        ]
                    ],
                    0,
                    1
                ],
                expected: 1
            },
            {
                args: [
                    6,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ],
                        [
                            3,
                            4,
                            1
                        ],
                        [
                            3,
                            5,
                            1
                        ]
                    ],
                    0,
                    5
                ],
                expected: 2
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: 1
            }
        ],
        hints: [
            "Run Dijkstra while carrying a ways[] count alongside dist[].",
            "When you strictly improve dist[v], copy ways[u]; when you tie it, add ways[u].",
            "Because weights are positive, a settled node's count is final."
        ],
        solutions: [
            {
                label: "Dijkstra with path counts",
                approach: "Track ways[v]; reset on improvement, accumulate on ties.",
                js: `${H}
function countShortestPaths(n, edges, src, dst) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  const ways = new Array(n).fill(0);
  dist[src] = 0; ways[src] = 1;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      if (d + w < dist[v]) { dist[v] = d + w; ways[v] = ways[u]; heap.push((d + w) * BASE + v); }
      else if (d + w === dist[v]) ways[v] += ways[u];
    }
  }
  return dist[dst] === Infinity ? 0 : ways[dst];
}
`,
                ts: `${H}
function countShortestPaths(n: number, edges: number[][], src: number, dst: number): number {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  const ways = new Array(n).fill(0);
  dist[src] = 0; ways[src] = 1;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      if (d + w < dist[v]) { dist[v] = d + w; ways[v] = ways[u]; heap.push((d + w) * BASE + v); }
      else if (d + w === dist[v]) ways[v] += ways[u];
    }
  }
  return dist[dst] === Infinity ? 0 : ways[dst];
}
`,
                commentedCode: {
                    js: `${H}
function countShortestPaths(n, edges, src, dst) {
  // Group directed choices by source node for Dijkstra's edge relaxations.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  // dist[v] is the shortest length found; ways[v] counts routes achieving exactly it.
  const dist = new Array(n).fill(Infinity);
  const ways = new Array(n).fill(0);
  // The empty source-to-source path is one path of length zero.
  dist[src] = 0; ways[src] = 1;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    // Settle states from smallest distance to largest because all weights are positive.
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      // A strictly better length replaces both v's distance and its route count.
      if (d + w < dist[v]) { dist[v] = d + w; ways[v] = ways[u]; heap.push((d + w) * BASE + v); }
      // An equal-length route is another distinct shortest path to v.
      else if (d + w === dist[v]) ways[v] += ways[u];
    }
  }
  // Unreachable destinations have no paths; otherwise return the accumulated ties.
  return dist[dst] === Infinity ? 0 : ways[dst];
}
`,
                    ts: `${H}
function countShortestPaths(n: number, edges: number[][], src: number, dst: number): number {
  // Group directed choices by source node for Dijkstra's edge relaxations.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  // dist[v] is the shortest length found; ways[v] counts routes achieving exactly it.
  const dist = new Array(n).fill(Infinity);
  const ways = new Array(n).fill(0);
  // The empty source-to-source path is one path of length zero.
  dist[src] = 0; ways[src] = 1;
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(src);
  while (heap.size()) {
    // Settle states from smallest distance to largest because all weights are positive.
    const key = heap.pop();
    const d = Math.floor(key / BASE), u = key % BASE;
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      // A strictly better length replaces both v's distance and its route count.
      if (d + w < dist[v]) { dist[v] = d + w; ways[v] = ways[u]; heap.push((d + w) * BASE + v); }
      // An equal-length route is another distinct shortest path to v.
      else if (d + w === dist[v]) ways[v] += ways[u];
    }
  }
  // Unreachable destinations have no paths; otherwise return the accumulated ties.
  return dist[dst] === Infinity ? 0 : ways[dst];
}
`
                },
                time: "O((n + e)·log n)",
                space: "O(n + e)"
            },
            {
                label: "O(n²) Dijkstra with counts",
                approach: "Settle nodes by nearest-scan, updating counts as distances tie or improve.",
                js: "function countShortestPaths(n, edges, src, dst) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  const ways = new Array(n).fill(0);\n  const done = new Array(n).fill(false);\n  dist[src] = 0; ways[src] = 1;\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) {\n      if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; ways[v] = ways[u]; }\n      else if (dist[u] + w === dist[v]) ways[v] += ways[u];\n    }\n  }\n  return dist[dst] === Infinity ? 0 : ways[dst];\n}\n",
                ts: "function countShortestPaths(n: number, edges: number[][], src: number, dst: number): number {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  const dist = new Array(n).fill(Infinity);\n  const ways = new Array(n).fill(0);\n  const done = new Array(n).fill(false);\n  dist[src] = 0; ways[src] = 1;\n  for (let it = 0; it < n; it++) {\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) {\n      if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; ways[v] = ways[u]; }\n      else if (dist[u] + w === dist[v]) ways[v] += ways[u];\n    }\n  }\n  return dist[dst] === Infinity ? 0 : ways[dst];\n}\n",
                commentedCode: {
                    js: "function countShortestPaths(n, edges, src, dst) {\n  // Store every directed weighted edge beside its starting node.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // Pair each tentative distance with the number of paths attaining that distance.\n  const dist = new Array(n).fill(Infinity);\n  const ways = new Array(n).fill(0);\n  const done = new Array(n).fill(false);\n  dist[src] = 0; ways[src] = 1;\n  for (let it = 0; it < n; it++) {\n    // Select the closest unsettled node; positive weights finalize its count too.\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) {\n      // A shorter route replaces v's previous length and inherits all ways to u.\n      if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; ways[v] = ways[u]; }\n      // A tie contributes another disjoint choice of final edge into v.\n      else if (dist[u] + w === dist[v]) ways[v] += ways[u];\n    }\n  }\n  // The Infinity sentinel distinguishes no path from a finite path count.\n  return dist[dst] === Infinity ? 0 : ways[dst];\n}\n",
                    ts: "function countShortestPaths(n: number, edges: number[][], src: number, dst: number): number {\n  // Store every directed weighted edge beside its starting node.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) adj[u].push([v, w]);\n  // Pair each tentative distance with the number of paths attaining that distance.\n  const dist = new Array(n).fill(Infinity);\n  const ways = new Array(n).fill(0);\n  const done = new Array(n).fill(false);\n  dist[src] = 0; ways[src] = 1;\n  for (let it = 0; it < n; it++) {\n    // Select the closest unsettled node; positive weights finalize its count too.\n    let u = -1, best = Infinity;\n    for (let i = 0; i < n; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }\n    if (u === -1) break;\n    done[u] = true;\n    for (const [v, w] of adj[u]) {\n      // A shorter route replaces v's previous length and inherits all ways to u.\n      if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; ways[v] = ways[u]; }\n      // A tie contributes another disjoint choice of final edge into v.\n      else if (dist[u] + w === dist[v]) ways[v] += ways[u];\n    }\n  }\n  // The Infinity sentinel distinguishes no path from a finite path count.\n  return dist[dst] === Infinity ? 0 : ways[dst];\n}\n"
                },
                time: "O(n² + e)",
                space: "O(n + e)"
            }
        ]
    },
    {
        id: "sp-floyd-shortest",
        slug: "floyd-warshall-shortest",
        title: "Floyd-Warshall Shortest Distance",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a directed weighted graph (edges `[u, v, w]`, weights may be negative but no negative cycle) and nodes `a` and `b`, return the shortest distance from `a` to `b`, or -1 if `b` is unreachable, using the all-pairs Floyd-Warshall method.",
        examples: [
            {
                input: "5, [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], 0, 3",
                output: "4"
            },
            {
                input: "3, [[0,1,1],[1,2,1]], 0, 2",
                output: "2"
            },
            {
                input: "3, [[0,1,1]], 0, 2",
                output: "-1"
            }
        ],
        constraints: [
            "1 <= n <= 400"
        ],
        functionName: "floydShortest",
        starter: {
            js: "function floydShortest(n, edges, a, b) {\n  // Shortest a->b distance via Floyd-Warshall, or -1.\n}\n",
            ts: "function floydShortest(n: number, edges: number[][], a: number, b: number): number {\n  // Shortest a->b distance via Floyd-Warshall, or -1.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            4
                        ],
                        [
                            0,
                            2,
                            1
                        ],
                        [
                            2,
                            1,
                            2
                        ],
                        [
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            3,
                            5
                        ]
                    ],
                    0,
                    3
                ],
                expected: 4
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: 2
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: -1
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    [],
                    0,
                    0
                ],
                expected: 0
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    3,
                    0
                ],
                expected: -1
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            7
                        ]
                    ],
                    0,
                    1
                ],
                expected: 7
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            5
                        ],
                        [
                            1,
                            2,
                            2
                        ],
                        [
                            0,
                            2,
                            9
                        ]
                    ],
                    0,
                    2
                ],
                expected: 7
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            3
                        ],
                        [
                            1,
                            2,
                            -2
                        ],
                        [
                            0,
                            2,
                            5
                        ]
                    ],
                    0,
                    2
                ],
                expected: 1
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    0,
                    2
                ],
                expected: 2
            }
        ],
        hints: [
            "Initialize a distance matrix: 0 on the diagonal, edge weights, Infinity elsewhere.",
            "For each intermediate k, relax dist[i][j] through k.",
            "Read off dist[a][b], mapping Infinity to -1."
        ],
        solutions: [
            {
                label: "Floyd-Warshall",
                approach: "Triple loop relaxing every pair through each intermediate node.",
                js: "function floydShortest(n, edges, a, b) {\n  const INF = Infinity;\n  const d = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : INF)));\n  for (const [u, v, w] of edges) d[u][v] = Math.min(d[u][v], w);\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];\n  return d[a][b] === INF ? -1 : d[a][b];\n}\n",
                ts: "function floydShortest(n: number, edges: number[][], a: number, b: number): number {\n  const INF = Infinity;\n  const d = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : INF)));\n  for (const [u, v, w] of edges) d[u][v] = Math.min(d[u][v], w);\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];\n  return d[a][b] === INF ? -1 : d[a][b];\n}\n",
                commentedCode: {
                    js: "function floydShortest(n, edges, a, b) {\n  const INF = Infinity;\n  // Start with zero self-distance and no known route between distinct nodes.\n  const d = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : INF)));\n  // Multiple direct edges may repeat a pair, so retain only the lightest one.\n  for (const [u, v, w] of edges) d[u][v] = Math.min(d[u][v], w);\n  // After phase k, d[i][j] may use only nodes 0..k as internal intermediates.\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        // Either keep the prior route or join the best i-to-k and k-to-j routes.\n        if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];\n  // The all-pairs matrix now contains the requested shortest distance.\n  return d[a][b] === INF ? -1 : d[a][b];\n}\n",
                    ts: "function floydShortest(n: number, edges: number[][], a: number, b: number): number {\n  const INF = Infinity;\n  // Start with zero self-distance and no known route between distinct nodes.\n  const d = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : INF)));\n  // Multiple direct edges may repeat a pair, so retain only the lightest one.\n  for (const [u, v, w] of edges) d[u][v] = Math.min(d[u][v], w);\n  // After phase k, d[i][j] may use only nodes 0..k as internal intermediates.\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        // Either keep the prior route or join the best i-to-k and k-to-j routes.\n        if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];\n  // The all-pairs matrix now contains the requested shortest distance.\n  return d[a][b] === INF ? -1 : d[a][b];\n}\n"
                },
                time: "O(n³)",
                space: "O(n²)"
            },
            {
                label: "Bellman-Ford from a",
                approach: "Single-source relaxation handles the negative edges too.",
                js: "function floydShortest(n, edges, a, b) {\n  const dist = new Array(n).fill(Infinity);\n  dist[a] = 0;\n  for (let i = 0; i < n - 1; i++)\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  return dist[b] === Infinity ? -1 : dist[b];\n}\n",
                ts: "function floydShortest(n: number, edges: number[][], a: number, b: number): number {\n  const dist = new Array(n).fill(Infinity);\n  dist[a] = 0;\n  for (let i = 0; i < n - 1; i++)\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  return dist[b] === Infinity ? -1 : dist[b];\n}\n",
                commentedCode: {
                    js: "function floydShortest(n, edges, a, b) {\n  // This alternative only needs distances from the requested source a.\n  const dist = new Array(n).fill(Infinity);\n  dist[a] = 0;\n  // Every simple a-to-b shortest path uses at most n - 1 directed edges.\n  for (let i = 0; i < n - 1; i++)\n    // Bellman-Ford supports negative weights and never extends an unreachable node.\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  // If b never received a finite distance, it is unreachable from a.\n  return dist[b] === Infinity ? -1 : dist[b];\n}\n",
                    ts: "function floydShortest(n: number, edges: number[][], a: number, b: number): number {\n  // This alternative only needs distances from the requested source a.\n  const dist = new Array(n).fill(Infinity);\n  dist[a] = 0;\n  // Every simple a-to-b shortest path uses at most n - 1 directed edges.\n  for (let i = 0; i < n - 1; i++)\n    // Bellman-Ford supports negative weights and never extends an unreachable node.\n    for (const [u, v, w] of edges) if (dist[u] !== Infinity && dist[u] + w < dist[v]) dist[v] = dist[u] + w;\n  // If b never received a finite distance, it is unreachable from a.\n  return dist[b] === Infinity ? -1 : dist[b];\n}\n"
                },
                time: "O(n·e)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "sp-city-fewest",
        slug: "city-with-fewest-neighbors",
        title: "City With Fewest Reachable Neighbors",
        difficulty: "hard",
        patternIds: P,
        statement: "Given `n` cities and UNDIRECTED weighted roads `[u, v, w]`, and a `threshold`, return the city that can reach the fewest other cities within total distance `threshold`. If several tie, return the one with the largest index.",
        examples: [
            {
                input: "4, [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], 4",
                output: "3"
            },
            {
                input: "5, [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], 2",
                output: "0"
            },
            {
                input: "3, [[0,1,1],[1,2,1]], 2",
                output: "2"
            }
        ],
        constraints: [
            "1 <= n <= 400",
            "roads are undirected"
        ],
        functionName: "cityWithFewest",
        starter: {
            js: "function cityWithFewest(n, edges, threshold) {\n  // City reaching the fewest others within threshold (ties -> largest index).\n}\n",
            ts: "function cityWithFewest(n: number, edges: number[][], threshold: number): number {\n  // City reaching the fewest others within threshold (ties -> largest index).\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            3
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            1,
                            3,
                            4
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    4
                ],
                expected: 3
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            2
                        ],
                        [
                            0,
                            4,
                            8
                        ],
                        [
                            1,
                            2,
                            3
                        ],
                        [
                            1,
                            4,
                            2
                        ],
                        [
                            2,
                            3,
                            1
                        ],
                        [
                            3,
                            4,
                            1
                        ]
                    ],
                    2
                ],
                expected: 0
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    2
                ],
                expected: 2
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    [],
                    5
                ],
                expected: 0
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            10
                        ]
                    ],
                    5
                ],
                expected: 1
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ],
                    1
                ],
                expected: 3
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            2
                        ],
                        [
                            1,
                            2,
                            2
                        ],
                        [
                            0,
                            2,
                            3
                        ]
                    ],
                    3
                ],
                expected: 2
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ],
                        [
                            3,
                            4,
                            1
                        ]
                    ],
                    2
                ],
                expected: 4
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ]
                    ],
                    2
                ],
                expected: 2
            }
        ],
        hints: [
            "Compute all-pairs shortest distances (roads are undirected, so fill both directions).",
            "For each city, count neighbours within the threshold.",
            "Scan cities in increasing index and use ≤ so ties resolve to the largest index."
        ],
        solutions: [
            {
                label: "Floyd-Warshall then count",
                approach: "All-pairs distances, then the city with the smallest reachable count.",
                js: "function cityWithFewest(n, edges, threshold) {\n  const INF = Infinity;\n  const d = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : INF)));\n  for (const [u, v, w] of edges) { d[u][v] = Math.min(d[u][v], w); d[v][u] = Math.min(d[v][u], w); }\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];\n  let best = n + 1, city = -1;\n  for (let i = 0; i < n; i++) {\n    let c = 0;\n    for (let j = 0; j < n; j++) if (i !== j && d[i][j] <= threshold) c++;\n    if (c <= best) { best = c; city = i; }\n  }\n  return city;\n}\n",
                ts: "function cityWithFewest(n: number, edges: number[][], threshold: number): number {\n  const INF = Infinity;\n  const d = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : INF)));\n  for (const [u, v, w] of edges) { d[u][v] = Math.min(d[u][v], w); d[v][u] = Math.min(d[v][u], w); }\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];\n  let best = n + 1, city = -1;\n  for (let i = 0; i < n; i++) {\n    let c = 0;\n    for (let j = 0; j < n; j++) if (i !== j && d[i][j] <= threshold) c++;\n    if (c <= best) { best = c; city = i; }\n  }\n  return city;\n}\n",
                commentedCode: {
                    js: "function cityWithFewest(n, edges, threshold) {\n  const INF = Infinity;\n  // Initialize all-pairs distances: zero to self and unknown between distinct cities.\n  const d = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : INF)));\n  // Roads are undirected; for duplicate roads keep the lighter weight both ways.\n  for (const [u, v, w] of edges) { d[u][v] = Math.min(d[u][v], w); d[v][u] = Math.min(d[v][u], w); }\n  // Floyd-Warshall gradually allows each k as an intermediate city.\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];\n  let best = n + 1, city = -1;\n  for (let i = 0; i < n; i++) {\n    let c = 0;\n    // Count other cities whose finalized shortest distance meets the threshold.\n    for (let j = 0; j < n; j++) if (i !== j && d[i][j] <= threshold) c++;\n    // Accepting equality while scanning upward deliberately chooses the largest tied index.\n    if (c <= best) { best = c; city = i; }\n  }\n  return city;\n}\n",
                    ts: "function cityWithFewest(n: number, edges: number[][], threshold: number): number {\n  const INF = Infinity;\n  // Initialize all-pairs distances: zero to self and unknown between distinct cities.\n  const d = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : INF)));\n  // Roads are undirected; for duplicate roads keep the lighter weight both ways.\n  for (const [u, v, w] of edges) { d[u][v] = Math.min(d[u][v], w); d[v][u] = Math.min(d[v][u], w); }\n  // Floyd-Warshall gradually allows each k as an intermediate city.\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];\n  let best = n + 1, city = -1;\n  for (let i = 0; i < n; i++) {\n    let c = 0;\n    // Count other cities whose finalized shortest distance meets the threshold.\n    for (let j = 0; j < n; j++) if (i !== j && d[i][j] <= threshold) c++;\n    // Accepting equality while scanning upward deliberately chooses the largest tied index.\n    if (c <= best) { best = c; city = i; }\n  }\n  return city;\n}\n"
                },
                time: "O(n³)",
                space: "O(n²)"
            },
            {
                label: "Dijkstra from each city",
                approach: "Run a heap Dijkstra per source, then count reachable within the threshold.",
                js: `${H}
function cityWithFewest(n, edges, threshold) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) { adj[u].push([v, w]); adj[v].push([u, w]); }
  const BASE = 1000000;
  const reachCount = (src) => {
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    const heap = new MinHeap();
    heap.push(src);
    while (heap.size()) {
      const key = heap.pop();
      const d = Math.floor(key / BASE), u = key % BASE;
      if (d > dist[u]) continue;
      for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
    }
    let c = 0;
    for (let j = 0; j < n; j++) if (j !== src && dist[j] <= threshold) c++;
    return c;
  };
  let best = n + 1, city = -1;
  for (let i = 0; i < n; i++) { const c = reachCount(i); if (c <= best) { best = c; city = i; } }
  return city;
}
`,
                ts: `${H}
function cityWithFewest(n: number, edges: number[][], threshold: number): number {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) { adj[u].push([v, w]); adj[v].push([u, w]); }
  const BASE = 1000000;
  const reachCount = (src: number): number => {
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    const heap = new MinHeap();
    heap.push(src);
    while (heap.size()) {
      const key = heap.pop();
      const d = Math.floor(key / BASE), u = key % BASE;
      if (d > dist[u]) continue;
      for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
    }
    let c = 0;
    for (let j = 0; j < n; j++) if (j !== src && dist[j] <= threshold) c++;
    return c;
  };
  let best = n + 1, city = -1;
  for (let i = 0; i < n; i++) { const c = reachCount(i); if (c <= best) { best = c; city = i; } }
  return city;
}
`,
                commentedCode: {
                    js: `${H}
function cityWithFewest(n, edges, threshold) {
  // Add both directions because every road can be travelled either way.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) { adj[u].push([v, w]); adj[v].push([u, w]); }
  const BASE = 1000000;
  // Return how many other cities src can reach within the distance threshold.
  const reachCount = (src) => {
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    const heap = new MinHeap();
    heap.push(src);
    while (heap.size()) {
      // Dijkstra settles the nearest queued state for this particular source city.
      const key = heap.pop();
      const d = Math.floor(key / BASE), u = key % BASE;
      // Ignore an old entry after a shorter route to the same node was queued.
      if (d > dist[u]) continue;
      // Relax every road and queue each improved encoded (distance, node) state.
      for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
    }
    let c = 0;
    // Exclude src itself; only other cities within the threshold are neighbors.
    for (let j = 0; j < n; j++) if (j !== src && dist[j] <= threshold) c++;
    return c;
  };
  let best = n + 1, city = -1;
  // Recompute single-source distances for every possible source city.
  for (let i = 0; i < n; i++) { const c = reachCount(i); if (c <= best) { best = c; city = i; } }
  // The <= update above overwrites ties, leaving the greatest tied index.
  return city;
}
`,
                    ts: `${H}
function cityWithFewest(n: number, edges: number[][], threshold: number): number {
  // Add both directions because every road can be travelled either way.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) { adj[u].push([v, w]); adj[v].push([u, w]); }
  const BASE = 1000000;
  // Return how many other cities src can reach within the distance threshold.
  const reachCount = (src: number): number => {
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    const heap = new MinHeap();
    heap.push(src);
    while (heap.size()) {
      // Dijkstra settles the nearest queued state for this particular source city.
      const key = heap.pop();
      const d = Math.floor(key / BASE), u = key % BASE;
      // Ignore an old entry after a shorter route to the same node was queued.
      if (d > dist[u]) continue;
      // Relax every road and queue each improved encoded (distance, node) state.
      for (const [v, w] of adj[u]) if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
    }
    let c = 0;
    // Exclude src itself; only other cities within the threshold are neighbors.
    for (let j = 0; j < n; j++) if (j !== src && dist[j] <= threshold) c++;
    return c;
  };
  let best = n + 1, city = -1;
  // Recompute single-source distances for every possible source city.
  for (let i = 0; i < n; i++) { const c = reachCount(i); if (c <= best) { best = c; city = i; } }
  // The <= update above overwrites ties, leaving the greatest tied index.
  return city;
}
`
                },
                time: "O(n·(n + e)·log n)",
                space: "O(n + e)"
            }
        ]
    }
];
const shortestPathProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const shortestPathMcqs = [
    {
        id: "s6-sp-dijkstra",
        kind: "mcq",
        prompt: "Dijkstra's algorithm gives correct shortest paths only when:",
        options: [
            "the graph is a tree",
            "all edge weights are non-negative",
            "the graph is undirected",
            "there are fewer than n edges"
        ],
        answerIndex: 1,
        explanation: "A negative edge can improve an already-settled node, breaking Dijkstra's greedy invariant — use Bellman-Ford instead."
    },
    {
        id: "s6-sp-bellman",
        kind: "mcq",
        prompt: "After relaxing all edges n − 1 times, an edge that can still be relaxed indicates:",
        options: [
            "the source was chosen wrong",
            "a negative-weight cycle",
            "the graph is disconnected",
            "nothing — it's expected"
        ],
        answerIndex: 1,
        explanation: "Shortest paths use at most n − 1 edges; a further improvement can only come from cycling through a negative-weight loop."
    }
];
const shortestPathModule = {
    id: "m-pat-shortest-path",
    stageId: S,
    title: "Shortest Paths (Dijkstra & Bellman-Ford)",
    kind: "patternModule",
    summary: "Weighted shortest paths — Dijkstra with a heap for non-negative graphs, Bellman-Ford for negative edges and cycle detection, Floyd-Warshall for all pairs.",
    lessonSections: [
        {
            heading: "Dijkstra: greedy on a heap",
            body: `On a graph with **non-negative** edge weights, **Dijkstra's algorithm** finds shortest paths from a source by always expanding the closest unsettled node. A **min-heap** keyed by tentative distance delivers that node in \`O(log n)\`. This module reuses the shared \`MinHeap\` from the Heap lab — because it orders by value, we push a single encoded number \`dist * BASE + node\` and decode on pop.

\`\`\`js
const dist = new Array(n).fill(Infinity);
dist[src] = 0;
const heap = new MinHeap();
heap.push(src);                          // 0 * BASE + src
while (heap.size()) {
  const key = heap.pop();
  const d = Math.floor(key / BASE), u = key % BASE;
  if (d > dist[u]) continue;             // stale entry — skip
  for (const [v, w] of adj[u])
    if (d + w < dist[v]) { dist[v] = d + w; heap.push((d + w) * BASE + v); }
}
\`\`\`

Once a node is popped with its true distance it's **settled** — this is why a negative edge, which could later lower a settled distance, breaks the algorithm.`
        },
        {
            heading: "Bellman-Ford & Floyd-Warshall",
            body: `When edges can be **negative**, use **Bellman-Ford**: relax *every* edge \`n − 1\` times. A shortest path uses at most \`n − 1\` edges, so after that pass all distances are final. One more pass that still improves something proves a **negative cycle** — the standard detector. A **bounded** version (relax \`K + 1\` times over a snapshot) solves "cheapest within K stops," where Dijkstra's greediness doesn't respect the edge budget.

For **all-pairs** shortest paths on small graphs, **Floyd-Warshall** is three nested loops:

\`\`\`ts
for (let k = 0; k < n; k++)
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];
\`\`\`

It handles negative edges (no negative cycle) and answers many "reach within a threshold" questions directly.`
        },
        {
            heading: "Choosing an algorithm & pitfalls",
            body: `**Pick by the graph:** non-negative weights and one source → **Dijkstra** (\`O((n+e) log n)\`); negative edges or cycle detection → **Bellman-Ford** (\`O(n·e)\`); an edge/stop budget → **bounded Bellman-Ford**; small graph needing every pair → **Floyd-Warshall** (\`O(n³)\`).

**Pitfalls:** running Dijkstra on negative edges; forgetting to **skip stale heap entries** (the \`d > dist[u]\` guard); in bounded Bellman-Ford, relaxing off the *current* round instead of a **snapshot** (which lets a path exceed the stop limit); mixing up **directed vs undirected** (add both directions for undirected roads); and integer overflow in the heap encoding — keep \`BASE\` safely above the node count. Every drill ships a heap/relaxation solution plus an alternative — compare them and work easy to hard.`
        }
    ],
    guidedExampleProblemId: "sp-dijkstra-dist",
    drillProblemIds: [
        "sp-dijkstra-dist",
        "sp-dijkstra-all",
        "sp-network-delay",
        "sp-cheapest-flights",
        "sp-bellman-ford",
        "sp-has-neg-cycle"
    ],
    testPoolProblemIds: [
        "sp-count-reachable-within",
        "sp-count-shortest-paths",
        "sp-floyd-shortest",
        "sp-city-fewest"
    ],
    complexityQuestionIds: [
        "s6-sp-dijkstra",
        "s6-sp-bellman"
    ],
    badgeId: "badge-pat-shortest-path",
    prerequisiteModuleIds: [
        "m-pat-union-find"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_data_stage6_shortestpath_ts_0wqu7qh._.js.map