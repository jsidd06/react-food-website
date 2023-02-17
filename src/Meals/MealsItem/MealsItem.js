import React from "react";
import classes from "./MealsItems.module.css";
import MealsItemsForm from "./MealsItemsForm";

function MealsItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemsForm id={props.id} />
      </div>
    </li>
  );
}

export default MealsItem;
