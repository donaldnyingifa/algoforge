(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/runner/executor.worker.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/// <reference lib="webworker" />
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$transpile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/runner/transpile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$judge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/runner/judge.ts [app-client] (ecmascript)");
;
;
const ctx = self;
/** Remove module `export` keywords so code evaluates via `new Function`. */ function stripExports(code) {
    return code.replace(/\bexport\s+default\s+/g, "").replace(/\bexport\s+(?=(async\s+)?(function|class|const|let|var)\b)/g, "");
}
function cloneArgs(args) {
    try {
        return structuredClone(args);
    } catch  {
        return JSON.parse(JSON.stringify(args));
    }
}
ctx.onmessage = (event)=>{
    const req = event.data;
    const started = performance.now();
    const consoleLines = [];
    const record = (level)=>(...parts)=>{
            const text = parts.map((p)=>typeof p === "string" ? p : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$judge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preview"])(p)).join(" ");
            consoleLines.push({
                level,
                text
            });
        };
    const sandboxConsole = {
        log: record("log"),
        warn: record("warn"),
        error: record("error"),
        info: record("log"),
        debug: record("log")
    };
    // 1. Transpile (TS -> JS). Syntax errors become friendly compile errors.
    let source;
    try {
        source = req.language === "ts" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$transpile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpileTs"])(req.code) : req.code;
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        const outcome = {
            status: "compileError",
            console: consoleLines,
            results: [],
            error: {
                message,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$transpile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePosition"])(message)
            },
            totalRuntimeMs: performance.now() - started
        };
        ctx.postMessage(outcome);
        return;
    }
    source = stripExports(source);
    // 2a. Scratch mode: just execute and capture console.
    if (req.mode === "scratch") {
        try {
            const factory = new Function("console", `"use strict";\n${source}\n`);
            factory(sandboxConsole);
            ctx.postMessage({
                status: "ok",
                console: consoleLines,
                results: [],
                totalRuntimeMs: performance.now() - started
            });
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            ctx.postMessage({
                status: "runtimeError",
                console: consoleLines,
                results: [],
                error: {
                    message
                },
                totalRuntimeMs: performance.now() - started
            });
        }
        return;
    }
    // 2c. Build-lab mode: run the learner's implementation against an assertion
    // harness that shares scope and reports via injected assert / expect.
    if (req.mode === "buildLab") {
        let harnessSrc;
        try {
            harnessSrc = req.language === "ts" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$transpile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpileTs"])(req.harness ?? "") : req.harness ?? "";
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            ctx.postMessage({
                status: "compileError",
                console: consoleLines,
                results: [],
                error: {
                    message,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$transpile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePosition"])(message)
                },
                totalRuntimeMs: performance.now() - started
            });
            return;
        }
        const labResults = [];
        const assert = (name, condition)=>{
            labResults.push({
                label: name,
                passed: Boolean(condition),
                runtimeMs: 0,
                expected: "truthy",
                received: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$judge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preview"])(condition)
            });
        };
        const expect = (name, received, expected)=>{
            labResults.push({
                label: name,
                passed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$judge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(received, expected),
                runtimeMs: 0,
                expected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$judge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preview"])(expected),
                received: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$judge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preview"])(received)
            });
        };
        try {
            const factory = new Function("console", "assert", "expect", `"use strict";\n${source}\n${harnessSrc}`);
            factory(sandboxConsole, assert, expect);
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            ctx.postMessage({
                status: "runtimeError",
                console: consoleLines,
                results: labResults,
                error: {
                    message
                },
                totalRuntimeMs: performance.now() - started
            });
            return;
        }
        ctx.postMessage({
            status: "ok",
            console: consoleLines,
            results: labResults,
            totalRuntimeMs: performance.now() - started
        });
        return;
    }
    // 2b. Tests mode: resolve the named function, then judge each case.
    const fnName = req.functionName ?? "";
    let fn;
    try {
        const factory = new Function("console", `"use strict";\n${source}\n;return (typeof ${fnName} !== "undefined") ? ${fnName} : undefined;`);
        fn = factory(sandboxConsole);
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        ctx.postMessage({
            status: "compileError",
            console: consoleLines,
            results: [],
            error: {
                message,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$transpile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePosition"])(message)
            },
            totalRuntimeMs: performance.now() - started
        });
        return;
    }
    if (typeof fn !== "function") {
        ctx.postMessage({
            status: "runtimeError",
            console: consoleLines,
            results: [],
            error: {
                message: `Could not find a function named "${fnName}". Make sure it is declared at the top level.`
            },
            totalRuntimeMs: performance.now() - started
        });
        return;
    }
    const callable = fn;
    const flagsFor = (i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$judge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectiveFlags"])(req.judgeType, req.tests?.[i]?.comparator);
    const results = [];
    const tests = req.tests ?? [];
    for(let i = 0; i < tests.length; i++){
        const test = tests[i];
        if (!test) continue;
        const args = cloneArgs(test.args);
        const label = test.label ?? `Case ${i + 1}`;
        const t0 = performance.now();
        let received;
        let error;
        try {
            const returned = callable(...args);
            received = req.judgeType === "mutateArgument" ? args[0] : returned;
        } catch (err) {
            error = err instanceof Error ? err.message : String(err);
        }
        const runtimeMs = performance.now() - t0;
        const passed = !error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$judge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(received, test.expected, flagsFor(i));
        results.push({
            label,
            passed,
            runtimeMs,
            expected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$judge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preview"])(test.expected),
            received: error ? "—" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$runner$2f$judge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preview"])(received),
            error
        });
    }
    ctx.postMessage({
        status: "ok",
        console: consoleLines,
        results,
        totalRuntimeMs: performance.now() - started
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/runner/judge.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepEqual",
    ()=>deepEqual,
    "effectiveFlags",
    ()=>effectiveFlags,
    "preview",
    ()=>preview
]);
function effectiveFlags(judgeType, flags) {
    const base = {
        ...flags ?? {}
    };
    if (judgeType === "orderInsensitiveArray") base.orderInsensitive = true;
    return base;
}
function deepEqual(a, b, flags = {}) {
    return eq(a, b, flags);
}
function eq(a, b, flags) {
    if (typeof a === "number" && typeof b === "number") {
        const aNan = Number.isNaN(a);
        const bNan = Number.isNaN(b);
        if (aNan || bNan) {
            if (flags.nanEqualsNan === false) return false;
            return aNan && bNan;
        }
        if (flags.floatTolerance != null) return Math.abs(a - b) <= flags.floatTolerance;
        return a === b;
    }
    if (a === b) return true;
    if (a === null || b === null || a === undefined || b === undefined) return a === b;
    if (typeof a !== "object" || typeof b !== "object") return false;
    const aArr = Array.isArray(a);
    const bArr = Array.isArray(b);
    if (aArr !== bArr) return false;
    if (aArr && bArr) {
        if (a.length !== b.length) return false;
        if (flags.orderInsensitive) return multisetEqual(a, b, flags);
        for(let i = 0; i < a.length; i++){
            if (!eq(a[i], b[i], flags)) return false;
        }
        return true;
    }
    const ao = a;
    const bo = b;
    const aKeys = Object.keys(ao);
    const bKeys = Object.keys(bo);
    if (aKeys.length !== bKeys.length) return false;
    for (const k of aKeys){
        if (!Object.prototype.hasOwnProperty.call(bo, k)) return false;
        if (!eq(ao[k], bo[k], flags)) return false;
    }
    return true;
}
function multisetEqual(a, b, flags) {
    const used = new Array(b.length).fill(false);
    for (const item of a){
        let matched = false;
        for(let j = 0; j < b.length; j++){
            if (!used[j] && eq(item, b[j], flags)) {
                used[j] = true;
                matched = true;
                break;
            }
        }
        if (!matched) return false;
    }
    return true;
}
function preview(value) {
    const seen = new WeakSet();
    const walk = (v)=>{
        if (v === undefined) return "undefined";
        if (v === null) return "null";
        const t = typeof v;
        if (t === "number") {
            const n = v;
            if (Number.isNaN(n)) return "NaN";
            if (!Number.isFinite(n)) return n > 0 ? "Infinity" : "-Infinity";
            return String(n);
        }
        if (t === "boolean" || t === "bigint") return String(v);
        if (t === "string") return JSON.stringify(v);
        if (t === "function") return "[Function]";
        if (t === "symbol") return String(v);
        if (t === "object") {
            const obj = v;
            if (seen.has(obj)) return "[Circular]";
            seen.add(obj);
            let out;
            if (Array.isArray(v)) {
                out = "[" + v.map(walk).join(", ") + "]";
            } else {
                const rec = v;
                const parts = Object.keys(rec).map((k)=>`${JSON.stringify(k)}: ${walk(rec[k])}`);
                out = "{" + parts.join(", ") + "}";
            }
            seen.delete(obj);
            return out;
        }
        return String(v);
    };
    return walk(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/runner/transpile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePosition",
    ()=>parsePosition,
    "transpileTs",
    ()=>transpileTs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sucrase/dist/esm/index.js [app-client] (ecmascript)");
;
function transpileTs(source) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])(source, {
        transforms: [
            "typescript"
        ],
        disableESTransforms: true
    });
    return result.code;
}
function parsePosition(message) {
    const m = /\((\d+):(\d+)\)/.exec(message);
    if (!m) return {};
    const line = Number(m[1]);
    const column = Number(m[2]);
    return {
        line,
        column: column + 1
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_runner_0dz52_w._.js.map