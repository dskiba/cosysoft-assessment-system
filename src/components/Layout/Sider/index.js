import React from "react";
import { Layout, Menu, Icon } from "antd";

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
          <span>Таблица пользователей</span>
        </Menu.Item>
        {/*<Menu.Item key="2">*/}
          {/*<Icon type="video-camera" />*/}
          {/*<span>nav 2</span>*/}
        {/*</Menu.Item>*/}
        {/*<Menu.Item key="3">*/}
          {/*<Icon type="upload" />*/}
          {/*<span>nav 3</span>*/}
        {/*</Menu.Item>*/}
      </Menu>
    </Layout.Sider>
  );
}
