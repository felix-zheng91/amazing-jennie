import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import {
  ConfigProvider,
  createIntl,
  zhCNIntl,
} from "@ant-design/pro-components";
import "moment/dist/locale/zh-cn.js";

const zhCN = createIntl("zhCN", zhCNIntl);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        value={{
          intl: zhCN,
          valueTypeMap: {},
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
