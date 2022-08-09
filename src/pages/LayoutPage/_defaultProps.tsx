import { AntDesignOutlined } from "@ant-design/icons";
import {
  AiOutlineDatabase,
  GoDashboard,
  RiAdvertisementLine,
  TbRelationManyToMany,
} from "react-icons/all";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/",
        name: "看板",
        icon: (
          <span className={"anticon"}>
            <GoDashboard />
          </span>
        ),
      },
      {
        path: "/detail",
        name: "详细数据",
        icon: (
          <style className={"anticon"}>
            <AiOutlineDatabase />
          </style>
        ),
      },
      {
        name: "广告数据",
        icon: (
          <span className={"anticon"}>
            <RiAdvertisementLine />
          </span>
        ),
        path: "/ad-detail",
        component: "./ListTableList",
      },
      {
        name: "SKU & ASIN",
        icon: (
          <span className={"anticon"}>
            <TbRelationManyToMany />
          </span>
        ),
        path: "/sku-relation",
        component: "./ListTableList",
      },
      {
        path: "https://ant.design",
        name: "Ant Design",
        icon: <AntDesignOutlined />,
      },
    ],
  },
};
