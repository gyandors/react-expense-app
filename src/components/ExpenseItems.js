import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';

function ExpenseItems(props) {
  return (
    <div className="expense-items">
      <ExpenseDate date={props.date} />
      <div className="expense-location">{props.location}</div>
      <div className="item-description">
        <h3 className="item-title">{props.title}</h3>
        <div className="item-price">₹{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
