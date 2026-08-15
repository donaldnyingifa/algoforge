import type { HintTriple, JudgeType, WalkthroughStep, WorkedExample } from "@/types";

interface WalkthroughSolutionContext {
  label: string;
  approach: string;
  timeComplexity: string;
  spaceComplexity: string;
}

export interface WalkthroughContext {
  title: string;
  functionName: string;
  judgeType: JudgeType;
  examples: readonly WorkedExample[];
  constraints: readonly string[];
  hints: HintTriple;
  solutions: readonly WalkthroughSolutionContext[];
}

const MAX_CONTEXT_LENGTH = 180;

function compact(text: string, maxLength = MAX_CONTEXT_LENGTH): string {
  const normalized = text.replace(/`/g, "").replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const shortened = normalized.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  const end = lastSpace > maxLength / 2 ? lastSpace : shortened.length;
  return `${shortened.slice(0, end).trimEnd()}…`;
}

function normalizedForComparison(text: string): string {
  return text.replace(/[`*_]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}

function repeatsHint(body: string, hints: HintTriple): boolean {
  const normalizedBody = normalizedForComparison(body);
  return hints.some((hint) => {
    const normalizedHint = normalizedForComparison(hint);
    return normalizedHint.length > 0 && normalizedBody.includes(normalizedHint);
  });
}

function withoutHintEcho(body: string, hints: HintTriple, safeBody: string): string {
  if (!repeatsHint(body, hints)) return body;
  return repeatsHint(safeBody, hints)
    ? "Turn the stated requirement into a small sequence of decisions, and verify each decision against the contract before implementing it."
    : safeBody;
}

function contractTarget(judgeType: JudgeType): string {
  if (judgeType === "mutateArgument") {
    return "change the first input in place so its final state matches the requested result";
  }
  if (judgeType === "orderInsensitiveArray") {
    return "return every required item; equivalent result orders are accepted";
  }
  return "return the result described by the problem for the supplied inputs";
}

function timeRank(complexity: string): number {
  const value = complexity
    .toLowerCase()
    .replace(/[\s_{}]/g, "")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .replace(/ⁿ/g, "^n");
  if (/n!/.test(value)) return 90;
  if (/\^n|2\^|3\^|exponential/.test(value)) return 80;
  if (/\^3|n·n·n|n\*n\*n/.test(value)) return 60;
  if (/\^2|n²|v²|n·n|n\*n|n·k|n\*k/.test(value)) return 50;
  if (/nlog|logn.*n|n.*log/.test(value)) return 40;
  if (/sqrt|√/.test(value)) return 25;
  if (/log/.test(value)) return 20;
  if (/o\(1\)/.test(value)) return 10;
  return 30;
}

function spaceRank(complexity: string): number {
  return /o\(1\)/i.test(complexity.replace(/\s+/g, "")) ? 0 : 1;
}

function primarySolution(
  solutions: readonly WalkthroughSolutionContext[],
): WalkthroughSolutionContext | undefined {
  return solutions.reduce<WalkthroughSolutionContext | undefined>((best, solution) => {
    if (!best) return solution;
    const rankDelta = timeRank(solution.timeComplexity) - timeRank(best.timeComplexity);
    if (rankDelta < 0) return solution;
    if (rankDelta === 0 && spaceRank(solution.spaceComplexity) < spaceRank(best.spaceComplexity)) {
      return solution;
    }
    return best;
  }, undefined);
}

function strategyFallback(solution: WalkthroughSolutionContext | undefined): string {
  const source = `${solution?.label ?? ""} ${solution?.approach ?? ""}`.toLowerCase();
  if (/binary search/.test(source)) {
    return "Define the ordered search space and the invariant that lets each decision discard an impossible half.";
  }
  if (/two[- ]?pointer|slow \/ fast|fast \/ slow/.test(source)) {
    return "Give each pointer one responsibility, then state exactly which observation moves each pointer without revisiting discarded work.";
  }
  if (/sliding window|window/.test(source)) {
    return "Describe what the current window represents, when it expands, and the condition that makes it shrink.";
  }
  if (/dynamic programming|memo|tabulation|kadane|rolling/.test(source)) {
    return "Define the smallest reusable subproblem, its base cases, and the transition that combines already-known results.";
  }
  if (/breadth-first|\bbfs\b/.test(source)) {
    return "Process one breadth-first layer at a time and mark work when it is scheduled so no state is queued twice.";
  }
  if (/depth-first|\bdfs\b|recurs/.test(source)) {
    return "Define what one depth-first call is responsible for, its stopping case, and how child results combine.";
  }
  if (/heap|priority queue/.test(source)) {
    return "Keep the next most useful candidate at the top of a heap and state what is added or removed after each choice.";
  }
  if (/backtrack|subset|permutation|combination/.test(source)) {
    return "Model each choice, recurse on the smaller remaining decision, and undo mutable state before exploring the next branch.";
  }
  if (/union[- ]?find|disjoint/.test(source)) {
    return "Represent each component by a root, merge roots when a connection appears, and query roots for connectivity.";
  }
  if (/topological|indegree/.test(source)) {
    return "Track unresolved prerequisites, release a state when its count reaches zero, and detect whether every state was released.";
  }
  if (/shortest|dijkstra/.test(source)) {
    return "Maintain the best distance known so far and expand the unsettled state with the strongest current guarantee.";
  }
  if (/trie|prefix/.test(source)) {
    return "Store or reuse the information associated with each prefix so later work can build on earlier prefixes.";
  }
  if (/stack|monotonic/.test(source)) {
    return "State what the stack represents and remove entries as soon as the current value resolves or invalidates them.";
  }
  if (/sort|interval|merge/.test(source)) {
    return "Put candidates in an order where the next decision depends only on the state already summarized.";
  }
  if (/set|map|hash|count|frequency/.test(source)) {
    return "Record only the lookup or count information future decisions need, updating it once per relevant input item.";
  }
  if (/greedy/.test(source)) {
    return "Name the locally best safe choice and the invariant proving that choice cannot make the remaining answer worse.";
  }
  return "Name the state that changes, the invariant it must preserve, and the condition that finishes the process.";
}

function approachBody(solution: WalkthroughSolutionContext | undefined): string {
  if (!solution) {
    return "Choose one piece of state that summarizes completed work, then update it in a consistent order until the contract is satisfied.";
  }
  const approach = compact(solution.approach);
  const looksLikeCode = /[{};]|=>|\b(function|const|let|var)\b/.test(approach);
  const explanation = looksLikeCode || !approach ? strategyFallback(solution) : approach;
  return `Use **${compact(solution.label, 70)}** as the strategy spine. ${explanation} Before coding, identify the state, invariant, and stopping condition that make this strategy correct.`;
}

function exampleBody(example: WorkedExample | undefined): string {
  if (!example) {
    return "Invent the smallest valid input and one representative input. For each, write the expected result and the decisions that must lead there before implementing anything.";
  }
  const input = compact(example.input, 110);
  const output = compact(example.output, 110);
  const explanation = example.explanation
    ? ` The example notes that ${compact(example.explanation, 120)}`
    : "";
  return `Dry-run the first example: start from \`${input}\` and make sure the plan reaches \`${output}\`.${explanation} Track the information needed before each decision so the same reasoning generalizes.`;
}

function constraintBody(constraints: readonly string[]): string {
  const constraint = constraints[0] ? compact(constraints[0], 130) : "the smallest valid input";
  const allConstraints = constraints.join(" ").toLowerCase();
  const checks: string[] = [];
  if (/0\s*<=|empty|length can be 0/.test(allConstraints)) checks.push("empty input");
  if (/negative|-[0-9]/.test(allConstraints)) checks.push("negative values");
  if (/distinct|duplicate|unique/.test(allConstraints)) checks.push("duplicate handling");
  if (/sorted|ascending|descending/.test(allConstraints)) checks.push("the ordering guarantee");
  if (/\bk\b|target|range|limit/.test(allConstraints)) checks.push("parameter extremes");
  const checklist = checks.length > 0 ? checks.slice(0, 3).join(", ") : "minimum and maximum valid sizes";
  return `Use this boundary as a design guardrail: **${constraint}**. Check ${checklist} before relying on the main strategy, and decide the expected result for each case.`;
}

function budgetBody(solution: WalkthroughSolutionContext | undefined): string {
  if (!solution) {
    return "Count how often the plan revisits each input item and list every growing data structure. Tighten either one if it exceeds the problem's stated limits.";
  }
  return `Aim for **${compact(solution.timeComplexity, 45)} time** and **${compact(solution.spaceComplexity, 45)} auxiliary space**. Confirm that every scan, nested operation, and stored structure fits those targets before revealing code.`;
}

/**
 * Build a concise implementation guide without recycling any authored hint.
 * This is a safety net for content that has not supplied a bespoke walkthrough.
 */
export function buildFallbackWalkthrough(context: WalkthroughContext): WalkthroughStep[] {
  const solution = primarySolution(context.solutions);
  const contract = `For **${compact(context.title, 90)}**, \`${compact(context.functionName, 70)}\` must ${contractTarget(context.judgeType)}. Treat that observable result as the finish line, independent of implementation details.`;
  const strategy = approachBody(solution);

  return [
    {
      title: "Frame the contract",
      body: withoutHintEcho(
        contract,
        context.hints,
        "State the required input-to-output behavior and the exact result the judge will observe before choosing an algorithm.",
      ),
    },
    {
      title: "Dry-run a concrete case",
      body: withoutHintEcho(
        exampleBody(context.examples[0]),
        context.hints,
        "Trace a representative example from its starting data to its expected result, recording the information needed at each decision.",
      ),
    },
    {
      title: "Choose the strategy invariant",
      body: withoutHintEcho(strategy, context.hints, strategyFallback(solution)),
    },
    {
      title: "Plan boundary behavior",
      body: withoutHintEcho(
        constraintBody(context.constraints),
        context.hints,
        "List the smallest, largest, and structurally unusual valid inputs, then decide what the strategy should do for each one.",
      ),
    },
    {
      title: "Check the efficiency budget",
      body: withoutHintEcho(
        budgetBody(solution),
        context.hints,
        "Count input visits and growing data structures, then confirm both stay within the required time and space limits.",
      ),
    },
  ];
}
