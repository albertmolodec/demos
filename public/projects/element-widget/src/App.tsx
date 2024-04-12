import { observer } from "mobx-react-lite";

import { ClosableElement } from "./ClosableElement";
import { createStore } from "./store";

import "./reset.css";
import { ActionButton } from "./ActionButton";
import { Todo, TodoList } from "./ui-state";

type Props = {
  store: ReturnType<typeof createStore>;
  list: TodoList;
};

export const App = observer(({ store, list }: Props) => {
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

      <div>
        Unfinished count: {list.unfinishedTodoCount}
        {list.todos.map((todo) => (
          <div key={todo.id}>
            {todo.title} {todo.finished}
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const newTodo = new Todo();
            newTodo.title =
              "Title " + parseInt(String(Math.random() * 100), 10);
            newTodo.finished = false;
            list.add(newTodo);
          }}
        >
          Add todo
        </button>
      </div>

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
            <input type="checkbox" defaultChecked />
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
