import React from "react";
import Home from "../views/home";
import NormalLoginForm from "../views/login";

import Pharmacy from "../views/pharmacy";
import Drug from "../views/drug";
import Order from "../views/order";

import SignUp from "../views/signup";

import { Routes, Route } from "react-router-dom";

// import { Route, Switch } from 'react-router-dom';
import AboutUs from "../views/aboutUs";

// import Dashlayout from "../components/dashboardlayout";
// import AllPharmacy from "../views/dashboard/medecine";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Medecines from "../pages/Medecines";

const Index = () => {
  
      return(
      <Routes>
        <Route exact path="/login" element={<NormalLoginForm />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path ='/' component={Home}></Route> */}
        <Route element={<Pharmacy />} path="/pharmacy" />

        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>

        {/* <Route element={<Dashlayout/>} path="/dash">
</Route> */}

        {/* <Route element={<AllPharmacy/>} path="/dash/medecine">
</Route> */}

        {/* <Route component={AllPharmacy} path="/dash/medecine">
</Route> */}

        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>

        {/* <Route element={<Dashlayout/>} path="/dash">
</Route> */}

        {/* <Route element={<AllPharmacy/>} path="/dash/medecine">
</Route> */}

        {/* <Route component={AllPharmacy} path="/dash/medecine">
</Route> */}

        <Route element={<Layout />} path="/layout"></Route>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/medecines" element={<Medecines />} />
    </Routes>
  );
};
export default Index;
