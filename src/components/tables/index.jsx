import { Space, Table, Tag } from "antd";
import React from "react";

import CheckedIcon from "../../assets/img/checked.png";
import ImgOne from "../../assets/img/img1.png"

import "./tables.css";

const columns = [
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
    render: (text) => {
      return (
        <span style={{display: "flex", }}>
        <img src={ImgOne} className="table_img" alt="" />{" "} <p>{text} <br /><small>johndoe</small></p>
        </span>
      )
  },
  },
  {
    title: "Function",
    dataIndex: "function",
    key: "function",
    render: (text) => {
      return (
        <span>
          {text}
          Progemmer
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
    function: "Manager",
    status: "Online",
    employed: "14/06/21",
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
    status: ["cool", "teacher"],
  },
];

const columnsOne = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
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
