import React from "react";

import StyledBackButton from "./back-to-landing-styles";
import { StyledLink } from "../common-styled-components/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToLanding: React.FC = (): JSX.Element => (
  <StyledBackButton>
    <StyledLink to="/landing">
      <FontAwesomeIcon icon="angle-left" />
    </StyledLink>
  </StyledBackButton>
);

export default BackToLanding;
