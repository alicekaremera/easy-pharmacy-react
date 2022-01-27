import React from "react";
import HomeLayout from "../components/homeLayout";
import "../components/homeLayout.css";

const Home=()=>{

    return(

    
     <HomeLayout>
         <div className= "home-container-child">
         <h3>Welcome to Our Pharmacies</h3>
    <h1>We'll Always Make Time </h1>
      <h1>For You </h1>
   <button><h2> Get Started </h2></button>
    </div>
     </HomeLayout> 
    

    )
}

export default Home;