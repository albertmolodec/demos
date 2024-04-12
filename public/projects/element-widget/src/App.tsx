import { UIStoreContext } from "./StoreContext";
import { UIStore } from "./UIStore";
import { Widget } from "./Widget";

import "./reset.css";

export const App = () => {
  return (
    <UIStoreContext.Provider value={new UIStore()}>
      <Widget />
    </UIStoreContext.Provider>
  );
};
