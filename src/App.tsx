import { FC } from "react";
import "./App.scss";
import LayoutPage from "@/pages/LayoutPage";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import DetailPage from "@/pages/DetailPage";
import AdDataPage from "@/pages/AdDataPage";
import RelationPage from "@/pages/RelationPage";
import LoginPage from "@/pages/LoginPage";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<LayoutPage />}>
          <Route index element={<DashboardPage />}></Route>
          <Route path={"/detail"} element={<DetailPage />}></Route>
          <Route path={"/ad-detail"} element={<AdDataPage />}></Route>
          <Route path={"/sku-relation"} element={<RelationPage />}></Route>
          <Route path={"/login"} element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
