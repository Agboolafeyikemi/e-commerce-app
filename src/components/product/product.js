import React from "react";

import ProductCard from "./productCard/productCard";
import classes from "./product.css";

const Product = (props) => {
  const { categories, addToCart } = props;
  console.log("categories\n\n\n\n\n\nFEYIKEMI", categories);
  const mod = categories.map((cat, index) => {
    // console.log("productsLLL", cat.category.products);
    return <ProductCard addToCart={addToCart} category={cat} key={index} />;
    // return (
    //   cat.category.products &&
    //   cat.category.products.map((prt) => {
    //     return <ProductCard product={prt} key={prt.id} />;
    //   })
    // );
  });
  return mod;
};

export default Product;
