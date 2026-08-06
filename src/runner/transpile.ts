import { transform } from "sucrase";

/**
 * Transpile TypeScript to runnable JavaScript inside the worker.
 * Sucrase strips types fast; genuine syntax errors are thrown with a
 * "(line:column)" position that we surface in the friendly error panel.
 */
export function transpileTs(source: string): string {
  const result = transform(source, {
    transforms: ["typescript"],
    disableESTransforms: true,
  });
  return result.code;
}

/** Extract a 1-based (line, column) from a Sucrase/Babel-style error message. */
export function parsePosition(message: string): { line?: number; column?: number } {
  const m = /\((\d+):(\d+)\)/.exec(message);
  if (!m) return {};
  const line = Number(m[1]);
  const column = Number(m[2]);
  return { line, column: column + 1 };
}
