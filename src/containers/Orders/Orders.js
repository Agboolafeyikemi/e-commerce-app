import React from "react";
import { connect } from "react-redux";
import order from "../../components/Order/Order";

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

  const mergedArray = [...disableOrders.flat(), ...tranOrders];
  const reduceOrders = mergedArray.reduce((acc, current) => {
    const x = acc.find((item) => item.id !== current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  console.log("mergedArray", reduceOrders, mergedArray);

  let orderList = <Spinner />;
  if (!props.loading) {
    orderList = <Order cartProducts={reduceOrders} />;
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
