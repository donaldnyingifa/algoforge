import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { CaseStudy, DesignSubmission, DesignTemplateSectionId } from "@/types";
import { PageHeader, Card, DifficultyBadge } from "@/components/ui";
import { MarkdownView } from "@/components/MarkdownView";
import { allCaseStudies } from "@/data/curriculum";
import { loadSubmission, saveSubmission, emptySubmission } from "@/store/designStore";
import { formatDuration } from "@/lib/testEngine";
import { cn } from "@/lib/cn";

type Phase = "config" | "running" | "results";

const DURATIONS = [30, 45, 60];

export function SdMockInterview() {
  const studies = allCaseStudies();
  const [phase, setPhase] = useState<Phase>("config");
  const [caseId, setCaseId] = useState<string>(studies[0]?.id ?? "");
  const [minutes, setMinutes] = useState<number>(45);
  const [sub, setSub] = useState<DesignSubmission | null>(null);
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);

  const study = studies.find((s) => s.id === caseId);
  const timeLimitMs = minutes * 60_000;
  const remainingMs = Math.max(0, timeLimitMs - (now - startTime));

  const finish = useCallback(() => setPhase("results"), []);
  const finishRef = useRef(finish);
  finishRef.current = finish;

  useEffect(() => {
    if (phase !== "running") return;
    const timer = setInterval(() => {
      const t = Date.now();
      setNow(t);
      if (t - startTime >= timeLimitMs) {
        clearInterval(timer);
        finishRef.current();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, startTime, timeLimitMs]);

  const start = async () => {
    if (!study) return;
    const loaded = (await loadSubmission(study.id)) ?? emptySubmission(study.id);
    setSub(loaded);
    const t = Date.now();
    setStartTime(t);
    setNow(t);
    setPhase("running");
  };

  const persist = (next: DesignSubmission) => {
    setSub(next);
    void saveSubmission(next);
  };
  const setAnswer = (id: DesignTemplateSectionId, value: string) =>
    sub && persist({ ...sub, sectionAnswers: { ...sub.sectionAnswers, [id]: value } });
  const setDiagram = (value: string) => sub && persist({ ...sub, diagramData: value });

  return (
    <div>
      <Link to="/learn" className="text-sm font-medium text-forge-500 hover:underline">
        ← Learn
      </Link>

      {phase === "config" && (
        <div>
          <PageHeader
            title="Mock Design Interview"
            subtitle="Pick a system, set a clock, and work the six-step template under time pressure — then compare against the model answer. Hints and the model answer stay hidden until you finish."
          />
          <Card className="mb-4 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">System to design</label>
              <select
                value={caseId}
                onChange={(e) => setCaseId(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white p-2 text-sm dark:border-slate-700 dark:bg-slate-950"
              >
                {studies.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} ({s.difficulty})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Time limit</label>
              <div className="flex gap-2">
                {DURATIONS.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setMinutes(d)}
                    className={cn(
                      "rounded-lg border px-3 py-1.5 text-sm font-semibold transition",
                      minutes === d
                        ? "border-forge-500 bg-forge-500 text-white"
                        : "border-slate-200 text-slate-600 hover:border-forge-400 dark:border-slate-700 dark:text-slate-300",
                    )}
                  >
                    {d} min
                  </button>
                ))}
              </div>
            </div>
          </Card>
          <button
            type="button"
            onClick={() => void start()}
            disabled={!study}
            className="rounded-lg bg-forge-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forge-600 disabled:opacity-60"
          >
            Start interview →
          </button>
        </div>
      )}

      {phase === "running" && study && sub && (
        <div>
          <div className="sticky top-0 z-10 -mx-6 mb-4 flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-6 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">{study.title}</span>
              <DifficultyBadge difficulty={study.difficulty} />
            </div>
            <div className="flex items-center gap-4">
              <span
                className={cn(
                  "font-mono text-lg font-bold tabular-nums",
                  remainingMs < 300_000 ? "text-red-500" : "text-slate-700 dark:text-slate-200",
                )}
              >
                {formatDuration(remainingMs)}
              </span>
              <button
                type="button"
                onClick={finish}
                className="rounded-lg bg-forge-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600"
              >
                Finish
              </button>
            </div>
          </div>

          <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">{study.summary}</p>

          <div className="space-y-4">
            {study.designTemplate.map((sec) => (
              <Card key={sec.id}>
                <h3 className="font-semibold">{sec.title}</h3>
                <p className="mt-1 mb-2 text-sm text-slate-500 dark:text-slate-400">{sec.guidance}</p>
                <textarea
                  value={sub.sectionAnswers[sec.id] ?? ""}
                  onChange={(e) => setAnswer(sec.id, e.target.value)}
                  rows={4}
                  placeholder="Your notes…"
                  className="w-full resize-y rounded-lg border border-slate-200 bg-white p-2 text-sm dark:border-slate-700 dark:bg-slate-950"
                />
              </Card>
            ))}
            <Card>
              <h3 className="font-semibold">Diagram scratchpad</h3>
              <textarea
                value={sub.diagramData}
                onChange={(e) => setDiagram(e.target.value)}
                rows={6}
                placeholder="client -> LB -> service -> cache -> store …"
                className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white p-2 font-mono text-xs dark:border-slate-700 dark:bg-slate-950"
              />
            </Card>
          </div>
        </div>
      )}

      {phase === "results" && study && (
        <MockResults study={study} onRetry={() => setPhase("config")} />
      )}
    </div>
  );
}

function MockResults({ study, onRetry }: { study: CaseStudy; onRetry: () => void }) {
  return (
    <div>
      <PageHeader title="Time — pencils down" subtitle="Compare your design against the model answer below." />
      <div className="mb-3 flex items-center gap-2">
        <h2 className="text-lg font-semibold tracking-tight">Model answer — {study.title}</h2>
        <DifficultyBadge difficulty={study.difficulty} />
      </div>
      <Card className="mb-4">
        <MarkdownView source={study.modelAnswer} />
      </Card>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onRetry}
          className="rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-600"
        >
          New mock interview
        </button>
        <Link to={`/case/${study.id}`} className="text-sm font-medium text-forge-500 hover:underline">
          Full case study &amp; self-rubric
        </Link>
        <Link to="/sd-cert" className="text-sm font-medium text-forge-500 hover:underline">
          Take the certification
        </Link>
      </div>
    </div>
  );
}
