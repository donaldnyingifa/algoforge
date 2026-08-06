import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Side-effect import: configure Monaco to bundle locally (offline, no CDN).
import "./lib/monacoSetup";
// Side-effect import: populate the curriculum registry with content.
import "./data/registerContent";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
