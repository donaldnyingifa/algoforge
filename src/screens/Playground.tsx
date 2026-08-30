import { useCallback, useEffect, useState } from "react";
import { PageHeader } from "@/components/ui";
import { CodeEditor } from "@/components/CodeEditor";
import { ResultsPanel } from "@/components/ResultsPanel";
import { useCodeRunner } from "@/runner/useCodeRunner";
import { cn } from "@/lib/cn";
import type { RunnableLanguage } from "@/runner/types";
import {
  PLAYGROUND_EXAMPLES,
  type PlaygroundExample,
} from "@/data/playgroundExamples";

const FIRST = PLAYGROUND_EXAMPLES[0]!;
const LANGUAGES: RunnableLanguage[] = ["js", "ts", "py"];

export function Playground() {
  const [example, setExample] = useState<PlaygroundExample>(FIRST);
  const [language, setLanguage] = useState<RunnableLanguage>(FIRST.language);
  const [code, setCode] = useState<string>(FIRST.code);
  const { running, phase, outcome, run, reset } = useCodeRunner();

  const loadExample = useCallback(
    (ex: PlaygroundExample) => {
      setExample(ex);
      setLanguage(ex.language);
      setCode(ex.code);
      reset();
    },
    [reset],
  );

  // JS and TS share one execution path (Sucrase strips types either way, so
  // the same source can run as either), which is why the toggle below can
  // freely flip between them without touching the loaded code. Python is a
  // genuinely different runtime — JS/TS source can't run there, and Python
  // source can't run as JS/TS — so crossing into or out of "py" loads a
  // fresh matching example instead of silently keeping incompatible code
  // loaded (which would just fail with a confusing error on Run).
  const selectLanguage = useCallback(
    (lang: RunnableLanguage) => {
      if (lang === language) return;
      if (lang === "py" || language === "py") {
        const fallback = PLAYGROUND_EXAMPLES.find((ex) => ex.language === lang);
        if (fallback) {
          loadExample(fallback);
          return;
        }
      }
      setLanguage(lang);
    },
    [language, loadExample],
  );

  const doRun = useCallback(() => {
    void run(
      language === "py"
        ? { code, language: "py", mode: "scratch" }
        : {
            code,
            language,
            mode: example.mode,
            functionName: example.functionName,
            judgeType: example.judgeType,
            tests: example.tests,
          },
    );
  }, [run, code, language, example]);

  // Cmd/Ctrl+Enter to run.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        doRun();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [doRun]);

  return (
    <div>
      <PageHeader
        title="Playground"
        subtitle="A scratch space powered by the same sandboxed runner used across AlgoForge. Pick an example, edit freely, and Run."
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {PLAYGROUND_EXAMPLES.map((ex) => (
          <button
            key={ex.id}
            type="button"
            onClick={() => loadExample(ex)}
            title={ex.blurb}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition",
              example.id === ex.id
                ? "bg-forge-500 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700",
            )}
          >
            {ex.label}
          </button>
        ))}
      </div>

      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wide text-slate-400">Language</span>
          <div className="flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => selectLanguage(lang)}
                className={cn(
                  "px-3 py-1 text-xs font-semibold uppercase transition",
                  language === lang
                    ? "bg-forge-500 text-white"
                    : "bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
                )}
              >
                {lang}
              </button>
            ))}
          </div>
          <span className="ml-1 text-xs text-slate-400">{example.blurb}</span>
        </div>

        <button
          type="button"
          onClick={doRun}
          disabled={running}
          className="rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600 disabled:opacity-60"
        >
          {running ? (phase === "loading" ? "Loading Python…" : "Running…") : "Run ▶"}
          <span className="ml-2 hidden text-[11px] font-normal opacity-70 sm:inline">
            ⌘/Ctrl+↵
          </span>
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="h-[460px] overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <CodeEditor value={code} onChange={setCode} language={language} />
        </div>
        <div className="h-[460px]">
          <ResultsPanel outcome={outcome} running={running} phase={phase} />
        </div>
      </div>
    </div>
  );
}
