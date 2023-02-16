import React from "react";
import DUMMY_MEALS from "../components/Data";

function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <div>
      <ul>{mealList}</ul>
    </div>
  );
}

export default AvailableMeals;
