import React, { Fragment } from "react";
import Image from "../Images/veg.jpg";
import classes from "./Header.module.css";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Meals</h1>
        <div>cart</div>
      </header>
      <div className={classes["main-image"]}>
        <img src={Image} alt="food" />
      </div>
    </Fragment>
  );
}

export default Header;
