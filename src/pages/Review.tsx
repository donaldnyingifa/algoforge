import { Link } from "react-router-dom";
import { PageHeader, Card, EmptyState, DifficultyBadge } from "@/components/ui";
import { useProgressStore } from "@/store/progressStore";
import { getProblem } from "@/data/curriculum";
import { REVIEW_INTERVALS_DAYS } from "@/lib/constants";

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export function Review() {
  const reviewQueue = useProgressStore((s) => s.progress.reviewQueue);
  const reviewProblem = useProgressStore((s) => s.reviewProblem);

  const today = todayIso();
  const sorted = [...reviewQueue].sort((a, b) => (a.dueDate < b.dueDate ? -1 : a.dueDate > b.dueDate ? 1 : 0));
  const due = sorted.filter((e) => e.dueDate <= today);
  const upcoming = sorted.filter((e) => e.dueDate > today);

  return (
    <div>
      <PageHeader
        title="Spaced Review"
        subtitle="Solved problems come back for review on a widening schedule (3 → 7 → 21 days). Grade your recall to reinforce what sticks."
      />

      <div className="mb-6 grid grid-cols-3 gap-3">
        <Card>
          <div className="text-xs uppercase tracking-wide text-slate-400">Due now</div>
          <div className="mt-1 text-2xl font-bold">{due.length}</div>
        </Card>
        <Card>
          <div className="text-xs uppercase tracking-wide text-slate-400">Scheduled</div>
          <div className="mt-1 text-2xl font-bold">{upcoming.length}</div>
        </Card>
        <Card>
          <div className="text-xs uppercase tracking-wide text-slate-400">In review</div>
          <div className="mt-1 text-2xl font-bold">{reviewQueue.length}</div>
        </Card>
      </div>

      <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-forge-500">Due for review</h2>
      {due.length === 0 ? (
        <EmptyState
          title="Nothing due right now."
          hint="Solve problems to add them to the queue — they'll resurface here when due."
        />
      ) : (
        <div className="space-y-2">
          {due.map((e) => {
            const p = getProblem(e.problemId);
            if (!p) return null;
            const stepLabel = `interval ${REVIEW_INTERVALS_DAYS[e.intervalStep] ?? REVIEW_INTERVALS_DAYS[0]}d`;
            return (
              <Card key={e.problemId} className="flex flex-wrap items-center gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <Link to={`/problem/${p.slug}`} className="truncate font-medium hover:text-forge-500">
                      {p.title}
                    </Link>
                    <DifficultyBadge difficulty={p.difficulty} />
                  </div>
                  <div className="mt-0.5 text-xs text-slate-400">
                    due {e.dueDate} · {stepLabel}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/problem/${p.slug}`}
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-forge-400 dark:border-slate-700 dark:text-slate-300"
                  >
                    Practice
                  </Link>
                  <button
                    type="button"
                    onClick={() => reviewProblem(e.problemId, false)}
                    className="rounded-lg border border-amber-300 px-3 py-1.5 text-sm font-medium text-amber-700 transition hover:bg-amber-50 dark:border-amber-900/60 dark:text-amber-300 dark:hover:bg-amber-950/30"
                  >
                    Forgot
                  </button>
                  <button
                    type="button"
                    onClick={() => reviewProblem(e.problemId, true)}
                    className="rounded-lg bg-forge-500 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600"
                  >
                    Remembered
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {upcoming.length > 0 && (
        <>
          <h2 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Scheduled ahead
          </h2>
          <Card className="divide-y divide-slate-100 p-0 dark:divide-slate-800">
            {upcoming.slice(0, 12).map((e) => {
              const p = getProblem(e.problemId);
              if (!p) return null;
              return (
                <Link
                  key={e.problemId}
                  to={`/problem/${p.slug}`}
                  className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <span className="w-24 shrink-0 text-xs text-slate-400">{e.dueDate}</span>
                  <span className="flex-1 truncate text-sm font-medium">{p.title}</span>
                  <DifficultyBadge difficulty={p.difficulty} />
                </Link>
              );
            })}
          </Card>
        </>
      )}
    </div>
  );
}
