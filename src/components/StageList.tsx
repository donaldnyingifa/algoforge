import type { ReactNode } from "react";
import { Link } from "@/lib/router";
import type { Stage } from "@/types";
import { getModule, modulesForStage } from "@/data/curriculum";
import { Card, EmptyState, PrereqChip } from "./ui";
import { useProgressStore } from "@/store/progressStore";
import { useAuthStore } from "@/store/authStore";
import { isModuleFree } from "@/lib/access";

/**
 * Renders a stage and its modules straight from the curriculum registry.
 * With the registry empty (pre-content phases) this shows a friendly empty
 * state per stage; once modules are authored they appear automatically.
 */
export function StageList({
  stages,
  extra,
}: {
  stages: Stage[];
  /** Optional custom content rendered in place of a stage's module grid. */
  extra?: (stageId: string) => ReactNode;
}) {
  return (
    <div className="space-y-8">
      {stages.map((stage) => (
        <StageBlock key={stage.id} stage={stage} extra={extra?.(stage.id)} />
      ))}
    </div>
  );
}

function StageBlock({ stage, extra }: { stage: Stage; extra?: ReactNode }) {
  const mods = modulesForStage(stage.id);
  const lessonCompletions = useProgressStore((s) => s.progress.lessonCompletions);
  const signedIn = useAuthStore((s) => Boolean(s.user));

  return (
    <section>
      <div className="mb-3 flex items-baseline justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            <span className="mr-2 text-slate-400">Stage {stage.order}</span>
            {stage.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">{stage.subtitle}</p>
        </div>
        <span className="text-xs text-slate-400">{mods.length} modules</span>
      </div>

      {extra ? (
        extra
      ) : mods.length === 0 ? (
        <EmptyState
          title="Content lands in an upcoming phase."
          hint="This stage is wired and ready — modules will appear here once authored."
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {mods.map((m) => {
            const done = Boolean(lessonCompletions[m.id]);
            const locked = !signedIn && !isModuleFree(m.id);
            const href =
              m.kind === "challengeTrack" ? `/checkpoint/${m.id}` : `/lesson/${m.id}`;
            return (
              <Link key={m.id} to={href}>
                <Card className="flex h-full flex-col gap-2 transition hover:border-forge-400 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-wide text-forge-500">
                      {m.kind}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {locked && (
                        <span title="Sign in required" aria-label="Sign in required" className="text-[11px]">
                          🔒
                        </span>
                      )}
                      {done && (
                        <span className="text-[11px] font-medium text-emerald-500">done</span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold leading-tight">{m.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{m.summary}</p>
                  {m.prerequisiteModuleIds.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {m.prerequisiteModuleIds.map((id) => (
                        <PrereqChip key={id} label={getModule(id)?.title ?? id} />
                      ))}
                    </div>
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
