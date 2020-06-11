import React, { Component } from "react";
import Auxcomponent from "../../../hoc/Auxcomp/auxcomp";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  //should be functional component, only used class to find if being rendered without need. Using react lifecycle hook
  componentDidUpdate() {
    console.log("[OrderSummary] WillUpdate"); //Shows Order Summary updates eventhough not being displayed on screen. Will have to go back to training to fix
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxcomponent>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          ORDER
        </Button>
      </Auxcomponent>
    );
  }
}

export default OrderSummary;
