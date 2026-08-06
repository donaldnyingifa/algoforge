import {
  registerProblem,
  registerModule,
  registerComplexityQuestion,
} from "@/data/curriculum";
import { expertProblems, expertMcqs, expertModule } from "./algos";

/** Register Stage 7 (Expert) content. */
export function registerExpert(): void {
  expertProblems.forEach(registerProblem);
  expertMcqs.forEach(registerComplexityQuestion);
  registerModule(expertModule);
}
