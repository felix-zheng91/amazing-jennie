import { Layout, Menu, Popconfirm } from "antd";
import {
  DiffOutlined,
  EditOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "@/store";
import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import axios from "axios";

const { Header, Sider, Footer } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const menuItems = [
  getItem(<Link to={"/"}>首页</Link>, "/", <HomeOutlined />),
  getItem(
    <Link to={"/analyze-data"}>Analyze Data</Link>,
    "/analyze-data",
    <DiffOutlined />
  ),
  getItem(
    <Link to={"/sku-asin"}>ASIN 管理</Link>,
    "/sku-asin",
    <DiffOutlined />
  ),
  getItem(<Link to={"/ad"}>AD 管理</Link>, "/ad", <EditOutlined />),
  getItem(
    <Link to={"/detail-data"}>DetailData 管理</Link>,
    "/detail-data",
    <EditOutlined />
  ),
];

const GeekLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [hitokoto, setHitokoto] = useState({ hitokoto: ":D 获取中..." });

  useEffect(() => {
    axios
      .get("https://v1.hitokoto.cn?c=i")
      .then(({ data }) => {
        setHitokoto(data);
      })
      .catch(console.error);
    return () => {};
  }, []);

  const [collapsed, setCollapsed] = useState(false);

  const { loginStore } = useStore();
  const logout = () => {
    loginStore.logout();
    navigate("/login");
  };
  return (
    <Layout>
      <Sider
        width={200}
        className={"site-layout-background"}
        collapsible
        collapsed={collapsed}
        theme={"light"}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          items={menuItems}
          mode={"inline"}
          theme={"light"}
          defaultSelectedKeys={pathname}
          selectedKeys={pathname}
          style={{ height: "100%", borderRight: 0 }}
        ></Menu>
      </Sider>
      <Layout>
        <Header className={"header"}>
          <div className="logo"></div>
          <div className="user-info">
            <a
              href={`https://hitokoto.cn/?uuid=${hitokoto.uuid}`}
              className="hitokoto_text"
            >
              {hitokoto.hitokoto} {hitokoto.from ? ` - ${hitokoto.from}` : null}
              {hitokoto.from_who ? ` - ${hitokoto.from_who}` : null}
            </a>
            {/*<span className="username">{userStore.userInfo.name}</span>*/}
            <span className="user-logout">
              <Popconfirm
                title={"确认退出?"}
                onConfirm={logout}
                okText={"退出"}
                cancelText={"取消"}
              >
                <LogoutOutlined /> 退出
              </Popconfirm>
            </span>
          </div>
        </Header>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet></Outlet>
        </Layout>
      </Layout>
    </Layout>
  );
};

// 使用 mobx 的组件必须 observer 否则无法响应数据变化
export default observer(GeekLayout);
