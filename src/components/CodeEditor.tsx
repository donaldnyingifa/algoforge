import Editor, { type OnMount } from "@monaco-editor/react";
import type { RunnableLanguage } from "@/runner/types";
import { useThemeStore } from "@/store/themeStore";
// Side-effect import: configure Monaco to bundle locally (offline, no CDN).
// Colocated here so Monaco loads only with the editor, not in the initial bundle.
import "@/lib/monacoSetup";

const MONACO_LANG: Record<RunnableLanguage, string> = {
  js: "javascript",
  ts: "typescript",
  py: "python",
};

export function CodeEditor({
  value,
  onChange,
  language,
  height = "100%",
  fontSize = 14,
  readOnly = false,
  onMount,
}: {
  value: string;
  onChange: (next: string) => void;
  language: RunnableLanguage;
  height?: string | number;
  fontSize?: number;
  readOnly?: boolean;
  onMount?: OnMount;
}) {
  const theme = useThemeStore((s) => s.theme);

  return (
    <Editor
      height={height}
      language={MONACO_LANG[language]}
      theme={theme === "dark" ? "vs-dark" : "light"}
      value={value}
      onChange={(v) => onChange(v ?? "")}
      onMount={onMount}
      options={{
        fontSize,
        readOnly,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        smoothScrolling: true,
        tabSize: 2,
        automaticLayout: true,
        lineNumbers: "on",
        renderLineHighlight: "line",
        fontLigatures: true,
        padding: { top: 12, bottom: 12 },
      }}
      loading={
        <div className="flex h-full items-center justify-center text-sm text-slate-400">
          Loading editor…
        </div>
      }
    />
  );
}
