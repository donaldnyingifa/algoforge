import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["adv-backtrack"];

/*
 * Advanced backtracking. Enumeration problems return their results in a
 * deterministic order: lists of number-arrays are sorted by their comma-joined
 * form, lists of strings are sorted lexicographically, and counting problems
 * return a single number. This keeps outputs reproducible for the judge.
 */

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "ab-permutations",
    slug: "all-permutations",
    title: "All Permutations",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an array of distinct integers, return all of its permutations. Return the list of permutations sorted by their comma-joined string form.",
    examples: [
      { input: "[1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
      { input: "[1]", output: "[[1]]" },
      { input: "[1,2]", output: "[[1,2],[2,1]]" },
    ],
    constraints: ["1 <= nums.length <= 7", "values are distinct"],
    functionName: "permutations",
    starter: {
      js: "function permutations(nums) {\n  // All permutations, sorted by joined form.\n}\n",
      ts: "function permutations(nums: number[]): number[][] {\n  // All permutations, sorted by joined form.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] },
      { args: [[1]], expected: [[1]] },
      { args: [[1, 2]], expected: [[1, 2], [2, 1]] },
    ],
    hidden: [
      { args: [[0, 1, 2]], expected: [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]] },
      { args: [[5, 6]], expected: [[5, 6], [6, 5]] },
      { args: [[7]], expected: [[7]] },
      { args: [[2, 1]], expected: [[1, 2], [2, 1]] },
      { args: [[3, 1, 2]], expected: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] },
      { args: [[9, 8]], expected: [[8, 9], [9, 8]] },
    ],
    hints: [
      "Backtrack: at each depth pick an unused element.",
      "Mark elements used, recurse, then unmark on the way back.",
      "Collect a copy of the current arrangement when it's full length.",
    ],
    solutions: [
      {
        label: "Backtracking with a used array",
        approach: "Choose each unused element in turn, recording full arrangements.",
        js: "function permutations(nums) {\n  const res = [], used = new Array(nums.length).fill(false), cur = [];\n  const bt = () => {\n    if (cur.length === nums.length) { res.push(cur.slice()); return; }\n    for (let i = 0; i < nums.length; i++) if (!used[i]) {\n      used[i] = true; cur.push(nums[i]);\n      bt();\n      cur.pop(); used[i] = false;\n    }\n  };\n  bt();\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        ts: "function permutations(nums: number[]): number[][] {\n  const res: number[][] = [], used = new Array(nums.length).fill(false), cur: number[] = [];\n  const bt = (): void => {\n    if (cur.length === nums.length) { res.push(cur.slice()); return; }\n    for (let i = 0; i < nums.length; i++) if (!used[i]) {\n      used[i] = true; cur.push(nums[i]);\n      bt();\n      cur.pop(); used[i] = false;\n    }\n  };\n  bt();\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        commentedCode: {
          js: "function permutations(nums) {\n  // res stores completed arrangements; used tracks chosen indices; cur is the current arrangement.\n  const res = [], used = new Array(nums.length).fill(false), cur = [];\n\n  const bt = () => {\n    // A choice at every position forms one complete permutation. Copy cur before later undo steps mutate it.\n    if (cur.length === nums.length) { res.push(cur.slice()); return; }\n\n    // Try every input position that this branch has not used yet.\n    for (let i = 0; i < nums.length; i++) if (!used[i]) {\n      // Choose nums[i] for the next position.\n      used[i] = true; cur.push(nums[i]);\n      // Fill the remaining positions recursively.\n      bt();\n      // Undo both pieces of state so the next candidate starts from the same prefix.\n      cur.pop(); used[i] = false;\n    }\n  };\n\n  // Start with an empty arrangement.\n  bt();\n  // Normalize the output order required by the problem.\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
          ts: "function permutations(nums: number[]): number[][] {\n  // res stores completed arrangements; used tracks chosen indices; cur is the current arrangement.\n  const res: number[][] = [], used = new Array(nums.length).fill(false), cur: number[] = [];\n\n  const bt = (): void => {\n    // A choice at every position forms one complete permutation. Copy cur before later undo steps mutate it.\n    if (cur.length === nums.length) { res.push(cur.slice()); return; }\n\n    // Try every input position that this branch has not used yet.\n    for (let i = 0; i < nums.length; i++) if (!used[i]) {\n      // Choose nums[i] for the next position.\n      used[i] = true; cur.push(nums[i]);\n      // Fill the remaining positions recursively.\n      bt();\n      // Undo both pieces of state so the next candidate starts from the same prefix.\n      cur.pop(); used[i] = false;\n    }\n  };\n\n  // Start with an empty arrangement.\n  bt();\n  // Normalize the output order required by the problem.\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        },
        time: "O(n·n!)",
        space: "O(n)",
      },
      {
        label: "Insert-into-position",
        approach: "Build permutations by inserting each element into every slot.",
        js: "function permutations(nums) {\n  let perms = [[]];\n  for (const x of nums) {\n    const next = [];\n    for (const p of perms) for (let i = 0; i <= p.length; i++) next.push([...p.slice(0, i), x, ...p.slice(i)]);\n    perms = next;\n  }\n  return perms.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        ts: "function permutations(nums: number[]): number[][] {\n  let perms: number[][] = [[]];\n  for (const x of nums) {\n    const next: number[][] = [];\n    for (const p of perms) for (let i = 0; i <= p.length; i++) next.push([...p.slice(0, i), x, ...p.slice(i)]);\n    perms = next;\n  }\n  return perms.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        commentedCode: {
          js: "function permutations(nums) {\n  // The empty prefix has one permutation: the empty arrangement.\n  let perms = [[]];\n\n  // Incorporate one input value at a time.\n  for (const x of nums) {\n    // Build a fresh generation of permutations that all include x.\n    const next = [];\n    // Inserting x before, between, or after every existing arrangement creates every new ordering.\n    for (const p of perms) for (let i = 0; i <= p.length; i++) next.push([...p.slice(0, i), x, ...p.slice(i)]);\n    // The expanded generation becomes the input for the next value.\n    perms = next;\n  }\n\n  // Return the deterministic comma-joined order required by the judge.\n  return perms.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
          ts: "function permutations(nums: number[]): number[][] {\n  // The empty prefix has one permutation: the empty arrangement.\n  let perms: number[][] = [[]];\n\n  // Incorporate one input value at a time.\n  for (const x of nums) {\n    // Build a fresh generation of permutations that all include x.\n    const next: number[][] = [];\n    // Inserting x before, between, or after every existing arrangement creates every new ordering.\n    for (const p of perms) for (let i = 0; i <= p.length; i++) next.push([...p.slice(0, i), x, ...p.slice(i)]);\n    // The expanded generation becomes the input for the next value.\n    perms = next;\n  }\n\n  // Return the deterministic comma-joined order required by the judge.\n  return perms.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        },
        time: "O(n·n!)",
        space: "O(n·n!)",
      },
    ],
  },
  {
    id: "ab-combinations",
    slug: "combinations-n-k",
    title: "Combinations",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given integers `n` and `k`, return all combinations of `k` distinct numbers chosen from 1..n. Each combination is in ascending order; return the list sorted by comma-joined form.",
    examples: [
      { input: "4, 2", output: "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]" },
      { input: "3, 3", output: "[[1,2,3]]" },
      { input: "1, 1", output: "[[1]]" },
    ],
    constraints: ["1 <= k <= n <= 8"],
    functionName: "combinations",
    starter: {
      js: "function combinations(n, k) {\n  // All k-combinations of 1..n, sorted.\n}\n",
      ts: "function combinations(n: number, k: number): number[][] {\n  // All k-combinations of 1..n, sorted.\n  return [];\n}\n",
    },
    visible: [
      { args: [4, 2], expected: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]] },
      { args: [3, 3], expected: [[1, 2, 3]] },
      { args: [1, 1], expected: [[1]] },
    ],
    hidden: [
      { args: [4, 1], expected: [[1], [2], [3], [4]] },
      { args: [5, 2], expected: [[1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5]] },
      { args: [3, 2], expected: [[1, 2], [1, 3], [2, 3]] },
      { args: [2, 2], expected: [[1, 2]] },
      { args: [3, 1], expected: [[1], [2], [3]] },
      { args: [4, 2], expected: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]] },
    ],
    hints: [
      "Backtrack, always choosing the next number greater than the last picked.",
      "Passing a start index keeps combinations ascending and avoids duplicates.",
      "Record a copy once the combination reaches length k.",
    ],
    solutions: [
      {
        label: "Backtracking with a start index",
        approach: "Extend the combination only with larger numbers to stay sorted.",
        js: "function combinations(n, k) {\n  const res = [], cur = [];\n  const bt = (start) => {\n    if (cur.length === k) { res.push(cur.slice()); return; }\n    for (let i = start; i <= n; i++) { cur.push(i); bt(i + 1); cur.pop(); }\n  };\n  bt(1);\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        ts: "function combinations(n: number, k: number): number[][] {\n  const res: number[][] = [], cur: number[] = [];\n  const bt = (start: number): void => {\n    if (cur.length === k) { res.push(cur.slice()); return; }\n    for (let i = start; i <= n; i++) { cur.push(i); bt(i + 1); cur.pop(); }\n  };\n  bt(1);\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        commentedCode: {
          js: "function combinations(n, k) {\n  // res collects finished size-k choices; cur holds the increasing prefix being explored.\n  const res = [], cur = [];\n\n  const bt = (start) => {\n    // Reaching k choices completes one combination; copy it before backtracking.\n    if (cur.length === k) { res.push(cur.slice()); return; }\n\n    // Only choose from start onward, so values stay increasing and no set is repeated.\n    for (let i = start; i <= n; i++) {\n      // Choose i.\n      cur.push(i);\n      // Future choices must be larger than i.\n      bt(i + 1);\n      // Undo i before trying its next sibling.\n      cur.pop();\n    }\n  };\n\n  // The first choice may be any value from 1 through n.\n  bt(1);\n  // Enforce the requested deterministic output order.\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
          ts: "function combinations(n: number, k: number): number[][] {\n  // res collects finished size-k choices; cur holds the increasing prefix being explored.\n  const res: number[][] = [], cur: number[] = [];\n\n  const bt = (start: number): void => {\n    // Reaching k choices completes one combination; copy it before backtracking.\n    if (cur.length === k) { res.push(cur.slice()); return; }\n\n    // Only choose from start onward, so values stay increasing and no set is repeated.\n    for (let i = start; i <= n; i++) {\n      // Choose i.\n      cur.push(i);\n      // Future choices must be larger than i.\n      bt(i + 1);\n      // Undo i before trying its next sibling.\n      cur.pop();\n    }\n  };\n\n  // The first choice may be any value from 1 through n.\n  bt(1);\n  // Enforce the requested deterministic output order.\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        },
        time: "O(k·C(n,k))",
        space: "O(k)",
      },
      {
        label: "Bitmask enumeration",
        approach: "Every k-bit subset of an n-bit mask is one combination.",
        js: "function combinations(n, k) {\n  const res = [];\n  for (let mask = 0; mask < (1 << n); mask++) {\n    let bits = 0; for (let i = 0; i < n; i++) bits += (mask >> i) & 1;\n    if (bits !== k) continue;\n    const combo = [];\n    for (let i = 0; i < n; i++) if ((mask >> i) & 1) combo.push(i + 1);\n    res.push(combo);\n  }\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        ts: "function combinations(n: number, k: number): number[][] {\n  const res: number[][] = [];\n  for (let mask = 0; mask < (1 << n); mask++) {\n    let bits = 0; for (let i = 0; i < n; i++) bits += (mask >> i) & 1;\n    if (bits !== k) continue;\n    const combo: number[] = [];\n    for (let i = 0; i < n; i++) if ((mask >> i) & 1) combo.push(i + 1);\n    res.push(combo);\n  }\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        commentedCode: {
          js: "function combinations(n, k) {\n  // Store the subsets whose masks contain exactly k selected values.\n  const res = [];\n\n  // Every n-bit mask represents one subset of 1 through n.\n  for (let mask = 0; mask < (1 << n); mask++) {\n    // Count the selected positions in this mask.\n    let bits = 0; for (let i = 0; i < n; i++) bits += (mask >> i) & 1;\n    // A mask with the wrong number of choices cannot be a k-combination.\n    if (bits !== k) continue;\n\n    // Translate each selected zero-based bit into its one-based value.\n    const combo = [];\n    for (let i = 0; i < n; i++) if ((mask >> i) & 1) combo.push(i + 1);\n    // This mask now contributes one valid combination.\n    res.push(combo);\n  }\n\n  // Sort by the representation specified in the problem.\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
          ts: "function combinations(n: number, k: number): number[][] {\n  // Store the subsets whose masks contain exactly k selected values.\n  const res: number[][] = [];\n\n  // Every n-bit mask represents one subset of 1 through n.\n  for (let mask = 0; mask < (1 << n); mask++) {\n    // Count the selected positions in this mask.\n    let bits = 0; for (let i = 0; i < n; i++) bits += (mask >> i) & 1;\n    // A mask with the wrong number of choices cannot be a k-combination.\n    if (bits !== k) continue;\n\n    // Translate each selected zero-based bit into its one-based value.\n    const combo: number[] = [];\n    for (let i = 0; i < n; i++) if ((mask >> i) & 1) combo.push(i + 1);\n    // This mask now contributes one valid combination.\n    res.push(combo);\n  }\n\n  // Sort by the representation specified in the problem.\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        },
        time: "O(2ⁿ·n)",
        space: "O(C(n,k))",
      },
    ],
  },
  {
    id: "ab-combination-sum",
    slug: "combination-sum",
    title: "Combination Sum",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given distinct positive candidates and a target, return all unique combinations of candidates that sum to the target. Each candidate may be reused unlimited times. Each combination is in ascending order; return the list sorted by comma-joined form.",
    examples: [
      { input: "[2,3,6,7], 7", output: "[[2,2,3],[7]]" },
      { input: "[2,3,5], 8", output: "[[2,2,2,2],[2,3,3],[3,5]]" },
      { input: "[2], 1", output: "[]" },
    ],
    constraints: ["1 <= candidates.length <= 12", "distinct positive candidates"],
    functionName: "combinationSum",
    starter: {
      js: "function combinationSum(candidates, target) {\n  // All unique combinations summing to target (reuse allowed).\n}\n",
      ts: "function combinationSum(candidates: number[], target: number): number[][] {\n  // All unique combinations summing to target (reuse allowed).\n  return [];\n}\n",
    },
    visible: [
      { args: [[2, 3, 6, 7], 7], expected: [[2, 2, 3], [7]] },
      { args: [[2, 3, 5], 8], expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]] },
      { args: [[2], 1], expected: [] },
    ],
    hidden: [
      { args: [[1], 2], expected: [[1, 1]] },
      { args: [[3, 5, 8], 11], expected: [[3, 3, 5], [3, 8]] },
      { args: [[2, 4], 6], expected: [[2, 2, 2], [2, 4]] },
      { args: [[7], 7], expected: [[7]] },
      { args: [[5, 3], 8], expected: [[3, 5]] },
      { args: [[2, 3, 6, 7], 7], expected: [[2, 2, 3], [7]] },
    ],
    hints: [
      "Sort the candidates, then backtrack, allowing the same index to be reused.",
      "Pass the current index so combinations stay non-decreasing (no duplicates).",
      "Prune when a candidate exceeds the remaining target.",
    ],
    solutions: [
      {
        label: "Backtracking with reuse",
        approach: "Reuse the current index; move forward to keep combinations sorted.",
        js: "function combinationSum(candidates, target) {\n  const c = candidates.slice().sort((a, b) => a - b);\n  const res = [], cur = [];\n  const bt = (start, rem) => {\n    if (rem === 0) { res.push(cur.slice()); return; }\n    for (let i = start; i < c.length; i++) {\n      if (c[i] > rem) break;\n      cur.push(c[i]); bt(i, rem - c[i]); cur.pop();\n    }\n  };\n  bt(0, target);\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        ts: "function combinationSum(candidates: number[], target: number): number[][] {\n  const c = candidates.slice().sort((a, b) => a - b);\n  const res: number[][] = [], cur: number[] = [];\n  const bt = (start: number, rem: number): void => {\n    if (rem === 0) { res.push(cur.slice()); return; }\n    for (let i = start; i < c.length; i++) {\n      if (c[i] > rem) break;\n      cur.push(c[i]); bt(i, rem - c[i]); cur.pop();\n    }\n  };\n  bt(0, target);\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        commentedCode: {
          js: "function combinationSum(candidates, target) {\n  // Sort a copy so choices are nondecreasing and oversized values can prune the loop.\n  const c = candidates.slice().sort((a, b) => a - b);\n  // res holds complete sums; cur holds the choices in the current branch.\n  const res = [], cur = [];\n\n  const bt = (start, rem) => {\n    // Consuming the target exactly completes one valid combination.\n    if (rem === 0) { res.push(cur.slice()); return; }\n\n    // Starting here avoids reordered duplicates while still considering every later value.\n    for (let i = start; i < c.length; i++) {\n      // Because c is sorted, this and every later candidate are too large.\n      if (c[i] > rem) break;\n      // Choose c[i], then keep i available because reuse is allowed.\n      cur.push(c[i]); bt(i, rem - c[i]);\n      // Undo the choice before exploring the next candidate.\n      cur.pop();\n    }\n  };\n\n  // Initially every candidate is available and the full target remains.\n  bt(0, target);\n  // Produce the deterministic order required by the problem.\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
          ts: "function combinationSum(candidates: number[], target: number): number[][] {\n  // Sort a copy so choices are nondecreasing and oversized values can prune the loop.\n  const c = candidates.slice().sort((a, b) => a - b);\n  // res holds complete sums; cur holds the choices in the current branch.\n  const res: number[][] = [], cur: number[] = [];\n\n  const bt = (start: number, rem: number): void => {\n    // Consuming the target exactly completes one valid combination.\n    if (rem === 0) { res.push(cur.slice()); return; }\n\n    // Starting here avoids reordered duplicates while still considering every later value.\n    for (let i = start; i < c.length; i++) {\n      // Because c is sorted, this and every later candidate are too large.\n      if (c[i] > rem) break;\n      // Choose c[i], then keep i available because reuse is allowed.\n      cur.push(c[i]); bt(i, rem - c[i]);\n      // Undo the choice before exploring the next candidate.\n      cur.pop();\n    }\n  };\n\n  // Initially every candidate is available and the full target remains.\n  bt(0, target);\n  // Produce the deterministic order required by the problem.\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        },
        time: "exponential in target",
        space: "O(target)",
      },
      {
        label: "Include / exclude recursion",
        approach: "At each candidate, either use it (stay) or skip to the next.",
        js: "function combinationSum(candidates, target) {\n  const c = candidates.slice().sort((a, b) => a - b);\n  const res = [], cur = [];\n  const go = (i, rem) => {\n    if (rem === 0) { res.push(cur.slice()); return; }\n    if (i >= c.length || rem < 0) return;\n    cur.push(c[i]); go(i, rem - c[i]); cur.pop();\n    go(i + 1, rem);\n  };\n  go(0, target);\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        ts: "function combinationSum(candidates: number[], target: number): number[][] {\n  const c = candidates.slice().sort((a, b) => a - b);\n  const res: number[][] = [], cur: number[] = [];\n  const go = (i: number, rem: number): void => {\n    if (rem === 0) { res.push(cur.slice()); return; }\n    if (i >= c.length || rem < 0) return;\n    cur.push(c[i]); go(i, rem - c[i]); cur.pop();\n    go(i + 1, rem);\n  };\n  go(0, target);\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        commentedCode: {
          js: "function combinationSum(candidates, target) {\n  // Sort a copy so each constructed combination is nondecreasing.\n  const c = candidates.slice().sort((a, b) => a - b);\n  // res stores successful branches; cur stores the current included values.\n  const res = [], cur = [];\n\n  const go = (i, rem) => {\n    // An exact sum completes this branch. Save a snapshot of its choices.\n    if (rem === 0) { res.push(cur.slice()); return; }\n    // No candidate remains, or the branch has overshot the target.\n    if (i >= c.length || rem < 0) return;\n\n    // Include c[i]; stay at i so this candidate can be reused.\n    cur.push(c[i]); go(i, rem - c[i]);\n    // Undo the inclusion before exploring the mutually exclusive skip branch.\n    cur.pop();\n    // Exclude c[i] from now on and advance to the next candidate.\n    go(i + 1, rem);\n  };\n\n  // Begin at the first candidate with the entire target remaining.\n  go(0, target);\n  // Normalize output order for deterministic judging.\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
          ts: "function combinationSum(candidates: number[], target: number): number[][] {\n  // Sort a copy so each constructed combination is nondecreasing.\n  const c = candidates.slice().sort((a, b) => a - b);\n  // res stores successful branches; cur stores the current included values.\n  const res: number[][] = [], cur: number[] = [];\n\n  const go = (i: number, rem: number): void => {\n    // An exact sum completes this branch. Save a snapshot of its choices.\n    if (rem === 0) { res.push(cur.slice()); return; }\n    // No candidate remains, or the branch has overshot the target.\n    if (i >= c.length || rem < 0) return;\n\n    // Include c[i]; stay at i so this candidate can be reused.\n    cur.push(c[i]); go(i, rem - c[i]);\n    // Undo the inclusion before exploring the mutually exclusive skip branch.\n    cur.pop();\n    // Exclude c[i] from now on and advance to the next candidate.\n    go(i + 1, rem);\n  };\n\n  // Begin at the first candidate with the entire target remaining.\n  go(0, target);\n  // Normalize output order for deterministic judging.\n  return res.sort((a, b) => (a.join(',') < b.join(',') ? -1 : a.join(',') > b.join(',') ? 1 : 0));\n}\n",
        },
        time: "exponential in target",
        space: "O(target)",
      },
    ],
  },
  {
    id: "ab-subsets-dup",
    slug: "advanced-subsets-with-duplicates",
    title: "Subsets With Duplicates",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an array that may contain duplicates, return all unique subsets (the power set without repeats). Each subset is in ascending order; return the list sorted by comma-joined form (the empty subset sorts first).",
    examples: [
      { input: "[1,2,2]", output: "[[],[1],[1,2],[1,2,2],[2],[2,2]]" },
      { input: "[0]", output: "[[],[0]]" },
      { input: "[1,2]", output: "[[],[1],[1,2],[2]]" },
    ],
    constraints: ["1 <= nums.length <= 10"],
    functionName: "subsetsWithDup",
    starter: {
      js: "function subsetsWithDup(nums) {\n  // All unique subsets, sorted.\n}\n",
      ts: "function subsetsWithDup(nums: number[]): number[][] {\n  // All unique subsets, sorted.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 2]], expected: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] },
      { args: [[0]], expected: [[], [0]] },
      { args: [[1, 2]], expected: [[], [1], [1, 2], [2]] },
    ],
    hidden: [
      { args: [[2, 2, 2]], expected: [[], [2], [2, 2], [2, 2, 2]] },
      { args: [[1, 2, 3]], expected: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]] },
      { args: [[4, 4, 4, 1, 4]], expected: [[], [1], [1, 4], [1, 4, 4], [1, 4, 4, 4], [1, 4, 4, 4, 4], [4], [4, 4], [4, 4, 4], [4, 4, 4, 4]] },
      { args: [[5]], expected: [[], [5]] },
      { args: [[1, 1]], expected: [[], [1], [1, 1]] },
      { args: [[1, 2, 2]], expected: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] },
    ],
    hints: [
      "Sort first so duplicates are adjacent.",
      "At each level, skip a value equal to the previous sibling choice.",
      "Record the current subset at every node, not just the leaves.",
    ],
    solutions: [
      {
        label: "Backtracking with duplicate skip",
        approach: "Sort, then skip repeated values at the same recursion depth.",
        js: "function subsetsWithDup(nums) {\n  const a = nums.slice().sort((x, y) => x - y);\n  const res = [], cur = [];\n  const bt = (start) => {\n    res.push(cur.slice());\n    for (let i = start; i < a.length; i++) {\n      if (i > start && a[i] === a[i - 1]) continue;\n      cur.push(a[i]); bt(i + 1); cur.pop();\n    }\n  };\n  bt(0);\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        ts: "function subsetsWithDup(nums: number[]): number[][] {\n  const a = nums.slice().sort((x, y) => x - y);\n  const res: number[][] = [], cur: number[] = [];\n  const bt = (start: number): void => {\n    res.push(cur.slice());\n    for (let i = start; i < a.length; i++) {\n      if (i > start && a[i] === a[i - 1]) continue;\n      cur.push(a[i]); bt(i + 1); cur.pop();\n    }\n  };\n  bt(0);\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        commentedCode: {
          js: "function subsetsWithDup(nums) {\n  // Sorting groups equal values so duplicate sibling choices are easy to detect.\n  const a = nums.slice().sort((x, y) => x - y);\n  // res stores every subset; cur is the subset represented by the current recursion node.\n  const res = [], cur = [];\n\n  const bt = (start) => {\n    // Every partial selection is itself a valid subset, including the empty one.\n    res.push(cur.slice());\n\n    for (let i = start; i < a.length; i++) {\n      // Equal values at this depth would create identical branches; keep only the first sibling.\n      if (i > start && a[i] === a[i - 1]) continue;\n      // Choose this occurrence, recurse with later indices, then undo the choice.\n      cur.push(a[i]); bt(i + 1); cur.pop();\n    }\n  };\n\n  // Enumerate subsets from the empty choice.\n  bt(0);\n  // Match the problem's comma-joined ordering contract.\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
          ts: "function subsetsWithDup(nums: number[]): number[][] {\n  // Sorting groups equal values so duplicate sibling choices are easy to detect.\n  const a = nums.slice().sort((x, y) => x - y);\n  // res stores every subset; cur is the subset represented by the current recursion node.\n  const res: number[][] = [], cur: number[] = [];\n\n  const bt = (start: number): void => {\n    // Every partial selection is itself a valid subset, including the empty one.\n    res.push(cur.slice());\n\n    for (let i = start; i < a.length; i++) {\n      // Equal values at this depth would create identical branches; keep only the first sibling.\n      if (i > start && a[i] === a[i - 1]) continue;\n      // Choose this occurrence, recurse with later indices, then undo the choice.\n      cur.push(a[i]); bt(i + 1); cur.pop();\n    }\n  };\n\n  // Enumerate subsets from the empty choice.\n  bt(0);\n  // Match the problem's comma-joined ordering contract.\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        },
        time: "O(n·2ⁿ)",
        space: "O(n)",
      },
      {
        label: "Enumerate then dedupe",
        approach: "Build every subset of the sorted array and drop repeats via a set.",
        js: "function subsetsWithDup(nums) {\n  const a = nums.slice().sort((x, y) => x - y);\n  const seen = new Set(), res = [];\n  for (let mask = 0; mask < (1 << a.length); mask++) {\n    const sub = [];\n    for (let i = 0; i < a.length; i++) if ((mask >> i) & 1) sub.push(a[i]);\n    const key = sub.join(',');\n    if (!seen.has(key)) { seen.add(key); res.push(sub); }\n  }\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        ts: "function subsetsWithDup(nums: number[]): number[][] {\n  const a = nums.slice().sort((x, y) => x - y);\n  const seen = new Set<string>(), res: number[][] = [];\n  for (let mask = 0; mask < (1 << a.length); mask++) {\n    const sub: number[] = [];\n    for (let i = 0; i < a.length; i++) if ((mask >> i) & 1) sub.push(a[i]);\n    const key = sub.join(',');\n    if (!seen.has(key)) { seen.add(key); res.push(sub); }\n  }\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        commentedCode: {
          js: "function subsetsWithDup(nums) {\n  // Sort so equal-value subsets receive the same serialized representation.\n  const a = nums.slice().sort((x, y) => x - y);\n  // seen prevents duplicate value combinations; res stores the first instance of each.\n  const seen = new Set(), res = [];\n\n  // Each bitmask independently decides whether to include every array position.\n  for (let mask = 0; mask < (1 << a.length); mask++) {\n    // Decode this mask into one sorted subset.\n    const sub = [];\n    for (let i = 0; i < a.length; i++) if ((mask >> i) & 1) sub.push(a[i]);\n    // Equal input values can let different masks build the same subset, so serialize its values.\n    const key = sub.join(',');\n    // Keep only the first occurrence of each serialized subset.\n    if (!seen.has(key)) { seen.add(key); res.push(sub); }\n  }\n\n  // Return unique subsets in the required deterministic order.\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
          ts: "function subsetsWithDup(nums: number[]): number[][] {\n  // Sort so equal-value subsets receive the same serialized representation.\n  const a = nums.slice().sort((x, y) => x - y);\n  // seen prevents duplicate value combinations; res stores the first instance of each.\n  const seen = new Set<string>(), res: number[][] = [];\n\n  // Each bitmask independently decides whether to include every array position.\n  for (let mask = 0; mask < (1 << a.length); mask++) {\n    // Decode this mask into one sorted subset.\n    const sub: number[] = [];\n    for (let i = 0; i < a.length; i++) if ((mask >> i) & 1) sub.push(a[i]);\n    // Equal input values can let different masks build the same subset, so serialize its values.\n    const key = sub.join(',');\n    // Keep only the first occurrence of each serialized subset.\n    if (!seen.has(key)) { seen.add(key); res.push(sub); }\n  }\n\n  // Return unique subsets in the required deterministic order.\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        },
        time: "O(n·2ⁿ)",
        space: "O(n·2ⁿ)",
      },
    ],
  },
  {
    id: "ab-palindrome-partitions",
    slug: "advanced-palindrome-partition-count",
    title: "Palindrome Partition Count",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return the number of ways to partition the string into contiguous substrings such that every part is a palindrome.",
    examples: [
      { input: '"aab"', output: "2" },
      { input: '"a"', output: "1" },
      { input: '"aba"', output: "2" },
    ],
    constraints: ["1 <= s.length <= 16", "lowercase letters"],
    functionName: "palindromePartitionCount",
    starter: {
      js: "function palindromePartitionCount(s) {\n  // Number of all-palindrome partitions.\n}\n",
      ts: "function palindromePartitionCount(s: string): number {\n  // Number of all-palindrome partitions.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["aab"], expected: 2 },
      { args: ["a"], expected: 1 },
      { args: ["aba"], expected: 2 },
    ],
    hidden: [
      { args: ["abc"], expected: 1 },
      { args: ["aaa"], expected: 4 },
      { args: ["bb"], expected: 2 },
      { args: ["abba"], expected: 3 },
      { args: ["aabb"], expected: 4 },
      { args: ["aab"], expected: 2 },
    ],
    hints: [
      "Backtrack: cut a palindromic prefix, then partition the rest.",
      "Count a full partition every time you reach the end of the string.",
      "Check each candidate prefix for the palindrome property.",
    ],
    solutions: [
      {
        label: "Backtracking over cut points",
        approach: "Recurse on the remainder after each palindromic prefix.",
        js: "function palindromePartitionCount(s) {\n  const isPal = (l, r) => { while (l < r) { if (s[l] !== s[r]) return false; l++; r--; } return true; };\n  let count = 0;\n  const bt = (start) => {\n    if (start === s.length) { count++; return; }\n    for (let end = start; end < s.length; end++) if (isPal(start, end)) bt(end + 1);\n  };\n  bt(0);\n  return count;\n}\n",
        ts: "function palindromePartitionCount(s: string): number {\n  const isPal = (l: number, r: number): boolean => { while (l < r) { if (s[l] !== s[r]) return false; l++; r--; } return true; };\n  let count = 0;\n  const bt = (start: number): void => {\n    if (start === s.length) { count++; return; }\n    for (let end = start; end < s.length; end++) if (isPal(start, end)) bt(end + 1);\n  };\n  bt(0);\n  return count;\n}\n",
        commentedCode: {
          js: "function palindromePartitionCount(s) {\n  // Check whether the candidate substring s[l..r] reads the same from both ends.\n  const isPal = (l, r) => {\n    while (l < r) {\n      // One mismatched mirrored pair invalidates this possible part.\n      if (s[l] !== s[r]) return false;\n      // Move both boundaries inward to check the next pair.\n      l++; r--;\n    }\n    return true;\n  };\n\n  // Count complete ways to cut the string.\n  let count = 0;\n  const bt = (start) => {\n    // Consuming the entire string means every chosen part was a palindrome.\n    if (start === s.length) { count++; return; }\n\n    // Try every possible end for the next part.\n    for (let end = start; end < s.length; end++)\n      // Only a palindromic prefix can extend a valid partition.\n      if (isPal(start, end)) bt(end + 1);\n  };\n\n  // Start the first part at the beginning of the string.\n  bt(0);\n  // Return the number of complete recursion paths.\n  return count;\n}\n",
          ts: "function palindromePartitionCount(s: string): number {\n  // Check whether the candidate substring s[l..r] reads the same from both ends.\n  const isPal = (l: number, r: number): boolean => {\n    while (l < r) {\n      // One mismatched mirrored pair invalidates this possible part.\n      if (s[l] !== s[r]) return false;\n      // Move both boundaries inward to check the next pair.\n      l++; r--;\n    }\n    return true;\n  };\n\n  // Count complete ways to cut the string.\n  let count = 0;\n  const bt = (start: number): void => {\n    // Consuming the entire string means every chosen part was a palindrome.\n    if (start === s.length) { count++; return; }\n\n    // Try every possible end for the next part.\n    for (let end = start; end < s.length; end++)\n      // Only a palindromic prefix can extend a valid partition.\n      if (isPal(start, end)) bt(end + 1);\n  };\n\n  // Start the first part at the beginning of the string.\n  bt(0);\n  // Return the number of complete recursion paths.\n  return count;\n}\n",
        },
        time: "exponential",
        space: "O(n)",
      },
      {
        label: "DP over suffixes",
        approach: "ways[i] = sum of ways[j+1] for every palindromic s[i..j].",
        js: "function palindromePartitionCount(s) {\n  const n = s.length;\n  const isPal = (l, r) => { while (l < r) { if (s[l] !== s[r]) return false; l++; r--; } return true; };\n  const ways = new Array(n + 1).fill(0);\n  ways[n] = 1;\n  for (let i = n - 1; i >= 0; i--)\n    for (let j = i; j < n; j++) if (isPal(i, j)) ways[i] += ways[j + 1];\n  return ways[0];\n}\n",
        ts: "function palindromePartitionCount(s: string): number {\n  const n = s.length;\n  const isPal = (l: number, r: number): boolean => { while (l < r) { if (s[l] !== s[r]) return false; l++; r--; } return true; };\n  const ways = new Array(n + 1).fill(0);\n  ways[n] = 1;\n  for (let i = n - 1; i >= 0; i--)\n    for (let j = i; j < n; j++) if (isPal(i, j)) ways[i] += ways[j + 1];\n  return ways[0];\n}\n",
        commentedCode: {
          js: "function palindromePartitionCount(s) {\n  // Cache the length used by the suffix DP.\n  const n = s.length;\n  // Test a candidate part by comparing mirrored characters.\n  const isPal = (l, r) => {\n    while (l < r) {\n      if (s[l] !== s[r]) return false;\n      l++; r--;\n    }\n    return true;\n  };\n\n  // ways[i] counts valid palindrome partitions of the suffix beginning at i.\n  const ways = new Array(n + 1).fill(0);\n  // The empty suffix has one valid partition: choose no more parts.\n  ways[n] = 1;\n\n  // Fill suffixes right to left so every continuation ways[j + 1] is already known.\n  for (let i = n - 1; i >= 0; i--)\n    // Treat s[i..j] as the next part for every possible endpoint.\n    for (let j = i; j < n; j++)\n      // If that part is valid, append every valid partition of the remaining suffix.\n      if (isPal(i, j)) ways[i] += ways[j + 1];\n\n  // ways[0] partitions the entire original string.\n  return ways[0];\n}\n",
          ts: "function palindromePartitionCount(s: string): number {\n  // Cache the length used by the suffix DP.\n  const n = s.length;\n  // Test a candidate part by comparing mirrored characters.\n  const isPal = (l: number, r: number): boolean => {\n    while (l < r) {\n      if (s[l] !== s[r]) return false;\n      l++; r--;\n    }\n    return true;\n  };\n\n  // ways[i] counts valid palindrome partitions of the suffix beginning at i.\n  const ways = new Array(n + 1).fill(0);\n  // The empty suffix has one valid partition: choose no more parts.\n  ways[n] = 1;\n\n  // Fill suffixes right to left so every continuation ways[j + 1] is already known.\n  for (let i = n - 1; i >= 0; i--)\n    // Treat s[i..j] as the next part for every possible endpoint.\n    for (let j = i; j < n; j++)\n      // If that part is valid, append every valid partition of the remaining suffix.\n      if (isPal(i, j)) ways[i] += ways[j + 1];\n\n  // ways[0] partitions the entire original string.\n  return ways[0];\n}\n",
        },
        time: "O(n³)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ab-n-queens-count",
    slug: "advanced-n-queens-count",
    title: "N-Queens Count",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return the number of distinct ways to place `n` non-attacking queens on an `n` × `n` chessboard (no two share a row, column, or diagonal).",
    examples: [
      { input: "4", output: "2" },
      { input: "1", output: "1" },
      { input: "2", output: "0" },
    ],
    constraints: ["1 <= n <= 9"],
    functionName: "nQueensCount",
    starter: {
      js: "function nQueensCount(n) {\n  // Number of valid n-queens placements.\n}\n",
      ts: "function nQueensCount(n: number): number {\n  // Number of valid n-queens placements.\n  return 0;\n}\n",
    },
    visible: [
      { args: [4], expected: 2 },
      { args: [1], expected: 1 },
      { args: [2], expected: 0 },
    ],
    hidden: [
      { args: [3], expected: 0 },
      { args: [5], expected: 10 },
      { args: [6], expected: 4 },
      { args: [7], expected: 40 },
      { args: [8], expected: 92 },
      { args: [4], expected: 2 },
    ],
    hints: [
      "Place one queen per row, backtracking over columns.",
      "Track used columns and both diagonals (row−col and row+col).",
      "Count a solution whenever all n rows are filled.",
    ],
    solutions: [
      {
        label: "Backtracking with diagonal sets",
        approach: "Try each safe column per row; the two diagonals are row∓col.",
        js: "function nQueensCount(n) {\n  let count = 0;\n  const cols = new Set(), d1 = new Set(), d2 = new Set();\n  const bt = (r) => {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (cols.has(c) || d1.has(r - c) || d2.has(r + c)) continue;\n      cols.add(c); d1.add(r - c); d2.add(r + c);\n      bt(r + 1);\n      cols.delete(c); d1.delete(r - c); d2.delete(r + c);\n    }\n  };\n  bt(0);\n  return count;\n}\n",
        ts: "function nQueensCount(n: number): number {\n  let count = 0;\n  const cols = new Set<number>(), d1 = new Set<number>(), d2 = new Set<number>();\n  const bt = (r: number): void => {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (cols.has(c) || d1.has(r - c) || d2.has(r + c)) continue;\n      cols.add(c); d1.add(r - c); d2.add(r + c);\n      bt(r + 1);\n      cols.delete(c); d1.delete(r - c); d2.delete(r + c);\n    }\n  };\n  bt(0);\n  return count;\n}\n",
        commentedCode: {
          js: "function nQueensCount(n) {\n  // Count full placements; these sets describe lines already attacked by earlier rows.\n  let count = 0;\n  const cols = new Set(), d1 = new Set(), d2 = new Set();\n\n  const bt = (r) => {\n    // One safe queen in every row completes a board.\n    if (r === n) { count++; return; }\n\n    // Try placing this row's queen in every column.\n    for (let c = 0; c < n; c++) {\n      // A queen attacks its column, r-c diagonal, and r+c diagonal.\n      if (cols.has(c) || d1.has(r - c) || d2.has(r + c)) continue;\n      // Choose this safe square by marking all three occupied lines.\n      cols.add(c); d1.add(r - c); d2.add(r + c);\n      // Place the next queen in the following row.\n      bt(r + 1);\n      // Undo this queen so the next column is tested against the prior rows only.\n      cols.delete(c); d1.delete(r - c); d2.delete(r + c);\n    }\n  };\n\n  // Begin with row zero and no attacked lines.\n  bt(0);\n  return count;\n}\n",
          ts: "function nQueensCount(n: number): number {\n  // Count full placements; these sets describe lines already attacked by earlier rows.\n  let count = 0;\n  const cols = new Set<number>(), d1 = new Set<number>(), d2 = new Set<number>();\n\n  const bt = (r: number): void => {\n    // One safe queen in every row completes a board.\n    if (r === n) { count++; return; }\n\n    // Try placing this row's queen in every column.\n    for (let c = 0; c < n; c++) {\n      // A queen attacks its column, r-c diagonal, and r+c diagonal.\n      if (cols.has(c) || d1.has(r - c) || d2.has(r + c)) continue;\n      // Choose this safe square by marking all three occupied lines.\n      cols.add(c); d1.add(r - c); d2.add(r + c);\n      // Place the next queen in the following row.\n      bt(r + 1);\n      // Undo this queen so the next column is tested against the prior rows only.\n      cols.delete(c); d1.delete(r - c); d2.delete(r + c);\n    }\n  };\n\n  // Begin with row zero and no attacked lines.\n  bt(0);\n  return count;\n}\n",
        },
        time: "O(n!)",
        space: "O(n)",
      },
      {
        label: "Bitmask backtracking",
        approach: "Track columns and diagonals as bitmasks; iterate free positions.",
        js: "function nQueensCount(n) {\n  const full = (1 << n) - 1;\n  let count = 0;\n  const bt = (cols, d1, d2) => {\n    if (cols === full) { count++; return; }\n    let free = full & ~(cols | d1 | d2);\n    while (free) {\n      const p = free & (-free);\n      free -= p;\n      bt(cols | p, (d1 | p) << 1, (d2 | p) >> 1);\n    }\n  };\n  bt(0, 0, 0);\n  return count;\n}\n",
        ts: "function nQueensCount(n: number): number {\n  const full = (1 << n) - 1;\n  let count = 0;\n  const bt = (cols: number, d1: number, d2: number): void => {\n    if (cols === full) { count++; return; }\n    let free = full & ~(cols | d1 | d2);\n    while (free) {\n      const p = free & (-free);\n      free -= p;\n      bt(cols | p, (d1 | p) << 1, (d2 | p) >> 1);\n    }\n  };\n  bt(0, 0, 0);\n  return count;\n}\n",
        commentedCode: {
          js: "function nQueensCount(n) {\n  // The low n bits represent all board columns.\n  const full = (1 << n) - 1;\n  let count = 0;\n\n  const bt = (cols, d1, d2) => {\n    // Every column occupied means n queens have been placed safely.\n    if (cols === full) { count++; return; }\n\n    // Keep only columns not attacked by a column or either diagonal in this row.\n    let free = full & ~(cols | d1 | d2);\n    while (free) {\n      // Isolate one available column: the lowest set bit.\n      const p = free & (-free);\n      // Remove that choice from this row's remaining candidates.\n      free -= p;\n      // Place the queen, then shift diagonal attacks into their columns for the next row.\n      bt(cols | p, (d1 | p) << 1, (d2 | p) >> 1);\n    }\n  };\n\n  // Initially no column or diagonal is occupied.\n  bt(0, 0, 0);\n  return count;\n}\n",
          ts: "function nQueensCount(n: number): number {\n  // The low n bits represent all board columns.\n  const full = (1 << n) - 1;\n  let count = 0;\n\n  const bt = (cols: number, d1: number, d2: number): void => {\n    // Every column occupied means n queens have been placed safely.\n    if (cols === full) { count++; return; }\n\n    // Keep only columns not attacked by a column or either diagonal in this row.\n    let free = full & ~(cols | d1 | d2);\n    while (free) {\n      // Isolate one available column: the lowest set bit.\n      const p = free & (-free);\n      // Remove that choice from this row's remaining candidates.\n      free -= p;\n      // Place the queen, then shift diagonal attacks into their columns for the next row.\n      bt(cols | p, (d1 | p) << 1, (d2 | p) >> 1);\n    }\n  };\n\n  // Initially no column or diagonal is occupied.\n  bt(0, 0, 0);\n  return count;\n}\n",
        },
        time: "O(n!)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "ab-permutations-unique",
    slug: "permutations-with-duplicates",
    title: "Unique Permutations",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given an array that may contain duplicates, return all unique permutations, sorted by comma-joined form.",
    examples: [
      { input: "[1,1,2]", output: "[[1,1,2],[1,2,1],[2,1,1]]" },
      { input: "[1,2]", output: "[[1,2],[2,1]]" },
      { input: "[1]", output: "[[1]]" },
    ],
    constraints: ["1 <= nums.length <= 7"],
    functionName: "permutationsUnique",
    starter: {
      js: "function permutationsUnique(nums) {\n  // All distinct permutations, sorted.\n}\n",
      ts: "function permutationsUnique(nums: number[]): number[][] {\n  // All distinct permutations, sorted.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 1, 2]], expected: [[1, 1, 2], [1, 2, 1], [2, 1, 1]] },
      { args: [[1, 2]], expected: [[1, 2], [2, 1]] },
      { args: [[1]], expected: [[1]] },
    ],
    hidden: [
      { args: [[2, 2, 1, 1]], expected: [[1, 1, 2, 2], [1, 2, 1, 2], [1, 2, 2, 1], [2, 1, 1, 2], [2, 1, 2, 1], [2, 2, 1, 1]] },
      { args: [[3, 3, 3]], expected: [[3, 3, 3]] },
      { args: [[1, 2, 3]], expected: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] },
      { args: [[0, 0]], expected: [[0, 0]] },
      { args: [[2, 1, 1]], expected: [[1, 1, 2], [1, 2, 1], [2, 1, 1]] },
      { args: [[1, 1, 2]], expected: [[1, 1, 2], [1, 2, 1], [2, 1, 1]] },
    ],
    hints: [
      "Sort so equal values sit next to each other.",
      "Skip an element equal to its predecessor when the predecessor isn't used at this depth.",
      "That single skip rule prevents duplicate permutations.",
    ],
    solutions: [
      {
        label: "Backtracking with duplicate skip",
        approach: "Sort, then avoid reusing an equal earlier element that is unused now.",
        js: "function permutationsUnique(nums) {\n  const a = nums.slice().sort((x, y) => x - y);\n  const res = [], used = new Array(a.length).fill(false), cur = [];\n  const bt = () => {\n    if (cur.length === a.length) { res.push(cur.slice()); return; }\n    for (let i = 0; i < a.length; i++) {\n      if (used[i]) continue;\n      if (i > 0 && a[i] === a[i - 1] && !used[i - 1]) continue;\n      used[i] = true; cur.push(a[i]);\n      bt();\n      cur.pop(); used[i] = false;\n    }\n  };\n  bt();\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        ts: "function permutationsUnique(nums: number[]): number[][] {\n  const a = nums.slice().sort((x, y) => x - y);\n  const res: number[][] = [], used = new Array(a.length).fill(false), cur: number[] = [];\n  const bt = (): void => {\n    if (cur.length === a.length) { res.push(cur.slice()); return; }\n    for (let i = 0; i < a.length; i++) {\n      if (used[i]) continue;\n      if (i > 0 && a[i] === a[i - 1] && !used[i - 1]) continue;\n      used[i] = true; cur.push(a[i]);\n      bt();\n      cur.pop(); used[i] = false;\n    }\n  };\n  bt();\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        commentedCode: {
          js: "function permutationsUnique(nums) {\n  // Sorting places equal values together so equivalent choices can be skipped.\n  const a = nums.slice().sort((x, y) => x - y);\n  // Track completed permutations, which indices are in this branch, and its current prefix.\n  const res = [], used = new Array(a.length).fill(false), cur = [];\n\n  const bt = () => {\n    // One choice per input position completes a unique permutation.\n    if (cur.length === a.length) { res.push(cur.slice()); return; }\n\n    for (let i = 0; i < a.length; i++) {\n      // An array position cannot appear twice in one permutation.\n      if (used[i]) continue;\n      // Among equal unused siblings, require the earlier occurrence to be chosen first.\n      if (i > 0 && a[i] === a[i - 1] && !used[i - 1]) continue;\n      // Choose this occurrence for the next position.\n      used[i] = true; cur.push(a[i]);\n      // Recursively fill the rest of the permutation.\n      bt();\n      // Undo the choice before trying the next occurrence.\n      cur.pop(); used[i] = false;\n    }\n  };\n\n  bt();\n  // Return the normalized ordering specified by the exercise.\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
          ts: "function permutationsUnique(nums: number[]): number[][] {\n  // Sorting places equal values together so equivalent choices can be skipped.\n  const a = nums.slice().sort((x, y) => x - y);\n  // Track completed permutations, which indices are in this branch, and its current prefix.\n  const res: number[][] = [], used = new Array(a.length).fill(false), cur: number[] = [];\n\n  const bt = (): void => {\n    // One choice per input position completes a unique permutation.\n    if (cur.length === a.length) { res.push(cur.slice()); return; }\n\n    for (let i = 0; i < a.length; i++) {\n      // An array position cannot appear twice in one permutation.\n      if (used[i]) continue;\n      // Among equal unused siblings, require the earlier occurrence to be chosen first.\n      if (i > 0 && a[i] === a[i - 1] && !used[i - 1]) continue;\n      // Choose this occurrence for the next position.\n      used[i] = true; cur.push(a[i]);\n      // Recursively fill the rest of the permutation.\n      bt();\n      // Undo the choice before trying the next occurrence.\n      cur.pop(); used[i] = false;\n    }\n  };\n\n  bt();\n  // Return the normalized ordering specified by the exercise.\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        },
        time: "O(n·n!)",
        space: "O(n)",
      },
      {
        label: "Permute then dedupe",
        approach: "Generate all permutations and keep the distinct ones via a set.",
        js: "function permutationsUnique(nums) {\n  const seen = new Set(), res = [], used = new Array(nums.length).fill(false), cur = [];\n  const bt = () => {\n    if (cur.length === nums.length) { const key = cur.join(','); if (!seen.has(key)) { seen.add(key); res.push(cur.slice()); } return; }\n    for (let i = 0; i < nums.length; i++) if (!used[i]) { used[i] = true; cur.push(nums[i]); bt(); cur.pop(); used[i] = false; }\n  };\n  bt();\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        ts: "function permutationsUnique(nums: number[]): number[][] {\n  const seen = new Set<string>(), res: number[][] = [], used = new Array(nums.length).fill(false), cur: number[] = [];\n  const bt = (): void => {\n    if (cur.length === nums.length) { const key = cur.join(','); if (!seen.has(key)) { seen.add(key); res.push(cur.slice()); } return; }\n    for (let i = 0; i < nums.length; i++) if (!used[i]) { used[i] = true; cur.push(nums[i]); bt(); cur.pop(); used[i] = false; }\n  };\n  bt();\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        commentedCode: {
          js: "function permutationsUnique(nums) {\n  // seen deduplicates completed value sequences; used and cur drive ordinary index permutations.\n  const seen = new Set(), res = [], used = new Array(nums.length).fill(false), cur = [];\n\n  const bt = () => {\n    // A full arrangement may duplicate one produced from interchangeable equal indices.\n    if (cur.length === nums.length) {\n      // Serialize values so equal arrangements share the same key.\n      const key = cur.join(',');\n      // Record only the first occurrence, copying cur before it is changed.\n      if (!seen.has(key)) { seen.add(key); res.push(cur.slice()); }\n      return;\n    }\n\n    // Try every index not yet present in the current arrangement.\n    for (let i = 0; i < nums.length; i++) if (!used[i]) {\n      // Choose this index, explore all suffixes, then undo both mutations.\n      used[i] = true; cur.push(nums[i]); bt(); cur.pop(); used[i] = false;\n    }\n  };\n\n  bt();\n  // Normalize the distinct permutations into the required output order.\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
          ts: "function permutationsUnique(nums: number[]): number[][] {\n  // seen deduplicates completed value sequences; used and cur drive ordinary index permutations.\n  const seen = new Set<string>(), res: number[][] = [], used = new Array(nums.length).fill(false), cur: number[] = [];\n\n  const bt = (): void => {\n    // A full arrangement may duplicate one produced from interchangeable equal indices.\n    if (cur.length === nums.length) {\n      // Serialize values so equal arrangements share the same key.\n      const key = cur.join(',');\n      // Record only the first occurrence, copying cur before it is changed.\n      if (!seen.has(key)) { seen.add(key); res.push(cur.slice()); }\n      return;\n    }\n\n    // Try every index not yet present in the current arrangement.\n    for (let i = 0; i < nums.length; i++) if (!used[i]) {\n      // Choose this index, explore all suffixes, then undo both mutations.\n      used[i] = true; cur.push(nums[i]); bt(); cur.pop(); used[i] = false;\n    }\n  };\n\n  bt();\n  // Normalize the distinct permutations into the required output order.\n  return res.sort((x, y) => (x.join(',') < y.join(',') ? -1 : x.join(',') > y.join(',') ? 1 : 0));\n}\n",
        },
        time: "O(n·n!)",
        space: "O(n·n!)",
      },
    ],
  },
  {
    id: "ab-generate-parentheses",
    slug: "generate-parentheses",
    title: "Generate Parentheses",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given `n` pairs of parentheses, return all combinations of well-formed parentheses, sorted lexicographically.",
    examples: [
      { input: "3", output: '["((()))","(()())","(())()","()(())","()()()"]' },
      { input: "1", output: '["()"]' },
      { input: "2", output: '["(())","()()"]' },
    ],
    constraints: ["0 <= n <= 8"],
    functionName: "generateParentheses",
    starter: {
      js: "function generateParentheses(n) {\n  // All well-formed parenthesis strings, sorted.\n}\n",
      ts: "function generateParentheses(n: number): string[] {\n  // All well-formed parenthesis strings, sorted.\n  return [];\n}\n",
    },
    visible: [
      { args: [3], expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
      { args: [1], expected: ["()"] },
      { args: [2], expected: ["(())", "()()"] },
    ],
    hidden: [
      { args: [0], expected: [""] },
      { args: [4], expected: ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"] },
      { args: [1], expected: ["()"] },
      { args: [2], expected: ["(())", "()()"] },
      { args: [3], expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
      { args: [0], expected: [""] },
    ],
    hints: [
      "Backtrack, adding '(' while opens remain and ')' while it stays balanced.",
      "Stop when the string reaches length 2n.",
      "Adding '(' before ')' at each step yields lexicographic order naturally.",
    ],
    solutions: [
      {
        label: "Balanced backtracking",
        approach: "Add '(' when opens are left; add ')' only while it keeps balance.",
        js: "function generateParentheses(n) {\n  const res = [];\n  const bt = (s, open, close) => {\n    if (s.length === 2 * n) { res.push(s); return; }\n    if (open < n) bt(s + '(', open + 1, close);\n    if (close < open) bt(s + ')', open, close + 1);\n  };\n  bt('', 0, 0);\n  return res.sort();\n}\n",
        ts: "function generateParentheses(n: number): string[] {\n  const res: string[] = [];\n  const bt = (s: string, open: number, close: number): void => {\n    if (s.length === 2 * n) { res.push(s); return; }\n    if (open < n) bt(s + '(', open + 1, close);\n    if (close < open) bt(s + ')', open, close + 1);\n  };\n  bt('', 0, 0);\n  return res.sort();\n}\n",
        commentedCode: {
          js: "function generateParentheses(n) {\n  // Collect each complete balanced string.\n  const res = [];\n\n  const bt = (s, open, close) => {\n    // A valid branch reaching 2n characters uses every pair.\n    if (s.length === 2 * n) { res.push(s); return; }\n    // Add an opening parenthesis while fewer than n have been used.\n    if (open < n) bt(s + '(', open + 1, close);\n    // Add a closing parenthesis only when an unmatched opening one exists.\n    if (close < open) bt(s + ')', open, close + 1);\n  };\n\n  // Begin with an empty string and no parentheses used.\n  bt('', 0, 0);\n  // Return lexicographic order as required.\n  return res.sort();\n}\n",
          ts: "function generateParentheses(n: number): string[] {\n  // Collect each complete balanced string.\n  const res: string[] = [];\n\n  const bt = (s: string, open: number, close: number): void => {\n    // A valid branch reaching 2n characters uses every pair.\n    if (s.length === 2 * n) { res.push(s); return; }\n    // Add an opening parenthesis while fewer than n have been used.\n    if (open < n) bt(s + '(', open + 1, close);\n    // Add a closing parenthesis only when an unmatched opening one exists.\n    if (close < open) bt(s + ')', open, close + 1);\n  };\n\n  // Begin with an empty string and no parentheses used.\n  bt('', 0, 0);\n  // Return lexicographic order as required.\n  return res.sort();\n}\n",
        },
        time: "O(Catalan(n))",
        space: "O(n)",
      },
      {
        label: "Filter all sequences",
        approach: "Enumerate every '(' / ')' string of length 2n and keep the balanced ones.",
        js: "function generateParentheses(n) {\n  const res = [];\n  const total = 2 * n;\n  const valid = (s) => { let bal = 0; for (const c of s) { bal += c === '(' ? 1 : -1; if (bal < 0) return false; } return bal === 0; };\n  for (let mask = 0; mask < (1 << total); mask++) {\n    let s = '';\n    for (let i = 0; i < total; i++) s += ((mask >> i) & 1) ? ')' : '(';\n    if (valid(s)) res.push(s);\n  }\n  if (total === 0) return [''];\n  return res.sort();\n}\n",
        ts: "function generateParentheses(n: number): string[] {\n  const res: string[] = [];\n  const total = 2 * n;\n  const valid = (s: string): boolean => { let bal = 0; for (const c of s) { bal += c === '(' ? 1 : -1; if (bal < 0) return false; } return bal === 0; };\n  for (let mask = 0; mask < (1 << total); mask++) {\n    let s = '';\n    for (let i = 0; i < total; i++) s += ((mask >> i) & 1) ? ')' : '(';\n    if (valid(s)) res.push(s);\n  }\n  if (total === 0) return [''];\n  return res.sort();\n}\n",
        commentedCode: {
          js: "function generateParentheses(n) {\n  // Collect the balanced strings found by exhaustive enumeration.\n  const res = [];\n  // Every candidate contains exactly two characters per pair.\n  const total = 2 * n;\n\n  const valid = (s) => {\n    // Balance is the number of openings not yet matched by closings.\n    let bal = 0;\n    for (const c of s) {\n      bal += c === '(' ? 1 : -1;\n      // A negative prefix closes a pair before it was opened, so it can never be valid.\n      if (bal < 0) return false;\n    }\n    // Every opening parenthesis must also be closed at the end.\n    return bal === 0;\n  };\n\n  // Each bitmask selects '(' or ')' independently at every position.\n  for (let mask = 0; mask < (1 << total); mask++) {\n    let s = '';\n    // Decode zero bits as openings and one bits as closings.\n    for (let i = 0; i < total; i++) s += ((mask >> i) & 1) ? ')' : '(';\n    // Keep only sequences whose every prefix and final balance are valid.\n    if (valid(s)) res.push(s);\n  }\n\n  // The bitmask loop has no iterations when total is zero, but the empty string is valid.\n  if (total === 0) return [''];\n  return res.sort();\n}\n",
          ts: "function generateParentheses(n: number): string[] {\n  // Collect the balanced strings found by exhaustive enumeration.\n  const res: string[] = [];\n  // Every candidate contains exactly two characters per pair.\n  const total = 2 * n;\n\n  const valid = (s: string): boolean => {\n    // Balance is the number of openings not yet matched by closings.\n    let bal = 0;\n    for (const c of s) {\n      bal += c === '(' ? 1 : -1;\n      // A negative prefix closes a pair before it was opened, so it can never be valid.\n      if (bal < 0) return false;\n    }\n    // Every opening parenthesis must also be closed at the end.\n    return bal === 0;\n  };\n\n  // Each bitmask selects '(' or ')' independently at every position.\n  for (let mask = 0; mask < (1 << total); mask++) {\n    let s = '';\n    // Decode zero bits as openings and one bits as closings.\n    for (let i = 0; i < total; i++) s += ((mask >> i) & 1) ? ')' : '(';\n    // Keep only sequences whose every prefix and final balance are valid.\n    if (valid(s)) res.push(s);\n  }\n\n  // The bitmask loop has no iterations when total is zero, but the empty string is valid.\n  if (total === 0) return [''];\n  return res.sort();\n}\n",
        },
        time: "O(2^(2n)·n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "ab-word-search",
    slug: "word-search-grid",
    title: "Word Search",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given a grid of letters and a word, return whether the word can be formed by a path of orthogonally adjacent cells, where each cell is used at most once.",
    examples: [
      { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"', output: "true" },
      { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"', output: "true" },
      { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"', output: "false" },
    ],
    constraints: ["1 <= rows, cols <= 6", "word length <= 15"],
    functionName: "wordSearch",
    starter: {
      js: "function wordSearch(board, word) {\n  // True if word can be traced through adjacent cells.\n}\n",
      ts: "function wordSearch(board: string[][], word: string): boolean {\n  // True if word can be traced through adjacent cells.\n  return false;\n}\n",
    },
    visible: [
      { args: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"], expected: true },
      { args: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"], expected: true },
      { args: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"], expected: false },
    ],
    hidden: [
      { args: [[["A"]], "A"], expected: true },
      { args: [[["A"]], "B"], expected: false },
      { args: [[["A", "B"], ["C", "D"]], "ABDC"], expected: true },
      { args: [[["A", "B"], ["C", "D"]], "ABCD"], expected: false },
      { args: [[["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], "AAB"], expected: true },
      { args: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"], expected: true },
    ],
    hints: [
      "DFS from every cell that matches the first letter.",
      "Mark a cell visited before recursing, then restore it afterward.",
      "Succeed when you've matched the entire word.",
    ],
    solutions: [
      {
        label: "DFS backtracking (mark in place)",
        approach: "Temporarily blank each used cell, exploring four directions.",
        js: "function wordSearch(board, word) {\n  const R = board.length, C = board[0].length;\n  const bt = (r, c, i) => {\n    if (i === word.length) return true;\n    if (r < 0 || r >= R || c < 0 || c >= C || board[r][c] !== word[i]) return false;\n    const tmp = board[r][c]; board[r][c] = '#';\n    const found = bt(r + 1, c, i + 1) || bt(r - 1, c, i + 1) || bt(r, c + 1, i + 1) || bt(r, c - 1, i + 1);\n    board[r][c] = tmp;\n    return found;\n  };\n  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (bt(r, c, 0)) return true;\n  return false;\n}\n",
        ts: "function wordSearch(board: string[][], word: string): boolean {\n  const R = board.length, C = board[0].length;\n  const bt = (r: number, c: number, i: number): boolean => {\n    if (i === word.length) return true;\n    if (r < 0 || r >= R || c < 0 || c >= C || board[r][c] !== word[i]) return false;\n    const tmp = board[r][c]; board[r][c] = '#';\n    const found = bt(r + 1, c, i + 1) || bt(r - 1, c, i + 1) || bt(r, c + 1, i + 1) || bt(r, c - 1, i + 1);\n    board[r][c] = tmp;\n    return found;\n  };\n  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (bt(r, c, 0)) return true;\n  return false;\n}\n",
        commentedCode: {
          js: "function wordSearch(board, word) {\n  // Cache board dimensions for boundary checks.\n  const R = board.length, C = board[0].length;\n\n  const bt = (r, c, i) => {\n    // Matching every word character completes a valid path.\n    if (i === word.length) return true;\n    // Reject positions outside the board or cells that do not match the next character.\n    if (r < 0 || r >= R || c < 0 || c >= C || board[r][c] !== word[i]) return false;\n\n    // Save and mark this matching cell so the current path cannot reuse it.\n    const tmp = board[r][c]; board[r][c] = '#';\n    // Match the next character in any orthogonally adjacent cell; OR stops after the first success.\n    const found = bt(r + 1, c, i + 1) || bt(r - 1, c, i + 1) || bt(r, c + 1, i + 1) || bt(r, c - 1, i + 1);\n    // Undo the visit marker even when a direction succeeds, restoring the caller's board.\n    board[r][c] = tmp;\n    return found;\n  };\n\n  // Every board cell is a possible starting point for word[0].\n  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (bt(r, c, 0)) return true;\n  // No starting cell produced a complete path.\n  return false;\n}\n",
          ts: "function wordSearch(board: string[][], word: string): boolean {\n  // Cache board dimensions for boundary checks.\n  const R = board.length, C = board[0].length;\n\n  const bt = (r: number, c: number, i: number): boolean => {\n    // Matching every word character completes a valid path.\n    if (i === word.length) return true;\n    // Reject positions outside the board or cells that do not match the next character.\n    if (r < 0 || r >= R || c < 0 || c >= C || board[r][c] !== word[i]) return false;\n\n    // Save and mark this matching cell so the current path cannot reuse it.\n    const tmp = board[r][c]; board[r][c] = '#';\n    // Match the next character in any orthogonally adjacent cell; OR stops after the first success.\n    const found = bt(r + 1, c, i + 1) || bt(r - 1, c, i + 1) || bt(r, c + 1, i + 1) || bt(r, c - 1, i + 1);\n    // Undo the visit marker even when a direction succeeds, restoring the caller's board.\n    board[r][c] = tmp;\n    return found;\n  };\n\n  // Every board cell is a possible starting point for word[0].\n  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (bt(r, c, 0)) return true;\n  // No starting cell produced a complete path.\n  return false;\n}\n",
        },
        time: "O(R·C·4^L)",
        space: "O(L)",
      },
      {
        label: "DFS with a visited set",
        approach: "Track used cells in a set instead of mutating the board.",
        js: "function wordSearch(board, word) {\n  const R = board.length, C = board[0].length;\n  const visited = new Set();\n  const bt = (r, c, i) => {\n    if (i === word.length) return true;\n    if (r < 0 || r >= R || c < 0 || c >= C) return false;\n    const key = r * C + c;\n    if (visited.has(key) || board[r][c] !== word[i]) return false;\n    visited.add(key);\n    const found = bt(r + 1, c, i + 1) || bt(r - 1, c, i + 1) || bt(r, c + 1, i + 1) || bt(r, c - 1, i + 1);\n    visited.delete(key);\n    return found;\n  };\n  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (bt(r, c, 0)) return true;\n  return false;\n}\n",
        ts: "function wordSearch(board: string[][], word: string): boolean {\n  const R = board.length, C = board[0].length;\n  const visited = new Set<number>();\n  const bt = (r: number, c: number, i: number): boolean => {\n    if (i === word.length) return true;\n    if (r < 0 || r >= R || c < 0 || c >= C) return false;\n    const key = r * C + c;\n    if (visited.has(key) || board[r][c] !== word[i]) return false;\n    visited.add(key);\n    const found = bt(r + 1, c, i + 1) || bt(r - 1, c, i + 1) || bt(r, c + 1, i + 1) || bt(r, c - 1, i + 1);\n    visited.delete(key);\n    return found;\n  };\n  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (bt(r, c, 0)) return true;\n  return false;\n}\n",
        commentedCode: {
          js: "function wordSearch(board, word) {\n  // Cache dimensions and track cells used by only the current path.\n  const R = board.length, C = board[0].length;\n  const visited = new Set();\n\n  const bt = (r, c, i) => {\n    // Advancing beyond the last character means the path matched the word.\n    if (i === word.length) return true;\n    // A path cannot continue beyond the grid.\n    if (r < 0 || r >= R || c < 0 || c >= C) return false;\n\n    // Flatten coordinates into one collision-free numeric key.\n    const key = r * C + c;\n    // Reject reused cells and cells that do not supply the required character.\n    if (visited.has(key) || board[r][c] !== word[i]) return false;\n    // Choose this matching cell for the current path.\n    visited.add(key);\n    // Seek the next character in the four adjacent positions.\n    const found = bt(r + 1, c, i + 1) || bt(r - 1, c, i + 1) || bt(r, c + 1, i + 1) || bt(r, c - 1, i + 1);\n    // Undo the choice so sibling paths may use this cell.\n    visited.delete(key);\n    return found;\n  };\n\n  // Try every coordinate as the path's first cell.\n  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (bt(r, c, 0)) return true;\n  return false;\n}\n",
          ts: "function wordSearch(board: string[][], word: string): boolean {\n  // Cache dimensions and track cells used by only the current path.\n  const R = board.length, C = board[0].length;\n  const visited = new Set<number>();\n\n  const bt = (r: number, c: number, i: number): boolean => {\n    // Advancing beyond the last character means the path matched the word.\n    if (i === word.length) return true;\n    // A path cannot continue beyond the grid.\n    if (r < 0 || r >= R || c < 0 || c >= C) return false;\n\n    // Flatten coordinates into one collision-free numeric key.\n    const key = r * C + c;\n    // Reject reused cells and cells that do not supply the required character.\n    if (visited.has(key) || board[r][c] !== word[i]) return false;\n    // Choose this matching cell for the current path.\n    visited.add(key);\n    // Seek the next character in the four adjacent positions.\n    const found = bt(r + 1, c, i + 1) || bt(r - 1, c, i + 1) || bt(r, c + 1, i + 1) || bt(r, c - 1, i + 1);\n    // Undo the choice so sibling paths may use this cell.\n    visited.delete(key);\n    return found;\n  };\n\n  // Try every coordinate as the path's first cell.\n  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (bt(r, c, 0)) return true;\n  return false;\n}\n",
        },
        time: "O(R·C·4^L)",
        space: "O(L)",
      },
    ],
  },
  {
    id: "ab-restore-ip-count",
    slug: "restore-ip-addresses-count",
    title: "Restore IP Addresses (Count)",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given a string of digits, return the number of ways to insert three dots so that it forms a valid IPv4 address: four parts, each 0–255, with no leading zeros (except the single digit '0').",
    examples: [
      { input: '"25525511135"', output: "2" },
      { input: '"0000"', output: "1" },
      { input: '"101023"', output: "5" },
    ],
    constraints: ["1 <= s.length <= 12", "digits only"],
    functionName: "restoreIpCount",
    starter: {
      js: "function restoreIpCount(s) {\n  // Number of valid IPv4 restorations.\n}\n",
      ts: "function restoreIpCount(s: string): number {\n  // Number of valid IPv4 restorations.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["25525511135"], expected: 2 },
      { args: ["0000"], expected: 1 },
      { args: ["101023"], expected: 5 },
    ],
    hidden: [
      { args: ["1111"], expected: 1 },
      { args: ["255255255255"], expected: 1 },
      { args: ["1234567890123"], expected: 0 },
      { args: ["12121212"], expected: 19 },
      { args: ["0279245587303"], expected: 0 },
      { args: ["25525511135"], expected: 2 },
    ],
    hints: [
      "Backtrack over four segments, each taking 1–3 digits.",
      "Reject a segment with a leading zero (unless it's exactly '0') or a value over 255.",
      "Count a solution only when four segments consume the whole string.",
    ],
    solutions: [
      {
        label: "Backtracking over segments",
        approach: "Cut 1–3 valid digits per segment; count when four segments end the string.",
        js: "function restoreIpCount(s) {\n  let count = 0;\n  const bt = (start, seg) => {\n    if (seg === 4) { if (start === s.length) count++; return; }\n    for (let len = 1; len <= 3 && start + len <= s.length; len++) {\n      const part = s.slice(start, start + len);\n      if (len > 1 && part[0] === '0') continue;\n      if (Number(part) > 255) continue;\n      bt(start + len, seg + 1);\n    }\n  };\n  bt(0, 0);\n  return count;\n}\n",
        ts: "function restoreIpCount(s: string): number {\n  let count = 0;\n  const bt = (start: number, seg: number): void => {\n    if (seg === 4) { if (start === s.length) count++; return; }\n    for (let len = 1; len <= 3 && start + len <= s.length; len++) {\n      const part = s.slice(start, start + len);\n      if (len > 1 && part[0] === '0') continue;\n      if (Number(part) > 255) continue;\n      bt(start + len, seg + 1);\n    }\n  };\n  bt(0, 0);\n  return count;\n}\n",
        commentedCode: {
          js: "function restoreIpCount(s) {\n  // Count valid ways to split the digit string into four address segments.\n  let count = 0;\n\n  const bt = (start, seg) => {\n    // After four segments, succeed only if they consumed every digit exactly.\n    if (seg === 4) { if (start === s.length) count++; return; }\n\n    // An IPv4 segment contains one, two, or three available digits.\n    for (let len = 1; len <= 3 && start + len <= s.length; len++) {\n      const part = s.slice(start, start + len);\n      // Multi-digit segments cannot begin with zero.\n      if (len > 1 && part[0] === '0') continue;\n      // Each segment must fit in the numeric IPv4 range.\n      if (Number(part) > 255) continue;\n      // Accept this segment and choose the next one immediately after it.\n      bt(start + len, seg + 1);\n    }\n  };\n\n  // Start before the first digit with zero segments chosen.\n  bt(0, 0);\n  return count;\n}\n",
          ts: "function restoreIpCount(s: string): number {\n  // Count valid ways to split the digit string into four address segments.\n  let count = 0;\n\n  const bt = (start: number, seg: number): void => {\n    // After four segments, succeed only if they consumed every digit exactly.\n    if (seg === 4) { if (start === s.length) count++; return; }\n\n    // An IPv4 segment contains one, two, or three available digits.\n    for (let len = 1; len <= 3 && start + len <= s.length; len++) {\n      const part = s.slice(start, start + len);\n      // Multi-digit segments cannot begin with zero.\n      if (len > 1 && part[0] === '0') continue;\n      // Each segment must fit in the numeric IPv4 range.\n      if (Number(part) > 255) continue;\n      // Accept this segment and choose the next one immediately after it.\n      bt(start + len, seg + 1);\n    }\n  };\n\n  // Start before the first digit with zero segments chosen.\n  bt(0, 0);\n  return count;\n}\n",
        },
        time: "O(1) (bounded by 3⁴)",
        space: "O(1)",
      },
      {
        label: "Four nested cut points",
        approach: "Try every trio of split positions and validate the four parts.",
        js: "function restoreIpCount(s) {\n  const n = s.length;\n  const valid = (p) => (p.length === 1 || p[0] !== '0') && Number(p) <= 255;\n  let count = 0;\n  for (let a = 1; a <= 3 && a < n; a++)\n    for (let b = a + 1; b <= a + 3 && b < n; b++)\n      for (let c = b + 1; c <= b + 3 && c < n; c++) {\n        if (n - c > 3) continue;\n        const p1 = s.slice(0, a), p2 = s.slice(a, b), p3 = s.slice(b, c), p4 = s.slice(c);\n        if (valid(p1) && valid(p2) && valid(p3) && valid(p4)) count++;\n      }\n  return count;\n}\n",
        ts: "function restoreIpCount(s: string): number {\n  const n = s.length;\n  const valid = (p: string): boolean => (p.length === 1 || p[0] !== '0') && Number(p) <= 255;\n  let count = 0;\n  for (let a = 1; a <= 3 && a < n; a++)\n    for (let b = a + 1; b <= a + 3 && b < n; b++)\n      for (let c = b + 1; c <= b + 3 && c < n; c++) {\n        if (n - c > 3) continue;\n        const p1 = s.slice(0, a), p2 = s.slice(a, b), p3 = s.slice(b, c), p4 = s.slice(c);\n        if (valid(p1) && valid(p2) && valid(p3) && valid(p4)) count++;\n      }\n  return count;\n}\n",
        commentedCode: {
          js: "function restoreIpCount(s) {\n  // Cache the total length used to bound all three cut points.\n  const n = s.length;\n  // A segment is valid when it has no forbidden leading zero and its value is at most 255.\n  const valid = (p) => (p.length === 1 || p[0] !== '0') && Number(p) <= 255;\n  let count = 0;\n\n  // a ends part one after one to three digits.\n  for (let a = 1; a <= 3 && a < n; a++)\n    // b ends part two after another one to three digits.\n    for (let b = a + 1; b <= a + 3 && b < n; b++)\n      // c ends part three; the nonempty suffix becomes part four.\n      for (let c = b + 1; c <= b + 3 && c < n; c++) {\n        // The final segment cannot contain more than three digits.\n        if (n - c > 3) continue;\n        // Materialize the four segments selected by these cut points.\n        const p1 = s.slice(0, a), p2 = s.slice(a, b), p3 = s.slice(b, c), p4 = s.slice(c);\n        // Count this placement of dots only when every segment is independently valid.\n        if (valid(p1) && valid(p2) && valid(p3) && valid(p4)) count++;\n      }\n\n  return count;\n}\n",
          ts: "function restoreIpCount(s: string): number {\n  // Cache the total length used to bound all three cut points.\n  const n = s.length;\n  // A segment is valid when it has no forbidden leading zero and its value is at most 255.\n  const valid = (p: string): boolean => (p.length === 1 || p[0] !== '0') && Number(p) <= 255;\n  let count = 0;\n\n  // a ends part one after one to three digits.\n  for (let a = 1; a <= 3 && a < n; a++)\n    // b ends part two after another one to three digits.\n    for (let b = a + 1; b <= a + 3 && b < n; b++)\n      // c ends part three; the nonempty suffix becomes part four.\n      for (let c = b + 1; c <= b + 3 && c < n; c++) {\n        // The final segment cannot contain more than three digits.\n        if (n - c > 3) continue;\n        // Materialize the four segments selected by these cut points.\n        const p1 = s.slice(0, a), p2 = s.slice(a, b), p3 = s.slice(b, c), p4 = s.slice(c);\n        // Count this placement of dots only when every segment is independently valid.\n        if (valid(p1) && valid(p2) && valid(p3) && valid(p4)) count++;\n      }\n\n  return count;\n}\n",
        },
        time: "O(1) (bounded)",
        space: "O(1)",
      },
    ],
  },
];

export const backtrackProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const backtrackMcqs: QuizQuestion[] = [
  {
    id: "s6-bt-undo",
    kind: "mcq",
    prompt: "The defining move of backtracking is:",
    options: [
      "sorting the input first",
      "make a choice, recurse, then undo the choice before trying the next",
      "using a hash map",
      "iterating with two pointers",
    ],
    answerIndex: 1,
    explanation:
      "Backtracking explores a choice, recurses, and then restores state so the next sibling choice starts clean.",
  },
  {
    id: "s6-bt-dedupe",
    kind: "mcq",
    prompt: "To avoid duplicate results when the input has repeated values, you typically:",
    options: [
      "sort, then skip a value equal to its previous sibling at the same depth",
      "randomize the order",
      "use a larger recursion depth",
      "never sort the input",
    ],
    answerIndex: 0,
    explanation:
      "Sorting groups equal values, and skipping equal siblings at the same level prevents generating the same branch twice.",
  },
];

export const backtrackModule: Module = {
  id: "m-pat-adv-backtrack",
  stageId: S,
  title: "Advanced Backtracking",
  kind: "patternModule",
  summary:
    "Systematic search over choices — permutations, combinations, subsets, partitions, and constraint puzzles like N-Queens and word search.",
  lessonSections: [
    {
      heading: "Choose, recurse, undo",
      body: `**Backtracking** builds candidates incrementally and abandons a partial candidate ("backtracks") as soon as it can't lead to a valid solution. The skeleton is always the same three-step move — make a choice, recurse, undo the choice:

\`\`\`js
function backtrack(state) {
  if (isComplete(state)) { record(state); return; }
  for (const choice of choicesFrom(state)) {
    if (!allowed(choice)) continue;
    apply(choice);          // choose
    backtrack(state);       // explore
    undo(choice);           // un-choose
  }
}
\`\`\`

Permutations, combinations, and subsets are all this loop with different "choices" and "complete" conditions. The undo step is what lets one recursion tree explore every branch cleanly.`,
    },
    {
      heading: "Pruning and deduping",
      body: `The difference between a slow and a fast backtracker is **pruning** — cutting branches early:

- **Ordering** — pass a start index (combinations, combination sum) so you never revisit earlier choices, which also avoids permuted duplicates.
- **Bounding** — stop when the running sum exceeds the target, or a board position is attacked (N-Queens tracks columns and both diagonals).
- **Deduping with repeats** — sort the input, then **skip a value equal to its previous sibling** at the same depth (subsets/permutations with duplicates).
- **Constraint checks** — validate each IP segment or grid step before recursing, so dead ends die immediately.`,
    },
    {
      heading: "Recognition cues & pitfalls",
      body: `**Cues:** "return all …," "count the number of ways," "generate every valid …," or a puzzle with placement constraints (queens, sudoku, word paths). If the answer is an enumeration or a count over combinatorial choices, it's backtracking.

**Pitfalls:** forgetting to **undo** state (mutating a shared array/board and not restoring it — word search blanks a cell then must put it back); pushing a **reference** instead of a copy (\`res.push(cur)\` vs \`res.push(cur.slice())\`); missing a base case so recursion runs off the end; and getting the dedupe condition wrong (\`i > start\` for subsets vs the \`!used[i-1]\` rule for permutations). These problems return results in a **deterministic order** (sorted) so they're reproducible. Every drill ships two approaches — a backtracking solution and an alternative — so you can cross-check. Work them easy to hard. This is the last pattern in Stage 6.`,
    },
  ],
  guidedExampleProblemId: "ab-permutations",
  drillProblemIds: [
    "ab-permutations",
    "ab-combinations",
    "ab-combination-sum",
    "ab-subsets-dup",
    "ab-palindrome-partitions",
    "ab-n-queens-count",
  ],
  testPoolProblemIds: [
    "ab-permutations-unique",
    "ab-generate-parentheses",
    "ab-word-search",
    "ab-restore-ip-count",
  ],
  complexityQuestionIds: ["s6-bt-undo", "s6-bt-dedupe"],
  badgeId: "badge-pat-adv-backtrack",
  prerequisiteModuleIds: ["m-pat-bit"],
};
