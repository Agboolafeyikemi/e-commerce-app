import React from "react";
import classes from "./productCard.module.css";
import CategoryCard from "../categoryCard/CategoryCard";

import { Menu, message } from "antd";

const ProductCard = (props) => {
  const { category, addToCart, handleButtonClick, deselectCategories } = props;

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Disable</Menu.Item>
      <Menu.Item key="2">Enable</Menu.Item>
    </Menu>
  );

  return (
    <div className={classes.categoryList}>
      <div className={classes.container}>
        <h3 className={classes.catDividerTitle}>
          <button
            overLay={menu}
            onClick={() => handleButtonClick(category.id)}
            key={category.id}
            className={category.active ? classes.active : classes.disActive}
          >
            {category.name}
          </button>
        </h3>
      </div>
      <div className={classes.cardList}>
        {category.products &&
          category.products.map(({ name, avatar, id, price }) => {
            const product = { name, avatar, id, price };
            const isActiveProduct = category.active;
            return (
              <CategoryCard
                key={id}
                id={id}
                name={name}
                image={avatar}
                price={price}
                product={product}
                addToCart={addToCart}
                isActiveProduct={isActiveProduct}
                deselectCategories={deselectCategories}
              />
            );
          })}
      </div>
      ;
    </div>
  );
};

export default ProductCard;
