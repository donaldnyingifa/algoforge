import type { Module, QuizQuestion } from "@/types";

const S = "dsa-s3";

export const stage3Mcqs: QuizQuestion[] = [
  {
    id: "s3-rec-base",
    kind: "mcq",
    prompt: "A recursive function with no reachable base case will:",
    options: ["return 0 immediately", "overflow the call stack", "run in O(1) time", "refuse to compile"],
    answerIndex: 1,
    explanation: "With nothing to stop it, the recursion nests forever until the call stack overflows.",
  },
  {
    id: "s3-rec-space",
    kind: "mcq",
    prompt: "A recursion that nests n levels deep uses how much extra (stack) space?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answerIndex: 2,
    explanation: "Each pending call keeps a frame on the stack, so depth n costs O(n) space.",
  },
  {
    id: "s3-sort1-bubble",
    kind: "mcq",
    prompt: "Bubble sort's worst-case time complexity is:",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
    answerIndex: 2,
    explanation: "It may compare and swap across nested passes, giving quadratic time.",
  },
  {
    id: "s3-sort1-insertion-best",
    kind: "mcq",
    prompt: "Insertion sort on an already-sorted array runs in:",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
    answerIndex: 1,
    explanation: "Each element's inner loop stops immediately, so a single pass is O(n).",
  },
  {
    id: "s3-sort2-merge",
    kind: "mcq",
    prompt: "Merge sort's time complexity is:",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    answerIndex: 1,
    explanation: "log n levels of splitting, each doing O(n) merging work.",
  },
  {
    id: "s3-sort2-quick-worst",
    kind: "mcq",
    prompt: "Quicksort's worst-case time (consistently bad pivots) is:",
    options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
    answerIndex: 1,
    explanation: "Unbalanced partitions reduce the size by one each time, giving n² work.",
  },
  {
    id: "s3-bs-time",
    kind: "mcq",
    prompt: "Binary search on a sorted array of n elements runs in:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answerIndex: 1,
    explanation: "Each step halves the remaining range, so about log₂(n) steps.",
  },
  {
    id: "s3-bs-precondition",
    kind: "mcq",
    prompt: "Binary search requires the input to be:",
    options: ["sorted", "all unique", "a power of two in length", "reversed"],
    answerIndex: 0,
    explanation: "The halving logic only works when the data is ordered.",
  },
  {
    id: "s3-bt-subsets",
    kind: "mcq",
    prompt: "How many subsets does a set of n distinct elements have?",
    options: ["n", "n²", "2ⁿ", "n!"],
    answerIndex: 2,
    explanation: "Each element is independently in or out, giving 2 × 2 × … = 2ⁿ.",
  },
  {
    id: "s3-bt-permutations",
    kind: "mcq",
    prompt: "How many permutations does a list of n distinct elements have?",
    options: ["2ⁿ", "n!", "n²", "n log n"],
    answerIndex: 1,
    explanation: "n choices for the first slot, n-1 for the next, and so on: n!.",
  },
];

export const stage3Modules: Module[] = [
  {
    id: "m-alg-recursion",
    stageId: S,
    title: "Recursion & the Call Stack",
    kind: "lesson",
    summary: "Functions that call themselves — base cases, the call stack, and when to memoize.",
    lessonSections: [
      {
        heading: "Base case + smaller problem",
        body: `A recursive function solves a problem by calling itself on a **smaller** version, stopping at a **base case**. Get the base case wrong (or unreachable) and the call stack overflows.

\`\`\`js
function countdown(n) {
  if (n === 0) { console.log("liftoff"); return; } // base case
  console.log(n);
  countdown(n - 1); // smaller problem
}
countdown(3);
\`\`\``,
      },
      {
        heading: "The call stack costs space",
        body: `Every pending recursive call keeps a frame on the stack, so a recursion n deep uses O(n) extra space. Deeply recursive code can be rewritten iteratively to avoid that.

**Recognition cues:** tree/graph shapes, "solve for n in terms of n-1", divide-and-conquer, or generating combinations → recursion.`,
      },
      {
        heading: "Overlapping work → memoize",
        body: `Naive recursion can recompute the same subproblem exponentially. **Memoization** caches each result the first time — the bridge to dynamic programming.

\`\`\`js
function fib(n, memo = {}) {
  if (n < 2) return n;
  if (memo[n] !== undefined) return memo[n];
  return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}
console.log(fib(30)); // 832040 — instant, thanks to the cache
\`\`\``,
      },
    ],
    guidedExampleProblemId: "r-factorial",
    drillProblemIds: ["r-factorial", "r-fib"],
    testPoolProblemIds: ["r-sum-digits", "r-power"],
    complexityQuestionIds: ["s3-rec-base", "s3-rec-space"],
    badgeId: "badge-alg-recursion",
    prerequisiteModuleIds: [],
  },
  {
    id: "m-alg-sorting1",
    stageId: S,
    title: "Sorting I — Elementary",
    kind: "lesson",
    summary: "Bubble, selection, and insertion sort — simple, O(n²), and worth tracing by hand.",
    lessonSections: [
      {
        heading: "Three quadratic sorts",
        body: `The elementary sorts are all **O(n²)** but teach the core moves: compare, swap, and shift.

- **Bubble** repeatedly swaps adjacent out-of-order pairs.
- **Selection** picks the smallest remaining value and places it next.
- **Insertion** grows a sorted prefix, inserting each value where it belongs.`,
      },
      {
        heading: "Watch a sort step by step",
        body: `Run this trace to *see* bubble sort work — each pass logs the array state:

\`\`\`js
function bubbleTrace(input) {
  const a = [...input];
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) { [a[j], a[j + 1]] = [a[j + 1], a[j]]; }
    }
    console.log("after pass " + (i + 1) + ":", a.join(" "));
  }
  return a;
}
bubbleTrace([5, 2, 4, 1, 3]);
\`\`\`

**Recognition cues:** tiny inputs, teaching, or nearly-sorted data (insertion shines). For real workloads, prefer the O(n log n) sorts in the next module.`,
      },
    ],
    guidedExampleProblemId: "so1-bubble-sort",
    drillProblemIds: ["so1-bubble-sort", "so1-selection-sort"],
    testPoolProblemIds: ["so1-insertion-sort", "so1-is-sorted"],
    complexityQuestionIds: ["s3-sort1-bubble", "s3-sort1-insertion-best"],
    badgeId: "badge-alg-sorting1",
    prerequisiteModuleIds: ["m-alg-recursion"],
  },
  {
    id: "m-alg-sorting2",
    stageId: S,
    title: "Sorting II — Merge, Quick & Heap",
    kind: "lesson",
    summary: "The O(n log n) workhorses: divide-and-conquer merge/quick sort and heap sort.",
    lessonSections: [
      {
        heading: "Divide and conquer",
        body: `**Merge sort** splits in half, sorts each half, and merges — a guaranteed **O(n log n)**, stable, but O(n) extra space. **Quicksort** partitions around a pivot and recurses; it's O(n log n) on average but O(n²) with unlucky pivots (in place, though). **Heap sort** uses a heap for O(n log n) with O(1) extra space.`,
      },
      {
        heading: "Trace a merge",
        body: `Merging two sorted halves is the heart of merge sort — trace it here:

\`\`\`js
function mergeTrace(a, b) {
  const out = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    const pick = a[i] <= b[j] ? a[i++] : b[j++];
    out.push(pick);
    console.log("took", pick, "->", out.join(" "));
  }
  while (i < a.length) out.push(a[i++]);
  while (j < b.length) out.push(b[j++]);
  return out;
}
mergeTrace([1, 4, 5], [2, 3, 6]);
\`\`\`

**Recognition cues:** need guaranteed O(n log n) and stability → merge sort. In-place with good average speed → quicksort. Reuse a heap you already have → heap sort.`,
      },
    ],
    guidedExampleProblemId: "so2-merge-two",
    drillProblemIds: ["so2-merge-two", "so2-merge-sort"],
    testPoolProblemIds: ["so2-quick-sort", "so2-heap-sort"],
    complexityQuestionIds: ["s3-sort2-merge", "s3-sort2-quick-worst"],
    badgeId: "badge-alg-sorting2",
    prerequisiteModuleIds: ["m-alg-sorting1"],
  },
  {
    id: "m-alg-binary-search",
    stageId: S,
    title: "Binary Search",
    kind: "lesson",
    summary: "Halving a sorted range — plus the boundary variants that trip everyone up.",
    lessonSections: [
      {
        heading: "Halve the haystack",
        body: `On **sorted** data, binary search compares the middle element and throws away half the range each step — **O(log n)**. The whole trick is maintaining correct bounds.

\`\`\`js
function search(a, target) {
  let lo = 0, hi = a.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (a[mid] === target) return mid;
    if (a[mid] < target) lo = mid + 1; else hi = mid - 1;
  }
  return -1;
}
console.log(search([1, 3, 5, 7, 9], 7)); // 3
\`\`\``,
      },
      {
        heading: "Boundaries and beyond",
        body: `The powerful variants search for a **boundary** rather than an exact match: first/last occurrence, insertion point (lower bound), or "smallest value that satisfies a condition". The same halving works on any monotonic predicate — not just arrays (e.g. integer square root).

**Recognition cues:** sorted input, "find the position where…", "minimum/maximum that works", or a monotonic yes/no test → binary search.`,
      },
    ],
    guidedExampleProblemId: "bs-search",
    drillProblemIds: ["bs-search", "bs-first-position"],
    testPoolProblemIds: ["bs-insert-position", "bs-sqrt"],
    complexityQuestionIds: ["s3-bs-time", "s3-bs-precondition"],
    badgeId: "badge-alg-binary-search",
    prerequisiteModuleIds: ["m-alg-sorting1"],
  },
  {
    id: "m-alg-backtracking",
    stageId: S,
    title: "Backtracking Intro",
    kind: "lesson",
    summary: "Systematic search: build a candidate, recurse, and undo — subsets, permutations, combinations.",
    lessonSections: [
      {
        heading: "Choose, explore, un-choose",
        body: `Backtracking explores a decision tree: make a choice, recurse, then **undo it** to try the next option. It's how you enumerate subsets, permutations, combinations, and constraint puzzles.

\`\`\`js
function subsets(nums) {
  const res = [];
  const bt = (start, cur) => {
    res.push([...cur]);
    for (let i = start; i < nums.length; i++) {
      cur.push(nums[i]);   // choose
      bt(i + 1, cur);      // explore
      cur.pop();           // un-choose
    }
  };
  bt(0, []);
  return res;
}
console.log(subsets([1, 2, 3]).length); // 8 = 2^3
\`\`\``,
      },
      {
        heading: "Counting the search space",
        body: `The shapes matter: a set of n elements has **2ⁿ** subsets and **n!** permutations, so backtracking is exponential — pruning invalid branches early is what makes it practical.

**Recognition cues:** "generate all…", "how many ways…", puzzles with constraints (N-queens, sudoku), or combinations/permutations → backtracking. Finish Stage 3 with the drills, then take the module tests.`,
      },
    ],
    guidedExampleProblemId: "bt-subsets",
    drillProblemIds: ["bt-subsets", "bt-permutations"],
    testPoolProblemIds: ["bt-combinations", "bt-count-subsets-sum"],
    complexityQuestionIds: ["s3-bt-subsets", "s3-bt-permutations"],
    badgeId: "badge-alg-backtracking",
    prerequisiteModuleIds: ["m-alg-recursion"],
  },
];
