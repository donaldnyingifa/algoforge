/**
 * Manual cloud backup — the confirmed sync strategy (see
 * claude/firebase-auth-plan.md): a "Back up now" / "Restore" pair in
 * Settings, mirroring src/lib/backup.ts's local JSON export/import but
 * against a single Firestore document per signed-in user instead of a file.
 * Not automatic sync — the cloud copy only changes when the user asks.
 */
import { doc, getDoc, setDoc, type Firestore } from "firebase/firestore";
import type { UserProgress } from "@/types";
import { normalizeProgress } from "@/store/progressStore";
import { getFirebaseDb } from "@/lib/firebase";

const BACKUP_KIND = "algoforge-progress-cloud-backup";

interface CloudBackupFile {
  kind: string;
  exportedAt: string;
  progress: UserProgress;
}

export interface CloudBackupInfo {
  exportedAt: string;
  progress: UserProgress;
}

function backupDocRef(db: Firestore, uid: string) {
  // One fixed doc per user — see firestore.rules: users/{uid}/backup/{document=**}.
  return doc(db, "users", uid, "backup", "current");
}

function cloudErrorMessage(err: unknown): string {
  const code = err && typeof err === "object" && "code" in err ? String((err as { code: unknown }).code) : "";
  if (code.includes("permission-denied")) return "Not allowed to access this backup. Try signing in again.";
  if (code.includes("unavailable") || code.includes("network")) {
    return "Couldn't reach the cloud backup service. Check your connection and try again.";
  }
  return "Cloud backup failed. Please try again.";
}

/** Write `progress` to the signed-in user's single cloud backup document. */
export async function backUpToCloud(uid: string, progress: UserProgress): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error("Cloud backup isn't set up yet — see Settings for what's needed.");
  const payload: CloudBackupFile = {
    kind: BACKUP_KIND,
    exportedAt: new Date().toISOString(),
    progress,
  };
  try {
    await setDoc(backupDocRef(db, uid), payload);
  } catch (err) {
    throw new Error(cloudErrorMessage(err));
  }
}

/** Read the signed-in user's cloud backup. Returns null if none exists yet. */
export async function restoreFromCloud(uid: string): Promise<CloudBackupInfo | null> {
  const db = getFirebaseDb();
  if (!db) throw new Error("Cloud backup isn't set up yet — see Settings for what's needed.");
  let snap;
  try {
    snap = await getDoc(backupDocRef(db, uid));
  } catch (err) {
    throw new Error(cloudErrorMessage(err));
  }
  if (!snap.exists()) return null;

  const data = snap.data() as Partial<CloudBackupFile> | undefined;
  if (!data || typeof data.exportedAt !== "string" || !data.progress) {
    throw new Error("The cloud backup looks corrupted.");
  }
  return { exportedAt: data.exportedAt, progress: normalizeProgress(data.progress) };
}
