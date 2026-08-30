import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ReactNode } from "react";
import { RunnableSnippet } from "./RunnableSnippet";
import type { RunnableLanguage } from "@/runner/types";

/**
 * Shared markdown renderer. When `runnable` is set, fenced ```js / ```ts /
 * ```py (or ```python) blocks become editable, runnable snippets; everything
 * else renders as static prose.
 */
export function MarkdownView({
  source,
  runnable = false,
}: {
  source: string;
  runnable?: boolean;
}) {
  const components: Components = {
    // Unwrap <pre> so our custom code renderer controls block layout.
    pre: ({ children }) => <>{children}</>,
    code: ({ className, children }) => {
      const raw = String(children ?? "").replace(/\n$/, "");
      const match = /language-([\w-]+)/.exec(className ?? "");
      const lang = match?.[1];

      if (!lang) {
        return <code className="inline-code">{children as ReactNode}</code>;
      }
      if (runnable && (lang === "js" || lang === "ts" || lang === "py" || lang === "python")) {
        // Normalize the fence tag to the runner's own "py" (PythonRunRequest's
        // discriminant) — a lesson author writing ```python should work exactly
        // like ```py, since both spellings are common in Markdown.
        const normalized: RunnableLanguage = lang === "python" ? "py" : lang;
        return <RunnableSnippet initialCode={raw} language={normalized} />;
      }
      return (
        <pre className="static-block">
          <code>{raw}</code>
        </pre>
      );
    },
  };

  return (
    <div className="md-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {source}
      </ReactMarkdown>
    </div>
  );
}
