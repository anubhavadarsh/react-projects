import { useRef, useState } from "react";

import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +inputRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={inputRef}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a correct amount</p>}
    </form>
  );
};

export default MealItemForm;
