import { observable, computed, action } from "mobx";
import { initialElements } from "./data";

export class Todo {
  id = Math.random();
  @observable accessor title = "";
  @observable accessor finished = false;

  constructor(title?: string, finished?: boolean) {
    if (title) {
      this.title = title;
    }
    if (finished) {
      this.finished = finished;
    }
  }

  @action
  toggle() {
    this.finished = !this.finished;
  }
}

class TodoList {
  @observable accessor todos: Todo[] = [];

  constructor(todos: Todo[]) {
    this.todos = todos;
  }

  @action
  add(todo: Todo) {
    this.todos.push(todo);
  }

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
}

export type Item = { name: string; checked: boolean };

export class UIStore {
  todoList = new TodoList([
    new Todo("Title 1", false),
    new Todo("Title 2", true),
  ]);

  @observable accessor items: Item[] = initialElements.map((name) => ({
    name,
    checked: false,
  }));
}
