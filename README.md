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

Vite · React 18 · TypeScript (strict) · Tailwind (dark default) · React Router ·
Zustand (+persist) · localForage · @monaco-editor/react · Web Worker + Sucrase ·
react-markdown · Recharts.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

Everything runs in the browser — there is no server to configure and no data
leaves your machine.

## Project layout

- `src/data/` — the curriculum: problems, modules, build labs, challenge tracks,
  and System Design content, registered into `curriculum.ts`.
- `src/runner/` — the Web Worker code runner, judge, and TS transpile.
- `src/store/` — Zustand progress store + IndexedDB draft/design stores.
- `src/pages/` + `src/components/` — the UI (routes are code-split with
  `React.lazy`, so Monaco and charts load only where needed).
