import * as actionTypes from "./actionTypes";

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
  console.log("order\n\n\n\n\n\n", order);
  return (dispatch) => {
    dispatch(purchaseProductStart());
    const transformOrder = JSON.stringify(order.prt);
    localStorage.setItem("order", transformOrder);

    dispatch(purchaseProductSuccess(order, token));
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
    if (!order) {
      dispatch(fetchOrdersFail());
    }
  };
};
