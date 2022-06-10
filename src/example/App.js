import React from "react";
import Layout from "./Layout";
import LoginTwo from "./LoginTwo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./Board";
import Article from "./Article";
import NotFound from "./NotFound";

function App() {
  return (
    // 嵌套路由
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          {/* 加index属性的路由将成为默认路由 */}
          <Route index element={<Board />}></Route>
          <Route path={"article"} element={<Article />}></Route>
        </Route>
        <Route path={"/login"} element={<LoginTwo />}></Route>
        {/*各级路由末尾新增404路由*/}
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
