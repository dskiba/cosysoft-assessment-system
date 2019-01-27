import React from "react";
import { Redirect, Route, Switch } from "react-router";

import routes from "../definition";
import Users from "containers/Users";
import UserEdit from "containers/UserEdit";

class index extends React.Component {
  static propTypes = {};

  render() {
    return (
      <Switch>
        <Route
          exact
          key={routes.users}
          path={routes.users}
          render={() => <Users />}
        />
        <Route
          exact
          key={routes.users}
          path={routes.users + "/:id"}
          render={props => <UserEdit id={props.match.params.id} />}
        />
        <Redirect to={routes.users} />
      </Switch>
    );
  }
}

export default index;
