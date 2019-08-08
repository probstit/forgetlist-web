import React from "react";

import {
  Container,
  StyledButton,
  FormContainer,
  StyledForm,
  StyledLink
} from "../common-styled-components/common";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import BackToLanding from "../back-to-landing/BackToLanding";

const Login: React.FC = (): JSX.Element => (
  <Container>
    <BackToLanding />
    <Logo />
    <FormContainer>
      <h2>Login</h2>
      <hr />
      <StyledForm>
        E-mail <br />
        <input type="email" placeholder="address@email.com" required />
        <br />
        Password <br />
        <input type="password" placeholder="********" required />
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
      <StyledLink to="/register">
        <p>Don't have an account? Click here to Sign Up!</p>
      </StyledLink>
    </FormContainer>
    <Footer />
  </Container>
);
export default Login;
