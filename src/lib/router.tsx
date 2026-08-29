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
 */
export function useParams(): Record<string, string | undefined> {
  const segments = usePathname()
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment));
  const [head, value] = segments;

  if (head === "problem") return { slug: value };
  if (head === "languages") return { courseId: value };
  if (head === "lesson" || head === "checkpoint" || head === "test") {
    return { moduleId: value };
  }
  if (head === "challenges") return { trackId: value };
  if (head === "case") return { caseId: value };
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
