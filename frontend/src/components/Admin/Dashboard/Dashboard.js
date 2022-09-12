// import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Doughnut, Line } from "react-chartjs-2";

import { getAllOrders } from '../../../actions/orderAction';
import { getAdminProduct } from '../../../actions/productAction';
import { getAllUsers } from '../../../actions/userAction';

import MetaData from '../../Layout/MetaData/MetaData';
import Sidebar from "../Sidebar/Sidebar";


import "./Dashboard.css";



const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["#850E35"],
        hoverBackgroundColor: ["#EE6983"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#D36B00", "#42032C"],
        hoverBackgroundColor: ["#224B0C", "#AC4425"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      <MetaData title="Flipzon - Admin Dashboard" />
      <Sidebar />

      <div className="dashboardContainer">
        <h1>Admin Dashboard</h1>

        <div className="dashboardSummary">
          <div>
            <p>Total Amount - ₹{totalAmount}</p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Products</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
       <h1>Amount Earned</h1>
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <h1>Total Stock</h1>
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard