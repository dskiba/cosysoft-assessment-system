import React from "react";
import { Layout, Menu, Icon } from "antd";
import { history, goToMainPage } from "../../../lib/routing";

export function Sider(props) {
  console.log(props);

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={props.isCollapsed}
      width="230"
    >
      <div className="logo">
        {props.isCollapsed ? (
          <div
            className="shortlogo"
            onClick={() => {
              goToMainPage();
            }}
          >
            CS
          </div>
        ) : (
          <div
            className="fulllogo"
            onClick={() => {
              goToMainPage();
            }}
          >
            <div className="title">CosySoft</div>
            <div className="subtitle">assessment system</div>
          </div>
        )}
      </div>
      )} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span
            style={{ color: "white" }}
            onClick={() => {
              goToMainPage();
            }}
          >
            Таблица пользователей
          </span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
