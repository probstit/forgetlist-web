import React from "react";

import {
  LandingContainer,
  Header,
  ButtonsContainer,
  StyledButton,
  StyledLink,
  Footer
} from "./landing-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage: React.FC = (): JSX.Element => (
  <LandingContainer>
    <Header>
      <h1>
        Shopery <FontAwesomeIcon icon="shopping-basket" />
      </h1>
      <h4>
        <span>Team up</span> with your friends for a better shopping experience.
      </h4>
    </Header>

    <ButtonsContainer>
      <StyledLink to="/login">
        <StyledButton>Login</StyledButton>
      </StyledLink>
      <p>OR</p>
      <StyledLink to="/register">
        <StyledButton reversed>Create a new account</StyledButton>
      </StyledLink>
    </ButtonsContainer>

    <Footer>
      <p>Copyright &copy; Shopery 2019</p>
    </Footer>
  </LandingContainer>
);

export default LandingPage;
