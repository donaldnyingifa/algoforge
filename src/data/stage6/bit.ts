import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["bit"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "bit-hamming-weight",
    slug: "hamming-weight",
    title: "Number of 1 Bits",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Given a non-negative integer, return how many 1 bits its binary representation contains (its Hamming weight / population count).",
    examples: [
      { input: "11", output: "3" },
      { input: "128", output: "1" },
      { input: "0", output: "0" },
    ],
    constraints: ["0 <= n < 2^32"],
    functionName: "hammingWeight",
    starter: {
      js: "function hammingWeight(n) {\n  // Count the set bits of n.\n}\n",
      ts: "function hammingWeight(n: number): number {\n  // Count the set bits of n.\n  return 0;\n}\n",
    },
    visible: [
      { args: [11], expected: 3 },
      { args: [128], expected: 1 },
      { args: [0], expected: 0 },
    ],
    hidden: [
      { args: [4294967293], expected: 31 },
      { args: [1], expected: 1 },
      { args: [2147483648], expected: 1 },
      { args: [7], expected: 3 },
      { args: [255], expected: 8 },
      { args: [1023], expected: 10 },
    ],
    hints: [
      "n & (n - 1) clears the lowest set bit.",
      "Count how many times you can do that before n becomes 0.",
      "Alternatively, shift right and add the low bit each step.",
    ],
    solutions: [
      {
        label: "Clear the lowest set bit",
        approach: "Each n & (n-1) removes one set bit; count the iterations.",
        js: "function hammingWeight(n) {\n  let count = 0;\n  while (n !== 0) { n &= n - 1; count++; }\n  return count;\n}\n",
        ts: "function hammingWeight(n: number): number {\n  let count = 0;\n  while (n !== 0) { n &= n - 1; count++; }\n  return count;\n}\n",
        commentedCode: {
          js: "function hammingWeight(n) {\n  // Count how many set bits we remove from n.\n  let count = 0;\n\n  // Continue until no 1 bits remain.\n  while (n !== 0) {\n    // Subtracting 1 flips the lowest 1 bit and all bits below it; AND clears that lowest 1.\n    n &= n - 1;\n    // Each iteration removes exactly one set bit.\n    count++;\n  }\n\n  // The number of removals is the original Hamming weight.\n  return count;\n}\n",
          ts: "function hammingWeight(n: number): number {\n  // Count how many set bits we remove from n.\n  let count = 0;\n\n  // Continue until no 1 bits remain.\n  while (n !== 0) {\n    // Subtracting 1 flips the lowest 1 bit and all bits below it; AND clears that lowest 1.\n    n &= n - 1;\n    // Each iteration removes exactly one set bit.\n    count++;\n  }\n\n  // The number of removals is the original Hamming weight.\n  return count;\n}\n",
        },
        time: "O(set bits)",
        space: "O(1)",
      },
      {
        label: "Shift and mask",
        approach: "Add the lowest bit, then shift right unsigned.",
        js: "function hammingWeight(n) {\n  let count = 0;\n  for (let i = 0; i < 32; i++) { count += n & 1; n >>>= 1; }\n  return count;\n}\n",
        ts: "function hammingWeight(n: number): number {\n  let count = 0;\n  for (let i = 0; i < 32; i++) { count += n & 1; n >>>= 1; }\n  return count;\n}\n",
        commentedCode: {
          js: "function hammingWeight(n) {\n  // Accumulate the number of 1 bits encountered.\n  let count = 0;\n\n  // JavaScript bitwise operators expose exactly 32 bits, so inspect every position.\n  for (let i = 0; i < 32; i++) {\n    // Mask with 1 to add only the current least-significant bit.\n    count += n & 1;\n    // Unsigned shift moves the next bit into the low position and fills with zero.\n    n >>>= 1;\n  }\n\n  // All 32 original bit positions have now contributed.\n  return count;\n}\n",
          ts: "function hammingWeight(n: number): number {\n  // Accumulate the number of 1 bits encountered.\n  let count = 0;\n\n  // JavaScript bitwise operators expose exactly 32 bits, so inspect every position.\n  for (let i = 0; i < 32; i++) {\n    // Mask with 1 to add only the current least-significant bit.\n    count += n & 1;\n    // Unsigned shift moves the next bit into the low position and fills with zero.\n    n >>>= 1;\n  }\n\n  // All 32 original bit positions have now contributed.\n  return count;\n}\n",
        },
        time: "O(32)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "bit-is-power-two",
    slug: "power-of-two",
    title: "Power of Two",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Given an integer, return whether it is a power of two (2⁰, 2¹, 2², …). Zero and negative numbers are not powers of two.",
    examples: [
      { input: "1", output: "true" },
      { input: "16", output: "true" },
      { input: "3", output: "false" },
    ],
    constraints: ["-2^31 <= n < 2^31"],
    functionName: "isPowerOfTwo",
    starter: {
      js: "function isPowerOfTwo(n) {\n  // True if n is a power of two.\n}\n",
      ts: "function isPowerOfTwo(n: number): boolean {\n  // True if n is a power of two.\n  return false;\n}\n",
    },
    visible: [
      { args: [1], expected: true },
      { args: [16], expected: true },
      { args: [3], expected: false },
    ],
    hidden: [
      { args: [0], expected: false },
      { args: [1024], expected: true },
      { args: [6], expected: false },
      { args: [-16], expected: false },
      { args: [2147483648], expected: true },
      { args: [1073741824], expected: true },
    ],
    hints: [
      "A power of two has exactly one set bit.",
      "n > 0 && (n & (n - 1)) === 0 tests that in O(1).",
      "Watch the n > 0 guard so 0 and negatives fail.",
    ],
    solutions: [
      {
        label: "Single-bit test",
        approach: "A power of two clears to 0 when you remove its only set bit.",
        js: "function isPowerOfTwo(n) {\n  return n > 0 && (n & (n - 1)) === 0;\n}\n",
        ts: "function isPowerOfTwo(n: number): boolean {\n  return n > 0 && (n & (n - 1)) === 0;\n}\n",
        commentedCode: {
          js: "function isPowerOfTwo(n) {\n  // Require positivity so zero and negative values cannot pass the bit test.\n  // A positive power of two has one 1 bit, and n & (n - 1) clears it to zero.\n  return n > 0 && (n & (n - 1)) === 0;\n}\n",
          ts: "function isPowerOfTwo(n: number): boolean {\n  // Require positivity so zero and negative values cannot pass the bit test.\n  // A positive power of two has one 1 bit, and n & (n - 1) clears it to zero.\n  return n > 0 && (n & (n - 1)) === 0;\n}\n",
        },
        time: "O(1)",
        space: "O(1)",
      },
      {
        label: "Count set bits",
        approach: "It's a power of two iff it's positive with exactly one set bit.",
        js: "function isPowerOfTwo(n) {\n  if (n <= 0) return false;\n  let bits = 0;\n  for (let i = 0; i < 32; i++) bits += (n >>> i) & 1;\n  return bits === 1;\n}\n",
        ts: "function isPowerOfTwo(n: number): boolean {\n  if (n <= 0) return false;\n  let bits = 0;\n  for (let i = 0; i < 32; i++) bits += (n >>> i) & 1;\n  return bits === 1;\n}\n",
        commentedCode: {
          js: "function isPowerOfTwo(n) {\n  // Powers of two are positive; reject zero and negatives before inspecting bits.\n  if (n <= 0) return false;\n\n  // Count the 1 bits across JavaScript's 32-bit bitwise representation.\n  let bits = 0;\n  for (let i = 0; i < 32; i++)\n    // Unsigned-shift bit i to the low position, then isolate it with & 1.\n    bits += (n >>> i) & 1;\n\n  // Exactly one set bit is the defining binary shape of a power of two.\n  return bits === 1;\n}\n",
          ts: "function isPowerOfTwo(n: number): boolean {\n  // Powers of two are positive; reject zero and negatives before inspecting bits.\n  if (n <= 0) return false;\n\n  // Count the 1 bits across JavaScript's 32-bit bitwise representation.\n  let bits = 0;\n  for (let i = 0; i < 32; i++)\n    // Unsigned-shift bit i to the low position, then isolate it with & 1.\n    bits += (n >>> i) & 1;\n\n  // Exactly one set bit is the defining binary shape of a power of two.\n  return bits === 1;\n}\n",
        },
        time: "O(32)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "bit-single-number",
    slug: "single-number-xor",
    title: "Single Number",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Every element in the array appears exactly twice except for one, which appears once. Return that single element.",
    examples: [
      { input: "[2,2,1]", output: "1" },
      { input: "[4,1,2,1,2]", output: "4" },
      { input: "[7]", output: "7" },
    ],
    constraints: ["1 <= nums.length", "all but one value appear twice"],
    functionName: "singleNumber",
    starter: {
      js: "function singleNumber(nums) {\n  // The element that appears once.\n}\n",
      ts: "function singleNumber(nums: number[]): number {\n  // The element that appears once.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 2, 1]], expected: 1 },
      { args: [[4, 1, 2, 1, 2]], expected: 4 },
      { args: [[7]], expected: 7 },
    ],
    hidden: [
      { args: [[1, 1, 3, 3, 5]], expected: 5 },
      { args: [[0, 1, 0]], expected: 1 },
      { args: [[-1, -1, 2]], expected: 2 },
      { args: [[10, 10, 20, 30, 30]], expected: 20 },
      { args: [[5, 5, 9]], expected: 9 },
      { args: [[1, 2, 2]], expected: 1 },
    ],
    hints: [
      "XOR is associative and x ^ x = 0.",
      "XOR the whole array; the pairs cancel, leaving the lone value.",
      "0 ^ x = x, so start the accumulator at 0.",
    ],
    solutions: [
      {
        label: "XOR fold",
        approach: "Equal values cancel under XOR, leaving the unique one.",
        js: "function singleNumber(nums) {\n  let x = 0;\n  for (const v of nums) x ^= v;\n  return x;\n}\n",
        ts: "function singleNumber(nums: number[]): number {\n  let x = 0;\n  for (const v of nums) x ^= v;\n  return x;\n}\n",
        commentedCode: {
          js: "function singleNumber(nums) {\n  // Zero is XOR's identity, so it is a neutral starting value.\n  let x = 0;\n\n  // XOR is order-independent, and each duplicate pair cancels because v ^ v is 0.\n  for (const v of nums) x ^= v;\n\n  // Only the value with no matching pair remains in the accumulator.\n  return x;\n}\n",
          ts: "function singleNumber(nums: number[]): number {\n  // Zero is XOR's identity, so it is a neutral starting value.\n  let x = 0;\n\n  // XOR is order-independent, and each duplicate pair cancels because v ^ v is 0.\n  for (const v of nums) x ^= v;\n\n  // Only the value with no matching pair remains in the accumulator.\n  return x;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Toggle set",
        approach: "Add on first sight, remove on second; the survivor is unique.",
        js: "function singleNumber(nums) {\n  const seen = new Set();\n  for (const v of nums) { if (seen.has(v)) seen.delete(v); else seen.add(v); }\n  return [...seen][0];\n}\n",
        ts: "function singleNumber(nums: number[]): number {\n  const seen = new Set<number>();\n  for (const v of nums) { if (seen.has(v)) seen.delete(v); else seen.add(v); }\n  return [...seen][0];\n}\n",
        commentedCode: {
          js: "function singleNumber(nums) {\n  // Keep exactly the values currently seen an odd number of times.\n  const seen = new Set();\n\n  for (const v of nums) {\n    // A second occurrence completes a pair, so remove it; a first occurrence is added.\n    if (seen.has(v)) seen.delete(v);\n    else seen.add(v);\n  }\n\n  // Every pair was toggled out, leaving the problem's one unpaired value.\n  return [...seen][0];\n}\n",
          ts: "function singleNumber(nums: number[]): number {\n  // Keep exactly the values currently seen an odd number of times.\n  const seen = new Set<number>();\n\n  for (const v of nums) {\n    // A second occurrence completes a pair, so remove it; a first occurrence is added.\n    if (seen.has(v)) seen.delete(v);\n    else seen.add(v);\n  }\n\n  // Every pair was toggled out, leaving the problem's one unpaired value.\n  return [...seen][0];\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "bit-missing-number",
    slug: "missing-number",
    title: "Missing Number",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an array containing `n` distinct numbers taken from the range 0..n (so exactly one is missing), return the missing number.",
    examples: [
      { input: "[3,0,1]", output: "2" },
      { input: "[0,1]", output: "2" },
      { input: "[9,6,4,2,3,5,7,0,1]", output: "8" },
    ],
    constraints: ["values are distinct and within 0..n"],
    functionName: "missingNumber",
    starter: {
      js: "function missingNumber(nums) {\n  // The missing value from 0..n.\n}\n",
      ts: "function missingNumber(nums: number[]): number {\n  // The missing value from 0..n.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[3, 0, 1]], expected: 2 },
      { args: [[0, 1]], expected: 2 },
      { args: [[9, 6, 4, 2, 3, 5, 7, 0, 1]], expected: 8 },
    ],
    hidden: [
      { args: [[0]], expected: 1 },
      { args: [[1]], expected: 0 },
      { args: [[0, 2, 3, 4]], expected: 1 },
      { args: [[1, 2]], expected: 0 },
      { args: [[0, 1, 2, 3, 5]], expected: 4 },
      { args: [[2, 0, 1]], expected: 3 },
    ],
    hints: [
      "XOR all indices 0..n with all values; matching pairs cancel.",
      "Seed the accumulator with n so the full index range is covered.",
      "The sum formula n(n+1)/2 minus the array sum also works.",
    ],
    solutions: [
      {
        label: "XOR indices and values",
        approach: "XOR every index and value; the missing number is left over.",
        js: "function missingNumber(nums) {\n  let x = nums.length;\n  for (let i = 0; i < nums.length; i++) { x ^= i; x ^= nums[i]; }\n  return x;\n}\n",
        ts: "function missingNumber(nums: number[]): number {\n  let x = nums.length;\n  for (let i = 0; i < nums.length; i++) { x ^= i; x ^= nums[i]; }\n  return x;\n}\n",
        commentedCode: {
          js: "function missingNumber(nums) {\n  // Seed with n, the one range value that is not also an array index.\n  let x = nums.length;\n\n  for (let i = 0; i < nums.length; i++) {\n    // XOR in every remaining expected value from the index range 0 through n-1.\n    x ^= i;\n    // XOR in every observed value; equal expected/observed values cancel in any order.\n    x ^= nums[i];\n  }\n\n  // The only range value without a matching array value survives.\n  return x;\n}\n",
          ts: "function missingNumber(nums: number[]): number {\n  // Seed with n, the one range value that is not also an array index.\n  let x = nums.length;\n\n  for (let i = 0; i < nums.length; i++) {\n    // XOR in every remaining expected value from the index range 0 through n-1.\n    x ^= i;\n    // XOR in every observed value; equal expected/observed values cancel in any order.\n    x ^= nums[i];\n  }\n\n  // The only range value without a matching array value survives.\n  return x;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Sum formula",
        approach: "Subtract the array sum from the expected 0..n total.",
        js: "function missingNumber(nums) {\n  const n = nums.length;\n  let sum = (n * (n + 1)) / 2;\n  for (const v of nums) sum -= v;\n  return sum;\n}\n",
        ts: "function missingNumber(nums: number[]): number {\n  const n = nums.length;\n  let sum = (n * (n + 1)) / 2;\n  for (const v of nums) sum -= v;\n  return sum;\n}\n",
        commentedCode: {
          js: "function missingNumber(nums) {\n  // n values were supplied from the n+1-value range 0 through n.\n  const n = nums.length;\n  // Begin with the arithmetic-series sum of every value that should exist.\n  let sum = (n * (n + 1)) / 2;\n\n  // Remove every value actually present in the array.\n  for (const v of nums) sum -= v;\n\n  // The sole value never subtracted is the missing number.\n  return sum;\n}\n",
          ts: "function missingNumber(nums: number[]): number {\n  // n values were supplied from the n+1-value range 0 through n.\n  const n = nums.length;\n  // Begin with the arithmetic-series sum of every value that should exist.\n  let sum = (n * (n + 1)) / 2;\n\n  // Remove every value actually present in the array.\n  for (const v of nums) sum -= v;\n\n  // The sole value never subtracted is the missing number.\n  return sum;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "bit-counting-bits",
    slug: "counting-bits",
    title: "Counting Bits",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a non-negative integer `n`, return an array of length `n + 1` where entry `i` is the number of 1 bits in `i`.",
    examples: [
      { input: "2", output: "[0,1,1]" },
      { input: "5", output: "[0,1,1,2,1,2]" },
      { input: "0", output: "[0]" },
    ],
    constraints: ["0 <= n <= 100000"],
    functionName: "countingBits",
    starter: {
      js: "function countingBits(n) {\n  // popcount of every number 0..n.\n}\n",
      ts: "function countingBits(n: number): number[] {\n  // popcount of every number 0..n.\n  return [];\n}\n",
    },
    visible: [
      { args: [2], expected: [0, 1, 1] },
      { args: [5], expected: [0, 1, 1, 2, 1, 2] },
      { args: [0], expected: [0] },
    ],
    hidden: [
      { args: [8], expected: [0, 1, 1, 2, 1, 2, 2, 3, 1] },
      { args: [1], expected: [0, 1] },
      { args: [10], expected: [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2] },
      { args: [3], expected: [0, 1, 1, 2] },
      { args: [4], expected: [0, 1, 1, 2, 1] },
      { args: [7], expected: [0, 1, 1, 2, 1, 2, 2, 3] },
    ],
    hints: [
      "popcount(i) = popcount(i >> 1) + (i & 1).",
      "Or popcount(i) = popcount(i & (i - 1)) + 1 using the lowest-bit trick.",
      "Build the table bottom-up so the smaller value is ready.",
    ],
    solutions: [
      {
        label: "DP on the high bits",
        approach: "Drop the last bit: popcount(i) = popcount(i>>1) + (i&1).",
        js: "function countingBits(n) {\n  const dp = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) dp[i] = dp[i >> 1] + (i & 1);\n  return dp;\n}\n",
        ts: "function countingBits(n: number): number[] {\n  const dp = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) dp[i] = dp[i >> 1] + (i & 1);\n  return dp;\n}\n",
        commentedCode: {
          js: "function countingBits(n) {\n  // dp[i] will hold the population count for i; dp[0] is already 0.\n  const dp = new Array(n + 1).fill(0);\n\n  // Build in increasing order so the smaller state i >> 1 is already known.\n  for (let i = 1; i <= n; i++)\n    // Right shift removes i's low bit; & 1 adds that removed bit when it was set.\n    dp[i] = dp[i >> 1] + (i & 1);\n\n  // Return counts for every integer from 0 through n.\n  return dp;\n}\n",
          ts: "function countingBits(n: number): number[] {\n  // dp[i] will hold the population count for i; dp[0] is already 0.\n  const dp = new Array(n + 1).fill(0);\n\n  // Build in increasing order so the smaller state i >> 1 is already known.\n  for (let i = 1; i <= n; i++)\n    // Right shift removes i's low bit; & 1 adds that removed bit when it was set.\n    dp[i] = dp[i >> 1] + (i & 1);\n\n  // Return counts for every integer from 0 through n.\n  return dp;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "DP on the lowest bit",
        approach: "Clear the lowest set bit: popcount(i) = popcount(i & (i-1)) + 1.",
        js: "function countingBits(n) {\n  const dp = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) dp[i] = dp[i & (i - 1)] + 1;\n  return dp;\n}\n",
        ts: "function countingBits(n: number): number[] {\n  const dp = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) dp[i] = dp[i & (i - 1)] + 1;\n  return dp;\n}\n",
        commentedCode: {
          js: "function countingBits(n) {\n  // dp[i] stores i's number of set bits, with the base case dp[0] = 0.\n  const dp = new Array(n + 1).fill(0);\n\n  // Process upward because clearing a set bit always produces a smaller number.\n  for (let i = 1; i <= n; i++)\n    // i & (i - 1) removes exactly the lowest 1 bit, so restore its contribution with +1.\n    dp[i] = dp[i & (i - 1)] + 1;\n\n  // The completed table covers every requested number.\n  return dp;\n}\n",
          ts: "function countingBits(n: number): number[] {\n  // dp[i] stores i's number of set bits, with the base case dp[0] = 0.\n  const dp = new Array(n + 1).fill(0);\n\n  // Process upward because clearing a set bit always produces a smaller number.\n  for (let i = 1; i <= n; i++)\n    // i & (i - 1) removes exactly the lowest 1 bit, so restore its contribution with +1.\n    dp[i] = dp[i & (i - 1)] + 1;\n\n  // The completed table covers every requested number.\n  return dp;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "bit-single-number-ii",
    slug: "single-number-ii",
    title: "Single Number II",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Every element appears exactly three times except for one, which appears once. Return that single element.",
    examples: [
      { input: "[2,2,3,2]", output: "3" },
      { input: "[0,1,0,1,0,1,99]", output: "99" },
      { input: "[5]", output: "5" },
    ],
    constraints: ["1 <= nums.length", "all but one value appear three times"],
    functionName: "singleNumberII",
    starter: {
      js: "function singleNumberII(nums) {\n  // The element appearing once; others appear three times.\n}\n",
      ts: "function singleNumberII(nums: number[]): number {\n  // The element appearing once; others appear three times.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 2, 3, 2]], expected: 3 },
      { args: [[0, 1, 0, 1, 0, 1, 99]], expected: 99 },
      { args: [[5]], expected: 5 },
    ],
    hidden: [
      { args: [[1, 1, 1, 7]], expected: 7 },
      { args: [[-2, -2, 1, 1, 4, 1, 4, 4, -4, -2]], expected: -4 },
      { args: [[30, 30, 30, 7]], expected: 7 },
      { args: [[6, 6, 6, 11]], expected: 11 },
      { args: [[-1, -1, -1, -5]], expected: -5 },
      { args: [[2, 2, 3, 2]], expected: 3 },
    ],
    hints: [
      "Count each bit position mod 3; the leftover bits form the answer.",
      "Or track two accumulators 'ones' and 'twos' as a mod-3 state machine.",
      "ones = (ones ^ v) & ~twos; twos = (twos ^ v) & ~ones.",
    ],
    solutions: [
      {
        label: "Ones/twos state machine",
        approach: "Two bitmasks cycle each bit's count through 0→1→2→0.",
        js: "function singleNumberII(nums) {\n  let ones = 0, twos = 0;\n  for (const v of nums) {\n    ones = (ones ^ v) & ~twos;\n    twos = (twos ^ v) & ~ones;\n  }\n  return ones;\n}\n",
        ts: "function singleNumberII(nums: number[]): number {\n  let ones = 0, twos = 0;\n  for (const v of nums) {\n    ones = (ones ^ v) & ~twos;\n    twos = (twos ^ v) & ~ones;\n  }\n  return ones;\n}\n",
        commentedCode: {
          js: "function singleNumberII(nums) {\n  // For each bit independently, ones marks count mod 3 = 1 and twos marks count mod 3 = 2.\n  let ones = 0, twos = 0;\n\n  for (const v of nums) {\n    // Toggle v's bits in ones, but clear any bit already represented in the twos state.\n    ones = (ones ^ v) & ~twos;\n    // Toggle v's bits in twos, then exclude bits that just moved into the ones state.\n    twos = (twos ^ v) & ~ones;\n    // A third occurrence is consequently absent from both masks, cycling its state back to 0.\n  }\n\n  // Triplicated values cycled away; the once-seen value's bits remain in ones.\n  return ones;\n}\n",
          ts: "function singleNumberII(nums: number[]): number {\n  // For each bit independently, ones marks count mod 3 = 1 and twos marks count mod 3 = 2.\n  let ones = 0, twos = 0;\n\n  for (const v of nums) {\n    // Toggle v's bits in ones, but clear any bit already represented in the twos state.\n    ones = (ones ^ v) & ~twos;\n    // Toggle v's bits in twos, then exclude bits that just moved into the ones state.\n    twos = (twos ^ v) & ~ones;\n    // A third occurrence is consequently absent from both masks, cycling its state back to 0.\n  }\n\n  // Triplicated values cycled away; the once-seen value's bits remain in ones.\n  return ones;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Per-bit count mod 3",
        approach: "Sum each bit position, keep it mod 3, and reassemble the number.",
        js: "function singleNumberII(nums) {\n  let result = 0;\n  for (let b = 0; b < 32; b++) {\n    let sum = 0;\n    for (const v of nums) sum += (v >> b) & 1;\n    if (sum % 3 !== 0) result |= (1 << b);\n  }\n  return result | 0;\n}\n",
        ts: "function singleNumberII(nums: number[]): number {\n  let result = 0;\n  for (let b = 0; b < 32; b++) {\n    let sum = 0;\n    for (const v of nums) sum += (v >> b) & 1;\n    if (sum % 3 !== 0) result |= (1 << b);\n  }\n  return result | 0;\n}\n",
        commentedCode: {
          js: "function singleNumberII(nums) {\n  // Reconstruct the unique signed 32-bit value one bit position at a time.\n  let result = 0;\n\n  for (let b = 0; b < 32; b++) {\n    // Count how many inputs have bit b set, including b = 31 for the sign bit.\n    let sum = 0;\n    for (const v of nums) sum += (v >> b) & 1;\n\n    // Contributions from values appearing three times vanish modulo 3.\n    if (sum % 3 !== 0) result |= (1 << b);\n  }\n\n  // Coerce the assembled bit pattern to JavaScript's signed 32-bit representation.\n  return result | 0;\n}\n",
          ts: "function singleNumberII(nums: number[]): number {\n  // Reconstruct the unique signed 32-bit value one bit position at a time.\n  let result = 0;\n\n  for (let b = 0; b < 32; b++) {\n    // Count how many inputs have bit b set, including b = 31 for the sign bit.\n    let sum = 0;\n    for (const v of nums) sum += (v >> b) & 1;\n\n    // Contributions from values appearing three times vanish modulo 3.\n    if (sum % 3 !== 0) result |= (1 << b);\n  }\n\n  // Coerce the assembled bit pattern to JavaScript's signed 32-bit representation.\n  return result | 0;\n}\n",
        },
        time: "O(32·n)",
        space: "O(1)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "bit-hamming-distance",
    slug: "hamming-distance",
    title: "Hamming Distance",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given two non-negative integers, return the number of bit positions at which their binary representations differ.",
    examples: [
      { input: "1, 4", output: "2" },
      { input: "3, 1", output: "1" },
      { input: "0, 0", output: "0" },
    ],
    constraints: ["0 <= a, b < 2^31"],
    functionName: "hammingDistance",
    starter: {
      js: "function hammingDistance(a, b) {\n  // Number of differing bits.\n}\n",
      ts: "function hammingDistance(a: number, b: number): number {\n  // Number of differing bits.\n  return 0;\n}\n",
    },
    visible: [
      { args: [1, 4], expected: 2 },
      { args: [3, 1], expected: 1 },
      { args: [0, 0], expected: 0 },
    ],
    hidden: [
      { args: [7, 0], expected: 3 },
      { args: [10, 20], expected: 4 },
      { args: [255, 0], expected: 8 },
      { args: [1, 1], expected: 0 },
      { args: [4, 65], expected: 3 },
      { args: [1000, 999], expected: 4 },
    ],
    hints: [
      "XOR the two numbers so differing bits become 1.",
      "Then count the set bits of the XOR.",
      "Any popcount method works on the XOR.",
    ],
    solutions: [
      {
        label: "XOR then popcount",
        approach: "Differing bits are exactly the set bits of a ^ b.",
        js: "function hammingDistance(a, b) {\n  let x = a ^ b, count = 0;\n  while (x !== 0) { x &= x - 1; count++; }\n  return count;\n}\n",
        ts: "function hammingDistance(a: number, b: number): number {\n  let x = a ^ b, count = 0;\n  while (x !== 0) { x &= x - 1; count++; }\n  return count;\n}\n",
        commentedCode: {
          js: "function hammingDistance(a, b) {\n  // XOR sets exactly the positions where a and b differ; count starts at zero differences.\n  let x = a ^ b, count = 0;\n\n  // Remove one differing position per iteration.\n  while (x !== 0) {\n    // x & (x - 1) clears x's lowest set bit.\n    x &= x - 1;\n    // That cleared bit represents one mismatch between a and b.\n    count++;\n  }\n\n  // The number of cleared XOR bits is the Hamming distance.\n  return count;\n}\n",
          ts: "function hammingDistance(a: number, b: number): number {\n  // XOR sets exactly the positions where a and b differ; count starts at zero differences.\n  let x = a ^ b, count = 0;\n\n  // Remove one differing position per iteration.\n  while (x !== 0) {\n    // x & (x - 1) clears x's lowest set bit.\n    x &= x - 1;\n    // That cleared bit represents one mismatch between a and b.\n    count++;\n  }\n\n  // The number of cleared XOR bits is the Hamming distance.\n  return count;\n}\n",
        },
        time: "O(differing bits)",
        space: "O(1)",
      },
      {
        label: "Compare bit by bit",
        approach: "Shift both numbers and count positions where the low bits differ.",
        js: "function hammingDistance(a, b) {\n  let count = 0;\n  for (let i = 0; i < 32; i++) if (((a >>> i) & 1) !== ((b >>> i) & 1)) count++;\n  return count;\n}\n",
        ts: "function hammingDistance(a: number, b: number): number {\n  let count = 0;\n  for (let i = 0; i < 32; i++) if (((a >>> i) & 1) !== ((b >>> i) & 1)) count++;\n  return count;\n}\n",
        commentedCode: {
          js: "function hammingDistance(a, b) {\n  // Count positions whose corresponding bits do not match.\n  let count = 0;\n\n  // Bitwise operations use 32-bit values, so inspect every possible position.\n  for (let i = 0; i < 32; i++)\n    // Shift bit i to the low position in each value, mask it, and compare the two bits.\n    if (((a >>> i) & 1) !== ((b >>> i) & 1)) count++;\n\n  // Each mismatch incremented the distance exactly once.\n  return count;\n}\n",
          ts: "function hammingDistance(a: number, b: number): number {\n  // Count positions whose corresponding bits do not match.\n  let count = 0;\n\n  // Bitwise operations use 32-bit values, so inspect every possible position.\n  for (let i = 0; i < 32; i++)\n    // Shift bit i to the low position in each value, mask it, and compare the two bits.\n    if (((a >>> i) & 1) !== ((b >>> i) & 1)) count++;\n\n  // Each mismatch incremented the distance exactly once.\n  return count;\n}\n",
        },
        time: "O(32)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "bit-two-single-numbers",
    slug: "two-single-numbers",
    title: "Single Number III",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Exactly two elements appear once and every other element appears twice. Return the two single elements sorted in ascending order.",
    examples: [
      { input: "[1,2,1,3,2,5]", output: "[3,5]" },
      { input: "[1,2,1,2,4,7]", output: "[4,7]" },
      { input: "[0,1]", output: "[0,1]" },
    ],
    constraints: ["exactly two values appear once"],
    functionName: "twoSingleNumbers",
    starter: {
      js: "function twoSingleNumbers(nums) {\n  // The two unique elements, sorted ascending.\n}\n",
      ts: "function twoSingleNumbers(nums: number[]): number[] {\n  // The two unique elements, sorted ascending.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 1, 3, 2, 5]], expected: [3, 5] },
      { args: [[1, 2, 1, 2, 4, 7]], expected: [4, 7] },
      { args: [[0, 1]], expected: [0, 1] },
    ],
    hidden: [
      { args: [[9, 9, 8, 7]], expected: [7, 8] },
      { args: [[-1, -1, 2, 3]], expected: [2, 3] },
      { args: [[10, 20, 10, 30]], expected: [20, 30] },
      { args: [[5, 6]], expected: [5, 6] },
      { args: [[1, 1, 2, 2, 3, 4]], expected: [3, 4] },
      { args: [[100, 200, 100, 300]], expected: [200, 300] },
    ],
    hints: [
      "XOR everything to get a ^ b of the two uniques.",
      "A set bit of that XOR distinguishes the two numbers.",
      "Partition by that bit and XOR each group separately.",
    ],
    solutions: [
      {
        label: "XOR then split by a bit",
        approach: "Isolate a differing bit, then XOR each partition to recover each value.",
        js: "function twoSingleNumbers(nums) {\n  let xor = 0;\n  for (const v of nums) xor ^= v;\n  const diff = xor & (-xor);\n  let a = 0, b = 0;\n  for (const v of nums) { if (v & diff) a ^= v; else b ^= v; }\n  return [a, b].sort((x, y) => x - y);\n}\n",
        ts: "function twoSingleNumbers(nums: number[]): number[] {\n  let xor = 0;\n  for (const v of nums) xor ^= v;\n  const diff = xor & (-xor);\n  let a = 0, b = 0;\n  for (const v of nums) { if (v & diff) a ^= v; else b ^= v; }\n  return [a, b].sort((x, y) => x - y);\n}\n",
        commentedCode: {
          js: "function twoSingleNumbers(nums) {\n  // Duplicate pairs cancel, leaving xor = firstUnique ^ secondUnique.\n  let xor = 0;\n  for (const v of nums) xor ^= v;\n\n  // Two's-complement -xor lets this mask isolate the lowest bit where the uniques differ.\n  const diff = xor & (-xor);\n\n  // XOR each side of that distinguishing-bit partition independently.\n  let a = 0, b = 0;\n  for (const v of nums) {\n    // Equal duplicate values always enter the same group and cancel there.\n    if (v & diff) a ^= v;\n    else b ^= v;\n  }\n\n  // Each accumulator is one unique value; sort to satisfy the required output order.\n  return [a, b].sort((x, y) => x - y);\n}\n",
          ts: "function twoSingleNumbers(nums: number[]): number[] {\n  // Duplicate pairs cancel, leaving xor = firstUnique ^ secondUnique.\n  let xor = 0;\n  for (const v of nums) xor ^= v;\n\n  // Two's-complement -xor lets this mask isolate the lowest bit where the uniques differ.\n  const diff = xor & (-xor);\n\n  // XOR each side of that distinguishing-bit partition independently.\n  let a = 0, b = 0;\n  for (const v of nums) {\n    // Equal duplicate values always enter the same group and cancel there.\n    if (v & diff) a ^= v;\n    else b ^= v;\n  }\n\n  // Each accumulator is one unique value; sort to satisfy the required output order.\n  return [a, b].sort((x, y) => x - y);\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Hash count",
        approach: "Tally occurrences and return the two values seen once.",
        js: "function twoSingleNumbers(nums) {\n  const count = new Map();\n  for (const v of nums) count.set(v, (count.get(v) || 0) + 1);\n  const res = [];\n  for (const [v, c] of count) if (c === 1) res.push(v);\n  return res.sort((x, y) => x - y);\n}\n",
        ts: "function twoSingleNumbers(nums: number[]): number[] {\n  const count = new Map<number, number>();\n  for (const v of nums) count.set(v, (count.get(v) || 0) + 1);\n  const res: number[] = [];\n  for (const [v, c] of count) if (c === 1) res.push(v);\n  return res.sort((x, y) => x - y);\n}\n",
        commentedCode: {
          js: "function twoSingleNumbers(nums) {\n  // Map each distinct value to its frequency.\n  const count = new Map();\n  for (const v of nums)\n    // Default an unseen value to zero, then record this occurrence.\n    count.set(v, (count.get(v) || 0) + 1);\n\n  // Collect only entries that occur once.\n  const res = [];\n  for (const [v, c] of count)\n    if (c === 1) res.push(v);\n\n  // The contract asks for the two unique values in ascending order.\n  return res.sort((x, y) => x - y);\n}\n",
          ts: "function twoSingleNumbers(nums: number[]): number[] {\n  // Map each distinct value to its frequency.\n  const count = new Map<number, number>();\n  for (const v of nums)\n    // Default an unseen value to zero, then record this occurrence.\n    count.set(v, (count.get(v) || 0) + 1);\n\n  // Collect only entries that occur once.\n  const res: number[] = [];\n  for (const [v, c] of count)\n    if (c === 1) res.push(v);\n\n  // The contract asks for the two unique values in ascending order.\n  return res.sort((x, y) => x - y);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "bit-reverse-bits",
    slug: "reverse-bits",
    title: "Reverse Bits",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a 32-bit unsigned integer, return the value obtained by reversing the order of its 32 bits.",
    examples: [
      { input: "43261596", output: "964176192" },
      { input: "1", output: "2147483648" },
      { input: "0", output: "0" },
    ],
    constraints: ["0 <= n < 2^32"],
    functionName: "reverseBits",
    starter: {
      js: "function reverseBits(n) {\n  // Reverse the 32 bits and return the unsigned result.\n}\n",
      ts: "function reverseBits(n: number): number {\n  // Reverse the 32 bits and return the unsigned result.\n  return 0;\n}\n",
    },
    visible: [
      { args: [43261596], expected: 964176192 },
      { args: [1], expected: 2147483648 },
      { args: [0], expected: 0 },
    ],
    hidden: [
      { args: [2147483648], expected: 1 },
      { args: [4294967295], expected: 4294967295 },
      { args: [2], expected: 1073741824 },
      { args: [4], expected: 536870912 },
      { args: [3], expected: 3221225472 },
      { args: [43261596], expected: 964176192 },
    ],
    hints: [
      "Build the result bit by bit: shift result left, add the low bit of n, shift n right.",
      "Do it 32 times to cover every position.",
      "Return result >>> 0 so it reads as an unsigned 32-bit value.",
    ],
    solutions: [
      {
        label: "Shift bits across",
        approach: "Peel n's low bit into the result's growing low end, 32 times.",
        js: "function reverseBits(n) {\n  let result = 0;\n  for (let i = 0; i < 32; i++) { result = (result << 1) | (n & 1); n >>>= 1; }\n  return result >>> 0;\n}\n",
        ts: "function reverseBits(n: number): number {\n  let result = 0;\n  for (let i = 0; i < 32; i++) { result = (result << 1) | (n & 1); n >>>= 1; }\n  return result >>> 0;\n}\n",
        commentedCode: {
          js: "function reverseBits(n) {\n  // Grow the reversed 32-bit pattern from an empty accumulator.\n  let result = 0;\n\n  // Process all 32 positions, including leading zeros in the input.\n  for (let i = 0; i < 32; i++) {\n    // Make room on result's right, then copy n's current lowest bit into that space.\n    result = (result << 1) | (n & 1);\n    // Unsigned-shift n so its next bit becomes the bit to copy.\n    n >>>= 1;\n  }\n\n  // Convert the signed internal bit pattern to its unsigned numeric value.\n  return result >>> 0;\n}\n",
          ts: "function reverseBits(n: number): number {\n  // Grow the reversed 32-bit pattern from an empty accumulator.\n  let result = 0;\n\n  // Process all 32 positions, including leading zeros in the input.\n  for (let i = 0; i < 32; i++) {\n    // Make room on result's right, then copy n's current lowest bit into that space.\n    result = (result << 1) | (n & 1);\n    // Unsigned-shift n so its next bit becomes the bit to copy.\n    n >>>= 1;\n  }\n\n  // Convert the signed internal bit pattern to its unsigned numeric value.\n  return result >>> 0;\n}\n",
        },
        time: "O(32)",
        space: "O(1)",
      },
      {
        label: "Place each bit directly",
        approach: "Move bit i of n to position 31 − i in the result.",
        js: "function reverseBits(n) {\n  let result = 0;\n  for (let i = 0; i < 32; i++) if ((n >>> i) & 1) result |= (1 << (31 - i));\n  return result >>> 0;\n}\n",
        ts: "function reverseBits(n: number): number {\n  let result = 0;\n  for (let i = 0; i < 32; i++) if ((n >>> i) & 1) result |= (1 << (31 - i));\n  return result >>> 0;\n}\n",
        commentedCode: {
          js: "function reverseBits(n) {\n  // Start with every output bit clear.\n  let result = 0;\n\n  // Examine each source position i from 0 through 31.\n  for (let i = 0; i < 32; i++)\n    // If source bit i is set, set its mirrored destination bit 31 - i.\n    if ((n >>> i) & 1) result |= (1 << (31 - i));\n\n  // Interpret the completed 32-bit pattern as unsigned, especially when bit 31 is set.\n  return result >>> 0;\n}\n",
          ts: "function reverseBits(n: number): number {\n  // Start with every output bit clear.\n  let result = 0;\n\n  // Examine each source position i from 0 through 31.\n  for (let i = 0; i < 32; i++)\n    // If source bit i is set, set its mirrored destination bit 31 - i.\n    if ((n >>> i) & 1) result |= (1 << (31 - i));\n\n  // Interpret the completed 32-bit pattern as unsigned, especially when bit 31 is set.\n  return result >>> 0;\n}\n",
        },
        time: "O(32)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "bit-subset-xor-sum",
    slug: "subset-xor-sum",
    title: "Sum of All Subset XOR Totals",
    difficulty: "hard",
    patternIds: P,
    statement:
      "The XOR total of an array is the XOR of all its elements (0 for an empty array). Return the sum of the XOR totals over every subset of the given array.",
    examples: [
      { input: "[1,3]", output: "6" },
      { input: "[5,1,6]", output: "28" },
      { input: "[3,4,5,6,7,8]", output: "480" },
    ],
    constraints: ["1 <= nums.length <= 12"],
    functionName: "subsetXorSum",
    starter: {
      js: "function subsetXorSum(nums) {\n  // Sum of XOR totals over all subsets.\n}\n",
      ts: "function subsetXorSum(nums: number[]): number {\n  // Sum of XOR totals over all subsets.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 3]], expected: 6 },
      { args: [[5, 1, 6]], expected: 28 },
      { args: [[3, 4, 5, 6, 7, 8]], expected: 480 },
    ],
    hidden: [
      { args: [[1]], expected: 1 },
      { args: [[2, 2]], expected: 4 },
      { args: [[1, 2, 4]], expected: 28 },
      { args: [[8]], expected: 8 },
      { args: [[1, 1, 1]], expected: 4 },
      { args: [[5, 1, 6]], expected: 28 },
    ],
    hints: [
      "Each bit set in ANY element contributes to exactly half of all subsets.",
      "So the answer is OR(all) × 2^(n-1).",
      "Or just enumerate all 2ⁿ subsets and add their XOR totals.",
    ],
    solutions: [
      {
        label: "OR trick",
        approach: "A bit present anywhere appears in half the subsets: OR(all)·2^(n-1).",
        js: "function subsetXorSum(nums) {\n  let orAll = 0;\n  for (const v of nums) orAll |= v;\n  return orAll * (1 << (nums.length - 1));\n}\n",
        ts: "function subsetXorSum(nums: number[]): number {\n  let orAll = 0;\n  for (const v of nums) orAll |= v;\n  return orAll * (1 << (nums.length - 1));\n}\n",
        commentedCode: {
          js: "function subsetXorSum(nums) {\n  // OR records every bit that appears in at least one input value.\n  let orAll = 0;\n  for (const v of nums) orAll |= v;\n\n  // For each recorded bit, toggling one element that has it pairs subsets with/without it.\n  // Therefore that bit is set in exactly 2^(n-1) subset XOR totals.\n  return orAll * (1 << (nums.length - 1));\n}\n",
          ts: "function subsetXorSum(nums: number[]): number {\n  // OR records every bit that appears in at least one input value.\n  let orAll = 0;\n  for (const v of nums) orAll |= v;\n\n  // For each recorded bit, toggling one element that has it pairs subsets with/without it.\n  // Therefore that bit is set in exactly 2^(n-1) subset XOR totals.\n  return orAll * (1 << (nums.length - 1));\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Enumerate subsets",
        approach: "Backtrack over include/exclude, summing each subset's XOR total.",
        js: "function subsetXorSum(nums) {\n  let total = 0;\n  const go = (i, acc) => {\n    if (i === nums.length) { total += acc; return; }\n    go(i + 1, acc);\n    go(i + 1, acc ^ nums[i]);\n  };\n  go(0, 0);\n  return total;\n}\n",
        ts: "function subsetXorSum(nums: number[]): number {\n  let total = 0;\n  const go = (i: number, acc: number): void => {\n    if (i === nums.length) { total += acc; return; }\n    go(i + 1, acc);\n    go(i + 1, acc ^ nums[i]);\n  };\n  go(0, 0);\n  return total;\n}\n",
        commentedCode: {
          js: "function subsetXorSum(nums) {\n  // Accumulate the XOR total contributed by every completed subset.\n  let total = 0;\n\n  // i is the next choice; acc is the XOR of values chosen so far.\n  const go = (i, acc) => {\n    // Once every value has been considered, this subset's XOR is final.\n    if (i === nums.length) {\n      total += acc;\n      return;\n    }\n\n    // Branch 1 excludes nums[i], leaving the running XOR unchanged.\n    go(i + 1, acc);\n    // Branch 2 includes nums[i], toggling its bits into the running XOR.\n    go(i + 1, acc ^ nums[i]);\n  };\n\n  // Begin before the first value with the empty subset's XOR identity, zero.\n  go(0, 0);\n  // All 2^n leaves have now been included in the sum.\n  return total;\n}\n",
          ts: "function subsetXorSum(nums: number[]): number {\n  // Accumulate the XOR total contributed by every completed subset.\n  let total = 0;\n\n  // i is the next choice; acc is the XOR of values chosen so far.\n  const go = (i: number, acc: number): void => {\n    // Once every value has been considered, this subset's XOR is final.\n    if (i === nums.length) {\n      total += acc;\n      return;\n    }\n\n    // Branch 1 excludes nums[i], leaving the running XOR unchanged.\n    go(i + 1, acc);\n    // Branch 2 includes nums[i], toggling its bits into the running XOR.\n    go(i + 1, acc ^ nums[i]);\n  };\n\n  // Begin before the first value with the empty subset's XOR identity, zero.\n  go(0, 0);\n  // All 2^n leaves have now been included in the sum.\n  return total;\n}\n",
        },
        time: "O(2ⁿ)",
        space: "O(n)",
      },
    ],
  },
];

export const bitProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const bitMcqs: QuizQuestion[] = [
  {
    id: "s6-bit-clear",
    kind: "mcq",
    prompt: "The expression n & (n - 1) always:",
    options: [
      "sets the lowest 0 bit",
      "clears the lowest set (1) bit",
      "reverses all bits",
      "doubles n",
    ],
    answerIndex: 1,
    explanation:
      "Subtracting 1 flips the lowest set bit and all zeros below it; ANDing then clears exactly that lowest set bit.",
  },
  {
    id: "s6-bit-xor",
    kind: "mcq",
    prompt: "Why does XORing an array find the value that appears an odd number of times?",
    options: [
      "XOR sorts the values",
      "x ^ x = 0 and XOR is commutative, so paired values cancel",
      "XOR counts occurrences",
      "XOR is the same as addition",
    ],
    answerIndex: 1,
    explanation:
      "Because equal values cancel to 0 and order doesn't matter, only the unpaired value survives the fold.",
  },
];

export const bitModule: Module = {
  id: "m-pat-bit",
  stageId: S,
  title: "Bit Manipulation",
  kind: "patternModule",
  summary:
    "Working directly with binary — masks, XOR tricks, the lowest-set-bit identity, and counting bits.",
  lessonSections: [
    {
      heading: "The core identities",
      body: `Bit manipulation solves certain problems in O(1) space by operating on the binary representation directly. A handful of identities do most of the work:

- \`x ^ x = 0\` and \`x ^ 0 = x\` — XOR cancels pairs, so folding an array with XOR isolates the value appearing an odd number of times.
- \`n & (n - 1)\` — clears the **lowest set bit** (great for counting bits or testing powers of two).
- \`n & (-n)\` — isolates the **lowest set bit**.
- \`1 << k\`, \`n >> k\`, \`n >>> k\` — build masks and shift; use the **unsigned** \`>>>\` for 32-bit reversal so the sign bit behaves.

\`\`\`js
function hammingWeight(n) {
  let count = 0;
  while (n) { n &= n - 1; count++; }   // remove one set bit each loop
  return count;
}
\`\`\``,
    },
    {
      heading: "Patterns that recur",
      body: `The drills cover the moves interviewers reach for:

- **XOR fold** — single number, missing number, Hamming distance.
- **Bit-by-bit counting** — sum a fixed bit position across the array, then take it **mod k** (Single Number II uses mod 3, or the ones/twos state machine).
- **DP on bits** — \`countBits(i) = countBits(i >> 1) + (i & 1)\`.
- **Masks and partitions** — isolate a distinguishing bit to split two unique numbers apart.
- **Subset/contribution counting** — each bit present in *any* element appears in exactly half the subsets, so subset-XOR-sum is \`OR(all) · 2^(n-1)\`.`,
    },
    {
      heading: "Cues & pitfalls",
      body: `**Cues:** "appears once/twice/three times," "without extra memory," "using O(1) space," "toggle," "power of two," or anything explicitly about bits.

**Pitfalls:** JavaScript's bitwise operators work on **32-bit signed** integers, so values ≥ 2³¹ can read as negative — use \`>>> 0\` to get the unsigned result and \`>>>\` when shifting through the high bit (reverse bits). Mixing up \`&\`/\`|\`/\`^\` precedence (they bind looser than comparisons — parenthesize!). And with the ones/twos machine, the update **order matters**: compute \`ones\` first, then \`twos\` using the new \`ones\`. Every drill ships a bit-trick solution and a plainer baseline so the trick is easy to check. Work them easy to hard.`,
    },
  ],
  guidedExampleProblemId: "bit-hamming-weight",
  drillProblemIds: [
    "bit-hamming-weight",
    "bit-is-power-two",
    "bit-single-number",
    "bit-missing-number",
    "bit-counting-bits",
    "bit-single-number-ii",
  ],
  testPoolProblemIds: [
    "bit-hamming-distance",
    "bit-two-single-numbers",
    "bit-reverse-bits",
    "bit-subset-xor-sum",
  ],
  complexityQuestionIds: ["s6-bit-clear", "s6-bit-xor"],
  badgeId: "badge-pat-bit",
  prerequisiteModuleIds: ["m-pat-mono-deque"],
};
