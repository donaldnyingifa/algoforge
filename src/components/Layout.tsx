import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { BackupNudge } from "./BackupNudge";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 px-6 dark:border-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Forge your path from beginner to expert
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              No account · saved in your browser
            </span>
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto max-w-5xl">
            <BackupNudge />
            {/*
              No Suspense boundary here on purpose: every screen is mounted via
              next/dynamic with its own `loading` fallback (see the shared
              <Spinner/> wired up in app/ClientApp.tsx), so each screen shows
              its own loading state as its chunk loads rather than suspending
              up to a boundary here.
            */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
