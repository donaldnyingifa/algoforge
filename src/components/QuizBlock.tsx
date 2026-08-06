import { useState } from "react";
import type { QuizQuestion } from "@/types";
import { MarkdownView } from "./MarkdownView";
import { cn } from "@/lib/cn";

/**
 * Renders a single auto-gradeable quiz question. Phase 5 supports mcq and
 * multiSelect; numericTolerance / ordering / matching arrive in Phase 14.
 * Calls back with whether the submitted answer was correct.
 */
export function QuizBlock({
  question,
  onGraded,
}: {
  question: QuizQuestion;
  onGraded?: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const isMulti = question.kind === "multiSelect";
  const options = question.options ?? [];

  const toggle = (i: number) => {
    if (submitted) return;
    setPicked((prev) => {
      const next = new Set(isMulti ? prev : []);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const correctSet = new Set(
    isMulti ? question.answerIndices ?? [] : question.answerIndex != null ? [question.answerIndex] : [],
  );

  const grade = () => {
    if (picked.size === 0 || submitted) return;
    const correct =
      picked.size === correctSet.size && [...picked].every((i) => correctSet.has(i));
    setSubmitted(true);
    onGraded?.(correct);
  };

  const isCorrect =
    submitted && picked.size === correctSet.size && [...picked].every((i) => correctSet.has(i));

  if (question.kind !== "mcq" && question.kind !== "multiSelect") {
    return (
      <div className="rounded-lg border border-slate-200 p-3 text-sm text-slate-500 dark:border-slate-800">
        This question type ({question.kind}) becomes interactive in a later phase.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
      <div className="mb-3">
        <MarkdownView source={question.prompt} />
      </div>
      <div className="space-y-2">
        {options.map((opt, i) => {
          const chosen = picked.has(i);
          const showCorrect = submitted && correctSet.has(i);
          const showWrong = submitted && chosen && !correctSet.has(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              disabled={submitted}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition",
                showCorrect
                  ? "border-emerald-400 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30"
                  : showWrong
                    ? "border-red-400 bg-red-50 dark:border-red-800 dark:bg-red-950/30"
                    : chosen
                      ? "border-forge-400 bg-forge-50 dark:border-forge-700 dark:bg-forge-900/20"
                      : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/50",
              )}
            >
              <span
                className={cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[10px]",
                  isMulti ? "rounded" : "rounded-full",
                  chosen ? "border-forge-500 bg-forge-500 text-white" : "border-slate-400",
                )}
              >
                {chosen ? "✓" : ""}
              </span>
              <span className="font-mono">{opt}</span>
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          type="button"
          onClick={grade}
          disabled={picked.size === 0}
          className="mt-3 rounded-lg bg-forge-500 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-forge-600 disabled:opacity-50"
        >
          Check answer
        </button>
      ) : (
        <div className="mt-3">
          <div
            className={cn(
              "mb-2 text-sm font-semibold",
              isCorrect ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400",
            )}
          >
            {isCorrect ? "Correct!" : "Not quite."}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            <MarkdownView source={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
}
