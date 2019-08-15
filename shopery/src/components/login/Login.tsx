import React, { useState } from "react";
import axios from "axios";
// Import custom hook
import { useFormValidation } from "../../hooks/useFormValidation";
// Import form validation function to work with custom hook
import validateForm from "../../hooks/validateForm";
// Import styled components
import {
  Container,
  FormContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledLink,
  StyledFormError
} from "../common-styled-components/common";
// Import components
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import BackToLanding from "../back-to-landing/BackToLanding";
import Loading from "../loading-animation/Loading";
// Import interfaces
import { FormState } from "../../hooks/interfaces";
import { RouteComponentProps } from "react-router-dom";
// Initial state for Login component
const initialState: FormState = {
  email: "",
  password: ""
};

const Login: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
  const [dbError, setDBerror] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Serves as callback for the custom hook
  const authenthicateUser = async (): Promise<void> => {
    const { email, password } = values;
    const url = "http://localhost:8000/api/v1.0/users/login";
    try {
      setIsLoading(true);
      await axios.post(url, {
        email,
        password
      });
      setDBerror("");
      setIsLoading(false);
      history.push("/");
    } catch (err) {
      setDBerror(err.response.data.payload.message);
      setIsLoading(false);
    }
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    isSubmitting,
    errors
  } = useFormValidation(initialState, validateForm, authenthicateUser);
  // Helps with styling input elements (prop).
  const checkForError: boolean =
    (errors.email ? true : false) || dbError.length !== 0;

  return (
    <Container>
      <BackToLanding page="/landing" />
      <Logo />
      <FormContainer>
        <h2>Login</h2>
        <hr />
        <StyledForm noValidate onSubmit={handleSubmit}>
          <StyledLabel>E-mail</StyledLabel>
          <StyledInput
            styleError={checkForError}
            name="email"
            type="email"
            placeholder="address@email.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <StyledFormError>{errors.email}</StyledFormError>}
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            styleError={checkForError}
            name="password"
            type="password"
            placeholder="********"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && (
            <StyledFormError>{errors.password}</StyledFormError>
          )}
          {dbError && <StyledFormError>{dbError}</StyledFormError>}
          {isLoading ? (
            <Loading />
          ) : (
            <StyledButton disabled={isSubmitting} formButton type="submit">
              Login
            </StyledButton>
          )}
        </StyledForm>
        <StyledLink to="/register">
          <p>Don't have an account? Click here to Sign Up!</p>
        </StyledLink>
        <StyledLink to="/users/forgot-password">
          <p>Forgot Password?</p>
        </StyledLink>
      </FormContainer>
      <Footer />
    </Container>
  );
};
export default Login;
