import React from "react";

import useForm from "../../hooks/useForm";
import {
  Container,
  StyledButton,
  FormContainer,
  StyledForm,
  StyledInput,
  StyledLink
} from "../common-styled-components/common";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import BackToLanding from "../back-to-landing/BackToLanding";
import validate from "../../hooks/validateRegister";

const Register: React.FC = (): JSX.Element => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  return (
    <Container>
      <BackToLanding />
      <Logo />
      <FormContainer>
        <h2>Register</h2>
        <hr />
        <StyledForm noValidate onSubmit={handleSubmit}>
          <label>First Name</label>
          <br />
          <StyledInput
            type="text"
            name="firstName"
            value={values.firstName}
            placeholder="Ex. John"
            required
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
          <br />

          <label>Last Name</label>
          <br />
          <StyledInput
            type="text"
            name="lastName"
            value={values.lastName}
            placeholder="Ex. Doe"
            required
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
          <br />

          <label>E-mail</label>
          <br />
          <StyledInput
            type="email"
            name="email"
            value={values.email}
            placeholder="example@mail.com"
            required
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <br />

          <label>Password</label>
          <br />
          <StyledInput
            type="password"
            name="password"
            value={values.password}
            placeholder="********"
            required
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}

          <StyledButton type="submit">Create Account</StyledButton>
        </StyledForm>
        <StyledLink to="/login">
          <p>Already have an account? Sign up instead!</p>
        </StyledLink>
      </FormContainer>
      <Footer />
    </Container>
  );
};

export default Register;
