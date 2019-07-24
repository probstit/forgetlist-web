import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./components/landing-page/landing";

const Routes: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => "Homepage"} />
      <Route path="/landing" component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
