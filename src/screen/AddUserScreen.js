import React, { Fragment, useState } from "react";

function AddUserScreen(props) {
  const [enterUserName, setEnterUserName] = useState();
  const [enterUserAge, setEnterUserAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enterUserName.trim().length === 0 || enterUserAge.trim().length === 0) {
      return alert("please add any username");
    }
    if (+enterUserAge < 1) {
      return alert("please enter the value greater then 1");
    }
    props.onAddHandler(enterUserName, enterUserAge);
    setEnterUserAge("");
    setEnterUserName("");
  };

  const enterUserNameHandler = (e) => {
    setEnterUserName(e.target.value);
  };
  const enterUserAgeHandler = (e) => {
    setEnterUserAge(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label>user name</label>
        <input
          type="text"
          onChange={enterUserNameHandler}
          value={enterUserName}
        />
        <label>age</label>
        <input
          type="number"
          onChange={enterUserAgeHandler}
          value={enterUserAge}
        />
        <button>add</button>
      </form>
    </Fragment>
  );
}

export default AddUserScreen;
