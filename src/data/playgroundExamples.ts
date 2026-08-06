import type { JudgeType, Language } from "@/types";
import type { RunMode, RunnerTest } from "@/runner/types";

export interface PlaygroundExample {
  id: string;
  label: string;
  blurb: string;
  language: Language;
  mode: RunMode;
  functionName?: string;
  judgeType?: JudgeType;
  tests?: RunnerTest[];
  code: string;
}

/**
 * Curated examples that each exercise a different capability of the runner, so
 * every Phase 2 acceptance case is reproducible with one click.
 */
export const PLAYGROUND_EXAMPLES: PlaygroundExample[] = [
  {
    id: "scratch",
    label: "Scratch pad",
    blurb: "Free-form JS. Console output is captured.",
    language: "js",
    mode: "scratch",
    code: `// Write anything and press Run (or Cmd/Ctrl+Enter).
const nums = [5, 2, 9, 1, 7];
console.log("original:", nums);
console.log("sorted:", [...nums].sort((a, b) => a - b));
console.warn("warnings show up too");
`,
  },
  {
    id: "tests-pass",
    label: "Passing tests",
    blurb: "returnValue judge — all cases green.",
    language: "js",
    mode: "tests",
    functionName: "reverseInts",
    judgeType: "returnValue",
    tests: [
      { args: [[1, 2, 3]], expected: [3, 2, 1], label: "typical" },
      { args: [[]], expected: [], label: "empty" },
      { args: [[7]], expected: [7], label: "single" },
      { args: [[4, 4, 5]], expected: [5, 4, 4], label: "duplicates" },
    ],
    code: `function reverseInts(values) {
  const out = [];
  for (let i = values.length - 1; i >= 0; i--) {
    out.push(values[i]);
  }
  return out;
}
`,
  },
  {
    id: "tests-fail",
    label: "Failing tests",
    blurb: "A subtle bug — see the expected-vs-received diff.",
    language: "js",
    mode: "tests",
    functionName: "reverseInts",
    judgeType: "returnValue",
    tests: [
      { args: [[1, 2, 3]], expected: [3, 2, 1], label: "typical" },
      { args: [[]], expected: [], label: "empty" },
      { args: [[7]], expected: [7], label: "single" },
    ],
    code: `function reverseInts(values) {
  const out = [];
  // BUG: condition drops the first element.
  for (let i = values.length - 1; i > 0; i--) {
    out.push(values[i]);
  }
  return out;
}
`,
  },
  {
    id: "mutate",
    label: "Mutate-argument judge",
    blurb: "Judged on the mutated first argument, not the return value.",
    language: "js",
    mode: "tests",
    functionName: "sortInPlace",
    judgeType: "mutateArgument",
    tests: [
      { args: [[3, 1, 2]], expected: [1, 2, 3], label: "unsorted" },
      { args: [[9, 9, 1]], expected: [1, 9, 9], label: "duplicates" },
      { args: [[-2, 5, -8]], expected: [-8, -2, 5], label: "negatives" },
    ],
    code: `function sortInPlace(values) {
  values.sort((a, b) => a - b);
  // No return — the judge inspects the mutated array.
}
`,
  },
  {
    id: "order-insensitive",
    label: "Order-insensitive (TS)",
    blurb: "TypeScript + a judge where element order doesn't matter.",
    language: "ts",
    mode: "tests",
    functionName: "evens",
    judgeType: "orderInsensitiveArray",
    tests: [
      { args: [[4, 1, 2, 3]], expected: [2, 4], label: "mixed" },
      { args: [[1, 3, 5]], expected: [], label: "none" },
      { args: [[8, 6, 6]], expected: [6, 6, 8], label: "duplicates" },
    ],
    code: `function evens(nums: number[]): number[] {
  return nums.filter((n) => n % 2 === 0);
}
`,
  },
  {
    id: "infinite",
    label: "Infinite loop → TLE",
    blurb: "Never terminates — the worker is killed after 4 seconds.",
    language: "js",
    mode: "scratch",
    code: `// This loop never ends. The runner terminates it gracefully.
let n = 0;
while (true) {
  n++;
}
console.log(n);
`,
  },
  {
    id: "ts-error",
    label: "TS compile error",
    blurb: "A syntax error reported with a line number.",
    language: "ts",
    mode: "scratch",
    code: `// The assignment below is incomplete — a compile error on line 3.
const label: string = "count:";
const total: number = ;
console.log(label, total);
`,
  },
];
