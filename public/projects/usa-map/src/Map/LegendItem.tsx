import React from "react";

type Props = {
  label: string;
  color: string;
};

export const LegendItem = ({ label, color }: Props) => (
  <li style={{ display: "inline-flex", alignItems: "center" }}>
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
    <span style={{ marginLeft: "8px" }}>{label}</span>
  </li>
);
