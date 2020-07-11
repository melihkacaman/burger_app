import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = {
  salad: 0.6,
  bacon: 0.9,
  cheese: 1.4,
  meat: 0.5,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },

      totalPrice: 0,
      purchasable: false,
    };
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((item) => ingredients[item])
      .reduce((sum, curentValue) => sum + curentValue, 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updateCount;

    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });

    this.updatePurchaseState(updatedIngredient);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updateCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updateCount;

    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;

    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredient);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          reduceIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
