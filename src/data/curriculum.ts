import type {
  CaseStudy,
  CurriculumTrack,
  Difficulty,
  Module,
  Problem,
  QuizQuestion,
  Stage,
} from "@/types";

/**
 * The curriculum registry.
 *
 * Phase 1 wires the *structure* only: every stage exists with its title and
 * ordering, and pages render from these arrays/maps. Modules, problems, case
 * studies, and complexity questions are populated by later content phases —
 * their maps start empty and pages show empty states until then.
 */

/* ---- Stage scaffolding (DSA track: 7 stages) --------------------- */

const dsaStages: Stage[] = [
  {
    id: "dsa-s1",
    track: "dsa",
    order: 1,
    title: "Foundations",
    subtitle: "Thinking in algorithms, Big O, JS/TS for DSA, math toolkit",
    moduleIds: [],
  },
  {
    id: "dsa-s2",
    track: "dsa",
    order: 2,
    title: "Core Data Structures",
    subtitle: "Build arrays, lists, stacks, hash tables, trees, heaps & more",
    moduleIds: [],
  },
  {
    id: "dsa-s3",
    track: "dsa",
    order: 3,
    title: "Core Algorithms",
    subtitle: "Recursion, sorting, binary search, backtracking",
    moduleIds: [],
  },
  {
    id: "dsa-s4",
    track: "dsa",
    order: 4,
    title: "Patterns — Tier 1",
    subtitle: "Prefix sum, two pointers, sliding window, and friends",
    moduleIds: [],
  },
  {
    id: "dsa-s5",
    track: "dsa",
    order: 5,
    title: "Patterns — Tier 2",
    subtitle: "Trees, graphs, intervals, top-K, heaps, backtracking, greedy",
    moduleIds: [],
  },
  {
    id: "dsa-s6",
    track: "dsa",
    order: 6,
    title: "Patterns — Tier 3",
    subtitle: "Dynamic programming, union-find, shortest paths, bit tricks",
    moduleIds: [],
  },
  {
    id: "dsa-s7",
    track: "dsa",
    order: 7,
    title: "Expert",
    subtitle: "String algorithms, segment trees, MSTs, design, mock interviews",
    moduleIds: [],
  },
];

/* ---- Stage scaffolding (System Design track: 4 stages) ----------- */

const sdStages: Stage[] = [
  {
    id: "sd-s1",
    track: "systemDesign",
    order: 1,
    title: "SD — Warm-ups & Foundations",
    subtitle: "The design framework, estimation, networking, building blocks",
    moduleIds: [],
  },
  {
    id: "sd-s2",
    track: "systemDesign",
    order: 2,
    title: "SD — Build the Blocks",
    subtitle: "Rate limiters, hashing rings, Bloom filters, KV stores & more",
    moduleIds: [],
  },
  {
    id: "sd-s3",
    track: "systemDesign",
    order: 3,
    title: "SD — Case Studies",
    subtitle: "Fourteen designs, ordered easy to hard",
    moduleIds: [],
  },
  {
    id: "sd-s4",
    track: "systemDesign",
    order: 4,
    title: "SD — Interviews & Certification",
    subtitle: "Mock design interviews and the System Design certification",
    moduleIds: [],
  },
];

export const stages: Stage[] = [...dsaStages, ...sdStages];

/* ---- Content maps (populated by later phases) -------------------- */

export const modules: Record<string, Module> = {};
export const problems: Record<string, Problem> = {};
export const caseStudies: Record<string, CaseStudy> = {};
/** Pool of complexity MCQs drawn into module tests. */
export const complexityQuestions: Record<string, QuizQuestion> = {};

/** slug -> id index, kept in step with `problems` so slug lookups are O(1). */
const problemIdBySlug: Record<string, string> = {};

/* ---- Registration (used by content files) ------------------------ */

export function registerProblem(problem: Problem): void {
  const slugOwnerId = problemIdBySlug[problem.slug];
  if (slugOwnerId && slugOwnerId !== problem.id) {
    throw new Error(
      `Duplicate problem slug "${problem.slug}" for "${slugOwnerId}" and "${problem.id}".`,
    );
  }
  problems[problem.id] = problem;
  problemIdBySlug[problem.slug] = problem.id;
}

/** Register a module and attach it to its stage (idempotent). */
export function registerModule(module: Module): void {
  const existing = modules[module.id];
  if (existing && existing !== module) {
    throw new Error(`Duplicate module id "${module.id}".`);
  }
  modules[module.id] = module;
  const stage = getStage(module.stageId);
  if (stage && !stage.moduleIds.includes(module.id)) {
    stage.moduleIds.push(module.id);
  }
}

export function registerCaseStudy(study: CaseStudy): void {
  const existing = caseStudies[study.id];
  if (existing && existing !== study) {
    throw new Error(`Duplicate case study id "${study.id}".`);
  }
  caseStudies[study.id] = study;
}

export function registerComplexityQuestion(question: QuizQuestion): void {
  const existing = complexityQuestions[question.id];
  if (existing && existing !== question) {
    throw new Error(`Duplicate complexity question id "${question.id}".`);
  }
  complexityQuestions[question.id] = question;
}

/* ---- Selectors --------------------------------------------------- */

export function stagesForTrack(track: CurriculumTrack): Stage[] {
  return stages
    .filter((s) => s.track === track)
    .sort((a, b) => a.order - b.order);
}

export function getStage(stageId: string): Stage | undefined {
  return stages.find((s) => s.id === stageId);
}

/** All registered case studies, ordered easy → hard then by title. */
export function allCaseStudies(): CaseStudy[] {
  const rank: Record<Difficulty, number> = { easy: 0, medium: 1, hard: 2 };
  return Object.values(caseStudies).sort(
    (a, b) => rank[a.difficulty] - rank[b.difficulty] || (a.title < b.title ? -1 : a.title > b.title ? 1 : 0),
  );
}

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies[id];
}

export function modulesForStage(stageId: string): Module[] {
  const stage = getStage(stageId);
  if (!stage) return [];
  return stage.moduleIds
    .map((id) => modules[id])
    .filter((m): m is Module => Boolean(m));
}

export function getModule(moduleId: string): Module | undefined {
  return modules[moduleId];
}

export function getProblem(problemId: string): Problem | undefined {
  return problems[problemId];
}

export function getProblemBySlug(slug: string): Problem | undefined {
  const id = problemIdBySlug[slug];
  return id ? problems[id] : undefined;
}

export function allProblems(): Problem[] {
  return Object.values(problems);
}

/** Every problem carrying a given track tag (e.g. "blind75"). */
export function problemsWithTag(tag: string): Problem[] {
  return allProblems().filter((p) => p.trackTags.includes(tag));
}

/** Pattern modules live in the three pattern-tier stages. */
export function patternStages(): Stage[] {
  return dsaStages.filter((s) => s.order >= 4 && s.order <= 6);
}

/** Total authored problem count — used by dashboards and PROGRESS reporting. */
export function problemCount(): number {
  return allProblems().length;
}
