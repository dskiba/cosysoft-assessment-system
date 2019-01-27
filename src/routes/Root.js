import React from "react";

import { Redirect, Route, Switch } from "react-router";

import Users from "./Users";

// import Admin from 'componets/pages/admin';
// import Management from 'componets/pages/management';
// import Statistics from 'componets/pages/statist/ics';
import routes from "./definition";

class Root extends React.Component {
  static propTypes = {};

  render() {
    return (
      <Switch>
        <Route
          key={routes.users}
          path={routes.users}
          render={() => <Users baseUrl={routes.users} />}
        />
        <Route
          exact
          path={routes.users + "/:id"}
          render={props => <Users id={props.match.params.id} />}
        />

        <Redirect to={routes.users} />
      </Switch>
    );
  }
}

export default Root;
