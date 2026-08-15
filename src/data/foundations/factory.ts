import type {
  CodeByLanguage,
  Difficulty,
  HintTriple,
  JudgeType,
  Problem,
  Solution,
  TestCase,
  WalkthroughStep,
  WorkedExample,
} from "@/types";
import { XP } from "@/lib/constants";
import { buildFallbackWalkthrough } from "@/lib/walkthrough";

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
  commentedCode?: CodeByLanguage;
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
  walkthrough?: WalkthroughStep[];
  solutions: SolutionDraft[];
  patternIds?: string[];
  trackTags?: string[];
}

/** Build a fully-formed Problem from a compact draft. */
export function mkProblem(stageId: string, d: ProblemDraft): Problem {
  const judgeType = d.judgeType ?? "returnValue";
  const solutions: Solution[] = d.solutions.map((s) => ({
    label: s.label,
    approach: s.approach,
    code: { js: s.js, ts: s.ts },
    commentedCode: s.commentedCode,
    timeComplexity: s.time,
    spaceComplexity: s.space,
  }));
  const walkthrough = d.walkthrough?.length
    ? d.walkthrough
    : buildFallbackWalkthrough({
        title: d.title,
        functionName: d.functionName,
        judgeType,
        examples: d.examples,
        constraints: d.constraints,
        hints: d.hints,
        solutions,
      });
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
    judgeType,
    visibleTests: d.visible,
    hiddenTests: d.hidden,
    hints: d.hints,
    walkthrough,
    solutions,
    xp: XP_BY_DIFF[d.difficulty],
  };
}
