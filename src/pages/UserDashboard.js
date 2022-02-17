import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import UserDashLayout from "../components/userdashboardlayout";
import "../assets/css/index.css"



const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <UserDashLayout key="1">
      {" "}
      <div>
        <h2 className="page-header">Dashboard</h2>
        <div> <p> Hello User</p> 
        <p>From your account dashboard you can view your <a href="#" style={{ color: "var(--main-color)"}} >orders</a>  and edit your <a href="#"style={{ color: "var(--main-color)"}}> password</a> and <a href="#" style={{ color: "var(--main-color)"}}>account details</a></p>
        
        </div>
          
      </div>
    </UserDashLayout>
  );
};

export default Dashboard;
