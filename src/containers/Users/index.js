import React, {Component} from 'react';
import {Table, Divider, Icon} from 'antd';
import {Link} from 'react-router-dom';

export const dataSource = [
  {
    id: 's8c1rj7',
    username: 'admin',
    real_name: 'Админ',
    password: 'admin',
    email: 'admin@cosysoft.ru',
    phone: '89297675634',
    birthdate: '01-02-1992',
    role: 'backend developer',
    experience_lvl: 'senior',
    service_role: 'ADMIN',
    hire_date: '01-01-1970',
    job_type: 'employee',
    last_assessment_date: '01-10-2018',
    next_assessment_date: '02-04-2019',
    salary: 100000,
  },
  {
    id: '56ceemy',
    username: 'aleksander',
    real_name: 'Александр Фомин',
    password: 'asdasdas1',
    email: 'boss@cosysoft.ru',
    phone: '89063399354',
    birthdate: '22-09-1984',
    role: 'boss',
    experience_lvl: 'boss',
    service_role: 'ADMIN',
    hire_date: '01-01-1970',
    job_type: 'employee',
    last_assessment_date: '01-10-2018',
    next_assessment_date: '02-04-2019',
    salary: 9999999,
  },
  {
    id: '67ujan3',
    username: 'ilya',
    real_name: 'Илья Обухов',
    password: 'vbnfhu1gkd',
    email: 'graf.obukhov@cosysoft.ru',
    phone: '89178230787',
    birthdate: '22-09-1984',
    role: 'front-end developer',
    experience_lvl: 'senior',
    service_role: 'ADMIN',
    hire_date: '01-01-1970',
    job_type: 'employee',
    last_assessment_date: '01-10-2018',
    next_assessment_date: '02-04-2019',
    salary: 100000,
  },
  {
    id: 'xsbl3q2',
    username: 'inna',
    real_name: 'Инна Прохорова',
    password: 'sdfgg231sd',
    email: 'inna@cosysoft.ru',
    phone: '89277766331',
    birthdate: '22-09-1984',
    role: 'manager',
    experience_lvl: 'senior',
    service_role: 'ADMIN',
    hire_date: '01-01-1970',
    job_type: 'employee',
    last_assessment_date: '01-10-2018',
    next_assessment_date: '02-04-2019',
    salary: 100000,
  },
  {
    id: 'k2yko70',
    username: 'shandurenko',
    real_name: 'Александр Шандуренко',
    password: 'omaewamoushindeiru',
    email: 'shandurenko@cosysoft.ru',
    phone: '89297192971',
    birthdate: '12-07-1996',
    role: 'front-end developer',
    experience_lvl: 'regular',
    service_role: 'USER',
    hire_date: '01-01-1970',
    job_type: 'employee',
    last_assessment_date: '01-10-2018',
    next_assessment_date: '02-04-2019',
    salary: 100000,
  },
  {
    id: 'et5gm3f',
    username: 'ivan',
    real_name: 'Иван Лялякин',
    password: 'vbnfhu1gkd',
    email: 'ivan@cosysoft.ru',
    phone: '89277766331',
    birthdate: '22-09-1984',
    role: 'front-end developer',
    experience_lvl: 'senior',
    service_role: 'ADMIN',
    hire_date: '01-01-1970',
    job_type: 'employee',
    last_assessment_date: '01-10-2018',
    next_assessment_date: '02-04-2019',
    salary: 100000,
  },
  {
    id: 'eauki5m',
    username: 'doschaty',
    real_name: 'Таинственный Разработчик',
    password: 'vbnfhu1gkd',
    email: 'planks@cosysoft.ru',
    phone: '00010110100',
    birthdate: '22-09-1984',
    role: 'front-end developer',
    experience_lvl: 'over 9000',
    service_role: 'USER',
    hire_date: '01-01-1970',
    job_type: 'employee',
    last_assessment_date: '01-10-2018',
    next_assessment_date: '02-04-2019',
    salary: 9001,
  },
];

class Users extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Имя',
        dataIndex: 'real_name',
        key: 'real_name',
        width: 150,
        render: (text, record) => {
          const {url} = this.props.match;
          return <Link to={`${url}/${record.id}`}>{text}</Link>;
        },
      },

      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 150,
      },
      {
        title: 'Дата рождения',
        dataIndex: 'birthdate',
        key: 'birthdate',
        width: 150,
      },
      {
        title: 'Позиция',
        dataIndex: 'role',
        key: 'role',
        width: 200,
      },
      {
        title: 'Уровень',
        dataIndex: 'experience_lvl',
        key: 'experience_lvl',
        width: 100,
      },
      {
        title: 'Дата приема на работу',
        dataIndex: 'hire_date',
        key: 'hireDate',
        width: 150,
      },
      {
        title: 'Последний ассесмент',
        dataIndex: 'last_assessment_date',
        key: 'last_assessment_date',
        width: 150,
      },
      {
        title: 'З/П',
        dataIndex: 'salary',
        key: 'salary',
        width: 100,
      },
      {
        title: 'Действия',
        key: 'action',
        width: 360,
        render: (text, record) => (
          <span>
            <button onClick={() => this.onDelete(record.id)}> Delete</button>
            <Divider type="vertical" />
            <a href="/" className="ant-dropdown-link">
              More actions <Icon type="down" />
            </a>
          </span>
        ),
      },
    ];
    this.state = {
      users: dataSource,
    };
  }

  // componentDidMount() {}

  onDelete(id) {
    const filteredUsers = this.state.users.filter(
      user => user.get('id') !== id,
    );
    this.setState({users: filteredUsers});
  }

  render() {
    const {users} = this.state;
    return (
      <Table
        dataSource={users}
        columns={this.columns}
        rowKey={record => record.id}
      />
    );
  }
}

export default Users;
