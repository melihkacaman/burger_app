import React from "react";
import classes from "./OrderSummary.module.css";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../../components/UI/Button/Button";

const orderSummary = (props) => {
  const keysOfingredients = Object.keys(props.ingredients);
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {keysOfingredients.map((igKey) => (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
            {props.ingredients[igKey]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total Price: {props.price}</strong>
      </p>
      <p> Are you sure to check this out ! </p>
      <Button type="Success" clicked={props.checked}>
        Check Out!
      </Button>
      <Button type="Danger" clicked={props.canceled}>
        Cancel
      </Button>
    </Aux>
  );
};

export default orderSummary;
