import React from "react";
import"./drug.css";
const Drugdata=({data})=>{
    return(
        // <HomeLayout>

<div className="ourdrug">

            <div className="drugname">

            <h2>{data.name}</h2>

            <p ><div style={{ fontWeight: "bold"}}>Expired date:</div> {data.expiredDate}

                 <br/>

                 <h3><div style={{ fontWeight: "bold"}}>Description:</div>{data.description}</h3>
            </p>

            </div>

            <div className="price">
                <h1>{data.price}</h1>
            </div>

            
            <div className="available">
                <h1>{data.available}</h1>
            </div>

            <div className="action" style={{ marginLeft: "1070px", padding:"5px"}}>
            <a href="/order" style={{ textDecoration: "none"}}><button>{data.action[0]}</button></a>
    <button>{data.action[1]}</button>
</div>

        </div>
        


        // </HomeLayout>

    );
}
export default Drugdata;