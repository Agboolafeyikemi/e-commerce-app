import React, { useState, useEffect, useCallback, Fragment } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Product from "../../components/product/product";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

const Categories = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const categoryProducts = useSelector((state) => {
    return state.productCategory.categories;
  });

  const orders = useSelector((state) => state.order.orders);

  const deselectCategories = useSelector(
    (state) => state.productCategory.deselectCategories
  );
  const error = useSelector((state) => state.productCategory.error);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const token = useSelector((state) => state.auth.token !== null);
  const userId = useSelector((state) => state.auth.userId !== null);

  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onSetAuthRedirectPath = (path) =>
    dispatch(actions.setAuthRedirectPath(path));

  const onCategorydeselect = (catName) =>
    dispatch(actions.selectCategory(catName));

  const onInitCategories = useCallback(
    () => dispatch(actions.initCategories()),
    [dispatch]
  );

  useEffect(() => {
    onInitCategories();
  }, [onInitCategories]);

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

  let orderSummary = null;
  let products = error ? <p>Products can't be loaded!</p> : <Spinner />;

  if (categoryProducts) {
    products = (
      <Fragment>
        <Product
          addToCart={addCartHandler}
          categories={categoryProducts}
          handleButtonClick={onCategorydeselect}
          deselectCategories={deselectCategories}
        />
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

  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {products}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (order, token) =>
      dispatch(actions.purchaseProduct(order, token)),
  };
};

export default connect(null, mapDispatchToProps)(Categories);
