import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div id={styles["backdrop"]} onClick={props.onClose}></div>;
};

export default Backdrop;
