import React, { useState } from "react";
import UserList from "./components/UserList";
import AddUserScreen from "./screen/AddUserScreen";

function App() {
  const [addUserData, setAddUserData] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setAddUserData((prev) => {
      return [
        ...prev,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUserScreen onAddHandler={addUserHandler} />
      <UserList users={addUserData} />
    </div>
  );
}

export default App;
