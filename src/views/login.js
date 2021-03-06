import React from 'react';
import 'antd/dist/antd.css';
import './login.css';
import HomeLayout from "../components/homeLayout";
import { Form, Input, Button, Checkbox } from 'antd';
import { MailFilled, LockOutlined } from '@ant-design/icons';
import EasyApisService from "../services/easyPharmacyApis"
import { notification } from 'antd';



const NormalLoginForm = () => {
    const onFinish = (values) => {


        console.log(values)
        EasyApisService.signinAccount(values).then((res)=>{
          if(!res){
            return notification.error({
              message:"You need to have account before login",
            });
          }
          if(res.status===200){
            console.log(res.data.data);
            if(res.data.data.role==="admin"){
              localStorage.setItem("userLogedIn", true);
         
            }
            else if(res.data.data.role==="user"){
    
        localStorage.setItem("userLogedIn", true);
      
            } 
            
            if(res.data.data.role==="buyer"){
    
              localStorage.setItem("userLogedIn", true);
          
        
                  }  
          }
    
          
        }
    
        )
    
    








        console.log('Received values of form: ', values);
    };

    return (
        <HomeLayout>
            <div className="login-pg">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                        
                        <h4>LOG IN</h4>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input prefix={<MailFilled className="site-form-item-icon" />} placeholder="email or phone number" type="email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input.Password

                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                            <br /> <br />

                            Or <a href="./signup" style={{color:"rgb(2, 2, 59)", textDecoration:"none"}}>register now!</a>
                        <br /> 
                       <a href="./pharmacies"> <Button type="primary" htmlType="submit" >Log In </Button> </a>
                        <br /> <br />
                        
                    </Form.Item>
                </Form>

                <div className="login-pic">
                    
                </div>
            </div>
        </HomeLayout>
    );
};

// ReactDOM.render(<NormalLoginForm />, document.getElementById('container'));
export default NormalLoginForm
