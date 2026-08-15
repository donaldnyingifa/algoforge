import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s5";
const P = ["tree-bfs"];

const NOTE =
  "The tree is given as an array in level order: the children of index `i` are at `2i+1` and `2i+2`, and `null` means no node.";

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "tb-level-order",
    slug: "tree-level-order",
    title: "Level Order Traversal",
    difficulty: "easy",
    patternIds: P,
    statement: `Return the node values grouped by level, top to bottom and left to right within each level.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[[1],[2,3]]" },
      { input: "[]", output: "[]" },
      { input: "[1]", output: "[[1]]" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "levelOrder",
    starter: {
      js: "function levelOrder(tree) {\n  // Values grouped by level.\n}\n",
      ts: "function levelOrder(tree: Array<number | null>): number[][] {\n  // Values grouped by level.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [[1], [2, 3]] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [[1]] },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [[3], [9, 20], [15, 7]] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [[1], [2, 3], [4, 5, 6]] },
      { args: [[1, null, 2]], expected: [[1], [2]] },
      { args: [[1, 2, null, 4]], expected: [[1], [2], [4]] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [[5], [3, 8], [1, 4, 7, 9]] },
      { args: [[2, 1, 3]], expected: [[2], [1, 3]] },
    ],
    hints: [
      "Process one whole level before moving on to the next.",
      "Collect the current level's indices, emit their values, then build the next level.",
      "next = children of every index in the current level that actually exist.",
    ],
    solutions: [
      {
        label: "Level-by-level sweep",
        approach: "Expand each level into the next, emitting values as you go.",
        js: "function levelOrder(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    const vals = [], next = [];\n    for (const i of level) {\n      vals.push(tree[i]);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(vals);\n    level = next;\n  }\n  return out;\n}\n",
        ts: "function levelOrder(tree: Array<number | null>): number[][] {\n  const out: number[][] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    const vals: number[] = [], next: number[] = [];\n    for (const i of level) {\n      vals.push(tree[i] as number);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(vals);\n    level = next;\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function levelOrder(tree) {\n  // Store one value array for every non-empty tree level.\n  const out = [];\n  // An empty array or missing root has no levels to visit.\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Keep the array indices belonging to the current level.\n  let level = [0];\n  while (level.length) {\n    // Collect this level's values and the next level's indices separately.\n    const vals = [], next = [];\n    for (const i of level) {\n      // Indices in level are already ordered from left to right.\n      vals.push(tree[i]);\n      // Array-encoded children of node i occupy these two positions.\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Only real, in-bounds children belong to the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Finish this complete level before advancing the breadth-first sweep.\n    out.push(vals);\n    level = next;\n  }\n  // Levels were appended from the root downward.\n  return out;\n}\n",
          ts: "function levelOrder(tree: Array<number | null>): number[][] {\n  // Store one value array for every non-empty tree level.\n  const out: number[][] = [];\n  // An empty array or missing root has no levels to visit.\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Keep the array indices belonging to the current level.\n  let level: number[] = [0];\n  while (level.length) {\n    // Collect this level's values and the next level's indices separately.\n    const vals: number[] = [], next: number[] = [];\n    for (const i of level) {\n      // Indices in level are already ordered from left to right.\n      vals.push(tree[i] as number);\n      // Array-encoded children of node i occupy these two positions.\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Only real, in-bounds children belong to the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Finish this complete level before advancing the breadth-first sweep.\n    out.push(vals);\n    level = next;\n  }\n  // Levels were appended from the root downward.\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "DFS with a depth argument",
        approach: "Recurse carrying the depth and append into that level's bucket.",
        js: "function levelOrder(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!out[depth]) out[depth] = [];\n    out[depth].push(tree[i]);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        ts: "function levelOrder(tree: Array<number | null>): number[][] {\n  const out: number[][] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!out[depth]) out[depth] = [];\n    out[depth].push(tree[i] as number);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        commentedCode: {
          js: "function levelOrder(tree) {\n  // Index each output bucket by tree depth.\n  const out = [];\n  const go = (i, depth) => {\n    // Stop at an out-of-bounds slot or an absent node.\n    if (i >= tree.length || tree[i] == null) return;\n    // The first node encountered at a depth creates that level's bucket.\n    if (!out[depth]) out[depth] = [];\n    // Preorder's left-before-right visits preserve level order inside the bucket.\n    out[depth].push(tree[i]);\n    // Send both children to the following depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  // Begin at the root on depth zero.\n  go(0, 0);\n  return out;\n}\n",
          ts: "function levelOrder(tree: Array<number | null>): number[][] {\n  // Index each output bucket by tree depth.\n  const out: number[][] = [];\n  const go = (i: number, depth: number) => {\n    // Stop at an out-of-bounds slot or an absent node.\n    if (i >= tree.length || tree[i] == null) return;\n    // The first node encountered at a depth creates that level's bucket.\n    if (!out[depth]) out[depth] = [];\n    // Preorder's left-before-right visits preserve level order inside the bucket.\n    out[depth].push(tree[i] as number);\n    // Send both children to the following depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  // Begin at the root on depth zero.\n  go(0, 0);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tb-level-count",
    slug: "tree-level-count",
    title: "Number of Levels",
    difficulty: "easy",
    patternIds: P,
    statement: `Return how many levels the tree has (an empty tree has 0).\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "2" },
      { input: "[]", output: "0" },
      { input: "[1]", output: "1" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "levelCount",
    starter: {
      js: "function levelCount(tree) {\n  // Number of levels.\n}\n",
      ts: "function levelCount(tree: Array<number | null>): number {\n  // Number of levels.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: 2 },
      { args: [[]], expected: 0 },
      { args: [[1]], expected: 1 },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: 3 },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: 3 },
      { args: [[1, null, 2]], expected: 2 },
      { args: [[1, 2, null, 4]], expected: 3 },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: 3 },
      { args: [[1, 2]], expected: 2 },
    ],
    hints: [
      "Count how many times you can expand a level before it becomes empty.",
      "This is the same as the tree's maximum depth in nodes.",
      "Increment a counter each time you build the next level.",
    ],
    solutions: [
      {
        label: "Count level expansions",
        approach: "Sweep level by level, counting the iterations.",
        js: "function levelCount(tree) {\n  if (tree.length === 0 || tree[0] == null) return 0;\n  let level = [0], count = 0;\n  while (level.length) {\n    count++;\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return count;\n}\n",
        ts: "function levelCount(tree: Array<number | null>): number {\n  if (tree.length === 0 || tree[0] == null) return 0;\n  let level: number[] = [0], count = 0;\n  while (level.length) {\n    count++;\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function levelCount(tree) {\n  // A missing root means the tree has zero levels.\n  if (tree.length === 0 || tree[0] == null) return 0;\n  // Start the breadth-first sweep at the root, before counting any level.\n  let level = [0], count = 0;\n  while (level.length) {\n    // Entering one non-empty frontier accounts for one complete level.\n    count++;\n    const next = [];\n    for (const i of level) {\n      // Locate this node's children in the level-order array.\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Build the next frontier from children that actually exist.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  // The number of processed frontiers is the tree height in nodes.\n  return count;\n}\n",
          ts: "function levelCount(tree: Array<number | null>): number {\n  // A missing root means the tree has zero levels.\n  if (tree.length === 0 || tree[0] == null) return 0;\n  // Start the breadth-first sweep at the root, before counting any level.\n  let level: number[] = [0], count = 0;\n  while (level.length) {\n    // Entering one non-empty frontier accounts for one complete level.\n    count++;\n    const next: number[] = [];\n    for (const i of level) {\n      // Locate this node's children in the level-order array.\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Build the next frontier from children that actually exist.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  // The number of processed frontiers is the tree height in nodes.\n  return count;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Recursive height",
        approach: "Levels equal the maximum depth measured in nodes.",
        js: "function levelCount(tree) {\n  const go = (i) => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  return go(0);\n}\n",
        ts: "function levelCount(tree: Array<number | null>): number {\n  const go = (i: number): number => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  return go(0);\n}\n",
        commentedCode: {
          js: "function levelCount(tree) {\n  // An absent node contributes zero height; a real node contributes one\n  // plus the taller height of its two child subtrees.\n  const go = (i) => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  // The root subtree's height equals the tree's number of levels.\n  return go(0);\n}\n",
          ts: "function levelCount(tree: Array<number | null>): number {\n  // An absent node contributes zero height; a real node contributes one\n  // plus the taller height of its two child subtrees.\n  const go = (i: number): number => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  // The root subtree's height equals the tree's number of levels.\n  return go(0);\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
    ],
  },
  {
    id: "tb-level-sums",
    slug: "tree-level-sums",
    title: "Sum of Each Level",
    difficulty: "medium",
    patternIds: P,
    statement: `Return an array holding the sum of the values on each level, top to bottom.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[1,5]" },
      { input: "[]", output: "[]" },
      { input: "[1]", output: "[1]" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "levelSums",
    starter: {
      js: "function levelSums(tree) {\n  // Sum of values per level.\n}\n",
      ts: "function levelSums(tree: Array<number | null>): number[] {\n  // Sum of values per level.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [1, 5] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [1] },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [3, 29, 22] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [1, 5, 15] },
      { args: [[1, null, 2]], expected: [1, 2] },
      { args: [[1, 2, null, 4]], expected: [1, 2, 4] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [5, 11, 21] },
      { args: [[2, 1, 3]], expected: [2, 4] },
    ],
    hints: [
      "Do a level-order sweep and total each level as you visit it.",
      "Push one number per level, not per node.",
      "Reuse the level-expansion loop and accumulate instead of collecting.",
    ],
    solutions: [
      {
        label: "Level sweep with totals",
        approach: "Sum each level's values during the BFS expansion.",
        js: "function levelSums(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    let sum = 0;\n    const next = [];\n    for (const i of level) {\n      sum += tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(sum);\n    level = next;\n  }\n  return out;\n}\n",
        ts: "function levelSums(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    let sum = 0;\n    const next: number[] = [];\n    for (const i of level) {\n      sum += tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(sum);\n    level = next;\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function levelSums(tree) {\n  // Append one total for each level from top to bottom.\n  const out = [];\n  // A tree without a root has no level sums.\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    // Reset the accumulator for this level only.\n    let sum = 0;\n    const next = [];\n    for (const i of level) {\n      // Every index in the frontier represents one present node.\n      sum += tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Queue its present children for the following level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Record the completed level total before moving down.\n    out.push(sum);\n    level = next;\n  }\n  return out;\n}\n",
          ts: "function levelSums(tree: Array<number | null>): number[] {\n  // Append one total for each level from top to bottom.\n  const out: number[] = [];\n  // A tree without a root has no level sums.\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    // Reset the accumulator for this level only.\n    let sum = 0;\n    const next: number[] = [];\n    for (const i of level) {\n      // Every index in the frontier represents one present node.\n      sum += tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Queue its present children for the following level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Record the completed level total before moving down.\n    out.push(sum);\n    level = next;\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "DFS accumulating by depth",
        approach: "Add each node's value into its depth's slot.",
        js: "function levelSums(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = (out[depth] || 0) + tree[i];\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        ts: "function levelSums(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = (out[depth] || 0) + (tree[i] as number);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        commentedCode: {
          js: "function levelSums(tree) {\n  // Use depth as the output index for each level's running sum.\n  const out = [];\n  const go = (i, depth) => {\n    // Ignore array gaps and indices beyond the encoded tree.\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize an unseen depth at zero, then add this node's value.\n    out[depth] = (out[depth] || 0) + tree[i];\n    // Both children contribute to the next depth's total.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
          ts: "function levelSums(tree: Array<number | null>): number[] {\n  // Use depth as the output index for each level's running sum.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    // Ignore array gaps and indices beyond the encoded tree.\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize an unseen depth at zero, then add this node's value.\n    out[depth] = (out[depth] || 0) + (tree[i] as number);\n    // Both children contribute to the next depth's total.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tb-right-side-view",
    slug: "tree-right-side-view",
    title: "Right Side View",
    difficulty: "medium",
    patternIds: P,
    statement: `Standing to the right of the tree, return the values you can see — the rightmost node on each level, top to bottom.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[1,3]" },
      { input: "[]", output: "[]" },
      { input: "[1,2,null,4]", output: "[1,2,4]" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "rightSideView",
    starter: {
      js: "function rightSideView(tree) {\n  // Rightmost value on each level.\n}\n",
      ts: "function rightSideView(tree: Array<number | null>): number[] {\n  // Rightmost value on each level.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [1, 3] },
      { args: [[]], expected: [] },
      { args: [[1, 2, null, 4]], expected: [1, 2, 4] },
    ],
    hidden: [
      { args: [[1]], expected: [1] },
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [3, 20, 7] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [1, 3, 6] },
      { args: [[1, null, 2]], expected: [1, 2] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [5, 8, 9] },
      { args: [[2, 1, 3]], expected: [2, 3] },
    ],
    hints: [
      "Do a level-order sweep and keep only the last value of each level.",
      "'Rightmost' means last in left-to-right order, which may be a left child.",
      "Push level[level.length - 1] for each level.",
    ],
    solutions: [
      {
        label: "Last node of each level",
        approach: "BFS by level and take the final value each time.",
        js: "function rightSideView(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    out.push(tree[level[level.length - 1]]);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
        ts: "function rightSideView(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    out.push(tree[level[level.length - 1]] as number);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function rightSideView(tree) {\n  // Collect the visible node from each depth.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Each frontier is maintained in left-to-right order.\n  let level = [0];\n  while (level.length) {\n    // Therefore the frontier's final node is the rightmost at this depth.\n    out.push(tree[level[level.length - 1]]);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Enqueue left before right to preserve that ordering on the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
          ts: "function rightSideView(tree: Array<number | null>): number[] {\n  // Collect the visible node from each depth.\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Each frontier is maintained in left-to-right order.\n  let level: number[] = [0];\n  while (level.length) {\n    // Therefore the frontier's final node is the rightmost at this depth.\n    out.push(tree[level[level.length - 1]] as number);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Enqueue left before right to preserve that ordering on the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "DFS right-first",
        approach: "Visit right before left and record the first node seen at each depth.",
        js: "function rightSideView(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (out[depth] === undefined) out[depth] = tree[i];\n    go(2 * i + 2, depth + 1);\n    go(2 * i + 1, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        ts: "function rightSideView(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (out[depth] === undefined) out[depth] = tree[i] as number;\n    go(2 * i + 2, depth + 1);\n    go(2 * i + 1, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        commentedCode: {
          js: "function rightSideView(tree) {\n  // Reserve one answer slot per depth.\n  const out = [];\n  const go = (i, depth) => {\n    // Stop when this encoded tree position has no node.\n    if (i >= tree.length || tree[i] == null) return;\n    // A right-first DFS reaches the visible node at this depth first.\n    if (out[depth] === undefined) out[depth] = tree[i];\n    // Explore the right subtree before allowing left nodes to reach deeper slots.\n    go(2 * i + 2, depth + 1);\n    go(2 * i + 1, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
          ts: "function rightSideView(tree: Array<number | null>): number[] {\n  // Reserve one answer slot per depth.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    // Stop when this encoded tree position has no node.\n    if (i >= tree.length || tree[i] == null) return;\n    // A right-first DFS reaches the visible node at this depth first.\n    if (out[depth] === undefined) out[depth] = tree[i] as number;\n    // Explore the right subtree before allowing left nodes to reach deeper slots.\n    go(2 * i + 2, depth + 1);\n    go(2 * i + 1, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
    ],
  },
  {
    id: "tb-level-maxes",
    slug: "tree-level-maxes",
    title: "Largest Value per Level",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the largest value found on each level, top to bottom.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[1,3]" },
      { input: "[]", output: "[]" },
      { input: "[1]", output: "[1]" },
    ],
    constraints: ["0 <= tree.length <= 10000", "values may be negative"],
    functionName: "levelMaxes",
    starter: {
      js: "function levelMaxes(tree) {\n  // Largest value on each level.\n}\n",
      ts: "function levelMaxes(tree: Array<number | null>): number[] {\n  // Largest value on each level.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [1, 3] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [1] },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [3, 20, 15] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [1, 3, 6] },
      { args: [[1, null, 2]], expected: [1, 2] },
      { args: [[1, 2, null, 4]], expected: [1, 2, 4] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [5, 8, 9] },
      { args: [[-5, -2, -9]], expected: [-5, -2] },
    ],
    hints: [
      "Sweep level by level, tracking the maximum within each level.",
      "Start each level's maximum at -Infinity so negative values work.",
      "Push one maximum per level.",
    ],
    solutions: [
      {
        label: "Level sweep with a maximum",
        approach: "Track the largest value while expanding each level.",
        js: "function levelMaxes(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    let best = -Infinity;\n    const next = [];\n    for (const i of level) {\n      if (tree[i] > best) best = tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
        ts: "function levelMaxes(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    let best = -Infinity;\n    const next: number[] = [];\n    for (const i of level) {\n      if ((tree[i] as number) > best) best = tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function levelMaxes(tree) {\n  // Produce one maximum for every non-empty level.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    // Negative infinity lets even an all-negative level replace the sentinel.\n    let best = -Infinity;\n    const next = [];\n    for (const i of level) {\n      // Improve this level's maximum with the current node.\n      if (tree[i] > best) best = tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Gather present children for the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
          ts: "function levelMaxes(tree: Array<number | null>): number[] {\n  // Produce one maximum for every non-empty level.\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    // Negative infinity lets even an all-negative level replace the sentinel.\n    let best = -Infinity;\n    const next: number[] = [];\n    for (const i of level) {\n      // Improve this level's maximum with the current node.\n      if ((tree[i] as number) > best) best = tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Gather present children for the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "DFS by depth",
        approach: "Keep a running maximum in each depth's slot.",
        js: "function levelMaxes(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = out[depth] === undefined ? tree[i] : Math.max(out[depth], tree[i]);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        ts: "function levelMaxes(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = out[depth] === undefined ? (tree[i] as number) : Math.max(out[depth], tree[i] as number);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        commentedCode: {
          js: "function levelMaxes(tree) {\n  // Store the best value seen at each depth.\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize a new depth, or compare this node with its current maximum.\n    out[depth] = out[depth] === undefined ? tree[i] : Math.max(out[depth], tree[i]);\n    // Visit every descendant so each level's candidates are considered.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
          ts: "function levelMaxes(tree: Array<number | null>): number[] {\n  // Store the best value seen at each depth.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize a new depth, or compare this node with its current maximum.\n    out[depth] = out[depth] === undefined ? (tree[i] as number) : Math.max(out[depth], tree[i] as number);\n    // Visit every descendant so each level's candidates are considered.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tb-zigzag",
    slug: "tree-zigzag",
    title: "Zigzag Level Order",
    difficulty: "hard",
    patternIds: P,
    statement: `Return the values grouped by level, but alternate direction: the first level left-to-right, the second right-to-left, and so on.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[[1],[3,2]]" },
      { input: "[]", output: "[]" },
      { input: "[1]", output: "[[1]]" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "zigzagLevelOrder",
    starter: {
      js: "function zigzagLevelOrder(tree) {\n  // Levels, alternating direction.\n}\n",
      ts: "function zigzagLevelOrder(tree: Array<number | null>): number[][] {\n  // Levels, alternating direction.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [[1], [3, 2]] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [[1]] },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [[3], [20, 9], [15, 7]] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [[1], [3, 2], [4, 5, 6]] },
      { args: [[1, null, 2]], expected: [[1], [2]] },
      { args: [[1, 2, null, 4]], expected: [[1], [2], [4]] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [[5], [8, 3], [1, 4, 7, 9]] },
      { args: [[2, 1, 3]], expected: [[2], [3, 1]] },
    ],
    hints: [
      "Do a normal level-order sweep first — the traversal itself doesn't change.",
      "Reverse the collected values on every second level.",
      "Track the level index and reverse when it's odd.",
    ],
    solutions: [
      {
        label: "Level sweep, reverse odd levels",
        approach: "Collect each level normally, flipping alternate ones.",
        js: "function zigzagLevelOrder(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0], depth = 0;\n  while (level.length) {\n    const vals = [], next = [];\n    for (const i of level) {\n      vals.push(tree[i]);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(depth % 2 === 1 ? vals.reverse() : vals);\n    level = next;\n    depth++;\n  }\n  return out;\n}\n",
        ts: "function zigzagLevelOrder(tree: Array<number | null>): number[][] {\n  const out: number[][] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0], depth = 0;\n  while (level.length) {\n    const vals: number[] = [], next: number[] = [];\n    for (const i of level) {\n      vals.push(tree[i] as number);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(depth % 2 === 1 ? vals.reverse() : vals);\n    level = next;\n    depth++;\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function zigzagLevelOrder(tree) {\n  // Collect the levels in their requested alternating directions.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Depth parity decides whether this level must be reversed.\n  let level = [0], depth = 0;\n  while (level.length) {\n    const vals = [], next = [];\n    for (const i of level) {\n      // First collect and expand the level in normal left-to-right order.\n      vals.push(tree[i]);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Odd depths read right-to-left; even depths keep the natural order.\n    out.push(depth % 2 === 1 ? vals.reverse() : vals);\n    level = next;\n    depth++;\n  }\n  return out;\n}\n",
          ts: "function zigzagLevelOrder(tree: Array<number | null>): number[][] {\n  // Collect the levels in their requested alternating directions.\n  const out: number[][] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Depth parity decides whether this level must be reversed.\n  let level: number[] = [0], depth = 0;\n  while (level.length) {\n    const vals: number[] = [], next: number[] = [];\n    for (const i of level) {\n      // First collect and expand the level in normal left-to-right order.\n      vals.push(tree[i] as number);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Odd depths read right-to-left; even depths keep the natural order.\n    out.push(depth % 2 === 1 ? vals.reverse() : vals);\n    level = next;\n    depth++;\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Build level order, then flip",
        approach: "Reuse a plain level-order result and reverse alternate rows.",
        js: "function zigzagLevelOrder(tree) {\n  const levels = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!levels[depth]) levels[depth] = [];\n    levels[depth].push(tree[i]);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return levels.map((row, d) => (d % 2 === 1 ? [...row].reverse() : row));\n}\n",
        ts: "function zigzagLevelOrder(tree: Array<number | null>): number[][] {\n  const levels: number[][] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!levels[depth]) levels[depth] = [];\n    levels[depth].push(tree[i] as number);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return levels.map((row, d) => (d % 2 === 1 ? [...row].reverse() : row));\n}\n",
        commentedCode: {
          js: "function zigzagLevelOrder(tree) {\n  // First group values into ordinary left-to-right depth buckets.\n  const levels = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!levels[depth]) levels[depth] = [];\n    levels[depth].push(tree[i]);\n    // Visiting left before right preserves each bucket's natural order.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  // Reverse copies of odd-depth rows to create the zigzag without changing traversal.\n  return levels.map((row, d) => (d % 2 === 1 ? [...row].reverse() : row));\n}\n",
          ts: "function zigzagLevelOrder(tree: Array<number | null>): number[][] {\n  // First group values into ordinary left-to-right depth buckets.\n  const levels: number[][] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!levels[depth]) levels[depth] = [];\n    levels[depth].push(tree[i] as number);\n    // Visiting left before right preserves each bucket's natural order.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  // Reverse copies of odd-depth rows to create the zigzag without changing traversal.\n  return levels.map((row, d) => (d % 2 === 1 ? [...row].reverse() : row));\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "tb-left-side-view",
    slug: "tree-left-side-view",
    title: "Left Side View",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the leftmost node value on each level, top to bottom.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[1,2]" },
      { input: "[]", output: "[]" },
      { input: "[1,null,2]", output: "[1,2]" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "leftSideView",
    starter: {
      js: "function leftSideView(tree) {\n  // Leftmost value on each level.\n}\n",
      ts: "function leftSideView(tree: Array<number | null>): number[] {\n  // Leftmost value on each level.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [1, 2] },
      { args: [[]], expected: [] },
      { args: [[1, null, 2]], expected: [1, 2] },
    ],
    hidden: [
      { args: [[1]], expected: [1] },
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [3, 9, 15] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [1, 2, 4] },
      { args: [[1, 2, null, 4]], expected: [1, 2, 4] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [5, 3, 1] },
      { args: [[2, 1, 3]], expected: [2, 1] },
    ],
    hints: [
      "Same level sweep — take the first value of each level instead of the last.",
      "'Leftmost' is first in left-to-right order, which may be a right child.",
      "Push level[0] for each level.",
    ],
    solutions: [
      {
        label: "First node of each level",
        approach: "BFS by level, taking the first value.",
        js: "function leftSideView(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    out.push(tree[level[0]]);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
        ts: "function leftSideView(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    out.push(tree[level[0]] as number);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function leftSideView(tree) {\n  // Collect the node visible from the left at every depth.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Frontiers remain ordered from left to right.\n  let level = [0];\n  while (level.length) {\n    // Thus the first frontier index identifies this level's leftmost node.\n    out.push(tree[level[0]]);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Adding each left child before its right sibling preserves the order.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
          ts: "function leftSideView(tree: Array<number | null>): number[] {\n  // Collect the node visible from the left at every depth.\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Frontiers remain ordered from left to right.\n  let level: number[] = [0];\n  while (level.length) {\n    // Thus the first frontier index identifies this level's leftmost node.\n    out.push(tree[level[0]] as number);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Adding each left child before its right sibling preserves the order.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "DFS left-first",
        approach: "Visit left before right and record the first node at each depth.",
        js: "function leftSideView(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (out[depth] === undefined) out[depth] = tree[i];\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        ts: "function leftSideView(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (out[depth] === undefined) out[depth] = tree[i] as number;\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        commentedCode: {
          js: "function leftSideView(tree) {\n  // Keep only the first value discovered at each depth.\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Left-first traversal makes that first discovery the leftmost node.\n    if (out[depth] === undefined) out[depth] = tree[i];\n    // Search left before right so later nodes cannot replace the visible one.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
          ts: "function leftSideView(tree: Array<number | null>): number[] {\n  // Keep only the first value discovered at each depth.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Left-first traversal makes that first discovery the leftmost node.\n    if (out[depth] === undefined) out[depth] = tree[i] as number;\n    // Search left before right so later nodes cannot replace the visible one.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
    ],
  },
  {
    id: "tb-level-mins",
    slug: "tree-level-mins",
    title: "Smallest Value per Level",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the smallest value found on each level, top to bottom.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[1,2]" },
      { input: "[]", output: "[]" },
      { input: "[1]", output: "[1]" },
    ],
    constraints: ["0 <= tree.length <= 10000", "values may be negative"],
    functionName: "levelMins",
    starter: {
      js: "function levelMins(tree) {\n  // Smallest value on each level.\n}\n",
      ts: "function levelMins(tree: Array<number | null>): number[] {\n  // Smallest value on each level.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [1, 2] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [1] },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [3, 9, 7] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [1, 2, 4] },
      { args: [[1, null, 2]], expected: [1, 2] },
      { args: [[1, 2, null, 4]], expected: [1, 2, 4] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [5, 3, 1] },
      { args: [[-5, -2, -9]], expected: [-5, -9] },
    ],
    hints: [
      "Mirror the level-maximum sweep with a minimum instead.",
      "Start each level's minimum at Infinity so negatives work.",
      "Push one minimum per level.",
    ],
    solutions: [
      {
        label: "Level sweep with a minimum",
        approach: "Track the smallest value while expanding each level.",
        js: "function levelMins(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    let best = Infinity;\n    const next = [];\n    for (const i of level) {\n      if (tree[i] < best) best = tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
        ts: "function levelMins(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    let best = Infinity;\n    const next: number[] = [];\n    for (const i of level) {\n      if ((tree[i] as number) < best) best = tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function levelMins(tree) {\n  // Produce one minimum for every non-empty level.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    // Positive infinity lets the first real value establish the minimum.\n    let best = Infinity;\n    const next = [];\n    for (const i of level) {\n      // Improve this level's minimum with the current node.\n      if (tree[i] < best) best = tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Gather present children for the following level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
          ts: "function levelMins(tree: Array<number | null>): number[] {\n  // Produce one minimum for every non-empty level.\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    // Positive infinity lets the first real value establish the minimum.\n    let best = Infinity;\n    const next: number[] = [];\n    for (const i of level) {\n      // Improve this level's minimum with the current node.\n      if ((tree[i] as number) < best) best = tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Gather present children for the following level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "DFS by depth",
        approach: "Keep a running minimum in each depth's slot.",
        js: "function levelMins(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = out[depth] === undefined ? tree[i] : Math.min(out[depth], tree[i]);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        ts: "function levelMins(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = out[depth] === undefined ? (tree[i] as number) : Math.min(out[depth], tree[i] as number);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        commentedCode: {
          js: "function levelMins(tree) {\n  // Store the smallest value encountered at each depth.\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize a new depth, or compare this value with its current minimum.\n    out[depth] = out[depth] === undefined ? tree[i] : Math.min(out[depth], tree[i]);\n    // Visit both subtrees so no value on the level is skipped.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
          ts: "function levelMins(tree: Array<number | null>): number[] {\n  // Store the smallest value encountered at each depth.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize a new depth, or compare this value with its current minimum.\n    out[depth] = out[depth] === undefined ? (tree[i] as number) : Math.min(out[depth], tree[i] as number);\n    // Visit both subtrees so no value on the level is skipped.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tb-level-sizes",
    slug: "tree-level-sizes",
    title: "Nodes per Level",
    difficulty: "easy",
    patternIds: P,
    statement: `Return how many nodes sit on each level, top to bottom.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[1,2]" },
      { input: "[]", output: "[]" },
      { input: "[1]", output: "[1]" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "levelSizes",
    starter: {
      js: "function levelSizes(tree) {\n  // Node count per level.\n}\n",
      ts: "function levelSizes(tree: Array<number | null>): number[] {\n  // Node count per level.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [1, 2] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [1] },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [1, 2, 2] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [1, 2, 3] },
      { args: [[1, null, 2]], expected: [1, 1] },
      { args: [[1, 2, null, 4]], expected: [1, 1, 1] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [1, 2, 4] },
      { args: [[2, 1, 3]], expected: [1, 2] },
    ],
    hints: [
      "The size of a level is simply how many indices it holds.",
      "Push level.length before expanding to the next level.",
      "Missing children never enter the next level.",
    ],
    solutions: [
      {
        label: "Level sweep",
        approach: "Record each level's length as you expand.",
        js: "function levelSizes(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    out.push(level.length);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
        ts: "function levelSizes(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    out.push(level.length);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function levelSizes(tree) {\n  // Append the number of present nodes at each depth.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    // The frontier contains exactly all nodes on the current level.\n    out.push(level.length);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Only present children count toward the following frontier's size.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
          ts: "function levelSizes(tree: Array<number | null>): number[] {\n  // Append the number of present nodes at each depth.\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    // The frontier contains exactly all nodes on the current level.\n    out.push(level.length);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Only present children count toward the following frontier's size.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "Count by depth",
        approach: "Increment a per-depth counter during a DFS.",
        js: "function levelSizes(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = (out[depth] || 0) + 1;\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        ts: "function levelSizes(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = (out[depth] || 0) + 1;\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        commentedCode: {
          js: "function levelSizes(tree) {\n  // Use each depth as the index of its node counter.\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize an unseen depth at zero, then count this real node.\n    out[depth] = (out[depth] || 0) + 1;\n    // Count both child subtrees on the next depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
          ts: "function levelSizes(tree: Array<number | null>): number[] {\n  // Use each depth as the index of its node counter.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize an unseen depth at zero, then count this real node.\n    out[depth] = (out[depth] || 0) + 1;\n    // Count both child subtrees on the next depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "tb-deepest-leftmost",
    slug: "tree-deepest-leftmost",
    title: "Bottom-Left Value",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the leftmost value on the tree's deepest level, or -1 if the tree is empty.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "2" },
      { input: "[]", output: "-1" },
      { input: "[1]", output: "1" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "deepestLeftmost",
    starter: {
      js: "function deepestLeftmost(tree) {\n  // Leftmost value on the deepest level, or -1.\n}\n",
      ts: "function deepestLeftmost(tree: Array<number | null>): number {\n  // Leftmost value on the deepest level, or -1.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: 2 },
      { args: [[]], expected: -1 },
      { args: [[1]], expected: 1 },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: 15 },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: 4 },
      { args: [[1, null, 2]], expected: 2 },
      { args: [[1, 2, null, 4]], expected: 4 },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: 1 },
      { args: [[2, 1, 3]], expected: 1 },
    ],
    hints: [
      "Sweep level by level and keep overwriting a 'first value of this level' variable.",
      "When the sweep ends, that variable holds the deepest level's first value.",
      "Guard the empty tree with -1.",
    ],
    solutions: [
      {
        label: "Level sweep, keep the last first-value",
        approach: "Each level overwrites the answer, so the deepest wins.",
        js: "function deepestLeftmost(tree) {\n  if (tree.length === 0 || tree[0] == null) return -1;\n  let level = [0], answer = tree[0];\n  while (level.length) {\n    answer = tree[level[0]];\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return answer;\n}\n",
        ts: "function deepestLeftmost(tree: Array<number | null>): number {\n  if (tree.length === 0 || tree[0] == null) return -1;\n  let level: number[] = [0], answer = tree[0] as number;\n  while (level.length) {\n    answer = tree[level[0]] as number;\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return answer;\n}\n",
        commentedCode: {
          js: "function deepestLeftmost(tree) {\n  // The problem's sentinel handles a tree with no root.\n  if (tree.length === 0 || tree[0] == null) return -1;\n  // Begin with the root frontier and a valid provisional answer.\n  let level = [0], answer = tree[0];\n  while (level.length) {\n    // Overwrite with the leftmost node of every successively deeper level.\n    answer = tree[level[0]];\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Left-before-right expansion keeps the next frontier ordered.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  // The final overwrite came from the deepest non-empty level.\n  return answer;\n}\n",
          ts: "function deepestLeftmost(tree: Array<number | null>): number {\n  // The problem's sentinel handles a tree with no root.\n  if (tree.length === 0 || tree[0] == null) return -1;\n  // Begin with the root frontier and a valid provisional answer.\n  let level: number[] = [0], answer = tree[0] as number;\n  while (level.length) {\n    // Overwrite with the leftmost node of every successively deeper level.\n    answer = tree[level[0]] as number;\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Left-before-right expansion keeps the next frontier ordered.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  // The final overwrite came from the deepest non-empty level.\n  return answer;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
      {
        label: "DFS tracking the deepest depth",
        approach: "Record the first node found at a strictly deeper level.",
        js: "function deepestLeftmost(tree) {\n  let bestDepth = -1, answer = -1;\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (depth > bestDepth) { bestDepth = depth; answer = tree[i]; }\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return answer;\n}\n",
        ts: "function deepestLeftmost(tree: Array<number | null>): number {\n  let bestDepth = -1, answer = -1;\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (depth > bestDepth) { bestDepth = depth; answer = tree[i] as number; }\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return answer;\n}\n",
        commentedCode: {
          js: "function deepestLeftmost(tree) {\n  // Keep the deepest discovered depth and its first node's value.\n  let bestDepth = -1, answer = -1;\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // A strictly new depth is reached first through the leftmost available path.\n    if (depth > bestDepth) { bestDepth = depth; answer = tree[i]; }\n    // Left-first traversal preserves that first-node property at every depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  // Empty trees keep -1; otherwise the deepest first node remains recorded.\n  return answer;\n}\n",
          ts: "function deepestLeftmost(tree: Array<number | null>): number {\n  // Keep the deepest discovered depth and its first node's value.\n  let bestDepth = -1, answer = -1;\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // A strictly new depth is reached first through the leftmost available path.\n    if (depth > bestDepth) { bestDepth = depth; answer = tree[i] as number; }\n    // Left-first traversal preserves that first-node property at every depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  // Empty trees keep -1; otherwise the deepest first node remains recorded.\n  return answer;\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
    ],
  },
];

export const treeBfsProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const treeBfsMcqs: QuizQuestion[] = [
  {
    id: "s5-tb-queue",
    kind: "mcq",
    prompt: "Level-order traversal of a tree is naturally implemented with:",
    options: ["a stack", "a queue", "a hash map", "a heap"],
    answerIndex: 1,
    explanation: "First-in-first-out order is exactly what visiting level by level requires.",
  },
  {
    id: "s5-tb-space",
    kind: "mcq",
    prompt: "In the worst case, the queue in a level-order traversal holds how many nodes?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "The widest level of a balanced tree holds about n/2 nodes, so space is O(n).",
  },
];

export const treeBfsModule: Module = {
  id: "m-pat-tree-bfs",
  stageId: S,
  title: "Tree BFS",
  kind: "patternModule",
  summary: "Level-by-level traversal with a queue — anything that asks about levels or shortest depth.",
  lessonSections: [
    {
      heading: "One level at a time",
      body: `Breadth-first traversal visits every node at depth *d* before any node at depth *d+1*. The classic implementation uses a **queue**; the tidiest version keeps the current level as an array and builds the next one from it, so you always know exactly where a level starts and ends.

\`\`\`js
const tree = [1, 2, 3, 4, 5]; // level order encoding
let level = [0], out = [];
while (level.length) {
  const vals = [], next = [];
  for (const i of level) {
    vals.push(tree[i]);
    for (const c of [2 * i + 1, 2 * i + 2]) {
      if (c < tree.length && tree[c] != null) next.push(c);
    }
  }
  out.push(vals);
  level = next;
}
console.log(out); // [[1], [2, 3], [4, 5]]
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for tree BFS when the question mentions:

- **levels** — group by level, sum/max/min per level, level sizes, zigzag order,
- a **side view** (first or last node of each level),
- the **shallowest** leaf or shortest depth — BFS finds it without exploring deeper branches,
- the **deepest / bottom-most** node, where the last level processed is the answer.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Level-boundary template
let level = [rootIndex];
let depth = 0;
while (level.length) {
  const next: number[] = [];
  for (const i of level) {
    // ...use tree[i], knowing it is at \`depth\`
    for (const c of [2 * i + 1, 2 * i + 2]) if (exists(c)) next.push(c);
  }
  level = next;
  depth++;
}
\`\`\`

**Pitfalls:** losing the level boundary (if you push and pop one shared queue without recording each level's size, you can't tell where a level ends); pushing missing children and later reading \`null\`; assuming the "rightmost" node of a level is a right child — it needn't be. Note that many level questions can also be solved by DFS carrying a \`depth\` argument. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "tb-level-order",
  drillProblemIds: [
    "tb-level-order",
    "tb-level-count",
    "tb-level-sums",
    "tb-right-side-view",
    "tb-level-maxes",
    "tb-zigzag",
  ],
  testPoolProblemIds: [
    "tb-left-side-view",
    "tb-level-mins",
    "tb-level-sizes",
    "tb-deepest-leftmost",
  ],
  complexityQuestionIds: ["s5-tb-queue", "s5-tb-space"],
  badgeId: "badge-pat-tree-bfs",
  prerequisiteModuleIds: ["m-pat-tree-dfs"],
};
