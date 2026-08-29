"use client";

import dynamic from "next/dynamic";

// Monaco and the Web Worker runner require browser globals, so the SPA shell
// intentionally renders only in the browser.
const ClientApp = dynamic(() => import("./ClientApp").then((m) => m.ClientApp), {
  ssr: false,
});

export function ClientOnlyApp() {
  return <ClientApp />;
}
