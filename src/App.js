import React, { Component } from "react";
import "./App.css";
import MainLayout from "./components/Layout";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Users />
      </MainLayout>
    );
  }
}

export default App;
