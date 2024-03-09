import React, { useState } from 'react';
import './ExpenseDescription.css';

function ExpenseDescription(props) {
  const [amount, setAmount] = useState(props.amount);

  function clickHandler(event) {
    setAmount(100);
  }

  return (
    <>
      <div className="item-description">
        <h3 className="item-title">{props.title}</h3>
        <div className="item-price">₹{amount}</div>
      </div>
      <button type="submit" className="del-btn" onClick={clickHandler}>
        Change
      </button>
    </>
  );
}

export default ExpenseDescription;
