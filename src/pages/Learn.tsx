import { PageHeader } from "@/components/ui";
import { StageList } from "@/components/StageList";
import { stagesForTrack } from "@/data/curriculum";

export function Learn() {
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
      </div>
    </div>
  );
}
