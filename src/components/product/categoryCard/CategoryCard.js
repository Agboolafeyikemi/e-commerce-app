import React from "react";

import productImg from "../../../assets/images/productimg.png";
import classes from "./categoryCard.module.css";

const CategoryCard = ({ image, name, product, id, price, addToCart }) => {
  return (
    <div className={classes.defaultCard} key={id}>
      <div className={classes.cardImg}>
        {image ? <img src={image} alt="" /> : <img src={productImg} alt="" />}
      </div>
      <div className={classes.cartContainer}>
        <div className={classes.cardDetails}>
          <h4 className={classes.cardTitle}>{name}</h4>
          <p>
            Price: <strong> # {price.toFixed(2)}</strong>
          </p>
        </div>
        <div className={classes.cartBtn}>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
// added={() => props.ingredientAdded( ctrl.type )}

export default CategoryCard;
