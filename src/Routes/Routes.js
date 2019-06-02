import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Users from "../containers/Users/index";
import BaseLayout from "../components/Layout/index";
import UserEdit from "../containers/UserEdit/index";

export const Routes = () => {
  return (
    <div>
      <BaseLayout>
        <Switch>
          <Route exact path={"/Users"} component={Users} />
          <Route
            exact
            path={"/Users/:id"}
            render={props => <UserEdit {...props} />}
          />
          <Route exact path={"/"}>
            <Redirect to={"/Users"} />
          </Route>
          <Route component={Users} />
        </Switch>
      </BaseLayout>
    </div>
  );
};
