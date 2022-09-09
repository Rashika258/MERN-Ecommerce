import React, { Fragment } from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>For Android and IOS mobile phone</p>

          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" />
        </div>

        <div className="midFooter">
          <h1>Flipzon</h1>
          <p>High Quality is our first priority</p>

          <p>
            Copyrights 2022 &copy; <span>Rashika Suresh 💟 </span>{" "}
          </p>
        </div>

        <div className="rightFooter">
          <h4>FOLLOW US</h4>
          <a href="http://instagram.com/">Instagram</a>
          <a href="http://youtube.com/">Youtube</a>
          <a href="http://instagram.com/">Facebook</a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
