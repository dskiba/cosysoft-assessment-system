import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import "./layout.css";

const { Header, Content, Sider } = Layout;

class mainLayout extends Component {
  state = {
    isCollapsed: false
  };

  toggle = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };

  render() {
    const { isCollapsed } = this.state;

    return (
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={isCollapsed}>
          <div className="logo">
            {isCollapsed ? (
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
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.isCollapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default mainLayout;
