import React from "react";
import { UsaMap, type UsaMapConfig } from "./ui/UsaMap/UsaMap";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";
import useSWR, { type Fetcher } from "swr";
import type { GdpResponse, PopulationResponse } from "../../app/mocks/browser";
import { BootstrapInput } from "./ui/BootstrapInput";
import {
  GREEN_LEVEL_1,
  GREEN_LEVEL_2,
  GREEN_LEVEL_3,
  GREEN_LEVEL_4,
  GREY,
} from "./ui/UsaMap/colors";

type Props = {};

export const UsaMapWithFilters = ({}: Props) => {
  const [mode, setMode] = React.useState<"population" | "gdpPerCapita">(
    "population"
  );
  const handleModeChange = (event: { target: { value: string } }) => {
    setMode(event.target.value as "population" | "gdpPerCapita");
  };

  const getPopulation: Fetcher<PopulationResponse, string> = (...args) =>
    fetch(...args).then((res) => res.json());
  const getGdp: Fetcher<GdpResponse, string> = (...args) =>
    fetch(...args).then((res) => res.json());

  const population = useSWR("/api/population", getPopulation);
  const gdp = useSWR("/api/gdp", getGdp);

  const populationConfig: UsaMapConfig = React.useMemo(() => {
    if (!population.data) return {};

    const sum = population.data.sum;

    const config = Object.fromEntries(
      population.data.items.map((item) => {
        const percent = item.population / sum;

        const color =
          percent > 0.03
            ? GREEN_LEVEL_4
            : percent > 0.01
            ? GREEN_LEVEL_3
            : percent > 0.006
            ? GREEN_LEVEL_2
            : percent > 0.002
            ? GREEN_LEVEL_1
            : GREY;

        return [item.code, { color, value: (percent * 100).toFixed(2) + "%" }];
      })
    );

    return config;
  }, [population]);

  const gdpPerCapitaConfig: UsaMapConfig = React.useMemo(() => {
    if (!population.data || !gdp.data) return {};

    const populationData = population.data;

    const config = Object.fromEntries(
      gdp.data.items.map((item) => {
        const statePopulationData = populationData.items.find(
          (state) => state.name === item.name
        );

        if (!statePopulationData) return [];

        const gdpPerCapita = Number(
          ((item.gdp * 1_000_000) / statePopulationData.population).toFixed()
        );

        const color =
          gdpPerCapita > 90_000
            ? GREEN_LEVEL_4
            : gdpPerCapita > 70_000
            ? GREEN_LEVEL_3
            : gdpPerCapita > 55_000
            ? GREEN_LEVEL_2
            : GREEN_LEVEL_1;

        return [statePopulationData.code, { color, value: `$${gdpPerCapita}` }];
      })
    );

    return config;
  }, [population, gdp]);

  if (population.isLoading || gdp.isLoading) {
    return <CircularProgress />;
  }

  if (!population.data || !gdp.data) return null;

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
        <Typography variant="h3">
          {mode === "population"
            ? "U.S. States Population Percentage"
            : "GDP per Capita, by U.S. State"}
        </Typography>

        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-select-native">Mode</InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={mode}
            onChange={handleModeChange}
            input={<BootstrapInput />}
          >
            <option value="population">Population</option>
            <option value="gdpPerCapita">GDP per capita</option>
          </NativeSelect>
        </FormControl>
      </div>
      <UsaMap
        legendItems={
          mode === "population"
            ? [
                { label: "<0.2%", color: GREY },
                { label: "0.2% to 0.6%", color: GREEN_LEVEL_1 },
                { label: "0.6% to 1%", color: GREEN_LEVEL_2 },
                { label: "1% to 3%", color: GREEN_LEVEL_3 },
                { label: ">3%", color: GREEN_LEVEL_4 },
              ]
            : [
                { label: "Less than $55k", color: GREY },
                { label: "$55k - $70k", color: GREEN_LEVEL_2 },
                { label: "$70k - $90k", color: GREEN_LEVEL_3 },
                { label: "$90k or more", color: GREEN_LEVEL_4 },
              ]
        }
        config={mode === "population" ? populationConfig : gdpPerCapitaConfig}
      />
    </div>
  );
};
