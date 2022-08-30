import React, { Fragment } from 'react';
import { Circles } from "react-loader-spinner";
import "./Loader.css"
const Loader = () => {
  return (
    <Fragment>
      <div className="loading">
        <Circles
          className=""
          height="200"
          width="200"
          color="#A10035"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          // wrapperClass="circleLoader"
          visible={true}
        />
      </div>
    </Fragment>
  );
}

export default Loader