import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";
import { arraysLab, stringsLab, linkedListLab } from "./labs";

const S = "dsa-s2";

const drafts: ProblemDraft[] = [
  /* -------------------- Arrays -------------------- */
  {
    id: "a-move-zeroes",
    slug: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "medium",
    statement:
      "Return a new list with every 0 moved to the end while the non-zero values keep their original order.",
    examples: [
      { input: "[0,1,0,3,12]", output: "[1,3,12,0,0]" },
      { input: "[0]", output: "[0]" },
      { input: "[1,2,3]", output: "[1,2,3]" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "moveZeroes",
    starter: {
      js: "function moveZeroes(nums) {\n  // Non-zeros first (in order), then the zeros.\n}\n",
      ts: "function moveZeroes(nums: number[]): number[] {\n  // Non-zeros first (in order), then the zeros.\n  return [];\n}\n",
    },
    visible: [
      { args: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
      { args: [[0]], expected: [0] },
      { args: [[1, 2, 3]], expected: [1, 2, 3] },
    ],
    hidden: [
      { args: [[]], expected: [] },
      { args: [[0, 0]], expected: [0, 0] },
      { args: [[1, 0, 2, 0, 3]], expected: [1, 2, 3, 0, 0] },
      { args: [[5, 0, 0, 5]], expected: [5, 5, 0, 0] },
      { args: [[0, 0, 1]], expected: [1, 0, 0] },
      { args: [[-1, 0, -2]], expected: [-1, -2, 0] },
    ],
    hints: [
      "Separate the values into 'non-zero' and 'the zeros', then stitch them back together.",
      "Collect non-zeros in order, then append as many zeros as you removed.",
      "const nz = nums.filter(x => x !== 0); return nz.concat(Array(nums.length - nz.length).fill(0)).",
    ],
    solutions: [
      {
        label: "Filter then pad",
        approach: "Keep non-zeros in order and append the removed zeros.",
        js: "function moveZeroes(nums) {\n  const nz = nums.filter((x) => x !== 0);\n  while (nz.length < nums.length) nz.push(0);\n  return nz;\n}\n",
        ts: "function moveZeroes(nums: number[]): number[] {\n  const nz = nums.filter((x) => x !== 0);\n  while (nz.length < nums.length) nz.push(0);\n  return nz;\n}\n",
        commentedCode: {
          js: "function moveZeroes(nums) {\n  // Keep the non-zero values in their original relative order.\n  const nz = nums.filter((x) => x !== 0);\n\n  // Restore the original length by appending one zero at a time.\n  while (nz.length < nums.length) nz.push(0);\n\n  // The input stays unchanged because nz is a new array.\n  return nz;\n}\n",
          ts: "function moveZeroes(nums: number[]): number[] {\n  // Keep the non-zero values in their original relative order.\n  const nz = nums.filter((x) => x !== 0);\n\n  // Restore the original length by appending one zero at a time.\n  while (nz.length < nums.length) nz.push(0);\n\n  // The input stays unchanged because nz is a new array.\n  return nz;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Two-pass write index",
        approach: "Write non-zeros to the front, then fill the rest with zeros.",
        js: "function moveZeroes(nums) {\n  const out = new Array(nums.length).fill(0);\n  let w = 0;\n  for (const x of nums) if (x !== 0) out[w++] = x;\n  return out;\n}\n",
        ts: "function moveZeroes(nums: number[]): number[] {\n  const out = new Array(nums.length).fill(0);\n  let w = 0;\n  for (const x of nums) if (x !== 0) out[w++] = x;\n  return out;\n}\n",
        commentedCode: {
          js: "function moveZeroes(nums) {\n  // Start with an output full of zeros, so only non-zeros need writing.\n  const out = new Array(nums.length).fill(0);\n  // w marks the next output position for a non-zero value.\n  let w = 0;\n\n  // Copy non-zeros from left to right to preserve their order.\n  for (const x of nums) {\n    if (x !== 0) out[w++] = x;\n  }\n\n  // Unwritten positions remain zero at the end.\n  return out;\n}\n",
          ts: "function moveZeroes(nums: number[]): number[] {\n  // Start with an output full of zeros, so only non-zeros need writing.\n  const out = new Array(nums.length).fill(0);\n  // w marks the next output position for a non-zero value.\n  let w = 0;\n\n  // Copy non-zeros from left to right to preserve their order.\n  for (const x of nums) {\n    if (x !== 0) out[w++] = x;\n  }\n\n  // Unwritten positions remain zero at the end.\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "a-max-ones",
    slug: "max-consecutive-ones",
    title: "Max Consecutive Ones",
    difficulty: "easy",
    statement: "Given a list of 0s and 1s, return the length of the longest run of consecutive 1s.",
    examples: [
      { input: "[1,1,0,1,1,1]", output: "3" },
      { input: "[0,0]", output: "0" },
      { input: "[1,1,1]", output: "3" },
    ],
    constraints: ["0 <= bits.length <= 10000", "each value is 0 or 1"],
    functionName: "maxConsecutiveOnes",
    starter: {
      js: "function maxConsecutiveOnes(bits) {\n  // Longest run of 1s.\n}\n",
      ts: "function maxConsecutiveOnes(bits: number[]): number {\n  // Longest run of 1s.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 1, 0, 1, 1, 1]], expected: 3 },
      { args: [[0, 0]], expected: 0 },
      { args: [[1, 1, 1]], expected: 3 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[1]], expected: 1 },
      { args: [[0]], expected: 0 },
      { args: [[1, 0, 1, 0, 1]], expected: 1 },
      { args: [[0, 1, 1, 0, 1, 1, 1, 1]], expected: 4 },
      { args: [[1, 1, 0, 0]], expected: 2 },
    ],
    hints: [
      "Track the current run length and the best run length seen.",
      "On a 1, increment the current run and update the best; on a 0, reset the current run to 0.",
      "let cur = 0, best = 0; for b: cur = b === 1 ? cur + 1 : 0; best = Math.max(best, cur).",
    ],
    solutions: [
      {
        label: "Running counter",
        approach: "Grow a counter on 1s, reset on 0s, track the maximum.",
        js: "function maxConsecutiveOnes(bits) {\n  let cur = 0, best = 0;\n  for (const b of bits) {\n    cur = b === 1 ? cur + 1 : 0;\n    if (cur > best) best = cur;\n  }\n  return best;\n}\n",
        ts: "function maxConsecutiveOnes(bits: number[]): number {\n  let cur = 0, best = 0;\n  for (const b of bits) {\n    cur = b === 1 ? cur + 1 : 0;\n    if (cur > best) best = cur;\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function maxConsecutiveOnes(bits) {\n  // cur measures the run ending here; best remembers the longest run.\n  let cur = 0, best = 0;\n\n  for (const b of bits) {\n    // A one extends the run, while a zero breaks it.\n    cur = b === 1 ? cur + 1 : 0;\n    // Record a new maximum as soon as this run exceeds it.\n    if (cur > best) best = cur;\n  }\n\n  return best;\n}\n",
          ts: "function maxConsecutiveOnes(bits: number[]): number {\n  // cur measures the run ending here; best remembers the longest run.\n  let cur = 0, best = 0;\n\n  for (const b of bits) {\n    // A one extends the run, while a zero breaks it.\n    cur = b === 1 ? cur + 1 : 0;\n    // Record a new maximum as soon as this run exceeds it.\n    if (cur > best) best = cur;\n  }\n\n  return best;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Split on zeros",
        approach: "Join to a string, split on 0, and take the longest chunk.",
        js: "function maxConsecutiveOnes(bits) {\n  return bits.join('').split('0').reduce((m, r) => Math.max(m, r.length), 0);\n}\n",
        ts: "function maxConsecutiveOnes(bits: number[]): number {\n  return bits.join('').split('0').reduce((m, r) => Math.max(m, r.length), 0);\n}\n",
        commentedCode: {
          js: "function maxConsecutiveOnes(bits) {\n  // Joining turns each run of ones into text separated by zeroes.\n  // Splitting isolates those runs, and reduce keeps the greatest length.\n  return bits.join('').split('0').reduce((m, r) => Math.max(m, r.length), 0);\n}\n",
          ts: "function maxConsecutiveOnes(bits: number[]): number {\n  // Joining turns each run of ones into text separated by zeroes.\n  // Splitting isolates those runs, and reduce keeps the greatest length.\n  return bits.join('').split('0').reduce((m, r) => Math.max(m, r.length), 0);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "a-dedupe-sorted",
    slug: "dedupe-sorted",
    title: "Dedupe a Sorted List",
    difficulty: "medium",
    statement:
      "Given a list sorted in non-decreasing order, return the distinct values in the same order.",
    examples: [
      { input: "[1,1,2,3,3]", output: "[1,2,3]" },
      { input: "[]", output: "[]" },
      { input: "[5]", output: "[5]" },
    ],
    constraints: ["0 <= nums.length <= 10000", "input is sorted ascending"],
    functionName: "dedupeSorted",
    starter: {
      js: "function dedupeSorted(nums) {\n  // Remove adjacent duplicates from a sorted list.\n}\n",
      ts: "function dedupeSorted(nums: number[]): number[] {\n  // Remove adjacent duplicates from a sorted list.\n  return [];\n}\n",
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
      "Because it's sorted, duplicates are always adjacent.",
      "Append a value only when it differs from the last one you appended.",
      "for v: if out is empty or out[out.length-1] !== v, out.push(v).",
    ],
    solutions: [
      {
        label: "Compare to previous",
        approach: "Push a value only when it differs from the last kept value.",
        js: "function dedupeSorted(nums) {\n  const out = [];\n  for (const v of nums) {\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n  return out;\n}\n",
        ts: "function dedupeSorted(nums: number[]): number[] {\n  const out: number[] = [];\n  for (const v of nums) {\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function dedupeSorted(nums) {\n  // Build a separate list of the distinct values.\n  const out = [];\n\n  for (const v of nums) {\n    // Sorted duplicates are adjacent, so compare with the last kept value.\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n\n  return out;\n}\n",
          ts: "function dedupeSorted(nums: number[]): number[] {\n  // Build a separate list of the distinct values.\n  const out: number[] = [];\n\n  for (const v of nums) {\n    // Sorted duplicates are adjacent, so compare with the last kept value.\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Set (order preserved)",
        approach: "A Set drops duplicates; sorted input keeps the order intact.",
        js: "function dedupeSorted(nums) {\n  return [...new Set(nums)];\n}\n",
        ts: "function dedupeSorted(nums: number[]): number[] {\n  return [...new Set(nums)];\n}\n",
        commentedCode: {
          js: "function dedupeSorted(nums) {\n  // Set keeps only the first occurrence of each value in insertion order.\n  // Spreading it creates the requested result array without changing nums.\n  return [...new Set(nums)];\n}\n",
          ts: "function dedupeSorted(nums: number[]): number[] {\n  // Set keeps only the first occurrence of each value in insertion order.\n  // Spreading it creates the requested result array without changing nums.\n  return [...new Set(nums)];\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "a-plus-one",
    slug: "plus-one",
    title: "Plus One",
    difficulty: "easy",
    statement:
      "A non-negative integer is given as an array of digits, most-significant first. Return the digits of the number plus one.",
    examples: [
      { input: "[1,2,3]", output: "[1,2,4]" },
      { input: "[1,2,9]", output: "[1,3,0]" },
      { input: "[9,9]", output: "[1,0,0]" },
    ],
    constraints: ["1 <= digits.length <= 1000", "0 <= digits[i] <= 9", "no leading zeros (except [0])"],
    functionName: "plusOne",
    starter: {
      js: "function plusOne(digits) {\n  // Add one to the number represented by digits.\n}\n",
      ts: "function plusOne(digits: number[]): number[] {\n  // Add one to the number represented by digits.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [1, 2, 4] },
      { args: [[1, 2, 9]], expected: [1, 3, 0] },
      { args: [[9, 9]], expected: [1, 0, 0] },
    ],
    hidden: [
      { args: [[0]], expected: [1] },
      { args: [[9]], expected: [1, 0] },
      { args: [[1, 0, 0]], expected: [1, 0, 1] },
      { args: [[4, 3, 2, 1]], expected: [4, 3, 2, 2] },
      { args: [[8, 9, 9]], expected: [9, 0, 0] },
      { args: [[9, 9, 9]], expected: [1, 0, 0, 0] },
    ],
    hints: [
      "Add from the last digit, carrying into the next when a digit passes 9.",
      "Walk right to left: if the digit is 9 it becomes 0 and you carry; otherwise increment and stop.",
      "If every digit was 9, prepend a leading 1 to the all-zeros result.",
    ],
    solutions: [
      {
        label: "Carry from the right",
        approach: "Increment the last digit, propagating a carry as needed.",
        js: "function plusOne(digits) {\n  const out = [...digits];\n  for (let i = out.length - 1; i >= 0; i--) {\n    if (out[i] < 9) { out[i]++; return out; }\n    out[i] = 0;\n  }\n  out.unshift(1);\n  return out;\n}\n",
        ts: "function plusOne(digits: number[]): number[] {\n  const out = [...digits];\n  for (let i = out.length - 1; i >= 0; i--) {\n    if (out[i]! < 9) { out[i]++; return out; }\n    out[i] = 0;\n  }\n  out.unshift(1);\n  return out;\n}\n",
        commentedCode: {
          js: "function plusOne(digits) {\n  // Work on a copy so the caller's digit array is not mutated.\n  const out = [...digits];\n\n  // Addition starts at the least-significant digit on the right.\n  for (let i = out.length - 1; i >= 0; i--) {\n    // A digit below nine can absorb the one with no further carry.\n    if (out[i] < 9) {\n      out[i]++;\n      return out;\n    }\n    // Nine becomes zero and carries one into the next digit to the left.\n    out[i] = 0;\n  }\n\n  // If every digit was nine, the carry creates a new leading digit.\n  out.unshift(1);\n  return out;\n}\n",
          ts: "function plusOne(digits: number[]): number[] {\n  // Work on a copy so the caller's digit array is not mutated.\n  const out = [...digits];\n\n  // Addition starts at the least-significant digit on the right.\n  for (let i = out.length - 1; i >= 0; i--) {\n    // A digit below nine can absorb the one with no further carry.\n    if (out[i]! < 9) {\n      out[i]++;\n      return out;\n    }\n    // Nine becomes zero and carries one into the next digit to the left.\n    out[i] = 0;\n  }\n\n  // If every digit was nine, the carry creates a new leading digit.\n  out.unshift(1);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "BigInt round-trip",
        approach: "Parse to a BigInt, add one, and split back into digits.",
        js: "function plusOne(digits) {\n  const n = BigInt(digits.join('')) + 1n;\n  return String(n).split('').map(Number);\n}\n",
        ts: "function plusOne(digits: number[]): number[] {\n  const n = BigInt(digits.join('')) + 1n;\n  return String(n).split('').map(Number);\n}\n",
        commentedCode: {
          js: "function plusOne(digits) {\n  // Join the digits, parse the exact integer, and add one.\n  const n = BigInt(digits.join('')) + 1n;\n  // Convert the incremented integer back into individual numeric digits.\n  return String(n).split('').map(Number);\n}\n",
          ts: "function plusOne(digits: number[]): number[] {\n  // Join the digits, parse the exact integer, and add one.\n  const n = BigInt(digits.join('')) + 1n;\n  // Convert the incremented integer back into individual numeric digits.\n  return String(n).split('').map(Number);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },

  /* -------------------- Strings -------------------- */
  {
    id: "s-is-anagram",
    slug: "is-anagram",
    title: "Valid Anagram",
    difficulty: "easy",
    statement:
      "Return `true` if the two strings contain exactly the same characters with the same counts (an anagram).",
    examples: [
      { input: '"listen", "silent"', output: "true" },
      { input: '"abc", "abd"', output: "false" },
      { input: '"", ""', output: "true" },
    ],
    constraints: ["0 <= a.length, b.length <= 10000"],
    functionName: "isAnagram",
    starter: {
      js: "function isAnagram(a, b) {\n  // True if a and b are anagrams.\n}\n",
      ts: "function isAnagram(a: string, b: string): boolean {\n  // True if a and b are anagrams.\n  return false;\n}\n",
    },
    visible: [
      { args: ["listen", "silent"], expected: true },
      { args: ["abc", "abd"], expected: false },
      { args: ["", ""], expected: true },
    ],
    hidden: [
      { args: ["a", "a"], expected: true },
      { args: ["a", "b"], expected: false },
      { args: ["aabb", "bbaa"], expected: true },
      { args: ["abc", "ab"], expected: false },
      { args: ["rat", "car"], expected: false },
      { args: ["anagram", "nagaram"], expected: true },
    ],
    hints: [
      "Different lengths can never be anagrams.",
      "Count each character in one string, then subtract using the other; all counts must end at zero.",
      "Or sort both strings and compare — anagrams sort to the same sequence.",
    ],
    solutions: [
      {
        label: "Character counts",
        approach: "Tally letters of a, decrement with b, and check for any imbalance.",
        js: "function isAnagram(a, b) {\n  if (a.length !== b.length) return false;\n  const counts = {};\n  for (const ch of a) counts[ch] = (counts[ch] || 0) + 1;\n  for (const ch of b) {\n    if (!counts[ch]) return false;\n    counts[ch]--;\n  }\n  return true;\n}\n",
        ts: "function isAnagram(a: string, b: string): boolean {\n  if (a.length !== b.length) return false;\n  const counts: Record<string, number> = {};\n  for (const ch of a) counts[ch] = (counts[ch] || 0) + 1;\n  for (const ch of b) {\n    if (!counts[ch]) return false;\n    counts[ch]--;\n  }\n  return true;\n}\n",
        commentedCode: {
          js: "function isAnagram(a, b) {\n  // Anagrams must contain the same total number of characters.\n  if (a.length !== b.length) return false;\n\n  // Count how many copies of each character a provides.\n  const counts = {};\n  for (const ch of a) counts[ch] = (counts[ch] || 0) + 1;\n\n  for (const ch of b) {\n    // A missing count means b needs a character a cannot supply.\n    if (!counts[ch]) return false;\n    // Match this character with one occurrence from a.\n    counts[ch]--;\n  }\n\n  // Equal lengths ensure every count was consumed exactly once.\n  return true;\n}\n",
          ts: "function isAnagram(a: string, b: string): boolean {\n  // Anagrams must contain the same total number of characters.\n  if (a.length !== b.length) return false;\n\n  // Count how many copies of each character a provides.\n  const counts: Record<string, number> = {};\n  for (const ch of a) counts[ch] = (counts[ch] || 0) + 1;\n\n  for (const ch of b) {\n    // A missing count means b needs a character a cannot supply.\n    if (!counts[ch]) return false;\n    // Match this character with one occurrence from a.\n    counts[ch]--;\n  }\n\n  // Equal lengths ensure every count was consumed exactly once.\n  return true;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Sort and compare",
        approach: "Anagrams become identical once sorted.",
        js: "function isAnagram(a, b) {\n  const norm = (s) => s.split('').sort().join('');\n  return norm(a) === norm(b);\n}\n",
        ts: "function isAnagram(a: string, b: string): boolean {\n  const norm = (s: string) => s.split('').sort().join('');\n  return norm(a) === norm(b);\n}\n",
        commentedCode: {
          js: "function isAnagram(a, b) {\n  // Sorting gives any two strings with the same character multiset one canonical form.\n  const norm = (s) => s.split('').sort().join('');\n  // The strings are anagrams exactly when those canonical forms match.\n  return norm(a) === norm(b);\n}\n",
          ts: "function isAnagram(a: string, b: string): boolean {\n  // Sorting gives any two strings with the same character multiset one canonical form.\n  const norm = (s: string) => s.split('').sort().join('');\n  // The strings are anagrams exactly when those canonical forms match.\n  return norm(a) === norm(b);\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "s-first-unique",
    slug: "first-unique-char",
    title: "First Unique Character",
    difficulty: "medium",
    statement:
      "Return the index of the first character that appears exactly once in the string, or -1 if there is none.",
    examples: [
      { input: '"leetcode"', output: "0" },
      { input: '"aabb"', output: "-1" },
      { input: '"loveleetcode"', output: "2" },
    ],
    constraints: ["0 <= s.length <= 10000"],
    functionName: "firstUniqueChar",
    starter: {
      js: "function firstUniqueChar(s) {\n  // Index of the first non-repeating character, or -1.\n}\n",
      ts: "function firstUniqueChar(s: string): number {\n  // Index of the first non-repeating character, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: ["leetcode"], expected: 0 },
      { args: ["aabb"], expected: -1 },
      { args: ["loveleetcode"], expected: 2 },
    ],
    hidden: [
      { args: [""], expected: -1 },
      { args: ["z"], expected: 0 },
      { args: ["aa"], expected: -1 },
      { args: ["abcabd"], expected: 2 },
      { args: ["aabbccd"], expected: 6 },
      { args: ["xxy"], expected: 2 },
    ],
    hints: [
      "You need each character's total count before you can judge the first one.",
      "First pass: count every character. Second pass: return the index of the first with count 1.",
      "Build counts, then scan indices in order returning the first where counts[s[i]] === 1.",
    ],
    solutions: [
      {
        label: "Count then scan",
        approach: "Tally counts, then find the earliest index with a count of one.",
        js: "function firstUniqueChar(s) {\n  const counts = {};\n  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;\n  for (let i = 0; i < s.length; i++) {\n    if (counts[s[i]] === 1) return i;\n  }\n  return -1;\n}\n",
        ts: "function firstUniqueChar(s: string): number {\n  const counts: Record<string, number> = {};\n  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;\n  for (let i = 0; i < s.length; i++) {\n    if (counts[s[i]!] === 1) return i;\n  }\n  return -1;\n}\n",
        commentedCode: {
          js: "function firstUniqueChar(s) {\n  // First learn the total frequency of every character.\n  const counts = {};\n  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;\n\n  // Scan in index order so the first count of one is also the earliest.\n  for (let i = 0; i < s.length; i++) {\n    if (counts[s[i]] === 1) return i;\n  }\n\n  // No character occurs exactly once.\n  return -1;\n}\n",
          ts: "function firstUniqueChar(s: string): number {\n  // First learn the total frequency of every character.\n  const counts: Record<string, number> = {};\n  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;\n\n  // Scan in index order so the first count of one is also the earliest.\n  for (let i = 0; i < s.length; i++) {\n    if (counts[s[i]!] === 1) return i;\n  }\n\n  // No character occurs exactly once.\n  return -1;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "indexOf === lastIndexOf",
        approach: "A character is unique exactly when its first and last positions match.",
        js: "function firstUniqueChar(s) {\n  for (let i = 0; i < s.length; i++) {\n    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;\n  }\n  return -1;\n}\n",
        ts: "function firstUniqueChar(s: string): number {\n  for (let i = 0; i < s.length; i++) {\n    if (s.indexOf(s[i]!) === s.lastIndexOf(s[i]!)) return i;\n  }\n  return -1;\n}\n",
        commentedCode: {
          js: "function firstUniqueChar(s) {\n  // Check candidates from left to right to preserve the 'first' requirement.\n  for (let i = 0; i < s.length; i++) {\n    // A character occurs once when its first and last positions are identical.\n    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;\n  }\n\n  return -1;\n}\n",
          ts: "function firstUniqueChar(s: string): number {\n  // Check candidates from left to right to preserve the 'first' requirement.\n  for (let i = 0; i < s.length; i++) {\n    // A character occurs once when its first and last positions are identical.\n    if (s.indexOf(s[i]!) === s.lastIndexOf(s[i]!)) return i;\n  }\n\n  return -1;\n}\n",
        },
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "s-valid-parens",
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "medium",
    statement:
      "Given a string of the brackets `()[]{}`, return `true` if every opening bracket is closed by the matching type in the correct order.",
    examples: [
      { input: '"()"', output: "true" },
      { input: '"([)]"', output: "false" },
      { input: '""', output: "true" },
    ],
    constraints: ["0 <= s.length <= 10000", "s contains only the six bracket characters"],
    functionName: "validParens",
    starter: {
      js: "function validParens(s) {\n  // True if the brackets are balanced and correctly nested.\n}\n",
      ts: "function validParens(s: string): boolean {\n  // True if the brackets are balanced and correctly nested.\n  return false;\n}\n",
    },
    visible: [
      { args: ["()"], expected: true },
      { args: ["([)]"], expected: false },
      { args: [""], expected: true },
    ],
    hidden: [
      { args: ["()[]{}"], expected: true },
      { args: ["(]"], expected: false },
      { args: ["{[]}"], expected: true },
      { args: ["("], expected: false },
      { args: [")("], expected: false },
      { args: ["((()))"], expected: true },
    ],
    hints: [
      "The most recently opened bracket must be the first one closed — that's last-in, first-out.",
      "Push opening brackets onto a stack; on a closing bracket, the top must be its match.",
      "At the end the stack must be empty for the string to be valid.",
    ],
    solutions: [
      {
        label: "Stack",
        approach: "Match each closer against the top of a stack of openers.",
        js: "function validParens(s) {\n  const pairs = { ')': '(', ']': '[', '}': '{' };\n  const stack = [];\n  for (const ch of s) {\n    if (ch === '(' || ch === '[' || ch === '{') stack.push(ch);\n    else if (stack.pop() !== pairs[ch]) return false;\n  }\n  return stack.length === 0;\n}\n",
        ts: "function validParens(s: string): boolean {\n  const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' };\n  const stack: string[] = [];\n  for (const ch of s) {\n    if (ch === '(' || ch === '[' || ch === '{') stack.push(ch);\n    else if (stack.pop() !== pairs[ch]) return false;\n  }\n  return stack.length === 0;\n}\n",
        commentedCode: {
          js: "function validParens(s) {\n  // Map every closing bracket to the opening bracket it requires.\n  const pairs = { ')': '(', ']': '[', '}': '{' };\n  // The stack tracks open brackets waiting to be closed.\n  const stack = [];\n\n  for (const ch of s) {\n    if (ch === '(' || ch === '[' || ch === '{') {\n      // A later closer must match this most recent opener.\n      stack.push(ch);\n    } else if (stack.pop() !== pairs[ch]) {\n      // A wrong or missing opener makes the nesting invalid.\n      return false;\n    }\n  }\n\n  // Any opener left on the stack was never closed.\n  return stack.length === 0;\n}\n",
          ts: "function validParens(s: string): boolean {\n  // Map every closing bracket to the opening bracket it requires.\n  const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' };\n  // The stack tracks open brackets waiting to be closed.\n  const stack: string[] = [];\n\n  for (const ch of s) {\n    if (ch === '(' || ch === '[' || ch === '{') {\n      // A later closer must match this most recent opener.\n      stack.push(ch);\n    } else if (stack.pop() !== pairs[ch]) {\n      // A wrong or missing opener makes the nesting invalid.\n      return false;\n    }\n  }\n\n  // Any opener left on the stack was never closed.\n  return stack.length === 0;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Collapse pairs",
        approach: "Repeatedly delete adjacent matching pairs; a valid string empties out.",
        js: "function validParens(s) {\n  let prev;\n  do { prev = s; s = s.replace('()', '').replace('[]', '').replace('{}', ''); } while (s !== prev);\n  return s.length === 0;\n}\n",
        ts: "function validParens(s: string): boolean {\n  let prev: string;\n  do { prev = s; s = s.replace('()', '').replace('[]', '').replace('{}', ''); } while (s !== prev);\n  return s.length === 0;\n}\n",
        commentedCode: {
          js: "function validParens(s) {\n  // Remember the previous text so we can detect when no pair was removed.\n  let prev;\n  do {\n    prev = s;\n    // Removing inner matched pairs eventually exposes their outer pairs.\n    s = s.replace('()', '').replace('[]', '').replace('{}', '');\n  } while (s !== prev);\n\n  // A valid bracket string collapses completely.\n  return s.length === 0;\n}\n",
          ts: "function validParens(s: string): boolean {\n  // Remember the previous text so we can detect when no pair was removed.\n  let prev: string;\n  do {\n    prev = s;\n    // Removing inner matched pairs eventually exposes their outer pairs.\n    s = s.replace('()', '').replace('[]', '').replace('{}', '');\n  } while (s !== prev);\n\n  // A valid bracket string collapses completely.\n  return s.length === 0;\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "s-count-segments",
    slug: "count-segments",
    title: "Count Segments",
    difficulty: "easy",
    statement:
      "Return the number of segments in the string, where a segment is a maximal run of non-space characters.",
    examples: [
      { input: '"Hello world"', output: "2" },
      { input: '""', output: "0" },
      { input: '"  a  b  "', output: "2" },
    ],
    constraints: ["0 <= s.length <= 10000", "spaces separate segments"],
    functionName: "countSegments",
    starter: {
      js: "function countSegments(s) {\n  // Count space-separated words.\n}\n",
      ts: "function countSegments(s: string): number {\n  // Count space-separated words.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["Hello world"], expected: 2 },
      { args: [""], expected: 0 },
      { args: ["  a  b  "], expected: 2 },
    ],
    hidden: [
      { args: ["one"], expected: 1 },
      { args: ["   "], expected: 0 },
      { args: ["a b c d"], expected: 4 },
      { args: ["trailing "], expected: 1 },
      { args: [" leading"], expected: 1 },
      { args: ["multiple   spaces here"], expected: 3 },
    ],
    hints: [
      "Splitting on spaces can leave empty strings from runs of spaces — filter those out.",
      "Trim, split on whitespace, and count the non-empty pieces.",
      "return s.split(' ').filter((w) => w.length > 0).length.",
    ],
    solutions: [
      {
        label: "Split and filter",
        approach: "Split on spaces and drop empty tokens.",
        js: "function countSegments(s) {\n  return s.split(' ').filter((w) => w.length > 0).length;\n}\n",
        ts: "function countSegments(s: string): number {\n  return s.split(' ').filter((w) => w.length > 0).length;\n}\n",
        commentedCode: {
          js: "function countSegments(s) {\n  // Split at every space, discard empty pieces from repeated spaces, and count the rest.\n  return s.split(' ').filter((w) => w.length > 0).length;\n}\n",
          ts: "function countSegments(s: string): number {\n  // Split at every space, discard empty pieces from repeated spaces, and count the rest.\n  return s.split(' ').filter((w) => w.length > 0).length;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Count segment starts",
        approach: "A new segment starts at a non-space whose left neighbour is a space or the start.",
        js: "function countSegments(s) {\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;\n  }\n  return count;\n}\n",
        ts: "function countSegments(s: string): number {\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function countSegments(s) {\n  // Count boundaries where a new non-space run begins.\n  let count = 0;\n\n  for (let i = 0; i < s.length; i++) {\n    // A segment starts at a non-space after either the string start or a space.\n    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;\n  }\n\n  return count;\n}\n",
          ts: "function countSegments(s: string): number {\n  // Count boundaries where a new non-space run begins.\n  let count = 0;\n\n  for (let i = 0; i < s.length; i++) {\n    // A segment starts at a non-space after either the string start or a space.\n    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;\n  }\n\n  return count;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },

  /* -------------------- Linked Lists (array-simulated) -------------------- */
  {
    id: "ll-reverse",
    slug: "reverse-list",
    title: "Reverse a List",
    difficulty: "medium",
    statement:
      "A linked list is given as the array of its values, head first. Return the values of the reversed list.",
    examples: [
      { input: "[1,2,3]", output: "[3,2,1]" },
      { input: "[]", output: "[]" },
      { input: "[1]", output: "[1]" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "reverseList",
    starter: {
      js: "function reverseList(values) {\n  // Return the reversed sequence.\n}\n",
      ts: "function reverseList(values: number[]): number[] {\n  // Return the reversed sequence.\n  return [];\n}\n",
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
      "Reversing a linked list means prepending each node to a new list as you walk the old one.",
      "Iterate front to back, inserting each value at the front of your result.",
      "let out = []; for v of values: out.unshift(v); return out.",
    ],
    solutions: [
      {
        label: "Prepend each value",
        approach: "Mirror the pointer-reversal technique by unshifting each value.",
        js: "function reverseList(values) {\n  const out = [];\n  for (const v of values) out.unshift(v);\n  return out;\n}\n",
        ts: "function reverseList(values: number[]): number[] {\n  const out: number[] = [];\n  for (const v of values) out.unshift(v);\n  return out;\n}\n",
        commentedCode: {
          js: "function reverseList(values) {\n  // Build a separate representation of the reversed list.\n  const out = [];\n\n  // Prepending each next value puts later nodes before earlier nodes.\n  for (const v of values) out.unshift(v);\n\n  return out;\n}\n",
          ts: "function reverseList(values: number[]): number[] {\n  // Build a separate representation of the reversed list.\n  const out: number[] = [];\n\n  // Prepending each next value puts later nodes before earlier nodes.\n  for (const v of values) out.unshift(v);\n\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Reverse a copy",
        approach: "Copy then reverse in place to avoid mutating the input.",
        js: "function reverseList(values) {\n  return [...values].reverse();\n}\n",
        ts: "function reverseList(values: number[]): number[] {\n  return [...values].reverse();\n}\n",
        commentedCode: {
          js: "function reverseList(values) {\n  // Spread first because reverse mutates its array; only the copy is reversed.\n  return [...values].reverse();\n}\n",
          ts: "function reverseList(values: number[]): number[] {\n  // Spread first because reverse mutates its array; only the copy is reversed.\n  return [...values].reverse();\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ll-middle",
    slug: "middle-value",
    title: "Middle of the List",
    difficulty: "easy",
    statement:
      "A linked list is given as its array of values. Return the middle value; for an even length return the second of the two middle values. Return -1 for an empty list.",
    examples: [
      { input: "[1,2,3,4,5]", output: "3" },
      { input: "[1,2,3,4]", output: "3", explanation: "Second of the two middles." },
      { input: "[1]", output: "1" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "middleValue",
    starter: {
      js: "function middleValue(values) {\n  // Return the middle value, or -1 if empty.\n}\n",
      ts: "function middleValue(values: number[]): number {\n  // Return the middle value, or -1 if empty.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5]], expected: 3 },
      { args: [[1, 2, 3, 4]], expected: 3 },
      { args: [[1]], expected: 1 },
    ],
    hidden: [
      { args: [[]], expected: -1 },
      { args: [[1, 2]], expected: 2 },
      { args: [[10, 20, 30]], expected: 20 },
      { args: [[1, 2, 3, 4, 5, 6]], expected: 4 },
      { args: [[9]], expected: 9 },
      { args: [[5, 5]], expected: 5 },
    ],
    hints: [
      "The 'upper middle' index of a length-n list is Math.floor(n / 2).",
      "Guard the empty case first, then index directly.",
      "return values.length === 0 ? -1 : values[Math.floor(values.length / 2)].",
    ],
    solutions: [
      {
        label: "Index the middle",
        approach: "Directly index the floor(n/2) position.",
        js: "function middleValue(values) {\n  if (values.length === 0) return -1;\n  return values[Math.floor(values.length / 2)];\n}\n",
        ts: "function middleValue(values: number[]): number {\n  if (values.length === 0) return -1;\n  return values[Math.floor(values.length / 2)]!;\n}\n",
        commentedCode: {
          js: "function middleValue(values) {\n  // An empty list has no middle node.\n  if (values.length === 0) return -1;\n  // floor(length / 2) selects the middle, or the second middle for even lengths.\n  return values[Math.floor(values.length / 2)];\n}\n",
          ts: "function middleValue(values: number[]): number {\n  // An empty list has no middle node.\n  if (values.length === 0) return -1;\n  // floor(length / 2) selects the middle, or the second middle for even lengths.\n  return values[Math.floor(values.length / 2)]!;\n}\n",
        },
        time: "O(1)",
        space: "O(1)",
      },
      {
        label: "Slow / fast pointers",
        approach: "Advance one pointer twice as fast; it lands the other at the middle.",
        js: "function middleValue(values) {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) {\n    slow++;\n    fast += 2;\n  }\n  return values[slow];\n}\n",
        ts: "function middleValue(values: number[]): number {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) {\n    slow++;\n    fast += 2;\n  }\n  return values[slow]!;\n}\n",
        commentedCode: {
          js: "function middleValue(values) {\n  // An empty list has no node to return.\n  if (values.length === 0) return -1;\n\n  // slow moves one node whenever fast moves two nodes.\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) {\n    slow++;\n    fast += 2;\n  }\n\n  // When fast reaches the end, slow is at the required middle.\n  return values[slow];\n}\n",
          ts: "function middleValue(values: number[]): number {\n  // An empty list has no node to return.\n  if (values.length === 0) return -1;\n\n  // slow moves one node whenever fast moves two nodes.\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) {\n    slow++;\n    fast += 2;\n  }\n\n  // When fast reaches the end, slow is at the required middle.\n  return values[slow]!;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "ll-remove-value",
    slug: "remove-value",
    title: "Remove All Occurrences",
    difficulty: "medium",
    statement:
      "A linked list is given as its array of values. Return the values after removing every node equal to `target`.",
    examples: [
      { input: "[1,2,6,3,6], 6", output: "[1,2,3]" },
      { input: "[], 1", output: "[]" },
      { input: "[7,7,7], 7", output: "[]" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "removeValue",
    starter: {
      js: "function removeValue(values, target) {\n  // Return the list with every `target` removed.\n}\n",
      ts: "function removeValue(values: number[], target: number): number[] {\n  // Return the list with every `target` removed.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 6, 3, 6], 6], expected: [1, 2, 3] },
      { args: [[], 1], expected: [] },
      { args: [[7, 7, 7], 7], expected: [] },
    ],
    hidden: [
      { args: [[1, 2, 3], 4], expected: [1, 2, 3] },
      { args: [[1], 1], expected: [] },
      { args: [[1, 2, 2, 1], 2], expected: [1, 1] },
      { args: [[0, 0, 1], 0], expected: [1] },
      { args: [[-1, -2, -1], -1], expected: [-2] },
      { args: [[5, 6, 5, 6], 6], expected: [5, 5] },
    ],
    hints: [
      "Keep every value that isn't the target, in order.",
      "A single filter expresses this directly.",
      "return values.filter((v) => v !== target).",
    ],
    solutions: [
      {
        label: "Filter",
        approach: "Keep only the values that don't match the target.",
        js: "function removeValue(values, target) {\n  return values.filter((v) => v !== target);\n}\n",
        ts: "function removeValue(values: number[], target: number): number[] {\n  return values.filter((v) => v !== target);\n}\n",
        commentedCode: {
          js: "function removeValue(values, target) {\n  // Keep every node value except those equal to the removal target.\n  // filter returns a new array, so the input representation is unchanged.\n  return values.filter((v) => v !== target);\n}\n",
          ts: "function removeValue(values: number[], target: number): number[] {\n  // Keep every node value except those equal to the removal target.\n  // filter returns a new array, so the input representation is unchanged.\n  return values.filter((v) => v !== target);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Build a new list",
        approach: "Walk the nodes and append only survivors.",
        js: "function removeValue(values, target) {\n  const out = [];\n  for (const v of values) if (v !== target) out.push(v);\n  return out;\n}\n",
        ts: "function removeValue(values: number[], target: number): number[] {\n  const out: number[] = [];\n  for (const v of values) if (v !== target) out.push(v);\n  return out;\n}\n",
        commentedCode: {
          js: "function removeValue(values, target) {\n  // Collect the values of nodes that survive removal.\n  const out = [];\n\n  // Preserve the original order while skipping every target value.\n  for (const v of values) {\n    if (v !== target) out.push(v);\n  }\n\n  return out;\n}\n",
          ts: "function removeValue(values: number[], target: number): number[] {\n  // Collect the values of nodes that survive removal.\n  const out: number[] = [];\n\n  // Preserve the original order while skipping every target value.\n  for (const v of values) {\n    if (v !== target) out.push(v);\n  }\n\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ll-nth-from-end",
    slug: "nth-from-end",
    title: "Nth Node from the End",
    difficulty: "medium",
    statement:
      "A linked list is given as its array of values. Return the value that is `n` positions from the end (1-indexed), or -1 if `n` is out of range.",
    examples: [
      { input: "[1,2,3,4,5], 2", output: "4" },
      { input: "[1], 1", output: "1" },
      { input: "[1,2,3], 4", output: "-1" },
    ],
    constraints: ["0 <= values.length <= 10000", "1 <= n"],
    functionName: "nthFromEnd",
    starter: {
      js: "function nthFromEnd(values, n) {\n  // Value n positions from the end (1-indexed), or -1.\n}\n",
      ts: "function nthFromEnd(values: number[], n: number): number {\n  // Value n positions from the end (1-indexed), or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5], 2], expected: 4 },
      { args: [[1], 1], expected: 1 },
      { args: [[1, 2, 3], 4], expected: -1 },
    ],
    hidden: [
      { args: [[], 1], expected: -1 },
      { args: [[1, 2, 3], 1], expected: 3 },
      { args: [[1, 2, 3], 3], expected: 1 },
      { args: [[5, 6, 7, 8], 2], expected: 7 },
      { args: [[9, 9], 2], expected: 9 },
      { args: [[1, 2], 3], expected: -1 },
    ],
    hints: [
      "The n-th value from the end sits at index length - n from the front.",
      "Validate that length - n is a real index before reading it.",
      "const i = values.length - n; return i >= 0 ? values[i] : -1.",
    ],
    solutions: [
      {
        label: "Index from the front",
        approach: "Convert the from-end position into a from-front index.",
        js: "function nthFromEnd(values, n) {\n  const i = values.length - n;\n  return i >= 0 && i < values.length ? values[i] : -1;\n}\n",
        ts: "function nthFromEnd(values: number[], n: number): number {\n  const i = values.length - n;\n  return i >= 0 && i < values.length ? values[i]! : -1;\n}\n",
        commentedCode: {
          js: "function nthFromEnd(values, n) {\n  // Convert the one-based distance from the end to a zero-based front index.\n  const i = values.length - n;\n  // Read a valid position, or return the required sentinel when n is out of range.\n  return i >= 0 && i < values.length ? values[i] : -1;\n}\n",
          ts: "function nthFromEnd(values: number[], n: number): number {\n  // Convert the one-based distance from the end to a zero-based front index.\n  const i = values.length - n;\n  // Read a valid position, or return the required sentinel when n is out of range.\n  return i >= 0 && i < values.length ? values[i]! : -1;\n}\n",
        },
        time: "O(1)",
        space: "O(1)",
      },
      {
        label: "Two-pointer gap",
        approach: "Advance a lead pointer n ahead, then move both until it falls off the end.",
        js: "function nthFromEnd(values, n) {\n  let lead = 0;\n  for (let i = 0; i < n; i++) { if (lead >= values.length) return -1; lead++; }\n  let trail = 0;\n  while (lead < values.length) { lead++; trail++; }\n  return values[trail];\n}\n",
        ts: "function nthFromEnd(values: number[], n: number): number {\n  let lead = 0;\n  for (let i = 0; i < n; i++) { if (lead >= values.length) return -1; lead++; }\n  let trail = 0;\n  while (lead < values.length) { lead++; trail++; }\n  return values[trail]!;\n}\n",
        commentedCode: {
          js: "function nthFromEnd(values, n) {\n  // Move lead n nodes ahead to establish the required gap.\n  let lead = 0;\n  for (let i = 0; i < n; i++) {\n    // Falling off early means the list contains fewer than n nodes.\n    if (lead >= values.length) return -1;\n    lead++;\n  }\n\n  // Keep the fixed gap while advancing both pointers to the end.\n  let trail = 0;\n  while (lead < values.length) {\n    lead++;\n    trail++;\n  }\n\n  // trail now identifies the node n positions from the end.\n  return values[trail];\n}\n",
          ts: "function nthFromEnd(values: number[], n: number): number {\n  // Move lead n nodes ahead to establish the required gap.\n  let lead = 0;\n  for (let i = 0; i < n; i++) {\n    // Falling off early means the list contains fewer than n nodes.\n    if (lead >= values.length) return -1;\n    lead++;\n  }\n\n  // Keep the fixed gap while advancing both pointers to the end.\n  let trail = 0;\n  while (lead < values.length) {\n    lead++;\n    trail++;\n  }\n\n  // trail now identifies the node n positions from the end.\n  return values[trail]!;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
];

export const stage2Batch1Problems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const stage2Batch1Mcqs: QuizQuestion[] = [
  {
    id: "s2-arr-access",
    kind: "mcq",
    prompt: "Reading `array[i]` by index in a dynamic array is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 0,
    explanation: "Elements are contiguous, so the address is computed directly — constant time.",
  },
  {
    id: "s2-arr-pushfront",
    kind: "mcq",
    prompt: "Inserting a new element at the front of an array (shifting the rest) is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "Every existing element must move over by one, so it's linear in the length.",
  },
  {
    id: "s2-str-immut",
    kind: "mcq",
    prompt: "Building a string by `result += piece` inside a loop over n pieces is, in the worst case:",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
    answerIndex: 2,
    explanation: "Strings are immutable; each `+=` copies the growing result, summing to n² work.",
  },
  {
    id: "s2-str-index",
    kind: "mcq",
    prompt: "Reading a single character `s[i]` from a string is:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answerIndex: 0,
    explanation: "Character access by index is constant time.",
  },
  {
    id: "s2-ll-access",
    kind: "mcq",
    prompt: "Getting the i-th element of a singly linked list requires:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "You must follow next-pointers from the head, up to n steps.",
  },
  {
    id: "s2-ll-prepend",
    kind: "mcq",
    prompt: "Adding a node at the head of a linked list (with a head pointer) is:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answerIndex: 0,
    explanation: "You create one node and repoint head — constant time, no shifting.",
  },
];

export const stage2Batch1Modules: Module[] = [
  {
    id: "m-ds-arrays",
    stageId: S,
    title: "Arrays & Dynamic Arrays",
    kind: "buildLab",
    summary: "How growable arrays really work — contiguous storage, O(1) access, and the cost of shifting.",
    lessonSections: [
      {
        heading: "Contiguous storage",
        body: `An array stores elements back-to-back in memory, so element \`i\` is found by arithmetic — **O(1)** access. A *dynamic* array (JS's \`Array\`, Python's \`list\`) hides a fixed-capacity buffer that is reallocated (usually doubled) when it fills up.

\`\`\`js
const a = [10, 20, 30];
console.log(a[1]);        // 20  — direct index, O(1)
a.push(40);               // amortized O(1)
console.log(a.length);    // 4
\`\`\``,
      },
      {
        heading: "What's cheap, what's not",
        body: `Index access and appending at the end are cheap. Inserting or deleting at the **front or middle** shifts everything after it — **O(n)**.

**Recognition cues:** need positional access → array. Constant inserts/removes at the front → consider a linked list or deque instead. Now build a dynamic array yourself in the lab below, then take on the drills.`,
      },
    ],
    guidedExampleProblemId: "a-move-zeroes",
    drillProblemIds: ["a-move-zeroes", "a-max-ones"],
    testPoolProblemIds: ["a-dedupe-sorted", "a-plus-one"],
    complexityQuestionIds: ["s2-arr-access", "s2-arr-pushfront"],
    buildLab: arraysLab,
    badgeId: "badge-ds-arrays",
    prerequisiteModuleIds: [],
  },
  {
    id: "m-ds-strings",
    stageId: S,
    title: "Strings",
    kind: "buildLab",
    summary: "Immutable sequences of characters — why building them carelessly is quadratic.",
    lessonSections: [
      {
        heading: "Immutability changes the cost",
        body: `In JS a string can't be modified in place. Every \`+=\` builds a brand-new string, so concatenating in a loop can silently become **O(n²)**. Collect pieces in an array and \`join\` once instead.

\`\`\`js
const parts = [];
for (let i = 0; i < 5; i++) parts.push("x" + i);
console.log(parts.join("-")); // x0-x1-x2-x3-x4 — one allocation
\`\`\``,
      },
      {
        heading: "Everyday string tools",
        body: `Index access \`s[i]\` and \`.length\` are O(1); \`split\`, \`slice\`, and \`indexOf\` are O(n). Character counting with a map underpins anagrams, uniqueness, and frequency problems.

**Recognition cues:** "same letters?" → counts. "balanced/nested?" → a stack. Build a StringBuilder in the lab, then try the drills.`,
      },
    ],
    guidedExampleProblemId: "s-is-anagram",
    drillProblemIds: ["s-is-anagram", "s-first-unique"],
    testPoolProblemIds: ["s-valid-parens", "s-count-segments"],
    complexityQuestionIds: ["s2-str-immut", "s2-str-index"],
    buildLab: stringsLab,
    badgeId: "badge-ds-strings",
    prerequisiteModuleIds: ["m-ds-arrays"],
  },
  {
    id: "m-ds-linked-lists",
    stageId: S,
    title: "Linked Lists",
    kind: "buildLab",
    summary: "Nodes joined by pointers — O(1) ends, O(n) indexing, and the reversal you'll reuse forever.",
    lessonSections: [
      {
        heading: "Nodes and pointers",
        body: `A linked list chains nodes, each holding a value and a pointer to the next. There's no contiguous block, so **indexing is O(n)** — you walk from the head. In exchange, inserting or removing at a known position is **O(1)** (just repoint).

\`\`\`js
// A three-node list built by hand.
const list = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
let cur = list, out = [];
while (cur) { out.push(cur.value); cur = cur.next; }
console.log(out); // [1, 2, 3]
\`\`\``,
      },
      {
        heading: "The reversal pattern",
        body: `Reversing a list — repoint each node to its predecessor — is a building block for countless problems. In these drills the list is passed as an array of values so you can focus on the logic.

**Recognition cues:** constant-time insert/remove at a moving position, or "reverse / detect a cycle / merge" → linked list. Build one in the lab, then tackle the drills.`,
      },
    ],
    guidedExampleProblemId: "ll-reverse",
    drillProblemIds: ["ll-reverse", "ll-middle"],
    testPoolProblemIds: ["ll-remove-value", "ll-nth-from-end"],
    complexityQuestionIds: ["s2-ll-access", "s2-ll-prepend"],
    buildLab: linkedListLab,
    badgeId: "badge-ds-linked-lists",
    prerequisiteModuleIds: ["m-ds-arrays"],
  },
];
