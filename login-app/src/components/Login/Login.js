import React, { useState, useEffect, useReducer, useContext } from "react";

import AuthContext from "../../store/auth-context";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "ENTER_EMAIL":
      return { value: action.payload, isValid: action.payload.includes("@") };
    case "VALIDATE_EMAIL":
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return { value: "", isValid: null };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "ENTER_PASS":
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };
    case "VALIDATE_PASS":
      return { value: state.value, isValid: state.value.trim().length > 6 };
    default:
      return { value: "", isValid: null };
  }
};

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    let timer = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "ENTER_EMAIL", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "ENTER_PASS", payload: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "VALIDATE_EMAIL" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "VALIDATE_PASS" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
