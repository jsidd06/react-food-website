import React, { Fragment } from "react";
import HeaderCardButton from "./HeaderCardButton";

function Header() {
  return (
    <Fragment>
      <div style={{ justifyContent: "space-between", display: "flex" }}>
        <h1>Food Meals</h1>
        <HeaderCardButton />
      </div>
    </Fragment>
  );
}

export default Header;
