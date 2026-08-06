import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s4";
const P = ["fast-slow-pointers"];

/**
 * Cycle problems represent a linked list as a `next` array: `next[i]` is the
 * index of the node after node i, or -1 for null. Traversal starts at node 0.
 */

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "fs-middle",
    slug: "fast-slow-middle",
    title: "Middle of the List",
    difficulty: "easy",
    patternIds: P,
    statement:
      "A list is given as its array of values. Return the middle value (the second of two middles for even length), or -1 if empty. Use the fast/slow technique.",
    examples: [
      { input: "[1,2,3,4,5]", output: "3" },
      { input: "[1,2,3,4]", output: "3" },
      { input: "[1]", output: "1" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "middleValueFS",
    starter: {
      js: "function middleValueFS(values) {\n  // Middle value, or -1 if empty.\n}\n",
      ts: "function middleValueFS(values: number[]): number {\n  // Middle value, or -1 if empty.\n  return -1;\n}\n",
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
      "Advance a fast pointer two steps for every one step of a slow pointer.",
      "When fast runs off the end, slow sits at the middle.",
      "while (fast < n && fast+1 < n) { slow++; fast += 2; } return values[slow].",
    ],
    solutions: [
      {
        label: "Fast / slow pointers",
        approach: "Fast moves twice as quickly; slow ends at the middle.",
        js: "function middleValueFS(values) {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) { slow++; fast += 2; }\n  return values[slow];\n}\n",
        ts: "function middleValueFS(values: number[]): number {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) { slow++; fast += 2; }\n  return values[slow]!;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Index the middle",
        approach: "Directly index floor(n/2).",
        js: "function middleValueFS(values) {\n  if (values.length === 0) return -1;\n  return values[Math.floor(values.length / 2)];\n}\n",
        ts: "function middleValueFS(values: number[]): number {\n  if (values.length === 0) return -1;\n  return values[Math.floor(values.length / 2)]!;\n}\n",
        time: "O(1)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "fs-nth-from-end",
    slug: "fast-slow-nth-from-end",
    title: "Nth from the End",
    difficulty: "easy",
    patternIds: P,
    statement:
      "A list is given as its array of values. Return the value `n` positions from the end (1-indexed), or -1 if out of range. Use a lead/trail pointer gap.",
    examples: [
      { input: "[1,2,3,4,5], 2", output: "4" },
      { input: "[1], 1", output: "1" },
      { input: "[1,2,3], 4", output: "-1" },
    ],
    constraints: ["0 <= values.length <= 10000", "1 <= n"],
    functionName: "nthFromEndFS",
    starter: {
      js: "function nthFromEndFS(values, n) {\n  // Value n from the end (1-indexed), or -1.\n}\n",
      ts: "function nthFromEndFS(values: number[], n: number): number {\n  // Value n from the end (1-indexed), or -1.\n  return -1;\n}\n",
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
      "Move a lead pointer n steps ahead first.",
      "Then advance lead and trail together until lead reaches the end.",
      "The from-end position n maps to index length - n.",
    ],
    solutions: [
      {
        label: "Lead / trail gap",
        approach: "Open an n-step gap, then walk both pointers to the end.",
        js: "function nthFromEndFS(values, n) {\n  let lead = 0;\n  for (let i = 0; i < n; i++) { if (lead >= values.length) return -1; lead++; }\n  let trail = 0;\n  while (lead < values.length) { lead++; trail++; }\n  return values[trail];\n}\n",
        ts: "function nthFromEndFS(values: number[], n: number): number {\n  let lead = 0;\n  for (let i = 0; i < n; i++) { if (lead >= values.length) return -1; lead++; }\n  let trail = 0;\n  while (lead < values.length) { lead++; trail++; }\n  return values[trail]!;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Index from the front",
        approach: "Convert the from-end position into a front index.",
        js: "function nthFromEndFS(values, n) {\n  const i = values.length - n;\n  return i >= 0 && i < values.length ? values[i] : -1;\n}\n",
        ts: "function nthFromEndFS(values: number[], n: number): number {\n  const i = values.length - n;\n  return i >= 0 && i < values.length ? values[i]! : -1;\n}\n",
        time: "O(1)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "fs-happy",
    slug: "happy-number",
    title: "Happy Number",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Repeatedly replace a number with the sum of the squares of its digits. Return `true` if this reaches 1, or `false` if it loops forever. Detect the loop with fast/slow.",
    examples: [
      { input: "19", output: "true" },
      { input: "1", output: "true" },
      { input: "2", output: "false" },
    ],
    constraints: ["1 <= n <= 1000000000"],
    functionName: "isHappy",
    starter: {
      js: "function isHappy(n) {\n  // True if the digit-square process reaches 1.\n}\n",
      ts: "function isHappy(n: number): boolean {\n  // True if the digit-square process reaches 1.\n  return false;\n}\n",
    },
    visible: [
      { args: [19], expected: true },
      { args: [1], expected: true },
      { args: [2], expected: false },
    ],
    hidden: [
      { args: [7], expected: true },
      { args: [4], expected: false },
      { args: [23], expected: true },
      { args: [100], expected: true },
      { args: [11], expected: false },
      { args: [10], expected: true },
    ],
    hints: [
      "The sequence either reaches 1 or falls into a cycle — that's a fast/slow situation.",
      "Advance slow one square-step and fast two; if they meet at 1 it's happy.",
      "Alternatively remember seen values in a set and stop on a repeat.",
    ],
    solutions: [
      {
        label: "Floyd cycle detection",
        approach: "Two pointers over the digit-square sequence meet inside any cycle.",
        js: "function isHappy(n) {\n  const sq = (x) => { let s = 0; while (x > 0) { const d = x % 10; s += d * d; x = Math.floor(x / 10); } return s; };\n  let slow = n, fast = n;\n  do { slow = sq(slow); fast = sq(sq(fast)); } while (slow !== fast);\n  return slow === 1;\n}\n",
        ts: "function isHappy(n: number): boolean {\n  const sq = (x: number) => { let s = 0; while (x > 0) { const d = x % 10; s += d * d; x = Math.floor(x / 10); } return s; };\n  let slow = n, fast = n;\n  do { slow = sq(slow); fast = sq(sq(fast)); } while (slow !== fast);\n  return slow === 1;\n}\n",
        time: "O(log n) per step",
        space: "O(1)",
      },
      {
        label: "Seen set",
        approach: "Track visited numbers; a repeat that isn't 1 means unhappy.",
        js: "function isHappy(n) {\n  const sq = (x) => { let s = 0; while (x > 0) { const d = x % 10; s += d * d; x = Math.floor(x / 10); } return s; };\n  const seen = new Set();\n  while (n !== 1 && !seen.has(n)) { seen.add(n); n = sq(n); }\n  return n === 1;\n}\n",
        ts: "function isHappy(n: number): boolean {\n  const sq = (x: number) => { let s = 0; while (x > 0) { const d = x % 10; s += d * d; x = Math.floor(x / 10); } return s; };\n  const seen = new Set<number>();\n  while (n !== 1 && !seen.has(n)) { seen.add(n); n = sq(n); }\n  return n === 1;\n}\n",
        time: "O(log n) per step",
        space: "O(k)",
      },
    ],
  },
  {
    id: "fs-find-duplicate",
    slug: "find-the-duplicate",
    title: "Find the Duplicate Number",
    difficulty: "medium",
    patternIds: P,
    statement:
      "An array of length n+1 holds values in the range 1..n, with exactly one value repeated (possibly many times). Return that repeated value. Treat the array as a linked list and use Floyd's algorithm.",
    examples: [
      { input: "[1,3,4,2,2]", output: "2" },
      { input: "[3,1,3,4,2]", output: "3" },
      { input: "[1,1]", output: "1" },
    ],
    constraints: ["values are in 1..n where n = length - 1", "exactly one duplicated value"],
    functionName: "findDuplicate",
    starter: {
      js: "function findDuplicate(nums) {\n  // The single duplicated value.\n}\n",
      ts: "function findDuplicate(nums: number[]): number {\n  // The single duplicated value.\n  return 0;\n}\n",
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
      "Following nums[i] as a 'next pointer' creates a cycle whose entrance is the duplicate.",
      "Phase 1: advance slow = nums[slow], fast = nums[nums[fast]] until they meet.",
      "Phase 2: reset one pointer to the start; step both one at a time to the cycle entrance.",
    ],
    solutions: [
      {
        label: "Floyd's cycle detection",
        approach: "The array-as-list has a cycle entered at the duplicate value.",
        js: "function findDuplicate(nums) {\n  let slow = nums[0], fast = nums[0];\n  do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast);\n  slow = nums[0];\n  while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }\n  return slow;\n}\n",
        ts: "function findDuplicate(nums: number[]): number {\n  let slow = nums[0], fast = nums[0];\n  do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast);\n  slow = nums[0];\n  while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }\n  return slow;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Seen set",
        approach: "The first value seen twice is the duplicate.",
        js: "function findDuplicate(nums) {\n  const seen = new Set();\n  for (const v of nums) { if (seen.has(v)) return v; seen.add(v); }\n  return -1;\n}\n",
        ts: "function findDuplicate(nums: number[]): number {\n  const seen = new Set<number>();\n  for (const v of nums) { if (seen.has(v)) return v; seen.add(v); }\n  return -1;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fs-has-cycle",
    slug: "linked-list-has-cycle",
    title: "Linked List Has Cycle",
    difficulty: "medium",
    patternIds: P,
    statement:
      "A linked list is given as a `next` array (`next[i]` is the next node's index, or -1 for null). Starting at node 0, return `true` if the list contains a cycle.",
    examples: [
      { input: "[1,2,-1]", output: "false" },
      { input: "[1,2,0]", output: "true" },
      { input: "[]", output: "false" },
    ],
    constraints: ["0 <= next.length <= 10000", "each next[i] is -1 or a valid index"],
    functionName: "hasCycle",
    starter: {
      js: "function hasCycle(next) {\n  // True if following from node 0 loops.\n}\n",
      ts: "function hasCycle(next: number[]): boolean {\n  // True if following from node 0 loops.\n  return false;\n}\n",
    },
    visible: [
      { args: [[1, 2, -1]], expected: false },
      { args: [[1, 2, 0]], expected: true },
      { args: [[]], expected: false },
    ],
    hidden: [
      { args: [[-1]], expected: false },
      { args: [[0]], expected: true },
      { args: [[1, -1]], expected: false },
      { args: [[1, 2, 3, 1]], expected: true },
      { args: [[1, 2, 2]], expected: true },
      { args: [[2, -1, 1]], expected: false },
    ],
    hints: [
      "Advance slow one node and fast two; a cycle forces them to meet.",
      "If fast reaches null (-1) first, there's no cycle.",
      "while (fast !== -1 && next[fast] !== -1) { slow = next[slow]; fast = next[next[fast]]; if (slow===fast) return true; }",
    ],
    solutions: [
      {
        label: "Floyd tortoise and hare",
        approach: "Fast laps slow inside any cycle; otherwise fast hits null.",
        js: "function hasCycle(next) {\n  if (next.length === 0) return false;\n  let slow = 0, fast = 0;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) return true;\n  }\n  return false;\n}\n",
        ts: "function hasCycle(next: number[]): boolean {\n  if (next.length === 0) return false;\n  let slow = 0, fast = 0;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) return true;\n  }\n  return false;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Visited set",
        approach: "Walk the list; revisiting a node means a cycle.",
        js: "function hasCycle(next) {\n  if (next.length === 0) return false;\n  const seen = new Set();\n  let cur = 0;\n  while (cur !== -1) { if (seen.has(cur)) return true; seen.add(cur); cur = next[cur]; }\n  return false;\n}\n",
        ts: "function hasCycle(next: number[]): boolean {\n  if (next.length === 0) return false;\n  const seen = new Set<number>();\n  let cur = 0;\n  while (cur !== -1) { if (seen.has(cur)) return true; seen.add(cur); cur = next[cur]; }\n  return false;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fs-find-cycle-start",
    slug: "linked-list-cycle-start",
    title: "Cycle Entrance",
    difficulty: "hard",
    patternIds: P,
    statement:
      "A linked list is given as a `next` array (index or -1). Starting at node 0, return the index where the cycle begins, or -1 if there is no cycle.",
    examples: [
      { input: "[1,2,0]", output: "0" },
      { input: "[1,2,3,1]", output: "1" },
      { input: "[1,2,-1]", output: "-1" },
    ],
    constraints: ["0 <= next.length <= 10000"],
    functionName: "findCycleStart",
    starter: {
      js: "function findCycleStart(next) {\n  // Index where the cycle begins, or -1.\n}\n",
      ts: "function findCycleStart(next: number[]): number {\n  // Index where the cycle begins, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 2, 0]], expected: 0 },
      { args: [[1, 2, 3, 1]], expected: 1 },
      { args: [[1, 2, -1]], expected: -1 },
    ],
    hidden: [
      { args: [[]], expected: -1 },
      { args: [[0]], expected: 0 },
      { args: [[-1]], expected: -1 },
      { args: [[1, 2, 2]], expected: 2 },
      { args: [[2, -1, 1]], expected: -1 },
      { args: [[1, 2, 3, 4, 2]], expected: 2 },
    ],
    hints: [
      "First detect a meeting point with fast/slow.",
      "Then reset one pointer to the start; move both one step at a time.",
      "They meet again exactly at the cycle's entrance.",
    ],
    solutions: [
      {
        label: "Floyd, then find the entrance",
        approach: "Detect the meeting point, then walk one pointer from the head.",
        js: "function findCycleStart(next) {\n  if (next.length === 0) return -1;\n  let slow = 0, fast = 0, met = false;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return -1;\n  slow = 0;\n  while (slow !== fast) { slow = next[slow]; fast = next[fast]; }\n  return slow;\n}\n",
        ts: "function findCycleStart(next: number[]): number {\n  if (next.length === 0) return -1;\n  let slow = 0, fast = 0, met = false;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return -1;\n  slow = 0;\n  while (slow !== fast) { slow = next[slow]; fast = next[fast]; }\n  return slow;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Visited set",
        approach: "The first node visited twice is the cycle entrance.",
        js: "function findCycleStart(next) {\n  if (next.length === 0) return -1;\n  const seen = new Set();\n  let cur = 0;\n  while (cur !== -1) { if (seen.has(cur)) return cur; seen.add(cur); cur = next[cur]; }\n  return -1;\n}\n",
        ts: "function findCycleStart(next: number[]): number {\n  if (next.length === 0) return -1;\n  const seen = new Set<number>();\n  let cur = 0;\n  while (cur !== -1) { if (seen.has(cur)) return cur; seen.add(cur); cur = next[cur]; }\n  return -1;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "fs-list-length",
    slug: "list-length",
    title: "List Length",
    difficulty: "easy",
    patternIds: P,
    statement:
      "A linked list is given as a `next` array (index or -1), starting at node 0 with no cycle. Return the number of nodes.",
    examples: [
      { input: "[1,2,-1]", output: "3" },
      { input: "[-1]", output: "1" },
      { input: "[]", output: "0" },
    ],
    constraints: ["the list is acyclic", "0 <= next.length <= 10000"],
    functionName: "listLength",
    starter: {
      js: "function listLength(next) {\n  // Number of nodes from node 0 to null.\n}\n",
      ts: "function listLength(next: number[]): number {\n  // Number of nodes from node 0 to null.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, -1]], expected: 3 },
      { args: [[-1]], expected: 1 },
      { args: [[]], expected: 0 },
    ],
    hidden: [
      { args: [[1, -1]], expected: 2 },
      { args: [[2, -1, 1]], expected: 3 },
      { args: [[1, 2, 3, -1]], expected: 4 },
      { args: [[4, -1, -1, -1, 2]], expected: 3 },
      { args: [[3, -1, -1, 1]], expected: 3 },
      { args: [[1, 2, -1, -1]], expected: 3 },
    ],
    hints: [
      "Follow next-pointers from node 0, counting nodes, until you reach -1.",
      "Empty (no nodes) means the array is empty.",
      "let count = 0, cur = 0; while (cur !== -1) { count++; cur = next[cur]; }",
    ],
    solutions: [
      {
        label: "Walk to null",
        approach: "Count nodes while following next-pointers.",
        js: "function listLength(next) {\n  if (next.length === 0) return 0;\n  let count = 0, cur = 0;\n  while (cur !== -1) { count++; cur = next[cur]; }\n  return count;\n}\n",
        ts: "function listLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  let count = 0, cur = 0;\n  while (cur !== -1) { count++; cur = next[cur]; }\n  return count;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Collect indices",
        approach: "Gather the visited indices and read the total.",
        js: "function listLength(next) {\n  if (next.length === 0) return 0;\n  const nodes = [];\n  let cur = 0;\n  while (cur !== -1) { nodes.push(cur); cur = next[cur]; }\n  return nodes.length;\n}\n",
        ts: "function listLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  const nodes: number[] = [];\n  let cur = 0;\n  while (cur !== -1) { nodes.push(cur); cur = next[cur]; }\n  return nodes.length;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fs-cycle-length",
    slug: "cycle-length",
    title: "Cycle Length",
    difficulty: "medium",
    patternIds: P,
    statement:
      "A linked list is given as a `next` array (index or -1), starting at node 0. Return the length of the cycle reachable from node 0, or 0 if there is no cycle.",
    examples: [
      { input: "[1,2,0]", output: "3" },
      { input: "[1,2,3,1]", output: "3" },
      { input: "[1,2,-1]", output: "0" },
    ],
    constraints: ["0 <= next.length <= 10000"],
    functionName: "cycleLength",
    starter: {
      js: "function cycleLength(next) {\n  // Length of the cycle, or 0.\n}\n",
      ts: "function cycleLength(next: number[]): number {\n  // Length of the cycle, or 0.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 0]], expected: 3 },
      { args: [[1, 2, 3, 1]], expected: 3 },
      { args: [[1, 2, -1]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: 0 },
      { args: [[0]], expected: 1 },
      { args: [[1, -1]], expected: 0 },
      { args: [[1, 1]], expected: 1 },
      { args: [[1, 2, 3, 4, 2]], expected: 3 },
      { args: [[2, -1, 1]], expected: 0 },
    ],
    hints: [
      "First find a meeting point inside the cycle with fast/slow.",
      "Then walk one full loop from that point, counting steps back to it.",
      "If fast reaches null there's no cycle — return 0.",
    ],
    solutions: [
      {
        label: "Meet, then count the loop",
        approach: "Detect a meeting node, then measure the loop from it.",
        js: "function cycleLength(next) {\n  if (next.length === 0) return 0;\n  let slow = 0, fast = 0, met = false;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return 0;\n  let len = 1, cur = next[slow];\n  while (cur !== slow) { cur = next[cur]; len++; }\n  return len;\n}\n",
        ts: "function cycleLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  let slow = 0, fast = 0, met = false;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return 0;\n  let len = 1, cur = next[slow];\n  while (cur !== slow) { cur = next[cur]; len++; }\n  return len;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Visited order",
        approach: "Record the step at which each node is seen; a repeat gives the loop length.",
        js: "function cycleLength(next) {\n  if (next.length === 0) return 0;\n  const step = new Map();\n  let cur = 0, i = 0;\n  while (cur !== -1) {\n    if (step.has(cur)) return i - step.get(cur);\n    step.set(cur, i++);\n    cur = next[cur];\n  }\n  return 0;\n}\n",
        ts: "function cycleLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  const step = new Map<number, number>();\n  let cur = 0, i = 0;\n  while (cur !== -1) {\n    if (step.has(cur)) return i - step.get(cur)!;\n    step.set(cur, i++);\n    cur = next[cur];\n  }\n  return 0;\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fs-is-palindrome-list",
    slug: "palindrome-list",
    title: "Palindrome List",
    difficulty: "medium",
    patternIds: P,
    statement:
      "A list is given as its array of values. Return `true` if it reads the same forwards and backwards (find the middle with fast/slow, then compare).",
    examples: [
      { input: "[1,2,1]", output: "true" },
      { input: "[1,2,2,1]", output: "true" },
      { input: "[1,2,3]", output: "false" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "isPalindromeList",
    starter: {
      js: "function isPalindromeList(values) {\n  // True if the sequence is a palindrome.\n}\n",
      ts: "function isPalindromeList(values: number[]): boolean {\n  // True if the sequence is a palindrome.\n  return false;\n}\n",
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
      "Compare the two ends, moving inward.",
      "Any mismatched pair means it's not a palindrome.",
      "let i=0, j=n-1; while (i<j) { if (values[i]!==values[j]) return false; i++; j--; }",
    ],
    solutions: [
      {
        label: "Two ends inward",
        approach: "Compare mirrored positions converging to the middle.",
        js: "function isPalindromeList(values) {\n  let i = 0, j = values.length - 1;\n  while (i < j) { if (values[i] !== values[j]) return false; i++; j--; }\n  return true;\n}\n",
        ts: "function isPalindromeList(values: number[]): boolean {\n  let i = 0, j = values.length - 1;\n  while (i < j) { if (values[i] !== values[j]) return false; i++; j--; }\n  return true;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
      {
        label: "Reverse compare",
        approach: "A palindrome equals its own reverse.",
        js: "function isPalindromeList(values) {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
        ts: "function isPalindromeList(values: number[]): boolean {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "fs-middle-index",
    slug: "middle-index",
    title: "Middle Index",
    difficulty: "easy",
    patternIds: P,
    statement:
      "A list is given as its array of values. Return the index of the middle node (the upper middle for even length), or -1 if empty.",
    examples: [
      { input: "[1,2,3,4,5]", output: "2" },
      { input: "[1,2,3,4]", output: "2" },
      { input: "[1]", output: "0" },
    ],
    constraints: ["0 <= values.length <= 10000"],
    functionName: "middleIndex",
    starter: {
      js: "function middleIndex(values) {\n  // Index of the middle node, or -1.\n}\n",
      ts: "function middleIndex(values: number[]): number {\n  // Index of the middle node, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3, 4, 5]], expected: 2 },
      { args: [[1, 2, 3, 4]], expected: 2 },
      { args: [[1]], expected: 0 },
    ],
    hidden: [
      { args: [[]], expected: -1 },
      { args: [[1, 2]], expected: 1 },
      { args: [[10, 20, 30]], expected: 1 },
      { args: [[1, 2, 3, 4, 5, 6]], expected: 3 },
      { args: [[9]], expected: 0 },
      { args: [[5, 5]], expected: 1 },
    ],
    hints: [
      "The upper-middle index of a length-n list is floor(n/2).",
      "Guard the empty case first.",
      "return values.length === 0 ? -1 : Math.floor(values.length / 2).",
    ],
    solutions: [
      {
        label: "Compute the index",
        approach: "Return floor(n/2), or -1 when empty.",
        js: "function middleIndex(values) {\n  return values.length === 0 ? -1 : Math.floor(values.length / 2);\n}\n",
        ts: "function middleIndex(values: number[]): number {\n  return values.length === 0 ? -1 : Math.floor(values.length / 2);\n}\n",
        time: "O(1)",
        space: "O(1)",
      },
      {
        label: "Fast / slow pointers",
        approach: "Walk slow one step per two of fast; slow's index is the middle.",
        js: "function middleIndex(values) {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) { slow++; fast += 2; }\n  return slow;\n}\n",
        ts: "function middleIndex(values: number[]): number {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) { slow++; fast += 2; }\n  return slow;\n}\n",
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
];

export const fastSlowProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const fastSlowMcqs: QuizQuestion[] = [
  {
    id: "s4-fs-space",
    kind: "mcq",
    prompt: "Floyd's tortoise-and-hare cycle detection uses how much extra space?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 0,
    explanation: "Just two pointers — constant extra space, no visited set.",
  },
  {
    id: "s4-fs-middle",
    kind: "mcq",
    prompt: "Finding the middle of an n-node list with fast/slow pointers takes:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "The fast pointer traverses the whole list once — linear time.",
  },
];

export const fastSlowModule: Module = {
  id: "m-pat-fast-slow",
  stageId: S,
  title: "Fast & Slow Pointers",
  kind: "patternModule",
  summary: "Two pointers at different speeds — detect cycles, find middles, and locate loop entrances in O(1) space.",
  lessonSections: [
    {
      heading: "Different speeds reveal structure",
      body: `Move one pointer one step at a time and another two steps. If a sequence loops, the **fast** pointer eventually laps the **slow** one and they meet — Floyd's *tortoise and hare*. If it doesn't loop, fast simply runs off the end. All in **O(1)** space, no visited set.

\`\`\`js
// Middle of a list (as an array of values)
function middle(vals) {
  let slow = 0, fast = 0;
  while (fast < vals.length && fast + 1 < vals.length) { slow++; fast += 2; }
  return vals[slow];
}
console.log(middle([1, 2, 3, 4, 5])); // 3
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for fast/slow pointers when you need to:

- detect a **cycle** in a linked list or a functional sequence (happy numbers, "find the duplicate"),
- find the **middle** node in one pass,
- find the **entrance** of a cycle,
- locate the **nth-from-end** node using a fixed pointer gap.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Cycle detection (next[i] = index or -1)
let slow = 0, fast = 0;
while (fast !== -1 && next[fast] !== -1) {
  slow = next[slow];
  fast = next[next[fast]];
  if (slow === fast) return true; // cycle
}
return false;

// Cycle entrance: after they meet, reset slow to the head,
// then advance both one step until they meet again.
\`\`\`

**Pitfalls:** advancing fast without checking two steps of null; forgetting the two-phase structure when locating the cycle entrance; off-by-one on which "middle" you return for even lengths. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "fs-middle",
  drillProblemIds: [
    "fs-middle",
    "fs-nth-from-end",
    "fs-happy",
    "fs-find-duplicate",
    "fs-has-cycle",
    "fs-find-cycle-start",
  ],
  testPoolProblemIds: [
    "fs-list-length",
    "fs-cycle-length",
    "fs-is-palindrome-list",
    "fs-middle-index",
  ],
  complexityQuestionIds: ["s4-fs-space", "s4-fs-middle"],
  badgeId: "badge-pat-fast-slow",
  prerequisiteModuleIds: ["m-pat-two-pointers"],
};
