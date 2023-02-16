import React, { Fragment, useState } from "react";
import UserList from "../components/UserList";

function AddUserScreen() {
  const [enterUserName, setEnterUserName] = useState();
  const [enterUserAge, setEnterUserAge] = useState();
  const [addUserData, setAddUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enterUserName.trim().length === 0 || enterUserAge.trim().length === 0) {
      return alert("please add any username");
    }
    if (+enterUserAge < 1) {
      return alert("please enter the value greater then 1");
    }
    setEnterUserAge("");
    setEnterUserName("");
    setAddUserData((prev) => {
      return [
        ...prev,
        {
          name: enterUserName,
          age: enterUserAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label>user name</label>
        <input
          type="text"
          onChange={(e) => setEnterUserName(e.target.value)}
          value={enterUserName}
        />
        <label>age</label>
        <input
          type="number"
          onChange={(e) => setEnterUserAge(e.target.value)}
          value={enterUserAge}
        />
        <button>add</button>
      </form>
      <UserList users={addUserData} />
    </Fragment>
  );
}

export default AddUserScreen;
