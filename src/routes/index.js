import React from "react";
import Home from "../views/home";


import Pharmacy from '../views/pharmacy';

import SignUp from "../views/signup";

import {Routes, Route} from "react-router-dom";
import AboutUs from "../views/aboutUs";


 const Index=()=>{

    return(
        <Routes>
            <Route exact path ='/' element={<Home/>}></Route>
            <Route element={<Pharmacy/>} path="/pharmacy">

           </Route>

            <Route exact path ='/signup' element={<SignUp/>}></Route >
            <Route exact path ='/about' element={<AboutUs/>}></Route>
        </Routes>

        
    );
 }
 export default Index;