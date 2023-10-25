import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  const totalValue = dataPointValues.reduce((total, current) => total + current, 0);

  return (
    <div className='chart'>
      <div className='total_spend_container'>
      <h4>Total Committed Spending</h4>
      <h1>£{totalValue}</h1>
      </div>
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