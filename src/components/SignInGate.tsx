"use client";

import type { ReactNode } from "react";
import { PageHeader, Card, Spinner } from "@/components/ui";
import { useAuthStore } from "@/store/authStore";

/**
 * Wraps gated content: renders `children` when `allow` is true (the content
 * itself is free, e.g. a Foundations lesson) or the user is signed in;
 * otherwise shows a sign-in prompt in their place. See
 * claude/firebase-auth-plan.md for which screens pass which.
 */
export function SignInGate({
  allow,
  title = "Sign in to continue",
  subtitle = "This part of AlgoForge needs a signed-in account.",
  children,
}: {
  allow: boolean;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const user = useAuthStore((s) => s.user);
  const initializing = useAuthStore((s) => s.initializing);
  const signingIn = useAuthStore((s) => s.signingIn);
  const error = useAuthStore((s) => s.error);
  const signIn = useAuthStore((s) => s.signIn);

  if (allow || user) return <>{children}</>;

  if (initializing) {
    return (
      <div className="flex justify-center py-16">
        <Spinner label="Checking sign-in status…" />
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} />
      <Card className="mx-auto max-w-md text-center">
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
          The DSA Foundations stage is always free to use. Everything past it — including this
          page — needs a Google sign-in, so your progress can be backed up and isn't tied to just
          one browser.
        </p>
        <button
          type="button"
          onClick={() => void signIn()}
          disabled={signingIn}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <GoogleIcon />
          {signingIn ? "Signing in…" : "Sign in with Google"}
        </button>
        {error && <p className="mt-3 text-sm text-red-500 dark:text-red-400">{error}</p>}
      </Card>
    </div>
  );
}

/** Exported so Settings' own sign-in control matches this button exactly. */
export function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}
