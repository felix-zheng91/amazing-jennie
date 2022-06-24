import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthComponent from "@/components/AuthComponent";
import "./App.css";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "@/utils/history";
import { LoadingOutlined } from "@ant-design/icons";

const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const Layout = lazy(() => import("@/pages/Layout"));
const Publish = lazy(() => import("@/pages/Publish"));
const Article = lazy(() => import("@/pages/Article"));

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Suspense
          fallback={
            <div style={{ textAlign: "center", marginTop: 200 }}>
              <LoadingOutlined style={{ fontSize: 64 }} />
            </div>
          }
        >
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
        </Suspense>
      </div>
    </HistoryRouter>
  );
}

export default App;
