import { observer } from "mobx-react-lite";
import { ActionButton } from "./ActionButton";
import { ClosableElement } from "./ClosableElement";
import { useUIStore } from "./StoreContext";
import { Todo } from "./UIStore";

export const Widget = observer(() => {
  const store = useUIStore();
  return (
    <div
      style={{
        fontFamily: "Roboto",
      }}
    >
      {/* <div>
        You have {store.todoList.value} selected items (double = {store.double})
      </div>

      <button
        onClick={() => {
          store.increment();
        }}
      >
        Increment
      </button> */}

      <div>
        Unfinished count: {store.todoList.unfinishedTodoCount}
        <button
          type="button"
          onClick={() => {
            const newTodo = new Todo();
            newTodo.title =
              "Title " + parseInt(String(Math.random() * 100), 10);
            newTodo.finished = false;
            store.todoList.add(newTodo);
          }}
        >
          Add todo
        </button>
        {store.todoList.todos.map((todo) => (
          <div key={todo.id}>
            {todo.title} {todo.finished}
          </div>
        ))}
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

Widget.displayName = "Widget";
