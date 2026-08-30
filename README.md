# AlgoForge

A fully client-side learning app that takes you from beginner to expert in **Data
Structures & Algorithms** (JavaScript + TypeScript) and **System Design** — no
account, no backend. All progress lives in your browser.

## Highlights

- **7-stage DSA curriculum** — Foundations → Core Data Structures → Core
  Algorithms → Patterns Tiers 1–3 → Expert. Every pattern module is a
  lesson → guided example → drills (easy→hard) → timed proficiency test → badge.
- **In-browser code execution** — a sandboxed Web Worker runs your JS/TS against
  visible and hidden tests, with a 4-second infinite-loop kill and console capture.
  TypeScript is transpiled in-worker (Sucrase); the editor is Monaco, bundled
  locally (works offline).
- **~394 original problems** across 30+ patterns, each with two solutions, plus
  build labs (heaps, tries, rate limiters, consistent-hashing rings, Bloom
  filters, LRU caches, …).
- **Challenge tracks** — Blind 75, an ordered 75 plan, an Extended 150, and a
  deterministic Daily challenge, all woven from the shared problem pool.
- **System Design track** — foundations lessons, runnable build labs, 14 guided
  case studies (template editor + self-rubric + model answer), timed mock design
  interviews, and a certification exam with a tiered badge.
- **Progression** — XP with a daily-streak multiplier, ranks, tiered badges, a
  spaced-repetition review queue, mock interviews, and a dashboard (activity
  chart, per-stage completion, weakest patterns).
- **Your data, portable** — everything persists to `localStorage` / IndexedDB
  with JSON export/import and a backup nudge.

## Tech stack

Next.js (Turbopack) · React 19 · TypeScript (strict) · Tailwind (dark default) ·
Zustand (+persist) · localForage · @monaco-editor/react · Web Worker + Sucrase ·
react-markdown · Recharts · Vitest.

The app is a client-only SPA hosted inside a single Next.js catch-all route
(`src/app/[[...path]]/page.tsx`) — Next is used as the build/serve layer, not
for server rendering or API routes. A small compatibility shim in
`src/lib/router.tsx` maps `next/navigation` onto the `Link`/`NavLink`/
`useParams`/`Navigate` API the screens were originally written against.

## Getting started

```bash
npm install
npm run dev        # start the dev server
npm run build      # production build (type-checked as part of `next build`)
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm test           # run the Vitest unit tests once
```

Everything runs in the browser — there is no server to configure and no data
leaves your machine.

## Project layout

- `src/app/` — the Next.js entry point: root layout plus the `[[...path]]`
  catch-all route that mounts the client app.
- `src/data/` — the curriculum: problems, modules, build labs, challenge tracks,
  and System Design content, registered into `curriculum.ts`.
- `src/runner/` — the Web Worker code runner, judge, and TS transpile.
- `src/store/` — Zustand progress store + IndexedDB draft/design stores.
- `src/screens/` + `src/components/` — the UI (each screen is code-split with
  `next/dynamic`, so Monaco and charts load only where needed).
- `src/lib/*.test.ts` (and similar) — Vitest unit tests for the pure logic
  (XP/rank/streak math, the test-scoring engine, challenge-track building,
  progress-state normalization).
