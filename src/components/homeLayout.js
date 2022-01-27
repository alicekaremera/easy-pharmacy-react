import React from "react";
import "./homeLayout.css";
// import Header from "./header";
 import Footer from "./footer";



const HomeLayout = ({ children }) => {
  return (
    <div className="home-container" >
        <div className="home-container1">
            
      {/* <Header /> */}
      {/* <div style={{ minHeight: "100vh",background:"grey" }}> */}
        {children}
      {/* </div> */}


       <Footer></Footer> 
      </div>
    </div>

  )
}
export default HomeLayout;