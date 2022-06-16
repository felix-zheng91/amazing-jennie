import { Layout, Menu, Popconfirm } from "antd";
import {
  DiffOutlined,
  EditOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Header, Sider } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const menuItems = [
  getItem("数据概览", 1, <HomeOutlined />),
  getItem("内容管理", 2, <DiffOutlined />),
  getItem("发布文章", 3, <EditOutlined />),
];

const GeekLayout = () => {
  return (
    <Layout>
      <Header className={"header"}>
        <div className="logo"></div>
        <div className="user-info">
          <span className="username">user.name</span>
          <span className="user-logout">
            <Popconfirm title={"确认退出?"} okText={"退出"} cancelText={"取消"}>
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
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          内容
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GeekLayout;
