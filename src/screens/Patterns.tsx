import { PageHeader } from "@/components/ui";
import { StageList } from "@/components/StageList";
import { patternStages } from "@/data/curriculum";

export function Patterns() {
  return (
    <div>
      <PageHeader
        title="Pattern Mastery"
        subtitle="Every reusable problem-solving pattern, tiered from approachable to advanced. Jump into any module."
      />
      <StageList stages={patternStages()} />
    </div>
  );
}
