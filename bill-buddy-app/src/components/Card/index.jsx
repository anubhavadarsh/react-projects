import styles from "./index.module.scss";

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
