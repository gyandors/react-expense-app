import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  return (
    <div className="expense-form">
      <form className="form-control">
        <input
          type="text"
          name="expense-title"
          placeholder="Expense title"
          onChange={titleChangeHandler}
        />
        <input
          type="number"
          name="expense-amount"
          placeholder="Expense amount"
          onChange={amountChangeHandler}
        />
        <input type="date" min={'2020-01-01'} onChange={dateChangeHandler} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
