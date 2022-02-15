import React from "react";
import HomeLayout from "../components/homeLayout";
import"./order.css";
const Order=()=>{
    return(
        <HomeLayout>
            <div className="order-container">
                <h2>Thank you for ordering the drug!!!</h2>
                <p>To activate your order, please make your payment</p>
                <a href="../payment" style={{ textDecoration: "none"}}> <h2 style={{  color:"rgb(66,190,250)"}}>Click here to pay</h2></a>
            </div>
    

        </HomeLayout>

    );
}
export default Order;