import React, { useEffect, Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import Categories from "./containers/categories/categories";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index";

// const Checkout = React.lazy(() => {
//   return import("./containers/Checkout/Checkout");
// });

const Orders = React.lazy(() => {
  return import("./containers/Orders/Orders");
});

const Auth = React.lazy(() => {
  return import("./containers/Auth/Auth");
});

const App = (props) => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/" exact component={Categories} />
      <Redirect to="/" />
    </Switch>
  );
  // const tranO = JSON.parse(localStorage.getItem("order"));
  // const orders = tranO.prt;
  console.log("categoryProductAPP\n\n\n\n\n\n", props.categoryProduct);
  console.log("propsAPP\n\n\n\n\n", props);
  const orders = [props.orders];
  const catProducts = [props.categoryProducts];
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        {/* <Route path="/checkout" render={(props) => <Checkout {...props} />} /> */}
        <Route
          path="/orders"
          render={(props) => <Orders {...props} {...catProducts} {...orders} />}
        />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" render={(props) => <Auth {...props} />} />
        <Route path="/" exact component={Categories} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    orders: state.order.orders,
    categoryProducts: state.productCategory.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
    onInitCategories: () => dispatch(actions.initCategories()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
