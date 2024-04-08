import { createRoot } from "react-dom/client";
import { App } from "./App";
import React from "react";

if (document) {
	const node = document.getElementById("root");
	if (node) {
		const root = createRoot(node);

		root.render(<App />);
	} else {
		document.body.innerHTML = '<h1>Root node is not found</h1>'
	}
}
