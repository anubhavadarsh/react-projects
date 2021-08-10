import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const { expenses } = props;

  const [filteredYear, setfilteredYear] = useState("2020");

  function yearChangeHandler(changedYear) {
    setfilteredYear(changedYear);
  }

  const filteredExpenses = expenses.filter(
    ({ date }) => date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearChange={yearChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {<ExpensesList items={filteredExpenses} />}
    </Card>
  );
};

export default Expenses;
