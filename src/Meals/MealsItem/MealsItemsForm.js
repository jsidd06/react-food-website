import React from "react";
import Input from "../../components/Input";
import classes from "./MealsItemsForm.module.css";

function MealsItemsForm() {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_",
          type: "number",
          max: "5",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealsItemsForm;
