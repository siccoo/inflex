import React from "react";
import { Layout, Breadcrumb } from "antd";

import SigninImg from "../../assets/img/topbarSignin.png";
import NotificationImg from "../../assets/img/notification.png";
import SettingsImg from "../../assets/img/settings.png";

import "./topbar.css";

const { Header } = Layout;

const Topbar = () => {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{
        padding: 0,
        display: "flex",
        // justifyContent: "space-between"
      }}
    >
      <div>
        <ul class="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Pictures</a>
          </li>
        </ul>
      </div>
      <div className="topbar_right">
        <div className="item">
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="item">
          <img src={SigninImg} alt="" style={{ width: 15, height: 15 }} />
          <p>Sign In</p>
        </div>
        <div className="item">
          <img src={SettingsImg} alt="" style={{ width: 15, height: 15 }} />
        </div>
        <div className="item">
          <img src={NotificationImg} alt="" style={{ width: 15, height: 15 }} />
        </div>
      </div>
    </Header>
  );
};

export default Topbar;
