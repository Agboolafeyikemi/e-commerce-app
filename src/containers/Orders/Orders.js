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
  console.log("disableOrders", disableOrders);

  let orderList = <Spinner />;
  if (!props.loading) {
    orderList = <Order cartProducts={orders} />;
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
