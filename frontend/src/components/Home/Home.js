import React, { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { BsFillMouse2Fill } from "react-icons/bs";

import "./Home.css";

import { clearErrors, getProduct } from "../../actions//productAction";

import ProductCard from "./ProductCard.js";
import MetaData from "../Layout/MetaData/MetaData";
import Loader from "../Layout/Loader/Loader";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Flipzon" />
          <div className="home">
            <div className="banner">
              <p>Welcome to FLIPZON</p>
              <h1>Find Amazing Products Below</h1>

              <a href="#container">
                <button>
                  Scroll
                  <BsFillMouse2Fill className="btnIcon" size={32} />
                </button>
              </a>
            </div>

            <h2 className="homeHeading">Featured Products</h2>

              <div className="container" id="container">
                {/* {
                  console.log("Products ",products)
                } */}

              {products &&
                products.map((p) => (
                  <ProductCard key={p._id} product={p} />
                ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
