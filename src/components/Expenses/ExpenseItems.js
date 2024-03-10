import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDescription from './ExpenseDescription';
import './ExpenseItems.css';

function ExpenseItems(props) {
  return (
    <div>
      <div className="expense-items">
        <ExpenseDate date={props.date} />
        <ExpenseDescription title={props.title} amount={props.amount} />
      </div>
    </div>
  );
}

export default ExpenseItems;
