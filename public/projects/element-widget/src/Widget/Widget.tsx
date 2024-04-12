import { observer } from "mobx-react-lite";

import { ActionButton } from "./ui/ActionButton";
import { ClosableElement } from "./ui/ClosableElement";
import { useUIStore } from "./UIStoreContext";
import s from "./Widget.module.css";
import { Dialog } from "./ui/Dialog";
import { selectedItems } from "./ui/Dialog.module.css";

export const Widget = observer(() => {
  const store = useUIStore();

  console.log("Render widget");

  console.log("Selected:", store.selectedIdsSet.size, store.selectedIdsSet);
  console.log("Checked:", store.checkedIdsSet.size, store.checkedIdsSet);

  return (
    <div className={s.widget}>
      <h2 className={s.header}>Select items</h2>
      <div className={s.description}>
        You currently have {store.selectedIdsSet.size} selected item(s).
      </div>
      <div className={s.selectedItemsContainer}>
        {Array.from(store.selectedIdsSet).map((selectedItem) => (
          <ClosableElement
            text={`Element ${selectedItem}`}
            key={selectedItem}
            onClick={() => {
              store.deselectItem(selectedItem);
            }}
          />
        ))}
      </div>
      <div className={s.actions}>
        <ActionButton
          text="Change my choice"
          variant="green"
          onClick={() => {
            store.openDialog();
          }}
        />
      </div>
      {store.isDialogOpened ? <Dialog /> : null}
    </div>
  );
});

Widget.displayName = "Widget";
