import React, { Fragment, useEffect } from "react";
import { BsFillMouse2Fill } from "react-icons/bs";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../Layout/MetaData/MetaData";


const Home = () => {
 

  return (
    <Fragment>
      <MetaData title="ECOMMERCE" />
      <div className="home">
        <div className="banner">
          <p>Welcome to FLIPZON</p>
          <h1>Find Amazing Products Below</h1>

          <a href="#container">
            <button>
            Scroll   &nbsp; &nbsp; <BsFillMouse2Fill className="btnIcon" size={22} />
            </button>
          </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container"></div>
      </div>
    </Fragment>
  );
};

export default Home;
