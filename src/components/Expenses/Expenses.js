import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart"
import "./Expenses.css";

function check_dates_match(date1, date2) {

    // Extract the month and year from the first date
    const month1 = date1.getMonth();
    const year1 = date1.getFullYear();
  
    // Extract the month and year from the second date
    const month2 = date2.getMonth();
    const year2 = date2.getFullYear();

    // Return True if month and year match 
    return month1 === month2 && year1 === year2;
}

const Expenses = (props) => {

  let currentDate = new Date();
  const [filteredMonth, setFilteredMonth] = useState(currentDate);

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  // Define function insdie the arrow notation
  const filteredExpenses = props.items.filter(expense => {
    console.log(expense.date)
    return check_dates_match(expense.date, filteredMonth);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredMonth}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;


        
