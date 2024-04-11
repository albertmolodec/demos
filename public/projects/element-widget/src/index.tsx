import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./App";

const node = document.getElementById("root");
if (node) {
  const root = createRoot(node);

  root.render(<App />);
} else {
  document.body.innerHTML = "<h1>The root node has not been found</h1>";
}
