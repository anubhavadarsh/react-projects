import Card from "components/Card";
import clsx from "clsx";
import styles from "./index.module.scss";

const getSuffixDate = (number) => {
  const lastDigit = number % 10;

  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const BillCard = ({ category, amount, date, description, className }) => {
  const incomingDate = new Date(date);

  const dateMod = `${incomingDate.getDate()}${getSuffixDate(
    incomingDate.getDate()
  )} ${incomingDate.toLocaleString("default", {
    month: "short",
  })}, ${incomingDate.getFullYear()}`;

  return (
    <Card className={clsx(styles.bill, className)}>
      <header>
        <span>{category}</span>
        <span className={clsx("material-icons", styles.icon)}>more_horiz</span>
      </header>
      <div className={styles.content}>
        <span className={styles.amount}>${amount}</span>
        <span className={styles.date}>{dateMod}</span>
      </div>
      <div className={styles.desc}>{description}</div>
    </Card>
  );
};

export default BillCard;
