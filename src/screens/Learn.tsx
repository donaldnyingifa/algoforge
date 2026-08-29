import { Link } from "@/lib/router";
import { PageHeader, Card, DifficultyBadge } from "@/components/ui";
import { StageList } from "@/components/StageList";
import { stagesForTrack, allCaseStudies } from "@/data/curriculum";
import { useProgressStore } from "@/store/progressStore";

export function Learn() {
  const caseStudies = allCaseStudies();
  const lessonCompletions = useProgressStore((s) => s.progress.lessonCompletions);

  // The SD "Case Studies" stage (sd-s3) has no Modules — case studies live in
  // their own registry — so render them inline in place of the stage's grid.
  const sdExtra = (stageId: string) => {
    if (stageId !== "sd-s3" || caseStudies.length === 0) return undefined;
    return (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          {caseStudies.map((cs) => {
            const done = Boolean(lessonCompletions[cs.id]);
            return (
              <Link key={cs.id} to={`/case/${cs.id}`}>
                <Card className="flex h-full items-center justify-between gap-2 transition hover:border-forge-400 hover:shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{cs.title}</span>
                    <DifficultyBadge difficulty={cs.difficulty} />
                  </div>
                  {done ? (
                    <span className="text-[11px] font-medium text-emerald-500">done</span>
                  ) : (
                    <span className="text-forge-500">→</span>
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
        <Link to="/sd-mock">
          <Card className="flex items-center justify-between transition hover:border-forge-400 hover:shadow-md">
            <div>
              <h3 className="font-semibold">Mock Design Interview</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Timed design practice against any case study, with the model answer revealed at the end.
              </p>
            </div>
            <span className="text-forge-500">→</span>
          </Card>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <PageHeader
        title="Learn"
        subtitle="The full curriculum. Nothing is hard-locked — prerequisite chips guide the order, but you may start anywhere."
      />

      <div className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-forge-500">
          Data Structures &amp; Algorithms
        </h2>
        <StageList stages={stagesForTrack("dsa")} />
      </div>

      <div>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-forge-500">
          System Design
        </h2>
        <StageList stages={stagesForTrack("systemDesign")} extra={sdExtra} />
      </div>
    </div>
  );
}
