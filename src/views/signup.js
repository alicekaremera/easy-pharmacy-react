

import React from "react";
import "./signup.css";
import HomeLayout from "../components/homeLayout";
import 'antd/dist/antd.css';
import { Form, Input, Button, Select, notification } from 'antd';
import EasyApisService from "../services/easyPharmacyApis"
import  { useState } from "react";
const Signup = () => {
  const [isUserPharmacy, setIsUserPharmacy] = useState(false);
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
                  label="Firstname"
                  name="firstname"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  style={{
                    width: "370px",
                    height: "40px",
                    marginLeft: "50px",
                    color: "white",
                  }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Lastname"
                  name="lastname"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  style={{ width: "370px", height: "40px", marginLeft: "50px" }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  style={{ width: "370px", height: "40px", marginLeft: "50px" }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  style={{ width: "370px", height: "40px", marginLeft: "50px" }}
                >
                  <Input />
                </Form.Item>
<Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                style={{ width: "370px", height: "40px", marginLeft: "50px", }}>
                <Input.Password />
                </Form.Item>
<Form.Item
  label="Age"
  name="age"
  rules={[{ required: true, message: 'Please input your username!' }]}
  style={{ width: "370px", height: "40px", marginLeft: "50px", }}>
  <Input />
</Form.Item>
<Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    { required: true, message: "Please input your adress!" },
                  ]}
                  style={{ width: "370px", height: "40px", marginLeft: "50px" }}
                >
                  <Input />
                </Form.Item>
                {isUserPharmacy ? (
                  <>
                    <Form.Item
                      label="Pharmacy-name"
                      name="pharmacyName"
                      rules={[
                        { required: true, message: " pharmacy-name is required" },
                      ]}
                      style={{ width: "370px", height: "40px", marginLeft: "50px" }}
                    >
                      <Input
                        style={{ width: 160 }}
                        placeholder="Please input"
                      />
                    </Form.Item>
                    <Form.Item
                      label="Tin-number"
                      name="TinNumber"
                      rules={[
                        { required: true, message: "tin nymber is required" },
                      ]}
                    >
                      <Input
                        style={{ width:"160" , marginLeft: "50px" }}
                        placeholder="Please input"
                      />
                    </Form.Item>
                    <Form.Item label=" Pharmacy-Address">
                <Input.Group compact>
                  <Form.Item
                    name={['pharmacyAddress', 'province']}
                    style={{ width: "370px", height: "40px", marginLeft: "50px" }}
                    rules={[{ required: true, message: 'address is required' }]}
                  >
                    <Select placeholder="Select province" style={{ width: '170px' }}>
                      <Option value="North-province">North-province</Option>
                      <Option value="South-province">South-province</Option>
                      <Option value="East-province">East-province</Option>
                      <Option value="WEST-PROVINCE">WEST-PROVINCE</Option>
                      <Option value="KIGALI-CITY">KIGALI-CITY</Option>
                    </Select>
                  </Form.Item>
                  
                </Input.Group>
              </Form.Item>
                  </>
                ) : (
                  <></>
                )}
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
                    style={{
                      width: "250px",
                      height: "40px",
                      marginLeft: "80px",
                    }}
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
                    style={{
                      width: "250px",
                      height: "40px",
                      marginLeft: "80px",
                    }}
                    placeholder="Select a option and change input text above"
                    onChange={(value) => {
                      if (value == "pharmacyadmin") {
                        setIsUserPharmacy(true);
                      }
                      else{
                        setIsUserPharmacy(false)
                      }
                    }}
                    // allowClear
                  >
                    <Option value="admin">admin</Option>
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















