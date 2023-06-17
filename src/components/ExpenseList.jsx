
// import { useSelector } from 'react-redux';

// const ExpenseList = () => {
//   const expenses = useSelector((state) => state.expenses);

//   return (
//     <ul>
//       {expenses.map((expense, index) => (
//         <li key={index}>{expense}</li>
//       ))}
//     </ul>
//   );
// };

// export default ExpenseList;

// ExpenseList.jsx

// ExpenseList.jsx

import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../actions/expenseActions';

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const handleDeleteExpense = (expenseId) => {
    dispatch(deleteExpense(expenseId));
  };

  return (
    <div>
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <p>ID: {expense.id}</p>
          <p>Description: {expense.description}</p>
          <p>Amount: {expense.amount}</p>
          <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;


