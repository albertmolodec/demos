import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

import { borderCoordinates, stateCoordinates } from "./coordinates";
import { Legend } from "../Legend";
import type { StateCode } from "../../../../entities/state";

export type UsaMapConfig = Partial<
  Record<
    StateCode,
    {
      color: string;
      value: string;
    }
  >
>;

type Props = {
  height?: number;
  width?: number;
  legendItems: { label: string; color: string }[];
  config?: UsaMapConfig;
};

export const UsaMap = ({
  height,
  width,
  config = {},
  legendItems,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) => {
  const handleStateMouseOver = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>
  ) => {};

  const handleStateMouseLeave = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>
  ) => {};

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 0 959 593"
        {...props}
      >
        <defs>
          <style>
            {".state{fill:#d0d0d0}.border{stroke:#fff;stroke-width:1}"}
          </style>
        </defs>
        <g>
          {stateCoordinates.map((state) => (
            <Tooltip
              key={state.code}
              title={`${state.name}${
                state.code in config ? `: ${config[state.code]!.value}` : ""
              }`}
            >
              <path
                d={state.coordinates}
                className="state"
                style={
                  state.code in config
                    ? { fill: config[state.code]!.color }
                    : undefined
                }
                onMouseOver={handleStateMouseOver}
                onMouseLeave={handleStateMouseLeave}
              />
            </Tooltip>
          ))}
        </g>
        <g fill="none" className="border">
          {borderCoordinates.map((border) => (
            <path
              key={border.stateA + "-" + border.stateB}
              d={border.coordinates}
            />
          ))}
        </g>
        <path
          fill="none"
          stroke="#b0b0b0"
          strokeWidth="1"
          d="m 215,493 v 55 l 36,45 m -251,-168 h 147 l 68,68 h 85 l 54,54 v 46"
        />
        <Tooltip
          title={`District of Columbia${
            "dc" in config ? `: ${config.dc!.value}` : ""
          }`}
        >
          <circle
            cx={801.6}
            cy={252.1}
            r={5}
            style={"dc" in config ? { fill: config.dc!.color } : undefined}
            className="state border"
            onMouseOver={handleStateMouseOver}
            onMouseLeave={handleStateMouseLeave}
          />
        </Tooltip>
      </svg>
      <Legend items={legendItems} />
    </>
  );
};
