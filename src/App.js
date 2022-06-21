import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import AuthComponent from "@/components/AuthComponent";
import Layout from "@/pages/Layout";
import "./App.css";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "@/utils/history";

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          <Route
            path={"/"}
            element={
              <AuthComponent>
                <Layout />
              </AuthComponent>
            }
          >
            <Route index element={<Home />}></Route>
            <Route
              path={"article"}
              element={
                <AuthComponent>
                  <Article />
                </AuthComponent>
              }
            ></Route>
            <Route
              path={"publish"}
              element={
                <AuthComponent>
                  <Publish />
                </AuthComponent>
              }
            ></Route>
          </Route>
          <Route path={"/login"} element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
