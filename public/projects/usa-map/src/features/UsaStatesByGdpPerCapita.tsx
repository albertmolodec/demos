import React from "react";
import type { Fetcher } from "swr";
import type { GdpResponse, PopulationResponse } from "../app/mocks/browser";
import useSWR from "swr";
import { UsaMap, type UsaMapConfig } from "../shared/ui/UsaMap/UsaMap";
import {
  GREEN_LEVEL_1,
  GREEN_LEVEL_2,
  GREEN_LEVEL_3,
  GREEN_LEVEL_4,
} from "../shared/ui/UsaMap/colors";
import { CircularProgress } from "@mui/material";

type Props = {};

export const UsaStatesByGdpPerCapita = ({}: Props) => {
  const getPopulation: Fetcher<PopulationResponse, string> = (...args) =>
    fetch(...args).then((res) => res.json());
  const getGdp: Fetcher<GdpResponse, string> = (...args) =>
    fetch(...args).then((res) => res.json());

  const gdp = useSWR("/api/gdp", getGdp);
  const population = useSWR("/api/population", getPopulation);

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

  if (gdp.isLoading) {
    return <CircularProgress />;
  }

  if (!gdp.data || gdp.error || !population.data || population.error)
    return <p>Error</p>;

  return (
    <div>
      <UsaMap
        legendItems={[
          { label: "Less than $55k", color: GREEN_LEVEL_1 },
          { label: "$55k - $70k", color: GREEN_LEVEL_2 },
          { label: "$70k - $90k", color: GREEN_LEVEL_3 },
          { label: "$90k or more", color: GREEN_LEVEL_4 },
        ]}
        config={gdpPerCapitaConfig}
      />
    </div>
  );
};
