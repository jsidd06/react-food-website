import React from "react";
import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "../components/Data";
import MealsItem from "./MealsItem";
import Card from "../screen/Card";

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
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
