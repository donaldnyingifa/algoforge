import type { BuildLab } from "@/types";
import { XP } from "@/lib/constants";
import { MIN_HEAP_SOURCE } from "@/data/shared/heap";

/** Stage-2 batch-3 build labs: MinHeap, Graph, Trie. */

const heapHarness = `
const h = new MinHeap();
expect("empty size", h.size(), 0);
assert("empty peek is undefined", h.peek() === undefined);
h.push(5); h.push(1); h.push(3); h.push(2); h.push(4);
expect("size after pushes", h.size(), 5);
expect("peek is min", h.peek(), 1);
expect("pop 1", h.pop(), 1);
expect("pop 2", h.pop(), 2);
expect("pop 3", h.pop(), 3);
expect("size after three pops", h.size(), 2);
expect("pop 4", h.pop(), 4);
expect("pop 5", h.pop(), 5);
assert("empty again", h.size() === 0);
assert("pop on empty is undefined", h.pop() === undefined);
`;

export const heapLab: BuildLab = {
  id: "lab-min-heap",
  exportName: "MinHeap",
  spec: `Implement a **MinHeap** — a binary heap where the smallest value is always on top. This is the reusable priority queue later stages build on (Top-K, Two Heaps, K-Way Merge).

Store the heap in an array where node \`i\`'s children are \`2i+1\` and \`2i+2\`. Provide:
- \`push(value)\` — insert, then *sift up*; return \`this\`.
- \`pop()\` — remove and return the minimum (move the last element to the root and *sift down*), or \`undefined\` if empty.
- \`peek()\` — the minimum without removing it.
- \`size()\` — number of elements.`,
  starterCode: {
    js: `class MinHeap {
  constructor() {
    this.data = [];
  }
  size() { return this.data.length; }
  peek() { /* the minimum */ }
  push(value) {
    // append, then sift up; return this
  }
  pop() {
    // swap root with last, remove, sift down; return old root
  }
}
`,
    ts: `class MinHeap {
  private data: number[];
  constructor() {
    this.data = [];
  }
  size(): number { return this.data.length; }
  peek(): number | undefined { return undefined; }
  push(value: number): this {
    // append, then sift up
    return this;
  }
  pop(): number | undefined {
    // swap root with last, remove, sift down
    return undefined;
  }
}
`,
  },
  testHarness: { js: heapHarness, ts: heapHarness },
  referenceImplementation: {
    js: MIN_HEAP_SOURCE + "\n",
    ts: `class MinHeap {
  private data: number[] = [];
  size(): number { return this.data.length; }
  peek(): number | undefined { return this.data[0]; }
  push(value: number): this { this.data.push(value); this.up(this.data.length - 1); return this; }
  pop(): number | undefined {
    const n = this.data.length;
    if (n === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop() as number;
    if (n > 1) { this.data[0] = last; this.down(0); }
    return top;
  }
  private up(i: number): void {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.data[p] <= this.data[i]) break;
      const t = this.data[p]; this.data[p] = this.data[i]; this.data[i] = t;
      i = p;
    }
  }
  private down(i: number): void {
    const n = this.data.length;
    for (;;) {
      let s = i; const l = 2 * i + 1; const r = 2 * i + 2;
      if (l < n && this.data[l] < this.data[s]) s = l;
      if (r < n && this.data[r] < this.data[s]) s = r;
      if (s === i) break;
      const t = this.data[s]; this.data[s] = this.data[i]; this.data[i] = t;
      i = s;
    }
  }
}
`,
  },
  xp: XP.buildLab,
};

const graphHarness = `
const g = new Graph();
expect("no neighbors for unknown node", g.neighbors(1), []);
g.addEdge(1, 2); g.addEdge(1, 3); g.addEdge(3, 4);
expect("neighbors of 1 sorted", g.neighbors(1), [2, 3]);
expect("neighbors of 3 sorted", g.neighbors(3), [1, 4]);
assert("edges are undirected", g.neighbors(2).includes(1));
assert("path 1 to 4", g.hasPath(1, 4));
assert("path 2 to 4", g.hasPath(2, 4));
assert("path to self", g.hasPath(2, 2));
g.addEdge(5, 6);
assert("no path across components", !g.hasPath(1, 5));
`;

export const graphLab: BuildLab = {
  id: "lab-graph",
  exportName: "Graph",
  spec: `Implement an **undirected Graph** with an adjacency list (a map from node → set of neighbours).

- \`addEdge(u, v)\` — connect \`u\` and \`v\` both ways; return \`this\`.
- \`neighbors(u)\` — the neighbours of \`u\` as an ascending array (empty if the node is unknown).
- \`hasPath(a, b)\` — whether any path connects \`a\` and \`b\` (a node always has a path to itself). Use BFS or DFS.`,
  starterCode: {
    js: `class Graph {
  constructor() {
    this.adj = new Map();
  }
  addEdge(u, v) {
    // add v to u's set and u to v's set; return this
  }
  neighbors(u) {
    // ascending array of u's neighbours, or []
  }
  hasPath(a, b) {
    // BFS/DFS from a looking for b
  }
}
`,
    ts: `class Graph {
  private adj: Map<number, Set<number>>;
  constructor() {
    this.adj = new Map();
  }
  addEdge(u: number, v: number): this {
    return this;
  }
  neighbors(u: number): number[] {
    return [];
  }
  hasPath(a: number, b: number): boolean {
    return false;
  }
}
`,
  },
  testHarness: { js: graphHarness, ts: graphHarness },
  referenceImplementation: {
    js: `class Graph {
  constructor() { this.adj = new Map(); }
  addEdge(u, v) {
    if (!this.adj.has(u)) this.adj.set(u, new Set());
    if (!this.adj.has(v)) this.adj.set(v, new Set());
    this.adj.get(u).add(v);
    this.adj.get(v).add(u);
    return this;
  }
  neighbors(u) {
    return this.adj.has(u) ? [...this.adj.get(u)].sort((a, b) => a - b) : [];
  }
  hasPath(a, b) {
    if (a === b) return true;
    if (!this.adj.has(a) || !this.adj.has(b)) return false;
    const seen = new Set([a]);
    const queue = [a];
    while (queue.length) {
      const cur = queue.shift();
      for (const nb of this.adj.get(cur)) {
        if (nb === b) return true;
        if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }
      }
    }
    return false;
  }
}
`,
    ts: `class Graph {
  private adj: Map<number, Set<number>> = new Map();
  addEdge(u: number, v: number): this {
    if (!this.adj.has(u)) this.adj.set(u, new Set());
    if (!this.adj.has(v)) this.adj.set(v, new Set());
    this.adj.get(u)!.add(v);
    this.adj.get(v)!.add(u);
    return this;
  }
  neighbors(u: number): number[] {
    return this.adj.has(u) ? [...this.adj.get(u)!].sort((a, b) => a - b) : [];
  }
  hasPath(a: number, b: number): boolean {
    if (a === b) return true;
    if (!this.adj.has(a) || !this.adj.has(b)) return false;
    const seen = new Set([a]);
    const queue: number[] = [a];
    while (queue.length) {
      const cur = queue.shift() as number;
      for (const nb of this.adj.get(cur)!) {
        if (nb === b) return true;
        if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }
      }
    }
    return false;
  }
}
`,
  },
  xp: XP.buildLab,
};

const trieHarness = `
const t = new Trie();
assert("empty trie has nothing", !t.has("cat"));
t.insert("cat"); t.insert("car"); t.insert("dog");
assert("has cat", t.has("cat"));
assert("has car", t.has("car"));
assert("does not have the prefix ca as a word", !t.has("ca"));
assert("startsWith ca", t.startsWith("ca"));
assert("startsWith do", t.startsWith("do"));
assert("no words start with x", !t.startsWith("x"));
assert("does not have caterpillar", !t.has("caterpillar"));
t.insert("ca");
assert("now has ca", t.has("ca"));
`;

export const trieLab: BuildLab = {
  id: "lab-trie",
  exportName: "Trie",
  spec: `Implement a **Trie** (prefix tree) over lowercase words. Each node maps a character to a child node and marks whether a word ends there.

- \`insert(word)\` — add a word; return \`this\`.
- \`has(word)\` — whether the exact word was inserted.
- \`startsWith(prefix)\` — whether any inserted word begins with \`prefix\`.`,
  starterCode: {
    js: `class Trie {
  constructor() {
    this.root = { children: {}, end: false };
  }
  insert(word) {
    // walk/create nodes for each char; mark end; return this
  }
  has(word) {
    // true only if the final node marks a word end
  }
  startsWith(prefix) {
    // true if the prefix path exists
  }
}
`,
    ts: `interface TrieNode {
  children: Record<string, TrieNode>;
  end: boolean;
}
class Trie {
  private root: TrieNode;
  constructor() {
    this.root = { children: {}, end: false };
  }
  insert(word: string): this {
    return this;
  }
  has(word: string): boolean {
    return false;
  }
  startsWith(prefix: string): boolean {
    return false;
  }
}
`,
  },
  testHarness: { js: trieHarness, ts: trieHarness },
  referenceImplementation: {
    js: `class Trie {
  constructor() { this.root = { children: {}, end: false }; }
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = { children: {}, end: false };
      node = node.children[ch];
    }
    node.end = true;
    return this;
  }
  _find(str) {
    let node = this.root;
    for (const ch of str) {
      if (!node.children[ch]) return null;
      node = node.children[ch];
    }
    return node;
  }
  has(word) { const n = this._find(word); return n !== null && n.end; }
  startsWith(prefix) { return this._find(prefix) !== null; }
}
`,
    ts: `interface TrieNode { children: Record<string, TrieNode>; end: boolean; }
class Trie {
  private root: TrieNode = { children: {}, end: false };
  insert(word: string): this {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = { children: {}, end: false };
      node = node.children[ch];
    }
    node.end = true;
    return this;
  }
  private find(str: string): TrieNode | null {
    let node = this.root;
    for (const ch of str) {
      if (!node.children[ch]) return null;
      node = node.children[ch];
    }
    return node;
  }
  has(word: string): boolean { const n = this.find(word); return n !== null && n.end; }
  startsWith(prefix: string): boolean { return this.find(prefix) !== null; }
}
`,
  },
  xp: XP.buildLab,
};
