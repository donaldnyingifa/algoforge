import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Card, PageHeader, ProgressBar } from "@/components/ui";
import { MarkdownView } from "@/components/MarkdownView";
import { QuizBlock } from "@/components/QuizBlock";
import { getLanguageCourse, languageLessonProgressId } from "@/data/languages";
import { XP } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useProgressStore } from "@/store/progressStore";

export function LanguageCourse() {
  const { courseId = "" } = useParams();
  const course = getLanguageCourse(courseId);
  const lessonCompletions = useProgressStore((s) => s.progress.lessonCompletions);
  const completeLesson = useProgressStore((s) => s.completeLesson);
  const [activeLessonId, setActiveLessonId] = useState(course?.lessons[0]?.id ?? "");

  if (!course || !course.available) return <Navigate to="/languages" replace />;
  const activeLesson = course.lessons.find((lesson) => lesson.id === activeLessonId) ?? course.lessons[0];
  if (!activeLesson) return <Navigate to="/languages" replace />;

  const completeCount = course.lessons.filter((lesson) =>
    Boolean(lessonCompletions[languageLessonProgressId(course.id, lesson.id)]),
  ).length;
  const progressId = languageLessonProgressId(course.id, activeLesson.id);
  const isComplete = Boolean(lessonCompletions[progressId]);

  return (
    <div>
      <Link to="/languages" className="text-sm font-medium text-forge-500 hover:underline">← Programming languages</Link>
      <PageHeader title={course.name} subtitle={course.description} />

      <Card className="mb-6 bg-gradient-to-r from-forge-500 to-forge-700 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-white/80">Course progress</p>
            <p className="text-2xl font-bold">{completeCount} of {course.lessons.length} lessons</p>
          </div>
          <div className="w-full max-w-xs"><ProgressBar value={completeCount} max={course.lessons.length} className="bg-white/25 [&>div]:bg-white" /></div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Lessons</div>
          <div className="space-y-1">
            {course.lessons.map((lesson, index) => {
              const done = Boolean(lessonCompletions[languageLessonProgressId(course.id, lesson.id)]);
              const active = lesson.id === activeLesson.id;
              return (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => setActiveLessonId(lesson.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition",
                    active ? "bg-forge-50 text-forge-700 dark:bg-forge-900/25 dark:text-forge-300" : "hover:bg-slate-50 dark:hover:bg-slate-800",
                  )}
                >
                  <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold", done ? "bg-emerald-500 text-white" : active ? "bg-forge-500 text-white" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400")}>
                    {done ? "✓" : index + 1}
                  </span>
                  <span className="min-w-0"><span className="block truncate font-medium">{lesson.title}</span><span className="text-[11px] text-slate-400">{lesson.duration}</span></span>
                </button>
              );
            })}
          </div>
        </aside>

        <article className="min-w-0">
          <div className="mb-6">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-forge-500">Lesson {course.lessons.findIndex((lesson) => lesson.id === activeLesson.id) + 1}</div>
            <h2 className="text-2xl font-bold tracking-tight">{activeLesson.title}</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{activeLesson.summary} · {activeLesson.duration}</p>
          </div>
          {activeLesson.sections.map((section) => (
            <section key={section.heading} className="mb-7">
              <h3 className="mb-2 text-lg font-semibold tracking-tight">{section.heading}</h3>
              <MarkdownView source={section.body} runnable />
            </section>
          ))}
          <section className="mb-6">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">Quick check</h3>
            <QuizBlock question={activeLesson.quiz} />
          </section>
          <button
            type="button"
            disabled={isComplete}
            onClick={() => completeLesson(progressId, XP.lesson)}
            className="rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-600 disabled:cursor-default disabled:opacity-60"
          >
            {isComplete ? "✓ Lesson completed" : `Mark lesson complete (+${XP.lesson} XP)`}
          </button>
        </article>
      </div>
    </div>
  );
}
