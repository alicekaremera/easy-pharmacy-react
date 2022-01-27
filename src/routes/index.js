import React from "react";
import Home from "../views/home";
import signUp from "../views/signup";
import {Routes, Route} from "react-router-dom";


 const Index=()=>{

    return(
        <Routes>
            <Route exact path ='/home' element={<Home/>}></Route>
            <Route exact path ='/signup' element={<signUp/>}></Route >
        </Routes>
    );
 }
 export default Index;