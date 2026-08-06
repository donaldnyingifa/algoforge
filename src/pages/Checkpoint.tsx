import { Link, useParams } from "react-router-dom";
import { PageHeader, Card, EmptyState, DifficultyBadge } from "@/components/ui";
import { QuizBlock } from "@/components/QuizBlock";
import { getModule, getProblem, complexityQuestions } from "@/data/curriculum";
import { useProgressStore } from "@/store/progressStore";

export function Checkpoint() {
  const { moduleId = "" } = useParams();
  const module = getModule(moduleId);
  const problemStats = useProgressStore((s) => s.progress.problemStats);
  const badges = useProgressStore((s) => s.progress.badges);

  if (!module) {
    return (
      <div>
        <PageHeader title="Checkpoint not found" subtitle="This checkpoint doesn't exist." />
        <Link to="/learn" className="text-sm font-medium text-forge-500 hover:underline">
          ← Back to Learn
        </Link>
      </div>
    );
  }

  const pool = module.testPoolProblemIds
    .map((id) => getProblem(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const solvedInPool = pool.filter((p) => problemStats[p.id]?.status === "solved").length;
  const quizIds = module.complexityQuestionIds ?? [];
  const quizzes = quizIds.length
    ? quizIds.map((id) => complexityQuestions[id]).filter((q): q is NonNullable<typeof q> => Boolean(q))
    : Object.values(complexityQuestions);
  const earned = module.badgeId ? badges.some((b) => b.badgeId === module.badgeId) : false;

  return (
    <div>
      <Link to="/learn" className="text-sm font-medium text-forge-500 hover:underline">
        ← Learn
      </Link>
      <PageHeader title={module.title} subtitle={module.summary} />

      <Card className="mb-6 flex flex-wrap items-center justify-between gap-3 border-forge-200 bg-forge-50 dark:border-forge-800 dark:bg-forge-900/20">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Ready? Take the <span className="font-semibold">timed checkpoint test</span> — a random
          draw from the pool plus complexity questions — to earn your Foundations badge.
          {earned && (
            <span className="ml-1 font-semibold text-emerald-600 dark:text-emerald-400">
              Badge earned ✓
            </span>
          )}
        </p>
        <Link
          to={`/test/${module.id}`}
          className="rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-600"
        >
          Start checkpoint test →
        </Link>
      </Card>

      <section className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Checkpoint pool</h2>
          <span className="text-sm text-slate-400">
            {solvedInPool}/{pool.length} solved
          </span>
        </div>
        {pool.length === 0 ? (
          <EmptyState title="No pool problems registered." />
        ) : (
          <div className="space-y-2">
            {pool.map((p) => {
              const solved = problemStats[p.id]?.status === "solved";
              return (
                <Link key={p.id} to={`/problem/${p.slug}`}>
                  <Card className="flex items-center justify-between transition hover:border-forge-400">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{p.title}</span>
                      <DifficultyBadge difficulty={p.difficulty} />
                    </div>
                    <span className="text-sm">
                      {solved ? (
                        <span className="font-medium text-emerald-500">✓ solved</span>
                      ) : (
                        <span className="text-forge-500">Solve →</span>
                      )}
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {quizzes.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold tracking-tight">Complexity self-check</h2>
          <div className="space-y-3">
            {quizzes.map((q) => (
              <QuizBlock key={q.id} question={q} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
