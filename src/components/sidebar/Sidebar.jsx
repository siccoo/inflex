import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import VandelayLogo from "../../assets/img/Logo.png";


import "./sidebar.css";
import Topbar from '../topbar/Topbar';
import Bottom from '../bottom/Bottom';

const { Content, Footer, Sider } = Layout;

const Sidebar = () => (
  <Layout style={{ 
    height: "100vh", 
    overflow: "hidden",
    background: "#F8F9FA" 
    }}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className="sidebar__layout"
    >
      <div className="logo" style={{padding: 10}}>
        <img src={VandelayLogo} alt="" />
      </div>
      <Menu
        // theme="dark"
        className='sidebar__layout-menu'
        mode="inline"
        defaultSelectedKeys={['4']}
        items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
      />
    </Sider>
    <Layout>
      <Topbar />
      <Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
          content
        </div>
      </Content>
      <Bottom/>
    </Layout>
  </Layout>
);

export default Sidebar;
