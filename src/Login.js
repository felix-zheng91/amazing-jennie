import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // 跳转
  const navigate = useNavigate();

  function login() {
    // 调用跳转函数
    navigate("/", { replace: true });
  }
  return (
    <div>
      login<button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
