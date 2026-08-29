(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/curriculum.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allCaseStudies",
    ()=>allCaseStudies,
    "allProblems",
    ()=>allProblems,
    "caseStudies",
    ()=>caseStudies,
    "complexityQuestions",
    ()=>complexityQuestions,
    "getCaseStudy",
    ()=>getCaseStudy,
    "getModule",
    ()=>getModule,
    "getProblem",
    ()=>getProblem,
    "getProblemBySlug",
    ()=>getProblemBySlug,
    "getStage",
    ()=>getStage,
    "modules",
    ()=>modules,
    "modulesForStage",
    ()=>modulesForStage,
    "patternStages",
    ()=>patternStages,
    "problemCount",
    ()=>problemCount,
    "problems",
    ()=>problems,
    "problemsWithTag",
    ()=>problemsWithTag,
    "registerCaseStudy",
    ()=>registerCaseStudy,
    "registerComplexityQuestion",
    ()=>registerComplexityQuestion,
    "registerModule",
    ()=>registerModule,
    "registerProblem",
    ()=>registerProblem,
    "stages",
    ()=>stages,
    "stagesForTrack",
    ()=>stagesForTrack
]);
/**
 * The curriculum registry.
 *
 * Phase 1 wires the *structure* only: every stage exists with its title and
 * ordering, and pages render from these arrays/maps. Modules, problems, case
 * studies, and complexity questions are populated by later content phases —
 * their maps start empty and pages show empty states until then.
 */ /* ---- Stage scaffolding (DSA track: 7 stages) --------------------- */ const dsaStages = [
    {
        id: "dsa-s1",
        track: "dsa",
        order: 1,
        title: "Foundations",
        subtitle: "Thinking in algorithms, Big O, JS/TS for DSA, math toolkit",
        moduleIds: []
    },
    {
        id: "dsa-s2",
        track: "dsa",
        order: 2,
        title: "Core Data Structures",
        subtitle: "Build arrays, lists, stacks, hash tables, trees, heaps & more",
        moduleIds: []
    },
    {
        id: "dsa-s3",
        track: "dsa",
        order: 3,
        title: "Core Algorithms",
        subtitle: "Recursion, sorting, binary search, backtracking",
        moduleIds: []
    },
    {
        id: "dsa-s4",
        track: "dsa",
        order: 4,
        title: "Patterns — Tier 1",
        subtitle: "Prefix sum, two pointers, sliding window, and friends",
        moduleIds: []
    },
    {
        id: "dsa-s5",
        track: "dsa",
        order: 5,
        title: "Patterns — Tier 2",
        subtitle: "Trees, graphs, intervals, top-K, heaps, backtracking, greedy",
        moduleIds: []
    },
    {
        id: "dsa-s6",
        track: "dsa",
        order: 6,
        title: "Patterns — Tier 3",
        subtitle: "Dynamic programming, union-find, shortest paths, bit tricks",
        moduleIds: []
    },
    {
        id: "dsa-s7",
        track: "dsa",
        order: 7,
        title: "Expert",
        subtitle: "String algorithms, segment trees, MSTs, design, mock interviews",
        moduleIds: []
    }
];
/* ---- Stage scaffolding (System Design track: 4 stages) ----------- */ const sdStages = [
    {
        id: "sd-s1",
        track: "systemDesign",
        order: 1,
        title: "SD — Warm-ups & Foundations",
        subtitle: "The design framework, estimation, networking, building blocks",
        moduleIds: []
    },
    {
        id: "sd-s2",
        track: "systemDesign",
        order: 2,
        title: "SD — Build the Blocks",
        subtitle: "Rate limiters, hashing rings, Bloom filters, KV stores & more",
        moduleIds: []
    },
    {
        id: "sd-s3",
        track: "systemDesign",
        order: 3,
        title: "SD — Case Studies",
        subtitle: "Fourteen designs, ordered easy to hard",
        moduleIds: []
    },
    {
        id: "sd-s4",
        track: "systemDesign",
        order: 4,
        title: "SD — Interviews & Certification",
        subtitle: "Mock design interviews and the System Design certification",
        moduleIds: []
    }
];
const stages = [
    ...dsaStages,
    ...sdStages
];
const modules = {};
const problems = {};
const caseStudies = {};
const complexityQuestions = {};
function registerProblem(problem) {
    const slugOwner = Object.values(problems).find((registered)=>registered.slug === problem.slug && registered.id !== problem.id);
    if (slugOwner) {
        throw new Error(`Duplicate problem slug "${problem.slug}" for "${slugOwner.id}" and "${problem.id}".`);
    }
    problems[problem.id] = problem;
}
function registerModule(module) {
    modules[module.id] = module;
    const stage = getStage(module.stageId);
    if (stage && !stage.moduleIds.includes(module.id)) {
        stage.moduleIds.push(module.id);
    }
}
function registerCaseStudy(study) {
    caseStudies[study.id] = study;
}
function registerComplexityQuestion(question) {
    complexityQuestions[question.id] = question;
}
function stagesForTrack(track) {
    return stages.filter((s)=>s.track === track).sort((a, b)=>a.order - b.order);
}
function getStage(stageId) {
    return stages.find((s)=>s.id === stageId);
}
function allCaseStudies() {
    const rank = {
        easy: 0,
        medium: 1,
        hard: 2
    };
    return Object.values(caseStudies).sort((a, b)=>rank[a.difficulty] - rank[b.difficulty] || (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));
}
function getCaseStudy(id) {
    return caseStudies[id];
}
function modulesForStage(stageId) {
    const stage = getStage(stageId);
    if (!stage) return [];
    return stage.moduleIds.map((id)=>modules[id]).filter((m)=>Boolean(m));
}
function getModule(moduleId) {
    return modules[moduleId];
}
function getProblem(problemId) {
    return problems[problemId];
}
function getProblemBySlug(slug) {
    return Object.values(problems).find((p)=>p.slug === slug);
}
function allProblems() {
    return Object.values(problems);
}
function problemsWithTag(tag) {
    return allProblems().filter((p)=>p.trackTags.includes(tag));
}
function patternStages() {
    return dsaStages.filter((s)=>s.order >= 4 && s.order <= 6);
}
function problemCount() {
    return allProblems().length;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/expert/algos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "expertMcqs",
    ()=>expertMcqs,
    "expertModule",
    ()=>expertModule,
    "expertProblems",
    ()=>expertProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/shared/heap.ts [app-client] (ecmascript)");
;
;
const S = "dsa-s7";
const P = [
    "expert"
];
const H = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$shared$2f$heap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEAP_SOURCE"];
const drafts = [
    /* ---- drills (easy → hard) ---- */ {
        id: "ex-kmp-search",
        slug: "kmp-substring-search",
        title: "Substring Search (KMP)",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the index of the first occurrence of `needle` in `haystack`, or -1 if it is not present. An empty needle matches at index 0. Aim for linear time.",
        examples: [
            {
                input: '"ababcabcabababd", "ababd"',
                output: "10"
            },
            {
                input: '"abc", "d"',
                output: "-1"
            },
            {
                input: '"aaaa", "aa"',
                output: "0"
            }
        ],
        constraints: [
            "0 <= haystack.length <= 100000",
            "lowercase letters"
        ],
        functionName: "kmpSearch",
        starter: {
            js: "function kmpSearch(haystack, needle) {\n  // Index of first occurrence, or -1.\n}\n",
            ts: "function kmpSearch(haystack: string, needle: string): number {\n  // Index of first occurrence, or -1.\n  return -1;\n}\n"
        },
        visible: [
            {
                args: [
                    "ababcabcabababd",
                    "ababd"
                ],
                expected: 10
            },
            {
                args: [
                    "abc",
                    "d"
                ],
                expected: -1
            },
            {
                args: [
                    "aaaa",
                    "aa"
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    "hello",
                    "ll"
                ],
                expected: 2
            },
            {
                args: [
                    "abc",
                    ""
                ],
                expected: 0
            },
            {
                args: [
                    "mississippi",
                    "issip"
                ],
                expected: 4
            },
            {
                args: [
                    "a",
                    "a"
                ],
                expected: 0
            },
            {
                args: [
                    "abcabc",
                    "cab"
                ],
                expected: 2
            },
            {
                args: [
                    "abc",
                    "abcd"
                ],
                expected: -1
            }
        ],
        hints: [
            "Precompute the needle's failure function (longest proper prefix that is also a suffix).",
            "On a mismatch, jump the pattern pointer back via the failure table instead of restarting.",
            "The text pointer never moves backward, giving O(n + m)."
        ],
        solutions: [
            {
                label: "Knuth–Morris–Pratt",
                approach: "Build the failure table, then scan without ever rewinding the text.",
                js: "function kmpSearch(haystack, needle) {\n  const m = needle.length;\n  if (m === 0) return 0;\n  const f = new Array(m).fill(0);\n  let k = 0;\n  for (let i = 1; i < m; i++) {\n    while (k > 0 && needle[i] !== needle[k]) k = f[k - 1];\n    if (needle[i] === needle[k]) k++;\n    f[i] = k;\n  }\n  k = 0;\n  for (let i = 0; i < haystack.length; i++) {\n    while (k > 0 && haystack[i] !== needle[k]) k = f[k - 1];\n    if (haystack[i] === needle[k]) k++;\n    if (k === m) return i - m + 1;\n  }\n  return -1;\n}\n",
                ts: "function kmpSearch(haystack: string, needle: string): number {\n  const m = needle.length;\n  if (m === 0) return 0;\n  const f = new Array(m).fill(0);\n  let k = 0;\n  for (let i = 1; i < m; i++) {\n    while (k > 0 && needle[i] !== needle[k]) k = f[k - 1];\n    if (needle[i] === needle[k]) k++;\n    f[i] = k;\n  }\n  k = 0;\n  for (let i = 0; i < haystack.length; i++) {\n    while (k > 0 && haystack[i] !== needle[k]) k = f[k - 1];\n    if (haystack[i] === needle[k]) k++;\n    if (k === m) return i - m + 1;\n  }\n  return -1;\n}\n",
                commentedCode: {
                    js: `function kmpSearch(haystack, needle) {
  // Cache the pattern length and handle the conventional empty-pattern match.
  const m = needle.length;
  if (m === 0) return 0;

  // f[i] stores the longest proper prefix ending at i that is also a suffix.
  const f = new Array(m).fill(0);
  let k = 0;
  for (let i = 1; i < m; i++) {
    // Follow earlier borders until the current pattern characters can agree.
    while (k > 0 && needle[i] !== needle[k]) k = f[k - 1];
    // Extend the current border when the next characters match.
    if (needle[i] === needle[k]) k++;
    f[i] = k;
  }

  // Reuse k as the number of pattern characters matched in the text scan.
  k = 0;
  for (let i = 0; i < haystack.length; i++) {
    // Fall back in the pattern without moving the text pointer backward.
    while (k > 0 && haystack[i] !== needle[k]) k = f[k - 1];
    if (haystack[i] === needle[k]) k++;
    // Convert the match's ending index into its starting index.
    if (k === m) return i - m + 1;
  }
  return -1;
}
`,
                    ts: `function kmpSearch(haystack: string, needle: string): number {
  // Cache the pattern length and handle the conventional empty-pattern match.
  const m = needle.length;
  if (m === 0) return 0;

  // f[i] stores the longest proper prefix ending at i that is also a suffix.
  const f = new Array(m).fill(0);
  let k = 0;
  for (let i = 1; i < m; i++) {
    // Follow earlier borders until the current pattern characters can agree.
    while (k > 0 && needle[i] !== needle[k]) k = f[k - 1];
    // Extend the current border when the next characters match.
    if (needle[i] === needle[k]) k++;
    f[i] = k;
  }

  // Reuse k as the number of pattern characters matched in the text scan.
  k = 0;
  for (let i = 0; i < haystack.length; i++) {
    // Fall back in the pattern without moving the text pointer backward.
    while (k > 0 && haystack[i] !== needle[k]) k = f[k - 1];
    if (haystack[i] === needle[k]) k++;
    // Convert the match's ending index into its starting index.
    if (k === m) return i - m + 1;
  }
  return -1;
}
`
                },
                time: "O(n + m)",
                space: "O(m)"
            },
            {
                label: "Built-in indexOf",
                approach: "A pragmatic baseline using the engine's optimized search.",
                js: "function kmpSearch(haystack, needle) {\n  return haystack.indexOf(needle);\n}\n",
                ts: "function kmpSearch(haystack: string, needle: string): number {\n  return haystack.indexOf(needle);\n}\n",
                commentedCode: {
                    js: `function kmpSearch(haystack, needle) {
  // Delegate first-occurrence search, including the empty-pattern case, to the engine.
  return haystack.indexOf(needle);
}
`,
                    ts: `function kmpSearch(haystack: string, needle: string): number {
  // Delegate first-occurrence search, including the empty-pattern case, to the engine.
  return haystack.indexOf(needle);
}
`
                },
                time: "O(n·m) worst case",
                space: "O(1)"
            }
        ]
    },
    {
        id: "ex-count-occurrences",
        slug: "count-pattern-occurrences",
        title: "Count Pattern Occurrences (with Overlaps)",
        difficulty: "medium",
        patternIds: P,
        statement: "Return how many times `pattern` occurs in `text`, counting overlapping occurrences. An empty pattern counts as 0.",
        examples: [
            {
                input: '"aaaa", "aa"',
                output: "3"
            },
            {
                input: '"ababab", "ab"',
                output: "3"
            },
            {
                input: '"abcabc", "abc"',
                output: "2"
            }
        ],
        constraints: [
            "0 <= text.length <= 100000",
            "lowercase letters"
        ],
        functionName: "countOccurrences",
        starter: {
            js: "function countOccurrences(text, pattern) {\n  // Overlapping occurrence count.\n}\n",
            ts: "function countOccurrences(text: string, pattern: string): number {\n  // Overlapping occurrence count.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "aaaa",
                    "aa"
                ],
                expected: 3
            },
            {
                args: [
                    "ababab",
                    "ab"
                ],
                expected: 3
            },
            {
                args: [
                    "abcabc",
                    "abc"
                ],
                expected: 2
            }
        ],
        hidden: [
            {
                args: [
                    "aaa",
                    "a"
                ],
                expected: 3
            },
            {
                args: [
                    "mississippi",
                    "ss"
                ],
                expected: 2
            },
            {
                args: [
                    "abc",
                    "d"
                ],
                expected: 0
            },
            {
                args: [
                    "aaaaa",
                    "aaa"
                ],
                expected: 3
            },
            {
                args: [
                    "xyz",
                    "xy"
                ],
                expected: 1
            },
            {
                args: [
                    "abc",
                    ""
                ],
                expected: 0
            }
        ],
        hints: [
            "Run KMP but don't stop at the first match.",
            "After a full match, set k = failure[k-1] so overlaps are counted.",
            "Increment a counter each time the pattern pointer reaches the end."
        ],
        solutions: [
            {
                label: "KMP counting",
                approach: "On each full match, fall back via the failure table to allow overlaps.",
                js: "function countOccurrences(text, pattern) {\n  const m = pattern.length;\n  if (m === 0) return 0;\n  const f = new Array(m).fill(0);\n  let k = 0;\n  for (let i = 1; i < m; i++) {\n    while (k > 0 && pattern[i] !== pattern[k]) k = f[k - 1];\n    if (pattern[i] === pattern[k]) k++;\n    f[i] = k;\n  }\n  k = 0; let count = 0;\n  for (let i = 0; i < text.length; i++) {\n    while (k > 0 && text[i] !== pattern[k]) k = f[k - 1];\n    if (text[i] === pattern[k]) k++;\n    if (k === m) { count++; k = f[k - 1]; }\n  }\n  return count;\n}\n",
                ts: "function countOccurrences(text: string, pattern: string): number {\n  const m = pattern.length;\n  if (m === 0) return 0;\n  const f = new Array(m).fill(0);\n  let k = 0;\n  for (let i = 1; i < m; i++) {\n    while (k > 0 && pattern[i] !== pattern[k]) k = f[k - 1];\n    if (pattern[i] === pattern[k]) k++;\n    f[i] = k;\n  }\n  k = 0; let count = 0;\n  for (let i = 0; i < text.length; i++) {\n    while (k > 0 && text[i] !== pattern[k]) k = f[k - 1];\n    if (text[i] === pattern[k]) k++;\n    if (k === m) { count++; k = f[k - 1]; }\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: `function countOccurrences(text, pattern) {
  // The exercise defines an empty pattern as contributing no matches.
  const m = pattern.length;
  if (m === 0) return 0;

  // Build KMP's failure table for the pattern.
  const f = new Array(m).fill(0);
  let k = 0;
  for (let i = 1; i < m; i++) {
    while (k > 0 && pattern[i] !== pattern[k]) k = f[k - 1];
    if (pattern[i] === pattern[k]) k++;
    f[i] = k;
  }

  // Scan the text once while tracking how much of the pattern currently matches.
  k = 0;
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    while (k > 0 && text[i] !== pattern[k]) k = f[k - 1];
    if (text[i] === pattern[k]) k++;
    if (k === m) {
      count++;
      // Keep the longest valid border so an overlapping match can continue.
      k = f[k - 1];
    }
  }
  return count;
}
`,
                    ts: `function countOccurrences(text: string, pattern: string): number {
  // The exercise defines an empty pattern as contributing no matches.
  const m = pattern.length;
  if (m === 0) return 0;

  // Build KMP's failure table for the pattern.
  const f = new Array(m).fill(0);
  let k = 0;
  for (let i = 1; i < m; i++) {
    while (k > 0 && pattern[i] !== pattern[k]) k = f[k - 1];
    if (pattern[i] === pattern[k]) k++;
    f[i] = k;
  }

  // Scan the text once while tracking how much of the pattern currently matches.
  k = 0;
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    while (k > 0 && text[i] !== pattern[k]) k = f[k - 1];
    if (text[i] === pattern[k]) k++;
    if (k === m) {
      count++;
      // Keep the longest valid border so an overlapping match can continue.
      k = f[k - 1];
    }
  }
  return count;
}
`
                },
                time: "O(n + m)",
                space: "O(m)"
            },
            {
                label: "Sliding compare",
                approach: "Check every start index directly — an O(n·m) baseline.",
                js: "function countOccurrences(text, pattern) {\n  const m = pattern.length;\n  if (m === 0) return 0;\n  let count = 0;\n  for (let i = 0; i + m <= text.length; i++) {\n    let ok = true;\n    for (let j = 0; j < m; j++) if (text[i + j] !== pattern[j]) { ok = false; break; }\n    if (ok) count++;\n  }\n  return count;\n}\n",
                ts: "function countOccurrences(text: string, pattern: string): number {\n  const m = pattern.length;\n  if (m === 0) return 0;\n  let count = 0;\n  for (let i = 0; i + m <= text.length; i++) {\n    let ok = true;\n    for (let j = 0; j < m; j++) if (text[i + j] !== pattern[j]) { ok = false; break; }\n    if (ok) count++;\n  }\n  return count;\n}\n",
                commentedCode: {
                    js: `function countOccurrences(text, pattern) {
  // The exercise defines an empty pattern as contributing no matches.
  const m = pattern.length;
  if (m === 0) return 0;
  let count = 0;

  // Treat every position with room for the pattern as a candidate start.
  for (let i = 0; i + m <= text.length; i++) {
    let ok = true;
    // Compare the pattern against this window character by character.
    for (let j = 0; j < m; j++) {
      if (text[i + j] !== pattern[j]) {
        ok = false;
        break;
      }
    }
    if (ok) count++;
  }
  return count;
}
`,
                    ts: `function countOccurrences(text: string, pattern: string): number {
  // The exercise defines an empty pattern as contributing no matches.
  const m = pattern.length;
  if (m === 0) return 0;
  let count = 0;

  // Treat every position with room for the pattern as a candidate start.
  for (let i = 0; i + m <= text.length; i++) {
    let ok = true;
    // Compare the pattern against this window character by character.
    for (let j = 0; j < m; j++) {
      if (text[i + j] !== pattern[j]) {
        ok = false;
        break;
      }
    }
    if (ok) count++;
  }
  return count;
}
`
                },
                time: "O(n·m)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "ex-longest-prefix-suffix",
        slug: "longest-prefix-suffix",
        title: "Longest Proper Prefix that is a Suffix",
        difficulty: "medium",
        patternIds: P,
        statement: "Return the length of the longest proper prefix of the string that is also a suffix (the last value of the KMP failure function). 'Proper' means it may not be the whole string.",
        examples: [
            {
                input: '"ababab"',
                output: "4"
            },
            {
                input: '"abcab"',
                output: "2"
            },
            {
                input: '"aaaa"',
                output: "3"
            }
        ],
        constraints: [
            "0 <= s.length <= 100000"
        ],
        functionName: "longestPrefixSuffix",
        starter: {
            js: "function longestPrefixSuffix(s) {\n  // Length of the longest proper prefix that is also a suffix.\n}\n",
            ts: "function longestPrefixSuffix(s: string): number {\n  // Length of the longest proper prefix that is also a suffix.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "ababab"
                ],
                expected: 4
            },
            {
                args: [
                    "abcab"
                ],
                expected: 2
            },
            {
                args: [
                    "aaaa"
                ],
                expected: 3
            }
        ],
        hidden: [
            {
                args: [
                    "abcdef"
                ],
                expected: 0
            },
            {
                args: [
                    ""
                ],
                expected: 0
            },
            {
                args: [
                    "aabaaab"
                ],
                expected: 3
            },
            {
                args: [
                    "level"
                ],
                expected: 1
            },
            {
                args: [
                    "abac"
                ],
                expected: 0
            },
            {
                args: [
                    "a"
                ],
                expected: 0
            }
        ],
        hints: [
            "This is exactly the KMP failure function evaluated at the last position.",
            "Grow a candidate length k, falling back through earlier values on mismatch.",
            "The answer is failure[n-1]."
        ],
        solutions: [
            {
                label: "KMP failure function",
                approach: "Build the failure table and return its final entry.",
                js: "function longestPrefixSuffix(s) {\n  const n = s.length;\n  if (n === 0) return 0;\n  const f = new Array(n).fill(0);\n  let k = 0;\n  for (let i = 1; i < n; i++) {\n    while (k > 0 && s[i] !== s[k]) k = f[k - 1];\n    if (s[i] === s[k]) k++;\n    f[i] = k;\n  }\n  return f[n - 1];\n}\n",
                ts: "function longestPrefixSuffix(s: string): number {\n  const n = s.length;\n  if (n === 0) return 0;\n  const f = new Array(n).fill(0);\n  let k = 0;\n  for (let i = 1; i < n; i++) {\n    while (k > 0 && s[i] !== s[k]) k = f[k - 1];\n    if (s[i] === s[k]) k++;\n    f[i] = k;\n  }\n  return f[n - 1];\n}\n",
                commentedCode: {
                    js: `function longestPrefixSuffix(s) {
  // An empty string has no proper prefix or suffix.
  const n = s.length;
  if (n === 0) return 0;

  // Build the same border-length table used by KMP.
  const f = new Array(n).fill(0);
  let k = 0;
  for (let i = 1; i < n; i++) {
    // Shorten the candidate border until its next character can match s[i].
    while (k > 0 && s[i] !== s[k]) k = f[k - 1];
    if (s[i] === s[k]) k++;
    f[i] = k;
  }

  // The final entry is the longest border of the complete string.
  return f[n - 1];
}
`,
                    ts: `function longestPrefixSuffix(s: string): number {
  // An empty string has no proper prefix or suffix.
  const n = s.length;
  if (n === 0) return 0;

  // Build the same border-length table used by KMP.
  const f = new Array(n).fill(0);
  let k = 0;
  for (let i = 1; i < n; i++) {
    // Shorten the candidate border until its next character can match s[i].
    while (k > 0 && s[i] !== s[k]) k = f[k - 1];
    if (s[i] === s[k]) k++;
    f[i] = k;
  }

  // The final entry is the longest border of the complete string.
  return f[n - 1];
}
`
                },
                time: "O(n)",
                space: "O(n)"
            },
            {
                label: "Brute prefix/suffix compare",
                approach: "Try each length from longest down until a prefix matches the suffix.",
                js: "function longestPrefixSuffix(s) {\n  const n = s.length;\n  for (let len = n - 1; len >= 1; len--) {\n    if (s.slice(0, len) === s.slice(n - len)) return len;\n  }\n  return 0;\n}\n",
                ts: "function longestPrefixSuffix(s: string): number {\n  const n = s.length;\n  for (let len = n - 1; len >= 1; len--) {\n    if (s.slice(0, len) === s.slice(n - len)) return len;\n  }\n  return 0;\n}\n",
                commentedCode: {
                    js: `function longestPrefixSuffix(s) {
  const n = s.length;
  // Try candidate border lengths from largest to smallest.
  for (let len = n - 1; len >= 1; len--) {
    // The first equal prefix and suffix is necessarily the longest one.
    if (s.slice(0, len) === s.slice(n - len)) return len;
  }
  return 0;
}
`,
                    ts: `function longestPrefixSuffix(s: string): number {
  const n = s.length;
  // Try candidate border lengths from largest to smallest.
  for (let len = n - 1; len >= 1; len--) {
    // The first equal prefix and suffix is necessarily the longest one.
    if (s.slice(0, len) === s.slice(n - len)) return len;
  }
  return 0;
}
`
                },
                time: "O(n²)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ex-fenwick-range-sum",
        slug: "fenwick-range-sum",
        title: "Range Sum with Point Updates (Fenwick Tree)",
        difficulty: "hard",
        patternIds: P,
        statement: "You maintain an array of `n` zeros and process a list of operations. Each operation is either `[\"update\", i, delta]` (add `delta` at index `i`) or `[\"sum\", l, r]` (inclusive range sum from `l` to `r`). Return the array of results for the `sum` operations, in order.",
        examples: [
            {
                input: '5, [["update",2,10],["sum",0,4]]',
                output: "[10]"
            },
            {
                input: '3, [["update",0,5],["update",2,3],["sum",0,2],["sum",1,2]]',
                output: "[8,3]"
            },
            {
                input: '5, [["sum",0,4]]',
                output: "[0]"
            }
        ],
        constraints: [
            "1 <= n <= 100000",
            "0 <= i, l, r < n"
        ],
        functionName: "fenwickRangeSum",
        starter: {
            js: "function fenwickRangeSum(n, ops) {\n  // Results of each 'sum' op, in order.\n}\n",
            ts: "function fenwickRangeSum(n: number, ops: (string | number)[][]): number[] {\n  // Results of each 'sum' op, in order.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    5,
                    [
                        [
                            "update",
                            2,
                            10
                        ],
                        [
                            "sum",
                            0,
                            4
                        ]
                    ]
                ],
                expected: [
                    10
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            "update",
                            0,
                            5
                        ],
                        [
                            "update",
                            2,
                            3
                        ],
                        [
                            "sum",
                            0,
                            2
                        ],
                        [
                            "sum",
                            1,
                            2
                        ]
                    ]
                ],
                expected: [
                    8,
                    3
                ]
            },
            {
                args: [
                    5,
                    [
                        [
                            "sum",
                            0,
                            4
                        ]
                    ]
                ],
                expected: [
                    0
                ]
            }
        ],
        hidden: [
            {
                args: [
                    4,
                    [
                        [
                            "sum",
                            1,
                            3
                        ]
                    ]
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
                            "update",
                            0,
                            1
                        ],
                        [
                            "update",
                            1,
                            2
                        ],
                        [
                            "update",
                            2,
                            3
                        ],
                        [
                            "sum",
                            0,
                            2
                        ],
                        [
                            "sum",
                            2,
                            4
                        ]
                    ]
                ],
                expected: [
                    6,
                    3
                ]
            },
            {
                args: [
                    2,
                    [
                        [
                            "update",
                            0,
                            7
                        ],
                        [
                            "sum",
                            0,
                            0
                        ]
                    ]
                ],
                expected: [
                    7
                ]
            },
            {
                args: [
                    3,
                    [
                        [
                            "update",
                            1,
                            4
                        ],
                        [
                            "sum",
                            0,
                            2
                        ],
                        [
                            "update",
                            1,
                            -4
                        ],
                        [
                            "sum",
                            0,
                            2
                        ]
                    ]
                ],
                expected: [
                    4,
                    0
                ]
            },
            {
                args: [
                    6,
                    [
                        [
                            "update",
                            5,
                            9
                        ],
                        [
                            "sum",
                            5,
                            5
                        ],
                        [
                            "sum",
                            0,
                            5
                        ]
                    ]
                ],
                expected: [
                    9,
                    9
                ]
            },
            {
                args: [
                    1,
                    [
                        [
                            "update",
                            0,
                            3
                        ],
                        [
                            "update",
                            0,
                            2
                        ],
                        [
                            "sum",
                            0,
                            0
                        ]
                    ]
                ],
                expected: [
                    5
                ]
            }
        ],
        hints: [
            "A Fenwick (binary indexed) tree gives O(log n) point update and prefix sum.",
            "range(l, r) = prefix(r) - prefix(l - 1).",
            "Index the tree from 1; move by i += i & (-i) for updates, i -= i & (-i) for queries."
        ],
        solutions: [
            {
                label: "Fenwick / BIT",
                approach: "Point update and prefix query in O(log n); range = prefix diff.",
                js: "function fenwickRangeSum(n, ops) {\n  const bit = new Array(n + 1).fill(0);\n  const update = (i, d) => { for (i++; i <= n; i += i & (-i)) bit[i] += d; };\n  const prefix = (i) => { let s = 0; for (i++; i > 0; i -= i & (-i)) s += bit[i]; return s; };\n  const res = [];\n  for (const op of ops) {\n    if (op[0] === 'update') update(op[1], op[2]);\n    else res.push(prefix(op[2]) - prefix(op[1] - 1));\n  }\n  return res;\n}\n",
                ts: "function fenwickRangeSum(n: number, ops: (string | number)[][]): number[] {\n  const bit = new Array(n + 1).fill(0);\n  const update = (i: number, d: number) => { for (i++; i <= n; i += i & (-i)) bit[i] += d; };\n  const prefix = (i: number) => { let s = 0; for (i++; i > 0; i -= i & (-i)) s += bit[i]; return s; };\n  const res: number[] = [];\n  for (const op of ops) {\n    if (op[0] === 'update') update(op[1] as number, op[2] as number);\n    else res.push(prefix(op[2] as number) - prefix((op[1] as number) - 1));\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: `function fenwickRangeSum(n, ops) {
  // Fenwick indices start at 1, so reserve index 0 as unused.
  const bit = new Array(n + 1).fill(0);

  const update = (i, delta) => {
    // Convert the array index to one-based, then update every covering node.
    for (i++; i <= n; i += i & (-i)) bit[i] += delta;
  };
  const prefix = (i) => {
    let sum = 0;
    // Walk to parent ranges by removing the lowest set bit.
    for (i++; i > 0; i -= i & (-i)) sum += bit[i];
    return sum;
  };

  const results = [];
  for (const op of ops) {
    if (op[0] === "update") {
      update(op[1], op[2]);
    } else {
      // An inclusive range is the difference of two prefix sums.
      results.push(prefix(op[2]) - prefix(op[1] - 1));
    }
  }
  return results;
}
`,
                    ts: `function fenwickRangeSum(n: number, ops: (string | number)[][]): number[] {
  // Fenwick indices start at 1, so reserve index 0 as unused.
  const bit = new Array(n + 1).fill(0);

  const update = (i: number, delta: number): void => {
    // Convert the array index to one-based, then update every covering node.
    for (i++; i <= n; i += i & (-i)) bit[i] += delta;
  };
  const prefix = (i: number): number => {
    let sum = 0;
    // Walk to parent ranges by removing the lowest set bit.
    for (i++; i > 0; i -= i & (-i)) sum += bit[i];
    return sum;
  };

  const results: number[] = [];
  for (const op of ops) {
    if (op[0] === "update") {
      update(op[1] as number, op[2] as number);
    } else {
      // An inclusive range is the difference of two prefix sums.
      results.push(prefix(op[2] as number) - prefix((op[1] as number) - 1));
    }
  }
  return results;
}
`
                },
                time: "O((ops)·log n)",
                space: "O(n)"
            },
            {
                label: "Plain array + linear sum",
                approach: "Apply updates directly and sum the range each query — O(n) per sum.",
                js: "function fenwickRangeSum(n, ops) {\n  const a = new Array(n).fill(0);\n  const res = [];\n  for (const op of ops) {\n    if (op[0] === 'update') a[op[1]] += op[2];\n    else { let s = 0; for (let i = op[1]; i <= op[2]; i++) s += a[i]; res.push(s); }\n  }\n  return res;\n}\n",
                ts: "function fenwickRangeSum(n: number, ops: (string | number)[][]): number[] {\n  const a = new Array(n).fill(0);\n  const res: number[] = [];\n  for (const op of ops) {\n    if (op[0] === 'update') a[op[1] as number] += op[2] as number;\n    else { let s = 0; for (let i = op[1] as number; i <= (op[2] as number); i++) s += a[i]; res.push(s); }\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: `function fenwickRangeSum(n, ops) {
  // Store the current value at each original array index.
  const values = new Array(n).fill(0);
  const results = [];
  for (const op of ops) {
    if (op[0] === "update") {
      // Apply each point delta directly.
      values[op[1]] += op[2];
    } else {
      let sum = 0;
      // Recompute the requested inclusive range from its individual values.
      for (let i = op[1]; i <= op[2]; i++) sum += values[i];
      results.push(sum);
    }
  }
  return results;
}
`,
                    ts: `function fenwickRangeSum(n: number, ops: (string | number)[][]): number[] {
  // Store the current value at each original array index.
  const values = new Array(n).fill(0);
  const results: number[] = [];
  for (const op of ops) {
    if (op[0] === "update") {
      // Apply each point delta directly.
      values[op[1] as number] += op[2] as number;
    } else {
      let sum = 0;
      // Recompute the requested inclusive range from its individual values.
      for (let i = op[1] as number; i <= (op[2] as number); i++) sum += values[i];
      results.push(sum);
    }
  }
  return results;
}
`
                },
                time: "O(ops·n)",
                space: "O(n)"
            }
        ]
    },
    {
        id: "ex-mst-cost",
        slug: "minimum-spanning-tree-cost",
        title: "Minimum Spanning Tree Cost (Kruskal)",
        difficulty: "hard",
        patternIds: P,
        statement: "Given `n` nodes and undirected weighted edges `[u, v, w]`, return the total weight of a minimum spanning tree, or -1 if the graph is not connected.",
        examples: [
            {
                input: "4, [[0,1,1],[1,2,2],[0,2,2],[2,3,3]]",
                output: "6"
            },
            {
                input: "3, [[0,1,5]]",
                output: "-1"
            },
            {
                input: "1, []",
                output: "0"
            }
        ],
        constraints: [
            "1 <= n <= 100000"
        ],
        functionName: "mstCost",
        starter: {
            js: "function mstCost(n, edges) {\n  // Total weight of a minimum spanning tree, or -1.\n}\n",
            ts: "function mstCost(n: number, edges: number[][]): number {\n  // Total weight of a minimum spanning tree, or -1.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            2
                        ],
                        [
                            0,
                            2,
                            2
                        ],
                        [
                            2,
                            3,
                            3
                        ]
                    ]
                ],
                expected: 6
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            5
                        ]
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    1,
                    []
                ],
                expected: 0
            }
        ],
        hidden: [
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            2,
                            3,
                            1
                        ]
                    ]
                ],
                expected: -1
            },
            {
                args: [
                    5,
                    [
                        [
                            0,
                            1,
                            2
                        ],
                        [
                            1,
                            2,
                            3
                        ],
                        [
                            2,
                            3,
                            1
                        ],
                        [
                            3,
                            4,
                            4
                        ],
                        [
                            0,
                            4,
                            7
                        ]
                    ]
                ],
                expected: 10
            },
            {
                args: [
                    3,
                    [
                        [
                            0,
                            1,
                            1
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            0,
                            2,
                            1
                        ]
                    ]
                ],
                expected: 2
            },
            {
                args: [
                    2,
                    [
                        [
                            0,
                            1,
                            5
                        ]
                    ]
                ],
                expected: 5
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            1,
                            3
                        ],
                        [
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            2
                        ],
                        [
                            0,
                            3,
                            4
                        ],
                        [
                            0,
                            2,
                            5
                        ]
                    ]
                ],
                expected: 6
            },
            {
                args: [
                    1,
                    []
                ],
                expected: 0
            }
        ],
        hints: [
            "Sort edges by weight and add each if it joins two different components (Kruskal).",
            "Union-find detects whether an edge would form a cycle.",
            "If fewer than n-1 edges are added, the graph is disconnected → -1."
        ],
        solutions: [
            {
                label: "Kruskal + union-find",
                approach: "Greedily take the lightest edge that connects new components.",
                js: "function mstCost(n, edges) {\n  const es = edges.slice().sort((a, b) => a[2] - b[2]);\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let cost = 0, used = 0;\n  for (const [u, v, w] of es) {\n    const ru = find(u), rv = find(v);\n    if (ru !== rv) { parent[ru] = rv; cost += w; used++; }\n  }\n  return used === n - 1 ? cost : -1;\n}\n",
                ts: "function mstCost(n: number, edges: number[][]): number {\n  const es = edges.slice().sort((a, b) => a[2] - b[2]);\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let cost = 0, used = 0;\n  for (const [u, v, w] of es) {\n    const ru = find(u), rv = find(v);\n    if (ru !== rv) { parent[ru] = rv; cost += w; used++; }\n  }\n  return used === n - 1 ? cost : -1;\n}\n",
                commentedCode: {
                    js: `function mstCost(n, edges) {
  // Kruskal considers edges from lightest to heaviest.
  const sortedEdges = edges.slice().sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  const find = (x) => {
    // Compress paths while walking to the component representative.
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  let cost = 0;
  let used = 0;
  for (const [u, v, weight] of sortedEdges) {
    const rootU = find(u);
    const rootV = find(v);
    // Only cross-component edges grow the tree without creating a cycle.
    if (rootU !== rootV) {
      parent[rootU] = rootV;
      cost += weight;
      used++;
    }
  }
  // A spanning tree must contain exactly n - 1 accepted edges.
  return used === n - 1 ? cost : -1;
}
`,
                    ts: `function mstCost(n: number, edges: number[][]): number {
  // Kruskal considers edges from lightest to heaviest.
  const sortedEdges = edges.slice().sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  const find = (x: number): number => {
    // Compress paths while walking to the component representative.
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  let cost = 0;
  let used = 0;
  for (const [u, v, weight] of sortedEdges) {
    const rootU = find(u);
    const rootV = find(v);
    // Only cross-component edges grow the tree without creating a cycle.
    if (rootU !== rootV) {
      parent[rootU] = rootV;
      cost += weight;
      used++;
    }
  }
  // A spanning tree must contain exactly n - 1 accepted edges.
  return used === n - 1 ? cost : -1;
}
`
                },
                time: "O(e·log e)",
                space: "O(n)"
            },
            {
                label: "Prim (adjacency scan)",
                approach: "Grow the tree from node 0, repeatedly adding the cheapest border edge.",
                js: "function mstCost(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) { adj[u].push([v, w]); adj[v].push([u, w]); }\n  const inTree = new Array(n).fill(false);\n  const best = new Array(n).fill(Infinity);\n  best[0] = 0;\n  let cost = 0, count = 0;\n  for (let it = 0; it < n; it++) {\n    let u = -1, b = Infinity;\n    for (let i = 0; i < n; i++) if (!inTree[i] && best[i] < b) { b = best[i]; u = i; }\n    if (u === -1) return -1;\n    inTree[u] = true; cost += best[u]; count++;\n    for (const [v, w] of adj[u]) if (!inTree[v] && w < best[v]) best[v] = w;\n  }\n  return count === n ? cost : -1;\n}\n",
                ts: "function mstCost(n: number, edges: number[][]): number {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v, w] of edges) { adj[u].push([v, w]); adj[v].push([u, w]); }\n  const inTree = new Array(n).fill(false);\n  const best = new Array(n).fill(Infinity);\n  best[0] = 0;\n  let cost = 0, count = 0;\n  for (let it = 0; it < n; it++) {\n    let u = -1, b = Infinity;\n    for (let i = 0; i < n; i++) if (!inTree[i] && best[i] < b) { b = best[i]; u = i; }\n    if (u === -1) return -1;\n    inTree[u] = true; cost += best[u]; count++;\n    for (const [v, w] of adj[u]) if (!inTree[v] && w < best[v]) best[v] = w;\n  }\n  return count === n ? cost : -1;\n}\n",
                commentedCode: {
                    js: `function mstCost(n, edges) {
  // Build an undirected adjacency list for Prim's border-edge updates.
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, weight] of edges) {
    adj[u].push([v, weight]);
    adj[v].push([u, weight]);
  }

  const inTree = new Array(n).fill(false);
  // best[v] is the cheapest known edge from the current tree to v.
  const best = new Array(n).fill(Infinity);
  best[0] = 0;
  let cost = 0;
  let count = 0;

  for (let iteration = 0; iteration < n; iteration++) {
    // Select the cheapest unfinished vertex by scanning all vertices.
    let u = -1;
    let cheapest = Infinity;
    for (let i = 0; i < n; i++) {
      if (!inTree[i] && best[i] < cheapest) {
        cheapest = best[i];
        u = i;
      }
    }
    // No reachable unfinished vertex means the graph is disconnected.
    if (u === -1) return -1;

    inTree[u] = true;
    cost += best[u];
    count++;
    // Joining u may provide cheaper border edges to its neighbours.
    for (const [v, weight] of adj[u]) {
      if (!inTree[v] && weight < best[v]) best[v] = weight;
    }
  }
  return count === n ? cost : -1;
}
`,
                    ts: `function mstCost(n: number, edges: number[][]): number {
  // Build an undirected adjacency list for Prim's border-edge updates.
  const adj: number[][][] = Array.from({ length: n }, () => []);
  for (const [u, v, weight] of edges) {
    adj[u].push([v, weight]);
    adj[v].push([u, weight]);
  }

  const inTree = new Array(n).fill(false);
  // best[v] is the cheapest known edge from the current tree to v.
  const best = new Array(n).fill(Infinity);
  best[0] = 0;
  let cost = 0;
  let count = 0;

  for (let iteration = 0; iteration < n; iteration++) {
    // Select the cheapest unfinished vertex by scanning all vertices.
    let u = -1;
    let cheapest = Infinity;
    for (let i = 0; i < n; i++) {
      if (!inTree[i] && best[i] < cheapest) {
        cheapest = best[i];
        u = i;
      }
    }
    // No reachable unfinished vertex means the graph is disconnected.
    if (u === -1) return -1;

    inTree[u] = true;
    cost += best[u];
    count++;
    // Joining u may provide cheaper border edges to its neighbours.
    for (const [v, weight] of adj[u]) {
      if (!inTree[v] && weight < best[v]) best[v] = weight;
    }
  }
  return count === n ? cost : -1;
}
`
                },
                time: "O(n² + e)",
                space: "O(n + e)"
            }
        ]
    },
    {
        id: "ex-min-path-grid",
        slug: "min-path-grid-four-directions",
        title: "Minimum Cost Grid Path (Dijkstra)",
        difficulty: "hard",
        patternIds: P,
        statement: "Given a grid of non-negative costs, move up/down/left/right from the top-left to the bottom-right, paying each cell's cost when you enter it (the start cell is paid too). Return the minimum total cost.",
        examples: [
            {
                input: "[[1,3,1],[1,5,1],[4,2,1]]",
                output: "7"
            },
            {
                input: "[[1,2],[1,1]]",
                output: "3"
            },
            {
                input: "[[5]]",
                output: "5"
            }
        ],
        constraints: [
            "1 <= rows, cols <= 200",
            "costs are non-negative"
        ],
        functionName: "minPathGrid",
        starter: {
            js: "function minPathGrid(grid) {\n  // Minimum 4-directional path cost, corner to corner.\n}\n",
            ts: "function minPathGrid(grid: number[][]): number {\n  // Minimum 4-directional path cost, corner to corner.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        [
                            1,
                            3,
                            1
                        ],
                        [
                            1,
                            5,
                            1
                        ],
                        [
                            4,
                            2,
                            1
                        ]
                    ]
                ],
                expected: 7
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
                            5
                        ]
                    ]
                ],
                expected: 5
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
                        ],
                        [
                            4,
                            5,
                            6
                        ]
                    ]
                ],
                expected: 12
            },
            {
                args: [
                    [
                        [
                            9,
                            1,
                            4
                        ],
                        [
                            8,
                            1,
                            3
                        ],
                        [
                            6,
                            1,
                            2
                        ]
                    ]
                ],
                expected: 14
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
                expected: 4
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
                            1,
                            100
                        ],
                        [
                            1,
                            1
                        ]
                    ]
                ],
                expected: 3
            }
        ],
        hints: [
            "Because moves are 4-directional, this is Dijkstra on a grid, not a simple DP.",
            "Push (cost, cell) into a min-heap keyed by cost so far.",
            "Encode a cell as r*cols + c and skip stale heap entries."
        ],
        solutions: [
            {
                label: "Dijkstra with a min-heap",
                approach: "Settle each cell by lowest cost, relaxing its four neighbours.",
                js: `${H}
function minPathGrid(grid) {
  const R = grid.length, C = grid[0].length;
  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));
  dist[0][0] = grid[0][0];
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(grid[0][0] * BASE);
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), cell = key % BASE;
    const r = Math.floor(cell / C), c = cell % C;
    if (d > dist[r][c]) continue;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
        const nd = d + grid[nr][nc];
        if (nd < dist[nr][nc]) { dist[nr][nc] = nd; heap.push(nd * BASE + (nr * C + nc)); }
      }
    }
  }
  return dist[R - 1][C - 1];
}
`,
                ts: `${H}
function minPathGrid(grid: number[][]): number {
  const R = grid.length, C = grid[0].length;
  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));
  dist[0][0] = grid[0][0];
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(grid[0][0] * BASE);
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (heap.size()) {
    const key = heap.pop();
    const d = Math.floor(key / BASE), cell = key % BASE;
    const r = Math.floor(cell / C), c = cell % C;
    if (d > dist[r][c]) continue;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
        const nd = d + grid[nr][nc];
        if (nd < dist[nr][nc]) { dist[nr][nc] = nd; heap.push(nd * BASE + (nr * C + nc)); }
      }
    }
  }
  return dist[R - 1][C - 1];
}
`,
                commentedCode: {
                    js: `${H}
function minPathGrid(grid) {
  const R = grid.length;
  const C = grid[0].length;
  // dist[r][c] is the cheapest cost discovered so far for reaching this cell.
  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));
  dist[0][0] = grid[0][0];

  // Pack distance and cell id into one numeric heap key; cell ids stay below BASE.
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(grid[0][0] * BASE);
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (heap.size()) {
    // Decode the lowest-cost pending state.
    const key = heap.pop();
    const cost = Math.floor(key / BASE);
    const cell = key % BASE;
    const r = Math.floor(cell / C);
    const c = cell % C;
    // Ignore heap entries superseded by a cheaper route.
    if (cost > dist[r][c]) continue;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
        const nextCost = cost + grid[nr][nc];
        // Relax the edge and queue the improved state.
        if (nextCost < dist[nr][nc]) {
          dist[nr][nc] = nextCost;
          heap.push(nextCost * BASE + (nr * C + nc));
        }
      }
    }
  }
  return dist[R - 1][C - 1];
}
`,
                    ts: `${H}
function minPathGrid(grid: number[][]): number {
  const R = grid.length;
  const C = grid[0].length;
  // dist[r][c] is the cheapest cost discovered so far for reaching this cell.
  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));
  dist[0][0] = grid[0][0];

  // Pack distance and cell id into one numeric heap key; cell ids stay below BASE.
  const BASE = 1000000;
  const heap = new MinHeap();
  heap.push(grid[0][0] * BASE);
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (heap.size()) {
    // Decode the lowest-cost pending state.
    const key = heap.pop();
    const cost = Math.floor(key / BASE);
    const cell = key % BASE;
    const r = Math.floor(cell / C);
    const c = cell % C;
    // Ignore heap entries superseded by a cheaper route.
    if (cost > dist[r][c]) continue;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
        const nextCost = cost + grid[nr][nc];
        // Relax the edge and queue the improved state.
        if (nextCost < dist[nr][nc]) {
          dist[nr][nc] = nextCost;
          heap.push(nextCost * BASE + (nr * C + nc));
        }
      }
    }
  }
  return dist[R - 1][C - 1];
}
`
                },
                time: "O(R·C·log(R·C))",
                space: "O(R·C)"
            },
            {
                label: "Dijkstra, O((RC)²) selection",
                approach: "Repeatedly settle the nearest unfinished cell — no heap needed.",
                js: "function minPathGrid(grid) {\n  const R = grid.length, C = grid[0].length;\n  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));\n  const done = Array.from({ length: R }, () => new Array(C).fill(false));\n  dist[0][0] = grid[0][0];\n  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  for (let it = 0; it < R * C; it++) {\n    let br = -1, bc = -1, b = Infinity;\n    for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (!done[r][c] && dist[r][c] < b) { b = dist[r][c]; br = r; bc = c; }\n    if (br === -1) break;\n    done[br][bc] = true;\n    for (const [dr, dc] of dirs) {\n      const nr = br + dr, nc = bc + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C && dist[br][bc] + grid[nr][nc] < dist[nr][nc]) dist[nr][nc] = dist[br][bc] + grid[nr][nc];\n    }\n  }\n  return dist[R - 1][C - 1];\n}\n",
                ts: "function minPathGrid(grid: number[][]): number {\n  const R = grid.length, C = grid[0].length;\n  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));\n  const done = Array.from({ length: R }, () => new Array(C).fill(false));\n  dist[0][0] = grid[0][0];\n  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  for (let it = 0; it < R * C; it++) {\n    let br = -1, bc = -1, b = Infinity;\n    for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (!done[r][c] && dist[r][c] < b) { b = dist[r][c]; br = r; bc = c; }\n    if (br === -1) break;\n    done[br][bc] = true;\n    for (const [dr, dc] of dirs) {\n      const nr = br + dr, nc = bc + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C && dist[br][bc] + grid[nr][nc] < dist[nr][nc]) dist[nr][nc] = dist[br][bc] + grid[nr][nc];\n    }\n  }\n  return dist[R - 1][C - 1];\n}\n",
                commentedCode: {
                    js: `function minPathGrid(grid) {
  const R = grid.length;
  const C = grid[0].length;
  // Track tentative distances and whether each distance is final.
  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));
  const done = Array.from({ length: R }, () => new Array(C).fill(false));
  dist[0][0] = grid[0][0];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let iteration = 0; iteration < R * C; iteration++) {
    // Replace the heap with a full scan for the nearest unfinished cell.
    let bestRow = -1;
    let bestCol = -1;
    let bestCost = Infinity;
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (!done[r][c] && dist[r][c] < bestCost) {
          bestCost = dist[r][c];
          bestRow = r;
          bestCol = c;
        }
      }
    }
    if (bestRow === -1) break;
    done[bestRow][bestCol] = true;

    // Relax every in-bounds neighbour from the newly settled cell.
    for (const [dr, dc] of directions) {
      const nr = bestRow + dr;
      const nc = bestCol + dc;
      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
        const nextCost = dist[bestRow][bestCol] + grid[nr][nc];
        if (nextCost < dist[nr][nc]) dist[nr][nc] = nextCost;
      }
    }
  }
  return dist[R - 1][C - 1];
}
`,
                    ts: `function minPathGrid(grid: number[][]): number {
  const R = grid.length;
  const C = grid[0].length;
  // Track tentative distances and whether each distance is final.
  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));
  const done = Array.from({ length: R }, () => new Array(C).fill(false));
  dist[0][0] = grid[0][0];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let iteration = 0; iteration < R * C; iteration++) {
    // Replace the heap with a full scan for the nearest unfinished cell.
    let bestRow = -1;
    let bestCol = -1;
    let bestCost = Infinity;
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (!done[r][c] && dist[r][c] < bestCost) {
          bestCost = dist[r][c];
          bestRow = r;
          bestCol = c;
        }
      }
    }
    if (bestRow === -1) break;
    done[bestRow][bestCol] = true;

    // Relax every in-bounds neighbour from the newly settled cell.
    for (const [dr, dc] of directions) {
      const nr = bestRow + dr;
      const nc = bestCol + dc;
      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
        const nextCost = dist[bestRow][bestCol] + grid[nr][nc];
        if (nextCost < dist[nr][nc]) dist[nr][nc] = nextCost;
      }
    }
  }
  return dist[R - 1][C - 1];
}
`
                },
                time: "O((R·C)²)",
                space: "O(R·C)"
            }
        ]
    },
    /* ---- held-out test pool ---- */ {
        id: "ex-longest-repeated-substring",
        slug: "longest-repeated-substring",
        title: "Longest Repeated Substring",
        difficulty: "hard",
        patternIds: P,
        statement: "Return the length of the longest substring that appears at least twice in the string (occurrences may overlap). Return 0 if no character repeats.",
        examples: [
            {
                input: '"banana"',
                output: "3"
            },
            {
                input: '"abcd"',
                output: "0"
            },
            {
                input: '"aabcaabxaaz"',
                output: "3"
            }
        ],
        constraints: [
            "0 <= s.length <= 500",
            "lowercase letters"
        ],
        functionName: "longestRepeatedSubstring",
        starter: {
            js: "function longestRepeatedSubstring(s) {\n  // Length of the longest substring occurring at least twice.\n}\n",
            ts: "function longestRepeatedSubstring(s: string): number {\n  // Length of the longest substring occurring at least twice.\n  return 0;\n}\n"
        },
        visible: [
            {
                args: [
                    "banana"
                ],
                expected: 3
            },
            {
                args: [
                    "abcd"
                ],
                expected: 0
            },
            {
                args: [
                    "aabcaabxaaz"
                ],
                expected: 3
            }
        ],
        hidden: [
            {
                args: [
                    "aaaa"
                ],
                expected: 3
            },
            {
                args: [
                    "abcabc"
                ],
                expected: 3
            },
            {
                args: [
                    "mississippi"
                ],
                expected: 4
            },
            {
                args: [
                    "a"
                ],
                expected: 0
            },
            {
                args: [
                    "abab"
                ],
                expected: 2
            },
            {
                args: [
                    ""
                ],
                expected: 0
            }
        ],
        hints: [
            "Binary-search the answer length L: is there a repeated substring of length L?",
            "For a fixed L, hash every length-L window into a set and look for a collision.",
            "A brute check by increasing length also works for modest inputs."
        ],
        solutions: [
            {
                label: "Binary search + hashing",
                approach: "Search the length; for each L, detect a duplicate window via a set.",
                js: "function longestRepeatedSubstring(s) {\n  const n = s.length;\n  const hasDup = (len) => {\n    if (len === 0) return true;\n    const seen = new Set();\n    for (let i = 0; i + len <= n; i++) { const w = s.slice(i, i + len); if (seen.has(w)) return true; seen.add(w); }\n    return false;\n  };\n  let lo = 0, hi = n - 1, ans = 0;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (hasDup(mid)) { ans = mid; lo = mid + 1; } else hi = mid - 1;\n  }\n  return ans;\n}\n",
                ts: "function longestRepeatedSubstring(s: string): number {\n  const n = s.length;\n  const hasDup = (len: number): boolean => {\n    if (len === 0) return true;\n    const seen = new Set<string>();\n    for (let i = 0; i + len <= n; i++) { const w = s.slice(i, i + len); if (seen.has(w)) return true; seen.add(w); }\n    return false;\n  };\n  let lo = 0, hi = n - 1, ans = 0;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (hasDup(mid)) { ans = mid; lo = mid + 1; } else hi = mid - 1;\n  }\n  return ans;\n}\n",
                commentedCode: {
                    js: `function longestRepeatedSubstring(s) {
  const n = s.length;
  const hasDuplicate = (length) => {
    // Length zero is always feasible and anchors the binary search.
    if (length === 0) return true;
    const seen = new Set();
    // Compare fixed-length windows through their exact string values.
    for (let i = 0; i + length <= n; i++) {
      const window = s.slice(i, i + length);
      if (seen.has(window)) return true;
      seen.add(window);
    }
    return false;
  };

  // Feasibility is monotonic: a repeated length implies every shorter length works.
  let low = 0;
  let high = n - 1;
  let answer = 0;
  while (low <= high) {
    const middle = (low + high) >> 1;
    if (hasDuplicate(middle)) {
      answer = middle;
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return answer;
}
`,
                    ts: `function longestRepeatedSubstring(s: string): number {
  const n = s.length;
  const hasDuplicate = (length: number): boolean => {
    // Length zero is always feasible and anchors the binary search.
    if (length === 0) return true;
    const seen = new Set<string>();
    // Compare fixed-length windows through their exact string values.
    for (let i = 0; i + length <= n; i++) {
      const window = s.slice(i, i + length);
      if (seen.has(window)) return true;
      seen.add(window);
    }
    return false;
  };

  // Feasibility is monotonic: a repeated length implies every shorter length works.
  let low = 0;
  let high = n - 1;
  let answer = 0;
  while (low <= high) {
    const middle = (low + high) >> 1;
    if (hasDuplicate(middle)) {
      answer = middle;
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return answer;
}
`
                },
                time: "O(n² log n)",
                space: "O(n²)"
            },
            {
                label: "Brute by increasing length",
                approach: "For each length, look for any repeated window; keep the largest that works.",
                js: "function longestRepeatedSubstring(s) {\n  const n = s.length;\n  let best = 0;\n  for (let len = 1; len < n; len++) {\n    const seen = new Set();\n    let found = false;\n    for (let i = 0; i + len <= n; i++) { const w = s.slice(i, i + len); if (seen.has(w)) { found = true; break; } seen.add(w); }\n    if (found) best = len;\n  }\n  return best;\n}\n",
                ts: "function longestRepeatedSubstring(s: string): number {\n  const n = s.length;\n  let best = 0;\n  for (let len = 1; len < n; len++) {\n    const seen = new Set<string>();\n    let found = false;\n    for (let i = 0; i + len <= n; i++) { const w = s.slice(i, i + len); if (seen.has(w)) { found = true; break; } seen.add(w); }\n    if (found) best = len;\n  }\n  return best;\n}\n",
                commentedCode: {
                    js: `function longestRepeatedSubstring(s) {
  const n = s.length;
  let best = 0;
  // Test every non-whole-string candidate length.
  for (let length = 1; length < n; length++) {
    const seen = new Set();
    let found = false;
    for (let i = 0; i + length <= n; i++) {
      const window = s.slice(i, i + length);
      // Seeing the same window twice proves this length is achievable.
      if (seen.has(window)) {
        found = true;
        break;
      }
      seen.add(window);
    }
    if (found) best = length;
  }
  return best;
}
`,
                    ts: `function longestRepeatedSubstring(s: string): number {
  const n = s.length;
  let best = 0;
  // Test every non-whole-string candidate length.
  for (let length = 1; length < n; length++) {
    const seen = new Set<string>();
    let found = false;
    for (let i = 0; i + length <= n; i++) {
      const window = s.slice(i, i + length);
      // Seeing the same window twice proves this length is achievable.
      if (seen.has(window)) {
        found = true;
        break;
      }
      seen.add(window);
    }
    if (found) best = length;
  }
  return best;
}
`
                },
                time: "O(n³)",
                space: "O(n²)"
            }
        ]
    },
    {
        id: "ex-range-min-query",
        slug: "range-minimum-query",
        title: "Range Minimum Queries",
        difficulty: "medium",
        patternIds: P,
        statement: "Given an immutable array and a list of `[l, r]` inclusive queries, return an array with the minimum of each queried range.",
        examples: [
            {
                input: "[2,1,3,4,0,5], [[0,2],[1,4],[3,5]]",
                output: "[1,0,0]"
            },
            {
                input: "[5], [[0,0]]",
                output: "[5]"
            },
            {
                input: "[3,1,2], [[0,1],[1,2],[0,2]]",
                output: "[1,1,1]"
            }
        ],
        constraints: [
            "1 <= nums.length <= 100000",
            "0 <= l <= r < nums.length"
        ],
        functionName: "rangeMinQuery",
        starter: {
            js: "function rangeMinQuery(nums, queries) {\n  // Minimum of each [l, r] range.\n}\n",
            ts: "function rangeMinQuery(nums: number[], queries: number[][]): number[] {\n  // Minimum of each [l, r] range.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    [
                        2,
                        1,
                        3,
                        4,
                        0,
                        5
                    ],
                    [
                        [
                            0,
                            2
                        ],
                        [
                            1,
                            4
                        ],
                        [
                            3,
                            5
                        ]
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
                        3,
                        1,
                        2
                    ],
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
                    ]
                ],
                expected: [
                    1,
                    1,
                    1
                ]
            }
        ],
        hidden: [
            {
                args: [
                    [
                        9,
                        8,
                        7,
                        6
                    ],
                    [
                        [
                            0,
                            3
                        ]
                    ]
                ],
                expected: [
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
                    [
                        [
                            2,
                            2
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
                        4,
                        4,
                        4
                    ],
                    [
                        [
                            0,
                            2
                        ]
                    ]
                ],
                expected: [
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
                        9
                    ],
                    [
                        [
                            0,
                            4
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            3,
                            3
                        ]
                    ]
                ],
                expected: [
                    1,
                    3,
                    1
                ]
            },
            {
                args: [
                    [
                        2,
                        1
                    ],
                    [
                        [
                            0,
                            1
                        ],
                        [
                            0,
                            0
                        ],
                        [
                            1,
                            1
                        ]
                    ]
                ],
                expected: [
                    1,
                    2,
                    1
                ]
            },
            {
                args: [
                    [
                        7,
                        7,
                        7,
                        7
                    ],
                    [
                        [
                            1,
                            3
                        ]
                    ]
                ],
                expected: [
                    7
                ]
            }
        ],
        hints: [
            "A sparse table precomputes minima over power-of-two length windows.",
            "Each query is answered from two overlapping windows in O(1).",
            "For a handful of queries, a direct scan per query is fine too."
        ],
        solutions: [
            {
                label: "Sparse table",
                approach: "Precompute log-length window minima; combine two windows per query.",
                js: "function rangeMinQuery(nums, queries) {\n  const n = nums.length;\n  const LOG = Math.floor(Math.log2(n)) + 1;\n  const table = [nums.slice()];\n  for (let j = 1; j < LOG; j++) {\n    const prev = table[j - 1], cur = new Array(n).fill(0);\n    for (let i = 0; i + (1 << j) <= n; i++) cur[i] = Math.min(prev[i], prev[i + (1 << (j - 1))]);\n    table.push(cur);\n  }\n  return queries.map(([l, r]) => {\n    const k = Math.floor(Math.log2(r - l + 1));\n    return Math.min(table[k][l], table[k][r - (1 << k) + 1]);\n  });\n}\n",
                ts: "function rangeMinQuery(nums: number[], queries: number[][]): number[] {\n  const n = nums.length;\n  const LOG = Math.floor(Math.log2(n)) + 1;\n  const table: number[][] = [nums.slice()];\n  for (let j = 1; j < LOG; j++) {\n    const prev = table[j - 1], cur = new Array(n).fill(0);\n    for (let i = 0; i + (1 << j) <= n; i++) cur[i] = Math.min(prev[i], prev[i + (1 << (j - 1))]);\n    table.push(cur);\n  }\n  return queries.map(([l, r]) => {\n    const k = Math.floor(Math.log2(r - l + 1));\n    return Math.min(table[k][l], table[k][r - (1 << k) + 1]);\n  });\n}\n",
                commentedCode: {
                    js: `function rangeMinQuery(nums, queries) {
  const n = nums.length;
  // Row j will store minima for all windows of length 2^j.
  const levels = Math.floor(Math.log2(n)) + 1;
  const table = [nums.slice()];
  for (let j = 1; j < levels; j++) {
    const previous = table[j - 1];
    const current = new Array(n).fill(0);
    const length = 1 << j;
    const half = 1 << (j - 1);
    // Combine two adjacent half-length windows to build this level.
    for (let i = 0; i + length <= n; i++) {
      current[i] = Math.min(previous[i], previous[i + half]);
    }
    table.push(current);
  }

  return queries.map(([left, right]) => {
    // Choose the largest power-of-two window no longer than the query.
    const k = Math.floor(Math.log2(right - left + 1));
    const length = 1 << k;
    // Two possibly overlapping windows cover both ends of the range.
    return Math.min(table[k][left], table[k][right - length + 1]);
  });
}
`,
                    ts: `function rangeMinQuery(nums: number[], queries: number[][]): number[] {
  const n = nums.length;
  // Row j will store minima for all windows of length 2^j.
  const levels = Math.floor(Math.log2(n)) + 1;
  const table: number[][] = [nums.slice()];
  for (let j = 1; j < levels; j++) {
    const previous = table[j - 1];
    const current = new Array(n).fill(0);
    const length = 1 << j;
    const half = 1 << (j - 1);
    // Combine two adjacent half-length windows to build this level.
    for (let i = 0; i + length <= n; i++) {
      current[i] = Math.min(previous[i], previous[i + half]);
    }
    table.push(current);
  }

  return queries.map(([left, right]) => {
    // Choose the largest power-of-two window no longer than the query.
    const k = Math.floor(Math.log2(right - left + 1));
    const length = 1 << k;
    // Two possibly overlapping windows cover both ends of the range.
    return Math.min(table[k][left], table[k][right - length + 1]);
  });
}
`
                },
                time: "O(n log n + q)",
                space: "O(n log n)"
            },
            {
                label: "Scan per query",
                approach: "Directly scan each range for its minimum.",
                js: "function rangeMinQuery(nums, queries) {\n  return queries.map(([l, r]) => {\n    let m = Infinity;\n    for (let i = l; i <= r; i++) m = Math.min(m, nums[i]);\n    return m;\n  });\n}\n",
                ts: "function rangeMinQuery(nums: number[], queries: number[][]): number[] {\n  return queries.map(([l, r]) => {\n    let m = Infinity;\n    for (let i = l; i <= r; i++) m = Math.min(m, nums[i]);\n    return m;\n  });\n}\n",
                commentedCode: {
                    js: `function rangeMinQuery(nums, queries) {
  return queries.map(([left, right]) => {
    let minimum = Infinity;
    // Inspect every value in this inclusive query range.
    for (let i = left; i <= right; i++) {
      minimum = Math.min(minimum, nums[i]);
    }
    return minimum;
  });
}
`,
                    ts: `function rangeMinQuery(nums: number[], queries: number[][]): number[] {
  return queries.map(([left, right]) => {
    let minimum = Infinity;
    // Inspect every value in this inclusive query range.
    for (let i = left; i <= right; i++) {
      minimum = Math.min(minimum, nums[i]);
    }
    return minimum;
  });
}
`
                },
                time: "O(q·n)",
                space: "O(1)"
            }
        ]
    },
    {
        id: "ex-components-after-edges",
        slug: "components-after-each-edge",
        title: "Components After Each Edge",
        difficulty: "medium",
        patternIds: P,
        statement: "Starting from `n` isolated nodes, add the undirected edges one at a time. After each addition, record the current number of connected components. Return that list.",
        examples: [
            {
                input: "5, [[0,1],[1,2],[3,4]]",
                output: "[4,3,2]"
            },
            {
                input: "3, []",
                output: "[]"
            },
            {
                input: "4, [[0,1],[2,3],[1,2]]",
                output: "[3,2,1]"
            }
        ],
        constraints: [
            "1 <= n <= 100000"
        ],
        functionName: "componentsAfterEdges",
        starter: {
            js: "function componentsAfterEdges(n, edges) {\n  // Component count after each edge is added.\n}\n",
            ts: "function componentsAfterEdges(n: number, edges: number[][]): number[] {\n  // Component count after each edge is added.\n  return [];\n}\n"
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
                expected: [
                    4,
                    3,
                    2
                ]
            },
            {
                args: [
                    3,
                    []
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
                        ],
                        [
                            1,
                            2
                        ]
                    ]
                ],
                expected: [
                    3,
                    2,
                    1
                ]
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
                        ],
                        [
                            0,
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
                        ],
                        [
                            1,
                            3
                        ]
                    ]
                ],
                expected: [
                    5,
                    4,
                    3,
                    2
                ]
            },
            {
                args: [
                    1,
                    []
                ],
                expected: []
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
                    ]
                ],
                expected: [
                    2,
                    1,
                    1
                ]
            },
            {
                args: [
                    4,
                    [
                        [
                            0,
                            0
                        ]
                    ]
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
                            3,
                            4
                        ]
                    ]
                ],
                expected: [
                    4,
                    3,
                    2
                ]
            }
        ],
        hints: [
            "Start with n components; a successful union reduces the count by one.",
            "An edge joining two already-connected nodes leaves the count unchanged.",
            "Record the running count after processing each edge."
        ],
        solutions: [
            {
                label: "Union-Find running count",
                approach: "Union each edge, decrementing the count only on real merges.",
                js: "function componentsAfterEdges(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  const res = [];\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru !== rv) { parent[ru] = rv; count--; }\n    res.push(count);\n  }\n  return res;\n}\n",
                ts: "function componentsAfterEdges(n: number, edges: number[][]): number[] {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };\n  let count = n;\n  const res: number[] = [];\n  for (const [u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru !== rv) { parent[ru] = rv; count--; }\n    res.push(count);\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: `function componentsAfterEdges(n, edges) {
  // Initially every vertex is its own component representative.
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x) => {
    // Path compression makes future representative lookups cheaper.
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  let count = n;
  const results = [];
  for (const [u, v] of edges) {
    const rootU = find(u);
    const rootV = find(v);
    // Joining distinct components reduces the total by exactly one.
    if (rootU !== rootV) {
      parent[rootU] = rootV;
      count--;
    }
    // Duplicate edges and self-loops simply record the unchanged count.
    results.push(count);
  }
  return results;
}
`,
                    ts: `function componentsAfterEdges(n: number, edges: number[][]): number[] {
  // Initially every vertex is its own component representative.
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x: number): number => {
    // Path compression makes future representative lookups cheaper.
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  let count = n;
  const results: number[] = [];
  for (const [u, v] of edges) {
    const rootU = find(u);
    const rootV = find(v);
    // Joining distinct components reduces the total by exactly one.
    if (rootU !== rootV) {
      parent[rootU] = rootV;
      count--;
    }
    // Duplicate edges and self-loops simply record the unchanged count.
    results.push(count);
  }
  return results;
}
`
                },
                time: "O((n + e)·α(n))",
                space: "O(n)"
            },
            {
                label: "Rebuild + BFS each step",
                approach: "After each edge, flood-fill the growing graph to recount components.",
                js: "function componentsAfterEdges(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  const res = [];\n  const countComponents = () => {\n    const seen = new Array(n).fill(false);\n    let c = 0;\n    for (let i = 0; i < n; i++) {\n      if (seen[i]) continue;\n      c++;\n      const q = [i]; seen[i] = true;\n      while (q.length) { const u = q.pop(); for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n    }\n    return c;\n  };\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); res.push(countComponents()); }\n  return res;\n}\n",
                ts: "function componentsAfterEdges(n: number, edges: number[][]): number[] {\n  const adj = Array.from({ length: n }, () => []);\n  const res: number[] = [];\n  const countComponents = (): number => {\n    const seen = new Array(n).fill(false);\n    let c = 0;\n    for (let i = 0; i < n; i++) {\n      if (seen[i]) continue;\n      c++;\n      const q = [i]; seen[i] = true;\n      while (q.length) { const u = q.pop(); for (const w of adj[u]) if (!seen[w]) { seen[w] = true; q.push(w); } }\n    }\n    return c;\n  };\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); res.push(countComponents()); }\n  return res;\n}\n",
                commentedCode: {
                    js: `function componentsAfterEdges(n, edges) {
  // Grow the adjacency list as edges arrive.
  const adj = Array.from({ length: n }, () => []);
  const results = [];

  const countComponents = () => {
    const seen = new Array(n).fill(false);
    let count = 0;
    for (let start = 0; start < n; start++) {
      if (seen[start]) continue;
      // Each unvisited start identifies one new connected component.
      count++;
      const stack = [start];
      seen[start] = true;
      while (stack.length) {
        const u = stack.pop();
        // Flood-fill every vertex reachable from this component's start.
        for (const neighbour of adj[u]) {
          if (!seen[neighbour]) {
            seen[neighbour] = true;
            stack.push(neighbour);
          }
        }
      }
    }
    return count;
  };

  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
    // Recount the entire graph after each addition.
    results.push(countComponents());
  }
  return results;
}
`,
                    ts: `function componentsAfterEdges(n: number, edges: number[][]): number[] {
  // Grow the adjacency list as edges arrive.
  const adj: number[][] = Array.from({ length: n }, () => []);
  const results: number[] = [];

  const countComponents = (): number => {
    const seen = new Array(n).fill(false);
    let count = 0;
    for (let start = 0; start < n; start++) {
      if (seen[start]) continue;
      // Each unvisited start identifies one new connected component.
      count++;
      const stack = [start];
      seen[start] = true;
      while (stack.length) {
        const u = stack.pop()!;
        // Flood-fill every vertex reachable from this component's start.
        for (const neighbour of adj[u]) {
          if (!seen[neighbour]) {
            seen[neighbour] = true;
            stack.push(neighbour);
          }
        }
      }
    }
    return count;
  };

  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
    // Recount the entire graph after each addition.
    results.push(countComponents());
  }
  return results;
}
`
                },
                time: "O(e·(n + e))",
                space: "O(n + e)"
            }
        ]
    },
    {
        id: "ex-pattern-indices",
        slug: "all-pattern-indices",
        title: "All Pattern Match Indices",
        difficulty: "medium",
        patternIds: P,
        statement: "Return every start index (ascending) where `pattern` occurs in `text`, counting overlapping occurrences. An empty pattern returns an empty list.",
        examples: [
            {
                input: '"ababab", "ab"',
                output: "[0,2,4]"
            },
            {
                input: '"aaaa", "aa"',
                output: "[0,1,2]"
            },
            {
                input: '"abcabc", "abc"',
                output: "[0,3]"
            }
        ],
        constraints: [
            "0 <= text.length <= 100000",
            "lowercase letters"
        ],
        functionName: "patternIndices",
        starter: {
            js: "function patternIndices(text, pattern) {\n  // Ascending start indices of every (overlapping) match.\n}\n",
            ts: "function patternIndices(text: string, pattern: string): number[] {\n  // Ascending start indices of every (overlapping) match.\n  return [];\n}\n"
        },
        visible: [
            {
                args: [
                    "ababab",
                    "ab"
                ],
                expected: [
                    0,
                    2,
                    4
                ]
            },
            {
                args: [
                    "aaaa",
                    "aa"
                ],
                expected: [
                    0,
                    1,
                    2
                ]
            },
            {
                args: [
                    "abcabc",
                    "abc"
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
                    "abc",
                    "d"
                ],
                expected: []
            },
            {
                args: [
                    "mississippi",
                    "issi"
                ],
                expected: [
                    1,
                    4
                ]
            },
            {
                args: [
                    "xyz",
                    "y"
                ],
                expected: [
                    1
                ]
            },
            {
                args: [
                    "a",
                    "a"
                ],
                expected: [
                    0
                ]
            },
            {
                args: [
                    "aaa",
                    "aa"
                ],
                expected: [
                    0,
                    1
                ]
            },
            {
                args: [
                    "abc",
                    ""
                ],
                expected: []
            }
        ],
        hints: [
            "Run KMP and record the start index each time the pattern completes.",
            "After a match, fall back via failure[k-1] to keep finding overlaps.",
            "start index = i - m + 1 when the pattern pointer reaches m."
        ],
        solutions: [
            {
                label: "KMP collecting matches",
                approach: "Emit i - m + 1 on every full match, then fall back for overlaps.",
                js: "function patternIndices(text, pattern) {\n  const m = pattern.length;\n  if (m === 0) return [];\n  const f = new Array(m).fill(0);\n  let k = 0;\n  for (let i = 1; i < m; i++) {\n    while (k > 0 && pattern[i] !== pattern[k]) k = f[k - 1];\n    if (pattern[i] === pattern[k]) k++;\n    f[i] = k;\n  }\n  k = 0; const res = [];\n  for (let i = 0; i < text.length; i++) {\n    while (k > 0 && text[i] !== pattern[k]) k = f[k - 1];\n    if (text[i] === pattern[k]) k++;\n    if (k === m) { res.push(i - m + 1); k = f[k - 1]; }\n  }\n  return res;\n}\n",
                ts: "function patternIndices(text: string, pattern: string): number[] {\n  const m = pattern.length;\n  if (m === 0) return [];\n  const f = new Array(m).fill(0);\n  let k = 0;\n  for (let i = 1; i < m; i++) {\n    while (k > 0 && pattern[i] !== pattern[k]) k = f[k - 1];\n    if (pattern[i] === pattern[k]) k++;\n    f[i] = k;\n  }\n  k = 0; const res: number[] = [];\n  for (let i = 0; i < text.length; i++) {\n    while (k > 0 && text[i] !== pattern[k]) k = f[k - 1];\n    if (text[i] === pattern[k]) k++;\n    if (k === m) { res.push(i - m + 1); k = f[k - 1]; }\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: `function patternIndices(text, pattern) {
  // The exercise defines an empty pattern as having no reported positions.
  const m = pattern.length;
  if (m === 0) return [];

  // Build KMP's failure table for efficient mismatch fallbacks.
  const f = new Array(m).fill(0);
  let k = 0;
  for (let i = 1; i < m; i++) {
    while (k > 0 && pattern[i] !== pattern[k]) k = f[k - 1];
    if (pattern[i] === pattern[k]) k++;
    f[i] = k;
  }

  k = 0;
  const results = [];
  for (let i = 0; i < text.length; i++) {
    while (k > 0 && text[i] !== pattern[k]) k = f[k - 1];
    if (text[i] === pattern[k]) k++;
    if (k === m) {
      // Convert this match's end into its start index.
      results.push(i - m + 1);
      // Retain the longest border so overlapping matches remain possible.
      k = f[k - 1];
    }
  }
  return results;
}
`,
                    ts: `function patternIndices(text: string, pattern: string): number[] {
  // The exercise defines an empty pattern as having no reported positions.
  const m = pattern.length;
  if (m === 0) return [];

  // Build KMP's failure table for efficient mismatch fallbacks.
  const f = new Array(m).fill(0);
  let k = 0;
  for (let i = 1; i < m; i++) {
    while (k > 0 && pattern[i] !== pattern[k]) k = f[k - 1];
    if (pattern[i] === pattern[k]) k++;
    f[i] = k;
  }

  k = 0;
  const results: number[] = [];
  for (let i = 0; i < text.length; i++) {
    while (k > 0 && text[i] !== pattern[k]) k = f[k - 1];
    if (text[i] === pattern[k]) k++;
    if (k === m) {
      // Convert this match's end into its start index.
      results.push(i - m + 1);
      // Retain the longest border so overlapping matches remain possible.
      k = f[k - 1];
    }
  }
  return results;
}
`
                },
                time: "O(n + m)",
                space: "O(m)"
            },
            {
                label: "Sliding compare",
                approach: "Test every start index directly — an O(n·m) baseline.",
                js: "function patternIndices(text, pattern) {\n  const m = pattern.length;\n  if (m === 0) return [];\n  const res = [];\n  for (let i = 0; i + m <= text.length; i++) {\n    let ok = true;\n    for (let j = 0; j < m; j++) if (text[i + j] !== pattern[j]) { ok = false; break; }\n    if (ok) res.push(i);\n  }\n  return res;\n}\n",
                ts: "function patternIndices(text: string, pattern: string): number[] {\n  const m = pattern.length;\n  if (m === 0) return [];\n  const res: number[] = [];\n  for (let i = 0; i + m <= text.length; i++) {\n    let ok = true;\n    for (let j = 0; j < m; j++) if (text[i + j] !== pattern[j]) { ok = false; break; }\n    if (ok) res.push(i);\n  }\n  return res;\n}\n",
                commentedCode: {
                    js: `function patternIndices(text, pattern) {
  // The exercise defines an empty pattern as having no reported positions.
  const m = pattern.length;
  if (m === 0) return [];
  const results = [];

  // Check every text position at which the full pattern could fit.
  for (let i = 0; i + m <= text.length; i++) {
    let matches = true;
    for (let j = 0; j < m; j++) {
      // Stop comparing this candidate at its first mismatch.
      if (text[i + j] !== pattern[j]) {
        matches = false;
        break;
      }
    }
    if (matches) results.push(i);
  }
  return results;
}
`,
                    ts: `function patternIndices(text: string, pattern: string): number[] {
  // The exercise defines an empty pattern as having no reported positions.
  const m = pattern.length;
  if (m === 0) return [];
  const results: number[] = [];

  // Check every text position at which the full pattern could fit.
  for (let i = 0; i + m <= text.length; i++) {
    let matches = true;
    for (let j = 0; j < m; j++) {
      // Stop comparing this candidate at its first mismatch.
      if (text[i + j] !== pattern[j]) {
        matches = false;
        break;
      }
    }
    if (matches) results.push(i);
  }
  return results;
}
`
                },
                time: "O(n·m)",
                space: "O(1)"
            }
        ]
    }
];
const expertProblems = drafts.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mkProblem"])(S, d));
const expertMcqs = [
    {
        id: "s7-kmp",
        kind: "mcq",
        prompt: "KMP achieves linear-time substring search by:",
        options: [
            "hashing every window",
            "using a failure function so the text pointer never moves backward",
            "sorting the pattern",
            "binary searching the text"
        ],
        answerIndex: 1,
        explanation: "The precomputed failure function tells the pattern how far to fall back on a mismatch, so the text index only ever advances."
    },
    {
        id: "s7-fenwick",
        kind: "mcq",
        prompt: "A Fenwick (binary indexed) tree supports point update and prefix sum in:",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(√n)"
        ],
        answerIndex: 1,
        explanation: "Both operations walk the implicit tree by adding/removing the lowest set bit, taking O(log n) steps."
    }
];
const expertModule = {
    id: "m-expert-algos",
    stageId: S,
    title: "Expert — String & Structure Algorithms",
    kind: "patternModule",
    summary: "The heavyweight toolkit: KMP string matching, Fenwick trees, MSTs, and Dijkstra on a grid — techniques that separate strong candidates.",
    lessonSections: [
        {
            heading: "Linear-time string matching",
            body: `Naive substring search is O(n·m); **KMP** makes it O(n + m) by precomputing a **failure function** — for each prefix, the length of the longest proper prefix that is also a suffix. On a mismatch the pattern pointer jumps back via that table while the text pointer never rewinds.

\`\`\`js
// Failure function (the crux of KMP)
function failure(p) {
  const f = new Array(p.length).fill(0);
  let k = 0;
  for (let i = 1; i < p.length; i++) {
    while (k > 0 && p[i] !== p[k]) k = f[k - 1];
    if (p[i] === p[k]) k++;
    f[i] = k;
  }
  return f;
}
\`\`\`

The same table powers occurrence counting, all-match indices, and the "longest prefix that is a suffix" question — set \`k = f[k-1]\` after a match to catch overlaps.`
        },
        {
            heading: "Structures for range queries & graphs",
            body: `Two more expert tools appear in the drills:

- **Fenwick / Binary Indexed Tree** — O(log n) point updates *and* prefix sums, so mutable range-sum queries are cheap. Index from 1 and move by the lowest set bit (\`i & -i\`).
- **Minimum Spanning Tree** — **Kruskal** sorts edges and adds each with union-find if it joins new components; **Prim** grows a tree from one node. Both give the cheapest way to connect everything.
- **Dijkstra on a grid** — because moves are 4-directional (not just right/down), grid shortest-path is Dijkstra, not a simple DP. Reuse the shared min-heap, encoding each cell as \`r*cols + c\`.

A **sparse table** answers immutable range-minimum queries in O(1) after O(n log n) preprocessing.`
        },
        {
            heading: "Why these matter",
            body: `These are the techniques that show up in the hardest interview rounds and in real systems (text indexing, competitive programming, network design). Each drill ships an **optimal** solution and a plainer **baseline** so you can see the speedup concretely — KMP vs. sliding compare, Fenwick vs. linear sum, sparse table vs. per-query scan.

This module anchors the **Expert** stage. Pair it with the **Mock Interviews** (timed, mixed-pattern) and the **spaced-repetition review queue** to convert breadth into durable recall. Work the drills easy to hard, then take the proficiency test.`
        }
    ],
    guidedExampleProblemId: "ex-kmp-search",
    drillProblemIds: [
        "ex-kmp-search",
        "ex-count-occurrences",
        "ex-longest-prefix-suffix",
        "ex-fenwick-range-sum",
        "ex-mst-cost",
        "ex-min-path-grid"
    ],
    testPoolProblemIds: [
        "ex-longest-repeated-substring",
        "ex-range-min-query",
        "ex-components-after-edges",
        "ex-pattern-indices"
    ],
    complexityQuestionIds: [
        "s7-kmp",
        "s7-fenwick"
    ],
    badgeId: "badge-expert-algos",
    prerequisiteModuleIds: [
        "m-pat-adv-backtrack"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/expert/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerExpert",
    ()=>registerExpert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$expert$2f$algos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/expert/algos.ts [app-client] (ecmascript)");
;
;
function registerExpert() {
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$expert$2f$algos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expertProblems"].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerProblem"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$expert$2f$algos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expertMcqs"].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerComplexityQuestion"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$expert$2f$algos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expertModule"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/registerContent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Central content registration. Importing this module (once, from main.tsx)
 * populates the curriculum registry. Each content phase adds its own
 * `register…()` call here.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$samples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/samples.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/foundations/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage2/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage3$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage3/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage4/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage5/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage6$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stage6/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$expert$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/expert/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/index.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$samples$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSamples"])();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$foundations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFoundations"])();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage2$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerStage2"])();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage3$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerStage3"])();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage4$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerStage4"])();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage5$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerStage5"])();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stage6$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerStage6"])();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$expert$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerExpert"])();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSystemDesign"])();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/samples.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerSamples",
    ()=>registerSamples
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
;
;
/**
 * Phase 3 sample content — one lesson module and three fully-authored problems
 * (easy / medium / hard) used to wire the end-to-end learn → solve loop.
 * All wording is original. Real Foundations content replaces this in Phase 5.
 */ const countEvens = {
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
        {
            input: "[2, 4, 6]",
            output: "3",
            explanation: "All three counts are even."
        },
        {
            input: "[1, 3, 5]",
            output: "0",
            explanation: "No even counts."
        },
        {
            input: "[0, 7, 8]",
            output: "2",
            explanation: "0 and 8 are even."
        }
    ],
    constraints: [
        "0 <= numbers.length <= 10,000",
        "-1,000,000 <= numbers[i] <= 1,000,000"
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
`
    },
    functionName: "countEvens",
    judgeType: "returnValue",
    visibleTests: [
        {
            args: [
                [
                    2,
                    4,
                    6
                ]
            ],
            expected: 3,
            label: "all even"
        },
        {
            args: [
                [
                    1,
                    3,
                    5
                ]
            ],
            expected: 0,
            label: "none even"
        },
        {
            args: [
                [
                    0,
                    7,
                    8
                ]
            ],
            expected: 2,
            label: "zero counts"
        }
    ],
    hiddenTests: [
        {
            args: [
                []
            ],
            expected: 0,
            label: "empty"
        },
        {
            args: [
                [
                    2
                ]
            ],
            expected: 1,
            label: "single even"
        },
        {
            args: [
                [
                    3
                ]
            ],
            expected: 0,
            label: "single odd"
        },
        {
            args: [
                [
                    -2,
                    -4,
                    3
                ]
            ],
            expected: 2,
            label: "negatives"
        },
        {
            args: [
                [
                    1000000,
                    1
                ]
            ],
            expected: 1,
            label: "large value"
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
            expected: 3,
            label: "mixed"
        }
    ],
    hints: [
        "You only need to look at each number once — what test tells you a number is even?",
        "A number is even when the remainder after dividing by 2 is zero: `n % 2 === 0`. Keep a running count.",
        "Set count = 0. For each n in numbers, if n % 2 === 0 then count += 1. Return count."
    ],
    walkthrough: [
        {
            title: "Choose the condition to count",
            body: "A value is even exactly when dividing it by `2` leaves a remainder of `0`, so the useful test is `n % 2 === 0`."
        },
        {
            title: "Keep one running total",
            body: "Start a counter at `0`. Inspect each value once and increment the counter only when that value passes the evenness test."
        },
        {
            title: "Check the boundary cases",
            body: "The same rule handles negative values and `0`. An empty input performs no increments, so it correctly returns `0` without special handling."
        },
        {
            title: "Return after the scan",
            body: "Once every value has been considered, the counter is the number of even entries. This uses constant extra space and linear time."
        }
    ],
    solutions: [
        {
            label: "Single pass",
            approach: "Walk the list once, incrementing a counter whenever the current value is divisible by 2.",
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
`
            },
            commentedCode: {
                js: `function countEvens(numbers) {
  // No even values have been found before the scan begins.
  let count = 0;

  // Inspect every value exactly once.
  for (const n of numbers) {
    // A remainder of zero means the value is divisible by two.
    if (n % 2 === 0) {
      // Record this qualifying value in the running total.
      count++;
    }
  }

  // The total now includes every even value in the input.
  return count;
}
`,
                ts: `function countEvens(numbers: number[]): number {
  // No even values have been found before the scan begins.
  let count = 0;

  // Inspect every value exactly once.
  for (const n of numbers) {
    // A remainder of zero means the value is divisible by two.
    if (n % 2 === 0) {
      // Record this qualifying value in the running total.
      count++;
    }
  }

  // The total now includes every even value in the input.
  return count;
}
`
            },
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        },
        {
            label: "Filter and count",
            approach: "Keep only the even values with a filter, then read off the length. Clean, though it allocates a temporary array.",
            code: {
                js: `function countEvens(numbers) {
  return numbers.filter((n) => n % 2 === 0).length;
}
`,
                ts: `function countEvens(numbers: number[]): number {
  return numbers.filter((n) => n % 2 === 0).length;
}
`
            },
            commentedCode: {
                js: `function countEvens(numbers) {
  // Filter tests each value and keeps only those divisible by two.
  // The filtered array's length is therefore the number of even values.
  return numbers.filter((n) => n % 2 === 0).length;
}
`,
                ts: `function countEvens(numbers: number[]): number {
  // Filter tests each value and keeps only those divisible by two.
  // The filtered array's length is therefore the number of even values.
  return numbers.filter((n) => n % 2 === 0).length;
}
`
            },
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)"
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].easy
};
const pivotIndex = {
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
            explanation: "Left of index 3 is 1+7+3 = 11; right is 5+6 = 11."
        },
        {
            input: "[1, 2, 3]",
            output: "-1",
            explanation: "No index balances the two sides."
        },
        {
            input: "[2, 1, -1]",
            output: "0",
            explanation: "Left side is empty (0); right side is 1 + (-1) = 0."
        }
    ],
    constraints: [
        "0 <= values.length <= 10,000",
        "-10,000 <= values[i] <= 10,000",
        "Return the smallest valid index when several would work."
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
`
    },
    functionName: "pivotIndex",
    judgeType: "returnValue",
    visibleTests: [
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
            expected: 3,
            label: "classic"
        },
        {
            args: [
                [
                    1,
                    2,
                    3
                ]
            ],
            expected: -1,
            label: "none"
        },
        {
            args: [
                [
                    2,
                    1,
                    -1
                ]
            ],
            expected: 0,
            label: "empty left"
        }
    ],
    hiddenTests: [
        {
            args: [
                []
            ],
            expected: -1,
            label: "empty"
        },
        {
            args: [
                [
                    5
                ]
            ],
            expected: 0,
            label: "single element"
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
            expected: 0,
            label: "all zeros → leftmost"
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
            expected: 2,
            label: "negatives"
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
            expected: 3,
            label: "symmetric"
        },
        {
            args: [
                [
                    8,
                    8
                ]
            ],
            expected: -1,
            label: "two elements, no pivot"
        }
    ],
    hints: [
        "A brute-force check recomputes both sides for every index. Can you avoid recomputing the left sum from scratch each time?",
        "Compute the total once. As you move the pivot rightward, the right side is `total - left - values[i]`. Keep `left` updated as you go.",
        "total = sum(values); left = 0; for i in range: right = total - left - values[i]; if left === right return i; left += values[i]; return -1."
    ],
    walkthrough: [
        {
            title: "Write the balance equation",
            body: "At index `i`, the pivot value belongs to neither side. If `left` is the sum before `i`, then the sum after it is `total - left - values[i]`."
        },
        {
            title: "Compute shared work once",
            body: "Calculate the array's total before checking candidates. That lets every right-side sum come from the balance equation instead of another nested scan."
        },
        {
            title: "Sweep candidates from left to right",
            body: "Begin with `left = 0`. For each index, derive `right`, compare the two sides, and only then add the current value to `left` for the next candidate."
        },
        {
            title: "Preserve the leftmost rule",
            body: "Return immediately on the first equality because the sweep visits indices in ascending order. If none balance, return `-1`."
        }
    ],
    solutions: [
        {
            label: "Brute force",
            approach: "For each candidate index, sum everything to its left and everything to its right and compare. Simple but quadratic.",
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
`
            },
            commentedCode: {
                js: `function pivotIndex(values) {
  // Try each index in ascending order so the first match is leftmost.
  for (let i = 0; i < values.length; i++) {
    // Rebuild the two side sums for this candidate pivot.
    let left = 0;
    let right = 0;

    // Sum every value strictly before the pivot.
    for (let j = 0; j < i; j++) {
      left += values[j];
    }
    // Sum every value strictly after the pivot.
    for (let j = i + 1; j < values.length; j++) {
      right += values[j];
    }

    // Equal side sums make this index a valid balancing point.
    if (left === right) {
      return i;
    }
  }

  // No index balanced the ledger.
  return -1;
}
`,
                ts: `function pivotIndex(values: number[]): number {
  // Try each index in ascending order so the first match is leftmost.
  for (let i = 0; i < values.length; i++) {
    // Rebuild the two side sums for this candidate pivot.
    let left = 0;
    let right = 0;

    // Sum every value strictly before the pivot.
    for (let j = 0; j < i; j++) {
      left += values[j];
    }
    // Sum every value strictly after the pivot.
    for (let j = i + 1; j < values.length; j++) {
      right += values[j];
    }

    // Equal side sums make this index a valid balancing point.
    if (left === right) {
      return i;
    }
  }

  // No index balanced the ledger.
  return -1;
}
`
            },
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)"
        },
        {
            label: "Running prefix sum",
            approach: "Take the grand total once. Sweep left to right maintaining the left-hand sum; the right-hand sum is whatever remains after removing the left sum and the pivot value.",
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
`
            },
            commentedCode: {
                js: `function pivotIndex(values) {
  // Compute the sum of the whole array once.
  let total = 0;
  for (const value of values) {
    total += value;
  }

  // Nothing lies to the left of the first candidate.
  let left = 0;
  // Visit candidates in order to guarantee the leftmost answer.
  for (let i = 0; i < values.length; i++) {
    // Remove the left side and pivot value from the total to get the right side.
    const right = total - left - values[i];
    if (left === right) {
      return i;
    }

    // The current pivot joins the left side of the next candidate.
    left += values[i];
  }

  // Every candidate was unbalanced.
  return -1;
}
`,
                ts: `function pivotIndex(values: number[]): number {
  // Compute the sum of the whole array once.
  let total = 0;
  for (const value of values) {
    total += value;
  }

  // Nothing lies to the left of the first candidate.
  let left = 0;
  // Visit candidates in order to guarantee the leftmost answer.
  for (let i = 0; i < values.length; i++) {
    // Remove the left side and pivot value from the total to get the right side.
    const right = total - left - values[i];
    if (left === right) {
      return i;
    }

    // The current pivot joins the left side of the next candidate.
    left += values[i];
  }

  // Every candidate was unbalanced.
  return -1;
}
`
            },
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].medium
};
const mergeWindows = {
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
            explanation: "[1,3] and [2,6] overlap and merge into [1,6]."
        },
        {
            input: "[[1, 4], [4, 5]]",
            output: "[[1, 5]]",
            explanation: "Touching endpoints merge."
        },
        {
            input: "[]",
            output: "[]",
            explanation: "Nothing to merge."
        }
    ],
    constraints: [
        "0 <= windows.length <= 10,000",
        "each window is [start, end] with start <= end",
        "-1,000,000 <= start, end <= 1,000,000",
        "Windows may arrive in any order."
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
`
    },
    functionName: "mergeWindows",
    judgeType: "returnValue",
    visibleTests: [
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
            ],
            label: "classic"
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
            ],
            label: "touching"
        },
        {
            args: [
                []
            ],
            expected: [],
            label: "empty"
        }
    ],
    hiddenTests: [
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
            ],
            label: "same end, earlier start"
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
            ],
            label: "fully nested"
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
            ],
            label: "disjoint"
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
            ],
            label: "unsorted input"
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
            ],
            label: "one swallows all"
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
            ],
            label: "shuffled groups"
        }
    ],
    hints: [
        "If the windows arrived sorted by start time, deciding whether the next window extends the current group would be a single comparison. What should you do first?",
        "Sort by start. Walk the sorted list keeping a 'current' merged window; if the next start is <= current end, extend the current end, otherwise push a new window.",
        "sorted = windows sorted by start; result = []; for [s, e] in sorted: if result not empty and s <= result.last.end: result.last.end = max(end, e); else push [s, e]; return result."
    ],
    walkthrough: [
        {
            title: "Put windows in a useful order",
            body: "Sort a copy by start time. After sorting, any window that can overlap the current merged group appears before the first window that must begin a new group."
        },
        {
            title: "Maintain the merged prefix",
            body: "Keep an output array whose last entry represents every overlapping window seen in the current group. Earlier output entries are already final and disjoint."
        },
        {
            title: "Merge or start a group",
            body: "If the next start is at most the last merged end, extend that end to the larger endpoint. Otherwise, append a new `[start, end]` group."
        },
        {
            title: "Return the ordered groups",
            body: "Once the sweep ends, every source window is covered and no two output groups overlap. Copying before sorting also leaves the caller's input order untouched."
        }
    ],
    solutions: [
        {
            label: "Repeated pairwise merge (brute force)",
            approach: "Keep merging any two windows that overlap until a full pass finds no more overlaps. Correct, but each merge may rescan the list.",
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
`
            },
            commentedCode: {
                js: `function mergeWindows(windows) {
  // Copy every interval so merging never mutates the caller's nested arrays.
  const result = windows.map((window) => [window[0], window[1]]);
  // Begin with a pass still required.
  let changed = true;

  // Repeat until a complete pass finds no overlapping pair.
  while (changed) {
    changed = false;
    // Choose the first interval in a possible pair.
    for (let i = 0; i < result.length && !changed; i++) {
      // Compare it with every later interval.
      for (let j = i + 1; j < result.length; j++) {
        const a = result[i];
        const b = result[j];

        // Two closed intervals overlap when neither lies completely outside the other.
        if (a[0] <= b[1] && b[0] <= a[1]) {
          // Expand a to cover the full union of both intervals.
          a[0] = Math.min(a[0], b[0]);
          a[1] = Math.max(a[1], b[1]);
          // Remove b because its coverage now belongs to a.
          result.splice(j, 1);
          // Restart scanning because the expanded interval may unlock another merge.
          changed = true;
          break;
        }
      }
    }
  }

  // Present the final disjoint intervals in ascending start order.
  return result.sort((a, b) => a[0] - b[0]);
}
`,
                ts: `function mergeWindows(windows: number[][]): number[][] {
  // Copy every interval so merging never mutates the caller's nested arrays.
  const result = windows.map((window) => [window[0], window[1]]);
  // Begin with a pass still required.
  let changed = true;

  // Repeat until a complete pass finds no overlapping pair.
  while (changed) {
    changed = false;
    // Choose the first interval in a possible pair.
    for (let i = 0; i < result.length && !changed; i++) {
      // Compare it with every later interval.
      for (let j = i + 1; j < result.length; j++) {
        const a = result[i];
        const b = result[j];

        // Two closed intervals overlap when neither lies completely outside the other.
        if (a[0] <= b[1] && b[0] <= a[1]) {
          // Expand a to cover the full union of both intervals.
          a[0] = Math.min(a[0], b[0]);
          a[1] = Math.max(a[1], b[1]);
          // Remove b because its coverage now belongs to a.
          result.splice(j, 1);
          // Restart scanning because the expanded interval may unlock another merge.
          changed = true;
          break;
        }
      }
    }
  }

  // Present the final disjoint intervals in ascending start order.
  return result.sort((a, b) => a[0] - b[0]);
}
`
            },
            timeComplexity: "O(n²)",
            spaceComplexity: "O(n)"
        },
        {
            label: "Sort then sweep",
            approach: "Sort once by start time, then make a single pass extending the current window whenever the next one overlaps it.",
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
`
            },
            commentedCode: {
                js: `function mergeWindows(windows) {
  // Sort a shallow copy so the caller's outer array keeps its original order.
  const sorted = [...windows].sort((a, b) => a[0] - b[0]);
  // Build disjoint merged groups from left to right.
  const merged = [];

  for (const [start, end] of sorted) {
    // Only the last group can overlap the next start in sorted order.
    const last = merged[merged.length - 1];
    if (last && start <= last[1]) {
      // Overlap (including touching endpoints): extend the group if necessary.
      last[1] = Math.max(last[1], end);
    } else {
      // No overlap means this interval begins a new independent group.
      merged.push([start, end]);
    }
  }

  // The groups are already sorted and mutually non-overlapping.
  return merged;
}
`,
                ts: `function mergeWindows(windows: number[][]): number[][] {
  // Sort a shallow copy so the caller's outer array keeps its original order.
  const sorted = [...windows].sort((a, b) => a[0] - b[0]);
  // Build disjoint merged groups from left to right.
  const merged: number[][] = [];

  for (const [start, end] of sorted) {
    // Only the last group can overlap the next start in sorted order.
    const last = merged[merged.length - 1];
    if (last && start <= last[1]) {
      // Overlap (including touching endpoints): extend the group if necessary.
      last[1] = Math.max(last[1], end);
    } else {
      // No overlap means this interval begins a new independent group.
      merged.push([start, end]);
    }
  }

  // The groups are already sorted and mutually non-overlapping.
  return merged;
}
`
            },
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(n)"
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].hard
};
const sampleModule = {
    id: "m-sample-warmup",
    stageId: "dsa-s1",
    title: "Warm-Up: Reading a Problem",
    kind: "lesson",
    summary: "A gentle first loop through AlgoForge: read a prompt, run code in the browser, and solve three problems from easy to hard.",
    lessonSections: [
        {
            heading: "How a problem is structured",
            body: `Every AlgoForge problem gives you the same things: a short **story**, a couple of worked **examples**, the **constraints** you can rely on, and a function to implement. Your job is to make the function agree with the examples — and with the hidden cases behind the **Submit** button.

Read the examples first. They pin down the exact input and output shapes far more precisely than prose ever can.`
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

The same runner powers the **Run** and **Submit** buttons in every problem, so what you see here is exactly what grades your solutions.`
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

When you are ready, work the three drills below in order. They climb from a one-liner to a genuine interview-grade question.`
        }
    ],
    guidedExampleProblemId: countEvens.id,
    drillProblemIds: [
        countEvens.id,
        pivotIndex.id,
        mergeWindows.id
    ],
    testPoolProblemIds: [],
    prerequisiteModuleIds: []
};
function registerSamples() {
    [
        countEvens,
        pivotIndex,
        mergeWindows
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerProblem"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModule"])(sampleModule);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/shared/heap.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Canonical binary-heap source, shared as strings so later stages (Top-K,
 * Two Heaps, K-Way Merge, Expert) can prepend a working heap to a solution's
 * runnable code. This is the "reusable asset" the Heap build lab produces.
 *
 * They are plain JavaScript (valid TypeScript after transpilation), so a single
 * source works whether the learner's solution is authored in JS or TS.
 */ __turbopack_context__.s([
    "MAX_HEAP_SOURCE",
    ()=>MAX_HEAP_SOURCE,
    "MIN_HEAP_SOURCE",
    ()=>MIN_HEAP_SOURCE
]);
const MIN_HEAP_SOURCE = `class MinHeap {
  constructor() { this.data = []; }
  size() { return this.data.length; }
  peek() { return this.data[0]; }
  push(v) { this.data.push(v); this._up(this.data.length - 1); return this; }
  pop() {
    const n = this.data.length;
    if (n === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop();
    if (n > 1) { this.data[0] = last; this._down(0); }
    return top;
  }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.data[p] <= this.data[i]) break;
      const t = this.data[p]; this.data[p] = this.data[i]; this.data[i] = t;
      i = p;
    }
  }
  _down(i) {
    const n = this.data.length;
    while (true) {
      let s = i; const l = 2 * i + 1; const r = 2 * i + 2;
      if (l < n && this.data[l] < this.data[s]) s = l;
      if (r < n && this.data[r] < this.data[s]) s = r;
      if (s === i) break;
      const t = this.data[s]; this.data[s] = this.data[i]; this.data[i] = t;
      i = s;
    }
  }
}`;
const MAX_HEAP_SOURCE = `class MaxHeap {
  constructor() { this.data = []; }
  size() { return this.data.length; }
  peek() { return this.data[0]; }
  push(v) { this.data.push(v); this._up(this.data.length - 1); return this; }
  pop() {
    const n = this.data.length;
    if (n === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop();
    if (n > 1) { this.data[0] = last; this._down(0); }
    return top;
  }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.data[p] >= this.data[i]) break;
      const t = this.data[p]; this.data[p] = this.data[i]; this.data[i] = t;
      i = p;
    }
  }
  _down(i) {
    const n = this.data.length;
    while (true) {
      let s = i; const l = 2 * i + 1; const r = 2 * i + 2;
      if (l < n && this.data[l] > this.data[s]) s = l;
      if (r < n && this.data[r] > this.data[s]) s = r;
      if (s === i) break;
      const t = this.data[s]; this.data[s] = this.data[i]; this.data[i] = t;
      i = s;
    }
  }
}`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_data_0r7s0wj._.js.map