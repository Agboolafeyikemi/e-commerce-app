import React from "react";

import productImg from "../../../assets/images/productimg.png";
import classes from "./categoryCard.module.css";

const CategoryCard = ({
  image,
  name,
  product,
  id,
  price,
  addToCart,
  isActiveProduct,
  parentCategory,
  unOrderProducts,
}) => {
  const clickedCategory = {
    parentCategory: parentCategory,
    product: product,
  };
  // console.log("parentId\n\n\n\n\n", parentId);

  return (
    <div className={classes.defaultCard} key={id}>
      <div className={classes.cardImg}>
        {image ? (
          <img src={image} alt="cardImage" />
        ) : (
          <img src={productImg} alt="placeHolder" />
        )}
      </div>
      <div className={classes.cartContainer}>
        <div className={classes.cardDetails}>
          <h4 className={classes.cardTitle}>{name}</h4>
          <p>
            Price: <strong> # {price.toFixed(2)}</strong>
          </p>
        </div>
        <div className={classes.cartBtn}>
          <button
            onClick={() => addToCart(clickedCategory)}
            disabled={!isActiveProduct}
            className={isActiveProduct ? classes.isActive : classes.deActiveBtn}
          >
            {isActiveProduct ? `Add to Cart` : `Product Disable`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
