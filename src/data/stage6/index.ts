import {
  registerProblem,
  registerModule,
  registerComplexityQuestion,
} from "@/data/curriculum";
import { dp1Problems, dp1Mcqs, dp1Module } from "./dp1";
import { dp2Problems, dp2Mcqs, dp2Module } from "./dp2";
import { dp3Problems, dp3Mcqs, dp3Module } from "./dp3";
import { dp4Problems, dp4Mcqs, dp4Module } from "./dp4";
import { dp5Problems, dp5Mcqs, dp5Module } from "./dp5";
import { toposortProblems, toposortMcqs, toposortModule } from "./toposort";
import { unionFindProblems, unionFindMcqs, unionFindModule } from "./unionfind";
import { shortestPathProblems, shortestPathMcqs, shortestPathModule } from "./shortestpath";
import { trieProblems, trieMcqs, trieModule } from "./trie";
import { monoDequeProblems, monoDequeMcqs, monoDequeModule } from "./monodeque";
import { bitProblems, bitMcqs, bitModule } from "./bit";
import { backtrackProblems, backtrackMcqs, backtrackModule } from "./backtracking";

/** Register Stage 6 (Patterns Tier 3) content — all 12 modules (batches 1–6). */
export function registerStage6(): void {
  [
    ...dp1Problems, ...dp2Problems, ...dp3Problems, ...dp4Problems,
    ...dp5Problems, ...toposortProblems,
    ...unionFindProblems, ...shortestPathProblems,
    ...trieProblems, ...monoDequeProblems,
    ...bitProblems, ...backtrackProblems,
  ].forEach(registerProblem);
  [
    ...dp1Mcqs, ...dp2Mcqs, ...dp3Mcqs, ...dp4Mcqs,
    ...dp5Mcqs, ...toposortMcqs,
    ...unionFindMcqs, ...shortestPathMcqs,
    ...trieMcqs, ...monoDequeMcqs,
    ...bitMcqs, ...backtrackMcqs,
  ].forEach(registerComplexityQuestion);
  [
    dp1Module, dp2Module, dp3Module, dp4Module, dp5Module, toposortModule,
    unionFindModule, shortestPathModule,
    trieModule, monoDequeModule,
    bitModule, backtrackModule,
  ].forEach(registerModule);
}
