import React from "react";
import { Layout, Icon } from "antd";

export function Header({ isCollapsed, onToggle }) {
  return (
    <Layout.Header style={{ background: "#fff", padding: 0 }}>
      <Icon
        className="trigger"
        type={isCollapsed ? "menu-unfold" : "menu-fold"}
        onClick={onToggle}
      />
    </Layout.Header>
  );
}
