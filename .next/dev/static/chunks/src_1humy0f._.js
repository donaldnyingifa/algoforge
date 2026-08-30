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
"[project]/src/data/systemdesign/certification.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SD_CERT_BADGE_ID",
    ()=>SD_CERT_BADGE_ID,
    "SD_CERT_DRAW",
    ()=>SD_CERT_DRAW,
    "SD_CERT_MINUTES",
    ()=>SD_CERT_MINUTES,
    "SD_CERT_MODULE_ID",
    ()=>SD_CERT_MODULE_ID,
    "sdCertificationModule",
    ()=>sdCertificationModule,
    "sdExamQuestionIds",
    ()=>sdExamQuestionIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/foundations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/foundations2.ts [app-client] (ecmascript)");
;
;
const S = "sd-s4";
const sdExamQuestionIds = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdFoundationMcqs"].map((q)=>q.id),
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdFoundationMcqs2"].map((q)=>q.id)
];
const SD_CERT_MODULE_ID = "m-sd-certification";
const SD_CERT_BADGE_ID = "badge-sd-certified";
const SD_CERT_DRAW = 10;
const SD_CERT_MINUTES = 15;
const sdCertificationModule = {
    id: SD_CERT_MODULE_ID,
    stageId: S,
    title: "System Design Certification",
    kind: "lesson",
    summary: "The capstone: a timed exam over the System Design foundations. Pass to earn a tiered certification badge.",
    lessonSections: [
        {
            heading: "What the certification covers",
            body: `The System Design certification is a **timed, multiple-choice exam** drawn from everything in the Foundations stage — the design framework, estimation, networking, core building blocks, API design, messaging, consistency, and reliability. It's the fastest way to confirm the vocabulary and tradeoffs are second nature before you walk into a real design round.

The best preparation is to work the **Foundations** lessons and the **Case Studies** first, then attempt a few **mock design interviews**. When you're ready, start the exam from the button below (or the "System Design Certification" card on the Learn page).`
        },
        {
            heading: "How scoring works",
            body: `Each attempt draws **${SD_CERT_DRAW} questions** at random with a **${SD_CERT_MINUTES}-minute** limit. Your score maps to a tiered badge, exactly like the DSA module tests:

- Bronze ≥ 60%, Silver ≥ 75%, Gold ≥ 90%, Platinum = 100%.

Your **best tier is always kept**, and you can retake to improve. Nothing here is hard-locked — you can attempt the exam anytime, but you'll do best after the foundations and a case study or two.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    badgeId: SD_CERT_BADGE_ID,
    prerequisiteModuleIds: [
        "m-sd-reliability"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/systemdesign/foundations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sdFoundationMcqs",
    ()=>sdFoundationMcqs,
    "sdFoundationModules",
    ()=>sdFoundationModules
]);
const S = "sd-s1";
const sdFoundationMcqs = [
    {
        id: "sd-f-framework-order",
        kind: "mcq",
        prompt: "In a design interview, the step that should come *first* is:",
        options: [
            "sketching the database schema",
            "clarifying functional and non-functional requirements",
            "choosing a message queue",
            "estimating storage"
        ],
        answerIndex: 1,
        explanation: "You can't design the right system until you know what it must do and its scale/latency/consistency targets. Requirements gate every later decision."
    },
    {
        id: "sd-f-nonfunctional",
        kind: "mcq",
        prompt: "Which of these is a NON-functional requirement?",
        options: [
            "users can upload a photo",
            "the feed shows posts from people you follow",
            "99.9% availability with p99 latency under 200 ms",
            "a user can delete their account"
        ],
        answerIndex: 2,
        explanation: "Non-functional requirements describe *how well* the system behaves — availability, latency, durability, scale — rather than a specific feature."
    },
    {
        id: "sd-f-estimation-qps",
        kind: "mcq",
        prompt: "1 million write requests evenly spread over a day is roughly how many writes per second?",
        options: [
            "~12 / s",
            "~120 / s",
            "~1,200 / s",
            "~12,000 / s"
        ],
        answerIndex: 0,
        explanation: "A day is ~86,400 s; 1,000,000 / 86,400 ≈ 11.6/s. A handy rule: 1M/day ≈ 12/s, 1B/day ≈ 12,000/s."
    },
    {
        id: "sd-f-estimation-peak",
        kind: "mcq",
        prompt: "Why do we multiply the average request rate by a 'peak factor' (often 2–10×)?",
        options: [
            "to account for traffic bursts and daily peaks the average hides",
            "to convert bytes to bits",
            "because storage grows over time",
            "to add a safety margin for disk failures"
        ],
        answerIndex: 0,
        explanation: "Real traffic isn't uniform — it spikes at busy hours. Capacity must handle the peak, not the daily average."
    },
    {
        id: "sd-f-net-tcp-udp",
        kind: "mcq",
        prompt: "You need ordered, reliable, connection-oriented delivery. You'd choose:",
        options: [
            "UDP",
            "TCP",
            "ICMP",
            "IP directly"
        ],
        answerIndex: 1,
        explanation: "TCP provides ordering, retransmission, and flow/congestion control. UDP is faster but unreliable and unordered — good for streaming/gaming where a dropped packet is fine."
    },
    {
        id: "sd-f-net-lb",
        kind: "mcq",
        prompt: "The main purpose of a load balancer is to:",
        options: [
            "encrypt traffic end to end",
            "distribute requests across multiple servers and route around unhealthy ones",
            "store session data",
            "cache database rows"
        ],
        answerIndex: 1,
        explanation: "A load balancer spreads load across a pool and health-checks members, enabling horizontal scaling and higher availability."
    },
    {
        id: "sd-f-cache-write",
        kind: "mcq",
        prompt: "A write-through cache differs from write-back in that it:",
        options: [
            "never stores writes",
            "writes to the cache and the backing store synchronously",
            "only caches reads",
            "loses data on every restart"
        ],
        answerIndex: 1,
        explanation: "Write-through updates cache and database together (durable, slightly slower writes). Write-back updates the cache first and flushes later (faster, risk of loss on crash)."
    },
    {
        id: "sd-f-cap",
        kind: "mcq",
        prompt: "Under the CAP theorem, during a network partition a system must sacrifice:",
        options: [
            "either consistency or availability",
            "durability",
            "latency",
            "partition tolerance"
        ],
        answerIndex: 0,
        explanation: "Partitions happen in any distributed system, so you keep P. When one occurs you must choose: reject/stall to stay consistent (CP), or answer with possibly-stale data to stay available (AP)."
    },
    {
        id: "sd-f-sql-nosql",
        kind: "mcq",
        prompt: "A key reason to reach for a NoSQL store over a relational database is:",
        options: [
            "you need multi-row ACID transactions and complex joins",
            "you need to scale writes horizontally with a flexible/denormalized schema",
            "you want foreign-key constraints enforced",
            "your data is small and highly relational"
        ],
        answerIndex: 1,
        explanation: "NoSQL stores trade rich relational features for horizontal write scaling and schema flexibility. If you need joins and strong multi-row transactions, relational is usually the better fit."
    }
];
const frameworkModule = {
    id: "m-sd-framework",
    stageId: S,
    title: "The Design Interview Framework",
    kind: "lesson",
    summary: "A repeatable six-step structure for any system design question — from requirements to deep dives — so you never stare at a blank whiteboard.",
    lessonSections: [
        {
            heading: "Why a framework",
            body: `System design questions are open-ended by design. Without a plan you'll jump straight to a database schema and miss what actually matters. A **repeatable framework** keeps you calm, shows structured thinking, and makes sure the big decisions come before the small ones.

Use these six steps, roughly in order (loop back as you learn more):

1. **Requirements** — functional (what it does) and non-functional (scale, latency, availability, consistency, durability).
2. **Estimation** — back-of-the-envelope QPS, storage, and bandwidth to size the system.
3. **API design** — the handful of endpoints the clients call.
4. **Data model** — the core entities and how they're stored.
5. **High-level design** — boxes and arrows: clients, load balancers, services, databases, caches, queues.
6. **Deep dives** — pick the 1–2 hardest parts and go deep (bottlenecks, scaling, failure modes).`
        },
        {
            heading: "Requirements first, always",
            body: `Spend the first few minutes **clarifying scope**. Interviewers deliberately give vague prompts ("design Twitter") to see whether you narrow them.

- **Functional requirements** are features: "post a tweet," "view a home timeline," "follow a user." List the top 3–5 and explicitly defer the rest ("let's skip DMs for now").
- **Non-functional requirements** are the qualities that shape the architecture: expected **scale** (users, QPS), **latency** targets (p99), **availability** (99.9% vs 99.99%), **consistency** needs (is stale data OK?), and **durability**.

\`\`\`text
Design a URL shortener
Functional:   create short link, redirect, (optional) custom alias, analytics
Non-functional: read-heavy (100:1), redirect p99 < 100ms, highly available, links durable
\`\`\`

Write these down — they become the yardstick you justify every later decision against.`
        },
        {
            heading: "Driving the rest of the conversation",
            body: `Once requirements are pinned, the **estimation** tells you whether one box suffices or you need sharding and caching. The **API** forces you to name the operations precisely. The **data model** exposes access patterns (which then justify your storage choice). Only then draw the **high-level diagram**.

Finally, **deep dives** are where you earn the offer: don't try to detail everything. Say "the interesting parts here are how we scale the timeline fan-out and how we keep redirects fast" and go deep on those. Narrate **tradeoffs** out loud — every choice buys something and costs something, and showing you see both sides matters more than any single "right" answer.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-framework-order",
        "sd-f-nonfunctional"
    ],
    prerequisiteModuleIds: []
};
const estimationModule = {
    id: "m-sd-estimation",
    stageId: S,
    title: "Back-of-the-Envelope Estimation",
    kind: "lesson",
    summary: "Sizing a system with quick math — QPS, storage, and bandwidth — plus the latency numbers every engineer should know.",
    lessonSections: [
        {
            heading: "The numbers to memorize",
            body: `Estimation isn't about precision — it's about being right within an order of magnitude, fast. Start from a few anchors:

- **Time:** 1 day ≈ **86,400 s** (round to ~100k). So **1M/day ≈ 12/s**, **1B/day ≈ 12,000/s**.
- **Powers of two → bytes:** 2¹⁰ = 1 KB, 2²⁰ = 1 MB, 2³⁰ = 1 GB, 2⁴⁰ = 1 TB.
- **Latency ballpark:** memory read ~100 ns, SSD random read ~100 µs, network round trip within a datacenter ~0.5 ms, disk seek ~10 ms, cross-continent round trip ~100 ms.

The gap between memory (ns), SSD (µs), and network/disk (ms) is what motivates caching and keeping hot data close.`
        },
        {
            heading: "A worked estimate",
            body: `Say we're designing a photo service: **500M users**, each uploads **2 photos/week**, average photo **1.5 MB**.

**Write QPS**
\`\`\`text
uploads/day = 500M users * 2/week / 7 ≈ 143M/day
avg writes/s = 143M / 86,400 ≈ 1,650/s
peak (×3)   ≈ 5,000 writes/s
\`\`\`

**Storage per year**
\`\`\`text
photos/year = 143M/day * 365 ≈ 52B photos
bytes/year  = 52B * 1.5 MB ≈ 78 PB/year
\`\`\`

**Read bandwidth** (if reads are 10× writes and each serves a 1.5 MB photo)
\`\`\`text
read QPS ≈ 16,500/s  →  16,500 * 1.5 MB ≈ 25 GB/s egress
\`\`\`

Those three numbers immediately tell you: object storage (not a relational blob column), a CDN for read bandwidth, and sharded metadata.`
        },
        {
            heading: "Peak vs. average, and sanity checks",
            body: `Always convert an **average** rate to a **peak** rate with a factor (2–10× depending on how bursty the traffic is) — capacity must survive the busy hour, not the daily mean.

Keep the math legible: round aggressively, carry units, and state assumptions ("assume 100:1 read/write"). If a number looks absurd (25 GB/s from a single server), that's the point — it reveals where you need a CDN, cache, or shard. Estimation's job isn't the exact figure; it's **surfacing the bottleneck** that drives the architecture.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-estimation-qps",
        "sd-f-estimation-peak"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const networkingModule = {
    id: "m-sd-networking",
    stageId: S,
    title: "Networking & Protocols",
    kind: "lesson",
    summary: "How bytes actually move: DNS, TCP vs UDP, HTTP, TLS, load balancers, and CDNs — the plumbing under every design.",
    lessonSections: [
        {
            heading: "From URL to bytes",
            body: `When a client hits your service, a chain of infrastructure runs first:

1. **DNS** resolves the hostname to an IP (often to the nearest edge/load balancer via geo/anycast routing). DNS answers are cached with a TTL.
2. **TCP** opens a connection (the three-way handshake). **TLS** then negotiates encryption on top.
3. **HTTP** requests ride the connection. HTTP/2 and HTTP/3 multiplex many requests over one connection to cut round trips.

Each hop adds latency, which is why we cache DNS, reuse connections (keep-alive), and push content to the edge.`
        },
        {
            heading: "TCP vs. UDP, and where each fits",
            body: `**TCP** is connection-oriented and reliable: it guarantees ordered delivery, retransmits lost packets, and manages flow/congestion control. Use it when correctness matters — web pages, APIs, file transfer.

**UDP** is connectionless and best-effort: no ordering, no retransmission, far less overhead. Use it when **timeliness beats completeness** — live video/voice, gaming, DNS queries — where a late packet is worse than a lost one.

\`\`\`text
Need every byte, in order?      → TCP
Need it *now*, drops tolerable?  → UDP
\`\`\`

Above the transport layer, **HTTP** is the request/response workhorse; **WebSockets** upgrade an HTTP connection to a persistent, bidirectional channel for push (chat, live feeds).`
        },
        {
            heading: "Load balancers and CDNs",
            body: `A **load balancer** sits in front of a server pool and spreads requests across it (round-robin, least-connections, or hashing), while **health-checking** members so traffic avoids dead nodes. This is what makes horizontal scaling and zero-downtime deploys possible. Load balancing happens at **L4** (fast, by IP/port) or **L7** (smarter, by URL/headers/cookies).

A **CDN** (content delivery network) caches static and cacheable content at edge locations near users. It slashes latency and offloads huge read bandwidth from your origin — essential for images, video, JS/CSS, and anything read far more than it's written. Together, LB + CDN handle the "read-heavy, globally distributed" reality of most large systems.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-net-tcp-udp",
        "sd-f-net-lb"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const buildingBlocksModule = {
    id: "m-sd-building-blocks",
    stageId: S,
    title: "Core Building Blocks",
    kind: "lesson",
    summary: "Caching, databases (SQL vs NoSQL), replication and sharding, and the CAP tradeoff — the components you'll wire together in every design.",
    lessonSections: [
        {
            heading: "Caching",
            body: `A **cache** keeps hot data in fast storage (memory) close to where it's read, absorbing load off slower backing stores. It's the single highest-leverage tool for read-heavy systems.

- **Where:** client, CDN (edge), a shared in-memory tier (Redis/Memcached), or in-process.
- **Write policy:** **write-through** (write cache + DB together — durable, slightly slower) vs **write-back** (write cache, flush later — fast, risk of loss on crash).
- **Eviction:** LRU/LFU/TTL decide what to drop when full.
- **The hard parts:** **invalidation** (keeping the cache consistent with the source) and the **thundering herd** when a hot key expires and every request stampedes the DB.

Cache what's read often and changes rarely; measure your **hit rate**.`
        },
        {
            heading: "Databases: relational vs. NoSQL",
            body: `**Relational (SQL)** databases give you a fixed schema, **ACID transactions**, joins, and strong consistency — ideal when data is highly relational and correctness is paramount (payments, orders).

**NoSQL** is an umbrella for stores that trade some of that for **horizontal scale** and **flexible schemas**:

- **Key-value** (DynamoDB, Redis) — simple, fast lookups by key.
- **Document** (MongoDB) — nested JSON-like records.
- **Wide-column** (Cassandra) — huge write throughput, tunable consistency.
- **Graph** (Neo4j) — relationship-heavy traversals.

Pick by **access pattern**: design the queries first, then choose the store that serves them cheaply. "SQL until it hurts, then scale out" is a reasonable default.`
        },
        {
            heading: "Replication, sharding & CAP",
            body: `To scale and survive failure you **replicate** (copies of data across nodes) and **shard** (split data across nodes by a key).

- **Replication** improves read throughput and availability. **Leader–follower** sends writes to a leader and reads to followers (risking stale reads); **multi-leader/leaderless** accept writes anywhere (risking conflicts).
- **Sharding** partitions data (by hash or range) so each node holds a slice. The challenge is a good **shard key** that spreads load without creating hotspots, plus rebalancing as you grow (consistent hashing helps).

The **CAP theorem** frames the core tradeoff: during a **network partition** you must choose **consistency** (reject or stall so no one reads stale data — CP) or **availability** (keep serving, possibly-stale data — AP). Partition tolerance isn't optional in a distributed system, so real designs pick where on the C↔A spectrum each piece of data lives.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-cache-write",
        "sd-f-cap",
        "sd-f-sql-nosql"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const sdFoundationModules = [
    frameworkModule,
    estimationModule,
    networkingModule,
    buildingBlocksModule
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/systemdesign/foundations2.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sdFoundationMcqs2",
    ()=>sdFoundationMcqs2,
    "sdFoundationModules2",
    ()=>sdFoundationModules2
]);
const S = "sd-s1";
const sdFoundationMcqs2 = [
    {
        id: "sd-f-idempotent",
        kind: "mcq",
        prompt: "An idempotent API operation is one where:",
        options: [
            "it can only be called once",
            "calling it multiple times has the same effect as calling it once",
            "it never modifies data",
            "it always returns a different result"
        ],
        answerIndex: 1,
        explanation: "Idempotency means retries are safe — a duplicate request (from a client retry or network glitch) doesn't double-apply. PUT and DELETE are naturally idempotent; POST usually needs an idempotency key."
    },
    {
        id: "sd-f-pagination",
        kind: "mcq",
        prompt: "For a large, frequently-changing list, cursor (keyset) pagination is preferred over offset pagination because:",
        options: [
            "it is simpler to implement",
            "it stays correct and efficient as items are inserted/deleted, avoiding skipped/duplicated rows",
            "it allows jumping to arbitrary page numbers",
            "it never needs an index"
        ],
        answerIndex: 1,
        explanation: "OFFSET scans and discards rows (slow for deep pages) and shifts when data changes. A cursor anchored to a stable key gives stable, index-friendly paging."
    },
    {
        id: "sd-f-queue-decouple",
        kind: "mcq",
        prompt: "The primary benefit of putting a message queue between a producer and consumer is:",
        options: [
            "stronger consistency",
            "decoupling and buffering — the producer isn't blocked and load spikes are absorbed",
            "lower storage cost",
            "eliminating the need for a database"
        ],
        answerIndex: 1,
        explanation: "A queue lets the producer hand off work and move on; the consumer processes at its own pace, and bursts are smoothed instead of overwhelming downstream services."
    },
    {
        id: "sd-f-delivery",
        kind: "mcq",
        prompt: "Because exactly-once delivery is hard, most queues offer at-least-once. The consumer should therefore:",
        options: [
            "ignore duplicate messages by crashing",
            "be idempotent so reprocessing a duplicate is harmless",
            "process messages out of order",
            "acknowledge before processing"
        ],
        answerIndex: 1,
        explanation: "At-least-once means a message may be redelivered (e.g. after a failed ack). An idempotent consumer — often via a dedupe key — makes that safe."
    },
    {
        id: "sd-f-eventual",
        kind: "mcq",
        prompt: "Eventual consistency means:",
        options: [
            "reads never return stale data",
            "if writes stop, all replicas converge to the same value given enough time",
            "there is only one copy of the data",
            "writes are rejected during partitions"
        ],
        answerIndex: 1,
        explanation: "Replicas may briefly disagree, but absent new writes they converge. It's the AP choice — high availability at the cost of possibly-stale reads."
    },
    {
        id: "sd-f-quorum",
        kind: "mcq",
        prompt: "In a quorum system with N replicas, strong consistency is guaranteed when:",
        options: [
            "R + W > N (read and write quorums overlap)",
            "R = W = 1",
            "R + W = N",
            "N is even"
        ],
        answerIndex: 0,
        explanation: "If the read quorum and write quorum overlap (R + W > N), every read sees at least one replica that has the latest write."
    },
    {
        id: "sd-f-slo",
        kind: "mcq",
        prompt: "An SLO (service level objective) is:",
        options: [
            "a legal contract with financial penalties",
            "an internal target for a reliability metric, e.g. 99.9% of requests under 300 ms",
            "the maximum number of servers",
            "a type of load balancer"
        ],
        answerIndex: 1,
        explanation: "An SLO is the target you hold yourselves to (measured against SLIs). An SLA is the external contract; SLOs are usually stricter to leave headroom."
    },
    {
        id: "sd-f-redundancy",
        kind: "mcq",
        prompt: "Eliminating single points of failure is achieved primarily through:",
        options: [
            "faster CPUs",
            "redundancy — multiple instances across independent failure domains with automatic failover",
            "a bigger cache",
            "stronger passwords"
        ],
        answerIndex: 1,
        explanation: "If any one node/rack/zone can take the system down, it's a SPOF. Redundant instances spread across failure domains, with health checks and failover, keep the system up when one dies."
    }
];
const apiDesignModule = {
    id: "m-sd-api-design",
    stageId: S,
    title: "API Design",
    kind: "lesson",
    summary: "Designing the contract clients depend on — REST vs RPC, idempotency, pagination, versioning, and rate limiting.",
    lessonSections: [
        {
            heading: "The contract comes early",
            body: `In the design framework, the **API** step forces precision: it names exactly what clients can do, in what shape. A clean contract also reveals your data model and access patterns.

**REST** models resources with HTTP verbs and is the ubiquitous default:

\`\`\`text
POST   /v1/urls            create a short link  -> { code }
GET    /v1/urls/{code}     resolve a link       -> 301 redirect
DELETE /v1/urls/{code}     remove a link
\`\`\`

**gRPC** (binary, HTTP/2, schema-first) shines for low-latency internal service-to-service calls; **GraphQL** lets clients fetch exactly the fields they need, useful for varied front-ends. Pick REST for public simplicity, gRPC for internal performance, GraphQL for flexible client queries.`
        },
        {
            heading: "Idempotency, pagination, and errors",
            body: `Three details separate a robust API from a fragile one:

- **Idempotency** — retries are inevitable, so a repeated call must not double-charge or double-create. GET/PUT/DELETE are naturally idempotent; make POST safe with an **idempotency key** the server dedupes on.
- **Pagination** — never return an unbounded list. **Cursor/keyset** pagination (anchor on a stable sort key) stays correct and fast as data changes, unlike \`OFFSET\`, which scans-and-skips and shifts under inserts.
- **Errors & status codes** — use HTTP semantics (4xx client, 5xx server), return structured error bodies, and make failures actionable.`
        },
        {
            heading: "Evolving without breaking",
            body: `APIs are forever, so plan for change. **Versioning** (\`/v1/…\` or headers) lets you ship breaking changes without stranding old clients. Prefer **additive, backward-compatible** changes: add optional fields rather than repurposing existing ones.

Protect the service with **rate limiting** (per client/key) to prevent abuse and preserve fairness, and document limits in response headers. Together — clear resources, idempotent writes, bounded/cursor pagination, versioning, and rate limits — make an API that scales in usage *and* in the number of teams that depend on it.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-idempotent",
        "sd-f-pagination"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const messagingModule = {
    id: "m-sd-messaging",
    stageId: S,
    title: "Async Processing & Messaging",
    kind: "lesson",
    summary: "Queues and pub/sub for decoupling services — delivery guarantees, backpressure, and idempotent consumers.",
    lessonSections: [
        {
            heading: "Why go asynchronous",
            body: `Not every request needs an answer *right now*. Sending a welcome email, transcoding a video, or updating a search index can happen **after** you've told the user "got it." Moving that work off the request path makes the user-facing call fast and resilient.

A **message queue** (SQS, RabbitMQ) sits between a **producer** and one or more **consumers**. The producer enqueues a task and returns immediately; consumers pull and process at their own pace. This buys three things:

- **Decoupling** — producer and consumer scale and fail independently.
- **Buffering** — a traffic spike fills the queue instead of crashing downstream.
- **Retries** — a failed job goes back on the queue (or a dead-letter queue) rather than being lost.`
        },
        {
            heading: "Queues vs. pub/sub, and delivery guarantees",
            body: `A **queue** delivers each message to *one* consumer in a group — good for distributing work. **Pub/sub** (Kafka topics, SNS) fans a message out to *many* independent subscribers — good when several systems react to the same event (order placed → email, analytics, inventory).

**Delivery semantics** matter:

- **At-most-once** — may drop messages (rare).
- **At-least-once** — the common default; a message may be **redelivered**, so consumers must be **idempotent** (dedupe by message id).
- **Exactly-once** — very hard end-to-end; usually approximated with at-least-once + idempotent processing.`
        },
        {
            heading: "Backpressure and ordering",
            body: `When producers outrun consumers, the queue grows. **Backpressure** strategies keep the system healthy: scale consumers out, shed or throttle load, or let the queue absorb the burst if it's temporary. Watch **queue depth** and **consumer lag** as key signals.

**Ordering** is often only guaranteed within a partition/shard (e.g. per-key in Kafka). If global ordering matters, you pay for it in throughput — so design so that only *related* events need order (per user, per entity), and make consumers tolerant of reordering elsewhere.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-queue-decouple",
        "sd-f-delivery"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const consistencyModule = {
    id: "m-sd-consistency",
    stageId: S,
    title: "Consistency & Replication",
    kind: "lesson",
    summary: "How replicas stay in sync — strong vs eventual consistency, quorums, and the read/write tradeoffs.",
    lessonSections: [
        {
            heading: "A spectrum, not a switch",
            body: `Once data lives on more than one node, "is every copy the same right now?" becomes a real question. Consistency is a **spectrum**:

- **Strong consistency** — every read reflects the latest write. Simple to reason about, but needs coordination that costs latency and availability (the CP corner of CAP).
- **Eventual consistency** — replicas may briefly disagree but **converge** once writes stop. High availability and low latency (the AP corner), at the cost of possibly-stale reads.

Between them sit useful middle grounds like **read-your-writes** (you always see your own updates) and **monotonic reads** (you never see time go backwards).`
        },
        {
            heading: "Replication topologies",
            body: `**Leader–follower** (primary–replica) sends all writes to a leader that streams them to followers. Reads can hit followers to scale throughput — but a follower may lag, so those reads can be stale. Failover promotes a follower when the leader dies.

**Multi-leader** and **leaderless** (Dynamo-style) accept writes on multiple nodes for higher availability and write scaling, at the cost of **conflict resolution** (last-write-wins, vector clocks, or CRDTs).

Choose per data type: a bank balance wants strong/leader-based; a "likes" counter is fine eventually consistent.`
        },
        {
            heading: "Quorums",
            body: `Leaderless systems tune consistency with **quorums**. With **N** replicas, a write waits for **W** acks and a read queries **R** replicas. When **R + W > N**, the read and write sets overlap, so every read sees the latest write — strong consistency.

\`\`\`text
N = 3
W = 2, R = 2  ->  R + W = 4 > 3  -> strongly consistent, tolerates 1 node down
W = 1, R = 1  ->  fast, highly available, but reads may be stale
\`\`\`

The knobs let you trade latency and availability against freshness, per operation. That flexibility — picking the guarantee each piece of data actually needs — is the heart of distributed data design.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-eventual",
        "sd-f-quorum"
    ],
    prerequisiteModuleIds: [
        "m-sd-building-blocks"
    ]
};
const reliabilityModule = {
    id: "m-sd-reliability",
    stageId: S,
    title: "Reliability & Observability",
    kind: "lesson",
    summary: "Keeping systems up and knowing when they're not — redundancy, failover, SLAs/SLOs, and the three pillars of observability.",
    lessonSections: [
        {
            heading: "Designing for failure",
            body: `At scale, **failure is normal** — disks die, nodes reboot, networks partition. Reliable systems assume it and degrade gracefully.

- **Eliminate single points of failure** with **redundancy**: run multiple instances across independent **failure domains** (racks, availability zones, regions) with health checks and automatic **failover**.
- **Contain failures** so one bad dependency doesn't cascade: **timeouts**, **retries with backoff + jitter**, **circuit breakers** (stop hammering a sick service), and **bulkheads** (isolate resource pools).
- **Degrade gracefully**: serve stale cache, drop non-essential features, or shed load rather than fall over entirely.`
        },
        {
            heading: "Measuring reliability",
            body: `You can't promise what you don't measure. The vocabulary:

- **SLI** (indicator) — a measured metric, e.g. the fraction of requests under 300 ms.
- **SLO** (objective) — your internal target for an SLI, e.g. 99.9% under 300 ms over 30 days.
- **SLA** (agreement) — the external, contractual promise (usually looser than the SLO to leave headroom).

Availability is often quoted in "nines": **99.9%** ≈ 43 min/month of downtime, **99.99%** ≈ 4 min/month. Each extra nine costs real engineering — pick the level the product actually needs. An **error budget** (1 − SLO) makes the reliability-vs-velocity tradeoff explicit.`
        },
        {
            heading: "The three pillars of observability",
            body: `When something breaks at 3 a.m., observability is how you find out *why*:

- **Logs** — discrete, timestamped events; great for details, expensive at volume.
- **Metrics** — cheap numeric time series (QPS, latency percentiles, error rate, queue depth) for dashboards and alerts.
- **Traces** — follow one request across services to locate the slow or failing hop.

Alert on **symptoms users feel** (error rate, latency) rather than every internal blip, and watch p99 latency, not just averages — the tail is where users hurt. Redundancy keeps you up; observability keeps you honest.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-slo",
        "sd-f-redundancy"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const sdFoundationModules2 = [
    apiDesignModule,
    messagingModule,
    consistencyModule,
    reliabilityModule
];
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
"[project]/src/screens/SdCertification.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SdCertification",
    ()=>SdCertification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/router.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/progressStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$testEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/testEngine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/certification.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
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
;
function isCorrect(q, selected) {
    return selected != null && q.answerIndex === selected;
}
function SdCertification() {
    _s();
    const submitTest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])({
        "SdCertification.useProgressStore[submitTest]": (s)=>s.submitTest
    }["SdCertification.useProgressStore[submitTest]"]);
    const badges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])({
        "SdCertification.useProgressStore[badges]": (s)=>s.progress.badges
    }["SdCertification.useProgressStore[badges]"]);
    const bestBadge = badges.find((b)=>b.moduleId === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_MODULE_ID"]);
    const pool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SdCertification.useMemo[pool]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdExamQuestionIds"].map({
                "SdCertification.useMemo[pool]": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complexityQuestions"][id]
            }["SdCertification.useMemo[pool]"]).filter({
                "SdCertification.useMemo[pool]": (q)=>Boolean(q)
            }["SdCertification.useMemo[pool]"])
    }["SdCertification.useMemo[pool]"], []);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("config");
    const [drawn, setDrawn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const timeLimitMs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_MINUTES"] * 60_000;
    const remainingMs = Math.max(0, timeLimitMs - (now - startTime));
    const finalize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SdCertification.useCallback[finalize]": ()=>{
            const correct = drawn.filter({
                "SdCertification.useCallback[finalize]": (q)=>isCorrect(q, answers[q.id] ?? null)
            }["SdCertification.useCallback[finalize]"]).length;
            const score = drawn.length > 0 ? Math.round(correct / drawn.length * 100) : 0;
            const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierForScore"])(score);
            const config = {
                moduleId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_MODULE_ID"],
                drawRules: {
                    easy: 0,
                    medium: 0,
                    hard: 0
                },
                timeLimitMinutes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_MINUTES"],
                parTimeMinutes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_MINUTES"],
                complexityMcqCount: drawn.length
            };
            const session = {
                id: `sdcert-${Date.now()}`,
                moduleId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_MODULE_ID"],
                config,
                drawnProblemIds: [],
                complexityQuestionIds: drawn.map({
                    "SdCertification.useCallback[finalize]": (q)=>q.id
                }["SdCertification.useCallback[finalize]"]),
                startedAt: new Date(startTime).toISOString(),
                finishedAt: new Date().toISOString(),
                timeLimitMs,
                problemResults: [],
                mcqCorrect: correct,
                scorePercent: score,
                awardedTier: tier ?? undefined
            };
            const outcome = submitTest(session, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_BADGE_ID"]);
            setResult({
                session,
                ...outcome
            });
            setPhase("results");
        }
    }["SdCertification.useCallback[finalize]"], [
        drawn,
        answers,
        startTime,
        timeLimitMs,
        submitTest
    ]);
    const finalizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(finalize);
    finalizeRef.current = finalize;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SdCertification.useEffect": ()=>{
            if (phase !== "running") return;
            const timer = setInterval({
                "SdCertification.useEffect.timer": ()=>{
                    const t = Date.now();
                    setNow(t);
                    if (t - startTime >= timeLimitMs) {
                        clearInterval(timer);
                        finalizeRef.current();
                    }
                }
            }["SdCertification.useEffect.timer"], 1000);
            return ({
                "SdCertification.useEffect": ()=>clearInterval(timer)
            })["SdCertification.useEffect"];
        }
    }["SdCertification.useEffect"], [
        phase,
        startTime,
        timeLimitMs
    ]);
    const start = ()=>{
        const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$testEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawMcqs"])(pool, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_DRAW"]);
        setDrawn(ids.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complexityQuestions"][id]).filter((q)=>Boolean(q)));
        setAnswers({});
        const t = Date.now();
        setStartTime(t);
        setNow(t);
        setResult(null);
        setPhase("running");
    };
    const answeredCount = Object.keys(answers).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/learn",
                className: "text-sm font-medium text-forge-500 hover:underline",
                children: "← Learn"
            }, void 0, false, {
                fileName: "[project]/src/screens/SdCertification.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            phase === "config" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                        title: "System Design Certification",
                        subtitle: `A ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_DRAW"]}-question timed exam (${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_MINUTES"]} min) over the System Design foundations. Earn a tiered badge; your best is always kept.`
                    }, void 0, false, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-sm text-slate-600 dark:text-slate-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_DRAW"]
                                        }, void 0, false, {
                                            fileName: "[project]/src/screens/SdCertification.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this),
                                        " questions drawn from a pool of ",
                                        pool.length,
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/screens/SdCertification.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        "Time limit ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD_CERT_MINUTES"],
                                                " min"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/SdCertification.tsx",
                                            lineNumber: 118,
                                            columnNumber: 30
                                        }, this),
                                        " · auto-submits at time up."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/screens/SdCertification.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Tiers: Bronze ≥60% · Silver ≥75% · Gold ≥90% · Platinum = 100%."
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/SdCertification.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                bestBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "capitalize text-forge-500",
                                    children: [
                                        "Your best so far: ",
                                        bestBadge.tier,
                                        " (",
                                        bestBadge.score,
                                        "%)."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/screens/SdCertification.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/screens/SdCertification.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-sm text-slate-500 dark:text-slate-400",
                        children: "Tip: work the Foundations lessons and a case study or two first — nothing is locked, but you'll score higher."
                    }, void 0, false, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: start,
                        className: "rounded-lg bg-forge-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forge-600",
                        children: "Start exam →"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/SdCertification.tsx",
                lineNumber: 110,
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
                                    "Answered ",
                                    answeredCount,
                                    "/",
                                    drawn.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/SdCertification.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-mono text-lg font-bold tabular-nums", remainingMs < 120_000 ? "text-red-500" : "text-slate-700 dark:text-slate-200"),
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$testEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDuration"])(remainingMs)
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/SdCertification.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: finalize,
                                        className: "rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600",
                                        children: "Submit exam"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/SdCertification.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/SdCertification.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: drawn.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExamCard, {
                                index: i + 1,
                                question: q,
                                selected: answers[q.id] ?? null,
                                onSelect: (idx)=>setAnswers((prev)=>({
                                            ...prev,
                                            [q.id]: idx
                                        }))
                            }, q.id, false, {
                                fileName: "[project]/src/screens/SdCertification.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/SdCertification.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            phase === "results" && result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CertResults, {
                result: result,
                onRetake: start
            }, void 0, false, {
                fileName: "[project]/src/screens/SdCertification.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/SdCertification.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(SdCertification, "ZqAaKV4eC8f+s9vGxAI4QinlNVs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"]
    ];
});
_c = SdCertification;
function ExamCard({ index, question, selected, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 text-sm font-medium text-slate-400",
                children: [
                    "Q",
                    index
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/SdCertification.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-3 text-sm text-slate-700 dark:text-slate-200",
                children: question.prompt
            }, void 0, false, {
                fileName: "[project]/src/screens/SdCertification.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: (question.options ?? []).map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onSelect(i),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition", selected === i ? "border-forge-400 bg-forge-50 dark:border-forge-700 dark:bg-forge-900/20" : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/50"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-4 w-4 items-center justify-center rounded-full border text-[10px]", selected === i ? "border-forge-500 bg-forge-500 text-white" : "border-slate-400"),
                                children: selected === i ? "✓" : ""
                            }, void 0, false, {
                                fileName: "[project]/src/screens/SdCertification.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: opt
                            }, void 0, false, {
                                fileName: "[project]/src/screens/SdCertification.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/screens/SdCertification.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/SdCertification.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_c1 = ExamCard;
const TIER_STYLE = {
    bronze: "bg-amber-700",
    silver: "bg-slate-400",
    gold: "bg-yellow-500",
    platinum: "bg-cyan-400"
};
function CertResults({ result, onRetake }) {
    const { session, isNewBest, xpAwarded } = result;
    const tier = session.awardedTier;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "Certification exam complete",
                subtitle: "Your best tier is always kept."
            }, void 0, false, {
                fileName: "[project]/src/screens/SdCertification.tsx",
                lineNumber: 245,
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
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: tier ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold capitalize text-white", TIER_STYLE[tier] ?? "bg-slate-500"),
                            children: [
                                "★ Certified — ",
                                tier
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/screens/SdCertification.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-slate-500 dark:text-slate-400",
                            children: "Not certified yet — reach 60% for Bronze."
                        }, void 0, false, {
                            fileName: "[project]/src/screens/SdCertification.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    isNewBest && tier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm font-medium text-emerald-500",
                        children: [
                            "New best! +",
                            xpAwarded,
                            " XP"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 264,
                        columnNumber: 31
                    }, this),
                    !isNewBest && tier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-slate-400",
                        children: "Didn't beat your previous best — no additional XP."
                    }, void 0, false, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-sm text-slate-400",
                        children: [
                            session.mcqCorrect,
                            "/",
                            session.complexityQuestionIds.length,
                            " correct"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/SdCertification.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRetake,
                        className: "rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-600",
                        children: "Retake (fresh draw)"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/badges",
                        className: "text-sm font-medium text-forge-500 hover:underline",
                        children: "Badge gallery"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/cases",
                        className: "text-sm font-medium text-forge-500 hover:underline",
                        children: "Case studies"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/SdCertification.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/SdCertification.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/SdCertification.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
_c2 = CertResults;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SdCertification");
__turbopack_context__.k.register(_c1, "ExamCard");
__turbopack_context__.k.register(_c2, "CertResults");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/screens/SdCertification.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/screens/SdCertification.tsx [app-client] (ecmascript)"));
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

//# sourceMappingURL=src_1humy0f._.js.map