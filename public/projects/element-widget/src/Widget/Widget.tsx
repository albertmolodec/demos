import { FixedSizeList, type ListChildComponentProps } from "react-window";
import { runInAction, toJS } from "mobx";
import { observer, Observer } from "mobx-react-lite";
import { ActionButton } from "./ui/ActionButton";
import { ClosableElement } from "./ui/ClosableElement";
import { useUIStore } from "./UIStoreContext";
import s from "./Widget.module.css";

export const Widget = observer(() => {
  const store = useUIStore();

  console.log("Render");

  return (
    <div className={s.widget}>
      You currently have {store.selectedItems.length} selected item(s).
      {store.selectedItems.map((selectedItem) => (
        <ClosableElement
          text={selectedItem.name}
          key={selectedItem.num}
          onClick={(event) => {
            console.log(event);
          }}
        />
      ))}
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
        <label htmlFor="amount-filter">Filter</label>
        <select
          id="amount-filter"
          onChange={(event) => {
            const min = parseInt(event.target.value, 10);

            runInAction(() => {
              store.itemsInList = store.allItems
                .filter((item) => item.num > min)
                .map((item) => ({ ...item, checked: false }));
            });

            // todo: fix lost checked state
          }}
        >
          <option value="0">No filter</option>
          <option value="10">{">"}10</option>
          <option value="100">{">"}100</option>
          <option value="200">{">"}200</option>
        </select>
        <br />
        <FixedSizeList
          height={600}
          width={500}
          itemCount={store.itemsInList.length}
          itemSize={30}
          itemData={store.itemsInList}
          innerElementType="ul"
        >
          {({ index, style, data }) => (
            <Observer>
              {/* subscribe on modifications of the array from the store */}
              {() => (
                <li style={style}>
                  <input
                    type="checkbox"
                    checked={data[index]!.checked}
                    onChange={() => {
                      store.toggleItemInList(index);
                    }}
                  />

                  {data[index]!.name}
                </li>
              )}
            </Observer>
          )}
        </FixedSizeList>
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
