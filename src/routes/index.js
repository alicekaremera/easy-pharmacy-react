import React from "react";
import Home from "../views/home";


import Pharmacy from '../views/pharmacy';
import Drug from '../views/drug';
import Order from '../views/order';

import SignUp from "../views/signup";

import {Routes, Route} from "react-router-dom";
import AboutUs from "../views/aboutUs";


 const Index=()=>{

    return(
        <Routes>
            <Route exact path ='/' element={<Home/>}></Route>
            <Route element={<Pharmacy/>} path="/pharmacy">

           </Route>
           <Route element={<Drug/>} path="/drug">

           </Route>

           <Route element={<Order/>} path="/order">

           </Route>

            <Route exact path ='/signup' element={<SignUp/>}></Route >
            <Route exact path ='/about' element={<AboutUs/>}></Route>
        </Routes>

        
    );
 }
 export default Index;