import { useState, useRef } from "react";
import Card from "components/Card";
import InputUnit from "components/InputUnit";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { billsActions } from "store/bills-slice";

const initialState = {
  desc: "",
  cat: "",
  amt: "",
  date: "",
};

const EnterBill = () => {
  const [formState, setFormState] = useState(initialState);

  const descRef = useRef();
  const catRef = useRef();
  const amtRef = useRef();
  const dateRef = useRef();

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setFormState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.desc.trim().length === 0) {
      descRef.current.focus();
      return;
    }

    if (formState.cat.trim().length === 0) {
      catRef.current.focus();
      return;
    }

    if (formState.amt.trim().length === 0 || +formState.amt <= 0) {
      amtRef.current.focus();
      return;
    }

    if (formState.date.trim().length === 0) {
      dateRef.current.focus();
      return;
    }

    const bill = {
      id: `${formState.desc.slice(0, 2)}_${formState.amt}_${formState.date}_${
        formState.cat
      }`,
      desc: formState.desc,
      cat: formState.cat,
      amt: +formState.amt,
      date: formState.date,
    };

    dispatch(billsActions.addBill(bill));
  };

  return (
    <Card>
      <header className={styles.header}>
        <h2>Enter your bill details</h2>
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputUnit
          id="desc"
          label="Where did you spend your money?"
          name="desc"
          value={formState.desc}
          onChange={handleInputChange}
          type="text"
          icon="question_mark"
          autoFocus={true}
          ref={descRef}
        />
        <InputUnit
          id="cat"
          label="What category does it belongs to?"
          name="cat"
          value={formState.cat}
          onChange={handleInputChange}
          type="text"
          icon="category"
          ref={catRef}
        />
        <InputUnit
          id="amt"
          label="How much did you pay for it?"
          name="amt"
          value={formState.amt}
          onChange={handleInputChange}
          type="number"
          icon="money"
          ref={amtRef}
        />
        <InputUnit
          id="date"
          label="When did you pay for it?"
          name="date"
          value={formState.date}
          onChange={handleInputChange}
          type="date"
          icon="calendar_month"
          ref={dateRef}
        />
        <div className={styles["btn-cont"]}>
          <button type="submit">submit</button>
        </div>
      </form>
    </Card>
  );
};

export default EnterBill;
