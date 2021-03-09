import React from "react";

import ProductCard from "./productCard/productCard";

const Product = (props) => {
  const {
    categories,
    addToCart,
    disabled,
    handleButtonClick,
    deselectCategories,
    unOrderProducts,
    unOrderId,
  } = props;
  const productCard = categories.map((cat, index) => {
    if (cat.active === "active") {
    }

    return (
      <ProductCard
        disabled={disabled}
        addToCart={addToCart}
        category={cat}
        key={index}
        handleButtonClick={handleButtonClick}
        deselectCategories={deselectCategories}
        unOrderProducts={unOrderProducts}
        unOrderId={unOrderId}
      />
    );
  });
  return productCard;
};

export default Product;
