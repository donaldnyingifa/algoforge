/**
 * Bundle Monaco locally (no CDN) so the app honours the "no external APIs at
 * runtime / works offline" requirement. This module has side effects and must
 * be imported exactly once, from the main thread, before the editor mounts.
 *
 * We import the editor API, the full JavaScript/TypeScript language service,
 * and a "basic language" (Monarch grammar, syntax highlighting only, no
 * language-service worker) contribution for each other language AlgoForge's
 * editor needs to render — not Monaco's full bundled language set, which
 * keeps the production bundle lean. Python is a basic-language import only:
 * it needs no worker (see getWorker's fallback branch below), just
 * highlighting — AlgoForge never offers IntelliSense for it (see the
 * AlgoForge project's python-course-plan.md scope boundary).
 */
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "monaco-editor/esm/vs/language/typescript/monaco.contribution";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution";
import "monaco-editor/esm/vs/basic-languages/python/python.contribution";
import { loader } from "@monaco-editor/react";

type MonacoEnvHost = { MonacoEnvironment?: monaco.Environment };

(self as unknown as MonacoEnvHost).MonacoEnvironment = {
  getWorker(_workerId: string, label: string): Worker {
    if (label === "typescript" || label === "javascript") {
      return new Worker(
        new URL("monaco-editor/esm/vs/language/typescript/ts.worker.js", import.meta.url),
        { type: "module" },
      );
    }
    return new Worker(
      new URL("monaco-editor/esm/vs/editor/editor.worker.js", import.meta.url),
      { type: "module" },
    );
  },
};

// Point @monaco-editor/react at the bundled instance instead of the CDN loader.
loader.config({ monaco });

// Relax TS diagnostics a touch so single-snippet drills don't scream about
// missing module context, while still surfacing real syntax/type mistakes.
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  target: monaco.languages.typescript.ScriptTarget.ES2020,
  allowNonTsExtensions: true,
  moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
  noEmit: true,
  strict: false,
});
