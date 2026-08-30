"use client";

import { useEffect } from "react";

/**
 * Root error boundary (Next.js App Router convention: app/error.tsx).
 * Catches any throw from the SPA shell or a screen that isn't handled
 * locally, so a bug in one screen shows a recoverable message instead of a
 * blank page. Progress lives in localStorage/IndexedDB, not React state, so
 * it survives a crash here untouched — the copy below says as much.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("AlgoForge crashed:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/50 dark:text-red-400">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
          </svg>
        </div>
        <h1 className="text-lg font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          AlgoForge hit an unexpected error. Your progress is saved in your browser and
          hasn&apos;t been lost — try again, or head back home.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-600"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-forge-400 dark:border-slate-700 dark:text-slate-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
