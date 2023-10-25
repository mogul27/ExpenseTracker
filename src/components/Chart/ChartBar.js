import React, { useState } from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  // Set hovering to decide whether to show proportion of spending
  const [isHovering, setIsHovering] = useState(false);

  const hoverHandler = () => {
    setIsHovering(true);
  };

  const noHoverHandler = () => {
    setIsHovering(false);
  };

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.totalValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      {isHovering && <p>Housing</p>}
      <div
        className="chart-bar__inner"
        onMouseOver={hoverHandler}
        onMouseOut={noHoverHandler}
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
