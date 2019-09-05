import React from "react";
import { Layout, Menu, Icon } from "antd";
import { goToMainPage, goTo } from "../../../lib/routing";

const shortLogo = () => {
  return (
    <div
      className="shortlogo"
      onClick={() => {
        goToMainPage();
      }}
    >
      CS
    </div>
  );
};

const fullLogo = () => (
  <div
    className="fulllogo"
    onClick={() => {
      goToMainPage();
    }}
  >
    <div className="title">CosySoft</div>
    <div className="subtitle">assessment system</div>
  </div>
);

export function Sider({ isCollapsed }) {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={isCollapsed}
      width="230"
    >
      <div className="logo">{isCollapsed ? shortLogo() : fullLogo()}</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span
            style={{ color: "white" }}
            onClick={() => {
              goTo("/Users");
            }}
          >
            Таблица пользователей
          </span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
