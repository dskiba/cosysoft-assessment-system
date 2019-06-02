import React, { Component } from "react";
import { dataSource } from "../Users/index";

class UserEdit extends Component {
  render() {
    const { id } = this.props.match.params;
    const [user] = dataSource.filter(user => user.id === id);
    return (
      <div>
        {Object.keys(user).map((key, index) => (
          <div style={{ marginBottom: "10px" }} key={`user_${id}_field${key}`}>
            <span>{`${key}:  ${user[key]}`}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default UserEdit;
