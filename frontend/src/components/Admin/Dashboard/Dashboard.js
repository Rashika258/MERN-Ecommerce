import { Typography } from '@material-ui/core';
import React from 'react';

import MetaData from '../../Layout/MetaData/MetaData';
import Sidebar from "../Sidebar/Sidebar"
import "./Dashboard.css";



const Dashboard = () => {



  return (
    <div className='dashboard'>
      <MetaData title="Dashboard - Admin Panel" />

      <Sidebar />

      <div className='dashboardContainer'>
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>Total Amount <br /> </p>

          </div>

        </div>


      </div>
   </div>
  )
}

export default Dashboard