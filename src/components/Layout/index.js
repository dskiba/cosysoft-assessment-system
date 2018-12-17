import React, { Component } from "react";
import { Layout } from "antd";

import { Sider } from "./Sider";
import { Header } from "./Header";
import "./layout.css";

const { Content } = Layout;

class mainLayout extends Component {
  state = {
    isCollapsed: false
  };

  onToggle = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };

  render() {
    const { isCollapsed } = this.state;

    return (
      <Layout style={{ height: "100vh" }}>
        <Sider isCollapsed={isCollapsed} />
        <Layout>
          <Header isCollapsed={isCollapsed} onToggle={this.onToggle} />
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
