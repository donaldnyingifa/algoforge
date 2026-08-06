import type { BuildLab } from "@/types";
import { XP } from "@/lib/constants";

/** Stage-2 batch-2 build labs: Stack, Deque, HashMap, BST. */

const stackHarness = `
const s = new Stack();
assert("new stack is empty", s.isEmpty());
expect("size 0", s.size(), 0);
s.push(1); s.push(2); s.push(3);
expect("size after pushes", s.size(), 3);
expect("peek top", s.peek(), 3);
expect("pop returns top", s.pop(), 3);
expect("size after pop", s.size(), 2);
expect("peek after pop", s.peek(), 2);
assert("not empty", !s.isEmpty());
s.pop(); s.pop();
assert("empty again", s.isEmpty());
assert("pop on empty is undefined", s.pop() === undefined);
`;

export const stackLab: BuildLab = {
  id: "lab-stack",
  exportName: "Stack",
  spec: `Implement a **Stack** — last-in, first-out. All operations should be O(1).

Methods:
- \`push(value)\` — add to the top; return \`this\`.
- \`pop()\` — remove and return the top, or \`undefined\` if empty.
- \`peek()\` — the top value without removing it.
- \`size()\` — number of items.
- \`isEmpty()\` — \`true\` when there are no items.`,
  starterCode: {
    js: `class Stack {
  constructor() {
    // backing storage
  }
  push(value) { /* return this */ }
  pop() { /* remove + return top */ }
  peek() { /* top without removing */ }
  size() { /* count */ }
  isEmpty() { /* true if empty */ }
}
`,
    ts: `class Stack {
  private items: number[];
  constructor() { this.items = []; }
  push(value: number): this { return this; }
  pop(): number | undefined { return undefined; }
  peek(): number | undefined { return undefined; }
  size(): number { return 0; }
  isEmpty(): boolean { return true; }
}
`,
  },
  testHarness: { js: stackHarness, ts: stackHarness },
  referenceImplementation: {
    js: `class Stack {
  constructor() { this.items = []; }
  push(value) { this.items.push(value); return this; }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  size() { return this.items.length; }
  isEmpty() { return this.items.length === 0; }
}
`,
    ts: `class Stack {
  private items: number[] = [];
  push(value: number): this { this.items.push(value); return this; }
  pop(): number | undefined { return this.items.pop(); }
  peek(): number | undefined { return this.items[this.items.length - 1]; }
  size(): number { return this.items.length; }
  isEmpty(): boolean { return this.items.length === 0; }
}
`,
  },
  xp: XP.buildLab,
};

const dequeHarness = `
const d = new Deque();
expect("empty size", d.size(), 0);
d.pushBack(2); d.pushBack(3); d.pushFront(1);
expect("size", d.size(), 3);
expect("peekFront", d.peekFront(), 1);
expect("peekBack", d.peekBack(), 3);
expect("popFront", d.popFront(), 1);
expect("popBack", d.popBack(), 3);
expect("size after pops", d.size(), 1);
expect("remaining front", d.peekFront(), 2);
assert("popFront empties", d.popFront() === 2 && d.size() === 0);
assert("popBack on empty is undefined", d.popBack() === undefined);
`;

export const dequeLab: BuildLab = {
  id: "lab-deque",
  exportName: "Deque",
  spec: `Implement a double-ended queue, **Deque**, supporting inserts and removals at both ends.

Methods:
- \`pushFront(value)\` / \`pushBack(value)\` — add to a side; return \`this\`.
- \`popFront()\` / \`popBack()\` — remove and return from a side, or \`undefined\` if empty.
- \`peekFront()\` / \`peekBack()\` — inspect without removing.
- \`size()\` — number of items.`,
  starterCode: {
    js: `class Deque {
  constructor() {
    // backing storage
  }
  pushFront(value) { /* return this */ }
  pushBack(value) { /* return this */ }
  popFront() { /* remove + return front */ }
  popBack() { /* remove + return back */ }
  peekFront() { }
  peekBack() { }
  size() { }
}
`,
    ts: `class Deque {
  private items: number[];
  constructor() { this.items = []; }
  pushFront(value: number): this { return this; }
  pushBack(value: number): this { return this; }
  popFront(): number | undefined { return undefined; }
  popBack(): number | undefined { return undefined; }
  peekFront(): number | undefined { return undefined; }
  peekBack(): number | undefined { return undefined; }
  size(): number { return 0; }
}
`,
  },
  testHarness: { js: dequeHarness, ts: dequeHarness },
  referenceImplementation: {
    js: `class Deque {
  constructor() { this.items = []; }
  pushFront(value) { this.items.unshift(value); return this; }
  pushBack(value) { this.items.push(value); return this; }
  popFront() { return this.items.shift(); }
  popBack() { return this.items.pop(); }
  peekFront() { return this.items[0]; }
  peekBack() { return this.items[this.items.length - 1]; }
  size() { return this.items.length; }
}
`,
    ts: `class Deque {
  private items: number[] = [];
  pushFront(value: number): this { this.items.unshift(value); return this; }
  pushBack(value: number): this { this.items.push(value); return this; }
  popFront(): number | undefined { return this.items.shift(); }
  popBack(): number | undefined { return this.items.pop(); }
  peekFront(): number | undefined { return this.items[0]; }
  peekBack(): number | undefined { return this.items[this.items.length - 1]; }
  size(): number { return this.items.length; }
}
`,
  },
  xp: XP.buildLab,
};

const hashMapHarness = `
const m = new HashMap();
expect("empty size", m.size(), 0);
assert("missing key not present", !m.has("a"));
m.set("a", 1); m.set("b", 2); m.set("c", 3);
expect("size after sets", m.size(), 3);
expect("get a", m.get("a"), 1);
assert("has b", m.has("b"));
m.set("a", 99);
expect("update value", m.get("a"), 99);
expect("size unchanged on update", m.size(), 3);
assert("delete c returns true", m.delete("c") === true);
assert("c is gone", !m.has("c"));
expect("size after delete", m.size(), 2);
assert("get missing is undefined", m.get("z") === undefined);
`;

export const hashMapLab: BuildLab = {
  id: "lab-hashmap",
  exportName: "HashMap",
  spec: `Implement a **HashMap** (string keys → number values) from scratch using an array of buckets and your own hash function. Handle collisions by chaining within a bucket.

Methods:
- \`set(key, value)\` — insert or update; return \`this\`.
- \`get(key)\` — the value, or \`undefined\`.
- \`has(key)\` — whether the key exists.
- \`delete(key)\` — remove it; return \`true\` if it existed, else \`false\`.
- \`size()\` — number of stored keys.`,
  starterCode: {
    js: `class HashMap {
  constructor() {
    // an array of buckets + a count
  }
  _hash(key) {
    // fold the characters into an index within your bucket array
  }
  set(key, value) { /* return this */ }
  get(key) { }
  has(key) { }
  delete(key) { /* return true/false */ }
  size() { }
}
`,
    ts: `class HashMap {
  private buckets: Array<Array<[string, number]>>;
  private count: number;
  constructor() {
    this.buckets = new Array(16);
    this.count = 0;
  }
  private _hash(key: string): number { return 0; }
  set(key: string, value: number): this { return this; }
  get(key: string): number | undefined { return undefined; }
  has(key: string): boolean { return false; }
  delete(key: string): boolean { return false; }
  size(): number { return 0; }
}
`,
  },
  testHarness: { js: hashMapHarness, ts: hashMapHarness },
  referenceImplementation: {
    js: `class HashMap {
  constructor() { this.buckets = new Array(16); this.count = 0; }
  _hash(key) {
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    return h % this.buckets.length;
  }
  set(key, value) {
    const i = this._hash(key);
    if (!this.buckets[i]) this.buckets[i] = [];
    for (const pair of this.buckets[i]) if (pair[0] === key) { pair[1] = value; return this; }
    this.buckets[i].push([key, value]); this.count++; return this;
  }
  get(key) {
    const b = this.buckets[this._hash(key)];
    if (b) for (const pair of b) if (pair[0] === key) return pair[1];
    return undefined;
  }
  has(key) {
    const b = this.buckets[this._hash(key)];
    if (b) for (const pair of b) if (pair[0] === key) return true;
    return false;
  }
  delete(key) {
    const b = this.buckets[this._hash(key)];
    if (b) for (let j = 0; j < b.length; j++) if (b[j][0] === key) { b.splice(j, 1); this.count--; return true; }
    return false;
  }
  size() { return this.count; }
}
`,
    ts: `class HashMap {
  private buckets: Array<Array<[string, number]>> = new Array(16);
  private count = 0;
  private _hash(key: string): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    return h % this.buckets.length;
  }
  set(key: string, value: number): this {
    const i = this._hash(key);
    if (!this.buckets[i]) this.buckets[i] = [];
    for (const pair of this.buckets[i]) if (pair[0] === key) { pair[1] = value; return this; }
    this.buckets[i].push([key, value]); this.count++; return this;
  }
  get(key: string): number | undefined {
    const b = this.buckets[this._hash(key)];
    if (b) for (const pair of b) if (pair[0] === key) return pair[1];
    return undefined;
  }
  has(key: string): boolean {
    const b = this.buckets[this._hash(key)];
    if (b) for (const pair of b) if (pair[0] === key) return true;
    return false;
  }
  delete(key: string): boolean {
    const b = this.buckets[this._hash(key)];
    if (b) for (let j = 0; j < b.length; j++) if (b[j][0] === key) { b.splice(j, 1); this.count--; return true; }
    return false;
  }
  size(): number { return this.count; }
}
`,
  },
  xp: XP.buildLab,
};

const bstHarness = `
const t = new BST();
expect("empty size", t.size(), 0);
expect("empty inOrder", t.inOrder(), []);
[5, 3, 8, 1, 4, 7, 9].forEach((v) => t.insert(v));
expect("size", t.size(), 7);
expect("inOrder is sorted", t.inOrder(), [1, 3, 4, 5, 7, 8, 9]);
assert("contains 7", t.contains(7));
assert("does not contain 6", !t.contains(6));
t.insert(5);
expect("duplicate ignored", t.size(), 7);
t.insert(2);
expect("inOrder after insert", t.inOrder(), [1, 2, 3, 4, 5, 7, 8, 9]);
`;

export const bstLab: BuildLab = {
  id: "lab-bst",
  exportName: "BST",
  spec: `Implement a **Binary Search Tree** of numbers. Each node's left subtree holds smaller values, its right subtree larger ones; ignore duplicate inserts.

Methods:
- \`insert(value)\` — place the value; return \`this\`.
- \`contains(value)\` — whether the value is present.
- \`inOrder()\` — an array of values in sorted (in-order) order.
- \`size()\` — number of distinct values.`,
  starterCode: {
    js: `class BST {
  constructor() {
    // root pointer + count
  }
  insert(value) { /* return this */ }
  contains(value) { }
  inOrder() { /* sorted values */ }
  size() { }
}
`,
    ts: `interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
class BST {
  private root: TreeNode | null;
  private count: number;
  constructor() {
    this.root = null;
    this.count = 0;
  }
  insert(value: number): this { return this; }
  contains(value: number): boolean { return false; }
  inOrder(): number[] { return []; }
  size(): number { return 0; }
}
`,
  },
  testHarness: { js: bstHarness, ts: bstHarness },
  referenceImplementation: {
    js: `class BST {
  constructor() { this.root = null; this.count = 0; }
  insert(value) {
    const node = { value, left: null, right: null };
    if (!this.root) { this.root = node; this.count++; return this; }
    let cur = this.root;
    while (true) {
      if (value < cur.value) { if (!cur.left) { cur.left = node; this.count++; break; } cur = cur.left; }
      else if (value > cur.value) { if (!cur.right) { cur.right = node; this.count++; break; } cur = cur.right; }
      else break;
    }
    return this;
  }
  contains(value) {
    let cur = this.root;
    while (cur) {
      if (value === cur.value) return true;
      cur = value < cur.value ? cur.left : cur.right;
    }
    return false;
  }
  inOrder() {
    const out = [];
    const walk = (n) => { if (!n) return; walk(n.left); out.push(n.value); walk(n.right); };
    walk(this.root);
    return out;
  }
  size() { return this.count; }
}
`,
    ts: `interface TreeNode { value: number; left: TreeNode | null; right: TreeNode | null; }
class BST {
  private root: TreeNode | null = null;
  private count = 0;
  insert(value: number): this {
    const node: TreeNode = { value, left: null, right: null };
    if (!this.root) { this.root = node; this.count++; return this; }
    let cur: TreeNode = this.root;
    while (true) {
      if (value < cur.value) { if (!cur.left) { cur.left = node; this.count++; break; } cur = cur.left; }
      else if (value > cur.value) { if (!cur.right) { cur.right = node; this.count++; break; } cur = cur.right; }
      else break;
    }
    return this;
  }
  contains(value: number): boolean {
    let cur = this.root;
    while (cur) {
      if (value === cur.value) return true;
      cur = value < cur.value ? cur.left : cur.right;
    }
    return false;
  }
  inOrder(): number[] {
    const out: number[] = [];
    const walk = (n: TreeNode | null) => { if (!n) return; walk(n.left); out.push(n.value); walk(n.right); };
    walk(this.root);
    return out;
  }
  size(): number { return this.count; }
}
`,
  },
  xp: XP.buildLab,
};
