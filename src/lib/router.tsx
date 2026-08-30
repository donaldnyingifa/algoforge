"use client";

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  replace?: boolean;
  children?: ReactNode;
};

/** A small compatibility layer while the existing SPA moves from React Router to Next. */
export function Link({ to, replace, ...props }: LinkProps) {
  return <NextLink href={to} replace={replace} {...props} />;
}

type NavLinkProps = Omit<LinkProps, "className"> & {
  end?: boolean;
  className?: string | ((state: { isActive: boolean }) => string);
};

export function NavLink({ end = false, className, to, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = end
    ? pathname === to
    : to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);
  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;

  return <Link to={to} className={resolvedClassName} {...props} />;
}

/**
 * The App Router catch-all route deliberately preserves the old route shapes,
 * so legacy page modules can continue to read their named URL parameters.
 *
 * IMPORTANT — this only ever decodes the first two path segments
 * (`/head/value`). Every route in the app today is exactly `/head` or
 * `/head/value`, so that's safe, but it is an assumption, not a general
 * router: a third segment is silently ignored rather than exposed as a
 * param. If you add a deeper route (e.g. a lesson nested under a language
 * course), extend the table below first — otherwise `useParams()` will
 * quietly return the wrong (or missing) value for it. The dev-only warning
 * below exists to catch that case as soon as it happens.
 */
export function useParams(): Record<string, string | undefined> {
  const segments = usePathname()
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment));
  const [head, value, extra] = segments;

  if (head === "problem") return { slug: value };
  if (head === "languages") return { courseId: value };
  if (head === "lesson" || head === "checkpoint" || head === "test") {
    return { moduleId: value };
  }
  if (head === "challenges") return { trackId: value };
  if (head === "case") return { caseId: value };

  if (process.env.NODE_ENV !== "production" && extra !== undefined) {
    console.warn(
      `useParams(): route "/${segments.join("/")}" has more than two segments. ` +
        "This shim only decodes /head/value, so params beyond that are dropped. " +
        "Extend useParams() in src/lib/router.tsx before relying on a deeper path.",
    );
  }

  return {};
}

/** Client-side redirect replacement for React Router's <Navigate>. */
export function Navigate({ to, replace = false }: { to: string; replace?: boolean }) {
  const router = useRouter();

  useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [replace, router, to]);

  return null;
}
