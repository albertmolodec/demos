import { observable, computed, action } from "mobx";

export class Todo {
  id = Math.random();
  @observable accessor title = "";
  @observable accessor finished = false;

  @action
  toggle() {
    this.finished = !this.finished;
  }
}

export class TodoList {
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

const todo1 = new Todo();

todo1.title = "Title1";
todo1.finished = false;

const todo2 = new Todo();

todo2.title = "Title2";
todo2.finished = true;

export const list = new TodoList([todo1, todo2]);
