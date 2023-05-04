import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import reactCircleProgressBarNoCss from 'https://cdn.skypack.dev/react-circle-progress-bar_no-css';
import Progress from 'react-circle-progress-bar'

const ProgressBar = ({ percentage, color, strokeWidth }) => (
  <div style={{ width: "100px", height: "100px" }}>
    <CircularProgressbar
      value={percentage}
      styles={{
        root: { width: "100%", height: "100%" },
        path: {
          stroke: color,
          strokeLinecap: "round",
          strokeWidth: strokeWidth
        },
        trail: { stroke: "#d6d6d6", strokeLinecap: "round" }
      }}
    />
  </div>
);

export default ProgressBar;