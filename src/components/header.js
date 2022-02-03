import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import logo from "../assets/logo.jpg"
import "./header.css"
 const Header=() =>{
return (<div className="header">
<img src={logo}/>
        <div className="navbar-right">
            <div className="home-bar">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">pharmacies</a>
            </div>
            <div className="sign-up">
            
         <a href="signup">Sign up</a>
            <a href="#">Login</a>
            <div className="search-div">
                    <p>search</p>
                    </div>
            </div>
        </div>
        </div>)
}
export default Header









