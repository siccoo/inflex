import React from "react";
import { Layout } from "antd";

import "./bottom.css"

const { Footer } = Layout;

const Bottom = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        background: "#F8F9FA",
        display: "flex",
        justifyContent: "space-between",
        padding: "4px 20px"
      }}
    >
      <div className="bottom_right">
        <p>
          © 2022, Made with ❤️ by <span style={{color: "#4FD1C5"}}>Tektorch</span> for a better web
        </p>
      </div>
      <div className="bottom_left">
        <ul style={{display: "flex", listStyleType: "none", gap: "20px"}}>
          <li>About</li>
          <li>Privacy</li>
          <li>Blog</li>
          <li>License</li>
        </ul>
      </div>
    </Footer>
  );
};

export default Bottom;
