import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Users from "../containers/Users/index";
import BaseLayout from "../components/Layout/index";
import UserEdit from "../containers/UserEdit/index";
import { MakeRouteWithSubRoutes } from "./MakeRouteWithSubRoutes";

const fetchXYZApiRoutes = () => {
  return [
    {
      path: "/HelloWorld",
      component: "AAA"
    }
  ];
};

const routes = [
  {
    path: "/Users",
    component: Users,
    routes: [
      {
        path: "/Users/:userId",
        component: UserEdit,
        routes: fetchXYZApiRoutes
      }
    ]
  },
  {
    path: "/:WhereTheHeckIsThat",
    component: Users
  }
];

export const Routes = ({}) => (
  <div>
    <BaseLayout>
      <Switch>
        {routes.map((route, index) => (
          <MakeRouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </BaseLayout>
  </div>
);
