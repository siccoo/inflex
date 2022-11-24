import React from "react";
import { Layout, Breadcrumb } from "antd";

const { Header } = Layout;

const Topbar = () => {
  return (
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0,
        }}
      >
        <Breadcrumb
          style={{
            // margin: "16px 0",
            padding: 10
          }}
        >
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item>Tables</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
  );
};

export default Topbar;
