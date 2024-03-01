import React from 'react';
import './ExpenseDescription.css';

function ExpenseDescription(props) {
  return (
    <>
      <div className="expense-location">{props.location}</div>
      <div className="item-description">
        <h3 className="item-title">{props.title}</h3>
        <div className="item-price">₹{props.amount}</div>
      </div>
    </>
  );
}

export default ExpenseDescription;
