import React, { useState } from "react";
import axios from "axios";
// Import custom hook
import { useFormValidation } from "../../hooks/useFormValidation";
// Import form validation function
import validateForm from "../../hooks/validateForm";
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
import { FormState } from "../../hooks/interfaces";

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

const Register: React.FC = (): JSX.Element => {
  const [dbError, setDBerror] = useState<string>("");
  const [response, setResponse] = useState<any>(null);

  const registerUser = async () => {
    const { firstName, lastName, email, password } = values;
    const url = "http://localhost:8000/api/v1.0/users/register";
    try {
      const res = await axios.post(url, {
        firstName,
        lastName,
        email,
        password
      });
      setResponse(res);
    } catch (err) {
      setDBerror(err.response.data.payload.message);
    }
  };

  const {
    values,
    handleChange,
    handleSumbit,
    handleBlur,
    errors,
    isSubmitting
  } = useFormValidation(initialState, validateForm, registerUser);

  return (
    <Container>
      <BackToLanding page="/landing" />
      <Logo />
      {response ? (
        <p className="success-message">{response.data.message}</p>
      ) : (
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
            {dbError && <StyledFormError>{dbError}</StyledFormError>}

            <StyledButton disabled={isSubmitting} type="submit">
              Create Account
            </StyledButton>
          </StyledForm>
          <StyledLink to="/login">
            <p>Already have an account? Sign in instead!</p>
          </StyledLink>
        </FormContainer>
      )}
      <Footer />
    </Container>
  );
};

export default Register;
