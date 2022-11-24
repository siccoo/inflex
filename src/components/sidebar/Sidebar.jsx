import React from "react";
import { Layout, Menu } from "antd";

import VandelayLogo from "../../assets/img/Logo.png";
import QuestionImg from "../../assets/img/questionImg.png";
import {ReactComponent as DashboardIcon} from "../../assets/img/dashboard.svg";
import {ReactComponent as BillingIcon} from "../../assets/img/billing.svg";
import {ReactComponent as ProfileIcon} from "../../assets/img/profile.svg";
import {ReactComponent as RTLIcon} from "../../assets/img/rtl.svg";
import {ReactComponent as SigninIcon} from "../../assets/img/signin.svg";
import {ReactComponent as SignupIcon} from "../../assets/img/signup.svg";
import {ReactComponent as TablesIcon} from "../../assets/img/tables.svg";

import "./sidebar.css";
import Topbar from "../topbar/Topbar";
import Bottom from "../bottom/Bottom";

const { Content, Sider } = Layout;

const Sidebar = () => (
  <Layout
    style={{
      height: "100vh",
      overflow: "hidden",
      background: "#F8F9FA",
    }}
  >
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
      <div className="logo" style={{ padding: 5 }}>
        <img src={VandelayLogo} className="vanLogo" alt="" />
      </div>

      <hr
        className="line"
        style={{
          width: "233.25px",
          height: "0px",
          left: "24.5px",
          top: "94.5px",
          color: "#e0e1e2",
          background: "#e0e1e2"
        }}
      />
      <Menu
        className="sidebar__layout-menu"
        mode="inline"
        defaultSelectedKeys={["7"]}
        items={[
          {
            key: "1",
            icon: <DashboardIcon />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <TablesIcon />,
            label: "Tables",
          },
          {
            key: "3",
            icon: <BillingIcon />,
            label: "Billing",
          },
          {
            key: "4",
            icon: <RTLIcon />,
            label: "RTL",
          },
          {
            label: "ACCOUNT PAGES",
          },
          {
            key: "5",
            icon: <ProfileIcon />,
            label: "Profile",
          },
          {
            key: "6",
            icon: <SigninIcon />,
            label: "Sign In",
          },
          {
            key: "7",
            icon: <SignupIcon />,
            label: "Sign Up",
          },
        ]}
      />
      <div className="sidebar__layout-box">
        <img
          src={QuestionImg}
          alt=""
          style={{
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "7px",
          }}
        />
        <p>Need help?</p>
        <p>Please check our docs</p>
        <span
          style={{
            background: "#ffffff",
            borderRadius: 12,
            padding: "5px 47px",
            fontWeight: "700",
            fontSize: "10px",
            lineHeight: "150%",
            textAlign: "center",
            color: "#2D3748",
            textTransform: "uppercase",
          }}
        >
          Documentation
        </span>
      </div>
    </Sider>
    <Layout>
      <Topbar />
      <Content
        style={{
          margin: "24px 16px 0",
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
      <Bottom />
    </Layout>
  </Layout>
);

export default Sidebar;
