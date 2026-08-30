(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CodeEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeEditor",
    ()=>CodeEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/themeStore.ts [app-client] (ecmascript)");
// Side-effect import: configure Monaco to bundle locally (offline, no CDN).
// Colocated here so Monaco loads only with the editor, not in the initial bundle.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$monacoSetup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/monacoSetup.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const MONACO_LANG = {
    js: "javascript",
    ts: "typescript"
};
function CodeEditor({ value, onChange, language, height = "100%", fontSize = 14, readOnly = false, onMount }) {
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"])({
        "CodeEditor.useThemeStore[theme]": (s)=>s.theme
    }["CodeEditor.useThemeStore[theme]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        height: height,
        language: MONACO_LANG[language],
        theme: theme === "dark" ? "vs-dark" : "light",
        value: value,
        onChange: (v)=>onChange(v ?? ""),
        onMount: onMount,
        options: {
            fontSize,
            readOnly,
            minimap: {
                enabled: false
            },
            scrollBeyondLastLine: false,
            smoothScrolling: true,
            tabSize: 2,
            automaticLayout: true,
            lineNumbers: "on",
            renderLineHighlight: "line",
            fontLigatures: true,
            padding: {
                top: 12,
                bottom: 12
            }
        },
        loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-center text-sm text-slate-400",
            children: "Loading editor…"
        }, void 0, false, {
            fileName: "[project]/src/components/CodeEditor.tsx",
            lineNumber: 54,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CodeEditor.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(CodeEditor, "O6Xo6xzx91bh3V0nGIChPYaZUp4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"]
    ];
});
_c = CodeEditor;
var _c;
__turbopack_context__.k.register(_c, "CodeEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/lib/mock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mock interviews — timed, cross-pattern problem sets drawn from the whole
 * pattern library (Stages 4–7), scored like a real interview loop. Unlike a
 * module test there are no MCQs and no badge; the value is the timed, mixed
 * practice and the recorded history.
 */ __turbopack_context__.s([
    "MOCK_PRESETS",
    ()=>MOCK_PRESETS,
    "drawMockProblems",
    ()=>drawMockProblems,
    "getMockPreset",
    ()=>getMockPreset,
    "mockConfig",
    ()=>mockConfig,
    "mockPool",
    ()=>mockPool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$testEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/testEngine.ts [app-client] (ecmascript)");
;
;
const MOCK_PRESETS = [
    {
        id: "warmup",
        label: "Warm-up",
        description: "Two medium problems, 30 minutes — a quick mixed-pattern rep.",
        minutes: 30,
        parMinutes: 24,
        drawRules: {
            easy: 0,
            medium: 2,
            hard: 0
        }
    },
    {
        id: "standard",
        label: "Standard Screen",
        description: "Two medium + one hard, 45 minutes — a typical phone screen.",
        minutes: 45,
        parMinutes: 38,
        drawRules: {
            easy: 0,
            medium: 2,
            hard: 1
        }
    },
    {
        id: "onsite",
        label: "Onsite Round",
        description: "Two medium + two hard, 60 minutes — a demanding onsite loop.",
        minutes: 60,
        parMinutes: 50,
        drawRules: {
            easy: 0,
            medium: 2,
            hard: 2
        }
    }
];
function getMockPreset(id) {
    return MOCK_PRESETS.find((p)=>p.id === id);
}
function mockPool() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allProblems"])().filter((p)=>p.patternIds.length > 0);
}
function drawMockProblems(preset) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$testEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawProblems"])(mockPool(), preset.drawRules);
}
function mockConfig(preset) {
    return {
        moduleId: `mock-${preset.id}`,
        drawRules: {
            ...preset.drawRules
        },
        timeLimitMinutes: preset.minutes,
        parTimeMinutes: preset.parMinutes,
        complexityMcqCount: 0
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/monacoSetup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Bundle Monaco locally (no CDN) so the app honours the "no external APIs at
 * runtime / works offline" requirement. This module has side effects and must
 * be imported exactly once, from the main thread, before the editor mounts.
 *
 * We import only the editor API plus the JavaScript/TypeScript language
 * features — not Monaco's full set of bundled languages — which keeps the
 * production bundle (and build) lean since AlgoForge only ever edits JS/TS.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$editor$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/editor/editor.api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$language$2f$typescript$2f$monaco$2e$contribution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$basic$2d$languages$2f$javascript$2f$javascript$2e$contribution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$basic$2d$languages$2f$typescript$2f$typescript$2e$contribution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$loader$2f$lib$2f$es$2f$loader$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__loader$3e$__ = __turbopack_context__.i("[project]/node_modules/@monaco-editor/loader/lib/es/loader/index.js [app-client] (ecmascript) <export default as loader>");
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("src/lib/monacoSetup.ts");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: false
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
;
;
;
self.MonacoEnvironment = {
    getWorker (_workerId, label) {
        if (label === "typescript" || label === "javascript") {
            return __turbopack_context__.r("[project]/node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js [app-client] (ecmascript, worker loader)")(Worker, {
                type: "module"
            });
        }
        return __turbopack_context__.r("[project]/node_modules/monaco-editor/esm/vs/editor/editor.worker.js [app-client] (ecmascript, worker loader)")(Worker, {
            type: "module"
        });
    }
};
// Point @monaco-editor/react at the bundled instance instead of the CDN loader.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$loader$2f$lib$2f$es$2f$loader$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__loader$3e$__["loader"].config({
    monaco: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$editor$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
});
// Relax TS diagnostics a touch so single-snippet drills don't scream about
// missing module context, while still surfacing real syntax/type mistakes.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$editor$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].typescript.typescriptDefaults.setCompilerOptions({
    target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$editor$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].typescript.ScriptTarget.ES2020,
    allowNonTsExtensions: true,
    moduleResolution: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$editor$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].typescript.ModuleResolutionKind.NodeJs,
    noEmit: true,
    strict: false
});
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
"[project]/src/lib/testEngine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildTestConfig",
    ()=>buildTestConfig,
    "decideTier",
    ()=>decideTier,
    "drawMcqs",
    ()=>drawMcqs,
    "drawProblems",
    ()=>drawProblems,
    "formatDuration",
    ()=>formatDuration,
    "retakeStatus",
    ()=>retakeStatus,
    "scoreTest",
    ()=>scoreTest,
    "shuffle",
    ()=>shuffle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
function shuffle(items) {
    const out = [
        ...items
    ];
    for(let i = out.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const a = out[i];
        const b = out[j];
        out[i] = b;
        out[j] = a;
    }
    return out;
}
function buildTestConfig(moduleId) {
    return {
        moduleId,
        drawRules: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TEST"].drawRules
        },
        timeLimitMinutes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TEST"].timeLimitMinutes,
        parTimeMinutes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TEST"].parTimeMinutes,
        complexityMcqCount: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TEST"].complexityMcqCount
    };
}
function drawProblems(pool, rules) {
    const byDiff = {
        easy: [],
        medium: [],
        hard: []
    };
    for (const p of pool)byDiff[p.difficulty].push(p);
    const picked = [];
    const pickedIds = new Set();
    [
        "easy",
        "medium",
        "hard"
    ].forEach((d)=>{
        const want = rules[d];
        const available = shuffle(byDiff[d]);
        for(let i = 0; i < want && i < available.length; i++){
            const p = available[i];
            picked.push(p);
            pickedIds.add(p.id);
        }
    });
    const target = rules.easy + rules.medium + rules.hard;
    if (picked.length < target) {
        const leftovers = shuffle(pool.filter((p)=>!pickedIds.has(p.id)));
        for (const p of leftovers){
            if (picked.length >= target) break;
            picked.push(p);
            pickedIds.add(p.id);
        }
    }
    // Present easy → hard for a gentle ramp.
    const order = {
        easy: 0,
        medium: 1,
        hard: 2
    };
    picked.sort((a, b)=>order[a.difficulty] - order[b.difficulty]);
    return picked.map((p)=>p.id);
}
function drawMcqs(pool, count) {
    return shuffle(pool).slice(0, Math.min(count, pool.length)).map((q)=>q.id);
}
function scoreTest(problemsSolved, problemCount, mcqCorrect, mcqCount) {
    const problemWeight = problemCount > 0 ? mcqCount > 0 ? 90 : 100 : 0;
    const mcqWeight = mcqCount > 0 ? problemCount > 0 ? 10 : 100 : 0;
    const pScore = problemCount > 0 ? problemsSolved / problemCount * problemWeight : 0;
    const mScore = mcqCount > 0 ? mcqCorrect / mcqCount * mcqWeight : 0;
    return Math.round(pScore + mScore);
}
function decideTier(scorePercent, elapsedMs, parMs, hintsUsed) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierForScore"])(scorePercent);
    if (base === "platinum" && (hintsUsed > 0 || elapsedMs > parMs)) {
        return "gold";
    }
    return base;
}
function retakeStatus(progress, moduleId, cooldownHours = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TEST"].retakeCooldownHours) {
    const finished = progress.testHistory.filter((s)=>s.moduleId === moduleId && s.finishedAt).map((s)=>new Date(s.finishedAt).getTime()).filter((t)=>!Number.isNaN(t));
    if (finished.length === 0) return {
        allowed: true,
        remainingMs: 0
    };
    const last = Math.max(...finished);
    const remainingMs = cooldownHours * 3_600_000 - (Date.now() - last);
    return {
        allowed: remainingMs <= 0,
        remainingMs: Math.max(0, remainingMs),
        lastFinishedAt: new Date(last).toISOString()
    };
}
function formatDuration(ms) {
    const totalSec = Math.max(0, Math.round(ms / 1000));
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor(totalSec % 3600 / 60);
    const s = totalSec % 60;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}:${String(s).padStart(2, "0")}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/runner/executor.worker.ts (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/executor.worker.144b8dtilfr17.ts");}),
"[project]/src/runner/executor.worker.ts [app-client] (ecmascript, worker loader)", ((__turbopack_context__) => {

__turbopack_context__.v(__turbopack_context__.r("[turbopack-ecmascript]/worker/browser/createWorker.ts [app-client] (ecmascript)")["default"]("static/chunks/turbopack-worker-[client-fs]__next_static_chunks_1_hyozq._.js", ["static/chunks/node_modules_sucrase_dist_esm_parser_0zj9i1u._.js","static/chunks/node_modules_sucrase_dist_esm_transformers_16n3ze3._.js","static/chunks/node_modules_sucrase_dist_esm_1iq49zn._.js","static/chunks/node_modules_0ruzrz5._.js","static/chunks/src_runner_0dz52_w._.js","static/chunks/src_runner_executor_worker_ts_1gdnjqz._.js","static/chunks/turbopack-src_runner_executor_worker_ts_1le4nre._.js"]));
}),
"[project]/src/runner/runnerManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runInWorker",
    ()=>runInWorker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("src/runner/runnerManager.ts");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: false
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
function runInWorker(req, timeoutMs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODE_TIMEOUT_MS"]) {
    return new Promise((resolve)=>{
        const worker = __turbopack_context__.r("[project]/src/runner/executor.worker.ts [app-client] (ecmascript, worker loader)")(Worker, {
            type: "module"
        });
        let settled = false;
        const finish = (outcome)=>{
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            worker.terminate();
            resolve(outcome);
        };
        const timer = setTimeout(()=>{
            finish({
                status: "timeout",
                console: [],
                results: [],
                error: {
                    message: "Time limit exceeded — possible infinite loop."
                },
                totalRuntimeMs: timeoutMs
            });
        }, timeoutMs);
        worker.onmessage = (e)=>finish(e.data);
        worker.onerror = (e)=>{
            e.preventDefault();
            finish({
                status: "runtimeError",
                console: [],
                results: [],
                error: {
                    message: e.message || "Worker crashed while executing your code."
                },
                totalRuntimeMs: 0
            });
        };
        worker.postMessage(req);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/runner/useCodeRunner.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCodeRunner",
    ()=>useCodeRunner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$runnerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/runner/runnerManager.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useCodeRunner() {
    _s();
    const [running, setRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [outcome, setOutcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const runToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCodeRunner.useCallback[run]": async (req, timeoutMs)=>{
            const token = ++runToken.current;
            setRunning(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$runnerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runInWorker"])(req, timeoutMs);
            if (token === runToken.current) {
                setOutcome(result);
                setRunning(false);
            }
            return result;
        }
    }["useCodeRunner.useCallback[run]"], []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCodeRunner.useCallback[reset]": ()=>{
            runToken.current++;
            setOutcome(null);
            setRunning(false);
        }
    }["useCodeRunner.useCallback[reset]"], []);
    return {
        running,
        outcome,
        run,
        reset
    };
}
_s(useCodeRunner, "zLuARzrag0ML8/XdBiwrWAP7lGM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/screens/MockInterview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockInterview",
    ()=>MockInterview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/router.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodeEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$useCodeRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/runner/useCodeRunner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/progressStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$testEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/testEngine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
function MockInterview() {
    _s();
    const recordMockInterview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])({
        "MockInterview.useProgressStore[recordMockInterview]": (s)=>s.recordMockInterview
    }["MockInterview.useProgressStore[recordMockInterview]"]);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("config");
    const [presetId, setPresetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PRESETS"][1].id);
    const [drawnIds, setDrawnIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [solved, setSolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const preset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockPreset"])(presetId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PRESETS"][1];
    const timeLimitMs = preset.minutes * 60_000;
    const remainingMs = Math.max(0, timeLimitMs - (now - startTime));
    const problems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MockInterview.useMemo[problems]": ()=>drawnIds.map({
                "MockInterview.useMemo[problems]": (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblem"])(id)
            }["MockInterview.useMemo[problems]"]).filter({
                "MockInterview.useMemo[problems]": (p)=>Boolean(p)
            }["MockInterview.useMemo[problems]"])
    }["MockInterview.useMemo[problems]"], [
        drawnIds
    ]);
    const finalize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MockInterview.useCallback[finalize]": ()=>{
            const solvedCount = drawnIds.filter({
                "MockInterview.useCallback[finalize]": (id)=>solved.has(id)
            }["MockInterview.useCallback[finalize]"]).length;
            const score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$testEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreTest"])(solvedCount, drawnIds.length, 0, 0);
            const baseXp = drawnIds.reduce({
                "MockInterview.useCallback[finalize].baseXp": (sum, id)=>{
                    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblem"])(id);
                    return sum + (p && solved.has(id) ? p.xp : 0);
                }
            }["MockInterview.useCallback[finalize].baseXp"], 0);
            const session = {
                id: `mock-${Date.now()}`,
                moduleId: `mock-${preset.id}`,
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockConfig"])(preset),
                drawnProblemIds: drawnIds,
                complexityQuestionIds: [],
                startedAt: new Date(startTime).toISOString(),
                finishedAt: new Date().toISOString(),
                timeLimitMs,
                problemResults: drawnIds.map({
                    "MockInterview.useCallback[finalize]": (id)=>({
                            problemId: id,
                            solved: solved.has(id),
                            timeSpentMs: 0
                        })
                }["MockInterview.useCallback[finalize]"]),
                mcqCorrect: 0,
                scorePercent: score
            };
            const outcome = recordMockInterview(session, baseXp);
            setResult({
                session,
                xpAwarded: outcome.xpAwarded
            });
            setPhase("results");
        }
    }["MockInterview.useCallback[finalize]"], [
        drawnIds,
        solved,
        preset,
        startTime,
        timeLimitMs,
        recordMockInterview
    ]);
    const finalizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(finalize);
    finalizeRef.current = finalize;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MockInterview.useEffect": ()=>{
            if (phase !== "running") return;
            const timer = setInterval({
                "MockInterview.useEffect.timer": ()=>{
                    const t = Date.now();
                    setNow(t);
                    if (t - startTime >= timeLimitMs) {
                        clearInterval(timer);
                        finalizeRef.current();
                    }
                }
            }["MockInterview.useEffect.timer"], 1000);
            return ({
                "MockInterview.useEffect": ()=>clearInterval(timer)
            })["MockInterview.useEffect"];
        }
    }["MockInterview.useEffect"], [
        phase,
        startTime,
        timeLimitMs
    ]);
    const start = ()=>{
        setDrawnIds((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawMockProblems"])(preset));
        setSolved(new Set());
        const t = Date.now();
        setStartTime(t);
        setNow(t);
        setResult(null);
        setPhase("running");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/learn",
                className: "text-sm font-medium text-forge-500 hover:underline",
                children: "← Learn"
            }, void 0, false, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            phase === "config" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                        title: "Mock Interview",
                        subtitle: "A timed, mixed-pattern set drawn from across the whole library. No hints, no MCQs — just you and the clock. Auto-submits at time up."
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 grid gap-3 sm:grid-cols-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PRESETS"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PresetCard, {
                                preset: p,
                                selected: p.id === presetId,
                                onSelect: ()=>setPresetId(p.id)
                            }, p.id, false, {
                                fileName: "[project]/src/screens/MockInterview.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: start,
                        className: "rounded-lg bg-forge-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forge-600",
                        children: [
                            "Start ",
                            preset.label,
                            " →"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            phase === "running" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-10 -mx-6 mb-4 flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-6 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-500 dark:text-slate-400",
                                children: [
                                    "Solved ",
                                    drawnIds.filter((id)=>solved.has(id)).length,
                                    "/",
                                    drawnIds.length,
                                    " · ",
                                    preset.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/MockInterview.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-mono text-lg font-bold tabular-nums", remainingMs < 120_000 ? "text-red-500" : "text-slate-700 dark:text-slate-200"),
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$testEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDuration"])(remainingMs)
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/MockInterview.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: finalize,
                                        className: "rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600",
                                        children: "Finish"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/MockInterview.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/MockInterview.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: problems.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MockProblemCard, {
                                index: i + 1,
                                problem: p,
                                onSolve: ()=>setSolved((prev)=>new Set(prev).add(p.id))
                            }, p.id, false, {
                                fileName: "[project]/src/screens/MockInterview.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            phase === "results" && result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MockResults, {
                result: result,
                onRetry: ()=>setPhase("config")
            }, void 0, false, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/MockInterview.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(MockInterview, "UyMJrnm7tk18ibRKVgJosDd/T/8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"]
    ];
});
_c = MockInterview;
function PresetCard({ preset, selected, onSelect }) {
    const total = preset.drawRules.easy + preset.drawRules.medium + preset.drawRules.hard;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onSelect,
        className: "text-left",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full transition", selected ? "border-forge-400 ring-1 ring-forge-400" : "hover:border-forge-300"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold",
                            children: preset.label
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MockInterview.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-medium text-forge-500",
                            children: "selected"
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MockInterview.tsx",
                            lineNumber: 188,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/screens/MockInterview.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-slate-500 dark:text-slate-400",
                    children: preset.description
                }, void 0, false, {
                    fileName: "[project]/src/screens/MockInterview.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 text-xs text-slate-400",
                    children: [
                        total,
                        " problems · ",
                        preset.minutes,
                        " min"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/screens/MockInterview.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/screens/MockInterview.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/screens/MockInterview.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_c1 = PresetCard;
function MockProblemCard({ index, problem, onSolve }) {
    _s1();
    const preferred = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])({
        "MockProblemCard.useProgressStore[preferred]": (s)=>s.progress.settings.preferredLanguage
    }["MockProblemCard.useProgressStore[preferred]"]);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preferred);
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(problem.starterCode[preferred]);
    const [solved, setSolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verdict, setVerdict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { running, run } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$useCodeRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCodeRunner"])();
    const switchLang = (l)=>{
        if (l === language) return;
        setLanguage(l);
        setCode(problem.starterCode[l]);
    };
    const submit = async ()=>{
        const all = [
            ...problem.visibleTests,
            ...problem.hiddenTests
        ];
        const res = await run({
            code,
            language,
            mode: "tests",
            functionName: problem.functionName,
            judgeType: problem.judgeType,
            tests: all
        });
        const passed = res.results.filter((r)=>r.passed).length;
        if (res.status === "ok" && passed === all.length && all.length > 0) {
            setSolved(true);
            setVerdict("All tests passed ✓");
            onSolve();
        } else if (res.status === "timeout") {
            setVerdict("Time limit exceeded.");
        } else if (res.status === "compileError" || res.status === "runtimeError") {
            setVerdict(res.error?.message ?? "Error");
        } else {
            setVerdict(`${passed}/${all.length} tests passed`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(solved && "border-emerald-400 dark:border-emerald-800"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-slate-400",
                        children: [
                            "Q",
                            index
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: problem.title
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DifficultyBadge"], {
                        difficulty: problem.difficulty
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    solved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-emerald-500",
                        children: "solved"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 251,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700",
                        children: [
                            "js",
                            "ts"
                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>switchLang(l),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2.5 py-1 text-xs font-semibold uppercase", language === l ? "bg-forge-500 text-white" : "bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-300"),
                                children: l
                            }, l, false, {
                                fileName: "[project]/src/screens/MockInterview.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "cursor-pointer text-sm text-forge-500",
                        children: "Show prompt"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 whitespace-pre-wrap text-sm text-slate-600 dark:text-slate-300",
                        children: problem.statement
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-56 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeEditor"], {
                    value: code,
                    onChange: setCode,
                    language: language,
                    fontSize: 13
                }, void 0, false, {
                    fileName: "[project]/src/screens/MockInterview.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>void submit(),
                        disabled: running,
                        className: "rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600 disabled:opacity-60",
                        children: running ? "Running…" : "Submit answer"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    verdict && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm", solved ? "text-emerald-500" : "text-slate-500 dark:text-slate-400"),
                        children: verdict
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/MockInterview.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
_s1(MockProblemCard, "u+IzFF3MavOFR9ObYLkRhFvrEEI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$useCodeRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCodeRunner"]
    ];
});
_c2 = MockProblemCard;
function MockResults({ result, onRetry }) {
    const { session, xpAwarded } = result;
    const solvedCount = session.problemResults.filter((r)=>r.solved).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "Mock interview complete",
                subtitle: "Timed practice logged to your history."
            }, void 0, false, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "mb-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-5xl font-bold",
                        children: [
                            session.scorePercent,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-sm text-slate-500 dark:text-slate-400",
                        children: [
                            solvedCount,
                            "/",
                            session.problemResults.length,
                            " problems solved"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    xpAwarded > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm font-medium text-emerald-500",
                        children: [
                            "+",
                            xpAwarded,
                            " XP"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRetry,
                        className: "rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-600",
                        children: "New mock interview"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/review",
                        className: "text-sm font-medium text-forge-500 hover:underline",
                        children: "Spaced review"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/dashboard",
                        className: "text-sm font-medium text-forge-500 hover:underline",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/MockInterview.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/MockInterview.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/MockInterview.tsx",
        lineNumber: 310,
        columnNumber: 5
    }, this);
}
_c3 = MockResults;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "MockInterview");
__turbopack_context__.k.register(_c1, "PresetCard");
__turbopack_context__.k.register(_c2, "MockProblemCard");
__turbopack_context__.k.register(_c3, "MockResults");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/screens/MockInterview.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/screens/MockInterview.tsx [app-client] (ecmascript)"));
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
"[project]/src/store/themeStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThemeStore",
    ()=>useThemeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
/** Reflect the theme onto <html> so Tailwind's `dark:` variants apply. */ function applyThemeClass(theme) {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
}
const useThemeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        theme: "dark",
        setTheme: (theme)=>{
            applyThemeClass(theme);
            set({
                theme
            });
        },
        toggle: ()=>{
            const next = get().theme === "dark" ? "light" : "dark";
            applyThemeClass(next);
            set({
                theme: next
            });
        }
    }), {
    name: "algoforge-theme",
    onRehydrateStorage: ()=>(state)=>{
            if (state) applyThemeClass(state.theme);
        }
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[turbopack-ecmascript]/worker/browser/createWorker.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Embedded worker-runtime helper. This file is bundled as a regular module and
// `__turbopack_require__`d by the generated web-worker loader code.
//
// The chunk-URL builder, the chunk base path and the asset suffix are read from
// the shared `__turbopack_chunk_relative_url__` / `__turbopack_chunk_base_path__`
// / `__turbopack_chunk_asset_suffix__` runtime primitives. The worker base-path
// override and forwarded-global names are baked into this module at build time by
// `turbopack-ecmascript` replacing the `_TURBOPACK_WORKER_BASE_PATH_` /
// `_TURBOPACK_WORKER_FORWARDED_GLOBALS_` free variables, and the forwarded-global
// values are read from `globalThis`.
__turbopack_context__.s([
    "default",
    ()=>generateCreateWorker
]);
/**
 * Creates a web worker by instantiating the given WorkerConstructor with the
 * appropriate URL and options.
 *
 * The entrypoint is a pre-compiled worker runtime file. The params configure
 * which module chunks to load and which module to run as the entry point.
 *
 * The params are a JSON array of the following structure:
 * `[TURBOPACK_NEXT_CHUNK_URLS, ASSET_SUFFIX, ...workerForwardedGlobals values]`
 *
 * @param WorkerConstructor The Worker or SharedWorker constructor
 * @param entrypoint path to the worker entrypoint chunk
 * @param moduleChunks list of module chunk paths to load
 * @param workerOptions options to pass to the Worker constructor (optional)
 */ function createWorker(WorkerConstructor, entrypoint, moduleChunks, workerOptions) {
    const isSharedWorker = WorkerConstructor.name === 'SharedWorker';
    // `WORKER_BASE_PATH` overrides `CHUNK_BASE_PATH` for the entrypoint and the
    // module chunks loaded inside the worker, keeping them same-origin to each
    // other when `CHUNK_BASE_PATH` (= `assetPrefix`) is a cross-origin CDN.
    // `null` falls back; an empty string is treated as a literal empty prefix.
    const workerBasePath = null ?? /*TURBOPACK member replacement*/ __turbopack_context__.b;
    const chunkUrls = moduleChunks.map((chunk)=>/*TURBOPACK member replacement*/ __turbopack_context__.h(typeof chunk === 'string' ? chunk : chunk.path, workerBasePath)).reverse();
    const params = [
        chunkUrls,
        /*TURBOPACK member replacement*/ __turbopack_context__.X
    ];
    const globals = [
        "NEXT_DEPLOYMENT_ID",
        "NEXT_CLIENT_ASSET_SUFFIX"
    ];
    for(let i = 0; i < globals.length; i++){
        params.push(globalThis[globals[i]]);
    }
    const url = new URL(/*TURBOPACK member replacement*/ __turbopack_context__.h(entrypoint, workerBasePath), location.origin);
    const paramsJson = JSON.stringify(params);
    if (isSharedWorker) {
        url.searchParams.set('params', paramsJson);
    } else {
        url.hash = '#params=' + encodeURIComponent(paramsJson);
    }
    // Remove type: "module" from options since our worker entrypoint is not a module
    const options = workerOptions ? {
        ...workerOptions,
        type: undefined
    } : undefined;
    return new WorkerConstructor(url, options);
}
function generateCreateWorker(entrypoint, moduleChunks) {
    return (WorkerConstructor, workerOptions)=>createWorker(WorkerConstructor, entrypoint, moduleChunks, workerOptions);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0f_503k._.js.map