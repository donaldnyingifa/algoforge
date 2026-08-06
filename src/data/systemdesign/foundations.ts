import type { Module, QuizQuestion } from "@/types";

const S = "sd-s1";

/*
 * System Design — Foundations (Stage sd-s1). These are lesson-only modules:
 * substantive Markdown plus tradeoff multiple-choice checks. No code drills and
 * no timed test/badge — they build the vocabulary and mental models the later
 * build labs and case studies assume.
 */

export const sdFoundationMcqs: QuizQuestion[] = [
  {
    id: "sd-f-framework-order",
    kind: "mcq",
    prompt: "In a design interview, the step that should come *first* is:",
    options: [
      "sketching the database schema",
      "clarifying functional and non-functional requirements",
      "choosing a message queue",
      "estimating storage",
    ],
    answerIndex: 1,
    explanation:
      "You can't design the right system until you know what it must do and its scale/latency/consistency targets. Requirements gate every later decision.",
  },
  {
    id: "sd-f-nonfunctional",
    kind: "mcq",
    prompt: "Which of these is a NON-functional requirement?",
    options: [
      "users can upload a photo",
      "the feed shows posts from people you follow",
      "99.9% availability with p99 latency under 200 ms",
      "a user can delete their account",
    ],
    answerIndex: 2,
    explanation:
      "Non-functional requirements describe *how well* the system behaves — availability, latency, durability, scale — rather than a specific feature.",
  },
  {
    id: "sd-f-estimation-qps",
    kind: "mcq",
    prompt: "1 million write requests evenly spread over a day is roughly how many writes per second?",
    options: ["~12 / s", "~120 / s", "~1,200 / s", "~12,000 / s"],
    answerIndex: 0,
    explanation:
      "A day is ~86,400 s; 1,000,000 / 86,400 ≈ 11.6/s. A handy rule: 1M/day ≈ 12/s, 1B/day ≈ 12,000/s.",
  },
  {
    id: "sd-f-estimation-peak",
    kind: "mcq",
    prompt: "Why do we multiply the average request rate by a 'peak factor' (often 2–10×)?",
    options: [
      "to account for traffic bursts and daily peaks the average hides",
      "to convert bytes to bits",
      "because storage grows over time",
      "to add a safety margin for disk failures",
    ],
    answerIndex: 0,
    explanation:
      "Real traffic isn't uniform — it spikes at busy hours. Capacity must handle the peak, not the daily average.",
  },
  {
    id: "sd-f-net-tcp-udp",
    kind: "mcq",
    prompt: "You need ordered, reliable, connection-oriented delivery. You'd choose:",
    options: ["UDP", "TCP", "ICMP", "IP directly"],
    answerIndex: 1,
    explanation:
      "TCP provides ordering, retransmission, and flow/congestion control. UDP is faster but unreliable and unordered — good for streaming/gaming where a dropped packet is fine.",
  },
  {
    id: "sd-f-net-lb",
    kind: "mcq",
    prompt: "The main purpose of a load balancer is to:",
    options: [
      "encrypt traffic end to end",
      "distribute requests across multiple servers and route around unhealthy ones",
      "store session data",
      "cache database rows",
    ],
    answerIndex: 1,
    explanation:
      "A load balancer spreads load across a pool and health-checks members, enabling horizontal scaling and higher availability.",
  },
  {
    id: "sd-f-cache-write",
    kind: "mcq",
    prompt: "A write-through cache differs from write-back in that it:",
    options: [
      "never stores writes",
      "writes to the cache and the backing store synchronously",
      "only caches reads",
      "loses data on every restart",
    ],
    answerIndex: 1,
    explanation:
      "Write-through updates cache and database together (durable, slightly slower writes). Write-back updates the cache first and flushes later (faster, risk of loss on crash).",
  },
  {
    id: "sd-f-cap",
    kind: "mcq",
    prompt: "Under the CAP theorem, during a network partition a system must sacrifice:",
    options: [
      "either consistency or availability",
      "durability",
      "latency",
      "partition tolerance",
    ],
    answerIndex: 0,
    explanation:
      "Partitions happen in any distributed system, so you keep P. When one occurs you must choose: reject/stall to stay consistent (CP), or answer with possibly-stale data to stay available (AP).",
  },
  {
    id: "sd-f-sql-nosql",
    kind: "mcq",
    prompt: "A key reason to reach for a NoSQL store over a relational database is:",
    options: [
      "you need multi-row ACID transactions and complex joins",
      "you need to scale writes horizontally with a flexible/denormalized schema",
      "you want foreign-key constraints enforced",
      "your data is small and highly relational",
    ],
    answerIndex: 1,
    explanation:
      "NoSQL stores trade rich relational features for horizontal write scaling and schema flexibility. If you need joins and strong multi-row transactions, relational is usually the better fit.",
  },
];

const frameworkModule: Module = {
  id: "m-sd-framework",
  stageId: S,
  title: "The Design Interview Framework",
  kind: "lesson",
  summary:
    "A repeatable six-step structure for any system design question — from requirements to deep dives — so you never stare at a blank whiteboard.",
  lessonSections: [
    {
      heading: "Why a framework",
      body: `System design questions are open-ended by design. Without a plan you'll jump straight to a database schema and miss what actually matters. A **repeatable framework** keeps you calm, shows structured thinking, and makes sure the big decisions come before the small ones.

Use these six steps, roughly in order (loop back as you learn more):

1. **Requirements** — functional (what it does) and non-functional (scale, latency, availability, consistency, durability).
2. **Estimation** — back-of-the-envelope QPS, storage, and bandwidth to size the system.
3. **API design** — the handful of endpoints the clients call.
4. **Data model** — the core entities and how they're stored.
5. **High-level design** — boxes and arrows: clients, load balancers, services, databases, caches, queues.
6. **Deep dives** — pick the 1–2 hardest parts and go deep (bottlenecks, scaling, failure modes).`,
    },
    {
      heading: "Requirements first, always",
      body: `Spend the first few minutes **clarifying scope**. Interviewers deliberately give vague prompts ("design Twitter") to see whether you narrow them.

- **Functional requirements** are features: "post a tweet," "view a home timeline," "follow a user." List the top 3–5 and explicitly defer the rest ("let's skip DMs for now").
- **Non-functional requirements** are the qualities that shape the architecture: expected **scale** (users, QPS), **latency** targets (p99), **availability** (99.9% vs 99.99%), **consistency** needs (is stale data OK?), and **durability**.

\`\`\`text
Design a URL shortener
Functional:   create short link, redirect, (optional) custom alias, analytics
Non-functional: read-heavy (100:1), redirect p99 < 100ms, highly available, links durable
\`\`\`

Write these down — they become the yardstick you justify every later decision against.`,
    },
    {
      heading: "Driving the rest of the conversation",
      body: `Once requirements are pinned, the **estimation** tells you whether one box suffices or you need sharding and caching. The **API** forces you to name the operations precisely. The **data model** exposes access patterns (which then justify your storage choice). Only then draw the **high-level diagram**.

Finally, **deep dives** are where you earn the offer: don't try to detail everything. Say "the interesting parts here are how we scale the timeline fan-out and how we keep redirects fast" and go deep on those. Narrate **tradeoffs** out loud — every choice buys something and costs something, and showing you see both sides matters more than any single "right" answer.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  complexityQuestionIds: ["sd-f-framework-order", "sd-f-nonfunctional"],
  prerequisiteModuleIds: [],
};

const estimationModule: Module = {
  id: "m-sd-estimation",
  stageId: S,
  title: "Back-of-the-Envelope Estimation",
  kind: "lesson",
  summary:
    "Sizing a system with quick math — QPS, storage, and bandwidth — plus the latency numbers every engineer should know.",
  lessonSections: [
    {
      heading: "The numbers to memorize",
      body: `Estimation isn't about precision — it's about being right within an order of magnitude, fast. Start from a few anchors:

- **Time:** 1 day ≈ **86,400 s** (round to ~100k). So **1M/day ≈ 12/s**, **1B/day ≈ 12,000/s**.
- **Powers of two → bytes:** 2¹⁰ = 1 KB, 2²⁰ = 1 MB, 2³⁰ = 1 GB, 2⁴⁰ = 1 TB.
- **Latency ballpark:** memory read ~100 ns, SSD random read ~100 µs, network round trip within a datacenter ~0.5 ms, disk seek ~10 ms, cross-continent round trip ~100 ms.

The gap between memory (ns), SSD (µs), and network/disk (ms) is what motivates caching and keeping hot data close.`,
    },
    {
      heading: "A worked estimate",
      body: `Say we're designing a photo service: **500M users**, each uploads **2 photos/week**, average photo **1.5 MB**.

**Write QPS**
\`\`\`text
uploads/day = 500M users * 2/week / 7 ≈ 143M/day
avg writes/s = 143M / 86,400 ≈ 1,650/s
peak (×3)   ≈ 5,000 writes/s
\`\`\`

**Storage per year**
\`\`\`text
photos/year = 143M/day * 365 ≈ 52B photos
bytes/year  = 52B * 1.5 MB ≈ 78 PB/year
\`\`\`

**Read bandwidth** (if reads are 10× writes and each serves a 1.5 MB photo)
\`\`\`text
read QPS ≈ 16,500/s  →  16,500 * 1.5 MB ≈ 25 GB/s egress
\`\`\`

Those three numbers immediately tell you: object storage (not a relational blob column), a CDN for read bandwidth, and sharded metadata.`,
    },
    {
      heading: "Peak vs. average, and sanity checks",
      body: `Always convert an **average** rate to a **peak** rate with a factor (2–10× depending on how bursty the traffic is) — capacity must survive the busy hour, not the daily mean.

Keep the math legible: round aggressively, carry units, and state assumptions ("assume 100:1 read/write"). If a number looks absurd (25 GB/s from a single server), that's the point — it reveals where you need a CDN, cache, or shard. Estimation's job isn't the exact figure; it's **surfacing the bottleneck** that drives the architecture.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  complexityQuestionIds: ["sd-f-estimation-qps", "sd-f-estimation-peak"],
  prerequisiteModuleIds: ["m-sd-framework"],
};

const networkingModule: Module = {
  id: "m-sd-networking",
  stageId: S,
  title: "Networking & Protocols",
  kind: "lesson",
  summary:
    "How bytes actually move: DNS, TCP vs UDP, HTTP, TLS, load balancers, and CDNs — the plumbing under every design.",
  lessonSections: [
    {
      heading: "From URL to bytes",
      body: `When a client hits your service, a chain of infrastructure runs first:

1. **DNS** resolves the hostname to an IP (often to the nearest edge/load balancer via geo/anycast routing). DNS answers are cached with a TTL.
2. **TCP** opens a connection (the three-way handshake). **TLS** then negotiates encryption on top.
3. **HTTP** requests ride the connection. HTTP/2 and HTTP/3 multiplex many requests over one connection to cut round trips.

Each hop adds latency, which is why we cache DNS, reuse connections (keep-alive), and push content to the edge.`,
    },
    {
      heading: "TCP vs. UDP, and where each fits",
      body: `**TCP** is connection-oriented and reliable: it guarantees ordered delivery, retransmits lost packets, and manages flow/congestion control. Use it when correctness matters — web pages, APIs, file transfer.

**UDP** is connectionless and best-effort: no ordering, no retransmission, far less overhead. Use it when **timeliness beats completeness** — live video/voice, gaming, DNS queries — where a late packet is worse than a lost one.

\`\`\`text
Need every byte, in order?      → TCP
Need it *now*, drops tolerable?  → UDP
\`\`\`

Above the transport layer, **HTTP** is the request/response workhorse; **WebSockets** upgrade an HTTP connection to a persistent, bidirectional channel for push (chat, live feeds).`,
    },
    {
      heading: "Load balancers and CDNs",
      body: `A **load balancer** sits in front of a server pool and spreads requests across it (round-robin, least-connections, or hashing), while **health-checking** members so traffic avoids dead nodes. This is what makes horizontal scaling and zero-downtime deploys possible. Load balancing happens at **L4** (fast, by IP/port) or **L7** (smarter, by URL/headers/cookies).

A **CDN** (content delivery network) caches static and cacheable content at edge locations near users. It slashes latency and offloads huge read bandwidth from your origin — essential for images, video, JS/CSS, and anything read far more than it's written. Together, LB + CDN handle the "read-heavy, globally distributed" reality of most large systems.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  complexityQuestionIds: ["sd-f-net-tcp-udp", "sd-f-net-lb"],
  prerequisiteModuleIds: ["m-sd-framework"],
};

const buildingBlocksModule: Module = {
  id: "m-sd-building-blocks",
  stageId: S,
  title: "Core Building Blocks",
  kind: "lesson",
  summary:
    "Caching, databases (SQL vs NoSQL), replication and sharding, and the CAP tradeoff — the components you'll wire together in every design.",
  lessonSections: [
    {
      heading: "Caching",
      body: `A **cache** keeps hot data in fast storage (memory) close to where it's read, absorbing load off slower backing stores. It's the single highest-leverage tool for read-heavy systems.

- **Where:** client, CDN (edge), a shared in-memory tier (Redis/Memcached), or in-process.
- **Write policy:** **write-through** (write cache + DB together — durable, slightly slower) vs **write-back** (write cache, flush later — fast, risk of loss on crash).
- **Eviction:** LRU/LFU/TTL decide what to drop when full.
- **The hard parts:** **invalidation** (keeping the cache consistent with the source) and the **thundering herd** when a hot key expires and every request stampedes the DB.

Cache what's read often and changes rarely; measure your **hit rate**.`,
    },
    {
      heading: "Databases: relational vs. NoSQL",
      body: `**Relational (SQL)** databases give you a fixed schema, **ACID transactions**, joins, and strong consistency — ideal when data is highly relational and correctness is paramount (payments, orders).

**NoSQL** is an umbrella for stores that trade some of that for **horizontal scale** and **flexible schemas**:

- **Key-value** (DynamoDB, Redis) — simple, fast lookups by key.
- **Document** (MongoDB) — nested JSON-like records.
- **Wide-column** (Cassandra) — huge write throughput, tunable consistency.
- **Graph** (Neo4j) — relationship-heavy traversals.

Pick by **access pattern**: design the queries first, then choose the store that serves them cheaply. "SQL until it hurts, then scale out" is a reasonable default.`,
    },
    {
      heading: "Replication, sharding & CAP",
      body: `To scale and survive failure you **replicate** (copies of data across nodes) and **shard** (split data across nodes by a key).

- **Replication** improves read throughput and availability. **Leader–follower** sends writes to a leader and reads to followers (risking stale reads); **multi-leader/leaderless** accept writes anywhere (risking conflicts).
- **Sharding** partitions data (by hash or range) so each node holds a slice. The challenge is a good **shard key** that spreads load without creating hotspots, plus rebalancing as you grow (consistent hashing helps).

The **CAP theorem** frames the core tradeoff: during a **network partition** you must choose **consistency** (reject or stall so no one reads stale data — CP) or **availability** (keep serving, possibly-stale data — AP). Partition tolerance isn't optional in a distributed system, so real designs pick where on the C↔A spectrum each piece of data lives.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  complexityQuestionIds: ["sd-f-cache-write", "sd-f-cap", "sd-f-sql-nosql"],
  prerequisiteModuleIds: ["m-sd-framework"],
};

export const sdFoundationModules: Module[] = [
  frameworkModule,
  estimationModule,
  networkingModule,
  buildingBlocksModule,
];
