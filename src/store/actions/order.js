import * as actionTypes from "./actionTypes";
import axios from "../../hooks/http-error-handler";

export const purchaseBurgerSuccess = (id, order) => {
  return {
    type: actionTypes.PURCHASE_PRODUCT_SUCCESS,
    orderId: id,
    order: order,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_PRODUCT_START,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_PRODUCT_FAIL,
    error: error,
  };
};

export const purchaseProduct = (order, token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    try {
      dispatch(purchaseBurgerSuccess(order, token));
    } catch {
      dispatch(purchaseBurgerFail());
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
export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("/orders.json" + queryParams)
      .then((res) => {
        const fetchOrdersArray = [];
        for (let key in res.data) {
          fetchOrdersArray.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrderSuccess(fetchOrdersArray));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
