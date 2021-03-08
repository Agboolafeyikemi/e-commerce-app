import React from "react";

import classes from "./Order.module.css";

const order = (props) => {
  const cartProducts = [];
  for (let cartProduct in props.cartProducts) {
    cartProducts.push({
      name: cartProduct,
      product: props.cartProducts[cartProduct],
    });
  }
  let totalPrice = 0;
  console.log("igPRODUCT\n\n\n\n\n", cartProducts);
  const cartProductOutput = cartProducts.map((ig) => {
    console.log("ig\n\n\n\n\n", ig);
    totalPrice += ig.product.price;
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.product.id}
      >
        {ig.product.name} ({ig.product.price})
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
      <button>Buy Now</button>
    </div>
  );
};

export default order;
