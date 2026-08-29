import { Link } from "@/lib/router";
import { Card, PageHeader, ProgressBar } from "@/components/ui";
import { languageCourses, languageLessonProgressId } from "@/data/languages";
import { useProgressStore } from "@/store/progressStore";

export function Languages() {
  const lessonCompletions = useProgressStore((s) => s.progress.lessonCompletions);

  return (
    <div>
      <PageHeader
        title="Programming Languages"
        subtitle="Build language fluency alongside your algorithm practice. Each course is self-contained, hands-on, and ready to grow."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {languageCourses.map((course) => {
          const complete = course.lessons.filter((lesson) =>
            Boolean(lessonCompletions[languageLessonProgressId(course.id, lesson.id)]),
          ).length;
          const card = (
            <Card
              className={`flex h-full flex-col ${course.available ? "transition hover:border-forge-400 hover:shadow-md" : "opacity-70"}`}
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-forge-500">
                    {course.eyebrow}
                  </div>
                  <h2 className="mt-1 text-xl font-bold tracking-tight">{course.name}</h2>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${course.available ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"}`}>
                  {course.available ? "Available" : "Coming soon"}
                </span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{course.description}</p>
              <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                <div className="mb-2 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{course.level}</span>
                  {course.available && <span>{complete}/{course.lessons.length} complete</span>}
                </div>
                {course.available && <ProgressBar value={complete} max={course.lessons.length} />}
              </div>
              {course.available && <div className="mt-4 text-sm font-semibold text-forge-500">Open course →</div>}
            </Card>
          );

          return course.available ? <Link key={course.id} to={`/languages/${course.id}`}>{card}</Link> : <div key={course.id}>{card}</div>;
        })}
      </div>

      <Card className="mt-6 border-dashed bg-slate-50/60 dark:bg-slate-900/40">
        <h2 className="font-semibold">Built to expand</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          New languages follow the same course-and-lesson structure, so they can share progress tracking, interactive examples, and quick checks without changing the app’s navigation.
        </p>
      </Card>
    </div>
  );
}
