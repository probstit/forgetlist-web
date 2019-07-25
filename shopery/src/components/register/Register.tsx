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

const Register: React.FC = (): JSX.Element => (
  <Container>
    <BackToLanding />
    <Logo />
    <FormContainer>
      <h2>Register</h2>
      <hr />
      <StyledForm>
        First Name
        <br />
        <StyledInput
          type="text"
          name="firstname"
          placeholder="Ex. John"
          required
        />
        <br />
        Last Name
        <br />
        <StyledInput
          type="text"
          name="lastname"
          placeholder="Ex. Doe"
          required
        />
        <br />
        E-mail
        <br />
        <StyledInput
          type="email"
          name="email"
          placeholder="address@mail.com"
          required
        />
        <br />
        Password
        <br />
        <StyledInput
          type="password"
          name="password"
          placeholder="********"
          required
        />
        <StyledButton type="submit">Create Account</StyledButton>
      </StyledForm>
    </FormContainer>
    <Footer />
  </Container>
);

export default Register;
