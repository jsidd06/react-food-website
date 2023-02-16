import React from "react";

function MealsItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <div>
      <h3>{props.name}</h3>
      <div>{props.description}</div>
      <div>{price}</div>
    </div>
  );
}

export default MealsItem;
