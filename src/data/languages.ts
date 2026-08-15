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
    level: "Planned",
    lessons: [],
    available: false,
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
