(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/stage3/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerStage3",
    ()=>registerStage3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage3$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage3/problems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage3$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage3/modules.ts [app-client] (ecmascript)");
;
;
;
function registerStage3() {
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage3$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage3Problems"].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerProblem"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage3$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage3Mcqs"].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerComplexityQuestion"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage3$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage3Modules"].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModule"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage3/modules.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stage3Mcqs",
    ()=>stage3Mcqs,
    "stage3Modules",
    ()=>stage3Modules
]);
const S = "dsa-s3";
const stage3Mcqs = [
    {
        id: "s3-rec-base",
        kind: "mcq",
        prompt: "A recursive function with no reachable base case will:",
        options: [
            "return 0 immediately",
            "overflow the call stack",
            "run in O(1) time",
            "refuse to compile"
        ],
        answerIndex: 1,
        explanation: "With nothing to stop it, the recursion nests forever until the call stack overflows."
    },
    {
        id: "s3-rec-space",
        kind: "mcq",
        prompt: "A recursion that nests n levels deep uses how much extra (stack) space?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "Each pending call keeps a frame on the stack, so depth n costs O(n) space."
    },
    {
        id: "s3-sort1-bubble",
        kind: "mcq",
        prompt: "Bubble sort's worst-case time complexity is:",
        options: [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(2ⁿ)"
        ],
        answerIndex: 2,
        explanation: "It may compare and swap across nested passes, giving quadratic time."
    },
    {
        id: "s3-sort1-insertion-best",
        kind: "mcq",
        prompt: "Insertion sort on an already-sorted array runs in:",
        options: [
            "O(1)",
            "O(n)",
            "O(n log n)",
            "O(n²)"
        ],
        answerIndex: 1,
        explanation: "Each element's inner loop stops immediately, so a single pass is O(n)."
    },
    {
        id: "s3-sort2-merge",
        kind: "mcq",
        prompt: "Merge sort's time complexity is:",
        options: [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(log n)"
        ],
        answerIndex: 1,
        explanation: "log n levels of splitting, each doing O(n) merging work."
    },
    {
        id: "s3-sort2-quick-worst",
        kind: "mcq",
        prompt: "Quicksort's worst-case time (consistently bad pivots) is:",
        options: [
            "O(n log n)",
            "O(n²)",
            "O(n)",
            "O(log n)"
        ],
        answerIndex: 1,
        explanation: "Unbalanced partitions reduce the size by one each time, giving n² work."
    },
    {
        id: "s3-bs-time",
        kind: "mcq",
        prompt: "Binary search on a sorted array of n elements runs in:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answerIndex: 1,
        explanation: "Each step halves the remaining range, so about log₂(n) steps."
    },
    {
        id: "s3-bs-precondition",
        kind: "mcq",
        prompt: "Binary search requires the input to be:",
        options: [
            "sorted",
            "all unique",
            "a power of two in length",
            "reversed"
        ],
        answerIndex: 0,
        explanation: "The halving logic only works when the data is ordered."
    },
    {
        id: "s3-bt-subsets",
        kind: "mcq",
        prompt: "How many subsets does a set of n distinct elements have?",
        options: [
            "n",
            "n²",
            "2ⁿ",
            "n!"
        ],
        answerIndex: 2,
        explanation: "Each element is independently in or out, giving 2 × 2 × … = 2ⁿ."
    },
    {
        id: "s3-bt-permutations",
        kind: "mcq",
        prompt: "How many permutations does a list of n distinct elements have?",
        options: [
            "2ⁿ",
            "n!",
            "n²",
            "n log n"
        ],
        answerIndex: 1,
        explanation: "n choices for the first slot, n-1 for the next, and so on: n!."
    }
];
const stage3Modules = [
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
\`\`\``
            },
            {
                heading: "The call stack costs space",
                body: `Every pending recursive call keeps a frame on the stack, so a recursion n deep uses O(n) extra space. Deeply recursive code can be rewritten iteratively to avoid that.

**Recognition cues:** tree/graph shapes, "solve for n in terms of n-1", divide-and-conquer, or generating combinations → recursion.`
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
\`\`\``
            }
        ],
        guidedExampleProblemId: "r-factorial",
        drillProblemIds: [
            "r-factorial",
            "r-fib"
        ],
        testPoolProblemIds: [
            "r-sum-digits",
            "r-power"
        ],
        complexityQuestionIds: [
            "s3-rec-base",
            "s3-rec-space"
        ],
        badgeId: "badge-alg-recursion",
        prerequisiteModuleIds: []
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
- **Insertion** grows a sorted prefix, inserting each value where it belongs.`
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

**Recognition cues:** tiny inputs, teaching, or nearly-sorted data (insertion shines). For real workloads, prefer the O(n log n) sorts in the next module.`
            }
        ],
        guidedExampleProblemId: "so1-bubble-sort",
        drillProblemIds: [
            "so1-bubble-sort",
            "so1-selection-sort"
        ],
        testPoolProblemIds: [
            "so1-insertion-sort",
            "so1-is-sorted"
        ],
        complexityQuestionIds: [
            "s3-sort1-bubble",
            "s3-sort1-insertion-best"
        ],
        badgeId: "badge-alg-sorting1",
        prerequisiteModuleIds: [
            "m-alg-recursion"
        ]
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
                body: `**Merge sort** splits in half, sorts each half, and merges — a guaranteed **O(n log n)**, stable, but O(n) extra space. **Quicksort** partitions around a pivot and recurses; it's O(n log n) on average but O(n²) with unlucky pivots (in place, though). **Heap sort** uses a heap for O(n log n) with O(1) extra space.`
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

**Recognition cues:** need guaranteed O(n log n) and stability → merge sort. In-place with good average speed → quicksort. Reuse a heap you already have → heap sort.`
            }
        ],
        guidedExampleProblemId: "so2-merge-two",
        drillProblemIds: [
            "so2-merge-two",
            "so2-merge-sort"
        ],
        testPoolProblemIds: [
            "so2-quick-sort",
            "so2-heap-sort"
        ],
        complexityQuestionIds: [
            "s3-sort2-merge",
            "s3-sort2-quick-worst"
        ],
        badgeId: "badge-alg-sorting2",
        prerequisiteModuleIds: [
            "m-alg-sorting1"
        ]
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
\`\`\``
            },
            {
                heading: "Boundaries and beyond",
                body: `The powerful variants search for a **boundary** rather than an exact match: first/last occurrence, insertion point (lower bound), or "smallest value that satisfies a condition". The same halving works on any monotonic predicate — not just arrays (e.g. integer square root).

**Recognition cues:** sorted input, "find the position where…", "minimum/maximum that works", or a monotonic yes/no test → binary search.`
            }
        ],
        guidedExampleProblemId: "bs-search",
        drillProblemIds: [
            "bs-search",
            "bs-first-position"
        ],
        testPoolProblemIds: [
            "bs-insert-position",
            "bs-sqrt"
        ],
        complexityQuestionIds: [
            "s3-bs-time",
            "s3-bs-precondition"
        ],
        badgeId: "badge-alg-binary-search",
        prerequisiteModuleIds: [
            "m-alg-sorting1"
        ]
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
\`\`\``
            },
            {
                heading: "Counting the search space",
                body: `The shapes matter: a set of n elements has **2ⁿ** subsets and **n!** permutations, so backtracking is exponential — pruning invalid branches early is what makes it practical.

**Recognition cues:** "generate all…", "how many ways…", puzzles with constraints (N-queens, sudoku), or combinations/permutations → backtracking. Finish Stage 3 with the drills, then take the module tests.`
            }
        ],
        guidedExampleProblemId: "bt-subsets",
        drillProblemIds: [
            "bt-subsets",
            "bt-permutations"
        ],
        testPoolProblemIds: [
            "bt-combinations",
            "bt-count-subsets-sum"
        ],
        complexityQuestionIds: [
            "s3-bt-subsets",
            "s3-bt-permutations"
        ],
        badgeId: "badge-alg-backtracking",
        prerequisiteModuleIds: [
            "m-alg-recursion"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage3/problems.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stage3Problems",
    ()=>stage3Problems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/shared/heap.ts [app-client] (ecmascript)");
;
;
const S = "dsa-s3";
const COMMENTED_MIN_HEAP_SOURCE = `class MinHeap {
  // Store the complete binary tree in level order inside an array.
  constructor() { this.data = []; }
  size() { return this.data.length; }
  // The minimum is always kept at the root.
  peek() { return this.data[0]; }
  push(value) {
    // Add at the end to preserve the complete-tree shape.
    this.data.push(value);
    // Restore heap order by moving the new value toward the root.
    this._up(this.data.length - 1);
    return this;
  }
  pop() {
    const length = this.data.length;
    if (length === 0) return undefined;
    // Save the root because it is the minimum value to return.
    const minimum = this.data[0];
    const last = this.data.pop();
    if (length > 1) {
      // Fill the root with the final leaf, then move it down into place.
      this.data[0] = last;
      this._down(0);
    }
    return minimum;
  }
  _up(index) {
    while (index > 0) {
      const parent = (index - 1) >> 1;
      // Stop once the parent is no greater than its child.
      if (this.data[parent] <= this.data[index]) break;
      const temp = this.data[parent];
      this.data[parent] = this.data[index];
      this.data[index] = temp;
      index = parent;
    }
  }
  _down(index) {
    const length = this.data.length;
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      // Choose the smallest value among the node and its existing children.
      if (left < length && this.data[left] < this.data[smallest]) smallest = left;
      if (right < length && this.data[right] < this.data[smallest]) smallest = right;
      if (smallest === index) break;
      const temp = this.data[smallest];
      this.data[smallest] = this.data[index];
      this.data[index] = temp;
      index = smallest;
    }
  }
}`;
const drafts = [
    /* -------------------- Recursion & Call Stack -------------------- */ {
        id: "r-factorial",
        slug: "factorial",
        title: "Factorial",
        difficulty: "easy",
        statement: "Return `n!` — the product of all integers from 1 to `n`. By convention, `0! = 1`.",
        examples: [
            {
                input: "5",
                output: "120"
            },
            {
                input: "0",
                output: "1"
            },
            {
                input: "1",
                output: "1"
            }
        ],
        constraints: [
            "0 <= n <= 15"
        ],
        functionName: "factorial",
        starter: {
            js: "function factorial(n) {\n  // n! = n * (n-1) * ... * 1.\n}\n",
            ts: "function factorial(n: number): number {\n  // n! = n * (n-1) * ... * 1.\n  return 1;\n}\n"
        },
        visible: [
            {
                args: [
                    5
                ],
                expected: 120
            },
            {
                args: [
                    0
                ],
                expected: 1
            },
            {
                args: [
                    1
                ],
                expected: 1
            }
        ],
        hidden: [
            {
                args: [
                    2
                ],
                expected: 2
            },
            {
                args: [
                    3
                ],
                expected: 6
            },
            {
                args: [
                    6
                ],
                expected: 720
            },
            {
                args: [
                    7
                ],
                expected: 5040
            },
            {
                args: [
                    10
                ],
                expected: 3628800
            },
            {
                args: [
                    12
                ],
                expected: 479001600
            }
        ],
        hints: [
            "Factorial of n is n times the factorial of n-1.",
            "The base case stops the recursion: factorial(0) and factorial(1) are both 1.",
            "return n <= 1 ? 1 : n * factorial(n - 1)."
        ],
        solutions: [
            {
                label: "Recursion",
                approach: "Multiply n by the factorial of n-1 down to the base case.",
                js: "function factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}\n",
                ts: "function factorial(n: number): number {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}\n",
                commentedCode: {
                    js: "function factorial(n) {\n  // Stop at 0! or 1!, whose value is 1.\n  if (n <= 1) return 1;\n  // Multiply n by the factorial of the next smaller integer.\n  return n * factorial(n - 1);\n}\n",
                    ts: "function factorial(n: number): number {\n  // Stop at 0! or 1!, whose value is 1.\n  if (n <= 1) return 1;\n  // Multiply n by the factorial of the next smaller integer.\n  return n * factorial(n - 1);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Iteration",
                approach: "Multiply upward with a loop — no call-stack growth.",
                js: "function factorial(n) {\n  let product = 1;\n  for (let i = 2; i <= n; i++) product *= i;\n  return product;\n}\n",
                ts: "function factorial(n: number): number {\n  let product = 1;\n  for (let i = 2; i <= n; i++) product *= i;\n  return product;\n}\n",
                commentedCode: {
                    js: "function factorial(n) {\n  // Start with the multiplicative identity, which also handles 0! and 1!.\n  let product = 1;\n  // Multiply in every factor from 2 through n.\n  for (let i = 2; i <= n; i++) product *= i;\n  return product;\n}\n",
                    ts: "function factorial(n: number): number {\n  // Start with the multiplicative identity, which also handles 0! and 1!.\n  let product = 1;\n  // Multiply in every factor from 2 through n.\n  for (let i = 2; i <= n; i++) product *= i;\n  return product;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "r-fib",
        slug: "fibonacci",
        title: "Fibonacci Number",
        difficulty: "medium",
        statement: "Return the n-th Fibonacci number, where `fib(0) = 0`, `fib(1) = 1`, and each later value is the sum of the previous two.",
        examples: [
            {
                input: "10",
                output: "55"
            },
            {
                input: "0",
                output: "0"
            },
            {
                input: "1",
                output: "1"
            }
        ],
        constraints: [
            "0 <= n <= 40"
        ],
        functionName: "fib",
        starter: {
            js: "function fib(n) {\n  // The n-th Fibonacci number.\n}\n",
            ts: "function fib(n: number): number {\n  // The n-th Fibonacci number.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    10
                ],
                expected: 55
            },
            {
                args: [
                    0
                ],
                expected: 0
            },
            {
                args: [
                    1
                ],
                expected: 1
            }
        ],
        hidden: [
            {
                args: [
                    2
                ],
                expected: 1
            },
            {
                args: [
                    5
                ],
                expected: 5
            },
            {
                args: [
                    7
                ],
                expected: 13
            },
            {
                args: [
                    15
                ],
                expected: 610
            },
            {
                args: [
                    20
                ],
                expected: 6765
            },
            {
                args: [
                    30
                ],
                expected: 832040
            }
        ],
        hints: [
            "Naive recursion recomputes the same values exponentially — remember results you've already computed.",
            "Memoize: store fib(k) the first time you compute it and reuse it thereafter.",
            "Or build up iteratively: keep the last two values and roll them forward."
        ],
        solutions: [
            {
                label: "Memoized recursion",
                approach: "Cache each result so every fib(k) is computed once.",
                js: "function fib(n) {\n  const memo = {};\n  function go(k) {\n    if (k < 2) return k;\n    if (memo[k] !== undefined) return memo[k];\n    return (memo[k] = go(k - 1) + go(k - 2));\n  }\n  return go(n);\n}\n",
                ts: "function fib(n: number): number {\n  const memo: Record<number, number> = {};\n  function go(k: number): number {\n    if (k < 2) return k;\n    if (memo[k] !== undefined) return memo[k];\n    return (memo[k] = go(k - 1) + go(k - 2));\n  }\n  return go(n);\n}\n",
                commentedCode: {
                    js: "function fib(n) {\n  // Cache completed Fibonacci values so overlapping calls do no repeated work.\n  const memo = {};\n  function go(k) {\n    // fib(0) and fib(1) are the recurrence's base cases.\n    if (k < 2) return k;\n    // Reuse a value that was already computed.\n    if (memo[k] !== undefined) return memo[k];\n    // Compute from the previous two values and cache the result.\n    return (memo[k] = go(k - 1) + go(k - 2));\n  }\n  return go(n);\n}\n",
                    ts: "function fib(n: number): number {\n  // Cache completed Fibonacci values so overlapping calls do no repeated work.\n  const memo: Record<number, number> = {};\n  function go(k: number): number {\n    // fib(0) and fib(1) are the recurrence's base cases.\n    if (k < 2) return k;\n    // Reuse a value that was already computed.\n    if (memo[k] !== undefined) return memo[k];\n    // Compute from the previous two values and cache the result.\n    return (memo[k] = go(k - 1) + go(k - 2));\n  }\n  return go(n);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Iterative roll",
                approach: "Track the previous two values and step forward.",
                js: "function fib(n) {\n  let a = 0, b = 1;\n  for (let i = 0; i < n; i++) { [a, b] = [b, a + b]; }\n  return a;\n}\n",
                ts: "function fib(n: number): number {\n  let a = 0, b = 1;\n  for (let i = 0; i < n; i++) { [a, b] = [b, a + b]; }\n  return a;\n}\n",
                commentedCode: {
                    js: "function fib(n) {\n  // Keep consecutive values: a is fib(i) and b is fib(i + 1).\n  let a = 0, b = 1;\n  // Roll the pair forward n times without storing the full sequence.\n  for (let i = 0; i < n; i++) { [a, b] = [b, a + b]; }\n  return a;\n}\n",
                    ts: "function fib(n: number): number {\n  // Keep consecutive values: a is fib(i) and b is fib(i + 1).\n  let a = 0, b = 1;\n  // Roll the pair forward n times without storing the full sequence.\n  for (let i = 0; i < n; i++) { [a, b] = [b, a + b]; }\n  return a;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "r-sum-digits",
        slug: "recursive-digit-sum",
        title: "Recursive Digit Sum",
        difficulty: "easy",
        statement: "Return the sum of the digits of a non-negative integer, using recursion.",
        examples: [
            {
                input: "123",
                output: "6"
            },
            {
                input: "0",
                output: "0"
            },
            {
                input: "9",
                output: "9"
            }
        ],
        constraints: [
            "0 <= n <= 1000000000"
        ],
        functionName: "sumDigitsRec",
        starter: {
            js: "function sumDigitsRec(n) {\n  // Sum the digits recursively.\n}\n",
            ts: "function sumDigitsRec(n: number): number {\n  // Sum the digits recursively.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    123
                ],
                expected: 6
            },
            {
                args: [
                    0
                ],
                expected: 0
            },
            {
                args: [
                    9
                ],
                expected: 9
            }
        ],
        hidden: [
            {
                args: [
                    10
                ],
                expected: 1
            },
            {
                args: [
                    99
                ],
                expected: 18
            },
            {
                args: [
                    1000
                ],
                expected: 1
            },
            {
                args: [
                    4567
                ],
                expected: 22
            },
            {
                args: [
                    505
                ],
                expected: 10
            },
            {
                args: [
                    100
                ],
                expected: 1
            }
        ],
        hints: [
            "A single-digit number is its own digit sum — that's your base case.",
            "Otherwise the answer is the last digit plus the digit sum of the rest.",
            "return n < 10 ? n : (n % 10) + sumDigitsRec(Math.floor(n / 10))."
        ],
        solutions: [
            {
                label: "Peel the last digit",
                approach: "Add n % 10 to the recursive result on the remaining digits.",
                js: "function sumDigitsRec(n) {\n  if (n < 10) return n;\n  return (n % 10) + sumDigitsRec(Math.floor(n / 10));\n}\n",
                ts: "function sumDigitsRec(n: number): number {\n  if (n < 10) return n;\n  return (n % 10) + sumDigitsRec(Math.floor(n / 10));\n}\n",
                commentedCode: {
                    js: "function sumDigitsRec(n) {\n  // A one-digit number is already its own digit sum.\n  if (n < 10) return n;\n  // Add the final digit, then recurse on all preceding digits.\n  return (n % 10) + sumDigitsRec(Math.floor(n / 10));\n}\n",
                    ts: "function sumDigitsRec(n: number): number {\n  // A one-digit number is already its own digit sum.\n  if (n < 10) return n;\n  // Add the final digit, then recurse on all preceding digits.\n  return (n % 10) + sumDigitsRec(Math.floor(n / 10));\n}\n"
                },
                time: "O(log n)",
                space: "O(log n)"
            },
            {
                label: "Iterative",
                approach: "Loop off digits with modulo and division.",
                js: "function sumDigitsRec(n) {\n  let sum = 0;\n  while (n > 0) { sum += n % 10; n = Math.floor(n / 10); }\n  return sum;\n}\n",
                ts: "function sumDigitsRec(n: number): number {\n  let sum = 0;\n  while (n > 0) { sum += n % 10; n = Math.floor(n / 10); }\n  return sum;\n}\n",
                commentedCode: {
                    js: "function sumDigitsRec(n) {\n  // Accumulate digits as they are removed from right to left.\n  let sum = 0;\n  while (n > 0) {\n    // Modulo extracts the final digit.\n    sum += n % 10;\n    // Integer division discards that digit.\n    n = Math.floor(n / 10);\n  }\n  return sum;\n}\n",
                    ts: "function sumDigitsRec(n: number): number {\n  // Accumulate digits as they are removed from right to left.\n  let sum = 0;\n  while (n > 0) {\n    // Modulo extracts the final digit.\n    sum += n % 10;\n    // Integer division discards that digit.\n    n = Math.floor(n / 10);\n  }\n  return sum;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "r-power",
        slug: "integer-power",
        title: "Integer Power",
        difficulty: "medium",
        statement: "Return `base` raised to the non-negative integer `exp`, computed recursively.",
        examples: [
            {
                input: "2, 10",
                output: "1024"
            },
            {
                input: "5, 0",
                output: "1"
            },
            {
                input: "3, 3",
                output: "27"
            }
        ],
        constraints: [
            "0 <= exp <= 30",
            "answer fits in a safe integer"
        ],
        functionName: "power",
        starter: {
            js: "function power(base, exp) {\n  // base ** exp for non-negative exp.\n}\n",
            ts: "function power(base: number, exp: number): number {\n  // base ** exp for non-negative exp.\n  return 1;\n}\n"
        },
        visible: [
            {
                args: [
                    2,
                    10
                ],
                expected: 1024
            },
            {
                args: [
                    5,
                    0
                ],
                expected: 1
            },
            {
                args: [
                    3,
                    3
                ],
                expected: 27
            }
        ],
        hidden: [
            {
                args: [
                    2,
                    0
                ],
                expected: 1
            },
            {
                args: [
                    2,
                    1
                ],
                expected: 2
            },
            {
                args: [
                    10,
                    3
                ],
                expected: 1000
            },
            {
                args: [
                    7,
                    2
                ],
                expected: 49
            },
            {
                args: [
                    2,
                    16
                ],
                expected: 65536
            },
            {
                args: [
                    1,
                    30
                ],
                expected: 1
            }
        ],
        hints: [
            "Anything to the power 0 is 1 — the base case.",
            "You can halve the exponent each step: base^exp = (base^(exp/2))², times base if exp is odd.",
            "const half = power(base, Math.floor(exp / 2)); return exp % 2 ? half*half*base : half*half."
        ],
        solutions: [
            {
                label: "Fast exponentiation",
                approach: "Square the half-power, multiplying by base for odd exponents.",
                js: "function power(base, exp) {\n  if (exp === 0) return 1;\n  const half = power(base, Math.floor(exp / 2));\n  return exp % 2 === 0 ? half * half : half * half * base;\n}\n",
                ts: "function power(base: number, exp: number): number {\n  if (exp === 0) return 1;\n  const half = power(base, Math.floor(exp / 2));\n  return exp % 2 === 0 ? half * half : half * half * base;\n}\n",
                commentedCode: {
                    js: "function power(base, exp) {\n  // Any base raised to zero equals one.\n  if (exp === 0) return 1;\n  // Compute one half-power and reuse it instead of recursing twice.\n  const half = power(base, Math.floor(exp / 2));\n  // Odd exponents need one additional factor of base.\n  return exp % 2 === 0 ? half * half : half * half * base;\n}\n",
                    ts: "function power(base: number, exp: number): number {\n  // Any base raised to zero equals one.\n  if (exp === 0) return 1;\n  // Compute one half-power and reuse it instead of recursing twice.\n  const half = power(base, Math.floor(exp / 2));\n  // Odd exponents need one additional factor of base.\n  return exp % 2 === 0 ? half * half : half * half * base;\n}\n"
                },
                time: "O(log exp)",
                space: "O(log exp)"
            },
            {
                label: "Iterative multiply",
                approach: "Multiply base into the result exp times.",
                js: "function power(base, exp) {\n  let result = 1;\n  for (let i = 0; i < exp; i++) result *= base;\n  return result;\n}\n",
                ts: "function power(base: number, exp: number): number {\n  let result = 1;\n  for (let i = 0; i < exp; i++) result *= base;\n  return result;\n}\n",
                commentedCode: {
                    js: "function power(base, exp) {\n  // Begin at one so an exponent of zero needs no special branch.\n  let result = 1;\n  // Multiply by the base exactly exp times.\n  for (let i = 0; i < exp; i++) result *= base;\n  return result;\n}\n",
                    ts: "function power(base: number, exp: number): number {\n  // Begin at one so an exponent of zero needs no special branch.\n  let result = 1;\n  // Multiply by the base exactly exp times.\n  for (let i = 0; i < exp; i++) result *= base;\n  return result;\n}\n"
                },
                time: "O(exp)",
                space: "O(1)"
            }
        ]
    },
    /* -------------------- Sorting I (elementary) -------------------- */ {
        id: "so1-bubble-sort",
        slug: "bubble-sort",
        title: "Bubble Sort",
        difficulty: "easy",
        statement: "Sort the list ascending using bubble sort — repeatedly swap adjacent out-of-order pairs. Return the sorted array (don't call a built-in sort).",
        examples: [
            {
                input: "[3,1,2]",
                output: "[1,2,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1]",
                output: "[1]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 2000"
        ],
        functionName: "bubbleSort",
        starter: {
            js: "function bubbleSort(nums) {\n  // Sort ascending by swapping adjacent pairs.\n}\n",
            ts: "function bubbleSort(nums: number[]): number[] {\n  // Sort ascending by swapping adjacent pairs.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        1,
                        2
                    ]
                ],
                expected: [
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    []
                ],
                expected: []
            },
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: [
                    1
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        5,
                        4,
                        3,
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            },
            {
                args: [
                    [
                        1,
                        1,
                        1
                    ]
                ],
                expected: [
                    1,
                    1,
                    1
                ]
            },
            {
                args: [
                    [
                        -1,
                        3,
                        -2
                    ]
                ],
                expected: [
                    -2,
                    -1,
                    3
                ]
            },
            {
                args: [
                    [
                        4,
                        2,
                        4,
                        2
                    ]
                ],
                expected: [
                    2,
                    2,
                    4,
                    4
                ]
            },
            {
                args: [
                    [
                        10,
                        -10,
                        0
                    ]
                ],
                expected: [
                    -10,
                    0,
                    10
                ]
            }
        ],
        hints: [
            "Each pass 'bubbles' the largest remaining value to the end.",
            "Nested loops: the inner loop swaps adjacent pairs; the outer loop repeats n times.",
            "for i: for j in 0..n-2-i: if a[j] > a[j+1] swap them."
        ],
        solutions: [
            {
                label: "Bubble sort",
                approach: "Repeatedly swap adjacent out-of-order elements.",
                js: "function bubbleSort(nums) {\n  const a = [...nums];\n  for (let i = 0; i < a.length; i++) {\n    for (let j = 0; j < a.length - 1 - i; j++) {\n      if (a[j] > a[j + 1]) { const t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; }\n    }\n  }\n  return a;\n}\n",
                ts: "function bubbleSort(nums: number[]): number[] {\n  const a = [...nums];\n  for (let i = 0; i < a.length; i++) {\n    for (let j = 0; j < a.length - 1 - i; j++) {\n      if (a[j] > a[j + 1]) { const t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; }\n    }\n  }\n  return a;\n}\n",
                commentedCode: {
                    js: "function bubbleSort(nums) {\n  // Sort a copy so the input array is not changed.\n  const a = [...nums];\n  // After each pass, one largest remaining value is fixed at the end.\n  for (let i = 0; i < a.length; i++) {\n    // The final i positions are already sorted, so skip them.\n    for (let j = 0; j < a.length - 1 - i; j++) {\n      // Swap adjacent values when they are out of ascending order.\n      if (a[j] > a[j + 1]) { const t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; }\n    }\n  }\n  return a;\n}\n",
                    ts: "function bubbleSort(nums: number[]): number[] {\n  // Sort a copy so the input array is not changed.\n  const a = [...nums];\n  // After each pass, one largest remaining value is fixed at the end.\n  for (let i = 0; i < a.length; i++) {\n    // The final i positions are already sorted, so skip them.\n    for (let j = 0; j < a.length - 1 - i; j++) {\n      // Swap adjacent values when they are out of ascending order.\n      if (a[j] > a[j + 1]) { const t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; }\n    }\n  }\n  return a;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            },
            {
                label: "Early-exit bubble",
                approach: "Stop once a full pass makes no swaps (already sorted).",
                js: "function bubbleSort(nums) {\n  const a = [...nums];\n  let swapped = true;\n  while (swapped) {\n    swapped = false;\n    for (let j = 0; j < a.length - 1; j++) {\n      if (a[j] > a[j + 1]) { const t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; swapped = true; }\n    }\n  }\n  return a;\n}\n",
                ts: "function bubbleSort(nums: number[]): number[] {\n  const a = [...nums];\n  let swapped = true;\n  while (swapped) {\n    swapped = false;\n    for (let j = 0; j < a.length - 1; j++) {\n      if (a[j] > a[j + 1]) { const t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; swapped = true; }\n    }\n  }\n  return a;\n}\n",
                commentedCode: {
                    js: "function bubbleSort(nums) {\n  // Work on a copy and enter the loop for the first pass.\n  const a = [...nums];\n  let swapped = true;\n  // A pass with no swaps proves the array is sorted.\n  while (swapped) {\n    swapped = false;\n    for (let j = 0; j < a.length - 1; j++) {\n      if (a[j] > a[j + 1]) {\n        // Repair this inversion and remember that another pass is needed.\n        const t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; swapped = true;\n      }\n    }\n  }\n  return a;\n}\n",
                    ts: "function bubbleSort(nums: number[]): number[] {\n  // Work on a copy and enter the loop for the first pass.\n  const a = [...nums];\n  let swapped = true;\n  // A pass with no swaps proves the array is sorted.\n  while (swapped) {\n    swapped = false;\n    for (let j = 0; j < a.length - 1; j++) {\n      if (a[j] > a[j + 1]) {\n        // Repair this inversion and remember that another pass is needed.\n        const t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; swapped = true;\n      }\n    }\n  }\n  return a;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "so1-selection-sort",
        slug: "selection-sort",
        title: "Selection Sort",
        difficulty: "medium",
        statement: "Sort the list ascending using selection sort — repeatedly pick the smallest remaining value and place it next. Return the sorted array.",
        examples: [
            {
                input: "[3,1,2]",
                output: "[1,2,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[2,2,1]",
                output: "[1,2,2]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 2000"
        ],
        functionName: "selectionSort",
        starter: {
            js: "function selectionSort(nums) {\n  // Repeatedly select the minimum of the remainder.\n}\n",
            ts: "function selectionSort(nums: number[]): number[] {\n  // Repeatedly select the minimum of the remainder.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        1,
                        2
                    ]
                ],
                expected: [
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    []
                ],
                expected: []
            },
            {
                args: [
                    [
                        2,
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2,
                    2
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    [
                        5,
                        4,
                        3,
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            },
            {
                args: [
                    [
                        -3,
                        -1,
                        -2
                    ]
                ],
                expected: [
                    -3,
                    -2,
                    -1
                ]
            },
            {
                args: [
                    [
                        0,
                        0,
                        0
                    ]
                ],
                expected: [
                    0,
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        9,
                        1,
                        8,
                        2
                    ]
                ],
                expected: [
                    1,
                    2,
                    8,
                    9
                ]
            },
            {
                args: [
                    [
                        100,
                        -1
                    ]
                ],
                expected: [
                    -1,
                    100
                ]
            }
        ],
        hints: [
            "Find the smallest value in the unsorted part and swap it to the front of that part.",
            "Track the index of the minimum from i onward, then swap it with position i.",
            "for i: min = i; for j>i: if a[j] < a[min] min = j; swap a[i], a[min]."
        ],
        solutions: [
            {
                label: "Selection sort",
                approach: "Select the minimum of the remainder and swap it into place.",
                js: "function selectionSort(nums) {\n  const a = [...nums];\n  for (let i = 0; i < a.length; i++) {\n    let min = i;\n    for (let j = i + 1; j < a.length; j++) if (a[j] < a[min]) min = j;\n    if (min !== i) { const t = a[i]; a[i] = a[min]; a[min] = t; }\n  }\n  return a;\n}\n",
                ts: "function selectionSort(nums: number[]): number[] {\n  const a = [...nums];\n  for (let i = 0; i < a.length; i++) {\n    let min = i;\n    for (let j = i + 1; j < a.length; j++) if (a[j] < a[min]) min = j;\n    if (min !== i) { const t = a[i]; a[i] = a[min]; a[min] = t; }\n  }\n  return a;\n}\n",
                commentedCode: {
                    js: "function selectionSort(nums) {\n  // Sort a copy while growing a finished prefix from left to right.\n  const a = [...nums];\n  for (let i = 0; i < a.length; i++) {\n    // Assume the first unsorted position holds the remaining minimum.\n    let min = i;\n    // Search the rest of the unsorted suffix for a smaller value.\n    for (let j = i + 1; j < a.length; j++) if (a[j] < a[min]) min = j;\n    // Place that minimum at the next position in the sorted prefix.\n    if (min !== i) { const t = a[i]; a[i] = a[min]; a[min] = t; }\n  }\n  return a;\n}\n",
                    ts: "function selectionSort(nums: number[]): number[] {\n  // Sort a copy while growing a finished prefix from left to right.\n  const a = [...nums];\n  for (let i = 0; i < a.length; i++) {\n    // Assume the first unsorted position holds the remaining minimum.\n    let min = i;\n    // Search the rest of the unsorted suffix for a smaller value.\n    for (let j = i + 1; j < a.length; j++) if (a[j] < a[min]) min = j;\n    // Place that minimum at the next position in the sorted prefix.\n    if (min !== i) { const t = a[i]; a[i] = a[min]; a[min] = t; }\n  }\n  return a;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            },
            {
                label: "Extract minimums",
                approach: "Repeatedly remove and append the current minimum.",
                js: "function selectionSort(nums) {\n  const rest = [...nums];\n  const out = [];\n  while (rest.length) {\n    let min = 0;\n    for (let j = 1; j < rest.length; j++) if (rest[j] < rest[min]) min = j;\n    out.push(rest.splice(min, 1)[0]);\n  }\n  return out;\n}\n",
                ts: "function selectionSort(nums: number[]): number[] {\n  const rest = [...nums];\n  const out = [];\n  while (rest.length) {\n    let min = 0;\n    for (let j = 1; j < rest.length; j++) if (rest[j] < rest[min]) min = j;\n    out.push(rest.splice(min, 1)[0]);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function selectionSort(nums) {\n  // Keep unselected values separate from the sorted output.\n  const rest = [...nums];\n  const out = [];\n  while (rest.length) {\n    // Find the index of the smallest value still available.\n    let min = 0;\n    for (let j = 1; j < rest.length; j++) if (rest[j] < rest[min]) min = j;\n    // Remove that minimum and append it to the ascending result.\n    out.push(rest.splice(min, 1)[0]);\n  }\n  return out;\n}\n",
                    ts: "function selectionSort(nums: number[]): number[] {\n  // Keep unselected values separate from the sorted output.\n  const rest = [...nums];\n  const out: number[] = [];\n  while (rest.length) {\n    // Find the index of the smallest value still available.\n    let min = 0;\n    for (let j = 1; j < rest.length; j++) if (rest[j] < rest[min]) min = j;\n    // Remove that minimum and append it to the ascending result.\n    out.push(rest.splice(min, 1)[0]);\n  }\n  return out;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "so1-insertion-sort",
        slug: "insertion-sort",
        title: "Insertion Sort",
        difficulty: "medium",
        statement: "Sort the list ascending using insertion sort — grow a sorted prefix by inserting each value into its correct spot. Return the sorted array.",
        examples: [
            {
                input: "[3,1,2]",
                output: "[1,2,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1,2,3]",
                output: "[1,2,3]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 2000"
        ],
        functionName: "insertionSort",
        starter: {
            js: "function insertionSort(nums) {\n  // Insert each value into a growing sorted prefix.\n}\n",
            ts: "function insertionSort(nums: number[]): number[] {\n  // Insert each value into a growing sorted prefix.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        1,
                        2
                    ]
                ],
                expected: [
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    []
                ],
                expected: []
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: [
                    1,
                    2,
                    3
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        5,
                        4,
                        3,
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            },
            {
                args: [
                    [
                        3,
                        3,
                        1,
                        2
                    ]
                ],
                expected: [
                    1,
                    2,
                    3,
                    3
                ]
            },
            {
                args: [
                    [
                        -1,
                        -5,
                        0
                    ]
                ],
                expected: [
                    -5,
                    -1,
                    0
                ]
            },
            {
                args: [
                    [
                        7
                    ]
                ],
                expected: [
                    7
                ]
            },
            {
                args: [
                    [
                        4,
                        1,
                        4,
                        1
                    ]
                ],
                expected: [
                    1,
                    1,
                    4,
                    4
                ]
            }
        ],
        hints: [
            "The prefix a[0..i-1] is kept sorted; insert a[i] into it.",
            "Shift larger elements of the prefix one step right, then drop the key into the gap.",
            "let key = a[i]; j = i-1; while (j>=0 && a[j] > key) { a[j+1]=a[j]; j--; } a[j+1]=key."
        ],
        solutions: [
            {
                label: "Insertion sort",
                approach: "Shift the sorted prefix right to open a slot for each key.",
                js: "function insertionSort(nums) {\n  const a = [...nums];\n  for (let i = 1; i < a.length; i++) {\n    const key = a[i];\n    let j = i - 1;\n    while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; }\n    a[j + 1] = key;\n  }\n  return a;\n}\n",
                ts: "function insertionSort(nums: number[]): number[] {\n  const a = [...nums];\n  for (let i = 1; i < a.length; i++) {\n    const key = a[i];\n    let j = i - 1;\n    while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; }\n    a[j + 1] = key;\n  }\n  return a;\n}\n",
                commentedCode: {
                    js: "function insertionSort(nums) {\n  // Work on a copy; the prefix before i stays sorted.\n  const a = [...nums];\n  for (let i = 1; i < a.length; i++) {\n    // Save the next value before shifting larger prefix values right.\n    const key = a[i];\n    let j = i - 1;\n    while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; }\n    // Insert the key into the gap left by the shifts.\n    a[j + 1] = key;\n  }\n  return a;\n}\n",
                    ts: "function insertionSort(nums: number[]): number[] {\n  // Work on a copy; the prefix before i stays sorted.\n  const a = [...nums];\n  for (let i = 1; i < a.length; i++) {\n    // Save the next value before shifting larger prefix values right.\n    const key = a[i];\n    let j = i - 1;\n    while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; }\n    // Insert the key into the gap left by the shifts.\n    a[j + 1] = key;\n  }\n  return a;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            },
            {
                label: "Binary-search insert",
                approach: "Find each key's slot with a binary search into the sorted output.",
                js: "function insertionSort(nums) {\n  const out = [];\n  for (const x of nums) {\n    let lo = 0, hi = out.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (out[mid] <= x) lo = mid + 1; else hi = mid; }\n    out.splice(lo, 0, x);\n  }\n  return out;\n}\n",
                ts: "function insertionSort(nums: number[]): number[] {\n  const out: number[] = [];\n  for (const x of nums) {\n    let lo = 0, hi = out.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (out[mid] <= x) lo = mid + 1; else hi = mid; }\n    out.splice(lo, 0, x);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function insertionSort(nums) {\n  // Maintain a separate output that is sorted after every insertion.\n  const out = [];\n  for (const x of nums) {\n    // Binary-search for the position after existing values equal to x.\n    let lo = 0, hi = out.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (out[mid] <= x) lo = mid + 1; else hi = mid; }\n    // Insert x at its sorted position; shifting still costs linear time.\n    out.splice(lo, 0, x);\n  }\n  return out;\n}\n",
                    ts: "function insertionSort(nums: number[]): number[] {\n  // Maintain a separate output that is sorted after every insertion.\n  const out: number[] = [];\n  for (const x of nums) {\n    // Binary-search for the position after existing values equal to x.\n    let lo = 0, hi = out.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (out[mid] <= x) lo = mid + 1; else hi = mid; }\n    // Insert x at its sorted position; shifting still costs linear time.\n    out.splice(lo, 0, x);\n  }\n  return out;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "so1-is-sorted",
        slug: "is-sorted",
        title: "Is It Sorted?",
        difficulty: "easy",
        statement: "Return `true` if the list is in non-decreasing (ascending, ties allowed) order.",
        examples: [
            {
                input: "[1,2,3]",
                output: "true"
            },
            {
                input: "[3,2]",
                output: "false"
            },
            {
                input: "[]",
                output: "true"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "isSorted",
        starter: {
            js: "function isSorted(nums) {\n  // True if non-decreasing.\n}\n",
            ts: "function isSorted(nums: number[]): boolean {\n  // True if non-decreasing.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        3,
                        2
                    ]
                ],
                expected: false
            },
            {
                args: [
                    []
                ],
                expected: true
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        3,
                        2
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        -1,
                        0,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        5,
                        5,
                        4
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: true
            }
        ],
        hints: [
            "Any adjacent pair out of order means the whole list isn't sorted.",
            "Scan once; if some element is smaller than the one before it, return false.",
            "for i from 1: if nums[i-1] > nums[i] return false; return true."
        ],
        solutions: [
            {
                label: "Adjacent check",
                approach: "Verify every neighbour pair is in order.",
                js: "function isSorted(nums) {\n  for (let i = 1; i < nums.length; i++) if (nums[i - 1] > nums[i]) return false;\n  return true;\n}\n",
                ts: "function isSorted(nums: number[]): boolean {\n  for (let i = 1; i < nums.length; i++) if (nums[i - 1] > nums[i]) return false;\n  return true;\n}\n",
                commentedCode: {
                    js: "function isSorted(nums) {\n  // One descending adjacent pair is enough to disprove sorted order.\n  for (let i = 1; i < nums.length; i++) if (nums[i - 1] > nums[i]) return false;\n  // No inversion was found, so the whole array is non-decreasing.\n  return true;\n}\n",
                    ts: "function isSorted(nums: number[]): boolean {\n  // One descending adjacent pair is enough to disprove sorted order.\n  for (let i = 1; i < nums.length; i++) if (nums[i - 1] > nums[i]) return false;\n  // No inversion was found, so the whole array is non-decreasing.\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Every helper",
                approach: "Use Array.every over neighbour pairs.",
                js: "function isSorted(nums) {\n  return nums.every((v, i) => i === 0 || nums[i - 1] <= v);\n}\n",
                ts: "function isSorted(nums: number[]): boolean {\n  return nums.every((v, i) => i === 0 || nums[i - 1] <= v);\n}\n",
                commentedCode: {
                    js: "function isSorted(nums) {\n  // The first value has no predecessor; every later value must be at least its predecessor.\n  return nums.every((value, i) => i === 0 || nums[i - 1] <= value);\n}\n",
                    ts: "function isSorted(nums: number[]): boolean {\n  // The first value has no predecessor; every later value must be at least its predecessor.\n  return nums.every((value, i) => i === 0 || nums[i - 1] <= value);\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    /* -------------------- Sorting II -------------------- */ {
        id: "so2-merge-two",
        slug: "merge-two-sorted",
        title: "Merge Two Sorted Lists",
        difficulty: "easy",
        statement: "Given two ascending lists, return a single ascending list containing all their values.",
        examples: [
            {
                input: "[1,3], [2,4]",
                output: "[1,2,3,4]"
            },
            {
                input: "[], [1]",
                output: "[1]"
            },
            {
                input: "[1,2], []",
                output: "[1,2]"
            }
        ],
        constraints: [
            "both inputs are sorted ascending",
            "0 <= lengths <= 10000"
        ],
        functionName: "mergeTwoSorted",
        starter: {
            js: "function mergeTwoSorted(a, b) {\n  // Merge two sorted lists into one sorted list.\n}\n",
            ts: "function mergeTwoSorted(a: number[], b: number[]): number[] {\n  // Merge two sorted lists into one sorted list.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        3
                    ],
                    [
                        2,
                        4
                    ]
                ],
                expected: [
                    1,
                    2,
                    3,
                    4
                ]
            },
            {
                args: [
                    [],
                    [
                        1
                    ]
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    []
                ],
                expected: [
                    1,
                    2
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [],
                    []
                ],
                expected: []
            },
            {
                args: [
                    [
                        1,
                        1
                    ],
                    [
                        1
                    ]
                ],
                expected: [
                    1,
                    1,
                    1
                ]
            },
            {
                args: [
                    [
                        1,
                        5
                    ],
                    [
                        2,
                        3,
                        4
                    ]
                ],
                expected: [
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            },
            {
                args: [
                    [
                        -1,
                        0
                    ],
                    [
                        -2,
                        3
                    ]
                ],
                expected: [
                    -2,
                    -1,
                    0,
                    3
                ]
            },
            {
                args: [
                    [
                        5
                    ],
                    [
                        5
                    ]
                ],
                expected: [
                    5,
                    5
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        0
                    ]
                ],
                expected: [
                    0,
                    1,
                    2,
                    3
                ]
            }
        ],
        hints: [
            "Walk both lists at once with two pointers, always taking the smaller front value.",
            "When one list runs out, append whatever remains of the other.",
            "while (i<a.length && j<b.length) push the smaller; then drain the leftovers."
        ],
        solutions: [
            {
                label: "Two-pointer merge",
                approach: "Repeatedly take the smaller head of the two lists.",
                js: "function mergeTwoSorted(a, b) {\n  const out = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
                ts: "function mergeTwoSorted(a: number[], b: number[]): number[] {\n  const out: number[] = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
                commentedCode: {
                    js: "function mergeTwoSorted(a, b) {\n  // Build the merged result without changing either input.\n  const out = [];\n  let i = 0, j = 0;\n  // The smaller current value is the next value in sorted order.\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  // Once one input ends, the other input's remainder is already sorted.\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
                    ts: "function mergeTwoSorted(a: number[], b: number[]): number[] {\n  // Build the merged result without changing either input.\n  const out: number[] = [];\n  let i = 0, j = 0;\n  // The smaller current value is the next value in sorted order.\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  // Once one input ends, the other input's remainder is already sorted.\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n"
                },
                time: "O(n + m)",
                space: "O(n + m)"
            },
            {
                label: "Concat and sort",
                approach: "Combine and sort — simpler, though it ignores the sorted inputs.",
                js: "function mergeTwoSorted(a, b) {\n  return [...a, ...b].sort((x, y) => x - y);\n}\n",
                ts: "function mergeTwoSorted(a: number[], b: number[]): number[] {\n  return [...a, ...b].sort((x, y) => x - y);\n}\n",
                commentedCode: {
                    js: "function mergeTwoSorted(a, b) {\n  // Copy both inputs into one array, then compare numerically for ascending order.\n  return [...a, ...b].sort((x, y) => x - y);\n}\n",
                    ts: "function mergeTwoSorted(a: number[], b: number[]): number[] {\n  // Copy both inputs into one array, then compare numerically for ascending order.\n  return [...a, ...b].sort((x, y) => x - y);\n}\n"
                },
                time: "O((n+m) log (n+m))",
                space: "O(n + m)"
            }
        ]
    },
    {
        id: "so2-merge-sort",
        slug: "merge-sort",
        title: "Merge Sort",
        difficulty: "medium",
        statement: "Sort the list ascending using merge sort — split, sort each half, and merge. Return the sorted array.",
        examples: [
            {
                input: "[3,1,2]",
                output: "[1,2,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[5,4,3,2,1]",
                output: "[1,2,3,4,5]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "mergeSort",
        starter: {
            js: "function mergeSort(nums) {\n  // Split, sort halves, merge.\n}\n",
            ts: "function mergeSort(nums: number[]): number[] {\n  // Split, sort halves, merge.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        1,
                        2
                    ]
                ],
                expected: [
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    []
                ],
                expected: []
            },
            {
                args: [
                    [
                        5,
                        4,
                        3,
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    [
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        4,
                        2,
                        4,
                        2
                    ]
                ],
                expected: [
                    2,
                    2,
                    4,
                    4
                ]
            },
            {
                args: [
                    [
                        -1,
                        -3,
                        -2
                    ]
                ],
                expected: [
                    -3,
                    -2,
                    -1
                ]
            },
            {
                args: [
                    [
                        10,
                        1,
                        5,
                        3,
                        8
                    ]
                ],
                expected: [
                    1,
                    3,
                    5,
                    8,
                    10
                ]
            },
            {
                args: [
                    [
                        0,
                        0,
                        1,
                        -1
                    ]
                ],
                expected: [
                    -1,
                    0,
                    0,
                    1
                ]
            }
        ],
        hints: [
            "A list of length 0 or 1 is already sorted — that's the base case.",
            "Recursively sort the left and right halves, then merge them.",
            "return merge(mergeSort(left), mergeSort(right))."
        ],
        solutions: [
            {
                label: "Merge sort",
                approach: "Divide in half, sort each recursively, and merge the results.",
                js: "function mergeSort(nums) {\n  if (nums.length <= 1) return [...nums];\n  const mid = nums.length >> 1;\n  const l = mergeSort(nums.slice(0, mid));\n  const r = mergeSort(nums.slice(mid));\n  const out = [];\n  let i = 0, j = 0;\n  while (i < l.length && j < r.length) out.push(l[i] <= r[j] ? l[i++] : r[j++]);\n  while (i < l.length) out.push(l[i++]);\n  while (j < r.length) out.push(r[j++]);\n  return out;\n}\n",
                ts: "function mergeSort(nums: number[]): number[] {\n  if (nums.length <= 1) return [...nums];\n  const mid = nums.length >> 1;\n  const l = mergeSort(nums.slice(0, mid));\n  const r = mergeSort(nums.slice(mid));\n  const out: number[] = [];\n  let i = 0, j = 0;\n  while (i < l.length && j < r.length) out.push(l[i] <= r[j] ? l[i++] : r[j++]);\n  while (i < l.length) out.push(l[i++]);\n  while (j < r.length) out.push(r[j++]);\n  return out;\n}\n",
                commentedCode: {
                    js: "function mergeSort(nums) {\n  // Arrays of length zero or one are already sorted; return a copy.\n  if (nums.length <= 1) return [...nums];\n  // Divide the array into two smaller independent problems.\n  const mid = nums.length >> 1;\n  const left = mergeSort(nums.slice(0, mid));\n  const right = mergeSort(nums.slice(mid));\n  const out = [];\n  let i = 0, j = 0;\n  // Merge by repeatedly taking the smaller front value.\n  while (i < left.length && j < right.length) out.push(left[i] <= right[j] ? left[i++] : right[j++]);\n  // Append whichever sorted half still has values.\n  while (i < left.length) out.push(left[i++]);\n  while (j < right.length) out.push(right[j++]);\n  return out;\n}\n",
                    ts: "function mergeSort(nums: number[]): number[] {\n  // Arrays of length zero or one are already sorted; return a copy.\n  if (nums.length <= 1) return [...nums];\n  // Divide the array into two smaller independent problems.\n  const mid = nums.length >> 1;\n  const left = mergeSort(nums.slice(0, mid));\n  const right = mergeSort(nums.slice(mid));\n  const out: number[] = [];\n  let i = 0, j = 0;\n  // Merge by repeatedly taking the smaller front value.\n  while (i < left.length && j < right.length) out.push(left[i] <= right[j] ? left[i++] : right[j++]);\n  // Append whichever sorted half still has values.\n  while (i < left.length) out.push(left[i++]);\n  while (j < right.length) out.push(right[j++]);\n  return out;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Bottom-up merge",
                approach: "Iteratively merge runs of doubling width.",
                js: "function mergeSort(nums) {\n  let runs = nums.map((x) => [x]);\n  while (runs.length > 1) {\n    const next = [];\n    for (let i = 0; i < runs.length; i += 2) {\n      if (i + 1 >= runs.length) { next.push(runs[i]); continue; }\n      const a = runs[i], b = runs[i + 1], out = [];\n      let x = 0, y = 0;\n      while (x < a.length && y < b.length) out.push(a[x] <= b[y] ? a[x++] : b[y++]);\n      while (x < a.length) out.push(a[x++]);\n      while (y < b.length) out.push(b[y++]);\n      next.push(out);\n    }\n    runs = next;\n  }\n  return runs.length ? runs[0] : [];\n}\n",
                ts: "function mergeSort(nums: number[]): number[] {\n  let runs: number[][] = nums.map((x) => [x]);\n  while (runs.length > 1) {\n    const next: number[][] = [];\n    for (let i = 0; i < runs.length; i += 2) {\n      if (i + 1 >= runs.length) { next.push(runs[i]); continue; }\n      const a = runs[i], b = runs[i + 1], out: number[] = [];\n      let x = 0, y = 0;\n      while (x < a.length && y < b.length) out.push(a[x] <= b[y] ? a[x++] : b[y++]);\n      while (x < a.length) out.push(a[x++]);\n      while (y < b.length) out.push(b[y++]);\n      next.push(out);\n    }\n    runs = next;\n  }\n  return runs.length ? runs[0] : [];\n}\n",
                commentedCode: {
                    js: "function mergeSort(nums) {\n  // Treat each value as a sorted run of length one.\n  let runs = nums.map((value) => [value]);\n  // Merge adjacent runs until only the fully sorted run remains.\n  while (runs.length > 1) {\n    const next = [];\n    for (let i = 0; i < runs.length; i += 2) {\n      // Carry an unpaired final run into the next round unchanged.\n      if (i + 1 >= runs.length) { next.push(runs[i]); continue; }\n      const a = runs[i], b = runs[i + 1], out = [];\n      let x = 0, y = 0;\n      // Merge the current pair by selecting its smaller front value.\n      while (x < a.length && y < b.length) out.push(a[x] <= b[y] ? a[x++] : b[y++]);\n      while (x < a.length) out.push(a[x++]);\n      while (y < b.length) out.push(b[y++]);\n      next.push(out);\n    }\n    runs = next;\n  }\n  // The empty input has no run; otherwise return the final run.\n  return runs.length ? runs[0] : [];\n}\n",
                    ts: "function mergeSort(nums: number[]): number[] {\n  // Treat each value as a sorted run of length one.\n  let runs: number[][] = nums.map((value) => [value]);\n  // Merge adjacent runs until only the fully sorted run remains.\n  while (runs.length > 1) {\n    const next: number[][] = [];\n    for (let i = 0; i < runs.length; i += 2) {\n      // Carry an unpaired final run into the next round unchanged.\n      if (i + 1 >= runs.length) { next.push(runs[i]); continue; }\n      const a = runs[i], b = runs[i + 1], out: number[] = [];\n      let x = 0, y = 0;\n      // Merge the current pair by selecting its smaller front value.\n      while (x < a.length && y < b.length) out.push(a[x] <= b[y] ? a[x++] : b[y++]);\n      while (x < a.length) out.push(a[x++]);\n      while (y < b.length) out.push(b[y++]);\n      next.push(out);\n    }\n    runs = next;\n  }\n  // The empty input has no run; otherwise return the final run.\n  return runs.length ? runs[0] : [];\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "so2-quick-sort",
        slug: "quick-sort",
        title: "Quick Sort",
        difficulty: "medium",
        statement: "Sort the list ascending using quicksort — partition around a pivot, then sort the parts. Return the sorted array.",
        examples: [
            {
                input: "[3,1,2]",
                output: "[1,2,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[5,3,8,1]",
                output: "[1,3,5,8]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "quickSort",
        starter: {
            js: "function quickSort(nums) {\n  // Partition around a pivot, sort the parts.\n}\n",
            ts: "function quickSort(nums: number[]): number[] {\n  // Partition around a pivot, sort the parts.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        1,
                        2
                    ]
                ],
                expected: [
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    []
                ],
                expected: []
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1
                    ]
                ],
                expected: [
                    1,
                    3,
                    5,
                    8
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    [
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        3,
                        3,
                        3
                    ]
                ],
                expected: [
                    3,
                    3,
                    3
                ]
            },
            {
                args: [
                    [
                        -2,
                        5,
                        -1,
                        0
                    ]
                ],
                expected: [
                    -2,
                    -1,
                    0,
                    5
                ]
            },
            {
                args: [
                    [
                        9,
                        8,
                        7,
                        6,
                        5
                    ]
                ],
                expected: [
                    5,
                    6,
                    7,
                    8,
                    9
                ]
            },
            {
                args: [
                    [
                        4,
                        1,
                        4,
                        1,
                        4
                    ]
                ],
                expected: [
                    1,
                    1,
                    4,
                    4,
                    4
                ]
            }
        ],
        hints: [
            "Pick a pivot, then split the rest into 'less than or equal' and 'greater'.",
            "Recursively sort each partition and concatenate around the pivot.",
            "return [...quickSort(less), pivot, ...quickSort(greater)]."
        ],
        solutions: [
            {
                label: "Quicksort (partition by value)",
                approach: "Split around the last element, recurse on each side.",
                js: "function quickSort(nums) {\n  if (nums.length <= 1) return [...nums];\n  const pivot = nums[nums.length - 1];\n  const less = [], greater = [];\n  for (let i = 0; i < nums.length - 1; i++) {\n    (nums[i] <= pivot ? less : greater).push(nums[i]);\n  }\n  return [...quickSort(less), pivot, ...quickSort(greater)];\n}\n",
                ts: "function quickSort(nums: number[]): number[] {\n  if (nums.length <= 1) return [...nums];\n  const pivot = nums[nums.length - 1];\n  const less: number[] = [], greater: number[] = [];\n  for (let i = 0; i < nums.length - 1; i++) {\n    (nums[i] <= pivot ? less : greater).push(nums[i]);\n  }\n  return [...quickSort(less), pivot, ...quickSort(greater)];\n}\n",
                commentedCode: {
                    js: "function quickSort(nums) {\n  // A zero- or one-value partition is already sorted.\n  if (nums.length <= 1) return [...nums];\n  // Use the final value as the partition pivot.\n  const pivot = nums[nums.length - 1];\n  const less = [], greater = [];\n  // Place every non-pivot value on the correct side.\n  for (let i = 0; i < nums.length - 1; i++) {\n    (nums[i] <= pivot ? less : greater).push(nums[i]);\n  }\n  // Sort both partitions recursively and join them around the pivot.\n  return [...quickSort(less), pivot, ...quickSort(greater)];\n}\n",
                    ts: "function quickSort(nums: number[]): number[] {\n  // A zero- or one-value partition is already sorted.\n  if (nums.length <= 1) return [...nums];\n  // Use the final value as the partition pivot.\n  const pivot = nums[nums.length - 1];\n  const less: number[] = [], greater: number[] = [];\n  // Place every non-pivot value on the correct side.\n  for (let i = 0; i < nums.length - 1; i++) {\n    (nums[i] <= pivot ? less : greater).push(nums[i]);\n  }\n  // Sort both partitions recursively and join them around the pivot.\n  return [...quickSort(less), pivot, ...quickSort(greater)];\n}\n"
                },
                time: "O(n log n) avg",
                space: "O(n)"
            },
            {
                label: "Three-way partition",
                approach: "Group into less, equal, greater to handle duplicates well.",
                js: "function quickSort(nums) {\n  if (nums.length <= 1) return [...nums];\n  const pivot = nums[nums.length >> 1];\n  const less = [], equal = [], greater = [];\n  for (const x of nums) {\n    if (x < pivot) less.push(x);\n    else if (x > pivot) greater.push(x);\n    else equal.push(x);\n  }\n  return [...quickSort(less), ...equal, ...quickSort(greater)];\n}\n",
                ts: "function quickSort(nums: number[]): number[] {\n  if (nums.length <= 1) return [...nums];\n  const pivot = nums[nums.length >> 1];\n  const less: number[] = [], equal: number[] = [], greater: number[] = [];\n  for (const x of nums) {\n    if (x < pivot) less.push(x);\n    else if (x > pivot) greater.push(x);\n    else equal.push(x);\n  }\n  return [...quickSort(less), ...equal, ...quickSort(greater)];\n}\n",
                commentedCode: {
                    js: "function quickSort(nums) {\n  // A partition with at most one value needs no further work.\n  if (nums.length <= 1) return [...nums];\n  // Select a middle value, which often avoids an extreme pivot.\n  const pivot = nums[nums.length >> 1];\n  const less = [], equal = [], greater = [];\n  // Three groups keep duplicate pivot values out of recursive calls.\n  for (const value of nums) {\n    if (value < pivot) less.push(value);\n    else if (value > pivot) greater.push(value);\n    else equal.push(value);\n  }\n  // Only the less and greater groups still need sorting.\n  return [...quickSort(less), ...equal, ...quickSort(greater)];\n}\n",
                    ts: "function quickSort(nums: number[]): number[] {\n  // A partition with at most one value needs no further work.\n  if (nums.length <= 1) return [...nums];\n  // Select a middle value, which often avoids an extreme pivot.\n  const pivot = nums[nums.length >> 1];\n  const less: number[] = [], equal: number[] = [], greater: number[] = [];\n  // Three groups keep duplicate pivot values out of recursive calls.\n  for (const value of nums) {\n    if (value < pivot) less.push(value);\n    else if (value > pivot) greater.push(value);\n    else equal.push(value);\n  }\n  // Only the less and greater groups still need sorting.\n  return [...quickSort(less), ...equal, ...quickSort(greater)];\n}\n"
                },
                time: "O(n log n) avg",
                space: "O(n)"
            }
        ]
    },
    {
        id: "so2-heap-sort",
        slug: "heap-sort",
        title: "Heap Sort",
        difficulty: "medium",
        statement: "Sort the list ascending using a heap — push everything into a min-heap and pop it all out. Return the sorted array.",
        examples: [
            {
                input: "[3,1,2]",
                output: "[1,2,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[4,1,3,2]",
                output: "[1,2,3,4]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "heapSort",
        starter: {
            js: "// A MinHeap is available if you paste your Stage-2 implementation.\nfunction heapSort(nums) {\n  // Push all, then pop all.\n}\n",
            ts: "function heapSort(nums: number[]): number[] {\n  // Push all, then pop all.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        1,
                        2
                    ]
                ],
                expected: [
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    []
                ],
                expected: []
            },
            {
                args: [
                    [
                        4,
                        1,
                        3,
                        2
                    ]
                ],
                expected: [
                    1,
                    2,
                    3,
                    4
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    [
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        5,
                        5,
                        5
                    ]
                ],
                expected: [
                    5,
                    5,
                    5
                ]
            },
            {
                args: [
                    [
                        -1,
                        -2,
                        -3
                    ]
                ],
                expected: [
                    -3,
                    -2,
                    -1
                ]
            },
            {
                args: [
                    [
                        8,
                        3,
                        9,
                        1,
                        7
                    ]
                ],
                expected: [
                    1,
                    3,
                    7,
                    8,
                    9
                ]
            },
            {
                args: [
                    [
                        0,
                        -1,
                        1,
                        0
                    ]
                ],
                expected: [
                    -1,
                    0,
                    0,
                    1
                ]
            }
        ],
        hints: [
            "A min-heap always hands you the smallest remaining value.",
            "Push every value, then pop repeatedly to read them out in order.",
            "for v of nums: heap.push(v); then while heap.size(): out.push(heap.pop())."
        ],
        solutions: [
            {
                label: "Min-heap drain",
                approach: "Heapify all values, then pop the minimum until empty.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction heapSort(nums) {\n  const h = new MinHeap();\n  for (const v of nums) h.push(v);\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction heapSort(nums: number[]): number[] {\n  const h = new MinHeap();\n  for (const v of nums) h.push(v);\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
                commentedCode: {
                    js: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction heapSort(nums) {\n  // Insert every value so the heap can expose minima in order.\n  const heap = new MinHeap();\n  for (const value of nums) heap.push(value);\n  const out = [];\n  // Repeatedly remove the smallest remaining value.\n  while (heap.size() > 0) out.push(heap.pop());\n  return out;\n}\n`,
                    ts: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction heapSort(nums: number[]): number[] {\n  // Insert every value so the heap can expose minima in order.\n  const heap = new MinHeap();\n  for (const value of nums) heap.push(value);\n  const out: number[] = [];\n  // Repeatedly remove the smallest remaining value.\n  while (heap.size() > 0) out.push(heap.pop());\n  return out;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "In-place sift-down heap",
                approach: "Build a max-heap in the array, then repeatedly move the max to the end.",
                js: "function heapSort(nums) {\n  const a = [...nums];\n  const n = a.length;\n  const down = (i, size) => {\n    while (true) {\n      let s = i; const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < size && a[l] > a[s]) s = l;\n      if (r < size && a[r] > a[s]) s = r;\n      if (s === i) break;\n      const t = a[s]; a[s] = a[i]; a[i] = t; i = s;\n    }\n  };\n  for (let i = (n >> 1) - 1; i >= 0; i--) down(i, n);\n  for (let end = n - 1; end > 0; end--) {\n    const t = a[0]; a[0] = a[end]; a[end] = t;\n    down(0, end);\n  }\n  return a;\n}\n",
                ts: "function heapSort(nums: number[]): number[] {\n  const a = [...nums];\n  const n = a.length;\n  const down = (i: number, size: number) => {\n    while (true) {\n      let s = i; const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < size && a[l] > a[s]) s = l;\n      if (r < size && a[r] > a[s]) s = r;\n      if (s === i) break;\n      const t = a[s]; a[s] = a[i]; a[i] = t; i = s;\n    }\n  };\n  for (let i = (n >> 1) - 1; i >= 0; i--) down(i, n);\n  for (let end = n - 1; end > 0; end--) {\n    const t = a[0]; a[0] = a[end]; a[end] = t;\n    down(0, end);\n  }\n  return a;\n}\n",
                commentedCode: {
                    js: "function heapSort(nums) {\n  // Sort a copy by first arranging it as a max-heap.\n  const a = [...nums];\n  const n = a.length;\n  const down = (i, size) => {\n    while (true) {\n      // Find the largest of this node and its children inside the heap.\n      let largest = i; const left = 2 * i + 1, right = 2 * i + 2;\n      if (left < size && a[left] > a[largest]) largest = left;\n      if (right < size && a[right] > a[largest]) largest = right;\n      // Heap order is restored when the parent is already largest.\n      if (largest === i) break;\n      const temp = a[largest]; a[largest] = a[i]; a[i] = temp; i = largest;\n    }\n  };\n  // Sift every internal node down to build the initial max-heap.\n  for (let i = (n >> 1) - 1; i >= 0; i--) down(i, n);\n  for (let end = n - 1; end > 0; end--) {\n    // Move the heap maximum into its final position.\n    const temp = a[0]; a[0] = a[end]; a[end] = temp;\n    // Restore heap order in the shorter unsorted prefix.\n    down(0, end);\n  }\n  return a;\n}\n",
                    ts: "function heapSort(nums: number[]): number[] {\n  // Sort a copy by first arranging it as a max-heap.\n  const a = [...nums];\n  const n = a.length;\n  const down = (i: number, size: number) => {\n    while (true) {\n      // Find the largest of this node and its children inside the heap.\n      let largest = i; const left = 2 * i + 1, right = 2 * i + 2;\n      if (left < size && a[left] > a[largest]) largest = left;\n      if (right < size && a[right] > a[largest]) largest = right;\n      // Heap order is restored when the parent is already largest.\n      if (largest === i) break;\n      const temp = a[largest]; a[largest] = a[i]; a[i] = temp; i = largest;\n    }\n  };\n  // Sift every internal node down to build the initial max-heap.\n  for (let i = (n >> 1) - 1; i >= 0; i--) down(i, n);\n  for (let end = n - 1; end > 0; end--) {\n    // Move the heap maximum into its final position.\n    const temp = a[0]; a[0] = a[end]; a[end] = temp;\n    // Restore heap order in the shorter unsorted prefix.\n    down(0, end);\n  }\n  return a;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    /* -------------------- Binary Search -------------------- */ {
        id: "bs-search",
        slug: "binary-search",
        title: "Binary Search",
        difficulty: "easy",
        statement: "Given a list sorted ascending, return the index of `target`, or -1 if it isn't present.",
        examples: [
            {
                input: "[1,3,5,7], 5",
                output: "2"
            },
            {
                input: "[1,2,3], 4",
                output: "-1"
            },
            {
                input: "[], 1",
                output: "-1"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "values are distinct"
        ],
        functionName: "binarySearch",
        starter: {
            js: "function binarySearch(sorted, target) {\n  // Return the index of target, or -1.\n}\n",
            ts: "function binarySearch(sorted: number[], target: number): number {\n  // Return the index of target, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        3,
                        5,
                        7
                    ],
                    5
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    4
                ],
                expected: -1
            },
            {
                args: [
                    [],
                    1
                ],
                expected: -1
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ],
                    1
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1
                    ],
                    2
                ],
                expected: -1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    1
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    5
                ],
                expected: 4
            },
            {
                args: [
                    [
                        2,
                        4,
                        6,
                        8
                    ],
                    6
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        3,
                        5
                    ],
                    2
                ],
                expected: -1
            }
        ],
        hints: [
            "Compare against the middle element to discard half the range each step.",
            "Keep lo and hi bounds; if the middle is too small, search right, else search left.",
            "while (lo <= hi) { mid = (lo+hi)>>1; if equal return mid; ... }"
        ],
        solutions: [
            {
                label: "Iterative binary search",
                approach: "Halve the search window until the target is found or the window empties.",
                js: "function binarySearch(sorted, target) {\n  let lo = 0, hi = sorted.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] === target) return mid;\n    if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}\n",
                ts: "function binarySearch(sorted: number[], target: number): number {\n  let lo = 0, hi = sorted.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] === target) return mid;\n    if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function binarySearch(sorted, target) {\n  // Search inside the inclusive interval from lo through hi.\n  let lo = 0, hi = sorted.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    // A match can be returned immediately because values are distinct.\n    if (sorted[mid] === target) return mid;\n    // Discard the half that cannot contain the target.\n    if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  // An empty search interval means the target is absent.\n  return -1;\n}\n",
                    ts: "function binarySearch(sorted: number[], target: number): number {\n  // Search inside the inclusive interval from lo through hi.\n  let lo = 0, hi = sorted.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    // A match can be returned immediately because values are distinct.\n    if (sorted[mid] === target) return mid;\n    // Discard the half that cannot contain the target.\n    if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  // An empty search interval means the target is absent.\n  return -1;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "Linear scan",
                approach: "A simple O(n) baseline for comparison.",
                js: "function binarySearch(sorted, target) {\n  return sorted.indexOf(target);\n}\n",
                ts: "function binarySearch(sorted: number[], target: number): number {\n  return sorted.indexOf(target);\n}\n",
                commentedCode: {
                    js: "function binarySearch(sorted, target) {\n  // indexOf scans from left to right and returns -1 when no match exists.\n  return sorted.indexOf(target);\n}\n",
                    ts: "function binarySearch(sorted: number[], target: number): number {\n  // indexOf scans from left to right and returns -1 when no match exists.\n  return sorted.indexOf(target);\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "bs-first-position",
        slug: "first-position",
        title: "First Position",
        difficulty: "medium",
        statement: "Given a sorted list that may contain duplicates, return the index of the first occurrence of `target`, or -1 if absent.",
        examples: [
            {
                input: "[1,2,2,2,3], 2",
                output: "1"
            },
            {
                input: "[1,2,3], 4",
                output: "-1"
            },
            {
                input: "[2,2,2], 2",
                output: "0"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "0 <= length <= 10000"
        ],
        functionName: "firstPosition",
        starter: {
            js: "function firstPosition(sorted, target) {\n  // Leftmost index of target, or -1.\n}\n",
            ts: "function firstPosition(sorted: number[], target: number): number {\n  // Leftmost index of target, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        2,
                        3
                    ],
                    2
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    4
                ],
                expected: -1
            },
            {
                args: [
                    [
                        2,
                        2,
                        2
                    ],
                    2
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    [],
                    1
                ],
                expected: -1
            },
            {
                args: [
                    [
                        1
                    ],
                    1
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        1,
                        1,
                        1
                    ],
                    1
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        3,
                        3
                    ],
                    3
                ],
                expected: 2
            },
            {
                args: [
                    [
                        5,
                        5,
                        6
                    ],
                    5
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    2
                ],
                expected: 1
            }
        ],
        hints: [
            "When you find the target, don't stop — a match might exist further left.",
            "On a match, record the index and continue searching the left half.",
            "if (sorted[mid] === target) { res = mid; hi = mid - 1; } else adjust bounds normally."
        ],
        solutions: [
            {
                label: "Binary search, keep going left",
                approach: "Record matches and shrink toward the left edge.",
                js: "function firstPosition(sorted, target) {\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] === target) { res = mid; hi = mid - 1; }\n    else if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return res;\n}\n",
                ts: "function firstPosition(sorted: number[], target: number): number {\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] === target) { res = mid; hi = mid - 1; }\n    else if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: "function firstPosition(sorted, target) {\n  // Keep the best match while searching an inclusive interval.\n  let lo = 0, hi = sorted.length - 1, result = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] === target) {\n      // Record this match, then look left for an earlier duplicate.\n      result = mid; hi = mid - 1;\n    } else if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return result;\n}\n",
                    ts: "function firstPosition(sorted: number[], target: number): number {\n  // Keep the best match while searching an inclusive interval.\n  let lo = 0, hi = sorted.length - 1, result = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] === target) {\n      // Record this match, then look left for an earlier duplicate.\n      result = mid; hi = mid - 1;\n    } else if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return result;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "Built-in indexOf",
                approach: "indexOf already returns the first match — an O(n) baseline.",
                js: "function firstPosition(sorted, target) {\n  return sorted.indexOf(target);\n}\n",
                ts: "function firstPosition(sorted: number[], target: number): number {\n  return sorted.indexOf(target);\n}\n",
                commentedCode: {
                    js: "function firstPosition(sorted, target) {\n  // indexOf returns the leftmost matching index, or -1 when absent.\n  return sorted.indexOf(target);\n}\n",
                    ts: "function firstPosition(sorted: number[], target: number): number {\n  // indexOf returns the leftmost matching index, or -1 when absent.\n  return sorted.indexOf(target);\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "bs-insert-position",
        slug: "search-insert-position",
        title: "Search Insert Position",
        difficulty: "easy",
        statement: "Given a sorted list of distinct values, return the index of `target`, or the index where it would be inserted to keep the list sorted.",
        examples: [
            {
                input: "[1,3,5,6], 5",
                output: "2"
            },
            {
                input: "[1,3,5,6], 2",
                output: "1"
            },
            {
                input: "[1,3,5,6], 7",
                output: "4"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "values are distinct"
        ],
        functionName: "searchInsert",
        starter: {
            js: "function searchInsert(sorted, target) {\n  // Index of target, or where it should go.\n}\n",
            ts: "function searchInsert(sorted: number[], target: number): number {\n  // Index of target, or where it should go.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        3,
                        5,
                        6
                    ],
                    5
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        3,
                        5,
                        6
                    ],
                    2
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        3,
                        5,
                        6
                    ],
                    7
                ],
                expected: 4
            }
        ],
        hidden: [
            {
                args: [
                    [],
                    1
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1
                    ],
                    0
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1
                    ],
                    2
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        3,
                        5
                    ],
                    4
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        3,
                        5
                    ],
                    1
                ],
                expected: 0
            },
            {
                args: [
                    [
                        2,
                        4,
                        6
                    ],
                    6
                ],
                expected: 2
            }
        ],
        hints: [
            "You're looking for the first index whose value is ≥ target (a lower bound).",
            "Binary search with a half-open window [lo, hi); move lo up while the middle is too small.",
            "while (lo < hi) { mid = (lo+hi)>>1; if (sorted[mid] < target) lo = mid+1; else hi = mid; } return lo."
        ],
        solutions: [
            {
                label: "Lower-bound binary search",
                approach: "Find the first position not less than the target.",
                js: "function searchInsert(sorted, target) {\n  let lo = 0, hi = sorted.length;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid;\n  }\n  return lo;\n}\n",
                ts: "function searchInsert(sorted: number[], target: number): number {\n  let lo = 0, hi = sorted.length;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid;\n  }\n  return lo;\n}\n",
                commentedCode: {
                    js: "function searchInsert(sorted, target) {\n  // Search a half-open interval for the first value not below target.\n  let lo = 0, hi = sorted.length;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    // Values below target cannot be the insertion position.\n    if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid;\n  }\n  // The converged boundary is either target's index or its insertion slot.\n  return lo;\n}\n",
                    ts: "function searchInsert(sorted: number[], target: number): number {\n  // Search a half-open interval for the first value not below target.\n  let lo = 0, hi = sorted.length;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    // Values below target cannot be the insertion position.\n    if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid;\n  }\n  // The converged boundary is either target's index or its insertion slot.\n  return lo;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "findIndex",
                approach: "Return the first index ≥ target, or the length if none.",
                js: "function searchInsert(sorted, target) {\n  const i = sorted.findIndex((v) => v >= target);\n  return i === -1 ? sorted.length : i;\n}\n",
                ts: "function searchInsert(sorted: number[], target: number): number {\n  const i = sorted.findIndex((v) => v >= target);\n  return i === -1 ? sorted.length : i;\n}\n",
                commentedCode: {
                    js: "function searchInsert(sorted, target) {\n  // Find the first value that target can sit before without breaking order.\n  const index = sorted.findIndex((value) => value >= target);\n  // If every value is smaller, target belongs after the final element.\n  return index === -1 ? sorted.length : index;\n}\n",
                    ts: "function searchInsert(sorted: number[], target: number): number {\n  // Find the first value that target can sit before without breaking order.\n  const index = sorted.findIndex((value) => value >= target);\n  // If every value is smaller, target belongs after the final element.\n  return index === -1 ? sorted.length : index;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "bs-sqrt",
        slug: "integer-sqrt",
        title: "Integer Square Root",
        difficulty: "medium",
        statement: "Return the floor of the square root of a non-negative integer `n` (no floating point).",
        examples: [
            {
                input: "8",
                output: "2"
            },
            {
                input: "16",
                output: "4"
            },
            {
                input: "0",
                output: "0"
            }
        ],
        constraints: [
            "0 <= n <= 2000000000"
        ],
        functionName: "integerSqrt",
        starter: {
            js: "function integerSqrt(n) {\n  // floor(sqrt(n)) via binary search.\n}\n",
            ts: "function integerSqrt(n: number): number {\n  // floor(sqrt(n)) via binary search.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    8
                ],
                expected: 2
            },
            {
                args: [
                    16
                ],
                expected: 4
            },
            {
                args: [
                    0
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    1
                ],
                expected: 1
            },
            {
                args: [
                    2
                ],
                expected: 1
            },
            {
                args: [
                    15
                ],
                expected: 3
            },
            {
                args: [
                    24
                ],
                expected: 4
            },
            {
                args: [
                    25
                ],
                expected: 5
            },
            {
                args: [
                    100
                ],
                expected: 10
            }
        ],
        hints: [
            "The answer lies between 0 and n; binary search for the largest m with m² ≤ n.",
            "When mid*mid <= n, record mid and search higher; otherwise search lower.",
            "Guard tiny inputs: integerSqrt(0) = 0 and integerSqrt(1) = 1."
        ],
        solutions: [
            {
                label: "Binary search",
                approach: "Search for the largest m whose square doesn't exceed n.",
                js: "function integerSqrt(n) {\n  if (n < 2) return n;\n  let lo = 1, hi = n, res = 0;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (mid * mid <= n) { res = mid; lo = mid + 1; }\n    else hi = mid - 1;\n  }\n  return res;\n}\n",
                ts: "function integerSqrt(n: number): number {\n  if (n < 2) return n;\n  let lo = 1, hi = n, res = 0;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (mid * mid <= n) { res = mid; lo = mid + 1; }\n    else hi = mid - 1;\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: "function integerSqrt(n) {\n  // Zero and one are their own integer square roots.\n  if (n < 2) return n;\n  // Track the largest candidate whose square fits within n.\n  let lo = 1, hi = n, result = 0;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (mid * mid <= n) {\n      // mid fits, so save it and test larger candidates.\n      result = mid; lo = mid + 1;\n    } else hi = mid - 1;\n  }\n  return result;\n}\n",
                    ts: "function integerSqrt(n: number): number {\n  // Zero and one are their own integer square roots.\n  if (n < 2) return n;\n  // Track the largest candidate whose square fits within n.\n  let lo = 1, hi = n, result = 0;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (mid * mid <= n) {\n      // mid fits, so save it and test larger candidates.\n      result = mid; lo = mid + 1;\n    } else hi = mid - 1;\n  }\n  return result;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "Linear climb",
                approach: "Increase the root while its square still fits.",
                js: "function integerSqrt(n) {\n  let r = 0;\n  while ((r + 1) * (r + 1) <= n) r++;\n  return r;\n}\n",
                ts: "function integerSqrt(n: number): number {\n  let r = 0;\n  while ((r + 1) * (r + 1) <= n) r++;\n  return r;\n}\n",
                commentedCode: {
                    js: "function integerSqrt(n) {\n  // Increase the candidate while the next integer's square still fits.\n  let root = 0;\n  while ((root + 1) * (root + 1) <= n) root++;\n  // The next square is too large, so this is floor(sqrt(n)).\n  return root;\n}\n",
                    ts: "function integerSqrt(n: number): number {\n  // Increase the candidate while the next integer's square still fits.\n  let root = 0;\n  while ((root + 1) * (root + 1) <= n) root++;\n  // The next square is too large, so this is floor(sqrt(n)).\n  return root;\n}\n"
                },
                time: "O(√n)",
                space: "O(1)"
            }
        ]
    },
    /* -------------------- Backtracking Intro -------------------- */ {
        id: "bt-subsets",
        slug: "subsets",
        title: "All Subsets",
        difficulty: "medium",
        statement: "Given a list of distinct values sorted ascending, return every subset. Each subset must be in ascending order, and the list of subsets must be ordered by size, then lexicographically.",
        examples: [
            {
                input: "[1,2]",
                output: "[[],[1],[2],[1,2]]"
            },
            {
                input: "[]",
                output: "[[]]"
            },
            {
                input: "[1]",
                output: "[[],[1]]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 12",
            "values are distinct and sorted ascending"
        ],
        functionName: "subsets",
        starter: {
            js: "function subsets(nums) {\n  // Every subset, ordered by size then lexicographically.\n}\n",
            ts: "function subsets(nums: number[]): number[][] {\n  // Every subset, ordered by size then lexicographically.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: [
                    [],
                    [
                        1
                    ],
                    [
                        2
                    ],
                    [
                        1,
                        2
                    ]
                ]
            },
            {
                args: [
                    []
                ],
                expected: [
                    []
                ]
            },
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: [
                    [],
                    [
                        1
                    ]
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: [
                    [],
                    [
                        1
                    ],
                    [
                        2
                    ],
                    [
                        3
                    ],
                    [
                        1,
                        2
                    ],
                    [
                        1,
                        3
                    ],
                    [
                        2,
                        3
                    ],
                    [
                        1,
                        2,
                        3
                    ]
                ]
            },
            {
                args: [
                    [
                        5
                    ]
                ],
                expected: [
                    [],
                    [
                        5
                    ]
                ]
            },
            {
                args: [
                    [
                        2,
                        4
                    ]
                ],
                expected: [
                    [],
                    [
                        2
                    ],
                    [
                        4
                    ],
                    [
                        2,
                        4
                    ]
                ]
            },
            {
                args: [
                    [
                        3,
                        7
                    ]
                ],
                expected: [
                    [],
                    [
                        3
                    ],
                    [
                        7
                    ],
                    [
                        3,
                        7
                    ]
                ]
            },
            {
                args: [
                    [
                        -1,
                        1
                    ]
                ],
                expected: [
                    [],
                    [
                        -1
                    ],
                    [
                        1
                    ],
                    [
                        -1,
                        1
                    ]
                ]
            },
            {
                args: [
                    [
                        9
                    ]
                ],
                expected: [
                    [],
                    [
                        9
                    ]
                ]
            }
        ],
        hints: [
            "For each element you choose to include it or not — a binary decision tree.",
            "Backtrack: at each index, recurse without the element, then with it.",
            "After generating, sort by length then lexicographically for the required order."
        ],
        solutions: [
            {
                label: "Backtracking",
                approach: "Explore include/exclude choices, then canonicalise the order.",
                js: "function subsets(nums) {\n  const res = [];\n  const bt = (start, cur) => {\n    res.push([...cur]);\n    for (let i = start; i < nums.length; i++) { cur.push(nums[i]); bt(i + 1, cur); cur.pop(); }\n  };\n  bt(0, []);\n  const lex = (a, b) => { const m = Math.min(a.length, b.length); for (let i = 0; i < m; i++) if (a[i] !== b[i]) return a[i] - b[i]; return a.length - b.length; };\n  return res.sort((a, b) => a.length - b.length || lex(a, b));\n}\n",
                ts: "function subsets(nums: number[]): number[][] {\n  const res: number[][] = [];\n  const bt = (start: number, cur: number[]) => {\n    res.push([...cur]);\n    for (let i = start; i < nums.length; i++) { cur.push(nums[i]); bt(i + 1, cur); cur.pop(); }\n  };\n  bt(0, []);\n  const lex = (a, b) => { const m = Math.min(a.length, b.length); for (let i = 0; i < m; i++) if (a[i] !== b[i]) return a[i] - b[i]; return a.length - b.length; };\n  return res.sort((a, b) => a.length - b.length || lex(a, b));\n}\n",
                commentedCode: {
                    js: "function subsets(nums) {\n  const result = [];\n  const backtrack = (start, current) => {\n    // Every partial choice is itself one valid subset.\n    result.push([...current]);\n    for (let i = start; i < nums.length; i++) {\n      // Choose nums[i], then only consider later values next.\n      current.push(nums[i]);\n      backtrack(i + 1, current);\n      // Undo the choice before exploring the next sibling branch.\n      current.pop();\n    }\n  };\n  backtrack(0, []);\n  // Compare equal-sized subsets element by element.\n  const lex = (a, b) => { const length = Math.min(a.length, b.length); for (let i = 0; i < length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return a.length - b.length; };\n  // Meet the required ordering: size first, then lexicographic value.\n  return result.sort((a, b) => a.length - b.length || lex(a, b));\n}\n",
                    ts: "function subsets(nums: number[]): number[][] {\n  const result: number[][] = [];\n  const backtrack = (start: number, current: number[]) => {\n    // Every partial choice is itself one valid subset.\n    result.push([...current]);\n    for (let i = start; i < nums.length; i++) {\n      // Choose nums[i], then only consider later values next.\n      current.push(nums[i]);\n      backtrack(i + 1, current);\n      // Undo the choice before exploring the next sibling branch.\n      current.pop();\n    }\n  };\n  backtrack(0, []);\n  // Compare equal-sized subsets element by element.\n  const lex = (a: number[], b: number[]) => { const length = Math.min(a.length, b.length); for (let i = 0; i < length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return a.length - b.length; };\n  // Meet the required ordering: size first, then lexicographic value.\n  return result.sort((a, b) => a.length - b.length || lex(a, b));\n}\n"
                },
                time: "O(n · 2ⁿ)",
                space: "O(n · 2ⁿ)"
            },
            {
                label: "Iterative doubling",
                approach: "Start with the empty set; for each value, add it to every existing subset.",
                js: "function subsets(nums) {\n  let res = [[]];\n  for (const x of nums) {\n    const more = res.map((s) => [...s, x]);\n    res = res.concat(more);\n  }\n  const lex = (a, b) => { const m = Math.min(a.length, b.length); for (let i = 0; i < m; i++) if (a[i] !== b[i]) return a[i] - b[i]; return a.length - b.length; };\n  return res.sort((a, b) => a.length - b.length || lex(a, b));\n}\n",
                ts: "function subsets(nums: number[]): number[][] {\n  let res: number[][] = [[]];\n  for (const x of nums) {\n    const more = res.map((s) => [...s, x]);\n    res = res.concat(more);\n  }\n  const lex = (a, b) => { const m = Math.min(a.length, b.length); for (let i = 0; i < m; i++) if (a[i] !== b[i]) return a[i] - b[i]; return a.length - b.length; };\n  return res.sort((a, b) => a.length - b.length || lex(a, b));\n}\n",
                commentedCode: {
                    js: "function subsets(nums) {\n  // Begin with the only subset of an empty prefix.\n  let result = [[]];\n  for (const value of nums) {\n    // Pair every existing subset with a copy that includes this value.\n    const withValue = result.map((subset) => [...subset, value]);\n    result = result.concat(withValue);\n  }\n  // Compare subset contents lexicographically when their sizes tie.\n  const lex = (a, b) => { const length = Math.min(a.length, b.length); for (let i = 0; i < length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return a.length - b.length; };\n  return result.sort((a, b) => a.length - b.length || lex(a, b));\n}\n",
                    ts: "function subsets(nums: number[]): number[][] {\n  // Begin with the only subset of an empty prefix.\n  let result: number[][] = [[]];\n  for (const value of nums) {\n    // Pair every existing subset with a copy that includes this value.\n    const withValue = result.map((subset) => [...subset, value]);\n    result = result.concat(withValue);\n  }\n  // Compare subset contents lexicographically when their sizes tie.\n  const lex = (a: number[], b: number[]) => { const length = Math.min(a.length, b.length); for (let i = 0; i < length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return a.length - b.length; };\n  return result.sort((a, b) => a.length - b.length || lex(a, b));\n}\n"
                },
                time: "O(n · 2ⁿ)",
                space: "O(n · 2ⁿ)"
            }
        ]
    },
    {
        id: "bt-permutations",
        slug: "permutations",
        title: "All Permutations",
        difficulty: "medium",
        statement: "Given a list of distinct values, return every permutation, with the list of permutations sorted lexicographically.",
        examples: [
            {
                input: "[1,2]",
                output: "[[1,2],[2,1]]"
            },
            {
                input: "[1]",
                output: "[[1]]"
            },
            {
                input: "[]",
                output: "[[]]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 7",
            "values are distinct"
        ],
        functionName: "permutations",
        starter: {
            js: "function permutations(nums) {\n  // Every permutation, sorted lexicographically.\n}\n",
            ts: "function permutations(nums: number[]): number[][] {\n  // Every permutation, sorted lexicographically.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: [
                    [
                        1,
                        2
                    ],
                    [
                        2,
                        1
                    ]
                ]
            },
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: [
                    [
                        1
                    ]
                ]
            },
            {
                args: [
                    []
                ],
                expected: [
                    []
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        1,
                        3,
                        2
                    ],
                    [
                        2,
                        1,
                        3
                    ],
                    [
                        2,
                        3,
                        1
                    ],
                    [
                        3,
                        1,
                        2
                    ],
                    [
                        3,
                        2,
                        1
                    ]
                ]
            },
            {
                args: [
                    [
                        2,
                        1
                    ]
                ],
                expected: [
                    [
                        1,
                        2
                    ],
                    [
                        2,
                        1
                    ]
                ]
            },
            {
                args: [
                    [
                        5,
                        6
                    ]
                ],
                expected: [
                    [
                        5,
                        6
                    ],
                    [
                        6,
                        5
                    ]
                ]
            },
            {
                args: [
                    [
                        0,
                        1
                    ]
                ],
                expected: [
                    [
                        0,
                        1
                    ],
                    [
                        1,
                        0
                    ]
                ]
            },
            {
                args: [
                    [
                        7
                    ]
                ],
                expected: [
                    [
                        7
                    ]
                ]
            },
            {
                args: [
                    [
                        9,
                        8
                    ]
                ],
                expected: [
                    [
                        8,
                        9
                    ],
                    [
                        9,
                        8
                    ]
                ]
            }
        ],
        hints: [
            "At each position, try every value not yet used, then recurse.",
            "Track which indices are used; when the current arrangement is full, record it.",
            "Sort the finished list lexicographically for the required order."
        ],
        solutions: [
            {
                label: "Backtracking with used[]",
                approach: "Place each unused value in turn, then canonicalise.",
                js: "function permutations(nums) {\n  const res = [];\n  const used = new Array(nums.length).fill(false);\n  const bt = (cur) => {\n    if (cur.length === nums.length) { res.push([...cur]); return; }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true; cur.push(nums[i]);\n      bt(cur);\n      cur.pop(); used[i] = false;\n    }\n  };\n  bt([]);\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return res.sort(lex);\n}\n",
                ts: "function permutations(nums: number[]): number[][] {\n  const res: number[][] = [];\n  const used = new Array(nums.length).fill(false);\n  const bt = (cur: number[]) => {\n    if (cur.length === nums.length) { res.push([...cur]); return; }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true; cur.push(nums[i]);\n      bt(cur);\n      cur.pop(); used[i] = false;\n    }\n  };\n  bt([]);\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return res.sort(lex);\n}\n",
                commentedCode: {
                    js: "function permutations(nums) {\n  const result = [];\n  // Track positions rather than values so each input position is used once.\n  const used = new Array(nums.length).fill(false);\n  const backtrack = (current) => {\n    // A full arrangement is one complete permutation.\n    if (current.length === nums.length) { result.push([...current]); return; }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      // Choose this unused value for the next position.\n      used[i] = true; current.push(nums[i]);\n      backtrack(current);\n      // Remove the choice so another value can occupy this position.\n      current.pop(); used[i] = false;\n    }\n  };\n  backtrack([]);\n  // Sort completed arrangements into the required lexicographic order.\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return result.sort(lex);\n}\n",
                    ts: "function permutations(nums: number[]): number[][] {\n  const result: number[][] = [];\n  // Track positions rather than values so each input position is used once.\n  const used = new Array(nums.length).fill(false);\n  const backtrack = (current: number[]) => {\n    // A full arrangement is one complete permutation.\n    if (current.length === nums.length) { result.push([...current]); return; }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      // Choose this unused value for the next position.\n      used[i] = true; current.push(nums[i]);\n      backtrack(current);\n      // Remove the choice so another value can occupy this position.\n      current.pop(); used[i] = false;\n    }\n  };\n  backtrack([]);\n  // Sort completed arrangements into the required lexicographic order.\n  const lex = (a: number[], b: number[]) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return result.sort(lex);\n}\n"
                },
                time: "O(n · n!)",
                space: "O(n · n!)"
            },
            {
                label: "Insert-into-gaps",
                approach: "Build permutations by inserting each value into every gap.",
                js: "function permutations(nums) {\n  let res = [[]];\n  for (const x of nums) {\n    const next = [];\n    for (const perm of res) {\n      for (let i = 0; i <= perm.length; i++) {\n        next.push([...perm.slice(0, i), x, ...perm.slice(i)]);\n      }\n    }\n    res = next;\n  }\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return res.sort(lex);\n}\n",
                ts: "function permutations(nums: number[]): number[][] {\n  let res: number[][] = [[]];\n  for (const x of nums) {\n    const next: number[][] = [];\n    for (const perm of res) {\n      for (let i = 0; i <= perm.length; i++) {\n        next.push([...perm.slice(0, i), x, ...perm.slice(i)]);\n      }\n    }\n    res = next;\n  }\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return res.sort(lex);\n}\n",
                commentedCode: {
                    js: "function permutations(nums) {\n  // The empty arrangement is the seed for incremental construction.\n  let result = [[]];\n  for (const value of nums) {\n    const next = [];\n    for (const permutation of result) {\n      // Insert value into every gap of each existing permutation.\n      for (let i = 0; i <= permutation.length; i++) {\n        next.push([...permutation.slice(0, i), value, ...permutation.slice(i)]);\n      }\n    }\n    result = next;\n  }\n  // Canonicalise the generated permutations lexicographically.\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return result.sort(lex);\n}\n",
                    ts: "function permutations(nums: number[]): number[][] {\n  // The empty arrangement is the seed for incremental construction.\n  let result: number[][] = [[]];\n  for (const value of nums) {\n    const next: number[][] = [];\n    for (const permutation of result) {\n      // Insert value into every gap of each existing permutation.\n      for (let i = 0; i <= permutation.length; i++) {\n        next.push([...permutation.slice(0, i), value, ...permutation.slice(i)]);\n      }\n    }\n    result = next;\n  }\n  // Canonicalise the generated permutations lexicographically.\n  const lex = (a: number[], b: number[]) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return result.sort(lex);\n}\n"
                },
                time: "O(n · n!)",
                space: "O(n · n!)"
            }
        ]
    },
    {
        id: "bt-combinations",
        slug: "combinations",
        title: "Combinations",
        difficulty: "medium",
        statement: "Return every combination of `k` numbers chosen from 1 to `n`. Each combination is ascending, and the list is sorted lexicographically.",
        examples: [
            {
                input: "3, 2",
                output: "[[1,2],[1,3],[2,3]]"
            },
            {
                input: "1, 1",
                output: "[[1]]"
            },
            {
                input: "3, 0",
                output: "[[]]"
            }
        ],
        constraints: [
            "1 <= n <= 12",
            "0 <= k <= n"
        ],
        functionName: "combinations",
        starter: {
            js: "function combinations(n, k) {\n  // Every k-combination of 1..n, sorted lexicographically.\n}\n",
            ts: "function combinations(n: number, k: number): number[][] {\n  // Every k-combination of 1..n, sorted lexicographically.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    3,
                    2
                ],
                expected: [
                    [
                        1,
                        2
                    ],
                    [
                        1,
                        3
                    ],
                    [
                        2,
                        3
                    ]
                ]
            },
            {
                args: [
                    1,
                    1
                ],
                expected: [
                    [
                        1
                    ]
                ]
            },
            {
                args: [
                    3,
                    0
                ],
                expected: [
                    []
                ]
            }
        ],
        hidden: [
            {
                args: [
                    4,
                    2
                ],
                expected: [
                    [
                        1,
                        2
                    ],
                    [
                        1,
                        3
                    ],
                    [
                        1,
                        4
                    ],
                    [
                        2,
                        3
                    ],
                    [
                        2,
                        4
                    ],
                    [
                        3,
                        4
                    ]
                ]
            },
            {
                args: [
                    2,
                    2
                ],
                expected: [
                    [
                        1,
                        2
                    ]
                ]
            },
            {
                args: [
                    3,
                    3
                ],
                expected: [
                    [
                        1,
                        2,
                        3
                    ]
                ]
            },
            {
                args: [
                    4,
                    1
                ],
                expected: [
                    [
                        1
                    ],
                    [
                        2
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ]
                ]
            },
            {
                args: [
                    2,
                    1
                ],
                expected: [
                    [
                        1
                    ],
                    [
                        2
                    ]
                ]
            },
            {
                args: [
                    4,
                    3
                ],
                expected: [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        1,
                        2,
                        4
                    ],
                    [
                        1,
                        3,
                        4
                    ],
                    [
                        2,
                        3,
                        4
                    ]
                ]
            }
        ],
        hints: [
            "Build a combination by choosing increasing values so you never repeat or reorder.",
            "Backtrack from a start value; recurse with the next start once you pick a number.",
            "Stop a branch when the combination reaches length k."
        ],
        solutions: [
            {
                label: "Backtracking",
                approach: "Pick ascending values from a moving start index.",
                js: "function combinations(n, k) {\n  const res = [];\n  const bt = (start, cur) => {\n    if (cur.length === k) { res.push([...cur]); return; }\n    for (let i = start; i <= n; i++) { cur.push(i); bt(i + 1, cur); cur.pop(); }\n  };\n  bt(1, []);\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return res.sort(lex);\n}\n",
                ts: "function combinations(n: number, k: number): number[][] {\n  const res: number[][] = [];\n  const bt = (start: number, cur: number[]) => {\n    if (cur.length === k) { res.push([...cur]); return; }\n    for (let i = start; i <= n; i++) { cur.push(i); bt(i + 1, cur); cur.pop(); }\n  };\n  bt(1, []);\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return res.sort(lex);\n}\n",
                commentedCode: {
                    js: "function combinations(n, k) {\n  const result = [];\n  const backtrack = (start, current) => {\n    // Record a combination as soon as it contains exactly k values.\n    if (current.length === k) { result.push([...current]); return; }\n    for (let value = start; value <= n; value++) {\n      // Choosing only larger values next prevents repeats and reordering.\n      current.push(value);\n      backtrack(value + 1, current);\n      current.pop();\n    }\n  };\n  backtrack(1, []);\n  // Sort element by element to guarantee the requested order.\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return result.sort(lex);\n}\n",
                    ts: "function combinations(n: number, k: number): number[][] {\n  const result: number[][] = [];\n  const backtrack = (start: number, current: number[]) => {\n    // Record a combination as soon as it contains exactly k values.\n    if (current.length === k) { result.push([...current]); return; }\n    for (let value = start; value <= n; value++) {\n      // Choosing only larger values next prevents repeats and reordering.\n      current.push(value);\n      backtrack(value + 1, current);\n      current.pop();\n    }\n  };\n  backtrack(1, []);\n  // Sort element by element to guarantee the requested order.\n  const lex = (a: number[], b: number[]) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return result.sort(lex);\n}\n"
                },
                time: "O(k · C(n,k))",
                space: "O(k · C(n,k))"
            },
            {
                label: "Filter subsets",
                approach: "Enumerate subsets of the right size (fine for small n).",
                js: "function combinations(n, k) {\n  let res = [[]];\n  for (let x = 1; x <= n; x++) res = res.concat(res.map((s) => [...s, x]));\n  const out = res.filter((s) => s.length === k);\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return out.sort(lex);\n}\n",
                ts: "function combinations(n: number, k: number): number[][] {\n  let res: number[][] = [[]];\n  for (let x = 1; x <= n; x++) res = res.concat(res.map((s) => [...s, x]));\n  const out = res.filter((s) => s.length === k);\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return out.sort(lex);\n}\n",
                commentedCode: {
                    js: "function combinations(n, k) {\n  // Begin with the empty subset of the values considered so far.\n  let subsets = [[]];\n  for (let value = 1; value <= n; value++) {\n    // Duplicate every subset and append the new value to each duplicate.\n    subsets = subsets.concat(subsets.map((subset) => [...subset, value]));\n  }\n  // Only subsets containing exactly k values are combinations we need.\n  const result = subsets.filter((subset) => subset.length === k);\n  const lex = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return result.sort(lex);\n}\n",
                    ts: "function combinations(n: number, k: number): number[][] {\n  // Begin with the empty subset of the values considered so far.\n  let subsets: number[][] = [[]];\n  for (let value = 1; value <= n; value++) {\n    // Duplicate every subset and append the new value to each duplicate.\n    subsets = subsets.concat(subsets.map((subset) => [...subset, value]));\n  }\n  // Only subsets containing exactly k values are combinations we need.\n  const result = subsets.filter((subset) => subset.length === k);\n  const lex = (a: number[], b: number[]) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };\n  return result.sort(lex);\n}\n"
                },
                time: "O(2ⁿ)",
                space: "O(2ⁿ)"
            }
        ]
    },
    {
        id: "bt-count-subsets-sum",
        slug: "count-subsets-sum",
        title: "Count Subsets with Sum",
        difficulty: "medium",
        statement: "Return how many subsets of the list add up exactly to `target`. Elements at different positions are distinct even if equal, and the empty subset sums to 0.",
        examples: [
            {
                input: "[1,2,3], 3",
                output: "2",
                explanation: "{3} and {1,2}."
            },
            {
                input: "[1,2,3], 0",
                output: "1",
                explanation: "The empty subset."
            },
            {
                input: "[1,1,1], 2",
                output: "3"
            }
        ],
        constraints: [
            "0 <= nums.length <= 20"
        ],
        functionName: "countSubsetsWithSum",
        starter: {
            js: "function countSubsetsWithSum(nums, target) {\n  // How many subsets sum to target.\n}\n",
            ts: "function countSubsetsWithSum(nums: number[], target: number): number {\n  // How many subsets sum to target.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    3
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    0
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        1,
                        1
                    ],
                    2
                ],
                expected: 3
            }
        ],
        hidden: [
            {
                args: [
                    [],
                    0
                ],
                expected: 1
            },
            {
                args: [
                    [],
                    5
                ],
                expected: 0
            },
            {
                args: [
                    [
                        5
                    ],
                    5
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    5
                ],
                expected: 2
            },
            {
                args: [
                    [
                        2,
                        2,
                        2
                    ],
                    4
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        1
                    ],
                    2
                ],
                expected: 1
            }
        ],
        hints: [
            "At each element, branch: skip it, or include it in the running sum.",
            "When you've considered every element, count the branch if the sum equals target.",
            "bt(i, sum): if i === n count += (sum === target); else bt(i+1, sum) and bt(i+1, sum+nums[i])."
        ],
        solutions: [
            {
                label: "Backtracking count",
                approach: "Explore include/skip for each element and tally hits.",
                js: "function countSubsetsWithSum(nums, target) {\n  let count = 0;\n  const bt = (i, sum) => {\n    if (i === nums.length) { if (sum === target) count++; return; }\n    bt(i + 1, sum);\n    bt(i + 1, sum + nums[i]);\n  };\n  bt(0, 0);\n  return count;\n}\n",
                ts: "function countSubsetsWithSum(nums: number[], target: number): number {\n  let count = 0;\n  const bt = (i: number, sum: number) => {\n    if (i === nums.length) { if (sum === target) count++; return; }\n    bt(i + 1, sum);\n    bt(i + 1, sum + nums[i]);\n  };\n  bt(0, 0);\n  return count;\n}\n",
                commentedCode: {
                    js: "function countSubsetsWithSum(nums, target) {\n  let count = 0;\n  const backtrack = (index, sum) => {\n    if (index === nums.length) {\n      // A leaf represents one unique subset of input positions.\n      if (sum === target) count++;\n      return;\n    }\n    // Explore the branch that skips this value.\n    backtrack(index + 1, sum);\n    // Explore the branch that includes this value.\n    backtrack(index + 1, sum + nums[index]);\n  };\n  backtrack(0, 0);\n  return count;\n}\n",
                    ts: "function countSubsetsWithSum(nums: number[], target: number): number {\n  let count = 0;\n  const backtrack = (index: number, sum: number) => {\n    if (index === nums.length) {\n      // A leaf represents one unique subset of input positions.\n      if (sum === target) count++;\n      return;\n    }\n    // Explore the branch that skips this value.\n    backtrack(index + 1, sum);\n    // Explore the branch that includes this value.\n    backtrack(index + 1, sum + nums[index]);\n  };\n  backtrack(0, 0);\n  return count;\n}\n"
                },
                time: "O(2ⁿ)",
                space: "O(n)"
            },
            {
                label: "Enumerate subset sums",
                approach: "Grow the multiset of achievable sums, counting matches at the end.",
                js: "function countSubsetsWithSum(nums, target) {\n  let sums = [0];\n  for (const x of nums) sums = sums.concat(sums.map((s) => s + x));\n  return sums.filter((s) => s === target).length;\n}\n",
                ts: "function countSubsetsWithSum(nums: number[], target: number): number {\n  let sums = [0];\n  for (const x of nums) sums = sums.concat(sums.map((s) => s + x));\n  return sums.filter((s) => s === target).length;\n}\n",
                commentedCode: {
                    js: "function countSubsetsWithSum(nums, target) {\n  // Zero is the sum produced by the empty subset.\n  let sums = [0];\n  for (const value of nums) {\n    // Keep sums that skip value and add matching sums that include it.\n    sums = sums.concat(sums.map((sum) => sum + value));\n  }\n  // Each occurrence corresponds to one subset of input positions.\n  return sums.filter((sum) => sum === target).length;\n}\n",
                    ts: "function countSubsetsWithSum(nums: number[], target: number): number {\n  // Zero is the sum produced by the empty subset.\n  let sums = [0];\n  for (const value of nums) {\n    // Keep sums that skip value and add matching sums that include it.\n    sums = sums.concat(sums.map((sum) => sum + value));\n  }\n  // Each occurrence corresponds to one subset of input positions.\n  return sums.filter((sum) => sum === target).length;\n}\n"
                },
                time: "O(2ⁿ)",
                space: "O(2ⁿ)"
            }
        ]
    }
];
const stage3Problems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_data_stage3_02z-ert._.js.map