import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // 跳转
  const navigate = useNavigate();

  function login() {
    // 调用跳转函数,使用replace 参数防止后退
    // navigate("/about?id=111", { replace: true });
    navigate("/about/111", { replace: true });
  }
  return (
    <div>
      login<button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
