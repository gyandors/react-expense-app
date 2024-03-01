import ExpenseItems from './components/ExpenseItems';
import './App.css';

function App() {
  const expenses = [
    {
      title: 'Car insurance',
      amount: '14900',
      date: new Date(2023, 4, 23),
      location: 'National Insurance',
    },
    {
      title: 'Collage fees',
      amount: '20000',
      date: new Date(2023, 6, 3),
      location: 'KASCC Collage',
    },
    {
      title: 'Grocery',
      amount: '1300',
      date: new Date(2023, 9, 14),
      location: 'Relience mart',
    },
    {
      title: 'New bike',
      amount: '86000',
      date: new Date(2023, 2, 23),
      location: 'Bajaj showroom',
    },
    {
      title: 'New mobile',
      amount: '89990',
      date: new Date(2023, 8, 23),
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
            date={item.date}
            location={item.location}
          />
        );
      })}
    </div>
  );
}

export default App;
