import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {

    // We want to only be able to select previous months up to next month
    const currentDate = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1)

  const [selectedDate, setSelectedDate] = useState(currentDate)

  const dateChangeHandler = (date) => {
    setSelectedDate(date);
    props.onChangeFilter(date);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Committed expenses for: </label>
        <ReactDatePicker selected={selectedDate}
        onChange={dateChangeHandler}
        dateFormat={"MM/yyyy"}
        showMonthYearPicker
        showIcon
        maxDate={(maxDate)}
        />
      </div>
    </div>
  );
};

export default ExpensesFilter;