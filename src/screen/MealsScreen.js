import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

function MealsScreen() {
  return (
    <div>
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default MealsScreen;
