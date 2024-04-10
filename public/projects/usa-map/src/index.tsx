import { createRoot } from "react-dom/client";
import { App } from "./App";
import React from "react";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  return process.env.NODE_ENV === "development"
    ? worker.start()
    : worker.start({
        serviceWorker: {
          url: "/projects/usa-map/dist/mockServiceWorker.js",
        },
      });
}

enableMocking().then(() => {
  if (document) {
    const node = document.getElementById("root");
    if (node) {
      const root = createRoot(node);

      root.render(<App />);
    } else {
      document.body.innerHTML = "<h1>The root node has not been found</h1>";
    }
  }
});
