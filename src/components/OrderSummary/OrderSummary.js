import React, { Fragment } from "react";

import Button from "../UI/Button/Button";

const orderSummary = (props) => {
  const { orders } = props;
  let totalPrice = 0;
  const ordersSummary =
    orders &&
    orders.map((order, index) => {
      totalPrice += order.id.prt.price;
      return (
        <li key={index}>
          <span style={{ textTransform: "capitalize" }}>
            {order.id.prt.name}
          </span>
          : {order.id.prt.price}
        </li>
      );
    });
  return (
    <Fragment>
      <h3>Thanks for Trusting Us</h3>
      <p>Your Cart List:</p>
      <ul>{ordersSummary}</ul>
      <p>
        <strong>Total Price: {totalPrice.toFixed(2)}</strong>
      </p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Continue Shopping
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Checkout
      </Button>
    </Fragment>
  );
};

export default orderSummary;
