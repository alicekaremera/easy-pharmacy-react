import React from "react";
// import Homelayout from "../components/homelayout";
import"./pharmacy.css";
const Pharmacy=()=>{
    return(
        // <Homelayout>
    <div className="pharmacy-container">
        
     <h1>Pharmacies List</h1>
     <div className="list">

<div className="listitem">Pharmacy Name</div>

<div  className="listitem" style={{ marginLeft: "300px"}}>Main Phone</div>

<div  className="listitem" style={{ marginLeft: "400px"}}>Details</div>

</div>

<div className="ourpharmacy">

            <div className="pharmacyname">

            <h2>KIPHARMA Pharmacy</h2>

            <p>Address: Kigali, City market

                 <br/>

                 <h3>KN 302 ST</h3>

                 

            </p>

           

            </div>

            <div className="phone">
                <h1>0788899929</h1>
            </div>

            
            <div className="read">
                <h1>Read more...</h1>
            </div>

        </div>



        <div className="ourpharmacy">

            <div className="pharmacyname">

            <h2>Pharmacy La CONSEIL</h2>

            <p>Address: Kigali, City market

                 <br/>

            <h3>KN 302 ST</h3>

                 

            </p>

           

            </div>

            <div className="phone">
                <h1>0788899929</h1>
            </div>

            
            <div className="read">
                <h1>Read more...</h1>
            </div>

        </div>


<div className="ourpharmacy">

<div className="pharmacyname">

<h2>UBUMWE Pharmacy</h2>

<p>Address: Kigali, City market

     <br/>

     <h3>KN 302 ST</h3>

     

</p>



</div>

<div className="phone">
    <h1>0788899929</h1>
</div>


<div className="read">
    <h1>Read more...</h1>
</div>

</div>
        
    </div>

        // </Homelayout>

    );
}
export default Pharmacy;