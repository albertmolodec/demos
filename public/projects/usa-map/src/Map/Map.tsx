import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import { borders, states } from "./data";
import { Legend } from "./Legend";

type Props = {
  height?: number;
  width?: number;
  config?: Record<
    string, // code of a state (lowercase)
    {
      color: string;
      percent: number;
    }
  >;
};

export const Map = ({
  height,
  width,
  config = {},
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
          {states.map((state) => (
            <Tooltip
              title={`${state.name}: ${config[state.code].percent}%`}
              key={state.code}
            >
              <path
                d={state.d}
                className="state"
                style={
                  config[state.code]
                    ? { fill: config[state.code].color }
                    : undefined
                }
                onMouseOver={handleStateMouseOver}
                onMouseLeave={handleStateMouseLeave}
              />
            </Tooltip>
          ))}
        </g>
        <g fill="none" className="border">
          {borders.map((border) => (
            <path key={border.stateA + "-" + border.stateB} d={border.d} />
          ))}
        </g>
        <Tooltip title={`District of Columbia: ${config.dc.percent}%`}>
          <circle
            cx={801.6}
            cy={252.1}
            r={5}
            style={config.dc ? { fill: config.dc.color } : undefined}
            className="state border"
            onMouseOver={handleStateMouseOver}
            onMouseLeave={handleStateMouseLeave}
          />
        </Tooltip>
        <path
          fill="none"
          stroke="#b0b0b0"
          strokeWidth="1"
          d="m 215,493 v 55 l 36,45 m -251,-168 h 147 l 68,68 h 85 l 54,54 v 46"
        />
      </svg>
      <Legend
        items={[
          { label: "<0.2%", color: "#d0d0d0" },
          { label: "0.2% to 0.6%", color: "rgb(204 238 222)" },
          { label: "0.6% to 1%", color: "rgb(102 203 155)" },
          { label: "1% to 3%", color: "rgb(6 168 87)" },
          { label: ">3%", color: "rgb(2 110 57)" },
        ]}
      />
    </>
  );
};
