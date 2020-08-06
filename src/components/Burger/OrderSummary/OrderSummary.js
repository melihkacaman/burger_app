import React, { Component } from "react";
import classes from "./OrderSummary.module.css";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../../components/UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const keysOfingredients = Object.keys(this.props.ingredients);
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {keysOfingredients.map((igKey) => (
            <li key={igKey}>
              <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
              {this.props.ingredients[igKey]}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p> Are you sure to check this out ! </p>
        <Button type="Success" clicked={this.props.checked}>
          Check Out!
        </Button>
        <Button type="Danger" clicked={this.props.canceled}>
          Cancel
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
