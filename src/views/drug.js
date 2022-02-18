import React from "react";
import HomeLayout from "../components/homeLayout";
import alldrugData from "../assets/constants/drug.json";
import Drugdata from "../components/drug";
import"../components/drug.css";

const Drug=({data})=>{
    return(
        <HomeLayout>
    <div className="drug-container">
        
     <h1>KIPHARMA Pharmacy</h1>
     <div className="list1">

<div className="listitem1" style={{ marginLeft: "50px"}}>Drug Name</div>

<div className="listitem1" style={{ marginLeft: "100px"}}>Expired date</div>

<div className="listitem1" style={{ marginLeft: "100px"}}>Description</div>

<div  className="listitem1" style={{ marginLeft: "150px"}}>Price</div>

<div  className="listitem1" style={{ marginLeft: "100px"}}>Available Drug</div>

<div  className="listitem1" style={{ marginLeft: "100px"}}>Action</div>

</div>

{
            alldrugData.map((data)=>(<Drugdata data={data}/>))
        }
        
        
    </div>

        </HomeLayout>

    );
}
export default Drug;