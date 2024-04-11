import React from "react";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";

import { BootstrapInput } from "../shared/ui/UsaMap/BootstrapInput";
import { UsaStatesByPopulation } from "../features/UsaStatesByPopulation";
import { UsaStatesByGdpPerCapita } from "../features/UsaStatesByGdpPerCapita";

type Mode = "population" | "gdpPerCapita";

export const UsaMapWithFilters = () => {
  const [mode, setMode] = React.useState<Mode>("population");
  const handleModeChange = (event: { target: { value: string } }) => {
    setMode(event.target.value as Mode);
  };

  const title =
    mode === "population"
      ? "U.S. States Population Percentage"
      : "GDP per Capita, by U.S. State";

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h3">{title}</Typography>

        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="mode-select">Mode</InputLabel>
          <NativeSelect
            id="mode-select"
            value={mode}
            onChange={handleModeChange}
            input={<BootstrapInput />}
          >
            <option value="population">Population</option>
            <option value="gdpPerCapita">GDP per capita</option>
          </NativeSelect>
        </FormControl>
      </div>
      {mode === "population" ? (
        <UsaStatesByPopulation />
      ) : (
        <UsaStatesByGdpPerCapita />
      )}
    </div>
  );
};
