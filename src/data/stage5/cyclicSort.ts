import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s5";
const P = ["cyclic-sort"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "cs-sort-1-to-n",
    slug: "cyclic-sort",
    title: "Cyclic Sort",
    difficulty: "easy",
    patternIds: P,
    statement:
      "The list holds the numbers 1 through n exactly once, in some order. Return them sorted ascending by placing each value at its own index.",
    examples: [
      { input: "[3,1,5,4,2]", output: "[1,2,3,4,5]" },
      { input: "[2,1]", output: "[1,2]" },
      { input: "[]", output: "[]" },
    ],
    constraints: ["the list is a permutation of 1..n"],
    functionName: "cyclicSort",
    starter: {
      js: "function cyclicSort(nums) {\n  // Put each value at index value-1.\n}\n",
      ts: "function cyclicSort(nums: number[]): number[] {\n  // Put each value at index value-1.\n  return [];\n}\n",
    },
    visible: [
      { args: [[3, 1, 5, 4, 2]], expected: [1, 2, 3, 4, 5] },
      { args: [[2, 1]], expected: [1, 2] },
      { args: [[]], expected: [] },
    ],
    hidden: [
      { args: [[1]], expected: [1] },
      { args: [[1, 2, 3]], expected: [1, 2, 3] },
      { args: [[3, 2, 1]], expected: [1, 2, 3] },
      { args: [[2, 3, 1]], expected: [1, 2, 3] },
      { args: [[4, 3, 2, 1]], expected: [1, 2, 3, 4] },
      { args: [[1, 5, 4, 3, 2]], expected: [1, 2, 3, 4, 5] },
    ],
    hints: [
      "Value `v` belongs at index `v - 1` — that's the whole idea.",
      "If the value at i isn't where it belongs, swap it into place and re-check i.",
      "Only advance i once a[i] is already correct; every value moves at most once.",
    ],
    solutions: [
      {
        label: "Cyclic placement",
        approach: "Swap each value to its home index; advance only when it fits.",
        js: "function cyclicSort(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return a;\n}\n",
        ts: "function cyclicSort(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return a;\n}\n",
        commentedCode: {
          js: "function cyclicSort(nums) {\n  // Work on a copy so sorting does not mutate the caller's array.\n  const a = [...nums];\n  // Start by checking the first slot.\n  let i = 0;\n\n  // Keep going until every slot has been checked in order.\n  while (i < a.length) {\n    // A value v from 1..n belongs at zero-based index v - 1.\n    const correct = a[i] - 1;\n\n    // If this value is not at home, swap it directly into its home slot.\n    if (a[i] !== a[correct]) {\n      // Re-check index i after the swap because it just received a new value.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This slot is correct, so advance to the next one.\n      i++;\n    }\n  }\n\n  // Every value is now at index value - 1.\n  return a;\n}\n",
          ts: "function cyclicSort(nums: number[]): number[] {\n  // Work on a copy so sorting does not mutate the caller's array.\n  const a = [...nums];\n  // Start by checking the first slot.\n  let i = 0;\n\n  // Keep going until every slot has been checked in order.\n  while (i < a.length) {\n    // A value v from 1..n belongs at zero-based index v - 1.\n    const correct = a[i] - 1;\n\n    // If this value is not at home, swap it directly into its home slot.\n    if (a[i] !== a[correct]) {\n      // Re-check index i after the swap because it just received a new value.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This slot is correct, so advance to the next one.\n      i++;\n    }\n  }\n\n  // Every value is now at index value - 1.\n  return a;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Built-in sort",
        approach: "A general sort also works, at O(n log n).",
        js: "function cyclicSort(nums) {\n  return [...nums].sort((a, b) => a - b);\n}\n",
        ts: "function cyclicSort(nums: number[]): number[] {\n  return [...nums].sort((a, b) => a - b);\n}\n",
        commentedCode: {
          js: "function cyclicSort(nums) {\n  // Copy the input, then use a numeric comparator to sort ascending.\n  return [...nums].sort((a, b) => a - b);\n}\n",
          ts: "function cyclicSort(nums: number[]): number[] {\n  // Copy the input, then use a numeric comparator to sort ascending.\n  return [...nums].sort((a, b) => a - b);\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "cs-find-missing",
    slug: "find-missing-number",
    title: "Find the Missing Number",
    difficulty: "easy",
    patternIds: P,
    statement:
      "The list holds `n` distinct numbers taken from the range 0 to n (inclusive), so exactly one is missing. Return it.",
    examples: [
      { input: "[4,0,3,1]", output: "2" },
      { input: "[0]", output: "1" },
      { input: "[1]", output: "0" },
    ],
    constraints: ["values are distinct and within 0..n"],
    functionName: "findMissingNumber",
    starter: {
      js: "function findMissingNumber(nums) {\n  // The one value missing from 0..n.\n}\n",
      ts: "function findMissingNumber(nums: number[]): number {\n  // The one value missing from 0..n.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[4, 0, 3, 1]], expected: 2 },
      { args: [[0]], expected: 1 },
      { args: [[1]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[0, 1]], expected: 2 },
      { args: [[1, 0, 3]], expected: 2 },
      { args: [[3, 0, 1]], expected: 2 },
      { args: [[0, 1, 2]], expected: 3 },
      { args: [[2, 0, 1, 4]], expected: 3 },
    ],
    hints: [
      "The full range 0..n has a known total: n(n+1)/2.",
      "Subtract what's actually present and whatever remains is the missing value.",
      "Alternatively place each value at its index and find the empty slot.",
    ],
    solutions: [
      {
        label: "Sum difference",
        approach: "Expected total minus actual total is the gap.",
        js: "function findMissingNumber(nums) {\n  const n = nums.length;\n  let missing = (n * (n + 1)) / 2;\n  for (const v of nums) missing -= v;\n  return missing;\n}\n",
        ts: "function findMissingNumber(nums: number[]): number {\n  const n = nums.length;\n  let missing = (n * (n + 1)) / 2;\n  for (const v of nums) missing -= v;\n  return missing;\n}\n",
        commentedCode: {
          js: "function findMissingNumber(nums) {\n  // n values were chosen from the n + 1 candidates 0 through n.\n  const n = nums.length;\n  // Start with the sum of the complete range; zero contributes nothing.\n  let missing = (n * (n + 1)) / 2;\n\n  // Remove every value that is actually present.\n  for (const v of nums) missing -= v;\n\n  // The one value never subtracted is the missing number.\n  return missing;\n}\n",
          ts: "function findMissingNumber(nums: number[]): number {\n  // n values were chosen from the n + 1 candidates 0 through n.\n  const n = nums.length;\n  // Start with the sum of the complete range; zero contributes nothing.\n  let missing = (n * (n + 1)) / 2;\n\n  // Remove every value that is actually present.\n  for (const v of nums) missing -= v;\n\n  // The one value never subtracted is the missing number.\n  return missing;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Cyclic placement",
        approach: "Send each value to its index; the first index holding the wrong value is missing.",
        js: "function findMissingNumber(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    if (a[i] < a.length && a[i] !== a[a[i]]) {\n      const t = a[i]; a[i] = a[t]; a[t] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < a.length; j++) if (a[j] !== j) return j;\n  return a.length;\n}\n",
        ts: "function findMissingNumber(nums: number[]): number {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    if (a[i] < a.length && a[i] !== a[a[i]]) {\n      const t = a[i]; a[i] = a[t]; a[t] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < a.length; j++) if (a[j] !== j) return j;\n  return a.length;\n}\n",
        commentedCode: {
          js: "function findMissingNumber(nums) {\n  // Rearrange a copy, leaving the caller's input unchanged.\n  const a = [...nums];\n  let i = 0;\n\n  // Place each value from 0 through n - 1 at its matching index.\n  while (i < a.length) {\n    // The value n has no index in this length-n array, so leave it alone.\n    if (a[i] < a.length && a[i] !== a[a[i]]) {\n      // Move a[i] to index a[i], then inspect the replacement at i.\n      const t = a[i]; a[i] = a[t]; a[t] = t;\n    } else {\n      // This slot is settled or contains n.\n      i++;\n    }\n  }\n\n  // The first index without its matching value is the missing number.\n  for (let j = 0; j < a.length; j++) if (a[j] !== j) return j;\n  // If every array index matches, the absent value is n itself.\n  return a.length;\n}\n",
          ts: "function findMissingNumber(nums: number[]): number {\n  // Rearrange a copy, leaving the caller's input unchanged.\n  const a = [...nums];\n  let i = 0;\n\n  // Place each value from 0 through n - 1 at its matching index.\n  while (i < a.length) {\n    // The value n has no index in this length-n array, so leave it alone.\n    if (a[i] < a.length && a[i] !== a[a[i]]) {\n      // Move a[i] to index a[i], then inspect the replacement at i.\n      const t = a[i]; a[i] = a[t]; a[t] = t;\n    } else {\n      // This slot is settled or contains n.\n      i++;\n    }\n  }\n\n  // The first index without its matching value is the missing number.\n  for (let j = 0; j < a.length; j++) if (a[j] !== j) return j;\n  // If every array index matches, the absent value is n itself.\n  return a.length;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "cs-find-all-missing",
    slug: "find-all-missing",
    title: "Find All Missing Numbers",
    difficulty: "medium",
    patternIds: P,
    statement:
      "The list has `n` values drawn from 1 to n, but some appear more than once so others never appear. Return the missing values, sorted ascending.",
    examples: [
      { input: "[2,3,1,8,2,3,5,1]", output: "[4,6,7]" },
      { input: "[1,1]", output: "[2]" },
      { input: "[1,2,3]", output: "[]" },
    ],
    constraints: ["values are within 1..n where n = nums.length"],
    functionName: "findAllMissing",
    starter: {
      js: "function findAllMissing(nums) {\n  // Values in 1..n that never appear.\n}\n",
      ts: "function findAllMissing(nums: number[]): number[] {\n  // Values in 1..n that never appear.\n  return [];\n}\n",
    },
    visible: [
      { args: [[2, 3, 1, 8, 2, 3, 5, 1]], expected: [4, 6, 7] },
      { args: [[1, 1]], expected: [2] },
      { args: [[1, 2, 3]], expected: [] },
    ],
    hidden: [
      { args: [[]], expected: [] },
      { args: [[1]], expected: [] },
      { args: [[2, 2]], expected: [1] },
      { args: [[1, 1, 1]], expected: [2, 3] },
      { args: [[3, 3, 3, 3]], expected: [1, 2, 4] },
      { args: [[2, 1, 4, 3]], expected: [] },
    ],
    hints: [
      "Every value in 1..n either appears or it doesn't — track which ones you saw.",
      "Then walk 1..n and collect the ones never seen.",
      "The cyclic version places values at their index; leftover mismatches mark the gaps.",
    ],
    solutions: [
      {
        label: "Seen set",
        approach: "Record present values, then report the absent ones.",
        js: "function findAllMissing(nums) {\n  const seen = new Set(nums);\n  const out = [];\n  for (let v = 1; v <= nums.length; v++) if (!seen.has(v)) out.push(v);\n  return out;\n}\n",
        ts: "function findAllMissing(nums: number[]): number[] {\n  const seen = new Set(nums);\n  const out: number[] = [];\n  for (let v = 1; v <= nums.length; v++) if (!seen.has(v)) out.push(v);\n  return out;\n}\n",
        commentedCode: {
          js: "function findAllMissing(nums) {\n  // Record every value that appears; repeated insertions are harmless.\n  const seen = new Set(nums);\n  // Collect absent values in ascending order.\n  const out = [];\n\n  // Every valid answer must come from the complete range 1 through n.\n  for (let v = 1; v <= nums.length; v++) if (!seen.has(v)) out.push(v);\n\n  // The increasing scan already produced sorted output.\n  return out;\n}\n",
          ts: "function findAllMissing(nums: number[]): number[] {\n  // Record every value that appears; repeated insertions are harmless.\n  const seen = new Set(nums);\n  // Collect absent values in ascending order.\n  const out: number[] = [];\n\n  // Every valid answer must come from the complete range 1 through n.\n  for (let v = 1; v <= nums.length; v++) if (!seen.has(v)) out.push(v);\n\n  // The increasing scan already produced sorted output.\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Cyclic placement",
        approach: "Sort values into their home slots; each wrong slot names a missing value.",
        js: "function findAllMissing(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  const out = [];\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.push(j + 1);\n  return out;\n}\n",
        ts: "function findAllMissing(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  const out: number[] = [];\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.push(j + 1);\n  return out;\n}\n",
        commentedCode: {
          js: "function findAllMissing(nums) {\n  // Rearrange a copy so the original list is preserved.\n  const a = [...nums];\n  let i = 0;\n\n  // Try to place every value v at index v - 1.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // Swap only when the home index is valid and does not already hold this value.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      // Keep i fixed so the newly received value is checked next.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // A correct placement or duplicate cannot be improved from this slot.\n      i++;\n    }\n  }\n\n  // A mismatch at j means the expected value j + 1 never appeared.\n  const out = [];\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.push(j + 1);\n  // Scanning indices from left to right keeps the missing values sorted.\n  return out;\n}\n",
          ts: "function findAllMissing(nums: number[]): number[] {\n  // Rearrange a copy so the original list is preserved.\n  const a = [...nums];\n  let i = 0;\n\n  // Try to place every value v at index v - 1.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // Swap only when the home index is valid and does not already hold this value.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      // Keep i fixed so the newly received value is checked next.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // A correct placement or duplicate cannot be improved from this slot.\n      i++;\n    }\n  }\n\n  // A mismatch at j means the expected value j + 1 never appeared.\n  const out: number[] = [];\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.push(j + 1);\n  // Scanning indices from left to right keeps the missing values sorted.\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "cs-find-all-duplicates",
    slug: "find-all-duplicates",
    title: "Find All Duplicates",
    difficulty: "medium",
    patternIds: P,
    statement:
      "The list has `n` values drawn from 1 to n, with some appearing more than once. Return each repeated value once, sorted ascending.",
    examples: [
      { input: "[4,3,2,7,8,2,3,1]", output: "[2,3]" },
      { input: "[1,1]", output: "[1]" },
      { input: "[1,2]", output: "[]" },
    ],
    constraints: ["values are within 1..n where n = nums.length"],
    functionName: "findAllDuplicates",
    starter: {
      js: "function findAllDuplicates(nums) {\n  // Values appearing more than once, sorted.\n}\n",
      ts: "function findAllDuplicates(nums: number[]): number[] {\n  // Values appearing more than once, sorted.\n  return [];\n}\n",
    },
    visible: [
      { args: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [2, 3] },
      { args: [[1, 1]], expected: [1] },
      { args: [[1, 2]], expected: [] },
    ],
    hidden: [
      { args: [[]], expected: [] },
      { args: [[1]], expected: [] },
      { args: [[2, 2]], expected: [2] },
      { args: [[1, 1, 2, 2]], expected: [1, 2] },
      { args: [[3, 3, 3]], expected: [3] },
      { args: [[2, 1, 2, 1]], expected: [1, 2] },
    ],
    hints: [
      "Count how many times each value occurs.",
      "Report each value whose count exceeds one — only once, even if it appears three times.",
      "Sort the result so the output is deterministic.",
    ],
    solutions: [
      {
        label: "Count map",
        approach: "Tally occurrences and collect values seen more than once.",
        js: "function findAllDuplicates(nums) {\n  const counts = new Map();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  const out = [];\n  for (const [v, c] of counts) if (c > 1) out.push(v);\n  return out.sort((a, b) => a - b);\n}\n",
        ts: "function findAllDuplicates(nums: number[]): number[] {\n  const counts = new Map<number, number>();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  const out: number[] = [];\n  for (const [v, c] of counts) if (c > 1) out.push(v);\n  return out.sort((a, b) => a - b);\n}\n",
        commentedCode: {
          js: "function findAllDuplicates(nums) {\n  // Map each distinct value to the number of times it occurs.\n  const counts = new Map();\n  // Increment the current count, treating an unseen value as count zero.\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n\n  // Collect each repeated value once from its single map entry.\n  const out = [];\n  for (const [v, c] of counts) if (c > 1) out.push(v);\n\n  // Map insertion order is not necessarily numeric order, so sort the answer.\n  return out.sort((a, b) => a - b);\n}\n",
          ts: "function findAllDuplicates(nums: number[]): number[] {\n  // Map each distinct value to the number of times it occurs.\n  const counts = new Map<number, number>();\n  // Increment the current count, treating an unseen value as count zero.\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n\n  // Collect each repeated value once from its single map entry.\n  const out: number[] = [];\n  for (const [v, c] of counts) if (c > 1) out.push(v);\n\n  // Map insertion order is not necessarily numeric order, so sort the answer.\n  return out.sort((a, b) => a - b);\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
      {
        label: "Cyclic placement",
        approach: "After sorting values home, a wrong slot holds a duplicate.",
        js: "function findAllDuplicates(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  const out = new Set();\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.add(a[j]);\n  return [...out].sort((x, y) => x - y);\n}\n",
        ts: "function findAllDuplicates(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  const out = new Set<number>();\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.add(a[j]);\n  return [...out].sort((x, y) => x - y);\n}\n",
        commentedCode: {
          js: "function findAllDuplicates(nums) {\n  // Work on a copy while arranging values into their natural slots.\n  const a = [...nums];\n  let i = 0;\n\n  // Place each value v at index v - 1 whenever that home is available.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // If home already holds this value, the extra copy cannot be placed there.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This position is correct or contains an unplaceable duplicate.\n      i++;\n    }\n  }\n\n  // Every value left in the wrong slot is an extra copy of that value.\n  const out = new Set();\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.add(a[j]);\n  // The set removes repeated reports; sorting gives deterministic output.\n  return [...out].sort((x, y) => x - y);\n}\n",
          ts: "function findAllDuplicates(nums: number[]): number[] {\n  // Work on a copy while arranging values into their natural slots.\n  const a = [...nums];\n  let i = 0;\n\n  // Place each value v at index v - 1 whenever that home is available.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // If home already holds this value, the extra copy cannot be placed there.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This position is correct or contains an unplaceable duplicate.\n      i++;\n    }\n  }\n\n  // Every value left in the wrong slot is an extra copy of that value.\n  const out = new Set<number>();\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.add(a[j]);\n  // The set removes repeated reports; sorting gives deterministic output.\n  return [...out].sort((x, y) => x - y);\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "cs-find-corrupt-pair",
    slug: "find-corrupt-pair",
    title: "Find the Corrupt Pair",
    difficulty: "medium",
    patternIds: P,
    statement:
      "The list should hold 1 to n exactly once, but one value is duplicated and another is missing. Return `[duplicate, missing]`.",
    examples: [
      { input: "[3,1,2,5,2]", output: "[2,4]" },
      { input: "[3,1,2,3,6,4]", output: "[3,5]" },
      { input: "[1,1]", output: "[1,2]" },
    ],
    constraints: ["exactly one value is duplicated and one missing"],
    functionName: "findCorruptPair",
    starter: {
      js: "function findCorruptPair(nums) {\n  // [duplicated value, missing value].\n}\n",
      ts: "function findCorruptPair(nums: number[]): number[] {\n  // [duplicated value, missing value].\n  return [];\n}\n",
    },
    visible: [
      { args: [[3, 1, 2, 5, 2]], expected: [2, 4] },
      { args: [[3, 1, 2, 3, 6, 4]], expected: [3, 5] },
      { args: [[1, 1]], expected: [1, 2] },
    ],
    hidden: [
      { args: [[2, 2]], expected: [2, 1] },
      { args: [[1, 2, 2]], expected: [2, 3] },
      { args: [[2, 1, 3, 3]], expected: [3, 4] },
      { args: [[1, 1, 3, 4]], expected: [1, 2] },
      { args: [[4, 3, 2, 2]], expected: [2, 1] },
      { args: [[1, 2, 3, 3, 5]], expected: [3, 4] },
    ],
    hints: [
      "Count how often each value in 1..n appears.",
      "The value counted twice is the duplicate; the value counted zero times is missing.",
      "Return them in that order: [duplicate, missing].",
    ],
    solutions: [
      {
        label: "Count occurrences",
        approach: "Scan 1..n for the value seen twice and the one never seen.",
        js: "function findCorruptPair(nums) {\n  const counts = new Map();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  let dup = -1, missing = -1;\n  for (let v = 1; v <= nums.length; v++) {\n    const c = counts.get(v) || 0;\n    if (c === 0) missing = v;\n    else if (c > 1) dup = v;\n  }\n  return [dup, missing];\n}\n",
        ts: "function findCorruptPair(nums: number[]): number[] {\n  const counts = new Map<number, number>();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  let dup = -1, missing = -1;\n  for (let v = 1; v <= nums.length; v++) {\n    const c = counts.get(v) || 0;\n    if (c === 0) missing = v;\n    else if (c > 1) dup = v;\n  }\n  return [dup, missing];\n}\n",
        commentedCode: {
          js: "function findCorruptPair(nums) {\n  // Count how often every supplied value appears.\n  const counts = new Map();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n\n  // Use sentinel values until both corrupt parts are found.\n  let dup = -1, missing = -1;\n  // Check every value that a valid 1..n permutation should contain.\n  for (let v = 1; v <= nums.length; v++) {\n    const c = counts.get(v) || 0;\n    // Zero occurrences identifies the missing value.\n    if (c === 0) missing = v;\n    // More than one occurrence identifies the duplicate.\n    else if (c > 1) dup = v;\n  }\n\n  // The required order is duplicate first, then missing.\n  return [dup, missing];\n}\n",
          ts: "function findCorruptPair(nums: number[]): number[] {\n  // Count how often every supplied value appears.\n  const counts = new Map<number, number>();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n\n  // Use sentinel values until both corrupt parts are found.\n  let dup = -1, missing = -1;\n  // Check every value that a valid 1..n permutation should contain.\n  for (let v = 1; v <= nums.length; v++) {\n    const c = counts.get(v) || 0;\n    // Zero occurrences identifies the missing value.\n    if (c === 0) missing = v;\n    // More than one occurrence identifies the duplicate.\n    else if (c > 1) dup = v;\n  }\n\n  // The required order is duplicate first, then missing.\n  return [dup, missing];\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Cyclic placement",
        approach: "Sort values home; the one mismatched slot reveals both answers.",
        js: "function findCorruptPair(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) return [a[j], j + 1];\n  return [-1, -1];\n}\n",
        ts: "function findCorruptPair(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) return [a[j], j + 1];\n  return [-1, -1];\n}\n",
        commentedCode: {
          js: "function findCorruptPair(nums) {\n  // Arrange a copy so a value v can claim index v - 1.\n  const a = [...nums];\n  let i = 0;\n\n  // Place values at home until duplicates prevent further swaps.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // Do not swap when home already contains the same duplicated value.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n\n  // At the lone mismatch, the stored value is duplicated and j + 1 is missing.\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) return [a[j], j + 1];\n  // This fallback is unreachable when the input satisfies the stated constraint.\n  return [-1, -1];\n}\n",
          ts: "function findCorruptPair(nums: number[]): number[] {\n  // Arrange a copy so a value v can claim index v - 1.\n  const a = [...nums];\n  let i = 0;\n\n  // Place values at home until duplicates prevent further swaps.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // Do not swap when home already contains the same duplicated value.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n\n  // At the lone mismatch, the stored value is duplicated and j + 1 is missing.\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) return [a[j], j + 1];\n  // This fallback is unreachable when the input satisfies the stated constraint.\n  return [-1, -1];\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "cs-first-missing-positive",
    slug: "first-missing-positive",
    title: "First Missing Positive",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return the smallest positive integer that does not appear in the list. Values may be negative, zero, or repeated.",
    examples: [
      { input: "[3,4,-1,1]", output: "2" },
      { input: "[1,2,0]", output: "3" },
      { input: "[7,8,9,11,12]", output: "1" },
    ],
    constraints: ["0 <= nums.length <= 10000", "values may be any integers"],
    functionName: "firstMissingPositive",
    starter: {
      js: "function firstMissingPositive(nums) {\n  // Smallest positive integer not present.\n}\n",
      ts: "function firstMissingPositive(nums: number[]): number {\n  // Smallest positive integer not present.\n  return 1;\n}\n",
    },
    visible: [
      { args: [[3, 4, -1, 1]], expected: 2 },
      { args: [[1, 2, 0]], expected: 3 },
      { args: [[7, 8, 9, 11, 12]], expected: 1 },
    ],
    hidden: [
      { args: [[]], expected: 1 },
      { args: [[1]], expected: 2 },
      { args: [[2]], expected: 1 },
      { args: [[1, 2, 3]], expected: 4 },
      { args: [[-1, -2]], expected: 1 },
      { args: [[1, 1]], expected: 2 },
    ],
    hints: [
      "The answer is always between 1 and n+1, where n is the length.",
      "Values outside 1..n can be ignored entirely.",
      "Place each in-range value at index value-1, then find the first index holding the wrong value.",
    ],
    solutions: [
      {
        label: "Cyclic placement",
        approach: "Send in-range values home; the first wrong slot names the answer.",
        js: "function firstMissingPositive(nums) {\n  const a = [...nums];\n  const n = a.length;\n  let i = 0;\n  while (i < n) {\n    const correct = a[i] - 1;\n    if (a[i] > 0 && a[i] <= n && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < n; j++) if (a[j] !== j + 1) return j + 1;\n  return n + 1;\n}\n",
        ts: "function firstMissingPositive(nums: number[]): number {\n  const a = [...nums];\n  const n = a.length;\n  let i = 0;\n  while (i < n) {\n    const correct = a[i] - 1;\n    if (a[i] > 0 && a[i] <= n && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < n; j++) if (a[j] !== j + 1) return j + 1;\n  return n + 1;\n}\n",
        commentedCode: {
          js: "function firstMissingPositive(nums) {\n  // Work on a copy because cyclic placement rearranges values.\n  const a = [...nums];\n  // Only values 1..n can affect whether the answer is at most n.\n  const n = a.length;\n  let i = 0;\n\n  // Place each relevant positive value v at index v - 1.\n  while (i < n) {\n    const correct = a[i] - 1;\n    // Ignore non-positive, too-large, and duplicate values.\n    if (a[i] > 0 && a[i] <= n && a[i] !== a[correct]) {\n      // Swap the current value home, then re-check index i.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n\n  // The first index not holding j + 1 reveals the smallest missing positive.\n  for (let j = 0; j < n; j++) if (a[j] !== j + 1) return j + 1;\n  // If 1..n are all present, n + 1 is the next possible answer.\n  return n + 1;\n}\n",
          ts: "function firstMissingPositive(nums: number[]): number {\n  // Work on a copy because cyclic placement rearranges values.\n  const a = [...nums];\n  // Only values 1..n can affect whether the answer is at most n.\n  const n = a.length;\n  let i = 0;\n\n  // Place each relevant positive value v at index v - 1.\n  while (i < n) {\n    const correct = a[i] - 1;\n    // Ignore non-positive, too-large, and duplicate values.\n    if (a[i] > 0 && a[i] <= n && a[i] !== a[correct]) {\n      // Swap the current value home, then re-check index i.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n\n  // The first index not holding j + 1 reveals the smallest missing positive.\n  for (let j = 0; j < n; j++) if (a[j] !== j + 1) return j + 1;\n  // If 1..n are all present, n + 1 is the next possible answer.\n  return n + 1;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Membership set",
        approach: "Put everything in a set and count upward from 1.",
        js: "function firstMissingPositive(nums) {\n  const seen = new Set(nums);\n  let v = 1;\n  while (seen.has(v)) v++;\n  return v;\n}\n",
        ts: "function firstMissingPositive(nums: number[]): number {\n  const seen = new Set(nums);\n  let v = 1;\n  while (seen.has(v)) v++;\n  return v;\n}\n",
        commentedCode: {
          js: "function firstMissingPositive(nums) {\n  // Store all present values for constant-time membership checks.\n  const seen = new Set(nums);\n  // One is the smallest possible positive answer.\n  let v = 1;\n\n  // Skip each consecutive positive integer that exists in the input.\n  while (seen.has(v)) v++;\n\n  // The first failed lookup is the smallest missing positive.\n  return v;\n}\n",
          ts: "function firstMissingPositive(nums: number[]): number {\n  // Store all present values for constant-time membership checks.\n  const seen = new Set(nums);\n  // One is the smallest possible positive answer.\n  let v = 1;\n\n  // Skip each consecutive positive integer that exists in the input.\n  while (seen.has(v)) v++;\n\n  // The first failed lookup is the smallest missing positive.\n  return v;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "cs-is-permutation",
    slug: "is-permutation",
    title: "Is It a Permutation?",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Return `true` if the list is exactly a permutation of 1 through n, where n is its length.",
    examples: [
      { input: "[3,1,2]", output: "true" },
      { input: "[1,1]", output: "false" },
      { input: "[]", output: "true" },
    ],
    constraints: ["0 <= nums.length <= 10000"],
    functionName: "isPermutation",
    starter: {
      js: "function isPermutation(nums) {\n  // True if nums is a permutation of 1..n.\n}\n",
      ts: "function isPermutation(nums: number[]): boolean {\n  // True if nums is a permutation of 1..n.\n  return false;\n}\n",
    },
    visible: [
      { args: [[3, 1, 2]], expected: true },
      { args: [[1, 1]], expected: false },
      { args: [[]], expected: true },
    ],
    hidden: [
      { args: [[1]], expected: true },
      { args: [[2]], expected: false },
      { args: [[1, 2, 3, 4]], expected: true },
      { args: [[1, 2, 4]], expected: false },
      { args: [[2, 1]], expected: true },
      { args: [[0, 1]], expected: false },
    ],
    hints: [
      "Every value must be in range 1..n, and no value may repeat.",
      "A single pass with a seen-set catches both failures.",
      "An empty list vacuously qualifies.",
    ],
    solutions: [
      {
        label: "Range and uniqueness check",
        approach: "Reject out-of-range values and repeats in one pass.",
        js: "function isPermutation(nums) {\n  const n = nums.length;\n  const seen = new Set();\n  for (const v of nums) {\n    if (v < 1 || v > n || seen.has(v)) return false;\n    seen.add(v);\n  }\n  return true;\n}\n",
        ts: "function isPermutation(nums: number[]): boolean {\n  const n = nums.length;\n  const seen = new Set<number>();\n  for (const v of nums) {\n    if (v < 1 || v > n || seen.has(v)) return false;\n    seen.add(v);\n  }\n  return true;\n}\n",
        commentedCode: {
          js: "function isPermutation(nums) {\n  // A length-n permutation must contain each value from 1 through n once.\n  const n = nums.length;\n  // Track values already accepted so repeats can be rejected immediately.\n  const seen = new Set();\n\n  for (const v of nums) {\n    // Any out-of-range value or duplicate makes the permutation invalid.\n    if (v < 1 || v > n || seen.has(v)) return false;\n    // Remember this valid value before checking the rest.\n    seen.add(v);\n  }\n\n  // n unique in-range values must be exactly the complete range 1..n.\n  return true;\n}\n",
          ts: "function isPermutation(nums: number[]): boolean {\n  // A length-n permutation must contain each value from 1 through n once.\n  const n = nums.length;\n  // Track values already accepted so repeats can be rejected immediately.\n  const seen = new Set<number>();\n\n  for (const v of nums) {\n    // Any out-of-range value or duplicate makes the permutation invalid.\n    if (v < 1 || v > n || seen.has(v)) return false;\n    // Remember this valid value before checking the rest.\n    seen.add(v);\n  }\n\n  // n unique in-range values must be exactly the complete range 1..n.\n  return true;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Sort and compare",
        approach: "Sorted, a permutation must read 1, 2, 3, …",
        js: "function isPermutation(nums) {\n  const sorted = [...nums].sort((a, b) => a - b);\n  for (let i = 0; i < sorted.length; i++) if (sorted[i] !== i + 1) return false;\n  return true;\n}\n",
        ts: "function isPermutation(nums: number[]): boolean {\n  const sorted = [...nums].sort((a, b) => a - b);\n  for (let i = 0; i < sorted.length; i++) if (sorted[i] !== i + 1) return false;\n  return true;\n}\n",
        commentedCode: {
          js: "function isPermutation(nums) {\n  // Sort a copy so the original order is not changed.\n  const sorted = [...nums].sort((a, b) => a - b);\n\n  // A valid sorted permutation must hold i + 1 at every index i.\n  for (let i = 0; i < sorted.length; i++) if (sorted[i] !== i + 1) return false;\n\n  // Every position matched its required value; this also accepts an empty list.\n  return true;\n}\n",
          ts: "function isPermutation(nums: number[]): boolean {\n  // Sort a copy so the original order is not changed.\n  const sorted = [...nums].sort((a, b) => a - b);\n\n  // A valid sorted permutation must hold i + 1 at every index i.\n  for (let i = 0; i < sorted.length; i++) if (sorted[i] !== i + 1) return false;\n\n  // Every position matched its required value; this also accepts an empty list.\n  return true;\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "cs-sort-0-to-n-1",
    slug: "cyclic-sort-zero-based",
    title: "Cyclic Sort (Zero-Based)",
    difficulty: "easy",
    patternIds: P,
    statement:
      "The list holds the numbers 0 through n-1 exactly once. Return them sorted ascending by placing each value at its own index.",
    examples: [
      { input: "[2,0,1]", output: "[0,1,2]" },
      { input: "[1,0]", output: "[0,1]" },
      { input: "[]", output: "[]" },
    ],
    constraints: ["the list is a permutation of 0..n-1"],
    functionName: "cyclicSortZero",
    starter: {
      js: "function cyclicSortZero(nums) {\n  // Put each value at index value.\n}\n",
      ts: "function cyclicSortZero(nums: number[]): number[] {\n  // Put each value at index value.\n  return [];\n}\n",
    },
    visible: [
      { args: [[2, 0, 1]], expected: [0, 1, 2] },
      { args: [[1, 0]], expected: [0, 1] },
      { args: [[]], expected: [] },
    ],
    hidden: [
      { args: [[0]], expected: [0] },
      { args: [[0, 1, 2]], expected: [0, 1, 2] },
      { args: [[2, 1, 0]], expected: [0, 1, 2] },
      { args: [[3, 2, 1, 0]], expected: [0, 1, 2, 3] },
      { args: [[1, 2, 0]], expected: [0, 1, 2] },
      { args: [[0, 2, 1]], expected: [0, 1, 2] },
    ],
    hints: [
      "With a zero-based range, value `v` belongs at index `v` — no offset.",
      "Swap until the value at i is correct, then move on.",
      "This is the same loop as the 1..n version with the offset removed.",
    ],
    solutions: [
      {
        label: "Cyclic placement",
        approach: "Swap each value to index equal to itself.",
        js: "function cyclicSortZero(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i];\n    if (a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return a;\n}\n",
        ts: "function cyclicSortZero(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i];\n    if (a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return a;\n}\n",
        commentedCode: {
          js: "function cyclicSortZero(nums) {\n  // Rearrange a copy so the caller's array remains unchanged.\n  const a = [...nums];\n  let i = 0;\n\n  // Settle one index at a time.\n  while (i < a.length) {\n    // In the range 0..n-1, each value is already its own home index.\n    const correct = a[i];\n    // Send the current value directly to that index if it is not there yet.\n    if (a[i] !== a[correct]) {\n      // Re-check i because the swap places a different value here.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // The current value is home, so move forward.\n      i++;\n    }\n  }\n\n  // Every index now contains the equal-valued number.\n  return a;\n}\n",
          ts: "function cyclicSortZero(nums: number[]): number[] {\n  // Rearrange a copy so the caller's array remains unchanged.\n  const a = [...nums];\n  let i = 0;\n\n  // Settle one index at a time.\n  while (i < a.length) {\n    // In the range 0..n-1, each value is already its own home index.\n    const correct = a[i];\n    // Send the current value directly to that index if it is not there yet.\n    if (a[i] !== a[correct]) {\n      // Re-check i because the swap places a different value here.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // The current value is home, so move forward.\n      i++;\n    }\n  }\n\n  // Every index now contains the equal-valued number.\n  return a;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Built-in sort",
        approach: "A general sort also produces the answer.",
        js: "function cyclicSortZero(nums) {\n  return [...nums].sort((a, b) => a - b);\n}\n",
        ts: "function cyclicSortZero(nums: number[]): number[] {\n  return [...nums].sort((a, b) => a - b);\n}\n",
        commentedCode: {
          js: "function cyclicSortZero(nums) {\n  // Copy the input and sort numbers ascending with a numeric comparator.\n  return [...nums].sort((a, b) => a - b);\n}\n",
          ts: "function cyclicSortZero(nums: number[]): number[] {\n  // Copy the input and sort numbers ascending with a numeric comparator.\n  return [...nums].sort((a, b) => a - b);\n}\n",
        },
        time: "O(n log n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "cs-kth-missing-positive",
    slug: "kth-missing-positive",
    title: "Kth Missing Positive",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a strictly increasing list of positive integers, return the `k`-th positive integer that is absent from it.",
    examples: [
      { input: "[2,3,4,7,11], 5", output: "9" },
      { input: "[1,2,3,4], 2", output: "6" },
      { input: "[], 3", output: "3" },
    ],
    constraints: ["the list is strictly increasing and positive", "k >= 1"],
    functionName: "kthMissingPositive",
    starter: {
      js: "function kthMissingPositive(sortedNums, k) {\n  // The k-th absent positive integer.\n}\n",
      ts: "function kthMissingPositive(sortedNums: number[], k: number): number {\n  // The k-th absent positive integer.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[2, 3, 4, 7, 11], 5], expected: 9 },
      { args: [[1, 2, 3, 4], 2], expected: 6 },
      { args: [[], 3], expected: 3 },
    ],
    hidden: [
      { args: [[1], 1], expected: 2 },
      { args: [[2], 1], expected: 1 },
      { args: [[2], 2], expected: 3 },
      { args: [[1, 3], 1], expected: 2 },
      { args: [[1, 3], 2], expected: 4 },
      { args: [[5, 6, 7], 3], expected: 3 },
    ],
    hints: [
      "Walk the positive integers 1, 2, 3, … and skip the ones present in the list.",
      "Count each skipped-over integer until the count reaches k.",
      "Because the list is sorted you can advance through it with a single pointer.",
    ],
    solutions: [
      {
        label: "Count upward",
        approach: "Step through the positives, tallying the absent ones.",
        js: "function kthMissingPositive(sortedNums, k) {\n  let missing = 0, current = 0, i = 0;\n  while (true) {\n    current++;\n    if (i < sortedNums.length && sortedNums[i] === current) { i++; continue; }\n    missing++;\n    if (missing === k) return current;\n  }\n}\n",
        ts: "function kthMissingPositive(sortedNums: number[], k: number): number {\n  let missing = 0, current = 0, i = 0;\n  for (;;) {\n    current++;\n    if (i < sortedNums.length && sortedNums[i] === current) { i++; continue; }\n    missing++;\n    if (missing === k) return current;\n  }\n}\n",
        commentedCode: {
          js: "function kthMissingPositive(sortedNums, k) {\n  // Track missing values found, the candidate integer, and the array pointer.\n  let missing = 0, current = 0, i = 0;\n\n  // The loop returns as soon as the kth gap is found.\n  while (true) {\n    // Examine positive integers in increasing order, starting with one.\n    current++;\n    // A match means this candidate is present, so consume it and keep searching.\n    if (i < sortedNums.length && sortedNums[i] === current) { i++; continue; }\n    // Otherwise this candidate is absent.\n    missing++;\n    // Finding gaps in ascending order makes the kth one the required answer.\n    if (missing === k) return current;\n  }\n}\n",
          ts: "function kthMissingPositive(sortedNums: number[], k: number): number {\n  // Track missing values found, the candidate integer, and the array pointer.\n  let missing = 0, current = 0, i = 0;\n\n  // The loop returns as soon as the kth gap is found.\n  for (;;) {\n    // Examine positive integers in increasing order, starting with one.\n    current++;\n    // A match means this candidate is present, so consume it and keep searching.\n    if (i < sortedNums.length && sortedNums[i] === current) { i++; continue; }\n    // Otherwise this candidate is absent.\n    missing++;\n    // Finding gaps in ascending order makes the kth one the required answer.\n    if (missing === k) return current;\n  }\n}\n",
        },
        time: "O(n + k)",
        space: "O(1)",
      },
      {
        label: "Membership set",
        approach: "Look each candidate up in a set of present values.",
        js: "function kthMissingPositive(sortedNums, k) {\n  const present = new Set(sortedNums);\n  let missing = 0, v = 0;\n  while (missing < k) {\n    v++;\n    if (!present.has(v)) missing++;\n  }\n  return v;\n}\n",
        ts: "function kthMissingPositive(sortedNums: number[], k: number): number {\n  const present = new Set(sortedNums);\n  let missing = 0, v = 0;\n  while (missing < k) {\n    v++;\n    if (!present.has(v)) missing++;\n  }\n  return v;\n}\n",
        commentedCode: {
          js: "function kthMissingPositive(sortedNums, k) {\n  // Store present values so each candidate can be checked in constant time.\n  const present = new Set(sortedNums);\n  // Count absent positives while v advances through them in order.\n  let missing = 0, v = 0;\n\n  // Stop only after exactly k missing values have been encountered.\n  while (missing < k) {\n    v++;\n    // Present values do not advance the missing-value count.\n    if (!present.has(v)) missing++;\n  }\n\n  // v is the positive integer that raised the count to k.\n  return v;\n}\n",
          ts: "function kthMissingPositive(sortedNums: number[], k: number): number {\n  // Store present values so each candidate can be checked in constant time.\n  const present = new Set(sortedNums);\n  // Count absent positives while v advances through them in order.\n  let missing = 0, v = 0;\n\n  // Stop only after exactly k missing values have been encountered.\n  while (missing < k) {\n    v++;\n    // Present values do not advance the missing-value count.\n    if (!present.has(v)) missing++;\n  }\n\n  // v is the positive integer that raised the count to k.\n  return v;\n}\n",
        },
        time: "O(n + k)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "cs-find-duplicate-cyclic",
    slug: "find-duplicate-cyclic",
    title: "Find the Duplicate",
    difficulty: "medium",
    patternIds: P,
    statement:
      "The list holds n+1 values drawn from 1 to n, so at least one value repeats. Return the repeated value.",
    examples: [
      { input: "[1,3,4,2,2]", output: "2" },
      { input: "[3,1,3,4,2]", output: "3" },
      { input: "[1,1]", output: "1" },
    ],
    constraints: ["values are within 1..n where n = nums.length - 1"],
    functionName: "findDuplicateCyclic",
    starter: {
      js: "function findDuplicateCyclic(nums) {\n  // The repeated value.\n}\n",
      ts: "function findDuplicateCyclic(nums: number[]): number {\n  // The repeated value.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 3, 4, 2, 2]], expected: 2 },
      { args: [[3, 1, 3, 4, 2]], expected: 3 },
      { args: [[1, 1]], expected: 1 },
    ],
    hidden: [
      { args: [[2, 2, 2, 2, 2]], expected: 2 },
      { args: [[1, 2, 3, 4, 4]], expected: 4 },
      { args: [[4, 3, 1, 4, 2]], expected: 4 },
      { args: [[2, 1, 2]], expected: 2 },
      { args: [[1, 3, 2, 3]], expected: 3 },
      { args: [[3, 3, 3, 3]], expected: 3 },
    ],
    hints: [
      "The first value you meet twice is the answer.",
      "A set makes that a single pass.",
      "The cyclic version swaps values home until a slot already holds its own value.",
    ],
    solutions: [
      {
        label: "Seen set",
        approach: "Return the first value encountered a second time.",
        js: "function findDuplicateCyclic(nums) {\n  const seen = new Set();\n  for (const v of nums) {\n    if (seen.has(v)) return v;\n    seen.add(v);\n  }\n  return -1;\n}\n",
        ts: "function findDuplicateCyclic(nums: number[]): number {\n  const seen = new Set<number>();\n  for (const v of nums) {\n    if (seen.has(v)) return v;\n    seen.add(v);\n  }\n  return -1;\n}\n",
        commentedCode: {
          js: "function findDuplicateCyclic(nums) {\n  // Remember each value after its first occurrence.\n  const seen = new Set();\n\n  for (const v of nums) {\n    // A value already in the set has now appeared at least twice.\n    if (seen.has(v)) return v;\n    // Record this first occurrence before moving on.\n    seen.add(v);\n  }\n\n  // The constraints guarantee a duplicate, so this is only a safety fallback.\n  return -1;\n}\n",
          ts: "function findDuplicateCyclic(nums: number[]): number {\n  // Remember each value after its first occurrence.\n  const seen = new Set<number>();\n\n  for (const v of nums) {\n    // A value already in the set has now appeared at least twice.\n    if (seen.has(v)) return v;\n    // Record this first occurrence before moving on.\n    seen.add(v);\n  }\n\n  // The constraints guarantee a duplicate, so this is only a safety fallback.\n  return -1;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Cyclic placement",
        approach: "Swap values home; a collision at a correct slot exposes the duplicate.",
        js: "function findDuplicateCyclic(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (a[i] !== i + 1) {\n      if (a[i] === a[correct]) return a[i];\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return -1;\n}\n",
        ts: "function findDuplicateCyclic(nums: number[]): number {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (a[i] !== i + 1) {\n      if (a[i] === a[correct]) return a[i];\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return -1;\n}\n",
        commentedCode: {
          js: "function findDuplicateCyclic(nums) {\n  // Rearrange a copy while looking for two copies that want the same home.\n  const a = [...nums];\n  let i = 0;\n\n  while (i < a.length) {\n    // Values in 1..n belong at zero-based index value - 1.\n    const correct = a[i] - 1;\n    // A misplaced value should be sent to its home index.\n    if (a[i] !== i + 1) {\n      // If home already holds the value, the current copy proves it is duplicated.\n      if (a[i] === a[correct]) return a[i];\n      // Otherwise swap it home and inspect the new value at i.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This value is already home.\n      i++;\n    }\n  }\n\n  // The input contract guarantees a duplicate; this handles invalid input safely.\n  return -1;\n}\n",
          ts: "function findDuplicateCyclic(nums: number[]): number {\n  // Rearrange a copy while looking for two copies that want the same home.\n  const a = [...nums];\n  let i = 0;\n\n  while (i < a.length) {\n    // Values in 1..n belong at zero-based index value - 1.\n    const correct = a[i] - 1;\n    // A misplaced value should be sent to its home index.\n    if (a[i] !== i + 1) {\n      // If home already holds the value, the current copy proves it is duplicated.\n      if (a[i] === a[correct]) return a[i];\n      // Otherwise swap it home and inspect the new value at i.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This value is already home.\n      i++;\n    }\n  }\n\n  // The input contract guarantees a duplicate; this handles invalid input safely.\n  return -1;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
];

export const cyclicSortProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const cyclicSortMcqs: QuizQuestion[] = [
  {
    id: "s5-cs-time",
    kind: "mcq",
    prompt: "Cyclic sort applies when values come from a known contiguous range like 1..n. Its time complexity is:",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
    answerIndex: 1,
    explanation: "Although there's an inner swap loop, each value reaches its home slot once, so total work is linear.",
  },
  {
    id: "s5-cs-space",
    kind: "mcq",
    prompt: "Cyclic sort rearranges values in place, so its extra space is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 0,
    explanation: "It only needs a temporary for the swap — no auxiliary array or hash set.",
  },
];

export const cyclicSortModule: Module = {
  id: "m-pat-cyclic-sort",
  stageId: S,
  title: "Cyclic Sort",
  kind: "patternModule",
  summary: "When values come from 1..n, put each one at its own index — missing and duplicate values fall out for free.",
  lessonSections: [
    {
      heading: "Values that know where they belong",
      body: `When a list contains the numbers **1..n** (or **0..n-1**), each value has an obvious home: value \`v\` belongs at index \`v-1\`. Cyclic sort walks the list swapping values into their homes. Because every swap puts at least one value in its final position, the whole thing is **O(n)** with **O(1)** extra space.

\`\`\`js
function cyclicSort(a) {
  let i = 0;
  while (i < a.length) {
    const correct = a[i] - 1;
    if (a[i] !== a[correct]) [a[i], a[correct]] = [a[correct], a[i]]; // swap home
    else i++;                                                        // already right
  }
  return a;
}
console.log(cyclicSort([3, 1, 5, 4, 2])); // [1, 2, 3, 4, 5]
\`\`\`

Note the loop shape: you **don't** advance \`i\` after a swap — the value you just received still needs checking.`,
    },
    {
      heading: "Recognition cues",
      body: `This pattern is worth spotting because it answers a whole family of questions in linear time and constant space:

- the input is a permutation (or near-permutation) of a **known contiguous range**,
- find the **missing** number, or **all** missing numbers,
- find the **duplicate**, or **all** duplicates,
- find the **corrupt pair** (one duplicated, one missing),
- **first missing positive** — the classic, where out-of-range values are simply ignored.

The giveaway phrase is "the array contains numbers from 1 to n".`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// After the sort, any slot holding the wrong value tells the story
for (let j = 0; j < a.length; j++) {
  if (a[j] !== j + 1) {
    // a[j] is a duplicate, and (j + 1) is missing
  }
}
\`\`\`

**Pitfalls:** advancing \`i\` after a swap (the incoming value never gets checked); infinite loops when duplicates make \`a[i]\` and \`a[correct]\` equal — compare **values**, not indices, so equal values stop the swap; forgetting to skip out-of-range values in *first missing positive*; and mutating the caller's array when the problem expects a fresh one. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "cs-sort-1-to-n",
  drillProblemIds: [
    "cs-sort-1-to-n",
    "cs-find-missing",
    "cs-find-all-missing",
    "cs-find-all-duplicates",
    "cs-find-corrupt-pair",
    "cs-first-missing-positive",
  ],
  testPoolProblemIds: [
    "cs-is-permutation",
    "cs-sort-0-to-n-1",
    "cs-kth-missing-positive",
    "cs-find-duplicate-cyclic",
  ],
  complexityQuestionIds: ["s5-cs-time", "s5-cs-space"],
  badgeId: "badge-pat-cyclic-sort",
  prerequisiteModuleIds: [],
};
