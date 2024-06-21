import { UIStoreContext } from "./Widget/ui.store";
import { UIStore } from "./Widget/UIStore";
import { Widget } from "./Widget/Widget";

import "./reset.css";

export const App = () => {
  return (
    <UIStoreContext.Provider value={new UIStore()}>
      <Widget />
    </UIStoreContext.Provider>
  );
};
