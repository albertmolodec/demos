import React from "react";
import { LegendItem } from "./LegendItem";

type Props = {
  items: { label: string; color: string }[];
};

export const Legend = ({ items }: Props) => (
  <ul
    style={{
      display: "flex",
      gap: "25px",
      padding: 0,
      width: "100%",
      justifyContent: "center",
    }}
  >
    {items.map((item) => (
      <LegendItem label={item.label} color={item.color} key={item.label} />
    ))}
  </ul>
);
