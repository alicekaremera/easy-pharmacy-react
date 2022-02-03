import React from "react";
import Home from "../views/home";
import NormalLoginForm from "../views/login";
import {Routes, Route} from "react-router-dom";

 const Index=()=>{

    return(
        <Routes>
            <Route exact path ='/home' element={<Home/>}></Route>
            <Route exact path ='/login' element={<NormalLoginForm />}></Route>
        </Routes>
    );
 }
 export default Index;