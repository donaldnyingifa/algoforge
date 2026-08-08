import { Link } from "react-router-dom";
import { PageHeader, Card, EmptyState } from "@/components/ui";
import { useProgressStore } from "@/store/progressStore";
import { modules } from "@/data/curriculum";
import { cn } from "@/lib/cn";

const TIER_STYLE: Record<string, string> = {
  bronze: "bg-amber-700",
  silver: "bg-slate-400",
  gold: "bg-yellow-500",
  platinum: "bg-cyan-400",
};

const TIERS = [
  { tier: "bronze", label: "Bronze", note: "≥ 60%" },
  { tier: "silver", label: "Silver", note: "≥ 75%" },
  { tier: "gold", label: "Gold", note: "≥ 90%" },
  { tier: "platinum", label: "Platinum", note: "100%, within par, hint-free" },
];

export function Badges() {
  const badges = useProgressStore((s) => s.progress.badges);

  const badgeModules = Object.values(modules).filter((m) => m.badgeId);
  const badgeByModule = new Map(badges.map((b) => [b.moduleId, b]));

  return (
    <div>
      <PageHeader
        title="Badge Gallery"
        subtitle="Earn tiered badges by passing module proficiency tests. Your best tier is always kept."
      />

      <Card className="mb-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {TIERS.map((t) => (
            <div key={t.tier} className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-white",
                  TIER_STYLE[t.tier],
                )}
              >
                ★
              </span>
              <div>
                <div className="text-sm font-semibold">{t.label}</div>
                <div className="text-[11px] text-slate-400">{t.note}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {badgeModules.length === 0 ? (
        <EmptyState title="No badge-bearing modules yet." />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {badgeModules.map((m) => {
            const earned = badgeByModule.get(m.id);
            return (
              <Card key={m.id} className="flex items-center gap-4">
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg text-white",
                    earned ? TIER_STYLE[earned.tier] : "bg-slate-200 text-slate-400 dark:bg-slate-800",
                  )}
                >
                  ★
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold">{m.title}</div>
                  {earned ? (
                    <div className="text-sm capitalize text-slate-500 dark:text-slate-400">
                      {earned.tier} · {earned.score}% ·{" "}
                      {new Date(earned.earnedAt).toLocaleDateString()}
                    </div>
                  ) : (
                    <div className="text-sm text-slate-400">Not earned yet</div>
                  )}
                </div>
                <Link
                  to={m.id === "m-sd-certification" ? "/sd-cert" : `/test/${m.id}`}
                  className="shrink-0 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  {earned ? "Improve" : m.id === "m-sd-certification" ? "Take exam" : "Take test"}
                </Link>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
