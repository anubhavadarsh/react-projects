import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (prop) => {
  const [showForm, setShowForm] = useState(false);

  const handleFormVisiblity = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onSaveExpense={prop.onSaveExpense}
          onHideForm={handleFormVisiblity}
        />
      )}
      {showForm || (
        <button onClick={handleFormVisiblity}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
