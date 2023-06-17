// expenseActions.js

// expenseActions.js
import { v4 as uuidv4 } from 'uuid';

// Action types
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

// Action creators
export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: {
    id: uuidv4(), // Generate a unique ID
    ...expense,
  },
});

export const deleteExpense = (expenseId) => ({
  type: DELETE_EXPENSE,
  payload: expenseId,
});

  