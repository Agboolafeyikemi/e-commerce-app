import React from "react";

import classes from "./Order.css";

const order = (props) => {
  const cartProducts = [];
  for (let cartProduct in props.cartProducts) {
    cartProducts.push({
      name: cartProduct,
      product: props.cartProducts[cartProduct],
    });
  }
  let totalPrice = 0;
  const cartProductOutput = cartProducts.map((ig) => {
    totalPrice += ig.product.id.prt.price;
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.product.id.prt.id}
      >
        {ig.product.id.prt.name} ({ig.product.id.prt.price})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>
        Cart {cartProducts.length > 1 ? ` Items` : `Item`}: {cartProductOutput}
      </p>
      <p>
        Total Price:{" "}
        <strong>USD {Number.parseFloat(totalPrice).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
