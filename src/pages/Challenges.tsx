import { Link } from "react-router-dom";
import { PageHeader, Card, ProgressBar, DifficultyBadge } from "@/components/ui";
import { useProgressStore } from "@/store/progressStore";
import { getProblem } from "@/data/curriculum";
import {
  allTracks,
  trackSolvedCount,
  dailyProblemIdForDate,
  todayISO,
  type Track,
} from "@/data/tracks";

export function Challenges() {
  const problemStats = useProgressStore((s) => s.progress.problemStats);
  const isSolved = (id: string) => problemStats[id]?.status === "solved";

  const tracks = allTracks().filter((t) => t.kind !== "daily");
  const dailyTrack = allTracks().find((t) => t.kind === "daily");
  const today = todayISO();
  const dailyId = dailyProblemIdForDate(today);
  const dailyProblem = dailyId ? getProblem(dailyId) : undefined;
  const dailyDone = dailyId ? isSolved(dailyId) : false;

  return (
    <div>
      <PageHeader
        title="Challenge Tracks"
        subtitle="Interview-focused tracks assembled from the curriculum's problems. Solve a problem anywhere and it counts across every track it belongs to."
      />

      {dailyProblem && (
        <Card className="mb-6 border-forge-300 bg-forge-50/40 dark:border-forge-900 dark:bg-forge-950/20">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-forge-500">
                Daily Challenge · {today}
              </div>
              <h3 className="mt-1 flex items-center gap-2 font-semibold leading-tight">
                {dailyProblem.title}
                <DifficultyBadge difficulty={dailyProblem.difficulty} />
                {dailyDone && (
                  <span className="text-[11px] font-medium text-emerald-500">solved</span>
                )}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                A new problem is drawn every day. Keep the streak going.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to={`/problem/${dailyProblem.slug}`}
                className="rounded-lg bg-forge-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-forge-600"
              >
                {dailyDone ? "Revisit" : "Solve today's"}
              </Link>
              {dailyTrack && (
                <Link
                  to="/challenges/daily"
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-forge-400 dark:border-slate-700 dark:text-slate-300"
                >
                  This week
                </Link>
              )}
            </div>
          </div>
        </Card>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {tracks.map((t) => (
          <TrackCard key={t.id} track={t} solved={trackSolvedCount(t, isSolved)} />
        ))}
      </div>
    </div>
  );
}

function TrackCard({ track, solved }: { track: Track; solved: number }) {
  const total = track.problemIds.length;
  const complete = total > 0 && solved === total;
  return (
    <Link to={`/challenges/${track.id}`}>
      <Card className="flex h-full flex-col gap-3 transition hover:border-forge-400 hover:shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold leading-tight">{track.title}</h3>
          {complete && <span className="text-[11px] font-medium text-emerald-500">complete</span>}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{track.blurb}</p>
        <div className="mt-auto space-y-1.5">
          <ProgressBar value={solved} max={total} />
          <div className="flex justify-between text-xs text-slate-400">
            <span>
              {solved} / {total} solved
            </span>
            <span>{total > 0 ? Math.round((solved / total) * 100) : 0}%</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
