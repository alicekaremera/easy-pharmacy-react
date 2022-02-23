import React from "react";
import Home from "../views/home";
import NormalLoginForm from "../views/login";

import Pharmacy from "../views/pharmacy";
import Drug from "../views/drug";
// import Order from "../views/order";

import SignUp from "../views/signup";

import { Routes , Route,useLocation } from "react-router-dom"; 
import AboutUs from "../views/aboutUs";




import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Medecines from "../pages/Medecines";
import UserDashboard from "../pages/UserDashboard";
import OrderDash from "../pages/Order";
import UserOrder from "../pages/UserOrder";

const Index = () => {
  
      return(
      <Routes>
        <Route exact path="/login" element={<NormalLoginForm />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        
        
        <Route element={<Pharmacy />} path="/pharmacy" />

        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/aboutUs" element={<AboutUs />}></Route>

      

        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>

        

        <Route element={<Layout />} path="/layout"></Route>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/drug" element={<Drug />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/medecines" element={<Medecines />} />
      <Route path="/userdash" element={<UserDashboard />} />
      <Route path="/order" element={<OrderDash />} />
      <Route path="/userorder" element={<UserOrder />} />
    </Routes>
  );
};
export default Index;
