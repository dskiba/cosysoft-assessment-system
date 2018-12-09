import React, { Component } from "react";
import { Table, Divider, Icon } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }
];

const columns2 = [
  {
    title: "",
    dataIndex: "",
    key: ""
  },
  {
    title: "",
    dataIndex: "",
    key: ""
  },
  {
    title: "",
    dataIndex: "",
    key: ""
  },
  {
    title: "",
    dataIndex: "",
    key: ""
  },
  {
    title: "",
    dataIndex: "",
    key: ""
  },
  {
    title: "",
    dataIndex: "",
    key: ""
  },
  {
    title: "",
    dataIndex: "",
    key: ""
  },
  {
    title: "",
    dataIndex: "",
    key: ""
  },
  {
    title: "",
    dataIndex: "",
    key: ""
  },
  {
    title: "",
    dataIndex: "",
    key: ""
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 150,
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 70
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Action",
    key: "action",
    width: 360,
    render: (text, record) => (
      <span>
        <a href="javascript:;">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
        <Divider type="vertical" />
        <a href="javascript:;" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    )
  }
];

const usersList = [
  {
    id: "1",
    username: "admin",
    password: "admin",
    email: "admin@cosy.ru",
    phone: "89297675634",
    birthdate: "01-02-1992",
    role: "backend developer",
    experience_lvl: "senior",
    service_role: "ADMIN",
    hire_date: "01-01-1970",
    job_type: "employee",
    last_assessment_date: "01-10-2018",
    next_assessment_date: "02-04-2019",
    salary: 100000
  }
];

class Users extends Component {
  render() {
    return <Table dataSource={dataSource} columns={columns} />;
  }
}

export default Users;
