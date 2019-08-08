import React from "react";
// Import custom hook
import { useRegisterValidation } from "../../hooks/registerHooks/useRegisterValidation";
// Import form validation function
import validateRegistration from "../../hooks/registerHooks/validateRegistration";
// Import styled components
import {
  Container,
  StyledButton,
  FormContainer,
  StyledForm,
  StyledLink,
  StyledFormError
} from "../common-styled-components/common";
// Import components
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import BackToLanding from "../back-to-landing/BackToLanding";
// Import interfaces
import { IRegisterState } from "../../hooks/interfaces";

const initialState: IRegisterState = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

const Register: React.FC = (): JSX.Element => {
  const {
    values,
    handleChange,
    handleSumbit,
    handleBlur,
    errors,
    isSubmitting
  } = useRegisterValidation(initialState, validateRegistration);

  return (
    <Container>
      <BackToLanding />
      <Logo />
      <FormContainer>
        <h2>Register</h2>
        <hr />
        <StyledForm noValidate onSubmit={handleSumbit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            placeholder="Ex. John"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.firstName && "inputError"}
          />
          {errors.firstName && (
            <StyledFormError>{errors.firstName}</StyledFormError>
          )}

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            placeholder="Ex. Doe"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.lastName && "inputError"}
          />
          {errors.lastName && (
            <StyledFormError>{errors.lastName}</StyledFormError>
          )}

          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="example@mail.com"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && "inputError"}
          />
          {errors.email && <StyledFormError>{errors.email}</StyledFormError>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            placeholder="********"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && "inputError"}
          />
          {errors.password && (
            <StyledFormError>{errors.password}</StyledFormError>
          )}

          <StyledButton disabled={isSubmitting} type="submit">
            Create Account
          </StyledButton>
        </StyledForm>
        <StyledLink to="/login">
          <p>Already have an account? Sign in instead!</p>
        </StyledLink>
      </FormContainer>
      <Footer />
    </Container>
  );
};

export default Register;
