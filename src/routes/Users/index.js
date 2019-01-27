import React from "react";
import { Redirect, Route, Switch } from "react-router";

import routes from "../definition";
import Users from "../../components/Users";

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
        {/* <Route  #TODO: userPage
            exact
            key={routes.admin + BASE_ENTITY_LOCATION[type]}
            path={routes.admin + BASE_ENTITY_LOCATION[type] + "/:id"}
            render={props => (
              <EntityEdit type={type} id={props.match.params.id} />
            )}
          /> */}
        <Redirect to={routes.users} />
      </Switch>
    );
  }
}

export default index;
