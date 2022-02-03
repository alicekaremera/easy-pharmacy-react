import React from "react";
import logo from "../assets/logo.jpg"
import "./header.css"
 const Header=() =>{
return (<div className="header">
<img src={logo}/>
        <div className="navbar-right">
            <div className="home-bar">
            <a href="../">Home</a>
            <a href="../about">About us</a>
            <a href="/pharmacy">pharmacies</a>

            </div>
            <div className="sign-up">
               
         <a href="#">Sign up</a>
            <a href="#">Login</a>
            <div className="search-div">
                    <p>search</p>
                    </div>
            </div>
        </div>
        </div>)
}
export default Header









