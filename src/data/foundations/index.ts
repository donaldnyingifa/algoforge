import {
  registerProblem,
  registerModule,
  registerComplexityQuestion,
} from "@/data/curriculum";
import { foundationsDrills } from "./drills";
import {
  foundationsPool,
  foundationsComplexityQuestions,
  foundationsCheckpointModule,
} from "./checkpoint";
import { foundationsLessonModules } from "./lessons";

/** Register all Stage 1 (Foundations) content into the curriculum registry. */
export function registerFoundations(): void {
  [...foundationsDrills, ...foundationsPool].forEach(registerProblem);
  foundationsComplexityQuestions.forEach(registerComplexityQuestion);
  foundationsLessonModules.forEach(registerModule);
  registerModule(foundationsCheckpointModule);
}
