import type { Module, Problem, QuizQuestion } from "@/types";
import { mkProblem, type ProblemDraft } from "@/data/foundations/factory";

const S = "dsa-s6";
const P = ["dp-string"];

const drafts: ProblemDraft[] = [
  /* ---- drills (easy → hard) ---- */
  {
    id: "d4-lcs",
    slug: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given two strings, return the length of their longest common subsequence — characters that appear in both in the same relative order, but not necessarily contiguously.",
    examples: [
      { input: '"abcde", "ace"', output: "3" },
      { input: '"abc", "abc"', output: "3" },
      { input: '"abc", "def"', output: "0" },
    ],
    constraints: ["0 <= a.length, b.length <= 1000"],
    functionName: "longestCommonSubsequence",
    starter: {
      js: "function longestCommonSubsequence(a, b) {\n  // Length of the LCS.\n}\n",
      ts: "function longestCommonSubsequence(a: string, b: string): number {\n  // Length of the LCS.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["abcde", "ace"], expected: 3 },
      { args: ["abc", "abc"], expected: 3 },
      { args: ["abc", "def"], expected: 0 },
    ],
    hidden: [
      { args: ["", "abc"], expected: 0 },
      { args: ["abc", ""], expected: 0 },
      { args: ["bl", "yby"], expected: 1 },
      { args: ["aggtab", "gxtxayb"], expected: 4 },
      { args: ["abcdgh", "aedfhr"], expected: 3 },
      { args: ["abcba", "abcbcba"], expected: 5 },
    ],
    hints: [
      "Compare the last characters: if they match, both shrink by one and add 1.",
      "If they differ, drop the last character of one string or the other and take the max.",
      "dp[i][j] over prefixes; the empty-prefix row and column are all 0.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Recurse on prefix lengths, matching or dropping a last character.",
        js: "function longestCommonSubsequence(a, b) {\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i === 0 || j === 0) return 0;\n    const key = i * (b.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (a[i - 1] === b[j - 1]) v = 1 + go(i - 1, j - 1);\n    else v = Math.max(go(i - 1, j), go(i, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(a.length, b.length);\n}\n",
        ts: "function longestCommonSubsequence(a: string, b: string): number {\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i === 0 || j === 0) return 0;\n    const key = i * (b.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (a[i - 1] === b[j - 1]) v = 1 + go(i - 1, j - 1);\n    else v = Math.max(go(i - 1, j), go(i, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(a.length, b.length);\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Tabulation (rolling rows)",
        approach: "Fill the prefix table row by row, keeping two rows.",
        js: "function longestCommonSubsequence(a, b) {\n  const m = a.length, n = b.length;\n  let prev = new Array(n + 1).fill(0);\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1).fill(0);\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) cur[j] = prev[j - 1] + 1;\n      else cur[j] = Math.max(prev[j], cur[j - 1]);\n    }\n    prev = cur;\n  }\n  return prev[n];\n}\n",
        ts: "function longestCommonSubsequence(a: string, b: string): number {\n  const m = a.length, n = b.length;\n  let prev = new Array(n + 1).fill(0);\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1).fill(0);\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) cur[j] = prev[j - 1] + 1;\n      else cur[j] = Math.max(prev[j], cur[j - 1]);\n    }\n    prev = cur;\n  }\n  return prev[n];\n}\n",
        time: "O(m·n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d4-longest-common-substring",
    slug: "longest-common-substring",
    title: "Longest Common Substring",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Given two strings, return the length of the longest string that is a contiguous substring of both.",
    examples: [
      { input: '"abcde", "abfce"', output: "2" },
      { input: '"abcdxyz", "xyzabcd"', output: "4" },
      { input: '"abc", "def"', output: "0" },
    ],
    constraints: ["0 <= a.length, b.length <= 1000"],
    functionName: "longestCommonSubstring",
    starter: {
      js: "function longestCommonSubstring(a, b) {\n  // Length of the longest shared contiguous substring.\n}\n",
      ts: "function longestCommonSubstring(a: string, b: string): number {\n  // Length of the longest shared contiguous substring.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["abcde", "abfce"], expected: 2 },
      { args: ["abcdxyz", "xyzabcd"], expected: 4 },
      { args: ["abc", "def"], expected: 0 },
    ],
    hidden: [
      { args: ["", "a"], expected: 0 },
      { args: ["a", "a"], expected: 1 },
      { args: ["zxabcdezy", "yzabcdezx"], expected: 6 },
      { args: ["aaaa", "aa"], expected: 2 },
      { args: ["abcabc", "abc"], expected: 3 },
      { args: ["xyz", "xyab"], expected: 2 },
    ],
    hints: [
      "Unlike a subsequence, a mismatch resets the run to zero.",
      "dp[i][j] = dp[i-1][j-1] + 1 when characters match, else 0.",
      "Track the maximum dp value seen, not the corner cell.",
    ],
    solutions: [
      {
        label: "Tabulation (rolling rows)",
        approach: "Extend the diagonal run on a match, reset on a mismatch.",
        js: "function longestCommonSubstring(a, b) {\n  const m = a.length, n = b.length;\n  let prev = new Array(n + 1).fill(0);\n  let best = 0;\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1).fill(0);\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) { cur[j] = prev[j - 1] + 1; best = Math.max(best, cur[j]); }\n    }\n    prev = cur;\n  }\n  return best;\n}\n",
        ts: "function longestCommonSubstring(a: string, b: string): number {\n  const m = a.length, n = b.length;\n  let prev = new Array(n + 1).fill(0);\n  let best = 0;\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1).fill(0);\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) { cur[j] = prev[j - 1] + 1; best = Math.max(best, cur[j]); }\n    }\n    prev = cur;\n  }\n  return best;\n}\n",
        time: "O(m·n)",
        space: "O(n)",
      },
      {
        label: "Memoized run length",
        approach: "run(i,j) = matching run ending at those indices; scan all cells.",
        js: "function longestCommonSubstring(a, b) {\n  const memo = new Map();\n  const run = (i, j) => {\n    if (i === 0 || j === 0) return 0;\n    if (a[i - 1] !== b[j - 1]) return 0;\n    const key = i * (b.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = 1 + run(i - 1, j - 1);\n    memo.set(key, v);\n    return v;\n  };\n  let best = 0;\n  for (let i = 1; i <= a.length; i++)\n    for (let j = 1; j <= b.length; j++) best = Math.max(best, run(i, j));\n  return best;\n}\n",
        ts: "function longestCommonSubstring(a: string, b: string): number {\n  const memo = new Map<number, number>();\n  const run = (i: number, j: number): number => {\n    if (i === 0 || j === 0) return 0;\n    if (a[i - 1] !== b[j - 1]) return 0;\n    const key = i * (b.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    const v = 1 + run(i - 1, j - 1);\n    memo.set(key, v);\n    return v;\n  };\n  let best = 0;\n  for (let i = 1; i <= a.length; i++)\n    for (let j = 1; j <= b.length; j++) best = Math.max(best, run(i, j));\n  return best;\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
    ],
  },
  {
    id: "d4-edit-distance",
    slug: "edit-distance",
    title: "Edit Distance",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return the minimum number of single-character insertions, deletions, or replacements needed to turn the first string into the second (Levenshtein distance).",
    examples: [
      { input: '"horse", "ros"', output: "3" },
      { input: '"intention", "execution"', output: "5" },
      { input: '"", "abc"', output: "3" },
    ],
    constraints: ["0 <= a.length, b.length <= 500"],
    functionName: "editDistance",
    starter: {
      js: "function editDistance(a, b) {\n  // Min insert/delete/replace operations.\n}\n",
      ts: "function editDistance(a: string, b: string): number {\n  // Min insert/delete/replace operations.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["horse", "ros"], expected: 3 },
      { args: ["intention", "execution"], expected: 5 },
      { args: ["", "abc"], expected: 3 },
    ],
    hidden: [
      { args: ["abc", ""], expected: 3 },
      { args: ["", ""], expected: 0 },
      { args: ["abc", "abc"], expected: 0 },
      { args: ["sunday", "saturday"], expected: 3 },
      { args: ["kitten", "sitting"], expected: 3 },
      { args: ["a", "b"], expected: 1 },
    ],
    hints: [
      "If the last characters match, no operation is needed there — recurse on the prefixes.",
      "Otherwise take 1 + min(delete, insert, replace) = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).",
      "The base cases are the lengths themselves (turn a string into empty).",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Recurse on prefixes; free move when last characters match.",
        js: "function editDistance(a, b) {\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i === 0) return j;\n    if (j === 0) return i;\n    const key = i * (b.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (a[i - 1] === b[j - 1]) v = go(i - 1, j - 1);\n    else v = 1 + Math.min(go(i - 1, j), go(i, j - 1), go(i - 1, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(a.length, b.length);\n}\n",
        ts: "function editDistance(a: string, b: string): number {\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i === 0) return j;\n    if (j === 0) return i;\n    const key = i * (b.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (a[i - 1] === b[j - 1]) v = go(i - 1, j - 1);\n    else v = 1 + Math.min(go(i - 1, j), go(i, j - 1), go(i - 1, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(a.length, b.length);\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Tabulation (rolling rows)",
        approach: "Fill the prefix table; seed the first row and column with lengths.",
        js: "function editDistance(a, b) {\n  const m = a.length, n = b.length;\n  let prev = Array.from({ length: n + 1 }, (_, j) => j);\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1);\n    cur[0] = i;\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) cur[j] = prev[j - 1];\n      else cur[j] = 1 + Math.min(prev[j], cur[j - 1], prev[j - 1]);\n    }\n    prev = cur;\n  }\n  return prev[n];\n}\n",
        ts: "function editDistance(a: string, b: string): number {\n  const m = a.length, n = b.length;\n  let prev = Array.from({ length: n + 1 }, (_, j) => j);\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1);\n    cur[0] = i;\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) cur[j] = prev[j - 1];\n      else cur[j] = 1 + Math.min(prev[j], cur[j - 1], prev[j - 1]);\n    }\n    prev = cur;\n  }\n  return prev[n];\n}\n",
        time: "O(m·n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d4-longest-palindromic-subseq",
    slug: "longest-palindromic-subsequence",
    title: "Longest Palindromic Subsequence",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the length of the longest subsequence of the given string that reads the same forwards and backwards.",
    examples: [
      { input: '"bbbab"', output: "4" },
      { input: '"cbbd"', output: "2" },
      { input: '"a"', output: "1" },
    ],
    constraints: ["0 <= s.length <= 1000"],
    functionName: "longestPalindromeSubseq",
    starter: {
      js: "function longestPalindromeSubseq(s) {\n  // Length of the longest palindromic subsequence.\n}\n",
      ts: "function longestPalindromeSubseq(s: string): number {\n  // Length of the longest palindromic subsequence.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["bbbab"], expected: 4 },
      { args: ["cbbd"], expected: 2 },
      { args: ["a"], expected: 1 },
    ],
    hidden: [
      { args: [""], expected: 0 },
      { args: ["aba"], expected: 3 },
      { args: ["bananas"], expected: 5 },
      { args: ["racecar"], expected: 7 },
      { args: ["aaaa"], expected: 4 },
      { args: ["abcba"], expected: 5 },
    ],
    hints: [
      "This is the LCS of the string with its own reverse.",
      "Or fill an interval DP: if s[i] === s[j], dp[i][j] = 2 + dp[i+1][j-1].",
      "Otherwise dp[i][j] = max(dp[i+1][j], dp[i][j-1]); single characters are length 1.",
    ],
    solutions: [
      {
        label: "Interval memoization",
        approach: "Grow palindromes inward from both ends, cached by interval.",
        js: "function longestPalindromeSubseq(s) {\n  const n = s.length;\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i > j) return 0;\n    if (i === j) return 1;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (s[i] === s[j]) v = 2 + go(i + 1, j - 1);\n    else v = Math.max(go(i + 1, j), go(i, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, n - 1);\n}\n",
        ts: "function longestPalindromeSubseq(s: string): number {\n  const n = s.length;\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i > j) return 0;\n    if (i === j) return 1;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (s[i] === s[j]) v = 2 + go(i + 1, j - 1);\n    else v = Math.max(go(i + 1, j), go(i, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, n - 1);\n}\n",
        time: "O(n²)",
        space: "O(n²)",
      },
      {
        label: "LCS with the reverse",
        approach: "Longest palindromic subsequence equals LCS(s, reverse(s)).",
        js: "function longestPalindromeSubseq(s) {\n  const t = s.split('').reverse().join('');\n  const n = s.length;\n  let prev = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) {\n    const cur = new Array(n + 1).fill(0);\n    for (let j = 1; j <= n; j++) {\n      if (s[i - 1] === t[j - 1]) cur[j] = prev[j - 1] + 1;\n      else cur[j] = Math.max(prev[j], cur[j - 1]);\n    }\n    prev = cur;\n  }\n  return prev[n];\n}\n",
        ts: "function longestPalindromeSubseq(s: string): number {\n  const t = s.split('').reverse().join('');\n  const n = s.length;\n  let prev = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) {\n    const cur = new Array(n + 1).fill(0);\n    for (let j = 1; j <= n; j++) {\n      if (s[i - 1] === t[j - 1]) cur[j] = prev[j - 1] + 1;\n      else cur[j] = Math.max(prev[j], cur[j - 1]);\n    }\n    prev = cur;\n  }\n  return prev[n];\n}\n",
        time: "O(n²)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d4-min-insertions-palindrome",
    slug: "min-insertions-palindrome",
    title: "Minimum Insertions for a Palindrome",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the fewest characters you must insert anywhere in the string to make it a palindrome.",
    examples: [
      { input: '"zzazz"', output: "0" },
      { input: '"mbadm"', output: "2" },
      { input: '"leetcode"', output: "5" },
    ],
    constraints: ["0 <= s.length <= 1000"],
    functionName: "minInsertionsPalindrome",
    starter: {
      js: "function minInsertionsPalindrome(s) {\n  // Fewest insertions to make s a palindrome.\n}\n",
      ts: "function minInsertionsPalindrome(s: string): number {\n  // Fewest insertions to make s a palindrome.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["zzazz"], expected: 0 },
      { args: ["mbadm"], expected: 2 },
      { args: ["leetcode"], expected: 5 },
    ],
    hidden: [
      { args: [""], expected: 0 },
      { args: ["a"], expected: 0 },
      { args: ["ab"], expected: 1 },
      { args: ["aa"], expected: 0 },
      { args: ["abcd"], expected: 3 },
      { args: ["race"], expected: 3 },
    ],
    hints: [
      "Every character not part of the longest palindromic subsequence needs a mirror inserted.",
      "Answer = length − longestPalindromicSubsequence(s).",
      "Compute the LPS with the same interval DP as the previous drill.",
    ],
    solutions: [
      {
        label: "Length minus LPS (memoized)",
        approach: "Insertions needed equal the characters outside the longest palindromic subsequence.",
        js: "function minInsertionsPalindrome(s) {\n  const n = s.length;\n  const memo = new Map();\n  const lps = (i, j) => {\n    if (i > j) return 0;\n    if (i === j) return 1;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (s[i] === s[j]) v = 2 + lps(i + 1, j - 1);\n    else v = Math.max(lps(i + 1, j), lps(i, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return n - lps(0, n - 1);\n}\n",
        ts: "function minInsertionsPalindrome(s: string): number {\n  const n = s.length;\n  const memo = new Map<number, number>();\n  const lps = (i: number, j: number): number => {\n    if (i > j) return 0;\n    if (i === j) return 1;\n    const key = i * n + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (s[i] === s[j]) v = 2 + lps(i + 1, j - 1);\n    else v = Math.max(lps(i + 1, j), lps(i, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return n - lps(0, n - 1);\n}\n",
        time: "O(n²)",
        space: "O(n²)",
      },
      {
        label: "Interval tabulation",
        approach: "dp[i][j] = min insertions to make s[i..j] a palindrome.",
        js: "function minInsertionsPalindrome(s) {\n  const n = s.length;\n  if (n === 0) return 0;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(0));\n  for (let len = 2; len <= n; len++)\n    for (let i = 0; i + len - 1 < n; i++) {\n      const j = i + len - 1;\n      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1];\n      else dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j - 1]);\n    }\n  return dp[0][n - 1];\n}\n",
        ts: "function minInsertionsPalindrome(s: string): number {\n  const n = s.length;\n  if (n === 0) return 0;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(0));\n  for (let len = 2; len <= n; len++)\n    for (let i = 0; i + len - 1 < n; i++) {\n      const j = i + len - 1;\n      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1];\n      else dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j - 1]);\n    }\n  return dp[0][n - 1];\n}\n",
        time: "O(n²)",
        space: "O(n²)",
      },
    ],
  },
  {
    id: "d4-longest-palindromic-substring-length",
    slug: "longest-palindromic-substring-length",
    title: "Longest Palindromic Substring Length",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return the length of the longest contiguous substring that reads the same forwards and backwards.",
    examples: [
      { input: '"babad"', output: "3" },
      { input: '"cbbd"', output: "2" },
      { input: '"a"', output: "1" },
    ],
    constraints: ["0 <= s.length <= 1000"],
    functionName: "longestPalindromicSubstringLength",
    starter: {
      js: "function longestPalindromicSubstringLength(s) {\n  // Length of the longest palindromic substring.\n}\n",
      ts: "function longestPalindromicSubstringLength(s: string): number {\n  // Length of the longest palindromic substring.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["babad"], expected: 3 },
      { args: ["cbbd"], expected: 2 },
      { args: ["a"], expected: 1 },
    ],
    hidden: [
      { args: [""], expected: 0 },
      { args: ["ac"], expected: 1 },
      { args: ["racecar"], expected: 7 },
      { args: ["aaaa"], expected: 4 },
      { args: ["abcda"], expected: 1 },
      { args: ["forgeeksskeegfor"], expected: 10 },
    ],
    hints: [
      "A substring is a palindrome iff its ends match and its interior is a palindrome.",
      "Interval DP: dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i+1][j-1]).",
      "Alternatively expand around each of the 2n-1 centers — O(n²) time, O(1) space.",
    ],
    solutions: [
      {
        label: "Expand around centers",
        approach: "Grow outward from every single and double center, tracking the max.",
        js: "function longestPalindromicSubstringLength(s) {\n  if (s.length === 0) return 0;\n  let best = 1;\n  const expand = (l, r) => {\n    while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }\n    return r - l - 1;\n  };\n  for (let i = 0; i < s.length; i++) {\n    best = Math.max(best, expand(i, i), expand(i, i + 1));\n  }\n  return best;\n}\n",
        ts: "function longestPalindromicSubstringLength(s: string): number {\n  if (s.length === 0) return 0;\n  let best = 1;\n  const expand = (l: number, r: number): number => {\n    while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }\n    return r - l - 1;\n  };\n  for (let i = 0; i < s.length; i++) {\n    best = Math.max(best, expand(i, i), expand(i, i + 1));\n  }\n  return best;\n}\n",
        time: "O(n²)",
        space: "O(1)",
      },
      {
        label: "Interval DP",
        approach: "A range is a palindrome when its ends match and its interior is one.",
        js: "function longestPalindromicSubstringLength(s) {\n  const n = s.length;\n  if (n === 0) return 0;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(false));\n  let best = 1;\n  for (let i = 0; i < n; i++) dp[i][i] = true;\n  for (let len = 2; len <= n; len++)\n    for (let i = 0; i + len - 1 < n; i++) {\n      const j = i + len - 1;\n      if (s[i] === s[j] && (len < 3 || dp[i + 1][j - 1])) {\n        dp[i][j] = true;\n        best = Math.max(best, len);\n      }\n    }\n  return best;\n}\n",
        ts: "function longestPalindromicSubstringLength(s: string): number {\n  const n = s.length;\n  if (n === 0) return 0;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(false));\n  let best = 1;\n  for (let i = 0; i < n; i++) dp[i][i] = true;\n  for (let len = 2; len <= n; len++)\n    for (let i = 0; i + len - 1 < n; i++) {\n      const j = i + len - 1;\n      if (s[i] === s[j] && (len < 3 || dp[i + 1][j - 1])) {\n        dp[i][j] = true;\n        best = Math.max(best, len);\n      }\n    }\n  return best;\n}\n",
        time: "O(n²)",
        space: "O(n²)",
      },
    ],
  },

  /* ---- held-out test pool ---- */
  {
    id: "d4-delete-distance",
    slug: "delete-operation-two-strings",
    title: "Delete Operation for Two Strings",
    difficulty: "medium",
    patternIds: P,
    statement:
      "In one step you may delete a single character from either string. Return the minimum number of deletions that make the two strings equal.",
    examples: [
      { input: '"sea", "eat"', output: "2" },
      { input: '"leetcode", "etco"', output: "4" },
      { input: '"", "abc"', output: "3" },
    ],
    constraints: ["0 <= a.length, b.length <= 500"],
    functionName: "deleteDistance",
    starter: {
      js: "function deleteDistance(a, b) {\n  // Min deletions to make the strings equal.\n}\n",
      ts: "function deleteDistance(a: string, b: string): number {\n  // Min deletions to make the strings equal.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["sea", "eat"], expected: 2 },
      { args: ["leetcode", "etco"], expected: 4 },
      { args: ["", "abc"], expected: 3 },
    ],
    hidden: [
      { args: ["abc", "abc"], expected: 0 },
      { args: ["a", "b"], expected: 2 },
      { args: ["abc", ""], expected: 3 },
      { args: ["park", "spake"], expected: 3 },
      { args: ["food", "money"], expected: 7 },
      { args: ["ab", "ba"], expected: 2 },
    ],
    hints: [
      "Characters you keep must form a common subsequence of both strings.",
      "Delete everything outside the LCS: answer = m + n − 2·LCS(a, b).",
      "Compute the LCS with the standard prefix DP.",
    ],
    solutions: [
      {
        label: "Via LCS (tabulation)",
        approach: "Keep the LCS, delete the rest from each string.",
        js: "function deleteDistance(a, b) {\n  const m = a.length, n = b.length;\n  let prev = new Array(n + 1).fill(0);\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1).fill(0);\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) cur[j] = prev[j - 1] + 1;\n      else cur[j] = Math.max(prev[j], cur[j - 1]);\n    }\n    prev = cur;\n  }\n  return m + n - 2 * prev[n];\n}\n",
        ts: "function deleteDistance(a: string, b: string): number {\n  const m = a.length, n = b.length;\n  let prev = new Array(n + 1).fill(0);\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1).fill(0);\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) cur[j] = prev[j - 1] + 1;\n      else cur[j] = Math.max(prev[j], cur[j - 1]);\n    }\n    prev = cur;\n  }\n  return m + n - 2 * prev[n];\n}\n",
        time: "O(m·n)",
        space: "O(n)",
      },
      {
        label: "Direct memoized recursion",
        approach: "On a mismatch, delete from one side or the other and add 1.",
        js: "function deleteDistance(a, b) {\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i === 0) return j;\n    if (j === 0) return i;\n    const key = i * (b.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (a[i - 1] === b[j - 1]) v = go(i - 1, j - 1);\n    else v = 1 + Math.min(go(i - 1, j), go(i, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(a.length, b.length);\n}\n",
        ts: "function deleteDistance(a: string, b: string): number {\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i === 0) return j;\n    if (j === 0) return i;\n    const key = i * (b.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (a[i - 1] === b[j - 1]) v = go(i - 1, j - 1);\n    else v = 1 + Math.min(go(i - 1, j), go(i, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(a.length, b.length);\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
    ],
  },
  {
    id: "d4-count-palindromic-substrings",
    slug: "count-palindromic-substrings",
    title: "Count Palindromic Substrings",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return how many contiguous substrings of the string are palindromes (each distinct start/end range counts once, single characters included).",
    examples: [
      { input: '"abc"', output: "3" },
      { input: '"aaa"', output: "6" },
      { input: '""', output: "0" },
    ],
    constraints: ["0 <= s.length <= 1000"],
    functionName: "countPalindromicSubstrings",
    starter: {
      js: "function countPalindromicSubstrings(s) {\n  // Count palindromic substrings.\n}\n",
      ts: "function countPalindromicSubstrings(s: string): number {\n  // Count palindromic substrings.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["abc"], expected: 3 },
      { args: ["aaa"], expected: 6 },
      { args: [""], expected: 0 },
    ],
    hidden: [
      { args: ["a"], expected: 1 },
      { args: ["aa"], expected: 3 },
      { args: ["abba"], expected: 6 },
      { args: ["racecar"], expected: 10 },
      { args: ["abcba"], expected: 7 },
      { args: ["aaaa"], expected: 10 },
    ],
    hints: [
      "Every single character is a palindrome; count those plus the longer ones.",
      "Expand around each of the 2n-1 centers, counting each palindrome found.",
      "Or fill an interval DP marking which ranges are palindromes.",
    ],
    solutions: [
      {
        label: "Expand around centers",
        approach: "From each center, count palindromes while the ends keep matching.",
        js: "function countPalindromicSubstrings(s) {\n  let count = 0;\n  const expand = (l, r) => {\n    while (l >= 0 && r < s.length && s[l] === s[r]) { count++; l--; r++; }\n  };\n  for (let i = 0; i < s.length; i++) { expand(i, i); expand(i, i + 1); }\n  return count;\n}\n",
        ts: "function countPalindromicSubstrings(s: string): number {\n  let count = 0;\n  const expand = (l: number, r: number): void => {\n    while (l >= 0 && r < s.length && s[l] === s[r]) { count++; l--; r++; }\n  };\n  for (let i = 0; i < s.length; i++) { expand(i, i); expand(i, i + 1); }\n  return count;\n}\n",
        time: "O(n²)",
        space: "O(1)",
      },
      {
        label: "Interval DP",
        approach: "Mark palindromic ranges by increasing length and count them.",
        js: "function countPalindromicSubstrings(s) {\n  const n = s.length;\n  if (n === 0) return 0;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(false));\n  let count = 0;\n  for (let i = 0; i < n; i++) { dp[i][i] = true; count++; }\n  for (let len = 2; len <= n; len++)\n    for (let i = 0; i + len - 1 < n; i++) {\n      const j = i + len - 1;\n      if (s[i] === s[j] && (len < 3 || dp[i + 1][j - 1])) { dp[i][j] = true; count++; }\n    }\n  return count;\n}\n",
        ts: "function countPalindromicSubstrings(s: string): number {\n  const n = s.length;\n  if (n === 0) return 0;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(false));\n  let count = 0;\n  for (let i = 0; i < n; i++) { dp[i][i] = true; count++; }\n  for (let len = 2; len <= n; len++)\n    for (let i = 0; i + len - 1 < n; i++) {\n      const j = i + len - 1;\n      if (s[i] === s[j] && (len < 3 || dp[i + 1][j - 1])) { dp[i][j] = true; count++; }\n    }\n  return count;\n}\n",
        time: "O(n²)",
        space: "O(n²)",
      },
    ],
  },
  {
    id: "d4-distinct-subsequences",
    slug: "distinct-subsequences",
    title: "Distinct Subsequences",
    difficulty: "hard",
    patternIds: P,
    statement:
      "Return how many distinct subsequences of `s` equal the string `t` (an empty `t` has exactly one subsequence — the empty one).",
    examples: [
      { input: '"rabbbit", "rabbit"', output: "3" },
      { input: '"babgbag", "bag"', output: "5" },
      { input: '"abc", ""', output: "1" },
    ],
    constraints: ["0 <= s.length, t.length <= 1000"],
    functionName: "numDistinctSubsequences",
    starter: {
      js: "function numDistinctSubsequences(s, t) {\n  // Count subsequences of s equal to t.\n}\n",
      ts: "function numDistinctSubsequences(s: string, t: string): number {\n  // Count subsequences of s equal to t.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["rabbbit", "rabbit"], expected: 3 },
      { args: ["babgbag", "bag"], expected: 5 },
      { args: ["abc", ""], expected: 1 },
    ],
    hidden: [
      { args: ["", "a"], expected: 0 },
      { args: ["aaa", "a"], expected: 3 },
      { args: ["aaa", "aa"], expected: 3 },
      { args: ["abcabc", "abc"], expected: 4 },
      { args: ["xyz", "xyz"], expected: 1 },
      { args: ["aabb", "ab"], expected: 4 },
    ],
    hints: [
      "At each s character you can always skip it; if it matches the current t character you may also consume both.",
      "dp[i][j] = dp[i-1][j] + (s[i-1] === t[j-1] ? dp[i-1][j-1] : 0).",
      "An empty t is matched exactly one way, so that column is all 1.",
    ],
    solutions: [
      {
        label: "Memoized recursion",
        approach: "Skip the current s char, or consume it when it matches t.",
        js: "function numDistinctSubsequences(s, t) {\n  const memo = new Map();\n  const go = (i, j) => {\n    if (j === t.length) return 1;\n    if (i === s.length) return 0;\n    const key = i * (t.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    let v = go(i + 1, j);\n    if (s[i] === t[j]) v += go(i + 1, j + 1);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        ts: "function numDistinctSubsequences(s: string, t: string): number {\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (j === t.length) return 1;\n    if (i === s.length) return 0;\n    const key = i * (t.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    let v = go(i + 1, j);\n    if (s[i] === t[j]) v += go(i + 1, j + 1);\n    memo.set(key, v);\n    return v;\n  };\n  return go(0, 0);\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
      {
        label: "Tabulation (rolling)",
        approach: "Fill counts over prefixes; the empty-t column is all 1.",
        js: "function numDistinctSubsequences(s, t) {\n  const m = s.length, n = t.length;\n  let prev = new Array(n + 1).fill(0);\n  prev[0] = 1;\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1).fill(0);\n    cur[0] = 1;\n    for (let j = 1; j <= n; j++) {\n      cur[j] = prev[j];\n      if (s[i - 1] === t[j - 1]) cur[j] += prev[j - 1];\n    }\n    prev = cur;\n  }\n  return prev[n];\n}\n",
        ts: "function numDistinctSubsequences(s: string, t: string): number {\n  const m = s.length, n = t.length;\n  let prev = new Array(n + 1).fill(0);\n  prev[0] = 1;\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1).fill(0);\n    cur[0] = 1;\n    for (let j = 1; j <= n; j++) {\n      cur[j] = prev[j];\n      if (s[i - 1] === t[j - 1]) cur[j] += prev[j - 1];\n    }\n    prev = cur;\n  }\n  return prev[n];\n}\n",
        time: "O(m·n)",
        space: "O(n)",
      },
    ],
  },
  {
    id: "d4-shortest-common-supersequence-length",
    slug: "shortest-common-supersequence-length",
    title: "Shortest Common Supersequence Length",
    difficulty: "medium",
    patternIds: P,
    statement:
      "Return the length of the shortest string that has both input strings as subsequences.",
    examples: [
      { input: '"abac", "cab"', output: "5" },
      { input: '"abc", "abc"', output: "3" },
      { input: '"", "abc"', output: "3" },
    ],
    constraints: ["0 <= a.length, b.length <= 1000"],
    functionName: "shortestCommonSupersequenceLength",
    starter: {
      js: "function shortestCommonSupersequenceLength(a, b) {\n  // Length of the shortest common supersequence.\n}\n",
      ts: "function shortestCommonSupersequenceLength(a: string, b: string): number {\n  // Length of the shortest common supersequence.\n  return 0;\n}\n",
    },
    visible: [
      { args: ["abac", "cab"], expected: 5 },
      { args: ["abc", "abc"], expected: 3 },
      { args: ["", "abc"], expected: 3 },
    ],
    hidden: [
      { args: ["abc", ""], expected: 3 },
      { args: ["", ""], expected: 0 },
      { args: ["aaaa", "aa"], expected: 4 },
      { args: ["geek", "eke"], expected: 5 },
      { args: ["abcbdab", "bdcaba"], expected: 9 },
      { args: ["ab", "cd"], expected: 4 },
    ],
    hints: [
      "The shared part only needs to appear once — that's the LCS.",
      "Answer = m + n − LCS(a, b).",
      "Compute the LCS with the standard prefix DP.",
    ],
    solutions: [
      {
        label: "Via LCS (tabulation)",
        approach: "Merge both strings, writing the common subsequence just once.",
        js: "function shortestCommonSupersequenceLength(a, b) {\n  const m = a.length, n = b.length;\n  let prev = new Array(n + 1).fill(0);\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1).fill(0);\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) cur[j] = prev[j - 1] + 1;\n      else cur[j] = Math.max(prev[j], cur[j - 1]);\n    }\n    prev = cur;\n  }\n  return m + n - prev[n];\n}\n",
        ts: "function shortestCommonSupersequenceLength(a: string, b: string): number {\n  const m = a.length, n = b.length;\n  let prev = new Array(n + 1).fill(0);\n  for (let i = 1; i <= m; i++) {\n    const cur = new Array(n + 1).fill(0);\n    for (let j = 1; j <= n; j++) {\n      if (a[i - 1] === b[j - 1]) cur[j] = prev[j - 1] + 1;\n      else cur[j] = Math.max(prev[j], cur[j - 1]);\n    }\n    prev = cur;\n  }\n  return m + n - prev[n];\n}\n",
        time: "O(m·n)",
        space: "O(n)",
      },
      {
        label: "Direct memoized recursion",
        approach: "Match a shared character once, else advance the cheaper side.",
        js: "function shortestCommonSupersequenceLength(a, b) {\n  const memo = new Map();\n  const go = (i, j) => {\n    if (i === 0) return j;\n    if (j === 0) return i;\n    const key = i * (b.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (a[i - 1] === b[j - 1]) v = 1 + go(i - 1, j - 1);\n    else v = 1 + Math.min(go(i - 1, j), go(i, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(a.length, b.length);\n}\n",
        ts: "function shortestCommonSupersequenceLength(a: string, b: string): number {\n  const memo = new Map<number, number>();\n  const go = (i: number, j: number): number => {\n    if (i === 0) return j;\n    if (j === 0) return i;\n    const key = i * (b.length + 1) + j;\n    if (memo.has(key)) return memo.get(key);\n    let v;\n    if (a[i - 1] === b[j - 1]) v = 1 + go(i - 1, j - 1);\n    else v = 1 + Math.min(go(i - 1, j), go(i, j - 1));\n    memo.set(key, v);\n    return v;\n  };\n  return go(a.length, b.length);\n}\n",
        time: "O(m·n)",
        space: "O(m·n)",
      },
    ],
  },
];

export const dp4Problems: Problem[] = drafts.map((d) => mkProblem(S, d));

export const dp4Mcqs: QuizQuestion[] = [
  {
    id: "s6-d4-subseq-substr",
    kind: "mcq",
    prompt:
      "The only difference between the LCS and longest-common-substring recurrences is that a substring:",
    options: [
      "adds 1 on every character, matched or not",
      "resets its run to 0 on a mismatch instead of carrying the best neighbour",
      "uses a 1-D table",
      "requires the strings to be sorted first",
    ],
    answerIndex: 1,
    explanation:
      "A substring must be contiguous, so any mismatch breaks the run; a subsequence may skip characters and carries the max of its neighbours.",
  },
  {
    id: "s6-d4-lps-lcs",
    kind: "mcq",
    prompt: "The longest palindromic subsequence of a string s equals:",
    options: [
      "the LCS of s with its own reverse",
      "the length of s minus 1",
      "the number of distinct characters in s",
      "the longest common substring of s and its reverse",
    ],
    answerIndex: 0,
    explanation:
      "A palindromic subsequence reads the same reversed, so it is exactly a common subsequence of s and reverse(s).",
  },
];

export const dp4Module: Module = {
  id: "m-pat-dp-string",
  stageId: S,
  title: "Dynamic Programming IV — Strings",
  kind: "patternModule",
  summary:
    "Two-sequence and interval DP over strings — LCS and edit distance, plus the palindrome family, all via memoize → tabulate → shrink.",
  lessonSections: [
    {
      heading: "Two sequences, one table",
      body: `String DP is grid DP where the two axes are the **prefixes of two strings** (or, for palindromes, the two ends of one string). The state \`dp[i][j]\` answers a question about \`a[0..i)\` and \`b[0..j)\`, and the transition compares the two current characters:

- **match** → the answer usually comes from the diagonal \`dp[i-1][j-1]\`,
- **mismatch** → take the best of dropping a character from one side or the other.

\`\`\`js
// Longest common subsequence, rolling two rows
function lcs(a, b) {
  let prev = new Array(b.length + 1).fill(0);
  for (let i = 1; i <= a.length; i++) {
    const cur = new Array(b.length + 1).fill(0);
    for (let j = 1; j <= b.length; j++) {
      cur[j] = a[i-1] === b[j-1] ? prev[j-1] + 1 : Math.max(prev[j], cur[j-1]);
    }
    prev = cur;
  }
  return prev[b.length];
}
\`\`\`

Same three stages: derive the recursion and memoize by \`(i, j)\`, tabulate the prefix table, then keep only the rows you still read.`,
    },
    {
      heading: "Recognition cues",
      body: `Reach for string DP when:

- you compare **two strings** for similarity — longest common subsequence/substring, edit distance, delete distance, shortest common supersequence, distinct subsequences;
- you ask about **palindromes** inside one string — longest palindromic subsequence or substring, minimum insertions, counting palindromic substrings.

Palindrome problems are **interval DP**: the state is a range \`[i, j]\` and you grow inward from both ends, or expand outward from every center.`,
    },
    {
      heading: "Templates & pitfalls",
      body: `\`\`\`ts
// Two-string prefix DP
function go(i: number, j: number): number {
  if (i === 0 || j === 0) return base(i, j);   // one string is empty
  if (a[i-1] === b[j-1]) return matchCase(go(i-1, j-1));
  return combine(go(i-1, j), go(i, j-1));
}

// Interval DP over one string
// fill by increasing length so dp[i+1][j-1] is ready before dp[i][j]
\`\`\`

**Pitfalls:** confusing subsequence (may skip, carry the max) with substring (contiguous, reset on mismatch); getting the **base row/column** wrong (edit distance seeds them with lengths, distinct-subsequences seeds the empty-t column with 1); and, for interval DP, iterating in the wrong order so the inner range isn't computed yet — always fill by **increasing interval length**. Several drills reduce to LCS; recognizing that turns a "new" problem into one you already solved. Every drill ships two solutions — compare them, and work easy to hard.`,
    },
  ],
  guidedExampleProblemId: "d4-lcs",
  drillProblemIds: [
    "d4-lcs",
    "d4-longest-common-substring",
    "d4-edit-distance",
    "d4-longest-palindromic-subseq",
    "d4-min-insertions-palindrome",
    "d4-longest-palindromic-substring-length",
  ],
  testPoolProblemIds: [
    "d4-delete-distance",
    "d4-count-palindromic-substrings",
    "d4-distinct-subsequences",
    "d4-shortest-common-supersequence-length",
  ],
  complexityQuestionIds: ["s6-d4-subseq-substr", "s6-d4-lps-lcs"],
  badgeId: "badge-pat-dp-string",
  prerequisiteModuleIds: ["m-pat-dp-grid"],
};
