import { Link, useParams } from "@/lib/router";
import { PageHeader, Card, ProgressBar, DifficultyBadge, EmptyState } from "@/components/ui";
import { useProgressStore } from "@/store/progressStore";
import { getProblem } from "@/data/curriculum";
import {
  getTrack,
  trackSolvedCount,
  dailyProblemIdForDate,
  todayISO,
  type Track,
  type TrackGroup,
} from "@/data/tracks";

export function ChallengeTrack() {
  const { trackId = "" } = useParams();
  const problemStats = useProgressStore((s) => s.progress.problemStats);
  const isSolved = (id: string) => problemStats[id]?.status === "solved";

  const track = getTrack(trackId);
  if (!track) {
    return (
      <div>
        <PageHeader title="Track not found" />
        <EmptyState title="That challenge track doesn't exist." hint="Pick one from the Challenges page." />
        <Link to="/challenges" className="mt-4 inline-block text-sm text-forge-500 hover:underline">
          ← All tracks
        </Link>
      </div>
    );
  }

  if (track.kind === "daily") return <DailyTrackView track={track} isSolved={isSolved} />;

  const solved = trackSolvedCount(track, isSolved);
  const total = track.problemIds.length;

  return (
    <div>
      <Link to="/challenges" className="mb-3 inline-block text-sm text-forge-500 hover:underline">
        ← All tracks
      </Link>
      <PageHeader title={track.title} subtitle={track.blurb} />

      <Card className="mb-6">
        <div className="mb-1.5 flex justify-between text-sm">
          <span className="font-medium">
            {solved} / {total} solved
          </span>
          <span className="text-slate-400">{total > 0 ? Math.round((solved / total) * 100) : 0}%</span>
        </div>
        <ProgressBar value={solved} max={total} />
      </Card>

      <div className="space-y-6">
        {track.groups.map((g) => (
          <GroupBlock key={g.label} group={g} isSolved={isSolved} />
        ))}
      </div>
    </div>
  );
}

function GroupBlock({
  group,
  isSolved,
}: {
  group: TrackGroup;
  isSolved: (id: string) => boolean;
}) {
  const solved = group.problemIds.filter(isSolved).length;
  return (
    <section>
      <div className="mb-2 flex items-baseline justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-forge-500">{group.label}</h2>
        <span className="text-xs text-slate-400">
          {solved} / {group.problemIds.length}
        </span>
      </div>
      <Card className="divide-y divide-slate-100 p-0 dark:divide-slate-800">
        {group.problemIds.map((id, i) => (
          <ProblemRow key={id} problemId={id} index={i + 1} solved={isSolved(id)} />
        ))}
      </Card>
    </section>
  );
}

function ProblemRow({
  problemId,
  index,
  solved,
}: {
  problemId: string;
  index: number;
  solved: boolean;
}) {
  const p = getProblem(problemId);
  if (!p) return null;
  return (
    <Link
      to={`/problem/${p.slug}`}
      className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
    >
      <span
        className={
          solved
            ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white"
            : "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[11px] text-slate-400 dark:border-slate-600"
        }
        aria-hidden
      >
        {solved ? "✓" : index}
      </span>
      <span className="flex-1 truncate text-sm font-medium">{p.title}</span>
      <DifficultyBadge difficulty={p.difficulty} />
    </Link>
  );
}

function DailyTrackView({ track, isSolved }: { track: Track; isSolved: (id: string) => boolean }) {
  const today = new Date();
  // This week: Monday..Sunday containing today.
  const day = (today.getDay() + 6) % 7; // 0 = Monday
  const monday = new Date(today);
  monday.setDate(today.getDate() - day);
  const days: { iso: string; label: string; isToday: boolean }[] = [];
  const todayStr = todayISO();
  const names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const iso = `${d.getFullYear()}-${mm}-${dd}`;
    days.push({ iso, label: `${names[i]} ${mm}/${dd}`, isToday: iso === todayStr });
  }

  const streak = useProgressStore((s) => s.progress.streak);

  return (
    <div>
      <Link to="/challenges" className="mb-3 inline-block text-sm text-forge-500 hover:underline">
        ← All tracks
      </Link>
      <PageHeader title={track.title} subtitle={track.blurb} />

      <Card className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm">
          <span className="font-medium">Current streak: </span>
          <span className="text-forge-500">{streak.current} day{streak.current === 1 ? "" : "s"}</span>
          <span className="ml-3 text-slate-400">best {streak.best}</span>
        </div>
        <span className="text-xs text-slate-400">Drawn from the Extended 150 pool</span>
      </Card>

      <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-forge-500">This week</h2>
      <Card className="divide-y divide-slate-100 p-0 dark:divide-slate-800">
        {days.map((d) => {
          const pid = dailyProblemIdForDate(d.iso);
          const p = pid ? getProblem(pid) : undefined;
          if (!p) return null;
          const solved = pid ? isSolved(pid) : false;
          return (
            <Link
              key={d.iso}
              to={`/problem/${p.slug}`}
              className={
                "flex items-center gap-3 px-4 py-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50" +
                (d.isToday ? " bg-forge-50/50 dark:bg-forge-950/20" : "")
              }
            >
              <span className="w-20 shrink-0 text-xs font-medium text-slate-400">{d.label}</span>
              <span
                className={
                  solved
                    ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white"
                    : "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[11px] text-slate-400 dark:border-slate-600"
                }
                aria-hidden
              >
                {solved ? "✓" : ""}
              </span>
              <span className="flex-1 truncate text-sm font-medium">
                {p.title}
                {d.isToday && <span className="ml-2 text-[11px] font-semibold text-forge-500">today</span>}
              </span>
              <DifficultyBadge difficulty={p.difficulty} />
            </Link>
          );
        })}
      </Card>
    </div>
  );
}
