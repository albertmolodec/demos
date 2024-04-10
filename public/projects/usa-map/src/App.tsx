import useSWR, { type Fetcher } from "swr";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Map } from "./Map/Map";
import {
  Box,
  CircularProgress,
  FormControl,
  InputBase,
  InputLabel,
  NativeSelect,
  Typography,
  styled,
} from "@mui/material";
import type { StatePopulation } from "./mocks/population";
import type { StateGDP } from "./mocks/gdp";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export function App() {
  const [value, setValue] = React.useState(2);
  const [mode, setMode] = React.useState<"population" | "gdpPerCapita">(
    "population"
  );

  const fetcher: Fetcher<
    {
      data: StatePopulation[];
      sum: number;
    },
    string
  > = (...args) => fetch(...args).then((res) => res.json());
  const fetcher2: Fetcher<
    {
      data: StateGDP[];
      sum: number;
    },
    string
  > = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/population", fetcher);
  const { data: data2, isLoading: isLoading2 } = useSWR("/api/gdp", fetcher2);

  if (isLoading || isLoading2) {
    return <CircularProgress />;
  }

  if (!data || !data2) {
    return <p>Error</p>;
  }

  console.log(data);
  console.log(data2);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleSelectChange = (event: { target: { value: string } }) => {
    setMode(event.target.value as "population" | "gdpPerCapita");
  };

  return (
    <div style={{ fontFamily: "Roboto" }}>
      <Typography variant="h1">Pricing</Typography>
      <Tabs value={value} onChange={handleTabChange}>
        <Tab label="Quotes" />
        <Tab label="Rules" />
        <Tab label="Quote Analytics" />
        <Tab label="Rule Analytics" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        Nothing
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Nothing #2
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h2">Win Percent</Typography>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-select-native">Mode</InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={mode}
            onChange={handleSelectChange}
            input={<BootstrapInput />}
          >
            <option value="population">Population</option>
            <option value="gdpPerCapita">GDP per capita</option>
          </NativeSelect>
        </FormControl>
        <Map
          config={
            mode === "population"
              ? Object.fromEntries(
                  data.data.map((item) => {
                    const percent = item.population / data.sum;
                    console.log(item.code, percent);
                    const color =
                      percent > 0.03
                        ? "rgb(2 110 57)"
                        : percent > 0.01
                        ? "rgb(6 168 87)"
                        : percent > 0.006
                        ? "rgb(102 203 155)"
                        : percent > 0.002
                        ? "rgb(204 238 222)"
                        : "#d0d0d0";

                    return [
                      item.code,
                      { color, percent: Number((percent * 100).toFixed(2)) },
                    ];
                  })
                )
              : Object.fromEntries(
                  data2.data.map((item) => {
                    const statePopulationData = data.data.find(
                      (state) => state.state === item.name
                    );

                    const gdpPerCapita = Number(
                      (
                        (item.gdp * 1_000_000) /
                        statePopulationData!.population
                      ).toFixed()
                    );

                    const color =
                      gdpPerCapita > 90_000
                        ? "rgb(2 110 57)"
                        : gdpPerCapita > 70_000
                        ? "rgb(6 168 87)"
                        : gdpPerCapita > 50_000
                        ? "rgb(102 203 155)"
                        : "rgb(204 238 222)";

                    return [
                      statePopulationData!.code,
                      { color, percent: gdpPerCapita },
                    ];
                  })
                )
          }
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Nothing#4
      </CustomTabPanel>
    </div>
  );
}
