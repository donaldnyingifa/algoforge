# AlgoForge — Build Progress

> Resume file. A brand-new session can pick up from this file alone. Keep it
> current at the end of every phase and sub-batch.

## Current position

- **Current phase:** Phase 18 — Polish & Ship → ✅ COMPLETE. **All 18 phases done —
  AlgoForge is SHIPPED.** Real (non-stubbed) production build passes; tsc clean.
- **Status:** Project complete. If revisiting, the app is fully built: DSA track
  (7 stages, ~394 problems, 66 modules, badges, tests), challenge tracks, expert
  stage, mock interviews, spaced review, and the full System Design track
  (foundations, build labs, 14 case studies, mock design interviews, certification).
- **BUILD NOTE:** the sandbox `/tmp` gets wiped intermittently and background
  (`&`/nohup) builds do NOT survive across tool calls. Run `vite build` SYNCHRONOUSLY
  in one call with `--minify false` and an extended timeout (~300s). Re-rsync +
  re-stub monaco/CodeEditor after any /tmp wipe.

### Stage 5 input conventions (established in batch 1 — reuse these)

- **Trees**: a complete-array level order — children of index `i` are at
  `2i+1` / `2i+2`, `null` (or past the end) means no node. Every problem
  statement repeats this note; see `NOTE` in `treeDfs.ts` / `treeBfs.ts`.
- **Graphs**: `n` (nodes `0..n-1`) plus an edge list `[[u,v], …]`; matrices as
  `number[][]` for the islands problems.
- **Intervals**: `[[start, end], …]`.
- Sort any output whose natural order would otherwise be ambiguous.

## ⚠️ Build/verify note for this sandbox (important for future sessions)

Each shell call runs in an ephemeral `bwrap` sandbox with a ~45s wall-clock cap
and `--die-with-parent`, so **background jobs do not survive between calls** and
any single command must finish under ~40s. A full `npm run build` with Monaco
bundled locally exceeds that (Monaco's TS worker is large) and gets killed.

This is an environment limitation, not a code problem. Verification strategy used
(all green): (1) `tsc -b` strict typecheck of the **real** project incl. all
Monaco imports → 0 errors; (2) judge unit tests in Node → 27/27; (3) the **real**
executor worker bundled with esbuild and driven headlessly → 12/12 (all judge
types, console capture, TS compile-error line numbers, runtime/missing-fn
handling); (4) full Vite build of app **+ the executor Web Worker** with Monaco
swapped for a stub → clean, worker chunk emitted. **On a normal dev machine
`npm run build` completes fully** — just run it there.

## How to run

```bash
cd algoforge
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build  (must stay clean every phase)
npm run typecheck  # strict typecheck only
```

Node 18+ required (built/verified on Node 22). No backend, no runtime APIs.

## Phase 1 checklist — all ✅

- ✅ Vite + React 18 + TypeScript **strict** project (`strict`, `noUnusedLocals`,
  `noUnusedParameters`, `noUncheckedIndexedAccess`, `noFallthroughCasesInSwitch`).
- ✅ Tailwind CSS, **dark mode by default** (`darkMode: "class"`), pre-paint theme
  script in `index.html` to avoid flash.
- ✅ React Router (`createBrowserRouter`) with a `Layout` route + 8 pages + 404.
- ✅ App shell: sidebar (Home, Learn, Patterns, Challenges, Playground,
  Dashboard, Badges, Settings), header, theme toggle.
- ✅ Dark/light theme, **persisted** (Zustand `persist`, key `algoforge-theme`)
  and survives reload.
- ✅ Zustand progress store skeleton with `persist` (key `algoforge-progress`,
  versioned, `partialize`d).
- ✅ **All** core data-model types defined in `src/types/index.ts`.
- ✅ Empty-but-wired curriculum registry: 7 DSA stages + 4 SD stages present;
  pages render straight from `src/data/curriculum.ts`.
- ✅ `npm run build` clean; strict `tsc -b` passes (verified: 67 modules,
  0 type errors).

## Phase 2 checklist — all ✅

- ✅ Monaco editor (`CodeEditor.tsx`) with JS/TS language + theme sync, bundled
  **locally** (no CDN) via `monacoSetup.ts` — editor API + JS/TS language
  features only (keeps bundle/build lean).
- ✅ Web Worker sandbox (`executor.worker.ts`) — module worker, console
  capture, scratch + tests modes, strips `export` for `new Function` eval.
- ✅ **4000ms hard kill** (`runnerManager.ts`): fresh disposable worker per run,
  raced against a timeout; on timeout `worker.terminate()` → "Time limit
  exceeded — possible infinite loop."
- ✅ Judge (`judge.ts`): deep equality (key-order-insensitive, NaN===NaN),
  order-insensitive arrays (multiset), float tolerance, and `judgeType`
  (returnValue | mutateArgument | orderInsensitiveArray) via `effectiveFlags`.
- ✅ TS transpiled **in the worker** (Sucrase); syntax errors surfaced with
  line/column in a friendly panel (`transpile.ts` `parsePosition`).
- ✅ Results panel (`ResultsPanel.tsx`): per-test verdicts, runtimes,
  expected-vs-received diffs, console stream, compile/runtime/TLE banners.
- ✅ Playground rebuilt on the engine with one-click examples covering every
  acceptance case (passing/failing tests, mutate, order-insensitive TS,
  infinite loop → TLE, TS compile error). Cmd/Ctrl+Enter runs.

## Phase 3 checklist — all ✅

- ✅ Lesson renderer (`MarkdownView` = react-markdown + remark-gfm) with a
  custom code-block renderer: ```js / ```ts fenced blocks become editable,
  runnable snippets (`RunnableSnippet`, scratch mode on the shared worker).
- ✅ Problem workspace (`pages/Problem.tsx`): markdown statement + examples +
  constraints; Monaco editor; **per-problem-per-language draft autosave to
  IndexedDB** via localForage (`store/draftStore.ts`, debounced 400ms; reset-to-
  starter); Run (visibleTests) vs Submit (visible+hidden) with per-test verdicts.
- ✅ 3-tier hints drawer (nudge → approach → pseudocode), usage counted into
  `problemStats[id].hintsUsed`.
- ✅ Solutions locked until solved OR explicit "give up"; JS/TS toggle + complexity.
- ✅ Attempt logging: `logAttempt` / `solveProblem` update attempts, timeSpentMs
  (active-time checkpoints), status, firstSolvedAt; XP awarded once on first solve.
- ✅ Sample content wired end-to-end: 1 lesson module + 3 problems (easy/medium/
  hard). Lesson page lists drills; module cards on Learn link through.
- ✅ Verified: all 3 problems' 2 solutions × 2 languages pass all visible+hidden
  tests headlessly (21/21 incl. ≥6 hidden, ≥2 solutions, 3 hints each).

## Phase 4 checklist — all ✅

- ✅ XP/rank/streak engine: `applyXp` bumps the daily streak, applies the
  **streak multiplier ×1.1–1.5** (`streakMultiplier`), updates rank, and records
  a per-day `activity` entry (xp/solved/lessons). Awarded on solve & lesson-complete.
- ✅ Completion tracking (from Phase 3) feeds the dashboard.
- ✅ Dashboard: stat grid, next-rank bar, **Recharts** 14-day activity area chart,
  per-stage completion bars (from `insights.stageCompletion`), and weakest-pattern
  insight (`insights.weakestPatterns`) — all with empty states.
- ✅ Settings: **Export** progress → JSON download, **Import** → restore via
  `parseProgressFile` + `replaceProgress`, reset-all, and a configurable
  backup-reminder cadence.
- ✅ **Backup nudge** (`BackupNudge` in Layout) appears when a backup is due
  (`isBackupDue` via `backupReminderDays`/`lastBackupAt`).
- ✅ Round-trip safety: `normalizeProgress` coerces any imported/older blob to
  the current shape; also used as the persist **migrate** (schema v1→v2).
- ✅ Verified: streak multiplier, normalizer, and **export→import round-trip
  equality** (17/17 headless); strict tsc; app+worker build clean.

## Phase 5 checklist — all ✅

- ✅ 5 Foundations lesson modules (`dsa-s1`): Thinking in Algorithms · Big O ·
  JS for DSA · TS for DSA · Math Toolkit — each with intuition, recognition
  cues, runnable JS+TS examples, complexity notes, and pitfalls.
- ✅ 15 drill problems (3 per module), strictly easy→hard, each fully complete:
  both languages, 3 hints (nudge/approach/pseudocode), ≥2 solutions with
  complexity, ≥6 hidden tests covering edges.
- ✅ Foundations **checkpoint pool**: 6 held-out problems (never shown as
  drills) + 5 complexity MCQs; checkpoint module carries `badgeId: badge-foundations`.
- ✅ Provisional, playable checkpoint page (`pages/Checkpoint.tsx`): practice the
  pool + self-check MCQs via `QuizBlock` (mcq/multiSelect). Phase 6 replaces with
  the timed engine.
- ✅ `mkProblem` factory keeps content compliant + terse; content registered via
  `data/foundations/*` and `registerFoundations()`.
- ✅ Verified: all 21 problems × 2 solutions × 2 languages pass visible+hidden
  (154/154 headless incl. authoring-rule checks); strict tsc; build clean.

## Phase 6 checklist — all ✅

- ✅ Generalized timed-test engine (`lib/testEngine.ts`): `drawProblems`
  (per-difficulty rules + top-up fallback so a pool missing a difficulty still
  yields a full test), `drawMcqs`, `scoreTest` (90% problems / 10% MCQs),
  `decideTier` (Bronze≥60/Silver≥75/Gold≥90; **Platinum = 100% within par,
  hint-free**), `retakeStatus` (12h cooldown), `formatDuration`.
- ✅ Test runner (`pages/Test.tsx`, `/test/:moduleId`): config → **timed run**
  with live countdown, **hint lockout** (no hints in the test panels),
  per-problem Submit (all visible+hidden must pass), MCQ capture without reveal,
  **autosubmit at time-up** → results (score, tier, breakdown, XP).
- ✅ Badge tiers with **best-kept** logic + 12h cooldown retakes with a **fresh
  random draw**; incremental **test XP bonus** (`TIER_BONUS`, capped 100) via
  `submitTest` store action; `TestSession` appended to `testHistory`.
- ✅ Badge Gallery (`pages/Badges.tsx`): tier legend + every badge-bearing module
  with earned tier/score/date or "not earned" + take/improve link. Dashboard
  badge count already reflects awards.
- ✅ Foundations checkpoint **rewired**: `pages/Checkpoint.tsx` now launches
  `/test/m-foundations-checkpoint`; badge `badge-foundations` is now earnable.
- ✅ Verified: draw/score/tier/cooldown + best-kept & XP through the real store —
  64/64 headless; strict tsc; build clean.

## Phase 7 — batch 1 checklist ✅ (infra + 3 modules)

- ✅ **buildLab run mode** in the worker: learner code + `BuildLab.testHarness`
  share scope; injected `assert(name, cond)` / `expect(name, received, expected)`
  report per-assertion `TestResult[]` (reuses `ResultsPanel`). `RunRequest.harness`.
- ✅ `BuildLabView` component (lesson → seeded editor → "Run suite" → verdicts →
  `completeBuildLab` on full pass). `buildLabCompletions` on `UserProgress`
  (schema **v3**), `completeBuildLab` store action.
- ✅ **Per-module MCQs**: `Module.complexityQuestionIds`; Test + Checkpoint +
  Lesson draw/show a module's own questions (fallback to global). Foundations
  checkpoint updated to list its 5 `cx-*` ids.
- ✅ Lesson page renders build lab + complexity check + "Take module test" link.
- ✅ 3 modules (`m-ds-arrays/strings/linked-lists`, kind `buildLab`): lesson +
  build lab (DynamicArray / StringBuilder / LinkedList) + 2 MCQs + 2 drills +
  2 held-out pool + badge. Labs verified: reference impls pass their suites (js+ts);
  all 12 problems pass (54/54 headless). strict tsc + build clean.

## Phase 7 — batch 2 checklist ✅ (4 modules)

- ✅ 4 build labs: `lab-stack` (Stack), `lab-deque` (Deque), `lab-hashmap`
  (HashMap with buckets + own hash), `lab-bst` (BST). Reference impls pass their
  suites in js+ts.
- ✅ 16 problems: Stacks (`st-*`), Queues/Deques (`q-*`), Hash (`h-*`), Trees
  (`t-*`) — 2 drills + 2 held-out pool each, all fully compliant.
- ✅ 8 MCQs (`s2-stack-*`, `s2-queue-*`, `s2-hash-*`, `s2-bst-*`); 4 modules
  (`m-ds-stacks/queues/hash/trees`) with badges.
- ✅ Verified 105/105 headless; strict tsc + build clean.

## Phase 7 — batch 3 checklist ✅ (final 3 modules → Phase 7 COMPLETE)

- ✅ **Shared reusable heap**: `data/shared/heap.ts` exports `MIN_HEAP_SOURCE` /
  `MAX_HEAP_SOURCE` (source strings). The Heap lab produces `MinHeap`; later
  solutions prepend these sources (used already by `hp-k-smallest`,
  `hp-kth-largest`, `hp-last-stone-weight` sol2). Stage 5/7 should reuse these.
- ✅ 3 build labs: `lab-min-heap` (MinHeap), `lab-graph` (adjacency-list Graph
  w/ BFS `hasPath`), `lab-trie` (prefix tree). Reference impls pass suites js+ts.
- ✅ 12 problems: Heaps (`hp-*`), Graphs (`gr-*`: degree, has-path, components,
  shortest-path — BFS/DFS/Union-Find), Tries (`tr-*`). 8 MCQs; 3 modules
  (`m-ds-heaps/graphs/tries`) with badges.
- ✅ Verified 67/67 headless; strict tsc + build clean.
- **Phase 7 done: all 10 Stage-2 modules, 10 build labs, badges for each.**

## Phase 8 checklist — all ✅ (Stage 3: Core Algorithms)

- ✅ 5 lesson modules (`dsa-s3`): Recursion & the Call Stack · Sorting I
  (elementary) · Sorting II (merge/quick/heap) · Binary Search · Backtracking
  Intro — each with recognition cues + runnable examples.
- ✅ **Step-trace runnable snippets** in the sorting lessons (bubble-sort pass
  logger; merge trace) — the "text-based step-trace output option".
- ✅ 20 problems (`r-*`, `so1-*`, `so2-*`, `bs-*`, `bt-*`), 2 drills + 2 held-out
  pool per module, strictly easy→hard, all fully compliant. Heap sort reuses
  `data/shared/heap.ts`. Backtracking outputs canonicalised (sorted) for
  deterministic judging.
- ✅ 10 MCQs (`s3-*`); 5 badges (`badge-alg-*`).
- ✅ Verified 101/101 headless; strict tsc + build clean.

## Phase 9 — batch 1 checklist ✅ (2 of 8 pattern modules)

- ✅ 2 pattern modules (`dsa-s4`, kind `patternModule`): **Prefix Sum**
  (`m-pat-prefix-sum`) and **Two Pointers** (`m-pat-two-pointers`) — lessons with
  intuition, **recognition cues**, JS/TS **templates**, pitfalls, runnable examples.
- ✅ 20 problems (`ps-*`, `tp-*`), 6 drills easy→hard + 4 held-out pool each;
  every problem has `patternIds` (`["prefix-sum"]` / `["two-pointers"]`) so the
  Dashboard weakest-pattern insight now lights up.
- ✅ 4 MCQs (`s4-ps-*`, `s4-tp-*`); badges `badge-pat-prefix-sum`,
  `badge-pat-two-pointers`.
- ✅ Verified 80/80 headless (fixed a wrong equilibrium expected + a two-solution
  ambiguity in pair-sum); strict tsc + build clean.

## Phase 9 — batch 2 checklist ✅ (4 of 8 pattern modules)

- ✅ **Sliding Window** (`m-pat-sliding-window`) and **Fast & Slow Pointers**
  (`m-pat-fast-slow`) — lessons with recognition cues, JS/TS templates, pitfalls.
- ✅ 20 problems (`sw-*`, `fs-*`): 6 drills easy→hard + 4 held-out pool each.
  Sliding window covers fixed + variable windows (longest-unique, min-subarray-len,
  k-flips, k-distinct, anagram windows, char replacement, product < k).
  Fast/slow covers middle, nth-from-end, happy number, find-the-duplicate,
  cycle detection and cycle entrance.
- ✅ **Linked-list representation convention** (reused by later phases):
  a list is a `next` array where `next[i]` is the next node's index or `-1`
  for null, traversal starting at node 0. Values-only problems pass a plain
  array of values.
- ✅ 4 MCQs (`s4-sw-*`, `s4-fs-*`); badges `badge-pat-sliding-window`,
  `badge-pat-fast-slow`. Pattern ids: `sliding-window`, `fast-slow-pointers`.
- ✅ Verified 121/121 headless (clean first run); strict tsc + build clean.

## Phase 9 — batch 3 checklist ✅ (6 of 8 pattern modules)

- ✅ **Frequency Counter & Hash Patterns** (`m-pat-frequency-counter`) and
  **Stack & Monotonic Stack** (`m-pat-monotonic-stack`) — lessons with
  recognition cues, JS/TS templates, pitfalls.
- ✅ 20 problems (`fc-*`, `ms-*`): 6 drills easy→hard + 4 held-out pool each.
  Frequency: char frequency, first unique, can-construct, added value, top-K,
  four-sum-count (hard), distinct/unique-sum, longest palindrome, isomorphic.
  Stack: final prices, score keeper, daily temperatures, next-greater circular,
  asteroid collision, largest rectangle (hard), previous smaller, simplify path,
  decode string, trapping rain water.
- ✅ 4 MCQs (`s4-fc-*`, `s4-ms-*`); badges `badge-pat-frequency-counter`,
  `badge-pat-monotonic-stack`. Pattern ids: `frequency-counter`, `monotonic-stack`.
- ✅ Verified 121/121 headless (caught a wrong isomorphic-strings expected while
  authoring); strict tsc + build clean.

## Phase 9 — batch 4 checklist ✅ (final 2 → Phase 9 COMPLETE)

- ✅ **Linked List In-Place Reversal** (`m-pat-ll-reversal`) and **Modified
  Binary Search** (`m-pat-modified-binary-search`) — lessons with recognition
  cues, JS/TS templates, pitfalls (incl. the two binary-search loop styles).
- ✅ 20 problems (`llr-*`, `mbs-*`): reversal (full, sublist, k-groups, swap
  pairs, reorder, rotate, odd-even) and binary search (ceiling/floor,
  first-last, rotated search, min-in-rotated, peak, count, matrix, and two
  **binary-search-on-the-answer** problems: eating speed, ship capacity).
- ✅ 4 MCQs; badges `badge-pat-ll-reversal`, `badge-pat-modified-binary-search`.
- ✅ **Phase 9 acceptance verified structurally** (headless): 8 modules, 80
  problems, 8 distinct `patternIds`, every module has ≥6 drills **ordered
  easy→hard**, ≥4 pool problems **held out** (zero overlap with drills), a
  badge, and registered MCQs. Solutions 121/121; strict tsc + build clean.

## Phase 10 — batch 1 checklist ✅ (2 of 10 pattern modules)

- ✅ **Tree DFS** (`m-pat-tree-dfs`) and **Tree BFS** (`m-pat-tree-bfs`) —
  lessons with recognition cues, JS/TS templates, pitfalls (one-child nodes
  break naive min-depth; nodes-vs-edges; losing level boundaries).
- ✅ 20 problems (`td-*`, `tb-*`), 6 drills easy→hard + 4 held-out pool each.
  DFS: max depth, sum, preorder, root-to-leaf path sum, leaf count, diameter
  (hard), inorder, postorder, min depth, max value.
  BFS: level order, level count, level sums, right side view, level maxes,
  zigzag (hard), left side view, level mins, level sizes, bottom-left value.
- ✅ 4 MCQs (`s5-td-*`, `s5-tb-*`); badges `badge-pat-tree-dfs`,
  `badge-pat-tree-bfs`. Pattern ids: `tree-dfs`, `tree-bfs`.
- ✅ Verified 121/121 headless (clean first run); strict tsc + build clean.

## Phase 10 — batch 2 checklist ✅ (4 of 10 pattern modules)

- ✅ **Graph DFS & BFS** (`m-pat-graph-traversal`) and **Merge Intervals**
  (`m-pat-merge-intervals`) — lessons with recognition cues, JS/TS templates,
  pitfalls (visited-on-enqueue, multi-source BFS, no-op flood fill; touching
  endpoints `<=` vs `<`, sort-by-start-then-end-desc for covered intervals).
- ✅ 20 problems (`gt-*`, `mi-*`), 6 drills easy→hard + 4 held-out pool each.
  Graph: reachable count/list, **number of islands**, largest island,
  bipartite check, **rotting oranges** (multi-source BFS, hard), island
  perimeter, flood fill, nodes-at-distance-k, is-it-a-tree.
  Intervals: overlap test, point containment, **merge**, insert, can-attend-all,
  **minimum meeting rooms** (hard), intersections, covered length, remove
  covered, gaps.
- ✅ 4 MCQs (`s5-gt-*`, `s5-mi-*`); badges `badge-pat-graph-traversal`,
  `badge-pat-merge-intervals`. Pattern ids: `graph-traversal`, `merge-intervals`.
- ✅ Verified 121/121 headless (clean first run); strict tsc + build clean.

## Phase 10 — batch 3 checklist ✅ (6 of 10 pattern modules)

- ✅ **Cyclic Sort** (`m-pat-cyclic-sort`) and **Top K Elements**
  (`m-pat-top-k`) — lessons with recognition cues, JS/TS templates, pitfalls
  (don't advance `i` after a swap; compare **values** not indices or duplicates
  loop forever; **k largest → min-heap**, k smallest → max-heap; ties need an
  explicit rule; a heap's array isn't sorted).
- ✅ 20 problems (`cs-*`, `tk-*`), 6 drills easy→hard + 4 held-out pool each.
  Cyclic: sort 1..n, missing number, all missing, all duplicates, corrupt pair,
  **first missing positive** (hard), is-permutation, zero-based sort, k-th
  missing positive, find duplicate.
  Top K: k largest, k-th smallest, k closest to zero, k-th largest distinct,
  **connect sticks**, **max score in k ops** (hard), k smallest, k-th largest,
  sum of k largest, k closest to target.
- ✅ **Top K solutions reuse `data/shared/heap.ts`** (`MIN_HEAP_SOURCE` /
  `MAX_HEAP_SOURCE` prepended) — the Stage 2 heap lab paying off as intended.
- ✅ 4 MCQs (`s5-cs-*`, `s5-tk-*`); badges `badge-pat-cyclic-sort`,
  `badge-pat-top-k`. Pattern ids: `cyclic-sort`, `top-k-elements`.
- ✅ Verified 101/101 headless (clean first run); strict tsc + build clean.

## Phase 10 — batch 4 checklist ✅ (8 of 10 pattern modules)

- ✅ **Two Heaps** (`m-pat-two-heaps`) and **K-Way Merge** (`m-pat-k-way-merge`)
  — lessons with recognition cues, JS/TS templates, pitfalls (rebalance after
  *every* insert; the smaller half needs a **max**-heap; even-length median is
  an average; only advance the list you consumed from; skip empty lists).
- ✅ 20 problems (`th-*`, `km-*`), 6 drills easy→hard + 4 held-out pool each.
  Two Heaps: median of list, lower-half max, **running medians**, maximize
  capital (greedy unlock queue), min moves to equal, **sliding-window median**
  (hard), upper-half min, median of two lists, count below median, half-sum diff.
  K-Way Merge: merge two, smallest across, **merge k lists**, k-th smallest
  across, k-th smallest in matrix, **smallest range covering all lists** (hard),
  largest across, merge+dedupe, median across, k-th largest across.
- ✅ **Both modules reuse `data/shared/heap.ts`** — Two Heaps concatenates
  `MAX_HEAP_SOURCE` + `MIN_HEAP_SOURCE` for the balanced-halves technique.
- ✅ Median problems return exact `.0`/`.5` values (safe under deep-equality).
- ✅ 4 MCQs (`s5-th-*`, `s5-km-*`); badges `badge-pat-two-heaps`,
  `badge-pat-k-way-merge`. Pattern ids: `two-heaps`, `k-way-merge`.
- ✅ Verified 101/101 headless (clean first run); strict tsc + build clean.

## Phase 10 — batch 5 checklist ✅ (final 2 → Phase 10 COMPLETE)

- ✅ **Subsets & Backtracking** (`m-pat-subsets-backtracking`) and **Greedy**
  (`m-pat-greedy`) — lessons with recognition cues, JS/TS templates, pitfalls
  (un-choose; copy don't reference; `i > start` dedup; canonical output order;
  greedy needs a correctness argument — coin change shown with a DP fallback).
- ✅ 20 problems (`sb-*`, `gr-*`), 6 drills easy→hard + 4 held-out pool each.
  Backtracking (mostly **counts** for determinism): valid parens, grid paths,
  subsets-with-dup (sorted output), combination-sum count, palindrome partitions,
  **n-queens count** (hard), distinct-permutation count, phone letters,
  choose-k, decodings. Greedy: fewest coins, max units, jump game, min jumps,
  non-overlapping intervals, **gas station** (hard), assign cookies, stock
  profit, min arrows, partition labels.
- ✅ 4 MCQs (`s5-sb-*`, `s5-gr-*`); badges `badge-pat-subsets-backtracking`,
  `badge-pat-greedy`. Pattern ids: `subsets-backtracking`, `greedy`.
- ✅ **Phase 10 acceptance verified structurally** (headless): 10 modules, 100
  problems, 10 distinct `patternIds`, every module ≥6 drills **ordered
  easy→hard**, ≥4 pool **held out** (no overlap), badge + registered MCQs.
  Solutions 80/80 (fixed 2 wrong hand-computed greedy expecteds); strict tsc +
  build clean.

## Phase 11 — batch 1 checklist ✅ (2 of 12 modules)

- ✅ **DP I — 1-D Decisions** (`m-pat-dp-1d`) and **DP II — Knapsack**
  (`m-pat-dp-knapsack`) — lessons explicitly teach the **memoization →
  tabulation → space-optimized** arc; every problem ships sol1 = memoized
  recursion, sol2 = tabulation/space-opt.
- ✅ 20 problems (`d1-*`, `d2-*`), 6 drills easy→hard + 4 held-out pool each.
  DP I: climb stairs, tribonacci, house robber, max subarray, min-cost stairs,
  **house robber circular** (hard), ways-climb-k, max product subarray,
  delete-and-earn, **LIS** (hard).
  DP II: subset sum, equal partition, 0/1 knapsack, coin-change min,
  coin-change ways, **target sum** (hard), min subset diff, unbounded knapsack,
  rod cutting, perfect squares.
- ✅ 4 MCQs (`s6-d1-*`, `s6-d2-*`) — including the crucial 0/1 (capacity
  downward) vs unbounded (capacity upward) loop-order distinction.
  Badges `badge-pat-dp-1d`, `badge-pat-dp-knapsack`. Pattern ids: `dp-1d`,
  `dp-knapsack`.
- ✅ Verified 121/121 headless (memo and tabulation agree); strict tsc + build clean.

## Phase 18 — Polish & Ship ✅ COMPLETE (PROJECT SHIPPED)

- ✅ **Code-splitting:** all routes converted to `React.lazy` (App.tsx) with a
  `<Suspense>` fallback (spinner, role=status) in Layout. Moved the Monaco
  side-effect import out of `main.tsx` into `CodeEditor.tsx` so Monaco loads only
  on editor pages.
- ✅ **Real production build verified** (non-stubbed, Monaco included, ~1m20s):
  Monaco (~4.4 MB) now a lazily-loaded chunk; recharts/Dashboard (817 KB) and
  react-markdown (376 KB) separate chunks. Initial bundle ~2.07 MB / **410 KB
  gzip** (was ~3.5 MB / 690 KB) with editor + charts deferred. tsc clean.
- ✅ README.md authored (overview, stack, run/build, layout). index.html already
  had title/meta/favicon + theme-flash guard; NotFound covers `*`; empty/loading
  states present throughout.
- ✅ Final totals: 7 DSA stages + 4 SD stages, ~394 problems, 66 modules, tiered
  badges, 4 challenge tracks, spaced review, mock interviews, 14 SD case studies,
  SD certification. All 18 phases delivered.

## Phase 17 — SD Mock Interviews + Certification ✅ COMPLETE (sd-s4)

- ✅ **Certification** (`data/systemdesign/certification.ts`): module
  `m-sd-certification` (sd-s4, badge `badge-sd-certified`) + exam pool =
  all 17 SD foundation MCQs. Page `SdCertification.tsx` (/sd-cert): timed
  ${'10'}-question / 15-min MCQ exam → scores → `submitTest(session, badge)` reuses
  best-kept-badge + XP-bonus logic (synthetic TestSession, 0 problems, moduleId =
  cert module). Results show tier/Certified.
- ✅ **Mock design interview** page `SdMockInterview.tsx` (/sd-mock): pick a case
  study + duration (30/45/60), timed template editor + diagram (persists via
  designStore), Finish → reveal model answer + links to full case study & cert.
- ✅ Surfacing: Learn → System Design now shows 3 cards (Case Studies, Mock Design
  Interview, Certification); Badges gallery special-cases the cert link → /sd-cert
  ("Take exam"); Lesson page adds a "Start certification exam" CTA for the cert
  module. Routes /sd-mock, /sd-cert added.
- ✅ Verified: cert module + badge registered (sd-s4), 17-question pool all resolve
  & valid, 66 modules total; tsc + build clean. **System Design track complete**
  (Foundations → Build Labs → Case Studies → Interviews & Certification).

## Phase 16 — SD Case Studies ✅ COMPLETE (14 designs)

- ✅ Batch 4 (final): **Metrics & Monitoring** (med), **Distributed Cache** (hard,
  reuses ring+LRU concepts), **Ride-Sharing/Uber** (hard, geospatial), **Ticket
  Booking** (hard, reservation locking), **Payment System** (hard, idempotency/
  ledger). 14 total (2 easy / 6 medium / 6 hard). All full CaseStudy shape,
  unique quiz ids, 0 integrity issues; tsc + build clean. `/cases` lists them
  easy→hard; page infra (template editor, self-rubric, model-answer reveal,
  localForage submissions, completeLesson XP) unchanged from batch 1.

## Phase 16 — SD Case Studies 🚧 (batches 1–3: 9 designs)

- ✅ Batch 3: **Typeahead/Autocomplete** (med), **Notification Service** (med),
  **Video Streaming** (hard), **Cloud File Storage / Drive** (hard). Full shape;
  unique quiz ids; 0 integrity issues; tsc + build clean. 9 case studies total.

## Phase 16 — SD Case Studies 🚧 (batches 1–2: 5 designs)

- ✅ Batch 2: **Pastebin** (easy), **Web Crawler** (medium), **Chat System**
  (medium) appended to `sdCaseStudies` — full walkthroughs (prose + decision MCQs,
  unique quiz ids), 6-section templates, 5-criterion rubrics, model answers.
- ✅ Verified: 5 case studies, 0 integrity issues (templates=6, rubric maxScore 4,
  unique quiz ids, non-thin model answers); tsc + build clean.

## Phase 16 — SD Case Studies 🚧 (batch 1: infra + 2 designs)

- ✅ Data: `data/systemdesign/casestudies.ts` — **URL Shortener** (easy) + **News
  Feed** (medium), each with walkthrough (prose + decision MCQ), 6-section
  `designTemplate` (via `template()` helper), 5-criterion rubric (maxScore 4),
  full `modelAnswer`, xp=XP.caseStudy. Registered via `registerCaseStudy` in
  `registerSystemDesign()`.
- ✅ Selectors `allCaseStudies()` (easy→hard) + `getCaseStudy(id)` in curriculum.
- ✅ Persistence: `store/designStore.ts` (localForage `design_submissions`) —
  loadSubmission/saveSubmission/emptySubmission for `DesignSubmission`.
- ✅ Pages: `CaseStudies.tsx` (index, /cases) + `CaseStudy.tsx` (/case/:caseId —
  walkthrough, autosaving template editor, diagram scratchpad, 0–4 self-rubric,
  Submit → reveal model answer + `completeLesson(cs.id, xp)` for idempotent XP).
  Routed in App.tsx; surfaced via a "Case Studies" card in Learn → System Design.
- ✅ Verified: 2 case studies, 0 integrity issues (6-section templates, rubric
  maxScore 4, decision-quiz answer indices/explanations); strict tsc + build clean.
  Fixed a `noUncheckedIndexedAccess` error in `allCaseStudies` (typed rank Record
  by Difficulty).

## Phase 15 — SD Build Labs ✅ COMPLETE (sd-s2, 4 labs)

- ✅ Batch 2 (`labs2.ts`): **Consistent Hashing Ring** (`m-sd-lab-hash-ring`,
  `HashRing` w/ virtual nodes, FNV-1a hash, binary-search clockwise; harness tests
  the minimal-disruption invariant — removing a node leaves non-owned keys put —
  1452 assertions) and **Bloom Filter** (`m-sd-lab-bloom-filter`, `BloomFilter(size,
  numHashes)` via double hashing FNV-1a + djb2; harness tests no-false-negatives +
  low false-positive rate). Property-based harnesses so any correct hash passes.
- ✅ Verified references pass all (js+ts), starters fail; sd-s2 = 4 build labs,
  65 total; tsc + build clean.

## Phase 15 — SD Build Labs 🚧 (batch 1: sd-s2, 2 labs)

- ✅ `data/systemdesign/labs.ts`: **Build Lab — Rate Limiter** (`m-sd-lab-rate-limiter`,
  `RateLimiter` token-bucket, `allow(nowMs)` w/ fractional refill; 14 assertions)
  and **Build Lab — LRU Cache** (`m-sd-lab-lru-cache`, `LRUCache(capacity)` O(1)
  get/put via Map insertion-order; 11 assertions). `kind: "buildLab"`, xp=XP.buildLab,
  no drills/badge. Render via existing Lesson page + `BuildLabView`.
- ✅ Verified: references pass all assertions (js+ts), starters correctly fail;
  registered under sd-s2 (2 modules, 63 total); strict tsc + build clean.

## Phase 14 — System Design Foundations ✅ COMPLETE (sd-s1, 8 modules)

- ✅ Batch 1: framework, estimation, networking, building blocks.
- ✅ Batch 2 (`foundations2.ts`): **API Design** (`m-sd-api-design`), **Async &
  Messaging** (`m-sd-messaging`), **Consistency & Replication** (`m-sd-consistency`),
  **Reliability & Observability** (`m-sd-reliability`). Lesson-only (Markdown +
  tradeoff MCQs), prereqs chained to framework/building-blocks.
- ✅ 17 SD MCQs total; all render via the existing Lesson page (no drills/badge) and
  appear under Learn → System Design. Registered via `registerSystemDesign()`.
- ✅ Verified: 8 sd-s1 modules, 61 total, 0 integrity issues (kinds, sections,
  MCQ answer indices/explanations, prereqs all resolve); strict tsc + build clean.

## Phase 13 — Expert + Mock Interviews + Spaced Review ✅ COMPLETE

- ✅ **Expert stage** (`dsa-s7`): module `m-expert-algos` (pattern `expert`, badge
  `badge-expert-algos`), 10 new advanced problems in `data/expert/algos.ts` — KMP
  search, overlapping-occurrence count, longest-prefix-suffix, Fenwick range-sum
  w/ updates, MST cost (Kruskal), grid Dijkstra (reuses `MIN_HEAP_SOURCE`); pool:
  longest-repeated-substring, range-min-query (sparse table), components-after-each-
  edge, all-pattern-indices. Each ships an optimal + baseline solution. 2 MCQs
  (`s7-kmp`, `s7-fenwick`). Verified 51/51 headless. Registered via
  `data/expert/index.ts` → `registerExpert()` in registerContent.
- ✅ **Spaced review:** `REVIEW_INTERVALS_DAYS=[3,7,21]` (already in constants).
  Store: `solveProblem` now auto-schedules a review on FIRST solve
  (`withScheduledReview`); new actions `scheduleReview`, `reviewProblem(id,
  remembered)` (remembered→advance & cap, forgot→reset step 0), and
  `recordMockInterview`. New `pages/Review.tsx` (due / scheduled lists, Remembered/
  Forgot grading) at route `/review`. Uses existing `reviewQueue: ReviewEntry[]`.
- ✅ **Mock interviews:** `lib/mock.ts` (3 presets: warm-up 2×med/30m, standard
  2med+1hard/45m, onsite 2med+2hard/60m; cross-pattern pool = 310 problems via
  `drawProblems`). New `pages/MockInterview.tsx` (config→timed run→results, reuses
  CodeEditor + useCodeRunner; awards XP for solved, logs a `mock-*` TestSession via
  `recordMockInterview`; no badge/MCQs) at route `/mock`.
- ✅ Sidebar gains Mock Interview + Review; Dashboard surfaces "start a mock" and
  due-review count cards. `ProgressBar` (from Phase 12) reused.
- ✅ Verify: registry 394 problems / 53 modules / 0 integrity issues; review
  logic unit-checked; mock draws correct; strict tsc + Monaco-stubbed build clean.
- **Manual test:** solve any problem → it appears in `/review` after its due date
  (3d); grade it to reschedule. `/mock` → pick a preset → solve under the clock →
  results log XP. Expert stage shows under Learn/Patterns (dsa-s7).

## Phase 12 — Challenge Tracks ✅ COMPLETE

- ✅ **No new problem statements** — tracks are curated, deterministic selections
  over the existing 384-problem registry. `src/data/tracks.ts` builds them lazily
  + memoized (safe to import before `registerContent()`).
- ✅ Four tracks: **Blind 75** (15 core categories × 5, grouped), **Ordered 75**
  (same 75, resequenced by stage→difficulty→slug into 10 weeks), **Extended 150**
  (30 patterns × 5, superset of Blind 75), **Daily** (FNV-hash date → deterministic
  pick from the Extended 150 pool). Selection = pattern pool sorted by
  (difficulty, slug), sliced by count — reproducible & always valid.
- ✅ Solving a problem on its normal `/problem/:slug` page updates
  `progressStore.problemStats`; tracks read it via `isSolved` predicate, so a solve
  counts across every track containing it (verified: Blind 75 solve also counts in
  Extended 150).
- ✅ UI: rewrote `pages/Challenges.tsx` (index — daily hero card + track cards with
  `ProgressBar`), new `pages/ChallengeTrack.tsx` (detail — grouped problem rows w/
  solved ticks + difficulty; daily view shows this-week Mon–Sun picks + streak),
  route `challenges/:trackId` in App.tsx, added `ProgressBar` to `components/ui.tsx`,
  and a Challenge-tracks section on the Dashboard.
- ✅ Verified: tracks integrity (counts, no dup/missing, daily determinism),
  cross-track counting, strict tsc, Monaco-stubbed vite build.
- **Manual test:** Challenges page → pick Blind 75 → open a problem → solve it →
  return; the tick + progress bars (track page, Challenges index, Dashboard) all
  update. Daily card shows one problem/day; `/challenges/daily` shows the week.

## Phase 11 — batch 6 checklist ✅ (12 of 12 — PHASE COMPLETE)

- ✅ **Bit Manipulation** (`m-pat-bit`, badge `badge-pat-bit`, pattern `bit`) and
  **Advanced Backtracking** (`m-pat-adv-backtrack`, badge `badge-pat-adv-backtrack`,
  pattern `adv-backtrack`).
- ✅ Bit: hamming-weight, power-of-two, single-number, missing-number, counting-
  bits, single-number-II; pool: hamming-distance, single-number-III (two uniques),
  reverse-bits, subset-XOR-sum. Each ships a bit-trick + plain baseline. Note
  `>>>`/`>>> 0` for unsigned 32-bit.
- ✅ Backtracking: permutations, combinations, combination-sum, subsets-with-dup,
  palindrome-partition-count, n-queens-count; pool: unique-permutations,
  generate-parentheses, word-search, restore-ip-count. Enumerations return
  **deterministic sorted** output (number-arrays by comma-join, strings lexicographic;
  counts as numbers). Each ships a backtracking + alternative solution.
- ✅ 4 MCQs (`s6-bit-clear`, `s6-bit-xor`, `s6-bt-undo`, `s6-bt-dedupe`).
- ✅ **Caught 2 bad estimated expecteds** via harness (hamming-distance(1000,999)
  6→4; restore-ip("12121212") 5→19) — both solutions agreed on the true value.
- ✅ Verified 100/100 headless (both solutions, js+ts); full registry integrity
  pass (0 missing refs, no dup ids/badges); strict tsc + Monaco-stubbed build clean.
  Prereq chain: mono-deque → bit → adv-backtrack.

### Stage 6 / Phase 11 final tally
384 problems · 52 modules · 95 MCQs · 46 badges. Stage 6 patterns (12): dp-1d,
dp-knapsack, dp-grid, dp-string, dp-state, toposort, union-find, shortest-path,
trie, mono-deque, bit, adv-backtrack.

## Phase 11 — batch 5 checklist ✅ (10 of 12 modules)

- ✅ **Tries in Problems** (`m-pat-trie`, badge `badge-pat-trie`, pattern `trie`)
  and **Monotonic Deque** (`m-pat-mono-deque`, badge `badge-pat-mono-deque`,
  pattern `mono-deque`).
- ✅ Tries: word-exists, count-with-prefix, longest-common-prefix, wildcard
  search ('.'), replace-words (shortest root), longest-buildable-word; pool:
  autocomplete (sorted), word-break, **max-XOR (binary trie)**, count-distinct-
  substrings (suffix trie). Each ships a trie solution + set/array baseline.
- ✅ Monotonic Deque: sliding-window max/min, sum-of-window-maxes, first-negative-
  per-window, longest-bounded-diff (two deques), shortest-subarray-≥k (deque on
  prefix sums); pool: sum-window-mins, max-of-window-mins, **jump-game-VI**,
  **constrained-subset-sum** (DP + deque). Each ships a deque solution + brute/
  O(n·k) baseline.
- ✅ 4 MCQs (`s6-trie-prefix`, `s6-trie-xor`, `s6-md-front`, `s6-md-amortized`).
- ✅ All expecteds generated from reference impls & cross-checked (maxXor 28,
  jumpGameVI 7, constrainedSubsetSum 37, etc.). **Caught 1 bad expected**
  (longest-word `eyjuoi`→`eyj`: "eyju" prefix absent so not buildable) via the
  headless harness before shipping.
- ✅ Verified 101/101 headless (both solutions, js+ts); strict tsc + Monaco-
  stubbed build clean. Prereq: shortest-path → trie → mono-deque.

## Phase 11 — batch 4 checklist ✅ (8 of 12 modules)

- ✅ **Union-Find / DSU** (`m-pat-union-find`, badge `badge-pat-union-find`,
  pattern `union-find`) and **Shortest Paths** (`m-pat-shortest-path`, badge
  `badge-pat-shortest-path`, pattern `shortest-path`).
- ✅ Union-Find: count components, are-connected, undirected cycle, largest
  component, redundant connection, make-network-connected; pool: num-provinces
  (matrix), count-connected-pairs, valid-tree, count-redundant. Each ships a
  DSU (path-compression + union-by-size) solution + a BFS/DFS traversal
  alternative. Undirected edges `[u,v]`.
- ✅ Shortest Paths: Dijkstra dist, Dijkstra-all, network delay, cheapest-flights
  (≤K stops), Bellman-Ford, negative-cycle detection; pool: count-reachable-within,
  count-shortest-paths, Floyd-Warshall, city-with-fewest. **Dijkstra reuses the
  shared `MIN_HEAP_SOURCE`** — pushes encoded `dist*BASE+node` (BASE=1e6) numbers
  since the heap orders by value; sol2 is O(n²) Dijkstra / Bellman-Ford / Floyd.
  Weighted directed `[u,v,w]` (undirected noted per-problem, e.g. city-with-fewest).
- ✅ All shortest-path/UF expecteds generated from reference impls and
  cross-checked vs known answers (cheapest-flights 700, network delay, etc.).
- ✅ 4 MCQs (`s6-uf-amortized`, `s6-uf-cycle`, `s6-sp-dijkstra`, `s6-sp-bellman`).
- ✅ Verified 101/101 headless (both solutions, js+ts, incl. heap Dijkstra);
  strict tsc + Monaco-stubbed build clean. Prereq: toposort → union-find →
  shortest-path.

## Phase 11 — batch 3 checklist ✅ (6 of 12 modules)

- ✅ **DP V — State Machines & Intervals** (`m-pat-dp-state`, badge
  `badge-pat-dp-state`, pattern `dp-state`) and **Topological Sort**
  (`m-pat-toposort`, badge `badge-pat-toposort`, pattern `toposort`).
- ✅ DP V: buy/sell state machines (single, unlimited, cooldown, fee, at-most-k,
  two-transaction) + paint house; interval DP (matrix chain, burst balloons,
  min-score triangulation). Every problem: compact machine/tabulation + memoized
  recursion. Tricky expecteds (cooldown, fee, k, burst, chain) generated from
  reference impls and cross-checked vs known answers.
- ✅ Topological Sort: can-finish, lex-smallest order, cycle detection, source
  count, min-semesters (layering), longest-chain (edges, DAG DP); pool: validate
  order, eventual-safe-nodes, count topological orderings (bitmask/backtracking),
  widest semester. Each ships Kahn/BFS + DFS-or-DP alternative. **Graph
  convention:** `n` nodes 0..n-1 + edge list `[u,v]` meaning u→v (u before v);
  deterministic outputs (lex-smallest order, sorted node lists).
- ✅ 4 MCQs (`s6-d5-state`, `s6-d5-interval`, `s6-topo-kahn`, `s6-topo-cycle`).
- ✅ Verified 101/101 headless (both solutions per problem, js+ts); strict tsc +
  Monaco-stubbed build clean. Prereq chain extends: dp-state → toposort.

## Phase 11 — batch 2 checklist ✅ (4 of 12 modules)

- ✅ **DP III — Grids** (`m-pat-dp-grid`, badge `badge-pat-dp-grid`, pattern
  `dp-grid`) and **DP IV — Strings** (`m-pat-dp-string`, badge
  `badge-pat-dp-string`, pattern `dp-string`). Lessons extend the memo →
  tabulation → rolling-row/space-opt arc into 2-D.
- ✅ 20 problems (`d3-*`, `d4-*`), 6 drills easy→hard + 4 held-out pool each,
  each with a memoized *and* a tabulated/rolling solution.
  DP III: unique paths, min path sum, unique paths w/ obstacles, triangle min,
  **maximal square**, **min falling path**; pool: max path sum, count square
  submatrices, **dungeon game** (backward DP), **longest increasing path**
  (memoized DFS).
  DP IV: LCS, longest common substring, **edit distance**, longest palindromic
  subsequence, min insertions palindrome, **longest palindromic substring**;
  pool: delete distance, count palindromic substrings, **distinct subsequences**,
  shortest common supersequence.
- ✅ 4 MCQs (`s6-d3-order`, `s6-d3-space`, `s6-d4-subseq-substr`, `s6-d4-lps-lcs`)
  — grid fill order / rolling-row space; subsequence-vs-substring reset; LPS = LCS
  with reverse.
- ✅ Verified 100/100 headless (memo and tabulation agree, js+ts); strict tsc +
  Monaco-stubbed build clean. Prereq chain: dp-1d → dp-knapsack (batch1);
  dp-grid → dp-string (batch2).

## Phase 11 — batch 1 checklist ✅ (2 of 12 modules)

- **Path alias** `@/*` → `src/*` (configured in `tsconfig.app.json` + `vite.config.ts`).
- **State:** Zustand + `persist` (localStorage) for theme and user progress.
  Per-problem code drafts will use localForage/IndexedDB (Phase 3), not this store.
- **Theme:** `<html class="dark">`, toggled by `themeStore`; pre-paint inline
  script reads the persisted value to prevent FOUC.
- **Curriculum registry** (`src/data/curriculum.ts`) is the single source of
  content truth: `stages` array is populated now (structure); `modules`,
  `problems`, `caseStudies`, `complexityQuestions` are empty maps filled by
  content phases. Pages consume selectors (`stagesForTrack`, `modulesForStage`,
  `patternStages`, `problemsWithTag`, `problemCount`, …) so no page needs
  changing when content is added.
- **Constants** (`src/lib/constants.ts`): XP values, RANKS, badge thresholds,
  default test rules, code timeout (4000ms), review intervals (3/7/21d),
  `SCHEMA_VERSION`. Helpers: `rankForXp`, `nextRank`, `tierForScore`.
- **Strict flag note:** `noUncheckedIndexedAccess` is ON — index lookups return
  `T | undefined`; guard/filter accordingly in all future code.

## File inventory (Phase 1)

```
algoforge/
  index.html                     pre-paint theme script, #root
  vite.config.ts                 react plugin, @ alias, es worker format
  tailwind.config.js             darkMode class, forge palette
  postcss.config.js
  tsconfig*.json                 strict app + node projects
  public/favicon.svg
  src/
    main.tsx                     React root
    App.tsx                      router (Layout + 8 pages + 404)
    index.css                    tailwind layers + base theme
    vite-env.d.ts
    types/index.ts               ALL core data-model types
    lib/
      cn.ts                      className joiner
      constants.ts               XP/ranks/badges/test defaults + helpers
    store/
      themeStore.ts              persisted theme (dark default)
      progressStore.ts           persisted UserProgress skeleton
    data/
      curriculum.ts              stages (11) + empty content maps + selectors
    components/
      Layout.tsx, Sidebar.tsx, ThemeToggle.tsx, StageList.tsx, ui.tsx
      CodeEditor.tsx (Monaco), ResultsPanel.tsx           [Phase 2]
    pages/
      Home, Learn, Patterns, Challenges, Playground,
      Dashboard, Badges, Settings, NotFound
```

### Added in Phase 2

```
    lib/monacoSetup.ts        local Monaco bundle + worker env (side-effect import in main.tsx)
    runner/
      types.ts                RunRequest/RunOutcome/TestResult/ConsoleLine
      judge.ts                deepEqual, effectiveFlags, preview
      transpile.ts            Sucrase TS->JS + parsePosition
      executor.worker.ts      the sandboxed Web Worker
      runnerManager.ts        runInWorker() with 4s hard kill
      useCodeRunner.ts        React hook (running/outcome, stale-run guard)
    data/playgroundExamples.ts  7 runnable demos
```

Reusable API for Phase 3: `useCodeRunner()` → `run(RunRequest)`; build a
`RunRequest` with `mode:"tests"`, `functionName`, `judgeType`, and the problem's
visible (Run) or visible+hidden (Submit) `tests`. `<CodeEditor>` + `<ResultsPanel>`
are ready to drop into the problem workspace.

### Added in Phase 3

```
    store/draftStore.ts       localForage/IndexedDB per-problem-per-language drafts
    store/progressStore.ts    +logAttempt/solveProblem/addHintUsed/completeLesson, applyXp
    components/
      MarkdownView.tsx        react-markdown + gfm, runnable code blocks
      RunnableSnippet.tsx     editable+runnable lesson snippet
      ui.tsx                  +DifficultyBadge
    pages/Lesson.tsx          lesson sections + drills list + mark-complete
    pages/Problem.tsx         full workspace (ProblemWorkspace/HintsDrawer/SolutionsCard)
    data/
      curriculum.ts           +register{Problem,Module,CaseStudy,ComplexityQuestion}, getProblemBySlug
      samples.ts              3 sample problems + 1 lesson module (registerSamples)
      registerContent.ts      central content registration (imported by main.tsx)
```

Content registration pattern (use for all later content phases): each content
file exports a `register…()` that calls `registerProblem/registerModule`; add the
call to `data/registerContent.ts`. Modules auto-attach to their stage.

### Added in Phase 4

```
    types/index.ts            +DailyActivity, UserProgress.activity
    lib/constants.ts          +streakMultiplier; SCHEMA_VERSION -> 2
    lib/insights.ts           stageCompletion, weakestPatterns, recentActivity, solvedCount
    lib/backup.ts             downloadProgress, parseProgressFile, isBackupDue
    store/progressStore.ts    applyXp(multiplier+activity), normalizeProgress, markBackedUp, persist migrate
    components/BackupNudge.tsx dismissible reminder (in Layout)
    pages/Dashboard.tsx       Recharts chart + completion + weakest patterns
    pages/Settings.tsx        export/import + backup cadence
```

Reusable for later phases: award XP through the store actions (they run the
multiplier + activity log); read insights via `lib/insights`; import/normalize
any external progress with `normalizeProgress`. Persisted schema is **v2** — bump
`SCHEMA_VERSION` and extend `normalizeProgress` for any future field.

### Added in Phase 5

```
    data/foundations/
      factory.ts     mkProblem(stageId, ProblemDraft) — compact authoring helper
      drills.ts      foundationsDrills: 15 problems (3 per module)
      checkpoint.ts  foundationsPool: 6 held-out + foundationsComplexityQuestions (5) + checkpoint Module
      lessons.ts     foundationsLessonModules: 5 lesson modules
      index.ts       registerFoundations() (called from registerContent.ts)
    components/QuizBlock.tsx   mcq/multiSelect grader (numeric/ordering/matching = Phase 14)
    pages/Checkpoint.tsx       provisional checkpoint (pool practice + MCQ self-check)
    App.tsx                    +/checkpoint/:moduleId; StageList links challengeTrack→checkpoint
```

Content authoring pattern for Stages 2-7: reuse `mkProblem`, one folder per
stage/module group, export a `register…()`, add it to `registerContent.ts`.
Modules of `kind: "challengeTrack"` link to `/checkpoint/:id`; `"lesson"` and
`"patternModule"` link to `/lesson/:id`.

### Added in Phase 6

```
    lib/constants.ts     +TIER_RANK, TIER_BONUS, tierRank(), tierBonus()
    lib/testEngine.ts    draw/score/tier/cooldown (all pure, unit-tested)
    store/progressStore  +submitTest(session, badgeId) -> {isNewBest, xpAwarded}
    pages/Test.tsx        /test/:moduleId runner (config/running/results)
    pages/Badges.tsx      rewritten gallery
    pages/Checkpoint.tsx  now launches the timed test
    App.tsx               +/test/:moduleId
```

To give any module a badge: add `badgeId` + `testPoolProblemIds` to the Module,
ensure complexity MCQs are registered, and the `/test/:moduleId` flow + Badge
Gallery pick it up automatically. Tests draw complexity MCQs from the **whole**
`complexityQuestions` pool (fine while Foundations is the only set; when other
stages add MCQs, consider tagging questions by stage/topic and filtering the draw).

## Content inventory (problem/track counts)

- Problems authored: **24** total, all in `dsa-s1`:
  - 3 Phase-3 samples (`p-count-evens`, `p-pivot-index`, `p-merge-windows`).
  - 15 Foundations drills (`f-*`): Thinking (sum-to, count-vowels,
    first-duplicate) · BigO (has-duplicate, two-sum-exists, most-frequent) ·
    JS (reverse-string, chunk, group-parity) · TS (unique-values, count-by,
    flatten-one) · Math (digit-sum, gcd, is-prime).
  - 6 Foundations checkpoint pool (`fc-*`): range-sum, count-greater,
    second-largest, is-palindrome, rotate-left, running-total.
- Complexity MCQs: **5** (`cx-*`, in `complexityQuestions`).
- Modules authored: **7** in `dsa-s1`: `m-sample-warmup` + 5 Foundations lessons
  (`m-foundations-thinking/bigo/js/ts/math`) + `m-foundations-checkpoint`.
- Badges: `badge-foundations` — **now earnable** via `/test/m-foundations-checkpoint`.
- Stage 2 (`dsa-s2`) batch 1: **12 problems** (`a-*` arrays, `s-*` strings,
  `ll-*` linked lists), **3 build labs** (`lab-dynamic-array`, `lab-string-builder`,
  `lab-linked-list`), **6 MCQs** (`s2-*`), **3 modules** (`m-ds-arrays/strings/
  linked-lists`), badges `badge-ds-arrays/strings/linked-lists`.
- Stage 2 batch 2: **16 problems** (`st-*`, `q-*`, `h-*`, `t-*`), **4 build labs**
  (`lab-stack/deque/hashmap/bst`), **8 MCQs**, **4 modules** (`m-ds-stacks/queues/
  hash/trees`), badges `badge-ds-stacks/queues/hash/trees`.
- Stage 2 batch 3: **12 problems** (`hp-*`, `gr-*`, `tr-*`), **3 build labs**
  (`lab-min-heap/graph/trie`), **6 MCQs**, **3 modules** (`m-ds-heaps/graphs/
  tries`), badges `badge-ds-heaps/graphs/tries`. Reusable heap in `data/shared/heap.ts`.
- **Stage 2 (`dsa-s2`) COMPLETE**: 10 modules, 10 labs, 40 problems (12+16+12),
  20 MCQs, 10 badges.
- **Stage 3 (`dsa-s3`) COMPLETE**: 5 lesson modules, 20 problems (`r-*`, `so1-*`,
  `so2-*`, `bs-*`, `bt-*`), 10 MCQs, badges `badge-alg-recursion/sorting1/
  sorting2/binary-search/backtracking`.
- Stage 4 (`dsa-s4`) batch 1: **20 problems** (`ps-*` prefix-sum, `tp-*`
  two-pointers), **4 MCQs**, **2 modules**, badges `badge-pat-prefix-sum/two-pointers`.
  Pattern ids in use: `prefix-sum`, `two-pointers`.
- Stage 4 batch 2: **20 problems** (`sw-*` sliding-window, `fs-*` fast-slow),
  **4 MCQs**, **2 modules**, badges `badge-pat-sliding-window/fast-slow`.
  Pattern ids added: `sliding-window`, `fast-slow-pointers`.
- Stage 4 batch 3: **20 problems** (`fc-*` frequency-counter, `ms-*` monotonic-stack),
  **4 MCQs**, **2 modules**, badges `badge-pat-frequency-counter/monotonic-stack`.
  Pattern ids added: `frequency-counter`, `monotonic-stack`.
- Stage 4 batch 4: **20 problems** (`llr-*`, `mbs-*`), **4 MCQs**, **2 modules**,
  badges `badge-pat-ll-reversal/modified-binary-search`.
- **Stage 4 (`dsa-s4`) COMPLETE**: 8 pattern modules, **80 problems**
  (6 drills + 4 pool each), 16 MCQs, 8 badges. Pattern ids: `prefix-sum`,
  `two-pointers`, `sliding-window`, `fast-slow-pointers`, `frequency-counter`,
  `monotonic-stack`, `linked-list-reversal`, `modified-binary-search`.
- Stage 5 (`dsa-s5`) batch 1: **20 problems** (`td-*` tree-dfs, `tb-*` tree-bfs),
  **4 MCQs**, **2 modules**, badges `badge-pat-tree-dfs/tree-bfs`.
  Pattern ids added: `tree-dfs`, `tree-bfs`.
- Stage 5 batch 2: **20 problems** (`gt-*` graph-traversal, `mi-*` merge-intervals),
  **4 MCQs**, **2 modules**, badges `badge-pat-graph-traversal/merge-intervals`.
  Pattern ids added: `graph-traversal`, `merge-intervals`.
- Stage 5 batch 3: **20 problems** (`cs-*` cyclic-sort, `tk-*` top-k-elements),
  **4 MCQs**, **2 modules**, badges `badge-pat-cyclic-sort/top-k`.
  Pattern ids added: `cyclic-sort`, `top-k-elements`.
- Stage 5 batch 4: **20 problems** (`th-*` two-heaps, `km-*` k-way-merge),
  **4 MCQs**, **2 modules**, badges `badge-pat-two-heaps/k-way-merge`.
  Pattern ids added: `two-heaps`, `k-way-merge`.
- Stage 5 batch 5: **20 problems** (`sb-*`, `gr-*`), **4 MCQs**, **2 modules**,
  badges `badge-pat-subsets-backtracking/greedy`.
- **Stage 5 (`dsa-s5`) COMPLETE**: 10 pattern modules, **100 problems**
  (6 drills + 4 pool each), 20 MCQs, 10 badges. Pattern ids: `tree-dfs`,
  `tree-bfs`, `graph-traversal`, `merge-intervals`, `cyclic-sort`,
  `top-k-elements`, `two-heaps`, `k-way-merge`, `subsets-backtracking`, `greedy`.
- Totals so far: **264 problems**, **10 build labs**, **71 MCQs**, **40 modules**, 34 badges.
- Stages wired: **11** (DSA 7 + SD 4).
- Track tags in use: none yet (Challenges reads `blind75`/`ordered75`/
  `extended150`/`daily`, shows 0 until Phase 12).

## Next steps (Phase 11 — Patterns Tier 3, sub-batched 2–3 per batch)

1. 12 pattern modules in `dsa-s6` (kind `patternModule`): DP I (1-D) · DP II
   (Knapsack 0/1 & unbounded) · DP III (grids) · DP IV (strings: LCS family,
   edit distance, palindromes) · DP V (state machines, interval-DP intro) ·
   Topological Sort · Union-Find · Shortest Paths (Dijkstra, Bellman-Ford idea) ·
   Tries in Problems · Monotonic Deque · Bit Manipulation · Advanced Backtracking.
2. **DP lessons must teach the memoization → tabulation → space-optimized arc.**
   A natural way: solution 1 = memoized recursion, solution 2 = tabulation (or
   space-optimized), with the lesson prose walking all three stages.
3. Same bar as Phases 9–10 — reuse `mkProblem`, one file per pattern in
   `data/stage6/`, add `registerStage6()` to `registerContent.ts`.
4. Reuse `data/shared/heap.ts` for Dijkstra; graphs as `n` + edge list; keep
   outputs deterministic (sort where ambiguous).
5. End each sub-batch with the checklist + STOP; log inventory counts here.

## Old next steps (Phase 9 — done)

1. 8 pattern modules in `dsa-s4` (kind `patternModule`, link to `/lesson/:id`):
   Prefix Sum · Two Pointers · Sliding Window · Fast & Slow Pointers · Frequency
   Counter/Hash · Stack & Monotonic Stack · Linked List In-Place Reversal ·
   Modified Binary Search.
2. Each module: lesson (intuition + **recognition cues** + reusable JS/TS
   template + pitfalls + 2–3 runnable mini-examples) → guided example →
   **6–10 drills strictly easy→hard** → 4–6 held-out test-pool problems → badge.
3. **Set `patternIds` on every problem** (e.g. `["two-pointers"]`) so the
   Dashboard weakest-pattern insight works. A pattern id can match the module.
4. Reuse `mkProblem` + `data/stage4/` folder + `registerStage4()`; extend
   `registerContent.ts`. Sub-batch of 2–3 modules, then STOP with the checklist.
5. Log content-inventory counts per pattern/track in this file each sub-batch.
   Keep strict typecheck green; full `npm run build` on a real machine.
```
