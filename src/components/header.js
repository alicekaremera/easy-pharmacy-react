import React from "react";
import logo from "../assets/logo.jpg"
import "./header.css"
const Header = () => {
        return (<div className="header">
                <img src={logo}  style={{width:"20%" }}/>
                <div className="navbar-right">
                        <div className="home-bar">
                                <a href="../">Home</a>
                                <a href="../about">About us</a>
                                <a href="/login">Pharmacies</a>
                        </div>
                        <div className="sign-up">
                                <a href="/signup">Sign up</a>
                                <a href="/login">Login</a>
                                <div className="search-div">
                                        <p>search</p >
                                </div>
                        </div>
                </div>
        </div>)
}
export default Header