import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import logo from "../assets/logo.jpg"
import "./header.css"
 const Header=() =>{
<div className="header">
<img src={logo}/>
        <div className="navbar-right">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">pharmacies</a>
         <a href="#">Sign up</a>
            <a href="#">Login</a>
        </div>
        </div>
}
export default Header









