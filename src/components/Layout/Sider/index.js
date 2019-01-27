import React from "react";
import { Layout, Menu, Icon } from "antd";
import Link from "containers/Navigation/Link";

export function Sider(props) {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={props.isCollapsed}
      width="230"
    >
      <div className="logo">
        {props.isCollapsed ? (
          <div className="shortlogo">CS</div>
        ) : (
          <div className="fulllogo">
            <div className="title">CosySoft</div>
            <div className="subtitle">assessment system</div>
          </div>
        )}
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="user" />
          <a>123</a>
          <Link
            render={(location, onNavigate) => (
              <a onClick={() => onNavigate(`/users`)}>Таблица пользователей </a>
            )}
          />
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
