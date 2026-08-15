import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useProgressStore } from "@/store/progressStore";

interface NavItem {
  to: string;
  label: string;
  icon: ReactNode;
}

function Icon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

const NAV: NavItem[] = [
  { to: "/", label: "Home", icon: <Icon path="M3 11 12 3l9 8M5 9v11h5v-6h4v6h5V9" /> },
  { to: "/learn", label: "Learn", icon: <Icon path="M4 5h10a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H4Zm16 0h-4M20 5v13" /> },
  { to: "/languages", label: "Languages", icon: <Icon path="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3ZM8 9h7M8 13h5" /> },
  { to: "/patterns", label: "Patterns", icon: <Icon path="M4 6h6v6H4Zm10 0h6v6h-6ZM4 16h6v4H4Zm10 0h6v4h-6Z" /> },
  { to: "/challenges", label: "Challenges", icon: <Icon path="M6 3h12v4a6 6 0 0 1-12 0Zm0 4H3V5h3m12 2h3V5h-3M9 21h6M12 13v4" /> },
  { to: "/mock", label: "Mock Interview", icon: <Icon path="M8 10h8M8 14h5M4 5h16v12H7l-3 3Z" /> },
  { to: "/review", label: "Review", icon: <Icon path="M4 4v6h6M20 20v-6h-6M20 9a8 8 0 0 0-14-3M4 15a8 8 0 0 0 14 3" /> },
  { to: "/playground", label: "Playground", icon: <Icon path="m8 8-4 4 4 4m8-8 4 4-4 4M13 5l-2 14" /> },
  { to: "/dashboard", label: "Dashboard", icon: <Icon path="M4 13h6V4H4Zm0 7h6v-4H4Zm10 0h6v-9h-6Zm0-16v5h6V4Z" /> },
  { to: "/badges", label: "Badges", icon: <Icon path="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 16.5 7.1 18l.9-5.5-4-3.9L9.5 8Z" /> },
  { to: "/settings", label: "Settings", icon: <Icon path="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3a7.4 7.4 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7.3 7.3 0 0 0-1.7-1l-.4-2.5H9.2l-.4 2.5a7.3 7.3 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7.3 7.3 0 0 0 1.7 1l.4 2.5h5.6l.4-2.5a7.3 7.3 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6c.1-.3.1-.7.1-1Z" /> },
];

export function Sidebar() {
  const rank = useProgressStore((s) => s.progress.rank);
  const xp = useProgressStore((s) => s.progress.xp);

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-forge-500 text-white">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 17 6-11 6 11M9 13h6" />
          </svg>
        </div>
        <div className="leading-tight">
          <div className="text-sm font-bold tracking-tight">AlgoForge</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">DSA &amp; System Design</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-forge-500 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
              )
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-200 px-5 py-4 dark:border-slate-800">
        <div className="text-[11px] uppercase tracking-wide text-slate-400">Rank</div>
        <div className="text-sm font-semibold">{rank}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">{xp.toLocaleString()} XP</div>
      </div>
    </aside>
  );
}
