import React from "react";
import classes from "./productCard.module.css";
import CategoryCard from "../categoryCard/CategoryCard";

// import { Tabs, Button, Divider, Checkbox } from "antd";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";

// const { TabPane } = Tabs;

const ProductCard = (props) => {
  // const CheckboxGroup = Checkbox.Group;

  //   const operations = <Button>Extra Action</Button>;

  // const options = [, 'right'];

  // const Demo = () => {
  //   const [position, setPosition] = React.useState(['left', 'right']);

  //   const slot = React.useMemo(() => {
  //     if (position.length === 0) return null;

  //     return position.reduce(
  //       (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
  //       {},
  //     );
  //   }, [position]);
  const { category, addToCart } = props;

  console.log(category, "\n\n\n\n\n\\n\n\nPRODUCTEACHYYY");

  //   return <p>PRODUCTCARD!!!!!!!!</p>;
  //   return (
  //     <>
  //       <Tabs tabBarExtraContent={operations}>
  //         <TabPane tab="Tab 1" key="1">
  //           {product &&
  //             product.category.products.map((cat) =>
  //               console.log(cat, "PRTPRTLLLLLREST\n]n\n\n\n\n\n")

  //             )}
  //         </TabPane>
  //       </Tabs>
  //       {/* <br />
  //       <br />
  //       <br />
  //       <div>You can also specify its direction or both side</div>
  //       <Divider />
  //       <CheckboxGroup
  //         options={options}
  //         value={position}
  //         onChange={(value) => {
  //           setPosition(value);
  //         }}
  //       />
  //     </>
  //   );
  console.log(
    category.category.name,
    category.category.products,
    "\n\n\n\n\n\\n\n\n\nOMOWUMI"
  );
  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }
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
          <Dropdown.Button
            onClick={handleButtonClick}
            placement="topCenter"
            overlay={menu}
            disabled
          >
            {/* <span>{category.category.name}</span> */}
            {category.category.name}
          </Dropdown.Button>
        </h3>
      </div>
      <div className={classes.cardList}>
        {category.category.products &&
          category.category.products.map(
            ({ name, avatar, id, products_in_category, price }) => {
              const product = { name, avatar, id, price };
              return (
                <CategoryCard
                  key={id}
                  id={id}
                  name={name}
                  image={avatar}
                  price={price}
                  product={product}
                  addToCart={addToCart}
                />
              );
            }
          )}
      </div>
      ;
    </div>
  );
};

export default ProductCard;
