import clsx from "clsx";
import styles from "./index.module.scss";

const PillButton = ({ icon, title }) => {
  return (
    <button className={clsx(styles.button)}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
    </button>
  );
};

export default PillButton;
