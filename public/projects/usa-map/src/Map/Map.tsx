import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import { borders, states } from "./data";

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

  console.log(config);

  return (
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
    </svg>
  );
};
