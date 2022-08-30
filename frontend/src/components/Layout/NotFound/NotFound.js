import React from 'react';
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import NotFoundImg from "../../../images/404.svg"

const NotFound = () => {
  return (
    <div className="pageNotFound">
      <div className="insideDiv">
              <ErrorIcon />
              <img src={NotFoundImg} alt="" />
        <Typography>Page Not Found </Typography>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default NotFound