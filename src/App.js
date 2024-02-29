import ExpenseItems from './components/ExpenseItems';
import './App.css';

function App() {
  const expenses = [
    {
      title: 'Car insurance',
      amount: '4000',
      time: new Date(2023, 4, 23),
      location: 'National Insurance',
    },
    {
      title: 'Collage fees',
      amount: '20000',
      time: new Date(2023, 6, 3),
      location: 'Collage',
    },
    {
      title: 'Grocery',
      amount: '1300',
      time: new Date(2023, 9, 14),
      location: 'Ring road',
    },
    {
      title: 'New bike',
      amount: '86000',
      time: new Date(2023, 2, 23),
      location: 'Bajaj showroom',
    },
    {
      title: 'New mobile',
      amount: '49990',
      time: new Date(2023, 8, 23),
      location: 'Apple shop',
    },
  ];
  return (
    <div>
      <h1 className="heading">Expense Manager</h1>
      {expenses.map((item) => {
        return (
          <ExpenseItems
            title={item.title}
            amount={item.amount}
            time={item.time}
            location={item.location}
          ></ExpenseItems>
        );
      })}
    </div>
  );
}

export default App;
