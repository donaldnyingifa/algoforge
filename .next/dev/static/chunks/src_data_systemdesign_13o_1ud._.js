(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/systemdesign/casestudies.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sdCaseStudies",
    ()=>sdCaseStudies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
/*
 * System Design — Case Studies (Stage sd-s3). Each is a guided end-to-end design:
 * a walkthrough (prose + decision-point quizzes), a fill-in design template
 * (the six-step framework), a self-assessment rubric, and a model answer revealed
 * after the learner submits their own work.
 */ /** The six-step design template, with per-case guidance for each section. */ function template(g) {
    return [
        {
            id: "requirements",
            title: "1. Requirements",
            guidance: g.requirements
        },
        {
            id: "estimation",
            title: "2. Estimation",
            guidance: g.estimation
        },
        {
            id: "api",
            title: "3. API Design",
            guidance: g.api
        },
        {
            id: "dataModel",
            title: "4. Data Model",
            guidance: g.dataModel
        },
        {
            id: "highLevelDesign",
            title: "5. High-Level Design",
            guidance: g.highLevelDesign
        },
        {
            id: "deepDives",
            title: "6. Deep Dives",
            guidance: g.deepDives
        }
    ];
}
const urlShortener = {
    id: "cs-url-shortener",
    title: "Design a URL Shortener",
    difficulty: "easy",
    summary: "A TinyURL-style service: turn long URLs into short codes and redirect. A read-heavy classic that exercises hashing, storage choice, and caching.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Framing the problem",
            body: `A URL shortener does two things: **create** a short code for a long URL, and **redirect** a short code to its long URL. The redirect path is by far the hottest — reads dwarf writes (often 100:1), and redirects must be fast (p99 well under 100 ms) and highly available.

Start by pinning scope: do we need custom aliases? link expiry? analytics? For a first pass, defer those and nail the core create/redirect loop, then layer extras in the deep dives.`
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
                    "use the URL's domain name"
                ],
                answerIndex: 1,
                explanation: "Base62-encoding a unique id (from a counter or an id-allocation service) guarantees uniqueness with no collision checks and yields short codes. Hashing risks collisions and needs a dedupe check; pure random needs collision retries."
            }
        },
        {
            kind: "prose",
            heading: "Storage and the read path",
            body: `The data is a simple mapping \`code → longUrl\` (+ metadata). That's a key-value access pattern, so a KV store or a simple indexed table shards cleanly by code. The redirect is a single point lookup — perfect for a **cache** in front of the store, giving most redirects a memory-speed hit. A **CDN**/edge layer and a load balancer round out the read path.`
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
                    "404 then retry"
                ],
                answerIndex: 1,
                explanation: "302 keeps each click flowing through your service so you can count it; 301 is faster/cheaper because browsers cache it but then you lose per-click visibility. The choice is a real tradeoff — many shorteners use 302 for analytics."
            }
        }
    ],
    designTemplate: template({
        requirements: "List functional (create short URL, redirect, maybe custom alias/expiry/analytics) and non-functional (read-heavy ratio, redirect latency, availability, durability) requirements. Which do you defer?",
        estimation: "Estimate writes/day and reads/day (assume a read:write ratio), derive QPS and peak QPS, and the storage growth per year (bytes per record × records/year). How many years of codes must the code length support?",
        api: "Define the create and redirect endpoints (methods, inputs, outputs, status codes). How does the redirect respond (301 vs 302)?",
        dataModel: "What does a record contain (code, longUrl, createdAt, owner, expiry)? What's the primary key and how do you shard it?",
        highLevelDesign: "Draw the request flow for both create and redirect: client → LB → service → cache → store, plus a CDN. Where does the id/code get generated?",
        deepDives: "Pick 1–2: unique code generation at scale, cache strategy and hit rate, handling custom aliases and collisions, analytics pipeline, or link expiry/cleanup."
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
        {
            id: "req",
            name: "Requirements & scope",
            description: "Separated functional vs non-functional; identified read-heavy nature and deferred extras.",
            maxScore: 4
        },
        {
            id: "est",
            name: "Estimation",
            description: "Reasonable QPS (peak) and storage numbers with stated assumptions.",
            maxScore: 4
        },
        {
            id: "codegen",
            name: "Code generation",
            description: "Chose a collision-safe scheme (e.g. base62 of a unique id) and justified it.",
            maxScore: 4
        },
        {
            id: "readpath",
            name: "Read path & caching",
            description: "Cache + CDN + LB to make redirects fast and available.",
            maxScore: 4
        },
        {
            id: "tradeoffs",
            name: "Tradeoffs",
            description: "Discussed at least one real tradeoff (301 vs 302, hashing vs counter, etc.).",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const newsFeed = {
    id: "cs-news-feed",
    title: "Design a News Feed",
    difficulty: "medium",
    summary: "A social home timeline (Twitter/Facebook-style): show recent posts from the people you follow. The crux is fan-out — push vs pull — and taming celebrity accounts.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "The core tension: fan-out",
            body: `A feed shows posts from everyone you follow, newest first. The central design question is **when to do the work**:

- **Fan-out on write (push):** when a user posts, copy the post id into each follower's precomputed feed. Reads are trivially fast (just read your feed), but a post by someone with millions of followers triggers millions of writes.
- **Fan-out on read (pull):** store posts once; when a user opens the app, gather recent posts from everyone they follow and merge them. Writes are cheap, but reads are expensive and slow for users following many people.

Most real systems use a **hybrid**: push for normal users, pull for celebrities.`
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
                    "followers can't be indexed"
                ],
                answerIndex: 1,
                explanation: "One celebrity post must be written into millions of feeds, causing a massive write burst and amplification. The fix: don't fan out celebrity posts — pull those at read time and merge them into the follower's feed."
            }
        },
        {
            kind: "prose",
            heading: "Ranking and delivery",
            body: `Beyond ordering by time, feeds often **rank** posts (engagement, recency, affinity). Keep ranking off the hot path where possible: precompute candidate feeds, then apply a lightweight scoring pass at read time. A cache holds each user's materialized feed; posts and media live in their own stores (media behind a CDN). A write goes: create post → enqueue a fan-out job → workers append to follower feeds (for non-celebrities).`
        }
    ],
    designTemplate: template({
        requirements: "Functional: post, view home timeline, follow/unfollow. Non-functional: feed load latency, freshness (how stale is OK?), scale (users, posts/day, avg followers), availability. What do you defer (DMs, notifications, media processing)?",
        estimation: "Estimate daily active users, posts/day, average follows, and read QPS for feed opens. Which of push/pull does the read QPS favor?",
        api: "Define endpoints: createPost, getFeed (with pagination — cursor!), follow/unfollow. What does getFeed return and how is it paged?",
        dataModel: "Model users, follows (the social graph), posts, and per-user feed lists. Where do feeds live (a cache/KV of post ids)?",
        highLevelDesign: "Show the write path (post → fan-out workers via a queue → follower feeds) and the read path (feed service → feed cache → hydrate post/media). Where's the celebrity special-case?",
        deepDives: "Pick 1–2: push vs pull vs hybrid fan-out, handling celebrities/hot keys, feed ranking, pagination correctness under new posts, or media storage/CDN."
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
        {
            id: "req",
            name: "Requirements & scale",
            description: "Captured the read-heavy feed workload, acceptable staleness, and scale drivers.",
            maxScore: 4
        },
        {
            id: "fanout",
            name: "Fan-out strategy",
            description: "Explained push vs pull and proposed a hybrid with a clear rationale.",
            maxScore: 4
        },
        {
            id: "celebrity",
            name: "Celebrity / hot keys",
            description: "Handled the high-follower special case explicitly.",
            maxScore: 4
        },
        {
            id: "api",
            name: "API & pagination",
            description: "Sensible endpoints with cursor-based feed pagination.",
            maxScore: 4
        },
        {
            id: "tradeoffs",
            name: "Tradeoffs & consistency",
            description: "Acknowledged eventual consistency and other real tradeoffs.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const pastebin = {
    id: "cs-pastebin",
    title: "Design a Pastebin",
    difficulty: "easy",
    summary: "Store and share text snippets via a short link, with optional expiry. Like a URL shortener, but the payload is the content itself — so object storage and expiry take center stage.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Snippets, not just links",
            body: `Pastebin lets a user paste text, get a short URL, and share it; anyone with the link can read it. It resembles a URL shortener, but now **you store the content**, which can be large (KBs to a few MB). That shifts the design: metadata is small and relational-ish, but the paste body belongs in **object storage** (or a blob store), not inline in your database.

Reads dominate (a paste is written once, read many times), and many pastes should **expire** — after a time window or a number of views.`
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
                    "in the URL itself"
                ],
                answerIndex: 1,
                explanation: "Large blobs bloat a relational DB and hurt its cache/IO. Keep small metadata (id, key, createdAt, expiry) in the DB and put the body in object storage (served via CDN), referenced by key."
            }
        },
        {
            kind: "prose",
            heading: "Expiry and cleanup",
            body: `Expiry can be **time-based** (\`expiresAt\`) or **view-based** (burn after N reads). Enforce it lazily on read (treat expired pastes as 404) and reclaim storage with a background job or the object store's native **TTL/lifecycle** policy. As with the shortener, generate keys by base62-encoding a unique id to avoid collisions, cache hot pastes, and front reads with a CDN.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: create a paste (text + optional expiry/visibility), read by key, maybe delete. Non-functional: read-heavy, size limits per paste, expiry, availability. What's the max paste size you support?",
        estimation: "Estimate pastes/day, average paste size, read:write ratio, and resulting storage growth/year and read bandwidth. Does the size push you to object storage + CDN?",
        api: "Define create/read/delete endpoints and what create returns. How is expiry expressed?",
        dataModel: "Split metadata (key, blobRef, createdAt, expiresAt, sizeBytes) from the body (object storage). What's the primary key?",
        highLevelDesign: "Show create (write blob to object storage, write metadata, return key) and read (metadata lookup → fetch blob, via cache/CDN). Where does key generation happen?",
        deepDives: "Pick 1–2: key generation, expiry enforcement + cleanup (TTL/lifecycle), large-payload handling, caching/CDN, or abuse/size limits."
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
        {
            id: "req",
            name: "Requirements & scope",
            description: "Functional/non-functional; recognized read-heavy + size/expiry needs.",
            maxScore: 4
        },
        {
            id: "storage",
            name: "Storage split",
            description: "Body in object storage, metadata in DB — not inline blobs.",
            maxScore: 4
        },
        {
            id: "expiry",
            name: "Expiry & cleanup",
            description: "Lazy 404 on read + background/lifecycle reclamation.",
            maxScore: 4
        },
        {
            id: "readpath",
            name: "Read path",
            description: "Cache + CDN for fast, cheap reads of immutable content.",
            maxScore: 4
        },
        {
            id: "tradeoffs",
            name: "Tradeoffs",
            description: "Discussed a real tradeoff (key gen, size limits, private pastes).",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const webCrawler = {
    id: "cs-web-crawler",
    title: "Design a Web Crawler",
    difficulty: "medium",
    summary: "Crawl the web at scale: fetch pages, extract links, and keep going — without revisiting, overloading hosts, or getting stuck. A pipeline + frontier problem.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "A BFS over the web",
            body: `A crawler starts from seed URLs and repeatedly: pull a URL from a **frontier** queue, fetch the page, parse out links, and enqueue new ones — essentially a distributed **BFS** over the web graph. At scale the hard parts are: **not revisiting** the same URL, being **polite** to each host (rate-limit per domain, respect \`robots.txt\`), and staying robust to traps (infinite calendars, redirect loops).`
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
                    "no dedupe — just crawl everything"
                ],
                answerIndex: 1,
                explanation: "A Bloom filter tests 'seen?' in tiny memory with no false negatives; a 'maybe seen' can be confirmed against a store. An in-memory Set won't fit billions of URLs, and a DB lookup per URL is too slow as the sole filter."
            }
        },
        {
            kind: "prose",
            heading: "Politeness and the frontier",
            body: `The **frontier** isn't one FIFO queue — it's partitioned so you can enforce **per-host politeness** (a bounded fetch rate per domain) while keeping overall throughput high, and apply **priority** (crawl important/fresh pages sooner). Fetched content goes to storage (and on to indexing); a **DNS cache** avoids resolving the same host repeatedly. Workers are stateless and scale horizontally, coordinating through the shared frontier and seen-set.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: fetch pages from seeds, extract + enqueue links, store content. Non-functional: scale (pages/sec, total pages), politeness (respect robots.txt, per-host rate), freshness (re-crawl cadence), robustness to traps. Scope: HTML only? images?",
        estimation: "Estimate pages to crawl, target crawl rate (pages/sec), average page size → fetch bandwidth and storage. How big is the seen-set and does it fit in memory?",
        api: "This is a pipeline more than a public API. Define the internal interfaces: frontier.enqueue/dequeue, fetcher, parser, dedupe.seen(url). What does a work item contain?",
        dataModel: "Model the URL frontier (priority + per-host queues), the seen-set (Bloom filter + store), and content storage (raw pages, metadata).",
        highLevelDesign: "Show the loop: frontier → fetcher (DNS cache, robots check, per-host limiter) → parser → dedupe → enqueue new URLs; fetched content → storage → indexer. Where do workers scale?",
        deepDives: "Pick 1–2: URL dedupe at scale (Bloom filter), per-host politeness/priority frontier, trap/loop detection, freshness/re-crawl scheduling, or distributed coordination."
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
        {
            id: "req",
            name: "Requirements & scale",
            description: "Captured throughput, politeness, dedupe, and freshness goals.",
            maxScore: 4
        },
        {
            id: "dedupe",
            name: "URL dedupe",
            description: "Scalable seen-set (Bloom filter + store), URL canonicalization.",
            maxScore: 4
        },
        {
            id: "frontier",
            name: "Frontier & politeness",
            description: "Per-host queues with rate limiting and priority; robots.txt.",
            maxScore: 4
        },
        {
            id: "pipeline",
            name: "Pipeline & scaling",
            description: "Clear fetch→parse→store→enqueue loop with stateless workers.",
            maxScore: 4
        },
        {
            id: "tradeoffs",
            name: "Robustness/tradeoffs",
            description: "Handled traps/loops or freshness re-crawl tradeoffs.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const chatSystem = {
    id: "cs-chat-system",
    title: "Design a Chat System",
    difficulty: "medium",
    summary: "A WhatsApp/Messenger-style messenger: 1:1 and group messaging, delivery/read receipts, presence, and offline delivery. The crux is real-time push and durable message ordering.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Real-time delivery",
            body: `A chat system must deliver messages to online recipients **instantly** and to offline ones **when they reconnect**. That means a persistent connection — typically a **WebSocket** — between each client and a stateful gateway, plus a way to route a message from the sender's gateway to the recipient's. Because a user can be offline, every message must first be **durably stored**, then pushed.`
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
                    "a new HTTP request per message from server to client"
                ],
                answerIndex: 1,
                explanation: "A persistent WebSocket lets the server push instantly with low overhead. Polling wastes requests and adds latency; servers can't open HTTP connections to clients behind NAT."
            }
        },
        {
            kind: "prose",
            heading: "Ordering, storage, and fan-out",
            body: `Messages within a conversation need a **stable order** — assign each a monotonic sequence number (or timestamp) per conversation so clients can sort and detect gaps. Store messages in a write-heavy store (e.g. a wide-column DB partitioned by conversation id). For **groups**, the sender writes once and the system fans the message out to each member's delivery path; **receipts** (delivered/read) and **presence** are separate lightweight event streams. Offline users get messages on reconnect by reading everything after their last-acked sequence.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: 1:1 + group messaging, delivery/read receipts, presence (online/last-seen), offline delivery, message history. Non-functional: low delivery latency, ordering within a conversation, durability, scale (DAU, messages/day). Defer: media, calls, E2E encryption?",
        estimation: "Estimate DAU, messages/day → write QPS, concurrent connections (each online user holds a socket), and message storage/year. What dominates — connections or storage?",
        api: "Define connect (WebSocket), sendMessage, fetchHistory (cursor), receipts, presence. What does a message payload contain (conversationId, seq, senderId, body, ts)?",
        dataModel: "Model conversations, membership, messages (partition by conversationId, ordered by seq), per-user last-read/last-delivered pointers, and presence.",
        highLevelDesign: "Show client ⇄ WebSocket gateway; sender's gateway persists the message + routes to recipients' gateways (via a pub/sub or routing service); offline path reads on reconnect. Where's presence tracked?",
        deepDives: "Pick 1–2: connection routing (which gateway holds a user), per-conversation ordering, group fan-out, receipts/presence at scale, or offline sync."
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
        {
            id: "req",
            name: "Requirements & scale",
            description: "Captured real-time + offline needs and the concurrent-connection constraint.",
            maxScore: 4
        },
        {
            id: "transport",
            name: "Real-time transport",
            description: "Persistent WebSocket gateways with a routing mechanism.",
            maxScore: 4
        },
        {
            id: "ordering",
            name: "Ordering & durability",
            description: "Per-conversation seq + durable message store.",
            maxScore: 4
        },
        {
            id: "offline",
            name: "Offline & receipts",
            description: "Reconnect catch-up via last-acked pointer; receipts/presence handled.",
            maxScore: 4
        },
        {
            id: "tradeoffs",
            name: "Tradeoffs",
            description: "Discussed group fan-out, routing, or consistency tradeoffs.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const typeahead = {
    id: "cs-typeahead",
    title: "Design Search Autocomplete (Typeahead)",
    difficulty: "medium",
    summary: "Suggest completions as the user types, in a few milliseconds, ranked by popularity. A read-optimized problem built on precomputed tries and aggressive caching.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Suggestions on every keystroke",
            body: `Typeahead returns the top few suggestions for a prefix, updating on **every keystroke** — so latency must be tiny (tens of ms) and the QPS is enormous (many requests per query). It's overwhelmingly **read-heavy**; the suggestions themselves change slowly. That split — hot reads, slow-changing data — means you precompute and cache aggressively rather than compute per request.`
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
                    "sort the entire dictionary on every keystroke"
                ],
                answerIndex: 1,
                explanation: "Precompute and cache the top-k completions at each prefix/trie node offline; a query is then a direct lookup. Scanning or LIKE queries per keystroke are far too slow at typeahead QPS."
            }
        },
        {
            kind: "prose",
            heading: "Building and updating the index",
            body: `Popularity comes from **aggregating query logs** (how often each phrase is searched) in an offline pipeline, then materializing a **prefix → top-k** structure (a trie whose nodes carry their best completions, or a precomputed map). That artifact is pushed to caches/edge servers and refreshed periodically (hourly/daily) — suggestions don't need to be real-time fresh. Personalization and typo-tolerance are deep-dive extensions.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: return top-k suggestions for a prefix, ranked by popularity; update suggestions over time. Non-functional: very low latency per keystroke, huge read QPS, freshness (how stale can suggestions be?). Defer: personalization, typo tolerance, multi-language.",
        estimation: "Estimate queries/day and the keystroke multiplier → suggestion QPS. Size the prefix index (distinct phrases × avg length). What's cacheable?",
        api: "Define the suggest endpoint (prefix, limit) → ranked list. How do you debounce/limit client calls?",
        dataModel: "Model the prefix index: a trie with per-node top-k, or a map prefix→top-k. Where's the raw query-frequency data that feeds it?",
        highLevelDesign: "Show the query path (client → edge/cache → suggestion service → precomputed index) and the offline build path (query logs → aggregation → build top-k index → publish).",
        deepDives: "Pick 1–2: precomputing top-k at each node, index build/refresh pipeline, caching/edge, typo tolerance, or personalization."
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
        {
            id: "req",
            name: "Requirements & scale",
            description: "Recognized read-heavy, low-latency, staleness-tolerant nature.",
            maxScore: 4
        },
        {
            id: "index",
            name: "Precomputed index",
            description: "Trie/map with per-prefix top-k, computed offline.",
            maxScore: 4
        },
        {
            id: "build",
            name: "Build/refresh pipeline",
            description: "Query-log aggregation → index build → periodic publish.",
            maxScore: 4
        },
        {
            id: "serving",
            name: "Serving & caching",
            description: "Edge/cache + in-memory index for O(1) lookups.",
            maxScore: 4
        },
        {
            id: "tradeoffs",
            name: "Tradeoffs",
            description: "Traded freshness for speed; noted personalization/typos.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const notificationService = {
    id: "cs-notification-service",
    title: "Design a Notification Service",
    difficulty: "medium",
    summary: "Fan out notifications across channels (push, SMS, email) reliably and at scale, with user preferences, rate limits, and retries. A queue-and-worker pipeline problem.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "One event, many channels",
            body: `A notification service takes an event ("your order shipped") and delivers it to a user across the right **channels** — mobile push (APNs/FCM), SMS, email — honoring their **preferences** and quiet hours. It sits behind an async pipeline: producers enqueue notification requests; workers render templates and hand off to channel-specific gateways, retrying on failure. Third-party gateways are slow and flaky, so decoupling with a **queue** is essential.`
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
                    "email only, never push"
                ],
                answerIndex: 1,
                explanation: "At-least-once delivery means retries/redeliveries happen. A dedupe/idempotency key per (user, event, channel) — checked before dispatch — prevents sending the same notification twice."
            }
        },
        {
            kind: "prose",
            heading: "Preferences, rate limits, and reliability",
            body: `Before sending, the pipeline checks **user preferences** (opted-in channels, quiet hours, per-category mute) and **rate limits** (don't blast a user). Failed sends go through **retries with backoff** and land in a **dead-letter queue** for inspection. High-priority notifications (2FA codes) get their own fast lane. Delivery status is tracked so you can report and retry.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: accept notification requests, respect user prefs + quiet hours, deliver across push/SMS/email, retry failures, track status. Non-functional: high throughput, reliable (no lost, minimal dup), prioritization. Defer: rich templating UI.",
        estimation: "Estimate notifications/day → send QPS, split by channel, and the fan-out from a single broadcast event. What's the peak (e.g. a marketing blast)?",
        api: "Define the enqueue API (userId/segment, template, data, priority) and a status query. How are bulk/broadcast sends expressed?",
        dataModel: "Model user channel prefs, device tokens, templates, notification records (status), and a dedupe key. Where's the queue?",
        highLevelDesign: "Show: producer → ingestion API → queue → workers (preference + rate-limit + dedupe checks → render → channel gateway) → retry/DLQ; status store. Where's prioritization?",
        deepDives: "Pick 1–2: idempotency/dedupe, retries + DLQ, preference/quiet-hours enforcement, rate limiting, prioritized queues, or handling flaky third-party gateways."
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
        {
            id: "req",
            name: "Requirements",
            description: "Multi-channel, preferences, reliability, prioritization captured.",
            maxScore: 4
        },
        {
            id: "pipeline",
            name: "Queue & workers",
            description: "Async queue + workers decoupling flaky gateways; burst absorption.",
            maxScore: 4
        },
        {
            id: "dedupe",
            name: "Idempotency",
            description: "Dedupe key prevents duplicate sends under at-least-once.",
            maxScore: 4
        },
        {
            id: "reliability",
            name: "Retries & DLQ",
            description: "Backoff retries + dead-letter queue for failures.",
            maxScore: 4
        },
        {
            id: "prefs",
            name: "Prefs & prioritization",
            description: "Preference/quiet-hours + rate limits + priority lanes.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const videoStreaming = {
    id: "cs-video-streaming",
    title: "Design a Video Streaming Service",
    difficulty: "hard",
    summary: "A YouTube/Netflix-style platform: upload, transcode, and stream video to millions. Dominated by transcoding pipelines, object storage, and CDN delivery with adaptive bitrate.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Two very different paths",
            body: `Video splits cleanly into an **upload/processing path** and a **playback path**. Upload: the raw file lands in object storage, then an async pipeline **transcodes** it into multiple resolutions/bitrates and segments it for streaming. Playback: the overwhelming read traffic is served from a **CDN**, with the player choosing quality dynamically. The two paths scale independently — heavy compute for processing, heavy bandwidth for delivery.`
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
                    "because CDNs require it for caching"
                ],
                answerIndex: 1,
                explanation: "Segmenting + multiple bitrates enables adaptive bitrate streaming: the client picks the best quality it can sustain each few seconds, avoiding stalls on slow networks and using full quality on fast ones. It costs more storage, not less."
            }
        },
        {
            kind: "prose",
            heading: "Delivery at scale",
            body: `Playback bandwidth dwarfs everything, so **CDN** is the core of the read path — segments and thumbnails are cached at the edge near viewers, and the origin (object storage) mostly serves cache fills. Metadata (titles, view counts, recommendations) lives in its own services/stores. Popular content is pushed to edges proactively; long-tail content is pulled on demand.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: upload video, transcode to multiple qualities, stream with adaptive bitrate, browse/search metadata, view counts. Non-functional: massive read bandwidth, durable storage, upload→available latency, global low-latency playback. Defer: recommendations, live streaming.",
        estimation: "Estimate uploads/day and average size → ingest + storage growth (with multiple transcoded copies). Estimate concurrent viewers × bitrate → egress bandwidth. Which dominates cost?",
        api: "Define upload (initiate/complete, likely chunked/resumable), a playback manifest endpoint, and metadata/search. What does the player fetch?",
        dataModel: "Model video metadata, the transcoded renditions/segments (in object storage), and view/stats. Where do manifests live?",
        highLevelDesign: "Show upload → object storage → transcoding pipeline (queue + workers) → segmented renditions → CDN; playback → manifest → CDN segments. Separate metadata services.",
        deepDives: "Pick 1–2: the transcoding pipeline, adaptive-bitrate segmenting (HLS/DASH), CDN strategy (push popular vs pull long-tail), resumable uploads, or view-count aggregation."
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
        {
            id: "req",
            name: "Requirements & scale",
            description: "Separated processing vs delivery; identified bandwidth/storage scale.",
            maxScore: 4
        },
        {
            id: "transcode",
            name: "Transcoding pipeline",
            description: "Async queue + workers producing multiple renditions/segments.",
            maxScore: 4
        },
        {
            id: "abr",
            name: "Adaptive bitrate",
            description: "Segmented multi-bitrate streaming (HLS/DASH) explained.",
            maxScore: 4
        },
        {
            id: "cdn",
            name: "CDN delivery",
            description: "CDN as the core read path; push/pull strategy; object-storage origin.",
            maxScore: 4
        },
        {
            id: "tradeoffs",
            name: "Tradeoffs",
            description: "Storage-for-quality, async views, or upload latency tradeoffs.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const cloudDrive = {
    id: "cs-cloud-drive",
    title: "Design a Cloud File Storage (Google Drive / Dropbox)",
    difficulty: "hard",
    summary: "Sync files across a user's devices with sharing and versioning. The heart is efficient sync: chunking, deduplication, and metadata that tracks every version.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Files, chunks, and metadata",
            body: `A cloud drive stores files and **syncs** them across devices. The trick to efficiency is splitting each file into **chunks**: only changed chunks are uploaded/downloaded, and identical chunks (across versions or users) are stored once (**deduplication**). File contents (chunks) live in object storage; a separate **metadata service** tracks the file tree, versions, chunk lists, and sharing.`
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
                    "it avoids needing metadata"
                ],
                answerIndex: 1,
                explanation: "Content-addressed chunks (hash → chunk) mean editing a large file re-uploads only the changed chunks, and duplicate chunks (versions, shared files) are stored once. That's the core of Dropbox-style efficiency."
            }
        },
        {
            kind: "prose",
            heading: "Sync and conflicts",
            body: `Each client watches for local changes and talks to a **sync/metadata service** that maintains the authoritative file tree and a change log. Clients pull changes since their last cursor (often via a long-poll/notification channel), download missing chunks, and reconcile. **Conflicts** (two devices edit offline) are resolved by versioning — keep both as conflicted copies rather than silently losing data. Sharing adds permission metadata on files/folders.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: upload/download, sync across devices, share with permissions, version history, restore. Non-functional: efficient sync (minimal transfer), durability (never lose files), consistency of the file tree, scale (users, files). Defer: real-time collaborative editing.",
        estimation: "Estimate users, files/user, avg file size, and daily changed bytes → upload/download bandwidth and storage (with dedup savings). How big is the metadata vs the content?",
        api: "Define upload (chunked), download, list changes since a cursor, share. What does a 'change' contain (path, version, chunk list)?",
        dataModel: "Model files/folders, versions, chunk lists (file → ordered chunk hashes), the chunk store (hash → blob), sharing/permissions, and per-device sync cursors.",
        highLevelDesign: "Show client → chunker → upload changed chunks to object storage + update metadata service (file tree, versions); other devices poll/notified → fetch changes → download missing chunks. Where's dedup enforced?",
        deepDives: "Pick 1–2: chunking + dedup, sync/change-feed + cursors, conflict resolution/versioning, sharing/permissions, or metadata scaling."
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
        {
            id: "req",
            name: "Requirements",
            description: "Sync efficiency, durability, versioning, sharing captured.",
            maxScore: 4
        },
        {
            id: "chunk",
            name: "Chunking & dedup",
            description: "Content-addressed chunks; transfer/store only what changed.",
            maxScore: 4
        },
        {
            id: "sync",
            name: "Sync & change feed",
            description: "Change log + per-device cursors + notifications for sync.",
            maxScore: 4
        },
        {
            id: "conflict",
            name: "Conflicts & versioning",
            description: "Versioned conflict resolution, no silent data loss.",
            maxScore: 4
        },
        {
            id: "split",
            name: "Metadata vs content split",
            description: "Content in object storage, metadata in a consistent store.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const metricsSystem = {
    id: "cs-metrics-monitoring",
    title: "Design a Metrics & Monitoring System",
    difficulty: "medium",
    summary: "Collect time-series metrics from thousands of hosts, store them efficiently, and power dashboards and alerts. A write-heavy ingestion + time-series storage + query problem.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Time series at scale",
            body: `A monitoring system ingests **metrics** — (metric name, tags, timestamp, value) points — from many sources, stores them as **time series**, and serves dashboards and alert evaluations. It's **write-heavy** (constant streams of points) with bursty reads (dashboard loads, alert checks). The data is append-only and its value decays with age, which shapes both storage (a time-series DB) and retention (downsample old data).`
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
                    "store metrics in a relational table with a row per point"
                ],
                answerIndex: 1,
                explanation: "Recent data is kept at high resolution; older data is rolled up (e.g. 1s → 1m → 1h averages) and raw points expire. This bounds storage while preserving long-term trends."
            }
        },
        {
            kind: "prose",
            heading: "Ingestion, storage, and alerting",
            body: `Agents push (or a collector scrapes) metrics into an ingestion tier, buffered by a **queue** to absorb bursts, then written to a **time-series database** optimized for high-cardinality appends and range/aggregate queries. A query layer powers dashboards; an **alerting** engine periodically evaluates rules (e.g. "error rate > X for 5m") against recent data and fires notifications. Cardinality (tag combinations) is the classic scaling pitfall.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: ingest metrics (name, tags, ts, value), query ranges/aggregations, dashboards, alerting rules. Non-functional: high write throughput, low-latency recent-data queries, retention/downsampling, availability. Defer: tracing/logs.",
        estimation: "Estimate hosts × metrics/host × points/min → write points/sec, and raw storage/day. How does downsampling change long-term storage?",
        api: "Define ingest (batch push), query (metric, tags, time range, aggregation, step), and alert-rule CRUD. What does a query return?",
        dataModel: "Model time series (series key = name+tags), points, downsampled rollups, and alert rules. Why not a plain relational row-per-point?",
        highLevelDesign: "Show agents → ingestion (queue) → time-series DB (+ rollup jobs); query layer → dashboards; alerting engine evaluating rules against recent data → notifications.",
        deepDives: "Pick 1–2: high-cardinality handling, downsampling/retention, write path + buffering, alert evaluation at scale, or query performance."
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
        {
            id: "req",
            name: "Requirements",
            description: "Write-heavy ingest, recent-query speed, retention, alerting captured.",
            maxScore: 4
        },
        {
            id: "tsdb",
            name: "Time-series storage",
            description: "Series model + append-only TSDB, not row-per-point relational.",
            maxScore: 4
        },
        {
            id: "retention",
            name: "Downsampling/retention",
            description: "Tiered resolution + expiry to bound storage.",
            maxScore: 4
        },
        {
            id: "ingest",
            name: "Ingestion path",
            description: "Queue-buffered high-throughput write path.",
            maxScore: 4
        },
        {
            id: "alerting",
            name: "Alerting & cardinality",
            description: "Rule evaluation + high-cardinality awareness.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const distributedCache = {
    id: "cs-distributed-cache",
    title: "Design a Distributed Cache",
    difficulty: "hard",
    summary: "A Redis/Memcached-style in-memory cache spread across many nodes: partition keys with consistent hashing, handle eviction and replication, and survive node failure.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Beyond a single cache node",
            body: `A single cache node runs out of memory and is a single point of failure. A **distributed cache** spreads keys across many nodes. The two core questions: **how are keys partitioned** across nodes (so any client finds the right node), and **what happens when a node is added or dies** (ideally minimal remapping). You built the two primitives for this earlier — an LRU cache and a consistent-hashing ring.`
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
                    "random assignment per request"
                ],
                answerIndex: 1,
                explanation: "With hash % N, changing N remaps almost every key (cache-miss storm). Consistent hashing only moves the keys near the changed node — exactly why distributed caches use it."
            }
        },
        {
            kind: "prose",
            heading: "Eviction, replication, and consistency",
            body: `Each node caps memory and **evicts** under pressure (LRU/LFU/TTL). For availability, replicate each partition (a primary + replicas) so a node failure doesn't lose the whole slice; on failure, promote a replica and let the ring re-route. Caches favor **availability and speed over strict consistency** — stale entries are acceptable and are bounded by TTL and invalidation. The hard operational parts are the **thundering herd** on a hot-key expiry and keeping the cache coherent with the source of truth.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: get/put/delete with TTL across a cluster; clients route to the right node. Non-functional: very low latency, high hit rate, horizontal scalability, availability under node failure, bounded staleness. Defer: cross-region.",
        estimation: "Estimate keys, avg value size → total memory and node count. Estimate QPS and per-node throughput. How much does replication add?",
        api: "Define get/put(ttl)/delete and how a client discovers which node owns a key. Client-side vs proxy routing?",
        dataModel: "Describe the ring (consistent hashing + virtual nodes), per-node store (hash map + eviction metadata), and replica placement.",
        highLevelDesign: "Show client → (ring lookup) → owning node (+ replicas); node add/remove reshapes the ring; eviction per node; failure → replica promotion. Where does invalidation happen?",
        deepDives: "Pick 1–2: consistent-hashing partitioning + rebalancing, eviction policy, replication + failover, hot-key/thundering-herd mitigation, or invalidation strategy."
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
        {
            id: "req",
            name: "Requirements",
            description: "Latency, hit rate, scale, availability, bounded staleness.",
            maxScore: 4
        },
        {
            id: "partition",
            name: "Partitioning",
            description: "Consistent hashing + virtual nodes; minimal remap on change.",
            maxScore: 4
        },
        {
            id: "eviction",
            name: "Eviction",
            description: "Per-node LRU/LFU/TTL to bound memory.",
            maxScore: 4
        },
        {
            id: "replication",
            name: "Replication & failover",
            description: "Replicas + promotion for availability.",
            maxScore: 4
        },
        {
            id: "hotkey",
            name: "Hot keys / herd",
            description: "Mitigated thundering herd / hot-key skew.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const rideSharing = {
    id: "cs-ride-sharing",
    title: "Design a Ride-Sharing Service (Uber / Nearby Drivers)",
    difficulty: "hard",
    summary: "Match riders to nearby drivers in real time. The crux is geospatial indexing of moving drivers plus low-latency matching and live location updates.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Finding what's nearby",
            body: `The heart of ride-sharing is: given a rider's location, quickly find **nearby available drivers**. Drivers are constantly moving, so their locations update every few seconds — a huge write stream — and "find nearby" must run in milliseconds. That's a **geospatial indexing** problem: you can't scan all drivers per request.`
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
                    "a single global lock"
                ],
                answerIndex: 1,
                explanation: "Geohashing (bucket the world into cells and index drivers by cell) or a quadtree lets a proximity query examine only the rider's cell and its neighbors, not every driver."
            }
        },
        {
            kind: "prose",
            heading: "Location updates and matching",
            body: `Drivers stream location updates into a **location service** backed by a geospatial index (often in-memory, e.g. Redis geo/geohash buckets) that's updated continuously. A **matching service** takes a ride request, queries nearby available drivers, ranks them (ETA, rating), and dispatches an offer; on accept, it creates the trip and streams live locations to the rider. Trip records and payments live in durable stores; the hot path (location + matching) is optimized for latency.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: drivers publish location, riders request a ride, match to a nearby driver, track the trip live. Non-functional: real-time (low match latency), high write rate of locations, availability, geographic scale. Defer: pricing, payments detail.",
        estimation: "Estimate active drivers × location updates/min → write QPS; ride requests/sec. How big is the geo index and does it fit in memory?",
        api: "Define updateLocation (driver), requestRide (rider), and a live trip/location stream. What does a match response contain?",
        dataModel: "Model driver locations in a geospatial index (geohash/quadtree cells), driver availability, trips, and riders. What's in-memory vs durable?",
        highLevelDesign: "Show drivers → location service (geo index, continuously updated); rider → matching service (query nearby → rank → dispatch → create trip → stream locations). Separate trip/payment stores.",
        deepDives: "Pick 1–2: geospatial indexing (geohash vs quadtree), high-rate location ingestion, matching/dispatch, live tracking, or sharding by region."
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
        {
            id: "req",
            name: "Requirements & scale",
            description: "Real-time matching + high location write rate identified.",
            maxScore: 4
        },
        {
            id: "geo",
            name: "Geospatial index",
            description: "Geohash/quadtree so proximity queries avoid full scans.",
            maxScore: 4
        },
        {
            id: "ingest",
            name: "Location ingestion",
            description: "In-memory, high-rate updates; not durably persisting every ping.",
            maxScore: 4
        },
        {
            id: "match",
            name: "Matching & dispatch",
            description: "Query→rank→dispatch with race/reservation handling.",
            maxScore: 4
        },
        {
            id: "scale",
            name: "Sharding/tracking",
            description: "Regional sharding and live trip tracking.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const bookingSystem = {
    id: "cs-booking-system",
    title: "Design a Ticket Booking System (Ticketmaster)",
    difficulty: "hard",
    summary: "Sell limited inventory (seats) under massive concurrent demand without overselling. The crux is reservation locking and consistency at a flash-sale scale.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Never sell the same seat twice",
            body: `Booking sells **finite, unique inventory** — a specific seat can go to exactly one buyer. Unlike most systems where eventual consistency is fine, here **overselling is unacceptable**, and demand is extremely **spiky** (tickets drop and millions rush at once). The core mechanic is a **hold/reserve** step: a seat is temporarily locked for a user while they pay, then either confirmed or released on timeout.`
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
                    "cache seat availability aggressively"
                ],
                answerIndex: 1,
                explanation: "A short TTL hold (a conditional/atomic update or lock on the seat) gives one user exclusive claim during checkout; if they don't pay in time it's released. This enforces no-oversell under contention."
            }
        },
        {
            kind: "prose",
            heading: "Handling the stampede",
            body: `Flash sales create thundering herds on popular events. Techniques: a **virtual waiting room / queue** that admits users at a controlled rate; caching read-only event/seat-map data heavily; and keeping the **transactional** seat-state in a strongly-consistent store (relational with row locks, or atomic conditional updates). Payments run through an idempotent flow so a retry never double-charges or double-books.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: browse events/seats, hold a seat, pay to confirm, release on timeout. Non-functional: NO overselling (strong consistency on inventory), survive huge spikes, low latency for browsing. Defer: dynamic pricing.",
        estimation: "Estimate peak concurrent users at a hot drop, seats per event, and read (browse) vs write (hold/confirm) rates. Which part needs strong consistency?",
        api: "Define browse/seatmap (cacheable), hold(seatId) with TTL, confirm(payment), release. What guarantees does hold make?",
        dataModel: "Model events, seats with state (available/held/booked), holds (with expiry + owner), and orders. Which store is strongly consistent?",
        highLevelDesign: "Show read path (cached seat maps) vs write path (hold → pay → confirm) on a consistent inventory store; a waiting room throttles entry; payment is idempotent.",
        deepDives: "Pick 1–2: reservation locking / no-oversell, virtual waiting room for spikes, hold expiry/cleanup, payment idempotency, or read/write path separation."
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
        {
            id: "req",
            name: "Requirements",
            description: "No-oversell strong consistency + spike survival identified.",
            maxScore: 4
        },
        {
            id: "hold",
            name: "Reservation locking",
            description: "Atomic hold/TTL that prevents double-selling a seat.",
            maxScore: 4
        },
        {
            id: "spike",
            name: "Spike handling",
            description: "Waiting room/queue + heavy read caching.",
            maxScore: 4
        },
        {
            id: "expiry",
            name: "Hold expiry",
            description: "TTL + release of unpaid holds back to the pool.",
            maxScore: 4
        },
        {
            id: "payment",
            name: "Payment idempotency",
            description: "Idempotent confirm; safe retries.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const paymentSystem = {
    id: "cs-payment-system",
    title: "Design a Payment System",
    difficulty: "hard",
    summary: "Move money correctly: charge, record, and reconcile transactions with strict consistency, idempotency, and an auditable ledger. Correctness beats everything.",
    walkthroughSections: [
        {
            kind: "prose",
            heading: "Correctness above all",
            body: `A payment system's non-negotiable is **correctness** — never lose money, never double-charge, always reconcile. It orchestrates external **payment providers** (card networks, banks) which are slow, flaky, and asynchronous, so the design centers on **idempotency**, a durable **ledger**, and careful handling of partial failures. Availability matters, but consistency of money state wins every tradeoff.`
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
                    "block all retries"
                ],
                answerIndex: 1,
                explanation: "An idempotency key per payment attempt lets the server recognize a retry and return the original outcome instead of creating a second charge — essential when the network makes 'did it go through?' ambiguous."
            }
        },
        {
            kind: "prose",
            heading: "Ledger and reconciliation",
            body: `Money movement is recorded in an append-only, **double-entry ledger** (every debit has a matching credit) — the source of truth and audit trail. Because provider calls can fail after you've recorded intent, transactions move through explicit **states** (pending → succeeded/failed) and are made durable before calling out. A background **reconciliation** job compares your ledger against provider settlement reports to catch and repair discrepancies. Sagas/compensating actions handle multi-step flows (charge, then payout) without distributed transactions.`
        }
    ],
    designTemplate: template({
        requirements: "Functional: charge a payment method, record the transaction, handle async provider callbacks, refunds, report status. Non-functional: strong consistency/correctness, idempotency, auditability, high durability. Defer: multi-currency FX detail.",
        estimation: "Estimate transactions/day → write QPS and ledger growth. Note this is correctness-bound, not throughput-bound — what does that imply for storage choice?",
        api: "Define charge (with idempotency key), refund, get status, and a provider webhook/callback. What does charge return before the provider confirms?",
        dataModel: "Model payments (with state machine), a double-entry ledger (append-only), idempotency keys, and provider references. Which store is strongly consistent?",
        highLevelDesign: "Show: client → payment service (dedupe on idempotency key → write pending ledger entry → call provider → update state on callback); reconciliation job vs provider reports; refunds.",
        deepDives: "Pick 1–2: idempotency, the double-entry ledger + states, reconciliation, handling async provider callbacks/partial failure, or sagas for multi-step flows."
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
        {
            id: "req",
            name: "Requirements",
            description: "Correctness/consistency-first framing; auditability, durability.",
            maxScore: 4
        },
        {
            id: "idempotency",
            name: "Idempotency",
            description: "Idempotency keys make retries safe (no double-charge).",
            maxScore: 4
        },
        {
            id: "ledger",
            name: "Ledger & states",
            description: "Double-entry append-only ledger + payment state machine.",
            maxScore: 4
        },
        {
            id: "async",
            name: "Async providers",
            description: "Persist-before-call, webhook-driven state, partial-failure handling.",
            maxScore: 4
        },
        {
            id: "recon",
            name: "Reconciliation",
            description: "Independent reconciliation against provider reports.",
            maxScore: 4
        }
    ],
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].caseStudy
};
const sdCaseStudies = [
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
    paymentSystem
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/systemdesign/certification.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SD_CERT_BADGE_ID",
    ()=>SD_CERT_BADGE_ID,
    "SD_CERT_DRAW",
    ()=>SD_CERT_DRAW,
    "SD_CERT_MINUTES",
    ()=>SD_CERT_MINUTES,
    "SD_CERT_MODULE_ID",
    ()=>SD_CERT_MODULE_ID,
    "sdCertificationModule",
    ()=>sdCertificationModule,
    "sdExamQuestionIds",
    ()=>sdExamQuestionIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/foundations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/foundations2.ts [app-client] (ecmascript)");
;
;
const S = "sd-s4";
const sdExamQuestionIds = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdFoundationMcqs"].map((q)=>q.id),
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdFoundationMcqs2"].map((q)=>q.id)
];
const SD_CERT_MODULE_ID = "m-sd-certification";
const SD_CERT_BADGE_ID = "badge-sd-certified";
const SD_CERT_DRAW = 10;
const SD_CERT_MINUTES = 15;
const sdCertificationModule = {
    id: SD_CERT_MODULE_ID,
    stageId: S,
    title: "System Design Certification",
    kind: "lesson",
    summary: "The capstone: a timed exam over the System Design foundations. Pass to earn a tiered certification badge.",
    lessonSections: [
        {
            heading: "What the certification covers",
            body: `The System Design certification is a **timed, multiple-choice exam** drawn from everything in the Foundations stage — the design framework, estimation, networking, core building blocks, API design, messaging, consistency, and reliability. It's the fastest way to confirm the vocabulary and tradeoffs are second nature before you walk into a real design round.

The best preparation is to work the **Foundations** lessons and the **Case Studies** first, then attempt a few **mock design interviews**. When you're ready, start the exam from the button below (or the "System Design Certification" card on the Learn page).`
        },
        {
            heading: "How scoring works",
            body: `Each attempt draws **${SD_CERT_DRAW} questions** at random with a **${SD_CERT_MINUTES}-minute** limit. Your score maps to a tiered badge, exactly like the DSA module tests:

- Bronze ≥ 60%, Silver ≥ 75%, Gold ≥ 90%, Platinum = 100%.

Your **best tier is always kept**, and you can retake to improve. Nothing here is hard-locked — you can attempt the exam anytime, but you'll do best after the foundations and a case study or two.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    badgeId: SD_CERT_BADGE_ID,
    prerequisiteModuleIds: [
        "m-sd-reliability"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/systemdesign/foundations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sdFoundationMcqs",
    ()=>sdFoundationMcqs,
    "sdFoundationModules",
    ()=>sdFoundationModules
]);
const S = "sd-s1";
const sdFoundationMcqs = [
    {
        id: "sd-f-framework-order",
        kind: "mcq",
        prompt: "In a design interview, the step that should come *first* is:",
        options: [
            "sketching the database schema",
            "clarifying functional and non-functional requirements",
            "choosing a message queue",
            "estimating storage"
        ],
        answerIndex: 1,
        explanation: "You can't design the right system until you know what it must do and its scale/latency/consistency targets. Requirements gate every later decision."
    },
    {
        id: "sd-f-nonfunctional",
        kind: "mcq",
        prompt: "Which of these is a NON-functional requirement?",
        options: [
            "users can upload a photo",
            "the feed shows posts from people you follow",
            "99.9% availability with p99 latency under 200 ms",
            "a user can delete their account"
        ],
        answerIndex: 2,
        explanation: "Non-functional requirements describe *how well* the system behaves — availability, latency, durability, scale — rather than a specific feature."
    },
    {
        id: "sd-f-estimation-qps",
        kind: "mcq",
        prompt: "1 million write requests evenly spread over a day is roughly how many writes per second?",
        options: [
            "~12 / s",
            "~120 / s",
            "~1,200 / s",
            "~12,000 / s"
        ],
        answerIndex: 0,
        explanation: "A day is ~86,400 s; 1,000,000 / 86,400 ≈ 11.6/s. A handy rule: 1M/day ≈ 12/s, 1B/day ≈ 12,000/s."
    },
    {
        id: "sd-f-estimation-peak",
        kind: "mcq",
        prompt: "Why do we multiply the average request rate by a 'peak factor' (often 2–10×)?",
        options: [
            "to account for traffic bursts and daily peaks the average hides",
            "to convert bytes to bits",
            "because storage grows over time",
            "to add a safety margin for disk failures"
        ],
        answerIndex: 0,
        explanation: "Real traffic isn't uniform — it spikes at busy hours. Capacity must handle the peak, not the daily average."
    },
    {
        id: "sd-f-net-tcp-udp",
        kind: "mcq",
        prompt: "You need ordered, reliable, connection-oriented delivery. You'd choose:",
        options: [
            "UDP",
            "TCP",
            "ICMP",
            "IP directly"
        ],
        answerIndex: 1,
        explanation: "TCP provides ordering, retransmission, and flow/congestion control. UDP is faster but unreliable and unordered — good for streaming/gaming where a dropped packet is fine."
    },
    {
        id: "sd-f-net-lb",
        kind: "mcq",
        prompt: "The main purpose of a load balancer is to:",
        options: [
            "encrypt traffic end to end",
            "distribute requests across multiple servers and route around unhealthy ones",
            "store session data",
            "cache database rows"
        ],
        answerIndex: 1,
        explanation: "A load balancer spreads load across a pool and health-checks members, enabling horizontal scaling and higher availability."
    },
    {
        id: "sd-f-cache-write",
        kind: "mcq",
        prompt: "A write-through cache differs from write-back in that it:",
        options: [
            "never stores writes",
            "writes to the cache and the backing store synchronously",
            "only caches reads",
            "loses data on every restart"
        ],
        answerIndex: 1,
        explanation: "Write-through updates cache and database together (durable, slightly slower writes). Write-back updates the cache first and flushes later (faster, risk of loss on crash)."
    },
    {
        id: "sd-f-cap",
        kind: "mcq",
        prompt: "Under the CAP theorem, during a network partition a system must sacrifice:",
        options: [
            "either consistency or availability",
            "durability",
            "latency",
            "partition tolerance"
        ],
        answerIndex: 0,
        explanation: "Partitions happen in any distributed system, so you keep P. When one occurs you must choose: reject/stall to stay consistent (CP), or answer with possibly-stale data to stay available (AP)."
    },
    {
        id: "sd-f-sql-nosql",
        kind: "mcq",
        prompt: "A key reason to reach for a NoSQL store over a relational database is:",
        options: [
            "you need multi-row ACID transactions and complex joins",
            "you need to scale writes horizontally with a flexible/denormalized schema",
            "you want foreign-key constraints enforced",
            "your data is small and highly relational"
        ],
        answerIndex: 1,
        explanation: "NoSQL stores trade rich relational features for horizontal write scaling and schema flexibility. If you need joins and strong multi-row transactions, relational is usually the better fit."
    }
];
const frameworkModule = {
    id: "m-sd-framework",
    stageId: S,
    title: "The Design Interview Framework",
    kind: "lesson",
    summary: "A repeatable six-step structure for any system design question — from requirements to deep dives — so you never stare at a blank whiteboard.",
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
6. **Deep dives** — pick the 1–2 hardest parts and go deep (bottlenecks, scaling, failure modes).`
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

Write these down — they become the yardstick you justify every later decision against.`
        },
        {
            heading: "Driving the rest of the conversation",
            body: `Once requirements are pinned, the **estimation** tells you whether one box suffices or you need sharding and caching. The **API** forces you to name the operations precisely. The **data model** exposes access patterns (which then justify your storage choice). Only then draw the **high-level diagram**.

Finally, **deep dives** are where you earn the offer: don't try to detail everything. Say "the interesting parts here are how we scale the timeline fan-out and how we keep redirects fast" and go deep on those. Narrate **tradeoffs** out loud — every choice buys something and costs something, and showing you see both sides matters more than any single "right" answer.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-framework-order",
        "sd-f-nonfunctional"
    ],
    prerequisiteModuleIds: []
};
const estimationModule = {
    id: "m-sd-estimation",
    stageId: S,
    title: "Back-of-the-Envelope Estimation",
    kind: "lesson",
    summary: "Sizing a system with quick math — QPS, storage, and bandwidth — plus the latency numbers every engineer should know.",
    lessonSections: [
        {
            heading: "The numbers to memorize",
            body: `Estimation isn't about precision — it's about being right within an order of magnitude, fast. Start from a few anchors:

- **Time:** 1 day ≈ **86,400 s** (round to ~100k). So **1M/day ≈ 12/s**, **1B/day ≈ 12,000/s**.
- **Powers of two → bytes:** 2¹⁰ = 1 KB, 2²⁰ = 1 MB, 2³⁰ = 1 GB, 2⁴⁰ = 1 TB.
- **Latency ballpark:** memory read ~100 ns, SSD random read ~100 µs, network round trip within a datacenter ~0.5 ms, disk seek ~10 ms, cross-continent round trip ~100 ms.

The gap between memory (ns), SSD (µs), and network/disk (ms) is what motivates caching and keeping hot data close.`
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

Those three numbers immediately tell you: object storage (not a relational blob column), a CDN for read bandwidth, and sharded metadata.`
        },
        {
            heading: "Peak vs. average, and sanity checks",
            body: `Always convert an **average** rate to a **peak** rate with a factor (2–10× depending on how bursty the traffic is) — capacity must survive the busy hour, not the daily mean.

Keep the math legible: round aggressively, carry units, and state assumptions ("assume 100:1 read/write"). If a number looks absurd (25 GB/s from a single server), that's the point — it reveals where you need a CDN, cache, or shard. Estimation's job isn't the exact figure; it's **surfacing the bottleneck** that drives the architecture.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-estimation-qps",
        "sd-f-estimation-peak"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const networkingModule = {
    id: "m-sd-networking",
    stageId: S,
    title: "Networking & Protocols",
    kind: "lesson",
    summary: "How bytes actually move: DNS, TCP vs UDP, HTTP, TLS, load balancers, and CDNs — the plumbing under every design.",
    lessonSections: [
        {
            heading: "From URL to bytes",
            body: `When a client hits your service, a chain of infrastructure runs first:

1. **DNS** resolves the hostname to an IP (often to the nearest edge/load balancer via geo/anycast routing). DNS answers are cached with a TTL.
2. **TCP** opens a connection (the three-way handshake). **TLS** then negotiates encryption on top.
3. **HTTP** requests ride the connection. HTTP/2 and HTTP/3 multiplex many requests over one connection to cut round trips.

Each hop adds latency, which is why we cache DNS, reuse connections (keep-alive), and push content to the edge.`
        },
        {
            heading: "TCP vs. UDP, and where each fits",
            body: `**TCP** is connection-oriented and reliable: it guarantees ordered delivery, retransmits lost packets, and manages flow/congestion control. Use it when correctness matters — web pages, APIs, file transfer.

**UDP** is connectionless and best-effort: no ordering, no retransmission, far less overhead. Use it when **timeliness beats completeness** — live video/voice, gaming, DNS queries — where a late packet is worse than a lost one.

\`\`\`text
Need every byte, in order?      → TCP
Need it *now*, drops tolerable?  → UDP
\`\`\`

Above the transport layer, **HTTP** is the request/response workhorse; **WebSockets** upgrade an HTTP connection to a persistent, bidirectional channel for push (chat, live feeds).`
        },
        {
            heading: "Load balancers and CDNs",
            body: `A **load balancer** sits in front of a server pool and spreads requests across it (round-robin, least-connections, or hashing), while **health-checking** members so traffic avoids dead nodes. This is what makes horizontal scaling and zero-downtime deploys possible. Load balancing happens at **L4** (fast, by IP/port) or **L7** (smarter, by URL/headers/cookies).

A **CDN** (content delivery network) caches static and cacheable content at edge locations near users. It slashes latency and offloads huge read bandwidth from your origin — essential for images, video, JS/CSS, and anything read far more than it's written. Together, LB + CDN handle the "read-heavy, globally distributed" reality of most large systems.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-net-tcp-udp",
        "sd-f-net-lb"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const buildingBlocksModule = {
    id: "m-sd-building-blocks",
    stageId: S,
    title: "Core Building Blocks",
    kind: "lesson",
    summary: "Caching, databases (SQL vs NoSQL), replication and sharding, and the CAP tradeoff — the components you'll wire together in every design.",
    lessonSections: [
        {
            heading: "Caching",
            body: `A **cache** keeps hot data in fast storage (memory) close to where it's read, absorbing load off slower backing stores. It's the single highest-leverage tool for read-heavy systems.

- **Where:** client, CDN (edge), a shared in-memory tier (Redis/Memcached), or in-process.
- **Write policy:** **write-through** (write cache + DB together — durable, slightly slower) vs **write-back** (write cache, flush later — fast, risk of loss on crash).
- **Eviction:** LRU/LFU/TTL decide what to drop when full.
- **The hard parts:** **invalidation** (keeping the cache consistent with the source) and the **thundering herd** when a hot key expires and every request stampedes the DB.

Cache what's read often and changes rarely; measure your **hit rate**.`
        },
        {
            heading: "Databases: relational vs. NoSQL",
            body: `**Relational (SQL)** databases give you a fixed schema, **ACID transactions**, joins, and strong consistency — ideal when data is highly relational and correctness is paramount (payments, orders).

**NoSQL** is an umbrella for stores that trade some of that for **horizontal scale** and **flexible schemas**:

- **Key-value** (DynamoDB, Redis) — simple, fast lookups by key.
- **Document** (MongoDB) — nested JSON-like records.
- **Wide-column** (Cassandra) — huge write throughput, tunable consistency.
- **Graph** (Neo4j) — relationship-heavy traversals.

Pick by **access pattern**: design the queries first, then choose the store that serves them cheaply. "SQL until it hurts, then scale out" is a reasonable default.`
        },
        {
            heading: "Replication, sharding & CAP",
            body: `To scale and survive failure you **replicate** (copies of data across nodes) and **shard** (split data across nodes by a key).

- **Replication** improves read throughput and availability. **Leader–follower** sends writes to a leader and reads to followers (risking stale reads); **multi-leader/leaderless** accept writes anywhere (risking conflicts).
- **Sharding** partitions data (by hash or range) so each node holds a slice. The challenge is a good **shard key** that spreads load without creating hotspots, plus rebalancing as you grow (consistent hashing helps).

The **CAP theorem** frames the core tradeoff: during a **network partition** you must choose **consistency** (reject or stall so no one reads stale data — CP) or **availability** (keep serving, possibly-stale data — AP). Partition tolerance isn't optional in a distributed system, so real designs pick where on the C↔A spectrum each piece of data lives.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-cache-write",
        "sd-f-cap",
        "sd-f-sql-nosql"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const sdFoundationModules = [
    frameworkModule,
    estimationModule,
    networkingModule,
    buildingBlocksModule
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/systemdesign/foundations2.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sdFoundationMcqs2",
    ()=>sdFoundationMcqs2,
    "sdFoundationModules2",
    ()=>sdFoundationModules2
]);
const S = "sd-s1";
const sdFoundationMcqs2 = [
    {
        id: "sd-f-idempotent",
        kind: "mcq",
        prompt: "An idempotent API operation is one where:",
        options: [
            "it can only be called once",
            "calling it multiple times has the same effect as calling it once",
            "it never modifies data",
            "it always returns a different result"
        ],
        answerIndex: 1,
        explanation: "Idempotency means retries are safe — a duplicate request (from a client retry or network glitch) doesn't double-apply. PUT and DELETE are naturally idempotent; POST usually needs an idempotency key."
    },
    {
        id: "sd-f-pagination",
        kind: "mcq",
        prompt: "For a large, frequently-changing list, cursor (keyset) pagination is preferred over offset pagination because:",
        options: [
            "it is simpler to implement",
            "it stays correct and efficient as items are inserted/deleted, avoiding skipped/duplicated rows",
            "it allows jumping to arbitrary page numbers",
            "it never needs an index"
        ],
        answerIndex: 1,
        explanation: "OFFSET scans and discards rows (slow for deep pages) and shifts when data changes. A cursor anchored to a stable key gives stable, index-friendly paging."
    },
    {
        id: "sd-f-queue-decouple",
        kind: "mcq",
        prompt: "The primary benefit of putting a message queue between a producer and consumer is:",
        options: [
            "stronger consistency",
            "decoupling and buffering — the producer isn't blocked and load spikes are absorbed",
            "lower storage cost",
            "eliminating the need for a database"
        ],
        answerIndex: 1,
        explanation: "A queue lets the producer hand off work and move on; the consumer processes at its own pace, and bursts are smoothed instead of overwhelming downstream services."
    },
    {
        id: "sd-f-delivery",
        kind: "mcq",
        prompt: "Because exactly-once delivery is hard, most queues offer at-least-once. The consumer should therefore:",
        options: [
            "ignore duplicate messages by crashing",
            "be idempotent so reprocessing a duplicate is harmless",
            "process messages out of order",
            "acknowledge before processing"
        ],
        answerIndex: 1,
        explanation: "At-least-once means a message may be redelivered (e.g. after a failed ack). An idempotent consumer — often via a dedupe key — makes that safe."
    },
    {
        id: "sd-f-eventual",
        kind: "mcq",
        prompt: "Eventual consistency means:",
        options: [
            "reads never return stale data",
            "if writes stop, all replicas converge to the same value given enough time",
            "there is only one copy of the data",
            "writes are rejected during partitions"
        ],
        answerIndex: 1,
        explanation: "Replicas may briefly disagree, but absent new writes they converge. It's the AP choice — high availability at the cost of possibly-stale reads."
    },
    {
        id: "sd-f-quorum",
        kind: "mcq",
        prompt: "In a quorum system with N replicas, strong consistency is guaranteed when:",
        options: [
            "R + W > N (read and write quorums overlap)",
            "R = W = 1",
            "R + W = N",
            "N is even"
        ],
        answerIndex: 0,
        explanation: "If the read quorum and write quorum overlap (R + W > N), every read sees at least one replica that has the latest write."
    },
    {
        id: "sd-f-slo",
        kind: "mcq",
        prompt: "An SLO (service level objective) is:",
        options: [
            "a legal contract with financial penalties",
            "an internal target for a reliability metric, e.g. 99.9% of requests under 300 ms",
            "the maximum number of servers",
            "a type of load balancer"
        ],
        answerIndex: 1,
        explanation: "An SLO is the target you hold yourselves to (measured against SLIs). An SLA is the external contract; SLOs are usually stricter to leave headroom."
    },
    {
        id: "sd-f-redundancy",
        kind: "mcq",
        prompt: "Eliminating single points of failure is achieved primarily through:",
        options: [
            "faster CPUs",
            "redundancy — multiple instances across independent failure domains with automatic failover",
            "a bigger cache",
            "stronger passwords"
        ],
        answerIndex: 1,
        explanation: "If any one node/rack/zone can take the system down, it's a SPOF. Redundant instances spread across failure domains, with health checks and failover, keep the system up when one dies."
    }
];
const apiDesignModule = {
    id: "m-sd-api-design",
    stageId: S,
    title: "API Design",
    kind: "lesson",
    summary: "Designing the contract clients depend on — REST vs RPC, idempotency, pagination, versioning, and rate limiting.",
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

**gRPC** (binary, HTTP/2, schema-first) shines for low-latency internal service-to-service calls; **GraphQL** lets clients fetch exactly the fields they need, useful for varied front-ends. Pick REST for public simplicity, gRPC for internal performance, GraphQL for flexible client queries.`
        },
        {
            heading: "Idempotency, pagination, and errors",
            body: `Three details separate a robust API from a fragile one:

- **Idempotency** — retries are inevitable, so a repeated call must not double-charge or double-create. GET/PUT/DELETE are naturally idempotent; make POST safe with an **idempotency key** the server dedupes on.
- **Pagination** — never return an unbounded list. **Cursor/keyset** pagination (anchor on a stable sort key) stays correct and fast as data changes, unlike \`OFFSET\`, which scans-and-skips and shifts under inserts.
- **Errors & status codes** — use HTTP semantics (4xx client, 5xx server), return structured error bodies, and make failures actionable.`
        },
        {
            heading: "Evolving without breaking",
            body: `APIs are forever, so plan for change. **Versioning** (\`/v1/…\` or headers) lets you ship breaking changes without stranding old clients. Prefer **additive, backward-compatible** changes: add optional fields rather than repurposing existing ones.

Protect the service with **rate limiting** (per client/key) to prevent abuse and preserve fairness, and document limits in response headers. Together — clear resources, idempotent writes, bounded/cursor pagination, versioning, and rate limits — make an API that scales in usage *and* in the number of teams that depend on it.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-idempotent",
        "sd-f-pagination"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const messagingModule = {
    id: "m-sd-messaging",
    stageId: S,
    title: "Async Processing & Messaging",
    kind: "lesson",
    summary: "Queues and pub/sub for decoupling services — delivery guarantees, backpressure, and idempotent consumers.",
    lessonSections: [
        {
            heading: "Why go asynchronous",
            body: `Not every request needs an answer *right now*. Sending a welcome email, transcoding a video, or updating a search index can happen **after** you've told the user "got it." Moving that work off the request path makes the user-facing call fast and resilient.

A **message queue** (SQS, RabbitMQ) sits between a **producer** and one or more **consumers**. The producer enqueues a task and returns immediately; consumers pull and process at their own pace. This buys three things:

- **Decoupling** — producer and consumer scale and fail independently.
- **Buffering** — a traffic spike fills the queue instead of crashing downstream.
- **Retries** — a failed job goes back on the queue (or a dead-letter queue) rather than being lost.`
        },
        {
            heading: "Queues vs. pub/sub, and delivery guarantees",
            body: `A **queue** delivers each message to *one* consumer in a group — good for distributing work. **Pub/sub** (Kafka topics, SNS) fans a message out to *many* independent subscribers — good when several systems react to the same event (order placed → email, analytics, inventory).

**Delivery semantics** matter:

- **At-most-once** — may drop messages (rare).
- **At-least-once** — the common default; a message may be **redelivered**, so consumers must be **idempotent** (dedupe by message id).
- **Exactly-once** — very hard end-to-end; usually approximated with at-least-once + idempotent processing.`
        },
        {
            heading: "Backpressure and ordering",
            body: `When producers outrun consumers, the queue grows. **Backpressure** strategies keep the system healthy: scale consumers out, shed or throttle load, or let the queue absorb the burst if it's temporary. Watch **queue depth** and **consumer lag** as key signals.

**Ordering** is often only guaranteed within a partition/shard (e.g. per-key in Kafka). If global ordering matters, you pay for it in throughput — so design so that only *related* events need order (per user, per entity), and make consumers tolerant of reordering elsewhere.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-queue-decouple",
        "sd-f-delivery"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const consistencyModule = {
    id: "m-sd-consistency",
    stageId: S,
    title: "Consistency & Replication",
    kind: "lesson",
    summary: "How replicas stay in sync — strong vs eventual consistency, quorums, and the read/write tradeoffs.",
    lessonSections: [
        {
            heading: "A spectrum, not a switch",
            body: `Once data lives on more than one node, "is every copy the same right now?" becomes a real question. Consistency is a **spectrum**:

- **Strong consistency** — every read reflects the latest write. Simple to reason about, but needs coordination that costs latency and availability (the CP corner of CAP).
- **Eventual consistency** — replicas may briefly disagree but **converge** once writes stop. High availability and low latency (the AP corner), at the cost of possibly-stale reads.

Between them sit useful middle grounds like **read-your-writes** (you always see your own updates) and **monotonic reads** (you never see time go backwards).`
        },
        {
            heading: "Replication topologies",
            body: `**Leader–follower** (primary–replica) sends all writes to a leader that streams them to followers. Reads can hit followers to scale throughput — but a follower may lag, so those reads can be stale. Failover promotes a follower when the leader dies.

**Multi-leader** and **leaderless** (Dynamo-style) accept writes on multiple nodes for higher availability and write scaling, at the cost of **conflict resolution** (last-write-wins, vector clocks, or CRDTs).

Choose per data type: a bank balance wants strong/leader-based; a "likes" counter is fine eventually consistent.`
        },
        {
            heading: "Quorums",
            body: `Leaderless systems tune consistency with **quorums**. With **N** replicas, a write waits for **W** acks and a read queries **R** replicas. When **R + W > N**, the read and write sets overlap, so every read sees the latest write — strong consistency.

\`\`\`text
N = 3
W = 2, R = 2  ->  R + W = 4 > 3  -> strongly consistent, tolerates 1 node down
W = 1, R = 1  ->  fast, highly available, but reads may be stale
\`\`\`

The knobs let you trade latency and availability against freshness, per operation. That flexibility — picking the guarantee each piece of data actually needs — is the heart of distributed data design.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-eventual",
        "sd-f-quorum"
    ],
    prerequisiteModuleIds: [
        "m-sd-building-blocks"
    ]
};
const reliabilityModule = {
    id: "m-sd-reliability",
    stageId: S,
    title: "Reliability & Observability",
    kind: "lesson",
    summary: "Keeping systems up and knowing when they're not — redundancy, failover, SLAs/SLOs, and the three pillars of observability.",
    lessonSections: [
        {
            heading: "Designing for failure",
            body: `At scale, **failure is normal** — disks die, nodes reboot, networks partition. Reliable systems assume it and degrade gracefully.

- **Eliminate single points of failure** with **redundancy**: run multiple instances across independent **failure domains** (racks, availability zones, regions) with health checks and automatic **failover**.
- **Contain failures** so one bad dependency doesn't cascade: **timeouts**, **retries with backoff + jitter**, **circuit breakers** (stop hammering a sick service), and **bulkheads** (isolate resource pools).
- **Degrade gracefully**: serve stale cache, drop non-essential features, or shed load rather than fall over entirely.`
        },
        {
            heading: "Measuring reliability",
            body: `You can't promise what you don't measure. The vocabulary:

- **SLI** (indicator) — a measured metric, e.g. the fraction of requests under 300 ms.
- **SLO** (objective) — your internal target for an SLI, e.g. 99.9% under 300 ms over 30 days.
- **SLA** (agreement) — the external, contractual promise (usually looser than the SLO to leave headroom).

Availability is often quoted in "nines": **99.9%** ≈ 43 min/month of downtime, **99.99%** ≈ 4 min/month. Each extra nine costs real engineering — pick the level the product actually needs. An **error budget** (1 − SLO) makes the reliability-vs-velocity tradeoff explicit.`
        },
        {
            heading: "The three pillars of observability",
            body: `When something breaks at 3 a.m., observability is how you find out *why*:

- **Logs** — discrete, timestamped events; great for details, expensive at volume.
- **Metrics** — cheap numeric time series (QPS, latency percentiles, error rate, queue depth) for dashboards and alerts.
- **Traces** — follow one request across services to locate the slow or failing hop.

Alert on **symptoms users feel** (error rate, latency) rather than every internal blip, and watch p99 latency, not just averages — the tail is where users hurt. Redundancy keeps you up; observability keeps you honest.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    complexityQuestionIds: [
        "sd-f-slo",
        "sd-f-redundancy"
    ],
    prerequisiteModuleIds: [
        "m-sd-framework"
    ]
};
const sdFoundationModules2 = [
    apiDesignModule,
    messagingModule,
    consistencyModule,
    reliabilityModule
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/systemdesign/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerSystemDesign",
    ()=>registerSystemDesign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/foundations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/foundations2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$labs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/labs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$labs2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/labs2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$casestudies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/casestudies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/systemdesign/certification.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
function registerSystemDesign() {
    [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdFoundationMcqs"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdFoundationMcqs2"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerComplexityQuestion"]);
    [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdFoundationModules"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$foundations2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdFoundationModules2"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$labs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdLabModules"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$labs2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdLabModules2"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$certification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdCertificationModule"]
    ].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModule"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$systemdesign$2f$casestudies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdCaseStudies"].forEach(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCaseStudy"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/systemdesign/labs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sdLabModules",
    ()=>sdLabModules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
const S = "sd-s2";
/*
 * System Design — Build the Blocks (Stage sd-s2). Runnable BUILD LABS: implement
 * a core infrastructure primitive and pass an assertion harness. Same machinery
 * as the Stage-2 data-structure labs (assert/expect injected; source + harness
 * run together). References below self-verify against their harnesses.
 */ /* ------------------------------------------------------------------ */ /* Token-bucket rate limiter                                           */ /* ------------------------------------------------------------------ */ const rateLimiterHarness = `
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
const rateLimiterLab = {
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
`
    },
    testHarness: {
        js: rateLimiterHarness,
        ts: rateLimiterHarness
    },
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
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
/* ------------------------------------------------------------------ */ /* LRU cache                                                           */ /* ------------------------------------------------------------------ */ const lruHarness = `
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
const lruLab = {
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
`
    },
    testHarness: {
        js: lruHarness,
        ts: lruHarness
    },
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
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
/* ------------------------------------------------------------------ */ /* Modules                                                             */ /* ------------------------------------------------------------------ */ const rateLimiterModule = {
    id: "m-sd-lab-rate-limiter",
    stageId: S,
    title: "Build Lab — Rate Limiter",
    kind: "buildLab",
    summary: "Implement a token-bucket rate limiter — the primitive behind API throttling and abuse protection.",
    lessonSections: [
        {
            heading: "Why rate limit",
            body: `A **rate limiter** caps how often a client can call your service — protecting it from abuse, runaway retries, and noisy neighbours, and enforcing fair-use quotas. It's a building block you'll place at the API gateway of almost every large system.

The **token bucket** is the classic algorithm: a bucket holds up to \`capacity\` tokens and refills at a steady rate. Each request spends a token; when the bucket is empty, requests are rejected (HTTP 429). Because the bucket can be full, it naturally allows short **bursts** up to \`capacity\` while bounding the sustained rate to the refill rate.

\`\`\`text
capacity 3, refill 1/sec:
  t=0s  ●●●   3 quick requests allowed, bucket now empty -> 4th denied
  t=1s  ●     1 token refilled -> 1 request allowed
\`\`\``
        },
        {
            heading: "Alternatives worth knowing",
            body: `Other limiters trade accuracy for simplicity: a **fixed-window counter** is easy but allows double-rate bursts at window edges; a **sliding-window log/counter** is more accurate but costlier; the **leaky bucket** smooths output to a constant rate. Token bucket is the pragmatic favourite — cheap, bursty-friendly, and easy to distribute (store the token count in Redis for a cluster-wide limit). Build it in the lab below.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    buildLab: rateLimiterLab,
    prerequisiteModuleIds: [
        "m-sd-building-blocks"
    ]
};
const lruModule = {
    id: "m-sd-lab-lru-cache",
    stageId: S,
    title: "Build Lab — LRU Cache",
    kind: "buildLab",
    summary: "Implement an O(1) least-recently-used cache — the eviction policy at the heart of caching tiers.",
    lessonSections: [
        {
            heading: "Bounded caches need an eviction policy",
            body: `A cache has finite memory, so when it fills it must **evict** something. **LRU** — least-recently-used — is the most common policy: discard the entry that hasn't been touched for the longest, betting that recently-used data will be used again (temporal locality).

The trick is doing both \`get\` and \`put\` in **O(1)**. The classic implementation is a hash map plus a doubly-linked list ordered by recency; here you can lean on JavaScript's \`Map\`, which remembers insertion order — deleting and re-inserting a key moves it to the most-recent end, and \`map.keys().next().value\` is the least-recent key to evict.`
        },
        {
            heading: "Where it lives",
            body: `LRU (and cousins like **LFU** — least-frequently-used) power in-memory cache tiers (Redis maxmemory policies), database buffer pools, and CPU caches. Getting eviction right is what keeps a cache's **hit rate** high without unbounded memory growth. Implement it below, then move on to the ring and Bloom-filter labs.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    buildLab: lruLab,
    prerequisiteModuleIds: [
        "m-sd-building-blocks"
    ]
};
const sdLabModules = [
    rateLimiterModule,
    lruModule
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/systemdesign/labs2.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sdLabModules2",
    ()=>sdLabModules2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
const S = "sd-s2";
/*
 * System Design — Build the Blocks (sd-s2), batch 2: a consistent-hashing ring
 * and a Bloom filter. Both harnesses test invariant PROPERTIES (no false
 * negatives, minimal disruption on node removal, low false-positive rate) rather
 * than exact hash placements, so any correct implementation passes regardless of
 * the specific hash function used.
 */ /* ------------------------------------------------------------------ */ /* Consistent-hashing ring                                             */ /* ------------------------------------------------------------------ */ const hashRingHarness = `
const ring = new HashRing();
ring.addNode("A");
for (const k of ["k1", "k2", "user:42", "session-xyz"]) assert("single node maps all: " + k, ring.getNode(k) === "A");
ring.addNode("B");
ring.addNode("C");
const keys = [];
for (let i = 0; i < 300; i++) keys.push("key-" + i);
const before = {};
for (const k of keys) before[k] = ring.getNode(k);
for (const k of keys) assert("deterministic: " + k, ring.getNode(k) === before[k]);
const counts = { A: 0, B: 0, C: 0 };
for (const k of keys) { assert("member: " + k, before[k] === "A" || before[k] === "B" || before[k] === "C"); counts[before[k]]++; }
assert("A holds some keys", counts.A > 0);
assert("B holds some keys", counts.B > 0);
assert("C holds some keys", counts.C > 0);
// Minimal disruption: removing C must not move keys that weren't on C.
ring.removeNode("C");
let moved = 0, kept = 0;
for (const k of keys) {
  const now = ring.getNode(k);
  assert("after remove, member: " + k, now === "A" || now === "B");
  if (before[k] === "C") moved++;
  else { assert("non-C key unchanged: " + k, now === before[k]); kept++; }
}
assert("some keys were on C", moved > 0);
assert("non-C keys were untouched", kept > 0);
// Re-adding C is safe.
ring.addNode("C");
for (const k of keys) assert("re-add member: " + k, ring.getNode(k) === "A" || ring.getNode(k) === "B" || ring.getNode(k) === "C");
`;
const hashRingLab = {
    id: "lab-sd-hash-ring",
    exportName: "HashRing",
    spec: `Implement a **consistent-hashing ring**. Physical nodes are placed on a hash ring (each with several **virtual nodes** for balance). A key is owned by the first node found clockwise from the key's hash. Adding or removing a node should only remap the keys near it — not reshuffle everything (that's the whole point of consistent hashing).

- \`constructor(virtualNodes = 100)\` — replicas per physical node.
- \`addNode(name)\` — place the node (and its virtual replicas) on the ring; return \`this\`.
- \`removeNode(name)\` — remove the node and its replicas; return \`this\`.
- \`getNode(key)\` — return the owning node's name, or \`null\` if the ring is empty.

Use any deterministic string hash (e.g. FNV-1a). Hash each virtual node as \`name + "#" + i\`, keep the ring sorted by hash, and binary-search clockwise (wrapping to the first entry).`,
    starterCode: {
        js: `class HashRing {
  constructor(virtualNodes = 100) {
    // store vnode count; keep a sorted ring of { hash, node }
  }
  addNode(name) {
    // add virtualNodes replicas hashed from name + "#" + i, keep ring sorted
  }
  removeNode(name) {
    // drop every ring entry belonging to name
  }
  getNode(key) {
    // hash the key; return the first node clockwise (wrap around); null if empty
  }
}
`,
        ts: `class HashRing {
  constructor(virtualNodes: number = 100) {
    // store vnode count; keep a sorted ring of { hash, node }
  }
  addNode(name: string): this {
    return this;
  }
  removeNode(name: string): this {
    return this;
  }
  getNode(key: string): string | null {
    return null;
  }
}
`
    },
    testHarness: {
        js: hashRingHarness,
        ts: hashRingHarness
    },
    referenceImplementation: {
        js: `class HashRing {
  constructor(virtualNodes = 100) {
    this.vnodes = virtualNodes;
    this.ring = [];
    this.nodes = new Set();
  }
  _hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  addNode(name) {
    if (this.nodes.has(name)) return this;
    this.nodes.add(name);
    for (let i = 0; i < this.vnodes; i++) this.ring.push({ hash: this._hash(name + "#" + i), node: name });
    this.ring.sort((a, b) => a.hash - b.hash);
    return this;
  }
  removeNode(name) {
    if (!this.nodes.has(name)) return this;
    this.nodes.delete(name);
    this.ring = this.ring.filter((e) => e.node !== name);
    return this;
  }
  getNode(key) {
    if (this.ring.length === 0) return null;
    const h = this._hash(key);
    let lo = 0, hi = this.ring.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (this.ring[mid].hash < h) lo = mid + 1; else hi = mid; }
    return this.ring[lo === this.ring.length ? 0 : lo].node;
  }
}
`,
        ts: `interface RingEntry { hash: number; node: string; }
class HashRing {
  private vnodes: number;
  private ring: RingEntry[] = [];
  private nodes = new Set<string>();
  constructor(virtualNodes: number = 100) {
    this.vnodes = virtualNodes;
  }
  private hash(str: string): number {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  addNode(name: string): this {
    if (this.nodes.has(name)) return this;
    this.nodes.add(name);
    for (let i = 0; i < this.vnodes; i++) this.ring.push({ hash: this.hash(name + "#" + i), node: name });
    this.ring.sort((a, b) => a.hash - b.hash);
    return this;
  }
  removeNode(name: string): this {
    if (!this.nodes.has(name)) return this;
    this.nodes.delete(name);
    this.ring = this.ring.filter((e) => e.node !== name);
    return this;
  }
  getNode(key: string): string | null {
    if (this.ring.length === 0) return null;
    const h = this.hash(key);
    let lo = 0, hi = this.ring.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (this.ring[mid].hash < h) lo = mid + 1; else hi = mid; }
    return this.ring[lo === this.ring.length ? 0 : lo].node;
  }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
/* ------------------------------------------------------------------ */ /* Bloom filter                                                        */ /* ------------------------------------------------------------------ */ const bloomHarness = `
const bf = new BloomFilter(10000, 4);
for (const x of ["a", "b", "hello", "user:1"]) assert("empty filter: absent " + x, bf.mightContain(x) === false);
const added = ["apple", "banana", "cherry", "date", "egg", "fig", "grape"];
for (const x of added) bf.add(x);
for (const x of added) assert("no false negative: " + x, bf.mightContain(x) === true);
let falses = 0;
for (let i = 0; i < 200; i++) if (!bf.mightContain("absent-" + i)) falses++;
assert("low false-positive rate (>=190/200 absent report false)", falses >= 190);
const small = new BloomFilter(24, 3);
const items = ["x1", "x2", "x3"];
for (const x of items) small.add(x);
for (const x of items) assert("small filter: no false negative " + x, small.mightContain(x) === true);
`;
const bloomLab = {
    id: "lab-sd-bloom-filter",
    exportName: "BloomFilter",
    spec: `Implement a **Bloom filter** — a compact, probabilistic set membership test. It can say "definitely not present" or "probably present"; it never gives a **false negative**, but may give a false positive.

- \`constructor(size, numHashes)\` — a bit array of \`size\` bits and \`numHashes\` hash functions.
- \`add(item)\` — set the bits at each hashed position; return \`this\`.
- \`mightContain(item)\` — return \`true\` only if *every* hashed bit is set (possibly a false positive); \`false\` means definitely absent.

Derive \`numHashes\` positions with **double hashing**: compute two base hashes \`h1\`, \`h2\` and use \`(h1 + i·h2) mod size\` for \`i = 0..numHashes-1\`. Any two independent deterministic hashes work (e.g. FNV-1a and djb2).`,
    starterCode: {
        js: `class BloomFilter {
  constructor(size, numHashes) {
    // bit array of \`size\`, remember numHashes
  }
  add(item) {
    // set every hashed bit; return this
  }
  mightContain(item) {
    // true only if all hashed bits are set
  }
}
`,
        ts: `class BloomFilter {
  constructor(size: number, numHashes: number) {
    // bit array of \`size\`, remember numHashes
  }
  add(item: string): this {
    return this;
  }
  mightContain(item: string): boolean {
    return false;
  }
}
`
    },
    testHarness: {
        js: bloomHarness,
        ts: bloomHarness
    },
    referenceImplementation: {
        js: `class BloomFilter {
  constructor(size, numHashes) {
    this.size = size;
    this.numHashes = numHashes;
    this.bits = new Uint8Array(size);
  }
  _h1(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  _h2(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = (Math.imul(h, 33) + str.charCodeAt(i)) >>> 0;
    return (h >>> 0) || 1;
  }
  _positions(item) {
    const a = this._h1(item), b = this._h2(item);
    const res = [];
    for (let i = 0; i < this.numHashes; i++) res.push(((a + Math.imul(i, b)) >>> 0) % this.size);
    return res;
  }
  add(item) {
    for (const idx of this._positions(item)) this.bits[idx] = 1;
    return this;
  }
  mightContain(item) {
    for (const idx of this._positions(item)) if (!this.bits[idx]) return false;
    return true;
  }
}
`,
        ts: `class BloomFilter {
  private size: number;
  private numHashes: number;
  private bits: Uint8Array;
  constructor(size: number, numHashes: number) {
    this.size = size;
    this.numHashes = numHashes;
    this.bits = new Uint8Array(size);
  }
  private h1(str: string): number {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  private h2(str: string): number {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = (Math.imul(h, 33) + str.charCodeAt(i)) >>> 0;
    return (h >>> 0) || 1;
  }
  private positions(item: string): number[] {
    const a = this.h1(item), b = this.h2(item);
    const res: number[] = [];
    for (let i = 0; i < this.numHashes; i++) res.push(((a + Math.imul(i, b)) >>> 0) % this.size);
    return res;
  }
  add(item: string): this {
    for (const idx of this.positions(item)) this.bits[idx] = 1;
    return this;
  }
  mightContain(item: string): boolean {
    for (const idx of this.positions(item)) if (!this.bits[idx]) return false;
    return true;
  }
}
`
    },
    xp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP"].buildLab
};
/* ------------------------------------------------------------------ */ /* Modules                                                             */ /* ------------------------------------------------------------------ */ const hashRingModule = {
    id: "m-sd-lab-hash-ring",
    stageId: S,
    title: "Build Lab — Consistent Hashing Ring",
    kind: "buildLab",
    summary: "Implement a consistent-hashing ring — how distributed caches and databases assign keys to nodes with minimal reshuffling.",
    lessonSections: [
        {
            heading: "The reshuffling problem",
            body: `Sharding by \`hash(key) % N\` works until you change **N**. Add or remove a node and *almost every* key remaps to a different shard — a catastrophic cache-miss storm and data movement. **Consistent hashing** fixes this.

Picture a ring of hash values 0 … 2³²−1. Each node is placed at several positions on the ring (its **virtual nodes**, for even spread). A key hashes to a point on the ring and is owned by the **first node clockwise**. Now when a node leaves, only the keys that fell in its arcs move — to the next node clockwise — and everything else stays put. Adding a node likewise only steals keys from its immediate neighbours.

\`\`\`text
Ring (clockwise):  …—[A]—key1—[B]—key2—[C]—key3—[A]—…
Remove B  ->  key1 now maps to C; key2/key3 unchanged.
\`\`\``
        },
        {
            heading: "Why virtual nodes",
            body: `With one position per node, load can be lopsided — one node might own a huge arc. Giving each physical node many **virtual nodes** (replicas hashed from \`name#0\`, \`name#1\`, …) spreads its ownership into many small arcs, smoothing the distribution and making rebalancing gentle when membership changes. This is exactly how systems like Cassandra, DynamoDB, and memcached clients place data. Build the ring below — the harness checks the defining property: removing a node leaves untouched keys where they were.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    buildLab: hashRingLab,
    prerequisiteModuleIds: [
        "m-sd-building-blocks"
    ]
};
const bloomModule = {
    id: "m-sd-lab-bloom-filter",
    stageId: S,
    title: "Build Lab — Bloom Filter",
    kind: "buildLab",
    summary: "Implement a Bloom filter — a tiny probabilistic set that answers 'definitely not' or 'probably yes' with no false negatives.",
    lessonSections: [
        {
            heading: "Trading certainty for space",
            body: `A **Bloom filter** answers set membership using a fraction of the memory a real set would need — by allowing a controlled **false-positive** rate. It stores no elements, just a bit array. To \`add\` an item, hash it with \`k\` functions and set those \`k\` bits. To test membership, check those same \`k\` bits: if any is 0 the item is **definitely absent**; if all are 1 it's **probably present** (they might have been set by other items).

The key guarantee: **no false negatives**. If you added it, \`mightContain\` will always say yes. That makes Bloom filters perfect as a cheap first gate.`
        },
        {
            heading: "Where it earns its keep",
            body: `Databases like Cassandra and HBase put a Bloom filter in front of each SSTable so a read can skip files that definitely don't contain the key — avoiding disk I/O. CDNs and browsers use them to check "have we seen this URL?"; crawlers use them to avoid revisiting pages. The false-positive rate is tunable by \`size\` and number of hashes (\`k\`) relative to the number of items — bigger array and well-chosen \`k\` drive it down. Implement it with **double hashing** below; the harness verifies added items always report present and that absent items rarely do.`
        }
    ],
    drillProblemIds: [],
    testPoolProblemIds: [],
    buildLab: bloomLab,
    prerequisiteModuleIds: [
        "m-sd-building-blocks"
    ]
};
const sdLabModules2 = [
    hashRingModule,
    bloomModule
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_data_systemdesign_13o_1ud._.js.map