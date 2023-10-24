import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    const chartDataPoints = [
        {label: 'Misc', value: 0},
        {label: 'Housing', value: 0},
        {label: 'Entertainment', value: 0},
        {label: 'Fitness', value: 0},
        {label: 'Phone', value: 0}
    ];

    // Need OF not IN because  props.expenses is an array not an object
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={chartDataPoints} />

};

export default ExpensesChart