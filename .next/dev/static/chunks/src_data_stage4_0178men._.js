(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/stage4/fastSlow.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fastSlowMcqs",
    ()=>fastSlowMcqs,
    "fastSlowModule",
    ()=>fastSlowModule,
    "fastSlowProblems",
    ()=>fastSlowProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s4";
const P = [
    "fast-slow-pointers"
];
/**
 * Cycle problems represent a linked list as a `next` array: `next[i]` is the
 * index of the node after node i, or -1 for null. Traversal starts at node 0.
 */ const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "fs-middle",
        slug: "fast-slow-middle",
        title: "Middle of the List",
        difficulty: "easy",
        patternIds: P,
        statement: "A list is given as its array of values. Return the middle value (the second of two middles for even length), or -1 if empty. Use the fast/slow technique.",
        examples: [
            {
                input: "[1,2,3,4,5]",
                output: "3"
            },
            {
                input: "[1,2,3,4]",
                output: "3"
            },
            {
                input: "[1]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "middleValueFS",
        starter: {
            js: "function middleValueFS(values) {\n  // Middle value, or -1 if empty.\n}\n",
            ts: "function middleValueFS(values: number[]): number {\n  // Middle value, or -1 if empty.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: 1
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: -1
            },
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        10,
                        20,
                        30
                    ]
                ],
                expected: 20
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        9
                    ]
                ],
                expected: 9
            },
            {
                args: [
                    [
                        5,
                        5
                    ]
                ],
                expected: 5
            }
        ],
        hints: [
            "Advance a fast pointer two steps for every one step of a slow pointer.",
            "When fast runs off the end, slow sits at the middle.",
            "while (fast < n && fast+1 < n) { slow++; fast += 2; } return values[slow]."
        ],
        solutions: [
            {
                label: "Fast / slow pointers",
                approach: "Fast moves twice as quickly; slow ends at the middle.",
                js: "function middleValueFS(values) {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) { slow++; fast += 2; }\n  return values[slow];\n}\n",
                ts: "function middleValueFS(values: number[]): number {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) { slow++; fast += 2; }\n  return values[slow]!;\n}\n",
                commentedCode: {
                    js: "function middleValueFS(values) {\n  // Empty input has no middle value.\n  if (values.length === 0) return -1;\n  let slow = 0;\n  let fast = 0;\n  // Fast advances twice as far, so slow reaches the requested middle.\n  while (fast < values.length && fast + 1 < values.length) {\n    slow++;\n    fast += 2;\n  }\n  return values[slow];\n}\n",
                    ts: "function middleValueFS(values: number[]): number {\n  // Empty input has no middle value.\n  if (values.length === 0) return -1;\n  let slow = 0;\n  let fast = 0;\n  // Fast advances twice as far, so slow reaches the requested middle.\n  while (fast < values.length && fast + 1 < values.length) {\n    slow++;\n    fast += 2;\n  }\n  return values[slow]!;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Index the middle",
                approach: "Directly index floor(n/2).",
                js: "function middleValueFS(values) {\n  if (values.length === 0) return -1;\n  return values[Math.floor(values.length / 2)];\n}\n",
                ts: "function middleValueFS(values: number[]): number {\n  if (values.length === 0) return -1;\n  return values[Math.floor(values.length / 2)]!;\n}\n",
                commentedCode: {
                    js: "function middleValueFS(values) {\n  // Empty input has no middle value.\n  if (values.length === 0) return -1;\n  // Floor(length / 2) selects the second middle for even lengths.\n  return values[Math.floor(values.length / 2)];\n}\n",
                    ts: "function middleValueFS(values: number[]): number {\n  // Empty input has no middle value.\n  if (values.length === 0) return -1;\n  // Floor(length / 2) selects the second middle for even lengths.\n  return values[Math.floor(values.length / 2)]!;\n}\n"
                },
                time: "O(1)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "fs-nth-from-end",
        slug: "fast-slow-nth-from-end",
        title: "Nth from the End",
        difficulty: "easy",
        patternIds: P,
        statement: "A list is given as its array of values. Return the value `n` positions from the end (1-indexed), or -1 if out of range. Use a lead/trail pointer gap.",
        examples: [
            {
                input: "[1,2,3,4,5], 2",
                output: "4"
            },
            {
                input: "[1], 1",
                output: "1"
            },
            {
                input: "[1,2,3], 4",
                output: "-1"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000",
            "1 <= n"
        ],
        functionName: "nthFromEndFS",
        starter: {
            js: "function nthFromEndFS(values, n) {\n  // Value n from the end (1-indexed), or -1.\n}\n",
            ts: "function nthFromEndFS(values: number[], n: number): number {\n  // Value n from the end (1-indexed), or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    2
                ],
                expected: 4
            },
            {
                args: [
                    [
                        1
                    ],
                    1
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
                        1,
                        2,
                        3
                    ],
                    1
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    3
                ],
                expected: 1
            },
            {
                args: [
                    [
                        5,
                        6,
                        7,
                        8
                    ],
                    2
                ],
                expected: 7
            },
            {
                args: [
                    [
                        9,
                        9
                    ],
                    2
                ],
                expected: 9
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    3
                ],
                expected: -1
            }
        ],
        hints: [
            "Move a lead pointer n steps ahead first.",
            "Then advance lead and trail together until lead reaches the end.",
            "The from-end position n maps to index length - n."
        ],
        solutions: [
            {
                label: "Lead / trail gap",
                approach: "Open an n-step gap, then walk both pointers to the end.",
                js: "function nthFromEndFS(values, n) {\n  let lead = 0;\n  for (let i = 0; i < n; i++) { if (lead >= values.length) return -1; lead++; }\n  let trail = 0;\n  while (lead < values.length) { lead++; trail++; }\n  return values[trail];\n}\n",
                ts: "function nthFromEndFS(values: number[], n: number): number {\n  let lead = 0;\n  for (let i = 0; i < n; i++) { if (lead >= values.length) return -1; lead++; }\n  let trail = 0;\n  while (lead < values.length) { lead++; trail++; }\n  return values[trail]!;\n}\n",
                commentedCode: {
                    js: "function nthFromEndFS(values, n) {\n  let lead = 0;\n  // Create an n-position gap; an overrun means n is out of range.\n  for (let step = 0; step < n; step++) {\n    if (lead >= values.length) return -1;\n    lead++;\n  }\n  let trail = 0;\n  // Preserve the gap until lead reaches the end.\n  while (lead < values.length) {\n    lead++;\n    trail++;\n  }\n  return values[trail];\n}\n",
                    ts: "function nthFromEndFS(values: number[], n: number): number {\n  let lead = 0;\n  // Create an n-position gap; an overrun means n is out of range.\n  for (let step = 0; step < n; step++) {\n    if (lead >= values.length) return -1;\n    lead++;\n  }\n  let trail = 0;\n  // Preserve the gap until lead reaches the end.\n  while (lead < values.length) {\n    lead++;\n    trail++;\n  }\n  return values[trail]!;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Index from the front",
                approach: "Convert the from-end position into a front index.",
                js: "function nthFromEndFS(values, n) {\n  const i = values.length - n;\n  return i >= 0 && i < values.length ? values[i] : -1;\n}\n",
                ts: "function nthFromEndFS(values: number[], n: number): number {\n  const i = values.length - n;\n  return i >= 0 && i < values.length ? values[i]! : -1;\n}\n",
                commentedCode: {
                    js: "function nthFromEndFS(values, n) {\n  // Convert the one-indexed from-end position to an array index.\n  const index = values.length - n;\n  // Reject positions before or beyond the array.\n  return index >= 0 && index < values.length ? values[index] : -1;\n}\n",
                    ts: "function nthFromEndFS(values: number[], n: number): number {\n  // Convert the one-indexed from-end position to an array index.\n  const index = values.length - n;\n  // Reject positions before or beyond the array.\n  return index >= 0 && index < values.length ? values[index]! : -1;\n}\n"
                },
                time: "O(1)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "fs-happy",
        slug: "happy-number",
        title: "Happy Number",
        difficulty: "medium",
        patternIds: P,
        statement: "Repeatedly replace a number with the sum of the squares of its digits. Return `true` if this reaches 1, or `false` if it loops forever. Detect the loop with fast/slow.",
        examples: [
            {
                input: "19",
                output: "true"
            },
            {
                input: "1",
                output: "true"
            },
            {
                input: "2",
                output: "false"
            }
        ],
        constraints: [
            "1 <= n <= 1000000000"
        ],
        functionName: "isHappy",
        starter: {
            js: "function isHappy(n) {\n  // True if the digit-square process reaches 1.\n}\n",
            ts: "function isHappy(n: number): boolean {\n  // True if the digit-square process reaches 1.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    19
                ],
                expected: true
            },
            {
                args: [
                    1
                ],
                expected: true
            },
            {
                args: [
                    2
                ],
                expected: false
            }
        ],
        hidden: [
            {
                args: [
                    7
                ],
                expected: true
            },
            {
                args: [
                    4
                ],
                expected: false
            },
            {
                args: [
                    23
                ],
                expected: true
            },
            {
                args: [
                    100
                ],
                expected: true
            },
            {
                args: [
                    11
                ],
                expected: false
            },
            {
                args: [
                    10
                ],
                expected: true
            }
        ],
        hints: [
            "The sequence either reaches 1 or falls into a cycle — that's a fast/slow situation.",
            "Advance slow one square-step and fast two; if they meet at 1 it's happy.",
            "Alternatively remember seen values in a set and stop on a repeat."
        ],
        solutions: [
            {
                label: "Floyd cycle detection",
                approach: "Two pointers over the digit-square sequence meet inside any cycle.",
                js: "function isHappy(n) {\n  const sq = (x) => { let s = 0; while (x > 0) { const d = x % 10; s += d * d; x = Math.floor(x / 10); } return s; };\n  let slow = n, fast = n;\n  do { slow = sq(slow); fast = sq(sq(fast)); } while (slow !== fast);\n  return slow === 1;\n}\n",
                ts: "function isHappy(n: number): boolean {\n  const sq = (x: number) => { let s = 0; while (x > 0) { const d = x % 10; s += d * d; x = Math.floor(x / 10); } return s; };\n  let slow = n, fast = n;\n  do { slow = sq(slow); fast = sq(sq(fast)); } while (slow !== fast);\n  return slow === 1;\n}\n",
                commentedCode: {
                    js: "function isHappy(n) {\n  // Apply one digit-square transformation.\n  const next = (value) => {\n    let sum = 0;\n    while (value > 0) { const digit = value % 10; sum += digit * digit; value = Math.floor(value / 10); }\n    return sum;\n  };\n  let slow = n, fast = n;\n  // A non-happy sequence eventually cycles, so fast catches slow.\n  do { slow = next(slow); fast = next(next(fast)); } while (slow !== fast);\n  return slow === 1;\n}\n",
                    ts: "function isHappy(n: number): boolean {\n  // Apply one digit-square transformation.\n  const next = (value: number) => {\n    let sum = 0;\n    while (value > 0) { const digit = value % 10; sum += digit * digit; value = Math.floor(value / 10); }\n    return sum;\n  };\n  let slow = n, fast = n;\n  // A non-happy sequence eventually cycles, so fast catches slow.\n  do { slow = next(slow); fast = next(next(fast)); } while (slow !== fast);\n  return slow === 1;\n}\n"
                },
                time: "O(log n) per step",
                space: "O(1)"
            },
            {
                label: "Seen set",
                approach: "Track visited numbers; a repeat that isn't 1 means unhappy.",
                js: "function isHappy(n) {\n  const sq = (x) => { let s = 0; while (x > 0) { const d = x % 10; s += d * d; x = Math.floor(x / 10); } return s; };\n  const seen = new Set();\n  while (n !== 1 && !seen.has(n)) { seen.add(n); n = sq(n); }\n  return n === 1;\n}\n",
                ts: "function isHappy(n: number): boolean {\n  const sq = (x: number) => { let s = 0; while (x > 0) { const d = x % 10; s += d * d; x = Math.floor(x / 10); } return s; };\n  const seen = new Set<number>();\n  while (n !== 1 && !seen.has(n)) { seen.add(n); n = sq(n); }\n  return n === 1;\n}\n",
                commentedCode: {
                    js: "function isHappy(n) {\n  const next = (value) => { let sum = 0; while (value > 0) { const digit = value % 10; sum += digit * digit; value = Math.floor(value / 10); } return sum; };\n  // Remember sequence values so a repeat identifies a loop.\n  const seen = new Set();\n  while (n !== 1 && !seen.has(n)) { seen.add(n); n = next(n); }\n  return n === 1;\n}\n",
                    ts: "function isHappy(n: number): boolean {\n  const next = (value: number) => { let sum = 0; while (value > 0) { const digit = value % 10; sum += digit * digit; value = Math.floor(value / 10); } return sum; };\n  // Remember sequence values so a repeat identifies a loop.\n  const seen = new Set<number>();\n  while (n !== 1 && !seen.has(n)) { seen.add(n); n = next(n); }\n  return n === 1;\n}\n"
                },
                time: "O(log n) per step",
                space: "O(k)"
            }
        ]
    },
    {
        id: "fs-find-duplicate",
        slug: "find-the-duplicate",
        title: "Find the Duplicate Number",
        difficulty: "medium",
        patternIds: P,
        statement: "An array of length n+1 holds values in the range 1..n, with exactly one value repeated (possibly many times). Return that repeated value. Treat the array as a linked list and use Floyd's algorithm.",
        examples: [
            {
                input: "[1,3,4,2,2]",
                output: "2"
            },
            {
                input: "[3,1,3,4,2]",
                output: "3"
            },
            {
                input: "[1,1]",
                output: "1"
            }
        ],
        constraints: [
            "values are in 1..n where n = length - 1",
            "exactly one duplicated value"
        ],
        functionName: "findDuplicate",
        starter: {
            js: "function findDuplicate(nums) {\n  // The single duplicated value.\n}\n",
            ts: "function findDuplicate(nums: number[]): number {\n  // The single duplicated value.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        3,
                        4,
                        2,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        3,
                        1,
                        3,
                        4,
                        2
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        1
                    ]
                ],
                expected: 1
            }
        ],
        hidden: [
            {
                args: [
                    [
                        2,
                        2,
                        2,
                        2,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        4
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        4,
                        3,
                        1,
                        4,
                        2
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        2,
                        1,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        3,
                        2,
                        3
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        3,
                        3,
                        3,
                        3
                    ]
                ],
                expected: 3
            }
        ],
        hints: [
            "Following nums[i] as a 'next pointer' creates a cycle whose entrance is the duplicate.",
            "Phase 1: advance slow = nums[slow], fast = nums[nums[fast]] until they meet.",
            "Phase 2: reset one pointer to the start; step both one at a time to the cycle entrance."
        ],
        solutions: [
            {
                label: "Floyd's cycle detection",
                approach: "The array-as-list has a cycle entered at the duplicate value.",
                js: "function findDuplicate(nums) {\n  let slow = nums[0], fast = nums[0];\n  do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast);\n  slow = nums[0];\n  while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }\n  return slow;\n}\n",
                ts: "function findDuplicate(nums: number[]): number {\n  let slow = nums[0], fast = nums[0];\n  do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast);\n  slow = nums[0];\n  while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }\n  return slow;\n}\n",
                commentedCode: {
                    js: "function findDuplicate(nums) {\n  // Follow values as next pointers until fast catches slow in the cycle.\n  let slow = nums[0], fast = nums[0];\n  do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast);\n  // Reset one pointer; equal-speed steps now meet at the cycle entrance.\n  slow = nums[0];\n  while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }\n  return slow;\n}\n",
                    ts: "function findDuplicate(nums: number[]): number {\n  // Follow values as next pointers until fast catches slow in the cycle.\n  let slow = nums[0], fast = nums[0];\n  do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast);\n  // Reset one pointer; equal-speed steps now meet at the cycle entrance.\n  slow = nums[0];\n  while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }\n  return slow;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Seen set",
                approach: "The first value seen twice is the duplicate.",
                js: "function findDuplicate(nums) {\n  const seen = new Set();\n  for (const v of nums) { if (seen.has(v)) return v; seen.add(v); }\n  return -1;\n}\n",
                ts: "function findDuplicate(nums: number[]): number {\n  const seen = new Set<number>();\n  for (const v of nums) { if (seen.has(v)) return v; seen.add(v); }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function findDuplicate(nums) {\n  // Track values already encountered.\n  const seen = new Set();\n  for (const value of nums) {\n    if (seen.has(value)) return value;\n    seen.add(value);\n  }\n  return -1;\n}\n",
                    ts: "function findDuplicate(nums: number[]): number {\n  // Track values already encountered.\n  const seen = new Set<number>();\n  for (const value of nums) {\n    if (seen.has(value)) return value;\n    seen.add(value);\n  }\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fs-has-cycle",
        slug: "linked-list-has-cycle",
        title: "Linked List Has Cycle",
        difficulty: "medium",
        patternIds: P,
        statement: "A linked list is given as a `next` array (`next[i]` is the next node's index, or -1 for null). Starting at node 0, return `true` if the list contains a cycle.",
        examples: [
            {
                input: "[1,2,-1]",
                output: "false"
            },
            {
                input: "[1,2,0]",
                output: "true"
            },
            {
                input: "[]",
                output: "false"
            }
        ],
        constraints: [
            "0 <= next.length <= 10000",
            "each next[i] is -1 or a valid index"
        ],
        functionName: "hasCycle",
        starter: {
            js: "function hasCycle(next) {\n  // True if following from node 0 loops.\n}\n",
            ts: "function hasCycle(next: number[]): boolean {\n  // True if following from node 0 loops.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        -1
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        1,
                        2,
                        0
                    ]
                ],
                expected: true
            },
            {
                args: [
                    []
                ],
                expected: false
            }
        ],
        hidden: [
            {
                args: [
                    [
                        -1
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
            },
            {
                args: [
                    [
                        1,
                        -1
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        2
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        2,
                        -1,
                        1
                    ]
                ],
                expected: false
            }
        ],
        hints: [
            "Advance slow one node and fast two; a cycle forces them to meet.",
            "If fast reaches null (-1) first, there's no cycle.",
            "while (fast !== -1 && next[fast] !== -1) { slow = next[slow]; fast = next[next[fast]]; if (slow===fast) return true; }"
        ],
        solutions: [
            {
                label: "Floyd tortoise and hare",
                approach: "Fast laps slow inside any cycle; otherwise fast hits null.",
                js: "function hasCycle(next) {\n  if (next.length === 0) return false;\n  let slow = 0, fast = 0;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) return true;\n  }\n  return false;\n}\n",
                ts: "function hasCycle(next: number[]): boolean {\n  if (next.length === 0) return false;\n  let slow = 0, fast = 0;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) return true;\n  }\n  return false;\n}\n",
                commentedCode: {
                    js: "function hasCycle(next) {\n  if (next.length === 0) return false;\n  let slow = 0, fast = 0;\n  // Fast moves twice as quickly and can only meet slow inside a cycle.\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) return true;\n  }\n  // Fast reached null, so this chain does not loop.\n  return false;\n}\n",
                    ts: "function hasCycle(next: number[]): boolean {\n  if (next.length === 0) return false;\n  let slow = 0, fast = 0;\n  // Fast moves twice as quickly and can only meet slow inside a cycle.\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) return true;\n  }\n  // Fast reached null, so this chain does not loop.\n  return false;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Visited set",
                approach: "Walk the list; revisiting a node means a cycle.",
                js: "function hasCycle(next) {\n  if (next.length === 0) return false;\n  const seen = new Set();\n  let cur = 0;\n  while (cur !== -1) { if (seen.has(cur)) return true; seen.add(cur); cur = next[cur]; }\n  return false;\n}\n",
                ts: "function hasCycle(next: number[]): boolean {\n  if (next.length === 0) return false;\n  const seen = new Set<number>();\n  let cur = 0;\n  while (cur !== -1) { if (seen.has(cur)) return true; seen.add(cur); cur = next[cur]; }\n  return false;\n}\n",
                commentedCode: {
                    js: "function hasCycle(next) {\n  if (next.length === 0) return false;\n  // Remember every node reached while following links from the head.\n  const seen = new Set();\n  let current = 0;\n  while (current !== -1) {\n    // Reaching an already visited node proves the chain loops.\n    if (seen.has(current)) return true;\n    seen.add(current);\n    current = next[current];\n  }\n  // Reaching the -1 null marker proves the chain is acyclic.\n  return false;\n}\n",
                    ts: "function hasCycle(next: number[]): boolean {\n  if (next.length === 0) return false;\n  // Remember every node reached while following links from the head.\n  const seen = new Set<number>();\n  let current = 0;\n  while (current !== -1) {\n    // Reaching an already visited node proves the chain loops.\n    if (seen.has(current)) return true;\n    seen.add(current);\n    current = next[current];\n  }\n  // Reaching the -1 null marker proves the chain is acyclic.\n  return false;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fs-find-cycle-start",
        slug: "linked-list-cycle-start",
        title: "Cycle Entrance",
        difficulty: "hard",
        patternIds: P,
        statement: "A linked list is given as a `next` array (index or -1). Starting at node 0, return the index where the cycle begins, or -1 if there is no cycle.",
        examples: [
            {
                input: "[1,2,0]",
                output: "0"
            },
            {
                input: "[1,2,3,1]",
                output: "1"
            },
            {
                input: "[1,2,-1]",
                output: "-1"
            }
        ],
        constraints: [
            "0 <= next.length <= 10000"
        ],
        functionName: "findCycleStart",
        starter: {
            js: "function findCycleStart(next) {\n  // Index where the cycle begins, or -1.\n}\n",
            ts: "function findCycleStart(next: number[]): number {\n  // Index where the cycle begins, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        0
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2,
                        -1
                    ]
                ],
                expected: -1
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: -1
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        -1
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        1,
                        2,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        2,
                        -1,
                        1
                    ]
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
                        2
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "First detect a meeting point with fast/slow.",
            "Then reset one pointer to the start; move both one step at a time.",
            "They meet again exactly at the cycle's entrance."
        ],
        solutions: [
            {
                label: "Floyd, then find the entrance",
                approach: "Detect the meeting point, then walk one pointer from the head.",
                js: "function findCycleStart(next) {\n  if (next.length === 0) return -1;\n  let slow = 0, fast = 0, met = false;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return -1;\n  slow = 0;\n  while (slow !== fast) { slow = next[slow]; fast = next[fast]; }\n  return slow;\n}\n",
                ts: "function findCycleStart(next: number[]): number {\n  if (next.length === 0) return -1;\n  let slow = 0, fast = 0, met = false;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return -1;\n  slow = 0;\n  while (slow !== fast) { slow = next[slow]; fast = next[fast]; }\n  return slow;\n}\n",
                commentedCode: {
                    js: "function findCycleStart(next) {\n  if (next.length === 0) return -1;\n  let slow = 0, fast = 0, met = false;\n  // First, find any meeting point inside a cycle.\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return -1;\n  // Equal-speed pointers from head and meeting point converge at the entrance.\n  slow = 0;\n  while (slow !== fast) { slow = next[slow]; fast = next[fast]; }\n  return slow;\n}\n",
                    ts: "function findCycleStart(next: number[]): number {\n  if (next.length === 0) return -1;\n  let slow = 0, fast = 0, met = false;\n  // First, find any meeting point inside a cycle.\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return -1;\n  // Equal-speed pointers from head and meeting point converge at the entrance.\n  slow = 0;\n  while (slow !== fast) { slow = next[slow]; fast = next[fast]; }\n  return slow;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Visited set",
                approach: "The first node visited twice is the cycle entrance.",
                js: "function findCycleStart(next) {\n  if (next.length === 0) return -1;\n  const seen = new Set();\n  let cur = 0;\n  while (cur !== -1) { if (seen.has(cur)) return cur; seen.add(cur); cur = next[cur]; }\n  return -1;\n}\n",
                ts: "function findCycleStart(next: number[]): number {\n  if (next.length === 0) return -1;\n  const seen = new Set<number>();\n  let cur = 0;\n  while (cur !== -1) { if (seen.has(cur)) return cur; seen.add(cur); cur = next[cur]; }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function findCycleStart(next) {\n  if (next.length === 0) return -1;\n  const seen = new Set();\n  let current = 0;\n  // The first revisit is exactly the cycle entrance.\n  while (current !== -1) {\n    if (seen.has(current)) return current;\n    seen.add(current);\n    current = next[current];\n  }\n  return -1;\n}\n",
                    ts: "function findCycleStart(next: number[]): number {\n  if (next.length === 0) return -1;\n  const seen = new Set<number>();\n  let current = 0;\n  // The first revisit is exactly the cycle entrance.\n  while (current !== -1) {\n    if (seen.has(current)) return current;\n    seen.add(current);\n    current = next[current];\n  }\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "fs-list-length",
        slug: "list-length",
        title: "List Length",
        difficulty: "easy",
        patternIds: P,
        statement: "A linked list is given as a `next` array (index or -1), starting at node 0 with no cycle. Return the number of nodes.",
        examples: [
            {
                input: "[1,2,-1]",
                output: "3"
            },
            {
                input: "[-1]",
                output: "1"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "the list is acyclic",
            "0 <= next.length <= 10000"
        ],
        functionName: "listLength",
        starter: {
            js: "function listLength(next) {\n  // Number of nodes from node 0 to null.\n}\n",
            ts: "function listLength(next: number[]): number {\n  // Number of nodes from node 0 to null.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        -1
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        -1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    []
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        -1
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        2,
                        -1,
                        1
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        -1
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        4,
                        -1,
                        -1,
                        -1,
                        2
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        3,
                        -1,
                        -1,
                        1
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2,
                        -1,
                        -1
                    ]
                ],
                expected: 3
            }
        ],
        hints: [
            "Follow next-pointers from node 0, counting nodes, until you reach -1.",
            "Empty (no nodes) means the array is empty.",
            "let count = 0, cur = 0; while (cur !== -1) { count++; cur = next[cur]; }"
        ],
        solutions: [
            {
                label: "Walk to null",
                approach: "Count nodes while following next-pointers.",
                js: "function listLength(next) {\n  if (next.length === 0) return 0;\n  let count = 0, cur = 0;\n  while (cur !== -1) { count++; cur = next[cur]; }\n  return count;\n}\n",
                ts: "function listLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  let count = 0, cur = 0;\n  while (cur !== -1) { count++; cur = next[cur]; }\n  return count;\n}\n",
                commentedCode: {
                    js: "function listLength(next) {\n  if (next.length === 0) return 0;\n  let count = 0, current = 0;\n  // Visit each node until the null marker.\n  while (current !== -1) { count++; current = next[current]; }\n  return count;\n}\n",
                    ts: "function listLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  let count = 0, current = 0;\n  // Visit each node until the null marker.\n  while (current !== -1) { count++; current = next[current]; }\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Collect indices",
                approach: "Gather the visited indices and read the total.",
                js: "function listLength(next) {\n  if (next.length === 0) return 0;\n  const nodes = [];\n  let cur = 0;\n  while (cur !== -1) { nodes.push(cur); cur = next[cur]; }\n  return nodes.length;\n}\n",
                ts: "function listLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  const nodes: number[] = [];\n  let cur = 0;\n  while (cur !== -1) { nodes.push(cur); cur = next[cur]; }\n  return nodes.length;\n}\n",
                commentedCode: {
                    js: "function listLength(next) {\n  if (next.length === 0) return 0;\n  // Collect each reachable node index so the array length becomes the answer.\n  const nodes = [];\n  let current = 0;\n  // Follow next-pointers from the head until the -1 null marker.\n  while (current !== -1) { nodes.push(current); current = next[current]; }\n  return nodes.length;\n}\n",
                    ts: "function listLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  // Collect each reachable node index so the array length becomes the answer.\n  const nodes: number[] = [];\n  let current = 0;\n  // Follow next-pointers from the head until the -1 null marker.\n  while (current !== -1) { nodes.push(current); current = next[current]; }\n  return nodes.length;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fs-cycle-length",
        slug: "cycle-length",
        title: "Cycle Length",
        difficulty: "medium",
        patternIds: P,
        statement: "A linked list is given as a `next` array (index or -1), starting at node 0. Return the length of the cycle reachable from node 0, or 0 if there is no cycle.",
        examples: [
            {
                input: "[1,2,0]",
                output: "3"
            },
            {
                input: "[1,2,3,1]",
                output: "3"
            },
            {
                input: "[1,2,-1]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= next.length <= 10000"
        ],
        functionName: "cycleLength",
        starter: {
            js: "function cycleLength(next) {\n  // Length of the cycle, or 0.\n}\n",
            ts: "function cycleLength(next: number[]): number {\n  // Length of the cycle, or 0.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        0
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        1
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2,
                        -1
                    ]
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: 0
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        -1
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        2
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        2,
                        -1,
                        1
                    ]
                ],
                expected: 0
            }
        ],
        hints: [
            "First find a meeting point inside the cycle with fast/slow.",
            "Then walk one full loop from that point, counting steps back to it.",
            "If fast reaches null there's no cycle — return 0."
        ],
        solutions: [
            {
                label: "Meet, then count the loop",
                approach: "Detect a meeting node, then measure the loop from it.",
                js: "function cycleLength(next) {\n  if (next.length === 0) return 0;\n  let slow = 0, fast = 0, met = false;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return 0;\n  let len = 1, cur = next[slow];\n  while (cur !== slow) { cur = next[cur]; len++; }\n  return len;\n}\n",
                ts: "function cycleLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  let slow = 0, fast = 0, met = false;\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return 0;\n  let len = 1, cur = next[slow];\n  while (cur !== slow) { cur = next[cur]; len++; }\n  return len;\n}\n",
                commentedCode: {
                    js: "function cycleLength(next) {\n  if (next.length === 0) return 0;\n  let slow = 0, fast = 0, met = false;\n  // Find a node inside the cycle, if one exists.\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return 0;\n  // Walk one full loop back to the meeting node.\n  let length = 1, current = next[slow];\n  while (current !== slow) { current = next[current]; length++; }\n  return length;\n}\n",
                    ts: "function cycleLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  let slow = 0, fast = 0, met = false;\n  // Find a node inside the cycle, if one exists.\n  while (fast !== -1 && next[fast] !== -1) {\n    slow = next[slow];\n    fast = next[next[fast]];\n    if (slow === fast) { met = true; break; }\n  }\n  if (!met) return 0;\n  // Walk one full loop back to the meeting node.\n  let length = 1, current = next[slow];\n  while (current !== slow) { current = next[current]; length++; }\n  return length;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Visited order",
                approach: "Record the step at which each node is seen; a repeat gives the loop length.",
                js: "function cycleLength(next) {\n  if (next.length === 0) return 0;\n  const step = new Map();\n  let cur = 0, i = 0;\n  while (cur !== -1) {\n    if (step.has(cur)) return i - step.get(cur);\n    step.set(cur, i++);\n    cur = next[cur];\n  }\n  return 0;\n}\n",
                ts: "function cycleLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  const step = new Map<number, number>();\n  let cur = 0, i = 0;\n  while (cur !== -1) {\n    if (step.has(cur)) return i - step.get(cur)!;\n    step.set(cur, i++);\n    cur = next[cur];\n  }\n  return 0;\n}\n",
                commentedCode: {
                    js: "function cycleLength(next) {\n  if (next.length === 0) return 0;\n  // Record the traversal step where each node was first seen.\n  const firstStep = new Map();\n  let current = 0, step = 0;\n  while (current !== -1) {\n    if (firstStep.has(current)) return step - firstStep.get(current);\n    firstStep.set(current, step++);\n    current = next[current];\n  }\n  return 0;\n}\n",
                    ts: "function cycleLength(next: number[]): number {\n  if (next.length === 0) return 0;\n  // Record the traversal step where each node was first seen.\n  const firstStep = new Map<number, number>();\n  let current = 0, step = 0;\n  while (current !== -1) {\n    if (firstStep.has(current)) return step - firstStep.get(current)!;\n    firstStep.set(current, step++);\n    current = next[current];\n  }\n  return 0;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fs-is-palindrome-list",
        slug: "palindrome-list",
        title: "Palindrome List",
        difficulty: "medium",
        patternIds: P,
        statement: "A list is given as its array of values. Return `true` if it reads the same forwards and backwards (find the middle with fast/slow, then compare).",
        examples: [
            {
                input: "[1,2,1]",
                output: "true"
            },
            {
                input: "[1,2,2,1]",
                output: "true"
            },
            {
                input: "[1,2,3]",
                output: "false"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "isPalindromeList",
        starter: {
            js: "function isPalindromeList(values) {\n  // True if the sequence is a palindrome.\n}\n",
            ts: "function isPalindromeList(values: number[]): boolean {\n  // True if the sequence is a palindrome.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: false
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: true
            },
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
                        2
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        2,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        3
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        0,
                        0,
                        0
                    ]
                ],
                expected: true
            }
        ],
        hints: [
            "Compare the two ends, moving inward.",
            "Any mismatched pair means it's not a palindrome.",
            "let i=0, j=n-1; while (i<j) { if (values[i]!==values[j]) return false; i++; j--; }"
        ],
        solutions: [
            {
                label: "Two ends inward",
                approach: "Compare mirrored positions converging to the middle.",
                js: "function isPalindromeList(values) {\n  let i = 0, j = values.length - 1;\n  while (i < j) { if (values[i] !== values[j]) return false; i++; j--; }\n  return true;\n}\n",
                ts: "function isPalindromeList(values: number[]): boolean {\n  let i = 0, j = values.length - 1;\n  while (i < j) { if (values[i] !== values[j]) return false; i++; j--; }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isPalindromeList(values) {\n  let left = 0, right = values.length - 1;\n  // Compare mirrored positions while moving toward the middle.\n  while (left < right) {\n    if (values[left] !== values[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}\n",
                    ts: "function isPalindromeList(values: number[]): boolean {\n  let left = 0, right = values.length - 1;\n  // Compare mirrored positions while moving toward the middle.\n  while (left < right) {\n    if (values[left] !== values[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Reverse compare",
                approach: "A palindrome equals its own reverse.",
                js: "function isPalindromeList(values) {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
                ts: "function isPalindromeList(values: number[]): boolean {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
                commentedCode: {
                    js: "function isPalindromeList(values) {\n  // A palindrome has the same sequence after reversing a copy.\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
                    ts: "function isPalindromeList(values: number[]): boolean {\n  // A palindrome has the same sequence after reversing a copy.\n  return values.join(',') === [...values].reverse().join(',');\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fs-middle-index",
        slug: "middle-index",
        title: "Middle Index",
        difficulty: "easy",
        patternIds: P,
        statement: "A list is given as its array of values. Return the index of the middle node (the upper middle for even length), or -1 if empty.",
        examples: [
            {
                input: "[1,2,3,4,5]",
                output: "2"
            },
            {
                input: "[1,2,3,4]",
                output: "2"
            },
            {
                input: "[1]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "middleIndex",
        starter: {
            js: "function middleIndex(values) {\n  // Index of the middle node, or -1.\n}\n",
            ts: "function middleIndex(values: number[]): number {\n  // Index of the middle node, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: -1
            },
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        10,
                        20,
                        30
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        9
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        5,
                        5
                    ]
                ],
                expected: 1
            }
        ],
        hints: [
            "The upper-middle index of a length-n list is floor(n/2).",
            "Guard the empty case first.",
            "return values.length === 0 ? -1 : Math.floor(values.length / 2)."
        ],
        solutions: [
            {
                label: "Compute the index",
                approach: "Return floor(n/2), or -1 when empty.",
                js: "function middleIndex(values) {\n  return values.length === 0 ? -1 : Math.floor(values.length / 2);\n}\n",
                ts: "function middleIndex(values: number[]): number {\n  return values.length === 0 ? -1 : Math.floor(values.length / 2);\n}\n",
                commentedCode: {
                    js: "function middleIndex(values) {\n  // Empty input has no valid index.\n  if (values.length === 0) return -1;\n  // Floor(length / 2) is the upper middle for even lengths.\n  return Math.floor(values.length / 2);\n}\n",
                    ts: "function middleIndex(values: number[]): number {\n  // Empty input has no valid index.\n  if (values.length === 0) return -1;\n  // Floor(length / 2) is the upper middle for even lengths.\n  return Math.floor(values.length / 2);\n}\n"
                },
                time: "O(1)",
                space: "O(1)"
            },
            {
                label: "Fast / slow pointers",
                approach: "Walk slow one step per two of fast; slow's index is the middle.",
                js: "function middleIndex(values) {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) { slow++; fast += 2; }\n  return slow;\n}\n",
                ts: "function middleIndex(values: number[]): number {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) { slow++; fast += 2; }\n  return slow;\n}\n",
                commentedCode: {
                    js: "function middleIndex(values) {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  // A two-step fast pointer leaves slow at the upper middle.\n  while (fast < values.length && fast + 1 < values.length) { slow++; fast += 2; }\n  return slow;\n}\n",
                    ts: "function middleIndex(values: number[]): number {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  // A two-step fast pointer leaves slow at the upper middle.\n  while (fast < values.length && fast + 1 < values.length) { slow++; fast += 2; }\n  return slow;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    }
];
const fastSlowProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const fastSlowMcqs = [
    {
        id: "s4-fs-space",
        kind: "mcq",
        prompt: "Floyd's tortoise-and-hare cycle detection uses how much extra space?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "Just two pointers — constant extra space, no visited set."
    },
    {
        id: "s4-fs-middle",
        kind: "mcq",
        prompt: "Finding the middle of an n-node list with fast/slow pointers takes:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "The fast pointer traverses the whole list once — linear time."
    }
];
const fastSlowModule = {
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
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for fast/slow pointers when you need to:

- detect a **cycle** in a linked list or a functional sequence (happy numbers, "find the duplicate"),
- find the **middle** node in one pass,
- find the **entrance** of a cycle,
- locate the **nth-from-end** node using a fixed pointer gap.`
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

**Pitfalls:** advancing fast without checking two steps of null; forgetting the two-phase structure when locating the cycle entrance; off-by-one on which "middle" you return for even lengths. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "fs-middle",
    drillProblemIds: [
        "fs-middle",
        "fs-nth-from-end",
        "fs-happy",
        "fs-find-duplicate",
        "fs-has-cycle",
        "fs-find-cycle-start"
    ],
    testPoolProblemIds: [
        "fs-list-length",
        "fs-cycle-length",
        "fs-is-palindrome-list",
        "fs-middle-index"
    ],
    complexityQuestionIds: [
        "s4-fs-space",
        "s4-fs-middle"
    ],
    badgeId: "badge-pat-fast-slow",
    prerequisiteModuleIds: [
        "m-pat-two-pointers"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage4/frequencyCounter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "frequencyCounterMcqs",
    ()=>frequencyCounterMcqs,
    "frequencyCounterModule",
    ()=>frequencyCounterModule,
    "frequencyCounterProblems",
    ()=>frequencyCounterProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s4";
const P = [
    "frequency-counter"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "fc-char-frequency",
        slug: "character-frequency",
        title: "Character Frequency",
        difficulty: "easy",
        patternIds: P,
        statement: "Return an object mapping each character in the string to how many times it appears.",
        examples: [
            {
                input: '"aab"',
                output: "{ a: 2, b: 1 }"
            },
            {
                input: '""',
                output: "{}"
            },
            {
                input: '"x"',
                output: "{ x: 1 }"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000"
        ],
        functionName: "charFrequency",
        starter: {
            js: "function charFrequency(s) {\n  // Map each character to its count.\n}\n",
            ts: "function charFrequency(s: string): Record<string, number> {\n  // Map each character to its count.\n  return {};\n}\n"
        },
        visible: [
            {
                args: [
                    "aab"
                ],
                expected: {
                    a: 2,
                    b: 1
                }
            },
            {
                args: [
                    ""
                ],
                expected: {}
            },
            {
                args: [
                    "x"
                ],
                expected: {
                    x: 1
                }
            }
        ],
        hidden: [
            {
                args: [
                    "aaa"
                ],
                expected: {
                    a: 3
                }
            },
            {
                args: [
                    "abc"
                ],
                expected: {
                    a: 1,
                    b: 1,
                    c: 1
                }
            },
            {
                args: [
                    "aA"
                ],
                expected: {
                    a: 1,
                    A: 1
                }
            },
            {
                args: [
                    "  "
                ],
                expected: {
                    " ": 2
                }
            },
            {
                args: [
                    "112"
                ],
                expected: {
                    "1": 2,
                    "2": 1
                }
            },
            {
                args: [
                    "zz"
                ],
                expected: {
                    z: 2
                }
            }
        ],
        hints: [
            "Every distinct character needs its own running tally.",
            "Use a plain object keyed by the character, defaulting missing keys to 0.",
            "for (const c of s) counts[c] = (counts[c] || 0) + 1."
        ],
        solutions: [
            {
                label: "Tally into an object",
                approach: "Increment a per-character counter while scanning.",
                js: "function charFrequency(s) {\n  const counts = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  return counts;\n}\n",
                ts: "function charFrequency(s: string): Record<string, number> {\n  const counts: Record<string, number> = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  return counts;\n}\n",
                commentedCode: {
                    js: "function charFrequency(s) {\n  // Store one running count for each character.\n  const counts = {};\n  for (const char of s) counts[char] = (counts[char] || 0) + 1;\n  return counts;\n}\n",
                    ts: "function charFrequency(s: string): Record<string, number> {\n  // Store one running count for each character.\n  const counts: Record<string, number> = {};\n  for (const char of s) counts[char] = (counts[char] || 0) + 1;\n  return counts;\n}\n"
                },
                time: "O(n)",
                space: "O(k)"
            },
            {
                label: "Reduce",
                approach: "Fold the characters into a counts object.",
                js: "function charFrequency(s) {\n  return s.split('').reduce((acc, c) => { acc[c] = (acc[c] || 0) + 1; return acc; }, {});\n}\n",
                ts: "function charFrequency(s: string): Record<string, number> {\n  return s.split('').reduce<Record<string, number>>((acc, c) => { acc[c] = (acc[c] || 0) + 1; return acc; }, {});\n}\n",
                commentedCode: {
                    js: "function charFrequency(s) {\n  // Reduce each character into the shared frequency object.\n  return s.split('').reduce((counts, char) => { counts[char] = (counts[char] || 0) + 1; return counts; }, {});\n}\n",
                    ts: "function charFrequency(s: string): Record<string, number> {\n  // Reduce each character into the shared frequency object.\n  return s.split('').reduce<Record<string, number>>((counts, char) => { counts[char] = (counts[char] || 0) + 1; return counts; }, {});\n}\n"
                },
                time: "O(n)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "fc-first-unique-number",
        slug: "first-unique-number",
        title: "First Unique Number",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the first value that appears exactly once in the list, or -1 if every value repeats.",
        examples: [
            {
                input: "[2,3,2,4]",
                output: "3"
            },
            {
                input: "[1,1]",
                output: "-1"
            },
            {
                input: "[5]",
                output: "5"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "firstUniqueNumber",
        starter: {
            js: "function firstUniqueNumber(nums) {\n  // First value with a count of exactly 1, or -1.\n}\n",
            ts: "function firstUniqueNumber(nums: number[]): number {\n  // First value with a count of exactly 1, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        3,
                        2,
                        4
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        1
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        5
                    ]
                ],
                expected: 5
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: -1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        1,
                        2,
                        2,
                        3
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        4,
                        4,
                        4
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        0,
                        1,
                        0
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        7,
                        8,
                        7,
                        9,
                        8
                    ]
                ],
                expected: 9
            }
        ],
        hints: [
            "You can't know a value is unique until you've counted the whole list.",
            "First pass: build counts. Second pass: return the first value whose count is 1.",
            "Two passes keep the original order intact."
        ],
        solutions: [
            {
                label: "Count then scan",
                approach: "Tally first, then find the earliest value counted once.",
                js: "function firstUniqueNumber(nums) {\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  for (const n of nums) if (counts.get(n) === 1) return n;\n  return -1;\n}\n",
                ts: "function firstUniqueNumber(nums: number[]): number {\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  for (const n of nums) if (counts.get(n) === 1) return n;\n  return -1;\n}\n",
                commentedCode: {
                    js: "function firstUniqueNumber(nums) {\n  // Count every value before deciding which is unique.\n  const counts = new Map();\n  for (const value of nums) counts.set(value, (counts.get(value) || 0) + 1);\n  // Scan original order to preserve the meaning of first.\n  for (const value of nums) if (counts.get(value) === 1) return value;\n  return -1;\n}\n",
                    ts: "function firstUniqueNumber(nums: number[]): number {\n  // Count every value before deciding which is unique.\n  const counts = new Map<number, number>();\n  for (const value of nums) counts.set(value, (counts.get(value) || 0) + 1);\n  // Scan original order to preserve the meaning of first.\n  for (const value of nums) if (counts.get(value) === 1) return value;\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "indexOf === lastIndexOf",
                approach: "A value is unique when its first and last positions match.",
                js: "function firstUniqueNumber(nums) {\n  for (const n of nums) if (nums.indexOf(n) === nums.lastIndexOf(n)) return n;\n  return -1;\n}\n",
                ts: "function firstUniqueNumber(nums: number[]): number {\n  for (const n of nums) if (nums.indexOf(n) === nums.lastIndexOf(n)) return n;\n  return -1;\n}\n",
                commentedCode: {
                    js: "function firstUniqueNumber(nums) {\n  // A value occurs once exactly when its first and last indices match.\n  for (const value of nums) if (nums.indexOf(value) === nums.lastIndexOf(value)) return value;\n  return -1;\n}\n",
                    ts: "function firstUniqueNumber(nums: number[]): number {\n  // A value occurs once exactly when its first and last indices match.\n  for (const value of nums) if (nums.indexOf(value) === nums.lastIndexOf(value)) return value;\n  return -1;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "fc-can-construct",
        slug: "can-construct",
        title: "Can Construct",
        difficulty: "medium",
        patternIds: P,
        statement: "Return `true` if `note` can be built using the letters of `magazine`, where each letter of the magazine may be used at most once.",
        examples: [
            {
                input: '"a", "b"',
                output: "false"
            },
            {
                input: '"aa", "aab"',
                output: "true"
            },
            {
                input: '"", "x"',
                output: "true"
            }
        ],
        constraints: [
            "0 <= lengths <= 10000"
        ],
        functionName: "canConstruct",
        starter: {
            js: "function canConstruct(note, magazine) {\n  // True if note can be built from magazine letters.\n}\n",
            ts: "function canConstruct(note: string, magazine: string): boolean {\n  // True if note can be built from magazine letters.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    "a",
                    "b"
                ],
                expected: false
            },
            {
                args: [
                    "aa",
                    "aab"
                ],
                expected: true
            },
            {
                args: [
                    "",
                    "x"
                ],
                expected: true
            }
        ],
        hidden: [
            {
                args: [
                    "",
                    ""
                ],
                expected: true
            },
            {
                args: [
                    "a",
                    "a"
                ],
                expected: true
            },
            {
                args: [
                    "aa",
                    "ab"
                ],
                expected: false
            },
            {
                args: [
                    "abc",
                    "cba"
                ],
                expected: true
            },
            {
                args: [
                    "aabb",
                    "ab"
                ],
                expected: false
            },
            {
                args: [
                    "xyz",
                    "xxyyzz"
                ],
                expected: true
            }
        ],
        hints: [
            "Count what the magazine offers, then spend those letters on the note.",
            "If a needed letter is missing or exhausted, the answer is false.",
            "Build counts of magazine; for each char of note decrement and check it stays >= 0."
        ],
        solutions: [
            {
                label: "Count and spend",
                approach: "Tally the magazine, then decrement per note character.",
                js: "function canConstruct(note, magazine) {\n  const have = {};\n  for (const c of magazine) have[c] = (have[c] || 0) + 1;\n  for (const c of note) {\n    if (!have[c]) return false;\n    have[c]--;\n  }\n  return true;\n}\n",
                ts: "function canConstruct(note: string, magazine: string): boolean {\n  const have: Record<string, number> = {};\n  for (const c of magazine) have[c] = (have[c] || 0) + 1;\n  for (const c of note) {\n    if (!have[c]) return false;\n    have[c]--;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function canConstruct(note, magazine) {\n  const available = {};\n  // Count every letter that can be spent.\n  for (const char of magazine) available[char] = (available[char] || 0) + 1;\n  for (const char of note) {\n    if (!available[char]) return false;\n    available[char]--;\n  }\n  return true;\n}\n",
                    ts: "function canConstruct(note: string, magazine: string): boolean {\n  const available: Record<string, number> = {};\n  // Count every letter that can be spent.\n  for (const char of magazine) available[char] = (available[char] || 0) + 1;\n  for (const char of note) {\n    if (!available[char]) return false;\n    available[char]--;\n  }\n  return true;\n}\n"
                },
                time: "O(n + m)",
                space: "O(k)"
            },
            {
                label: "Compare counts",
                approach: "Every note letter's count must not exceed the magazine's.",
                js: "function canConstruct(note, magazine) {\n  const count = (s) => { const m = {}; for (const c of s) m[c] = (m[c] || 0) + 1; return m; };\n  const need = count(note), have = count(magazine);\n  for (const c in need) if ((have[c] || 0) < need[c]) return false;\n  return true;\n}\n",
                ts: "function canConstruct(note: string, magazine: string): boolean {\n  const count = (s: string) => { const m: Record<string, number> = {}; for (const c of s) m[c] = (m[c] || 0) + 1; return m; };\n  const need = count(note), have = count(magazine);\n  for (const c in need) if ((have[c] || 0) < need[c]) return false;\n  return true;\n}\n",
                commentedCode: {
                    js: "function canConstruct(note, magazine) {\n  // Convert a string into the number of copies it contains of each character.\n  const count = (text) => { const counts = {}; for (const char of text) counts[char] = (counts[char] || 0) + 1; return counts; };\n  // Compare what the note needs with what the magazine can supply.\n  const needed = count(note), available = count(magazine);\n  // One undersupplied character makes construction impossible.\n  for (const char in needed) if ((available[char] || 0) < needed[char]) return false;\n  return true;\n}\n",
                    ts: "function canConstruct(note: string, magazine: string): boolean {\n  // Convert a string into the number of copies it contains of each character.\n  const count = (text: string) => { const counts: Record<string, number> = {}; for (const char of text) counts[char] = (counts[char] || 0) + 1; return counts; };\n  // Compare what the note needs with what the magazine can supply.\n  const needed = count(note), available = count(magazine);\n  // One undersupplied character makes construction impossible.\n  for (const char in needed) if ((available[char] || 0) < needed[char]) return false;\n  return true;\n}\n"
                },
                time: "O(n + m)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "fc-find-difference",
        slug: "find-the-added-value",
        title: "Find the Added Value",
        difficulty: "medium",
        patternIds: P,
        statement: "List `b` contains every value of list `a` (shuffled) plus exactly one extra value. Return the extra value.",
        examples: [
            {
                input: "[1,2,3], [1,3,2,4]",
                output: "4"
            },
            {
                input: "[], [5]",
                output: "5"
            },
            {
                input: "[1], [1,1]",
                output: "1"
            }
        ],
        constraints: [
            "b.length === a.length + 1"
        ],
        functionName: "findDifference",
        starter: {
            js: "function findDifference(a, b) {\n  // The one extra value in b.\n}\n",
            ts: "function findDifference(a: number[], b: number[]): number {\n  // The one extra value in b.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        1,
                        3,
                        2,
                        4
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [],
                    [
                        5
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    [
                        1
                    ],
                    [
                        1,
                        1
                    ]
                ],
                expected: 1
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        1
                    ],
                    [
                        1,
                        1,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        2,
                        2
                    ],
                    [
                        2,
                        2,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        0
                    ],
                    [
                        0,
                        5
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    [
                        3,
                        4
                    ],
                    [
                        4,
                        3,
                        9
                    ]
                ],
                expected: 9
            },
            {
                args: [
                    [],
                    [
                        0
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        7,
                        7,
                        7
                    ],
                    [
                        7,
                        7,
                        7,
                        8
                    ]
                ],
                expected: 8
            }
        ],
        hints: [
            "Count what's in a, then walk b spending those counts.",
            "The first value in b with no count left is the extra one.",
            "Or simply subtract the sums: sum(b) - sum(a)."
        ],
        solutions: [
            {
                label: "Frequency difference",
                approach: "Spend a's counts against b; the leftover is the extra.",
                js: "function findDifference(a, b) {\n  const counts = new Map();\n  for (const v of a) counts.set(v, (counts.get(v) || 0) + 1);\n  for (const v of b) {\n    const c = counts.get(v) || 0;\n    if (c === 0) return v;\n    counts.set(v, c - 1);\n  }\n  return -1;\n}\n",
                ts: "function findDifference(a: number[], b: number[]): number {\n  const counts = new Map<number, number>();\n  for (const v of a) counts.set(v, (counts.get(v) || 0) + 1);\n  for (const v of b) {\n    const c = counts.get(v) || 0;\n    if (c === 0) return v;\n    counts.set(v, c - 1);\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function findDifference(a, b) {\n  const counts = new Map();\n  // Record every value contributed by the first list.\n  for (const value of a) counts.set(value, (counts.get(value) || 0) + 1);\n  // Spend those counts while scanning the larger list.\n  for (const value of b) {\n    const remaining = counts.get(value) || 0;\n    if (remaining === 0) return value;\n    counts.set(value, remaining - 1);\n  }\n  return -1;\n}\n",
                    ts: "function findDifference(a: number[], b: number[]): number {\n  const counts = new Map<number, number>();\n  // Record every value contributed by the first list.\n  for (const value of a) counts.set(value, (counts.get(value) || 0) + 1);\n  // Spend those counts while scanning the larger list.\n  for (const value of b) {\n    const remaining = counts.get(value) || 0;\n    if (remaining === 0) return value;\n    counts.set(value, remaining - 1);\n  }\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Sum difference",
                approach: "The extra value is exactly sum(b) − sum(a).",
                js: "function findDifference(a, b) {\n  const sum = (arr) => arr.reduce((s, v) => s + v, 0);\n  return sum(b) - sum(a);\n}\n",
                ts: "function findDifference(a: number[], b: number[]): number {\n  const sum = (arr: number[]) => arr.reduce((s, v) => s + v, 0);\n  return sum(b) - sum(a);\n}\n",
                commentedCode: {
                    js: "function findDifference(a, b) {\n  // Matching values cancel when the two totals are subtracted.\n  const sum = (values) => values.reduce((total, value) => total + value, 0);\n  return sum(b) - sum(a);\n}\n",
                    ts: "function findDifference(a: number[], b: number[]): number {\n  // Matching values cancel when the two totals are subtracted.\n  const sum = (values: number[]) => values.reduce((total, value) => total + value, 0);\n  return sum(b) - sum(a);\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "fc-top-k-frequent",
        slug: "top-k-frequent",
        title: "Top K Frequent",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the `k` most frequently occurring values, sorted ascending. When counts tie, prefer the smaller value.",
        examples: [
            {
                input: "[1,1,1,2,2,3], 2",
                output: "[1,2]"
            },
            {
                input: "[1], 1",
                output: "[1]"
            },
            {
                input: "[1,2], 2",
                output: "[1,2]"
            }
        ],
        constraints: [
            "1 <= k <= number of distinct values"
        ],
        functionName: "topKFrequent",
        starter: {
            js: "function topKFrequent(nums, k) {\n  // k most frequent values, returned sorted ascending.\n}\n",
            ts: "function topKFrequent(nums: number[], k: number): number[] {\n  // k most frequent values, returned sorted ascending.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        1,
                        1,
                        2,
                        2,
                        3
                    ],
                    2
                ],
                expected: [
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        1
                    ],
                    1
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
                    2
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
                    [
                        1,
                        1,
                        2,
                        2,
                        3
                    ],
                    2
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
                        4,
                        4,
                        5,
                        5,
                        6
                    ],
                    1
                ],
                expected: [
                    4
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    3
                ],
                expected: [
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        5,
                        5,
                        4,
                        4,
                        3
                    ],
                    2
                ],
                expected: [
                    4,
                    5
                ]
            },
            {
                args: [
                    [
                        9
                    ],
                    1
                ],
                expected: [
                    9
                ]
            },
            {
                args: [
                    [
                        1,
                        1,
                        2
                    ],
                    1
                ],
                expected: [
                    1
                ]
            }
        ],
        hints: [
            "Count occurrences, then rank the distinct values by count.",
            "Sort entries by count descending, breaking ties by the smaller value.",
            "Take the first k, then sort those values ascending for the result."
        ],
        solutions: [
            {
                label: "Count then sort",
                approach: "Rank by count (ties to the smaller value), take k, sort ascending.",
                js: "function topKFrequent(nums, k) {\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  const entries = [...counts.entries()];\n  entries.sort((a, b) => b[1] - a[1] || a[0] - b[0]);\n  return entries.slice(0, k).map((e) => e[0]).sort((a, b) => a - b);\n}\n",
                ts: "function topKFrequent(nums: number[], k: number): number[] {\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  const entries = [...counts.entries()];\n  entries.sort((a, b) => b[1] - a[1] || a[0] - b[0]);\n  return entries.slice(0, k).map((e) => e[0]).sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function topKFrequent(nums, k) {\n  // Count how many times each distinct value appears.\n  const counts = new Map();\n  for (const value of nums) {\n    counts.set(value, (counts.get(value) || 0) + 1);\n  }\n\n  // Turn the map into [value, frequency] pairs that can be ranked.\n  const entries = [...counts.entries()];\n  // Higher frequencies come first; a smaller value wins each frequency tie.\n  entries.sort((a, b) => b[1] - a[1] || a[0] - b[0]);\n\n  // Keep the k winners, discard their counts, and satisfy the required ascending output order.\n  return entries.slice(0, k).map((entry) => entry[0]).sort((a, b) => a - b);\n}\n",
                    ts: "function topKFrequent(nums: number[], k: number): number[] {\n  // Count how many times each distinct value appears.\n  const counts = new Map<number, number>();\n  for (const value of nums) {\n    counts.set(value, (counts.get(value) || 0) + 1);\n  }\n\n  // Turn the map into [value, frequency] pairs that can be ranked.\n  const entries = [...counts.entries()];\n  // Higher frequencies come first; a smaller value wins each frequency tie.\n  entries.sort((a, b) => b[1] - a[1] || a[0] - b[0]);\n\n  // Keep the k winners, discard their counts, and satisfy the required ascending output order.\n  return entries.slice(0, k).map((entry) => entry[0]).sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Bucket by count",
                approach: "Group values by frequency, then read buckets from the highest count down.",
                js: "function topKFrequent(nums, k) {\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  const buckets = [];\n  for (const [v, c] of counts) { (buckets[c] = buckets[c] || []).push(v); }\n  const out = [];\n  for (let c = buckets.length - 1; c >= 0 && out.length < k; c--) {\n    if (!buckets[c]) continue;\n    for (const v of buckets[c].sort((a, b) => a - b)) {\n      if (out.length < k) out.push(v);\n    }\n  }\n  return out.sort((a, b) => a - b);\n}\n",
                ts: "function topKFrequent(nums: number[], k: number): number[] {\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  const buckets: number[][] = [];\n  for (const [v, c] of counts) { (buckets[c] = buckets[c] || []).push(v); }\n  const out: number[] = [];\n  for (let c = buckets.length - 1; c >= 0 && out.length < k; c--) {\n    if (!buckets[c]) continue;\n    for (const v of buckets[c].sort((a, b) => a - b)) {\n      if (out.length < k) out.push(v);\n    }\n  }\n  return out.sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function topKFrequent(nums, k) {\n  // Count each value so its frequency can choose its bucket.\n  const counts = new Map();\n  for (const value of nums) {\n    counts.set(value, (counts.get(value) || 0) + 1);\n  }\n\n  // Bucket index c stores every value that occurs exactly c times.\n  const buckets = [];\n  for (const [value, count] of counts) {\n    (buckets[count] = buckets[count] || []).push(value);\n  }\n\n  const result = [];\n  // Read from the largest frequency down so the most frequent values are selected first.\n  for (let count = buckets.length - 1; count >= 0 && result.length < k; count--) {\n    if (!buckets[count]) continue;\n    // Sorting a tied bucket makes the smaller value win when only part of it is needed.\n    for (const value of buckets[count].sort((a, b) => a - b)) {\n      if (result.length < k) result.push(value);\n    }\n  }\n\n  // The selection order was by frequency; the requested result order is numeric ascending.\n  return result.sort((a, b) => a - b);\n}\n",
                    ts: "function topKFrequent(nums: number[], k: number): number[] {\n  // Count each value so its frequency can choose its bucket.\n  const counts = new Map<number, number>();\n  for (const value of nums) {\n    counts.set(value, (counts.get(value) || 0) + 1);\n  }\n\n  // Bucket index c stores every value that occurs exactly c times.\n  const buckets: number[][] = [];\n  for (const [value, count] of counts) {\n    (buckets[count] = buckets[count] || []).push(value);\n  }\n\n  const result: number[] = [];\n  // Read from the largest frequency down so the most frequent values are selected first.\n  for (let count = buckets.length - 1; count >= 0 && result.length < k; count--) {\n    if (!buckets[count]) continue;\n    // Sorting a tied bucket makes the smaller value win when only part of it is needed.\n    for (const value of buckets[count].sort((a, b) => a - b)) {\n      if (result.length < k) result.push(value);\n    }\n  }\n\n  // The selection order was by frequency; the requested result order is numeric ascending.\n  return result.sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fc-four-sum-count",
        slug: "four-sum-count",
        title: "Four Sum Count",
        difficulty: "hard",
        patternIds: P,
        statement: "Given four lists, return how many tuples `(i, j, k, l)` satisfy `a[i] + b[j] + c[k] + d[l] === 0`.",
        examples: [
            {
                input: "[1,2], [-2,-1], [-1,2], [0,2]",
                output: "2"
            },
            {
                input: "[0], [0], [0], [0]",
                output: "1"
            },
            {
                input: "[], [], [], []",
                output: "0"
            }
        ],
        constraints: [
            "all four lists have the same length",
            "0 <= length <= 500"
        ],
        functionName: "fourSumCount",
        starter: {
            js: "function fourSumCount(a, b, c, d) {\n  // Count tuples summing to zero.\n}\n",
            ts: "function fourSumCount(a: number[], b: number[], c: number[], d: number[]): number {\n  // Count tuples summing to zero.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2
                    ],
                    [
                        -2,
                        -1
                    ],
                    [
                        -1,
                        2
                    ],
                    [
                        0,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        0
                    ],
                    [
                        0
                    ],
                    [
                        0
                    ],
                    [
                        0
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [],
                    [],
                    [],
                    []
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ],
                    [
                        -1
                    ],
                    [
                        0
                    ],
                    [
                        0
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        1
                    ],
                    [
                        -1,
                        -1
                    ],
                    [
                        0
                    ],
                    [
                        0
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        2
                    ],
                    [
                        3
                    ],
                    [
                        -4
                    ],
                    [
                        -1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1
                    ],
                    [
                        1
                    ],
                    [
                        1
                    ],
                    [
                        1
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ]
                ],
                expected: 16
            },
            {
                args: [
                    [
                        1,
                        -1
                    ],
                    [
                        1,
                        -1
                    ],
                    [
                        1,
                        -1
                    ],
                    [
                        1,
                        -1
                    ]
                ],
                expected: 6
            }
        ],
        hints: [
            "Checking all four loops is O(n⁴) — split the problem in half.",
            "Count every sum of a pair from the first two lists in a map.",
            "For each pair from the last two lists, add the count of the negated sum."
        ],
        solutions: [
            {
                label: "Meet in the middle with a hash map",
                approach: "Tally a+b sums, then look up −(c+d) for each pair.",
                js: "function fourSumCount(a, b, c, d) {\n  const sums = new Map();\n  for (const x of a) for (const y of b) {\n    const s = x + y;\n    sums.set(s, (sums.get(s) || 0) + 1);\n  }\n  let count = 0;\n  for (const x of c) for (const y of d) count += sums.get(-(x + y)) || 0;\n  return count;\n}\n",
                ts: "function fourSumCount(a: number[], b: number[], c: number[], d: number[]): number {\n  const sums = new Map<number, number>();\n  for (const x of a) for (const y of b) {\n    const s = x + y;\n    sums.set(s, (sums.get(s) || 0) + 1);\n  }\n  let count = 0;\n  for (const x of c) for (const y of d) count += sums.get(-(x + y)) || 0;\n  return count;\n}\n",
                commentedCode: {
                    js: "function fourSumCount(a, b, c, d) {\n  // Store how many index pairs from a and b produce each possible sum.\n  const pairCounts = new Map();\n  for (const first of a) {\n    for (const second of b) {\n      const pairSum = first + second;\n      // Keep multiplicity because equal sums from different indices form different tuples.\n      pairCounts.set(pairSum, (pairCounts.get(pairSum) || 0) + 1);\n    }\n  }\n\n  let tupleCount = 0;\n  for (const third of c) {\n    for (const fourth of d) {\n      // The first pair must equal the negation of this second pair for the total to be zero.\n      const complement = -(third + fourth);\n      tupleCount += pairCounts.get(complement) || 0;\n    }\n  }\n\n  return tupleCount;\n}\n",
                    ts: "function fourSumCount(a: number[], b: number[], c: number[], d: number[]): number {\n  // Store how many index pairs from a and b produce each possible sum.\n  const pairCounts = new Map<number, number>();\n  for (const first of a) {\n    for (const second of b) {\n      const pairSum = first + second;\n      // Keep multiplicity because equal sums from different indices form different tuples.\n      pairCounts.set(pairSum, (pairCounts.get(pairSum) || 0) + 1);\n    }\n  }\n\n  let tupleCount = 0;\n  for (const third of c) {\n    for (const fourth of d) {\n      // The first pair must equal the negation of this second pair for the total to be zero.\n      const complement = -(third + fourth);\n      tupleCount += pairCounts.get(complement) || 0;\n    }\n  }\n\n  return tupleCount;\n}\n"
                },
                time: "O(n²)",
                space: "O(n²)"
            },
            {
                label: "Brute force",
                approach: "Try every combination of one value from each list.",
                js: "function fourSumCount(a, b, c, d) {\n  let count = 0;\n  for (const w of a) for (const x of b) for (const y of c) for (const z of d) {\n    if (w + x + y + z === 0) count++;\n  }\n  return count;\n}\n",
                ts: "function fourSumCount(a: number[], b: number[], c: number[], d: number[]): number {\n  let count = 0;\n  for (const w of a) for (const x of b) for (const y of c) for (const z of d) {\n    if (w + x + y + z === 0) count++;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function fourSumCount(a, b, c, d) {\n  let tupleCount = 0;\n  // These four loops enumerate every choice of one indexed value from each list.\n  for (const first of a) {\n    for (const second of b) {\n      for (const third of c) {\n        for (const fourth of d) {\n          // Count this tuple only when its four selected values cancel to zero.\n          if (first + second + third + fourth === 0) tupleCount++;\n        }\n      }\n    }\n  }\n  return tupleCount;\n}\n",
                    ts: "function fourSumCount(a: number[], b: number[], c: number[], d: number[]): number {\n  let tupleCount = 0;\n  // These four loops enumerate every choice of one indexed value from each list.\n  for (const first of a) {\n    for (const second of b) {\n      for (const third of c) {\n        for (const fourth of d) {\n          // Count this tuple only when its four selected values cancel to zero.\n          if (first + second + third + fourth === 0) tupleCount++;\n        }\n      }\n    }\n  }\n  return tupleCount;\n}\n"
                },
                time: "O(n⁴)",
                space: "O(1)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "fc-count-distinct",
        slug: "count-distinct",
        title: "Count Distinct Values",
        difficulty: "easy",
        patternIds: P,
        statement: "Return how many distinct values the list contains.",
        examples: [
            {
                input: "[1,2,2,3]",
                output: "3"
            },
            {
                input: "[]",
                output: "0"
            },
            {
                input: "[5]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "countDistinct",
        starter: {
            js: "function countDistinct(nums) {\n  // Number of distinct values.\n}\n",
            ts: "function countDistinct(nums: number[]): number {\n  // Number of distinct values.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        3
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    []
                ],
                expected: 0
            },
            {
                args: [
                    [
                        5
                    ]
                ],
                expected: 1
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        1,
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        0,
                        -1,
                        0
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        7
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        2,
                        2,
                        3,
                        3,
                        4
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        9,
                        9
                    ]
                ],
                expected: 1
            }
        ],
        hints: [
            "A set automatically drops duplicates.",
            "The set's size is the answer.",
            "return new Set(nums).size."
        ],
        solutions: [
            {
                label: "Set size",
                approach: "Build a set and read its size.",
                js: "function countDistinct(nums) {\n  return new Set(nums).size;\n}\n",
                ts: "function countDistinct(nums: number[]): number {\n  return new Set(nums).size;\n}\n",
                commentedCode: {
                    js: "function countDistinct(nums) {\n  // A Set keeps one copy of each value and automatically removes duplicates.\n  const distinctValues = new Set(nums);\n  // Its size is therefore exactly the number of distinct input values.\n  return distinctValues.size;\n}\n",
                    ts: "function countDistinct(nums: number[]): number {\n  // A Set keeps one copy of each value and automatically removes duplicates.\n  const distinctValues = new Set(nums);\n  // Its size is therefore exactly the number of distinct input values.\n  return distinctValues.size;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Count map keys",
                approach: "Tally values and count the keys.",
                js: "function countDistinct(nums) {\n  const seen = {};\n  let count = 0;\n  for (const n of nums) if (!seen[n]) { seen[n] = true; count++; }\n  return count;\n}\n",
                ts: "function countDistinct(nums: number[]): number {\n  const seen: Record<number, boolean> = {};\n  let count = 0;\n  for (const n of nums) if (!seen[n]) { seen[n] = true; count++; }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countDistinct(nums) {\n  // Record which numeric values have already contributed to the answer.\n  const seen = {};\n  let distinctCount = 0;\n\n  for (const value of nums) {\n    // Only the first occurrence of a value creates a new distinct entry.\n    if (!seen[value]) {\n      seen[value] = true;\n      distinctCount++;\n    }\n  }\n\n  return distinctCount;\n}\n",
                    ts: "function countDistinct(nums: number[]): number {\n  // Record which numeric values have already contributed to the answer.\n  const seen: Record<number, boolean> = {};\n  let distinctCount = 0;\n\n  for (const value of nums) {\n    // Only the first occurrence of a value creates a new distinct entry.\n    if (!seen[value]) {\n      seen[value] = true;\n      distinctCount++;\n    }\n  }\n\n  return distinctCount;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fc-sum-unique",
        slug: "sum-of-unique",
        title: "Sum of Unique Values",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the sum of the values that appear exactly once in the list.",
        examples: [
            {
                input: "[1,2,2,3]",
                output: "4"
            },
            {
                input: "[]",
                output: "0"
            },
            {
                input: "[1,1]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "sumOfUnique",
        starter: {
            js: "function sumOfUnique(nums) {\n  // Sum values whose count is exactly 1.\n}\n",
            ts: "function sumOfUnique(nums: number[]): number {\n  // Sum values whose count is exactly 1.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        3
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    []
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        1
                    ]
                ],
                expected: 0
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
                expected: 6
            },
            {
                args: [
                    [
                        5,
                        5,
                        5
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        0,
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        -1,
                        -1,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        4
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        1,
                        1,
                        2,
                        2,
                        3
                    ]
                ],
                expected: 3
            }
        ],
        hints: [
            "Count first, then add up only the values counted once.",
            "Iterate the count map, not the original list, to avoid double counting.",
            "for ([v, c] of counts) if (c === 1) total += v."
        ],
        solutions: [
            {
                label: "Count then sum",
                approach: "Add values whose tally is exactly one.",
                js: "function sumOfUnique(nums) {\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  let total = 0;\n  for (const [v, c] of counts) if (c === 1) total += v;\n  return total;\n}\n",
                ts: "function sumOfUnique(nums: number[]): number {\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  let total = 0;\n  for (const [v, c] of counts) if (c === 1) total += v;\n  return total;\n}\n",
                commentedCode: {
                    js: "function sumOfUnique(nums) {\n  // Count every value before deciding whether it is unique.\n  const counts = new Map();\n  for (const value of nums) {\n    counts.set(value, (counts.get(value) || 0) + 1);\n  }\n\n  let total = 0;\n  // Iterate distinct values so each value can be added at most once.\n  for (const [value, count] of counts) {\n    if (count === 1) total += value;\n  }\n\n  return total;\n}\n",
                    ts: "function sumOfUnique(nums: number[]): number {\n  // Count every value before deciding whether it is unique.\n  const counts = new Map<number, number>();\n  for (const value of nums) {\n    counts.set(value, (counts.get(value) || 0) + 1);\n  }\n\n  let total = 0;\n  // Iterate distinct values so each value can be added at most once.\n  for (const [value, count] of counts) {\n    if (count === 1) total += value;\n  }\n\n  return total;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Filter uniques",
                approach: "Keep values whose first and last index match, then sum.",
                js: "function sumOfUnique(nums) {\n  return nums.filter((v) => nums.indexOf(v) === nums.lastIndexOf(v)).reduce((s, v) => s + v, 0);\n}\n",
                ts: "function sumOfUnique(nums: number[]): number {\n  return nums.filter((v) => nums.indexOf(v) === nums.lastIndexOf(v)).reduce((s, v) => s + v, 0);\n}\n",
                commentedCode: {
                    js: "function sumOfUnique(nums) {\n  // A value occurs once exactly when its first and last positions are the same.\n  const uniqueValues = nums.filter(\n    (value) => nums.indexOf(value) === nums.lastIndexOf(value),\n  );\n  // Add the values that survived the uniqueness test; an empty list reduces to zero.\n  return uniqueValues.reduce((total, value) => total + value, 0);\n}\n",
                    ts: "function sumOfUnique(nums: number[]): number {\n  // A value occurs once exactly when its first and last positions are the same.\n  const uniqueValues = nums.filter(\n    (value) => nums.indexOf(value) === nums.lastIndexOf(value),\n  );\n  // Add the values that survived the uniqueness test; an empty list reduces to zero.\n  return uniqueValues.reduce((total, value) => total + value, 0);\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fc-longest-palindrome",
        slug: "longest-palindrome-length",
        title: "Longest Palindrome Length",
        difficulty: "medium",
        patternIds: P,
        statement: "Using the characters of the string (each at most as many times as it appears), return the length of the longest palindrome you could build. Case matters.",
        examples: [
            {
                input: '"abccccdd"',
                output: "7"
            },
            {
                input: '"a"',
                output: "1"
            },
            {
                input: '""',
                output: "0"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000"
        ],
        functionName: "longestPalindromeLength",
        starter: {
            js: "function longestPalindromeLength(s) {\n  // Longest palindrome buildable from these characters.\n}\n",
            ts: "function longestPalindromeLength(s: string): number {\n  // Longest palindrome buildable from these characters.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "abccccdd"
                ],
                expected: 7
            },
            {
                args: [
                    "a"
                ],
                expected: 1
            },
            {
                args: [
                    ""
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    "bb"
                ],
                expected: 2
            },
            {
                args: [
                    "abc"
                ],
                expected: 1
            },
            {
                args: [
                    "aaabb"
                ],
                expected: 5
            },
            {
                args: [
                    "Aa"
                ],
                expected: 1
            },
            {
                args: [
                    "aabbcc"
                ],
                expected: 6
            },
            {
                args: [
                    "abcdef"
                ],
                expected: 1
            }
        ],
        hints: [
            "Characters pair up around the centre — only even counts fully contribute.",
            "Add the largest even number ≤ each count; then add 1 if any count was odd (a centre).",
            "len += c - (c % 2); if any c is odd, len += 1."
        ],
        solutions: [
            {
                label: "Pair up counts",
                approach: "Use even portions of every count, plus one odd character as the centre.",
                js: "function longestPalindromeLength(s) {\n  const counts = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  let len = 0, hasOdd = false;\n  for (const k in counts) {\n    const v = counts[k];\n    len += v - (v % 2);\n    if (v % 2 === 1) hasOdd = true;\n  }\n  return len + (hasOdd ? 1 : 0);\n}\n",
                ts: "function longestPalindromeLength(s: string): number {\n  const counts: Record<string, number> = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  let len = 0, hasOdd = false;\n  for (const k in counts) {\n    const v = counts[k];\n    len += v - (v % 2);\n    if (v % 2 === 1) hasOdd = true;\n  }\n  return len + (hasOdd ? 1 : 0);\n}\n",
                commentedCode: {
                    js: "function longestPalindromeLength(s) {\n  // Count characters separately; uppercase and lowercase keys remain distinct.\n  const counts = {};\n  for (const char of s) {\n    counts[char] = (counts[char] || 0) + 1;\n  }\n\n  let length = 0;\n  let hasOddCount = false;\n  for (const char in counts) {\n    const count = counts[char];\n    // Every pair can be mirrored across the palindrome, so take the largest even portion.\n    length += count - (count % 2);\n    // At most one unpaired character can later occupy the centre.\n    if (count % 2 === 1) hasOddCount = true;\n  }\n\n  return length + (hasOddCount ? 1 : 0);\n}\n",
                    ts: "function longestPalindromeLength(s: string): number {\n  // Count characters separately; uppercase and lowercase keys remain distinct.\n  const counts: Record<string, number> = {};\n  for (const char of s) {\n    counts[char] = (counts[char] || 0) + 1;\n  }\n\n  let length = 0;\n  let hasOddCount = false;\n  for (const char in counts) {\n    const count = counts[char];\n    // Every pair can be mirrored across the palindrome, so take the largest even portion.\n    length += count - (count % 2);\n    // At most one unpaired character can later occupy the centre.\n    if (count % 2 === 1) hasOddCount = true;\n  }\n\n  return length + (hasOddCount ? 1 : 0);\n}\n"
                },
                time: "O(n)",
                space: "O(k)"
            },
            {
                label: "Count odd characters",
                approach: "The answer is the length minus (odd-count characters − 1), when any exist.",
                js: "function longestPalindromeLength(s) {\n  const counts = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  let odds = 0;\n  for (const k in counts) if (counts[k] % 2 === 1) odds++;\n  return odds > 0 ? s.length - odds + 1 : s.length;\n}\n",
                ts: "function longestPalindromeLength(s: string): number {\n  const counts: Record<string, number> = {};\n  for (const c of s) counts[c] = (counts[c] || 0) + 1;\n  let odds = 0;\n  for (const k in counts) if (counts[k] % 2 === 1) odds++;\n  return odds > 0 ? s.length - odds + 1 : s.length;\n}\n",
                commentedCode: {
                    js: "function longestPalindromeLength(s) {\n  // Count how many copies of each case-sensitive character are available.\n  const counts = {};\n  for (const char of s) {\n    counts[char] = (counts[char] || 0) + 1;\n  }\n\n  let oddCountCharacters = 0;\n  for (const char in counts) {\n    if (counts[char] % 2 === 1) oddCountCharacters++;\n  }\n\n  // Each odd-frequency character leaves one copy unused, except one allowed centre copy.\n  return oddCountCharacters > 0\n    ? s.length - oddCountCharacters + 1\n    : s.length;\n}\n",
                    ts: "function longestPalindromeLength(s: string): number {\n  // Count how many copies of each case-sensitive character are available.\n  const counts: Record<string, number> = {};\n  for (const char of s) {\n    counts[char] = (counts[char] || 0) + 1;\n  }\n\n  let oddCountCharacters = 0;\n  for (const char in counts) {\n    if (counts[char] % 2 === 1) oddCountCharacters++;\n  }\n\n  // Each odd-frequency character leaves one copy unused, except one allowed centre copy.\n  return oddCountCharacters > 0\n    ? s.length - oddCountCharacters + 1\n    : s.length;\n}\n"
                },
                time: "O(n)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "fc-is-isomorphic",
        slug: "isomorphic-strings",
        title: "Isomorphic Strings",
        difficulty: "medium",
        patternIds: P,
        statement: "Return `true` if the characters of `s` can be consistently replaced to produce `t` — each character maps to exactly one other, and no two characters map to the same one.",
        examples: [
            {
                input: '"egg", "add"',
                output: "true"
            },
            {
                input: '"foo", "bar"',
                output: "false"
            },
            {
                input: '"", ""',
                output: "true"
            }
        ],
        constraints: [
            "0 <= lengths <= 10000"
        ],
        functionName: "isIsomorphic",
        starter: {
            js: "function isIsomorphic(s, t) {\n  // True if a consistent one-to-one character mapping exists.\n}\n",
            ts: "function isIsomorphic(s: string, t: string): boolean {\n  // True if a consistent one-to-one character mapping exists.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    "egg",
                    "add"
                ],
                expected: true
            },
            {
                args: [
                    "foo",
                    "bar"
                ],
                expected: false
            },
            {
                args: [
                    "",
                    ""
                ],
                expected: true
            }
        ],
        hidden: [
            {
                args: [
                    "paper",
                    "title"
                ],
                expected: true
            },
            {
                args: [
                    "ab",
                    "aa"
                ],
                expected: false
            },
            {
                args: [
                    "a",
                    "b"
                ],
                expected: true
            },
            {
                args: [
                    "abc",
                    "xyz"
                ],
                expected: true
            },
            {
                args: [
                    "aab",
                    "xxy"
                ],
                expected: true
            },
            {
                args: [
                    "badc",
                    "baba"
                ],
                expected: false
            }
        ],
        hints: [
            "Track the mapping in both directions to keep it one-to-one.",
            "If a character already maps somewhere else — or the target is already taken — it fails.",
            "Two maps: s→t and t→s, checked at every position."
        ],
        solutions: [
            {
                label: "Two-way mapping",
                approach: "Maintain forward and reverse maps and verify consistency.",
                js: "function isIsomorphic(s, t) {\n  if (s.length !== t.length) return false;\n  const fwd = {}, rev = {};\n  for (let i = 0; i < s.length; i++) {\n    const a = s[i], b = t[i];\n    if (fwd[a] === undefined && rev[b] === undefined) { fwd[a] = b; rev[b] = a; }\n    else if (fwd[a] !== b || rev[b] !== a) return false;\n  }\n  return true;\n}\n",
                ts: "function isIsomorphic(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n  const fwd: Record<string, string> = {}, rev: Record<string, string> = {};\n  for (let i = 0; i < s.length; i++) {\n    const a = s[i], b = t[i];\n    if (fwd[a] === undefined && rev[b] === undefined) { fwd[a] = b; rev[b] = a; }\n    else if (fwd[a] !== b || rev[b] !== a) return false;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isIsomorphic(s, t) {\n  // A position-by-position mapping is impossible when the lengths differ.\n  if (s.length !== t.length) return false;\n\n  // Track both directions to enforce a one-to-one mapping.\n  const forward = {};\n  const reverse = {};\n  for (let index = 0; index < s.length; index++) {\n    const source = s[index];\n    const target = t[index];\n\n    if (forward[source] === undefined && reverse[target] === undefined) {\n      // Neither character has been assigned, so establish this pair in both maps.\n      forward[source] = target;\n      reverse[target] = source;\n    } else if (forward[source] !== target || reverse[target] !== source) {\n      // Either the source changed targets or two sources tried to share one target.\n      return false;\n    }\n  }\n\n  return true;\n}\n",
                    ts: "function isIsomorphic(s: string, t: string): boolean {\n  // A position-by-position mapping is impossible when the lengths differ.\n  if (s.length !== t.length) return false;\n\n  // Track both directions to enforce a one-to-one mapping.\n  const forward: Record<string, string> = {};\n  const reverse: Record<string, string> = {};\n  for (let index = 0; index < s.length; index++) {\n    const source = s[index];\n    const target = t[index];\n\n    if (forward[source] === undefined && reverse[target] === undefined) {\n      // Neither character has been assigned, so establish this pair in both maps.\n      forward[source] = target;\n      reverse[target] = source;\n    } else if (forward[source] !== target || reverse[target] !== source) {\n      // Either the source changed targets or two sources tried to share one target.\n      return false;\n    }\n  }\n\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(k)"
            },
            {
                label: "Compare first-index patterns",
                approach: "Two strings are isomorphic when their first-occurrence patterns match.",
                js: "function isIsomorphic(s, t) {\n  if (s.length !== t.length) return false;\n  const pattern = (str) => [...str].map((c) => str.indexOf(c)).join(',');\n  return pattern(s) === pattern(t);\n}\n",
                ts: "function isIsomorphic(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n  const pattern = (str: string) => [...str].map((c) => str.indexOf(c)).join(',');\n  return pattern(s) === pattern(t);\n}\n",
                commentedCode: {
                    js: "function isIsomorphic(s, t) {\n  // Equal mapping patterns must contain the same number of positions.\n  if (s.length !== t.length) return false;\n\n  const pattern = (text) => {\n    // Replace each character with the index where that character first appeared.\n    // For example, both \"egg\" and \"add\" become the shape \"0,1,1\".\n    return [...text].map((char) => text.indexOf(char)).join(',');\n  };\n\n  // Matching first-occurrence shapes imply the same one-to-one repetition structure.\n  return pattern(s) === pattern(t);\n}\n",
                    ts: "function isIsomorphic(s: string, t: string): boolean {\n  // Equal mapping patterns must contain the same number of positions.\n  if (s.length !== t.length) return false;\n\n  const pattern = (text: string): string => {\n    // Replace each character with the index where that character first appeared.\n    // For example, both \"egg\" and \"add\" become the shape \"0,1,1\".\n    return [...text].map((char) => text.indexOf(char)).join(',');\n  };\n\n  // Matching first-occurrence shapes imply the same one-to-one repetition structure.\n  return pattern(s) === pattern(t);\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    }
];
const frequencyCounterProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const frequencyCounterMcqs = [
    {
        id: "s4-fc-time",
        kind: "mcq",
        prompt: "Counting how often each value occurs in a list of n items with a hash map takes:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "One pass with O(1) average updates per item gives linear time."
    },
    {
        id: "s4-fc-space",
        kind: "mcq",
        prompt: "A frequency map over a fixed alphabet (say the 26 lowercase letters) uses:",
        options: [
            "O(1) extra space",
            "O(n) extra space",
            "O(log n) extra space",
            "O(n²) extra space"
        ],
        answerIndex: 0,
        explanation: "The map size is bounded by the alphabet, not by the input length."
    }
];
const frequencyCounterModule = {
    id: "m-pat-frequency-counter",
    stageId: S,
    title: "Frequency Counter & Hash Patterns",
    kind: "patternModule",
    summary: "Tally things in a map to replace nested loops with a single pass.",
    lessonSections: [
        {
            heading: "Count first, decide later",
            body: `The frequency-counter pattern builds a map from value → count in one pass, then answers questions from that map. It's the standard way to turn an **O(n²)** comparison of two collections into **O(n)**.

\`\`\`js
function counts(list) {
  const m = {};
  for (const x of list) m[x] = (m[x] || 0) + 1;
  return m;
}
console.log(counts(['a', 'b', 'a'])); // { a: 2, b: 1 }
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for a frequency counter / hash map when the problem mentions:

- **anagrams**, permutations, or "same characters",
- "appears once / most often / k most frequent",
- comparing two collections for **contents** rather than order,
- "have I seen this before?" — a **set** is a counter with counts of 1,
- pairing values against a **complement** (two-sum style lookups).`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Build counts
const counts = new Map<number, number>();
for (const x of nums) counts.set(x, (counts.get(x) ?? 0) + 1);

// Spend counts against a second collection
for (const x of other) {
  const c = counts.get(x) ?? 0;
  if (c === 0) return false;      // not available
  counts.set(x, c - 1);
}
\`\`\`

**Pitfalls:** using \`if (counts[x])\` treats a count of 0 like "missing" — usually fine, but be deliberate; object keys are strings, so numeric keys get coerced (use a \`Map\` when that matters); iterate the **count map** rather than the original list when summing per-value results, or you'll double count. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "fc-char-frequency",
    drillProblemIds: [
        "fc-char-frequency",
        "fc-first-unique-number",
        "fc-can-construct",
        "fc-find-difference",
        "fc-top-k-frequent",
        "fc-four-sum-count"
    ],
    testPoolProblemIds: [
        "fc-count-distinct",
        "fc-sum-unique",
        "fc-longest-palindrome",
        "fc-is-isomorphic"
    ],
    complexityQuestionIds: [
        "s4-fc-time",
        "s4-fc-space"
    ],
    badgeId: "badge-pat-frequency-counter",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage4/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerStage4",
    ()=>registerStage4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$prefixSum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage4/prefixSum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$twoPointers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage4/twoPointers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$slidingWindow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage4/slidingWindow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$fastSlow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage4/fastSlow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$frequencyCounter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage4/frequencyCounter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$monotonicStack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage4/monotonicStack.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$linkedListReversal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage4/linkedListReversal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$modifiedBinarySearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage4/modifiedBinarySearch.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function registerStage4() {
    [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$prefixSum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixSumProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$twoPointers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twoPointerProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$slidingWindow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slidingWindowProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$fastSlow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fastSlowProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$frequencyCounter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frequencyCounterProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$monotonicStack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monotonicStackProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$linkedListReversal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["llReversalProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$modifiedBinarySearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifiedBinarySearchProblems"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerProblem"]);
    [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$prefixSum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixSumMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$twoPointers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twoPointerMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$slidingWindow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slidingWindowMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$fastSlow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fastSlowMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$frequencyCounter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frequencyCounterMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$monotonicStack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monotonicStackMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$linkedListReversal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["llReversalMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$modifiedBinarySearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifiedBinarySearchMcqs"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerComplexityQuestion"]);
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$prefixSum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixSumModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$twoPointers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twoPointerModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$slidingWindow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slidingWindowModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$fastSlow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fastSlowModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$frequencyCounter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frequencyCounterModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$monotonicStack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monotonicStackModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$linkedListReversal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["llReversalModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$modifiedBinarySearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifiedBinarySearchModule"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModule"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage4/linkedListReversal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "llReversalMcqs",
    ()=>llReversalMcqs,
    "llReversalModule",
    ()=>llReversalModule,
    "llReversalProblems",
    ()=>llReversalProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s4";
const P = [
    "linked-list-reversal"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "llr-reverse",
        slug: "reverse-list-values",
        title: "Reverse a List",
        difficulty: "easy",
        patternIds: P,
        statement: "A linked list is given as its array of values, head first. Return the values after reversing the list.",
        examples: [
            {
                input: "[1,2,3]",
                output: "[3,2,1]"
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
            "0 <= values.length <= 10000"
        ],
        functionName: "reverseListValues",
        starter: {
            js: "function reverseListValues(values) {\n  // Return the reversed sequence.\n}\n",
            ts: "function reverseListValues(values: number[]): number[] {\n  // Return the reversed sequence.\n  return [];\n}\n"
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
                expected: [
                    3,
                    2,
                    1
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
                        1,
                        2
                    ]
                ],
                expected: [
                    2,
                    1
                ]
            },
            {
                args: [
                    [
                        5,
                        5,
                        6
                    ]
                ],
                expected: [
                    6,
                    5,
                    5
                ]
            },
            {
                args: [
                    [
                        -1,
                        0,
                        1
                    ]
                ],
                expected: [
                    1,
                    0,
                    -1
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                ],
                expected: [
                    5,
                    4,
                    3,
                    2,
                    1
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
                        0,
                        0
                    ]
                ],
                expected: [
                    0,
                    0
                ]
            }
        ],
        hints: [
            "Pointer reversal walks the list, repointing each node at its predecessor.",
            "The array mirror of that is prepending each value to a growing result.",
            "for (const v of values) out.unshift(v); return out."
        ],
        solutions: [
            {
                label: "Prepend each node (pointer reversal)",
                approach: "Mirror the prev/current/next reversal by building from the front.",
                js: "function reverseListValues(values) {\n  const out = [];\n  for (const v of values) out.unshift(v);\n  return out;\n}\n",
                ts: "function reverseListValues(values: number[]): number[] {\n  const out: number[] = [];\n  for (const v of values) out.unshift(v);\n  return out;\n}\n",
                commentedCode: {
                    js: "function reverseListValues(values) {\n  // Grow the result from the front so each value points toward its predecessor.\n  const out = [];\n  for (const value of values) {\n    // Prepending mirrors redirecting a linked-list node to the previous node.\n    out.unshift(value);\n  }\n  return out;\n}\n",
                    ts: "function reverseListValues(values: number[]): number[] {\n  // Grow the result from the front so each value points toward its predecessor.\n  const out: number[] = [];\n  for (const value of values) {\n    // Prepending mirrors redirecting a linked-list node to the previous node.\n    out.unshift(value);\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Two-pointer swap",
                approach: "Swap symmetric positions on a copy.",
                js: "function reverseListValues(values) {\n  const a = [...values];\n  let i = 0, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
                ts: "function reverseListValues(values: number[]): number[] {\n  const a = [...values];\n  let i = 0, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
                commentedCode: {
                    js: "function reverseListValues(values) {\n  // Copy the input so reversing does not mutate the caller's array.\n  const reversed = [...values];\n  let left = 0, right = reversed.length - 1;\n  while (left < right) {\n    // Exchange the symmetric values at the current boundaries.\n    const temp = reversed[left];\n    reversed[left] = reversed[right];\n    reversed[right] = temp;\n    // Move inward to the next pair.\n    left++;\n    right--;\n  }\n  return reversed;\n}\n",
                    ts: "function reverseListValues(values: number[]): number[] {\n  // Copy the input so reversing does not mutate the caller's array.\n  const reversed = [...values];\n  let left = 0, right = reversed.length - 1;\n  while (left < right) {\n    // Exchange the symmetric values at the current boundaries.\n    const temp = reversed[left];\n    reversed[left] = reversed[right];\n    reversed[right] = temp;\n    // Move inward to the next pair.\n    left++;\n    right--;\n  }\n  return reversed;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "llr-reverse-equal",
        slug: "is-reversed",
        title: "Is B the Reverse of A?",
        difficulty: "easy",
        patternIds: P,
        statement: "Return `true` if list `b` is exactly the reverse of list `a`.",
        examples: [
            {
                input: "[1,2,3], [3,2,1]",
                output: "true"
            },
            {
                input: "[1,2], [1,2]",
                output: "false"
            },
            {
                input: "[], []",
                output: "true"
            }
        ],
        constraints: [
            "0 <= lengths <= 10000"
        ],
        functionName: "isReversed",
        starter: {
            js: "function isReversed(a, b) {\n  // True if b is a reversed.\n}\n",
            ts: "function isReversed(a: number[], b: number[]): boolean {\n  // True if b is a reversed.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        3,
                        2,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    [
                        1,
                        2
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [],
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
                    ],
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
                        2
                    ],
                    [
                        2,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        3,
                        1,
                        2
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        1,
                        1
                    ],
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
                        2,
                        3
                    ],
                    [
                        3,
                        2
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        0
                    ],
                    [
                        1
                    ]
                ],
                expected: false
            }
        ],
        hints: [
            "Different lengths can never be reverses of each other.",
            "Walk one list forward and the other backward, comparing as you go.",
            "for i: if (a[i] !== b[n - 1 - i]) return false."
        ],
        solutions: [
            {
                label: "Walk from both ends",
                approach: "Compare a[i] against b's mirrored position.",
                js: "function isReversed(a, b) {\n  if (a.length !== b.length) return false;\n  const n = a.length;\n  for (let i = 0; i < n; i++) if (a[i] !== b[n - 1 - i]) return false;\n  return true;\n}\n",
                ts: "function isReversed(a: number[], b: number[]): boolean {\n  if (a.length !== b.length) return false;\n  const n = a.length;\n  for (let i = 0; i < n; i++) if (a[i] !== b[n - 1 - i]) return false;\n  return true;\n}\n",
                commentedCode: {
                    js: "function isReversed(a, b) {\n  // Reversed lists must contain the same number of values.\n  if (a.length !== b.length) return false;\n  const n = a.length;\n  for (let i = 0; i < n; i++) {\n    // Match each forward position in a with the mirrored position in b.\n    if (a[i] !== b[n - 1 - i]) return false;\n  }\n  return true;\n}\n",
                    ts: "function isReversed(a: number[], b: number[]): boolean {\n  // Reversed lists must contain the same number of values.\n  if (a.length !== b.length) return false;\n  const n = a.length;\n  for (let i = 0; i < n; i++) {\n    // Match each forward position in a with the mirrored position in b.\n    if (a[i] !== b[n - 1 - i]) return false;\n  }\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Reverse and compare",
                approach: "Build the reverse of a and compare serialised forms.",
                js: "function isReversed(a, b) {\n  return [...a].reverse().join(',') === b.join(',');\n}\n",
                ts: "function isReversed(a: number[], b: number[]): boolean {\n  return [...a].reverse().join(',') === b.join(',');\n}\n",
                commentedCode: {
                    js: "function isReversed(a, b) {\n  // Reverse a copy of a, then compare both complete value sequences.\n  const reversedA = [...a].reverse().join(',');\n  const originalB = b.join(',');\n  return reversedA === originalB;\n}\n",
                    ts: "function isReversed(a: number[], b: number[]): boolean {\n  // Reverse a copy of a, then compare both complete value sequences.\n  const reversedA = [...a].reverse().join(',');\n  const originalB = b.join(',');\n  return reversedA === originalB;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "llr-reverse-between",
        slug: "reverse-sublist",
        title: "Reverse a Sublist",
        difficulty: "medium",
        patternIds: P,
        statement: "Reverse only the nodes from position `left` to position `right` (1-indexed, inclusive) and return the resulting values.",
        examples: [
            {
                input: "[1,2,3,4,5], 2, 4",
                output: "[1,4,3,2,5]"
            },
            {
                input: "[1,2,3], 1, 3",
                output: "[3,2,1]"
            },
            {
                input: "[1], 1, 1",
                output: "[1]"
            }
        ],
        constraints: [
            "1 <= left <= right <= values.length"
        ],
        functionName: "reverseBetween",
        starter: {
            js: "function reverseBetween(values, left, right) {\n  // Reverse positions left..right (1-indexed).\n}\n",
            ts: "function reverseBetween(values: number[], left: number, right: number): number[] {\n  // Reverse positions left..right (1-indexed).\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    2,
                    4
                ],
                expected: [
                    1,
                    4,
                    3,
                    2,
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
                    1,
                    3
                ],
                expected: [
                    3,
                    2,
                    1
                ]
            },
            {
                args: [
                    [
                        1
                    ],
                    1,
                    1
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
                        1,
                        2
                    ],
                    1,
                    2
                ],
                expected: [
                    2,
                    1
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    2,
                    3
                ],
                expected: [
                    1,
                    3,
                    2,
                    4
                ]
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
                    1,
                    1
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
                        5,
                        6,
                        7
                    ],
                    2,
                    3
                ],
                expected: [
                    5,
                    7,
                    6
                ]
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
                    3,
                    5
                ],
                expected: [
                    1,
                    2,
                    5,
                    4,
                    3
                ]
            },
            {
                args: [
                    [
                        9
                    ],
                    1,
                    1
                ],
                expected: [
                    9
                ]
            }
        ],
        hints: [
            "Positions are 1-indexed, so subtract one to get array indices.",
            "Split into three parts: before, the reversed middle, and after.",
            "return [...before, ...middle.reverse(), ...after]."
        ],
        solutions: [
            {
                label: "Split, reverse, rejoin",
                approach: "Isolate the middle section and reverse just that slice.",
                js: "function reverseBetween(values, left, right) {\n  const before = values.slice(0, left - 1);\n  const middle = values.slice(left - 1, right).reverse();\n  const after = values.slice(right);\n  return [...before, ...middle, ...after];\n}\n",
                ts: "function reverseBetween(values: number[], left: number, right: number): number[] {\n  const before = values.slice(0, left - 1);\n  const middle = values.slice(left - 1, right).reverse();\n  const after = values.slice(right);\n  return [...before, ...middle, ...after];\n}\n",
                commentedCode: {
                    js: "function reverseBetween(values, left, right) {\n  // Preserve everything before the 1-indexed reversal range.\n  const before = values.slice(0, left - 1);\n  // Slice uses an exclusive end, so right includes the requested final position.\n  const middle = values.slice(left - 1, right).reverse();\n  // Preserve every value after the reversed range.\n  const after = values.slice(right);\n  return [...before, ...middle, ...after];\n}\n",
                    ts: "function reverseBetween(values: number[], left: number, right: number): number[] {\n  // Preserve everything before the 1-indexed reversal range.\n  const before = values.slice(0, left - 1);\n  // Slice uses an exclusive end, so right includes the requested final position.\n  const middle = values.slice(left - 1, right).reverse();\n  // Preserve every value after the reversed range.\n  const after = values.slice(right);\n  return [...before, ...middle, ...after];\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "In-place swaps",
                approach: "Swap inward between the two boundary indices on a copy.",
                js: "function reverseBetween(values, left, right) {\n  const a = [...values];\n  let i = left - 1, j = right - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
                ts: "function reverseBetween(values: number[], left: number, right: number): number[] {\n  const a = [...values];\n  let i = left - 1, j = right - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
                commentedCode: {
                    js: "function reverseBetween(values, left, right) {\n  // Work on a copy and convert both 1-indexed boundaries to array indices.\n  const result = [...values];\n  let i = left - 1, j = right - 1;\n  while (i < j) {\n    // Swap the current boundary pair inside the selected sublist.\n    const temp = result[i];\n    result[i] = result[j];\n    result[j] = temp;\n    i++;\n    j--;\n  }\n  return result;\n}\n",
                    ts: "function reverseBetween(values: number[], left: number, right: number): number[] {\n  // Work on a copy and convert both 1-indexed boundaries to array indices.\n  const result = [...values];\n  let i = left - 1, j = right - 1;\n  while (i < j) {\n    // Swap the current boundary pair inside the selected sublist.\n    const temp = result[i];\n    result[i] = result[j];\n    result[j] = temp;\n    i++;\n    j--;\n  }\n  return result;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "llr-swap-pairs",
        slug: "swap-pairs",
        title: "Swap Adjacent Pairs",
        difficulty: "medium",
        patternIds: P,
        statement: "Swap every two adjacent nodes and return the resulting values. A trailing odd node stays where it is.",
        examples: [
            {
                input: "[1,2,3,4]",
                output: "[2,1,4,3]"
            },
            {
                input: "[1,2,3]",
                output: "[2,1,3]"
            },
            {
                input: "[]",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "swapPairs",
        starter: {
            js: "function swapPairs(values) {\n  // Swap each adjacent pair.\n}\n",
            ts: "function swapPairs(values: number[]): number[] {\n  // Swap each adjacent pair.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ]
                ],
                expected: [
                    2,
                    1,
                    4,
                    3
                ]
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
                    2,
                    1,
                    3
                ]
            },
            {
                args: [
                    []
                ],
                expected: []
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
                        1,
                        2
                    ]
                ],
                expected: [
                    2,
                    1
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                ],
                expected: [
                    2,
                    1,
                    4,
                    3,
                    5
                ]
            },
            {
                args: [
                    [
                        0,
                        0
                    ]
                ],
                expected: [
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        4,
                        3,
                        2,
                        1
                    ]
                ],
                expected: [
                    3,
                    4,
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        7,
                        8,
                        9,
                        10,
                        11,
                        12
                    ]
                ],
                expected: [
                    8,
                    7,
                    10,
                    9,
                    12,
                    11
                ]
            }
        ],
        hints: [
            "Step through the list two nodes at a time.",
            "Only swap when a full pair exists; a lone final node stays put.",
            "for (i = 0; i + 1 < n; i += 2) swap a[i], a[i+1]."
        ],
        solutions: [
            {
                label: "Step by two",
                approach: "Swap each complete adjacent pair on a copy.",
                js: "function swapPairs(values) {\n  const a = [...values];\n  for (let i = 0; i + 1 < a.length; i += 2) {\n    const t = a[i]; a[i] = a[i + 1]; a[i + 1] = t;\n  }\n  return a;\n}\n",
                ts: "function swapPairs(values: number[]): number[] {\n  const a = [...values];\n  for (let i = 0; i + 1 < a.length; i += 2) {\n    const t = a[i]; a[i] = a[i + 1]; a[i + 1] = t;\n  }\n  return a;\n}\n",
                commentedCode: {
                    js: "function swapPairs(values) {\n  // Copy the values so pair swaps leave the input unchanged.\n  const result = [...values];\n  // Advance by two and stop unless a complete pair remains.\n  for (let i = 0; i + 1 < result.length; i += 2) {\n    const temp = result[i];\n    result[i] = result[i + 1];\n    result[i + 1] = temp;\n  }\n  return result;\n}\n",
                    ts: "function swapPairs(values: number[]): number[] {\n  // Copy the values so pair swaps leave the input unchanged.\n  const result = [...values];\n  // Advance by two and stop unless a complete pair remains.\n  for (let i = 0; i + 1 < result.length; i += 2) {\n    const temp = result[i];\n    result[i] = result[i + 1];\n    result[i + 1] = temp;\n  }\n  return result;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Build in pairs",
                approach: "Emit each pair in reversed order, then any leftover node.",
                js: "function swapPairs(values) {\n  const out = [];\n  for (let i = 0; i < values.length; i += 2) {\n    if (i + 1 < values.length) out.push(values[i + 1], values[i]);\n    else out.push(values[i]);\n  }\n  return out;\n}\n",
                ts: "function swapPairs(values: number[]): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < values.length; i += 2) {\n    if (i + 1 < values.length) out.push(values[i + 1], values[i]);\n    else out.push(values[i]);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function swapPairs(values) {\n  const out = [];\n  // Read two values at a time from the original ordering.\n  for (let i = 0; i < values.length; i += 2) {\n    // Emit a complete pair in reverse order.\n    if (i + 1 < values.length) out.push(values[i + 1], values[i]);\n    // An unpaired final value keeps its position at the end.\n    else out.push(values[i]);\n  }\n  return out;\n}\n",
                    ts: "function swapPairs(values: number[]): number[] {\n  const out: number[] = [];\n  // Read two values at a time from the original ordering.\n  for (let i = 0; i < values.length; i += 2) {\n    // Emit a complete pair in reverse order.\n    if (i + 1 < values.length) out.push(values[i + 1], values[i]);\n    // An unpaired final value keeps its position at the end.\n    else out.push(values[i]);\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "llr-reverse-k-group",
        slug: "reverse-k-group",
        title: "Reverse in K-Groups",
        difficulty: "medium",
        patternIds: P,
        statement: "Reverse the nodes in consecutive groups of `k`. If the final group has fewer than `k` nodes, leave it as is.",
        examples: [
            {
                input: "[1,2,3,4,5], 2",
                output: "[2,1,4,3,5]"
            },
            {
                input: "[1,2,3,4,5], 3",
                output: "[3,2,1,4,5]"
            },
            {
                input: "[1,2,3], 1",
                output: "[1,2,3]"
            }
        ],
        constraints: [
            "1 <= k",
            "0 <= values.length <= 10000"
        ],
        functionName: "reverseKGroup",
        starter: {
            js: "function reverseKGroup(values, k) {\n  // Reverse each full group of k.\n}\n",
            ts: "function reverseKGroup(values: number[], k: number): number[] {\n  // Reverse each full group of k.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    2
                ],
                expected: [
                    2,
                    1,
                    4,
                    3,
                    5
                ]
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
                    3
                ],
                expected: [
                    3,
                    2,
                    1,
                    4,
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
                    1
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
                    [],
                    2
                ],
                expected: []
            },
            {
                args: [
                    [
                        1
                    ],
                    2
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    2
                ],
                expected: [
                    2,
                    1,
                    4,
                    3
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ],
                    3
                ],
                expected: [
                    3,
                    2,
                    1,
                    6,
                    5,
                    4
                ]
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    3
                ],
                expected: [
                    1,
                    2
                ]
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
                expected: [
                    5,
                    4,
                    3,
                    2,
                    1
                ]
            }
        ],
        hints: [
            "Walk the list in chunks of k.",
            "Reverse a chunk only when it is exactly k long.",
            "Concatenate the (possibly reversed) chunks in order."
        ],
        solutions: [
            {
                label: "Chunk and reverse",
                approach: "Slice groups of k, reversing only the complete ones.",
                js: "function reverseKGroup(values, k) {\n  const out = [];\n  for (let i = 0; i < values.length; i += k) {\n    const chunk = values.slice(i, i + k);\n    if (chunk.length === k) chunk.reverse();\n    out.push(...chunk);\n  }\n  return out;\n}\n",
                ts: "function reverseKGroup(values: number[], k: number): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < values.length; i += k) {\n    const chunk = values.slice(i, i + k);\n    if (chunk.length === k) chunk.reverse();\n    out.push(...chunk);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function reverseKGroup(values, k) {\n  const out = [];\n  // Visit each non-overlapping group of at most k values.\n  for (let start = 0; start < values.length; start += k) {\n    const group = values.slice(start, start + k);\n    // Reverse only complete groups; the shorter tail remains unchanged.\n    if (group.length === k) group.reverse();\n    out.push(...group);\n  }\n  return out;\n}\n",
                    ts: "function reverseKGroup(values: number[], k: number): number[] {\n  const out: number[] = [];\n  // Visit each non-overlapping group of at most k values.\n  for (let start = 0; start < values.length; start += k) {\n    const group = values.slice(start, start + k);\n    // Reverse only complete groups; the shorter tail remains unchanged.\n    if (group.length === k) group.reverse();\n    out.push(...group);\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Index swaps per group",
                approach: "Swap inward within each complete group on a copy.",
                js: "function reverseKGroup(values, k) {\n  const a = [...values];\n  for (let start = 0; start + k <= a.length; start += k) {\n    let i = start, j = start + k - 1;\n    while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  }\n  return a;\n}\n",
                ts: "function reverseKGroup(values: number[], k: number): number[] {\n  const a = [...values];\n  for (let start = 0; start + k <= a.length; start += k) {\n    let i = start, j = start + k - 1;\n    while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  }\n  return a;\n}\n",
                commentedCode: {
                    js: "function reverseKGroup(values, k) {\n  const result = [...values];\n  // Start only groups whose full k values fit in the array.\n  for (let start = 0; start + k <= result.length; start += k) {\n    let left = start, right = start + k - 1;\n    // Reverse this group by swapping its values from the outside inward.\n    while (left < right) {\n      const temp = result[left];\n      result[left] = result[right];\n      result[right] = temp;\n      left++;\n      right--;\n    }\n  }\n  return result;\n}\n",
                    ts: "function reverseKGroup(values: number[], k: number): number[] {\n  const result = [...values];\n  // Start only groups whose full k values fit in the array.\n  for (let start = 0; start + k <= result.length; start += k) {\n    let left = start, right = start + k - 1;\n    // Reverse this group by swapping its values from the outside inward.\n    while (left < right) {\n      const temp = result[left];\n      result[left] = result[right];\n      result[right] = temp;\n      left++;\n      right--;\n    }\n  }\n  return result;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "llr-reorder",
        slug: "reorder-list",
        title: "Reorder List",
        difficulty: "hard",
        patternIds: P,
        statement: "Reorder the list so it reads first, last, second, second-to-last, and so on: `L0, Ln-1, L1, Ln-2, …`",
        examples: [
            {
                input: "[1,2,3,4]",
                output: "[1,4,2,3]"
            },
            {
                input: "[1,2,3,4,5]",
                output: "[1,5,2,4,3]"
            },
            {
                input: "[]",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "reorderList",
        starter: {
            js: "function reorderList(values) {\n  // Interleave from the front and the back.\n}\n",
            ts: "function reorderList(values: number[]): number[] {\n  // Interleave from the front and the back.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ]
                ],
                expected: [
                    1,
                    4,
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                ],
                expected: [
                    1,
                    5,
                    2,
                    4,
                    3
                ]
            },
            {
                args: [
                    []
                ],
                expected: []
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
                        1,
                        2
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
                        1,
                        2,
                        3
                    ]
                ],
                expected: [
                    1,
                    3,
                    2
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ]
                ],
                expected: [
                    1,
                    6,
                    2,
                    5,
                    3,
                    4
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
                        8,
                        7,
                        6
                    ]
                ],
                expected: [
                    9,
                    6,
                    8,
                    7
                ]
            }
        ],
        hints: [
            "The classic approach splits the list, reverses the second half, then merges the halves.",
            "With an array, two pointers from the ends produce the same interleaving.",
            "Alternate pushing from the front and the back until the pointers meet."
        ],
        solutions: [
            {
                label: "Two pointers from the ends",
                approach: "Alternate taking from the front and the back.",
                js: "function reorderList(values) {\n  const out = [];\n  let i = 0, j = values.length - 1;\n  while (i < j) { out.push(values[i++]); out.push(values[j--]); }\n  if (i === j) out.push(values[i]);\n  return out;\n}\n",
                ts: "function reorderList(values: number[]): number[] {\n  const out: number[] = [];\n  let i = 0, j = values.length - 1;\n  while (i < j) { out.push(values[i++]); out.push(values[j--]); }\n  if (i === j) out.push(values[i]);\n  return out;\n}\n",
                commentedCode: {
                    js: "function reorderList(values) {\n  const out = [];\n  // Track the next unused values at the front and back.\n  let left = 0, right = values.length - 1;\n  while (left < right) {\n    // Alternate front, back to create L0, Ln-1, L1, Ln-2, and so on.\n    out.push(values[left++]);\n    out.push(values[right--]);\n  }\n  // An odd-length list has one middle value left after the pairs.\n  if (left === right) out.push(values[left]);\n  return out;\n}\n",
                    ts: "function reorderList(values: number[]): number[] {\n  const out: number[] = [];\n  // Track the next unused values at the front and back.\n  let left = 0, right = values.length - 1;\n  while (left < right) {\n    // Alternate front, back to create L0, Ln-1, L1, Ln-2, and so on.\n    out.push(values[left++]);\n    out.push(values[right--]);\n  }\n  // An odd-length list has one middle value left after the pairs.\n  if (left === right) out.push(values[left]);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Split, reverse, merge",
                approach: "Mirror the linked-list method: halve, reverse the tail, interleave.",
                js: "function reorderList(values) {\n  const mid = Math.ceil(values.length / 2);\n  const front = values.slice(0, mid);\n  const back = values.slice(mid).reverse();\n  const out = [];\n  for (let i = 0; i < front.length; i++) {\n    out.push(front[i]);\n    if (i < back.length) out.push(back[i]);\n  }\n  return out;\n}\n",
                ts: "function reorderList(values: number[]): number[] {\n  const mid = Math.ceil(values.length / 2);\n  const front = values.slice(0, mid);\n  const back = values.slice(mid).reverse();\n  const out: number[] = [];\n  for (let i = 0; i < front.length; i++) {\n    out.push(front[i]);\n    if (i < back.length) out.push(back[i]);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function reorderList(values) {\n  // Keep the middle value in the front half when the length is odd.\n  const middle = Math.ceil(values.length / 2);\n  const front = values.slice(0, middle);\n  // Reverse the back half so its last value is consumed first.\n  const back = values.slice(middle).reverse();\n  const out = [];\n  for (let i = 0; i < front.length; i++) {\n    out.push(front[i]);\n    // The back half is one value shorter for odd-length inputs.\n    if (i < back.length) out.push(back[i]);\n  }\n  return out;\n}\n",
                    ts: "function reorderList(values: number[]): number[] {\n  // Keep the middle value in the front half when the length is odd.\n  const middle = Math.ceil(values.length / 2);\n  const front = values.slice(0, middle);\n  // Reverse the back half so its last value is consumed first.\n  const back = values.slice(middle).reverse();\n  const out: number[] = [];\n  for (let i = 0; i < front.length; i++) {\n    out.push(front[i]);\n    // The back half is one value shorter for odd-length inputs.\n    if (i < back.length) out.push(back[i]);\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "llr-is-palindrome",
        slug: "palindrome-by-reversal",
        title: "Palindrome by Reversal",
        difficulty: "medium",
        patternIds: P,
        statement: "A list is given as its array of values. Return `true` if it is a palindrome (compare the list against its reversed half).",
        examples: [
            {
                input: "[1,2,1]",
                output: "true"
            },
            {
                input: "[1,2,2,1]",
                output: "true"
            },
            {
                input: "[1,2,3]",
                output: "false"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "isPalindromeByReversal",
        starter: {
            js: "function isPalindromeByReversal(values) {\n  // True if the list is a palindrome.\n}\n",
            ts: "function isPalindromeByReversal(values: number[]): boolean {\n  // True if the list is a palindrome.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: false
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: true
            },
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
                        2
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        2,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        3
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        0,
                        0,
                        0
                    ]
                ],
                expected: true
            }
        ],
        hints: [
            "Reverse the second half and compare it against the first.",
            "Equivalently, compare the whole list with its reverse.",
            "Two pointers from both ends also settle it in O(1) space."
        ],
        solutions: [
            {
                label: "Compare with the reverse",
                approach: "A palindrome equals its own reversal.",
                js: "function isPalindromeByReversal(values) {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
                ts: "function isPalindromeByReversal(values: number[]): boolean {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
                commentedCode: {
                    js: "function isPalindromeByReversal(values) {\n  // A palindrome reads identically before and after reversing.\n  const forward = values.join(',');\n  // Reverse a copy so the original sequence remains untouched.\n  const backward = [...values].reverse().join(',');\n  return forward === backward;\n}\n",
                    ts: "function isPalindromeByReversal(values: number[]): boolean {\n  // A palindrome reads identically before and after reversing.\n  const forward = values.join(',');\n  // Reverse a copy so the original sequence remains untouched.\n  const backward = [...values].reverse().join(',');\n  return forward === backward;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Reverse the second half",
                approach: "Reverse only the tail and compare it against the head.",
                js: "function isPalindromeByReversal(values) {\n  const n = values.length;\n  const half = Math.floor(n / 2);\n  const back = values.slice(n - half).reverse();\n  for (let i = 0; i < half; i++) if (values[i] !== back[i]) return false;\n  return true;\n}\n",
                ts: "function isPalindromeByReversal(values: number[]): boolean {\n  const n = values.length;\n  const half = Math.floor(n / 2);\n  const back = values.slice(n - half).reverse();\n  for (let i = 0; i < half; i++) if (values[i] !== back[i]) return false;\n  return true;\n}\n",
                commentedCode: {
                    js: "function isPalindromeByReversal(values) {\n  const length = values.length;\n  // Ignore the unpaired middle value when the length is odd.\n  const half = Math.floor(length / 2);\n  // Reverse the final half so it aligns with the first half.\n  const reversedBack = values.slice(length - half).reverse();\n  for (let i = 0; i < half; i++) {\n    if (values[i] !== reversedBack[i]) return false;\n  }\n  return true;\n}\n",
                    ts: "function isPalindromeByReversal(values: number[]): boolean {\n  const length = values.length;\n  // Ignore the unpaired middle value when the length is odd.\n  const half = Math.floor(length / 2);\n  // Reverse the final half so it aligns with the first half.\n  const reversedBack = values.slice(length - half).reverse();\n  for (let i = 0; i < half; i++) {\n    if (values[i] !== reversedBack[i]) return false;\n  }\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "llr-rotate-right",
        slug: "rotate-list-right",
        title: "Rotate List Right",
        difficulty: "medium",
        patternIds: P,
        statement: "Rotate the list to the right by `k` places (`k` may exceed the length) and return the resulting values.",
        examples: [
            {
                input: "[1,2,3,4,5], 2",
                output: "[4,5,1,2,3]"
            },
            {
                input: "[1,2], 3",
                output: "[2,1]"
            },
            {
                input: "[], 5",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= k",
            "0 <= values.length <= 10000"
        ],
        functionName: "rotateRight",
        starter: {
            js: "function rotateRight(values, k) {\n  // Rotate right by k places.\n}\n",
            ts: "function rotateRight(values: number[], k: number): number[] {\n  // Rotate right by k places.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    2
                ],
                expected: [
                    4,
                    5,
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    3
                ],
                expected: [
                    2,
                    1
                ]
            },
            {
                args: [
                    [],
                    5
                ],
                expected: []
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ],
                    5
                ],
                expected: [
                    1
                ]
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
                expected: [
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    3
                ],
                expected: [
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    1
                ],
                expected: [
                    4,
                    1,
                    2,
                    3
                ]
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
                    7
                ],
                expected: [
                    4,
                    5,
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        5,
                        6
                    ],
                    1
                ],
                expected: [
                    6,
                    5
                ]
            }
        ],
        hints: [
            "Rotating by the length changes nothing, so only k mod n matters.",
            "The last k elements move to the front.",
            "return values.slice(n - s).concat(values.slice(0, n - s)) with s = k % n."
        ],
        solutions: [
            {
                label: "Slice and rejoin",
                approach: "Move the final k elements to the front.",
                js: "function rotateRight(values, k) {\n  const n = values.length;\n  if (n === 0) return [];\n  const s = k % n;\n  return values.slice(n - s).concat(values.slice(0, n - s));\n}\n",
                ts: "function rotateRight(values: number[], k: number): number[] {\n  const n = values.length;\n  if (n === 0) return [];\n  const s = k % n;\n  return values.slice(n - s).concat(values.slice(0, n - s));\n}\n",
                commentedCode: {
                    js: "function rotateRight(values, k) {\n  const length = values.length;\n  // Avoid modulo by zero and preserve the empty-list result.\n  if (length === 0) return [];\n  // Full-length rotations cancel out, so keep only the remainder.\n  const shift = k % length;\n  const split = length - shift;\n  // Move the rotated suffix in front of the remaining prefix.\n  return values.slice(split).concat(values.slice(0, split));\n}\n",
                    ts: "function rotateRight(values: number[], k: number): number[] {\n  const length = values.length;\n  // Avoid modulo by zero and preserve the empty-list result.\n  if (length === 0) return [];\n  // Full-length rotations cancel out, so keep only the remainder.\n  const shift = k % length;\n  const split = length - shift;\n  // Move the rotated suffix in front of the remaining prefix.\n  return values.slice(split).concat(values.slice(0, split));\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Shift one at a time",
                approach: "Move the last element to the front, k mod n times.",
                js: "function rotateRight(values, k) {\n  const n = values.length;\n  if (n === 0) return [];\n  const out = [...values];\n  const steps = k % n;\n  for (let i = 0; i < steps; i++) out.unshift(out.pop());\n  return out;\n}\n",
                ts: "function rotateRight(values: number[], k: number): number[] {\n  const n = values.length;\n  if (n === 0) return [];\n  const out = [...values];\n  const steps = k % n;\n  for (let i = 0; i < steps; i++) out.unshift(out.pop() as number);\n  return out;\n}\n",
                commentedCode: {
                    js: "function rotateRight(values, k) {\n  const length = values.length;\n  if (length === 0) return [];\n  const out = [...values];\n  // Skip redundant full rotations.\n  const steps = k % length;\n  for (let i = 0; i < steps; i++) {\n    // One right rotation moves the current tail to the front.\n    out.unshift(out.pop());\n  }\n  return out;\n}\n",
                    ts: "function rotateRight(values: number[], k: number): number[] {\n  const length = values.length;\n  if (length === 0) return [];\n  const out = [...values];\n  // Skip redundant full rotations.\n  const steps = k % length;\n  for (let i = 0; i < steps; i++) {\n    // One right rotation moves the current tail to the front.\n    out.unshift(out.pop() as number);\n  }\n  return out;\n}\n"
                },
                time: "O(n·k)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "llr-reverse-suffix",
        slug: "reverse-suffix",
        title: "Reverse the Last K",
        difficulty: "easy",
        patternIds: P,
        statement: "Reverse only the final `k` nodes of the list and return the resulting values.",
        examples: [
            {
                input: "[1,2,3,4,5], 2",
                output: "[1,2,3,5,4]"
            },
            {
                input: "[1,2,3], 3",
                output: "[3,2,1]"
            },
            {
                input: "[1,2,3], 0",
                output: "[1,2,3]"
            }
        ],
        constraints: [
            "0 <= k <= values.length"
        ],
        functionName: "reverseSuffix",
        starter: {
            js: "function reverseSuffix(values, k) {\n  // Reverse the final k values.\n}\n",
            ts: "function reverseSuffix(values: number[], k: number): number[] {\n  // Reverse the final k values.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    2
                ],
                expected: [
                    1,
                    2,
                    3,
                    5,
                    4
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    3
                ],
                expected: [
                    3,
                    2,
                    1
                ]
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
                    [],
                    0
                ],
                expected: []
            },
            {
                args: [
                    [
                        1
                    ],
                    1
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
                    2
                ],
                expected: [
                    2,
                    1
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    1
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
                    [
                        5,
                        6,
                        7,
                        8
                    ],
                    4
                ],
                expected: [
                    8,
                    7,
                    6,
                    5
                ]
            },
            {
                args: [
                    [
                        9,
                        8,
                        7
                    ],
                    2
                ],
                expected: [
                    9,
                    7,
                    8
                ]
            }
        ],
        hints: [
            "Split the list at index n - k.",
            "Reverse the tail slice and append it to the untouched head.",
            "return values.slice(0, n - k).concat(values.slice(n - k).reverse())."
        ],
        solutions: [
            {
                label: "Split and reverse the tail",
                approach: "Keep the head, reverse the final k values.",
                js: "function reverseSuffix(values, k) {\n  const n = values.length;\n  return values.slice(0, n - k).concat(values.slice(n - k).reverse());\n}\n",
                ts: "function reverseSuffix(values: number[], k: number): number[] {\n  const n = values.length;\n  return values.slice(0, n - k).concat(values.slice(n - k).reverse());\n}\n",
                commentedCode: {
                    js: "function reverseSuffix(values, k) {\n  const length = values.length;\n  // The suffix begins k positions before the end.\n  const suffixStart = length - k;\n  const unchangedPrefix = values.slice(0, suffixStart);\n  const reversedSuffix = values.slice(suffixStart).reverse();\n  // Join the untouched head to the reversed tail.\n  return unchangedPrefix.concat(reversedSuffix);\n}\n",
                    ts: "function reverseSuffix(values: number[], k: number): number[] {\n  const length = values.length;\n  // The suffix begins k positions before the end.\n  const suffixStart = length - k;\n  const unchangedPrefix = values.slice(0, suffixStart);\n  const reversedSuffix = values.slice(suffixStart).reverse();\n  // Join the untouched head to the reversed tail.\n  return unchangedPrefix.concat(reversedSuffix);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Swap within the tail",
                approach: "Two pointers converging inside the final k positions.",
                js: "function reverseSuffix(values, k) {\n  const a = [...values];\n  let i = a.length - k, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
                ts: "function reverseSuffix(values: number[], k: number): number[] {\n  const a = [...values];\n  let i = a.length - k, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
                commentedCode: {
                    js: "function reverseSuffix(values, k) {\n  const result = [...values];\n  // Bound both pointers to the final k positions.\n  let left = result.length - k, right = result.length - 1;\n  while (left < right) {\n    // Swap inward until the entire suffix is reversed.\n    const temp = result[left];\n    result[left] = result[right];\n    result[right] = temp;\n    left++;\n    right--;\n  }\n  return result;\n}\n",
                    ts: "function reverseSuffix(values: number[], k: number): number[] {\n  const result = [...values];\n  // Bound both pointers to the final k positions.\n  let left = result.length - k, right = result.length - 1;\n  while (left < right) {\n    // Swap inward until the entire suffix is reversed.\n    const temp = result[left];\n    result[left] = result[right];\n    result[right] = temp;\n    left++;\n    right--;\n  }\n  return result;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "llr-odd-even",
        slug: "odd-even-list",
        title: "Odd-Even List",
        difficulty: "medium",
        patternIds: P,
        statement: "Group all nodes at odd positions together, followed by the nodes at even positions (1-indexed), preserving their relative order.",
        examples: [
            {
                input: "[1,2,3,4,5]",
                output: "[1,3,5,2,4]"
            },
            {
                input: "[1,2,3,4]",
                output: "[1,3,2,4]"
            },
            {
                input: "[]",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "oddEvenList",
        starter: {
            js: "function oddEvenList(values) {\n  // Odd positions first, then even positions.\n}\n",
            ts: "function oddEvenList(values: number[]): number[] {\n  // Odd positions first, then even positions.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                ],
                expected: [
                    1,
                    3,
                    5,
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ]
                ],
                expected: [
                    1,
                    3,
                    2,
                    4
                ]
            },
            {
                args: [
                    []
                ],
                expected: []
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
                        1,
                        2
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
                        1,
                        2,
                        3
                    ]
                ],
                expected: [
                    1,
                    3,
                    2
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        3,
                        5,
                        6,
                        4,
                        7
                    ]
                ],
                expected: [
                    2,
                    3,
                    6,
                    7,
                    1,
                    5,
                    4
                ]
            },
            {
                args: [
                    [
                        0,
                        0
                    ]
                ],
                expected: [
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ]
                ],
                expected: [
                    1,
                    3,
                    5,
                    2,
                    4,
                    6
                ]
            }
        ],
        hints: [
            "Position 1 is odd, and array index 0 corresponds to position 1.",
            "Collect even indices into one list and odd indices into another.",
            "return oddPositions.concat(evenPositions)."
        ],
        solutions: [
            {
                label: "Two buckets by index parity",
                approach: "Even array indices are odd positions; concatenate the groups.",
                js: "function oddEvenList(values) {\n  const odd = [], even = [];\n  for (let i = 0; i < values.length; i++) {\n    (i % 2 === 0 ? odd : even).push(values[i]);\n  }\n  return odd.concat(even);\n}\n",
                ts: "function oddEvenList(values: number[]): number[] {\n  const odd: number[] = [], even: number[] = [];\n  for (let i = 0; i < values.length; i++) {\n    (i % 2 === 0 ? odd : even).push(values[i]);\n  }\n  return odd.concat(even);\n}\n",
                commentedCode: {
                    js: "function oddEvenList(values) {\n  const oddPositions = [], evenPositions = [];\n  for (let i = 0; i < values.length; i++) {\n    // Zero-based even indices represent 1-based odd list positions.\n    if (i % 2 === 0) oddPositions.push(values[i]);\n    else evenPositions.push(values[i]);\n  }\n  // Preserve order within each group, with odd positions first.\n  return oddPositions.concat(evenPositions);\n}\n",
                    ts: "function oddEvenList(values: number[]): number[] {\n  const oddPositions: number[] = [], evenPositions: number[] = [];\n  for (let i = 0; i < values.length; i++) {\n    // Zero-based even indices represent 1-based odd list positions.\n    if (i % 2 === 0) oddPositions.push(values[i]);\n    else evenPositions.push(values[i]);\n  }\n  // Preserve order within each group, with odd positions first.\n  return oddPositions.concat(evenPositions);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Filter twice",
                approach: "Two filters over the index parity.",
                js: "function oddEvenList(values) {\n  return values.filter((_, i) => i % 2 === 0).concat(values.filter((_, i) => i % 2 === 1));\n}\n",
                ts: "function oddEvenList(values: number[]): number[] {\n  return values.filter((_, i) => i % 2 === 0).concat(values.filter((_, i) => i % 2 === 1));\n}\n",
                commentedCode: {
                    js: "function oddEvenList(values) {\n  // Select the values at 1-based odd positions first.\n  const oddPositions = values.filter((_, index) => index % 2 === 0);\n  // Then select the values at 1-based even positions.\n  const evenPositions = values.filter((_, index) => index % 2 === 1);\n  return oddPositions.concat(evenPositions);\n}\n",
                    ts: "function oddEvenList(values: number[]): number[] {\n  // Select the values at 1-based odd positions first.\n  const oddPositions = values.filter((_, index) => index % 2 === 0);\n  // Then select the values at 1-based even positions.\n  const evenPositions = values.filter((_, index) => index % 2 === 1);\n  return oddPositions.concat(evenPositions);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    }
];
const llReversalProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const llReversalMcqs = [
    {
        id: "s4-llr-space",
        kind: "mcq",
        prompt: "Reversing a linked list in place (repointing nodes) uses how much extra space?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "Only a few pointer variables are needed — no copy of the list."
    },
    {
        id: "s4-llr-pointers",
        kind: "mcq",
        prompt: "The standard in-place reversal loop keeps track of how many node references?",
        options: [
            "one (current)",
            "two (prev, current)",
            "three (prev, current, next)",
            "four"
        ],
        answerIndex: 2,
        explanation: "You must save `next` before repointing `current`, or you lose the rest of the list."
    }
];
const llReversalModule = {
    id: "m-pat-ll-reversal",
    stageId: S,
    title: "Linked List In-Place Reversal",
    kind: "patternModule",
    summary: "Repointing nodes instead of copying them — reversal, sublists, k-groups, and reordering.",
    lessonSections: [
        {
            heading: "Repoint, don't rebuild",
            body: `Reversing a linked list in place walks the list once, turning each node's \`next\` pointer around. It needs exactly **three** references — \`prev\`, \`current\`, and a saved \`next\` — and **O(1)** extra space.

\`\`\`js
// The canonical pointer dance (conceptual)
let prev = null, cur = head;
while (cur) {
  const next = cur.next; // save it before we clobber it
  cur.next = prev;       // reverse the link
  prev = cur;            // advance
  cur = next;
}
// prev is the new head
\`\`\`

In these drills the list arrives as an **array of values**, so you can focus on the ordering logic.`
        },
        {
            heading: "Recognition cues",
            body: `Reach for in-place reversal when a problem asks you to:

- **reverse** a whole list, a **sublist** (positions left..right), or fixed **k-sized groups**,
- **swap adjacent** nodes,
- **reorder** or fold a list (L0, Ln-1, L1, …),
- check a list is a **palindrome** without extra memory (reverse the second half),
- rotate a list, or separate odd/even positions.`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Reverse positions left..right (1-indexed) — array mirror
function reverseBetween(v: number[], left: number, right: number): number[] {
  return [
    ...v.slice(0, left - 1),
    ...v.slice(left - 1, right).reverse(),
    ...v.slice(right),
  ];
}
\`\`\`

**Pitfalls:** losing the rest of the list by overwriting \`next\` before saving it; **1-indexed** positions vs 0-indexed arrays; leaving a final partial group reversed when the problem says it shouldn't be; forgetting to reconnect the reversed section to the nodes on either side. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "llr-reverse",
    drillProblemIds: [
        "llr-reverse",
        "llr-reverse-equal",
        "llr-reverse-between",
        "llr-swap-pairs",
        "llr-reverse-k-group",
        "llr-reorder"
    ],
    testPoolProblemIds: [
        "llr-is-palindrome",
        "llr-rotate-right",
        "llr-reverse-suffix",
        "llr-odd-even"
    ],
    complexityQuestionIds: [
        "s4-llr-space",
        "s4-llr-pointers"
    ],
    badgeId: "badge-pat-ll-reversal",
    prerequisiteModuleIds: [
        "m-pat-fast-slow"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage4/modifiedBinarySearch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modifiedBinarySearchMcqs",
    ()=>modifiedBinarySearchMcqs,
    "modifiedBinarySearchModule",
    ()=>modifiedBinarySearchModule,
    "modifiedBinarySearchProblems",
    ()=>modifiedBinarySearchProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s4";
const P = [
    "modified-binary-search"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "mbs-ceiling",
        slug: "ceiling-value",
        title: "Ceiling Value",
        difficulty: "easy",
        patternIds: P,
        statement: "Given a sorted list, return the smallest value that is greater than or equal to `target`, or -1 if none exists.",
        examples: [
            {
                input: "[1,3,5,7], 4",
                output: "5"
            },
            {
                input: "[1,3,5], 1",
                output: "1"
            },
            {
                input: "[1,3,5], 6",
                output: "-1"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "0 <= length <= 10000"
        ],
        functionName: "ceilingValue",
        starter: {
            js: "function ceilingValue(sorted, target) {\n  // Smallest value >= target, or -1.\n}\n",
            ts: "function ceilingValue(sorted: number[], target: number): number {\n  // Smallest value >= target, or -1.\n  return -1;\n}\n"
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
                    4
                ],
                expected: 5
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
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        3,
                        5
                    ],
                    6
                ],
                expected: -1
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
                        2
                    ],
                    1
                ],
                expected: 2
            },
            {
                args: [
                    [
                        2
                    ],
                    3
                ],
                expected: -1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    3
                ],
                expected: 3
            },
            {
                args: [
                    [
                        10,
                        20,
                        30
                    ],
                    15
                ],
                expected: 20
            },
            {
                args: [
                    [
                        1,
                        1,
                        2
                    ],
                    1
                ],
                expected: 1
            }
        ],
        hints: [
            "You want the leftmost value that is not smaller than the target.",
            "When mid qualifies, record it and keep searching to the left for something smaller.",
            "if (sorted[mid] >= target) { res = sorted[mid]; hi = mid - 1; } else lo = mid + 1."
        ],
        solutions: [
            {
                label: "Binary search, keep going left",
                approach: "Record qualifying candidates while shrinking toward the smallest.",
                js: "function ceilingValue(sorted, target) {\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] >= target) { res = sorted[mid]; hi = mid - 1; }\n    else lo = mid + 1;\n  }\n  return res;\n}\n",
                ts: "function ceilingValue(sorted: number[], target: number): number {\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] >= target) { res = sorted[mid]; hi = mid - 1; }\n    else lo = mid + 1;\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: "function ceilingValue(sorted, target) {\n  // Search the whole sorted range; -1 means no ceiling has been found yet.\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] >= target) {\n      // This value qualifies, so remember it and look left for a smaller one.\n      res = sorted[mid];\n      hi = mid - 1;\n    } else {\n      // Values through mid are too small to be the ceiling.\n      lo = mid + 1;\n    }\n  }\n  // The last recorded candidate is the smallest value at least target.\n  return res;\n}\n",
                    ts: "function ceilingValue(sorted: number[], target: number): number {\n  // Search the whole sorted range; -1 means no ceiling has been found yet.\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] >= target) {\n      // This value qualifies, so remember it and look left for a smaller one.\n      res = sorted[mid];\n      hi = mid - 1;\n    } else {\n      // Values through mid are too small to be the ceiling.\n      lo = mid + 1;\n    }\n  }\n  // The last recorded candidate is the smallest value at least target.\n  return res;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "Linear scan",
                approach: "Return the first value that reaches the target.",
                js: "function ceilingValue(sorted, target) {\n  for (const v of sorted) if (v >= target) return v;\n  return -1;\n}\n",
                ts: "function ceilingValue(sorted: number[], target: number): number {\n  for (const v of sorted) if (v >= target) return v;\n  return -1;\n}\n",
                commentedCode: {
                    js: "function ceilingValue(sorted, target) {\n  // In sorted order, the first qualifying value is necessarily the smallest.\n  for (const v of sorted) {\n    if (v >= target) return v;\n  }\n  // Every value was smaller than target.\n  return -1;\n}\n",
                    ts: "function ceilingValue(sorted: number[], target: number): number {\n  // In sorted order, the first qualifying value is necessarily the smallest.\n  for (const v of sorted) {\n    if (v >= target) return v;\n  }\n  // Every value was smaller than target.\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mbs-floor",
        slug: "floor-value",
        title: "Floor Value",
        difficulty: "easy",
        patternIds: P,
        statement: "Given a sorted list, return the largest value that is less than or equal to `target`, or -1 if none exists.",
        examples: [
            {
                input: "[1,3,5,7], 4",
                output: "3"
            },
            {
                input: "[1,3,5], 1",
                output: "1"
            },
            {
                input: "[1,3,5], 0",
                output: "-1"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "0 <= length <= 10000"
        ],
        functionName: "floorValue",
        starter: {
            js: "function floorValue(sorted, target) {\n  // Largest value <= target, or -1.\n}\n",
            ts: "function floorValue(sorted: number[], target: number): number {\n  // Largest value <= target, or -1.\n  return -1;\n}\n"
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
                    4
                ],
                expected: 3
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
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        3,
                        5
                    ],
                    0
                ],
                expected: -1
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
                        2
                    ],
                    3
                ],
                expected: 2
            },
            {
                args: [
                    [
                        2
                    ],
                    1
                ],
                expected: -1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    3
                ],
                expected: 3
            },
            {
                args: [
                    [
                        10,
                        20,
                        30
                    ],
                    25
                ],
                expected: 20
            },
            {
                args: [
                    [
                        1,
                        1,
                        2
                    ],
                    1
                ],
                expected: 1
            }
        ],
        hints: [
            "You want the rightmost value that doesn't exceed the target.",
            "When mid qualifies, record it and search to the right for something larger.",
            "if (sorted[mid] <= target) { res = sorted[mid]; lo = mid + 1; } else hi = mid - 1."
        ],
        solutions: [
            {
                label: "Binary search, keep going right",
                approach: "Record qualifying candidates while pushing toward the largest.",
                js: "function floorValue(sorted, target) {\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] <= target) { res = sorted[mid]; lo = mid + 1; }\n    else hi = mid - 1;\n  }\n  return res;\n}\n",
                ts: "function floorValue(sorted: number[], target: number): number {\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] <= target) { res = sorted[mid]; lo = mid + 1; }\n    else hi = mid - 1;\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: "function floorValue(sorted, target) {\n  // Search the whole sorted range; -1 means no floor has been found yet.\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] <= target) {\n      // This value qualifies, so remember it and look right for a larger one.\n      res = sorted[mid];\n      lo = mid + 1;\n    } else {\n      // Values from mid onward are too large to be the floor.\n      hi = mid - 1;\n    }\n  }\n  // The last recorded candidate is the largest value at most target.\n  return res;\n}\n",
                    ts: "function floorValue(sorted: number[], target: number): number {\n  // Search the whole sorted range; -1 means no floor has been found yet.\n  let lo = 0, hi = sorted.length - 1, res = -1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (sorted[mid] <= target) {\n      // This value qualifies, so remember it and look right for a larger one.\n      res = sorted[mid];\n      lo = mid + 1;\n    } else {\n      // Values from mid onward are too large to be the floor.\n      hi = mid - 1;\n    }\n  }\n  // The last recorded candidate is the largest value at most target.\n  return res;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "Scan from the right",
                approach: "Walk backward for the first value at or below the target.",
                js: "function floorValue(sorted, target) {\n  for (let i = sorted.length - 1; i >= 0; i--) if (sorted[i] <= target) return sorted[i];\n  return -1;\n}\n",
                ts: "function floorValue(sorted: number[], target: number): number {\n  for (let i = sorted.length - 1; i >= 0; i--) if (sorted[i] <= target) return sorted[i];\n  return -1;\n}\n",
                commentedCode: {
                    js: "function floorValue(sorted, target) {\n  // Scan from the largest value down, so the first qualifying value is the floor.\n  for (let i = sorted.length - 1; i >= 0; i--) {\n    if (sorted[i] <= target) return sorted[i];\n  }\n  // Every value was greater than target.\n  return -1;\n}\n",
                    ts: "function floorValue(sorted: number[], target: number): number {\n  // Scan from the largest value down, so the first qualifying value is the floor.\n  for (let i = sorted.length - 1; i >= 0; i--) {\n    if (sorted[i] <= target) return sorted[i];\n  }\n  // Every value was greater than target.\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mbs-first-last",
        slug: "first-and-last-position",
        title: "First and Last Position",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a sorted list that may contain duplicates, return `[firstIndex, lastIndex]` of `target`, or `[-1,-1]` if absent.",
        examples: [
            {
                input: "[5,7,7,8,8,10], 8",
                output: "[3,4]"
            },
            {
                input: "[5,7,7,8,8,10], 6",
                output: "[-1,-1]"
            },
            {
                input: "[], 0",
                output: "[-1,-1]"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "0 <= length <= 10000"
        ],
        functionName: "firstLast",
        starter: {
            js: "function firstLast(sorted, target) {\n  // [first, last] indices of target, or [-1,-1].\n}\n",
            ts: "function firstLast(sorted: number[], target: number): number[] {\n  // [first, last] indices of target, or [-1,-1].\n  return [-1, -1];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        5,
                        7,
                        7,
                        8,
                        8,
                        10
                    ],
                    8
                ],
                expected: [
                    3,
                    4
                ]
            },
            {
                args: [
                    [
                        5,
                        7,
                        7,
                        8,
                        8,
                        10
                    ],
                    6
                ],
                expected: [
                    -1,
                    -1
                ]
            },
            {
                args: [
                    [],
                    0
                ],
                expected: [
                    -1,
                    -1
                ]
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
                expected: [
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        1
                    ],
                    2
                ],
                expected: [
                    -1,
                    -1
                ]
            },
            {
                args: [
                    [
                        2,
                        2
                    ],
                    2
                ],
                expected: [
                    0,
                    1
                ]
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
                expected: [
                    1,
                    1
                ]
            },
            {
                args: [
                    [
                        1,
                        1,
                        1
                    ],
                    1
                ],
                expected: [
                    0,
                    2
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        3
                    ],
                    2
                ],
                expected: [
                    1,
                    2
                ]
            }
        ],
        hints: [
            "Run two binary searches: one biased left, one biased right.",
            "On a match, don't stop — record the index and continue toward that side.",
            "first: hi = mid - 1 after a match. last: lo = mid + 1 after a match."
        ],
        solutions: [
            {
                label: "Two biased binary searches",
                approach: "Search for the leftmost and rightmost occurrences separately.",
                js: "function firstLast(sorted, target) {\n  const find = (first) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) { res = mid; if (first) hi = mid - 1; else lo = mid + 1; }\n      else if (sorted[mid] < target) lo = mid + 1;\n      else hi = mid - 1;\n    }\n    return res;\n  };\n  return [find(true), find(false)];\n}\n",
                ts: "function firstLast(sorted: number[], target: number): number[] {\n  const find = (first: boolean) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) { res = mid; if (first) hi = mid - 1; else lo = mid + 1; }\n      else if (sorted[mid] < target) lo = mid + 1;\n      else hi = mid - 1;\n    }\n    return res;\n  };\n  return [find(true), find(false)];\n}\n",
                commentedCode: {
                    js: "function firstLast(sorted, target) {\n  // Run the same boundary search toward either the first or last match.\n  const find = (first) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) {\n        // Save this match, then keep searching toward the requested boundary.\n        res = mid;\n        if (first) hi = mid - 1;\n        else lo = mid + 1;\n      } else if (sorted[mid] < target) {\n        // The target can only appear to the right of a smaller value.\n        lo = mid + 1;\n      } else {\n        // The target can only appear to the left of a larger value.\n        hi = mid - 1;\n      }\n    }\n    return res;\n  };\n  // Search left once and right once to produce both boundaries.\n  return [find(true), find(false)];\n}\n",
                    ts: "function firstLast(sorted: number[], target: number): number[] {\n  // Run the same boundary search toward either the first or last match.\n  const find = (first: boolean) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) {\n        // Save this match, then keep searching toward the requested boundary.\n        res = mid;\n        if (first) hi = mid - 1;\n        else lo = mid + 1;\n      } else if (sorted[mid] < target) {\n        // The target can only appear to the right of a smaller value.\n        lo = mid + 1;\n      } else {\n        // The target can only appear to the left of a larger value.\n        hi = mid - 1;\n      }\n    }\n    return res;\n  };\n  // Search left once and right once to produce both boundaries.\n  return [find(true), find(false)];\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "indexOf / lastIndexOf",
                approach: "Built-in scans give the same answer in linear time.",
                js: "function firstLast(sorted, target) {\n  return [sorted.indexOf(target), sorted.lastIndexOf(target)];\n}\n",
                ts: "function firstLast(sorted: number[], target: number): number[] {\n  return [sorted.indexOf(target), sorted.lastIndexOf(target)];\n}\n",
                commentedCode: {
                    js: "function firstLast(sorted, target) {\n  // The built-ins scan from opposite ends; both return -1 when target is absent.\n  return [sorted.indexOf(target), sorted.lastIndexOf(target)];\n}\n",
                    ts: "function firstLast(sorted: number[], target: number): number[] {\n  // The built-ins scan from opposite ends; both return -1 when target is absent.\n  return [sorted.indexOf(target), sorted.lastIndexOf(target)];\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mbs-rotated-search",
        slug: "search-rotated-array",
        title: "Search a Rotated Array",
        difficulty: "medium",
        patternIds: P,
        statement: "A sorted list of distinct values has been rotated at some pivot. Return the index of `target`, or -1 if absent.",
        examples: [
            {
                input: "[4,5,6,7,0,1,2], 0",
                output: "4"
            },
            {
                input: "[4,5,6,7,0,1,2], 3",
                output: "-1"
            },
            {
                input: "[1], 0",
                output: "-1"
            }
        ],
        constraints: [
            "values are distinct",
            "0 <= length <= 10000"
        ],
        functionName: "searchRotated",
        starter: {
            js: "function searchRotated(nums, target) {\n  // Index of target in a rotated sorted array, or -1.\n}\n",
            ts: "function searchRotated(nums: number[], target: number): number {\n  // Index of target in a rotated sorted array, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        4,
                        5,
                        6,
                        7,
                        0,
                        1,
                        2
                    ],
                    0
                ],
                expected: 4
            },
            {
                args: [
                    [
                        4,
                        5,
                        6,
                        7,
                        0,
                        1,
                        2
                    ],
                    3
                ],
                expected: -1
            },
            {
                args: [
                    [
                        1
                    ],
                    0
                ],
                expected: -1
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
                        3,
                        1
                    ],
                    1
                ],
                expected: 1
            },
            {
                args: [
                    [
                        5,
                        1,
                        3
                    ],
                    3
                ],
                expected: 2
            },
            {
                args: [
                    [
                        4,
                        5,
                        6,
                        7,
                        0,
                        1,
                        2
                    ],
                    4
                ],
                expected: 0
            },
            {
                args: [
                    [
                        6,
                        7,
                        0,
                        1,
                        2,
                        4,
                        5
                    ],
                    2
                ],
                expected: 4
            }
        ],
        hints: [
            "At every step one half of the range is still properly sorted.",
            "Decide which half is sorted by comparing nums[lo] with nums[mid].",
            "If the target lies inside the sorted half, search there; otherwise search the other half."
        ],
        solutions: [
            {
                label: "Binary search on the sorted half",
                approach: "Identify the ordered side each step and narrow into it.",
                js: "function searchRotated(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] === target) return mid;\n    if (nums[lo] <= nums[mid]) {\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1; else lo = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1; else hi = mid - 1;\n    }\n  }\n  return -1;\n}\n",
                ts: "function searchRotated(nums: number[], target: number): number {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] === target) return mid;\n    if (nums[lo] <= nums[mid]) {\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1; else lo = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1; else hi = mid - 1;\n    }\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function searchRotated(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] === target) return mid;\n\n    if (nums[lo] <= nums[mid]) {\n      // The left half is sorted; keep it only when it contains target.\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;\n      else lo = mid + 1;\n    } else {\n      // Otherwise the right half is sorted; keep it only when it contains target.\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;\n      else hi = mid - 1;\n    }\n  }\n  // The search range closed without finding target.\n  return -1;\n}\n",
                    ts: "function searchRotated(nums: number[], target: number): number {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] === target) return mid;\n\n    if (nums[lo] <= nums[mid]) {\n      // The left half is sorted; keep it only when it contains target.\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;\n      else lo = mid + 1;\n    } else {\n      // Otherwise the right half is sorted; keep it only when it contains target.\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;\n      else hi = mid - 1;\n    }\n  }\n  // The search range closed without finding target.\n  return -1;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "Linear scan",
                approach: "Simply look for the value — an O(n) baseline.",
                js: "function searchRotated(nums, target) {\n  return nums.indexOf(target);\n}\n",
                ts: "function searchRotated(nums: number[], target: number): number {\n  return nums.indexOf(target);\n}\n",
                commentedCode: {
                    js: "function searchRotated(nums, target) {\n  // A direct scan ignores the rotation and returns -1 when target is absent.\n  return nums.indexOf(target);\n}\n",
                    ts: "function searchRotated(nums: number[], target: number): number {\n  // A direct scan ignores the rotation and returns -1 when target is absent.\n  return nums.indexOf(target);\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mbs-find-min-rotated",
        slug: "find-min-rotated",
        title: "Minimum in a Rotated Array",
        difficulty: "medium",
        patternIds: P,
        statement: "A sorted list of distinct values has been rotated at some pivot. Return its minimum value.",
        examples: [
            {
                input: "[3,4,5,1,2]",
                output: "1"
            },
            {
                input: "[4,5,6,7,0,1,2]",
                output: "0"
            },
            {
                input: "[11,13,15,17]",
                output: "11"
            }
        ],
        constraints: [
            "values are distinct",
            "1 <= length <= 10000"
        ],
        functionName: "findMinRotated",
        starter: {
            js: "function findMinRotated(nums) {\n  // Minimum of a rotated sorted array.\n}\n",
            ts: "function findMinRotated(nums: number[]): number {\n  // Minimum of a rotated sorted array.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        4,
                        5,
                        1,
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        4,
                        5,
                        6,
                        7,
                        0,
                        1,
                        2
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        11,
                        13,
                        15,
                        17
                    ]
                ],
                expected: 11
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        2,
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        3,
                        1,
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        5,
                        6,
                        7,
                        1,
                        2,
                        3,
                        4
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        2,
                        3,
                        4,
                        5,
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        10,
                        20,
                        30
                    ]
                ],
                expected: 10
            }
        ],
        hints: [
            "Compare the middle value against the right end to see which side holds the rotation.",
            "If nums[mid] > nums[hi], the minimum is strictly to the right of mid.",
            "Otherwise the minimum is at mid or to its left — set hi = mid (don't skip it)."
        ],
        solutions: [
            {
                label: "Binary search on the pivot",
                approach: "Narrow toward the rotation point by comparing mid to the right end.",
                js: "function findMinRotated(nums) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] > nums[hi]) lo = mid + 1; else hi = mid;\n  }\n  return nums[lo];\n}\n",
                ts: "function findMinRotated(nums: number[]): number {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] > nums[hi]) lo = mid + 1; else hi = mid;\n  }\n  return nums[lo];\n}\n",
                commentedCode: {
                    js: "function findMinRotated(nums) {\n  // Keep the rotation point inside this inclusive range.\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] > nums[hi]) {\n      // Mid is in the larger left segment, so the minimum is strictly right.\n      lo = mid + 1;\n    } else {\n      // Mid may be the minimum, so retain it while discarding the right side.\n      hi = mid;\n    }\n  }\n  // The pointers meet exactly at the rotation point.\n  return nums[lo];\n}\n",
                    ts: "function findMinRotated(nums: number[]): number {\n  // Keep the rotation point inside this inclusive range.\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] > nums[hi]) {\n      // Mid is in the larger left segment, so the minimum is strictly right.\n      lo = mid + 1;\n    } else {\n      // Mid may be the minimum, so retain it while discarding the right side.\n      hi = mid;\n    }\n  }\n  // The pointers meet exactly at the rotation point.\n  return nums[lo];\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "Scan for the minimum",
                approach: "A straightforward linear minimum.",
                js: "function findMinRotated(nums) {\n  return Math.min(...nums);\n}\n",
                ts: "function findMinRotated(nums: number[]): number {\n  return Math.min(...nums);\n}\n",
                commentedCode: {
                    js: "function findMinRotated(nums) {\n  // Compare every value directly; rotation does not affect the global minimum.\n  return Math.min(...nums);\n}\n",
                    ts: "function findMinRotated(nums: number[]): number {\n  // Compare every value directly; rotation does not affect the global minimum.\n  return Math.min(...nums);\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mbs-min-eating-speed",
        slug: "min-eating-speed",
        title: "Minimum Eating Speed",
        difficulty: "hard",
        patternIds: P,
        statement: "Given piles of bananas and `h` hours, return the smallest integer speed `k` (bananas per hour) such that eating `ceil(pile / k)` hours per pile finishes every pile within `h` hours.",
        examples: [
            {
                input: "[3,6,7,11], 8",
                output: "4"
            },
            {
                input: "[30,11,23,4,20], 5",
                output: "30"
            },
            {
                input: "[30,11,23,4,20], 6",
                output: "23"
            }
        ],
        constraints: [
            "1 <= piles.length <= h",
            "piles[i] >= 1"
        ],
        functionName: "minEatingSpeed",
        starter: {
            js: "function minEatingSpeed(piles, h) {\n  // Smallest speed that finishes within h hours.\n}\n",
            ts: "function minEatingSpeed(piles: number[], h: number): number {\n  // Smallest speed that finishes within h hours.\n  return 1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        6,
                        7,
                        11
                    ],
                    8
                ],
                expected: 4
            },
            {
                args: [
                    [
                        30,
                        11,
                        23,
                        4,
                        20
                    ],
                    5
                ],
                expected: 30
            },
            {
                args: [
                    [
                        30,
                        11,
                        23,
                        4,
                        20
                    ],
                    6
                ],
                expected: 23
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
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        1,
                        1
                    ],
                    3
                ],
                expected: 1
            },
            {
                args: [
                    [
                        4
                    ],
                    2
                ],
                expected: 2
            },
            {
                args: [
                    [
                        10,
                        10
                    ],
                    2
                ],
                expected: 10
            },
            {
                args: [
                    [
                        3,
                        6,
                        7,
                        11
                    ],
                    4
                ],
                expected: 11
            },
            {
                args: [
                    [
                        5,
                        5,
                        5
                    ],
                    3
                ],
                expected: 5
            }
        ],
        hints: [
            "You're not searching the array — you're searching the *answer* (the speed).",
            "'Can I finish at speed k?' is monotonic: if k works, every larger speed works too.",
            "Binary search k between 1 and max(piles), keeping the smallest speed that works."
        ],
        solutions: [
            {
                label: "Binary search on the answer",
                approach: "Search the speed range, testing feasibility at each midpoint.",
                js: "function minEatingSpeed(piles, h) {\n  let lo = 1, hi = Math.max(...piles);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / mid);\n    if (hours <= h) hi = mid; else lo = mid + 1;\n  }\n  return lo;\n}\n",
                ts: "function minEatingSpeed(piles: number[], h: number): number {\n  let lo = 1, hi = Math.max(...piles);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / mid);\n    if (hours <= h) hi = mid; else lo = mid + 1;\n  }\n  return lo;\n}\n",
                commentedCode: {
                    js: "function minEatingSpeed(piles, h) {\n  // Speeds below 1 are invalid; the largest pile is always fast enough.\n  let lo = 1, hi = Math.max(...piles);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    // Each pile consumes a whole number of hours at this candidate speed.\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / mid);\n    if (hours <= h) {\n      // Mid works, but a smaller speed may also work.\n      hi = mid;\n    } else {\n      // Mid is too slow, and every lower speed is also impossible.\n      lo = mid + 1;\n    }\n  }\n  // The first feasible speed remains when the bounds meet.\n  return lo;\n}\n",
                    ts: "function minEatingSpeed(piles: number[], h: number): number {\n  // Speeds below 1 are invalid; the largest pile is always fast enough.\n  let lo = 1, hi = Math.max(...piles);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    // Each pile consumes a whole number of hours at this candidate speed.\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / mid);\n    if (hours <= h) {\n      // Mid works, but a smaller speed may also work.\n      hi = mid;\n    } else {\n      // Mid is too slow, and every lower speed is also impossible.\n      lo = mid + 1;\n    }\n  }\n  // The first feasible speed remains when the bounds meet.\n  return lo;\n}\n"
                },
                time: "O(n log maxPile)",
                space: "O(1)"
            },
            {
                label: "Try every speed",
                approach: "Increase the speed until the piles fit in the hours.",
                js: "function minEatingSpeed(piles, h) {\n  const max = Math.max(...piles);\n  for (let k = 1; k <= max; k++) {\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / k);\n    if (hours <= h) return k;\n  }\n  return max;\n}\n",
                ts: "function minEatingSpeed(piles: number[], h: number): number {\n  const max = Math.max(...piles);\n  for (let k = 1; k <= max; k++) {\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / k);\n    if (hours <= h) return k;\n  }\n  return max;\n}\n",
                commentedCode: {
                    js: "function minEatingSpeed(piles, h) {\n  // Eating a largest pile in one hour gives a guaranteed upper bound.\n  const max = Math.max(...piles);\n  // Try speeds in increasing order so the first feasible one is minimal.\n  for (let k = 1; k <= max; k++) {\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / k);\n    if (hours <= h) return k;\n  }\n  // The upper bound is always feasible under the stated constraints.\n  return max;\n}\n",
                    ts: "function minEatingSpeed(piles: number[], h: number): number {\n  // Eating a largest pile in one hour gives a guaranteed upper bound.\n  const max = Math.max(...piles);\n  // Try speeds in increasing order so the first feasible one is minimal.\n  for (let k = 1; k <= max; k++) {\n    let hours = 0;\n    for (const p of piles) hours += Math.ceil(p / k);\n    if (hours <= h) return k;\n  }\n  // The upper bound is always feasible under the stated constraints.\n  return max;\n}\n"
                },
                time: "O(n · maxPile)",
                space: "O(1)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "mbs-find-peak",
        slug: "find-peak-index",
        title: "Find the Peak",
        difficulty: "medium",
        patternIds: P,
        statement: "The list rises and then falls (it may only rise, or only fall). Return the index of the peak — the value greater than its neighbours.",
        examples: [
            {
                input: "[1,3,5,4,2]",
                output: "2"
            },
            {
                input: "[1,2,3]",
                output: "2"
            },
            {
                input: "[3,2,1]",
                output: "0"
            }
        ],
        constraints: [
            "1 <= nums.length <= 10000",
            "the peak is unique"
        ],
        functionName: "findPeak",
        starter: {
            js: "function findPeak(nums) {\n  // Index of the peak value.\n}\n",
            ts: "function findPeak(nums: number[]): number {\n  // Index of the peak value.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        3,
                        5,
                        4,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        3,
                        2,
                        1
                    ]
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        2,
                        1
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        5,
                        9,
                        7,
                        3
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                ],
                expected: 4
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
                expected: 0
            }
        ],
        hints: [
            "Compare the middle value with its right neighbour to learn which way is 'uphill'.",
            "If nums[mid] < nums[mid+1] the peak is to the right; otherwise it's at mid or left.",
            "while (lo < hi) { mid = (lo+hi)>>1; if (nums[mid] < nums[mid+1]) lo = mid+1; else hi = mid; }"
        ],
        solutions: [
            {
                label: "Binary search uphill",
                approach: "Always move toward the rising side; the pointers meet at the peak.",
                js: "function findPeak(nums) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] < nums[mid + 1]) lo = mid + 1; else hi = mid;\n  }\n  return lo;\n}\n",
                ts: "function findPeak(nums: number[]): number {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] < nums[mid + 1]) lo = mid + 1; else hi = mid;\n  }\n  return lo;\n}\n",
                commentedCode: {
                    js: "function findPeak(nums) {\n  // The unique peak always stays inside this inclusive range.\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] < nums[mid + 1]) {\n      // An upward slope means the peak is strictly to the right.\n      lo = mid + 1;\n    } else {\n      // A downward slope means mid could be the peak, so keep it.\n      hi = mid;\n    }\n  }\n  // The bounds meet at the top of the rising-then-falling sequence.\n  return lo;\n}\n",
                    ts: "function findPeak(nums: number[]): number {\n  // The unique peak always stays inside this inclusive range.\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] < nums[mid + 1]) {\n      // An upward slope means the peak is strictly to the right.\n      lo = mid + 1;\n    } else {\n      // A downward slope means mid could be the peak, so keep it.\n      hi = mid;\n    }\n  }\n  // The bounds meet at the top of the rising-then-falling sequence.\n  return lo;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "Scan for the maximum",
                approach: "The peak is simply the largest value's index.",
                js: "function findPeak(nums) {\n  let best = 0;\n  for (let i = 1; i < nums.length; i++) if (nums[i] > nums[best]) best = i;\n  return best;\n}\n",
                ts: "function findPeak(nums: number[]): number {\n  let best = 0;\n  for (let i = 1; i < nums.length; i++) if (nums[i] > nums[best]) best = i;\n  return best;\n}\n",
                commentedCode: {
                    js: "function findPeak(nums) {\n  // Treat the first value as the largest seen so far.\n  let best = 0;\n  // Replace its index whenever a higher value appears.\n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] > nums[best]) best = i;\n  }\n  // In a mountain-shaped array, the global maximum is the peak.\n  return best;\n}\n",
                    ts: "function findPeak(nums: number[]): number {\n  // Treat the first value as the largest seen so far.\n  let best = 0;\n  // Replace its index whenever a higher value appears.\n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] > nums[best]) best = i;\n  }\n  // In a mountain-shaped array, the global maximum is the peak.\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mbs-count-occurrences",
        slug: "count-occurrences",
        title: "Count Occurrences",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a sorted list, return how many times `target` appears.",
        examples: [
            {
                input: "[1,2,2,2,3], 2",
                output: "3"
            },
            {
                input: "[1,2,3], 4",
                output: "0"
            },
            {
                input: "[], 1",
                output: "0"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "0 <= length <= 10000"
        ],
        functionName: "countOccurrences",
        starter: {
            js: "function countOccurrences(sorted, target) {\n  // How many times target appears.\n}\n",
            ts: "function countOccurrences(sorted: number[], target: number): number {\n  // How many times target appears.\n  return 0;\n}\n"
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
                expected: 3
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
                expected: 0
            },
            {
                args: [
                    [],
                    1
                ],
                expected: 0
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
                expected: 1
            },
            {
                args: [
                    [
                        2,
                        2
                    ],
                    2
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        1,
                        1
                    ],
                    1
                ],
                expected: 3
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
            },
            {
                args: [
                    [
                        5,
                        5,
                        6,
                        6,
                        6
                    ],
                    6
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    1
                ],
                expected: 1
            }
        ],
        hints: [
            "Occurrences of a value in sorted data form one contiguous block.",
            "Find the first and last index, then the count is last - first + 1.",
            "Return 0 when the value is absent."
        ],
        solutions: [
            {
                label: "First and last index",
                approach: "Two biased binary searches bound the block of equal values.",
                js: "function countOccurrences(sorted, target) {\n  const find = (first) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) { res = mid; if (first) hi = mid - 1; else lo = mid + 1; }\n      else if (sorted[mid] < target) lo = mid + 1;\n      else hi = mid - 1;\n    }\n    return res;\n  };\n  const first = find(true);\n  if (first === -1) return 0;\n  return find(false) - first + 1;\n}\n",
                ts: "function countOccurrences(sorted: number[], target: number): number {\n  const find = (first: boolean) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) { res = mid; if (first) hi = mid - 1; else lo = mid + 1; }\n      else if (sorted[mid] < target) lo = mid + 1;\n      else hi = mid - 1;\n    }\n    return res;\n  };\n  const first = find(true);\n  if (first === -1) return 0;\n  return find(false) - first + 1;\n}\n",
                commentedCode: {
                    js: "function countOccurrences(sorted, target) {\n  // Find either edge of target's contiguous block.\n  const find = (first) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) {\n        // Record the match, then continue toward the requested edge.\n        res = mid;\n        if (first) hi = mid - 1;\n        else lo = mid + 1;\n      } else if (sorted[mid] < target) {\n        lo = mid + 1;\n      } else {\n        hi = mid - 1;\n      }\n    }\n    return res;\n  };\n\n  const first = find(true);\n  // No left boundary means target never appears.\n  if (first === -1) return 0;\n  // Inclusive block size is last index minus first index plus one.\n  return find(false) - first + 1;\n}\n",
                    ts: "function countOccurrences(sorted: number[], target: number): number {\n  // Find either edge of target's contiguous block.\n  const find = (first: boolean) => {\n    let lo = 0, hi = sorted.length - 1, res = -1;\n    while (lo <= hi) {\n      const mid = (lo + hi) >> 1;\n      if (sorted[mid] === target) {\n        // Record the match, then continue toward the requested edge.\n        res = mid;\n        if (first) hi = mid - 1;\n        else lo = mid + 1;\n      } else if (sorted[mid] < target) {\n        lo = mid + 1;\n      } else {\n        hi = mid - 1;\n      }\n    }\n    return res;\n  };\n\n  const first = find(true);\n  // No left boundary means target never appears.\n  if (first === -1) return 0;\n  // Inclusive block size is last index minus first index plus one.\n  return find(false) - first + 1;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "Filter and count",
                approach: "Count matching values directly.",
                js: "function countOccurrences(sorted, target) {\n  return sorted.filter((v) => v === target).length;\n}\n",
                ts: "function countOccurrences(sorted: number[], target: number): number {\n  return sorted.filter((v) => v === target).length;\n}\n",
                commentedCode: {
                    js: "function countOccurrences(sorted, target) {\n  // Keep exactly the matching values, then use the filtered length as the count.\n  return sorted.filter((v) => v === target).length;\n}\n",
                    ts: "function countOccurrences(sorted: number[], target: number): number {\n  // Keep exactly the matching values, then use the filtered length as the count.\n  return sorted.filter((v) => v === target).length;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mbs-search-matrix",
        slug: "search-sorted-matrix",
        title: "Search a Sorted Matrix",
        difficulty: "medium",
        patternIds: P,
        statement: "Each row of the matrix is sorted ascending, and the first value of a row is greater than the last value of the previous row. Return `true` if `target` is present.",
        examples: [
            {
                input: "[[1,3,5],[7,9,11]], 9",
                output: "true"
            },
            {
                input: "[[1,3,5],[7,9,11]], 4",
                output: "false"
            },
            {
                input: "[], 1",
                output: "false"
            }
        ],
        constraints: [
            "the matrix reads as one sorted sequence row by row"
        ],
        functionName: "searchMatrix",
        starter: {
            js: "function searchMatrix(matrix, target) {\n  // True if target is in the matrix.\n}\n",
            ts: "function searchMatrix(matrix: number[][], target: number): boolean {\n  // True if target is in the matrix.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            3,
                            5
                        ],
                        [
                            7,
                            9,
                            11
                        ]
                    ],
                    9
                ],
                expected: true
            },
            {
                args: [
                    [
                        [
                            1,
                            3,
                            5
                        ],
                        [
                            7,
                            9,
                            11
                        ]
                    ],
                    4
                ],
                expected: false
            },
            {
                args: [
                    [],
                    1
                ],
                expected: false
            }
        ],
        hidden: [
            {
                args: [
                    [
                        [
                            1
                        ]
                    ],
                    1
                ],
                expected: true
            },
            {
                args: [
                    [
                        [
                            1
                        ]
                    ],
                    2
                ],
                expected: false
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            3,
                            4
                        ]
                    ],
                    3
                ],
                expected: true
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            3,
                            4
                        ]
                    ],
                    5
                ],
                expected: false
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ]
                    ],
                    3
                ],
                expected: true
            },
            {
                args: [
                    [
                        []
                    ],
                    1
                ],
                expected: false
            }
        ],
        hints: [
            "Because rows chain together, the matrix behaves like a single sorted array.",
            "Binary search indices 0..rows*cols-1 and convert with division and modulo.",
            "row = Math.floor(mid / cols), col = mid % cols."
        ],
        solutions: [
            {
                label: "Treat it as one flat array",
                approach: "Binary search the virtual flattened sequence.",
                js: "function searchMatrix(matrix, target) {\n  if (matrix.length === 0 || matrix[0].length === 0) return false;\n  const rows = matrix.length, cols = matrix[0].length;\n  let lo = 0, hi = rows * cols - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    const v = matrix[Math.floor(mid / cols)][mid % cols];\n    if (v === target) return true;\n    if (v < target) lo = mid + 1; else hi = mid - 1;\n  }\n  return false;\n}\n",
                ts: "function searchMatrix(matrix: number[][], target: number): boolean {\n  if (matrix.length === 0 || matrix[0].length === 0) return false;\n  const rows = matrix.length, cols = matrix[0].length;\n  let lo = 0, hi = rows * cols - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    const v = matrix[Math.floor(mid / cols)][mid % cols];\n    if (v === target) return true;\n    if (v < target) lo = mid + 1; else hi = mid - 1;\n  }\n  return false;\n}\n",
                commentedCode: {
                    js: "function searchMatrix(matrix, target) {\n  // There is no searchable value when either matrix dimension is empty.\n  if (matrix.length === 0 || matrix[0].length === 0) return false;\n  const rows = matrix.length, cols = matrix[0].length;\n  // Binary-search virtual indices across the row-by-row sorted sequence.\n  let lo = 0, hi = rows * cols - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    // Convert a flat index back into its matrix row and column.\n    const v = matrix[Math.floor(mid / cols)][mid % cols];\n    if (v === target) return true;\n    if (v < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return false;\n}\n",
                    ts: "function searchMatrix(matrix: number[][], target: number): boolean {\n  // There is no searchable value when either matrix dimension is empty.\n  if (matrix.length === 0 || matrix[0].length === 0) return false;\n  const rows = matrix.length, cols = matrix[0].length;\n  // Binary-search virtual indices across the row-by-row sorted sequence.\n  let lo = 0, hi = rows * cols - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    // Convert a flat index back into its matrix row and column.\n    const v = matrix[Math.floor(mid / cols)][mid % cols];\n    if (v === target) return true;\n    if (v < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return false;\n}\n"
                },
                time: "O(log (r·c))",
                space: "O(1)"
            },
            {
                label: "Flatten and scan",
                approach: "Concatenate the rows and look for the value.",
                js: "function searchMatrix(matrix, target) {\n  return matrix.some((row) => row.includes(target));\n}\n",
                ts: "function searchMatrix(matrix: number[][], target: number): boolean {\n  return matrix.some((row) => row.includes(target));\n}\n",
                commentedCode: {
                    js: "function searchMatrix(matrix, target) {\n  // Check each row until one contains target; some short-circuits on success.\n  return matrix.some((row) => row.includes(target));\n}\n",
                    ts: "function searchMatrix(matrix: number[][], target: number): boolean {\n  // Check each row until one contains target; some short-circuits on success.\n  return matrix.some((row) => row.includes(target));\n}\n"
                },
                time: "O(r·c)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mbs-ship-capacity",
        slug: "ship-within-days",
        title: "Ship Within Days",
        difficulty: "hard",
        patternIds: P,
        statement: "Packages must be shipped in order within `days` days. Return the least ship capacity that makes this possible — each day you load packages in order without exceeding the capacity.",
        examples: [
            {
                input: "[1,2,3,4,5,6,7,8,9,10], 5",
                output: "15"
            },
            {
                input: "[3,2,2,4,1,4], 3",
                output: "6"
            },
            {
                input: "[1,2,3,1,1], 4",
                output: "3"
            }
        ],
        constraints: [
            "1 <= days <= weights.length",
            "weights[i] >= 1"
        ],
        functionName: "shipWithinDays",
        starter: {
            js: "function shipWithinDays(weights, days) {\n  // Least capacity to ship in order within `days`.\n}\n",
            ts: "function shipWithinDays(weights: number[], days: number): number {\n  // Least capacity to ship in order within `days`.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10
                    ],
                    5
                ],
                expected: 15
            },
            {
                args: [
                    [
                        3,
                        2,
                        2,
                        4,
                        1,
                        4
                    ],
                    3
                ],
                expected: 6
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        1,
                        1
                    ],
                    4
                ],
                expected: 3
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
                expected: 1
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
            },
            {
                args: [
                    [
                        1,
                        1
                    ],
                    1
                ],
                expected: 2
            },
            {
                args: [
                    [
                        5
                    ],
                    1
                ],
                expected: 5
            },
            {
                args: [
                    [
                        2,
                        3,
                        4
                    ],
                    3
                ],
                expected: 4
            },
            {
                args: [
                    [
                        10,
                        10,
                        10
                    ],
                    2
                ],
                expected: 20
            }
        ],
        hints: [
            "Search the capacity, not the array: 'can I finish in `days` at capacity C?' is monotonic.",
            "The capacity is at least max(weights) and at most their total.",
            "Simulate loading greedily to count the days a capacity needs."
        ],
        solutions: [
            {
                label: "Binary search on capacity",
                approach: "Test each candidate capacity with a greedy day count.",
                js: "function shipWithinDays(weights, days) {\n  let lo = Math.max(...weights);\n  let hi = weights.reduce((a, b) => a + b, 0);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > mid) { need++; cur = 0; }\n      cur += w;\n    }\n    if (need <= days) hi = mid; else lo = mid + 1;\n  }\n  return lo;\n}\n",
                ts: "function shipWithinDays(weights: number[], days: number): number {\n  let lo = Math.max(...weights);\n  let hi = weights.reduce((a, b) => a + b, 0);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > mid) { need++; cur = 0; }\n      cur += w;\n    }\n    if (need <= days) hi = mid; else lo = mid + 1;\n  }\n  return lo;\n}\n",
                commentedCode: {
                    js: "function shipWithinDays(weights, days) {\n  // A ship must hold the heaviest package; one trip can hold the total weight.\n  let lo = Math.max(...weights);\n  let hi = weights.reduce((a, b) => a + b, 0);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    // Greedily fill each day in order to find how many days this capacity needs.\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > mid) {\n        need++;\n        cur = 0;\n      }\n      cur += w;\n    }\n    if (need <= days) {\n      // This capacity works, so keep it while looking for a smaller one.\n      hi = mid;\n    } else {\n      // This capacity is too small, as are all smaller candidates.\n      lo = mid + 1;\n    }\n  }\n  // The bounds meet at the least feasible ship capacity.\n  return lo;\n}\n",
                    ts: "function shipWithinDays(weights: number[], days: number): number {\n  // A ship must hold the heaviest package; one trip can hold the total weight.\n  let lo = Math.max(...weights);\n  let hi = weights.reduce((a, b) => a + b, 0);\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    // Greedily fill each day in order to find how many days this capacity needs.\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > mid) {\n        need++;\n        cur = 0;\n      }\n      cur += w;\n    }\n    if (need <= days) {\n      // This capacity works, so keep it while looking for a smaller one.\n      hi = mid;\n    } else {\n      // This capacity is too small, as are all smaller candidates.\n      lo = mid + 1;\n    }\n  }\n  // The bounds meet at the least feasible ship capacity.\n  return lo;\n}\n"
                },
                time: "O(n log totalWeight)",
                space: "O(1)"
            },
            {
                label: "Try every capacity",
                approach: "Increase the capacity until the schedule fits.",
                js: "function shipWithinDays(weights, days) {\n  const total = weights.reduce((a, b) => a + b, 0);\n  for (let cap = Math.max(...weights); cap <= total; cap++) {\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > cap) { need++; cur = 0; }\n      cur += w;\n    }\n    if (need <= days) return cap;\n  }\n  return total;\n}\n",
                ts: "function shipWithinDays(weights: number[], days: number): number {\n  const total = weights.reduce((a, b) => a + b, 0);\n  for (let cap = Math.max(...weights); cap <= total; cap++) {\n    let need = 1, cur = 0;\n    for (const w of weights) {\n      if (cur + w > cap) { need++; cur = 0; }\n      cur += w;\n    }\n    if (need <= days) return cap;\n  }\n  return total;\n}\n",
                commentedCode: {
                    js: "function shipWithinDays(weights, days) {\n  // The total weight is the largest capacity worth trying.\n  const total = weights.reduce((a, b) => a + b, 0);\n  // Start where one package always fits and test capacities in increasing order.\n  for (let cap = Math.max(...weights); cap <= total; cap++) {\n    let need = 1, cur = 0;\n    // Preserve package order while greedily packing each day.\n    for (const w of weights) {\n      if (cur + w > cap) {\n        need++;\n        cur = 0;\n      }\n      cur += w;\n    }\n    // The first feasible capacity is the smallest one.\n    if (need <= days) return cap;\n  }\n  // Sending everything in one day is the guaranteed fallback.\n  return total;\n}\n",
                    ts: "function shipWithinDays(weights: number[], days: number): number {\n  // The total weight is the largest capacity worth trying.\n  const total = weights.reduce((a, b) => a + b, 0);\n  // Start where one package always fits and test capacities in increasing order.\n  for (let cap = Math.max(...weights); cap <= total; cap++) {\n    let need = 1, cur = 0;\n    // Preserve package order while greedily packing each day.\n    for (const w of weights) {\n      if (cur + w > cap) {\n        need++;\n        cur = 0;\n      }\n      cur += w;\n    }\n    // The first feasible capacity is the smallest one.\n    if (need <= days) return cap;\n  }\n  // Sending everything in one day is the guaranteed fallback.\n  return total;\n}\n"
                },
                time: "O(n · totalWeight)",
                space: "O(1)"
            }
        ]
    }
];
const modifiedBinarySearchProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const modifiedBinarySearchMcqs = [
    {
        id: "s4-mbs-rotated",
        kind: "mcq",
        prompt: "Searching a rotated sorted array with a modified binary search takes:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answerIndex: 1,
        explanation: "One half is always sorted, so you can still discard half the range each step."
    },
    {
        id: "s4-mbs-answer",
        kind: "mcq",
        prompt: "To binary search on the *answer* (e.g. the smallest workable capacity), the feasibility check must be:",
        options: [
            "monotonic — once true, true for all larger values",
            "random",
            "alphabetically sorted",
            "constant for every input"
        ],
        answerIndex: 0,
        explanation: "Monotonicity is what lets you discard half the candidate answers each step."
    }
];
const modifiedBinarySearchModule = {
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
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for a modified binary search when you see:

- **sorted** input and a question about a **boundary** ("first/last", "insert position", "floor/ceiling"),
- a **rotated** sorted array (one half is always still sorted),
- a **peak** or any array where a comparison tells you which way to go,
- "**minimum/maximum value that works**" — binary search the *answer* when feasibility is **monotonic** (eating speed, ship capacity, minimum time).`
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

**Pitfalls:** mixing the two loop styles (\`lo <= hi\` with \`hi = mid - 1\` vs \`lo < hi\` with \`hi = mid\`) causes infinite loops or off-by-ones; in the \`lo < hi\` form you must use \`hi = mid\` (never \`mid - 1\`) or you can skip the answer; for rotated arrays, compare against a **fixed end** (\`nums[hi]\`) rather than mid's neighbour. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "mbs-ceiling",
    drillProblemIds: [
        "mbs-ceiling",
        "mbs-floor",
        "mbs-first-last",
        "mbs-rotated-search",
        "mbs-find-min-rotated",
        "mbs-min-eating-speed"
    ],
    testPoolProblemIds: [
        "mbs-find-peak",
        "mbs-count-occurrences",
        "mbs-search-matrix",
        "mbs-ship-capacity"
    ],
    complexityQuestionIds: [
        "s4-mbs-rotated",
        "s4-mbs-answer"
    ],
    badgeId: "badge-pat-modified-binary-search",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage4/monotonicStack.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "monotonicStackMcqs",
    ()=>monotonicStackMcqs,
    "monotonicStackModule",
    ()=>monotonicStackModule,
    "monotonicStackProblems",
    ()=>monotonicStackProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s4";
const P = [
    "monotonic-stack"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "ms-final-prices",
        slug: "final-prices",
        title: "Final Prices with Discount",
        difficulty: "easy",
        patternIds: P,
        statement: "For each price, you get a discount equal to the **next** price that is less than or equal to it (looking rightward). If there is no such price, you pay full. Return the final prices.",
        examples: [
            {
                input: "[8,4,6,2,3]",
                output: "[4,2,4,2,3]"
            },
            {
                input: "[1,2,3,4,5]",
                output: "[1,2,3,4,5]"
            },
            {
                input: "[10,1,1,6]",
                output: "[9,0,1,6]"
            }
        ],
        constraints: [
            "0 <= prices.length <= 10000"
        ],
        functionName: "finalPrices",
        starter: {
            js: "function finalPrices(prices) {\n  // Subtract the next price <= this one.\n}\n",
            ts: "function finalPrices(prices: number[]): number[] {\n  // Subtract the next price <= this one.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        8,
                        4,
                        6,
                        2,
                        3
                    ]
                ],
                expected: [
                    4,
                    2,
                    4,
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
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
                        10,
                        1,
                        1,
                        6
                    ]
                ],
                expected: [
                    9,
                    0,
                    1,
                    6
                ]
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: []
            },
            {
                args: [
                    [
                        5
                    ]
                ],
                expected: [
                    5
                ]
            },
            {
                args: [
                    [
                        2,
                        2
                    ]
                ],
                expected: [
                    0,
                    2
                ]
            },
            {
                args: [
                    [
                        3,
                        1,
                        2
                    ]
                ],
                expected: [
                    2,
                    1,
                    2
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
                    0,
                    0,
                    1
                ]
            },
            {
                args: [
                    [
                        9,
                        8,
                        9
                    ]
                ],
                expected: [
                    1,
                    8,
                    9
                ]
            }
        ],
        hints: [
            "For each index you need the next element to its right that is ≤ it.",
            "Keep a stack of indices still waiting for their discount.",
            "When a new price arrives, it resolves every waiting index whose price is ≥ it."
        ],
        solutions: [
            {
                label: "Monotonic stack",
                approach: "Waiting indices are resolved as soon as a small-enough price appears.",
                js: "function finalPrices(prices) {\n  const out = [...prices];\n  const stack = [];\n  for (let i = 0; i < prices.length; i++) {\n    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {\n      const j = stack.pop();\n      out[j] = prices[j] - prices[i];\n    }\n    stack.push(i);\n  }\n  return out;\n}\n",
                ts: "function finalPrices(prices: number[]): number[] {\n  const out = [...prices];\n  const stack: number[] = [];\n  for (let i = 0; i < prices.length; i++) {\n    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {\n      const j = stack.pop() as number;\n      out[j] = prices[j] - prices[i];\n    }\n    stack.push(i);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function finalPrices(prices) {\n  // Start with full prices; entries change only when a discount is found.\n  const out = [...prices];\n  // Keep indices whose next smaller-or-equal price is still unknown.\n  const stack = [];\n  for (let i = 0; i < prices.length; i++) {\n    // The current price resolves every more-expensive waiting item on top.\n    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {\n      const waitingIndex = stack.pop();\n      // The first qualifying price to the right is the required discount.\n      out[waitingIndex] = prices[waitingIndex] - prices[i];\n    }\n    // This price now waits for its own future discount.\n    stack.push(i);\n  }\n  return out;\n}\n",
                    ts: "function finalPrices(prices: number[]): number[] {\n  // Start with full prices; entries change only when a discount is found.\n  const out = [...prices];\n  // Keep indices whose next smaller-or-equal price is still unknown.\n  const stack: number[] = [];\n  for (let i = 0; i < prices.length; i++) {\n    // The current price resolves every more-expensive waiting item on top.\n    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {\n      const waitingIndex = stack.pop() as number;\n      // The first qualifying price to the right is the required discount.\n      out[waitingIndex] = prices[waitingIndex] - prices[i];\n    }\n    // This price now waits for its own future discount.\n    stack.push(i);\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Brute force",
                approach: "Scan rightward for each price.",
                js: "function finalPrices(prices) {\n  const out = [];\n  for (let i = 0; i < prices.length; i++) {\n    let discount = 0;\n    for (let j = i + 1; j < prices.length; j++) {\n      if (prices[j] <= prices[i]) { discount = prices[j]; break; }\n    }\n    out.push(prices[i] - discount);\n  }\n  return out;\n}\n",
                ts: "function finalPrices(prices: number[]): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < prices.length; i++) {\n    let discount = 0;\n    for (let j = i + 1; j < prices.length; j++) {\n      if (prices[j] <= prices[i]) { discount = prices[j]; break; }\n    }\n    out.push(prices[i] - discount);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function finalPrices(prices) {\n  const out = [];\n  // Resolve each price independently by searching to its right.\n  for (let i = 0; i < prices.length; i++) {\n    // A zero discount preserves the full price if no match exists.\n    let discount = 0;\n    for (let j = i + 1; j < prices.length; j++) {\n      // Stop at the first smaller-or-equal price, not merely any such price.\n      if (prices[j] <= prices[i]) {\n        discount = prices[j];\n        break;\n      }\n    }\n    out.push(prices[i] - discount);\n  }\n  return out;\n}\n",
                    ts: "function finalPrices(prices: number[]): number[] {\n  const out: number[] = [];\n  // Resolve each price independently by searching to its right.\n  for (let i = 0; i < prices.length; i++) {\n    // A zero discount preserves the full price if no match exists.\n    let discount = 0;\n    for (let j = i + 1; j < prices.length; j++) {\n      // Stop at the first smaller-or-equal price, not merely any such price.\n      if (prices[j] <= prices[i]) {\n        discount = prices[j];\n        break;\n      }\n    }\n    out.push(prices[i] - discount);\n  }\n  return out;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ms-baseball-score",
        slug: "baseball-score",
        title: "Score Keeper",
        difficulty: "easy",
        patternIds: P,
        statement: "You are given a list of operations as strings. A number pushes that score; `\"C\"` cancels the previous score; `\"D\"` pushes double the previous score; `\"+\"` pushes the sum of the previous two scores. Return the total of all recorded scores.",
        examples: [
            {
                input: '["5","2","C","D","+"]',
                output: "30"
            },
            {
                input: '["1"]',
                output: "1"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "operations are valid when applied"
        ],
        functionName: "baseballScore",
        starter: {
            js: "function baseballScore(ops) {\n  // Apply the operations on a stack; return the total.\n}\n",
            ts: "function baseballScore(ops: string[]): number {\n  // Apply the operations on a stack; return the total.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        "5",
                        "2",
                        "C",
                        "D",
                        "+"
                    ]
                ],
                expected: 30
            },
            {
                args: [
                    [
                        "1"
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    []
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    [
                        "5",
                        "-2",
                        "4",
                        "C",
                        "D",
                        "9",
                        "+",
                        "+"
                    ]
                ],
                expected: 27
            },
            {
                args: [
                    [
                        "1",
                        "C"
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        "1",
                        "D"
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        "2",
                        "3",
                        "+"
                    ]
                ],
                expected: 10
            },
            {
                args: [
                    [
                        "-1",
                        "-1",
                        "+"
                    ]
                ],
                expected: -4
            },
            {
                args: [
                    [
                        "3",
                        "C",
                        "3"
                    ]
                ],
                expected: 3
            }
        ],
        hints: [
            "Each operation only touches the most recent scores — that's a stack.",
            "\"C\" pops, \"D\" pushes 2× the top, \"+\" pushes the sum of the top two.",
            "Anything else is a number: push it. Finally sum the stack."
        ],
        solutions: [
            {
                label: "Stack of scores",
                approach: "Apply each operation to the top of the stack, then total it.",
                js: "function baseballScore(ops) {\n  const stack = [];\n  for (const op of ops) {\n    if (op === 'C') stack.pop();\n    else if (op === 'D') stack.push(stack[stack.length - 1] * 2);\n    else if (op === '+') stack.push(stack[stack.length - 1] + stack[stack.length - 2]);\n    else stack.push(Number(op));\n  }\n  return stack.reduce((s, v) => s + v, 0);\n}\n",
                ts: "function baseballScore(ops: string[]): number {\n  const stack: number[] = [];\n  for (const op of ops) {\n    if (op === 'C') stack.pop();\n    else if (op === 'D') stack.push(stack[stack.length - 1] * 2);\n    else if (op === '+') stack.push(stack[stack.length - 1] + stack[stack.length - 2]);\n    else stack.push(Number(op));\n  }\n  return stack.reduce((s, v) => s + v, 0);\n}\n",
                commentedCode: {
                    js: "function baseballScore(ops) {\n  // The stack contains exactly the scores that are still on the record.\n  const stack = [];\n  for (const op of ops) {\n    // Cancel the most recently recorded score.\n    if (op === 'C') stack.pop();\n    // Double the latest valid score and record the result.\n    else if (op === 'D') stack.push(stack[stack.length - 1] * 2);\n    // Add the two latest valid scores and record that sum.\n    else if (op === '+') stack.push(stack[stack.length - 1] + stack[stack.length - 2]);\n    // Numeric text represents a new independent score.\n    else stack.push(Number(op));\n  }\n  // Only uncancelled scores remain, so their sum is the final total.\n  return stack.reduce((sum, score) => sum + score, 0);\n}\n",
                    ts: "function baseballScore(ops: string[]): number {\n  // The stack contains exactly the scores that are still on the record.\n  const stack: number[] = [];\n  for (const op of ops) {\n    // Cancel the most recently recorded score.\n    if (op === 'C') stack.pop();\n    // Double the latest valid score and record the result.\n    else if (op === 'D') stack.push(stack[stack.length - 1] * 2);\n    // Add the two latest valid scores and record that sum.\n    else if (op === '+') stack.push(stack[stack.length - 1] + stack[stack.length - 2]);\n    // Numeric text represents a new independent score.\n    else stack.push(Number(op));\n  }\n  // Only uncancelled scores remain, so their sum is the final total.\n  return stack.reduce((sum, score) => sum + score, 0);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Running total",
                approach: "Keep the stack but maintain the sum as you go.",
                js: "function baseballScore(ops) {\n  const stack = [];\n  let total = 0;\n  for (const op of ops) {\n    if (op === 'C') { total -= stack.pop(); }\n    else {\n      let v;\n      if (op === 'D') v = stack[stack.length - 1] * 2;\n      else if (op === '+') v = stack[stack.length - 1] + stack[stack.length - 2];\n      else v = Number(op);\n      stack.push(v);\n      total += v;\n    }\n  }\n  return total;\n}\n",
                ts: "function baseballScore(ops: string[]): number {\n  const stack: number[] = [];\n  let total = 0;\n  for (const op of ops) {\n    if (op === 'C') { total -= stack.pop() as number; }\n    else {\n      let v: number;\n      if (op === 'D') v = stack[stack.length - 1] * 2;\n      else if (op === '+') v = stack[stack.length - 1] + stack[stack.length - 2];\n      else v = Number(op);\n      stack.push(v);\n      total += v;\n    }\n  }\n  return total;\n}\n",
                commentedCode: {
                    js: "function baseballScore(ops) {\n  // Keep prior scores for stack-based operations.\n  const stack = [];\n  // Update the total with each operation so no final summation is needed.\n  let total = 0;\n  for (const op of ops) {\n    if (op === 'C') {\n      // Removing a score must also remove its contribution to the total.\n      total -= stack.pop();\n    } else {\n      let score;\n      // Compute the new score from the latest valid stack entries when required.\n      if (op === 'D') score = stack[stack.length - 1] * 2;\n      else if (op === '+') score = stack[stack.length - 1] + stack[stack.length - 2];\n      else score = Number(op);\n      stack.push(score);\n      total += score;\n    }\n  }\n  return total;\n}\n",
                    ts: "function baseballScore(ops: string[]): number {\n  // Keep prior scores for stack-based operations.\n  const stack: number[] = [];\n  // Update the total with each operation so no final summation is needed.\n  let total = 0;\n  for (const op of ops) {\n    if (op === 'C') {\n      // Removing a score must also remove its contribution to the total.\n      total -= stack.pop() as number;\n    } else {\n      let score: number;\n      // Compute the new score from the latest valid stack entries when required.\n      if (op === 'D') score = stack[stack.length - 1] * 2;\n      else if (op === '+') score = stack[stack.length - 1] + stack[stack.length - 2];\n      else score = Number(op);\n      stack.push(score);\n      total += score;\n    }\n  }\n  return total;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ms-daily-temperatures",
        slug: "daily-temperatures",
        title: "Daily Temperatures",
        difficulty: "medium",
        patternIds: P,
        statement: "For each day, return how many days you must wait for a strictly warmer temperature, or 0 if it never gets warmer.",
        examples: [
            {
                input: "[73,74,75,71,69,72,76,73]",
                output: "[1,1,4,2,1,1,0,0]"
            },
            {
                input: "[30,40,50,60]",
                output: "[1,1,1,0]"
            },
            {
                input: "[30,60,90]",
                output: "[1,1,0]"
            }
        ],
        constraints: [
            "0 <= temps.length <= 10000"
        ],
        functionName: "dailyTemperatures",
        starter: {
            js: "function dailyTemperatures(temps) {\n  // Days until a warmer temperature, else 0.\n}\n",
            ts: "function dailyTemperatures(temps: number[]): number[] {\n  // Days until a warmer temperature, else 0.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        73,
                        74,
                        75,
                        71,
                        69,
                        72,
                        76,
                        73
                    ]
                ],
                expected: [
                    1,
                    1,
                    4,
                    2,
                    1,
                    1,
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        30,
                        40,
                        50,
                        60
                    ]
                ],
                expected: [
                    1,
                    1,
                    1,
                    0
                ]
            },
            {
                args: [
                    [
                        30,
                        60,
                        90
                    ]
                ],
                expected: [
                    1,
                    1,
                    0
                ]
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: []
            },
            {
                args: [
                    [
                        50
                    ]
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    [
                        50,
                        50
                    ]
                ],
                expected: [
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        70,
                        60,
                        80
                    ]
                ],
                expected: [
                    2,
                    1,
                    0
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                ],
                expected: [
                    1,
                    1,
                    1,
                    1,
                    0
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
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        ],
        hints: [
            "Days still waiting for a warmer day form a decreasing stack of indices.",
            "When today is warmer than the stack top, that day's answer is the index gap.",
            "while (stack.length && temps[top] < temps[i]) { const j = stack.pop(); out[j] = i - j; }"
        ],
        solutions: [
            {
                label: "Monotonic stack",
                approach: "Resolve every waiting day the moment a warmer day arrives.",
                js: "function dailyTemperatures(temps) {\n  const out = new Array(temps.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {\n      const j = stack.pop();\n      out[j] = i - j;\n    }\n    stack.push(i);\n  }\n  return out;\n}\n",
                ts: "function dailyTemperatures(temps: number[]): number[] {\n  const out = new Array(temps.length).fill(0);\n  const stack: number[] = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {\n      const j = stack.pop() as number;\n      out[j] = i - j;\n    }\n    stack.push(i);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function dailyTemperatures(temps) {\n  // Zero is already correct for days that never get warmer.\n  const out = new Array(temps.length).fill(0);\n  // Store indices of unresolved days in decreasing-temperature order.\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    // Today is the first warmer day for each cooler day exposed on top.\n    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {\n      const waitingDay = stack.pop();\n      out[waitingDay] = i - waitingDay;\n    }\n    // Let this day wait for a future strictly warmer temperature.\n    stack.push(i);\n  }\n  return out;\n}\n",
                    ts: "function dailyTemperatures(temps: number[]): number[] {\n  // Zero is already correct for days that never get warmer.\n  const out = new Array(temps.length).fill(0);\n  // Store indices of unresolved days in decreasing-temperature order.\n  const stack: number[] = [];\n  for (let i = 0; i < temps.length; i++) {\n    // Today is the first warmer day for each cooler day exposed on top.\n    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {\n      const waitingDay = stack.pop() as number;\n      out[waitingDay] = i - waitingDay;\n    }\n    // Let this day wait for a future strictly warmer temperature.\n    stack.push(i);\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Brute force",
                approach: "Scan forward from each day until it gets warmer.",
                js: "function dailyTemperatures(temps) {\n  const out = [];\n  for (let i = 0; i < temps.length; i++) {\n    let wait = 0;\n    for (let j = i + 1; j < temps.length; j++) {\n      if (temps[j] > temps[i]) { wait = j - i; break; }\n    }\n    out.push(wait);\n  }\n  return out;\n}\n",
                ts: "function dailyTemperatures(temps: number[]): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < temps.length; i++) {\n    let wait = 0;\n    for (let j = i + 1; j < temps.length; j++) {\n      if (temps[j] > temps[i]) { wait = j - i; break; }\n    }\n    out.push(wait);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function dailyTemperatures(temps) {\n  const out = [];\n  // Search separately for each day's next warmer temperature.\n  for (let i = 0; i < temps.length; i++) {\n    // Keep zero when no warmer future day exists.\n    let wait = 0;\n    for (let j = i + 1; j < temps.length; j++) {\n      if (temps[j] > temps[i]) {\n        // The first warmer day gives the shortest required wait.\n        wait = j - i;\n        break;\n      }\n    }\n    out.push(wait);\n  }\n  return out;\n}\n",
                    ts: "function dailyTemperatures(temps: number[]): number[] {\n  const out: number[] = [];\n  // Search separately for each day's next warmer temperature.\n  for (let i = 0; i < temps.length; i++) {\n    // Keep zero when no warmer future day exists.\n    let wait = 0;\n    for (let j = i + 1; j < temps.length; j++) {\n      if (temps[j] > temps[i]) {\n        // The first warmer day gives the shortest required wait.\n        wait = j - i;\n        break;\n      }\n    }\n    out.push(wait);\n  }\n  return out;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ms-next-greater-circular",
        slug: "next-greater-circular",
        title: "Next Greater (Circular)",
        difficulty: "medium",
        patternIds: P,
        statement: "For each value, return the next strictly greater value searching rightward and **wrapping around** to the start, or -1 if none exists.",
        examples: [
            {
                input: "[1,2,1]",
                output: "[2,-1,2]"
            },
            {
                input: "[5,4,3,2,1]",
                output: "[-1,5,5,5,5]"
            },
            {
                input: "[1,1]",
                output: "[-1,-1]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "nextGreaterCircular",
        starter: {
            js: "function nextGreaterCircular(nums) {\n  // Next greater value, wrapping around; -1 if none.\n}\n",
            ts: "function nextGreaterCircular(nums: number[]): number[] {\n  // Next greater value, wrapping around; -1 if none.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        1
                    ]
                ],
                expected: [
                    2,
                    -1,
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
                    -1,
                    5,
                    5,
                    5,
                    5
                ]
            },
            {
                args: [
                    [
                        1,
                        1
                    ]
                ],
                expected: [
                    -1,
                    -1
                ]
            }
        ],
        hidden: [
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
                    -1
                ]
            },
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: [
                    2,
                    -1
                ]
            },
            {
                args: [
                    [
                        3,
                        8,
                        4,
                        1,
                        2
                    ]
                ],
                expected: [
                    8,
                    -1,
                    8,
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        2,
                        2,
                        2
                    ]
                ],
                expected: [
                    -1,
                    -1,
                    -1
                ]
            },
            {
                args: [
                    [
                        1,
                        3,
                        2
                    ]
                ],
                expected: [
                    3,
                    -1,
                    3
                ]
            }
        ],
        hints: [
            "Wrapping is handled by walking the array twice (indices 0..2n-1, using i % n).",
            "Keep the usual decreasing stack of unresolved indices.",
            "Only push indices during the first pass; the second pass just resolves leftovers."
        ],
        solutions: [
            {
                label: "Monotonic stack over two passes",
                approach: "Traverse 2n indices modulo n so every element sees the wrap-around.",
                js: "function nextGreaterCircular(nums) {\n  const n = nums.length;\n  const out = new Array(n).fill(-1);\n  const stack = [];\n  for (let i = 0; i < 2 * n; i++) {\n    const cur = nums[i % n];\n    while (stack.length && nums[stack[stack.length - 1]] < cur) {\n      out[stack.pop()] = cur;\n    }\n    if (i < n) stack.push(i);\n  }\n  return out;\n}\n",
                ts: "function nextGreaterCircular(nums: number[]): number[] {\n  const n = nums.length;\n  const out = new Array(n).fill(-1);\n  const stack: number[] = [];\n  for (let i = 0; i < 2 * n; i++) {\n    const cur = nums[i % n];\n    while (stack.length && nums[stack[stack.length - 1]] < cur) {\n      out[stack.pop() as number] = cur;\n    }\n    if (i < n) stack.push(i);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function nextGreaterCircular(nums) {\n  const n = nums.length;\n  // Keep -1 for values that have no greater element anywhere in the circle.\n  const out = new Array(n).fill(-1);\n  // Store unresolved original indices in decreasing-value order.\n  const stack = [];\n  // Two passes let each original index inspect values after the wrap-around.\n  for (let i = 0; i < 2 * n; i++) {\n    const currentValue = nums[i % n];\n    // The current value is the first greater value for every smaller stack top.\n    while (stack.length && nums[stack[stack.length - 1]] < currentValue) {\n      out[stack.pop()] = currentValue;\n    }\n    // Push each original index once; pass two only resolves leftovers.\n    if (i < n) stack.push(i);\n  }\n  return out;\n}\n",
                    ts: "function nextGreaterCircular(nums: number[]): number[] {\n  const n = nums.length;\n  // Keep -1 for values that have no greater element anywhere in the circle.\n  const out = new Array(n).fill(-1);\n  // Store unresolved original indices in decreasing-value order.\n  const stack: number[] = [];\n  // Two passes let each original index inspect values after the wrap-around.\n  for (let i = 0; i < 2 * n; i++) {\n    const currentValue = nums[i % n];\n    // The current value is the first greater value for every smaller stack top.\n    while (stack.length && nums[stack[stack.length - 1]] < currentValue) {\n      out[stack.pop() as number] = currentValue;\n    }\n    // Push each original index once; pass two only resolves leftovers.\n    if (i < n) stack.push(i);\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Brute force with wrap",
                approach: "For each index, probe the following n-1 positions modulo n.",
                js: "function nextGreaterCircular(nums) {\n  const n = nums.length;\n  const out = [];\n  for (let i = 0; i < n; i++) {\n    let found = -1;\n    for (let step = 1; step < n; step++) {\n      const v = nums[(i + step) % n];\n      if (v > nums[i]) { found = v; break; }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
                ts: "function nextGreaterCircular(nums: number[]): number[] {\n  const n = nums.length;\n  const out: number[] = [];\n  for (let i = 0; i < n; i++) {\n    let found = -1;\n    for (let step = 1; step < n; step++) {\n      const v = nums[(i + step) % n];\n      if (v > nums[i]) { found = v; break; }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function nextGreaterCircular(nums) {\n  const n = nums.length;\n  const out = [];\n  // Find one answer at a time.\n  for (let i = 0; i < n; i++) {\n    // Default to -1 unless a strictly greater value is encountered.\n    let found = -1;\n    // Check at most the other n - 1 positions in circular order.\n    for (let step = 1; step < n; step++) {\n      const candidate = nums[(i + step) % n];\n      if (candidate > nums[i]) {\n        // The first greater candidate is the next greater value.\n        found = candidate;\n        break;\n      }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
                    ts: "function nextGreaterCircular(nums: number[]): number[] {\n  const n = nums.length;\n  const out: number[] = [];\n  // Find one answer at a time.\n  for (let i = 0; i < n; i++) {\n    // Default to -1 unless a strictly greater value is encountered.\n    let found = -1;\n    // Check at most the other n - 1 positions in circular order.\n    for (let step = 1; step < n; step++) {\n      const candidate = nums[(i + step) % n];\n      if (candidate > nums[i]) {\n        // The first greater candidate is the next greater value.\n        found = candidate;\n        break;\n      }\n    }\n    out.push(found);\n  }\n  return out;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ms-asteroid-collision",
        slug: "asteroid-collision",
        title: "Asteroid Collision",
        difficulty: "medium",
        patternIds: P,
        statement: "Each value is an asteroid: positive moves right, negative moves left, and the magnitude is its size. When a right-mover meets a left-mover, the smaller one explodes; if equal, both explode. Return the asteroids that survive.",
        examples: [
            {
                input: "[5,10,-5]",
                output: "[5,10]"
            },
            {
                input: "[8,-8]",
                output: "[]"
            },
            {
                input: "[10,2,-5]",
                output: "[10]"
            }
        ],
        constraints: [
            "0 <= asteroids.length <= 10000",
            "no asteroid has size 0"
        ],
        functionName: "asteroidCollision",
        starter: {
            js: "function asteroidCollision(asteroids) {\n  // Surviving asteroids after all collisions.\n}\n",
            ts: "function asteroidCollision(asteroids: number[]): number[] {\n  // Surviving asteroids after all collisions.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        5,
                        10,
                        -5
                    ]
                ],
                expected: [
                    5,
                    10
                ]
            },
            {
                args: [
                    [
                        8,
                        -8
                    ]
                ],
                expected: []
            },
            {
                args: [
                    [
                        10,
                        2,
                        -5
                    ]
                ],
                expected: [
                    10
                ]
            }
        ],
        hidden: [
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
            },
            {
                args: [
                    [
                        -1
                    ]
                ],
                expected: [
                    -1
                ]
            },
            {
                args: [
                    [
                        -2,
                        -1,
                        1,
                        2
                    ]
                ],
                expected: [
                    -2,
                    -1,
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        1,
                        -2
                    ]
                ],
                expected: [
                    -2
                ]
            },
            {
                args: [
                    [
                        2,
                        -1,
                        -2
                    ]
                ],
                expected: []
            }
        ],
        hints: [
            "Only a right-mover on the stack can collide with an incoming left-mover.",
            "Pop while the stack top is a smaller right-mover; stop if it's larger; both die if equal.",
            "If nothing on the stack can stop it, the left-mover survives and gets pushed."
        ],
        solutions: [
            {
                label: "Stack of survivors",
                approach: "Resolve each incoming asteroid against the stack top.",
                js: "function asteroidCollision(asteroids) {\n  const stack = [];\n  for (const a of asteroids) {\n    let alive = true;\n    while (alive && a < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {\n      const top = stack[stack.length - 1];\n      if (top < -a) { stack.pop(); continue; }\n      if (top === -a) stack.pop();\n      alive = false;\n    }\n    if (alive) stack.push(a);\n  }\n  return stack;\n}\n",
                ts: "function asteroidCollision(asteroids: number[]): number[] {\n  const stack: number[] = [];\n  for (const a of asteroids) {\n    let alive = true;\n    while (alive && a < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {\n      const top = stack[stack.length - 1];\n      if (top < -a) { stack.pop(); continue; }\n      if (top === -a) stack.pop();\n      alive = false;\n    }\n    if (alive) stack.push(a);\n  }\n  return stack;\n}\n",
                commentedCode: {
                    js: "function asteroidCollision(asteroids) {\n  // The stack contains survivors seen so far, in their original order.\n  const stack = [];\n  for (const asteroid of asteroids) {\n    let alive = true;\n    // A collision is possible only when a right-mover meets this left-mover.\n    while (alive && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {\n      const rightMover = stack[stack.length - 1];\n      if (rightMover < -asteroid) {\n        // The smaller right-mover explodes; keep testing the incoming asteroid.\n        stack.pop();\n        continue;\n      }\n      // Equal sizes destroy the right-mover as well as the incoming asteroid.\n      if (rightMover === -asteroid) stack.pop();\n      // A larger or equal right-mover means the incoming asteroid is gone.\n      alive = false;\n    }\n    // Push asteroids that never collided or survived every collision.\n    if (alive) stack.push(asteroid);\n  }\n  return stack;\n}\n",
                    ts: "function asteroidCollision(asteroids: number[]): number[] {\n  // The stack contains survivors seen so far, in their original order.\n  const stack: number[] = [];\n  for (const asteroid of asteroids) {\n    let alive = true;\n    // A collision is possible only when a right-mover meets this left-mover.\n    while (alive && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {\n      const rightMover = stack[stack.length - 1];\n      if (rightMover < -asteroid) {\n        // The smaller right-mover explodes; keep testing the incoming asteroid.\n        stack.pop();\n        continue;\n      }\n      // Equal sizes destroy the right-mover as well as the incoming asteroid.\n      if (rightMover === -asteroid) stack.pop();\n      // A larger or equal right-mover means the incoming asteroid is gone.\n      alive = false;\n    }\n    // Push asteroids that never collided or survived every collision.\n    if (alive) stack.push(asteroid);\n  }\n  return stack;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Repeated scan",
                approach: "Repeatedly remove the first colliding adjacent pair until stable.",
                js: "function asteroidCollision(asteroids) {\n  let list = [...asteroids];\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (let i = 0; i + 1 < list.length; i++) {\n      const a = list[i], b = list[i + 1];\n      if (a > 0 && b < 0) {\n        if (a < -b) list.splice(i, 1);\n        else if (a > -b) list.splice(i + 1, 1);\n        else list.splice(i, 2);\n        changed = true;\n        break;\n      }\n    }\n  }\n  return list;\n}\n",
                ts: "function asteroidCollision(asteroids: number[]): number[] {\n  const list = [...asteroids];\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (let i = 0; i + 1 < list.length; i++) {\n      const a = list[i], b = list[i + 1];\n      if (a > 0 && b < 0) {\n        if (a < -b) list.splice(i, 1);\n        else if (a > -b) list.splice(i + 1, 1);\n        else list.splice(i, 2);\n        changed = true;\n        break;\n      }\n    }\n  }\n  return list;\n}\n",
                commentedCode: {
                    js: "function asteroidCollision(asteroids) {\n  // Mutate a copy so the caller's input remains unchanged.\n  let list = [...asteroids];\n  let changed = true;\n  // Repeat because removing one pair can create a new adjacent collision.\n  while (changed) {\n    changed = false;\n    for (let i = 0; i + 1 < list.length; i++) {\n      const left = list[i], right = list[i + 1];\n      // Only this direction pair moves toward one another.\n      if (left > 0 && right < 0) {\n        // Remove the smaller asteroid, or both when their sizes match.\n        if (left < -right) list.splice(i, 1);\n        else if (left > -right) list.splice(i + 1, 1);\n        else list.splice(i, 2);\n        changed = true;\n        // Restart because indices and neighboring pairs have changed.\n        break;\n      }\n    }\n  }\n  return list;\n}\n",
                    ts: "function asteroidCollision(asteroids: number[]): number[] {\n  // Mutate a copy so the caller's input remains unchanged.\n  const list = [...asteroids];\n  let changed = true;\n  // Repeat because removing one pair can create a new adjacent collision.\n  while (changed) {\n    changed = false;\n    for (let i = 0; i + 1 < list.length; i++) {\n      const left = list[i], right = list[i + 1];\n      // Only this direction pair moves toward one another.\n      if (left > 0 && right < 0) {\n        // Remove the smaller asteroid, or both when their sizes match.\n        if (left < -right) list.splice(i, 1);\n        else if (left > -right) list.splice(i + 1, 1);\n        else list.splice(i, 2);\n        changed = true;\n        // Restart because indices and neighboring pairs have changed.\n        break;\n      }\n    }\n  }\n  return list;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ms-largest-rectangle",
        slug: "largest-rectangle-histogram",
        title: "Largest Rectangle in Histogram",
        difficulty: "hard",
        patternIds: P,
        statement: "Each value is the height of a bar of width 1. Return the area of the largest rectangle that fits entirely inside the histogram.",
        examples: [
            {
                input: "[2,1,5,6,2,3]",
                output: "10"
            },
            {
                input: "[2,4]",
                output: "4"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= heights.length <= 10000",
            "heights[i] >= 0"
        ],
        functionName: "largestRectangle",
        starter: {
            js: "function largestRectangle(heights) {\n  // Largest rectangle area in the histogram.\n}\n",
            ts: "function largestRectangle(heights: number[]): number {\n  // Largest rectangle area in the histogram.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        1,
                        5,
                        6,
                        2,
                        3
                    ]
                ],
                expected: 10
            },
            {
                args: [
                    [
                        2,
                        4
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    []
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        1
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        5,
                        4,
                        1,
                        2
                    ]
                ],
                expected: 8
            },
            {
                args: [
                    [
                        2,
                        1,
                        2
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        3,
                        3,
                        3
                    ]
                ],
                expected: 9
            }
        ],
        hints: [
            "Each bar's rectangle extends left and right until it meets a shorter bar.",
            "A stack of increasing heights lets you pop a bar exactly when its right edge is found.",
            "Append a sentinel height of 0 so everything is flushed from the stack at the end."
        ],
        solutions: [
            {
                label: "Monotonic stack with sentinel",
                approach: "Pop a bar when a shorter one arrives; its width spans to that boundary.",
                js: "function largestRectangle(heights) {\n  const h = [...heights, 0];\n  const stack = [];\n  let best = 0;\n  for (let i = 0; i < h.length; i++) {\n    while (stack.length && h[stack[stack.length - 1]] >= h[i]) {\n      const height = h[stack.pop()];\n      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;\n      best = Math.max(best, height * width);\n    }\n    stack.push(i);\n  }\n  return best;\n}\n",
                ts: "function largestRectangle(heights: number[]): number {\n  const h = [...heights, 0];\n  const stack: number[] = [];\n  let best = 0;\n  for (let i = 0; i < h.length; i++) {\n    while (stack.length && h[stack[stack.length - 1]] >= h[i]) {\n      const height = h[stack.pop() as number];\n      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;\n      best = Math.max(best, height * width);\n    }\n    stack.push(i);\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function largestRectangle(heights) {\n  // A trailing zero forces every remaining bar to be evaluated.\n  const extended = [...heights, 0];\n  // Store indices whose heights increase from bottom to top.\n  const stack = [];\n  let best = 0;\n  for (let i = 0; i < extended.length; i++) {\n    // A shorter bar marks the exclusive right boundary for taller bars.\n    while (stack.length && extended[stack[stack.length - 1]] >= extended[i]) {\n      const height = extended[stack.pop()];\n      // The new top is the nearest strictly shorter bar on the left.\n      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;\n      best = Math.max(best, height * width);\n    }\n    // This index may extend until a shorter future bar appears.\n    stack.push(i);\n  }\n  return best;\n}\n",
                    ts: "function largestRectangle(heights: number[]): number {\n  // A trailing zero forces every remaining bar to be evaluated.\n  const extended = [...heights, 0];\n  // Store indices whose heights increase from bottom to top.\n  const stack: number[] = [];\n  let best = 0;\n  for (let i = 0; i < extended.length; i++) {\n    // A shorter bar marks the exclusive right boundary for taller bars.\n    while (stack.length && extended[stack[stack.length - 1]] >= extended[i]) {\n      const height = extended[stack.pop() as number];\n      // The new top is the nearest strictly shorter bar on the left.\n      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;\n      best = Math.max(best, height * width);\n    }\n    // This index may extend until a shorter future bar appears.\n    stack.push(i);\n  }\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Brute force",
                approach: "Expand every starting bar, tracking the minimum height so far.",
                js: "function largestRectangle(heights) {\n  let best = 0;\n  for (let i = 0; i < heights.length; i++) {\n    let minH = heights[i];\n    for (let j = i; j < heights.length; j++) {\n      minH = Math.min(minH, heights[j]);\n      best = Math.max(best, minH * (j - i + 1));\n    }\n  }\n  return best;\n}\n",
                ts: "function largestRectangle(heights: number[]): number {\n  let best = 0;\n  for (let i = 0; i < heights.length; i++) {\n    let minH = heights[i];\n    for (let j = i; j < heights.length; j++) {\n      minH = Math.min(minH, heights[j]);\n      best = Math.max(best, minH * (j - i + 1));\n    }\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function largestRectangle(heights) {\n  let best = 0;\n  // Treat every index as a possible left edge.\n  for (let left = 0; left < heights.length; left++) {\n    // The shortest bar limits the rectangle's height as it expands.\n    let minHeight = heights[left];\n    for (let right = left; right < heights.length; right++) {\n      minHeight = Math.min(minHeight, heights[right]);\n      const width = right - left + 1;\n      best = Math.max(best, minHeight * width);\n    }\n  }\n  return best;\n}\n",
                    ts: "function largestRectangle(heights: number[]): number {\n  let best = 0;\n  // Treat every index as a possible left edge.\n  for (let left = 0; left < heights.length; left++) {\n    // The shortest bar limits the rectangle's height as it expands.\n    let minHeight = heights[left];\n    for (let right = left; right < heights.length; right++) {\n      minHeight = Math.min(minHeight, heights[right]);\n      const width = right - left + 1;\n      best = Math.max(best, minHeight * width);\n    }\n  }\n  return best;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "ms-previous-smaller",
        slug: "previous-smaller-element",
        title: "Previous Smaller Element",
        difficulty: "medium",
        patternIds: P,
        statement: "For each value, return the nearest value to its left that is strictly smaller, or -1 if there is none.",
        examples: [
            {
                input: "[4,5,2,10,8]",
                output: "[-1,4,-1,2,2]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1,2,3]",
                output: "[-1,1,2]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "previousSmaller",
        starter: {
            js: "function previousSmaller(nums) {\n  // Nearest strictly smaller value to the left, or -1.\n}\n",
            ts: "function previousSmaller(nums: number[]): number[] {\n  // Nearest strictly smaller value to the left, or -1.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        4,
                        5,
                        2,
                        10,
                        8
                    ]
                ],
                expected: [
                    -1,
                    4,
                    -1,
                    2,
                    2
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
                    -1,
                    1,
                    2
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        3,
                        2,
                        1
                    ]
                ],
                expected: [
                    -1,
                    -1,
                    -1
                ]
            },
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: [
                    -1
                ]
            },
            {
                args: [
                    [
                        2,
                        2
                    ]
                ],
                expected: [
                    -1,
                    -1
                ]
            },
            {
                args: [
                    [
                        5,
                        1,
                        6,
                        2
                    ]
                ],
                expected: [
                    -1,
                    -1,
                    1,
                    1
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
                    -1,
                    -1,
                    -1
                ]
            },
            {
                args: [
                    [
                        10,
                        9,
                        8,
                        20
                    ]
                ],
                expected: [
                    -1,
                    -1,
                    -1,
                    8
                ]
            }
        ],
        hints: [
            "Keep a stack whose values increase from bottom to top.",
            "Before answering for index i, pop everything ≥ nums[i]; the remaining top is the answer.",
            "Then push nums[i] so it can answer for later elements."
        ],
        solutions: [
            {
                label: "Monotonic (increasing) stack",
                approach: "Pop values that can never be a previous-smaller answer.",
                js: "function previousSmaller(nums) {\n  const out = [];\n  const stack = [];\n  for (const v of nums) {\n    while (stack.length && stack[stack.length - 1] >= v) stack.pop();\n    out.push(stack.length ? stack[stack.length - 1] : -1);\n    stack.push(v);\n  }\n  return out;\n}\n",
                ts: "function previousSmaller(nums: number[]): number[] {\n  const out: number[] = [];\n  const stack: number[] = [];\n  for (const v of nums) {\n    while (stack.length && stack[stack.length - 1] >= v) stack.pop();\n    out.push(stack.length ? stack[stack.length - 1] : -1);\n    stack.push(v);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function previousSmaller(nums) {\n  const out = [];\n  // Keep useful values in strictly increasing order.\n  const stack = [];\n  for (const value of nums) {\n    // Larger or equal values cannot be this value's smaller predecessor.\n    while (stack.length && stack[stack.length - 1] >= value) stack.pop();\n    // The surviving top is the nearest smaller value because it was seen last.\n    out.push(stack.length ? stack[stack.length - 1] : -1);\n    // This value may become the previous-smaller answer for later values.\n    stack.push(value);\n  }\n  return out;\n}\n",
                    ts: "function previousSmaller(nums: number[]): number[] {\n  const out: number[] = [];\n  // Keep useful values in strictly increasing order.\n  const stack: number[] = [];\n  for (const value of nums) {\n    // Larger or equal values cannot be this value's smaller predecessor.\n    while (stack.length && stack[stack.length - 1] >= value) stack.pop();\n    // The surviving top is the nearest smaller value because it was seen last.\n    out.push(stack.length ? stack[stack.length - 1] : -1);\n    // This value may become the previous-smaller answer for later values.\n    stack.push(value);\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Brute force",
                approach: "Scan leftward from each index for the first smaller value.",
                js: "function previousSmaller(nums) {\n  const out = [];\n  for (let i = 0; i < nums.length; i++) {\n    let found = -1;\n    for (let j = i - 1; j >= 0; j--) {\n      if (nums[j] < nums[i]) { found = nums[j]; break; }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
                ts: "function previousSmaller(nums: number[]): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    let found = -1;\n    for (let j = i - 1; j >= 0; j--) {\n      if (nums[j] < nums[i]) { found = nums[j]; break; }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function previousSmaller(nums) {\n  const out = [];\n  // Resolve each position with an independent leftward search.\n  for (let i = 0; i < nums.length; i++) {\n    // Use -1 when nothing smaller exists to the left.\n    let found = -1;\n    for (let j = i - 1; j >= 0; j--) {\n      if (nums[j] < nums[i]) {\n        // Scanning backward makes the first match the nearest one.\n        found = nums[j];\n        break;\n      }\n    }\n    out.push(found);\n  }\n  return out;\n}\n",
                    ts: "function previousSmaller(nums: number[]): number[] {\n  const out: number[] = [];\n  // Resolve each position with an independent leftward search.\n  for (let i = 0; i < nums.length; i++) {\n    // Use -1 when nothing smaller exists to the left.\n    let found = -1;\n    for (let j = i - 1; j >= 0; j--) {\n      if (nums[j] < nums[i]) {\n        // Scanning backward makes the first match the nearest one.\n        found = nums[j];\n        break;\n      }\n    }\n    out.push(found);\n  }\n  return out;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ms-simplify-path",
        slug: "simplify-path",
        title: "Simplify Path",
        difficulty: "medium",
        patternIds: P,
        statement: "Given an absolute Unix-style path, return its canonical form: collapse repeated slashes, drop `.`, and let `..` step up one directory (never above the root).",
        examples: [
            {
                input: '"/a/./b/../c/"',
                output: '"/a/c"'
            },
            {
                input: '"/../"',
                output: '"/"'
            },
            {
                input: '"/home//foo/"',
                output: '"/home/foo"'
            }
        ],
        constraints: [
            "the path always starts with '/'"
        ],
        functionName: "simplifyPath",
        starter: {
            js: "function simplifyPath(path) {\n  // Canonical absolute path.\n}\n",
            ts: "function simplifyPath(path: string): string {\n  // Canonical absolute path.\n  return '/';\n}\n"
        },
        visible: [
            {
                args: [
                    "/a/./b/../c/"
                ],
                expected: "/a/c"
            },
            {
                args: [
                    "/../"
                ],
                expected: "/"
            },
            {
                args: [
                    "/home//foo/"
                ],
                expected: "/home/foo"
            }
        ],
        hidden: [
            {
                args: [
                    "/"
                ],
                expected: "/"
            },
            {
                args: [
                    "/a"
                ],
                expected: "/a"
            },
            {
                args: [
                    "/a/.."
                ],
                expected: "/"
            },
            {
                args: [
                    "/a/b/c/../.."
                ],
                expected: "/a"
            },
            {
                args: [
                    "/..."
                ],
                expected: "/..."
            },
            {
                args: [
                    "/a//b"
                ],
                expected: "/a/b"
            }
        ],
        hints: [
            "Split on '/' — empty pieces come from repeated slashes and can be skipped.",
            "'.' means stay; '..' pops the stack; anything else is a directory name to push.",
            "Join the stack with '/' and prefix a leading '/'."
        ],
        solutions: [
            {
                label: "Directory stack",
                approach: "Push names, pop on '..', ignore '.' and empty segments.",
                js: "function simplifyPath(path) {\n  const stack = [];\n  for (const part of path.split('/')) {\n    if (part === '' || part === '.') continue;\n    if (part === '..') stack.pop();\n    else stack.push(part);\n  }\n  return '/' + stack.join('/');\n}\n",
                ts: "function simplifyPath(path: string): string {\n  const stack: string[] = [];\n  for (const part of path.split('/')) {\n    if (part === '' || part === '.') continue;\n    if (part === '..') stack.pop();\n    else stack.push(part);\n  }\n  return '/' + stack.join('/');\n}\n",
                commentedCode: {
                    js: "function simplifyPath(path) {\n  // The stack represents directories on the canonical route from the root.\n  const stack = [];\n  for (const part of path.split('/')) {\n    // Empty segments come from repeated slashes; '.' stays in place.\n    if (part === '' || part === '.') continue;\n    // '..' removes one directory, while pop on an empty stack stays at root.\n    if (part === '..') stack.pop();\n    // Every other segment is a literal directory name.\n    else stack.push(part);\n  }\n  // Rejoin the retained directories beneath one leading slash.\n  return '/' + stack.join('/');\n}\n",
                    ts: "function simplifyPath(path: string): string {\n  // The stack represents directories on the canonical route from the root.\n  const stack: string[] = [];\n  for (const part of path.split('/')) {\n    // Empty segments come from repeated slashes; '.' stays in place.\n    if (part === '' || part === '.') continue;\n    // '..' removes one directory, while pop on an empty stack stays at root.\n    if (part === '..') stack.pop();\n    // Every other segment is a literal directory name.\n    else stack.push(part);\n  }\n  // Rejoin the retained directories beneath one leading slash.\n  return '/' + stack.join('/');\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Filter then fold",
                approach: "Drop empty and '.' segments first, then reduce with '..' handling.",
                js: "function simplifyPath(path) {\n  const parts = path.split('/').filter((p) => p !== '' && p !== '.');\n  const stack = parts.reduce((acc, p) => {\n    if (p === '..') acc.pop(); else acc.push(p);\n    return acc;\n  }, []);\n  return '/' + stack.join('/');\n}\n",
                ts: "function simplifyPath(path: string): string {\n  const parts = path.split('/').filter((p) => p !== '' && p !== '.');\n  const stack = parts.reduce<string[]>((acc, p) => {\n    if (p === '..') acc.pop(); else acc.push(p);\n    return acc;\n  }, []);\n  return '/' + stack.join('/');\n}\n",
                commentedCode: {
                    js: "function simplifyPath(path) {\n  // Remove separators with no name and segments that mean stay here.\n  const parts = path.split('/').filter((part) => part !== '' && part !== '.');\n  // Fold the remaining navigation commands into a directory stack.\n  const stack = parts.reduce((directories, part) => {\n    // Moving up removes the latest directory; a name moves down into it.\n    if (part === '..') directories.pop();\n    else directories.push(part);\n    return directories;\n  }, []);\n  return '/' + stack.join('/');\n}\n",
                    ts: "function simplifyPath(path: string): string {\n  // Remove separators with no name and segments that mean stay here.\n  const parts = path.split('/').filter((part) => part !== '' && part !== '.');\n  // Fold the remaining navigation commands into a directory stack.\n  const stack = parts.reduce<string[]>((directories, part) => {\n    // Moving up removes the latest directory; a name moves down into it.\n    if (part === '..') directories.pop();\n    else directories.push(part);\n    return directories;\n  }, []);\n  return '/' + stack.join('/');\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ms-decode-string",
        slug: "decode-string",
        title: "Decode String",
        difficulty: "medium",
        patternIds: P,
        statement: "Decode a string written with the rule `k[encoded]`, meaning the bracketed part repeats `k` times. Brackets may nest.",
        examples: [
            {
                input: '"3[a]2[bc]"',
                output: '"aaabcbc"'
            },
            {
                input: '"3[a2[c]]"',
                output: '"accaccacc"'
            },
            {
                input: '"a"',
                output: '"a"'
            }
        ],
        constraints: [
            "the input is always well formed",
            "counts are positive integers"
        ],
        functionName: "decodeString",
        starter: {
            js: "function decodeString(s) {\n  // Expand k[...] patterns, including nested ones.\n}\n",
            ts: "function decodeString(s: string): string {\n  // Expand k[...] patterns, including nested ones.\n  return '';\n}\n"
        },
        visible: [
            {
                args: [
                    "3[a]2[bc]"
                ],
                expected: "aaabcbc"
            },
            {
                args: [
                    "3[a2[c]]"
                ],
                expected: "accaccacc"
            },
            {
                args: [
                    "a"
                ],
                expected: "a"
            }
        ],
        hidden: [
            {
                args: [
                    ""
                ],
                expected: ""
            },
            {
                args: [
                    "2[a]"
                ],
                expected: "aa"
            },
            {
                args: [
                    "10[a]"
                ],
                expected: "aaaaaaaaaa"
            },
            {
                args: [
                    "2[ab]c"
                ],
                expected: "ababc"
            },
            {
                args: [
                    "1[x]"
                ],
                expected: "x"
            },
            {
                args: [
                    "2[2[b]]"
                ],
                expected: "bbbb"
            }
        ],
        hints: [
            "Nesting means you must remember an outer partial result while building an inner one.",
            "Push the current string and repeat count when you meet '['; restore them on ']'.",
            "Digits may be multi-digit — accumulate them before the bracket."
        ],
        solutions: [
            {
                label: "Two stacks",
                approach: "Stack the pending prefix and count at each '[', then combine at ']'.",
                js: "function decodeString(s) {\n  const counts = [];\n  const parts = [];\n  let cur = '', num = 0;\n  for (const ch of s) {\n    if (ch >= '0' && ch <= '9') num = num * 10 + Number(ch);\n    else if (ch === '[') { counts.push(num); parts.push(cur); num = 0; cur = ''; }\n    else if (ch === ']') { cur = parts.pop() + cur.repeat(counts.pop()); }\n    else cur += ch;\n  }\n  return cur;\n}\n",
                ts: "function decodeString(s: string): string {\n  const counts: number[] = [];\n  const parts: string[] = [];\n  let cur = '', num = 0;\n  for (const ch of s) {\n    if (ch >= '0' && ch <= '9') num = num * 10 + Number(ch);\n    else if (ch === '[') { counts.push(num); parts.push(cur); num = 0; cur = ''; }\n    else if (ch === ']') { cur = (parts.pop() as string) + cur.repeat(counts.pop() as number); }\n    else cur += ch;\n  }\n  return cur;\n}\n",
                commentedCode: {
                    js: "function decodeString(s) {\n  // Parallel stacks remember the repeat count and prefix for each nesting level.\n  const counts = [];\n  const prefixes = [];\n  let current = '';\n  let number = 0;\n  for (const char of s) {\n    // Build multi-digit repeat counts one digit at a time.\n    if (char >= '0' && char <= '9') number = number * 10 + Number(char);\n    else if (char === '[') {\n      // Save the outer context before decoding the bracketed substring.\n      counts.push(number);\n      prefixes.push(current);\n      number = 0;\n      current = '';\n    } else if (char === ']') {\n      // Complete this level and attach it to its saved outer prefix.\n      current = prefixes.pop() + current.repeat(counts.pop());\n    } else {\n      // Plain letters belong to the substring at the current nesting level.\n      current += char;\n    }\n  }\n  return current;\n}\n",
                    ts: "function decodeString(s: string): string {\n  // Parallel stacks remember the repeat count and prefix for each nesting level.\n  const counts: number[] = [];\n  const prefixes: string[] = [];\n  let current = '';\n  let number = 0;\n  for (const char of s) {\n    // Build multi-digit repeat counts one digit at a time.\n    if (char >= '0' && char <= '9') number = number * 10 + Number(char);\n    else if (char === '[') {\n      // Save the outer context before decoding the bracketed substring.\n      counts.push(number);\n      prefixes.push(current);\n      number = 0;\n      current = '';\n    } else if (char === ']') {\n      // Complete this level and attach it to its saved outer prefix.\n      current = (prefixes.pop() as string) + current.repeat(counts.pop() as number);\n    } else {\n      // Plain letters belong to the substring at the current nesting level.\n      current += char;\n    }\n  }\n  return current;\n}\n"
                },
                time: "O(output length)",
                space: "O(n)"
            },
            {
                label: "Single stack of frames",
                approach: "Keep one stack holding [prefix, count] frames.",
                js: "function decodeString(s) {\n  const stack = [];\n  let cur = '', num = 0;\n  for (const ch of s) {\n    if (ch >= '0' && ch <= '9') num = num * 10 + Number(ch);\n    else if (ch === '[') { stack.push([cur, num]); cur = ''; num = 0; }\n    else if (ch === ']') { const [prefix, k] = stack.pop(); cur = prefix + cur.repeat(k); }\n    else cur += ch;\n  }\n  return cur;\n}\n",
                ts: "function decodeString(s: string): string {\n  const stack: Array<[string, number]> = [];\n  let cur = '', num = 0;\n  for (const ch of s) {\n    if (ch >= '0' && ch <= '9') num = num * 10 + Number(ch);\n    else if (ch === '[') { stack.push([cur, num]); cur = ''; num = 0; }\n    else if (ch === ']') { const [prefix, k] = stack.pop() as [string, number]; cur = prefix + cur.repeat(k); }\n    else cur += ch;\n  }\n  return cur;\n}\n",
                commentedCode: {
                    js: "function decodeString(s) {\n  // Each frame stores the prefix and count for one open bracket.\n  const stack = [];\n  let current = '';\n  let number = 0;\n  for (const char of s) {\n    // Accumulate every digit so counts such as 12 are handled correctly.\n    if (char >= '0' && char <= '9') number = number * 10 + Number(char);\n    else if (char === '[') {\n      // Pause the outer string while the nested substring is decoded.\n      stack.push([current, number]);\n      current = '';\n      number = 0;\n    } else if (char === ']') {\n      // Close the latest frame, repeat its inner text, and restore its prefix.\n      const [prefix, repeatCount] = stack.pop();\n      current = prefix + current.repeat(repeatCount);\n    } else {\n      current += char;\n    }\n  }\n  return current;\n}\n",
                    ts: "function decodeString(s: string): string {\n  // Each frame stores the prefix and count for one open bracket.\n  const stack: Array<[string, number]> = [];\n  let current = '';\n  let number = 0;\n  for (const char of s) {\n    // Accumulate every digit so counts such as 12 are handled correctly.\n    if (char >= '0' && char <= '9') number = number * 10 + Number(char);\n    else if (char === '[') {\n      // Pause the outer string while the nested substring is decoded.\n      stack.push([current, number]);\n      current = '';\n      number = 0;\n    } else if (char === ']') {\n      // Close the latest frame, repeat its inner text, and restore its prefix.\n      const [prefix, repeatCount] = stack.pop() as [string, number];\n      current = prefix + current.repeat(repeatCount);\n    } else {\n      current += char;\n    }\n  }\n  return current;\n}\n"
                },
                time: "O(output length)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ms-trap-rain",
        slug: "trapping-rain-water",
        title: "Trapping Rain Water",
        difficulty: "hard",
        patternIds: P,
        statement: "Each value is the height of a bar of width 1. Return how many units of water are trapped between the bars after it rains.",
        examples: [
            {
                input: "[0,1,0,2,1,0,1,3,2,1,2,1]",
                output: "6"
            },
            {
                input: "[4,2,0,3,2,5]",
                output: "9"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= heights.length <= 10000",
            "heights[i] >= 0"
        ],
        functionName: "trapRain",
        starter: {
            js: "function trapRain(heights) {\n  // Units of trapped water.\n}\n",
            ts: "function trapRain(heights: number[]): number {\n  // Units of trapped water.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        0,
                        1,
                        0,
                        2,
                        1,
                        0,
                        1,
                        3,
                        2,
                        1,
                        2,
                        1
                    ]
                ],
                expected: 6
            },
            {
                args: [
                    [
                        4,
                        2,
                        0,
                        3,
                        2,
                        5
                    ]
                ],
                expected: 9
            },
            {
                args: [
                    []
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        2,
                        0,
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        3,
                        0,
                        0,
                        3
                    ]
                ],
                expected: 6
            },
            {
                args: [
                    [
                        5,
                        4,
                        1,
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        0,
                        0,
                        0
                    ]
                ],
                expected: 0
            }
        ],
        hints: [
            "Water above a bar is min(tallest to its left, tallest to its right) − its own height.",
            "Two pointers from the ends let you resolve the smaller side safely.",
            "Alternatively, a decreasing stack fills each basin as its right wall arrives."
        ],
        solutions: [
            {
                label: "Two pointers",
                approach: "Advance the side with the smaller wall, accumulating trapped water.",
                js: "function trapRain(heights) {\n  let lo = 0, hi = heights.length - 1;\n  let leftMax = 0, rightMax = 0, total = 0;\n  while (lo < hi) {\n    if (heights[lo] < heights[hi]) {\n      leftMax = Math.max(leftMax, heights[lo]);\n      total += leftMax - heights[lo];\n      lo++;\n    } else {\n      rightMax = Math.max(rightMax, heights[hi]);\n      total += rightMax - heights[hi];\n      hi--;\n    }\n  }\n  return total;\n}\n",
                ts: "function trapRain(heights: number[]): number {\n  let lo = 0, hi = heights.length - 1;\n  let leftMax = 0, rightMax = 0, total = 0;\n  while (lo < hi) {\n    if (heights[lo] < heights[hi]) {\n      leftMax = Math.max(leftMax, heights[lo]);\n      total += leftMax - heights[lo];\n      lo++;\n    } else {\n      rightMax = Math.max(rightMax, heights[hi]);\n      total += rightMax - heights[hi];\n      hi--;\n    }\n  }\n  return total;\n}\n",
                commentedCode: {
                    js: "function trapRain(heights) {\n  // Begin with one pointer at each boundary of the unprocessed region.\n  let left = 0, right = heights.length - 1;\n  let leftMax = 0, rightMax = 0, total = 0;\n  while (left < right) {\n    // The lower boundary is the side whose water level can be resolved now.\n    if (heights[left] < heights[right]) {\n      leftMax = Math.max(leftMax, heights[left]);\n      // The tallest left wall determines water above this position.\n      total += leftMax - heights[left];\n      left++;\n    } else {\n      rightMax = Math.max(rightMax, heights[right]);\n      // The tallest right wall determines water above this position.\n      total += rightMax - heights[right];\n      right--;\n    }\n  }\n  return total;\n}\n",
                    ts: "function trapRain(heights: number[]): number {\n  // Begin with one pointer at each boundary of the unprocessed region.\n  let left = 0, right = heights.length - 1;\n  let leftMax = 0, rightMax = 0, total = 0;\n  while (left < right) {\n    // The lower boundary is the side whose water level can be resolved now.\n    if (heights[left] < heights[right]) {\n      leftMax = Math.max(leftMax, heights[left]);\n      // The tallest left wall determines water above this position.\n      total += leftMax - heights[left];\n      left++;\n    } else {\n      rightMax = Math.max(rightMax, heights[right]);\n      // The tallest right wall determines water above this position.\n      total += rightMax - heights[right];\n      right--;\n    }\n  }\n  return total;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Prefix max arrays",
                approach: "Precompute the tallest bar to each side, then sum the differences.",
                js: "function trapRain(heights) {\n  const n = heights.length;\n  if (n === 0) return 0;\n  const left = new Array(n), right = new Array(n);\n  left[0] = heights[0];\n  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], heights[i]);\n  right[n - 1] = heights[n - 1];\n  for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], heights[i]);\n  let total = 0;\n  for (let i = 0; i < n; i++) total += Math.min(left[i], right[i]) - heights[i];\n  return total;\n}\n",
                ts: "function trapRain(heights: number[]): number {\n  const n = heights.length;\n  if (n === 0) return 0;\n  const left = new Array(n), right = new Array(n);\n  left[0] = heights[0];\n  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], heights[i]);\n  right[n - 1] = heights[n - 1];\n  for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], heights[i]);\n  let total = 0;\n  for (let i = 0; i < n; i++) total += Math.min(left[i], right[i]) - heights[i];\n  return total;\n}\n",
                commentedCode: {
                    js: "function trapRain(heights) {\n  const n = heights.length;\n  if (n === 0) return 0;\n  // left[i] and right[i] record the tallest walls at or beyond index i.\n  const left = new Array(n), right = new Array(n);\n  left[0] = heights[0];\n  // Build the tallest wall seen from the left for every position.\n  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], heights[i]);\n  right[n - 1] = heights[n - 1];\n  // Build the corresponding tallest wall seen from the right.\n  for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], heights[i]);\n  let total = 0;\n  for (let i = 0; i < n; i++) {\n    // Water is capped by the shorter boundary and sits above the current bar.\n    total += Math.min(left[i], right[i]) - heights[i];\n  }\n  return total;\n}\n",
                    ts: "function trapRain(heights: number[]): number {\n  const n = heights.length;\n  if (n === 0) return 0;\n  // left[i] and right[i] record the tallest walls at or beyond index i.\n  const left = new Array(n), right = new Array(n);\n  left[0] = heights[0];\n  // Build the tallest wall seen from the left for every position.\n  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], heights[i]);\n  right[n - 1] = heights[n - 1];\n  // Build the corresponding tallest wall seen from the right.\n  for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], heights[i]);\n  let total = 0;\n  for (let i = 0; i < n; i++) {\n    // Water is capped by the shorter boundary and sits above the current bar.\n    total += Math.min(left[i], right[i]) - heights[i];\n  }\n  return total;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    }
];
const monotonicStackProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const monotonicStackMcqs = [
    {
        id: "s4-ms-amortized",
        kind: "mcq",
        prompt: "In a monotonic-stack sweep, each element is pushed and popped at most once, so the total time is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "Even though there's an inner while-loop, the total pops are bounded by n."
    },
    {
        id: "s4-ms-use",
        kind: "mcq",
        prompt: "A monotonic stack is the natural tool for:",
        options: [
            "sorting a list in place",
            "next-greater / previous-smaller element queries",
            "binary search on sorted data",
            "computing a hash of a string"
        ],
        answerIndex: 1,
        explanation: "It keeps candidates ordered so each element's nearest larger/smaller neighbour pops out."
    }
];
const monotonicStackModule = {
    id: "m-pat-monotonic-stack",
    stageId: S,
    title: "Stack & Monotonic Stack",
    kind: "patternModule",
    summary: "Last-in-first-out bookkeeping — and the ordered stack that answers 'next greater' in one pass.",
    lessonSections: [
        {
            heading: "The stack as pending work",
            body: `A stack holds items whose fate isn't decided yet. Bracket matching, path simplification, and expression decoding all work because the **most recent** unresolved item is always the one that gets resolved first.

\`\`\`js
// '..' pops the last directory
const stack = [];
for (const part of "/a/b/../c".split('/')) {
  if (part === '' || part === '.') continue;
  if (part === '..') stack.pop(); else stack.push(part);
}
console.log('/' + stack.join('/')); // /a/c
\`\`\``
        },
        {
            heading: "Monotonic: keep the stack ordered",
            body: `A **monotonic stack** keeps its values sorted (increasing or decreasing). When a new element arrives, you pop everything it "beats" — and each pop resolves that element's answer. Since every index is pushed and popped at most once, the whole sweep is **O(n)** even though there's an inner loop.

\`\`\`js
// Next greater element to the right
function nextGreater(nums) {
  const out = new Array(nums.length).fill(-1);
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) out[stack.pop()] = nums[i];
    stack.push(i);
  }
  return out;
}
console.log(nextGreater([2, 1, 3])); // [3, 3, -1]
\`\`\``
        },
        {
            heading: "Recognition cues & pitfalls",
            body: `Reach for a stack when you see **nesting, matching, or undo**; reach for a *monotonic* stack when you need, for every element, the **nearest greater/smaller** value to one side — "days until warmer", "next greater", histogram rectangles, trapped rain water.

\`\`\`ts
// Monotonic template (decreasing stack of indices)
const stack: number[] = [];
for (let i = 0; i < arr.length; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    const j = stack.pop()!;   // arr[i] is j's "next greater"
  }
  stack.push(i);
}
\`\`\`

**Pitfalls:** choosing \`<\` vs \`<=\` decides how ties are handled; forgetting the **sentinel** (e.g. a trailing 0) leaves items stuck on the stack; storing values when you actually need **indices** (for widths/distances). Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "ms-final-prices",
    drillProblemIds: [
        "ms-final-prices",
        "ms-baseball-score",
        "ms-daily-temperatures",
        "ms-next-greater-circular",
        "ms-asteroid-collision",
        "ms-largest-rectangle"
    ],
    testPoolProblemIds: [
        "ms-previous-smaller",
        "ms-simplify-path",
        "ms-decode-string",
        "ms-trap-rain"
    ],
    complexityQuestionIds: [
        "s4-ms-amortized",
        "s4-ms-use"
    ],
    badgeId: "badge-pat-monotonic-stack",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage4/prefixSum.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prefixSumMcqs",
    ()=>prefixSumMcqs,
    "prefixSumModule",
    ()=>prefixSumModule,
    "prefixSumProblems",
    ()=>prefixSumProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s4";
const P = [
    "prefix-sum"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "ps-running-sum",
        slug: "running-sum",
        title: "Running Sum",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the running (prefix) sum: each position holds the sum of all values up to and including it.",
        examples: [
            {
                input: "[1,2,3]",
                output: "[1,3,6]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[5]",
                output: "[5]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "runningSum",
        starter: {
            js: "function runningSum(nums) {\n  // Prefix sums.\n}\n",
            ts: "function runningSum(nums: number[]): number[] {\n  // Prefix sums.\n  return [];\n}\n"
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
                expected: [
                    1,
                    3,
                    6
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
                        5
                    ]
                ],
                expected: [
                    5
                ]
            }
        ],
        hidden: [
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
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        2,
                        -2,
                        2
                    ]
                ],
                expected: [
                    2,
                    0,
                    2
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
                        10
                    ]
                ],
                expected: [
                    10
                ]
            },
            {
                args: [
                    [
                        -1,
                        -1
                    ]
                ],
                expected: [
                    -1,
                    -2
                ]
            },
            {
                args: [
                    [
                        3,
                        4,
                        5
                    ]
                ],
                expected: [
                    3,
                    7,
                    12
                ]
            }
        ],
        hints: [
            "Each output is the previous output plus the current value.",
            "Carry a running total and push it after adding each element.",
            "let sum = 0; for v: sum += v; out.push(sum)."
        ],
        walkthrough: [
            {
                title: "Track what the previous output means",
                body: "Each output position should equal the sum of the input values through that same position. Keep one running total for that accumulated sum."
            },
            {
                title: "Build a separate result",
                body: "Create an empty output array. As you read each number, add it to the running total and append the **new** total to the output."
            },
            {
                title: "Process left to right once",
                body: "A forward scan ensures that, before each append, the total contains exactly the prefix ending at the current value."
            },
            {
                title: "Return the built prefix list",
                body: "For an empty input, the loop never runs and the initially empty output is already correct."
            }
        ],
        solutions: [
            {
                label: "Running total",
                approach: "Accumulate and emit the total at each step.",
                js: "function runningSum(nums) {\n  const out = [];\n  let sum = 0;\n  for (const v of nums) { sum += v; out.push(sum); }\n  return out;\n}\n",
                ts: "function runningSum(nums: number[]): number[] {\n  const out: number[] = [];\n  let sum = 0;\n  for (const v of nums) { sum += v; out.push(sum); }\n  return out;\n}\n",
                commentedCode: {
                    js: "function runningSum(nums) {\n  // Collect one prefix sum for each input position.\n  const out = [];\n  // No input values have been included yet.\n  let sum = 0;\n\n  // Extend the current prefix one number at a time.\n  for (const v of nums) {\n    // Include the current value in this prefix.\n    sum += v;\n    // Record the sum ending at this position.\n    out.push(sum);\n  }\n\n  // Return every prefix sum in input order.\n  return out;\n}\n",
                    ts: "function runningSum(nums: number[]): number[] {\n  // Collect one prefix sum for each input position.\n  const out: number[] = [];\n  // No input values have been included yet.\n  let sum = 0;\n\n  // Extend the current prefix one number at a time.\n  for (const v of nums) {\n    // Include the current value in this prefix.\n    sum += v;\n    // Record the sum ending at this position.\n    out.push(sum);\n  }\n\n  // Return every prefix sum in input order.\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Map with carry",
                approach: "Carry the accumulated sum across a map.",
                js: "function runningSum(nums) {\n  let sum = 0;\n  return nums.map((v) => (sum += v));\n}\n",
                ts: "function runningSum(nums: number[]): number[] {\n  let sum = 0;\n  return nums.map((v) => (sum += v));\n}\n",
                commentedCode: {
                    js: "function runningSum(nums) {\n  // Carry the prefix total between map callbacks.\n  let sum = 0;\n  // Update and return the running total for every input value.\n  return nums.map((v) => (sum += v));\n}\n",
                    ts: "function runningSum(nums: number[]): number[] {\n  // Carry the prefix total between map callbacks.\n  let sum = 0;\n  // Update and return the running total for every input value.\n  return nums.map((v) => (sum += v));\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ps-range-sum-query",
        slug: "range-sum-query",
        title: "Range Sum Queries",
        difficulty: "easy",
        patternIds: P,
        statement: "Given a list and a list of `[l, r]` queries, return the inclusive sum of each subrange. Precompute a prefix-sum array so each query is O(1).",
        examples: [
            {
                input: "[1,2,3,4], [[0,1],[1,3]]",
                output: "[3,9]"
            },
            {
                input: "[5], [[0,0]]",
                output: "[5]"
            },
            {
                input: "[1,2,3], []",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000",
            "0 <= l <= r < nums.length"
        ],
        functionName: "rangeSums",
        starter: {
            js: "function rangeSums(nums, queries) {\n  // Inclusive sum for each [l, r].\n}\n",
            ts: "function rangeSums(nums: number[], queries: number[][]): number[] {\n  // Inclusive sum for each [l, r].\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            3
                        ]
                    ]
                ],
                expected: [
                    3,
                    9
                ]
            },
            {
                args: [
                    [
                        5
                    ],
                    [
                        [
                            0,
                            0
                        ]
                    ]
                ],
                expected: [
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
                    []
                ],
                expected: []
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    [
                        [
                            0,
                            4
                        ]
                    ]
                ],
                expected: [
                    15
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
                        [
                            0,
                            0
                        ],
                        [
                            2,
                            2
                        ]
                    ]
                ],
                expected: [
                    1,
                    3
                ]
            },
            {
                args: [
                    [
                        2,
                        4,
                        6
                    ],
                    [
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: [
                    10
                ]
            },
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
                        1,
                        1,
                        1
                    ],
                    [
                        [
                            0,
                            3
                        ],
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: [
                    4,
                    2
                ]
            },
            {
                args: [
                    [
                        -1,
                        -2,
                        -3
                    ],
                    [
                        [
                            0,
                            2
                        ]
                    ]
                ],
                expected: [
                    -6
                ]
            }
        ],
        hints: [
            "Build pre[i] = sum of the first i elements, so pre[0] = 0.",
            "The sum of [l, r] inclusive is pre[r+1] - pre[l].",
            "Precompute once in O(n), then answer every query in O(1)."
        ],
        walkthrough: [
            {
                title: "Precompute sums before answering",
                body: "There may be many ranges over the same list. Build one prefix array where `pre[i]` means the sum of the first `i` values, with a leading 0."
            },
            {
                title: "Translate an inclusive range",
                body: "For `[l, r]`, the prefix ending after `r` includes too much only by the sum before `l`. Subtract `pre[l]` from `pre[r + 1]`."
            },
            {
                title: "Apply the formula to every query",
                body: "Map each query to that difference. The precomputation is linear once; each query then uses two array reads and one subtraction."
            },
            {
                title: "Check boundary ranges",
                body: "The leading zero makes `l = 0` work naturally, and using `r + 1` keeps the right endpoint inclusive."
            }
        ],
        solutions: [
            {
                label: "Prefix array",
                approach: "Precompute cumulative sums, then difference per query.",
                js: "function rangeSums(nums, queries) {\n  const pre = [0];\n  for (let i = 0; i < nums.length; i++) pre.push(pre[i] + nums[i]);\n  return queries.map(([l, r]) => pre[r + 1] - pre[l]);\n}\n",
                ts: "function rangeSums(nums: number[], queries: number[][]): number[] {\n  const pre = [0];\n  for (let i = 0; i < nums.length; i++) pre.push(pre[i] + nums[i]);\n  return queries.map(([l, r]) => pre[r + 1] - pre[l]);\n}\n",
                commentedCode: {
                    js: "function rangeSums(nums, queries) {\n  // pre[i] will equal the sum of the first i input values.\n  const pre = [0];\n\n  // Extend the prefix array one input value at a time.\n  for (let i = 0; i < nums.length; i++) {\n    // Add the current value to the sum through the previous position.\n    pre.push(pre[i] + nums[i]);\n  }\n\n  // Convert each inclusive range into the difference of two prefixes.\n  return queries.map(([l, r]) => pre[r + 1] - pre[l]);\n}\n",
                    ts: "function rangeSums(nums: number[], queries: number[][]): number[] {\n  // pre[i] will equal the sum of the first i input values.\n  const pre: number[] = [0];\n\n  // Extend the prefix array one input value at a time.\n  for (let i = 0; i < nums.length; i++) {\n    // Add the current value to the sum through the previous position.\n    pre.push(pre[i] + nums[i]);\n  }\n\n  // Convert each inclusive range into the difference of two prefixes.\n  return queries.map(([l, r]) => pre[r + 1] - pre[l]);\n}\n"
                },
                time: "O(n + q)",
                space: "O(n)"
            },
            {
                label: "Sum per query",
                approach: "Sum each subrange directly — simpler but O(n) per query.",
                js: "function rangeSums(nums, queries) {\n  return queries.map(([l, r]) => {\n    let s = 0;\n    for (let i = l; i <= r; i++) s += nums[i];\n    return s;\n  });\n}\n",
                ts: "function rangeSums(nums: number[], queries: number[][]): number[] {\n  return queries.map(([l, r]) => {\n    let s = 0;\n    for (let i = l; i <= r; i++) s += nums[i];\n    return s;\n  });\n}\n",
                commentedCode: {
                    js: "function rangeSums(nums, queries) {\n  // Produce one direct sum for every requested range.\n  return queries.map(([l, r]) => {\n    // Start this range with no values included.\n    let s = 0;\n    // Visit each index in the inclusive query range.\n    for (let i = l; i <= r; i++) {\n      // Add this range element to its query total.\n      s += nums[i];\n    }\n    // Return the completed total for this one query.\n    return s;\n  });\n}\n",
                    ts: "function rangeSums(nums: number[], queries: number[][]): number[] {\n  // Produce one direct sum for every requested range.\n  return queries.map(([l, r]) => {\n    // Start this range with no values included.\n    let s = 0;\n    // Visit each index in the inclusive query range.\n    for (let i = l; i <= r; i++) {\n      // Add this range element to its query total.\n      s += nums[i];\n    }\n    // Return the completed total for this one query.\n    return s;\n  });\n}\n"
                },
                time: "O(n·q)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "ps-pivot-index",
        slug: "pivot-index",
        title: "Pivot Index",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the leftmost index where the sum of the values to its left equals the sum to its right, or -1. An empty side sums to 0.",
        examples: [
            {
                input: "[1,7,3,6,5,6]",
                output: "3"
            },
            {
                input: "[1,2,3]",
                output: "-1"
            },
            {
                input: "[2,1,-1]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "pivotIndex",
        starter: {
            js: "function pivotIndex(nums) {\n  // Leftmost balancing index, or -1.\n}\n",
            ts: "function pivotIndex(nums: number[]): number {\n  // Leftmost balancing index, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        7,
                        3,
                        6,
                        5,
                        6
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        2,
                        1,
                        -1
                    ]
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: -1
            },
            {
                args: [
                    [
                        5
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        0,
                        0,
                        0,
                        0
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        -1,
                        -1,
                        0,
                        0,
                        -1,
                        -1
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        3,
                        2,
                        1
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        8,
                        8
                    ]
                ],
                expected: -1
            }
        ],
        hints: [
            "The right sum equals total - left - current, once you know the total.",
            "Sweep left to right maintaining the left sum; compare against the derived right sum.",
            "total = sum(nums); left = 0; for i: if left === total - left - nums[i] return i; left += nums[i]."
        ],
        walkthrough: [
            {
                title: "Express one side in terms of the whole",
                body: "At index `i`, the values split into left side, current value, and right side. Once you know the total, the right sum is `total - left - current`."
            },
            {
                title: "Calculate the total first",
                body: "Make one pass to add every number. Then the later scan does not need to repeatedly recompute a suffix sum."
            },
            {
                title: "Maintain the left-side invariant",
                body: "Before checking an index, `left` must mean the sum of values strictly before it. Compare `left` with the derived right sum, then add the current value before moving on."
            },
            {
                title: "Return the first balance",
                body: "Scanning left to right means the first equality is the leftmost pivot. If none match, return `-1`."
            }
        ],
        solutions: [
            {
                label: "Total minus prefix",
                approach: "Derive the right sum from the total and running left sum.",
                js: "function pivotIndex(nums) {\n  let total = 0;\n  for (const v of nums) total += v;\n  let left = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (left === total - left - nums[i]) return i;\n    left += nums[i];\n  }\n  return -1;\n}\n",
                ts: "function pivotIndex(nums: number[]): number {\n  let total = 0;\n  for (const v of nums) total += v;\n  let left = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (left === total - left - nums[i]) return i;\n    left += nums[i];\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function pivotIndex(nums) {\n  // First find the sum of every value in the array.\n  let total = 0;\n  for (const v of nums) {\n    total += v;\n  }\n\n  // Before each check, left is the sum strictly before the current index.\n  let left = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // Remove the left side and current value from total to get the right side.\n    if (left === total - left - nums[i]) {\n      return i;\n    }\n    // Include this value in the left side for the next index.\n    left += nums[i];\n  }\n\n  // No index split the array into equal left and right sums.\n  return -1;\n}\n",
                    ts: "function pivotIndex(nums: number[]): number {\n  // First find the sum of every value in the array.\n  let total = 0;\n  for (const v of nums) {\n    total += v;\n  }\n\n  // Before each check, left is the sum strictly before the current index.\n  let left = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // Remove the left side and current value from total to get the right side.\n    if (left === total - left - nums[i]) {\n      return i;\n    }\n    // Include this value in the left side for the next index.\n    left += nums[i];\n  }\n\n  // No index split the array into equal left and right sums.\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Prefix and suffix arrays",
                approach: "Precompute left and right sums, then scan for equality.",
                js: "function pivotIndex(nums) {\n  const n = nums.length;\n  const pre = [0];\n  for (let i = 0; i < n; i++) pre.push(pre[i] + nums[i]);\n  for (let i = 0; i < n; i++) {\n    const left = pre[i];\n    const right = pre[n] - pre[i + 1];\n    if (left === right) return i;\n  }\n  return -1;\n}\n",
                ts: "function pivotIndex(nums: number[]): number {\n  const n = nums.length;\n  const pre = [0];\n  for (let i = 0; i < n; i++) pre.push(pre[i] + nums[i]);\n  for (let i = 0; i < n; i++) {\n    const left = pre[i];\n    const right = pre[n] - pre[i + 1];\n    if (left === right) return i;\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function pivotIndex(nums) {\n  // Keep the length to address the final prefix sum.\n  const n = nums.length;\n  // pre[i] is the sum of values before index i.\n  const pre = [0];\n  for (let i = 0; i < n; i++) {\n    // Extend the prefix by the value at this index.\n    pre.push(pre[i] + nums[i]);\n  }\n\n  // Test every possible pivot from left to right.\n  for (let i = 0; i < n; i++) {\n    // Values before i make up the left side.\n    const left = pre[i];\n    // Values after i are the whole sum minus the prefix through i.\n    const right = pre[n] - pre[i + 1];\n    if (left === right) {\n      return i;\n    }\n  }\n\n  // No pivot had equal side sums.\n  return -1;\n}\n",
                    ts: "function pivotIndex(nums: number[]): number {\n  // Keep the length to address the final prefix sum.\n  const n = nums.length;\n  // pre[i] is the sum of values before index i.\n  const pre: number[] = [0];\n  for (let i = 0; i < n; i++) {\n    // Extend the prefix by the value at this index.\n    pre.push(pre[i] + nums[i]);\n  }\n\n  // Test every possible pivot from left to right.\n  for (let i = 0; i < n; i++) {\n    // Values before i make up the left side.\n    const left = pre[i];\n    // Values after i are the whole sum minus the prefix through i.\n    const right = pre[n] - pre[i + 1];\n    if (left === right) {\n      return i;\n    }\n  }\n\n  // No pivot had equal side sums.\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ps-min-start-value",
        slug: "min-start-value",
        title: "Minimum Start Value",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the smallest positive integer `start` such that the running total of `start` plus the prefix sums is never less than 1.",
        examples: [
            {
                input: "[-3,2,-3,4,2]",
                output: "5"
            },
            {
                input: "[1,2]",
                output: "1"
            },
            {
                input: "[1,-2,-3]",
                output: "5"
            }
        ],
        constraints: [
            "1 <= nums.length <= 10000"
        ],
        functionName: "minStartValue",
        starter: {
            js: "function minStartValue(nums) {\n  // Smallest positive start keeping the running total >= 1.\n}\n",
            ts: "function minStartValue(nums: number[]): number {\n  // Smallest positive start keeping the running total >= 1.\n  return 1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        -3,
                        2,
                        -3,
                        4,
                        2
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        -2,
                        -3
                    ]
                ],
                expected: 5
            }
        ],
        hidden: [
            {
                args: [
                    [
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        -1
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        -5,
                        5
                    ]
                ],
                expected: 6
            },
            {
                args: [
                    [
                        3,
                        -3,
                        3,
                        -3
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        -2,
                        -2,
                        -2
                    ]
                ],
                expected: 7
            }
        ],
        hints: [
            "Track the lowest running prefix sum (starting from 0).",
            "You need start + minPrefix >= 1, so start >= 1 - minPrefix.",
            "return Math.max(1, 1 - minPrefix)."
        ],
        solutions: [
            {
                label: "Track the minimum prefix",
                approach: "Find the deepest dip of the prefix sums and offset it to 1.",
                js: "function minStartValue(nums) {\n  let sum = 0, min = 0;\n  for (const v of nums) { sum += v; if (sum < min) min = sum; }\n  return Math.max(1, 1 - min);\n}\n",
                ts: "function minStartValue(nums: number[]): number {\n  let sum = 0, min = 0;\n  for (const v of nums) { sum += v; if (sum < min) min = sum; }\n  return Math.max(1, 1 - min);\n}\n",
                commentedCode: {
                    js: "function minStartValue(nums) {\n  // sum is the prefix total after the values processed so far.\n  let sum = 0;\n  // Include the empty prefix, whose sum is zero, as the initial minimum.\n  let min = 0;\n\n  // Find the lowest point reached by any prefix of the array.\n  for (const v of nums) {\n    // Extend the running prefix with the current value.\n    sum += v;\n    // Remember the deepest dip that the starting value must offset.\n    if (sum < min) {\n      min = sum;\n    }\n  }\n\n  // Offset the minimum prefix up to 1, while keeping the start positive.\n  return Math.max(1, 1 - min);\n}\n",
                    ts: "function minStartValue(nums: number[]): number {\n  // sum is the prefix total after the values processed so far.\n  let sum = 0;\n  // Include the empty prefix, whose sum is zero, as the initial minimum.\n  let min = 0;\n\n  // Find the lowest point reached by any prefix of the array.\n  for (const v of nums) {\n    // Extend the running prefix with the current value.\n    sum += v;\n    // Remember the deepest dip that the starting value must offset.\n    if (sum < min) {\n      min = sum;\n    }\n  }\n\n  // Offset the minimum prefix up to 1, while keeping the start positive.\n  return Math.max(1, 1 - min);\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Try increasing starts",
                approach: "Test start = 1, 2, … until the running total stays positive.",
                js: "function minStartValue(nums) {\n  for (let start = 1; ; start++) {\n    let sum = start, ok = true;\n    for (const v of nums) { sum += v; if (sum < 1) { ok = false; break; } }\n    if (ok) return start;\n  }\n}\n",
                ts: "function minStartValue(nums: number[]): number {\n  for (let start = 1; ; start++) {\n    let sum = start, ok = true;\n    for (const v of nums) { sum += v; if (sum < 1) { ok = false; break; } }\n    if (ok) return start;\n  }\n}\n",
                commentedCode: {
                    js: "function minStartValue(nums) {\n  // Try positive starting values in increasing order so the first success is minimal.\n  for (let start = 1; ; start++) {\n    // Begin this simulation at the candidate value and assume it will work.\n    let sum = start;\n    let ok = true;\n\n    // Apply every array value in order to test every running total.\n    for (const v of nums) {\n      sum += v;\n      // This candidate fails as soon as its running total falls below 1.\n      if (sum < 1) {\n        ok = false;\n        break;\n      }\n    }\n\n    // Increasing order guarantees this successful candidate is the answer.\n    if (ok) {\n      return start;\n    }\n  }\n}\n",
                    ts: "function minStartValue(nums: number[]): number {\n  // Try positive starting values in increasing order so the first success is minimal.\n  for (let start = 1; ; start++) {\n    // Begin this simulation at the candidate value and assume it will work.\n    let sum = start;\n    let ok = true;\n\n    // Apply every array value in order to test every running total.\n    for (const v of nums) {\n      sum += v;\n      // This candidate fails as soon as its running total falls below 1.\n      if (sum < 1) {\n        ok = false;\n        break;\n      }\n    }\n\n    // Increasing order guarantees this successful candidate is the answer.\n    if (ok) {\n      return start;\n    }\n  }\n}\n"
                },
                time: "O(n · answer)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "ps-count-subarrays-k",
        slug: "subarray-sum-equals-k",
        title: "Subarray Sum Equals K",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the number of contiguous subarrays whose values sum to exactly `k`.",
        examples: [
            {
                input: "[1,1,1], 2",
                output: "2"
            },
            {
                input: "[1,2,3], 3",
                output: "2"
            },
            {
                input: "[], 0",
                output: "0"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000",
            "count non-empty subarrays"
        ],
        functionName: "countSubarraysSumK",
        starter: {
            js: "function countSubarraysSumK(nums, k) {\n  // Number of subarrays summing to k.\n}\n",
            ts: "function countSubarraysSumK(nums: number[], k: number): number {\n  // Number of subarrays summing to k.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        1,
                        1
                    ],
                    2
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
                    3
                ],
                expected: 2
            },
            {
                args: [
                    [],
                    0
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        -1,
                        0
                    ],
                    0
                ],
                expected: 3
            },
            {
                args: [
                    [
                        3,
                        4,
                        7,
                        2,
                        -3,
                        1,
                        4,
                        2
                    ],
                    7
                ],
                expected: 4
            },
            {
                args: [
                    [
                        0,
                        0,
                        0
                    ],
                    0
                ],
                expected: 6
            },
            {
                args: [
                    [
                        1
                    ],
                    1
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1
                    ],
                    2
                ],
                expected: 0
            },
            {
                args: [
                    [
                        -1,
                        -1,
                        1
                    ],
                    0
                ],
                expected: 1
            }
        ],
        hints: [
            "A subarray sum is a difference of two prefix sums: pre[j] - pre[i] = k.",
            "As you scan, count how many earlier prefix sums equal (current prefix - k).",
            "map{0:1}; running += x; count += map[running - k]; map[running]++."
        ],
        solutions: [
            {
                label: "Prefix sum + hash map",
                approach: "Count earlier prefixes that make the current window sum to k.",
                js: "function countSubarraysSumK(nums, k) {\n  const seen = new Map([[0, 1]]);\n  let running = 0, count = 0;\n  for (const x of nums) {\n    running += x;\n    count += seen.get(running - k) || 0;\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n  return count;\n}\n",
                ts: "function countSubarraysSumK(nums: number[], k: number): number {\n  const seen = new Map<number, number>([[0, 1]]);\n  let running = 0, count = 0;\n  for (const x of nums) {\n    running += x;\n    count += seen.get(running - k) || 0;\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countSubarraysSumK(nums, k) {\n  // The empty prefix occurs once, allowing a prefix that itself sums to k.\n  const seen = new Map([[0, 1]]);\n  // Track the current prefix sum and the number of matching subarrays.\n  let running = 0;\n  let count = 0;\n\n  for (const x of nums) {\n    // Extend the prefix through the current value.\n    running += x;\n    // If an earlier prefix was running - k, the values after it sum to k.\n    count += seen.get(running - k) || 0;\n    // Store this prefix for subarrays that may end at a later position.\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n\n  // Return the number of non-empty subarrays with the target sum.\n  return count;\n}\n",
                    ts: "function countSubarraysSumK(nums: number[], k: number): number {\n  // The empty prefix occurs once, allowing a prefix that itself sums to k.\n  const seen = new Map<number, number>([[0, 1]]);\n  // Track the current prefix sum and the number of matching subarrays.\n  let running = 0;\n  let count = 0;\n\n  for (const x of nums) {\n    // Extend the prefix through the current value.\n    running += x;\n    // If an earlier prefix was running - k, the values after it sum to k.\n    count += seen.get(running - k) || 0;\n    // Store this prefix for subarrays that may end at a later position.\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n\n  // Return the number of non-empty subarrays with the target sum.\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Brute force",
                approach: "Sum every subarray directly.",
                js: "function countSubarraysSumK(nums, k) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) { sum += nums[j]; if (sum === k) count++; }\n  }\n  return count;\n}\n",
                ts: "function countSubarraysSumK(nums: number[], k: number): number {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) { sum += nums[j]; if (sum === k) count++; }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countSubarraysSumK(nums, k) {\n  // Count every contiguous range whose accumulated value reaches k.\n  let count = 0;\n\n  // Choose each index as the start of a subarray.\n  for (let i = 0; i < nums.length; i++) {\n    // Reset the sum for ranges that begin at i.\n    let sum = 0;\n    // Extend the range one ending position at a time.\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      // The current range nums[i..j] is one valid answer when its sum is k.\n      if (sum === k) {\n        count++;\n      }\n    }\n  }\n\n  return count;\n}\n",
                    ts: "function countSubarraysSumK(nums: number[], k: number): number {\n  // Count every contiguous range whose accumulated value reaches k.\n  let count = 0;\n\n  // Choose each index as the start of a subarray.\n  for (let i = 0; i < nums.length; i++) {\n    // Reset the sum for ranges that begin at i.\n    let sum = 0;\n    // Extend the range one ending position at a time.\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      // The current range nums[i..j] is one valid answer when its sum is k.\n      if (sum === k) {\n        count++;\n      }\n    }\n  }\n\n  return count;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "ps-product-except-self",
        slug: "product-except-self",
        title: "Product Except Self",
        difficulty: "hard",
        patternIds: P,
        statement: "Return an array where each position holds the product of every other value (no division).",
        examples: [
            {
                input: "[1,2,3,4]",
                output: "[24,12,8,6]"
            },
            {
                input: "[2,3]",
                output: "[3,2]"
            },
            {
                input: "[0,1]",
                output: "[1,0]"
            }
        ],
        constraints: [
            "1 <= nums.length <= 10000",
            "answer fits in a safe integer"
        ],
        functionName: "productExceptSelf",
        starter: {
            js: "function productExceptSelf(nums) {\n  // Product of all other elements — no division.\n}\n",
            ts: "function productExceptSelf(nums: number[]): number[] {\n  // Product of all other elements — no division.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ]
                ],
                expected: [
                    24,
                    12,
                    8,
                    6
                ]
            },
            {
                args: [
                    [
                        2,
                        3
                    ]
                ],
                expected: [
                    3,
                    2
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
                    1,
                    0
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
                    6,
                    3,
                    2
                ]
            },
            {
                args: [
                    [
                        0,
                        0
                    ]
                ],
                expected: [
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        5
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
                        2,
                        2
                    ]
                ],
                expected: [
                    4,
                    4,
                    4
                ]
            },
            {
                args: [
                    [
                        -1,
                        1,
                        2
                    ]
                ],
                expected: [
                    2,
                    -2,
                    -1
                ]
            },
            {
                args: [
                    [
                        3,
                        0,
                        2
                    ]
                ],
                expected: [
                    0,
                    6,
                    0
                ]
            }
        ],
        hints: [
            "The answer at i is (product of everything to the left) × (product to the right).",
            "One pass builds left products; a second pass multiplies in the right products.",
            "prefix in a left-to-right pass, then multiply by a running suffix product right-to-left."
        ],
        solutions: [
            {
                label: "Prefix × suffix",
                approach: "Combine a left-product pass with a right-product pass.",
                js: "function productExceptSelf(nums) {\n  const n = nums.length;\n  const out = new Array(n).fill(1);\n  let left = 1;\n  for (let i = 0; i < n; i++) { out[i] = left; left *= nums[i]; }\n  let right = 1;\n  for (let i = n - 1; i >= 0; i--) { out[i] *= right; right *= nums[i]; }\n  return out;\n}\n",
                ts: "function productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  const out = new Array(n).fill(1);\n  let left = 1;\n  for (let i = 0; i < n; i++) { out[i] = left; left *= nums[i]; }\n  let right = 1;\n  for (let i = n - 1; i >= 0; i--) { out[i] *= right; right *= nums[i]; }\n  return out;\n}\n",
                commentedCode: {
                    js: "function productExceptSelf(nums) {\n  const n = nums.length;\n  // out will first hold left-side products, then the completed answers.\n  const out = new Array(n).fill(1);\n\n  // left is the product of all values strictly before index i.\n  let left = 1;\n  for (let i = 0; i < n; i++) {\n    // Save the product to the left of the current position.\n    out[i] = left;\n    // Include nums[i] before moving to the next position.\n    left *= nums[i];\n  }\n\n  // right is the product of all values strictly after index i.\n  let right = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    // Left product times right product excludes exactly nums[i].\n    out[i] *= right;\n    // Include nums[i] before moving one position left.\n    right *= nums[i];\n  }\n\n  return out;\n}\n",
                    ts: "function productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  // out will first hold left-side products, then the completed answers.\n  const out: number[] = new Array(n).fill(1);\n\n  // left is the product of all values strictly before index i.\n  let left = 1;\n  for (let i = 0; i < n; i++) {\n    // Save the product to the left of the current position.\n    out[i] = left;\n    // Include nums[i] before moving to the next position.\n    left *= nums[i];\n  }\n\n  // right is the product of all values strictly after index i.\n  let right = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    // Left product times right product excludes exactly nums[i].\n    out[i] *= right;\n    // Include nums[i] before moving one position left.\n    right *= nums[i];\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Two product arrays",
                approach: "Build explicit prefix and suffix product arrays, then multiply.",
                js: "function productExceptSelf(nums) {\n  const n = nums.length;\n  const pre = new Array(n).fill(1);\n  const suf = new Array(n).fill(1);\n  for (let i = 1; i < n; i++) pre[i] = pre[i - 1] * nums[i - 1];\n  for (let i = n - 2; i >= 0; i--) suf[i] = suf[i + 1] * nums[i + 1];\n  return pre.map((v, i) => v * suf[i]);\n}\n",
                ts: "function productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  const pre = new Array(n).fill(1);\n  const suf = new Array(n).fill(1);\n  for (let i = 1; i < n; i++) pre[i] = pre[i - 1] * nums[i - 1];\n  for (let i = n - 2; i >= 0; i--) suf[i] = suf[i + 1] * nums[i + 1];\n  return pre.map((v, i) => v * suf[i]);\n}\n",
                commentedCode: {
                    js: "function productExceptSelf(nums) {\n  const n = nums.length;\n  // pre[i] will be the product strictly to the left of i.\n  const pre = new Array(n).fill(1);\n  // suf[i] will be the product strictly to the right of i.\n  const suf = new Array(n).fill(1);\n\n  // Build left products; index 0 keeps the empty-product identity of 1.\n  for (let i = 1; i < n; i++) {\n    pre[i] = pre[i - 1] * nums[i - 1];\n  }\n\n  // Build right products; the final index also keeps the identity of 1.\n  for (let i = n - 2; i >= 0; i--) {\n    suf[i] = suf[i + 1] * nums[i + 1];\n  }\n\n  // Multiplying both sides includes every value except the one at i.\n  return pre.map((leftProduct, i) => leftProduct * suf[i]);\n}\n",
                    ts: "function productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  // pre[i] will be the product strictly to the left of i.\n  const pre: number[] = new Array(n).fill(1);\n  // suf[i] will be the product strictly to the right of i.\n  const suf: number[] = new Array(n).fill(1);\n\n  // Build left products; index 0 keeps the empty-product identity of 1.\n  for (let i = 1; i < n; i++) {\n    pre[i] = pre[i - 1] * nums[i - 1];\n  }\n\n  // Build right products; the final index also keeps the identity of 1.\n  for (let i = n - 2; i >= 0; i--) {\n    suf[i] = suf[i + 1] * nums[i + 1];\n  }\n\n  // Multiplying both sides includes every value except the one at i.\n  return pre.map((leftProduct, i) => leftProduct * suf[i]);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "ps-prefix-max",
        slug: "prefix-max",
        title: "Prefix Maximum",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the running maximum: each position holds the largest value seen so far.",
        examples: [
            {
                input: "[1,3,2,5]",
                output: "[1,3,3,5]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[5]",
                output: "[5]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "prefixMax",
        starter: {
            js: "function prefixMax(nums) {\n  // Running maximum.\n}\n",
            ts: "function prefixMax(nums: number[]): number[] {\n  // Running maximum.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        3,
                        2,
                        5
                    ]
                ],
                expected: [
                    1,
                    3,
                    3,
                    5
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
                        5
                    ]
                ],
                expected: [
                    5
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        3,
                        1,
                        2
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
                        -1,
                        -2
                    ]
                ],
                expected: [
                    -1,
                    -1
                ]
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
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    [
                        5,
                        5,
                        4
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
                        -3,
                        -1,
                        -2
                    ]
                ],
                expected: [
                    -3,
                    -1,
                    -1
                ]
            }
        ],
        hints: [
            "Keep the best value seen and record it at each step.",
            "best = max(best, current); push best.",
            "Start best at the first element (or handle the empty case)."
        ],
        solutions: [
            {
                label: "Running max",
                approach: "Track and emit the maximum so far.",
                js: "function prefixMax(nums) {\n  const out = [];\n  let best = -Infinity;\n  for (const v of nums) { best = Math.max(best, v); out.push(best); }\n  return out;\n}\n",
                ts: "function prefixMax(nums: number[]): number[] {\n  const out: number[] = [];\n  let best = -Infinity;\n  for (const v of nums) { best = Math.max(best, v); out.push(best); }\n  return out;\n}\n",
                commentedCode: {
                    js: "function prefixMax(nums) {\n  // Store the maximum for every prefix in input order.\n  const out = [];\n  // Negative infinity lets the first real value become the first maximum.\n  let best = -Infinity;\n\n  for (const v of nums) {\n    // Keep the larger of the previous prefix maximum and the current value.\n    best = Math.max(best, v);\n    // Record the maximum for the prefix ending at this position.\n    out.push(best);\n  }\n\n  return out;\n}\n",
                    ts: "function prefixMax(nums: number[]): number[] {\n  // Store the maximum for every prefix in input order.\n  const out: number[] = [];\n  // Negative infinity lets the first real value become the first maximum.\n  let best = -Infinity;\n\n  for (const v of nums) {\n    // Keep the larger of the previous prefix maximum and the current value.\n    best = Math.max(best, v);\n    // Record the maximum for the prefix ending at this position.\n    out.push(best);\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Map with carry",
                approach: "Carry the max through a map.",
                js: "function prefixMax(nums) {\n  let best = -Infinity;\n  return nums.map((v) => (best = Math.max(best, v)));\n}\n",
                ts: "function prefixMax(nums: number[]): number[] {\n  let best = -Infinity;\n  return nums.map((v) => (best = Math.max(best, v)));\n}\n",
                commentedCode: {
                    js: "function prefixMax(nums) {\n  // Carry the greatest value seen between map callbacks.\n  let best = -Infinity;\n\n  // Update the carried maximum and emit it for each prefix.\n  return nums.map((v) => {\n    best = Math.max(best, v);\n    return best;\n  });\n}\n",
                    ts: "function prefixMax(nums: number[]): number[] {\n  // Carry the greatest value seen between map callbacks.\n  let best = -Infinity;\n\n  // Update the carried maximum and emit it for each prefix.\n  return nums.map((v) => {\n    best = Math.max(best, v);\n    return best;\n  });\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ps-suffix-sum",
        slug: "suffix-sum",
        title: "Suffix Sum",
        difficulty: "easy",
        patternIds: P,
        statement: "Return an array where each position holds the sum of that value and everything after it.",
        examples: [
            {
                input: "[1,2,3]",
                output: "[6,5,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[5]",
                output: "[5]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "suffixSum",
        starter: {
            js: "function suffixSum(nums) {\n  // Sum from each index to the end.\n}\n",
            ts: "function suffixSum(nums: number[]): number[] {\n  // Sum from each index to the end.\n  return [];\n}\n"
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
                expected: [
                    6,
                    5,
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
                        5
                    ]
                ],
                expected: [
                    5
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        1,
                        1
                    ]
                ],
                expected: [
                    3,
                    2,
                    1
                ]
            },
            {
                args: [
                    [
                        2,
                        -2,
                        2
                    ]
                ],
                expected: [
                    2,
                    0,
                    2
                ]
            },
            {
                args: [
                    [
                        0,
                        0
                    ]
                ],
                expected: [
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        10
                    ]
                ],
                expected: [
                    10
                ]
            },
            {
                args: [
                    [
                        -1,
                        -1
                    ]
                ],
                expected: [
                    -2,
                    -1
                ]
            },
            {
                args: [
                    [
                        3,
                        4,
                        5
                    ]
                ],
                expected: [
                    12,
                    9,
                    5
                ]
            }
        ],
        hints: [
            "Build it from the right: each value plus the suffix sum after it.",
            "Walk backward accumulating a running total.",
            "for i from n-1 down to 0: sum += nums[i]; out[i] = sum."
        ],
        solutions: [
            {
                label: "Accumulate from the right",
                approach: "Sum backward, writing each running total in place.",
                js: "function suffixSum(nums) {\n  const out = new Array(nums.length);\n  let sum = 0;\n  for (let i = nums.length - 1; i >= 0; i--) { sum += nums[i]; out[i] = sum; }\n  return out;\n}\n",
                ts: "function suffixSum(nums: number[]): number[] {\n  const out = new Array(nums.length);\n  let sum = 0;\n  for (let i = nums.length - 1; i >= 0; i--) { sum += nums[i]; out[i] = sum; }\n  return out;\n}\n",
                commentedCode: {
                    js: "function suffixSum(nums) {\n  // Allocate one result slot for every input position.\n  const out = new Array(nums.length);\n  // sum will contain the values from the current index through the end.\n  let sum = 0;\n\n  // Moving right to left lets each new value extend the known suffix.\n  for (let i = nums.length - 1; i >= 0; i--) {\n    sum += nums[i];\n    // Store the suffix sum that begins at index i.\n    out[i] = sum;\n  }\n\n  return out;\n}\n",
                    ts: "function suffixSum(nums: number[]): number[] {\n  // Allocate one result slot for every input position.\n  const out: number[] = new Array(nums.length);\n  // sum will contain the values from the current index through the end.\n  let sum = 0;\n\n  // Moving right to left lets each new value extend the known suffix.\n  for (let i = nums.length - 1; i >= 0; i--) {\n    sum += nums[i];\n    // Store the suffix sum that begins at index i.\n    out[i] = sum;\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Reverse prefix sum",
                approach: "Reverse, take running sums, reverse back.",
                js: "function suffixSum(nums) {\n  const rev = [...nums].reverse();\n  let sum = 0;\n  const pre = rev.map((v) => (sum += v));\n  return pre.reverse();\n}\n",
                ts: "function suffixSum(nums: number[]): number[] {\n  const rev = [...nums].reverse();\n  let sum = 0;\n  const pre = rev.map((v) => (sum += v));\n  return pre.reverse();\n}\n",
                commentedCode: {
                    js: "function suffixSum(nums) {\n  // Reverse a copy so original suffixes become prefixes without mutating nums.\n  const rev = [...nums].reverse();\n  // Carry the running sum through the reversed values.\n  let sum = 0;\n  const pre = rev.map((v) => {\n    // This reversed prefix equals a suffix sum in the original order.\n    sum += v;\n    return sum;\n  });\n\n  // Restore the result positions to the original left-to-right order.\n  return pre.reverse();\n}\n",
                    ts: "function suffixSum(nums: number[]): number[] {\n  // Reverse a copy so original suffixes become prefixes without mutating nums.\n  const rev: number[] = [...nums].reverse();\n  // Carry the running sum through the reversed values.\n  let sum = 0;\n  const pre: number[] = rev.map((v) => {\n    // This reversed prefix equals a suffix sum in the original order.\n    sum += v;\n    return sum;\n  });\n\n  // Restore the result positions to the original left-to-right order.\n  return pre.reverse();\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ps-count-subarrays-zero",
        slug: "count-zero-sum-subarrays",
        title: "Zero-Sum Subarrays",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the number of contiguous subarrays whose values sum to 0.",
        examples: [
            {
                input: "[1,-1,2]",
                output: "1"
            },
            {
                input: "[0,0]",
                output: "3"
            },
            {
                input: "[1,2,3]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "countZeroSumSubarrays",
        starter: {
            js: "function countZeroSumSubarrays(nums) {\n  // Number of subarrays summing to 0.\n}\n",
            ts: "function countZeroSumSubarrays(nums: number[]): number {\n  // Number of subarrays summing to 0.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        -1,
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        0,
                        0
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: 0
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        3,
                        -3,
                        3,
                        -3
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        1,
                        2,
                        -3
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        5,
                        -5,
                        5
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        -1,
                        1,
                        -1
                    ]
                ],
                expected: 4
            }
        ],
        hints: [
            "Two equal prefix sums bracket a zero-sum subarray.",
            "Count how many times each prefix sum repeats.",
            "map{0:1}; running += x; count += map[running]; map[running]++."
        ],
        solutions: [
            {
                label: "Prefix sum counts",
                approach: "Each repeat of a prefix value adds a zero-sum subarray.",
                js: "function countZeroSumSubarrays(nums) {\n  const seen = new Map([[0, 1]]);\n  let running = 0, count = 0;\n  for (const x of nums) {\n    running += x;\n    count += seen.get(running) || 0;\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n  return count;\n}\n",
                ts: "function countZeroSumSubarrays(nums: number[]): number {\n  const seen = new Map<number, number>([[0, 1]]);\n  let running = 0, count = 0;\n  for (const x of nums) {\n    running += x;\n    count += seen.get(running) || 0;\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countZeroSumSubarrays(nums) {\n  // Seed the empty prefix so zero-sum ranges starting at index 0 are counted.\n  const seen = new Map([[0, 1]]);\n  let running = 0;\n  let count = 0;\n\n  for (const x of nums) {\n    // Compute the prefix sum through the current position.\n    running += x;\n    // Each identical earlier prefix brackets one zero-sum subarray.\n    count += seen.get(running) || 0;\n    // Make this prefix available to ranges ending later.\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n\n  return count;\n}\n",
                    ts: "function countZeroSumSubarrays(nums: number[]): number {\n  // Seed the empty prefix so zero-sum ranges starting at index 0 are counted.\n  const seen = new Map<number, number>([[0, 1]]);\n  let running = 0;\n  let count = 0;\n\n  for (const x of nums) {\n    // Compute the prefix sum through the current position.\n    running += x;\n    // Each identical earlier prefix brackets one zero-sum subarray.\n    count += seen.get(running) || 0;\n    // Make this prefix available to ranges ending later.\n    seen.set(running, (seen.get(running) || 0) + 1);\n  }\n\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Brute force",
                approach: "Check every subarray sum directly.",
                js: "function countZeroSumSubarrays(nums) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) { sum += nums[j]; if (sum === 0) count++; }\n  }\n  return count;\n}\n",
                ts: "function countZeroSumSubarrays(nums: number[]): number {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) { sum += nums[j]; if (sum === 0) count++; }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countZeroSumSubarrays(nums) {\n  // Accumulate the number of zero-sum contiguous ranges.\n  let count = 0;\n\n  // Try every possible starting index.\n  for (let i = 0; i < nums.length; i++) {\n    // Reset the total for ranges that begin at i.\n    let sum = 0;\n    // Extend the range through every possible ending index.\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      // The current range nums[i..j] is valid when its total is zero.\n      if (sum === 0) {\n        count++;\n      }\n    }\n  }\n\n  return count;\n}\n",
                    ts: "function countZeroSumSubarrays(nums: number[]): number {\n  // Accumulate the number of zero-sum contiguous ranges.\n  let count = 0;\n\n  // Try every possible starting index.\n  for (let i = 0; i < nums.length; i++) {\n    // Reset the total for ranges that begin at i.\n    let sum = 0;\n    // Extend the range through every possible ending index.\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      // The current range nums[i..j] is valid when its total is zero.\n      if (sum === 0) {\n        count++;\n      }\n    }\n  }\n\n  return count;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "ps-equilibrium-count",
        slug: "equilibrium-count",
        title: "Equilibrium Indices",
        difficulty: "medium",
        patternIds: P,
        statement: "Return how many indices have equal sums on their left and right (an empty side sums to 0).",
        examples: [
            {
                input: "[1,7,3,6,5,6]",
                output: "1"
            },
            {
                input: "[1,2,3]",
                output: "0"
            },
            {
                input: "[0,0,0]",
                output: "3"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "equilibriumCount",
        starter: {
            js: "function equilibriumCount(nums) {\n  // Count balanced indices.\n}\n",
            ts: "function equilibriumCount(nums: number[]): number {\n  // Count balanced indices.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        7,
                        3,
                        6,
                        5,
                        6
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        0,
                        0,
                        0
                    ]
                ],
                expected: 3
            }
        ],
        hidden: [
            {
                args: [
                    []
                ],
                expected: 0
            },
            {
                args: [
                    [
                        5
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        3,
                        2,
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        2,
                        1,
                        -1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        1,
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        0,
                        0,
                        0,
                        0
                    ]
                ],
                expected: 4
            }
        ],
        hints: [
            "This is the pivot-index idea, but count all matches instead of stopping at the first.",
            "Use the total to derive the right sum as total - left - current.",
            "for i: if left === total - left - nums[i] count++; left += nums[i]."
        ],
        solutions: [
            {
                label: "Total minus prefix",
                approach: "Count every index where the derived left and right sums match.",
                js: "function equilibriumCount(nums) {\n  let total = 0;\n  for (const v of nums) total += v;\n  let left = 0, count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (left === total - left - nums[i]) count++;\n    left += nums[i];\n  }\n  return count;\n}\n",
                ts: "function equilibriumCount(nums: number[]): number {\n  let total = 0;\n  for (const v of nums) total += v;\n  let left = 0, count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (left === total - left - nums[i]) count++;\n    left += nums[i];\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function equilibriumCount(nums) {\n  // Find the whole-array sum so each right side can be derived in O(1).\n  let total = 0;\n  for (const v of nums) {\n    total += v;\n  }\n\n  // Before each check, left excludes the value at the current index.\n  let left = 0;\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // Subtract the left side and current value to isolate the right side.\n    const right = total - left - nums[i];\n    if (left === right) {\n      count++;\n    }\n    // Move the current value into the left side for the next index.\n    left += nums[i];\n  }\n\n  return count;\n}\n",
                    ts: "function equilibriumCount(nums: number[]): number {\n  // Find the whole-array sum so each right side can be derived in O(1).\n  let total = 0;\n  for (const v of nums) {\n    total += v;\n  }\n\n  // Before each check, left excludes the value at the current index.\n  let left = 0;\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // Subtract the left side and current value to isolate the right side.\n    const right = total - left - nums[i];\n    if (left === right) {\n      count++;\n    }\n    // Move the current value into the left side for the next index.\n    left += nums[i];\n  }\n\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Prefix array",
                approach: "Precompute prefix sums and compare each side.",
                js: "function equilibriumCount(nums) {\n  const n = nums.length;\n  const pre = [0];\n  for (let i = 0; i < n; i++) pre.push(pre[i] + nums[i]);\n  let count = 0;\n  for (let i = 0; i < n; i++) if (pre[i] === pre[n] - pre[i + 1]) count++;\n  return count;\n}\n",
                ts: "function equilibriumCount(nums: number[]): number {\n  const n = nums.length;\n  const pre = [0];\n  for (let i = 0; i < n; i++) pre.push(pre[i] + nums[i]);\n  let count = 0;\n  for (let i = 0; i < n; i++) if (pre[i] === pre[n] - pre[i + 1]) count++;\n  return count;\n}\n",
                commentedCode: {
                    js: "function equilibriumCount(nums) {\n  const n = nums.length;\n  // pre[i] is the sum of the first i values, so pre[0] is zero.\n  const pre = [0];\n  for (let i = 0; i < n; i++) {\n    // Append the sum through nums[i].\n    pre.push(pre[i] + nums[i]);\n  }\n\n  let count = 0;\n  // Compare the values strictly before and strictly after every index.\n  for (let i = 0; i < n; i++) {\n    const left = pre[i];\n    const right = pre[n] - pre[i + 1];\n    if (left === right) {\n      count++;\n    }\n  }\n\n  return count;\n}\n",
                    ts: "function equilibriumCount(nums: number[]): number {\n  const n = nums.length;\n  // pre[i] is the sum of the first i values, so pre[0] is zero.\n  const pre: number[] = [0];\n  for (let i = 0; i < n; i++) {\n    // Append the sum through nums[i].\n    pre.push(pre[i] + nums[i]);\n  }\n\n  let count = 0;\n  // Compare the values strictly before and strictly after every index.\n  for (let i = 0; i < n; i++) {\n    const left = pre[i];\n    const right = pre[n] - pre[i + 1];\n    if (left === right) {\n      count++;\n    }\n  }\n\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    }
];
const prefixSumProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const prefixSumMcqs = [
    {
        id: "s4-ps-build",
        kind: "mcq",
        prompt: "Building a prefix-sum array over n elements takes:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answerIndex: 2,
        explanation: "One pass accumulates the running total — linear time."
    },
    {
        id: "s4-ps-query",
        kind: "mcq",
        prompt: "Once a prefix-sum array is built, answering one range-sum query takes:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "A range sum is a single subtraction pre[r+1] - pre[l]."
    }
];
const prefixSumModule = {
    id: "m-pat-prefix-sum",
    stageId: S,
    title: "Prefix Sum",
    kind: "patternModule",
    summary: "Precompute cumulative totals so any range sum — or balance point — is answered in O(1).",
    lessonSections: [
        {
            heading: "Precompute once, answer instantly",
            body: `A **prefix-sum** array stores cumulative totals: \`pre[i]\` is the sum of the first \`i\` elements (with \`pre[0] = 0\`). Then the sum of any range \`[l, r]\` is a single subtraction — \`pre[r+1] - pre[l]\` — turning repeated range queries from O(n) each into O(1).

\`\`\`js
const nums = [2, 4, 6, 8];
const pre = [0];
for (let i = 0; i < nums.length; i++) pre.push(pre[i] + nums[i]);
// sum of indices 1..2 = 4 + 6:
console.log(pre[3] - pre[1]); // 10
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for prefix sums when the problem involves:

- **range sums** or averages queried many times,
- **balance / pivot** points (left sum equals right sum),
- counting **subarrays with a target sum** (prefix sum + a hash map of counts),
- running max/min or products (the same idea with a different operator).`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Range-sum template
function buildPrefix(nums: number[]): number[] {
  const pre = [0];
  for (let i = 0; i < nums.length; i++) pre.push(pre[i] + nums[i]);
  return pre; // sum(l..r) = pre[r + 1] - pre[l]
}

// Count subarrays summing to k
function countK(nums: number[], k: number): number {
  const seen = new Map<number, number>([[0, 1]]);
  let running = 0, count = 0;
  for (const x of nums) {
    running += x;
    count += seen.get(running - k) ?? 0;
    seen.set(running, (seen.get(running) ?? 0) + 1);
  }
  return count;
}
\`\`\`

**Pitfalls:** off-by-one on the \`pre[r+1] - pre[l]\` boundary; forgetting to seed the count map with \`{0: 1}\` (which represents the empty prefix). Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "ps-running-sum",
    drillProblemIds: [
        "ps-running-sum",
        "ps-range-sum-query",
        "ps-pivot-index",
        "ps-min-start-value",
        "ps-count-subarrays-k",
        "ps-product-except-self"
    ],
    testPoolProblemIds: [
        "ps-prefix-max",
        "ps-suffix-sum",
        "ps-count-subarrays-zero",
        "ps-equilibrium-count"
    ],
    complexityQuestionIds: [
        "s4-ps-build",
        "s4-ps-query"
    ],
    badgeId: "badge-pat-prefix-sum",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage4/slidingWindow.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slidingWindowMcqs",
    ()=>slidingWindowMcqs,
    "slidingWindowModule",
    ()=>slidingWindowModule,
    "slidingWindowProblems",
    ()=>slidingWindowProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s4";
const P = [
    "sliding-window"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "sw-max-sum-k",
        slug: "max-sum-window",
        title: "Max Sum of Size K",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the maximum sum of any contiguous window of exactly `k` elements.",
        examples: [
            {
                input: "[2,1,5,1,3,2], 3",
                output: "9"
            },
            {
                input: "[1], 1",
                output: "1"
            },
            {
                input: "[5,5,5], 2",
                output: "10"
            }
        ],
        constraints: [
            "1 <= k <= nums.length <= 10000"
        ],
        functionName: "maxSumSubarrayK",
        starter: {
            js: "function maxSumSubarrayK(nums, k) {\n  // Max sum of a window of size k.\n}\n",
            ts: "function maxSumSubarrayK(nums: number[], k: number): number {\n  // Max sum of a window of size k.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        1,
                        5,
                        1,
                        3,
                        2
                    ],
                    3
                ],
                expected: 9
            },
            {
                args: [
                    [
                        1
                    ],
                    1
                ],
                expected: 1
            },
            {
                args: [
                    [
                        5,
                        5,
                        5
                    ],
                    2
                ],
                expected: 10
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    2
                ],
                expected: 7
            },
            {
                args: [
                    [
                        -1,
                        -2,
                        -3
                    ],
                    1
                ],
                expected: -1
            },
            {
                args: [
                    [
                        4,
                        3,
                        2,
                        1
                    ],
                    3
                ],
                expected: 9
            },
            {
                args: [
                    [
                        2,
                        2,
                        2
                    ],
                    3
                ],
                expected: 6
            },
            {
                args: [
                    [
                        1,
                        1,
                        1,
                        1,
                        1
                    ],
                    2
                ],
                expected: 2
            },
            {
                args: [
                    [
                        10,
                        -10,
                        10
                    ],
                    2
                ],
                expected: 0
            }
        ],
        hints: [
            "Compute the first window's sum, then slide: add the new element, drop the old one.",
            "Each slide is O(1) — no need to re-sum the whole window.",
            "sum += nums[i] - nums[i - k]; track the maximum."
        ],
        walkthrough: [
            {
                title: "Build the first fixed-size window",
                body: "Add the first `k` values once. This is the sum for the first legal window and the initial best answer."
            },
            {
                title: "Slide instead of recomputing",
                body: "When the window moves right by one position, add the entering value and subtract the value that just left. The window size stays exactly `k`."
            },
            {
                title: "Track the largest window sum",
                body: "After each slide, compare the updated sum with the best sum recorded so far."
            },
            {
                title: "Return the best fixed window",
                body: "Every length-`k` window is considered once, and each move does constant work."
            }
        ],
        solutions: [
            {
                label: "Slide the window",
                approach: "Maintain the window sum in O(1) per step.",
                js: "function maxSumSubarrayK(nums, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  let best = sum;\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    if (sum > best) best = sum;\n  }\n  return best;\n}\n",
                ts: "function maxSumSubarrayK(nums: number[], k: number): number {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  let best = sum;\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    if (sum > best) best = sum;\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function maxSumSubarrayK(nums, k) {\n  // Sum the first complete window.\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  // The first window is the initial maximum.\n  let best = sum;\n\n  // Slide the window by one position for every remaining value.\n  for (let right = k; right < nums.length; right++) {\n    // Add the entering value and remove the value leaving on the left.\n    sum += nums[right] - nums[right - k];\n    best = Math.max(best, sum);\n  }\n\n  return best;\n}\n",
                    ts: "function maxSumSubarrayK(nums: number[], k: number): number {\n  // Sum the first complete window.\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  // The first window is the initial maximum.\n  let best = sum;\n\n  // Slide the window by one position for every remaining value.\n  for (let right = k; right < nums.length; right++) {\n    // Add the entering value and remove the value leaving on the left.\n    sum += nums[right] - nums[right - k];\n    best = Math.max(best, sum);\n  }\n\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Recompute each window",
                approach: "Sum every window from scratch — simpler but slower.",
                js: "function maxSumSubarrayK(nums, k) {\n  let best = -Infinity;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < i + k; j++) sum += nums[j];\n    if (sum > best) best = sum;\n  }\n  return best;\n}\n",
                ts: "function maxSumSubarrayK(nums: number[], k: number): number {\n  let best = -Infinity;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < i + k; j++) sum += nums[j];\n    if (sum > best) best = sum;\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function maxSumSubarrayK(nums, k) {\n  // Allow the first window, even if every sum is negative, to replace this value.\n  let best = -Infinity;\n  // Choose every legal window start.\n  for (let start = 0; start + k <= nums.length; start++) {\n    let sum = 0;\n    // Recompute this one window from its k values.\n    for (let i = start; i < start + k; i++) sum += nums[i];\n    best = Math.max(best, sum);\n  }\n  return best;\n}\n",
                    ts: "function maxSumSubarrayK(nums: number[], k: number): number {\n  // Allow the first window, even if every sum is negative, to replace this value.\n  let best = -Infinity;\n  // Choose every legal window start.\n  for (let start = 0; start + k <= nums.length; start++) {\n    let sum = 0;\n    // Recompute this one window from its k values.\n    for (let i = start; i < start + k; i++) sum += nums[i];\n    best = Math.max(best, sum);\n  }\n  return best;\n}\n"
                },
                time: "O(n·k)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "sw-min-sum-k",
        slug: "min-sum-window",
        title: "Min Sum of Size K",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the minimum sum of any contiguous window of exactly `k` elements.",
        examples: [
            {
                input: "[2,1,5,1,3,2], 3",
                output: "6"
            },
            {
                input: "[1], 1",
                output: "1"
            },
            {
                input: "[5,5,5], 2",
                output: "10"
            }
        ],
        constraints: [
            "1 <= k <= nums.length <= 10000"
        ],
        functionName: "minSumSubarrayK",
        starter: {
            js: "function minSumSubarrayK(nums, k) {\n  // Min sum of a window of size k.\n}\n",
            ts: "function minSumSubarrayK(nums: number[], k: number): number {\n  // Min sum of a window of size k.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        1,
                        5,
                        1,
                        3,
                        2
                    ],
                    3
                ],
                expected: 6
            },
            {
                args: [
                    [
                        1
                    ],
                    1
                ],
                expected: 1
            },
            {
                args: [
                    [
                        5,
                        5,
                        5
                    ],
                    2
                ],
                expected: 10
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    2
                ],
                expected: 3
            },
            {
                args: [
                    [
                        -1,
                        -2,
                        -3
                    ],
                    2
                ],
                expected: -5
            },
            {
                args: [
                    [
                        4,
                        3,
                        2,
                        1
                    ],
                    3
                ],
                expected: 6
            },
            {
                args: [
                    [
                        2,
                        2,
                        2
                    ],
                    3
                ],
                expected: 6
            },
            {
                args: [
                    [
                        3,
                        1,
                        4,
                        1,
                        5
                    ],
                    2
                ],
                expected: 4
            },
            {
                args: [
                    [
                        10,
                        -10,
                        10
                    ],
                    2
                ],
                expected: 0
            }
        ],
        hints: [
            "Same slide as the max version, but track the minimum.",
            "Add the incoming element, drop the outgoing one each step.",
            "sum += nums[i] - nums[i - k]; keep the smallest sum seen."
        ],
        walkthrough: [
            {
                title: "Start with the first complete window",
                body: "Add the first `k` values and use that total as the initial minimum. This matters when all window sums are positive or negative."
            },
            {
                title: "Update the sum in constant time",
                body: "For each step right, add the incoming value and subtract the value that left from the front of the fixed-size window."
            },
            {
                title: "Keep the smallest total",
                body: "Compare the updated window sum with the best minimum after every slide."
            },
            {
                title: "Return after every window is visited",
                body: "The first window plus each slide covers all contiguous windows of exactly `k` elements."
            }
        ],
        solutions: [
            {
                label: "Slide the window",
                approach: "Maintain the running window sum and track its minimum.",
                js: "function minSumSubarrayK(nums, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  let best = sum;\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    if (sum < best) best = sum;\n  }\n  return best;\n}\n",
                ts: "function minSumSubarrayK(nums: number[], k: number): number {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  let best = sum;\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    if (sum < best) best = sum;\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function minSumSubarrayK(nums, k) {\n  // Build the first fixed-length window.\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  // The first window is the initial minimum.\n  let best = sum;\n\n  // Slide once for every possible later window.\n  for (let right = k; right < nums.length; right++) {\n    // Replace the outgoing left value with the incoming right value.\n    sum += nums[right] - nums[right - k];\n    best = Math.min(best, sum);\n  }\n\n  return best;\n}\n",
                    ts: "function minSumSubarrayK(nums: number[], k: number): number {\n  // Build the first fixed-length window.\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  // The first window is the initial minimum.\n  let best = sum;\n\n  // Slide once for every possible later window.\n  for (let right = k; right < nums.length; right++) {\n    // Replace the outgoing left value with the incoming right value.\n    sum += nums[right] - nums[right - k];\n    best = Math.min(best, sum);\n  }\n\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Recompute each window",
                approach: "Sum every window directly.",
                js: "function minSumSubarrayK(nums, k) {\n  let best = Infinity;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < i + k; j++) sum += nums[j];\n    if (sum < best) best = sum;\n  }\n  return best;\n}\n",
                ts: "function minSumSubarrayK(nums: number[], k: number): number {\n  let best = Infinity;\n  for (let i = 0; i + k <= nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < i + k; j++) sum += nums[j];\n    if (sum < best) best = sum;\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function minSumSubarrayK(nums, k) {\n  // Start above every possible window sum.\n  let best = Infinity;\n  // Choose each legal fixed-size window start.\n  for (let start = 0; start + k <= nums.length; start++) {\n    let sum = 0;\n    // Add every value in this one window from scratch.\n    for (let i = start; i < start + k; i++) sum += nums[i];\n    best = Math.min(best, sum);\n  }\n  return best;\n}\n",
                    ts: "function minSumSubarrayK(nums: number[], k: number): number {\n  // Start above every possible window sum.\n  let best = Infinity;\n  // Choose each legal fixed-size window start.\n  for (let start = 0; start + k <= nums.length; start++) {\n    let sum = 0;\n    // Add every value in this one window from scratch.\n    for (let i = start; i < start + k; i++) sum += nums[i];\n    best = Math.min(best, sum);\n  }\n  return best;\n}\n"
                },
                time: "O(n·k)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "sw-longest-unique",
        slug: "longest-unique-substring",
        title: "Longest Substring Without Repeats",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the length of the longest substring that contains no repeated character.",
        examples: [
            {
                input: '"abcabcbb"',
                output: "3"
            },
            {
                input: '"bbbbb"',
                output: "1"
            },
            {
                input: '""',
                output: "0"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000"
        ],
        functionName: "longestUnique",
        starter: {
            js: "function longestUnique(s) {\n  // Length of the longest repeat-free substring.\n}\n",
            ts: "function longestUnique(s: string): number {\n  // Length of the longest repeat-free substring.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "abcabcbb"
                ],
                expected: 3
            },
            {
                args: [
                    "bbbbb"
                ],
                expected: 1
            },
            {
                args: [
                    ""
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    "pwwkew"
                ],
                expected: 3
            },
            {
                args: [
                    "a"
                ],
                expected: 1
            },
            {
                args: [
                    "au"
                ],
                expected: 2
            },
            {
                args: [
                    "dvdf"
                ],
                expected: 3
            },
            {
                args: [
                    "abba"
                ],
                expected: 2
            },
            {
                args: [
                    "tmmzuxt"
                ],
                expected: 5
            }
        ],
        hints: [
            "Grow a window to the right; when a repeat appears, jump the left edge past the earlier copy.",
            "Track the last index of each character to know where to move the left edge.",
            "if (last[c] >= start) start = last[c] + 1; last[c] = i; update best."
        ],
        walkthrough: [
            {
                title: "Maintain a repeat-free window",
                body: "Let the window run from `start` through the current index. Its invariant is that no character appears twice inside it."
            },
            {
                title: "Remember where each character was last seen",
                body: "When you read a character, look up its previous index. A previous occurrence only matters if it is still inside the current window."
            },
            {
                title: "Jump past a duplicate",
                body: "If the character was seen at or after `start`, move `start` to one position after that earlier occurrence. Never move it backward."
            },
            {
                title: "Measure every valid window",
                body: "Record the current character’s index, then update the longest length using `currentIndex - start + 1`."
            }
        ],
        solutions: [
            {
                label: "Sliding window + last index",
                approach: "Move the window's start past any repeated character.",
                js: "function longestUnique(s) {\n  const last = {};\n  let start = 0, best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const c = s[i];\n    if (last[c] !== undefined && last[c] >= start) start = last[c] + 1;\n    last[c] = i;\n    best = Math.max(best, i - start + 1);\n  }\n  return best;\n}\n",
                ts: "function longestUnique(s: string): number {\n  const last: Record<string, number> = {};\n  let start = 0, best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const c = s[i];\n    if (last[c] !== undefined && last[c] >= start) start = last[c] + 1;\n    last[c] = i;\n    best = Math.max(best, i - start + 1);\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function longestUnique(s) {\n  // Map each character to its most recent index.\n  const lastSeen = {};\n  let start = 0;\n  let best = 0;\n\n  // Extend the window one character at a time.\n  for (let end = 0; end < s.length; end++) {\n    const char = s[end];\n    // A previous copy inside this window must be excluded.\n    if (lastSeen[char] !== undefined && lastSeen[char] >= start) {\n      start = lastSeen[char] + 1;\n    }\n    // This occurrence is now the most recent one.\n    lastSeen[char] = end;\n    best = Math.max(best, end - start + 1);\n  }\n\n  return best;\n}\n",
                    ts: "function longestUnique(s: string): number {\n  // Map each character to its most recent index.\n  const lastSeen: Record<string, number> = {};\n  let start = 0;\n  let best = 0;\n\n  // Extend the window one character at a time.\n  for (let end = 0; end < s.length; end++) {\n    const char = s[end];\n    // A previous copy inside this window must be excluded.\n    if (lastSeen[char] !== undefined && lastSeen[char] >= start) {\n      start = lastSeen[char] + 1;\n    }\n    // This occurrence is now the most recent one.\n    lastSeen[char] = end;\n    best = Math.max(best, end - start + 1);\n  }\n\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Set window shrink",
                approach: "Shrink the window from the left until the new char is unique.",
                js: "function longestUnique(s) {\n  const set = new Set();\n  let left = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (set.has(s[right])) { set.delete(s[left]); left++; }\n    set.add(s[right]);\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
                ts: "function longestUnique(s: string): number {\n  const set = new Set<string>();\n  let left = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (set.has(s[right])) { set.delete(s[left]); left++; }\n    set.add(s[right]);\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function longestUnique(s) {\n  // Store the characters currently inside the window.\n  const windowChars = new Set();\n  let left = 0;\n  let best = 0;\n\n  for (let right = 0; right < s.length; right++) {\n    // Remove left-side characters until the incoming character is unique.\n    while (windowChars.has(s[right])) {\n      windowChars.delete(s[left]);\n      left++;\n    }\n    // The window is repeat-free again, so include the incoming character.\n    windowChars.add(s[right]);\n    best = Math.max(best, right - left + 1);\n  }\n\n  return best;\n}\n",
                    ts: "function longestUnique(s: string): number {\n  // Store the characters currently inside the window.\n  const windowChars = new Set<string>();\n  let left = 0;\n  let best = 0;\n\n  for (let right = 0; right < s.length; right++) {\n    // Remove left-side characters until the incoming character is unique.\n    while (windowChars.has(s[right])) {\n      windowChars.delete(s[left]);\n      left++;\n    }\n    // The window is repeat-free again, so include the incoming character.\n    windowChars.add(s[right]);\n    best = Math.max(best, right - left + 1);\n  }\n\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "sw-min-subarray-len",
        slug: "min-subarray-len",
        title: "Minimum Size Subarray Sum",
        difficulty: "medium",
        patternIds: P,
        statement: "Given positive numbers and a `target`, return the length of the shortest contiguous subarray whose sum is at least `target`, or 0 if none exists.",
        examples: [
            {
                input: "7, [2,3,1,2,4,3]",
                output: "2"
            },
            {
                input: "4, [1,4,4]",
                output: "1"
            },
            {
                input: "11, [1,1,1,1,1,1,1,1]",
                output: "0"
            }
        ],
        constraints: [
            "all values are positive",
            "0 <= nums.length <= 10000"
        ],
        functionName: "minSubarrayLen",
        starter: {
            js: "function minSubarrayLen(target, nums) {\n  // Shortest subarray with sum >= target, or 0.\n}\n",
            ts: "function minSubarrayLen(target: number, nums: number[]): number {\n  // Shortest subarray with sum >= target, or 0.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    7,
                    [
                        2,
                        3,
                        1,
                        2,
                        4,
                        3
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    4,
                    [
                        1,
                        4,
                        4
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    11,
                    [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    3,
                    [
                        1,
                        1,
                        1
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    100,
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    6,
                    [
                        10
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    5,
                    [
                        2,
                        3,
                        1,
                        1,
                        1
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    15,
                    [
                        5,
                        1,
                        3,
                        5,
                        10,
                        7,
                        4,
                        9,
                        2,
                        8
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    1,
                    [
                        1
                    ]
                ],
                expected: 1
            }
        ],
        hints: [
            "Expand the window to reach the target, then shrink it from the left while it still qualifies.",
            "Each element enters and leaves the window at most once — O(n).",
            "while (sum >= target) { best = min(best, len); sum -= nums[left]; left++; }"
        ],
        walkthrough: [
            {
                title: "Grow until the window qualifies",
                body: "Move the right edge forward and add each value. Because every number is positive, enlarging the window can only increase its sum."
            },
            {
                title: "Shrink while the requirement still holds",
                body: "Once the sum reaches the target, record the current length, then remove values from the left as long as the sum remains large enough."
            },
            {
                title: "Keep the shortest qualifying window",
                body: "Every time the window qualifies, compare its length with the best length found so far before shrinking it further."
            },
            {
                title: "Translate no match to zero",
                body: "Use an impossible initial best value and return 0 when it was never replaced."
            }
        ],
        solutions: [
            {
                label: "Shrinking window",
                approach: "Grow to hit the target, then contract to minimise the length.",
                js: "function minSubarrayLen(target, nums) {\n  let left = 0, sum = 0, best = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      best = Math.min(best, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n",
                ts: "function minSubarrayLen(target: number, nums: number[]): number {\n  let left = 0, sum = 0, best = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      best = Math.min(best, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n",
                commentedCode: {
                    js: "function minSubarrayLen(target, nums) {\n  let left = 0;\n  let sum = 0;\n  let best = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    // Expand the window with the new right-side value.\n    sum += nums[right];\n    // Remove left-side values while this window still reaches the target.\n    while (sum >= target) {\n      best = Math.min(best, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  // Return zero if no qualifying window was ever found.\n  return best === Infinity ? 0 : best;\n}\n",
                    ts: "function minSubarrayLen(target: number, nums: number[]): number {\n  let left = 0;\n  let sum = 0;\n  let best = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    // Expand the window with the new right-side value.\n    sum += nums[right];\n    // Remove left-side values while this window still reaches the target.\n    while (sum >= target) {\n      best = Math.min(best, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  // Return zero if no qualifying window was ever found.\n  return best === Infinity ? 0 : best;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Brute force",
                approach: "Try every start, extending until the sum qualifies.",
                js: "function minSubarrayLen(target, nums) {\n  let best = Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      if (sum >= target) { best = Math.min(best, j - i + 1); break; }\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n",
                ts: "function minSubarrayLen(target: number, nums: number[]): number {\n  let best = Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      if (sum >= target) { best = Math.min(best, j - i + 1); break; }\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n",
                commentedCode: {
                    js: "function minSubarrayLen(target, nums) {\n  let best = Infinity;\n  // Try every possible start of a subarray.\n  for (let start = 0; start < nums.length; start++) {\n    let sum = 0;\n    // Extend until this start first reaches the target.\n    for (let end = start; end < nums.length; end++) {\n      sum += nums[end];\n      if (sum >= target) {\n        best = Math.min(best, end - start + 1);\n        break;\n      }\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n",
                    ts: "function minSubarrayLen(target: number, nums: number[]): number {\n  let best = Infinity;\n  // Try every possible start of a subarray.\n  for (let start = 0; start < nums.length; start++) {\n    let sum = 0;\n    // Extend until this start first reaches the target.\n    for (let end = start; end < nums.length; end++) {\n      sum += nums[end];\n      if (sum >= target) {\n        best = Math.min(best, end - start + 1);\n        break;\n      }\n    }\n  }\n  return best === Infinity ? 0 : best;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "sw-longest-ones-k",
        slug: "max-consecutive-ones-k",
        title: "Max Consecutive Ones (K Flips)",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a binary list, return the length of the longest run of 1s you can get by flipping at most `k` zeros.",
        examples: [
            {
                input: "[1,1,1,0,0,0,1,1,1,1,0], 2",
                output: "6"
            },
            {
                input: "[0], 1",
                output: "1"
            },
            {
                input: "[1,1], 0",
                output: "2"
            }
        ],
        constraints: [
            "each value is 0 or 1",
            "0 <= nums.length <= 10000"
        ],
        functionName: "longestOnes",
        starter: {
            js: "function longestOnes(bits, k) {\n  // Longest run of 1s after flipping <= k zeros.\n}\n",
            ts: "function longestOnes(bits: number[], k: number): number {\n  // Longest run of 1s after flipping <= k zeros.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        1,
                        1,
                        0,
                        0,
                        0,
                        1,
                        1,
                        1,
                        1,
                        0
                    ],
                    2
                ],
                expected: 6
            },
            {
                args: [
                    [
                        0
                    ],
                    1
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        1
                    ],
                    0
                ],
                expected: 2
            }
        ],
        hidden: [
            {
                args: [
                    [],
                    2
                ],
                expected: 0
            },
            {
                args: [
                    [
                        0,
                        0
                    ],
                    0
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        1,
                        1
                    ],
                    0
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        0,
                        1
                    ],
                    1
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        0,
                        0,
                        1
                    ],
                    1
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        1,
                        0,
                        1,
                        1
                    ],
                    1
                ],
                expected: 5
            }
        ],
        hints: [
            "Keep a window with at most k zeros; expand right, and shrink left when there are too many zeros.",
            "Count zeros in the window; while count > k, move left past a zero.",
            "The answer is the largest window width you ever hold."
        ],
        walkthrough: [
            {
                title: "Treat zeros as the flip budget",
                body: "A window is valid when it contains at most `k` zeros, because those are the values you could flip to make the entire window ones."
            },
            {
                title: "Expand the right edge",
                body: "Add one bit at a time and increment the zero count whenever the incoming bit is 0."
            },
            {
                title: "Repair an over-budget window",
                body: "If the zero count exceeds `k`, move the left edge right. Decrement the zero count only when a zero leaves the window."
            },
            {
                title: "Record the widest valid window",
                body: "After the repair step, the current width is a valid run of ones after allowed flips. Keep its maximum."
            }
        ],
        solutions: [
            {
                label: "Sliding window on zeros",
                approach: "Allow at most k zeros in the window; shrink when exceeded.",
                js: "function longestOnes(bits, k) {\n  let left = 0, zeros = 0, best = 0;\n  for (let right = 0; right < bits.length; right++) {\n    if (bits[right] === 0) zeros++;\n    while (zeros > k) { if (bits[left] === 0) zeros--; left++; }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
                ts: "function longestOnes(bits: number[], k: number): number {\n  let left = 0, zeros = 0, best = 0;\n  for (let right = 0; right < bits.length; right++) {\n    if (bits[right] === 0) zeros++;\n    while (zeros > k) { if (bits[left] === 0) zeros--; left++; }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function longestOnes(bits, k) {\n  let left = 0;\n  let zeros = 0;\n  let best = 0;\n\n  for (let right = 0; right < bits.length; right++) {\n    // The incoming zero consumes one allowed flip.\n    if (bits[right] === 0) zeros++;\n    // Remove values from the left until the flip budget is valid again.\n    while (zeros > k) {\n      if (bits[left] === 0) zeros--;\n      left++;\n    }\n    best = Math.max(best, right - left + 1);\n  }\n\n  return best;\n}\n",
                    ts: "function longestOnes(bits: number[], k: number): number {\n  let left = 0;\n  let zeros = 0;\n  let best = 0;\n\n  for (let right = 0; right < bits.length; right++) {\n    // The incoming zero consumes one allowed flip.\n    if (bits[right] === 0) zeros++;\n    // Remove values from the left until the flip budget is valid again.\n    while (zeros > k) {\n      if (bits[left] === 0) zeros--;\n      left++;\n    }\n    best = Math.max(best, right - left + 1);\n  }\n\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Brute force",
                approach: "Try each start, extending while zeros used stays within k.",
                js: "function longestOnes(bits, k) {\n  let best = 0;\n  for (let i = 0; i < bits.length; i++) {\n    let zeros = 0;\n    for (let j = i; j < bits.length; j++) {\n      if (bits[j] === 0) zeros++;\n      if (zeros > k) break;\n      best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
                ts: "function longestOnes(bits: number[], k: number): number {\n  let best = 0;\n  for (let i = 0; i < bits.length; i++) {\n    let zeros = 0;\n    for (let j = i; j < bits.length; j++) {\n      if (bits[j] === 0) zeros++;\n      if (zeros > k) break;\n      best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function longestOnes(bits, k) {\n  let best = 0;\n  // Try every possible window start.\n  for (let start = 0; start < bits.length; start++) {\n    let zeros = 0;\n    for (let end = start; end < bits.length; end++) {\n      if (bits[end] === 0) zeros++;\n      // Longer windows from this start cannot become valid again.\n      if (zeros > k) break;\n      best = Math.max(best, end - start + 1);\n    }\n  }\n  return best;\n}\n",
                    ts: "function longestOnes(bits: number[], k: number): number {\n  let best = 0;\n  // Try every possible window start.\n  for (let start = 0; start < bits.length; start++) {\n    let zeros = 0;\n    for (let end = start; end < bits.length; end++) {\n      if (bits[end] === 0) zeros++;\n      // Longer windows from this start cannot become valid again.\n      if (zeros > k) break;\n      best = Math.max(best, end - start + 1);\n    }\n  }\n  return best;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "sw-longest-k-distinct",
        slug: "longest-k-distinct",
        title: "Longest Substring with K Distinct",
        difficulty: "hard",
        patternIds: P,
        statement: "Return the length of the longest substring containing at most `k` distinct characters.",
        examples: [
            {
                input: '"eceba", 2',
                output: "3"
            },
            {
                input: '"aa", 1',
                output: "2"
            },
            {
                input: '"abc", 0',
                output: "0"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000",
            "0 <= k"
        ],
        functionName: "longestKDistinct",
        starter: {
            js: "function longestKDistinct(s, k) {\n  // Longest substring with <= k distinct chars.\n}\n",
            ts: "function longestKDistinct(s: string, k: number): number {\n  // Longest substring with <= k distinct chars.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "eceba",
                    2
                ],
                expected: 3
            },
            {
                args: [
                    "aa",
                    1
                ],
                expected: 2
            },
            {
                args: [
                    "abc",
                    0
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    "",
                    2
                ],
                expected: 0
            },
            {
                args: [
                    "a",
                    1
                ],
                expected: 1
            },
            {
                args: [
                    "abaccc",
                    2
                ],
                expected: 4
            },
            {
                args: [
                    "aabbcc",
                    1
                ],
                expected: 2
            },
            {
                args: [
                    "aaaa",
                    2
                ],
                expected: 4
            },
            {
                args: [
                    "wxyz",
                    2
                ],
                expected: 2
            }
        ],
        hints: [
            "Keep a count map of characters in the window; the number of keys is the distinct count.",
            "When distinct exceeds k, shrink from the left, removing a character when its count hits 0.",
            "Track the widest window that stays within k distinct characters."
        ],
        walkthrough: [
            {
                title: "Count the current window's characters",
                body: "Use a frequency map so you know both how many copies of each character are present and how many distinct characters the window contains."
            },
            {
                title: "Expand, then repair",
                body: "Add the new right-side character. If distinct characters exceed `k`, remove left-side characters until the window is valid again."
            },
            {
                title: "Delete exhausted character types",
                body: "When a character's count reaches zero during shrinking, it no longer counts as distinct."
            },
            {
                title: "Record each valid width",
                body: "After repairing the window, compare its width with the best answer seen."
            }
        ],
        solutions: [
            {
                label: "Sliding window + count map",
                approach: "Shrink the window whenever it holds more than k distinct characters.",
                js: "function longestKDistinct(s, k) {\n  if (k === 0) return 0;\n  const count = {};\n  let left = 0, distinct = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    if (!count[c]) distinct++;\n    count[c] = (count[c] || 0) + 1;\n    while (distinct > k) {\n      const l = s[left];\n      count[l]--;\n      if (count[l] === 0) distinct--;\n      left++;\n    }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
                ts: "function longestKDistinct(s: string, k: number): number {\n  if (k === 0) return 0;\n  const count: Record<string, number> = {};\n  let left = 0, distinct = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    if (!count[c]) distinct++;\n    count[c] = (count[c] || 0) + 1;\n    while (distinct > k) {\n      const l = s[left];\n      count[l]--;\n      if (count[l] === 0) distinct--;\n      left++;\n    }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function longestKDistinct(s, k) {\n  if (k === 0) return 0;\n  // Store each character's frequency inside the current window.\n  const count = {};\n  let left = 0, distinct = 0, best = 0;\n  // Expand the right edge one character at a time.\n  for (let right = 0; right < s.length; right++) {\n    const char = s[right];\n    if (!count[char]) distinct++;\n    count[char] = (count[char] || 0) + 1;\n    // Remove leftmost characters until at most k distinct types remain.\n    while (distinct > k) {\n      const removed = s[left++];\n      if (--count[removed] === 0) distinct--;\n    }\n    // The repaired window is valid, so its width can improve the answer.\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
                    ts: "function longestKDistinct(s: string, k: number): number {\n  if (k === 0) return 0;\n  // Store each character's frequency inside the current window.\n  const count: Record<string, number> = {};\n  let left = 0, distinct = 0, best = 0;\n  // Expand the right edge one character at a time.\n  for (let right = 0; right < s.length; right++) {\n    const char = s[right];\n    if (!count[char]) distinct++;\n    count[char] = (count[char] || 0) + 1;\n    // Remove leftmost characters until at most k distinct types remain.\n    while (distinct > k) {\n      const removed = s[left++];\n      if (--count[removed] === 0) distinct--;\n    }\n    // The repaired window is valid, so its width can improve the answer.\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(k)"
            },
            {
                label: "Brute force",
                approach: "Try each start, extending while the distinct count stays within k.",
                js: "function longestKDistinct(s, k) {\n  let best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const seen = new Set();\n    for (let j = i; j < s.length; j++) {\n      seen.add(s[j]);\n      if (seen.size > k) break;\n      best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
                ts: "function longestKDistinct(s: string, k: number): number {\n  let best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const seen = new Set<string>();\n    for (let j = i; j < s.length; j++) {\n      seen.add(s[j]);\n      if (seen.size > k) break;\n      best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function longestKDistinct(s, k) {\n  let best = 0;\n  // Treat every index as the start of a candidate substring.\n  for (let start = 0; start < s.length; start++) {\n    const seen = new Set();\n    // Extend this candidate while tracking its distinct characters.\n    for (let end = start; end < s.length; end++) {\n      seen.add(s[end]);\n      // Further extension cannot reduce the number of distinct characters.\n      if (seen.size > k) break;\n      best = Math.max(best, end - start + 1);\n    }\n  }\n  return best;\n}\n",
                    ts: "function longestKDistinct(s: string, k: number): number {\n  let best = 0;\n  // Treat every index as the start of a candidate substring.\n  for (let start = 0; start < s.length; start++) {\n    const seen = new Set<string>();\n    // Extend this candidate while tracking its distinct characters.\n    for (let end = start; end < s.length; end++) {\n      seen.add(s[end]);\n      // Further extension cannot reduce the number of distinct characters.\n      if (seen.size > k) break;\n      best = Math.max(best, end - start + 1);\n    }\n  }\n  return best;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "sw-window-sums",
        slug: "window-sums",
        title: "Window Sums",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the sum of each contiguous window of size `k`, left to right.",
        examples: [
            {
                input: "[1,2,3,4], 2",
                output: "[3,5,7]"
            },
            {
                input: "[5], 1",
                output: "[5]"
            },
            {
                input: "[1,2,3], 3",
                output: "[6]"
            }
        ],
        constraints: [
            "1 <= k <= nums.length <= 10000"
        ],
        functionName: "windowSums",
        starter: {
            js: "function windowSums(nums, k) {\n  // Sum of each size-k window.\n}\n",
            ts: "function windowSums(nums: number[], k: number): number[] {\n  // Sum of each size-k window.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    2
                ],
                expected: [
                    3,
                    5,
                    7
                ]
            },
            {
                args: [
                    [
                        5
                    ],
                    1
                ],
                expected: [
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
                    3
                ],
                expected: [
                    6
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        1,
                        1,
                        1
                    ],
                    2
                ],
                expected: [
                    2,
                    2,
                    2
                ]
            },
            {
                args: [
                    [
                        2,
                        4,
                        6
                    ],
                    2
                ],
                expected: [
                    6,
                    10
                ]
            },
            {
                args: [
                    [
                        -1,
                        -2,
                        -3
                    ],
                    1
                ],
                expected: [
                    -1,
                    -2,
                    -3
                ]
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
                expected: [
                    15
                ]
            },
            {
                args: [
                    [
                        0,
                        0,
                        0
                    ],
                    2
                ],
                expected: [
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        3,
                        1,
                        4,
                        1
                    ],
                    3
                ],
                expected: [
                    8,
                    6
                ]
            }
        ],
        hints: [
            "Compute the first window, then slide adjusting by one in and one out.",
            "Push the running sum after each slide.",
            "sum += nums[i] - nums[i - k]; out.push(sum)."
        ],
        walkthrough: [
            {
                title: "Compute the first window once",
                body: "Add the first `k` values and store that sum as the first answer."
            },
            {
                title: "Slide by replacing one value",
                body: "For every rightward move, add the incoming value and subtract the value that falls out at index `right - k`."
            },
            {
                title: "Record every fixed-size sum",
                body: "Append the running total after each valid slide so the output remains in left-to-right window order."
            },
            {
                title: "Return the complete list",
                body: "This visits every size-`k` window while doing constant work for each move."
            }
        ],
        solutions: [
            {
                label: "Slide and record",
                approach: "Maintain the running window sum, pushing each value.",
                js: "function windowSums(nums, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  const out = [sum];\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    out.push(sum);\n  }\n  return out;\n}\n",
                ts: "function windowSums(nums: number[], k: number): number[] {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += nums[i];\n  const out = [sum];\n  for (let i = k; i < nums.length; i++) {\n    sum += nums[i] - nums[i - k];\n    out.push(sum);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function windowSums(nums, k) {\n  let sum = 0;\n  // Build the first window.\n  for (let i = 0; i < k; i++) sum += nums[i];\n  const out = [sum];\n  // Slide and record every following window.\n  for (let right = k; right < nums.length; right++) {\n    sum += nums[right] - nums[right - k];\n    out.push(sum);\n  }\n  return out;\n}\n",
                    ts: "function windowSums(nums: number[], k: number): number[] {\n  let sum = 0;\n  // Build the first window.\n  for (let i = 0; i < k; i++) sum += nums[i];\n  const out = [sum];\n  // Slide and record every following window.\n  for (let right = k; right < nums.length; right++) {\n    sum += nums[right] - nums[right - k];\n    out.push(sum);\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Slice each window",
                approach: "Sum each window slice directly.",
                js: "function windowSums(nums, k) {\n  const out = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    out.push(nums.slice(i, i + k).reduce((a, b) => a + b, 0));\n  }\n  return out;\n}\n",
                ts: "function windowSums(nums: number[], k: number): number[] {\n  const out: number[] = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    out.push(nums.slice(i, i + k).reduce((a, b) => a + b, 0));\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function windowSums(nums, k) {\n  const out = [];\n  // Choose every legal window start.\n  for (let start = 0; start + k <= nums.length; start++) {\n    // Slice and sum this one window directly.\n    out.push(nums.slice(start, start + k).reduce((sum, value) => sum + value, 0));\n  }\n  return out;\n}\n",
                    ts: "function windowSums(nums: number[], k: number): number[] {\n  const out: number[] = [];\n  // Choose every legal window start.\n  for (let start = 0; start + k <= nums.length; start++) {\n    // Slice and sum this one window directly.\n    out.push(nums.slice(start, start + k).reduce((sum, value) => sum + value, 0));\n  }\n  return out;\n}\n"
                },
                time: "O(n·k)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "sw-count-anagrams",
        slug: "count-anagram-windows",
        title: "Count Anagram Windows",
        difficulty: "medium",
        patternIds: P,
        statement: "Return how many substrings of `s` are anagrams of `p` (same length, same character counts).",
        examples: [
            {
                input: '"cbaebabacd", "abc"',
                output: "2"
            },
            {
                input: '"abab", "ab"',
                output: "3"
            },
            {
                input: '"", "a"',
                output: "0"
            }
        ],
        constraints: [
            "0 <= s.length, p.length <= 10000"
        ],
        functionName: "countAnagramWindows",
        starter: {
            js: "function countAnagramWindows(s, p) {\n  // Count substrings of s that are anagrams of p.\n}\n",
            ts: "function countAnagramWindows(s: string, p: string): number {\n  // Count substrings of s that are anagrams of p.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "cbaebabacd",
                    "abc"
                ],
                expected: 2
            },
            {
                args: [
                    "abab",
                    "ab"
                ],
                expected: 3
            },
            {
                args: [
                    "",
                    "a"
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    "aa",
                    "aa"
                ],
                expected: 1
            },
            {
                args: [
                    "aaa",
                    "aa"
                ],
                expected: 2
            },
            {
                args: [
                    "abc",
                    "xyz"
                ],
                expected: 0
            },
            {
                args: [
                    "aabb",
                    "ab"
                ],
                expected: 1
            },
            {
                args: [
                    "hello",
                    "ol"
                ],
                expected: 1
            },
            {
                args: [
                    "abab",
                    "ba"
                ],
                expected: 3
            }
        ],
        hints: [
            "Slide a window the size of p across s, keeping character counts.",
            "The window is an anagram of p exactly when their counts match.",
            "Add the new char, remove the char leaving the window, then compare counts."
        ],
        walkthrough: [
            {
                title: "Fix the window length",
                body: "Only substrings with the same length as `p` can be anagrams, so slide a window of exactly that size across `s`."
            },
            {
                title: "Compare character frequencies",
                body: "Build the target counts once. Maintain counts for the current window as a character enters and another leaves."
            },
            {
                title: "Count matching windows",
                body: "When the current counts equal the target counts, increment the answer. Continue sliding because anagrams can overlap."
            },
            {
                title: "Handle impossible lengths",
                body: "An empty pattern or a pattern longer than the source cannot form a valid window here."
            }
        ],
        solutions: [
            {
                label: "Sliding count window",
                approach: "Maintain the window's character counts and compare to p's.",
                js: "function countAnagramWindows(s, p) {\n  const L = p.length;\n  if (L === 0 || L > s.length) return 0;\n  const need = {}, win = {};\n  for (const c of p) need[c] = (need[c] || 0) + 1;\n  const match = () => {\n    for (const c in need) if ((win[c] || 0) !== need[c]) return false;\n    for (const c in win) if ((need[c] || 0) !== win[c]) return false;\n    return true;\n  };\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    win[s[i]] = (win[s[i]] || 0) + 1;\n    if (i >= L) { const o = s[i - L]; win[o]--; if (win[o] === 0) delete win[o]; }\n    if (i >= L - 1 && match()) count++;\n  }\n  return count;\n}\n",
                ts: "function countAnagramWindows(s: string, p: string): number {\n  const L = p.length;\n  if (L === 0 || L > s.length) return 0;\n  const need: Record<string, number> = {}, win: Record<string, number> = {};\n  for (const c of p) need[c] = (need[c] || 0) + 1;\n  const match = () => {\n    for (const c in need) if ((win[c] || 0) !== need[c]) return false;\n    for (const c in win) if ((need[c] || 0) !== win[c]) return false;\n    return true;\n  };\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    win[s[i]] = (win[s[i]] || 0) + 1;\n    if (i >= L) { const o = s[i - L]; win[o]--; if (win[o] === 0) delete win[o]; }\n    if (i >= L - 1 && match()) count++;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countAnagramWindows(s, p) {\n  const length = p.length;\n  if (length === 0 || length > s.length) return 0;\n  // Count the required letters once.\n  const need = {};\n  for (const char of p) need[char] = (need[char] || 0) + 1;\n  const window = {};\n  let matches = 0;\n  for (let right = 0; right < s.length; right++) {\n    window[s[right]] = (window[s[right]] || 0) + 1;\n    // Remove the character that would make the window too long.\n    if (right >= length) { const left = s[right - length]; if (--window[left] === 0) delete window[left]; }\n    // Equal frequency maps mean this fixed-length window is an anagram.\n    if (right >= length - 1 && Object.keys(need).every((c) => window[c] === need[c]) && Object.keys(window).every((c) => need[c] === window[c])) matches++;\n  }\n  return matches;\n}\n",
                    ts: "function countAnagramWindows(s: string, p: string): number {\n  const length = p.length;\n  if (length === 0 || length > s.length) return 0;\n  // Count the target pattern's required character frequencies once.\n  const need: Record<string, number> = {};\n  for (const char of p) need[char] = (need[char] || 0) + 1;\n  const window: Record<string, number> = {};\n  let matches = 0;\n  // Grow a fixed-length window across the source string.\n  for (let right = 0; right < s.length; right++) {\n    window[s[right]] = (window[s[right]] || 0) + 1;\n    // Evict the character that falls just outside the pattern-sized window.\n    if (right >= length) { const left = s[right - length]; if (--window[left] === 0) delete window[left]; }\n    // Matching frequency maps identify an anagram window, including overlaps.\n    if (right >= length - 1 && Object.keys(need).every((c) => window[c] === need[c]) && Object.keys(window).every((c) => need[c] === window[c])) matches++;\n  }\n  return matches;\n}\n"
                },
                time: "O(n·Σ)",
                space: "O(Σ)"
            },
            {
                label: "Check each window by sorting",
                approach: "Sort each window and p, comparing the canonical forms.",
                js: "function countAnagramWindows(s, p) {\n  const L = p.length;\n  if (L === 0 || L > s.length) return 0;\n  const key = (str) => str.split('').sort().join('');\n  const target = key(p);\n  let count = 0;\n  for (let i = 0; i + L <= s.length; i++) {\n    if (key(s.slice(i, i + L)) === target) count++;\n  }\n  return count;\n}\n",
                ts: "function countAnagramWindows(s: string, p: string): number {\n  const L = p.length;\n  if (L === 0 || L > s.length) return 0;\n  const key = (str: string) => str.split('').sort().join('');\n  const target = key(p);\n  let count = 0;\n  for (let i = 0; i + L <= s.length; i++) {\n    if (key(s.slice(i, i + L)) === target) count++;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countAnagramWindows(s, p) {\n  const length = p.length;\n  if (length === 0 || length > s.length) return 0;\n  // Sorting gives every anagram the same canonical representation.\n  const key = (text) => text.split('').sort().join('');\n  const target = key(p);\n  let count = 0;\n  for (let start = 0; start + length <= s.length; start++) {\n    if (key(s.slice(start, start + length)) === target) count++;\n  }\n  return count;\n}\n",
                    ts: "function countAnagramWindows(s: string, p: string): number {\n  const length = p.length;\n  if (length === 0 || length > s.length) return 0;\n  // Sorting gives every anagram the same canonical representation.\n  const key = (text: string) => text.split('').sort().join('');\n  const target = key(p);\n  let count = 0;\n  for (let start = 0; start + length <= s.length; start++) {\n    if (key(s.slice(start, start + length)) === target) count++;\n  }\n  return count;\n}\n"
                },
                time: "O(n·L log L)",
                space: "O(L)"
            }
        ]
    },
    {
        id: "sw-char-replacement",
        slug: "longest-repeating-replacement",
        title: "Longest Repeating Replacement",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the length of the longest substring of `s` that can be made all one character by replacing at most `k` characters.",
        examples: [
            {
                input: '"ABAB", 2',
                output: "4"
            },
            {
                input: '"AABABBA", 1',
                output: "4"
            },
            {
                input: '"", 0',
                output: "0"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000",
            "0 <= k"
        ],
        functionName: "characterReplacement",
        starter: {
            js: "function characterReplacement(s, k) {\n  // Longest same-char run after <= k replacements.\n}\n",
            ts: "function characterReplacement(s: string, k: number): number {\n  // Longest same-char run after <= k replacements.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "ABAB",
                    2
                ],
                expected: 4
            },
            {
                args: [
                    "AABABBA",
                    1
                ],
                expected: 4
            },
            {
                args: [
                    "",
                    0
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    "A",
                    0
                ],
                expected: 1
            },
            {
                args: [
                    "AAAA",
                    0
                ],
                expected: 4
            },
            {
                args: [
                    "ABCDE",
                    1
                ],
                expected: 2
            },
            {
                args: [
                    "AABA",
                    0
                ],
                expected: 2
            },
            {
                args: [
                    "BBBB",
                    2
                ],
                expected: 4
            },
            {
                args: [
                    "ABBB",
                    1
                ],
                expected: 4
            }
        ],
        hints: [
            "A window is valid if (its length − count of its most frequent char) ≤ k replacements.",
            "Track the max frequency of any character in the window as you expand.",
            "while (windowLen - maxFreq > k) shrink from the left."
        ],
        walkthrough: [
            {
                title: "Measure the replacements a window needs",
                body: "Keep counts for the current window. If its most frequent character appears `maxFreq` times, every other character would need replacement."
            },
            {
                title: "Expand and test the budget",
                body: "After adding a character, the required replacements are `window length - maxFreq`. The window is valid while that value is at most `k`."
            },
            {
                title: "Shrink invalid windows",
                body: "When the replacement budget is exceeded, remove characters from the left until the window becomes valid again."
            },
            {
                title: "Record the widest valid window",
                body: "Every repaired window can be made uniform with the allowed replacements, so update the maximum width."
            }
        ],
        solutions: [
            {
                label: "Sliding window on max frequency",
                approach: "Keep the window valid: fillers needed = length − most common char count.",
                js: "function characterReplacement(s, k) {\n  const count = {};\n  let left = 0, maxFreq = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    count[c] = (count[c] || 0) + 1;\n    maxFreq = Math.max(maxFreq, count[c]);\n    while ((right - left + 1) - maxFreq > k) { count[s[left]]--; left++; }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
                ts: "function characterReplacement(s: string, k: number): number {\n  const count: Record<string, number> = {};\n  let left = 0, maxFreq = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    count[c] = (count[c] || 0) + 1;\n    maxFreq = Math.max(maxFreq, count[c]);\n    while ((right - left + 1) - maxFreq > k) { count[s[left]]--; left++; }\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function characterReplacement(s, k) {\n  const count = {};\n  let left = 0, maxFreq = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const char = s[right];\n    count[char] = (count[char] || 0) + 1;\n    maxFreq = Math.max(maxFreq, count[char]);\n    // All non-majority characters would need replacement.\n    while ((right - left + 1) - maxFreq > k) count[s[left++]]--;\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n",
                    ts: "function characterReplacement(s: string, k: number): number {\n  const count: Record<string, number> = {};\n  let left = 0, maxFreq = 0, best = 0;\n  for (let right = 0; right < s.length; right++) {\n    const char = s[right];\n    count[char] = (count[char] || 0) + 1;\n    maxFreq = Math.max(maxFreq, count[char]);\n    // All non-majority characters would need replacement.\n    while ((right - left + 1) - maxFreq > k) count[s[left++]]--;\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(Σ)"
            },
            {
                label: "Brute force",
                approach: "For each window, check whether ≤ k replacements suffice.",
                js: "function characterReplacement(s, k) {\n  let best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const count = {};\n    let maxFreq = 0;\n    for (let j = i; j < s.length; j++) {\n      count[s[j]] = (count[s[j]] || 0) + 1;\n      maxFreq = Math.max(maxFreq, count[s[j]]);\n      if ((j - i + 1) - maxFreq <= k) best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
                ts: "function characterReplacement(s: string, k: number): number {\n  let best = 0;\n  for (let i = 0; i < s.length; i++) {\n    const count: Record<string, number> = {};\n    let maxFreq = 0;\n    for (let j = i; j < s.length; j++) {\n      count[s[j]] = (count[s[j]] || 0) + 1;\n      maxFreq = Math.max(maxFreq, count[s[j]]);\n      if ((j - i + 1) - maxFreq <= k) best = Math.max(best, j - i + 1);\n    }\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function characterReplacement(s, k) {\n  let best = 0;\n  for (let start = 0; start < s.length; start++) {\n    const count = {};\n    let maxFreq = 0;\n    for (let end = start; end < s.length; end++) {\n      count[s[end]] = (count[s[end]] || 0) + 1;\n      maxFreq = Math.max(maxFreq, count[s[end]]);\n      // The other characters are exactly the replacements required.\n      if (end - start + 1 - maxFreq <= k) best = Math.max(best, end - start + 1);\n    }\n  }\n  return best;\n}\n",
                    ts: "function characterReplacement(s: string, k: number): number {\n  let best = 0;\n  for (let start = 0; start < s.length; start++) {\n    const count: Record<string, number> = {};\n    let maxFreq = 0;\n    for (let end = start; end < s.length; end++) {\n      count[s[end]] = (count[s[end]] || 0) + 1;\n      maxFreq = Math.max(maxFreq, count[s[end]]);\n      // The other characters are exactly the replacements required.\n      if (end - start + 1 - maxFreq <= k) best = Math.max(best, end - start + 1);\n    }\n  }\n  return best;\n}\n"
                },
                time: "O(n²)",
                space: "O(Σ)"
            }
        ]
    },
    {
        id: "sw-product-less-than-k",
        slug: "subarray-product-less-than-k",
        title: "Subarray Product Less Than K",
        difficulty: "medium",
        patternIds: P,
        statement: "Given positive integers, return the number of contiguous subarrays whose product is strictly less than `k`.",
        examples: [
            {
                input: "[10,5,2,6], 100",
                output: "8"
            },
            {
                input: "[1,2,3], 0",
                output: "0"
            },
            {
                input: "[1,1,1], 2",
                output: "6"
            }
        ],
        constraints: [
            "all values are positive integers",
            "0 <= nums.length <= 10000"
        ],
        functionName: "numSubarrayProductLessThanK",
        starter: {
            js: "function numSubarrayProductLessThanK(nums, k) {\n  // Count subarrays with product < k.\n}\n",
            ts: "function numSubarrayProductLessThanK(nums: number[], k: number): number {\n  // Count subarrays with product < k.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        10,
                        5,
                        2,
                        6
                    ],
                    100
                ],
                expected: 8
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
                expected: 0
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
                expected: 6
            }
        ],
        hidden: [
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
                        2
                    ],
                    3
                ],
                expected: 1
            },
            {
                args: [
                    [
                        2
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
                        3
                    ],
                    7
                ],
                expected: 6
            },
            {
                args: [
                    [
                        10,
                        10
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
                        3,
                        4
                    ],
                    10
                ],
                expected: 7
            }
        ],
        hints: [
            "Shrink the window from the left whenever the product reaches k.",
            "Every new right endpoint adds (right - left + 1) valid subarrays ending there.",
            "If k <= 1 the answer is 0, since positive products are at least 1."
        ],
        walkthrough: [
            {
                title: "Handle the impossible threshold",
                body: "All inputs are positive integers, so every non-empty product is at least 1. If `k` is 1 or smaller, return 0 immediately."
            },
            {
                title: "Maintain a valid product window",
                body: "Multiply in each right-side value. While the product is too large, divide out left-side values and advance the left edge."
            },
            {
                title: "Count all endings at once",
                body: "After repairing the window, every subarray ending at the right edge and starting from `left` through `right` has product below `k`."
            },
            {
                title: "Accumulate those valid choices",
                body: "Add `right - left + 1` for each right endpoint instead of enumerating every subarray separately."
            }
        ],
        solutions: [
            {
                label: "Shrinking product window",
                approach: "Keep the window product below k; count subarrays ending at each right.",
                js: "function numSubarrayProductLessThanK(nums, k) {\n  if (k <= 1) return 0;\n  let prod = 1, left = 0, count = 0;\n  for (let right = 0; right < nums.length; right++) {\n    prod *= nums[right];\n    while (prod >= k) { prod /= nums[left]; left++; }\n    count += right - left + 1;\n  }\n  return count;\n}\n",
                ts: "function numSubarrayProductLessThanK(nums: number[], k: number): number {\n  if (k <= 1) return 0;\n  let prod = 1, left = 0, count = 0;\n  for (let right = 0; right < nums.length; right++) {\n    prod *= nums[right];\n    while (prod >= k) { prod /= nums[left]; left++; }\n    count += right - left + 1;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function numSubarrayProductLessThanK(nums, k) {\n  // Positive products cannot be smaller than k when k is 1 or less.\n  if (k <= 1) return 0;\n  let product = 1, left = 0, count = 0;\n  for (let right = 0; right < nums.length; right++) {\n    product *= nums[right];\n    // Shrink until every subarray ending here is valid.\n    while (product >= k) product /= nums[left++];\n    // Choose any start from left through right.\n    count += right - left + 1;\n  }\n  return count;\n}\n",
                    ts: "function numSubarrayProductLessThanK(nums: number[], k: number): number {\n  // Positive products cannot be smaller than k when k is 1 or less.\n  if (k <= 1) return 0;\n  let product = 1, left = 0, count = 0;\n  for (let right = 0; right < nums.length; right++) {\n    product *= nums[right];\n    // Shrink until every subarray ending here is valid.\n    while (product >= k) product /= nums[left++];\n    // Choose any start from left through right.\n    count += right - left + 1;\n  }\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Brute force",
                approach: "Extend each start while the product stays below k.",
                js: "function numSubarrayProductLessThanK(nums, k) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let prod = 1;\n    for (let j = i; j < nums.length; j++) {\n      prod *= nums[j];\n      if (prod >= k) break;\n      count++;\n    }\n  }\n  return count;\n}\n",
                ts: "function numSubarrayProductLessThanK(nums: number[], k: number): number {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let prod = 1;\n    for (let j = i; j < nums.length; j++) {\n      prod *= nums[j];\n      if (prod >= k) break;\n      count++;\n    }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function numSubarrayProductLessThanK(nums, k) {\n  let count = 0;\n  for (let start = 0; start < nums.length; start++) {\n    let product = 1;\n    for (let end = start; end < nums.length; end++) {\n      product *= nums[end];\n      // Positive inputs mean later extensions cannot repair an oversized product.\n      if (product >= k) break;\n      count++;\n    }\n  }\n  return count;\n}\n",
                    ts: "function numSubarrayProductLessThanK(nums: number[], k: number): number {\n  let count = 0;\n  for (let start = 0; start < nums.length; start++) {\n    let product = 1;\n    for (let end = start; end < nums.length; end++) {\n      product *= nums[end];\n      // Positive inputs mean later extensions cannot repair an oversized product.\n      if (product >= k) break;\n      count++;\n    }\n  }\n  return count;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    }
];
const slidingWindowProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const slidingWindowMcqs = [
    {
        id: "s4-sw-time",
        kind: "mcq",
        prompt: "A sliding window that expands and contracts across an array visits each element a constant number of times, so it runs in:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "Both window edges only move forward, giving a linear total."
    },
    {
        id: "s4-sw-fixed",
        kind: "mcq",
        prompt: "Re-summing each fixed-size window from scratch is O(n·k); sliding the window instead makes each step:",
        options: [
            "O(1)",
            "O(log k)",
            "O(k)",
            "O(n)"
        ],
        answerIndex: 0,
        explanation: "Add the entering element and subtract the leaving one — constant work per slide."
    }
];
const slidingWindowModule = {
    id: "m-pat-sliding-window",
    stageId: S,
    title: "Sliding Window",
    kind: "patternModule",
    summary: "A moving sub-range over a sequence — fixed or variable width — that avoids recomputation.",
    lessonSections: [
        {
            heading: "A window that moves",
            body: `The sliding-window pattern maintains a contiguous sub-range and updates it incrementally as it moves, instead of recomputing from scratch. For a **fixed** width, add the entering element and subtract the leaving one — O(1) per step.

\`\`\`js
// Max sum of any window of size 3
function maxSum3(nums) {
  let sum = nums[0] + nums[1] + nums[2], best = sum;
  for (let i = 3; i < nums.length; i++) {
    sum += nums[i] - nums[i - 3];
    best = Math.max(best, sum);
  }
  return best;
}
console.log(maxSum3([2, 1, 5, 1, 3, 2])); // 9
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for a sliding window when the problem asks for:

- the best/shortest/longest **contiguous** subarray or substring,
- something about a **fixed-size** window (sums, averages, maxima),
- a **variable** window constrained by a rule ("at most k distinct", "sum ≥ target", "≤ k replacements"),
- counting substrings/subarrays that satisfy a monotone condition.`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Variable window: grow right, shrink left while invalid
let left = 0;
for (let right = 0; right < arr.length; right++) {
  add(arr[right]);
  while (!valid()) { remove(arr[left]); left++; }
  best = Math.max(best, right - left + 1);
}
\`\`\`

**Pitfalls:** forgetting to shrink (window never contracts); mishandling the exact moment a window becomes valid vs. invalid; off-by-one on \`right - left + 1\`. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "sw-max-sum-k",
    drillProblemIds: [
        "sw-max-sum-k",
        "sw-min-sum-k",
        "sw-longest-unique",
        "sw-min-subarray-len",
        "sw-longest-ones-k",
        "sw-longest-k-distinct"
    ],
    testPoolProblemIds: [
        "sw-window-sums",
        "sw-count-anagrams",
        "sw-char-replacement",
        "sw-product-less-than-k"
    ],
    complexityQuestionIds: [
        "s4-sw-time",
        "s4-sw-fixed"
    ],
    badgeId: "badge-pat-sliding-window",
    prerequisiteModuleIds: [
        "m-pat-prefix-sum"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage4/twoPointers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "twoPointerMcqs",
    ()=>twoPointerMcqs,
    "twoPointerModule",
    ()=>twoPointerModule,
    "twoPointerProblems",
    ()=>twoPointerProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s4";
const P = [
    "two-pointers"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "tp-pair-sum-sorted",
        slug: "pair-sum-sorted",
        title: "Pair Sum (Sorted)",
        difficulty: "easy",
        patternIds: P,
        statement: "Given a list sorted ascending and a `target`, return the indices `[i, j]` (i < j) of a pair summing to target using two pointers from the ends, or an empty array.",
        examples: [
            {
                input: "[2,7,11,15], 9",
                output: "[0,1]"
            },
            {
                input: "[1,2,3], 7",
                output: "[]"
            },
            {
                input: "[1,2,3,4], 5",
                output: "[0,3]"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "return the pointer-collision pair"
        ],
        functionName: "pairSumSorted",
        starter: {
            js: "function pairSumSorted(sorted, target) {\n  // Two-pointer pair summing to target, or [].\n}\n",
            ts: "function pairSumSorted(sorted: number[], target: number): number[] {\n  // Two-pointer pair summing to target, or [].\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        7,
                        11,
                        15
                    ],
                    9
                ],
                expected: [
                    0,
                    1
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    7
                ],
                expected: []
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
                expected: [
                    0,
                    3
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [],
                    5
                ],
                expected: []
            },
            {
                args: [
                    [
                        1
                    ],
                    1
                ],
                expected: []
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    3
                ],
                expected: [
                    0,
                    1
                ]
            },
            {
                args: [
                    [
                        -3,
                        0,
                        3
                    ],
                    0
                ],
                expected: [
                    0,
                    2
                ]
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
                    9
                ],
                expected: [
                    3,
                    4
                ]
            },
            {
                args: [
                    [
                        0,
                        0
                    ],
                    0
                ],
                expected: [
                    0,
                    1
                ]
            }
        ],
        hints: [
            "Start one pointer at each end. Their sum tells you which pointer to move.",
            "If the sum is too small, move the left pointer right; if too big, move the right pointer left.",
            "while (lo < hi) { s = a[lo]+a[hi]; if (s===target) return [lo,hi]; s<target?lo++:hi--; }"
        ],
        walkthrough: [
            {
                title: "Use the sorted order",
                body: "Put one pointer at the smallest value and one at the largest. Their sum tells you which direction can still improve the result."
            },
            {
                title: "Move only the pointer that can help",
                body: "If the sum is too small, moving the right pointer left would only reduce it, so move the left pointer right. If the sum is too large, move the right pointer left."
            },
            {
                title: "Stop before pointers cross",
                body: "Check each pair while the left index is less than the right index. This guarantees two distinct positions and avoids revisiting pairs."
            },
            {
                title: "Return the matching indices",
                body: "Return as soon as the sum equals the target. If the pointers meet without a match, no remaining pair is possible."
            }
        ],
        solutions: [
            {
                label: "Two pointers",
                approach: "Converge from both ends, steering by the current sum.",
                js: "function pairSumSorted(sorted, target) {\n  let lo = 0, hi = sorted.length - 1;\n  while (lo < hi) {\n    const s = sorted[lo] + sorted[hi];\n    if (s === target) return [lo, hi];\n    if (s < target) lo++; else hi--;\n  }\n  return [];\n}\n",
                ts: "function pairSumSorted(sorted: number[], target: number): number[] {\n  let lo = 0, hi = sorted.length - 1;\n  while (lo < hi) {\n    const s = sorted[lo] + sorted[hi];\n    if (s === target) return [lo, hi];\n    if (s < target) lo++; else hi--;\n  }\n  return [];\n}\n",
                commentedCode: {
                    js: "function pairSumSorted(sorted, target) {\n  // Start with the smallest and largest possible values.\n  let lo = 0;\n  let hi = sorted.length - 1;\n\n  // Keep the pair at two distinct positions.\n  while (lo < hi) {\n    // Measure how far the current pair is from the target.\n    const sum = sorted[lo] + sorted[hi];\n    if (sum === target) {\n      return [lo, hi];\n    }\n    // In sorted input, a larger left value is the only way to raise this sum.\n    if (sum < target) {\n      lo++;\n    } else {\n      // A smaller right value is the only way to lower this sum.\n      hi--;\n    }\n  }\n\n  // Every possible end-to-end pair was ruled out.\n  return [];\n}\n",
                    ts: "function pairSumSorted(sorted: number[], target: number): number[] {\n  // Start with the smallest and largest possible values.\n  let lo = 0;\n  let hi = sorted.length - 1;\n\n  // Keep the pair at two distinct positions.\n  while (lo < hi) {\n    // Measure how far the current pair is from the target.\n    const sum = sorted[lo] + sorted[hi];\n    if (sum === target) {\n      return [lo, hi];\n    }\n    // In sorted input, a larger left value is the only way to raise this sum.\n    if (sum < target) {\n      lo++;\n    } else {\n      // A smaller right value is the only way to lower this sum.\n      hi--;\n    }\n  }\n\n  // Every possible end-to-end pair was ruled out.\n  return [];\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Brute force",
                approach: "Scan every pair in index order — returns the same lowest-index pair.",
                js: "function pairSumSorted(sorted, target) {\n  for (let i = 0; i < sorted.length; i++) {\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) return [i, j];\n    }\n  }\n  return [];\n}\n",
                ts: "function pairSumSorted(sorted: number[], target: number): number[] {\n  for (let i = 0; i < sorted.length; i++) {\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) return [i, j];\n    }\n  }\n  return [];\n}\n",
                commentedCode: {
                    js: "function pairSumSorted(sorted, target) {\n  // Choose the first index of each candidate pair.\n  for (let i = 0; i < sorted.length; i++) {\n    // Pair it with every later index so positions stay distinct.\n    for (let j = i + 1; j < sorted.length; j++) {\n      // Return the first pair whose values hit the target.\n      if (sorted[i] + sorted[j] === target) {\n        return [i, j];\n      }\n    }\n  }\n\n  // No pair added to the target.\n  return [];\n}\n",
                    ts: "function pairSumSorted(sorted: number[], target: number): number[] {\n  // Choose the first index of each candidate pair.\n  for (let i = 0; i < sorted.length; i++) {\n    // Pair it with every later index so positions stay distinct.\n    for (let j = i + 1; j < sorted.length; j++) {\n      // Return the first pair whose values hit the target.\n      if (sorted[i] + sorted[j] === target) {\n        return [i, j];\n      }\n    }\n  }\n\n  // No pair added to the target.\n  return [];\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "tp-reverse-array",
        slug: "reverse-in-place",
        title: "Reverse an Array",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the list reversed, using two pointers swapping from both ends inward.",
        examples: [
            {
                input: "[1,2,3]",
                output: "[3,2,1]"
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
            "0 <= nums.length <= 10000"
        ],
        functionName: "reverseInPlace",
        starter: {
            js: "function reverseInPlace(nums) {\n  // Reverse using two pointers.\n}\n",
            ts: "function reverseInPlace(nums: number[]): number[] {\n  // Reverse using two pointers.\n  return [];\n}\n"
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
                expected: [
                    3,
                    2,
                    1
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
                        1,
                        2
                    ]
                ],
                expected: [
                    2,
                    1
                ]
            },
            {
                args: [
                    [
                        5,
                        5,
                        6
                    ]
                ],
                expected: [
                    6,
                    5,
                    5
                ]
            },
            {
                args: [
                    [
                        -1,
                        0,
                        1
                    ]
                ],
                expected: [
                    1,
                    0,
                    -1
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                ],
                expected: [
                    5,
                    4,
                    3,
                    2,
                    1
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
                        0,
                        0
                    ]
                ],
                expected: [
                    0,
                    0
                ]
            }
        ],
        hints: [
            "Swap the first and last, then move both pointers inward.",
            "Stop when the pointers meet in the middle.",
            "while (i < j) { swap a[i], a[j]; i++; j--; }"
        ],
        walkthrough: [
            {
                title: "Work in symmetric pairs",
                body: "The first element belongs at the end, and the last belongs at the start. Keep one pointer at each of those positions."
            },
            {
                title: "Swap, then shrink the unsolved region",
                body: "Exchange the two pointed values. Both positions are now final, so move the left pointer right and the right pointer left."
            },
            {
                title: "Stop at the middle",
                body: "When the pointers meet or cross, every symmetric pair has already been swapped. A middle element in an odd-length list stays where it is."
            },
            {
                title: "Keep the caller's input safe",
                body: "This exercise returns a reversed list, so first copy the input before performing the swaps."
            }
        ],
        solutions: [
            {
                label: "Two-pointer swap",
                approach: "Exchange symmetric positions on a copy.",
                js: "function reverseInPlace(nums) {\n  const a = [...nums];\n  let i = 0, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
                ts: "function reverseInPlace(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0, j = a.length - 1;\n  while (i < j) { const t = a[i]; a[i] = a[j]; a[j] = t; i++; j--; }\n  return a;\n}\n",
                commentedCode: {
                    js: "function reverseInPlace(nums) {\n  // Copy so the original input array is not mutated.\n  const a = [...nums];\n  // Point at the first and last unsolved positions.\n  let i = 0;\n  let j = a.length - 1;\n\n  // Each swap fixes one symmetric pair.\n  while (i < j) {\n    // Save the left value before overwriting it.\n    const temp = a[i];\n    a[i] = a[j];\n    a[j] = temp;\n    // Move inward to the next pair.\n    i++;\n    j--;\n  }\n\n  // The copy is now reversed.\n  return a;\n}\n",
                    ts: "function reverseInPlace(nums: number[]): number[] {\n  // Copy so the original input array is not mutated.\n  const a = [...nums];\n  // Point at the first and last unsolved positions.\n  let i = 0;\n  let j = a.length - 1;\n\n  // Each swap fixes one symmetric pair.\n  while (i < j) {\n    // Save the left value before overwriting it.\n    const temp = a[i];\n    a[i] = a[j];\n    a[j] = temp;\n    // Move inward to the next pair.\n    i++;\n    j--;\n  }\n\n  // The copy is now reversed.\n  return a;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Built-in reverse",
                approach: "Reverse a copy with the standard method.",
                js: "function reverseInPlace(nums) {\n  return [...nums].reverse();\n}\n",
                ts: "function reverseInPlace(nums: number[]): number[] {\n  return [...nums].reverse();\n}\n",
                commentedCode: {
                    js: "function reverseInPlace(nums) {\n  // Copy first because reverse mutates the array it receives.\n  return [...nums].reverse();\n}\n",
                    ts: "function reverseInPlace(nums: number[]): number[] {\n  // Copy first because reverse mutates the array it receives.\n  return [...nums].reverse();\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tp-is-palindrome",
        slug: "two-pointer-palindrome",
        title: "Palindrome Check",
        difficulty: "easy",
        patternIds: P,
        statement: "Return `true` if the string reads the same forwards and backwards (exact characters).",
        examples: [
            {
                input: '"racecar"',
                output: "true"
            },
            {
                input: '"hello"',
                output: "false"
            },
            {
                input: '""',
                output: "true"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000"
        ],
        functionName: "isPalindromeTP",
        starter: {
            js: "function isPalindromeTP(s) {\n  // Two-pointer palindrome check.\n}\n",
            ts: "function isPalindromeTP(s: string): boolean {\n  // Two-pointer palindrome check.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    "racecar"
                ],
                expected: true
            },
            {
                args: [
                    "hello"
                ],
                expected: false
            },
            {
                args: [
                    ""
                ],
                expected: true
            }
        ],
        hidden: [
            {
                args: [
                    "a"
                ],
                expected: true
            },
            {
                args: [
                    "ab"
                ],
                expected: false
            },
            {
                args: [
                    "abba"
                ],
                expected: true
            },
            {
                args: [
                    "Aba"
                ],
                expected: false
            },
            {
                args: [
                    "12321"
                ],
                expected: true
            },
            {
                args: [
                    "1231"
                ],
                expected: false
            }
        ],
        hints: [
            "Compare the outermost characters and move inward.",
            "Any mismatched pair means it's not a palindrome.",
            "while (i < j) { if (s[i] !== s[j]) return false; i++; j--; }"
        ],
        walkthrough: [
            {
                title: "Compare mirror positions",
                body: "A palindrome has the same character at equal distances from each end. Put one pointer at the first character and one at the last."
            },
            {
                title: "Reject as soon as a pair disagrees",
                body: "One mismatched outer pair is enough to prove the string cannot read the same backwards, so return `false` immediately."
            },
            {
                title: "Move inward only after a match",
                body: "When the two characters match, move both pointers toward the middle and repeat the same test for the next pair."
            },
            {
                title: "Accept when every pair matched",
                body: "If the pointers meet or cross without finding a mismatch, all mirror pairs agree. Empty and one-character strings pass naturally."
            }
        ],
        solutions: [
            {
                label: "Two pointers",
                approach: "Walk inward comparing mirror positions.",
                js: "function isPalindromeTP(s) {\n  let i = 0, j = s.length - 1;\n  while (i < j) { if (s[i] !== s[j]) return false; i++; j--; }\n  return true;\n}\n",
                ts: "function isPalindromeTP(s: string): boolean {\n  let i = 0, j = s.length - 1;\n  while (i < j) { if (s[i] !== s[j]) return false; i++; j--; }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isPalindromeTP(s) {\n  // Start at the two characters farthest apart.\n  let i = 0;\n  let j = s.length - 1;\n\n  // Compare every mirrored pair exactly once.\n  while (i < j) {\n    // A mismatch proves the string is not a palindrome.\n    if (s[i] !== s[j]) {\n      return false;\n    }\n    // The outer pair matched, so test the next inner pair.\n    i++;\n    j--;\n  }\n\n  // No mirrored characters disagreed.\n  return true;\n}\n",
                    ts: "function isPalindromeTP(s: string): boolean {\n  // Start at the two characters farthest apart.\n  let i = 0;\n  let j = s.length - 1;\n\n  // Compare every mirrored pair exactly once.\n  while (i < j) {\n    // A mismatch proves the string is not a palindrome.\n    if (s[i] !== s[j]) {\n      return false;\n    }\n    // The outer pair matched, so test the next inner pair.\n    i++;\n    j--;\n  }\n\n  // No mirrored characters disagreed.\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Reverse compare",
                approach: "Compare the string with its reverse.",
                js: "function isPalindromeTP(s) {\n  return s === s.split('').reverse().join('');\n}\n",
                ts: "function isPalindromeTP(s: string): boolean {\n  return s === s.split('').reverse().join('');\n}\n",
                commentedCode: {
                    js: "function isPalindromeTP(s) {\n  // Build a reversed string and compare it with the original.\n  return s === s.split('').reverse().join('');\n}\n",
                    ts: "function isPalindromeTP(s: string): boolean {\n  // Build a reversed string and compare it with the original.\n  return s === s.split('').reverse().join('');\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tp-remove-duplicates",
        slug: "remove-duplicates-sorted",
        title: "Remove Duplicates (Sorted)",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a list sorted ascending, return the distinct values in order using a two-pointer (read/write) sweep.",
        examples: [
            {
                input: "[1,1,2,3,3]",
                output: "[1,2,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[5]",
                output: "[5]"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "0 <= length <= 10000"
        ],
        functionName: "removeDuplicatesSorted",
        starter: {
            js: "function removeDuplicatesSorted(nums) {\n  // Distinct values from a sorted list.\n}\n",
            ts: "function removeDuplicatesSorted(nums: number[]): number[] {\n  // Distinct values from a sorted list.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        1,
                        2,
                        3,
                        3
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
                        5
                    ]
                ],
                expected: [
                    5
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        1,
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
                        2,
                        3
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
                    [
                        -1,
                        -1,
                        0,
                        0
                    ]
                ],
                expected: [
                    -1,
                    0
                ]
            },
            {
                args: [
                    [
                        2,
                        2,
                        2,
                        3
                    ]
                ],
                expected: [
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        2,
                        3,
                        4,
                        4
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
        hints: [
            "A write pointer trails behind a read pointer, copying only new values.",
            "Because it's sorted, a value is new exactly when it differs from the last written one.",
            "Append nums[i] only if the output is empty or its last element differs."
        ],
        walkthrough: [
            {
                title: "Exploit adjacent duplicates",
                body: "In sorted input, identical values sit together. A value is new exactly when it differs from the most recently kept value."
            },
            {
                title: "Separate reading from writing",
                body: "Read every value in order, but write to the result only when it begins a new run. The result's final value is the write-side comparison point."
            },
            {
                title: "Keep the first of every run",
                body: "The first value always belongs in the output. Later equal values are skipped, while a different value is appended and becomes the new last kept value."
            },
            {
                title: "Return the ordered result",
                body: "Because values are read left to right and only duplicates are skipped, the result stays sorted and contains each distinct value once."
            }
        ],
        solutions: [
            {
                label: "Read / write pointers",
                approach: "Copy a value only when it differs from the previous kept value.",
                js: "function removeDuplicatesSorted(nums) {\n  const out = [];\n  for (const v of nums) if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  return out;\n}\n",
                ts: "function removeDuplicatesSorted(nums: number[]): number[] {\n  const out: number[] = [];\n  for (const v of nums) if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  return out;\n}\n",
                commentedCode: {
                    js: "function removeDuplicatesSorted(nums) {\n  // Hold the distinct values in their original sorted order.\n  const out = [];\n\n  // Read every input value once.\n  for (const value of nums) {\n    // Keep the first value and each value that starts a new sorted run.\n    if (out.length === 0 || out[out.length - 1] !== value) {\n      out.push(value);\n    }\n  }\n\n  // The output contains one copy of each input value.\n  return out;\n}\n",
                    ts: "function removeDuplicatesSorted(nums: number[]): number[] {\n  // Hold the distinct values in their original sorted order.\n  const out: number[] = [];\n\n  // Read every input value once.\n  for (const value of nums) {\n    // Keep the first value and each value that starts a new sorted run.\n    if (out.length === 0 || out[out.length - 1] !== value) {\n      out.push(value);\n    }\n  }\n\n  // The output contains one copy of each input value.\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Set",
                approach: "A Set keeps first occurrences; sorted input preserves order.",
                js: "function removeDuplicatesSorted(nums) {\n  return [...new Set(nums)];\n}\n",
                ts: "function removeDuplicatesSorted(nums: number[]): number[] {\n  return [...new Set(nums)];\n}\n",
                commentedCode: {
                    js: "function removeDuplicatesSorted(nums) {\n  // Set preserves each value's first insertion order; spread returns those values as an array.\n  return [...new Set(nums)];\n}\n",
                    ts: "function removeDuplicatesSorted(nums: number[]): number[] {\n  // Set preserves each value's first insertion order; spread returns those values as an array.\n  return [...new Set(nums)];\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tp-sort-parity",
        slug: "sort-by-parity",
        title: "Sort by Parity",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the list with all even numbers (in their original order) before all odd numbers (in their original order).",
        examples: [
            {
                input: "[3,1,2,4]",
                output: "[2,4,3,1]"
            },
            {
                input: "[0]",
                output: "[0]"
            },
            {
                input: "[1,3]",
                output: "[1,3]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "sortByParity",
        starter: {
            js: "function sortByParity(nums) {\n  // Evens first (in order), then odds (in order).\n}\n",
            ts: "function sortByParity(nums: number[]): number[] {\n  // Evens first (in order), then odds (in order).\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        1,
                        2,
                        4
                    ]
                ],
                expected: [
                    2,
                    4,
                    3,
                    1
                ]
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    [
                        1,
                        3
                    ]
                ],
                expected: [
                    1,
                    3
                ]
            }
        ],
        hidden: [
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
                        4,
                        6
                    ]
                ],
                expected: [
                    2,
                    4,
                    6
                ]
            },
            {
                args: [
                    [
                        1,
                        3,
                        5
                    ]
                ],
                expected: [
                    1,
                    3,
                    5
                ]
            },
            {
                args: [
                    [
                        4,
                        1,
                        2,
                        3
                    ]
                ],
                expected: [
                    4,
                    2,
                    1,
                    3
                ]
            },
            {
                args: [
                    [
                        -2,
                        -1
                    ]
                ],
                expected: [
                    -2,
                    -1
                ]
            },
            {
                args: [
                    [
                        0,
                        1,
                        0,
                        1
                    ]
                ],
                expected: [
                    0,
                    0,
                    1,
                    1
                ]
            }
        ],
        hints: [
            "Collect the evens and odds separately, preserving order.",
            "Concatenate the evens list before the odds list.",
            "return nums.filter(isEven).concat(nums.filter(isOdd))."
        ],
        walkthrough: [
            {
                title: "Notice that the ordering must be stable",
                body: "The task does not merely group parity; it preserves original order within the even and odd groups. A normal partition swap can break that requirement."
            },
            {
                title: "Make two ordered buckets",
                body: "Scan once. Send each even value to one output list and each odd value to another. Appending in scan order preserves each group’s order."
            },
            {
                title: "Place the groups in the required order",
                body: "After the scan, join the even list before the odd list. No sorting is needed."
            },
            {
                title: "Cover empty groups naturally",
                body: "If all values share a parity, one bucket is empty and concatenation still returns the correct list."
            }
        ],
        solutions: [
            {
                label: "Partition",
                approach: "Filter into evens and odds, then join.",
                js: "function sortByParity(nums) {\n  const even = [], odd = [];\n  for (const n of nums) (n % 2 === 0 ? even : odd).push(n);\n  return even.concat(odd);\n}\n",
                ts: "function sortByParity(nums: number[]): number[] {\n  const even: number[] = [], odd: number[] = [];\n  for (const n of nums) (n % 2 === 0 ? even : odd).push(n);\n  return even.concat(odd);\n}\n",
                commentedCode: {
                    js: "function sortByParity(nums) {\n  // Preserve even and odd values in separate ordered buckets.\n  const evens = [];\n  const odds = [];\n\n  // Read values in input order to preserve stability inside each bucket.\n  for (const value of nums) {\n    if (value % 2 === 0) {\n      evens.push(value);\n    } else {\n      odds.push(value);\n    }\n  }\n\n  // Put all evens before all odds as required.\n  return evens.concat(odds);\n}\n",
                    ts: "function sortByParity(nums: number[]): number[] {\n  // Preserve even and odd values in separate ordered buckets.\n  const evens: number[] = [];\n  const odds: number[] = [];\n\n  // Read values in input order to preserve stability inside each bucket.\n  for (const value of nums) {\n    if (value % 2 === 0) {\n      evens.push(value);\n    } else {\n      odds.push(value);\n    }\n  }\n\n  // Put all evens before all odds as required.\n  return evens.concat(odds);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Stable filter",
                approach: "Two filters express the same partition.",
                js: "function sortByParity(nums) {\n  return nums.filter((n) => n % 2 === 0).concat(nums.filter((n) => n % 2 !== 0));\n}\n",
                ts: "function sortByParity(nums: number[]): number[] {\n  return nums.filter((n) => n % 2 === 0).concat(nums.filter((n) => n % 2 !== 0));\n}\n",
                commentedCode: {
                    js: "function sortByParity(nums) {\n  // First keep all even values in input order.\n  const evens = nums.filter((value) => value % 2 === 0);\n  // Then keep all odd values in input order.\n  const odds = nums.filter((value) => value % 2 !== 0);\n  // Concatenate the stable groups in the requested order.\n  return evens.concat(odds);\n}\n",
                    ts: "function sortByParity(nums: number[]): number[] {\n  // First keep all even values in input order.\n  const evens = nums.filter((value) => value % 2 === 0);\n  // Then keep all odd values in input order.\n  const odds = nums.filter((value) => value % 2 !== 0);\n  // Concatenate the stable groups in the requested order.\n  return evens.concat(odds);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tp-max-area",
        slug: "container-most-water",
        title: "Container With Most Water",
        difficulty: "hard",
        patternIds: P,
        statement: "Each value is the height of a vertical line at that index. Return the largest area of water a pair of lines can hold: `min(height[i], height[j]) * (j - i)`.",
        examples: [
            {
                input: "[1,8,6,2,5,4,8,3,7]",
                output: "49"
            },
            {
                input: "[1,1]",
                output: "1"
            },
            {
                input: "[4,3,2,1,4]",
                output: "16"
            }
        ],
        constraints: [
            "0 <= heights.length <= 10000",
            "heights[i] >= 0"
        ],
        functionName: "maxArea",
        starter: {
            js: "function maxArea(heights) {\n  // Largest area between two lines.\n}\n",
            ts: "function maxArea(heights: number[]): number {\n  // Largest area between two lines.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        8,
                        6,
                        2,
                        5,
                        4,
                        8,
                        3,
                        7
                    ]
                ],
                expected: 49
            },
            {
                args: [
                    [
                        1,
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        4,
                        3,
                        2,
                        1,
                        4
                    ]
                ],
                expected: 16
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
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        3
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        5,
                        5
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    [
                        1,
                        2,
                        4,
                        3
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        6,
                        1,
                        6
                    ]
                ],
                expected: 12
            },
            {
                args: [
                    [
                        3,
                        2,
                        1,
                        4
                    ]
                ],
                expected: 9
            }
        ],
        hints: [
            "Start wide (both ends). Widening isn't possible, so you can only move inward — but which pointer?",
            "Move the pointer at the shorter line: keeping it can never beat the current area.",
            "while (lo < hi) { area = min(h[lo],h[hi])*(hi-lo); move the shorter side inward. }"
        ],
        walkthrough: [
            {
                title: "Start with the widest container",
                body: "Put pointers at both ends. This gives the maximum available width; future candidates can only become narrower."
            },
            {
                title: "Measure the limiting height",
                body: "A container’s area is width times its shorter wall. Calculate that area at the current pair and keep the largest value seen."
            },
            {
                title: "Discard the wall that limits this pair",
                body: "Moving the taller wall inward cannot improve the limiting height and always reduces width. Move the shorter wall instead, hoping to find a taller replacement."
            },
            {
                title: "Finish when no pair remains",
                body: "Repeat until the pointers meet. Every discarded shorter wall has been proven unable to form a better container with the remaining positions."
            }
        ],
        solutions: [
            {
                label: "Two pointers",
                approach: "Shrink from the ends, always advancing the shorter wall.",
                js: "function maxArea(heights) {\n  let lo = 0, hi = heights.length - 1, best = 0;\n  while (lo < hi) {\n    const area = Math.min(heights[lo], heights[hi]) * (hi - lo);\n    if (area > best) best = area;\n    if (heights[lo] < heights[hi]) lo++; else hi--;\n  }\n  return best;\n}\n",
                ts: "function maxArea(heights: number[]): number {\n  let lo = 0, hi = heights.length - 1, best = 0;\n  while (lo < hi) {\n    const area = Math.min(heights[lo], heights[hi]) * (hi - lo);\n    if (area > best) best = area;\n    if (heights[lo] < heights[hi]) lo++; else hi--;\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function maxArea(heights) {\n  // Start with the widest available pair of vertical lines.\n  let lo = 0;\n  let hi = heights.length - 1;\n  // Track the largest container seen so far.\n  let best = 0;\n\n  // Each iteration considers one distinct pair of lines.\n  while (lo < hi) {\n    // The shorter wall limits the water height; distance supplies the width.\n    const area = Math.min(heights[lo], heights[hi]) * (hi - lo);\n    // Keep this area only if it improves the answer.\n    best = Math.max(best, area);\n\n    // Discard the shorter wall because keeping it cannot beat this width.\n    if (heights[lo] < heights[hi]) {\n      lo++;\n    } else {\n      hi--;\n    }\n  }\n\n  // Every candidate pair has been considered or safely discarded.\n  return best;\n}\n",
                    ts: "function maxArea(heights: number[]): number {\n  // Start with the widest available pair of vertical lines.\n  let lo = 0;\n  let hi = heights.length - 1;\n  // Track the largest container seen so far.\n  let best = 0;\n\n  // Each iteration considers one distinct pair of lines.\n  while (lo < hi) {\n    // The shorter wall limits the water height; distance supplies the width.\n    const area = Math.min(heights[lo], heights[hi]) * (hi - lo);\n    // Keep this area only if it improves the answer.\n    best = Math.max(best, area);\n\n    // Discard the shorter wall because keeping it cannot beat this width.\n    if (heights[lo] < heights[hi]) {\n      lo++;\n    } else {\n      hi--;\n    }\n  }\n\n  // Every candidate pair has been considered or safely discarded.\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Brute force",
                approach: "Try every pair of lines.",
                js: "function maxArea(heights) {\n  let best = 0;\n  for (let i = 0; i < heights.length; i++) {\n    for (let j = i + 1; j < heights.length; j++) {\n      best = Math.max(best, Math.min(heights[i], heights[j]) * (j - i));\n    }\n  }\n  return best;\n}\n",
                ts: "function maxArea(heights: number[]): number {\n  let best = 0;\n  for (let i = 0; i < heights.length; i++) {\n    for (let j = i + 1; j < heights.length; j++) {\n      best = Math.max(best, Math.min(heights[i], heights[j]) * (j - i));\n    }\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function maxArea(heights) {\n  // No container has been measured yet.\n  let best = 0;\n\n  // Choose the left wall of every possible pair.\n  for (let i = 0; i < heights.length; i++) {\n    // Pair it with every wall to its right.\n    for (let j = i + 1; j < heights.length; j++) {\n      // Compute this container and retain the largest area.\n      const area = Math.min(heights[i], heights[j]) * (j - i);\n      best = Math.max(best, area);\n    }\n  }\n\n  // Return the largest area among all pairs.\n  return best;\n}\n",
                    ts: "function maxArea(heights: number[]): number {\n  // No container has been measured yet.\n  let best = 0;\n\n  // Choose the left wall of every possible pair.\n  for (let i = 0; i < heights.length; i++) {\n    // Pair it with every wall to its right.\n    for (let j = i + 1; j < heights.length; j++) {\n      // Compute this container and retain the largest area.\n      const area = Math.min(heights[i], heights[j]) * (j - i);\n      best = Math.max(best, area);\n    }\n  }\n\n  // Return the largest area among all pairs.\n  return best;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "tp-squares-sorted",
        slug: "sorted-squares",
        title: "Squares of a Sorted Array",
        difficulty: "easy",
        patternIds: P,
        statement: "Given a list sorted ascending (possibly with negatives), return the squares of each value, sorted ascending.",
        examples: [
            {
                input: "[-4,-1,0,3,10]",
                output: "[0,1,9,16,100]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1,2,3]",
                output: "[1,4,9]"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "0 <= length <= 10000"
        ],
        functionName: "sortedSquares",
        starter: {
            js: "function sortedSquares(sorted) {\n  // Squares, sorted ascending.\n}\n",
            ts: "function sortedSquares(sorted: number[]): number[] {\n  // Squares, sorted ascending.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        -4,
                        -1,
                        0,
                        3,
                        10
                    ]
                ],
                expected: [
                    0,
                    1,
                    9,
                    16,
                    100
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
                    4,
                    9
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        -3,
                        -2,
                        -1
                    ]
                ],
                expected: [
                    1,
                    4,
                    9
                ]
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: [
                    0
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
                    1,
                    1
                ]
            },
            {
                args: [
                    [
                        -5,
                        0,
                        5
                    ]
                ],
                expected: [
                    0,
                    25,
                    25
                ]
            },
            {
                args: [
                    [
                        2
                    ]
                ],
                expected: [
                    4
                ]
            },
            {
                args: [
                    [
                        -2,
                        -1,
                        0,
                        1,
                        2
                    ]
                ],
                expected: [
                    0,
                    1,
                    1,
                    4,
                    4
                ]
            }
        ],
        hints: [
            "The largest square is at one of the two ends (most negative or most positive).",
            "Two pointers: compare the squared ends and fill the result from the back.",
            "Or simply square everything and sort — O(n log n)."
        ],
        walkthrough: [
            {
                title: "Identify where the largest square can be",
                body: "The input is sorted, but squaring negatives reverses their magnitude order. The largest remaining square must come from either end."
            },
            {
                title: "Fill the result from largest to smallest",
                body: "Allocate the output at its final size and place the larger squared end in the last unfilled position."
            },
            {
                title: "Advance the end that supplied the value",
                body: "After placing a square, move only the pointer that produced it, then move the output position one step left."
            },
            {
                title: "Finish with a sorted result",
                body: "Writing the largest remaining value at the back on every step leaves the final output in ascending order."
            }
        ],
        solutions: [
            {
                label: "Two-pointer merge",
                approach: "Fill from the back by comparing squared ends.",
                js: "function sortedSquares(sorted) {\n  const n = sorted.length;\n  const out = new Array(n);\n  let lo = 0, hi = n - 1;\n  for (let k = n - 1; k >= 0; k--) {\n    const a = sorted[lo] * sorted[lo];\n    const b = sorted[hi] * sorted[hi];\n    if (a > b) { out[k] = a; lo++; } else { out[k] = b; hi--; }\n  }\n  return out;\n}\n",
                ts: "function sortedSquares(sorted: number[]): number[] {\n  const n = sorted.length;\n  const out = new Array(n);\n  let lo = 0, hi = n - 1;\n  for (let k = n - 1; k >= 0; k--) {\n    const a = sorted[lo] * sorted[lo];\n    const b = sorted[hi] * sorted[hi];\n    if (a > b) { out[k] = a; lo++; } else { out[k] = b; hi--; }\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function sortedSquares(sorted) {\n  // Reserve every output position before filling from the back.\n  const out = new Array(sorted.length);\n  let lo = 0;\n  let hi = sorted.length - 1;\n\n  // Place the largest remaining square at each descending output index.\n  for (let write = sorted.length - 1; write >= 0; write--) {\n    const leftSquare = sorted[lo] * sorted[lo];\n    const rightSquare = sorted[hi] * sorted[hi];\n    if (leftSquare > rightSquare) {\n      out[write] = leftSquare;\n      lo++;\n    } else {\n      out[write] = rightSquare;\n      hi--;\n    }\n  }\n\n  // Values were written largest to smallest from the end, so this is ascending.\n  return out;\n}\n",
                    ts: "function sortedSquares(sorted: number[]): number[] {\n  // Reserve every output position before filling from the back.\n  const out: number[] = new Array(sorted.length);\n  let lo = 0;\n  let hi = sorted.length - 1;\n\n  // Place the largest remaining square at each descending output index.\n  for (let write = sorted.length - 1; write >= 0; write--) {\n    const leftSquare = sorted[lo] * sorted[lo];\n    const rightSquare = sorted[hi] * sorted[hi];\n    if (leftSquare > rightSquare) {\n      out[write] = leftSquare;\n      lo++;\n    } else {\n      out[write] = rightSquare;\n      hi--;\n    }\n  }\n\n  // Values were written largest to smallest from the end, so this is ascending.\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Square then sort",
                approach: "Square every value and sort.",
                js: "function sortedSquares(sorted) {\n  return sorted.map((x) => x * x).sort((a, b) => a - b);\n}\n",
                ts: "function sortedSquares(sorted: number[]): number[] {\n  return sorted.map((x) => x * x).sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function sortedSquares(sorted) {\n  // Square each value, then restore ascending order with a numeric sort.\n  return sorted.map((value) => value * value).sort((a, b) => a - b);\n}\n",
                    ts: "function sortedSquares(sorted: number[]): number[] {\n  // Square each value, then restore ascending order with a numeric sort.\n  return sorted.map((value) => value * value).sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tp-count-pairs",
        slug: "count-pairs-with-sum",
        title: "Count Pairs with Sum",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a list sorted ascending and a `target`, return the number of index pairs (i < j) whose values sum to target.",
        examples: [
            {
                input: "[1,2,3,4], 5",
                output: "2"
            },
            {
                input: "[1,1,1], 2",
                output: "3"
            },
            {
                input: "[1,2,3], 7",
                output: "0"
            }
        ],
        constraints: [
            "input is sorted ascending",
            "0 <= length <= 10000"
        ],
        functionName: "countPairsWithSum",
        starter: {
            js: "function countPairsWithSum(sorted, target) {\n  // Number of index pairs summing to target.\n}\n",
            ts: "function countPairsWithSum(sorted: number[], target: number): number {\n  // Number of index pairs summing to target.\n  return 0;\n}\n"
        },
        visible: [
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
                        1,
                        1,
                        1
                    ],
                    2
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    7
                ],
                expected: 0
            }
        ],
        hidden: [
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
                        2,
                        2,
                        2,
                        2
                    ],
                    4
                ],
                expected: 6
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
                    6
                ],
                expected: 2
            },
            {
                args: [
                    [
                        0,
                        0,
                        0
                    ],
                    0
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        3,
                        3,
                        5
                    ],
                    6
                ],
                expected: 2
            },
            {
                args: [
                    [
                        2,
                        4,
                        6
                    ],
                    10
                ],
                expected: 1
            }
        ],
        hints: [
            "Two pointers from the ends, but count carefully when values repeat.",
            "When both ends are equal and match the target, every pair among them counts: m*(m-1)/2.",
            "Otherwise count (left duplicates × right duplicates) and move both pointers inward."
        ],
        walkthrough: [
            {
                title: "Use sorted order to steer the search",
                body: "Start at both ends. A sum below the target needs a larger left value; a sum above needs a smaller right value."
            },
            {
                title: "Count groups, not just one match",
                body: "When a matching sum uses different values, count how many equal copies appear at the left and right ends. Every left copy pairs with every right copy."
            },
            {
                title: "Handle one repeated value specially",
                body: "If both matching ends have the same value, every pair among the remaining copies works. For `m` copies, that is `m × (m - 1) / 2` pairs."
            },
            {
                title: "Skip each consumed group",
                body: "After counting a matched group, move past all of its copies so no index pair is counted twice."
            }
        ],
        solutions: [
            {
                label: "Two pointers with duplicate counting",
                approach: "Group equal values at each end and multiply their counts.",
                js: "function countPairsWithSum(sorted, target) {\n  let lo = 0, hi = sorted.length - 1, count = 0;\n  while (lo < hi) {\n    const s = sorted[lo] + sorted[hi];\n    if (s === target) {\n      if (sorted[lo] === sorted[hi]) { const m = hi - lo + 1; count += (m * (m - 1)) / 2; break; }\n      let lc = 1; while (lo + 1 < hi && sorted[lo + 1] === sorted[lo]) { lo++; lc++; }\n      let hc = 1; while (hi - 1 > lo && sorted[hi - 1] === sorted[hi]) { hi--; hc++; }\n      count += lc * hc; lo++; hi--;\n    } else if (s < target) lo++; else hi--;\n  }\n  return count;\n}\n",
                ts: "function countPairsWithSum(sorted: number[], target: number): number {\n  let lo = 0, hi = sorted.length - 1, count = 0;\n  while (lo < hi) {\n    const s = sorted[lo] + sorted[hi];\n    if (s === target) {\n      if (sorted[lo] === sorted[hi]) { const m = hi - lo + 1; count += (m * (m - 1)) / 2; break; }\n      let lc = 1; while (lo + 1 < hi && sorted[lo + 1] === sorted[lo]) { lo++; lc++; }\n      let hc = 1; while (hi - 1 > lo && sorted[hi - 1] === sorted[hi]) { hi--; hc++; }\n      count += lc * hc; lo++; hi--;\n    } else if (s < target) lo++; else hi--;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countPairsWithSum(sorted, target) {\n  // Search the smallest and largest remaining values.\n  let lo = 0;\n  let hi = sorted.length - 1;\n  let count = 0;\n\n  while (lo < hi) {\n    const sum = sorted[lo] + sorted[hi];\n    if (sum < target) {\n      // Raising the left value is the only way to raise this sorted-end sum.\n      lo++;\n    } else if (sum > target) {\n      // Lowering the right value is the only way to lower this sorted-end sum.\n      hi--;\n    } else if (sorted[lo] === sorted[hi]) {\n      // Every pair among m equal remaining values sums to the target.\n      const m = hi - lo + 1;\n      count += (m * (m - 1)) / 2;\n      break;\n    } else {\n      // Count the equal values at the left end.\n      const leftValue = sorted[lo];\n      let leftCount = 0;\n      while (lo <= hi && sorted[lo] === leftValue) {\n        leftCount++;\n        lo++;\n      }\n      // Count the equal values at the right end.\n      const rightValue = sorted[hi];\n      let rightCount = 0;\n      while (lo <= hi && sorted[hi] === rightValue) {\n        rightCount++;\n        hi--;\n      }\n      // Each left copy pairs with each right copy exactly once.\n      count += leftCount * rightCount;\n    }\n  }\n\n  return count;\n}\n",
                    ts: "function countPairsWithSum(sorted: number[], target: number): number {\n  // Search the smallest and largest remaining values.\n  let lo = 0;\n  let hi = sorted.length - 1;\n  let count = 0;\n\n  while (lo < hi) {\n    const sum = sorted[lo] + sorted[hi];\n    if (sum < target) {\n      // Raising the left value is the only way to raise this sorted-end sum.\n      lo++;\n    } else if (sum > target) {\n      // Lowering the right value is the only way to lower this sorted-end sum.\n      hi--;\n    } else if (sorted[lo] === sorted[hi]) {\n      // Every pair among m equal remaining values sums to the target.\n      const m = hi - lo + 1;\n      count += (m * (m - 1)) / 2;\n      break;\n    } else {\n      // Count the equal values at the left end.\n      const leftValue = sorted[lo];\n      let leftCount = 0;\n      while (lo <= hi && sorted[lo] === leftValue) {\n        leftCount++;\n        lo++;\n      }\n      // Count the equal values at the right end.\n      const rightValue = sorted[hi];\n      let rightCount = 0;\n      while (lo <= hi && sorted[hi] === rightValue) {\n        rightCount++;\n        hi--;\n      }\n      // Each left copy pairs with each right copy exactly once.\n      count += leftCount * rightCount;\n    }\n  }\n\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Brute force",
                approach: "Check every pair directly.",
                js: "function countPairsWithSum(sorted, target) {\n  let count = 0;\n  for (let i = 0; i < sorted.length; i++) {\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) count++;\n    }\n  }\n  return count;\n}\n",
                ts: "function countPairsWithSum(sorted: number[], target: number): number {\n  let count = 0;\n  for (let i = 0; i < sorted.length; i++) {\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) count++;\n    }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countPairsWithSum(sorted, target) {\n  // Start with no matching index pairs.\n  let count = 0;\n  // Choose each possible first index.\n  for (let i = 0; i < sorted.length; i++) {\n    // Pair it with every later index exactly once.\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) count++;\n    }\n  }\n  // Return the total number of matching pairs.\n  return count;\n}\n",
                    ts: "function countPairsWithSum(sorted: number[], target: number): number {\n  // Start with no matching index pairs.\n  let count = 0;\n  // Choose each possible first index.\n  for (let i = 0; i < sorted.length; i++) {\n    // Pair it with every later index exactly once.\n    for (let j = i + 1; j < sorted.length; j++) {\n      if (sorted[i] + sorted[j] === target) count++;\n    }\n  }\n  // Return the total number of matching pairs.\n  return count;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "tp-valid-palindrome-alnum",
        slug: "valid-palindrome-alnum",
        title: "Valid Palindrome (Alphanumeric)",
        difficulty: "medium",
        patternIds: P,
        statement: "Return `true` if the string is a palindrome considering only letters and digits, ignoring case and other characters.",
        examples: [
            {
                input: '"A man, a plan, a canal: Panama"',
                output: "true"
            },
            {
                input: '"race a car"',
                output: "false"
            },
            {
                input: '""',
                output: "true"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000"
        ],
        functionName: "isPalindromeAlnum",
        starter: {
            js: "function isPalindromeAlnum(s) {\n  // Palindrome over letters/digits, case-insensitive.\n}\n",
            ts: "function isPalindromeAlnum(s: string): boolean {\n  // Palindrome over letters/digits, case-insensitive.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    "A man, a plan, a canal: Panama"
                ],
                expected: true
            },
            {
                args: [
                    "race a car"
                ],
                expected: false
            },
            {
                args: [
                    ""
                ],
                expected: true
            }
        ],
        hidden: [
            {
                args: [
                    " "
                ],
                expected: true
            },
            {
                args: [
                    "a."
                ],
                expected: true
            },
            {
                args: [
                    "0P"
                ],
                expected: false
            },
            {
                args: [
                    "ab_a"
                ],
                expected: true
            },
            {
                args: [
                    "Abba"
                ],
                expected: true
            },
            {
                args: [
                    "abc"
                ],
                expected: false
            }
        ],
        hints: [
            "Skip characters that aren't letters or digits from each end.",
            "Compare the lowercased alphanumeric characters with two pointers.",
            "Advance i past non-alnum, j back past non-alnum, then compare lowercased."
        ],
        walkthrough: [
            {
                title: "Define which characters matter",
                body: "Punctuation and spaces do not participate, and letter case does not matter. Treat only letters and digits as comparable characters."
            },
            {
                title: "Skip irrelevant characters from both ends",
                body: "Before comparing a pair, advance the left pointer past non-alphanumerics and retreat the right pointer past them as well."
            },
            {
                title: "Compare normalized mirror characters",
                body: "Lowercase both remaining characters. A mismatch immediately proves the meaningful characters are not a palindrome."
            },
            {
                title: "Move inward after a match",
                body: "Once a normalized pair matches, move both pointers. If they meet without a mismatch, return `true`."
            }
        ],
        solutions: [
            {
                label: "Two pointers, skip non-alnum",
                approach: "Move each pointer past junk, then compare lowercased characters.",
                js: "function isPalindromeAlnum(s) {\n  const ok = (c) => /[a-z0-9]/i.test(c);\n  let i = 0, j = s.length - 1;\n  while (i < j) {\n    while (i < j && !ok(s[i])) i++;\n    while (i < j && !ok(s[j])) j--;\n    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;\n    i++; j--;\n  }\n  return true;\n}\n",
                ts: "function isPalindromeAlnum(s: string): boolean {\n  const ok = (c: string) => /[a-z0-9]/i.test(c);\n  let i = 0, j = s.length - 1;\n  while (i < j) {\n    while (i < j && !ok(s[i])) i++;\n    while (i < j && !ok(s[j])) j--;\n    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;\n    i++; j--;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isPalindromeAlnum(s) {\n  // Recognize the characters that count toward this palindrome.\n  const isAlphanumeric = (char) => /[a-z0-9]/i.test(char);\n  let left = 0;\n  let right = s.length - 1;\n\n  // Compare meaningful mirror characters until the pointers meet.\n  while (left < right) {\n    // Skip punctuation and spaces on the left.\n    while (left < right && !isAlphanumeric(s[left])) left++;\n    // Skip punctuation and spaces on the right.\n    while (left < right && !isAlphanumeric(s[right])) right--;\n    // A case-insensitive mismatch disproves the palindrome.\n    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;\n    left++;\n    right--;\n  }\n\n  // All comparable mirror pairs matched.\n  return true;\n}\n",
                    ts: "function isPalindromeAlnum(s: string): boolean {\n  // Recognize the characters that count toward this palindrome.\n  const isAlphanumeric = (char: string) => /[a-z0-9]/i.test(char);\n  let left = 0;\n  let right = s.length - 1;\n\n  // Compare meaningful mirror characters until the pointers meet.\n  while (left < right) {\n    // Skip punctuation and spaces on the left.\n    while (left < right && !isAlphanumeric(s[left])) left++;\n    // Skip punctuation and spaces on the right.\n    while (left < right && !isAlphanumeric(s[right])) right--;\n    // A case-insensitive mismatch disproves the palindrome.\n    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;\n    left++;\n    right--;\n  }\n\n  // All comparable mirror pairs matched.\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Clean then compare",
                approach: "Strip to lowercase alphanumerics and compare with the reverse.",
                js: "function isPalindromeAlnum(s) {\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleaned === cleaned.split('').reverse().join('');\n}\n",
                ts: "function isPalindromeAlnum(s: string): boolean {\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleaned === cleaned.split('').reverse().join('');\n}\n",
                commentedCode: {
                    js: "function isPalindromeAlnum(s) {\n  // Normalize case and remove every character the problem says to ignore.\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  // A palindrome equals its reversed normalized form.\n  return cleaned === cleaned.split('').reverse().join('');\n}\n",
                    ts: "function isPalindromeAlnum(s: string): boolean {\n  // Normalize case and remove every character the problem says to ignore.\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  // A palindrome equals its reversed normalized form.\n  return cleaned === cleaned.split('').reverse().join('');\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tp-merge-sorted",
        slug: "merge-sorted-two-pointer",
        title: "Merge Two Sorted Lists",
        difficulty: "easy",
        patternIds: P,
        statement: "Given two ascending lists, merge them into one ascending list with two pointers.",
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
            "both inputs sorted ascending",
            "0 <= lengths <= 10000"
        ],
        functionName: "mergeSortedTP",
        starter: {
            js: "function mergeSortedTP(a, b) {\n  // Merge two sorted lists with two pointers.\n}\n",
            ts: "function mergeSortedTP(a: number[], b: number[]): number[] {\n  // Merge two sorted lists with two pointers.\n  return [];\n}\n"
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
            "Advance a pointer in each list, always taking the smaller head.",
            "When one list is exhausted, append the rest of the other.",
            "while (i<a.length && j<b.length) push smaller; drain leftovers."
        ],
        walkthrough: [
            {
                title: "Track the next unused value in each list",
                body: "Start one pointer at index 0 of each sorted input and create an empty output list."
            },
            {
                title: "Take the smaller available head",
                body: "Compare the two pointed values. Append the smaller one, then advance only the pointer from which it came. That value cannot be needed later."
            },
            {
                title: "Stop comparisons when one list ends",
                body: "Once one pointer reaches its list’s length, the other list’s remaining values are already greater than or equal to everything placed so far."
            },
            {
                title: "Drain the remaining tail",
                body: "Append the unused values from the non-empty list in order, then return the merged result."
            }
        ],
        solutions: [
            {
                label: "Two-pointer merge",
                approach: "Take the smaller front value until one list empties.",
                js: "function mergeSortedTP(a, b) {\n  const out = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
                ts: "function mergeSortedTP(a: number[], b: number[]): number[] {\n  const out: number[] = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
                commentedCode: {
                    js: "function mergeSortedTP(a, b) {\n  // Build the merged values without mutating either input.\n  const out = [];\n  let i = 0;\n  let j = 0;\n\n  // Both pointers identify the smallest unused value in their sorted list.\n  while (i < a.length && j < b.length) {\n    if (a[i] <= b[j]) {\n      out.push(a[i]);\n      i++;\n    } else {\n      out.push(b[j]);\n      j++;\n    }\n  }\n\n  // One list is empty now; its values have all been placed.\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n\n  return out;\n}\n",
                    ts: "function mergeSortedTP(a: number[], b: number[]): number[] {\n  // Build the merged values without mutating either input.\n  const out: number[] = [];\n  let i = 0;\n  let j = 0;\n\n  // Both pointers identify the smallest unused value in their sorted list.\n  while (i < a.length && j < b.length) {\n    if (a[i] <= b[j]) {\n      out.push(a[i]);\n      i++;\n    } else {\n      out.push(b[j]);\n      j++;\n    }\n  }\n\n  // One list is empty now; its values have all been placed.\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n\n  return out;\n}\n"
                },
                time: "O(n + m)",
                space: "O(n + m)"
            },
            {
                label: "Concat and sort",
                approach: "Combine and sort — ignores the sorted inputs.",
                js: "function mergeSortedTP(a, b) {\n  return [...a, ...b].sort((x, y) => x - y);\n}\n",
                ts: "function mergeSortedTP(a: number[], b: number[]): number[] {\n  return [...a, ...b].sort((x, y) => x - y);\n}\n",
                commentedCode: {
                    js: "function mergeSortedTP(a, b) {\n  // Combine both inputs and use a numeric comparison to sort the combined copy.\n  return [...a, ...b].sort((left, right) => left - right);\n}\n",
                    ts: "function mergeSortedTP(a: number[], b: number[]): number[] {\n  // Combine both inputs and use a numeric comparison to sort the combined copy.\n  return [...a, ...b].sort((left, right) => left - right);\n}\n"
                },
                time: "O((n+m) log (n+m))",
                space: "O(n + m)"
            }
        ]
    }
];
const twoPointerProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const twoPointerMcqs = [
    {
        id: "s4-tp-sorted",
        kind: "mcq",
        prompt: "The classic 'pair that sums to target' two-pointer sweep requires the input to be:",
        options: [
            "sorted",
            "all unique",
            "empty",
            "reversed"
        ],
        answerIndex: 0,
        explanation: "Moving a pointer based on whether the sum is too big or small only works when ordered."
    },
    {
        id: "s4-tp-time",
        kind: "mcq",
        prompt: "Scanning an array with two pointers converging from both ends is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "The pointers together traverse the array once — linear time."
    }
];
const twoPointerModule = {
    id: "m-pat-two-pointers",
    stageId: S,
    title: "Two Pointers",
    kind: "patternModule",
    summary: "Two indices sweeping an array — often turning an O(n²) scan into a single O(n) pass.",
    lessonSections: [
        {
            heading: "Two indices, one pass",
            body: `The two-pointer pattern keeps **two indices** moving through a sequence — either converging from both ends, or one chasing the other. On sorted data it replaces nested loops with a single linear scan.

\`\`\`js
// Pair summing to a target in a sorted array:
function hasPair(a, target) {
  let lo = 0, hi = a.length - 1;
  while (lo < hi) {
    const s = a[lo] + a[hi];
    if (s === target) return true;
    if (s < target) lo++; else hi--;
  }
  return false;
}
console.log(hasPair([1, 2, 4, 7], 6)); // true (2 + 4)
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for two pointers when you see:

- a **sorted** array and a pair/triple with a target sum,
- **palindrome** or symmetry checks (ends moving inward),
- **in-place** partitioning or dedup (a read pointer and a write pointer),
- merging two sorted sequences, or "container / trapping" area problems.`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Converging ends
let lo = 0, hi = a.length - 1;
while (lo < hi) {
  // inspect a[lo], a[hi]; move one (or both) inward
  lo++; hi--;
}

// Read / write (fast / slow)
let write = 0;
for (let read = 0; read < a.length; read++) {
  if (keep(a[read])) a[write++] = a[read];
}
\`\`\`

**Pitfalls:** infinite loops if you forget to move a pointer; the "converging" form needs **sorted** input; when counting pairs with duplicates, handle equal runs on both ends. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "tp-pair-sum-sorted",
    drillProblemIds: [
        "tp-pair-sum-sorted",
        "tp-reverse-array",
        "tp-is-palindrome",
        "tp-remove-duplicates",
        "tp-sort-parity",
        "tp-max-area"
    ],
    testPoolProblemIds: [
        "tp-squares-sorted",
        "tp-count-pairs",
        "tp-valid-palindrome-alnum",
        "tp-merge-sorted"
    ],
    complexityQuestionIds: [
        "s4-tp-sorted",
        "s4-tp-time"
    ],
    badgeId: "badge-pat-two-pointers",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_data_stage4_0178men._.js.map