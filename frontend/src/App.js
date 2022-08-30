import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import Loader from './components/Layout/Loader/Loader';
import NotFound from './components/Layout/NotFound/NotFound';
import "./App.css"
import Home from './components/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewHeader from './components/Layout/Header/NewHeader';
import Footer from './components/Layout/Footer/Footer';
import About from './components/Layout/About/About';
import Contact from './components/Layout/Contact/Contact';
// import "../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Audio } from 'react-loader-spinner'
// import "../node_modules/react-loader-spinner/dist/loader"
const App = () => {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ["Poppins", "Montserrat", "Lato", "Handlee"],
          },
        });
    })

    return (
      //   <>
      // <Loader />
      //   </>
      <Router>
        {/* <h1>app</h1> */}
        {/* <Loader /> */}
        {/* <NotFound /> */}
        <Switch>
          <Route path="/load" component={Loader} />
          <Route path="/not" component={NotFound} />
          <Route path="/home" component={Home} />
          <Route path="/home1" component={NewHeader} />
          <Route path="/foot" component={Footer} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      // <Loader />
    );
}

export default App