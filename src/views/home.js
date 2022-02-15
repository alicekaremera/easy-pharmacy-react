import React, { useState } from "react";
import JSONDATA from "../assets/constants/drug.json";
import HomeLayout from "../components/homeLayout";
import "../components/homeLayout.css";




const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (


    <HomeLayout>
      <div className="home-container-child">
        <div className="homehome">
          {/* <div className="App">
            <input
              type="text"
              placeholder="Search..."
              onChange={event => {
                setSearchTerm(event.target.value)
              }} />
            {JSONDATA.filter((val) => {
              if (searchTerm === "") {
                return val
              } else if (val.name.toLowerCase.includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map((val, key) => {
              <div className="user" key={key}>
                <p>{val.name}</p>
              </div>
            })}
          </div> */}
          
          <h3>Welcome to Our Pharmacies</h3>
          <h1>We'll Always Make Time </h1>
          <h1>For You </h1>
          <a href="/pharmacy"><button><h2> Get Started </h2></button></a>
        </div>

      </div>
    </HomeLayout>


  )
}

export default Home;