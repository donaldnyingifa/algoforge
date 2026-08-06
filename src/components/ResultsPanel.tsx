import type { ReactNode } from "react";
import type { RunOutcome } from "@/runner/types";
import { cn } from "@/lib/cn";

export function ResultsPanel({
  outcome,
  running,
}: {
  outcome: RunOutcome | null;
  running: boolean;
}) {
  if (running) {
    return (
      <PanelShell>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Spinner /> Running your code…
        </div>
      </PanelShell>
    );
  }

  if (!outcome) {
    return (
      <PanelShell>
        <p className="text-sm text-slate-400">
          Run your code to see console output and test verdicts here.
        </p>
      </PanelShell>
    );
  }

  return (
    <PanelShell>
      <StatusBanner outcome={outcome} />

      {outcome.results.length > 0 && (
        <div className="mt-3 space-y-2">
          <SummaryLine outcome={outcome} />
          {outcome.results.map((r, i) => (
            <div
              key={i}
              className={cn(
                "rounded-lg border p-3 text-sm",
                r.passed
                  ? "border-emerald-300/60 bg-emerald-50 dark:border-emerald-900/60 dark:bg-emerald-950/30"
                  : "border-red-300/60 bg-red-50 dark:border-red-900/60 dark:bg-red-950/30",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {r.passed ? "✅" : "❌"} {r.label}
                </span>
                <span className="text-xs text-slate-400">{r.runtimeMs.toFixed(2)} ms</span>
              </div>
              {!r.passed && (
                <div className="mt-2 space-y-1 font-mono text-xs">
                  {r.error ? (
                    <div className="text-red-600 dark:text-red-400">threw: {r.error}</div>
                  ) : (
                    <>
                      <Diff label="expected" value={r.expected} tone="ok" />
                      <Diff label="received" value={r.received} tone="bad" />
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {outcome.console.length > 0 && (
        <div className="mt-4">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Console
          </div>
          <div className="rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-100">
            {outcome.console.map((line, i) => (
              <div
                key={i}
                className={cn(
                  "whitespace-pre-wrap",
                  line.level === "warn" && "text-amber-300",
                  line.level === "error" && "text-red-400",
                )}
              >
                {line.text}
              </div>
            ))}
          </div>
        </div>
      )}

      {outcome.status === "ok" &&
        outcome.results.length === 0 &&
        outcome.console.length === 0 && (
          <p className="mt-3 text-sm text-slate-400">
            Finished with no output in {outcome.totalRuntimeMs.toFixed(1)} ms.
          </p>
        )}
    </PanelShell>
  );
}

function PanelShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-full overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      {children}
    </div>
  );
}

function StatusBanner({ outcome }: { outcome: RunOutcome }) {
  if (outcome.status === "timeout") {
    return <Banner tone="bad">⏱ {outcome.error?.message}</Banner>;
  }
  if (outcome.status === "compileError") {
    const at =
      outcome.error?.line != null
        ? ` (line ${outcome.error.line}${outcome.error.column != null ? `, col ${outcome.error.column}` : ""})`
        : "";
    return (
      <Banner tone="bad">
        <span className="font-semibold">Compile error{at}:</span>{" "}
        <span className="font-mono">{outcome.error?.message}</span>
      </Banner>
    );
  }
  if (outcome.status === "runtimeError") {
    return (
      <Banner tone="bad">
        <span className="font-semibold">Runtime error:</span>{" "}
        <span className="font-mono">{outcome.error?.message}</span>
      </Banner>
    );
  }
  return null;
}

function SummaryLine({ outcome }: { outcome: RunOutcome }) {
  const passed = outcome.results.filter((r) => r.passed).length;
  const total = outcome.results.length;
  const all = passed === total;
  return (
    <div
      className={cn(
        "rounded-lg px-3 py-2 text-sm font-medium",
        all
          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300"
          : "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300",
      )}
    >
      {passed} / {total} tests passed
    </div>
  );
}

function Diff({ label, value, tone }: { label: string; value: string; tone: "ok" | "bad" }) {
  return (
    <div className="flex gap-2">
      <span className="w-16 shrink-0 text-slate-400">{label}</span>
      <span className={tone === "ok" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}>
        {value}
      </span>
    </div>
  );
}

function Banner({ tone, children }: { tone: "bad"; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-lg px-3 py-2 text-sm",
        tone === "bad" && "bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-300",
      )}
    >
      {children}
    </div>
  );
}

function Spinner() {
  return (
    <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
  );
}
