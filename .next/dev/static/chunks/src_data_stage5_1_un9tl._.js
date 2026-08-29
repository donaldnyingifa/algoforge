(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/stage5/cyclicSort.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cyclicSortMcqs",
    ()=>cyclicSortMcqs,
    "cyclicSortModule",
    ()=>cyclicSortModule,
    "cyclicSortProblems",
    ()=>cyclicSortProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s5";
const P = [
    "cyclic-sort"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "cs-sort-1-to-n",
        slug: "cyclic-sort",
        title: "Cyclic Sort",
        difficulty: "easy",
        patternIds: P,
        statement: "The list holds the numbers 1 through n exactly once, in some order. Return them sorted ascending by placing each value at its own index.",
        examples: [
            {
                input: "[3,1,5,4,2]",
                output: "[1,2,3,4,5]"
            },
            {
                input: "[2,1]",
                output: "[1,2]"
            },
            {
                input: "[]",
                output: "[]"
            }
        ],
        constraints: [
            "the list is a permutation of 1..n"
        ],
        functionName: "cyclicSort",
        starter: {
            js: "function cyclicSort(nums) {\n  // Put each value at index value-1.\n}\n",
            ts: "function cyclicSort(nums: number[]): number[] {\n  // Put each value at index value-1.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        1,
                        5,
                        4,
                        2
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
                        3,
                        2,
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
                        3,
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
                    4
                ]
            },
            {
                args: [
                    [
                        1,
                        5,
                        4,
                        3,
                        2
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
        hints: [
            "Value `v` belongs at index `v - 1` — that's the whole idea.",
            "If the value at i isn't where it belongs, swap it into place and re-check i.",
            "Only advance i once a[i] is already correct; every value moves at most once."
        ],
        solutions: [
            {
                label: "Cyclic placement",
                approach: "Swap each value to its home index; advance only when it fits.",
                js: "function cyclicSort(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return a;\n}\n",
                ts: "function cyclicSort(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return a;\n}\n",
                commentedCode: {
                    js: "function cyclicSort(nums) {\n  // Work on a copy so sorting does not mutate the caller's array.\n  const a = [...nums];\n  // Start by checking the first slot.\n  let i = 0;\n\n  // Keep going until every slot has been checked in order.\n  while (i < a.length) {\n    // A value v from 1..n belongs at zero-based index v - 1.\n    const correct = a[i] - 1;\n\n    // If this value is not at home, swap it directly into its home slot.\n    if (a[i] !== a[correct]) {\n      // Re-check index i after the swap because it just received a new value.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This slot is correct, so advance to the next one.\n      i++;\n    }\n  }\n\n  // Every value is now at index value - 1.\n  return a;\n}\n",
                    ts: "function cyclicSort(nums: number[]): number[] {\n  // Work on a copy so sorting does not mutate the caller's array.\n  const a = [...nums];\n  // Start by checking the first slot.\n  let i = 0;\n\n  // Keep going until every slot has been checked in order.\n  while (i < a.length) {\n    // A value v from 1..n belongs at zero-based index v - 1.\n    const correct = a[i] - 1;\n\n    // If this value is not at home, swap it directly into its home slot.\n    if (a[i] !== a[correct]) {\n      // Re-check index i after the swap because it just received a new value.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This slot is correct, so advance to the next one.\n      i++;\n    }\n  }\n\n  // Every value is now at index value - 1.\n  return a;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Built-in sort",
                approach: "A general sort also works, at O(n log n).",
                js: "function cyclicSort(nums) {\n  return [...nums].sort((a, b) => a - b);\n}\n",
                ts: "function cyclicSort(nums: number[]): number[] {\n  return [...nums].sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function cyclicSort(nums) {\n  // Copy the input, then use a numeric comparator to sort ascending.\n  return [...nums].sort((a, b) => a - b);\n}\n",
                    ts: "function cyclicSort(nums: number[]): number[] {\n  // Copy the input, then use a numeric comparator to sort ascending.\n  return [...nums].sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "cs-find-missing",
        slug: "find-missing-number",
        title: "Find the Missing Number",
        difficulty: "easy",
        patternIds: P,
        statement: "The list holds `n` distinct numbers taken from the range 0 to n (inclusive), so exactly one is missing. Return it.",
        examples: [
            {
                input: "[4,0,3,1]",
                output: "2"
            },
            {
                input: "[0]",
                output: "1"
            },
            {
                input: "[1]",
                output: "0"
            }
        ],
        constraints: [
            "values are distinct and within 0..n"
        ],
        functionName: "findMissingNumber",
        starter: {
            js: "function findMissingNumber(nums) {\n  // The one value missing from 0..n.\n}\n",
            ts: "function findMissingNumber(nums: number[]): number {\n  // The one value missing from 0..n.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        4,
                        0,
                        3,
                        1
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
                expected: 0
            },
            {
                args: [
                    [
                        0,
                        1
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        0,
                        3
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        3,
                        0,
                        1
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        0,
                        1,
                        2
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        2,
                        0,
                        1,
                        4
                    ]
                ],
                expected: 3
            }
        ],
        hints: [
            "The full range 0..n has a known total: n(n+1)/2.",
            "Subtract what's actually present and whatever remains is the missing value.",
            "Alternatively place each value at its index and find the empty slot."
        ],
        solutions: [
            {
                label: "Sum difference",
                approach: "Expected total minus actual total is the gap.",
                js: "function findMissingNumber(nums) {\n  const n = nums.length;\n  let missing = (n * (n + 1)) / 2;\n  for (const v of nums) missing -= v;\n  return missing;\n}\n",
                ts: "function findMissingNumber(nums: number[]): number {\n  const n = nums.length;\n  let missing = (n * (n + 1)) / 2;\n  for (const v of nums) missing -= v;\n  return missing;\n}\n",
                commentedCode: {
                    js: "function findMissingNumber(nums) {\n  // n values were chosen from the n + 1 candidates 0 through n.\n  const n = nums.length;\n  // Start with the sum of the complete range; zero contributes nothing.\n  let missing = (n * (n + 1)) / 2;\n\n  // Remove every value that is actually present.\n  for (const v of nums) missing -= v;\n\n  // The one value never subtracted is the missing number.\n  return missing;\n}\n",
                    ts: "function findMissingNumber(nums: number[]): number {\n  // n values were chosen from the n + 1 candidates 0 through n.\n  const n = nums.length;\n  // Start with the sum of the complete range; zero contributes nothing.\n  let missing = (n * (n + 1)) / 2;\n\n  // Remove every value that is actually present.\n  for (const v of nums) missing -= v;\n\n  // The one value never subtracted is the missing number.\n  return missing;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Cyclic placement",
                approach: "Send each value to its index; the first index holding the wrong value is missing.",
                js: "function findMissingNumber(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    if (a[i] < a.length && a[i] !== a[a[i]]) {\n      const t = a[i]; a[i] = a[t]; a[t] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < a.length; j++) if (a[j] !== j) return j;\n  return a.length;\n}\n",
                ts: "function findMissingNumber(nums: number[]): number {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    if (a[i] < a.length && a[i] !== a[a[i]]) {\n      const t = a[i]; a[i] = a[t]; a[t] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < a.length; j++) if (a[j] !== j) return j;\n  return a.length;\n}\n",
                commentedCode: {
                    js: "function findMissingNumber(nums) {\n  // Rearrange a copy, leaving the caller's input unchanged.\n  const a = [...nums];\n  let i = 0;\n\n  // Place each value from 0 through n - 1 at its matching index.\n  while (i < a.length) {\n    // The value n has no index in this length-n array, so leave it alone.\n    if (a[i] < a.length && a[i] !== a[a[i]]) {\n      // Move a[i] to index a[i], then inspect the replacement at i.\n      const t = a[i]; a[i] = a[t]; a[t] = t;\n    } else {\n      // This slot is settled or contains n.\n      i++;\n    }\n  }\n\n  // The first index without its matching value is the missing number.\n  for (let j = 0; j < a.length; j++) if (a[j] !== j) return j;\n  // If every array index matches, the absent value is n itself.\n  return a.length;\n}\n",
                    ts: "function findMissingNumber(nums: number[]): number {\n  // Rearrange a copy, leaving the caller's input unchanged.\n  const a = [...nums];\n  let i = 0;\n\n  // Place each value from 0 through n - 1 at its matching index.\n  while (i < a.length) {\n    // The value n has no index in this length-n array, so leave it alone.\n    if (a[i] < a.length && a[i] !== a[a[i]]) {\n      // Move a[i] to index a[i], then inspect the replacement at i.\n      const t = a[i]; a[i] = a[t]; a[t] = t;\n    } else {\n      // This slot is settled or contains n.\n      i++;\n    }\n  }\n\n  // The first index without its matching value is the missing number.\n  for (let j = 0; j < a.length; j++) if (a[j] !== j) return j;\n  // If every array index matches, the absent value is n itself.\n  return a.length;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "cs-find-all-missing",
        slug: "find-all-missing",
        title: "Find All Missing Numbers",
        difficulty: "medium",
        patternIds: P,
        statement: "The list has `n` values drawn from 1 to n, but some appear more than once so others never appear. Return the missing values, sorted ascending.",
        examples: [
            {
                input: "[2,3,1,8,2,3,5,1]",
                output: "[4,6,7]"
            },
            {
                input: "[1,1]",
                output: "[2]"
            },
            {
                input: "[1,2,3]",
                output: "[]"
            }
        ],
        constraints: [
            "values are within 1..n where n = nums.length"
        ],
        functionName: "findAllMissing",
        starter: {
            js: "function findAllMissing(nums) {\n  // Values in 1..n that never appear.\n}\n",
            ts: "function findAllMissing(nums: number[]): number[] {\n  // Values in 1..n that never appear.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        3,
                        1,
                        8,
                        2,
                        3,
                        5,
                        1
                    ]
                ],
                expected: [
                    4,
                    6,
                    7
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
                expected: []
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
                expected: []
            },
            {
                args: [
                    [
                        2,
                        2
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
                        1,
                        1
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
                        3,
                        3,
                        3,
                        3
                    ]
                ],
                expected: [
                    1,
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        4,
                        3
                    ]
                ],
                expected: []
            }
        ],
        hints: [
            "Every value in 1..n either appears or it doesn't — track which ones you saw.",
            "Then walk 1..n and collect the ones never seen.",
            "The cyclic version places values at their index; leftover mismatches mark the gaps."
        ],
        solutions: [
            {
                label: "Seen set",
                approach: "Record present values, then report the absent ones.",
                js: "function findAllMissing(nums) {\n  const seen = new Set(nums);\n  const out = [];\n  for (let v = 1; v <= nums.length; v++) if (!seen.has(v)) out.push(v);\n  return out;\n}\n",
                ts: "function findAllMissing(nums: number[]): number[] {\n  const seen = new Set(nums);\n  const out: number[] = [];\n  for (let v = 1; v <= nums.length; v++) if (!seen.has(v)) out.push(v);\n  return out;\n}\n",
                commentedCode: {
                    js: "function findAllMissing(nums) {\n  // Record every value that appears; repeated insertions are harmless.\n  const seen = new Set(nums);\n  // Collect absent values in ascending order.\n  const out = [];\n\n  // Every valid answer must come from the complete range 1 through n.\n  for (let v = 1; v <= nums.length; v++) if (!seen.has(v)) out.push(v);\n\n  // The increasing scan already produced sorted output.\n  return out;\n}\n",
                    ts: "function findAllMissing(nums: number[]): number[] {\n  // Record every value that appears; repeated insertions are harmless.\n  const seen = new Set(nums);\n  // Collect absent values in ascending order.\n  const out: number[] = [];\n\n  // Every valid answer must come from the complete range 1 through n.\n  for (let v = 1; v <= nums.length; v++) if (!seen.has(v)) out.push(v);\n\n  // The increasing scan already produced sorted output.\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Cyclic placement",
                approach: "Sort values into their home slots; each wrong slot names a missing value.",
                js: "function findAllMissing(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  const out = [];\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.push(j + 1);\n  return out;\n}\n",
                ts: "function findAllMissing(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  const out: number[] = [];\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.push(j + 1);\n  return out;\n}\n",
                commentedCode: {
                    js: "function findAllMissing(nums) {\n  // Rearrange a copy so the original list is preserved.\n  const a = [...nums];\n  let i = 0;\n\n  // Try to place every value v at index v - 1.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // Swap only when the home index is valid and does not already hold this value.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      // Keep i fixed so the newly received value is checked next.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // A correct placement or duplicate cannot be improved from this slot.\n      i++;\n    }\n  }\n\n  // A mismatch at j means the expected value j + 1 never appeared.\n  const out = [];\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.push(j + 1);\n  // Scanning indices from left to right keeps the missing values sorted.\n  return out;\n}\n",
                    ts: "function findAllMissing(nums: number[]): number[] {\n  // Rearrange a copy so the original list is preserved.\n  const a = [...nums];\n  let i = 0;\n\n  // Try to place every value v at index v - 1.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // Swap only when the home index is valid and does not already hold this value.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      // Keep i fixed so the newly received value is checked next.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // A correct placement or duplicate cannot be improved from this slot.\n      i++;\n    }\n  }\n\n  // A mismatch at j means the expected value j + 1 never appeared.\n  const out: number[] = [];\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.push(j + 1);\n  // Scanning indices from left to right keeps the missing values sorted.\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "cs-find-all-duplicates",
        slug: "find-all-duplicates",
        title: "Find All Duplicates",
        difficulty: "medium",
        patternIds: P,
        statement: "The list has `n` values drawn from 1 to n, with some appearing more than once. Return each repeated value once, sorted ascending.",
        examples: [
            {
                input: "[4,3,2,7,8,2,3,1]",
                output: "[2,3]"
            },
            {
                input: "[1,1]",
                output: "[1]"
            },
            {
                input: "[1,2]",
                output: "[]"
            }
        ],
        constraints: [
            "values are within 1..n where n = nums.length"
        ],
        functionName: "findAllDuplicates",
        starter: {
            js: "function findAllDuplicates(nums) {\n  // Values appearing more than once, sorted.\n}\n",
            ts: "function findAllDuplicates(nums: number[]): number[] {\n  // Values appearing more than once, sorted.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        4,
                        3,
                        2,
                        7,
                        8,
                        2,
                        3,
                        1
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
                        2
                    ]
                ],
                expected: []
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
                expected: []
            },
            {
                args: [
                    [
                        2,
                        2
                    ]
                ],
                expected: [
                    2
                ]
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
                    3
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        2,
                        1
                    ]
                ],
                expected: [
                    1,
                    2
                ]
            }
        ],
        hints: [
            "Count how many times each value occurs.",
            "Report each value whose count exceeds one — only once, even if it appears three times.",
            "Sort the result so the output is deterministic."
        ],
        solutions: [
            {
                label: "Count map",
                approach: "Tally occurrences and collect values seen more than once.",
                js: "function findAllDuplicates(nums) {\n  const counts = new Map();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  const out = [];\n  for (const [v, c] of counts) if (c > 1) out.push(v);\n  return out.sort((a, b) => a - b);\n}\n",
                ts: "function findAllDuplicates(nums: number[]): number[] {\n  const counts = new Map<number, number>();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  const out: number[] = [];\n  for (const [v, c] of counts) if (c > 1) out.push(v);\n  return out.sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function findAllDuplicates(nums) {\n  // Map each distinct value to the number of times it occurs.\n  const counts = new Map();\n  // Increment the current count, treating an unseen value as count zero.\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n\n  // Collect each repeated value once from its single map entry.\n  const out = [];\n  for (const [v, c] of counts) if (c > 1) out.push(v);\n\n  // Map insertion order is not necessarily numeric order, so sort the answer.\n  return out.sort((a, b) => a - b);\n}\n",
                    ts: "function findAllDuplicates(nums: number[]): number[] {\n  // Map each distinct value to the number of times it occurs.\n  const counts = new Map<number, number>();\n  // Increment the current count, treating an unseen value as count zero.\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n\n  // Collect each repeated value once from its single map entry.\n  const out: number[] = [];\n  for (const [v, c] of counts) if (c > 1) out.push(v);\n\n  // Map insertion order is not necessarily numeric order, so sort the answer.\n  return out.sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Cyclic placement",
                approach: "After sorting values home, a wrong slot holds a duplicate.",
                js: "function findAllDuplicates(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  const out = new Set();\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.add(a[j]);\n  return [...out].sort((x, y) => x - y);\n}\n",
                ts: "function findAllDuplicates(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  const out = new Set<number>();\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.add(a[j]);\n  return [...out].sort((x, y) => x - y);\n}\n",
                commentedCode: {
                    js: "function findAllDuplicates(nums) {\n  // Work on a copy while arranging values into their natural slots.\n  const a = [...nums];\n  let i = 0;\n\n  // Place each value v at index v - 1 whenever that home is available.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // If home already holds this value, the extra copy cannot be placed there.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This position is correct or contains an unplaceable duplicate.\n      i++;\n    }\n  }\n\n  // Every value left in the wrong slot is an extra copy of that value.\n  const out = new Set();\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.add(a[j]);\n  // The set removes repeated reports; sorting gives deterministic output.\n  return [...out].sort((x, y) => x - y);\n}\n",
                    ts: "function findAllDuplicates(nums: number[]): number[] {\n  // Work on a copy while arranging values into their natural slots.\n  const a = [...nums];\n  let i = 0;\n\n  // Place each value v at index v - 1 whenever that home is available.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // If home already holds this value, the extra copy cannot be placed there.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This position is correct or contains an unplaceable duplicate.\n      i++;\n    }\n  }\n\n  // Every value left in the wrong slot is an extra copy of that value.\n  const out = new Set<number>();\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) out.add(a[j]);\n  // The set removes repeated reports; sorting gives deterministic output.\n  return [...out].sort((x, y) => x - y);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "cs-find-corrupt-pair",
        slug: "find-corrupt-pair",
        title: "Find the Corrupt Pair",
        difficulty: "medium",
        patternIds: P,
        statement: "The list should hold 1 to n exactly once, but one value is duplicated and another is missing. Return `[duplicate, missing]`.",
        examples: [
            {
                input: "[3,1,2,5,2]",
                output: "[2,4]"
            },
            {
                input: "[3,1,2,3,6,4]",
                output: "[3,5]"
            },
            {
                input: "[1,1]",
                output: "[1,2]"
            }
        ],
        constraints: [
            "exactly one value is duplicated and one missing"
        ],
        functionName: "findCorruptPair",
        starter: {
            js: "function findCorruptPair(nums) {\n  // [duplicated value, missing value].\n}\n",
            ts: "function findCorruptPair(nums: number[]): number[] {\n  // [duplicated value, missing value].\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        1,
                        2,
                        5,
                        2
                    ]
                ],
                expected: [
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        3,
                        1,
                        2,
                        3,
                        6,
                        4
                    ]
                ],
                expected: [
                    3,
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
                    1,
                    2
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        2,
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
                        2
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
                        2,
                        1,
                        3,
                        3
                    ]
                ],
                expected: [
                    3,
                    4
                ]
            },
            {
                args: [
                    [
                        1,
                        1,
                        3,
                        4
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
                        3,
                        2,
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
                        3,
                        5
                    ]
                ],
                expected: [
                    3,
                    4
                ]
            }
        ],
        hints: [
            "Count how often each value in 1..n appears.",
            "The value counted twice is the duplicate; the value counted zero times is missing.",
            "Return them in that order: [duplicate, missing]."
        ],
        solutions: [
            {
                label: "Count occurrences",
                approach: "Scan 1..n for the value seen twice and the one never seen.",
                js: "function findCorruptPair(nums) {\n  const counts = new Map();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  let dup = -1, missing = -1;\n  for (let v = 1; v <= nums.length; v++) {\n    const c = counts.get(v) || 0;\n    if (c === 0) missing = v;\n    else if (c > 1) dup = v;\n  }\n  return [dup, missing];\n}\n",
                ts: "function findCorruptPair(nums: number[]): number[] {\n  const counts = new Map<number, number>();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  let dup = -1, missing = -1;\n  for (let v = 1; v <= nums.length; v++) {\n    const c = counts.get(v) || 0;\n    if (c === 0) missing = v;\n    else if (c > 1) dup = v;\n  }\n  return [dup, missing];\n}\n",
                commentedCode: {
                    js: "function findCorruptPair(nums) {\n  // Count how often every supplied value appears.\n  const counts = new Map();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n\n  // Use sentinel values until both corrupt parts are found.\n  let dup = -1, missing = -1;\n  // Check every value that a valid 1..n permutation should contain.\n  for (let v = 1; v <= nums.length; v++) {\n    const c = counts.get(v) || 0;\n    // Zero occurrences identifies the missing value.\n    if (c === 0) missing = v;\n    // More than one occurrence identifies the duplicate.\n    else if (c > 1) dup = v;\n  }\n\n  // The required order is duplicate first, then missing.\n  return [dup, missing];\n}\n",
                    ts: "function findCorruptPair(nums: number[]): number[] {\n  // Count how often every supplied value appears.\n  const counts = new Map<number, number>();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n\n  // Use sentinel values until both corrupt parts are found.\n  let dup = -1, missing = -1;\n  // Check every value that a valid 1..n permutation should contain.\n  for (let v = 1; v <= nums.length; v++) {\n    const c = counts.get(v) || 0;\n    // Zero occurrences identifies the missing value.\n    if (c === 0) missing = v;\n    // More than one occurrence identifies the duplicate.\n    else if (c > 1) dup = v;\n  }\n\n  // The required order is duplicate first, then missing.\n  return [dup, missing];\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Cyclic placement",
                approach: "Sort values home; the one mismatched slot reveals both answers.",
                js: "function findCorruptPair(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) return [a[j], j + 1];\n  return [-1, -1];\n}\n",
                ts: "function findCorruptPair(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) return [a[j], j + 1];\n  return [-1, -1];\n}\n",
                commentedCode: {
                    js: "function findCorruptPair(nums) {\n  // Arrange a copy so a value v can claim index v - 1.\n  const a = [...nums];\n  let i = 0;\n\n  // Place values at home until duplicates prevent further swaps.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // Do not swap when home already contains the same duplicated value.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n\n  // At the lone mismatch, the stored value is duplicated and j + 1 is missing.\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) return [a[j], j + 1];\n  // This fallback is unreachable when the input satisfies the stated constraint.\n  return [-1, -1];\n}\n",
                    ts: "function findCorruptPair(nums: number[]): number[] {\n  // Arrange a copy so a value v can claim index v - 1.\n  const a = [...nums];\n  let i = 0;\n\n  // Place values at home until duplicates prevent further swaps.\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    // Do not swap when home already contains the same duplicated value.\n    if (correct >= 0 && correct < a.length && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n\n  // At the lone mismatch, the stored value is duplicated and j + 1 is missing.\n  for (let j = 0; j < a.length; j++) if (a[j] !== j + 1) return [a[j], j + 1];\n  // This fallback is unreachable when the input satisfies the stated constraint.\n  return [-1, -1];\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "cs-first-missing-positive",
        slug: "first-missing-positive",
        title: "First Missing Positive",
        difficulty: "hard",
        patternIds: P,
        statement: "Return the smallest positive integer that does not appear in the list. Values may be negative, zero, or repeated.",
        examples: [
            {
                input: "[3,4,-1,1]",
                output: "2"
            },
            {
                input: "[1,2,0]",
                output: "3"
            },
            {
                input: "[7,8,9,11,12]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000",
            "values may be any integers"
        ],
        functionName: "firstMissingPositive",
        starter: {
            js: "function firstMissingPositive(nums) {\n  // Smallest positive integer not present.\n}\n",
            ts: "function firstMissingPositive(nums: number[]): number {\n  // Smallest positive integer not present.\n  return 1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        4,
                        -1,
                        1
                    ]
                ],
                expected: 2
            },
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
                        7,
                        8,
                        9,
                        11,
                        12
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
                expected: 1
            },
            {
                args: [
                    [
                        1
                    ]
                ],
                expected: 2
            },
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
                        1,
                        2,
                        3
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        -1,
                        -2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        1
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "The answer is always between 1 and n+1, where n is the length.",
            "Values outside 1..n can be ignored entirely.",
            "Place each in-range value at index value-1, then find the first index holding the wrong value."
        ],
        solutions: [
            {
                label: "Cyclic placement",
                approach: "Send in-range values home; the first wrong slot names the answer.",
                js: "function firstMissingPositive(nums) {\n  const a = [...nums];\n  const n = a.length;\n  let i = 0;\n  while (i < n) {\n    const correct = a[i] - 1;\n    if (a[i] > 0 && a[i] <= n && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < n; j++) if (a[j] !== j + 1) return j + 1;\n  return n + 1;\n}\n",
                ts: "function firstMissingPositive(nums: number[]): number {\n  const a = [...nums];\n  const n = a.length;\n  let i = 0;\n  while (i < n) {\n    const correct = a[i] - 1;\n    if (a[i] > 0 && a[i] <= n && a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  for (let j = 0; j < n; j++) if (a[j] !== j + 1) return j + 1;\n  return n + 1;\n}\n",
                commentedCode: {
                    js: "function firstMissingPositive(nums) {\n  // Work on a copy because cyclic placement rearranges values.\n  const a = [...nums];\n  // Only values 1..n can affect whether the answer is at most n.\n  const n = a.length;\n  let i = 0;\n\n  // Place each relevant positive value v at index v - 1.\n  while (i < n) {\n    const correct = a[i] - 1;\n    // Ignore non-positive, too-large, and duplicate values.\n    if (a[i] > 0 && a[i] <= n && a[i] !== a[correct]) {\n      // Swap the current value home, then re-check index i.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n\n  // The first index not holding j + 1 reveals the smallest missing positive.\n  for (let j = 0; j < n; j++) if (a[j] !== j + 1) return j + 1;\n  // If 1..n are all present, n + 1 is the next possible answer.\n  return n + 1;\n}\n",
                    ts: "function firstMissingPositive(nums: number[]): number {\n  // Work on a copy because cyclic placement rearranges values.\n  const a = [...nums];\n  // Only values 1..n can affect whether the answer is at most n.\n  const n = a.length;\n  let i = 0;\n\n  // Place each relevant positive value v at index v - 1.\n  while (i < n) {\n    const correct = a[i] - 1;\n    // Ignore non-positive, too-large, and duplicate values.\n    if (a[i] > 0 && a[i] <= n && a[i] !== a[correct]) {\n      // Swap the current value home, then re-check index i.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n\n  // The first index not holding j + 1 reveals the smallest missing positive.\n  for (let j = 0; j < n; j++) if (a[j] !== j + 1) return j + 1;\n  // If 1..n are all present, n + 1 is the next possible answer.\n  return n + 1;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Membership set",
                approach: "Put everything in a set and count upward from 1.",
                js: "function firstMissingPositive(nums) {\n  const seen = new Set(nums);\n  let v = 1;\n  while (seen.has(v)) v++;\n  return v;\n}\n",
                ts: "function firstMissingPositive(nums: number[]): number {\n  const seen = new Set(nums);\n  let v = 1;\n  while (seen.has(v)) v++;\n  return v;\n}\n",
                commentedCode: {
                    js: "function firstMissingPositive(nums) {\n  // Store all present values for constant-time membership checks.\n  const seen = new Set(nums);\n  // One is the smallest possible positive answer.\n  let v = 1;\n\n  // Skip each consecutive positive integer that exists in the input.\n  while (seen.has(v)) v++;\n\n  // The first failed lookup is the smallest missing positive.\n  return v;\n}\n",
                    ts: "function firstMissingPositive(nums: number[]): number {\n  // Store all present values for constant-time membership checks.\n  const seen = new Set(nums);\n  // One is the smallest possible positive answer.\n  let v = 1;\n\n  // Skip each consecutive positive integer that exists in the input.\n  while (seen.has(v)) v++;\n\n  // The first failed lookup is the smallest missing positive.\n  return v;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "cs-is-permutation",
        slug: "is-permutation",
        title: "Is It a Permutation?",
        difficulty: "easy",
        patternIds: P,
        statement: "Return `true` if the list is exactly a permutation of 1 through n, where n is its length.",
        examples: [
            {
                input: "[3,1,2]",
                output: "true"
            },
            {
                input: "[1,1]",
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
        functionName: "isPermutation",
        starter: {
            js: "function isPermutation(nums) {\n  // True if nums is a permutation of 1..n.\n}\n",
            ts: "function isPermutation(nums: number[]): boolean {\n  // True if nums is a permutation of 1..n.\n  return false;\n}\n"
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
                expected: true
            },
            {
                args: [
                    [
                        1,
                        1
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
                        4
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        4
                    ]
                ],
                expected: false
            },
            {
                args: [
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
                        0,
                        1
                    ]
                ],
                expected: false
            }
        ],
        hints: [
            "Every value must be in range 1..n, and no value may repeat.",
            "A single pass with a seen-set catches both failures.",
            "An empty list vacuously qualifies."
        ],
        solutions: [
            {
                label: "Range and uniqueness check",
                approach: "Reject out-of-range values and repeats in one pass.",
                js: "function isPermutation(nums) {\n  const n = nums.length;\n  const seen = new Set();\n  for (const v of nums) {\n    if (v < 1 || v > n || seen.has(v)) return false;\n    seen.add(v);\n  }\n  return true;\n}\n",
                ts: "function isPermutation(nums: number[]): boolean {\n  const n = nums.length;\n  const seen = new Set<number>();\n  for (const v of nums) {\n    if (v < 1 || v > n || seen.has(v)) return false;\n    seen.add(v);\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isPermutation(nums) {\n  // A length-n permutation must contain each value from 1 through n once.\n  const n = nums.length;\n  // Track values already accepted so repeats can be rejected immediately.\n  const seen = new Set();\n\n  for (const v of nums) {\n    // Any out-of-range value or duplicate makes the permutation invalid.\n    if (v < 1 || v > n || seen.has(v)) return false;\n    // Remember this valid value before checking the rest.\n    seen.add(v);\n  }\n\n  // n unique in-range values must be exactly the complete range 1..n.\n  return true;\n}\n",
                    ts: "function isPermutation(nums: number[]): boolean {\n  // A length-n permutation must contain each value from 1 through n once.\n  const n = nums.length;\n  // Track values already accepted so repeats can be rejected immediately.\n  const seen = new Set<number>();\n\n  for (const v of nums) {\n    // Any out-of-range value or duplicate makes the permutation invalid.\n    if (v < 1 || v > n || seen.has(v)) return false;\n    // Remember this valid value before checking the rest.\n    seen.add(v);\n  }\n\n  // n unique in-range values must be exactly the complete range 1..n.\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Sort and compare",
                approach: "Sorted, a permutation must read 1, 2, 3, …",
                js: "function isPermutation(nums) {\n  const sorted = [...nums].sort((a, b) => a - b);\n  for (let i = 0; i < sorted.length; i++) if (sorted[i] !== i + 1) return false;\n  return true;\n}\n",
                ts: "function isPermutation(nums: number[]): boolean {\n  const sorted = [...nums].sort((a, b) => a - b);\n  for (let i = 0; i < sorted.length; i++) if (sorted[i] !== i + 1) return false;\n  return true;\n}\n",
                commentedCode: {
                    js: "function isPermutation(nums) {\n  // Sort a copy so the original order is not changed.\n  const sorted = [...nums].sort((a, b) => a - b);\n\n  // A valid sorted permutation must hold i + 1 at every index i.\n  for (let i = 0; i < sorted.length; i++) if (sorted[i] !== i + 1) return false;\n\n  // Every position matched its required value; this also accepts an empty list.\n  return true;\n}\n",
                    ts: "function isPermutation(nums: number[]): boolean {\n  // Sort a copy so the original order is not changed.\n  const sorted = [...nums].sort((a, b) => a - b);\n\n  // A valid sorted permutation must hold i + 1 at every index i.\n  for (let i = 0; i < sorted.length; i++) if (sorted[i] !== i + 1) return false;\n\n  // Every position matched its required value; this also accepts an empty list.\n  return true;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "cs-sort-0-to-n-1",
        slug: "cyclic-sort-zero-based",
        title: "Cyclic Sort (Zero-Based)",
        difficulty: "easy",
        patternIds: P,
        statement: "The list holds the numbers 0 through n-1 exactly once. Return them sorted ascending by placing each value at its own index.",
        examples: [
            {
                input: "[2,0,1]",
                output: "[0,1,2]"
            },
            {
                input: "[1,0]",
                output: "[0,1]"
            },
            {
                input: "[]",
                output: "[]"
            }
        ],
        constraints: [
            "the list is a permutation of 0..n-1"
        ],
        functionName: "cyclicSortZero",
        starter: {
            js: "function cyclicSortZero(nums) {\n  // Put each value at index value.\n}\n",
            ts: "function cyclicSortZero(nums: number[]): number[] {\n  // Put each value at index value.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        0,
                        1
                    ]
                ],
                expected: [
                    0,
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        1,
                        0
                    ]
                ],
                expected: [
                    0,
                    1
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
                        0,
                        1,
                        2
                    ]
                ],
                expected: [
                    0,
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        0
                    ]
                ],
                expected: [
                    0,
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        3,
                        2,
                        1,
                        0
                    ]
                ],
                expected: [
                    0,
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
                        0
                    ]
                ],
                expected: [
                    0,
                    1,
                    2
                ]
            },
            {
                args: [
                    [
                        0,
                        2,
                        1
                    ]
                ],
                expected: [
                    0,
                    1,
                    2
                ]
            }
        ],
        hints: [
            "With a zero-based range, value `v` belongs at index `v` — no offset.",
            "Swap until the value at i is correct, then move on.",
            "This is the same loop as the 1..n version with the offset removed."
        ],
        solutions: [
            {
                label: "Cyclic placement",
                approach: "Swap each value to index equal to itself.",
                js: "function cyclicSortZero(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i];\n    if (a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return a;\n}\n",
                ts: "function cyclicSortZero(nums: number[]): number[] {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i];\n    if (a[i] !== a[correct]) {\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return a;\n}\n",
                commentedCode: {
                    js: "function cyclicSortZero(nums) {\n  // Rearrange a copy so the caller's array remains unchanged.\n  const a = [...nums];\n  let i = 0;\n\n  // Settle one index at a time.\n  while (i < a.length) {\n    // In the range 0..n-1, each value is already its own home index.\n    const correct = a[i];\n    // Send the current value directly to that index if it is not there yet.\n    if (a[i] !== a[correct]) {\n      // Re-check i because the swap places a different value here.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // The current value is home, so move forward.\n      i++;\n    }\n  }\n\n  // Every index now contains the equal-valued number.\n  return a;\n}\n",
                    ts: "function cyclicSortZero(nums: number[]): number[] {\n  // Rearrange a copy so the caller's array remains unchanged.\n  const a = [...nums];\n  let i = 0;\n\n  // Settle one index at a time.\n  while (i < a.length) {\n    // In the range 0..n-1, each value is already its own home index.\n    const correct = a[i];\n    // Send the current value directly to that index if it is not there yet.\n    if (a[i] !== a[correct]) {\n      // Re-check i because the swap places a different value here.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // The current value is home, so move forward.\n      i++;\n    }\n  }\n\n  // Every index now contains the equal-valued number.\n  return a;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Built-in sort",
                approach: "A general sort also produces the answer.",
                js: "function cyclicSortZero(nums) {\n  return [...nums].sort((a, b) => a - b);\n}\n",
                ts: "function cyclicSortZero(nums: number[]): number[] {\n  return [...nums].sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function cyclicSortZero(nums) {\n  // Copy the input and sort numbers ascending with a numeric comparator.\n  return [...nums].sort((a, b) => a - b);\n}\n",
                    ts: "function cyclicSortZero(nums: number[]): number[] {\n  // Copy the input and sort numbers ascending with a numeric comparator.\n  return [...nums].sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "cs-kth-missing-positive",
        slug: "kth-missing-positive",
        title: "Kth Missing Positive",
        difficulty: "medium",
        patternIds: P,
        statement: "Given a strictly increasing list of positive integers, return the `k`-th positive integer that is absent from it.",
        examples: [
            {
                input: "[2,3,4,7,11], 5",
                output: "9"
            },
            {
                input: "[1,2,3,4], 2",
                output: "6"
            },
            {
                input: "[], 3",
                output: "3"
            }
        ],
        constraints: [
            "the list is strictly increasing and positive",
            "k >= 1"
        ],
        functionName: "kthMissingPositive",
        starter: {
            js: "function kthMissingPositive(sortedNums, k) {\n  // The k-th absent positive integer.\n}\n",
            ts: "function kthMissingPositive(sortedNums: number[], k: number): number {\n  // The k-th absent positive integer.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        3,
                        4,
                        7,
                        11
                    ],
                    5
                ],
                expected: 9
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
                expected: 6
            },
            {
                args: [
                    [],
                    3
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
                expected: 2
            },
            {
                args: [
                    [
                        2
                    ],
                    1
                ],
                expected: 1
            },
            {
                args: [
                    [
                        2
                    ],
                    2
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        3
                    ],
                    1
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        3
                    ],
                    2
                ],
                expected: 4
            },
            {
                args: [
                    [
                        5,
                        6,
                        7
                    ],
                    3
                ],
                expected: 3
            }
        ],
        hints: [
            "Walk the positive integers 1, 2, 3, … and skip the ones present in the list.",
            "Count each skipped-over integer until the count reaches k.",
            "Because the list is sorted you can advance through it with a single pointer."
        ],
        solutions: [
            {
                label: "Count upward",
                approach: "Step through the positives, tallying the absent ones.",
                js: "function kthMissingPositive(sortedNums, k) {\n  let missing = 0, current = 0, i = 0;\n  while (true) {\n    current++;\n    if (i < sortedNums.length && sortedNums[i] === current) { i++; continue; }\n    missing++;\n    if (missing === k) return current;\n  }\n}\n",
                ts: "function kthMissingPositive(sortedNums: number[], k: number): number {\n  let missing = 0, current = 0, i = 0;\n  for (;;) {\n    current++;\n    if (i < sortedNums.length && sortedNums[i] === current) { i++; continue; }\n    missing++;\n    if (missing === k) return current;\n  }\n}\n",
                commentedCode: {
                    js: "function kthMissingPositive(sortedNums, k) {\n  // Track missing values found, the candidate integer, and the array pointer.\n  let missing = 0, current = 0, i = 0;\n\n  // The loop returns as soon as the kth gap is found.\n  while (true) {\n    // Examine positive integers in increasing order, starting with one.\n    current++;\n    // A match means this candidate is present, so consume it and keep searching.\n    if (i < sortedNums.length && sortedNums[i] === current) { i++; continue; }\n    // Otherwise this candidate is absent.\n    missing++;\n    // Finding gaps in ascending order makes the kth one the required answer.\n    if (missing === k) return current;\n  }\n}\n",
                    ts: "function kthMissingPositive(sortedNums: number[], k: number): number {\n  // Track missing values found, the candidate integer, and the array pointer.\n  let missing = 0, current = 0, i = 0;\n\n  // The loop returns as soon as the kth gap is found.\n  for (;;) {\n    // Examine positive integers in increasing order, starting with one.\n    current++;\n    // A match means this candidate is present, so consume it and keep searching.\n    if (i < sortedNums.length && sortedNums[i] === current) { i++; continue; }\n    // Otherwise this candidate is absent.\n    missing++;\n    // Finding gaps in ascending order makes the kth one the required answer.\n    if (missing === k) return current;\n  }\n}\n"
                },
                time: "O(n + k)",
                space: "O(1)"
            },
            {
                label: "Membership set",
                approach: "Look each candidate up in a set of present values.",
                js: "function kthMissingPositive(sortedNums, k) {\n  const present = new Set(sortedNums);\n  let missing = 0, v = 0;\n  while (missing < k) {\n    v++;\n    if (!present.has(v)) missing++;\n  }\n  return v;\n}\n",
                ts: "function kthMissingPositive(sortedNums: number[], k: number): number {\n  const present = new Set(sortedNums);\n  let missing = 0, v = 0;\n  while (missing < k) {\n    v++;\n    if (!present.has(v)) missing++;\n  }\n  return v;\n}\n",
                commentedCode: {
                    js: "function kthMissingPositive(sortedNums, k) {\n  // Store present values so each candidate can be checked in constant time.\n  const present = new Set(sortedNums);\n  // Count absent positives while v advances through them in order.\n  let missing = 0, v = 0;\n\n  // Stop only after exactly k missing values have been encountered.\n  while (missing < k) {\n    v++;\n    // Present values do not advance the missing-value count.\n    if (!present.has(v)) missing++;\n  }\n\n  // v is the positive integer that raised the count to k.\n  return v;\n}\n",
                    ts: "function kthMissingPositive(sortedNums: number[], k: number): number {\n  // Store present values so each candidate can be checked in constant time.\n  const present = new Set(sortedNums);\n  // Count absent positives while v advances through them in order.\n  let missing = 0, v = 0;\n\n  // Stop only after exactly k missing values have been encountered.\n  while (missing < k) {\n    v++;\n    // Present values do not advance the missing-value count.\n    if (!present.has(v)) missing++;\n  }\n\n  // v is the positive integer that raised the count to k.\n  return v;\n}\n"
                },
                time: "O(n + k)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "cs-find-duplicate-cyclic",
        slug: "find-duplicate-cyclic",
        title: "Find the Duplicate",
        difficulty: "medium",
        patternIds: P,
        statement: "The list holds n+1 values drawn from 1 to n, so at least one value repeats. Return the repeated value.",
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
            "values are within 1..n where n = nums.length - 1"
        ],
        functionName: "findDuplicateCyclic",
        starter: {
            js: "function findDuplicateCyclic(nums) {\n  // The repeated value.\n}\n",
            ts: "function findDuplicateCyclic(nums: number[]): number {\n  // The repeated value.\n  return 0;\n}\n"
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
            "The first value you meet twice is the answer.",
            "A set makes that a single pass.",
            "The cyclic version swaps values home until a slot already holds its own value."
        ],
        solutions: [
            {
                label: "Seen set",
                approach: "Return the first value encountered a second time.",
                js: "function findDuplicateCyclic(nums) {\n  const seen = new Set();\n  for (const v of nums) {\n    if (seen.has(v)) return v;\n    seen.add(v);\n  }\n  return -1;\n}\n",
                ts: "function findDuplicateCyclic(nums: number[]): number {\n  const seen = new Set<number>();\n  for (const v of nums) {\n    if (seen.has(v)) return v;\n    seen.add(v);\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function findDuplicateCyclic(nums) {\n  // Remember each value after its first occurrence.\n  const seen = new Set();\n\n  for (const v of nums) {\n    // A value already in the set has now appeared at least twice.\n    if (seen.has(v)) return v;\n    // Record this first occurrence before moving on.\n    seen.add(v);\n  }\n\n  // The constraints guarantee a duplicate, so this is only a safety fallback.\n  return -1;\n}\n",
                    ts: "function findDuplicateCyclic(nums: number[]): number {\n  // Remember each value after its first occurrence.\n  const seen = new Set<number>();\n\n  for (const v of nums) {\n    // A value already in the set has now appeared at least twice.\n    if (seen.has(v)) return v;\n    // Record this first occurrence before moving on.\n    seen.add(v);\n  }\n\n  // The constraints guarantee a duplicate, so this is only a safety fallback.\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Cyclic placement",
                approach: "Swap values home; a collision at a correct slot exposes the duplicate.",
                js: "function findDuplicateCyclic(nums) {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (a[i] !== i + 1) {\n      if (a[i] === a[correct]) return a[i];\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return -1;\n}\n",
                ts: "function findDuplicateCyclic(nums: number[]): number {\n  const a = [...nums];\n  let i = 0;\n  while (i < a.length) {\n    const correct = a[i] - 1;\n    if (a[i] !== i + 1) {\n      if (a[i] === a[correct]) return a[i];\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      i++;\n    }\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function findDuplicateCyclic(nums) {\n  // Rearrange a copy while looking for two copies that want the same home.\n  const a = [...nums];\n  let i = 0;\n\n  while (i < a.length) {\n    // Values in 1..n belong at zero-based index value - 1.\n    const correct = a[i] - 1;\n    // A misplaced value should be sent to its home index.\n    if (a[i] !== i + 1) {\n      // If home already holds the value, the current copy proves it is duplicated.\n      if (a[i] === a[correct]) return a[i];\n      // Otherwise swap it home and inspect the new value at i.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This value is already home.\n      i++;\n    }\n  }\n\n  // The input contract guarantees a duplicate; this handles invalid input safely.\n  return -1;\n}\n",
                    ts: "function findDuplicateCyclic(nums: number[]): number {\n  // Rearrange a copy while looking for two copies that want the same home.\n  const a = [...nums];\n  let i = 0;\n\n  while (i < a.length) {\n    // Values in 1..n belong at zero-based index value - 1.\n    const correct = a[i] - 1;\n    // A misplaced value should be sent to its home index.\n    if (a[i] !== i + 1) {\n      // If home already holds the value, the current copy proves it is duplicated.\n      if (a[i] === a[correct]) return a[i];\n      // Otherwise swap it home and inspect the new value at i.\n      const t = a[i]; a[i] = a[correct]; a[correct] = t;\n    } else {\n      // This value is already home.\n      i++;\n    }\n  }\n\n  // The input contract guarantees a duplicate; this handles invalid input safely.\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    }
];
const cyclicSortProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const cyclicSortMcqs = [
    {
        id: "s5-cs-time",
        kind: "mcq",
        prompt: "Cyclic sort applies when values come from a known contiguous range like 1..n. Its time complexity is:",
        options: [
            "O(1)",
            "O(n)",
            "O(n log n)",
            "O(n²)"
        ],
        answerIndex: 1,
        explanation: "Although there's an inner swap loop, each value reaches its home slot once, so total work is linear."
    },
    {
        id: "s5-cs-space",
        kind: "mcq",
        prompt: "Cyclic sort rearranges values in place, so its extra space is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "It only needs a temporary for the swap — no auxiliary array or hash set."
    }
];
const cyclicSortModule = {
    id: "m-pat-cyclic-sort",
    stageId: S,
    title: "Cyclic Sort",
    kind: "patternModule",
    summary: "When values come from 1..n, put each one at its own index — missing and duplicate values fall out for free.",
    lessonSections: [
        {
            heading: "Values that know where they belong",
            body: `When a list contains the numbers **1..n** (or **0..n-1**), each value has an obvious home: value \`v\` belongs at index \`v-1\`. Cyclic sort walks the list swapping values into their homes. Because every swap puts at least one value in its final position, the whole thing is **O(n)** with **O(1)** extra space.

\`\`\`js
function cyclicSort(a) {
  let i = 0;
  while (i < a.length) {
    const correct = a[i] - 1;
    if (a[i] !== a[correct]) [a[i], a[correct]] = [a[correct], a[i]]; // swap home
    else i++;                                                        // already right
  }
  return a;
}
console.log(cyclicSort([3, 1, 5, 4, 2])); // [1, 2, 3, 4, 5]
\`\`\`

Note the loop shape: you **don't** advance \`i\` after a swap — the value you just received still needs checking.`
        },
        {
            heading: "Recognition cues",
            body: `This pattern is worth spotting because it answers a whole family of questions in linear time and constant space:

- the input is a permutation (or near-permutation) of a **known contiguous range**,
- find the **missing** number, or **all** missing numbers,
- find the **duplicate**, or **all** duplicates,
- find the **corrupt pair** (one duplicated, one missing),
- **first missing positive** — the classic, where out-of-range values are simply ignored.

The giveaway phrase is "the array contains numbers from 1 to n".`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// After the sort, any slot holding the wrong value tells the story
for (let j = 0; j < a.length; j++) {
  if (a[j] !== j + 1) {
    // a[j] is a duplicate, and (j + 1) is missing
  }
}
\`\`\`

**Pitfalls:** advancing \`i\` after a swap (the incoming value never gets checked); infinite loops when duplicates make \`a[i]\` and \`a[correct]\` equal — compare **values**, not indices, so equal values stop the swap; forgetting to skip out-of-range values in *first missing positive*; and mutating the caller's array when the problem expects a fresh one. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "cs-sort-1-to-n",
    drillProblemIds: [
        "cs-sort-1-to-n",
        "cs-find-missing",
        "cs-find-all-missing",
        "cs-find-all-duplicates",
        "cs-find-corrupt-pair",
        "cs-first-missing-positive"
    ],
    testPoolProblemIds: [
        "cs-is-permutation",
        "cs-sort-0-to-n-1",
        "cs-kth-missing-positive",
        "cs-find-duplicate-cyclic"
    ],
    complexityQuestionIds: [
        "s5-cs-time",
        "s5-cs-space"
    ],
    badgeId: "badge-pat-cyclic-sort",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage5/graphTraversal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "graphTraversalMcqs",
    ()=>graphTraversalMcqs,
    "graphTraversalModule",
    ()=>graphTraversalModule,
    "graphTraversalProblems",
    ()=>graphTraversalProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s5";
const P = [
    "graph-traversal"
];
const GRAPH_NOTE = "The graph is undirected with nodes `0..n-1`, given as a list of `[u, v]` edges.";
const GRID_NOTE = "The grid is a rectangular array of rows.";
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "gt-reachable-count",
        slug: "count-reachable",
        title: "Count Reachable Nodes",
        difficulty: "easy",
        patternIds: P,
        statement: `Return how many nodes are reachable from \`start\`, counting \`start\` itself.\n\n${GRAPH_NOTE}`,
        examples: [
            {
                input: "5, [[0,1],[1,2],[3,4]], 0",
                output: "3"
            },
            {
                input: "3, [], 0",
                output: "1"
            },
            {
                input: "1, [], 0",
                output: "1"
            }
        ],
        constraints: [
            "1 <= n <= 10000",
            "0 <= edges.length <= 20000"
        ],
        functionName: "countReachable",
        starter: {
            js: "function countReachable(n, edges, start) {\n  // Nodes reachable from start, including start.\n}\n",
            ts: "function countReachable(n: number, edges: number[][], start: number): number {\n  // Nodes reachable from start, including start.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            3,
                            4
                        ]
                    ],
                    0
                ],
                expected: 3
            },
            {
                args: [
                    3,
                    [],
                    0
                ],
                expected: 1
            },
            {
                args: [
                    1,
                    [],
                    0
                ],
                expected: 1
            }
        ],
        hidden: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            2,
                            3
                        ]
                    ],
                    2
                ],
                expected: 2
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ]
                    ],
                    0
                ],
                expected: 4
            },
            {
                args: [
                    6,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            4,
                            5
                        ]
                    ],
                    4
                ],
                expected: 2
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1
                        ]
                    ],
                    1
                ],
                expected: 2
            },
            {
                args: [
                    5,
                    [],
                    3
                ],
                expected: 1
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            0,
                            2
                        ]
                    ],
                    1
                ],
                expected: 3
            }
        ],
        hints: [
            "Build an adjacency list first, then explore outward from `start`.",
            "Mark nodes visited so you never count one twice.",
            "The answer is the size of the visited set once the traversal finishes."
        ],
        solutions: [
            {
                label: "BFS with a visited set",
                approach: "Expand outward from start, counting newly visited nodes.",
                js: "function countReachable(n, edges, start) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  const queue = [start];\n  let count = 1;\n  while (queue.length) {\n    const cur = queue.shift();\n    for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; count++; queue.push(nb); }\n  }\n  return count;\n}\n",
                ts: "function countReachable(n: number, edges: number[][], start: number): number {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  const queue: number[] = [start];\n  let count = 1;\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; count++; queue.push(nb); }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countReachable(n, edges, start) {\n  // Store every undirected edge in both directions.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Mark a node when it enters the queue so it is counted only once.\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  const queue = [start];\n  // The starting node is reachable from itself.\n  let count = 1;\n  while (queue.length) {\n    const cur = queue.shift();\n    // Discover every unseen neighbour in this connected component.\n    for (const nb of adj[cur]) {\n      if (!seen[nb]) {\n        seen[nb] = true;\n        count++;\n        queue.push(nb);\n      }\n    }\n  }\n  return count;\n}\n",
                    ts: "function countReachable(n: number, edges: number[][], start: number): number {\n  // Store every undirected edge in both directions.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Mark a node when it enters the queue so it is counted only once.\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  const queue: number[] = [start];\n  // The starting node is reachable from itself.\n  let count = 1;\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    // Discover every unseen neighbour in this connected component.\n    for (const nb of adj[cur]) {\n      if (!seen[nb]) {\n        seen[nb] = true;\n        count++;\n        queue.push(nb);\n      }\n    }\n  }\n  return count;\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            },
            {
                label: "Iterative DFS",
                approach: "Same traversal driven by a stack.",
                js: "function countReachable(n, edges, start) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Set([start]);\n  const stack = [start];\n  while (stack.length) {\n    const cur = stack.pop();\n    for (const nb of adj[cur]) if (!seen.has(nb)) { seen.add(nb); stack.push(nb); }\n  }\n  return seen.size;\n}\n",
                ts: "function countReachable(n: number, edges: number[][], start: number): number {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Set([start]);\n  const stack: number[] = [start];\n  while (stack.length) {\n    const cur = stack.pop() as number;\n    for (const nb of adj[cur]) if (!seen.has(nb)) { seen.add(nb); stack.push(nb); }\n  }\n  return seen.size;\n}\n",
                commentedCode: {
                    js: "function countReachable(n, edges, start) {\n  // Build the neighbour list for the undirected graph.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // The set both prevents revisits and becomes the final count.\n  const seen = new Set([start]);\n  const stack = [start];\n  while (stack.length) {\n    // A stack makes this an iterative depth-first traversal.\n    const cur = stack.pop();\n    for (const nb of adj[cur]) {\n      if (!seen.has(nb)) {\n        // Mark before pushing so another edge cannot add a duplicate.\n        seen.add(nb);\n        stack.push(nb);\n      }\n    }\n  }\n  return seen.size;\n}\n",
                    ts: "function countReachable(n: number, edges: number[][], start: number): number {\n  // Build the neighbour list for the undirected graph.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // The set both prevents revisits and becomes the final count.\n  const seen = new Set([start]);\n  const stack: number[] = [start];\n  while (stack.length) {\n    // A stack makes this an iterative depth-first traversal.\n    const cur = stack.pop() as number;\n    for (const nb of adj[cur]) {\n      if (!seen.has(nb)) {\n        // Mark before pushing so another edge cannot add a duplicate.\n        seen.add(nb);\n        stack.push(nb);\n      }\n    }\n  }\n  return seen.size;\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            }
        ]
    },
    {
        id: "gt-reachable-list",
        slug: "reachable-nodes",
        title: "List Reachable Nodes",
        difficulty: "easy",
        patternIds: P,
        statement: `Return the node ids reachable from \`start\` (including \`start\`), sorted ascending.\n\n${GRAPH_NOTE}`,
        examples: [
            {
                input: "5, [[0,1],[1,2],[3,4]], 0",
                output: "[0,1,2]"
            },
            {
                input: "3, [], 1",
                output: "[1]"
            },
            {
                input: "2, [[0,1]], 0",
                output: "[0,1]"
            }
        ],
        constraints: [
            "1 <= n <= 10000"
        ],
        functionName: "reachableNodes",
        starter: {
            js: "function reachableNodes(n, edges, start) {\n  // Sorted list of reachable node ids.\n}\n",
            ts: "function reachableNodes(n: number, edges: number[][], start: number): number[] {\n  // Sorted list of reachable node ids.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            3,
                            4
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    1,
                    2
                ]
            },
            {
                args: [
                    3,
                    [],
                    1
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    1
                ]
            }
        ],
        hidden: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            2,
                            3
                        ]
                    ],
                    2
                ],
                expected: [
                    2,
                    3
                ]
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ]
                    ],
                    0
                ],
                expected: [
                    0,
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    6,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            4,
                            5
                        ]
                    ],
                    5
                ],
                expected: [
                    4,
                    5
                ]
            },
            {
                args: [
                    1,
                    [],
                    0
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    5,
                    [],
                    3
                ],
                expected: [
                    3
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            2
                        ]
                    ],
                    2
                ],
                expected: [
                    0,
                    2
                ]
            }
        ],
        hints: [
            "Traverse as usual, collecting the visited nodes.",
            "Sort the collected ids before returning so the output is deterministic.",
            "return [...seen].sort((a, b) => a - b)."
        ],
        solutions: [
            {
                label: "BFS then sort",
                approach: "Collect visited nodes, then order them.",
                js: "function reachableNodes(n, edges, start) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Set([start]);\n  const queue = [start];\n  while (queue.length) {\n    const cur = queue.shift();\n    for (const nb of adj[cur]) if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }\n  }\n  return [...seen].sort((a, b) => a - b);\n}\n",
                ts: "function reachableNodes(n: number, edges: number[][], start: number): number[] {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Set([start]);\n  const queue: number[] = [start];\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    for (const nb of adj[cur]) if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }\n  }\n  return [...seen].sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function reachableNodes(n, edges, start) {\n  // Convert the edge list into fast per-node neighbour lists.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Start BFS with start already recorded as reachable.\n  const seen = new Set([start]);\n  const queue = [start];\n  while (queue.length) {\n    const cur = queue.shift();\n    for (const nb of adj[cur]) {\n      if (!seen.has(nb)) {\n        seen.add(nb);\n        queue.push(nb);\n      }\n    }\n  }\n  // Traversal order depends on the edges, so sort the answer explicitly.\n  return [...seen].sort((a, b) => a - b);\n}\n",
                    ts: "function reachableNodes(n: number, edges: number[][], start: number): number[] {\n  // Convert the edge list into fast per-node neighbour lists.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Start BFS with start already recorded as reachable.\n  const seen = new Set([start]);\n  const queue: number[] = [start];\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    for (const nb of adj[cur]) {\n      if (!seen.has(nb)) {\n        seen.add(nb);\n        queue.push(nb);\n      }\n    }\n  }\n  // Traversal order depends on the edges, so sort the answer explicitly.\n  return [...seen].sort((a, b) => a - b);\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            },
            {
                label: "Recursive DFS",
                approach: "Mark nodes recursively, then read the visited flags in order.",
                js: "function reachableNodes(n, edges, start) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  const dfs = (cur) => {\n    if (seen[cur]) return;\n    seen[cur] = true;\n    for (const nb of adj[cur]) dfs(nb);\n  };\n  dfs(start);\n  const out = [];\n  for (let i = 0; i < n; i++) if (seen[i]) out.push(i);\n  return out;\n}\n",
                ts: "function reachableNodes(n: number, edges: number[][], start: number): number[] {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  const dfs = (cur: number) => {\n    if (seen[cur]) return;\n    seen[cur] = true;\n    for (const nb of adj[cur]) dfs(nb);\n  };\n  dfs(start);\n  const out: number[] = [];\n  for (let i = 0; i < n; i++) if (seen[i]) out.push(i);\n  return out;\n}\n",
                commentedCode: {
                    js: "function reachableNodes(n, edges, start) {\n  // Build both directions because every graph edge is undirected.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  const seen = new Array(n).fill(false);\n  const dfs = (cur) => {\n    // A visited node's whole reachable region was already explored.\n    if (seen[cur]) return;\n    seen[cur] = true;\n    // Recursively explore every edge leaving this node.\n    for (const nb of adj[cur]) dfs(nb);\n  };\n  dfs(start);\n  const out = [];\n  // Reading flags by node id produces ascending order without a sort.\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) out.push(i);\n  }\n  return out;\n}\n",
                    ts: "function reachableNodes(n: number, edges: number[][], start: number): number[] {\n  // Build both directions because every graph edge is undirected.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  const seen = new Array(n).fill(false);\n  const dfs = (cur: number) => {\n    // A visited node's whole reachable region was already explored.\n    if (seen[cur]) return;\n    seen[cur] = true;\n    // Recursively explore every edge leaving this node.\n    for (const nb of adj[cur]) dfs(nb);\n  };\n  dfs(start);\n  const out: number[] = [];\n  // Reading flags by node id produces ascending order without a sort.\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) out.push(i);\n  }\n  return out;\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            }
        ]
    },
    {
        id: "gt-num-islands",
        slug: "number-of-islands",
        title: "Number of Islands",
        difficulty: "medium",
        patternIds: P,
        statement: `A grid holds 1 for land and 0 for water. Return how many islands there are — groups of 1s connected horizontally or vertically.\n\n${GRID_NOTE}`,
        examples: [
            {
                input: "[[1,1,0],[0,1,0],[0,0,1]]",
                output: "2"
            },
            {
                input: "[[0,0],[0,0]]",
                output: "0"
            },
            {
                input: "[[1]]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= rows, cols <= 200",
            "each cell is 0 or 1"
        ],
        functionName: "numIslands",
        starter: {
            js: "function numIslands(grid) {\n  // Count 4-directionally connected groups of 1s.\n}\n",
            ts: "function numIslands(grid: number[][]): number {\n  // Count 4-directionally connected groups of 1s.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            1,
                            0
                        ],
                        [
                            0,
                            1,
                            0
                        ],
                        [
                            0,
                            0,
                            1
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            0,
                            0
                        ],
                        [
                            0,
                            0
                        ]
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            1
                        ]
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
                expected: 0
            },
            {
                args: [
                    [
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            1
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            0
                        ],
                        [
                            0,
                            1
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            0
                        ]
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            1,
                            0,
                            1
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            1,
                            0,
                            1
                        ]
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        [
                            1,
                            1,
                            1
                        ],
                        [
                            1,
                            1,
                            1
                        ]
                    ]
                ],
                expected: 1
            }
        ],
        hints: [
            "Scan every cell; when you meet an unvisited 1, that's a new island.",
            "Flood-fill from that cell to mark the whole island visited.",
            "Only up/down/left/right count — diagonals do not connect."
        ],
        solutions: [
            {
                label: "DFS flood fill",
                approach: "Each unvisited land cell launches a flood fill and adds one island.",
                js: "function numIslands(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const seen = new Set();\n  const dfs = (r, c) => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols) return;\n    const key = r * cols + c;\n    if (grid[r][c] !== 1 || seen.has(key)) return;\n    seen.add(key);\n    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);\n  };\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 1 && !seen.has(r * cols + c)) { count++; dfs(r, c); }\n    }\n  }\n  return count;\n}\n",
                ts: "function numIslands(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const seen = new Set<number>();\n  const dfs = (r: number, c: number) => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols) return;\n    const key = r * cols + c;\n    if (grid[r][c] !== 1 || seen.has(key)) return;\n    seen.add(key);\n    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);\n  };\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 1 && !seen.has(r * cols + c)) { count++; dfs(r, c); }\n    }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function numIslands(grid) {\n  const rows = grid.length;\n  // An empty grid contains no land components.\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const seen = new Set();\n  const dfs = (r, c) => {\n    // Stop when the flood fill leaves the grid.\n    if (r < 0 || c < 0 || r >= rows || c >= cols) return;\n    // Encode a cell as one number so it can be stored in a Set.\n    const key = r * cols + c;\n    // Water and already-filled land cannot extend this island.\n    if (grid[r][c] !== 1 || seen.has(key)) return;\n    seen.add(key);\n    // Only the four cardinal neighbours belong to the same island.\n    dfs(r + 1, c);\n    dfs(r - 1, c);\n    dfs(r, c + 1);\n    dfs(r, c - 1);\n  };\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 1 && !seen.has(r * cols + c)) {\n        // Unseen land starts one new connected component.\n        count++;\n        dfs(r, c);\n      }\n    }\n  }\n  return count;\n}\n",
                    ts: "function numIslands(grid: number[][]): number {\n  const rows = grid.length;\n  // An empty grid contains no land components.\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const seen = new Set<number>();\n  const dfs = (r: number, c: number) => {\n    // Stop when the flood fill leaves the grid.\n    if (r < 0 || c < 0 || r >= rows || c >= cols) return;\n    // Encode a cell as one number so it can be stored in a Set.\n    const key = r * cols + c;\n    // Water and already-filled land cannot extend this island.\n    if (grid[r][c] !== 1 || seen.has(key)) return;\n    seen.add(key);\n    // Only the four cardinal neighbours belong to the same island.\n    dfs(r + 1, c);\n    dfs(r - 1, c);\n    dfs(r, c + 1);\n    dfs(r, c - 1);\n  };\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 1 && !seen.has(r * cols + c)) {\n        // Unseen land starts one new connected component.\n        count++;\n        dfs(r, c);\n      }\n    }\n  }\n  return count;\n}\n"
                },
                time: "O(r·c)",
                space: "O(r·c)"
            },
            {
                label: "BFS flood fill",
                approach: "Sink each island with a queue instead of recursion.",
                js: "function numIslands(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] !== 1) continue;\n      count++;\n      const queue = [[r, c]];\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift();\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n    }\n  }\n  return count;\n}\n",
                ts: "function numIslands(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] !== 1) continue;\n      count++;\n      const queue: number[][] = [[r, c]];\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift() as number[];\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n    }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function numIslands(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  // Work on a copy so sinking land does not modify the caller's grid.\n  const g = grid.map((row) => [...row]);\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      // Water and previously sunk land do not start a new island.\n      if (g[r][c] !== 1) continue;\n      count++;\n      const queue = [[r, c]];\n      // Sink on enqueue so the same cell is never queued twice.\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift();\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          // Add each in-bounds land neighbour to this flood fill.\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n    }\n  }\n  return count;\n}\n",
                    ts: "function numIslands(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  // Work on a copy so sinking land does not modify the caller's grid.\n  const g = grid.map((row) => [...row]);\n  let count = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      // Water and previously sunk land do not start a new island.\n      if (g[r][c] !== 1) continue;\n      count++;\n      const queue: number[][] = [[r, c]];\n      // Sink on enqueue so the same cell is never queued twice.\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift() as number[];\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          // Add each in-bounds land neighbour to this flood fill.\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n    }\n  }\n  return count;\n}\n"
                },
                time: "O(r·c)",
                space: "O(r·c)"
            }
        ]
    },
    {
        id: "gt-max-island-area",
        slug: "max-island-area",
        title: "Largest Island",
        difficulty: "medium",
        patternIds: P,
        statement: `A grid holds 1 for land and 0 for water. Return the number of cells in the largest island, or 0 if there is no land.\n\n${GRID_NOTE}`,
        examples: [
            {
                input: "[[1,1,0],[0,1,0],[0,0,1]]",
                output: "3"
            },
            {
                input: "[[0,0]]",
                output: "0"
            },
            {
                input: "[[1]]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= rows, cols <= 200"
        ],
        functionName: "maxIslandArea",
        starter: {
            js: "function maxIslandArea(grid) {\n  // Size of the biggest connected group of 1s.\n}\n",
            ts: "function maxIslandArea(grid: number[][]): number {\n  // Size of the biggest connected group of 1s.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            1,
                            0
                        ],
                        [
                            0,
                            1,
                            0
                        ],
                        [
                            0,
                            0,
                            1
                        ]
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        [
                            0,
                            0
                        ]
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            1
                        ]
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
                expected: 0
            },
            {
                args: [
                    [
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            1
                        ]
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        [
                            1,
                            0
                        ],
                        [
                            0,
                            1
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            0,
                            1
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            1,
                            1,
                            1
                        ]
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        [
                            0
                        ]
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            1,
                            1,
                            1
                        ],
                        [
                            0,
                            1,
                            0
                        ]
                    ]
                ],
                expected: 4
            }
        ],
        hints: [
            "Flood fill as usual, but have the fill return how many cells it covered.",
            "Track the largest area seen across all fills.",
            "area(r,c) = 1 + area of each of the four neighbours."
        ],
        solutions: [
            {
                label: "DFS returning the area",
                approach: "Each flood fill reports its size; keep the maximum.",
                js: "function maxIslandArea(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  const dfs = (r, c) => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || g[r][c] !== 1) return 0;\n    g[r][c] = 0;\n    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);\n  };\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) best = Math.max(best, dfs(r, c));\n  }\n  return best;\n}\n",
                ts: "function maxIslandArea(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  const dfs = (r: number, c: number): number => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || g[r][c] !== 1) return 0;\n    g[r][c] = 0;\n    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);\n  };\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) best = Math.max(best, dfs(r, c));\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function maxIslandArea(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  // Sink cells in a copy to keep the input unchanged.\n  const g = grid.map((row) => [...row]);\n  const dfs = (r, c) => {\n    // Off-grid cells, water, and already-sunk land add no area.\n    if (r < 0 || c < 0 || r >= rows || c >= cols || g[r][c] !== 1) return 0;\n    // Mark this land cell before exploring to prevent revisiting it.\n    g[r][c] = 0;\n    // Count this cell plus every cardinally connected land cell.\n    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);\n  };\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      // Water returns zero; unseen land returns and sinks its full island.\n      best = Math.max(best, dfs(r, c));\n    }\n  }\n  return best;\n}\n",
                    ts: "function maxIslandArea(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  // Sink cells in a copy to keep the input unchanged.\n  const g = grid.map((row) => [...row]);\n  const dfs = (r: number, c: number): number => {\n    // Off-grid cells, water, and already-sunk land add no area.\n    if (r < 0 || c < 0 || r >= rows || c >= cols || g[r][c] !== 1) return 0;\n    // Mark this land cell before exploring to prevent revisiting it.\n    g[r][c] = 0;\n    // Count this cell plus every cardinally connected land cell.\n    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);\n  };\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      // Water returns zero; unseen land returns and sinks its full island.\n      best = Math.max(best, dfs(r, c));\n    }\n  }\n  return best;\n}\n"
                },
                time: "O(r·c)",
                space: "O(r·c)"
            },
            {
                label: "BFS counting cells",
                approach: "Queue-driven fill that counts the cells it sinks.",
                js: "function maxIslandArea(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] !== 1) continue;\n      let area = 0;\n      const queue = [[r, c]];\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift();\n        area++;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n      best = Math.max(best, area);\n    }\n  }\n  return best;\n}\n",
                ts: "function maxIslandArea(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] !== 1) continue;\n      let area = 0;\n      const queue: number[][] = [[r, c]];\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift() as number[];\n        area++;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n      best = Math.max(best, area);\n    }\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function maxIslandArea(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  // Use a copy as both the grid and the visited marker.\n  const g = grid.map((row) => [...row]);\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] !== 1) continue;\n      // This queue will consume exactly one unseen island.\n      let area = 0;\n      const queue = [[r, c]];\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift();\n        area++;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            // Sink on enqueue so each cell contributes once.\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n      // Compare this completed component with the largest so far.\n      best = Math.max(best, area);\n    }\n  }\n  return best;\n}\n",
                    ts: "function maxIslandArea(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  // Use a copy as both the grid and the visited marker.\n  const g = grid.map((row) => [...row]);\n  let best = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] !== 1) continue;\n      // This queue will consume exactly one unseen island.\n      let area = 0;\n      const queue: number[][] = [[r, c]];\n      g[r][c] = 0;\n      while (queue.length) {\n        const [cr, cc] = queue.shift() as number[];\n        area++;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = cr + dr, nc = cc + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            // Sink on enqueue so each cell contributes once.\n            g[nr][nc] = 0;\n            queue.push([nr, nc]);\n          }\n        }\n      }\n      // Compare this completed component with the largest so far.\n      best = Math.max(best, area);\n    }\n  }\n  return best;\n}\n"
                },
                time: "O(r·c)",
                space: "O(r·c)"
            }
        ]
    },
    {
        id: "gt-bipartite",
        slug: "is-bipartite",
        title: "Is the Graph Bipartite?",
        difficulty: "medium",
        patternIds: P,
        statement: `Return \`true\` if the nodes can be split into two groups so that every edge joins nodes from different groups.\n\n${GRAPH_NOTE}`,
        examples: [
            {
                input: "4, [[0,1],[1,2],[2,3],[3,0]]",
                output: "true"
            },
            {
                input: "3, [[0,1],[1,2],[2,0]]",
                output: "false"
            },
            {
                input: "3, []",
                output: "true"
            }
        ],
        constraints: [
            "1 <= n <= 10000",
            "the graph may be disconnected"
        ],
        functionName: "isBipartite",
        starter: {
            js: "function isBipartite(n, edges) {\n  // True if the graph can be 2-coloured.\n}\n",
            ts: "function isBipartite(n: number, edges: number[][]): boolean {\n  // True if the graph can be 2-coloured.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            0
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            0
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    3,
                    []
                ],
                expected: true
            }
        ],
        hidden: [
            {
                args: [
                    1,
                    []
                ],
                expected: true
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            0
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            0,
                            1
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    6,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ],
                        [
                            4,
                            5
                        ],
                        [
                            5,
                            0
                        ]
                    ]
                ],
                expected: true
            }
        ],
        hints: [
            "Colour a node, then colour all its neighbours the opposite colour.",
            "A conflict — a neighbour already holding the same colour — means it isn't bipartite.",
            "Restart the colouring for every uncoloured node so disconnected parts are covered."
        ],
        solutions: [
            {
                label: "BFS two-colouring",
                approach: "Alternate colours across edges and watch for a clash.",
                js: "function isBipartite(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const color = new Array(n).fill(0);\n  for (let s = 0; s < n; s++) {\n    if (color[s] !== 0) continue;\n    color[s] = 1;\n    const queue = [s];\n    while (queue.length) {\n      const cur = queue.shift();\n      for (const nb of adj[cur]) {\n        if (color[nb] === 0) { color[nb] = -color[cur]; queue.push(nb); }\n        else if (color[nb] === color[cur]) return false;\n      }\n    }\n  }\n  return true;\n}\n",
                ts: "function isBipartite(n: number, edges: number[][]): boolean {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const color = new Array(n).fill(0);\n  for (let s = 0; s < n; s++) {\n    if (color[s] !== 0) continue;\n    color[s] = 1;\n    const queue: number[] = [s];\n    while (queue.length) {\n      const cur = queue.shift() as number;\n      for (const nb of adj[cur]) {\n        if (color[nb] === 0) { color[nb] = -color[cur]; queue.push(nb); }\n        else if (color[nb] === color[cur]) return false;\n      }\n    }\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isBipartite(n, edges) {\n  // Build adjacency lists for both ends of every edge.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Zero means uncoloured; the two partitions use 1 and -1.\n  const color = new Array(n).fill(0);\n  for (let s = 0; s < n; s++) {\n    // Already-coloured nodes belong to a component BFS already processed.\n    if (color[s] !== 0) continue;\n    color[s] = 1;\n    const queue = [s];\n    while (queue.length) {\n      const cur = queue.shift();\n      for (const nb of adj[cur]) {\n        if (color[nb] === 0) {\n          // Every edge must cross between opposite colours.\n          color[nb] = -color[cur];\n          queue.push(nb);\n        } else if (color[nb] === color[cur]) {\n          // An edge within one colour makes a bipartition impossible.\n          return false;\n        }\n      }\n    }\n  }\n  return true;\n}\n",
                    ts: "function isBipartite(n: number, edges: number[][]): boolean {\n  // Build adjacency lists for both ends of every edge.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Zero means uncoloured; the two partitions use 1 and -1.\n  const color = new Array(n).fill(0);\n  for (let s = 0; s < n; s++) {\n    // Already-coloured nodes belong to a component BFS already processed.\n    if (color[s] !== 0) continue;\n    color[s] = 1;\n    const queue: number[] = [s];\n    while (queue.length) {\n      const cur = queue.shift() as number;\n      for (const nb of adj[cur]) {\n        if (color[nb] === 0) {\n          // Every edge must cross between opposite colours.\n          color[nb] = -color[cur];\n          queue.push(nb);\n        } else if (color[nb] === color[cur]) {\n          // An edge within one colour makes a bipartition impossible.\n          return false;\n        }\n      }\n    }\n  }\n  return true;\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            },
            {
                label: "DFS two-colouring",
                approach: "The same idea driven by recursion.",
                js: "function isBipartite(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const color = new Array(n).fill(0);\n  const paint = (cur, c) => {\n    color[cur] = c;\n    for (const nb of adj[cur]) {\n      if (color[nb] === 0) { if (!paint(nb, -c)) return false; }\n      else if (color[nb] === c) return false;\n    }\n    return true;\n  };\n  for (let s = 0; s < n; s++) if (color[s] === 0 && !paint(s, 1)) return false;\n  return true;\n}\n",
                ts: "function isBipartite(n: number, edges: number[][]): boolean {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const color = new Array(n).fill(0);\n  const paint = (cur: number, c: number): boolean => {\n    color[cur] = c;\n    for (const nb of adj[cur]) {\n      if (color[nb] === 0) { if (!paint(nb, -c)) return false; }\n      else if (color[nb] === c) return false;\n    }\n    return true;\n  };\n  for (let s = 0; s < n; s++) if (color[s] === 0 && !paint(s, 1)) return false;\n  return true;\n}\n",
                commentedCode: {
                    js: "function isBipartite(n, edges) {\n  // Represent each undirected connection in both adjacency lists.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Zero is unvisited; 1 and -1 identify the two sides.\n  const color = new Array(n).fill(0);\n  const paint = (cur, c) => {\n    color[cur] = c;\n    for (const nb of adj[cur]) {\n      if (color[nb] === 0) {\n        // Recursively place an unseen neighbour on the opposite side.\n        if (!paint(nb, -c)) return false;\n      } else if (color[nb] === c) {\n        // Adjacent nodes on the same side are a colouring conflict.\n        return false;\n      }\n    }\n    return true;\n  };\n  // Start a new colouring for every disconnected component.\n  for (let s = 0; s < n; s++) {\n    if (color[s] === 0 && !paint(s, 1)) return false;\n  }\n  return true;\n}\n",
                    ts: "function isBipartite(n: number, edges: number[][]): boolean {\n  // Represent each undirected connection in both adjacency lists.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Zero is unvisited; 1 and -1 identify the two sides.\n  const color = new Array(n).fill(0);\n  const paint = (cur: number, c: number): boolean => {\n    color[cur] = c;\n    for (const nb of adj[cur]) {\n      if (color[nb] === 0) {\n        // Recursively place an unseen neighbour on the opposite side.\n        if (!paint(nb, -c)) return false;\n      } else if (color[nb] === c) {\n        // Adjacent nodes on the same side are a colouring conflict.\n        return false;\n      }\n    }\n    return true;\n  };\n  // Start a new colouring for every disconnected component.\n  for (let s = 0; s < n; s++) {\n    if (color[s] === 0 && !paint(s, 1)) return false;\n  }\n  return true;\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            }
        ]
    },
    {
        id: "gt-rotting-oranges",
        slug: "rotting-oranges",
        title: "Rotting Oranges",
        difficulty: "hard",
        patternIds: P,
        statement: `A grid holds 0 (empty), 1 (fresh orange) or 2 (rotten orange). Every minute, a rotten orange rots each fresh orange directly beside it. Return how many minutes until no fresh orange remains, or -1 if that never happens.\n\n${GRID_NOTE}`,
        examples: [
            {
                input: "[[2,1,1],[1,1,0],[0,1,1]]",
                output: "4"
            },
            {
                input: "[[2,1,1],[0,1,1],[1,0,1]]",
                output: "-1"
            },
            {
                input: "[[0,2]]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= rows, cols <= 200",
            "each cell is 0, 1 or 2"
        ],
        functionName: "rotOranges",
        starter: {
            js: "function rotOranges(grid) {\n  // Minutes until nothing fresh remains, or -1.\n}\n",
            ts: "function rotOranges(grid: number[][]): number {\n  // Minutes until nothing fresh remains, or -1.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            2,
                            1,
                            1
                        ],
                        [
                            1,
                            1,
                            0
                        ],
                        [
                            0,
                            1,
                            1
                        ]
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        [
                            2,
                            1,
                            1
                        ],
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            0,
                            1
                        ]
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        [
                            0,
                            2
                        ]
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
                        [
                            0
                        ]
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            1
                        ]
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        [
                            2
                        ]
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            2,
                            1
                        ],
                        [
                            1,
                            1
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            2,
                            1,
                            1
                        ],
                        [
                            1,
                            1,
                            1
                        ],
                        [
                            1,
                            1,
                            1
                        ]
                    ]
                ],
                expected: 4
            }
        ],
        hints: [
            "Every already-rotten orange starts spreading at the same time — that's a multi-source BFS.",
            "Seed the queue with all rotten cells, then expand one minute per level.",
            "If fresh oranges remain when the queue empties, return -1."
        ],
        solutions: [
            {
                label: "Multi-source BFS",
                approach: "Start from every rotten cell at once and count level expansions.",
                js: "function rotOranges(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let fresh = 0;\n  let queue = [];\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] === 1) fresh++;\n      else if (g[r][c] === 2) queue.push([r, c]);\n    }\n  }\n  if (fresh === 0) return 0;\n  let minutes = 0;\n  while (queue.length && fresh > 0) {\n    const next = [];\n    for (const [r, c] of queue) {\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n          g[nr][nc] = 2;\n          fresh--;\n          next.push([nr, nc]);\n        }\n      }\n    }\n    queue = next;\n    if (queue.length) minutes++;\n  }\n  return fresh === 0 ? minutes : -1;\n}\n",
                ts: "function rotOranges(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  let fresh = 0;\n  let queue: number[][] = [];\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (g[r][c] === 1) fresh++;\n      else if (g[r][c] === 2) queue.push([r, c]);\n    }\n  }\n  if (fresh === 0) return 0;\n  let minutes = 0;\n  while (queue.length && fresh > 0) {\n    const next: number[][] = [];\n    for (const [r, c] of queue) {\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n          g[nr][nc] = 2;\n          fresh--;\n          next.push([nr, nc]);\n        }\n      }\n    }\n    queue = next;\n    if (queue.length) minutes++;\n  }\n  return fresh === 0 ? minutes : -1;\n}\n",
                commentedCode: {
                    js: "function rotOranges(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  // Mutate a copy while simulating the spread.\n  const g = grid.map((row) => [...row]);\n  let fresh = 0;\n  let queue = [];\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      // Count work remaining and seed every simultaneous source.\n      if (g[r][c] === 1) fresh++;\n      else if (g[r][c] === 2) queue.push([r, c]);\n    }\n  }\n  if (fresh === 0) return 0;\n  let minutes = 0;\n  while (queue.length && fresh > 0) {\n    // All cells in next rot one minute after the current frontier.\n    const next = [];\n    for (const [r, c] of queue) {\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n          // Rot immediately so two sources cannot enqueue it twice.\n          g[nr][nc] = 2;\n          fresh--;\n          next.push([nr, nc]);\n        }\n      }\n    }\n    queue = next;\n    // A nonempty next frontier means one minute of spreading occurred.\n    if (queue.length) minutes++;\n  }\n  // Fresh cells left after all sources stop are unreachable.\n  return fresh === 0 ? minutes : -1;\n}\n",
                    ts: "function rotOranges(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  // Mutate a copy while simulating the spread.\n  const g = grid.map((row) => [...row]);\n  let fresh = 0;\n  let queue: number[][] = [];\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      // Count work remaining and seed every simultaneous source.\n      if (g[r][c] === 1) fresh++;\n      else if (g[r][c] === 2) queue.push([r, c]);\n    }\n  }\n  if (fresh === 0) return 0;\n  let minutes = 0;\n  while (queue.length && fresh > 0) {\n    // All cells in next rot one minute after the current frontier.\n    const next: number[][] = [];\n    for (const [r, c] of queue) {\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n          // Rot immediately so two sources cannot enqueue it twice.\n          g[nr][nc] = 2;\n          fresh--;\n          next.push([nr, nc]);\n        }\n      }\n    }\n    queue = next;\n    // A nonempty next frontier means one minute of spreading occurred.\n    if (queue.length) minutes++;\n  }\n  // Fresh cells left after all sources stop are unreachable.\n  return fresh === 0 ? minutes : -1;\n}\n"
                },
                time: "O(r·c)",
                space: "O(r·c)"
            },
            {
                label: "Repeated sweeps",
                approach: "Rot one ring per pass over the grid until nothing changes.",
                js: "function rotOranges(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  const countFresh = () => {\n    let f = 0;\n    for (const row of g) for (const v of row) if (v === 1) f++;\n    return f;\n  };\n  let minutes = 0;\n  while (countFresh() > 0) {\n    const toRot = [];\n    for (let r = 0; r < rows; r++) {\n      for (let c = 0; c < cols; c++) {\n        if (g[r][c] !== 2) continue;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = r + dr, nc = c + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) toRot.push([nr, nc]);\n        }\n      }\n    }\n    if (toRot.length === 0) return -1;\n    for (const [r, c] of toRot) g[r][c] = 2;\n    minutes++;\n  }\n  return minutes;\n}\n",
                ts: "function rotOranges(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  const g = grid.map((row) => [...row]);\n  const countFresh = () => {\n    let f = 0;\n    for (const row of g) for (const v of row) if (v === 1) f++;\n    return f;\n  };\n  let minutes = 0;\n  while (countFresh() > 0) {\n    const toRot: number[][] = [];\n    for (let r = 0; r < rows; r++) {\n      for (let c = 0; c < cols; c++) {\n        if (g[r][c] !== 2) continue;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = r + dr, nc = c + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) toRot.push([nr, nc]);\n        }\n      }\n    }\n    if (toRot.length === 0) return -1;\n    for (const [r, c] of toRot) g[r][c] = 2;\n    minutes++;\n  }\n  return minutes;\n}\n",
                commentedCode: {
                    js: "function rotOranges(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  // Simulate on a copy so the provided grid is preserved.\n  const g = grid.map((row) => [...row]);\n  const countFresh = () => {\n    let f = 0;\n    // Count every orange that still needs to rot.\n    for (const row of g) {\n      for (const v of row) if (v === 1) f++;\n    }\n    return f;\n  };\n  let minutes = 0;\n  while (countFresh() > 0) {\n    // Collect this minute's changes without applying them mid-scan.\n    const toRot = [];\n    for (let r = 0; r < rows; r++) {\n      for (let c = 0; c < cols; c++) {\n        if (g[r][c] !== 2) continue;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = r + dr, nc = c + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            toRot.push([nr, nc]);\n          }\n        }\n      }\n    }\n    // No possible change while fresh fruit remains means failure.\n    if (toRot.length === 0) return -1;\n    // Apply the entire ring together, then advance the clock once.\n    for (const [r, c] of toRot) g[r][c] = 2;\n    minutes++;\n  }\n  return minutes;\n}\n",
                    ts: "function rotOranges(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  // Simulate on a copy so the provided grid is preserved.\n  const g = grid.map((row) => [...row]);\n  const countFresh = () => {\n    let f = 0;\n    // Count every orange that still needs to rot.\n    for (const row of g) {\n      for (const v of row) if (v === 1) f++;\n    }\n    return f;\n  };\n  let minutes = 0;\n  while (countFresh() > 0) {\n    // Collect this minute's changes without applying them mid-scan.\n    const toRot: number[][] = [];\n    for (let r = 0; r < rows; r++) {\n      for (let c = 0; c < cols; c++) {\n        if (g[r][c] !== 2) continue;\n        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n          const nr = r + dr, nc = c + dc;\n          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && g[nr][nc] === 1) {\n            toRot.push([nr, nc]);\n          }\n        }\n      }\n    }\n    // No possible change while fresh fruit remains means failure.\n    if (toRot.length === 0) return -1;\n    // Apply the entire ring together, then advance the clock once.\n    for (const [r, c] of toRot) g[r][c] = 2;\n    minutes++;\n  }\n  return minutes;\n}\n"
                },
                time: "O((r·c)²)",
                space: "O(r·c)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "gt-island-perimeter",
        slug: "island-perimeter",
        title: "Island Perimeter",
        difficulty: "medium",
        patternIds: P,
        statement: `A grid holds 1 for land and 0 for water. Return the total perimeter of the land — every land edge that touches water or the grid border.\n\n${GRID_NOTE}`,
        examples: [
            {
                input: "[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]",
                output: "16"
            },
            {
                input: "[[1]]",
                output: "4"
            },
            {
                input: "[[0,0]]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= rows, cols <= 200"
        ],
        functionName: "islandPerimeter",
        starter: {
            js: "function islandPerimeter(grid) {\n  // Total perimeter of all land cells.\n}\n",
            ts: "function islandPerimeter(grid: number[][]): number {\n  // Total perimeter of all land cells.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            0,
                            1,
                            0,
                            0
                        ],
                        [
                            1,
                            1,
                            1,
                            0
                        ],
                        [
                            0,
                            1,
                            0,
                            0
                        ],
                        [
                            1,
                            1,
                            0,
                            0
                        ]
                    ]
                ],
                expected: 16
            },
            {
                args: [
                    [
                        [
                            1
                        ]
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        [
                            0,
                            0
                        ]
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
                        [
                            1,
                            1
                        ]
                    ]
                ],
                expected: 6
            },
            {
                args: [
                    [
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            1
                        ]
                    ]
                ],
                expected: 8
            },
            {
                args: [
                    [
                        [
                            1,
                            0
                        ],
                        [
                            0,
                            1
                        ]
                    ]
                ],
                expected: 8
            },
            {
                args: [
                    [
                        [
                            1,
                            1,
                            1
                        ]
                    ]
                ],
                expected: 8
            },
            {
                args: [
                    [
                        [
                            0
                        ]
                    ]
                ],
                expected: 0
            }
        ],
        hints: [
            "Each land cell alone contributes 4 sides.",
            "Every shared edge between two land cells removes 2 from the total.",
            "perimeter = 4·(land cells) − 2·(adjacent land pairs)."
        ],
        solutions: [
            {
                label: "Count cells and shared edges",
                approach: "Four sides per cell, minus two for every neighbouring pair.",
                js: "function islandPerimeter(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let land = 0, pairs = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== 1) continue;\n      land++;\n      if (r + 1 < rows && grid[r + 1][c] === 1) pairs++;\n      if (c + 1 < cols && grid[r][c + 1] === 1) pairs++;\n    }\n  }\n  return 4 * land - 2 * pairs;\n}\n",
                ts: "function islandPerimeter(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let land = 0, pairs = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== 1) continue;\n      land++;\n      if (r + 1 < rows && grid[r + 1][c] === 1) pairs++;\n      if (c + 1 < cols && grid[r][c + 1] === 1) pairs++;\n    }\n  }\n  return 4 * land - 2 * pairs;\n}\n",
                commentedCode: {
                    js: "function islandPerimeter(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let land = 0, pairs = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== 1) continue;\n      // An isolated land cell contributes four boundary sides.\n      land++;\n      // Check only down and right so each shared edge is counted once.\n      if (r + 1 < rows && grid[r + 1][c] === 1) pairs++;\n      if (c + 1 < cols && grid[r][c + 1] === 1) pairs++;\n    }\n  }\n  // Each shared edge hides one side from each of its two cells.\n  return 4 * land - 2 * pairs;\n}\n",
                    ts: "function islandPerimeter(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let land = 0, pairs = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== 1) continue;\n      // An isolated land cell contributes four boundary sides.\n      land++;\n      // Check only down and right so each shared edge is counted once.\n      if (r + 1 < rows && grid[r + 1][c] === 1) pairs++;\n      if (c + 1 < cols && grid[r][c + 1] === 1) pairs++;\n    }\n  }\n  // Each shared edge hides one side from each of its two cells.\n  return 4 * land - 2 * pairs;\n}\n"
                },
                time: "O(r·c)",
                space: "O(1)"
            },
            {
                label: "Count exposed sides",
                approach: "For each land cell, add one for every neighbour that is water or off-grid.",
                js: "function islandPerimeter(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let total = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== 1) continue;\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] === 0) total++;\n      }\n    }\n  }\n  return total;\n}\n",
                ts: "function islandPerimeter(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let total = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] !== 1) continue;\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] === 0) total++;\n      }\n    }\n  }\n  return total;\n}\n",
                commentedCode: {
                    js: "function islandPerimeter(grid) {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let total = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      // Only land cells can contribute perimeter.\n      if (grid[r][c] !== 1) continue;\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        // A side is exposed when its neighbour is outside or is water.\n        if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] === 0) {\n          total++;\n        }\n      }\n    }\n  }\n  return total;\n}\n",
                    ts: "function islandPerimeter(grid: number[][]): number {\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  let total = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      // Only land cells can contribute perimeter.\n      if (grid[r][c] !== 1) continue;\n      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n        const nr = r + dr, nc = c + dc;\n        // A side is exposed when its neighbour is outside or is water.\n        if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] === 0) {\n          total++;\n        }\n      }\n    }\n  }\n  return total;\n}\n"
                },
                time: "O(r·c)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "gt-flood-fill",
        slug: "flood-fill",
        title: "Flood Fill",
        difficulty: "medium",
        patternIds: P,
        statement: `Starting at cell \`(sr, sc)\`, repaint every 4-directionally connected cell that shares the starting colour with \`newColor\`, and return the resulting grid.\n\n${GRID_NOTE}`,
        examples: [
            {
                input: "[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2",
                output: "[[2,2,2],[2,2,0],[2,0,1]]"
            },
            {
                input: "[[0,0],[0,0]], 0, 0, 0",
                output: "[[0,0],[0,0]]"
            },
            {
                input: "[[1]], 0, 0, 2",
                output: "[[2]]"
            }
        ],
        constraints: [
            "the start cell is inside the grid"
        ],
        functionName: "floodFill",
        starter: {
            js: "function floodFill(grid, sr, sc, newColor) {\n  // Repaint the connected same-colour region.\n}\n",
            ts: "function floodFill(grid: number[][], sr: number, sc: number, newColor: number): number[][] {\n  // Repaint the connected same-colour region.\n  return grid;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            1,
                            1
                        ],
                        [
                            1,
                            1,
                            0
                        ],
                        [
                            1,
                            0,
                            1
                        ]
                    ],
                    1,
                    1,
                    2
                ],
                expected: [
                    [
                        2,
                        2,
                        2
                    ],
                    [
                        2,
                        2,
                        0
                    ],
                    [
                        2,
                        0,
                        1
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            0,
                            0
                        ],
                        [
                            0,
                            0
                        ]
                    ],
                    0,
                    0,
                    0
                ],
                expected: [
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1
                        ]
                    ],
                    0,
                    0,
                    2
                ],
                expected: [
                    [
                        2
                    ]
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        [
                            1,
                            0
                        ],
                        [
                            0,
                            1
                        ]
                    ],
                    0,
                    0,
                    3
                ],
                expected: [
                    [
                        3,
                        0
                    ],
                    [
                        0,
                        1
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            1
                        ]
                    ],
                    0,
                    0,
                    5
                ],
                expected: [
                    [
                        5,
                        5
                    ],
                    [
                        5,
                        5
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            0
                        ]
                    ],
                    1,
                    1,
                    7
                ],
                expected: [
                    [
                        0,
                        1
                    ],
                    [
                        1,
                        7
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            2,
                            2
                        ],
                        [
                            2,
                            2
                        ]
                    ],
                    0,
                    0,
                    2
                ],
                expected: [
                    [
                        2,
                        2
                    ],
                    [
                        2,
                        2
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            1
                        ]
                    ],
                    0,
                    1,
                    9
                ],
                expected: [
                    [
                        1,
                        9
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
                        [
                            3
                        ]
                    ],
                    0,
                    0,
                    3
                ],
                expected: [
                    [
                        3
                    ]
                ]
            }
        ],
        hints: [
            "Remember the starting colour before you overwrite it.",
            "If the new colour equals the old one, there is nothing to do — otherwise you loop forever.",
            "Recurse into the four neighbours that still hold the original colour."
        ],
        solutions: [
            {
                label: "DFS repaint",
                approach: "Flood outward from the start, guarding against a no-op repaint.",
                js: "function floodFill(grid, sr, sc, newColor) {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  const start = grid[sr][sc];\n  if (start === newColor) return grid;\n  const fill = (r, c) => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== start) return;\n    grid[r][c] = newColor;\n    fill(r + 1, c); fill(r - 1, c); fill(r, c + 1); fill(r, c - 1);\n  };\n  fill(sr, sc);\n  return grid;\n}\n",
                ts: "function floodFill(grid: number[][], sr: number, sc: number, newColor: number): number[][] {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  const start = grid[sr][sc];\n  if (start === newColor) return grid;\n  const fill = (r: number, c: number) => {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== start) return;\n    grid[r][c] = newColor;\n    fill(r + 1, c); fill(r - 1, c); fill(r, c + 1); fill(r, c - 1);\n  };\n  fill(sr, sc);\n  return grid;\n}\n",
                commentedCode: {
                    js: "function floodFill(grid, sr, sc, newColor) {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  // Every cell in the filled region must match this original colour.\n  const start = grid[sr][sc];\n  // Without this guard, repainting would not mark cells as visited.\n  if (start === newColor) return grid;\n  const fill = (r, c) => {\n    // Stop at the border or at any different-coloured cell.\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== start) return;\n    // Repainting now doubles as the visited marker.\n    grid[r][c] = newColor;\n    fill(r + 1, c);\n    fill(r - 1, c);\n    fill(r, c + 1);\n    fill(r, c - 1);\n  };\n  fill(sr, sc);\n  return grid;\n}\n",
                    ts: "function floodFill(grid: number[][], sr: number, sc: number, newColor: number): number[][] {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  // Every cell in the filled region must match this original colour.\n  const start = grid[sr][sc];\n  // Without this guard, repainting would not mark cells as visited.\n  if (start === newColor) return grid;\n  const fill = (r: number, c: number) => {\n    // Stop at the border or at any different-coloured cell.\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== start) return;\n    // Repainting now doubles as the visited marker.\n    grid[r][c] = newColor;\n    fill(r + 1, c);\n    fill(r - 1, c);\n    fill(r, c + 1);\n    fill(r, c - 1);\n  };\n  fill(sr, sc);\n  return grid;\n}\n"
                },
                time: "O(r·c)",
                space: "O(r·c)"
            },
            {
                label: "BFS repaint",
                approach: "Queue-driven repaint with the same guard.",
                js: "function floodFill(grid, sr, sc, newColor) {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  const start = grid[sr][sc];\n  if (start === newColor) return grid;\n  const queue = [[sr, sc]];\n  grid[sr][sc] = newColor;\n  while (queue.length) {\n    const [r, c] = queue.shift();\n    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === start) {\n        grid[nr][nc] = newColor;\n        queue.push([nr, nc]);\n      }\n    }\n  }\n  return grid;\n}\n",
                ts: "function floodFill(grid: number[][], sr: number, sc: number, newColor: number): number[][] {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  const start = grid[sr][sc];\n  if (start === newColor) return grid;\n  const queue: number[][] = [[sr, sc]];\n  grid[sr][sc] = newColor;\n  while (queue.length) {\n    const [r, c] = queue.shift() as number[];\n    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === start) {\n        grid[nr][nc] = newColor;\n        queue.push([nr, nc]);\n      }\n    }\n  }\n  return grid;\n}\n",
                commentedCode: {
                    js: "function floodFill(grid, sr, sc, newColor) {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  const start = grid[sr][sc];\n  // Equal colours need no work and cannot serve as visited states.\n  if (start === newColor) return grid;\n  const queue = [[sr, sc]];\n  // Repaint when enqueuing so this cell cannot enter again.\n  grid[sr][sc] = newColor;\n  while (queue.length) {\n    const [r, c] = queue.shift();\n    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n      const nr = r + dr, nc = c + dc;\n      // Only in-bounds cells of the original colour join the region.\n      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === start) {\n        grid[nr][nc] = newColor;\n        queue.push([nr, nc]);\n      }\n    }\n  }\n  return grid;\n}\n",
                    ts: "function floodFill(grid: number[][], sr: number, sc: number, newColor: number): number[][] {\n  const rows = grid.length;\n  if (rows === 0) return grid;\n  const cols = grid[0].length;\n  const start = grid[sr][sc];\n  // Equal colours need no work and cannot serve as visited states.\n  if (start === newColor) return grid;\n  const queue: number[][] = [[sr, sc]];\n  // Repaint when enqueuing so this cell cannot enter again.\n  grid[sr][sc] = newColor;\n  while (queue.length) {\n    const [r, c] = queue.shift() as number[];\n    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n      const nr = r + dr, nc = c + dc;\n      // Only in-bounds cells of the original colour join the region.\n      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === start) {\n        grid[nr][nc] = newColor;\n        queue.push([nr, nc]);\n      }\n    }\n  }\n  return grid;\n}\n"
                },
                time: "O(r·c)",
                space: "O(r·c)"
            }
        ]
    },
    {
        id: "gt-nodes-at-distance",
        slug: "nodes-at-distance",
        title: "Nodes at Distance K",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the nodes that are exactly \`k\` edges away from \`start\`, sorted ascending.\n\n${GRAPH_NOTE}`,
        examples: [
            {
                input: "5, [[0,1],[1,2],[2,3],[3,4]], 0, 2",
                output: "[2]"
            },
            {
                input: "3, [], 0, 0",
                output: "[0]"
            },
            {
                input: "4, [[0,1],[0,2],[0,3]], 0, 1",
                output: "[1,2,3]"
            }
        ],
        constraints: [
            "1 <= n <= 10000",
            "0 <= k"
        ],
        functionName: "nodesAtDistance",
        starter: {
            js: "function nodesAtDistance(n, edges, start, k) {\n  // Nodes exactly k edges from start, sorted.\n}\n",
            ts: "function nodesAtDistance(n: number, edges: number[][], start: number, k: number): number[] {\n  // Nodes exactly k edges from start, sorted.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ]
                    ],
                    0,
                    2
                ],
                expected: [
                    2
                ]
            },
            {
                args: [
                    3,
                    [],
                    0,
                    0
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            0,
                            2
                        ],
                        [
                            0,
                            3
                        ]
                    ],
                    0,
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
                    5,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ]
                    ],
                    0,
                    0
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ]
                    ],
                    0,
                    4
                ],
                expected: [
                    4
                ]
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ]
                    ],
                    0,
                    5
                ],
                expected: []
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            2,
                            3
                        ]
                    ],
                    0,
                    1
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            2,
                            3
                        ]
                    ],
                    0,
                    2
                ],
                expected: []
            },
            {
                args: [
                    6,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            0,
                            2
                        ],
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            4
                        ],
                        [
                            4,
                            5
                        ]
                    ],
                    0,
                    2
                ],
                expected: [
                    3,
                    4
                ]
            }
        ],
        hints: [
            "BFS records the shortest distance to each node as it expands.",
            "Collect the nodes whose recorded distance equals k.",
            "Unreachable nodes should never be included."
        ],
        solutions: [
            {
                label: "BFS distances",
                approach: "Record each node's first-reached depth and filter for k.",
                js: "function nodesAtDistance(n, edges, start, k) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const dist = new Array(n).fill(-1);\n  dist[start] = 0;\n  const queue = [start];\n  while (queue.length) {\n    const cur = queue.shift();\n    for (const nb of adj[cur]) if (dist[nb] === -1) { dist[nb] = dist[cur] + 1; queue.push(nb); }\n  }\n  const out = [];\n  for (let i = 0; i < n; i++) if (dist[i] === k) out.push(i);\n  return out;\n}\n",
                ts: "function nodesAtDistance(n: number, edges: number[][], start: number, k: number): number[] {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const dist = new Array(n).fill(-1);\n  dist[start] = 0;\n  const queue: number[] = [start];\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    for (const nb of adj[cur]) if (dist[nb] === -1) { dist[nb] = dist[cur] + 1; queue.push(nb); }\n  }\n  const out: number[] = [];\n  for (let i = 0; i < n; i++) if (dist[i] === k) out.push(i);\n  return out;\n}\n",
                commentedCode: {
                    js: "function nodesAtDistance(n, edges, start, k) {\n  // Build an adjacency list so each node's neighbours are direct to access.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // -1 means unreachable so far; the source is zero edges away.\n  const dist = new Array(n).fill(-1);\n  dist[start] = 0;\n  const queue = [start];\n  while (queue.length) {\n    const cur = queue.shift();\n    for (const nb of adj[cur]) {\n      if (dist[nb] === -1) {\n        // BFS first reaches a node along a shortest path.\n        dist[nb] = dist[cur] + 1;\n        queue.push(nb);\n      }\n    }\n  }\n  const out = [];\n  // Scanning ids in order both filters distance k and sorts the result.\n  for (let i = 0; i < n; i++) {\n    if (dist[i] === k) out.push(i);\n  }\n  return out;\n}\n",
                    ts: "function nodesAtDistance(n: number, edges: number[][], start: number, k: number): number[] {\n  // Build an adjacency list so each node's neighbours are direct to access.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // -1 means unreachable so far; the source is zero edges away.\n  const dist = new Array(n).fill(-1);\n  dist[start] = 0;\n  const queue: number[] = [start];\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    for (const nb of adj[cur]) {\n      if (dist[nb] === -1) {\n        // BFS first reaches a node along a shortest path.\n        dist[nb] = dist[cur] + 1;\n        queue.push(nb);\n      }\n    }\n  }\n  const out: number[] = [];\n  // Scanning ids in order both filters distance k and sorts the result.\n  for (let i = 0; i < n; i++) {\n    if (dist[i] === k) out.push(i);\n  }\n  return out;\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            },
            {
                label: "Expand k levels",
                approach: "Advance the frontier exactly k times and return what's left.",
                js: "function nodesAtDistance(n, edges, start, k) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  let level = [start];\n  for (let step = 0; step < k; step++) {\n    const next = [];\n    for (const cur of level) {\n      for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; next.push(nb); }\n    }\n    level = next;\n  }\n  return level.sort((a, b) => a - b);\n}\n",
                ts: "function nodesAtDistance(n: number, edges: number[][], start: number, k: number): number[] {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  let level: number[] = [start];\n  for (let step = 0; step < k; step++) {\n    const next: number[] = [];\n    for (const cur of level) {\n      for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; next.push(nb); }\n    }\n    level = next;\n  }\n  return level.sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function nodesAtDistance(n, edges, start, k) {\n  // Store both directions of each undirected edge.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Mark on discovery so later levels cannot revisit earlier nodes.\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  // This frontier begins with every node at distance zero.\n  let level = [start];\n  for (let step = 0; step < k; step++) {\n    const next = [];\n    for (const cur of level) {\n      for (const nb of adj[cur]) {\n        if (!seen[nb]) {\n          seen[nb] = true;\n          next.push(nb);\n        }\n      }\n    }\n    // One frontier expansion advances the distance by one edge.\n    level = next;\n  }\n  // The remaining frontier is exactly distance k; sort its ids.\n  return level.sort((a, b) => a - b);\n}\n",
                    ts: "function nodesAtDistance(n: number, edges: number[][], start: number, k: number): number[] {\n  // Store both directions of each undirected edge.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Mark on discovery so later levels cannot revisit earlier nodes.\n  const seen = new Array(n).fill(false);\n  seen[start] = true;\n  // This frontier begins with every node at distance zero.\n  let level: number[] = [start];\n  for (let step = 0; step < k; step++) {\n    const next: number[] = [];\n    for (const cur of level) {\n      for (const nb of adj[cur]) {\n        if (!seen[nb]) {\n          seen[nb] = true;\n          next.push(nb);\n        }\n      }\n    }\n    // One frontier expansion advances the distance by one edge.\n    level = next;\n  }\n  // The remaining frontier is exactly distance k; sort its ids.\n  return level.sort((a, b) => a - b);\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            }
        ]
    },
    {
        id: "gt-is-tree",
        slug: "graph-is-tree",
        title: "Is It a Tree?",
        difficulty: "medium",
        patternIds: P,
        statement: `Return \`true\` if the graph is a valid tree — every node connected, with no cycles.\n\n${GRAPH_NOTE}`,
        examples: [
            {
                input: "5, [[0,1],[0,2],[0,3],[1,4]]",
                output: "true"
            },
            {
                input: "5, [[0,1],[1,2],[2,3],[1,3],[1,4]]",
                output: "false"
            },
            {
                input: "1, []",
                output: "true"
            }
        ],
        constraints: [
            "1 <= n <= 10000"
        ],
        functionName: "isTree",
        starter: {
            js: "function isTree(n, edges) {\n  // True if the graph is connected and acyclic.\n}\n",
            ts: "function isTree(n: number, edges: number[][]): boolean {\n  // True if the graph is connected and acyclic.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            0,
                            2
                        ],
                        [
                            0,
                            3
                        ],
                        [
                            1,
                            4
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            1,
                            3
                        ],
                        [
                            1,
                            4
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    1,
                    []
                ],
                expected: true
            }
        ],
        hidden: [
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    2,
                    []
                ],
                expected: false
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            0
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1
                        ]
                    ]
                ],
                expected: false
            }
        ],
        hints: [
            "A tree on n nodes always has exactly n-1 edges — check that first.",
            "With n-1 edges, 'connected' and 'acyclic' become the same condition.",
            "So: edges.length === n - 1 AND every node reachable from node 0."
        ],
        solutions: [
            {
                label: "Edge count plus connectivity",
                approach: "n-1 edges and a single connected component means a tree.",
                js: "function isTree(n, edges) {\n  if (edges.length !== n - 1) return false;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[0] = true;\n  const stack = [0];\n  let count = 1;\n  while (stack.length) {\n    const cur = stack.pop();\n    for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; count++; stack.push(nb); }\n  }\n  return count === n;\n}\n",
                ts: "function isTree(n: number, edges: number[][]): boolean {\n  if (edges.length !== n - 1) return false;\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[0] = true;\n  const stack: number[] = [0];\n  let count = 1;\n  while (stack.length) {\n    const cur = stack.pop() as number;\n    for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; count++; stack.push(nb); }\n  }\n  return count === n;\n}\n",
                commentedCode: {
                    js: "function isTree(n, edges) {\n  // Every n-node tree has exactly n - 1 edges.\n  if (edges.length !== n - 1) return false;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Traverse the component containing node zero.\n  const seen = new Array(n).fill(false);\n  seen[0] = true;\n  const stack = [0];\n  let count = 1;\n  while (stack.length) {\n    const cur = stack.pop();\n    for (const nb of adj[cur]) {\n      if (!seen[nb]) {\n        seen[nb] = true;\n        count++;\n        stack.push(nb);\n      }\n    }\n  }\n  // With n - 1 edges, full connectivity guarantees no cycle.\n  return count === n;\n}\n",
                    ts: "function isTree(n: number, edges: number[][]): boolean {\n  // Every n-node tree has exactly n - 1 edges.\n  if (edges.length !== n - 1) return false;\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  // Traverse the component containing node zero.\n  const seen = new Array(n).fill(false);\n  seen[0] = true;\n  const stack: number[] = [0];\n  let count = 1;\n  while (stack.length) {\n    const cur = stack.pop() as number;\n    for (const nb of adj[cur]) {\n      if (!seen[nb]) {\n        seen[nb] = true;\n        count++;\n        stack.push(nb);\n      }\n    }\n  }\n  // With n - 1 edges, full connectivity guarantees no cycle.\n  return count === n;\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            },
            {
                label: "Union-Find",
                approach: "Reject an edge joining two already-connected nodes, then check one component.",
                js: "function isTree(n, edges) {\n  if (edges.length !== n - 1) return false;\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let components = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) return false;\n    parent[ru] = rv;\n    components--;\n  }\n  return components === 1;\n}\n",
                ts: "function isTree(n: number, edges: number[][]): boolean {\n  if (edges.length !== n - 1) return false;\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let components = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) return false;\n    parent[ru] = rv;\n    components--;\n  }\n  return components === 1;\n}\n",
                commentedCode: {
                    js: "function isTree(n, edges) {\n  // Reject immediately unless the necessary tree edge count holds.\n  if (edges.length !== n - 1) return false;\n  // Initially every node is the root of its own component.\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => {\n    while (parent[x] !== x) {\n      // Path halving shortens future walks to the root.\n      parent[x] = parent[parent[x]];\n      x = parent[x];\n    }\n    return x;\n  };\n  let components = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    // Joining nodes already connected would close a cycle.\n    if (ru === rv) return false;\n    // Merge their components and update the component count.\n    parent[ru] = rv;\n    components--;\n  }\n  return components === 1;\n}\n",
                    ts: "function isTree(n: number, edges: number[][]): boolean {\n  // Reject immediately unless the necessary tree edge count holds.\n  if (edges.length !== n - 1) return false;\n  // Initially every node is the root of its own component.\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => {\n    while (parent[x] !== x) {\n      // Path halving shortens future walks to the root.\n      parent[x] = parent[parent[x]];\n      x = parent[x];\n    }\n    return x;\n  };\n  let components = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    // Joining nodes already connected would close a cycle.\n    if (ru === rv) return false;\n    // Merge their components and update the component count.\n    parent[ru] = rv;\n    components--;\n  }\n  return components === 1;\n}\n"
                },
                time: "O((V + E) α)",
                space: "O(V)"
            }
        ]
    }
];
const graphTraversalProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const graphTraversalMcqs = [
    {
        id: "s5-gt-time",
        kind: "mcq",
        prompt: "A BFS or DFS over a graph with V nodes and E edges runs in:",
        options: [
            "O(V)",
            "O(V + E)",
            "O(V · E)",
            "O(V²)"
        ],
        answerIndex: 1,
        explanation: "Each node is visited once and each edge examined a constant number of times."
    },
    {
        id: "s5-gt-shortest",
        kind: "mcq",
        prompt: "In an *unweighted* graph, which traversal finds shortest paths from a source?",
        options: [
            "DFS",
            "BFS",
            "either one works",
            "neither"
        ],
        answerIndex: 1,
        explanation: "BFS expands by distance, so the first time it reaches a node is via a shortest path."
    }
];
const graphTraversalModule = {
    id: "m-pat-graph-traversal",
    stageId: S,
    title: "Graph DFS & BFS",
    kind: "patternModule",
    summary: "Explore nodes and grids — connectivity, islands, colouring, and shortest hops in O(V+E).",
    lessonSections: [
        {
            heading: "Two ways to explore",
            body: `Both traversals visit every reachable node once, in **O(V+E)** — they differ only in the order.

- **DFS** (stack or recursion) plunges as deep as it can before backtracking. Natural for connectivity, components, cycles, and flood fill.
- **BFS** (queue) fans out level by level. It is the one that finds **shortest paths in an unweighted graph**.

The essential guard is a **visited** marker; without it, any cycle loops forever.

\`\`\`js
function bfs(n, edges, start) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }
  const seen = new Array(n).fill(false);
  seen[start] = true;
  const queue = [start], order = [];
  while (queue.length) {
    const cur = queue.shift();
    order.push(cur);
    for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; queue.push(nb); }
  }
  return order;
}
console.log(bfs(4, [[0,1],[1,2],[0,3]], 0)); // [0, 1, 3, 2]
\`\`\``
        },
        {
            heading: "Grids are graphs too",
            body: `A matrix is just a graph where each cell connects to its four neighbours. That single idea powers **islands**, **flood fill**, **perimeter**, and **rotting oranges** — the only change is how you enumerate neighbours.

When *many* sources spread at once (every rotten orange, every gate), seed the queue with **all** of them and BFS outward: a **multi-source BFS** gives every cell its distance to the nearest source in one pass.

**Recognition cues:** connected components / islands, reachability, shortest hops, 2-colouring or "can this be split in two", cycle detection, or spreading/infection over a grid.`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Grid flood fill
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
function fill(r: number, c: number) {
  if (r < 0 || c < 0 || r >= rows || c >= cols) return;
  if (grid[r][c] !== target) return;   // also the visited guard
  grid[r][c] = replacement;
  for (const [dr, dc] of dirs) fill(r + dr, c + dc);
}

// Multi-source BFS: push every source before the loop starts
let level = allSources, minutes = 0;
while (level.length) { /* expand one ring, then minutes++ */ }
\`\`\`

**Pitfalls:** forgetting the visited check (infinite loops on cycles); marking a node visited when you *dequeue* rather than when you *enqueue*, which lets duplicates pile up; restarting the traversal for **every** component when the graph may be disconnected; in flood fill, repainting with the colour that's already there — guard it or you'll recurse forever. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "gt-reachable-count",
    drillProblemIds: [
        "gt-reachable-count",
        "gt-reachable-list",
        "gt-num-islands",
        "gt-max-island-area",
        "gt-bipartite",
        "gt-rotting-oranges"
    ],
    testPoolProblemIds: [
        "gt-island-perimeter",
        "gt-flood-fill",
        "gt-nodes-at-distance",
        "gt-is-tree"
    ],
    complexityQuestionIds: [
        "s5-gt-time",
        "s5-gt-shortest"
    ],
    badgeId: "badge-pat-graph-traversal",
    prerequisiteModuleIds: [
        "m-pat-tree-bfs"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage5/greedy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "greedyMcqs",
    ()=>greedyMcqs,
    "greedyModule",
    ()=>greedyModule,
    "greedyProblems",
    ()=>greedyProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s5";
const P = [
    "greedy"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "gr-max-coins",
        slug: "max-coins-value",
        title: "Fewest Coins Given",
        difficulty: "easy",
        patternIds: P,
        statement: "Using unlimited coins of value 1, 5, 10, and 25, return the fewest coins that sum to `amount`.",
        examples: [
            {
                input: "30",
                output: "2"
            },
            {
                input: "0",
                output: "0"
            },
            {
                input: "6",
                output: "2"
            }
        ],
        constraints: [
            "0 <= amount <= 1000000"
        ],
        functionName: "fewestCoins",
        starter: {
            js: "function fewestCoins(amount) {\n  // Fewest 1/5/10/25 coins summing to amount.\n}\n",
            ts: "function fewestCoins(amount: number): number {\n  // Fewest 1/5/10/25 coins summing to amount.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    30
                ],
                expected: 2
            },
            {
                args: [
                    0
                ],
                expected: 0
            },
            {
                args: [
                    6
                ],
                expected: 2
            }
        ],
        hidden: [
            {
                args: [
                    25
                ],
                expected: 1
            },
            {
                args: [
                    11
                ],
                expected: 2
            },
            {
                args: [
                    99
                ],
                expected: 9
            },
            {
                args: [
                    40
                ],
                expected: 3
            },
            {
                args: [
                    1
                ],
                expected: 1
            },
            {
                args: [
                    63
                ],
                expected: 6
            }
        ],
        hints: [
            "Because these denominations are 'canonical', taking the biggest coin that fits is always optimal.",
            "Use as many 25s as possible, then 10s, then 5s, then 1s.",
            "Add up how many of each you used."
        ],
        solutions: [
            {
                label: "Take the largest coin first",
                approach: "Greedily spend the biggest denomination that still fits.",
                js: "function fewestCoins(amount) {\n  let count = 0;\n  for (const coin of [25, 10, 5, 1]) {\n    count += Math.floor(amount / coin);\n    amount %= coin;\n  }\n  return count;\n}\n",
                ts: "function fewestCoins(amount: number): number {\n  let count = 0;\n  for (const coin of [25, 10, 5, 1]) {\n    count += Math.floor(amount / coin);\n    amount %= coin;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function fewestCoins(amount) {\n  // Accumulate the number of coins selected across all denominations.\n  let count = 0;\n  // Try canonical US coins from largest to smallest so every choice is locally optimal.\n  for (const coin of [25, 10, 5, 1]) {\n    // Take every whole coin of this denomination that fits in the remaining amount.\n    count += Math.floor(amount / coin);\n    // Carry only the unpaid remainder to the next, smaller denomination.\n    amount %= coin;\n  }\n  // The denomination 1 guarantees that the full amount was represented.\n  return count;\n}\n",
                    ts: "function fewestCoins(amount: number): number {\n  // Accumulate the number of coins selected across all denominations.\n  let count = 0;\n  // Try canonical US coins from largest to smallest so every choice is locally optimal.\n  for (const coin of [25, 10, 5, 1]) {\n    // Take every whole coin of this denomination that fits in the remaining amount.\n    count += Math.floor(amount / coin);\n    // Carry only the unpaid remainder to the next, smaller denomination.\n    amount %= coin;\n  }\n  // The denomination 1 guarantees that the full amount was represented.\n  return count;\n}\n"
                },
                time: "O(1)",
                space: "O(1)"
            },
            {
                label: "Dynamic programming (general)",
                approach: "Build the fewest-coins table bottom-up — works for any denominations.",
                js: "function fewestCoins(amount) {\n  const coins = [1, 5, 10, 25];\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  return dp[amount];\n}\n",
                ts: "function fewestCoins(amount: number): number {\n  const coins = [1, 5, 10, 25];\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  return dp[amount];\n}\n",
                commentedCode: {
                    js: "function fewestCoins(amount) {\n  // These denominations can be changed; the dynamic program remains correct.\n  const coins = [1, 5, 10, 25];\n  // dp[a] stores the fewest coins known for forming amount a.\n  const dp = new Array(amount + 1).fill(Infinity);\n  // Forming zero requires no coins and anchors all later transitions.\n  dp[0] = 0;\n  // Solve every smaller amount before the larger amounts that depend on it.\n  for (let a = 1; a <= amount; a++) {\n    // Append each coin that fits, keeping the best predecessor plus that coin.\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  // The final table entry is the optimum for the requested amount.\n  return dp[amount];\n}\n",
                    ts: "function fewestCoins(amount: number): number {\n  // These denominations can be changed; the dynamic program remains correct.\n  const coins = [1, 5, 10, 25];\n  // dp[a] stores the fewest coins known for forming amount a.\n  const dp = new Array(amount + 1).fill(Infinity);\n  // Forming zero requires no coins and anchors all later transitions.\n  dp[0] = 0;\n  // Solve every smaller amount before the larger amounts that depend on it.\n  for (let a = 1; a <= amount; a++) {\n    // Append each coin that fits, keeping the best predecessor plus that coin.\n    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n  }\n  // The final table entry is the optimum for the requested amount.\n  return dp[amount];\n}\n"
                },
                time: "O(amount)",
                space: "O(amount)"
            }
        ]
    },
    {
        id: "gr-max-units",
        slug: "max-units-truck",
        title: "Maximum Units on a Truck",
        difficulty: "easy",
        patternIds: P,
        statement: "Each box is `[count, unitsPerBox]`. A truck holds at most `capacity` boxes. Return the most units you can load by choosing boxes freely.",
        examples: [
            {
                input: "[[1,3],[2,2],[3,1]], 4",
                output: "8"
            },
            {
                input: "[[5,10]], 2",
                output: "20"
            },
            {
                input: "[], 5",
                output: "0"
            }
        ],
        constraints: [
            "0 <= capacity",
            "counts and units are non-negative"
        ],
        functionName: "maxUnits",
        starter: {
            js: "function maxUnits(boxes, capacity) {\n  // Most units within the box capacity.\n}\n",
            ts: "function maxUnits(boxes: number[][], capacity: number): number {\n  // Most units within the box capacity.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            2
                        ],
                        [
                            3,
                            1
                        ]
                    ],
                    4
                ],
                expected: 8
            },
            {
                args: [
                    [
                        [
                            5,
                            10
                        ]
                    ],
                    2
                ],
                expected: 20
            },
            {
                args: [
                    [],
                    5
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            2
                        ],
                        [
                            3,
                            1
                        ]
                    ],
                    0
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            2,
                            5
                        ],
                        [
                            3,
                            8
                        ],
                        [
                            1,
                            4
                        ]
                    ],
                    4
                ],
                expected: 29
            },
            {
                args: [
                    [
                        [
                            1,
                            1
                        ]
                    ],
                    10
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            4,
                            2
                        ],
                        [
                            4,
                            3
                        ]
                    ],
                    5
                ],
                expected: 14
            },
            {
                args: [
                    [
                        [
                            10,
                            1
                        ]
                    ],
                    3
                ],
                expected: 3
            },
            {
                args: [
                    [
                        [
                            2,
                            2
                        ],
                        [
                            2,
                            2
                        ]
                    ],
                    3
                ],
                expected: 6
            }
        ],
        hints: [
            "Load the boxes with the most units per box first.",
            "Sort boxes by units descending, then take from each until the truck is full.",
            "Only part of a box type may fit at the end."
        ],
        solutions: [
            {
                label: "Sort by units, take greedily",
                approach: "Fill with the richest boxes first until capacity runs out.",
                js: "function maxUnits(boxes, capacity) {\n  const sorted = [...boxes].sort((a, b) => b[1] - a[1]);\n  let units = 0, room = capacity;\n  for (const [count, per] of sorted) {\n    if (room <= 0) break;\n    const take = Math.min(count, room);\n    units += take * per;\n    room -= take;\n  }\n  return units;\n}\n",
                ts: "function maxUnits(boxes: number[][], capacity: number): number {\n  const sorted = [...boxes].sort((a, b) => b[1] - a[1]);\n  let units = 0, room = capacity;\n  for (const [count, per] of sorted) {\n    if (room <= 0) break;\n    const take = Math.min(count, room);\n    units += take * per;\n    room -= take;\n  }\n  return units;\n}\n",
                commentedCode: {
                    js: "function maxUnits(boxes, capacity) {\n  // Work on a copy ordered by value per box, richest type first.\n  const sorted = [...boxes].sort((a, b) => b[1] - a[1]);\n  // Track both the collected units and the truck's unfilled box slots.\n  let units = 0, room = capacity;\n  for (const [count, per] of sorted) {\n    // No later box type can be loaded once every slot is occupied.\n    if (room <= 0) break;\n    // Load this type up to its supply or the remaining capacity.\n    const take = Math.min(count, room);\n    // Each selected box contributes its units-per-box value.\n    units += take * per;\n    // Remove the selected boxes from the truck's available slots.\n    room -= take;\n  }\n  return units;\n}\n",
                    ts: "function maxUnits(boxes: number[][], capacity: number): number {\n  // Work on a copy ordered by value per box, richest type first.\n  const sorted = [...boxes].sort((a, b) => b[1] - a[1]);\n  // Track both the collected units and the truck's unfilled box slots.\n  let units = 0, room = capacity;\n  for (const [count, per] of sorted) {\n    // No later box type can be loaded once every slot is occupied.\n    if (room <= 0) break;\n    // Load this type up to its supply or the remaining capacity.\n    const take = Math.min(count, room);\n    // Each selected box contributes its units-per-box value.\n    units += take * per;\n    // Remove the selected boxes from the truck's available slots.\n    room -= take;\n  }\n  return units;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Expand then take the top",
                approach: "List each box's unit value, sort descending, and sum the first `capacity`.",
                js: "function maxUnits(boxes, capacity) {\n  const all = [];\n  for (const [count, per] of boxes) for (let i = 0; i < count; i++) all.push(per);\n  all.sort((a, b) => b - a);\n  let units = 0;\n  for (let i = 0; i < capacity && i < all.length; i++) units += all[i];\n  return units;\n}\n",
                ts: "function maxUnits(boxes: number[][], capacity: number): number {\n  const all: number[] = [];\n  for (const [count, per] of boxes) for (let i = 0; i < count; i++) all.push(per);\n  all.sort((a, b) => b - a);\n  let units = 0;\n  for (let i = 0; i < capacity && i < all.length; i++) units += all[i];\n  return units;\n}\n",
                commentedCode: {
                    js: "function maxUnits(boxes, capacity) {\n  // Expand each box type into the unit value of every individual box.\n  const all = [];\n  for (const [count, per] of boxes) for (let i = 0; i < count; i++) all.push(per);\n  // Put the most valuable individual boxes at the front.\n  all.sort((a, b) => b - a);\n  let units = 0;\n  // Sum as many top values as the truck can hold and the supply provides.\n  for (let i = 0; i < capacity && i < all.length; i++) units += all[i];\n  return units;\n}\n",
                    ts: "function maxUnits(boxes: number[][], capacity: number): number {\n  // Expand each box type into the unit value of every individual box.\n  const all: number[] = [];\n  for (const [count, per] of boxes) for (let i = 0; i < count; i++) all.push(per);\n  // Put the most valuable individual boxes at the front.\n  all.sort((a, b) => b - a);\n  let units = 0;\n  // Sum as many top values as the truck can hold and the supply provides.\n  for (let i = 0; i < capacity && i < all.length; i++) units += all[i];\n  return units;\n}\n"
                },
                time: "O(m log m)",
                space: "O(m)"
            }
        ]
    },
    {
        id: "gr-jump-game",
        slug: "jump-game-reachable",
        title: "Jump Game",
        difficulty: "medium",
        patternIds: P,
        statement: "Each value is the maximum jump length from that position. Starting at index 0, return `true` if you can reach the last index.",
        examples: [
            {
                input: "[2,3,1,1,4]",
                output: "true"
            },
            {
                input: "[3,2,1,0,4]",
                output: "false"
            },
            {
                input: "[0]",
                output: "true"
            }
        ],
        constraints: [
            "1 <= nums.length <= 10000",
            "values are non-negative"
        ],
        functionName: "canJump",
        starter: {
            js: "function canJump(nums) {\n  // True if the last index is reachable.\n}\n",
            ts: "function canJump(nums: number[]): boolean {\n  // True if the last index is reachable.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        3,
                        1,
                        1,
                        4
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        3,
                        2,
                        1,
                        0,
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
        hidden: [
            {
                args: [
                    [
                        1,
                        0
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        0,
                        1
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        2,
                        0,
                        0
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        1,
                        1,
                        0
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        5,
                        0,
                        0,
                        0,
                        0
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2,
                        0,
                        0,
                        4
                    ]
                ],
                expected: false
            }
        ],
        hints: [
            "Track the furthest index you can currently reach.",
            "If you ever stand beyond that reach, you're stuck.",
            "Otherwise extend the reach by i + nums[i] as you scan."
        ],
        solutions: [
            {
                label: "Track the furthest reach",
                approach: "Sweep left to right, extending the maximum reachable index.",
                js: "function canJump(nums) {\n  let reach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > reach) return false;\n    reach = Math.max(reach, i + nums[i]);\n  }\n  return true;\n}\n",
                ts: "function canJump(nums: number[]): boolean {\n  let reach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > reach) return false;\n    reach = Math.max(reach, i + nums[i]);\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function canJump(nums) {\n  // reach is the furthest index attainable from every position scanned so far.\n  let reach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // If this index lies past reach, no earlier jump can get us here.\n    if (i > reach) return false;\n    // From a reachable index, extend the frontier with its longest jump.\n    reach = Math.max(reach, i + nums[i]);\n  }\n  // Every scanned index was reachable, including the final one.\n  return true;\n}\n",
                    ts: "function canJump(nums: number[]): boolean {\n  // reach is the furthest index attainable from every position scanned so far.\n  let reach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    // If this index lies past reach, no earlier jump can get us here.\n    if (i > reach) return false;\n    // From a reachable index, extend the frontier with its longest jump.\n    reach = Math.max(reach, i + nums[i]);\n  }\n  // Every scanned index was reachable, including the final one.\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Work backwards to a goal",
                approach: "Move the goal left whenever a position can reach it.",
                js: "function canJump(nums) {\n  let goal = nums.length - 1;\n  for (let i = nums.length - 2; i >= 0; i--) {\n    if (i + nums[i] >= goal) goal = i;\n  }\n  return goal === 0;\n}\n",
                ts: "function canJump(nums: number[]): boolean {\n  let goal = nums.length - 1;\n  for (let i = nums.length - 2; i >= 0; i--) {\n    if (i + nums[i] >= goal) goal = i;\n  }\n  return goal === 0;\n}\n",
                commentedCode: {
                    js: "function canJump(nums) {\n  // The last index is the first position that must be reachable.\n  let goal = nums.length - 1;\n  // Search backward for progressively earlier positions that can reach the goal.\n  for (let i = nums.length - 2; i >= 0; i--) {\n    // This position becomes the new goal when one jump reaches the old goal.\n    if (i + nums[i] >= goal) goal = i;\n  }\n  // Index zero can reach the end exactly when the goal moved all the way back.\n  return goal === 0;\n}\n",
                    ts: "function canJump(nums: number[]): boolean {\n  // The last index is the first position that must be reachable.\n  let goal = nums.length - 1;\n  // Search backward for progressively earlier positions that can reach the goal.\n  for (let i = nums.length - 2; i >= 0; i--) {\n    // This position becomes the new goal when one jump reaches the old goal.\n    if (i + nums[i] >= goal) goal = i;\n  }\n  // Index zero can reach the end exactly when the goal moved all the way back.\n  return goal === 0;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "gr-min-jumps",
        slug: "min-jumps",
        title: "Minimum Jumps",
        difficulty: "medium",
        patternIds: P,
        statement: "Each value is the maximum jump length from that position. Return the fewest jumps needed to reach the last index (assume it is always reachable). A single-element list needs 0 jumps.",
        examples: [
            {
                input: "[2,3,1,1,4]",
                output: "2"
            },
            {
                input: "[1,1,1,1]",
                output: "3"
            },
            {
                input: "[0]",
                output: "0"
            }
        ],
        constraints: [
            "1 <= nums.length <= 10000",
            "the end is always reachable"
        ],
        functionName: "minJumps",
        starter: {
            js: "function minJumps(nums) {\n  // Fewest jumps to the last index.\n}\n",
            ts: "function minJumps(nums: number[]): number {\n  // Fewest jumps to the last index.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        3,
                        1,
                        1,
                        4
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        1,
                        1,
                        1
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        0
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
                expected: 1
            },
            {
                args: [
                    [
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
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        5,
                        1,
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
                        2,
                        3,
                        0,
                        1,
                        4
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "Think in 'levels': the set of indices reachable with exactly j jumps.",
            "Extend the current level's boundary to the furthest index it can reach.",
            "When you pass the current boundary, you've spent one more jump."
        ],
        solutions: [
            {
                label: "Greedy level expansion",
                approach: "Count a jump each time you exhaust the current reachable window.",
                js: "function minJumps(nums) {\n  let jumps = 0, curEnd = 0, farthest = 0;\n  for (let i = 0; i < nums.length - 1; i++) {\n    farthest = Math.max(farthest, i + nums[i]);\n    if (i === curEnd) { jumps++; curEnd = farthest; }\n  }\n  return jumps;\n}\n",
                ts: "function minJumps(nums: number[]): number {\n  let jumps = 0, curEnd = 0, farthest = 0;\n  for (let i = 0; i < nums.length - 1; i++) {\n    farthest = Math.max(farthest, i + nums[i]);\n    if (i === curEnd) { jumps++; curEnd = farthest; }\n  }\n  return jumps;\n}\n",
                commentedCode: {
                    js: "function minJumps(nums) {\n  // curEnd bounds the current jump layer; farthest builds the next layer.\n  let jumps = 0, curEnd = 0, farthest = 0;\n  // The last index never needs to launch another jump.\n  for (let i = 0; i < nums.length - 1; i++) {\n    // Include every destination reachable from this position in the next layer.\n    farthest = Math.max(farthest, i + nums[i]);\n    // Finishing the current layer commits one jump and opens the next layer.\n    if (i === curEnd) { jumps++; curEnd = farthest; }\n  }\n  return jumps;\n}\n",
                    ts: "function minJumps(nums: number[]): number {\n  // curEnd bounds the current jump layer; farthest builds the next layer.\n  let jumps = 0, curEnd = 0, farthest = 0;\n  // The last index never needs to launch another jump.\n  for (let i = 0; i < nums.length - 1; i++) {\n    // Include every destination reachable from this position in the next layer.\n    farthest = Math.max(farthest, i + nums[i]);\n    // Finishing the current layer commits one jump and opens the next layer.\n    if (i === curEnd) { jumps++; curEnd = farthest; }\n  }\n  return jumps;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Shortest-path table",
                approach: "Relax reachable positions left to right, keeping the fewest jumps to each.",
                js: "function minJumps(nums) {\n  const n = nums.length;\n  const dp = new Array(n).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 1; j <= nums[i] && i + j < n; j++) {\n      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);\n    }\n  }\n  return dp[n - 1];\n}\n",
                ts: "function minJumps(nums: number[]): number {\n  const n = nums.length;\n  const dp = new Array(n).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 1; j <= nums[i] && i + j < n; j++) {\n      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);\n    }\n  }\n  return dp[n - 1];\n}\n",
                commentedCode: {
                    js: "function minJumps(nums) {\n  const n = nums.length;\n  // dp[i] is the fewest jumps needed to land on index i.\n  const dp = new Array(n).fill(Infinity);\n  // We begin on index zero without spending a jump.\n  dp[0] = 0;\n  // Relax every forward landing reachable from each source index.\n  for (let i = 0; i < n; i++) {\n    for (let j = 1; j <= nums[i] && i + j < n; j++) {\n      // Reaching i + j from i costs exactly one additional jump.\n      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);\n    }\n  }\n  return dp[n - 1];\n}\n",
                    ts: "function minJumps(nums: number[]): number {\n  const n = nums.length;\n  // dp[i] is the fewest jumps needed to land on index i.\n  const dp = new Array(n).fill(Infinity);\n  // We begin on index zero without spending a jump.\n  dp[0] = 0;\n  // Relax every forward landing reachable from each source index.\n  for (let i = 0; i < n; i++) {\n    for (let j = 1; j <= nums[i] && i + j < n; j++) {\n      // Reaching i + j from i costs exactly one additional jump.\n      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);\n    }\n  }\n  return dp[n - 1];\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "gr-non-overlapping",
        slug: "non-overlapping-intervals",
        title: "Remove to Make Non-Overlapping",
        difficulty: "medium",
        patternIds: P,
        statement: "Each interval is `[start, end]`. Return the fewest intervals you must remove so that none of the remaining ones overlap. Intervals that only touch at an endpoint do not overlap.",
        examples: [
            {
                input: "[[1,2],[2,3],[3,4],[1,3]]",
                output: "1"
            },
            {
                input: "[[1,2],[1,2],[1,2]]",
                output: "2"
            },
            {
                input: "[[1,2],[2,3]]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= intervals.length <= 10000"
        ],
        functionName: "eraseOverlapCount",
        starter: {
            js: "function eraseOverlapCount(intervals) {\n  // Fewest removals to leave no overlaps.\n}\n",
            ts: "function eraseOverlapCount(intervals: number[][]): number {\n  // Fewest removals to leave no overlaps.\n  return 0;\n}\n"
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
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ],
                        [
                            1,
                            3
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ]
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
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            1,
                            10
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            100
                        ],
                        [
                            11,
                            22
                        ],
                        [
                            1,
                            11
                        ],
                        [
                            2,
                            12
                        ]
                    ]
                ],
                expected: 2
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
                        ],
                        [
                            5,
                            6
                        ]
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            0,
                            2
                        ],
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            4
                        ],
                        [
                            3,
                            5
                        ]
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "Keep as many intervals as possible — then removals are the rest.",
            "Sort by end time and always keep the interval that finishes earliest.",
            "Discard any interval that starts before the last kept one ends."
        ],
        solutions: [
            {
                label: "Sort by end, keep earliest finishers",
                approach: "Greedily retain non-overlapping intervals; removals are what's left.",
                js: "function eraseOverlapCount(intervals) {\n  if (intervals.length === 0) return 0;\n  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);\n  let kept = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] >= end) { kept++; end = sorted[i][1]; }\n  }\n  return intervals.length - kept;\n}\n",
                ts: "function eraseOverlapCount(intervals: number[][]): number {\n  if (intervals.length === 0) return 0;\n  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);\n  let kept = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] >= end) { kept++; end = sorted[i][1]; }\n  }\n  return intervals.length - kept;\n}\n",
                commentedCode: {
                    js: "function eraseOverlapCount(intervals) {\n  // An empty schedule already has no conflicts.\n  if (intervals.length === 0) return 0;\n  // Finishing earliest leaves the most room for every later interval.\n  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);\n  // Keep the first interval and remember when the accepted schedule ends.\n  let kept = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // A touching or later start is compatible, so accept it and advance the end.\n    if (sorted[i][0] >= end) { kept++; end = sorted[i][1]; }\n  }\n  // Every interval not accepted by the maximum-size schedule must be removed.\n  return intervals.length - kept;\n}\n",
                    ts: "function eraseOverlapCount(intervals: number[][]): number {\n  // An empty schedule already has no conflicts.\n  if (intervals.length === 0) return 0;\n  // Finishing earliest leaves the most room for every later interval.\n  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);\n  // Keep the first interval and remember when the accepted schedule ends.\n  let kept = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // A touching or later start is compatible, so accept it and advance the end.\n    if (sorted[i][0] >= end) { kept++; end = sorted[i][1]; }\n  }\n  // Every interval not accepted by the maximum-size schedule must be removed.\n  return intervals.length - kept;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Sort by start, drop the longer conflict",
                approach: "On overlap, remove the interval that ends later.",
                js: "function eraseOverlapCount(intervals) {\n  if (intervals.length === 0) return 0;\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  let removed = 0, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] < end) { removed++; end = Math.min(end, sorted[i][1]); }\n    else end = sorted[i][1];\n  }\n  return removed;\n}\n",
                ts: "function eraseOverlapCount(intervals: number[][]): number {\n  if (intervals.length === 0) return 0;\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  let removed = 0, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] < end) { removed++; end = Math.min(end, sorted[i][1]); }\n    else end = sorted[i][1];\n  }\n  return removed;\n}\n",
                commentedCode: {
                    js: "function eraseOverlapCount(intervals) {\n  // No interval means there is nothing to remove.\n  if (intervals.length === 0) return 0;\n  // Start order lets each interval be compared with the surviving prior end.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Treat the first interval as the current survivor.\n  let removed = 0, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // On conflict, remove one and retain the earlier end for maximum future room.\n    if (sorted[i][0] < end) { removed++; end = Math.min(end, sorted[i][1]); }\n    // Without a conflict, the current interval becomes the new survivor.\n    else end = sorted[i][1];\n  }\n  return removed;\n}\n",
                    ts: "function eraseOverlapCount(intervals: number[][]): number {\n  // No interval means there is nothing to remove.\n  if (intervals.length === 0) return 0;\n  // Start order lets each interval be compared with the surviving prior end.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Treat the first interval as the current survivor.\n  let removed = 0, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // On conflict, remove one and retain the earlier end for maximum future room.\n    if (sorted[i][0] < end) { removed++; end = Math.min(end, sorted[i][1]); }\n    // Without a conflict, the current interval becomes the new survivor.\n    else end = sorted[i][1];\n  }\n  return removed;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "gr-gas-station",
        slug: "gas-station",
        title: "Gas Station",
        difficulty: "hard",
        patternIds: P,
        statement: "Around a circular route, `gas[i]` is the fuel at station `i` and `cost[i]` is the fuel needed to reach the next station. Starting empty, return the index to begin from to complete the loop, or -1 if impossible. If several starts work, return the smallest index.",
        examples: [
            {
                input: "[1,2,3,4,5], [3,4,5,1,2]",
                output: "3"
            },
            {
                input: "[2,3,4], [3,4,3]",
                output: "-1"
            },
            {
                input: "[5], [4]",
                output: "0"
            }
        ],
        constraints: [
            "gas and cost have the same length",
            "1 <= length <= 10000"
        ],
        functionName: "gasStation",
        starter: {
            js: "function gasStation(gas, cost) {\n  // Starting index to complete the loop, or -1.\n}\n",
            ts: "function gasStation(gas: number[], cost: number[]): number {\n  // Starting index to complete the loop, or -1.\n  return -1;\n}\n"
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
                    [
                        3,
                        4,
                        5,
                        1,
                        2
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        2,
                        3,
                        4
                    ],
                    [
                        3,
                        4,
                        3
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        5
                    ],
                    [
                        4
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
                    ],
                    [
                        2
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        2,
                        2
                    ],
                    [
                        1,
                        1
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        3,
                        1,
                        1
                    ],
                    [
                        1,
                        2,
                        2
                    ]
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
                    [
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
                        4,
                        5,
                        2,
                        6,
                        5,
                        3
                    ],
                    [
                        3,
                        2,
                        7,
                        3,
                        2,
                        9
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        5,
                        1,
                        2,
                        3,
                        4
                    ],
                    [
                        4,
                        4,
                        1,
                        5,
                        1
                    ]
                ],
                expected: 4
            }
        ],
        hints: [
            "If the total gas is less than the total cost, no start can work.",
            "Track the running tank from a candidate start; if it goes negative, that whole stretch fails.",
            "When the tank dips below zero, the next station becomes the new candidate start."
        ],
        solutions: [
            {
                label: "Single greedy pass",
                approach: "Reset the start whenever the running tank goes negative.",
                js: "function gasStation(gas, cost) {\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    const diff = gas[i] - cost[i];\n    total += diff;\n    tank += diff;\n    if (tank < 0) { start = i + 1; tank = 0; }\n  }\n  return total >= 0 ? start : -1;\n}\n",
                ts: "function gasStation(gas: number[], cost: number[]): number {\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    const diff = gas[i] - cost[i];\n    total += diff;\n    tank += diff;\n    if (tank < 0) { start = i + 1; tank = 0; }\n  }\n  return total >= 0 ? start : -1;\n}\n",
                commentedCode: {
                    js: "function gasStation(gas, cost) {\n  // total checks global feasibility; tank checks the current candidate start.\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    // This station's net fuel is what remains after driving to the next one.\n    const diff = gas[i] - cost[i];\n    // Accumulate the route-wide surplus or deficit.\n    total += diff;\n    // Also extend the fuel balance of the current candidate journey.\n    tank += diff;\n    // A negative tank proves this candidate and every intervening start fail here.\n    if (tank < 0) { start = i + 1; tank = 0; }\n  }\n  // A nonnegative total makes the final candidate viable; otherwise none exists.\n  return total >= 0 ? start : -1;\n}\n",
                    ts: "function gasStation(gas: number[], cost: number[]): number {\n  // total checks global feasibility; tank checks the current candidate start.\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    // This station's net fuel is what remains after driving to the next one.\n    const diff = gas[i] - cost[i];\n    // Accumulate the route-wide surplus or deficit.\n    total += diff;\n    // Also extend the fuel balance of the current candidate journey.\n    tank += diff;\n    // A negative tank proves this candidate and every intervening start fail here.\n    if (tank < 0) { start = i + 1; tank = 0; }\n  }\n  // A nonnegative total makes the final candidate viable; otherwise none exists.\n  return total >= 0 ? start : -1;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Try each start",
                approach: "Simulate the full loop from every station until one succeeds.",
                js: "function gasStation(gas, cost) {\n  const n = gas.length;\n  for (let start = 0; start < n; start++) {\n    let tank = 0, ok = true;\n    for (let step = 0; step < n; step++) {\n      const i = (start + step) % n;\n      tank += gas[i] - cost[i];\n      if (tank < 0) { ok = false; break; }\n    }\n    if (ok) return start;\n  }\n  return -1;\n}\n",
                ts: "function gasStation(gas: number[], cost: number[]): number {\n  const n = gas.length;\n  for (let start = 0; start < n; start++) {\n    let tank = 0, ok = true;\n    for (let step = 0; step < n; step++) {\n      const i = (start + step) % n;\n      tank += gas[i] - cost[i];\n      if (tank < 0) { ok = false; break; }\n    }\n    if (ok) return start;\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function gasStation(gas, cost) {\n  const n = gas.length;\n  // Test candidate starts in ascending order to return the smallest valid index.\n  for (let start = 0; start < n; start++) {\n    // Each simulation begins empty and remains viable until fuel goes negative.\n    let tank = 0, ok = true;\n    for (let step = 0; step < n; step++) {\n      // Wrap the linear offset around the circular route.\n      const i = (start + step) % n;\n      // Collect at this station, then pay the cost of reaching the next.\n      tank += gas[i] - cost[i];\n      // Running out of fuel invalidates this candidate immediately.\n      if (tank < 0) { ok = false; break; }\n    }\n    // Surviving all n legs completes the full loop.\n    if (ok) return start;\n  }\n  // Every possible starting station failed.\n  return -1;\n}\n",
                    ts: "function gasStation(gas: number[], cost: number[]): number {\n  const n = gas.length;\n  // Test candidate starts in ascending order to return the smallest valid index.\n  for (let start = 0; start < n; start++) {\n    // Each simulation begins empty and remains viable until fuel goes negative.\n    let tank = 0, ok = true;\n    for (let step = 0; step < n; step++) {\n      // Wrap the linear offset around the circular route.\n      const i = (start + step) % n;\n      // Collect at this station, then pay the cost of reaching the next.\n      tank += gas[i] - cost[i];\n      // Running out of fuel invalidates this candidate immediately.\n      if (tank < 0) { ok = false; break; }\n    }\n    // Surviving all n legs completes the full loop.\n    if (ok) return start;\n  }\n  // Every possible starting station failed.\n  return -1;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "gr-assign-cookies",
        slug: "assign-cookies",
        title: "Assign Cookies",
        difficulty: "easy",
        patternIds: P,
        statement: "Each child has a greed value in `greed`; each cookie has a size in `sizes`. A child is content with any cookie whose size is at least their greed, and each cookie serves one child. Return the greatest number of content children.",
        examples: [
            {
                input: "[1,2,3], [1,1]",
                output: "1"
            },
            {
                input: "[1,2], [1,2,3]",
                output: "2"
            },
            {
                input: "[], [1]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= lengths <= 10000"
        ],
        functionName: "assignCookies",
        starter: {
            js: "function assignCookies(greed, sizes) {\n  // Most children who can be satisfied.\n}\n",
            ts: "function assignCookies(greed: number[], sizes: number[]): number {\n  // Most children who can be satisfied.\n  return 0;\n}\n"
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
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
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
                    [],
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
                    [
                        1
                    ],
                    []
                ],
                expected: 0
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
                expected: 2
            },
            {
                args: [
                    [
                        2,
                        3
                    ],
                    [
                        1,
                        1
                    ]
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
                    [
                        3
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        5,
                        10,
                        25
                    ],
                    [
                        10,
                        5,
                        25,
                        5
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1
                    ],
                    [
                        2
                    ]
                ],
                expected: 1
            }
        ],
        hints: [
            "Sort both lists so you can match the least greedy child with the smallest cookie that fits.",
            "Walk two pointers: advance the cookie pointer always, the child pointer on a match.",
            "Skip cookies too small for the current child."
        ],
        solutions: [
            {
                label: "Sort and two pointers",
                approach: "Give each child the smallest sufficient cookie.",
                js: "function assignCookies(greed, sizes) {\n  const g = [...greed].sort((a, b) => a - b);\n  const s = [...sizes].sort((a, b) => a - b);\n  let child = 0, cookie = 0;\n  while (child < g.length && cookie < s.length) {\n    if (s[cookie] >= g[child]) child++;\n    cookie++;\n  }\n  return child;\n}\n",
                ts: "function assignCookies(greed: number[], sizes: number[]): number {\n  const g = [...greed].sort((a, b) => a - b);\n  const s = [...sizes].sort((a, b) => a - b);\n  let child = 0, cookie = 0;\n  while (child < g.length && cookie < s.length) {\n    if (s[cookie] >= g[child]) child++;\n    cookie++;\n  }\n  return child;\n}\n",
                commentedCode: {
                    js: "function assignCookies(greed, sizes) {\n  // Order children from least to most demanding without mutating the input.\n  const g = [...greed].sort((a, b) => a - b);\n  // Order cookies so each child can receive the smallest sufficient one.\n  const s = [...sizes].sort((a, b) => a - b);\n  // child also counts successful assignments; cookie scans every available size.\n  let child = 0, cookie = 0;\n  while (child < g.length && cookie < s.length) {\n    // A sufficient cookie satisfies this child, so move to the next child.\n    if (s[cookie] >= g[child]) child++;\n    // Whether used or too small, this cookie cannot help a later iteration.\n    cookie++;\n  }\n  return child;\n}\n",
                    ts: "function assignCookies(greed: number[], sizes: number[]): number {\n  // Order children from least to most demanding without mutating the input.\n  const g = [...greed].sort((a, b) => a - b);\n  // Order cookies so each child can receive the smallest sufficient one.\n  const s = [...sizes].sort((a, b) => a - b);\n  // child also counts successful assignments; cookie scans every available size.\n  let child = 0, cookie = 0;\n  while (child < g.length && cookie < s.length) {\n    // A sufficient cookie satisfies this child, so move to the next child.\n    if (s[cookie] >= g[child]) child++;\n    // Whether used or too small, this cookie cannot help a later iteration.\n    cookie++;\n  }\n  return child;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Largest cookie to greediest child",
                approach: "Match from the top: hand the biggest cookie to the greediest child it satisfies.",
                js: "function assignCookies(greed, sizes) {\n  const g = [...greed].sort((a, b) => b - a);\n  const s = [...sizes].sort((a, b) => b - a);\n  let count = 0, cookie = 0;\n  for (let child = 0; child < g.length; child++) {\n    if (cookie < s.length && s[cookie] >= g[child]) { count++; cookie++; }\n  }\n  return count;\n}\n",
                ts: "function assignCookies(greed: number[], sizes: number[]): number {\n  const g = [...greed].sort((a, b) => b - a);\n  const s = [...sizes].sort((a, b) => b - a);\n  let count = 0, cookie = 0;\n  for (let child = 0; child < g.length; child++) {\n    if (cookie < s.length && s[cookie] >= g[child]) { count++; cookie++; }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function assignCookies(greed, sizes) {\n  // Consider the greediest children first.\n  const g = [...greed].sort((a, b) => b - a);\n  // Keep the largest unused cookie at the current cookie index.\n  const s = [...sizes].sort((a, b) => b - a);\n  let count = 0, cookie = 0;\n  for (let child = 0; child < g.length; child++) {\n    // Use the largest remaining cookie only when it can satisfy this child.\n    if (cookie < s.length && s[cookie] >= g[child]) { count++; cookie++; }\n  }\n  // Children skipped by the loop could not use the current or any smaller cookie.\n  return count;\n}\n",
                    ts: "function assignCookies(greed: number[], sizes: number[]): number {\n  // Consider the greediest children first.\n  const g = [...greed].sort((a, b) => b - a);\n  // Keep the largest unused cookie at the current cookie index.\n  const s = [...sizes].sort((a, b) => b - a);\n  let count = 0, cookie = 0;\n  for (let child = 0; child < g.length; child++) {\n    // Use the largest remaining cookie only when it can satisfy this child.\n    if (cookie < s.length && s[cookie] >= g[child]) { count++; cookie++; }\n  }\n  // Children skipped by the loop could not use the current or any smaller cookie.\n  return count;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "gr-max-profit",
        slug: "max-profit-multi",
        title: "Best Time to Buy and Sell",
        difficulty: "medium",
        patternIds: P,
        statement: "`prices[i]` is a stock's price on day `i`. You may buy and sell any number of times (but hold at most one share at a time). Return the maximum total profit.",
        examples: [
            {
                input: "[7,1,5,3,6,4]",
                output: "7"
            },
            {
                input: "[1,2,3,4,5]",
                output: "4"
            },
            {
                input: "[7,6,4,3,1]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= prices.length <= 10000"
        ],
        functionName: "maxProfit",
        starter: {
            js: "function maxProfit(prices) {\n  // Max total profit with unlimited transactions.\n}\n",
            ts: "function maxProfit(prices: number[]): number {\n  // Max total profit with unlimited transactions.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        7,
                        1,
                        5,
                        3,
                        6,
                        4
                    ]
                ],
                expected: 7
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
                        7,
                        6,
                        4,
                        3,
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
                expected: 0
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
                        1,
                        5
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        5,
                        1
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        2,
                        1,
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
                expected: 0
            }
        ],
        hints: [
            "You can capture every upward step by buying before it and selling after.",
            "Add up all the positive day-to-day differences.",
            "Downward steps contribute nothing."
        ],
        solutions: [
            {
                label: "Sum the upswings",
                approach: "Add each positive consecutive difference.",
                js: "function maxProfit(prices) {\n  let profit = 0;\n  for (let i = 1; i < prices.length; i++) {\n    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];\n  }\n  return profit;\n}\n",
                ts: "function maxProfit(prices: number[]): number {\n  let profit = 0;\n  for (let i = 1; i < prices.length; i++) {\n    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];\n  }\n  return profit;\n}\n",
                commentedCode: {
                    js: "function maxProfit(prices) {\n  // Accumulate profit from every independently profitable daily move.\n  let profit = 0;\n  for (let i = 1; i < prices.length; i++) {\n    // Buying yesterday and selling today captures this positive step.\n    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];\n  }\n  // Adjacent upswings telescope to the same profit as holding through a rise.\n  return profit;\n}\n",
                    ts: "function maxProfit(prices: number[]): number {\n  // Accumulate profit from every independently profitable daily move.\n  let profit = 0;\n  for (let i = 1; i < prices.length; i++) {\n    // Buying yesterday and selling today captures this positive step.\n    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];\n  }\n  // Adjacent upswings telescope to the same profit as holding through a rise.\n  return profit;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Ride each rising run",
                approach: "Buy at each local minimum and sell at the following local maximum.",
                js: "function maxProfit(prices) {\n  let profit = 0, i = 0;\n  const n = prices.length;\n  while (i < n - 1) {\n    while (i < n - 1 && prices[i + 1] <= prices[i]) i++;\n    const buy = prices[i];\n    while (i < n - 1 && prices[i + 1] >= prices[i]) i++;\n    profit += prices[i] - buy;\n  }\n  return profit;\n}\n",
                ts: "function maxProfit(prices: number[]): number {\n  let profit = 0, i = 0;\n  const n = prices.length;\n  while (i < n - 1) {\n    while (i < n - 1 && prices[i + 1] <= prices[i]) i++;\n    const buy = prices[i];\n    while (i < n - 1 && prices[i + 1] >= prices[i]) i++;\n    profit += prices[i] - buy;\n  }\n  return profit;\n}\n",
                commentedCode: {
                    js: "function maxProfit(prices) {\n  // i walks across alternating falling and rising runs.\n  let profit = 0, i = 0;\n  const n = prices.length;\n  while (i < n - 1) {\n    // Skip non-increasing days to stop at the next local minimum.\n    while (i < n - 1 && prices[i + 1] <= prices[i]) i++;\n    // Buy at the bottom of this rising opportunity.\n    const buy = prices[i];\n    // Follow the non-decreasing run to its local maximum.\n    while (i < n - 1 && prices[i + 1] >= prices[i]) i++;\n    // Sell at the run's peak and add this transaction's gain.\n    profit += prices[i] - buy;\n  }\n  return profit;\n}\n",
                    ts: "function maxProfit(prices: number[]): number {\n  // i walks across alternating falling and rising runs.\n  let profit = 0, i = 0;\n  const n = prices.length;\n  while (i < n - 1) {\n    // Skip non-increasing days to stop at the next local minimum.\n    while (i < n - 1 && prices[i + 1] <= prices[i]) i++;\n    // Buy at the bottom of this rising opportunity.\n    const buy = prices[i];\n    // Follow the non-decreasing run to its local maximum.\n    while (i < n - 1 && prices[i + 1] >= prices[i]) i++;\n    // Sell at the run's peak and add this transaction's gain.\n    profit += prices[i] - buy;\n  }\n  return profit;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "gr-min-arrows",
        slug: "min-arrows",
        title: "Minimum Arrows to Burst Balloons",
        difficulty: "medium",
        patternIds: P,
        statement: "Each balloon spans `[start, end]` on a wall. An arrow shot at position `x` bursts every balloon whose span includes `x` (endpoints included). Return the fewest arrows that burst them all.",
        examples: [
            {
                input: "[[10,16],[2,8],[1,6],[7,12]]",
                output: "2"
            },
            {
                input: "[[1,2],[3,4],[5,6],[7,8]]",
                output: "4"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= balloons.length <= 10000"
        ],
        functionName: "minArrows",
        starter: {
            js: "function minArrows(balloons) {\n  // Fewest arrows to burst every balloon.\n}\n",
            ts: "function minArrows(balloons: number[][]): number {\n  // Fewest arrows to burst every balloon.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            10,
                            16
                        ],
                        [
                            2,
                            8
                        ],
                        [
                            1,
                            6
                        ],
                        [
                            7,
                            12
                        ]
                    ]
                ],
                expected: 2
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
                        ],
                        [
                            5,
                            6
                        ],
                        [
                            7,
                            8
                        ]
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
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            10
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            4,
                            5
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            1,
                            6
                        ],
                        [
                            2,
                            8
                        ],
                        [
                            7,
                            12
                        ],
                        [
                            10,
                            16
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            100
                        ],
                        [
                            50,
                            60
                        ],
                        [
                            70,
                            80
                        ]
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "Sort by end position and fire an arrow at the first balloon's end.",
            "That arrow bursts every balloon that starts before it.",
            "Only fire a new arrow when a balloon starts beyond the last arrow's position."
        ],
        solutions: [
            {
                label: "Sort by end, shoot greedily",
                approach: "Each arrow covers the current end; add one when a balloon starts past it.",
                js: "function minArrows(balloons) {\n  if (balloons.length === 0) return 0;\n  const sorted = [...balloons].sort((a, b) => a[1] - b[1]);\n  let arrows = 1, pos = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] > pos) { arrows++; pos = sorted[i][1]; }\n  }\n  return arrows;\n}\n",
                ts: "function minArrows(balloons: number[][]): number {\n  if (balloons.length === 0) return 0;\n  const sorted = [...balloons].sort((a, b) => a[1] - b[1]);\n  let arrows = 1, pos = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] > pos) { arrows++; pos = sorted[i][1]; }\n  }\n  return arrows;\n}\n",
                commentedCode: {
                    js: "function minArrows(balloons) {\n  // No balloons require no arrows.\n  if (balloons.length === 0) return 0;\n  // The earliest end is the safest arrow position for preserving later overlap.\n  const sorted = [...balloons].sort((a, b) => a[1] - b[1]);\n  // Shoot the first arrow at the end of the earliest-ending balloon.\n  let arrows = 1, pos = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // Only a balloon beginning beyond that position escapes the current arrow.\n    if (sorted[i][0] > pos) { arrows++; pos = sorted[i][1]; }\n  }\n  return arrows;\n}\n",
                    ts: "function minArrows(balloons: number[][]): number {\n  // No balloons require no arrows.\n  if (balloons.length === 0) return 0;\n  // The earliest end is the safest arrow position for preserving later overlap.\n  const sorted = [...balloons].sort((a, b) => a[1] - b[1]);\n  // Shoot the first arrow at the end of the earliest-ending balloon.\n  let arrows = 1, pos = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // Only a balloon beginning beyond that position escapes the current arrow.\n    if (sorted[i][0] > pos) { arrows++; pos = sorted[i][1]; }\n  }\n  return arrows;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Sort by start, track the tightest end",
                approach: "Shrink the overlap window; a balloon starting past it needs a new arrow.",
                js: "function minArrows(balloons) {\n  if (balloons.length === 0) return 0;\n  const sorted = [...balloons].sort((a, b) => a[0] - b[0]);\n  let arrows = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] > end) { arrows++; end = sorted[i][1]; }\n    else end = Math.min(end, sorted[i][1]);\n  }\n  return arrows;\n}\n",
                ts: "function minArrows(balloons: number[][]): number {\n  if (balloons.length === 0) return 0;\n  const sorted = [...balloons].sort((a, b) => a[0] - b[0]);\n  let arrows = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] > end) { arrows++; end = sorted[i][1]; }\n    else end = Math.min(end, sorted[i][1]);\n  }\n  return arrows;\n}\n",
                commentedCode: {
                    js: "function minArrows(balloons) {\n  // An empty input has no overlap groups to cover.\n  if (balloons.length === 0) return 0;\n  // Start order lets us build each consecutive overlap group.\n  const sorted = [...balloons].sort((a, b) => a[0] - b[0]);\n  // end is the right edge shared by every balloon in the current group.\n  let arrows = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // A start beyond the shared edge opens a disjoint group needing another arrow.\n    if (sorted[i][0] > end) { arrows++; end = sorted[i][1]; }\n    // Otherwise narrow the shared window so one arrow still covers the group.\n    else end = Math.min(end, sorted[i][1]);\n  }\n  return arrows;\n}\n",
                    ts: "function minArrows(balloons: number[][]): number {\n  // An empty input has no overlap groups to cover.\n  if (balloons.length === 0) return 0;\n  // Start order lets us build each consecutive overlap group.\n  const sorted = [...balloons].sort((a, b) => a[0] - b[0]);\n  // end is the right edge shared by every balloon in the current group.\n  let arrows = 1, end = sorted[0][1];\n  for (let i = 1; i < sorted.length; i++) {\n    // A start beyond the shared edge opens a disjoint group needing another arrow.\n    if (sorted[i][0] > end) { arrows++; end = sorted[i][1]; }\n    // Otherwise narrow the shared window so one arrow still covers the group.\n    else end = Math.min(end, sorted[i][1]);\n  }\n  return arrows;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "gr-partition-labels",
        slug: "partition-labels",
        title: "Partition Labels",
        difficulty: "medium",
        patternIds: P,
        statement: "Split the string into as many pieces as possible so that each letter appears in at most one piece. Return the length of each piece, left to right.",
        examples: [
            {
                input: '"ababcbacadefegdehijhklij"',
                output: "[9,7,8]"
            },
            {
                input: '"abc"',
                output: "[1,1,1]"
            },
            {
                input: '""',
                output: "[]"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000",
            "lowercase letters only"
        ],
        functionName: "partitionLabels",
        starter: {
            js: "function partitionLabels(s) {\n  // Sizes of the maximal single-letter-ownership pieces.\n}\n",
            ts: "function partitionLabels(s: string): number[] {\n  // Sizes of the maximal single-letter-ownership pieces.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    "ababcbacadefegdehijhklij"
                ],
                expected: [
                    9,
                    7,
                    8
                ]
            },
            {
                args: [
                    "abc"
                ],
                expected: [
                    1,
                    1,
                    1
                ]
            },
            {
                args: [
                    ""
                ],
                expected: []
            }
        ],
        hidden: [
            {
                args: [
                    "a"
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    "aa"
                ],
                expected: [
                    2
                ]
            },
            {
                args: [
                    "aba"
                ],
                expected: [
                    3
                ]
            },
            {
                args: [
                    "abcabc"
                ],
                expected: [
                    6
                ]
            },
            {
                args: [
                    "eccbbbbdec"
                ],
                expected: [
                    10
                ]
            },
            {
                args: [
                    "abccbadd"
                ],
                expected: [
                    6,
                    2
                ]
            }
        ],
        hints: [
            "Record the last index at which each letter appears.",
            "Extend the current piece's end to the furthest last-index of any letter seen so far.",
            "Close the piece when your scan position reaches that end."
        ],
        solutions: [
            {
                label: "Track the furthest last index",
                approach: "Grow a piece until every letter in it is fully contained.",
                js: "function partitionLabels(s) {\n  const last = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  const out = [];\n  let start = 0, end = 0;\n  for (let i = 0; i < s.length; i++) {\n    end = Math.max(end, last[s[i]]);\n    if (i === end) { out.push(end - start + 1); start = i + 1; }\n  }\n  return out;\n}\n",
                ts: "function partitionLabels(s: string): number[] {\n  const last: Record<string, number> = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  const out: number[] = [];\n  let start = 0, end = 0;\n  for (let i = 0; i < s.length; i++) {\n    end = Math.max(end, last[s[i]]);\n    if (i === end) { out.push(end - start + 1); start = i + 1; }\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function partitionLabels(s) {\n  // Record where every character appears for the final time.\n  const last = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  const out = [];\n  // [start, end] is the partition currently being grown.\n  let start = 0, end = 0;\n  for (let i = 0; i < s.length; i++) {\n    // This character forces the partition to include its final occurrence.\n    end = Math.max(end, last[s[i]]);\n    // Reaching end means every character seen in this partition is contained.\n    if (i === end) { out.push(end - start + 1); start = i + 1; }\n  }\n  return out;\n}\n",
                    ts: "function partitionLabels(s: string): number[] {\n  // Record where every character appears for the final time.\n  const last: Record<string, number> = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  const out: number[] = [];\n  // [start, end] is the partition currently being grown.\n  let start = 0, end = 0;\n  for (let i = 0; i < s.length; i++) {\n    // This character forces the partition to include its final occurrence.\n    end = Math.max(end, last[s[i]]);\n    // Reaching end means every character seen in this partition is contained.\n    if (i === end) { out.push(end - start + 1); start = i + 1; }\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Merge letter ranges",
                approach: "Treat each letter's [first, last] as an interval and merge overlaps.",
                js: "function partitionLabels(s) {\n  const first = {}, last = {};\n  for (let i = 0; i < s.length; i++) {\n    if (first[s[i]] === undefined) first[s[i]] = i;\n    last[s[i]] = i;\n  }\n  const ranges = Object.keys(first).map((c) => [first[c], last[c]]).sort((a, b) => a[0] - b[0]);\n  const out = [];\n  let start = -1, end = -1;\n  for (const [lo, hi] of ranges) {\n    if (start === -1) { start = lo; end = hi; }\n    else if (lo <= end) end = Math.max(end, hi);\n    else { out.push(end - start + 1); start = lo; end = hi; }\n  }\n  if (start !== -1) out.push(end - start + 1);\n  return out;\n}\n",
                ts: "function partitionLabels(s: string): number[] {\n  const first: Record<string, number> = {}, last: Record<string, number> = {};\n  for (let i = 0; i < s.length; i++) {\n    if (first[s[i]] === undefined) first[s[i]] = i;\n    last[s[i]] = i;\n  }\n  const ranges = Object.keys(first).map((c) => [first[c], last[c]]).sort((a, b) => a[0] - b[0]);\n  const out: number[] = [];\n  let start = -1, end = -1;\n  for (const [lo, hi] of ranges) {\n    if (start === -1) { start = lo; end = hi; }\n    else if (lo <= end) end = Math.max(end, hi);\n    else { out.push(end - start + 1); start = lo; end = hi; }\n  }\n  if (start !== -1) out.push(end - start + 1);\n  return out;\n}\n",
                commentedCode: {
                    js: "function partitionLabels(s) {\n  // Build the full occurrence interval [first, last] for each character.\n  const first = {}, last = {};\n  for (let i = 0; i < s.length; i++) {\n    // Set the first occurrence once, while replacing the last on every visit.\n    if (first[s[i]] === undefined) first[s[i]] = i;\n    last[s[i]] = i;\n  }\n  // Sort character intervals in the order their characters first appear.\n  const ranges = Object.keys(first).map((c) => [first[c], last[c]]).sort((a, b) => a[0] - b[0]);\n  const out = [];\n  // -1 marks that no merged partition has started yet.\n  let start = -1, end = -1;\n  for (const [lo, hi] of ranges) {\n    // Seed the first partition from the first character interval.\n    if (start === -1) { start = lo; end = hi; }\n    // Overlapping character ranges must belong to one partition.\n    else if (lo <= end) end = Math.max(end, hi);\n    // A gap closes the prior partition and starts the next one.\n    else { out.push(end - start + 1); start = lo; end = hi; }\n  }\n  // Close the final partition when the input contained at least one character.\n  if (start !== -1) out.push(end - start + 1);\n  return out;\n}\n",
                    ts: "function partitionLabels(s: string): number[] {\n  // Build the full occurrence interval [first, last] for each character.\n  const first: Record<string, number> = {}, last: Record<string, number> = {};\n  for (let i = 0; i < s.length; i++) {\n    // Set the first occurrence once, while replacing the last on every visit.\n    if (first[s[i]] === undefined) first[s[i]] = i;\n    last[s[i]] = i;\n  }\n  // Sort character intervals in the order their characters first appear.\n  const ranges = Object.keys(first).map((c) => [first[c], last[c]]).sort((a, b) => a[0] - b[0]);\n  const out: number[] = [];\n  // -1 marks that no merged partition has started yet.\n  let start = -1, end = -1;\n  for (const [lo, hi] of ranges) {\n    // Seed the first partition from the first character interval.\n    if (start === -1) { start = lo; end = hi; }\n    // Overlapping character ranges must belong to one partition.\n    else if (lo <= end) end = Math.max(end, hi);\n    // A gap closes the prior partition and starts the next one.\n    else { out.push(end - start + 1); start = lo; end = hi; }\n  }\n  // Close the final partition when the input contained at least one character.\n  if (start !== -1) out.push(end - start + 1);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    }
];
const greedyProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const greedyMcqs = [
    {
        id: "s5-gr-idea",
        kind: "mcq",
        prompt: "A greedy algorithm builds a solution by:",
        options: [
            "trying every possibility and keeping the best",
            "making the locally best choice at each step and never reconsidering",
            "caching overlapping subproblems",
            "dividing the input in half repeatedly"
        ],
        answerIndex: 1,
        explanation: "Greedy commits to the best immediate choice and moves on — no backtracking."
    },
    {
        id: "s5-gr-caveat",
        kind: "mcq",
        prompt: "The main risk with a greedy approach is that:",
        options: [
            "it always uses too much memory",
            "the locally best choice may not lead to a globally optimal answer",
            "it cannot handle sorted input",
            "it is always slower than brute force"
        ],
        answerIndex: 1,
        explanation: "Greedy is only correct when local optimum guarantees global optimum — which needs proof."
    }
];
const greedyModule = {
    id: "m-pat-greedy",
    stageId: S,
    title: "Greedy",
    kind: "patternModule",
    summary: "Make the locally best choice at each step — fast and simple, when it's provably optimal.",
    lessonSections: [
        {
            heading: "Commit to the best next move",
            body: `A **greedy** algorithm builds its answer one step at a time, always taking the choice that looks best *right now* and never undoing it. When that works it's wonderfully simple and fast — often just a sort followed by a single pass.

\`\`\`js
// Jump Game: can we reach the end?
function canJump(nums) {
  let reach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reach) return false;          // stuck before this index
    reach = Math.max(reach, i + nums[i]); // extend the furthest reach
  }
  return true;
}
console.log(canJump([2, 3, 1, 1, 4])); // true
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Greedy tends to fit when:

- you can **sort** the input and then sweep once (intervals, cookies, arrows),
- an **exchange argument** shows a locally best pick never hurts (earliest-finishing interval, largest coin),
- the problem asks for a **maximum / minimum count** and choices don't interact in tricky ways,
- you're taking the "best available" repeatedly — which pairs naturally with a **heap** (that's the Top-K / Two-Heaps overlap).

The catch: greedy is only *correct* when the local optimum guarantees the global one. If a choice can back you into a corner, you likely need dynamic programming instead — which is exactly why several drills here also show a DP alternative.`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Interval scheduling: keep the most intervals (sort by end)
sorted = intervals.sort((a, b) => a[1] - b[1]);
let kept = 0, end = -Infinity;
for (const [s, e] of sorted) {
  if (s >= end) { kept++; end = e; } // take the earliest finisher that fits
}
\`\`\`

**Pitfalls:** the biggest one is assuming greedy works without justifying it — coin change is greedy for {1,5,10,25} but *not* for arbitrary coins (hence the DP fallback shown in the drill); sorting by the **wrong key** (interval problems usually sort by **end**, not start); and off-by-one on whether touching endpoints "overlap". Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "gr-max-coins",
    drillProblemIds: [
        "gr-max-coins",
        "gr-max-units",
        "gr-jump-game",
        "gr-min-jumps",
        "gr-non-overlapping",
        "gr-gas-station"
    ],
    testPoolProblemIds: [
        "gr-assign-cookies",
        "gr-max-profit",
        "gr-min-arrows",
        "gr-partition-labels"
    ],
    complexityQuestionIds: [
        "s5-gr-idea",
        "s5-gr-caveat"
    ],
    badgeId: "badge-pat-greedy",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage5/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerStage5",
    ()=>registerStage5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$treeDfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/treeDfs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$treeBfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/treeBfs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$graphTraversal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/graphTraversal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$mergeIntervals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/mergeIntervals.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$cyclicSort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/cyclicSort.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$topK$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/topK.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$twoHeaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/twoHeaps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$kWayMerge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/kWayMerge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$subsetsBacktracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/subsetsBacktracking.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$greedy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/greedy.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function registerStage5() {
    [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$treeDfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treeDfsProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$treeBfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treeBfsProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$graphTraversal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphTraversalProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$mergeIntervals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeIntervalsProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$cyclicSort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cyclicSortProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$topK$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topKProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$twoHeaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twoHeapsProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$kWayMerge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kWayMergeProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$subsetsBacktracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subsetsBacktrackingProblems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$greedy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greedyProblems"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerProblem"]);
    [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$treeDfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treeDfsMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$treeBfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treeBfsMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$graphTraversal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphTraversalMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$mergeIntervals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeIntervalsMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$cyclicSort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cyclicSortMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$topK$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topKMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$twoHeaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twoHeapsMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$kWayMerge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kWayMergeMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$subsetsBacktracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subsetsBacktrackingMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$greedy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greedyMcqs"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerComplexityQuestion"]);
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$treeDfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treeDfsModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$treeBfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treeBfsModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$graphTraversal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphTraversalModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$mergeIntervals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeIntervalsModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$cyclicSort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cyclicSortModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$topK$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topKModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$twoHeaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twoHeapsModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$kWayMerge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kWayMergeModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$subsetsBacktracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subsetsBacktrackingModule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$greedy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greedyModule"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModule"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage5/kWayMerge.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "kWayMergeMcqs",
    ()=>kWayMergeMcqs,
    "kWayMergeModule",
    ()=>kWayMergeModule,
    "kWayMergeProblems",
    ()=>kWayMergeProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/shared/heap.ts [app-client] (ecmascript)");
;
;
const S = "dsa-s5";
const P = [
    "k-way-merge"
];
const LISTS_NOTE = "Each inner list is already sorted ascending.";
const COMMENTED_MIN_HEAP_SOURCE = `// A min-heap keeps its smallest value at index 0.
class MinHeap {
  // Store the complete binary tree in an array.
  constructor() { this.data = []; }
  // The number of stored values tells callers whether the heap is empty.
  size() { return this.data.length; }
  // The root is the smallest value, so reading it does not modify the heap.
  peek() { return this.data[0]; }
  // Append a value, then bubble it upward until the min-heap order is restored.
  push(v) { this.data.push(v); this._up(this.data.length - 1); return this; }
  // Remove and return the smallest value at the root.
  pop() {
    const n = this.data.length;
    // An empty heap has no value to remove.
    if (n === 0) return undefined;
    // Save the root because it is the result of this pop.
    const top = this.data[0];
    // Take the final value out of the array so it can replace the root.
    const last = this.data.pop();
    // A multi-value heap needs its replacement root pushed back down.
    if (n > 1) { this.data[0] = last; this._down(0); }
    return top;
  }
  // Restore heap order after an insertion at index i.
  _up(i) {
    while (i > 0) {
      // In an array-backed binary tree, this is i's parent index.
      const p = (i - 1) >> 1;
      // Stop once the parent is already no larger than its child.
      if (this.data[p] <= this.data[i]) break;
      // Otherwise swap the child with its larger parent.
      const t = this.data[p]; this.data[p] = this.data[i]; this.data[i] = t;
      i = p;
    }
  }
  // Restore heap order after moving a value to index i.
  _down(i) {
    const n = this.data.length;
    while (true) {
      // Compare i with both of its children, if they exist.
      let s = i; const l = 2 * i + 1; const r = 2 * i + 2;
      if (l < n && this.data[l] < this.data[s]) s = l;
      if (r < n && this.data[r] < this.data[s]) s = r;
      // If i is still smallest, this subtree already satisfies heap order.
      if (s === i) break;
      // Move the smaller child up and continue from its old position.
      const t = this.data[s]; this.data[s] = this.data[i]; this.data[i] = t;
      i = s;
    }
  }
}`;
const COMMENTED_MAX_HEAP_SOURCE = `// A max-heap keeps its largest value at index 0.
class MaxHeap {
  // Store the complete binary tree in an array.
  constructor() { this.data = []; }
  // The number of stored values tells callers whether the heap is empty.
  size() { return this.data.length; }
  // The root is the largest value, so reading it does not modify the heap.
  peek() { return this.data[0]; }
  // Append a value, then bubble it upward until the max-heap order is restored.
  push(v) { this.data.push(v); this._up(this.data.length - 1); return this; }
  // Remove and return the largest value at the root.
  pop() {
    const n = this.data.length;
    // An empty heap has no value to remove.
    if (n === 0) return undefined;
    // Save the root because it is the result of this pop.
    const top = this.data[0];
    // Take the final value out of the array so it can replace the root.
    const last = this.data.pop();
    // A multi-value heap needs its replacement root pushed back down.
    if (n > 1) { this.data[0] = last; this._down(0); }
    return top;
  }
  // Restore heap order after an insertion at index i.
  _up(i) {
    while (i > 0) {
      // In an array-backed binary tree, this is i's parent index.
      const p = (i - 1) >> 1;
      // Stop once the parent is already no smaller than its child.
      if (this.data[p] >= this.data[i]) break;
      // Otherwise swap the child with its smaller parent.
      const t = this.data[p]; this.data[p] = this.data[i]; this.data[i] = t;
      i = p;
    }
  }
  // Restore heap order after moving a value to index i.
  _down(i) {
    const n = this.data.length;
    while (true) {
      // Compare i with both of its children, if they exist.
      let s = i; const l = 2 * i + 1; const r = 2 * i + 2;
      if (l < n && this.data[l] > this.data[s]) s = l;
      if (r < n && this.data[r] > this.data[s]) s = r;
      // If i is still largest, this subtree already satisfies heap order.
      if (s === i) break;
      // Move the larger child up and continue from its old position.
      const t = this.data[s]; this.data[s] = this.data[i]; this.data[i] = t;
      i = s;
    }
  }
}`;
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "km-merge-two",
        slug: "k-way-merge-two",
        title: "Merge Two Sorted Lists",
        difficulty: "easy",
        patternIds: P,
        statement: "Merge two ascending lists into one ascending list. This is the base case every k-way merge is built from.",
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
            "both inputs are sorted ascending"
        ],
        functionName: "mergeTwoLists",
        starter: {
            js: "function mergeTwoLists(a, b) {\n  // Merge two sorted lists.\n}\n",
            ts: "function mergeTwoLists(a: number[], b: number[]): number[] {\n  // Merge two sorted lists.\n  return [];\n}\n"
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
            "Keep one pointer per list and always take the smaller head.",
            "When one list runs out, append the remainder of the other.",
            "This two-way merge generalises to k lists by choosing the smallest of k heads."
        ],
        solutions: [
            {
                label: "Two-pointer merge",
                approach: "Repeatedly take the smaller of the two current heads.",
                js: "function mergeTwoLists(a, b) {\n  const out = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
                ts: "function mergeTwoLists(a: number[], b: number[]): number[] {\n  const out: number[] = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  while (i < a.length) out.push(a[i++]);\n  while (j < b.length) out.push(b[j++]);\n  return out;\n}\n",
                commentedCode: {
                    js: "function mergeTwoLists(a, b) {\n  // Collect the merged values without changing either input list.\n  const out = [];\n  // i and j point at the next unmerged value in a and b.\n  let i = 0, j = 0;\n  // While both lists have candidates, emit the smaller current head.\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  // If b ran out first, append every remaining value from a.\n  while (i < a.length) out.push(a[i++]);\n  // If a ran out first, append every remaining value from b.\n  while (j < b.length) out.push(b[j++]);\n  // Every input value now appears once in ascending order.\n  return out;\n}\n",
                    ts: "function mergeTwoLists(a: number[], b: number[]): number[] {\n  // Collect the merged values without changing either input list.\n  const out: number[] = [];\n  // i and j point at the next unmerged value in a and b.\n  let i = 0, j = 0;\n  // While both lists have candidates, emit the smaller current head.\n  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);\n  // If b ran out first, append every remaining value from a.\n  while (i < a.length) out.push(a[i++]);\n  // If a ran out first, append every remaining value from b.\n  while (j < b.length) out.push(b[j++]);\n  // Every input value now appears once in ascending order.\n  return out;\n}\n"
                },
                time: "O(n + m)",
                space: "O(n + m)"
            },
            {
                label: "Min-heap of all values",
                approach: "Push everything into a min-heap and drain it in order.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction mergeTwoLists(a, b) {\n  const h = new MinHeap();\n  for (const v of a) h.push(v);\n  for (const v of b) h.push(v);\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction mergeTwoLists(a: number[], b: number[]): number[] {\n  const h = new MinHeap();\n  for (const v of a) h.push(v);\n  for (const v of b) h.push(v);\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
                commentedCode: {
                    js: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction mergeTwoLists(a, b) {\n  // A min-heap will order all values regardless of which list supplied them.\n  const h = new MinHeap();\n  // Insert every value from the first sorted list.\n  for (const v of a) h.push(v);\n  // Insert every value from the second sorted list.\n  for (const v of b) h.push(v);\n  // Build a fresh merged result.\n  const out = [];\n  // Each pop removes the smallest value still waiting in the heap.\n  while (h.size() > 0) out.push(h.pop());\n  // The pop order is the complete ascending merge.\n  return out;\n}\n`,
                    ts: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction mergeTwoLists(a: number[], b: number[]): number[] {\n  // A min-heap will order all values regardless of which list supplied them.\n  const h = new MinHeap();\n  // Insert every value from the first sorted list.\n  for (const v of a) h.push(v);\n  // Insert every value from the second sorted list.\n  for (const v of b) h.push(v);\n  // Build a fresh merged result.\n  const out: number[] = [];\n  // Each pop removes the smallest value still waiting in the heap.\n  while (h.size() > 0) out.push(h.pop());\n  // The pop order is the complete ascending merge.\n  return out;\n}\n`
                },
                time: "O((n+m) log (n+m))",
                space: "O(n + m)"
            }
        ]
    },
    {
        id: "km-smallest-across",
        slug: "smallest-across-lists",
        title: "Smallest Across the Lists",
        difficulty: "easy",
        patternIds: P,
        statement: `Return the smallest value found in any of the lists, or -1 if every list is empty.\n\n${LISTS_NOTE}`,
        examples: [
            {
                input: "[[1,4],[2,3],[5]]",
                output: "1"
            },
            {
                input: "[[],[]]",
                output: "-1"
            },
            {
                input: "[[7]]",
                output: "7"
            }
        ],
        constraints: [
            "0 <= number of lists <= 1000"
        ],
        functionName: "smallestAcross",
        starter: {
            js: "function smallestAcross(lists) {\n  // Smallest value across all lists, or -1.\n}\n",
            ts: "function smallestAcross(lists: number[][]): number {\n  // Smallest value across all lists, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            4
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            5
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [],
                        []
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        [
                            7
                        ]
                    ]
                ],
                expected: 7
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
                        []
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        [
                            3
                        ],
                        [
                            1
                        ],
                        [
                            2
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            0
                        ],
                        [
                            5
                        ]
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            10,
                            20
                        ],
                        [
                            5,
                            15
                        ]
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    [
                        [
                            2,
                            2
                        ],
                        [
                            2
                        ]
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "Because each list is sorted, its smallest value is its first element.",
            "So you only need to compare the heads of the lists.",
            "Skip empty lists entirely."
        ],
        solutions: [
            {
                label: "Compare the heads",
                approach: "Take the minimum of each non-empty list's first value.",
                js: "function smallestAcross(lists) {\n  let best = Infinity;\n  for (const list of lists) {\n    if (list.length > 0 && list[0] < best) best = list[0];\n  }\n  return best === Infinity ? -1 : best;\n}\n",
                ts: "function smallestAcross(lists: number[][]): number {\n  let best = Infinity;\n  for (const list of lists) {\n    if (list.length > 0 && list[0] < best) best = list[0];\n  }\n  return best === Infinity ? -1 : best;\n}\n",
                commentedCode: {
                    js: "function smallestAcross(lists) {\n  // Infinity is a sentinel larger than every real candidate.\n  let best = Infinity;\n  // Inspect each sorted list once.\n  for (const list of lists) {\n    // A sorted list's first value is its only possible global-minimum candidate.\n    if (list.length > 0 && list[0] < best) best = list[0];\n  }\n  // If no list supplied a head, every list was empty.\n  return best === Infinity ? -1 : best;\n}\n",
                    ts: "function smallestAcross(lists: number[][]): number {\n  // Infinity is a sentinel larger than every real candidate.\n  let best = Infinity;\n  // Inspect each sorted list once.\n  for (const list of lists) {\n    // A sorted list's first value is its only possible global-minimum candidate.\n    if (list.length > 0 && list[0] < best) best = list[0];\n  }\n  // If no list supplied a head, every list was empty.\n  return best === Infinity ? -1 : best;\n}\n"
                },
                time: "O(k)",
                space: "O(1)"
            },
            {
                label: "Flatten and take the minimum",
                approach: "Combine every value and take the smallest.",
                js: "function smallestAcross(lists) {\n  const all = [].concat(...lists);\n  return all.length === 0 ? -1 : Math.min(...all);\n}\n",
                ts: "function smallestAcross(lists: number[][]): number {\n  const all = ([] as number[]).concat(...lists);\n  return all.length === 0 ? -1 : Math.min(...all);\n}\n",
                commentedCode: {
                    js: "function smallestAcross(lists) {\n  // Flatten every inner list into one array of candidates.\n  const all = [].concat(...lists);\n  // Avoid applying Math.min to no values; otherwise return the minimum.\n  return all.length === 0 ? -1 : Math.min(...all);\n}\n",
                    ts: "function smallestAcross(lists: number[][]): number {\n  // Start with a typed empty array, then flatten every inner list into it.\n  const all = ([] as number[]).concat(...lists);\n  // Avoid applying Math.min to no values; otherwise return the minimum.\n  return all.length === 0 ? -1 : Math.min(...all);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "km-merge-k-lists",
        slug: "merge-k-sorted-lists",
        title: "Merge K Sorted Lists",
        difficulty: "medium",
        patternIds: P,
        statement: `Merge every list into a single ascending list.\n\n${LISTS_NOTE}`,
        examples: [
            {
                input: "[[1,4,5],[1,3,4],[2,6]]",
                output: "[1,1,2,3,4,4,5,6]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[[]]",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= number of lists <= 1000"
        ],
        functionName: "mergeKLists",
        starter: {
            js: "function mergeKLists(lists) {\n  // Merge all sorted lists into one.\n}\n",
            ts: "function mergeKLists(lists: number[][]): number[] {\n  // Merge all sorted lists into one.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            4,
                            5
                        ],
                        [
                            1,
                            3,
                            4
                        ],
                        [
                            2,
                            6
                        ]
                    ]
                ],
                expected: [
                    1,
                    1,
                    2,
                    3,
                    4,
                    4,
                    5,
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
                        []
                    ]
                ],
                expected: []
            }
        ],
        hidden: [
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
            },
            {
                args: [
                    [
                        [
                            3
                        ],
                        [
                            2
                        ],
                        [
                            1
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
                            1,
                            2
                        ],
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: [
                    1,
                    1,
                    2,
                    2
                ]
            },
            {
                args: [
                    [
                        [],
                        [
                            1
                        ]
                    ]
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    [
                        [
                            5,
                            10
                        ],
                        [
                            1
                        ],
                        [
                            7
                        ]
                    ]
                ],
                expected: [
                    1,
                    5,
                    7,
                    10
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            1,
                            1
                        ]
                    ]
                ],
                expected: [
                    1,
                    1,
                    1
                ]
            }
        ],
        hints: [
            "The smallest unmerged value is always at the head of one of the lists.",
            "A min-heap gives you that smallest head in O(log k) instead of scanning all k.",
            "Keep one pointer per list and advance whichever list you just consumed from."
        ],
        solutions: [
            {
                label: "Min-heap drain",
                approach: "Push every value into a min-heap, then pop them out in order.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction mergeKLists(lists) {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction mergeKLists(lists: number[][]): number[] {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
                commentedCode: {
                    js: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction mergeKLists(lists) {\n  // The heap globally orders values from all of the input lists.\n  const h = new MinHeap();\n  // Visit every list and insert each of its values into the heap.\n  for (const list of lists) for (const v of list) h.push(v);\n  // Collect the merged output separately from the inputs.\n  const out = [];\n  // Repeatedly remove the smallest remaining value.\n  while (h.size() > 0) out.push(h.pop());\n  // The drained sequence contains every value in ascending order.\n  return out;\n}\n`,
                    ts: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction mergeKLists(lists: number[][]): number[] {\n  // The heap globally orders values from all of the input lists.\n  const h = new MinHeap();\n  // Visit every list and insert each of its values into the heap.\n  for (const list of lists) for (const v of list) h.push(v);\n  // Collect the merged output separately from the inputs.\n  const out: number[] = [];\n  // Repeatedly remove the smallest remaining value.\n  while (h.size() > 0) out.push(h.pop());\n  // The drained sequence contains every value in ascending order.\n  return out;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "K pointers",
                approach: "Track a pointer per list and repeatedly take the smallest head.",
                js: "function mergeKLists(lists) {\n  const idx = new Array(lists.length).fill(0);\n  const out = [];\n  for (;;) {\n    let best = -1;\n    for (let i = 0; i < lists.length; i++) {\n      if (idx[i] >= lists[i].length) continue;\n      if (best === -1 || lists[i][idx[i]] < lists[best][idx[best]]) best = i;\n    }\n    if (best === -1) break;\n    out.push(lists[best][idx[best]]);\n    idx[best]++;\n  }\n  return out;\n}\n",
                ts: "function mergeKLists(lists: number[][]): number[] {\n  const idx = new Array(lists.length).fill(0);\n  const out: number[] = [];\n  for (;;) {\n    let best = -1;\n    for (let i = 0; i < lists.length; i++) {\n      if (idx[i] >= lists[i].length) continue;\n      if (best === -1 || lists[i][idx[i]] < lists[best][idx[best]]) best = i;\n    }\n    if (best === -1) break;\n    out.push(lists[best][idx[best]]);\n    idx[best]++;\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function mergeKLists(lists) {\n  // Each index points at its list's next unmerged value.\n  const idx = new Array(lists.length).fill(0);\n  // Accumulate the globally sorted result.\n  const out = [];\n  // One pass of this loop emits one value, until no list has a candidate.\n  for (;;) {\n    // -1 means no non-empty candidate list has been found yet.\n    let best = -1;\n    // Scan the current head of every list.\n    for (let i = 0; i < lists.length; i++) {\n      // An exhausted list cannot supply the next value.\n      if (idx[i] >= lists[i].length) continue;\n      // Remember the list whose current head is smallest.\n      if (best === -1 || lists[i][idx[i]] < lists[best][idx[best]]) best = i;\n    }\n    // No candidate means every list has been exhausted.\n    if (best === -1) break;\n    // Emit the smallest head found during this scan.\n    out.push(lists[best][idx[best]]);\n    // Advance only the list that supplied that value.\n    idx[best]++;\n  }\n  // All values have now been merged in ascending order.\n  return out;\n}\n",
                    ts: "function mergeKLists(lists: number[][]): number[] {\n  // Each index points at its list's next unmerged value.\n  const idx = new Array(lists.length).fill(0);\n  // Accumulate the globally sorted result.\n  const out: number[] = [];\n  // One pass of this loop emits one value, until no list has a candidate.\n  for (;;) {\n    // -1 means no non-empty candidate list has been found yet.\n    let best = -1;\n    // Scan the current head of every list.\n    for (let i = 0; i < lists.length; i++) {\n      // An exhausted list cannot supply the next value.\n      if (idx[i] >= lists[i].length) continue;\n      // Remember the list whose current head is smallest.\n      if (best === -1 || lists[i][idx[i]] < lists[best][idx[best]]) best = i;\n    }\n    // No candidate means every list has been exhausted.\n    if (best === -1) break;\n    // Emit the smallest head found during this scan.\n    out.push(lists[best][idx[best]]);\n    // Advance only the list that supplied that value.\n    idx[best]++;\n  }\n  // All values have now been merged in ascending order.\n  return out;\n}\n"
                },
                time: "O(n·k)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "km-kth-smallest-in-lists",
        slug: "kth-smallest-across-lists",
        title: "Kth Smallest Across Lists",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the k-th smallest value across all the lists (1-indexed, counting duplicates).\n\n${LISTS_NOTE}`,
        examples: [
            {
                input: "[[2,6,8],[3,6,7],[1,3,4]], 5",
                output: "4"
            },
            {
                input: "[[1]], 1",
                output: "1"
            },
            {
                input: "[[1,2],[3]], 3",
                output: "3"
            }
        ],
        constraints: [
            "1 <= k <= total number of values"
        ],
        functionName: "kthSmallestInLists",
        starter: {
            js: "function kthSmallestInLists(lists, k) {\n  // The k-th smallest value overall.\n}\n",
            ts: "function kthSmallestInLists(lists: number[][], k: number): number {\n  // The k-th smallest value overall.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            2,
                            6,
                            8
                        ],
                        [
                            3,
                            6,
                            7
                        ],
                        [
                            1,
                            3,
                            4
                        ]
                    ],
                    5
                ],
                expected: 4
            },
            {
                args: [
                    [
                        [
                            1
                        ]
                    ],
                    1
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            3
                        ]
                    ],
                    3
                ],
                expected: 3
            }
        ],
        hidden: [
            {
                args: [
                    [
                        [
                            1,
                            2,
                            3
                        ]
                    ],
                    2
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            5
                        ],
                        [
                            1
                        ],
                        [
                            3
                        ]
                    ],
                    2
                ],
                expected: 3
            },
            {
                args: [
                    [
                        [
                            1,
                            1
                        ],
                        [
                            1
                        ]
                    ],
                    3
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            10,
                            20
                        ],
                        [
                            15
                        ]
                    ],
                    1
                ],
                expected: 10
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
                    4
                ],
                expected: 4
            },
            {
                args: [
                    [
                        [
                            7
                        ]
                    ],
                    1
                ],
                expected: 7
            }
        ],
        hints: [
            "You don't need the full merge — just the first k values of it.",
            "Pop the smallest k times from a min-heap of the values.",
            "Duplicates each take their own rank."
        ],
        solutions: [
            {
                label: "Min-heap, pop k times",
                approach: "Only the first k merged values matter.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthSmallestInLists(lists, k) {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthSmallestInLists(lists: number[][], k: number): number {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
                commentedCode: {
                    js: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction kthSmallestInLists(lists, k) {\n  // A min-heap exposes the remaining values from smallest to largest.\n  const h = new MinHeap();\n  // Insert every value, including duplicates because each occupies its own rank.\n  for (const list of lists) for (const v of list) h.push(v);\n  // This placeholder is replaced by every successful pop.\n  let result = -1;\n  // After k pops, result is exactly the 1-indexed k-th smallest value.\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
                    ts: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction kthSmallestInLists(lists: number[][], k: number): number {\n  // A min-heap exposes the remaining values from smallest to largest.\n  const h = new MinHeap();\n  // Insert every value, including duplicates because each occupies its own rank.\n  for (const list of lists) for (const v of list) h.push(v);\n  // This placeholder is replaced by every successful pop.\n  let result = -1;\n  // After k pops, result is exactly the 1-indexed k-th smallest value.\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Flatten and sort",
                approach: "Combine every value, sort, and index k-1.",
                js: "function kthSmallestInLists(lists, k) {\n  const all = [].concat(...lists).sort((a, b) => a - b);\n  return all[k - 1];\n}\n",
                ts: "function kthSmallestInLists(lists: number[][], k: number): number {\n  const all = ([] as number[]).concat(...lists).sort((a, b) => a - b);\n  return all[k - 1];\n}\n",
                commentedCode: {
                    js: "function kthSmallestInLists(lists, k) {\n  // Flatten the lists, then sort every value into ascending rank order.\n  const all = [].concat(...lists).sort((a, b) => a - b);\n  // Convert the problem's 1-indexed k to the array's 0-indexed position.\n  return all[k - 1];\n}\n",
                    ts: "function kthSmallestInLists(lists: number[][], k: number): number {\n  // Build a typed flattened array, then sort it into ascending rank order.\n  const all = ([] as number[]).concat(...lists).sort((a, b) => a - b);\n  // Convert the problem's 1-indexed k to the array's 0-indexed position.\n  return all[k - 1];\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "km-kth-smallest-matrix",
        slug: "kth-smallest-in-matrix",
        title: "Kth Smallest in a Sorted Matrix",
        difficulty: "medium",
        patternIds: P,
        statement: "Every row of the matrix is sorted ascending. Treat the rows as k sorted lists and return the k-th smallest value overall (1-indexed, counting duplicates).",
        examples: [
            {
                input: "[[1,5,9],[10,11,13],[12,13,15]], 8",
                output: "13"
            },
            {
                input: "[[1]], 1",
                output: "1"
            },
            {
                input: "[[1,2],[1,3]], 2",
                output: "1"
            }
        ],
        constraints: [
            "1 <= k <= total number of values"
        ],
        functionName: "kthSmallestInMatrix",
        starter: {
            js: "function kthSmallestInMatrix(matrix, k) {\n  // The k-th smallest value in the matrix.\n}\n",
            ts: "function kthSmallestInMatrix(matrix: number[][], k: number): number {\n  // The k-th smallest value in the matrix.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            5,
                            9
                        ],
                        [
                            10,
                            11,
                            13
                        ],
                        [
                            12,
                            13,
                            15
                        ]
                    ],
                    8
                ],
                expected: 13
            },
            {
                args: [
                    [
                        [
                            1
                        ]
                    ],
                    1
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            1,
                            3
                        ]
                    ],
                    2
                ],
                expected: 1
            }
        ],
        hidden: [
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
                expected: 3
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
                    4
                ],
                expected: 4
            },
            {
                args: [
                    [
                        [
                            -5
                        ]
                    ],
                    1
                ],
                expected: -5
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            4
                        ]
                    ],
                    2
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            1
                        ]
                    ],
                    4
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            2,
                            6
                        ],
                        [
                            3,
                            7
                        ]
                    ],
                    3
                ],
                expected: 6
            }
        ],
        hints: [
            "Each row is a sorted list — this is the k-way merge in disguise.",
            "Merge conceptually and stop after k values.",
            "A min-heap seeded with the row heads works, as does flattening and sorting."
        ],
        solutions: [
            {
                label: "Min-heap, pop k times",
                approach: "Treat the rows as lists and take the k smallest merged values.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthSmallestInMatrix(matrix, k) {\n  const h = new MinHeap();\n  for (const row of matrix) for (const v of row) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthSmallestInMatrix(matrix: number[][], k: number): number {\n  const h = new MinHeap();\n  for (const row of matrix) for (const v of row) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
                commentedCode: {
                    js: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction kthSmallestInMatrix(matrix, k) {\n  // Treat the sorted matrix rows as a collection of sorted lists.\n  const h = new MinHeap();\n  // Insert every cell so the heap can expose their global ascending order.\n  for (const row of matrix) for (const v of row) h.push(v);\n  // Keep the most recently removed rank.\n  let result = -1;\n  // The k-th removal is the matrix's 1-indexed k-th smallest cell value.\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
                    ts: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction kthSmallestInMatrix(matrix: number[][], k: number): number {\n  // Treat the sorted matrix rows as a collection of sorted lists.\n  const h = new MinHeap();\n  // Insert every cell so the heap can expose their global ascending order.\n  for (const row of matrix) for (const v of row) h.push(v);\n  // Keep the most recently removed rank.\n  let result = -1;\n  // The k-th removal is the matrix's 1-indexed k-th smallest cell value.\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Flatten and sort",
                approach: "Collect every cell, sort, and index k-1.",
                js: "function kthSmallestInMatrix(matrix, k) {\n  const all = [].concat(...matrix).sort((a, b) => a - b);\n  return all[k - 1];\n}\n",
                ts: "function kthSmallestInMatrix(matrix: number[][], k: number): number {\n  const all = ([] as number[]).concat(...matrix).sort((a, b) => a - b);\n  return all[k - 1];\n}\n",
                commentedCode: {
                    js: "function kthSmallestInMatrix(matrix, k) {\n  // Flatten all rows and sort the cells into ascending rank order.\n  const all = [].concat(...matrix).sort((a, b) => a - b);\n  // A 1-indexed rank k lives at zero-based index k - 1.\n  return all[k - 1];\n}\n",
                    ts: "function kthSmallestInMatrix(matrix: number[][], k: number): number {\n  // Build a typed flattened array and sort the cells into ascending rank order.\n  const all = ([] as number[]).concat(...matrix).sort((a, b) => a - b);\n  // A 1-indexed rank k lives at zero-based index k - 1.\n  return all[k - 1];\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "km-smallest-range",
        slug: "smallest-range-covering-lists",
        title: "Smallest Range Covering All Lists",
        difficulty: "hard",
        patternIds: P,
        statement: `Find the smallest range \`[start, end]\` that contains at least one value from **every** list. If several ranges tie on width, return the one with the smaller start. Return \`[]\` when there are no values at all.\n\n${LISTS_NOTE}`,
        examples: [
            {
                input: "[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]",
                output: "[20,24]"
            },
            {
                input: "[[1],[2],[3]]",
                output: "[1,3]"
            },
            {
                input: "[[1,2,3]]",
                output: "[1,1]"
            }
        ],
        constraints: [
            "every list has at least one value"
        ],
        functionName: "smallestRange",
        starter: {
            js: "function smallestRange(lists) {\n  // Narrowest [start, end] hitting every list.\n}\n",
            ts: "function smallestRange(lists: number[][]): number[] {\n  // Narrowest [start, end] hitting every list.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            4,
                            10,
                            15,
                            24,
                            26
                        ],
                        [
                            0,
                            9,
                            12,
                            20
                        ],
                        [
                            5,
                            18,
                            22,
                            30
                        ]
                    ]
                ],
                expected: [
                    20,
                    24
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
                    3
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
                    1
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        [
                            5
                        ]
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
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: [
                    2,
                    2
                ]
            },
            {
                args: [
                    [
                        [
                            1
                        ],
                        [
                            1
                        ]
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
                        [
                            1,
                            3
                        ],
                        [
                            2
                        ]
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
                        [
                            1,
                            5
                        ],
                        [
                            4,
                            6
                        ]
                    ]
                ],
                expected: [
                    4,
                    5
                ]
            },
            {
                args: [
                    [
                        [
                            10
                        ],
                        [
                            20
                        ],
                        [
                            30
                        ]
                    ]
                ],
                expected: [
                    10,
                    30
                ]
            }
        ],
        hints: [
            "Tag every value with the list it came from, then sort all of them together.",
            "Slide a window over that sorted sequence until it covers every list id.",
            "Shrink from the left while the window still covers everything, recording the best."
        ],
        solutions: [
            {
                label: "Tag, sort, slide a window",
                approach: "A sliding window over all tagged values that must cover every list id.",
                js: "function smallestRange(lists) {\n  const items = [];\n  lists.forEach((list, i) => list.forEach((v) => items.push([v, i])));\n  if (items.length === 0) return [];\n  items.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  const need = lists.length;\n  const count = new Map();\n  let have = 0, left = 0;\n  let bestStart = items[0][0], bestEnd = items[items.length - 1][0];\n  for (let right = 0; right < items.length; right++) {\n    const li = items[right][1];\n    count.set(li, (count.get(li) || 0) + 1);\n    if (count.get(li) === 1) have++;\n    while (have === need) {\n      const start = items[left][0], end = items[right][0];\n      if (end - start < bestEnd - bestStart || (end - start === bestEnd - bestStart && start < bestStart)) {\n        bestStart = start; bestEnd = end;\n      }\n      const lo = items[left][1];\n      count.set(lo, count.get(lo) - 1);\n      if (count.get(lo) === 0) have--;\n      left++;\n    }\n  }\n  return [bestStart, bestEnd];\n}\n",
                ts: "function smallestRange(lists: number[][]): number[] {\n  const items: number[][] = [];\n  lists.forEach((list, i) => list.forEach((v) => items.push([v, i])));\n  if (items.length === 0) return [];\n  items.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  const need = lists.length;\n  const count = new Map<number, number>();\n  let have = 0, left = 0;\n  let bestStart = items[0][0], bestEnd = items[items.length - 1][0];\n  for (let right = 0; right < items.length; right++) {\n    const li = items[right][1];\n    count.set(li, (count.get(li) || 0) + 1);\n    if (count.get(li) === 1) have++;\n    while (have === need) {\n      const start = items[left][0], end = items[right][0];\n      if (end - start < bestEnd - bestStart || (end - start === bestEnd - bestStart && start < bestStart)) {\n        bestStart = start; bestEnd = end;\n      }\n      const lo = items[left][1];\n      count.set(lo, (count.get(lo) as number) - 1);\n      if (count.get(lo) === 0) have--;\n      left++;\n    }\n  }\n  return [bestStart, bestEnd];\n}\n",
                commentedCode: {
                    js: "function smallestRange(lists) {\n  // Store [value, source-list index] pairs so coverage remains traceable.\n  const items = [];\n  // Tag every value with the list that it can represent.\n  lists.forEach((list, i) => list.forEach((v) => items.push([v, i])));\n  // With no values there is no possible covering range.\n  if (items.length === 0) return [];\n  // Sort by value, then source index for deterministic ties.\n  items.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  // A valid window must contain this many distinct source-list indices.\n  const need = lists.length;\n  // Count how many values from each source list are inside the window.\n  const count = new Map();\n  // have tracks covered lists; left is the window's first pair.\n  let have = 0, left = 0;\n  // Start with the widest possible value range as the incumbent answer.\n  let bestStart = items[0][0], bestEnd = items[items.length - 1][0];\n  // Expand the right edge one tagged value at a time.\n  for (let right = 0; right < items.length; right++) {\n    // Add the new right-edge value's source list to the window.\n    const li = items[right][1];\n    count.set(li, (count.get(li) || 0) + 1);\n    // Its first occurrence adds one newly covered list.\n    if (count.get(li) === 1) have++;\n    // Once all lists are covered, shrink while coverage remains valid.\n    while (have === need) {\n      // Sorted positions make these the window's numeric endpoints.\n      const start = items[left][0], end = items[right][0];\n      // Prefer a narrower range, then the smaller start on equal widths.\n      if (end - start < bestEnd - bestStart || (end - start === bestEnd - bestStart && start < bestStart)) {\n        bestStart = start; bestEnd = end;\n      }\n      // Remove the left-edge value before advancing the edge.\n      const lo = items[left][1];\n      count.set(lo, count.get(lo) - 1);\n      // Losing a source's last value makes the next window invalid.\n      if (count.get(lo) === 0) have--;\n      left++;\n    }\n  }\n  // Return the best valid endpoints found across all windows.\n  return [bestStart, bestEnd];\n}\n",
                    ts: "function smallestRange(lists: number[][]): number[] {\n  // Store [value, source-list index] pairs so coverage remains traceable.\n  const items: number[][] = [];\n  // Tag every value with the list that it can represent.\n  lists.forEach((list, i) => list.forEach((v) => items.push([v, i])));\n  // With no values there is no possible covering range.\n  if (items.length === 0) return [];\n  // Sort by value, then source index for deterministic ties.\n  items.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  // A valid window must contain this many distinct source-list indices.\n  const need = lists.length;\n  // Count how many values from each source list are inside the window.\n  const count = new Map<number, number>();\n  // have tracks covered lists; left is the window's first pair.\n  let have = 0, left = 0;\n  // Start with the widest possible value range as the incumbent answer.\n  let bestStart = items[0][0], bestEnd = items[items.length - 1][0];\n  // Expand the right edge one tagged value at a time.\n  for (let right = 0; right < items.length; right++) {\n    // Add the new right-edge value's source list to the window.\n    const li = items[right][1];\n    count.set(li, (count.get(li) || 0) + 1);\n    // Its first occurrence adds one newly covered list.\n    if (count.get(li) === 1) have++;\n    // Once all lists are covered, shrink while coverage remains valid.\n    while (have === need) {\n      // Sorted positions make these the window's numeric endpoints.\n      const start = items[left][0], end = items[right][0];\n      // Prefer a narrower range, then the smaller start on equal widths.\n      if (end - start < bestEnd - bestStart || (end - start === bestEnd - bestStart && start < bestStart)) {\n        bestStart = start; bestEnd = end;\n      }\n      // Remove the left-edge value before advancing the edge.\n      const lo = items[left][1];\n      count.set(lo, (count.get(lo) as number) - 1);\n      // Losing a source's last value makes the next window invalid.\n      if (count.get(lo) === 0) have--;\n      left++;\n    }\n  }\n  // Return the best valid endpoints found across all windows.\n  return [bestStart, bestEnd];\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Try each start",
                approach: "For every tagged value, extend rightward until all lists are covered.",
                js: "function smallestRange(lists) {\n  const all = [];\n  lists.forEach((l, i) => l.forEach((v) => all.push([v, i])));\n  if (all.length === 0) return [];\n  all.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  const need = lists.length;\n  let best = null;\n  for (let i = 0; i < all.length; i++) {\n    const seen = new Set();\n    for (let j = i; j < all.length; j++) {\n      seen.add(all[j][1]);\n      if (seen.size === need) {\n        const start = all[i][0], end = all[j][0];\n        if (!best || end - start < best[1] - best[0]) best = [start, end];\n        break;\n      }\n    }\n  }\n  return best ? best : [];\n}\n",
                ts: "function smallestRange(lists: number[][]): number[] {\n  const all: number[][] = [];\n  lists.forEach((l, i) => l.forEach((v) => all.push([v, i])));\n  if (all.length === 0) return [];\n  all.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  const need = lists.length;\n  let best: number[] | null = null;\n  for (let i = 0; i < all.length; i++) {\n    const seen = new Set<number>();\n    for (let j = i; j < all.length; j++) {\n      seen.add(all[j][1]);\n      if (seen.size === need) {\n        const start = all[i][0], end = all[j][0];\n        if (!best || end - start < best[1] - best[0]) best = [start, end];\n        break;\n      }\n    }\n  }\n  return best ? best : [];\n}\n",
                commentedCode: {
                    js: "function smallestRange(lists) {\n  // Store every value beside the index of its source list.\n  const all = [];\n  lists.forEach((l, i) => l.forEach((v) => all.push([v, i])));\n  // No tagged values means no range can cover the lists.\n  if (all.length === 0) return [];\n  // Sort by value so every candidate interval is a contiguous slice.\n  all.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  // A covering interval must encounter every source-list index.\n  const need = lists.length;\n  // null records that no valid interval has been found yet.\n  let best = null;\n  // Try each sorted value as a possible left endpoint.\n  for (let i = 0; i < all.length; i++) {\n    // Track the source lists covered from this chosen start.\n    const seen = new Set();\n    // Extend the right endpoint until the interval covers every list.\n    for (let j = i; j < all.length; j++) {\n      seen.add(all[j][1]);\n      if (seen.size === need) {\n        // The first covering end is the narrowest one for this start.\n        const start = all[i][0], end = all[j][0];\n        // Sorted start order naturally preserves the smaller start on width ties.\n        if (!best || end - start < best[1] - best[0]) best = [start, end];\n        break;\n      }\n    }\n  }\n  // Return the narrowest covering range, or empty if none was possible.\n  return best ? best : [];\n}\n",
                    ts: "function smallestRange(lists: number[][]): number[] {\n  // Store every value beside the index of its source list.\n  const all: number[][] = [];\n  lists.forEach((l, i) => l.forEach((v) => all.push([v, i])));\n  // No tagged values means no range can cover the lists.\n  if (all.length === 0) return [];\n  // Sort by value so every candidate interval is a contiguous slice.\n  all.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  // A covering interval must encounter every source-list index.\n  const need = lists.length;\n  // null records that no valid interval has been found yet.\n  let best: number[] | null = null;\n  // Try each sorted value as a possible left endpoint.\n  for (let i = 0; i < all.length; i++) {\n    // Track the source lists covered from this chosen start.\n    const seen = new Set<number>();\n    // Extend the right endpoint until the interval covers every list.\n    for (let j = i; j < all.length; j++) {\n      seen.add(all[j][1]);\n      if (seen.size === need) {\n        // The first covering end is the narrowest one for this start.\n        const start = all[i][0], end = all[j][0];\n        // Sorted start order naturally preserves the smaller start on width ties.\n        if (!best || end - start < best[1] - best[0]) best = [start, end];\n        break;\n      }\n    }\n  }\n  // Return the narrowest covering range, or empty if none was possible.\n  return best ? best : [];\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "km-largest-across",
        slug: "largest-across-lists",
        title: "Largest Across the Lists",
        difficulty: "easy",
        patternIds: P,
        statement: `Return the largest value found in any of the lists, or -1 if every list is empty.\n\n${LISTS_NOTE}`,
        examples: [
            {
                input: "[[1,4],[2,3],[5]]",
                output: "5"
            },
            {
                input: "[[],[]]",
                output: "-1"
            },
            {
                input: "[[7]]",
                output: "7"
            }
        ],
        constraints: [
            "0 <= number of lists <= 1000"
        ],
        functionName: "largestAcross",
        starter: {
            js: "function largestAcross(lists) {\n  // Largest value across all lists, or -1.\n}\n",
            ts: "function largestAcross(lists: number[][]): number {\n  // Largest value across all lists, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            4
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            5
                        ]
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    [
                        [],
                        []
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        [
                            7
                        ]
                    ]
                ],
                expected: 7
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
                        []
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        [
                            3
                        ],
                        [
                            1
                        ],
                        [
                            2
                        ]
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        [
                            0
                        ],
                        [
                            5
                        ]
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    [
                        [
                            10,
                            20
                        ],
                        [
                            5,
                            15
                        ]
                    ]
                ],
                expected: 20
            },
            {
                args: [
                    [
                        [
                            2,
                            2
                        ],
                        [
                            2
                        ]
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "Each list is sorted, so its largest value is its last element.",
            "Compare only those tails.",
            "Skip empty lists."
        ],
        solutions: [
            {
                label: "Compare the tails",
                approach: "Take the maximum of each non-empty list's last value.",
                js: "function largestAcross(lists) {\n  let best = -Infinity;\n  for (const list of lists) {\n    if (list.length > 0 && list[list.length - 1] > best) best = list[list.length - 1];\n  }\n  return best === -Infinity ? -1 : best;\n}\n",
                ts: "function largestAcross(lists: number[][]): number {\n  let best = -Infinity;\n  for (const list of lists) {\n    if (list.length > 0 && list[list.length - 1] > best) best = list[list.length - 1];\n  }\n  return best === -Infinity ? -1 : best;\n}\n",
                commentedCode: {
                    js: "function largestAcross(lists) {\n  // -Infinity is a sentinel smaller than every real candidate.\n  let best = -Infinity;\n  // Inspect each sorted list once.\n  for (const list of lists) {\n    // A sorted list's last value is its only possible global-maximum candidate.\n    if (list.length > 0 && list[list.length - 1] > best) best = list[list.length - 1];\n  }\n  // If no list supplied a tail, every list was empty.\n  return best === -Infinity ? -1 : best;\n}\n",
                    ts: "function largestAcross(lists: number[][]): number {\n  // -Infinity is a sentinel smaller than every real candidate.\n  let best = -Infinity;\n  // Inspect each sorted list once.\n  for (const list of lists) {\n    // A sorted list's last value is its only possible global-maximum candidate.\n    if (list.length > 0 && list[list.length - 1] > best) best = list[list.length - 1];\n  }\n  // If no list supplied a tail, every list was empty.\n  return best === -Infinity ? -1 : best;\n}\n"
                },
                time: "O(k)",
                space: "O(1)"
            },
            {
                label: "Flatten and take the maximum",
                approach: "Combine every value and take the largest.",
                js: "function largestAcross(lists) {\n  const all = [].concat(...lists);\n  return all.length === 0 ? -1 : Math.max(...all);\n}\n",
                ts: "function largestAcross(lists: number[][]): number {\n  const all = ([] as number[]).concat(...lists);\n  return all.length === 0 ? -1 : Math.max(...all);\n}\n",
                commentedCode: {
                    js: "function largestAcross(lists) {\n  // Flatten every inner list into one array of candidates.\n  const all = [].concat(...lists);\n  // Avoid applying Math.max to no values; otherwise return the maximum.\n  return all.length === 0 ? -1 : Math.max(...all);\n}\n",
                    ts: "function largestAcross(lists: number[][]): number {\n  // Start with a typed empty array, then flatten every inner list into it.\n  const all = ([] as number[]).concat(...lists);\n  // Avoid applying Math.max to no values; otherwise return the maximum.\n  return all.length === 0 ? -1 : Math.max(...all);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "km-merge-and-dedupe",
        slug: "merge-and-dedupe",
        title: "Merge and Deduplicate",
        difficulty: "medium",
        patternIds: P,
        statement: `Merge every list into one ascending list containing each distinct value exactly once.\n\n${LISTS_NOTE}`,
        examples: [
            {
                input: "[[1,4,5],[1,3,4],[2,6]]",
                output: "[1,2,3,4,5,6]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[[1,1],[1]]",
                output: "[1]"
            }
        ],
        constraints: [
            "0 <= number of lists <= 1000"
        ],
        functionName: "mergeAndDedupe",
        starter: {
            js: "function mergeAndDedupe(lists) {\n  // Sorted, distinct values from all lists.\n}\n",
            ts: "function mergeAndDedupe(lists: number[][]): number[] {\n  // Sorted, distinct values from all lists.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            4,
                            5
                        ],
                        [
                            1,
                            3,
                            4
                        ],
                        [
                            2,
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
                        [
                            1,
                            1
                        ],
                        [
                            1
                        ]
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
                        []
                    ]
                ],
                expected: []
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
            },
            {
                args: [
                    [
                        [
                            3,
                            3
                        ],
                        [
                            3
                        ]
                    ]
                ],
                expected: [
                    3
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
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
                            5
                        ],
                        [
                            1
                        ],
                        [
                            5
                        ]
                    ]
                ],
                expected: [
                    1,
                    5
                ]
            },
            {
                args: [
                    [
                        [
                            0,
                            0,
                            0
                        ]
                    ]
                ],
                expected: [
                    0
                ]
            }
        ],
        hints: [
            "Merge first, then drop repeats — or use a set and sort at the end.",
            "During a merge, skip a value equal to the one you just emitted.",
            "A Set removes duplicates in one step."
        ],
        solutions: [
            {
                label: "Set then sort",
                approach: "Collect distinct values and order them.",
                js: "function mergeAndDedupe(lists) {\n  const set = new Set();\n  for (const list of lists) for (const v of list) set.add(v);\n  return [...set].sort((a, b) => a - b);\n}\n",
                ts: "function mergeAndDedupe(lists: number[][]): number[] {\n  const set = new Set<number>();\n  for (const list of lists) for (const v of list) set.add(v);\n  return [...set].sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function mergeAndDedupe(lists) {\n  // A Set keeps only one copy of each value encountered.\n  const set = new Set();\n  // Add every value from every list; repeated values do not change the Set.\n  for (const list of lists) for (const v of list) set.add(v);\n  // Convert the distinct values to an array and restore ascending order.\n  return [...set].sort((a, b) => a - b);\n}\n",
                    ts: "function mergeAndDedupe(lists: number[][]): number[] {\n  // A Set keeps only one copy of each value encountered.\n  const set = new Set<number>();\n  // Add every value from every list; repeated values do not change the Set.\n  for (const list of lists) for (const v of list) set.add(v);\n  // Convert the distinct values to an array and restore ascending order.\n  return [...set].sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Heap drain, skipping repeats",
                approach: "Pop values in order and skip any equal to the previous one.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction mergeAndDedupe(lists) {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  const out = [];\n  while (h.size() > 0) {\n    const v = h.pop();\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n  return out;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction mergeAndDedupe(lists: number[][]): number[] {\n  const h = new MinHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  const out: number[] = [];\n  while (h.size() > 0) {\n    const v = h.pop();\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n  return out;\n}\n`,
                commentedCode: {
                    js: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction mergeAndDedupe(lists) {\n  // The min-heap will expose all values in ascending order.\n  const h = new MinHeap();\n  // Insert every value, including duplicates that will be filtered later.\n  for (const list of lists) for (const v of list) h.push(v);\n  // Collect only the first occurrence of each popped value.\n  const out = [];\n  // Drain values from smallest to largest.\n  while (h.size() > 0) {\n    const v = h.pop();\n    // Equal values are adjacent in pop order, so compare with the last output.\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n  // The result is both ascending and duplicate-free.\n  return out;\n}\n`,
                    ts: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction mergeAndDedupe(lists: number[][]): number[] {\n  // The min-heap will expose all values in ascending order.\n  const h = new MinHeap();\n  // Insert every value, including duplicates that will be filtered later.\n  for (const list of lists) for (const v of list) h.push(v);\n  // Collect only the first occurrence of each popped value.\n  const out: number[] = [];\n  // Drain values from smallest to largest.\n  while (h.size() > 0) {\n    const v = h.pop();\n    // Equal values are adjacent in pop order, so compare with the last output.\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n  // The result is both ascending and duplicate-free.\n  return out;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "km-median-of-lists",
        slug: "median-across-lists",
        title: "Median Across the Lists",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the median of all values across the lists. For an even total, average the two middle values. With no values at all, return 0.\n\n${LISTS_NOTE}`,
        examples: [
            {
                input: "[[1,3],[2]]",
                output: "2"
            },
            {
                input: "[[1,2],[3,4]]",
                output: "2.5"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= number of lists <= 1000"
        ],
        functionName: "medianAcrossLists",
        starter: {
            js: "function medianAcrossLists(lists) {\n  // Median of every value across the lists.\n}\n",
            ts: "function medianAcrossLists(lists: number[][]): number {\n  // Median of every value across the lists.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            2
                        ]
                    ]
                ],
                expected: 2
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
                    ]
                ],
                expected: 2.5
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
                        []
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            1
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1
                        ],
                        [
                            2
                        ]
                    ]
                ],
                expected: 1.5
            },
            {
                args: [
                    [
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            1
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            5
                        ],
                        [
                            2,
                            6
                        ]
                    ]
                ],
                expected: 3.5
            },
            {
                args: [
                    [
                        [
                            0
                        ],
                        [
                            0
                        ]
                    ]
                ],
                expected: 0
            }
        ],
        hints: [
            "Merge the lists conceptually, then it's an ordinary median.",
            "You only need the middle one or two values of the merged sequence.",
            "Handle the no-values case before indexing."
        ],
        solutions: [
            {
                label: "Flatten, sort, take the middle",
                approach: "Combine the values and read the centre.",
                js: "function medianAcrossLists(lists) {\n  const all = [].concat(...lists).sort((a, b) => a - b);\n  if (all.length === 0) return 0;\n  const mid = Math.floor(all.length / 2);\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
                ts: "function medianAcrossLists(lists: number[][]): number {\n  const all = ([] as number[]).concat(...lists).sort((a, b) => a - b);\n  if (all.length === 0) return 0;\n  const mid = Math.floor(all.length / 2);\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
                commentedCode: {
                    js: "function medianAcrossLists(lists) {\n  // Flatten and sort so array positions correspond to global ranks.\n  const all = [].concat(...lists).sort((a, b) => a - b);\n  // The problem defines the median of no values as 0.\n  if (all.length === 0) return 0;\n  // For odd lengths this is the middle; for even lengths it is the upper middle.\n  const mid = Math.floor(all.length / 2);\n  // Use one middle value when odd, or average both middle values when even.\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
                    ts: "function medianAcrossLists(lists: number[][]): number {\n  // Build a typed flattened array and sort it into global rank order.\n  const all = ([] as number[]).concat(...lists).sort((a, b) => a - b);\n  // The problem defines the median of no values as 0.\n  if (all.length === 0) return 0;\n  // For odd lengths this is the middle; for even lengths it is the upper middle.\n  const mid = Math.floor(all.length / 2);\n  // Use one middle value when odd, or average both middle values when even.\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Heap up to the middle",
                approach: "Pop merged values until you reach the middle position(s).",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction medianAcrossLists(lists) {\n  const h = new MinHeap();\n  let total = 0;\n  for (const list of lists) for (const v of list) { h.push(v); total++; }\n  if (total === 0) return 0;\n  const mid = Math.floor(total / 2);\n  let prev = 0, cur = 0;\n  for (let i = 0; i <= mid; i++) { prev = cur; cur = h.pop(); }\n  return total % 2 === 1 ? cur : (prev + cur) / 2;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction medianAcrossLists(lists: number[][]): number {\n  const h = new MinHeap();\n  let total = 0;\n  for (const list of lists) for (const v of list) { h.push(v); total++; }\n  if (total === 0) return 0;\n  const mid = Math.floor(total / 2);\n  let prev = 0, cur = 0;\n  for (let i = 0; i <= mid; i++) { prev = cur; cur = h.pop(); }\n  return total % 2 === 1 ? cur : (prev + cur) / 2;\n}\n`,
                commentedCode: {
                    js: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction medianAcrossLists(lists) {\n  // A min-heap reveals the combined values in ascending rank order.\n  const h = new MinHeap();\n  // Count values while loading them so the middle rank is known.\n  let total = 0;\n  for (const list of lists) for (const v of list) { h.push(v); total++; }\n  // The problem defines the empty collection's median as 0.\n  if (total === 0) return 0;\n  // This is the middle rank for odd totals and the upper middle for even totals.\n  const mid = Math.floor(total / 2);\n  // Keep both the last pop and the pop immediately before it.\n  let prev = 0, cur = 0;\n  // Stop as soon as the upper-middle value has been removed.\n  for (let i = 0; i <= mid; i++) { prev = cur; cur = h.pop(); }\n  // Odd totals use cur; even totals average the two middle values.\n  return total % 2 === 1 ? cur : (prev + cur) / 2;\n}\n`,
                    ts: `${COMMENTED_MIN_HEAP_SOURCE}\nfunction medianAcrossLists(lists: number[][]): number {\n  // A min-heap reveals the combined values in ascending rank order.\n  const h = new MinHeap();\n  // Count values while loading them so the middle rank is known.\n  let total = 0;\n  for (const list of lists) for (const v of list) { h.push(v); total++; }\n  // The problem defines the empty collection's median as 0.\n  if (total === 0) return 0;\n  // This is the middle rank for odd totals and the upper middle for even totals.\n  const mid = Math.floor(total / 2);\n  // Keep both the last pop and the pop immediately before it.\n  let prev = 0, cur = 0;\n  // Stop as soon as the upper-middle value has been removed.\n  for (let i = 0; i <= mid; i++) { prev = cur; cur = h.pop(); }\n  // Odd totals use cur; even totals average the two middle values.\n  return total % 2 === 1 ? cur : (prev + cur) / 2;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "km-kth-largest-in-lists",
        slug: "kth-largest-across-lists",
        title: "Kth Largest Across Lists",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the k-th largest value across all the lists (1-indexed, counting duplicates).\n\n${LISTS_NOTE}`,
        examples: [
            {
                input: "[[2,6,8],[3,6,7],[1,3,4]], 3",
                output: "6"
            },
            {
                input: "[[1]], 1",
                output: "1"
            },
            {
                input: "[[1,2],[3]], 1",
                output: "3"
            }
        ],
        constraints: [
            "1 <= k <= total number of values"
        ],
        functionName: "kthLargestInLists",
        starter: {
            js: "function kthLargestInLists(lists, k) {\n  // The k-th largest value overall.\n}\n",
            ts: "function kthLargestInLists(lists: number[][], k: number): number {\n  // The k-th largest value overall.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            2,
                            6,
                            8
                        ],
                        [
                            3,
                            6,
                            7
                        ],
                        [
                            1,
                            3,
                            4
                        ]
                    ],
                    3
                ],
                expected: 6
            },
            {
                args: [
                    [
                        [
                            1
                        ]
                    ],
                    1
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            3
                        ]
                    ],
                    1
                ],
                expected: 3
            }
        ],
        hidden: [
            {
                args: [
                    [
                        [
                            1,
                            2,
                            3
                        ]
                    ],
                    2
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            5
                        ],
                        [
                            1
                        ],
                        [
                            3
                        ]
                    ],
                    2
                ],
                expected: 3
            },
            {
                args: [
                    [
                        [
                            1,
                            1
                        ],
                        [
                            1
                        ]
                    ],
                    3
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            10,
                            20
                        ],
                        [
                            15
                        ]
                    ],
                    1
                ],
                expected: 20
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
                    4
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            7
                        ]
                    ],
                    1
                ],
                expected: 7
            }
        ],
        hints: [
            "It's the same merge, walked from the largest end.",
            "A max-heap popped k times gives the answer.",
            "Or sort everything descending and index k-1."
        ],
        solutions: [
            {
                label: "Max-heap, pop k times",
                approach: "Take the k largest merged values.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction kthLargestInLists(lists, k) {\n  const h = new MaxHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction kthLargestInLists(lists: number[][], k: number): number {\n  const h = new MaxHeap();\n  for (const list of lists) for (const v of list) h.push(v);\n  let result = -1;\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
                commentedCode: {
                    js: `${COMMENTED_MAX_HEAP_SOURCE}\nfunction kthLargestInLists(lists, k) {\n  // A max-heap exposes the remaining values from largest to smallest.\n  const h = new MaxHeap();\n  // Insert every value, including duplicates because each occupies its own rank.\n  for (const list of lists) for (const v of list) h.push(v);\n  // This placeholder is replaced by every successful pop.\n  let result = -1;\n  // After k pops, result is exactly the 1-indexed k-th largest value.\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`,
                    ts: `${COMMENTED_MAX_HEAP_SOURCE}\nfunction kthLargestInLists(lists: number[][], k: number): number {\n  // A max-heap exposes the remaining values from largest to smallest.\n  const h = new MaxHeap();\n  // Insert every value, including duplicates because each occupies its own rank.\n  for (const list of lists) for (const v of list) h.push(v);\n  // This placeholder is replaced by every successful pop.\n  let result = -1;\n  // After k pops, result is exactly the 1-indexed k-th largest value.\n  for (let i = 0; i < k; i++) result = h.pop();\n  return result;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Flatten and sort descending",
                approach: "Combine every value, sort largest-first, and index k-1.",
                js: "function kthLargestInLists(lists, k) {\n  const all = [].concat(...lists).sort((a, b) => b - a);\n  return all[k - 1];\n}\n",
                ts: "function kthLargestInLists(lists: number[][], k: number): number {\n  const all = ([] as number[]).concat(...lists).sort((a, b) => b - a);\n  return all[k - 1];\n}\n",
                commentedCode: {
                    js: "function kthLargestInLists(lists, k) {\n  // Flatten the lists, then sort every value from largest to smallest.\n  const all = [].concat(...lists).sort((a, b) => b - a);\n  // Convert the problem's 1-indexed k to the array's 0-indexed position.\n  return all[k - 1];\n}\n",
                    ts: "function kthLargestInLists(lists: number[][], k: number): number {\n  // Build a typed flattened array, then sort it from largest to smallest.\n  const all = ([] as number[]).concat(...lists).sort((a, b) => b - a);\n  // Convert the problem's 1-indexed k to the array's 0-indexed position.\n  return all[k - 1];\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    }
];
const kWayMergeProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const kWayMergeMcqs = [
    {
        id: "s5-km-heapsize",
        kind: "mcq",
        prompt: "In the classic k-way merge, the min-heap holds:",
        options: [
            "every element (size n)",
            "one candidate from each list (size k)",
            "only the single smallest element",
            "nothing — a heap isn't used"
        ],
        answerIndex: 1,
        explanation: "You only ever need the current head of each list; the heap picks the smallest of those k."
    },
    {
        id: "s5-km-time",
        kind: "mcq",
        prompt: "Merging k sorted lists holding n values in total, using a size-k min-heap, costs:",
        options: [
            "O(n)",
            "O(n log k)",
            "O(n log n)",
            "O(k)"
        ],
        answerIndex: 1,
        explanation: "Each of the n values is pushed and popped once from a heap capped at size k."
    }
];
const kWayMergeModule = {
    id: "m-pat-k-way-merge",
    stageId: S,
    title: "K-Way Merge",
    kind: "patternModule",
    summary: "Merge k sorted sequences by always taking the smallest available head — with a heap, O(n log k).",
    lessonSections: [
        {
            heading: "Always take the smallest head",
            body: `Merging two sorted lists is easy: compare the two heads, take the smaller. With **k** lists the idea is identical — the next value of the merged output is always the smallest of the k current heads. Scanning all k heads each time costs O(n·k); a **min-heap** of those k candidates brings it down to **O(n log k)**.

\`\`\`js
// Two-way merge — the shape a k-way merge generalises
let i = 0, j = 0, out = [];
while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);
while (i < a.length) out.push(a[i++]);
while (j < b.length) out.push(b[j++]);
\`\`\`

The key insight is that you never need more than **one candidate per list** in the heap at a time.`
        },
        {
            heading: "Recognition cues",
            body: `Reach for a k-way merge when you see:

- **several sorted** inputs that must become one sorted output,
- the **k-th smallest / largest** across multiple sorted lists,
- a matrix whose **rows are each sorted** — those rows are just k lists,
- the **median** of several sorted sequences,
- the **smallest range** that touches every list — same merge, but tracking which list each value came from.

If the inputs weren't sorted, you'd just concatenate and sort; the sortedness is what makes the merge cheap.`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// K pointers (heap-free version of the same idea)
const idx = new Array(lists.length).fill(0);
for (;;) {
  let best = -1;
  for (let i = 0; i < lists.length; i++) {
    if (idx[i] >= lists[i].length) continue;          // exhausted
    if (best === -1 || lists[i][idx[i]] < lists[best][idx[best]]) best = i;
  }
  if (best === -1) break;                              // all exhausted
  out.push(lists[best][idx[best]]);
  idx[best]++;                                         // only advance the list you consumed
}
\`\`\`

**Pitfalls:** advancing every pointer instead of only the list you took from; forgetting **empty lists** (they must be skipped, not indexed); losing track of *which list* a heap value came from when the problem needs that (tag the values); and stopping the merge early when one list empties rather than when they all do. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "km-merge-two",
    drillProblemIds: [
        "km-merge-two",
        "km-smallest-across",
        "km-merge-k-lists",
        "km-kth-smallest-in-lists",
        "km-kth-smallest-matrix",
        "km-smallest-range"
    ],
    testPoolProblemIds: [
        "km-largest-across",
        "km-merge-and-dedupe",
        "km-median-of-lists",
        "km-kth-largest-in-lists"
    ],
    complexityQuestionIds: [
        "s5-km-heapsize",
        "s5-km-time"
    ],
    badgeId: "badge-pat-k-way-merge",
    prerequisiteModuleIds: [
        "m-pat-top-k"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage5/mergeIntervals.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeIntervalsMcqs",
    ()=>mergeIntervalsMcqs,
    "mergeIntervalsModule",
    ()=>mergeIntervalsModule,
    "mergeIntervalsProblems",
    ()=>mergeIntervalsProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s5";
const P = [
    "merge-intervals"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "mi-is-overlapping",
        slug: "intervals-overlap",
        title: "Do Two Intervals Overlap?",
        difficulty: "easy",
        patternIds: P,
        statement: "Each interval is `[start, end]`. Return `true` if the two intervals share at least one point (touching endpoints count as overlapping).",
        examples: [
            {
                input: "[1,3], [2,4]",
                output: "true"
            },
            {
                input: "[1,2], [3,4]",
                output: "false"
            },
            {
                input: "[1,4], [4,5]",
                output: "true"
            }
        ],
        constraints: [
            "start <= end for both intervals"
        ],
        functionName: "isOverlapping",
        starter: {
            js: "function isOverlapping(a, b) {\n  // True if the intervals share a point.\n}\n",
            ts: "function isOverlapping(a: number[], b: number[]): boolean {\n  // True if the intervals share a point.\n  return false;\n}\n"
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
                expected: true
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    [
                        3,
                        4
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        1,
                        4
                    ],
                    [
                        4,
                        5
                    ]
                ],
                expected: true
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
                        1
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        0,
                        5
                    ],
                    [
                        1,
                        2
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        5,
                        6
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
                    [
                        1,
                        2
                    ],
                    [
                        2,
                        3
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        10
                    ],
                    [
                        11,
                        12
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        -5,
                        0
                    ],
                    [
                        0,
                        5
                    ]
                ],
                expected: true
            }
        ],
        hints: [
            "It's easier to describe when they *don't* overlap: one ends before the other starts.",
            "They overlap exactly when a.start <= b.end and b.start <= a.end.",
            "Order doesn't matter — the condition is symmetric."
        ],
        solutions: [
            {
                label: "Direct condition",
                approach: "Each interval must begin no later than the other ends.",
                js: "function isOverlapping(a, b) {\n  return a[0] <= b[1] && b[0] <= a[1];\n}\n",
                ts: "function isOverlapping(a: number[], b: number[]): boolean {\n  return a[0] <= b[1] && b[0] <= a[1];\n}\n",
                commentedCode: {
                    js: "function isOverlapping(a, b) {\n  // Both starts must fall on or before the other interval's end.\n  // The inclusive comparisons make intervals that touch at an endpoint overlap.\n  return a[0] <= b[1] && b[0] <= a[1];\n}\n",
                    ts: "function isOverlapping(a: number[], b: number[]): boolean {\n  // Both starts must fall on or before the other interval's end.\n  // The inclusive comparisons make intervals that touch at an endpoint overlap.\n  return a[0] <= b[1] && b[0] <= a[1];\n}\n"
                },
                time: "O(1)",
                space: "O(1)"
            },
            {
                label: "Negate the disjoint case",
                approach: "They fail to overlap only when one lies entirely before the other.",
                js: "function isOverlapping(a, b) {\n  const disjoint = a[1] < b[0] || b[1] < a[0];\n  return !disjoint;\n}\n",
                ts: "function isOverlapping(a: number[], b: number[]): boolean {\n  const disjoint = a[1] < b[0] || b[1] < a[0];\n  return !disjoint;\n}\n",
                commentedCode: {
                    js: "function isOverlapping(a, b) {\n  // The intervals are disjoint only if either one ends before the other starts.\n  // Strict comparisons mean touching endpoints are not considered disjoint.\n  const disjoint = a[1] < b[0] || b[1] < a[0];\n  // Negating the only disjoint cases leaves every kind of overlap.\n  return !disjoint;\n}\n",
                    ts: "function isOverlapping(a: number[], b: number[]): boolean {\n  // The intervals are disjoint only if either one ends before the other starts.\n  // Strict comparisons mean touching endpoints are not considered disjoint.\n  const disjoint = a[1] < b[0] || b[1] < a[0];\n  // Negating the only disjoint cases leaves every kind of overlap.\n  return !disjoint;\n}\n"
                },
                time: "O(1)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mi-count-overlapping",
        slug: "count-intervals-containing",
        title: "Intervals Containing a Point",
        difficulty: "easy",
        patternIds: P,
        statement: "Return how many of the given intervals contain `point` (inclusive of both endpoints).",
        examples: [
            {
                input: "[[1,3],[2,5],[6,7]], 2",
                output: "2"
            },
            {
                input: "[[1,3]], 5",
                output: "0"
            },
            {
                input: "[], 1",
                output: "0"
            }
        ],
        constraints: [
            "0 <= intervals.length <= 10000"
        ],
        functionName: "countContaining",
        starter: {
            js: "function countContaining(intervals, point) {\n  // How many intervals contain the point.\n}\n",
            ts: "function countContaining(intervals: number[][], point: number): number {\n  // How many intervals contain the point.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            5
                        ],
                        [
                            6,
                            7
                        ]
                    ],
                    2
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ]
                    ],
                    5
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
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            5
                        ],
                        [
                            6,
                            7
                        ]
                    ],
                    6
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            5
                        ],
                        [
                            6,
                            7
                        ]
                    ],
                    3
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            0,
                            10
                        ]
                    ],
                    0
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            0,
                            10
                        ]
                    ],
                    10
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ]
                    ],
                    2
                ],
                expected: 2
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
                expected: 0
            }
        ],
        hints: [
            "An interval contains the point when start <= point <= end.",
            "Count the intervals satisfying that test.",
            "return intervals.filter(([s, e]) => s <= point && point <= e).length."
        ],
        solutions: [
            {
                label: "Filter and count",
                approach: "Test each interval against the point.",
                js: "function countContaining(intervals, point) {\n  return intervals.filter(([s, e]) => s <= point && point <= e).length;\n}\n",
                ts: "function countContaining(intervals: number[][], point: number): number {\n  return intervals.filter(([s, e]) => s <= point && point <= e).length;\n}\n",
                commentedCode: {
                    js: "function countContaining(intervals, point) {\n  // Keep exactly the intervals whose inclusive bounds surround the point.\n  // The filtered array's length is the number of containing intervals.\n  return intervals.filter(([s, e]) => s <= point && point <= e).length;\n}\n",
                    ts: "function countContaining(intervals: number[][], point: number): number {\n  // Keep exactly the intervals whose inclusive bounds surround the point.\n  // The filtered array's length is the number of containing intervals.\n  return intervals.filter(([s, e]) => s <= point && point <= e).length;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Accumulate",
                approach: "Tally matches in a loop.",
                js: "function countContaining(intervals, point) {\n  let count = 0;\n  for (const [s, e] of intervals) if (s <= point && point <= e) count++;\n  return count;\n}\n",
                ts: "function countContaining(intervals: number[][], point: number): number {\n  let count = 0;\n  for (const [s, e] of intervals) if (s <= point && point <= e) count++;\n  return count;\n}\n",
                commentedCode: {
                    js: "function countContaining(intervals, point) {\n  // Accumulate the number of intervals that contain the point.\n  let count = 0;\n  // Examine each interval's start and end.\n  for (const [s, e] of intervals)\n    // Inclusive comparisons count a point on either endpoint.\n    if (s <= point && point <= e) count++;\n  // Return the completed tally.\n  return count;\n}\n",
                    ts: "function countContaining(intervals: number[][], point: number): number {\n  // Accumulate the number of intervals that contain the point.\n  let count = 0;\n  // Examine each interval's start and end.\n  for (const [s, e] of intervals)\n    // Inclusive comparisons count a point on either endpoint.\n    if (s <= point && point <= e) count++;\n  // Return the completed tally.\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mi-merge",
        slug: "merge-intervals",
        title: "Merge Intervals",
        difficulty: "medium",
        patternIds: P,
        statement: "Merge all overlapping intervals (touching endpoints merge too) and return the result sorted by start.",
        examples: [
            {
                input: "[[1,3],[2,6],[8,10],[15,18]]",
                output: "[[1,6],[8,10],[15,18]]"
            },
            {
                input: "[[1,4],[4,5]]",
                output: "[[1,5]]"
            },
            {
                input: "[]",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= intervals.length <= 10000",
            "intervals may arrive in any order"
        ],
        functionName: "mergeIntervals",
        starter: {
            js: "function mergeIntervals(intervals) {\n  // Merge overlapping intervals, sorted by start.\n}\n",
            ts: "function mergeIntervals(intervals: number[][]): number[][] {\n  // Merge overlapping intervals, sorted by start.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            6
                        ],
                        [
                            8,
                            10
                        ],
                        [
                            15,
                            18
                        ]
                    ]
                ],
                expected: [
                    [
                        1,
                        6
                    ],
                    [
                        8,
                        10
                    ],
                    [
                        15,
                        18
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            4
                        ],
                        [
                            4,
                            5
                        ]
                    ]
                ],
                expected: [
                    [
                        1,
                        5
                    ]
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
                        [
                            1,
                            4
                        ],
                        [
                            0,
                            4
                        ]
                    ]
                ],
                expected: [
                    [
                        0,
                        4
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            4
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: [
                    [
                        1,
                        4
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            4
                        ],
                        [
                            5,
                            6
                        ]
                    ]
                ],
                expected: [
                    [
                        1,
                        4
                    ],
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            2,
                            3
                        ],
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: [
                    [
                        1,
                        3
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            10
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            4,
                            5
                        ],
                        [
                            6,
                            7
                        ]
                    ]
                ],
                expected: [
                    [
                        1,
                        10
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            6,
                            7
                        ],
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            4
                        ]
                    ]
                ],
                expected: [
                    [
                        1,
                        4
                    ],
                    [
                        6,
                        7
                    ]
                ]
            }
        ],
        hints: [
            "Sort by start first — then overlapping intervals are always adjacent.",
            "Walk the sorted list keeping a 'current' interval you may extend.",
            "If next.start <= current.end, extend current.end to max(current.end, next.end)."
        ],
        solutions: [
            {
                label: "Sort then sweep",
                approach: "Sort by start and extend or emit as you go.",
                js: "function mergeIntervals(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged;\n}\n",
                ts: "function mergeIntervals(intervals: number[][]): number[][] {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged;\n}\n",
                commentedCode: {
                    js: "function mergeIntervals(intervals) {\n  // Copy and sort by start so every possible overlap becomes adjacent.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Build new intervals instead of mutating the caller's arrays.\n  const merged = [];\n  // Process intervals from the earliest start to the latest.\n  for (const [start, end] of sorted) {\n    // Only the most recently merged interval can overlap this one.\n    const last = merged[merged.length - 1];\n    // Touching or overlapping intervals belong to the same covered run.\n    if (last && start <= last[1])\n      // Extend the run only as far as the farther endpoint.\n      last[1] = Math.max(last[1], end);\n    else\n      // A gap starts a new independent covered run.\n      merged.push([start, end]);\n  }\n  // The sweep produced disjoint intervals in sorted order.\n  return merged;\n}\n",
                    ts: "function mergeIntervals(intervals: number[][]): number[][] {\n  // Copy and sort by start so every possible overlap becomes adjacent.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Build new intervals instead of mutating the caller's arrays.\n  const merged: number[][] = [];\n  // Process intervals from the earliest start to the latest.\n  for (const [start, end] of sorted) {\n    // Only the most recently merged interval can overlap this one.\n    const last = merged[merged.length - 1];\n    // Touching or overlapping intervals belong to the same covered run.\n    if (last && start <= last[1])\n      // Extend the run only as far as the farther endpoint.\n      last[1] = Math.max(last[1], end);\n    else\n      // A gap starts a new independent covered run.\n      merged.push([start, end]);\n  }\n  // The sweep produced disjoint intervals in sorted order.\n  return merged;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Repeated pairwise merge",
                approach: "Keep merging any overlapping pair until nothing changes.",
                js: "function mergeIntervals(intervals) {\n  const result = intervals.map((iv) => [iv[0], iv[1]]);\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (let i = 0; i < result.length && !changed; i++) {\n      for (let j = i + 1; j < result.length; j++) {\n        const a = result[i], b = result[j];\n        if (a[0] <= b[1] && b[0] <= a[1]) {\n          a[0] = Math.min(a[0], b[0]);\n          a[1] = Math.max(a[1], b[1]);\n          result.splice(j, 1);\n          changed = true;\n          break;\n        }\n      }\n    }\n  }\n  return result.sort((a, b) => a[0] - b[0]);\n}\n",
                ts: "function mergeIntervals(intervals: number[][]): number[][] {\n  const result = intervals.map((iv) => [iv[0], iv[1]]);\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (let i = 0; i < result.length && !changed; i++) {\n      for (let j = i + 1; j < result.length; j++) {\n        const a = result[i], b = result[j];\n        if (a[0] <= b[1] && b[0] <= a[1]) {\n          a[0] = Math.min(a[0], b[0]);\n          a[1] = Math.max(a[1], b[1]);\n          result.splice(j, 1);\n          changed = true;\n          break;\n        }\n      }\n    }\n  }\n  return result.sort((a, b) => a[0] - b[0]);\n}\n",
                commentedCode: {
                    js: "function mergeIntervals(intervals) {\n  // Clone every interval because merging will rewrite endpoints.\n  const result = intervals.map((iv) => [iv[0], iv[1]]);\n  // Enter the loop once, then repeat whenever a pair is merged.\n  let changed = true;\n  while (changed) {\n    // Assume this pass is stable until an overlap proves otherwise.\n    changed = false;\n    // Choose the first interval; stop the pass after one successful merge.\n    for (let i = 0; i < result.length && !changed; i++) {\n      // Compare it with every interval that follows it.\n      for (let j = i + 1; j < result.length; j++) {\n        const a = result[i], b = result[j];\n        // Inclusive bounds detect overlap, including touching endpoints.\n        if (a[0] <= b[1] && b[0] <= a[1]) {\n          // Replace a with the union of both intervals.\n          a[0] = Math.min(a[0], b[0]);\n          a[1] = Math.max(a[1], b[1]);\n          // Remove b now that its range has been absorbed into a.\n          result.splice(j, 1);\n          // Another pass is needed because the wider a may reach a new interval.\n          changed = true;\n          break;\n        }\n      }\n    }\n  }\n  // Normalize the stable, disjoint result into start order.\n  return result.sort((a, b) => a[0] - b[0]);\n}\n",
                    ts: "function mergeIntervals(intervals: number[][]): number[][] {\n  // Clone every interval because merging will rewrite endpoints.\n  const result = intervals.map((iv) => [iv[0], iv[1]]);\n  // Enter the loop once, then repeat whenever a pair is merged.\n  let changed = true;\n  while (changed) {\n    // Assume this pass is stable until an overlap proves otherwise.\n    changed = false;\n    // Choose the first interval; stop the pass after one successful merge.\n    for (let i = 0; i < result.length && !changed; i++) {\n      // Compare it with every interval that follows it.\n      for (let j = i + 1; j < result.length; j++) {\n        const a = result[i], b = result[j];\n        // Inclusive bounds detect overlap, including touching endpoints.\n        if (a[0] <= b[1] && b[0] <= a[1]) {\n          // Replace a with the union of both intervals.\n          a[0] = Math.min(a[0], b[0]);\n          a[1] = Math.max(a[1], b[1]);\n          // Remove b now that its range has been absorbed into a.\n          result.splice(j, 1);\n          // Another pass is needed because the wider a may reach a new interval.\n          changed = true;\n          break;\n        }\n      }\n    }\n  }\n  // Normalize the stable, disjoint result into start order.\n  return result.sort((a, b) => a[0] - b[0]);\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "mi-insert",
        slug: "insert-interval",
        title: "Insert an Interval",
        difficulty: "medium",
        patternIds: P,
        statement: "Given intervals sorted by start and not overlapping, insert `newInterval` and merge anything it touches. Return the result sorted by start.",
        examples: [
            {
                input: "[[1,3],[6,9]], [2,5]",
                output: "[[1,5],[6,9]]"
            },
            {
                input: "[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]",
                output: "[[1,2],[3,10],[12,16]]"
            },
            {
                input: "[], [5,7]",
                output: "[[5,7]]"
            }
        ],
        constraints: [
            "input intervals are sorted and disjoint"
        ],
        functionName: "insertInterval",
        starter: {
            js: "function insertInterval(intervals, newInterval) {\n  // Insert and merge.\n}\n",
            ts: "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  // Insert and merge.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            6,
                            9
                        ]
                    ],
                    [
                        2,
                        5
                    ]
                ],
                expected: [
                    [
                        1,
                        5
                    ],
                    [
                        6,
                        9
                    ]
                ]
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
                            5
                        ],
                        [
                            6,
                            7
                        ],
                        [
                            8,
                            10
                        ],
                        [
                            12,
                            16
                        ]
                    ],
                    [
                        4,
                        8
                    ]
                ],
                expected: [
                    [
                        1,
                        2
                    ],
                    [
                        3,
                        10
                    ],
                    [
                        12,
                        16
                    ]
                ]
            },
            {
                args: [
                    [],
                    [
                        5,
                        7
                    ]
                ],
                expected: [
                    [
                        5,
                        7
                    ]
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        [
                            1,
                            5
                        ]
                    ],
                    [
                        2,
                        3
                    ]
                ],
                expected: [
                    [
                        1,
                        5
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            5
                        ]
                    ],
                    [
                        6,
                        8
                    ]
                ],
                expected: [
                    [
                        1,
                        5
                    ],
                    [
                        6,
                        8
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            5
                        ]
                    ],
                    [
                        0,
                        0
                    ]
                ],
                expected: [
                    [
                        0,
                        0
                    ],
                    [
                        1,
                        5
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            3,
                            5
                        ],
                        [
                            8,
                            10
                        ]
                    ],
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
                        3,
                        5
                    ],
                    [
                        8,
                        10
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            5,
                            6
                        ]
                    ],
                    [
                        3,
                        4
                    ]
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
                        5,
                        6
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ]
                    ],
                    [
                        3,
                        5
                    ]
                ],
                expected: [
                    [
                        1,
                        5
                    ]
                ]
            }
        ],
        hints: [
            "The simplest correct approach: append the new interval, then merge everything.",
            "For a single pass, emit intervals ending before it, absorb overlaps, then emit the rest.",
            "Touching endpoints merge, so use <= when comparing."
        ],
        solutions: [
            {
                label: "Append then merge",
                approach: "Reuse the merge routine after adding the new interval.",
                js: "function insertInterval(intervals, newInterval) {\n  const all = [...intervals.map((iv) => [iv[0], iv[1]]), [newInterval[0], newInterval[1]]];\n  all.sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  for (const [start, end] of all) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged;\n}\n",
                ts: "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  const all = [...intervals.map((iv) => [iv[0], iv[1]]), [newInterval[0], newInterval[1]]];\n  all.sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  for (const [start, end] of all) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged;\n}\n",
                commentedCode: {
                    js: "function insertInterval(intervals, newInterval) {\n  // Clone the existing intervals and append a clone of the new one.\n  const all = [...intervals.map((iv) => [iv[0], iv[1]]), [newInterval[0], newInterval[1]]];\n  // Sorting restores the order needed for a merge sweep.\n  all.sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  // Fold each sorted interval into the union built so far.\n  for (const [start, end] of all) {\n    const last = merged[merged.length - 1];\n    // Extend the last run when this interval overlaps or touches it.\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    // Otherwise preserve it as the start of a separate run.\n    else merged.push([start, end]);\n  }\n  // The inserted interval is now in place and all overlaps are merged.\n  return merged;\n}\n",
                    ts: "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  // Clone the existing intervals and append a clone of the new one.\n  const all = [...intervals.map((iv) => [iv[0], iv[1]]), [newInterval[0], newInterval[1]]];\n  // Sorting restores the order needed for a merge sweep.\n  all.sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  // Fold each sorted interval into the union built so far.\n  for (const [start, end] of all) {\n    const last = merged[merged.length - 1];\n    // Extend the last run when this interval overlaps or touches it.\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    // Otherwise preserve it as the start of a separate run.\n    else merged.push([start, end]);\n  }\n  // The inserted interval is now in place and all overlaps are merged.\n  return merged;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Single pass in three phases",
                approach: "Emit the intervals before, absorb the overlapping run, emit the rest.",
                js: "function insertInterval(intervals, newInterval) {\n  const out = [];\n  let [start, end] = newInterval;\n  let i = 0;\n  while (i < intervals.length && intervals[i][1] < start) out.push([intervals[i][0], intervals[i][1]]), i++;\n  while (i < intervals.length && intervals[i][0] <= end) {\n    start = Math.min(start, intervals[i][0]);\n    end = Math.max(end, intervals[i][1]);\n    i++;\n  }\n  out.push([start, end]);\n  while (i < intervals.length) out.push([intervals[i][0], intervals[i][1]]), i++;\n  return out;\n}\n",
                ts: "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  const out: number[][] = [];\n  let start = newInterval[0], end = newInterval[1];\n  let i = 0;\n  while (i < intervals.length && intervals[i][1] < start) { out.push([intervals[i][0], intervals[i][1]]); i++; }\n  while (i < intervals.length && intervals[i][0] <= end) {\n    start = Math.min(start, intervals[i][0]);\n    end = Math.max(end, intervals[i][1]);\n    i++;\n  }\n  out.push([start, end]);\n  while (i < intervals.length) { out.push([intervals[i][0], intervals[i][1]]); i++; }\n  return out;\n}\n",
                commentedCode: {
                    js: "function insertInterval(intervals, newInterval) {\n  // Collect the sorted, disjoint output without changing either input.\n  const out = [];\n  // These bounds expand as the new interval absorbs overlaps.\n  let [start, end] = newInterval;\n  let i = 0;\n  // Phase 1: copy every interval that ends before the new one begins.\n  while (i < intervals.length && intervals[i][1] < start)\n    out.push([intervals[i][0], intervals[i][1]]), i++;\n  // Phase 2: absorb every interval that starts before the merged end.\n  while (i < intervals.length && intervals[i][0] <= end) {\n    start = Math.min(start, intervals[i][0]);\n    end = Math.max(end, intervals[i][1]);\n    i++;\n  }\n  // Emit the new interval after its entire overlapping run is combined.\n  out.push([start, end]);\n  // Phase 3: copy the intervals that lie strictly after the merged interval.\n  while (i < intervals.length)\n    out.push([intervals[i][0], intervals[i][1]]), i++;\n  return out;\n}\n",
                    ts: "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  // Collect the sorted, disjoint output without changing either input.\n  const out: number[][] = [];\n  // These bounds expand as the new interval absorbs overlaps.\n  let start = newInterval[0], end = newInterval[1];\n  let i = 0;\n  // Phase 1: copy every interval that ends before the new one begins.\n  while (i < intervals.length && intervals[i][1] < start) {\n    out.push([intervals[i][0], intervals[i][1]]);\n    i++;\n  }\n  // Phase 2: absorb every interval that starts before the merged end.\n  while (i < intervals.length && intervals[i][0] <= end) {\n    start = Math.min(start, intervals[i][0]);\n    end = Math.max(end, intervals[i][1]);\n    i++;\n  }\n  // Emit the new interval after its entire overlapping run is combined.\n  out.push([start, end]);\n  // Phase 3: copy the intervals that lie strictly after the merged interval.\n  while (i < intervals.length) {\n    out.push([intervals[i][0], intervals[i][1]]);\n    i++;\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "mi-can-attend",
        slug: "can-attend-all",
        title: "Can Attend All Meetings?",
        difficulty: "medium",
        patternIds: P,
        statement: "Each interval is a meeting `[start, end]`. Return `true` if one person could attend them all — no two meetings overlap. A meeting ending exactly when another starts is fine.",
        examples: [
            {
                input: "[[0,30],[5,10],[15,20]]",
                output: "false"
            },
            {
                input: "[[7,10],[2,4]]",
                output: "true"
            },
            {
                input: "[]",
                output: "true"
            }
        ],
        constraints: [
            "0 <= intervals.length <= 10000"
        ],
        functionName: "canAttendAll",
        starter: {
            js: "function canAttendAll(intervals) {\n  // True if no two meetings overlap.\n}\n",
            ts: "function canAttendAll(intervals: number[][]): boolean {\n  // True if no two meetings overlap.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            0,
                            30
                        ],
                        [
                            5,
                            10
                        ],
                        [
                            15,
                            20
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        [
                            7,
                            10
                        ],
                        [
                            2,
                            4
                        ]
                    ]
                ],
                expected: true
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
                        [
                            1,
                            2
                        ]
                    ]
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
                            2,
                            3
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            4
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        [
                            1,
                            5
                        ],
                        [
                            6,
                            8
                        ],
                        [
                            9,
                            10
                        ]
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        [
                            5,
                            8
                        ],
                        [
                            6,
                            8
                        ]
                    ]
                ],
                expected: false
            },
            {
                args: [
                    [
                        [
                            1,
                            10
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: false
            }
        ],
        hints: [
            "Sort by start time; then only neighbours can conflict.",
            "A conflict is when the next meeting starts strictly before the current one ends.",
            "if (sorted[i][0] < sorted[i-1][1]) return false."
        ],
        solutions: [
            {
                label: "Sort and compare neighbours",
                approach: "After sorting, one overlapping pair must be adjacent.",
                js: "function canAttendAll(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] < sorted[i - 1][1]) return false;\n  }\n  return true;\n}\n",
                ts: "function canAttendAll(intervals: number[][]): boolean {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  for (let i = 1; i < sorted.length; i++) {\n    if (sorted[i][0] < sorted[i - 1][1]) return false;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function canAttendAll(intervals) {\n  // Sort a copy by start time so any conflict appears between neighbours.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Compare each meeting with the meeting immediately before it.\n  for (let i = 1; i < sorted.length; i++) {\n    // Starting before the previous end creates an overlap.\n    // Equality is allowed because that room can be handed off immediately.\n    if (sorted[i][0] < sorted[i - 1][1]) return false;\n  }\n  // No adjacent pair conflicts, so one person can attend every meeting.\n  return true;\n}\n",
                    ts: "function canAttendAll(intervals: number[][]): boolean {\n  // Sort a copy by start time so any conflict appears between neighbours.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Compare each meeting with the meeting immediately before it.\n  for (let i = 1; i < sorted.length; i++) {\n    // Starting before the previous end creates an overlap.\n    // Equality is allowed because that room can be handed off immediately.\n    if (sorted[i][0] < sorted[i - 1][1]) return false;\n  }\n  // No adjacent pair conflicts, so one person can attend every meeting.\n  return true;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Check every pair",
                approach: "Test all pairs directly for a strict overlap.",
                js: "function canAttendAll(intervals) {\n  for (let i = 0; i < intervals.length; i++) {\n    for (let j = i + 1; j < intervals.length; j++) {\n      const a = intervals[i], b = intervals[j];\n      if (a[0] < b[1] && b[0] < a[1]) return false;\n    }\n  }\n  return true;\n}\n",
                ts: "function canAttendAll(intervals: number[][]): boolean {\n  for (let i = 0; i < intervals.length; i++) {\n    for (let j = i + 1; j < intervals.length; j++) {\n      const a = intervals[i], b = intervals[j];\n      if (a[0] < b[1] && b[0] < a[1]) return false;\n    }\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function canAttendAll(intervals) {\n  // Choose each meeting as the first member of a possible conflict.\n  for (let i = 0; i < intervals.length; i++) {\n    // Pair it only with later meetings so every pair is checked once.\n    for (let j = i + 1; j < intervals.length; j++) {\n      const a = intervals[i], b = intervals[j];\n      // Both strict inequalities must hold for the meetings to share time.\n      // Strictness allows one meeting to start exactly when another ends.\n      if (a[0] < b[1] && b[0] < a[1]) return false;\n    }\n  }\n  // Every pair is disjoint or merely touches at an endpoint.\n  return true;\n}\n",
                    ts: "function canAttendAll(intervals: number[][]): boolean {\n  // Choose each meeting as the first member of a possible conflict.\n  for (let i = 0; i < intervals.length; i++) {\n    // Pair it only with later meetings so every pair is checked once.\n    for (let j = i + 1; j < intervals.length; j++) {\n      const a = intervals[i], b = intervals[j];\n      // Both strict inequalities must hold for the meetings to share time.\n      // Strictness allows one meeting to start exactly when another ends.\n      if (a[0] < b[1] && b[0] < a[1]) return false;\n    }\n  }\n  // Every pair is disjoint or merely touches at an endpoint.\n  return true;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mi-min-rooms",
        slug: "min-meeting-rooms",
        title: "Minimum Meeting Rooms",
        difficulty: "hard",
        patternIds: P,
        statement: "Each interval is a meeting `[start, end]`. Return the fewest rooms needed so no two meetings share a room at the same time. A meeting ending exactly when another starts can reuse the room.",
        examples: [
            {
                input: "[[0,30],[5,10],[15,20]]",
                output: "2"
            },
            {
                input: "[[7,10],[2,4]]",
                output: "1"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= intervals.length <= 10000"
        ],
        functionName: "minMeetingRooms",
        starter: {
            js: "function minMeetingRooms(intervals) {\n  // Fewest rooms needed.\n}\n",
            ts: "function minMeetingRooms(intervals: number[][]): number {\n  // Fewest rooms needed.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            0,
                            30
                        ],
                        [
                            5,
                            10
                        ],
                        [
                            15,
                            20
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            7,
                            10
                        ],
                        [
                            2,
                            4
                        ]
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
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            4
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            1,
                            10
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            1,
                            5
                        ],
                        [
                            2,
                            6
                        ],
                        [
                            3,
                            7
                        ]
                    ]
                ],
                expected: 3
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
                        ],
                        [
                            5,
                            6
                        ]
                    ]
                ],
                expected: 1
            }
        ],
        hints: [
            "The answer is the largest number of meetings running at the same instant.",
            "Sort all start times and all end times separately, then sweep with two pointers.",
            "Each start before the next end needs a new room; each end frees one."
        ],
        solutions: [
            {
                label: "Sweep starts against ends",
                approach: "Walk sorted starts and ends together, tracking concurrent meetings.",
                js: "function minMeetingRooms(intervals) {\n  const starts = intervals.map((iv) => iv[0]).sort((a, b) => a - b);\n  const ends = intervals.map((iv) => iv[1]).sort((a, b) => a - b);\n  let rooms = 0, best = 0, e = 0;\n  for (let s = 0; s < starts.length; s++) {\n    while (e < ends.length && ends[e] <= starts[s]) { rooms--; e++; }\n    rooms++;\n    best = Math.max(best, rooms);\n  }\n  return best;\n}\n",
                ts: "function minMeetingRooms(intervals: number[][]): number {\n  const starts = intervals.map((iv) => iv[0]).sort((a, b) => a - b);\n  const ends = intervals.map((iv) => iv[1]).sort((a, b) => a - b);\n  let rooms = 0, best = 0, e = 0;\n  for (let s = 0; s < starts.length; s++) {\n    while (e < ends.length && ends[e] <= starts[s]) { rooms--; e++; }\n    rooms++;\n    best = Math.max(best, rooms);\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function minMeetingRooms(intervals) {\n  // Sort starts independently to process meetings in arrival order.\n  const starts = intervals.map((iv) => iv[0]).sort((a, b) => a - b);\n  // Sort ends independently to know which occupied room becomes free next.\n  const ends = intervals.map((iv) => iv[1]).sort((a, b) => a - b);\n  // Track rooms in use, the peak usage, and the next unprocessed end.\n  let rooms = 0, best = 0, e = 0;\n  // Schedule each meeting at its sorted start time.\n  for (let s = 0; s < starts.length; s++) {\n    // Free every room whose meeting has ended by this start time.\n    while (e < ends.length && ends[e] <= starts[s]) {\n      rooms--;\n      e++;\n    }\n    // The starting meeting now occupies one room.\n    rooms++;\n    // The maximum simultaneous occupancy is the required room count.\n    best = Math.max(best, rooms);\n  }\n  return best;\n}\n",
                    ts: "function minMeetingRooms(intervals: number[][]): number {\n  // Sort starts independently to process meetings in arrival order.\n  const starts = intervals.map((iv) => iv[0]).sort((a, b) => a - b);\n  // Sort ends independently to know which occupied room becomes free next.\n  const ends = intervals.map((iv) => iv[1]).sort((a, b) => a - b);\n  // Track rooms in use, the peak usage, and the next unprocessed end.\n  let rooms = 0, best = 0, e = 0;\n  // Schedule each meeting at its sorted start time.\n  for (let s = 0; s < starts.length; s++) {\n    // Free every room whose meeting has ended by this start time.\n    while (e < ends.length && ends[e] <= starts[s]) {\n      rooms--;\n      e++;\n    }\n    // The starting meeting now occupies one room.\n    rooms++;\n    // The maximum simultaneous occupancy is the required room count.\n    best = Math.max(best, rooms);\n  }\n  return best;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Event sweep",
                approach: "Turn each meeting into +1 / -1 events and take the running maximum.",
                js: "function minMeetingRooms(intervals) {\n  const events = [];\n  for (const [s, e] of intervals) { events.push([s, 1]); events.push([e, -1]); }\n  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  let cur = 0, best = 0;\n  for (const [, delta] of events) {\n    cur += delta;\n    best = Math.max(best, cur);\n  }\n  return best;\n}\n",
                ts: "function minMeetingRooms(intervals: number[][]): number {\n  const events: number[][] = [];\n  for (const [s, e] of intervals) { events.push([s, 1]); events.push([e, -1]); }\n  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  let cur = 0, best = 0;\n  for (const ev of events) {\n    cur += ev[1];\n    best = Math.max(best, cur);\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function minMeetingRooms(intervals) {\n  // Represent each start as +1 room and each end as -1 room.\n  const events = [];\n  for (const [s, e] of intervals) {\n    events.push([s, 1]);\n    events.push([e, -1]);\n  }\n  // Sweep chronologically; at a tie, process -1 before +1 so a room is reused.\n  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  // Track the current and maximum number of active meetings.\n  let cur = 0, best = 0;\n  for (const [, delta] of events) {\n    // Apply this start or end event to the active count.\n    cur += delta;\n    best = Math.max(best, cur);\n  }\n  // Peak concurrency equals the minimum number of rooms.\n  return best;\n}\n",
                    ts: "function minMeetingRooms(intervals: number[][]): number {\n  // Represent each start as +1 room and each end as -1 room.\n  const events: number[][] = [];\n  for (const [s, e] of intervals) {\n    events.push([s, 1]);\n    events.push([e, -1]);\n  }\n  // Sweep chronologically; at a tie, process -1 before +1 so a room is reused.\n  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  // Track the current and maximum number of active meetings.\n  let cur = 0, best = 0;\n  for (const ev of events) {\n    // Apply this start or end event to the active count.\n    cur += ev[1];\n    best = Math.max(best, cur);\n  }\n  // Peak concurrency equals the minimum number of rooms.\n  return best;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "mi-intersection",
        slug: "interval-intersection",
        title: "Interval List Intersections",
        difficulty: "medium",
        patternIds: P,
        statement: "Both lists are sorted and internally disjoint. Return every interval where the two lists overlap, sorted by start.",
        examples: [
            {
                input: "[[0,2],[5,10]], [[1,5],[8,12]]",
                output: "[[1,2],[5,5],[8,10]]"
            },
            {
                input: "[[1,3]], []",
                output: "[]"
            },
            {
                input: "[], []",
                output: "[]"
            }
        ],
        constraints: [
            "both lists are sorted and disjoint"
        ],
        functionName: "intervalIntersection",
        starter: {
            js: "function intervalIntersection(a, b) {\n  // Overlapping pieces of the two lists.\n}\n",
            ts: "function intervalIntersection(a: number[][], b: number[][]): number[][] {\n  // Overlapping pieces of the two lists.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            0,
                            2
                        ],
                        [
                            5,
                            10
                        ]
                    ],
                    [
                        [
                            1,
                            5
                        ],
                        [
                            8,
                            12
                        ]
                    ]
                ],
                expected: [
                    [
                        1,
                        2
                    ],
                    [
                        5,
                        5
                    ],
                    [
                        8,
                        10
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ]
                    ],
                    []
                ],
                expected: []
            },
            {
                args: [
                    [],
                    []
                ],
                expected: []
            }
        ],
        hidden: [
            {
                args: [
                    [
                        [
                            1,
                            5
                        ]
                    ],
                    [
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: [
                    [
                        2,
                        3
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ]
                    ],
                    [
                        [
                            3,
                            4
                        ]
                    ]
                ],
                expected: []
            },
            {
                args: [
                    [
                        [
                            1,
                            10
                        ]
                    ],
                    [
                        [
                            2,
                            3
                        ],
                        [
                            5,
                            6
                        ]
                    ]
                ],
                expected: [
                    [
                        2,
                        3
                    ],
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            5,
                            7
                        ]
                    ],
                    [
                        [
                            2,
                            6
                        ]
                    ]
                ],
                expected: [
                    [
                        2,
                        3
                    ],
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            0,
                            0
                        ]
                    ],
                    [
                        [
                            0,
                            0
                        ]
                    ]
                ],
                expected: [
                    [
                        0,
                        0
                    ]
                ]
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
                    [
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: [
                    [
                        2,
                        2
                    ],
                    [
                        3,
                        3
                    ]
                ]
            }
        ],
        hints: [
            "The overlap of two intervals is [max(starts), min(ends)] — valid only if start <= end.",
            "Advance the pointer whose interval ends first.",
            "Both lists are sorted, so a single two-pointer sweep suffices."
        ],
        solutions: [
            {
                label: "Two pointers",
                approach: "Compare fronts, emit the overlap, and advance the earlier-ending side.",
                js: "function intervalIntersection(a, b) {\n  const out = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) {\n    const start = Math.max(a[i][0], b[j][0]);\n    const end = Math.min(a[i][1], b[j][1]);\n    if (start <= end) out.push([start, end]);\n    if (a[i][1] < b[j][1]) i++; else j++;\n  }\n  return out;\n}\n",
                ts: "function intervalIntersection(a: number[][], b: number[][]): number[][] {\n  const out: number[][] = [];\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) {\n    const start = Math.max(a[i][0], b[j][0]);\n    const end = Math.min(a[i][1], b[j][1]);\n    if (start <= end) out.push([start, end]);\n    if (a[i][1] < b[j][1]) i++; else j++;\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function intervalIntersection(a, b) {\n  // Store intersections in the order the two sorted lists produce them.\n  const out = [];\n  // Point at the next unprocessed interval in each list.\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) {\n    // An overlap can begin only after both intervals have begun.\n    const start = Math.max(a[i][0], b[j][0]);\n    // It must end as soon as either interval ends.\n    const end = Math.min(a[i][1], b[j][1]);\n    // Inclusive validity preserves intersections at a single endpoint.\n    if (start <= end) out.push([start, end]);\n    // The earlier-ending interval cannot overlap anything else at the other front.\n    if (a[i][1] < b[j][1]) i++; else j++;\n  }\n  return out;\n}\n",
                    ts: "function intervalIntersection(a: number[][], b: number[][]): number[][] {\n  // Store intersections in the order the two sorted lists produce them.\n  const out: number[][] = [];\n  // Point at the next unprocessed interval in each list.\n  let i = 0, j = 0;\n  while (i < a.length && j < b.length) {\n    // An overlap can begin only after both intervals have begun.\n    const start = Math.max(a[i][0], b[j][0]);\n    // It must end as soon as either interval ends.\n    const end = Math.min(a[i][1], b[j][1]);\n    // Inclusive validity preserves intersections at a single endpoint.\n    if (start <= end) out.push([start, end]);\n    // The earlier-ending interval cannot overlap anything else at the other front.\n    if (a[i][1] < b[j][1]) i++; else j++;\n  }\n  return out;\n}\n"
                },
                time: "O(n + m)",
                space: "O(n + m)"
            },
            {
                label: "Check every pair",
                approach: "Test each pair of intervals and keep the valid overlaps.",
                js: "function intervalIntersection(a, b) {\n  const out = [];\n  for (const x of a) {\n    for (const y of b) {\n      const start = Math.max(x[0], y[0]);\n      const end = Math.min(x[1], y[1]);\n      if (start <= end) out.push([start, end]);\n    }\n  }\n  return out.sort((p, q) => p[0] - q[0]);\n}\n",
                ts: "function intervalIntersection(a: number[][], b: number[][]): number[][] {\n  const out: number[][] = [];\n  for (const x of a) {\n    for (const y of b) {\n      const start = Math.max(x[0], y[0]);\n      const end = Math.min(x[1], y[1]);\n      if (start <= end) out.push([start, end]);\n    }\n  }\n  return out.sort((p, q) => p[0] - q[0]);\n}\n",
                commentedCode: {
                    js: "function intervalIntersection(a, b) {\n  const out = [];\n  // Choose every interval from the first list.\n  for (const x of a) {\n    // Compare it with every interval from the second list.\n    for (const y of b) {\n      // The later start and earlier end bound their shared portion.\n      const start = Math.max(x[0], y[0]);\n      const end = Math.min(x[1], y[1]);\n      // Keep the shared portion when it has nonnegative width.\n      if (start <= end) out.push([start, end]);\n    }\n  }\n  // Pairwise enumeration needs a final sort to normalize output order.\n  return out.sort((p, q) => p[0] - q[0]);\n}\n",
                    ts: "function intervalIntersection(a: number[][], b: number[][]): number[][] {\n  const out: number[][] = [];\n  // Choose every interval from the first list.\n  for (const x of a) {\n    // Compare it with every interval from the second list.\n    for (const y of b) {\n      // The later start and earlier end bound their shared portion.\n      const start = Math.max(x[0], y[0]);\n      const end = Math.min(x[1], y[1]);\n      // Keep the shared portion when it has nonnegative width.\n      if (start <= end) out.push([start, end]);\n    }\n  }\n  // Pairwise enumeration needs a final sort to normalize output order.\n  return out.sort((p, q) => p[0] - q[0]);\n}\n"
                },
                time: "O(n·m)",
                space: "O(n + m)"
            }
        ]
    },
    {
        id: "mi-total-length",
        slug: "total-covered-length",
        title: "Total Covered Length",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the total length covered by the union of the intervals, where the length of `[a, b]` is `b - a`. Overlapping parts count once.",
        examples: [
            {
                input: "[[1,3],[2,6]]",
                output: "5"
            },
            {
                input: "[[1,2],[3,4]]",
                output: "2"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= intervals.length <= 10000"
        ],
        functionName: "totalCovered",
        starter: {
            js: "function totalCovered(intervals) {\n  // Length of the union.\n}\n",
            ts: "function totalCovered(intervals: number[][]): number {\n  // Length of the union.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            6
                        ]
                    ]
                ],
                expected: 5
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
                    ]
                ],
                expected: 2
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
                        [
                            1,
                            1
                        ]
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        [
                            0,
                            10
                        ]
                    ]
                ],
                expected: 10
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            5,
                            7
                        ]
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        [
                            1,
                            10
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: 9
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            5,
                            6
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            4
                        ]
                    ]
                ],
                expected: 4
            }
        ],
        hints: [
            "Merge the intervals first so nothing is double counted.",
            "Then simply add up (end - start) for each merged interval.",
            "Touching intervals merge into one longer piece."
        ],
        solutions: [
            {
                label: "Merge then sum",
                approach: "Collapse overlaps, then total the lengths.",
                js: "function totalCovered(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged.reduce((sum, [s, e]) => sum + (e - s), 0);\n}\n",
                ts: "function totalCovered(intervals: number[][]): number {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  return merged.reduce((sum, iv) => sum + (iv[1] - iv[0]), 0);\n}\n",
                commentedCode: {
                    js: "function totalCovered(intervals) {\n  // Sort a copy so overlapping portions can be collapsed in one sweep.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  for (const [start, end] of sorted) {\n    // Only the last covered run can overlap the current interval.\n    const last = merged[merged.length - 1];\n    // Combine touching or overlapping coverage without double counting it.\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    // A separated interval starts another covered run.\n    else merged.push([start, end]);\n  }\n  // Disjoint runs can now be summed as end minus start.\n  return merged.reduce((sum, [s, e]) => sum + (e - s), 0);\n}\n",
                    ts: "function totalCovered(intervals: number[][]): number {\n  // Sort a copy so overlapping portions can be collapsed in one sweep.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  for (const [start, end] of sorted) {\n    // Only the last covered run can overlap the current interval.\n    const last = merged[merged.length - 1];\n    // Combine touching or overlapping coverage without double counting it.\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    // A separated interval starts another covered run.\n    else merged.push([start, end]);\n  }\n  // Disjoint runs can now be summed as end minus start.\n  return merged.reduce((sum, iv) => sum + (iv[1] - iv[0]), 0);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Track the covered frontier",
                approach: "Sweep sorted intervals, adding only the part beyond what's already covered.",
                js: "function totalCovered(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  let total = 0, frontier = -Infinity;\n  for (const [s, e] of sorted) {\n    const start = Math.max(s, frontier);\n    if (e > start) { total += e - start; frontier = e; }\n    else frontier = Math.max(frontier, e);\n  }\n  return total;\n}\n",
                ts: "function totalCovered(intervals: number[][]): number {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  let total = 0, frontier = -Infinity;\n  for (const [s, e] of sorted) {\n    const start = Math.max(s, frontier);\n    if (e > start) { total += e - start; frontier = e; }\n    else frontier = Math.max(frontier, e);\n  }\n  return total;\n}\n",
                commentedCode: {
                    js: "function totalCovered(intervals) {\n  // Process coverage from the earliest start to the latest.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Frontier is the furthest point already counted.\n  let total = 0, frontier = -Infinity;\n  for (const [s, e] of sorted) {\n    // Skip any prefix of this interval that was covered earlier.\n    const start = Math.max(s, frontier);\n    if (e > start) {\n      // Only the portion beyond the frontier adds new length.\n      total += e - start;\n      frontier = e;\n    } else\n      // A contained interval adds nothing but may preserve the furthest reach.\n      frontier = Math.max(frontier, e);\n  }\n  return total;\n}\n",
                    ts: "function totalCovered(intervals: number[][]): number {\n  // Process coverage from the earliest start to the latest.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  // Frontier is the furthest point already counted.\n  let total = 0, frontier = -Infinity;\n  for (const [s, e] of sorted) {\n    // Skip any prefix of this interval that was covered earlier.\n    const start = Math.max(s, frontier);\n    if (e > start) {\n      // Only the portion beyond the frontier adds new length.\n      total += e - start;\n      frontier = e;\n    } else\n      // A contained interval adds nothing but may preserve the furthest reach.\n      frontier = Math.max(frontier, e);\n  }\n  return total;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "mi-remove-covered",
        slug: "remove-covered-intervals",
        title: "Remove Covered Intervals",
        difficulty: "medium",
        patternIds: P,
        statement: "An interval `[a,b]` is covered by `[c,d]` when `c <= a` and `b <= d`. Remove every interval covered by another and return how many remain. Identical duplicates cover each other, so only one survives.",
        examples: [
            {
                input: "[[1,4],[3,6],[2,8]]",
                output: "2"
            },
            {
                input: "[[1,4],[2,3]]",
                output: "1"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= intervals.length <= 10000"
        ],
        functionName: "removeCovered",
        starter: {
            js: "function removeCovered(intervals) {\n  // How many intervals survive.\n}\n",
            ts: "function removeCovered(intervals: number[][]): number {\n  // How many intervals survive.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            4
                        ],
                        [
                            3,
                            6
                        ],
                        [
                            2,
                            8
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            1,
                            4
                        ],
                        [
                            2,
                            3
                        ]
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
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        [
                            1,
                            4
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ]
                    ]
                ],
                expected: 1
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
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            0,
                            10
                        ],
                        [
                            5,
                            12
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            1,
                            5
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            4,
                            5
                        ]
                    ]
                ],
                expected: 1
            }
        ],
        hints: [
            "Sort by start ascending, breaking ties by **end descending** so the widest comes first.",
            "Then an interval survives only if its end exceeds the largest end seen so far.",
            "Track maxEnd as you sweep."
        ],
        solutions: [
            {
                label: "Sort then track the furthest end",
                approach: "With the widest interval first, only a longer reach survives.",
                js: "function removeCovered(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || b[1] - a[1]);\n  let count = 0, maxEnd = -Infinity;\n  for (const [, end] of sorted) {\n    if (end > maxEnd) { count++; maxEnd = end; }\n  }\n  return count;\n}\n",
                ts: "function removeCovered(intervals: number[][]): number {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || b[1] - a[1]);\n  let count = 0, maxEnd = -Infinity;\n  for (const iv of sorted) {\n    if (iv[1] > maxEnd) { count++; maxEnd = iv[1]; }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function removeCovered(intervals) {\n  // Sort by start ascending and put the widest equal-start interval first.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || b[1] - a[1]);\n  // maxEnd is the furthest endpoint reached by an earlier interval.\n  let count = 0, maxEnd = -Infinity;\n  for (const [, end] of sorted) {\n    // A farther end is not covered; equal or shorter ends are covered.\n    if (end > maxEnd) {\n      count++;\n      maxEnd = end;\n    }\n  }\n  return count;\n}\n",
                    ts: "function removeCovered(intervals: number[][]): number {\n  // Sort by start ascending and put the widest equal-start interval first.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || b[1] - a[1]);\n  // maxEnd is the furthest endpoint reached by an earlier interval.\n  let count = 0, maxEnd = -Infinity;\n  for (const iv of sorted) {\n    // A farther end is not covered; equal or shorter ends are covered.\n    if (iv[1] > maxEnd) {\n      count++;\n      maxEnd = iv[1];\n    }\n  }\n  return count;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Check each against the rest",
                approach: "Count intervals not covered by any other (keeping one of each duplicate).",
                js: "function removeCovered(intervals) {\n  let count = 0;\n  for (let i = 0; i < intervals.length; i++) {\n    const [a, b] = intervals[i];\n    let covered = false;\n    for (let j = 0; j < intervals.length; j++) {\n      if (i === j) continue;\n      const [c, d] = intervals[j];\n      const sameInterval = c === a && d === b;\n      if (c <= a && b <= d && (!sameInterval || j < i)) { covered = true; break; }\n    }\n    if (!covered) count++;\n  }\n  return count;\n}\n",
                ts: "function removeCovered(intervals: number[][]): number {\n  let count = 0;\n  for (let i = 0; i < intervals.length; i++) {\n    const a = intervals[i][0], b = intervals[i][1];\n    let covered = false;\n    for (let j = 0; j < intervals.length; j++) {\n      if (i === j) continue;\n      const c = intervals[j][0], d = intervals[j][1];\n      const sameInterval = c === a && d === b;\n      if (c <= a && b <= d && (!sameInterval || j < i)) { covered = true; break; }\n    }\n    if (!covered) count++;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function removeCovered(intervals) {\n  let count = 0;\n  // Decide independently whether each interval should survive.\n  for (let i = 0; i < intervals.length; i++) {\n    const [a, b] = intervals[i];\n    let covered = false;\n    // Search every other interval for one that contains [a, b].\n    for (let j = 0; j < intervals.length; j++) {\n      // An interval is not compared with itself.\n      if (i === j) continue;\n      const [c, d] = intervals[j];\n      const sameInterval = c === a && d === b;\n      // Equal duplicates use index order so exactly the first copy survives.\n      if (c <= a && b <= d && (!sameInterval || j < i)) {\n        covered = true;\n        break;\n      }\n    }\n    // Count this interval only when no other interval covers it.\n    if (!covered) count++;\n  }\n  return count;\n}\n",
                    ts: "function removeCovered(intervals: number[][]): number {\n  let count = 0;\n  // Decide independently whether each interval should survive.\n  for (let i = 0; i < intervals.length; i++) {\n    const a = intervals[i][0], b = intervals[i][1];\n    let covered = false;\n    // Search every other interval for one that contains [a, b].\n    for (let j = 0; j < intervals.length; j++) {\n      // An interval is not compared with itself.\n      if (i === j) continue;\n      const c = intervals[j][0], d = intervals[j][1];\n      const sameInterval = c === a && d === b;\n      // Equal duplicates use index order so exactly the first copy survives.\n      if (c <= a && b <= d && (!sameInterval || j < i)) {\n        covered = true;\n        break;\n      }\n    }\n    // Count this interval only when no other interval covers it.\n    if (!covered) count++;\n  }\n  return count;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "mi-gaps",
        slug: "interval-gaps",
        title: "Gaps Between Intervals",
        difficulty: "medium",
        patternIds: P,
        statement: "After merging any overlaps, return the empty stretches between consecutive covered ranges as intervals, sorted by start. Touching ranges leave no gap.",
        examples: [
            {
                input: "[[1,3],[6,9]]",
                output: "[[3,6]]"
            },
            {
                input: "[[1,3],[3,5]]",
                output: "[]"
            },
            {
                input: "[]",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= intervals.length <= 10000"
        ],
        functionName: "intervalGaps",
        starter: {
            js: "function intervalGaps(intervals) {\n  // Empty stretches between merged intervals.\n}\n",
            ts: "function intervalGaps(intervals: number[][]): number[][] {\n  // Empty stretches between merged intervals.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            6,
                            9
                        ]
                    ]
                ],
                expected: [
                    [
                        3,
                        6
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            3
                        ],
                        [
                            3,
                            5
                        ]
                    ]
                ],
                expected: []
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
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: []
            },
            {
                args: [
                    [
                        [
                            1,
                            2
                        ],
                        [
                            4,
                            5
                        ],
                        [
                            7,
                            8
                        ]
                    ]
                ],
                expected: [
                    [
                        2,
                        4
                    ],
                    [
                        5,
                        7
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            1,
                            10
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: []
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
                    ]
                ],
                expected: [
                    [
                        2,
                        3
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            5,
                            6
                        ],
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: [
                    [
                        2,
                        5
                    ]
                ]
            },
            {
                args: [
                    [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            2,
                            3
                        ]
                    ]
                ],
                expected: []
            }
        ],
        hints: [
            "Merge first — overlapping intervals never leave a gap between them.",
            "Then each gap runs from one merged interval's end to the next one's start.",
            "Only emit a gap when the next start is strictly greater than the previous end."
        ],
        solutions: [
            {
                label: "Merge then read the gaps",
                approach: "Collapse overlaps, then walk the merged list pairwise.",
                js: "function intervalGaps(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  const gaps = [];\n  for (let i = 1; i < merged.length; i++) {\n    if (merged[i][0] > merged[i - 1][1]) gaps.push([merged[i - 1][1], merged[i][0]]);\n  }\n  return gaps;\n}\n",
                ts: "function intervalGaps(intervals: number[][]): number[][] {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  const gaps: number[][] = [];\n  for (let i = 1; i < merged.length; i++) {\n    if (merged[i][0] > merged[i - 1][1]) gaps.push([merged[i - 1][1], merged[i][0]]);\n  }\n  return gaps;\n}\n",
                commentedCode: {
                    js: "function intervalGaps(intervals) {\n  // Sort a copy so connected coverage appears consecutively.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged = [];\n  // First collapse all touching and overlapping ranges.\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  const gaps = [];\n  // Each empty stretch lies between two consecutive merged ranges.\n  for (let i = 1; i < merged.length; i++) {\n    // A strict jump leaves a gap from the previous end to the next start.\n    if (merged[i][0] > merged[i - 1][1])\n      gaps.push([merged[i - 1][1], merged[i][0]]);\n  }\n  return gaps;\n}\n",
                    ts: "function intervalGaps(intervals: number[][]): number[][] {\n  // Sort a copy so connected coverage appears consecutively.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: number[][] = [];\n  // First collapse all touching and overlapping ranges.\n  for (const [start, end] of sorted) {\n    const last = merged[merged.length - 1];\n    if (last && start <= last[1]) last[1] = Math.max(last[1], end);\n    else merged.push([start, end]);\n  }\n  const gaps: number[][] = [];\n  // Each empty stretch lies between two consecutive merged ranges.\n  for (let i = 1; i < merged.length; i++) {\n    // A strict jump leaves a gap from the previous end to the next start.\n    if (merged[i][0] > merged[i - 1][1])\n      gaps.push([merged[i - 1][1], merged[i][0]]);\n  }\n  return gaps;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Sweep with a frontier",
                approach: "Track the furthest covered point and emit a gap when the next start jumps past it.",
                js: "function intervalGaps(intervals) {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const gaps = [];\n  let frontier = null;\n  for (const [s, e] of sorted) {\n    if (frontier !== null && s > frontier) gaps.push([frontier, s]);\n    frontier = frontier === null ? e : Math.max(frontier, e);\n  }\n  return gaps;\n}\n",
                ts: "function intervalGaps(intervals: number[][]): number[][] {\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const gaps: number[][] = [];\n  let frontier: number | null = null;\n  for (const [s, e] of sorted) {\n    if (frontier !== null && s > frontier) gaps.push([frontier, s]);\n    frontier = frontier === null ? e : Math.max(frontier, e);\n  }\n  return gaps;\n}\n",
                commentedCode: {
                    js: "function intervalGaps(intervals) {\n  // Sort a copy so coverage can be tracked from left to right.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const gaps = [];\n  // Frontier is the furthest covered endpoint, or null before the first interval.\n  let frontier = null;\n  for (const [s, e] of sorted) {\n    // A start beyond existing coverage exposes an empty stretch.\n    if (frontier !== null && s > frontier) gaps.push([frontier, s]);\n    // Extend coverage; contained intervals cannot move the frontier backward.\n    frontier = frontier === null ? e : Math.max(frontier, e);\n  }\n  return gaps;\n}\n",
                    ts: "function intervalGaps(intervals: number[][]): number[][] {\n  // Sort a copy so coverage can be tracked from left to right.\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const gaps: number[][] = [];\n  // Frontier is the furthest covered endpoint, or null before the first interval.\n  let frontier: number | null = null;\n  for (const [s, e] of sorted) {\n    // A start beyond existing coverage exposes an empty stretch.\n    if (frontier !== null && s > frontier) gaps.push([frontier, s]);\n    // Extend coverage; contained intervals cannot move the frontier backward.\n    frontier = frontier === null ? e : Math.max(frontier, e);\n  }\n  return gaps;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    }
];
const mergeIntervalsProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const mergeIntervalsMcqs = [
    {
        id: "s5-mi-sort",
        kind: "mcq",
        prompt: "The first step in almost every interval problem is to:",
        options: [
            "sort the intervals by start time",
            "reverse the list",
            "hash the endpoints",
            "binary search for the median"
        ],
        answerIndex: 0,
        explanation: "Sorting by start makes overlapping intervals adjacent, which is what the sweep relies on."
    },
    {
        id: "s5-mi-time",
        kind: "mcq",
        prompt: "Merging n intervals costs O(n) for the sweep — what dominates the overall running time?",
        options: [
            "O(n) — nothing else matters",
            "O(n log n) from the sort",
            "O(n²)",
            "O(log n)"
        ],
        answerIndex: 1,
        explanation: "The sort dominates, giving O(n log n) overall."
    }
];
const mergeIntervalsModule = {
    id: "m-pat-merge-intervals",
    stageId: S,
    title: "Merge Intervals",
    kind: "patternModule",
    summary: "Sort by start, then sweep — merging, inserting, scheduling, and counting overlaps.",
    lessonSections: [
        {
            heading: "Sort, then sweep",
            body: `Nearly every interval problem starts the same way: **sort by start time**. Once sorted, anything that overlaps is *adjacent*, so a single left-to-right pass can merge, count, or detect conflicts.

\`\`\`js
function merge(intervals) {
  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const out = [];
  for (const [start, end] of sorted) {
    const last = out[out.length - 1];
    if (last && start <= last[1]) last[1] = Math.max(last[1], end); // extend
    else out.push([start, end]);                                    // new run
  }
  return out;
}
console.log(merge([[1,3],[2,6],[8,10]])); // [[1,6],[8,10]]
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for this pattern when the input is a set of ranges — times, bookings, segments — and the question involves:

- **merging** overlaps or **inserting** a new range,
- **conflicts**: "can one person attend all meetings?",
- **capacity**: the maximum number of ranges active at once (meeting rooms),
- **intersections** of two range lists, **total covered** length, or the **gaps** between ranges.

For capacity questions, the trick is different: split each interval into a **+1 start event and a −1 end event**, sort the events, and take the running maximum.`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Overlap test
const overlaps = (a: number[], b: number[]) => a[0] <= b[1] && b[0] <= a[1];

// Max concurrent (meeting rooms) via two sorted arrays
const starts = intervals.map((i) => i[0]).sort((x, y) => x - y);
const ends   = intervals.map((i) => i[1]).sort((x, y) => x - y);
let rooms = 0, best = 0, e = 0;
for (let s = 0; s < starts.length; s++) {
  while (e < ends.length && ends[e] <= starts[s]) { rooms--; e++; }
  rooms++; best = Math.max(best, rooms);
}
\`\`\`

**Pitfalls:** decide whether **touching** endpoints count as overlapping — merging usually says yes (\`<=\`), scheduling usually says no (\`<\`) — and be consistent; sorting by **end** instead of start quietly breaks the merge sweep; when removing covered intervals you must sort by start ascending **and end descending**; mutating the caller's arrays instead of copying. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "mi-merge",
    drillProblemIds: [
        "mi-is-overlapping",
        "mi-count-overlapping",
        "mi-merge",
        "mi-insert",
        "mi-can-attend",
        "mi-min-rooms"
    ],
    testPoolProblemIds: [
        "mi-intersection",
        "mi-total-length",
        "mi-remove-covered",
        "mi-gaps"
    ],
    complexityQuestionIds: [
        "s5-mi-sort",
        "s5-mi-time"
    ],
    badgeId: "badge-pat-merge-intervals",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage5/subsetsBacktracking.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subsetsBacktrackingMcqs",
    ()=>subsetsBacktrackingMcqs,
    "subsetsBacktrackingModule",
    ()=>subsetsBacktrackingModule,
    "subsetsBacktrackingProblems",
    ()=>subsetsBacktrackingProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s5";
const P = [
    "subsets-backtracking"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "sb-count-valid-parens",
        slug: "count-valid-parentheses",
        title: "Count Valid Parentheses",
        difficulty: "easy",
        patternIds: P,
        statement: "Return how many different valid strings you can build from `n` pairs of parentheses. `n = 0` has exactly one arrangement (the empty string).",
        examples: [
            {
                input: "3",
                output: "5"
            },
            {
                input: "1",
                output: "1"
            },
            {
                input: "0",
                output: "1"
            }
        ],
        constraints: [
            "0 <= n <= 12"
        ],
        functionName: "countValidParens",
        starter: {
            js: "function countValidParens(n) {\n  // How many valid arrangements of n pairs.\n}\n",
            ts: "function countValidParens(n: number): number {\n  // How many valid arrangements of n pairs.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    3
                ],
                expected: 5
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
                    4
                ],
                expected: 14
            },
            {
                args: [
                    5
                ],
                expected: 42
            },
            {
                args: [
                    6
                ],
                expected: 132
            },
            {
                args: [
                    7
                ],
                expected: 429
            },
            {
                args: [
                    8
                ],
                expected: 1430
            }
        ],
        hints: [
            "Build the string left to right, tracking how many '(' and ')' you've placed.",
            "You may add '(' while fewer than n are placed, and ')' only while it wouldn't outnumber '('.",
            "Count a completed string when both counters reach n."
        ],
        solutions: [
            {
                label: "Backtracking with two counters",
                approach: "Explore each legal next character and count complete strings.",
                js: "function countValidParens(n) {\n  let count = 0;\n  const go = (open, close) => {\n    if (open === n && close === n) { count++; return; }\n    if (open < n) go(open + 1, close);\n    if (close < open) go(open, close + 1);\n  };\n  go(0, 0);\n  return count;\n}\n",
                ts: "function countValidParens(n: number): number {\n  let count = 0;\n  const go = (open: number, close: number) => {\n    if (open === n && close === n) { count++; return; }\n    if (open < n) go(open + 1, close);\n    if (close < open) go(open, close + 1);\n  };\n  go(0, 0);\n  return count;\n}\n",
                commentedCode: {
                    js: "function countValidParens(n) {\n  // Accumulate one count for every complete valid arrangement.\n  let count = 0;\n  // Track how many opening and closing parentheses have been placed.\n  const go = (open, close) => {\n    // Using all n pairs completes exactly one valid string.\n    if (open === n && close === n) { count++; return; }\n    // Add an opening parenthesis while some are still available.\n    if (open < n) go(open + 1, close);\n    // Add a closing parenthesis only when it cannot make the prefix invalid.\n    if (close < open) go(open, close + 1);\n  };\n  // Begin with an empty prefix.\n  go(0, 0);\n  // Return the number of valid leaves in the decision tree.\n  return count;\n}\n",
                    ts: "function countValidParens(n: number): number {\n  // Accumulate one count for every complete valid arrangement.\n  let count = 0;\n  // Track how many opening and closing parentheses have been placed.\n  const go = (open: number, close: number) => {\n    // Using all n pairs completes exactly one valid string.\n    if (open === n && close === n) { count++; return; }\n    // Add an opening parenthesis while some are still available.\n    if (open < n) go(open + 1, close);\n    // Add a closing parenthesis only when it cannot make the prefix invalid.\n    if (close < open) go(open, close + 1);\n  };\n  // Begin with an empty prefix.\n  go(0, 0);\n  // Return the number of valid leaves in the decision tree.\n  return count;\n}\n"
                },
                time: "O(Catalan(n))",
                space: "O(n)"
            },
            {
                label: "Catalan numbers",
                approach: "The answer is the n-th Catalan number, built up iteratively.",
                js: "function countValidParens(n) {\n  const c = new Array(n + 1).fill(0);\n  c[0] = 1;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 0; j < i; j++) c[i] += c[j] * c[i - 1 - j];\n  }\n  return c[n];\n}\n",
                ts: "function countValidParens(n: number): number {\n  const c = new Array(n + 1).fill(0);\n  c[0] = 1;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 0; j < i; j++) c[i] += c[j] * c[i - 1 - j];\n  }\n  return c[n];\n}\n",
                commentedCode: {
                    js: "function countValidParens(n) {\n  // c[i] will hold the i-th Catalan number.\n  const c = new Array(n + 1).fill(0);\n  // There is one valid arrangement containing zero pairs: the empty string.\n  c[0] = 1;\n  // Build every Catalan number up through the requested size.\n  for (let i = 1; i <= n; i++) {\n    // Choose how many pairs lie inside the first matching pair; the rest lie after it.\n    for (let j = 0; j < i; j++) c[i] += c[j] * c[i - 1 - j];\n  }\n  // The n-th Catalan number is the number of valid strings with n pairs.\n  return c[n];\n}\n",
                    ts: "function countValidParens(n: number): number {\n  // c[i] will hold the i-th Catalan number.\n  const c = new Array(n + 1).fill(0);\n  // There is one valid arrangement containing zero pairs: the empty string.\n  c[0] = 1;\n  // Build every Catalan number up through the requested size.\n  for (let i = 1; i <= n; i++) {\n    // Choose how many pairs lie inside the first matching pair; the rest lie after it.\n    for (let j = 0; j < i; j++) c[i] += c[j] * c[i - 1 - j];\n  }\n  // The n-th Catalan number is the number of valid strings with n pairs.\n  return c[n];\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "sb-count-paths-grid",
        slug: "count-grid-paths",
        title: "Count Grid Paths",
        difficulty: "easy",
        patternIds: P,
        statement: "Starting at the top-left of a `rows` × `cols` grid and moving only right or down, return how many distinct paths reach the bottom-right. An empty grid has 0 paths.",
        examples: [
            {
                input: "2, 2",
                output: "2"
            },
            {
                input: "3, 3",
                output: "6"
            },
            {
                input: "1, 5",
                output: "1"
            }
        ],
        constraints: [
            "0 <= rows, cols <= 15"
        ],
        functionName: "countPathsGrid",
        starter: {
            js: "function countPathsGrid(rows, cols) {\n  // Paths moving only right or down.\n}\n",
            ts: "function countPathsGrid(rows: number, cols: number): number {\n  // Paths moving only right or down.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    2,
                    2
                ],
                expected: 2
            },
            {
                args: [
                    3,
                    3
                ],
                expected: 6
            },
            {
                args: [
                    1,
                    5
                ],
                expected: 1
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
                    0,
                    3
                ],
                expected: 0
            },
            {
                args: [
                    3,
                    0
                ],
                expected: 0
            },
            {
                args: [
                    2,
                    3
                ],
                expected: 3
            },
            {
                args: [
                    4,
                    4
                ],
                expected: 20
            },
            {
                args: [
                    3,
                    7
                ],
                expected: 28
            }
        ],
        hints: [
            "From any cell you may branch two ways: down or right.",
            "Reaching the bottom-right counts as one path; stepping off the grid counts as none.",
            "Caching results per cell turns the exponential search into a linear one."
        ],
        solutions: [
            {
                label: "Backtracking with memoisation",
                approach: "Branch right and down, caching each cell's path count.",
                js: "function countPathsGrid(rows, cols) {\n  if (rows <= 0 || cols <= 0) return 0;\n  const memo = new Map();\n  const go = (r, c) => {\n    if (r === rows - 1 && c === cols - 1) return 1;\n    if (r >= rows || c >= cols) return 0;\n    const key = r * cols + c;\n    if (memo.has(key)) return memo.get(key);\n    const total = go(r + 1, c) + go(r, c + 1);\n    memo.set(key, total);\n    return total;\n  };\n  return go(0, 0);\n}\n",
                ts: "function countPathsGrid(rows: number, cols: number): number {\n  if (rows <= 0 || cols <= 0) return 0;\n  const memo = new Map<number, number>();\n  const go = (r: number, c: number): number => {\n    if (r === rows - 1 && c === cols - 1) return 1;\n    if (r >= rows || c >= cols) return 0;\n    const key = r * cols + c;\n    if (memo.has(key)) return memo.get(key) as number;\n    const total = go(r + 1, c) + go(r, c + 1);\n    memo.set(key, total);\n    return total;\n  };\n  return go(0, 0);\n}\n",
                commentedCode: {
                    js: "function countPathsGrid(rows, cols) {\n  // A grid missing either dimension contains no start-to-finish path.\n  if (rows <= 0 || cols <= 0) return 0;\n  // Cache the path count from each cell so overlapping branches run once.\n  const memo = new Map();\n  const go = (r, c) => {\n    // Reaching the destination contributes one complete path.\n    if (r === rows - 1 && c === cols - 1) return 1;\n    // A move outside the grid cannot reach the destination.\n    if (r >= rows || c >= cols) return 0;\n    // Flatten the row and column into one unique memo key.\n    const key = r * cols + c;\n    // Reuse the answer if this cell was already explored.\n    if (memo.has(key)) return memo.get(key);\n    // Every valid path begins with either a down move or a right move.\n    const total = go(r + 1, c) + go(r, c + 1);\n    // Save and return this cell's combined path count.\n    memo.set(key, total);\n    return total;\n  };\n  // Count all paths beginning at the top-left cell.\n  return go(0, 0);\n}\n",
                    ts: "function countPathsGrid(rows: number, cols: number): number {\n  // A grid missing either dimension contains no start-to-finish path.\n  if (rows <= 0 || cols <= 0) return 0;\n  // Cache the path count from each cell so overlapping branches run once.\n  const memo = new Map<number, number>();\n  const go = (r: number, c: number): number => {\n    // Reaching the destination contributes one complete path.\n    if (r === rows - 1 && c === cols - 1) return 1;\n    // A move outside the grid cannot reach the destination.\n    if (r >= rows || c >= cols) return 0;\n    // Flatten the row and column into one unique memo key.\n    const key = r * cols + c;\n    // Reuse the answer if this cell was already explored.\n    if (memo.has(key)) return memo.get(key) as number;\n    // Every valid path begins with either a down move or a right move.\n    const total = go(r + 1, c) + go(r, c + 1);\n    // Save and return this cell's combined path count.\n    memo.set(key, total);\n    return total;\n  };\n  // Count all paths beginning at the top-left cell.\n  return go(0, 0);\n}\n"
                },
                time: "O(rows·cols)",
                space: "O(rows·cols)"
            },
            {
                label: "Build a table",
                approach: "Each cell's count is the sum of the cell above and the cell to the left.",
                js: "function countPathsGrid(rows, cols) {\n  if (rows <= 0 || cols <= 0) return 0;\n  const grid = Array.from({ length: rows }, () => new Array(cols).fill(1));\n  for (let r = 1; r < rows; r++) {\n    for (let c = 1; c < cols; c++) grid[r][c] = grid[r - 1][c] + grid[r][c - 1];\n  }\n  return grid[rows - 1][cols - 1];\n}\n",
                ts: "function countPathsGrid(rows: number, cols: number): number {\n  if (rows <= 0 || cols <= 0) return 0;\n  const grid = Array.from({ length: rows }, () => new Array(cols).fill(1));\n  for (let r = 1; r < rows; r++) {\n    for (let c = 1; c < cols; c++) grid[r][c] = grid[r - 1][c] + grid[r][c - 1];\n  }\n  return grid[rows - 1][cols - 1];\n}\n",
                commentedCode: {
                    js: "function countPathsGrid(rows, cols) {\n  // A grid missing either dimension has no path to count.\n  if (rows <= 0 || cols <= 0) return 0;\n  // The first row and first column each have one straight-line path.\n  const grid = Array.from({ length: rows }, () => new Array(cols).fill(1));\n  // Fill all cells that can be entered from two directions.\n  for (let r = 1; r < rows; r++) {\n    // Paths into this cell are the paths from above plus those from the left.\n    for (let c = 1; c < cols; c++) grid[r][c] = grid[r - 1][c] + grid[r][c - 1];\n  }\n  // The bottom-right cell stores the total number of complete paths.\n  return grid[rows - 1][cols - 1];\n}\n",
                    ts: "function countPathsGrid(rows: number, cols: number): number {\n  // A grid missing either dimension has no path to count.\n  if (rows <= 0 || cols <= 0) return 0;\n  // The first row and first column each have one straight-line path.\n  const grid = Array.from({ length: rows }, () => new Array(cols).fill(1));\n  // Fill all cells that can be entered from two directions.\n  for (let r = 1; r < rows; r++) {\n    // Paths into this cell are the paths from above plus those from the left.\n    for (let c = 1; c < cols; c++) grid[r][c] = grid[r - 1][c] + grid[r][c - 1];\n  }\n  // The bottom-right cell stores the total number of complete paths.\n  return grid[rows - 1][cols - 1];\n}\n"
                },
                time: "O(rows·cols)",
                space: "O(rows·cols)"
            }
        ]
    },
    {
        id: "sb-subsets-with-duplicates",
        slug: "subsets-with-duplicates",
        title: "Subsets with Duplicates",
        difficulty: "medium",
        patternIds: P,
        statement: "The list may contain repeated values. Return every **distinct** subset, each written in ascending order, with the list of subsets ordered by size and then lexicographically.",
        examples: [
            {
                input: "[1,2,2]",
                output: "[[],[1],[2],[1,2],[2,2],[1,2,2]]"
            },
            {
                input: "[1]",
                output: "[[],[1]]"
            },
            {
                input: "[]",
                output: "[[]]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 12"
        ],
        functionName: "subsetsWithDup",
        starter: {
            js: "function subsetsWithDup(nums) {\n  // Distinct subsets, ordered by size then lexicographically.\n}\n",
            ts: "function subsetsWithDup(nums: number[]): number[][] {\n  // Distinct subsets, ordered by size then lexicographically.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
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
                    ],
                    [
                        2,
                        2
                    ],
                    [
                        1,
                        2,
                        2
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
                    [],
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
                        1
                    ]
                ],
                expected: [
                    [],
                    [
                        1
                    ],
                    [
                        1,
                        1
                    ]
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
                    [],
                    [
                        2
                    ],
                    [
                        2,
                        2
                    ],
                    [
                        2,
                        2,
                        2
                    ]
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
                    [
                        1,
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
                        1
                    ],
                    [
                        1,
                        2
                    ],
                    [
                        1,
                        1,
                        2
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
                        3,
                        3
                    ]
                ],
                expected: [
                    [],
                    [
                        3
                    ],
                    [
                        3,
                        3
                    ]
                ]
            }
        ],
        hints: [
            "Sort first so equal values sit next to each other.",
            "At each level, skip a value identical to the previous one you already tried there.",
            "Sort the finished list by length, then lexicographically."
        ],
        solutions: [
            {
                label: "Backtracking, skipping repeats",
                approach: "Sort, then avoid choosing the same value twice at one decision level.",
                js: "function subsetsWithDup(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const res = [];\n  const bt = (start, cur) => {\n    res.push([...cur]);\n    for (let i = start; i < a.length; i++) {\n      if (i > start && a[i] === a[i - 1]) continue;\n      cur.push(a[i]);\n      bt(i + 1, cur);\n      cur.pop();\n    }\n  };\n  bt(0, []);\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n",
                ts: "function subsetsWithDup(nums: number[]): number[][] {\n  const a = [...nums].sort((x, y) => x - y);\n  const res: number[][] = [];\n  const bt = (start: number, cur: number[]) => {\n    res.push([...cur]);\n    for (let i = start; i < a.length; i++) {\n      if (i > start && a[i] === a[i - 1]) continue;\n      cur.push(a[i]);\n      bt(i + 1, cur);\n      cur.pop();\n    }\n  };\n  bt(0, []);\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n",
                commentedCode: {
                    js: "function subsetsWithDup(nums) {\n  // Sort a copy so duplicate values are adjacent without mutating the input.\n  const a = [...nums].sort((x, y) => x - y);\n  // Collect a snapshot of every distinct partial subset.\n  const res = [];\n  const bt = (start, cur) => {\n    // The current choices themselves form one valid subset.\n    res.push([...cur]);\n    // Choose each possible next value at this decision depth.\n    for (let i = start; i < a.length; i++) {\n      // Equal adjacent values would create the same branch when chosen at this depth.\n      if (i > start && a[i] === a[i - 1]) continue;\n      // Choose this value, explore later values, then undo the choice.\n      cur.push(a[i]);\n      bt(i + 1, cur);\n      cur.pop();\n    }\n  };\n  // Start with no chosen values and the whole sorted array available.\n  bt(0, []);\n  // Compare arrays by their first differing value, using length as the final tie-breaker.\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  // Meet the required order: shorter subsets first, then lexicographic order.\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n",
                    ts: "function subsetsWithDup(nums: number[]): number[][] {\n  // Sort a copy so duplicate values are adjacent without mutating the input.\n  const a = [...nums].sort((x, y) => x - y);\n  // Collect a snapshot of every distinct partial subset.\n  const res: number[][] = [];\n  const bt = (start: number, cur: number[]) => {\n    // The current choices themselves form one valid subset.\n    res.push([...cur]);\n    // Choose each possible next value at this decision depth.\n    for (let i = start; i < a.length; i++) {\n      // Equal adjacent values would create the same branch when chosen at this depth.\n      if (i > start && a[i] === a[i - 1]) continue;\n      // Choose this value, explore later values, then undo the choice.\n      cur.push(a[i]);\n      bt(i + 1, cur);\n      cur.pop();\n    }\n  };\n  // Start with no chosen values and the whole sorted array available.\n  bt(0, []);\n  // Compare arrays by their first differing value, using length as the final tie-breaker.\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  // Meet the required order: shorter subsets first, then lexicographic order.\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n"
                },
                time: "O(n · 2ⁿ)",
                space: "O(n · 2ⁿ)"
            },
            {
                label: "Enumerate bitmasks and dedupe",
                approach: "Generate every subset by bitmask, then remove duplicates by key.",
                js: "function subsetsWithDup(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const seen = new Map();\n  for (let mask = 0; mask < (1 << a.length); mask++) {\n    const subset = [];\n    for (let i = 0; i < a.length; i++) if (mask & (1 << i)) subset.push(a[i]);\n    seen.set(subset.join(','), subset);\n  }\n  const res = [...seen.values()];\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n",
                ts: "function subsetsWithDup(nums: number[]): number[][] {\n  const a = [...nums].sort((x, y) => x - y);\n  const seen = new Map<string, number[]>();\n  for (let mask = 0; mask < (1 << a.length); mask++) {\n    const subset: number[] = [];\n    for (let i = 0; i < a.length; i++) if (mask & (1 << i)) subset.push(a[i]);\n    seen.set(subset.join(','), subset);\n  }\n  const res = [...seen.values()];\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n",
                commentedCode: {
                    js: "function subsetsWithDup(nums) {\n  // Sorting makes every generated subset canonical and groups equal values.\n  const a = [...nums].sort((x, y) => x - y);\n  // Map each serialized subset to one representative, replacing duplicates.\n  const seen = new Map();\n  // Each bitmask describes which input positions belong to one subset.\n  for (let mask = 0; mask < (1 << a.length); mask++) {\n    const subset = [];\n    // Include a value exactly when its position's bit is set.\n    for (let i = 0; i < a.length; i++) if (mask & (1 << i)) subset.push(a[i]);\n    // Equal-value subsets share the same key even if they used different positions.\n    seen.set(subset.join(','), subset);\n  }\n  // Keep only the unique subset stored for each key.\n  const res = [...seen.values()];\n  // Compare arrays at their first differing element.\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  // Order subsets by size first and lexicographically second.\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n",
                    ts: "function subsetsWithDup(nums: number[]): number[][] {\n  // Sorting makes every generated subset canonical and groups equal values.\n  const a = [...nums].sort((x, y) => x - y);\n  // Map each serialized subset to one representative, replacing duplicates.\n  const seen = new Map<string, number[]>();\n  // Each bitmask describes which input positions belong to one subset.\n  for (let mask = 0; mask < (1 << a.length); mask++) {\n    const subset: number[] = [];\n    // Include a value exactly when its position's bit is set.\n    for (let i = 0; i < a.length; i++) if (mask & (1 << i)) subset.push(a[i]);\n    // Equal-value subsets share the same key even if they used different positions.\n    seen.set(subset.join(','), subset);\n  }\n  // Keep only the unique subset stored for each key.\n  const res = [...seen.values()];\n  // Compare arrays at their first differing element.\n  const lex = (x, y) => { const m = Math.min(x.length, y.length); for (let i = 0; i < m; i++) if (x[i] !== y[i]) return x[i] - y[i]; return x.length - y.length; };\n  // Order subsets by size first and lexicographically second.\n  return res.sort((x, y) => x.length - y.length || lex(x, y));\n}\n"
                },
                time: "O(n · 2ⁿ)",
                space: "O(n · 2ⁿ)"
            }
        ]
    },
    {
        id: "sb-combination-sum-count",
        slug: "combination-sum-count",
        title: "Combination Sum Count",
        difficulty: "medium",
        patternIds: P,
        statement: "Given distinct positive `candidates` that may each be used any number of times, return how many distinct combinations add up to `target`. Combinations that differ only in order count once. A target of 0 has exactly one combination (the empty one).",
        examples: [
            {
                input: "[2,3,6,7], 7",
                output: "2"
            },
            {
                input: "[2,3,5], 8",
                output: "3"
            },
            {
                input: "[2], 1",
                output: "0"
            }
        ],
        constraints: [
            "candidates are distinct positive integers",
            "0 <= target <= 40"
        ],
        functionName: "combinationSumCount",
        starter: {
            js: "function combinationSumCount(candidates, target) {\n  // Distinct combinations (reuse allowed) summing to target.\n}\n",
            ts: "function combinationSumCount(candidates: number[], target: number): number {\n  // Distinct combinations (reuse allowed) summing to target.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        3,
                        6,
                        7
                    ],
                    7
                ],
                expected: 2
            },
            {
                args: [
                    [
                        2,
                        3,
                        5
                    ],
                    8
                ],
                expected: 3
            },
            {
                args: [
                    [
                        2
                    ],
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
                    3
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    3
                ],
                expected: 2
            },
            {
                args: [
                    [
                        2,
                        4
                    ],
                    7
                ],
                expected: 0
            },
            {
                args: [
                    [
                        3
                    ],
                    9
                ],
                expected: 1
            },
            {
                args: [
                    [
                        2,
                        3
                    ],
                    6
                ],
                expected: 2
            },
            {
                args: [
                    [
                        5
                    ],
                    0
                ],
                expected: 1
            }
        ],
        hints: [
            "To avoid counting reorderings, never step backwards through the candidate list.",
            "Recurse with the same index to allow reuse, or a larger index to move on.",
            "Reaching exactly 0 is one combination; going below 0 is a dead end."
        ],
        solutions: [
            {
                label: "Backtracking with a start index",
                approach: "Only ever reuse the current candidate or move forward, so order never repeats.",
                js: "function combinationSumCount(candidates, target) {\n  let count = 0;\n  const go = (start, remaining) => {\n    if (remaining === 0) { count++; return; }\n    if (remaining < 0) return;\n    for (let i = start; i < candidates.length; i++) go(i, remaining - candidates[i]);\n  };\n  go(0, target);\n  return count;\n}\n",
                ts: "function combinationSumCount(candidates: number[], target: number): number {\n  let count = 0;\n  const go = (start: number, remaining: number) => {\n    if (remaining === 0) { count++; return; }\n    if (remaining < 0) return;\n    for (let i = start; i < candidates.length; i++) go(i, remaining - candidates[i]);\n  };\n  go(0, target);\n  return count;\n}\n",
                commentedCode: {
                    js: "function combinationSumCount(candidates, target) {\n  // Count each successful root-to-leaf choice sequence.\n  let count = 0;\n  // Only candidates at or after start may be chosen, preventing reorderings.\n  const go = (start, remaining) => {\n    // Spending the target exactly completes one distinct combination.\n    if (remaining === 0) { count++; return; }\n    // Overshooting the target makes this branch impossible.\n    if (remaining < 0) return;\n    // Recurse with i, not i + 1, because a candidate may be reused.\n    for (let i = start; i < candidates.length; i++) go(i, remaining - candidates[i]);\n  };\n  // Begin with every candidate available and the full target remaining.\n  go(0, target);\n  // Return the number of exact-sum branches found.\n  return count;\n}\n",
                    ts: "function combinationSumCount(candidates: number[], target: number): number {\n  // Count each successful root-to-leaf choice sequence.\n  let count = 0;\n  // Only candidates at or after start may be chosen, preventing reorderings.\n  const go = (start: number, remaining: number) => {\n    // Spending the target exactly completes one distinct combination.\n    if (remaining === 0) { count++; return; }\n    // Overshooting the target makes this branch impossible.\n    if (remaining < 0) return;\n    // Recurse with i, not i + 1, because a candidate may be reused.\n    for (let i = start; i < candidates.length; i++) go(i, remaining - candidates[i]);\n  };\n  // Begin with every candidate available and the full target remaining.\n  go(0, target);\n  // Return the number of exact-sum branches found.\n  return count;\n}\n"
                },
                time: "exponential in target",
                space: "O(target)"
            },
            {
                label: "Count by table",
                approach: "Process candidates one at a time so each combination is counted once.",
                js: "function combinationSumCount(candidates, target) {\n  const ways = new Array(target + 1).fill(0);\n  ways[0] = 1;\n  for (const c of candidates) {\n    for (let sum = c; sum <= target; sum++) ways[sum] += ways[sum - c];\n  }\n  return ways[target];\n}\n",
                ts: "function combinationSumCount(candidates: number[], target: number): number {\n  const ways = new Array(target + 1).fill(0);\n  ways[0] = 1;\n  for (const c of candidates) {\n    for (let sum = c; sum <= target; sum++) ways[sum] += ways[sum - c];\n  }\n  return ways[target];\n}\n",
                commentedCode: {
                    js: "function combinationSumCount(candidates, target) {\n  // ways[sum] counts combinations made from candidates processed so far.\n  const ways = new Array(target + 1).fill(0);\n  // The empty selection is the one way to make a sum of zero.\n  ways[0] = 1;\n  // Processing candidates outside the sum loop prevents counting different orders.\n  for (const c of candidates) {\n    // Scan upward so the same candidate can extend a combination repeatedly.\n    for (let sum = c; sum <= target; sum++) ways[sum] += ways[sum - c];\n  }\n  // Return the number of order-independent combinations that make the target.\n  return ways[target];\n}\n",
                    ts: "function combinationSumCount(candidates: number[], target: number): number {\n  // ways[sum] counts combinations made from candidates processed so far.\n  const ways = new Array(target + 1).fill(0);\n  // The empty selection is the one way to make a sum of zero.\n  ways[0] = 1;\n  // Processing candidates outside the sum loop prevents counting different orders.\n  for (const c of candidates) {\n    // Scan upward so the same candidate can extend a combination repeatedly.\n    for (let sum = c; sum <= target; sum++) ways[sum] += ways[sum - c];\n  }\n  // Return the number of order-independent combinations that make the target.\n  return ways[target];\n}\n"
                },
                time: "O(candidates · target)",
                space: "O(target)"
            }
        ]
    },
    {
        id: "sb-palindrome-partitions",
        slug: "palindrome-partition-count",
        title: "Palindrome Partition Count",
        difficulty: "medium",
        patternIds: P,
        statement: "Return how many ways the string can be cut into pieces where every piece is a palindrome. The empty string has exactly one such partition.",
        examples: [
            {
                input: '"aab"',
                output: "2"
            },
            {
                input: '"a"',
                output: "1"
            },
            {
                input: '""',
                output: "1"
            }
        ],
        constraints: [
            "0 <= s.length <= 16"
        ],
        functionName: "palindromePartitionsCount",
        starter: {
            js: "function palindromePartitionsCount(s) {\n  // Ways to cut s into palindromic pieces.\n}\n",
            ts: "function palindromePartitionsCount(s: string): number {\n  // Ways to cut s into palindromic pieces.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "aab"
                ],
                expected: 2
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
                expected: 1
            }
        ],
        hidden: [
            {
                args: [
                    "aa"
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
                    "aba"
                ],
                expected: 2
            },
            {
                args: [
                    "aaa"
                ],
                expected: 4
            },
            {
                args: [
                    "ab"
                ],
                expected: 1
            },
            {
                args: [
                    "abba"
                ],
                expected: 3
            }
        ],
        hints: [
            "Try every possible first piece; keep the ones that are palindromes.",
            "For each valid first piece, recurse on the remainder of the string.",
            "Reaching the end of the string is one complete partition."
        ],
        solutions: [
            {
                label: "Backtracking over cut points",
                approach: "Take every palindromic prefix and recurse on what's left.",
                js: "function palindromePartitionsCount(s) {\n  const n = s.length;\n  const isPal = (a, b) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  const memo = new Map();\n  const go = (i) => {\n    if (i === n) return 1;\n    if (memo.has(i)) return memo.get(i);\n    let total = 0;\n    for (let j = i; j < n; j++) if (isPal(i, j)) total += go(j + 1);\n    memo.set(i, total);\n    return total;\n  };\n  return go(0);\n}\n",
                ts: "function palindromePartitionsCount(s: string): number {\n  const n = s.length;\n  const isPal = (a: number, b: number) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    if (i === n) return 1;\n    if (memo.has(i)) return memo.get(i) as number;\n    let total = 0;\n    for (let j = i; j < n; j++) if (isPal(i, j)) total += go(j + 1);\n    memo.set(i, total);\n    return total;\n  };\n  return go(0);\n}\n",
                commentedCode: {
                    js: "function palindromePartitionsCount(s) {\n  // Store the end boundary once for base cases and loops.\n  const n = s.length;\n  // Check a candidate piece by comparing characters from both ends inward.\n  const isPal = (a, b) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  // Cache the number of partitions for each suffix start.\n  const memo = new Map();\n  const go = (i) => {\n    // Consuming the whole string completes one valid partition.\n    if (i === n) return 1;\n    // Reuse the answer for a suffix already counted.\n    if (memo.has(i)) return memo.get(i);\n    let total = 0;\n    // Try every prefix of this suffix and recurse only when it is a palindrome.\n    for (let j = i; j < n; j++) if (isPal(i, j)) total += go(j + 1);\n    // Save the combined count for this suffix.\n    memo.set(i, total);\n    return total;\n  };\n  // Count partitions of the entire string.\n  return go(0);\n}\n",
                    ts: "function palindromePartitionsCount(s: string): number {\n  // Store the end boundary once for base cases and loops.\n  const n = s.length;\n  // Check a candidate piece by comparing characters from both ends inward.\n  const isPal = (a: number, b: number) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  // Cache the number of partitions for each suffix start.\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    // Consuming the whole string completes one valid partition.\n    if (i === n) return 1;\n    // Reuse the answer for a suffix already counted.\n    if (memo.has(i)) return memo.get(i) as number;\n    let total = 0;\n    // Try every prefix of this suffix and recurse only when it is a palindrome.\n    for (let j = i; j < n; j++) if (isPal(i, j)) total += go(j + 1);\n    // Save the combined count for this suffix.\n    memo.set(i, total);\n    return total;\n  };\n  // Count partitions of the entire string.\n  return go(0);\n}\n"
                },
                time: "O(n³)",
                space: "O(n)"
            },
            {
                label: "Count from the right",
                approach: "Fill a table where each entry counts partitions of the suffix starting there.",
                js: "function palindromePartitionsCount(s) {\n  const n = s.length;\n  const isPal = (a, b) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  const ways = new Array(n + 1).fill(0);\n  ways[n] = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    for (let j = i; j < n; j++) if (isPal(i, j)) ways[i] += ways[j + 1];\n  }\n  return ways[0];\n}\n",
                ts: "function palindromePartitionsCount(s: string): number {\n  const n = s.length;\n  const isPal = (a: number, b: number) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  const ways = new Array(n + 1).fill(0);\n  ways[n] = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    for (let j = i; j < n; j++) if (isPal(i, j)) ways[i] += ways[j + 1];\n  }\n  return ways[0];\n}\n",
                commentedCode: {
                    js: "function palindromePartitionsCount(s) {\n  // Store the string length for the suffix table boundaries.\n  const n = s.length;\n  // Test whether s[a..b] reads the same from both directions.\n  const isPal = (a, b) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  // ways[i] will count valid partitions of the suffix beginning at i.\n  const ways = new Array(n + 1).fill(0);\n  // The empty suffix has one partition: choose no more pieces.\n  ways[n] = 1;\n  // Work right to left so every later suffix count is already known.\n  for (let i = n - 1; i >= 0; i--) {\n    // Each palindromic first piece contributes all partitions after that piece.\n    for (let j = i; j < n; j++) if (isPal(i, j)) ways[i] += ways[j + 1];\n  }\n  // Entry zero counts partitions of the whole string.\n  return ways[0];\n}\n",
                    ts: "function palindromePartitionsCount(s: string): number {\n  // Store the string length for the suffix table boundaries.\n  const n = s.length;\n  // Test whether s[a..b] reads the same from both directions.\n  const isPal = (a: number, b: number) => { while (a < b) { if (s[a] !== s[b]) return false; a++; b--; } return true; };\n  // ways[i] will count valid partitions of the suffix beginning at i.\n  const ways = new Array(n + 1).fill(0);\n  // The empty suffix has one partition: choose no more pieces.\n  ways[n] = 1;\n  // Work right to left so every later suffix count is already known.\n  for (let i = n - 1; i >= 0; i--) {\n    // Each palindromic first piece contributes all partitions after that piece.\n    for (let j = i; j < n; j++) if (isPal(i, j)) ways[i] += ways[j + 1];\n  }\n  // Entry zero counts partitions of the whole string.\n  return ways[0];\n}\n"
                },
                time: "O(n³)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "sb-n-queens-count",
        slug: "n-queens-count",
        title: "N-Queens Count",
        difficulty: "hard",
        patternIds: P,
        statement: "Return how many ways `n` queens can be placed on an `n` × `n` board so that no two share a row, column, or diagonal. `n = 0` counts as one (empty) arrangement.",
        examples: [
            {
                input: "4",
                output: "2"
            },
            {
                input: "1",
                output: "1"
            },
            {
                input: "2",
                output: "0"
            }
        ],
        constraints: [
            "0 <= n <= 9"
        ],
        functionName: "nQueensCount",
        starter: {
            js: "function nQueensCount(n) {\n  // Number of valid n-queens placements.\n}\n",
            ts: "function nQueensCount(n: number): number {\n  // Number of valid n-queens placements.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    4
                ],
                expected: 2
            },
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
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    0
                ],
                expected: 1
            },
            {
                args: [
                    3
                ],
                expected: 0
            },
            {
                args: [
                    5
                ],
                expected: 10
            },
            {
                args: [
                    6
                ],
                expected: 4
            },
            {
                args: [
                    7
                ],
                expected: 40
            },
            {
                args: [
                    8
                ],
                expected: 92
            }
        ],
        hints: [
            "Place exactly one queen per row, so you only choose a column for each row.",
            "Track used columns and both diagonals — `row - col` and `row + col` identify them.",
            "Undo each placement before trying the next column: choose, explore, un-choose."
        ],
        solutions: [
            {
                label: "Backtracking row by row",
                approach: "Try each column in the current row, pruning conflicts with sets.",
                js: "function nQueensCount(n) {\n  if (n === 0) return 1;\n  let count = 0;\n  const cols = new Set(), diag = new Set(), anti = new Set();\n  const go = (r) => {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (cols.has(c) || diag.has(r - c) || anti.has(r + c)) continue;\n      cols.add(c); diag.add(r - c); anti.add(r + c);\n      go(r + 1);\n      cols.delete(c); diag.delete(r - c); anti.delete(r + c);\n    }\n  };\n  go(0);\n  return count;\n}\n",
                ts: "function nQueensCount(n: number): number {\n  if (n === 0) return 1;\n  let count = 0;\n  const cols = new Set<number>(), diag = new Set<number>(), anti = new Set<number>();\n  const go = (r: number) => {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (cols.has(c) || diag.has(r - c) || anti.has(r + c)) continue;\n      cols.add(c); diag.add(r - c); anti.add(r + c);\n      go(r + 1);\n      cols.delete(c); diag.delete(r - c); anti.delete(r + c);\n    }\n  };\n  go(0);\n  return count;\n}\n",
                commentedCode: {
                    js: "function nQueensCount(n) {\n  // The empty board has one valid empty placement.\n  if (n === 0) return 1;\n  let count = 0;\n  // Track attacked columns and the two diagonal identifiers.\n  const cols = new Set(), diag = new Set(), anti = new Set();\n  const go = (r) => {\n    // Placing one queen in every row completes a valid board.\n    if (r === n) { count++; return; }\n    // Try placing the current row's queen in each column.\n    for (let c = 0; c < n; c++) {\n      // Skip columns or diagonals already occupied by an earlier queen.\n      if (cols.has(c) || diag.has(r - c) || anti.has(r + c)) continue;\n      // Choose this square by marking all three attack lines.\n      cols.add(c); diag.add(r - c); anti.add(r + c);\n      // Move to the next row while this queen remains placed.\n      go(r + 1);\n      // Undo the choice so the next column starts from a clean board.\n      cols.delete(c); diag.delete(r - c); anti.delete(r + c);\n    }\n  };\n  // Begin by choosing a column for row zero.\n  go(0);\n  return count;\n}\n",
                    ts: "function nQueensCount(n: number): number {\n  // The empty board has one valid empty placement.\n  if (n === 0) return 1;\n  let count = 0;\n  // Track attacked columns and the two diagonal identifiers.\n  const cols = new Set<number>(), diag = new Set<number>(), anti = new Set<number>();\n  const go = (r: number) => {\n    // Placing one queen in every row completes a valid board.\n    if (r === n) { count++; return; }\n    // Try placing the current row's queen in each column.\n    for (let c = 0; c < n; c++) {\n      // Skip columns or diagonals already occupied by an earlier queen.\n      if (cols.has(c) || diag.has(r - c) || anti.has(r + c)) continue;\n      // Choose this square by marking all three attack lines.\n      cols.add(c); diag.add(r - c); anti.add(r + c);\n      // Move to the next row while this queen remains placed.\n      go(r + 1);\n      // Undo the choice so the next column starts from a clean board.\n      cols.delete(c); diag.delete(r - c); anti.delete(r + c);\n    }\n  };\n  // Begin by choosing a column for row zero.\n  go(0);\n  return count;\n}\n"
                },
                time: "O(n!) with pruning",
                space: "O(n)"
            },
            {
                label: "Track placements in an array",
                approach: "Keep the chosen column per row and validate against earlier rows.",
                js: "function nQueensCount(n) {\n  if (n === 0) return 1;\n  const placed = [];\n  let count = 0;\n  const safe = (r, c) => placed.every((pc, pr) => pc !== c && Math.abs(pc - c) !== Math.abs(pr - r));\n  const go = (r) => {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (!safe(r, c)) continue;\n      placed.push(c);\n      go(r + 1);\n      placed.pop();\n    }\n  };\n  go(0);\n  return count;\n}\n",
                ts: "function nQueensCount(n: number): number {\n  if (n === 0) return 1;\n  const placed: number[] = [];\n  let count = 0;\n  const safe = (r: number, c: number) => placed.every((pc, pr) => pc !== c && Math.abs(pc - c) !== Math.abs(pr - r));\n  const go = (r: number) => {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (!safe(r, c)) continue;\n      placed.push(c);\n      go(r + 1);\n      placed.pop();\n    }\n  };\n  go(0);\n  return count;\n}\n",
                commentedCode: {
                    js: "function nQueensCount(n) {\n  // The board with no rows has one empty arrangement.\n  if (n === 0) return 1;\n  // placed[row] stores the column chosen for that earlier row.\n  const placed = [];\n  let count = 0;\n  // A square is safe when no earlier queen shares its column or diagonal.\n  const safe = (r, c) => placed.every((pc, pr) => pc !== c && Math.abs(pc - c) !== Math.abs(pr - r));\n  const go = (r) => {\n    // One safe choice in every row completes a valid arrangement.\n    if (r === n) { count++; return; }\n    // Consider every possible column in this row.\n    for (let c = 0; c < n; c++) {\n      // Prune any square attacked by a previous queen.\n      if (!safe(r, c)) continue;\n      // Record this row's choice, solve the next row, then remove it.\n      placed.push(c);\n      go(r + 1);\n      placed.pop();\n    }\n  };\n  // Start with an empty placement and fill row zero.\n  go(0);\n  return count;\n}\n",
                    ts: "function nQueensCount(n: number): number {\n  // The board with no rows has one empty arrangement.\n  if (n === 0) return 1;\n  // placed[row] stores the column chosen for that earlier row.\n  const placed: number[] = [];\n  let count = 0;\n  // A square is safe when no earlier queen shares its column or diagonal.\n  const safe = (r: number, c: number) => placed.every((pc, pr) => pc !== c && Math.abs(pc - c) !== Math.abs(pr - r));\n  const go = (r: number) => {\n    // One safe choice in every row completes a valid arrangement.\n    if (r === n) { count++; return; }\n    // Consider every possible column in this row.\n    for (let c = 0; c < n; c++) {\n      // Prune any square attacked by a previous queen.\n      if (!safe(r, c)) continue;\n      // Record this row's choice, solve the next row, then remove it.\n      placed.push(c);\n      go(r + 1);\n      placed.pop();\n    }\n  };\n  // Start with an empty placement and fill row zero.\n  go(0);\n  return count;\n}\n"
                },
                time: "O(n! · n)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "sb-permutations-distinct-count",
        slug: "distinct-permutation-count",
        title: "Distinct Permutation Count",
        difficulty: "medium",
        patternIds: P,
        statement: "Return how many **distinct** orderings the values have. Repeated values make some orderings identical. An empty list has one ordering.",
        examples: [
            {
                input: "[1,1,2]",
                output: "3"
            },
            {
                input: "[1,2,3]",
                output: "6"
            },
            {
                input: "[]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= nums.length <= 8"
        ],
        functionName: "permutationsDistinctCount",
        starter: {
            js: "function permutationsDistinctCount(nums) {\n  // Number of distinct orderings.\n}\n",
            ts: "function permutationsDistinctCount(nums: number[]): number {\n  // Number of distinct orderings.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        1,
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
                expected: 6
            },
            {
                args: [
                    []
                ],
                expected: 1
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
                        2
                    ]
                ],
                expected: 2
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
                        1,
                        1,
                        2,
                        2
                    ]
                ],
                expected: 6
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
                expected: 24
            }
        ],
        hints: [
            "Without repeats the answer is n!.",
            "Each value repeated c times over-counts by a factor of c!.",
            "So divide n! by the factorial of every repeat count."
        ],
        solutions: [
            {
                label: "Factorial with repeat correction",
                approach: "n! divided by the factorial of each value's multiplicity.",
                js: "function permutationsDistinctCount(nums) {\n  const counts = new Map();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  const fact = (k) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; };\n  let result = fact(nums.length);\n  for (const c of counts.values()) result /= fact(c);\n  return result;\n}\n",
                ts: "function permutationsDistinctCount(nums: number[]): number {\n  const counts = new Map<number, number>();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  const fact = (k: number) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; };\n  let result = fact(nums.length);\n  for (const c of counts.values()) result /= fact(c);\n  return result;\n}\n",
                commentedCode: {
                    js: "function permutationsDistinctCount(nums) {\n  // Count how many times each value occurs.\n  const counts = new Map();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  // Compute a small factorial iteratively; 0! and 1! both remain one.\n  const fact = (k) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; };\n  // If every position were distinguishable, there would be n! orderings.\n  let result = fact(nums.length);\n  // Divide out the c! indistinguishable reorderings of each repeated value.\n  for (const c of counts.values()) result /= fact(c);\n  return result;\n}\n",
                    ts: "function permutationsDistinctCount(nums: number[]): number {\n  // Count how many times each value occurs.\n  const counts = new Map<number, number>();\n  for (const v of nums) counts.set(v, (counts.get(v) || 0) + 1);\n  // Compute a small factorial iteratively; 0! and 1! both remain one.\n  const fact = (k: number) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; };\n  // If every position were distinguishable, there would be n! orderings.\n  let result = fact(nums.length);\n  // Divide out the c! indistinguishable reorderings of each repeated value.\n  for (const c of counts.values()) result /= fact(c);\n  return result;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Backtracking, skipping repeats",
                approach: "Generate orderings but never reuse the same value at one position.",
                js: "function permutationsDistinctCount(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const used = new Array(a.length).fill(false);\n  let count = 0;\n  const go = (depth) => {\n    if (depth === a.length) { count++; return; }\n    for (let i = 0; i < a.length; i++) {\n      if (used[i]) continue;\n      if (i > 0 && a[i] === a[i - 1] && !used[i - 1]) continue;\n      used[i] = true;\n      go(depth + 1);\n      used[i] = false;\n    }\n  };\n  go(0);\n  return count;\n}\n",
                ts: "function permutationsDistinctCount(nums: number[]): number {\n  const a = [...nums].sort((x, y) => x - y);\n  const used = new Array(a.length).fill(false);\n  let count = 0;\n  const go = (depth: number) => {\n    if (depth === a.length) { count++; return; }\n    for (let i = 0; i < a.length; i++) {\n      if (used[i]) continue;\n      if (i > 0 && a[i] === a[i - 1] && !used[i - 1]) continue;\n      used[i] = true;\n      go(depth + 1);\n      used[i] = false;\n    }\n  };\n  go(0);\n  return count;\n}\n",
                commentedCode: {
                    js: "function permutationsDistinctCount(nums) {\n  // Sort a copy so equal choices appear next to one another.\n  const a = [...nums].sort((x, y) => x - y);\n  // Mark which input positions already occupy the current permutation.\n  const used = new Array(a.length).fill(false);\n  let count = 0;\n  const go = (depth) => {\n    // Filling every output position completes one distinct ordering.\n    if (depth === a.length) { count++; return; }\n    // Choose which unused input position fills this depth.\n    for (let i = 0; i < a.length; i++) {\n      // A position cannot appear twice in one permutation.\n      if (used[i]) continue;\n      // Among equal values, choose the earlier unused copy first to avoid duplicates.\n      if (i > 0 && a[i] === a[i - 1] && !used[i - 1]) continue;\n      // Choose this position, fill the next depth, then make it available again.\n      used[i] = true;\n      go(depth + 1);\n      used[i] = false;\n    }\n  };\n  // Build orderings from the first output position.\n  go(0);\n  return count;\n}\n",
                    ts: "function permutationsDistinctCount(nums: number[]): number {\n  // Sort a copy so equal choices appear next to one another.\n  const a = [...nums].sort((x, y) => x - y);\n  // Mark which input positions already occupy the current permutation.\n  const used = new Array(a.length).fill(false);\n  let count = 0;\n  const go = (depth: number) => {\n    // Filling every output position completes one distinct ordering.\n    if (depth === a.length) { count++; return; }\n    // Choose which unused input position fills this depth.\n    for (let i = 0; i < a.length; i++) {\n      // A position cannot appear twice in one permutation.\n      if (used[i]) continue;\n      // Among equal values, choose the earlier unused copy first to avoid duplicates.\n      if (i > 0 && a[i] === a[i - 1] && !used[i - 1]) continue;\n      // Choose this position, fill the next depth, then make it available again.\n      used[i] = true;\n      go(depth + 1);\n      used[i] = false;\n    }\n  };\n  // Build orderings from the first output position.\n  go(0);\n  return count;\n}\n"
                },
                time: "O(n · n!)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "sb-letter-combinations",
        slug: "letter-combinations",
        title: "Phone Letter Combinations",
        difficulty: "medium",
        patternIds: P,
        statement: "On a phone keypad 2–9 map to letters (2:abc, 3:def, 4:ghi, 5:jkl, 6:mno, 7:pqrs, 8:tuv, 9:wxyz). Return every letter combination the digit string could spell, sorted lexicographically. An empty input gives an empty list.",
        examples: [
            {
                input: '"23"',
                output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]'
            },
            {
                input: '"2"',
                output: '["a","b","c"]'
            },
            {
                input: '""',
                output: "[]"
            }
        ],
        constraints: [
            "digits contains only characters 2-9",
            "0 <= digits.length <= 4"
        ],
        functionName: "letterCombinations",
        starter: {
            js: "function letterCombinations(digits) {\n  // Every letter combination, sorted.\n}\n",
            ts: "function letterCombinations(digits: string): string[] {\n  // Every letter combination, sorted.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    "23"
                ],
                expected: [
                    "ad",
                    "ae",
                    "af",
                    "bd",
                    "be",
                    "bf",
                    "cd",
                    "ce",
                    "cf"
                ]
            },
            {
                args: [
                    "2"
                ],
                expected: [
                    "a",
                    "b",
                    "c"
                ]
            },
            {
                args: [
                    ""
                ],
                expected: []
            }
        ],
        hidden: [
            {
                args: [
                    "9"
                ],
                expected: [
                    "w",
                    "x",
                    "y",
                    "z"
                ]
            },
            {
                args: [
                    "7"
                ],
                expected: [
                    "p",
                    "q",
                    "r",
                    "s"
                ]
            },
            {
                args: [
                    "22"
                ],
                expected: [
                    "aa",
                    "ab",
                    "ac",
                    "ba",
                    "bb",
                    "bc",
                    "ca",
                    "cb",
                    "cc"
                ]
            },
            {
                args: [
                    "34"
                ],
                expected: [
                    "dg",
                    "dh",
                    "di",
                    "eg",
                    "eh",
                    "ei",
                    "fg",
                    "fh",
                    "fi"
                ]
            },
            {
                args: [
                    "5"
                ],
                expected: [
                    "j",
                    "k",
                    "l"
                ]
            },
            {
                args: [
                    "89"
                ],
                expected: [
                    "tw",
                    "tx",
                    "ty",
                    "tz",
                    "uw",
                    "ux",
                    "uy",
                    "uz",
                    "vw",
                    "vx",
                    "vy",
                    "vz"
                ]
            }
        ],
        hints: [
            "Build the string one digit at a time, branching over that digit's letters.",
            "Recording a combination when you've consumed every digit.",
            "Iterating each digit's letters in order produces lexicographic output naturally."
        ],
        solutions: [
            {
                label: "Backtracking over digits",
                approach: "Append one letter per digit, recording completed strings.",
                js: "function letterCombinations(digits) {\n  if (digits.length === 0) return [];\n  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  const out = [];\n  const go = (i, cur) => {\n    if (i === digits.length) { out.push(cur); return; }\n    for (const ch of map[digits[i]]) go(i + 1, cur + ch);\n  };\n  go(0, '');\n  return out;\n}\n",
                ts: "function letterCombinations(digits: string): string[] {\n  if (digits.length === 0) return [];\n  const map: Record<string, string> = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  const out: string[] = [];\n  const go = (i: number, cur: string) => {\n    if (i === digits.length) { out.push(cur); return; }\n    for (const ch of map[digits[i]]) go(i + 1, cur + ch);\n  };\n  go(0, '');\n  return out;\n}\n",
                commentedCode: {
                    js: "function letterCombinations(digits) {\n  // The specification returns no combinations for an empty digit string.\n  if (digits.length === 0) return [];\n  // Map every supported keypad digit to its letters in sorted order.\n  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  const out = [];\n  const go = (i, cur) => {\n    // One chosen letter per digit completes a combination.\n    if (i === digits.length) { out.push(cur); return; }\n    // Branch over every letter assigned to the current digit.\n    for (const ch of map[digits[i]]) go(i + 1, cur + ch);\n  };\n  // Begin before the first digit with an empty prefix.\n  go(0, '');\n  // Ordered digit mappings make the traversal output lexicographic already.\n  return out;\n}\n",
                    ts: "function letterCombinations(digits: string): string[] {\n  // The specification returns no combinations for an empty digit string.\n  if (digits.length === 0) return [];\n  // Map every supported keypad digit to its letters in sorted order.\n  const map: Record<string, string> = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  const out: string[] = [];\n  const go = (i: number, cur: string) => {\n    // One chosen letter per digit completes a combination.\n    if (i === digits.length) { out.push(cur); return; }\n    // Branch over every letter assigned to the current digit.\n    for (const ch of map[digits[i]]) go(i + 1, cur + ch);\n  };\n  // Begin before the first digit with an empty prefix.\n  go(0, '');\n  // Ordered digit mappings make the traversal output lexicographic already.\n  return out;\n}\n"
                },
                time: "O(4ⁿ)",
                space: "O(4ⁿ)"
            },
            {
                label: "Iterative expansion",
                approach: "Grow the set of prefixes one digit at a time.",
                js: "function letterCombinations(digits) {\n  if (digits.length === 0) return [];\n  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  let out = [''];\n  for (const d of digits) {\n    const next = [];\n    for (const prefix of out) for (const ch of map[d]) next.push(prefix + ch);\n    out = next;\n  }\n  return out.sort();\n}\n",
                ts: "function letterCombinations(digits: string): string[] {\n  if (digits.length === 0) return [];\n  const map: Record<string, string> = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  let out: string[] = [''];\n  for (const d of digits) {\n    const next: string[] = [];\n    for (const prefix of out) for (const ch of map[d]) next.push(prefix + ch);\n    out = next;\n  }\n  return out.sort();\n}\n",
                commentedCode: {
                    js: "function letterCombinations(digits) {\n  // The empty input has no keypad spellings under this specification.\n  if (digits.length === 0) return [];\n  // Store each keypad row in lexicographic letter order.\n  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  // Begin with one empty prefix to extend.\n  let out = [''];\n  // Consume the digits from left to right.\n  for (const d of digits) {\n    // Build a fresh list containing every extension for this digit.\n    const next = [];\n    for (const prefix of out) for (const ch of map[d]) next.push(prefix + ch);\n    // Those extended strings become the prefixes for the next digit.\n    out = next;\n  }\n  // Sort explicitly to guarantee the required output order.\n  return out.sort();\n}\n",
                    ts: "function letterCombinations(digits: string): string[] {\n  // The empty input has no keypad spellings under this specification.\n  if (digits.length === 0) return [];\n  // Store each keypad row in lexicographic letter order.\n  const map: Record<string, string> = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  // Begin with one empty prefix to extend.\n  let out: string[] = [''];\n  // Consume the digits from left to right.\n  for (const d of digits) {\n    // Build a fresh list containing every extension for this digit.\n    const next: string[] = [];\n    for (const prefix of out) for (const ch of map[d]) next.push(prefix + ch);\n    // Those extended strings become the prefixes for the next digit.\n    out = next;\n  }\n  // Sort explicitly to guarantee the required output order.\n  return out.sort();\n}\n"
                },
                time: "O(4ⁿ)",
                space: "O(4ⁿ)"
            }
        ]
    },
    {
        id: "sb-count-subsets-size-k",
        slug: "count-subsets-of-size-k",
        title: "Count Subsets of Size K",
        difficulty: "medium",
        patternIds: P,
        statement: "Return how many subsets of exactly `k` items can be chosen from `n` distinct items. If `k` exceeds `n`, the answer is 0.",
        examples: [
            {
                input: "5, 2",
                output: "10"
            },
            {
                input: "4, 0",
                output: "1"
            },
            {
                input: "3, 5",
                output: "0"
            }
        ],
        constraints: [
            "0 <= n <= 20",
            "0 <= k"
        ],
        functionName: "countSubsetsOfSizeK",
        starter: {
            js: "function countSubsetsOfSizeK(n, k) {\n  // Number of k-item subsets of n items.\n}\n",
            ts: "function countSubsetsOfSizeK(n: number, k: number): number {\n  // Number of k-item subsets of n items.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    2
                ],
                expected: 10
            },
            {
                args: [
                    4,
                    0
                ],
                expected: 1
            },
            {
                args: [
                    3,
                    5
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    0,
                    0
                ],
                expected: 1
            },
            {
                args: [
                    1,
                    1
                ],
                expected: 1
            },
            {
                args: [
                    6,
                    3
                ],
                expected: 20
            },
            {
                args: [
                    10,
                    5
                ],
                expected: 252
            },
            {
                args: [
                    5,
                    5
                ],
                expected: 1
            },
            {
                args: [
                    5,
                    6
                ],
                expected: 0
            }
        ],
        hints: [
            "For each item you either take it or skip it — but only count paths that pick exactly k.",
            "That recursion is C(n,k) = C(n-1,k-1) + C(n-1,k).",
            "Base cases: k = 0 gives 1, and k > n gives 0."
        ],
        solutions: [
            {
                label: "Choose-or-skip recursion",
                approach: "Count the take/skip branches that end with exactly k chosen.",
                js: "function countSubsetsOfSizeK(n, k) {\n  if (k > n) return 0;\n  const memo = new Map();\n  const go = (remaining, need) => {\n    if (need === 0) return 1;\n    if (remaining < need) return 0;\n    const key = remaining * 100 + need;\n    if (memo.has(key)) return memo.get(key);\n    const total = go(remaining - 1, need - 1) + go(remaining - 1, need);\n    memo.set(key, total);\n    return total;\n  };\n  return go(n, k);\n}\n",
                ts: "function countSubsetsOfSizeK(n: number, k: number): number {\n  if (k > n) return 0;\n  const memo = new Map<number, number>();\n  const go = (remaining: number, need: number): number => {\n    if (need === 0) return 1;\n    if (remaining < need) return 0;\n    const key = remaining * 100 + need;\n    if (memo.has(key)) return memo.get(key) as number;\n    const total = go(remaining - 1, need - 1) + go(remaining - 1, need);\n    memo.set(key, total);\n    return total;\n  };\n  return go(n, k);\n}\n",
                commentedCode: {
                    js: "function countSubsetsOfSizeK(n, k) {\n  // It is impossible to choose more items than exist.\n  if (k > n) return 0;\n  // Cache each (items remaining, items still needed) subproblem.\n  const memo = new Map();\n  const go = (remaining, need) => {\n    // Once no more items are needed, this branch represents one valid subset.\n    if (need === 0) return 1;\n    // Too few remaining items means the branch cannot reach the requested size.\n    if (remaining < need) return 0;\n    // Encode the two bounded state values into one numeric key.\n    const key = remaining * 100 + need;\n    if (memo.has(key)) return memo.get(key);\n    // For the next item, add the counts from choosing it and skipping it.\n    const total = go(remaining - 1, need - 1) + go(remaining - 1, need);\n    // Save this binomial subproblem before returning it.\n    memo.set(key, total);\n    return total;\n  };\n  // Begin with all n items available and k choices required.\n  return go(n, k);\n}\n",
                    ts: "function countSubsetsOfSizeK(n: number, k: number): number {\n  // It is impossible to choose more items than exist.\n  if (k > n) return 0;\n  // Cache each (items remaining, items still needed) subproblem.\n  const memo = new Map<number, number>();\n  const go = (remaining: number, need: number): number => {\n    // Once no more items are needed, this branch represents one valid subset.\n    if (need === 0) return 1;\n    // Too few remaining items means the branch cannot reach the requested size.\n    if (remaining < need) return 0;\n    // Encode the two bounded state values into one numeric key.\n    const key = remaining * 100 + need;\n    if (memo.has(key)) return memo.get(key) as number;\n    // For the next item, add the counts from choosing it and skipping it.\n    const total = go(remaining - 1, need - 1) + go(remaining - 1, need);\n    // Save this binomial subproblem before returning it.\n    memo.set(key, total);\n    return total;\n  };\n  // Begin with all n items available and k choices required.\n  return go(n, k);\n}\n"
                },
                time: "O(n·k)",
                space: "O(n·k)"
            },
            {
                label: "Multiplicative formula",
                approach: "Build C(n,k) by multiplying and dividing term by term.",
                js: "function countSubsetsOfSizeK(n, k) {\n  if (k > n) return 0;\n  let result = 1;\n  for (let i = 1; i <= k; i++) result = (result * (n - k + i)) / i;\n  return Math.round(result);\n}\n",
                ts: "function countSubsetsOfSizeK(n: number, k: number): number {\n  if (k > n) return 0;\n  let result = 1;\n  for (let i = 1; i <= k; i++) result = (result * (n - k + i)) / i;\n  return Math.round(result);\n}\n",
                commentedCode: {
                    js: "function countSubsetsOfSizeK(n, k) {\n  // There are no k-item subsets when k is larger than n.\n  if (k > n) return 0;\n  // Build C(n, k) from the product formula, starting with its empty product.\n  let result = 1;\n  // After step i, result equals C(n - k + i, i).\n  for (let i = 1; i <= k; i++) result = (result * (n - k + i)) / i;\n  // Remove any tiny floating-point error from the mathematically integral result.\n  return Math.round(result);\n}\n",
                    ts: "function countSubsetsOfSizeK(n: number, k: number): number {\n  // There are no k-item subsets when k is larger than n.\n  if (k > n) return 0;\n  // Build C(n, k) from the product formula, starting with its empty product.\n  let result = 1;\n  // After step i, result equals C(n - k + i, i).\n  for (let i = 1; i <= k; i++) result = (result * (n - k + i)) / i;\n  // Remove any tiny floating-point error from the mathematically integral result.\n  return Math.round(result);\n}\n"
                },
                time: "O(k)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "sb-count-decodings",
        slug: "count-decodings",
        title: "Count Decodings",
        difficulty: "medium",
        patternIds: P,
        statement: "Letters map to numbers as A=1 … Z=26. Given a digit string, return how many ways it can be decoded into letters. A piece may not have a leading zero, so `\"06\"` decodes no ways. The empty string decodes exactly one way.",
        examples: [
            {
                input: '"12"',
                output: "2"
            },
            {
                input: '"226"',
                output: "3"
            },
            {
                input: '"0"',
                output: "0"
            }
        ],
        constraints: [
            "the string contains only digits",
            "0 <= s.length <= 16"
        ],
        functionName: "countDecodings",
        starter: {
            js: "function countDecodings(s) {\n  // Ways to decode the digit string.\n}\n",
            ts: "function countDecodings(s: string): number {\n  // Ways to decode the digit string.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "12"
                ],
                expected: 2
            },
            {
                args: [
                    "226"
                ],
                expected: 3
            },
            {
                args: [
                    "0"
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    ""
                ],
                expected: 1
            },
            {
                args: [
                    "1"
                ],
                expected: 1
            },
            {
                args: [
                    "10"
                ],
                expected: 1
            },
            {
                args: [
                    "27"
                ],
                expected: 1
            },
            {
                args: [
                    "06"
                ],
                expected: 0
            },
            {
                args: [
                    "11106"
                ],
                expected: 2
            }
        ],
        hints: [
            "At each position you may take one digit, or two digits when they form 10–26.",
            "A piece starting with '0' is invalid, so that branch contributes nothing.",
            "Caching by position turns the exponential branching into a linear scan."
        ],
        solutions: [
            {
                label: "Backtracking with memoisation",
                approach: "Branch on one-digit and two-digit pieces, caching each position.",
                js: "function countDecodings(s) {\n  const n = s.length;\n  const memo = new Map();\n  const go = (i) => {\n    if (i === n) return 1;\n    if (s[i] === '0') return 0;\n    if (memo.has(i)) return memo.get(i);\n    let total = go(i + 1);\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) total += go(i + 2);\n    memo.set(i, total);\n    return total;\n  };\n  return go(0);\n}\n",
                ts: "function countDecodings(s: string): number {\n  const n = s.length;\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    if (i === n) return 1;\n    if (s[i] === '0') return 0;\n    if (memo.has(i)) return memo.get(i) as number;\n    let total = go(i + 1);\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) total += go(i + 2);\n    memo.set(i, total);\n    return total;\n  };\n  return go(0);\n}\n",
                commentedCode: {
                    js: "function countDecodings(s) {\n  // Cache the string boundary used by every recursive state.\n  const n = s.length;\n  // Memoize the number of decodings for each suffix position.\n  const memo = new Map();\n  const go = (i) => {\n    // Consuming every digit completes one valid decoding.\n    if (i === n) return 1;\n    // No letter is encoded by a piece that begins with zero.\n    if (s[i] === '0') return 0;\n    // Reuse a suffix count already computed through another branch.\n    if (memo.has(i)) return memo.get(i);\n    // A nonzero single digit always encodes one letter.\n    let total = go(i + 1);\n    // A two-digit piece adds another branch only when its value is 10 through 26.\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) total += go(i + 2);\n    // Save and return all decodings beginning at this position.\n    memo.set(i, total);\n    return total;\n  };\n  // Count decodings of the full digit string.\n  return go(0);\n}\n",
                    ts: "function countDecodings(s: string): number {\n  // Cache the string boundary used by every recursive state.\n  const n = s.length;\n  // Memoize the number of decodings for each suffix position.\n  const memo = new Map<number, number>();\n  const go = (i: number): number => {\n    // Consuming every digit completes one valid decoding.\n    if (i === n) return 1;\n    // No letter is encoded by a piece that begins with zero.\n    if (s[i] === '0') return 0;\n    // Reuse a suffix count already computed through another branch.\n    if (memo.has(i)) return memo.get(i) as number;\n    // A nonzero single digit always encodes one letter.\n    let total = go(i + 1);\n    // A two-digit piece adds another branch only when its value is 10 through 26.\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) total += go(i + 2);\n    // Save and return all decodings beginning at this position.\n    memo.set(i, total);\n    return total;\n  };\n  // Count decodings of the full digit string.\n  return go(0);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Table from the right",
                approach: "Each position's count follows from the next one or two positions.",
                js: "function countDecodings(s) {\n  const n = s.length;\n  const ways = new Array(n + 1).fill(0);\n  ways[n] = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    if (s[i] === '0') { ways[i] = 0; continue; }\n    ways[i] = ways[i + 1];\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) ways[i] += ways[i + 2];\n  }\n  return ways[0];\n}\n",
                ts: "function countDecodings(s: string): number {\n  const n = s.length;\n  const ways = new Array(n + 1).fill(0);\n  ways[n] = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    if (s[i] === '0') { ways[i] = 0; continue; }\n    ways[i] = ways[i + 1];\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) ways[i] += ways[i + 2];\n  }\n  return ways[0];\n}\n",
                commentedCode: {
                    js: "function countDecodings(s) {\n  // Use one table entry for every suffix start plus the empty suffix.\n  const n = s.length;\n  const ways = new Array(n + 1).fill(0);\n  // There is one way to decode no remaining digits.\n  ways[n] = 1;\n  // Fill suffix answers right to left so later positions are ready first.\n  for (let i = n - 1; i >= 0; i--) {\n    // Zero cannot begin either a one-digit or two-digit piece.\n    if (s[i] === '0') { ways[i] = 0; continue; }\n    // Taking the current digit alone leaves the suffix at i + 1.\n    ways[i] = ways[i + 1];\n    // A valid two-digit letter also allows every decoding after those two digits.\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) ways[i] += ways[i + 2];\n  }\n  // Position zero counts decodings of the complete input.\n  return ways[0];\n}\n",
                    ts: "function countDecodings(s: string): number {\n  // Use one table entry for every suffix start plus the empty suffix.\n  const n = s.length;\n  const ways = new Array(n + 1).fill(0);\n  // There is one way to decode no remaining digits.\n  ways[n] = 1;\n  // Fill suffix answers right to left so later positions are ready first.\n  for (let i = n - 1; i >= 0; i--) {\n    // Zero cannot begin either a one-digit or two-digit piece.\n    if (s[i] === '0') { ways[i] = 0; continue; }\n    // Taking the current digit alone leaves the suffix at i + 1.\n    ways[i] = ways[i + 1];\n    // A valid two-digit letter also allows every decoding after those two digits.\n    if (i + 1 < n && Number(s.substring(i, i + 2)) <= 26) ways[i] += ways[i + 2];\n  }\n  // Position zero counts decodings of the complete input.\n  return ways[0];\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    }
];
const subsetsBacktrackingProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const subsetsBacktrackingMcqs = [
    {
        id: "s5-sb-subsets",
        kind: "mcq",
        prompt: "How many subsets does a set of n distinct items have?",
        options: [
            "n",
            "n²",
            "2ⁿ",
            "n!"
        ],
        answerIndex: 2,
        explanation: "Each item is independently in or out, giving 2 × 2 × … = 2ⁿ."
    },
    {
        id: "s5-sb-prune",
        kind: "mcq",
        prompt: "Backtracking beats plain brute force mainly because it:",
        options: [
            "sorts the input first",
            "abandons branches that cannot lead to a valid solution",
            "replaces recursion with a loop",
            "caches every result in a hash map"
        ],
        answerIndex: 1,
        explanation: "Pruning dead branches early is what keeps the exponential search practical."
    }
];
const subsetsBacktrackingModule = {
    id: "m-pat-subsets-backtracking",
    stageId: S,
    title: "Subsets & Backtracking",
    kind: "patternModule",
    summary: "Choose, explore, un-choose — systematic search over subsets, arrangements, and partitions.",
    lessonSections: [
        {
            heading: "Choose, explore, un-choose",
            body: `Backtracking walks a decision tree. At each node you **choose** an option, **explore** what follows, then **un-choose** so the next option starts from a clean slate. That third step is what people forget.

\`\`\`js
function subsets(nums) {
  const res = [];
  const bt = (start, cur) => {
    res.push([...cur]);              // every node is itself an answer here
    for (let i = start; i < nums.length; i++) {
      cur.push(nums[i]);             // choose
      bt(i + 1, cur);                // explore
      cur.pop();                     // un-choose
    }
  };
  bt(0, []);
  return res;
}
console.log(subsets([1, 2, 3]).length); // 8 = 2³
\`\`\`

Push a **copy** (\`[...cur]\`) — pushing \`cur\` itself stores a reference that later mutations will corrupt.`
        },
        {
            heading: "Recognition cues",
            body: `Reach for backtracking when a problem asks you to **generate** or **count** arrangements:

- all **subsets**, **combinations**, or **permutations** (with or without duplicates),
- **partitions** of a string or list (palindrome cuts, decodings),
- **constraint puzzles** — N-queens, sudoku, word search,
- "how many ways…" questions where the choices form a tree.

The shape is exponential — 2ⁿ subsets, n! permutations — so **pruning** is what makes it usable. Cut a branch the moment it can't succeed (a sum already past the target, a queen already attacked).`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Skip duplicates at the same decision level (input must be sorted)
for (let i = start; i < a.length; i++) {
  if (i > start && a[i] === a[i - 1]) continue;  // same value already tried here
  cur.push(a[i]);
  bt(i + 1, cur);
  cur.pop();
}

// Combinations without reordering: never step backwards
for (let i = start; i < candidates.length; i++) go(i, remaining - candidates[i]);
\`\`\`

**Pitfalls:** forgetting to un-choose (state leaks into sibling branches); storing a reference instead of a copy; using \`i > 0\` instead of \`i > start\` in the duplicate skip, which wrongly drops valid picks; and letting the *order* of generated results vary — when a problem's natural output order is ambiguous, **sort canonically** before returning so the answer is well defined. Several drills below are phrased as **counts** for exactly that reason. Work them easy to hard.`
        }
    ],
    guidedExampleProblemId: "sb-count-valid-parens",
    drillProblemIds: [
        "sb-count-valid-parens",
        "sb-count-paths-grid",
        "sb-subsets-with-duplicates",
        "sb-combination-sum-count",
        "sb-palindrome-partitions",
        "sb-n-queens-count"
    ],
    testPoolProblemIds: [
        "sb-permutations-distinct-count",
        "sb-letter-combinations",
        "sb-count-subsets-size-k",
        "sb-count-decodings"
    ],
    complexityQuestionIds: [
        "s5-sb-subsets",
        "s5-sb-prune"
    ],
    badgeId: "badge-pat-subsets-backtracking",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage5/topK.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "topKMcqs",
    ()=>topKMcqs,
    "topKModule",
    ()=>topKModule,
    "topKProblems",
    ()=>topKProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/shared/heap.ts [app-client] (ecmascript)");
;
;
const S = "dsa-s5";
const P = [
    "top-k-elements"
];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "tk-k-largest",
        slug: "k-largest",
        title: "K Largest Values",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the `k` largest values, sorted ascending. Duplicates count separately.",
        examples: [
            {
                input: "[3,1,5,12,2,11], 3",
                output: "[5,11,12]"
            },
            {
                input: "[1], 1",
                output: "[1]"
            },
            {
                input: "[5,5], 2",
                output: "[5,5]"
            }
        ],
        constraints: [
            "0 <= k <= nums.length <= 10000"
        ],
        functionName: "kLargest",
        starter: {
            js: "function kLargest(nums, k) {\n  // The k largest values, sorted ascending.\n}\n",
            ts: "function kLargest(nums: number[], k: number): number[] {\n  // The k largest values, sorted ascending.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        1,
                        5,
                        12,
                        2,
                        11
                    ],
                    3
                ],
                expected: [
                    5,
                    11,
                    12
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
                        5,
                        5
                    ],
                    2
                ],
                expected: [
                    5,
                    5
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
                    ],
                    0
                ],
                expected: []
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
                        -1,
                        -2,
                        -3
                    ],
                    2
                ],
                expected: [
                    -2,
                    -1
                ]
            },
            {
                args: [
                    [
                        4,
                        4,
                        4
                    ],
                    2
                ],
                expected: [
                    4,
                    4
                ]
            },
            {
                args: [
                    [
                        10,
                        9,
                        8,
                        7
                    ],
                    2
                ],
                expected: [
                    9,
                    10
                ]
            },
            {
                args: [
                    [
                        2
                    ],
                    1
                ],
                expected: [
                    2
                ]
            }
        ],
        hints: [
            "Sorting descending puts the k largest at the front.",
            "A size-k min-heap keeps only the biggest k while you scan.",
            "Whatever approach you use, sort the final k ascending before returning."
        ],
        solutions: [
            {
                label: "Sort and slice",
                approach: "Sort descending, take k, then order ascending for the result.",
                js: "function kLargest(nums, k) {\n  return [...nums].sort((a, b) => b - a).slice(0, k).sort((a, b) => a - b);\n}\n",
                ts: "function kLargest(nums: number[], k: number): number[] {\n  return [...nums].sort((a, b) => b - a).slice(0, k).sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function kLargest(nums, k) {\n  // Copy the input so sorting does not mutate the caller's array.\n  // Sort largest-first, keep exactly k values, then put those picks in ascending output order.\n  return [...nums].sort((a, b) => b - a).slice(0, k).sort((a, b) => a - b);\n}\n",
                    ts: "function kLargest(nums: number[], k: number): number[] {\n  // Copy the input so sorting does not mutate the caller's array.\n  // Sort largest-first, keep exactly k values, then put those picks in ascending output order.\n  return [...nums].sort((a, b) => b - a).slice(0, k).sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Size-k min-heap",
                approach: "Keep only the k largest seen so far; the heap's root is the smallest of them.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kLargest(nums, k) {\n  if (k <= 0) return [];\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kLargest(nums: number[], k: number): number[] {\n  if (k <= 0) return [];\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
                commentedCode: {
                    js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kLargest(nums, k) {\n  // No values belong in a non-positive-size result.\n  if (k <= 0) return [];\n\n  // This min-heap stores only the k largest values seen so far.\n  const h = new MinHeap();\n  for (const v of nums) {\n    // Treat the current value as a top-k candidate.\n    h.push(v);\n    // If there are too many candidates, discard the smallest one.\n    if (h.size() > k) h.pop();\n  }\n\n  // A min-heap drains from smallest to largest, matching the required order.\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`,
                    ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kLargest(nums: number[], k: number): number[] {\n  // No values belong in a non-positive-size result.\n  if (k <= 0) return [];\n\n  // This min-heap stores only the k largest values seen so far.\n  const h = new MinHeap();\n  for (const v of nums) {\n    // Treat the current value as a top-k candidate.\n    h.push(v);\n    // If there are too many candidates, discard the smallest one.\n    if (h.size() > k) h.pop();\n  }\n\n  // A min-heap drains from smallest to largest, matching the required order.\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out;\n}\n`
                },
                time: "O(n log k)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "tk-kth-smallest",
        slug: "kth-smallest",
        title: "Kth Smallest Value",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the k-th smallest value (1-indexed, counting duplicates).",
        examples: [
            {
                input: "[7,10,4,3,20,15], 3",
                output: "7"
            },
            {
                input: "[1], 1",
                output: "1"
            },
            {
                input: "[2,2,2], 2",
                output: "2"
            }
        ],
        constraints: [
            "1 <= k <= nums.length <= 10000"
        ],
        functionName: "kthSmallest",
        starter: {
            js: "function kthSmallest(nums, k) {\n  // The k-th smallest value.\n}\n",
            ts: "function kthSmallest(nums: number[], k: number): number {\n  // The k-th smallest value.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        7,
                        10,
                        4,
                        3,
                        20,
                        15
                    ],
                    3
                ],
                expected: 7
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
                        2,
                        2,
                        2
                    ],
                    2
                ],
                expected: 2
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        2
                    ],
                    1
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    2
                ],
                expected: 2
            },
            {
                args: [
                    [
                        5,
                        4,
                        3,
                        2,
                        1
                    ],
                    5
                ],
                expected: 5
            },
            {
                args: [
                    [
                        -1,
                        -2
                    ],
                    1
                ],
                expected: -2
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
                expected: 4
            },
            {
                args: [
                    [
                        9
                    ],
                    1
                ],
                expected: 9
            }
        ],
        hints: [
            "Sorting ascending puts the answer at index k-1.",
            "A size-k max-heap keeps the k smallest; its root is then the k-th smallest.",
            "Duplicates each occupy their own rank."
        ],
        solutions: [
            {
                label: "Sort and index",
                approach: "Sort ascending and read position k-1.",
                js: "function kthSmallest(nums, k) {\n  return [...nums].sort((a, b) => a - b)[k - 1];\n}\n",
                ts: "function kthSmallest(nums: number[], k: number): number {\n  return [...nums].sort((a, b) => a - b)[k - 1];\n}\n",
                commentedCode: {
                    js: "function kthSmallest(nums, k) {\n  // Sort a copy in ascending rank order; 1-indexed rank k lives at index k - 1.\n  return [...nums].sort((a, b) => a - b)[k - 1];\n}\n",
                    ts: "function kthSmallest(nums: number[], k: number): number {\n  // Sort a copy in ascending rank order; 1-indexed rank k lives at index k - 1.\n  return [...nums].sort((a, b) => a - b)[k - 1];\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Size-k max-heap",
                approach: "Retain the k smallest values; the heap root is the answer.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction kthSmallest(nums, k) {\n  const h = new MaxHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction kthSmallest(nums: number[], k: number): number {\n  const h = new MaxHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
                commentedCode: {
                    js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction kthSmallest(nums, k) {\n  // Keep the k smallest values in a max-heap.\n  const h = new MaxHeap();\n  for (const v of nums) {\n    // Add the current value as a candidate.\n    h.push(v);\n    // Evict the largest candidate whenever the heap grows beyond k.\n    if (h.size() > k) h.pop();\n  }\n\n  // The largest of the retained k values has ascending rank k.\n  return h.peek();\n}\n`,
                    ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction kthSmallest(nums: number[], k: number): number {\n  // Keep the k smallest values in a max-heap.\n  const h = new MaxHeap();\n  for (const v of nums) {\n    // Add the current value as a candidate.\n    h.push(v);\n    // Evict the largest candidate whenever the heap grows beyond k.\n    if (h.size() > k) h.pop();\n  }\n\n  // The largest of the retained k values has ascending rank k.\n  return h.peek();\n}\n`
                },
                time: "O(n log k)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "tk-k-closest-to-zero",
        slug: "k-closest-to-zero",
        title: "K Closest to Zero",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the `k` values nearest to zero, sorted ascending. When two values are equally close (like -4 and 4), prefer the smaller one.",
        examples: [
            {
                input: "[-3,1,2,-1], 2",
                output: "[-1,1]"
            },
            {
                input: "[5,-2,3], 2",
                output: "[-2,3]"
            },
            {
                input: "[1], 1",
                output: "[1]"
            }
        ],
        constraints: [
            "0 <= k <= nums.length <= 10000"
        ],
        functionName: "kClosestToZero",
        starter: {
            js: "function kClosestToZero(nums, k) {\n  // The k values nearest zero, sorted ascending.\n}\n",
            ts: "function kClosestToZero(nums: number[], k: number): number[] {\n  // The k values nearest zero, sorted ascending.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        -3,
                        1,
                        2,
                        -1
                    ],
                    2
                ],
                expected: [
                    -1,
                    1
                ]
            },
            {
                args: [
                    [
                        5,
                        -2,
                        3
                    ],
                    2
                ],
                expected: [
                    -2,
                    3
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
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    0
                ],
                expected: []
            },
            {
                args: [
                    [
                        0,
                        1,
                        -1
                    ],
                    1
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    [
                        4,
                        -4
                    ],
                    1
                ],
                expected: [
                    -4
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
                        -5,
                        -1,
                        2
                    ],
                    2
                ],
                expected: [
                    -1,
                    2
                ]
            },
            {
                args: [
                    [
                        3,
                        3
                    ],
                    2
                ],
                expected: [
                    3,
                    3
                ]
            }
        ],
        hints: [
            "Distance from zero is just the absolute value.",
            "Rank by |v|, breaking ties toward the smaller value so the answer is deterministic.",
            "Take the first k, then sort them ascending for the result."
        ],
        solutions: [
            {
                label: "Sort by distance",
                approach: "Order by absolute value (ties to the smaller value), take k, then sort.",
                js: "function kClosestToZero(nums, k) {\n  return [...nums]\n    .sort((a, b) => Math.abs(a) - Math.abs(b) || a - b)\n    .slice(0, k)\n    .sort((a, b) => a - b);\n}\n",
                ts: "function kClosestToZero(nums: number[], k: number): number[] {\n  return [...nums]\n    .sort((a, b) => Math.abs(a) - Math.abs(b) || a - b)\n    .slice(0, k)\n    .sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function kClosestToZero(nums, k) {\n  // Copy and rank values by distance from zero, preferring the smaller value on a tie.\n  return [...nums]\n    .sort((a, b) => Math.abs(a) - Math.abs(b) || a - b)\n    // Keep only the k nearest values.\n    .slice(0, k)\n    // Present the chosen values in ascending numeric order.\n    .sort((a, b) => a - b);\n}\n",
                    ts: "function kClosestToZero(nums: number[], k: number): number[] {\n  // Copy and rank values by distance from zero, preferring the smaller value on a tie.\n  return [...nums]\n    .sort((a, b) => Math.abs(a) - Math.abs(b) || a - b)\n    // Keep only the k nearest values.\n    .slice(0, k)\n    // Present the chosen values in ascending numeric order.\n    .sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Select then order",
                approach: "Repeatedly pick the nearest remaining value, then sort the picks.",
                js: "function kClosestToZero(nums, k) {\n  const rest = [...nums];\n  const picked = [];\n  for (let i = 0; i < k && rest.length; i++) {\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      const closer = Math.abs(rest[j]) < Math.abs(rest[best]);\n      const tie = Math.abs(rest[j]) === Math.abs(rest[best]) && rest[j] < rest[best];\n      if (closer || tie) best = j;\n    }\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  return picked.sort((a, b) => a - b);\n}\n",
                ts: "function kClosestToZero(nums: number[], k: number): number[] {\n  const rest = [...nums];\n  const picked: number[] = [];\n  for (let i = 0; i < k && rest.length; i++) {\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      const closer = Math.abs(rest[j]) < Math.abs(rest[best]);\n      const tie = Math.abs(rest[j]) === Math.abs(rest[best]) && rest[j] < rest[best];\n      if (closer || tie) best = j;\n    }\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  return picked.sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function kClosestToZero(nums, k) {\n  // Work on a removable copy and collect each selected value separately.\n  const rest = [...nums];\n  const picked = [];\n  // Select one nearest remaining value per round, up to k rounds.\n  for (let i = 0; i < k && rest.length; i++) {\n    // Assume the first remaining value is this round's best candidate.\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      // Prefer a strictly smaller absolute distance.\n      const closer = Math.abs(rest[j]) < Math.abs(rest[best]);\n      // For equal distances, prefer the numerically smaller value.\n      const tie = Math.abs(rest[j]) === Math.abs(rest[best]) && rest[j] < rest[best];\n      if (closer || tie) best = j;\n    }\n    // Remove the winner so a duplicate occurrence cannot be selected twice.\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  // Return the selected values in the requested ascending order.\n  return picked.sort((a, b) => a - b);\n}\n",
                    ts: "function kClosestToZero(nums: number[], k: number): number[] {\n  // Work on a removable copy and collect each selected value separately.\n  const rest = [...nums];\n  const picked: number[] = [];\n  // Select one nearest remaining value per round, up to k rounds.\n  for (let i = 0; i < k && rest.length; i++) {\n    // Assume the first remaining value is this round's best candidate.\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      // Prefer a strictly smaller absolute distance.\n      const closer = Math.abs(rest[j]) < Math.abs(rest[best]);\n      // For equal distances, prefer the numerically smaller value.\n      const tie = Math.abs(rest[j]) === Math.abs(rest[best]) && rest[j] < rest[best];\n      if (closer || tie) best = j;\n    }\n    // Remove the winner so a duplicate occurrence cannot be selected twice.\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  // Return the selected values in the requested ascending order.\n  return picked.sort((a, b) => a - b);\n}\n"
                },
                time: "O(n·k)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tk-kth-largest-distinct",
        slug: "kth-largest-distinct",
        title: "Kth Largest Distinct",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the k-th largest **distinct** value, or -1 if the list has fewer than `k` distinct values.",
        examples: [
            {
                input: "[3,2,3,1,2,4,5,5,6], 3",
                output: "4"
            },
            {
                input: "[1,1], 1",
                output: "1"
            },
            {
                input: "[1,1], 2",
                output: "-1"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000",
            "k >= 1"
        ],
        functionName: "kthLargestDistinct",
        starter: {
            js: "function kthLargestDistinct(nums, k) {\n  // k-th largest distinct value, or -1.\n}\n",
            ts: "function kthLargestDistinct(nums: number[], k: number): number {\n  // k-th largest distinct value, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        2,
                        3,
                        1,
                        2,
                        4,
                        5,
                        5,
                        6
                    ],
                    3
                ],
                expected: 4
            },
            {
                args: [
                    [
                        1,
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
                        5
                    ],
                    1
                ],
                expected: 5
            },
            {
                args: [
                    [
                        5,
                        5,
                        5
                    ],
                    1
                ],
                expected: 5
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
                    [
                        9,
                        8,
                        9,
                        8,
                        7
                    ],
                    3
                ],
                expected: 7
            }
        ],
        hints: [
            "Collapse duplicates first — a Set does it in one step.",
            "Sort the distinct values descending and index k-1.",
            "Guard the case where there simply aren't k distinct values."
        ],
        solutions: [
            {
                label: "Dedupe then sort",
                approach: "Distinct values sorted descending; read position k-1.",
                js: "function kthLargestDistinct(nums, k) {\n  const distinct = [...new Set(nums)].sort((a, b) => b - a);\n  return distinct.length >= k ? distinct[k - 1] : -1;\n}\n",
                ts: "function kthLargestDistinct(nums: number[], k: number): number {\n  const distinct = [...new Set(nums)].sort((a, b) => b - a);\n  return distinct.length >= k ? distinct[k - 1] : -1;\n}\n",
                commentedCode: {
                    js: "function kthLargestDistinct(nums, k) {\n  // Remove duplicate values, then arrange the unique values from largest to smallest.\n  const distinct = [...new Set(nums)].sort((a, b) => b - a);\n  // Read 1-indexed rank k when it exists; otherwise report that it is missing.\n  return distinct.length >= k ? distinct[k - 1] : -1;\n}\n",
                    ts: "function kthLargestDistinct(nums: number[], k: number): number {\n  // Remove duplicate values, then arrange the unique values from largest to smallest.\n  const distinct = [...new Set(nums)].sort((a, b) => b - a);\n  // Read 1-indexed rank k when it exists; otherwise report that it is missing.\n  return distinct.length >= k ? distinct[k - 1] : -1;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Size-k min-heap of distinct values",
                approach: "Feed only unseen values into a size-k min-heap.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargestDistinct(nums, k) {\n  const seen = new Set();\n  const h = new MinHeap();\n  for (const v of nums) {\n    if (seen.has(v)) continue;\n    seen.add(v);\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.size() === k ? h.peek() : -1;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargestDistinct(nums: number[], k: number): number {\n  const seen = new Set<number>();\n  const h = new MinHeap();\n  for (const v of nums) {\n    if (seen.has(v)) continue;\n    seen.add(v);\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.size() === k ? h.peek() : -1;\n}\n`,
                commentedCode: {
                    js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargestDistinct(nums, k) {\n  // Track values already processed so duplicates do not consume ranks.\n  const seen = new Set();\n  // Retain only the k largest distinct candidates.\n  const h = new MinHeap();\n  for (const v of nums) {\n    // Ignore later occurrences of the same value.\n    if (seen.has(v)) continue;\n    seen.add(v);\n    h.push(v);\n    // Discard the smallest candidate when more than k are retained.\n    if (h.size() > k) h.pop();\n  }\n\n  // With k candidates, the heap minimum is rank k; otherwise no answer exists.\n  return h.size() === k ? h.peek() : -1;\n}\n`,
                    ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargestDistinct(nums: number[], k: number): number {\n  // Track values already processed so duplicates do not consume ranks.\n  const seen = new Set<number>();\n  // Retain only the k largest distinct candidates.\n  const h = new MinHeap();\n  for (const v of nums) {\n    // Ignore later occurrences of the same value.\n    if (seen.has(v)) continue;\n    seen.add(v);\n    h.push(v);\n    // Discard the smallest candidate when more than k are retained.\n    if (h.size() > k) h.pop();\n  }\n\n  // With k candidates, the heap minimum is rank k; otherwise no answer exists.\n  return h.size() === k ? h.peek() : -1;\n}\n`
                },
                time: "O(n log k)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tk-connect-sticks",
        slug: "connect-sticks",
        title: "Minimum Cost to Connect Sticks",
        difficulty: "medium",
        patternIds: P,
        statement: "You may connect two sticks at a cost equal to their combined length, producing one longer stick. Return the minimum total cost to combine every stick into one.",
        examples: [
            {
                input: "[2,4,3]",
                output: "14"
            },
            {
                input: "[1,8,3,5]",
                output: "30"
            },
            {
                input: "[5]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= sticks.length <= 10000",
            "lengths are positive"
        ],
        functionName: "connectSticks",
        starter: {
            js: "function connectSticks(sticks) {\n  // Minimum total cost to connect all sticks.\n}\n",
            ts: "function connectSticks(sticks: number[]): number {\n  // Minimum total cost to connect all sticks.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        4,
                        3
                    ]
                ],
                expected: 14
            },
            {
                args: [
                    [
                        1,
                        8,
                        3,
                        5
                    ]
                ],
                expected: 30
            },
            {
                args: [
                    [
                        5
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
                        1
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
                        1,
                        2,
                        3
                    ]
                ],
                expected: 9
            },
            {
                args: [
                    [
                        2,
                        2,
                        2,
                        2
                    ]
                ],
                expected: 16
            },
            {
                args: [
                    [
                        1,
                        2,
                        5,
                        10,
                        35,
                        89
                    ]
                ],
                expected: 224
            }
        ],
        hints: [
            "Combining the two shortest sticks first keeps the expensive totals from being re-added.",
            "That means you repeatedly need the two smallest — a min-heap.",
            "Push the combined stick back and repeat until one remains."
        ],
        solutions: [
            {
                label: "Min-heap greedy",
                approach: "Always merge the two shortest sticks, pushing the result back.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction connectSticks(sticks) {\n  if (sticks.length <= 1) return 0;\n  const h = new MinHeap();\n  for (const s of sticks) h.push(s);\n  let cost = 0;\n  while (h.size() > 1) {\n    const combined = h.pop() + h.pop();\n    cost += combined;\n    h.push(combined);\n  }\n  return cost;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction connectSticks(sticks: number[]): number {\n  if (sticks.length <= 1) return 0;\n  const h = new MinHeap();\n  for (const s of sticks) h.push(s);\n  let cost = 0;\n  while (h.size() > 1) {\n    const combined = h.pop() + h.pop();\n    cost += combined;\n    h.push(combined);\n  }\n  return cost;\n}\n`,
                commentedCode: {
                    js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction connectSticks(sticks) {\n  // Zero or one stick needs no connection.\n  if (sticks.length <= 1) return 0;\n\n  // A min-heap exposes the two shortest remaining sticks each round.\n  const h = new MinHeap();\n  for (const s of sticks) h.push(s);\n  let cost = 0;\n\n  // Continue until every stick has been merged into one.\n  while (h.size() > 1) {\n    // Greedily combine the two shortest sticks.\n    const combined = h.pop() + h.pop();\n    // This merged length is the price paid for the operation.\n    cost += combined;\n    // The new stick participates in future merges.\n    h.push(combined);\n  }\n  return cost;\n}\n`,
                    ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction connectSticks(sticks: number[]): number {\n  // Zero or one stick needs no connection.\n  if (sticks.length <= 1) return 0;\n\n  // A min-heap exposes the two shortest remaining sticks each round.\n  const h = new MinHeap();\n  for (const s of sticks) h.push(s);\n  let cost = 0;\n\n  // Continue until every stick has been merged into one.\n  while (h.size() > 1) {\n    // Greedily combine the two shortest sticks.\n    const combined = h.pop() + h.pop();\n    // This merged length is the price paid for the operation.\n    cost += combined;\n    // The new stick participates in future merges.\n    h.push(combined);\n  }\n  return cost;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Re-sort each round",
                approach: "Sort, take the two smallest, insert the sum, repeat.",
                js: "function connectSticks(sticks) {\n  const rest = [...sticks];\n  let cost = 0;\n  while (rest.length > 1) {\n    rest.sort((a, b) => a - b);\n    const combined = rest.shift() + rest.shift();\n    cost += combined;\n    rest.push(combined);\n  }\n  return cost;\n}\n",
                ts: "function connectSticks(sticks: number[]): number {\n  const rest = [...sticks];\n  let cost = 0;\n  while (rest.length > 1) {\n    rest.sort((a, b) => a - b);\n    const combined = (rest.shift() as number) + (rest.shift() as number);\n    cost += combined;\n    rest.push(combined);\n  }\n  return cost;\n}\n",
                commentedCode: {
                    js: "function connectSticks(sticks) {\n  // Copy the input so repeated sorting and removal do not mutate it.\n  const rest = [...sticks];\n  let cost = 0;\n  // Each merge reduces the number of remaining sticks by one.\n  while (rest.length > 1) {\n    // Put the two shortest sticks at the front.\n    rest.sort((a, b) => a - b);\n    // Remove and combine those two shortest lengths.\n    const combined = rest.shift() + rest.shift();\n    // Pay the new stick's length for this connection.\n    cost += combined;\n    // Return the combined stick to the remaining pool.\n    rest.push(combined);\n  }\n  return cost;\n}\n",
                    ts: "function connectSticks(sticks: number[]): number {\n  // Copy the input so repeated sorting and removal do not mutate it.\n  const rest = [...sticks];\n  let cost = 0;\n  // Each merge reduces the number of remaining sticks by one.\n  while (rest.length > 1) {\n    // Put the two shortest sticks at the front.\n    rest.sort((a, b) => a - b);\n    // Remove and combine those two shortest lengths; the loop guarantees both exist.\n    const combined = (rest.shift() as number) + (rest.shift() as number);\n    // Pay the new stick's length for this connection.\n    cost += combined;\n    // Return the combined stick to the remaining pool.\n    rest.push(combined);\n  }\n  return cost;\n}\n"
                },
                time: "O(n² log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tk-max-score-k-ops",
        slug: "max-score-k-operations",
        title: "Maximum Score in K Operations",
        difficulty: "hard",
        patternIds: P,
        statement: "Perform exactly `k` operations. Each operation takes the largest remaining value `v`, adds `v` to your score, and replaces it with `floor(v / 3)`. Return the final score (0 if the list is empty).",
        examples: [
            {
                input: "[10,10,10,10,10], 5",
                output: "50"
            },
            {
                input: "[1,10,3,3,3], 3",
                output: "16"
            },
            {
                input: "[1], 1",
                output: "1"
            }
        ],
        constraints: [
            "0 <= k <= 10000",
            "values are non-negative"
        ],
        functionName: "maxScoreKOps",
        starter: {
            js: "function maxScoreKOps(nums, k) {\n  // Repeatedly take the largest value; replace it with floor(v/3).\n}\n",
            ts: "function maxScoreKOps(nums: number[], k: number): number {\n  // Repeatedly take the largest value; replace it with floor(v/3).\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        10,
                        10,
                        10,
                        10,
                        10
                    ],
                    5
                ],
                expected: 50
            },
            {
                args: [
                    [
                        1,
                        10,
                        3,
                        3,
                        3
                    ],
                    3
                ],
                expected: 16
            },
            {
                args: [
                    [
                        1
                    ],
                    1
                ],
                expected: 1
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
                        5
                    ],
                    2
                ],
                expected: 6
            },
            {
                args: [
                    [
                        9
                    ],
                    2
                ],
                expected: 12
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
                expected: 2
            },
            {
                args: [
                    [
                        100
                    ],
                    1
                ],
                expected: 100
            },
            {
                args: [
                    [
                        3,
                        3
                    ],
                    2
                ],
                expected: 6
            }
        ],
        hints: [
            "Each operation needs the current maximum — that's a max-heap.",
            "After scoring, push floor(v / 3) back so it can be chosen again later.",
            "Stop early if the heap runs out of values."
        ],
        solutions: [
            {
                label: "Max-heap",
                approach: "Pop the largest, score it, push back its reduced value.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction maxScoreKOps(nums, k) {\n  if (nums.length === 0) return 0;\n  const h = new MaxHeap();\n  for (const v of nums) h.push(v);\n  let score = 0;\n  for (let i = 0; i < k; i++) {\n    const v = h.pop();\n    if (v === undefined) break;\n    score += v;\n    h.push(Math.floor(v / 3));\n  }\n  return score;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction maxScoreKOps(nums: number[], k: number): number {\n  if (nums.length === 0) return 0;\n  const h = new MaxHeap();\n  for (const v of nums) h.push(v);\n  let score = 0;\n  for (let i = 0; i < k; i++) {\n    const v = h.pop();\n    if (v === undefined) break;\n    score += v;\n    h.push(Math.floor(v / 3));\n  }\n  return score;\n}\n`,
                commentedCode: {
                    js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction maxScoreKOps(nums, k) {\n  // There is no value to select from an empty input.\n  if (nums.length === 0) return 0;\n\n  // Load every current value so the maximum is always at the heap root.\n  const h = new MaxHeap();\n  for (const v of nums) h.push(v);\n  let score = 0;\n\n  // Perform at most the requested k scoring operations.\n  for (let i = 0; i < k; i++) {\n    // Greedily take the largest value currently available.\n    const v = h.pop();\n    // Guard against a missing heap value.\n    if (v === undefined) break;\n    score += v;\n    // Replace the selected value with its reduced form for later rounds.\n    h.push(Math.floor(v / 3));\n  }\n  return score;\n}\n`,
                    ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction maxScoreKOps(nums: number[], k: number): number {\n  // There is no value to select from an empty input.\n  if (nums.length === 0) return 0;\n\n  // Load every current value so the maximum is always at the heap root.\n  const h = new MaxHeap();\n  for (const v of nums) h.push(v);\n  let score = 0;\n\n  // Perform at most the requested k scoring operations.\n  for (let i = 0; i < k; i++) {\n    // Greedily take the largest value currently available.\n    const v = h.pop();\n    // Guard against a missing heap value.\n    if (v === undefined) break;\n    score += v;\n    // Replace the selected value with its reduced form for later rounds.\n    h.push(Math.floor(v / 3));\n  }\n  return score;\n}\n`
                },
                time: "O((n + k) log n)",
                space: "O(n)"
            },
            {
                label: "Re-sort each operation",
                approach: "Sort descending each round and take the front value.",
                js: "function maxScoreKOps(nums, k) {\n  const rest = [...nums];\n  let score = 0;\n  for (let i = 0; i < k && rest.length; i++) {\n    rest.sort((a, b) => b - a);\n    const v = rest.shift();\n    score += v;\n    rest.push(Math.floor(v / 3));\n  }\n  return score;\n}\n",
                ts: "function maxScoreKOps(nums: number[], k: number): number {\n  const rest = [...nums];\n  let score = 0;\n  for (let i = 0; i < k && rest.length; i++) {\n    rest.sort((a, b) => b - a);\n    const v = rest.shift() as number;\n    score += v;\n    rest.push(Math.floor(v / 3));\n  }\n  return score;\n}\n",
                commentedCode: {
                    js: "function maxScoreKOps(nums, k) {\n  // Mutate a copy while preserving the caller's array.\n  const rest = [...nums];\n  let score = 0;\n  // Run k rounds unless no value is available.\n  for (let i = 0; i < k && rest.length; i++) {\n    // Sort largest-first so the greedy choice is at index zero.\n    rest.sort((a, b) => b - a);\n    // Remove this round's largest value.\n    const v = rest.shift();\n    score += v;\n    // Its reduced replacement can be selected in a later round.\n    rest.push(Math.floor(v / 3));\n  }\n  return score;\n}\n",
                    ts: "function maxScoreKOps(nums: number[], k: number): number {\n  // Mutate a copy while preserving the caller's array.\n  const rest = [...nums];\n  let score = 0;\n  // Run k rounds unless no value is available.\n  for (let i = 0; i < k && rest.length; i++) {\n    // Sort largest-first so the greedy choice is at index zero.\n    rest.sort((a, b) => b - a);\n    // The loop guarantees a value exists at the front.\n    const v = rest.shift() as number;\n    score += v;\n    // Its reduced replacement can be selected in a later round.\n    rest.push(Math.floor(v / 3));\n  }\n  return score;\n}\n"
                },
                time: "O(k · n log n)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "tk-k-smallest",
        slug: "k-smallest-values",
        title: "K Smallest Values",
        difficulty: "easy",
        patternIds: P,
        statement: "Return the `k` smallest values, sorted ascending.",
        examples: [
            {
                input: "[5,3,1,2,4], 2",
                output: "[1,2]"
            },
            {
                input: "[1], 1",
                output: "[1]"
            },
            {
                input: "[9,8,7], 3",
                output: "[7,8,9]"
            }
        ],
        constraints: [
            "0 <= k <= nums.length <= 10000"
        ],
        functionName: "kSmallest",
        starter: {
            js: "function kSmallest(nums, k) {\n  // The k smallest values, sorted ascending.\n}\n",
            ts: "function kSmallest(nums: number[], k: number): number[] {\n  // The k smallest values, sorted ascending.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        5,
                        3,
                        1,
                        2,
                        4
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
                        9,
                        8,
                        7
                    ],
                    3
                ],
                expected: [
                    7,
                    8,
                    9
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
                    ],
                    0
                ],
                expected: []
            },
            {
                args: [
                    [
                        3,
                        3,
                        3
                    ],
                    2
                ],
                expected: [
                    3,
                    3
                ]
            },
            {
                args: [
                    [
                        -1,
                        -2,
                        0
                    ],
                    2
                ],
                expected: [
                    -2,
                    -1
                ]
            },
            {
                args: [
                    [
                        10,
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
                        4,
                        2,
                        5,
                        1,
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
                        7
                    ],
                    1
                ],
                expected: [
                    7
                ]
            }
        ],
        hints: [
            "Sorting ascending puts the k smallest at the front.",
            "A size-k max-heap keeps the smallest k while scanning.",
            "Return them sorted ascending."
        ],
        solutions: [
            {
                label: "Sort and slice",
                approach: "Sort ascending and take the first k.",
                js: "function kSmallest(nums, k) {\n  return [...nums].sort((a, b) => a - b).slice(0, k);\n}\n",
                ts: "function kSmallest(nums: number[], k: number): number[] {\n  return [...nums].sort((a, b) => a - b).slice(0, k);\n}\n",
                commentedCode: {
                    js: "function kSmallest(nums, k) {\n  // Sort a copy ascending, then keep the first k (smallest) values.\n  return [...nums].sort((a, b) => a - b).slice(0, k);\n}\n",
                    ts: "function kSmallest(nums: number[], k: number): number[] {\n  // Sort a copy ascending, then keep the first k (smallest) values.\n  return [...nums].sort((a, b) => a - b).slice(0, k);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Size-k max-heap",
                approach: "Retain the k smallest, then read them out in order.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction kSmallest(nums, k) {\n  if (k <= 0) return [];\n  const h = new MaxHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out.reverse();\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction kSmallest(nums: number[], k: number): number[] {\n  if (k <= 0) return [];\n  const h = new MaxHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  return out.reverse();\n}\n`,
                commentedCode: {
                    js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction kSmallest(nums, k) {\n  // A non-positive k requests no values.\n  if (k <= 0) return [];\n\n  // This max-heap retains only the k smallest values seen so far.\n  const h = new MaxHeap();\n  for (const v of nums) {\n    // Consider the current value for the retained set.\n    h.push(v);\n    // Evict its largest member whenever the set exceeds k values.\n    if (h.size() > k) h.pop();\n  }\n\n  // Draining a max-heap yields descending order.\n  const out = [];\n  while (h.size() > 0) out.push(h.pop());\n  // Reverse once to produce the required ascending order.\n  return out.reverse();\n}\n`,
                    ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction kSmallest(nums: number[], k: number): number[] {\n  // A non-positive k requests no values.\n  if (k <= 0) return [];\n\n  // This max-heap retains only the k smallest values seen so far.\n  const h = new MaxHeap();\n  for (const v of nums) {\n    // Consider the current value for the retained set.\n    h.push(v);\n    // Evict its largest member whenever the set exceeds k values.\n    if (h.size() > k) h.pop();\n  }\n\n  // Draining a max-heap yields descending order.\n  const out: number[] = [];\n  while (h.size() > 0) out.push(h.pop());\n  // Reverse once to produce the required ascending order.\n  return out.reverse();\n}\n`
                },
                time: "O(n log k)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "tk-kth-largest",
        slug: "kth-largest-value",
        title: "Kth Largest Value",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the k-th largest value (1-indexed, counting duplicates).",
        examples: [
            {
                input: "[3,2,1,5,6,4], 2",
                output: "5"
            },
            {
                input: "[1], 1",
                output: "1"
            },
            {
                input: "[7,7,7], 2",
                output: "7"
            }
        ],
        constraints: [
            "1 <= k <= nums.length <= 10000"
        ],
        functionName: "kthLargestValue",
        starter: {
            js: "function kthLargestValue(nums, k) {\n  // The k-th largest value.\n}\n",
            ts: "function kthLargestValue(nums: number[], k: number): number {\n  // The k-th largest value.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        3,
                        2,
                        1,
                        5,
                        6,
                        4
                    ],
                    2
                ],
                expected: 5
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
                        7,
                        7,
                        7
                    ],
                    2
                ],
                expected: 7
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1,
                        2
                    ],
                    1
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    2
                ],
                expected: 1
            },
            {
                args: [
                    [
                        3,
                        2,
                        3,
                        1,
                        2,
                        4,
                        5,
                        5,
                        6
                    ],
                    4
                ],
                expected: 4
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
                        5,
                        5,
                        4,
                        4
                    ],
                    3
                ],
                expected: 4
            },
            {
                args: [
                    [
                        10
                    ],
                    1
                ],
                expected: 10
            }
        ],
        hints: [
            "Sort descending and index k-1.",
            "Or keep a size-k min-heap; its root ends up as the k-th largest.",
            "Duplicates each take a rank of their own."
        ],
        solutions: [
            {
                label: "Sort descending",
                approach: "Order largest-first and read position k-1.",
                js: "function kthLargestValue(nums, k) {\n  return [...nums].sort((a, b) => b - a)[k - 1];\n}\n",
                ts: "function kthLargestValue(nums: number[], k: number): number {\n  return [...nums].sort((a, b) => b - a)[k - 1];\n}\n",
                commentedCode: {
                    js: "function kthLargestValue(nums, k) {\n  // Sort a copy in descending rank order; 1-indexed rank k is index k - 1.\n  return [...nums].sort((a, b) => b - a)[k - 1];\n}\n",
                    ts: "function kthLargestValue(nums: number[], k: number): number {\n  // Sort a copy in descending rank order; 1-indexed rank k is index k - 1.\n  return [...nums].sort((a, b) => b - a)[k - 1];\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Size-k min-heap",
                approach: "Keep only the k largest; the smallest of them is the answer.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargestValue(nums, k) {\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargestValue(nums: number[], k: number): number {\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
                commentedCode: {
                    js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargestValue(nums, k) {\n  // Keep only the k largest values encountered.\n  const h = new MinHeap();\n  for (const v of nums) {\n    // Add this occurrence, because duplicates each occupy a rank.\n    h.push(v);\n    // Remove the smallest candidate if more than k are present.\n    if (h.size() > k) h.pop();\n  }\n\n  // The smallest retained value is the k-th largest overall.\n  return h.peek();\n}\n`,
                    ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargestValue(nums: number[], k: number): number {\n  // Keep only the k largest values encountered.\n  const h = new MinHeap();\n  for (const v of nums) {\n    // Add this occurrence, because duplicates each occupy a rank.\n    h.push(v);\n    // Remove the smallest candidate if more than k are present.\n    if (h.size() > k) h.pop();\n  }\n\n  // The smallest retained value is the k-th largest overall.\n  return h.peek();\n}\n`
                },
                time: "O(n log k)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "tk-sum-k-largest",
        slug: "sum-of-k-largest",
        title: "Sum of the K Largest",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the sum of the `k` largest values (0 when k is 0).",
        examples: [
            {
                input: "[1,2,3,4], 2",
                output: "7"
            },
            {
                input: "[5], 1",
                output: "5"
            },
            {
                input: "[1,2,3], 0",
                output: "0"
            }
        ],
        constraints: [
            "0 <= k <= nums.length <= 10000"
        ],
        functionName: "sumKLargest",
        starter: {
            js: "function sumKLargest(nums, k) {\n  // Sum of the k largest values.\n}\n",
            ts: "function sumKLargest(nums: number[], k: number): number {\n  // Sum of the k largest values.\n  return 0;\n}\n"
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
                expected: 7
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
                        1,
                        2,
                        3
                    ],
                    0
                ],
                expected: 0
            }
        ],
        hidden: [
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
                        3,
                        3,
                        3
                    ],
                    2
                ],
                expected: 6
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
                expected: -3
            },
            {
                args: [
                    [
                        10,
                        1,
                        1
                    ],
                    1
                ],
                expected: 10
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
                expected: 15
            },
            {
                args: [
                    [
                        2,
                        2
                    ],
                    1
                ],
                expected: 2
            }
        ],
        hints: [
            "Take the k largest first, then add them up.",
            "Sorting descending and slicing is the direct route.",
            "Negative values still follow the same rule — largest means closest to positive."
        ],
        solutions: [
            {
                label: "Sort, slice, sum",
                approach: "Order descending, take k, and total them.",
                js: "function sumKLargest(nums, k) {\n  return [...nums].sort((a, b) => b - a).slice(0, k).reduce((s, v) => s + v, 0);\n}\n",
                ts: "function sumKLargest(nums: number[], k: number): number {\n  return [...nums].sort((a, b) => b - a).slice(0, k).reduce((s, v) => s + v, 0);\n}\n",
                commentedCode: {
                    js: "function sumKLargest(nums, k) {\n  // Sort a copy largest-first, select k values, and add them from an initial total of zero.\n  return [...nums].sort((a, b) => b - a).slice(0, k).reduce((s, v) => s + v, 0);\n}\n",
                    ts: "function sumKLargest(nums: number[], k: number): number {\n  // Sort a copy largest-first, select k values, and add them from an initial total of zero.\n  return [...nums].sort((a, b) => b - a).slice(0, k).reduce((s, v) => s + v, 0);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Size-k min-heap",
                approach: "Keep the k largest in a heap, then drain and sum.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction sumKLargest(nums, k) {\n  if (k <= 0) return 0;\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  let sum = 0;\n  while (h.size() > 0) sum += h.pop();\n  return sum;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction sumKLargest(nums: number[], k: number): number {\n  if (k <= 0) return 0;\n  const h = new MinHeap();\n  for (const v of nums) {\n    h.push(v);\n    if (h.size() > k) h.pop();\n  }\n  let sum = 0;\n  while (h.size() > 0) sum += h.pop();\n  return sum;\n}\n`,
                commentedCode: {
                    js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction sumKLargest(nums, k) {\n  // Selecting no values always produces a sum of zero.\n  if (k <= 0) return 0;\n\n  // Retain the k largest values in a min-heap.\n  const h = new MinHeap();\n  for (const v of nums) {\n    // Add the current value as a candidate.\n    h.push(v);\n    // Remove the smallest candidate if the heap exceeds k values.\n    if (h.size() > k) h.pop();\n  }\n\n  // Drain and total exactly the retained top-k values.\n  let sum = 0;\n  while (h.size() > 0) sum += h.pop();\n  return sum;\n}\n`,
                    ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction sumKLargest(nums: number[], k: number): number {\n  // Selecting no values always produces a sum of zero.\n  if (k <= 0) return 0;\n\n  // Retain the k largest values in a min-heap.\n  const h = new MinHeap();\n  for (const v of nums) {\n    // Add the current value as a candidate.\n    h.push(v);\n    // Remove the smallest candidate if the heap exceeds k values.\n    if (h.size() > k) h.pop();\n  }\n\n  // Drain and total exactly the retained top-k values.\n  let sum = 0;\n  while (h.size() > 0) sum += h.pop();\n  return sum;\n}\n`
                },
                time: "O(n log k)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "tk-k-closest-to-target",
        slug: "k-closest-to-target",
        title: "K Closest to a Target",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the `k` values nearest to `target`, sorted ascending. When two values are equally close, prefer the smaller one.",
        examples: [
            {
                input: "[1,2,3,4,5], 3, 3",
                output: "[2,3,4]"
            },
            {
                input: "[1,10], 1, 5",
                output: "[1]"
            },
            {
                input: "[1,2,3], 0, 10",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= k <= nums.length <= 10000"
        ],
        functionName: "kClosestToTarget",
        starter: {
            js: "function kClosestToTarget(nums, k, target) {\n  // The k values nearest target, sorted ascending.\n}\n",
            ts: "function kClosestToTarget(nums: number[], k: number, target: number): number[] {\n  // The k values nearest target, sorted ascending.\n  return [];\n}\n"
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
                    3,
                    3
                ],
                expected: [
                    2,
                    3,
                    4
                ]
            },
            {
                args: [
                    [
                        1,
                        10
                    ],
                    1,
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
                    0,
                    10
                ],
                expected: []
            }
        ],
        hidden: [
            {
                args: [
                    [
                        5
                    ],
                    1,
                    5
                ],
                expected: [
                    5
                ]
            },
            {
                args: [
                    [
                        1,
                        3
                    ],
                    1,
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
                    2,
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
                        10,
                        20,
                        30
                    ],
                    2,
                    25
                ],
                expected: [
                    20,
                    30
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        3
                    ],
                    3,
                    2
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
                        -5,
                        0,
                        5
                    ],
                    1,
                    1
                ],
                expected: [
                    0
                ]
            }
        ],
        hints: [
            "Distance is |v - target|.",
            "Rank by distance, breaking ties toward the smaller value.",
            "Take k, then sort ascending for the final answer."
        ],
        solutions: [
            {
                label: "Sort by distance to target",
                approach: "Order by |v - target| (ties to the smaller value), take k, then sort.",
                js: "function kClosestToTarget(nums, k, target) {\n  return [...nums]\n    .sort((a, b) => Math.abs(a - target) - Math.abs(b - target) || a - b)\n    .slice(0, k)\n    .sort((a, b) => a - b);\n}\n",
                ts: "function kClosestToTarget(nums: number[], k: number, target: number): number[] {\n  return [...nums]\n    .sort((a, b) => Math.abs(a - target) - Math.abs(b - target) || a - b)\n    .slice(0, k)\n    .sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function kClosestToTarget(nums, k, target) {\n  // Copy and rank values by distance to target, preferring the smaller value on a tie.\n  return [...nums]\n    .sort((a, b) => Math.abs(a - target) - Math.abs(b - target) || a - b)\n    // Keep exactly the k nearest occurrences.\n    .slice(0, k)\n    // Return those chosen values in ascending numeric order.\n    .sort((a, b) => a - b);\n}\n",
                    ts: "function kClosestToTarget(nums: number[], k: number, target: number): number[] {\n  // Copy and rank values by distance to target, preferring the smaller value on a tie.\n  return [...nums]\n    .sort((a, b) => Math.abs(a - target) - Math.abs(b - target) || a - b)\n    // Keep exactly the k nearest occurrences.\n    .slice(0, k)\n    // Return those chosen values in ascending numeric order.\n    .sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Repeated selection",
                approach: "Pick the nearest remaining value k times, then order the picks.",
                js: "function kClosestToTarget(nums, k, target) {\n  const rest = [...nums];\n  const picked = [];\n  for (let i = 0; i < k && rest.length; i++) {\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      const dj = Math.abs(rest[j] - target), db = Math.abs(rest[best] - target);\n      if (dj < db || (dj === db && rest[j] < rest[best])) best = j;\n    }\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  return picked.sort((a, b) => a - b);\n}\n",
                ts: "function kClosestToTarget(nums: number[], k: number, target: number): number[] {\n  const rest = [...nums];\n  const picked: number[] = [];\n  for (let i = 0; i < k && rest.length; i++) {\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      const dj = Math.abs(rest[j] - target), db = Math.abs(rest[best] - target);\n      if (dj < db || (dj === db && rest[j] < rest[best])) best = j;\n    }\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  return picked.sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function kClosestToTarget(nums, k, target) {\n  // Copy the candidates so selecting values does not mutate the input.\n  const rest = [...nums];\n  const picked = [];\n  // Pick one nearest remaining occurrence per round.\n  for (let i = 0; i < k && rest.length; i++) {\n    // Start with the first remaining value as the provisional winner.\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      // Compare this candidate's distance with the current winner's distance.\n      const dj = Math.abs(rest[j] - target), db = Math.abs(rest[best] - target);\n      // Prefer a shorter distance, then the smaller value when distances tie.\n      if (dj < db || (dj === db && rest[j] < rest[best])) best = j;\n    }\n    // Remove the winner and preserve it in the selected list.\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  // Present the selected values in ascending order.\n  return picked.sort((a, b) => a - b);\n}\n",
                    ts: "function kClosestToTarget(nums: number[], k: number, target: number): number[] {\n  // Copy the candidates so selecting values does not mutate the input.\n  const rest = [...nums];\n  const picked: number[] = [];\n  // Pick one nearest remaining occurrence per round.\n  for (let i = 0; i < k && rest.length; i++) {\n    // Start with the first remaining value as the provisional winner.\n    let best = 0;\n    for (let j = 1; j < rest.length; j++) {\n      // Compare this candidate's distance with the current winner's distance.\n      const dj = Math.abs(rest[j] - target), db = Math.abs(rest[best] - target);\n      // Prefer a shorter distance, then the smaller value when distances tie.\n      if (dj < db || (dj === db && rest[j] < rest[best])) best = j;\n    }\n    // Remove the winner and preserve it in the selected list.\n    picked.push(rest.splice(best, 1)[0]);\n  }\n  // Present the selected values in ascending order.\n  return picked.sort((a, b) => a - b);\n}\n"
                },
                time: "O(n·k)",
                space: "O(n)"
            }
        ]
    }
];
const topKProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const topKMcqs = [
    {
        id: "s5-tk-heap-kind",
        kind: "mcq",
        prompt: "To keep the k *largest* values while scanning n numbers, you maintain:",
        options: [
            "a min-heap of size k",
            "a max-heap of size n",
            "a fully sorted array of size n",
            "a hash map of counts"
        ],
        answerIndex: 0,
        explanation: "The min-heap's root is the weakest of your current top k, so it's the one to evict."
    },
    {
        id: "s5-tk-time",
        kind: "mcq",
        prompt: "Finding the k largest of n values with a size-k heap costs:",
        options: [
            "O(n)",
            "O(n log k)",
            "O(n log n)",
            "O(k)"
        ],
        answerIndex: 1,
        explanation: "Each of the n values does at most an O(log k) push/pop on a heap capped at size k."
    }
];
const topKModule = {
    id: "m-pat-top-k",
    stageId: S,
    title: "Top K Elements",
    kind: "patternModule",
    summary: "Keep a size-k heap while you scan — the k largest, smallest, or closest in O(n log k).",
    lessonSections: [
        {
            heading: "A heap that never grows past k",
            body: `When you need the **k largest** values, sorting everything is O(n log n) — more work than necessary. Instead keep a **min-heap capped at size k**: push each value, and whenever the heap exceeds k, pop the smallest. What survives is exactly the top k, at **O(n log k)**.

The direction is the part everyone gets backwards: **k largest → min-heap** (so the weakest is at the root and easiest to evict); **k smallest → max-heap**.

\`\`\`js
// k largest with a size-k min-heap (MinHeap from the Stage 2 lab)
const h = new MinHeap();
for (const v of nums) {
  h.push(v);
  if (h.size() > k) h.pop(); // drop the weakest of the current top k
}
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for this pattern when a problem asks for:

- the **k largest / smallest** values, or the **k-th** largest / smallest,
- the **k closest** values to a target (rank by distance instead of value),
- the **k most frequent** items (rank by count),
- repeatedly taking the current extreme — merging the two shortest sticks, or scoring the largest value again and again.

That last family is really *greedy with a priority queue*: the heap hands you the best choice each round.`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Repeatedly consume the extreme (greedy with a heap)
const h = new MinHeap();
for (const s of sticks) h.push(s);
let cost = 0;
while (h.size() > 1) {
  const combined = h.pop()! + h.pop()!; // two smallest
  cost += combined;
  h.push(combined);                     // feed the result back in
}
\`\`\`

**Pitfalls:** picking the wrong heap direction (a max-heap can't cheaply evict the weakest of your top k); forgetting that **ties need a rule** — for "k closest", two values can be equally near, so break ties deliberately or the answer isn't well defined; and returning the heap's internal array as if it were sorted — a heap is only ordered at the root, so sort before returning. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "tk-k-largest",
    drillProblemIds: [
        "tk-k-largest",
        "tk-kth-smallest",
        "tk-k-closest-to-zero",
        "tk-kth-largest-distinct",
        "tk-connect-sticks",
        "tk-max-score-k-ops"
    ],
    testPoolProblemIds: [
        "tk-k-smallest",
        "tk-kth-largest",
        "tk-sum-k-largest",
        "tk-k-closest-to-target"
    ],
    complexityQuestionIds: [
        "s5-tk-heap-kind",
        "s5-tk-time"
    ],
    badgeId: "badge-pat-top-k",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage5/treeBfs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "treeBfsMcqs",
    ()=>treeBfsMcqs,
    "treeBfsModule",
    ()=>treeBfsModule,
    "treeBfsProblems",
    ()=>treeBfsProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s5";
const P = [
    "tree-bfs"
];
const NOTE = "The tree is given as an array in level order: the children of index `i` are at `2i+1` and `2i+2`, and `null` means no node.";
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "tb-level-order",
        slug: "tree-level-order",
        title: "Level Order Traversal",
        difficulty: "easy",
        patternIds: P,
        statement: `Return the node values grouped by level, top to bottom and left to right within each level.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[[1],[2,3]]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1]",
                output: "[[1]]"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "levelOrder",
        starter: {
            js: "function levelOrder(tree) {\n  // Values grouped by level.\n}\n",
            ts: "function levelOrder(tree: Array<number | null>): number[][] {\n  // Values grouped by level.\n  return [];\n}\n"
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
                    [
                        1
                    ],
                    [
                        2,
                        3
                    ]
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    [
                        3
                    ],
                    [
                        9,
                        20
                    ],
                    [
                        15,
                        7
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
                        null,
                        6
                    ]
                ],
                expected: [
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
            },
            {
                args: [
                    [
                        1,
                        null,
                        2
                    ]
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
                    [
                        1,
                        2,
                        null,
                        4
                    ]
                ],
                expected: [
                    [
                        1
                    ],
                    [
                        2
                    ],
                    [
                        4
                    ]
                ]
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    [
                        5
                    ],
                    [
                        3,
                        8
                    ],
                    [
                        1,
                        4,
                        7,
                        9
                    ]
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: [
                    [
                        2
                    ],
                    [
                        1,
                        3
                    ]
                ]
            }
        ],
        hints: [
            "Process one whole level before moving on to the next.",
            "Collect the current level's indices, emit their values, then build the next level.",
            "next = children of every index in the current level that actually exist."
        ],
        solutions: [
            {
                label: "Level-by-level sweep",
                approach: "Expand each level into the next, emitting values as you go.",
                js: "function levelOrder(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    const vals = [], next = [];\n    for (const i of level) {\n      vals.push(tree[i]);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(vals);\n    level = next;\n  }\n  return out;\n}\n",
                ts: "function levelOrder(tree: Array<number | null>): number[][] {\n  const out: number[][] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    const vals: number[] = [], next: number[] = [];\n    for (const i of level) {\n      vals.push(tree[i] as number);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(vals);\n    level = next;\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function levelOrder(tree) {\n  // Store one value array for every non-empty tree level.\n  const out = [];\n  // An empty array or missing root has no levels to visit.\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Keep the array indices belonging to the current level.\n  let level = [0];\n  while (level.length) {\n    // Collect this level's values and the next level's indices separately.\n    const vals = [], next = [];\n    for (const i of level) {\n      // Indices in level are already ordered from left to right.\n      vals.push(tree[i]);\n      // Array-encoded children of node i occupy these two positions.\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Only real, in-bounds children belong to the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Finish this complete level before advancing the breadth-first sweep.\n    out.push(vals);\n    level = next;\n  }\n  // Levels were appended from the root downward.\n  return out;\n}\n",
                    ts: "function levelOrder(tree: Array<number | null>): number[][] {\n  // Store one value array for every non-empty tree level.\n  const out: number[][] = [];\n  // An empty array or missing root has no levels to visit.\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Keep the array indices belonging to the current level.\n  let level: number[] = [0];\n  while (level.length) {\n    // Collect this level's values and the next level's indices separately.\n    const vals: number[] = [], next: number[] = [];\n    for (const i of level) {\n      // Indices in level are already ordered from left to right.\n      vals.push(tree[i] as number);\n      // Array-encoded children of node i occupy these two positions.\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Only real, in-bounds children belong to the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Finish this complete level before advancing the breadth-first sweep.\n    out.push(vals);\n    level = next;\n  }\n  // Levels were appended from the root downward.\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "DFS with a depth argument",
                approach: "Recurse carrying the depth and append into that level's bucket.",
                js: "function levelOrder(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!out[depth]) out[depth] = [];\n    out[depth].push(tree[i]);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                ts: "function levelOrder(tree: Array<number | null>): number[][] {\n  const out: number[][] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!out[depth]) out[depth] = [];\n    out[depth].push(tree[i] as number);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                commentedCode: {
                    js: "function levelOrder(tree) {\n  // Index each output bucket by tree depth.\n  const out = [];\n  const go = (i, depth) => {\n    // Stop at an out-of-bounds slot or an absent node.\n    if (i >= tree.length || tree[i] == null) return;\n    // The first node encountered at a depth creates that level's bucket.\n    if (!out[depth]) out[depth] = [];\n    // Preorder's left-before-right visits preserve level order inside the bucket.\n    out[depth].push(tree[i]);\n    // Send both children to the following depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  // Begin at the root on depth zero.\n  go(0, 0);\n  return out;\n}\n",
                    ts: "function levelOrder(tree: Array<number | null>): number[][] {\n  // Index each output bucket by tree depth.\n  const out: number[][] = [];\n  const go = (i: number, depth: number) => {\n    // Stop at an out-of-bounds slot or an absent node.\n    if (i >= tree.length || tree[i] == null) return;\n    // The first node encountered at a depth creates that level's bucket.\n    if (!out[depth]) out[depth] = [];\n    // Preorder's left-before-right visits preserve level order inside the bucket.\n    out[depth].push(tree[i] as number);\n    // Send both children to the following depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  // Begin at the root on depth zero.\n  go(0, 0);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tb-level-count",
        slug: "tree-level-count",
        title: "Number of Levels",
        difficulty: "easy",
        patternIds: P,
        statement: `Return how many levels the tree has (an empty tree has 0).\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "2"
            },
            {
                input: "[]",
                output: "0"
            },
            {
                input: "[1]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "levelCount",
        starter: {
            js: "function levelCount(tree) {\n  // Number of levels.\n}\n",
            ts: "function levelCount(tree: Array<number | null>): number {\n  // Number of levels.\n  return 0;\n}\n"
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
                expected: 2
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
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
                        4,
                        5,
                        null,
                        6
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "Count how many times you can expand a level before it becomes empty.",
            "This is the same as the tree's maximum depth in nodes.",
            "Increment a counter each time you build the next level."
        ],
        solutions: [
            {
                label: "Count level expansions",
                approach: "Sweep level by level, counting the iterations.",
                js: "function levelCount(tree) {\n  if (tree.length === 0 || tree[0] == null) return 0;\n  let level = [0], count = 0;\n  while (level.length) {\n    count++;\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return count;\n}\n",
                ts: "function levelCount(tree: Array<number | null>): number {\n  if (tree.length === 0 || tree[0] == null) return 0;\n  let level: number[] = [0], count = 0;\n  while (level.length) {\n    count++;\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function levelCount(tree) {\n  // A missing root means the tree has zero levels.\n  if (tree.length === 0 || tree[0] == null) return 0;\n  // Start the breadth-first sweep at the root, before counting any level.\n  let level = [0], count = 0;\n  while (level.length) {\n    // Entering one non-empty frontier accounts for one complete level.\n    count++;\n    const next = [];\n    for (const i of level) {\n      // Locate this node's children in the level-order array.\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Build the next frontier from children that actually exist.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  // The number of processed frontiers is the tree height in nodes.\n  return count;\n}\n",
                    ts: "function levelCount(tree: Array<number | null>): number {\n  // A missing root means the tree has zero levels.\n  if (tree.length === 0 || tree[0] == null) return 0;\n  // Start the breadth-first sweep at the root, before counting any level.\n  let level: number[] = [0], count = 0;\n  while (level.length) {\n    // Entering one non-empty frontier accounts for one complete level.\n    count++;\n    const next: number[] = [];\n    for (const i of level) {\n      // Locate this node's children in the level-order array.\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Build the next frontier from children that actually exist.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  // The number of processed frontiers is the tree height in nodes.\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Recursive height",
                approach: "Levels equal the maximum depth measured in nodes.",
                js: "function levelCount(tree) {\n  const go = (i) => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  return go(0);\n}\n",
                ts: "function levelCount(tree: Array<number | null>): number {\n  const go = (i: number): number => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  return go(0);\n}\n",
                commentedCode: {
                    js: "function levelCount(tree) {\n  // An absent node contributes zero height; a real node contributes one\n  // plus the taller height of its two child subtrees.\n  const go = (i) => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  // The root subtree's height equals the tree's number of levels.\n  return go(0);\n}\n",
                    ts: "function levelCount(tree: Array<number | null>): number {\n  // An absent node contributes zero height; a real node contributes one\n  // plus the taller height of its two child subtrees.\n  const go = (i: number): number => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  // The root subtree's height equals the tree's number of levels.\n  return go(0);\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            }
        ]
    },
    {
        id: "tb-level-sums",
        slug: "tree-level-sums",
        title: "Sum of Each Level",
        difficulty: "medium",
        patternIds: P,
        statement: `Return an array holding the sum of the values on each level, top to bottom.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[1,5]"
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
            "0 <= tree.length <= 10000"
        ],
        functionName: "levelSums",
        starter: {
            js: "function levelSums(tree) {\n  // Sum of values per level.\n}\n",
            ts: "function levelSums(tree: Array<number | null>): number[] {\n  // Sum of values per level.\n  return [];\n}\n"
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    3,
                    29,
                    22
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
                        null,
                        6
                    ]
                ],
                expected: [
                    1,
                    5,
                    15
                ]
            },
            {
                args: [
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: [
                    1,
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    5,
                    11,
                    21
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: [
                    2,
                    4
                ]
            }
        ],
        hints: [
            "Do a level-order sweep and total each level as you visit it.",
            "Push one number per level, not per node.",
            "Reuse the level-expansion loop and accumulate instead of collecting."
        ],
        solutions: [
            {
                label: "Level sweep with totals",
                approach: "Sum each level's values during the BFS expansion.",
                js: "function levelSums(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    let sum = 0;\n    const next = [];\n    for (const i of level) {\n      sum += tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(sum);\n    level = next;\n  }\n  return out;\n}\n",
                ts: "function levelSums(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    let sum = 0;\n    const next: number[] = [];\n    for (const i of level) {\n      sum += tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(sum);\n    level = next;\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function levelSums(tree) {\n  // Append one total for each level from top to bottom.\n  const out = [];\n  // A tree without a root has no level sums.\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    // Reset the accumulator for this level only.\n    let sum = 0;\n    const next = [];\n    for (const i of level) {\n      // Every index in the frontier represents one present node.\n      sum += tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Queue its present children for the following level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Record the completed level total before moving down.\n    out.push(sum);\n    level = next;\n  }\n  return out;\n}\n",
                    ts: "function levelSums(tree: Array<number | null>): number[] {\n  // Append one total for each level from top to bottom.\n  const out: number[] = [];\n  // A tree without a root has no level sums.\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    // Reset the accumulator for this level only.\n    let sum = 0;\n    const next: number[] = [];\n    for (const i of level) {\n      // Every index in the frontier represents one present node.\n      sum += tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Queue its present children for the following level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Record the completed level total before moving down.\n    out.push(sum);\n    level = next;\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "DFS accumulating by depth",
                approach: "Add each node's value into its depth's slot.",
                js: "function levelSums(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = (out[depth] || 0) + tree[i];\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                ts: "function levelSums(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = (out[depth] || 0) + (tree[i] as number);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                commentedCode: {
                    js: "function levelSums(tree) {\n  // Use depth as the output index for each level's running sum.\n  const out = [];\n  const go = (i, depth) => {\n    // Ignore array gaps and indices beyond the encoded tree.\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize an unseen depth at zero, then add this node's value.\n    out[depth] = (out[depth] || 0) + tree[i];\n    // Both children contribute to the next depth's total.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                    ts: "function levelSums(tree: Array<number | null>): number[] {\n  // Use depth as the output index for each level's running sum.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    // Ignore array gaps and indices beyond the encoded tree.\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize an unseen depth at zero, then add this node's value.\n    out[depth] = (out[depth] || 0) + (tree[i] as number);\n    // Both children contribute to the next depth's total.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tb-right-side-view",
        slug: "tree-right-side-view",
        title: "Right Side View",
        difficulty: "medium",
        patternIds: P,
        statement: `Standing to the right of the tree, return the values you can see — the rightmost node on each level, top to bottom.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[1,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1,2,null,4]",
                output: "[1,2,4]"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "rightSideView",
        starter: {
            js: "function rightSideView(tree) {\n  // Rightmost value on each level.\n}\n",
            ts: "function rightSideView(tree: Array<number | null>): number[] {\n  // Rightmost value on each level.\n  return [];\n}\n"
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
                        null,
                        4
                    ]
                ],
                expected: [
                    1,
                    2,
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    3,
                    20,
                    7
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
                        null,
                        6
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
                    [
                        1,
                        null,
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
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    5,
                    8,
                    9
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: [
                    2,
                    3
                ]
            }
        ],
        hints: [
            "Do a level-order sweep and keep only the last value of each level.",
            "'Rightmost' means last in left-to-right order, which may be a left child.",
            "Push level[level.length - 1] for each level."
        ],
        solutions: [
            {
                label: "Last node of each level",
                approach: "BFS by level and take the final value each time.",
                js: "function rightSideView(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    out.push(tree[level[level.length - 1]]);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
                ts: "function rightSideView(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    out.push(tree[level[level.length - 1]] as number);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function rightSideView(tree) {\n  // Collect the visible node from each depth.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Each frontier is maintained in left-to-right order.\n  let level = [0];\n  while (level.length) {\n    // Therefore the frontier's final node is the rightmost at this depth.\n    out.push(tree[level[level.length - 1]]);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Enqueue left before right to preserve that ordering on the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
                    ts: "function rightSideView(tree: Array<number | null>): number[] {\n  // Collect the visible node from each depth.\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Each frontier is maintained in left-to-right order.\n  let level: number[] = [0];\n  while (level.length) {\n    // Therefore the frontier's final node is the rightmost at this depth.\n    out.push(tree[level[level.length - 1]] as number);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Enqueue left before right to preserve that ordering on the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "DFS right-first",
                approach: "Visit right before left and record the first node seen at each depth.",
                js: "function rightSideView(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (out[depth] === undefined) out[depth] = tree[i];\n    go(2 * i + 2, depth + 1);\n    go(2 * i + 1, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                ts: "function rightSideView(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (out[depth] === undefined) out[depth] = tree[i] as number;\n    go(2 * i + 2, depth + 1);\n    go(2 * i + 1, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                commentedCode: {
                    js: "function rightSideView(tree) {\n  // Reserve one answer slot per depth.\n  const out = [];\n  const go = (i, depth) => {\n    // Stop when this encoded tree position has no node.\n    if (i >= tree.length || tree[i] == null) return;\n    // A right-first DFS reaches the visible node at this depth first.\n    if (out[depth] === undefined) out[depth] = tree[i];\n    // Explore the right subtree before allowing left nodes to reach deeper slots.\n    go(2 * i + 2, depth + 1);\n    go(2 * i + 1, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                    ts: "function rightSideView(tree: Array<number | null>): number[] {\n  // Reserve one answer slot per depth.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    // Stop when this encoded tree position has no node.\n    if (i >= tree.length || tree[i] == null) return;\n    // A right-first DFS reaches the visible node at this depth first.\n    if (out[depth] === undefined) out[depth] = tree[i] as number;\n    // Explore the right subtree before allowing left nodes to reach deeper slots.\n    go(2 * i + 2, depth + 1);\n    go(2 * i + 1, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            }
        ]
    },
    {
        id: "tb-level-maxes",
        slug: "tree-level-maxes",
        title: "Largest Value per Level",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the largest value found on each level, top to bottom.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[1,3]"
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
            "0 <= tree.length <= 10000",
            "values may be negative"
        ],
        functionName: "levelMaxes",
        starter: {
            js: "function levelMaxes(tree) {\n  // Largest value on each level.\n}\n",
            ts: "function levelMaxes(tree: Array<number | null>): number[] {\n  // Largest value on each level.\n  return [];\n}\n"
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    3,
                    20,
                    15
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
                        null,
                        6
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
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: [
                    1,
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    5,
                    8,
                    9
                ]
            },
            {
                args: [
                    [
                        -5,
                        -2,
                        -9
                    ]
                ],
                expected: [
                    -5,
                    -2
                ]
            }
        ],
        hints: [
            "Sweep level by level, tracking the maximum within each level.",
            "Start each level's maximum at -Infinity so negative values work.",
            "Push one maximum per level."
        ],
        solutions: [
            {
                label: "Level sweep with a maximum",
                approach: "Track the largest value while expanding each level.",
                js: "function levelMaxes(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    let best = -Infinity;\n    const next = [];\n    for (const i of level) {\n      if (tree[i] > best) best = tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
                ts: "function levelMaxes(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    let best = -Infinity;\n    const next: number[] = [];\n    for (const i of level) {\n      if ((tree[i] as number) > best) best = tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function levelMaxes(tree) {\n  // Produce one maximum for every non-empty level.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    // Negative infinity lets even an all-negative level replace the sentinel.\n    let best = -Infinity;\n    const next = [];\n    for (const i of level) {\n      // Improve this level's maximum with the current node.\n      if (tree[i] > best) best = tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Gather present children for the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
                    ts: "function levelMaxes(tree: Array<number | null>): number[] {\n  // Produce one maximum for every non-empty level.\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    // Negative infinity lets even an all-negative level replace the sentinel.\n    let best = -Infinity;\n    const next: number[] = [];\n    for (const i of level) {\n      // Improve this level's maximum with the current node.\n      if ((tree[i] as number) > best) best = tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Gather present children for the next level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "DFS by depth",
                approach: "Keep a running maximum in each depth's slot.",
                js: "function levelMaxes(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = out[depth] === undefined ? tree[i] : Math.max(out[depth], tree[i]);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                ts: "function levelMaxes(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = out[depth] === undefined ? (tree[i] as number) : Math.max(out[depth], tree[i] as number);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                commentedCode: {
                    js: "function levelMaxes(tree) {\n  // Store the best value seen at each depth.\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize a new depth, or compare this node with its current maximum.\n    out[depth] = out[depth] === undefined ? tree[i] : Math.max(out[depth], tree[i]);\n    // Visit every descendant so each level's candidates are considered.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                    ts: "function levelMaxes(tree: Array<number | null>): number[] {\n  // Store the best value seen at each depth.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize a new depth, or compare this node with its current maximum.\n    out[depth] = out[depth] === undefined ? (tree[i] as number) : Math.max(out[depth], tree[i] as number);\n    // Visit every descendant so each level's candidates are considered.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tb-zigzag",
        slug: "tree-zigzag",
        title: "Zigzag Level Order",
        difficulty: "hard",
        patternIds: P,
        statement: `Return the values grouped by level, but alternate direction: the first level left-to-right, the second right-to-left, and so on.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[[1],[3,2]]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1]",
                output: "[[1]]"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "zigzagLevelOrder",
        starter: {
            js: "function zigzagLevelOrder(tree) {\n  // Levels, alternating direction.\n}\n",
            ts: "function zigzagLevelOrder(tree: Array<number | null>): number[][] {\n  // Levels, alternating direction.\n  return [];\n}\n"
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
                    [
                        1
                    ],
                    [
                        3,
                        2
                    ]
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    [
                        3
                    ],
                    [
                        20,
                        9
                    ],
                    [
                        15,
                        7
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
                        null,
                        6
                    ]
                ],
                expected: [
                    [
                        1
                    ],
                    [
                        3,
                        2
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
                        1,
                        null,
                        2
                    ]
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
                    [
                        1,
                        2,
                        null,
                        4
                    ]
                ],
                expected: [
                    [
                        1
                    ],
                    [
                        2
                    ],
                    [
                        4
                    ]
                ]
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    [
                        5
                    ],
                    [
                        8,
                        3
                    ],
                    [
                        1,
                        4,
                        7,
                        9
                    ]
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: [
                    [
                        2
                    ],
                    [
                        3,
                        1
                    ]
                ]
            }
        ],
        hints: [
            "Do a normal level-order sweep first — the traversal itself doesn't change.",
            "Reverse the collected values on every second level.",
            "Track the level index and reverse when it's odd."
        ],
        solutions: [
            {
                label: "Level sweep, reverse odd levels",
                approach: "Collect each level normally, flipping alternate ones.",
                js: "function zigzagLevelOrder(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0], depth = 0;\n  while (level.length) {\n    const vals = [], next = [];\n    for (const i of level) {\n      vals.push(tree[i]);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(depth % 2 === 1 ? vals.reverse() : vals);\n    level = next;\n    depth++;\n  }\n  return out;\n}\n",
                ts: "function zigzagLevelOrder(tree: Array<number | null>): number[][] {\n  const out: number[][] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0], depth = 0;\n  while (level.length) {\n    const vals: number[] = [], next: number[] = [];\n    for (const i of level) {\n      vals.push(tree[i] as number);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(depth % 2 === 1 ? vals.reverse() : vals);\n    level = next;\n    depth++;\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function zigzagLevelOrder(tree) {\n  // Collect the levels in their requested alternating directions.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Depth parity decides whether this level must be reversed.\n  let level = [0], depth = 0;\n  while (level.length) {\n    const vals = [], next = [];\n    for (const i of level) {\n      // First collect and expand the level in normal left-to-right order.\n      vals.push(tree[i]);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Odd depths read right-to-left; even depths keep the natural order.\n    out.push(depth % 2 === 1 ? vals.reverse() : vals);\n    level = next;\n    depth++;\n  }\n  return out;\n}\n",
                    ts: "function zigzagLevelOrder(tree: Array<number | null>): number[][] {\n  // Collect the levels in their requested alternating directions.\n  const out: number[][] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Depth parity decides whether this level must be reversed.\n  let level: number[] = [0], depth = 0;\n  while (level.length) {\n    const vals: number[] = [], next: number[] = [];\n    for (const i of level) {\n      // First collect and expand the level in normal left-to-right order.\n      vals.push(tree[i] as number);\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    // Odd depths read right-to-left; even depths keep the natural order.\n    out.push(depth % 2 === 1 ? vals.reverse() : vals);\n    level = next;\n    depth++;\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Build level order, then flip",
                approach: "Reuse a plain level-order result and reverse alternate rows.",
                js: "function zigzagLevelOrder(tree) {\n  const levels = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!levels[depth]) levels[depth] = [];\n    levels[depth].push(tree[i]);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return levels.map((row, d) => (d % 2 === 1 ? [...row].reverse() : row));\n}\n",
                ts: "function zigzagLevelOrder(tree: Array<number | null>): number[][] {\n  const levels: number[][] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!levels[depth]) levels[depth] = [];\n    levels[depth].push(tree[i] as number);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return levels.map((row, d) => (d % 2 === 1 ? [...row].reverse() : row));\n}\n",
                commentedCode: {
                    js: "function zigzagLevelOrder(tree) {\n  // First group values into ordinary left-to-right depth buckets.\n  const levels = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!levels[depth]) levels[depth] = [];\n    levels[depth].push(tree[i]);\n    // Visiting left before right preserves each bucket's natural order.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  // Reverse copies of odd-depth rows to create the zigzag without changing traversal.\n  return levels.map((row, d) => (d % 2 === 1 ? [...row].reverse() : row));\n}\n",
                    ts: "function zigzagLevelOrder(tree: Array<number | null>): number[][] {\n  // First group values into ordinary left-to-right depth buckets.\n  const levels: number[][] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (!levels[depth]) levels[depth] = [];\n    levels[depth].push(tree[i] as number);\n    // Visiting left before right preserves each bucket's natural order.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  // Reverse copies of odd-depth rows to create the zigzag without changing traversal.\n  return levels.map((row, d) => (d % 2 === 1 ? [...row].reverse() : row));\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "tb-left-side-view",
        slug: "tree-left-side-view",
        title: "Left Side View",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the leftmost node value on each level, top to bottom.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[1,2]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1,null,2]",
                output: "[1,2]"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "leftSideView",
        starter: {
            js: "function leftSideView(tree) {\n  // Leftmost value on each level.\n}\n",
            ts: "function leftSideView(tree: Array<number | null>): number[] {\n  // Leftmost value on each level.\n  return [];\n}\n"
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
                        null,
                        2
                    ]
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    3,
                    9,
                    15
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
                        null,
                        6
                    ]
                ],
                expected: [
                    1,
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        null,
                        4
                    ]
                ],
                expected: [
                    1,
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    5,
                    3,
                    1
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: [
                    2,
                    1
                ]
            }
        ],
        hints: [
            "Same level sweep — take the first value of each level instead of the last.",
            "'Leftmost' is first in left-to-right order, which may be a right child.",
            "Push level[0] for each level."
        ],
        solutions: [
            {
                label: "First node of each level",
                approach: "BFS by level, taking the first value.",
                js: "function leftSideView(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    out.push(tree[level[0]]);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
                ts: "function leftSideView(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    out.push(tree[level[0]] as number);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function leftSideView(tree) {\n  // Collect the node visible from the left at every depth.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Frontiers remain ordered from left to right.\n  let level = [0];\n  while (level.length) {\n    // Thus the first frontier index identifies this level's leftmost node.\n    out.push(tree[level[0]]);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Adding each left child before its right sibling preserves the order.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
                    ts: "function leftSideView(tree: Array<number | null>): number[] {\n  // Collect the node visible from the left at every depth.\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  // Frontiers remain ordered from left to right.\n  let level: number[] = [0];\n  while (level.length) {\n    // Thus the first frontier index identifies this level's leftmost node.\n    out.push(tree[level[0]] as number);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Adding each left child before its right sibling preserves the order.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "DFS left-first",
                approach: "Visit left before right and record the first node at each depth.",
                js: "function leftSideView(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (out[depth] === undefined) out[depth] = tree[i];\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                ts: "function leftSideView(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (out[depth] === undefined) out[depth] = tree[i] as number;\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                commentedCode: {
                    js: "function leftSideView(tree) {\n  // Keep only the first value discovered at each depth.\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Left-first traversal makes that first discovery the leftmost node.\n    if (out[depth] === undefined) out[depth] = tree[i];\n    // Search left before right so later nodes cannot replace the visible one.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                    ts: "function leftSideView(tree: Array<number | null>): number[] {\n  // Keep only the first value discovered at each depth.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Left-first traversal makes that first discovery the leftmost node.\n    if (out[depth] === undefined) out[depth] = tree[i] as number;\n    // Search left before right so later nodes cannot replace the visible one.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            }
        ]
    },
    {
        id: "tb-level-mins",
        slug: "tree-level-mins",
        title: "Smallest Value per Level",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the smallest value found on each level, top to bottom.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[1,2]"
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
            "0 <= tree.length <= 10000",
            "values may be negative"
        ],
        functionName: "levelMins",
        starter: {
            js: "function levelMins(tree) {\n  // Smallest value on each level.\n}\n",
            ts: "function levelMins(tree: Array<number | null>): number[] {\n  // Smallest value on each level.\n  return [];\n}\n"
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    3,
                    9,
                    7
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
                        null,
                        6
                    ]
                ],
                expected: [
                    1,
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: [
                    1,
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    5,
                    3,
                    1
                ]
            },
            {
                args: [
                    [
                        -5,
                        -2,
                        -9
                    ]
                ],
                expected: [
                    -5,
                    -9
                ]
            }
        ],
        hints: [
            "Mirror the level-maximum sweep with a minimum instead.",
            "Start each level's minimum at Infinity so negatives work.",
            "Push one minimum per level."
        ],
        solutions: [
            {
                label: "Level sweep with a minimum",
                approach: "Track the smallest value while expanding each level.",
                js: "function levelMins(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    let best = Infinity;\n    const next = [];\n    for (const i of level) {\n      if (tree[i] < best) best = tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
                ts: "function levelMins(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    let best = Infinity;\n    const next: number[] = [];\n    for (const i of level) {\n      if ((tree[i] as number) < best) best = tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function levelMins(tree) {\n  // Produce one minimum for every non-empty level.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    // Positive infinity lets the first real value establish the minimum.\n    let best = Infinity;\n    const next = [];\n    for (const i of level) {\n      // Improve this level's minimum with the current node.\n      if (tree[i] < best) best = tree[i];\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Gather present children for the following level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n",
                    ts: "function levelMins(tree: Array<number | null>): number[] {\n  // Produce one minimum for every non-empty level.\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    // Positive infinity lets the first real value establish the minimum.\n    let best = Infinity;\n    const next: number[] = [];\n    for (const i of level) {\n      // Improve this level's minimum with the current node.\n      if ((tree[i] as number) < best) best = tree[i] as number;\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Gather present children for the following level.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    out.push(best);\n    level = next;\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "DFS by depth",
                approach: "Keep a running minimum in each depth's slot.",
                js: "function levelMins(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = out[depth] === undefined ? tree[i] : Math.min(out[depth], tree[i]);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                ts: "function levelMins(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = out[depth] === undefined ? (tree[i] as number) : Math.min(out[depth], tree[i] as number);\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                commentedCode: {
                    js: "function levelMins(tree) {\n  // Store the smallest value encountered at each depth.\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize a new depth, or compare this value with its current minimum.\n    out[depth] = out[depth] === undefined ? tree[i] : Math.min(out[depth], tree[i]);\n    // Visit both subtrees so no value on the level is skipped.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                    ts: "function levelMins(tree: Array<number | null>): number[] {\n  // Store the smallest value encountered at each depth.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize a new depth, or compare this value with its current minimum.\n    out[depth] = out[depth] === undefined ? (tree[i] as number) : Math.min(out[depth], tree[i] as number);\n    // Visit both subtrees so no value on the level is skipped.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tb-level-sizes",
        slug: "tree-level-sizes",
        title: "Nodes per Level",
        difficulty: "easy",
        patternIds: P,
        statement: `Return how many nodes sit on each level, top to bottom.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[1,2]"
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
            "0 <= tree.length <= 10000"
        ],
        functionName: "levelSizes",
        starter: {
            js: "function levelSizes(tree) {\n  // Node count per level.\n}\n",
            ts: "function levelSizes(tree: Array<number | null>): number[] {\n  // Node count per level.\n  return [];\n}\n"
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    1,
                    2,
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
                        null,
                        6
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
                        1,
                        null,
                        2
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
                        1,
                        2,
                        null,
                        4
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
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    1,
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: [
                    1,
                    2
                ]
            }
        ],
        hints: [
            "The size of a level is simply how many indices it holds.",
            "Push level.length before expanding to the next level.",
            "Missing children never enter the next level."
        ],
        solutions: [
            {
                label: "Level sweep",
                approach: "Record each level's length as you expand.",
                js: "function levelSizes(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    out.push(level.length);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
                ts: "function levelSizes(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    out.push(level.length);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function levelSizes(tree) {\n  // Append the number of present nodes at each depth.\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level = [0];\n  while (level.length) {\n    // The frontier contains exactly all nodes on the current level.\n    out.push(level.length);\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Only present children count toward the following frontier's size.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n",
                    ts: "function levelSizes(tree: Array<number | null>): number[] {\n  // Append the number of present nodes at each depth.\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  let level: number[] = [0];\n  while (level.length) {\n    // The frontier contains exactly all nodes on the current level.\n    out.push(level.length);\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Only present children count toward the following frontier's size.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Count by depth",
                approach: "Increment a per-depth counter during a DFS.",
                js: "function levelSizes(tree) {\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = (out[depth] || 0) + 1;\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                ts: "function levelSizes(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out[depth] = (out[depth] || 0) + 1;\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                commentedCode: {
                    js: "function levelSizes(tree) {\n  // Use each depth as the index of its node counter.\n  const out = [];\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize an unseen depth at zero, then count this real node.\n    out[depth] = (out[depth] || 0) + 1;\n    // Count both child subtrees on the next depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n",
                    ts: "function levelSizes(tree: Array<number | null>): number[] {\n  // Use each depth as the index of its node counter.\n  const out: number[] = [];\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // Initialize an unseen depth at zero, then count this real node.\n    out[depth] = (out[depth] || 0) + 1;\n    // Count both child subtrees on the next depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tb-deepest-leftmost",
        slug: "tree-deepest-leftmost",
        title: "Bottom-Left Value",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the leftmost value on the tree's deepest level, or -1 if the tree is empty.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "2"
            },
            {
                input: "[]",
                output: "-1"
            },
            {
                input: "[1]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "deepestLeftmost",
        starter: {
            js: "function deepestLeftmost(tree) {\n  // Leftmost value on the deepest level, or -1.\n}\n",
            ts: "function deepestLeftmost(tree: Array<number | null>): number {\n  // Leftmost value on the deepest level, or -1.\n  return -1;\n}\n"
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
                expected: 2
            },
            {
                args: [
                    []
                ],
                expected: -1
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
                    [
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: 15
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        null,
                        6
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: 1
            }
        ],
        hints: [
            "Sweep level by level and keep overwriting a 'first value of this level' variable.",
            "When the sweep ends, that variable holds the deepest level's first value.",
            "Guard the empty tree with -1."
        ],
        solutions: [
            {
                label: "Level sweep, keep the last first-value",
                approach: "Each level overwrites the answer, so the deepest wins.",
                js: "function deepestLeftmost(tree) {\n  if (tree.length === 0 || tree[0] == null) return -1;\n  let level = [0], answer = tree[0];\n  while (level.length) {\n    answer = tree[level[0]];\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return answer;\n}\n",
                ts: "function deepestLeftmost(tree: Array<number | null>): number {\n  if (tree.length === 0 || tree[0] == null) return -1;\n  let level: number[] = [0], answer = tree[0] as number;\n  while (level.length) {\n    answer = tree[level[0]] as number;\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  return answer;\n}\n",
                commentedCode: {
                    js: "function deepestLeftmost(tree) {\n  // The problem's sentinel handles a tree with no root.\n  if (tree.length === 0 || tree[0] == null) return -1;\n  // Begin with the root frontier and a valid provisional answer.\n  let level = [0], answer = tree[0];\n  while (level.length) {\n    // Overwrite with the leftmost node of every successively deeper level.\n    answer = tree[level[0]];\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Left-before-right expansion keeps the next frontier ordered.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  // The final overwrite came from the deepest non-empty level.\n  return answer;\n}\n",
                    ts: "function deepestLeftmost(tree: Array<number | null>): number {\n  // The problem's sentinel handles a tree with no root.\n  if (tree.length === 0 || tree[0] == null) return -1;\n  // Begin with the root frontier and a valid provisional answer.\n  let level: number[] = [0], answer = tree[0] as number;\n  while (level.length) {\n    // Overwrite with the leftmost node of every successively deeper level.\n    answer = tree[level[0]] as number;\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      // Left-before-right expansion keeps the next frontier ordered.\n      if (l < tree.length && tree[l] != null) next.push(l);\n      if (r < tree.length && tree[r] != null) next.push(r);\n    }\n    level = next;\n  }\n  // The final overwrite came from the deepest non-empty level.\n  return answer;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "DFS tracking the deepest depth",
                approach: "Record the first node found at a strictly deeper level.",
                js: "function deepestLeftmost(tree) {\n  let bestDepth = -1, answer = -1;\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (depth > bestDepth) { bestDepth = depth; answer = tree[i]; }\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return answer;\n}\n",
                ts: "function deepestLeftmost(tree: Array<number | null>): number {\n  let bestDepth = -1, answer = -1;\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    if (depth > bestDepth) { bestDepth = depth; answer = tree[i] as number; }\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  return answer;\n}\n",
                commentedCode: {
                    js: "function deepestLeftmost(tree) {\n  // Keep the deepest discovered depth and its first node's value.\n  let bestDepth = -1, answer = -1;\n  const go = (i, depth) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // A strictly new depth is reached first through the leftmost available path.\n    if (depth > bestDepth) { bestDepth = depth; answer = tree[i]; }\n    // Left-first traversal preserves that first-node property at every depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  // Empty trees keep -1; otherwise the deepest first node remains recorded.\n  return answer;\n}\n",
                    ts: "function deepestLeftmost(tree: Array<number | null>): number {\n  // Keep the deepest discovered depth and its first node's value.\n  let bestDepth = -1, answer = -1;\n  const go = (i: number, depth: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    // A strictly new depth is reached first through the leftmost available path.\n    if (depth > bestDepth) { bestDepth = depth; answer = tree[i] as number; }\n    // Left-first traversal preserves that first-node property at every depth.\n    go(2 * i + 1, depth + 1);\n    go(2 * i + 2, depth + 1);\n  };\n  go(0, 0);\n  // Empty trees keep -1; otherwise the deepest first node remains recorded.\n  return answer;\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            }
        ]
    }
];
const treeBfsProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const treeBfsMcqs = [
    {
        id: "s5-tb-queue",
        kind: "mcq",
        prompt: "Level-order traversal of a tree is naturally implemented with:",
        options: [
            "a stack",
            "a queue",
            "a hash map",
            "a heap"
        ],
        answerIndex: 1,
        explanation: "First-in-first-out order is exactly what visiting level by level requires."
    },
    {
        id: "s5-tb-space",
        kind: "mcq",
        prompt: "In the worst case, the queue in a level-order traversal holds how many nodes?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "The widest level of a balanced tree holds about n/2 nodes, so space is O(n)."
    }
];
const treeBfsModule = {
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
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for tree BFS when the question mentions:

- **levels** — group by level, sum/max/min per level, level sizes, zigzag order,
- a **side view** (first or last node of each level),
- the **shallowest** leaf or shortest depth — BFS finds it without exploring deeper branches,
- the **deepest / bottom-most** node, where the last level processed is the answer.`
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

**Pitfalls:** losing the level boundary (if you push and pop one shared queue without recording each level's size, you can't tell where a level ends); pushing missing children and later reading \`null\`; assuming the "rightmost" node of a level is a right child — it needn't be. Note that many level questions can also be solved by DFS carrying a \`depth\` argument. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "tb-level-order",
    drillProblemIds: [
        "tb-level-order",
        "tb-level-count",
        "tb-level-sums",
        "tb-right-side-view",
        "tb-level-maxes",
        "tb-zigzag"
    ],
    testPoolProblemIds: [
        "tb-left-side-view",
        "tb-level-mins",
        "tb-level-sizes",
        "tb-deepest-leftmost"
    ],
    complexityQuestionIds: [
        "s5-tb-queue",
        "s5-tb-space"
    ],
    badgeId: "badge-pat-tree-bfs",
    prerequisiteModuleIds: [
        "m-pat-tree-dfs"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage5/treeDfs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "treeDfsMcqs",
    ()=>treeDfsMcqs,
    "treeDfsModule",
    ()=>treeDfsModule,
    "treeDfsProblems",
    ()=>treeDfsProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
;
const S = "dsa-s5";
const P = [
    "tree-dfs"
];
/**
 * Tree encoding used across Stage 5: a complete-array (heap-style) level order
 * where the children of index i live at 2i+1 and 2i+2, and `null` marks a
 * missing node. Indices past the end are treated as missing.
 */ const NOTE = "The tree is given as an array in level order: the children of index `i` are at `2i+1` and `2i+2`, and `null` means no node.";
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "td-max-depth",
        slug: "tree-max-depth",
        title: "Maximum Depth",
        difficulty: "easy",
        patternIds: P,
        statement: `Return the maximum depth of the tree, counted in **nodes** (an empty tree has depth 0).\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "2"
            },
            {
                input: "[]",
                output: "0"
            },
            {
                input: "[1]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "maxDepth",
        starter: {
            js: "function maxDepth(tree) {\n  // Depth in nodes; empty tree is 0.\n}\n",
            ts: "function maxDepth(tree: Array<number | null>): number {\n  // Depth in nodes; empty tree is 0.\n  return 0;\n}\n"
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
                expected: 2
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
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
                        4,
                        5,
                        null,
                        6
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "The depth of a node is 1 plus the deeper of its two subtrees.",
            "A missing node (out of range or null) contributes depth 0.",
            "go(i) = tree[i] == null ? 0 : 1 + max(go(2i+1), go(2i+2))."
        ],
        solutions: [
            {
                label: "Recursive DFS",
                approach: "Recurse into both children and take the deeper side.",
                js: "function maxDepth(tree) {\n  const go = (i) => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  return go(0);\n}\n",
                ts: "function maxDepth(tree: Array<number | null>): number {\n  const go = (i: number): number => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(go(2 * i + 1), go(2 * i + 2)));\n  return go(0);\n}\n",
                commentedCode: {
                    js: "function maxDepth(tree) {\n  // Return the depth of the subtree rooted at array index i.\n  const go = (i) => {\n    // A missing node contributes no levels to the depth.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Heap-style array encoding places the two children at 2i+1 and 2i+2.\n    const leftDepth = go(2 * i + 1);\n    const rightDepth = go(2 * i + 2);\n\n    // Count this node plus the deeper of its two subtrees.\n    return 1 + Math.max(leftDepth, rightDepth);\n  };\n\n  // Index 0 is the root; an empty or null root naturally returns 0.\n  return go(0);\n}\n",
                    ts: "function maxDepth(tree: Array<number | null>): number {\n  // Return the depth of the subtree rooted at array index i.\n  const go = (i: number): number => {\n    // A missing node contributes no levels to the depth.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Heap-style array encoding places the two children at 2i+1 and 2i+2.\n    const leftDepth = go(2 * i + 1);\n    const rightDepth = go(2 * i + 2);\n\n    // Count this node plus the deeper of its two subtrees.\n    return 1 + Math.max(leftDepth, rightDepth);\n  };\n\n  // Index 0 is the root; an empty or null root naturally returns 0.\n  return go(0);\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            },
            {
                label: "Deepest occupied index",
                approach: "In this encoding, depth follows from the deepest non-null index.",
                js: "function maxDepth(tree) {\n  let deepest = -1;\n  for (let i = 0; i < tree.length; i++) if (tree[i] != null) deepest = i;\n  if (deepest === -1) return 0;\n  let depth = 0, span = 1, start = 0;\n  while (start <= deepest) { depth++; start += span; span *= 2; }\n  return depth;\n}\n",
                ts: "function maxDepth(tree: Array<number | null>): number {\n  let deepest = -1;\n  for (let i = 0; i < tree.length; i++) if (tree[i] != null) deepest = i;\n  if (deepest === -1) return 0;\n  let depth = 0, span = 1, start = 0;\n  while (start <= deepest) { depth++; start += span; span *= 2; }\n  return depth;\n}\n",
                commentedCode: {
                    js: "function maxDepth(tree) {\n  // Remember the largest array index that actually contains a node.\n  let deepest = -1;\n  for (let i = 0; i < tree.length; i++) {\n    // Null slots do not contribute a level to the represented tree.\n    if (tree[i] != null) deepest = i;\n  }\n\n  // No occupied index means the tree is empty.\n  if (deepest === -1) return 0;\n\n  // Level 0 starts at index 0 and contains one array position.\n  let depth = 0;\n  let span = 1;\n  let start = 0;\n\n  // Advance through complete-array level boundaries until reaching the deepest node.\n  while (start <= deepest) {\n    depth++;\n    start += span;\n    span *= 2;\n  }\n\n  // The number of crossed levels is the depth measured in nodes.\n  return depth;\n}\n",
                    ts: "function maxDepth(tree: Array<number | null>): number {\n  // Remember the largest array index that actually contains a node.\n  let deepest = -1;\n  for (let i = 0; i < tree.length; i++) {\n    // Null slots do not contribute a level to the represented tree.\n    if (tree[i] != null) deepest = i;\n  }\n\n  // No occupied index means the tree is empty.\n  if (deepest === -1) return 0;\n\n  // Level 0 starts at index 0 and contains one array position.\n  let depth = 0;\n  let span = 1;\n  let start = 0;\n\n  // Advance through complete-array level boundaries until reaching the deepest node.\n  while (start <= deepest) {\n    depth++;\n    start += span;\n    span *= 2;\n  }\n\n  // The number of crossed levels is the depth measured in nodes.\n  return depth;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "td-sum-nodes",
        slug: "tree-sum",
        title: "Sum of All Nodes",
        difficulty: "easy",
        patternIds: P,
        statement: `Return the sum of every node's value.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "6"
            },
            {
                input: "[]",
                output: "0"
            },
            {
                input: "[1]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "sumTree",
        starter: {
            js: "function sumTree(tree) {\n  // Sum of every node value.\n}\n",
            ts: "function sumTree(tree: Array<number | null>): number {\n  // Sum of every node value.\n  return 0;\n}\n"
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
                expected: 6
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: 54
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        null,
                        6
                    ]
                ],
                expected: 21
            },
            {
                args: [
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: 7
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: 37
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: 6
            }
        ],
        hints: [
            "A subtree's sum is its root value plus both child subtree sums.",
            "Missing nodes contribute 0.",
            "Or simply add every non-null entry in the array."
        ],
        solutions: [
            {
                label: "Recursive DFS",
                approach: "Sum the node plus both subtrees.",
                js: "function sumTree(tree) {\n  const go = (i) => (i >= tree.length || tree[i] == null ? 0 : tree[i] + go(2 * i + 1) + go(2 * i + 2));\n  return go(0);\n}\n",
                ts: "function sumTree(tree: Array<number | null>): number {\n  const go = (i: number): number => (i >= tree.length || tree[i] == null ? 0 : (tree[i] as number) + go(2 * i + 1) + go(2 * i + 2));\n  return go(0);\n}\n",
                commentedCode: {
                    js: "function sumTree(tree) {\n  // Compute the total stored in the subtree rooted at index i.\n  const go = (i) => {\n    // An out-of-range or null slot contributes nothing to the sum.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Sum this node with the totals from both child subtrees.\n    const leftSum = go(2 * i + 1);\n    const rightSum = go(2 * i + 2);\n    return tree[i] + leftSum + rightSum;\n  };\n\n  // Start at the root so every reachable node is included once.\n  return go(0);\n}\n",
                    ts: "function sumTree(tree: Array<number | null>): number {\n  // Compute the total stored in the subtree rooted at index i.\n  const go = (i: number): number => {\n    // An out-of-range or null slot contributes nothing to the sum.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Sum this node with the totals from both child subtrees.\n    const leftSum = go(2 * i + 1);\n    const rightSum = go(2 * i + 2);\n    return (tree[i] as number) + leftSum + rightSum;\n  };\n\n  // Start at the root so every reachable node is included once.\n  return go(0);\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            },
            {
                label: "Sum the array",
                approach: "Every stored node appears once in the encoding.",
                js: "function sumTree(tree) {\n  let s = 0;\n  for (const v of tree) if (v != null) s += v;\n  return s;\n}\n",
                ts: "function sumTree(tree: Array<number | null>): number {\n  let s = 0;\n  for (const v of tree) if (v != null) s += v;\n  return s;\n}\n",
                commentedCode: {
                    js: "function sumTree(tree) {\n  // Accumulate the value of every occupied array slot.\n  let sum = 0;\n  for (const value of tree) {\n    // Null marks a missing node, so only numbers belong in the total.\n    if (value != null) sum += value;\n  }\n\n  // Empty trees and all-null encodings leave the total at zero.\n  return sum;\n}\n",
                    ts: "function sumTree(tree: Array<number | null>): number {\n  // Accumulate the value of every occupied array slot.\n  let sum = 0;\n  for (const value of tree) {\n    // Null marks a missing node, so only numbers belong in the total.\n    if (value != null) sum += value;\n  }\n\n  // Empty trees and all-null encodings leave the total at zero.\n  return sum;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "td-preorder",
        slug: "tree-preorder",
        title: "Preorder Traversal",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the node values in **preorder**: node, then left subtree, then right subtree.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[1,2,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1,2,3,4,5,null,6]",
                output: "[1,2,4,5,3,6]"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "preorder",
        starter: {
            js: "function preorder(tree) {\n  // node, left, right.\n}\n",
            ts: "function preorder(tree: Array<number | null>): number[] {\n  // node, left, right.\n  return [];\n}\n"
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
                        3,
                        4,
                        5,
                        null,
                        6
                    ]
                ],
                expected: [
                    1,
                    2,
                    4,
                    5,
                    3,
                    6
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    3,
                    9,
                    20,
                    15,
                    7
                ]
            },
            {
                args: [
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: [
                    1,
                    2,
                    4
                ]
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    5,
                    3,
                    1,
                    4,
                    8,
                    7,
                    9
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: [
                    2,
                    1,
                    3
                ]
            }
        ],
        hints: [
            "Visit the node first, then recurse left, then right.",
            "Stop as soon as an index is out of range or null.",
            "go(i): push tree[i]; go(2i+1); go(2i+2)."
        ],
        solutions: [
            {
                label: "Recursive DFS",
                approach: "Emit the node before descending.",
                js: "function preorder(tree) {\n  const out = [];\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out.push(tree[i]);\n    go(2 * i + 1);\n    go(2 * i + 2);\n  };\n  go(0);\n  return out;\n}\n",
                ts: "function preorder(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out.push(tree[i] as number);\n    go(2 * i + 1);\n    go(2 * i + 2);\n  };\n  go(0);\n  return out;\n}\n",
                commentedCode: {
                    js: "function preorder(tree) {\n  // Collect nodes in node-left-right order.\n  const out = [];\n\n  const go = (i) => {\n    // Stop when this array index does not represent a node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Preorder emits the current node before exploring either child.\n    out.push(tree[i]);\n    // Then visit the complete left subtree.\n    go(2 * i + 1);\n    // Finally visit the complete right subtree.\n    go(2 * i + 2);\n  };\n\n  // Traverse from the root and return the recorded visit order.\n  go(0);\n  return out;\n}\n",
                    ts: "function preorder(tree: Array<number | null>): number[] {\n  // Collect nodes in node-left-right order.\n  const out: number[] = [];\n\n  const go = (i: number): void => {\n    // Stop when this array index does not represent a node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Preorder emits the current node before exploring either child.\n    out.push(tree[i] as number);\n    // Then visit the complete left subtree.\n    go(2 * i + 1);\n    // Finally visit the complete right subtree.\n    go(2 * i + 2);\n  };\n\n  // Traverse from the root and return the recorded visit order.\n  go(0);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            },
            {
                label: "Explicit stack",
                approach: "Push the right child before the left so the left pops first.",
                js: "function preorder(tree) {\n  const out = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  const stack = [0];\n  while (stack.length) {\n    const i = stack.pop();\n    if (i >= tree.length || tree[i] == null) continue;\n    out.push(tree[i]);\n    stack.push(2 * i + 2);\n    stack.push(2 * i + 1);\n  }\n  return out;\n}\n",
                ts: "function preorder(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  if (tree.length === 0 || tree[0] == null) return out;\n  const stack: number[] = [0];\n  while (stack.length) {\n    const i = stack.pop() as number;\n    if (i >= tree.length || tree[i] == null) continue;\n    out.push(tree[i] as number);\n    stack.push(2 * i + 2);\n    stack.push(2 * i + 1);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function preorder(tree) {\n  // Collect node values in preorder as indices are processed.\n  const out = [];\n  // There is nothing to traverse when the root is missing.\n  if (tree.length === 0 || tree[0] == null) return out;\n\n  // Store array indices whose nodes still need to be visited.\n  const stack = [0];\n  while (stack.length) {\n    // LIFO order determines which node is visited next.\n    const i = stack.pop();\n    // Ignore child indices that do not contain nodes.\n    if (i >= tree.length || tree[i] == null) continue;\n\n    // Emit the node as soon as it is popped: the node part of preorder.\n    out.push(tree[i]);\n    // Push right first so the left child is popped and processed first.\n    stack.push(2 * i + 2);\n    stack.push(2 * i + 1);\n  }\n\n  return out;\n}\n",
                    ts: "function preorder(tree: Array<number | null>): number[] {\n  // Collect node values in preorder as indices are processed.\n  const out: number[] = [];\n  // There is nothing to traverse when the root is missing.\n  if (tree.length === 0 || tree[0] == null) return out;\n\n  // Store array indices whose nodes still need to be visited.\n  const stack: number[] = [0];\n  while (stack.length) {\n    // LIFO order determines which node is visited next.\n    const i = stack.pop() as number;\n    // Ignore child indices that do not contain nodes.\n    if (i >= tree.length || tree[i] == null) continue;\n\n    // Emit the node as soon as it is popped: the node part of preorder.\n    out.push(tree[i] as number);\n    // Push right first so the left child is popped and processed first.\n    stack.push(2 * i + 2);\n    stack.push(2 * i + 1);\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "td-path-sum",
        slug: "tree-path-sum",
        title: "Root-to-Leaf Path Sum",
        difficulty: "medium",
        patternIds: P,
        statement: `Return \`true\` if some root-to-leaf path's values add up exactly to \`target\`. An empty tree has no paths.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3], 3",
                output: "true"
            },
            {
                input: "[1,2,3], 5",
                output: "false"
            },
            {
                input: "[], 0",
                output: "false"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "hasPathSum",
        starter: {
            js: "function hasPathSum(tree, target) {\n  // True if a root-to-leaf path sums to target.\n}\n",
            ts: "function hasPathSum(tree: Array<number | null>, target: number): boolean {\n  // True if a root-to-leaf path sums to target.\n  return false;\n}\n"
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
                expected: true
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
                expected: false
            },
            {
                args: [
                    [],
                    0
                ],
                expected: false
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
                expected: true
            },
            {
                args: [
                    [
                        1
                    ],
                    0
                ],
                expected: false
            },
            {
                args: [
                    [
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ],
                    38
                ],
                expected: true
            },
            {
                args: [
                    [
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ],
                    12
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
                        null,
                        6
                    ],
                    10
                ],
                expected: true
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ],
                    21
                ],
                expected: false
            }
        ],
        hints: [
            "Carry the running total down the tree, subtracting as you descend.",
            "A leaf is a node whose two children are both missing.",
            "At a leaf, check whether the remaining target equals the node's value."
        ],
        solutions: [
            {
                label: "DFS carrying the remainder",
                approach: "Subtract each node's value and test the remainder at leaves.",
                js: "function hasPathSum(tree, target) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  const go = (i, remaining) => {\n    if (missing(i)) return false;\n    const left = 2 * i + 1, right = 2 * i + 2;\n    const rest = remaining - tree[i];\n    if (missing(left) && missing(right)) return rest === 0;\n    return go(left, rest) || go(right, rest);\n  };\n  return go(0, target);\n}\n",
                ts: "function hasPathSum(tree: Array<number | null>, target: number): boolean {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  const go = (i: number, remaining: number): boolean => {\n    if (missing(i)) return false;\n    const left = 2 * i + 1, right = 2 * i + 2;\n    const rest = remaining - (tree[i] as number);\n    if (missing(left) && missing(right)) return rest === 0;\n    return go(left, rest) || go(right, rest);\n  };\n  return go(0, target);\n}\n",
                commentedCode: {
                    js: "function hasPathSum(tree, target) {\n  // Treat out-of-range and null slots uniformly as missing nodes.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n\n  const go = (i, remaining) => {\n    // A missing node cannot complete a root-to-leaf path.\n    if (missing(i)) return false;\n\n    // Locate this node's children in the heap-style array encoding.\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // Remove this node's value from the sum the path still needs.\n    const rest = remaining - tree[i];\n\n    // Only a leaf can finish a valid path; it succeeds when nothing remains.\n    if (missing(left) && missing(right)) return rest === 0;\n\n    // Continue down either existing branch with the same updated remainder.\n    return go(left, rest) || go(right, rest);\n  };\n\n  // Begin at the root needing the full target sum.\n  return go(0, target);\n}\n",
                    ts: "function hasPathSum(tree: Array<number | null>, target: number): boolean {\n  // Treat out-of-range and null slots uniformly as missing nodes.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n\n  const go = (i: number, remaining: number): boolean => {\n    // A missing node cannot complete a root-to-leaf path.\n    if (missing(i)) return false;\n\n    // Locate this node's children in the heap-style array encoding.\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // Remove this node's value from the sum the path still needs.\n    const rest = remaining - (tree[i] as number);\n\n    // Only a leaf can finish a valid path; it succeeds when nothing remains.\n    if (missing(left) && missing(right)) return rest === 0;\n\n    // Continue down either existing branch with the same updated remainder.\n    return go(left, rest) || go(right, rest);\n  };\n\n  // Begin at the root needing the full target sum.\n  return go(0, target);\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            },
            {
                label: "Collect every path sum",
                approach: "Gather all root-to-leaf sums, then check membership.",
                js: "function hasPathSum(tree, target) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  const sums = [];\n  const go = (i, acc) => {\n    if (missing(i)) return;\n    const total = acc + tree[i];\n    const left = 2 * i + 1, right = 2 * i + 2;\n    if (missing(left) && missing(right)) { sums.push(total); return; }\n    go(left, total);\n    go(right, total);\n  };\n  go(0, 0);\n  return sums.includes(target);\n}\n",
                ts: "function hasPathSum(tree: Array<number | null>, target: number): boolean {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  const sums: number[] = [];\n  const go = (i: number, acc: number) => {\n    if (missing(i)) return;\n    const total = acc + (tree[i] as number);\n    const left = 2 * i + 1, right = 2 * i + 2;\n    if (missing(left) && missing(right)) { sums.push(total); return; }\n    go(left, total);\n    go(right, total);\n  };\n  go(0, 0);\n  return sums.includes(target);\n}\n",
                commentedCode: {
                    js: "function hasPathSum(tree, target) {\n  // Recognize indices that do not hold tree nodes.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  // Store the completed sum of every root-to-leaf path.\n  const sums = [];\n\n  const go = (i, accumulated) => {\n    // Missing branches do not produce path sums.\n    if (missing(i)) return;\n\n    // Extend the current root-to-node path with this node's value.\n    const total = accumulated + tree[i];\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n\n    // A path is complete only when the current node has no children.\n    if (missing(left) && missing(right)) {\n      sums.push(total);\n      return;\n    }\n\n    // Explore both branches while carrying the sum through this node.\n    go(left, total);\n    go(right, total);\n  };\n\n  // Collect all complete path sums, then test whether the target is among them.\n  go(0, 0);\n  return sums.includes(target);\n}\n",
                    ts: "function hasPathSum(tree: Array<number | null>, target: number): boolean {\n  // Recognize indices that do not hold tree nodes.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n  // Store the completed sum of every root-to-leaf path.\n  const sums: number[] = [];\n\n  const go = (i: number, accumulated: number): void => {\n    // Missing branches do not produce path sums.\n    if (missing(i)) return;\n\n    // Extend the current root-to-node path with this node's value.\n    const total = accumulated + (tree[i] as number);\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n\n    // A path is complete only when the current node has no children.\n    if (missing(left) && missing(right)) {\n      sums.push(total);\n      return;\n    }\n\n    // Explore both branches while carrying the sum through this node.\n    go(left, total);\n    go(right, total);\n  };\n\n  // Collect all complete path sums, then test whether the target is among them.\n  go(0, 0);\n  return sums.includes(target);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "td-count-leaves",
        slug: "tree-count-leaves",
        title: "Count the Leaves",
        difficulty: "medium",
        patternIds: P,
        statement: `Return how many leaves the tree has — nodes with no children.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "2"
            },
            {
                input: "[]",
                output: "0"
            },
            {
                input: "[1]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "countLeaves",
        starter: {
            js: "function countLeaves(tree) {\n  // Number of nodes with no children.\n}\n",
            ts: "function countLeaves(tree: Array<number | null>): number {\n  // Number of nodes with no children.\n  return 0;\n}\n"
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
                expected: 2
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
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
                        4,
                        5,
                        null,
                        6
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        1,
                        null,
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2,
                        null,
                        4
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "A leaf has both children missing.",
            "Recurse, adding 1 whenever you reach a leaf.",
            "if (missing(left) && missing(right)) return 1; else return go(left) + go(right)."
        ],
        solutions: [
            {
                label: "Recursive DFS",
                approach: "Count 1 at each leaf, otherwise sum the subtrees.",
                js: "function countLeaves(tree) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  const go = (i) => {\n    if (missing(i)) return 0;\n    const left = 2 * i + 1, right = 2 * i + 2;\n    if (missing(left) && missing(right)) return 1;\n    return go(left) + go(right);\n  };\n  return go(0);\n}\n",
                ts: "function countLeaves(tree: Array<number | null>): number {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  const go = (i: number): number => {\n    if (missing(i)) return 0;\n    const left = 2 * i + 1, right = 2 * i + 2;\n    if (missing(left) && missing(right)) return 1;\n    return go(left) + go(right);\n  };\n  return go(0);\n}\n",
                commentedCode: {
                    js: "function countLeaves(tree) {\n  // Treat both null entries and positions past the array as missing nodes.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n\n  const go = (i) => {\n    // A missing branch contains no leaves.\n    if (missing(i)) return 0;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // A present node with no present children is exactly one leaf.\n    if (missing(left) && missing(right)) return 1;\n\n    // Otherwise, every leaf lies in one of the two child subtrees.\n    return go(left) + go(right);\n  };\n\n  // Count all leaves reachable from the root.\n  return go(0);\n}\n",
                    ts: "function countLeaves(tree: Array<number | null>): number {\n  // Treat both null entries and positions past the array as missing nodes.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n\n  const go = (i: number): number => {\n    // A missing branch contains no leaves.\n    if (missing(i)) return 0;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // A present node with no present children is exactly one leaf.\n    if (missing(left) && missing(right)) return 1;\n\n    // Otherwise, every leaf lies in one of the two child subtrees.\n    return go(left) + go(right);\n  };\n\n  // Count all leaves reachable from the root.\n  return go(0);\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            },
            {
                label: "Scan the array",
                approach: "A stored node is a leaf when neither child index holds a value.",
                js: "function countLeaves(tree) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  let count = 0;\n  for (let i = 0; i < tree.length; i++) {\n    if (tree[i] == null) continue;\n    if (missing(2 * i + 1) && missing(2 * i + 2)) count++;\n  }\n  return count;\n}\n",
                ts: "function countLeaves(tree: Array<number | null>): number {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  let count = 0;\n  for (let i = 0; i < tree.length; i++) {\n    if (tree[i] == null) continue;\n    if (missing(2 * i + 1) && missing(2 * i + 2)) count++;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countLeaves(tree) {\n  // Recognize child indices that do not contain nodes.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  let count = 0;\n\n  // Inspect every slot that could represent a node.\n  for (let i = 0; i < tree.length; i++) {\n    // A null slot is not a node and therefore cannot be a leaf.\n    if (tree[i] == null) continue;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // Count this node exactly when neither child exists.\n    if (missing(left) && missing(right)) count++;\n  }\n\n  return count;\n}\n",
                    ts: "function countLeaves(tree: Array<number | null>): number {\n  // Recognize child indices that do not contain nodes.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n  let count = 0;\n\n  // Inspect every slot that could represent a node.\n  for (let i = 0; i < tree.length; i++) {\n    // A null slot is not a node and therefore cannot be a leaf.\n    if (tree[i] == null) continue;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // Count this node exactly when neither child exists.\n    if (missing(left) && missing(right)) count++;\n  }\n\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "td-diameter",
        slug: "tree-diameter",
        title: "Diameter of the Tree",
        difficulty: "hard",
        patternIds: P,
        statement: `Return the length of the longest path between any two nodes, measured in **edges**. The path need not pass through the root.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "2"
            },
            {
                input: "[]",
                output: "0"
            },
            {
                input: "[1]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "diameter",
        starter: {
            js: "function diameter(tree) {\n  // Longest path between any two nodes, in edges.\n}\n",
            ts: "function diameter(tree: Array<number | null>): number {\n  // Longest path between any two nodes, in edges.\n  return 0;\n}\n"
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
                expected: 2
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
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
                        4,
                        5,
                        null,
                        6
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        1,
                        null,
                        2
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        2,
                        null,
                        4
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        1,
                        2
                    ]
                ],
                expected: 1
            }
        ],
        hints: [
            "At each node, the best path through it is (left height) + (right height) in edges.",
            "Compute heights bottom-up while tracking the best total seen anywhere.",
            "Return the height so the parent can use it, but record left+right as a candidate."
        ],
        solutions: [
            {
                label: "Height DFS with a running best",
                approach: "One traversal computes heights and the widest path through each node.",
                js: "function diameter(tree) {\n  let best = 0;\n  const height = (i) => {\n    if (i >= tree.length || tree[i] == null) return 0;\n    const l = height(2 * i + 1);\n    const r = height(2 * i + 2);\n    best = Math.max(best, l + r);\n    return 1 + Math.max(l, r);\n  };\n  height(0);\n  return best;\n}\n",
                ts: "function diameter(tree: Array<number | null>): number {\n  let best = 0;\n  const height = (i: number): number => {\n    if (i >= tree.length || tree[i] == null) return 0;\n    const l = height(2 * i + 1);\n    const r = height(2 * i + 2);\n    best = Math.max(best, l + r);\n    return 1 + Math.max(l, r);\n  };\n  height(0);\n  return best;\n}\n",
                commentedCode: {
                    js: "function diameter(tree) {\n  // Track the longest edge-count path found anywhere in the tree.\n  let best = 0;\n\n  // Return this subtree's height in nodes so its parent can extend a path.\n  const height = (i) => {\n    // A missing subtree has height zero.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Compute child heights bottom-up before evaluating this node.\n    const leftHeight = height(2 * i + 1);\n    const rightHeight = height(2 * i + 2);\n\n    // A path through this node uses one downward edge per node of child height.\n    best = Math.max(best, leftHeight + rightHeight);\n\n    // The parent can continue through only the taller child branch.\n    return 1 + Math.max(leftHeight, rightHeight);\n  };\n\n  // The traversal updates best as a side effect at every occupied node.\n  height(0);\n  return best;\n}\n",
                    ts: "function diameter(tree: Array<number | null>): number {\n  // Track the longest edge-count path found anywhere in the tree.\n  let best = 0;\n\n  // Return this subtree's height in nodes so its parent can extend a path.\n  const height = (i: number): number => {\n    // A missing subtree has height zero.\n    if (i >= tree.length || tree[i] == null) return 0;\n\n    // Compute child heights bottom-up before evaluating this node.\n    const leftHeight = height(2 * i + 1);\n    const rightHeight = height(2 * i + 2);\n\n    // A path through this node uses one downward edge per node of child height.\n    best = Math.max(best, leftHeight + rightHeight);\n\n    // The parent can continue through only the taller child branch.\n    return 1 + Math.max(leftHeight, rightHeight);\n  };\n\n  // The traversal updates best as a side effect at every occupied node.\n  height(0);\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            },
            {
                label: "Height per node",
                approach: "Recompute subtree heights at every node and take the best sum.",
                js: "function diameter(tree) {\n  const height = (i) => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(height(2 * i + 1), height(2 * i + 2)));\n  let best = 0;\n  for (let i = 0; i < tree.length; i++) {\n    if (tree[i] == null) continue;\n    best = Math.max(best, height(2 * i + 1) + height(2 * i + 2));\n  }\n  return best;\n}\n",
                ts: "function diameter(tree: Array<number | null>): number {\n  const height = (i: number): number => (i >= tree.length || tree[i] == null ? 0 : 1 + Math.max(height(2 * i + 1), height(2 * i + 2)));\n  let best = 0;\n  for (let i = 0; i < tree.length; i++) {\n    if (tree[i] == null) continue;\n    best = Math.max(best, height(2 * i + 1) + height(2 * i + 2));\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function diameter(tree) {\n  // Compute a subtree's height in nodes whenever a candidate needs it.\n  const height = (i) => {\n    if (i >= tree.length || tree[i] == null) return 0;\n    return 1 + Math.max(height(2 * i + 1), height(2 * i + 2));\n  };\n\n  // Keep the widest path through any node seen so far.\n  let best = 0;\n  for (let i = 0; i < tree.length; i++) {\n    // Missing slots cannot be the center of a path.\n    if (tree[i] == null) continue;\n\n    // Joining the two child heights gives the edge count through this node.\n    const throughNode = height(2 * i + 1) + height(2 * i + 2);\n    best = Math.max(best, throughNode);\n  }\n\n  return best;\n}\n",
                    ts: "function diameter(tree: Array<number | null>): number {\n  // Compute a subtree's height in nodes whenever a candidate needs it.\n  const height = (i: number): number => {\n    if (i >= tree.length || tree[i] == null) return 0;\n    return 1 + Math.max(height(2 * i + 1), height(2 * i + 2));\n  };\n\n  // Keep the widest path through any node seen so far.\n  let best = 0;\n  for (let i = 0; i < tree.length; i++) {\n    // Missing slots cannot be the center of a path.\n    if (tree[i] == null) continue;\n\n    // Joining the two child heights gives the edge count through this node.\n    const throughNode = height(2 * i + 1) + height(2 * i + 2);\n    best = Math.max(best, throughNode);\n  }\n\n  return best;\n}\n"
                },
                time: "O(n·h)",
                space: "O(h)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "td-inorder",
        slug: "tree-inorder",
        title: "Inorder Traversal",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the node values in **inorder**: left subtree, then node, then right subtree.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[2,1,3]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1,2,3,4,5,null,6]",
                output: "[4,2,5,1,3,6]"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "inorder",
        starter: {
            js: "function inorder(tree) {\n  // left, node, right.\n}\n",
            ts: "function inorder(tree: Array<number | null>): number[] {\n  // left, node, right.\n  return [];\n}\n"
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
            },
            {
                args: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        null,
                        6
                    ]
                ],
                expected: [
                    4,
                    2,
                    5,
                    1,
                    3,
                    6
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    9,
                    3,
                    15,
                    20,
                    7
                ]
            },
            {
                args: [
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: [
                    4,
                    2,
                    1
                ]
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    1,
                    3,
                    4,
                    5,
                    7,
                    8,
                    9
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
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
        hints: [
            "Fully explore the left subtree before emitting the node.",
            "For a binary search tree this yields sorted order.",
            "go(2i+1); push tree[i]; go(2i+2)."
        ],
        solutions: [
            {
                label: "Recursive DFS",
                approach: "Left, node, right.",
                js: "function inorder(tree) {\n  const out = [];\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return;\n    go(2 * i + 1);\n    out.push(tree[i]);\n    go(2 * i + 2);\n  };\n  go(0);\n  return out;\n}\n",
                ts: "function inorder(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    go(2 * i + 1);\n    out.push(tree[i] as number);\n    go(2 * i + 2);\n  };\n  go(0);\n  return out;\n}\n",
                commentedCode: {
                    js: "function inorder(tree) {\n  // Collect nodes in left-node-right order.\n  const out = [];\n\n  const go = (i) => {\n    // Stop before trying to visit an absent node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Inorder first emits every value in the left subtree.\n    go(2 * i + 1);\n    // Emit the current node after its left subtree is complete.\n    out.push(tree[i]);\n    // Then emit every value in the right subtree.\n    go(2 * i + 2);\n  };\n\n  go(0);\n  return out;\n}\n",
                    ts: "function inorder(tree: Array<number | null>): number[] {\n  // Collect nodes in left-node-right order.\n  const out: number[] = [];\n\n  const go = (i: number): void => {\n    // Stop before trying to visit an absent node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Inorder first emits every value in the left subtree.\n    go(2 * i + 1);\n    // Emit the current node after its left subtree is complete.\n    out.push(tree[i] as number);\n    // Then emit every value in the right subtree.\n    go(2 * i + 2);\n  };\n\n  go(0);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            },
            {
                label: "Preorder then rearrange",
                approach: "Build the traversal by recursing into arrays and concatenating.",
                js: "function inorder(tree) {\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return [];\n    return [...go(2 * i + 1), tree[i], ...go(2 * i + 2)];\n  };\n  return go(0);\n}\n",
                ts: "function inorder(tree: Array<number | null>): number[] {\n  const go = (i: number): number[] => {\n    if (i >= tree.length || tree[i] == null) return [];\n    return [...go(2 * i + 1), tree[i] as number, ...go(2 * i + 2)];\n  };\n  return go(0);\n}\n",
                commentedCode: {
                    js: "function inorder(tree) {\n  // Build and return a complete inorder array for the subtree at index i.\n  const go = (i) => {\n    // A missing subtree contributes no values to the traversal.\n    if (i >= tree.length || tree[i] == null) return [];\n\n    // Concatenate left traversal, current value, and right traversal.\n    const leftValues = go(2 * i + 1);\n    const rightValues = go(2 * i + 2);\n    return [...leftValues, tree[i], ...rightValues];\n  };\n\n  // The root's subtree is the entire tree.\n  return go(0);\n}\n",
                    ts: "function inorder(tree: Array<number | null>): number[] {\n  // Build and return a complete inorder array for the subtree at index i.\n  const go = (i: number): number[] => {\n    // A missing subtree contributes no values to the traversal.\n    if (i >= tree.length || tree[i] == null) return [];\n\n    // Concatenate left traversal, current value, and right traversal.\n    const leftValues = go(2 * i + 1);\n    const rightValues = go(2 * i + 2);\n    return [...leftValues, tree[i] as number, ...rightValues];\n  };\n\n  // The root's subtree is the entire tree.\n  return go(0);\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "td-postorder",
        slug: "tree-postorder",
        title: "Postorder Traversal",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the node values in **postorder**: left subtree, then right subtree, then node.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[2,3,1]"
            },
            {
                input: "[]",
                output: "[]"
            },
            {
                input: "[1,2,3,4,5,null,6]",
                output: "[4,5,2,6,3,1]"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "postorder",
        starter: {
            js: "function postorder(tree) {\n  // left, right, node.\n}\n",
            ts: "function postorder(tree: Array<number | null>): number[] {\n  // left, right, node.\n  return [];\n}\n"
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
                    2,
                    3,
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
                        1,
                        2,
                        3,
                        4,
                        5,
                        null,
                        6
                    ]
                ],
                expected: [
                    4,
                    5,
                    2,
                    6,
                    3,
                    1
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
                    ]
                ],
                expected: [
                    9,
                    15,
                    7,
                    20,
                    3
                ]
            },
            {
                args: [
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: [
                    4,
                    2,
                    1
                ]
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: [
                    1,
                    4,
                    3,
                    7,
                    9,
                    8,
                    5
                ]
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: [
                    1,
                    3,
                    2
                ]
            }
        ],
        hints: [
            "Emit the node only after both subtrees are done.",
            "This is the order you'd use to free or delete a tree safely.",
            "go(2i+1); go(2i+2); push tree[i]."
        ],
        solutions: [
            {
                label: "Recursive DFS",
                approach: "Left, right, then the node.",
                js: "function postorder(tree) {\n  const out = [];\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return;\n    go(2 * i + 1);\n    go(2 * i + 2);\n    out.push(tree[i]);\n  };\n  go(0);\n  return out;\n}\n",
                ts: "function postorder(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    go(2 * i + 1);\n    go(2 * i + 2);\n    out.push(tree[i] as number);\n  };\n  go(0);\n  return out;\n}\n",
                commentedCode: {
                    js: "function postorder(tree) {\n  // Collect nodes in left-right-node order.\n  const out = [];\n\n  const go = (i) => {\n    // Missing nodes end their recursion branch immediately.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Complete both child subtrees before emitting the parent.\n    go(2 * i + 1);\n    go(2 * i + 2);\n    out.push(tree[i]);\n  };\n\n  go(0);\n  return out;\n}\n",
                    ts: "function postorder(tree: Array<number | null>): number[] {\n  // Collect nodes in left-right-node order.\n  const out: number[] = [];\n\n  const go = (i: number): void => {\n    // Missing nodes end their recursion branch immediately.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Complete both child subtrees before emitting the parent.\n    go(2 * i + 1);\n    go(2 * i + 2);\n    out.push(tree[i] as number);\n  };\n\n  go(0);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            },
            {
                label: "Reverse of a mirrored preorder",
                approach: "Node-right-left reversed gives left-right-node.",
                js: "function postorder(tree) {\n  const out = [];\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out.push(tree[i]);\n    go(2 * i + 2);\n    go(2 * i + 1);\n  };\n  go(0);\n  return out.reverse();\n}\n",
                ts: "function postorder(tree: Array<number | null>): number[] {\n  const out: number[] = [];\n  const go = (i: number) => {\n    if (i >= tree.length || tree[i] == null) return;\n    out.push(tree[i] as number);\n    go(2 * i + 2);\n    go(2 * i + 1);\n  };\n  go(0);\n  return out.reverse();\n}\n",
                commentedCode: {
                    js: "function postorder(tree) {\n  // First create node-right-left order, the mirror of preorder.\n  const out = [];\n\n  const go = (i) => {\n    // Do not emit or descend from a missing node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Emit the parent first for the temporary mirrored traversal.\n    out.push(tree[i]);\n    // Visit right before left so reversing will put left before right.\n    go(2 * i + 2);\n    go(2 * i + 1);\n  };\n\n  go(0);\n  // Reversing node-right-left produces the required left-right-node order.\n  return out.reverse();\n}\n",
                    ts: "function postorder(tree: Array<number | null>): number[] {\n  // First create node-right-left order, the mirror of preorder.\n  const out: number[] = [];\n\n  const go = (i: number): void => {\n    // Do not emit or descend from a missing node.\n    if (i >= tree.length || tree[i] == null) return;\n\n    // Emit the parent first for the temporary mirrored traversal.\n    out.push(tree[i] as number);\n    // Visit right before left so reversing will put left before right.\n    go(2 * i + 2);\n    go(2 * i + 1);\n  };\n\n  go(0);\n  // Reversing node-right-left produces the required left-right-node order.\n  return out.reverse();\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "td-min-depth",
        slug: "tree-min-depth",
        title: "Minimum Depth",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the number of nodes on the shortest path from the root down to any **leaf**. An empty tree has depth 0.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "2"
            },
            {
                input: "[]",
                output: "0"
            },
            {
                input: "[1,null,2]",
                output: "2"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000"
        ],
        functionName: "minDepth",
        starter: {
            js: "function minDepth(tree) {\n  // Nodes on the shortest root-to-leaf path.\n}\n",
            ts: "function minDepth(tree: Array<number | null>): number {\n  // Nodes on the shortest root-to-leaf path.\n  return 0;\n}\n"
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
                expected: 2
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
                        null,
                        2
                    ]
                ],
                expected: 2
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
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
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
                        5,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "A node with only one child is not a leaf — you can't take the missing side.",
            "Only take the minimum across children that actually exist.",
            "If one side is missing, the answer is 1 + the other side's min depth."
        ],
        solutions: [
            {
                label: "DFS respecting single children",
                approach: "Take the min only over existing children.",
                js: "function minDepth(tree) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  const go = (i) => {\n    if (missing(i)) return 0;\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (missing(l) && missing(r)) return 1;\n    if (missing(l)) return 1 + go(r);\n    if (missing(r)) return 1 + go(l);\n    return 1 + Math.min(go(l), go(r));\n  };\n  return go(0);\n}\n",
                ts: "function minDepth(tree: Array<number | null>): number {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  const go = (i: number): number => {\n    if (missing(i)) return 0;\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (missing(l) && missing(r)) return 1;\n    if (missing(l)) return 1 + go(r);\n    if (missing(r)) return 1 + go(l);\n    return 1 + Math.min(go(l), go(r));\n  };\n  return go(0);\n}\n",
                commentedCode: {
                    js: "function minDepth(tree) {\n  // Recognize an absent node from either a null slot or array boundary.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n\n  // Return the shortest node-count path from this node to a leaf.\n  const go = (i) => {\n    // An empty tree or missing branch has depth zero.\n    if (missing(i)) return 0;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // A node with no children is a leaf, so its depth is one.\n    if (missing(left) && missing(right)) return 1;\n\n    // With one child, a root-to-leaf path must follow the child that exists.\n    if (missing(left)) return 1 + go(right);\n    if (missing(right)) return 1 + go(left);\n\n    // With two children, choose the shorter valid path and count this node.\n    return 1 + Math.min(go(left), go(right));\n  };\n\n  return go(0);\n}\n",
                    ts: "function minDepth(tree: Array<number | null>): number {\n  // Recognize an absent node from either a null slot or array boundary.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n\n  // Return the shortest node-count path from this node to a leaf.\n  const go = (i: number): number => {\n    // An empty tree or missing branch has depth zero.\n    if (missing(i)) return 0;\n\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    // A node with no children is a leaf, so its depth is one.\n    if (missing(left) && missing(right)) return 1;\n\n    // With one child, a root-to-leaf path must follow the child that exists.\n    if (missing(left)) return 1 + go(right);\n    if (missing(right)) return 1 + go(left);\n\n    // With two children, choose the shorter valid path and count this node.\n    return 1 + Math.min(go(left), go(right));\n  };\n\n  return go(0);\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            },
            {
                label: "Level scan for the first leaf",
                approach: "Walk level by level and stop at the first leaf encountered.",
                js: "function minDepth(tree) {\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  if (missing(0)) return 0;\n  let level = [0], depth = 1;\n  while (level.length) {\n    const next = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (missing(l) && missing(r)) return depth;\n      if (!missing(l)) next.push(l);\n      if (!missing(r)) next.push(r);\n    }\n    level = next;\n    depth++;\n  }\n  return depth;\n}\n",
                ts: "function minDepth(tree: Array<number | null>): number {\n  const missing = (i: number) => i >= tree.length || tree[i] == null;\n  if (missing(0)) return 0;\n  let level: number[] = [0], depth = 1;\n  while (level.length) {\n    const next: number[] = [];\n    for (const i of level) {\n      const l = 2 * i + 1, r = 2 * i + 2;\n      if (missing(l) && missing(r)) return depth;\n      if (!missing(l)) next.push(l);\n      if (!missing(r)) next.push(r);\n    }\n    level = next;\n    depth++;\n  }\n  return depth;\n}\n",
                commentedCode: {
                    js: "function minDepth(tree) {\n  // Recognize indices that do not contain nodes.\n  const missing = (i) => i >= tree.length || tree[i] == null;\n  // An empty tree has no root-to-leaf path.\n  if (missing(0)) return 0;\n\n  // Breadth-first search processes all nodes at the same depth together.\n  let level = [0];\n  let depth = 1;\n\n  while (level.length) {\n    const next = [];\n    for (const i of level) {\n      const left = 2 * i + 1;\n      const right = 2 * i + 2;\n\n      // The first leaf reached by BFS has the globally minimum depth.\n      if (missing(left) && missing(right)) return depth;\n\n      // Only occupied children belong in the following level.\n      if (!missing(left)) next.push(left);\n      if (!missing(right)) next.push(right);\n    }\n\n    level = next;\n    depth++;\n  }\n\n  // This fallback is unreachable for a well-formed nonempty tree.\n  return depth;\n}\n",
                    ts: "function minDepth(tree: Array<number | null>): number {\n  // Recognize indices that do not contain nodes.\n  const missing = (i: number): boolean => i >= tree.length || tree[i] == null;\n  // An empty tree has no root-to-leaf path.\n  if (missing(0)) return 0;\n\n  // Breadth-first search processes all nodes at the same depth together.\n  let level: number[] = [0];\n  let depth = 1;\n\n  while (level.length) {\n    const next: number[] = [];\n    for (const i of level) {\n      const left = 2 * i + 1;\n      const right = 2 * i + 2;\n\n      // The first leaf reached by BFS has the globally minimum depth.\n      if (missing(left) && missing(right)) return depth;\n\n      // Only occupied children belong in the following level.\n      if (!missing(left)) next.push(left);\n      if (!missing(right)) next.push(right);\n    }\n\n    level = next;\n    depth++;\n  }\n\n  // This fallback is unreachable for a well-formed nonempty tree.\n  return depth;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "td-max-value",
        slug: "tree-max-value",
        title: "Largest Value",
        difficulty: "easy",
        patternIds: P,
        statement: `Return the largest value stored in the tree, or -1 if the tree is empty.\n\n${NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "3"
            },
            {
                input: "[]",
                output: "-1"
            },
            {
                input: "[1]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= tree.length <= 10000",
            "values may be negative"
        ],
        functionName: "maxValue",
        starter: {
            js: "function maxValue(tree) {\n  // Largest node value, or -1 when empty.\n}\n",
            ts: "function maxValue(tree: Array<number | null>): number {\n  // Largest node value, or -1 when empty.\n  return -1;\n}\n"
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
                expected: 3
            },
            {
                args: [
                    []
                ],
                expected: -1
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
                    [
                        3,
                        9,
                        20,
                        null,
                        null,
                        15,
                        7
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
                        null,
                        6
                    ]
                ],
                expected: 6
            },
            {
                args: [
                    [
                        1,
                        null,
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
                        null,
                        4
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
                    ]
                ],
                expected: 9
            },
            {
                args: [
                    [
                        -5,
                        -2,
                        -9
                    ]
                ],
                expected: -2
            }
        ],
        hints: [
            "The maximum is the largest of the node and both subtree maxima.",
            "Handle the empty tree separately so -1 isn't confused with a real value.",
            "Or scan every non-null entry of the array."
        ],
        solutions: [
            {
                label: "Recursive DFS",
                approach: "Compare the node against both subtree maxima.",
                js: "function maxValue(tree) {\n  const go = (i) => {\n    if (i >= tree.length || tree[i] == null) return -Infinity;\n    return Math.max(tree[i], go(2 * i + 1), go(2 * i + 2));\n  };\n  const best = go(0);\n  return best === -Infinity ? -1 : best;\n}\n",
                ts: "function maxValue(tree: Array<number | null>): number {\n  const go = (i: number): number => {\n    if (i >= tree.length || tree[i] == null) return -Infinity;\n    return Math.max(tree[i] as number, go(2 * i + 1), go(2 * i + 2));\n  };\n  const best = go(0);\n  return best === -Infinity ? -1 : best;\n}\n",
                commentedCode: {
                    js: "function maxValue(tree) {\n  // Return the largest number found in the subtree at index i.\n  const go = (i) => {\n    // Negative infinity is a neutral maximum sentinel for a missing subtree.\n    if (i >= tree.length || tree[i] == null) return -Infinity;\n\n    // Compare the current value with the best value from each child subtree.\n    const leftBest = go(2 * i + 1);\n    const rightBest = go(2 * i + 2);\n    return Math.max(tree[i], leftBest, rightBest);\n  };\n\n  const best = go(0);\n  // Translate the missing-root sentinel to the problem's required empty result.\n  return best === -Infinity ? -1 : best;\n}\n",
                    ts: "function maxValue(tree: Array<number | null>): number {\n  // Return the largest number found in the subtree at index i.\n  const go = (i: number): number => {\n    // Negative infinity is a neutral maximum sentinel for a missing subtree.\n    if (i >= tree.length || tree[i] == null) return -Infinity;\n\n    // Compare the current value with the best value from each child subtree.\n    const leftBest = go(2 * i + 1);\n    const rightBest = go(2 * i + 2);\n    return Math.max(tree[i] as number, leftBest, rightBest);\n  };\n\n  const best = go(0);\n  // Translate the missing-root sentinel to the problem's required empty result.\n  return best === -Infinity ? -1 : best;\n}\n"
                },
                time: "O(n)",
                space: "O(h)"
            },
            {
                label: "Scan the array",
                approach: "Take the maximum over the stored values.",
                js: "function maxValue(tree) {\n  const values = tree.filter((v) => v != null);\n  return values.length === 0 ? -1 : Math.max(...values);\n}\n",
                ts: "function maxValue(tree: Array<number | null>): number {\n  const values = tree.filter((v): v is number => v != null);\n  return values.length === 0 ? -1 : Math.max(...values);\n}\n",
                commentedCode: {
                    js: "function maxValue(tree) {\n  // Remove null placeholders so only real node values remain.\n  const values = tree.filter((value) => value != null);\n\n  // Use the required sentinel for an empty tree; otherwise take the numeric maximum.\n  return values.length === 0 ? -1 : Math.max(...values);\n}\n",
                    ts: "function maxValue(tree: Array<number | null>): number {\n  // The type predicate narrows the filtered array from nullable values to numbers.\n  const values = tree.filter((value): value is number => value != null);\n\n  // Use the required sentinel for an empty tree; otherwise take the numeric maximum.\n  return values.length === 0 ? -1 : Math.max(...values);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    }
];
const treeDfsProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const treeDfsMcqs = [
    {
        id: "s5-td-time",
        kind: "mcq",
        prompt: "A depth-first traversal of a tree with n nodes visits each node once, so it runs in:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "Every node is entered and left exactly once — linear in the node count."
    },
    {
        id: "s5-td-space",
        kind: "mcq",
        prompt: "The extra space used by a recursive DFS on a tree of height h is:",
        options: [
            "O(1)",
            "O(h)",
            "O(n²)",
            "O(2ⁿ)"
        ],
        answerIndex: 1,
        explanation: "The call stack holds one frame per level, so it's proportional to the height."
    }
];
const treeDfsModule = {
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
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for tree DFS when the question is about:

- a **traversal order** (preorder / inorder / postorder),
- **root-to-leaf paths** — sums, counts, or "does a path exist",
- **depth or height**, or anything computed **bottom-up** from children,
- comparing or transforming subtrees (mirror, invert, same-tree),
- BST work where inorder gives you sorted values.`
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

**Pitfalls:** a node with **one** child is not a leaf — minimum-depth problems break if you take \`Math.min\` blindly; distinguish depth measured in **nodes** vs path length in **edges**; recursion depth is O(h), which is O(n) for a skewed tree. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "td-max-depth",
    drillProblemIds: [
        "td-max-depth",
        "td-sum-nodes",
        "td-preorder",
        "td-path-sum",
        "td-count-leaves",
        "td-diameter"
    ],
    testPoolProblemIds: [
        "td-inorder",
        "td-postorder",
        "td-min-depth",
        "td-max-value"
    ],
    complexityQuestionIds: [
        "s5-td-time",
        "s5-td-space"
    ],
    badgeId: "badge-pat-tree-dfs",
    prerequisiteModuleIds: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage5/twoHeaps.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "twoHeapsMcqs",
    ()=>twoHeapsMcqs,
    "twoHeapsModule",
    ()=>twoHeapsModule,
    "twoHeapsProblems",
    ()=>twoHeapsProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/shared/heap.ts [app-client] (ecmascript)");
;
;
const S = "dsa-s5";
const P = [
    "two-heaps"
];
/** Both heap classes, for the balanced max-heap / min-heap median technique. */ const BOTH_HEAPS = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\n${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}`;
const MEDIAN_NOTE = "The median of an even-length list is the average of its two middle values.";
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "th-median-of-list",
        slug: "median-of-list",
        title: "Median of a List",
        difficulty: "easy",
        patternIds: P,
        statement: `Return the median of the values. ${MEDIAN_NOTE} An empty list has median 0.`,
        examples: [
            {
                input: "[3,1,2]",
                output: "2"
            },
            {
                input: "[1,2,3,4]",
                output: "2.5"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "medianOfList",
        starter: {
            js: "function medianOfList(nums) {\n  // Median; average the two middles when even.\n}\n",
            ts: "function medianOfList(nums: number[]): number {\n  // Median; average the two middles when even.\n  return 0;\n}\n"
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
                        1,
                        2,
                        3,
                        4
                    ]
                ],
                expected: 2.5
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
                        1,
                        2
                    ]
                ],
                expected: 1.5
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
                        -1,
                        1
                    ]
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
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "Sort the values, then look at the middle.",
            "For an even count, average the two central values.",
            "Guard the empty list before indexing."
        ],
        solutions: [
            {
                label: "Sort and take the middle",
                approach: "Order the values and read the centre.",
                js: "function medianOfList(nums) {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  return a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n}\n",
                ts: "function medianOfList(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  return a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n}\n",
                commentedCode: {
                    js: "function medianOfList(nums) {\n  // Handle the empty input before trying to read a middle position.\n  if (nums.length === 0) return 0;\n\n  // Sort a copy so the caller's array stays unchanged and the middle values are ordered.\n  const a = [...nums].sort((x, y) => x - y);\n  // Floor selects the single middle for odd lengths and the upper middle for even lengths.\n  const mid = Math.floor(a.length / 2);\n  // Odd lists use one middle value; even lists average the two central values.\n  return a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n}\n",
                    ts: "function medianOfList(nums: number[]): number {\n  // Handle the empty input before trying to read a middle position.\n  if (nums.length === 0) return 0;\n\n  // Sort a copy so the caller's array stays unchanged and the middle values are ordered.\n  const a = [...nums].sort((x, y) => x - y);\n  // Floor selects the single middle for odd lengths and the upper middle for even lengths.\n  const mid = Math.floor(a.length / 2);\n  // Odd lists use one middle value; even lists average the two central values.\n  return a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Two balanced heaps",
                approach: "A max-heap holds the smaller half, a min-heap the larger; the median sits at their tops.",
                js: `${BOTH_HEAPS}\nfunction medianOfList(nums) {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  if (lo.size() === 0) return 0;\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
                ts: `${BOTH_HEAPS}\nfunction medianOfList(nums: number[]): number {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  if (lo.size() === 0) return 0;\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
                commentedCode: {
                    js: `${BOTH_HEAPS}\nfunction medianOfList(nums) {\n  // The max-heap exposes the largest value in the lower half.\n  const lo = new MaxHeap();\n  // The min-heap exposes the smallest value in the upper half.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Route each value to the half whose ordering it belongs to.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Rebalance so the lower half has either the same size or one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // No lower-half root means no values were inserted.\n  if (lo.size() === 0) return 0;\n  // An odd count uses lo's root; an even count averages both boundary roots.\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
                    ts: `${BOTH_HEAPS}\nfunction medianOfList(nums: number[]): number {\n  // The max-heap exposes the largest value in the lower half.\n  const lo = new MaxHeap();\n  // The min-heap exposes the smallest value in the upper half.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Route each value to the half whose ordering it belongs to.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Rebalance so the lower half has either the same size or one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // No lower-half root means no values were inserted.\n  if (lo.size() === 0) return 0;\n  // An odd count uses lo's root; an even count averages both boundary roots.\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "th-lower-half-max",
        slug: "lower-half-max",
        title: "Largest of the Lower Half",
        difficulty: "easy",
        patternIds: P,
        statement: "Sort the values and split them so the lower half holds the first `ceil(n/2)` of them. Return the largest value in that lower half, or -1 if the list is empty.",
        examples: [
            {
                input: "[3,1,2]",
                output: "2"
            },
            {
                input: "[1,2,3,4]",
                output: "2"
            },
            {
                input: "[]",
                output: "-1"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "lowerHalfMax",
        starter: {
            js: "function lowerHalfMax(nums) {\n  // Largest value in the lower half.\n}\n",
            ts: "function lowerHalfMax(nums: number[]): number {\n  // Largest value in the lower half.\n  return -1;\n}\n"
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
                    []
                ],
                expected: -1
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
                        -5,
                        1
                    ]
                ],
                expected: -5
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
                        4,
                        3,
                        2,
                        1
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "The lower half has ceil(n/2) values, so its largest sits at index ceil(n/2) - 1.",
            "This is exactly what the max-heap side of the two-heaps technique holds at its root.",
            "Handle the empty list before indexing."
        ],
        solutions: [
            {
                label: "Sort and index",
                approach: "Read the last position of the lower half.",
                js: "function lowerHalfMax(nums) {\n  if (nums.length === 0) return -1;\n  const a = [...nums].sort((x, y) => x - y);\n  return a[Math.ceil(a.length / 2) - 1];\n}\n",
                ts: "function lowerHalfMax(nums: number[]): number {\n  if (nums.length === 0) return -1;\n  const a = [...nums].sort((x, y) => x - y);\n  return a[Math.ceil(a.length / 2) - 1];\n}\n",
                commentedCode: {
                    js: "function lowerHalfMax(nums) {\n  // An empty list has no lower-half maximum.\n  if (nums.length === 0) return -1;\n  // Sorting a copy groups the first ceil(n / 2) values into the lower half.\n  const a = [...nums].sort((x, y) => x - y);\n  // The lower half ends one position before its length.\n  return a[Math.ceil(a.length / 2) - 1];\n}\n",
                    ts: "function lowerHalfMax(nums: number[]): number {\n  // An empty list has no lower-half maximum.\n  if (nums.length === 0) return -1;\n  // Sorting a copy groups the first ceil(n / 2) values into the lower half.\n  const a = [...nums].sort((x, y) => x - y);\n  // The lower half ends one position before its length.\n  return a[Math.ceil(a.length / 2) - 1];\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Balanced heaps",
                approach: "Keep the halves balanced; the max-heap's root is the answer.",
                js: `${BOTH_HEAPS}\nfunction lowerHalfMax(nums) {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  return lo.size() === 0 ? -1 : lo.peek();\n}\n`,
                ts: `${BOTH_HEAPS}\nfunction lowerHalfMax(nums: number[]): number {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  return lo.size() === 0 ? -1 : lo.peek();\n}\n`,
                commentedCode: {
                    js: `${BOTH_HEAPS}\nfunction lowerHalfMax(nums) {\n  // lo keeps the smaller ceil(n / 2) values and exposes their maximum.\n  const lo = new MaxHeap();\n  // hi keeps the remaining larger values and exposes their minimum.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Compare with lo's boundary to choose the correct ordered half.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Move one root when needed so lo has at most one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // The max-heap root is the largest lower-half value, if one exists.\n  return lo.size() === 0 ? -1 : lo.peek();\n}\n`,
                    ts: `${BOTH_HEAPS}\nfunction lowerHalfMax(nums: number[]): number {\n  // lo keeps the smaller ceil(n / 2) values and exposes their maximum.\n  const lo = new MaxHeap();\n  // hi keeps the remaining larger values and exposes their minimum.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Compare with lo's boundary to choose the correct ordered half.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Move one root when needed so lo has at most one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // The max-heap root is the largest lower-half value, if one exists.\n  return lo.size() === 0 ? -1 : lo.peek();\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "th-running-medians",
        slug: "running-medians",
        title: "Running Medians",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the median after each value is added, in order. ${MEDIAN_NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "[1,1.5,2]"
            },
            {
                input: "[5]",
                output: "[5]"
            },
            {
                input: "[]",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "runningMedians",
        starter: {
            js: "function runningMedians(nums) {\n  // Median after each insertion.\n}\n",
            ts: "function runningMedians(nums: number[]): number[] {\n  // Median after each insertion.\n  return [];\n}\n"
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
                    1.5,
                    2
                ]
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
                        2
                    ]
                ],
                expected: [
                    1,
                    1.5
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
                    2,
                    1.5
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
                    1.5,
                    2,
                    2.5
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
                    3,
                    2,
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
                        1,
                        3,
                        2,
                        4
                    ]
                ],
                expected: [
                    1,
                    2,
                    2,
                    2.5
                ]
            }
        ],
        hints: [
            "Re-sorting after every insertion works but repeats a lot of effort.",
            "Keep the smaller half in a max-heap and the larger half in a min-heap.",
            "Rebalance so the sizes differ by at most one, then read the median off the roots."
        ],
        solutions: [
            {
                label: "Two balanced heaps",
                approach: "Insert into the correct half, rebalance, then read the median in O(1).",
                js: `${BOTH_HEAPS}\nfunction runningMedians(nums) {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  const out = [];\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n    out.push(lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2);\n  }\n  return out;\n}\n`,
                ts: `${BOTH_HEAPS}\nfunction runningMedians(nums: number[]): number[] {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  const out: number[] = [];\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n    out.push(lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2);\n  }\n  return out;\n}\n`,
                commentedCode: {
                    js: `${BOTH_HEAPS}\nfunction runningMedians(nums) {\n  // lo holds the smaller half; its maximum is the lower median boundary.\n  const lo = new MaxHeap();\n  // hi holds the larger half; its minimum is the upper median boundary.\n  const hi = new MinHeap();\n  // Record the median after every prefix of the stream.\n  const out = [];\n  for (const v of nums) {\n    // Place the new value on the correct side of the current boundary.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Restore the invariant that lo has the same size as hi or one extra item.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n    // Read one root for odd prefixes, or average both roots for even prefixes.\n    out.push(lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2);\n  }\n  return out;\n}\n`,
                    ts: `${BOTH_HEAPS}\nfunction runningMedians(nums: number[]): number[] {\n  // lo holds the smaller half; its maximum is the lower median boundary.\n  const lo = new MaxHeap();\n  // hi holds the larger half; its minimum is the upper median boundary.\n  const hi = new MinHeap();\n  // Record the median after every prefix of the stream.\n  const out: number[] = [];\n  for (const v of nums) {\n    // Place the new value on the correct side of the current boundary.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Restore the invariant that lo has the same size as hi or one extra item.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n    // Read one root for odd prefixes, or average both roots for even prefixes.\n    out.push(lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2);\n  }\n  return out;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Insert into a sorted list",
                approach: "Keep the seen values sorted and read the middle each step.",
                js: "function runningMedians(nums) {\n  const sorted = [];\n  const out = [];\n  for (const v of nums) {\n    let lo = 0, hi = sorted.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }\n    sorted.splice(lo, 0, v);\n    const mid = Math.floor(sorted.length / 2);\n    out.push(sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2);\n  }\n  return out;\n}\n",
                ts: "function runningMedians(nums: number[]): number[] {\n  const sorted: number[] = [];\n  const out: number[] = [];\n  for (const v of nums) {\n    let lo = 0, hi = sorted.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }\n    sorted.splice(lo, 0, v);\n    const mid = Math.floor(sorted.length / 2);\n    out.push(sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function runningMedians(nums) {\n  // Keep every value seen so far in ascending order.\n  const sorted = [];\n  // Collect one median for each input prefix.\n  const out = [];\n  for (const v of nums) {\n    // Binary-search for the first position whose value is at least v.\n    let lo = 0, hi = sorted.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }\n    // Insert at that position to preserve sorted order.\n    sorted.splice(lo, 0, v);\n    // Locate the upper middle in the updated prefix.\n    const mid = Math.floor(sorted.length / 2);\n    // Read one middle for odd sizes or average the two middles for even sizes.\n    out.push(sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2);\n  }\n  return out;\n}\n",
                    ts: "function runningMedians(nums: number[]): number[] {\n  // Keep every value seen so far in ascending order.\n  const sorted: number[] = [];\n  // Collect one median for each input prefix.\n  const out: number[] = [];\n  for (const v of nums) {\n    // Binary-search for the first position whose value is at least v.\n    let lo = 0, hi = sorted.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < v) lo = mid + 1; else hi = mid; }\n    // Insert at that position to preserve sorted order.\n    sorted.splice(lo, 0, v);\n    // Locate the upper middle in the updated prefix.\n    const mid = Math.floor(sorted.length / 2);\n    // Read one middle for odd sizes or average the two middles for even sizes.\n    out.push(sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2);\n  }\n  return out;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "th-maximize-capital",
        slug: "maximize-capital",
        title: "Maximize Capital",
        difficulty: "medium",
        patternIds: P,
        statement: "You start with `initialCapital` and may complete at most `k` projects. Project `i` requires `capitals[i]` on hand and adds `profits[i]` when finished. Always take the most profitable project you can currently afford. Return the final capital.",
        examples: [
            {
                input: "2, 0, [1,2,3], [0,1,1]",
                output: "4"
            },
            {
                input: "3, 0, [1,2,3], [0,1,2]",
                output: "6"
            },
            {
                input: "1, 0, [1,2,3], [1,1,2]",
                output: "0"
            }
        ],
        constraints: [
            "profits and capitals have the same length",
            "0 <= k"
        ],
        functionName: "maximizeCapital",
        starter: {
            js: "function maximizeCapital(k, initialCapital, profits, capitals) {\n  // Greedily take the most profitable affordable project, k times.\n}\n",
            ts: "function maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]): number {\n  // Greedily take the most profitable affordable project, k times.\n  return initialCapital;\n}\n"
        },
        visible: [
            {
                args: [
                    2,
                    0,
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        0,
                        1,
                        1
                    ]
                ],
                expected: 4
            },
            {
                args: [
                    3,
                    0,
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        0,
                        1,
                        2
                    ]
                ],
                expected: 6
            },
            {
                args: [
                    1,
                    0,
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        1,
                        1,
                        2
                    ]
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    0,
                    5,
                    [
                        1,
                        2
                    ],
                    [
                        0,
                        0
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    1,
                    0,
                    [
                        5
                    ],
                    [
                        0
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    2,
                    1,
                    [
                        1,
                        1
                    ],
                    [
                        1,
                        1
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    5,
                    0,
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        0,
                        1,
                        2
                    ]
                ],
                expected: 6
            },
            {
                args: [
                    1,
                    2,
                    [
                        10,
                        1
                    ],
                    [
                        3,
                        0
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    2,
                    0,
                    [
                        3
                    ],
                    [
                        0
                    ]
                ],
                expected: 3
            }
        ],
        hints: [
            "Sort the projects by the capital they require, so you can unlock them in order.",
            "Every time your capital grows, push the newly affordable profits into a max-heap.",
            "Take the heap's largest profit; stop early if nothing is affordable."
        ],
        solutions: [
            {
                label: "Sort by capital + max-heap of profits",
                approach: "Unlock affordable projects as capital grows and always take the best.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction maximizeCapital(k, initialCapital, profits, capitals) {\n  const projects = profits.map((p, i) => [capitals[i], p]).sort((a, b) => a[0] - b[0]);\n  const available = new MaxHeap();\n  let capital = initialCapital;\n  let i = 0;\n  for (let round = 0; round < k; round++) {\n    while (i < projects.length && projects[i][0] <= capital) { available.push(projects[i][1]); i++; }\n    if (available.size() === 0) break;\n    capital += available.pop();\n  }\n  return capital;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]): number {\n  const projects = profits.map((p, i) => [capitals[i], p]).sort((a, b) => a[0] - b[0]);\n  const available = new MaxHeap();\n  let capital = initialCapital;\n  let i = 0;\n  for (let round = 0; round < k; round++) {\n    while (i < projects.length && projects[i][0] <= capital) { available.push(projects[i][1]); i++; }\n    if (available.size() === 0) break;\n    capital += available.pop();\n  }\n  return capital;\n}\n`,
                commentedCode: {
                    js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction maximizeCapital(k, initialCapital, profits, capitals) {\n  // Pair each project's requirement with its profit, then order by requirement.\n  const projects = profits.map((p, i) => [capitals[i], p]).sort((a, b) => a[0] - b[0]);\n  // Store profits from every project the current capital can afford.\n  const available = new MaxHeap();\n  // Track the capital gained across completed projects.\n  let capital = initialCapital;\n  // Point to the first project not yet unlocked by capital.\n  let i = 0;\n  for (let round = 0; round < k; round++) {\n    // Newly affordable projects become candidates for this and later rounds.\n    while (i < projects.length && projects[i][0] <= capital) { available.push(projects[i][1]); i++; }\n    // Stop if no remaining project can currently be started.\n    if (available.size() === 0) break;\n    // Greedily complete the affordable project with the greatest profit.\n    capital += available.pop();\n  }\n  return capital;\n}\n`,
                    ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]): number {\n  // Pair each project's requirement with its profit, then order by requirement.\n  const projects = profits.map((p, i) => [capitals[i], p]).sort((a, b) => a[0] - b[0]);\n  // Store profits from every project the current capital can afford.\n  const available = new MaxHeap();\n  // Track the capital gained across completed projects.\n  let capital = initialCapital;\n  // Point to the first project not yet unlocked by capital.\n  let i = 0;\n  for (let round = 0; round < k; round++) {\n    // Newly affordable projects become candidates for this and later rounds.\n    while (i < projects.length && projects[i][0] <= capital) { available.push(projects[i][1]); i++; }\n    // Stop if no remaining project can currently be started.\n    if (available.size() === 0) break;\n    // Greedily complete the affordable project with the greatest profit.\n    capital += available.pop();\n  }\n  return capital;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Scan for the best each round",
                approach: "Each round, look through the untaken projects for the best affordable one.",
                js: "function maximizeCapital(k, initialCapital, profits, capitals) {\n  const taken = new Array(profits.length).fill(false);\n  let capital = initialCapital;\n  for (let round = 0; round < k; round++) {\n    let best = -1;\n    for (let i = 0; i < profits.length; i++) {\n      if (taken[i] || capitals[i] > capital) continue;\n      if (best === -1 || profits[i] > profits[best]) best = i;\n    }\n    if (best === -1) break;\n    taken[best] = true;\n    capital += profits[best];\n  }\n  return capital;\n}\n",
                ts: "function maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]): number {\n  const taken = new Array(profits.length).fill(false);\n  let capital = initialCapital;\n  for (let round = 0; round < k; round++) {\n    let best = -1;\n    for (let i = 0; i < profits.length; i++) {\n      if (taken[i] || capitals[i] > capital) continue;\n      if (best === -1 || profits[i] > profits[best]) best = i;\n    }\n    if (best === -1) break;\n    taken[best] = true;\n    capital += profits[best];\n  }\n  return capital;\n}\n",
                commentedCode: {
                    js: "function maximizeCapital(k, initialCapital, profits, capitals) {\n  // Remember completed projects so none can be selected twice.\n  const taken = new Array(profits.length).fill(false);\n  let capital = initialCapital;\n  for (let round = 0; round < k; round++) {\n    // -1 means no affordable untaken project has been found this round.\n    let best = -1;\n    for (let i = 0; i < profits.length; i++) {\n      // Ignore completed projects and projects whose requirement is still too high.\n      if (taken[i] || capitals[i] > capital) continue;\n      // Retain the affordable candidate with the greatest profit.\n      if (best === -1 || profits[i] > profits[best]) best = i;\n    }\n    // Capital cannot grow when no project is affordable, so later rounds cannot help.\n    if (best === -1) break;\n    // Complete the chosen project once and add its profit to available capital.\n    taken[best] = true;\n    capital += profits[best];\n  }\n  return capital;\n}\n",
                    ts: "function maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]): number {\n  // Remember completed projects so none can be selected twice.\n  const taken = new Array(profits.length).fill(false);\n  let capital = initialCapital;\n  for (let round = 0; round < k; round++) {\n    // -1 means no affordable untaken project has been found this round.\n    let best = -1;\n    for (let i = 0; i < profits.length; i++) {\n      // Ignore completed projects and projects whose requirement is still too high.\n      if (taken[i] || capitals[i] > capital) continue;\n      // Retain the affordable candidate with the greatest profit.\n      if (best === -1 || profits[i] > profits[best]) best = i;\n    }\n    // Capital cannot grow when no project is affordable, so later rounds cannot help.\n    if (best === -1) break;\n    // Complete the chosen project once and add its profit to available capital.\n    taken[best] = true;\n    capital += profits[best];\n  }\n  return capital;\n}\n"
                },
                time: "O(k·n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "th-sum-distance-to-median",
        slug: "min-moves-to-equal",
        title: "Minimum Moves to Equal",
        difficulty: "medium",
        patternIds: P,
        statement: "Each move changes one value by 1. Return the fewest moves needed to make every value equal. (The median is the cheapest meeting point.)",
        examples: [
            {
                input: "[1,2,3]",
                output: "2"
            },
            {
                input: "[1,10,2,9]",
                output: "16"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "minMovesToEqual",
        starter: {
            js: "function minMovesToEqual(nums) {\n  // Total distance to the median.\n}\n",
            ts: "function minMovesToEqual(nums: number[]): number {\n  // Total distance to the median.\n  return 0;\n}\n"
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
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        10,
                        2,
                        9
                    ]
                ],
                expected: 16
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
                        1,
                        2,
                        3,
                        4
                    ]
                ],
                expected: 4
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
                        1,
                        100
                    ]
                ],
                expected: 99
            }
        ],
        hints: [
            "Meeting at the median minimises the total distance — averages don't.",
            "Sort, pick a middle value, then total the absolute differences.",
            "For an even count, either middle value gives the same total."
        ],
        solutions: [
            {
                label: "Sort to the median",
                approach: "Total the absolute distance from every value to the middle one.",
                js: "function minMovesToEqual(nums) {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const median = a[Math.floor(a.length / 2)];\n  let moves = 0;\n  for (const v of a) moves += Math.abs(v - median);\n  return moves;\n}\n",
                ts: "function minMovesToEqual(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const median = a[Math.floor(a.length / 2)];\n  let moves = 0;\n  for (const v of a) moves += Math.abs(v - median);\n  return moves;\n}\n",
                commentedCode: {
                    js: "function minMovesToEqual(nums) {\n  // No values require no moves.\n  if (nums.length === 0) return 0;\n  // Sort a copy so a median meeting point can be selected without mutating nums.\n  const a = [...nums].sort((x, y) => x - y);\n  // A median minimizes the sum of absolute distances.\n  const median = a[Math.floor(a.length / 2)];\n  let moves = 0;\n  // Moving each value to the median costs exactly their absolute difference.\n  for (const v of a) moves += Math.abs(v - median);\n  return moves;\n}\n",
                    ts: "function minMovesToEqual(nums: number[]): number {\n  // No values require no moves.\n  if (nums.length === 0) return 0;\n  // Sort a copy so a median meeting point can be selected without mutating nums.\n  const a = [...nums].sort((x, y) => x - y);\n  // A median minimizes the sum of absolute distances.\n  const median = a[Math.floor(a.length / 2)];\n  let moves = 0;\n  // Moving each value to the median costs exactly their absolute difference.\n  for (const v of a) moves += Math.abs(v - median);\n  return moves;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Pair the ends",
                approach: "Sorted, the cost is the sum of gaps between mirrored pairs.",
                js: "function minMovesToEqual(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  let moves = 0, i = 0, j = a.length - 1;\n  while (i < j) { moves += a[j] - a[i]; i++; j--; }\n  return moves;\n}\n",
                ts: "function minMovesToEqual(nums: number[]): number {\n  const a = [...nums].sort((x, y) => x - y);\n  let moves = 0, i = 0, j = a.length - 1;\n  while (i < j) { moves += a[j] - a[i]; i++; j--; }\n  return moves;\n}\n",
                commentedCode: {
                    js: "function minMovesToEqual(nums) {\n  // Sorting lets us pair equally distant positions around a median.\n  const a = [...nums].sort((x, y) => x - y);\n  // Walk mirrored pairs from the two extremes toward the middle.\n  let moves = 0, i = 0, j = a.length - 1;\n  // Each pair contributes its full gap regardless of which median it meets at.\n  while (i < j) { moves += a[j] - a[i]; i++; j--; }\n  return moves;\n}\n",
                    ts: "function minMovesToEqual(nums: number[]): number {\n  // Sorting lets us pair equally distant positions around a median.\n  const a = [...nums].sort((x, y) => x - y);\n  // Walk mirrored pairs from the two extremes toward the middle.\n  let moves = 0, i = 0, j = a.length - 1;\n  // Each pair contributes its full gap regardless of which median it meets at.\n  while (i < j) { moves += a[j] - a[i]; i++; j--; }\n  return moves;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "th-sliding-window-median",
        slug: "sliding-window-median",
        title: "Sliding Window Median",
        difficulty: "hard",
        patternIds: P,
        statement: `Return the median of every contiguous window of size \`k\`, left to right. ${MEDIAN_NOTE}`,
        examples: [
            {
                input: "[1,3,-1,-3,5,3,6,7], 3",
                output: "[1,-1,-1,3,5,6]"
            },
            {
                input: "[1,2,3,4], 2",
                output: "[1.5,2.5,3.5]"
            },
            {
                input: "[5], 1",
                output: "[5]"
            }
        ],
        constraints: [
            "1 <= k <= nums.length <= 10000"
        ],
        functionName: "slidingWindowMedian",
        starter: {
            js: "function slidingWindowMedian(nums, k) {\n  // Median of each window of size k.\n}\n",
            ts: "function slidingWindowMedian(nums: number[], k: number): number[] {\n  // Median of each window of size k.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        3,
                        -1,
                        -3,
                        5,
                        3,
                        6,
                        7
                    ],
                    3
                ],
                expected: [
                    1,
                    -1,
                    -1,
                    3,
                    5,
                    6
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
                    1.5,
                    2.5,
                    3.5
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
            }
        ],
        hidden: [
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
                    2
                ]
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
                expected: [
                    2,
                    2
                ]
            },
            {
                args: [
                    [
                        1,
                        4,
                        2,
                        3
                    ],
                    2
                ],
                expected: [
                    2.5,
                    3,
                    2.5
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
                        4,
                        3,
                        2,
                        1
                    ],
                    4
                ],
                expected: [
                    2.5
                ]
            }
        ],
        hints: [
            "Each window's median needs the window's values in order.",
            "Maintaining a sorted window as you slide avoids re-sorting from scratch.",
            "Insert the entering value in its sorted position and remove the leaving one."
        ],
        solutions: [
            {
                label: "Maintain a sorted window",
                approach: "Binary-insert the entering value and remove the departing one.",
                js: "function slidingWindowMedian(nums, k) {\n  const window = [];\n  const out = [];\n  const insert = (v) => {\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    window.splice(lo, 0, v);\n  };\n  const remove = (v) => {\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    window.splice(lo, 1);\n  };\n  for (let i = 0; i < nums.length; i++) {\n    insert(nums[i]);\n    if (i >= k) remove(nums[i - k]);\n    if (i >= k - 1) {\n      const mid = Math.floor(window.length / 2);\n      out.push(window.length % 2 === 1 ? window[mid] : (window[mid - 1] + window[mid]) / 2);\n    }\n  }\n  return out;\n}\n",
                ts: "function slidingWindowMedian(nums: number[], k: number): number[] {\n  const window: number[] = [];\n  const out: number[] = [];\n  const insert = (v: number) => {\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    window.splice(lo, 0, v);\n  };\n  const remove = (v: number) => {\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    window.splice(lo, 1);\n  };\n  for (let i = 0; i < nums.length; i++) {\n    insert(nums[i]);\n    if (i >= k) remove(nums[i - k]);\n    if (i >= k - 1) {\n      const mid = Math.floor(window.length / 2);\n      out.push(window.length % 2 === 1 ? window[mid] : (window[mid - 1] + window[mid]) / 2);\n    }\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function slidingWindowMedian(nums, k) {\n  // Keep exactly the active window's values in ascending order.\n  const window = [];\n  const out = [];\n  const insert = (v) => {\n    // Find the first position whose value is at least v.\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    // Insert there so the window remains sorted.\n    window.splice(lo, 0, v);\n  };\n  const remove = (v) => {\n    // Find the first occurrence of the departing value.\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    // Delete one copy, which is important when duplicate values exist.\n    window.splice(lo, 1);\n  };\n  for (let i = 0; i < nums.length; i++) {\n    // Add the value entering at the right edge.\n    insert(nums[i]);\n    // Once more than k values have been seen, remove the old left edge.\n    if (i >= k) remove(nums[i - k]);\n    // Emit a median only after the first complete window has formed.\n    if (i >= k - 1) {\n      const mid = Math.floor(window.length / 2);\n      // Use one middle for odd k, or average the two middles for even k.\n      out.push(window.length % 2 === 1 ? window[mid] : (window[mid - 1] + window[mid]) / 2);\n    }\n  }\n  return out;\n}\n",
                    ts: "function slidingWindowMedian(nums: number[], k: number): number[] {\n  // Keep exactly the active window's values in ascending order.\n  const window: number[] = [];\n  const out: number[] = [];\n  const insert = (v: number) => {\n    // Find the first position whose value is at least v.\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    // Insert there so the window remains sorted.\n    window.splice(lo, 0, v);\n  };\n  const remove = (v: number) => {\n    // Find the first occurrence of the departing value.\n    let lo = 0, hi = window.length;\n    while (lo < hi) { const mid = (lo + hi) >> 1; if (window[mid] < v) lo = mid + 1; else hi = mid; }\n    // Delete one copy, which is important when duplicate values exist.\n    window.splice(lo, 1);\n  };\n  for (let i = 0; i < nums.length; i++) {\n    // Add the value entering at the right edge.\n    insert(nums[i]);\n    // Once more than k values have been seen, remove the old left edge.\n    if (i >= k) remove(nums[i - k]);\n    // Emit a median only after the first complete window has formed.\n    if (i >= k - 1) {\n      const mid = Math.floor(window.length / 2);\n      // Use one middle for odd k, or average the two middles for even k.\n      out.push(window.length % 2 === 1 ? window[mid] : (window[mid - 1] + window[mid]) / 2);\n    }\n  }\n  return out;\n}\n"
                },
                time: "O(n·k)",
                space: "O(k)"
            },
            {
                label: "Sort each window",
                approach: "Take each window, sort a copy, and read its middle.",
                js: "function slidingWindowMedian(nums, k) {\n  const out = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    const w = nums.slice(i, i + k).sort((a, b) => a - b);\n    const mid = Math.floor(k / 2);\n    out.push(k % 2 === 1 ? w[mid] : (w[mid - 1] + w[mid]) / 2);\n  }\n  return out;\n}\n",
                ts: "function slidingWindowMedian(nums: number[], k: number): number[] {\n  const out: number[] = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    const w = nums.slice(i, i + k).sort((a, b) => a - b);\n    const mid = Math.floor(k / 2);\n    out.push(k % 2 === 1 ? w[mid] : (w[mid - 1] + w[mid]) / 2);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function slidingWindowMedian(nums, k) {\n  const out = [];\n  // Start at every index where a complete k-value window fits.\n  for (let i = 0; i + k <= nums.length; i++) {\n    // Copy and sort this window so its central values are directly accessible.\n    const w = nums.slice(i, i + k).sort((a, b) => a - b);\n    const mid = Math.floor(k / 2);\n    // Use one middle for odd k, or average the two central values for even k.\n    out.push(k % 2 === 1 ? w[mid] : (w[mid - 1] + w[mid]) / 2);\n  }\n  return out;\n}\n",
                    ts: "function slidingWindowMedian(nums: number[], k: number): number[] {\n  const out: number[] = [];\n  // Start at every index where a complete k-value window fits.\n  for (let i = 0; i + k <= nums.length; i++) {\n    // Copy and sort this window so its central values are directly accessible.\n    const w = nums.slice(i, i + k).sort((a, b) => a - b);\n    const mid = Math.floor(k / 2);\n    // Use one middle for odd k, or average the two central values for even k.\n    out.push(k % 2 === 1 ? w[mid] : (w[mid - 1] + w[mid]) / 2);\n  }\n  return out;\n}\n"
                },
                time: "O(n·k log k)",
                space: "O(k)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "th-upper-half-min",
        slug: "upper-half-min",
        title: "Smallest of the Upper Half",
        difficulty: "easy",
        patternIds: P,
        statement: "Sort the values and split them so the lower half holds the first `ceil(n/2)`. Return the smallest value in the remaining upper half, or -1 if that half is empty.",
        examples: [
            {
                input: "[1,2,3,4]",
                output: "3"
            },
            {
                input: "[3,1,2]",
                output: "3"
            },
            {
                input: "[]",
                output: "-1"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "upperHalfMin",
        starter: {
            js: "function upperHalfMin(nums) {\n  // Smallest value in the upper half.\n}\n",
            ts: "function upperHalfMin(nums: number[]): number {\n  // Smallest value in the upper half.\n  return -1;\n}\n"
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
                expected: 3
            },
            {
                args: [
                    [
                        3,
                        1,
                        2
                    ]
                ],
                expected: 3
            },
            {
                args: [
                    []
                ],
                expected: -1
            }
        ],
        hidden: [
            {
                args: [
                    [
                        1
                    ]
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
                        10,
                        20,
                        30
                    ]
                ],
                expected: 30
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
                expected: 3
            }
        ],
        hints: [
            "The upper half starts at index ceil(n/2).",
            "If that index is past the end, the upper half is empty.",
            "This mirrors the min-heap side of the two-heaps technique."
        ],
        solutions: [
            {
                label: "Sort and index",
                approach: "Read the first position of the upper half.",
                js: "function upperHalfMin(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const start = Math.ceil(a.length / 2);\n  return start < a.length ? a[start] : -1;\n}\n",
                ts: "function upperHalfMin(nums: number[]): number {\n  const a = [...nums].sort((x, y) => x - y);\n  const start = Math.ceil(a.length / 2);\n  return start < a.length ? a[start] : -1;\n}\n",
                commentedCode: {
                    js: "function upperHalfMin(nums) {\n  // Sort a copy so the two halves occupy contiguous index ranges.\n  const a = [...nums].sort((x, y) => x - y);\n  // The upper half begins after the first ceil(n / 2) lower values.\n  const start = Math.ceil(a.length / 2);\n  // Return its first (smallest) value, or -1 when that half is empty.\n  return start < a.length ? a[start] : -1;\n}\n",
                    ts: "function upperHalfMin(nums: number[]): number {\n  // Sort a copy so the two halves occupy contiguous index ranges.\n  const a = [...nums].sort((x, y) => x - y);\n  // The upper half begins after the first ceil(n / 2) lower values.\n  const start = Math.ceil(a.length / 2);\n  // Return its first (smallest) value, or -1 when that half is empty.\n  return start < a.length ? a[start] : -1;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Balanced heaps",
                approach: "Keep the halves balanced; the min-heap's root is the answer.",
                js: `${BOTH_HEAPS}\nfunction upperHalfMin(nums) {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  return hi.size() === 0 ? -1 : hi.peek();\n}\n`,
                ts: `${BOTH_HEAPS}\nfunction upperHalfMin(nums: number[]): number {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of nums) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  return hi.size() === 0 ? -1 : hi.peek();\n}\n`,
                commentedCode: {
                    js: `${BOTH_HEAPS}\nfunction upperHalfMin(nums) {\n  // lo keeps the first ceil(n / 2) sorted values.\n  const lo = new MaxHeap();\n  // hi keeps the remaining upper-half values and exposes their minimum.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Route the value according to the boundary at lo's maximum.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Rebalance so lo has the same number as hi or one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // The min-heap root is the upper half's smallest value when that half exists.\n  return hi.size() === 0 ? -1 : hi.peek();\n}\n`,
                    ts: `${BOTH_HEAPS}\nfunction upperHalfMin(nums: number[]): number {\n  // lo keeps the first ceil(n / 2) sorted values.\n  const lo = new MaxHeap();\n  // hi keeps the remaining upper-half values and exposes their minimum.\n  const hi = new MinHeap();\n  for (const v of nums) {\n    // Route the value according to the boundary at lo's maximum.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Rebalance so lo has the same number as hi or one extra value.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // The min-heap root is the upper half's smallest value when that half exists.\n  return hi.size() === 0 ? -1 : hi.peek();\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "th-median-of-two-lists",
        slug: "median-of-two-lists",
        title: "Median of Two Lists",
        difficulty: "medium",
        patternIds: P,
        statement: `Return the median of all values from both lists combined. ${MEDIAN_NOTE} Two empty lists give 0.`,
        examples: [
            {
                input: "[1,3], [2]",
                output: "2"
            },
            {
                input: "[1,2], [3,4]",
                output: "2.5"
            },
            {
                input: "[], []",
                output: "0"
            }
        ],
        constraints: [
            "0 <= lengths <= 10000"
        ],
        functionName: "medianOfTwoLists",
        starter: {
            js: "function medianOfTwoLists(a, b) {\n  // Median of the combined values.\n}\n",
            ts: "function medianOfTwoLists(a: number[], b: number[]): number {\n  // Median of the combined values.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        3
                    ],
                    [
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        1,
                        2
                    ],
                    [
                        3,
                        4
                    ]
                ],
                expected: 2.5
            },
            {
                args: [
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
                    []
                ],
                expected: 1
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
                        1,
                        2
                    ],
                    []
                ],
                expected: 1.5
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
                expected: 1
            },
            {
                args: [
                    [
                        1,
                        5
                    ],
                    [
                        2,
                        6
                    ]
                ],
                expected: 3.5
            },
            {
                args: [
                    [
                        0
                    ],
                    [
                        0
                    ]
                ],
                expected: 0
            }
        ],
        hints: [
            "Combine both lists, then it's an ordinary median question.",
            "Sort the combined values and read the middle.",
            "Remember the even-length averaging rule."
        ],
        solutions: [
            {
                label: "Combine and sort",
                approach: "Concatenate, sort, and take the median.",
                js: "function medianOfTwoLists(a, b) {\n  const all = [...a, ...b].sort((x, y) => x - y);\n  if (all.length === 0) return 0;\n  const mid = Math.floor(all.length / 2);\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
                ts: "function medianOfTwoLists(a: number[], b: number[]): number {\n  const all = [...a, ...b].sort((x, y) => x - y);\n  if (all.length === 0) return 0;\n  const mid = Math.floor(all.length / 2);\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
                commentedCode: {
                    js: "function medianOfTwoLists(a, b) {\n  // Combine both inputs and sort their values as one population.\n  const all = [...a, ...b].sort((x, y) => x - y);\n  // Two empty inputs have the defined median 0.\n  if (all.length === 0) return 0;\n  // Floor locates the only middle or the upper of two middles.\n  const mid = Math.floor(all.length / 2);\n  // Odd counts use one value; even counts average adjacent middle values.\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n",
                    ts: "function medianOfTwoLists(a: number[], b: number[]): number {\n  // Combine both inputs and sort their values as one population.\n  const all = [...a, ...b].sort((x, y) => x - y);\n  // Two empty inputs have the defined median 0.\n  if (all.length === 0) return 0;\n  // Floor locates the only middle or the upper of two middles.\n  const mid = Math.floor(all.length / 2);\n  // Odd counts use one value; even counts average adjacent middle values.\n  return all.length % 2 === 1 ? all[mid] : (all[mid - 1] + all[mid]) / 2;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Two balanced heaps",
                approach: "Feed both lists through the balanced-halves technique.",
                js: `${BOTH_HEAPS}\nfunction medianOfTwoLists(a, b) {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of [...a, ...b]) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  if (lo.size() === 0) return 0;\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
                ts: `${BOTH_HEAPS}\nfunction medianOfTwoLists(a: number[], b: number[]): number {\n  const lo = new MaxHeap();\n  const hi = new MinHeap();\n  for (const v of [...a, ...b]) {\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  if (lo.size() === 0) return 0;\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
                commentedCode: {
                    js: `${BOTH_HEAPS}\nfunction medianOfTwoLists(a, b) {\n  // lo exposes the greatest value in the combined lower half.\n  const lo = new MaxHeap();\n  // hi exposes the smallest value in the combined upper half.\n  const hi = new MinHeap();\n  // Feed values from both inputs through the same balanced-halves process.\n  for (const v of [...a, ...b]) {\n    // Place the value on the side selected by lo's current boundary.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Keep lo equal in size to hi or larger by exactly one.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // No lo root means both source lists were empty.\n  if (lo.size() === 0) return 0;\n  // Read lo for an odd total, or average both roots for an even total.\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`,
                    ts: `${BOTH_HEAPS}\nfunction medianOfTwoLists(a: number[], b: number[]): number {\n  // lo exposes the greatest value in the combined lower half.\n  const lo = new MaxHeap();\n  // hi exposes the smallest value in the combined upper half.\n  const hi = new MinHeap();\n  // Feed values from both inputs through the same balanced-halves process.\n  for (const v of [...a, ...b]) {\n    // Place the value on the side selected by lo's current boundary.\n    if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);\n    // Keep lo equal in size to hi or larger by exactly one.\n    if (lo.size() > hi.size() + 1) hi.push(lo.pop());\n    else if (hi.size() > lo.size()) lo.push(hi.pop());\n  }\n  // No lo root means both source lists were empty.\n  if (lo.size() === 0) return 0;\n  // Read lo for an odd total, or average both roots for an even total.\n  return lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "th-count-below-median",
        slug: "count-below-median",
        title: "Values Below the Median",
        difficulty: "medium",
        patternIds: P,
        statement: `Return how many values are strictly less than the median. ${MEDIAN_NOTE}`,
        examples: [
            {
                input: "[1,2,3]",
                output: "1"
            },
            {
                input: "[1,2,3,4]",
                output: "2"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "countBelowMedian",
        starter: {
            js: "function countBelowMedian(nums) {\n  // How many values are strictly below the median.\n}\n",
            ts: "function countBelowMedian(nums: number[]): number {\n  // How many values are strictly below the median.\n  return 0;\n}\n"
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
                expected: 1
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
                        1
                    ]
                ],
                expected: 0
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
                        10
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
                        3
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "Compute the median first — including the even-length average.",
            "Then count values strictly less than it.",
            "Ties with the median are not counted."
        ],
        solutions: [
            {
                label: "Median then count",
                approach: "Find the median, then filter values below it.",
                js: "function countBelowMedian(nums) {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  return a.filter((v) => v < median).length;\n}\n",
                ts: "function countBelowMedian(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  return a.filter((v) => v < median).length;\n}\n",
                commentedCode: {
                    js: "function countBelowMedian(nums) {\n  // Empty input has neither a median nor values below one.\n  if (nums.length === 0) return 0;\n  // Sort a copy to expose the central value or values.\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  // Apply the required odd/even median rule.\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  // Count only strict comparisons; values equal to the median do not qualify.\n  return a.filter((v) => v < median).length;\n}\n",
                    ts: "function countBelowMedian(nums: number[]): number {\n  // Empty input has neither a median nor values below one.\n  if (nums.length === 0) return 0;\n  // Sort a copy to expose the central value or values.\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  // Apply the required odd/even median rule.\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  // Count only strict comparisons; values equal to the median do not qualify.\n  return a.filter((v) => v < median).length;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Count in a loop",
                approach: "Same median, tallied with an explicit loop.",
                js: "function countBelowMedian(nums) {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  let count = 0;\n  for (const v of a) if (v < median) count++;\n  return count;\n}\n",
                ts: "function countBelowMedian(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  let count = 0;\n  for (const v of a) if (v < median) count++;\n  return count;\n}\n",
                commentedCode: {
                    js: "function countBelowMedian(nums) {\n  // Empty input contributes no values to the count.\n  if (nums.length === 0) return 0;\n  // Sort a copy so the middle positions define the median.\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  // Odd lengths use one middle; even lengths average two middles.\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  let count = 0;\n  // Tally each value that lies strictly below the computed median.\n  for (const v of a) if (v < median) count++;\n  return count;\n}\n",
                    ts: "function countBelowMedian(nums: number[]): number {\n  // Empty input contributes no values to the count.\n  if (nums.length === 0) return 0;\n  // Sort a copy so the middle positions define the median.\n  const a = [...nums].sort((x, y) => x - y);\n  const mid = Math.floor(a.length / 2);\n  // Odd lengths use one middle; even lengths average two middles.\n  const median = a.length % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;\n  let count = 0;\n  // Tally each value that lies strictly below the computed median.\n  for (const v of a) if (v < median) count++;\n  return count;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "th-half-sum-difference",
        slug: "half-sum-difference",
        title: "Difference Between the Halves",
        difficulty: "medium",
        patternIds: P,
        statement: "Sort the values and split them so the lower half holds the first `ceil(n/2)`. Return the absolute difference between the sum of the upper half and the sum of the lower half.",
        examples: [
            {
                input: "[1,2,3,4]",
                output: "4"
            },
            {
                input: "[1,2,3]",
                output: "0"
            },
            {
                input: "[]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "halfSumDifference",
        starter: {
            js: "function halfSumDifference(nums) {\n  // |sum(upper half) - sum(lower half)|.\n}\n",
            ts: "function halfSumDifference(nums: number[]): number {\n  // |sum(upper half) - sum(lower half)|.\n  return 0;\n}\n"
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
                expected: 4
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
                        1,
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
                        5,
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
                        10,
                        20
                    ]
                ],
                expected: 10
            }
        ],
        hints: [
            "Sort first, then split at index ceil(n/2).",
            "Sum each side and take the absolute difference.",
            "An odd count puts the extra value in the lower half."
        ],
        solutions: [
            {
                label: "Sort and sum each side",
                approach: "Split at ceil(n/2) and compare the two totals.",
                js: "function halfSumDifference(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const split = Math.ceil(a.length / 2);\n  const sum = (arr) => arr.reduce((s, v) => s + v, 0);\n  return Math.abs(sum(a.slice(split)) - sum(a.slice(0, split)));\n}\n",
                ts: "function halfSumDifference(nums: number[]): number {\n  const a = [...nums].sort((x, y) => x - y);\n  const split = Math.ceil(a.length / 2);\n  const sum = (arr: number[]) => arr.reduce((s, v) => s + v, 0);\n  return Math.abs(sum(a.slice(split)) - sum(a.slice(0, split)));\n}\n",
                commentedCode: {
                    js: "function halfSumDifference(nums) {\n  // Sort a copy so the lower and upper halves are contiguous.\n  const a = [...nums].sort((x, y) => x - y);\n  // Give the lower half the extra value when the length is odd.\n  const split = Math.ceil(a.length / 2);\n  // Reduce any selected half to its total.\n  const sum = (arr) => arr.reduce((s, v) => s + v, 0);\n  // Compare the upper total with the lower total without regard to sign.\n  return Math.abs(sum(a.slice(split)) - sum(a.slice(0, split)));\n}\n",
                    ts: "function halfSumDifference(nums: number[]): number {\n  // Sort a copy so the lower and upper halves are contiguous.\n  const a = [...nums].sort((x, y) => x - y);\n  // Give the lower half the extra value when the length is odd.\n  const split = Math.ceil(a.length / 2);\n  // Reduce any selected half to its total.\n  const sum = (arr: number[]) => arr.reduce((s, v) => s + v, 0);\n  // Compare the upper total with the lower total without regard to sign.\n  return Math.abs(sum(a.slice(split)) - sum(a.slice(0, split)));\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Single pass after sorting",
                approach: "Accumulate each side while walking the sorted values.",
                js: "function halfSumDifference(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  const split = Math.ceil(a.length / 2);\n  let lower = 0, upper = 0;\n  for (let i = 0; i < a.length; i++) {\n    if (i < split) lower += a[i]; else upper += a[i];\n  }\n  return Math.abs(upper - lower);\n}\n",
                ts: "function halfSumDifference(nums: number[]): number {\n  const a = [...nums].sort((x, y) => x - y);\n  const split = Math.ceil(a.length / 2);\n  let lower = 0, upper = 0;\n  for (let i = 0; i < a.length; i++) {\n    if (i < split) lower += a[i]; else upper += a[i];\n  }\n  return Math.abs(upper - lower);\n}\n",
                commentedCode: {
                    js: "function halfSumDifference(nums) {\n  // Sorting makes every lower-half value precede every upper-half value.\n  const a = [...nums].sort((x, y) => x - y);\n  // The lower half receives ceil(n / 2) values.\n  const split = Math.ceil(a.length / 2);\n  let lower = 0, upper = 0;\n  // Accumulate each sorted value into the total for its side of the split.\n  for (let i = 0; i < a.length; i++) {\n    if (i < split) lower += a[i]; else upper += a[i];\n  }\n  // Return the magnitude of the difference between the two totals.\n  return Math.abs(upper - lower);\n}\n",
                    ts: "function halfSumDifference(nums: number[]): number {\n  // Sorting makes every lower-half value precede every upper-half value.\n  const a = [...nums].sort((x, y) => x - y);\n  // The lower half receives ceil(n / 2) values.\n  const split = Math.ceil(a.length / 2);\n  let lower = 0, upper = 0;\n  // Accumulate each sorted value into the total for its side of the split.\n  for (let i = 0; i < a.length; i++) {\n    if (i < split) lower += a[i]; else upper += a[i];\n  }\n  // Return the magnitude of the difference between the two totals.\n  return Math.abs(upper - lower);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    }
];
const twoHeapsProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const twoHeapsMcqs = [
    {
        id: "s5-th-halves",
        kind: "mcq",
        prompt: "The two-heaps median technique maintains:",
        options: [
            "two min-heaps",
            "two max-heaps",
            "a max-heap for the smaller half and a min-heap for the larger half",
            "a heap plus a hash map"
        ],
        answerIndex: 2,
        explanation: "That way both middle values sit at the two roots, ready to read."
    },
    {
        id: "s5-th-median-time",
        kind: "mcq",
        prompt: "With the two heaps kept balanced, reading the current median costs:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answerIndex: 0,
        explanation: "The median is at the root of one heap, or the average of both roots."
    }
];
const twoHeapsModule = {
    id: "m-pat-two-heaps",
    stageId: S,
    title: "Two Heaps",
    kind: "patternModule",
    summary: "Split the data into a smaller half and a larger half — medians and greedy scheduling in O(log n) per step.",
    lessonSections: [
        {
            heading: "Two halves, two roots",
            body: `To know the **median** you don't need the whole list sorted — you only need the middle. Keep the smaller half in a **max-heap** (its root is the biggest of the small values) and the larger half in a **min-heap** (its root is the smallest of the large values). Keep the sizes within one of each other and the median is always sitting at one or both roots — **O(1)** to read, **O(log n)** to insert.

\`\`\`js
// insert, then rebalance
if (lo.size() === 0 || v <= lo.peek()) lo.push(v); else hi.push(v);
if (lo.size() > hi.size() + 1) hi.push(lo.pop());
else if (hi.size() > lo.size()) lo.push(hi.pop());

// median
const median = lo.size() > hi.size() ? lo.peek() : (lo.peek() + hi.peek()) / 2;
\`\`\``
        },
        {
            heading: "Recognition cues",
            body: `Reach for two heaps when you need:

- the **median** of a growing stream, or of a sliding window,
- to keep track of the **middle** of a dataset while it changes,
- to split values into a cheaper half and a costlier half,
- **greedy scheduling** where one heap holds "not yet available" items ordered by when they unlock, and the other holds "available now" ordered by value — the maximise-capital drill below is exactly this shape.

The related insight: when you must move values to a common point, the **median** minimises total distance (the mean minimises squared distance).`
        },
        {
            heading: "Templates & pitfalls",
            body: `\`\`\`ts
// Greedy with an unlock queue + a value heap
projects.sort((a, b) => a.cost - b.cost);   // ordered by when they unlock
const available = new MaxHeap();            // best value among unlocked
let i = 0;
for (let round = 0; round < k; round++) {
  while (i < projects.length && projects[i].cost <= capital) available.push(projects[i++].profit);
  if (available.size() === 0) break;        // nothing affordable — stop
  capital += available.pop()!;
}
\`\`\`

**Pitfalls:** letting the heaps drift out of balance (rebalance after **every** insert, not occasionally); getting the direction backwards — the *smaller* half needs a **max**-heap; forgetting the even-length median is an **average**, not a middle element; and not handling the empty case before peeking at a root. Work the drills below, easy to hard.`
        }
    ],
    guidedExampleProblemId: "th-median-of-list",
    drillProblemIds: [
        "th-median-of-list",
        "th-lower-half-max",
        "th-running-medians",
        "th-maximize-capital",
        "th-sum-distance-to-median",
        "th-sliding-window-median"
    ],
    testPoolProblemIds: [
        "th-upper-half-min",
        "th-median-of-two-lists",
        "th-count-below-median",
        "th-half-sum-difference"
    ],
    complexityQuestionIds: [
        "s5-th-halves",
        "s5-th-median-time"
    ],
    badgeId: "badge-pat-two-heaps",
    prerequisiteModuleIds: [
        "m-pat-top-k"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_data_stage5_1_un9tl._.js.map