import { useState } from "react";
import type { BuildLab, Language } from "@/types";
import { Card } from "./ui";
import { MarkdownView } from "./MarkdownView";
import { CodeEditor } from "./CodeEditor";
import { ResultsPanel } from "./ResultsPanel";
import { useCodeRunner } from "@/runner/useCodeRunner";
import { useProgressStore } from "@/store/progressStore";
import { cn } from "@/lib/cn";

/**
 * A build-from-scratch lab: the learner implements a data structure and runs a
 * unit suite. When every assertion passes, the lab is marked complete (XP once).
 */
export function BuildLabView({ lab }: { lab: BuildLab }) {
  const preferred = useProgressStore((s) => s.progress.settings.preferredLanguage);
  const completedAt = useProgressStore((s) => s.progress.buildLabCompletions[lab.id]);
  const completeBuildLab = useProgressStore((s) => s.completeBuildLab);

  const [language, setLanguage] = useState<Language>(preferred);
  const [code, setCode] = useState(lab.starterCode[preferred]);
  const { running, outcome, run } = useCodeRunner();

  const switchLang = (l: Language) => {
    if (l === language) return;
    setLanguage(l);
    setCode(lab.starterCode[l]);
  };

  const runSuite = async () => {
    const res = await run({
      code,
      language,
      mode: "buildLab",
      harness: lab.testHarness[language],
    });
    if (
      res.status === "ok" &&
      res.results.length > 0 &&
      res.results.every((r) => r.passed)
    ) {
      completeBuildLab(lab.id, lab.xp);
    }
  };

  return (
    <Card className="border-forge-200 dark:border-forge-900">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-semibold">
          Build Lab{completedAt && <span className="ml-2 text-sm text-emerald-500">✓ passed</span>}
        </h3>
        <span className="text-xs text-slate-400">+{lab.xp} XP on full pass</span>
      </div>

      <MarkdownView source={lab.spec} />

      <div className="mt-4 mb-2 flex items-center justify-between">
        <div className="flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
          {(["js", "ts"] as Language[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => switchLang(l)}
              className={cn(
                "px-3 py-1 text-xs font-semibold uppercase transition",
                language === l
                  ? "bg-forge-500 text-white"
                  : "bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
              )}
            >
              {l}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setCode(lab.starterCode[language])}
          className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          Reset to starter
        </button>
      </div>

      <div className="h-[320px] overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
        <CodeEditor value={code} onChange={setCode} language={language} />
      </div>

      <div className="mt-2 flex items-center gap-3">
        <button
          type="button"
          onClick={() => void runSuite()}
          disabled={running}
          className="rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600 disabled:opacity-60"
        >
          {running ? "Running…" : "Run suite"}
        </button>
        <span className="text-xs text-slate-400">Pass every assertion to earn the lab XP.</span>
      </div>

      <div className="mt-3 max-h-[280px]">
        <ResultsPanel outcome={outcome} running={running} />
      </div>
    </Card>
  );
}
