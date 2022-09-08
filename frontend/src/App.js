import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { useSelector } from "react-redux";


import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import store from "./store";
import { loadUser } from "./actions/userAction";

import ProtectedRoute from "./components/Route/ProtectedRoute";

import Home from "./components/Home/Home";

// Layout components
import Footer from "./components/Layout/Footer/Footer";
import About from "./components/Layout/About/About";
import Contact from "./components/Layout/Contact/Contact";
import Header from "./components/Layout/Header/Header";
import NotFound from "./components/Layout/NotFound/NotFound";
import UserOptions from "./components/Layout/Header/UserOptions";

// user components
import LoginSignUp from "./components/User/LoginSignUp/LoginSignUp";
import Profile from "./components/User/Profile/Profile";
import UpdateProfile from "./components/User/UpdateProfile/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword/UpdatePassword";
import ResetPassword from "./components/User/ResetPassword/ResetPassword";
import ForgotPassword from "./components/User/ForgotPassword/ForgotPassword";



// product comp
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import Products from "./components/Product/Products/Products";
import Search from "./components/Product/Search/Search";


// cart comp
import Cart from "./components/Cart/Cart/Cart";
import Shipping from "./components/Cart/Shipping/Shipping";
import OrderSuccess from "./components/Cart/OrderSuccess/OrderSuccess";
import ConfirmOrder from "./components/Cart/ConfirmOrder/ConfirmOrder";


// order comp
import MyOrders from "./components/Order/MyOrders/MyOrders";
import OrderDetails from "./components/Order/OrderDetails/OrderDetails";


// admin comp
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import ProductList from "./components/Admin/ProductList/ProductList";
import NewProduct from "./components/Admin/NewProduct/NewProduct";
import UpdateProduct from "./components/Admin/UpdateProduct/UpdateProduct";
import OrderList from "./components/Admin/OrderList/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder/ProcessOrder";
import UsersList from "./components/Admin/UsersList/UsersList";
import UpdateUser from "./components/Admin/UpdateUser/UpdateUser";
import ProductReviews from "./components/Admin/ProductReviews/ProductReviews";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Montserrat", "Lato", "Handlee"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  // The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/product/:id" component={ProductDetails} />

        <Route exact path="/products" component={Products} />

        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />

        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Switch>

      <Footer />
    </Router>
   
  );
};

export default App;
