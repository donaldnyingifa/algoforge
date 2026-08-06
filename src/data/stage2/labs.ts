import type { BuildLab } from "@/types";
import { XP } from "@/lib/constants";

/**
 * The three Stage-2 batch-1 build labs. Each harness runs in the same scope as
 * the learner's class and reports via the injected `assert` / `expect`.
 * `testHarness` is plain JS (valid after the learner's code is transpiled), so
 * the js and ts strings are identical.
 */

const dynamicArrayHarness = `
const a = new DynamicArray();
expect("new array is empty", a.size(), 0);
a.push(10); a.push(20); a.push(30);
expect("size after three pushes", a.size(), 3);
expect("get index 0", a.get(0), 10);
expect("get index 2", a.get(2), 30);
a.set(1, 99);
expect("set overwrites element", a.get(1), 99);
assert("out-of-range get is undefined", a.get(5) === undefined);
a.push(40);
expect("size grows past initial capacity", a.size(), 4);
expect("get after growth", a.get(3), 40);
`;

export const arraysLab: BuildLab = {
  id: "lab-dynamic-array",
  exportName: "DynamicArray",
  spec: `Implement a **DynamicArray** class from scratch — the growable array that languages give you for free.

Provide these methods:
- \`push(value)\` — append to the end.
- \`get(index)\` — return the element at \`index\`, or \`undefined\` if out of range.
- \`set(index, value)\` — overwrite the element at \`index\`.
- \`size()\` — return the number of elements.

Use your own backing storage and track the count yourself — don't just wrap a native array method-for-method.`,
  starterCode: {
    js: `class DynamicArray {
  constructor() {
    // Set up backing storage and a size counter.
  }
  push(value) {
    // Append value at the end.
  }
  get(index) {
    // Return the element at index, or undefined.
  }
  set(index, value) {
    // Overwrite the element at index.
  }
  size() {
    // Return how many elements are stored.
  }
}
`,
    ts: `class DynamicArray {
  private data: Record<number, number>;
  private count: number;
  constructor() {
    this.data = {};
    this.count = 0;
  }
  push(value: number): void {
    // Append value at the end.
  }
  get(index: number): number | undefined {
    // Return the element at index, or undefined.
    return undefined;
  }
  set(index: number, value: number): void {
    // Overwrite the element at index.
  }
  size(): number {
    // Return how many elements are stored.
    return 0;
  }
}
`,
  },
  testHarness: { js: dynamicArrayHarness, ts: dynamicArrayHarness },
  referenceImplementation: {
    js: `class DynamicArray {
  constructor() { this.data = {}; this.count = 0; }
  push(value) { this.data[this.count] = value; this.count++; }
  get(index) { return index >= 0 && index < this.count ? this.data[index] : undefined; }
  set(index, value) { if (index >= 0 && index < this.count) this.data[index] = value; }
  size() { return this.count; }
}
`,
    ts: `class DynamicArray {
  private data: Record<number, number> = {};
  private count = 0;
  push(value: number): void { this.data[this.count] = value; this.count++; }
  get(index: number): number | undefined { return index >= 0 && index < this.count ? this.data[index] : undefined; }
  set(index: number, value: number): void { if (index >= 0 && index < this.count) this.data[index] = value; }
  size(): number { return this.count; }
}
`,
  },
  xp: XP.buildLab,
};

const stringBuilderHarness = `
const sb = new StringBuilder();
expect("empty length", sb.length(), 0);
expect("empty toString", sb.toString(), "");
sb.append("Hello");
sb.append(", ");
sb.append("world");
expect("built string", sb.toString(), "Hello, world");
expect("length matches", sb.length(), 12);
sb.clear();
expect("length after clear", sb.length(), 0);
sb.append("a").append("b").append("c");
expect("chained append", sb.toString(), "abc");
`;

export const stringsLab: BuildLab = {
  id: "lab-string-builder",
  exportName: "StringBuilder",
  spec: `Strings are immutable, so repeated \`+=\` rebuilds the whole string each time. A **StringBuilder** collects pieces and joins them once.

Implement a \`StringBuilder\` class with:
- \`append(str)\` — add a piece; **return \`this\`** so calls can chain.
- \`toString()\` — the concatenated result.
- \`length()\` — the length of the concatenated result.
- \`clear()\` — reset to empty; also return \`this\`.`,
  starterCode: {
    js: `class StringBuilder {
  constructor() {
    // Collect appended pieces here.
  }
  append(str) {
    // Store the piece and return this.
  }
  toString() {
    // Join the pieces.
  }
  length() {
    // Length of the joined result.
  }
  clear() {
    // Reset to empty and return this.
  }
}
`,
    ts: `class StringBuilder {
  private parts: string[];
  constructor() {
    this.parts = [];
  }
  append(str: string): this {
    // Store the piece and return this.
    return this;
  }
  toString(): string {
    // Join the pieces.
    return "";
  }
  length(): number {
    return 0;
  }
  clear(): this {
    // Reset to empty and return this.
    return this;
  }
}
`,
  },
  testHarness: { js: stringBuilderHarness, ts: stringBuilderHarness },
  referenceImplementation: {
    js: `class StringBuilder {
  constructor() { this.parts = []; }
  append(str) { this.parts.push(str); return this; }
  toString() { return this.parts.join(""); }
  length() { return this.toString().length; }
  clear() { this.parts = []; return this; }
}
`,
    ts: `class StringBuilder {
  private parts: string[] = [];
  append(str: string): this { this.parts.push(str); return this; }
  toString(): string { return this.parts.join(""); }
  length(): number { return this.toString().length; }
  clear(): this { this.parts = []; return this; }
}
`,
  },
  xp: XP.buildLab,
};

const linkedListHarness = `
const list = new LinkedList();
expect("empty size", list.size(), 0);
expect("empty toArray", list.toArray(), []);
list.append(1); list.append(2); list.append(3);
expect("toArray after appends", list.toArray(), [1, 2, 3]);
expect("size after appends", list.size(), 3);
expect("get middle", list.get(1), 2);
list.prepend(0);
expect("toArray after prepend", list.toArray(), [0, 1, 2, 3]);
expect("get first after prepend", list.get(0), 0);
expect("size after prepend", list.size(), 4);
assert("out-of-range get is undefined", list.get(10) === undefined);
`;

export const linkedListLab: BuildLab = {
  id: "lab-linked-list",
  exportName: "LinkedList",
  spec: `Build a singly **LinkedList** with nodes you allocate yourself — each node holds a value and a pointer to the next.

Implement:
- \`append(value)\` — add to the tail; return \`this\`.
- \`prepend(value)\` — add to the head; return \`this\`.
- \`get(index)\` — value at \`index\`, or \`undefined\` if out of range.
- \`size()\` — number of nodes.
- \`toArray()\` — values head-to-tail as a plain array.`,
  starterCode: {
    js: `class LinkedList {
  constructor() {
    // head pointer + size counter.
  }
  append(value) {
    // Add to the tail; return this.
  }
  prepend(value) {
    // Add to the head; return this.
  }
  get(index) {
    // Walk to index; return value or undefined.
  }
  size() {
    // Number of nodes.
  }
  toArray() {
    // Values head-to-tail.
  }
}
`,
    ts: `interface ListNode {
  value: number;
  next: ListNode | null;
}
class LinkedList {
  private head: ListNode | null;
  private count: number;
  constructor() {
    this.head = null;
    this.count = 0;
  }
  append(value: number): this {
    return this;
  }
  prepend(value: number): this {
    return this;
  }
  get(index: number): number | undefined {
    return undefined;
  }
  size(): number {
    return 0;
  }
  toArray(): number[] {
    return [];
  }
}
`,
  },
  testHarness: { js: linkedListHarness, ts: linkedListHarness },
  referenceImplementation: {
    js: `class LinkedList {
  constructor() { this.head = null; this.count = 0; }
  append(value) {
    const node = { value, next: null };
    if (!this.head) this.head = node;
    else { let cur = this.head; while (cur.next) cur = cur.next; cur.next = node; }
    this.count++;
    return this;
  }
  prepend(value) { this.head = { value, next: this.head }; this.count++; return this; }
  get(index) {
    if (index < 0 || index >= this.count) return undefined;
    let cur = this.head;
    for (let i = 0; i < index; i++) cur = cur.next;
    return cur.value;
  }
  size() { return this.count; }
  toArray() {
    const out = [];
    let cur = this.head;
    while (cur) { out.push(cur.value); cur = cur.next; }
    return out;
  }
}
`,
    ts: `interface ListNode { value: number; next: ListNode | null; }
class LinkedList {
  private head: ListNode | null = null;
  private count = 0;
  append(value: number): this {
    const node: ListNode = { value, next: null };
    if (!this.head) this.head = node;
    else { let cur = this.head; while (cur.next) cur = cur.next; cur.next = node; }
    this.count++;
    return this;
  }
  prepend(value: number): this { this.head = { value, next: this.head }; this.count++; return this; }
  get(index: number): number | undefined {
    if (index < 0 || index >= this.count) return undefined;
    let cur = this.head;
    for (let i = 0; i < index && cur; i++) cur = cur.next;
    return cur ? cur.value : undefined;
  }
  size(): number { return this.count; }
  toArray(): number[] {
    const out: number[] = [];
    let cur = this.head;
    while (cur) { out.push(cur.value); cur = cur.next; }
    return out;
  }
}
`,
  },
  xp: XP.buildLab,
};
