import type { BuildLab, Module } from "@/types";
import { XP } from "@/lib/constants";

const S = "sd-s2";

/*
 * System Design — Build the Blocks (sd-s2), batch 2: a consistent-hashing ring
 * and a Bloom filter. Both harnesses test invariant PROPERTIES (no false
 * negatives, minimal disruption on node removal, low false-positive rate) rather
 * than exact hash placements, so any correct implementation passes regardless of
 * the specific hash function used.
 */

/* ------------------------------------------------------------------ */
/* Consistent-hashing ring                                             */
/* ------------------------------------------------------------------ */

const hashRingHarness = `
const ring = new HashRing();
ring.addNode("A");
for (const k of ["k1", "k2", "user:42", "session-xyz"]) assert("single node maps all: " + k, ring.getNode(k) === "A");
ring.addNode("B");
ring.addNode("C");
const keys = [];
for (let i = 0; i < 300; i++) keys.push("key-" + i);
const before = {};
for (const k of keys) before[k] = ring.getNode(k);
for (const k of keys) assert("deterministic: " + k, ring.getNode(k) === before[k]);
const counts = { A: 0, B: 0, C: 0 };
for (const k of keys) { assert("member: " + k, before[k] === "A" || before[k] === "B" || before[k] === "C"); counts[before[k]]++; }
assert("A holds some keys", counts.A > 0);
assert("B holds some keys", counts.B > 0);
assert("C holds some keys", counts.C > 0);
// Minimal disruption: removing C must not move keys that weren't on C.
ring.removeNode("C");
let moved = 0, kept = 0;
for (const k of keys) {
  const now = ring.getNode(k);
  assert("after remove, member: " + k, now === "A" || now === "B");
  if (before[k] === "C") moved++;
  else { assert("non-C key unchanged: " + k, now === before[k]); kept++; }
}
assert("some keys were on C", moved > 0);
assert("non-C keys were untouched", kept > 0);
// Re-adding C is safe.
ring.addNode("C");
for (const k of keys) assert("re-add member: " + k, ring.getNode(k) === "A" || ring.getNode(k) === "B" || ring.getNode(k) === "C");
`;

const hashRingLab: BuildLab = {
  id: "lab-sd-hash-ring",
  exportName: "HashRing",
  spec: `Implement a **consistent-hashing ring**. Physical nodes are placed on a hash ring (each with several **virtual nodes** for balance). A key is owned by the first node found clockwise from the key's hash. Adding or removing a node should only remap the keys near it — not reshuffle everything (that's the whole point of consistent hashing).

- \`constructor(virtualNodes = 100)\` — replicas per physical node.
- \`addNode(name)\` — place the node (and its virtual replicas) on the ring; return \`this\`.
- \`removeNode(name)\` — remove the node and its replicas; return \`this\`.
- \`getNode(key)\` — return the owning node's name, or \`null\` if the ring is empty.

Use any deterministic string hash (e.g. FNV-1a). Hash each virtual node as \`name + "#" + i\`, keep the ring sorted by hash, and binary-search clockwise (wrapping to the first entry).`,
  starterCode: {
    js: `class HashRing {
  constructor(virtualNodes = 100) {
    // store vnode count; keep a sorted ring of { hash, node }
  }
  addNode(name) {
    // add virtualNodes replicas hashed from name + "#" + i, keep ring sorted
  }
  removeNode(name) {
    // drop every ring entry belonging to name
  }
  getNode(key) {
    // hash the key; return the first node clockwise (wrap around); null if empty
  }
}
`,
    ts: `class HashRing {
  constructor(virtualNodes: number = 100) {
    // store vnode count; keep a sorted ring of { hash, node }
  }
  addNode(name: string): this {
    return this;
  }
  removeNode(name: string): this {
    return this;
  }
  getNode(key: string): string | null {
    return null;
  }
}
`,
  },
  testHarness: { js: hashRingHarness, ts: hashRingHarness },
  referenceImplementation: {
    js: `class HashRing {
  constructor(virtualNodes = 100) {
    this.vnodes = virtualNodes;
    this.ring = [];
    this.nodes = new Set();
  }
  _hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  addNode(name) {
    if (this.nodes.has(name)) return this;
    this.nodes.add(name);
    for (let i = 0; i < this.vnodes; i++) this.ring.push({ hash: this._hash(name + "#" + i), node: name });
    this.ring.sort((a, b) => a.hash - b.hash);
    return this;
  }
  removeNode(name) {
    if (!this.nodes.has(name)) return this;
    this.nodes.delete(name);
    this.ring = this.ring.filter((e) => e.node !== name);
    return this;
  }
  getNode(key) {
    if (this.ring.length === 0) return null;
    const h = this._hash(key);
    let lo = 0, hi = this.ring.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (this.ring[mid].hash < h) lo = mid + 1; else hi = mid; }
    return this.ring[lo === this.ring.length ? 0 : lo].node;
  }
}
`,
    ts: `interface RingEntry { hash: number; node: string; }
class HashRing {
  private vnodes: number;
  private ring: RingEntry[] = [];
  private nodes = new Set<string>();
  constructor(virtualNodes: number = 100) {
    this.vnodes = virtualNodes;
  }
  private hash(str: string): number {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  addNode(name: string): this {
    if (this.nodes.has(name)) return this;
    this.nodes.add(name);
    for (let i = 0; i < this.vnodes; i++) this.ring.push({ hash: this.hash(name + "#" + i), node: name });
    this.ring.sort((a, b) => a.hash - b.hash);
    return this;
  }
  removeNode(name: string): this {
    if (!this.nodes.has(name)) return this;
    this.nodes.delete(name);
    this.ring = this.ring.filter((e) => e.node !== name);
    return this;
  }
  getNode(key: string): string | null {
    if (this.ring.length === 0) return null;
    const h = this.hash(key);
    let lo = 0, hi = this.ring.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (this.ring[mid].hash < h) lo = mid + 1; else hi = mid; }
    return this.ring[lo === this.ring.length ? 0 : lo].node;
  }
}
`,
  },
  xp: XP.buildLab,
};

/* ------------------------------------------------------------------ */
/* Bloom filter                                                        */
/* ------------------------------------------------------------------ */

const bloomHarness = `
const bf = new BloomFilter(10000, 4);
for (const x of ["a", "b", "hello", "user:1"]) assert("empty filter: absent " + x, bf.mightContain(x) === false);
const added = ["apple", "banana", "cherry", "date", "egg", "fig", "grape"];
for (const x of added) bf.add(x);
for (const x of added) assert("no false negative: " + x, bf.mightContain(x) === true);
let falses = 0;
for (let i = 0; i < 200; i++) if (!bf.mightContain("absent-" + i)) falses++;
assert("low false-positive rate (>=190/200 absent report false)", falses >= 190);
const small = new BloomFilter(24, 3);
const items = ["x1", "x2", "x3"];
for (const x of items) small.add(x);
for (const x of items) assert("small filter: no false negative " + x, small.mightContain(x) === true);
`;

const bloomLab: BuildLab = {
  id: "lab-sd-bloom-filter",
  exportName: "BloomFilter",
  spec: `Implement a **Bloom filter** — a compact, probabilistic set membership test. It can say "definitely not present" or "probably present"; it never gives a **false negative**, but may give a false positive.

- \`constructor(size, numHashes)\` — a bit array of \`size\` bits and \`numHashes\` hash functions.
- \`add(item)\` — set the bits at each hashed position; return \`this\`.
- \`mightContain(item)\` — return \`true\` only if *every* hashed bit is set (possibly a false positive); \`false\` means definitely absent.

Derive \`numHashes\` positions with **double hashing**: compute two base hashes \`h1\`, \`h2\` and use \`(h1 + i·h2) mod size\` for \`i = 0..numHashes-1\`. Any two independent deterministic hashes work (e.g. FNV-1a and djb2).`,
  starterCode: {
    js: `class BloomFilter {
  constructor(size, numHashes) {
    // bit array of \`size\`, remember numHashes
  }
  add(item) {
    // set every hashed bit; return this
  }
  mightContain(item) {
    // true only if all hashed bits are set
  }
}
`,
    ts: `class BloomFilter {
  constructor(size: number, numHashes: number) {
    // bit array of \`size\`, remember numHashes
  }
  add(item: string): this {
    return this;
  }
  mightContain(item: string): boolean {
    return false;
  }
}
`,
  },
  testHarness: { js: bloomHarness, ts: bloomHarness },
  referenceImplementation: {
    js: `class BloomFilter {
  constructor(size, numHashes) {
    this.size = size;
    this.numHashes = numHashes;
    this.bits = new Uint8Array(size);
  }
  _h1(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  _h2(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = (Math.imul(h, 33) + str.charCodeAt(i)) >>> 0;
    return (h >>> 0) || 1;
  }
  _positions(item) {
    const a = this._h1(item), b = this._h2(item);
    const res = [];
    for (let i = 0; i < this.numHashes; i++) res.push(((a + Math.imul(i, b)) >>> 0) % this.size);
    return res;
  }
  add(item) {
    for (const idx of this._positions(item)) this.bits[idx] = 1;
    return this;
  }
  mightContain(item) {
    for (const idx of this._positions(item)) if (!this.bits[idx]) return false;
    return true;
  }
}
`,
    ts: `class BloomFilter {
  private size: number;
  private numHashes: number;
  private bits: Uint8Array;
  constructor(size: number, numHashes: number) {
    this.size = size;
    this.numHashes = numHashes;
    this.bits = new Uint8Array(size);
  }
  private h1(str: string): number {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  private h2(str: string): number {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = (Math.imul(h, 33) + str.charCodeAt(i)) >>> 0;
    return (h >>> 0) || 1;
  }
  private positions(item: string): number[] {
    const a = this.h1(item), b = this.h2(item);
    const res: number[] = [];
    for (let i = 0; i < this.numHashes; i++) res.push(((a + Math.imul(i, b)) >>> 0) % this.size);
    return res;
  }
  add(item: string): this {
    for (const idx of this.positions(item)) this.bits[idx] = 1;
    return this;
  }
  mightContain(item: string): boolean {
    for (const idx of this.positions(item)) if (!this.bits[idx]) return false;
    return true;
  }
}
`,
  },
  xp: XP.buildLab,
};

/* ------------------------------------------------------------------ */
/* Modules                                                             */
/* ------------------------------------------------------------------ */

const hashRingModule: Module = {
  id: "m-sd-lab-hash-ring",
  stageId: S,
  title: "Build Lab — Consistent Hashing Ring",
  kind: "buildLab",
  summary:
    "Implement a consistent-hashing ring — how distributed caches and databases assign keys to nodes with minimal reshuffling.",
  lessonSections: [
    {
      heading: "The reshuffling problem",
      body: `Sharding by \`hash(key) % N\` works until you change **N**. Add or remove a node and *almost every* key remaps to a different shard — a catastrophic cache-miss storm and data movement. **Consistent hashing** fixes this.

Picture a ring of hash values 0 … 2³²−1. Each node is placed at several positions on the ring (its **virtual nodes**, for even spread). A key hashes to a point on the ring and is owned by the **first node clockwise**. Now when a node leaves, only the keys that fell in its arcs move — to the next node clockwise — and everything else stays put. Adding a node likewise only steals keys from its immediate neighbours.

\`\`\`text
Ring (clockwise):  …—[A]—key1—[B]—key2—[C]—key3—[A]—…
Remove B  ->  key1 now maps to C; key2/key3 unchanged.
\`\`\``,
    },
    {
      heading: "Why virtual nodes",
      body: `With one position per node, load can be lopsided — one node might own a huge arc. Giving each physical node many **virtual nodes** (replicas hashed from \`name#0\`, \`name#1\`, …) spreads its ownership into many small arcs, smoothing the distribution and making rebalancing gentle when membership changes. This is exactly how systems like Cassandra, DynamoDB, and memcached clients place data. Build the ring below — the harness checks the defining property: removing a node leaves untouched keys where they were.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  buildLab: hashRingLab,
  prerequisiteModuleIds: ["m-sd-building-blocks"],
};

const bloomModule: Module = {
  id: "m-sd-lab-bloom-filter",
  stageId: S,
  title: "Build Lab — Bloom Filter",
  kind: "buildLab",
  summary:
    "Implement a Bloom filter — a tiny probabilistic set that answers 'definitely not' or 'probably yes' with no false negatives.",
  lessonSections: [
    {
      heading: "Trading certainty for space",
      body: `A **Bloom filter** answers set membership using a fraction of the memory a real set would need — by allowing a controlled **false-positive** rate. It stores no elements, just a bit array. To \`add\` an item, hash it with \`k\` functions and set those \`k\` bits. To test membership, check those same \`k\` bits: if any is 0 the item is **definitely absent**; if all are 1 it's **probably present** (they might have been set by other items).

The key guarantee: **no false negatives**. If you added it, \`mightContain\` will always say yes. That makes Bloom filters perfect as a cheap first gate.`,
    },
    {
      heading: "Where it earns its keep",
      body: `Databases like Cassandra and HBase put a Bloom filter in front of each SSTable so a read can skip files that definitely don't contain the key — avoiding disk I/O. CDNs and browsers use them to check "have we seen this URL?"; crawlers use them to avoid revisiting pages. The false-positive rate is tunable by \`size\` and number of hashes (\`k\`) relative to the number of items — bigger array and well-chosen \`k\` drive it down. Implement it with **double hashing** below; the harness verifies added items always report present and that absent items rarely do.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  buildLab: bloomLab,
  prerequisiteModuleIds: ["m-sd-building-blocks"],
};

export const sdLabModules2: Module[] = [hashRingModule, bloomModule];
