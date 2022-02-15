import React from "react"
import HomeLayout from "../components/homeLayout";
import "./paymentLogin.css";
import 'antd/dist/antd.css';
import { Input, Select, Button } from 'antd';
const Payment = () => {
    const { Option } = Select;
    return (
        <HomeLayout>
            <div className="payment-div">
                < div className="photo-div">
                    <div className="cover"></div>
                </div>
                <div className="pay-div">
                    <p>ENTER YOUR PAYMENT DETAILS</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className = "info-pay">
                    <Select placeholder="choose type of payment">
                        <Option value="jack">Pay pal</Option>
                        <Option value="lucy">Mobile money</Option>
                        <Option value="tom">Equity</Option>
                    </Select>,
                    <br/>
                    <br/>
                    <Input placeholder=" Amount to pay" />
                    <br/>
                    <br/>
                    <br/>
                    <Input placeholder="Enter phone card number" />
                    <br/>
                    <br/>
                    <div className="Button-div">
                    <Button type="primary" >Submit</Button>
                    </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}
export default Payment;