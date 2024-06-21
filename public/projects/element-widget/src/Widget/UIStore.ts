import { observable, computed, action } from "mobx";

type Id = string;

const initialIds: Id[] = new Array(300)
  .fill(0)
  .map((_, index) => `Element ${index + 1}`);
const initialSelectedIds = ["Element 5", "Element 51"];

export class UIStore {
  allIds: Id[] = initialIds;

  @observable accessor isDialogOpened = false;
  @observable accessor selectedIdsSet = new Set<Id>(initialSelectedIds);

  @observable accessor query = "";
  @observable accessor min = 0;
  @observable accessor checkedIdsSet = new Set<Id>(initialSelectedIds);

  @computed
  get visibleItems(): Id[] {
    const visibleItems: string[] = [];

    for (let id of this.allIds) {
      const numericId = parseInt(id.match(/\d+/)![0], 10);

      if (id.includes(this.query) && numericId > this.min) {
        visibleItems.push(id);
      }
    }

    return visibleItems;
  }

  @action
  toggleItemInList(id: Id) {
    if (this.checkedIdsSet.has(id)) {
      this.checkedIdsSet.delete(id);
    } else {
      this.checkedIdsSet.add(id);
    }
  }

  @action
  deselectItem(id: Id) {
    this.selectedIdsSet.delete(id);
  }

  @action
  openDialog() {
    this.isDialogOpened = true;
    this.reset();
  }

  @action
  closeDialog() {
    this.isDialogOpened = false;
  }

  @action
  reset() {
    this.checkedIdsSet = new Set(this.selectedIdsSet);
    this.query = "";
    this.min = 0;
  }

  @action
  save() {
    this.closeDialog();
    this.selectedIdsSet = new Set(this.checkedIdsSet);
  }

  @action
  cancel() {
    this.closeDialog();
  }
}
