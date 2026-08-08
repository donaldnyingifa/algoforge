import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Side-effect import: populate the curriculum registry with content.
// (Monaco configuration is imported lazily by CodeEditor, so the editor and its
// large dependency only load on pages that actually use it — keeping the initial
// bundle small.)
import "./data/registerContent";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
