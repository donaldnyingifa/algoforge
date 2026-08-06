import { useState } from "react";
import { Link } from "react-router-dom";
import { useProgressStore } from "@/store/progressStore";
import { downloadProgress, isBackupDue } from "@/lib/backup";

/**
 * A dismissible reminder to back up progress, shown when a backup is due.
 * Since there's no backend, exporting to a JSON file is the only safety net.
 */
export function BackupNudge() {
  const progress = useProgressStore((s) => s.progress);
  const markBackedUp = useProgressStore((s) => s.markBackedUp);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !isBackupDue(progress.settings, progress.xp)) return null;

  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm dark:border-amber-900/60 dark:bg-amber-950/30">
      <div className="text-amber-800 dark:text-amber-200">
        <span className="font-semibold">Back up your progress.</span> Your data lives only in
        this browser — export a copy so you don't lose it.
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            downloadProgress(progress);
            markBackedUp();
            setDismissed(true);
          }}
          className="rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-amber-600"
        >
          Export now
        </button>
        <Link
          to="/settings"
          className="text-xs font-medium text-amber-700 underline underline-offset-2 dark:text-amber-300"
        >
          Settings
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-xs text-amber-600 hover:text-amber-800 dark:text-amber-400"
          aria-label="Dismiss"
        >
          Later
        </button>
      </div>
    </div>
  );
}
