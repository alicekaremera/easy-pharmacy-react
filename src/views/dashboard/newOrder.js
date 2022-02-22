import React from "react";
// import DashLayout from "../../components/dashboardlayout.js";
import {Form,Input,DatePicker,Button,Space,InputNumber} from "antd";
const NewOrder =()=>{
    const onFinish=(values)=>{
console.log (values);
    }
    return(
        // <DashLayout>
        <Form onFinish={onFinish}>
<Form.Item
name="title"
label="Title"
rules= {[{required:true}]}
>
<Input/>
     </Form.Item>
     <Form.Item
name="description"
label="Description"
rules= {[{required:false}]}
>
<Input.TextArea/>
     </Form.Item>
     <Space>
     <Form.Item
name="dateScheduled"
label="Date scheduled"
rules= {[{required:true}]}
>
<DatePicker />
     </Form.Item>
     <Form.Item
name="dueDate"
label="Due-to-date"
rules= {[{required:true}]}
>
<DatePicker />
     </Form.Item>
     <Form.Item
name="price"
label="Price ($)"
rules= {[{required:true}]}
>
<InputNumber />
     </Form.Item>

     <Form.Item
name="seats"
label="Seats"
rules= {[{required:true}]}
>
<InputNumber />
     </Form.Item>
     </Space>
     <Form.Item
name="tripDescription"
label="About Trip"
rules= {[{required:true}]}
>
<Input.TextArea/>
     </Form.Item>
        <Button htmlType="submit" type="primary"> Register Tour</Button>
        </Form>
        // </DashLayout> 
    )
}
 export default NewOrder;