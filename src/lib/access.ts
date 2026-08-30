/**
 * Access control: which curriculum content is free to use signed-out.
 *
 * Confirmed policy (see claude/firebase-auth-plan.md): the DSA curriculum's
 * Foundations stage — the DSA track's first stage — stays usable without
 * signing in. Everything else, in either track, requires sign-in.
 *
 * This is checked semantically against the curriculum registry (track +
 * order), not as a hardcoded stage id, so it keeps meaning "the DSA track's
 * first stage" even if stage ids are ever renamed.
 */
import { getModule, getProblem, getStage } from "@/data/curriculum";

/** True if a stage's content is free to use without signing in. */
export function isStageFree(stageId: string | undefined | null): boolean {
  if (!stageId) return false;
  const stage = getStage(stageId);
  if (!stage) return false;
  return stage.track === "dsa" && stage.order === 1;
}

/** True if a lesson/module's content is free to use without signing in. */
export function isModuleFree(moduleId: string | undefined | null): boolean {
  if (!moduleId) return false;
  return isStageFree(getModule(moduleId)?.stageId);
}

/** True if a problem's content is free to use without signing in. */
export function isProblemFree(problemId: string | undefined | null): boolean {
  if (!problemId) return false;
  return isStageFree(getProblem(problemId)?.stageId);
}

/**
 * Routes with no free content at all — every screen mounted at one of these
 * requires sign-in outright, regardless of which specific item is opened.
 * Kept as path *prefixes* matched against the first URL segment, mirroring
 * how src/app/ClientApp.tsx's CurrentPage() already reads the path.
 *
 * "mock" (Mock Interview) draws from Stages 4-7 of the pattern library and
 * isn't in the six surfaces the user named explicitly, but it renders that
 * content fully inline with no other gate in front of it — leaving it out
 * would be a hole in the same policy that gates Challenges and Patterns.
 * See claude/firebase-auth-plan.md's "Two gating strategies" section.
 */
export const WHOLESALE_GATED_SEGMENTS = new Set([
  "languages",
  "patterns",
  "challenges",
  "playground",
  "cases",
  "case",
  "sd-mock",
  "sd-cert",
  "mock",
]);

/** True if the given first URL segment (e.g. "playground" from "/playground") is wholesale-gated. */
export function isSegmentGated(segment: string | undefined): boolean {
  return Boolean(segment && WHOLESALE_GATED_SEGMENTS.has(segment));
}
