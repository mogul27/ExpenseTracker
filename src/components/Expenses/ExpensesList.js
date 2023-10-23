
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
const ExpensesList = props => {

// Alternative way to && below is to define a variable
let expensesContent = <p>No expenses found.</p>;

// Can use conditional returning if the entire JSX content changes
// when the if block is missing
if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  return <ul className='expenses-list'>
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        category={expense.category}
        />
    ))}
  </ul>
};

export default ExpensesList