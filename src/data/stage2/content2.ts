import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";
import { stackLab, dequeLab, hashMapLab, bstLab } from "./labs2";

const S = "dsa-s2";

const drafts: ProblemDraft[] = [
  /* -------------------- Stacks -------------------- */
  {
    id: "st-remove-adjacent",
    slug: "remove-adjacent-duplicates",
    title: "Remove Adjacent Duplicates",
    difficulty: "medium",
    statement:
      "Repeatedly remove pairs of equal adjacent characters until none remain, and return the resulting string.",
    examples: [
      { input: '"abbaca"', output: '"ca"', explanation: "Remove bb → aaca, then aa → ca." },
      { input: '"azxxzy"', output: '"ay"' },
      { input: '""', output: '""' },
    ],
    constraints: ["0 <= s.length <= 10000"],
    functionName: "removeAdjacentDuplicates",
    starter: {
      js: "function removeAdjacentDuplicates(s) {\n  // Collapse adjacent equal pairs repeatedly.\n}\n",
      ts: "function removeAdjacentDuplicates(s: string): string {\n  // Collapse adjacent equal pairs repeatedly.\n  return '';\n}\n",
    },
    visible: [
      { args: ["abbaca"], expected: "ca" },
      { args: ["azxxzy"], expected: "ay" },
      { args: [""], expected: "" },
    ],
    hidden: [
      { args: ["aa"], expected: "" },
      { args: ["abc"], expected: "abc" },
      { args: ["aaa"], expected: "a" },
      { args: ["abba"], expected: "" },
      { args: ["aabb"], expected: "" },
      { args: ["abccba"], expected: "" },
    ],
    hints: [
      "When you meet a character equal to the one just before it, both should disappear.",
      "Push characters on a stack; if the incoming character equals the top, pop instead of pushing.",
      "for ch: if stack top === ch, pop; else push ch. Then join the stack.",
    ],
    solutions: [
      {
        label: "Stack",
        approach: "Cancel a character against the stack top when they match.",
        js: "function removeAdjacentDuplicates(s) {\n  const stack = [];\n  for (const ch of s) {\n    if (stack.length && stack[stack.length - 1] === ch) stack.pop();\n    else stack.push(ch);\n  }\n  return stack.join('');\n}\n",
        ts: "function removeAdjacentDuplicates(s: string): string {\n  const stack: string[] = [];\n  for (const ch of s) {\n    if (stack.length && stack[stack.length - 1] === ch) stack.pop();\n    else stack.push(ch);\n  }\n  return stack.join('');\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Repeated replace",
        approach: "Delete any doubled character until the string stops changing.",
        js: "function removeAdjacentDuplicates(s) {\n  let prev;\n  do { prev = s; s = s.replace(/(.)\\1/, ''); } while (s !== prev);\n  return s;\n}\n",
        ts: "function removeAdjacentDuplicates(s: string): string {\n  let prev: string;\n  do { prev = s; s = s.replace(/(.)\\1/, ''); } while (s !== prev);\n  return s;\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "st-max-depth",
    slug: "max-nesting-depth",
    title: "Max Nesting Depth",
    difficulty: "easy",
    statement:
      "Return the deepest level of nested parentheses in the string. Non-parenthesis characters are ignored.",
    examples: [
      { input: '"(())"', output: "2" },
      { input: '"()()"', output: "1" },
      { input: '""', output: "0" },
    ],
    constraints: ["0 <= s.length <= 10000"],
    functionName: "maxDepth",
    starter: {
      js: "function maxDepth(s) {\n  // Deepest parenthesis nesting.\n}\n",
      ts: "function maxDepth(s: string): number {\n  // Deepest parenthesis nesting.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["(())"], expected: 2 },
      { args: ["()()"], expected: 1 },
      { args: [""], expected: 0 },
    ],
    hidden: [
      { args: ["("], expected: 1 },
      { args: ["((()))"], expected: 3 },
      { args: ["(a(b)c)"], expected: 2 },
      { args: ["((a))"], expected: 2 },
      { args: ["(())()"], expected: 2 },
      { args: ["a"], expected: 0 },
    ],
    hints: [
      "The current depth rises on '(' and falls on ')'.",
      "Track a running depth and remember the largest value it reaches.",
      "for ch: if '(' depth++ and update best; if ')' depth--.",
    ],
    solutions: [
      {
        label: "Running depth",
        approach: "Increase on open, decrease on close, track the maximum.",
        js: "function maxDepth(s) {\n  let depth = 0, best = 0;\n  for (const ch of s) {\n    if (ch === '(') { depth++; if (depth > best) best = depth; }\n    else if (ch === ')') depth--;\n  }\n  return best;\n}\n",
        ts: "function maxDepth(s: string): number {\n  let depth = 0, best = 0;\n  for (const ch of s) {\n    if (ch === '(') { depth++; if (depth > best) best = depth; }\n    else if (ch === ')') depth--;\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Stack height",
        approach: "Push on open, pop on close; the peak stack height is the answer.",
        js: "function maxDepth(s) {\n  const stack = [];\n  let best = 0;\n  for (const ch of s) {\n    if (ch === '(') { stack.push(ch); if (stack.length > best) best = stack.length; }\n    else if (ch === ')') stack.pop();\n  }\n  return best;\n}\n",
        ts: "function maxDepth(s: string): number {\n  const stack: string[] = [];\n  let best = 0;\n  for (const ch of s) {\n    if (ch === '(') { stack.push(ch); if (stack.length > best) best = stack.length; }\n    else if (ch === ')') stack.pop();\n  }\n  return best;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "st-next-greater",
    slug: "next-greater-element",
    title: "Next Greater Element",
    difficulty: "medium",
    statement:
      "For each value, return the first value to its right that is strictly greater, or -1 if none exists.",
    examples: [
      { input: "[2,1,3]", output: "[3,3,-1]" },
      { input: "[5,4,3]", output: "[-1,-1,-1]" },
      { input: "[1,2,3]", output: "[2,3,-1]" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "nextGreater",
    starter: {
      js: "function nextGreater(nums) {\n  // For each element, the next strictly greater to its right, or -1.\n}\n",
      ts: "function nextGreater(nums: number[]): number[] {\n  // For each element, the next strictly greater to its right, or -1.\n  return [];\n}\n",
    },
    visible: [
      { args: [[2, 1, 3]], expected: [3, 3, -1] },
      { args: [[5, 4, 3]], expected: [-1, -1, -1] },
      { args: [[1, 2, 3]], expected: [2, 3, -1] },
    ],
    hidden: [
      { args: [[]], expected: [] },
      { args: [[1]], expected: [-1] },
      { args: [[3, 1, 2]], expected: [-1, 2, -1] },
      { args: [[1, 3, 2, 4]], expected: [3, 4, 4, -1] },
      { args: [[2, 2, 2]], expected: [-1, -1, -1] },
      { args: [[4, 5, 2, 10]], expected: [5, 10, 10, -1] },
    ],
    hints: [
      "Brute force rescans the right side for each element — can a stack remember 'still waiting for a bigger value'?",
      "Keep a stack of indices whose answer is unknown; when a bigger value arrives it resolves everything smaller on top.",
      "For each i, while stack top's value < nums[i], pop and set its answer to nums[i]; then push i.",
    ],
    solutions: [
      {
        label: "Monotonic stack",
        approach: "Resolve waiting indices whenever a larger value appears.",
        js: "function nextGreater(nums) {\n  const res = new Array(nums.length).fill(-1);\n  const stack = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {\n      res[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}\n",
        ts: "function nextGreater(nums: number[]): number[] {\n  const res = new Array(nums.length).fill(-1);\n  const stack: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (stack.length && nums[stack[stack.length - 1]!]! < nums[i]!) {\n      res[stack.pop()!] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force",
        approach: "For each element scan rightward for the first larger value.",
        js: "function nextGreater(nums) {\n  const res = [];\n  for (let i = 0; i < nums.length; i++) {\n    let found = -1;\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[j] > nums[i]) { found = nums[j]; break; }\n    }\n    res.push(found);\n  }\n  return res;\n}\n",
        ts: "function nextGreater(nums: number[]): number[] {\n  const res: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    let found = -1;\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[j]! > nums[i]!) { found = nums[j]!; break; }\n    }\n    res.push(found);\n  }\n  return res;\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "st-backspace",
    slug: "backspace-compare",
    title: "Backspace Compare",
    difficulty: "medium",
    statement:
      "Two strings are typed where '#' means backspace. Return `true` if they produce the same final text.",
    examples: [
      { input: '"ab#c", "ad#c"', output: "true", explanation: "Both become 'ac'." },
      { input: '"a#c", "b"', output: "false" },
      { input: '"", ""', output: "true" },
    ],
    constraints: ["0 <= a.length, b.length <= 10000", "'#' is a backspace"],
    functionName: "backspaceCompare",
    starter: {
      js: "function backspaceCompare(a, b) {\n  // True if both strings resolve to the same text.\n}\n",
      ts: "function backspaceCompare(a: string, b: string): boolean {\n  // True if both strings resolve to the same text.\n  return false;\n}\n",
    },
    visible: [
      { args: ["ab#c", "ad#c"], expected: true },
      { args: ["a#c", "b"], expected: false },
      { args: ["", ""], expected: true },
    ],
    hidden: [
      { args: ["#", ""], expected: true },
      { args: ["a#", "b#"], expected: true },
      { args: ["xy#z", "xzz#"], expected: true },
      { args: ["a#b#", ""], expected: true },
      { args: ["ab", "a#b"], expected: false },
      { args: ["a##c", "#a#c"], expected: true },
    ],
    hints: [
      "Simulate the typing: a normal character is added, a '#' deletes the most recent character.",
      "Build each final string with a stack, then compare the two results.",
      "build(s) = for ch: ch === '#' ? stack.pop() : stack.push(ch); return stack.join('').",
    ],
    solutions: [
      {
        label: "Build with a stack",
        approach: "Resolve each string to its final text, then compare.",
        js: "function backspaceCompare(a, b) {\n  const build = (s) => {\n    const stack = [];\n    for (const ch of s) { if (ch === '#') stack.pop(); else stack.push(ch); }\n    return stack.join('');\n  };\n  return build(a) === build(b);\n}\n",
        ts: "function backspaceCompare(a: string, b: string): boolean {\n  const build = (s: string) => {\n    const stack: string[] = [];\n    for (const ch of s) { if (ch === '#') stack.pop(); else stack.push(ch); }\n    return stack.join('');\n  };\n  return build(a) === build(b);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Reduce",
        approach: "Fold each string into its resolved characters.",
        js: "function backspaceCompare(a, b) {\n  const build = (s) => s.split('').reduce((acc, ch) => {\n    if (ch === '#') acc.pop(); else acc.push(ch);\n    return acc;\n  }, []).join('');\n  return build(a) === build(b);\n}\n",
        ts: "function backspaceCompare(a: string, b: string): boolean {\n  const build = (s: string) => s.split('').reduce<string[]>((acc, ch) => {\n    if (ch === '#') acc.pop(); else acc.push(ch);\n    return acc;\n  }, []).join('');\n  return build(a) === build(b);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },

  /* -------------------- Queues & Deques -------------------- */
  {
    id: "q-generate-binary",
    slug: "generate-binary",
    title: "Generate Binary Numbers",
    difficulty: "medium",
    statement:
      "Return the binary representations of the numbers 1 through `n` (as strings), in order.",
    examples: [
      { input: "3", output: '["1","10","11"]' },
      { input: "1", output: '["1"]' },
      { input: "0", output: "[]" },
    ],
    constraints: ["0 <= n <= 10000"],
    functionName: "generateBinary",
    starter: {
      js: "function generateBinary(n) {\n  // Binary strings for 1..n.\n}\n",
      ts: "function generateBinary(n: number): string[] {\n  // Binary strings for 1..n.\n  return [];\n}\n",
    },
    visible: [
      { args: [3], expected: ["1", "10", "11"] },
      { args: [1], expected: ["1"] },
      { args: [0], expected: [] },
    ],
    hidden: [
      { args: [2], expected: ["1", "10"] },
      { args: [4], expected: ["1", "10", "11", "100"] },
      { args: [5], expected: ["1", "10", "11", "100", "101"] },
      { args: [6], expected: ["1", "10", "11", "100", "101", "110"] },
      { args: [7], expected: ["1", "10", "11", "100", "101", "110", "111"] },
      { args: [8], expected: ["1", "10", "11", "100", "101", "110", "111", "1000"] },
    ],
    hints: [
      "Each binary number's children are itself with a '0' or '1' appended — a breadth-first shape.",
      "Seed a queue with '1'; dequeue one, record it, enqueue that string + '0' and + '1'.",
      "Or simply convert each i to base 2 with i.toString(2).",
    ],
    solutions: [
      {
        label: "Queue (BFS)",
        approach: "Generate numbers level by level using a queue.",
        js: "function generateBinary(n) {\n  const out = [];\n  const queue = ['1'];\n  for (let i = 0; i < n; i++) {\n    const cur = queue.shift();\n    out.push(cur);\n    queue.push(cur + '0', cur + '1');\n  }\n  return out;\n}\n",
        ts: "function generateBinary(n: number): string[] {\n  const out: string[] = [];\n  const queue: string[] = ['1'];\n  for (let i = 0; i < n; i++) {\n    const cur = queue.shift()!;\n    out.push(cur);\n    queue.push(cur + '0', cur + '1');\n  }\n  return out;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Base conversion",
        approach: "Convert each integer directly to base 2.",
        js: "function generateBinary(n) {\n  const out = [];\n  for (let i = 1; i <= n; i++) out.push(i.toString(2));\n  return out;\n}\n",
        ts: "function generateBinary(n: number): string[] {\n  const out: string[] = [];\n  for (let i = 1; i <= n; i++) out.push(i.toString(2));\n  return out;\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "q-reverse-first-k",
    slug: "reverse-first-k",
    title: "Reverse First K",
    difficulty: "easy",
    statement:
      "Return the list with the first `k` elements reversed and the rest left in place.",
    examples: [
      { input: "[1,2,3,4,5], 2", output: "[2,1,3,4,5]" },
      { input: "[1,2,3], 3", output: "[3,2,1]" },
      { input: "[1,2,3], 0", output: "[1,2,3]" },
    ],
    constraints: ["0 <= values.length <= 10000", "0 <= k <= values.length"],
    functionName: "reverseFirstK",
    starter: {
      js: "function reverseFirstK(values, k) {\n  // Reverse the first k elements.\n}\n",
      ts: "function reverseFirstK(values: number[], k: number): number[] {\n  // Reverse the first k elements.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5], 2], expected: [2, 1, 3, 4, 5] },
      { args: [[1, 2, 3], 3], expected: [3, 2, 1] },
      { args: [[1, 2, 3], 0], expected: [1, 2, 3] },
    ],
    hidden: [
      { args: [[], 0], expected: [] },
      { args: [[1], 1], expected: [1] },
      { args: [[1, 2], 2], expected: [2, 1] },
      { args: [[1, 2, 3, 4], 1], expected: [1, 2, 3, 4] },
      { args: [[5, 6, 7, 8], 4], expected: [8, 7, 6, 5] },
      { args: [[9, 8, 7], 2], expected: [8, 9, 7] },
    ],
    hints: [
      "Split the list at index k, reverse the front, and rejoin.",
      "Use slice to isolate the first k, reverse that copy, and concat the remainder.",
      "return values.slice(0, k).reverse().concat(values.slice(k)).",
    ],
    solutions: [
      {
        label: "Slice, reverse, concat",
        approach: "Reverse the front slice and append the untouched tail.",
        js: "function reverseFirstK(values, k) {\n  return values.slice(0, k).reverse().concat(values.slice(k));\n}\n",
        ts: "function reverseFirstK(values: number[], k: number): number[] {\n  return values.slice(0, k).reverse().concat(values.slice(k));\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Two-pointer swap",
        approach: "Swap symmetric positions within the first k on a copy.",
        js: "function reverseFirstK(values, k) {\n  const out = [...values];\n  let i = 0, j = k - 1;\n  while (i < j) { [out[i], out[j]] = [out[j], out[i]]; i++; j--; }\n  return out;\n}\n",
        ts: "function reverseFirstK(values: number[], k: number): number[] {\n  const out = [...values];\n  let i = 0, j = k - 1;\n  while (i < j) { [out[i], out[j]] = [out[j]!, out[i]!]; i++; j--; }\n  return out;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "q-is-palindrome",
    slug: "deque-palindrome",
    title: "Palindrome Check",
    difficulty: "medium",
    statement:
      "Return `true` if the list of numbers reads the same forwards and backwards.",
    examples: [
      { input: "[1,2,1]", output: "true" },
      { input: "[1,2,3]", output: "false" },
      { input: "[]", output: "true" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "isPalindromeDeque",
    starter: {
      js: "function isPalindromeDeque(values) {\n  // True if the sequence is a palindrome.\n}\n",
      ts: "function isPalindromeDeque(values: number[]): boolean {\n  // True if the sequence is a palindrome.\n  return false;\n}\n",
    },
    visible: [
      { args: [[1, 2, 1]], expected: true },
      { args: [[1, 2, 3]], expected: false },
      { args: [[]], expected: true },
    ],
    hidden: [
      { args: [[1]], expected: true },
      { args: [[1, 1]], expected: true },
      { args: [[1, 2]], expected: false },
      { args: [[1, 2, 3, 2, 1]], expected: true },
      { args: [[1, 2, 3, 3, 1]], expected: false },
      { args: [[0, 0, 0]], expected: true },
    ],
    hints: [
      "Compare the two ends of a deque, working inward.",
      "Use two indices from the front and back; every matched pair must be equal.",
      "let i=0, j=n-1; while (i<j) { if (values[i]!==values[j]) return false; i++; j--; }",
    ],
    solutions: [
      {
        label: "Two ends inward",
        approach: "Compare front and back, converging to the middle.",
        js: "function isPalindromeDeque(values) {\n  let i = 0, j = values.length - 1;\n  while (i < j) {\n    if (values[i] !== values[j]) return false;\n    i++; j--;\n  }\n  return true;\n}\n",
        ts: "function isPalindromeDeque(values: number[]): boolean {\n  let i = 0, j = values.length - 1;\n  while (i < j) {\n    if (values[i] !== values[j]) return false;\n    i++; j--;\n  }\n  return true;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Reverse and compare",
        approach: "A palindrome equals its own reverse.",
        js: "function isPalindromeDeque(values) {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
        ts: "function isPalindromeDeque(values: number[]): boolean {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "q-max-sliding-window",
    slug: "max-sliding-window",
    title: "Sliding Window Maximum",
    difficulty: "medium",
    statement:
      "Return the maximum of every contiguous window of size `k` as the window slides across the list.",
    examples: [
      { input: "[1,3,-1,-3,5,3,6,7], 3", output: "[3,3,5,5,6,7]" },
      { input: "[1], 1", output: "[1]" },
      { input: "[9,8,7], 2", output: "[9,8]" },
    ],
    constraints: ["1 <= k <= values.length <= 10000"],
    functionName: "maxSlidingWindow",
    starter: {
      js: "function maxSlidingWindow(nums, k) {\n  // Maximum of each window of size k.\n}\n",
      ts: "function maxSlidingWindow(nums: number[], k: number): number[] {\n  // Maximum of each window of size k.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
      { args: [[1], 1], expected: [1] },
      { args: [[9, 8, 7], 2], expected: [9, 8] },
    ],
    hidden: [
      { args: [[1, 2, 3, 4], 2], expected: [2, 3, 4] },
      { args: [[4, 3, 2, 1], 2], expected: [4, 3, 2] },
      { args: [[2, 2, 2], 2], expected: [2, 2] },
      { args: [[1, 3, 1, 2, 0, 5], 3], expected: [3, 3, 2, 5] },
      { args: [[5], 1], expected: [5] },
      { args: [[1, -1], 1], expected: [1, -1] },
    ],
    hints: [
      "Recomputing each window's max is O(nk). A deque of 'candidates' can do it in O(n).",
      "Keep indices in a deque in decreasing value order; the front is always the current window's max.",
      "Pop smaller values from the back before pushing i; drop the front if it left the window; record nums[front].",
    ],
    solutions: [
      {
        label: "Monotonic deque",
        approach: "Maintain a decreasing deque of indices; its front is the window max.",
        js: "function maxSlidingWindow(nums, k) {\n  const res = [];\n  const dq = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) res.push(nums[dq[0]]);\n  }\n  return res;\n}\n",
        ts: "function maxSlidingWindow(nums: number[], k: number): number[] {\n  const res: number[] = [];\n  const dq: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]!]! <= nums[i]!) dq.pop();\n    dq.push(i);\n    if (dq[0]! <= i - k) dq.shift();\n    if (i >= k - 1) res.push(nums[dq[0]!]!);\n  }\n  return res;\n}\n",
        time: "O(n)",
        space: "O(k)",
      },
      {
        label: "Window scan",
        approach: "Take the max of each window directly.",
        js: "function maxSlidingWindow(nums, k) {\n  const res = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    res.push(Math.max(...nums.slice(i, i + k)));\n  }\n  return res;\n}\n",
        ts: "function maxSlidingWindow(nums: number[], k: number): number[] {\n  const res: number[] = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    res.push(Math.max(...nums.slice(i, i + k)));\n  }\n  return res;\n}\n",
        time: "O(n·k)",
        space: "O(n)",
      },
    ],
  },

  /* -------------------- Hash Tables -------------------- */
  {
    id: "h-two-sum-indices",
    slug: "two-sum-indices",
    title: "Two Sum (Indices)",
    difficulty: "medium",
    statement:
      "Return the indices `[i, j]` (with i < j) of two values that add up to `target`, or an empty array if there is no such pair.",
    examples: [
      { input: "[2,7,11,15], 9", output: "[0,1]" },
      { input: "[3,2,4], 6", output: "[1,2]" },
      { input: "[1,2,3], 7", output: "[]" },
    ],
    constraints: ["0 <= nums.length <= 10000", "return the first pair found scanning left to right"],
    functionName: "twoSumIndices",
    judgeType: "returnValue",
    starter: {
      js: "function twoSumIndices(nums, target) {\n  // Return [i, j] that sum to target, or [].\n}\n",
      ts: "function twoSumIndices(nums: number[], target: number): number[] {\n  // Return [i, j] that sum to target, or [].\n  return [];\n}\n",
    },
    visible: [
      { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { args: [[3, 2, 4], 6], expected: [1, 2] },
      { args: [[1, 2, 3], 7], expected: [] },
    ],
    hidden: [
      { args: [[], 5], expected: [] },
      { args: [[1], 1], expected: [] },
      { args: [[0, 0], 0], expected: [0, 1] },
      { args: [[-1, 4, 2], 1], expected: [0, 2] },
      { args: [[3, 3], 6], expected: [0, 1] },
      { args: [[1, 2, 3, 4], 8], expected: [] },
    ],
    hints: [
      "For each value you need to know whether its complement appeared earlier — and at which index.",
      "Store value → index in a map as you scan; check for target - value first.",
      "if (seen.has(target - nums[i])) return [seen.get(target - nums[i]), i]; seen.set(nums[i], i).",
    ],
    solutions: [
      {
        label: "Complement map",
        approach: "Remember each value's index; look up the needed complement in O(1).",
        js: "function twoSumIndices(nums, target) {\n  const seen = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i];\n    if (seen.has(need)) return [seen.get(need), i];\n    seen.set(nums[i], i);\n  }\n  return [];\n}\n",
        ts: "function twoSumIndices(nums: number[], target: number): number[] {\n  const seen = new Map<number, number>();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i]!;\n    if (seen.has(need)) return [seen.get(need)!, i];\n    seen.set(nums[i]!, i);\n  }\n  return [];\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Brute force",
        approach: "Try every pair of indices.",
        js: "function twoSumIndices(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) return [i, j];\n    }\n  }\n  return [];\n}\n",
        ts: "function twoSumIndices(nums: number[], target: number): number[] {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i]! + nums[j]! === target) return [i, j];\n    }\n  }\n  return [];\n}\n",
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "h-single-number",
    slug: "single-number",
    title: "The Lonely Number",
    difficulty: "easy",
    statement:
      "Every value appears exactly twice except one, which appears once. Return the value that appears once.",
    examples: [
      { input: "[2,2,1]", output: "1" },
      { input: "[4,1,2,1,2]", output: "4" },
      { input: "[7]", output: "7" },
    ],
    constraints: ["1 <= nums.length <= 10000", "exactly one value appears once"],
    functionName: "singleNumber",
    starter: {
      js: "function singleNumber(nums) {\n  // Return the value that appears exactly once.\n}\n",
      ts: "function singleNumber(nums: number[]): number {\n  // Return the value that appears exactly once.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 2, 1]], expected: 1 },
      { args: [[4, 1, 2, 1, 2]], expected: 4 },
      { args: [[7]], expected: 7 },
    ],
    hidden: [
      { args: [[1, 1, 2]], expected: 2 },
      { args: [[0, 0, 5]], expected: 5 },
      { args: [[-1, -1, -3]], expected: -3 },
      { args: [[10, 20, 10]], expected: 20 },
      { args: [[1, 2, 2, 1, 99]], expected: 99 },
      { args: [[-5, -5, -8, -8, 4]], expected: 4 },
    ],
    hints: [
      "Counting each value works, but there's an O(1)-space trick with a bitwise operator.",
      "XOR is its own inverse: a ^ a === 0, so pairs cancel and only the lonely value remains.",
      "return nums.reduce((acc, n) => acc ^ n, 0).",
    ],
    solutions: [
      {
        label: "XOR everything",
        approach: "Pairs cancel under XOR, leaving the unique value.",
        js: "function singleNumber(nums) {\n  return nums.reduce((acc, n) => acc ^ n, 0);\n}\n",
        ts: "function singleNumber(nums: number[]): number {\n  return nums.reduce((acc, n) => acc ^ n, 0);\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Count with a map",
        approach: "Tally occurrences and return the value seen once.",
        js: "function singleNumber(nums) {\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  for (const [n, c] of counts) if (c === 1) return n;\n  return 0;\n}\n",
        ts: "function singleNumber(nums: number[]): number {\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  for (const [n, c] of counts) if (c === 1) return n;\n  return 0;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "h-intersection",
    slug: "array-intersection",
    title: "Array Intersection",
    difficulty: "easy",
    statement:
      "Return the distinct values that appear in both lists, sorted in ascending order.",
    examples: [
      { input: "[1,2,2,1], [2,2]", output: "[2]" },
      { input: "[1,2,3], [4,5]", output: "[]" },
      { input: "[4,9,5], [9,4,9,8,4]", output: "[4,9]" },
    ],
    constraints: ["0 <= a.length, b.length <= 10000"],
    functionName: "intersection",
    starter: {
      js: "function intersection(a, b) {\n  // Distinct common values, sorted ascending.\n}\n",
      ts: "function intersection(a: number[], b: number[]): number[] {\n  // Distinct common values, sorted ascending.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 2, 1], [2, 2]], expected: [2] },
      { args: [[1, 2, 3], [4, 5]], expected: [] },
      { args: [[4, 9, 5], [9, 4, 9, 8, 4]], expected: [4, 9] },
    ],
    hidden: [
      { args: [[], [1]], expected: [] },
      { args: [[1], [1]], expected: [1] },
      { args: [[1, 2, 3], [3, 2, 1]], expected: [1, 2, 3] },
      { args: [[5, 5], [5]], expected: [5] },
      { args: [[1, 2], [2, 3]], expected: [2] },
      { args: [[0, -1], [-1, 0, 0]], expected: [-1, 0] },
    ],
    hints: [
      "Membership tests in one list should be O(1).",
      "Put one list in a Set, keep the distinct values of the other that are in it, then sort.",
      "const sa = new Set(a); return [...new Set(b.filter(x => sa.has(x)))].sort((x, y) => x - y).",
    ],
    solutions: [
      {
        label: "Set membership",
        approach: "Filter distinct values of b by membership in a, then sort.",
        js: "function intersection(a, b) {\n  const sa = new Set(a);\n  return [...new Set(b.filter((x) => sa.has(x)))].sort((x, y) => x - y);\n}\n",
        ts: "function intersection(a: number[], b: number[]): number[] {\n  const sa = new Set(a);\n  return [...new Set(b.filter((x) => sa.has(x)))].sort((x, y) => x - y);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Two sets",
        approach: "Intersect two sets, then sort the result.",
        js: "function intersection(a, b) {\n  const sa = new Set(a), sb = new Set(b);\n  const out = [];\n  for (const x of sa) if (sb.has(x)) out.push(x);\n  return out.sort((x, y) => x - y);\n}\n",
        ts: "function intersection(a: number[], b: number[]): number[] {\n  const sa = new Set(a), sb = new Set(b);\n  const out: number[] = [];\n  for (const x of sa) if (sb.has(x)) out.push(x);\n  return out.sort((x, y) => x - y);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "h-majority-element",
    slug: "majority-element",
    title: "Majority Element",
    difficulty: "medium",
    statement:
      "One value appears more than half the time in the list. Return it.",
    examples: [
      { input: "[3,2,3]", output: "3" },
      { input: "[2,2,1,1,2,2]", output: "2" },
      { input: "[1]", output: "1" },
    ],
    constraints: ["1 <= nums.length <= 10000", "a strict majority element always exists"],
    functionName: "majorityElement",
    starter: {
      js: "function majorityElement(nums) {\n  // Return the value appearing more than n/2 times.\n}\n",
      ts: "function majorityElement(nums: number[]): number {\n  // Return the value appearing more than n/2 times.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[3, 2, 3]], expected: 3 },
      { args: [[2, 2, 1, 1, 2, 2]], expected: 2 },
      { args: [[1]], expected: 1 },
    ],
    hidden: [
      { args: [[1, 1, 2]], expected: 1 },
      { args: [[5, 5, 5, 5, 1, 2, 3]], expected: 5 },
      { args: [[7, 7]], expected: 7 },
      { args: [[0, 0, 0, 1]], expected: 0 },
      { args: [[-1, -1, -1, 2, 2]], expected: -1 },
      { args: [[4, 4, 4, 4]], expected: 4 },
    ],
    hints: [
      "Counting occurrences with a map always works.",
      "For O(1) space, use the Boyer–Moore vote: a majority survives pairing off different values.",
      "Keep a candidate and a count; on a match count++, else count--; reset the candidate at 0.",
    ],
    solutions: [
      {
        label: "Boyer–Moore vote",
        approach: "Cancel differing votes; the majority survives.",
        js: "function majorityElement(nums) {\n  let candidate = nums[0], count = 0;\n  for (const n of nums) {\n    if (count === 0) candidate = n;\n    count += n === candidate ? 1 : -1;\n  }\n  return candidate;\n}\n",
        ts: "function majorityElement(nums: number[]): number {\n  let candidate = nums[0]!, count = 0;\n  for (const n of nums) {\n    if (count === 0) candidate = n;\n    count += n === candidate ? 1 : -1;\n  }\n  return candidate;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Count map",
        approach: "Tally and return the value passing n/2.",
        js: "function majorityElement(nums) {\n  const counts = new Map();\n  for (const n of nums) {\n    counts.set(n, (counts.get(n) || 0) + 1);\n    if (counts.get(n) > nums.length / 2) return n;\n  }\n  return nums[0];\n}\n",
        ts: "function majorityElement(nums: number[]): number {\n  const counts = new Map<number, number>();\n  for (const n of nums) {\n    counts.set(n, (counts.get(n) || 0) + 1);\n    if (counts.get(n)! > nums.length / 2) return n;\n  }\n  return nums[0]!;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },

  /* -------------------- Trees & BSTs -------------------- */
  {
    id: "t-bst-inorder",
    slug: "bst-inorder",
    title: "BST In-Order",
    difficulty: "easy",
    statement:
      "Insert the given values (in order) into a binary search tree, ignoring duplicates, and return an in-order traversal — i.e. the distinct values sorted ascending.",
    examples: [
      { input: "[5,3,8,3]", output: "[3,5,8]" },
      { input: "[]", output: "[]" },
      { input: "[1]", output: "[1]" },
    ],
    constraints: ["0 <= insertions.length <= 10000"],
    functionName: "bstInorder",
    starter: {
      js: "function bstInorder(insertions) {\n  // In-order traversal of the BST built from insertions.\n}\n",
      ts: "function bstInorder(insertions: number[]): number[] {\n  // In-order traversal of the BST built from insertions.\n  return [];\n}\n",
    },
    visible: [
      { args: [[5, 3, 8, 3]], expected: [3, 5, 8] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [1] },
    ],
    hidden: [
      { args: [[2, 1, 3]], expected: [1, 2, 3] },
      { args: [[3, 2, 1]], expected: [1, 2, 3] },
      { args: [[1, 1, 1]], expected: [1] },
      { args: [[10, 5, 15, 5, 10]], expected: [5, 10, 15] },
      { args: [[-1, -2, 0]], expected: [-2, -1, 0] },
      { args: [[4]], expected: [4] },
    ],
    hints: [
      "An in-order traversal of a BST always yields sorted values.",
      "So the answer is just the distinct values sorted ascending.",
      "return [...new Set(insertions)].sort((a, b) => a - b).",
    ],
    solutions: [
      {
        label: "Distinct and sort",
        approach: "In-order of a BST equals the sorted distinct values.",
        js: "function bstInorder(insertions) {\n  return [...new Set(insertions)].sort((a, b) => a - b);\n}\n",
        ts: "function bstInorder(insertions: number[]): number[] {\n  return [...new Set(insertions)].sort((a, b) => a - b);\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Actually build the BST",
        approach: "Insert into a real BST, then traverse left-node-right.",
        js: "function bstInorder(insertions) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  const out = [];\n  const walk = (n) => { if (!n) return; walk(n.left); out.push(n.value); walk(n.right); };\n  walk(root);\n  return out;\n}\n",
        ts: "function bstInorder(insertions: number[]): number[] {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  const out: number[] = [];\n  const walk = (n: N | null) => { if (!n) return; walk(n.left); out.push(n.value); walk(n.right); };\n  walk(root);\n  return out;\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "t-bst-height",
    slug: "bst-height",
    title: "BST Height",
    difficulty: "medium",
    statement:
      "Insert the given values (in order) into a binary search tree, then return its height measured in edges (an empty tree is -1, a single node is 0). The shape — and thus the height — depends on the insertion order.",
    examples: [
      { input: "[2,1,3]", output: "1" },
      { input: "[1,2,3]", output: "2", explanation: "Inserting in sorted order makes a chain." },
      { input: "[]", output: "-1" },
    ],
    constraints: ["0 <= insertions.length <= 10000"],
    functionName: "bstHeight",
    starter: {
      js: "function bstHeight(insertions) {\n  // Height (in edges) of the BST built from insertions.\n}\n",
      ts: "function bstHeight(insertions: number[]): number {\n  // Height (in edges) of the BST built from insertions.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[2, 1, 3]], expected: 1 },
      { args: [[1, 2, 3]], expected: 2 },
      { args: [[]], expected: -1 },
    ],
    hidden: [
      { args: [[1]], expected: 0 },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: 2 },
      { args: [[3, 2, 1]], expected: 2 },
      { args: [[1, 2, 3, 4, 5]], expected: 4 },
      { args: [[10, 5, 15]], expected: 1 },
      { args: [[2, 1]], expected: 1 },
    ],
    hints: [
      "You must actually build the tree — the height depends on the order values arrive.",
      "Insert each value, then compute height recursively: an empty subtree is -1, otherwise 1 + max(left, right).",
      "height(node) = node ? 1 + max(height(left), height(right)) : -1.",
    ],
    solutions: [
      {
        label: "Build then measure",
        approach: "Insert into a BST, then recurse for the height.",
        js: "function bstHeight(insertions) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  const height = (n) => (n ? 1 + Math.max(height(n.left), height(n.right)) : -1);\n  return height(root);\n}\n",
        ts: "function bstHeight(insertions: number[]): number {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  const height = (n: N | null): number => (n ? 1 + Math.max(height(n.left), height(n.right)) : -1);\n  return height(root);\n}\n",
        time: "O(n·h)",
        space: "O(n)",
      },
      {
        label: "Build then BFS levels",
        approach: "Count levels with a breadth-first sweep; height is levels − 1.",
        js: "function bstHeight(insertions) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  if (!root) return -1;\n  let level = -1;\n  let queue = [root];\n  while (queue.length) {\n    level++;\n    const next = [];\n    for (const n of queue) { if (n.left) next.push(n.left); if (n.right) next.push(n.right); }\n    queue = next;\n  }\n  return level;\n}\n",
        ts: "function bstHeight(insertions: number[]): number {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  if (!root) return -1;\n  let level = -1;\n  let queue: N[] = [root];\n  while (queue.length) {\n    level++;\n    const next: N[] = [];\n    for (const n of queue) { if (n.left) next.push(n.left); if (n.right) next.push(n.right); }\n    queue = next;\n  }\n  return level;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "t-bst-contains",
    slug: "bst-contains",
    title: "BST Contains",
    difficulty: "easy",
    statement:
      "Insert the given values into a binary search tree, then return `true` if `target` is present.",
    examples: [
      { input: "[5,3,8], 3", output: "true" },
      { input: "[5,3,8], 6", output: "false" },
      { input: "[], 1", output: "false" },
    ],
    constraints: ["0 <= insertions.length <= 10000"],
    functionName: "bstContains",
    starter: {
      js: "function bstContains(insertions, target) {\n  // Whether target is in the BST.\n}\n",
      ts: "function bstContains(insertions: number[], target: number): boolean {\n  // Whether target is in the BST.\n  return false;\n}\n",
    },
    visible: [
      { args: [[5, 3, 8], 3], expected: true },
      { args: [[5, 3, 8], 6], expected: false },
      { args: [[], 1], expected: false },
    ],
    hidden: [
      { args: [[1], 1], expected: true },
      { args: [[1], 2], expected: false },
      { args: [[10, 5, 15], 15], expected: true },
      { args: [[10, 5, 15], 5], expected: true },
      { args: [[2, 1, 3], 4], expected: false },
      { args: [[7, 7, 7], 7], expected: true },
    ],
    hints: [
      "Membership in a BST is the same as membership in the set of inserted values.",
      "You can search the tree, or just check the set of values.",
      "return new Set(insertions).has(target).",
    ],
    solutions: [
      {
        label: "Set membership",
        approach: "The tree contains exactly the inserted values.",
        js: "function bstContains(insertions, target) {\n  return new Set(insertions).has(target);\n}\n",
        ts: "function bstContains(insertions: number[], target: number): boolean {\n  return new Set(insertions).has(target);\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Search the tree",
        approach: "Build the BST and walk left/right toward the target.",
        js: "function bstContains(insertions, target) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  let cur = root;\n  while (cur) {\n    if (target === cur.value) return true;\n    cur = target < cur.value ? cur.left : cur.right;\n  }\n  return false;\n}\n",
        ts: "function bstContains(insertions: number[], target: number): boolean {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  let cur = root;\n  while (cur) {\n    if (target === cur.value) return true;\n    cur = target < cur.value ? cur.left : cur.right;\n  }\n  return false;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "t-bst-range-count",
    slug: "bst-range-count",
    title: "BST Range Count",
    difficulty: "medium",
    statement:
      "Insert the given values into a binary search tree, then return how many distinct values fall within the inclusive range `[lo, hi]`.",
    examples: [
      { input: "[5,3,8,1,4], 3, 5", output: "3", explanation: "3, 4, and 5." },
      { input: "[1,2,3], 0, 10", output: "3" },
      { input: "[], 1, 5", output: "0" },
    ],
    constraints: ["0 <= insertions.length <= 10000", "lo <= hi"],
    functionName: "bstRangeCount",
    starter: {
      js: "function bstRangeCount(insertions, lo, hi) {\n  // Count distinct values within [lo, hi].\n}\n",
      ts: "function bstRangeCount(insertions: number[], lo: number, hi: number): number {\n  // Count distinct values within [lo, hi].\n  return 0;\n}\n",
    },
    visible: [
      { args: [[5, 3, 8, 1, 4], 3, 5], expected: 3 },
      { args: [[1, 2, 3], 0, 10], expected: 3 },
      { args: [[], 1, 5], expected: 0 },
    ],
    hidden: [
      { args: [[5, 5, 5], 1, 10], expected: 1 },
      { args: [[1, 2, 3, 4, 5], 2, 4], expected: 3 },
      { args: [[10, 20, 30], 15, 25], expected: 1 },
      { args: [[-1, 0, 1], -1, 0], expected: 2 },
      { args: [[7], 7, 7], expected: 1 },
      { args: [[1, 2, 3], 5, 10], expected: 0 },
    ],
    hints: [
      "Only distinct values count, and the range is inclusive on both ends.",
      "Deduplicate, then count values v with lo <= v <= hi.",
      "return [...new Set(insertions)].filter(v => v >= lo && v <= hi).length.",
    ],
    solutions: [
      {
        label: "Distinct then filter",
        approach: "Count the distinct values inside the range.",
        js: "function bstRangeCount(insertions, lo, hi) {\n  return [...new Set(insertions)].filter((v) => v >= lo && v <= hi).length;\n}\n",
        ts: "function bstRangeCount(insertions: number[], lo: number, hi: number): number {\n  return [...new Set(insertions)].filter((v) => v >= lo && v <= hi).length;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "In-order then count",
        approach: "Take the sorted distinct values and count those in range.",
        js: "function bstRangeCount(insertions, lo, hi) {\n  const sorted = [...new Set(insertions)].sort((a, b) => a - b);\n  let count = 0;\n  for (const v of sorted) if (v >= lo && v <= hi) count++;\n  return count;\n}\n",
        ts: "function bstRangeCount(insertions: number[], lo: number, hi: number): number {\n  const sorted = [...new Set(insertions)].sort((a, b) => a - b);\n  let count = 0;\n  for (const v of sorted) if (v >= lo && v <= hi) count++;\n  return count;\n}\n",
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
];

export const stage2Batch2Problems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const stage2Batch2Mcqs: QuizQuestion[] = [
  {
    id: "s2-stack-ops",
    kind: "mcq",
    prompt: "Pushing and popping the top of a stack are each:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 0,
    explanation: "Only the top is touched, so both operations are constant time.",
  },
  {
    id: "s2-stack-search",
    kind: "mcq",
    prompt: "Finding whether an arbitrary value (not the top) is somewhere in a stack is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "A stack only exposes the top, so a full search scans up to n items.",
  },
  {
    id: "s2-queue-ops",
    kind: "mcq",
    prompt: "With a proper queue implementation, enqueue and dequeue are each:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 0,
    explanation: "Both ends are tracked with pointers, so each operation is constant time.",
  },
  {
    id: "s2-queue-array-shift",
    kind: "mcq",
    prompt: "Implementing dequeue with `array.shift()` on a plain array makes each dequeue:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "`shift()` re-indexes every remaining element, so it is linear per call.",
  },
  {
    id: "s2-hash-avg",
    kind: "mcq",
    prompt: "The average-case time for `get` and `set` on a hash table is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 0,
    explanation: "A good hash spreads keys across buckets, giving constant expected work.",
  },
  {
    id: "s2-hash-worst",
    kind: "mcq",
    prompt: "If every key hashes into the same bucket, a `get` degrades to:",
    options: ["O(1)", "O(log n)", "O(n)", "O(2ⁿ)"],
    answerIndex: 2,
    explanation: "All keys chain in one bucket, so lookup scans up to n entries.",
  },
  {
    id: "s2-bst-balanced",
    kind: "mcq",
    prompt: "Searching a *balanced* binary search tree of n values is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answerIndex: 1,
    explanation: "Each step halves the remaining subtree, giving about log₂(n) comparisons.",
  },
  {
    id: "s2-bst-degenerate",
    kind: "mcq",
    prompt: "Searching a degenerate BST (every node has only a right child) is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "The tree is really a linked list, so search walks up to n nodes.",
  },
];

export const stage2Batch2Modules: Module[] = [
  {
    id: "m-ds-stacks",
    stageId: S,
    title: "Stacks",
    kind: "buildLab",
    summary: "Last-in, first-out — the structure behind matching, undo, and monotonic tricks.",
    lessonSections: [
      {
        heading: "Last in, first out",
        body: `A stack only lets you touch the **top**: push to add, pop to remove, peek to look. Every operation is O(1). It's the natural fit whenever the most recent thing must be handled first — bracket matching, undo history, or a call stack.

\`\`\`js
const stack = [];
stack.push('a'); stack.push('b');
console.log(stack.pop());  // b — most recent out first
console.log(stack[stack.length - 1]); // a — peek
\`\`\``,
      },
      {
        heading: "The monotonic stack",
        body: `Keeping a stack whose values stay sorted (a *monotonic stack*) turns many "next greater / previous smaller" problems from O(n²) into O(n): each element is pushed and popped at most once.

**Recognition cues:** "most recent unmatched…", "next greater/smaller", balanced brackets, or undo → reach for a stack. Build one in the lab, then try the drills.`,
      },
    ],
    guidedExampleProblemId: "st-remove-adjacent",
    drillProblemIds: ["st-remove-adjacent", "st-max-depth"],
    testPoolProblemIds: ["st-next-greater", "st-backspace"],
    complexityQuestionIds: ["s2-stack-ops", "s2-stack-search"],
    buildLab: stackLab,
    badgeId: "badge-ds-stacks",
    prerequisiteModuleIds: ["m-ds-arrays"],
  },
  {
    id: "m-ds-queues",
    stageId: S,
    title: "Queues & Deques",
    kind: "buildLab",
    summary: "First-in, first-out — plus the double-ended deque that powers sliding-window tricks.",
    lessonSections: [
      {
        heading: "First in, first out",
        body: `A queue serves items in arrival order: enqueue at the back, dequeue from the front. A **deque** (double-ended queue) allows both ends. With the right implementation every operation is O(1) — but beware \`array.shift()\`, which is O(n) because it re-indexes everything.

\`\`\`js
const q = [];
q.push(1); q.push(2);      // enqueue
console.log(q.shift());    // 1 — front out first (O(n) on a plain array!)
\`\`\``,
      },
      {
        heading: "Deques and sliding windows",
        body: `A monotonic **deque** keeps a window's candidates in order so the maximum (or minimum) is always at the front — the key to O(n) sliding-window extremes. Queues also drive breadth-first generation, like enumerating binary numbers level by level.

**Recognition cues:** process in arrival order, level-by-level generation, or a moving window's max/min → queue or deque. Build a deque in the lab, then take on the drills.`,
      },
    ],
    guidedExampleProblemId: "q-generate-binary",
    drillProblemIds: ["q-generate-binary", "q-reverse-first-k"],
    testPoolProblemIds: ["q-is-palindrome", "q-max-sliding-window"],
    complexityQuestionIds: ["s2-queue-ops", "s2-queue-array-shift"],
    buildLab: dequeLab,
    badgeId: "badge-ds-queues",
    prerequisiteModuleIds: ["m-ds-arrays"],
  },
  {
    id: "m-ds-hash",
    stageId: S,
    title: "Hash Tables",
    kind: "buildLab",
    summary: "Average O(1) lookup by key — the single most useful structure in interviews.",
    lessonSections: [
      {
        heading: "Keys to buckets",
        body: `A hash table turns a key into an array index via a hash function, giving **average O(1)** insert, lookup, and delete. Collisions (two keys landing in the same bucket) are handled by chaining a small list per bucket. In the worst case — everything colliding — a lookup degrades to O(n).

\`\`\`js
const counts = {};
for (const ch of "banana") counts[ch] = (counts[ch] || 0) + 1;
console.log(counts); // { b: 1, a: 3, n: 2 }
\`\`\``,
      },
      {
        heading: "The complement trick",
        body: `Hash maps let you replace an inner loop with an O(1) lookup. "Has the complement appeared?", "seen this before?", "how many of each?" — all become single passes. It's the workhorse behind two-sum, dedup, grouping, and frequency problems.

**Recognition cues:** membership, counting, grouping, or "find the pair/complement" → hash map/set. Build one from scratch in the lab, then try the drills.`,
      },
    ],
    guidedExampleProblemId: "h-two-sum-indices",
    drillProblemIds: ["h-two-sum-indices", "h-single-number"],
    testPoolProblemIds: ["h-intersection", "h-majority-element"],
    complexityQuestionIds: ["s2-hash-avg", "s2-hash-worst"],
    buildLab: hashMapLab,
    badgeId: "badge-ds-hash",
    prerequisiteModuleIds: ["m-ds-arrays"],
  },
  {
    id: "m-ds-trees",
    stageId: S,
    title: "Trees & BSTs",
    kind: "buildLab",
    summary: "Hierarchical data and the ordered binary search tree — O(log n) when balanced.",
    lessonSections: [
      {
        heading: "Nodes with children",
        body: `A binary tree's node has up to two children. A **binary search tree** adds an ordering rule: everything in the left subtree is smaller, everything in the right is larger. That invariant makes search, insert, and delete **O(log n)** — *when the tree stays balanced*.

\`\`\`js
// In-order traversal visits a BST's values in sorted order.
const tree = { value: 2, left: { value: 1, left: null, right: null }, right: { value: 3, left: null, right: null } };
const out = [];
(function walk(n){ if(!n) return; walk(n.left); out.push(n.value); walk(n.right); })(tree);
console.log(out); // [1, 2, 3]
\`\`\``,
      },
      {
        heading: "Balance matters",
        body: `Insert values in sorted order and a BST degenerates into a linked list — search becomes O(n). Real libraries self-balance (red-black, AVL); here you'll feel the difference by measuring height for different insertion orders.

**Recognition cues:** ordered data with fast search/insert/delete, range queries, or "sorted traversal" → BST. Build one in the lab, then tackle the drills.`,
      },
    ],
    guidedExampleProblemId: "t-bst-inorder",
    drillProblemIds: ["t-bst-inorder", "t-bst-height"],
    testPoolProblemIds: ["t-bst-contains", "t-bst-range-count"],
    complexityQuestionIds: ["s2-bst-balanced", "s2-bst-degenerate"],
    buildLab: bstLab,
    badgeId: "badge-ds-trees",
    prerequisiteModuleIds: ["m-ds-linked-lists"],
  },
];
