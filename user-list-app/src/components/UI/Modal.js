import ReactDOM from "react-dom";

import Card from "./Card";
import Backdrop from "./Backdrop";
import Button from "./Button";
import buttonStyles from "./Button.module.css";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

const Overlay = (props) => {
  return (
    <Card className={`${styles["center"]} ${styles["background"]}`}>
      <div className={styles["model"]}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <section>
          <p>{props.message}</p>
        </section>
        <Button onClick={props.onClose} className={buttonStyles["secondary"]}>
          ok
        </Button>
      </div>
    </Card>
  );
};

export default Modal;
