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
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const { Header, Sider } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const menuItems = [
  getItem(<Link to={"/"}>数据概览</Link>, "/", <HomeOutlined />),
  getItem(<Link to={"/article"}>内容管理</Link>, "/article", <DiffOutlined />),
  getItem(<Link to={"/publish"}>发布文章</Link>, "/publish", <EditOutlined />),
];

const GeekLayout = () => {
  const location = useLocation();
  const { userStore, loginStore } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      userStore.getUserInfo().then();
    };
  }, [userStore]);

  const logout = () => {
    loginStore.logout();
    navigate("/login");
  };

  return (
    <Layout>
      <Header className={"header"}>
        <div className="logo"></div>
        <div className="user-info">
          <span className="username">{userStore.userInfo.name}</span>
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
      <Layout>
        <Sider width={200} className={"site-layout-background"}>
          <Menu
            items={menuItems}
            mode={"inline"}
            theme={"dark"}
            defaultSelectedKeys={[location.pathname]}
            style={{ height: "100%", borderRight: 0 }}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet></Outlet>
        </Layout>
      </Layout>
    </Layout>
  );
};

// 使用 mobx 的组件必须 observer 否则无法响应数据变化
export default observer(GeekLayout);
