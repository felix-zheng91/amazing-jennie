import { FC, useState } from "react";
import defaultProps from "@/pages/LayoutPage/_defaultProps";
import {
  PageContainer,
  ProBreadcrumb,
  ProLayout,
} from "@ant-design/pro-components";
import "./index.scss";
import { Link, Outlet } from "react-router-dom";

const LayoutPage: FC = () => {
  const pathName = location.pathname;
  const [pathname, setPathname] = useState(pathName);

  return (
    <div className={"layout"}>
      <ProLayout
        location={{ pathname }}
        siderWidth={200}
        {...defaultProps}
        title={"Amazon Tools"}
        navTheme={"light"}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
          }
          return (
            <Link
              onClick={() => setPathname(menuItemProps.path || "/")}
              to={menuItemProps.path}
            >
              {defaultDom}
            </Link>
          );
        }}
      >
        <PageContainer
          pageHeaderRender={() => {
            return null;
          }}
        >
          <Outlet></Outlet>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default LayoutPage;
