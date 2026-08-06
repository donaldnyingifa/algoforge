import { Link, useParams } from "react-router-dom";
import { PageHeader, Card, DifficultyBadge } from "@/components/ui";
import { MarkdownView } from "@/components/MarkdownView";
import { BuildLabView } from "@/components/BuildLabView";
import { QuizBlock } from "@/components/QuizBlock";
import { getModule, getProblem, complexityQuestions } from "@/data/curriculum";
import { useProgressStore } from "@/store/progressStore";
import { XP } from "@/lib/constants";

export function Lesson() {
  const { moduleId = "" } = useParams();
  const module = getModule(moduleId);

  const completedAt = useProgressStore((s) => s.progress.lessonCompletions[moduleId]);
  const problemStats = useProgressStore((s) => s.progress.problemStats);
  const completeLesson = useProgressStore((s) => s.completeLesson);

  if (!module) {
    return (
      <div>
        <PageHeader title="Lesson not found" subtitle="This module doesn't exist." />
        <Link to="/learn" className="text-sm font-medium text-forge-500 hover:underline">
          ← Back to Learn
        </Link>
      </div>
    );
  }

  const drills = module.drillProblemIds
    .map((id) => getProblem(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const quizzes = (module.complexityQuestionIds ?? [])
    .map((id) => complexityQuestions[id])
    .filter((q): q is NonNullable<typeof q> => Boolean(q));
  const hasTest = Boolean(module.badgeId) && module.testPoolProblemIds.length > 0;

  return (
    <div>
      <Link to="/learn" className="text-sm font-medium text-forge-500 hover:underline">
        ← Learn
      </Link>
      <PageHeader title={module.title} subtitle={module.summary} />

      {module.lessonSections.map((section) => (
        <section key={section.heading} className="mb-6">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">{section.heading}</h2>
          <MarkdownView source={section.body} runnable />
        </section>
      ))}

      {module.buildLab && (
        <section className="mb-6">
          <BuildLabView lab={module.buildLab} />
        </section>
      )}

      {quizzes.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">Complexity check</h2>
          <div className="space-y-3">
            {quizzes.map((q) => (
              <QuizBlock key={q.id} question={q} />
            ))}
          </div>
        </section>
      )}

      <div className="my-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={Boolean(completedAt)}
          onClick={() => completeLesson(module.id, XP.lesson)}
          className="rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-600 disabled:cursor-default disabled:opacity-60"
        >
          {completedAt ? "✓ Lesson completed" : `Mark lesson complete (+${XP.lesson} XP)`}
        </button>
        {hasTest && (
          <Link
            to={`/test/${module.id}`}
            className="rounded-lg border border-forge-400 px-4 py-2 text-sm font-semibold text-forge-500 transition hover:bg-forge-50 dark:hover:bg-forge-900/20"
          >
            Take module test →
          </Link>
        )}
      </div>

      {drills.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold tracking-tight">Practice</h2>
          <div className="space-y-2">
            {drills.map((p, i) => {
              const solved = problemStats[p.id]?.status === "solved";
              return (
                <Link key={p.id} to={`/problem/${p.slug}`}>
                  <Card className="flex items-center justify-between transition hover:border-forge-400">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-slate-400">{i + 1}</span>
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
        </section>
      )}
    </div>
  );
}
