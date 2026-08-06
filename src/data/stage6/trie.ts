import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["trie"];

/*
 * These problems apply the prefix tree (trie) built in the Stage-2 Trie lab to
 * real tasks: prefix queries, wildcard matching, word replacement, and a binary
 * trie for maximum XOR. Each drill pairs a trie solution with a plain
 * set/array alternative so the trie's advantage is visible.
 */

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "trie-contains",
    slug: "trie-contains-word",
    title: "Word Exists in Dictionary",
    difficulty: "easy",
    patternIds: P,
    statement:
      "Given a list of words and a query string, return whether the query is one of the words (exact match).",
    examples: [
      { input: '["apple","banana"], "apple"', output: "true" },
      { input: '["apple","banana"], "app"', output: "false" },
      { input: '["a"], "a"', output: "true" },
    ],
    constraints: ["0 <= words.length <= 10000", "lowercase letters"],
    functionName: "wordExists",
    starter: {
      js: "function wordExists(words, query) {\n  // True if query is an exact word in the list.\n}\n",
      ts: "function wordExists(words: string[], query: string): boolean {\n  // True if query is an exact word in the list.\n  return false;\n}\n",
    },
    visible: [
      { args: [["apple", "banana"], "apple"], expected: true },
      { args: [["apple", "banana"], "app"], expected: false },
      { args: [["a"], "a"], expected: true },
    ],
    hidden: [
      { args: [["x", "y", "z"], "y"], expected: true },
      { args: [["cat"], "dog"], expected: false },
      { args: [[], "a"], expected: false },
      { args: [["ab", "abc", "abcd"], "abc"], expected: true },
      { args: [["ab", "abc", "abcd"], "abcde"], expected: false },
      { args: [["hello", "help"], "hel"], expected: false },
    ],
    hints: [
      "Insert every word into a trie, marking the end of each.",
      "Walk the query character by character; it must land on an end-of-word node.",
      "A hash set of words gives the same answer more simply for exact matches.",
    ],
    solutions: [
      {
        label: "Trie lookup",
        approach: "Build a trie, then walk the query and check the terminal flag.",
        js: "function wordExists(words, query) {\n  const root = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  let node = root;\n  for (const c of query) { if (!node[c]) return false; node = node[c]; }\n  return node.end === true;\n}\n",
        ts: "function wordExists(words: string[], query: string): boolean {\n  const root: any = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  let node = root;\n  for (const c of query) { if (!node[c]) return false; node = node[c]; }\n  return node.end === true;\n}\n",
        time: "O(total chars)",
        space: "O(total chars)",
      },
      {
        label: "Hash set",
        approach: "For exact matches a set of words is enough.",
        js: "function wordExists(words, query) {\n  return new Set(words).has(query);\n}\n",
        ts: "function wordExists(words: string[], query: string): boolean {\n  return new Set(words).has(query);\n}\n",
        time: "O(total chars)",
        space: "O(total chars)",
      },
    ],
  },
  {
    id: "trie-count-prefix",
    slug: "trie-count-with-prefix",
    title: "Count Words With Prefix",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a list of words and a prefix, return how many words start with that prefix. The empty prefix matches every word.",
    examples: [
      { input: '["apple","app","apply","banana"], "app"', output: "3" },
      { input: '["a","b","c"], "a"', output: "1" },
      { input: '["x","y"], "z"', output: "0" },
    ],
    constraints: ["0 <= words.length <= 10000", "lowercase letters"],
    functionName: "countWithPrefix",
    starter: {
      js: "function countWithPrefix(words, prefix) {\n  // Number of words starting with prefix.\n}\n",
      ts: "function countWithPrefix(words: string[], prefix: string): number {\n  // Number of words starting with prefix.\n  return 0;\n}\n",
    },
    visible: [
      { args: [["apple", "app", "apply", "banana"], "app"], expected: 3 },
      { args: [["a", "b", "c"], "a"], expected: 1 },
      { args: [["x", "y"], "z"], expected: 0 },
    ],
    hidden: [
      { args: [["cat", "car", "care"], "ca"], expected: 3 },
      { args: [["cat", "car", "care"], "care"], expected: 1 },
      { args: [["hello"], ""], expected: 1 },
      { args: [["abc", "abd", "xyz"], "ab"], expected: 2 },
      { args: [[], "a"], expected: 0 },
      { args: [["prefix", "pre", "prefixes"], "pref"], expected: 2 },
    ],
    hints: [
      "Store a passing-through count at every trie node as you insert.",
      "Walk to the end of the prefix and read that node's count.",
      "A prefix not present means a count of 0.",
    ],
    solutions: [
      {
        label: "Trie with counts",
        approach: "Increment a count on every node an inserted word passes through.",
        js: "function countWithPrefix(words, prefix) {\n  const root = { count: 0 };\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || { count: 0 }; node = node[c]; node.count++; }\n  }\n  if (prefix === '') return words.length;\n  let node = root;\n  for (const c of prefix) { if (!node[c]) return 0; node = node[c]; }\n  return node.count;\n}\n",
        ts: "function countWithPrefix(words: string[], prefix: string): number {\n  const root: any = { count: 0 };\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || { count: 0 }; node = node[c]; node.count++; }\n  }\n  if (prefix === '') return words.length;\n  let node = root;\n  for (const c of prefix) { if (!node[c]) return 0; node = node[c]; }\n  return node.count;\n}\n",
        time: "O(total chars)",
        space: "O(total chars)",
      },
      {
        label: "Direct scan",
        approach: "Count words whose start matches the prefix.",
        js: "function countWithPrefix(words, prefix) {\n  let count = 0;\n  for (const w of words) if (w.startsWith(prefix)) count++;\n  return count;\n}\n",
        ts: "function countWithPrefix(words: string[], prefix: string): number {\n  let count = 0;\n  for (const w of words) if (w.startsWith(prefix)) count++;\n  return count;\n}\n",
        time: "O(total chars)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "trie-lcp",
    slug: "trie-longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the longest common prefix shared by all the given strings. If there is none, return the empty string.",
    examples: [
      { input: '["flower","flow","flight"]', output: '"fl"' },
      { input: '["dog","racecar","car"]', output: '""' },
      { input: '["interspecies","interstellar","interstate"]', output: '"inters"' },
    ],
    constraints: ["0 <= words.length <= 1000", "lowercase letters"],
    functionName: "longestCommonPrefix",
    starter: {
      js: "function longestCommonPrefix(words) {\n  // Longest prefix shared by all words.\n}\n",
      ts: "function longestCommonPrefix(words: string[]): string {\n  // Longest prefix shared by all words.\n  return '';\n}\n",
    },
    visible: [
      { args: [["flower", "flow", "flight"]], expected: "fl" },
      { args: [["dog", "racecar", "car"]], expected: "" },
      { args: [["interspecies", "interstellar", "interstate"]], expected: "inters" },
    ],
    hidden: [
      { args: [["a"]], expected: "a" },
      { args: [["abc", "abc"]], expected: "abc" },
      { args: [["", "abc"]], expected: "" },
      { args: [["prefix", "pre", "president"]], expected: "pre" },
      { args: [[]], expected: "" },
      { args: [["cabc", "cab", "ca"]], expected: "ca" },
    ],
    hints: [
      "Insert all words, then walk down from the root while there's exactly one child and no word ends.",
      "The moment a node branches or a word terminates, the common prefix stops.",
      "Comparing character columns across the words gives the same result.",
    ],
    solutions: [
      {
        label: "Trie descent",
        approach: "Follow the single non-branching path until a split or word end.",
        js: "function longestCommonPrefix(words) {\n  if (words.length === 0) return '';\n  const root = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  let prefix = '', node = root;\n  while (true) {\n    const keys = Object.keys(node).filter((k) => k !== 'end');\n    if (keys.length !== 1 || node.end) break;\n    prefix += keys[0];\n    node = node[keys[0]];\n  }\n  return prefix;\n}\n",
        ts: "function longestCommonPrefix(words: string[]): string {\n  if (words.length === 0) return '';\n  const root: any = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  let prefix = '', node = root;\n  while (true) {\n    const keys = Object.keys(node).filter((k) => k !== 'end');\n    if (keys.length !== 1 || node.end) break;\n    prefix += keys[0];\n    node = node[keys[0]];\n  }\n  return prefix;\n}\n",
        time: "O(total chars)",
        space: "O(total chars)",
      },
      {
        label: "Column scan",
        approach: "Compare the i-th character across all words until one differs.",
        js: "function longestCommonPrefix(words) {\n  if (words.length === 0) return '';\n  let prefix = words[0];\n  for (const w of words) {\n    let i = 0;\n    while (i < prefix.length && i < w.length && prefix[i] === w[i]) i++;\n    prefix = prefix.slice(0, i);\n  }\n  return prefix;\n}\n",
        ts: "function longestCommonPrefix(words: string[]): string {\n  if (words.length === 0) return '';\n  let prefix = words[0];\n  for (const w of words) {\n    let i = 0;\n    while (i < prefix.length && i < w.length && prefix[i] === w[i]) i++;\n    prefix = prefix.slice(0, i);\n  }\n  return prefix;\n}\n",
        time: "O(total chars)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "trie-wildcard",
    slug: "trie-wildcard-search",
    title: "Wildcard Word Search",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a list of words and a query that may contain '.' characters (each matching any single letter), return whether any word matches the query exactly (same length, letters agree where the query is not '.').",
    examples: [
      { input: '["bad","dad","mad"], "pad"', output: "false" },
      { input: '["bad","dad","mad"], ".ad"', output: "true" },
      { input: '["bad","dad","mad"], "b.."', output: "true" },
    ],
    constraints: ["0 <= words.length <= 10000", "query uses lowercase letters and '.'"],
    functionName: "wildcardSearch",
    starter: {
      js: "function wildcardSearch(words, query) {\n  // True if any word matches the query with '.' wildcards.\n}\n",
      ts: "function wildcardSearch(words: string[], query: string): boolean {\n  // True if any word matches the query with '.' wildcards.\n  return false;\n}\n",
    },
    visible: [
      { args: [["bad", "dad", "mad"], "pad"], expected: false },
      { args: [["bad", "dad", "mad"], ".ad"], expected: true },
      { args: [["bad", "dad", "mad"], "b.."], expected: true },
    ],
    hidden: [
      { args: [["bad", "dad", "mad"], "bad"], expected: true },
      { args: [["a"], "a"], expected: true },
      { args: [["bad", "dad", "mad"], "..d"], expected: true },
      { args: [["bad", "dad", "mad"], "..."], expected: true },
      { args: [["bad", "dad", "mad"], "...."], expected: false },
      { args: [["cat", "cot", "cut"], "c.t"], expected: true },
    ],
    hints: [
      "Insert words into a trie; searching a '.' means trying every child.",
      "DFS from the root, branching on '.' and matching the exact letter otherwise.",
      "You only need one word to match — return true on the first success.",
    ],
    solutions: [
      {
        label: "Trie DFS with wildcards",
        approach: "Recurse through the trie, expanding every child on a '.'.",
        js: "function wildcardSearch(words, query) {\n  const root = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  const dfs = (node, i) => {\n    if (i === query.length) return node.end === true;\n    const c = query[i];\n    if (c === '.') {\n      for (const k of Object.keys(node)) if (k !== 'end' && dfs(node[k], i + 1)) return true;\n      return false;\n    }\n    return node[c] ? dfs(node[c], i + 1) : false;\n  };\n  return dfs(root, 0);\n}\n",
        ts: "function wildcardSearch(words: string[], query: string): boolean {\n  const root: any = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  const dfs = (node: any, i: number): boolean => {\n    if (i === query.length) return node.end === true;\n    const c = query[i];\n    if (c === '.') {\n      for (const k of Object.keys(node)) if (k !== 'end' && dfs(node[k], i + 1)) return true;\n      return false;\n    }\n    return node[c] ? dfs(node[c], i + 1) : false;\n  };\n  return dfs(root, 0);\n}\n",
        time: "O(words · length)",
        space: "O(total chars)",
      },
      {
        label: "Direct pattern match",
        approach: "Compare each equal-length word to the query position by position.",
        js: "function wildcardSearch(words, query) {\n  for (const w of words) {\n    if (w.length !== query.length) continue;\n    let ok = true;\n    for (let i = 0; i < query.length; i++) if (query[i] !== '.' && query[i] !== w[i]) { ok = false; break; }\n    if (ok) return true;\n  }\n  return false;\n}\n",
        ts: "function wildcardSearch(words: string[], query: string): boolean {\n  for (const w of words) {\n    if (w.length !== query.length) continue;\n    let ok = true;\n    for (let i = 0; i < query.length; i++) if (query[i] !== '.' && query[i] !== w[i]) { ok = false; break; }\n    if (ok) return true;\n  }\n  return false;\n}\n",
        time: "O(words · length)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "trie-replace-words",
    slug: "trie-replace-words",
    title: "Replace Words With Roots",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given a dictionary of root words and a sentence, replace every word in the sentence with the shortest root that is a prefix of it (if any). Return the transformed sentence. Words are separated by single spaces.",
    examples: [
      { input: '["cat","bat","rat"], "the cattle was rattled by the battery"', output: '"the cat was rat by the bat"' },
      { input: '["a","b","c"], "aadsfasf absbs bbab cadsfafs"', output: '"a a b c"' },
      { input: '["se","kit","sea"], "sea kitten seat"', output: '"se kit se"' },
    ],
    constraints: ["1 <= dict.length <= 1000", "lowercase letters and spaces"],
    functionName: "replaceWords",
    starter: {
      js: "function replaceWords(dict, sentence) {\n  // Replace each word with the shortest matching root.\n}\n",
      ts: "function replaceWords(dict: string[], sentence: string): string {\n  // Replace each word with the shortest matching root.\n  return '';\n}\n",
    },
    visible: [
      { args: [["cat", "bat", "rat"], "the cattle was rattled by the battery"], expected: "the cat was rat by the bat" },
      { args: [["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"], expected: "a a b c" },
      { args: [["se", "kit", "sea"], "sea kitten seat"], expected: "se kit se" },
    ],
    hidden: [
      { args: [["catt", "cat", "bat", "rat"], "the cattle was rattled by the battery"], expected: "the cat was rat by the bat" },
      { args: [["ab"], "abc abd ab"], expected: "ab ab ab" },
      { args: [["xyz"], "hello world"], expected: "hello world" },
      { args: [["a"], "a a a"], expected: "a a a" },
      { args: [["go", "gone"], "gone going goodbye"], expected: "go go go" },
      { args: [["cat", "bat", "rat"], "the cattle was rattled by the battery"], expected: "the cat was rat by the bat" },
    ],
    hints: [
      "Insert all roots into a trie marking word ends.",
      "For each word, walk the trie and stop at the first end-of-root you reach.",
      "If you fall off the trie before hitting a root end, keep the original word.",
    ],
    solutions: [
      {
        label: "Trie shortest root",
        approach: "Walk each word through the root trie and cut at the first terminal.",
        js: "function replaceWords(dict, sentence) {\n  const root = {};\n  for (const r of dict) {\n    let node = root;\n    for (const c of r) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  const shorten = (word) => {\n    let node = root, pre = '';\n    for (const c of word) {\n      if (!node[c]) return word;\n      pre += c; node = node[c];\n      if (node.end) return pre;\n    }\n    return word;\n  };\n  return sentence.split(' ').map(shorten).join(' ');\n}\n",
        ts: "function replaceWords(dict: string[], sentence: string): string {\n  const root: any = {};\n  for (const r of dict) {\n    let node = root;\n    for (const c of r) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  const shorten = (word: string): string => {\n    let node = root, pre = '';\n    for (const c of word) {\n      if (!node[c]) return word;\n      pre += c; node = node[c];\n      if (node.end) return pre;\n    }\n    return word;\n  };\n  return sentence.split(' ').map(shorten).join(' ');\n}\n",
        time: "O(dict + sentence)",
        space: "O(dict)",
      },
      {
        label: "Sorted roots by length",
        approach: "Try roots shortest-first and take the first prefix match.",
        js: "function replaceWords(dict, sentence) {\n  const roots = dict.slice().sort((a, b) => a.length - b.length);\n  return sentence.split(' ').map((word) => {\n    for (const r of roots) if (word.startsWith(r)) return r;\n    return word;\n  }).join(' ');\n}\n",
        ts: "function replaceWords(dict: string[], sentence: string): string {\n  const roots = dict.slice().sort((a, b) => a.length - b.length);\n  return sentence.split(' ').map((word) => {\n    for (const r of roots) if (word.startsWith(r)) return r;\n    return word;\n  }).join(' ');\n}\n",
        time: "O(dict·log dict + sentence·dict)",
        space: "O(dict)",
      },
    ],
  },
  {
    id: "trie-longest-word",
    slug: "trie-longest-buildable-word",
    title: "Longest Word Built One Character at a Time",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given a list of words, return the longest word that can be built one character at a time, where every prefix of it (of length 1, 2, …) is also in the list. Among equally long answers, return the lexicographically smallest. Return the empty string if none qualifies.",
    examples: [
      { input: '["w","wo","wor","worl","world"]', output: '"world"' },
      { input: '["a","banana","app","appl","ap","apply","apple"]', output: '"apple"' },
      { input: '["abc","bc","ab","qwe"]', output: '""' },
    ],
    constraints: ["1 <= words.length <= 1000", "lowercase letters"],
    functionName: "longestBuildableWord",
    starter: {
      js: "function longestBuildableWord(words) {\n  // Longest word whose every prefix is also present.\n}\n",
      ts: "function longestBuildableWord(words: string[]): string {\n  // Longest word whose every prefix is also present.\n  return '';\n}\n",
    },
    visible: [
      { args: [["w", "wo", "wor", "worl", "world"]], expected: "world" },
      { args: [["a", "banana", "app", "appl", "ap", "apply", "apple"]], expected: "apple" },
      { args: [["abc", "bc", "ab", "qwe"]], expected: "" },
    ],
    hidden: [
      { args: [["a", "b", "c"]], expected: "a" },
      { args: [["yo", "ew", "fc", "zrc", "yodn", "fcm", "qm", "qmo", "fcmz", "z", "ewq", "yod", "ewqz", "y"]], expected: "yodn" },
      { args: [["ogz", "eyj", "e", "ey", "hmn", "v", "hm", "ogznkb", "ogzn", "hmnm", "eyjuo", "vc", "ogznk", "og", "eyjuoi", "d"]], expected: "eyj" },
      { args: [["m", "mo", "moc", "moch", "mocha", "l", "la", "lat", "latt", "latte", "c", "ca", "cat"]], expected: "latte" },
      { args: [["t", "ti", "tig", "tige", "tiger", "e", "en", "eng", "engi", "engin", "engine"]], expected: "engine" },
      { args: [["w", "wo", "wor", "worl", "world"]], expected: "world" },
    ],
    hints: [
      "Insert every word; a word is buildable iff each of its prefixes ends a word.",
      "Check each word by verifying all its prefixes are marked end-of-word.",
      "Break ties by preferring the longer word, then the lexicographically smaller.",
    ],
    solutions: [
      {
        label: "Trie prefix chain",
        approach: "A word qualifies when every prefix node along it is a word end.",
        js: "function longestBuildableWord(words) {\n  const root = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  let best = '';\n  for (const w of words) {\n    let node = root, ok = true;\n    for (const c of w) { node = node[c]; if (!node.end) { ok = false; break; } }\n    if (ok && (w.length > best.length || (w.length === best.length && w < best))) best = w;\n  }\n  return best;\n}\n",
        ts: "function longestBuildableWord(words: string[]): string {\n  const root: any = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  let best = '';\n  for (const w of words) {\n    let node = root, ok = true;\n    for (const c of w) { node = node[c]; if (!node.end) { ok = false; break; } }\n    if (ok && (w.length > best.length || (w.length === best.length && w < best))) best = w;\n  }\n  return best;\n}\n",
        time: "O(total chars)",
        space: "O(total chars)",
      },
      {
        label: "Hash set of prefixes",
        approach: "Verify each prefix is present using a set of all words.",
        js: "function longestBuildableWord(words) {\n  const set = new Set(words);\n  let best = '';\n  for (const w of words) {\n    let ok = true;\n    for (let i = 1; i < w.length; i++) if (!set.has(w.slice(0, i))) { ok = false; break; }\n    if (ok && (w.length > best.length || (w.length === best.length && w < best))) best = w;\n  }\n  return best;\n}\n",
        ts: "function longestBuildableWord(words: string[]): string {\n  const set = new Set(words);\n  let best = '';\n  for (const w of words) {\n    let ok = true;\n    for (let i = 1; i < w.length; i++) if (!set.has(w.slice(0, i))) { ok = false; break; }\n    if (ok && (w.length > best.length || (w.length === best.length && w < best))) best = w;\n  }\n  return best;\n}\n",
        time: "O(total chars²)",
        space: "O(total chars)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "trie-autocomplete",
    slug: "trie-autocomplete",
    title: "Autocomplete Suggestions",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a list of words and a prefix, return all words that start with the prefix, sorted in ascending (lexicographic) order.",
    examples: [
      { input: '["apple","app","apply","banana"], "app"', output: '["app","apple","apply"]' },
      { input: '["cat","car","care"], "ca"', output: '["car","care","cat"]' },
      { input: '["dog"], "cat"', output: "[]" },
    ],
    constraints: ["0 <= words.length <= 10000", "lowercase letters"],
    functionName: "autocomplete",
    starter: {
      js: "function autocomplete(words, prefix) {\n  // Sorted list of words starting with prefix.\n}\n",
      ts: "function autocomplete(words: string[], prefix: string): string[] {\n  // Sorted list of words starting with prefix.\n  return [];\n}\n",
    },
    visible: [
      { args: [["apple", "app", "apply", "banana"], "app"], expected: ["app", "apple", "apply"] },
      { args: [["cat", "car", "care"], "ca"], expected: ["car", "care", "cat"] },
      { args: [["dog"], "cat"], expected: [] },
    ],
    hidden: [
      { args: [["b", "a", "c"], ""], expected: ["a", "b", "c"] },
      { args: [["zebra", "zoo", "zap"], "z"], expected: ["zap", "zebra", "zoo"] },
      { args: [["hello"], "hello"], expected: ["hello"] },
      { args: [["ab", "abc", "abd", "b"], "ab"], expected: ["ab", "abc", "abd"] },
      { args: [[], "a"], expected: [] },
      { args: [["cat", "car", "care"], "care"], expected: ["care"] },
    ],
    hints: [
      "Descend to the prefix node, then collect every word in that subtree.",
      "A DFS that visits children in sorted order yields sorted results directly.",
      "Sorting the collected matches also works.",
    ],
    solutions: [
      {
        label: "Trie subtree collection",
        approach: "Walk to the prefix, DFS the subtree, and sort the results.",
        js: "function autocomplete(words, prefix) {\n  const root = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  let node = root;\n  for (const c of prefix) { if (!node[c]) return []; node = node[c]; }\n  const out = [];\n  const dfs = (n, path) => {\n    if (n.end) out.push(prefix + path);\n    for (const k of Object.keys(n)) if (k !== 'end') dfs(n[k], path + k);\n  };\n  dfs(node, '');\n  return out.sort();\n}\n",
        ts: "function autocomplete(words: string[], prefix: string): string[] {\n  const root: any = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  let node = root;\n  for (const c of prefix) { if (!node[c]) return []; node = node[c]; }\n  const out: string[] = [];\n  const dfs = (n: any, path: string): void => {\n    if (n.end) out.push(prefix + path);\n    for (const k of Object.keys(n)) if (k !== 'end') dfs(n[k], path + k);\n  };\n  dfs(node, '');\n  return out.sort();\n}\n",
        time: "O(total chars + m log m)",
        space: "O(total chars)",
      },
      {
        label: "Filter and sort",
        approach: "Keep words with the prefix and sort them.",
        js: "function autocomplete(words, prefix) {\n  return words.filter((w) => w.startsWith(prefix)).sort();\n}\n",
        ts: "function autocomplete(words: string[], prefix: string): string[] {\n  return words.filter((w) => w.startsWith(prefix)).sort();\n}\n",
        time: "O(total chars + m log m)",
        space: "O(m)",
      },
    ],
  },
  {
    id: "trie-word-break",
    slug: "trie-word-break",
    title: "Word Break",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given a string `s` and a dictionary of words, return whether `s` can be segmented into a space-separated sequence of one or more dictionary words (each word may be reused).",
    examples: [
      { input: '"leetcode", ["leet","code"]', output: "true" },
      { input: '"applepenapple", ["apple","pen"]', output: "true" },
      { input: '"catsandog", ["cats","dog","sand","and","cat"]', output: "false" },
    ],
    constraints: ["1 <= s.length <= 300", "lowercase letters"],
    functionName: "wordBreak",
    starter: {
      js: "function wordBreak(s, dict) {\n  // True if s splits into dictionary words.\n}\n",
      ts: "function wordBreak(s: string, dict: string[]): boolean {\n  // True if s splits into dictionary words.\n  return false;\n}\n",
    },
    visible: [
      { args: ["leetcode", ["leet", "code"]], expected: true },
      { args: ["applepenapple", ["apple", "pen"]], expected: true },
      { args: ["catsandog", ["cats", "dog", "sand", "and", "cat"]], expected: false },
    ],
    hidden: [
      { args: ["a", ["a"]], expected: true },
      { args: ["ab", ["a"]], expected: false },
      { args: ["aaaaaaa", ["aaaa", "aaa"]], expected: true },
      { args: ["cars", ["car", "ca", "rs"]], expected: true },
      { args: ["abcd", ["a", "abc", "b", "cd"]], expected: true },
      { args: ["leetcode", ["leet", "code"]], expected: true },
    ],
    hints: [
      "dp[i] = can the first i characters be segmented?",
      "From each reachable position, follow the trie to find dictionary words that start there.",
      "A hash set with substring checks is the simpler equivalent.",
    ],
    solutions: [
      {
        label: "Trie-guided DP",
        approach: "Walk the trie from each dp-reachable index to extend segments.",
        js: "function wordBreak(s, dict) {\n  const root = {};\n  for (const w of dict) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  const n = s.length;\n  const dp = new Array(n + 1).fill(false);\n  dp[0] = true;\n  for (let i = 0; i < n; i++) {\n    if (!dp[i]) continue;\n    let node = root;\n    for (let j = i; j < n; j++) {\n      node = node[s[j]];\n      if (!node) break;\n      if (node.end) dp[j + 1] = true;\n    }\n  }\n  return dp[n];\n}\n",
        ts: "function wordBreak(s: string, dict: string[]): boolean {\n  const root: any = {};\n  for (const w of dict) {\n    let node = root;\n    for (const c of w) { node[c] = node[c] || {}; node = node[c]; }\n    node.end = true;\n  }\n  const n = s.length;\n  const dp = new Array(n + 1).fill(false);\n  dp[0] = true;\n  for (let i = 0; i < n; i++) {\n    if (!dp[i]) continue;\n    let node = root;\n    for (let j = i; j < n; j++) {\n      node = node[s[j]];\n      if (!node) break;\n      if (node.end) dp[j + 1] = true;\n    }\n  }\n  return dp[n];\n}\n",
        time: "O(n²)",
        space: "O(n + dict)",
      },
      {
        label: "Set-based DP",
        approach: "dp over prefixes, checking each suffix substring against a set.",
        js: "function wordBreak(s, dict) {\n  const set = new Set(dict);\n  const n = s.length;\n  const dp = new Array(n + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= n; i++)\n    for (let j = 0; j < i; j++)\n      if (dp[j] && set.has(s.slice(j, i))) { dp[i] = true; break; }\n  return dp[n];\n}\n",
        ts: "function wordBreak(s: string, dict: string[]): boolean {\n  const set = new Set(dict);\n  const n = s.length;\n  const dp = new Array(n + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= n; i++)\n    for (let j = 0; j < i; j++)\n      if (dp[j] && set.has(s.slice(j, i))) { dp[i] = true; break; }\n  return dp[n];\n}\n",
        time: "O(n²)",
        space: "O(n + dict)",
      },
    ],
  },
  {
    id: "trie-max-xor",
    slug: "trie-maximum-xor",
    title: "Maximum XOR of Two Numbers",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given an array of non-negative integers, return the maximum XOR value obtainable from any two distinct elements.",
    examples: [
      { input: "[3,10,5,25,2,8]", output: "28" },
      { input: "[0]", output: "0" },
      { input: "[2,4]", output: "6" },
    ],
    constraints: ["1 <= nums.length <= 20000", "0 <= nums[i] < 2^31"],
    functionName: "maximumXor",
    starter: {
      js: "function maximumXor(nums) {\n  // Max XOR of any two elements.\n}\n",
      ts: "function maximumXor(nums: number[]): number {\n  // Max XOR of any two elements.\n  return 0;\n}\n",
    },
    visible: [
      { args: [[3, 10, 5, 25, 2, 8]], expected: 28 },
      { args: [[0]], expected: 0 },
      { args: [[2, 4]], expected: 6 },
    ],
    hidden: [
      { args: [[8, 10, 2]], expected: 10 },
      { args: [[14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]], expected: 127 },
      { args: [[1, 2, 3, 4]], expected: 7 },
      { args: [[5, 5]], expected: 0 },
      { args: [[1, 0]], expected: 1 },
      { args: [[3, 10, 5, 25, 2, 8]], expected: 28 },
    ],
    hints: [
      "Insert each number's bits (high to low) into a binary trie.",
      "For each number, greedily walk toward the opposite bit to maximize XOR.",
      "31 bits are enough for values below 2³¹.",
    ],
    solutions: [
      {
        label: "Binary trie (greedy)",
        approach: "At each bit, prefer the opposite branch to set that XOR bit.",
        js: "function maximumXor(nums) {\n  if (nums.length < 2) return 0;\n  const HIGH = 31, root = {};\n  for (const num of nums) {\n    let node = root;\n    for (let b = HIGH; b >= 0; b--) { const bit = (num >> b) & 1; node[bit] = node[bit] || {}; node = node[bit]; }\n  }\n  let best = 0;\n  for (const num of nums) {\n    let node = root, cur = 0;\n    for (let b = HIGH; b >= 0; b--) {\n      const bit = (num >> b) & 1, want = bit ^ 1;\n      if (node[want]) { cur |= (1 << b); node = node[want]; } else node = node[bit];\n    }\n    best = Math.max(best, cur);\n  }\n  return best;\n}\n",
        ts: "function maximumXor(nums: number[]): number {\n  if (nums.length < 2) return 0;\n  const HIGH = 31, root: any = {};\n  for (const num of nums) {\n    let node = root;\n    for (let b = HIGH; b >= 0; b--) { const bit = (num >> b) & 1; node[bit] = node[bit] || {}; node = node[bit]; }\n  }\n  let best = 0;\n  for (const num of nums) {\n    let node = root, cur = 0;\n    for (let b = HIGH; b >= 0; b--) {\n      const bit = (num >> b) & 1, want = bit ^ 1;\n      if (node[want]) { cur |= (1 << b); node = node[want]; } else node = node[bit];\n    }\n    best = Math.max(best, cur);\n  }\n  return best;\n}\n",
        time: "O(n · 32)",
        space: "O(n · 32)",
      },
      {
        label: "Brute force",
        approach: "Try every pair — an O(n²) baseline.",
        js: "function maximumXor(nums) {\n  let best = 0;\n  for (let i = 0; i < nums.length; i++)\n    for (let j = i + 1; j < nums.length; j++) best = Math.max(best, nums[i] ^ nums[j]);\n  return best;\n}\n",
        ts: "function maximumXor(nums: number[]): number {\n  let best = 0;\n  for (let i = 0; i < nums.length; i++)\n    for (let j = i + 1; j < nums.length; j++) best = Math.max(best, nums[i] ^ nums[j]);\n  return best;\n}\n",
        time: "O(n²)",
        space: "O(1)",
      },
    ],
  },
  {
    id: "trie-distinct-substrings",
    slug: "trie-count-distinct-substrings",
    title: "Count Distinct Substrings",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Given a string, return the number of distinct non-empty substrings it contains.",
    examples: [
      { input: '"abc"', output: "6" },
      { input: '"aaa"', output: "3" },
      { input: '"aba"', output: "5" },
    ],
    constraints: ["0 <= s.length <= 500", "lowercase letters"],
    functionName: "countDistinctSubstrings",
    starter: {
      js: "function countDistinctSubstrings(s) {\n  // Number of distinct non-empty substrings.\n}\n",
      ts: "function countDistinctSubstrings(s: string): number {\n  // Number of distinct non-empty substrings.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["abc"], expected: 6 },
      { args: ["aaa"], expected: 3 },
      { args: ["aba"], expected: 5 },
    ],
    hidden: [
      { args: ["a"], expected: 1 },
      { args: ["abab"], expected: 7 },
      { args: ["banana"], expected: 15 },
      { args: [""], expected: 0 },
      { args: ["aa"], expected: 2 },
      { args: ["abcabc"], expected: 15 },
    ],
    hints: [
      "Insert every suffix into a trie; each newly created node is a distinct substring.",
      "So the answer is the total number of nodes created (excluding the root).",
      "A hash set of all substrings gives the same count more simply.",
    ],
    solutions: [
      {
        label: "Suffix trie node count",
        approach: "Every new trie node while inserting all suffixes is a unique substring.",
        js: "function countDistinctSubstrings(s) {\n  const root = {};\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    let node = root;\n    for (let j = i; j < s.length; j++) {\n      const c = s[j];\n      if (!node[c]) { node[c] = {}; count++; }\n      node = node[c];\n    }\n  }\n  return count;\n}\n",
        ts: "function countDistinctSubstrings(s: string): number {\n  const root: any = {};\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    let node = root;\n    for (let j = i; j < s.length; j++) {\n      const c = s[j];\n      if (!node[c]) { node[c] = {}; count++; }\n      node = node[c];\n    }\n  }\n  return count;\n}\n",
        time: "O(n²)",
        space: "O(n²)",
      },
      {
        label: "Hash set of substrings",
        approach: "Add every substring to a set and return its size.",
        js: "function countDistinctSubstrings(s) {\n  const set = new Set();\n  for (let i = 0; i < s.length; i++)\n    for (let j = i + 1; j <= s.length; j++) set.add(s.slice(i, j));\n  return set.size;\n}\n",
        ts: "function countDistinctSubstrings(s: string): number {\n  const set = new Set<string>();\n  for (let i = 0; i < s.length; i++)\n    for (let j = i + 1; j <= s.length; j++) set.add(s.slice(i, j));\n  return set.size;\n}\n",
        time: "O(n³)",
        space: "O(n²)",
      },
    ],
  },
];

export const trieProblems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const trieMcqs: QuizQuestion[] = [
  {
    id: "s6-trie-prefix",
    kind: "mcq",
    prompt: "A trie is especially efficient for:",
    options: [
      "sorting numbers",
      "prefix queries and retrieval by shared prefixes",
      "finding medians",
      "detecting cycles in graphs",
    ],
    answerIndex: 1,
    explanation:
      "Words sharing a prefix share a path, so prefix lookups and completions run in time proportional to the query length.",
  },
  {
    id: "s6-trie-xor",
    kind: "mcq",
    prompt: "To maximize the XOR of a number against a set, a binary trie lets you:",
    options: [
      "sort the numbers first",
      "greedily follow the opposite bit at each level when it exists",
      "hash each number",
      "only compare equal-length numbers",
    ],
    answerIndex: 1,
    explanation:
      "Choosing the opposite bit at each position sets that XOR bit to 1, which is optimal from the most significant bit down.",
  },
];

export const trieModule: Module = {
  id: "m-pat-trie",
  stageId: S,
  title: "Tries in Problems",
  kind: "patternModule",
  summary:
    "Applying the prefix tree — prefix counts, autocomplete, wildcard search, word replacement, and a binary trie for maximum XOR.",
  lessonSections: [
    {
      heading: "The prefix tree, put to work",
      body: `A **trie** (prefix tree) stores a set of strings so that words sharing a prefix share a path from the root. You built one in the Stage-2 Trie lab; this module *uses* it. The core operations are insert and walk:

\`\`\`js
const root = {};
function insert(word) {
  let node = root;
  for (const c of word) { node[c] = node[c] || {}; node = node[c]; }
  node.end = true;             // mark a complete word
}
function startsWith(prefix) {
  let node = root;
  for (const c of prefix) { if (!node[c]) return false; node = node[c]; }
  return true;                 // reached the end of the prefix
}
\`\`\`

Every query costs time proportional to the **length of the string**, not the number of words — that's the payoff over scanning a list.`,
    },
    {
      heading: "Common trie tricks",
      body: `The drills cover the moves that show up again and again:

- **Prefix counts / autocomplete** — store a passing-through count, or DFS a subtree to list completions.
- **Wildcard search** — a '.' means try *every* child, so search becomes a small DFS.
- **Shortest root replacement** — walk each word and stop at the first end-of-word (Replace Words).
- **Buildable words** — a word qualifies iff every prefix node is itself a word end.
- **Binary trie for XOR** — insert numbers bit by bit (high to low) and greedily follow the *opposite* bit to maximize XOR.
- **Distinct substrings** — insert all suffixes; each new node is a unique substring.`,
    },
    {
      heading: "Recognition cues & pitfalls",
      body: `**Cues:** "prefix," "starts with," "autocomplete/typeahead," "dictionary of words," "replace with root," or bitwise "maximum XOR." Anytime you'd otherwise re-scan a word list for shared beginnings, a trie is the tool.

**Pitfalls:** mixing the end-of-word marker in with child keys (here we filter out the \`end\` key when iterating children); forgetting to mark \`end\` so prefixes get mistaken for words; rebuilding the trie inside a loop instead of once; and, for the binary trie, using too few bits (use 31–32 for 32-bit integers) or inserting before querying so a number matches itself — insert all first, then query. Each drill ships a trie solution and a set/array baseline so you can weigh the tradeoff. Work them easy to hard.`,
    },
  ],
  guidedExampleProblemId: "trie-contains",
  drillProblemIds: [
    "trie-contains",
    "trie-count-prefix",
    "trie-lcp",
    "trie-wildcard",
    "trie-replace-words",
    "trie-longest-word",
  ],
  testPoolProblemIds: [
    "trie-autocomplete",
    "trie-word-break",
    "trie-max-xor",
    "trie-distinct-substrings",
  ],
  complexityQuestionIds: ["s6-trie-prefix", "s6-trie-xor"],
  badgeId: "badge-pat-trie",
  prerequisiteModuleIds: ["m-pat-shortest-path"],
};
