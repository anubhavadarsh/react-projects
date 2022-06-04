import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const handleDeleteUser = (id) => () => {
    props.onDelUser(id);
  };

  return (
    <Card>
      <ul className={styles["list"]}>
        {props.users.map((user) => (
          <Item user={user} key={user.id} handleItemClick={handleDeleteUser} />
        ))}
      </ul>
    </Card>
  );
};

const Item = (props) => {
  return (
    <li
      className={styles["item"]}
      onClick={props.handleItemClick(props.user.id)}
    >
      <span>👉</span>
      <span>{props.user.name}</span>
      <span>{props.user.age} years old</span>
    </li>
  );
};

export default UserList;
