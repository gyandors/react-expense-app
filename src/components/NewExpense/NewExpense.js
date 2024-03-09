import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  function newExpenseHandler(fromExpenseForm) {
    const newExpense = {
      ...fromExpenseForm,
      id: Math.random(),
    };
    props.onAddExpense(newExpense);
  }

  return (
    <div className="expense-form">
      <ExpenseForm onNewExpense={newExpenseHandler} name="ajj" />
    </div>
  );
}

export default NewExpense;
