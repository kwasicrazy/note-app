import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addExpense } from "../fetures/expenceSlice";

const ExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    item: "",
    amount: "",
    category: "",
  });
  const { item, amount, category } = expenseData;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newExpense = { id: uuid(), item, amount, category };

    dispatch(addExpense(newExpense));

    setExpenseData({
      item: "",
      amount: "",
      category: "",
    });
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item</label>
          <input type="text" name="item" value={item} onChange={handleChange} />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category</label>
          <select
            placeholder="Select option"
            name="category"
            value={category}
            onChange={handleChange}
          >
            <option value="FOOD AND DRINKS">Food and Drinks</option>
            <option value="Transportation">Transportation</option>
            <option value="Accomodation">Accomodation</option>
          </select>
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
