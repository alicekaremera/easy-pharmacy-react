import React from "react";
import { Children } from "react/cjs/react.production.min";
import "./homeLayout.css";
  // import Header from "./header";
//  import Footer from "./footer";



const HomeLayout = ({ children }) => {
  return (
    <div className="home-container" >
        <div className="home-container1">
            
       {/* <Header />   */}
      
         {children} 
      


       {/* <Footer />  */}
      </div>
    </div>

  )
}
export default HomeLayout;