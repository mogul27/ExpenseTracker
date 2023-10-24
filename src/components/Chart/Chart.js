import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  const totalValue = dataPointValues.reduce((total, current) => total + current, 0);

  return (
    <div className='chart'>
      <h4>Total Committed Spending</h4>
      <h5>{totalValue}</h5>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          totalValue={totalValue}
        />
      ))}
    </div>
  );
};

export default Chart;