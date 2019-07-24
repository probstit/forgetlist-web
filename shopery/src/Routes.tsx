import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./components/landing-page/landing";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NoMatch from "./components/no-match/NoMatch";

const Routes: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => "Homepage"} />
      <Route path="/landing" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
