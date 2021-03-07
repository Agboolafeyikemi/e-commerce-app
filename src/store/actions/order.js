import * as actionTypes from "./actionTypes";
import axios from "../../hooks/http-error-handler";

export const purchaseProductSuccess = (id, order) => {
  return {
    type: actionTypes.PURCHASE_PRODUCT_SUCCESS,
    orderId: id,
    order: order,
  };
};

export const purchaseProductStart = () => {
  return {
    type: actionTypes.PURCHASE_PRODUCT_START,
  };
};

export const purchaseProductFail = (error) => {
  return {
    type: actionTypes.PURCHASE_PRODUCT_FAIL,
    error: error,
  };
};

export const purchaseProduct = (order, token) => {
  return (dispatch) => {
    console.log("purchasePRODUCT\n\n\n\n\n\n\n\n,", order, token);
    dispatch(purchaseProductStart());
    const transformOrder = JSON.stringify(order.prt);
    // const userId = order.prt.userId;
    localStorage.setItem("order", transformOrder);
    // console.log("setOrd\n\n\n\n\n\n", setOrd);

    dispatch(purchaseProductSuccess(order, token));
    // dispatch(purchaseProductSuccess(order, token));
    if (!order || !token) {
      dispatch(purchaseProductFail());
    }
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrderSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,

    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};
export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const order = JSON.parse(localStorage.getItem("order"));
    const tranO = order.prt;
    dispatch(fetchOrderSuccess(tranO));
    console.log("orderLOCALSTORAGE\n\n\n\n\n\n", order);
    console.log("FETCHORDERAPP IS SUCESS");
    if (!order) {
      dispatch(fetchOrdersFail());
    }
  };
};
