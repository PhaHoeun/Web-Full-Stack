
import styles from './LoginPage.module.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link } from "react-router-dom";
import { request } from '../../util/request'
import { useState } from 'react';
import { setIsLogin, setToken, setUser, setRefreshToken } from '../../util/service';


const LoginPage = () => {
    const [message, setMessage] = useState();
    const onFinish = async (values) => {

        var param = {
            "username": values.username,
            "password": values.password,
        }
        console.log('Received values of form: ', param);
        //create function 
        const res = await request("user/login", "post", param);
        if (res.message) {
            setMessage(res.message);
            setUser(JSON.stringify(res.user)); //JSON.stringify(res.user) convert jsonObj to jsonString
            setIsLogin("1");
            setToken(res.access_token);
            setRefreshToken(res.refresh_token);
            //if login success route to admin page
            window.location.href = "/admin";

        } else if (res.error) {
            if (res.error.username) {
                setMessage(res.error.username);
            }
            if (res.error.password) {
                setMessage(res.error.password);
            }
        }
    };
    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.loginTxt}>Log In</h1>
            <Form
                name="login"
                initialValues={{ remember: true }}
                style={{ maxWidth: 360 }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a href="">Forgot password</a>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Log in
                    </Button>
                    <div className={styles.registerButton}>
                        <p>Or</p>
                        <Link to="/register">Register</Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginPage;

