import React from "react";
import { Button, Card, Checkbox, Form, Input } from "antd";
import logo from "@/assets/logo.png";
import "./index.scss";
import { useStore } from "@/store";
import { observer } from "mobx-react-lite";

function Login() {
  const { loginStore } = useStore();

  const onFinish = (values) => {
    console.log("Success:", values);
    loginStore.getToken({ mobile: values.mobile, code: values.code });
    console.log(loginStore.token);
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
            name="mobile"
            rules={[
              {
                required: true,
                pattern:
                  /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
                message: "请输入手机号！",
              },
            ]}
          >
            <Input placeholder={"请输入手机号"} />
          </Form.Item>

          <Form.Item
            name="code"
            // rules={[
            //   {
            //     required: true,
            //     pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
            //     message: "请输入验证码！",
            //   },
            // ]}
          >
            <Input placeholder={"请输入验证码"} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            // wrapperCol={{
            //   offset: 8,
            //   span: 16,
            // }}
          >
            <Checkbox>我已阅读并同意【用户协议】和隐【隐私条款】</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={
              {
                // offset: 8,
                // span: 16,
              }
            }
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default observer(Login);
