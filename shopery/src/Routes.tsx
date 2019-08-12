import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./components/landing-page/Landing";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ForgotPassword from "./components/forgot-password/Forgot-password";
import ResetPassword from "./components/forgot-password/Reset-password";
import Main from "./components/main/Main";
import NoMatch from "./components/no-match/NoMatch";

const Routes: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/landing" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/users/forgot-password" component={ForgotPassword} />
      <Route path="/users/reset-password" component={ResetPassword} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
