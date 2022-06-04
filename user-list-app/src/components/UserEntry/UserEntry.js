import React, { useRef, useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./UserEntry.module.css";

const UserEntry = (props) => {
  const [modal, setModal] = useState({
    showModal: false,
    title: "",
    message: "",
  });
  const nameRef = useRef();
  const ageRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const age = ageRef.current.value;
    if (name.trim().length === 0) {
      setModal({
        showModal: true,
        title: "Error in name input field",
        message: "name input field cannot be empty!",
      });
      return;
    }

    if (+age === 0) {
      setModal({
        showModal: true,
        title: "Error in age input field",
        message: "age must be greater than zero!",
      });
      return;
    }

    props.onAddUser({
      id: `${name}_${age}__${Math.floor(Math.random() * 1000)}`,
      name,
      age,
    });

    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  const handleModalClose = () => {
    setModal({
      showModal: false,
      title: "",
      message: "",
    });
  };

  return (
    <>
      <Card>
        <form className={styles["form"]} onSubmit={handleFormSubmit}>
          <InputUnit label="User Name" type="text" name="name" ref={nameRef} />
          <InputUnit label="User Age" type="number" name="age" ref={ageRef} />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
      {modal.showModal && (
        <Modal
          title={modal.title}
          message={modal.message}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

const InputUnit = React.forwardRef((props, ref) => {
  let inputElem = <input type={props.type} name={props.name} ref={ref} />;

  if (props.type === "number") {
    inputElem = (
      <input type={props.type} name={props.name} step={1} ref={ref} />
    );
  }

  return (
    <div className={styles["input-unit"]}>
      <label htmlFor={props.name}>{props.label}:</label>
      {inputElem}
    </div>
  );
});

export default UserEntry;
