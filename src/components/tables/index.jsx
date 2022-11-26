import { Space, Table } from "antd";
import React from "react";

import CheckedIcon from "../../assets/img/checked.png";
import ImgOne from "../../assets/img/img1.png";
import ImgTwo from "../../assets/img/img2.png";
import ImgThree from "../../assets/img/img3.png";
import ImgFour from "../../assets/img/img4.png";
import ImgFive from "../../assets/img/img5.png";
import ImgSix from "../../assets/img/img6.png";

import XdImg from "../../assets/img/xdImg.png";
import AtlasianImg from "../../assets/img/atlasian.png";
import SpotifyImg from "../../assets/img/spotify.png";
import SlackImg from "../../assets/img/slack.png";
import JiraImg from "../../assets/img/jira.png";
import EditIcon from "../../assets/img/editImg.png";

import "./tables.css";

const columns = [
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
    render: (text, row) => {
      return (
        <span style={{ display: "flex", marginBottom: "0px" }}>
          <img src={row.imgData} className="table_img" alt="" />{" "}
          <p>
            {text} <br />
            <small className="table_email">{row.email}</small>
          </p>
        </span>
      );
    },
  },
  {
    title: "Function",
    dataIndex: "function",
    key: "function",
    render: (role, position) => {
      return (
        <span>
          {role}
          <p className="table_post">{position.post}</p>
        </span>
      );
    },
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      if (status === "Online") {
        return (
          <span
            style={{
              background: "#48BB78",
              borderRadius: "8px",
              padding: "5px",
              color: "#FFFFFF",
            }}
          >
            {status}
          </span>
        );
      } else {
        return (
          <span
            style={{
              background: "#CBD5E0",
              borderRadius: "8px",
              padding: "5px",
              color: "#FFFFFF",
            }}
          >
            {status}
          </span>
        );
      }
    },
  },
  {
    title: "Employed",
    dataIndex: "employed",
    key: "employed",
  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a className="edit_btn" href="/">
          Edit
        </a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    author: "Elaine Benes",
    imgData: ImgOne,
    email: "elaine@vandelay.com",
    post: "Organization",
    function: "Manager",
    status: "Online",
    employed: "14/06/21",
  },
  {
    key: "2",
    author: "Sidra Holland",
    imgData: ImgTwo,
    email: "sidra@vandelay.com",
    post: "Developer",
    function: "Programmer",
    status: "Offline",
    employed: "14/06/21",
  },
  {
    key: "3",
    author: "Cosmo Kramer",
    imgData: ImgThree,
    email: "kramer@vandelay.com",
    post: "Projects",
    function: "Executive",
    status: "Online",
    employed: "14/06/21",
  },
  {
    key: "4",
    author: "Newman",
    imgData: ImgFour,
    email: "newman@usps.com",
    post: "Organization",
    function: "Manager",
    status: "Online",
    employed: "14/06/21",
  },
  {
    key: "5",
    author: "Frank Costanza",
    imgData: ImgFive,
    email: "frank@vandelay.com",
    post: "Developer",
    function: "Programmer",
    status: "Offline",
    employed: "14/06/21",
  },
  {
    key: "6",
    author: "Art VanDelay",
    imgData: ImgSix,
    email: "art.ie@vandelay.com",
    post: "UI/UX Design",
    function: "Designer",
    status: "Offline",
    employed: "14/06/21",
  },
];

const columnsOne = [
  {
    title: "companies",
    dataIndex: "companies",
    key: "companies",
    render: (text, row) => {
      return (
        <span style={{ display: "flex", marginBottom: "0px" }}>
          <img src={row.imgData} className="tableOne_img" alt="" />{" "}
          <p>{text}</p>
        </span>
      );
    },
  },
  {
    title: "budget",
    dataIndex: "budget",
    key: "budget",
  },
  {
    title: "status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "completion",
    key: "completion",
    dataIndex: "completion",
    render: (completion, row) => {
      return (
        <>
          <p>{completion}</p>
          {/* {completion.map((progrex) => {
            if(completion === "60%") {
              <div style={{height:"24px", width:"60%"}}></div>
            }
          })} */}
        </>
      );
    },
  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a href="/" className="edit_btn">
          <img src={EditIcon} alt="edit" />
        </a>
      </Space>
    ),
  },
];
const dataOne = [
  {
    key: "1",
    companies: "Software Import/Export",
    imgData: XdImg,
    budget: "$14,000",
    status: "Working",
    completion: "60%",
  },
  {
    key: "2",
    companies: "Add Progress Track",
    imgData: AtlasianImg,
    budget: "$3,000",
    status: "Canceled",
    completion: "10%",
  },
  {
    key: "3",
    companies: "Fix Platform Errors",
    imgData: SlackImg,
    budget: "Not set",
    status: "Done",
    completion: "100%",
  },
  {
    key: "4",
    companies: "Launch our Mobile App",
    imgData: SpotifyImg,
    budget: "$32,000",
    status: "Done",
    completion: "100%",
  },
  {
    key: "5",
    companies: "Add the New Pricing Page",
    imgData: JiraImg,
    budget: "$400",
    status: "Working",
    completion: "25%",
  },
];

const TablesData = () => {
  return (
    <>
      <div className="table">
        <p className="table_header">Author's Table</p>
        <Table columns={columns} dataSource={data} />
      </div>

      <div className="table">
        <p className="table_header">Projects</p>
        <span
          style={{
            padding: "10px 0px -30px 5px",
            color: "#A0AEC0",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "140%",
            marginLeft: 5,
          }}
        >
          {" "}
          <img
            src={CheckedIcon}
            alt=""
            style={{ width: "12px", height: "12px" }}
          />{" "}
          30 done this month
        </span>
        <Table columns={columnsOne} dataSource={dataOne} />
      </div>
    </>
  );
};

export default TablesData;
