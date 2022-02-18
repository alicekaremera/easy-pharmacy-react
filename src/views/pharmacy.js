import React from "react";
import HomeLayout from "../components/homeLayout";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";
import allpharmacyData from "../assets/constants/pharmacy.json";
import Pharmacydata from "../components/pharmacy";
import"../components/pharmacy.css";
const Pharmacy=({data})=>{
    return(
        <HomeLayout>
    <div className="pharmacy-container">

    <h1> <FontAwesomeIcon icon={faList} ></FontAwesomeIcon> &nbsp;&nbsp;Pharmacies List </h1> 
    
    <div className="list">

<div className="listitem" style={{ marginLeft: "50px"}}> Pharmacy Name </div>

<div className="listitem" style={{ marginLeft: "100px"}}> Address </div>

<div className="listitem" style={{ marginLeft: "150px"}}> Street </div>

<div  className="listitem" style={{ marginLeft: "100px"}}>Main Phone</div>

<div  className="listitem" style={{ marginLeft: "100px"}}>Details</div>

</div>
    {
            allpharmacyData.map((data)=>(<Pharmacydata data={data}/>))
        }
        
        
    </div>

        </HomeLayout>

    );
}
export default Pharmacy;