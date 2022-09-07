import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import Loader from './components/Layout/Loader/Loader';
import NotFound from './components/Layout/NotFound/NotFound';
import "./App.css"
import Home from './components/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Footer from './components/Layout/Footer/Footer';
import About from './components/Layout/About/About';
import Contact from './components/Layout/Contact/Contact';
import Header from './components/Layout/Header/Header';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import LoginSignUp from './components/User/LoginSignUp/LoginSignUp';
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import Products from "./components/Product/Products/Products";
import Search from "./components/Product/Search/Search";
import { useSelector } from 'react-redux';
import store from './store';
import { loadUser } from "./actions/userAction";
import UserOptions from './components/Layout/Header/UserOptions';


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

        <Route path="/load" component={Loader} />
        <Route path="/not" component={NotFound} />
        <Route path="/home" component={Home} />

        <Route path="/foot" component={Footer} />

        <Route path="/dashboard/admin" component={Dashboard} />

        <Route path="/register" component={LoginSignUp} />
      </Switch>
    </Router>
    // <Loader />
  );
}

export default App