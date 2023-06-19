import { useState } from "react";
import { useDispatch } from "react-redux";
import { editExpense } from "../fetures/expenceSlice";

const EditExpense = ({ expense }) => {
  const [expenseData, setExpenseData] = useState({
    item: expense.item,
    amount: expense.amount,
    category: expense.category,
  });
  const [show, setShow] = useState(false);
  const { item, amount, category } = expenseData;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedExpense = { id: expense.id, item, amount, category };

    dispatch(editExpense({ id: expense.id, updatedExpense }));
    setShow(false);
  };

  return (
    <div>
      <button onClick={() => setShow(!show)}>Edit</button>
      {show && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Item</label>
            <input
              type="text"
              name="item"
              value={item}
              onChange={handleChange}
            />
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
          <button type="submit">save</button>
        </form>
      )}
    </div>
  );
};

export default EditExpense;
