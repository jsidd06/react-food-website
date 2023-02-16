import React from "react";
import { Card } from "reactstrap";
import DUMMY_MEALS from "../components/Data";
import MealsItem from "./MealsItem";

function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Card>
      <ul>{mealList}</ul>
    </Card>
  );
}

export default AvailableMeals;
