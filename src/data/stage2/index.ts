import {
  registerProblem,
  registerModule,
  registerComplexityQuestion,
} from "@/data/curriculum";
import {
  stage2Batch1Problems,
  stage2Batch1Mcqs,
  stage2Batch1Modules,
} from "./content";
import {
  stage2Batch2Problems,
  stage2Batch2Mcqs,
  stage2Batch2Modules,
} from "./content2";
import {
  stage2Batch3Problems,
  stage2Batch3Mcqs,
  stage2Batch3Modules,
} from "./content3";

/** Register all Stage 2 (Data Structure Build Labs) content. */
export function registerStage2(): void {
  [...stage2Batch1Problems, ...stage2Batch2Problems, ...stage2Batch3Problems].forEach(
    registerProblem,
  );
  [...stage2Batch1Mcqs, ...stage2Batch2Mcqs, ...stage2Batch3Mcqs].forEach(
    registerComplexityQuestion,
  );
  [...stage2Batch1Modules, ...stage2Batch2Modules, ...stage2Batch3Modules].forEach(
    registerModule,
  );
}
