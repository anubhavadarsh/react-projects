import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const { date } = props;
  const [month, day, year] = [
    date.toLocaleString("en-us", { month: "long" }),
    date.toLocaleString("en-us", { day: "2-digit" }),
    date.getFullYear(),
  ];

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
