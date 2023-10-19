import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // True or false state to whether to show form
  const [isAdding, setIsAdding] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // Means to unpack the values inside
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // Using props to pass values up to parent
    // (Pass data so we're lifting the state up)
    props.onAddExpense(expenseData);
  };

  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {/* Use on because we're going to have a function for the prop to define 
      behaviour when something happens */}
      {/* Show button if isAdding is true */}
      {!isAdding && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {isAdding && <ExpenseForm onCancel={stopAddingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
