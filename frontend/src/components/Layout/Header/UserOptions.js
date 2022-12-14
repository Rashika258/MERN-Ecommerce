import React, { Fragment, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {FaClipboardList} from "react-icons/fa";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Header.css";
import { logout } from "../../../actions/userAction";
import Profile from "../../../images/Profile.png";


const UserOptions = ({ user }) => {

    function dashboard() {
      history.push("/admin/dashboard");
    }

    function orders() {
      history.push("/orders");
    }
    function account() {
      history.push("/account");
    }
    function cart() {
      history.push("/cart");
    }
    function logoutUser() {
      dispatch(logout());
      alert.success("Logout Successfully");
    }

  const { cartItems } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();

  const options = [
    {
      icon: <FaClipboardList style={{ width: "30px", height: "30px" }} />,
      name: "Orders",
      func: orders,
    },
    {
      icon: <PersonIcon style={{ width: "30px", height: "30px" }} />,
      name: "Profile",
      func: account,
    },
    {
      icon: (
        <ShoppingCartIcon
          style={{
            width: "30px",
            height: "30px",
            color: cartItems.length > 0 ? "#A10030" : "unset",
          }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    {
      icon: <ExitToAppIcon style={{ width: "30px", height: "30px" }} />,
      name: "Logout",
      func: logoutUser,
    },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon style={{ width: "30px", height: "30px" }} />,
      name: "Dashboard",
      func: dashboard,
    });
  }



  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : Profile}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
