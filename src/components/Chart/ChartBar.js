import React, { useState } from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.totalValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div
        className="chart-bar__inner"
      >
        {/* If being hovered over, We create a pop up showing
      How much of monthly committed spending is that category */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">
        {props.label} £{props.value}
      </div>
      <div></div>
    </div>
  );
};

export default ChartBar;
