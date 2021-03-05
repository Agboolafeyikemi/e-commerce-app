import React, { useState, useEffect, useCallback, Fragment } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Product from "../../components/product/product";
// import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
// import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
// import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
// import axios from "../../axios-orders";

const Categories = (props) => {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const categoryProducts = useSelector((state) => {
    return state.productCategory.categories;
  });
  // const price = useSelector((state) => state.burgerBuilder.totalPrice);
  const error = useSelector((state) => state.productCategory.error);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  // const onIngredientAdded = (ingName) =>
  //   dispatch(actions.addIngredient(ingName));
  // const onIngredientRemoved = (ingName) =>
  //   dispatch(actions.removeIngredient(ingName));
  // const onInitIngredients = useCallback(
  //   () => dispatch(actions.initIngredients()),
  //   [dispatch]
  // );
  // const onInitPurchase = () => dispatch(actions.purchaseInit());
  // const onSetAuthRedirectPath = (path) =>
  //   dispatch(actions.setAuthRedirectPath(path));

  // useEffect(() => {
  //   onInitIngredients();
  // }, [onInitIngredients]);

  // const updatePurchaseState = (ingredients) => {
  //   const sum = Object.keys(ingredients)
  //     .map((igKey) => {
  //       return ingredients[igKey];
  //     })
  //     .reduce((sum, el) => {
  //       return sum + el;
  //     }, 0);
  //   return sum > 0;
  // };

  // const purchaseHandler = () => {
  //   if (isAuthenticated) {
  //     setPurchasing(true);
  //   } else {
  //     onSetAuthRedirectPath("/checkout");
  //     props.history.push("/auth");
  //   }
  // };

  // const purchaseCancelHandler = () => {
  //   setPurchasing(false);
  // };

  // const purchaseContinueHandler = () => {
  //   onInitPurchase();
  //   props.history.push("/checkout");
  // };

  // const disabledInfo = {
  //   ...ings,
  // };
  // for (let key in disabledInfo) {
  //   disabledInfo[key] = disabledInfo[key] <= 0;
  // }
  // let orderSummary = null;
  let products = error ? <p>Products can't be loaded!</p> : <Spinner />;

  if (categoryProducts) {
    console.log(categoryProducts, "\n\n\n\n\n\n\n");
    products = (
      <Fragment>
        <Product categories={categoryProducts} />
        {/* <BuildControls
          ingredientAdded={onIngredientAdded}
          ingredientRemoved={onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(ings)}
          ordered={purchaseHandler}
          isAuth={isAuthenticated}
          price={price}
        /> */}
      </Fragment>
    );
    // orderSummary = (
    //   <OrderSummary
    //     ingredients={ings}
    //     price={price}
    //     purchaseCancelled={purchaseCancelHandler}
    //     purchaseContinued={purchaseContinueHandler}
    //   />
    // );
  }
  // {salad: true, meat: false, ...}
  return (
    <Fragment>
      {/* <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal> */}
      {products}
    </Fragment>
  );
};

export default Categories;
