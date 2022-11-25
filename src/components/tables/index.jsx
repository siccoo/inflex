import { Space, Table, Tag } from "antd";
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

import "./tables.css";

const columns = [
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
    render: (text, row) => {
      return (
        <span style={{display: "flex", }}>
        <img src={row.imgData} className="table_img" alt="" />{" "} <p>{text} <br /><small>{row.email}</small></p>
        </span>
      )
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
          <p>{position.post}</p>
        </span>
      )
    }
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (text) => (
      <>
        <p >{text}</p>
      </>
    ),
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
        <a className="edit_btn" href="/">Edit</a>
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
    name: "Frank Costanza",
    imgData: ImgFive,
    email: "frank@vandelay.com",
    post: "Developer",
    function: "Programmer",
    status: "Online",
    employed: "14/06/21",
  },
  {
    key: "6",
    author: "Art VanDelay",
    imgData: ImgSix,
    email: "art.ie@vandelay.com",
    post: "UI/UX Design",
    function: "Designer",
    status: "Online",
    employed: "14/06/21",
  },
];

const columnsOne = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="/">{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const dataOne = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const TablesData = () => {
  return (
    <>
      <div className="table">
        <p className="table_header" >Author's Table</p>
        <Table columns={columns} dataSource={data} />
      </div>

      <div className="table">
        <p className="table_header">Projects</p>
        <span style={{padding: "10px 0px 0px 10px"}}> <img src={CheckedIcon} alt="" /> 30 done this month</span>
        <Table columns={columnsOne} dataSource={dataOne} />
      </div>
    </>
  );
};

export default TablesData;
