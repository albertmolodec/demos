import React from "react";
import { ClosableElement } from "./ClosableElement";

export const App = () => {
  return (
    <div
      style={{ fontFamily: "Roboto", display: "flex", flexDirection: "column" }}
    >
      <div>You have N selected items</div>
      <ClosableElement text="Fred" />
    </div>
  );
};
