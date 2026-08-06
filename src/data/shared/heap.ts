/**
 * Canonical binary-heap source, shared as strings so later stages (Top-K,
 * Two Heaps, K-Way Merge, Expert) can prepend a working heap to a solution's
 * runnable code. This is the "reusable asset" the Heap build lab produces.
 *
 * They are plain JavaScript (valid TypeScript after transpilation), so a single
 * source works whether the learner's solution is authored in JS or TS.
 */

export const MIN_HEAP_SOURCE = `class MinHeap {
  constructor() { this.data = []; }
  size() { return this.data.length; }
  peek() { return this.data[0]; }
  push(v) { this.data.push(v); this._up(this.data.length - 1); return this; }
  pop() {
    const n = this.data.length;
    if (n === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop();
    if (n > 1) { this.data[0] = last; this._down(0); }
    return top;
  }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.data[p] <= this.data[i]) break;
      const t = this.data[p]; this.data[p] = this.data[i]; this.data[i] = t;
      i = p;
    }
  }
  _down(i) {
    const n = this.data.length;
    while (true) {
      let s = i; const l = 2 * i + 1; const r = 2 * i + 2;
      if (l < n && this.data[l] < this.data[s]) s = l;
      if (r < n && this.data[r] < this.data[s]) s = r;
      if (s === i) break;
      const t = this.data[s]; this.data[s] = this.data[i]; this.data[i] = t;
      i = s;
    }
  }
}`;

export const MAX_HEAP_SOURCE = `class MaxHeap {
  constructor() { this.data = []; }
  size() { return this.data.length; }
  peek() { return this.data[0]; }
  push(v) { this.data.push(v); this._up(this.data.length - 1); return this; }
  pop() {
    const n = this.data.length;
    if (n === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop();
    if (n > 1) { this.data[0] = last; this._down(0); }
    return top;
  }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.data[p] >= this.data[i]) break;
      const t = this.data[p]; this.data[p] = this.data[i]; this.data[i] = t;
      i = p;
    }
  }
  _down(i) {
    const n = this.data.length;
    while (true) {
      let s = i; const l = 2 * i + 1; const r = 2 * i + 2;
      if (l < n && this.data[l] > this.data[s]) s = l;
      if (r < n && this.data[r] > this.data[s]) s = r;
      if (s === i) break;
      const t = this.data[s]; this.data[s] = this.data[i]; this.data[i] = t;
      i = s;
    }
  }
}`;
