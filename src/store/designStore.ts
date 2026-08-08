import localforage from "localforage";
import type { DesignSubmission } from "@/types";

/**
 * Per-case-study design work (template answers, diagram scratchpad text, self-
 * rubric scores, submitted flag) persisted to IndexedDB — kept out of the
 * Zustand progress store so potentially large text blobs never bloat
 * localStorage. XP/completion still lives in progress (via completeLesson).
 */
const store = localforage.createInstance({
  name: "algoforge",
  storeName: "design_submissions",
  description: "Per-case-study design submissions",
});

export function emptySubmission(caseStudyId: string): DesignSubmission {
  return {
    caseStudyId,
    sectionAnswers: {},
    diagramData: "",
    rubricScores: {},
    submitted: false,
    updatedAt: new Date().toISOString(),
  };
}

export async function loadSubmission(caseStudyId: string): Promise<DesignSubmission | null> {
  try {
    return await store.getItem<DesignSubmission>(caseStudyId);
  } catch {
    return null;
  }
}

export async function saveSubmission(submission: DesignSubmission): Promise<void> {
  try {
    await store.setItem(submission.caseStudyId, { ...submission, updatedAt: new Date().toISOString() });
  } catch {
    /* IndexedDB may be unavailable (private mode) — submissions are best-effort. */
  }
}

export async function clearSubmission(caseStudyId: string): Promise<void> {
  try {
    await store.removeItem(caseStudyId);
  } catch {
    /* ignore */
  }
}
