import React from "https://cdn.skypack.dev/react@17.0.1";
import { render } from "https://cdn.skypack.dev/react-dom@17.0.1";

import { useToggle } from "./useToggle.js";

const App = () => {
	const [state, handlers] = useToggle(true);

	return (
		<>
			Enabled: {state.toString()}
			<div>
				<button type="button" onClick={handlers.on}>
					On
				</button>
				<button type="button" onClick={handlers.off}>
					Off
				</button>
				<button type="button" onClick={handlers.toggle}>
					Toggle
				</button>
			</div>
		</>
	);
};

render(<App />, document.getElementById("root"));
