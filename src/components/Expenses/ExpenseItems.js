import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDescription from './ExpenseDescription';
import './ExpenseItems.css';

function ExpenseItems(props) {
  return (
    <div className="expense-items">
      <ExpenseDate date={props.date} />
      <ExpenseDescription
        location={props.location}
        title={props.title}
        amount={props.amount}
      />
    </div>
  );
}

export default ExpenseItems;
