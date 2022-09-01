import { useContext, useRef } from "react";

import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import { firebaseApiKey } from "../../config";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const newPassInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPassInputRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseApiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/");
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          min="7"
          ref={newPassInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
