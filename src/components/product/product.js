import React from "react";

import ProductCard from "./productCard/productCard";

const Product = (props) => {
  const {
    categories,
    addToCart,
    disabled,
    handleButtonClick,
    deselectCategories,
  } = props;
  const productCard = categories.map((cat, index) => {
    return (
      <ProductCard
        disabled={disabled}
        addToCart={addToCart}
        category={cat}
        key={index}
        handleButtonClick={handleButtonClick}
        deselectCategories={deselectCategories}
      />
    );
  });
  return productCard;
};

export default Product;
