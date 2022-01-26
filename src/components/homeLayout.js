import React from "react";
import "./homeLayout.css";
// import Header from "./header";
// import Footer from "./footer";



const HomeLayout = ({ children }) => {
  return (
    <div className="home-container" style={{}}>
      {/* <Header /> */}
      <div style={{ minHeight: "100vh",background:"grey" }}>
        {children}
      </div>


      {/* <Footer /> */}
    </div>

  )
}
export default HomeLayout;