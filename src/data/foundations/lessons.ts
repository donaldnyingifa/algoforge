import type { Module } from "@/types";

const S = "dsa-s1";

export const foundationsLessonModules: Module[] = [
  {
    id: "m-foundations-thinking",
    stageId: S,
    title: "Thinking in Algorithms",
    kind: "lesson",
    summary: "Turn a fuzzy problem into precise, testable steps before you write a line of code.",
    lessonSections: [
      {
        heading: "From story to steps",
        body: `An algorithm is just a finite recipe: a sequence of unambiguous steps that always finishes and produces the right answer. The hardest part of a problem is usually not the code — it's naming the steps precisely.

A reliable routine:
1. Restate the goal in one sentence.
2. Nail down the exact input and output shapes (the examples do this for you).
3. Solve a tiny case by hand and watch what you actually do.
4. Turn that by-hand process into steps, then into code.`,
      },
      {
        heading: "Recognition cues",
        body: `Reach for the "solve it by hand first" approach when:

- you're not sure where to even start,
- the examples surprise you (edge cases you hadn't imagined),
- or you can describe the answer in words but not yet in code.

Watch the tiny case run:

\`\`\`js
// Largest value in a list — narrate each comparison.
function largest(nums) {
  let best = nums[0];
  for (const n of nums) {
    if (n > best) best = n;
    console.log("saw", n, "best so far", best);
  }
  return best;
}
console.log("answer:", largest([3, 9, 2, 7]));
\`\`\``,
      },
      {
        heading: "A reusable skeleton",
        body: `Most beginner problems fit a scan-and-accumulate template: keep some state, update it as you walk the input, return it at the end.

\`\`\`ts
function scanAccumulate(items: number[]): number {
  let state = 0; // running total, count, best, etc.
  for (const item of items) {
    state = state + item; // update rule specific to the problem
  }
  return state;
}
console.log(scanAccumulate([1, 2, 3, 4])); // 10
\`\`\`

**JS/TS pitfall:** an empty input often needs a sensible default (0, -1, [], or the first element). Decide what the answer *should* be for \`[]\` before you code. Now try the drills below.`,
      },
    ],
    guidedExampleProblemId: "f-sum-to",
    drillProblemIds: ["f-sum-to", "f-count-vowels", "f-first-duplicate"],
    testPoolProblemIds: [],
    prerequisiteModuleIds: [],
  },
  {
    id: "m-foundations-bigo",
    stageId: S,
    title: "Big O Notation",
    kind: "lesson",
    summary: "Measure how work grows with input size so you can spot a slow solution before you run it.",
    lessonSections: [
      {
        heading: "Counting growth, not seconds",
        body: `Big O describes how the number of steps grows as the input size \`n\` grows — ignoring constant factors and hardware. \`O(n)\` means "roughly proportional to n"; \`O(n²)\` means "proportional to n squared".

Common orders, best to worst: \`O(1)\` < \`O(log n)\` < \`O(n)\` < \`O(n log n)\` < \`O(n²)\` < \`O(2ⁿ)\`.`,
      },
      {
        heading: "Recognition cues",
        body: `- A single loop over the input → **O(n)**.
- A loop inside a loop, both over the input → **O(n²)**.
- Halving the search space each step (binary search) → **O(log n)**.
- Using a hash set/map to replace an inner loop → often turns **O(n²)** into **O(n)**.

The same task, two costs — watch the step counters:

\`\`\`js
function pairCountNaive(nums, target) {
  let steps = 0, found = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++) {
      steps++;
      if (nums[i] + nums[j] === target) found++;
    }
  console.log("O(n^2) steps:", steps);
  return found;
}
pairCountNaive([1, 2, 3, 4, 5], 6); // many steps
\`\`\``,
      },
      {
        heading: "Trading time for space",
        body: `Hash structures often buy speed with memory. The set version below does far fewer steps than the nested loops above.

\`\`\`ts
function seenBefore(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const n of nums) {
    if (seen.has(n)) return true; // O(1) average lookup
    seen.add(n);
  }
  return false;
}
console.log(seenBefore([1, 2, 3, 2])); // true
\`\`\`

**Pitfall:** don't confuse time and space. The set above is \`O(n)\` time *and* \`O(n)\` space. Aim for the best time you can, then reduce space if needed.`,
      },
    ],
    guidedExampleProblemId: "f-has-duplicate",
    drillProblemIds: ["f-has-duplicate", "f-two-sum-exists", "f-most-frequent"],
    testPoolProblemIds: [],
    prerequisiteModuleIds: ["m-foundations-thinking"],
  },
  {
    id: "m-foundations-js",
    stageId: S,
    title: "JavaScript for DSA",
    kind: "lesson",
    summary: "The array, string, and object tools you'll reach for in almost every problem.",
    lessonSections: [
      {
        heading: "Arrays are your workhorse",
        body: `Know these cold: \`push\`/\`pop\` (end), \`shift\`/\`unshift\` (front — O(n)!), \`slice\` (copy a range), \`splice\` (remove/insert in place), and the iterators \`map\`, \`filter\`, \`reduce\`.

\`\`\`js
const a = [1, 2, 3, 4, 5];
console.log(a.slice(1, 3));            // [2, 3] (copy, non-destructive)
console.log(a.map((x) => x * x));      // [1, 4, 9, 16, 25]
console.log(a.filter((x) => x % 2));   // [1, 3, 5]
console.log(a.reduce((s, x) => s + x, 0)); // 15
\`\`\``,
      },
      {
        heading: "Strings, Sets, and Maps",
        body: `Strings are immutable — build results with an array and \`join\`, or with \`+=\`. \`Set\` gives O(1) membership; \`Map\` gives O(1) keyed counts and preserves insertion order.

\`\`\`js
const counts = new Map();
for (const ch of "banana") counts.set(ch, (counts.get(ch) || 0) + 1);
console.log([...counts.entries()]); // [["b",1],["a",3],["n",2]]
\`\`\`

**Recognition cues:** "seen before?" → \`Set\`. "how many of each?" → \`Map\` or a plain object. "characters of a string" → \`for...of\` or \`split('')\`.`,
      },
      {
        heading: "Copy vs. mutate",
        body: `A frequent bug: mutating an argument you meant to leave alone. Prefer copies with the spread operator when a problem expects a fresh result.

\`\`\`ts
function sortedCopy(nums: number[]): number[] {
  return [...nums].sort((a, b) => a - b); // original untouched
}
const original = [3, 1, 2];
console.log(sortedCopy(original), original); // [1,2,3] [3,1,2]
\`\`\`

**Pitfall:** \`sort()\` sorts in place *and* compares as strings by default — always pass \`(a, b) => a - b\` for numbers.`,
      },
    ],
    guidedExampleProblemId: "f-reverse-string",
    drillProblemIds: ["f-reverse-string", "f-chunk", "f-group-parity"],
    testPoolProblemIds: [],
    prerequisiteModuleIds: ["m-foundations-thinking"],
  },
  {
    id: "m-foundations-ts",
    stageId: S,
    title: "TypeScript for DSA",
    kind: "lesson",
    summary: "Add just enough typing to catch mistakes early without slowing you down.",
    lessonSections: [
      {
        heading: "Types that pay for themselves",
        body: `In interviews and drills you rarely need fancy types — just annotate function signatures so the editor catches the shape mistakes that cause most bugs.

\`\`\`ts
function sumPairs(nums: number[], target: number): boolean {
  const seen = new Set<number>();
  for (const n of nums) {
    if (seen.has(target - n)) return true;
    seen.add(n);
  }
  return false;
}
console.log(sumPairs([2, 7, 11], 9)); // true
\`\`\`

The \`number[]\`, \`number\`, and \`boolean\` annotations mean a wrong call is flagged before you ever run it.`,
      },
      {
        heading: "Records, tuples, and unions",
        body: `Useful shapes: \`Record<string, number>\` for counts, tuples like \`[number, number]\` for pairs, and unions like \`number | number[]\` for mixed lists.

\`\`\`ts
function tally(words: string[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const w of words) out[w] = (out[w] ?? 0) + 1;
  return out;
}
console.log(tally(["a", "b", "a"])); // { a: 2, b: 1 }
\`\`\`

**Recognition cues:** "map key → value" → \`Record\` or \`Map\`. "fixed-size group" → tuple. "either a value or a list of them" → a union type.`,
      },
      {
        heading: "Generics in one breath",
        body: `A generic lets one function work for any element type while keeping the types connected.

\`\`\`ts
function firstOr<T>(items: T[], fallback: T): T {
  return items.length > 0 ? items[0]! : fallback;
}
console.log(firstOr([10, 20], 0)); // 10
console.log(firstOr<string>([], "none")); // "none"
\`\`\`

**Pitfall:** with \`noUncheckedIndexedAccess\`, \`items[0]\` may be \`T | undefined\` — guard it or assert with \`!\` when you know the array is non-empty. Now try the TS drills.`,
      },
    ],
    guidedExampleProblemId: "f-unique-values",
    drillProblemIds: ["f-unique-values", "f-count-by", "f-flatten-one"],
    testPoolProblemIds: [],
    prerequisiteModuleIds: ["m-foundations-js"],
  },
  {
    id: "m-foundations-math",
    stageId: S,
    title: "Math Toolkit",
    kind: "lesson",
    summary: "The handful of number tricks — remainders, divisors, digits — that unlock countless problems.",
    lessonSections: [
      {
        heading: "The modulo operator",
        body: `\`%\` gives the remainder and is the most useful math tool in DSA: \`n % 2\` tests parity, \`n % 10\` peels the last digit, and \`i % len\` wraps an index around a circular buffer.

\`\`\`js
console.log(17 % 5);   // 2
console.log(48 % 2);   // 0 (even)
console.log(1234 % 10);// 4 (last digit)
\`\`\`

**Pitfall:** in JS, \`%\` keeps the sign of the dividend: \`-3 % 2\` is \`-1\`, not \`1\`. Account for that when working with negatives.`,
      },
      {
        heading: "Digits and divisors",
        body: `Peel digits with \`% 10\` and \`Math.floor(n / 10)\`. Find divisors by testing \`n % d === 0\`, and remember you only need to test up to \`√n\` to know whether a number is prime.

\`\`\`ts
function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let d = 2; d * d <= n; d++) if (n % d === 0) return false;
  return true;
}
console.log(isPrime(97)); // true
\`\`\`

**Recognition cues:** "sum/reverse the digits" → \`% 10\` loop. "common factor / simplify" → gcd. "prime / factor" → trial division to √n.`,
      },
      {
        heading: "Euclid's gcd",
        body: `The greatest common divisor falls out of repeated remainders — one of the oldest and fastest algorithms there is.

\`\`\`js
function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}
console.log(gcd(48, 36)); // 12
\`\`\`

**Pitfall:** watch for overflow-style bugs and division by zero elsewhere; gcd itself is safe as long as inputs are positive. Finish Foundations with the math drills, then take the checkpoint.`,
      },
    ],
    guidedExampleProblemId: "f-digit-sum",
    drillProblemIds: ["f-digit-sum", "f-gcd", "f-is-prime"],
    testPoolProblemIds: [],
    prerequisiteModuleIds: ["m-foundations-thinking"],
  },
];
