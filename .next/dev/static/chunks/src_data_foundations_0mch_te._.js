(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/foundations/checkpoint.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "foundationsCheckpointModule",
    ()=>foundationsCheckpointModule,
    "foundationsComplexityQuestions",
    ()=>foundationsComplexityQuestions,
    "foundationsPool",
    ()=>foundationsPool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s1";
/** Held-out checkpoint pool — never appears as a drill. */ const poolDrafts = [
    {
        id: "fc-range-sum",
        slug: "range-sum",
        title: "Range Sum",
        difficulty: "easy",
        statement: "Return the sum of every integer from `a` to `b`, inclusive (with `a <= b`).",
        examples: [
            {
                input: "1, 5",
                output: "15"
            },
            {
                input: "3, 3",
                output: "3"
            },
            {
                input: "0, 4",
                output: "10"
            }
        ],
        constraints: [
            "0 <= a <= b <= 100000"
        ],
        functionName: "rangeSum",
        starter: {
            js: "function rangeSum(a, b) {\n  // Sum a + (a+1) + ... + b.\n}\n",
            ts: "function rangeSum(a: number, b: number): number {\n  // Sum a + (a+1) + ... + b.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    1,
                    5
                ],
                expected: 15
            },
            {
                args: [
                    3,
                    3
                ],
                expected: 3
            },
            {
                args: [
                    0,
                    4
                ],
                expected: 10
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    1
                ],
                expected: 1
            },
            {
                args: [
                    10,
                    12
                ],
                expected: 33
            },
            {
                args: [
                    0,
                    0
                ],
                expected: 0
            },
            {
                args: [
                    5,
                    10
                ],
                expected: 45
            },
            {
                args: [
                    1,
                    100
                ],
                expected: 5050
            },
            {
                args: [
                    2,
                    4
                ],
                expected: 9
            }
        ],
        hints: [
            "This is the sum of a contiguous run of integers.",
            "Either loop from a to b, or subtract two triangular numbers.",
            "sum = 0; for (let i = a; i <= b; i++) sum += i; return sum."
        ],
        solutions: [
            {
                label: "Loop",
                approach: "Add every integer in the range.",
                js: "function rangeSum(a, b) {\n  let sum = 0;\n  for (let i = a; i <= b; i++) sum += i;\n  return sum;\n}\n",
                ts: "function rangeSum(a: number, b: number): number {\n  let sum = 0;\n  for (let i = a; i <= b; i++) sum += i;\n  return sum;\n}\n",
                commentedCode: {
                    js: "function rangeSum(a, b) {\n  // Hold the total of the range values processed so far.\n  let sum = 0;\n\n  // Visit every integer from a through b, including both endpoints.\n  for (let i = a; i <= b; i++) {\n    // Add the current range value to the running total.\n    sum += i;\n  }\n\n  // Every integer in the inclusive range has now been counted once.\n  return sum;\n}\n",
                    ts: "function rangeSum(a: number, b: number): number {\n  // Hold the total of the range values processed so far.\n  let sum = 0;\n\n  // Visit every integer from a through b, including both endpoints.\n  for (let i = a; i <= b; i++) {\n    // Add the current range value to the running total.\n    sum += i;\n  }\n\n  // Every integer in the inclusive range has now been counted once.\n  return sum;\n}\n"
                },
                time: "O(b - a)",
                space: "O(1)"
            },
            {
                label: "Triangular difference",
                approach: "Sum 0..b minus sum 0..a-1 using the closed form.",
                js: "function rangeSum(a, b) {\n  const tri = (x) => (x * (x + 1)) / 2;\n  return tri(b) - tri(a - 1);\n}\n",
                ts: "function rangeSum(a: number, b: number): number {\n  const tri = (x: number) => (x * (x + 1)) / 2;\n  return tri(b) - tri(a - 1);\n}\n",
                commentedCode: {
                    js: "function rangeSum(a, b) {\n  // Compute 0 + 1 + ... + x with the triangular-number formula.\n  const tri = (x) => (x * (x + 1)) / 2;\n\n  // Remove the prefix ending at a - 1 from the prefix ending at b.\n  return tri(b) - tri(a - 1);\n}\n",
                    ts: "function rangeSum(a: number, b: number): number {\n  // Compute 0 + 1 + ... + x with the triangular-number formula.\n  const tri = (x: number) => (x * (x + 1)) / 2;\n\n  // Remove the prefix ending at a - 1 from the prefix ending at b.\n  return tri(b) - tri(a - 1);\n}\n"
                },
                time: "O(1)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "fc-count-greater",
        slug: "count-greater",
        title: "Count Greater Than",
        difficulty: "easy",
        statement: "Return how many values in the list are strictly greater than `x`.",
        examples: [
            {
                input: "[1,5,3], 2",
                output: "2"
            },
            {
                input: "[], 0",
                output: "0"
            },
            {
                input: "[1,2,3], 5",
                output: "0"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "countGreater",
        starter: {
            js: "function countGreater(values, x) {\n  // Count values strictly greater than x.\n}\n",
            ts: "function countGreater(values: number[], x: number): number {\n  // Count values strictly greater than x.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        5,
                        3
                    ],
                    2
                ],
                expected: 2
            },
            {
                args: [
                    [],
                    0
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
                    5
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    [
                        5,
                        5,
                        5
                    ],
                    5
                ],
                expected: 0
            },
            {
                args: [
                    [
                        5,
                        6,
                        7
                    ],
                    5
                ],
                expected: 2
            },
            {
                args: [
                    [
                        -1,
                        0,
                        1
                    ],
                    0
                ],
                expected: 1
            },
            {
                args: [
                    [
                        10
                    ],
                    3
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
                    0
                ],
                expected: 4
            },
            {
                args: [
                    [
                        3,
                        3,
                        4
                    ],
                    3
                ],
                expected: 1
            }
        ],
        hints: [
            "Strictly greater means `>`, not `>=`.",
            "Scan once and increment a counter when the value exceeds x.",
            "return values.filter((v) => v > x).length."
        ],
        solutions: [
            {
                label: "Count in a loop",
                approach: "Increment for each value above x.",
                js: "function countGreater(values, x) {\n  let count = 0;\n  for (const v of values) if (v > x) count++;\n  return count;\n}\n",
                ts: "function countGreater(values: number[], x: number): number {\n  let count = 0;\n  for (const v of values) if (v > x) count++;\n  return count;\n}\n",
                commentedCode: {
                    js: "function countGreater(values, x) {\n  // Start with no qualifying values found.\n  let count = 0;\n\n  // Inspect each input value exactly once.\n  for (const value of values) {\n    // The comparison is strict, so values equal to x do not count.\n    if (value > x) {\n      count++;\n    }\n  }\n\n  // Return how many values passed the strict comparison.\n  return count;\n}\n",
                    ts: "function countGreater(values: number[], x: number): number {\n  // Start with no qualifying values found.\n  let count = 0;\n\n  // Inspect each input value exactly once.\n  for (const value of values) {\n    // The comparison is strict, so values equal to x do not count.\n    if (value > x) {\n      count++;\n    }\n  }\n\n  // Return how many values passed the strict comparison.\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Filter length",
                approach: "Filter to the qualifying values and read the length.",
                js: "function countGreater(values, x) {\n  return values.filter((v) => v > x).length;\n}\n",
                ts: "function countGreater(values: number[], x: number): number {\n  return values.filter((v) => v > x).length;\n}\n",
                commentedCode: {
                    js: "function countGreater(values, x) {\n  // Keep only values strictly above x, then use the filtered length as the count.\n  return values.filter((value) => value > x).length;\n}\n",
                    ts: "function countGreater(values: number[], x: number): number {\n  // Keep only values strictly above x, then use the filtered length as the count.\n  return values.filter((value) => value > x).length;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fc-second-largest",
        slug: "second-largest",
        title: "Second Largest",
        difficulty: "medium",
        statement: "Return the second largest **distinct** value in the list, or -1 if there is no such value.",
        examples: [
            {
                input: "[3,1,2]",
                output: "2"
            },
            {
                input: "[5,5]",
                output: "-1",
                explanation: "Only one distinct value."
            },
            {
                input: "[10,9]",
                output: "9"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "secondLargest",
        starter: {
            js: "function secondLargest(values) {\n  // Return the 2nd largest distinct value, or -1.\n}\n",
            ts: "function secondLargest(values: number[]): number {\n  // Return the 2nd largest distinct value, or -1.\n  return -1;\n}\n"
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
                expected: 2
            },
            {
                args: [
                    [
                        5,
                        5
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        10,
                        9
                    ]
                ],
                expected: 9
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
                        7
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        4,
                        4,
                        5,
                        5
                    ]
                ],
                expected: 4
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
                        -1,
                        -2,
                        -3
                    ]
                ],
                expected: -2
            },
            {
                args: [
                    [
                        100,
                        50,
                        100
                    ]
                ],
                expected: 50
            }
        ],
        hints: [
            "Duplicates of the maximum should not count as the runner-up.",
            "Track the largest and second-largest distinct values in one pass, or dedupe then sort.",
            "Keep `first` and `second`; update carefully so equal-to-first values are skipped."
        ],
        solutions: [
            {
                label: "Dedupe and sort",
                approach: "Remove duplicates, sort descending, read the second element.",
                js: "function secondLargest(values) {\n  const distinct = [...new Set(values)].sort((a, b) => b - a);\n  return distinct.length >= 2 ? distinct[1] : -1;\n}\n",
                ts: "function secondLargest(values: number[]): number {\n  const distinct = [...new Set(values)].sort((a, b) => b - a);\n  return distinct.length >= 2 ? distinct[1] : -1;\n}\n",
                commentedCode: {
                    js: "function secondLargest(values) {\n  // A Set removes duplicate values so repeated maxima count only once.\n  const distinct = [...new Set(values)];\n  // Place the distinct values from largest to smallest.\n  distinct.sort((a, b) => b - a);\n\n  // Index 1 is the runner-up when it exists; otherwise use the required fallback.\n  return distinct.length >= 2 ? distinct[1] : -1;\n}\n",
                    ts: "function secondLargest(values: number[]): number {\n  // A Set removes duplicate values so repeated maxima count only once.\n  const distinct = [...new Set(values)];\n  // Place the distinct values from largest to smallest.\n  distinct.sort((a, b) => b - a);\n\n  // Index 1 is the runner-up when it exists; otherwise use the required fallback.\n  return distinct.length >= 2 ? distinct[1] : -1;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Two trackers",
                approach: "Maintain the top two distinct values while scanning.",
                js: "function secondLargest(values) {\n  let first = -Infinity;\n  let second = -Infinity;\n  for (const v of values) {\n    if (v > first) {\n      second = first;\n      first = v;\n    } else if (v < first && v > second) {\n      second = v;\n    }\n  }\n  return second === -Infinity ? -1 : second;\n}\n",
                ts: "function secondLargest(values: number[]): number {\n  let first = -Infinity;\n  let second = -Infinity;\n  for (const v of values) {\n    if (v > first) {\n      second = first;\n      first = v;\n    } else if (v < first && v > second) {\n      second = v;\n    }\n  }\n  return second === -Infinity ? -1 : second;\n}\n",
                commentedCode: {
                    js: "function secondLargest(values) {\n  // Use sentinels until the largest and second-largest distinct values are found.\n  let first = -Infinity;\n  let second = -Infinity;\n\n  // Maintain the two greatest distinct values seen in the current prefix.\n  for (const value of values) {\n    if (value > first) {\n      // A new maximum pushes the previous maximum into second place.\n      second = first;\n      first = value;\n    } else if (value < first && value > second) {\n      // Skip duplicates of first, but promote a better distinct runner-up.\n      second = value;\n    }\n  }\n\n  // The sentinel remains only when no second distinct value was found.\n  return second === -Infinity ? -1 : second;\n}\n",
                    ts: "function secondLargest(values: number[]): number {\n  // Use sentinels until the largest and second-largest distinct values are found.\n  let first = -Infinity;\n  let second = -Infinity;\n\n  // Maintain the two greatest distinct values seen in the current prefix.\n  for (const value of values) {\n    if (value > first) {\n      // A new maximum pushes the previous maximum into second place.\n      second = first;\n      first = value;\n    } else if (value < first && value > second) {\n      // Skip duplicates of first, but promote a better distinct runner-up.\n      second = value;\n    }\n  }\n\n  // The sentinel remains only when no second distinct value was found.\n  return second === -Infinity ? -1 : second;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "fc-is-palindrome",
        slug: "is-palindrome",
        title: "Is It a Palindrome?",
        difficulty: "medium",
        statement: "Return `true` if the text reads the same forwards and backwards, comparing characters exactly (case matters). The empty string is a palindrome.",
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
            "0 <= text.length <= 10000"
        ],
        functionName: "isPalindrome",
        starter: {
            js: "function isPalindrome(text) {\n  // Return true if text reads the same both ways.\n}\n",
            ts: "function isPalindrome(text: string): boolean {\n  // Return true if text reads the same both ways.\n  return false;\n}\n"
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
            "Compare the first character with the last, then work inward.",
            "Use two indices moving toward each other; any mismatch means not a palindrome.",
            "let i=0, j=len-1; while (i<j) { if (text[i]!==text[j]) return false; i++; j--; } return true."
        ],
        solutions: [
            {
                label: "Two pointers",
                approach: "Walk inward from both ends comparing characters.",
                js: "function isPalindrome(text) {\n  let i = 0;\n  let j = text.length - 1;\n  while (i < j) {\n    if (text[i] !== text[j]) return false;\n    i++;\n    j--;\n  }\n  return true;\n}\n",
                ts: "function isPalindrome(text: string): boolean {\n  let i = 0;\n  let j = text.length - 1;\n  while (i < j) {\n    if (text[i] !== text[j]) return false;\n    i++;\n    j--;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isPalindrome(text) {\n  // Start one pointer at each end of the string.\n  let left = 0;\n  let right = text.length - 1;\n\n  // Compare mirrored positions until the pointers meet.\n  while (left < right) {\n    // One unequal mirrored pair proves the text is not a palindrome.\n    if (text[left] !== text[right]) {\n      return false;\n    }\n    // Move both pointers inward to the next mirrored pair.\n    left++;\n    right--;\n  }\n\n  // No mirrored pair differed, including for empty and one-character strings.\n  return true;\n}\n",
                    ts: "function isPalindrome(text: string): boolean {\n  // Start one pointer at each end of the string.\n  let left = 0;\n  let right = text.length - 1;\n\n  // Compare mirrored positions until the pointers meet.\n  while (left < right) {\n    // One unequal mirrored pair proves the text is not a palindrome.\n    if (text[left] !== text[right]) {\n      return false;\n    }\n    // Move both pointers inward to the next mirrored pair.\n    left++;\n    right--;\n  }\n\n  // No mirrored pair differed, including for empty and one-character strings.\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Reverse and compare",
                approach: "Build the reverse and check string equality.",
                js: "function isPalindrome(text) {\n  return text === text.split('').reverse().join('');\n}\n",
                ts: "function isPalindrome(text: string): boolean {\n  return text === text.split('').reverse().join('');\n}\n",
                commentedCode: {
                    js: "function isPalindrome(text) {\n  // Split into characters, reverse their order, and join them into a new string.\n  const reversed = text.split('').reverse().join('');\n  // A string is a palindrome exactly when it equals that reversed copy.\n  return text === reversed;\n}\n",
                    ts: "function isPalindrome(text: string): boolean {\n  // Split into characters, reverse their order, and join them into a new string.\n  const reversed = text.split('').reverse().join('');\n  // A string is a palindrome exactly when it equals that reversed copy.\n  return text === reversed;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fc-rotate-left",
        slug: "rotate-left",
        title: "Rotate Left",
        difficulty: "medium",
        statement: "Return the list rotated left by `k` positions. `k` may be larger than the list length. An empty list stays empty.",
        examples: [
            {
                input: "[1,2,3,4,5], 2",
                output: "[3,4,5,1,2]"
            },
            {
                input: "[1,2,3], 0",
                output: "[1,2,3]"
            },
            {
                input: "[1,2,3], 3",
                output: "[1,2,3]",
                explanation: "A full rotation returns the original."
            }
        ],
        constraints: [
            "0 <= values.length <= 10000",
            "0 <= k <= 1000000"
        ],
        functionName: "rotateLeft",
        starter: {
            js: "function rotateLeft(values, k) {\n  // Rotate the array left by k positions.\n}\n",
            ts: "function rotateLeft(values: number[], k: number): number[] {\n  // Rotate the array left by k positions.\n  return [];\n}\n"
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
                    3,
                    4,
                    5,
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
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    1
                ],
                expected: [
                    2,
                    3,
                    4,
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
                    4
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
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    7
                ],
                expected: [
                    3,
                    4,
                    5,
                    1,
                    2
                ]
            }
        ],
        hints: [
            "Rotating by the length brings you back to the start — so only `k % length` matters.",
            "Take the slice from the effective offset and append the front slice behind it.",
            "const s = k % n; return values.slice(s).concat(values.slice(0, s))."
        ],
        solutions: [
            {
                label: "Slice and concat",
                approach: "Reduce k modulo the length, then splice the two halves.",
                js: "function rotateLeft(values, k) {\n  const n = values.length;\n  if (n === 0) return [];\n  const s = k % n;\n  return values.slice(s).concat(values.slice(0, s));\n}\n",
                ts: "function rotateLeft(values: number[], k: number): number[] {\n  const n = values.length;\n  if (n === 0) return [];\n  const s = k % n;\n  return values.slice(s).concat(values.slice(0, s));\n}\n",
                commentedCode: {
                    js: "function rotateLeft(values, k) {\n  // Read the length once because it controls the empty case and rotation cycle.\n  const n = values.length;\n  // Avoid taking k modulo zero; the only rotation of an empty list is empty.\n  if (n === 0) {\n    return [];\n  }\n\n  // Full rotations have no effect, so keep only the remaining offset.\n  const shift = k % n;\n  // Put the suffix after the offset first, then append the removed prefix.\n  return values.slice(shift).concat(values.slice(0, shift));\n}\n",
                    ts: "function rotateLeft(values: number[], k: number): number[] {\n  // Read the length once because it controls the empty case and rotation cycle.\n  const n = values.length;\n  // Avoid taking k modulo zero; the only rotation of an empty list is empty.\n  if (n === 0) {\n    return [];\n  }\n\n  // Full rotations have no effect, so keep only the remaining offset.\n  const shift = k % n;\n  // Put the suffix after the offset first, then append the removed prefix.\n  return values.slice(shift).concat(values.slice(0, shift));\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Shift one at a time",
                approach: "Move the front element to the back, k mod n times.",
                js: "function rotateLeft(values, k) {\n  const n = values.length;\n  if (n === 0) return [];\n  const out = [...values];\n  const steps = k % n;\n  for (let i = 0; i < steps; i++) out.push(out.shift());\n  return out;\n}\n",
                ts: "function rotateLeft(values: number[], k: number): number[] {\n  const n = values.length;\n  if (n === 0) return [];\n  const out = [...values];\n  const steps = k % n;\n  for (let i = 0; i < steps; i++) out.push(out.shift() as number);\n  return out;\n}\n",
                commentedCode: {
                    js: "function rotateLeft(values, k) {\n  // Read the length before handling rotation cycles.\n  const n = values.length;\n  // Return a fresh empty list and avoid taking k modulo zero.\n  if (n === 0) {\n    return [];\n  }\n\n  // Work on a copy so the caller's input array is not mutated.\n  const out = [...values];\n  // Repeating n single-position rotations would restore the original order.\n  const steps = k % n;\n  for (let i = 0; i < steps; i++) {\n    // Remove the first value and append it at the back for one left rotation.\n    out.push(out.shift());\n  }\n\n  // Return the rotated copy after all effective steps.\n  return out;\n}\n",
                    ts: "function rotateLeft(values: number[], k: number): number[] {\n  // Read the length before handling rotation cycles.\n  const n = values.length;\n  // Return a fresh empty list and avoid taking k modulo zero.\n  if (n === 0) {\n    return [];\n  }\n\n  // Work on a copy so the caller's input array is not mutated.\n  const out = [...values];\n  // Repeating n single-position rotations would restore the original order.\n  const steps = k % n;\n  for (let i = 0; i < steps; i++) {\n    // The nonempty array guarantees shift returns a number for this rotation.\n    out.push(out.shift() as number);\n  }\n\n  // Return the rotated copy after all effective steps.\n  return out;\n}\n"
                },
                time: "O(n·k)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "fc-running-total",
        slug: "running-total",
        title: "Running Total",
        difficulty: "medium",
        statement: "Return a new list where each position holds the sum of all values up to and including that position (a prefix-sum).",
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
            "0 <= values.length <= 10000"
        ],
        functionName: "runningTotal",
        starter: {
            js: "function runningTotal(values) {\n  // Return the prefix sums of values.\n}\n",
            ts: "function runningTotal(values: number[]): number[] {\n  // Return the prefix sums of values.\n  return [];\n}\n"
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
            "Each output value is the previous output value plus the current input.",
            "Keep a running sum and push it after adding each element.",
            "let sum = 0; for v: sum += v; out.push(sum);"
        ],
        solutions: [
            {
                label: "Running sum",
                approach: "Accumulate and emit the total at each step.",
                js: "function runningTotal(values) {\n  const out = [];\n  let sum = 0;\n  for (const v of values) {\n    sum += v;\n    out.push(sum);\n  }\n  return out;\n}\n",
                ts: "function runningTotal(values: number[]): number[] {\n  const out: number[] = [];\n  let sum = 0;\n  for (const v of values) {\n    sum += v;\n    out.push(sum);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function runningTotal(values) {\n  // Build a separate result so the input list stays unchanged.\n  const out = [];\n  // Track the sum of all values visited so far.\n  let sum = 0;\n\n  // Extend the current prefix by one value at a time.\n  for (const value of values) {\n    // Include this value in the running prefix sum.\n    sum += value;\n    // Store the completed sum for this prefix position.\n    out.push(sum);\n  }\n\n  // Return one prefix sum for every input position.\n  return out;\n}\n",
                    ts: "function runningTotal(values: number[]): number[] {\n  // Build a separate result so the input list stays unchanged.\n  const out: number[] = [];\n  // Track the sum of all values visited so far.\n  let sum = 0;\n\n  // Extend the current prefix by one value at a time.\n  for (const value of values) {\n    // Include this value in the running prefix sum.\n    sum += value;\n    // Store the completed sum for this prefix position.\n    out.push(sum);\n  }\n\n  // Return one prefix sum for every input position.\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Map with carry",
                approach: "Carry the accumulated sum across a map.",
                js: "function runningTotal(values) {\n  let sum = 0;\n  return values.map((v) => (sum += v));\n}\n",
                ts: "function runningTotal(values: number[]): number[] {\n  let sum = 0;\n  return values.map((v) => (sum += v));\n}\n",
                commentedCode: {
                    js: "function runningTotal(values) {\n  // Carry the sum of all values processed by map so far.\n  let sum = 0;\n  // Add each value to the carry and emit the updated sum at the same position.\n  return values.map((value) => (sum += value));\n}\n",
                    ts: "function runningTotal(values: number[]): number[] {\n  // Carry the sum of all values processed by map so far.\n  let sum = 0;\n  // Add each value to the carry and emit the updated sum at the same position.\n  return values.map((value) => (sum += value));\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    }
];
const foundationsPool = poolDrafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const foundationsComplexityQuestions = [
    {
        id: "cx-single-scan",
        kind: "mcq",
        prompt: "You add up every element of an array with a single loop. What is the time complexity?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "You touch each of the n elements exactly once, so the work grows linearly with n."
    },
    {
        id: "cx-nested-loops",
        kind: "mcq",
        prompt: "Two loops, each running from 0 to n and one nested inside the other. What is the time complexity?",
        options: [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(2ⁿ)"
        ],
        answerIndex: 2,
        explanation: "For each of the n outer iterations you do n inner iterations: n × n = n²."
    },
    {
        id: "cx-binary-search",
        kind: "mcq",
        prompt: "Binary search on a sorted array halves the search space each step. Its time complexity is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answerIndex: 1,
        explanation: "Halving repeatedly means about log₂(n) steps before the range is empty."
    },
    {
        id: "cx-hashset-dupes",
        kind: "mcq",
        prompt: "Detecting duplicates by inserting into a hash set and checking membership runs in what average time?",
        options: [
            "O(1)",
            "O(n)",
            "O(n²)",
            "O(2ⁿ)"
        ],
        answerIndex: 1,
        explanation: "Each of n insert/lookup operations is O(1) on average, giving O(n) overall."
    },
    {
        id: "cx-closed-form-space",
        kind: "mcq",
        prompt: "Computing 1 + 2 + … + n with the formula n(n+1)/2 uses how much extra space?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "It stores a fixed number of values regardless of n, so constant space."
    }
];
const foundationsCheckpointModule = {
    id: "m-foundations-checkpoint",
    stageId: S,
    title: "Foundations Checkpoint",
    kind: "challengeTrack",
    summary: "Prove you've got the fundamentals: a held-out set of six problems plus complexity questions. Earns the Foundations badge.",
    lessonSections: [],
    drillProblemIds: [],
    testPoolProblemIds: poolDrafts.map((d)=>d.id),
    complexityQuestionIds: [
        "cx-single-scan",
        "cx-nested-loops",
        "cx-binary-search",
        "cx-hashset-dupes",
        "cx-closed-form-space"
    ],
    badgeId: "badge-foundations",
    prerequisiteModuleIds: [
        "m-foundations-thinking",
        "m-foundations-bigo",
        "m-foundations-js",
        "m-foundations-ts",
        "m-foundations-math"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/foundations/drills.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "foundationsDrills",
    ()=>foundationsDrills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s1";
const drafts = [
    /* ---------------- Module 1 · Thinking in Algorithms ---------------- */ {
        id: "f-sum-to",
        slug: "sum-to-n",
        title: "Sum to N",
        difficulty: "easy",
        statement: "Return the sum of every whole number from 1 up to and including `n`. If `n` is 0, the sum is 0.",
        examples: [
            {
                input: "5",
                output: "15",
                explanation: "1 + 2 + 3 + 4 + 5."
            },
            {
                input: "1",
                output: "1"
            },
            {
                input: "0",
                output: "0",
                explanation: "Nothing to add."
            }
        ],
        constraints: [
            "0 <= n <= 100000"
        ],
        functionName: "sumTo",
        starter: {
            js: "function sumTo(n) {\n  // Return 1 + 2 + ... + n.\n}\n",
            ts: "function sumTo(n: number): number {\n  // Return 1 + 2 + ... + n.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    5
                ],
                expected: 15
            },
            {
                args: [
                    1
                ],
                expected: 1
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
                    100
                ],
                expected: 5050
            },
            {
                args: [
                    10
                ],
                expected: 55
            },
            {
                args: [
                    2
                ],
                expected: 3
            },
            {
                args: [
                    3
                ],
                expected: 6
            },
            {
                args: [
                    50
                ],
                expected: 1275
            },
            {
                args: [
                    1000
                ],
                expected: 500500
            }
        ],
        hints: [
            "You could add the numbers one at a time in a loop.",
            "Start a running total at 0 and add each value from 1 to n.",
            "let total = 0; for (let i = 1; i <= n; i++) total += i; return total."
        ],
        walkthrough: [
            {
                title: "Choose the direct process",
                body: "The task asks for every integer from **1 through n**, so a forward loop naturally visits exactly the values that belong in the sum."
            },
            {
                title: "Store the running answer",
                body: "Start a variable at **0**, the additive identity. Each loop iteration adds the current number to that variable, so it always represents the sum of the numbers processed so far."
            },
            {
                title: "Set the loop boundary carefully",
                body: "The answer includes `n`, so the loop must continue while the counter is **less than or equal to n**. Starting at 1 also makes `n = 0` work without a special case because the loop never runs."
            },
            {
                title: "Return the accumulated value",
                body: "After the loop, every required number has been added once. Return the running total; there is no extra collection to build."
            }
        ],
        solutions: [
            {
                label: "Loop",
                approach: "Accumulate each value from 1 to n.",
                js: "function sumTo(n) {\n  let total = 0;\n  for (let i = 1; i <= n; i++) total += i;\n  return total;\n}\n",
                ts: "function sumTo(n: number): number {\n  let total = 0;\n  for (let i = 1; i <= n; i++) total += i;\n  return total;\n}\n",
                commentedCode: {
                    js: "function sumTo(n) {\n  // Hold the sum of all numbers processed so far.\n  let total = 0;\n\n  // Visit every integer that belongs in the requested range, including n.\n  for (let i = 1; i <= n; i++) {\n    // Add this integer before moving to the next one.\n    total += i;\n  }\n\n  // The loop has included every value from 1 through n.\n  return total;\n}\n",
                    ts: "function sumTo(n: number): number {\n  // Hold the sum of all numbers processed so far.\n  let total = 0;\n\n  // Visit every integer that belongs in the requested range, including n.\n  for (let i = 1; i <= n; i++) {\n    // Add this integer before moving to the next one.\n    total += i;\n  }\n\n  // The loop has included every value from 1 through n.\n  return total;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Closed form",
                approach: "Gauss's formula computes the same sum in constant time.",
                js: "function sumTo(n) {\n  return (n * (n + 1)) / 2;\n}\n",
                ts: "function sumTo(n: number): number {\n  return (n * (n + 1)) / 2;\n}\n",
                commentedCode: {
                    js: "function sumTo(n) {\n  // Pairing the first and last values gives the closed-form sum 1 + ... + n.\n  return (n * (n + 1)) / 2;\n}\n",
                    ts: "function sumTo(n: number): number {\n  // Pairing the first and last values gives the closed-form sum 1 + ... + n.\n  return (n * (n + 1)) / 2;\n}\n"
                },
                time: "O(1)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "f-count-vowels",
        slug: "count-vowels",
        title: "Count the Vowels",
        difficulty: "easy",
        statement: "Count how many vowels (`a`, `e`, `i`, `o`, `u`, any case) appear in the given word.",
        examples: [
            {
                input: '"hello"',
                output: "2"
            },
            {
                input: '"xyz"',
                output: "0"
            },
            {
                input: '"AEIOU"',
                output: "5",
                explanation: "Case does not matter."
            }
        ],
        constraints: [
            "0 <= word.length <= 10000",
            "letters and spaces only"
        ],
        functionName: "countVowels",
        starter: {
            js: "function countVowels(word) {\n  // Count a, e, i, o, u (any case).\n}\n",
            ts: "function countVowels(word: string): number {\n  // Count a, e, i, o, u (any case).\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "hello"
                ],
                expected: 2
            },
            {
                args: [
                    "xyz"
                ],
                expected: 0
            },
            {
                args: [
                    "AEIOU"
                ],
                expected: 5
            }
        ],
        hidden: [
            {
                args: [
                    ""
                ],
                expected: 0
            },
            {
                args: [
                    "Rhythm"
                ],
                expected: 0
            },
            {
                args: [
                    "banana"
                ],
                expected: 3
            },
            {
                args: [
                    "OpenAI"
                ],
                expected: 4
            },
            {
                args: [
                    "aaa"
                ],
                expected: 3
            },
            {
                args: [
                    "Queue"
                ],
                expected: 4
            }
        ],
        hints: [
            "Lowercase the letter first so you only test five characters.",
            "Keep a set of vowels and check membership as you scan each character.",
            'const vowels = new Set("aeiou"); count each ch where vowels.has(ch.toLowerCase()).'
        ],
        walkthrough: [
            {
                title: "Normalize before comparing",
                body: "Uppercase and lowercase vowels should count the same. Convert each character to lowercase at the moment you inspect it, rather than storing two versions of every vowel."
            },
            {
                title: "Make the vowel check explicit",
                body: "Keep the five lowercase vowels in a set. A set expresses the question we need to ask at every character: **is this character one of the allowed values?**"
            },
            {
                title: "Scan once and count matches",
                body: "Initialize a counter to 0, then visit each character in the word. Increase the counter only when its normalized form is in the set."
            },
            {
                title: "Return zero naturally for no matches",
                body: "An empty word or a word with no vowels never changes the counter, so returning it covers both cases without branching."
            }
        ],
        solutions: [
            {
                label: "Scan with a set",
                approach: "Walk each character and test lowercase membership in a vowel set.",
                js: 'function countVowels(word) {\n  const vowels = new Set(["a", "e", "i", "o", "u"]);\n  let count = 0;\n  for (const ch of word) {\n    if (vowels.has(ch.toLowerCase())) count++;\n  }\n  return count;\n}\n',
                ts: 'function countVowels(word: string): number {\n  const vowels = new Set(["a", "e", "i", "o", "u"]);\n  let count = 0;\n  for (const ch of word) {\n    if (vowels.has(ch.toLowerCase())) count++;\n  }\n  return count;\n}\n',
                commentedCode: {
                    js: 'function countVowels(word) {\n  // Store the only lowercase characters that count as vowels.\n  const vowels = new Set(["a", "e", "i", "o", "u"]);\n  // Start with no vowel matches.\n  let count = 0;\n\n  // Inspect every character in the input word once.\n  for (const ch of word) {\n    // Normalize case, then count this character only if it is a vowel.\n    if (vowels.has(ch.toLowerCase())) {\n      count++;\n    }\n  }\n\n  // Return the number of matching characters found.\n  return count;\n}\n',
                    ts: 'function countVowels(word: string): number {\n  // Store the only lowercase characters that count as vowels.\n  const vowels = new Set(["a", "e", "i", "o", "u"]);\n  // Start with no vowel matches.\n  let count = 0;\n\n  // Inspect every character in the input word once.\n  for (const ch of word) {\n    // Normalize case, then count this character only if it is a vowel.\n    if (vowels.has(ch.toLowerCase())) {\n      count++;\n    }\n  }\n\n  // Return the number of matching characters found.\n  return count;\n}\n'
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Regex match",
                approach: "Let a global, case-insensitive match do the counting.",
                js: "function countVowels(word) {\n  const matches = word.match(/[aeiou]/gi);\n  return matches ? matches.length : 0;\n}\n",
                ts: "function countVowels(word: string): number {\n  const matches = word.match(/[aeiou]/gi);\n  return matches ? matches.length : 0;\n}\n",
                commentedCode: {
                    js: "function countVowels(word) {\n  // Find every vowel, ignoring case; match returns null when there are none.\n  const matches = word.match(/[aeiou]/gi);\n  // Return the match count, or zero for the no-match case.\n  return matches ? matches.length : 0;\n}\n",
                    ts: "function countVowels(word: string): number {\n  // Find every vowel, ignoring case; match returns null when there are none.\n  const matches = word.match(/[aeiou]/gi);\n  // Return the match count, or zero for the no-match case.\n  return matches ? matches.length : 0;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "f-first-duplicate",
        slug: "first-duplicate",
        title: "First Repeat",
        difficulty: "medium",
        statement: "Return the first value that has already been seen earlier in the list (i.e. the value at the earliest position that repeats a previous value). If nothing repeats, return -1.",
        examples: [
            {
                input: "[2, 1, 3, 5, 3, 2]",
                output: "3",
                explanation: "3 repeats before 2 does."
            },
            {
                input: "[1, 2, 3]",
                output: "-1"
            },
            {
                input: "[5, 5]",
                output: "5"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "firstDuplicate",
        starter: {
            js: "function firstDuplicate(values) {\n  // Return the first value that repeats a previous one, or -1.\n}\n",
            ts: "function firstDuplicate(values: number[]): number {\n  // Return the first value that repeats a previous one, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        1,
                        3,
                        5,
                        3,
                        2
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
                        5,
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
                        7
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        1,
                        1,
                        2,
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        4,
                        3,
                        4,
                        3
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        9,
                        8,
                        7,
                        8,
                        9
                    ]
                ],
                expected: 8
            },
            {
                args: [
                    [
                        0,
                        0
                    ]
                ],
                expected: 0
            }
        ],
        hints: [
            "As you move left to right, you want to know instantly whether you've seen a value before.",
            "Keep a set of values seen so far; the first value already in the set is your answer.",
            "const seen = new Set(); for v of values: if seen.has(v) return v; seen.add(v); return -1."
        ],
        walkthrough: [
            {
                title: "Preserve the input order",
                body: "“First” refers to the earliest position that repeats something already seen. Scan from left to right so the first repeat you discover is automatically the correct answer."
            },
            {
                title: "Remember earlier values",
                body: "Use a set to represent the values from positions before the current one. Its membership check is constant time on average, which avoids repeatedly scanning the earlier part of the array."
            },
            {
                title: "Check before inserting",
                body: "For each value, first ask whether it is already in the set. If it is, return it immediately. Only unseen values should be added; reversing that order would make every value look like a duplicate of itself."
            },
            {
                title: "Handle the no-repeat case",
                body: "If the scan finishes without returning, no value occurred twice in the required order. Return the sentinel value `-1`."
            }
        ],
        solutions: [
            {
                label: "Brute force",
                approach: "For each element, look back at everything before it.",
                js: "function firstDuplicate(values) {\n  for (let i = 0; i < values.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (values[j] === values[i]) return values[i];\n    }\n  }\n  return -1;\n}\n",
                ts: "function firstDuplicate(values: number[]): number {\n  for (let i = 0; i < values.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (values[j] === values[i]) return values[i];\n    }\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function firstDuplicate(values) {\n  // Choose each position as the candidate repeat, in input order.\n  for (let i = 0; i < values.length; i++) {\n    // Compare the candidate with every earlier position only.\n    for (let j = 0; j < i; j++) {\n      // A match means this is the first position whose value has appeared before.\n      if (values[j] === values[i]) {\n        return values[i];\n      }\n    }\n  }\n\n  // No position matched a value that came before it.\n  return -1;\n}\n",
                    ts: "function firstDuplicate(values: number[]): number {\n  // Choose each position as the candidate repeat, in input order.\n  for (let i = 0; i < values.length; i++) {\n    // Compare the candidate with every earlier position only.\n    for (let j = 0; j < i; j++) {\n      // A match means this is the first position whose value has appeared before.\n      if (values[j] === values[i]) {\n        return values[i];\n      }\n    }\n  }\n\n  // No position matched a value that came before it.\n  return -1;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            },
            {
                label: "Seen set",
                approach: "Track everything seen so far in a hash set for O(1) lookups.",
                js: "function firstDuplicate(values) {\n  const seen = new Set();\n  for (const v of values) {\n    if (seen.has(v)) return v;\n    seen.add(v);\n  }\n  return -1;\n}\n",
                ts: "function firstDuplicate(values: number[]): number {\n  const seen = new Set<number>();\n  for (const v of values) {\n    if (seen.has(v)) return v;\n    seen.add(v);\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function firstDuplicate(values) {\n  // Track exactly the values that appeared before the current position.\n  const seen = new Set();\n\n  // Reading left to right preserves the problem's definition of first.\n  for (const v of values) {\n    // Check before adding so an unseen value does not match itself.\n    if (seen.has(v)) {\n      return v;\n    }\n    // Make this value available to later positions as an earlier value.\n    seen.add(v);\n  }\n\n  // The scan found no repeated value.\n  return -1;\n}\n",
                    ts: "function firstDuplicate(values: number[]): number {\n  // Track exactly the values that appeared before the current position.\n  const seen = new Set<number>();\n\n  // Reading left to right preserves the problem's definition of first.\n  for (const v of values) {\n    // Check before adding so an unseen value does not match itself.\n    if (seen.has(v)) {\n      return v;\n    }\n    // Make this value available to later positions as an earlier value.\n    seen.add(v);\n  }\n\n  // The scan found no repeated value.\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* ---------------- Module 2 · Big O ---------------- */ {
        id: "f-has-duplicate",
        slug: "has-duplicate",
        title: "Any Duplicates?",
        difficulty: "easy",
        statement: "Return `true` if any value appears more than once, otherwise `false`.",
        examples: [
            {
                input: "[1, 2, 3]",
                output: "false"
            },
            {
                input: "[1, 2, 1]",
                output: "true"
            },
            {
                input: "[]",
                output: "false"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "hasDuplicate",
        starter: {
            js: "function hasDuplicate(values) {\n  // Return true if any value repeats.\n}\n",
            ts: "function hasDuplicate(values: number[]): boolean {\n  // Return true if any value repeats.\n  return false;\n}\n"
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
                expected: false
            },
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
                    []
                ],
                expected: false
            }
        ],
        hidden: [
            {
                args: [
                    [
                        5
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        5,
                        5
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        0,
                        -1,
                        -2
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        9,
                        9,
                        9
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        10,
                        20,
                        30,
                        40
                    ]
                ],
                expected: false
            }
        ],
        hints: [
            "Comparing every pair works but is slow. What structure gives O(1) membership tests?",
            "Add values to a set one by one; if a value is already there, you found a duplicate.",
            "const seen = new Set(); for v: if seen.has(v) return true; seen.add(v); return false."
        ],
        solutions: [
            {
                label: "Compare all pairs",
                approach: "Check every unordered pair for equality.",
                js: "function hasDuplicate(values) {\n  for (let i = 0; i < values.length; i++) {\n    for (let j = i + 1; j < values.length; j++) {\n      if (values[i] === values[j]) return true;\n    }\n  }\n  return false;\n}\n",
                ts: "function hasDuplicate(values: number[]): boolean {\n  for (let i = 0; i < values.length; i++) {\n    for (let j = i + 1; j < values.length; j++) {\n      if (values[i] === values[j]) return true;\n    }\n  }\n  return false;\n}\n",
                commentedCode: {
                    js: "function hasDuplicate(values) {\n  // Choose each value as the first member of a possible duplicate pair.\n  for (let i = 0; i < values.length; i++) {\n    // Compare only with later positions so every pair is checked once.\n    for (let j = i + 1; j < values.length; j++) {\n      // Equal values at different positions prove a duplicate exists.\n      if (values[i] === values[j]) {\n        return true;\n      }\n    }\n  }\n\n  // No pair contained equal values.\n  return false;\n}\n",
                    ts: "function hasDuplicate(values: number[]): boolean {\n  // Choose each value as the first member of a possible duplicate pair.\n  for (let i = 0; i < values.length; i++) {\n    // Compare only with later positions so every pair is checked once.\n    for (let j = i + 1; j < values.length; j++) {\n      // Equal values at different positions prove a duplicate exists.\n      if (values[i] === values[j]) {\n        return true;\n      }\n    }\n  }\n\n  // No pair contained equal values.\n  return false;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            },
            {
                label: "Set membership",
                approach: "A single pass with a set of seen values.",
                js: "function hasDuplicate(values) {\n  const seen = new Set();\n  for (const v of values) {\n    if (seen.has(v)) return true;\n    seen.add(v);\n  }\n  return false;\n}\n",
                ts: "function hasDuplicate(values: number[]): boolean {\n  const seen = new Set<number>();\n  for (const v of values) {\n    if (seen.has(v)) return true;\n    seen.add(v);\n  }\n  return false;\n}\n",
                commentedCode: {
                    js: "function hasDuplicate(values) {\n  // Remember every value from the positions already processed.\n  const seen = new Set();\n\n  // Scan in input order, checking each value once.\n  for (const v of values) {\n    // A value already in the set has appeared at an earlier position.\n    if (seen.has(v)) {\n      return true;\n    }\n    // Make this value available when checking later positions.\n    seen.add(v);\n  }\n\n  // Every value was new when encountered.\n  return false;\n}\n",
                    ts: "function hasDuplicate(values: number[]): boolean {\n  // Remember every value from the positions already processed.\n  const seen = new Set<number>();\n\n  // Scan in input order, checking each value once.\n  for (const v of values) {\n    // A value already in the set has appeared at an earlier position.\n    if (seen.has(v)) {\n      return true;\n    }\n    // Make this value available when checking later positions.\n    seen.add(v);\n  }\n\n  // Every value was new when encountered.\n  return false;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "f-two-sum-exists",
        slug: "two-sum-exists",
        title: "Does a Pair Sum?",
        difficulty: "medium",
        statement: "Given a list of numbers and a `target`, return `true` if two values at different positions add up to `target`.",
        examples: [
            {
                input: "[2, 7, 11], 9",
                output: "true",
                explanation: "2 + 7 = 9."
            },
            {
                input: "[1, 2, 3], 7",
                output: "false"
            },
            {
                input: "[3, 3], 6",
                output: "true"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000",
            "use two different positions"
        ],
        functionName: "twoSumExists",
        starter: {
            js: "function twoSumExists(values, target) {\n  // Return true if two different positions sum to target.\n}\n",
            ts: "function twoSumExists(values: number[], target: number): boolean {\n  // Return true if two different positions sum to target.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        7,
                        11
                    ],
                    9
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
                    7
                ],
                expected: false
            },
            {
                args: [
                    [
                        3,
                        3
                    ],
                    6
                ],
                expected: true
            }
        ],
        hidden: [
            {
                args: [
                    [],
                    5
                ],
                expected: false
            },
            {
                args: [
                    [
                        5
                    ],
                    5
                ],
                expected: false
            },
            {
                args: [
                    [
                        0,
                        0
                    ],
                    0
                ],
                expected: true
            },
            {
                args: [
                    [
                        -1,
                        4,
                        2
                    ],
                    1
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4
                    ],
                    8
                ],
                expected: false
            },
            {
                args: [
                    [
                        4,
                        4,
                        4
                    ],
                    8
                ],
                expected: true
            }
        ],
        hints: [
            "For each value v, you need to know whether target - v is somewhere else in the list.",
            "Scan once, remembering values you've already seen; check if the complement was seen.",
            "const seen = new Set(); for v: if seen.has(target - v) return true; seen.add(v); return false."
        ],
        solutions: [
            {
                label: "Brute force",
                approach: "Try every pair of positions.",
                js: "function twoSumExists(values, target) {\n  for (let i = 0; i < values.length; i++) {\n    for (let j = i + 1; j < values.length; j++) {\n      if (values[i] + values[j] === target) return true;\n    }\n  }\n  return false;\n}\n",
                ts: "function twoSumExists(values: number[], target: number): boolean {\n  for (let i = 0; i < values.length; i++) {\n    for (let j = i + 1; j < values.length; j++) {\n      if (values[i] + values[j] === target) return true;\n    }\n  }\n  return false;\n}\n",
                commentedCode: {
                    js: "function twoSumExists(values, target) {\n  // Select the first position in each possible pair.\n  for (let i = 0; i < values.length; i++) {\n    // Start after i so the pair always uses two different positions.\n    for (let j = i + 1; j < values.length; j++) {\n      // Stop as soon as one pair produces the requested sum.\n      if (values[i] + values[j] === target) {\n        return true;\n      }\n    }\n  }\n\n  // Every distinct pair was tested without a match.\n  return false;\n}\n",
                    ts: "function twoSumExists(values: number[], target: number): boolean {\n  // Select the first position in each possible pair.\n  for (let i = 0; i < values.length; i++) {\n    // Start after i so the pair always uses two different positions.\n    for (let j = i + 1; j < values.length; j++) {\n      // Stop as soon as one pair produces the requested sum.\n      if (values[i] + values[j] === target) {\n        return true;\n      }\n    }\n  }\n\n  // Every distinct pair was tested without a match.\n  return false;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            },
            {
                label: "Complement set",
                approach: "Remember seen values; check for the needed complement in O(1).",
                js: "function twoSumExists(values, target) {\n  const seen = new Set();\n  for (const v of values) {\n    if (seen.has(target - v)) return true;\n    seen.add(v);\n  }\n  return false;\n}\n",
                ts: "function twoSumExists(values: number[], target: number): boolean {\n  const seen = new Set<number>();\n  for (const v of values) {\n    if (seen.has(target - v)) return true;\n    seen.add(v);\n  }\n  return false;\n}\n",
                commentedCode: {
                    js: "function twoSumExists(values, target) {\n  // Store values from positions before the current one.\n  const seen = new Set();\n\n  // Treat each value as the second member of a possible pair.\n  for (const v of values) {\n    // The required partner is whatever remains after subtracting v.\n    if (seen.has(target - v)) {\n      return true;\n    }\n    // Add v only after checking, so one position cannot pair with itself.\n    seen.add(v);\n  }\n\n  // No value had its required complement at an earlier position.\n  return false;\n}\n",
                    ts: "function twoSumExists(values: number[], target: number): boolean {\n  // Store values from positions before the current one.\n  const seen = new Set<number>();\n\n  // Treat each value as the second member of a possible pair.\n  for (const v of values) {\n    // The required partner is whatever remains after subtracting v.\n    if (seen.has(target - v)) {\n      return true;\n    }\n    // Add v only after checking, so one position cannot pair with itself.\n    seen.add(v);\n  }\n\n  // No value had its required complement at an earlier position.\n  return false;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "f-most-frequent",
        slug: "most-frequent",
        title: "Most Frequent Value",
        difficulty: "medium",
        statement: "Return the value that occurs most often. If several values tie for the most occurrences, return the smallest of them.",
        examples: [
            {
                input: "[1, 2, 2, 3]",
                output: "2"
            },
            {
                input: "[4, 4, 5, 5]",
                output: "4",
                explanation: "Tie broken toward the smaller value."
            },
            {
                input: "[7]",
                output: "7"
            }
        ],
        constraints: [
            "1 <= values.length <= 10000"
        ],
        functionName: "mostFrequent",
        starter: {
            js: "function mostFrequent(values) {\n  // Return the most frequent value (smallest wins ties).\n}\n",
            ts: "function mostFrequent(values: number[]): number {\n  // Return the most frequent value (smallest wins ties).\n  return 0;\n}\n"
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
                expected: 2
            },
            {
                args: [
                    [
                        4,
                        4,
                        5,
                        5
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        7
                    ]
                ],
                expected: 7
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
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        9,
                        8,
                        8,
                        9
                    ]
                ],
                expected: 8
            },
            {
                args: [
                    [
                        3,
                        3,
                        3,
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
                        -1,
                        -1,
                        -2
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        5,
                        6,
                        7
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    [
                        2,
                        2,
                        2
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "First tally how many times each value appears.",
            "Build a count map, then scan it for the highest count, preferring the smaller value on ties.",
            "counts = Map(); track best value where count is larger, or equal count with a smaller value."
        ],
        solutions: [
            {
                label: "Count then scan",
                approach: "Tally with a Map, then pick the winner applying the tie-break.",
                js: "function mostFrequent(values) {\n  const counts = new Map();\n  for (const v of values) counts.set(v, (counts.get(v) || 0) + 1);\n  let best = values[0];\n  let bestCount = 0;\n  for (const [v, c] of counts) {\n    if (c > bestCount || (c === bestCount && v < best)) {\n      best = v;\n      bestCount = c;\n    }\n  }\n  return best;\n}\n",
                ts: "function mostFrequent(values: number[]): number {\n  const counts = new Map<number, number>();\n  for (const v of values) counts.set(v, (counts.get(v) || 0) + 1);\n  let best = values[0];\n  let bestCount = 0;\n  for (const [v, c] of counts) {\n    if (c > bestCount || (c === bestCount && v < best)) {\n      best = v;\n      bestCount = c;\n    }\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function mostFrequent(values) {\n  // Count how many times each distinct value occurs.\n  const counts = new Map();\n  for (const v of values) {\n    counts.set(v, (counts.get(v) || 0) + 1);\n  }\n\n  // Seed the winner with a valid input value.\n  let best = values[0];\n  let bestCount = 0;\n\n  // Compare every distinct value with the current winner.\n  for (const [v, c] of counts) {\n    // Prefer a larger count, or the smaller value when counts tie.\n    if (c > bestCount || (c === bestCount && v < best)) {\n      best = v;\n      bestCount = c;\n    }\n  }\n\n  return best;\n}\n",
                    ts: "function mostFrequent(values: number[]): number {\n  // Count how many times each distinct value occurs.\n  const counts = new Map<number, number>();\n  for (const v of values) {\n    counts.set(v, (counts.get(v) || 0) + 1);\n  }\n\n  // Seed the winner with a valid input value.\n  let best = values[0];\n  let bestCount = 0;\n\n  // Compare every distinct value with the current winner.\n  for (const [v, c] of counts) {\n    // Prefer a larger count, or the smaller value when counts tie.\n    if (c > bestCount || (c === bestCount && v < best)) {\n      best = v;\n      bestCount = c;\n    }\n  }\n\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Sort then run-length",
                approach: "Sorting groups equal values; the smallest of a tie is met first.",
                js: "function mostFrequent(values) {\n  const sorted = [...values].sort((a, b) => a - b);\n  let best = sorted[0];\n  let bestCount = 0;\n  let cur = sorted[0];\n  let curCount = 0;\n  for (const v of sorted) {\n    if (v === cur) curCount++;\n    else {\n      cur = v;\n      curCount = 1;\n    }\n    if (curCount > bestCount) {\n      bestCount = curCount;\n      best = cur;\n    }\n  }\n  return best;\n}\n",
                ts: "function mostFrequent(values: number[]): number {\n  const sorted = [...values].sort((a, b) => a - b);\n  let best = sorted[0];\n  let bestCount = 0;\n  let cur = sorted[0];\n  let curCount = 0;\n  for (const v of sorted) {\n    if (v === cur) curCount++;\n    else {\n      cur = v;\n      curCount = 1;\n    }\n    if (curCount > bestCount) {\n      bestCount = curCount;\n      best = cur;\n    }\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function mostFrequent(values) {\n  // Sort a copy so equal values form consecutive runs without mutating the input.\n  const sorted = [...values].sort((a, b) => a - b);\n  let best = sorted[0];\n  let bestCount = 0;\n  let cur = sorted[0];\n  let curCount = 0;\n\n  // Measure each run of equal values.\n  for (const v of sorted) {\n    if (v === cur) {\n      curCount++;\n    } else {\n      // A new value begins a new run of length one.\n      cur = v;\n      curCount = 1;\n    }\n\n    // Update only for a strictly longer run; sorting leaves the smaller tie winner first.\n    if (curCount > bestCount) {\n      bestCount = curCount;\n      best = cur;\n    }\n  }\n\n  return best;\n}\n",
                    ts: "function mostFrequent(values: number[]): number {\n  // Sort a copy so equal values form consecutive runs without mutating the input.\n  const sorted = [...values].sort((a, b) => a - b);\n  let best = sorted[0];\n  let bestCount = 0;\n  let cur = sorted[0];\n  let curCount = 0;\n\n  // Measure each run of equal values.\n  for (const v of sorted) {\n    if (v === cur) {\n      curCount++;\n    } else {\n      // A new value begins a new run of length one.\n      cur = v;\n      curCount = 1;\n    }\n\n    // Update only for a strictly longer run; sorting leaves the smaller tie winner first.\n    if (curCount > bestCount) {\n      bestCount = curCount;\n      best = cur;\n    }\n  }\n\n  return best;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    /* ---------------- Module 3 · JavaScript for DSA ---------------- */ {
        id: "f-reverse-string",
        slug: "reverse-string",
        title: "Reverse a String",
        difficulty: "easy",
        statement: "Return the input text with its characters in reverse order.",
        examples: [
            {
                input: '"abc"',
                output: '"cba"'
            },
            {
                input: '""',
                output: '""'
            },
            {
                input: '"a"',
                output: '"a"'
            }
        ],
        constraints: [
            "0 <= text.length <= 10000"
        ],
        functionName: "reverseString",
        starter: {
            js: "function reverseString(text) {\n  // Return text reversed.\n}\n",
            ts: "function reverseString(text: string): string {\n  // Return text reversed.\n  return '';\n}\n"
        },
        visible: [
            {
                args: [
                    "abc"
                ],
                expected: "cba"
            },
            {
                args: [
                    ""
                ],
                expected: ""
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
                    "hello"
                ],
                expected: "olleh"
            },
            {
                args: [
                    "ab"
                ],
                expected: "ba"
            },
            {
                args: [
                    "AbC"
                ],
                expected: "CbA"
            },
            {
                args: [
                    "12345"
                ],
                expected: "54321"
            },
            {
                args: [
                    "  x"
                ],
                expected: "x  "
            },
            {
                args: [
                    "racecar"
                ],
                expected: "racecar"
            }
        ],
        hints: [
            "Strings can be turned into an array of characters.",
            "Split into characters, reverse the array, and join back together.",
            "return text.split('').reverse().join('')."
        ],
        solutions: [
            {
                label: "Split / reverse / join",
                approach: "Use built-in array methods.",
                js: "function reverseString(text) {\n  return text.split('').reverse().join('');\n}\n",
                ts: "function reverseString(text: string): string {\n  return text.split('').reverse().join('');\n}\n",
                commentedCode: {
                    js: "function reverseString(text) {\n  // Convert the immutable string to characters, reverse their order, and join them back.\n  return text.split('').reverse().join('');\n}\n",
                    ts: "function reverseString(text: string): string {\n  // Convert the immutable string to characters, reverse their order, and join them back.\n  return text.split('').reverse().join('');\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Build in reverse",
                approach: "Prepend each character to an accumulator.",
                js: "function reverseString(text) {\n  let out = '';\n  for (const ch of text) out = ch + out;\n  return out;\n}\n",
                ts: "function reverseString(text: string): string {\n  let out = '';\n  for (const ch of text) out = ch + out;\n  return out;\n}\n",
                commentedCode: {
                    js: "function reverseString(text) {\n  // Build the reversed result from an empty string.\n  let out = '';\n\n  // Prepending each next character places later input characters first.\n  for (const ch of text) {\n    out = ch + out;\n  }\n\n  return out;\n}\n",
                    ts: "function reverseString(text: string): string {\n  // Build the reversed result from an empty string.\n  let out = '';\n\n  // Prepending each next character places later input characters first.\n  for (const ch of text) {\n    out = ch + out;\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "f-chunk",
        slug: "chunk-array",
        title: "Chunk an Array",
        difficulty: "easy",
        statement: "Split the list into consecutive groups of at most `size` items. The final group may be smaller.",
        examples: [
            {
                input: "[1,2,3,4,5], 2",
                output: "[[1,2],[3,4],[5]]"
            },
            {
                input: "[1,2,3], 3",
                output: "[[1,2,3]]"
            },
            {
                input: "[], 2",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000",
            "1 <= size <= 10000"
        ],
        functionName: "chunk",
        starter: {
            js: "function chunk(values, size) {\n  // Split into groups of at most `size`.\n}\n",
            ts: "function chunk(values: number[], size: number): number[][] {\n  // Split into groups of at most `size`.\n  return [];\n}\n"
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
                    [
                        1,
                        2
                    ],
                    [
                        3,
                        4
                    ],
                    [
                        5
                    ]
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
                    [
                        1,
                        2,
                        3
                    ]
                ]
            },
            {
                args: [
                    [],
                    2
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
                        4
                    ],
                    2
                ],
                expected: [
                    [
                        1,
                        2
                    ],
                    [
                        3,
                        4
                    ]
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
                    [
                        1
                    ]
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
                    10
                ],
                expected: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
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
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        4,
                        5,
                        6
                    ]
                ]
            },
            {
                args: [
                    [
                        9,
                        9
                    ],
                    1
                ],
                expected: [
                    [
                        9
                    ],
                    [
                        9
                    ]
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
                    [
                        1,
                        2
                    ],
                    [
                        3
                    ]
                ]
            }
        ],
        hints: [
            "Step through the list `size` items at a time.",
            "Use a loop whose index jumps by `size`, slicing each window.",
            "for (let i = 0; i < values.length; i += size) push values.slice(i, i + size)."
        ],
        solutions: [
            {
                label: "Slice by stride",
                approach: "Advance the start index by `size` and slice each window.",
                js: "function chunk(values, size) {\n  const out = [];\n  for (let i = 0; i < values.length; i += size) {\n    out.push(values.slice(i, i + size));\n  }\n  return out;\n}\n",
                ts: "function chunk(values: number[], size: number): number[][] {\n  const out: number[][] = [];\n  for (let i = 0; i < values.length; i += size) {\n    out.push(values.slice(i, i + size));\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function chunk(values, size) {\n  // Collect each consecutive chunk in output order.\n  const out = [];\n\n  // Jump directly to the starting index of each chunk.\n  for (let i = 0; i < values.length; i += size) {\n    // Slice stops at the array boundary, so the final chunk may be shorter.\n    out.push(values.slice(i, i + size));\n  }\n\n  return out;\n}\n",
                    ts: "function chunk(values: number[], size: number): number[][] {\n  // Collect each consecutive chunk in output order.\n  const out: number[][] = [];\n\n  // Jump directly to the starting index of each chunk.\n  for (let i = 0; i < values.length; i += size) {\n    // Slice stops at the array boundary, so the final chunk may be shorter.\n    out.push(values.slice(i, i + size));\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Push into last group",
                approach: "Start a new group whenever the current one is full.",
                js: "function chunk(values, size) {\n  const out = [];\n  for (const v of values) {\n    const last = out[out.length - 1];\n    if (!last || last.length === size) out.push([v]);\n    else last.push(v);\n  }\n  return out;\n}\n",
                ts: "function chunk(values: number[], size: number): number[][] {\n  const out: number[][] = [];\n  for (const v of values) {\n    const last = out[out.length - 1];\n    if (!last || last.length === size) out.push([v]);\n    else last.push(v);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function chunk(values, size) {\n  // Build chunks incrementally while preserving input order.\n  const out = [];\n\n  for (const v of values) {\n    // Read the current final chunk, if one exists.\n    const last = out[out.length - 1];\n\n    if (!last || last.length === size) {\n      // Start a new chunk when there is none or the last one is full.\n      out.push([v]);\n    } else {\n      // Otherwise append to the chunk that still has room.\n      last.push(v);\n    }\n  }\n\n  return out;\n}\n",
                    ts: "function chunk(values: number[], size: number): number[][] {\n  // Build chunks incrementally while preserving input order.\n  const out: number[][] = [];\n\n  for (const v of values) {\n    // Read the current final chunk, if one exists.\n    const last = out[out.length - 1];\n\n    if (!last || last.length === size) {\n      // Start a new chunk when there is none or the last one is full.\n      out.push([v]);\n    } else {\n      // Otherwise append to the chunk that still has room.\n      last.push(v);\n    }\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "f-group-parity",
        slug: "group-by-parity",
        title: "Group by Parity",
        difficulty: "medium",
        statement: "Return an object `{ even, odd }` where each field lists the numbers of that parity in their original order.",
        examples: [
            {
                input: "[1,2,3,4]",
                output: '{ even: [2,4], odd: [1,3] }'
            },
            {
                input: "[]",
                output: "{ even: [], odd: [] }"
            },
            {
                input: "[2,4]",
                output: "{ even: [2,4], odd: [] }"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "groupByParity",
        starter: {
            js: "function groupByParity(nums) {\n  // Return { even: [...], odd: [...] }.\n}\n",
            ts: "function groupByParity(nums: number[]): { even: number[]; odd: number[] } {\n  // Return { even: [...], odd: [...] }.\n  return { even: [], odd: [] };\n}\n"
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
                expected: {
                    even: [
                        2,
                        4
                    ],
                    odd: [
                        1,
                        3
                    ]
                }
            },
            {
                args: [
                    []
                ],
                expected: {
                    even: [],
                    odd: []
                }
            },
            {
                args: [
                    [
                        2,
                        4
                    ]
                ],
                expected: {
                    even: [
                        2,
                        4
                    ],
                    odd: []
                }
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        3,
                        5
                    ]
                ],
                expected: {
                    even: [],
                    odd: [
                        1,
                        3,
                        5
                    ]
                }
            },
            {
                args: [
                    [
                        0
                    ]
                ],
                expected: {
                    even: [
                        0
                    ],
                    odd: []
                }
            },
            {
                args: [
                    [
                        -2,
                        -3
                    ]
                ],
                expected: {
                    even: [
                        -2
                    ],
                    odd: [
                        -3
                    ]
                }
            },
            {
                args: [
                    [
                        7,
                        8,
                        9,
                        10
                    ]
                ],
                expected: {
                    even: [
                        8,
                        10
                    ],
                    odd: [
                        7,
                        9
                    ]
                }
            },
            {
                args: [
                    [
                        2
                    ]
                ],
                expected: {
                    even: [
                        2
                    ],
                    odd: []
                }
            },
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: {
                    even: [],
                    odd: [
                        1
                    ]
                }
            }
        ],
        hints: [
            "A number is even when `n % 2 === 0` (careful: this holds for negatives too).",
            "Create two arrays and push each number into the right one as you scan.",
            "for n of nums: (n % 2 === 0 ? even : odd).push(n); return { even, odd }."
        ],
        solutions: [
            {
                label: "Two buckets",
                approach: "Push each value into the even or odd list.",
                js: "function groupByParity(nums) {\n  const even = [];\n  const odd = [];\n  for (const n of nums) {\n    if (n % 2 === 0) even.push(n);\n    else odd.push(n);\n  }\n  return { even, odd };\n}\n",
                ts: "function groupByParity(nums: number[]): { even: number[]; odd: number[] } {\n  const even: number[] = [];\n  const odd: number[] = [];\n  for (const n of nums) {\n    if (n % 2 === 0) even.push(n);\n    else odd.push(n);\n  }\n  return { even, odd };\n}\n",
                commentedCode: {
                    js: "function groupByParity(nums) {\n  // Keep separate output buckets for the two possible parities.\n  const even = [];\n  const odd = [];\n\n  // Process values left to right to preserve their order within each bucket.\n  for (const n of nums) {\n    // A zero remainder after division by two identifies an even number.\n    if (n % 2 === 0) {\n      even.push(n);\n    } else {\n      odd.push(n);\n    }\n  }\n\n  return { even, odd };\n}\n",
                    ts: "function groupByParity(nums: number[]): { even: number[]; odd: number[] } {\n  // Keep separate output buckets for the two possible parities.\n  const even: number[] = [];\n  const odd: number[] = [];\n\n  // Process values left to right to preserve their order within each bucket.\n  for (const n of nums) {\n    // A zero remainder after division by two identifies an even number.\n    if (n % 2 === 0) {\n      even.push(n);\n    } else {\n      odd.push(n);\n    }\n  }\n\n  return { even, odd };\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Filter twice",
                approach: "Two filters read clearly at the cost of a second pass.",
                js: "function groupByParity(nums) {\n  return {\n    even: nums.filter((n) => n % 2 === 0),\n    odd: nums.filter((n) => n % 2 !== 0),\n  };\n}\n",
                ts: "function groupByParity(nums: number[]): { even: number[]; odd: number[] } {\n  return {\n    even: nums.filter((n) => n % 2 === 0),\n    odd: nums.filter((n) => n % 2 !== 0),\n  };\n}\n",
                commentedCode: {
                    js: "function groupByParity(nums) {\n  return {\n    // Keep values divisible by two in their original order.\n    even: nums.filter((n) => n % 2 === 0),\n    // A second pass keeps every value with a nonzero remainder.\n    odd: nums.filter((n) => n % 2 !== 0),\n  };\n}\n",
                    ts: "function groupByParity(nums: number[]): { even: number[]; odd: number[] } {\n  return {\n    // Keep values divisible by two in their original order.\n    even: nums.filter((n) => n % 2 === 0),\n    // A second pass keeps every value with a nonzero remainder.\n    odd: nums.filter((n) => n % 2 !== 0),\n  };\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* ---------------- Module 4 · TypeScript for DSA ---------------- */ {
        id: "f-unique-values",
        slug: "unique-values",
        title: "Unique, In Order",
        difficulty: "easy",
        statement: "Return the values with duplicates removed, keeping only the first occurrence of each in its original order.",
        examples: [
            {
                input: "[1,2,2,3]",
                output: "[1,2,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[5,5,5]",
                output: "[5]"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "uniqueValues",
        starter: {
            js: "function uniqueValues(values) {\n  // Return unique values, first-seen order.\n}\n",
            ts: "function uniqueValues(values: number[]): number[] {\n  // Return unique values, first-seen order.\n  return [];\n}\n"
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
                        5,
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
                        3,
                        2,
                        1
                    ]
                ],
                expected: [
                    3,
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
                    2,
                    3
                ]
            },
            {
                args: [
                    [
                        0,
                        0,
                        1,
                        1
                    ]
                ],
                expected: [
                    0,
                    1
                ]
            },
            {
                args: [
                    [
                        -1,
                        -1,
                        -2
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
                        9
                    ]
                ],
                expected: [
                    9
                ]
            },
            {
                args: [
                    [
                        4,
                        5,
                        4,
                        5,
                        6
                    ]
                ],
                expected: [
                    4,
                    5,
                    6
                ]
            }
        ],
        hints: [
            "You need to remember which values have already been output.",
            "Track seen values in a set; only append a value the first time you meet it.",
            "const seen = new Set(); push v only when !seen.has(v), then seen.add(v)."
        ],
        solutions: [
            {
                label: "Seen set",
                approach: "Append each value the first time it is encountered.",
                js: "function uniqueValues(values) {\n  const seen = new Set();\n  const out = [];\n  for (const v of values) {\n    if (!seen.has(v)) {\n      seen.add(v);\n      out.push(v);\n    }\n  }\n  return out;\n}\n",
                ts: "function uniqueValues(values: number[]): number[] {\n  const seen = new Set<number>();\n  const out: number[] = [];\n  for (const v of values) {\n    if (!seen.has(v)) {\n      seen.add(v);\n      out.push(v);\n    }\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function uniqueValues(values) {\n  // Track values already copied so duplicates can be skipped.\n  const seen = new Set();\n  const out = [];\n\n  // Reading left to right preserves first-occurrence order.\n  for (const v of values) {\n    if (!seen.has(v)) {\n      // Mark and append only the first time this value appears.\n      seen.add(v);\n      out.push(v);\n    }\n  }\n\n  return out;\n}\n",
                    ts: "function uniqueValues(values: number[]): number[] {\n  // Track values already copied so duplicates can be skipped.\n  const seen = new Set<number>();\n  const out: number[] = [];\n\n  // Reading left to right preserves first-occurrence order.\n  for (const v of values) {\n    if (!seen.has(v)) {\n      // Mark and append only the first time this value appears.\n      seen.add(v);\n      out.push(v);\n    }\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Filter by first index",
                approach: "Keep a value only where its index equals its first index.",
                js: "function uniqueValues(values) {\n  return values.filter((v, i) => values.indexOf(v) === i);\n}\n",
                ts: "function uniqueValues(values: number[]): number[] {\n  return values.filter((v, i) => values.indexOf(v) === i);\n}\n",
                commentedCode: {
                    js: "function uniqueValues(values) {\n  // Keep a value only at the index where it first appears in the array.\n  return values.filter((v, i) => values.indexOf(v) === i);\n}\n",
                    ts: "function uniqueValues(values: number[]): number[] {\n  // Keep a value only at the index where it first appears in the array.\n  return values.filter((v, i) => values.indexOf(v) === i);\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "f-count-by",
        slug: "count-by",
        title: "Count Each Word",
        difficulty: "medium",
        statement: "Given a list of words, return an object mapping each distinct word to how many times it appears.",
        examples: [
            {
                input: '["a","b","a"]',
                output: '{ a: 2, b: 1 }'
            },
            {
                input: "[]",
                output: "{}"
            },
            {
                input: '["x"]',
                output: '{ x: 1 }'
            }
        ],
        constraints: [
            "0 <= words.length <= 10000"
        ],
        functionName: "countBy",
        starter: {
            js: "function countBy(words) {\n  // Return { word: count }.\n}\n",
            ts: "function countBy(words: string[]): Record<string, number> {\n  // Return { word: count }.\n  return {};\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        "a",
                        "b",
                        "a"
                    ]
                ],
                expected: {
                    a: 2,
                    b: 1
                }
            },
            {
                args: [
                    []
                ],
                expected: {}
            },
            {
                args: [
                    [
                        "x"
                    ]
                ],
                expected: {
                    x: 1
                }
            }
        ],
        hidden: [
            {
                args: [
                    [
                        "hi",
                        "hi",
                        "hi"
                    ]
                ],
                expected: {
                    hi: 3
                }
            },
            {
                args: [
                    [
                        "a",
                        "b",
                        "c"
                    ]
                ],
                expected: {
                    a: 1,
                    b: 1,
                    c: 1
                }
            },
            {
                args: [
                    [
                        "z",
                        "y",
                        "z",
                        "y"
                    ]
                ],
                expected: {
                    z: 2,
                    y: 2
                }
            },
            {
                args: [
                    [
                        "one"
                    ]
                ],
                expected: {
                    one: 1
                }
            },
            {
                args: [
                    [
                        "dup",
                        "dup"
                    ]
                ],
                expected: {
                    dup: 2
                }
            },
            {
                args: [
                    [
                        "m",
                        "n",
                        "m",
                        "m"
                    ]
                ],
                expected: {
                    m: 3,
                    n: 1
                }
            }
        ],
        hints: [
            "Each word's running count lives under its own key.",
            "Initialise a plain object and increment `result[word]` for each word.",
            "for w of words: result[w] = (result[w] || 0) + 1; return result."
        ],
        solutions: [
            {
                label: "Accumulate into an object",
                approach: "Increment a per-word counter, defaulting missing keys to 0.",
                js: "function countBy(words) {\n  const result = {};\n  for (const w of words) {\n    result[w] = (result[w] || 0) + 1;\n  }\n  return result;\n}\n",
                ts: "function countBy(words: string[]): Record<string, number> {\n  const result: Record<string, number> = {};\n  for (const w of words) {\n    result[w] = (result[w] || 0) + 1;\n  }\n  return result;\n}\n",
                commentedCode: {
                    js: "function countBy(words) {\n  // Use one object key per distinct word.\n  const result = {};\n\n  for (const w of words) {\n    // Read the existing count, default missing words to zero, then add this occurrence.\n    result[w] = (result[w] || 0) + 1;\n  }\n\n  return result;\n}\n",
                    ts: "function countBy(words: string[]): Record<string, number> {\n  // Use one object key per distinct word.\n  const result: Record<string, number> = {};\n\n  for (const w of words) {\n    // Read the existing count, default missing words to zero, then add this occurrence.\n    result[w] = (result[w] || 0) + 1;\n  }\n\n  return result;\n}\n"
                },
                time: "O(n)",
                space: "O(k)"
            },
            {
                label: "Reduce",
                approach: "Fold the list into a counts object.",
                js: "function countBy(words) {\n  return words.reduce((acc, w) => {\n    acc[w] = (acc[w] || 0) + 1;\n    return acc;\n  }, {});\n}\n",
                ts: "function countBy(words: string[]): Record<string, number> {\n  return words.reduce<Record<string, number>>((acc, w) => {\n    acc[w] = (acc[w] || 0) + 1;\n    return acc;\n  }, {});\n}\n",
                commentedCode: {
                    js: "function countBy(words) {\n  // Fold every word into one shared counts object.\n  return words.reduce((acc, w) => {\n    // Increment this word's count, starting from zero when the key is absent.\n    acc[w] = (acc[w] || 0) + 1;\n    // Return the accumulator so reduce carries it to the next iteration.\n    return acc;\n  }, {});\n}\n",
                    ts: "function countBy(words: string[]): Record<string, number> {\n  // Fold every word into one shared counts object.\n  return words.reduce<Record<string, number>>((acc, w) => {\n    // Increment this word's count, starting from zero when the key is absent.\n    acc[w] = (acc[w] || 0) + 1;\n    // Return the accumulator so reduce carries it to the next iteration.\n    return acc;\n  }, {});\n}\n"
                },
                time: "O(n)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "f-flatten-one",
        slug: "flatten-one-level",
        title: "Flatten One Level",
        difficulty: "medium",
        statement: "The input is a list whose items are either numbers or lists of numbers. Return a single flat list by unwrapping exactly one level of nesting.",
        examples: [
            {
                input: "[[1,2],[3],4]",
                output: "[1,2,3,4]"
            },
            {
                input: "[1,2,3]",
                output: "[1,2,3]"
            },
            {
                input: "[[1],[2],[3]]",
                output: "[1,2,3]"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000",
            "nesting is at most one level deep"
        ],
        functionName: "flattenDepthOne",
        starter: {
            js: "function flattenDepthOne(values) {\n  // Flatten exactly one level.\n}\n",
            ts: "function flattenDepthOne(values: Array<number | number[]>): number[] {\n  // Flatten exactly one level.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            3
                        ],
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
                        [
                            1
                        ],
                        [
                            2
                        ],
                        [
                            3
                        ]
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
                    []
                ],
                expected: []
            },
            {
                args: [
                    [
                        []
                    ]
                ],
                expected: []
            },
            {
                args: [
                    [
                        5,
                        [
                            6,
                            7
                        ]
                    ]
                ],
                expected: [
                    5,
                    6,
                    7
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            2,
                            3
                        ]
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
                        [
                            -1
                        ],
                        -2
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
                        [
                            1
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            4,
                            5,
                            6
                        ]
                    ]
                ],
                expected: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ]
            }
        ],
        hints: [
            "Handle two cases per element: it's a number, or it's an array of numbers.",
            "Use `Array.isArray(item)` to decide whether to spread it or push it.",
            "for item of values: Array.isArray(item) ? out.push(...item) : out.push(item)."
        ],
        solutions: [
            {
                label: "Check each item",
                approach: "Spread arrays, push scalars.",
                js: "function flattenDepthOne(values) {\n  const out = [];\n  for (const item of values) {\n    if (Array.isArray(item)) out.push(...item);\n    else out.push(item);\n  }\n  return out;\n}\n",
                ts: "function flattenDepthOne(values: Array<number | number[]>): number[] {\n  const out: number[] = [];\n  for (const item of values) {\n    if (Array.isArray(item)) out.push(...item);\n    else out.push(item);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function flattenDepthOne(values) {\n  // Collect every scalar in one output array.\n  const out = [];\n\n  for (const item of values) {\n    if (Array.isArray(item)) {\n      // Spread a nested array so its numbers are appended individually.\n      out.push(...item);\n    } else {\n      // A scalar is already at the desired depth.\n      out.push(item);\n    }\n  }\n\n  return out;\n}\n",
                    ts: "function flattenDepthOne(values: Array<number | number[]>): number[] {\n  // Collect every scalar in one output array.\n  const out: number[] = [];\n\n  for (const item of values) {\n    if (Array.isArray(item)) {\n      // Spread a nested array so its numbers are appended individually.\n      out.push(...item);\n    } else {\n      // A scalar is already at the desired depth.\n      out.push(item);\n    }\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Built-in flat",
                approach: "`Array.prototype.flat(1)` does exactly one level.",
                js: "function flattenDepthOne(values) {\n  return values.flat(1);\n}\n",
                ts: "function flattenDepthOne(values: Array<number | number[]>): number[] {\n  return values.flat(1) as number[];\n}\n",
                commentedCode: {
                    js: "function flattenDepthOne(values) {\n  // Flatten with depth one so only the allowed single nesting layer is removed.\n  return values.flat(1);\n}\n",
                    ts: "function flattenDepthOne(values: Array<number | number[]>): number[] {\n  // Flatten with depth one; the input contract guarantees the result contains numbers.\n  return values.flat(1) as number[];\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* ---------------- Module 5 · Math Toolkit ---------------- */ {
        id: "f-digit-sum",
        slug: "digit-sum",
        title: "Digit Sum",
        difficulty: "easy",
        statement: "Return the sum of the decimal digits of a non-negative integer.",
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
        functionName: "digitSum",
        starter: {
            js: "function digitSum(n) {\n  // Sum the decimal digits of n.\n}\n",
            ts: "function digitSum(n: number): number {\n  // Sum the decimal digits of n.\n  return 0;\n}\n"
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
                    100000
                ],
                expected: 1
            },
            {
                args: [
                    505
                ],
                expected: 10
            }
        ],
        hints: [
            "The last digit of a number is its remainder when divided by 10.",
            "Repeatedly take `n % 10`, add it, then drop that digit with integer division by 10.",
            "while (n > 0) { sum += n % 10; n = Math.floor(n / 10); }"
        ],
        solutions: [
            {
                label: "Modulo peel",
                approach: "Strip digits from the right with % and integer division.",
                js: "function digitSum(n) {\n  let sum = 0;\n  while (n > 0) {\n    sum += n % 10;\n    n = Math.floor(n / 10);\n  }\n  return sum;\n}\n",
                ts: "function digitSum(n: number): number {\n  let sum = 0;\n  while (n > 0) {\n    sum += n % 10;\n    n = Math.floor(n / 10);\n  }\n  return sum;\n}\n",
                commentedCode: {
                    js: "function digitSum(n) {\n  // Accumulate digits removed from the right side of the number.\n  let sum = 0;\n\n  while (n > 0) {\n    // The remainder after division by ten is the current last digit.\n    sum += n % 10;\n    // Integer division removes that digit before the next iteration.\n    n = Math.floor(n / 10);\n  }\n\n  // For n = 0 the loop is skipped, leaving the correct sum of zero.\n  return sum;\n}\n",
                    ts: "function digitSum(n: number): number {\n  // Accumulate digits removed from the right side of the number.\n  let sum = 0;\n\n  while (n > 0) {\n    // The remainder after division by ten is the current last digit.\n    sum += n % 10;\n    // Integer division removes that digit before the next iteration.\n    n = Math.floor(n / 10);\n  }\n\n  // For n = 0 the loop is skipped, leaving the correct sum of zero.\n  return sum;\n}\n"
                },
                time: "O(log n)",
                space: "O(1)"
            },
            {
                label: "String digits",
                approach: "Treat the number as text and total its digit characters.",
                js: "function digitSum(n) {\n  return String(n).split('').reduce((s, d) => s + Number(d), 0);\n}\n",
                ts: "function digitSum(n: number): number {\n  return String(n).split('').reduce((s, d) => s + Number(d), 0);\n}\n",
                commentedCode: {
                    js: "function digitSum(n) {\n  // Convert to digit characters, then add each numeric digit to a total starting at zero.\n  return String(n).split('').reduce((s, d) => s + Number(d), 0);\n}\n",
                    ts: "function digitSum(n: number): number {\n  // Convert to digit characters, then add each numeric digit to a total starting at zero.\n  return String(n).split('').reduce((s, d) => s + Number(d), 0);\n}\n"
                },
                time: "O(log n)",
                space: "O(log n)"
            }
        ]
    },
    {
        id: "f-gcd",
        slug: "greatest-common-divisor",
        title: "Greatest Common Divisor",
        difficulty: "medium",
        statement: "Return the largest positive integer that divides both `a` and `b` with no remainder.",
        examples: [
            {
                input: "12, 8",
                output: "4"
            },
            {
                input: "7, 5",
                output: "1",
                explanation: "Coprime."
            },
            {
                input: "100, 10",
                output: "10"
            }
        ],
        constraints: [
            "1 <= a, b <= 1000000"
        ],
        functionName: "gcd",
        starter: {
            js: "function gcd(a, b) {\n  // Greatest common divisor of a and b.\n}\n",
            ts: "function gcd(a: number, b: number): number {\n  // Greatest common divisor of a and b.\n  return 1;\n}\n"
        },
        visible: [
            {
                args: [
                    12,
                    8
                ],
                expected: 4
            },
            {
                args: [
                    7,
                    5
                ],
                expected: 1
            },
            {
                args: [
                    100,
                    10
                ],
                expected: 10
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    1
                ],
                expected: 1
            },
            {
                args: [
                    17,
                    17
                ],
                expected: 17
            },
            {
                args: [
                    48,
                    36
                ],
                expected: 12
            },
            {
                args: [
                    1000000,
                    2
                ],
                expected: 2
            },
            {
                args: [
                    81,
                    27
                ],
                expected: 27
            },
            {
                args: [
                    13,
                    26
                ],
                expected: 13
            }
        ],
        hints: [
            "gcd(a, b) equals gcd(b, a mod b) — the remainder shrinks the problem fast.",
            "Repeatedly replace (a, b) with (b, a % b) until b becomes 0; a holds the answer.",
            "while (b !== 0) { [a, b] = [b, a % b]; } return a."
        ],
        solutions: [
            {
                label: "Euclid's algorithm",
                approach: "Reduce with the remainder until one argument is zero.",
                js: "function gcd(a, b) {\n  while (b !== 0) {\n    const t = b;\n    b = a % b;\n    a = t;\n  }\n  return a;\n}\n",
                ts: "function gcd(a: number, b: number): number {\n  while (b !== 0) {\n    const t = b;\n    b = a % b;\n    a = t;\n  }\n  return a;\n}\n",
                commentedCode: {
                    js: "function gcd(a, b) {\n  // Repeatedly replace the pair with (b, a mod b).\n  while (b !== 0) {\n    // Save the old divisor before overwriting b with the remainder.\n    const t = b;\n    b = a % b;\n    a = t;\n  }\n\n  // When the remainder reaches zero, a is the greatest common divisor.\n  return a;\n}\n",
                    ts: "function gcd(a: number, b: number): number {\n  // Repeatedly replace the pair with (b, a mod b).\n  while (b !== 0) {\n    // Save the old divisor before overwriting b with the remainder.\n    const t = b;\n    b = a % b;\n    a = t;\n  }\n\n  // When the remainder reaches zero, a is the greatest common divisor.\n  return a;\n}\n"
                },
                time: "O(log min(a,b))",
                space: "O(1)"
            },
            {
                label: "Scan downward",
                approach: "Try divisors from the smaller value down until one divides both.",
                js: "function gcd(a, b) {\n  for (let d = Math.min(a, b); d >= 1; d--) {\n    if (a % d === 0 && b % d === 0) return d;\n  }\n  return 1;\n}\n",
                ts: "function gcd(a: number, b: number): number {\n  for (let d = Math.min(a, b); d >= 1; d--) {\n    if (a % d === 0 && b % d === 0) return d;\n  }\n  return 1;\n}\n",
                commentedCode: {
                    js: "function gcd(a, b) {\n  // No common divisor can be larger than the smaller input.\n  for (let d = Math.min(a, b); d >= 1; d--) {\n    // The first value dividing both inputs is the greatest common divisor.\n    if (a % d === 0 && b % d === 0) {\n      return d;\n    }\n  }\n\n  // Positive integers always share 1, so this is a defensive fallback.\n  return 1;\n}\n",
                    ts: "function gcd(a: number, b: number): number {\n  // No common divisor can be larger than the smaller input.\n  for (let d = Math.min(a, b); d >= 1; d--) {\n    // The first value dividing both inputs is the greatest common divisor.\n    if (a % d === 0 && b % d === 0) {\n      return d;\n    }\n  }\n\n  // Positive integers always share 1, so this is a defensive fallback.\n  return 1;\n}\n"
                },
                time: "O(min(a,b))",
                space: "O(1)"
            }
        ]
    },
    {
        id: "f-is-prime",
        slug: "is-prime",
        title: "Is It Prime?",
        difficulty: "medium",
        statement: "Return `true` if `n` is a prime number (an integer greater than 1 divisible only by 1 and itself).",
        examples: [
            {
                input: "2",
                output: "true"
            },
            {
                input: "1",
                output: "false",
                explanation: "1 is not prime."
            },
            {
                input: "15",
                output: "false",
                explanation: "15 = 3 × 5."
            }
        ],
        constraints: [
            "0 <= n <= 1000000"
        ],
        functionName: "isPrime",
        starter: {
            js: "function isPrime(n) {\n  // Return true if n is prime.\n}\n",
            ts: "function isPrime(n: number): boolean {\n  // Return true if n is prime.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    2
                ],
                expected: true
            },
            {
                args: [
                    1
                ],
                expected: false
            },
            {
                args: [
                    15
                ],
                expected: false
            }
        ],
        hidden: [
            {
                args: [
                    0
                ],
                expected: false
            },
            {
                args: [
                    3
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
                    17
                ],
                expected: true
            },
            {
                args: [
                    25
                ],
                expected: false
            },
            {
                args: [
                    97
                ],
                expected: true
            }
        ],
        hints: [
            "Numbers below 2 are never prime. Handle them first.",
            "A factor larger than √n always pairs with one smaller than √n, so you only test up to √n.",
            "for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return n > 1."
        ],
        solutions: [
            {
                label: "Trial division to √n",
                approach: "Test divisors only up to the square root.",
                js: "function isPrime(n) {\n  if (n < 2) return false;\n  for (let d = 2; d * d <= n; d++) {\n    if (n % d === 0) return false;\n  }\n  return true;\n}\n",
                ts: "function isPrime(n: number): boolean {\n  if (n < 2) return false;\n  for (let d = 2; d * d <= n; d++) {\n    if (n % d === 0) return false;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isPrime(n) {\n  // Prime numbers are integers greater than one.\n  if (n < 2) {\n    return false;\n  }\n\n  // Any composite number has at least one factor at or below its square root.\n  for (let d = 2; d * d <= n; d++) {\n    // An exact divisor other than one and n proves n is composite.\n    if (n % d === 0) {\n      return false;\n    }\n  }\n\n  // No possible small factor divided n.\n  return true;\n}\n",
                    ts: "function isPrime(n: number): boolean {\n  // Prime numbers are integers greater than one.\n  if (n < 2) {\n    return false;\n  }\n\n  // Any composite number has at least one factor at or below its square root.\n  for (let d = 2; d * d <= n; d++) {\n    // An exact divisor other than one and n proves n is composite.\n    if (n % d === 0) {\n      return false;\n    }\n  }\n\n  // No possible small factor divided n.\n  return true;\n}\n"
                },
                time: "O(√n)",
                space: "O(1)"
            },
            {
                label: "Trial division to n/2",
                approach: "A simpler but slower bound: no factor exceeds n/2.",
                js: "function isPrime(n) {\n  if (n < 2) return false;\n  for (let d = 2; d <= n / 2; d++) {\n    if (n % d === 0) return false;\n  }\n  return true;\n}\n",
                ts: "function isPrime(n: number): boolean {\n  if (n < 2) return false;\n  for (let d = 2; d <= n / 2; d++) {\n    if (n % d === 0) return false;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isPrime(n) {\n  // Values below two do not meet the definition of prime.\n  if (n < 2) {\n    return false;\n  }\n\n  // Test every possible nontrivial divisor up to half of n.\n  for (let d = 2; d <= n / 2; d++) {\n    if (n % d === 0) {\n      // Dividing evenly means n has a factor besides one and itself.\n      return false;\n    }\n  }\n\n  return true;\n}\n",
                    ts: "function isPrime(n: number): boolean {\n  // Values below two do not meet the definition of prime.\n  if (n < 2) {\n    return false;\n  }\n\n  // Test every possible nontrivial divisor up to half of n.\n  for (let d = 2; d <= n / 2; d++) {\n    if (n % d === 0) {\n      // Dividing evenly means n has a factor besides one and itself.\n      return false;\n    }\n  }\n\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    }
];
const foundationsDrills = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/foundations/factory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mkProblem",
    ()=>mkProblem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$walkthrough$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/walkthrough.ts [app-client] (ecmascript)");
;
;
const XP_BY_DIFF = {
    easy: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].easy,
    medium: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].medium,
    hard: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].hard
};
function mkProblem(stageId, d) {
    const judgeType = d.judgeType ?? "returnValue";
    const solutions = d.solutions.map((s)=>({
            label: s.label,
            approach: s.approach,
            code: {
                js: s.js,
                ts: s.ts
            },
            commentedCode: s.commentedCode,
            timeComplexity: s.time,
            spaceComplexity: s.space
        }));
    const walkthrough = d.walkthrough?.length ? d.walkthrough : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$walkthrough$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFallbackWalkthrough"])({
        title: d.title,
        functionName: d.functionName,
        judgeType,
        examples: d.examples,
        constraints: d.constraints,
        hints: d.hints,
        solutions
    });
    return {
        id: d.id,
        slug: d.slug,
        title: d.title,
        difficulty: d.difficulty,
        stageId,
        patternIds: d.patternIds ?? [],
        trackTags: d.trackTags ?? [],
        statement: d.statement,
        examples: d.examples,
        constraints: d.constraints,
        starterCode: d.starter,
        functionName: d.functionName,
        judgeType,
        visibleTests: d.visible,
        hiddenTests: d.hidden,
        hints: d.hints,
        walkthrough,
        solutions,
        xp: XP_BY_DIFF[d.difficulty]
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/foundations/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerFoundations",
    ()=>registerFoundations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$drills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/drills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$checkpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/checkpoint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$lessons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/lessons.ts [app-client] (ecmascript)");
;
;
;
;
function registerFoundations() {
    [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$drills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foundationsDrills"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$checkpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foundationsPool"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerProblem"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$checkpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foundationsComplexityQuestions"].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerComplexityQuestion"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$lessons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foundationsLessonModules"].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModule"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$checkpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foundationsCheckpointModule"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/foundations/lessons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "foundationsLessonModules",
    ()=>foundationsLessonModules
]);
const S = "dsa-s1";
const foundationsLessonModules = [
    {
        id: "m-foundations-thinking",
        stageId: S,
        title: "Thinking in Algorithms",
        kind: "lesson",
        summary: "Turn a fuzzy problem into precise, testable steps before you write a line of code.",
        lessonSections: [
            {
                heading: "From story to steps",
                body: `An algorithm is just a finite recipe: a sequence of unambiguous steps that always finishes and produces the right answer. The hardest part of a problem is usually not the code — it's naming the steps precisely.

A reliable routine:
1. Restate the goal in one sentence.
2. Nail down the exact input and output shapes (the examples do this for you).
3. Solve a tiny case by hand and watch what you actually do.
4. Turn that by-hand process into steps, then into code.`
            },
            {
                heading: "Recognition cues",
                body: `Reach for the "solve it by hand first" approach when:

- you're not sure where to even start,
- the examples surprise you (edge cases you hadn't imagined),
- or you can describe the answer in words but not yet in code.

Watch the tiny case run:

\`\`\`js
// Largest value in a list — narrate each comparison.
function largest(nums) {
  let best = nums[0];
  for (const n of nums) {
    if (n > best) best = n;
    console.log("saw", n, "best so far", best);
  }
  return best;
}
console.log("answer:", largest([3, 9, 2, 7]));
\`\`\``
            },
            {
                heading: "A reusable skeleton",
                body: `Most beginner problems fit a scan-and-accumulate template: keep some state, update it as you walk the input, return it at the end.

\`\`\`ts
function scanAccumulate(items: number[]): number {
  let state = 0; // running total, count, best, etc.
  for (const item of items) {
    state = state + item; // update rule specific to the problem
  }
  return state;
}
console.log(scanAccumulate([1, 2, 3, 4])); // 10
\`\`\`

**JS/TS pitfall:** an empty input often needs a sensible default (0, -1, [], or the first element). Decide what the answer *should* be for \`[]\` before you code. Now try the drills below.`
            }
        ],
        guidedExampleProblemId: "f-sum-to",
        drillProblemIds: [
            "f-sum-to",
            "f-count-vowels",
            "f-first-duplicate"
        ],
        testPoolProblemIds: [],
        prerequisiteModuleIds: []
    },
    {
        id: "m-foundations-bigo",
        stageId: S,
        title: "Big O Notation",
        kind: "lesson",
        summary: "Measure how work grows with input size so you can spot a slow solution before you run it.",
        lessonSections: [
            {
                heading: "Counting growth, not seconds",
                body: `Big O describes how the number of steps grows as the input size \`n\` grows — ignoring constant factors and hardware. \`O(n)\` means "roughly proportional to n"; \`O(n²)\` means "proportional to n squared".

Common orders, best to worst: \`O(1)\` < \`O(log n)\` < \`O(n)\` < \`O(n log n)\` < \`O(n²)\` < \`O(2ⁿ)\`.`
            },
            {
                heading: "Recognition cues",
                body: `- A single loop over the input → **O(n)**.
- A loop inside a loop, both over the input → **O(n²)**.
- Halving the search space each step (binary search) → **O(log n)**.
- Using a hash set/map to replace an inner loop → often turns **O(n²)** into **O(n)**.

The same task, two costs — watch the step counters:

\`\`\`js
function pairCountNaive(nums, target) {
  let steps = 0, found = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++) {
      steps++;
      if (nums[i] + nums[j] === target) found++;
    }
  console.log("O(n^2) steps:", steps);
  return found;
}
pairCountNaive([1, 2, 3, 4, 5], 6); // many steps
\`\`\``
            },
            {
                heading: "Trading time for space",
                body: `Hash structures often buy speed with memory. The set version below does far fewer steps than the nested loops above.

\`\`\`ts
function seenBefore(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const n of nums) {
    if (seen.has(n)) return true; // O(1) average lookup
    seen.add(n);
  }
  return false;
}
console.log(seenBefore([1, 2, 3, 2])); // true
\`\`\`

**Pitfall:** don't confuse time and space. The set above is \`O(n)\` time *and* \`O(n)\` space. Aim for the best time you can, then reduce space if needed.`
            }
        ],
        guidedExampleProblemId: "f-has-duplicate",
        drillProblemIds: [
            "f-has-duplicate",
            "f-two-sum-exists",
            "f-most-frequent"
        ],
        testPoolProblemIds: [],
        prerequisiteModuleIds: [
            "m-foundations-thinking"
        ]
    },
    {
        id: "m-foundations-js",
        stageId: S,
        title: "JavaScript for DSA",
        kind: "lesson",
        summary: "The array, string, and object tools you'll reach for in almost every problem.",
        lessonSections: [
            {
                heading: "Arrays are your workhorse",
                body: `Know these cold: \`push\`/\`pop\` (end), \`shift\`/\`unshift\` (front — O(n)!), \`slice\` (copy a range), \`splice\` (remove/insert in place), and the iterators \`map\`, \`filter\`, \`reduce\`.

\`\`\`js
const a = [1, 2, 3, 4, 5];
console.log(a.slice(1, 3));            // [2, 3] (copy, non-destructive)
console.log(a.map((x) => x * x));      // [1, 4, 9, 16, 25]
console.log(a.filter((x) => x % 2));   // [1, 3, 5]
console.log(a.reduce((s, x) => s + x, 0)); // 15
\`\`\``
            },
            {
                heading: "Strings, Sets, and Maps",
                body: `Strings are immutable — build results with an array and \`join\`, or with \`+=\`. \`Set\` gives O(1) membership; \`Map\` gives O(1) keyed counts and preserves insertion order.

\`\`\`js
const counts = new Map();
for (const ch of "banana") counts.set(ch, (counts.get(ch) || 0) + 1);
console.log([...counts.entries()]); // [["b",1],["a",3],["n",2]]
\`\`\`

**Recognition cues:** "seen before?" → \`Set\`. "how many of each?" → \`Map\` or a plain object. "characters of a string" → \`for...of\` or \`split('')\`.`
            },
            {
                heading: "Copy vs. mutate",
                body: `A frequent bug: mutating an argument you meant to leave alone. Prefer copies with the spread operator when a problem expects a fresh result.

\`\`\`ts
function sortedCopy(nums: number[]): number[] {
  return [...nums].sort((a, b) => a - b); // original untouched
}
const original = [3, 1, 2];
console.log(sortedCopy(original), original); // [1,2,3] [3,1,2]
\`\`\`

**Pitfall:** \`sort()\` sorts in place *and* compares as strings by default — always pass \`(a, b) => a - b\` for numbers.`
            }
        ],
        guidedExampleProblemId: "f-reverse-string",
        drillProblemIds: [
            "f-reverse-string",
            "f-chunk",
            "f-group-parity"
        ],
        testPoolProblemIds: [],
        prerequisiteModuleIds: [
            "m-foundations-thinking"
        ]
    },
    {
        id: "m-foundations-ts",
        stageId: S,
        title: "TypeScript for DSA",
        kind: "lesson",
        summary: "Add just enough typing to catch mistakes early without slowing you down.",
        lessonSections: [
            {
                heading: "Types that pay for themselves",
                body: `In interviews and drills you rarely need fancy types — just annotate function signatures so the editor catches the shape mistakes that cause most bugs.

\`\`\`ts
function sumPairs(nums: number[], target: number): boolean {
  const seen = new Set<number>();
  for (const n of nums) {
    if (seen.has(target - n)) return true;
    seen.add(n);
  }
  return false;
}
console.log(sumPairs([2, 7, 11], 9)); // true
\`\`\`

The \`number[]\`, \`number\`, and \`boolean\` annotations mean a wrong call is flagged before you ever run it.`
            },
            {
                heading: "Records, tuples, and unions",
                body: `Useful shapes: \`Record<string, number>\` for counts, tuples like \`[number, number]\` for pairs, and unions like \`number | number[]\` for mixed lists.

\`\`\`ts
function tally(words: string[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const w of words) out[w] = (out[w] ?? 0) + 1;
  return out;
}
console.log(tally(["a", "b", "a"])); // { a: 2, b: 1 }
\`\`\`

**Recognition cues:** "map key → value" → \`Record\` or \`Map\`. "fixed-size group" → tuple. "either a value or a list of them" → a union type.`
            },
            {
                heading: "Generics in one breath",
                body: `A generic lets one function work for any element type while keeping the types connected.

\`\`\`ts
function firstOr<T>(items: T[], fallback: T): T {
  return items.length > 0 ? items[0]! : fallback;
}
console.log(firstOr([10, 20], 0)); // 10
console.log(firstOr<string>([], "none")); // "none"
\`\`\`

**Pitfall:** with \`noUncheckedIndexedAccess\`, \`items[0]\` may be \`T | undefined\` — guard it or assert with \`!\` when you know the array is non-empty. Now try the TS drills.`
            }
        ],
        guidedExampleProblemId: "f-unique-values",
        drillProblemIds: [
            "f-unique-values",
            "f-count-by",
            "f-flatten-one"
        ],
        testPoolProblemIds: [],
        prerequisiteModuleIds: [
            "m-foundations-js"
        ]
    },
    {
        id: "m-foundations-math",
        stageId: S,
        title: "Math Toolkit",
        kind: "lesson",
        summary: "The handful of number tricks — remainders, divisors, digits — that unlock countless problems.",
        lessonSections: [
            {
                heading: "The modulo operator",
                body: `\`%\` gives the remainder and is the most useful math tool in DSA: \`n % 2\` tests parity, \`n % 10\` peels the last digit, and \`i % len\` wraps an index around a circular buffer.

\`\`\`js
console.log(17 % 5);   // 2
console.log(48 % 2);   // 0 (even)
console.log(1234 % 10);// 4 (last digit)
\`\`\`

**Pitfall:** in JS, \`%\` keeps the sign of the dividend: \`-3 % 2\` is \`-1\`, not \`1\`. Account for that when working with negatives.`
            },
            {
                heading: "Digits and divisors",
                body: `Peel digits with \`% 10\` and \`Math.floor(n / 10)\`. Find divisors by testing \`n % d === 0\`, and remember you only need to test up to \`√n\` to know whether a number is prime.

\`\`\`ts
function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let d = 2; d * d <= n; d++) if (n % d === 0) return false;
  return true;
}
console.log(isPrime(97)); // true
\`\`\`

**Recognition cues:** "sum/reverse the digits" → \`% 10\` loop. "common factor / simplify" → gcd. "prime / factor" → trial division to √n.`
            },
            {
                heading: "Euclid's gcd",
                body: `The greatest common divisor falls out of repeated remainders — one of the oldest and fastest algorithms there is.

\`\`\`js
function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}
console.log(gcd(48, 36)); // 12
\`\`\`

**Pitfall:** watch for overflow-style bugs and division by zero elsewhere; gcd itself is safe as long as inputs are positive. Finish Foundations with the math drills, then take the checkpoint.`
            }
        ],
        guidedExampleProblemId: "f-digit-sum",
        drillProblemIds: [
            "f-digit-sum",
            "f-gcd",
            "f-is-prime"
        ],
        testPoolProblemIds: [],
        prerequisiteModuleIds: [
            "m-foundations-thinking"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_data_foundations_0mch_te._.js.map