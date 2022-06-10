import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MonthlyBudget from "../MonthlyBudget/index";
import BillCard from "components/ViewBills/BillCard";
import styles from "./index.module.scss";
import { getPowerSet } from "utils/getPowerSet";

const Landing = () => {
  const [minBillstoPay, setMinBillsToPay] = useState([]);
  const [budget, setBudget] = useState("");

  const bills = useSelector((state) => state.bills.billsList);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let newBills = getPowerSet(bills, bills.length, budget);

      if (newBills.length) {
        let minLen = newBills[0].length;
        let minAns = newBills[0];
        for (let o = 1; o < newBills.length; o++) {
          if (newBills[o].length < minLen) {
            minAns = newBills[o];
          }
        }

        setMinBillsToPay(minAns);
      } else {
        setMinBillsToPay([]);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [budget, bills]);

  const onBudgetChange = (event) => {
    setBudget(+event.target.value);
  };

  return (
    <>
      <MonthlyBudget onChange={onBudgetChange} value={budget} />
      <section className={styles.viewBills}>
        {minBillstoPay.length === 0 && (
          <p className={styles.fallback}>
            looks like you cannot pay any bills this month
          </p>
        )}
        {minBillstoPay.length > 0 &&
          minBillstoPay.map((bill) => (
            <BillCard
              id={bill.id}
              amount={bill.amt}
              category={bill.cat}
              date={bill.date}
              description={bill.desc}
              key={bill.id}
              className={styles.fullWidth}
            />
          ))}
      </section>
    </>
  );
};

export default Landing;
