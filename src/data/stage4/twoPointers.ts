import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s4";
const P = ["two-pointers"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "tp-pair-sum-sorted",
    slug: "pair-sum-sorted",
    title: "Pair Sum (Sorted)",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Given a list sorted ascending and a `target`, return the indices `[i, j]` (i < j) of a pair summing to target using two pointers from the ends, or an empty array.",
    examples: [
      { input: "[2,7,11,15], 9", output: "[0,1]" },
      { input: "[1,2,3], 7", output: "[]" },
      { input: "[1,2,3,4], 5", output: "[0,3]" },
    ],
    constraints: ["input is sorted ascending", "return the pointer-collision pair"],
    functionName: "pairSumSorted",
    starter: {
      js: "function pairSumSorted(sorted, target) {\n  // Two-pointer pair summing to target, or [].\n}\n",
      ts: "function pairSumSorted(sorted: number[], target: number): number[] {\n  // Two-pointer pair summing to target, or [].\n  return [];\n}\n",
    },
    visible: [
      { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { args: [[1, 2, 3], 7], expected: [] },
      { args: [[1, 2, 3, 4], 5], expected: [0, 3] },
    ],
    hidden: [
      { args: [[], 5], expected: [] },
      { args: [[1], 1], expected: [] },
      { args: [[1, 2], 3], expected: [0, 1] },
      { args: [[-3, 0, 3], 0], expected: [0, 2] },
      { args: [[1, 2, 3, 4, 5], 9], expected: [3, 4] },
      { args: [[0, 0], 0], expected: [0, 1] },
    ],
    hints: [
      "Start one pointer at each end. Their sum tells you which pointer to move.",
      "If the sum is too small, move the left pointer right; if too big, move the right pointer left.",
      "while (lo < hi) { s = a[lo]+a[hi]; if (s===target) return [lo,hi]; s<target?lo++:hi--; }",
    ],
    walkthrough: [
      { title: "Use the sorted order", body: "Put one pointer at the smallest value and one at the largest. Their sum tells you which direction can still improve the result." },
      { title: "Move only the pointer that can help", body: "If the sum is too small, moving the right pointer left would only reduce it, so move the left pointer right. If the sum is too large, move the right pointer left." },
      { title: "Stop before pointers cross", body: "Check each pair while the left index is less than the right index. This guarantees two distinct positions and avoids revisiting pairs." },
      { title: "Return the matching indices", body: "Return as soon as the sum equals the target. If the pointers meet without a match, no remaining pair is possible." },
    ],
    solutions: [
      {
        label: "Two pointers",
        approach: "Converge from both ends, steering by the current sum.",
        js: "function pairSumSorted(sorted, target) {\n  let lo = 0, hi = sorted.length - 1;\n  while (lo < hi) {\n    const s = sorted[lo] + sorted[hi];\n    if (s === target) return [lo, hi];\n    if (s < target) lo++; else hi--;\n  }\n  return [];\n}\n",
        ts: "function pairSumSorted(sorted: number[], target: number): number[] {\n  let lo = 0, hi = sorted.length - 1;\n  while (lo < hi) {\n    const s = sorted[lo] + sorted[hi];\n    if (s === target) return [lo, hi];\n    if (s < target) lo++; else hi--;\n  }\n  return [];\n}\n",
        commentedCode: {
          js: "function pairSumSorted(sorted, target) {\n  // Start with the smallest and largest possible values.\n  let lo = 0;\n  let hi = sorted.length - 1;\n\n  // Keep the pair at two distinct positions.\n  while (lo < hi) {\n    // Measure how far the current pair is from the target.\n    const sum = sorted[lo] + sorted[hi];\n    if (sum === target) {\n      return [lo, hi];\n    }\n    // In sorted input, a larger left value is the only way to raise this sum.\n    if (sum < target) {\n      lo++;\n    } else {\n      // A smaller right value is the only way to lower this sum.\n      hi--;\n    }\n  }\n\n  // Every possible end-to-end pair was ruled out.\n  return [];\n}\n",
          ts: "function pairSumSorted(sorted: number[], target: number): number[] {\n  // Start with the smallest and largest possible values.\n  let lo = 0;\n  let hi = sorted.length - 1;\n\n  // Keep the pair at two distinct positions.\n  while (lo < hi) {\n    // Measure how far the current pair is from the target.\n    const sum = sorted[lo] + sorted[hi];\n    if (sum === target) {\n      return [lo, hi];\n    }\n    // In sorted input, a larger left value is the only way to raise this sum.\n    if (sum < target) {\n      lo++;\n    } else {\n      // A smaller right value is the only way to lower this sum.\n      hi--;\n    }\n  }\n\n  // Every possible end-to-end pair was ruled out.\n  return [];\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Brute force",
        approach: "Scan every pair in index order — returns the same lowest-index pair.",
        js: "function pairSumSorted(sorted, target) {\n  for (let i = 0; i < sorted.length; i++) {\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) return [i, j];\n    }\n  }\n  return [];\n}\n",
        ts: "function pairSumSorted(sorted: number[], target: number): number[] {\n  for (let i = 0; i < sorted.length; i++) {\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) return [i, j];\n    }\n  }\n  return [];\n}\n",
        commentedCode: {
          js: "function pairSumSorted(sorted, target) {\n  // Choose the first index of each candidate pair.\n  for (let i = 0; i < sorted.length; i++) {\n    // Pair it with every later index so positions stay distinct.\n    for (let j = i + 1; j < sorted.length; j++) {\n      // Return the first pair whose values hit the target.\n      if (sorted[i] + sorted[j] === target) {\n        return [i, j];\n      }\n    }\n  }\n\n  // No pair added to the target.\n  return [];\n}\n",
          ts: "function pairSumSorted(sorted: number[], target: number): number[] {\n  // Choose the first index of each candidate pair.\n  for (let i = 0; i < sorted.length; i++) {\n    // Pair it with every later index so positions stay distinct.\n    for (let j = i + 1; j < sorted.length; j++) {\n      // Return the first pair whose values hit the target.\n      if (sorted[i] + sorted[j] === target) {\n        return [i, j];\n      }\n    }\n  }\n\n  // No pair added to the target.\n  return [];\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "tp-reverse-array",
    slug: "reverse-in-place",
    title: "Reverse an Array",
    difficulty: "easy",
    patternIds: P,
    statement: "Return the list reversed, using two pointers swapping from both ends inward.",
    examples: [
      { input: "[1,2,3]", output: "[3,2,1]" },
      { input: "[]", output: "[]" },
      { input: "[1]", output: "[1]" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "reverseInPlace",
    starter: {
      js: "function reverseInPlace(nums) {\n  // Reverse using two pointers.\n}\n",
      ts: "function reverseInPlace(nums: number[]): number[] {\n  // Reverse using two pointers.\n  return [];\n}\n",
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
      "Swap the first and last, then move both pointers inward.",
      "Stop when the pointers meet in the middle.",
      "while (i < j) { swap a[i], a[j]; i++; j--; }",
    ],
    walkthrough: [
      { title: "Work in symmetric pairs", body: "The first element belongs at the end, and the last belongs at the start. Keep one pointer at each of those positions." },
      { title: "Swap, then shrink the unsolved region", body: "Exchange the two pointed values. Both positions are now final, so move the left pointer right and the right pointer left." },
      { title: "Stop at the middle", body: "When the pointers meet or cross, every symmetric pair has already been swapped. A middle element in an odd-length list stays where it is." },
      { title: "Keep the caller's input safe", body: "This exercise returns a reversed list, so first copy the input before performing the swaps." },
    ],
    solutions: [
      {
        label: "Two-pointer swap",
        approach: "Exchange symmetric positions on a copy.",
        js: "function reverseInPlace(nums) {\n  const a = [...nums];\n  let i = 0, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
        ts: "function reverseInPlace(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
        commentedCode: {
          js: "function reverseInPlace(nums) {\n  // Copy so the original input array is not mutated.\n  const a = [...nums];\n  // Point at the first and last unsolved positions.\n  let i = 0;\n  let j = a.length - 1;\n\n  // Each swap fixes one symmetric pair.\n  while (i < j) {\n    // Save the left value before overwriting it.\n    const temp = a[i];\n    a[i] = a[j];\n    a[j] = temp;\n    // Move inward to the next pair.\n    i++;\n    j--;\n  }\n\n  // The copy is now reversed.\n  return a;\n}\n",
          ts: "function reverseInPlace(nums: number[]): number[] {\n  // Copy so the original input array is not mutated.\n  const a = [...nums];\n  // Point at the first and last unsolved positions.\n  let i = 0;\n  let j = a.length - 1;\n\n  // Each swap fixes one symmetric pair.\n  while (i < j) {\n    // Save the left value before overwriting it.\n    const temp = a[i];\n    a[i] = a[j];\n    a[j] = temp;\n    // Move inward to the next pair.\n    i++;\n    j--;\n  }\n\n  // The copy is now reversed.\n  return a;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Built-in reverse",
        approach: "Reverse a copy with the standard method.",
        js: "function reverseInPlace(nums) {\n  return [...nums].reverse();\n}\n",
        ts: "function reverseInPlace(nums: number[]): number[] {\n  return [...nums].reverse();\n}\n",
        commentedCode: {
          js: "function reverseInPlace(nums) {\n  // Copy first because reverse mutates the array it receives.\n  return [...nums].reverse();\n}\n",
          ts: "function reverseInPlace(nums: number[]): number[] {\n  // Copy first because reverse mutates the array it receives.\n  return [...nums].reverse();\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tp-is-palindrome",
    slug: "two-pointer-palindrome",
    title: "Palindrome Check",
    difficulty: "easy",
    patternIds: P,
    statement: "Return `true` if the string reads the same forwards and backwards (exact characters).",
    examples: [
      { input: '"racecar"', output: "true" },
      { input: '"hello"', output: "false" },
      { input: '""', output: "true" },
    ],
    constraints: ["0 <= s.length <= 10000"],
    functionName: "isPalindromeTP",
    starter: {
      js: "function isPalindromeTP(s) {\n  // Two-pointer palindrome check.\n}\n",
      ts: "function isPalindromeTP(s: string): boolean {\n  // Two-pointer palindrome check.\n  return false;\n}\n",
    },
    visible: [
      { args: ["racecar"], expected: true },
      { args: ["hello"], expected: false },
      { args: [""], expected: true },
    ],
    hidden: [
      { args: ["a"], expected: true },
      { args: ["ab"], expected: false },
      { args: ["abba"], expected: true },
      { args: ["Aba"], expected: false },
      { args: ["12321"], expected: true },
      { args: ["1231"], expected: false },
    ],
    hints: [
      "Compare the outermost characters and move inward.",
      "Any mismatched pair means it's not a palindrome.",
      "while (i < j) { if (s[i] !== s[j]) return false; i++; j--; }",
    ],
    walkthrough: [
      { title: "Compare mirror positions", body: "A palindrome has the same character at equal distances from each end. Put one pointer at the first character and one at the last." },
      { title: "Reject as soon as a pair disagrees", body: "One mismatched outer pair is enough to prove the string cannot read the same backwards, so return `false` immediately." },
      { title: "Move inward only after a match", body: "When the two characters match, move both pointers toward the middle and repeat the same test for the next pair." },
      { title: "Accept when every pair matched", body: "If the pointers meet or cross without finding a mismatch, all mirror pairs agree. Empty and one-character strings pass naturally." },
    ],
    solutions: [
      {
        label: "Two pointers",
        approach: "Walk inward comparing mirror positions.",
        js: "function isPalindromeTP(s) {\n  let i = 0, j = s.length - 1;\n  while (i < j) { if (s[i] !== s[j]) return false; i++; j--; }\n  return true;\n}\n",
        ts: "function isPalindromeTP(s: string): boolean {\n  let i = 0, j = s.length - 1;\n  while (i < j) { if (s[i] !== s[j]) return false; i++; j--; }\n  return true;\n}\n",
        commentedCode: {
          js: "function isPalindromeTP(s) {\n  // Start at the two characters farthest apart.\n  let i = 0;\n  let j = s.length - 1;\n\n  // Compare every mirrored pair exactly once.\n  while (i < j) {\n    // A mismatch proves the string is not a palindrome.\n    if (s[i] !== s[j]) {\n      return false;\n    }\n    // The outer pair matched, so test the next inner pair.\n    i++;\n    j--;\n  }\n\n  // No mirrored characters disagreed.\n  return true;\n}\n",
          ts: "function isPalindromeTP(s: string): boolean {\n  // Start at the two characters farthest apart.\n  let i = 0;\n  let j = s.length - 1;\n\n  // Compare every mirrored pair exactly once.\n  while (i < j) {\n    // A mismatch proves the string is not a palindrome.\n    if (s[i] !== s[j]) {\n      return false;\n    }\n    // The outer pair matched, so test the next inner pair.\n    i++;\n    j--;\n  }\n\n  // No mirrored characters disagreed.\n  return true;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Reverse compare",
        approach: "Compare the string with its reverse.",
        js: "function isPalindromeTP(s) {\n  return s === s.split('').reverse().join('');\n}\n",
        ts: "function isPalindromeTP(s: string): boolean {\n  return s === s.split('').reverse().join('');\n}\n",
        commentedCode: {
          js: "function isPalindromeTP(s) {\n  // Build a reversed string and compare it with the original.\n  return s === s.split('').reverse().join('');\n}\n",
          ts: "function isPalindromeTP(s: string): boolean {\n  // Build a reversed string and compare it with the original.\n  return s === s.split('').reverse().join('');\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tp-remove-duplicates",
    slug: "remove-duplicates-sorted",
    title: "Remove Duplicates (Sorted)",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a list sorted ascending, return the distinct values in order using a two-pointer (read/write) sweep.",
    examples: [
      { input: "[1,1,2,3,3]", output: "[1,2,3]" },
      { input: "[]", output: "[]" },
      { input: "[5]", output: "[5]" },
    ],
    constraints: ["input is sorted ascending", "0 <= length <= 10000"],
    functionName: "removeDuplicatesSorted",
    starter: {
      js: "function removeDuplicatesSorted(nums) {\n  // Distinct values from a sorted list.\n}\n",
      ts: "function removeDuplicatesSorted(nums: number[]): number[] {\n  // Distinct values from a sorted list.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 1, 2, 3, 3]], expected: [1, 2, 3] },
      { args: [[]], expected: [] },
      { args: [[5]], expected: [5] },
    ],
    hidden: [
      { args: [[1, 1, 1]], expected: [1] },
      { args: [[1, 2, 3]], expected: [1, 2, 3] },
      { args: [[-1, -1, 0, 0]], expected: [-1, 0] },
      { args: [[2, 2, 2, 3]], expected: [2, 3] },
      { args: [[0]], expected: [0] },
      { args: [[1, 2, 2, 2, 3, 4, 4]], expected: [1, 2, 3, 4] },
    ],
    hints: [
      "A write pointer trails behind a read pointer, copying only new values.",
      "Because it's sorted, a value is new exactly when it differs from the last written one.",
      "Append nums[i] only if the output is empty or its last element differs.",
    ],
    walkthrough: [
      { title: "Exploit adjacent duplicates", body: "In sorted input, identical values sit together. A value is new exactly when it differs from the most recently kept value." },
      { title: "Separate reading from writing", body: "Read every value in order, but write to the result only when it begins a new run. The result's final value is the write-side comparison point." },
      { title: "Keep the first of every run", body: "The first value always belongs in the output. Later equal values are skipped, while a different value is appended and becomes the new last kept value." },
      { title: "Return the ordered result", body: "Because values are read left to right and only duplicates are skipped, the result stays sorted and contains each distinct value once." },
    ],
    solutions: [
      {
        label: "Read / write pointers",
        approach: "Copy a value only when it differs from the previous kept value.",
        js: "function removeDuplicatesSorted(nums) {\n  const out = [];\n  for (const v of nums) if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  return out;\n}\n",
        ts: "function removeDuplicatesSorted(nums: number[]): number[] {\n  const out: number[] = [];\n  for (const v of nums) if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  return out;\n}\n",
        commentedCode: {
          js: "function removeDuplicatesSorted(nums) {\n  // Hold the distinct values in their original sorted order.\n  const out = [];\n\n  // Read every input value once.\n  for (const value of nums) {\n    // Keep the first value and each value that starts a new sorted run.\n    if (out.length === 0 || out[out.length - 1] !== value) {\n      out.push(value);\n    }\n  }\n\n  // The output contains one copy of each input value.\n  return out;\n}\n",
          ts: "function removeDuplicatesSorted(nums: number[]): number[] {\n  // Hold the distinct values in their original sorted order.\n  const out: number[] = [];\n\n  // Read every input value once.\n  for (const value of nums) {\n    // Keep the first value and each value that starts a new sorted run.\n    if (out.length === 0 || out[out.length - 1] !== value) {\n      out.push(value);\n    }\n  }\n\n  // The output contains one copy of each input value.\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Set",
        approach: "A Set keeps first occurrences; sorted input preserves order.",
        js: "function removeDuplicatesSorted(nums) {\n  return [...new Set(nums)];\n}\n",
        ts: "function removeDuplicatesSorted(nums: number[]): number[] {\n  return [...new Set(nums)];\n}\n",
        commentedCode: {
          js: "function removeDuplicatesSorted(nums) {\n  // Set preserves each value's first insertion order; spread returns those values as an array.\n  return [...new Set(nums)];\n}\n",
          ts: "function removeDuplicatesSorted(nums: number[]): number[] {\n  // Set preserves each value's first insertion order; spread returns those values as an array.\n  return [...new Set(nums)];\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tp-sort-parity",
    slug: "sort-by-parity",
    title: "Sort by Parity",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the list with all even numbers (in their original order) before all odd numbers (in their original order).",
    examples: [
      { input: "[3,1,2,4]", output: "[2,4,3,1]" },
      { input: "[0]", output: "[0]" },
      { input: "[1,3]", output: "[1,3]" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "sortByParity",
    starter: {
      js: "function sortByParity(nums) {\n  // Evens first (in order), then odds (in order).\n}\n",
      ts: "function sortByParity(nums: number[]): number[] {\n  // Evens first (in order), then odds (in order).\n  return [];\n}\n",
    },
    visible: [
      { args: [[3, 1, 2, 4]], expected: [2, 4, 3, 1] },
      { args: [[0]], expected: [0] },
      { args: [[1, 3]], expected: [1, 3] },
    ],
    hidden: [
      { args: [[]], expected: [] },
      { args: [[2, 4, 6]], expected: [2, 4, 6] },
      { args: [[1, 3, 5]], expected: [1, 3, 5] },
      { args: [[4, 1, 2, 3]], expected: [4, 2, 1, 3] },
      { args: [[-2, -1]], expected: [-2, -1] },
      { args: [[0, 1, 0, 1]], expected: [0, 0, 1, 1] },
    ],
    hints: [
      "Collect the evens and odds separately, preserving order.",
      "Concatenate the evens list before the odds list.",
      "return nums.filter(isEven).concat(nums.filter(isOdd)).",
    ],
    walkthrough: [
      { title: "Notice that the ordering must be stable", body: "The task does not merely group parity; it preserves original order within the even and odd groups. A normal partition swap can break that requirement." },
      { title: "Make two ordered buckets", body: "Scan once. Send each even value to one output list and each odd value to another. Appending in scan order preserves each group’s order." },
      { title: "Place the groups in the required order", body: "After the scan, join the even list before the odd list. No sorting is needed." },
      { title: "Cover empty groups naturally", body: "If all values share a parity, one bucket is empty and concatenation still returns the correct list." },
    ],
    solutions: [
      {
        label: "Partition",
        approach: "Filter into evens and odds, then join.",
        js: "function sortByParity(nums) {\n  const even = [], odd = [];\n  for (const n of nums) (n % 2 === 0 ? even : odd).push(n);\n  return even.concat(odd);\n}\n",
        ts: "function sortByParity(nums: number[]): number[] {\n  const even: number[] = [], odd: number[] = [];\n  for (const n of nums) (n % 2 === 0 ? even : odd).push(n);\n  return even.concat(odd);\n}\n",
        commentedCode: {
          js: "function sortByParity(nums) {\n  // Preserve even and odd values in separate ordered buckets.\n  const evens = [];\n  const odds = [];\n\n  // Read values in input order to preserve stability inside each bucket.\n  for (const value of nums) {\n    if (value % 2 === 0) {\n      evens.push(value);\n    } else {\n      odds.push(value);\n    }\n  }\n\n  // Put all evens before all odds as required.\n  return evens.concat(odds);\n}\n",
          ts: "function sortByParity(nums: number[]): number[] {\n  // Preserve even and odd values in separate ordered buckets.\n  const evens: number[] = [];\n  const odds: number[] = [];\n\n  // Read values in input order to preserve stability inside each bucket.\n  for (const value of nums) {\n    if (value % 2 === 0) {\n      evens.push(value);\n    } else {\n      odds.push(value);\n    }\n  }\n\n  // Put all evens before all odds as required.\n  return evens.concat(odds);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Stable filter",
        approach: "Two filters express the same partition.",
        js: "function sortByParity(nums) {\n  return nums.filter((n) => n % 2 === 0).concat(nums.filter((n) => n % 2 !== 0));\n}\n",
        ts: "function sortByParity(nums: number[]): number[] {\n  return nums.filter((n) => n % 2 === 0).concat(nums.filter((n) => n % 2 !== 0));\n}\n",
        commentedCode: {
          js: "function sortByParity(nums) {\n  // First keep all even values in input order.\n  const evens = nums.filter((value) => value % 2 === 0);\n  // Then keep all odd values in input order.\n  const odds = nums.filter((value) => value % 2 !== 0);\n  // Concatenate the stable groups in the requested order.\n  return evens.concat(odds);\n}\n",
          ts: "function sortByParity(nums: number[]): number[] {\n  // First keep all even values in input order.\n  const evens = nums.filter((value) => value % 2 === 0);\n  // Then keep all odd values in input order.\n  const odds = nums.filter((value) => value % 2 !== 0);\n  // Concatenate the stable groups in the requested order.\n  return evens.concat(odds);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tp-max-area",
    slug: "container-most-water",
    title: "Container With Most Water",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Each value is the height of a vertical line at that index. Return the largest area of water a pair of lines can hold: `min(height[i], height[j]) * (j - i)`.",
    examples: [
      { input: "[1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "[1,1]", output: "1" },
      { input: "[4,3,2,1,4]", output: "16" },
    ],
    constraints: ["0 <= heights.length <= 10000", "heights[i] >= 0"],
    functionName: "maxArea",
    starter: {
      js: "function maxArea(heights) {\n  // Largest area between two lines.\n}\n",
      ts: "function maxArea(heights: number[]): number {\n  // Largest area between two lines.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
      { args: [[1, 1]], expected: 1 },
      { args: [[4, 3, 2, 1, 4]], expected: 16 },
    ],
    hidden: [
      { args: [[2, 1]], expected: 1 },
      { args: [[1, 3]], expected: 1 },
      { args: [[5, 5]], expected: 5 },
      { args: [[1, 2, 4, 3]], expected: 4 },
      { args: [[6, 1, 6]], expected: 12 },
      { args: [[3, 2, 1, 4]], expected: 9 },
    ],
    hints: [
      "Start wide (both ends). Widening isn't possible, so you can only move inward — but which pointer?",
      "Move the pointer at the shorter line: keeping it can never beat the current area.",
      "while (lo < hi) { area = min(h[lo],h[hi])*(hi-lo); move the shorter side inward. }",
    ],
    walkthrough: [
      { title: "Start with the widest container", body: "Put pointers at both ends. This gives the maximum available width; future candidates can only become narrower." },
      { title: "Measure the limiting height", body: "A container’s area is width times its shorter wall. Calculate that area at the current pair and keep the largest value seen." },
      { title: "Discard the wall that limits this pair", body: "Moving the taller wall inward cannot improve the limiting height and always reduces width. Move the shorter wall instead, hoping to find a taller replacement." },
      { title: "Finish when no pair remains", body: "Repeat until the pointers meet. Every discarded shorter wall has been proven unable to form a better container with the remaining positions." },
    ],
    solutions: [
      {
        label: "Two pointers",
        approach: "Shrink from the ends, always advancing the shorter wall.",
        js: "function maxArea(heights) {\n  let lo = 0, hi = heights.length - 1, best = 0;\n  while (lo < hi) {\n    const area = Math.min(heights[lo], heights[hi]) * (hi - lo);\n    if (area > best) best = area;\n    if (heights[lo] < heights[hi]) lo++; else hi--;\n  }\n  return best;\n}\n",
        ts: "function maxArea(heights: number[]): number {\n  let lo = 0, hi = heights.length - 1, best = 0;\n  while (lo < hi) {\n    const area = Math.min(heights[lo], heights[hi]) * (hi - lo);\n    if (area > best) best = area;\n    if (heights[lo] < heights[hi]) lo++; else hi--;\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function maxArea(heights) {\n  // Start with the widest available pair of vertical lines.\n  let lo = 0;\n  let hi = heights.length - 1;\n  // Track the largest container seen so far.\n  let best = 0;\n\n  // Each iteration considers one distinct pair of lines.\n  while (lo < hi) {\n    // The shorter wall limits the water height; distance supplies the width.\n    const area = Math.min(heights[lo], heights[hi]) * (hi - lo);\n    // Keep this area only if it improves the answer.\n    best = Math.max(best, area);\n\n    // Discard the shorter wall because keeping it cannot beat this width.\n    if (heights[lo] < heights[hi]) {\n      lo++;\n    } else {\n      hi--;\n    }\n  }\n\n  // Every candidate pair has been considered or safely discarded.\n  return best;\n}\n",
          ts: "function maxArea(heights: number[]): number {\n  // Start with the widest available pair of vertical lines.\n  let lo = 0;\n  let hi = heights.length - 1;\n  // Track the largest container seen so far.\n  let best = 0;\n\n  // Each iteration considers one distinct pair of lines.\n  while (lo < hi) {\n    // The shorter wall limits the water height; distance supplies the width.\n    const area = Math.min(heights[lo], heights[hi]) * (hi - lo);\n    // Keep this area only if it improves the answer.\n    best = Math.max(best, area);\n\n    // Discard the shorter wall because keeping it cannot beat this width.\n    if (heights[lo] < heights[hi]) {\n      lo++;\n    } else {\n      hi--;\n    }\n  }\n\n  // Every candidate pair has been considered or safely discarded.\n  return best;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Brute force",
        approach: "Try every pair of lines.",
        js: "function maxArea(heights) {\n  let best = 0;\n  for (let i = 0; i < heights.length; i++) {\n    for (let j = i + 1; j < heights.length; j++) {\n      best = Math.max(best, Math.min(heights[i], heights[j]) * (j - i));\n    }\n  }\n  return best;\n}\n",
        ts: "function maxArea(heights: number[]): number {\n  let best = 0;\n  for (let i = 0; i < heights.length; i++) {\n    for (let j = i + 1; j < heights.length; j++) {\n      best = Math.max(best, Math.min(heights[i], heights[j]) * (j - i));\n    }\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function maxArea(heights) {\n  // No container has been measured yet.\n  let best = 0;\n\n  // Choose the left wall of every possible pair.\n  for (let i = 0; i < heights.length; i++) {\n    // Pair it with every wall to its right.\n    for (let j = i + 1; j < heights.length; j++) {\n      // Compute this container and retain the largest area.\n      const area = Math.min(heights[i], heights[j]) * (j - i);\n      best = Math.max(best, area);\n    }\n  }\n\n  // Return the largest area among all pairs.\n  return best;\n}\n",
          ts: "function maxArea(heights: number[]): number {\n  // No container has been measured yet.\n  let best = 0;\n\n  // Choose the left wall of every possible pair.\n  for (let i = 0; i < heights.length; i++) {\n    // Pair it with every wall to its right.\n    for (let j = i + 1; j < heights.length; j++) {\n      // Compute this container and retain the largest area.\n      const area = Math.min(heights[i], heights[j]) * (j - i);\n      best = Math.max(best, area);\n    }\n  }\n\n  // Return the largest area among all pairs.\n  return best;\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "tp-squares-sorted",
    slug: "sorted-squares",
    title: "Squares of a Sorted Array",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Given a list sorted ascending (possibly with negatives), return the squares of each value, sorted ascending.",
    examples: [
      { input: "[-4,-1,0,3,10]", output: "[0,1,9,16,100]" },
      { input: "[]", output: "[]" },
      { input: "[1,2,3]", output: "[1,4,9]" },
    ],
    constraints: ["input is sorted ascending", "0 <= length <= 10000"],
    functionName: "sortedSquares",
    starter: {
      js: "function sortedSquares(sorted) {\n  // Squares, sorted ascending.\n}\n",
      ts: "function sortedSquares(sorted: number[]): number[] {\n  // Squares, sorted ascending.\n  return [];\n}\n",
    },
    visible: [
      { args: [[-4, -1, 0, 3, 10]], expected: [0, 1, 9, 16, 100] },
      { args: [[]], expected: [] },
      { args: [[1, 2, 3]], expected: [1, 4, 9] },
    ],
    hidden: [
      { args: [[-3, -2, -1]], expected: [1, 4, 9] },
      { args: [[0]], expected: [0] },
      { args: [[-1, 1]], expected: [1, 1] },
      { args: [[-5, 0, 5]], expected: [0, 25, 25] },
      { args: [[2]], expected: [4] },
      { args: [[-2, -1, 0, 1, 2]], expected: [0, 1, 1, 4, 4] },
    ],
    hints: [
      "The largest square is at one of the two ends (most negative or most positive).",
      "Two pointers: compare the squared ends and fill the result from the back.",
      "Or simply square everything and sort — O(n log n).",
    ],
    walkthrough: [
      { title: "Identify where the largest square can be", body: "The input is sorted, but squaring negatives reverses their magnitude order. The largest remaining square must come from either end." },
      { title: "Fill the result from largest to smallest", body: "Allocate the output at its final size and place the larger squared end in the last unfilled position." },
      { title: "Advance the end that supplied the value", body: "After placing a square, move only the pointer that produced it, then move the output position one step left." },
      { title: "Finish with a sorted result", body: "Writing the largest remaining value at the back on every step leaves the final output in ascending order." },
    ],
    solutions: [
      {
        label: "Two-pointer merge",
        approach: "Fill from the back by comparing squared ends.",
        js: "function sortedSquares(sorted) {\n  const n = sorted.length;\n  const out = new Array(n);\n  let lo = 0, hi = n - 1;\n  for (let k = n - 1; k >= 0; k--) {\n    const a = sorted[lo] * sorted[lo];\n    const b = sorted[hi] * sorted[hi];\n    if (a > b) { out[k] = a; lo++; } else { out[k] = b; hi--; }\n  }\n  return out;\n}\n",
        ts: "function sortedSquares(sorted: number[]): number[] {\n  const n = sorted.length;\n  const out = new Array(n);\n  let lo = 0, hi = n - 1;\n  for (let k = n - 1; k >= 0; k--) {\n    const a = sorted[lo] * sorted[lo];\n    const b = sorted[hi] * sorted[hi];\n    if (a > b) { out[k] = a; lo++; } else { out[k] = b; hi--; }\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function sortedSquares(sorted) {\n  // Reserve every output position before filling from the back.\n  const out = new Array(sorted.length);\n  let lo = 0;\n  let hi = sorted.length - 1;\n\n  // Place the largest remaining square at each descending output index.\n  for (let write = sorted.length - 1; write >= 0; write--) {\n    const leftSquare = sorted[lo] * sorted[lo];\n    const rightSquare = sorted[hi] * sorted[hi];\n    if (leftSquare > rightSquare) {\n      out[write] = leftSquare;\n      lo++;\n    } else {\n      out[write] = rightSquare;\n      hi--;\n    }\n  }\n\n  // Values were written largest to smallest from the end, so this is ascending.\n  return out;\n}\n",
          ts: "function sortedSquares(sorted: number[]): number[] {\n  // Reserve every output position before filling from the back.\n  const out: number[] = new Array(sorted.length);\n  let lo = 0;\n  let hi = sorted.length - 1;\n\n  // Place the largest remaining square at each descending output index.\n  for (let write = sorted.length - 1; write >= 0; write--) {\n    const leftSquare = sorted[lo] * sorted[lo];\n    const rightSquare = sorted[hi] * sorted[hi];\n    if (leftSquare > rightSquare) {\n      out[write] = leftSquare;\n      lo++;\n    } else {\n      out[write] = rightSquare;\n      hi--;\n    }\n  }\n\n  // Values were written largest to smallest from the end, so this is ascending.\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Square then sort",
        approach: "Square every value and sort.",
        js: "function sortedSquares(sorted) {\n  return sorted.map((x) => x * x).sort((a, b) => a - b);\n}\n",
        ts: "function sortedSquares(sorted: number[]): number[] {\n  return sorted.map((x) => x * x).sort((a, b) => a - b);\n}\n",
        commentedCode: {
          js: "function sortedSquares(sorted) {\n  // Square each value, then restore ascending order with a numeric sort.\n  return sorted.map((value) => value * value).sort((a, b) => a - b);\n}\n",
          ts: "function sortedSquares(sorted: number[]): number[] {\n  // Square each value, then restore ascending order with a numeric sort.\n  return sorted.map((value) => value * value).sort((a, b) => a - b);\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tp-count-pairs",
    slug: "count-pairs-with-sum",
    title: "Count Pairs with Sum",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a list sorted ascending and a `target`, return the number of index pairs (i < j) whose values sum to target.",
    examples: [
      { input: "[1,2,3,4], 5", output: "2" },
      { input: "[1,1,1], 2", output: "3" },
      { input: "[1,2,3], 7", output: "0" },
    ],
    constraints: ["input is sorted ascending", "0 <= length <= 10000"],
    functionName: "countPairsWithSum",
    starter: {
      js: "function countPairsWithSum(sorted, target) {\n  // Number of index pairs summing to target.\n}\n",
      ts: "function countPairsWithSum(sorted: number[], target: number): number {\n  // Number of index pairs summing to target.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4], 5], expected: 2 },
      { args: [[1, 1, 1], 2], expected: 3 },
      { args: [[1, 2, 3], 7], expected: 0 },
    ],
    hidden: [
      { args: [[], 5], expected: 0 },
      { args: [[2, 2, 2, 2], 4], expected: 6 },
      { args: [[1, 2, 3, 4, 5], 6], expected: 2 },
      { args: [[0, 0, 0], 0], expected: 3 },
      { args: [[1, 3, 3, 5], 6], expected: 2 },
      { args: [[2, 4, 6], 10], expected: 1 },
    ],
    hints: [
      "Two pointers from the ends, but count carefully when values repeat.",
      "When both ends are equal and match the target, every pair among them counts: m*(m-1)/2.",
      "Otherwise count (left duplicates × right duplicates) and move both pointers inward.",
    ],
    walkthrough: [
      { title: "Use sorted order to steer the search", body: "Start at both ends. A sum below the target needs a larger left value; a sum above needs a smaller right value." },
      { title: "Count groups, not just one match", body: "When a matching sum uses different values, count how many equal copies appear at the left and right ends. Every left copy pairs with every right copy." },
      { title: "Handle one repeated value specially", body: "If both matching ends have the same value, every pair among the remaining copies works. For `m` copies, that is `m × (m - 1) / 2` pairs." },
      { title: "Skip each consumed group", body: "After counting a matched group, move past all of its copies so no index pair is counted twice." },
    ],
    solutions: [
      {
        label: "Two pointers with duplicate counting",
        approach: "Group equal values at each end and multiply their counts.",
        js: "function countPairsWithSum(sorted, target) {\n  let lo = 0, hi = sorted.length - 1, count = 0;\n  while (lo < hi) {\n    const s = sorted[lo] + sorted[hi];\n    if (s === target) {\n      if (sorted[lo] === sorted[hi]) { const m = hi - lo + 1; count += (m * (m - 1)) / 2; break; }\n      let lc = 1; while (lo + 1 < hi && sorted[lo + 1] === sorted[lo]) { lo++; lc++; }\n      let hc = 1; while (hi - 1 > lo && sorted[hi - 1] === sorted[hi]) { hi--; hc++; }\n      count += lc * hc; lo++; hi--;\n    } else if (s < target) lo++; else hi--;\n  }\n  return count;\n}\n",
        ts: "function countPairsWithSum(sorted: number[], target: number): number {\n  let lo = 0, hi = sorted.length - 1, count = 0;\n  while (lo < hi) {\n    const s = sorted[lo] + sorted[hi];\n    if (s === target) {\n      if (sorted[lo] === sorted[hi]) { const m = hi - lo + 1; count += (m * (m - 1)) / 2; break; }\n      let lc = 1; while (lo + 1 < hi && sorted[lo + 1] === sorted[lo]) { lo++; lc++; }\n      let hc = 1; while (hi - 1 > lo && sorted[hi - 1] === sorted[hi]) { hi--; hc++; }\n      count += lc * hc; lo++; hi--;\n    } else if (s < target) lo++; else hi--;\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function countPairsWithSum(sorted, target) {\n  // Search the smallest and largest remaining values.\n  let lo = 0;\n  let hi = sorted.length - 1;\n  let count = 0;\n\n  while (lo < hi) {\n    const sum = sorted[lo] + sorted[hi];\n    if (sum < target) {\n      // Raising the left value is the only way to raise this sorted-end sum.\n      lo++;\n    } else if (sum > target) {\n      // Lowering the right value is the only way to lower this sorted-end sum.\n      hi--;\n    } else if (sorted[lo] === sorted[hi]) {\n      // Every pair among m equal remaining values sums to the target.\n      const m = hi - lo + 1;\n      count += (m * (m - 1)) / 2;\n      break;\n    } else {\n      // Count the equal values at the left end.\n      const leftValue = sorted[lo];\n      let leftCount = 0;\n      while (lo <= hi && sorted[lo] === leftValue) {\n        leftCount++;\n        lo++;\n      }\n      // Count the equal values at the right end.\n      const rightValue = sorted[hi];\n      let rightCount = 0;\n      while (lo <= hi && sorted[hi] === rightValue) {\n        rightCount++;\n        hi--;\n      }\n      // Each left copy pairs with each right copy exactly once.\n      count += leftCount * rightCount;\n    }\n  }\n\n  return count;\n}\n",
          ts: "function countPairsWithSum(sorted: number[], target: number): number {\n  // Search the smallest and largest remaining values.\n  let lo = 0;\n  let hi = sorted.length - 1;\n  let count = 0;\n\n  while (lo < hi) {\n    const sum = sorted[lo] + sorted[hi];\n    if (sum < target) {\n      // Raising the left value is the only way to raise this sorted-end sum.\n      lo++;\n    } else if (sum > target) {\n      // Lowering the right value is the only way to lower this sorted-end sum.\n      hi--;\n    } else if (sorted[lo] === sorted[hi]) {\n      // Every pair among m equal remaining values sums to the target.\n      const m = hi - lo + 1;\n      count += (m * (m - 1)) / 2;\n      break;\n    } else {\n      // Count the equal values at the left end.\n      const leftValue = sorted[lo];\n      let leftCount = 0;\n      while (lo <= hi && sorted[lo] === leftValue) {\n        leftCount++;\n        lo++;\n      }\n      // Count the equal values at the right end.\n      const rightValue = sorted[hi];\n      let rightCount = 0;\n      while (lo <= hi && sorted[hi] === rightValue) {\n        rightCount++;\n        hi--;\n      }\n      // Each left copy pairs with each right copy exactly once.\n      count += leftCount * rightCount;\n    }\n  }\n\n  return count;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Brute force",
        approach: "Check every pair directly.",
        js: "function countPairsWithSum(sorted, target) {\n  let count = 0;\n  for (let i = 0; i < sorted.length; i++) {\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) count++;\n    }\n  }\n  return count;\n}\n",
        ts: "function countPairsWithSum(sorted: number[], target: number): number {\n  let count = 0;\n  for (let i = 0; i < sorted.length; i++) {\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) count++;\n    }\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function countPairsWithSum(sorted, target) {\n  // Start with no matching index pairs.\n  let count = 0;\n  // Choose each possible first index.\n  for (let i = 0; i < sorted.length; i++) {\n    // Pair it with every later index exactly once.\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) count++;\n    }\n  }\n  // Return the total number of matching pairs.\n  return count;\n}\n",
          ts: "function countPairsWithSum(sorted: number[], target: number): number {\n  // Start with no matching index pairs.\n  let count = 0;\n  // Choose each possible first index.\n  for (let i = 0; i < sorted.length; i++) {\n    // Pair it with every later index exactly once.\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) count++;\n    }\n  }\n  // Return the total number of matching pairs.\n  return count;\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "tp-valid-palindrome-alnum",
    slug: "valid-palindrome-alnum",
    title: "Valid Palindrome (Alphanumeric)",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return `true` if the string is a palindrome considering only letters and digits, ignoring case and other characters.",
    examples: [
      { input: '"A man, a plan, a canal: Panama"', output: "true" },
      { input: '"race a car"', output: "false" },
      { input: '""', output: "true" },
    ],
    constraints: ["0 <= s.length <= 10000"],
    functionName: "isPalindromeAlnum",
    starter: {
      js: "function isPalindromeAlnum(s) {\n  // Palindrome over letters/digits, case-insensitive.\n}\n",
      ts: "function isPalindromeAlnum(s: string): boolean {\n  // Palindrome over letters/digits, case-insensitive.\n  return false;\n}\n",
    },
    visible: [
      { args: ["A man, a plan, a canal: Panama"], expected: true },
      { args: ["race a car"], expected: false },
      { args: [""], expected: true },
    ],
    hidden: [
      { args: [" "], expected: true },
      { args: ["a."], expected: true },
      { args: ["0P"], expected: false },
      { args: ["ab_a"], expected: true },
      { args: ["Abba"], expected: true },
      { args: ["abc"], expected: false },
    ],
    hints: [
      "Skip characters that aren't letters or digits from each end.",
      "Compare the lowercased alphanumeric characters with two pointers.",
      "Advance i past non-alnum, j back past non-alnum, then compare lowercased.",
    ],
    walkthrough: [
      { title: "Define which characters matter", body: "Punctuation and spaces do not participate, and letter case does not matter. Treat only letters and digits as comparable characters." },
      { title: "Skip irrelevant characters from both ends", body: "Before comparing a pair, advance the left pointer past non-alphanumerics and retreat the right pointer past them as well." },
      { title: "Compare normalized mirror characters", body: "Lowercase both remaining characters. A mismatch immediately proves the meaningful characters are not a palindrome." },
      { title: "Move inward after a match", body: "Once a normalized pair matches, move both pointers. If they meet without a mismatch, return `true`." },
    ],
    solutions: [
      {
        label: "Two pointers, skip non-alnum",
        approach: "Move each pointer past junk, then compare lowercased characters.",
        js: "function isPalindromeAlnum(s) {\n  const ok = (c) => /[a-z0-9]/i.test(c);\n  let i = 0, j = s.length - 1;\n  while (i < j) {\n    while (i < j && !ok(s[i])) i++;\n    while (i < j && !ok(s[j])) j--;\n    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;\n    i++; j--;\n  }\n  return true;\n}\n",
        ts: "function isPalindromeAlnum(s: string): boolean {\n  const ok = (c: string) => /[a-z0-9]/i.test(c);\n  let i = 0, j = s.length - 1;\n  while (i < j) {\n    while (i < j && !ok(s[i])) i++;\n    while (i < j && !ok(s[j])) j--;\n    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;\n    i++; j--;\n  }\n  return true;\n}\n",
        commentedCode: {
          js: "function isPalindromeAlnum(s) {\n  // Recognize the characters that count toward this palindrome.\n  const isAlphanumeric = (char) => /[a-z0-9]/i.test(char);\n  let left = 0;\n  let right = s.length - 1;\n\n  // Compare meaningful mirror characters until the pointers meet.\n  while (left < right) {\n    // Skip punctuation and spaces on the left.\n    while (left < right && !isAlphanumeric(s[left])) left++;\n    // Skip punctuation and spaces on the right.\n    while (left < right && !isAlphanumeric(s[right])) right--;\n    // A case-insensitive mismatch disproves the palindrome.\n    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;\n    left++;\n    right--;\n  }\n\n  // All comparable mirror pairs matched.\n  return true;\n}\n",
          ts: "function isPalindromeAlnum(s: string): boolean {\n  // Recognize the characters that count toward this palindrome.\n  const isAlphanumeric = (char: string) => /[a-z0-9]/i.test(char);\n  let left = 0;\n  let right = s.length - 1;\n\n  // Compare meaningful mirror characters until the pointers meet.\n  while (left < right) {\n    // Skip punctuation and spaces on the left.\n    while (left < right && !isAlphanumeric(s[left])) left++;\n    // Skip punctuation and spaces on the right.\n    while (left < right && !isAlphanumeric(s[right])) right--;\n    // A case-insensitive mismatch disproves the palindrome.\n    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;\n    left++;\n    right--;\n  }\n\n  // All comparable mirror pairs matched.\n  return true;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Clean then compare",
        approach: "Strip to lowercase alphanumerics and compare with the reverse.",
        js: "function isPalindromeAlnum(s) {\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleaned === cleaned.split('').reverse().join('');\n}\n",
        ts: "function isPalindromeAlnum(s: string): boolean {\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleaned === cleaned.split('').reverse().join('');\n}\n",
        commentedCode: {
          js: "function isPalindromeAlnum(s) {\n  // Normalize case and remove every character the problem says to ignore.\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  // A palindrome equals its reversed normalized form.\n  return cleaned === cleaned.split('').reverse().join('');\n}\n",
          ts: "function isPalindromeAlnum(s: string): boolean {\n  // Normalize case and remove every character the problem says to ignore.\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  // A palindrome equals its reversed normalized form.\n  return cleaned === cleaned.split('').reverse().join('');\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tp-merge-sorted",
    slug: "merge-sorted-two-pointer",
    title: "Merge Two Sorted Lists",
    difficulty: "easy",
    patternIds: P,
    statement: "Given two ascending lists, merge them into one ascending list with two pointers.",
    examples: [
      { input: "[1,3], [2,4]", output: "[1,2,3,4]" },
      { input: "[], [1]", output: "[1]" },
      { input: "[1,2], []", output: "[1,2]" },
    ],
    constraints: ["both inputs sorted ascending", "0 <= lengths <= 10000"],
    functionName: "mergeSortedTP",
    starter: {
      js: "function mergeSortedTP(a, b) {\n  // Merge two sorted lists with two pointers.\n}\n",
      ts: "function mergeSortedTP(a: number[], b: number[]): number[] {\n  // Merge two sorted lists with two pointers.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 3], [2, 4]], expected: [1, 2, 3, 4] },
      { args: [[], [1]], expected: [1] },
      { args: [[1, 2], []], expected: [1, 2] },
    ],
    hidden: [
      { args: [[], []], expected: [] },
      { args: [[1, 1], [1]], expected: [1, 1, 1] },
      { args: [[1, 5], [2, 3, 4]], expected: [1, 2, 3, 4, 5] },
      { args: [[-1, 0], [-2, 3]], expected: [-2, -1, 0, 3] },
      { args: [[5], [5]], expected: [5, 5] },
      { args: [[1, 2, 3], [0]], expected: [0, 1, 2, 3] },
    ],
    hints: [
      "Advance a pointer in each list, always taking the smaller head.",
      "When one list is exhausted, append the rest of the other.",
      "while (i<a.length && j<b.length) push smaller; drain leftovers.",
    ],
    walkthrough: [
      { title: "Track the next unused value in each list", body: "Start one pointer at index 0 of each sorted input and create an empty output list." },
      { title: "Take the smaller available head", body: "Compare the two pointed values. Append the smaller one, then advance only the pointer from which it came. That value cannot be needed later." },
      { title: "Stop comparisons when one list ends", body: "Once one pointer reaches its list’s length, the other list’s remaining values are already greater than or equal to everything placed so far." },
      { title: "Drain the remaining tail", body: "Append the unused values from the non-empty list in order, then return the merged result." },
    ],
    solutions: [
      {
        label: "Two-pointer merge",
        approach: "Take the smaller front value until one list empties.",
        js: "function mergeSortedTP(a, b) {\n  const out = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
        ts: "function mergeSortedTP(a: number[], b: number[]): number[] {\n  const out: number[] = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
        commentedCode: {
          js: "function mergeSortedTP(a, b) {\n  // Build the merged values without mutating either input.\n  const out = [];\n  let i = 0;\n  let j = 0;\n\n  // Both pointers identify the smallest unused value in their sorted list.\n  while (i < a.length && j < b.length) {\n    if (a[i] <= b[j]) {\n      out.push(a[i]);\n      i++;\n    } else {\n      out.push(b[j]);\n      j++;\n    }\n  }\n\n  // One list is empty now; its values have all been placed.\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n\n  return out;\n}\n",
          ts: "function mergeSortedTP(a: number[], b: number[]): number[] {\n  // Build the merged values without mutating either input.\n  const out: number[] = [];\n  let i = 0;\n  let j = 0;\n\n  // Both pointers identify the smallest unused value in their sorted list.\n  while (i < a.length && j < b.length) {\n    if (a[i] <= b[j]) {\n      out.push(a[i]);\n      i++;\n    } else {\n      out.push(b[j]);\n      j++;\n    }\n  }\n\n  // One list is empty now; its values have all been placed.\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n\n  return out;\n}\n",
        },
        time: "O(n + m)",
        space: "O(n + m)",
      },
      {
        label: "Concat and sort",
        approach: "Combine and sort — ignores the sorted inputs.",
        js: "function mergeSortedTP(a, b) {\n  return [...a, ...b].sort((x, y) => x - y);\n}\n",
        ts: "function mergeSortedTP(a: number[], b: number[]): number[] {\n  return [...a, ...b].sort((x, y) => x - y);\n}\n",
        commentedCode: {
          js: "function mergeSortedTP(a, b) {\n  // Combine both inputs and use a numeric comparison to sort the combined copy.\n  return [...a, ...b].sort((left, right) => left - right);\n}\n",
          ts: "function mergeSortedTP(a: number[], b: number[]): number[] {\n  // Combine both inputs and use a numeric comparison to sort the combined copy.\n  return [...a, ...b].sort((left, right) => left - right);\n}\n",
        },
        time: "O((n+m) log (n+m))",
        space: "O(n + m)",
      },
    ],
  },
];

export const twoPointerProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const twoPointerMcqs: QuizQuestion[] = [
  {
    id: "s4-tp-sorted",
    kind: "mcq",
    prompt: "The classic 'pair that sums to target' two-pointer sweep requires the input to be:",
    options: ["sorted", "all unique", "empty", "reversed"],
    answerIndex: 0,
    explanation: "Moving a pointer based on whether the sum is too big or small only works when ordered.",
  },
  {
    id: "s4-tp-time",
    kind: "mcq",
    prompt: "Scanning an array with two pointers converging from both ends is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "The pointers together traverse the array once — linear time.",
  },
];

export const twoPointerModule: Module = {
  id: "m-pat-two-pointers",
  stageId: S,
  title: "Two Pointers",
  kind: "patternModule",
  summary: "Two indices sweeping an array — often turning an O(n²) scan into a single O(n) pass.",
  lessonSections: [
    {
      heading: "Two indices, one pass",
      body: `The two-pointer pattern keeps **two indices** moving through a sequence — either converging from both ends, or one chasing the other. On sorted data it replaces nested loops with a single linear scan.

\`\`\`js
// Pair summing to a target in a sorted array:
function hasPair(a, target) {
  let lo = 0, hi = a.length - 1;
  while (lo < hi) {
    const s = a[lo] + a[hi];
    if (s === target) return true;
    if (s < target) lo++; else hi--;
  }
  return false;
}
console.log(hasPair([1, 2, 4, 7], 6)); // true (2 + 4)
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for two pointers when you see:

- a **sorted** array and a pair/triple with a target sum,
- **palindrome** or symmetry checks (ends moving inward),
- **in-place** partitioning or dedup (a read pointer and a write pointer),
- merging two sorted sequences, or "container / trapping" area problems.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Converging ends
let lo = 0, hi = a.length - 1;
while (lo < hi) {
  // inspect a[lo], a[hi]; move one (or both) inward
  lo++; hi--;
}

// Read / write (fast / slow)
let write = 0;
for (let read = 0; read < a.length; read++) {
  if (keep(a[read])) a[write++] = a[read];
}
\`\`\`

**Pitfalls:** infinite loops if you forget to move a pointer; the "converging" form needs **sorted** input; when counting pairs with duplicates, handle equal runs on both ends. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "tp-pair-sum-sorted",
  drillProblemIds: [
    "tp-pair-sum-sorted",
    "tp-reverse-array",
    "tp-is-palindrome",
    "tp-remove-duplicates",
    "tp-sort-parity",
    "tp-max-area",
  ],
  testPoolProblemIds: [
    "tp-squares-sorted",
    "tp-count-pairs",
    "tp-valid-palindrome-alnum",
    "tp-merge-sorted",
  ],
  complexityQuestionIds: ["s4-tp-sorted", "s4-tp-time"],
  badgeId: "badge-pat-two-pointers",
  prerequisiteModuleIds: [],
};
