(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "DifficultyBadge",
    ()=>DifficultyBadge,
    "EmptyState",
    ()=>EmptyState,
    "PageHeader",
    ()=>PageHeader,
    "PrereqChip",
    ()=>PrereqChip,
    "ProgressBar",
    ()=>ProgressBar,
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
;
function PageHeader({ title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold tracking-tight",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-slate-500 dark:text-slate-400",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = PageHeader;
function Card({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c1 = Card;
function EmptyState({ title, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center dark:border-slate-700 dark:bg-slate-900/40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-slate-600 dark:text-slate-300",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-slate-400",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 50,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c2 = EmptyState;
const DIFF_STYLES = {
    easy: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    medium: "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    hard: "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300"
};
function DifficultyBadge({ difficulty }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize", DIFF_STYLES[difficulty] ?? "bg-slate-100 text-slate-600"),
        children: difficulty
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c3 = DifficultyBadge;
function ProgressBar({ value, max, className }) {
    const pct = max > 0 ? Math.min(100, Math.round(value / max * 100)) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800", className),
        role: "progressbar",
        "aria-valuenow": value,
        "aria-valuemin": 0,
        "aria-valuemax": max,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-full bg-forge-500 transition-[width] duration-300",
            style: {
                width: `${pct}%`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c4 = ProgressBar;
function Spinner({ label = "Loading…" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center py-20 text-sm text-slate-400",
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-forge-500"
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_c5 = Spinner;
function PrereqChip({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400",
        children: [
            "needs: ",
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c6 = PrereqChip;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "PageHeader");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "EmptyState");
__turbopack_context__.k.register(_c3, "DifficultyBadge");
__turbopack_context__.k.register(_c4, "ProgressBar");
__turbopack_context__.k.register(_c5, "Spinner");
__turbopack_context__.k.register(_c6, "PrereqChip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
/** slug -> id index, kept in step with `problems` so slug lookups are O(1). */ const problemIdBySlug = {};
function registerProblem(problem) {
    const slugOwnerId = problemIdBySlug[problem.slug];
    if (slugOwnerId && slugOwnerId !== problem.id) {
        throw new Error(`Duplicate problem slug "${problem.slug}" for "${slugOwnerId}" and "${problem.id}".`);
    }
    problems[problem.id] = problem;
    problemIdBySlug[problem.slug] = problem.id;
}
function registerModule(module) {
    const existing = modules[module.id];
    if (existing && existing !== module) {
        throw new Error(`Duplicate module id "${module.id}".`);
    }
    modules[module.id] = module;
    const stage = getStage(module.stageId);
    if (stage && !stage.moduleIds.includes(module.id)) {
        stage.moduleIds.push(module.id);
    }
}
function registerCaseStudy(study) {
    const existing = caseStudies[study.id];
    if (existing && existing !== study) {
        throw new Error(`Duplicate case study id "${study.id}".`);
    }
    caseStudies[study.id] = study;
}
function registerComplexityQuestion(question) {
    const existing = complexityQuestions[question.id];
    if (existing && existing !== question) {
        throw new Error(`Duplicate complexity question id "${question.id}".`);
    }
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
    const id = problemIdBySlug[slug];
    return id ? problems[id] : undefined;
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
"[project]/src/data/tracks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Challenge Tracks — curated, ordered collections built ENTIRELY from the
 * existing tagged problem registry (no new problem statements). A single
 * problem can belong to several tracks; solving it anywhere (its normal
 * /problem/:slug page) updates progress, which every track reflects.
 *
 * Selection is fully deterministic: within a category we take a pattern's
 * problems sorted by (difficulty, slug) and slice a fixed count, so the same
 * tracks are produced on every load and stay valid as long as the content
 * exists. Tracks are built lazily and memoized, so this module can be imported
 * before `registerContent()` has populated the curriculum.
 */ __turbopack_context__.s([
    "allTracks",
    ()=>allTracks,
    "dailyProblemIdForDate",
    ()=>dailyProblemIdForDate,
    "getTrack",
    ()=>getTrack,
    "todayISO",
    ()=>todayISO,
    "trackSolvedCount",
    ()=>trackSolvedCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
;
const DIFF_RANK = {
    easy: 0,
    medium: 1,
    hard: 2
};
/** Problems carrying a given pattern id, deterministically ordered. */ function patternPool(patternId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allProblems"])().filter((p)=>p.patternIds.includes(patternId)).sort((a, b)=>DIFF_RANK[a.difficulty] - DIFF_RANK[b.difficulty] || (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
}
/** Take the first `count` problem ids from a pattern's ordered pool. */ function pick(patternId, count) {
    return patternPool(patternId).slice(0, count).map((p)=>p.id);
}
/**
 * The 15 core interview categories (5 problems each = 75). These form Blind 75
 * and Ordered 75; Extended 150 adds the remaining patterns on top.
 */ const CORE_CATEGORIES = [
    {
        label: "Arrays & Hashing",
        pattern: "frequency-counter",
        count: 5
    },
    {
        label: "Two Pointers",
        pattern: "two-pointers",
        count: 5
    },
    {
        label: "Sliding Window",
        pattern: "sliding-window",
        count: 5
    },
    {
        label: "Stack",
        pattern: "monotonic-stack",
        count: 5
    },
    {
        label: "Binary Search",
        pattern: "modified-binary-search",
        count: 5
    },
    {
        label: "Linked List",
        pattern: "linked-list-reversal",
        count: 5
    },
    {
        label: "Trees (DFS)",
        pattern: "tree-dfs",
        count: 5
    },
    {
        label: "Trees (BFS)",
        pattern: "tree-bfs",
        count: 5
    },
    {
        label: "Tries",
        pattern: "trie",
        count: 5
    },
    {
        label: "Heap / Top-K",
        pattern: "top-k-elements",
        count: 5
    },
    {
        label: "Backtracking",
        pattern: "subsets-backtracking",
        count: 5
    },
    {
        label: "Graphs",
        pattern: "graph-traversal",
        count: 5
    },
    {
        label: "Intervals",
        pattern: "merge-intervals",
        count: 5
    },
    {
        label: "Dynamic Programming",
        pattern: "dp-1d",
        count: 5
    },
    {
        label: "Greedy",
        pattern: "greedy",
        count: 5
    }
];
/** Extra categories layered on to reach Extended 150 (another 75). */ const EXTENDED_EXTRA = [
    {
        label: "Prefix Sum",
        pattern: "prefix-sum",
        count: 5
    },
    {
        label: "Fast & Slow Pointers",
        pattern: "fast-slow-pointers",
        count: 5
    },
    {
        label: "Cyclic Sort",
        pattern: "cyclic-sort",
        count: 5
    },
    {
        label: "Two Heaps",
        pattern: "two-heaps",
        count: 5
    },
    {
        label: "K-Way Merge",
        pattern: "k-way-merge",
        count: 5
    },
    {
        label: "DP — Knapsack",
        pattern: "dp-knapsack",
        count: 5
    },
    {
        label: "DP — Grids",
        pattern: "dp-grid",
        count: 5
    },
    {
        label: "DP — Strings",
        pattern: "dp-string",
        count: 5
    },
    {
        label: "DP — State & Intervals",
        pattern: "dp-state",
        count: 5
    },
    {
        label: "Topological Sort",
        pattern: "toposort",
        count: 5
    },
    {
        label: "Union-Find",
        pattern: "union-find",
        count: 5
    },
    {
        label: "Shortest Paths",
        pattern: "shortest-path",
        count: 5
    },
    {
        label: "Monotonic Deque",
        pattern: "mono-deque",
        count: 5
    },
    {
        label: "Bit Manipulation",
        pattern: "bit",
        count: 5
    },
    {
        label: "Advanced Backtracking",
        pattern: "adv-backtrack",
        count: 5
    }
];
function groupsFromSpecs(specs) {
    return specs.map((s)=>({
            label: s.label,
            problemIds: pick(s.pattern, s.count)
        })).filter((g)=>g.problemIds.length > 0);
}
function flatten(groups) {
    const seen = new Set();
    const out = [];
    for (const g of groups)for (const id of g.problemIds)if (!seen.has(id)) {
        seen.add(id);
        out.push(id);
    }
    return out;
}
/** Stage order for sequencing (dsa-s1..s6 -> 1..6). */ function stageOrder(problemId) {
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblem"])(problemId);
    if (!p) return 99;
    const m = /-s(\d+)$/.exec(p.stageId);
    return m && m[1] ? Number(m[1]) : 99;
}
/** Sequence the core 75 by (stage, difficulty, slug) and chunk into weeks. */ function sequencedWeeks(problemIds, perWeek) {
    const ordered = [
        ...problemIds
    ].sort((a, b)=>{
        const pa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblem"])(a);
        const pb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblem"])(b);
        if (!pa || !pb) return 0;
        return stageOrder(a) - stageOrder(b) || DIFF_RANK[pa.difficulty] - DIFF_RANK[pb.difficulty] || (pa.slug < pb.slug ? -1 : pa.slug > pb.slug ? 1 : 0);
    });
    const weeks = [];
    for(let i = 0; i < ordered.length; i += perWeek){
        weeks.push({
            label: `Week ${weeks.length + 1}`,
            problemIds: ordered.slice(i, i + perWeek)
        });
    }
    return weeks;
}
let cache = null;
function build() {
    if (cache) return cache;
    const coreGroups = groupsFromSpecs(CORE_CATEGORIES);
    const coreFlat = flatten(coreGroups);
    const blind75 = {
        id: "blind75",
        title: "Blind 75",
        blurb: "The essential 75, grouped by the interview categories that matter most. A focused foundation.",
        kind: "categorized",
        problemIds: coreFlat,
        groups: coreGroups,
        target: 75
    };
    const ordered75 = {
        id: "ordered75",
        title: "Ordered 75 Plan",
        blurb: "The same 75, resequenced into a week-by-week plan from easier fundamentals toward the harder patterns.",
        kind: "sequenced",
        problemIds: coreFlat,
        groups: sequencedWeeks(coreFlat, 8),
        target: coreFlat.length
    };
    const extGroups = [
        ...coreGroups,
        ...groupsFromSpecs(EXTENDED_EXTRA)
    ];
    const extFlat = flatten(extGroups);
    const extended150 = {
        id: "extended150",
        title: "Extended 150",
        blurb: "A broader run across every pattern in the curriculum — the Blind 75 plus 75 more for deeper coverage.",
        kind: "categorized",
        problemIds: extFlat,
        groups: extGroups,
        target: 150
    };
    const daily = {
        id: "daily",
        title: "Daily Challenge",
        blurb: "One deterministic problem each day, drawn from the Extended 150 pool. Come back daily to keep your streak.",
        kind: "daily",
        problemIds: extFlat,
        groups: [],
        target: 0
    };
    cache = {
        blind75,
        ordered75,
        extended150,
        daily
    };
    return cache;
}
function allTracks() {
    const t = build();
    return [
        t.blind75,
        t.ordered75,
        t.extended150,
        t.daily
    ];
}
function getTrack(id) {
    const t = build();
    return t[id];
}
function dailyProblemIdForDate(dateISO) {
    const pool = build().daily.problemIds;
    if (pool.length === 0) return undefined;
    let h = 2166136261;
    for(let i = 0; i < dateISO.length; i++){
        h ^= dateISO.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    const idx = Math.abs(h) % pool.length;
    return pool[idx];
}
function todayISO() {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mm}-${dd}`;
}
function trackSolvedCount(track, isSolved) {
    let n = 0;
    for (const id of track.problemIds)if (isSolved(id)) n++;
    return n;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Tiny className joiner — no runtime deps. */ __turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...parts) {
    return parts.filter(Boolean).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BADGE_THRESHOLDS",
    ()=>BADGE_THRESHOLDS,
    "CODE_TIMEOUT_MS",
    ()=>CODE_TIMEOUT_MS,
    "DEFAULT_TEST",
    ()=>DEFAULT_TEST,
    "RANKS",
    ()=>RANKS,
    "REVIEW_INTERVALS_DAYS",
    ()=>REVIEW_INTERVALS_DAYS,
    "SCHEMA_VERSION",
    ()=>SCHEMA_VERSION,
    "STREAK_MULTIPLIER",
    ()=>STREAK_MULTIPLIER,
    "TIER_BONUS",
    ()=>TIER_BONUS,
    "TIER_RANK",
    ()=>TIER_RANK,
    "XP",
    ()=>XP,
    "nextRank",
    ()=>nextRank,
    "rankForXp",
    ()=>rankForXp,
    "streakMultiplier",
    ()=>streakMultiplier,
    "tierBonus",
    ()=>tierBonus,
    "tierForScore",
    ()=>tierForScore,
    "tierRank",
    ()=>tierRank
]);
const XP = {
    lesson: 15,
    easy: 10,
    medium: 25,
    hard: 50,
    buildLab: 40,
    estimationDrillSet: 15,
    caseStudy: 60,
    /** Maximum bonus achievable on a module/certification test. */ testBonusMax: 100
};
const RANKS = [
    {
        rank: "Novice",
        minXp: 0
    },
    {
        rank: "Apprentice",
        minXp: 500
    },
    {
        rank: "Practitioner",
        minXp: 1500
    },
    {
        rank: "Specialist",
        minXp: 3500
    },
    {
        rank: "Expert",
        minXp: 7000
    },
    {
        rank: "Master",
        minXp: 12000
    }
];
const STREAK_MULTIPLIER = {
    min: 1.1,
    max: 1.5,
    /** Added per consecutive active day beyond the first. */ perDayStep: 0.05
};
const BADGE_THRESHOLDS = [
    {
        tier: "platinum",
        minScore: 100
    },
    {
        tier: "gold",
        minScore: 90
    },
    {
        tier: "silver",
        minScore: 75
    },
    {
        tier: "bronze",
        minScore: 60
    }
];
const TIER_RANK = {
    bronze: 1,
    silver: 2,
    gold: 3,
    platinum: 4
};
const TIER_BONUS = {
    bronze: 40,
    silver: 60,
    gold: 80,
    platinum: 100
};
function tierRank(tier) {
    return tier ? TIER_RANK[tier] : 0;
}
function tierBonus(tier) {
    return tier ? TIER_BONUS[tier] : 0;
}
const DEFAULT_TEST = {
    drawRules: {
        easy: 1,
        medium: 2,
        hard: 1
    },
    timeLimitMinutes: 50,
    parTimeMinutes: 35,
    complexityMcqCount: 2,
    /** Cooldown before a retake is allowed. */ retakeCooldownHours: 12
};
const CODE_TIMEOUT_MS = 4000;
const REVIEW_INTERVALS_DAYS = [
    3,
    7,
    21
];
const SCHEMA_VERSION = 3;
function rankForXp(xp) {
    let current = "Novice";
    for (const tier of RANKS){
        if (xp >= tier.minXp) current = tier.rank;
    }
    return current;
}
function nextRank(xp) {
    for (const tier of RANKS){
        if (xp < tier.minXp) return tier;
    }
    return null;
}
function tierForScore(scorePercent) {
    for (const t of BADGE_THRESHOLDS){
        if (scorePercent >= t.minScore) return t.tier;
    }
    return null;
}
function streakMultiplier(currentStreak) {
    const days = Math.max(1, currentStreak);
    const raw = STREAK_MULTIPLIER.min + (days - 1) * STREAK_MULTIPLIER.perDayStep;
    return Math.min(STREAK_MULTIPLIER.max, Math.max(STREAK_MULTIPLIER.min, raw));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/insights.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recentActivity",
    ()=>recentActivity,
    "solvedCount",
    ()=>solvedCount,
    "stageCompletion",
    ()=>stageCompletion,
    "weakestPatterns",
    ()=>weakestPatterns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
;
function stageCompletion(stage, progress) {
    const mods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modulesForStage"])(stage.id);
    let total = 0;
    let completed = 0;
    for (const m of mods){
        // A lesson/module counts as one unit; each drill problem counts as one.
        total += 1;
        if (progress.lessonCompletions[m.id]) completed += 1;
        for (const pid of m.drillProblemIds){
            total += 1;
            if (progress.problemStats[pid]?.status === "solved") completed += 1;
        }
    }
    const percent = total === 0 ? 0 : Math.round(completed / total * 100);
    return {
        stage,
        completed,
        total,
        percent
    };
}
function weakestPatterns(progress, limit = 3) {
    const agg = new Map();
    for (const problem of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allProblems"])()){
        const stat = progress.problemStats[problem.id];
        if (!stat || stat.status === "unattempted") continue;
        for (const patternId of problem.patternIds){
            const entry = agg.get(patternId) ?? {
                attempted: 0,
                solved: 0
            };
            entry.attempted += 1;
            if (stat.status === "solved") entry.solved += 1;
            agg.set(patternId, entry);
        }
    }
    const insights = [];
    for (const [patternId, { attempted, solved }] of agg){
        insights.push({
            patternId,
            attempted,
            solved,
            solveRate: solved / attempted
        });
    }
    insights.sort((a, b)=>a.solveRate - b.solveRate || b.attempted - a.attempted);
    return insights.slice(0, limit);
}
function recentActivity(progress, days = 14) {
    const out = [];
    const now = new Date();
    for(let i = days - 1; i >= 0; i--){
        const d = new Date(now.getTime() - i * 86_400_000);
        const date = d.toISOString().slice(0, 10);
        const entry = progress.activity[date] ?? {
            xp: 0,
            solved: 0,
            lessons: 0
        };
        out.push({
            date,
            label: `${d.getMonth() + 1}/${d.getDate()}`,
            xp: entry.xp,
            solved: entry.solved,
            lessons: entry.lessons
        });
    }
    return out;
}
function solvedCount(progress) {
    return Object.values(progress.problemStats).filter((p)=>p.status === "solved").length;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/router.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "NavLink",
    ()=>NavLink,
    "Navigate",
    ()=>Navigate,
    "useParams",
    ()=>useParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
function Link({ to, replace, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: to,
        replace: replace,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/lib/router.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c = Link;
function NavLink({ end = false, className, to, ...props }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = end ? pathname === to : to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
    const resolvedClassName = typeof className === "function" ? className({
        isActive
    }) : className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
        to: to,
        className: resolvedClassName,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/lib/router.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_s(NavLink, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = NavLink;
function useParams() {
    _s1();
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])().split("/").filter(Boolean).map((segment)=>decodeURIComponent(segment));
    const [head, value, extra] = segments;
    if (head === "problem") return {
        slug: value
    };
    if (head === "languages") return {
        courseId: value
    };
    if (head === "lesson" || head === "checkpoint" || head === "test") {
        return {
            moduleId: value
        };
    }
    if (head === "challenges") return {
        trackId: value
    };
    if (head === "case") return {
        caseId: value
    };
    if (("TURBOPACK compile-time value", "development") !== "production" && extra !== undefined) {
        console.warn(`useParams(): route "/${segments.join("/")}" has more than two segments. ` + "This shim only decodes /head/value, so params beyond that are dropped. " + "Extend useParams() in src/lib/router.tsx before relying on a deeper path.");
    }
    return {};
}
_s1(useParams, "wVXOWZKWdId76kQQO0KX6Oz3JDA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
function Navigate({ to, replace = false }) {
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigate.useEffect": ()=>{
            if (replace) router.replace(to);
            else router.push(to);
        }
    }["Navigate.useEffect"], [
        replace,
        router,
        to
    ]);
    return null;
}
_s2(Navigate, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = Navigate;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Link");
__turbopack_context__.k.register(_c1, "NavLink");
__turbopack_context__.k.register(_c2, "Navigate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/screens/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/router.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/progressStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tracks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/insights.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function Dashboard() {
    _s();
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])({
        "Dashboard.useProgressStore[progress]": (s)=>s.progress
    }["Dashboard.useProgressStore[progress]"]);
    const upcoming = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRank"])(progress.xp);
    const activity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recentActivity"])(progress, 14);
    const hasActivity = activity.some((d)=>d.xp > 0);
    const completions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stages"].map((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageCompletion"])(s, progress)).filter((c)=>c.total > 0);
    const weakest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weakestPatterns"])(progress);
    const stats = [
        {
            label: "XP",
            value: progress.xp.toLocaleString()
        },
        {
            label: "Rank",
            value: progress.rank
        },
        {
            label: "Current streak",
            value: `${progress.streak.current}d`
        },
        {
            label: "Best streak",
            value: `${progress.streak.best}d`
        },
        {
            label: "Problems solved",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solvedCount"])(progress)
        },
        {
            label: "Badges",
            value: progress.badges.length
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "Dashboard",
                subtitle: "Your progress at a glance — XP, streaks, per-stage completion, and where to focus next."
            }, void 0, false, {
                fileName: "[project]/src/screens/Dashboard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3",
                children: stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs uppercase tracking-wide text-slate-400",
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-2xl font-bold",
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/src/screens/Dashboard.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/screens/Dashboard.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            upcoming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-500 dark:text-slate-400",
                        children: [
                            "Next rank:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-700 dark:text-slate-200",
                                children: upcoming.rank
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            " ",
                            "at ",
                            upcoming.minXp.toLocaleString(),
                            " XP"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Dashboard.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full bg-forge-500 transition-all",
                            style: {
                                width: `${Math.min(100, progress.xp / upcoming.minXp * 100)}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/screens/Dashboard.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/screens/Dashboard.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Dashboard.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 grid gap-4 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400",
                                children: "Activity — last 14 days"
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            hasActivity ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-52",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                                        data: activity,
                                        margin: {
                                            top: 4,
                                            right: 8,
                                            bottom: 0,
                                            left: -20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "xpFill",
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "0",
                                                    y2: "1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "0%",
                                                            stopColor: "#3167f5",
                                                            stopOpacity: 0.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/screens/Dashboard.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "100%",
                                                            stopColor: "#3167f5",
                                                            stopOpacity: 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/screens/Dashboard.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/screens/Dashboard.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                stroke: "#64748b33"
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "label",
                                                tick: {
                                                    fill: "#94a3b8",
                                                    fontSize: 11
                                                },
                                                tickLine: false,
                                                axisLine: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                tick: {
                                                    fill: "#94a3b8",
                                                    fontSize: 11
                                                },
                                                tickLine: false,
                                                axisLine: false,
                                                allowDecimals: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    background: "#0f172a",
                                                    border: "none",
                                                    borderRadius: 8,
                                                    color: "#f1f5f9",
                                                    fontSize: 12
                                                },
                                                labelStyle: {
                                                    color: "#94a3b8"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                type: "monotone",
                                                dataKey: "xp",
                                                stroke: "#3167f5",
                                                strokeWidth: 2,
                                                fill: "url(#xpFill)",
                                                name: "XP"
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/Dashboard.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                title: "No activity yet.",
                                hint: "Solve a problem or finish a lesson to start the graph."
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Dashboard.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400",
                                children: "Weakest patterns"
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            weakest.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: weakest.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 flex items-center justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium capitalize",
                                                        children: w.patternId.replace(/-/g, " ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: [
                                                            w.solved,
                                                            "/",
                                                            w.attempted,
                                                            " · ",
                                                            Math.round(w.solveRate * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full rounded-full bg-amber-500",
                                                    style: {
                                                        width: `${Math.round(w.solveRate * 100)}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/screens/Dashboard.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, w.patternId, true, {
                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                title: "Not enough data yet.",
                                hint: "Once you attempt pattern-tagged problems, your weakest areas surface here."
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Dashboard.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Dashboard.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            (()=>{
                const today = new Date().toISOString().slice(0, 10);
                const dueCount = progress.reviewQueue.filter((e)=>e.dueDate <= today).length;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/mock",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "flex items-center justify-between transition hover:border-forge-400 hover:shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-semibold uppercase tracking-wide text-forge-500",
                                                children: "Interview prep"
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-0.5 font-semibold",
                                                children: "Start a mock interview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500 dark:text-slate-400",
                                                children: "Timed, mixed-pattern practice."
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-forge-500",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/screens/Dashboard.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/review",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "flex items-center justify-between transition hover:border-forge-400 hover:shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-semibold uppercase tracking-wide text-forge-500",
                                                children: "Spaced review"
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-0.5 font-semibold",
                                                children: dueCount > 0 ? `${dueCount} problem${dueCount === 1 ? "" : "s"} due` : "Nothing due"
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500 dark:text-slate-400",
                                                children: "Reinforce solved problems on schedule."
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-forge-500",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/screens/Dashboard.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/screens/Dashboard.tsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, this);
            })(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-baseline justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold tracking-tight",
                                children: "Challenge tracks"
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: "/challenges",
                                className: "text-sm text-forge-500 hover:underline",
                                children: "View all →"
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Dashboard.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    (()=>{
                        const isSolved = (id)=>progress.problemStats[id]?.status === "solved";
                        const cardTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allTracks"])().filter((t)=>t.kind !== "daily");
                        const dailyId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dailyProblemIdForDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
                        const dailyProblem = dailyId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblem"])(dailyId) : undefined;
                        const dailyDone = dailyId ? isSolved(dailyId) : false;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                cardTracks.map((t)=>{
                                    const solved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSolvedCount"])(t, isSolved);
                                    const total = t.problemIds.length;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: `/challenges/${t.id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "transition hover:border-forge-400 hover:shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-1.5 flex items-center justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: t.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/screens/Dashboard.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400",
                                                            children: [
                                                                solved,
                                                                "/",
                                                                total
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/screens/Dashboard.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/screens/Dashboard.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                                                    value: solved,
                                                    max: total
                                                }, void 0, false, {
                                                    fileName: "[project]/src/screens/Dashboard.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/Dashboard.tsx",
                                            lineNumber: 216,
                                            columnNumber: 21
                                        }, this)
                                    }, t.id, false, {
                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                        lineNumber: 215,
                                        columnNumber: 19
                                    }, this);
                                }),
                                dailyProblem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: "/challenges/daily",
                                    className: "sm:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "flex flex-wrap items-center justify-between gap-2 transition hover:border-forge-400 hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-semibold uppercase tracking-wide text-forge-500",
                                                        children: "Today"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: dailyProblem.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DifficultyBadge"], {
                                                        difficulty: dailyProblem.difficulty
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: dailyDone ? "text-[11px] font-medium text-emerald-500" : "text-[11px] font-medium text-forge-500",
                                                children: dailyDone ? "solved" : "solve today's"
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/Dashboard.tsx",
                                                lineNumber: 238,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                        lineNumber: 230,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/Dashboard.tsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/screens/Dashboard.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this);
                    })()
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Dashboard.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-3 text-lg font-semibold tracking-tight",
                children: "Per-stage completion"
            }, void 0, false, {
                fileName: "[project]/src/screens/Dashboard.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            completions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: completions.map(({ stage, completed, total, percent })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1 flex items-center justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: stage.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                        lineNumber: 261,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: [
                                            completed,
                                            "/",
                                            total,
                                            " · ",
                                            percent,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/screens/Dashboard.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 260,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full bg-forge-500 transition-all",
                                    style: {
                                        width: `${percent}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/Dashboard.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Dashboard.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this)
                        ]
                    }, stage.id, true, {
                        fileName: "[project]/src/screens/Dashboard.tsx",
                        lineNumber: 259,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/screens/Dashboard.tsx",
                lineNumber: 257,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                title: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stages"].length} stages wired and waiting.`,
                hint: "Completion bars fill in as content is authored and you work through it."
            }, void 0, false, {
                fileName: "[project]/src/screens/Dashboard.tsx",
                lineNumber: 276,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/Dashboard.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "Oc4yQA+Ub+E3f5rPaV3211xTX/E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/screens/Dashboard.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/screens/Dashboard.tsx [app-client] (ecmascript)"));
}),
"[project]/src/store/progressStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SETTINGS",
    ()=>DEFAULT_SETTINGS,
    "createInitialProgress",
    ()=>createInitialProgress,
    "getProgressSnapshot",
    ()=>getProgressSnapshot,
    "normalizeProgress",
    ()=>normalizeProgress,
    "useProgressStore",
    ()=>useProgressStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
;
;
const EMPTY_STAT = {
    status: "unattempted",
    attempts: 0,
    timeSpentMs: 0,
    hintsUsed: 0
};
function todayIso() {
    return new Date().toISOString().slice(0, 10);
}
function isoPlusDays(days) {
    return new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);
}
/** Ensure a review entry exists for a problem (first-solve scheduling). */ function withScheduledReview(queue, problemId) {
    if (queue.some((e)=>e.problemId === problemId)) return queue;
    const firstInterval = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEW_INTERVALS_DAYS"][0] ?? 3;
    return [
        ...queue,
        {
            problemId,
            dueDate: isoPlusDays(firstInterval),
            intervalStep: 0
        }
    ];
}
const DEFAULT_SETTINGS = {
    preferredLanguage: "js",
    editorFontSize: 14,
    backupReminderDays: 7,
    reduceMotion: false
};
function createInitialProgress() {
    return {
        xp: 0,
        rank: "Novice",
        streak: {
            current: 0,
            best: 0
        },
        lessonCompletions: {},
        buildLabCompletions: {},
        problemStats: {},
        badges: [],
        testHistory: [],
        reviewQueue: [],
        activity: {},
        settings: {
            ...DEFAULT_SETTINGS
        },
        schemaVersion: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCHEMA_VERSION"]
    };
}
function normalizeProgress(raw) {
    const base = createInitialProgress();
    if (!raw || typeof raw !== "object") return base;
    const r = raw;
    const merged = {
        ...base,
        ...r,
        streak: {
            ...base.streak,
            ...r.streak ?? {}
        },
        lessonCompletions: {
            ...r.lessonCompletions ?? {}
        },
        buildLabCompletions: {
            ...r.buildLabCompletions ?? {}
        },
        problemStats: {
            ...r.problemStats ?? {}
        },
        badges: Array.isArray(r.badges) ? r.badges : [],
        testHistory: Array.isArray(r.testHistory) ? r.testHistory : [],
        reviewQueue: Array.isArray(r.reviewQueue) ? r.reviewQueue : [],
        activity: {
            ...r.activity ?? {}
        },
        settings: {
            ...base.settings,
            ...r.settings ?? {}
        },
        xp: typeof r.xp === "number" ? r.xp : 0,
        schemaVersion: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCHEMA_VERSION"]
    };
    merged.rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankForXp"])(merged.xp);
    return merged;
}
/**
 * Fold a base XP award into progress: bump the daily streak (if it's a new
 * day), apply the streak multiplier, update rank, and record the day's activity.
 */ function applyXp(progress, baseXp, delta = {}) {
    const today = todayIso();
    const streak = {
        ...progress.streak
    };
    if (streak.lastActiveDate !== today) {
        const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
        streak.current = streak.lastActiveDate === yesterday ? streak.current + 1 : 1;
        streak.best = Math.max(streak.best, streak.current);
        streak.lastActiveDate = today;
    }
    const awarded = Math.round(baseXp * (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streakMultiplier"])(streak.current));
    const nextXp = progress.xp + awarded;
    const prevDay = progress.activity[today] ?? {
        xp: 0,
        solved: 0,
        lessons: 0
    };
    const day = {
        xp: prevDay.xp + awarded,
        solved: prevDay.solved + (delta.solved ?? 0),
        lessons: prevDay.lessons + (delta.lessons ?? 0)
    };
    return {
        ...progress,
        xp: nextXp,
        rank: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankForXp"])(nextXp),
        streak,
        activity: {
            ...progress.activity,
            [today]: day
        }
    };
}
const useProgressStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        progress: createInitialProgress(),
        replaceProgress: (progress)=>set({
                progress
            }),
        updateSettings: (patch)=>set((s)=>({
                    progress: {
                        ...s.progress,
                        settings: {
                            ...s.progress.settings,
                            ...patch
                        }
                    }
                })),
        recomputeDerived: ()=>set((s)=>({
                    progress: {
                        ...s.progress,
                        rank: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankForXp"])(s.progress.xp)
                    }
                })),
        resetAll: ()=>set({
                progress: createInitialProgress()
            }),
        logAttempt: (problemId, elapsedMs)=>set((s)=>{
                const prev = s.progress.problemStats[problemId] ?? EMPTY_STAT;
                const stat = {
                    ...prev,
                    attempts: prev.attempts + 1,
                    timeSpentMs: prev.timeSpentMs + Math.max(0, elapsedMs),
                    status: prev.status === "solved" ? "solved" : "attempted",
                    lastAttemptedAt: new Date().toISOString()
                };
                return {
                    progress: {
                        ...s.progress,
                        problemStats: {
                            ...s.progress.problemStats,
                            [problemId]: stat
                        }
                    }
                };
            }),
        solveProblem: (problemId, elapsedMs, xp)=>set((s)=>{
                const prev = s.progress.problemStats[problemId] ?? EMPTY_STAT;
                const alreadySolved = prev.status === "solved";
                const now = new Date().toISOString();
                const stat = {
                    ...prev,
                    status: "solved",
                    timeSpentMs: prev.timeSpentMs + Math.max(0, elapsedMs),
                    firstSolvedAt: prev.firstSolvedAt ?? now,
                    lastAttemptedAt: now
                };
                const base = {
                    ...s.progress,
                    problemStats: {
                        ...s.progress.problemStats,
                        [problemId]: stat
                    }
                };
                if (alreadySolved) return {
                    progress: base
                };
                // First solve: award XP and schedule the problem for spaced review.
                const awarded = applyXp(base, xp, {
                    solved: 1
                });
                return {
                    progress: {
                        ...awarded,
                        reviewQueue: withScheduledReview(awarded.reviewQueue, problemId)
                    }
                };
            }),
        addHintUsed: (problemId)=>set((s)=>{
                const prev = s.progress.problemStats[problemId] ?? EMPTY_STAT;
                const stat = {
                    ...prev,
                    hintsUsed: prev.hintsUsed + 1
                };
                return {
                    progress: {
                        ...s.progress,
                        problemStats: {
                            ...s.progress.problemStats,
                            [problemId]: stat
                        }
                    }
                };
            }),
        completeLesson: (moduleId, xp)=>set((s)=>{
                if (s.progress.lessonCompletions[moduleId]) return s;
                const base = {
                    ...s.progress,
                    lessonCompletions: {
                        ...s.progress.lessonCompletions,
                        [moduleId]: new Date().toISOString()
                    }
                };
                return {
                    progress: applyXp(base, xp, {
                        lessons: 1
                    })
                };
            }),
        completeBuildLab: (labId, xp)=>set((s)=>{
                if (s.progress.buildLabCompletions[labId]) return s;
                const base = {
                    ...s.progress,
                    buildLabCompletions: {
                        ...s.progress.buildLabCompletions,
                        [labId]: new Date().toISOString()
                    }
                };
                return {
                    progress: applyXp(base, xp)
                };
            }),
        markBackedUp: ()=>set((s)=>({
                    progress: {
                        ...s.progress,
                        settings: {
                            ...s.progress.settings,
                            lastBackupAt: new Date().toISOString()
                        }
                    }
                })),
        submitTest: (session, badgeId)=>{
            const progress = get().progress;
            const testHistory = [
                ...progress.testHistory,
                session
            ];
            let badges = progress.badges;
            let isNewBest = false;
            let bonus = 0;
            const tier = session.awardedTier;
            if (tier && badgeId) {
                const prev = progress.badges.find((b)=>b.moduleId === session.moduleId);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierRank"])(tier) > (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierRank"])(prev?.tier)) {
                    isNewBest = true;
                    bonus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierBonus"])(tier) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierBonus"])(prev?.tier);
                    const award = {
                        moduleId: session.moduleId,
                        badgeId,
                        tier,
                        score: session.scorePercent ?? 0,
                        earnedAt: session.finishedAt ?? new Date().toISOString()
                    };
                    badges = prev ? progress.badges.map((b)=>b.moduleId === session.moduleId ? award : b) : [
                        ...progress.badges,
                        award
                    ];
                }
            }
            const before = progress.xp;
            let next = {
                ...progress,
                testHistory,
                badges
            };
            if (bonus > 0) next = applyXp(next, bonus);
            set({
                progress: next
            });
            return {
                isNewBest,
                xpAwarded: next.xp - before
            };
        },
        scheduleReview: (problemId)=>set((s)=>({
                    progress: {
                        ...s.progress,
                        reviewQueue: withScheduledReview(s.progress.reviewQueue, problemId)
                    }
                })),
        reviewProblem: (problemId, remembered)=>set((s)=>{
                const idx = s.progress.reviewQueue.findIndex((e)=>e.problemId === problemId);
                if (idx === -1) return s;
                const entry = s.progress.reviewQueue[idx];
                const lastStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEW_INTERVALS_DAYS"].length - 1;
                const nextStep = remembered ? Math.min(entry.intervalStep + 1, lastStep) : 0;
                const days = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEW_INTERVALS_DAYS"][nextStep] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEW_INTERVALS_DAYS"][0] ?? 3;
                const updated = {
                    problemId,
                    dueDate: isoPlusDays(days),
                    intervalStep: nextStep
                };
                const reviewQueue = [
                    ...s.progress.reviewQueue
                ];
                reviewQueue[idx] = updated;
                return {
                    progress: {
                        ...s.progress,
                        reviewQueue
                    }
                };
            }),
        recordMockInterview: (session, baseXp)=>{
            const progress = get().progress;
            const before = progress.xp;
            const withHistory = {
                ...progress,
                testHistory: [
                    ...progress.testHistory,
                    session
                ]
            };
            const next = baseXp > 0 ? applyXp(withHistory, baseXp) : withHistory;
            set({
                progress: next
            });
            return {
                xpAwarded: next.xp - before
            };
        }
    }), {
    name: "algoforge-progress",
    version: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCHEMA_VERSION"],
    partialize: (s)=>({
            progress: s.progress
        }),
    migrate: (persisted)=>{
        const p = persisted?.progress;
        return {
            progress: normalizeProgress(p)
        };
    },
    onRehydrateStorage: ()=>(state)=>{
            // Keep rank consistent with xp on load.
            state?.recomputeDerived();
        }
}));
function getProgressSnapshot() {
    return useProgressStore.getState().progress;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1y6t88n._.js.map