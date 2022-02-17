import React from "react";
import Home from "../views/home";
import NormalLoginForm from "../views/login";

import Pharmacy from "../views/pharmacy";
import Drug from "../views/drug";
import Order from "../views/order";

import SignUp from "../views/signup";

import { Routes , Route,useLocation } from "react-router-dom"; 
import AboutUs from "../views/aboutus";
import Payment from "../views/paymentLogin";


import AllUsers from "../components/TableGetAllUsers";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Medecines from "../pages/Medecines";

const Index = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<NormalLoginForm />}></Route>
      <Route exact path="/" element={<Home />}></Route>
      {/* <Route exact path ='/' component={Home}></Route> */}
      <Route element={<Pharmacy />} path="/pharmacy"></Route>
      <Route element={<Drug />} path="/drug"></Route>

      <Route element={<Order />} path="/order"></Route>

      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/about" element={<AboutUs />}></Route>

      {/* <Route element={<Dashlayout/>} path="/dash">
</Route> */}

      {/* <Route element={<AllPharmacy/>} path="/dash/medecine">
</Route> */}

      {/* <Route component={AllPharmacy} path="/dash/medecine">
</Route> */}

      <Route element={<Layout />} path="/layout"></Route>

      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/customers" element={<Customers />} />
      <Route path="/medecines" element={<Medecines />} />
    </Routes>
  );
};
export default Index;
