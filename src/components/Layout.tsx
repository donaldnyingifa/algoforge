"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { BackupNudge } from "./BackupNudge";

export function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Navigating anywhere closes the drawer, so it never sits open over the
  // page you just tapped through to.
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  // Escape-to-close and a background scroll lock only need to be wired up
  // while the drawer is actually open.
  useEffect(() => {
    if (!mobileNavOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileNavOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileNavOpen]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop sidebar: a static column, hidden below md: in favor of the drawer below. */}
      <div className="hidden shrink-0 md:block">
        <Sidebar />
      </div>

      {/*
        Mobile drawer: off-canvas below md:, toggled by the header's menu
        button. Always mounted (rather than conditionally rendered) so both
        the open AND close transitions can animate — only visibility,
        opacity and transform change.
      */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${mobileNavOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileNavOpen}
      >
        <div
          className={`absolute inset-0 bg-slate-900/50 transition-opacity duration-200 ${
            mobileNavOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileNavOpen(false)}
        />
        <div
          className={`absolute inset-y-0 left-0 shadow-xl transition-transform duration-200 ease-out ${
            mobileNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar />
          <button
            type="button"
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close menu"
            className="absolute right-3 top-5 flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-slate-200 px-4 sm:px-6 dark:border-slate-800">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileNavOpen}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 md:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="truncate text-sm text-slate-500 dark:text-slate-400">
              Forge your path from beginner to expert
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500 sm:inline dark:bg-slate-800 dark:text-slate-400">
              No account · saved in your browser
            </span>
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
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
