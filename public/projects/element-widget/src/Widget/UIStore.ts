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
  allItems: Item[] = initialItems;

  @observable accessor itemsInList: ItemInList[] = this.allItems.map(
    (item) => ({
      ...item,
      checked: false,
    })
  );

  @observable accessor selectedItems: Item[] = [
    this.allItems[4]!,
    this.allItems[50]!,
  ];

  @action
  toggleItemInList(index: number) {
    const item = this.itemsInList[index];
    if (!item) return;

    item.checked = !item.checked;
  }
}
