import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  function titleChangeHandler(evt) {
    setEnteredTitle(evt.target.value);
  }

  function amountChangeHandler(evt) {
    setEnteredAmount(evt.target.value);
  }

  function dateChangeHandler(evt) {
    setEnteredDate(evt.target.value);
  }

  function formSubmitHandler(evt) {
    evt.preventDefault();
    if (!enteredTitle || !enteredAmount || !enteredDate) {
      console.error("fields empty!");
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      return;
    }
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSubmitExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onBtnClick();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="01-01-2019"
            max="31-12-2022"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onBtnClick}>
          cancel
        </button>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
