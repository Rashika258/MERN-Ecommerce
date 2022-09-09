import React from "react";
import logo from "../../../images/Flipzon_logo2.png";
import { ReactNavbar } from "overlay-navbar";
import { FaUserCog, FaShoppingCart, FaSearch } from "react-icons/fa";


import "./Header.css"

const options = {
  burgerColorHover: "#850E35",
  logo,
  logoWidth: "20vmax",
  navColor1: "#FFF5E4",
  logoHoverSize: "10px",
  logoHoverColor: "#850E35",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#850E35",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#850E35",
  searchIconColorHover: "#850E35",
  cartIconColorHover: "#850E35",
  cartIconMargin: "1vmax",
  searchIcon: true,
  profileIcon: true,
  cartIcon: true,
  CartIconElement: FaShoppingCart,
  ProfileIconElement: FaUserCog,
  SearchIconElement: FaSearch,
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
