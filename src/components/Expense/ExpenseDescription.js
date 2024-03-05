import React, { useState } from 'react';
import './ExpenseDescription.css';

function ExpenseDescription(props) {
  const [amount, setAmount] = useState(props.amount);

  function clickHandler() {
    setAmount(100);
  }

  return (
    <>
      <div className="expense-location">{props.location}</div>
      <div className="item-description">
        <h3 className="item-title">{props.title}</h3>
        <div className="item-price">₹{amount}</div>
      </div>
      <button id="del-btn" onClick={clickHandler}>
        Change
      </button>
    </>
  );
}

export default ExpenseDescription;
