import Editor from "@monaco-editor/react";
import type { Language } from "@/types";
import { useThemeStore } from "@/store/themeStore";

const MONACO_LANG: Record<Language, string> = {
  js: "javascript",
  ts: "typescript",
};

export function CodeEditor({
  value,
  onChange,
  language,
  height = "100%",
  fontSize = 14,
  readOnly = false,
}: {
  value: string;
  onChange: (next: string) => void;
  language: Language;
  height?: string | number;
  fontSize?: number;
  readOnly?: boolean;
}) {
  const theme = useThemeStore((s) => s.theme);

  return (
    <Editor
      height={height}
      language={MONACO_LANG[language]}
      theme={theme === "dark" ? "vs-dark" : "light"}
      value={value}
      onChange={(v) => onChange(v ?? "")}
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
