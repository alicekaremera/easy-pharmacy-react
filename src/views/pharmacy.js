// import React from "react";
// import HomeLayout from "../components/homeLayout";
// import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faList} from "@fortawesome/free-solid-svg-icons";
// import"./pharmacy.css";
// const Pharmacy=()=>{
//     return(
//         <HomeLayout>
//     <div className="pharmacy-container">
        
//     <h1> <FontAwesomeIcon icon={faList} ></FontAwesomeIcon> &nbsp;&nbsp;Pharmacies List </h1> 
    
//      <div className="list">

// <div className="listitem"> Pharmacy Name </div>

// <div  className="listitem" style={{ marginLeft: "300px"}}>Main Phone</div>

// <div  className="listitem" style={{ marginLeft: "400px"}}>Details</div>

// </div>

// <div className="ourpharmacy">

//             <div className="pharmacyname">

//             <a href="/drug" style={{ textDecoration: "none"}}> <h2>KIPHARMA Pharmacy</h2></a>

//             <p>Address: Kigali, City market

//                  <br/>

//                  <h3>KN 302 ST</h3>

                 

//             </p>

           

//             </div>

//             <div className="phone">
//                 <h1>0788899929</h1>
//             </div>

            
//             <div className="read">
//                 <h1>Read more...</h1>
//             </div>

//         </div>



//         <div className="ourpharmacy">

//             <div className="pharmacyname">

//             <h2>Pharmacy La CONSEIL</h2>

//             <p>Address: Kigali, City market

//                  <br/>

//             <h3>KN 302 ST</h3>

                 

//             </p>

           

//             </div>

//             <div className="phone">
//                 <h1>0788899929</h1>
//             </div>

            
//             <div className="read">
//                 <h1>Read more...</h1>
//             </div>

//         </div>


// <div className="ourpharmacy">

// <div className="pharmacyname">

// <h2>UBUMWE Pharmacy</h2>

// <p>Address: Kigali, City market

//      <br/>

//      <h3>KN 302 ST</h3>

     

// </p>



// </div>

// <div className="phone">
//     <h1>0788899929</h1>
// </div>


// <div className="read">
//     <h1>Read more...</h1>
// </div>

// </div>
        
//     </div>

//         </HomeLayout>

//     );
// }
// export default Pharmacy;



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

<div className="listitem"> Pharmacy Name </div>

<div  className="listitem" style={{ marginLeft: "300px"}}>Main Phone</div>

<div  className="listitem" style={{ marginLeft: "400px"}}>Details</div>

</div>
    {
            allpharmacyData.map((data)=>(<Pharmacydata data={data}/>))
        }
        
        
    </div>

        </HomeLayout>

    );
}
export default Pharmacy;