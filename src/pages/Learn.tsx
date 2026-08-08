import { Link } from "react-router-dom";
import { PageHeader, Card } from "@/components/ui";
import { StageList } from "@/components/StageList";
import { stagesForTrack, allCaseStudies } from "@/data/curriculum";

export function Learn() {
  const caseStudyCount = allCaseStudies().length;
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
        <StageList stages={stagesForTrack("systemDesign")} />
        {caseStudyCount > 0 && (
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link to="/cases">
              <Card className="flex h-full items-center justify-between transition hover:border-forge-400 hover:shadow-md">
                <div>
                  <h3 className="font-semibold">Case Studies</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {caseStudyCount} guided end-to-end designs with a template, self-rubric, and model answers.
                  </p>
                </div>
                <span className="text-forge-500">→</span>
              </Card>
            </Link>
            <Link to="/sd-mock">
              <Card className="flex h-full items-center justify-between transition hover:border-forge-400 hover:shadow-md">
                <div>
                  <h3 className="font-semibold">Mock Design Interview</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Timed design practice against a case study, model answer revealed at the end.
                  </p>
                </div>
                <span className="text-forge-500">→</span>
              </Card>
            </Link>
            <Link to="/sd-cert" className="sm:col-span-2">
              <Card className="flex items-center justify-between transition hover:border-forge-400 hover:shadow-md">
                <div>
                  <h3 className="font-semibold">System Design Certification</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    A timed foundations exam — earn a tiered certification badge.
                  </p>
                </div>
                <span className="text-forge-500">→</span>
              </Card>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
