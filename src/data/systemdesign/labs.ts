import type { BuildLab, Module } from "@/types";
import { XP } from "@/lib/constants";

const S = "sd-s2";

/*
 * System Design — Build the Blocks (Stage sd-s2). Runnable BUILD LABS: implement
 * a core infrastructure primitive and pass an assertion harness. Same machinery
 * as the Stage-2 data-structure labs (assert/expect injected; source + harness
 * run together). References below self-verify against their harnesses.
 */

/* ------------------------------------------------------------------ */
/* Token-bucket rate limiter                                           */
/* ------------------------------------------------------------------ */

const rateLimiterHarness = `
const rl = new RateLimiter(3, 1); // capacity 3, refill 1 token/sec
assert("burst 1", rl.allow(0) === true);
assert("burst 2", rl.allow(0) === true);
assert("burst 3", rl.allow(0) === true);
assert("bucket empty -> denied", rl.allow(0) === false);
assert("still denied at 0.5s (only 0.5 token)", rl.allow(500) === false);
assert("allowed after 1s refill", rl.allow(1000) === true);
assert("denied again immediately", rl.allow(1000) === false);
assert("two tokens refilled after 2s", rl.allow(3000) === true);
assert("second of the two", rl.allow(3000) === true);
assert("empty again", rl.allow(3000) === false);
const rl2 = new RateLimiter(2, 10); // refill fast, but capped at capacity
assert("cap: first ok", rl2.allow(0) === true);
assert("cap: second ok", rl2.allow(0) === true);
assert("cap: third denied", rl2.allow(0) === false);
assert("cap: refill never exceeds capacity", rl2.allow(10000) === true && rl2.allow(10000) === true && rl2.allow(10000) === false);
`;

const rateLimiterLab: BuildLab = {
  id: "lab-sd-rate-limiter",
  exportName: "RateLimiter",
  spec: `Implement a **token-bucket rate limiter**. A bucket holds up to \`capacity\` tokens and refills at \`refillPerSec\` tokens per second (fractional tokens accrue). Each allowed request consumes one token.

- \`constructor(capacity, refillPerSec)\` — start full.
- \`allow(nowMs)\` — given the current time in milliseconds, refill based on elapsed time (never exceeding capacity), then if at least one token is available consume it and return \`true\`; otherwise return \`false\`.

Time is passed in explicitly so behaviour is deterministic. Calls arrive with non-decreasing timestamps.`,
  starterCode: {
    js: `class RateLimiter {
  constructor(capacity, refillPerSec) {
    // store capacity/rate, start full, remember the last timestamp
  }
  allow(nowMs) {
    // refill by elapsed seconds (cap at capacity), then try to spend a token
  }
}
`,
    ts: `class RateLimiter {
  constructor(capacity: number, refillPerSec: number) {
    // store capacity/rate, start full, remember the last timestamp
  }
  allow(nowMs: number): boolean {
    return false;
  }
}
`,
  },
  testHarness: { js: rateLimiterHarness, ts: rateLimiterHarness },
  referenceImplementation: {
    js: `class RateLimiter {
  constructor(capacity, refillPerSec) {
    this.capacity = capacity;
    this.refillPerSec = refillPerSec;
    this.tokens = capacity;
    this.last = 0;
  }
  allow(nowMs) {
    const elapsedSec = (nowMs - this.last) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + elapsedSec * this.refillPerSec);
    this.last = nowMs;
    if (this.tokens >= 1) { this.tokens -= 1; return true; }
    return false;
  }
}
`,
    ts: `class RateLimiter {
  private capacity: number;
  private refillPerSec: number;
  private tokens: number;
  private last = 0;
  constructor(capacity: number, refillPerSec: number) {
    this.capacity = capacity;
    this.refillPerSec = refillPerSec;
    this.tokens = capacity;
  }
  allow(nowMs: number): boolean {
    const elapsedSec = (nowMs - this.last) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + elapsedSec * this.refillPerSec);
    this.last = nowMs;
    if (this.tokens >= 1) { this.tokens -= 1; return true; }
    return false;
  }
}
`,
  },
  xp: XP.buildLab,
};

/* ------------------------------------------------------------------ */
/* LRU cache                                                           */
/* ------------------------------------------------------------------ */

const lruHarness = `
const c = new LRUCache(2);
c.put(1, 1);
c.put(2, 2);
expect("get 1", c.get(1), 1);
c.put(3, 3); // evicts key 2 (least recently used)
expect("2 was evicted", c.get(2), -1);
c.put(4, 4); // evicts key 1
expect("1 was evicted", c.get(1), -1);
expect("get 3", c.get(3), 3);
expect("get 4", c.get(4), 4);
const d = new LRUCache(1);
d.put(1, 10);
expect("single slot get", d.get(1), 10);
d.put(2, 20); // evicts 1
expect("1 evicted from single slot", d.get(1), -1);
expect("2 present", d.get(2), 20);
const e = new LRUCache(2);
e.put(1, 1);
e.put(2, 2);
e.put(1, 100); // update existing, refresh recency
e.put(3, 3);   // evicts 2, not 1 (1 was just used)
expect("update keeps key fresh", e.get(1), 100);
expect("2 evicted after update", e.get(2), -1);
expect("3 present", e.get(3), 3);
`;

const lruLab: BuildLab = {
  id: "lab-sd-lru-cache",
  exportName: "LRUCache",
  spec: `Implement an **LRU (least-recently-used) cache** with a fixed capacity. Both operations must be O(1) on average.

- \`constructor(capacity)\` — maximum number of keys.
- \`get(key)\` — return the value, or \`-1\` if absent; a hit counts as a use (making the key most-recently-used).
- \`put(key, value)\` — insert or update; updating counts as a use. When inserting a new key would exceed capacity, evict the least-recently-used key first.

A \`Map\` preserves insertion order, which you can exploit: delete-then-set moves a key to the "most recent" end, and the first key is the least recent.`,
  starterCode: {
    js: `class LRUCache {
  constructor(capacity) {
    // capacity + a Map to track order
  }
  get(key) {
    // -1 if missing; otherwise refresh recency and return the value
  }
  put(key, value) {
    // insert/update, refresh recency, evict the LRU key if over capacity
  }
}
`,
    ts: `class LRUCache {
  constructor(capacity: number) {
    // capacity + a Map to track order
  }
  get(key: number): number {
    return -1;
  }
  put(key: number, value: number): void {
    // insert/update, refresh recency, evict the LRU key if over capacity
  }
}
`,
  },
  testHarness: { js: lruHarness, ts: lruHarness },
  referenceImplementation: {
    js: `class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.map = new Map();
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const v = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, v);
    return v;
  }
  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    else if (this.map.size >= this.cap) this.map.delete(this.map.keys().next().value);
    this.map.set(key, value);
  }
}
`,
    ts: `class LRUCache {
  private cap: number;
  private map = new Map<number, number>();
  constructor(capacity: number) {
    this.cap = capacity;
  }
  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const v = this.map.get(key) as number;
    this.map.delete(key);
    this.map.set(key, v);
    return v;
  }
  put(key: number, value: number): void {
    if (this.map.has(key)) this.map.delete(key);
    else if (this.map.size >= this.cap) this.map.delete(this.map.keys().next().value as number);
    this.map.set(key, value);
  }
}
`,
  },
  xp: XP.buildLab,
};

/* ------------------------------------------------------------------ */
/* Modules                                                             */
/* ------------------------------------------------------------------ */

const rateLimiterModule: Module = {
  id: "m-sd-lab-rate-limiter",
  stageId: S,
  title: "Build Lab — Rate Limiter",
  kind: "buildLab",
  summary:
    "Implement a token-bucket rate limiter — the primitive behind API throttling and abuse protection.",
  lessonSections: [
    {
      heading: "Why rate limit",
      body: `A **rate limiter** caps how often a client can call your service — protecting it from abuse, runaway retries, and noisy neighbours, and enforcing fair-use quotas. It's a building block you'll place at the API gateway of almost every large system.

The **token bucket** is the classic algorithm: a bucket holds up to \`capacity\` tokens and refills at a steady rate. Each request spends a token; when the bucket is empty, requests are rejected (HTTP 429). Because the bucket can be full, it naturally allows short **bursts** up to \`capacity\` while bounding the sustained rate to the refill rate.

\`\`\`text
capacity 3, refill 1/sec:
  t=0s  ●●●   3 quick requests allowed, bucket now empty -> 4th denied
  t=1s  ●     1 token refilled -> 1 request allowed
\`\`\``,
    },
    {
      heading: "Alternatives worth knowing",
      body: `Other limiters trade accuracy for simplicity: a **fixed-window counter** is easy but allows double-rate bursts at window edges; a **sliding-window log/counter** is more accurate but costlier; the **leaky bucket** smooths output to a constant rate. Token bucket is the pragmatic favourite — cheap, bursty-friendly, and easy to distribute (store the token count in Redis for a cluster-wide limit). Build it in the lab below.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  buildLab: rateLimiterLab,
  prerequisiteModuleIds: ["m-sd-building-blocks"],
};

const lruModule: Module = {
  id: "m-sd-lab-lru-cache",
  stageId: S,
  title: "Build Lab — LRU Cache",
  kind: "buildLab",
  summary:
    "Implement an O(1) least-recently-used cache — the eviction policy at the heart of caching tiers.",
  lessonSections: [
    {
      heading: "Bounded caches need an eviction policy",
      body: `A cache has finite memory, so when it fills it must **evict** something. **LRU** — least-recently-used — is the most common policy: discard the entry that hasn't been touched for the longest, betting that recently-used data will be used again (temporal locality).

The trick is doing both \`get\` and \`put\` in **O(1)**. The classic implementation is a hash map plus a doubly-linked list ordered by recency; here you can lean on JavaScript's \`Map\`, which remembers insertion order — deleting and re-inserting a key moves it to the most-recent end, and \`map.keys().next().value\` is the least-recent key to evict.`,
    },
    {
      heading: "Where it lives",
      body: `LRU (and cousins like **LFU** — least-frequently-used) power in-memory cache tiers (Redis maxmemory policies), database buffer pools, and CPU caches. Getting eviction right is what keeps a cache's **hit rate** high without unbounded memory growth. Implement it below, then move on to the ring and Bloom-filter labs.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  buildLab: lruLab,
  prerequisiteModuleIds: ["m-sd-building-blocks"],
};

export const sdLabModules: Module[] = [rateLimiterModule, lruModule];
