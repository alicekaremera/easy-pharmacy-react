import React from "react";
 import "./signup.css";
import HomeLayout from "../components/homeLayout";
 import 'antd/dist/antd.css'
import { Form, Input, Button,Select,} from 'antd';


const Signup = () => {
  
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    const {Option}= Select;

  return (

    <HomeLayout>

     

      <div className="background-form">
      <div className="bg-photo">
   
       <div className="bg-form">
        </div>
    <div className="hd-form">
     <div className="hd-name"> <h2> Register here!! </h2> </div>  
    
    
      <Form
     
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      
    >
      
      <Form.Item

        label="firstName"
        name="firstName"
        rules={[{ required: true, message: 'Please input your username!' }]}
        style={{width:"370px",height:"40px",marginLeft:"70px", color:"white"}}>
          
      
        <Input />
      </Form.Item>
      <Form.Item
        label="lastName"
        name="lastName"
        rules={[{ required: true, message: 'Please input your username!' }]}
        style={{width:"370px",height:"40px",marginLeft:"70px",}}>
    
        <Input />
      </Form.Item>
     
      <Form.Item
        label="phone"
        name="number"
        rules={[{ required: true, message: 'Please input your username!' }]}
        style={{width:"370px",height:"40px",marginLeft:"70px",}}>
      
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
        style={{width:"370px",height:"40px",marginLeft:"70px",}}>
      
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        style={{width:"370px",height:"40px",marginLeft:"70px",}}>
      
        <Input />

        
      </Form.Item>
      

<Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
        
      >
        <Select 
        style={{width:"100px",height:"40px",marginLeft:"60px"}}
         
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
          
        </Select>
      </Form.Item>



      <Form.Item
        name="role"
        label="role"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
         style={{width:"100px",height:"40px",marginLeft:"60px"}}
          placeholder="Select a option and change input text above"
          // onChange={onGenderChange}
          // allowClear
        >
          <Option value="user">user</Option>
          <Option value="pharmacy-admin">pharmacy-admin</Option>
          
        </Select>
      </Form.Item>
    
     
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
              <Button type="primary" htmlType="submit" style={{width:"70px",height:"40px",marginLeft:"70px",marginTop:"5px"}}>
          Submit
        </Button>
      </Form.Item>
    </Form>  

    

   
</div>  
</div>
</div> 

    </HomeLayout>
  );
}
export default Signup;