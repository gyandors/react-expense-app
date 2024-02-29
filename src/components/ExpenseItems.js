import './ExpenseItems.css';

function ExpenseItems(props) {
  // const expenseDate = new Date(2023, 7, 18);
  // const expenseDesc = 'Life insurance';
  // const expenseAmt = 3000;
  // const locationOfExpense = 'Karnataka';

  return (
    <div className="expense-items">
      <div>{props.time.toISOString()}</div>
      <div>{props.location}</div>
      <div className="item-description">
        <h3>{props.title}</h3>
        <div className="item-price">₹{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
