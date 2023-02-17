import React, { Fragment } from "react";
import Image from "../Images/veg.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Meals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={Image} alt="food" />
      </div>
    </Fragment>
  );
}

export default Header;
