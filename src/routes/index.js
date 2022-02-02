import React from "react";
import Home from "../views/home";
import Pharmacy from '../views/pharmacy';
import {Routes, Route} from "react-router-dom";

 const Index=()=>{

    return(
        <Routes>
            <Route exact path ='/' element={<Home/>}></Route>
            <Route element={<Pharmacy/>} path="/pharmacy">

           </Route>
        </Routes>

        
    );
 }
 export default Index;