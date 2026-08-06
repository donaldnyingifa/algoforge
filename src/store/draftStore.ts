import localforage from "localforage";
import type { Language } from "@/types";

/**
 * Per-problem, per-language code drafts persisted to IndexedDB (separate from
 * the Zustand progress store so large code blobs never bloat localStorage).
 */
const drafts = localforage.createInstance({
  name: "algoforge",
  storeName: "code_drafts",
  description: "Per-problem editor drafts",
});

function key(problemId: string, language: Language): string {
  return `${problemId}:${language}`;
}

export async function loadDraft(
  problemId: string,
  language: Language,
): Promise<string | null> {
  try {
    return await drafts.getItem<string>(key(problemId, language));
  } catch {
    return null;
  }
}

export async function saveDraft(
  problemId: string,
  language: Language,
  code: string,
): Promise<void> {
  try {
    await drafts.setItem(key(problemId, language), code);
  } catch {
    /* IndexedDB may be unavailable (private mode) — drafts are best-effort. */
  }
}

export async function clearDraft(
  problemId: string,
  language: Language,
): Promise<void> {
  try {
    await drafts.removeItem(key(problemId, language));
  } catch {
    /* ignore */
  }
}
