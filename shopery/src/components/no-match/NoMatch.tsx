import React from "react";

import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import StyledNotFound from "./no-match-styles";

const NoMatch: React.FC = (): JSX.Element => (
  <StyledNotFound>
    <Logo />
    <h2>
      We are sorry! Looks like we couldn't find the page you were looking for!
    </h2>
    <Footer />
  </StyledNotFound>
);

export default NoMatch;
