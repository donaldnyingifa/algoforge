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
"[project]/src/components/MarkdownView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkdownView",
    ()=>MarkdownView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RunnableSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RunnableSnippet.tsx [app-client] (ecmascript)");
;
;
;
;
function MarkdownView({ source, runnable = false }) {
    const components = {
        // Unwrap <pre> so our custom code renderer controls block layout.
        pre: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/MarkdownView.tsx",
                lineNumber: 20,
                columnNumber: 28
            }, this),
        code: ({ className, children })=>{
            const raw = String(children ?? "").replace(/\n$/, "");
            const match = /language-([\w-]+)/.exec(className ?? "");
            const lang = match?.[1];
            if (!lang) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "inline-code",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/MarkdownView.tsx",
                    lineNumber: 27,
                    columnNumber: 16
                }, this);
            }
            if (runnable && (lang === "js" || lang === "ts")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RunnableSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunnableSnippet"], {
                    initialCode: raw,
                    language: lang
                }, void 0, false, {
                    fileName: "[project]/src/components/MarkdownView.tsx",
                    lineNumber: 30,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "static-block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: raw
                }, void 0, false, {
                    fileName: "[project]/src/components/MarkdownView.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MarkdownView.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md-body",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
            remarkPlugins: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ],
            components: components,
            children: source
        }, void 0, false, {
            fileName: "[project]/src/components/MarkdownView.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MarkdownView.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = MarkdownView;
var _c;
__turbopack_context__.k.register(_c, "MarkdownView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ResultsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResultsPanel",
    ()=>ResultsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
;
function ResultsPanel({ outcome, running }) {
    if (running) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelShell, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-sm text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
                        fileName: "[project]/src/components/ResultsPanel.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    " Running your code…"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResultsPanel.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ResultsPanel.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    if (!outcome) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelShell, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-400",
                children: "Run your code to see console output and test verdicts here."
            }, void 0, false, {
                fileName: "[project]/src/components/ResultsPanel.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ResultsPanel.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelShell, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBanner, {
                outcome: outcome
            }, void 0, false, {
                fileName: "[project]/src/components/ResultsPanel.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            outcome.results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryLine, {
                        outcome: outcome
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResultsPanel.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    outcome.results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border p-3 text-sm", r.passed ? "border-emerald-300/60 bg-emerald-50 dark:border-emerald-900/60 dark:bg-emerald-950/30" : "border-red-300/60 bg-red-50 dark:border-red-900/60 dark:bg-red-950/30"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: [
                                                r.passed ? "✅" : "❌",
                                                " ",
                                                r.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ResultsPanel.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400",
                                            children: [
                                                r.runtimeMs.toFixed(2),
                                                " ms"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ResultsPanel.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ResultsPanel.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                !r.passed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 space-y-1 font-mono text-xs",
                                    children: r.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-red-600 dark:text-red-400",
                                        children: [
                                            "threw: ",
                                            r.error
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ResultsPanel.tsx",
                                        lineNumber: 58,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Diff, {
                                                label: "expected",
                                                value: r.expected,
                                                tone: "ok"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResultsPanel.tsx",
                                                lineNumber: 61,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Diff, {
                                                label: "received",
                                                value: r.received,
                                                tone: "bad"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResultsPanel.tsx",
                                                lineNumber: 62,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ResultsPanel.tsx",
                                        lineNumber: 60,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ResultsPanel.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/ResultsPanel.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResultsPanel.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            outcome.console.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400",
                        children: "Console"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResultsPanel.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-100",
                        children: outcome.console.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("whitespace-pre-wrap", line.level === "warn" && "text-amber-300", line.level === "error" && "text-red-400"),
                                children: line.text
                            }, i, false, {
                                fileName: "[project]/src/components/ResultsPanel.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResultsPanel.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResultsPanel.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            outcome.status === "ok" && outcome.results.length === 0 && outcome.console.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-sm text-slate-400",
                children: [
                    "Finished with no output in ",
                    outcome.totalRuntimeMs.toFixed(1),
                    " ms."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResultsPanel.tsx",
                lineNumber: 97,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ResultsPanel.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = ResultsPanel;
function PanelShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ResultsPanel.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c1 = PanelShell;
function StatusBanner({ outcome }) {
    if (outcome.status === "timeout") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
            tone: "bad",
            children: [
                "⏱ ",
                outcome.error?.message
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ResultsPanel.tsx",
            lineNumber: 115,
            columnNumber: 12
        }, this);
    }
    if (outcome.status === "compileError") {
        const at = outcome.error?.line != null ? ` (line ${outcome.error.line}${outcome.error.column != null ? `, col ${outcome.error.column}` : ""})` : "";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
            tone: "bad",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: [
                        "Compile error",
                        at,
                        ":"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ResultsPanel.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono",
                    children: outcome.error?.message
                }, void 0, false, {
                    fileName: "[project]/src/components/ResultsPanel.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ResultsPanel.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, this);
    }
    if (outcome.status === "runtimeError") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
            tone: "bad",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: "Runtime error:"
                }, void 0, false, {
                    fileName: "[project]/src/components/ResultsPanel.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono",
                    children: outcome.error?.message
                }, void 0, false, {
                    fileName: "[project]/src/components/ResultsPanel.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ResultsPanel.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this);
    }
    return null;
}
_c2 = StatusBanner;
function SummaryLine({ outcome }) {
    const passed = outcome.results.filter((r)=>r.passed).length;
    const total = outcome.results.length;
    const all = passed === total;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg px-3 py-2 text-sm font-medium", all ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300" : "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300"),
        children: [
            passed,
            " / ",
            total,
            " tests passed"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ResultsPanel.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c3 = SummaryLine;
function Diff({ label, value, tone }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-16 shrink-0 text-slate-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ResultsPanel.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: tone === "ok" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/ResultsPanel.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ResultsPanel.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c4 = Diff;
function Banner({ tone, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg px-3 py-2 text-sm", tone === "bad" && "bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-300"),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ResultsPanel.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c5 = Banner;
function Spinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-slate-400 border-t-transparent"
    }, void 0, false, {
        fileName: "[project]/src/components/ResultsPanel.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c6 = Spinner;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "ResultsPanel");
__turbopack_context__.k.register(_c1, "PanelShell");
__turbopack_context__.k.register(_c2, "StatusBanner");
__turbopack_context__.k.register(_c3, "SummaryLine");
__turbopack_context__.k.register(_c4, "Diff");
__turbopack_context__.k.register(_c5, "Banner");
__turbopack_context__.k.register(_c6, "Spinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RunnableSnippet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RunnableSnippet",
    ()=>RunnableSnippet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodeEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$useCodeRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/runner/useCodeRunner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function RunnableSnippet({ initialCode, language }) {
    _s();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCode);
    const { running, outcome, run } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$useCodeRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCodeRunner"])();
    const lineCount = code.split("\n").length;
    const height = Math.min(360, Math.max(96, lineCount * 20 + 28));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-800 dark:bg-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-semibold uppercase tracking-wide text-slate-400",
                        children: [
                            language,
                            " · editable"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RunnableSnippet.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>void run({
                                code,
                                language,
                                mode: "scratch"
                            }),
                        disabled: running,
                        className: "rounded-md bg-forge-500 px-2.5 py-1 text-xs font-semibold text-white transition hover:bg-forge-600 disabled:opacity-60",
                        children: running ? "Running…" : "Run ▶"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RunnableSnippet.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RunnableSnippet.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height
                },
                className: "bg-white dark:bg-[#1e1e1e]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeEditor"], {
                    value: code,
                    onChange: setCode,
                    language: language,
                    fontSize: 13
                }, void 0, false, {
                    fileName: "[project]/src/components/RunnableSnippet.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RunnableSnippet.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            outcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-200 bg-slate-950 px-3 py-2 font-mono text-xs text-slate-100 dark:border-slate-800",
                children: outcome.status === "compileError" || outcome.status === "runtimeError" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-400",
                    children: [
                        outcome.status === "compileError" && outcome.error?.line != null ? `Compile error (line ${outcome.error.line}): ` : "Error: ",
                        outcome.error?.message
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RunnableSnippet.tsx",
                    lineNumber: 47,
                    columnNumber: 13
                }, this) : outcome.status === "timeout" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-400",
                    children: [
                        "⏱ ",
                        outcome.error?.message
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RunnableSnippet.tsx",
                    lineNumber: 54,
                    columnNumber: 13
                }, this) : outcome.console.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-slate-400",
                    children: [
                        "(no console output · ",
                        outcome.totalRuntimeMs.toFixed(1),
                        " ms)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RunnableSnippet.tsx",
                    lineNumber: 56,
                    columnNumber: 13
                }, this) : outcome.console.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("whitespace-pre-wrap", l.level === "warn" && "text-amber-300", l.level === "error" && "text-red-400"),
                        children: l.text
                    }, i, false, {
                        fileName: "[project]/src/components/RunnableSnippet.tsx",
                        lineNumber: 61,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/RunnableSnippet.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RunnableSnippet.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(RunnableSnippet, "XPcnVOnh10/WHhCk9mhaN2rQQEI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$useCodeRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCodeRunner"]
    ];
});
_c = RunnableSnippet;
var _c;
__turbopack_context__.k.register(_c, "RunnableSnippet");
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
"[project]/src/lib/walkthrough.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFallbackWalkthrough",
    ()=>buildFallbackWalkthrough
]);
const MAX_CONTEXT_LENGTH = 180;
function compact(text, maxLength = MAX_CONTEXT_LENGTH) {
    const normalized = text.replace(/`/g, "").replace(/\s+/g, " ").trim();
    if (normalized.length <= maxLength) return normalized;
    const shortened = normalized.slice(0, maxLength - 1);
    const lastSpace = shortened.lastIndexOf(" ");
    const end = lastSpace > maxLength / 2 ? lastSpace : shortened.length;
    return `${shortened.slice(0, end).trimEnd()}…`;
}
function normalizedForComparison(text) {
    return text.replace(/[`*_]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function repeatsHint(body, hints) {
    const normalizedBody = normalizedForComparison(body);
    return hints.some((hint)=>{
        const normalizedHint = normalizedForComparison(hint);
        return normalizedHint.length > 0 && normalizedBody.includes(normalizedHint);
    });
}
function withoutHintEcho(body, hints, safeBody) {
    if (!repeatsHint(body, hints)) return body;
    return repeatsHint(safeBody, hints) ? "Turn the stated requirement into a small sequence of decisions, and verify each decision against the contract before implementing it." : safeBody;
}
function contractTarget(judgeType) {
    if (judgeType === "mutateArgument") {
        return "change the first input in place so its final state matches the requested result";
    }
    if (judgeType === "orderInsensitiveArray") {
        return "return every required item; equivalent result orders are accepted";
    }
    return "return the result described by the problem for the supplied inputs";
}
function timeRank(complexity) {
    const value = complexity.toLowerCase().replace(/[\s_{}]/g, "").replace(/²/g, "^2").replace(/³/g, "^3").replace(/ⁿ/g, "^n");
    if (/n!/.test(value)) return 90;
    if (/\^n|2\^|3\^|exponential/.test(value)) return 80;
    if (/\^3|n·n·n|n\*n\*n/.test(value)) return 60;
    if (/\^2|n²|v²|n·n|n\*n|n·k|n\*k/.test(value)) return 50;
    if (/nlog|logn.*n|n.*log/.test(value)) return 40;
    if (/sqrt|√/.test(value)) return 25;
    if (/log/.test(value)) return 20;
    if (/o\(1\)/.test(value)) return 10;
    return 30;
}
function spaceRank(complexity) {
    return /o\(1\)/i.test(complexity.replace(/\s+/g, "")) ? 0 : 1;
}
function primarySolution(solutions) {
    return solutions.reduce((best, solution)=>{
        if (!best) return solution;
        const rankDelta = timeRank(solution.timeComplexity) - timeRank(best.timeComplexity);
        if (rankDelta < 0) return solution;
        if (rankDelta === 0 && spaceRank(solution.spaceComplexity) < spaceRank(best.spaceComplexity)) {
            return solution;
        }
        return best;
    }, undefined);
}
function strategyFallback(solution) {
    const source = `${solution?.label ?? ""} ${solution?.approach ?? ""}`.toLowerCase();
    if (/binary search/.test(source)) {
        return "Define the ordered search space and the invariant that lets each decision discard an impossible half.";
    }
    if (/two[- ]?pointer|slow \/ fast|fast \/ slow/.test(source)) {
        return "Give each pointer one responsibility, then state exactly which observation moves each pointer without revisiting discarded work.";
    }
    if (/sliding window|window/.test(source)) {
        return "Describe what the current window represents, when it expands, and the condition that makes it shrink.";
    }
    if (/dynamic programming|memo|tabulation|kadane|rolling/.test(source)) {
        return "Define the smallest reusable subproblem, its base cases, and the transition that combines already-known results.";
    }
    if (/breadth-first|\bbfs\b/.test(source)) {
        return "Process one breadth-first layer at a time and mark work when it is scheduled so no state is queued twice.";
    }
    if (/depth-first|\bdfs\b|recurs/.test(source)) {
        return "Define what one depth-first call is responsible for, its stopping case, and how child results combine.";
    }
    if (/heap|priority queue/.test(source)) {
        return "Keep the next most useful candidate at the top of a heap and state what is added or removed after each choice.";
    }
    if (/backtrack|subset|permutation|combination/.test(source)) {
        return "Model each choice, recurse on the smaller remaining decision, and undo mutable state before exploring the next branch.";
    }
    if (/union[- ]?find|disjoint/.test(source)) {
        return "Represent each component by a root, merge roots when a connection appears, and query roots for connectivity.";
    }
    if (/topological|indegree/.test(source)) {
        return "Track unresolved prerequisites, release a state when its count reaches zero, and detect whether every state was released.";
    }
    if (/shortest|dijkstra/.test(source)) {
        return "Maintain the best distance known so far and expand the unsettled state with the strongest current guarantee.";
    }
    if (/trie|prefix/.test(source)) {
        return "Store or reuse the information associated with each prefix so later work can build on earlier prefixes.";
    }
    if (/stack|monotonic/.test(source)) {
        return "State what the stack represents and remove entries as soon as the current value resolves or invalidates them.";
    }
    if (/sort|interval|merge/.test(source)) {
        return "Put candidates in an order where the next decision depends only on the state already summarized.";
    }
    if (/set|map|hash|count|frequency/.test(source)) {
        return "Record only the lookup or count information future decisions need, updating it once per relevant input item.";
    }
    if (/greedy/.test(source)) {
        return "Name the locally best safe choice and the invariant proving that choice cannot make the remaining answer worse.";
    }
    return "Name the state that changes, the invariant it must preserve, and the condition that finishes the process.";
}
function approachBody(solution) {
    if (!solution) {
        return "Choose one piece of state that summarizes completed work, then update it in a consistent order until the contract is satisfied.";
    }
    const approach = compact(solution.approach);
    const looksLikeCode = /[{};]|=>|\b(function|const|let|var)\b/.test(approach);
    const explanation = looksLikeCode || !approach ? strategyFallback(solution) : approach;
    return `Use **${compact(solution.label, 70)}** as the strategy spine. ${explanation} Before coding, identify the state, invariant, and stopping condition that make this strategy correct.`;
}
function exampleBody(example) {
    if (!example) {
        return "Invent the smallest valid input and one representative input. For each, write the expected result and the decisions that must lead there before implementing anything.";
    }
    const input = compact(example.input, 110);
    const output = compact(example.output, 110);
    const explanation = example.explanation ? ` The example notes that ${compact(example.explanation, 120)}` : "";
    return `Dry-run the first example: start from \`${input}\` and make sure the plan reaches \`${output}\`.${explanation} Track the information needed before each decision so the same reasoning generalizes.`;
}
function constraintBody(constraints) {
    const constraint = constraints[0] ? compact(constraints[0], 130) : "the smallest valid input";
    const allConstraints = constraints.join(" ").toLowerCase();
    const checks = [];
    if (/0\s*<=|empty|length can be 0/.test(allConstraints)) checks.push("empty input");
    if (/negative|-[0-9]/.test(allConstraints)) checks.push("negative values");
    if (/distinct|duplicate|unique/.test(allConstraints)) checks.push("duplicate handling");
    if (/sorted|ascending|descending/.test(allConstraints)) checks.push("the ordering guarantee");
    if (/\bk\b|target|range|limit/.test(allConstraints)) checks.push("parameter extremes");
    const checklist = checks.length > 0 ? checks.slice(0, 3).join(", ") : "minimum and maximum valid sizes";
    return `Use this boundary as a design guardrail: **${constraint}**. Check ${checklist} before relying on the main strategy, and decide the expected result for each case.`;
}
function budgetBody(solution) {
    if (!solution) {
        return "Count how often the plan revisits each input item and list every growing data structure. Tighten either one if it exceeds the problem's stated limits.";
    }
    return `Aim for **${compact(solution.timeComplexity, 45)} time** and **${compact(solution.spaceComplexity, 45)} auxiliary space**. Confirm that every scan, nested operation, and stored structure fits those targets before revealing code.`;
}
function buildFallbackWalkthrough(context) {
    const solution = primarySolution(context.solutions);
    const contract = `For **${compact(context.title, 90)}**, \`${compact(context.functionName, 70)}\` must ${contractTarget(context.judgeType)}. Treat that observable result as the finish line, independent of implementation details.`;
    const strategy = approachBody(solution);
    return [
        {
            title: "Frame the contract",
            body: withoutHintEcho(contract, context.hints, "State the required input-to-output behavior and the exact result the judge will observe before choosing an algorithm.")
        },
        {
            title: "Dry-run a concrete case",
            body: withoutHintEcho(exampleBody(context.examples[0]), context.hints, "Trace a representative example from its starting data to its expected result, recording the information needed at each decision.")
        },
        {
            title: "Choose the strategy invariant",
            body: withoutHintEcho(strategy, context.hints, strategyFallback(solution))
        },
        {
            title: "Plan boundary behavior",
            body: withoutHintEcho(constraintBody(context.constraints), context.hints, "List the smallest, largest, and structurally unusual valid inputs, then decide what the strategy should do for each one.")
        },
        {
            title: "Check the efficiency budget",
            body: withoutHintEcho(budgetBody(solution), context.hints, "Count input visits and growing data structures, then confirm both stay within the required time and space limits.")
        }
    ];
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
"[project]/src/screens/Problem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Problem",
    ()=>Problem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/router.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarkdownView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MarkdownView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodeEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResultsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$useCodeRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/runner/useCodeRunner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/progressStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$draftStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/draftStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$walkthrough$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/walkthrough.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
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
;
function Problem() {
    _s();
    const { slug = "" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const problem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblemBySlug"])(slug);
    if (!problem) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                    title: "Problem not found",
                    subtitle: "This problem doesn't exist."
                }, void 0, false, {
                    fileName: "[project]/src/screens/Problem.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                    to: "/learn",
                    className: "text-sm font-medium text-forge-500 hover:underline",
                    children: "← Back to Learn"
                }, void 0, false, {
                    fileName: "[project]/src/screens/Problem.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/screens/Problem.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    // Key by id so all editor/hint/solution state resets between problems.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProblemWorkspace, {
        problem: problem
    }, problem.id, false, {
        fileName: "[project]/src/screens/Problem.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_s(Problem, "pGE/V9m9fRVUFfkGSyLl5mZ52SQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = Problem;
function ProblemWorkspace({ problem }) {
    _s1();
    const preferred = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])({
        "ProblemWorkspace.useProgressStore[preferred]": (s)=>s.progress.settings.preferredLanguage
    }["ProblemWorkspace.useProgressStore[preferred]"]);
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])({
        "ProblemWorkspace.useProgressStore[status]": (s)=>s.progress.problemStats[problem.id]?.status ?? "unattempted"
    }["ProblemWorkspace.useProgressStore[status]"]);
    const logAttempt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])({
        "ProblemWorkspace.useProgressStore[logAttempt]": (s)=>s.logAttempt
    }["ProblemWorkspace.useProgressStore[logAttempt]"]);
    const solveProblem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])({
        "ProblemWorkspace.useProgressStore[solveProblem]": (s)=>s.solveProblem
    }["ProblemWorkspace.useProgressStore[solveProblem]"]);
    const addHintUsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"])({
        "ProblemWorkspace.useProgressStore[addHintUsed]": (s)=>s.addHintUsed
    }["ProblemWorkspace.useProgressStore[addHintUsed]"]);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preferred);
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(problem.starterCode[preferred]);
    const [revealedHints, setRevealedHints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gaveUp, setGaveUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { running, outcome, run } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$useCodeRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCodeRunner"])();
    const loadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const checkpointRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const solved = status === "solved";
    const solutionsUnlocked = solved || gaveUp;
    const walkthrough = problem.walkthrough?.length ? problem.walkthrough : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$walkthrough$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFallbackWalkthrough"])(problem);
    // Load the saved draft for this problem+language (falls back to starter).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProblemWorkspace.useEffect": ()=>{
            let active = true;
            loadedRef.current = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$draftStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDraft"])(problem.id, language).then({
                "ProblemWorkspace.useEffect": (draft)=>{
                    if (!active) return;
                    setCode(draft ?? problem.starterCode[language]);
                    loadedRef.current = true;
                }
            }["ProblemWorkspace.useEffect"]);
            return ({
                "ProblemWorkspace.useEffect": ()=>{
                    active = false;
                }
            })["ProblemWorkspace.useEffect"];
        }
    }["ProblemWorkspace.useEffect"], [
        problem.id,
        language,
        problem.starterCode
    ]);
    // Debounced autosave.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProblemWorkspace.useEffect": ()=>{
            if (!loadedRef.current) return;
            const t = setTimeout({
                "ProblemWorkspace.useEffect.t": ()=>void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$draftStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDraft"])(problem.id, language, code)
            }["ProblemWorkspace.useEffect.t"], 400);
            return ({
                "ProblemWorkspace.useEffect": ()=>clearTimeout(t)
            })["ProblemWorkspace.useEffect"];
        }
    }["ProblemWorkspace.useEffect"], [
        code,
        language,
        problem.id
    ]);
    const takeElapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProblemWorkspace.useCallback[takeElapsed]": ()=>{
            const now = Date.now();
            const delta = now - checkpointRef.current;
            checkpointRef.current = now;
            return delta;
        }
    }["ProblemWorkspace.useCallback[takeElapsed]"], []);
    const switchLanguage = (next)=>{
        if (next === language) return;
        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$draftStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDraft"])(problem.id, language, code);
        setLanguage(next);
    };
    const doRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProblemWorkspace.useCallback[doRun]": async ()=>{
            logAttempt(problem.id, takeElapsed());
            await run({
                code,
                language,
                mode: "tests",
                functionName: problem.functionName,
                judgeType: problem.judgeType,
                tests: problem.visibleTests
            });
        }
    }["ProblemWorkspace.useCallback[doRun]"], [
        run,
        code,
        language,
        problem,
        logAttempt,
        takeElapsed
    ]);
    const doSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProblemWorkspace.useCallback[doSubmit]": async ()=>{
            const elapsed = takeElapsed();
            const allTests = [
                ...problem.visibleTests,
                ...problem.hiddenTests
            ];
            const res = await run({
                code,
                language,
                mode: "tests",
                functionName: problem.functionName,
                judgeType: problem.judgeType,
                tests: allTests
            });
            const didSolve = res.status === "ok" && res.results.length > 0 && res.results.every({
                "ProblemWorkspace.useCallback[doSubmit]": (r)=>r.passed
            }["ProblemWorkspace.useCallback[doSubmit]"]);
            if (didSolve) solveProblem(problem.id, elapsed, problem.xp);
            else logAttempt(problem.id, elapsed);
        }
    }["ProblemWorkspace.useCallback[doSubmit]"], [
        run,
        code,
        language,
        problem,
        solveProblem,
        logAttempt,
        takeElapsed
    ]);
    // Cmd/Ctrl+Enter = Run, Cmd/Ctrl+Shift+Enter = Submit.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProblemWorkspace.useEffect": ()=>{
            const onKey = {
                "ProblemWorkspace.useEffect.onKey": (e)=>{
                    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                        e.preventDefault();
                        if (e.shiftKey) void doSubmit();
                        else void doRun();
                    }
                }
            }["ProblemWorkspace.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "ProblemWorkspace.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["ProblemWorkspace.useEffect"];
        }
    }["ProblemWorkspace.useEffect"], [
        doRun,
        doSubmit
    ]);
    const revealNextHint = ()=>{
        if (revealedHints >= problem.hints.length) return;
        addHintUsed(problem.id);
        setRevealedHints((n)=>n + 1);
    };
    const resetToStarter = ()=>{
        setCode(problem.starterCode[language]);
        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$draftStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearDraft"])(problem.id, language);
    };
    const focusEditor = ()=>{
        editorRef.current?.focus();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/learn",
                className: "text-sm font-medium text-forge-500 hover:underline",
                children: "← Learn"
            }, void 0, false, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 mt-1 flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold tracking-tight",
                        children: problem.title
                    }, void 0, false, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DifficultyBadge"], {
                        difficulty: problem.difficulty
                    }, void 0, false, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-400",
                        children: [
                            "+",
                            problem.xp,
                            " XP"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    solved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
                        children: "✓ Solved"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarkdownView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownView"], {
                                        source: problem.statement
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-2 mt-5 text-sm font-semibold uppercase tracking-wide text-slate-400",
                                        children: "Examples"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: problem.examples.map((ex, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg bg-slate-50 p-3 font-mono text-xs dark:bg-slate-800/60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400",
                                                                children: "input: "
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/screens/Problem.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 21
                                                            }, this),
                                                            ex.input
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/screens/Problem.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400",
                                                                children: "output: "
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/screens/Problem.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 21
                                                            }, this),
                                                            ex.output
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/screens/Problem.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    ex.explanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 font-sans text-slate-500 dark:text-slate-400",
                                                        children: ex.explanation
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/screens/Problem.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/screens/Problem.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-2 mt-5 text-sm font-semibold uppercase tracking-wide text-slate-400",
                                        children: "Constraints"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300",
                                        children: problem.constraints.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "font-mono text-xs",
                                                children: c
                                            }, i, false, {
                                                fileName: "[project]/src/screens/Problem.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HintsDrawer, {
                                total: problem.hints.length,
                                revealed: revealedHints,
                                hints: problem.hints,
                                onReveal: revealNextHint
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            walkthrough.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalkthroughCard, {
                                steps: walkthrough,
                                unlocked: revealedHints === problem.hints.length,
                                onTryIt: focusEditor,
                                resetKey: problem.id
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SolutionsCard, {
                                problem: problem,
                                unlocked: solutionsUnlocked,
                                onGiveUp: ()=>setGaveUp(true)
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700",
                                        role: "group",
                                        "aria-label": "Editor language",
                                        children: [
                                            "js",
                                            "ts"
                                        ].map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>switchLanguage(lang),
                                                "aria-pressed": language === lang,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 text-xs font-semibold uppercase transition", language === lang ? "bg-forge-500 text-white" : "bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"),
                                                children: lang
                                            }, lang, false, {
                                                fileName: "[project]/src/screens/Problem.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: resetToStarter,
                                        className: "text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                                        children: "Reset to starter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[340px] overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeEditor"], {
                                    value: code,
                                    onChange: setCode,
                                    language: language,
                                    onMount: (editor)=>{
                                        editorRef.current = editor;
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/Problem.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void doRun(),
                                        disabled: running,
                                        className: "rounded-lg border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",
                                        children: running ? "Running…" : "Run"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void doSubmit(),
                                        disabled: running,
                                        className: "rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600 disabled:opacity-60",
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: [
                                            "Run checks ",
                                            problem.visibleTests.length,
                                            " visible · Submit adds",
                                            " ",
                                            problem.hiddenTests.length,
                                            " hidden"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[280px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResultsPanel"], {
                                    outcome: outcome,
                                    running: running
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/Problem.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/Problem.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s1(ProblemWorkspace, "JTQSv40yy7QCwldoivfeWdongPM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$progressStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$useCodeRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCodeRunner"]
    ];
});
_c1 = ProblemWorkspace;
function HintsDrawer({ total, revealed, hints, onReveal }) {
    const labels = [
        "Nudge",
        "Approach",
        "Pseudocode"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold uppercase tracking-wide text-slate-400",
                        children: "Hints"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-400",
                        children: [
                            revealed,
                            "/",
                            total,
                            " revealed"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: hints.slice(0, revealed).map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-800/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2 text-[11px] font-semibold uppercase text-forge-500",
                                children: labels[i] ?? `Hint ${i + 1}`
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            h
                        ]
                    }, i, true, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            revealed < total && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onReveal,
                className: "mt-3 text-sm font-medium text-forge-500 hover:underline",
                children: [
                    "Reveal ",
                    revealed === 0 ? "a hint" : "the next hint",
                    " →"
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 340,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/Problem.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, this);
}
_c2 = HintsDrawer;
function WalkthroughCard({ steps, unlocked, onTryIt, resetKey }) {
    _s2();
    const [revealedSteps, setRevealedSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const focusTryAfterRevealRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const tryButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Route changes reuse this component, so a new problem must begin at step one.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalkthroughCard.useEffect": ()=>{
            setRevealedSteps(1);
            focusTryAfterRevealRef.current = false;
        }
    }["WalkthroughCard.useEffect"], [
        resetKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalkthroughCard.useEffect": ()=>{
            if (!focusTryAfterRevealRef.current || revealedSteps < steps.length) return;
            focusTryAfterRevealRef.current = false;
            tryButtonRef.current?.focus();
        }
    }["WalkthroughCard.useEffect"], [
        revealedSteps,
        steps.length
    ]);
    const revealNextStep = ()=>{
        const nextCount = Math.min(revealedSteps + 1, steps.length);
        focusTryAfterRevealRef.current = nextCount === steps.length;
        setRevealedSteps(nextCount);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold uppercase tracking-wide text-slate-400",
                                children: "How to solve it"
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-slate-500 dark:text-slate-400",
                                children: "A code-free implementation guide."
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    unlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-400",
                        "aria-live": "polite",
                        "aria-atomic": "true",
                        children: [
                            Math.min(revealedSteps, steps.length),
                            "/",
                            steps.length,
                            " steps"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            !unlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40",
                children: "Reveal all hints to unlock the step-by-step guide. It explains the approach without showing solution code."
            }, void 0, false, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 404,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    steps.slice(0, revealedSteps).map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-slate-50 p-3 dark:bg-slate-800/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-5 w-5 items-center justify-center rounded-full bg-forge-100 text-[11px] font-bold text-forge-600 dark:bg-forge-950/60 dark:text-forge-300",
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/screens/Problem.tsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold",
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/screens/Problem.tsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/screens/Problem.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-slate-600 dark:text-slate-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarkdownView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownView"], {
                                        source: step.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 422,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/Problem.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${index}-${step.title}`, true, {
                            fileName: "[project]/src/screens/Problem.tsx",
                            lineNumber: 411,
                            columnNumber: 13
                        }, this)),
                    revealedSteps < steps.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: revealNextStep,
                        className: "text-sm font-medium text-forge-500 hover:underline",
                        children: "Reveal the next step →"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 427,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3 rounded-lg border border-forge-200 bg-forge-50 p-3 dark:border-forge-900/70 dark:bg-forge-950/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-forge-800 dark:text-forge-200",
                                children: "You have the plan — try implementing it before revealing a solution."
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 436,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: tryButtonRef,
                                type: "button",
                                onClick: onTryIt,
                                className: "shrink-0 text-sm font-semibold text-forge-600 hover:underline dark:text-forge-300",
                                children: "Try it in the editor →"
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 439,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 435,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 409,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/Problem.tsx",
        lineNumber: 386,
        columnNumber: 5
    }, this);
}
_s2(WalkthroughCard, "ZdHrZxBbm9SUmXLTEDtfU6+EHfc=");
_c3 = WalkthroughCard;
function SolutionsCard({ problem, unlocked, onGiveUp }) {
    _s3();
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("js");
    const [codeStyle, setCodeStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("standard");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400",
                children: "Solutions"
            }, void 0, false, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 469,
                columnNumber: 7
            }, this),
            !unlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Solutions unlock once you solve the problem."
                    }, void 0, false, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onGiveUp,
                        className: "mt-2 text-xs font-medium text-slate-400 underline underline-offset-2 hover:text-slate-600 dark:hover:text-slate-200",
                        children: "Give up and reveal solutions"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 475,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 473,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700",
                                role: "group",
                                "aria-label": "Solution language",
                                children: [
                                    "js",
                                    "ts"
                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setLang(l),
                                        "aria-pressed": lang === l,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 text-xs font-semibold uppercase transition", lang === l ? "bg-forge-500 text-white" : "bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"),
                                        children: l
                                    }, l, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 492,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 486,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700",
                                role: "group",
                                "aria-label": "Solution code detail",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setCodeStyle("standard"),
                                        "aria-pressed": codeStyle === "standard",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 text-xs font-semibold transition", codeStyle === "standard" ? "bg-forge-500 text-white" : "bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"),
                                        children: "Code"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setCodeStyle("commented"),
                                        "aria-pressed": codeStyle === "commented",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 text-xs font-semibold transition", codeStyle === "commented" ? "bg-forge-500 text-white" : "bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"),
                                        children: "Fully commented"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 526,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/Problem.tsx",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/Problem.tsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this),
                    problem.solutions.map((sol, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: sol.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/screens/Problem.tsx",
                                            lineNumber: 544,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500 dark:bg-slate-800 dark:text-slate-400",
                                            children: [
                                                "time ",
                                                sol.timeComplexity
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/Problem.tsx",
                                            lineNumber: 545,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500 dark:bg-slate-800 dark:text-slate-400",
                                            children: [
                                                "space ",
                                                sol.spaceComplexity
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/Problem.tsx",
                                            lineNumber: 548,
                                            columnNumber: 17
                                        }, this),
                                        codeStyle === "commented" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded px-1.5 py-0.5 text-[11px] font-medium", sol.commentedCode ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300" : "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300"),
                                            children: sol.commentedCode ? "Detailed annotation" : "Guided annotation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/screens/Problem.tsx",
                                            lineNumber: 552,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/screens/Problem.tsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-slate-500 dark:text-slate-400",
                                    children: sol.approach
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/Problem.tsx",
                                    lineNumber: 564,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "mt-2 overflow-x-auto rounded-lg bg-slate-950 p-3 font-mono text-[13px] leading-relaxed text-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: codeStyle === "commented" ? sol.commentedCode?.[lang] ?? annotateCode(sol.code[lang], sol.approach) : sol.code[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/Problem.tsx",
                                        lineNumber: 566,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/Problem.tsx",
                                    lineNumber: 565,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/screens/Problem.tsx",
                            lineNumber: 542,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/Problem.tsx",
                lineNumber: 484,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/Problem.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
_s3(SolutionsCard, "coRlRo9Dwa1yvuyI/+O0SegLfVY=");
_c4 = SolutionsCard;
/** Provide a readable fallback while bespoke line-by-line annotations are authored. */ function annotateCode(code, approach) {
    const annotated = code.split("\n").map((line)=>{
        const statement = line.trim();
        if (!statement || statement.startsWith("//") || statement === "}" || statement === "});") {
            return line;
        }
        const indent = line.slice(0, line.length - line.trimStart().length);
        let note = "Perform the next operation required by this approach.";
        if (/^function\b/.test(statement)) note = "Define the function that implements this approach.";
        else if (/^(const|let|var)\b/.test(statement)) note = "Initialize state that will be updated as the algorithm runs.";
        else if (/^(for|while)\b/.test(statement)) note = "Repeat this step for each remaining candidate or input value.";
        else if (/^if\b/.test(statement)) note = "Check whether this case changes the algorithm's next action.";
        else if (/^return\b/.test(statement)) note = "Return the final value computed by the approach.";
        else if (/\+\+|--|\+=|-=|\*=|\/=/.test(statement)) note = "Update the running state for the next iteration.";
        return `${indent}// ${note}\n${line}`;
    }).join("\n");
    return `// Approach: ${approach}\n// This guided version explains the role of each implementation step.\n\n${annotated}`;
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Problem");
__turbopack_context__.k.register(_c1, "ProblemWorkspace");
__turbopack_context__.k.register(_c2, "HintsDrawer");
__turbopack_context__.k.register(_c3, "WalkthroughCard");
__turbopack_context__.k.register(_c4, "SolutionsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/screens/Problem.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/screens/Problem.tsx [app-client] (ecmascript)"));
}),
"[project]/src/store/draftStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearDraft",
    ()=>clearDraft,
    "loadDraft",
    ()=>loadDraft,
    "saveDraft",
    ()=>saveDraft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$localforage$2f$dist$2f$localforage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/localforage/dist/localforage.js [app-client] (ecmascript)");
;
/**
 * Per-problem, per-language code drafts persisted to IndexedDB (separate from
 * the Zustand progress store so large code blobs never bloat localStorage).
 */ const drafts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$localforage$2f$dist$2f$localforage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createInstance({
    name: "algoforge",
    storeName: "code_drafts",
    description: "Per-problem editor drafts"
});
function key(problemId, language) {
    return `${problemId}:${language}`;
}
async function loadDraft(problemId, language) {
    try {
        return await drafts.getItem(key(problemId, language));
    } catch  {
        return null;
    }
}
async function saveDraft(problemId, language, code) {
    try {
        await drafts.setItem(key(problemId, language), code);
    } catch  {
    /* IndexedDB may be unavailable (private mode) — drafts are best-effort. */ }
}
async function clearDraft(problemId, language) {
    try {
        await drafts.removeItem(key(problemId, language));
    } catch  {
    /* ignore */ }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1r9i25i._.js.map