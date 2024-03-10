import React from 'react';
import './ExpenseFilter.css';

function ExpenseFilter(props) {
  function changeHandler(event) {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className="expense-filter">
      <label htmlFor="expense-year">Filter by Year</label>
      <select id="expense-year" value={props.selected} onChange={changeHandler}>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
