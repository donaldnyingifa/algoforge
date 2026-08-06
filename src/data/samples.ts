import type { Module, Problem } from "@/types";
import { XP } from "@/lib/constants";
import { registerModule, registerProblem } from "./curriculum";

/**
 * Phase 3 sample content — one lesson module and three fully-authored problems
 * (easy / medium / hard) used to wire the end-to-end learn → solve loop.
 * All wording is original. Real Foundations content replaces this in Phase 5.
 */

const countEvens: Problem = {
  id: "p-count-evens",
  slug: "tally-the-evens",
  title: "Tally the Evens",
  difficulty: "easy",
  stageId: "dsa-s1",
  patternIds: [],
  trackTags: [],
  statement: `A turnstile logs how many people pass through it each minute as a list of counts. The night-shift supervisor only cares about the minutes with an **even** count, because those are the ones the automatic gate double-checks.

Write \`countEvens(numbers)\` that returns how many values in the list are even. Treat \`0\` as even.`,
  examples: [
    { input: "[2, 4, 6]", output: "3", explanation: "All three counts are even." },
    { input: "[1, 3, 5]", output: "0", explanation: "No even counts." },
    { input: "[0, 7, 8]", output: "2", explanation: "0 and 8 are even." },
  ],
  constraints: [
    "0 <= numbers.length <= 10,000",
    "-1,000,000 <= numbers[i] <= 1,000,000",
  ],
  starterCode: {
    js: `function countEvens(numbers) {
  // Return how many values are even.
}
`,
    ts: `function countEvens(numbers: number[]): number {
  // Return how many values are even.
  return 0;
}
`,
  },
  functionName: "countEvens",
  judgeType: "returnValue",
  visibleTests: [
    { args: [[2, 4, 6]], expected: 3, label: "all even" },
    { args: [[1, 3, 5]], expected: 0, label: "none even" },
    { args: [[0, 7, 8]], expected: 2, label: "zero counts" },
  ],
  hiddenTests: [
    { args: [[]], expected: 0, label: "empty" },
    { args: [[2]], expected: 1, label: "single even" },
    { args: [[3]], expected: 0, label: "single odd" },
    { args: [[-2, -4, 3]], expected: 2, label: "negatives" },
    { args: [[1000000, 1]], expected: 1, label: "large value" },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 3, label: "mixed" },
  ],
  hints: [
    "You only need to look at each number once — what test tells you a number is even?",
    "A number is even when the remainder after dividing by 2 is zero: `n % 2 === 0`. Keep a running count.",
    "Set count = 0. For each n in numbers, if n % 2 === 0 then count += 1. Return count.",
  ],
  solutions: [
    {
      label: "Single pass",
      approach:
        "Walk the list once, incrementing a counter whenever the current value is divisible by 2.",
      code: {
        js: `function countEvens(numbers) {
  let count = 0;
  for (const n of numbers) {
    if (n % 2 === 0) count++;
  }
  return count;
}
`,
        ts: `function countEvens(numbers: number[]): number {
  let count = 0;
  for (const n of numbers) {
    if (n % 2 === 0) count++;
  }
  return count;
}
`,
      },
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },
    {
      label: "Filter and count",
      approach:
        "Keep only the even values with a filter, then read off the length. Clean, though it allocates a temporary array.",
      code: {
        js: `function countEvens(numbers) {
  return numbers.filter((n) => n % 2 === 0).length;
}
`,
        ts: `function countEvens(numbers: number[]): number {
  return numbers.filter((n) => n % 2 === 0).length;
}
`,
      },
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },
  ],
  xp: XP.easy,
};

const pivotIndex: Problem = {
  id: "p-pivot-index",
  slug: "balanced-ledger",
  title: "Balanced Ledger",
  difficulty: "medium",
  stageId: "dsa-s1",
  patternIds: [],
  trackTags: [],
  statement: `A bookkeeper wants to find a single entry in a ledger that splits it into two **balanced halves**: the entries strictly to its left sum to the same total as the entries strictly to its right. The entry itself belongs to neither side.

Write \`pivotIndex(values)\` that returns the **leftmost** index that balances the ledger, or \`-1\` if no such index exists. An empty left or right side counts as a sum of \`0\`.`,
  examples: [
    {
      input: "[1, 7, 3, 6, 5, 6]",
      output: "3",
      explanation: "Left of index 3 is 1+7+3 = 11; right is 5+6 = 11.",
    },
    { input: "[1, 2, 3]", output: "-1", explanation: "No index balances the two sides." },
    {
      input: "[2, 1, -1]",
      output: "0",
      explanation: "Left side is empty (0); right side is 1 + (-1) = 0.",
    },
  ],
  constraints: [
    "0 <= values.length <= 10,000",
    "-10,000 <= values[i] <= 10,000",
    "Return the smallest valid index when several would work.",
  ],
  starterCode: {
    js: `function pivotIndex(values) {
  // Return the leftmost balancing index, or -1.
}
`,
    ts: `function pivotIndex(values: number[]): number {
  // Return the leftmost balancing index, or -1.
  return -1;
}
`,
  },
  functionName: "pivotIndex",
  judgeType: "returnValue",
  visibleTests: [
    { args: [[1, 7, 3, 6, 5, 6]], expected: 3, label: "classic" },
    { args: [[1, 2, 3]], expected: -1, label: "none" },
    { args: [[2, 1, -1]], expected: 0, label: "empty left" },
  ],
  hiddenTests: [
    { args: [[]], expected: -1, label: "empty" },
    { args: [[5]], expected: 0, label: "single element" },
    { args: [[0, 0, 0, 0]], expected: 0, label: "all zeros → leftmost" },
    { args: [[-1, -1, 0, 0, -1, -1]], expected: 2, label: "negatives" },
    { args: [[1, 2, 3, 4, 3, 2, 1]], expected: 3, label: "symmetric" },
    { args: [[8, 8]], expected: -1, label: "two elements, no pivot" },
  ],
  hints: [
    "A brute-force check recomputes both sides for every index. Can you avoid recomputing the left sum from scratch each time?",
    "Compute the total once. As you move the pivot rightward, the right side is `total - left - values[i]`. Keep `left` updated as you go.",
    "total = sum(values); left = 0; for i in range: right = total - left - values[i]; if left === right return i; left += values[i]; return -1.",
  ],
  solutions: [
    {
      label: "Brute force",
      approach:
        "For each candidate index, sum everything to its left and everything to its right and compare. Simple but quadratic.",
      code: {
        js: `function pivotIndex(values) {
  for (let i = 0; i < values.length; i++) {
    let left = 0;
    let right = 0;
    for (let j = 0; j < i; j++) left += values[j];
    for (let j = i + 1; j < values.length; j++) right += values[j];
    if (left === right) return i;
  }
  return -1;
}
`,
        ts: `function pivotIndex(values: number[]): number {
  for (let i = 0; i < values.length; i++) {
    let left = 0;
    let right = 0;
    for (let j = 0; j < i; j++) left += values[j];
    for (let j = i + 1; j < values.length; j++) right += values[j];
    if (left === right) return i;
  }
  return -1;
}
`,
      },
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
    },
    {
      label: "Running prefix sum",
      approach:
        "Take the grand total once. Sweep left to right maintaining the left-hand sum; the right-hand sum is whatever remains after removing the left sum and the pivot value.",
      code: {
        js: `function pivotIndex(values) {
  let total = 0;
  for (const v of values) total += v;
  let left = 0;
  for (let i = 0; i < values.length; i++) {
    const right = total - left - values[i];
    if (left === right) return i;
    left += values[i];
  }
  return -1;
}
`,
        ts: `function pivotIndex(values: number[]): number {
  let total = 0;
  for (const v of values) total += v;
  let left = 0;
  for (let i = 0; i < values.length; i++) {
    const right = total - left - values[i];
    if (left === right) return i;
    left += values[i];
  }
  return -1;
}
`,
      },
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },
  ],
  xp: XP.medium,
};

const mergeWindows: Problem = {
  id: "p-merge-windows",
  slug: "merge-overlapping-windows",
  title: "Merge Overlapping Windows",
  difficulty: "hard",
  stageId: "dsa-s1",
  patternIds: [],
  trackTags: [],
  statement: `A conference room booking board stores reservations as \`[start, end]\` windows on a shared timeline. Two windows **overlap** if one begins at or before the other ends (touching windows like \`[1, 4]\` and \`[4, 5]\` count as overlapping and should merge into \`[1, 5]\`).

Write \`mergeWindows(windows)\` that returns the smallest set of non-overlapping windows that covers exactly the same timeline, sorted by start time.`,
  examples: [
    {
      input: "[[1, 3], [2, 6], [8, 10], [15, 18]]",
      output: "[[1, 6], [8, 10], [15, 18]]",
      explanation: "[1,3] and [2,6] overlap and merge into [1,6].",
    },
    {
      input: "[[1, 4], [4, 5]]",
      output: "[[1, 5]]",
      explanation: "Touching endpoints merge.",
    },
    { input: "[]", output: "[]", explanation: "Nothing to merge." },
  ],
  constraints: [
    "0 <= windows.length <= 10,000",
    "each window is [start, end] with start <= end",
    "-1,000,000 <= start, end <= 1,000,000",
    "Windows may arrive in any order.",
  ],
  starterCode: {
    js: `function mergeWindows(windows) {
  // Return merged, non-overlapping windows sorted by start.
}
`,
    ts: `function mergeWindows(windows: number[][]): number[][] {
  // Return merged, non-overlapping windows sorted by start.
  return [];
}
`,
  },
  functionName: "mergeWindows",
  judgeType: "returnValue",
  visibleTests: [
    {
      args: [[[1, 3], [2, 6], [8, 10], [15, 18]]],
      expected: [[1, 6], [8, 10], [15, 18]],
      label: "classic",
    },
    { args: [[[1, 4], [4, 5]]], expected: [[1, 5]], label: "touching" },
    { args: [[]], expected: [], label: "empty" },
  ],
  hiddenTests: [
    { args: [[[1, 4], [0, 4]]], expected: [[0, 4]], label: "same end, earlier start" },
    { args: [[[1, 4], [2, 3]]], expected: [[1, 4]], label: "fully nested" },
    { args: [[[1, 4], [5, 6]]], expected: [[1, 4], [5, 6]], label: "disjoint" },
    { args: [[[2, 3], [1, 2]]], expected: [[1, 3]], label: "unsorted input" },
    { args: [[[1, 10], [2, 3], [4, 5], [6, 7]]], expected: [[1, 10]], label: "one swallows all" },
    { args: [[[6, 7], [1, 3], [2, 4]]], expected: [[1, 4], [6, 7]], label: "shuffled groups" },
  ],
  hints: [
    "If the windows arrived sorted by start time, deciding whether the next window extends the current group would be a single comparison. What should you do first?",
    "Sort by start. Walk the sorted list keeping a 'current' merged window; if the next start is <= current end, extend the current end, otherwise push a new window.",
    "sorted = windows sorted by start; result = []; for [s, e] in sorted: if result not empty and s <= result.last.end: result.last.end = max(end, e); else push [s, e]; return result.",
  ],
  solutions: [
    {
      label: "Repeated pairwise merge (brute force)",
      approach:
        "Keep merging any two windows that overlap until a full pass finds no more overlaps. Correct, but each merge may rescan the list.",
      code: {
        js: `function mergeWindows(windows) {
  const result = windows.map((w) => [w[0], w[1]]);
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < result.length && !changed; i++) {
      for (let j = i + 1; j < result.length; j++) {
        const a = result[i];
        const b = result[j];
        if (a[0] <= b[1] && b[0] <= a[1]) {
          a[0] = Math.min(a[0], b[0]);
          a[1] = Math.max(a[1], b[1]);
          result.splice(j, 1);
          changed = true;
          break;
        }
      }
    }
  }
  return result.sort((a, b) => a[0] - b[0]);
}
`,
        ts: `function mergeWindows(windows: number[][]): number[][] {
  const result = windows.map((w) => [w[0], w[1]]);
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < result.length && !changed; i++) {
      for (let j = i + 1; j < result.length; j++) {
        const a = result[i];
        const b = result[j];
        if (a[0] <= b[1] && b[0] <= a[1]) {
          a[0] = Math.min(a[0], b[0]);
          a[1] = Math.max(a[1], b[1]);
          result.splice(j, 1);
          changed = true;
          break;
        }
      }
    }
  }
  return result.sort((a, b) => a[0] - b[0]);
}
`,
      },
      timeComplexity: "O(n²)",
      spaceComplexity: "O(n)",
    },
    {
      label: "Sort then sweep",
      approach:
        "Sort once by start time, then make a single pass extending the current window whenever the next one overlaps it.",
      code: {
        js: `function mergeWindows(windows) {
  const sorted = [...windows].sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const [start, end] of sorted) {
    const last = merged[merged.length - 1];
    if (last && start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      merged.push([start, end]);
    }
  }
  return merged;
}
`,
        ts: `function mergeWindows(windows: number[][]): number[][] {
  const sorted = [...windows].sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [];
  for (const [start, end] of sorted) {
    const last = merged[merged.length - 1];
    if (last && start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      merged.push([start, end]);
    }
  }
  return merged;
}
`,
      },
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
    },
  ],
  xp: XP.hard,
};

const sampleModule: Module = {
  id: "m-sample-warmup",
  stageId: "dsa-s1",
  title: "Warm-Up: Reading a Problem",
  kind: "lesson",
  summary:
    "A gentle first loop through AlgoForge: read a prompt, run code in the browser, and solve three problems from easy to hard.",
  lessonSections: [
    {
      heading: "How a problem is structured",
      body: `Every AlgoForge problem gives you the same things: a short **story**, a couple of worked **examples**, the **constraints** you can rely on, and a function to implement. Your job is to make the function agree with the examples — and with the hidden cases behind the **Submit** button.

Read the examples first. They pin down the exact input and output shapes far more precisely than prose ever can.`,
    },
    {
      heading: "Running code, right here",
      body: `Code blocks in lessons are live. Edit the snippet below and press **Run** — it executes in a sandbox in your browser, and \`console.log\` output appears underneath.

\`\`\`js
function isEven(n) {
  return n % 2 === 0;
}

console.log("6 is even:", isEven(6));
console.log("7 is even:", isEven(7));
\`\`\`

The same runner powers the **Run** and **Submit** buttons in every problem, so what you see here is exactly what grades your solutions.`,
    },
    {
      heading: "The two-language habit",
      body: `Each problem ships in both JavaScript and TypeScript — toggle the language in the editor. The logic is identical; TypeScript just adds the types. Here is the same idea typed:

\`\`\`ts
function isEven(n: number): boolean {
  return n % 2 === 0;
}

const counts: number[] = [2, 5, 8];
console.log("evens:", counts.filter(isEven).length);
\`\`\`

When you are ready, work the three drills below in order. They climb from a one-liner to a genuine interview-grade question.`,
    },
  ],
  guidedExampleProblemId: countEvens.id,
  drillProblemIds: [countEvens.id, pivotIndex.id, mergeWindows.id],
  testPoolProblemIds: [],
  prerequisiteModuleIds: [],
};

export function registerSamples(): void {
  [countEvens, pivotIndex, mergeWindows].forEach(registerProblem);
  registerModule(sampleModule);
}
