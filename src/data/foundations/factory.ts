import type {
  CodeByLanguage,
  Difficulty,
  HintTriple,
  JudgeType,
  Problem,
  Solution,
  TestCase,
  WorkedExample,
} from "@/types";
import { XP } from "@/lib/constants";

const XP_BY_DIFF: Record<Difficulty, number> = {
  easy: XP.easy,
  medium: XP.medium,
  hard: XP.hard,
};

/** Compact authoring shape for a solution (js/ts pair + complexity). */
export interface SolutionDraft {
  label: string;
  approach: string;
  js: string;
  ts: string;
  time: string;
  space: string;
}

export interface ProblemDraft {
  id: string;
  slug: string;
  title: string;
  difficulty: Difficulty;
  statement: string;
  examples: WorkedExample[];
  constraints: string[];
  functionName: string;
  judgeType?: JudgeType;
  starter: CodeByLanguage;
  visible: TestCase[];
  hidden: TestCase[];
  hints: HintTriple;
  solutions: SolutionDraft[];
  patternIds?: string[];
  trackTags?: string[];
}

/** Build a fully-formed Problem from a compact draft. */
export function mkProblem(stageId: string, d: ProblemDraft): Problem {
  const solutions: Solution[] = d.solutions.map((s) => ({
    label: s.label,
    approach: s.approach,
    code: { js: s.js, ts: s.ts },
    timeComplexity: s.time,
    spaceComplexity: s.space,
  }));
  return {
    id: d.id,
    slug: d.slug,
    title: d.title,
    difficulty: d.difficulty,
    stageId,
    patternIds: d.patternIds ?? [],
    trackTags: d.trackTags ?? [],
    statement: d.statement,
    examples: d.examples,
    constraints: d.constraints,
    starterCode: d.starter,
    functionName: d.functionName,
    judgeType: d.judgeType ?? "returnValue",
    visibleTests: d.visible,
    hiddenTests: d.hidden,
    hints: d.hints,
    solutions,
    xp: XP_BY_DIFF[d.difficulty],
  };
}
