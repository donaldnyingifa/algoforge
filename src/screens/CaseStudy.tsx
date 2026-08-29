import { useEffect, useState } from "react";
import { Link, useParams } from "@/lib/router";
import type { DesignSubmission, DesignTemplateSectionId } from "@/types";
import { PageHeader, Card, EmptyState } from "@/components/ui";
import { MarkdownView } from "@/components/MarkdownView";
import { QuizBlock } from "@/components/QuizBlock";
import { getCaseStudy } from "@/data/curriculum";
import { useProgressStore } from "@/store/progressStore";
import { loadSubmission, saveSubmission, emptySubmission } from "@/store/designStore";
import { cn } from "@/lib/cn";

export function CaseStudy() {
  const { caseId = "" } = useParams();
  const study = getCaseStudy(caseId);
  const completeLesson = useProgressStore((s) => s.completeLesson);
  const completedAt = useProgressStore((s) => s.progress.lessonCompletions[caseId]);

  const [sub, setSub] = useState<DesignSubmission | null>(null);

  useEffect(() => {
    let alive = true;
    loadSubmission(caseId).then((loaded) => {
      if (alive) setSub(loaded ?? emptySubmission(caseId));
    });
    return () => {
      alive = false;
    };
  }, [caseId]);

  if (!study) {
    return (
      <div>
        <PageHeader title="Case study not found" />
        <EmptyState title="That design doesn't exist." hint="Pick one from the case studies list." />
        <Link to="/cases" className="mt-4 inline-block text-sm text-forge-500 hover:underline">
          ← All case studies
        </Link>
      </div>
    );
  }
  if (!sub) {
    return (
      <div>
        <PageHeader title={study.title} />
        <EmptyState title="Loading your work…" />
      </div>
    );
  }

  const persist = (next: DesignSubmission) => {
    setSub(next);
    void saveSubmission(next);
  };

  const setAnswer = (id: DesignTemplateSectionId, value: string) =>
    persist({ ...sub, sectionAnswers: { ...sub.sectionAnswers, [id]: value } });
  const setDiagram = (value: string) => persist({ ...sub, diagramData: value });
  const setRubric = (id: string, score: number) =>
    persist({ ...sub, rubricScores: { ...sub.rubricScores, [id]: score } });

  const submit = () => {
    persist({ ...sub, submitted: true });
    completeLesson(study.id, study.xp); // idempotent XP + completion
  };

  const rubricTotal = study.rubric.reduce((sum, c) => sum + (sub.rubricScores[c.id] ?? 0), 0);
  const rubricMax = study.rubric.length * 4;

  return (
    <div>
      <Link to="/cases" className="text-sm font-medium text-forge-500 hover:underline">
        ← All case studies
      </Link>
      <PageHeader title={study.title} subtitle={study.summary} />

      {/* Walkthrough */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Walkthrough</h2>
        <div className="space-y-4">
          {study.walkthroughSections.map((w, i) =>
            w.kind === "prose" ? (
              <div key={i}>
                <h3 className="mb-1 font-semibold">{w.heading}</h3>
                <MarkdownView source={w.body} />
              </div>
            ) : (
              <QuizBlock key={i} question={w.question} />
            ),
          )}
        </div>
      </section>

      {/* Design template */}
      <section className="mb-8">
        <h2 className="mb-1 text-lg font-semibold tracking-tight">Your design</h2>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          Work through the six steps. Your writing autosaves to this browser.
        </p>
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
            <p className="mt-1 mb-2 text-sm text-slate-500 dark:text-slate-400">
              Sketch the architecture in text (ASCII boxes/arrows, or a bullet outline of components and flows).
            </p>
            <textarea
              value={sub.diagramData}
              onChange={(e) => setDiagram(e.target.value)}
              rows={6}
              placeholder="client -> LB -> service -> cache -> store …"
              className="w-full resize-y rounded-lg border border-slate-200 bg-white p-2 font-mono text-xs dark:border-slate-700 dark:bg-slate-950"
            />
          </Card>
        </div>
      </section>

      {/* Self-rubric */}
      <section className="mb-8">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Self-assessment</h2>
          <span className="text-sm text-slate-400">
            {rubricTotal} / {rubricMax}
          </span>
        </div>
        <div className="space-y-3">
          {study.rubric.map((c) => (
            <Card key={c.id}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-medium">{c.name}</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{c.description}</p>
                </div>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRubric(c.id, n)}
                      className={cn(
                        "h-8 w-8 rounded-lg border text-sm font-semibold transition",
                        (sub.rubricScores[c.id] ?? -1) === n
                          ? "border-forge-500 bg-forge-500 text-white"
                          : "border-slate-200 text-slate-500 hover:border-forge-400 dark:border-slate-700 dark:text-slate-300",
                      )}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Submit / model answer */}
      <section>
        {!sub.submitted ? (
          <button
            type="button"
            onClick={submit}
            className="rounded-lg bg-forge-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forge-600"
          >
            Submit &amp; reveal model answer{completedAt ? "" : ` (+${study.xp} XP)`}
          </button>
        ) : (
          <div>
            <div className="mb-3 flex items-center gap-2">
              <h2 className="text-lg font-semibold tracking-tight">Model answer</h2>
              <span className="text-[11px] font-medium text-emerald-500">submitted ✓</span>
            </div>
            <Card>
              <MarkdownView source={study.modelAnswer} />
            </Card>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Compare against your notes above — where did your design differ, and was the tradeoff justified?
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
