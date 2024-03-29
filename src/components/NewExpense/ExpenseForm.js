import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  /* //We can define multiple useStates in single line using object
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });*/

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);

    /* // We change the state directly. Note the spread operator
    setUserInput({ ...userInput, title: event.target.value });
    // or using callback fuction
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });*/
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onNewExpense(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form className="form-control" onSubmit={submitHandler}>
      <input
        type="text"
        name="expense-title"
        value={enteredTitle}
        placeholder="Expense title"
        onChange={titleChangeHandler}
        required
      />
      <input
        type="number"
        name="expense-amount"
        value={enteredAmount}
        placeholder="Expense amount"
        onChange={amountChangeHandler}
        required
      />
      <input
        type="date"
        value={enteredDate}
        min={'2020-01-01'}
        max={'2025-12-31'}
        placeholder="Date"
        onChange={dateChangeHandler}
        required
      />
      <div className="form-control-btn">
        <button className="submit-btn" type="submit">
          Add
        </button>
        <button className="reset-btn" type="reset" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
