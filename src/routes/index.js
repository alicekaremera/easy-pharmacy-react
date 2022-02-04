import React from "react";
import Home from "../views/home";
import SignUp from "../views/signup";
import {Routes, Route} from "react-router-dom";
import AboutUs from "../views/aboutus";
import Payment from "../views/paymentLogin";


 const Index=()=>{

    return(
        <Routes>
            <Route exact path ='/home' element={<Home/>}></Route>
            <Route exact path ='/signup' element={<SignUp/>}></Route >
            <Route exact path ='/about' element={<AboutUs/>}></Route>
            <Route exact path ='/payment' element={<Payment/>}></Route>
        </Routes>
    );
 }
 export default Index;