import { useState } from "react";
import type { Language } from "@/types";
import { CodeEditor } from "./CodeEditor";
import { useCodeRunner } from "@/runner/useCodeRunner";
import { cn } from "@/lib/cn";

/**
 * An editable, runnable code block used inside lessons. Runs in scratch mode
 * (console capture) on the shared sandboxed worker.
 */
export function RunnableSnippet({
  initialCode,
  language,
}: {
  initialCode: string;
  language: Language;
}) {
  const [code, setCode] = useState(initialCode);
  const { running, outcome, run } = useCodeRunner();

  const lineCount = code.split("\n").length;
  const height = Math.min(360, Math.max(96, lineCount * 20 + 28));

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-800 dark:bg-slate-900">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          {language} · editable
        </span>
        <button
          type="button"
          onClick={() =>
            void run({ code, language, mode: "scratch" })
          }
          disabled={running}
          className="rounded-md bg-forge-500 px-2.5 py-1 text-xs font-semibold text-white transition hover:bg-forge-600 disabled:opacity-60"
        >
          {running ? "Running…" : "Run ▶"}
        </button>
      </div>
      <div style={{ height }} className="bg-white dark:bg-[#1e1e1e]">
        <CodeEditor value={code} onChange={setCode} language={language} fontSize={13} />
      </div>
      {outcome && (
        <div className="border-t border-slate-200 bg-slate-950 px-3 py-2 font-mono text-xs text-slate-100 dark:border-slate-800">
          {outcome.status === "compileError" || outcome.status === "runtimeError" ? (
            <div className="text-red-400">
              {outcome.status === "compileError" && outcome.error?.line != null
                ? `Compile error (line ${outcome.error.line}): `
                : "Error: "}
              {outcome.error?.message}
            </div>
          ) : outcome.status === "timeout" ? (
            <div className="text-red-400">⏱ {outcome.error?.message}</div>
          ) : outcome.console.length === 0 ? (
            <div className="text-slate-400">
              (no console output · {outcome.totalRuntimeMs.toFixed(1)} ms)
            </div>
          ) : (
            outcome.console.map((l, i) => (
              <div
                key={i}
                className={cn(
                  "whitespace-pre-wrap",
                  l.level === "warn" && "text-amber-300",
                  l.level === "error" && "text-red-400",
                )}
              >
                {l.text}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
