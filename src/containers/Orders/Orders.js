import React from "react";
import { connect } from "react-redux";

import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = (props) => {
  const orders = props[0];

  const ctProduct = props.categoryProducts;

  const tranOrders = [];
  orders.map((order) => {
    return tranOrders.push(order.id.prt);
  });

  const deselectCategories = ctProduct.filter((category) => {
    return category.active === false;
  });

  const disableOrders = deselectCategories.map((category) => {
    return category.products.filter((product) =>
      tranOrders.some((order) => product.name === order.name)
    );
  });
  console.log("deselectCategories|\n\n\n\n\n\n\n", deselectCategories);
  console.log("tranOrders\n\n\n\n\n\n\n", tranOrders);
  const mergedArray = [...disableOrders.flat(), ...tranOrders];
  const reduceOrders = mergedArray.reduce((acc, current) => {
    const x = acc.find((item) => item.id !== current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  console.log("reduceOrdersandmergedArray", reduceOrders, mergedArray);
  const names = [];
  for (let i of tranOrders) {
    console.log("i\n\n\n\n\n", i);
    names.push(i.name);
  }
  console.log("names\n\n\n\n\n", names);
  const newO = deselectCategories
    .flat()
    .map((cat) =>
      cat.products.filter((product) =>
        names.map((name) => name === product.name)
      )
    );
  console.log("newO \n\n\n\n\n", newO);
  let orderList = <Spinner />;
  if (!props.loading) {
    orderList = <Order cartProducts={mergedArray} />;
  }
  return <div>{orderList}</div>;
};

const mapStateToProps = (state) => {
  return {
    loading: state.order.loading,
    categoryProducts: state.productCategory.categories,
  };
};

export default connect(mapStateToProps)(Orders);
