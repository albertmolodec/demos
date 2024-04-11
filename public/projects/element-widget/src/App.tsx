import { observer } from "mobx-react-lite";

import { ClosableElement } from "./ClosableElement";
import { createStore } from "./store";

import "./reset.css";
import { ActionButton } from "./ActionButton";

type Props = {
  store: ReturnType<typeof createStore>;
};

export const App = observer(({ store }: Props) => {
  console.log("render");
  return (
    <div
      style={{
        fontFamily: "Roboto",
      }}
    >
      <div>
        You have {store.value} selected items (double = {store.double})
      </div>

      <button
        onClick={() => {
          store.increment();
        }}
      >
        Increment
      </button>

      <ClosableElement
        text="Element 5"
        onClick={(event) => {
          console.log(event);
        }}
      />
      <ClosableElement text="Element 51" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 600,
          height: 1000,
          backgroundColor: "#373737",
          padding: "20px",
          color: "white",
        }}
      >
        Select items
        <br />
        Search
        <br />
        Filter
        <ul>
          <li>
            <input type="checkbox" />
            Element 1
          </li>
          <li>
            <input type="checkbox" checked />
            Element 2
          </li>
          <li>
            <input type="checkbox" />
            Element 3
          </li>
        </ul>
        Current selected items:
        <ClosableElement
          text="Element 5"
          onClick={(event) => {
            console.log(event);
          }}
        />
        <ClosableElement text="Element 51" />
        <ActionButton text="Save" variant="green" />
        <ActionButton text="Cancel" variant="red" />
      </div>
    </div>
  );
});

App.displayName = "App";
