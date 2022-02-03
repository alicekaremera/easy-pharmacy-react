import React from "react";
import HomeLayout from "../components/homeLayout";
import"./drug.css";
const Drug=()=>{
    return(
        <HomeLayout>
    <div className="drug-container">
        
     <h1>KIPHARMA Pharmacy</h1>
     <div className="list1">

<div className="listitem1">Drug Name</div>

<div  className="listitem1" style={{ marginLeft: "250px"}}>Price</div>

<div  className="listitem1" style={{ marginLeft: "250px"}}>Available Drug</div>
<div  className="listitem1" style={{ marginLeft: "300px"}}>Action</div>

</div>

<div className="ourdrug">

            <div className="drugname">

            <h2>KININI</h2>

            <p ><div style={{ fontWeight: "bold"}}>Expired date:</div> 13/2/2030

                 <br/>

                 <h3><div style={{ fontWeight: "bold"}}>Description:</div> skjdkljlskjln scjknjchdjlhnsl</h3>

                 

            </p>

           

            </div>

            <div className="price">
                <h1>300 frw</h1>
            </div>

            
            <div className="available">
                <h1>50</h1>
            </div>

            <div className="action" style={{ marginLeft: "1070px", padding:"5px"}}>
            <a href="/order" style={{ textDecoration: "none"}}><button>Order</button></a>
    <button>Read</button>
</div>

        </div>



        <div className="ourdrug">

            <div className="drugname">

            <h2>Chloropheneramine</h2>

            <p><div style={{ fontWeight: "bold"}}>Expired date:</div> 13/2/2030

                 <br/>

            <h3><div style={{ fontWeight: "bold"}}>Description:</div> skjdkljlskjln scjknjchdjlhnsl</h3>

                 

            </p>

           

            </div>

            <div className="price">
                <h1>300 frw</h1>
            </div>

            
            <div className="available">
                <h1>200</h1>
            </div>

            <div className="action" style={{ marginLeft: "1070px", padding:"5px"}}>
            <a href="/order" style={{ textDecoration: "none"}}><button>Order</button></a>
    <button>Read</button>
</div>

        </div>


<div className="ourdrug">

<div className="drugname">

<h2>Parastamol</h2>

<p><div style={{ fontWeight: "bold"}}>Expired date:</div> 13/2/2030

     <br/>

     <h3><div style={{ fontWeight: "bold"}}>Description:</div> skjdkljlskjln scjknjchdjlhnsl</h3>

     

</p>



</div>

<div className="price">
    <h1>300 frw</h1>
</div>


<div className="available">
    <h1>100</h1>
</div>

<div className="action" style={{ marginLeft: "1070px", padding:"5px"}}>
<a href="/order" style={{ textDecoration: "none"}}><button>Order</button></a>
    <button>Read</button>
</div>

</div>
        
    </div>

        </HomeLayout>

    );
}
export default Drug;