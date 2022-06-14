// 鉴权组件
// 1.判断token存在与否，否则重定向至登录页
// 使用高阶组件

import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

function AuthComponent({ children }) {
  if (getToken()) {
    return <>{children}</>;
  }
  return <Navigate to={"/login"} replace></Navigate>;
}

export default AuthComponent;
