import { observer } from "mobx-react-lite";

import { ActionButton } from "./ui/ActionButton";
import { ClosableElement } from "./ui/ClosableElement";
import { useUIStore } from "./UIStoreContext";
import s from "./Widget.module.css";
import { Dialog } from "./ui/Dialog";
import { selectedItems } from "./ui/Dialog.module.css";

export const Widget = observer(() => {
  const store = useUIStore();

  return (
    <div className={s.widget}>
      <h2 className={s.header}>Select items</h2>
      <div className={s.description}>
        You currently have {store.selectedIdsSet.size} selected item(s).
      </div>
      <div className={s.selectedItems}>
        {Array.from(store.selectedIdsSet).map((id) => (
          <ClosableElement
            text={id}
            key={id}
            onClick={() => {
              store.deselectItem(id);
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
