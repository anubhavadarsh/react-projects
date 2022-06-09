import styles from "./index.module.scss";

const MonthlyBudget = ({ value, onChange }) => {
  return (
    <form className={styles.form}>
      <input
        type="number"
        min="0"
        step="any"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default MonthlyBudget;
