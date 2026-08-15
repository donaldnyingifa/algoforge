import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s5";
const P = ["tree-dfs"];

/**
 * Tree encoding used across Stage 5: a complete-array (heap-style) level order
 * where the children of index i live at 2i+1 and 2i+2, and `null` marks a
 * missing node. Indices past the end are treated as missing.
 */
const NOTE =
  "The tree is given as an array in level order: the children of index `i` are at `2i+1` and `2i+2`, and `null` means no node.";

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "td-max-depth",
    slug: "tree-max-depth",
    title: "Maximum Depth",
    difficulty: "easy",
    patternIds: P,
    statement: `Return the maximum depth of the tree, counted in **nodes** (an empty tree has depth 0).\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "2" },
      { input: "[]", output: "0" },
      { input: "[1]", output: "1" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "maxDepth",
    starter: {
      js: "function maxDepth(tree) {\n  // Depth in nodes; empty tree is 0.\n}\n",
      ts: "function maxDepth(tree: Array<number | null>): number {\n  // Depth in nodes; empty tree is 0.\n  return 0;\n}\n",
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
      "The depth of a node is 1 plus the deeper of its two subtrees.",
      "A missing node (out of range or null) contributes depth 0.",
      "go(i) = tree[i] == null ? 0 : 1 + max(go(2i+1), go(2i+2)).",
    ],
    solutions: [
      {
        label: "Recursive DFS",
        approach: "Recurse into both children and take the deeper side.",
        js: "function maxDepth(tree) {\n  const go = (i) => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  return go(0);\n}\n",
        ts: "function maxDepth(tree: Array<number | null>): number {\n  const go = (i: number): number => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  return go(0);\n}\n",
        commentedCode: {
          js: "function maxDepth(tree) {\n  // Return the depth of the subtree rooted at array index i.\n  const go = (i) => {\n    // A missing node contributes no levels to the depth.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Heap-style array encoding places the two children at 2i+1 and 2i+2.\n    const leftDepth = go(2 * i + 1);\n    const rightDepth = go(2 * i + 2);\n\n    // Count this node plus the deeper of its two subtrees.\n    return 1 + Math.max(leftDepth, rightDepth);\n  };\n\n  // Index 0 is the root; an empty or null root naturally returns 0.\n  return go(0);\n}\n",
          ts: "function maxDepth(tree: Array<number | null>): number {\n  // Return the depth of the subtree rooted at array index i.\n  const go = (i: number): number => {\n    // A missing node contributes no levels to the depth.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Heap-style array encoding places the two children at 2i+1 and 2i+2.\n    const leftDepth = go(2 * i + 1);\n    const rightDepth = go(2 * i + 2);\n\n    // Count this node plus the deeper of its two subtrees.\n    return 1 + Math.max(leftDepth, rightDepth);\n  };\n\n  // Index 0 is the root; an empty or null root naturally returns 0.\n  return go(0);\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
      {
        label: "Deepest occupied index",
        approach: "In this encoding, depth follows from the deepest non-null index.",
        js: "function maxDepth(tree) {\n  let deepest = -1;\n  for (let i = 0; i < tree.length; i++) if (tree[i] != null) deepest = i;\n  if (deepest === -1) return 0;\n  let depth = 0, span = 1, start = 0;\n  while (start <= deepest) { depth++; start += span; span *= 2; }\n  return depth;\n}\n",
        ts: "function maxDepth(tree: Array<number | null>): number {\n  let deepest = -1;\n  for (let i = 0; i < tree.length; i++) if (tree[i] != null) deepest = i;\n  if (deepest === -1) return 0;\n  let depth = 0, span = 1, start = 0;\n  while (start <= deepest) { depth++; start += span; span *= 2; }\n  return depth;\n}\n",
        commentedCode: {
          js: "function maxDepth(tree) {\n  // Remember the largest array index that actually contains a node.\n  let deepest = -1;\n  for (let i = 0; i < tree.length; i++) {\n    // Null slots do not contribute a level to the represented tree.\n    if (tree[i] != null) deepest = i;\n  }\n\n  // No occupied index means the tree is empty.\n  if (deepest === -1) return 0;\n\n  // Level 0 starts at index 0 and contains one array position.\n  let depth = 0;\n  let span = 1;\n  let start = 0;\n\n  // Advance through complete-array level boundaries until reaching the deepest node.\n  while (start <= deepest) {\n    depth++;\n    start += span;\n    span *= 2;\n  }\n\n  // The number of crossed levels is the depth measured in nodes.\n  return depth;\n}\n",
          ts: "function maxDepth(tree: Array<number | null>): number {\n  // Remember the largest array index that actually contains a node.\n  let deepest = -1;\n  for (let i = 0; i < tree.length; i++) {\n    // Null slots do not contribute a level to the represented tree.\n    if (tree[i] != null) deepest = i;\n  }\n\n  // No occupied index means the tree is empty.\n  if (deepest === -1) return 0;\n\n  // Level 0 starts at index 0 and contains one array position.\n  let depth = 0;\n  let span = 1;\n  let start = 0;\n\n  // Advance through complete-array level boundaries until reaching the deepest node.\n  while (start <= deepest) {\n    depth++;\n    start += span;\n    span *= 2;\n  }\n\n  // The number of crossed levels is the depth measured in nodes.\n  return depth;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "td-sum-nodes",
    slug: "tree-sum",
    title: "Sum of All Nodes",
    difficulty: "easy",
    patternIds: P,
    statement: `Return the sum of every node's value.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "6" },
      { input: "[]", output: "0" },
      { input: "[1]", output: "1" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "sumTree",
    starter: {
      js: "function sumTree(tree) {\n  // Sum of every node value.\n}\n",
      ts: "function sumTree(tree: Array<number | null>): number {\n  // Sum of every node value.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: 6 },
      { args: [[]], expected: 0 },
      { args: [[1]], expected: 1 },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: 54 },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: 21 },
      { args: [[1, null, 2]], expected: 3 },
      { args: [[1, 2, null, 4]], expected: 7 },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: 37 },
      { args: [[2, 1, 3]], expected: 6 },
    ],
    hints: [
      "A subtree's sum is its root value plus both child subtree sums.",
      "Missing nodes contribute 0.",
      "Or simply add every non-null entry in the array.",
    ],
    solutions: [
      {
        label: "Recursive DFS",
        approach: "Sum the node plus both subtrees.",
        js: "function sumTree(tree) {\n  const go = (i) => (i >= tree.length || tree[i] == null ? 0 : tree[i] + go(2 * i + 1) + go(2 * i + 2));\n  return go(0);\n}\n",
        ts: "function sumTree(tree: Array<number | null>): number {\n  const go = (i: number): number => (i >= tree.length || tree[i] == null ? 0 : (tree[i] as number) + go(2 * i + 1) + go(2 * i + 2));\n  return go(0);\n}\n",
        commentedCode: {
          js: "function sumTree(tree) {\n  // Compute the total stored in the subtree rooted at index i.\n  const go = (i) => {\n    // An out-of-range or null slot contributes nothing to the sum.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Sum this node with the totals from both child subtrees.\n    const leftSum = go(2 * i + 1);\n    const rightSum = go(2 * i + 2);\n    return tree[i] + leftSum + rightSum;\n  };\n\n  // Start at the root so every reachable node is included once.\n  return go(0);\n}\n",
          ts: "function sumTree(tree: Array<number | null>): number {\n  // Compute the total stored in the subtree rooted at index i.\n  const go = (i: number): number => {\n    // An out-of-range or null slot contributes nothing to the sum.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Sum this node with the totals from both child subtrees.\n    const leftSum = go(2 * i + 1);\n    const rightSum = go(2 * i + 2);\n    return (tree[i] as number) + leftSum + rightSum;\n  };\n\n  // Start at the root so every reachable node is included once.\n  return go(0);\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
      {
        label: "Sum the array",
        approach: "Every stored node appears once in the encoding.",
        js: "function sumTree(tree) {\n  let s = 0;\n  for (const v of tree) if (v != null) s += v;\n  return s;\n}\n",
        ts: "function sumTree(tree: Array<number | null>): number {\n  let s = 0;\n  for (const v of tree) if (v != null) s += v;\n  return s;\n}\n",
        commentedCode: {
          js: "function sumTree(tree) {\n  // Accumulate the value of every occupied array slot.\n  let sum = 0;\n  for (const value of tree) {\n    // Null marks a missing node, so only numbers belong in the total.\n    if (value != null) sum += value;\n  }\n\n  // Empty trees and all-null encodings leave the total at zero.\n  return sum;\n}\n",
          ts: "function sumTree(tree: Array<number | null>): number {\n  // Accumulate the value of every occupied array slot.\n  let sum = 0;\n  for (const value of tree) {\n    // Null marks a missing node, so only numbers belong in the total.\n    if (value != null) sum += value;\n  }\n\n  // Empty trees and all-null encodings leave the total at zero.\n  return sum;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "td-preorder",
    slug: "tree-preorder",
    title: "Preorder Traversal",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the node values in **preorder**: node, then left subtree, then right subtree.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[1,2,3]" },
      { input: "[]", output: "[]" },
      { input: "[1,2,3,4,5,null,6]", output: "[1,2,4,5,3,6]" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "preorder",
    starter: {
      js: "function preorder(tree) {\n  // node, left, right.\n}\n",
      ts: "function preorder(tree: Array<number | null>): number[] {\n  // node, left, right.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [1, 2, 3] },
      { args: [[]], expected: [] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [1, 2, 4, 5, 3, 6] },
    ],
    hidden: [
      { args: [[1]], expected: [1] },
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [3, 9, 20, 15, 7] },
      { args: [[1, null, 2]], expected: [1, 2] },
      { args: [[1, 2, null, 4]], expected: [1, 2, 4] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [5, 3, 1, 4, 8, 7, 9] },
      { args: [[2, 1, 3]], expected: [2, 1, 3] },
    ],
    hints: [
      "Visit the node first, then recurse left, then right.",
      "Stop as soon as an index is out of range or null.",
      "go(i): push tree[i]; go(2i+1); go(2i+2).",
    ],
    solutions: [
      {
        label: "Recursive DFS",
        approach: "Emit the node before descending.",
        js: "function preorder(tree) {\n  const out = [];\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out.push(tree[i]);\n    go(2 * i + 1);\n    go(2 * i + 2);\n  };\n  go(0);\n  return out;\n}\n",
        ts: "function preorder(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out.push(tree[i] as number);\n    go(2 * i + 1);\n    go(2 * i + 2);\n  };\n  go(0);\n  return out;\n}\n",
        commentedCode: {
          js: "function preorder(tree) {\n  // Collect nodes in node-left-right order.\n  const out = [];\n\n  const go = (i) => {\n    // Stop when this array index does not represent a node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Preorder emits the current node before exploring either child.\n    out.push(tree[i]);\n    // Then visit the complete left subtree.\n    go(2 * i + 1);\n    // Finally visit the complete right subtree.\n    go(2 * i + 2);\n  };\n\n  // Traverse from the root and return the recorded visit order.\n  go(0);\n  return out;\n}\n",
          ts: "function preorder(tree: Array<number | null>): number[] {\n  // Collect nodes in node-left-right order.\n  const out: number[] = [];\n\n  const go = (i: number): void => {\n    // Stop when this array index does not represent a node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Preorder emits the current node before exploring either child.\n    out.push(tree[i] as number);\n    // Then visit the complete left subtree.\n    go(2 * i + 1);\n    // Finally visit the complete right subtree.\n    go(2 * i + 2);\n  };\n\n  // Traverse from the root and return the recorded visit order.\n  go(0);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
      {
        label: "Explicit stack",
        approach: "Push the right child before the left so the left pops first.",
        js: "function preorder(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  const stack = [0];\n  while (stack.length) {\n    const i = stack.pop();\n    if (i >= tree.length || tree[i] == null) continue;\n    out.push(tree[i]);\n    stack.push(2 * i + 2);\n    stack.push(2 * i + 1);\n  }\n  return out;\n}\n",
        ts: "function preorder(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  const stack: number[] = [0];\n  while (stack.length) {\n    const i = stack.pop() as number;\n    if (i >= tree.length || tree[i] == null) continue;\n    out.push(tree[i] as number);\n    stack.push(2 * i + 2);\n    stack.push(2 * i + 1);\n  }\n  return out;\n}\n",
        commentedCode: {
          js: "function preorder(tree) {\n  // Collect node values in preorder as indices are processed.\n  const out = [];\n  // There is nothing to traverse when the root is missing.\n  if (tree.length === 0 || tree[0] == null) return out;\n\n  // Store array indices whose nodes still need to be visited.\n  const stack = [0];\n  while (stack.length) {\n    // LIFO order determines which node is visited next.\n    const i = stack.pop();\n    // Ignore child indices that do not contain nodes.\n    if (i >= tree.length || tree[i] == null) continue;\n\n    // Emit the node as soon as it is popped: the node part of preorder.\n    out.push(tree[i]);\n    // Push right first so the left child is popped and processed first.\n    stack.push(2 * i + 2);\n    stack.push(2 * i + 1);\n  }\n\n  return out;\n}\n",
          ts: "function preorder(tree: Array<number | null>): number[] {\n  // Collect node values in preorder as indices are processed.\n  const out: number[] = [];\n  // There is nothing to traverse when the root is missing.\n  if (tree.length === 0 || tree[0] == null) return out;\n\n  // Store array indices whose nodes still need to be visited.\n  const stack: number[] = [0];\n  while (stack.length) {\n    // LIFO order determines which node is visited next.\n    const i = stack.pop() as number;\n    // Ignore child indices that do not contain nodes.\n    if (i >= tree.length || tree[i] == null) continue;\n\n    // Emit the node as soon as it is popped: the node part of preorder.\n    out.push(tree[i] as number);\n    // Push right first so the left child is popped and processed first.\n    stack.push(2 * i + 2);\n    stack.push(2 * i + 1);\n  }\n\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "td-path-sum",
    slug: "tree-path-sum",
    title: "Root-to-Leaf Path Sum",
    difficulty: "medium",
    patternIds: P,
    statement: `Return \`true\` if some root-to-leaf path's values add up exactly to \`target\`. An empty tree has no paths.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3], 3", output: "true" },
      { input: "[1,2,3], 5", output: "false" },
      { input: "[], 0", output: "false" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "hasPathSum",
    starter: {
      js: "function hasPathSum(tree, target) {\n  // True if a root-to-leaf path sums to target.\n}\n",
      ts: "function hasPathSum(tree: Array<number | null>, target: number): boolean {\n  // True if a root-to-leaf path sums to target.\n  return false;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3], 3], expected: true },
      { args: [[1, 2, 3], 5], expected: false },
      { args: [[], 0], expected: false },
    ],
    hidden: [
      { args: [[1], 1], expected: true },
      { args: [[1], 0], expected: false },
      { args: [[3, 9, 20, null, null, 15, 7], 38], expected: true },
      { args: [[3, 9, 20, null, null, 15, 7], 12], expected: true },
      { args: [[1, 2, 3, 4, 5, null, 6], 10], expected: true },
      { args: [[5, 3, 8, 1, 4, 7, 9], 21], expected: false },
    ],
    hints: [
      "Carry the running total down the tree, subtracting as you descend.",
      "A leaf is a node whose two children are both missing.",
      "At a leaf, check whether the remaining target equals the node's value.",
    ],
    solutions: [
      {
        label: "DFS carrying the remainder",
        approach: "Subtract each node's value and test the remainder at leaves.",
        js: "function hasPathSum(tree, target) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  const go = (i, remaining) => {\n    if (missing(i)) return false;\n    const left = 2 * i + 1, right = 2 * i + 2;\n    const rest = remaining - tree[i];\n    if (missing(left) && missing(right)) return rest === 0;\n    return go(left, rest) || go(right, rest);\n  };\n  return go(0, target);\n}\n",
        ts: "function hasPathSum(tree: Array<number | null>, target: number): boolean {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  const go = (i: number, remaining: number): boolean => {\n    if (missing(i)) return false;\n    const left = 2 * i + 1, right = 2 * i + 2;\n    const rest = remaining - (tree[i] as number);\n    if (missing(left) && missing(right)) return rest === 0;\n    return go(left, rest) || go(right, rest);\n  };\n  return go(0, target);\n}\n",
        commentedCode: {
          js: "function hasPathSum(tree, target) {\n  // Treat out-of-range and null slots uniformly as missing nodes.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n\n  const go = (i, remaining) => {\n    // A missing node cannot complete a root-to-leaf path.\n    if (missing(i)) return false;\n\n    // Locate this node's children in the heap-style array encoding.\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // Remove this node's value from the sum the path still needs.\n    const rest = remaining - tree[i];\n\n    // Only a leaf can finish a valid path; it succeeds when nothing remains.\n    if (missing(left) && missing(right)) return rest === 0;\n\n    // Continue down either existing branch with the same updated remainder.\n    return go(left, rest) || go(right, rest);\n  };\n\n  // Begin at the root needing the full target sum.\n  return go(0, target);\n}\n",
          ts: "function hasPathSum(tree: Array<number | null>, target: number): boolean {\n  // Treat out-of-range and null slots uniformly as missing nodes.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n\n  const go = (i: number, remaining: number): boolean => {\n    // A missing node cannot complete a root-to-leaf path.\n    if (missing(i)) return false;\n\n    // Locate this node's children in the heap-style array encoding.\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // Remove this node's value from the sum the path still needs.\n    const rest = remaining - (tree[i] as number);\n\n    // Only a leaf can finish a valid path; it succeeds when nothing remains.\n    if (missing(left) && missing(right)) return rest === 0;\n\n    // Continue down either existing branch with the same updated remainder.\n    return go(left, rest) || go(right, rest);\n  };\n\n  // Begin at the root needing the full target sum.\n  return go(0, target);\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
      {
        label: "Collect every path sum",
        approach: "Gather all root-to-leaf sums, then check membership.",
        js: "function hasPathSum(tree, target) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  const sums = [];\n  const go = (i, acc) => {\n    if (missing(i)) return;\n    const total = acc + tree[i];\n    const left = 2 * i + 1, right = 2 * i + 2;\n    if (missing(left) && missing(right)) { sums.push(total); return; }\n    go(left, total);\n    go(right, total);\n  };\n  go(0, 0);\n  return sums.includes(target);\n}\n",
        ts: "function hasPathSum(tree: Array<number | null>, target: number): boolean {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  const sums: number[] = [];\n  const go = (i: number, acc: number) => {\n    if (missing(i)) return;\n    const total = acc + (tree[i] as number);\n    const left = 2 * i + 1, right = 2 * i + 2;\n    if (missing(left) && missing(right)) { sums.push(total); return; }\n    go(left, total);\n    go(right, total);\n  };\n  go(0, 0);\n  return sums.includes(target);\n}\n",
        commentedCode: {
          js: "function hasPathSum(tree, target) {\n  // Recognize indices that do not hold tree nodes.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  // Store the completed sum of every root-to-leaf path.\n  const sums = [];\n\n  const go = (i, accumulated) => {\n    // Missing branches do not produce path sums.\n    if (missing(i)) return;\n\n    // Extend the current root-to-node path with this node's value.\n    const total = accumulated + tree[i];\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n\n    // A path is complete only when the current node has no children.\n    if (missing(left) && missing(right)) {\n      sums.push(total);\n      return;\n    }\n\n    // Explore both branches while carrying the sum through this node.\n    go(left, total);\n    go(right, total);\n  };\n\n  // Collect all complete path sums, then test whether the target is among them.\n  go(0, 0);\n  return sums.includes(target);\n}\n",
          ts: "function hasPathSum(tree: Array<number | null>, target: number): boolean {\n  // Recognize indices that do not hold tree nodes.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n  // Store the completed sum of every root-to-leaf path.\n  const sums: number[] = [];\n\n  const go = (i: number, accumulated: number): void => {\n    // Missing branches do not produce path sums.\n    if (missing(i)) return;\n\n    // Extend the current root-to-node path with this node's value.\n    const total = accumulated + (tree[i] as number);\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n\n    // A path is complete only when the current node has no children.\n    if (missing(left) && missing(right)) {\n      sums.push(total);\n      return;\n    }\n\n    // Explore both branches while carrying the sum through this node.\n    go(left, total);\n    go(right, total);\n  };\n\n  // Collect all complete path sums, then test whether the target is among them.\n  go(0, 0);\n  return sums.includes(target);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "td-count-leaves",
    slug: "tree-count-leaves",
    title: "Count the Leaves",
    difficulty: "medium",
    patternIds: P,
    statement: `Return how many leaves the tree has — nodes with no children.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "2" },
      { input: "[]", output: "0" },
      { input: "[1]", output: "1" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "countLeaves",
    starter: {
      js: "function countLeaves(tree) {\n  // Number of nodes with no children.\n}\n",
      ts: "function countLeaves(tree: Array<number | null>): number {\n  // Number of nodes with no children.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: 2 },
      { args: [[]], expected: 0 },
      { args: [[1]], expected: 1 },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: 3 },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: 3 },
      { args: [[1, null, 2]], expected: 1 },
      { args: [[1, 2, null, 4]], expected: 1 },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: 4 },
      { args: [[2, 1, 3]], expected: 2 },
    ],
    hints: [
      "A leaf has both children missing.",
      "Recurse, adding 1 whenever you reach a leaf.",
      "if (missing(left) && missing(right)) return 1; else return go(left) + go(right).",
    ],
    solutions: [
      {
        label: "Recursive DFS",
        approach: "Count 1 at each leaf, otherwise sum the subtrees.",
        js: "function countLeaves(tree) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  const go = (i) => {\n    if (missing(i)) return 0;\n    const left = 2 * i + 1, right = 2 * i + 2;\n    if (missing(left) && missing(right)) return 1;\n    return go(left) + go(right);\n  };\n  return go(0);\n}\n",
        ts: "function countLeaves(tree: Array<number | null>): number {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  const go = (i: number): number => {\n    if (missing(i)) return 0;\n    const left = 2 * i + 1, right = 2 * i + 2;\n    if (missing(left) && missing(right)) return 1;\n    return go(left) + go(right);\n  };\n  return go(0);\n}\n",
        commentedCode: {
          js: "function countLeaves(tree) {\n  // Treat both null entries and positions past the array as missing nodes.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n\n  const go = (i) => {\n    // A missing branch contains no leaves.\n    if (missing(i)) return 0;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // A present node with no present children is exactly one leaf.\n    if (missing(left) && missing(right)) return 1;\n\n    // Otherwise, every leaf lies in one of the two child subtrees.\n    return go(left) + go(right);\n  };\n\n  // Count all leaves reachable from the root.\n  return go(0);\n}\n",
          ts: "function countLeaves(tree: Array<number | null>): number {\n  // Treat both null entries and positions past the array as missing nodes.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n\n  const go = (i: number): number => {\n    // A missing branch contains no leaves.\n    if (missing(i)) return 0;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // A present node with no present children is exactly one leaf.\n    if (missing(left) && missing(right)) return 1;\n\n    // Otherwise, every leaf lies in one of the two child subtrees.\n    return go(left) + go(right);\n  };\n\n  // Count all leaves reachable from the root.\n  return go(0);\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
      {
        label: "Scan the array",
        approach: "A stored node is a leaf when neither child index holds a value.",
        js: "function countLeaves(tree) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  let count = 0;\n  for (let i = 0; i < tree.length; i++) {\n    if (tree[i] == null) continue;\n    if (missing(2 * i + 1) && missing(2 * i + 2)) count++;\n  }\n  return count;\n}\n",
        ts: "function countLeaves(tree: Array<number | null>): number {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  let count = 0;\n  for (let i = 0; i < tree.length; i++) {\n    if (tree[i] == null) continue;\n    if (missing(2 * i + 1) && missing(2 * i + 2)) count++;\n  }\n  return count;\n}\n",
        commentedCode: {
          js: "function countLeaves(tree) {\n  // Recognize child indices that do not contain nodes.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  let count = 0;\n\n  // Inspect every slot that could represent a node.\n  for (let i = 0; i < tree.length; i++) {\n    // A null slot is not a node and therefore cannot be a leaf.\n    if (tree[i] == null) continue;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // Count this node exactly when neither child exists.\n    if (missing(left) && missing(right)) count++;\n  }\n\n  return count;\n}\n",
          ts: "function countLeaves(tree: Array<number | null>): number {\n  // Recognize child indices that do not contain nodes.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n  let count = 0;\n\n  // Inspect every slot that could represent a node.\n  for (let i = 0; i < tree.length; i++) {\n    // A null slot is not a node and therefore cannot be a leaf.\n    if (tree[i] == null) continue;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // Count this node exactly when neither child exists.\n    if (missing(left) && missing(right)) count++;\n  }\n\n  return count;\n}\n",
        },
        time: "O(n)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "td-diameter",
    slug: "tree-diameter",
    title: "Diameter of the Tree",
    difficulty: "hard",
    patternIds: P,
    statement: `Return the length of the longest path between any two nodes, measured in **edges**. The path need not pass through the root.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "2" },
      { input: "[]", output: "0" },
      { input: "[1]", output: "0" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "diameter",
    starter: {
      js: "function diameter(tree) {\n  // Longest path between any two nodes, in edges.\n}\n",
      ts: "function diameter(tree: Array<number | null>): number {\n  // Longest path between any two nodes, in edges.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: 2 },
      { args: [[]], expected: 0 },
      { args: [[1]], expected: 0 },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: 3 },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: 4 },
      { args: [[1, null, 2]], expected: 1 },
      { args: [[1, 2, null, 4]], expected: 2 },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: 4 },
      { args: [[1, 2]], expected: 1 },
    ],
    hints: [
      "At each node, the best path through it is (left height) + (right height) in edges.",
      "Compute heights bottom-up while tracking the best total seen anywhere.",
      "Return the height so the parent can use it, but record left+right as a candidate.",
    ],
    solutions: [
      {
        label: "Height DFS with a running best",
        approach: "One traversal computes heights and the widest path through each node.",
        js: "function diameter(tree) {\n  let best = 0;\n  const height = (i) => {\n    if (i >= tree.length || tree[i] == null) return 0;\n    const l = height(2 * i + 1);\n    const r = height(2 * i + 2);\n    best = Math.max(best, l + r);\n    return 1 + Math.max(l, r);\n  };\n  height(0);\n  return best;\n}\n",
        ts: "function diameter(tree: Array<number | null>): number {\n  let best = 0;\n  const height = (i: number): number => {\n    if (i >= tree.length || tree[i] == null) return 0;\n    const l = height(2 * i + 1);\n    const r = height(2 * i + 2);\n    best = Math.max(best, l + r);\n    return 1 + Math.max(l, r);\n  };\n  height(0);\n  return best;\n}\n",
        commentedCode: {
          js: "function diameter(tree) {\n  // Track the longest edge-count path found anywhere in the tree.\n  let best = 0;\n\n  // Return this subtree's height in nodes so its parent can extend a path.\n  const height = (i) => {\n    // A missing subtree has height zero.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Compute child heights bottom-up before evaluating this node.\n    const leftHeight = height(2 * i + 1);\n    const rightHeight = height(2 * i + 2);\n\n    // A path through this node uses one downward edge per node of child height.\n    best = Math.max(best, leftHeight + rightHeight);\n\n    // The parent can continue through only the taller child branch.\n    return 1 + Math.max(leftHeight, rightHeight);\n  };\n\n  // The traversal updates best as a side effect at every occupied node.\n  height(0);\n  return best;\n}\n",
          ts: "function diameter(tree: Array<number | null>): number {\n  // Track the longest edge-count path found anywhere in the tree.\n  let best = 0;\n\n  // Return this subtree's height in nodes so its parent can extend a path.\n  const height = (i: number): number => {\n    // A missing subtree has height zero.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Compute child heights bottom-up before evaluating this node.\n    const leftHeight = height(2 * i + 1);\n    const rightHeight = height(2 * i + 2);\n\n    // A path through this node uses one downward edge per node of child height.\n    best = Math.max(best, leftHeight + rightHeight);\n\n    // The parent can continue through only the taller child branch.\n    return 1 + Math.max(leftHeight, rightHeight);\n  };\n\n  // The traversal updates best as a side effect at every occupied node.\n  height(0);\n  return best;\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
      {
        label: "Height per node",
        approach: "Recompute subtree heights at every node and take the best sum.",
        js: "function diameter(tree) {\n  const height = (i) => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(height(2 * i + 1), height(2 * i + 2)));\n  let best = 0;\n  for (let i = 0; i < tree.length; i++) {\n    if (tree[i] == null) continue;\n    best = Math.max(best, height(2 * i + 1) + height(2 * i + 2));\n  }\n  return best;\n}\n",
        ts: "function diameter(tree: Array<number | null>): number {\n  const height = (i: number): number => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(height(2 * i + 1), height(2 * i + 2)));\n  let best = 0;\n  for (let i = 0; i < tree.length; i++) {\n    if (tree[i] == null) continue;\n    best = Math.max(best, height(2 * i + 1) + height(2 * i + 2));\n  }\n  return best;\n}\n",
        commentedCode: {
          js: "function diameter(tree) {\n  // Compute a subtree's height in nodes whenever a candidate needs it.\n  const height = (i) => {\n    if (i >= tree.length || tree[i] == null) return 0;\n    return 1 + Math.max(height(2 * i + 1), height(2 * i + 2));\n  };\n\n  // Keep the widest path through any node seen so far.\n  let best = 0;\n  for (let i = 0; i < tree.length; i++) {\n    // Missing slots cannot be the center of a path.\n    if (tree[i] == null) continue;\n\n    // Joining the two child heights gives the edge count through this node.\n    const throughNode = height(2 * i + 1) + height(2 * i + 2);\n    best = Math.max(best, throughNode);\n  }\n\n  return best;\n}\n",
          ts: "function diameter(tree: Array<number | null>): number {\n  // Compute a subtree's height in nodes whenever a candidate needs it.\n  const height = (i: number): number => {\n    if (i >= tree.length || tree[i] == null) return 0;\n    return 1 + Math.max(height(2 * i + 1), height(2 * i + 2));\n  };\n\n  // Keep the widest path through any node seen so far.\n  let best = 0;\n  for (let i = 0; i < tree.length; i++) {\n    // Missing slots cannot be the center of a path.\n    if (tree[i] == null) continue;\n\n    // Joining the two child heights gives the edge count through this node.\n    const throughNode = height(2 * i + 1) + height(2 * i + 2);\n    best = Math.max(best, throughNode);\n  }\n\n  return best;\n}\n",
        },
        time: "O(n·h)",
        space: "O(h)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "td-inorder",
    slug: "tree-inorder",
    title: "Inorder Traversal",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the node values in **inorder**: left subtree, then node, then right subtree.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[2,1,3]" },
      { input: "[]", output: "[]" },
      { input: "[1,2,3,4,5,null,6]", output: "[4,2,5,1,3,6]" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "inorder",
    starter: {
      js: "function inorder(tree) {\n  // left, node, right.\n}\n",
      ts: "function inorder(tree: Array<number | null>): number[] {\n  // left, node, right.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [2, 1, 3] },
      { args: [[]], expected: [] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [4, 2, 5, 1, 3, 6] },
    ],
    hidden: [
      { args: [[1]], expected: [1] },
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [9, 3, 15, 20, 7] },
      { args: [[1, null, 2]], expected: [1, 2] },
      { args: [[1, 2, null, 4]], expected: [4, 2, 1] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [1, 3, 4, 5, 7, 8, 9] },
      { args: [[2, 1, 3]], expected: [1, 2, 3] },
    ],
    hints: [
      "Fully explore the left subtree before emitting the node.",
      "For a binary search tree this yields sorted order.",
      "go(2i+1); push tree[i]; go(2i+2).",
    ],
    solutions: [
      {
        label: "Recursive DFS",
        approach: "Left, node, right.",
        js: "function inorder(tree) {\n  const out = [];\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return;\n    go(2 * i + 1);\n    out.push(tree[i]);\n    go(2 * i + 2);\n  };\n  go(0);\n  return out;\n}\n",
        ts: "function inorder(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    go(2 * i + 1);\n    out.push(tree[i] as number);\n    go(2 * i + 2);\n  };\n  go(0);\n  return out;\n}\n",
        commentedCode: {
          js: "function inorder(tree) {\n  // Collect nodes in left-node-right order.\n  const out = [];\n\n  const go = (i) => {\n    // Stop before trying to visit an absent node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Inorder first emits every value in the left subtree.\n    go(2 * i + 1);\n    // Emit the current node after its left subtree is complete.\n    out.push(tree[i]);\n    // Then emit every value in the right subtree.\n    go(2 * i + 2);\n  };\n\n  go(0);\n  return out;\n}\n",
          ts: "function inorder(tree: Array<number | null>): number[] {\n  // Collect nodes in left-node-right order.\n  const out: number[] = [];\n\n  const go = (i: number): void => {\n    // Stop before trying to visit an absent node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Inorder first emits every value in the left subtree.\n    go(2 * i + 1);\n    // Emit the current node after its left subtree is complete.\n    out.push(tree[i] as number);\n    // Then emit every value in the right subtree.\n    go(2 * i + 2);\n  };\n\n  go(0);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
      {
        label: "Preorder then rearrange",
        approach: "Build the traversal by recursing into arrays and concatenating.",
        js: "function inorder(tree) {\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return [];\n    return [...go(2 * i + 1), tree[i], ...go(2 * i + 2)];\n  };\n  return go(0);\n}\n",
        ts: "function inorder(tree: Array<number | null>): number[] {\n  const go = (i: number): number[] => {\n    if (i >= tree.length || tree[i] == null) return [];\n    return [...go(2 * i + 1), tree[i] as number, ...go(2 * i + 2)];\n  };\n  return go(0);\n}\n",
        commentedCode: {
          js: "function inorder(tree) {\n  // Build and return a complete inorder array for the subtree at index i.\n  const go = (i) => {\n    // A missing subtree contributes no values to the traversal.\n    if (i >= tree.length || tree[i] == null) return [];\n\n    // Concatenate left traversal, current value, and right traversal.\n    const leftValues = go(2 * i + 1);\n    const rightValues = go(2 * i + 2);\n    return [...leftValues, tree[i], ...rightValues];\n  };\n\n  // The root's subtree is the entire tree.\n  return go(0);\n}\n",
          ts: "function inorder(tree: Array<number | null>): number[] {\n  // Build and return a complete inorder array for the subtree at index i.\n  const go = (i: number): number[] => {\n    // A missing subtree contributes no values to the traversal.\n    if (i >= tree.length || tree[i] == null) return [];\n\n    // Concatenate left traversal, current value, and right traversal.\n    const leftValues = go(2 * i + 1);\n    const rightValues = go(2 * i + 2);\n    return [...leftValues, tree[i] as number, ...rightValues];\n  };\n\n  // The root's subtree is the entire tree.\n  return go(0);\n}\n",
        },
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "td-postorder",
    slug: "tree-postorder",
    title: "Postorder Traversal",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the node values in **postorder**: left subtree, then right subtree, then node.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "[2,3,1]" },
      { input: "[]", output: "[]" },
      { input: "[1,2,3,4,5,null,6]", output: "[4,5,2,6,3,1]" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "postorder",
    starter: {
      js: "function postorder(tree) {\n  // left, right, node.\n}\n",
      ts: "function postorder(tree: Array<number | null>): number[] {\n  // left, right, node.\n  return [];\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: [2, 3, 1] },
      { args: [[]], expected: [] },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [4, 5, 2, 6, 3, 1] },
    ],
    hidden: [
      { args: [[1]], expected: [1] },
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [9, 15, 7, 20, 3] },
      { args: [[1, null, 2]], expected: [2, 1] },
      { args: [[1, 2, null, 4]], expected: [4, 2, 1] },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [1, 4, 3, 7, 9, 8, 5] },
      { args: [[2, 1, 3]], expected: [1, 3, 2] },
    ],
    hints: [
      "Emit the node only after both subtrees are done.",
      "This is the order you'd use to free or delete a tree safely.",
      "go(2i+1); go(2i+2); push tree[i].",
    ],
    solutions: [
      {
        label: "Recursive DFS",
        approach: "Left, right, then the node.",
        js: "function postorder(tree) {\n  const out = [];\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return;\n    go(2 * i + 1);\n    go(2 * i + 2);\n    out.push(tree[i]);\n  };\n  go(0);\n  return out;\n}\n",
        ts: "function postorder(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    go(2 * i + 1);\n    go(2 * i + 2);\n    out.push(tree[i] as number);\n  };\n  go(0);\n  return out;\n}\n",
        commentedCode: {
          js: "function postorder(tree) {\n  // Collect nodes in left-right-node order.\n  const out = [];\n\n  const go = (i) => {\n    // Missing nodes end their recursion branch immediately.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Complete both child subtrees before emitting the parent.\n    go(2 * i + 1);\n    go(2 * i + 2);\n    out.push(tree[i]);\n  };\n\n  go(0);\n  return out;\n}\n",
          ts: "function postorder(tree: Array<number | null>): number[] {\n  // Collect nodes in left-right-node order.\n  const out: number[] = [];\n\n  const go = (i: number): void => {\n    // Missing nodes end their recursion branch immediately.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Complete both child subtrees before emitting the parent.\n    go(2 * i + 1);\n    go(2 * i + 2);\n    out.push(tree[i] as number);\n  };\n\n  go(0);\n  return out;\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
      {
        label: "Reverse of a mirrored preorder",
        approach: "Node-right-left reversed gives left-right-node.",
        js: "function postorder(tree) {\n  const out = [];\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out.push(tree[i]);\n    go(2 * i + 2);\n    go(2 * i + 1);\n  };\n  go(0);\n  return out.reverse();\n}\n",
        ts: "function postorder(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out.push(tree[i] as number);\n    go(2 * i + 2);\n    go(2 * i + 1);\n  };\n  go(0);\n  return out.reverse();\n}\n",
        commentedCode: {
          js: "function postorder(tree) {\n  // First create node-right-left order, the mirror of preorder.\n  const out = [];\n\n  const go = (i) => {\n    // Do not emit or descend from a missing node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Emit the parent first for the temporary mirrored traversal.\n    out.push(tree[i]);\n    // Visit right before left so reversing will put left before right.\n    go(2 * i + 2);\n    go(2 * i + 1);\n  };\n\n  go(0);\n  // Reversing node-right-left produces the required left-right-node order.\n  return out.reverse();\n}\n",
          ts: "function postorder(tree: Array<number | null>): number[] {\n  // First create node-right-left order, the mirror of preorder.\n  const out: number[] = [];\n\n  const go = (i: number): void => {\n    // Do not emit or descend from a missing node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Emit the parent first for the temporary mirrored traversal.\n    out.push(tree[i] as number);\n    // Visit right before left so reversing will put left before right.\n    go(2 * i + 2);\n    go(2 * i + 1);\n  };\n\n  go(0);\n  // Reversing node-right-left produces the required left-right-node order.\n  return out.reverse();\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "td-min-depth",
    slug: "tree-min-depth",
    title: "Minimum Depth",
    difficulty: "medium",
    patternIds: P,
    statement: `Return the number of nodes on the shortest path from the root down to any **leaf**. An empty tree has depth 0.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "2" },
      { input: "[]", output: "0" },
      { input: "[1,null,2]", output: "2" },
    ],
    constraints: ["0 <= tree.length <= 10000"],
    functionName: "minDepth",
    starter: {
      js: "function minDepth(tree) {\n  // Nodes on the shortest root-to-leaf path.\n}\n",
      ts: "function minDepth(tree: Array<number | null>): number {\n  // Nodes on the shortest root-to-leaf path.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: 2 },
      { args: [[]], expected: 0 },
      { args: [[1, null, 2]], expected: 2 },
    ],
    hidden: [
      { args: [[1]], expected: 1 },
      { args: [[3, 9, 20, null, null, 15, 7]], expected: 2 },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: 3 },
      { args: [[1, 2, null, 4]], expected: 3 },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: 3 },
      { args: [[2, 1, 3]], expected: 2 },
    ],
    hints: [
      "A node with only one child is not a leaf — you can't take the missing side.",
      "Only take the minimum across children that actually exist.",
      "If one side is missing, the answer is 1 + the other side's min depth.",
    ],
    solutions: [
      {
        label: "DFS respecting single children",
        approach: "Take the min only over existing children.",
        js: "function minDepth(tree) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  const go = (i) => {\n    if (missing(i)) return 0;\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (missing(l) && missing(r)) return 1;\n    if (missing(l)) return 1 + go(r);\n    if (missing(r)) return 1 + go(l);\n    return 1 + Math.min(go(l), go(r));\n  };\n  return go(0);\n}\n",
        ts: "function minDepth(tree: Array<number | null>): number {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  const go = (i: number): number => {\n    if (missing(i)) return 0;\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (missing(l) && missing(r)) return 1;\n    if (missing(l)) return 1 + go(r);\n    if (missing(r)) return 1 + go(l);\n    return 1 + Math.min(go(l), go(r));\n  };\n  return go(0);\n}\n",
        commentedCode: {
          js: "function minDepth(tree) {\n  // Recognize an absent node from either a null slot or array boundary.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n\n  // Return the shortest node-count path from this node to a leaf.\n  const go = (i) => {\n    // An empty tree or missing branch has depth zero.\n    if (missing(i)) return 0;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // A node with no children is a leaf, so its depth is one.\n    if (missing(left) && missing(right)) return 1;\n\n    // With one child, a root-to-leaf path must follow the child that exists.\n    if (missing(left)) return 1 + go(right);\n    if (missing(right)) return 1 + go(left);\n\n    // With two children, choose the shorter valid path and count this node.\n    return 1 + Math.min(go(left), go(right));\n  };\n\n  return go(0);\n}\n",
          ts: "function minDepth(tree: Array<number | null>): number {\n  // Recognize an absent node from either a null slot or array boundary.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n\n  // Return the shortest node-count path from this node to a leaf.\n  const go = (i: number): number => {\n    // An empty tree or missing branch has depth zero.\n    if (missing(i)) return 0;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // A node with no children is a leaf, so its depth is one.\n    if (missing(left) && missing(right)) return 1;\n\n    // With one child, a root-to-leaf path must follow the child that exists.\n    if (missing(left)) return 1 + go(right);\n    if (missing(right)) return 1 + go(left);\n\n    // With two children, choose the shorter valid path and count this node.\n    return 1 + Math.min(go(left), go(right));\n  };\n\n  return go(0);\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
      {
        label: "Level scan for the first leaf",
        approach: "Walk level by level and stop at the first leaf encountered.",
        js: "function minDepth(tree) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  if (missing(0)) return 0;\n  let level = [0], depth = 1;\n  while (level.length) {\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (missing(l) && missing(r)) return depth;\n      if (!missing(l)) next.push(l);\n      if (!missing(r)) next.push(r);\n    }\n    level = next;\n    depth++;\n  }\n  return depth;\n}\n",
        ts: "function minDepth(tree: Array<number | null>): number {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  if (missing(0)) return 0;\n  let level: number[] = [0], depth = 1;\n  while (level.length) {\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (missing(l) && missing(r)) return depth;\n      if (!missing(l)) next.push(l);\n      if (!missing(r)) next.push(r);\n    }\n    level = next;\n    depth++;\n  }\n  return depth;\n}\n",
        commentedCode: {
          js: "function minDepth(tree) {\n  // Recognize indices that do not contain nodes.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  // An empty tree has no root-to-leaf path.\n  if (missing(0)) return 0;\n\n  // Breadth-first search processes all nodes at the same depth together.\n  let level = [0];\n  let depth = 1;\n\n  while (level.length) {\n    const next = [];\n    for (const i of level) {\n      const left = 2 * i + 1;\n      const right = 2 * i + 2;\n\n      // The first leaf reached by BFS has the globally minimum depth.\n      if (missing(left) && missing(right)) return depth;\n\n      // Only occupied children belong in the following level.\n      if (!missing(left)) next.push(left);\n      if (!missing(right)) next.push(right);\n    }\n\n    level = next;\n    depth++;\n  }\n\n  // This fallback is unreachable for a well-formed nonempty tree.\n  return depth;\n}\n",
          ts: "function minDepth(tree: Array<number | null>): number {\n  // Recognize indices that do not contain nodes.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n  // An empty tree has no root-to-leaf path.\n  if (missing(0)) return 0;\n\n  // Breadth-first search processes all nodes at the same depth together.\n  let level: number[] = [0];\n  let depth = 1;\n\n  while (level.length) {\n    const next: number[] = [];\n    for (const i of level) {\n      const left = 2 * i + 1;\n      const right = 2 * i + 2;\n\n      // The first leaf reached by BFS has the globally minimum depth.\n      if (missing(left) && missing(right)) return depth;\n\n      // Only occupied children belong in the following level.\n      if (!missing(left)) next.push(left);\n      if (!missing(right)) next.push(right);\n    }\n\n    level = next;\n    depth++;\n  }\n\n  // This fallback is unreachable for a well-formed nonempty tree.\n  return depth;\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "td-max-value",
    slug: "tree-max-value",
    title: "Largest Value",
    difficulty: "easy",
    patternIds: P,
    statement: `Return the largest value stored in the tree, or -1 if the tree is empty.\n\n${NOTE}`,
    examples: [
      { input: "[1,2,3]", output: "3" },
      { input: "[]", output: "-1" },
      { input: "[1]", output: "1" },
    ],
    constraints: ["0 <= tree.length <= 10000", "values may be negative"],
    functionName: "maxValue",
    starter: {
      js: "function maxValue(tree) {\n  // Largest node value, or -1 when empty.\n}\n",
      ts: "function maxValue(tree: Array<number | null>): number {\n  // Largest node value, or -1 when empty.\n  return -1;\n}\n",
    },
    visible: [
      { args: [[1, 2, 3]], expected: 3 },
      { args: [[]], expected: -1 },
      { args: [[1]], expected: 1 },
    ],
    hidden: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: 20 },
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: 6 },
      { args: [[1, null, 2]], expected: 2 },
      { args: [[1, 2, null, 4]], expected: 4 },
      { args: [[5, 3, 8, 1, 4, 7, 9]], expected: 9 },
      { args: [[-5, -2, -9]], expected: -2 },
    ],
    hints: [
      "The maximum is the largest of the node and both subtree maxima.",
      "Handle the empty tree separately so -1 isn't confused with a real value.",
      "Or scan every non-null entry of the array.",
    ],
    solutions: [
      {
        label: "Recursive DFS",
        approach: "Compare the node against both subtree maxima.",
        js: "function maxValue(tree) {\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return -Infinity;\n    return Math.max(tree[i], go(2 * i + 1), go(2 * i + 2));\n  };\n  const best = go(0);\n  return best === -Infinity ? -1 : best;\n}\n",
        ts: "function maxValue(tree: Array<number | null>): number {\n  const go = (i: number): number => {\n    if (i >= tree.length || tree[i] == null) return -Infinity;\n    return Math.max(tree[i] as number, go(2 * i + 1), go(2 * i + 2));\n  };\n  const best = go(0);\n  return best === -Infinity ? -1 : best;\n}\n",
        commentedCode: {
          js: "function maxValue(tree) {\n  // Return the largest number found in the subtree at index i.\n  const go = (i) => {\n    // Negative infinity is a neutral maximum sentinel for a missing subtree.\n    if (i >= tree.length || tree[i] == null) return -Infinity;\n\n    // Compare the current value with the best value from each child subtree.\n    const leftBest = go(2 * i + 1);\n    const rightBest = go(2 * i + 2);\n    return Math.max(tree[i], leftBest, rightBest);\n  };\n\n  const best = go(0);\n  // Translate the missing-root sentinel to the problem's required empty result.\n  return best === -Infinity ? -1 : best;\n}\n",
          ts: "function maxValue(tree: Array<number | null>): number {\n  // Return the largest number found in the subtree at index i.\n  const go = (i: number): number => {\n    // Negative infinity is a neutral maximum sentinel for a missing subtree.\n    if (i >= tree.length || tree[i] == null) return -Infinity;\n\n    // Compare the current value with the best value from each child subtree.\n    const leftBest = go(2 * i + 1);\n    const rightBest = go(2 * i + 2);\n    return Math.max(tree[i] as number, leftBest, rightBest);\n  };\n\n  const best = go(0);\n  // Translate the missing-root sentinel to the problem's required empty result.\n  return best === -Infinity ? -1 : best;\n}\n",
        },
        time: "O(n)",
        space: "O(h)",
      },
      {
        label: "Scan the array",
        approach: "Take the maximum over the stored values.",
        js: "function maxValue(tree) {\n  const values = tree.filter((v) => v != null);\n  return values.length === 0 ? -1 : Math.max(...values);\n}\n",
        ts: "function maxValue(tree: Array<number | null>): number {\n  const values = tree.filter((v): v is number => v != null);\n  return values.length === 0 ? -1 : Math.max(...values);\n}\n",
        commentedCode: {
          js: "function maxValue(tree) {\n  // Remove null placeholders so only real node values remain.\n  const values = tree.filter((value) => value != null);\n\n  // Use the required sentinel for an empty tree; otherwise take the numeric maximum.\n  return values.length === 0 ? -1 : Math.max(...values);\n}\n",
          ts: "function maxValue(tree: Array<number | null>): number {\n  // The type predicate narrows the filtered array from nullable values to numbers.\n  const values = tree.filter((value): value is number => value != null);\n\n  // Use the required sentinel for an empty tree; otherwise take the numeric maximum.\n  return values.length === 0 ? -1 : Math.max(...values);\n}\n",
        },
        time: "O(n)",
        space: "O(n)",
      },
    ],
  },
];

export const treeDfsProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const treeDfsMcqs: QuizQuestion[] = [
  {
    id: "s5-td-time",
    kind: "mcq",
    prompt: "A depth-first traversal of a tree with n nodes visits each node once, so it runs in:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "Every node is entered and left exactly once — linear in the node count.",
  },
  {
    id: "s5-td-space",
    kind: "mcq",
    prompt: "The extra space used by a recursive DFS on a tree of height h is:",
    options: ["O(1)", "O(h)", "O(n²)", "O(2ⁿ)"],
    answerIndex: 1,
    explanation: "The call stack holds one frame per level, so it's proportional to the height.",
  },
];

export const treeDfsModule: Module = {
  id: "m-pat-tree-dfs",
  stageId: S,
  title: "Tree DFS",
  kind: "patternModule",
  summary: "Depth-first recursion over trees — traversals, path questions, and bottom-up aggregation.",
  lessonSections: [
    {
      heading: "Recurse into the children",
      body: `Tree DFS is recursion with a base case of "no node". You choose *when* to visit the node relative to its children, and that choice names the traversal:

- **preorder** — node, left, right
- **inorder** — left, node, right (sorted order for a BST)
- **postorder** — left, right, node (children finished before the parent)

Throughout Stage 5 a tree arrives as a **level-order array**: the children of index \`i\` sit at \`2i+1\` and \`2i+2\`, and \`null\` means no node.

\`\`\`js
const tree = [1, 2, 3, 4, 5]; //      1
//                                  /   \\
//                                 2     3
//                                / \\
//                               4   5
function preorder(t, i = 0, out = []) {
  if (i >= t.length || t[i] == null) return out;
  out.push(t[i]);
  preorder(t, 2 * i + 1, out);
  preorder(t, 2 * i + 2, out);
  return out;
}
console.log(preorder(tree)); // [1, 2, 4, 5, 3]
\`\`\``,
    },
    {
      heading: "Recognition cues",
      body: `Reach for tree DFS when the question is about:

- a **traversal order** (preorder / inorder / postorder),
- **root-to-leaf paths** — sums, counts, or "does a path exist",
- **depth or height**, or anything computed **bottom-up** from children,
- comparing or transforming subtrees (mirror, invert, same-tree),
- BST work where inorder gives you sorted values.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Bottom-up aggregation: return something the parent can use,
// while recording a global best along the way.
let best = 0;
function height(i: number): number {
  if (i >= tree.length || tree[i] == null) return 0;
  const l = height(2 * i + 1);
  const r = height(2 * i + 2);
  best = Math.max(best, l + r); // path *through* this node, in edges
  return 1 + Math.max(l, r);    // what the parent needs
}
\`\`\`

**Pitfalls:** a node with **one** child is not a leaf — minimum-depth problems break if you take \`Math.min\` blindly; distinguish depth measured in **nodes** vs path length in **edges**; recursion depth is O(h), which is O(n) for a skewed tree. Work the drills below, easy to hard.`,
    },
  ],
  guidedExampleProblemId: "td-max-depth",
  drillProblemIds: [
    "td-max-depth",
    "td-sum-nodes",
    "td-preorder",
    "td-path-sum",
    "td-count-leaves",
    "td-diameter",
  ],
  testPoolProblemIds: ["td-inorder", "td-postorder", "td-min-depth", "td-max-value"],
  complexityQuestionIds: ["s5-td-time", "s5-td-space"],
  badgeId: "badge-pat-tree-dfs",
  prerequisiteModuleIds: [],
};
