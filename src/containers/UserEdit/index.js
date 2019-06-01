import React, { Component } from "react";
import BaseLayout from "components/Layout";
import { dataSource } from "../Users/index";

class UserEdit extends Component {
  render() {
    console.log("UserEdit", this.props);
    const { id } = this.props;
    const user = dataSource.find(user => user.get("id") === id);

    return (
      <BaseLayout>
        <div>
          {user.entrySeq().map((field, index) => (
            <div
              style={{ marginBottom: "10px" }}
              key={`user_${id}_field${field[0]}`}
            >
              <span>{`${field[0]}:  ${field[1]}`}</span>
            </div>
          ))}
        </div>
      </BaseLayout>
    );
  }
}

export default UserEdit;
