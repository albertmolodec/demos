import { makeAutoObservable } from "mobx";

export function createStore(initialValue: number) {
  const store = makeAutoObservable({
    value: initialValue,
    get double() {
      return this.value * 2;
    },
    increment() {
      this.value++;
    },
  });

  return store;
}
