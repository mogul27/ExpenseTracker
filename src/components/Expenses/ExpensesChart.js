import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Misc", value: 0 },
    { label: "Housing", value: 0 },
    { label: "Bills", value: 0 },
    { label: "Entertainment", value: 0 },
    { label: "Fitness", value: 0 },
    { label: "Phone", value: 0 },
  ];

  // Need OF not IN because  props.expenses is an array not an object
  for (const expense of props.expenses) {
    const expenseCategory = expense.category;
    console.log(expenseCategory);
    // Find the index in the array of the category
    const foundIndex = chartDataPoints.findIndex(
      (dataPoint) => dataPoint.label === expenseCategory
    );
    console.log(foundIndex)
    
    // Increment the value in the array
    chartDataPoints[foundIndex].value += expense.amount
    console.log(chartDataPoints[foundIndex].value)
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
