import type { Module, QuizQuestion } from "@/types";

const S = "sd-s1";

/*
 * System Design — Foundations, part 2 (Stage sd-s1). Four more lesson modules
 * rounding out the vocabulary: API design, async messaging, consistency &
 * replication, and reliability/observability. Lesson-only (Markdown + tradeoff
 * MCQs), same shape as part 1.
 */

export const sdFoundationMcqs2: QuizQuestion[] = [
  {
    id: "sd-f-idempotent",
    kind: "mcq",
    prompt: "An idempotent API operation is one where:",
    options: [
      "it can only be called once",
      "calling it multiple times has the same effect as calling it once",
      "it never modifies data",
      "it always returns a different result",
    ],
    answerIndex: 1,
    explanation:
      "Idempotency means retries are safe — a duplicate request (from a client retry or network glitch) doesn't double-apply. PUT and DELETE are naturally idempotent; POST usually needs an idempotency key.",
  },
  {
    id: "sd-f-pagination",
    kind: "mcq",
    prompt: "For a large, frequently-changing list, cursor (keyset) pagination is preferred over offset pagination because:",
    options: [
      "it is simpler to implement",
      "it stays correct and efficient as items are inserted/deleted, avoiding skipped/duplicated rows",
      "it allows jumping to arbitrary page numbers",
      "it never needs an index",
    ],
    answerIndex: 1,
    explanation:
      "OFFSET scans and discards rows (slow for deep pages) and shifts when data changes. A cursor anchored to a stable key gives stable, index-friendly paging.",
  },
  {
    id: "sd-f-queue-decouple",
    kind: "mcq",
    prompt: "The primary benefit of putting a message queue between a producer and consumer is:",
    options: [
      "stronger consistency",
      "decoupling and buffering — the producer isn't blocked and load spikes are absorbed",
      "lower storage cost",
      "eliminating the need for a database",
    ],
    answerIndex: 1,
    explanation:
      "A queue lets the producer hand off work and move on; the consumer processes at its own pace, and bursts are smoothed instead of overwhelming downstream services.",
  },
  {
    id: "sd-f-delivery",
    kind: "mcq",
    prompt: "Because exactly-once delivery is hard, most queues offer at-least-once. The consumer should therefore:",
    options: [
      "ignore duplicate messages by crashing",
      "be idempotent so reprocessing a duplicate is harmless",
      "process messages out of order",
      "acknowledge before processing",
    ],
    answerIndex: 1,
    explanation:
      "At-least-once means a message may be redelivered (e.g. after a failed ack). An idempotent consumer — often via a dedupe key — makes that safe.",
  },
  {
    id: "sd-f-eventual",
    kind: "mcq",
    prompt: "Eventual consistency means:",
    options: [
      "reads never return stale data",
      "if writes stop, all replicas converge to the same value given enough time",
      "there is only one copy of the data",
      "writes are rejected during partitions",
    ],
    answerIndex: 1,
    explanation:
      "Replicas may briefly disagree, but absent new writes they converge. It's the AP choice — high availability at the cost of possibly-stale reads.",
  },
  {
    id: "sd-f-quorum",
    kind: "mcq",
    prompt: "In a quorum system with N replicas, strong consistency is guaranteed when:",
    options: [
      "R + W > N (read and write quorums overlap)",
      "R = W = 1",
      "R + W = N",
      "N is even",
    ],
    answerIndex: 0,
    explanation:
      "If the read quorum and write quorum overlap (R + W > N), every read sees at least one replica that has the latest write.",
  },
  {
    id: "sd-f-slo",
    kind: "mcq",
    prompt: "An SLO (service level objective) is:",
    options: [
      "a legal contract with financial penalties",
      "an internal target for a reliability metric, e.g. 99.9% of requests under 300 ms",
      "the maximum number of servers",
      "a type of load balancer",
    ],
    answerIndex: 1,
    explanation:
      "An SLO is the target you hold yourselves to (measured against SLIs). An SLA is the external contract; SLOs are usually stricter to leave headroom.",
  },
  {
    id: "sd-f-redundancy",
    kind: "mcq",
    prompt: "Eliminating single points of failure is achieved primarily through:",
    options: [
      "faster CPUs",
      "redundancy — multiple instances across independent failure domains with automatic failover",
      "a bigger cache",
      "stronger passwords",
    ],
    answerIndex: 1,
    explanation:
      "If any one node/rack/zone can take the system down, it's a SPOF. Redundant instances spread across failure domains, with health checks and failover, keep the system up when one dies.",
  },
];

const apiDesignModule: Module = {
  id: "m-sd-api-design",
  stageId: S,
  title: "API Design",
  kind: "lesson",
  summary:
    "Designing the contract clients depend on — REST vs RPC, idempotency, pagination, versioning, and rate limiting.",
  lessonSections: [
    {
      heading: "The contract comes early",
      body: `In the design framework, the **API** step forces precision: it names exactly what clients can do, in what shape. A clean contract also reveals your data model and access patterns.

**REST** models resources with HTTP verbs and is the ubiquitous default:

\`\`\`text
POST   /v1/urls            create a short link  -> { code }
GET    /v1/urls/{code}     resolve a link       -> 301 redirect
DELETE /v1/urls/{code}     remove a link
\`\`\`

**gRPC** (binary, HTTP/2, schema-first) shines for low-latency internal service-to-service calls; **GraphQL** lets clients fetch exactly the fields they need, useful for varied front-ends. Pick REST for public simplicity, gRPC for internal performance, GraphQL for flexible client queries.`,
    },
    {
      heading: "Idempotency, pagination, and errors",
      body: `Three details separate a robust API from a fragile one:

- **Idempotency** — retries are inevitable, so a repeated call must not double-charge or double-create. GET/PUT/DELETE are naturally idempotent; make POST safe with an **idempotency key** the server dedupes on.
- **Pagination** — never return an unbounded list. **Cursor/keyset** pagination (anchor on a stable sort key) stays correct and fast as data changes, unlike \`OFFSET\`, which scans-and-skips and shifts under inserts.
- **Errors & status codes** — use HTTP semantics (4xx client, 5xx server), return structured error bodies, and make failures actionable.`,
    },
    {
      heading: "Evolving without breaking",
      body: `APIs are forever, so plan for change. **Versioning** (\`/v1/…\` or headers) lets you ship breaking changes without stranding old clients. Prefer **additive, backward-compatible** changes: add optional fields rather than repurposing existing ones.

Protect the service with **rate limiting** (per client/key) to prevent abuse and preserve fairness, and document limits in response headers. Together — clear resources, idempotent writes, bounded/cursor pagination, versioning, and rate limits — make an API that scales in usage *and* in the number of teams that depend on it.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  complexityQuestionIds: ["sd-f-idempotent", "sd-f-pagination"],
  prerequisiteModuleIds: ["m-sd-framework"],
};

const messagingModule: Module = {
  id: "m-sd-messaging",
  stageId: S,
  title: "Async Processing & Messaging",
  kind: "lesson",
  summary:
    "Queues and pub/sub for decoupling services — delivery guarantees, backpressure, and idempotent consumers.",
  lessonSections: [
    {
      heading: "Why go asynchronous",
      body: `Not every request needs an answer *right now*. Sending a welcome email, transcoding a video, or updating a search index can happen **after** you've told the user "got it." Moving that work off the request path makes the user-facing call fast and resilient.

A **message queue** (SQS, RabbitMQ) sits between a **producer** and one or more **consumers**. The producer enqueues a task and returns immediately; consumers pull and process at their own pace. This buys three things:

- **Decoupling** — producer and consumer scale and fail independently.
- **Buffering** — a traffic spike fills the queue instead of crashing downstream.
- **Retries** — a failed job goes back on the queue (or a dead-letter queue) rather than being lost.`,
    },
    {
      heading: "Queues vs. pub/sub, and delivery guarantees",
      body: `A **queue** delivers each message to *one* consumer in a group — good for distributing work. **Pub/sub** (Kafka topics, SNS) fans a message out to *many* independent subscribers — good when several systems react to the same event (order placed → email, analytics, inventory).

**Delivery semantics** matter:

- **At-most-once** — may drop messages (rare).
- **At-least-once** — the common default; a message may be **redelivered**, so consumers must be **idempotent** (dedupe by message id).
- **Exactly-once** — very hard end-to-end; usually approximated with at-least-once + idempotent processing.`,
    },
    {
      heading: "Backpressure and ordering",
      body: `When producers outrun consumers, the queue grows. **Backpressure** strategies keep the system healthy: scale consumers out, shed or throttle load, or let the queue absorb the burst if it's temporary. Watch **queue depth** and **consumer lag** as key signals.

**Ordering** is often only guaranteed within a partition/shard (e.g. per-key in Kafka). If global ordering matters, you pay for it in throughput — so design so that only *related* events need order (per user, per entity), and make consumers tolerant of reordering elsewhere.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  complexityQuestionIds: ["sd-f-queue-decouple", "sd-f-delivery"],
  prerequisiteModuleIds: ["m-sd-framework"],
};

const consistencyModule: Module = {
  id: "m-sd-consistency",
  stageId: S,
  title: "Consistency & Replication",
  kind: "lesson",
  summary:
    "How replicas stay in sync — strong vs eventual consistency, quorums, and the read/write tradeoffs.",
  lessonSections: [
    {
      heading: "A spectrum, not a switch",
      body: `Once data lives on more than one node, "is every copy the same right now?" becomes a real question. Consistency is a **spectrum**:

- **Strong consistency** — every read reflects the latest write. Simple to reason about, but needs coordination that costs latency and availability (the CP corner of CAP).
- **Eventual consistency** — replicas may briefly disagree but **converge** once writes stop. High availability and low latency (the AP corner), at the cost of possibly-stale reads.

Between them sit useful middle grounds like **read-your-writes** (you always see your own updates) and **monotonic reads** (you never see time go backwards).`,
    },
    {
      heading: "Replication topologies",
      body: `**Leader–follower** (primary–replica) sends all writes to a leader that streams them to followers. Reads can hit followers to scale throughput — but a follower may lag, so those reads can be stale. Failover promotes a follower when the leader dies.

**Multi-leader** and **leaderless** (Dynamo-style) accept writes on multiple nodes for higher availability and write scaling, at the cost of **conflict resolution** (last-write-wins, vector clocks, or CRDTs).

Choose per data type: a bank balance wants strong/leader-based; a "likes" counter is fine eventually consistent.`,
    },
    {
      heading: "Quorums",
      body: `Leaderless systems tune consistency with **quorums**. With **N** replicas, a write waits for **W** acks and a read queries **R** replicas. When **R + W > N**, the read and write sets overlap, so every read sees the latest write — strong consistency.

\`\`\`text
N = 3
W = 2, R = 2  ->  R + W = 4 > 3  -> strongly consistent, tolerates 1 node down
W = 1, R = 1  ->  fast, highly available, but reads may be stale
\`\`\`

The knobs let you trade latency and availability against freshness, per operation. That flexibility — picking the guarantee each piece of data actually needs — is the heart of distributed data design.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  complexityQuestionIds: ["sd-f-eventual", "sd-f-quorum"],
  prerequisiteModuleIds: ["m-sd-building-blocks"],
};

const reliabilityModule: Module = {
  id: "m-sd-reliability",
  stageId: S,
  title: "Reliability & Observability",
  kind: "lesson",
  summary:
    "Keeping systems up and knowing when they're not — redundancy, failover, SLAs/SLOs, and the three pillars of observability.",
  lessonSections: [
    {
      heading: "Designing for failure",
      body: `At scale, **failure is normal** — disks die, nodes reboot, networks partition. Reliable systems assume it and degrade gracefully.

- **Eliminate single points of failure** with **redundancy**: run multiple instances across independent **failure domains** (racks, availability zones, regions) with health checks and automatic **failover**.
- **Contain failures** so one bad dependency doesn't cascade: **timeouts**, **retries with backoff + jitter**, **circuit breakers** (stop hammering a sick service), and **bulkheads** (isolate resource pools).
- **Degrade gracefully**: serve stale cache, drop non-essential features, or shed load rather than fall over entirely.`,
    },
    {
      heading: "Measuring reliability",
      body: `You can't promise what you don't measure. The vocabulary:

- **SLI** (indicator) — a measured metric, e.g. the fraction of requests under 300 ms.
- **SLO** (objective) — your internal target for an SLI, e.g. 99.9% under 300 ms over 30 days.
- **SLA** (agreement) — the external, contractual promise (usually looser than the SLO to leave headroom).

Availability is often quoted in "nines": **99.9%** ≈ 43 min/month of downtime, **99.99%** ≈ 4 min/month. Each extra nine costs real engineering — pick the level the product actually needs. An **error budget** (1 − SLO) makes the reliability-vs-velocity tradeoff explicit.`,
    },
    {
      heading: "The three pillars of observability",
      body: `When something breaks at 3 a.m., observability is how you find out *why*:

- **Logs** — discrete, timestamped events; great for details, expensive at volume.
- **Metrics** — cheap numeric time series (QPS, latency percentiles, error rate, queue depth) for dashboards and alerts.
- **Traces** — follow one request across services to locate the slow or failing hop.

Alert on **symptoms users feel** (error rate, latency) rather than every internal blip, and watch p99 latency, not just averages — the tail is where users hurt. Redundancy keeps you up; observability keeps you honest.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  complexityQuestionIds: ["sd-f-slo", "sd-f-redundancy"],
  prerequisiteModuleIds: ["m-sd-framework"],
};

export const sdFoundationModules2: Module[] = [
  apiDesignModule,
  messagingModule,
  consistencyModule,
  reliabilityModule,
];
