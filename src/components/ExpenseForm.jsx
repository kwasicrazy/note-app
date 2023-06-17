import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../actions/expenseActions';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (description.trim() === '' || amount.trim() === '') {
      return;
    }

    const expense = {
      description,
      amount: parseFloat(amount),
    };

    dispatch(addExpense(expense));

    // Clear form inputs
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;

