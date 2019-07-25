import React from "react";

import {
  Container,
  StyledButton,
  FormContainer,
  StyledForm,
  StyledInput
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
        <StyledInput type="email" placeholder="address@email.com" required />
        <br />
        Password <br />
        <StyledInput type="password" placeholder="********" required />
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </FormContainer>
    <Footer />
  </Container>
);
export default Login;
