import { useRef, useState } from "react";
import { PageHeader, Card } from "@/components/ui";
import { useThemeStore } from "@/store/themeStore";
import { useProgressStore } from "@/store/progressStore";
import { downloadProgress, parseProgressFile } from "@/lib/backup";
import type { Language } from "@/types";

export function Settings() {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  const progress = useProgressStore((s) => s.progress);
  const settings = progress.settings;
  const updateSettings = useProgressStore((s) => s.updateSettings);
  const replaceProgress = useProgressStore((s) => s.replaceProgress);
  const recomputeDerived = useProgressStore((s) => s.recomputeDerived);
  const markBackedUp = useProgressStore((s) => s.markBackedUp);
  const resetAll = useProgressStore((s) => s.resetAll);

  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  const onExport = () => {
    downloadProgress(progress);
    markBackedUp();
    setMsg({ kind: "ok", text: "Progress exported. Keep the file somewhere safe." });
  };

  const onImportFile = async (file: File) => {
    try {
      const text = await file.text();
      const imported = parseProgressFile(text);
      replaceProgress(imported);
      recomputeDerived();
      setMsg({ kind: "ok", text: "Progress imported and restored." });
    } catch (e) {
      setMsg({ kind: "err", text: e instanceof Error ? e.message : "Import failed." });
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="Everything lives in your browser. Export a backup regularly — it's the only way to move or recover your progress."
      />

      <div className="space-y-4">
        <Card>
          <h3 className="mb-3 font-semibold">Appearance</h3>
          <div className="flex items-center gap-2">
            {(["dark", "light"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTheme(t)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium capitalize transition ${
                  theme === t
                    ? "bg-forge-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3 font-semibold">Preferred language</h3>
          <div className="flex items-center gap-2">
            {(["js", "ts"] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => updateSettings({ preferredLanguage: lang })}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium uppercase transition ${
                  settings.preferredLanguage === lang
                    ? "bg-forge-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Every problem ships in both languages; this sets the default editor tab.
          </p>
        </Card>

        <Card>
          <h3 className="mb-1 font-semibold">Backup &amp; restore</h3>
          <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
            Export all progress to a JSON file, or import one to restore it exactly.
            {settings.lastBackupAt && (
              <>
                {" "}
                Last export:{" "}
                <span className="font-medium">
                  {new Date(settings.lastBackupAt).toLocaleString()}
                </span>
                .
              </>
            )}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onExport}
              className="rounded-lg bg-forge-500 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600"
            >
              Export progress
            </button>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Import progress
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void onImportFile(f);
              }}
            />
          </div>

          <div className="mt-3">
            <label className="text-xs text-slate-500 dark:text-slate-400">
              Remind me to back up every
              <select
                value={settings.backupReminderDays}
                onChange={(e) => updateSettings({ backupReminderDays: Number(e.target.value) })}
                className="mx-2 rounded border border-slate-300 bg-white px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-900"
              >
                {[1, 3, 7, 14, 30].map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              days
            </label>
          </div>

          {msg && (
            <p
              className={`mt-3 text-sm ${
                msg.kind === "ok"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {msg.text}
            </p>
          )}
        </Card>

        <Card>
          <h3 className="mb-1 font-semibold text-red-500">Danger zone</h3>
          <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
            Reset all XP, streaks, badges, and solved history. This cannot be undone — export a
            backup first.
          </p>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Reset ALL progress? This cannot be undone.")) {
                resetAll();
                setMsg({ kind: "ok", text: "All progress has been reset." });
              }
            }}
            className="rounded-lg border border-red-300 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-100 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950"
          >
            Reset all progress
          </button>
        </Card>
      </div>
    </div>
  );
}
