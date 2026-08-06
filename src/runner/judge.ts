import type { ComparatorFlags, JudgeType } from "@/types";

/**
 * Fold a problem's judgeType into concrete comparator flags. This is the single
 * place that knows "orderInsensitiveArray means order doesn't matter".
 */
export function effectiveFlags(
  judgeType: JudgeType | undefined,
  flags?: ComparatorFlags,
): ComparatorFlags {
  const base: ComparatorFlags = { ...(flags ?? {}) };
  if (judgeType === "orderInsensitiveArray") base.orderInsensitive = true;
  return base;
}

/**
 * Structural deep equality used by the judge.
 * - NaN equals NaN (unless nanEqualsNan is explicitly false).
 * - Object key order is ignored.
 * - Arrays compare as multisets when orderInsensitive is set.
 * - Numbers may be compared within an absolute floatTolerance.
 */
export function deepEqual(
  a: unknown,
  b: unknown,
  flags: ComparatorFlags = {},
): boolean {
  return eq(a, b, flags);
}

function eq(a: unknown, b: unknown, flags: ComparatorFlags): boolean {
  if (typeof a === "number" && typeof b === "number") {
    const aNan = Number.isNaN(a);
    const bNan = Number.isNaN(b);
    if (aNan || bNan) {
      if (flags.nanEqualsNan === false) return false;
      return aNan && bNan;
    }
    if (flags.floatTolerance != null) return Math.abs(a - b) <= flags.floatTolerance;
    return a === b;
  }

  if (a === b) return true;
  if (a === null || b === null || a === undefined || b === undefined) return a === b;
  if (typeof a !== "object" || typeof b !== "object") return false;

  const aArr = Array.isArray(a);
  const bArr = Array.isArray(b);
  if (aArr !== bArr) return false;

  if (aArr && bArr) {
    if (a.length !== b.length) return false;
    if (flags.orderInsensitive) return multisetEqual(a, b, flags);
    for (let i = 0; i < a.length; i++) {
      if (!eq(a[i], b[i], flags)) return false;
    }
    return true;
  }

  const ao = a as Record<string, unknown>;
  const bo = b as Record<string, unknown>;
  const aKeys = Object.keys(ao);
  const bKeys = Object.keys(bo);
  if (aKeys.length !== bKeys.length) return false;
  for (const k of aKeys) {
    if (!Object.prototype.hasOwnProperty.call(bo, k)) return false;
    if (!eq(ao[k], bo[k], flags)) return false;
  }
  return true;
}

function multisetEqual(a: unknown[], b: unknown[], flags: ComparatorFlags): boolean {
  const used = new Array<boolean>(b.length).fill(false);
  for (const item of a) {
    let matched = false;
    for (let j = 0; j < b.length; j++) {
      if (!used[j] && eq(item, b[j], flags)) {
        used[j] = true;
        matched = true;
        break;
      }
    }
    if (!matched) return false;
  }
  return true;
}

/**
 * A stable, human-friendly preview of any value for the results/console panels.
 * Handles undefined, NaN/Infinity, functions, and circular references — things
 * JSON.stringify silently mangles or throws on.
 */
export function preview(value: unknown): string {
  const seen = new WeakSet<object>();

  const walk = (v: unknown): string => {
    if (v === undefined) return "undefined";
    if (v === null) return "null";

    const t = typeof v;
    if (t === "number") {
      const n = v as number;
      if (Number.isNaN(n)) return "NaN";
      if (!Number.isFinite(n)) return n > 0 ? "Infinity" : "-Infinity";
      return String(n);
    }
    if (t === "boolean" || t === "bigint") return String(v);
    if (t === "string") return JSON.stringify(v);
    if (t === "function") return "[Function]";
    if (t === "symbol") return String(v);

    if (t === "object") {
      const obj = v as object;
      if (seen.has(obj)) return "[Circular]";
      seen.add(obj);
      let out: string;
      if (Array.isArray(v)) {
        out = "[" + v.map(walk).join(", ") + "]";
      } else {
        const rec = v as Record<string, unknown>;
        const parts = Object.keys(rec).map((k) => `${JSON.stringify(k)}: ${walk(rec[k])}`);
        out = "{" + parts.join(", ") + "}";
      }
      seen.delete(obj);
      return out;
    }
    return String(v);
  };

  return walk(value);
}
