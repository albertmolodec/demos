import { FixedSizeList, type ListChildComponentProps } from "react-window";
import { toJS } from "mobx";
import { observer, Observer } from "mobx-react-lite";
import { ActionButton } from "./ui/ActionButton";
import { ClosableElement } from "./ui/ClosableElement";
import { useUIStore } from "./UIStoreContext";

export const Widget = observer(() => {
  const store = useUIStore();

  console.log("🎨");

  return (
    <div
      style={{
        fontFamily: "Roboto",
      }}
    >
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
