import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { UsaMapWithFilters } from "../widgets/UsaMapWithFilters.ts/UsaMapWithFilters";
import { ErrorWidget } from "../widgets/ErrorWidget";
import { EmptyWidget } from "../widgets/EmptyWidget";

type TabPanelProps = {
  children?: React.ReactNode;
  index: string;
  value: string;
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
      {value === index && (
        <Box sx={{ p: 3, maxWidth: "1000px" }}>{children}</Box>
      )}
    </div>
  );
}

export function App() {
  const [activeTab, setActiveTab] = React.useState<
    "error" | "empty" | "success"
  >("success");

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue as "error" | "empty" | "success");
  };

  return (
    <div style={{ fontFamily: "Roboto" }}>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Error" value="error" />
        <Tab label="Empty data" value="empty" />
        <Tab label="Loaded data" value="success" />
      </Tabs>
      <CustomTabPanel value={activeTab} index="error">
        <ErrorWidget />
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index="empty">
        <EmptyWidget />
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index="success">
        <UsaMapWithFilters />
      </CustomTabPanel>
    </div>
  );
}
