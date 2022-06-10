import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    // 包裹整个Router ,一个应用只使用一次,有HashRouter 和BrowserRouter 两种,后者更常用
    <BrowserRouter>
      {/*定义链接*/}
      <Link to={"/"}>首页</Link>
      <Link to={"/about"}>关于</Link>
      {/*<Link to={"/login"}>登录</Link>*/}
      {/*提供路由表*/}
      <Routes>
        {/*路由匹配信息*/}
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
