import type { CaseStudy, DesignTemplateSection } from "@/types";
import { XP } from "@/lib/constants";

/*
 * System Design — Case Studies (Stage sd-s3). Each is a guided end-to-end design:
 * a walkthrough (prose + decision-point quizzes), a fill-in design template
 * (the six-step framework), a self-assessment rubric, and a model answer revealed
 * after the learner submits their own work.
 */

/** The six-step design template, with per-case guidance for each section. */
function template(g: Record<DesignTemplateSection["id"], string>): DesignTemplateSection[] {
  return [
    { id: "requirements", title: "1. Requirements", guidance: g.requirements },
    { id: "estimation", title: "2. Estimation", guidance: g.estimation },
    { id: "api", title: "3. API Design", guidance: g.api },
    { id: "dataModel", title: "4. Data Model", guidance: g.dataModel },
    { id: "highLevelDesign", title: "5. High-Level Design", guidance: g.highLevelDesign },
    { id: "deepDives", title: "6. Deep Dives", guidance: g.deepDives },
  ];
}

const urlShortener: CaseStudy = {
  id: "cs-url-shortener",
  title: "Design a URL Shortener",
  difficulty: "easy",
  summary:
    "A TinyURL-style service: turn long URLs into short codes and redirect. A read-heavy classic that exercises hashing, storage choice, and caching.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Framing the problem",
      body: `A URL shortener does two things: **create** a short code for a long URL, and **redirect** a short code to its long URL. The redirect path is by far the hottest — reads dwarf writes (often 100:1), and redirects must be fast (p99 well under 100 ms) and highly available.

Start by pinning scope: do we need custom aliases? link expiry? analytics? For a first pass, defer those and nail the core create/redirect loop, then layer extras in the deep dives.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-url-code-gen",
        kind: "mcq",
        prompt: "What's the most robust way to generate unique short codes at scale?",
        options: [
          "hash the long URL with MD5 and take the first 7 chars",
          "encode a globally-unique auto-increment id in base62",
          "pick 7 random characters and hope for no collision",
          "use the URL's domain name",
        ],
        answerIndex: 1,
        explanation:
          "Base62-encoding a unique id (from a counter or an id-allocation service) guarantees uniqueness with no collision checks and yields short codes. Hashing risks collisions and needs a dedupe check; pure random needs collision retries.",
      },
    },
    {
      kind: "prose",
      heading: "Storage and the read path",
      body: `The data is a simple mapping \`code → longUrl\` (+ metadata). That's a key-value access pattern, so a KV store or a simple indexed table shards cleanly by code. The redirect is a single point lookup — perfect for a **cache** in front of the store, giving most redirects a memory-speed hit. A **CDN**/edge layer and a load balancer round out the read path.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-url-redirect-code",
        kind: "mcq",
        prompt: "For a permanent short link, which HTTP redirect best balances speed and analytics?",
        options: [
          "301 (permanent) — browsers cache it, so you may miss click analytics",
          "302 (found) — not cached, so every click hits your server (good for analytics)",
          "200 with an HTML meta refresh",
          "404 then retry",
        ],
        answerIndex: 1,
        explanation:
          "302 keeps each click flowing through your service so you can count it; 301 is faster/cheaper because browsers cache it but then you lose per-click visibility. The choice is a real tradeoff — many shorteners use 302 for analytics.",
      },
    },
  ],
  designTemplate: template({
    requirements:
      "List functional (create short URL, redirect, maybe custom alias/expiry/analytics) and non-functional (read-heavy ratio, redirect latency, availability, durability) requirements. Which do you defer?",
    estimation:
      "Estimate writes/day and reads/day (assume a read:write ratio), derive QPS and peak QPS, and the storage growth per year (bytes per record × records/year). How many years of codes must the code length support?",
    api:
      "Define the create and redirect endpoints (methods, inputs, outputs, status codes). How does the redirect respond (301 vs 302)?",
    dataModel:
      "What does a record contain (code, longUrl, createdAt, owner, expiry)? What's the primary key and how do you shard it?",
    highLevelDesign:
      "Draw the request flow for both create and redirect: client → LB → service → cache → store, plus a CDN. Where does the id/code get generated?",
    deepDives:
      "Pick 1–2: unique code generation at scale, cache strategy and hit rate, handling custom aliases and collisions, analytics pipeline, or link expiry/cleanup.",
  }),
  modelAnswer: `**Requirements.** Functional: create a short code for a long URL, redirect a code to its URL; (optional, deferred) custom aliases, expiry, click analytics. Non-functional: extremely read-heavy (~100:1), redirect p99 < 100 ms, high availability (a dead redirect is very visible), durable links.

**Estimation.** Say 100M new URLs/day → ~1,160 writes/s (peak ~3–5k/s). At 100:1 reads → ~116k reads/s. A record ~500 bytes → 100M × 500 B ≈ 50 GB/day ≈ 18 TB/year. Base62 with 7 chars = 62⁷ ≈ 3.5 trillion codes — plenty.

**API.**
\`\`\`text
POST /v1/urls { longUrl, alias? }  -> 201 { code, shortUrl }
GET  /{code}                       -> 302 Location: longUrl   (404 if unknown/expired)
\`\`\`

**Data model.** \`{ code (PK), longUrl, createdAt, ownerId?, expiresAt? }\` in a KV store or indexed table, sharded/partitioned by \`code\`.

**High-level design.** Client → CDN/edge → load balancer → stateless redirect service → **cache** (Redis) → KV store. Create service allocates a unique id (auto-increment or a ranged id-allocator per host to avoid a global bottleneck) and base62-encodes it into the code.

**Deep dives.**
- *Code generation:* base62 of a unique id avoids collisions entirely. Hand each app server a block of ids (e.g. from Zookeeper/DB ranges) so id allocation isn't a single point of contention.
- *Caching:* the redirect lookup is read-mostly and immutable, so cache aggressively with a high TTL; hit rate should be very high, so the store mostly serves cache misses and writes.
- *Analytics:* use 302 so each click reaches you, then fire an async event to a queue → stream processor → analytics store, keeping the redirect path fast.
- *Expiry:* store \`expiresAt\` and lazily treat expired codes as 404, with a background job reclaiming them.`,
  rubric: [
    { id: "req", name: "Requirements & scope", description: "Separated functional vs non-functional; identified read-heavy nature and deferred extras.", maxScore: 4 },
    { id: "est", name: "Estimation", description: "Reasonable QPS (peak) and storage numbers with stated assumptions.", maxScore: 4 },
    { id: "codegen", name: "Code generation", description: "Chose a collision-safe scheme (e.g. base62 of a unique id) and justified it.", maxScore: 4 },
    { id: "readpath", name: "Read path & caching", description: "Cache + CDN + LB to make redirects fast and available.", maxScore: 4 },
    { id: "tradeoffs", name: "Tradeoffs", description: "Discussed at least one real tradeoff (301 vs 302, hashing vs counter, etc.).", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const newsFeed: CaseStudy = {
  id: "cs-news-feed",
  title: "Design a News Feed",
  difficulty: "medium",
  summary:
    "A social home timeline (Twitter/Facebook-style): show recent posts from the people you follow. The crux is fan-out — push vs pull — and taming celebrity accounts.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "The core tension: fan-out",
      body: `A feed shows posts from everyone you follow, newest first. The central design question is **when to do the work**:

- **Fan-out on write (push):** when a user posts, copy the post id into each follower's precomputed feed. Reads are trivially fast (just read your feed), but a post by someone with millions of followers triggers millions of writes.
- **Fan-out on read (pull):** store posts once; when a user opens the app, gather recent posts from everyone they follow and merge them. Writes are cheap, but reads are expensive and slow for users following many people.

Most real systems use a **hybrid**: push for normal users, pull for celebrities.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-feed-celebrity",
        kind: "mcq",
        prompt: "Why do pure fan-out-on-write systems struggle with celebrity accounts?",
        options: [
          "celebrities post too rarely to cache",
          "a single post fans out to millions of follower feeds — a write storm and huge write amplification",
          "their posts are larger in bytes",
          "followers can't be indexed",
        ],
        answerIndex: 1,
        explanation:
          "One celebrity post must be written into millions of feeds, causing a massive write burst and amplification. The fix: don't fan out celebrity posts — pull those at read time and merge them into the follower's feed.",
      },
    },
    {
      kind: "prose",
      heading: "Ranking and delivery",
      body: `Beyond ordering by time, feeds often **rank** posts (engagement, recency, affinity). Keep ranking off the hot path where possible: precompute candidate feeds, then apply a lightweight scoring pass at read time. A cache holds each user's materialized feed; posts and media live in their own stores (media behind a CDN). A write goes: create post → enqueue a fan-out job → workers append to follower feeds (for non-celebrities).`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: post, view home timeline, follow/unfollow. Non-functional: feed load latency, freshness (how stale is OK?), scale (users, posts/day, avg followers), availability. What do you defer (DMs, notifications, media processing)?",
    estimation:
      "Estimate daily active users, posts/day, average follows, and read QPS for feed opens. Which of push/pull does the read QPS favor?",
    api:
      "Define endpoints: createPost, getFeed (with pagination — cursor!), follow/unfollow. What does getFeed return and how is it paged?",
    dataModel:
      "Model users, follows (the social graph), posts, and per-user feed lists. Where do feeds live (a cache/KV of post ids)?",
    highLevelDesign:
      "Show the write path (post → fan-out workers via a queue → follower feeds) and the read path (feed service → feed cache → hydrate post/media). Where's the celebrity special-case?",
    deepDives:
      "Pick 1–2: push vs pull vs hybrid fan-out, handling celebrities/hot keys, feed ranking, pagination correctness under new posts, or media storage/CDN.",
  }),
  modelAnswer: `**Requirements.** Functional: create a post, view a home timeline of followed users, follow/unfollow. Non-functional: feed opens are the hot read (fast, p99 low), slight staleness is acceptable (eventually consistent), massive scale (100M+ DAU), high availability. Defer DMs, notifications, and media transcoding.

**Estimation.** 100M DAU, each opens the feed ~10×/day → ~1B feed reads/day ≈ 12k reads/s (peak higher). Posts ~ tens of millions/day → hundreds of writes/s, but fan-out multiplies writes by average follower count.

**API.**
\`\`\`text
POST /v1/posts { text, mediaIds? }        -> 201 { postId }
GET  /v1/feed?cursor=...&limit=20          -> { items:[...], nextCursor }
POST /v1/follow { targetUserId }
\`\`\`
Feed uses **cursor pagination** so new posts don't shift pages.

**Data model.** \`users\`, \`follows(followerId, followeeId)\` (the graph), \`posts(postId, authorId, text, createdAt, mediaIds)\`, and a per-user **feed** = a capped list of recent post ids in a cache/KV.

**High-level design.**
- *Write path:* create post → persist → enqueue a **fan-out** job → workers append the post id to each follower's feed list (for normal users). Media is uploaded to object storage and served via CDN.
- *Read path:* feed service reads the user's precomputed feed ids from cache, **hydrates** them with post + author + media, applies a light ranking pass, and returns a page.

**Deep dives.**
- *Hybrid fan-out:* push for typical users (fast reads); for **celebrities** (follower count over a threshold) skip fan-out and **pull** their recent posts at read time, merging into the feed — avoids the write storm.
- *Ranking:* precompute candidates, score at read time by recency × affinity × engagement; keep it cheap.
- *Consistency:* feeds are eventually consistent — a brief delay before a post appears is fine and buys huge scalability.
- *Hot keys/pagination:* cache hot feeds; use stable cursors (e.g. \`(createdAt, postId)\`) so inserts don't duplicate or skip items.`,
  rubric: [
    { id: "req", name: "Requirements & scale", description: "Captured the read-heavy feed workload, acceptable staleness, and scale drivers.", maxScore: 4 },
    { id: "fanout", name: "Fan-out strategy", description: "Explained push vs pull and proposed a hybrid with a clear rationale.", maxScore: 4 },
    { id: "celebrity", name: "Celebrity / hot keys", description: "Handled the high-follower special case explicitly.", maxScore: 4 },
    { id: "api", name: "API & pagination", description: "Sensible endpoints with cursor-based feed pagination.", maxScore: 4 },
    { id: "tradeoffs", name: "Tradeoffs & consistency", description: "Acknowledged eventual consistency and other real tradeoffs.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const pastebin: CaseStudy = {
  id: "cs-pastebin",
  title: "Design a Pastebin",
  difficulty: "easy",
  summary:
    "Store and share text snippets via a short link, with optional expiry. Like a URL shortener, but the payload is the content itself — so object storage and expiry take center stage.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Snippets, not just links",
      body: `Pastebin lets a user paste text, get a short URL, and share it; anyone with the link can read it. It resembles a URL shortener, but now **you store the content**, which can be large (KBs to a few MB). That shifts the design: metadata is small and relational-ish, but the paste body belongs in **object storage** (or a blob store), not inline in your database.

Reads dominate (a paste is written once, read many times), and many pastes should **expire** — after a time window or a number of views.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-pastebin-storage",
        kind: "mcq",
        prompt: "Where should the (potentially large) paste body live?",
        options: [
          "inline in a relational row alongside the metadata",
          "in object/blob storage, with only a pointer + metadata in the database",
          "only in the cache",
          "in the URL itself",
        ],
        answerIndex: 1,
        explanation:
          "Large blobs bloat a relational DB and hurt its cache/IO. Keep small metadata (id, key, createdAt, expiry) in the DB and put the body in object storage (served via CDN), referenced by key.",
      },
    },
    {
      kind: "prose",
      heading: "Expiry and cleanup",
      body: `Expiry can be **time-based** (\`expiresAt\`) or **view-based** (burn after N reads). Enforce it lazily on read (treat expired pastes as 404) and reclaim storage with a background job or the object store's native **TTL/lifecycle** policy. As with the shortener, generate keys by base62-encoding a unique id to avoid collisions, cache hot pastes, and front reads with a CDN.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: create a paste (text + optional expiry/visibility), read by key, maybe delete. Non-functional: read-heavy, size limits per paste, expiry, availability. What's the max paste size you support?",
    estimation:
      "Estimate pastes/day, average paste size, read:write ratio, and resulting storage growth/year and read bandwidth. Does the size push you to object storage + CDN?",
    api:
      "Define create/read/delete endpoints and what create returns. How is expiry expressed?",
    dataModel:
      "Split metadata (key, blobRef, createdAt, expiresAt, sizeBytes) from the body (object storage). What's the primary key?",
    highLevelDesign:
      "Show create (write blob to object storage, write metadata, return key) and read (metadata lookup → fetch blob, via cache/CDN). Where does key generation happen?",
    deepDives:
      "Pick 1–2: key generation, expiry enforcement + cleanup (TTL/lifecycle), large-payload handling, caching/CDN, or abuse/size limits.",
  }),
  modelAnswer: `**Requirements.** Functional: create a paste (text, optional expiry, optional private flag), read by key, optional delete. Non-functional: read-heavy, per-paste size cap (say 10 MB), reliable expiry, high availability.

**Estimation.** ~10M pastes/day, avg 10 KB → ~1.2k writes/s, ~100 GB/day of new content ≈ 36 TB/year. At 10:1 reads → ~120k reads/s served largely from cache/CDN.

**API.**
\`\`\`text
POST /v1/pastes { content, expiresIn?, private? }  -> 201 { key, url }
GET  /v1/pastes/{key}                              -> 200 content  (404 if missing/expired)
DELETE /v1/pastes/{key}
\`\`\`

**Data model.** Metadata row \`{ key (PK), blobRef, sizeBytes, createdAt, expiresAt, private }\` in a KV/relational store; the body in **object storage** under \`blobRef\`.

**High-level design.** Create: app validates size → writes the body to object storage → writes metadata (key = base62 of a unique id) → returns the key. Read: metadata lookup (cache) → if not expired, fetch the body (CDN/object storage) and return. A load balancer fronts stateless app servers.

**Deep dives.**
- *Key generation:* base62 of a unique id — collision-free, short.
- *Expiry:* store \`expiresAt\`; treat expired as 404 on read; let the object store's **lifecycle policy** (or a sweeper job) delete bodies; a periodic job prunes metadata.
- *Large payloads:* enforce a size cap, stream uploads/downloads, and never inline bodies in the DB.
- *Caching:* pastes are immutable, so cache aggressively and serve via CDN; hit rate is high.`,
  rubric: [
    { id: "req", name: "Requirements & scope", description: "Functional/non-functional; recognized read-heavy + size/expiry needs.", maxScore: 4 },
    { id: "storage", name: "Storage split", description: "Body in object storage, metadata in DB — not inline blobs.", maxScore: 4 },
    { id: "expiry", name: "Expiry & cleanup", description: "Lazy 404 on read + background/lifecycle reclamation.", maxScore: 4 },
    { id: "readpath", name: "Read path", description: "Cache + CDN for fast, cheap reads of immutable content.", maxScore: 4 },
    { id: "tradeoffs", name: "Tradeoffs", description: "Discussed a real tradeoff (key gen, size limits, private pastes).", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const webCrawler: CaseStudy = {
  id: "cs-web-crawler",
  title: "Design a Web Crawler",
  difficulty: "medium",
  summary:
    "Crawl the web at scale: fetch pages, extract links, and keep going — without revisiting, overloading hosts, or getting stuck. A pipeline + frontier problem.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "A BFS over the web",
      body: `A crawler starts from seed URLs and repeatedly: pull a URL from a **frontier** queue, fetch the page, parse out links, and enqueue new ones — essentially a distributed **BFS** over the web graph. At scale the hard parts are: **not revisiting** the same URL, being **polite** to each host (rate-limit per domain, respect \`robots.txt\`), and staying robust to traps (infinite calendars, redirect loops).`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-crawler-dedupe",
        kind: "mcq",
        prompt: "To avoid re-crawling billions of URLs cheaply, a good first-line filter is:",
        options: [
          "a relational table with a unique index on the full URL",
          "a Bloom filter of seen URL hashes (with a backing store for confirmation)",
          "keeping all seen URLs in memory in a Set",
          "no dedupe — just crawl everything",
        ],
        answerIndex: 1,
        explanation:
          "A Bloom filter tests 'seen?' in tiny memory with no false negatives; a 'maybe seen' can be confirmed against a store. An in-memory Set won't fit billions of URLs, and a DB lookup per URL is too slow as the sole filter.",
      },
    },
    {
      kind: "prose",
      heading: "Politeness and the frontier",
      body: `The **frontier** isn't one FIFO queue — it's partitioned so you can enforce **per-host politeness** (a bounded fetch rate per domain) while keeping overall throughput high, and apply **priority** (crawl important/fresh pages sooner). Fetched content goes to storage (and on to indexing); a **DNS cache** avoids resolving the same host repeatedly. Workers are stateless and scale horizontally, coordinating through the shared frontier and seen-set.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: fetch pages from seeds, extract + enqueue links, store content. Non-functional: scale (pages/sec, total pages), politeness (respect robots.txt, per-host rate), freshness (re-crawl cadence), robustness to traps. Scope: HTML only? images?",
    estimation:
      "Estimate pages to crawl, target crawl rate (pages/sec), average page size → fetch bandwidth and storage. How big is the seen-set and does it fit in memory?",
    api:
      "This is a pipeline more than a public API. Define the internal interfaces: frontier.enqueue/dequeue, fetcher, parser, dedupe.seen(url). What does a work item contain?",
    dataModel:
      "Model the URL frontier (priority + per-host queues), the seen-set (Bloom filter + store), and content storage (raw pages, metadata).",
    highLevelDesign:
      "Show the loop: frontier → fetcher (DNS cache, robots check, per-host limiter) → parser → dedupe → enqueue new URLs; fetched content → storage → indexer. Where do workers scale?",
    deepDives:
      "Pick 1–2: URL dedupe at scale (Bloom filter), per-host politeness/priority frontier, trap/loop detection, freshness/re-crawl scheduling, or distributed coordination.",
  }),
  modelAnswer: `**Requirements.** Functional: start from seeds, fetch pages, extract links, store content for indexing. Non-functional: high throughput (thousands of pages/sec), **politeness** (respect \`robots.txt\`, cap per-host rate), avoid duplicates, tolerate traps/failures, support periodic **re-crawl** for freshness. Scope to HTML pages first.

**Estimation.** Crawl 1B pages/month ≈ 400 pages/s (peak higher); avg page 100 KB → ~40 MB/s fetch bandwidth and ~100 TB of raw content/month. A seen-set of 1B URL hashes fits in a few GB as a Bloom filter (vs. impossible as an in-memory Set).

**Interfaces (pipeline).**
\`\`\`text
frontier.enqueue(url, priority)   frontier.dequeueForHost()
fetcher.fetch(url) -> {status, body, headers}
parser.extractLinks(body) -> url[]
dedupe.seen(url) -> bool           dedupe.markSeen(url)
\`\`\`

**Data model.** Frontier = per-host queues with priority (so politeness + importance both hold). Seen-set = Bloom filter in front of a durable store of URL hashes. Content store = object storage for raw pages + a metadata index.

**High-level design.** Stateless **worker** loop: dequeue a URL (respecting per-host rate), check \`robots.txt\` (cached), resolve host via a **DNS cache**, fetch, store the body, parse links, run each through the dedupe filter, and enqueue unseen ones with a priority. A scheduler re-enqueues pages for **re-crawl** based on change frequency.

**Deep dives.**
- *Dedupe:* Bloom filter for the cheap 'seen?' test; confirm 'maybe' hits against the store; canonicalize URLs (strip fragments, sort query params) before hashing.
- *Politeness:* partition the frontier by host and rate-limit each; honor \`robots.txt\` and crawl-delay.
- *Traps:* cap depth/URL length, detect redirect loops, and de-prioritize low-value paths.
- *Freshness:* schedule re-crawls by observed change rate (news often, archives rarely).`,
  rubric: [
    { id: "req", name: "Requirements & scale", description: "Captured throughput, politeness, dedupe, and freshness goals.", maxScore: 4 },
    { id: "dedupe", name: "URL dedupe", description: "Scalable seen-set (Bloom filter + store), URL canonicalization.", maxScore: 4 },
    { id: "frontier", name: "Frontier & politeness", description: "Per-host queues with rate limiting and priority; robots.txt.", maxScore: 4 },
    { id: "pipeline", name: "Pipeline & scaling", description: "Clear fetch→parse→store→enqueue loop with stateless workers.", maxScore: 4 },
    { id: "tradeoffs", name: "Robustness/tradeoffs", description: "Handled traps/loops or freshness re-crawl tradeoffs.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const chatSystem: CaseStudy = {
  id: "cs-chat-system",
  title: "Design a Chat System",
  difficulty: "medium",
  summary:
    "A WhatsApp/Messenger-style messenger: 1:1 and group messaging, delivery/read receipts, presence, and offline delivery. The crux is real-time push and durable message ordering.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Real-time delivery",
      body: `A chat system must deliver messages to online recipients **instantly** and to offline ones **when they reconnect**. That means a persistent connection — typically a **WebSocket** — between each client and a stateful gateway, plus a way to route a message from the sender's gateway to the recipient's. Because a user can be offline, every message must first be **durably stored**, then pushed.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-chat-transport",
        kind: "mcq",
        prompt: "What's the right transport for pushing messages to online clients?",
        options: [
          "HTTP polling every few seconds",
          "a persistent WebSocket connection per client to a gateway",
          "email",
          "a new HTTP request per message from server to client",
        ],
        answerIndex: 1,
        explanation:
          "A persistent WebSocket lets the server push instantly with low overhead. Polling wastes requests and adds latency; servers can't open HTTP connections to clients behind NAT.",
      },
    },
    {
      kind: "prose",
      heading: "Ordering, storage, and fan-out",
      body: `Messages within a conversation need a **stable order** — assign each a monotonic sequence number (or timestamp) per conversation so clients can sort and detect gaps. Store messages in a write-heavy store (e.g. a wide-column DB partitioned by conversation id). For **groups**, the sender writes once and the system fans the message out to each member's delivery path; **receipts** (delivered/read) and **presence** are separate lightweight event streams. Offline users get messages on reconnect by reading everything after their last-acked sequence.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: 1:1 + group messaging, delivery/read receipts, presence (online/last-seen), offline delivery, message history. Non-functional: low delivery latency, ordering within a conversation, durability, scale (DAU, messages/day). Defer: media, calls, E2E encryption?",
    estimation:
      "Estimate DAU, messages/day → write QPS, concurrent connections (each online user holds a socket), and message storage/year. What dominates — connections or storage?",
    api:
      "Define connect (WebSocket), sendMessage, fetchHistory (cursor), receipts, presence. What does a message payload contain (conversationId, seq, senderId, body, ts)?",
    dataModel:
      "Model conversations, membership, messages (partition by conversationId, ordered by seq), per-user last-read/last-delivered pointers, and presence.",
    highLevelDesign:
      "Show client ⇄ WebSocket gateway; sender's gateway persists the message + routes to recipients' gateways (via a pub/sub or routing service); offline path reads on reconnect. Where's presence tracked?",
    deepDives:
      "Pick 1–2: connection routing (which gateway holds a user), per-conversation ordering, group fan-out, receipts/presence at scale, or offline sync.",
  }),
  modelAnswer: `**Requirements.** Functional: 1:1 and group messages, delivery + read receipts, presence/last-seen, offline delivery, scrollable history. Non-functional: low end-to-end latency, **per-conversation ordering**, durable messages, huge concurrent connection count. Defer media/calls and (note but don't fully design) E2E encryption.

**Estimation.** 500M DAU, 40 msgs/user/day → 20B msgs/day ≈ 230k writes/s (peak higher). Tens of millions of **concurrent WebSocket connections** is the standout constraint — connection capacity, not storage, drives the gateway fleet. Storage: 20B × ~200 B ≈ 4 TB/day.

**API.**
\`\`\`text
WS  /connect                         (auth'd persistent socket)
    -> sendMessage { conversationId, clientMsgId, body }
    <- message { conversationId, seq, senderId, body, ts }
    <- receipt { conversationId, seq, userId, type: delivered|read }
GET /v1/conversations/{id}/messages?cursor=seq
\`\`\`

**Data model.** \`conversations\`, \`membership(conversationId, userId)\`, \`messages\` partitioned by \`conversationId\` and ordered by a per-conversation monotonic \`seq\`; per-user \`(conversationId → lastDeliveredSeq, lastReadSeq)\`; a presence store (TTL heartbeats).

**High-level design.** Each client holds a **WebSocket** to a stateful **gateway**. A message: sender's gateway persists it (assigning \`seq\`), then routes to each recipient — look up which gateway holds each online recipient (via a **routing/registry** service or pub/sub) and push; offline recipients simply fetch messages after their \`lastDeliveredSeq\` on reconnect. Receipts and presence flow as separate lightweight events.

**Deep dives.**
- *Connection routing:* a registry maps userId → gateway; publish messages to the owning gateway (or broadcast via pub/sub keyed by user).
- *Ordering:* assign \`seq\` per conversation at persist time; clients sort by \`seq\` and request gaps.
- *Groups:* store once, fan out to each member's delivery path (bounded group sizes keep this cheap; huge broadcast groups may pull like a feed).
- *Offline:* durable store + per-user last-acked pointer = reliable catch-up.`,
  rubric: [
    { id: "req", name: "Requirements & scale", description: "Captured real-time + offline needs and the concurrent-connection constraint.", maxScore: 4 },
    { id: "transport", name: "Real-time transport", description: "Persistent WebSocket gateways with a routing mechanism.", maxScore: 4 },
    { id: "ordering", name: "Ordering & durability", description: "Per-conversation seq + durable message store.", maxScore: 4 },
    { id: "offline", name: "Offline & receipts", description: "Reconnect catch-up via last-acked pointer; receipts/presence handled.", maxScore: 4 },
    { id: "tradeoffs", name: "Tradeoffs", description: "Discussed group fan-out, routing, or consistency tradeoffs.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const typeahead: CaseStudy = {
  id: "cs-typeahead",
  title: "Design Search Autocomplete (Typeahead)",
  difficulty: "medium",
  summary:
    "Suggest completions as the user types, in a few milliseconds, ranked by popularity. A read-optimized problem built on precomputed tries and aggressive caching.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Suggestions on every keystroke",
      body: `Typeahead returns the top few suggestions for a prefix, updating on **every keystroke** — so latency must be tiny (tens of ms) and the QPS is enormous (many requests per query). It's overwhelmingly **read-heavy**; the suggestions themselves change slowly. That split — hot reads, slow-changing data — means you precompute and cache aggressively rather than compute per request.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-typeahead-topk",
        kind: "mcq",
        prompt: "How do you serve the top-k suggestions for a prefix in ~O(1) at query time?",
        options: [
          "scan all phrases and filter by prefix per request",
          "store, at each trie node, its precomputed top-k completions (updated offline)",
          "run a SQL LIKE 'prefix%' query each time",
          "sort the entire dictionary on every keystroke",
        ],
        answerIndex: 1,
        explanation:
          "Precompute and cache the top-k completions at each prefix/trie node offline; a query is then a direct lookup. Scanning or LIKE queries per keystroke are far too slow at typeahead QPS.",
      },
    },
    {
      kind: "prose",
      heading: "Building and updating the index",
      body: `Popularity comes from **aggregating query logs** (how often each phrase is searched) in an offline pipeline, then materializing a **prefix → top-k** structure (a trie whose nodes carry their best completions, or a precomputed map). That artifact is pushed to caches/edge servers and refreshed periodically (hourly/daily) — suggestions don't need to be real-time fresh. Personalization and typo-tolerance are deep-dive extensions.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: return top-k suggestions for a prefix, ranked by popularity; update suggestions over time. Non-functional: very low latency per keystroke, huge read QPS, freshness (how stale can suggestions be?). Defer: personalization, typo tolerance, multi-language.",
    estimation:
      "Estimate queries/day and the keystroke multiplier → suggestion QPS. Size the prefix index (distinct phrases × avg length). What's cacheable?",
    api:
      "Define the suggest endpoint (prefix, limit) → ranked list. How do you debounce/limit client calls?",
    dataModel:
      "Model the prefix index: a trie with per-node top-k, or a map prefix→top-k. Where's the raw query-frequency data that feeds it?",
    highLevelDesign:
      "Show the query path (client → edge/cache → suggestion service → precomputed index) and the offline build path (query logs → aggregation → build top-k index → publish).",
    deepDives:
      "Pick 1–2: precomputing top-k at each node, index build/refresh pipeline, caching/edge, typo tolerance, or personalization.",
  }),
  modelAnswer: `**Requirements.** Functional: given a prefix, return the top-k most-popular completions; reflect changing popularity over time. Non-functional: p99 latency in the low tens of ms, extreme read QPS (keystrokes), suggestions may be **minutes-to-hours stale**. Defer personalization/typo-tolerance.

**Estimation.** 5B searches/day, ~20 keystroke-suggestions each → ~100B suggestion requests/day ≈ 1.2M QPS (peak higher) — pure read traffic. The index is small enough to cache widely (millions of prefixes × a few completions).

**API.**
\`\`\`text
GET /v1/suggest?prefix=lea&limit=5 -> { suggestions: ["learn", "league", ...] }
\`\`\`
The client **debounces** keystrokes and caps concurrent calls.

**Data model.** A **trie** whose every node stores its precomputed **top-k** completions (or an equivalent \`prefix → top-k\` map). Backed by an offline table of \`phrase → frequency\` derived from query logs.

**High-level design.**
- *Query path:* client → CDN/edge cache → suggestion service → in-memory precomputed index. Most requests never leave the cache.
- *Build path:* query logs → stream/batch **aggregation** of phrase frequencies → build the top-k-per-prefix index → publish to the serving tier every hour (or faster).

**Deep dives.**
- *Top-k at nodes:* compute offline by rolling child frequencies up the trie; store k completions per node so a query is a single lookup.
- *Freshness:* rebuild/refresh periodically; typeahead tolerates staleness, which is what makes the precompute strategy viable.
- *Typo tolerance/personalization:* add edit-distance fallback and per-user reranking as extensions.`,
  rubric: [
    { id: "req", name: "Requirements & scale", description: "Recognized read-heavy, low-latency, staleness-tolerant nature.", maxScore: 4 },
    { id: "index", name: "Precomputed index", description: "Trie/map with per-prefix top-k, computed offline.", maxScore: 4 },
    { id: "build", name: "Build/refresh pipeline", description: "Query-log aggregation → index build → periodic publish.", maxScore: 4 },
    { id: "serving", name: "Serving & caching", description: "Edge/cache + in-memory index for O(1) lookups.", maxScore: 4 },
    { id: "tradeoffs", name: "Tradeoffs", description: "Traded freshness for speed; noted personalization/typos.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const notificationService: CaseStudy = {
  id: "cs-notification-service",
  title: "Design a Notification Service",
  difficulty: "medium",
  summary:
    "Fan out notifications across channels (push, SMS, email) reliably and at scale, with user preferences, rate limits, and retries. A queue-and-worker pipeline problem.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "One event, many channels",
      body: `A notification service takes an event ("your order shipped") and delivers it to a user across the right **channels** — mobile push (APNs/FCM), SMS, email — honoring their **preferences** and quiet hours. It sits behind an async pipeline: producers enqueue notification requests; workers render templates and hand off to channel-specific gateways, retrying on failure. Third-party gateways are slow and flaky, so decoupling with a **queue** is essential.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-notif-idempotent",
        kind: "mcq",
        prompt: "Delivery gateways and queues are at-least-once, so to avoid spamming users with duplicates you should:",
        options: [
          "send as fast as possible and ignore duplicates",
          "deduplicate on an idempotency key per (user, event) before dispatching",
          "use a single worker to serialize everything",
          "email only, never push",
        ],
        answerIndex: 1,
        explanation:
          "At-least-once delivery means retries/redeliveries happen. A dedupe/idempotency key per (user, event, channel) — checked before dispatch — prevents sending the same notification twice.",
      },
    },
    {
      kind: "prose",
      heading: "Preferences, rate limits, and reliability",
      body: `Before sending, the pipeline checks **user preferences** (opted-in channels, quiet hours, per-category mute) and **rate limits** (don't blast a user). Failed sends go through **retries with backoff** and land in a **dead-letter queue** for inspection. High-priority notifications (2FA codes) get their own fast lane. Delivery status is tracked so you can report and retry.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: accept notification requests, respect user prefs + quiet hours, deliver across push/SMS/email, retry failures, track status. Non-functional: high throughput, reliable (no lost, minimal dup), prioritization. Defer: rich templating UI.",
    estimation:
      "Estimate notifications/day → send QPS, split by channel, and the fan-out from a single broadcast event. What's the peak (e.g. a marketing blast)?",
    api:
      "Define the enqueue API (userId/segment, template, data, priority) and a status query. How are bulk/broadcast sends expressed?",
    dataModel:
      "Model user channel prefs, device tokens, templates, notification records (status), and a dedupe key. Where's the queue?",
    highLevelDesign:
      "Show: producer → ingestion API → queue → workers (preference + rate-limit + dedupe checks → render → channel gateway) → retry/DLQ; status store. Where's prioritization?",
    deepDives:
      "Pick 1–2: idempotency/dedupe, retries + DLQ, preference/quiet-hours enforcement, rate limiting, prioritized queues, or handling flaky third-party gateways.",
  }),
  modelAnswer: `**Requirements.** Functional: submit notification requests (single or broadcast), respect per-user channel preferences and quiet hours, deliver via push/SMS/email, retry failures, expose delivery status. Non-functional: high throughput with bursty peaks, **no lost** notifications and **minimal duplicates**, priority lanes. Defer the template-authoring UI.

**Estimation.** 1B notifications/day ≈ 12k/s average, but a marketing blast can spike to millions in minutes — the queue must absorb bursts. Split across channels (push >> email > SMS).

**API.**
\`\`\`text
POST /v1/notify { userId|segment, templateId, data, priority, dedupeKey } -> 202 { requestId }
GET  /v1/notify/{requestId}  -> { status per channel }
\`\`\`

**Data model.** \`user_prefs(userId, channel, enabled, quietHours)\`, \`device_tokens\`, \`templates\`, \`notifications(id, userId, channel, status, dedupeKey)\`. A durable **queue** (Kafka/SQS) buffers work.

**High-level design.** Ingestion API validates and enqueues. **Workers** pull from the queue and, per notification: check **dedupe key**, apply **preferences + quiet hours**, apply **rate limits**, render the template, and dispatch to the channel **gateway** (APNs/FCM/SMS/email provider). Failures retry with backoff; exhausted ones go to a **dead-letter queue**. A separate **high-priority queue** carries 2FA/critical messages. Status is written to the notifications store.

**Deep dives.**
- *Idempotency:* dedupe on \`(userId, dedupeKey, channel)\` before dispatch so redeliveries don't double-send.
- *Reliability:* at-least-once queue + retries + DLQ; idempotent dispatch makes this safe.
- *Flaky gateways:* circuit-break a failing provider, retry with backoff, and fail over where possible.
- *Prioritization:* dedicated queues/worker pools so a marketing blast can't delay 2FA codes.`,
  rubric: [
    { id: "req", name: "Requirements", description: "Multi-channel, preferences, reliability, prioritization captured.", maxScore: 4 },
    { id: "pipeline", name: "Queue & workers", description: "Async queue + workers decoupling flaky gateways; burst absorption.", maxScore: 4 },
    { id: "dedupe", name: "Idempotency", description: "Dedupe key prevents duplicate sends under at-least-once.", maxScore: 4 },
    { id: "reliability", name: "Retries & DLQ", description: "Backoff retries + dead-letter queue for failures.", maxScore: 4 },
    { id: "prefs", name: "Prefs & prioritization", description: "Preference/quiet-hours + rate limits + priority lanes.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const videoStreaming: CaseStudy = {
  id: "cs-video-streaming",
  title: "Design a Video Streaming Service",
  difficulty: "hard",
  summary:
    "A YouTube/Netflix-style platform: upload, transcode, and stream video to millions. Dominated by transcoding pipelines, object storage, and CDN delivery with adaptive bitrate.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Two very different paths",
      body: `Video splits cleanly into an **upload/processing path** and a **playback path**. Upload: the raw file lands in object storage, then an async pipeline **transcodes** it into multiple resolutions/bitrates and segments it for streaming. Playback: the overwhelming read traffic is served from a **CDN**, with the player choosing quality dynamically. The two paths scale independently — heavy compute for processing, heavy bandwidth for delivery.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-video-abr",
        kind: "mcq",
        prompt: "Why transcode each video into multiple bitrates and serve it in small segments (HLS/DASH)?",
        options: [
          "to save storage",
          "to enable adaptive bitrate — the player switches quality per segment based on current bandwidth",
          "to make uploads faster",
          "because CDNs require it for caching",
        ],
        answerIndex: 1,
        explanation:
          "Segmenting + multiple bitrates enables adaptive bitrate streaming: the client picks the best quality it can sustain each few seconds, avoiding stalls on slow networks and using full quality on fast ones. It costs more storage, not less.",
      },
    },
    {
      kind: "prose",
      heading: "Delivery at scale",
      body: `Playback bandwidth dwarfs everything, so **CDN** is the core of the read path — segments and thumbnails are cached at the edge near viewers, and the origin (object storage) mostly serves cache fills. Metadata (titles, view counts, recommendations) lives in its own services/stores. Popular content is pushed to edges proactively; long-tail content is pulled on demand.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: upload video, transcode to multiple qualities, stream with adaptive bitrate, browse/search metadata, view counts. Non-functional: massive read bandwidth, durable storage, upload→available latency, global low-latency playback. Defer: recommendations, live streaming.",
    estimation:
      "Estimate uploads/day and average size → ingest + storage growth (with multiple transcoded copies). Estimate concurrent viewers × bitrate → egress bandwidth. Which dominates cost?",
    api:
      "Define upload (initiate/complete, likely chunked/resumable), a playback manifest endpoint, and metadata/search. What does the player fetch?",
    dataModel:
      "Model video metadata, the transcoded renditions/segments (in object storage), and view/stats. Where do manifests live?",
    highLevelDesign:
      "Show upload → object storage → transcoding pipeline (queue + workers) → segmented renditions → CDN; playback → manifest → CDN segments. Separate metadata services.",
    deepDives:
      "Pick 1–2: the transcoding pipeline, adaptive-bitrate segmenting (HLS/DASH), CDN strategy (push popular vs pull long-tail), resumable uploads, or view-count aggregation.",
  }),
  modelAnswer: `**Requirements.** Functional: upload video, transcode into multiple resolutions/bitrates, adaptive-bitrate playback, browse/search, track views. Non-functional: enormous **egress bandwidth**, durable storage, reasonable upload→watchable latency, low global playback latency. Defer recommendations and live.

**Estimation.** Say 500 hrs uploaded/min; each source transcoded into ~5 renditions multiplies storage — petabytes/year, so **object storage** is mandatory. Playback: millions of concurrent viewers × several Mbps = terabits/sec of egress — **CDN dominates** cost and design.

**API.**
\`\`\`text
POST /v1/uploads (resumable/chunked) -> uploadId; complete -> videoId
GET  /v1/videos/{id}/manifest        -> HLS/DASH manifest (rendition + segment URLs)
GET  /v1/videos/{id}                  -> metadata
\`\`\`

**Data model.** \`videos(id, ownerId, title, status, durationetc.)\` in a metadata DB; **renditions/segments** as objects in blob storage; **manifests** generated per video; a stats pipeline for view counts.

**High-level design.**
- *Upload/processing:* resumable upload → raw file in object storage → enqueue a **transcode** job → worker fleet produces multiple bitrates, segments them (HLS/DASH), and writes segments + manifest back to storage; mark the video ready.
- *Playback:* player fetches the **manifest**, then streams **segments from the CDN**; it switches rendition per segment via **adaptive bitrate**. Origin (object storage) serves CDN cache fills.
- Metadata, search, and view counting are separate services.

**Deep dives.**
- *Transcoding:* queue + autoscaled workers; parallelize per-segment; prioritize by popularity.
- *ABR:* segment into a few-second chunks at several bitrates so the client adapts to bandwidth.
- *CDN:* push popular titles to edges proactively; pull long-tail on first request; cache aggressively (segments are immutable).
- *Views:* aggregate asynchronously (stream processor) — exact real-time counts aren't needed.`,
  rubric: [
    { id: "req", name: "Requirements & scale", description: "Separated processing vs delivery; identified bandwidth/storage scale.", maxScore: 4 },
    { id: "transcode", name: "Transcoding pipeline", description: "Async queue + workers producing multiple renditions/segments.", maxScore: 4 },
    { id: "abr", name: "Adaptive bitrate", description: "Segmented multi-bitrate streaming (HLS/DASH) explained.", maxScore: 4 },
    { id: "cdn", name: "CDN delivery", description: "CDN as the core read path; push/pull strategy; object-storage origin.", maxScore: 4 },
    { id: "tradeoffs", name: "Tradeoffs", description: "Storage-for-quality, async views, or upload latency tradeoffs.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const cloudDrive: CaseStudy = {
  id: "cs-cloud-drive",
  title: "Design a Cloud File Storage (Google Drive / Dropbox)",
  difficulty: "hard",
  summary:
    "Sync files across a user's devices with sharing and versioning. The heart is efficient sync: chunking, deduplication, and metadata that tracks every version.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Files, chunks, and metadata",
      body: `A cloud drive stores files and **syncs** them across devices. The trick to efficiency is splitting each file into **chunks**: only changed chunks are uploaded/downloaded, and identical chunks (across versions or users) are stored once (**deduplication**). File contents (chunks) live in object storage; a separate **metadata service** tracks the file tree, versions, chunk lists, and sharing.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-drive-chunking",
        kind: "mcq",
        prompt: "Why split files into content-addressed chunks instead of storing whole files?",
        options: [
          "it makes files smaller",
          "only changed chunks need transfer/storage, and identical chunks dedupe — huge bandwidth/storage savings",
          "object storage can't store large files",
          "it avoids needing metadata",
        ],
        answerIndex: 1,
        explanation:
          "Content-addressed chunks (hash → chunk) mean editing a large file re-uploads only the changed chunks, and duplicate chunks (versions, shared files) are stored once. That's the core of Dropbox-style efficiency.",
      },
    },
    {
      kind: "prose",
      heading: "Sync and conflicts",
      body: `Each client watches for local changes and talks to a **sync/metadata service** that maintains the authoritative file tree and a change log. Clients pull changes since their last cursor (often via a long-poll/notification channel), download missing chunks, and reconcile. **Conflicts** (two devices edit offline) are resolved by versioning — keep both as conflicted copies rather than silently losing data. Sharing adds permission metadata on files/folders.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: upload/download, sync across devices, share with permissions, version history, restore. Non-functional: efficient sync (minimal transfer), durability (never lose files), consistency of the file tree, scale (users, files). Defer: real-time collaborative editing.",
    estimation:
      "Estimate users, files/user, avg file size, and daily changed bytes → upload/download bandwidth and storage (with dedup savings). How big is the metadata vs the content?",
    api:
      "Define upload (chunked), download, list changes since a cursor, share. What does a 'change' contain (path, version, chunk list)?",
    dataModel:
      "Model files/folders, versions, chunk lists (file → ordered chunk hashes), the chunk store (hash → blob), sharing/permissions, and per-device sync cursors.",
    highLevelDesign:
      "Show client → chunker → upload changed chunks to object storage + update metadata service (file tree, versions); other devices poll/notified → fetch changes → download missing chunks. Where's dedup enforced?",
    deepDives:
      "Pick 1–2: chunking + dedup, sync/change-feed + cursors, conflict resolution/versioning, sharing/permissions, or metadata scaling.",
  }),
  modelAnswer: `**Requirements.** Functional: upload/download files, sync across a user's devices, share with permissions, keep version history and allow restore. Non-functional: **efficient sync** (transfer only what changed), strong durability (never lose data), a consistent file tree, large scale. Defer real-time co-editing.

**Estimation.** 100M users × thousands of files; most bytes are unchanged day to day, so **chunk-level dedup** cuts both transfer and storage dramatically. Metadata (tree, versions, chunk lists) is far smaller than content and needs a fast, consistent store.

**API.**
\`\`\`text
POST /v1/chunks/{hash}                 (upload a chunk if not already present)
POST /v1/files { path, version, chunkHashes[] }
GET  /v1/changes?cursor=...            -> { changes[], nextCursor }
POST /v1/share { fileId, userId, role }
\`\`\`

**Data model.** \`files/folders\` tree with \`versions\`; each version = an **ordered list of chunk hashes**; a **chunk store** \`hash → blob\` in object storage (content-addressed → automatic dedup); \`permissions\`; per-device **sync cursors**.

**High-level design.** The client **chunks** a changed file, uploads only chunks not already present (checked by hash), then updates the **metadata service** with a new version. Other devices learn of changes via a **change feed** (long-poll/notification), fetch changes since their cursor, and download only missing chunks. Content in object storage; metadata in a consistent, replicated store.

**Deep dives.**
- *Chunking + dedup:* content-addressed chunks make edits cheap and duplicates free; fixed or content-defined chunk boundaries.
- *Sync:* a monotonic change log + per-device cursor gives reliable, resumable sync; notifications trigger fast pulls.
- *Conflicts:* concurrent offline edits produce versioned **conflicted copies**, never silent loss.
- *Sharing:* permission metadata on files/folders, checked on every access.`,
  rubric: [
    { id: "req", name: "Requirements", description: "Sync efficiency, durability, versioning, sharing captured.", maxScore: 4 },
    { id: "chunk", name: "Chunking & dedup", description: "Content-addressed chunks; transfer/store only what changed.", maxScore: 4 },
    { id: "sync", name: "Sync & change feed", description: "Change log + per-device cursors + notifications for sync.", maxScore: 4 },
    { id: "conflict", name: "Conflicts & versioning", description: "Versioned conflict resolution, no silent data loss.", maxScore: 4 },
    { id: "split", name: "Metadata vs content split", description: "Content in object storage, metadata in a consistent store.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const metricsSystem: CaseStudy = {
  id: "cs-metrics-monitoring",
  title: "Design a Metrics & Monitoring System",
  difficulty: "medium",
  summary:
    "Collect time-series metrics from thousands of hosts, store them efficiently, and power dashboards and alerts. A write-heavy ingestion + time-series storage + query problem.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Time series at scale",
      body: `A monitoring system ingests **metrics** — (metric name, tags, timestamp, value) points — from many sources, stores them as **time series**, and serves dashboards and alert evaluations. It's **write-heavy** (constant streams of points) with bursty reads (dashboard loads, alert checks). The data is append-only and its value decays with age, which shapes both storage (a time-series DB) and retention (downsample old data).`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-metrics-downsample",
        kind: "mcq",
        prompt: "To keep years of metrics affordable, the standard approach is to:",
        options: [
          "store every raw point forever at full resolution",
          "downsample/roll up older data to coarser resolution and expire raw points via retention",
          "delete all data after a week",
          "store metrics in a relational table with a row per point",
        ],
        answerIndex: 1,
        explanation:
          "Recent data is kept at high resolution; older data is rolled up (e.g. 1s → 1m → 1h averages) and raw points expire. This bounds storage while preserving long-term trends.",
      },
    },
    {
      kind: "prose",
      heading: "Ingestion, storage, and alerting",
      body: `Agents push (or a collector scrapes) metrics into an ingestion tier, buffered by a **queue** to absorb bursts, then written to a **time-series database** optimized for high-cardinality appends and range/aggregate queries. A query layer powers dashboards; an **alerting** engine periodically evaluates rules (e.g. "error rate > X for 5m") against recent data and fires notifications. Cardinality (tag combinations) is the classic scaling pitfall.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: ingest metrics (name, tags, ts, value), query ranges/aggregations, dashboards, alerting rules. Non-functional: high write throughput, low-latency recent-data queries, retention/downsampling, availability. Defer: tracing/logs.",
    estimation:
      "Estimate hosts × metrics/host × points/min → write points/sec, and raw storage/day. How does downsampling change long-term storage?",
    api:
      "Define ingest (batch push), query (metric, tags, time range, aggregation, step), and alert-rule CRUD. What does a query return?",
    dataModel:
      "Model time series (series key = name+tags), points, downsampled rollups, and alert rules. Why not a plain relational row-per-point?",
    highLevelDesign:
      "Show agents → ingestion (queue) → time-series DB (+ rollup jobs); query layer → dashboards; alerting engine evaluating rules against recent data → notifications.",
    deepDives:
      "Pick 1–2: high-cardinality handling, downsampling/retention, write path + buffering, alert evaluation at scale, or query performance.",
  }),
  modelAnswer: `**Requirements.** Functional: ingest metric points, query time ranges with aggregations, render dashboards, evaluate alert rules and notify. Non-functional: very high **write** throughput, fast queries on **recent** data, bounded storage via retention/downsampling, high availability. Defer logs/traces.

**Estimation.** 10k hosts × 100 metrics × 1 point/10s ≈ 100k points/s (peak higher); raw ≈ tens of GB/day. Downsampling keeps years affordable by shrinking old data.

**API.**
\`\`\`text
POST /v1/ingest [{ name, tags, ts, value }, ...]
GET  /v1/query?metric=cpu&tags=host:a&from=..&to=..&agg=avg&step=1m
POST /v1/alerts { expr, forDuration, notify }
\`\`\`

**Data model.** A **series** is keyed by \`name + sorted tags\`; points are \`(seriesId, ts, value)\` stored columnar/append-only in a **time-series DB**; **rollup** tables hold downsampled aggregates; alert rules stored separately. Row-per-point in a relational DB is far too slow/big.

**High-level design.** Agents push (or collectors scrape) → **ingestion** tier buffered by a **queue** → TSDB writers. Background **rollup** jobs downsample; **retention** expires raw points. A query layer serves dashboards; an **alerting** engine evaluates rules on a schedule against recent data and dispatches to the notification service.

**Deep dives.**
- *Cardinality:* limit/observe tag combinations; high cardinality (e.g. user-id tags) explodes series count — the main scaling trap.
- *Downsampling/retention:* tiered resolution (1s recent → 1h old) bounds storage.
- *Write path:* queue absorbs bursts; batch writes to the TSDB.
- *Alerting:* evaluate rules over sliding windows; dedupe/route via the notification pipeline.`,
  rubric: [
    { id: "req", name: "Requirements", description: "Write-heavy ingest, recent-query speed, retention, alerting captured.", maxScore: 4 },
    { id: "tsdb", name: "Time-series storage", description: "Series model + append-only TSDB, not row-per-point relational.", maxScore: 4 },
    { id: "retention", name: "Downsampling/retention", description: "Tiered resolution + expiry to bound storage.", maxScore: 4 },
    { id: "ingest", name: "Ingestion path", description: "Queue-buffered high-throughput write path.", maxScore: 4 },
    { id: "alerting", name: "Alerting & cardinality", description: "Rule evaluation + high-cardinality awareness.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const distributedCache: CaseStudy = {
  id: "cs-distributed-cache",
  title: "Design a Distributed Cache",
  difficulty: "hard",
  summary:
    "A Redis/Memcached-style in-memory cache spread across many nodes: partition keys with consistent hashing, handle eviction and replication, and survive node failure.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Beyond a single cache node",
      body: `A single cache node runs out of memory and is a single point of failure. A **distributed cache** spreads keys across many nodes. The two core questions: **how are keys partitioned** across nodes (so any client finds the right node), and **what happens when a node is added or dies** (ideally minimal remapping). You built the two primitives for this earlier — an LRU cache and a consistent-hashing ring.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-cache-partition",
        kind: "mcq",
        prompt: "Which key-partitioning scheme minimizes remapping when a cache node is added or removed?",
        options: [
          "hash(key) % N over the node count",
          "consistent hashing (a hash ring with virtual nodes)",
          "range partitioning by key prefix",
          "random assignment per request",
        ],
        answerIndex: 1,
        explanation:
          "With hash % N, changing N remaps almost every key (cache-miss storm). Consistent hashing only moves the keys near the changed node — exactly why distributed caches use it.",
      },
    },
    {
      kind: "prose",
      heading: "Eviction, replication, and consistency",
      body: `Each node caps memory and **evicts** under pressure (LRU/LFU/TTL). For availability, replicate each partition (a primary + replicas) so a node failure doesn't lose the whole slice; on failure, promote a replica and let the ring re-route. Caches favor **availability and speed over strict consistency** — stale entries are acceptable and are bounded by TTL and invalidation. The hard operational parts are the **thundering herd** on a hot-key expiry and keeping the cache coherent with the source of truth.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: get/put/delete with TTL across a cluster; clients route to the right node. Non-functional: very low latency, high hit rate, horizontal scalability, availability under node failure, bounded staleness. Defer: cross-region.",
    estimation:
      "Estimate keys, avg value size → total memory and node count. Estimate QPS and per-node throughput. How much does replication add?",
    api:
      "Define get/put(ttl)/delete and how a client discovers which node owns a key. Client-side vs proxy routing?",
    dataModel:
      "Describe the ring (consistent hashing + virtual nodes), per-node store (hash map + eviction metadata), and replica placement.",
    highLevelDesign:
      "Show client → (ring lookup) → owning node (+ replicas); node add/remove reshapes the ring; eviction per node; failure → replica promotion. Where does invalidation happen?",
    deepDives:
      "Pick 1–2: consistent-hashing partitioning + rebalancing, eviction policy, replication + failover, hot-key/thundering-herd mitigation, or invalidation strategy.",
  }),
  modelAnswer: `**Requirements.** Functional: \`get\`/\`put(ttl)\`/\`delete\` across a cluster; clients reach the correct node. Non-functional: sub-ms/low-ms latency, high hit rate, horizontal scale, availability when nodes fail, staleness bounded by TTL. Defer cross-region replication.

**Estimation.** 1B keys × 1 KB ≈ 1 TB → dozens of nodes at ~64 GB each (plus replicas). Millions of ops/sec spread across nodes; replication roughly doubles memory.

**API.**
\`\`\`text
get(key) -> value|null
put(key, value, ttlSeconds)
delete(key)
\`\`\`
Clients route with a **consistent-hashing ring** (client-side library or a thin proxy) so they hit the owning node directly.

**Data model.** A **hash ring** with virtual nodes maps key → node. Each node holds an in-memory map plus **eviction** metadata (LRU/LFU/TTL). Each partition has a **primary + N replicas**.

**High-level design.** Client hashes the key, finds the owning node on the ring, and reads/writes it (and asynchronously its replicas). Adding/removing a node reshapes only nearby arcs (minimal key movement). Under memory pressure a node **evicts**; on node failure, a **replica is promoted** and the ring re-routes. Invalidation is via TTL + explicit deletes/writes from the app.

**Deep dives.**
- *Partitioning:* consistent hashing + virtual nodes → balanced load, minimal remap on membership change.
- *Eviction:* LRU/LFU/TTL per node to bound memory and keep hit rate high.
- *Replication/failover:* primary + replicas per partition; promote on failure.
- *Hot keys / thundering herd:* replicate hot keys, add jitter to TTLs, and use request coalescing / a mutex so one miss repopulates while others wait.`,
  rubric: [
    { id: "req", name: "Requirements", description: "Latency, hit rate, scale, availability, bounded staleness.", maxScore: 4 },
    { id: "partition", name: "Partitioning", description: "Consistent hashing + virtual nodes; minimal remap on change.", maxScore: 4 },
    { id: "eviction", name: "Eviction", description: "Per-node LRU/LFU/TTL to bound memory.", maxScore: 4 },
    { id: "replication", name: "Replication & failover", description: "Replicas + promotion for availability.", maxScore: 4 },
    { id: "hotkey", name: "Hot keys / herd", description: "Mitigated thundering herd / hot-key skew.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const rideSharing: CaseStudy = {
  id: "cs-ride-sharing",
  title: "Design a Ride-Sharing Service (Uber / Nearby Drivers)",
  difficulty: "hard",
  summary:
    "Match riders to nearby drivers in real time. The crux is geospatial indexing of moving drivers plus low-latency matching and live location updates.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Finding what's nearby",
      body: `The heart of ride-sharing is: given a rider's location, quickly find **nearby available drivers**. Drivers are constantly moving, so their locations update every few seconds — a huge write stream — and "find nearby" must run in milliseconds. That's a **geospatial indexing** problem: you can't scan all drivers per request.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-ride-geoindex",
        kind: "mcq",
        prompt: "What structure efficiently answers 'which drivers are within X of this point?'",
        options: [
          "a plain list scanned per query",
          "a spatial index — geohash buckets or a quadtree — so you only check nearby cells",
          "a relational table sorted by driver id",
          "a single global lock",
        ],
        answerIndex: 1,
        explanation:
          "Geohashing (bucket the world into cells and index drivers by cell) or a quadtree lets a proximity query examine only the rider's cell and its neighbors, not every driver.",
      },
    },
    {
      kind: "prose",
      heading: "Location updates and matching",
      body: `Drivers stream location updates into a **location service** backed by a geospatial index (often in-memory, e.g. Redis geo/geohash buckets) that's updated continuously. A **matching service** takes a ride request, queries nearby available drivers, ranks them (ETA, rating), and dispatches an offer; on accept, it creates the trip and streams live locations to the rider. Trip records and payments live in durable stores; the hot path (location + matching) is optimized for latency.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: drivers publish location, riders request a ride, match to a nearby driver, track the trip live. Non-functional: real-time (low match latency), high write rate of locations, availability, geographic scale. Defer: pricing, payments detail.",
    estimation:
      "Estimate active drivers × location updates/min → write QPS; ride requests/sec. How big is the geo index and does it fit in memory?",
    api:
      "Define updateLocation (driver), requestRide (rider), and a live trip/location stream. What does a match response contain?",
    dataModel:
      "Model driver locations in a geospatial index (geohash/quadtree cells), driver availability, trips, and riders. What's in-memory vs durable?",
    highLevelDesign:
      "Show drivers → location service (geo index, continuously updated); rider → matching service (query nearby → rank → dispatch → create trip → stream locations). Separate trip/payment stores.",
    deepDives:
      "Pick 1–2: geospatial indexing (geohash vs quadtree), high-rate location ingestion, matching/dispatch, live tracking, or sharding by region.",
  }),
  modelAnswer: `**Requirements.** Functional: drivers publish location; riders request a ride and get matched to a nearby available driver; both track the trip live. Non-functional: low match latency (seconds), very high **location write** rate, availability, scale per city/region. Defer detailed pricing/payments.

**Estimation.** 1M active drivers updating every 4s ≈ 250k location writes/s; ride requests far fewer (thousands/s). The geo index (driver → cell) is small enough to hold **in memory** (e.g. Redis), sharded by region.

**API.**
\`\`\`text
POST /v1/drivers/location { driverId, lat, lng }      (high frequency)
POST /v1/rides { riderId, lat, lng }  -> matched driver + ETA
WS   /v1/trips/{id}/track             -> live driver location stream
\`\`\`

**Data model.** A **geospatial index** buckets drivers by **geohash cell** (or a quadtree) with availability flags — kept in memory and updated on each location ping. Durable stores hold trips, riders, and payments.

**High-level design.** Drivers stream locations → **location service** updates the in-memory geo index (sharded by region). A rider request hits the **matching service**: query the rider's cell + neighboring cells for available drivers, rank by ETA/rating, dispatch an offer; on accept, create a **trip** and stream driver locations to the rider over a WebSocket. Trip completion flows to payments.

**Deep dives.**
- *Geo index:* geohash buckets (or quadtree) so proximity queries scan only nearby cells; choose cell size to balance recall vs cost.
- *Location ingestion:* accept the firehose into an in-memory store; you don't need to durably persist every ping.
- *Matching:* handle race conditions (two riders, one driver) by locking/reserving a driver on offer.
- *Sharding:* partition by geographic region so each shard handles local traffic.`,
  rubric: [
    { id: "req", name: "Requirements & scale", description: "Real-time matching + high location write rate identified.", maxScore: 4 },
    { id: "geo", name: "Geospatial index", description: "Geohash/quadtree so proximity queries avoid full scans.", maxScore: 4 },
    { id: "ingest", name: "Location ingestion", description: "In-memory, high-rate updates; not durably persisting every ping.", maxScore: 4 },
    { id: "match", name: "Matching & dispatch", description: "Query→rank→dispatch with race/reservation handling.", maxScore: 4 },
    { id: "scale", name: "Sharding/tracking", description: "Regional sharding and live trip tracking.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const bookingSystem: CaseStudy = {
  id: "cs-booking-system",
  title: "Design a Ticket Booking System (Ticketmaster)",
  difficulty: "hard",
  summary:
    "Sell limited inventory (seats) under massive concurrent demand without overselling. The crux is reservation locking and consistency at a flash-sale scale.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Never sell the same seat twice",
      body: `Booking sells **finite, unique inventory** — a specific seat can go to exactly one buyer. Unlike most systems where eventual consistency is fine, here **overselling is unacceptable**, and demand is extremely **spiky** (tickets drop and millions rush at once). The core mechanic is a **hold/reserve** step: a seat is temporarily locked for a user while they pay, then either confirmed or released on timeout.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-booking-hold",
        kind: "mcq",
        prompt: "How do you prevent two users from buying the same seat during checkout?",
        options: [
          "let both pay and refund the loser",
          "reserve the seat with a short-lived exclusive lock/hold, confirmed on payment or auto-released on timeout",
          "use eventual consistency and reconcile later",
          "cache seat availability aggressively",
        ],
        answerIndex: 1,
        explanation:
          "A short TTL hold (a conditional/atomic update or lock on the seat) gives one user exclusive claim during checkout; if they don't pay in time it's released. This enforces no-oversell under contention.",
      },
    },
    {
      kind: "prose",
      heading: "Handling the stampede",
      body: `Flash sales create thundering herds on popular events. Techniques: a **virtual waiting room / queue** that admits users at a controlled rate; caching read-only event/seat-map data heavily; and keeping the **transactional** seat-state in a strongly-consistent store (relational with row locks, or atomic conditional updates). Payments run through an idempotent flow so a retry never double-charges or double-books.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: browse events/seats, hold a seat, pay to confirm, release on timeout. Non-functional: NO overselling (strong consistency on inventory), survive huge spikes, low latency for browsing. Defer: dynamic pricing.",
    estimation:
      "Estimate peak concurrent users at a hot drop, seats per event, and read (browse) vs write (hold/confirm) rates. Which part needs strong consistency?",
    api:
      "Define browse/seatmap (cacheable), hold(seatId) with TTL, confirm(payment), release. What guarantees does hold make?",
    dataModel:
      "Model events, seats with state (available/held/booked), holds (with expiry + owner), and orders. Which store is strongly consistent?",
    highLevelDesign:
      "Show read path (cached seat maps) vs write path (hold → pay → confirm) on a consistent inventory store; a waiting room throttles entry; payment is idempotent.",
    deepDives:
      "Pick 1–2: reservation locking / no-oversell, virtual waiting room for spikes, hold expiry/cleanup, payment idempotency, or read/write path separation.",
  }),
  modelAnswer: `**Requirements.** Functional: browse events and seat maps, place a **hold** on seats, pay to confirm, auto-release unpaid holds. Non-functional: **no overselling** (strong consistency on seat inventory), survive extreme spikes at on-sale, fast browsing. Defer dynamic pricing.

**Estimation.** A hot drop: millions of users in minutes hammering a few thousand seats — read (seat map) QPS is enormous; the **write** contention is concentrated on scarce seats, which is the hard part.

**API.**
\`\`\`text
GET  /v1/events/{id}/seats           (cacheable, may be slightly stale)
POST /v1/holds { seatIds }  -> holdId (TTL, e.g. 5 min)  | 409 if taken
POST /v1/orders { holdId, payment }  -> confirmed  (idempotency key)
\`\`\`

**Data model.** \`events\`, \`seats(seatId, state: available|held|booked)\`, \`holds(holdId, seatId, userId, expiresAt)\`, \`orders\`. Seat state lives in a **strongly-consistent** store (relational row locks or atomic conditional updates); seat-map reads can be cached.

**High-level design.** Browsing reads cached seat maps. Buying: **hold** performs an atomic "available → held (by me), TTL" transition (rejecting if not available), the user pays within the TTL, and **confirm** flips held → booked; unpaid holds **auto-release** on expiry (background sweeper or lazy check). A **virtual waiting room** admits users at a controlled rate so the inventory store isn't overwhelmed. Payment uses an **idempotency key** so retries don't double-book/charge.

**Deep dives.**
- *No oversell:* the hold is an atomic conditional update / row lock — only one user can transition a given seat.
- *Spikes:* waiting room/queue throttles admission; cache all read-only data.
- *Hold expiry:* TTL + sweeper (or lazy expiry on next read) returns seats to the pool.
- *Payments:* idempotent confirm; on payment failure, release the hold.`,
  rubric: [
    { id: "req", name: "Requirements", description: "No-oversell strong consistency + spike survival identified.", maxScore: 4 },
    { id: "hold", name: "Reservation locking", description: "Atomic hold/TTL that prevents double-selling a seat.", maxScore: 4 },
    { id: "spike", name: "Spike handling", description: "Waiting room/queue + heavy read caching.", maxScore: 4 },
    { id: "expiry", name: "Hold expiry", description: "TTL + release of unpaid holds back to the pool.", maxScore: 4 },
    { id: "payment", name: "Payment idempotency", description: "Idempotent confirm; safe retries.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

const paymentSystem: CaseStudy = {
  id: "cs-payment-system",
  title: "Design a Payment System",
  difficulty: "hard",
  summary:
    "Move money correctly: charge, record, and reconcile transactions with strict consistency, idempotency, and an auditable ledger. Correctness beats everything.",
  walkthroughSections: [
    {
      kind: "prose",
      heading: "Correctness above all",
      body: `A payment system's non-negotiable is **correctness** — never lose money, never double-charge, always reconcile. It orchestrates external **payment providers** (card networks, banks) which are slow, flaky, and asynchronous, so the design centers on **idempotency**, a durable **ledger**, and careful handling of partial failures. Availability matters, but consistency of money state wins every tradeoff.`,
    },
    {
      kind: "decision",
      question: {
        id: "cs-payment-idempotency",
        kind: "mcq",
        prompt: "A client retries a charge after a network timeout. How do you avoid charging twice?",
        options: [
          "assume the first one failed and charge again",
          "require an idempotency key so the retry maps to the same transaction and returns the original result",
          "charge and refund if duplicate",
          "block all retries",
        ],
        answerIndex: 1,
        explanation:
          "An idempotency key per payment attempt lets the server recognize a retry and return the original outcome instead of creating a second charge — essential when the network makes 'did it go through?' ambiguous.",
      },
    },
    {
      kind: "prose",
      heading: "Ledger and reconciliation",
      body: `Money movement is recorded in an append-only, **double-entry ledger** (every debit has a matching credit) — the source of truth and audit trail. Because provider calls can fail after you've recorded intent, transactions move through explicit **states** (pending → succeeded/failed) and are made durable before calling out. A background **reconciliation** job compares your ledger against provider settlement reports to catch and repair discrepancies. Sagas/compensating actions handle multi-step flows (charge, then payout) without distributed transactions.`,
    },
  ],
  designTemplate: template({
    requirements:
      "Functional: charge a payment method, record the transaction, handle async provider callbacks, refunds, report status. Non-functional: strong consistency/correctness, idempotency, auditability, high durability. Defer: multi-currency FX detail.",
    estimation:
      "Estimate transactions/day → write QPS and ledger growth. Note this is correctness-bound, not throughput-bound — what does that imply for storage choice?",
    api:
      "Define charge (with idempotency key), refund, get status, and a provider webhook/callback. What does charge return before the provider confirms?",
    dataModel:
      "Model payments (with state machine), a double-entry ledger (append-only), idempotency keys, and provider references. Which store is strongly consistent?",
    highLevelDesign:
      "Show: client → payment service (dedupe on idempotency key → write pending ledger entry → call provider → update state on callback); reconciliation job vs provider reports; refunds.",
    deepDives:
      "Pick 1–2: idempotency, the double-entry ledger + states, reconciliation, handling async provider callbacks/partial failure, or sagas for multi-step flows.",
  }),
  modelAnswer: `**Requirements.** Functional: charge a method, record the transaction, process async provider results, support refunds, report status. Non-functional: **correctness first** — strong consistency, idempotency, full auditability, high durability. Availability matters but never at the cost of correctness. Defer FX.

**Estimation.** Even large systems are millions–tens-of-millions of txns/day (hundreds/s) — modest throughput; the challenge is **consistency and durability**, so a strongly-consistent relational store for the ledger is appropriate.

**API.**
\`\`\`text
POST /v1/charges { amount, method, idempotencyKey } -> { id, status: pending|succeeded|failed }
POST /v1/refunds { chargeId, amount, idempotencyKey }
POST /v1/webhooks/provider   (async result callbacks)
GET  /v1/charges/{id}
\`\`\`

**Data model.** \`payments(id, state, amount, provider, providerRef)\` with an explicit **state machine**; an append-only **double-entry ledger** (debit + credit per movement) as the source of truth; \`idempotency_keys(key -> paymentId, result)\`; provider references.

**High-level design.** Charge: **dedupe** on the idempotency key (return the prior result if seen) → write a **pending** ledger entry durably → call the provider → on the async **callback/webhook**, transition to succeeded/failed and post the final ledger entries. A **reconciliation** job compares the ledger to provider settlement files daily and flags/repairs mismatches. Refunds and multi-step flows (charge → payout) use **compensating actions / sagas** rather than distributed transactions.

**Deep dives.**
- *Idempotency:* a key per attempt makes retries safe under ambiguous network failures.
- *Ledger:* double-entry, append-only → auditable and self-checking (debits = credits).
- *Async providers:* persist intent before calling out; drive state off webhooks; handle timeouts by querying provider status.
- *Reconciliation:* independent check against provider reports catches anything the happy path missed.`,
  rubric: [
    { id: "req", name: "Requirements", description: "Correctness/consistency-first framing; auditability, durability.", maxScore: 4 },
    { id: "idempotency", name: "Idempotency", description: "Idempotency keys make retries safe (no double-charge).", maxScore: 4 },
    { id: "ledger", name: "Ledger & states", description: "Double-entry append-only ledger + payment state machine.", maxScore: 4 },
    { id: "async", name: "Async providers", description: "Persist-before-call, webhook-driven state, partial-failure handling.", maxScore: 4 },
    { id: "recon", name: "Reconciliation", description: "Independent reconciliation against provider reports.", maxScore: 4 },
  ],
  xp: XP.caseStudy,
};

export const sdCaseStudies: CaseStudy[] = [
  urlShortener,
  pastebin,
  newsFeed,
  webCrawler,
  chatSystem,
  typeahead,
  notificationService,
  metricsSystem,
  videoStreaming,
  cloudDrive,
  distributedCache,
  rideSharing,
  bookingSystem,
  paymentSystem,
];
