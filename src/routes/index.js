import React from "react";
import Home from "../views/home";
import Signup from "../views/signup";
import {Routes, Route} from "react-router-dom";


 const Index=()=>{

    return(
        <Routes>
            <Route exact path ='/home' element={<Home/>}></Route>
            <Route exact path ='/signup' element={<Signup/>}></Route >
        </Routes>
    );
 }
 export default Index;