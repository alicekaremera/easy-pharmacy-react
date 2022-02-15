import React from "react";
import "./signup.css";
import HomeLayout from "../components/homeLayout";
import 'antd/dist/antd.css';
import { Form, Input, Button, Select, notification } from 'antd';
import EasyApisService from "../services/easyPharmacyApis"


const Signup = () => {



  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const { Option } = Select;
  const onFinish = (values) => {
    console.log('Received values of form', values);
    EasyApisService.createAccount(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" })
      }
      if (!res.status === 200) {
        return notification.success({ message: "your account has been created successfully" })
      }
      else {
        return notification.success({ message: !res.data.error ? res.data.message : res.data.error })
      }
    })
  };

  return (

    <HomeLayout>



      <div className="background-form">
        <div className="photo"> 
        </div>
          <div className="hd-form">
            <div className="hd-name"> 
            <h2> REGISTER HERE </h2> 
            </div>


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
                style={{ width: "370px", height: "40px", marginLeft: "70px", color: "white" }}>


                <Input />
              </Form.Item>
              <Form.Item
                label="lastName"
                name="lastName"
                rules={[{ required: true, message: 'Please input your username!' }]}
                style={{ width: "370px", height: "40px", marginLeft: "70px", }}>

                <Input />
              </Form.Item>

              <Form.Item
                label="phone"
                name="phone"
                rules={[{ required: true, message: 'Please input your username!' }]}
                style={{ width: "370px", height: "40px", marginLeft: "70px", }}>

                <Input />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please input your username!' }]}
                style={{ width: "370px", height: "40px", marginLeft: "70px", }}>

                <Input />
              </Form.Item>

              <Form.Item
                label="Age"
                name="age"
                rules={[{ required: true, message: 'Please input your username!' }]}
                style={{ width: "370px", height: "40px", marginLeft: "70px", }}>

                <Input />
              </Form.Item>
              <Form.Item
                label="email"
                name="email"
                type="email"
                rules={[{ required: true, message: 'Please input your username!' }]}
                style={{ width: "370px", height: "40px", marginLeft: "70px", }}>

                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                style={{ width: "370px", height: "40px", marginLeft: "70px", }}>

                <Input.Password />


              </Form.Item>


              <Form.Item
                name="gender"
                label="gender"
                rules={[
                  {
                    required: true,
                  },
                  
                ]}
                style={{ width: "370px", height: "40px", marginLeft: "70px", }}

              >
                <Select
                  style={{ width: "100px", height: "40px", marginLeft: "5px" }}

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
                style={{ width: "370px", height: "40px", marginLeft: "70px", }}
              >
                <Select
                  style={{ width: "100px", height: "40px", marginLeft: "5px" }}
                  placeholder="Select a option and change input text above"
                // onChange={onGenderChange}
                // allowClear
                >
                  <Option value="user">user</Option>
                  <Option value="pharmacyadmin">pharmacyadmin</Option>

                </Select>
              </Form.Item>


              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" style={{ width: "160px", height: "40px", marginLeft: "130px", marginTop: "59px" }}>
                  Submit
                </Button>
              </Form.Item>
            </Form>




          </div>
        </div>

    </HomeLayout>
  );
}
export default Signup;