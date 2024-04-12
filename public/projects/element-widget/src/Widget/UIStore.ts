import { observable, computed, action, toJS } from "mobx";

export type Item = { name: string; num: number };
export type ItemInList = Item & { checked: boolean };

const initialItems: Item[] = new Array(300)
  .fill("Element")
  .map((el, index) => ({
    name: `${el} ${index + 1}`,
    num: index + 1,
  }));

export class UIStore {
  @observable accessor allItems: Item[] = initialItems;

  @observable accessor itemsInList: ItemInList[] = initialItems.map((item) => ({
    ...item,
    checked: false,
  }));

  @action
  toggleItemInList(index: number) {
    const item = this.itemsInList.find((item) => item.num === index + 1);
    if (!item) return;

    item.checked = !item.checked;
  }
}
