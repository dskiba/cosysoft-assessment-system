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
      <Link
        render={(location, onNavigate) => (
          <div className="logo">
            {props.isCollapsed ? (
              <div className="shortlogo" onClick={() => onNavigate("/")}>
                CS
              </div>
            ) : (
              <div className="fulllogo" onClick={() => onNavigate("/")}>
                <div className="title">CosySoft</div>
                <div className="subtitle">assessment system</div>
              </div>
            )}
          </div>
        )}
      />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="user" />
          <Link
            render={(location, onNavigate) => (
              <span onClick={() => onNavigate(`/users`)}>
                Таблица пользователей{" "}
              </span>
            )}
          />
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
