import React from 'react';

import './ExpenseForm.css';

function ExpenseForm() {
  function changeHandler(event) {
    console.log(event.target.value);
  }
  return (
    <>
      <form className="expense-form">
        <input type="text" onChange={changeHandler} />
        <input type="number" />
        <input type="date" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default ExpenseForm;
