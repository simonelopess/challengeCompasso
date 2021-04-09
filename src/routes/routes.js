import React from "react";
import { Switch, Route } from "react-router-dom";

import Users from "../pages/Users";
import Repo from "../pages/Repos";

const Routes = () => (
  <Switch>
    <Route path="/" component={Users} exact />
    <Route path="/repositories" component={Repo} />
  </Switch>
);

export default Routes;
