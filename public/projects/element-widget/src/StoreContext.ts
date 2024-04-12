import { createContext, useContext } from "react";
import { UIStore } from "./UIStore";

export const UIStoreContext = createContext<UIStore | null>(null);

export const useUIStore = () => {
  const context = useContext(UIStoreContext);
  if (context === null) {
    throw new Error(
      "You have forgotten to wrap your root component with UIStoreContext.Provider"
    );
  }
  return context;
};
