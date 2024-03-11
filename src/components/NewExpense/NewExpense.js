import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [editing, setEditing] = useState(false);

  function newExpenseHandler(fromExpenseForm) {
    const newExpense = {
      ...fromExpenseForm,
      id: Math.random(),
    };
    props.onAddExpense(newExpense);
    setEditing(false);
  }

  function startEditing() {
    setEditing(true);
  }

  function stopEditing() {
    setEditing(false);
  }

  return (
    <div className="expense-form">
      {!editing && (
        <button className="add-expense" onClick={startEditing}>
          Add Expense
        </button>
      )}
      {editing && (
        <ExpenseForm onNewExpense={newExpenseHandler} onCancel={stopEditing} />
      )}
    </div>
  );
}

export default NewExpense;
