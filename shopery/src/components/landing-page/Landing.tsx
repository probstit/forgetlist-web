import React from "react";

import {
  Container,
  StyledLink,
  StyledButton
} from "../common-styled-components/common";
import { Description, ButtonsContainer } from "./landing-styles";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";

const LandingPage: React.FC = (): JSX.Element => (
  <Container>
    <Logo />

    <Description>
      <h4>
        <span>Team up</span> with your friends for a better shopping experience.
      </h4>
    </Description>

    <ButtonsContainer>
      <StyledLink to="/login">
        <StyledButton>Login</StyledButton>
      </StyledLink>
      <p>OR</p>
      <StyledLink to="/register">
        <StyledButton reversed>Create a new account</StyledButton>
      </StyledLink>
    </ButtonsContainer>

    <Footer />
  </Container>
);

export default LandingPage;
