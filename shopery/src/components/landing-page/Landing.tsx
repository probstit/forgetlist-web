import React from "react";

import {
  LandingContainer,
  Header,
  ButtonsContainer,
  LoginButton,
  RegisterButton,
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
        <LoginButton>Login</LoginButton>
      </StyledLink>
      <p>OR</p>
      <StyledLink to="/register">
        <RegisterButton>Create a new account</RegisterButton>
      </StyledLink>
    </ButtonsContainer>

    <Footer>
      <p>Copyright &copy; Shopery 2019</p>
    </Footer>
  </LandingContainer>
);

export default LandingPage;
