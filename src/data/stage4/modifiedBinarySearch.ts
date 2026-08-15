import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s4";
const P = ["modified-binary-search"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "mbs-ceiling",
    slug: "ceiling-value",
    title: "Ceiling Value",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Given a sorted list, return the smallest value that is greater than or equal to `target`, or -1 if none exists.",
    examples: [
      { input: "[1,3,5,7], 4", output: "5" },
      { input: "[1,3,5], 1", output: "1" },
      { input: "[1,3,5], 6", output: "-1" },
    ],
    constraints: ["input is sorted ascending", "0 <= length <= 10000"],
    functionName: "ceilingValue",
    starter: {
      js: "function ceilingValue(sorted, target) {\n  // Smallest value >= target, or -1.\n}\n",
      ts: "function ceilingValue(sorted: number[], target: number): number {\n  // Smallest value >= target, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 3, 5, 7], 4], expected: 5 },
      { args: [[1, 3, 5], 1], expected: 1 },
      { args: [[1, 3, 5], 6], expected: -1 },
    ],
    hidden: [
      { args: [[], 1], expected: -1 },
      { args: [[2], 1], expected: 2 },
      { args: [[2], 3], expected: -1 },
      { args: [[1, 2, 3], 3], expected: 3 },
      { args: [[10, 20, 30], 15], expected: 20 },
      { args: [[1, 1, 2], 1], expected: 1 },
    ],
    hints: [
      "You want the leftmost value that is not smaller than the target.",
      "When mid qualifies, record it and keep searching to the left for something smaller.",
      "if (sorted[mid] >= target) { res = sorted[mid]; hi = mid - 1; } else lo = mid + 1.",
    ],
    solutions: [
      {
        label: "Binary search, keep going left",
        approach: "Record qualifying candidates while shrinking toward the smallest.",
        js: "function ceilingValue(sorted, target) {\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] >= target) { res = sorted[mid]; hi = mid - 1; }\n    else lo = mid + 1;\n  }\n  return res;\n}\n",
        ts: "function ceilingValue(sorted: number[], target: number): number {\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] >= target) { res = sorted[mid]; hi = mid - 1; }\n    else lo = mid + 1;\n  }\n  return res;\n}\n",
        commentedCode: {
          js: "function ceilingValue(sorted, target) {\n  // Search the whole sorted range; -1 means no ceiling has been found yet.\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] >= target) {\n      // This value qualifies, so remember it and look left for a smaller one.\n      res = sorted[mid];\n      hi = mid - 1;\n    } else {\n      // Values through mid are too small to be the ceiling.\n      lo = mid + 1;\n    }\n  }\n  // The last recorded candidate is the smallest value at least target.\n  return res;\n}\n",
          ts: "function ceilingValue(sorted: number[], target: number): number {\n  // Search the whole sorted range; -1 means no ceiling has been found yet.\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] >= target) {\n      // This value qualifies, so remember it and look left for a smaller one.\n      res = sorted[mid];\n      hi = mid - 1;\n    } else {\n      // Values through mid are too small to be the ceiling.\n      lo = mid + 1;\n    }\n  }\n  // The last recorded candidate is the smallest value at least target.\n  return res;\n}\n",
        },
        time: "O(log n)",
        space: "O(1)",
      },
      {
        label: "Linear scan",
        approach: "Return the first value that reaches the target.",
        js: "function ceilingValue(sorted, target) {\n  for (const v of sorted) if (v >= target) return v;\n  return -1;\n}\n",
        ts: "function ceilingValue(sorted: number[], target: number): number {\n  for (const v of sorted) if (v >= target) return v;\n  return -1;\n}\n",
        commentedCode: {
          js: "function ceilingValue(sorted, target) {\n  // In sorted order, the first qualifying value is necessarily the smallest.\n  for (const v of sorted) {\n    if (v >= target) return v;\n  }\n  // Every value was smaller than target.\n  return -1;\n}\n",
          ts: "function ceilingValue(sorted: number[], target: number): number {\n  // In sorted order, the first qualifying value is necessarily the smallest.\n  for (const v of sorted) {\n    if (v >= target) return v;\n  }\n  // Every value was smaller than target.\n  return -1;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mbs-floor",
    slug: "floor-value",
    title: "Floor Value",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Given a sorted list, return the largest value that is less than or equal to `target`, or -1 if none exists.",
    examples: [
      { input: "[1,3,5,7], 4", output: "3" },
      { input: "[1,3,5], 1", output: "1" },
      { input: "[1,3,5], 0", output: "-1" },
    ],
    constraints: ["input is sorted ascending", "0 <= length <= 10000"],
    functionName: "floorValue",
    starter: {
      js: "function floorValue(sorted, target) {\n  // Largest value <= target, or -1.\n}\n",
      ts: "function floorValue(sorted: number[], target: number): number {\n  // Largest value <= target, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 3, 5, 7], 4], expected: 3 },
      { args: [[1, 3, 5], 1], expected: 1 },
      { args: [[1, 3, 5], 0], expected: -1 },
    ],
    hidden: [
      { args: [[], 1], expected: -1 },
      { args: [[2], 3], expected: 2 },
      { args: [[2], 1], expected: -1 },
      { args: [[1, 2, 3], 3], expected: 3 },
      { args: [[10, 20, 30], 25], expected: 20 },
      { args: [[1, 1, 2], 1], expected: 1 },
    ],
    hints: [
      "You want the rightmost value that doesn't exceed the target.",
      "When mid qualifies, record it and search to the right for something larger.",
      "if (sorted[mid] <= target) { res = sorted[mid]; lo = mid + 1; } else hi = mid - 1.",
    ],
    solutions: [
      {
        label: "Binary search, keep going right",
        approach: "Record qualifying candidates while pushing toward the largest.",
        js: "function floorValue(sorted, target) {\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] <= target) { res = sorted[mid]; lo = mid + 1; }\n    else hi = mid - 1;\n  }\n  return res;\n}\n",
        ts: "function floorValue(sorted: number[], target: number): number {\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] <= target) { res = sorted[mid]; lo = mid + 1; }\n    else hi = mid - 1;\n  }\n  return res;\n}\n",
        commentedCode: {
          js: "function floorValue(sorted, target) {\n  // Search the whole sorted range; -1 means no floor has been found yet.\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] <= target) {\n      // This value qualifies, so remember it and look right for a larger one.\n      res = sorted[mid];\n      lo = mid + 1;\n    } else {\n      // Values from mid onward are too large to be the floor.\n      hi = mid - 1;\n    }\n  }\n  // The last recorded candidate is the largest value at most target.\n  return res;\n}\n",
          ts: "function floorValue(sorted: number[], target: number): number {\n  // Search the whole sorted range; -1 means no floor has been found yet.\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] <= target) {\n      // This value qualifies, so remember it and look right for a larger one.\n      res = sorted[mid];\n      lo = mid + 1;\n    } else {\n      // Values from mid onward are too large to be the floor.\n      hi = mid - 1;\n    }\n  }\n  // The last recorded candidate is the largest value at most target.\n  return res;\n}\n",
        },
        time: "O(log n)",
        space: "O(1)",
      },
      {
        label: "Scan from the right",
        approach: "Walk backward for the first value at or below the target.",
        js: "function floorValue(sorted, target) {\n  for (let i = sorted.length - 1; i >= 0; i--) if (sorted[i] <= target) return sorted[i];\n  return -1;\n}\n",
        ts: "function floorValue(sorted: number[], target: number): number {\n  for (let i = sorted.length - 1; i >= 0; i--) if (sorted[i] <= target) return sorted[i];\n  return -1;\n}\n",
        commentedCode: {
          js: "function floorValue(sorted, target) {\n  // Scan from the largest value down, so the first qualifying value is the floor.\n  for (let i = sorted.length - 1; i >= 0; i--) {\n    if (sorted[i] <= target) return sorted[i];\n  }\n  // Every value was greater than target.\n  return -1;\n}\n",
          ts: "function floorValue(sorted: number[], target: number): number {\n  // Scan from the largest value down, so the first qualifying value is the floor.\n  for (let i = sorted.length - 1; i >= 0; i--) {\n    if (sorted[i] <= target) return sorted[i];\n  }\n  // Every value was greater than target.\n  return -1;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mbs-first-last",
    slug: "first-and-last-position",
    title: "First and Last Position",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a sorted list that may contain duplicates, return `[firstIndex, lastIndex]` of `target`, or `[-1,-1]` if absent.",
    examples: [
      { input: "[5,7,7,8,8,10], 8", output: "[3,4]" },
      { input: "[5,7,7,8,8,10], 6", output: "[-1,-1]" },
      { input: "[], 0", output: "[-1,-1]" },
    ],
    constraints: ["input is sorted ascending", "0 <= length <= 10000"],
    functionName: "firstLast",
    starter: {
      js: "function firstLast(sorted, target) {\n  // [first, last] indices of target, or [-1,-1].\n}\n",
      ts: "function firstLast(sorted: number[], target: number): number[] {\n  // [first, last] indices of target, or [-1,-1].\n  return [-1, -1];\n}\n",
    },
    visible: [
      { args: [[5, 7, 7, 8, 8, 10], 8], expected: [3, 4] },
      { args: [[5, 7, 7, 8, 8, 10], 6], expected: [-1, -1] },
      { args: [[], 0], expected: [-1, -1] },
    ],
    hidden: [
      { args: [[1], 1], expected: [0, 0] },
      { args: [[1], 2], expected: [-1, -1] },
      { args: [[2, 2], 2], expected: [0, 1] },
      { args: [[1, 2, 3], 2], expected: [1, 1] },
      { args: [[1, 1, 1], 1], expected: [0, 2] },
      { args: [[1, 2, 2, 3], 2], expected: [1, 2] },
    ],
    hints: [
      "Run two binary searches: one biased left, one biased right.",
      "On a match, don't stop — record the index and continue toward that side.",
      "first: hi = mid - 1 after a match. last: lo = mid + 1 after a match.",
    ],
    solutions: [
      {
        label: "Two biased binary searches",
        approach: "Search for the leftmost and rightmost occurrences separately.",
        js: "function firstLast(sorted, target) {\n  const find = (first) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) { res = mid; if (first) hi = mid - 1; else lo = mid + 1; }\n      else if (sorted[mid] < target) lo = mid + 1;\n      else hi = mid - 1;\n    }\n    return res;\n  };\n  return [find(true), find(false)];\n}\n",
        ts: "function firstLast(sorted: number[], target: number): number[] {\n  const find = (first: boolean) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) { res = mid; if (first) hi = mid - 1; else lo = mid + 1; }\n      else if (sorted[mid] < target) lo = mid + 1;\n      else hi = mid - 1;\n    }\n    return res;\n  };\n  return [find(true), find(false)];\n}\n",
        commentedCode: {
          js: "function firstLast(sorted, target) {\n  // Run the same boundary search toward either the first or last match.\n  const find = (first) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) {\n        // Save this match, then keep searching toward the requested boundary.\n        res = mid;\n        if (first) hi = mid - 1;\n        else lo = mid + 1;\n      } else if (sorted[mid] < target) {\n        // The target can only appear to the right of a smaller value.\n        lo = mid + 1;\n      } else {\n        // The target can only appear to the left of a larger value.\n        hi = mid - 1;\n      }\n    }\n    return res;\n  };\n  // Search left once and right once to produce both boundaries.\n  return [find(true), find(false)];\n}\n",
          ts: "function firstLast(sorted: number[], target: number): number[] {\n  // Run the same boundary search toward either the first or last match.\n  const find = (first: boolean) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) {\n        // Save this match, then keep searching toward the requested boundary.\n        res = mid;\n        if (first) hi = mid - 1;\n        else lo = mid + 1;\n      } else if (sorted[mid] < target) {\n        // The target can only appear to the right of a smaller value.\n        lo = mid + 1;\n      } else {\n        // The target can only appear to the left of a larger value.\n        hi = mid - 1;\n      }\n    }\n    return res;\n  };\n  // Search left once and right once to produce both boundaries.\n  return [find(true), find(false)];\n}\n",
        },
        time: "O(log n)",
        space: "O(1)",
      },
      {
        label: "indexOf / lastIndexOf",
        approach: "Built-in scans give the same answer in linear time.",
        js: "function firstLast(sorted, target) {\n  return [sorted.indexOf(target), sorted.lastIndexOf(target)];\n}\n",
        ts: "function firstLast(sorted: number[], target: number): number[] {\n  return [sorted.indexOf(target), sorted.lastIndexOf(target)];\n}\n",
        commentedCode: {
          js: "function firstLast(sorted, target) {\n  // The built-ins scan from opposite ends; both return -1 when target is absent.\n  return [sorted.indexOf(target), sorted.lastIndexOf(target)];\n}\n",
          ts: "function firstLast(sorted: number[], target: number): number[] {\n  // The built-ins scan from opposite ends; both return -1 when target is absent.\n  return [sorted.indexOf(target), sorted.lastIndexOf(target)];\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mbs-rotated-search",
    slug: "search-rotated-array",
    title: "Search a Rotated Array",
    difficulty: "medium",
    patternIds: P,
    statement:
      "A sorted list of distinct values has been rotated at some pivot. Return the index of `target`, or -1 if absent.",
    examples: [
      { input: "[4,5,6,7,0,1,2], 0", output: "4" },
      { input: "[4,5,6,7,0,1,2], 3", output: "-1" },
      { input: "[1], 0", output: "-1" },
    ],
    constraints: ["values are distinct", "0 <= length <= 10000"],
    functionName: "searchRotated",
    starter: {
      js: "function searchRotated(nums, target) {\n  // Index of target in a rotated sorted array, or -1.\n}\n",
      ts: "function searchRotated(nums: number[], target: number): number {\n  // Index of target in a rotated sorted array, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
      { args: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
      { args: [[1], 0], expected: -1 },
    ],
    hidden: [
      { args: [[], 1], expected: -1 },
      { args: [[1], 1], expected: 0 },
      { args: [[3, 1], 1], expected: 1 },
      { args: [[5, 1, 3], 3], expected: 2 },
      { args: [[4, 5, 6, 7, 0, 1, 2], 4], expected: 0 },
      { args: [[6, 7, 0, 1, 2, 4, 5], 2], expected: 4 },
    ],
    hints: [
      "At every step one half of the range is still properly sorted.",
      "Decide which half is sorted by comparing nums[lo] with nums[mid].",
      "If the target lies inside the sorted half, search there; otherwise search the other half.",
    ],
    solutions: [
      {
        label: "Binary search on the sorted half",
        approach: "Identify the ordered side each step and narrow into it.",
        js: "function searchRotated(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] === target) return mid;\n    if (nums[lo] <= nums[mid]) {\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1; else lo = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1; else hi = mid - 1;\n    }\n  }\n  return -1;\n}\n",
        ts: "function searchRotated(nums: number[], target: number): number {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] === target) return mid;\n    if (nums[lo] <= nums[mid]) {\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1; else lo = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1; else hi = mid - 1;\n    }\n  }\n  return -1;\n}\n",
        commentedCode: {
          js: "function searchRotated(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] === target) return mid;\n\n    if (nums[lo] <= nums[mid]) {\n      // The left half is sorted; keep it only when it contains target.\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;\n      else lo = mid + 1;\n    } else {\n      // Otherwise the right half is sorted; keep it only when it contains target.\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;\n      else hi = mid - 1;\n    }\n  }\n  // The search range closed without finding target.\n  return -1;\n}\n",
          ts: "function searchRotated(nums: number[], target: number): number {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] === target) return mid;\n\n    if (nums[lo] <= nums[mid]) {\n      // The left half is sorted; keep it only when it contains target.\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;\n      else lo = mid + 1;\n    } else {\n      // Otherwise the right half is sorted; keep it only when it contains target.\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;\n      else hi = mid - 1;\n    }\n  }\n  // The search range closed without finding target.\n  return -1;\n}\n",
        },
        time: "O(log n)",
        space: "O(1)",
      },
      {
        label: "Linear scan",
        approach: "Simply look for the value — an O(n) baseline.",
        js: "function searchRotated(nums, target) {\n  return nums.indexOf(target);\n}\n",
        ts: "function searchRotated(nums: number[], target: number): number {\n  return nums.indexOf(target);\n}\n",
        commentedCode: {
          js: "function searchRotated(nums, target) {\n  // A direct scan ignores the rotation and returns -1 when target is absent.\n  return nums.indexOf(target);\n}\n",
          ts: "function searchRotated(nums: number[], target: number): number {\n  // A direct scan ignores the rotation and returns -1 when target is absent.\n  return nums.indexOf(target);\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mbs-find-min-rotated",
    slug: "find-min-rotated",
    title: "Minimum in a Rotated Array",
    difficulty: "medium",
    patternIds: P,
    statement:
      "A sorted list of distinct values has been rotated at some pivot. Return its minimum value.",
    examples: [
      { input: "[3,4,5,1,2]", output: "1" },
      { input: "[4,5,6,7,0,1,2]", output: "0" },
      { input: "[11,13,15,17]", output: "11" },
    ],
    constraints: ["values are distinct", "1 <= length <= 10000"],
    functionName: "findMinRotated",
    starter: {
      js: "function findMinRotated(nums) {\n  // Minimum of a rotated sorted array.\n}\n",
      ts: "function findMinRotated(nums: number[]): number {\n  // Minimum of a rotated sorted array.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[3, 4, 5, 1, 2]], expected: 1 },
      { args: [[4, 5, 6, 7, 0, 1, 2]], expected: 0 },
      { args: [[11, 13, 15, 17]], expected: 11 },
    ],
    hidden: [
      { args: [[1]], expected: 1 },
      { args: [[2, 1]], expected: 1 },
      { args: [[3, 1, 2]], expected: 1 },
      { args: [[5, 6, 7, 1, 2, 3, 4]], expected: 1 },
      { args: [[2, 3, 4, 5, 1]], expected: 1 },
      { args: [[10, 20, 30]], expected: 10 },
    ],
    hints: [
      "Compare the middle value against the right end to see which side holds the rotation.",
      "If nums[mid] > nums[hi], the minimum is strictly to the right of mid.",
      "Otherwise the minimum is at mid or to its left — set hi = mid (don't skip it).",
    ],
    solutions: [
      {
        label: "Binary search on the pivot",
        approach: "Narrow toward the rotation point by comparing mid to the right end.",
        js: "function findMinRotated(nums) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] > nums[hi]) lo = mid + 1; else hi = mid;\n  }\n  return nums[lo];\n}\n",
        ts: "function findMinRotated(nums: number[]): number {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] > nums[hi]) lo = mid + 1; else hi = mid;\n  }\n  return nums[lo];\n}\n",
        commentedCode: {
          js: "function findMinRotated(nums) {\n  // Keep the rotation point inside this inclusive range.\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] > nums[hi]) {\n      // Mid is in the larger left segment, so the minimum is strictly right.\n      lo = mid + 1;\n    } else {\n      // Mid may be the minimum, so retain it while discarding the right side.\n      hi = mid;\n    }\n  }\n  // The pointers meet exactly at the rotation point.\n  return nums[lo];\n}\n",
          ts: "function findMinRotated(nums: number[]): number {\n  // Keep the rotation point inside this inclusive range.\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] > nums[hi]) {\n      // Mid is in the larger left segment, so the minimum is strictly right.\n      lo = mid + 1;\n    } else {\n      // Mid may be the minimum, so retain it while discarding the right side.\n      hi = mid;\n    }\n  }\n  // The pointers meet exactly at the rotation point.\n  return nums[lo];\n}\n",
        },
        time: "O(log n)",
        space: "O(1)",
      },
      {
        label: "Scan for the minimum",
        approach: "A straightforward linear minimum.",
        js: "function findMinRotated(nums) {\n  return Math.min(...nums);\n}\n",
        ts: "function findMinRotated(nums: number[]): number {\n  return Math.min(...nums);\n}\n",
        commentedCode: {
          js: "function findMinRotated(nums) {\n  // Compare every value directly; rotation does not affect the global minimum.\n  return Math.min(...nums);\n}\n",
          ts: "function findMinRotated(nums: number[]): number {\n  // Compare every value directly; rotation does not affect the global minimum.\n  return Math.min(...nums);\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mbs-min-eating-speed",
    slug: "min-eating-speed",
    title: "Minimum Eating Speed",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given piles of bananas and `h` hours, return the smallest integer speed `k` (bananas per hour) such that eating `ceil(pile / k)` hours per pile finishes every pile within `h` hours.",
    examples: [
      { input: "[3,6,7,11], 8", output: "4" },
      { input: "[30,11,23,4,20], 5", output: "30" },
      { input: "[30,11,23,4,20], 6", output: "23" },
    ],
    constraints: ["1 <= piles.length <= h", "piles[i] >= 1"],
    functionName: "minEatingSpeed",
    starter: {
      js: "function minEatingSpeed(piles, h) {\n  // Smallest speed that finishes within h hours.\n}\n",
      ts: "function minEatingSpeed(piles: number[], h: number): number {\n  // Smallest speed that finishes within h hours.\n  return 1;\n}\n",
    },
    visible: [
      { args: [[3, 6, 7, 11], 8], expected: 4 },
      { args: [[30, 11, 23, 4, 20], 5], expected: 30 },
      { args: [[30, 11, 23, 4, 20], 6], expected: 23 },
    ],
    hidden: [
      { args: [[1], 1], expected: 1 },
      { args: [[1, 1, 1], 3], expected: 1 },
      { args: [[4], 2], expected: 2 },
      { args: [[10, 10], 2], expected: 10 },
      { args: [[3, 6, 7, 11], 4], expected: 11 },
      { args: [[5, 5, 5], 3], expected: 5 },
    ],
    hints: [
      "You're not searching the array — you're searching the *answer* (the speed).",
      "'Can I finish at speed k?' is monotonic: if k works, every larger speed works too.",
      "Binary search k between 1 and max(piles), keeping the smallest speed that works.",
    ],
    solutions: [
      {
        label: "Binary search on the answer",
        approach: "Search the speed range, testing feasibility at each midpoint.",
        js: "function minEatingSpeed(piles, h) {\n  let lo = 1, hi = Math.max(...piles);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / mid);\n    if (hours <= h) hi = mid; else lo = mid + 1;\n  }\n  return lo;\n}\n",
        ts: "function minEatingSpeed(piles: number[], h: number): number {\n  let lo = 1, hi = Math.max(...piles);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / mid);\n    if (hours <= h) hi = mid; else lo = mid + 1;\n  }\n  return lo;\n}\n",
        commentedCode: {
          js: "function minEatingSpeed(piles, h) {\n  // Speeds below 1 are invalid; the largest pile is always fast enough.\n  let lo = 1, hi = Math.max(...piles);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    // Each pile consumes a whole number of hours at this candidate speed.\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / mid);\n    if (hours <= h) {\n      // Mid works, but a smaller speed may also work.\n      hi = mid;\n    } else {\n      // Mid is too slow, and every lower speed is also impossible.\n      lo = mid + 1;\n    }\n  }\n  // The first feasible speed remains when the bounds meet.\n  return lo;\n}\n",
          ts: "function minEatingSpeed(piles: number[], h: number): number {\n  // Speeds below 1 are invalid; the largest pile is always fast enough.\n  let lo = 1, hi = Math.max(...piles);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    // Each pile consumes a whole number of hours at this candidate speed.\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / mid);\n    if (hours <= h) {\n      // Mid works, but a smaller speed may also work.\n      hi = mid;\n    } else {\n      // Mid is too slow, and every lower speed is also impossible.\n      lo = mid + 1;\n    }\n  }\n  // The first feasible speed remains when the bounds meet.\n  return lo;\n}\n",
        },
        time: "O(n log maxPile)",
        space: "O(1)",
      },
      {
        label: "Try every speed",
        approach: "Increase the speed until the piles fit in the hours.",
        js: "function minEatingSpeed(piles, h) {\n  const max = Math.max(...piles);\n  for (let k = 1; k <= max; k++) {\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / k);\n    if (hours <= h) return k;\n  }\n  return max;\n}\n",
        ts: "function minEatingSpeed(piles: number[], h: number): number {\n  const max = Math.max(...piles);\n  for (let k = 1; k <= max; k++) {\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / k);\n    if (hours <= h) return k;\n  }\n  return max;\n}\n",
        commentedCode: {
          js: "function minEatingSpeed(piles, h) {\n  // Eating a largest pile in one hour gives a guaranteed upper bound.\n  const max = Math.max(...piles);\n  // Try speeds in increasing order so the first feasible one is minimal.\n  for (let k = 1; k <= max; k++) {\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / k);\n    if (hours <= h) return k;\n  }\n  // The upper bound is always feasible under the stated constraints.\n  return max;\n}\n",
          ts: "function minEatingSpeed(piles: number[], h: number): number {\n  // Eating a largest pile in one hour gives a guaranteed upper bound.\n  const max = Math.max(...piles);\n  // Try speeds in increasing order so the first feasible one is minimal.\n  for (let k = 1; k <= max; k++) {\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / k);\n    if (hours <= h) return k;\n  }\n  // The upper bound is always feasible under the stated constraints.\n  return max;\n}\n",
        },
        time: "O(n · maxPile)",
        space: "O(1)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "mbs-find-peak",
    slug: "find-peak-index",
    title: "Find the Peak",
    difficulty: "medium",
    patternIds: P,
    statement:
      "The list rises and then falls (it may only rise, or only fall). Return the index of the peak — the value greater than its neighbours.",
    examples: [
      { input: "[1,3,5,4,2]", output: "2" },
      { input: "[1,2,3]", output: "2" },
      { input: "[3,2,1]", output: "0" },
    ],
    constraints: ["1 <= nums.length <= 10000", "the peak is unique"],
    functionName: "findPeak",
    starter: {
      js: "function findPeak(nums) {\n  // Index of the peak value.\n}\n",
      ts: "function findPeak(nums: number[]): number {\n  // Index of the peak value.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 3, 5, 4, 2]], expected: 2 },
      { args: [[1, 2, 3]], expected: 2 },
      { args: [[3, 2, 1]], expected: 0 },
    ],
    hidden: [
      { args: [[1]], expected: 0 },
      { args: [[1, 2]], expected: 1 },
      { args: [[2, 1]], expected: 0 },
      { args: [[1, 5, 9, 7, 3]], expected: 2 },
      { args: [[1, 2, 3, 4, 5]], expected: 4 },
      { args: [[5, 4, 3, 2, 1]], expected: 0 },
    ],
    hints: [
      "Compare the middle value with its right neighbour to learn which way is 'uphill'.",
      "If nums[mid] < nums[mid+1] the peak is to the right; otherwise it's at mid or left.",
      "while (lo < hi) { mid = (lo+hi)>>1; if (nums[mid] < nums[mid+1]) lo = mid+1; else hi = mid; }",
    ],
    solutions: [
      {
        label: "Binary search uphill",
        approach: "Always move toward the rising side; the pointers meet at the peak.",
        js: "function findPeak(nums) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] < nums[mid + 1]) lo = mid + 1; else hi = mid;\n  }\n  return lo;\n}\n",
        ts: "function findPeak(nums: number[]): number {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] < nums[mid + 1]) lo = mid + 1; else hi = mid;\n  }\n  return lo;\n}\n",
        commentedCode: {
          js: "function findPeak(nums) {\n  // The unique peak always stays inside this inclusive range.\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] < nums[mid + 1]) {\n      // An upward slope means the peak is strictly to the right.\n      lo = mid + 1;\n    } else {\n      // A downward slope means mid could be the peak, so keep it.\n      hi = mid;\n    }\n  }\n  // The bounds meet at the top of the rising-then-falling sequence.\n  return lo;\n}\n",
          ts: "function findPeak(nums: number[]): number {\n  // The unique peak always stays inside this inclusive range.\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] < nums[mid + 1]) {\n      // An upward slope means the peak is strictly to the right.\n      lo = mid + 1;\n    } else {\n      // A downward slope means mid could be the peak, so keep it.\n      hi = mid;\n    }\n  }\n  // The bounds meet at the top of the rising-then-falling sequence.\n  return lo;\n}\n",
        },
        time: "O(log n)",
        space: "O(1)",
      },
      {
        label: "Scan for the maximum",
        approach: "The peak is simply the largest value's index.",
        js: "function findPeak(nums) {\n  let best = 0;\n  for (let i = 1; i < nums.length; i++) if (nums[i] > nums[best]) best = i;\n  return best;\n}\n",
        ts: "function findPeak(nums: number[]): number {\n  let best = 0;\n  for (let i = 1; i < nums.length; i++) if (nums[i] > nums[best]) best = i;\n  return best;\n}\n",
        commentedCode: {
          js: "function findPeak(nums) {\n  // Treat the first value as the largest seen so far.\n  let best = 0;\n  // Replace its index whenever a higher value appears.\n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] > nums[best]) best = i;\n  }\n  // In a mountain-shaped array, the global maximum is the peak.\n  return best;\n}\n",
          ts: "function findPeak(nums: number[]): number {\n  // Treat the first value as the largest seen so far.\n  let best = 0;\n  // Replace its index whenever a higher value appears.\n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] > nums[best]) best = i;\n  }\n  // In a mountain-shaped array, the global maximum is the peak.\n  return best;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mbs-count-occurrences",
    slug: "count-occurrences",
    title: "Count Occurrences",
    difficulty: "medium",
    patternIds: P,
    statement: "Given a sorted list, return how many times `target` appears.",
    examples: [
      { input: "[1,2,2,2,3], 2", output: "3" },
      { input: "[1,2,3], 4", output: "0" },
      { input: "[], 1", output: "0" },
    ],
    constraints: ["input is sorted ascending", "0 <= length <= 10000"],
    functionName: "countOccurrences",
    starter: {
      js: "function countOccurrences(sorted, target) {\n  // How many times target appears.\n}\n",
      ts: "function countOccurrences(sorted: number[], target: number): number {\n  // How many times target appears.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 2, 2, 3], 2], expected: 3 },
      { args: [[1, 2, 3], 4], expected: 0 },
      { args: [[], 1], expected: 0 },
    ],
    hidden: [
      { args: [[1], 1], expected: 1 },
      { args: [[2, 2], 2], expected: 2 },
      { args: [[1, 1, 1], 1], expected: 3 },
      { args: [[1, 2, 3], 2], expected: 1 },
      { args: [[5, 5, 6, 6, 6], 6], expected: 3 },
      { args: [[1, 2, 3], 1], expected: 1 },
    ],
    hints: [
      "Occurrences of a value in sorted data form one contiguous block.",
      "Find the first and last index, then the count is last - first + 1.",
      "Return 0 when the value is absent.",
    ],
    solutions: [
      {
        label: "First and last index",
        approach: "Two biased binary searches bound the block of equal values.",
        js: "function countOccurrences(sorted, target) {\n  const find = (first) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) { res = mid; if (first) hi = mid - 1; else lo = mid + 1; }\n      else if (sorted[mid] < target) lo = mid + 1;\n      else hi = mid - 1;\n    }\n    return res;\n  };\n  const first = find(true);\n  if (first === -1) return 0;\n  return find(false) - first + 1;\n}\n",
        ts: "function countOccurrences(sorted: number[], target: number): number {\n  const find = (first: boolean) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) { res = mid; if (first) hi = mid - 1; else lo = mid + 1; }\n      else if (sorted[mid] < target) lo = mid + 1;\n      else hi = mid - 1;\n    }\n    return res;\n  };\n  const first = find(true);\n  if (first === -1) return 0;\n  return find(false) - first + 1;\n}\n",
        commentedCode: {
          js: "function countOccurrences(sorted, target) {\n  // Find either edge of target's contiguous block.\n  const find = (first) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) {\n        // Record the match, then continue toward the requested edge.\n        res = mid;\n        if (first) hi = mid - 1;\n        else lo = mid + 1;\n      } else if (sorted[mid] < target) {\n        lo = mid + 1;\n      } else {\n        hi = mid - 1;\n      }\n    }\n    return res;\n  };\n\n  const first = find(true);\n  // No left boundary means target never appears.\n  if (first === -1) return 0;\n  // Inclusive block size is last index minus first index plus one.\n  return find(false) - first + 1;\n}\n",
          ts: "function countOccurrences(sorted: number[], target: number): number {\n  // Find either edge of target's contiguous block.\n  const find = (first: boolean) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) {\n        // Record the match, then continue toward the requested edge.\n        res = mid;\n        if (first) hi = mid - 1;\n        else lo = mid + 1;\n      } else if (sorted[mid] < target) {\n        lo = mid + 1;\n      } else {\n        hi = mid - 1;\n      }\n    }\n    return res;\n  };\n\n  const first = find(true);\n  // No left boundary means target never appears.\n  if (first === -1) return 0;\n  // Inclusive block size is last index minus first index plus one.\n  return find(false) - first + 1;\n}\n",
        },
        time: "O(log n)",
        space: "O(1)",
      },
      {
        label: "Filter and count",
        approach: "Count matching values directly.",
        js: "function countOccurrences(sorted, target) {\n  return sorted.filter((v) => v === target).length;\n}\n",
        ts: "function countOccurrences(sorted: number[], target: number): number {\n  return sorted.filter((v) => v === target).length;\n}\n",
        commentedCode: {
          js: "function countOccurrences(sorted, target) {\n  // Keep exactly the matching values, then use the filtered length as the count.\n  return sorted.filter((v) => v === target).length;\n}\n",
          ts: "function countOccurrences(sorted: number[], target: number): number {\n  // Keep exactly the matching values, then use the filtered length as the count.\n  return sorted.filter((v) => v === target).length;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mbs-search-matrix",
    slug: "search-sorted-matrix",
    title: "Search a Sorted Matrix",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Each row of the matrix is sorted ascending, and the first value of a row is greater than the last value of the previous row. Return `true` if `target` is present.",
    examples: [
      { input: "[[1,3,5],[7,9,11]], 9", output: "true" },
      { input: "[[1,3,5],[7,9,11]], 4", output: "false" },
      { input: "[], 1", output: "false" },
    ],
    constraints: ["the matrix reads as one sorted sequence row by row"],
    functionName: "searchMatrix",
    starter: {
      js: "function searchMatrix(matrix, target) {\n  // True if target is in the matrix.\n}\n",
      ts: "function searchMatrix(matrix: number[][], target: number): boolean {\n  // True if target is in the matrix.\n  return false;\n}\n",
    },
    visible: [
      { args: [[[1, 3, 5], [7, 9, 11]], 9], expected: true },
      { args: [[[1, 3, 5], [7, 9, 11]], 4], expected: false },
      { args: [[], 1], expected: false },
    ],
    hidden: [
      { args: [[[1]], 1], expected: true },
      { args: [[[1]], 2], expected: false },
      { args: [[[1, 2], [3, 4]], 3], expected: true },
      { args: [[[1, 2], [3, 4]], 5], expected: false },
      { args: [[[1, 3]], 3], expected: true },
      { args: [[[]], 1], expected: false },
    ],
    hints: [
      "Because rows chain together, the matrix behaves like a single sorted array.",
      "Binary search indices 0..rows*cols-1 and convert with division and modulo.",
      "row = Math.floor(mid / cols), col = mid % cols.",
    ],
    solutions: [
      {
        label: "Treat it as one flat array",
        approach: "Binary search the virtual flattened sequence.",
        js: "function searchMatrix(matrix, target) {\n  if (matrix.length === 0 || matrix[0].length === 0) return false;\n  const rows = matrix.length, cols = matrix[0].length;\n  let lo = 0, hi = rows * cols - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    const v = matrix[Math.floor(mid / cols)][mid % cols];\n    if (v === target) return true;\n    if (v < target) lo = mid + 1; else hi = mid - 1;\n  }\n  return false;\n}\n",
        ts: "function searchMatrix(matrix: number[][], target: number): boolean {\n  if (matrix.length === 0 || matrix[0].length === 0) return false;\n  const rows = matrix.length, cols = matrix[0].length;\n  let lo = 0, hi = rows * cols - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    const v = matrix[Math.floor(mid / cols)][mid % cols];\n    if (v === target) return true;\n    if (v < target) lo = mid + 1; else hi = mid - 1;\n  }\n  return false;\n}\n",
        commentedCode: {
          js: "function searchMatrix(matrix, target) {\n  // There is no searchable value when either matrix dimension is empty.\n  if (matrix.length === 0 || matrix[0].length === 0) return false;\n  const rows = matrix.length, cols = matrix[0].length;\n  // Binary-search virtual indices across the row-by-row sorted sequence.\n  let lo = 0, hi = rows * cols - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    // Convert a flat index back into its matrix row and column.\n    const v = matrix[Math.floor(mid / cols)][mid % cols];\n    if (v === target) return true;\n    if (v < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return false;\n}\n",
          ts: "function searchMatrix(matrix: number[][], target: number): boolean {\n  // There is no searchable value when either matrix dimension is empty.\n  if (matrix.length === 0 || matrix[0].length === 0) return false;\n  const rows = matrix.length, cols = matrix[0].length;\n  // Binary-search virtual indices across the row-by-row sorted sequence.\n  let lo = 0, hi = rows * cols - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    // Convert a flat index back into its matrix row and column.\n    const v = matrix[Math.floor(mid / cols)][mid % cols];\n    if (v === target) return true;\n    if (v < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return false;\n}\n",
        },
        time: "O(log (r·c))",
        space: "O(1)",
      },
      {
        label: "Flatten and scan",
        approach: "Concatenate the rows and look for the value.",
        js: "function searchMatrix(matrix, target) {\n  return matrix.some((row) => row.includes(target));\n}\n",
        ts: "function searchMatrix(matrix: number[][], target: number): boolean {\n  return matrix.some((row) => row.includes(target));\n}\n",
        commentedCode: {
          js: "function searchMatrix(matrix, target) {\n  // Check each row until one contains target; some short-circuits on success.\n  return matrix.some((row) => row.includes(target));\n}\n",
          ts: "function searchMatrix(matrix: number[][], target: number): boolean {\n  // Check each row until one contains target; some short-circuits on success.\n  return matrix.some((row) => row.includes(target));\n}\n",
        },
        time: "O(r·c)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "mbs-ship-capacity",
    slug: "ship-within-days",
    title: "Ship Within Days",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Packages must be shipped in order within `days` days. Return the least ship capacity that makes this possible — each day you load packages in order without exceeding the capacity.",
    examples: [
      { input: "[1,2,3,4,5,6,7,8,9,10], 5", output: "15" },
      { input: "[3,2,2,4,1,4], 3", output: "6" },
      { input: "[1,2,3,1,1], 4", output: "3" },
    ],
    constraints: ["1 <= days <= weights.length", "weights[i] >= 1"],
    functionName: "shipWithinDays",
    starter: {
      js: "function shipWithinDays(weights, days) {\n  // Least capacity to ship in order within `days`.\n}\n",
      ts: "function shipWithinDays(weights: number[], days: number): number {\n  // Least capacity to ship in order within `days`.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5], expected: 15 },
      { args: [[3, 2, 2, 4, 1, 4], 3], expected: 6 },
      { args: [[1, 2, 3, 1, 1], 4], expected: 3 },
    ],
    hidden: [
      { args: [[1], 1], expected: 1 },
      { args: [[1, 1], 2], expected: 1 },
      { args: [[1, 1], 1], expected: 2 },
      { args: [[5], 1], expected: 5 },
      { args: [[2, 3, 4], 3], expected: 4 },
      { args: [[10, 10, 10], 2], expected: 20 },
    ],
    hints: [
      "Search the capacity, not the array: 'can I finish in `days` at capacity C?' is monotonic.",
      "The capacity is at least max(weights) and at most their total.",
      "Simulate loading greedily to count the days a capacity needs.",
    ],
    solutions: [
      {
        label: "Binary search on capacity",
        approach: "Test each candidate capacity with a greedy day count.",
        js: "function shipWithinDays(weights, days) {\n  let lo = Math.max(...weights);\n  let hi = weights.reduce((a, b) => a + b, 0);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > mid) { need++; cur = 0; }\n      cur += w;\n    }\n    if (need <= days) hi = mid; else lo = mid + 1;\n  }\n  return lo;\n}\n",
        ts: "function shipWithinDays(weights: number[], days: number): number {\n  let lo = Math.max(...weights);\n  let hi = weights.reduce((a, b) => a + b, 0);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > mid) { need++; cur = 0; }\n      cur += w;\n    }\n    if (need <= days) hi = mid; else lo = mid + 1;\n  }\n  return lo;\n}\n",
        commentedCode: {
          js: "function shipWithinDays(weights, days) {\n  // A ship must hold the heaviest package; one trip can hold the total weight.\n  let lo = Math.max(...weights);\n  let hi = weights.reduce((a, b) => a + b, 0);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    // Greedily fill each day in order to find how many days this capacity needs.\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > mid) {\n        need++;\n        cur = 0;\n      }\n      cur += w;\n    }\n    if (need <= days) {\n      // This capacity works, so keep it while looking for a smaller one.\n      hi = mid;\n    } else {\n      // This capacity is too small, as are all smaller candidates.\n      lo = mid + 1;\n    }\n  }\n  // The bounds meet at the least feasible ship capacity.\n  return lo;\n}\n",
          ts: "function shipWithinDays(weights: number[], days: number): number {\n  // A ship must hold the heaviest package; one trip can hold the total weight.\n  let lo = Math.max(...weights);\n  let hi = weights.reduce((a, b) => a + b, 0);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    // Greedily fill each day in order to find how many days this capacity needs.\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > mid) {\n        need++;\n        cur = 0;\n      }\n      cur += w;\n    }\n    if (need <= days) {\n      // This capacity works, so keep it while looking for a smaller one.\n      hi = mid;\n    } else {\n      // This capacity is too small, as are all smaller candidates.\n      lo = mid + 1;\n    }\n  }\n  // The bounds meet at the least feasible ship capacity.\n  return lo;\n}\n",
        },
        time: "O(n log totalWeight)",
        space: "O(1)",
      },
      {
        label: "Try every capacity",
        approach: "Increase the capacity until the schedule fits.",
        js: "function shipWithinDays(weights, days) {\n  const total = weights.reduce((a, b) => a + b, 0);\n  for (let cap = Math.max(...weights); cap <= total; cap++) {\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > cap) { need++; cur = 0; }\n      cur += w;\n    }\n    if (need <= days) return cap;\n  }\n  return total;\n}\n",
        ts: "function shipWithinDays(weights: number[], days: number): number {\n  const total = weights.reduce((a, b) => a + b, 0);\n  for (let cap = Math.max(...weights); cap <= total; cap++) {\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > cap) { need++; cur = 0; }\n      cur += w;\n    }\n    if (need <= days) return cap;\n  }\n  return total;\n}\n",
        commentedCode: {
          js: "function shipWithinDays(weights, days) {\n  // The total weight is the largest capacity worth trying.\n  const total = weights.reduce((a, b) => a + b, 0);\n  // Start where one package always fits and test capacities in increasing order.\n  for (let cap = Math.max(...weights); cap <= total; cap++) {\n    let need = 1, cur = 0;\n    // Preserve package order while greedily packing each day.\n    for (const w of weights) {\n      if (cur + w > cap) {\n        need++;\n        cur = 0;\n      }\n      cur += w;\n    }\n    // The first feasible capacity is the smallest one.\n    if (need <= days) return cap;\n  }\n  // Sending everything in one day is the guaranteed fallback.\n  return total;\n}\n",
          ts: "function shipWithinDays(weights: number[], days: number): number {\n  // The total weight is the largest capacity worth trying.\n  const total = weights.reduce((a, b) => a + b, 0);\n  // Start where one package always fits and test capacities in increasing order.\n  for (let cap = Math.max(...weights); cap <= total; cap++) {\n    let need = 1, cur = 0;\n    // Preserve package order while greedily packing each day.\n    for (const w of weights) {\n      if (cur + w > cap) {\n        need++;\n        cur = 0;\n      }\n      cur += w;\n    }\n    // The first feasible capacity is the smallest one.\n    if (need <= days) return cap;\n  }\n  // Sending everything in one day is the guaranteed fallback.\n  return total;\n}\n",
        },
        time: "O(n · totalWeight)",
        space: "O(1)",
      },
    ],
  },
];

export const modifiedBinarySearchProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const modifiedBinarySearchMcqs: QuizQuestion[] = [
  {
    id: "s4-mbs-rotated",
    kind: "mcq",
    prompt: "Searching a rotated sorted array with a modified binary search takes:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answerIndex: 1,
    explanation: "One half is always sorted, so you can still discard half the range each step.",
  },
  {
    id: "s4-mbs-answer",
    kind: "mcq",
    prompt: "To binary search on the *answer* (e.g. the smallest workable capacity), the feasibility check must be:",
    options: [
      "monotonic — once true, true for all larger values",
      "random",
      "alphabetically sorted",
      "constant for every input",
    ],
    answerIndex: 0,
    explanation: "Monotonicity is what lets you discard half the candidate answers each step.",
  },
];

export const modifiedBinarySearchModule: Module = {
  id: "m-pat-modified-binary-search",
  stageId: S,
  title: "Modified Binary Search",
  kind: "patternModule",
  summary: "Binary search beyond exact matches — boundaries, rotations, peaks, and searching the answer itself.",
  lessonSections: [
    {
      heading: "Beyond 'is it here?'",
      body: `Plain binary search finds an exact match. The *modified* versions find a **boundary**: the first element ≥ a target, the last ≤ it, the first/last occurrence among duplicates. The trick is that on a match you don't stop — you record it and keep shrinking toward the side you want.

\`\`\`js
// Smallest value >= target (ceiling)
function ceiling(a, target) {
  let lo = 0, hi = a.length - 1, res = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (a[mid] >= target) { res = a[mid]; hi = mid - 1; } // keep looking left
    else lo = mid + 1;
  }
  return res;
}
console.log(ceiling([1, 3, 5, 7], 4)); // 5
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for a modified binary search when you see:

- **sorted** input and a question about a **boundary** ("first/last", "insert position", "floor/ceiling"),
- a **rotated** sorted array (one half is always still sorted),
- a **peak** or any array where a comparison tells you which way to go,
- "**minimum/maximum value that works**" — binary search the *answer* when feasibility is **monotonic** (eating speed, ship capacity, minimum time).`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Boundary search: keep the candidate, keep shrinking
let lo = 0, hi = n - 1, res = -1;
while (lo <= hi) {
  const mid = (lo + hi) >> 1;
  if (ok(mid)) { res = mid; hi = mid - 1; } // leftmost; use lo = mid + 1 for rightmost
  else lo = mid + 1;
}

// Binary search on the answer
let lo = minAnswer, hi = maxAnswer;
while (lo < hi) {
  const mid = (lo + hi) >> 1;
  if (feasible(mid)) hi = mid; else lo = mid + 1;
}
return lo;
\`\`\`

**Pitfalls:** mixing the two loop styles (\`lo <= hi\` with \`hi = mid - 1\` vs \`lo < hi\` with \`hi = mid\`) causes infinite loops or off-by-ones; in the \`lo < hi\` form you must use \`hi = mid\` (never \`mid - 1\`) or you can skip the answer; for rotated arrays, compare against a **fixed end** (\`nums[hi]\`) rather than mid's neighbour. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "mbs-ceiling",
  drillProblemIds: [
    "mbs-ceiling",
    "mbs-floor",
    "mbs-first-last",
    "mbs-rotated-search",
    "mbs-find-min-rotated",
    "mbs-min-eating-speed",
  ],
  testPoolProblemIds: [
    "mbs-find-peak",
    "mbs-count-occurrences",
    "mbs-search-matrix",
    "mbs-ship-capacity",
  ],
  complexityQuestionIds: ["s4-mbs-rotated", "s4-mbs-answer"],
  badgeId: "badge-pat-modified-binary-search",
  prerequisiteModuleIds: [],
};
