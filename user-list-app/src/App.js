import { useState } from "react";
import "./App.css";
import UserEntry from "./components/UserEntry/UserEntry";
import UserList from "./components/UserList/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const handleAddUser = (user) => {
    setUserList((prevState) => [...prevState, user]);
  };

  const handleDelUser = (id) => {
    const newUsers = userList.filter((user) => user.id !== id);

    setUserList(newUsers);
  };

  return (
    <div className="App">
      <UserEntry onAddUser={handleAddUser} />
      {userList.length > 0 && (
        <UserList users={userList} onDelUser={handleDelUser} />
      )}
    </div>
  );
}

export default App;
