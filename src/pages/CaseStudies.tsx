import { Link } from "react-router-dom";
import { PageHeader, Card, EmptyState, DifficultyBadge } from "@/components/ui";
import { allCaseStudies } from "@/data/curriculum";
import { useProgressStore } from "@/store/progressStore";

export function CaseStudies() {
  const lessonCompletions = useProgressStore((s) => s.progress.lessonCompletions);
  const studies = allCaseStudies();

  return (
    <div>
      <PageHeader
        title="System Design — Case Studies"
        subtitle="Guided end-to-end designs. Work each with the six-step template, self-assess against the rubric, then reveal the model answer."
      />
      {studies.length === 0 ? (
        <EmptyState title="No case studies yet." hint="They land in an upcoming phase." />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {studies.map((cs) => {
            const done = Boolean(lessonCompletions[cs.id]);
            return (
              <Link key={cs.id} to={`/case/${cs.id}`}>
                <Card className="flex h-full flex-col gap-2 transition hover:border-forge-400 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold leading-tight">{cs.title}</h3>
                      <DifficultyBadge difficulty={cs.difficulty} />
                    </div>
                    {done && <span className="text-[11px] font-medium text-emerald-500">done</span>}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cs.summary}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
