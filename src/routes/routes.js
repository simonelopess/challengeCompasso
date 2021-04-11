import React from "react";
import { Switch, Route } from "react-router-dom";

import Users from "../pages/Users";

const Routes = () => (
  <Switch>
    <Route path="/" component={Users} exact />
  </Switch>
);

export default Routes;
