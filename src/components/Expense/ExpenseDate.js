import './ExpenseDate.css';

function ExpenseDate(props) {
  const day = props.date.toLocaleString('en-IN', { day: '2-digit' });
  const month = props.date.toLocaleString('en-IN', { month: 'long' });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div>{month}</div>
      <div className="day">{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
