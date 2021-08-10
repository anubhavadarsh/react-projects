import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  function submitExpenseHandler(new_expense) {
    props.onExpenseDataPass({ ...new_expense, id: Math.random().toString() });
  }

  function clickHandler() {
    setIsClicked((prevState) => !prevState);
  }

  return (
    <div className="new-expense">
      {!isClicked && <button onClick={clickHandler}>Add Expense</button>}
      {isClicked && (
        <ExpenseForm
          onSubmitExpense={submitExpenseHandler}
          onBtnClick={clickHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
