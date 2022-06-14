import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import AuthComponent from "@/components/AuthComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path={"/"}
            element={
              <AuthComponent>
                <Layout />
              </AuthComponent>
            }
          ></Route>
          <Route path={"/login"} element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
