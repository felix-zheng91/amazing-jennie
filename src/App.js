import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthComponent from "@/components/AuthComponent";
import "./App.css";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "@/utils/history";
import { LoadingOutlined } from "@ant-design/icons";

const DetailData = lazy(() => import("@/pages/DetailData"));
const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const Layout = lazy(() => import("@/pages/Layout"));
const Ad = lazy(() => import("@/pages/Ad"));
const SkuAsin = lazy(() => import("@/pages/SkuAsin"));
const AnalyzeData = lazy(() => import("@/pages/AnalyzeData"));

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
                path={"analyze-data"}
                element={
                  <AuthComponent>
                    <AnalyzeData />
                  </AuthComponent>
                }
              ></Route>
              <Route
                path={"sku-asin"}
                element={
                  <AuthComponent>
                    <SkuAsin />
                  </AuthComponent>
                }
              ></Route>
              <Route
                path={"ad"}
                element={
                  <AuthComponent>
                    <Ad />
                  </AuthComponent>
                }
              ></Route>
              <Route
                path={"detail-data"}
                element={
                  <AuthComponent>
                    <DetailData />
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
