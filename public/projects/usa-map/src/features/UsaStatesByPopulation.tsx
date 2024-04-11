import React from "react";
import type { Fetcher } from "swr";
import type { PopulationResponse } from "../app/mocks/browser";
import useSWR from "swr";
import { UsaMap, type UsaMapConfig } from "../shared/ui/UsaMap/UsaMap";
import {
  GREEN_LEVEL_1,
  GREEN_LEVEL_2,
  GREEN_LEVEL_3,
  GREEN_LEVEL_4,
  GREY,
} from "../shared/ui/UsaMap/colors";
import { CircularProgress } from "@mui/material";

type Props = {};

export const UsaStatesByPopulation = ({}: Props) => {
  const getPopulation: Fetcher<PopulationResponse, string> = (...args) =>
    fetch(...args).then((res) => res.json());
  const population = useSWR("/api/population", getPopulation);

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

  if (population.isLoading) {
    return <CircularProgress />;
  }

  if (!population.data || population.error) return <p>Error</p>;

  return (
    <div>
      <UsaMap
        legendItems={[
          { label: "<0.2%", color: GREY },
          { label: "0.2% to 0.6%", color: GREEN_LEVEL_1 },
          { label: "0.6% to 1%", color: GREEN_LEVEL_2 },
          { label: "1% to 3%", color: GREEN_LEVEL_3 },
          { label: ">3%", color: GREEN_LEVEL_4 },
        ]}
        config={populationConfig}
      />
    </div>
  );
};
