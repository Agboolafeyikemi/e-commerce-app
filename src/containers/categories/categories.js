import React, { useState, useEffect, useCallback, Fragment } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Product from "../../components/product/product";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

const Categories = (props) => {
  const [purchasing, setPurchasing] = useState(false);
  const [active, setActive] = useState(true);

  const dispatch = useDispatch();

  const categoryProducts = useSelector((state) => {
    return state.productCategory.categories;
  });
  const orders = useSelector((state) => state.order.orders);
  console.log("ordersCategorires", orders);
  const error = useSelector((state) => state.productCategory.error);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const token = useSelector((state) => state.auth.token !== null);
  const userId = useSelector((state) => state.auth.userId !== null);

  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onSetAuthRedirectPath = (path) =>
    dispatch(actions.setAuthRedirectPath(path));

  // const onProductAdded = (proName) => dispatch(actions.addIngredient(proName));

  const addCartHandler = (product) => {
    if (isAuthenticated) {
      setPurchasing(true);
      const order = {
        prt: product,
        userId: userId,
      };

      props.onAddProduct(order, token);
    } else {
      onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push("/checkout");
  };

  // const disabledInfo = {
  //   ...ings,
  // };
  // for (let key in disabledInfo) {
  //   disabledInfo[key] = disabledInfo[key] <= 0;
  // }
  let orderSummary = null;
  let products = error ? <p>Products can't be loaded!</p> : <Spinner />;

  if (categoryProducts) {
    console.log("categoryProductsISAVAILBALE", categoryProducts);
    products = (
      <Fragment>
        <Product addToCart={addCartHandler} categories={categoryProducts} />
      </Fragment>
    );
    orderSummary = (
      <OrderSummary
        orders={orders}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }
  // {salad: true, meat: false, ...}
  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {products}
    </Fragment>
  );
};

// export default Categories;

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (order, token) =>
      dispatch(actions.purchaseProduct(order, token)),
  };
};

export default connect(null, mapDispatchToProps)(Categories);
