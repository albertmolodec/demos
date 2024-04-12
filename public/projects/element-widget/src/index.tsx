import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./App";
import { createStore } from "./store";
import { list } from "./ui-state";

const node = document.getElementById("root");
if (node) {
  const root = createRoot(node);

  const store = createStore(3);

  root.render(
    <React.StrictMode>
      <App store={store} list={list} />
    </React.StrictMode>
  );
} else {
  document.body.innerHTML = "<h1>The root node has not been found</h1>";
}
