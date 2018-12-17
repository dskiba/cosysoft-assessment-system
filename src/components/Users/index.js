import React, { Component } from "react";
import { Table, Divider, Icon } from "antd";

const dataSource = [
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
    },
    {
        id: "2",
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

const columns = [
    {
        title: "Id",
        dataIndex: 'id',
        key: 'id',
        width: 100
    },
    {
        title: "Имя",
        dataIndex: "username",
        key: "username",
        width: 150,
        // eslint-disable-next-line
        render: text => <a href="#">{text}</a>
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
        width: 150,
    },
    {
        title: "Дата рождения",
        dataIndex: "birthdate",
        key: "birthdate",
        width: 150
    },
    {
        title: "Позиция",
        dataIndex: "role",
        key: "role",
        width: 150
    },
    {
        title: "Уровень",
        dataIndex: "experience_lvl",
        key: "experience_lvl",
        width: 150
    },
    {
        title: "Дата приема на работу",
        dataIndex: "hire_date",
        key: "hireDate",
        width: 150
    },
    {
        title: "Последний ассесмент",
        dataIndex: "last_assessment_date",
        key: "last_assessment_date",
        width: 150
    },
    {
        title: "Заработная плата",
        dataIndex: "salary",
        key: "salary",
        width: 150
    },
    {
        title: "Действия",
        key: "action",
        width: 360,
        render: (text, record) => (
            <span>
        <a href="/">Action 一 {record.username}</a>
        <Divider type="vertical" />
        <a href="/">Delete</a>
        <Divider type="vertical" />
        <a href="/" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
        )
    }
];

class Users extends Component {
    render() {
        return <Table dataSource={dataSource} columns={columns} />;
    }
}

export default Users;
