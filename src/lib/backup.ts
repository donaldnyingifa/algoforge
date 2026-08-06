import type { UserProgress, UserSettings } from "@/types";
import { normalizeProgress } from "@/store/progressStore";

const BACKUP_KIND = "algoforge-progress-backup";

interface BackupFile {
  kind: string;
  exportedAt: string;
  progress: UserProgress;
}

/** Serialize progress and trigger a JSON file download. */
export function downloadProgress(progress: UserProgress): void {
  const payload: BackupFile = {
    kind: BACKUP_KIND,
    exportedAt: new Date().toISOString(),
    progress,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const stamp = new Date().toISOString().slice(0, 10);
  const a = document.createElement("a");
  a.href = url;
  a.download = `algoforge-progress-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** Parse an imported file's text into a normalized UserProgress (throws on garbage). */
export function parseProgressFile(text: string): UserProgress {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("That file isn't valid JSON.");
  }
  // Accept either a wrapped backup file or a bare progress object.
  const candidate =
    data && typeof data === "object" && "progress" in (data as Record<string, unknown>)
      ? (data as { progress: unknown }).progress
      : data;

  if (!candidate || typeof candidate !== "object") {
    throw new Error("This doesn't look like an AlgoForge progress file.");
  }
  if (typeof (candidate as { xp?: unknown }).xp !== "number") {
    throw new Error("This doesn't look like an AlgoForge progress file.");
  }
  return normalizeProgress(candidate);
}

/** Whether a backup reminder is due, based on settings and current XP. */
export function isBackupDue(settings: UserSettings, xp: number): boolean {
  if (xp <= 0) return false; // nothing worth backing up yet
  const days = settings.backupReminderDays;
  if (!settings.lastBackupAt) return true;
  const last = new Date(settings.lastBackupAt).getTime();
  if (Number.isNaN(last)) return true;
  return Date.now() - last >= days * 86_400_000;
}
