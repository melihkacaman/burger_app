import React from "react";
import classes from "./BurgerIngredient.module.css";

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;

    // eslint-disable-next-line no-duplicate-case
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;

    case "bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;

    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;

    default:
      ingredient = null;
      break;
  }

  return ingredient;
};

export default burgerIngredient;
