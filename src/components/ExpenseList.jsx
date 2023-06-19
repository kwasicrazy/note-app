import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../fetures/expenceSlice";
import EditExpense from "./EditExpense";

const ExpenseList = () => {
  const { expenses } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <div key={expense.id}>
          {/* <p>ID: {expense.id}</p> */}
          <p>Description: {expense.item}</p>
          <p>Amount: {expense.amount}</p>
          <p>Category : {expense.category}</p>
          <EditExpense expense={expense} />
          <button onClick={() => dispatch(deleteExpense(expense.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
