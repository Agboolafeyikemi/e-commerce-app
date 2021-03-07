import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { connect, useDispatch, useSelector } from "react-redux";

import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = (props) => {
  const orders = props[0];

  console.log("orderORDERORDER", orders);
  let orderList = <Spinner />;
  // if (!props.loading) {
  //   orderList =
  //     orders &&
  //     orders.map(({ id }) => <Order key={id.prt.id} cartProducts={id.prt} />);
  // }
  if (!props.loading) {
    orderList = <Order cartProducts={orders} />;
  }
  return <div>{orderList}</div>;
};

const mapStateToProps = (state) => {
  return {
    loading: state.order.loading,
  };
};

export default connect(mapStateToProps)(Orders);
