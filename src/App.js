import ExpenseItems from './components/Expenses/ExpenseItems';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import './App.css';

function App() {
  const expenses = [
    {
      id: 0,
      title: 'Car insurance',
      amount: '14900',
      date: new Date(2023, 4, 23),
      location: 'National Insurance',
    },
    {
      id: 1,
      title: 'Collage fees',
      amount: '20000',
      date: new Date(2023, 6, 3),
      location: 'KASCC Collage',
    },
    {
      id: 2,
      title: 'Grocery',
      amount: '1300',
      date: new Date(2023, 9, 14),
      location: 'Relience mart',
    },
    {
      id: 3,
      title: 'New bike',
      amount: '86000',
      date: new Date(2023, 2, 23),
      location: 'Bajaj showroom',
    },
  ];
  return (
    <div>
      <h1 className="heading">Expense Manager</h1>
      <ExpenseForm />
      {expenses.map((item) => {
        return (
          <ExpenseItems
            key={item.id} //Only for removing warnings in console
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
