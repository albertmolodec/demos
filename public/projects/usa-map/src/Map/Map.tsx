import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import { borders, states } from "./data";

type Props = {
  height?: number;
  width?: number;
};

export const Map = ({
  height,
  width,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) => {
  const handleStateMouseOver = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>
  ) => {
    event.currentTarget.style.fill = "red";
  };

  const handleStateMouseLeave = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>
  ) => {
    event.currentTarget.removeAttribute("style");
  };

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
          <Tooltip title={state.name} key={state.code}>
            <path
              d={state.d}
              className="state"
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
      <Tooltip title="District of Columbia">
        <circle
          cx={801.6}
          cy={252.1}
          r={5}
          className="state border"
          onMouseOver={handleStateMouseOver}
          onMouseLeave={handleStateMouseLeave}
        />
      </Tooltip>
    </svg>
  );
};
