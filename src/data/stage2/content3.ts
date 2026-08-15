import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";
import { heapLab, graphLab, trieLab } from "./labs3";
import { MIN_HEAP_SOURCE, MAX_HEAP_SOURCE } from "@/data/shared/heap";

const S = "dsa-s2";

const drafts: ProblemDraft[] = [
  /* -------------------- Heaps / Priority Queues -------------------- */
  {
    id: "hp-k-smallest",
    slug: "k-smallest",
    title: "K Smallest",
    difficulty: "medium",
    statement: "Return the `k` smallest values of the list, sorted ascending.",
    examples: [
      { input: "[5,3,1,2,4], 2", output: "[1,2]" },
      { input: "[1], 1", output: "[1]" },
      { input: "[9,8,7], 3", output: "[7,8,9]" },
    ],
    constraints: ["0 <= k <= values.length <= 10000"],
    functionName: "kSmallest",
    starter: {
      js: "function kSmallest(nums, k) {\n  // The k smallest values, sorted ascending.\n}\n",
      ts: "function kSmallest(nums: number[], k: number): number[] {\n  // The k smallest values, sorted ascending.\n  return [];\n}\n",
    },
    visible: [
      { args: [[5, 3, 1, 2, 4], 2], expected: [1, 2] },
      { args: [[1], 1], expected: [1] },
      { args: [[9, 8, 7], 3], expected: [7, 8, 9] },
    ],
    hidden: [
      { args: [[3, 3, 3], 2], expected: [3, 3] },
      { args: [[5, 4, 3, 2, 1], 0], expected: [] },
      { args: [[-1, -2, 0], 2], expected: [-2, -1] },
      { args: [[10, 1, 10, 1], 2], expected: [1, 1] },
      { args: [[4, 2, 5, 1, 3], 3], expected: [1, 2, 3] },
      { args: [[7], 1], expected: [7] },
    ],
    hints: [
      "Sorting the whole list gives the smallest values at the front.",
      "For large lists a min-heap lets you pop the k smallest without fully sorting.",
      "Push all values into a MinHeap, then pop k times.",
    ],
    solutions: [
      {
        label: "Sort and slice",
        approach: "Sort ascending and take the first k.",
        js: "function kSmallest(nums, k) {\n  return [...nums].sort((a, b) => a - b).slice(0, k);\n}\n",
        ts: "function kSmallest(nums: number[], k: number): number[] {\n  return [...nums].sort((a, b) => a - b).slice(0, k);\n}\n",
        commentedCode: {
          js: "function kSmallest(nums, k) {\n  // Sort a copy so the caller's array is not mutated.\n  const sorted = [...nums].sort((a, b) => a - b);\n  // The first k entries are the k smallest values in ascending order.\n  return sorted.slice(0, k);\n}\n",
          ts: "function kSmallest(nums: number[], k: number): number[] {\n  // Sort a copy so the caller's array is not mutated.\n  const sorted = [...nums].sort((a, b) => a - b);\n  // The first k entries are the k smallest values in ascending order.\n  return sorted.slice(0, k);\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Min-heap",
        approach: "Heapify all values, then pop the smallest k.",
        js: `${MIN_HEAP_SOURCE}\nfunction kSmallest(nums, k) {\n  const h = new MinHeap();\n  for (const n of nums) h.push(n);\n  const out = [];\n  for (let i = 0; i < k && h.size() > 0; i++) out.push(h.pop());\n  return out;\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction kSmallest(nums: number[], k: number): number[] {\n  const h = new MinHeap();\n  for (const n of nums) h.push(n);\n  const out: number[] = [];\n  for (let i = 0; i < k && h.size() > 0; i++) out.push(h.pop());\n  return out;\n}\n`,
        commentedCode: {
          js: `// MinHeap always exposes the smallest stored value at its root.\n${MIN_HEAP_SOURCE}\nfunction kSmallest(nums, k) {\n  const heap = new MinHeap();\n  // Load every value so repeated pops produce ascending order.\n  for (const value of nums) heap.push(value);\n  const smallest = [];\n  // Pop at most k values, also handling k = 0 and an empty input.\n  for (let i = 0; i < k && heap.size() > 0; i++) smallest.push(heap.pop());\n  return smallest;\n}\n`,
          ts: `// MinHeap always exposes the smallest stored value at its root.\n${MIN_HEAP_SOURCE}\nfunction kSmallest(nums: number[], k: number): number[] {\n  const heap = new MinHeap();\n  // Load every value so repeated pops produce ascending order.\n  for (const value of nums) heap.push(value);\n  const smallest: number[] = [];\n  // Pop at most k values, also handling k = 0 and an empty input.\n  for (let i = 0; i < k && heap.size() > 0; i++) smallest.push(heap.pop());\n  return smallest;\n}\n`,
        },
        time: "O(n + k log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "hp-is-min-heap",
    slug: "is-min-heap",
    title: "Is It a Min-Heap?",
    difficulty: "easy",
    statement:
      "An array represents a binary tree where node `i`'s children are at `2i+1` and `2i+2`. Return `true` if it satisfies the min-heap property (every parent ≤ its children).",
    examples: [
      { input: "[1,2,3]", output: "true" },
      { input: "[3,2,1]", output: "false" },
      { input: "[]", output: "true" },
    ],
    constraints: ["0 <= arr.length <= 10000"],
    functionName: "isMinHeap",
    starter: {
      js: "function isMinHeap(arr) {\n  // True if every parent <= its children.\n}\n",
      ts: "function isMinHeap(arr: number[]): boolean {\n  // True if every parent <= its children.\n  return false;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: true },
      { args: [[3, 2, 1]], expected: false },
      { args: [[]], expected: true },
    ],
    hidden: [
      { args: [[1]], expected: true },
      { args: [[1, 3, 2, 5]], expected: true },
      { args: [[2, 1, 3]], expected: false },
      { args: [[1, 2, 3, 4, 5, 6, 7]], expected: true },
      { args: [[1, 5, 2, 6, 7, 3, 4]], expected: true },
      { args: [[10, 20, 15, 30, 40, 5]], expected: false },
    ],
    hints: [
      "Only parents with children matter — indices 0 up to floor(n/2)-1.",
      "For each parent index i, compare arr[i] against arr[2i+1] and arr[2i+2] when they exist.",
      "if (left < n && arr[i] > arr[left]) return false; likewise for the right child.",
    ],
    solutions: [
      {
        label: "Check each parent",
        approach: "Verify the heap property against present children.",
        js: "function isMinHeap(arr) {\n  const n = arr.length;\n  for (let i = 0; i < n; i++) {\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (l < n && arr[i] > arr[l]) return false;\n    if (r < n && arr[i] > arr[r]) return false;\n  }\n  return true;\n}\n",
        ts: "function isMinHeap(arr: number[]): boolean {\n  const n = arr.length;\n  for (let i = 0; i < n; i++) {\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (l < n && arr[i]! > arr[l]!) return false;\n    if (r < n && arr[i]! > arr[r]!) return false;\n  }\n  return true;\n}\n",
        commentedCode: {
          js: "function isMinHeap(arr) {\n  const n = arr.length;\n  // Check every array position; leaves simply have no valid children.\n  for (let i = 0; i < n; i++) {\n    // These formulas locate i's children in an array-backed binary tree.\n    const left = 2 * i + 1, right = 2 * i + 2;\n    // Any child smaller than its parent violates the min-heap property.\n    if (left < n && arr[i] > arr[left]) return false;\n    if (right < n && arr[i] > arr[right]) return false;\n  }\n  return true;\n}\n",
          ts: "function isMinHeap(arr: number[]): boolean {\n  const n = arr.length;\n  // Check every array position; leaves simply have no valid children.\n  for (let i = 0; i < n; i++) {\n    // These formulas locate i's children in an array-backed binary tree.\n    const left = 2 * i + 1, right = 2 * i + 2;\n    // Any child smaller than its parent violates the min-heap property.\n    if (left < n && arr[i]! > arr[left]!) return false;\n    if (right < n && arr[i]! > arr[right]!) return false;\n  }\n  return true;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Only real parents",
        approach: "Iterate only the internal nodes that actually have children.",
        js: "function isMinHeap(arr) {\n  const n = arr.length;\n  for (let i = 0; i < Math.floor(n / 2); i++) {\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (arr[i] > arr[l]) return false;\n    if (r < n && arr[i] > arr[r]) return false;\n  }\n  return true;\n}\n",
        ts: "function isMinHeap(arr: number[]): boolean {\n  const n = arr.length;\n  for (let i = 0; i < Math.floor(n / 2); i++) {\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (arr[i]! > arr[l]!) return false;\n    if (r < n && arr[i]! > arr[r]!) return false;\n  }\n  return true;\n}\n",
        commentedCode: {
          js: "function isMinHeap(arr) {\n  const n = arr.length;\n  // Only the first floor(n / 2) entries can have children.\n  for (let i = 0; i < Math.floor(n / 2); i++) {\n    const left = 2 * i + 1, right = 2 * i + 2;\n    // Every real parent has a left child, so compare it directly.\n    if (arr[i] > arr[left]) return false;\n    // Odd-length heaps may leave the final parent without a right child.\n    if (right < n && arr[i] > arr[right]) return false;\n  }\n  return true;\n}\n",
          ts: "function isMinHeap(arr: number[]): boolean {\n  const n = arr.length;\n  // Only the first floor(n / 2) entries can have children.\n  for (let i = 0; i < Math.floor(n / 2); i++) {\n    const left = 2 * i + 1, right = 2 * i + 2;\n    // Every real parent has a left child, so compare it directly.\n    if (arr[i]! > arr[left]!) return false;\n    // Odd-length heaps may leave the final parent without a right child.\n    if (right < n && arr[i]! > arr[right]!) return false;\n  }\n  return true;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "hp-kth-largest",
    slug: "kth-largest",
    title: "Kth Largest",
    difficulty: "medium",
    statement: "Return the k-th largest value in the list (1-indexed, counting duplicates).",
    examples: [
      { input: "[3,2,1,5,6,4], 2", output: "5" },
      { input: "[1], 1", output: "1" },
      { input: "[7,7,7], 2", output: "7" },
    ],
    constraints: ["1 <= k <= values.length <= 10000"],
    functionName: "kthLargest",
    starter: {
      js: "function kthLargest(nums, k) {\n  // The k-th largest value.\n}\n",
      ts: "function kthLargest(nums: number[], k: number): number {\n  // The k-th largest value.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
      { args: [[1], 1], expected: 1 },
      { args: [[7, 7, 7], 2], expected: 7 },
    ],
    hidden: [
      { args: [[1, 2], 1], expected: 2 },
      { args: [[1, 2], 2], expected: 1 },
      { args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4 },
      { args: [[-1, -2, -3], 1], expected: -1 },
      { args: [[5, 5, 4, 4], 3], expected: 4 },
      { args: [[10], 1], expected: 10 },
    ],
    hints: [
      "The k-th largest sits at index k-1 once the list is sorted descending.",
      "A size-k min-heap keeps the k largest seen so far; its top is the answer.",
      "Push each value; if the heap grows past k, pop the smallest. The final peek is the k-th largest.",
    ],
    solutions: [
      {
        label: "Sort descending",
        approach: "Sort largest-first and index k-1.",
        js: "function kthLargest(nums, k) {\n  return [...nums].sort((a, b) => b - a)[k - 1];\n}\n",
        ts: "function kthLargest(nums: number[], k: number): number {\n  return [...nums].sort((a, b) => b - a)[k - 1]!;\n}\n",
        commentedCode: {
          js: "function kthLargest(nums, k) {\n  // Sort a copy from largest to smallest without changing nums.\n  const descending = [...nums].sort((a, b) => b - a);\n  // k is one-based, while array indices are zero-based.\n  return descending[k - 1];\n}\n",
          ts: "function kthLargest(nums: number[], k: number): number {\n  // Sort a copy from largest to smallest without changing nums.\n  const descending = [...nums].sort((a, b) => b - a);\n  // k is one-based, while array indices are zero-based.\n  return descending[k - 1]!;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Size-k min-heap",
        approach: "Keep only the k largest values; the heap's minimum is the answer.",
        js: `${MIN_HEAP_SOURCE}\nfunction kthLargest(nums, k) {\n  const h = new MinHeap();\n  for (const n of nums) {\n    h.push(n);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
        ts: `${MIN_HEAP_SOURCE}\nfunction kthLargest(nums: number[], k: number): number {\n  const h = new MinHeap();\n  for (const n of nums) {\n    h.push(n);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
        commentedCode: {
          js: `// MinHeap keeps the smallest retained candidate at its root.\n${MIN_HEAP_SOURCE}\nfunction kthLargest(nums, k) {\n  const heap = new MinHeap();\n  for (const value of nums) {\n    heap.push(value);\n    // Discard the smallest whenever more than k candidates are retained.\n    if (heap.size() > k) heap.pop();\n  }\n  // Exactly the k largest remain, so their minimum is the kth largest overall.\n  return heap.peek();\n}\n`,
          ts: `// MinHeap keeps the smallest retained candidate at its root.\n${MIN_HEAP_SOURCE}\nfunction kthLargest(nums: number[], k: number): number {\n  const heap = new MinHeap();\n  for (const value of nums) {\n    heap.push(value);\n    // Discard the smallest whenever more than k candidates are retained.\n    if (heap.size() > k) heap.pop();\n  }\n  // Exactly the k largest remain, so their minimum is the kth largest overall.\n  return heap.peek();\n}\n`,
        },
        time: "O(n log k)",
        space: "O(k)",
      },
    ],
  },
  {
    id: "hp-last-stone-weight",
    slug: "last-stone-weight",
    title: "Last Stone Weight",
    difficulty: "medium",
    statement:
      "Repeatedly smash the two heaviest stones together: if they differ, the difference goes back; if equal, both vanish. Return the weight of the last remaining stone, or 0 if none remain.",
    examples: [
      { input: "[2,7,4,1,8,1]", output: "1" },
      { input: "[1]", output: "1" },
      { input: "[3,3]", output: "0" },
    ],
    constraints: ["0 <= stones.length <= 10000", "0 <= stones[i]"],
    functionName: "lastStoneWeight",
    starter: {
      js: "function lastStoneWeight(stones) {\n  // Smash the two heaviest until one or none remain.\n}\n",
      ts: "function lastStoneWeight(stones: number[]): number {\n  // Smash the two heaviest until one or none remain.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 7, 4, 1, 8, 1]], expected: 1 },
      { args: [[1]], expected: 1 },
      { args: [[3, 3]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[1, 1]], expected: 0 },
      { args: [[10]], expected: 10 },
      { args: [[2, 2, 1]], expected: 1 },
      { args: [[5, 4, 3, 2, 1]], expected: 1 },
      { args: [[9, 3, 2, 10]], expected: 0 },
    ],
    hints: [
      "You repeatedly need the two largest values — that's a max-priority-queue.",
      "A max-heap gives O(log n) access to the heaviest stones each round.",
      "Pop two; if they differ push the difference; repeat until at most one remains.",
    ],
    solutions: [
      {
        label: "Sort each round",
        approach: "Re-sort and take the two largest until fewer than two remain.",
        js: "function lastStoneWeight(stones) {\n  const s = [...stones];\n  while (s.length > 1) {\n    s.sort((a, b) => a - b);\n    const a = s.pop(), b = s.pop();\n    if (a !== b) s.push(a - b);\n  }\n  return s.length ? s[0] : 0;\n}\n",
        ts: "function lastStoneWeight(stones: number[]): number {\n  const s = [...stones];\n  while (s.length > 1) {\n    s.sort((a, b) => a - b);\n    const a = s.pop()!, b = s.pop()!;\n    if (a !== b) s.push(a - b);\n  }\n  return s.length ? s[0]! : 0;\n}\n",
        commentedCode: {
          js: "function lastStoneWeight(stones) {\n  // Work on a copy so the input array remains unchanged.\n  const remaining = [...stones];\n  while (remaining.length > 1) {\n    // Sorting ascending places the two heaviest stones at the end.\n    remaining.sort((a, b) => a - b);\n    const heaviest = remaining.pop(), nextHeaviest = remaining.pop();\n    // Equal stones both vanish; otherwise return their positive difference.\n    if (heaviest !== nextHeaviest) remaining.push(heaviest - nextHeaviest);\n  }\n  // An empty collection means every stone was destroyed.\n  return remaining.length ? remaining[0] : 0;\n}\n",
          ts: "function lastStoneWeight(stones: number[]): number {\n  // Work on a copy so the input array remains unchanged.\n  const remaining = [...stones];\n  while (remaining.length > 1) {\n    // Sorting ascending places the two heaviest stones at the end.\n    remaining.sort((a, b) => a - b);\n    const heaviest = remaining.pop()!, nextHeaviest = remaining.pop()!;\n    // Equal stones both vanish; otherwise return their positive difference.\n    if (heaviest !== nextHeaviest) remaining.push(heaviest - nextHeaviest);\n  }\n  // An empty collection means every stone was destroyed.\n  return remaining.length ? remaining[0]! : 0;\n}\n",
        },
        time: "O(n² log n)",
        space: "O(n)",
      },
      {
        label: "Max-heap",
        approach: "A max-heap yields the two heaviest stones in O(log n) per round.",
        js: `${MAX_HEAP_SOURCE}\nfunction lastStoneWeight(stones) {\n  const h = new MaxHeap();\n  for (const s of stones) h.push(s);\n  while (h.size() > 1) {\n    const a = h.pop(), b = h.pop();\n    if (a !== b) h.push(a - b);\n  }\n  return h.size() ? h.peek() : 0;\n}\n`,
        ts: `${MAX_HEAP_SOURCE}\nfunction lastStoneWeight(stones: number[]): number {\n  const h = new MaxHeap();\n  for (const s of stones) h.push(s);\n  while (h.size() > 1) {\n    const a = h.pop(), b = h.pop();\n    if (a !== b) h.push(a - b);\n  }\n  return h.size() ? h.peek() : 0;\n}\n`,
        commentedCode: {
          js: `// MaxHeap always exposes the heaviest remaining stone at its root.\n${MAX_HEAP_SOURCE}\nfunction lastStoneWeight(stones) {\n  const heap = new MaxHeap();\n  // Load every stone into the priority queue.\n  for (const stone of stones) heap.push(stone);\n  while (heap.size() > 1) {\n    const heaviest = heap.pop(), nextHeaviest = heap.pop();\n    // Equal stones vanish; only a nonzero difference returns to the heap.\n    if (heaviest !== nextHeaviest) heap.push(heaviest - nextHeaviest);\n  }\n  return heap.size() ? heap.peek() : 0;\n}\n`,
          ts: `// MaxHeap always exposes the heaviest remaining stone at its root.\n${MAX_HEAP_SOURCE}\nfunction lastStoneWeight(stones: number[]): number {\n  const heap = new MaxHeap();\n  // Load every stone into the priority queue.\n  for (const stone of stones) heap.push(stone);\n  while (heap.size() > 1) {\n    const heaviest = heap.pop(), nextHeaviest = heap.pop();\n    // Equal stones vanish; only a nonzero difference returns to the heap.\n    if (heaviest !== nextHeaviest) heap.push(heaviest - nextHeaviest);\n  }\n  return heap.size() ? heap.peek() : 0;\n}\n`,
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },

  /* -------------------- Graphs -------------------- */
  {
    id: "gr-degree",
    slug: "node-degree",
    title: "Node Degree",
    difficulty: "easy",
    statement:
      "Given an undirected graph as a list of `[u, v]` edges, return the degree of `node` — how many edges touch it.",
    examples: [
      { input: "[[0,1],[0,2],[1,2]], 0", output: "2" },
      { input: "[], 0", output: "0" },
      { input: "[[0,1]], 1", output: "1" },
    ],
    constraints: ["0 <= edges.length <= 10000", "no self-loops"],
    functionName: "nodeDegree",
    starter: {
      js: "function nodeDegree(edges, node) {\n  // Number of edges incident to node.\n}\n",
      ts: "function nodeDegree(edges: number[][], node: number): number {\n  // Number of edges incident to node.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[[0, 1], [0, 2], [1, 2]], 0], expected: 2 },
      { args: [[], 0], expected: 0 },
      { args: [[[0, 1]], 1], expected: 1 },
    ],
    hidden: [
      { args: [[[1, 2], [2, 3]], 2], expected: 2 },
      { args: [[[0, 1], [0, 2], [0, 3]], 0], expected: 3 },
      { args: [[[1, 2]], 0], expected: 0 },
      { args: [[[5, 6], [6, 7], [7, 5]], 5], expected: 2 },
      { args: [[[0, 1], [1, 0]], 0], expected: 2 },
      { args: [[[9, 8]], 9], expected: 1 },
    ],
    hints: [
      "An edge touches `node` if the node is either endpoint.",
      "Count the edges where u === node or v === node.",
      "return edges.filter(([u, v]) => u === node || v === node).length.",
    ],
    solutions: [
      {
        label: "Filter incident edges",
        approach: "Count edges that include the node as an endpoint.",
        js: "function nodeDegree(edges, node) {\n  return edges.filter(([u, v]) => u === node || v === node).length;\n}\n",
        ts: "function nodeDegree(edges: number[][], node: number): number {\n  return edges.filter(([u, v]) => u === node || v === node).length;\n}\n",
        commentedCode: {
          js: "function nodeDegree(edges, node) {\n  // An undirected edge is incident to node when either endpoint matches.\n  const incident = edges.filter(([u, v]) => u === node || v === node);\n  // The degree is the number of incident edges, including duplicate edges.\n  return incident.length;\n}\n",
          ts: "function nodeDegree(edges: number[][], node: number): number {\n  // An undirected edge is incident to node when either endpoint matches.\n  const incident = edges.filter(([u, v]) => u === node || v === node);\n  // The degree is the number of incident edges, including duplicate edges.\n  return incident.length;\n}\n",
        },
        time: "O(E)",
        space: "O(1)",
      },
      {
        label: "Accumulate",
        approach: "Walk the edges and tally matches.",
        js: "function nodeDegree(edges, node) {\n  let d = 0;\n  for (const [u, v] of edges) if (u === node || v === node) d++;\n  return d;\n}\n",
        ts: "function nodeDegree(edges: number[][], node: number): number {\n  let d = 0;\n  for (const [u, v] of edges) if (u === node || v === node) d++;\n  return d;\n}\n",
        commentedCode: {
          js: "function nodeDegree(edges, node) {\n  let degree = 0;\n  // Inspect both endpoints of every undirected edge.\n  for (const [u, v] of edges) {\n    if (u === node || v === node) degree++;\n  }\n  return degree;\n}\n",
          ts: "function nodeDegree(edges: number[][], node: number): number {\n  let degree = 0;\n  // Inspect both endpoints of every undirected edge.\n  for (const [u, v] of edges) {\n    if (u === node || v === node) degree++;\n  }\n  return degree;\n}\n",
        },
        time: "O(E)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "gr-has-path",
    slug: "graph-has-path",
    title: "Path Exists",
    difficulty: "medium",
    statement:
      "Given `n` nodes (0..n-1) and a list of undirected `[u, v]` edges, return `true` if there is a path from `src` to `dst`.",
    examples: [
      { input: "5, [[0,1],[1,2],[3,4]], 0, 2", output: "true" },
      { input: "5, [[0,1],[1,2],[3,4]], 0, 4", output: "false" },
      { input: "1, [], 0, 0", output: "true" },
    ],
    constraints: ["1 <= n <= 10000", "0 <= edges.length <= 20000"],
    functionName: "hasPathEdges",
    starter: {
      js: "function hasPathEdges(n, edges, src, dst) {\n  // True if src can reach dst.\n}\n",
      ts: "function hasPathEdges(n: number, edges: number[][], src: number, dst: number): boolean {\n  // True if src can reach dst.\n  return false;\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [1, 2], [3, 4]], 0, 2], expected: true },
      { args: [5, [[0, 1], [1, 2], [3, 4]], 0, 4], expected: false },
      { args: [1, [], 0, 0], expected: true },
    ],
    hidden: [
      { args: [3, [], 0, 1], expected: false },
      { args: [2, [[0, 1]], 0, 1], expected: true },
      { args: [4, [[0, 1], [2, 3]], 1, 0], expected: true },
      { args: [4, [[0, 1], [2, 3]], 0, 3], expected: false },
      { args: [3, [[0, 1], [1, 2]], 0, 2], expected: true },
      { args: [2, [[0, 1]], 1, 1], expected: true },
    ],
    hints: [
      "Build an adjacency list, then explore outward from src.",
      "A breadth-first or depth-first search marking visited nodes finds any reachable dst.",
      "Seed a queue with src; for each node visit unvisited neighbours until you meet dst.",
    ],
    solutions: [
      {
        label: "BFS",
        approach: "Explore reachable nodes level by level from src.",
        js: "function hasPathEdges(n, edges, src, dst) {\n  if (src === dst) return true;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  const queue = [src];\n  while (queue.length) {\n    const cur = queue.shift();\n    for (const nb of adj[cur]) {\n      if (nb === dst) return true;\n      if (!seen[nb]) { seen[nb] = true; queue.push(nb); }\n    }\n  }\n  return false;\n}\n",
        ts: "function hasPathEdges(n: number, edges: number[][], src: number, dst: number): boolean {\n  if (src === dst) return true;\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  const queue: number[] = [src];\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    for (const nb of adj[cur]!) {\n      if (nb === dst) return true;\n      if (!seen[nb]) { seen[nb] = true; queue.push(nb); }\n    }\n  }\n  return false;\n}\n",
        commentedCode: {
          js: "function hasPathEdges(n, edges, src, dst) {\n  // A node always has a zero-edge path to itself.\n  if (src === dst) return true;\n  // Store both directions because the graph is undirected.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  const queue = [src];\n  // BFS explores every node reachable from src.\n  while (queue.length) {\n    const current = queue.shift();\n    for (const neighbor of adj[current]) {\n      if (neighbor === dst) return true;\n      // Mark on enqueue so each node enters the queue only once.\n      if (!seen[neighbor]) { seen[neighbor] = true; queue.push(neighbor); }\n    }\n  }\n  return false;\n}\n",
          ts: "function hasPathEdges(n: number, edges: number[][], src: number, dst: number): boolean {\n  // A node always has a zero-edge path to itself.\n  if (src === dst) return true;\n  // Store both directions because the graph is undirected.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  const queue: number[] = [src];\n  // BFS explores every node reachable from src.\n  while (queue.length) {\n    const current = queue.shift() as number;\n    for (const neighbor of adj[current]!) {\n      if (neighbor === dst) return true;\n      // Mark on enqueue so each node enters the queue only once.\n      if (!seen[neighbor]) { seen[neighbor] = true; queue.push(neighbor); }\n    }\n  }\n  return false;\n}\n",
        },
        time: "O(V + E)",
        space: "O(V + E)",
      },
      {
        label: "Union-Find",
        approach: "Union every edge; src reaches dst iff they share a root.",
        js: "function hasPathEdges(n, edges, src, dst) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  for (const [u, v] of edges) { parent[find(u)] = find(v); }\n  return find(src) === find(dst);\n}\n",
        ts: "function hasPathEdges(n: number, edges: number[][], src: number, dst: number): boolean {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]!]!; x = parent[x]!; } return x; };\n  for (const [u, v] of edges) { parent[find(u!)] = find(v!); }\n  return find(src) === find(dst);\n}\n",
        commentedCode: {
          js: "function hasPathEdges(n, edges, src, dst) {\n  // Initially every node is the root of its own component.\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => {\n    // Follow parents to the root and halve the path along the way.\n    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }\n    return x;\n  };\n  // Each edge merges the components containing its endpoints.\n  for (const [u, v] of edges) parent[find(u)] = find(v);\n  // A path exists exactly when both nodes end in the same component.\n  return find(src) === find(dst);\n}\n",
          ts: "function hasPathEdges(n: number, edges: number[][], src: number, dst: number): boolean {\n  // Initially every node is the root of its own component.\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => {\n    // Follow parents to the root and halve the path along the way.\n    while (parent[x] !== x) { parent[x] = parent[parent[x]!]!; x = parent[x]!; }\n    return x;\n  };\n  // Each edge merges the components containing its endpoints.\n  for (const [u, v] of edges) parent[find(u!)] = find(v!);\n  // A path exists exactly when both nodes end in the same component.\n  return find(src) === find(dst);\n}\n",
        },
        time: "O((V + E) α)",
        space: "O(V)",
      },
    ],
  },
  {
    id: "gr-count-components",
    slug: "count-components",
    title: "Connected Components",
    difficulty: "medium",
    statement:
      "Given `n` nodes (0..n-1) and undirected `[u, v]` edges, return the number of connected components.",
    examples: [
      { input: "5, [[0,1],[1,2],[3,4]]", output: "2" },
      { input: "3, []", output: "3" },
      { input: "1, []", output: "1" },
    ],
    constraints: ["1 <= n <= 10000", "0 <= edges.length <= 20000"],
    functionName: "countComponents",
    starter: {
      js: "function countComponents(n, edges) {\n  // Number of connected components.\n}\n",
      ts: "function countComponents(n: number, edges: number[][]): number {\n  // Number of connected components.\n  return 0;\n}\n",
    },
    visible: [
      { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
      { args: [3, []], expected: 3 },
      { args: [1, []], expected: 1 },
    ],
    hidden: [
      { args: [4, [[0, 1], [2, 3]]], expected: 2 },
      { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: 1 },
      { args: [6, [[0, 1], [2, 3], [4, 5]]], expected: 3 },
      { args: [2, [[0, 1]]], expected: 1 },
      { args: [5, []], expected: 5 },
      { args: [3, [[0, 1]]], expected: 2 },
    ],
    hints: [
      "Start with n components and merge whenever an edge joins two different groups.",
      "Union-Find: each successful union of distinct roots reduces the count by one.",
      "count = n; for [u,v]: if find(u) !== find(v) then union and count--.",
    ],
    solutions: [
      {
        label: "Union-Find",
        approach: "Merge endpoints; each distinct merge drops the component count.",
        js: "function countComponents(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru !== rv) { parent[ru] = rv; count--; }\n  }\n  return count;\n}\n",
        ts: "function countComponents(n: number, edges: number[][]): number {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]!]!; x = parent[x]!; } return x; };\n  let count = n;\n  for (const [u, v] of edges) {\n    const ru = find(u!), rv = find(v!);\n    if (ru !== rv) { parent[ru] = rv; count--; }\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function countComponents(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => {\n    // Path halving shortens future walks from a node to its root.\n    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }\n    return x;\n  };\n  // With no edges, each node is a separate component.\n  let count = n;\n  for (const [u, v] of edges) {\n    const rootU = find(u), rootV = find(v);\n    // Only an edge joining two different roots reduces the total.\n    if (rootU !== rootV) { parent[rootU] = rootV; count--; }\n  }\n  return count;\n}\n",
          ts: "function countComponents(n: number, edges: number[][]): number {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => {\n    // Path halving shortens future walks from a node to its root.\n    while (parent[x] !== x) { parent[x] = parent[parent[x]!]!; x = parent[x]!; }\n    return x;\n  };\n  // With no edges, each node is a separate component.\n  let count = n;\n  for (const [u, v] of edges) {\n    const rootU = find(u!), rootV = find(v!);\n    // Only an edge joining two different roots reduces the total.\n    if (rootU !== rootV) { parent[rootU] = rootV; count--; }\n  }\n  return count;\n}\n",
        },
        time: "O((V + E) α)",
        space: "O(V)",
      },
      {
        label: "DFS flood fill",
        approach: "Count the number of DFS launches needed to visit every node.",
        js: "function countComponents(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    count++;\n    const stack = [i];\n    seen[i] = true;\n    while (stack.length) {\n      const cur = stack.pop();\n      for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; stack.push(nb); }\n    }\n  }\n  return count;\n}\n",
        ts: "function countComponents(n: number, edges: number[][]): number {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    count++;\n    const stack = [i];\n    seen[i] = true;\n    while (stack.length) {\n      const cur = stack.pop() as number;\n      for (const nb of adj[cur]!) if (!seen[nb]) { seen[nb] = true; stack.push(nb); }\n    }\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function countComponents(n, edges) {\n  // Build an undirected adjacency list for graph traversal.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let count = 0;\n  for (let node = 0; node < n; node++) {\n    if (seen[node]) continue;\n    // An unseen node starts one previously uncounted component.\n    count++;\n    const stack = [node];\n    seen[node] = true;\n    // Flood-fill this entire component before looking for another.\n    while (stack.length) {\n      const current = stack.pop();\n      for (const neighbor of adj[current]) {\n        if (!seen[neighbor]) { seen[neighbor] = true; stack.push(neighbor); }\n      }\n    }\n  }\n  return count;\n}\n",
          ts: "function countComponents(n: number, edges: number[][]): number {\n  // Build an undirected adjacency list for graph traversal.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  let count = 0;\n  for (let node = 0; node < n; node++) {\n    if (seen[node]) continue;\n    // An unseen node starts one previously uncounted component.\n    count++;\n    const stack = [node];\n    seen[node] = true;\n    // Flood-fill this entire component before looking for another.\n    while (stack.length) {\n      const current = stack.pop() as number;\n      for (const neighbor of adj[current]!) {\n        if (!seen[neighbor]) { seen[neighbor] = true; stack.push(neighbor); }\n      }\n    }\n  }\n  return count;\n}\n",
        },
        time: "O(V + E)",
        space: "O(V + E)",
      },
    ],
  },
  {
    id: "gr-shortest-path",
    slug: "shortest-path-unweighted",
    title: "Shortest Path (Unweighted)",
    difficulty: "medium",
    statement:
      "Given `n` nodes (0..n-1) and undirected `[u, v]` edges, return the number of edges on the shortest path from `src` to `dst`, or -1 if unreachable.",
    examples: [
      { input: "4, [[0,1],[1,2],[2,3]], 0, 3", output: "3" },
      { input: "4, [[0,1],[1,2],[2,3]], 0, 0", output: "0" },
      { input: "3, [], 0, 2", output: "-1" },
    ],
    constraints: ["1 <= n <= 10000", "0 <= edges.length <= 20000"],
    functionName: "shortestPath",
    starter: {
      js: "function shortestPath(n, edges, src, dst) {\n  // Fewest edges from src to dst, or -1.\n}\n",
      ts: "function shortestPath(n: number, edges: number[][], src: number, dst: number): number {\n  // Fewest edges from src to dst, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [4, [[0, 1], [1, 2], [2, 3]], 0, 3], expected: 3 },
      { args: [4, [[0, 1], [1, 2], [2, 3]], 0, 0], expected: 0 },
      { args: [3, [], 0, 2], expected: -1 },
    ],
    hidden: [
      { args: [2, [[0, 1]], 0, 1], expected: 1 },
      { args: [5, [[0, 1], [0, 2], [2, 3], [3, 4]], 0, 4], expected: 3 },
      { args: [4, [[0, 1], [2, 3]], 0, 3], expected: -1 },
      { args: [3, [[0, 1], [1, 2], [0, 2]], 0, 2], expected: 1 },
      { args: [1, [], 0, 0], expected: 0 },
      { args: [4, [[0, 1], [1, 2], [2, 3], [0, 3]], 0, 3], expected: 1 },
    ],
    hints: [
      "In an unweighted graph, breadth-first search finds the fewest-edge path.",
      "Track the distance to each node as you expand BFS layers from src.",
      "Enqueue src at distance 0; each neighbour gets the current distance + 1.",
    ],
    solutions: [
      {
        label: "BFS distances",
        approach: "BFS layer by layer, recording the first time each node is reached.",
        js: "function shortestPath(n, edges, src, dst) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const dist = new Array(n).fill(-1);\n  dist[src] = 0;\n  const queue = [src];\n  while (queue.length) {\n    const cur = queue.shift();\n    if (cur === dst) return dist[cur];\n    for (const nb of adj[cur]) if (dist[nb] === -1) { dist[nb] = dist[cur] + 1; queue.push(nb); }\n  }\n  return dist[dst];\n}\n",
        ts: "function shortestPath(n: number, edges: number[][], src: number, dst: number): number {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const dist = new Array(n).fill(-1);\n  dist[src] = 0;\n  const queue: number[] = [src];\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    if (cur === dst) return dist[cur];\n    for (const nb of adj[cur]!) if (dist[nb] === -1) { dist[nb] = dist[cur] + 1; queue.push(nb); }\n  }\n  return dist[dst];\n}\n",
        commentedCode: {
          js: "function shortestPath(n, edges, src, dst) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  // -1 means the node has not yet been reached.\n  const distance = new Array(n).fill(-1);\n  distance[src] = 0;\n  const queue = [src];\n  // BFS reaches nodes in nondecreasing distance from src.\n  while (queue.length) {\n    const current = queue.shift();\n    if (current === dst) return distance[current];\n    for (const neighbor of adj[current]) {\n      if (distance[neighbor] === -1) {\n        distance[neighbor] = distance[current] + 1;\n        queue.push(neighbor);\n      }\n    }\n  }\n  // An unreached destination keeps its -1 sentinel.\n  return distance[dst];\n}\n",
          ts: "function shortestPath(n: number, edges: number[][], src: number, dst: number): number {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  // -1 means the node has not yet been reached.\n  const distance = new Array(n).fill(-1);\n  distance[src] = 0;\n  const queue: number[] = [src];\n  // BFS reaches nodes in nondecreasing distance from src.\n  while (queue.length) {\n    const current = queue.shift() as number;\n    if (current === dst) return distance[current];\n    for (const neighbor of adj[current]!) {\n      if (distance[neighbor] === -1) {\n        distance[neighbor] = distance[current] + 1;\n        queue.push(neighbor);\n      }\n    }\n  }\n  // An unreached destination keeps its -1 sentinel.\n  return distance[dst];\n}\n",
        },
        time: "O(V + E)",
        space: "O(V + E)",
      },
      {
        label: "BFS with a visited layer count",
        approach: "Expand whole layers, incrementing depth until dst appears.",
        js: "function shortestPath(n, edges, src, dst) {\n  if (src === dst) return 0;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  let layer = [src], depth = 0;\n  while (layer.length) {\n    depth++;\n    const next = [];\n    for (const cur of layer) for (const nb of adj[cur]) {\n      if (nb === dst) return depth;\n      if (!seen[nb]) { seen[nb] = true; next.push(nb); }\n    }\n    layer = next;\n  }\n  return -1;\n}\n",
        ts: "function shortestPath(n: number, edges: number[][], src: number, dst: number): number {\n  if (src === dst) return 0;\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  let layer: number[] = [src], depth = 0;\n  while (layer.length) {\n    depth++;\n    const next: number[] = [];\n    for (const cur of layer) for (const nb of adj[cur]!) {\n      if (nb === dst) return depth;\n      if (!seen[nb]) { seen[nb] = true; next.push(nb); }\n    }\n    layer = next;\n  }\n  return -1;\n}\n",
        commentedCode: {
          js: "function shortestPath(n, edges, src, dst) {\n  if (src === dst) return 0;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  let layer = [src], depth = 0;\n  // Each completed layer represents one more edge from src.\n  while (layer.length) {\n    depth++;\n    const next = [];\n    for (const current of layer) {\n      for (const neighbor of adj[current]) {\n        if (neighbor === dst) return depth;\n        // Queue each node once for the following BFS layer.\n        if (!seen[neighbor]) { seen[neighbor] = true; next.push(neighbor); }\n      }\n    }\n    layer = next;\n  }\n  return -1;\n}\n",
          ts: "function shortestPath(n: number, edges: number[][], src: number, dst: number): number {\n  if (src === dst) return 0;\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  let layer: number[] = [src], depth = 0;\n  // Each completed layer represents one more edge from src.\n  while (layer.length) {\n    depth++;\n    const next: number[] = [];\n    for (const current of layer) {\n      for (const neighbor of adj[current]!) {\n        if (neighbor === dst) return depth;\n        // Queue each node once for the following BFS layer.\n        if (!seen[neighbor]) { seen[neighbor] = true; next.push(neighbor); }\n      }\n    }\n    layer = next;\n  }\n  return -1;\n}\n",
        },
        time: "O(V + E)",
        space: "O(V + E)",
      },
    ],
  },

  /* -------------------- Tries -------------------- */
  {
    id: "tr-count-prefix",
    slug: "count-with-prefix",
    title: "Count Words with Prefix",
    difficulty: "easy",
    statement: "Return how many of the given words start with `prefix`.",
    examples: [
      { input: '["apple","app","apricot"], "ap"', output: "3" },
      { input: '[], "a"', output: "0" },
      { input: '["dog","cat"], "do"', output: "1" },
    ],
    constraints: ["0 <= words.length <= 10000"],
    functionName: "countWithPrefix",
    starter: {
      js: "function countWithPrefix(words, prefix) {\n  // How many words start with prefix.\n}\n",
      ts: "function countWithPrefix(words: string[], prefix: string): number {\n  // How many words start with prefix.\n  return 0;\n}\n",
    },
    visible: [
      { args: [["apple", "app", "apricot"], "ap"], expected: 3 },
      { args: [[], "a"], expected: 0 },
      { args: [["dog", "cat"], "do"], expected: 1 },
    ],
    hidden: [
      { args: [["a"], "a"], expected: 1 },
      { args: [["a"], "b"], expected: 0 },
      { args: [["abc", "abd", "xyz"], "ab"], expected: 2 },
      { args: [["hello"], "hello"], expected: 1 },
      { args: [["hi", "his", "history"], "his"], expected: 2 },
      { args: [["x", "y"], ""], expected: 2 },
    ],
    hints: [
      "A word qualifies when it begins with the prefix.",
      "String.startsWith answers each membership test directly.",
      "return words.filter((w) => w.startsWith(prefix)).length.",
    ],
    solutions: [
      {
        label: "Filter by startsWith",
        approach: "Count words beginning with the prefix.",
        js: "function countWithPrefix(words, prefix) {\n  return words.filter((w) => w.startsWith(prefix)).length;\n}\n",
        ts: "function countWithPrefix(words: string[], prefix: string): number {\n  return words.filter((w) => w.startsWith(prefix)).length;\n}\n",
        commentedCode: {
          js: "function countWithPrefix(words, prefix) {\n  // Keep exactly the words whose first characters match the full prefix.\n  const matches = words.filter((word) => word.startsWith(prefix));\n  return matches.length;\n}\n",
          ts: "function countWithPrefix(words: string[], prefix: string): number {\n  // Keep exactly the words whose first characters match the full prefix.\n  const matches = words.filter((word) => word.startsWith(prefix));\n  return matches.length;\n}\n",
        },
        time: "O(n·p)",
        space: "O(1)",
      },
      {
        label: "Accumulate",
        approach: "Tally matches in a loop.",
        js: "function countWithPrefix(words, prefix) {\n  let c = 0;\n  for (const w of words) if (w.startsWith(prefix)) c++;\n  return c;\n}\n",
        ts: "function countWithPrefix(words: string[], prefix: string): number {\n  let c = 0;\n  for (const w of words) if (w.startsWith(prefix)) c++;\n  return c;\n}\n",
        commentedCode: {
          js: "function countWithPrefix(words, prefix) {\n  let count = 0;\n  // Test each word independently and tally every prefix match.\n  for (const word of words) {\n    if (word.startsWith(prefix)) count++;\n  }\n  return count;\n}\n",
          ts: "function countWithPrefix(words: string[], prefix: string): number {\n  let count = 0;\n  // Test each word independently and tally every prefix match.\n  for (const word of words) {\n    if (word.startsWith(prefix)) count++;\n  }\n  return count;\n}\n",
        },
        time: "O(n·p)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "tr-longest-common-prefix",
    slug: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "medium",
    statement:
      "Return the longest string that is a prefix of every word in the list, or an empty string if there is none.",
    examples: [
      { input: '["flower","flow","flight"]', output: '"fl"' },
      { input: '["dog","racecar","car"]', output: '""' },
      { input: "[]", output: '""' },
    ],
    constraints: ["0 <= words.length <= 10000"],
    functionName: "longestCommonPrefix",
    starter: {
      js: "function longestCommonPrefix(words) {\n  // The longest prefix shared by all words.\n}\n",
      ts: "function longestCommonPrefix(words: string[]): string {\n  // The longest prefix shared by all words.\n  return '';\n}\n",
    },
    visible: [
      { args: [["flower", "flow", "flight"]], expected: "fl" },
      { args: [["dog", "racecar", "car"]], expected: "" },
      { args: [[]], expected: "" },
    ],
    hidden: [
      { args: [["a"]], expected: "a" },
      { args: [["abc", "abc"]], expected: "abc" },
      { args: [["abc", "ab"]], expected: "ab" },
      { args: [["x", "y"]], expected: "" },
      { args: [["prefix", "pre", "prefixes"]], expected: "pre" },
      { args: [[""]], expected: "" },
    ],
    hints: [
      "Start by assuming the whole first word is the prefix, then shrink it.",
      "For each word, trim the prefix until the word starts with it.",
      "while (!word.startsWith(prefix)) prefix = prefix.slice(0, -1).",
    ],
    solutions: [
      {
        label: "Shrink a candidate",
        approach: "Trim the prefix until it fits every word.",
        js: "function longestCommonPrefix(words) {\n  if (words.length === 0) return '';\n  let prefix = words[0];\n  for (const w of words) {\n    while (!w.startsWith(prefix)) {\n      prefix = prefix.slice(0, -1);\n      if (prefix === '') return '';\n    }\n  }\n  return prefix;\n}\n",
        ts: "function longestCommonPrefix(words: string[]): string {\n  if (words.length === 0) return '';\n  let prefix = words[0]!;\n  for (const w of words) {\n    while (!w.startsWith(prefix)) {\n      prefix = prefix.slice(0, -1);\n      if (prefix === '') return '';\n    }\n  }\n  return prefix;\n}\n",
        commentedCode: {
          js: "function longestCommonPrefix(words) {\n  if (words.length === 0) return '';\n  // Begin with the largest possible candidate: the entire first word.\n  let prefix = words[0];\n  for (const word of words) {\n    // Remove trailing characters until this word accepts the candidate.\n    while (!word.startsWith(prefix)) {\n      prefix = prefix.slice(0, -1);\n      // No nonempty common prefix can exist once the candidate is empty.\n      if (prefix === '') return '';\n    }\n  }\n  return prefix;\n}\n",
          ts: "function longestCommonPrefix(words: string[]): string {\n  if (words.length === 0) return '';\n  // Begin with the largest possible candidate: the entire first word.\n  let prefix = words[0]!;\n  for (const word of words) {\n    // Remove trailing characters until this word accepts the candidate.\n    while (!word.startsWith(prefix)) {\n      prefix = prefix.slice(0, -1);\n      // No nonempty common prefix can exist once the candidate is empty.\n      if (prefix === '') return '';\n    }\n  }\n  return prefix;\n}\n",
        },
        time: "O(n·p)",
        space: "O(1)",
      },
      {
        label: "Column scan",
        approach: "Compare characters column by column until one differs.",
        js: "function longestCommonPrefix(words) {\n  if (words.length === 0) return '';\n  const first = words[0];\n  for (let i = 0; i < first.length; i++) {\n    const ch = first[i];\n    for (const w of words) {\n      if (i >= w.length || w[i] !== ch) return first.slice(0, i);\n    }\n  }\n  return first;\n}\n",
        ts: "function longestCommonPrefix(words: string[]): string {\n  if (words.length === 0) return '';\n  const first = words[0]!;\n  for (let i = 0; i < first.length; i++) {\n    const ch = first[i];\n    for (const w of words) {\n      if (i >= w.length || w[i] !== ch) return first.slice(0, i);\n    }\n  }\n  return first;\n}\n",
        commentedCode: {
          js: "function longestCommonPrefix(words) {\n  if (words.length === 0) return '';\n  const first = words[0];\n  // Use each character of the first word as the expected column value.\n  for (let i = 0; i < first.length; i++) {\n    const expected = first[i];\n    for (const word of words) {\n      // A short word or a mismatch ends the common prefix before column i.\n      if (i >= word.length || word[i] !== expected) return first.slice(0, i);\n    }\n  }\n  // Every column of the first word matched every other word.\n  return first;\n}\n",
          ts: "function longestCommonPrefix(words: string[]): string {\n  if (words.length === 0) return '';\n  const first = words[0]!;\n  // Use each character of the first word as the expected column value.\n  for (let i = 0; i < first.length; i++) {\n    const expected = first[i];\n    for (const word of words) {\n      // A short word or a mismatch ends the common prefix before column i.\n      if (i >= word.length || word[i] !== expected) return first.slice(0, i);\n    }\n  }\n  // Every column of the first word matched every other word.\n  return first;\n}\n",
        },
        time: "O(n·p)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "tr-all-with-prefix",
    slug: "words-with-prefix",
    title: "Words with Prefix",
    difficulty: "medium",
    statement:
      "Return every word that starts with `prefix`, sorted in ascending order (keep duplicates).",
    examples: [
      { input: '["apple","app","apricot","banana"], "ap"', output: '["app","apple","apricot"]' },
      { input: '["dog","cat"], "z"', output: "[]" },
      { input: '["a","ab"], "a"', output: '["a","ab"]' },
    ],
    constraints: ["0 <= words.length <= 10000"],
    functionName: "wordsWithPrefix",
    starter: {
      js: "function wordsWithPrefix(words, prefix) {\n  // Words starting with prefix, sorted ascending.\n}\n",
      ts: "function wordsWithPrefix(words: string[], prefix: string): string[] {\n  // Words starting with prefix, sorted ascending.\n  return [];\n}\n",
    },
    visible: [
      { args: [["apple", "app", "apricot", "banana"], "ap"], expected: ["app", "apple", "apricot"] },
      { args: [["dog", "cat"], "z"], expected: [] },
      { args: [["a", "ab"], "a"], expected: ["a", "ab"] },
    ],
    hidden: [
      { args: [[], "a"], expected: [] },
      { args: [["b", "a"], ""], expected: ["a", "b"] },
      { args: [["cat", "car", "card"], "ca"], expected: ["car", "card", "cat"] },
      { args: [["x"], "x"], expected: ["x"] },
      { args: [["apple", "apple"], "ap"], expected: ["apple", "apple"] },
      { args: [["hi", "hello", "hey"], "he"], expected: ["hello", "hey"] },
    ],
    hints: [
      "Filter to the matching words, then sort them.",
      "startsWith selects the candidates; a lexicographic sort orders them.",
      "return words.filter((w) => w.startsWith(prefix)).sort().",
    ],
    solutions: [
      {
        label: "Filter and sort",
        approach: "Select prefix matches and sort lexicographically.",
        js: "function wordsWithPrefix(words, prefix) {\n  return words.filter((w) => w.startsWith(prefix)).sort();\n}\n",
        ts: "function wordsWithPrefix(words: string[], prefix: string): string[] {\n  return words.filter((w) => w.startsWith(prefix)).sort();\n}\n",
        commentedCode: {
          js: "function wordsWithPrefix(words, prefix) {\n  // Filtering creates a new array and preserves duplicate matching words.\n  const matches = words.filter((word) => word.startsWith(prefix));\n  // Default string sorting puts the selected words in ascending order.\n  return matches.sort();\n}\n",
          ts: "function wordsWithPrefix(words: string[], prefix: string): string[] {\n  // Filtering creates a new array and preserves duplicate matching words.\n  const matches = words.filter((word) => word.startsWith(prefix));\n  // Default string sorting puts the selected words in ascending order.\n  return matches.sort();\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Collect then sort",
        approach: "Gather matches in a loop, then order them.",
        js: "function wordsWithPrefix(words, prefix) {\n  const out = [];\n  for (const w of words) if (w.startsWith(prefix)) out.push(w);\n  return out.sort();\n}\n",
        ts: "function wordsWithPrefix(words: string[], prefix: string): string[] {\n  const out: string[] = [];\n  for (const w of words) if (w.startsWith(prefix)) out.push(w);\n  return out.sort();\n}\n",
        commentedCode: {
          js: "function wordsWithPrefix(words, prefix) {\n  const matches = [];\n  // Collect every match, including repeated words.\n  for (const word of words) {\n    if (word.startsWith(prefix)) matches.push(word);\n  }\n  // Sort only the collected output, leaving words unchanged.\n  return matches.sort();\n}\n",
          ts: "function wordsWithPrefix(words: string[], prefix: string): string[] {\n  const matches: string[] = [];\n  // Collect every match, including repeated words.\n  for (const word of words) {\n    if (word.startsWith(prefix)) matches.push(word);\n  }\n  // Sort only the collected output, leaving words unchanged.\n  return matches.sort();\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tr-is-prefix-of-any",
    slug: "is-prefix-of-any",
    title: "Is a Prefix of Any",
    difficulty: "easy",
    statement: "Return `true` if the string `s` is a prefix of at least one of the words.",
    examples: [
      { input: '["apple","banana"], "app"', output: "true" },
      { input: '["apple"], "xyz"', output: "false" },
      { input: '[], "a"', output: "false" },
    ],
    constraints: ["0 <= words.length <= 10000"],
    functionName: "isPrefixOfAny",
    starter: {
      js: "function isPrefixOfAny(words, s) {\n  // True if s is a prefix of some word.\n}\n",
      ts: "function isPrefixOfAny(words: string[], s: string): boolean {\n  // True if s is a prefix of some word.\n  return false;\n}\n",
    },
    visible: [
      { args: [["apple", "banana"], "app"], expected: true },
      { args: [["apple"], "xyz"], expected: false },
      { args: [[], "a"], expected: false },
    ],
    hidden: [
      { args: [["abc"], "abc"], expected: true },
      { args: [["abc"], "abcd"], expected: false },
      { args: [["hello", "help"], "hel"], expected: true },
      { args: [["a"], ""], expected: true },
      { args: [["cat"], "c"], expected: true },
      { args: [["dog"], "do"], expected: true },
    ],
    hints: [
      "You need just one word that begins with s.",
      "Array.some with startsWith expresses this cleanly.",
      "return words.some((w) => w.startsWith(s)).",
    ],
    solutions: [
      {
        label: "Some startsWith",
        approach: "Return true as soon as any word starts with s.",
        js: "function isPrefixOfAny(words, s) {\n  return words.some((w) => w.startsWith(s));\n}\n",
        ts: "function isPrefixOfAny(words: string[], s: string): boolean {\n  return words.some((w) => w.startsWith(s));\n}\n",
        commentedCode: {
          js: "function isPrefixOfAny(words, s) {\n  // some stops immediately when the first word begins with s.\n  return words.some((word) => word.startsWith(s));\n}\n",
          ts: "function isPrefixOfAny(words: string[], s: string): boolean {\n  // some stops immediately when the first word begins with s.\n  return words.some((word) => word.startsWith(s));\n}\n",
        },
        time: "O(n·p)",
        space: "O(1)",
      },
      {
        label: "Early-exit loop",
        approach: "Scan and return on the first match.",
        js: "function isPrefixOfAny(words, s) {\n  for (const w of words) if (w.startsWith(s)) return true;\n  return false;\n}\n",
        ts: "function isPrefixOfAny(words: string[], s: string): boolean {\n  for (const w of words) if (w.startsWith(s)) return true;\n  return false;\n}\n",
        commentedCode: {
          js: "function isPrefixOfAny(words, s) {\n  // Stop as soon as one word proves that s is a valid prefix.\n  for (const word of words) {\n    if (word.startsWith(s)) return true;\n  }\n  // Exhausting the list means no word matched.\n  return false;\n}\n",
          ts: "function isPrefixOfAny(words: string[], s: string): boolean {\n  // Stop as soon as one word proves that s is a valid prefix.\n  for (const word of words) {\n    if (word.startsWith(s)) return true;\n  }\n  // Exhausting the list means no word matched.\n  return false;\n}\n",
        },
        time: "O(n·p)",
        space: "O(1)",
      },
    ],
  },
];

export const stage2Batch3Problems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const stage2Batch3Mcqs: QuizQuestion[] = [
  {
    id: "s2-heap-push",
    kind: "mcq",
    prompt: "Inserting a value into a binary heap of n elements is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answerIndex: 1,
    explanation: "The value sifts up at most the height of the heap, which is log n.",
  },
  {
    id: "s2-heap-peek",
    kind: "mcq",
    prompt: "Reading the minimum (or maximum) at the top of a heap is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 0,
    explanation: "The extreme element is always at index 0 — constant time to read.",
  },
  {
    id: "s2-graph-bfs",
    kind: "mcq",
    prompt: "A BFS or DFS over a graph with V nodes and E edges runs in:",
    options: ["O(V)", "O(V + E)", "O(V · E)", "O(V²)"],
    answerIndex: 1,
    explanation: "Each node and each edge is examined a constant number of times.",
  },
  {
    id: "s2-graph-adjmatrix",
    kind: "mcq",
    prompt: "Listing all neighbours of a node stored in an adjacency matrix is:",
    options: ["O(1)", "O(log V)", "O(V)", "O(E)"],
    answerIndex: 2,
    explanation: "You must scan the node's entire row of V possible connections.",
  },
  {
    id: "s2-trie-lookup",
    kind: "mcq",
    prompt: "Looking up a word of length L in a trie takes:",
    options: ["O(1)", "O(L)", "O(n)", "O(L log n)"],
    answerIndex: 1,
    explanation: "You follow one child pointer per character, so time is proportional to L.",
  },
  {
    id: "s2-trie-prefix",
    kind: "mcq",
    prompt: "A trie answers 'does any word have this prefix?' in time proportional to:",
    options: ["O(1)", "the prefix length", "the number of words", "O(n²)"],
    answerIndex: 1,
    explanation: "You walk one node per prefix character; the word count is irrelevant.",
  },
];

export const stage2Batch3Modules: Module[] = [
  {
    id: "m-ds-heaps",
    stageId: S,
    title: "Heaps & Priority Queues",
    kind: "buildLab",
    summary: "The array-backed heap that yields the min or max in O(log n) — your reusable priority queue.",
    lessonSections: [
      {
        heading: "A tree inside an array",
        body: `A binary heap is a complete tree packed into an array: node \`i\`'s children live at \`2i+1\` and \`2i+2\`. A **min-heap** keeps the smallest value at the root. Insert (*sift up*) and remove-min (*sift down*) are **O(log n)**; reading the top is **O(1)**.

\`\`\`js
// The array [1, 3, 2, 7, 4] is a valid min-heap:
//        1
//      /   \\
//     3     2
//    / \\
//   7   4
console.log("root (min):", [1, 3, 2, 7, 4][0]); // 1
\`\`\``,
      },
      {
        heading: "Priority queues everywhere",
        body: `Whenever you repeatedly need the current smallest or largest — Top-K, merging sorted streams, Dijkstra, scheduling — a heap is the tool. The **MinHeap you build here is reused** by later pattern stages, so make it solid.

**Recognition cues:** "k largest/smallest", "repeatedly take the extreme", "merge sorted lists", or "median of a stream" → heap. Build it in the lab, then take on the drills.`,
      },
    ],
    guidedExampleProblemId: "hp-k-smallest",
    drillProblemIds: ["hp-k-smallest", "hp-is-min-heap"],
    testPoolProblemIds: ["hp-kth-largest", "hp-last-stone-weight"],
    complexityQuestionIds: ["s2-heap-push", "s2-heap-peek"],
    buildLab: heapLab,
    badgeId: "badge-ds-heaps",
    prerequisiteModuleIds: ["m-ds-trees"],
  },
  {
    id: "m-ds-graphs",
    stageId: S,
    title: "Graphs",
    kind: "buildLab",
    summary: "Nodes and edges — adjacency lists, BFS/DFS traversal, and connectivity in O(V+E).",
    lessonSections: [
      {
        heading: "Representing a graph",
        body: `A graph is nodes joined by edges. The usual representation is an **adjacency list** — a map from each node to its neighbours — which uses O(V+E) space and lists a node's neighbours quickly.

\`\`\`js
const adj = new Map();
const add = (u, v) => {
  if (!adj.has(u)) adj.set(u, []);
  if (!adj.has(v)) adj.set(v, []);
  adj.get(u).push(v); adj.get(v).push(u); // undirected
};
add(0, 1); add(1, 2);
console.log([...adj.entries()]); // 0:[1], 1:[0,2], 2:[1]
\`\`\``,
      },
      {
        heading: "Traversal is the toolkit",
        body: `**BFS** (a queue) explores level by level and finds shortest paths in unweighted graphs; **DFS** (a stack or recursion) is great for connectivity and cycles. Both run in **O(V+E)**. Union-Find is a fast alternative for pure connectivity questions.

**Recognition cues:** reachability, shortest hops, connected components, cycle detection, grid/island problems → graph traversal. Build a graph in the lab, then tackle the drills.`,
      },
    ],
    guidedExampleProblemId: "gr-has-path",
    drillProblemIds: ["gr-degree", "gr-has-path"],
    testPoolProblemIds: ["gr-count-components", "gr-shortest-path"],
    complexityQuestionIds: ["s2-graph-bfs", "s2-graph-adjmatrix"],
    buildLab: graphLab,
    badgeId: "badge-ds-graphs",
    prerequisiteModuleIds: ["m-ds-hash"],
  },
  {
    id: "m-ds-tries",
    stageId: S,
    title: "Tries",
    kind: "buildLab",
    summary: "The prefix tree — word and prefix lookups in time proportional to the word length.",
    lessonSections: [
      {
        heading: "One node per character",
        body: `A **trie** (prefix tree) stores strings by sharing common prefixes: each edge is a character, each node may mark the end of a word. Lookup and insert take **O(L)** for a word of length L — independent of how many words are stored.

\`\`\`js
// Inserting "cat" and "car" shares the "ca" path:
//   c → a → t*
//           r*
\`\`\``,
      },
      {
        heading: "Built for prefixes",
        body: `Tries shine at prefix questions: autocomplete, "does any word start with…", spell-check, and IP routing. A plain hash set answers exact membership just as fast, but only a trie answers **prefix** queries efficiently.

**Recognition cues:** autocomplete, prefix search, many words sharing prefixes, or word-by-word matching on a board → trie. Build one in the lab, then finish Stage 2 with the drills.`,
      },
    ],
    guidedExampleProblemId: "tr-count-prefix",
    drillProblemIds: ["tr-count-prefix", "tr-longest-common-prefix"],
    testPoolProblemIds: ["tr-all-with-prefix", "tr-is-prefix-of-any"],
    complexityQuestionIds: ["s2-trie-lookup", "s2-trie-prefix"],
    buildLab: trieLab,
    badgeId: "badge-ds-tries",
    prerequisiteModuleIds: ["m-ds-trees"],
  },
];
