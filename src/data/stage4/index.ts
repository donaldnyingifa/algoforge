import {
  registerProblem,
  registerModule,
  registerComplexityQuestion,
} from "@/data/curriculum";
import { prefixSumProblems, prefixSumMcqs, prefixSumModule } from "./prefixSum";
import { twoPointerProblems, twoPointerMcqs, twoPointerModule } from "./twoPointers";
import { slidingWindowProblems, slidingWindowMcqs, slidingWindowModule } from "./slidingWindow";
import { fastSlowProblems, fastSlowMcqs, fastSlowModule } from "./fastSlow";
import {
  frequencyCounterProblems,
  frequencyCounterMcqs,
  frequencyCounterModule,
} from "./frequencyCounter";
import {
  monotonicStackProblems,
  monotonicStackMcqs,
  monotonicStackModule,
} from "./monotonicStack";
import { llReversalProblems, llReversalMcqs, llReversalModule } from "./linkedListReversal";
import {
  modifiedBinarySearchProblems,
  modifiedBinarySearchMcqs,
  modifiedBinarySearchModule,
} from "./modifiedBinarySearch";

/** Register all Stage 4 (Patterns Tier 1) content — 8 pattern modules. */
export function registerStage4(): void {
  [
    ...prefixSumProblems,
    ...twoPointerProblems,
    ...slidingWindowProblems,
    ...fastSlowProblems,
    ...frequencyCounterProblems,
    ...monotonicStackProblems,
    ...llReversalProblems,
    ...modifiedBinarySearchProblems,
  ].forEach(registerProblem);
  [
    ...prefixSumMcqs,
    ...twoPointerMcqs,
    ...slidingWindowMcqs,
    ...fastSlowMcqs,
    ...frequencyCounterMcqs,
    ...monotonicStackMcqs,
    ...llReversalMcqs,
    ...modifiedBinarySearchMcqs,
  ].forEach(registerComplexityQuestion);
  [
    prefixSumModule,
    twoPointerModule,
    slidingWindowModule,
    fastSlowModule,
    frequencyCounterModule,
    monotonicStackModule,
    llReversalModule,
    modifiedBinarySearchModule,
  ].forEach(registerModule);
}
