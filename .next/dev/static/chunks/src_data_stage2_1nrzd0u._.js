(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/stage2/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stage2Batch1Mcqs",
    ()=>stage2Batch1Mcqs,
    "stage2Batch1Modules",
    ()=>stage2Batch1Modules,
    "stage2Batch1Problems",
    ()=>stage2Batch1Problems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage2/labs.ts [app-client] (ecmascript)");
;
;
const S = "dsa-s2";
const drafts = [
    /* -------------------- Arrays -------------------- */ {
        id: "a-move-zeroes",
        slug: "move-zeroes",
        title: "Move Zeroes",
        difficulty: "medium",
        statement: "Return a new list with every 0 moved to the end while the non-zero values keep their original order.",
        examples: [
            {
                input: "[0,1,0,3,12]",
                output: "[1,3,12,0,0]"
            },
            {
                input: "[0]",
                output: "[0]"
            },
            {
                input: "[1,2,3]",
                output: "[1,2,3]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "moveZeroes",
        starter: {
            js: "function moveZeroes(nums) {\n  // Non-zeros first (in order), then the zeros.\n}\n",
            ts: "function moveZeroes(nums: number[]): number[] {\n  // Non-zeros first (in order), then the zeros.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        0,
                        1,
                        0,
                        3,
                        12
                    ]
                ],
                expected: [
                    1,
                    3,
                    12,
                    0,
                    0
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
                    []
                ],
                expected: []
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
                        0,
                        2,
                        0,
                        3
                    ]
                ],
                expected: [
                    1,
                    2,
                    3,
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        5,
                        0,
                        0,
                        5
                    ]
                ],
                expected: [
                    5,
                    5,
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        0,
                        0,
                        1
                    ]
                ],
                expected: [
                    1,
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        -1,
                        0,
                        -2
                    ]
                ],
                expected: [
                    -1,
                    -2,
                    0
                ]
            }
        ],
        hints: [
            "Separate the values into 'non-zero' and 'the zeros', then stitch them back together.",
            "Collect non-zeros in order, then append as many zeros as you removed.",
            "const nz = nums.filter(x => x !== 0); return nz.concat(Array(nums.length - nz.length).fill(0))."
        ],
        solutions: [
            {
                label: "Filter then pad",
                approach: "Keep non-zeros in order and append the removed zeros.",
                js: "function moveZeroes(nums) {\n  const nz = nums.filter((x) => x !== 0);\n  while (nz.length < nums.length) nz.push(0);\n  return nz;\n}\n",
                ts: "function moveZeroes(nums: number[]): number[] {\n  const nz = nums.filter((x) => x !== 0);\n  while (nz.length < nums.length) nz.push(0);\n  return nz;\n}\n",
                commentedCode: {
                    js: "function moveZeroes(nums) {\n  // Keep the non-zero values in their original relative order.\n  const nz = nums.filter((x) => x !== 0);\n\n  // Restore the original length by appending one zero at a time.\n  while (nz.length < nums.length) nz.push(0);\n\n  // The input stays unchanged because nz is a new array.\n  return nz;\n}\n",
                    ts: "function moveZeroes(nums: number[]): number[] {\n  // Keep the non-zero values in their original relative order.\n  const nz = nums.filter((x) => x !== 0);\n\n  // Restore the original length by appending one zero at a time.\n  while (nz.length < nums.length) nz.push(0);\n\n  // The input stays unchanged because nz is a new array.\n  return nz;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Two-pass write index",
                approach: "Write non-zeros to the front, then fill the rest with zeros.",
                js: "function moveZeroes(nums) {\n  const out = new Array(nums.length).fill(0);\n  let w = 0;\n  for (const x of nums) if (x !== 0) out[w++] = x;\n  return out;\n}\n",
                ts: "function moveZeroes(nums: number[]): number[] {\n  const out = new Array(nums.length).fill(0);\n  let w = 0;\n  for (const x of nums) if (x !== 0) out[w++] = x;\n  return out;\n}\n",
                commentedCode: {
                    js: "function moveZeroes(nums) {\n  // Start with an output full of zeros, so only non-zeros need writing.\n  const out = new Array(nums.length).fill(0);\n  // w marks the next output position for a non-zero value.\n  let w = 0;\n\n  // Copy non-zeros from left to right to preserve their order.\n  for (const x of nums) {\n    if (x !== 0) out[w++] = x;\n  }\n\n  // Unwritten positions remain zero at the end.\n  return out;\n}\n",
                    ts: "function moveZeroes(nums: number[]): number[] {\n  // Start with an output full of zeros, so only non-zeros need writing.\n  const out = new Array(nums.length).fill(0);\n  // w marks the next output position for a non-zero value.\n  let w = 0;\n\n  // Copy non-zeros from left to right to preserve their order.\n  for (const x of nums) {\n    if (x !== 0) out[w++] = x;\n  }\n\n  // Unwritten positions remain zero at the end.\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "a-max-ones",
        slug: "max-consecutive-ones",
        title: "Max Consecutive Ones",
        difficulty: "easy",
        statement: "Given a list of 0s and 1s, return the length of the longest run of consecutive 1s.",
        examples: [
            {
                input: "[1,1,0,1,1,1]",
                output: "3"
            },
            {
                input: "[0,0]",
                output: "0"
            },
            {
                input: "[1,1,1]",
                output: "3"
            }
        ],
        constraints: [
            "0 <= bits.length <= 10000",
            "each value is 0 or 1"
        ],
        functionName: "maxConsecutiveOnes",
        starter: {
            js: "function maxConsecutiveOnes(bits) {\n  // Longest run of 1s.\n}\n",
            ts: "function maxConsecutiveOnes(bits: number[]): number {\n  // Longest run of 1s.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        1,
                        0,
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
                        0,
                        0
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        1,
                        1,
                        1
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
                        0,
                        1,
                        0,
                        1
                    ]
                ],
                expected: 1
            },
            {
                args: [
                    [
                        0,
                        1,
                        1,
                        0,
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
                        1,
                        1,
                        0,
                        0
                    ]
                ],
                expected: 2
            }
        ],
        hints: [
            "Track the current run length and the best run length seen.",
            "On a 1, increment the current run and update the best; on a 0, reset the current run to 0.",
            "let cur = 0, best = 0; for b: cur = b === 1 ? cur + 1 : 0; best = Math.max(best, cur)."
        ],
        solutions: [
            {
                label: "Running counter",
                approach: "Grow a counter on 1s, reset on 0s, track the maximum.",
                js: "function maxConsecutiveOnes(bits) {\n  let cur = 0, best = 0;\n  for (const b of bits) {\n    cur = b === 1 ? cur + 1 : 0;\n    if (cur > best) best = cur;\n  }\n  return best;\n}\n",
                ts: "function maxConsecutiveOnes(bits: number[]): number {\n  let cur = 0, best = 0;\n  for (const b of bits) {\n    cur = b === 1 ? cur + 1 : 0;\n    if (cur > best) best = cur;\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function maxConsecutiveOnes(bits) {\n  // cur measures the run ending here; best remembers the longest run.\n  let cur = 0, best = 0;\n\n  for (const b of bits) {\n    // A one extends the run, while a zero breaks it.\n    cur = b === 1 ? cur + 1 : 0;\n    // Record a new maximum as soon as this run exceeds it.\n    if (cur > best) best = cur;\n  }\n\n  return best;\n}\n",
                    ts: "function maxConsecutiveOnes(bits: number[]): number {\n  // cur measures the run ending here; best remembers the longest run.\n  let cur = 0, best = 0;\n\n  for (const b of bits) {\n    // A one extends the run, while a zero breaks it.\n    cur = b === 1 ? cur + 1 : 0;\n    // Record a new maximum as soon as this run exceeds it.\n    if (cur > best) best = cur;\n  }\n\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Split on zeros",
                approach: "Join to a string, split on 0, and take the longest chunk.",
                js: "function maxConsecutiveOnes(bits) {\n  return bits.join('').split('0').reduce((m, r) => Math.max(m, r.length), 0);\n}\n",
                ts: "function maxConsecutiveOnes(bits: number[]): number {\n  return bits.join('').split('0').reduce((m, r) => Math.max(m, r.length), 0);\n}\n",
                commentedCode: {
                    js: "function maxConsecutiveOnes(bits) {\n  // Joining turns each run of ones into text separated by zeroes.\n  // Splitting isolates those runs, and reduce keeps the greatest length.\n  return bits.join('').split('0').reduce((m, r) => Math.max(m, r.length), 0);\n}\n",
                    ts: "function maxConsecutiveOnes(bits: number[]): number {\n  // Joining turns each run of ones into text separated by zeroes.\n  // Splitting isolates those runs, and reduce keeps the greatest length.\n  return bits.join('').split('0').reduce((m, r) => Math.max(m, r.length), 0);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "a-dedupe-sorted",
        slug: "dedupe-sorted",
        title: "Dedupe a Sorted List",
        difficulty: "medium",
        statement: "Given a list sorted in non-decreasing order, return the distinct values in the same order.",
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
            "0 <= nums.length <= 10000",
            "input is sorted ascending"
        ],
        functionName: "dedupeSorted",
        starter: {
            js: "function dedupeSorted(nums) {\n  // Remove adjacent duplicates from a sorted list.\n}\n",
            ts: "function dedupeSorted(nums: number[]): number[] {\n  // Remove adjacent duplicates from a sorted list.\n  return [];\n}\n"
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
            "Because it's sorted, duplicates are always adjacent.",
            "Append a value only when it differs from the last one you appended.",
            "for v: if out is empty or out[out.length-1] !== v, out.push(v)."
        ],
        solutions: [
            {
                label: "Compare to previous",
                approach: "Push a value only when it differs from the last kept value.",
                js: "function dedupeSorted(nums) {\n  const out = [];\n  for (const v of nums) {\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n  return out;\n}\n",
                ts: "function dedupeSorted(nums: number[]): number[] {\n  const out: number[] = [];\n  for (const v of nums) {\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function dedupeSorted(nums) {\n  // Build a separate list of the distinct values.\n  const out = [];\n\n  for (const v of nums) {\n    // Sorted duplicates are adjacent, so compare with the last kept value.\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n\n  return out;\n}\n",
                    ts: "function dedupeSorted(nums: number[]): number[] {\n  // Build a separate list of the distinct values.\n  const out: number[] = [];\n\n  for (const v of nums) {\n    // Sorted duplicates are adjacent, so compare with the last kept value.\n    if (out.length === 0 || out[out.length - 1] !== v) out.push(v);\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Set (order preserved)",
                approach: "A Set drops duplicates; sorted input keeps the order intact.",
                js: "function dedupeSorted(nums) {\n  return [...new Set(nums)];\n}\n",
                ts: "function dedupeSorted(nums: number[]): number[] {\n  return [...new Set(nums)];\n}\n",
                commentedCode: {
                    js: "function dedupeSorted(nums) {\n  // Set keeps only the first occurrence of each value in insertion order.\n  // Spreading it creates the requested result array without changing nums.\n  return [...new Set(nums)];\n}\n",
                    ts: "function dedupeSorted(nums: number[]): number[] {\n  // Set keeps only the first occurrence of each value in insertion order.\n  // Spreading it creates the requested result array without changing nums.\n  return [...new Set(nums)];\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "a-plus-one",
        slug: "plus-one",
        title: "Plus One",
        difficulty: "easy",
        statement: "A non-negative integer is given as an array of digits, most-significant first. Return the digits of the number plus one.",
        examples: [
            {
                input: "[1,2,3]",
                output: "[1,2,4]"
            },
            {
                input: "[1,2,9]",
                output: "[1,3,0]"
            },
            {
                input: "[9,9]",
                output: "[1,0,0]"
            }
        ],
        constraints: [
            "1 <= digits.length <= 1000",
            "0 <= digits[i] <= 9",
            "no leading zeros (except [0])"
        ],
        functionName: "plusOne",
        starter: {
            js: "function plusOne(digits) {\n  // Add one to the number represented by digits.\n}\n",
            ts: "function plusOne(digits: number[]): number[] {\n  // Add one to the number represented by digits.\n  return [];\n}\n"
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
                    4
                ]
            },
            {
                args: [
                    [
                        1,
                        2,
                        9
                    ]
                ],
                expected: [
                    1,
                    3,
                    0
                ]
            },
            {
                args: [
                    [
                        9,
                        9
                    ]
                ],
                expected: [
                    1,
                    0,
                    0
                ]
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
                    1
                ]
            },
            {
                args: [
                    [
                        9
                    ]
                ],
                expected: [
                    1,
                    0
                ]
            },
            {
                args: [
                    [
                        1,
                        0,
                        0
                    ]
                ],
                expected: [
                    1,
                    0,
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
                    ]
                ],
                expected: [
                    4,
                    3,
                    2,
                    2
                ]
            },
            {
                args: [
                    [
                        8,
                        9,
                        9
                    ]
                ],
                expected: [
                    9,
                    0,
                    0
                ]
            },
            {
                args: [
                    [
                        9,
                        9,
                        9
                    ]
                ],
                expected: [
                    1,
                    0,
                    0,
                    0
                ]
            }
        ],
        hints: [
            "Add from the last digit, carrying into the next when a digit passes 9.",
            "Walk right to left: if the digit is 9 it becomes 0 and you carry; otherwise increment and stop.",
            "If every digit was 9, prepend a leading 1 to the all-zeros result."
        ],
        solutions: [
            {
                label: "Carry from the right",
                approach: "Increment the last digit, propagating a carry as needed.",
                js: "function plusOne(digits) {\n  const out = [...digits];\n  for (let i = out.length - 1; i >= 0; i--) {\n    if (out[i] < 9) { out[i]++; return out; }\n    out[i] = 0;\n  }\n  out.unshift(1);\n  return out;\n}\n",
                ts: "function plusOne(digits: number[]): number[] {\n  const out = [...digits];\n  for (let i = out.length - 1; i >= 0; i--) {\n    if (out[i]! < 9) { out[i]++; return out; }\n    out[i] = 0;\n  }\n  out.unshift(1);\n  return out;\n}\n",
                commentedCode: {
                    js: "function plusOne(digits) {\n  // Work on a copy so the caller's digit array is not mutated.\n  const out = [...digits];\n\n  // Addition starts at the least-significant digit on the right.\n  for (let i = out.length - 1; i >= 0; i--) {\n    // A digit below nine can absorb the one with no further carry.\n    if (out[i] < 9) {\n      out[i]++;\n      return out;\n    }\n    // Nine becomes zero and carries one into the next digit to the left.\n    out[i] = 0;\n  }\n\n  // If every digit was nine, the carry creates a new leading digit.\n  out.unshift(1);\n  return out;\n}\n",
                    ts: "function plusOne(digits: number[]): number[] {\n  // Work on a copy so the caller's digit array is not mutated.\n  const out = [...digits];\n\n  // Addition starts at the least-significant digit on the right.\n  for (let i = out.length - 1; i >= 0; i--) {\n    // A digit below nine can absorb the one with no further carry.\n    if (out[i]! < 9) {\n      out[i]++;\n      return out;\n    }\n    // Nine becomes zero and carries one into the next digit to the left.\n    out[i] = 0;\n  }\n\n  // If every digit was nine, the carry creates a new leading digit.\n  out.unshift(1);\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "BigInt round-trip",
                approach: "Parse to a BigInt, add one, and split back into digits.",
                js: "function plusOne(digits) {\n  const n = BigInt(digits.join('')) + 1n;\n  return String(n).split('').map(Number);\n}\n",
                ts: "function plusOne(digits: number[]): number[] {\n  const n = BigInt(digits.join('')) + 1n;\n  return String(n).split('').map(Number);\n}\n",
                commentedCode: {
                    js: "function plusOne(digits) {\n  // Join the digits, parse the exact integer, and add one.\n  const n = BigInt(digits.join('')) + 1n;\n  // Convert the incremented integer back into individual numeric digits.\n  return String(n).split('').map(Number);\n}\n",
                    ts: "function plusOne(digits: number[]): number[] {\n  // Join the digits, parse the exact integer, and add one.\n  const n = BigInt(digits.join('')) + 1n;\n  // Convert the incremented integer back into individual numeric digits.\n  return String(n).split('').map(Number);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* -------------------- Strings -------------------- */ {
        id: "s-is-anagram",
        slug: "is-anagram",
        title: "Valid Anagram",
        difficulty: "easy",
        statement: "Return `true` if the two strings contain exactly the same characters with the same counts (an anagram).",
        examples: [
            {
                input: '"listen", "silent"',
                output: "true"
            },
            {
                input: '"abc", "abd"',
                output: "false"
            },
            {
                input: '"", ""',
                output: "true"
            }
        ],
        constraints: [
            "0 <= a.length, b.length <= 10000"
        ],
        functionName: "isAnagram",
        starter: {
            js: "function isAnagram(a, b) {\n  // True if a and b are anagrams.\n}\n",
            ts: "function isAnagram(a: string, b: string): boolean {\n  // True if a and b are anagrams.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    "listen",
                    "silent"
                ],
                expected: true
            },
            {
                args: [
                    "abc",
                    "abd"
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
                    "a",
                    "a"
                ],
                expected: true
            },
            {
                args: [
                    "a",
                    "b"
                ],
                expected: false
            },
            {
                args: [
                    "aabb",
                    "bbaa"
                ],
                expected: true
            },
            {
                args: [
                    "abc",
                    "ab"
                ],
                expected: false
            },
            {
                args: [
                    "rat",
                    "car"
                ],
                expected: false
            },
            {
                args: [
                    "anagram",
                    "nagaram"
                ],
                expected: true
            }
        ],
        hints: [
            "Different lengths can never be anagrams.",
            "Count each character in one string, then subtract using the other; all counts must end at zero.",
            "Or sort both strings and compare — anagrams sort to the same sequence."
        ],
        solutions: [
            {
                label: "Character counts",
                approach: "Tally letters of a, decrement with b, and check for any imbalance.",
                js: "function isAnagram(a, b) {\n  if (a.length !== b.length) return false;\n  const counts = {};\n  for (const ch of a) counts[ch] = (counts[ch] || 0) + 1;\n  for (const ch of b) {\n    if (!counts[ch]) return false;\n    counts[ch]--;\n  }\n  return true;\n}\n",
                ts: "function isAnagram(a: string, b: string): boolean {\n  if (a.length !== b.length) return false;\n  const counts: Record<string, number> = {};\n  for (const ch of a) counts[ch] = (counts[ch] || 0) + 1;\n  for (const ch of b) {\n    if (!counts[ch]) return false;\n    counts[ch]--;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isAnagram(a, b) {\n  // Anagrams must contain the same total number of characters.\n  if (a.length !== b.length) return false;\n\n  // Count how many copies of each character a provides.\n  const counts = {};\n  for (const ch of a) counts[ch] = (counts[ch] || 0) + 1;\n\n  for (const ch of b) {\n    // A missing count means b needs a character a cannot supply.\n    if (!counts[ch]) return false;\n    // Match this character with one occurrence from a.\n    counts[ch]--;\n  }\n\n  // Equal lengths ensure every count was consumed exactly once.\n  return true;\n}\n",
                    ts: "function isAnagram(a: string, b: string): boolean {\n  // Anagrams must contain the same total number of characters.\n  if (a.length !== b.length) return false;\n\n  // Count how many copies of each character a provides.\n  const counts: Record<string, number> = {};\n  for (const ch of a) counts[ch] = (counts[ch] || 0) + 1;\n\n  for (const ch of b) {\n    // A missing count means b needs a character a cannot supply.\n    if (!counts[ch]) return false;\n    // Match this character with one occurrence from a.\n    counts[ch]--;\n  }\n\n  // Equal lengths ensure every count was consumed exactly once.\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Sort and compare",
                approach: "Anagrams become identical once sorted.",
                js: "function isAnagram(a, b) {\n  const norm = (s) => s.split('').sort().join('');\n  return norm(a) === norm(b);\n}\n",
                ts: "function isAnagram(a: string, b: string): boolean {\n  const norm = (s: string) => s.split('').sort().join('');\n  return norm(a) === norm(b);\n}\n",
                commentedCode: {
                    js: "function isAnagram(a, b) {\n  // Sorting gives any two strings with the same character multiset one canonical form.\n  const norm = (s) => s.split('').sort().join('');\n  // The strings are anagrams exactly when those canonical forms match.\n  return norm(a) === norm(b);\n}\n",
                    ts: "function isAnagram(a: string, b: string): boolean {\n  // Sorting gives any two strings with the same character multiset one canonical form.\n  const norm = (s: string) => s.split('').sort().join('');\n  // The strings are anagrams exactly when those canonical forms match.\n  return norm(a) === norm(b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "s-first-unique",
        slug: "first-unique-char",
        title: "First Unique Character",
        difficulty: "medium",
        statement: "Return the index of the first character that appears exactly once in the string, or -1 if there is none.",
        examples: [
            {
                input: '"leetcode"',
                output: "0"
            },
            {
                input: '"aabb"',
                output: "-1"
            },
            {
                input: '"loveleetcode"',
                output: "2"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000"
        ],
        functionName: "firstUniqueChar",
        starter: {
            js: "function firstUniqueChar(s) {\n  // Index of the first non-repeating character, or -1.\n}\n",
            ts: "function firstUniqueChar(s: string): number {\n  // Index of the first non-repeating character, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    "leetcode"
                ],
                expected: 0
            },
            {
                args: [
                    "aabb"
                ],
                expected: -1
            },
            {
                args: [
                    "loveleetcode"
                ],
                expected: 2
            }
        ],
        hidden: [
            {
                args: [
                    ""
                ],
                expected: -1
            },
            {
                args: [
                    "z"
                ],
                expected: 0
            },
            {
                args: [
                    "aa"
                ],
                expected: -1
            },
            {
                args: [
                    "abcabd"
                ],
                expected: 2
            },
            {
                args: [
                    "aabbccd"
                ],
                expected: 6
            },
            {
                args: [
                    "xxy"
                ],
                expected: 2
            }
        ],
        hints: [
            "You need each character's total count before you can judge the first one.",
            "First pass: count every character. Second pass: return the index of the first with count 1.",
            "Build counts, then scan indices in order returning the first where counts[s[i]] === 1."
        ],
        solutions: [
            {
                label: "Count then scan",
                approach: "Tally counts, then find the earliest index with a count of one.",
                js: "function firstUniqueChar(s) {\n  const counts = {};\n  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;\n  for (let i = 0; i < s.length; i++) {\n    if (counts[s[i]] === 1) return i;\n  }\n  return -1;\n}\n",
                ts: "function firstUniqueChar(s: string): number {\n  const counts: Record<string, number> = {};\n  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;\n  for (let i = 0; i < s.length; i++) {\n    if (counts[s[i]!] === 1) return i;\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function firstUniqueChar(s) {\n  // First learn the total frequency of every character.\n  const counts = {};\n  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;\n\n  // Scan in index order so the first count of one is also the earliest.\n  for (let i = 0; i < s.length; i++) {\n    if (counts[s[i]] === 1) return i;\n  }\n\n  // No character occurs exactly once.\n  return -1;\n}\n",
                    ts: "function firstUniqueChar(s: string): number {\n  // First learn the total frequency of every character.\n  const counts: Record<string, number> = {};\n  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;\n\n  // Scan in index order so the first count of one is also the earliest.\n  for (let i = 0; i < s.length; i++) {\n    if (counts[s[i]!] === 1) return i;\n  }\n\n  // No character occurs exactly once.\n  return -1;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "indexOf === lastIndexOf",
                approach: "A character is unique exactly when its first and last positions match.",
                js: "function firstUniqueChar(s) {\n  for (let i = 0; i < s.length; i++) {\n    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;\n  }\n  return -1;\n}\n",
                ts: "function firstUniqueChar(s: string): number {\n  for (let i = 0; i < s.length; i++) {\n    if (s.indexOf(s[i]!) === s.lastIndexOf(s[i]!)) return i;\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function firstUniqueChar(s) {\n  // Check candidates from left to right to preserve the 'first' requirement.\n  for (let i = 0; i < s.length; i++) {\n    // A character occurs once when its first and last positions are identical.\n    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;\n  }\n\n  return -1;\n}\n",
                    ts: "function firstUniqueChar(s: string): number {\n  // Check candidates from left to right to preserve the 'first' requirement.\n  for (let i = 0; i < s.length; i++) {\n    // A character occurs once when its first and last positions are identical.\n    if (s.indexOf(s[i]!) === s.lastIndexOf(s[i]!)) return i;\n  }\n\n  return -1;\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "s-valid-parens",
        slug: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "medium",
        statement: "Given a string of the brackets `()[]{}`, return `true` if every opening bracket is closed by the matching type in the correct order.",
        examples: [
            {
                input: '"()"',
                output: "true"
            },
            {
                input: '"([)]"',
                output: "false"
            },
            {
                input: '""',
                output: "true"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000",
            "s contains only the six bracket characters"
        ],
        functionName: "validParens",
        starter: {
            js: "function validParens(s) {\n  // True if the brackets are balanced and correctly nested.\n}\n",
            ts: "function validParens(s: string): boolean {\n  // True if the brackets are balanced and correctly nested.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    "()"
                ],
                expected: true
            },
            {
                args: [
                    "([)]"
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
                    "()[]{}"
                ],
                expected: true
            },
            {
                args: [
                    "(]"
                ],
                expected: false
            },
            {
                args: [
                    "{[]}"
                ],
                expected: true
            },
            {
                args: [
                    "("
                ],
                expected: false
            },
            {
                args: [
                    ")("
                ],
                expected: false
            },
            {
                args: [
                    "((()))"
                ],
                expected: true
            }
        ],
        hints: [
            "The most recently opened bracket must be the first one closed — that's last-in, first-out.",
            "Push opening brackets onto a stack; on a closing bracket, the top must be its match.",
            "At the end the stack must be empty for the string to be valid."
        ],
        solutions: [
            {
                label: "Stack",
                approach: "Match each closer against the top of a stack of openers.",
                js: "function validParens(s) {\n  const pairs = { ')': '(', ']': '[', '}': '{' };\n  const stack = [];\n  for (const ch of s) {\n    if (ch === '(' || ch === '[' || ch === '{') stack.push(ch);\n    else if (stack.pop() !== pairs[ch]) return false;\n  }\n  return stack.length === 0;\n}\n",
                ts: "function validParens(s: string): boolean {\n  const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' };\n  const stack: string[] = [];\n  for (const ch of s) {\n    if (ch === '(' || ch === '[' || ch === '{') stack.push(ch);\n    else if (stack.pop() !== pairs[ch]) return false;\n  }\n  return stack.length === 0;\n}\n",
                commentedCode: {
                    js: "function validParens(s) {\n  // Map every closing bracket to the opening bracket it requires.\n  const pairs = { ')': '(', ']': '[', '}': '{' };\n  // The stack tracks open brackets waiting to be closed.\n  const stack = [];\n\n  for (const ch of s) {\n    if (ch === '(' || ch === '[' || ch === '{') {\n      // A later closer must match this most recent opener.\n      stack.push(ch);\n    } else if (stack.pop() !== pairs[ch]) {\n      // A wrong or missing opener makes the nesting invalid.\n      return false;\n    }\n  }\n\n  // Any opener left on the stack was never closed.\n  return stack.length === 0;\n}\n",
                    ts: "function validParens(s: string): boolean {\n  // Map every closing bracket to the opening bracket it requires.\n  const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' };\n  // The stack tracks open brackets waiting to be closed.\n  const stack: string[] = [];\n\n  for (const ch of s) {\n    if (ch === '(' || ch === '[' || ch === '{') {\n      // A later closer must match this most recent opener.\n      stack.push(ch);\n    } else if (stack.pop() !== pairs[ch]) {\n      // A wrong or missing opener makes the nesting invalid.\n      return false;\n    }\n  }\n\n  // Any opener left on the stack was never closed.\n  return stack.length === 0;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Collapse pairs",
                approach: "Repeatedly delete adjacent matching pairs; a valid string empties out.",
                js: "function validParens(s) {\n  let prev;\n  do { prev = s; s = s.replace('()', '').replace('[]', '').replace('{}', ''); } while (s !== prev);\n  return s.length === 0;\n}\n",
                ts: "function validParens(s: string): boolean {\n  let prev: string;\n  do { prev = s; s = s.replace('()', '').replace('[]', '').replace('{}', ''); } while (s !== prev);\n  return s.length === 0;\n}\n",
                commentedCode: {
                    js: "function validParens(s) {\n  // Remember the previous text so we can detect when no pair was removed.\n  let prev;\n  do {\n    prev = s;\n    // Removing inner matched pairs eventually exposes their outer pairs.\n    s = s.replace('()', '').replace('[]', '').replace('{}', '');\n  } while (s !== prev);\n\n  // A valid bracket string collapses completely.\n  return s.length === 0;\n}\n",
                    ts: "function validParens(s: string): boolean {\n  // Remember the previous text so we can detect when no pair was removed.\n  let prev: string;\n  do {\n    prev = s;\n    // Removing inner matched pairs eventually exposes their outer pairs.\n    s = s.replace('()', '').replace('[]', '').replace('{}', '');\n  } while (s !== prev);\n\n  // A valid bracket string collapses completely.\n  return s.length === 0;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "s-count-segments",
        slug: "count-segments",
        title: "Count Segments",
        difficulty: "easy",
        statement: "Return the number of segments in the string, where a segment is a maximal run of non-space characters.",
        examples: [
            {
                input: '"Hello world"',
                output: "2"
            },
            {
                input: '""',
                output: "0"
            },
            {
                input: '"  a  b  "',
                output: "2"
            }
        ],
        constraints: [
            "0 <= s.length <= 10000",
            "spaces separate segments"
        ],
        functionName: "countSegments",
        starter: {
            js: "function countSegments(s) {\n  // Count space-separated words.\n}\n",
            ts: "function countSegments(s: string): number {\n  // Count space-separated words.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "Hello world"
                ],
                expected: 2
            },
            {
                args: [
                    ""
                ],
                expected: 0
            },
            {
                args: [
                    "  a  b  "
                ],
                expected: 2
            }
        ],
        hidden: [
            {
                args: [
                    "one"
                ],
                expected: 1
            },
            {
                args: [
                    "   "
                ],
                expected: 0
            },
            {
                args: [
                    "a b c d"
                ],
                expected: 4
            },
            {
                args: [
                    "trailing "
                ],
                expected: 1
            },
            {
                args: [
                    " leading"
                ],
                expected: 1
            },
            {
                args: [
                    "multiple   spaces here"
                ],
                expected: 3
            }
        ],
        hints: [
            "Splitting on spaces can leave empty strings from runs of spaces — filter those out.",
            "Trim, split on whitespace, and count the non-empty pieces.",
            "return s.split(' ').filter((w) => w.length > 0).length."
        ],
        solutions: [
            {
                label: "Split and filter",
                approach: "Split on spaces and drop empty tokens.",
                js: "function countSegments(s) {\n  return s.split(' ').filter((w) => w.length > 0).length;\n}\n",
                ts: "function countSegments(s: string): number {\n  return s.split(' ').filter((w) => w.length > 0).length;\n}\n",
                commentedCode: {
                    js: "function countSegments(s) {\n  // Split at every space, discard empty pieces from repeated spaces, and count the rest.\n  return s.split(' ').filter((w) => w.length > 0).length;\n}\n",
                    ts: "function countSegments(s: string): number {\n  // Split at every space, discard empty pieces from repeated spaces, and count the rest.\n  return s.split(' ').filter((w) => w.length > 0).length;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Count segment starts",
                approach: "A new segment starts at a non-space whose left neighbour is a space or the start.",
                js: "function countSegments(s) {\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;\n  }\n  return count;\n}\n",
                ts: "function countSegments(s: string): number {\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countSegments(s) {\n  // Count boundaries where a new non-space run begins.\n  let count = 0;\n\n  for (let i = 0; i < s.length; i++) {\n    // A segment starts at a non-space after either the string start or a space.\n    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;\n  }\n\n  return count;\n}\n",
                    ts: "function countSegments(s: string): number {\n  // Count boundaries where a new non-space run begins.\n  let count = 0;\n\n  for (let i = 0; i < s.length; i++) {\n    // A segment starts at a non-space after either the string start or a space.\n    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;\n  }\n\n  return count;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    /* -------------------- Linked Lists (array-simulated) -------------------- */ {
        id: "ll-reverse",
        slug: "reverse-list",
        title: "Reverse a List",
        difficulty: "medium",
        statement: "A linked list is given as the array of its values, head first. Return the values of the reversed list.",
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
        functionName: "reverseList",
        starter: {
            js: "function reverseList(values) {\n  // Return the reversed sequence.\n}\n",
            ts: "function reverseList(values: number[]): number[] {\n  // Return the reversed sequence.\n  return [];\n}\n"
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
            "Reversing a linked list means prepending each node to a new list as you walk the old one.",
            "Iterate front to back, inserting each value at the front of your result.",
            "let out = []; for v of values: out.unshift(v); return out."
        ],
        solutions: [
            {
                label: "Prepend each value",
                approach: "Mirror the pointer-reversal technique by unshifting each value.",
                js: "function reverseList(values) {\n  const out = [];\n  for (const v of values) out.unshift(v);\n  return out;\n}\n",
                ts: "function reverseList(values: number[]): number[] {\n  const out: number[] = [];\n  for (const v of values) out.unshift(v);\n  return out;\n}\n",
                commentedCode: {
                    js: "function reverseList(values) {\n  // Build a separate representation of the reversed list.\n  const out = [];\n\n  // Prepending each next value puts later nodes before earlier nodes.\n  for (const v of values) out.unshift(v);\n\n  return out;\n}\n",
                    ts: "function reverseList(values: number[]): number[] {\n  // Build a separate representation of the reversed list.\n  const out: number[] = [];\n\n  // Prepending each next value puts later nodes before earlier nodes.\n  for (const v of values) out.unshift(v);\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Reverse a copy",
                approach: "Copy then reverse in place to avoid mutating the input.",
                js: "function reverseList(values) {\n  return [...values].reverse();\n}\n",
                ts: "function reverseList(values: number[]): number[] {\n  return [...values].reverse();\n}\n",
                commentedCode: {
                    js: "function reverseList(values) {\n  // Spread first because reverse mutates its array; only the copy is reversed.\n  return [...values].reverse();\n}\n",
                    ts: "function reverseList(values: number[]): number[] {\n  // Spread first because reverse mutates its array; only the copy is reversed.\n  return [...values].reverse();\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ll-middle",
        slug: "middle-value",
        title: "Middle of the List",
        difficulty: "easy",
        statement: "A linked list is given as its array of values. Return the middle value; for an even length return the second of the two middle values. Return -1 for an empty list.",
        examples: [
            {
                input: "[1,2,3,4,5]",
                output: "3"
            },
            {
                input: "[1,2,3,4]",
                output: "3",
                explanation: "Second of the two middles."
            },
            {
                input: "[1]",
                output: "1"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "middleValue",
        starter: {
            js: "function middleValue(values) {\n  // Return the middle value, or -1 if empty.\n}\n",
            ts: "function middleValue(values: number[]): number {\n  // Return the middle value, or -1 if empty.\n  return -1;\n}\n"
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
            "The 'upper middle' index of a length-n list is Math.floor(n / 2).",
            "Guard the empty case first, then index directly.",
            "return values.length === 0 ? -1 : values[Math.floor(values.length / 2)]."
        ],
        solutions: [
            {
                label: "Index the middle",
                approach: "Directly index the floor(n/2) position.",
                js: "function middleValue(values) {\n  if (values.length === 0) return -1;\n  return values[Math.floor(values.length / 2)];\n}\n",
                ts: "function middleValue(values: number[]): number {\n  if (values.length === 0) return -1;\n  return values[Math.floor(values.length / 2)]!;\n}\n",
                commentedCode: {
                    js: "function middleValue(values) {\n  // An empty list has no middle node.\n  if (values.length === 0) return -1;\n  // floor(length / 2) selects the middle, or the second middle for even lengths.\n  return values[Math.floor(values.length / 2)];\n}\n",
                    ts: "function middleValue(values: number[]): number {\n  // An empty list has no middle node.\n  if (values.length === 0) return -1;\n  // floor(length / 2) selects the middle, or the second middle for even lengths.\n  return values[Math.floor(values.length / 2)]!;\n}\n"
                },
                time: "O(1)",
                space: "O(1)"
            },
            {
                label: "Slow / fast pointers",
                approach: "Advance one pointer twice as fast; it lands the other at the middle.",
                js: "function middleValue(values) {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) {\n    slow++;\n    fast += 2;\n  }\n  return values[slow];\n}\n",
                ts: "function middleValue(values: number[]): number {\n  if (values.length === 0) return -1;\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) {\n    slow++;\n    fast += 2;\n  }\n  return values[slow]!;\n}\n",
                commentedCode: {
                    js: "function middleValue(values) {\n  // An empty list has no node to return.\n  if (values.length === 0) return -1;\n\n  // slow moves one node whenever fast moves two nodes.\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) {\n    slow++;\n    fast += 2;\n  }\n\n  // When fast reaches the end, slow is at the required middle.\n  return values[slow];\n}\n",
                    ts: "function middleValue(values: number[]): number {\n  // An empty list has no node to return.\n  if (values.length === 0) return -1;\n\n  // slow moves one node whenever fast moves two nodes.\n  let slow = 0, fast = 0;\n  while (fast < values.length && fast + 1 < values.length) {\n    slow++;\n    fast += 2;\n  }\n\n  // When fast reaches the end, slow is at the required middle.\n  return values[slow]!;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "ll-remove-value",
        slug: "remove-value",
        title: "Remove All Occurrences",
        difficulty: "medium",
        statement: "A linked list is given as its array of values. Return the values after removing every node equal to `target`.",
        examples: [
            {
                input: "[1,2,6,3,6], 6",
                output: "[1,2,3]"
            },
            {
                input: "[], 1",
                output: "[]"
            },
            {
                input: "[7,7,7], 7",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "removeValue",
        starter: {
            js: "function removeValue(values, target) {\n  // Return the list with every `target` removed.\n}\n",
            ts: "function removeValue(values: number[], target: number): number[] {\n  // Return the list with every `target` removed.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        6,
                        3,
                        6
                    ],
                    6
                ],
                expected: [
                    1,
                    2,
                    3
                ]
            },
            {
                args: [
                    [],
                    1
                ],
                expected: []
            },
            {
                args: [
                    [
                        7,
                        7,
                        7
                    ],
                    7
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
                        3
                    ],
                    4
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
                        2,
                        2,
                        1
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
                        0,
                        0,
                        1
                    ],
                    0
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    [
                        -1,
                        -2,
                        -1
                    ],
                    -1
                ],
                expected: [
                    -2
                ]
            },
            {
                args: [
                    [
                        5,
                        6,
                        5,
                        6
                    ],
                    6
                ],
                expected: [
                    5,
                    5
                ]
            }
        ],
        hints: [
            "Keep every value that isn't the target, in order.",
            "A single filter expresses this directly.",
            "return values.filter((v) => v !== target)."
        ],
        solutions: [
            {
                label: "Filter",
                approach: "Keep only the values that don't match the target.",
                js: "function removeValue(values, target) {\n  return values.filter((v) => v !== target);\n}\n",
                ts: "function removeValue(values: number[], target: number): number[] {\n  return values.filter((v) => v !== target);\n}\n",
                commentedCode: {
                    js: "function removeValue(values, target) {\n  // Keep every node value except those equal to the removal target.\n  // filter returns a new array, so the input representation is unchanged.\n  return values.filter((v) => v !== target);\n}\n",
                    ts: "function removeValue(values: number[], target: number): number[] {\n  // Keep every node value except those equal to the removal target.\n  // filter returns a new array, so the input representation is unchanged.\n  return values.filter((v) => v !== target);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Build a new list",
                approach: "Walk the nodes and append only survivors.",
                js: "function removeValue(values, target) {\n  const out = [];\n  for (const v of values) if (v !== target) out.push(v);\n  return out;\n}\n",
                ts: "function removeValue(values: number[], target: number): number[] {\n  const out: number[] = [];\n  for (const v of values) if (v !== target) out.push(v);\n  return out;\n}\n",
                commentedCode: {
                    js: "function removeValue(values, target) {\n  // Collect the values of nodes that survive removal.\n  const out = [];\n\n  // Preserve the original order while skipping every target value.\n  for (const v of values) {\n    if (v !== target) out.push(v);\n  }\n\n  return out;\n}\n",
                    ts: "function removeValue(values: number[], target: number): number[] {\n  // Collect the values of nodes that survive removal.\n  const out: number[] = [];\n\n  // Preserve the original order while skipping every target value.\n  for (const v of values) {\n    if (v !== target) out.push(v);\n  }\n\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ll-nth-from-end",
        slug: "nth-from-end",
        title: "Nth Node from the End",
        difficulty: "medium",
        statement: "A linked list is given as its array of values. Return the value that is `n` positions from the end (1-indexed), or -1 if `n` is out of range.",
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
        functionName: "nthFromEnd",
        starter: {
            js: "function nthFromEnd(values, n) {\n  // Value n positions from the end (1-indexed), or -1.\n}\n",
            ts: "function nthFromEnd(values: number[], n: number): number {\n  // Value n positions from the end (1-indexed), or -1.\n  return -1;\n}\n"
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
            "The n-th value from the end sits at index length - n from the front.",
            "Validate that length - n is a real index before reading it.",
            "const i = values.length - n; return i >= 0 ? values[i] : -1."
        ],
        solutions: [
            {
                label: "Index from the front",
                approach: "Convert the from-end position into a from-front index.",
                js: "function nthFromEnd(values, n) {\n  const i = values.length - n;\n  return i >= 0 && i < values.length ? values[i] : -1;\n}\n",
                ts: "function nthFromEnd(values: number[], n: number): number {\n  const i = values.length - n;\n  return i >= 0 && i < values.length ? values[i]! : -1;\n}\n",
                commentedCode: {
                    js: "function nthFromEnd(values, n) {\n  // Convert the one-based distance from the end to a zero-based front index.\n  const i = values.length - n;\n  // Read a valid position, or return the required sentinel when n is out of range.\n  return i >= 0 && i < values.length ? values[i] : -1;\n}\n",
                    ts: "function nthFromEnd(values: number[], n: number): number {\n  // Convert the one-based distance from the end to a zero-based front index.\n  const i = values.length - n;\n  // Read a valid position, or return the required sentinel when n is out of range.\n  return i >= 0 && i < values.length ? values[i]! : -1;\n}\n"
                },
                time: "O(1)",
                space: "O(1)"
            },
            {
                label: "Two-pointer gap",
                approach: "Advance a lead pointer n ahead, then move both until it falls off the end.",
                js: "function nthFromEnd(values, n) {\n  let lead = 0;\n  for (let i = 0; i < n; i++) { if (lead >= values.length) return -1; lead++; }\n  let trail = 0;\n  while (lead < values.length) { lead++; trail++; }\n  return values[trail];\n}\n",
                ts: "function nthFromEnd(values: number[], n: number): number {\n  let lead = 0;\n  for (let i = 0; i < n; i++) { if (lead >= values.length) return -1; lead++; }\n  let trail = 0;\n  while (lead < values.length) { lead++; trail++; }\n  return values[trail]!;\n}\n",
                commentedCode: {
                    js: "function nthFromEnd(values, n) {\n  // Move lead n nodes ahead to establish the required gap.\n  let lead = 0;\n  for (let i = 0; i < n; i++) {\n    // Falling off early means the list contains fewer than n nodes.\n    if (lead >= values.length) return -1;\n    lead++;\n  }\n\n  // Keep the fixed gap while advancing both pointers to the end.\n  let trail = 0;\n  while (lead < values.length) {\n    lead++;\n    trail++;\n  }\n\n  // trail now identifies the node n positions from the end.\n  return values[trail];\n}\n",
                    ts: "function nthFromEnd(values: number[], n: number): number {\n  // Move lead n nodes ahead to establish the required gap.\n  let lead = 0;\n  for (let i = 0; i < n; i++) {\n    // Falling off early means the list contains fewer than n nodes.\n    if (lead >= values.length) return -1;\n    lead++;\n  }\n\n  // Keep the fixed gap while advancing both pointers to the end.\n  let trail = 0;\n  while (lead < values.length) {\n    lead++;\n    trail++;\n  }\n\n  // trail now identifies the node n positions from the end.\n  return values[trail]!;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    }
];
const stage2Batch1Problems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const stage2Batch1Mcqs = [
    {
        id: "s2-arr-access",
        kind: "mcq",
        prompt: "Reading `array[i]` by index in a dynamic array is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "Elements are contiguous, so the address is computed directly — constant time."
    },
    {
        id: "s2-arr-pushfront",
        kind: "mcq",
        prompt: "Inserting a new element at the front of an array (shifting the rest) is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "Every existing element must move over by one, so it's linear in the length."
    },
    {
        id: "s2-str-immut",
        kind: "mcq",
        prompt: "Building a string by `result += piece` inside a loop over n pieces is, in the worst case:",
        options: [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(1)"
        ],
        answerIndex: 2,
        explanation: "Strings are immutable; each `+=` copies the growing result, summing to n² work."
    },
    {
        id: "s2-str-index",
        kind: "mcq",
        prompt: "Reading a single character `s[i]` from a string is:",
        options: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "Character access by index is constant time."
    },
    {
        id: "s2-ll-access",
        kind: "mcq",
        prompt: "Getting the i-th element of a singly linked list requires:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "You must follow next-pointers from the head, up to n steps."
    },
    {
        id: "s2-ll-prepend",
        kind: "mcq",
        prompt: "Adding a node at the head of a linked list (with a head pointer) is:",
        options: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "You create one node and repoint head — constant time, no shifting."
    }
];
const stage2Batch1Modules = [
    {
        id: "m-ds-arrays",
        stageId: S,
        title: "Arrays & Dynamic Arrays",
        kind: "buildLab",
        summary: "How growable arrays really work — contiguous storage, O(1) access, and the cost of shifting.",
        lessonSections: [
            {
                heading: "Contiguous storage",
                body: `An array stores elements back-to-back in memory, so element \`i\` is found by arithmetic — **O(1)** access. A *dynamic* array (JS's \`Array\`, Python's \`list\`) hides a fixed-capacity buffer that is reallocated (usually doubled) when it fills up.

\`\`\`js
const a = [10, 20, 30];
console.log(a[1]);        // 20  — direct index, O(1)
a.push(40);               // amortized O(1)
console.log(a.length);    // 4
\`\`\``
            },
            {
                heading: "What's cheap, what's not",
                body: `Index access and appending at the end are cheap. Inserting or deleting at the **front or middle** shifts everything after it — **O(n)**.

**Recognition cues:** need positional access → array. Constant inserts/removes at the front → consider a linked list or deque instead. Now build a dynamic array yourself in the lab below, then take on the drills.`
            }
        ],
        guidedExampleProblemId: "a-move-zeroes",
        drillProblemIds: [
            "a-move-zeroes",
            "a-max-ones"
        ],
        testPoolProblemIds: [
            "a-dedupe-sorted",
            "a-plus-one"
        ],
        complexityQuestionIds: [
            "s2-arr-access",
            "s2-arr-pushfront"
        ],
        buildLab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arraysLab"],
        badgeId: "badge-ds-arrays",
        prerequisiteModuleIds: []
    },
    {
        id: "m-ds-strings",
        stageId: S,
        title: "Strings",
        kind: "buildLab",
        summary: "Immutable sequences of characters — why building them carelessly is quadratic.",
        lessonSections: [
            {
                heading: "Immutability changes the cost",
                body: `In JS a string can't be modified in place. Every \`+=\` builds a brand-new string, so concatenating in a loop can silently become **O(n²)**. Collect pieces in an array and \`join\` once instead.

\`\`\`js
const parts = [];
for (let i = 0; i < 5; i++) parts.push("x" + i);
console.log(parts.join("-")); // x0-x1-x2-x3-x4 — one allocation
\`\`\``
            },
            {
                heading: "Everyday string tools",
                body: `Index access \`s[i]\` and \`.length\` are O(1); \`split\`, \`slice\`, and \`indexOf\` are O(n). Character counting with a map underpins anagrams, uniqueness, and frequency problems.

**Recognition cues:** "same letters?" → counts. "balanced/nested?" → a stack. Build a StringBuilder in the lab, then try the drills.`
            }
        ],
        guidedExampleProblemId: "s-is-anagram",
        drillProblemIds: [
            "s-is-anagram",
            "s-first-unique"
        ],
        testPoolProblemIds: [
            "s-valid-parens",
            "s-count-segments"
        ],
        complexityQuestionIds: [
            "s2-str-immut",
            "s2-str-index"
        ],
        buildLab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringsLab"],
        badgeId: "badge-ds-strings",
        prerequisiteModuleIds: [
            "m-ds-arrays"
        ]
    },
    {
        id: "m-ds-linked-lists",
        stageId: S,
        title: "Linked Lists",
        kind: "buildLab",
        summary: "Nodes joined by pointers — O(1) ends, O(n) indexing, and the reversal you'll reuse forever.",
        lessonSections: [
            {
                heading: "Nodes and pointers",
                body: `A linked list chains nodes, each holding a value and a pointer to the next. There's no contiguous block, so **indexing is O(n)** — you walk from the head. In exchange, inserting or removing at a known position is **O(1)** (just repoint).

\`\`\`js
// A three-node list built by hand.
const list = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
let cur = list, out = [];
while (cur) { out.push(cur.value); cur = cur.next; }
console.log(out); // [1, 2, 3]
\`\`\``
            },
            {
                heading: "The reversal pattern",
                body: `Reversing a list — repoint each node to its predecessor — is a building block for countless problems. In these drills the list is passed as an array of values so you can focus on the logic.

**Recognition cues:** constant-time insert/remove at a moving position, or "reverse / detect a cycle / merge" → linked list. Build one in the lab, then tackle the drills.`
            }
        ],
        guidedExampleProblemId: "ll-reverse",
        drillProblemIds: [
            "ll-reverse",
            "ll-middle"
        ],
        testPoolProblemIds: [
            "ll-remove-value",
            "ll-nth-from-end"
        ],
        complexityQuestionIds: [
            "s2-ll-access",
            "s2-ll-prepend"
        ],
        buildLab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkedListLab"],
        badgeId: "badge-ds-linked-lists",
        prerequisiteModuleIds: [
            "m-ds-arrays"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage2/content2.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stage2Batch2Mcqs",
    ()=>stage2Batch2Mcqs,
    "stage2Batch2Modules",
    ()=>stage2Batch2Modules,
    "stage2Batch2Problems",
    ()=>stage2Batch2Problems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage2/labs2.ts [app-client] (ecmascript)");
;
;
const S = "dsa-s2";
const drafts = [
    /* -------------------- Stacks -------------------- */ {
        id: "st-remove-adjacent",
        slug: "remove-adjacent-duplicates",
        title: "Remove Adjacent Duplicates",
        difficulty: "medium",
        statement: "Repeatedly remove pairs of equal adjacent characters until none remain, and return the resulting string.",
        examples: [
            {
                input: '"abbaca"',
                output: '"ca"',
                explanation: "Remove bb → aaca, then aa → ca."
            },
            {
                input: '"azxxzy"',
                output: '"ay"'
            },
            {
                input: '""',
                output: '""'
            }
        ],
        constraints: [
            "0 <= s.length <= 10000"
        ],
        functionName: "removeAdjacentDuplicates",
        starter: {
            js: "function removeAdjacentDuplicates(s) {\n  // Collapse adjacent equal pairs repeatedly.\n}\n",
            ts: "function removeAdjacentDuplicates(s: string): string {\n  // Collapse adjacent equal pairs repeatedly.\n  return '';\n}\n"
        },
        visible: [
            {
                args: [
                    "abbaca"
                ],
                expected: "ca"
            },
            {
                args: [
                    "azxxzy"
                ],
                expected: "ay"
            },
            {
                args: [
                    ""
                ],
                expected: ""
            }
        ],
        hidden: [
            {
                args: [
                    "aa"
                ],
                expected: ""
            },
            {
                args: [
                    "abc"
                ],
                expected: "abc"
            },
            {
                args: [
                    "aaa"
                ],
                expected: "a"
            },
            {
                args: [
                    "abba"
                ],
                expected: ""
            },
            {
                args: [
                    "aabb"
                ],
                expected: ""
            },
            {
                args: [
                    "abccba"
                ],
                expected: ""
            }
        ],
        hints: [
            "When you meet a character equal to the one just before it, both should disappear.",
            "Push characters on a stack; if the incoming character equals the top, pop instead of pushing.",
            "for ch: if stack top === ch, pop; else push ch. Then join the stack."
        ],
        solutions: [
            {
                label: "Stack",
                approach: "Cancel a character against the stack top when they match.",
                js: "function removeAdjacentDuplicates(s) {\n  const stack = [];\n  for (const ch of s) {\n    if (stack.length && stack[stack.length - 1] === ch) stack.pop();\n    else stack.push(ch);\n  }\n  return stack.join('');\n}\n",
                ts: "function removeAdjacentDuplicates(s: string): string {\n  const stack: string[] = [];\n  for (const ch of s) {\n    if (stack.length && stack[stack.length - 1] === ch) stack.pop();\n    else stack.push(ch);\n  }\n  return stack.join('');\n}\n",
                commentedCode: {
                    js: "function removeAdjacentDuplicates(s) {\n  // The stack holds characters that have not been cancelled.\n  const stack = [];\n  for (const ch of s) {\n    // A matching neighbor forms a pair, so remove the earlier character.\n    if (stack.length && stack[stack.length - 1] === ch) stack.pop();\n    // Otherwise this character may match a later one.\n    else stack.push(ch);\n  }\n  // The remaining stack is the fully reduced string.\n  return stack.join('');\n}\n",
                    ts: "function removeAdjacentDuplicates(s: string): string {\n  // The stack holds characters that have not been cancelled.\n  const stack: string[] = [];\n  for (const ch of s) {\n    // A matching neighbor forms a pair, so remove the earlier character.\n    if (stack.length && stack[stack.length - 1] === ch) stack.pop();\n    // Otherwise this character may match a later one.\n    else stack.push(ch);\n  }\n  // The remaining stack is the fully reduced string.\n  return stack.join('');\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Repeated replace",
                approach: "Delete any doubled character until the string stops changing.",
                js: "function removeAdjacentDuplicates(s) {\n  let prev;\n  do { prev = s; s = s.replace(/(.)\\1/, ''); } while (s !== prev);\n  return s;\n}\n",
                ts: "function removeAdjacentDuplicates(s: string): string {\n  let prev: string;\n  do { prev = s; s = s.replace(/(.)\\1/, ''); } while (s !== prev);\n  return s;\n}\n",
                commentedCode: {
                    js: "function removeAdjacentDuplicates(s) {\n  let prev;\n  do {\n    // Remember the current text so we can detect when no pair was removed.\n    prev = s;\n    // Remove the first doubled character; later passes expose and remove new pairs.\n    s = s.replace(/(.)\\1/, '');\n  } while (s !== prev);\n  return s;\n}\n",
                    ts: "function removeAdjacentDuplicates(s: string): string {\n  let prev: string;\n  do {\n    // Remember the current text so we can detect when no pair was removed.\n    prev = s;\n    // Remove the first doubled character; later passes expose and remove new pairs.\n    s = s.replace(/(.)\\1/, '');\n  } while (s !== prev);\n  return s;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "st-max-depth",
        slug: "max-nesting-depth",
        title: "Max Nesting Depth",
        difficulty: "easy",
        statement: "Return the deepest level of nested parentheses in the string. Non-parenthesis characters are ignored.",
        examples: [
            {
                input: '"(())"',
                output: "2"
            },
            {
                input: '"()()"',
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
        functionName: "maxDepth",
        starter: {
            js: "function maxDepth(s) {\n  // Deepest parenthesis nesting.\n}\n",
            ts: "function maxDepth(s: string): number {\n  // Deepest parenthesis nesting.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "(())"
                ],
                expected: 2
            },
            {
                args: [
                    "()()"
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
                    "("
                ],
                expected: 1
            },
            {
                args: [
                    "((()))"
                ],
                expected: 3
            },
            {
                args: [
                    "(a(b)c)"
                ],
                expected: 2
            },
            {
                args: [
                    "((a))"
                ],
                expected: 2
            },
            {
                args: [
                    "(())()"
                ],
                expected: 2
            },
            {
                args: [
                    "a"
                ],
                expected: 0
            }
        ],
        hints: [
            "The current depth rises on '(' and falls on ')'.",
            "Track a running depth and remember the largest value it reaches.",
            "for ch: if '(' depth++ and update best; if ')' depth--."
        ],
        solutions: [
            {
                label: "Running depth",
                approach: "Increase on open, decrease on close, track the maximum.",
                js: "function maxDepth(s) {\n  let depth = 0, best = 0;\n  for (const ch of s) {\n    if (ch === '(') { depth++; if (depth > best) best = depth; }\n    else if (ch === ')') depth--;\n  }\n  return best;\n}\n",
                ts: "function maxDepth(s: string): number {\n  let depth = 0, best = 0;\n  for (const ch of s) {\n    if (ch === '(') { depth++; if (depth > best) best = depth; }\n    else if (ch === ')') depth--;\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function maxDepth(s) {\n  // Depth counts unmatched opening parentheses; best records its peak.\n  let depth = 0, best = 0;\n  for (const ch of s) {\n    // Entering a nested group raises the current depth.\n    if (ch === '(') { depth++; if (depth > best) best = depth; }\n    // A closing parenthesis leaves the current group.\n    else if (ch === ')') depth--;\n  }\n  return best;\n}\n",
                    ts: "function maxDepth(s: string): number {\n  // Depth counts unmatched opening parentheses; best records its peak.\n  let depth = 0, best = 0;\n  for (const ch of s) {\n    // Entering a nested group raises the current depth.\n    if (ch === '(') { depth++; if (depth > best) best = depth; }\n    // A closing parenthesis leaves the current group.\n    else if (ch === ')') depth--;\n  }\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Stack height",
                approach: "Push on open, pop on close; the peak stack height is the answer.",
                js: "function maxDepth(s) {\n  const stack = [];\n  let best = 0;\n  for (const ch of s) {\n    if (ch === '(') { stack.push(ch); if (stack.length > best) best = stack.length; }\n    else if (ch === ')') stack.pop();\n  }\n  return best;\n}\n",
                ts: "function maxDepth(s: string): number {\n  const stack: string[] = [];\n  let best = 0;\n  for (const ch of s) {\n    if (ch === '(') { stack.push(ch); if (stack.length > best) best = stack.length; }\n    else if (ch === ')') stack.pop();\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: "function maxDepth(s) {\n  // Each stack entry represents one currently open group.\n  const stack = [];\n  let best = 0;\n  for (const ch of s) {\n    // Opening a group grows the stack and may set a new maximum.\n    if (ch === '(') { stack.push(ch); if (stack.length > best) best = stack.length; }\n    // Closing a group removes its matching opening parenthesis.\n    else if (ch === ')') stack.pop();\n  }\n  return best;\n}\n",
                    ts: "function maxDepth(s: string): number {\n  // Each stack entry represents one currently open group.\n  const stack: string[] = [];\n  let best = 0;\n  for (const ch of s) {\n    // Opening a group grows the stack and may set a new maximum.\n    if (ch === '(') { stack.push(ch); if (stack.length > best) best = stack.length; }\n    // Closing a group removes its matching opening parenthesis.\n    else if (ch === ')') stack.pop();\n  }\n  return best;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "st-next-greater",
        slug: "next-greater-element",
        title: "Next Greater Element",
        difficulty: "medium",
        statement: "For each value, return the first value to its right that is strictly greater, or -1 if none exists.",
        examples: [
            {
                input: "[2,1,3]",
                output: "[3,3,-1]"
            },
            {
                input: "[5,4,3]",
                output: "[-1,-1,-1]"
            },
            {
                input: "[1,2,3]",
                output: "[2,3,-1]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000"
        ],
        functionName: "nextGreater",
        starter: {
            js: "function nextGreater(nums) {\n  // For each element, the next strictly greater to its right, or -1.\n}\n",
            ts: "function nextGreater(nums: number[]): number[] {\n  // For each element, the next strictly greater to its right, or -1.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ]
                ],
                expected: [
                    3,
                    3,
                    -1
                ]
            },
            {
                args: [
                    [
                        5,
                        4,
                        3
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
                        2,
                        3
                    ]
                ],
                expected: [
                    2,
                    3,
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
                        3,
                        1,
                        2
                    ]
                ],
                expected: [
                    -1,
                    2,
                    -1
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
                    3,
                    4,
                    4,
                    -1
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
                        4,
                        5,
                        2,
                        10
                    ]
                ],
                expected: [
                    5,
                    10,
                    10,
                    -1
                ]
            }
        ],
        hints: [
            "Brute force rescans the right side for each element — can a stack remember 'still waiting for a bigger value'?",
            "Keep a stack of indices whose answer is unknown; when a bigger value arrives it resolves everything smaller on top.",
            "For each i, while stack top's value < nums[i], pop and set its answer to nums[i]; then push i."
        ],
        solutions: [
            {
                label: "Monotonic stack",
                approach: "Resolve waiting indices whenever a larger value appears.",
                js: "function nextGreater(nums) {\n  const res = new Array(nums.length).fill(-1);\n  const stack = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {\n      res[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}\n",
                ts: "function nextGreater(nums: number[]): number[] {\n  const res = new Array(nums.length).fill(-1);\n  const stack: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (stack.length && nums[stack[stack.length - 1]!]! < nums[i]!) {\n      res[stack.pop()!] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: "function nextGreater(nums) {\n  // -1 remains for any index that never finds a greater value.\n  const res = new Array(nums.length).fill(-1);\n  // Store unresolved indices in decreasing value order.\n  const stack = [];\n  for (let i = 0; i < nums.length; i++) {\n    // The current value is the first greater value for every smaller index on top.\n    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {\n      res[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}\n",
                    ts: "function nextGreater(nums: number[]): number[] {\n  // -1 remains for any index that never finds a greater value.\n  const res = new Array(nums.length).fill(-1);\n  // Store unresolved indices in decreasing value order.\n  const stack: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    // The current value is the first greater value for every smaller index on top.\n    while (stack.length && nums[stack[stack.length - 1]!]! < nums[i]!) {\n      res[stack.pop()!] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Brute force",
                approach: "For each element scan rightward for the first larger value.",
                js: "function nextGreater(nums) {\n  const res = [];\n  for (let i = 0; i < nums.length; i++) {\n    let found = -1;\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[j] > nums[i]) { found = nums[j]; break; }\n    }\n    res.push(found);\n  }\n  return res;\n}\n",
                ts: "function nextGreater(nums: number[]): number[] {\n  const res: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    let found = -1;\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[j]! > nums[i]!) { found = nums[j]!; break; }\n    }\n    res.push(found);\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: "function nextGreater(nums) {\n  const res = [];\n  for (let i = 0; i < nums.length; i++) {\n    // Assume no greater value exists until the rightward scan finds one.\n    let found = -1;\n    for (let j = i + 1; j < nums.length; j++) {\n      // Stop at the first greater value, because nearest on the right is required.\n      if (nums[j] > nums[i]) { found = nums[j]; break; }\n    }\n    res.push(found);\n  }\n  return res;\n}\n",
                    ts: "function nextGreater(nums: number[]): number[] {\n  const res: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    // Assume no greater value exists until the rightward scan finds one.\n    let found = -1;\n    for (let j = i + 1; j < nums.length; j++) {\n      // Stop at the first greater value, because nearest on the right is required.\n      if (nums[j]! > nums[i]!) { found = nums[j]!; break; }\n    }\n    res.push(found);\n  }\n  return res;\n}\n"
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "st-backspace",
        slug: "backspace-compare",
        title: "Backspace Compare",
        difficulty: "medium",
        statement: "Two strings are typed where '#' means backspace. Return `true` if they produce the same final text.",
        examples: [
            {
                input: '"ab#c", "ad#c"',
                output: "true",
                explanation: "Both become 'ac'."
            },
            {
                input: '"a#c", "b"',
                output: "false"
            },
            {
                input: '"", ""',
                output: "true"
            }
        ],
        constraints: [
            "0 <= a.length, b.length <= 10000",
            "'#' is a backspace"
        ],
        functionName: "backspaceCompare",
        starter: {
            js: "function backspaceCompare(a, b) {\n  // True if both strings resolve to the same text.\n}\n",
            ts: "function backspaceCompare(a: string, b: string): boolean {\n  // True if both strings resolve to the same text.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    "ab#c",
                    "ad#c"
                ],
                expected: true
            },
            {
                args: [
                    "a#c",
                    "b"
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
                    "#",
                    ""
                ],
                expected: true
            },
            {
                args: [
                    "a#",
                    "b#"
                ],
                expected: true
            },
            {
                args: [
                    "xy#z",
                    "xzz#"
                ],
                expected: true
            },
            {
                args: [
                    "a#b#",
                    ""
                ],
                expected: true
            },
            {
                args: [
                    "ab",
                    "a#b"
                ],
                expected: false
            },
            {
                args: [
                    "a##c",
                    "#a#c"
                ],
                expected: true
            }
        ],
        hints: [
            "Simulate the typing: a normal character is added, a '#' deletes the most recent character.",
            "Build each final string with a stack, then compare the two results.",
            "build(s) = for ch: ch === '#' ? stack.pop() : stack.push(ch); return stack.join('')."
        ],
        solutions: [
            {
                label: "Build with a stack",
                approach: "Resolve each string to its final text, then compare.",
                js: "function backspaceCompare(a, b) {\n  const build = (s) => {\n    const stack = [];\n    for (const ch of s) { if (ch === '#') stack.pop(); else stack.push(ch); }\n    return stack.join('');\n  };\n  return build(a) === build(b);\n}\n",
                ts: "function backspaceCompare(a: string, b: string): boolean {\n  const build = (s: string) => {\n    const stack: string[] = [];\n    for (const ch of s) { if (ch === '#') stack.pop(); else stack.push(ch); }\n    return stack.join('');\n  };\n  return build(a) === build(b);\n}\n",
                commentedCode: {
                    js: "function backspaceCompare(a, b) {\n  const build = (s) => {\n    // The stack simulates the characters currently visible in the editor.\n    const stack = [];\n    for (const ch of s) {\n      // Backspace removes the latest visible character; normal input appends one.\n      if (ch === '#') stack.pop(); else stack.push(ch);\n    }\n    return stack.join('');\n  };\n  // The typed strings are equivalent only when their resolved text matches.\n  return build(a) === build(b);\n}\n",
                    ts: "function backspaceCompare(a: string, b: string): boolean {\n  const build = (s: string) => {\n    // The stack simulates the characters currently visible in the editor.\n    const stack: string[] = [];\n    for (const ch of s) {\n      // Backspace removes the latest visible character; normal input appends one.\n      if (ch === '#') stack.pop(); else stack.push(ch);\n    }\n    return stack.join('');\n  };\n  // The typed strings are equivalent only when their resolved text matches.\n  return build(a) === build(b);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Reduce",
                approach: "Fold each string into its resolved characters.",
                js: "function backspaceCompare(a, b) {\n  const build = (s) => s.split('').reduce((acc, ch) => {\n    if (ch === '#') acc.pop(); else acc.push(ch);\n    return acc;\n  }, []).join('');\n  return build(a) === build(b);\n}\n",
                ts: "function backspaceCompare(a: string, b: string): boolean {\n  const build = (s: string) => s.split('').reduce<string[]>((acc, ch) => {\n    if (ch === '#') acc.pop(); else acc.push(ch);\n    return acc;\n  }, []).join('');\n  return build(a) === build(b);\n}\n",
                commentedCode: {
                    js: "function backspaceCompare(a, b) {\n  // Fold each keystroke into an array representing the final text.\n  const build = (s) => s.split('').reduce((acc, ch) => {\n    // Delete on '#'; otherwise retain the typed character.\n    if (ch === '#') acc.pop(); else acc.push(ch);\n    return acc;\n  }, []).join('');\n  return build(a) === build(b);\n}\n",
                    ts: "function backspaceCompare(a: string, b: string): boolean {\n  // Fold each keystroke into an array representing the final text.\n  const build = (s: string) => s.split('').reduce<string[]>((acc, ch) => {\n    // Delete on '#'; otherwise retain the typed character.\n    if (ch === '#') acc.pop(); else acc.push(ch);\n    return acc;\n  }, []).join('');\n  return build(a) === build(b);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* -------------------- Queues & Deques -------------------- */ {
        id: "q-generate-binary",
        slug: "generate-binary",
        title: "Generate Binary Numbers",
        difficulty: "medium",
        statement: "Return the binary representations of the numbers 1 through `n` (as strings), in order.",
        examples: [
            {
                input: "3",
                output: '["1","10","11"]'
            },
            {
                input: "1",
                output: '["1"]'
            },
            {
                input: "0",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= n <= 10000"
        ],
        functionName: "generateBinary",
        starter: {
            js: "function generateBinary(n) {\n  // Binary strings for 1..n.\n}\n",
            ts: "function generateBinary(n: number): string[] {\n  // Binary strings for 1..n.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    3
                ],
                expected: [
                    "1",
                    "10",
                    "11"
                ]
            },
            {
                args: [
                    1
                ],
                expected: [
                    "1"
                ]
            },
            {
                args: [
                    0
                ],
                expected: []
            }
        ],
        hidden: [
            {
                args: [
                    2
                ],
                expected: [
                    "1",
                    "10"
                ]
            },
            {
                args: [
                    4
                ],
                expected: [
                    "1",
                    "10",
                    "11",
                    "100"
                ]
            },
            {
                args: [
                    5
                ],
                expected: [
                    "1",
                    "10",
                    "11",
                    "100",
                    "101"
                ]
            },
            {
                args: [
                    6
                ],
                expected: [
                    "1",
                    "10",
                    "11",
                    "100",
                    "101",
                    "110"
                ]
            },
            {
                args: [
                    7
                ],
                expected: [
                    "1",
                    "10",
                    "11",
                    "100",
                    "101",
                    "110",
                    "111"
                ]
            },
            {
                args: [
                    8
                ],
                expected: [
                    "1",
                    "10",
                    "11",
                    "100",
                    "101",
                    "110",
                    "111",
                    "1000"
                ]
            }
        ],
        hints: [
            "Each binary number's children are itself with a '0' or '1' appended — a breadth-first shape.",
            "Seed a queue with '1'; dequeue one, record it, enqueue that string + '0' and + '1'.",
            "Or simply convert each i to base 2 with i.toString(2)."
        ],
        solutions: [
            {
                label: "Queue (BFS)",
                approach: "Generate numbers level by level using a queue.",
                js: "function generateBinary(n) {\n  const out = [];\n  const queue = ['1'];\n  for (let i = 0; i < n; i++) {\n    const cur = queue.shift();\n    out.push(cur);\n    queue.push(cur + '0', cur + '1');\n  }\n  return out;\n}\n",
                ts: "function generateBinary(n: number): string[] {\n  const out: string[] = [];\n  const queue: string[] = ['1'];\n  for (let i = 0; i < n; i++) {\n    const cur = queue.shift()!;\n    out.push(cur);\n    queue.push(cur + '0', cur + '1');\n  }\n  return out;\n}\n",
                commentedCode: {
                    js: "function generateBinary(n) {\n  const out = [];\n  // Start the breadth-first sequence with the representation of one.\n  const queue = ['1'];\n  for (let i = 0; i < n; i++) {\n    // The queue front is the next binary number in numeric order.\n    const cur = queue.shift();\n    out.push(cur);\n    // Appending 0 and 1 creates this binary prefix's two successors.\n    queue.push(cur + '0', cur + '1');\n  }\n  return out;\n}\n",
                    ts: "function generateBinary(n: number): string[] {\n  const out: string[] = [];\n  // Start the breadth-first sequence with the representation of one.\n  const queue: string[] = ['1'];\n  for (let i = 0; i < n; i++) {\n    // The queue front is the next binary number in numeric order.\n    const cur = queue.shift()!;\n    out.push(cur);\n    // Appending 0 and 1 creates this binary prefix's two successors.\n    queue.push(cur + '0', cur + '1');\n  }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Base conversion",
                approach: "Convert each integer directly to base 2.",
                js: "function generateBinary(n) {\n  const out = [];\n  for (let i = 1; i <= n; i++) out.push(i.toString(2));\n  return out;\n}\n",
                ts: "function generateBinary(n: number): string[] {\n  const out: string[] = [];\n  for (let i = 1; i <= n; i++) out.push(i.toString(2));\n  return out;\n}\n",
                commentedCode: {
                    js: "function generateBinary(n) {\n  const out = [];\n  // Convert every integer in the requested inclusive range directly to base two.\n  for (let i = 1; i <= n; i++) out.push(i.toString(2));\n  return out;\n}\n",
                    ts: "function generateBinary(n: number): string[] {\n  const out: string[] = [];\n  // Convert every integer in the requested inclusive range directly to base two.\n  for (let i = 1; i <= n; i++) out.push(i.toString(2));\n  return out;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "q-reverse-first-k",
        slug: "reverse-first-k",
        title: "Reverse First K",
        difficulty: "easy",
        statement: "Return the list with the first `k` elements reversed and the rest left in place.",
        examples: [
            {
                input: "[1,2,3,4,5], 2",
                output: "[2,1,3,4,5]"
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
            "0 <= values.length <= 10000",
            "0 <= k <= values.length"
        ],
        functionName: "reverseFirstK",
        starter: {
            js: "function reverseFirstK(values, k) {\n  // Reverse the first k elements.\n}\n",
            ts: "function reverseFirstK(values: number[], k: number): number[] {\n  // Reverse the first k elements.\n  return [];\n}\n"
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
                    3,
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
                    8,
                    9,
                    7
                ]
            }
        ],
        hints: [
            "Split the list at index k, reverse the front, and rejoin.",
            "Use slice to isolate the first k, reverse that copy, and concat the remainder.",
            "return values.slice(0, k).reverse().concat(values.slice(k))."
        ],
        solutions: [
            {
                label: "Slice, reverse, concat",
                approach: "Reverse the front slice and append the untouched tail.",
                js: "function reverseFirstK(values, k) {\n  return values.slice(0, k).reverse().concat(values.slice(k));\n}\n",
                ts: "function reverseFirstK(values: number[], k: number): number[] {\n  return values.slice(0, k).reverse().concat(values.slice(k));\n}\n",
                commentedCode: {
                    js: "function reverseFirstK(values, k) {\n  // Reverse a copy of the first k values, then append the untouched suffix.\n  return values.slice(0, k).reverse().concat(values.slice(k));\n}\n",
                    ts: "function reverseFirstK(values: number[], k: number): number[] {\n  // Reverse a copy of the first k values, then append the untouched suffix.\n  return values.slice(0, k).reverse().concat(values.slice(k));\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Two-pointer swap",
                approach: "Swap symmetric positions within the first k on a copy.",
                js: "function reverseFirstK(values, k) {\n  const out = [...values];\n  let i = 0, j = k - 1;\n  while (i < j) { [out[i], out[j]] = [out[j], out[i]]; i++; j--; }\n  return out;\n}\n",
                ts: "function reverseFirstK(values: number[], k: number): number[] {\n  const out = [...values];\n  let i = 0, j = k - 1;\n  while (i < j) { [out[i], out[j]] = [out[j]!, out[i]!]; i++; j--; }\n  return out;\n}\n",
                commentedCode: {
                    js: "function reverseFirstK(values, k) {\n  // Work on a copy so the input array remains unchanged.\n  const out = [...values];\n  let i = 0, j = k - 1;\n  // Swap mirrored positions only within the first k elements.\n  while (i < j) { [out[i], out[j]] = [out[j], out[i]]; i++; j--; }\n  return out;\n}\n",
                    ts: "function reverseFirstK(values: number[], k: number): number[] {\n  // Work on a copy so the input array remains unchanged.\n  const out = [...values];\n  let i = 0, j = k - 1;\n  // Swap mirrored positions only within the first k elements.\n  while (i < j) { [out[i], out[j]] = [out[j]!, out[i]!]; i++; j--; }\n  return out;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "q-is-palindrome",
        slug: "deque-palindrome",
        title: "Palindrome Check",
        difficulty: "medium",
        statement: "Return `true` if the list of numbers reads the same forwards and backwards.",
        examples: [
            {
                input: "[1,2,1]",
                output: "true"
            },
            {
                input: "[1,2,3]",
                output: "false"
            },
            {
                input: "[]",
                output: "true"
            }
        ],
        constraints: [
            "0 <= values.length <= 10000"
        ],
        functionName: "isPalindromeDeque",
        starter: {
            js: "function isPalindromeDeque(values) {\n  // True if the sequence is a palindrome.\n}\n",
            ts: "function isPalindromeDeque(values: number[]): boolean {\n  // True if the sequence is a palindrome.\n  return false;\n}\n"
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
                        3
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
                        3,
                        3,
                        1
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
            "Compare the two ends of a deque, working inward.",
            "Use two indices from the front and back; every matched pair must be equal.",
            "let i=0, j=n-1; while (i<j) { if (values[i]!==values[j]) return false; i++; j--; }"
        ],
        solutions: [
            {
                label: "Two ends inward",
                approach: "Compare front and back, converging to the middle.",
                js: "function isPalindromeDeque(values) {\n  let i = 0, j = values.length - 1;\n  while (i < j) {\n    if (values[i] !== values[j]) return false;\n    i++; j--;\n  }\n  return true;\n}\n",
                ts: "function isPalindromeDeque(values: number[]): boolean {\n  let i = 0, j = values.length - 1;\n  while (i < j) {\n    if (values[i] !== values[j]) return false;\n    i++; j--;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isPalindromeDeque(values) {\n  // Begin at the two ends of the sequence.\n  let i = 0, j = values.length - 1;\n  while (i < j) {\n    // One unequal mirrored pair proves the sequence is not a palindrome.\n    if (values[i] !== values[j]) return false;\n    // Move inward to compare the next pair.\n    i++; j--;\n  }\n  return true;\n}\n",
                    ts: "function isPalindromeDeque(values: number[]): boolean {\n  // Begin at the two ends of the sequence.\n  let i = 0, j = values.length - 1;\n  while (i < j) {\n    // One unequal mirrored pair proves the sequence is not a palindrome.\n    if (values[i] !== values[j]) return false;\n    // Move inward to compare the next pair.\n    i++; j--;\n  }\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Reverse and compare",
                approach: "A palindrome equals its own reverse.",
                js: "function isPalindromeDeque(values) {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
                ts: "function isPalindromeDeque(values: number[]): boolean {\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
                commentedCode: {
                    js: "function isPalindromeDeque(values) {\n  // A palindrome reads identically after a copied sequence is reversed.\n  return values.join(',') === [...values].reverse().join(',');\n}\n",
                    ts: "function isPalindromeDeque(values: number[]): boolean {\n  // A palindrome reads identically after a copied sequence is reversed.\n  return values.join(',') === [...values].reverse().join(',');\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "q-max-sliding-window",
        slug: "max-sliding-window",
        title: "Sliding Window Maximum",
        difficulty: "medium",
        statement: "Return the maximum of every contiguous window of size `k` as the window slides across the list.",
        examples: [
            {
                input: "[1,3,-1,-3,5,3,6,7], 3",
                output: "[3,3,5,5,6,7]"
            },
            {
                input: "[1], 1",
                output: "[1]"
            },
            {
                input: "[9,8,7], 2",
                output: "[9,8]"
            }
        ],
        constraints: [
            "1 <= k <= values.length <= 10000"
        ],
        functionName: "maxSlidingWindow",
        starter: {
            js: "function maxSlidingWindow(nums, k) {\n  // Maximum of each window of size k.\n}\n",
            ts: "function maxSlidingWindow(nums: number[], k: number): number[] {\n  // Maximum of each window of size k.\n  return [];\n}\n"
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
                    3,
                    3,
                    5,
                    5,
                    6,
                    7
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
                    2
                ],
                expected: [
                    9,
                    8
                ]
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
                    2,
                    3,
                    4
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
                    2
                ],
                expected: [
                    4,
                    3,
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
                        3,
                        1,
                        2,
                        0,
                        5
                    ],
                    3
                ],
                expected: [
                    3,
                    3,
                    2,
                    5
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
                        -1
                    ],
                    1
                ],
                expected: [
                    1,
                    -1
                ]
            }
        ],
        hints: [
            "Recomputing each window's max is O(nk). A deque of 'candidates' can do it in O(n).",
            "Keep indices in a deque in decreasing value order; the front is always the current window's max.",
            "Pop smaller values from the back before pushing i; drop the front if it left the window; record nums[front]."
        ],
        solutions: [
            {
                label: "Monotonic deque",
                approach: "Maintain a decreasing deque of indices; its front is the window max.",
                js: "function maxSlidingWindow(nums, k) {\n  const res = [];\n  const dq = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();\n    dq.push(i);\n    if (dq[0] <= i - k) dq.shift();\n    if (i >= k - 1) res.push(nums[dq[0]]);\n  }\n  return res;\n}\n",
                ts: "function maxSlidingWindow(nums: number[], k: number): number[] {\n  const res: number[] = [];\n  const dq: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && nums[dq[dq.length - 1]!]! <= nums[i]!) dq.pop();\n    dq.push(i);\n    if (dq[0]! <= i - k) dq.shift();\n    if (i >= k - 1) res.push(nums[dq[0]!]!);\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: "function maxSlidingWindow(nums, k) {\n  const res = [];\n  // Store candidate indices from greatest value at the front to smallest at the back.\n  const dq = [];\n  for (let i = 0; i < nums.length; i++) {\n    // Smaller trailing values can never win while the current value remains in the window.\n    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();\n    dq.push(i);\n    // Remove the front index once it falls outside the current window.\n    if (dq[0] <= i - k) dq.shift();\n    // The front now identifies the maximum of each complete window.\n    if (i >= k - 1) res.push(nums[dq[0]]);\n  }\n  return res;\n}\n",
                    ts: "function maxSlidingWindow(nums: number[], k: number): number[] {\n  const res: number[] = [];\n  // Store candidate indices from greatest value at the front to smallest at the back.\n  const dq: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    // Smaller trailing values can never win while the current value remains in the window.\n    while (dq.length && nums[dq[dq.length - 1]!]! <= nums[i]!) dq.pop();\n    dq.push(i);\n    // Remove the front index once it falls outside the current window.\n    if (dq[0]! <= i - k) dq.shift();\n    // The front now identifies the maximum of each complete window.\n    if (i >= k - 1) res.push(nums[dq[0]!]!);\n  }\n  return res;\n}\n"
                },
                time: "O(n)",
                space: "O(k)"
            },
            {
                label: "Window scan",
                approach: "Take the max of each window directly.",
                js: "function maxSlidingWindow(nums, k) {\n  const res = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    res.push(Math.max(...nums.slice(i, i + k)));\n  }\n  return res;\n}\n",
                ts: "function maxSlidingWindow(nums: number[], k: number): number[] {\n  const res: number[] = [];\n  for (let i = 0; i + k <= nums.length; i++) {\n    res.push(Math.max(...nums.slice(i, i + k)));\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: "function maxSlidingWindow(nums, k) {\n  const res = [];\n  // Start each window only where k elements remain.\n  for (let i = 0; i + k <= nums.length; i++) {\n    // Copy the current window and calculate its maximum directly.\n    res.push(Math.max(...nums.slice(i, i + k)));\n  }\n  return res;\n}\n",
                    ts: "function maxSlidingWindow(nums: number[], k: number): number[] {\n  const res: number[] = [];\n  // Start each window only where k elements remain.\n  for (let i = 0; i + k <= nums.length; i++) {\n    // Copy the current window and calculate its maximum directly.\n    res.push(Math.max(...nums.slice(i, i + k)));\n  }\n  return res;\n}\n"
                },
                time: "O(n·k)",
                space: "O(n)"
            }
        ]
    },
    /* -------------------- Hash Tables -------------------- */ {
        id: "h-two-sum-indices",
        slug: "two-sum-indices",
        title: "Two Sum (Indices)",
        difficulty: "medium",
        statement: "Return the indices `[i, j]` (with i < j) of two values that add up to `target`, or an empty array if there is no such pair.",
        examples: [
            {
                input: "[2,7,11,15], 9",
                output: "[0,1]"
            },
            {
                input: "[3,2,4], 6",
                output: "[1,2]"
            },
            {
                input: "[1,2,3], 7",
                output: "[]"
            }
        ],
        constraints: [
            "0 <= nums.length <= 10000",
            "return the first pair found scanning left to right"
        ],
        functionName: "twoSumIndices",
        judgeType: "returnValue",
        starter: {
            js: "function twoSumIndices(nums, target) {\n  // Return [i, j] that sum to target, or [].\n}\n",
            ts: "function twoSumIndices(nums: number[], target: number): number[] {\n  // Return [i, j] that sum to target, or [].\n  return [];\n}\n"
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
                        3,
                        2,
                        4
                    ],
                    6
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
                    ],
                    7
                ],
                expected: []
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
                        0,
                        0
                    ],
                    0
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
                        4,
                        2
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
                        3,
                        3
                    ],
                    6
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
                        3,
                        4
                    ],
                    8
                ],
                expected: []
            }
        ],
        hints: [
            "For each value you need to know whether its complement appeared earlier — and at which index.",
            "Store value → index in a map as you scan; check for target - value first.",
            "if (seen.has(target - nums[i])) return [seen.get(target - nums[i]), i]; seen.set(nums[i], i)."
        ],
        solutions: [
            {
                label: "Complement map",
                approach: "Remember each value's index; look up the needed complement in O(1).",
                js: "function twoSumIndices(nums, target) {\n  const seen = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i];\n    if (seen.has(need)) return [seen.get(need), i];\n    seen.set(nums[i], i);\n  }\n  return [];\n}\n",
                ts: "function twoSumIndices(nums: number[], target: number): number[] {\n  const seen = new Map<number, number>();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i]!;\n    if (seen.has(need)) return [seen.get(need)!, i];\n    seen.set(nums[i]!, i);\n  }\n  return [];\n}\n",
                commentedCode: {
                    js: "function twoSumIndices(nums, target) {\n  // Map each previously visited value to its index.\n  const seen = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i];\n    // A stored complement gives the earlier index and the current index completes the pair.\n    if (seen.has(need)) return [seen.get(need), i];\n    // Store only after checking so one element cannot pair with itself.\n    seen.set(nums[i], i);\n  }\n  return [];\n}\n",
                    ts: "function twoSumIndices(nums: number[], target: number): number[] {\n  // Map each previously visited value to its index.\n  const seen = new Map<number, number>();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i]!;\n    // A stored complement gives the earlier index and the current index completes the pair.\n    if (seen.has(need)) return [seen.get(need)!, i];\n    // Store only after checking so one element cannot pair with itself.\n    seen.set(nums[i]!, i);\n  }\n  return [];\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Brute force",
                approach: "Try every pair of indices.",
                js: "function twoSumIndices(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) return [i, j];\n    }\n  }\n  return [];\n}\n",
                ts: "function twoSumIndices(nums: number[], target: number): number[] {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i]! + nums[j]! === target) return [i, j];\n    }\n  }\n  return [];\n}\n",
                commentedCode: {
                    js: "function twoSumIndices(nums, target) {\n  // Choose every possible first index.\n  for (let i = 0; i < nums.length; i++) {\n    // Pair it only with later indices so i < j and no pair repeats.\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) return [i, j];\n    }\n  }\n  return [];\n}\n",
                    ts: "function twoSumIndices(nums: number[], target: number): number[] {\n  // Choose every possible first index.\n  for (let i = 0; i < nums.length; i++) {\n    // Pair it only with later indices so i < j and no pair repeats.\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i]! + nums[j]! === target) return [i, j];\n    }\n  }\n  return [];\n}\n"
                },
                time: "O(n²)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "h-single-number",
        slug: "single-number",
        title: "The Lonely Number",
        difficulty: "easy",
        statement: "Every value appears exactly twice except one, which appears once. Return the value that appears once.",
        examples: [
            {
                input: "[2,2,1]",
                output: "1"
            },
            {
                input: "[4,1,2,1,2]",
                output: "4"
            },
            {
                input: "[7]",
                output: "7"
            }
        ],
        constraints: [
            "1 <= nums.length <= 10000",
            "exactly one value appears once"
        ],
        functionName: "singleNumber",
        starter: {
            js: "function singleNumber(nums) {\n  // Return the value that appears exactly once.\n}\n",
            ts: "function singleNumber(nums: number[]): number {\n  // Return the value that appears exactly once.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
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
                        1,
                        2,
                        1,
                        2
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
                        2
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    [
                        0,
                        0,
                        5
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    [
                        -1,
                        -1,
                        -3
                    ]
                ],
                expected: -3
            },
            {
                args: [
                    [
                        10,
                        20,
                        10
                    ]
                ],
                expected: 20
            },
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        1,
                        99
                    ]
                ],
                expected: 99
            },
            {
                args: [
                    [
                        -5,
                        -5,
                        -8,
                        -8,
                        4
                    ]
                ],
                expected: 4
            }
        ],
        hints: [
            "Counting each value works, but there's an O(1)-space trick with a bitwise operator.",
            "XOR is its own inverse: a ^ a === 0, so pairs cancel and only the lonely value remains.",
            "return nums.reduce((acc, n) => acc ^ n, 0)."
        ],
        solutions: [
            {
                label: "XOR everything",
                approach: "Pairs cancel under XOR, leaving the unique value.",
                js: "function singleNumber(nums) {\n  return nums.reduce((acc, n) => acc ^ n, 0);\n}\n",
                ts: "function singleNumber(nums: number[]): number {\n  return nums.reduce((acc, n) => acc ^ n, 0);\n}\n",
                commentedCode: {
                    js: "function singleNumber(nums) {\n  // Equal values cancel under XOR, while zero leaves the unmatched value unchanged.\n  return nums.reduce((acc, n) => acc ^ n, 0);\n}\n",
                    ts: "function singleNumber(nums: number[]): number {\n  // Equal values cancel under XOR, while zero leaves the unmatched value unchanged.\n  return nums.reduce((acc, n) => acc ^ n, 0);\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Count with a map",
                approach: "Tally occurrences and return the value seen once.",
                js: "function singleNumber(nums) {\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  for (const [n, c] of counts) if (c === 1) return n;\n  return 0;\n}\n",
                ts: "function singleNumber(nums: number[]): number {\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  for (const [n, c] of counts) if (c === 1) return n;\n  return 0;\n}\n",
                commentedCode: {
                    js: "function singleNumber(nums) {\n  // Count every occurrence by value.\n  const counts = new Map();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  // The problem guarantees exactly one entry has frequency one.\n  for (const [n, c] of counts) if (c === 1) return n;\n  return 0;\n}\n",
                    ts: "function singleNumber(nums: number[]): number {\n  // Count every occurrence by value.\n  const counts = new Map<number, number>();\n  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);\n  // The problem guarantees exactly one entry has frequency one.\n  for (const [n, c] of counts) if (c === 1) return n;\n  return 0;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "h-intersection",
        slug: "array-intersection",
        title: "Array Intersection",
        difficulty: "easy",
        statement: "Return the distinct values that appear in both lists, sorted in ascending order.",
        examples: [
            {
                input: "[1,2,2,1], [2,2]",
                output: "[2]"
            },
            {
                input: "[1,2,3], [4,5]",
                output: "[]"
            },
            {
                input: "[4,9,5], [9,4,9,8,4]",
                output: "[4,9]"
            }
        ],
        constraints: [
            "0 <= a.length, b.length <= 10000"
        ],
        functionName: "intersection",
        starter: {
            js: "function intersection(a, b) {\n  // Distinct common values, sorted ascending.\n}\n",
            ts: "function intersection(a: number[], b: number[]): number[] {\n  // Distinct common values, sorted ascending.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        1,
                        2,
                        2,
                        1
                    ],
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
                        2,
                        3
                    ],
                    [
                        4,
                        5
                    ]
                ],
                expected: []
            },
            {
                args: [
                    [
                        4,
                        9,
                        5
                    ],
                    [
                        9,
                        4,
                        9,
                        8,
                        4
                    ]
                ],
                expected: [
                    4,
                    9
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [],
                    [
                        1
                    ]
                ],
                expected: []
            },
            {
                args: [
                    [
                        1
                    ],
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
                    ],
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
                        5,
                        5
                    ],
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
                        1,
                        2
                    ],
                    [
                        2,
                        3
                    ]
                ],
                expected: [
                    2
                ]
            },
            {
                args: [
                    [
                        0,
                        -1
                    ],
                    [
                        -1,
                        0,
                        0
                    ]
                ],
                expected: [
                    -1,
                    0
                ]
            }
        ],
        hints: [
            "Membership tests in one list should be O(1).",
            "Put one list in a Set, keep the distinct values of the other that are in it, then sort.",
            "const sa = new Set(a); return [...new Set(b.filter(x => sa.has(x)))].sort((x, y) => x - y)."
        ],
        solutions: [
            {
                label: "Set membership",
                approach: "Filter distinct values of b by membership in a, then sort.",
                js: "function intersection(a, b) {\n  const sa = new Set(a);\n  return [...new Set(b.filter((x) => sa.has(x)))].sort((x, y) => x - y);\n}\n",
                ts: "function intersection(a: number[], b: number[]): number[] {\n  const sa = new Set(a);\n  return [...new Set(b.filter((x) => sa.has(x)))].sort((x, y) => x - y);\n}\n",
                commentedCode: {
                    js: "function intersection(a, b) {\n  // A set makes membership in the first array constant-time on average.\n  const sa = new Set(a);\n  // Keep shared values, deduplicate them, then satisfy ascending output order.\n  return [...new Set(b.filter((x) => sa.has(x)))].sort((x, y) => x - y);\n}\n",
                    ts: "function intersection(a: number[], b: number[]): number[] {\n  // A set makes membership in the first array constant-time on average.\n  const sa = new Set(a);\n  // Keep shared values, deduplicate them, then satisfy ascending output order.\n  return [...new Set(b.filter((x) => sa.has(x)))].sort((x, y) => x - y);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Two sets",
                approach: "Intersect two sets, then sort the result.",
                js: "function intersection(a, b) {\n  const sa = new Set(a), sb = new Set(b);\n  const out = [];\n  for (const x of sa) if (sb.has(x)) out.push(x);\n  return out.sort((x, y) => x - y);\n}\n",
                ts: "function intersection(a: number[], b: number[]): number[] {\n  const sa = new Set(a), sb = new Set(b);\n  const out: number[] = [];\n  for (const x of sa) if (sb.has(x)) out.push(x);\n  return out.sort((x, y) => x - y);\n}\n",
                commentedCode: {
                    js: "function intersection(a, b) {\n  // Deduplicate both inputs before comparing membership.\n  const sa = new Set(a), sb = new Set(b);\n  const out = [];\n  // Each value from the first set can enter the result at most once.\n  for (const x of sa) if (sb.has(x)) out.push(x);\n  return out.sort((x, y) => x - y);\n}\n",
                    ts: "function intersection(a: number[], b: number[]): number[] {\n  // Deduplicate both inputs before comparing membership.\n  const sa = new Set(a), sb = new Set(b);\n  const out: number[] = [];\n  // Each value from the first set can enter the result at most once.\n  for (const x of sa) if (sb.has(x)) out.push(x);\n  return out.sort((x, y) => x - y);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "h-majority-element",
        slug: "majority-element",
        title: "Majority Element",
        difficulty: "medium",
        statement: "One value appears more than half the time in the list. Return it.",
        examples: [
            {
                input: "[3,2,3]",
                output: "3"
            },
            {
                input: "[2,2,1,1,2,2]",
                output: "2"
            },
            {
                input: "[1]",
                output: "1"
            }
        ],
        constraints: [
            "1 <= nums.length <= 10000",
            "a strict majority element always exists"
        ],
        functionName: "majorityElement",
        starter: {
            js: "function majorityElement(nums) {\n  // Return the value appearing more than n/2 times.\n}\n",
            ts: "function majorityElement(nums: number[]): number {\n  // Return the value appearing more than n/2 times.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
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
                        2,
                        2,
                        1,
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
                        5,
                        1,
                        2,
                        3
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    [
                        7,
                        7
                    ]
                ],
                expected: 7
            },
            {
                args: [
                    [
                        0,
                        0,
                        0,
                        1
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        -1,
                        -1,
                        -1,
                        2,
                        2
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    [
                        4,
                        4,
                        4,
                        4
                    ]
                ],
                expected: 4
            }
        ],
        hints: [
            "Counting occurrences with a map always works.",
            "For O(1) space, use the Boyer–Moore vote: a majority survives pairing off different values.",
            "Keep a candidate and a count; on a match count++, else count--; reset the candidate at 0."
        ],
        solutions: [
            {
                label: "Boyer–Moore vote",
                approach: "Cancel differing votes; the majority survives.",
                js: "function majorityElement(nums) {\n  let candidate = nums[0], count = 0;\n  for (const n of nums) {\n    if (count === 0) candidate = n;\n    count += n === candidate ? 1 : -1;\n  }\n  return candidate;\n}\n",
                ts: "function majorityElement(nums: number[]): number {\n  let candidate = nums[0]!, count = 0;\n  for (const n of nums) {\n    if (count === 0) candidate = n;\n    count += n === candidate ? 1 : -1;\n  }\n  return candidate;\n}\n",
                commentedCode: {
                    js: "function majorityElement(nums) {\n  let candidate = nums[0], count = 0;\n  for (const n of nums) {\n    // With no outstanding votes, begin tracking the current value.\n    if (count === 0) candidate = n;\n    // Matching votes reinforce the candidate; different values cancel one vote.\n    count += n === candidate ? 1 : -1;\n  }\n  // A guaranteed strict majority is the only candidate that can survive cancellation.\n  return candidate;\n}\n",
                    ts: "function majorityElement(nums: number[]): number {\n  let candidate = nums[0]!, count = 0;\n  for (const n of nums) {\n    // With no outstanding votes, begin tracking the current value.\n    if (count === 0) candidate = n;\n    // Matching votes reinforce the candidate; different values cancel one vote.\n    count += n === candidate ? 1 : -1;\n  }\n  // A guaranteed strict majority is the only candidate that can survive cancellation.\n  return candidate;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Count map",
                approach: "Tally and return the value passing n/2.",
                js: "function majorityElement(nums) {\n  const counts = new Map();\n  for (const n of nums) {\n    counts.set(n, (counts.get(n) || 0) + 1);\n    if (counts.get(n) > nums.length / 2) return n;\n  }\n  return nums[0];\n}\n",
                ts: "function majorityElement(nums: number[]): number {\n  const counts = new Map<number, number>();\n  for (const n of nums) {\n    counts.set(n, (counts.get(n) || 0) + 1);\n    if (counts.get(n)! > nums.length / 2) return n;\n  }\n  return nums[0]!;\n}\n",
                commentedCode: {
                    js: "function majorityElement(nums) {\n  // Track the running frequency of each value.\n  const counts = new Map();\n  for (const n of nums) {\n    counts.set(n, (counts.get(n) || 0) + 1);\n    // Return as soon as a value crosses the strict-majority threshold.\n    if (counts.get(n) > nums.length / 2) return n;\n  }\n  // The constraints guarantee a majority, so this fallback is unreachable.\n  return nums[0];\n}\n",
                    ts: "function majorityElement(nums: number[]): number {\n  // Track the running frequency of each value.\n  const counts = new Map<number, number>();\n  for (const n of nums) {\n    counts.set(n, (counts.get(n) || 0) + 1);\n    // Return as soon as a value crosses the strict-majority threshold.\n    if (counts.get(n)! > nums.length / 2) return n;\n  }\n  // The constraints guarantee a majority, so this fallback is unreachable.\n  return nums[0]!;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    /* -------------------- Trees & BSTs -------------------- */ {
        id: "t-bst-inorder",
        slug: "bst-inorder",
        title: "BST In-Order",
        difficulty: "easy",
        statement: "Insert the given values (in order) into a binary search tree, ignoring duplicates, and return an in-order traversal — i.e. the distinct values sorted ascending.",
        examples: [
            {
                input: "[5,3,8,3]",
                output: "[3,5,8]"
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
            "0 <= insertions.length <= 10000"
        ],
        functionName: "bstInorder",
        starter: {
            js: "function bstInorder(insertions) {\n  // In-order traversal of the BST built from insertions.\n}\n",
            ts: "function bstInorder(insertions: number[]): number[] {\n  // In-order traversal of the BST built from insertions.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        3
                    ]
                ],
                expected: [
                    3,
                    5,
                    8
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
                        1,
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
                        10,
                        5,
                        15,
                        5,
                        10
                    ]
                ],
                expected: [
                    5,
                    10,
                    15
                ]
            },
            {
                args: [
                    [
                        -1,
                        -2,
                        0
                    ]
                ],
                expected: [
                    -2,
                    -1,
                    0
                ]
            },
            {
                args: [
                    [
                        4
                    ]
                ],
                expected: [
                    4
                ]
            }
        ],
        hints: [
            "An in-order traversal of a BST always yields sorted values.",
            "So the answer is just the distinct values sorted ascending.",
            "return [...new Set(insertions)].sort((a, b) => a - b)."
        ],
        solutions: [
            {
                label: "Distinct and sort",
                approach: "In-order of a BST equals the sorted distinct values.",
                js: "function bstInorder(insertions) {\n  return [...new Set(insertions)].sort((a, b) => a - b);\n}\n",
                ts: "function bstInorder(insertions: number[]): number[] {\n  return [...new Set(insertions)].sort((a, b) => a - b);\n}\n",
                commentedCode: {
                    js: "function bstInorder(insertions) {\n  // A BST ignores duplicates, and its in-order traversal is numerically sorted.\n  return [...new Set(insertions)].sort((a, b) => a - b);\n}\n",
                    ts: "function bstInorder(insertions: number[]): number[] {\n  // A BST ignores duplicates, and its in-order traversal is numerically sorted.\n  return [...new Set(insertions)].sort((a, b) => a - b);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Actually build the BST",
                approach: "Insert into a real BST, then traverse left-node-right.",
                js: "function bstInorder(insertions) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  const out = [];\n  const walk = (n) => { if (!n) return; walk(n.left); out.push(n.value); walk(n.right); };\n  walk(root);\n  return out;\n}\n",
                ts: "function bstInorder(insertions: number[]): number[] {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  const out: number[] = [];\n  const walk = (n: N | null) => { if (!n) return; walk(n.left); out.push(n.value); walk(n.right); };\n  walk(root);\n  return out;\n}\n",
                commentedCode: {
                    js: "function bstInorder(insertions) {\n  let root = null;\n  const insert = (node, v) => {\n    // Reaching an empty position creates the new leaf.\n    if (!node) return { value: v, left: null, right: null };\n    // Follow the BST ordering rule; equality is ignored as a duplicate.\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  const out = [];\n  // Left-node-right traversal emits BST values in ascending order.\n  const walk = (n) => { if (!n) return; walk(n.left); out.push(n.value); walk(n.right); };\n  walk(root);\n  return out;\n}\n",
                    ts: "function bstInorder(insertions: number[]): number[] {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    // Reaching an empty position creates the new leaf.\n    if (!node) return { value: v, left: null, right: null };\n    // Follow the BST ordering rule; equality is ignored as a duplicate.\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  const out: number[] = [];\n  // Left-node-right traversal emits BST values in ascending order.\n  const walk = (n: N | null) => { if (!n) return; walk(n.left); out.push(n.value); walk(n.right); };\n  walk(root);\n  return out;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "t-bst-height",
        slug: "bst-height",
        title: "BST Height",
        difficulty: "medium",
        statement: "Insert the given values (in order) into a binary search tree, then return its height measured in edges (an empty tree is -1, a single node is 0). The shape — and thus the height — depends on the insertion order.",
        examples: [
            {
                input: "[2,1,3]",
                output: "1"
            },
            {
                input: "[1,2,3]",
                output: "2",
                explanation: "Inserting in sorted order makes a chain."
            },
            {
                input: "[]",
                output: "-1"
            }
        ],
        constraints: [
            "0 <= insertions.length <= 10000"
        ],
        functionName: "bstHeight",
        starter: {
            js: "function bstHeight(insertions) {\n  // Height (in edges) of the BST built from insertions.\n}\n",
            ts: "function bstHeight(insertions: number[]): number {\n  // Height (in edges) of the BST built from insertions.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        1,
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
                        5,
                        3,
                        8,
                        1,
                        4,
                        7,
                        9
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
                        10,
                        5,
                        15
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
            }
        ],
        hints: [
            "You must actually build the tree — the height depends on the order values arrive.",
            "Insert each value, then compute height recursively: an empty subtree is -1, otherwise 1 + max(left, right).",
            "height(node) = node ? 1 + max(height(left), height(right)) : -1."
        ],
        solutions: [
            {
                label: "Build then measure",
                approach: "Insert into a BST, then recurse for the height.",
                js: "function bstHeight(insertions) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  const height = (n) => (n ? 1 + Math.max(height(n.left), height(n.right)) : -1);\n  return height(root);\n}\n",
                ts: "function bstHeight(insertions: number[]): number {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  const height = (n: N | null): number => (n ? 1 + Math.max(height(n.left), height(n.right)) : -1);\n  return height(root);\n}\n",
                commentedCode: {
                    js: "function bstHeight(insertions) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    // Insert smaller values left and larger values right; ignore duplicates.\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  // Insertion order determines the final tree shape.\n  for (const v of insertions) root = insert(root, v);\n  // Empty subtrees have height -1, making a leaf's height zero.\n  const height = (n) => (n ? 1 + Math.max(height(n.left), height(n.right)) : -1);\n  return height(root);\n}\n",
                    ts: "function bstHeight(insertions: number[]): number {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    // Insert smaller values left and larger values right; ignore duplicates.\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  // Insertion order determines the final tree shape.\n  for (const v of insertions) root = insert(root, v);\n  // Empty subtrees have height -1, making a leaf's height zero.\n  const height = (n: N | null): number => (n ? 1 + Math.max(height(n.left), height(n.right)) : -1);\n  return height(root);\n}\n"
                },
                time: "O(n·h)",
                space: "O(n)"
            },
            {
                label: "Build then BFS levels",
                approach: "Count levels with a breadth-first sweep; height is levels − 1.",
                js: "function bstHeight(insertions) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  if (!root) return -1;\n  let level = -1;\n  let queue = [root];\n  while (queue.length) {\n    level++;\n    const next = [];\n    for (const n of queue) { if (n.left) next.push(n.left); if (n.right) next.push(n.right); }\n    queue = next;\n  }\n  return level;\n}\n",
                ts: "function bstHeight(insertions: number[]): number {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  if (!root) return -1;\n  let level = -1;\n  let queue: N[] = [root];\n  while (queue.length) {\n    level++;\n    const next: N[] = [];\n    for (const n of queue) { if (n.left) next.push(n.left); if (n.right) next.push(n.right); }\n    queue = next;\n  }\n  return level;\n}\n",
                commentedCode: {
                    js: "function bstHeight(insertions) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  // An empty tree has the required edge-height of -1.\n  if (!root) return -1;\n  let level = -1;\n  let queue = [root];\n  while (queue.length) {\n    // Each breadth-first layer adds one edge-height level.\n    level++;\n    const next = [];\n    // Collect every child to form the following layer.\n    for (const n of queue) { if (n.left) next.push(n.left); if (n.right) next.push(n.right); }\n    queue = next;\n  }\n  return level;\n}\n",
                    ts: "function bstHeight(insertions: number[]): number {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  // An empty tree has the required edge-height of -1.\n  if (!root) return -1;\n  let level = -1;\n  let queue: N[] = [root];\n  while (queue.length) {\n    // Each breadth-first layer adds one edge-height level.\n    level++;\n    const next: N[] = [];\n    // Collect every child to form the following layer.\n    for (const n of queue) { if (n.left) next.push(n.left); if (n.right) next.push(n.right); }\n    queue = next;\n  }\n  return level;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "t-bst-contains",
        slug: "bst-contains",
        title: "BST Contains",
        difficulty: "easy",
        statement: "Insert the given values into a binary search tree, then return `true` if `target` is present.",
        examples: [
            {
                input: "[5,3,8], 3",
                output: "true"
            },
            {
                input: "[5,3,8], 6",
                output: "false"
            },
            {
                input: "[], 1",
                output: "false"
            }
        ],
        constraints: [
            "0 <= insertions.length <= 10000"
        ],
        functionName: "bstContains",
        starter: {
            js: "function bstContains(insertions, target) {\n  // Whether target is in the BST.\n}\n",
            ts: "function bstContains(insertions: number[], target: number): boolean {\n  // Whether target is in the BST.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        5,
                        3,
                        8
                    ],
                    3
                ],
                expected: true
            },
            {
                args: [
                    [
                        5,
                        3,
                        8
                    ],
                    6
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
                    2
                ],
                expected: false
            },
            {
                args: [
                    [
                        10,
                        5,
                        15
                    ],
                    15
                ],
                expected: true
            },
            {
                args: [
                    [
                        10,
                        5,
                        15
                    ],
                    5
                ],
                expected: true
            },
            {
                args: [
                    [
                        2,
                        1,
                        3
                    ],
                    4
                ],
                expected: false
            },
            {
                args: [
                    [
                        7,
                        7,
                        7
                    ],
                    7
                ],
                expected: true
            }
        ],
        hints: [
            "Membership in a BST is the same as membership in the set of inserted values.",
            "You can search the tree, or just check the set of values.",
            "return new Set(insertions).has(target)."
        ],
        solutions: [
            {
                label: "Set membership",
                approach: "The tree contains exactly the inserted values.",
                js: "function bstContains(insertions, target) {\n  return new Set(insertions).has(target);\n}\n",
                ts: "function bstContains(insertions: number[], target: number): boolean {\n  return new Set(insertions).has(target);\n}\n",
                commentedCode: {
                    js: "function bstContains(insertions, target) {\n  // The BST contains exactly the distinct inserted values, so set membership is equivalent.\n  return new Set(insertions).has(target);\n}\n",
                    ts: "function bstContains(insertions: number[], target: number): boolean {\n  // The BST contains exactly the distinct inserted values, so set membership is equivalent.\n  return new Set(insertions).has(target);\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Search the tree",
                approach: "Build the BST and walk left/right toward the target.",
                js: "function bstContains(insertions, target) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  let cur = root;\n  while (cur) {\n    if (target === cur.value) return true;\n    cur = target < cur.value ? cur.left : cur.right;\n  }\n  return false;\n}\n",
                ts: "function bstContains(insertions: number[], target: number): boolean {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  let cur = root;\n  while (cur) {\n    if (target === cur.value) return true;\n    cur = target < cur.value ? cur.left : cur.right;\n  }\n  return false;\n}\n",
                commentedCode: {
                    js: "function bstContains(insertions, target) {\n  let root = null;\n  const insert = (node, v) => {\n    if (!node) return { value: v, left: null, right: null };\n    // Preserve the BST ordering and skip equal duplicate values.\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  let cur = root;\n  while (cur) {\n    if (target === cur.value) return true;\n    // Ordering rules eliminate one entire subtree at each step.\n    cur = target < cur.value ? cur.left : cur.right;\n  }\n  return false;\n}\n",
                    ts: "function bstContains(insertions: number[], target: number): boolean {\n  interface N { value: number; left: N | null; right: N | null; }\n  let root: N | null = null;\n  const insert = (node: N | null, v: number): N => {\n    if (!node) return { value: v, left: null, right: null };\n    // Preserve the BST ordering and skip equal duplicate values.\n    if (v < node.value) node.left = insert(node.left, v);\n    else if (v > node.value) node.right = insert(node.right, v);\n    return node;\n  };\n  for (const v of insertions) root = insert(root, v);\n  let cur = root;\n  while (cur) {\n    if (target === cur.value) return true;\n    // Ordering rules eliminate one entire subtree at each step.\n    cur = target < cur.value ? cur.left : cur.right;\n  }\n  return false;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "t-bst-range-count",
        slug: "bst-range-count",
        title: "BST Range Count",
        difficulty: "medium",
        statement: "Insert the given values into a binary search tree, then return how many distinct values fall within the inclusive range `[lo, hi]`.",
        examples: [
            {
                input: "[5,3,8,1,4], 3, 5",
                output: "3",
                explanation: "3, 4, and 5."
            },
            {
                input: "[1,2,3], 0, 10",
                output: "3"
            },
            {
                input: "[], 1, 5",
                output: "0"
            }
        ],
        constraints: [
            "0 <= insertions.length <= 10000",
            "lo <= hi"
        ],
        functionName: "bstRangeCount",
        starter: {
            js: "function bstRangeCount(insertions, lo, hi) {\n  // Count distinct values within [lo, hi].\n}\n",
            ts: "function bstRangeCount(insertions: number[], lo: number, hi: number): number {\n  // Count distinct values within [lo, hi].\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        5,
                        3,
                        8,
                        1,
                        4
                    ],
                    3,
                    5
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
                    0,
                    10
                ],
                expected: 3
            },
            {
                args: [
                    [],
                    1,
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
                    1,
                    10
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
                        5
                    ],
                    2,
                    4
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
                    15,
                    25
                ],
                expected: 1
            },
            {
                args: [
                    [
                        -1,
                        0,
                        1
                    ],
                    -1,
                    0
                ],
                expected: 2
            },
            {
                args: [
                    [
                        7
                    ],
                    7,
                    7
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
                    5,
                    10
                ],
                expected: 0
            }
        ],
        hints: [
            "Only distinct values count, and the range is inclusive on both ends.",
            "Deduplicate, then count values v with lo <= v <= hi.",
            "return [...new Set(insertions)].filter(v => v >= lo && v <= hi).length."
        ],
        solutions: [
            {
                label: "Distinct then filter",
                approach: "Count the distinct values inside the range.",
                js: "function bstRangeCount(insertions, lo, hi) {\n  return [...new Set(insertions)].filter((v) => v >= lo && v <= hi).length;\n}\n",
                ts: "function bstRangeCount(insertions: number[], lo: number, hi: number): number {\n  return [...new Set(insertions)].filter((v) => v >= lo && v <= hi).length;\n}\n",
                commentedCode: {
                    js: "function bstRangeCount(insertions, lo, hi) {\n  // Deduplicate like BST insertion, then keep values within both inclusive bounds.\n  return [...new Set(insertions)].filter((v) => v >= lo && v <= hi).length;\n}\n",
                    ts: "function bstRangeCount(insertions: number[], lo: number, hi: number): number {\n  // Deduplicate like BST insertion, then keep values within both inclusive bounds.\n  return [...new Set(insertions)].filter((v) => v >= lo && v <= hi).length;\n}\n"
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "In-order then count",
                approach: "Take the sorted distinct values and count those in range.",
                js: "function bstRangeCount(insertions, lo, hi) {\n  const sorted = [...new Set(insertions)].sort((a, b) => a - b);\n  let count = 0;\n  for (const v of sorted) if (v >= lo && v <= hi) count++;\n  return count;\n}\n",
                ts: "function bstRangeCount(insertions: number[], lo: number, hi: number): number {\n  const sorted = [...new Set(insertions)].sort((a, b) => a - b);\n  let count = 0;\n  for (const v of sorted) if (v >= lo && v <= hi) count++;\n  return count;\n}\n",
                commentedCode: {
                    js: "function bstRangeCount(insertions, lo, hi) {\n  // These are the values an in-order BST traversal would produce.\n  const sorted = [...new Set(insertions)].sort((a, b) => a - b);\n  let count = 0;\n  // Count each distinct value that lies inside the inclusive range.\n  for (const v of sorted) if (v >= lo && v <= hi) count++;\n  return count;\n}\n",
                    ts: "function bstRangeCount(insertions: number[], lo: number, hi: number): number {\n  // These are the values an in-order BST traversal would produce.\n  const sorted = [...new Set(insertions)].sort((a, b) => a - b);\n  let count = 0;\n  // Count each distinct value that lies inside the inclusive range.\n  for (const v of sorted) if (v >= lo && v <= hi) count++;\n  return count;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    }
];
const stage2Batch2Problems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const stage2Batch2Mcqs = [
    {
        id: "s2-stack-ops",
        kind: "mcq",
        prompt: "Pushing and popping the top of a stack are each:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "Only the top is touched, so both operations are constant time."
    },
    {
        id: "s2-stack-search",
        kind: "mcq",
        prompt: "Finding whether an arbitrary value (not the top) is somewhere in a stack is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "A stack only exposes the top, so a full search scans up to n items."
    },
    {
        id: "s2-queue-ops",
        kind: "mcq",
        prompt: "With a proper queue implementation, enqueue and dequeue are each:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "Both ends are tracked with pointers, so each operation is constant time."
    },
    {
        id: "s2-queue-array-shift",
        kind: "mcq",
        prompt: "Implementing dequeue with `array.shift()` on a plain array makes each dequeue:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "`shift()` re-indexes every remaining element, so it is linear per call."
    },
    {
        id: "s2-hash-avg",
        kind: "mcq",
        prompt: "The average-case time for `get` and `set` on a hash table is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "A good hash spreads keys across buckets, giving constant expected work."
    },
    {
        id: "s2-hash-worst",
        kind: "mcq",
        prompt: "If every key hashes into the same bucket, a `get` degrades to:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(2ⁿ)"
        ],
        answerIndex: 2,
        explanation: "All keys chain in one bucket, so lookup scans up to n entries."
    },
    {
        id: "s2-bst-balanced",
        kind: "mcq",
        prompt: "Searching a *balanced* binary search tree of n values is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answerIndex: 1,
        explanation: "Each step halves the remaining subtree, giving about log₂(n) comparisons."
    },
    {
        id: "s2-bst-degenerate",
        kind: "mcq",
        prompt: "Searching a degenerate BST (every node has only a right child) is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 2,
        explanation: "The tree is really a linked list, so search walks up to n nodes."
    }
];
const stage2Batch2Modules = [
    {
        id: "m-ds-stacks",
        stageId: S,
        title: "Stacks",
        kind: "buildLab",
        summary: "Last-in, first-out — the structure behind matching, undo, and monotonic tricks.",
        lessonSections: [
            {
                heading: "Last in, first out",
                body: `A stack only lets you touch the **top**: push to add, pop to remove, peek to look. Every operation is O(1). It's the natural fit whenever the most recent thing must be handled first — bracket matching, undo history, or a call stack.

\`\`\`js
const stack = [];
stack.push('a'); stack.push('b');
console.log(stack.pop());  // b — most recent out first
console.log(stack[stack.length - 1]); // a — peek
\`\`\``
            },
            {
                heading: "The monotonic stack",
                body: `Keeping a stack whose values stay sorted (a *monotonic stack*) turns many "next greater / previous smaller" problems from O(n²) into O(n): each element is pushed and popped at most once.

**Recognition cues:** "most recent unmatched…", "next greater/smaller", balanced brackets, or undo → reach for a stack. Build one in the lab, then try the drills.`
            }
        ],
        guidedExampleProblemId: "st-remove-adjacent",
        drillProblemIds: [
            "st-remove-adjacent",
            "st-max-depth"
        ],
        testPoolProblemIds: [
            "st-next-greater",
            "st-backspace"
        ],
        complexityQuestionIds: [
            "s2-stack-ops",
            "s2-stack-search"
        ],
        buildLab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackLab"],
        badgeId: "badge-ds-stacks",
        prerequisiteModuleIds: [
            "m-ds-arrays"
        ]
    },
    {
        id: "m-ds-queues",
        stageId: S,
        title: "Queues & Deques",
        kind: "buildLab",
        summary: "First-in, first-out — plus the double-ended deque that powers sliding-window tricks.",
        lessonSections: [
            {
                heading: "First in, first out",
                body: `A queue serves items in arrival order: enqueue at the back, dequeue from the front. A **deque** (double-ended queue) allows both ends. With the right implementation every operation is O(1) — but beware \`array.shift()\`, which is O(n) because it re-indexes everything.

\`\`\`js
const q = [];
q.push(1); q.push(2);      // enqueue
console.log(q.shift());    // 1 — front out first (O(n) on a plain array!)
\`\`\``
            },
            {
                heading: "Deques and sliding windows",
                body: `A monotonic **deque** keeps a window's candidates in order so the maximum (or minimum) is always at the front — the key to O(n) sliding-window extremes. Queues also drive breadth-first generation, like enumerating binary numbers level by level.

**Recognition cues:** process in arrival order, level-by-level generation, or a moving window's max/min → queue or deque. Build a deque in the lab, then take on the drills.`
            }
        ],
        guidedExampleProblemId: "q-generate-binary",
        drillProblemIds: [
            "q-generate-binary",
            "q-reverse-first-k"
        ],
        testPoolProblemIds: [
            "q-is-palindrome",
            "q-max-sliding-window"
        ],
        complexityQuestionIds: [
            "s2-queue-ops",
            "s2-queue-array-shift"
        ],
        buildLab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequeLab"],
        badgeId: "badge-ds-queues",
        prerequisiteModuleIds: [
            "m-ds-arrays"
        ]
    },
    {
        id: "m-ds-hash",
        stageId: S,
        title: "Hash Tables",
        kind: "buildLab",
        summary: "Average O(1) lookup by key — the single most useful structure in interviews.",
        lessonSections: [
            {
                heading: "Keys to buckets",
                body: `A hash table turns a key into an array index via a hash function, giving **average O(1)** insert, lookup, and delete. Collisions (two keys landing in the same bucket) are handled by chaining a small list per bucket. In the worst case — everything colliding — a lookup degrades to O(n).

\`\`\`js
const counts = {};
for (const ch of "banana") counts[ch] = (counts[ch] || 0) + 1;
console.log(counts); // { b: 1, a: 3, n: 2 }
\`\`\``
            },
            {
                heading: "The complement trick",
                body: `Hash maps let you replace an inner loop with an O(1) lookup. "Has the complement appeared?", "seen this before?", "how many of each?" — all become single passes. It's the workhorse behind two-sum, dedup, grouping, and frequency problems.

**Recognition cues:** membership, counting, grouping, or "find the pair/complement" → hash map/set. Build one from scratch in the lab, then try the drills.`
            }
        ],
        guidedExampleProblemId: "h-two-sum-indices",
        drillProblemIds: [
            "h-two-sum-indices",
            "h-single-number"
        ],
        testPoolProblemIds: [
            "h-intersection",
            "h-majority-element"
        ],
        complexityQuestionIds: [
            "s2-hash-avg",
            "s2-hash-worst"
        ],
        buildLab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMapLab"],
        badgeId: "badge-ds-hash",
        prerequisiteModuleIds: [
            "m-ds-arrays"
        ]
    },
    {
        id: "m-ds-trees",
        stageId: S,
        title: "Trees & BSTs",
        kind: "buildLab",
        summary: "Hierarchical data and the ordered binary search tree — O(log n) when balanced.",
        lessonSections: [
            {
                heading: "Nodes with children",
                body: `A binary tree's node has up to two children. A **binary search tree** adds an ordering rule: everything in the left subtree is smaller, everything in the right is larger. That invariant makes search, insert, and delete **O(log n)** — *when the tree stays balanced*.

\`\`\`js
// In-order traversal visits a BST's values in sorted order.
const tree = { value: 2, left: { value: 1, left: null, right: null }, right: { value: 3, left: null, right: null } };
const out = [];
(function walk(n){ if(!n) return; walk(n.left); out.push(n.value); walk(n.right); })(tree);
console.log(out); // [1, 2, 3]
\`\`\``
            },
            {
                heading: "Balance matters",
                body: `Insert values in sorted order and a BST degenerates into a linked list — search becomes O(n). Real libraries self-balance (red-black, AVL); here you'll feel the difference by measuring height for different insertion orders.

**Recognition cues:** ordered data with fast search/insert/delete, range queries, or "sorted traversal" → BST. Build one in the lab, then tackle the drills.`
            }
        ],
        guidedExampleProblemId: "t-bst-inorder",
        drillProblemIds: [
            "t-bst-inorder",
            "t-bst-height"
        ],
        testPoolProblemIds: [
            "t-bst-contains",
            "t-bst-range-count"
        ],
        complexityQuestionIds: [
            "s2-bst-balanced",
            "s2-bst-degenerate"
        ],
        buildLab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bstLab"],
        badgeId: "badge-ds-trees",
        prerequisiteModuleIds: [
            "m-ds-linked-lists"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage2/content3.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stage2Batch3Mcqs",
    ()=>stage2Batch3Mcqs,
    "stage2Batch3Modules",
    ()=>stage2Batch3Modules,
    "stage2Batch3Problems",
    ()=>stage2Batch3Problems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage2/labs3.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/shared/heap.ts [app-client] (ecmascript)");
;
;
;
const S = "dsa-s2";
const drafts = [
    /* -------------------- Heaps / Priority Queues -------------------- */ {
        id: "hp-k-smallest",
        slug: "k-smallest",
        title: "K Smallest",
        difficulty: "medium",
        statement: "Return the `k` smallest values of the list, sorted ascending.",
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
            "0 <= k <= values.length <= 10000"
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
                        5,
                        4,
                        3,
                        2,
                        1
                    ],
                    0
                ],
                expected: []
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
                        1,
                        10,
                        1
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
            "Sorting the whole list gives the smallest values at the front.",
            "For large lists a min-heap lets you pop the k smallest without fully sorting.",
            "Push all values into a MinHeap, then pop k times."
        ],
        solutions: [
            {
                label: "Sort and slice",
                approach: "Sort ascending and take the first k.",
                js: "function kSmallest(nums, k) {\n  return [...nums].sort((a, b) => a - b).slice(0, k);\n}\n",
                ts: "function kSmallest(nums: number[], k: number): number[] {\n  return [...nums].sort((a, b) => a - b).slice(0, k);\n}\n",
                commentedCode: {
                    js: "function kSmallest(nums, k) {\n  // Sort a copy so the caller's array is not mutated.\n  const sorted = [...nums].sort((a, b) => a - b);\n  // The first k entries are the k smallest values in ascending order.\n  return sorted.slice(0, k);\n}\n",
                    ts: "function kSmallest(nums: number[], k: number): number[] {\n  // Sort a copy so the caller's array is not mutated.\n  const sorted = [...nums].sort((a, b) => a - b);\n  // The first k entries are the k smallest values in ascending order.\n  return sorted.slice(0, k);\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Min-heap",
                approach: "Heapify all values, then pop the smallest k.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kSmallest(nums, k) {\n  const h = new MinHeap();\n  for (const n of nums) h.push(n);\n  const out = [];\n  for (let i = 0; i < k && h.size() > 0; i++) out.push(h.pop());\n  return out;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kSmallest(nums: number[], k: number): number[] {\n  const h = new MinHeap();\n  for (const n of nums) h.push(n);\n  const out: number[] = [];\n  for (let i = 0; i < k && h.size() > 0; i++) out.push(h.pop());\n  return out;\n}\n`,
                commentedCode: {
                    js: `// MinHeap always exposes the smallest stored value at its root.\n${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kSmallest(nums, k) {\n  const heap = new MinHeap();\n  // Load every value so repeated pops produce ascending order.\n  for (const value of nums) heap.push(value);\n  const smallest = [];\n  // Pop at most k values, also handling k = 0 and an empty input.\n  for (let i = 0; i < k && heap.size() > 0; i++) smallest.push(heap.pop());\n  return smallest;\n}\n`,
                    ts: `// MinHeap always exposes the smallest stored value at its root.\n${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kSmallest(nums: number[], k: number): number[] {\n  const heap = new MinHeap();\n  // Load every value so repeated pops produce ascending order.\n  for (const value of nums) heap.push(value);\n  const smallest: number[] = [];\n  // Pop at most k values, also handling k = 0 and an empty input.\n  for (let i = 0; i < k && heap.size() > 0; i++) smallest.push(heap.pop());\n  return smallest;\n}\n`
                },
                time: "O(n + k log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "hp-is-min-heap",
        slug: "is-min-heap",
        title: "Is It a Min-Heap?",
        difficulty: "easy",
        statement: "An array represents a binary tree where node `i`'s children are at `2i+1` and `2i+2`. Return `true` if it satisfies the min-heap property (every parent ≤ its children).",
        examples: [
            {
                input: "[1,2,3]",
                output: "true"
            },
            {
                input: "[3,2,1]",
                output: "false"
            },
            {
                input: "[]",
                output: "true"
            }
        ],
        constraints: [
            "0 <= arr.length <= 10000"
        ],
        functionName: "isMinHeap",
        starter: {
            js: "function isMinHeap(arr) {\n  // True if every parent <= its children.\n}\n",
            ts: "function isMinHeap(arr: number[]): boolean {\n  // True if every parent <= its children.\n  return false;\n}\n"
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
                        2,
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
                        1,
                        3,
                        2,
                        5
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        2,
                        1,
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
                        3,
                        4,
                        5,
                        6,
                        7
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        1,
                        5,
                        2,
                        6,
                        7,
                        3,
                        4
                    ]
                ],
                expected: true
            },
            {
                args: [
                    [
                        10,
                        20,
                        15,
                        30,
                        40,
                        5
                    ]
                ],
                expected: false
            }
        ],
        hints: [
            "Only parents with children matter — indices 0 up to floor(n/2)-1.",
            "For each parent index i, compare arr[i] against arr[2i+1] and arr[2i+2] when they exist.",
            "if (left < n && arr[i] > arr[left]) return false; likewise for the right child."
        ],
        solutions: [
            {
                label: "Check each parent",
                approach: "Verify the heap property against present children.",
                js: "function isMinHeap(arr) {\n  const n = arr.length;\n  for (let i = 0; i < n; i++) {\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (l < n && arr[i] > arr[l]) return false;\n    if (r < n && arr[i] > arr[r]) return false;\n  }\n  return true;\n}\n",
                ts: "function isMinHeap(arr: number[]): boolean {\n  const n = arr.length;\n  for (let i = 0; i < n; i++) {\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (l < n && arr[i]! > arr[l]!) return false;\n    if (r < n && arr[i]! > arr[r]!) return false;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isMinHeap(arr) {\n  const n = arr.length;\n  // Check every array position; leaves simply have no valid children.\n  for (let i = 0; i < n; i++) {\n    // These formulas locate i's children in an array-backed binary tree.\n    const left = 2 * i + 1, right = 2 * i + 2;\n    // Any child smaller than its parent violates the min-heap property.\n    if (left < n && arr[i] > arr[left]) return false;\n    if (right < n && arr[i] > arr[right]) return false;\n  }\n  return true;\n}\n",
                    ts: "function isMinHeap(arr: number[]): boolean {\n  const n = arr.length;\n  // Check every array position; leaves simply have no valid children.\n  for (let i = 0; i < n; i++) {\n    // These formulas locate i's children in an array-backed binary tree.\n    const left = 2 * i + 1, right = 2 * i + 2;\n    // Any child smaller than its parent violates the min-heap property.\n    if (left < n && arr[i]! > arr[left]!) return false;\n    if (right < n && arr[i]! > arr[right]!) return false;\n  }\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            },
            {
                label: "Only real parents",
                approach: "Iterate only the internal nodes that actually have children.",
                js: "function isMinHeap(arr) {\n  const n = arr.length;\n  for (let i = 0; i < Math.floor(n / 2); i++) {\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (arr[i] > arr[l]) return false;\n    if (r < n && arr[i] > arr[r]) return false;\n  }\n  return true;\n}\n",
                ts: "function isMinHeap(arr: number[]): boolean {\n  const n = arr.length;\n  for (let i = 0; i < Math.floor(n / 2); i++) {\n    const l = 2 * i + 1, r = 2 * i + 2;\n    if (arr[i]! > arr[l]!) return false;\n    if (r < n && arr[i]! > arr[r]!) return false;\n  }\n  return true;\n}\n",
                commentedCode: {
                    js: "function isMinHeap(arr) {\n  const n = arr.length;\n  // Only the first floor(n / 2) entries can have children.\n  for (let i = 0; i < Math.floor(n / 2); i++) {\n    const left = 2 * i + 1, right = 2 * i + 2;\n    // Every real parent has a left child, so compare it directly.\n    if (arr[i] > arr[left]) return false;\n    // Odd-length heaps may leave the final parent without a right child.\n    if (right < n && arr[i] > arr[right]) return false;\n  }\n  return true;\n}\n",
                    ts: "function isMinHeap(arr: number[]): boolean {\n  const n = arr.length;\n  // Only the first floor(n / 2) entries can have children.\n  for (let i = 0; i < Math.floor(n / 2); i++) {\n    const left = 2 * i + 1, right = 2 * i + 2;\n    // Every real parent has a left child, so compare it directly.\n    if (arr[i]! > arr[left]!) return false;\n    // Odd-length heaps may leave the final parent without a right child.\n    if (right < n && arr[i]! > arr[right]!) return false;\n  }\n  return true;\n}\n"
                },
                time: "O(n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "hp-kth-largest",
        slug: "kth-largest",
        title: "Kth Largest",
        difficulty: "medium",
        statement: "Return the k-th largest value in the list (1-indexed, counting duplicates).",
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
            "1 <= k <= values.length <= 10000"
        ],
        functionName: "kthLargest",
        starter: {
            js: "function kthLargest(nums, k) {\n  // The k-th largest value.\n}\n",
            ts: "function kthLargest(nums: number[], k: number): number {\n  // The k-th largest value.\n  return 0;\n}\n"
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
            "The k-th largest sits at index k-1 once the list is sorted descending.",
            "A size-k min-heap keeps the k largest seen so far; its top is the answer.",
            "Push each value; if the heap grows past k, pop the smallest. The final peek is the k-th largest."
        ],
        solutions: [
            {
                label: "Sort descending",
                approach: "Sort largest-first and index k-1.",
                js: "function kthLargest(nums, k) {\n  return [...nums].sort((a, b) => b - a)[k - 1];\n}\n",
                ts: "function kthLargest(nums: number[], k: number): number {\n  return [...nums].sort((a, b) => b - a)[k - 1]!;\n}\n",
                commentedCode: {
                    js: "function kthLargest(nums, k) {\n  // Sort a copy from largest to smallest without changing nums.\n  const descending = [...nums].sort((a, b) => b - a);\n  // k is one-based, while array indices are zero-based.\n  return descending[k - 1];\n}\n",
                    ts: "function kthLargest(nums: number[], k: number): number {\n  // Sort a copy from largest to smallest without changing nums.\n  const descending = [...nums].sort((a, b) => b - a);\n  // k is one-based, while array indices are zero-based.\n  return descending[k - 1]!;\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Size-k min-heap",
                approach: "Keep only the k largest values; the heap's minimum is the answer.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargest(nums, k) {\n  const h = new MinHeap();\n  for (const n of nums) {\n    h.push(n);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargest(nums: number[], k: number): number {\n  const h = new MinHeap();\n  for (const n of nums) {\n    h.push(n);\n    if (h.size() > k) h.pop();\n  }\n  return h.peek();\n}\n`,
                commentedCode: {
                    js: `// MinHeap keeps the smallest retained candidate at its root.\n${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargest(nums, k) {\n  const heap = new MinHeap();\n  for (const value of nums) {\n    heap.push(value);\n    // Discard the smallest whenever more than k candidates are retained.\n    if (heap.size() > k) heap.pop();\n  }\n  // Exactly the k largest remain, so their minimum is the kth largest overall.\n  return heap.peek();\n}\n`,
                    ts: `// MinHeap keeps the smallest retained candidate at its root.\n${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"]}\nfunction kthLargest(nums: number[], k: number): number {\n  const heap = new MinHeap();\n  for (const value of nums) {\n    heap.push(value);\n    // Discard the smallest whenever more than k candidates are retained.\n    if (heap.size() > k) heap.pop();\n  }\n  // Exactly the k largest remain, so their minimum is the kth largest overall.\n  return heap.peek();\n}\n`
                },
                time: "O(n log k)",
                space: "O(k)"
            }
        ]
    },
    {
        id: "hp-last-stone-weight",
        slug: "last-stone-weight",
        title: "Last Stone Weight",
        difficulty: "medium",
        statement: "Repeatedly smash the two heaviest stones together: if they differ, the difference goes back; if equal, both vanish. Return the weight of the last remaining stone, or 0 if none remain.",
        examples: [
            {
                input: "[2,7,4,1,8,1]",
                output: "1"
            },
            {
                input: "[1]",
                output: "1"
            },
            {
                input: "[3,3]",
                output: "0"
            }
        ],
        constraints: [
            "0 <= stones.length <= 10000",
            "0 <= stones[i]"
        ],
        functionName: "lastStoneWeight",
        starter: {
            js: "function lastStoneWeight(stones) {\n  // Smash the two heaviest until one or none remain.\n}\n",
            ts: "function lastStoneWeight(stones: number[]): number {\n  // Smash the two heaviest until one or none remain.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        7,
                        4,
                        1,
                        8,
                        1
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
                expected: 1
            },
            {
                args: [
                    [
                        3,
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
                        1,
                        1
                    ]
                ],
                expected: 0
            },
            {
                args: [
                    [
                        10
                    ]
                ],
                expected: 10
            },
            {
                args: [
                    [
                        2,
                        2,
                        1
                    ]
                ],
                expected: 1
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
                expected: 1
            },
            {
                args: [
                    [
                        9,
                        3,
                        2,
                        10
                    ]
                ],
                expected: 0
            }
        ],
        hints: [
            "You repeatedly need the two largest values — that's a max-priority-queue.",
            "A max-heap gives O(log n) access to the heaviest stones each round.",
            "Pop two; if they differ push the difference; repeat until at most one remains."
        ],
        solutions: [
            {
                label: "Sort each round",
                approach: "Re-sort and take the two largest until fewer than two remain.",
                js: "function lastStoneWeight(stones) {\n  const s = [...stones];\n  while (s.length > 1) {\n    s.sort((a, b) => a - b);\n    const a = s.pop(), b = s.pop();\n    if (a !== b) s.push(a - b);\n  }\n  return s.length ? s[0] : 0;\n}\n",
                ts: "function lastStoneWeight(stones: number[]): number {\n  const s = [...stones];\n  while (s.length > 1) {\n    s.sort((a, b) => a - b);\n    const a = s.pop()!, b = s.pop()!;\n    if (a !== b) s.push(a - b);\n  }\n  return s.length ? s[0]! : 0;\n}\n",
                commentedCode: {
                    js: "function lastStoneWeight(stones) {\n  // Work on a copy so the input array remains unchanged.\n  const remaining = [...stones];\n  while (remaining.length > 1) {\n    // Sorting ascending places the two heaviest stones at the end.\n    remaining.sort((a, b) => a - b);\n    const heaviest = remaining.pop(), nextHeaviest = remaining.pop();\n    // Equal stones both vanish; otherwise return their positive difference.\n    if (heaviest !== nextHeaviest) remaining.push(heaviest - nextHeaviest);\n  }\n  // An empty collection means every stone was destroyed.\n  return remaining.length ? remaining[0] : 0;\n}\n",
                    ts: "function lastStoneWeight(stones: number[]): number {\n  // Work on a copy so the input array remains unchanged.\n  const remaining = [...stones];\n  while (remaining.length > 1) {\n    // Sorting ascending places the two heaviest stones at the end.\n    remaining.sort((a, b) => a - b);\n    const heaviest = remaining.pop()!, nextHeaviest = remaining.pop()!;\n    // Equal stones both vanish; otherwise return their positive difference.\n    if (heaviest !== nextHeaviest) remaining.push(heaviest - nextHeaviest);\n  }\n  // An empty collection means every stone was destroyed.\n  return remaining.length ? remaining[0]! : 0;\n}\n"
                },
                time: "O(n² log n)",
                space: "O(n)"
            },
            {
                label: "Max-heap",
                approach: "A max-heap yields the two heaviest stones in O(log n) per round.",
                js: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction lastStoneWeight(stones) {\n  const h = new MaxHeap();\n  for (const s of stones) h.push(s);\n  while (h.size() > 1) {\n    const a = h.pop(), b = h.pop();\n    if (a !== b) h.push(a - b);\n  }\n  return h.size() ? h.peek() : 0;\n}\n`,
                ts: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction lastStoneWeight(stones: number[]): number {\n  const h = new MaxHeap();\n  for (const s of stones) h.push(s);\n  while (h.size() > 1) {\n    const a = h.pop(), b = h.pop();\n    if (a !== b) h.push(a - b);\n  }\n  return h.size() ? h.peek() : 0;\n}\n`,
                commentedCode: {
                    js: `// MaxHeap always exposes the heaviest remaining stone at its root.\n${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction lastStoneWeight(stones) {\n  const heap = new MaxHeap();\n  // Load every stone into the priority queue.\n  for (const stone of stones) heap.push(stone);\n  while (heap.size() > 1) {\n    const heaviest = heap.pop(), nextHeaviest = heap.pop();\n    // Equal stones vanish; only a nonzero difference returns to the heap.\n    if (heaviest !== nextHeaviest) heap.push(heaviest - nextHeaviest);\n  }\n  return heap.size() ? heap.peek() : 0;\n}\n`,
                    ts: `// MaxHeap always exposes the heaviest remaining stone at its root.\n${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEAP_SOURCE"]}\nfunction lastStoneWeight(stones: number[]): number {\n  const heap = new MaxHeap();\n  // Load every stone into the priority queue.\n  for (const stone of stones) heap.push(stone);\n  while (heap.size() > 1) {\n    const heaviest = heap.pop(), nextHeaviest = heap.pop();\n    // Equal stones vanish; only a nonzero difference returns to the heap.\n    if (heaviest !== nextHeaviest) heap.push(heaviest - nextHeaviest);\n  }\n  return heap.size() ? heap.peek() : 0;\n}\n`
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    /* -------------------- Graphs -------------------- */ {
        id: "gr-degree",
        slug: "node-degree",
        title: "Node Degree",
        difficulty: "easy",
        statement: "Given an undirected graph as a list of `[u, v]` edges, return the degree of `node` — how many edges touch it.",
        examples: [
            {
                input: "[[0,1],[0,2],[1,2]], 0",
                output: "2"
            },
            {
                input: "[], 0",
                output: "0"
            },
            {
                input: "[[0,1]], 1",
                output: "1"
            }
        ],
        constraints: [
            "0 <= edges.length <= 10000",
            "no self-loops"
        ],
        functionName: "nodeDegree",
        starter: {
            js: "function nodeDegree(edges, node) {\n  // Number of edges incident to node.\n}\n",
            ts: "function nodeDegree(edges: number[][], node: number): number {\n  // Number of edges incident to node.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
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
                            2
                        ]
                    ],
                    0
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
                        [
                            0,
                            1
                        ]
                    ],
                    1
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
                    0
                ],
                expected: 3
            },
            {
                args: [
                    [
                        [
                            1,
                            2
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
                            5,
                            6
                        ],
                        [
                            6,
                            7
                        ],
                        [
                            7,
                            5
                        ]
                    ],
                    5
                ],
                expected: 2
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
                    0
                ],
                expected: 2
            },
            {
                args: [
                    [
                        [
                            9,
                            8
                        ]
                    ],
                    9
                ],
                expected: 1
            }
        ],
        hints: [
            "An edge touches `node` if the node is either endpoint.",
            "Count the edges where u === node or v === node.",
            "return edges.filter(([u, v]) => u === node || v === node).length."
        ],
        solutions: [
            {
                label: "Filter incident edges",
                approach: "Count edges that include the node as an endpoint.",
                js: "function nodeDegree(edges, node) {\n  return edges.filter(([u, v]) => u === node || v === node).length;\n}\n",
                ts: "function nodeDegree(edges: number[][], node: number): number {\n  return edges.filter(([u, v]) => u === node || v === node).length;\n}\n",
                commentedCode: {
                    js: "function nodeDegree(edges, node) {\n  // An undirected edge is incident to node when either endpoint matches.\n  const incident = edges.filter(([u, v]) => u === node || v === node);\n  // The degree is the number of incident edges, including duplicate edges.\n  return incident.length;\n}\n",
                    ts: "function nodeDegree(edges: number[][], node: number): number {\n  // An undirected edge is incident to node when either endpoint matches.\n  const incident = edges.filter(([u, v]) => u === node || v === node);\n  // The degree is the number of incident edges, including duplicate edges.\n  return incident.length;\n}\n"
                },
                time: "O(E)",
                space: "O(1)"
            },
            {
                label: "Accumulate",
                approach: "Walk the edges and tally matches.",
                js: "function nodeDegree(edges, node) {\n  let d = 0;\n  for (const [u, v] of edges) if (u === node || v === node) d++;\n  return d;\n}\n",
                ts: "function nodeDegree(edges: number[][], node: number): number {\n  let d = 0;\n  for (const [u, v] of edges) if (u === node || v === node) d++;\n  return d;\n}\n",
                commentedCode: {
                    js: "function nodeDegree(edges, node) {\n  let degree = 0;\n  // Inspect both endpoints of every undirected edge.\n  for (const [u, v] of edges) {\n    if (u === node || v === node) degree++;\n  }\n  return degree;\n}\n",
                    ts: "function nodeDegree(edges: number[][], node: number): number {\n  let degree = 0;\n  // Inspect both endpoints of every undirected edge.\n  for (const [u, v] of edges) {\n    if (u === node || v === node) degree++;\n  }\n  return degree;\n}\n"
                },
                time: "O(E)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "gr-has-path",
        slug: "graph-has-path",
        title: "Path Exists",
        difficulty: "medium",
        statement: "Given `n` nodes (0..n-1) and a list of undirected `[u, v]` edges, return `true` if there is a path from `src` to `dst`.",
        examples: [
            {
                input: "5, [[0,1],[1,2],[3,4]], 0, 2",
                output: "true"
            },
            {
                input: "5, [[0,1],[1,2],[3,4]], 0, 4",
                output: "false"
            },
            {
                input: "1, [], 0, 0",
                output: "true"
            }
        ],
        constraints: [
            "1 <= n <= 10000",
            "0 <= edges.length <= 20000"
        ],
        functionName: "hasPathEdges",
        starter: {
            js: "function hasPathEdges(n, edges, src, dst) {\n  // True if src can reach dst.\n}\n",
            ts: "function hasPathEdges(n: number, edges: number[][], src: number, dst: number): boolean {\n  // True if src can reach dst.\n  return false;\n}\n"
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
                    0,
                    2
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
                            3,
                            4
                        ]
                    ],
                    0,
                    4
                ],
                expected: false
            },
            {
                args: [
                    1,
                    [],
                    0,
                    0
                ],
                expected: true
            }
        ],
        hidden: [
            {
                args: [
                    3,
                    [],
                    0,
                    1
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
                        ]
                    ],
                    0,
                    1
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
                    ],
                    1,
                    0
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
                    ],
                    0,
                    3
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
                        ]
                    ],
                    0,
                    2
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
                    ],
                    1,
                    1
                ],
                expected: true
            }
        ],
        hints: [
            "Build an adjacency list, then explore outward from src.",
            "A breadth-first or depth-first search marking visited nodes finds any reachable dst.",
            "Seed a queue with src; for each node visit unvisited neighbours until you meet dst."
        ],
        solutions: [
            {
                label: "BFS",
                approach: "Explore reachable nodes level by level from src.",
                js: "function hasPathEdges(n, edges, src, dst) {\n  if (src === dst) return true;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  const queue = [src];\n  while (queue.length) {\n    const cur = queue.shift();\n    for (const nb of adj[cur]) {\n      if (nb === dst) return true;\n      if (!seen[nb]) { seen[nb] = true; queue.push(nb); }\n    }\n  }\n  return false;\n}\n",
                ts: "function hasPathEdges(n: number, edges: number[][], src: number, dst: number): boolean {\n  if (src === dst) return true;\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  const queue: number[] = [src];\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    for (const nb of adj[cur]!) {\n      if (nb === dst) return true;\n      if (!seen[nb]) { seen[nb] = true; queue.push(nb); }\n    }\n  }\n  return false;\n}\n",
                commentedCode: {
                    js: "function hasPathEdges(n, edges, src, dst) {\n  // A node always has a zero-edge path to itself.\n  if (src === dst) return true;\n  // Store both directions because the graph is undirected.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  const queue = [src];\n  // BFS explores every node reachable from src.\n  while (queue.length) {\n    const current = queue.shift();\n    for (const neighbor of adj[current]) {\n      if (neighbor === dst) return true;\n      // Mark on enqueue so each node enters the queue only once.\n      if (!seen[neighbor]) { seen[neighbor] = true; queue.push(neighbor); }\n    }\n  }\n  return false;\n}\n",
                    ts: "function hasPathEdges(n: number, edges: number[][], src: number, dst: number): boolean {\n  // A node always has a zero-edge path to itself.\n  if (src === dst) return true;\n  // Store both directions because the graph is undirected.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  const queue: number[] = [src];\n  // BFS explores every node reachable from src.\n  while (queue.length) {\n    const current = queue.shift() as number;\n    for (const neighbor of adj[current]!) {\n      if (neighbor === dst) return true;\n      // Mark on enqueue so each node enters the queue only once.\n      if (!seen[neighbor]) { seen[neighbor] = true; queue.push(neighbor); }\n    }\n  }\n  return false;\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            },
            {
                label: "Union-Find",
                approach: "Union every edge; src reaches dst iff they share a root.",
                js: "function hasPathEdges(n, edges, src, dst) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  for (const [u, v] of edges) { parent[find(u)] = find(v); }\n  return find(src) === find(dst);\n}\n",
                ts: "function hasPathEdges(n: number, edges: number[][], src: number, dst: number): boolean {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]!]!; x = parent[x]!; } return x; };\n  for (const [u, v] of edges) { parent[find(u!)] = find(v!); }\n  return find(src) === find(dst);\n}\n",
                commentedCode: {
                    js: "function hasPathEdges(n, edges, src, dst) {\n  // Initially every node is the root of its own component.\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => {\n    // Follow parents to the root and halve the path along the way.\n    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }\n    return x;\n  };\n  // Each edge merges the components containing its endpoints.\n  for (const [u, v] of edges) parent[find(u)] = find(v);\n  // A path exists exactly when both nodes end in the same component.\n  return find(src) === find(dst);\n}\n",
                    ts: "function hasPathEdges(n: number, edges: number[][], src: number, dst: number): boolean {\n  // Initially every node is the root of its own component.\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => {\n    // Follow parents to the root and halve the path along the way.\n    while (parent[x] !== x) { parent[x] = parent[parent[x]!]!; x = parent[x]!; }\n    return x;\n  };\n  // Each edge merges the components containing its endpoints.\n  for (const [u, v] of edges) parent[find(u!)] = find(v!);\n  // A path exists exactly when both nodes end in the same component.\n  return find(src) === find(dst);\n}\n"
                },
                time: "O((V + E) α)",
                space: "O(V)"
            }
        ]
    },
    {
        id: "gr-count-components",
        slug: "count-components",
        title: "Connected Components",
        difficulty: "medium",
        statement: "Given `n` nodes (0..n-1) and undirected `[u, v]` edges, return the number of connected components.",
        examples: [
            {
                input: "5, [[0,1],[1,2],[3,4]]",
                output: "2"
            },
            {
                input: "3, []",
                output: "3"
            },
            {
                input: "1, []",
                output: "1"
            }
        ],
        constraints: [
            "1 <= n <= 10000",
            "0 <= edges.length <= 20000"
        ],
        functionName: "countComponents",
        starter: {
            js: "function countComponents(n, edges) {\n  // Number of connected components.\n}\n",
            ts: "function countComponents(n: number, edges: number[][]): number {\n  // Number of connected components.\n  return 0;\n}\n"
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
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    3,
                    []
                ],
                expected: 3
            },
            {
                args: [
                    1,
                    []
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
                    ]
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
                    ]
                ],
                expected: 1
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
                    ]
                ],
                expected: 3
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
                expected: 1
            },
            {
                args: [
                    5,
                    []
                ],
                expected: 5
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
                expected: 2
            }
        ],
        hints: [
            "Start with n components and merge whenever an edge joins two different groups.",
            "Union-Find: each successful union of distinct roots reduces the count by one.",
            "count = n; for [u,v]: if find(u) !== find(v) then union and count--."
        ],
        solutions: [
            {
                label: "Union-Find",
                approach: "Merge endpoints; each distinct merge drops the component count.",
                js: "function countComponents(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru !== rv) { parent[ru] = rv; count--; }\n  }\n  return count;\n}\n",
                ts: "function countComponents(n: number, edges: number[][]): number {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]!]!; x = parent[x]!; } return x; };\n  let count = n;\n  for (const [u, v] of edges) {\n    const ru = find(u!), rv = find(v!);\n    if (ru !== rv) { parent[ru] = rv; count--; }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countComponents(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => {\n    // Path halving shortens future walks from a node to its root.\n    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }\n    return x;\n  };\n  // With no edges, each node is a separate component.\n  let count = n;\n  for (const [u, v] of edges) {\n    const rootU = find(u), rootV = find(v);\n    // Only an edge joining two different roots reduces the total.\n    if (rootU !== rootV) { parent[rootU] = rootV; count--; }\n  }\n  return count;\n}\n",
                    ts: "function countComponents(n: number, edges: number[][]): number {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => {\n    // Path halving shortens future walks from a node to its root.\n    while (parent[x] !== x) { parent[x] = parent[parent[x]!]!; x = parent[x]!; }\n    return x;\n  };\n  // With no edges, each node is a separate component.\n  let count = n;\n  for (const [u, v] of edges) {\n    const rootU = find(u!), rootV = find(v!);\n    // Only an edge joining two different roots reduces the total.\n    if (rootU !== rootV) { parent[rootU] = rootV; count--; }\n  }\n  return count;\n}\n"
                },
                time: "O((V + E) α)",
                space: "O(V)"
            },
            {
                label: "DFS flood fill",
                approach: "Count the number of DFS launches needed to visit every node.",
                js: "function countComponents(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    count++;\n    const stack = [i];\n    seen[i] = true;\n    while (stack.length) {\n      const cur = stack.pop();\n      for (const nb of adj[cur]) if (!seen[nb]) { seen[nb] = true; stack.push(nb); }\n    }\n  }\n  return count;\n}\n",
                ts: "function countComponents(n: number, edges: number[][]): number {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    if (seen[i]) continue;\n    count++;\n    const stack = [i];\n    seen[i] = true;\n    while (stack.length) {\n      const cur = stack.pop() as number;\n      for (const nb of adj[cur]!) if (!seen[nb]) { seen[nb] = true; stack.push(nb); }\n    }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: "function countComponents(n, edges) {\n  // Build an undirected adjacency list for graph traversal.\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  let count = 0;\n  for (let node = 0; node < n; node++) {\n    if (seen[node]) continue;\n    // An unseen node starts one previously uncounted component.\n    count++;\n    const stack = [node];\n    seen[node] = true;\n    // Flood-fill this entire component before looking for another.\n    while (stack.length) {\n      const current = stack.pop();\n      for (const neighbor of adj[current]) {\n        if (!seen[neighbor]) { seen[neighbor] = true; stack.push(neighbor); }\n      }\n    }\n  }\n  return count;\n}\n",
                    ts: "function countComponents(n: number, edges: number[][]): number {\n  // Build an undirected adjacency list for graph traversal.\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  let count = 0;\n  for (let node = 0; node < n; node++) {\n    if (seen[node]) continue;\n    // An unseen node starts one previously uncounted component.\n    count++;\n    const stack = [node];\n    seen[node] = true;\n    // Flood-fill this entire component before looking for another.\n    while (stack.length) {\n      const current = stack.pop() as number;\n      for (const neighbor of adj[current]!) {\n        if (!seen[neighbor]) { seen[neighbor] = true; stack.push(neighbor); }\n      }\n    }\n  }\n  return count;\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            }
        ]
    },
    {
        id: "gr-shortest-path",
        slug: "shortest-path-unweighted",
        title: "Shortest Path (Unweighted)",
        difficulty: "medium",
        statement: "Given `n` nodes (0..n-1) and undirected `[u, v]` edges, return the number of edges on the shortest path from `src` to `dst`, or -1 if unreachable.",
        examples: [
            {
                input: "4, [[0,1],[1,2],[2,3]], 0, 3",
                output: "3"
            },
            {
                input: "4, [[0,1],[1,2],[2,3]], 0, 0",
                output: "0"
            },
            {
                input: "3, [], 0, 2",
                output: "-1"
            }
        ],
        constraints: [
            "1 <= n <= 10000",
            "0 <= edges.length <= 20000"
        ],
        functionName: "shortestPath",
        starter: {
            js: "function shortestPath(n, edges, src, dst) {\n  // Fewest edges from src to dst, or -1.\n}\n",
            ts: "function shortestPath(n: number, edges: number[][], src: number, dst: number): number {\n  // Fewest edges from src to dst, or -1.\n  return -1;\n}\n"
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
                        ]
                    ],
                    0,
                    3
                ],
                expected: 3
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
                    0,
                    0
                ],
                expected: 0
            },
            {
                args: [
                    3,
                    [],
                    0,
                    2
                ],
                expected: -1
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
                    ],
                    0,
                    1
                ],
                expected: 1
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
                            0,
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
                expected: 3
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
                    3
                ],
                expected: -1
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
                    0,
                    2
                ],
                expected: 1
            },
            {
                args: [
                    1,
                    [],
                    0,
                    0
                ],
                expected: 0
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
                        ],
                        [
                            0,
                            3
                        ]
                    ],
                    0,
                    3
                ],
                expected: 1
            }
        ],
        hints: [
            "In an unweighted graph, breadth-first search finds the fewest-edge path.",
            "Track the distance to each node as you expand BFS layers from src.",
            "Enqueue src at distance 0; each neighbour gets the current distance + 1."
        ],
        solutions: [
            {
                label: "BFS distances",
                approach: "BFS layer by layer, recording the first time each node is reached.",
                js: "function shortestPath(n, edges, src, dst) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const dist = new Array(n).fill(-1);\n  dist[src] = 0;\n  const queue = [src];\n  while (queue.length) {\n    const cur = queue.shift();\n    if (cur === dst) return dist[cur];\n    for (const nb of adj[cur]) if (dist[nb] === -1) { dist[nb] = dist[cur] + 1; queue.push(nb); }\n  }\n  return dist[dst];\n}\n",
                ts: "function shortestPath(n: number, edges: number[][], src: number, dst: number): number {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const dist = new Array(n).fill(-1);\n  dist[src] = 0;\n  const queue: number[] = [src];\n  while (queue.length) {\n    const cur = queue.shift() as number;\n    if (cur === dst) return dist[cur];\n    for (const nb of adj[cur]!) if (dist[nb] === -1) { dist[nb] = dist[cur] + 1; queue.push(nb); }\n  }\n  return dist[dst];\n}\n",
                commentedCode: {
                    js: "function shortestPath(n, edges, src, dst) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  // -1 means the node has not yet been reached.\n  const distance = new Array(n).fill(-1);\n  distance[src] = 0;\n  const queue = [src];\n  // BFS reaches nodes in nondecreasing distance from src.\n  while (queue.length) {\n    const current = queue.shift();\n    if (current === dst) return distance[current];\n    for (const neighbor of adj[current]) {\n      if (distance[neighbor] === -1) {\n        distance[neighbor] = distance[current] + 1;\n        queue.push(neighbor);\n      }\n    }\n  }\n  // An unreached destination keeps its -1 sentinel.\n  return distance[dst];\n}\n",
                    ts: "function shortestPath(n: number, edges: number[][], src: number, dst: number): number {\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  // -1 means the node has not yet been reached.\n  const distance = new Array(n).fill(-1);\n  distance[src] = 0;\n  const queue: number[] = [src];\n  // BFS reaches nodes in nondecreasing distance from src.\n  while (queue.length) {\n    const current = queue.shift() as number;\n    if (current === dst) return distance[current];\n    for (const neighbor of adj[current]!) {\n      if (distance[neighbor] === -1) {\n        distance[neighbor] = distance[current] + 1;\n        queue.push(neighbor);\n      }\n    }\n  }\n  // An unreached destination keeps its -1 sentinel.\n  return distance[dst];\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            },
            {
                label: "BFS with a visited layer count",
                approach: "Expand whole layers, incrementing depth until dst appears.",
                js: "function shortestPath(n, edges, src, dst) {\n  if (src === dst) return 0;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  let layer = [src], depth = 0;\n  while (layer.length) {\n    depth++;\n    const next = [];\n    for (const cur of layer) for (const nb of adj[cur]) {\n      if (nb === dst) return depth;\n      if (!seen[nb]) { seen[nb] = true; next.push(nb); }\n    }\n    layer = next;\n  }\n  return -1;\n}\n",
                ts: "function shortestPath(n: number, edges: number[][], src: number, dst: number): number {\n  if (src === dst) return 0;\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  let layer: number[] = [src], depth = 0;\n  while (layer.length) {\n    depth++;\n    const next: number[] = [];\n    for (const cur of layer) for (const nb of adj[cur]!) {\n      if (nb === dst) return depth;\n      if (!seen[nb]) { seen[nb] = true; next.push(nb); }\n    }\n    layer = next;\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: "function shortestPath(n, edges, src, dst) {\n  if (src === dst) return 0;\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  let layer = [src], depth = 0;\n  // Each completed layer represents one more edge from src.\n  while (layer.length) {\n    depth++;\n    const next = [];\n    for (const current of layer) {\n      for (const neighbor of adj[current]) {\n        if (neighbor === dst) return depth;\n        // Queue each node once for the following BFS layer.\n        if (!seen[neighbor]) { seen[neighbor] = true; next.push(neighbor); }\n      }\n    }\n    layer = next;\n  }\n  return -1;\n}\n",
                    ts: "function shortestPath(n: number, edges: number[][], src: number, dst: number): number {\n  if (src === dst) return 0;\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); }\n  const seen = new Array(n).fill(false);\n  seen[src] = true;\n  let layer: number[] = [src], depth = 0;\n  // Each completed layer represents one more edge from src.\n  while (layer.length) {\n    depth++;\n    const next: number[] = [];\n    for (const current of layer) {\n      for (const neighbor of adj[current]!) {\n        if (neighbor === dst) return depth;\n        // Queue each node once for the following BFS layer.\n        if (!seen[neighbor]) { seen[neighbor] = true; next.push(neighbor); }\n      }\n    }\n    layer = next;\n  }\n  return -1;\n}\n"
                },
                time: "O(V + E)",
                space: "O(V + E)"
            }
        ]
    },
    /* -------------------- Tries -------------------- */ {
        id: "tr-count-prefix",
        slug: "count-with-prefix",
        title: "Count Words with Prefix",
        difficulty: "easy",
        statement: "Return how many of the given words start with `prefix`.",
        examples: [
            {
                input: '["apple","app","apricot"], "ap"',
                output: "3"
            },
            {
                input: '[], "a"',
                output: "0"
            },
            {
                input: '["dog","cat"], "do"',
                output: "1"
            }
        ],
        constraints: [
            "0 <= words.length <= 10000"
        ],
        functionName: "countWithPrefix",
        starter: {
            js: "function countWithPrefix(words, prefix) {\n  // How many words start with prefix.\n}\n",
            ts: "function countWithPrefix(words: string[], prefix: string): number {\n  // How many words start with prefix.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        "apple",
                        "app",
                        "apricot"
                    ],
                    "ap"
                ],
                expected: 3
            },
            {
                args: [
                    [],
                    "a"
                ],
                expected: 0
            },
            {
                args: [
                    [
                        "dog",
                        "cat"
                    ],
                    "do"
                ],
                expected: 1
            }
        ],
        hidden: [
            {
                args: [
                    [
                        "a"
                    ],
                    "a"
                ],
                expected: 1
            },
            {
                args: [
                    [
                        "a"
                    ],
                    "b"
                ],
                expected: 0
            },
            {
                args: [
                    [
                        "abc",
                        "abd",
                        "xyz"
                    ],
                    "ab"
                ],
                expected: 2
            },
            {
                args: [
                    [
                        "hello"
                    ],
                    "hello"
                ],
                expected: 1
            },
            {
                args: [
                    [
                        "hi",
                        "his",
                        "history"
                    ],
                    "his"
                ],
                expected: 2
            },
            {
                args: [
                    [
                        "x",
                        "y"
                    ],
                    ""
                ],
                expected: 2
            }
        ],
        hints: [
            "A word qualifies when it begins with the prefix.",
            "String.startsWith answers each membership test directly.",
            "return words.filter((w) => w.startsWith(prefix)).length."
        ],
        solutions: [
            {
                label: "Filter by startsWith",
                approach: "Count words beginning with the prefix.",
                js: "function countWithPrefix(words, prefix) {\n  return words.filter((w) => w.startsWith(prefix)).length;\n}\n",
                ts: "function countWithPrefix(words: string[], prefix: string): number {\n  return words.filter((w) => w.startsWith(prefix)).length;\n}\n",
                commentedCode: {
                    js: "function countWithPrefix(words, prefix) {\n  // Keep exactly the words whose first characters match the full prefix.\n  const matches = words.filter((word) => word.startsWith(prefix));\n  return matches.length;\n}\n",
                    ts: "function countWithPrefix(words: string[], prefix: string): number {\n  // Keep exactly the words whose first characters match the full prefix.\n  const matches = words.filter((word) => word.startsWith(prefix));\n  return matches.length;\n}\n"
                },
                time: "O(n·p)",
                space: "O(1)"
            },
            {
                label: "Accumulate",
                approach: "Tally matches in a loop.",
                js: "function countWithPrefix(words, prefix) {\n  let c = 0;\n  for (const w of words) if (w.startsWith(prefix)) c++;\n  return c;\n}\n",
                ts: "function countWithPrefix(words: string[], prefix: string): number {\n  let c = 0;\n  for (const w of words) if (w.startsWith(prefix)) c++;\n  return c;\n}\n",
                commentedCode: {
                    js: "function countWithPrefix(words, prefix) {\n  let count = 0;\n  // Test each word independently and tally every prefix match.\n  for (const word of words) {\n    if (word.startsWith(prefix)) count++;\n  }\n  return count;\n}\n",
                    ts: "function countWithPrefix(words: string[], prefix: string): number {\n  let count = 0;\n  // Test each word independently and tally every prefix match.\n  for (const word of words) {\n    if (word.startsWith(prefix)) count++;\n  }\n  return count;\n}\n"
                },
                time: "O(n·p)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "tr-longest-common-prefix",
        slug: "longest-common-prefix",
        title: "Longest Common Prefix",
        difficulty: "medium",
        statement: "Return the longest string that is a prefix of every word in the list, or an empty string if there is none.",
        examples: [
            {
                input: '["flower","flow","flight"]',
                output: '"fl"'
            },
            {
                input: '["dog","racecar","car"]',
                output: '""'
            },
            {
                input: "[]",
                output: '""'
            }
        ],
        constraints: [
            "0 <= words.length <= 10000"
        ],
        functionName: "longestCommonPrefix",
        starter: {
            js: "function longestCommonPrefix(words) {\n  // The longest prefix shared by all words.\n}\n",
            ts: "function longestCommonPrefix(words: string[]): string {\n  // The longest prefix shared by all words.\n  return '';\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        "flower",
                        "flow",
                        "flight"
                    ]
                ],
                expected: "fl"
            },
            {
                args: [
                    [
                        "dog",
                        "racecar",
                        "car"
                    ]
                ],
                expected: ""
            },
            {
                args: [
                    []
                ],
                expected: ""
            }
        ],
        hidden: [
            {
                args: [
                    [
                        "a"
                    ]
                ],
                expected: "a"
            },
            {
                args: [
                    [
                        "abc",
                        "abc"
                    ]
                ],
                expected: "abc"
            },
            {
                args: [
                    [
                        "abc",
                        "ab"
                    ]
                ],
                expected: "ab"
            },
            {
                args: [
                    [
                        "x",
                        "y"
                    ]
                ],
                expected: ""
            },
            {
                args: [
                    [
                        "prefix",
                        "pre",
                        "prefixes"
                    ]
                ],
                expected: "pre"
            },
            {
                args: [
                    [
                        ""
                    ]
                ],
                expected: ""
            }
        ],
        hints: [
            "Start by assuming the whole first word is the prefix, then shrink it.",
            "For each word, trim the prefix until the word starts with it.",
            "while (!word.startsWith(prefix)) prefix = prefix.slice(0, -1)."
        ],
        solutions: [
            {
                label: "Shrink a candidate",
                approach: "Trim the prefix until it fits every word.",
                js: "function longestCommonPrefix(words) {\n  if (words.length === 0) return '';\n  let prefix = words[0];\n  for (const w of words) {\n    while (!w.startsWith(prefix)) {\n      prefix = prefix.slice(0, -1);\n      if (prefix === '') return '';\n    }\n  }\n  return prefix;\n}\n",
                ts: "function longestCommonPrefix(words: string[]): string {\n  if (words.length === 0) return '';\n  let prefix = words[0]!;\n  for (const w of words) {\n    while (!w.startsWith(prefix)) {\n      prefix = prefix.slice(0, -1);\n      if (prefix === '') return '';\n    }\n  }\n  return prefix;\n}\n",
                commentedCode: {
                    js: "function longestCommonPrefix(words) {\n  if (words.length === 0) return '';\n  // Begin with the largest possible candidate: the entire first word.\n  let prefix = words[0];\n  for (const word of words) {\n    // Remove trailing characters until this word accepts the candidate.\n    while (!word.startsWith(prefix)) {\n      prefix = prefix.slice(0, -1);\n      // No nonempty common prefix can exist once the candidate is empty.\n      if (prefix === '') return '';\n    }\n  }\n  return prefix;\n}\n",
                    ts: "function longestCommonPrefix(words: string[]): string {\n  if (words.length === 0) return '';\n  // Begin with the largest possible candidate: the entire first word.\n  let prefix = words[0]!;\n  for (const word of words) {\n    // Remove trailing characters until this word accepts the candidate.\n    while (!word.startsWith(prefix)) {\n      prefix = prefix.slice(0, -1);\n      // No nonempty common prefix can exist once the candidate is empty.\n      if (prefix === '') return '';\n    }\n  }\n  return prefix;\n}\n"
                },
                time: "O(n·p)",
                space: "O(1)"
            },
            {
                label: "Column scan",
                approach: "Compare characters column by column until one differs.",
                js: "function longestCommonPrefix(words) {\n  if (words.length === 0) return '';\n  const first = words[0];\n  for (let i = 0; i < first.length; i++) {\n    const ch = first[i];\n    for (const w of words) {\n      if (i >= w.length || w[i] !== ch) return first.slice(0, i);\n    }\n  }\n  return first;\n}\n",
                ts: "function longestCommonPrefix(words: string[]): string {\n  if (words.length === 0) return '';\n  const first = words[0]!;\n  for (let i = 0; i < first.length; i++) {\n    const ch = first[i];\n    for (const w of words) {\n      if (i >= w.length || w[i] !== ch) return first.slice(0, i);\n    }\n  }\n  return first;\n}\n",
                commentedCode: {
                    js: "function longestCommonPrefix(words) {\n  if (words.length === 0) return '';\n  const first = words[0];\n  // Use each character of the first word as the expected column value.\n  for (let i = 0; i < first.length; i++) {\n    const expected = first[i];\n    for (const word of words) {\n      // A short word or a mismatch ends the common prefix before column i.\n      if (i >= word.length || word[i] !== expected) return first.slice(0, i);\n    }\n  }\n  // Every column of the first word matched every other word.\n  return first;\n}\n",
                    ts: "function longestCommonPrefix(words: string[]): string {\n  if (words.length === 0) return '';\n  const first = words[0]!;\n  // Use each character of the first word as the expected column value.\n  for (let i = 0; i < first.length; i++) {\n    const expected = first[i];\n    for (const word of words) {\n      // A short word or a mismatch ends the common prefix before column i.\n      if (i >= word.length || word[i] !== expected) return first.slice(0, i);\n    }\n  }\n  // Every column of the first word matched every other word.\n  return first;\n}\n"
                },
                time: "O(n·p)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "tr-all-with-prefix",
        slug: "words-with-prefix",
        title: "Words with Prefix",
        difficulty: "medium",
        statement: "Return every word that starts with `prefix`, sorted in ascending order (keep duplicates).",
        examples: [
            {
                input: '["apple","app","apricot","banana"], "ap"',
                output: '["app","apple","apricot"]'
            },
            {
                input: '["dog","cat"], "z"',
                output: "[]"
            },
            {
                input: '["a","ab"], "a"',
                output: '["a","ab"]'
            }
        ],
        constraints: [
            "0 <= words.length <= 10000"
        ],
        functionName: "wordsWithPrefix",
        starter: {
            js: "function wordsWithPrefix(words, prefix) {\n  // Words starting with prefix, sorted ascending.\n}\n",
            ts: "function wordsWithPrefix(words: string[], prefix: string): string[] {\n  // Words starting with prefix, sorted ascending.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        "apple",
                        "app",
                        "apricot",
                        "banana"
                    ],
                    "ap"
                ],
                expected: [
                    "app",
                    "apple",
                    "apricot"
                ]
            },
            {
                args: [
                    [
                        "dog",
                        "cat"
                    ],
                    "z"
                ],
                expected: []
            },
            {
                args: [
                    [
                        "a",
                        "ab"
                    ],
                    "a"
                ],
                expected: [
                    "a",
                    "ab"
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [],
                    "a"
                ],
                expected: []
            },
            {
                args: [
                    [
                        "b",
                        "a"
                    ],
                    ""
                ],
                expected: [
                    "a",
                    "b"
                ]
            },
            {
                args: [
                    [
                        "cat",
                        "car",
                        "card"
                    ],
                    "ca"
                ],
                expected: [
                    "car",
                    "card",
                    "cat"
                ]
            },
            {
                args: [
                    [
                        "x"
                    ],
                    "x"
                ],
                expected: [
                    "x"
                ]
            },
            {
                args: [
                    [
                        "apple",
                        "apple"
                    ],
                    "ap"
                ],
                expected: [
                    "apple",
                    "apple"
                ]
            },
            {
                args: [
                    [
                        "hi",
                        "hello",
                        "hey"
                    ],
                    "he"
                ],
                expected: [
                    "hello",
                    "hey"
                ]
            }
        ],
        hints: [
            "Filter to the matching words, then sort them.",
            "startsWith selects the candidates; a lexicographic sort orders them.",
            "return words.filter((w) => w.startsWith(prefix)).sort()."
        ],
        solutions: [
            {
                label: "Filter and sort",
                approach: "Select prefix matches and sort lexicographically.",
                js: "function wordsWithPrefix(words, prefix) {\n  return words.filter((w) => w.startsWith(prefix)).sort();\n}\n",
                ts: "function wordsWithPrefix(words: string[], prefix: string): string[] {\n  return words.filter((w) => w.startsWith(prefix)).sort();\n}\n",
                commentedCode: {
                    js: "function wordsWithPrefix(words, prefix) {\n  // Filtering creates a new array and preserves duplicate matching words.\n  const matches = words.filter((word) => word.startsWith(prefix));\n  // Default string sorting puts the selected words in ascending order.\n  return matches.sort();\n}\n",
                    ts: "function wordsWithPrefix(words: string[], prefix: string): string[] {\n  // Filtering creates a new array and preserves duplicate matching words.\n  const matches = words.filter((word) => word.startsWith(prefix));\n  // Default string sorting puts the selected words in ascending order.\n  return matches.sort();\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            },
            {
                label: "Collect then sort",
                approach: "Gather matches in a loop, then order them.",
                js: "function wordsWithPrefix(words, prefix) {\n  const out = [];\n  for (const w of words) if (w.startsWith(prefix)) out.push(w);\n  return out.sort();\n}\n",
                ts: "function wordsWithPrefix(words: string[], prefix: string): string[] {\n  const out: string[] = [];\n  for (const w of words) if (w.startsWith(prefix)) out.push(w);\n  return out.sort();\n}\n",
                commentedCode: {
                    js: "function wordsWithPrefix(words, prefix) {\n  const matches = [];\n  // Collect every match, including repeated words.\n  for (const word of words) {\n    if (word.startsWith(prefix)) matches.push(word);\n  }\n  // Sort only the collected output, leaving words unchanged.\n  return matches.sort();\n}\n",
                    ts: "function wordsWithPrefix(words: string[], prefix: string): string[] {\n  const matches: string[] = [];\n  // Collect every match, including repeated words.\n  for (const word of words) {\n    if (word.startsWith(prefix)) matches.push(word);\n  }\n  // Sort only the collected output, leaving words unchanged.\n  return matches.sort();\n}\n"
                },
                time: "O(n log n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "tr-is-prefix-of-any",
        slug: "is-prefix-of-any",
        title: "Is a Prefix of Any",
        difficulty: "easy",
        statement: "Return `true` if the string `s` is a prefix of at least one of the words.",
        examples: [
            {
                input: '["apple","banana"], "app"',
                output: "true"
            },
            {
                input: '["apple"], "xyz"',
                output: "false"
            },
            {
                input: '[], "a"',
                output: "false"
            }
        ],
        constraints: [
            "0 <= words.length <= 10000"
        ],
        functionName: "isPrefixOfAny",
        starter: {
            js: "function isPrefixOfAny(words, s) {\n  // True if s is a prefix of some word.\n}\n",
            ts: "function isPrefixOfAny(words: string[], s: string): boolean {\n  // True if s is a prefix of some word.\n  return false;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        "apple",
                        "banana"
                    ],
                    "app"
                ],
                expected: true
            },
            {
                args: [
                    [
                        "apple"
                    ],
                    "xyz"
                ],
                expected: false
            },
            {
                args: [
                    [],
                    "a"
                ],
                expected: false
            }
        ],
        hidden: [
            {
                args: [
                    [
                        "abc"
                    ],
                    "abc"
                ],
                expected: true
            },
            {
                args: [
                    [
                        "abc"
                    ],
                    "abcd"
                ],
                expected: false
            },
            {
                args: [
                    [
                        "hello",
                        "help"
                    ],
                    "hel"
                ],
                expected: true
            },
            {
                args: [
                    [
                        "a"
                    ],
                    ""
                ],
                expected: true
            },
            {
                args: [
                    [
                        "cat"
                    ],
                    "c"
                ],
                expected: true
            },
            {
                args: [
                    [
                        "dog"
                    ],
                    "do"
                ],
                expected: true
            }
        ],
        hints: [
            "You need just one word that begins with s.",
            "Array.some with startsWith expresses this cleanly.",
            "return words.some((w) => w.startsWith(s))."
        ],
        solutions: [
            {
                label: "Some startsWith",
                approach: "Return true as soon as any word starts with s.",
                js: "function isPrefixOfAny(words, s) {\n  return words.some((w) => w.startsWith(s));\n}\n",
                ts: "function isPrefixOfAny(words: string[], s: string): boolean {\n  return words.some((w) => w.startsWith(s));\n}\n",
                commentedCode: {
                    js: "function isPrefixOfAny(words, s) {\n  // some stops immediately when the first word begins with s.\n  return words.some((word) => word.startsWith(s));\n}\n",
                    ts: "function isPrefixOfAny(words: string[], s: string): boolean {\n  // some stops immediately when the first word begins with s.\n  return words.some((word) => word.startsWith(s));\n}\n"
                },
                time: "O(n·p)",
                space: "O(1)"
            },
            {
                label: "Early-exit loop",
                approach: "Scan and return on the first match.",
                js: "function isPrefixOfAny(words, s) {\n  for (const w of words) if (w.startsWith(s)) return true;\n  return false;\n}\n",
                ts: "function isPrefixOfAny(words: string[], s: string): boolean {\n  for (const w of words) if (w.startsWith(s)) return true;\n  return false;\n}\n",
                commentedCode: {
                    js: "function isPrefixOfAny(words, s) {\n  // Stop as soon as one word proves that s is a valid prefix.\n  for (const word of words) {\n    if (word.startsWith(s)) return true;\n  }\n  // Exhausting the list means no word matched.\n  return false;\n}\n",
                    ts: "function isPrefixOfAny(words: string[], s: string): boolean {\n  // Stop as soon as one word proves that s is a valid prefix.\n  for (const word of words) {\n    if (word.startsWith(s)) return true;\n  }\n  // Exhausting the list means no word matched.\n  return false;\n}\n"
                },
                time: "O(n·p)",
                space: "O(1)"
            }
        ]
    }
];
const stage2Batch3Problems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const stage2Batch3Mcqs = [
    {
        id: "s2-heap-push",
        kind: "mcq",
        prompt: "Inserting a value into a binary heap of n elements is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answerIndex: 1,
        explanation: "The value sifts up at most the height of the heap, which is log n."
    },
    {
        id: "s2-heap-peek",
        kind: "mcq",
        prompt: "Reading the minimum (or maximum) at the top of a heap is:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answerIndex: 0,
        explanation: "The extreme element is always at index 0 — constant time to read."
    },
    {
        id: "s2-graph-bfs",
        kind: "mcq",
        prompt: "A BFS or DFS over a graph with V nodes and E edges runs in:",
        options: [
            "O(V)",
            "O(V + E)",
            "O(V · E)",
            "O(V²)"
        ],
        answerIndex: 1,
        explanation: "Each node and each edge is examined a constant number of times."
    },
    {
        id: "s2-graph-adjmatrix",
        kind: "mcq",
        prompt: "Listing all neighbours of a node stored in an adjacency matrix is:",
        options: [
            "O(1)",
            "O(log V)",
            "O(V)",
            "O(E)"
        ],
        answerIndex: 2,
        explanation: "You must scan the node's entire row of V possible connections."
    },
    {
        id: "s2-trie-lookup",
        kind: "mcq",
        prompt: "Looking up a word of length L in a trie takes:",
        options: [
            "O(1)",
            "O(L)",
            "O(n)",
            "O(L log n)"
        ],
        answerIndex: 1,
        explanation: "You follow one child pointer per character, so time is proportional to L."
    },
    {
        id: "s2-trie-prefix",
        kind: "mcq",
        prompt: "A trie answers 'does any word have this prefix?' in time proportional to:",
        options: [
            "O(1)",
            "the prefix length",
            "the number of words",
            "O(n²)"
        ],
        answerIndex: 1,
        explanation: "You walk one node per prefix character; the word count is irrelevant."
    }
];
const stage2Batch3Modules = [
    {
        id: "m-ds-heaps",
        stageId: S,
        title: "Heaps & Priority Queues",
        kind: "buildLab",
        summary: "The array-backed heap that yields the min or max in O(log n) — your reusable priority queue.",
        lessonSections: [
            {
                heading: "A tree inside an array",
                body: `A binary heap is a complete tree packed into an array: node \`i\`'s children live at \`2i+1\` and \`2i+2\`. A **min-heap** keeps the smallest value at the root. Insert (*sift up*) and remove-min (*sift down*) are **O(log n)**; reading the top is **O(1)**.

\`\`\`js
// The array [1, 3, 2, 7, 4] is a valid min-heap:
//        1
//      /   \\
//     3     2
//    / \\
//   7   4
console.log("root (min):", [1, 3, 2, 7, 4][0]); // 1
\`\`\``
            },
            {
                heading: "Priority queues everywhere",
                body: `Whenever you repeatedly need the current smallest or largest — Top-K, merging sorted streams, Dijkstra, scheduling — a heap is the tool. The **MinHeap you build here is reused** by later pattern stages, so make it solid.

**Recognition cues:** "k largest/smallest", "repeatedly take the extreme", "merge sorted lists", or "median of a stream" → heap. Build it in the lab, then take on the drills.`
            }
        ],
        guidedExampleProblemId: "hp-k-smallest",
        drillProblemIds: [
            "hp-k-smallest",
            "hp-is-min-heap"
        ],
        testPoolProblemIds: [
            "hp-kth-largest",
            "hp-last-stone-weight"
        ],
        complexityQuestionIds: [
            "s2-heap-push",
            "s2-heap-peek"
        ],
        buildLab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heapLab"],
        badgeId: "badge-ds-heaps",
        prerequisiteModuleIds: [
            "m-ds-trees"
        ]
    },
    {
        id: "m-ds-graphs",
        stageId: S,
        title: "Graphs",
        kind: "buildLab",
        summary: "Nodes and edges — adjacency lists, BFS/DFS traversal, and connectivity in O(V+E).",
        lessonSections: [
            {
                heading: "Representing a graph",
                body: `A graph is nodes joined by edges. The usual representation is an **adjacency list** — a map from each node to its neighbours — which uses O(V+E) space and lists a node's neighbours quickly.

\`\`\`js
const adj = new Map();
const add = (u, v) => {
  if (!adj.has(u)) adj.set(u, []);
  if (!adj.has(v)) adj.set(v, []);
  adj.get(u).push(v); adj.get(v).push(u); // undirected
};
add(0, 1); add(1, 2);
console.log([...adj.entries()]); // 0:[1], 1:[0,2], 2:[1]
\`\`\``
            },
            {
                heading: "Traversal is the toolkit",
                body: `**BFS** (a queue) explores level by level and finds shortest paths in unweighted graphs; **DFS** (a stack or recursion) is great for connectivity and cycles. Both run in **O(V+E)**. Union-Find is a fast alternative for pure connectivity questions.

**Recognition cues:** reachability, shortest hops, connected components, cycle detection, grid/island problems → graph traversal. Build a graph in the lab, then tackle the drills.`
            }
        ],
        guidedExampleProblemId: "gr-has-path",
        drillProblemIds: [
            "gr-degree",
            "gr-has-path"
        ],
        testPoolProblemIds: [
            "gr-count-components",
            "gr-shortest-path"
        ],
        complexityQuestionIds: [
            "s2-graph-bfs",
            "s2-graph-adjmatrix"
        ],
        buildLab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphLab"],
        badgeId: "badge-ds-graphs",
        prerequisiteModuleIds: [
            "m-ds-hash"
        ]
    },
    {
        id: "m-ds-tries",
        stageId: S,
        title: "Tries",
        kind: "buildLab",
        summary: "The prefix tree — word and prefix lookups in time proportional to the word length.",
        lessonSections: [
            {
                heading: "One node per character",
                body: `A **trie** (prefix tree) stores strings by sharing common prefixes: each edge is a character, each node may mark the end of a word. Lookup and insert take **O(L)** for a word of length L — independent of how many words are stored.

\`\`\`js
// Inserting "cat" and "car" shares the "ca" path:
//   c → a → t*
//           r*
\`\`\``
            },
            {
                heading: "Built for prefixes",
                body: `Tries shine at prefix questions: autocomplete, "does any word start with…", spell-check, and IP routing. A plain hash set answers exact membership just as fast, but only a trie answers **prefix** queries efficiently.

**Recognition cues:** autocomplete, prefix search, many words sharing prefixes, or word-by-word matching on a board → trie. Build one in the lab, then finish Stage 2 with the drills.`
            }
        ],
        guidedExampleProblemId: "tr-count-prefix",
        drillProblemIds: [
            "tr-count-prefix",
            "tr-longest-common-prefix"
        ],
        testPoolProblemIds: [
            "tr-all-with-prefix",
            "tr-is-prefix-of-any"
        ],
        complexityQuestionIds: [
            "s2-trie-lookup",
            "s2-trie-prefix"
        ],
        buildLab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$labs3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trieLab"],
        badgeId: "badge-ds-tries",
        prerequisiteModuleIds: [
            "m-ds-trees"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage2/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerStage2",
    ()=>registerStage2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage2/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage2/content2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage2/content3.ts [app-client] (ecmascript)");
;
;
;
;
function registerStage2() {
    [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage2Batch1Problems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage2Batch2Problems"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage2Batch3Problems"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerProblem"]);
    [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage2Batch1Mcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage2Batch2Mcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage2Batch3Mcqs"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerComplexityQuestion"]);
    [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage2Batch1Modules"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage2Batch2Modules"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$content3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage2Batch3Modules"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModule"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage2/labs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arraysLab",
    ()=>arraysLab,
    "linkedListLab",
    ()=>linkedListLab,
    "stringsLab",
    ()=>stringsLab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
/**
 * The three Stage-2 batch-1 build labs. Each harness runs in the same scope as
 * the learner's class and reports via the injected `assert` / `expect`.
 * `testHarness` is plain JS (valid after the learner's code is transpiled), so
 * the js and ts strings are identical.
 */ const dynamicArrayHarness = `
const a = new DynamicArray();
expect("new array is empty", a.size(), 0);
a.push(10); a.push(20); a.push(30);
expect("size after three pushes", a.size(), 3);
expect("get index 0", a.get(0), 10);
expect("get index 2", a.get(2), 30);
a.set(1, 99);
expect("set overwrites element", a.get(1), 99);
assert("out-of-range get is undefined", a.get(5) === undefined);
a.push(40);
expect("size grows past initial capacity", a.size(), 4);
expect("get after growth", a.get(3), 40);
`;
const arraysLab = {
    id: "lab-dynamic-array",
    exportName: "DynamicArray",
    spec: `Implement a **DynamicArray** class from scratch — the growable array that languages give you for free.

Provide these methods:
- \`push(value)\` — append to the end.
- \`get(index)\` — return the element at \`index\`, or \`undefined\` if out of range.
- \`set(index, value)\` — overwrite the element at \`index\`.
- \`size()\` — return the number of elements.

Use your own backing storage and track the count yourself — don't just wrap a native array method-for-method.`,
    starterCode: {
        js: `class DynamicArray {
  constructor() {
    // Set up backing storage and a size counter.
  }
  push(value) {
    // Append value at the end.
  }
  get(index) {
    // Return the element at index, or undefined.
  }
  set(index, value) {
    // Overwrite the element at index.
  }
  size() {
    // Return how many elements are stored.
  }
}
`,
        ts: `class DynamicArray {
  private data: Record<number, number>;
  private count: number;
  constructor() {
    this.data = {};
    this.count = 0;
  }
  push(value: number): void {
    // Append value at the end.
  }
  get(index: number): number | undefined {
    // Return the element at index, or undefined.
    return undefined;
  }
  set(index: number, value: number): void {
    // Overwrite the element at index.
  }
  size(): number {
    // Return how many elements are stored.
    return 0;
  }
}
`
    },
    testHarness: {
        js: dynamicArrayHarness,
        ts: dynamicArrayHarness
    },
    referenceImplementation: {
        js: `class DynamicArray {
  constructor() { this.data = {}; this.count = 0; }
  push(value) { this.data[this.count] = value; this.count++; }
  get(index) { return index >= 0 && index < this.count ? this.data[index] : undefined; }
  set(index, value) { if (index >= 0 && index < this.count) this.data[index] = value; }
  size() { return this.count; }
}
`,
        ts: `class DynamicArray {
  private data: Record<number, number> = {};
  private count = 0;
  push(value: number): void { this.data[this.count] = value; this.count++; }
  get(index: number): number | undefined { return index >= 0 && index < this.count ? this.data[index] : undefined; }
  set(index: number, value: number): void { if (index >= 0 && index < this.count) this.data[index] = value; }
  size(): number { return this.count; }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
const stringBuilderHarness = `
const sb = new StringBuilder();
expect("empty length", sb.length(), 0);
expect("empty toString", sb.toString(), "");
sb.append("Hello");
sb.append(", ");
sb.append("world");
expect("built string", sb.toString(), "Hello, world");
expect("length matches", sb.length(), 12);
sb.clear();
expect("length after clear", sb.length(), 0);
sb.append("a").append("b").append("c");
expect("chained append", sb.toString(), "abc");
`;
const stringsLab = {
    id: "lab-string-builder",
    exportName: "StringBuilder",
    spec: `Strings are immutable, so repeated \`+=\` rebuilds the whole string each time. A **StringBuilder** collects pieces and joins them once.

Implement a \`StringBuilder\` class with:
- \`append(str)\` — add a piece; **return \`this\`** so calls can chain.
- \`toString()\` — the concatenated result.
- \`length()\` — the length of the concatenated result.
- \`clear()\` — reset to empty; also return \`this\`.`,
    starterCode: {
        js: `class StringBuilder {
  constructor() {
    // Collect appended pieces here.
  }
  append(str) {
    // Store the piece and return this.
  }
  toString() {
    // Join the pieces.
  }
  length() {
    // Length of the joined result.
  }
  clear() {
    // Reset to empty and return this.
  }
}
`,
        ts: `class StringBuilder {
  private parts: string[];
  constructor() {
    this.parts = [];
  }
  append(str: string): this {
    // Store the piece and return this.
    return this;
  }
  toString(): string {
    // Join the pieces.
    return "";
  }
  length(): number {
    return 0;
  }
  clear(): this {
    // Reset to empty and return this.
    return this;
  }
}
`
    },
    testHarness: {
        js: stringBuilderHarness,
        ts: stringBuilderHarness
    },
    referenceImplementation: {
        js: `class StringBuilder {
  constructor() { this.parts = []; }
  append(str) { this.parts.push(str); return this; }
  toString() { return this.parts.join(""); }
  length() { return this.toString().length; }
  clear() { this.parts = []; return this; }
}
`,
        ts: `class StringBuilder {
  private parts: string[] = [];
  append(str: string): this { this.parts.push(str); return this; }
  toString(): string { return this.parts.join(""); }
  length(): number { return this.toString().length; }
  clear(): this { this.parts = []; return this; }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
const linkedListHarness = `
const list = new LinkedList();
expect("empty size", list.size(), 0);
expect("empty toArray", list.toArray(), []);
list.append(1); list.append(2); list.append(3);
expect("toArray after appends", list.toArray(), [1, 2, 3]);
expect("size after appends", list.size(), 3);
expect("get middle", list.get(1), 2);
list.prepend(0);
expect("toArray after prepend", list.toArray(), [0, 1, 2, 3]);
expect("get first after prepend", list.get(0), 0);
expect("size after prepend", list.size(), 4);
assert("out-of-range get is undefined", list.get(10) === undefined);
`;
const linkedListLab = {
    id: "lab-linked-list",
    exportName: "LinkedList",
    spec: `Build a singly **LinkedList** with nodes you allocate yourself — each node holds a value and a pointer to the next.

Implement:
- \`append(value)\` — add to the tail; return \`this\`.
- \`prepend(value)\` — add to the head; return \`this\`.
- \`get(index)\` — value at \`index\`, or \`undefined\` if out of range.
- \`size()\` — number of nodes.
- \`toArray()\` — values head-to-tail as a plain array.`,
    starterCode: {
        js: `class LinkedList {
  constructor() {
    // head pointer + size counter.
  }
  append(value) {
    // Add to the tail; return this.
  }
  prepend(value) {
    // Add to the head; return this.
  }
  get(index) {
    // Walk to index; return value or undefined.
  }
  size() {
    // Number of nodes.
  }
  toArray() {
    // Values head-to-tail.
  }
}
`,
        ts: `interface ListNode {
  value: number;
  next: ListNode | null;
}
class LinkedList {
  private head: ListNode | null;
  private count: number;
  constructor() {
    this.head = null;
    this.count = 0;
  }
  append(value: number): this {
    return this;
  }
  prepend(value: number): this {
    return this;
  }
  get(index: number): number | undefined {
    return undefined;
  }
  size(): number {
    return 0;
  }
  toArray(): number[] {
    return [];
  }
}
`
    },
    testHarness: {
        js: linkedListHarness,
        ts: linkedListHarness
    },
    referenceImplementation: {
        js: `class LinkedList {
  constructor() { this.head = null; this.count = 0; }
  append(value) {
    const node = { value, next: null };
    if (!this.head) this.head = node;
    else { let cur = this.head; while (cur.next) cur = cur.next; cur.next = node; }
    this.count++;
    return this;
  }
  prepend(value) { this.head = { value, next: this.head }; this.count++; return this; }
  get(index) {
    if (index < 0 || index >= this.count) return undefined;
    let cur = this.head;
    for (let i = 0; i < index; i++) cur = cur.next;
    return cur.value;
  }
  size() { return this.count; }
  toArray() {
    const out = [];
    let cur = this.head;
    while (cur) { out.push(cur.value); cur = cur.next; }
    return out;
  }
}
`,
        ts: `interface ListNode { value: number; next: ListNode | null; }
class LinkedList {
  private head: ListNode | null = null;
  private count = 0;
  append(value: number): this {
    const node: ListNode = { value, next: null };
    if (!this.head) this.head = node;
    else { let cur = this.head; while (cur.next) cur = cur.next; cur.next = node; }
    this.count++;
    return this;
  }
  prepend(value: number): this { this.head = { value, next: this.head }; this.count++; return this; }
  get(index: number): number | undefined {
    if (index < 0 || index >= this.count) return undefined;
    let cur = this.head;
    for (let i = 0; i < index && cur; i++) cur = cur.next;
    return cur ? cur.value : undefined;
  }
  size(): number { return this.count; }
  toArray(): number[] {
    const out: number[] = [];
    let cur = this.head;
    while (cur) { out.push(cur.value); cur = cur.next; }
    return out;
  }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage2/labs2.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bstLab",
    ()=>bstLab,
    "dequeLab",
    ()=>dequeLab,
    "hashMapLab",
    ()=>hashMapLab,
    "stackLab",
    ()=>stackLab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
/** Stage-2 batch-2 build labs: Stack, Deque, HashMap, BST. */ const stackHarness = `
const s = new Stack();
assert("new stack is empty", s.isEmpty());
expect("size 0", s.size(), 0);
s.push(1); s.push(2); s.push(3);
expect("size after pushes", s.size(), 3);
expect("peek top", s.peek(), 3);
expect("pop returns top", s.pop(), 3);
expect("size after pop", s.size(), 2);
expect("peek after pop", s.peek(), 2);
assert("not empty", !s.isEmpty());
s.pop(); s.pop();
assert("empty again", s.isEmpty());
assert("pop on empty is undefined", s.pop() === undefined);
`;
const stackLab = {
    id: "lab-stack",
    exportName: "Stack",
    spec: `Implement a **Stack** — last-in, first-out. All operations should be O(1).

Methods:
- \`push(value)\` — add to the top; return \`this\`.
- \`pop()\` — remove and return the top, or \`undefined\` if empty.
- \`peek()\` — the top value without removing it.
- \`size()\` — number of items.
- \`isEmpty()\` — \`true\` when there are no items.`,
    starterCode: {
        js: `class Stack {
  constructor() {
    // backing storage
  }
  push(value) { /* return this */ }
  pop() { /* remove + return top */ }
  peek() { /* top without removing */ }
  size() { /* count */ }
  isEmpty() { /* true if empty */ }
}
`,
        ts: `class Stack {
  private items: number[];
  constructor() { this.items = []; }
  push(value: number): this { return this; }
  pop(): number | undefined { return undefined; }
  peek(): number | undefined { return undefined; }
  size(): number { return 0; }
  isEmpty(): boolean { return true; }
}
`
    },
    testHarness: {
        js: stackHarness,
        ts: stackHarness
    },
    referenceImplementation: {
        js: `class Stack {
  constructor() { this.items = []; }
  push(value) { this.items.push(value); return this; }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  size() { return this.items.length; }
  isEmpty() { return this.items.length === 0; }
}
`,
        ts: `class Stack {
  private items: number[] = [];
  push(value: number): this { this.items.push(value); return this; }
  pop(): number | undefined { return this.items.pop(); }
  peek(): number | undefined { return this.items[this.items.length - 1]; }
  size(): number { return this.items.length; }
  isEmpty(): boolean { return this.items.length === 0; }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
const dequeHarness = `
const d = new Deque();
expect("empty size", d.size(), 0);
d.pushBack(2); d.pushBack(3); d.pushFront(1);
expect("size", d.size(), 3);
expect("peekFront", d.peekFront(), 1);
expect("peekBack", d.peekBack(), 3);
expect("popFront", d.popFront(), 1);
expect("popBack", d.popBack(), 3);
expect("size after pops", d.size(), 1);
expect("remaining front", d.peekFront(), 2);
assert("popFront empties", d.popFront() === 2 && d.size() === 0);
assert("popBack on empty is undefined", d.popBack() === undefined);
`;
const dequeLab = {
    id: "lab-deque",
    exportName: "Deque",
    spec: `Implement a double-ended queue, **Deque**, supporting inserts and removals at both ends.

Methods:
- \`pushFront(value)\` / \`pushBack(value)\` — add to a side; return \`this\`.
- \`popFront()\` / \`popBack()\` — remove and return from a side, or \`undefined\` if empty.
- \`peekFront()\` / \`peekBack()\` — inspect without removing.
- \`size()\` — number of items.`,
    starterCode: {
        js: `class Deque {
  constructor() {
    // backing storage
  }
  pushFront(value) { /* return this */ }
  pushBack(value) { /* return this */ }
  popFront() { /* remove + return front */ }
  popBack() { /* remove + return back */ }
  peekFront() { }
  peekBack() { }
  size() { }
}
`,
        ts: `class Deque {
  private items: number[];
  constructor() { this.items = []; }
  pushFront(value: number): this { return this; }
  pushBack(value: number): this { return this; }
  popFront(): number | undefined { return undefined; }
  popBack(): number | undefined { return undefined; }
  peekFront(): number | undefined { return undefined; }
  peekBack(): number | undefined { return undefined; }
  size(): number { return 0; }
}
`
    },
    testHarness: {
        js: dequeHarness,
        ts: dequeHarness
    },
    referenceImplementation: {
        js: `class Deque {
  constructor() { this.items = []; }
  pushFront(value) { this.items.unshift(value); return this; }
  pushBack(value) { this.items.push(value); return this; }
  popFront() { return this.items.shift(); }
  popBack() { return this.items.pop(); }
  peekFront() { return this.items[0]; }
  peekBack() { return this.items[this.items.length - 1]; }
  size() { return this.items.length; }
}
`,
        ts: `class Deque {
  private items: number[] = [];
  pushFront(value: number): this { this.items.unshift(value); return this; }
  pushBack(value: number): this { this.items.push(value); return this; }
  popFront(): number | undefined { return this.items.shift(); }
  popBack(): number | undefined { return this.items.pop(); }
  peekFront(): number | undefined { return this.items[0]; }
  peekBack(): number | undefined { return this.items[this.items.length - 1]; }
  size(): number { return this.items.length; }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
const hashMapHarness = `
const m = new HashMap();
expect("empty size", m.size(), 0);
assert("missing key not present", !m.has("a"));
m.set("a", 1); m.set("b", 2); m.set("c", 3);
expect("size after sets", m.size(), 3);
expect("get a", m.get("a"), 1);
assert("has b", m.has("b"));
m.set("a", 99);
expect("update value", m.get("a"), 99);
expect("size unchanged on update", m.size(), 3);
assert("delete c returns true", m.delete("c") === true);
assert("c is gone", !m.has("c"));
expect("size after delete", m.size(), 2);
assert("get missing is undefined", m.get("z") === undefined);
`;
const hashMapLab = {
    id: "lab-hashmap",
    exportName: "HashMap",
    spec: `Implement a **HashMap** (string keys → number values) from scratch using an array of buckets and your own hash function. Handle collisions by chaining within a bucket.

Methods:
- \`set(key, value)\` — insert or update; return \`this\`.
- \`get(key)\` — the value, or \`undefined\`.
- \`has(key)\` — whether the key exists.
- \`delete(key)\` — remove it; return \`true\` if it existed, else \`false\`.
- \`size()\` — number of stored keys.`,
    starterCode: {
        js: `class HashMap {
  constructor() {
    // an array of buckets + a count
  }
  _hash(key) {
    // fold the characters into an index within your bucket array
  }
  set(key, value) { /* return this */ }
  get(key) { }
  has(key) { }
  delete(key) { /* return true/false */ }
  size() { }
}
`,
        ts: `class HashMap {
  private buckets: Array<Array<[string, number]>>;
  private count: number;
  constructor() {
    this.buckets = new Array(16);
    this.count = 0;
  }
  private _hash(key: string): number { return 0; }
  set(key: string, value: number): this { return this; }
  get(key: string): number | undefined { return undefined; }
  has(key: string): boolean { return false; }
  delete(key: string): boolean { return false; }
  size(): number { return 0; }
}
`
    },
    testHarness: {
        js: hashMapHarness,
        ts: hashMapHarness
    },
    referenceImplementation: {
        js: `class HashMap {
  constructor() { this.buckets = new Array(16); this.count = 0; }
  _hash(key) {
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    return h % this.buckets.length;
  }
  set(key, value) {
    const i = this._hash(key);
    if (!this.buckets[i]) this.buckets[i] = [];
    for (const pair of this.buckets[i]) if (pair[0] === key) { pair[1] = value; return this; }
    this.buckets[i].push([key, value]); this.count++; return this;
  }
  get(key) {
    const b = this.buckets[this._hash(key)];
    if (b) for (const pair of b) if (pair[0] === key) return pair[1];
    return undefined;
  }
  has(key) {
    const b = this.buckets[this._hash(key)];
    if (b) for (const pair of b) if (pair[0] === key) return true;
    return false;
  }
  delete(key) {
    const b = this.buckets[this._hash(key)];
    if (b) for (let j = 0; j < b.length; j++) if (b[j][0] === key) { b.splice(j, 1); this.count--; return true; }
    return false;
  }
  size() { return this.count; }
}
`,
        ts: `class HashMap {
  private buckets: Array<Array<[string, number]>> = new Array(16);
  private count = 0;
  private _hash(key: string): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    return h % this.buckets.length;
  }
  set(key: string, value: number): this {
    const i = this._hash(key);
    if (!this.buckets[i]) this.buckets[i] = [];
    for (const pair of this.buckets[i]) if (pair[0] === key) { pair[1] = value; return this; }
    this.buckets[i].push([key, value]); this.count++; return this;
  }
  get(key: string): number | undefined {
    const b = this.buckets[this._hash(key)];
    if (b) for (const pair of b) if (pair[0] === key) return pair[1];
    return undefined;
  }
  has(key: string): boolean {
    const b = this.buckets[this._hash(key)];
    if (b) for (const pair of b) if (pair[0] === key) return true;
    return false;
  }
  delete(key: string): boolean {
    const b = this.buckets[this._hash(key)];
    if (b) for (let j = 0; j < b.length; j++) if (b[j][0] === key) { b.splice(j, 1); this.count--; return true; }
    return false;
  }
  size(): number { return this.count; }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
const bstHarness = `
const t = new BST();
expect("empty size", t.size(), 0);
expect("empty inOrder", t.inOrder(), []);
[5, 3, 8, 1, 4, 7, 9].forEach((v) => t.insert(v));
expect("size", t.size(), 7);
expect("inOrder is sorted", t.inOrder(), [1, 3, 4, 5, 7, 8, 9]);
assert("contains 7", t.contains(7));
assert("does not contain 6", !t.contains(6));
t.insert(5);
expect("duplicate ignored", t.size(), 7);
t.insert(2);
expect("inOrder after insert", t.inOrder(), [1, 2, 3, 4, 5, 7, 8, 9]);
`;
const bstLab = {
    id: "lab-bst",
    exportName: "BST",
    spec: `Implement a **Binary Search Tree** of numbers. Each node's left subtree holds smaller values, its right subtree larger ones; ignore duplicate inserts.

Methods:
- \`insert(value)\` — place the value; return \`this\`.
- \`contains(value)\` — whether the value is present.
- \`inOrder()\` — an array of values in sorted (in-order) order.
- \`size()\` — number of distinct values.`,
    starterCode: {
        js: `class BST {
  constructor() {
    // root pointer + count
  }
  insert(value) { /* return this */ }
  contains(value) { }
  inOrder() { /* sorted values */ }
  size() { }
}
`,
        ts: `interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
class BST {
  private root: TreeNode | null;
  private count: number;
  constructor() {
    this.root = null;
    this.count = 0;
  }
  insert(value: number): this { return this; }
  contains(value: number): boolean { return false; }
  inOrder(): number[] { return []; }
  size(): number { return 0; }
}
`
    },
    testHarness: {
        js: bstHarness,
        ts: bstHarness
    },
    referenceImplementation: {
        js: `class BST {
  constructor() { this.root = null; this.count = 0; }
  insert(value) {
    const node = { value, left: null, right: null };
    if (!this.root) { this.root = node; this.count++; return this; }
    let cur = this.root;
    while (true) {
      if (value < cur.value) { if (!cur.left) { cur.left = node; this.count++; break; } cur = cur.left; }
      else if (value > cur.value) { if (!cur.right) { cur.right = node; this.count++; break; } cur = cur.right; }
      else break;
    }
    return this;
  }
  contains(value) {
    let cur = this.root;
    while (cur) {
      if (value === cur.value) return true;
      cur = value < cur.value ? cur.left : cur.right;
    }
    return false;
  }
  inOrder() {
    const out = [];
    const walk = (n) => { if (!n) return; walk(n.left); out.push(n.value); walk(n.right); };
    walk(this.root);
    return out;
  }
  size() { return this.count; }
}
`,
        ts: `interface TreeNode { value: number; left: TreeNode | null; right: TreeNode | null; }
class BST {
  private root: TreeNode | null = null;
  private count = 0;
  insert(value: number): this {
    const node: TreeNode = { value, left: null, right: null };
    if (!this.root) { this.root = node; this.count++; return this; }
    let cur: TreeNode = this.root;
    while (true) {
      if (value < cur.value) { if (!cur.left) { cur.left = node; this.count++; break; } cur = cur.left; }
      else if (value > cur.value) { if (!cur.right) { cur.right = node; this.count++; break; } cur = cur.right; }
      else break;
    }
    return this;
  }
  contains(value: number): boolean {
    let cur = this.root;
    while (cur) {
      if (value === cur.value) return true;
      cur = value < cur.value ? cur.left : cur.right;
    }
    return false;
  }
  inOrder(): number[] {
    const out: number[] = [];
    const walk = (n: TreeNode | null) => { if (!n) return; walk(n.left); out.push(n.value); walk(n.right); };
    walk(this.root);
    return out;
  }
  size(): number { return this.count; }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/stage2/labs3.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "graphLab",
    ()=>graphLab,
    "heapLab",
    ()=>heapLab,
    "trieLab",
    ()=>trieLab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/shared/heap.ts [app-client] (ecmascript)");
;
;
/** Stage-2 batch-3 build labs: MinHeap, Graph, Trie. */ const heapHarness = `
const h = new MinHeap();
expect("empty size", h.size(), 0);
assert("empty peek is undefined", h.peek() === undefined);
h.push(5); h.push(1); h.push(3); h.push(2); h.push(4);
expect("size after pushes", h.size(), 5);
expect("peek is min", h.peek(), 1);
expect("pop 1", h.pop(), 1);
expect("pop 2", h.pop(), 2);
expect("pop 3", h.pop(), 3);
expect("size after three pops", h.size(), 2);
expect("pop 4", h.pop(), 4);
expect("pop 5", h.pop(), 5);
assert("empty again", h.size() === 0);
assert("pop on empty is undefined", h.pop() === undefined);
`;
const heapLab = {
    id: "lab-min-heap",
    exportName: "MinHeap",
    spec: `Implement a **MinHeap** — a binary heap where the smallest value is always on top. This is the reusable priority queue later stages build on (Top-K, Two Heaps, K-Way Merge).

Store the heap in an array where node \`i\`'s children are \`2i+1\` and \`2i+2\`. Provide:
- \`push(value)\` — insert, then *sift up*; return \`this\`.
- \`pop()\` — remove and return the minimum (move the last element to the root and *sift down*), or \`undefined\` if empty.
- \`peek()\` — the minimum without removing it.
- \`size()\` — number of elements.`,
    starterCode: {
        js: `class MinHeap {
  constructor() {
    this.data = [];
  }
  size() { return this.data.length; }
  peek() { /* the minimum */ }
  push(value) {
    // append, then sift up; return this
  }
  pop() {
    // swap root with last, remove, sift down; return old root
  }
}
`,
        ts: `class MinHeap {
  private data: number[];
  constructor() {
    this.data = [];
  }
  size(): number { return this.data.length; }
  peek(): number | undefined { return undefined; }
  push(value: number): this {
    // append, then sift up
    return this;
  }
  pop(): number | undefined {
    // swap root with last, remove, sift down
    return undefined;
  }
}
`
    },
    testHarness: {
        js: heapHarness,
        ts: heapHarness
    },
    referenceImplementation: {
        js: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"] + "\n",
        ts: `class MinHeap {
  private data: number[] = [];
  size(): number { return this.data.length; }
  peek(): number | undefined { return this.data[0]; }
  push(value: number): this { this.data.push(value); this.up(this.data.length - 1); return this; }
  pop(): number | undefined {
    const n = this.data.length;
    if (n === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop() as number;
    if (n > 1) { this.data[0] = last; this.down(0); }
    return top;
  }
  private up(i: number): void {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.data[p] <= this.data[i]) break;
      const t = this.data[p]; this.data[p] = this.data[i]; this.data[i] = t;
      i = p;
    }
  }
  private down(i: number): void {
    const n = this.data.length;
    for (;;) {
      let s = i; const l = 2 * i + 1; const r = 2 * i + 2;
      if (l < n && this.data[l] < this.data[s]) s = l;
      if (r < n && this.data[r] < this.data[s]) s = r;
      if (s === i) break;
      const t = this.data[s]; this.data[s] = this.data[i]; this.data[i] = t;
      i = s;
    }
  }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
const graphHarness = `
const g = new Graph();
expect("no neighbors for unknown node", g.neighbors(1), []);
g.addEdge(1, 2); g.addEdge(1, 3); g.addEdge(3, 4);
expect("neighbors of 1 sorted", g.neighbors(1), [2, 3]);
expect("neighbors of 3 sorted", g.neighbors(3), [1, 4]);
assert("edges are undirected", g.neighbors(2).includes(1));
assert("path 1 to 4", g.hasPath(1, 4));
assert("path 2 to 4", g.hasPath(2, 4));
assert("path to self", g.hasPath(2, 2));
g.addEdge(5, 6);
assert("no path across components", !g.hasPath(1, 5));
`;
const graphLab = {
    id: "lab-graph",
    exportName: "Graph",
    spec: `Implement an **undirected Graph** with an adjacency list (a map from node → set of neighbours).

- \`addEdge(u, v)\` — connect \`u\` and \`v\` both ways; return \`this\`.
- \`neighbors(u)\` — the neighbours of \`u\` as an ascending array (empty if the node is unknown).
- \`hasPath(a, b)\` — whether any path connects \`a\` and \`b\` (a node always has a path to itself). Use BFS or DFS.`,
    starterCode: {
        js: `class Graph {
  constructor() {
    this.adj = new Map();
  }
  addEdge(u, v) {
    // add v to u's set and u to v's set; return this
  }
  neighbors(u) {
    // ascending array of u's neighbours, or []
  }
  hasPath(a, b) {
    // BFS/DFS from a looking for b
  }
}
`,
        ts: `class Graph {
  private adj: Map<number, Set<number>>;
  constructor() {
    this.adj = new Map();
  }
  addEdge(u: number, v: number): this {
    return this;
  }
  neighbors(u: number): number[] {
    return [];
  }
  hasPath(a: number, b: number): boolean {
    return false;
  }
}
`
    },
    testHarness: {
        js: graphHarness,
        ts: graphHarness
    },
    referenceImplementation: {
        js: `class Graph {
  constructor() { this.adj = new Map(); }
  addEdge(u, v) {
    if (!this.adj.has(u)) this.adj.set(u, new Set());
    if (!this.adj.has(v)) this.adj.set(v, new Set());
    this.adj.get(u).add(v);
    this.adj.get(v).add(u);
    return this;
  }
  neighbors(u) {
    return this.adj.has(u) ? [...this.adj.get(u)].sort((a, b) => a - b) : [];
  }
  hasPath(a, b) {
    if (a === b) return true;
    if (!this.adj.has(a) || !this.adj.has(b)) return false;
    const seen = new Set([a]);
    const queue = [a];
    while (queue.length) {
      const cur = queue.shift();
      for (const nb of this.adj.get(cur)) {
        if (nb === b) return true;
        if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }
      }
    }
    return false;
  }
}
`,
        ts: `class Graph {
  private adj: Map<number, Set<number>> = new Map();
  addEdge(u: number, v: number): this {
    if (!this.adj.has(u)) this.adj.set(u, new Set());
    if (!this.adj.has(v)) this.adj.set(v, new Set());
    this.adj.get(u)!.add(v);
    this.adj.get(v)!.add(u);
    return this;
  }
  neighbors(u: number): number[] {
    return this.adj.has(u) ? [...this.adj.get(u)!].sort((a, b) => a - b) : [];
  }
  hasPath(a: number, b: number): boolean {
    if (a === b) return true;
    if (!this.adj.has(a) || !this.adj.has(b)) return false;
    const seen = new Set([a]);
    const queue: number[] = [a];
    while (queue.length) {
      const cur = queue.shift() as number;
      for (const nb of this.adj.get(cur)!) {
        if (nb === b) return true;
        if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }
      }
    }
    return false;
  }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
const trieHarness = `
const t = new Trie();
assert("empty trie has nothing", !t.has("cat"));
t.insert("cat"); t.insert("car"); t.insert("dog");
assert("has cat", t.has("cat"));
assert("has car", t.has("car"));
assert("does not have the prefix ca as a word", !t.has("ca"));
assert("startsWith ca", t.startsWith("ca"));
assert("startsWith do", t.startsWith("do"));
assert("no words start with x", !t.startsWith("x"));
assert("does not have caterpillar", !t.has("caterpillar"));
t.insert("ca");
assert("now has ca", t.has("ca"));
`;
const trieLab = {
    id: "lab-trie",
    exportName: "Trie",
    spec: `Implement a **Trie** (prefix tree) over lowercase words. Each node maps a character to a child node and marks whether a word ends there.

- \`insert(word)\` — add a word; return \`this\`.
- \`has(word)\` — whether the exact word was inserted.
- \`startsWith(prefix)\` — whether any inserted word begins with \`prefix\`.`,
    starterCode: {
        js: `class Trie {
  constructor() {
    this.root = { children: {}, end: false };
  }
  insert(word) {
    // walk/create nodes for each char; mark end; return this
  }
  has(word) {
    // true only if the final node marks a word end
  }
  startsWith(prefix) {
    // true if the prefix path exists
  }
}
`,
        ts: `interface TrieNode {
  children: Record<string, TrieNode>;
  end: boolean;
}
class Trie {
  private root: TrieNode;
  constructor() {
    this.root = { children: {}, end: false };
  }
  insert(word: string): this {
    return this;
  }
  has(word: string): boolean {
    return false;
  }
  startsWith(prefix: string): boolean {
    return false;
  }
}
`
    },
    testHarness: {
        js: trieHarness,
        ts: trieHarness
    },
    referenceImplementation: {
        js: `class Trie {
  constructor() { this.root = { children: {}, end: false }; }
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = { children: {}, end: false };
      node = node.children[ch];
    }
    node.end = true;
    return this;
  }
  _find(str) {
    let node = this.root;
    for (const ch of str) {
      if (!node.children[ch]) return null;
      node = node.children[ch];
    }
    return node;
  }
  has(word) { const n = this._find(word); return n !== null && n.end; }
  startsWith(prefix) { return this._find(prefix) !== null; }
}
`,
        ts: `interface TrieNode { children: Record<string, TrieNode>; end: boolean; }
class Trie {
  private root: TrieNode = { children: {}, end: false };
  insert(word: string): this {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = { children: {}, end: false };
      node = node.children[ch];
    }
    node.end = true;
    return this;
  }
  private find(str: string): TrieNode | null {
    let node = this.root;
    for (const ch of str) {
      if (!node.children[ch]) return null;
      node = node.children[ch];
    }
    return node;
  }
  has(word: string): boolean { const n = this.find(word); return n !== null && n.end; }
  startsWith(prefix: string): boolean { return this.find(prefix) !== null; }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_data_stage2_1nrzd0u._.js.map