import React from "react";
import"./pharmacy.css";

const Pharmacydata=({data})=>{
    return(
        // <HomeLayout>
    

<div className="ourpharmacy">

            <div className="pharmacyname">

            <a href="/drug" style={{ textDecoration: "none"}}> <h2>{data.name}</h2></a>

            <p>Address: {data.address}

                 <br/>

                 <h3>{data.street}</h3>
            </p>
            </div>

            <div className="phone">
                <h1>{data.phone}</h1>
            </div>
            <div className="read">
                <h1>{data.detail}</h1>
            </div>

        </div>
        
   

        // </HomeLayout>

    );
}
export default Pharmacydata;