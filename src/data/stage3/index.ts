import {
  registerProblem,
  registerModule,
  registerComplexityQuestion,
} from "@/data/curriculum";
import { stage3Problems } from "./problems";
import { stage3Modules, stage3Mcqs } from "./modules";

/** Register all Stage 3 (Core Algorithms) content. */
export function registerStage3(): void {
  stage3Problems.forEach(registerProblem);
  stage3Mcqs.forEach(registerComplexityQuestion);
  stage3Modules.forEach(registerModule);
}
