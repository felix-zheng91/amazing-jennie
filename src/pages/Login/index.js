import React from "react";
import { Button, Card, Checkbox, Form, Input, message } from "antd";
import logo from "@/assets/logo.png";
import "./index.scss";
import { useStore } from "@/store";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginStore } = useStore();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      await loginStore.getToken({
        username: values.username,
        password: values.password,
      });
      console.log(loginStore.token);
      navigate("/", { replace: true });
      message.success("Login Success");
    } catch (e) {
      message.error(e.response?.data?.message || "Login Failed");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <Card className={"login-container"}>
        <img className={"login-logo"} src={logo} alt={""} />
        {/* 登陆表单 */}
        <Form
          name="basic"
          // labelCol={{
          //   span: 8,
          // }}
          // wrapperCol={{
          //   span: 28,
          // }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                pattern:
                  /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
                message: "用户名！",
              },
            ]}
          >
            <Input placeholder={"请输入用户名"} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
                message: "请输入密码！",
              },
            ]}
          >
            <Input.Password placeholder={"请输入密码"} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            // wrapperCol={{
            //   offset: 8,
            //   span: 16,
            // }}
          >
            <Checkbox>我已阅读并同意【用户协议】和【隐私条款】</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={
              {
                // offset: 8,
                // span: 16,
              }
            }
          >
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default observer(Login);
