import {
  registerProblem,
  registerModule,
  registerComplexityQuestion,
} from "@/data/curriculum";
import { treeDfsProblems, treeDfsMcqs, treeDfsModule } from "./treeDfs";
import { treeBfsProblems, treeBfsMcqs, treeBfsModule } from "./treeBfs";
import {
  graphTraversalProblems,
  graphTraversalMcqs,
  graphTraversalModule,
} from "./graphTraversal";
import {
  mergeIntervalsProblems,
  mergeIntervalsMcqs,
  mergeIntervalsModule,
} from "./mergeIntervals";
import { cyclicSortProblems, cyclicSortMcqs, cyclicSortModule } from "./cyclicSort";
import { topKProblems, topKMcqs, topKModule } from "./topK";
import { twoHeapsProblems, twoHeapsMcqs, twoHeapsModule } from "./twoHeaps";
import { kWayMergeProblems, kWayMergeMcqs, kWayMergeModule } from "./kWayMerge";
import {
  subsetsBacktrackingProblems,
  subsetsBacktrackingMcqs,
  subsetsBacktrackingModule,
} from "./subsetsBacktracking";
import { greedyProblems, greedyMcqs, greedyModule } from "./greedy";

/** Register all Stage 5 (Patterns Tier 2) content — 10 pattern modules. */
export function registerStage5(): void {
  [
    ...treeDfsProblems,
    ...treeBfsProblems,
    ...graphTraversalProblems,
    ...mergeIntervalsProblems,
    ...cyclicSortProblems,
    ...topKProblems,
    ...twoHeapsProblems,
    ...kWayMergeProblems,
    ...subsetsBacktrackingProblems,
    ...greedyProblems,
  ].forEach(registerProblem);
  [
    ...treeDfsMcqs,
    ...treeBfsMcqs,
    ...graphTraversalMcqs,
    ...mergeIntervalsMcqs,
    ...cyclicSortMcqs,
    ...topKMcqs,
    ...twoHeapsMcqs,
    ...kWayMergeMcqs,
    ...subsetsBacktrackingMcqs,
    ...greedyMcqs,
  ].forEach(registerComplexityQuestion);
  [
    treeDfsModule,
    treeBfsModule,
    graphTraversalModule,
    mergeIntervalsModule,
    cyclicSortModule,
    topKModule,
    twoHeapsModule,
    kWayMergeModule,
    subsetsBacktrackingModule,
    greedyModule,
  ].forEach(registerModule);
}
