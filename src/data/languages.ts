import type { LessonSection, QuizQuestion } from "@/types";

/**
 * Language courses intentionally sit outside the DSA curriculum registry.
 * A language is useful across several learning paths, so adding one only
 * requires another object in `languageCourses` — no new route or UI needed.
 */
export interface LanguageLesson {
  id: string;
  title: string;
  summary: string;
  duration: string;
  sections: LessonSection[];
  quiz: QuizQuestion;
}

export interface LanguageCourse {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  level: string;
  lessons: LanguageLesson[];
  available: boolean;
}

const jsLessons: LanguageLesson[] = [
  {
    id: "values-and-variables",
    title: "Values & variables",
    summary: "Store information, choose the right primitive, and avoid accidental reassignment.",
    duration: "12 min",
    sections: [
      {
        heading: "JavaScript values",
        body: `JavaScript programs are built from values. The everyday primitives are **strings**, **numbers**, **booleans**, \`null\`, and \`undefined\`.

Use \`typeof\` when you want to inspect a value. A useful distinction: \`undefined\` means “no value has been assigned”, while \`null\` is an intentional empty value.

\`\`\`js
const learner = "Maya";
const streak = 4;
const isLearning = true;

console.log(typeof learner);    // string
console.log(streak + 1);        // 5
console.log(isLearning && streak > 0); // true
\`\`\``,
      },
      {
        heading: "const first, let when needed",
        body: `Use \`const\` by default. It makes it clear that the variable binding will not be reassigned. Choose \`let\` only when the value must change as the program runs. Avoid \`var\` in new code because its scope rules are surprising.

\`\`\`js
const course = "JavaScript";
let completedLessons = 0;

completedLessons += 1;
console.log(\`\${course}: \${completedLessons} lesson complete\`);
\`\`\`

**Remember:** a \`const\` array or object can still be changed; the *variable* just cannot point at a different array or object.`,
      },
    ],
    quiz: {
      id: "js-values-quiz",
      kind: "mcq",
      prompt: "Which declaration should you normally choose for a value that will not be reassigned?",
      options: ["var", "let", "const", "value"],
      answerIndex: 2,
      explanation: "Use `const` by default. Reach for `let` only when you need reassignment.",
    },
  },
  {
    id: "functions-and-flow",
    title: "Functions & control flow",
    summary: "Package behavior into functions and make decisions with conditions and loops.",
    duration: "16 min",
    sections: [
      {
        heading: "Functions give code a name",
        body: `A function groups a repeatable task. Give it input through **parameters** and send a result back with \`return\`. Returning makes a function easier to test and reuse than printing its result inside the function.

\`\`\`js
function welcome(name) {
  return \`Welcome, \${name}!\`;
}

console.log(welcome("Maya"));
\`\`\``,
      },
      {
        heading: "Choose a path, then repeat",
        body: `Use \`if\` for a decision and \`for...of\` to visit each item in an iterable. Prefer strict equality (\`===\`) so JavaScript does not silently convert types for you.

\`\`\`js
function passedLessons(scores) {
  let passed = 0;
  for (const score of scores) {
    if (score >= 70) passed += 1;
  }
  return passed;
}

console.log(passedLessons([100, 65, 82])); // 2
\`\`\`

**Tip:** Make the happy path easy to read. Small functions with one clear purpose are often better than a large function with many nested conditions.`,
      },
    ],
    quiz: {
      id: "js-flow-quiz",
      kind: "mcq",
      prompt: "What does a function return when it reaches `return value`?",
      options: ["It prints value", "It sends value back to its caller", "It repeats the function", "It makes value global"],
      answerIndex: 1,
      explanation: "`return` ends the function and provides a result to the code that called it.",
    },
  },
  {
    id: "arrays-and-objects",
    title: "Arrays & objects",
    summary: "Model lists and structured data, then transform them without unwanted mutation.",
    duration: "18 min",
    sections: [
      {
        heading: "Lists with arrays",
        body: `An array holds an ordered list. Indexes start at 0. Use methods such as \`map\` to create a transformed array and \`filter\` to keep matching values.

\`\`\`js
const lessons = ["Values", "Functions", "Arrays"];
const labels = lessons.map((lesson, index) => \`\${index + 1}. \${lesson}\`);
const longNames = lessons.filter((lesson) => lesson.length > 6);

console.log(labels);
console.log(longNames);
\`\`\``,
      },
      {
        heading: "Records with objects",
        body: `An object groups named properties. Dot notation is convenient for a known property; bracket notation is useful when a property name is stored in a variable.

\`\`\`js
const profile = { name: "Maya", level: "beginner", xp: 30 };
const field = "xp";

console.log(profile.name);   // Maya
console.log(profile[field]); // 30
\`\`\`

To update nested or shared data safely, make a copy with the spread operator: \`const nextProfile = { ...profile, xp: profile.xp + 15 }\`. This is especially useful in React.`,
      },
    ],
    quiz: {
      id: "js-data-quiz",
      kind: "mcq",
      prompt: "Which array method creates a new array by transforming every item?",
      options: ["push", "map", "find", "pop"],
      answerIndex: 1,
      explanation: "`map` calls a function for every item and collects its returned values into a new array.",
    },
  },
  {
    id: "modern-javascript",
    title: "Modern JavaScript",
    summary: "Write expressive code with destructuring, template literals, and optional chaining.",
    duration: "14 min",
    sections: [
      {
        heading: "Extract what you need",
        body: `**Destructuring** pulls values out of arrays and objects. **Template literals** make strings with embedded values readable.

\`\`\`js
const course = { title: "JavaScript", lessons: 5 };
const { title, lessons } = course;

console.log(\`\${title} has \${lessons} lessons.\`);
\`\`\`

Default values fit neatly into destructuring: \`const { theme = "system" } = settings\`.`,
      },
      {
        heading: "Handle missing data calmly",
        body: `Optional chaining (\`?.\`) stops safely when a value is \`null\` or \`undefined\`. Nullish coalescing (\`??\`) provides a fallback only for those two missing values, unlike \`||\`, which also treats \`0\` and an empty string as missing.

\`\`\`js
const learner = { name: "Maya", progress: null };
const completed = learner.progress?.completed ?? 0;

console.log(completed); // 0
\`\`\`

Use these operators to clarify genuinely optional data—not to hide errors you should fix.`,
      },
    ],
    quiz: {
      id: "js-modern-quiz",
      kind: "mcq",
      prompt: "Why is `count ?? 10` different from `count || 10` when `count` is 0?",
      options: ["There is no difference", "`??` keeps 0, while `||` uses 10", "`??` always uses 10", "`||` throws an error"],
      answerIndex: 1,
      explanation: "`??` only falls back for `null` and `undefined`; 0 is a valid value and is kept.",
    },
  },
  {
    id: "async-javascript",
    title: "Async JavaScript",
    summary: "Work with later results using promises, async/await, and straightforward error handling.",
    duration: "18 min",
    sections: [
      {
        heading: "Promises represent future values",
        body: `Some work finishes later: a network request, timer, or browser API. A **Promise** represents the result that will eventually be available. Mark a function \`async\` and use \`await\` to write that flow in a readable, top-to-bottom way.

\`\`\`js
async function getGreeting() {
  const response = await Promise.resolve({ name: "Maya" });
  return \`Hello, \${response.name}!\`;
}

getGreeting().then(console.log);
\`\`\``,
      },
      {
        heading: "Expect failure",
        body: `Put awaited work in a \`try...catch\` block when it can fail. Give the person using your app a useful outcome, and reserve the console for technical detail.

\`\`\`js
async function loadProfile() {
  try {
    const response = await fetch("/api/profile");
    if (!response.ok) throw new Error("Profile request failed");
    return await response.json();
  } catch (error) {
    console.error(error);
    return { name: "Guest" };
  }
}
\`\`\`

**Rule of thumb:** \`await\` only works inside an \`async\` function (or a JavaScript module's top level).`,
      },
    ],
    quiz: {
      id: "js-async-quiz",
      kind: "mcq",
      prompt: "What does `await` do inside an async function?",
      options: ["It turns off errors", "It waits for a promise to settle before continuing that function", "It blocks the whole browser", "It repeats a request forever"],
      answerIndex: 1,
      explanation: "`await` pauses the async function's continuation until the promise settles; it does not freeze the entire app.",
    },
  },
];

const tsLessons: LanguageLesson[] = [
  {
    id: "types-and-inference",
    title: "Basic types & inference",
    summary: "Annotate the shapes you already know from JavaScript, and let TypeScript infer the rest.",
    duration: "12 min",
    sections: [
      {
        heading: "Annotating what you already know",
        body: `TypeScript adds **type annotations** on top of the JavaScript you already know. The everyday primitives look just like their JavaScript values, with a type written after a colon.

\`\`\`ts
let title: string = "Learn TypeScript";
let lessonCount: number = 5;
let isComplete: boolean = false;

console.log(\`\${title}: \${lessonCount} lessons, complete = \${isComplete}\`);
\`\`\`

Arrays get a type too, written either way: \`string[]\` or \`Array<string>\`.

\`\`\`ts
const topics: string[] = ["types", "interfaces", "generics"];
console.log(topics.length);
\`\`\`

One honest note about this sandbox: it only *transpiles* your TypeScript (strips the types) before running it — it does not type-check. A real editor or \`tsc\` would catch a type mistake immediately; this console only shows you what the code actually does at runtime.`,
      },
      {
        heading: "Let inference do the work",
        body: `Once TypeScript can see what a value starts out as, it infers the type for you — most variables in idiomatic TypeScript carry no annotation at all.

\`\`\`ts
const streak = 4;
const label = "day streak";

console.log(streak + 1, label);
\`\`\`

\`streak\` is inferred as \`number\` and \`label\` as \`string\`, with no extra typing needed. Save explicit annotations for the places inference can't reach on its own: function parameters (covered in a later lesson), and variables that start out empty, like \`let result;\`.`,
      },
    ],
    quiz: {
      id: "ts-inference-quiz",
      kind: "mcq",
      prompt: "What type does TypeScript infer for `const total = 42;`?",
      options: ["string", "number", "any", "unknown"],
      answerIndex: 1,
      explanation: "TypeScript looks at the initializer — `42` — and infers `number`, exactly as if you'd written `const total: number = 42;` yourself.",
    },
  },
  {
    id: "object-types-and-interfaces",
    title: "Object types & interfaces",
    summary: "Describe the shape of an object once, then reuse it everywhere that shape shows up.",
    duration: "14 min",
    sections: [
      {
        heading: "Describing the shape of an object",
        body: `An \`interface\` names a shape so you can reuse it, instead of writing the same inline object type everywhere it's needed.

\`\`\`ts
interface Learner {
  name: string;
  xp: number;
}

const learner: Learner = { name: "Maya", xp: 120 };
console.log(\`\${learner.name} has \${learner.xp} XP\`);
\`\`\`

Assign anything that doesn't match — a missing property, or an \`xp\` that's a string — and \`Learner\` is what an editor or \`tsc\` checks it against.`,
      },
      {
        heading: "Optional and readonly properties",
        body: `Add \`?\` to a property to make it optional, and \`readonly\` to stop it being reassigned after the object is created.

\`\`\`ts
interface Course {
  readonly id: string;
  name: string;
  description?: string;
}

const course: Course = { id: "ts-101", name: "TypeScript" };
console.log(course.description ?? "No description yet");
\`\`\`

You'll also see \`type Course = { ... }\` used for the same job. A common rule of thumb: reach for \`interface\` for object shapes (it can also be extended later with \`extends\`), and \`type\` for anything else — unions, tuples, or a name for another type.`,
      },
    ],
    quiz: {
      id: "ts-objects-quiz",
      kind: "mcq",
      prompt: "Which modifier stops a property from being reassigned after the object is created?",
      options: ["?", "readonly", "const", "private"],
      answerIndex: 1,
      explanation: "`readonly` marks a property as set-once — assignable when the object is created, but flagged as an error if reassigned afterward. `?` instead marks a property as optional.",
    },
  },
  {
    id: "union-types-and-narrowing",
    title: "Union types & narrowing",
    summary: "Let a value be one of a few known shapes, then let TypeScript help you handle each one safely.",
    duration: "16 min",
    sections: [
      {
        heading: "One value, a few allowed shapes",
        body: `A union type, written with \`|\`, says a value can be one of several types. A common, especially useful version restricts it to a fixed set of literal strings.

\`\`\`ts
type Status = "pending" | "active" | "done";

function describe(status: Status): string {
  return \`Status: \${status}\`;
}

console.log(describe("active"));
\`\`\`

Try passing \`describe("done")\` too — and notice that \`describe("archived")\` is the kind of mistake \`Status\` exists to catch (in your editor or \`tsc\`; remember this sandbox only transpiles, so it won't stop you here).`,
      },
      {
        heading: "Narrowing figures out which branch you're in",
        body: `When a value could be more than one type, TypeScript "narrows" it inside a check — after \`if (typeof id === "string")\`, TypeScript treats \`id\` as a \`string\` for the rest of that branch, and as the other type in the \`else\`.

\`\`\`ts
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return \`#\${id.toFixed(0)}\`;
}

console.log(formatId("abc"));
console.log(formatId(42));
\`\`\`

\`id.toUpperCase()\` is only legal inside that \`typeof\` branch, because that's the only place TypeScript can prove \`id\` is a string.`,
      },
    ],
    quiz: {
      id: "ts-narrowing-quiz",
      kind: "mcq",
      prompt: "Inside `if (typeof value === \"string\")`, what does TypeScript know about `value` in that branch?",
      options: ["Nothing — typeof checks are ignored", "That value is a string for the rest of that branch", "That value is always undefined", "That the check will throw an error"],
      answerIndex: 1,
      explanation: "This is narrowing: TypeScript uses the runtime check to prove a more specific type for `value` inside that branch only.",
    },
  },
  {
    id: "functions-in-typescript",
    title: "Functions in TypeScript",
    summary: "Type parameters and return values, then type a function's signature as a reusable shape of its own.",
    duration: "14 min",
    sections: [
      {
        heading: "Typing parameters and return values",
        body: `Annotate each parameter, and TypeScript checks every call against it. A parameter can have a default value, which also makes it optional to pass.

\`\`\`ts
function greet(name: string, greeting: string = "Welcome"): string {
  return \`\${greeting}, \${name}!\`;
}

console.log(greet("Maya"));
console.log(greet("Sam", "Hey"));
\`\`\`

The \`: string\` after the parameter list annotates the return type. TypeScript would infer it here anyway, but writing it down catches you if a future edit accidentally returns the wrong thing.`,
      },
      {
        heading: "Function types as values",
        body: `A function's signature can be named and reused, just like an object shape — handy anywhere you accept a callback.

\`\`\`ts
type Predicate = (score: number) => boolean;

function countMatching(scores: number[], test: Predicate): number {
  return scores.filter(test).length;
}

const passed: Predicate = (score) => score >= 70;
console.log(countMatching([100, 65, 82], passed));
\`\`\`

\`countMatching\` doesn't need to know what \`test\` checks for — only that it takes a \`number\` and returns a \`boolean\`. That's what makes \`Predicate\` reusable for any pass/fail rule.`,
      },
    ],
    quiz: {
      id: "ts-functions-quiz",
      kind: "mcq",
      prompt: "In `type Predicate = (score: number) => boolean;`, what is `Predicate`?",
      options: ["A variable holding a number", "A type describing a function's signature", "A class", "An interface"],
      answerIndex: 1,
      explanation: "`Predicate` names a function type: anything shaped like `(score: number) => boolean` — including the `passed` arrow function above — satisfies it.",
    },
  },
  {
    id: "generics-introduction",
    title: "Generics, an introduction",
    summary: "Write one function that works with any type, without giving up type safety by falling back to `any`.",
    duration: "16 min",
    sections: [
      {
        heading: "Why generics",
        body: `\`firstItem\` should work on an array of numbers, strings, or anything else — and still tell you the type of what comes back. A generic type parameter, written \`<T>\`, is a placeholder filled in by whatever type is actually passed.

\`\`\`ts
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

console.log(firstItem([10, 20, 30]));
console.log(firstItem(["a", "b", "c"]));
\`\`\`

Call \`firstItem\` with \`number[]\`, and \`T\` becomes \`number\` for that call; call it with \`string[]\`, and \`T\` becomes \`string\`. Compare that to typing \`items: any[]\`: it would also run, but you'd lose every guarantee about what comes back out.`,
      },
      {
        heading: "Constraining a generic",
        body: `\`extends\` limits a generic to types with at least a certain shape, so you can safely use that shape inside the function.

\`\`\`ts
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

console.log(longest("hello", "hi"));
console.log(longest([1, 2, 3], [1, 2]));
\`\`\`

\`T extends { length: number }\` accepts strings, arrays, or anything else with a \`.length\` — but rejects a number, which has none. That's the balance generics strike: more flexible than one fixed type, more precise than \`any\`.`,
      },
    ],
    quiz: {
      id: "ts-generics-quiz",
      kind: "mcq",
      prompt: "What does the `T` in `function firstItem<T>(items: T[]): T | undefined` represent?",
      options: ["A fixed type actually called T", "A placeholder type, filled in by whatever type is passed in", "A runtime error", "A value, not a type"],
      answerIndex: 1,
      explanation: "`T` is a type parameter — a stand-in that TypeScript fills in with the real type for each call, so the function stays reusable without falling back to `any`.",
    },
  },
];

export const languageCourses: LanguageCourse[] = [
  {
    id: "javascript",
    name: "JavaScript",
    eyebrow: "Start here",
    description: "Build a practical foundation for the language behind modern web applications.",
    level: "Beginner · 5 lessons",
    lessons: jsLessons,
    available: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    eyebrow: "Next up",
    description: "Add type safety and confidence to your JavaScript projects.",
    level: "Beginner · 5 lessons",
    lessons: tsLessons,
    available: true,
  },
  {
    id: "python",
    name: "Python",
    eyebrow: "Future language",
    description: "Learn a clean, versatile language for automation, data, and backend work.",
    level: "Planned",
    lessons: [],
    available: false,
  },
];

export function getLanguageCourse(id: string): LanguageCourse | undefined {
  return languageCourses.find((course) => course.id === id);
}

export function languageLessonProgressId(courseId: string, lessonId: string): string {
  return `language:${courseId}:${lessonId}`;
}
