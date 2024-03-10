import React, { useState } from 'react';
import ExpenseItems from './components/Expenses/ExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import './App.css';

function App() {
  const expenses = [
    {
      id: Math.random(),
      title: 'Car insurance',
      amount: '14900',
      date: new Date('2023-4-23'),
    },
    {
      id: Math.random(),
      title: 'Collage fees',
      amount: '20000',
      date: new Date('2024-6-3'),
    },
    {
      id: Math.random(),
      title: 'Grocery',
      amount: '1300',
      date: new Date('2022-9-14'),
    },
    {
      id: Math.random(),
      title: 'New bike',
      amount: '86000',
      date: new Date('2024-2-23'),
    },
  ];

  const [updateExpenses, setUpdateExpenses] = useState(expenses);
  function addExpenseHandler(fromNewExpense) {
    setUpdateExpenses([fromNewExpense, ...updateExpenses]);
  }

  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );
  function changeFilterHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpense = updateExpenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <h1 className="heading">Expense Manager</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="expense-container">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        {filteredExpense.map((item) => {
          return (
            <ExpenseItems
              key={item.id} //Only for removing error in console
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
