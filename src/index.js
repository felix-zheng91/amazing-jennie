import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "@ant-design/pro-components/dist/components.css";
import "./index.scss";
import App from "./App";
import columnConstant from "@/constant/columnConstant";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
