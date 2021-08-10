import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const { items } = props;

  if (items.length === 0)
    return <h2 className="expenses-list__fallback">No Expenses to show.</h2>;

  return (
    <ul className="expenses-list">
      {items.map(({ title, amount, date, id }) => {
        return (
          <ExpenseItem title={title} amount={amount} date={date} key={id} />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
