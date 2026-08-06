import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Link } from "react-router-dom";
import { PageHeader, Card, EmptyState, ProgressBar, DifficultyBadge } from "@/components/ui";
import { useProgressStore } from "@/store/progressStore";
import { nextRank } from "@/lib/constants";
import { stages, getProblem } from "@/data/curriculum";
import {
  allTracks,
  trackSolvedCount,
  dailyProblemIdForDate,
  todayISO,
} from "@/data/tracks";
import {
  stageCompletion,
  weakestPatterns,
  recentActivity,
  solvedCount,
} from "@/lib/insights";

export function Dashboard() {
  const progress = useProgressStore((s) => s.progress);
  const upcoming = nextRank(progress.xp);
  const activity = recentActivity(progress, 14);
  const hasActivity = activity.some((d) => d.xp > 0);
  const completions = stages
    .map((s) => stageCompletion(s, progress))
    .filter((c) => c.total > 0);
  const weakest = weakestPatterns(progress);

  const stats = [
    { label: "XP", value: progress.xp.toLocaleString() },
    { label: "Rank", value: progress.rank },
    { label: "Current streak", value: `${progress.streak.current}d` },
    { label: "Best streak", value: `${progress.streak.best}d` },
    { label: "Problems solved", value: solvedCount(progress) },
    { label: "Badges", value: progress.badges.length },
  ];

  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Your progress at a glance — XP, streaks, per-stage completion, and where to focus next."
      />

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label}>
            <div className="text-xs uppercase tracking-wide text-slate-400">{s.label}</div>
            <div className="mt-1 text-2xl font-bold">{s.value}</div>
          </Card>
        ))}
      </div>

      {upcoming && (
        <Card className="mb-6">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Next rank:{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {upcoming.rank}
            </span>{" "}
            at {upcoming.minXp.toLocaleString()} XP
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-forge-500 transition-all"
              style={{ width: `${Math.min(100, (progress.xp / upcoming.minXp) * 100)}%` }}
            />
          </div>
        </Card>
      )}

      <div className="mb-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Activity — last 14 days
          </h2>
          {hasActivity ? (
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activity} margin={{ top: 4, right: 8, bottom: 0, left: -20 }}>
                  <defs>
                    <linearGradient id="xpFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3167f5" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#3167f5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#64748b33" />
                  <XAxis dataKey="label" tick={{ fill: "#94a3b8", fontSize: 11 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} tickLine={false} axisLine={false} allowDecimals={false} />
                  <Tooltip
                    contentStyle={{
                      background: "#0f172a",
                      border: "none",
                      borderRadius: 8,
                      color: "#f1f5f9",
                      fontSize: 12,
                    }}
                    labelStyle={{ color: "#94a3b8" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="xp"
                    stroke="#3167f5"
                    strokeWidth={2}
                    fill="url(#xpFill)"
                    name="XP"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <EmptyState title="No activity yet." hint="Solve a problem or finish a lesson to start the graph." />
          )}
        </Card>

        <Card>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Weakest patterns
          </h2>
          {weakest.length > 0 ? (
            <div className="space-y-3">
              {weakest.map((w) => (
                <div key={w.patternId}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium capitalize">{w.patternId.replace(/-/g, " ")}</span>
                    <span className="text-slate-400">
                      {w.solved}/{w.attempted} · {Math.round(w.solveRate * 100)}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div
                      className="h-full rounded-full bg-amber-500"
                      style={{ width: `${Math.round(w.solveRate * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Not enough data yet."
              hint="Once you attempt pattern-tagged problems, your weakest areas surface here."
            />
          )}
        </Card>
      </div>

      {(() => {
        const today = new Date().toISOString().slice(0, 10);
        const dueCount = progress.reviewQueue.filter((e) => e.dueDate <= today).length;
        return (
          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            <Link to="/mock">
              <Card className="flex items-center justify-between transition hover:border-forge-400 hover:shadow-md">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-forge-500">
                    Interview prep
                  </div>
                  <div className="mt-0.5 font-semibold">Start a mock interview</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Timed, mixed-pattern practice.
                  </p>
                </div>
                <span className="text-forge-500">→</span>
              </Card>
            </Link>
            <Link to="/review">
              <Card className="flex items-center justify-between transition hover:border-forge-400 hover:shadow-md">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-forge-500">
                    Spaced review
                  </div>
                  <div className="mt-0.5 font-semibold">
                    {dueCount > 0 ? `${dueCount} problem${dueCount === 1 ? "" : "s"} due` : "Nothing due"}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Reinforce solved problems on schedule.
                  </p>
                </div>
                <span className="text-forge-500">→</span>
              </Card>
            </Link>
          </div>
        );
      })()}

      <div className="mb-6">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Challenge tracks</h2>
          <Link to="/challenges" className="text-sm text-forge-500 hover:underline">
            View all →
          </Link>
        </div>
        {(() => {
          const isSolved = (id: string) => progress.problemStats[id]?.status === "solved";
          const cardTracks = allTracks().filter((t) => t.kind !== "daily");
          const dailyId = dailyProblemIdForDate(todayISO());
          const dailyProblem = dailyId ? getProblem(dailyId) : undefined;
          const dailyDone = dailyId ? isSolved(dailyId) : false;
          return (
            <div className="grid gap-3 sm:grid-cols-2">
              {cardTracks.map((t) => {
                const solved = trackSolvedCount(t, isSolved);
                const total = t.problemIds.length;
                return (
                  <Link key={t.id} to={`/challenges/${t.id}`}>
                    <Card className="transition hover:border-forge-400 hover:shadow-md">
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium">{t.title}</span>
                        <span className="text-slate-400">
                          {solved}/{total}
                        </span>
                      </div>
                      <ProgressBar value={solved} max={total} />
                    </Card>
                  </Link>
                );
              })}
              {dailyProblem && (
                <Link to="/challenges/daily" className="sm:col-span-2">
                  <Card className="flex flex-wrap items-center justify-between gap-2 transition hover:border-forge-400 hover:shadow-md">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-forge-500">
                        Today
                      </span>
                      <span className="font-medium">{dailyProblem.title}</span>
                      <DifficultyBadge difficulty={dailyProblem.difficulty} />
                    </div>
                    <span
                      className={
                        dailyDone
                          ? "text-[11px] font-medium text-emerald-500"
                          : "text-[11px] font-medium text-forge-500"
                      }
                    >
                      {dailyDone ? "solved" : "solve today's"}
                    </span>
                  </Card>
                </Link>
              )}
            </div>
          );
        })()}
      </div>

      <h2 className="mb-3 text-lg font-semibold tracking-tight">Per-stage completion</h2>
      {completions.length > 0 ? (
        <div className="space-y-3">
          {completions.map(({ stage, completed, total, percent }) => (
            <Card key={stage.id}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium">{stage.title}</span>
                <span className="text-slate-400">
                  {completed}/{total} · {percent}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className="h-full rounded-full bg-forge-500 transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title={`${stages.length} stages wired and waiting.`}
          hint="Completion bars fill in as content is authored and you work through it."
        />
      )}
    </div>
  );
}
