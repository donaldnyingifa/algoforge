import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s4";
const P = ["linked-list-reversal"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "llr-reverse",
    slug: "reverse-list-values",
    title: "Reverse a List",
    difficulty: "easy",
    patternIds: P,
    statement:
      "A linked list is given as its array of values, head first. Return the values after reversing the list.",
    examples: [
      { input: "[1,2,3]", output: "[3,2,1]" },
      { input: "[]", output: "[]" },
      { input: "[1]", output: "[1]" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "reverseListValues",
    starter: {
      js: "function reverseListValues(values) {\n  // Return the reversed sequence.\n}\n",
      ts: "function reverseListValues(values: number[]): number[] {\n  // Return the reversed sequence.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [3, 2, 1] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [1] },
    ],
    hidden: [
      { args: [[1, 2]], expected: [2, 1] },
      { args: [[5, 5, 6]], expected: [6, 5, 5] },
      { args: [[-1, 0, 1]], expected: [1, 0, -1] },
      { args: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
      { args: [[7]], expected: [7] },
      { args: [[0, 0]], expected: [0, 0] },
    ],
    hints: [
      "Pointer reversal walks the list, repointing each node at its predecessor.",
      "The array mirror of that is prepending each value to a growing result.",
      "for (const v of values) out.unshift(v); return out.",
    ],
    solutions: [
      {
        label: "Prepend each node (pointer reversal)",
        approach: "Mirror the prev/current/next reversal by building from the front.",
        js: "function reverseListValues(values) {\n  const out = [];\n  for (const v of values) out.unshift(v);\n  return out;\n}\n",
        ts: "function reverseListValues(values: number[]): number[] {\n  const out: number[] = [];\n  for (const v of values) out.unshift(v);\n  return out;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Two-pointer swap",
        approach: "Swap symmetric positions on a copy.",
        js: "function reverseListValues(values) {\n  const a = [...values];\n  let i = 0, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
        ts: "function reverseListValues(values: number[]): number[] {\n  const a = [...values];\n  let i = 0, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "llr-reverse-equal",
    slug: "is-reversed",
    title: "Is B the Reverse of A?",
    difficulty: "easy",
    patternIds: P,
    statement: "Return `true` if list `b` is exactly the reverse of list `a`.",
    examples: [
      { input: "[1,2,3], [3,2,1]", output: "true" },
      { input: "[1,2], [1,2]", output: "false" },
      { input: "[], []", output: "true" },
    ],
    constraints: ["0 <= lengths <= 10000"],
    functionName: "isReversed",
    starter: {
      js: "function isReversed(a, b) {\n  // True if b is a reversed.\n}\n",
      ts: "function isReversed(a: number[], b: number[]): boolean {\n  // True if b is a reversed.\n  return false;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3], [3, 2, 1]], expected: true },
      { args: [[1, 2], [1, 2]], expected: false },
      { args: [[], []], expected: true },
    ],
    hidden: [
      { args: [[1], [1]], expected: true },
      { args: [[1, 2], [2, 1]], expected: true },
      { args: [[1, 2, 3], [3, 1, 2]], expected: false },
      { args: [[1, 1], [1, 1]], expected: true },
      { args: [[1, 2, 3], [3, 2]], expected: false },
      { args: [[0], [1]], expected: false },
    ],
    hints: [
      "Different lengths can never be reverses of each other.",
      "Walk one list forward and the other backward, comparing as you go.",
      "for i: if (a[i] !== b[n - 1 - i]) return false.",
    ],
    solutions: [
      {
        label: "Walk from both ends",
        approach: "Compare a[i] against b's mirrored position.",
        js: "function isReversed(a, b) {\n  if (a.length !== b.length) return false;\n  const n = a.length;\n  for (let i = 0; i < n; i++) if (a[i] !== b[n - 1 - i]) return false;\n  return true;\n}\n",
        ts: "function isReversed(a: number[], b: number[]): boolean {\n  if (a.length !== b.length) return false;\n  const n = a.length;\n  for (let i = 0; i < n; i++) if (a[i] !== b[n - 1 - i]) return false;\n  return true;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Reverse and compare",
        approach: "Build the reverse of a and compare serialised forms.",
        js: "function isReversed(a, b) {\n  return [...a].reverse().join(',') === b.join(',');\n}\n",
        ts: "function isReversed(a: number[], b: number[]): boolean {\n  return [...a].reverse().join(',') === b.join(',');\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "llr-reverse-between",
    slug: "reverse-sublist",
    title: "Reverse a Sublist",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Reverse only the nodes from position `left` to position `right` (1-indexed, inclusive) and return the resulting values.",
    examples: [
      { input: "[1,2,3,4,5], 2, 4", output: "[1,4,3,2,5]" },
      { input: "[1,2,3], 1, 3", output: "[3,2,1]" },
      { input: "[1], 1, 1", output: "[1]" },
    ],
    constraints: ["1 <= left <= right <= values.length"],
    functionName: "reverseBetween",
    starter: {
      js: "function reverseBetween(values, left, right) {\n  // Reverse positions left..right (1-indexed).\n}\n",
      ts: "function reverseBetween(values: number[], left: number, right: number): number[] {\n  // Reverse positions left..right (1-indexed).\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5], 2, 4], expected: [1, 4, 3, 2, 5] },
      { args: [[1, 2, 3], 1, 3], expected: [3, 2, 1] },
      { args: [[1], 1, 1], expected: [1] },
    ],
    hidden: [
      { args: [[1, 2], 1, 2], expected: [2, 1] },
      { args: [[1, 2, 3, 4], 2, 3], expected: [1, 3, 2, 4] },
      { args: [[1, 2, 3, 4, 5], 1, 1], expected: [1, 2, 3, 4, 5] },
      { args: [[5, 6, 7], 2, 3], expected: [5, 7, 6] },
      { args: [[1, 2, 3, 4, 5], 3, 5], expected: [1, 2, 5, 4, 3] },
      { args: [[9], 1, 1], expected: [9] },
    ],
    hints: [
      "Positions are 1-indexed, so subtract one to get array indices.",
      "Split into three parts: before, the reversed middle, and after.",
      "return [...before, ...middle.reverse(), ...after].",
    ],
    solutions: [
      {
        label: "Split, reverse, rejoin",
        approach: "Isolate the middle section and reverse just that slice.",
        js: "function reverseBetween(values, left, right) {\n  const before = values.slice(0, left - 1);\n  const middle = values.slice(left - 1, right).reverse();\n  const after = values.slice(right);\n  return [...before, ...middle, ...after];\n}\n",
        ts: "function reverseBetween(values: number[], left: number, right: number): number[] {\n  const before = values.slice(0, left - 1);\n  const middle = values.slice(left - 1, right).reverse();\n  const after = values.slice(right);\n  return [...before, ...middle, ...after];\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "In-place swaps",
        approach: "Swap inward between the two boundary indices on a copy.",
        js: "function reverseBetween(values, left, right) {\n  const a = [...values];\n  let i = left - 1, j = right - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
        ts: "function reverseBetween(values: number[], left: number, right: number): number[] {\n  const a = [...values];\n  let i = left - 1, j = right - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "llr-swap-pairs",
    slug: "swap-pairs",
    title: "Swap Adjacent Pairs",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Swap every two adjacent nodes and return the resulting values. A trailing odd node stays where it is.",
    examples: [
      { input: "[1,2,3,4]", output: "[2,1,4,3]" },
      { input: "[1,2,3]", output: "[2,1,3]" },
      { input: "[]", output: "[]" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "swapPairs",
    starter: {
      js: "function swapPairs(values) {\n  // Swap each adjacent pair.\n}\n",
      ts: "function swapPairs(values: number[]): number[] {\n  // Swap each adjacent pair.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4]], expected: [2, 1, 4, 3] },
      { args: [[1, 2, 3]], expected: [2, 1, 3] },
      { args: [[]], expected: [] },
    ],
    hidden: [
      { args: [[1]], expected: [1] },
      { args: [[1, 2]], expected: [2, 1] },
      { args: [[1, 2, 3, 4, 5]], expected: [2, 1, 4, 3, 5] },
      { args: [[0, 0]], expected: [0, 0] },
      { args: [[4, 3, 2, 1]], expected: [3, 4, 1, 2] },
      { args: [[7, 8, 9, 10, 11, 12]], expected: [8, 7, 10, 9, 12, 11] },
    ],
    hints: [
      "Step through the list two nodes at a time.",
      "Only swap when a full pair exists; a lone final node stays put.",
      "for (i = 0; i + 1 < n; i += 2) swap a[i], a[i+1].",
    ],
    solutions: [
      {
        label: "Step by two",
        approach: "Swap each complete adjacent pair on a copy.",
        js: "function swapPairs(values) {\n  const a = [...values];\n  for (let i = 0; i + 1 < a.length; i += 2) {\n    const t = a[i]; a[i] = a[i + 1]; a[i + 1] = t;\n  }\n  return a;\n}\n",
        ts: "function swapPairs(values: number[]): number[] {\n  const a = [...values];\n  for (let i = 0; i + 1 < a.length; i += 2) {\n    const t = a[i]; a[i] = a[i + 1]; a[i + 1] = t;\n  }\n  return a;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Build in pairs",
        approach: "Emit each pair in reversed order, then any leftover node.",
        js: "function swapPairs(values) {\n  const out = [];\n  for (let i = 0; i < values.length; i += 2) {\n    if (i + 1 < values.length) out.push(values[i + 1], values[i]);\n    else out.push(values[i]);\n  }\n  return out;\n}\n",
        ts: "function swapPairs(values: number[]): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < values.length; i += 2) {\n    if (i + 1 < values.length) out.push(values[i + 1], values[i]);\n    else out.push(values[i]);\n  }\n  return out;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "llr-reverse-k-group",
    slug: "reverse-k-group",
    title: "Reverse in K-Groups",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Reverse the nodes in consecutive groups of `k`. If the final group has fewer than `k` nodes, leave it as is.",
    examples: [
      { input: "[1,2,3,4,5], 2", output: "[2,1,4,3,5]" },
      { input: "[1,2,3,4,5], 3", output: "[3,2,1,4,5]" },
      { input: "[1,2,3], 1", output: "[1,2,3]" },
    ],
    constraints: ["1 <= k", "0 <= values.length <= 10000"],
    functionName: "reverseKGroup",
    starter: {
      js: "function reverseKGroup(values, k) {\n  // Reverse each full group of k.\n}\n",
      ts: "function reverseKGroup(values: number[], k: number): number[] {\n  // Reverse each full group of k.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5], 2], expected: [2, 1, 4, 3, 5] },
      { args: [[1, 2, 3, 4, 5], 3], expected: [3, 2, 1, 4, 5] },
      { args: [[1, 2, 3], 1], expected: [1, 2, 3] },
    ],
    hidden: [
      { args: [[], 2], expected: [] },
      { args: [[1], 2], expected: [1] },
      { args: [[1, 2, 3, 4], 2], expected: [2, 1, 4, 3] },
      { args: [[1, 2, 3, 4, 5, 6], 3], expected: [3, 2, 1, 6, 5, 4] },
      { args: [[1, 2], 3], expected: [1, 2] },
      { args: [[1, 2, 3, 4, 5], 5], expected: [5, 4, 3, 2, 1] },
    ],
    hints: [
      "Walk the list in chunks of k.",
      "Reverse a chunk only when it is exactly k long.",
      "Concatenate the (possibly reversed) chunks in order.",
    ],
    solutions: [
      {
        label: "Chunk and reverse",
        approach: "Slice groups of k, reversing only the complete ones.",
        js: "function reverseKGroup(values, k) {\n  const out = [];\n  for (let i = 0; i < values.length; i += k) {\n    const chunk = values.slice(i, i + k);\n    if (chunk.length === k) chunk.reverse();\n    out.push(...chunk);\n  }\n  return out;\n}\n",
        ts: "function reverseKGroup(values: number[], k: number): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < values.length; i += k) {\n    const chunk = values.slice(i, i + k);\n    if (chunk.length === k) chunk.reverse();\n    out.push(...chunk);\n  }\n  return out;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Index swaps per group",
        approach: "Swap inward within each complete group on a copy.",
        js: "function reverseKGroup(values, k) {\n  const a = [...values];\n  for (let start = 0; start + k <= a.length; start += k) {\n    let i = start, j = start + k - 1;\n    while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  }\n  return a;\n}\n",
        ts: "function reverseKGroup(values: number[], k: number): number[] {\n  const a = [...values];\n  for (let start = 0; start + k <= a.length; start += k) {\n    let i = start, j = start + k - 1;\n    while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  }\n  return a;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "llr-reorder",
    slug: "reorder-list",
    title: "Reorder List",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Reorder the list so it reads first, last, second, second-to-last, and so on: `L0, Ln-1, L1, Ln-2, …`",
    examples: [
      { input: "[1,2,3,4]", output: "[1,4,2,3]" },
      { input: "[1,2,3,4,5]", output: "[1,5,2,4,3]" },
      { input: "[]", output: "[]" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "reorderList",
    starter: {
      js: "function reorderList(values) {\n  // Interleave from the front and the back.\n}\n",
      ts: "function reorderList(values: number[]): number[] {\n  // Interleave from the front and the back.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4]], expected: [1, 4, 2, 3] },
      { args: [[1, 2, 3, 4, 5]], expected: [1, 5, 2, 4, 3] },
      { args: [[]], expected: [] },
    ],
    hidden: [
      { args: [[1]], expected: [1] },
      { args: [[1, 2]], expected: [1, 2] },
      { args: [[1, 2, 3]], expected: [1, 3, 2] },
      { args: [[1, 2, 3, 4, 5, 6]], expected: [1, 6, 2, 5, 3, 4] },
      { args: [[0, 0, 0]], expected: [0, 0, 0] },
      { args: [[9, 8, 7, 6]], expected: [9, 6, 8, 7] },
    ],
    hints: [
      "The classic approach splits the list, reverses the second half, then merges the halves.",
      "With an array, two pointers from the ends produce the same interleaving.",
      "Alternate pushing from the front and the back until the pointers meet.",
    ],
    solutions: [
      {
        label: "Two pointers from the ends",
        approach: "Alternate taking from the front and the back.",
        js: "function reorderList(values) {\n  const out = [];\n  let i = 0, j = values.length - 1;\n  while (i < j) { out.push(values[i++]); out.push(values[j--]); }\n  if (i === j) out.push(values[i]);\n  return out;\n}\n",
        ts: "function reorderList(values: number[]): number[] {\n  const out: number[] = [];\n  let i = 0, j = values.length - 1;\n  while (i < j) { out.push(values[i++]); out.push(values[j--]); }\n  if (i === j) out.push(values[i]);\n  return out;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Split, reverse, merge",
        approach: "Mirror the linked-list method: halve, reverse the tail, interleave.",
        js: "function reorderList(values) {\n  const mid = Math.ceil(values.length / 2);\n  const front = values.slice(0, mid);\n  const back = values.slice(mid).reverse();\n  const out = [];\n  for (let i = 0; i < front.length; i++) {\n    out.push(front[i]);\n    if (i < back.length) out.push(back[i]);\n  }\n  return out;\n}\n",
        ts: "function reorderList(values: number[]): number[] {\n  const mid = Math.ceil(values.length / 2);\n  const front = values.slice(0, mid);\n  const back = values.slice(mid).reverse();\n  const out: number[] = [];\n  for (let i = 0; i < front.length; i++) {\n    out.push(front[i]);\n    if (i < back.length) out.push(back[i]);\n  }\n  return out;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "llr-is-palindrome",
    slug: "palindrome-by-reversal",
    title: "Palindrome by Reversal",
    difficulty: "medium",
    patternIds: P,
    statement:
      "A list is given as its array of values. Return `true` if it is a palindrome (compare the list against its reversed half).",
    examples: [
      { input: "[1,2,1]", output: "true" },
      { input: "[1,2,2,1]", output: "true" },
      { input: "[1,2,3]", output: "false" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "isPalindromeByReversal",
    starter: {
      js: "function isPalindromeByReversal(values) {\n  // True if the list is a palindrome.\n}\n",
      ts: "function isPalindromeByReversal(values: number[]): boolean {\n  // True if the list is a palindrome.\n  return false;\n}\n",
    },
    visible: [
      { args: [[1, 2, 1]], expected: true },
      { args: [[1, 2, 2, 1]], expected: true },
      { args: [[1, 2, 3]], expected: false },
    ],
    hidden: [
      { args: [[]], expected: true },
      { args: [[1]], expected: true },
      { args: [[1, 2]], expected: false },
      { args: [[1, 2, 3, 2, 1]], expected: true },
      { args: [[1, 2, 2, 3]], expected: false },
      { args: [[0, 0, 0]], expected: true },
    ],
    hints: [
      "Reverse the second half and compare it against the first.",
      "Equivalently, compare the whole list with its reverse.",
      "Two pointers from both ends also settle it in O(1) space.",
    ],
    solutions: [
      {
        label: "Compare with the reverse",
        approach: "A palindrome equals its own reversal.",
        js: "function isPalindromeByReversal(values) {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
        ts: "function isPalindromeByReversal(values: number[]): boolean {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Reverse the second half",
        approach: "Reverse only the tail and compare it against the head.",
        js: "function isPalindromeByReversal(values) {\n  const n = values.length;\n  const half = Math.floor(n / 2);\n  const back = values.slice(n - half).reverse();\n  for (let i = 0; i < half; i++) if (values[i] !== back[i]) return false;\n  return true;\n}\n",
        ts: "function isPalindromeByReversal(values: number[]): boolean {\n  const n = values.length;\n  const half = Math.floor(n / 2);\n  const back = values.slice(n - half).reverse();\n  for (let i = 0; i < half; i++) if (values[i] !== back[i]) return false;\n  return true;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "llr-rotate-right",
    slug: "rotate-list-right",
    title: "Rotate List Right",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Rotate the list to the right by `k` places (`k` may exceed the length) and return the resulting values.",
    examples: [
      { input: "[1,2,3,4,5], 2", output: "[4,5,1,2,3]" },
      { input: "[1,2], 3", output: "[2,1]" },
      { input: "[], 5", output: "[]" },
    ],
    constraints: ["0 <= k", "0 <= values.length <= 10000"],
    functionName: "rotateRight",
    starter: {
      js: "function rotateRight(values, k) {\n  // Rotate right by k places.\n}\n",
      ts: "function rotateRight(values: number[], k: number): number[] {\n  // Rotate right by k places.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
      { args: [[1, 2], 3], expected: [2, 1] },
      { args: [[], 5], expected: [] },
    ],
    hidden: [
      { args: [[1], 5], expected: [1] },
      { args: [[1, 2, 3], 0], expected: [1, 2, 3] },
      { args: [[1, 2, 3], 3], expected: [1, 2, 3] },
      { args: [[1, 2, 3, 4], 1], expected: [4, 1, 2, 3] },
      { args: [[1, 2, 3, 4, 5], 7], expected: [4, 5, 1, 2, 3] },
      { args: [[5, 6], 1], expected: [6, 5] },
    ],
    hints: [
      "Rotating by the length changes nothing, so only k mod n matters.",
      "The last k elements move to the front.",
      "return values.slice(n - s).concat(values.slice(0, n - s)) with s = k % n.",
    ],
    solutions: [
      {
        label: "Slice and rejoin",
        approach: "Move the final k elements to the front.",
        js: "function rotateRight(values, k) {\n  const n = values.length;\n  if (n === 0) return [];\n  const s = k % n;\n  return values.slice(n - s).concat(values.slice(0, n - s));\n}\n",
        ts: "function rotateRight(values: number[], k: number): number[] {\n  const n = values.length;\n  if (n === 0) return [];\n  const s = k % n;\n  return values.slice(n - s).concat(values.slice(0, n - s));\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Shift one at a time",
        approach: "Move the last element to the front, k mod n times.",
        js: "function rotateRight(values, k) {\n  const n = values.length;\n  if (n === 0) return [];\n  const out = [...values];\n  const steps = k % n;\n  for (let i = 0; i < steps; i++) out.unshift(out.pop());\n  return out;\n}\n",
        ts: "function rotateRight(values: number[], k: number): number[] {\n  const n = values.length;\n  if (n === 0) return [];\n  const out = [...values];\n  const steps = k % n;\n  for (let i = 0; i < steps; i++) out.unshift(out.pop() as number);\n  return out;\n}\n",
        time: "O(n·k)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "llr-reverse-suffix",
    slug: "reverse-suffix",
    title: "Reverse the Last K",
    difficulty: "easy",
    patternIds: P,
    statement: "Reverse only the final `k` nodes of the list and return the resulting values.",
    examples: [
      { input: "[1,2,3,4,5], 2", output: "[1,2,3,5,4]" },
      { input: "[1,2,3], 3", output: "[3,2,1]" },
      { input: "[1,2,3], 0", output: "[1,2,3]" },
    ],
    constraints: ["0 <= k <= values.length"],
    functionName: "reverseSuffix",
    starter: {
      js: "function reverseSuffix(values, k) {\n  // Reverse the final k values.\n}\n",
      ts: "function reverseSuffix(values: number[], k: number): number[] {\n  // Reverse the final k values.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5], 2], expected: [1, 2, 3, 5, 4] },
      { args: [[1, 2, 3], 3], expected: [3, 2, 1] },
      { args: [[1, 2, 3], 0], expected: [1, 2, 3] },
    ],
    hidden: [
      { args: [[], 0], expected: [] },
      { args: [[1], 1], expected: [1] },
      { args: [[1, 2], 2], expected: [2, 1] },
      { args: [[1, 2, 3, 4], 1], expected: [1, 2, 3, 4] },
      { args: [[5, 6, 7, 8], 4], expected: [8, 7, 6, 5] },
      { args: [[9, 8, 7], 2], expected: [9, 7, 8] },
    ],
    hints: [
      "Split the list at index n - k.",
      "Reverse the tail slice and append it to the untouched head.",
      "return values.slice(0, n - k).concat(values.slice(n - k).reverse()).",
    ],
    solutions: [
      {
        label: "Split and reverse the tail",
        approach: "Keep the head, reverse the final k values.",
        js: "function reverseSuffix(values, k) {\n  const n = values.length;\n  return values.slice(0, n - k).concat(values.slice(n - k).reverse());\n}\n",
        ts: "function reverseSuffix(values: number[], k: number): number[] {\n  const n = values.length;\n  return values.slice(0, n - k).concat(values.slice(n - k).reverse());\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Swap within the tail",
        approach: "Two pointers converging inside the final k positions.",
        js: "function reverseSuffix(values, k) {\n  const a = [...values];\n  let i = a.length - k, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
        ts: "function reverseSuffix(values: number[], k: number): number[] {\n  const a = [...values];\n  let i = a.length - k, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "llr-odd-even",
    slug: "odd-even-list",
    title: "Odd-Even List",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Group all nodes at odd positions together, followed by the nodes at even positions (1-indexed), preserving their relative order.",
    examples: [
      { input: "[1,2,3,4,5]", output: "[1,3,5,2,4]" },
      { input: "[1,2,3,4]", output: "[1,3,2,4]" },
      { input: "[]", output: "[]" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "oddEvenList",
    starter: {
      js: "function oddEvenList(values) {\n  // Odd positions first, then even positions.\n}\n",
      ts: "function oddEvenList(values: number[]): number[] {\n  // Odd positions first, then even positions.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5]], expected: [1, 3, 5, 2, 4] },
      { args: [[1, 2, 3, 4]], expected: [1, 3, 2, 4] },
      { args: [[]], expected: [] },
    ],
    hidden: [
      { args: [[1]], expected: [1] },
      { args: [[1, 2]], expected: [1, 2] },
      { args: [[1, 2, 3]], expected: [1, 3, 2] },
      { args: [[2, 1, 3, 5, 6, 4, 7]], expected: [2, 3, 6, 7, 1, 5, 4] },
      { args: [[0, 0]], expected: [0, 0] },
      { args: [[1, 2, 3, 4, 5, 6]], expected: [1, 3, 5, 2, 4, 6] },
    ],
    hints: [
      "Position 1 is odd, and array index 0 corresponds to position 1.",
      "Collect even indices into one list and odd indices into another.",
      "return oddPositions.concat(evenPositions).",
    ],
    solutions: [
      {
        label: "Two buckets by index parity",
        approach: "Even array indices are odd positions; concatenate the groups.",
        js: "function oddEvenList(values) {\n  const odd = [], even = [];\n  for (let i = 0; i < values.length; i++) {\n    (i % 2 === 0 ? odd : even).push(values[i]);\n  }\n  return odd.concat(even);\n}\n",
        ts: "function oddEvenList(values: number[]): number[] {\n  const odd: number[] = [], even: number[] = [];\n  for (let i = 0; i < values.length; i++) {\n    (i % 2 === 0 ? odd : even).push(values[i]);\n  }\n  return odd.concat(even);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Filter twice",
        approach: "Two filters over the index parity.",
        js: "function oddEvenList(values) {\n  return values.filter((_, i) => i % 2 === 0).concat(values.filter((_, i) => i % 2 === 1));\n}\n",
        ts: "function oddEvenList(values: number[]): number[] {\n  return values.filter((_, i) => i % 2 === 0).concat(values.filter((_, i) => i % 2 === 1));\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
];

export const llReversalProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const llReversalMcqs: QuizQuestion[] = [
  {
    id: "s4-llr-space",
    kind: "mcq",
    prompt: "Reversing a linked list in place (repointing nodes) uses how much extra space?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 0,
    explanation: "Only a few pointer variables are needed — no copy of the list.",
  },
  {
    id: "s4-llr-pointers",
    kind: "mcq",
    prompt: "The standard in-place reversal loop keeps track of how many node references?",
    options: ["one (current)", "two (prev, current)", "three (prev, current, next)", "four"],
    answerIndex: 2,
    explanation: "You must save `next` before repointing `current`, or you lose the rest of the list.",
  },
];

export const llReversalModule: Module = {
  id: "m-pat-ll-reversal",
  stageId: S,
  title: "Linked List In-Place Reversal",
  kind: "patternModule",
  summary: "Repointing nodes instead of copying them — reversal, sublists, k-groups, and reordering.",
  lessonSections: [
    {
      heading: "Repoint, don't rebuild",
      body: `Reversing a linked list in place walks the list once, turning each node's \`next\` pointer around. It needs exactly **three** references — \`prev\`, \`current\`, and a saved \`next\` — and **O(1)** extra space.

\`\`\`js
// The canonical pointer dance (conceptual)
let prev = null, cur = head;
while (cur) {
  const next = cur.next; // save it before we clobber it
  cur.next = prev;       // reverse the link
  prev = cur;            // advance
  cur = next;
}
// prev is the new head
\`\`\`

In these drills the list arrives as an **array of values**, so you can focus on the ordering logic.`,
    },
    {
      heading: "Recognition cues",
      body: `Reach for in-place reversal when a problem asks you to:

- **reverse** a whole list, a **sublist** (positions left..right), or fixed **k-sized groups**,
- **swap adjacent** nodes,
- **reorder** or fold a list (L0, Ln-1, L1, …),
- check a list is a **palindrome** without extra memory (reverse the second half),
- rotate a list, or separate odd/even positions.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Reverse positions left..right (1-indexed) — array mirror
function reverseBetween(v: number[], left: number, right: number): number[] {
  return [
    ...v.slice(0, left - 1),
    ...v.slice(left - 1, right).reverse(),
    ...v.slice(right),
  ];
}
\`\`\`

**Pitfalls:** losing the rest of the list by overwriting \`next\` before saving it; **1-indexed** positions vs 0-indexed arrays; leaving a final partial group reversed when the problem says it shouldn't be; forgetting to reconnect the reversed section to the nodes on either side. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "llr-reverse",
  drillProblemIds: [
    "llr-reverse",
    "llr-reverse-equal",
    "llr-reverse-between",
    "llr-swap-pairs",
    "llr-reverse-k-group",
    "llr-reorder",
  ],
  testPoolProblemIds: [
    "llr-is-palindrome",
    "llr-rotate-right",
    "llr-reverse-suffix",
    "llr-odd-even",
  ],
  complexityQuestionIds: ["s4-llr-space", "s4-llr-pointers"],
  badgeId: "badge-pat-ll-reversal",
  prerequisiteModuleIds: ["m-pat-fast-slow"],
};
