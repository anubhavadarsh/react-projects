import Card from "./Card";
import Button from "./Button";
import styles from "./Model.module.css";

const Model = (props) => {
  return (
    <Card className={`${styles["center"]} ${styles["background"]}`}>
      <div className={styles["model"]}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <section>
          <p>{props.message}</p>
        </section>
        <Button onClick={props.onClose}>ok</Button>
      </div>
    </Card>
  );
};

export default Model;
